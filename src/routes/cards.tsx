import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { FACTS, TOPICS, checkItems, getChapter } from "@/lib/content";
import {
  cardId,
  dueCards,
  focusCardSession,
  newCards,
  startCardSession,
  useStudy,
} from "@/lib/store";
import { useHydrated } from "@/lib/use-hydrated";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Search = { chapter?: number; start?: boolean; fact?: number };

export const Route = createFileRoute("/cards")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    chapter:
      raw.chapter === undefined || raw.chapter === ""
        ? undefined
        : Number(raw.chapter),
    start:
      raw.start === true ||
      raw.start === 1 ||
      raw.start === "1" ||
      raw.start === "true"
        ? true
        : undefined,
    fact:
      raw.fact === undefined || raw.fact === ""
        ? undefined
        : Number(raw.fact),
  }),
  component: CardsPage,
});

const RATES: { q: number; label: string; hint: string }[] = [
  { q: 0, label: "Blank", hint: "No idea" },
  { q: 1, label: "Wrong", hint: "Missed it" },
  { q: 2, label: "Almost", hint: "Close" },
  { q: 3, label: "Hard", hint: "Got it" },
  { q: 4, label: "Good", hint: "Solid" },
  { q: 5, label: "Easy", hint: "Instant" },
];

function launch(chFilter?: number) {
  const s = startCardSession(chFilter);
  if (!s) {
    toast(
      chFilter
        ? `No cards waiting for chapter ${chFilter}.`
        : "Nothing to review right now.",
    );
    return;
  }
  useStudy.getState().setActiveSession(s);
}

function CardsPage() {
  const { chapter, start, fact } = Route.useSearch();
  const nav = useNavigate();
  const ready = useHydrated();
  const session = useStudy((s) => s.activeSession);
  const setSession = useStudy((s) => s.setActiveSession);
  const patch = useStudy((s) => s.patchActiveSession);
  const rate = useStudy((s) => s.rate);
  const cards = useStudy((s) => s.cards);
  const newPerDay = useStudy((s) => s.newPerDay);
  const setNewPerDay = useStudy((s) => s.setNewPerDay);
  const streak = useStudy((s) => s.streak.count);

  useEffect(() => {
    if (!ready) return;
    const current = useStudy.getState().activeSession;
    const clearSearch = () =>
      void nav({ to: "/cards", search: {}, replace: true });

    if (fact !== undefined && Number.isFinite(fact) && FACTS[fact]) {
      if (!(current && current.queue[current.pos] === fact && current.pos < current.queue.length)) {
        useStudy.getState().setActiveSession(focusCardSession(fact));
      }
      clearSearch();
      return;
    }

    if (chapter && Number.isFinite(chapter)) {
      const live =
        current &&
        current.filter === chapter &&
        current.pos < current.queue.length;
      if (!live) {
        const s = startCardSession(chapter);
        if (s) useStudy.getState().setActiveSession(s);
        else toast(`No cards waiting for chapter ${chapter}.`);
      }
      clearSearch();
      return;
    }

    if (start) {
      const live =
        current && current.filter == null && current.pos < current.queue.length;
      if (!live) {
        const s = startCardSession();
        if (s) useStudy.getState().setActiveSession(s);
        else toast("Nothing to review right now.");
      }
      clearSearch();
    }
  }, [ready, chapter, start, fact, nav]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const s = useStudy.getState().activeSession;
      if (!s || s.pos >= s.queue.length) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)
        return;
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        if (!s.revealed) useStudy.getState().patchActiveSession({ revealed: true });
        return;
      }
      if (!s.revealed) return;
      if (e.key >= "0" && e.key <= "5") {
        applyRate(Number(e.key));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function applyRate(q: number) {
    const s = useStudy.getState().activeSession;
    if (!s || s.pos >= s.queue.length) return;
    const i = s.queue[s.pos];
    rate(cardId(i), q);
    const nextQ = [...s.queue];
    if (q < 3) nextQ.push(i);
    useStudy.getState().setActiveSession({
      ...s,
      queue: nextQ,
      pos: s.pos + 1,
      revealed: false,
      done: s.done + 1,
      ratings: [...s.ratings, q],
    });
  }

  if (!ready) {
    return <div className="h-64 animate-pulse rounded-xl bg-paper-2" />;
  }

  if (!session) {
    const due = dueCards().length;
    const fresh = newCards().length;
    return (
      <div className="space-y-8">
        <header>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
            Spaced repetition
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold">Flashcards</h1>
          <p className="mt-2 max-w-xl text-ink-soft">
            Every date, person, Act, battle and institution is a card. SM-2
            schedules each one just before you would forget it. Rate recall from
            0 (blank) to 5 (easy). Space to reveal, 0–5 to rate.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-paper-2 p-4 shadow-card">
            <div className="font-display text-3xl font-semibold tabular-nums text-navy">
              {due}
            </div>
            <div className="text-xs tracking-wide text-muted uppercase">Due now</div>
          </div>
          <div className="rounded-xl bg-paper-2 p-4 shadow-card">
            <div className="font-display text-3xl font-semibold tabular-nums text-navy">
              {fresh}
            </div>
            <div className="text-xs tracking-wide text-muted uppercase">New left</div>
          </div>
        </div>

        <div className="rounded-xl bg-paper-2 p-5 shadow-card">
          <Button variant="crimson" className="w-full" onClick={() => launch()}>
            Start session
          </Button>
          <label className="mt-4 flex items-center justify-between text-sm text-ink-soft">
            New cards per session
            <select
              value={newPerDay}
              onChange={(e) => setNewPerDay(Number(e.target.value))}
              className="h-9 rounded-sm bg-paper px-2 shadow-[0_0_0_1px_var(--line)]"
            >
              {[5, 10, 15, 20].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-4 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Button key={n} size="sm" variant="outline" onClick={() => launch(n)}>
                Ch {n} only
              </Button>
            ))}
            <Button size="sm" variant="ghost" onClick={() => launch()}>
              Mixed
            </Button>
          </div>
        </div>

        <Feynman />
      </div>
    );
  }

  if (session.pos >= session.queue.length) {
    const dueLeft = dueCards().length;
    return (
      <div className="rounded-xl bg-paper-2 px-5 py-10 text-center shadow-card">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
          Session complete
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold">
          {session.done} cards reviewed
        </h2>
        <p className="mt-2 text-ink-soft">
          Streak: {streak} day{streak === 1 ? "" : "s"}.
          {dueLeft
            ? ` ${dueLeft} still due — keep going?`
            : " Nothing else due. Come back tomorrow."}
        </p>
        <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
          {dueLeft > 0 && (
            <Button
              variant="crimson"
              onClick={() => launch(session.filter ?? undefined)}
            >
              Continue reviewing
            </Button>
          )}
          <Button variant="outline" onClick={() => setSession(null)}>
            Back to overview
          </Button>
        </div>
      </div>
    );
  }

  const i = session.queue[session.pos];
  const f = FACTS[i];
  if (!f) {
    return (
      <div className="rounded-xl bg-paper-2 p-6 text-center shadow-card">
        <p className="text-ink-soft">This card is no longer in the bank.</p>
        <Button className="mt-4" onClick={() => setSession(null)}>
          Back to overview
        </Button>
      </div>
    );
  }
  const c = cards[cardId(i)];
  const isNew = !c || c.seen === 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-muted">
        <span className="tabular-nums">
          {session.pos + 1} / {session.queue.length}
        </span>
        <button
          type="button"
          className="text-xs font-medium hover:text-ink"
          onClick={() => setSession(null)}
        >
          End session
        </button>
      </div>
      <Progress value={(100 * session.pos) / session.queue.length} />

      <div className="relative min-h-60 rounded-xl bg-paper-2 px-6 py-10 text-center shadow-card">
        <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wider text-muted uppercase">
          {TOPICS[f.t].name}
        </span>
        {isNew && (
          <span className="absolute top-4 right-4 text-[11px] font-semibold tracking-wider text-navy uppercase">
            New
          </span>
        )}
        <p className="mt-4 font-display text-xl font-semibold leading-snug sm:text-2xl">
          {f.q}
        </p>
        {session.revealed && (
          <p className="mt-6 border-t border-dashed border-line pt-5 text-[17px] text-ink">
            {f.a}
          </p>
        )}
      </div>

      {session.revealed ? (
        <div>
          <p className="mb-2 text-center text-sm text-muted">How well did you recall it?</p>
          <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
            {RATES.map((r) => (
              <button
                key={r.q}
                type="button"
                onClick={() => applyRate(r.q)}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center rounded-md px-2 py-2 text-paper-2 transition-[scale] duration-150 active:scale-[0.96]",
                  r.q < 3 ? "bg-crimson/85 hover:bg-crimson" : "bg-navy hover:bg-navy/90",
                )}
              >
                <span className="text-sm font-semibold">{r.label}</span>
                <span className="text-[10px] opacity-80">{r.q} · {r.hint}</span>
              </button>
            ))}
          </div>
          <p className="mt-2 text-center text-[11px] text-muted">
            Keys 0–5 · Space to reveal
          </p>
        </div>
      ) : (
        <Button className="w-full" onClick={() => patch({ revealed: true })}>
          Show answer
        </Button>
      )}
    </div>
  );
}

function Feynman() {
  const items = useMemo(() => checkItems(), []);
  const [idx, setIdx] = useState(0);
  const feynman = useStudy((s) => s.feynman);
  const save = useStudy((s) => s.saveFeynman);
  const it = items[idx];
  const [out, setOut] = useState<string>("");

  if (!it) return null;

  function compare() {
    const chObj = getChapter(it.ch);
    if (!chObj) return;
    const sec = chObj.sections[it.sec];
    const words = it.x
      .toLowerCase()
      .split(/\W+/)
      .filter(
        (w) =>
          w.length > 3 &&
          !/^(that|this|with|about|between|which|what|when|does|have|been|from|they|their)$/.test(
            w,
          ),
      );
    const score = (x: string) =>
      words.reduce((a, w) => a + (x.toLowerCase().includes(w) ? 1 : 0), 0);
    let scored = sec.blocks
      .filter((b) => b.t === "p")
      .map((b) => ({ b, s: score(b.x) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 2)
      .filter((x) => x.s > 0);
    if (!scored.length) {
      const all: { b: (typeof sec.blocks)[number]; s: number }[] = [];
      chObj.sections.forEach((s2) =>
        s2.blocks.forEach((b) => {
          if (b.t === "p") all.push({ b, s: score(b.x) });
        }),
      );
      scored = all.sort((a, b) => b.s - a.s).slice(0, 2).filter((x) => x.s >= 2);
    }
    setOut(scored.map((x) => x.b.x).join("\n\n") || sec.blocks.filter((b) => b.t === "p").slice(-2).map((b) => b.x).join("\n\n"));
  }

  return (
    <section className="rounded-xl bg-paper-2 p-5 shadow-card">
      <h2 className="font-display text-xl font-semibold">Explain it yourself</h2>
      <p className="mt-1 text-sm text-ink-soft">
        The Feynman technique: pick a “Check that you understand” point, write it
        in your own words, then compare with the handbook.
      </p>
      <select
        className="mt-3 h-11 w-full rounded-md bg-paper px-3 shadow-[0_0_0_1px_var(--line)]"
        value={idx}
        onChange={(e) => {
          setIdx(Number(e.target.value));
          setOut("");
        }}
      >
        {items.map((item, k) => (
          <option key={item.id} value={k}>
            Ch {item.ch} · {item.x.length > 64 ? `${item.x.slice(0, 64)}…` : item.x}
          </option>
        ))}
      </select>
      <Textarea
        className="mt-3"
        placeholder="Type your explanation…"
        value={feynman[it.id] ?? ""}
        onChange={(e) => save(it.id, e.target.value)}
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <Button size="sm" onClick={compare}>
          Compare with the handbook
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link
            to="/read/$chapterId/$sectionId"
            params={{ chapterId: String(it.ch), sectionId: String(it.sec) }}
          >
            Open this section
          </Link>
        </Button>
      </div>
      {out && (
        <div className="mt-4 rounded-lg bg-paper p-4 text-sm leading-relaxed">
          <p className="mb-2 text-[11px] font-semibold tracking-wider text-crimson uppercase">
            Official wording — {it.x}
          </p>
          {out.split("\n\n").map((p, i) => (
            <p key={i} className="mt-2">
              {p}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
