import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FACTS, TOPICS, chapterFacts } from "@/lib/content";
import { useStudy, weakTopicIds } from "@/lib/store";
import { useHydrated } from "@/lib/use-hydrated";
import { shuffle } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { TestQuestion, TestRun } from "@/lib/types";
import { Flag, Timer } from "lucide-react";
import { toast } from "sonner";

type TestMode = "timed" | "practice" | "weak" | "quick";

type Search = { chapter?: number; mode?: TestMode };

export const Route = createFileRoute("/test")({
  validateSearch: (raw: Record<string, unknown>): Search => {
    const modeRaw = String(raw.mode ?? "");
    const mode: TestMode | undefined =
      modeRaw === "timed" ||
      modeRaw === "practice" ||
      modeRaw === "weak" ||
      modeRaw === "quick"
        ? modeRaw
        : undefined;
    return {
      chapter:
        raw.chapter === undefined || raw.chapter === ""
          ? undefined
          : Number(raw.chapter),
      mode,
    };
  },
  component: TestPage,
});

function pickQuestions(n: number, chFilter?: number, weak?: boolean): TestQuestion[] {
  let pool = FACTS.map((f, i) => i).filter((i) => FACTS[i].d?.length === 3);
  if (chFilter) pool = pool.filter((i) => TOPICS[FACTS[i].t].ch === chFilter);
  if (weak) {
    const w = new Set(weakTopicIds());
    const pref = pool.filter((i) => w.has(i));
    if (pref.length >= n) pool = pref;
  }
  const byTopic: Record<string, number[]> = {};
  shuffle(pool).forEach((i) => {
    (byTopic[FACTS[i].t] ??= []).push(i);
  });
  const buckets = shuffle(Object.values(byTopic));
  const picked: number[] = [];
  while (picked.length < n && buckets.some((b) => b.length)) {
    for (const b of buckets) {
      if (picked.length >= n) break;
      if (b.length) picked.push(b.pop() as number);
    }
  }
  return shuffle(picked).map((i) => ({
    i,
    opts: shuffle([
      { x: FACTS[i].s || FACTS[i].a, ok: true },
      ...FACTS[i].d.map((d) => ({ x: d, ok: false })),
    ]),
    sel: null,
    flagged: false,
  }));
}

function begin(opts: {
  n: number;
  chapter?: number;
  timed?: boolean;
  weak?: boolean;
  mode: string;
}): TestRun | null {
  const qs = pickQuestions(opts.n, opts.chapter, opts.weak);
  if (!qs.length) {
    toast("Not enough questions for this paper yet.");
    return null;
  }
  return {
    qs,
    pos: 0,
    chapter: opts.chapter ?? null,
    mini: !!opts.chapter && opts.n <= 8,
    timed: !!opts.timed,
    remaining: opts.timed ? 45 * 60 : 0,
    startedAt: Date.now(),
    done: false,
    score: 0,
    mode: opts.mode,
  };
}

function launch(opts: {
  n: number;
  chapter?: number;
  timed?: boolean;
  weak?: boolean;
  mode: string;
}) {
  const run = begin(opts);
  if (run) useStudy.getState().setActiveTest(run);
}

function finish(run: TestRun) {
  const latest = useStudy.getState().activeTest;
  const src = latest && !latest.done ? latest : run;
  if (!src || src.done) return;
  let score = 0;
  src.qs.forEach((q) => {
    if (q.opts[q.sel ?? -1]?.ok) score += 1;
  });
  const seconds = Math.round((Date.now() - src.startedAt) / 1000);
  useStudy.getState().pushTest({
    at: Date.now(),
    score,
    total: src.qs.length,
    mini: src.mini,
    chapter: src.chapter,
    timed: src.timed,
    seconds,
    mode: src.mode,
  });
  if (src.mini && src.chapter && src.qs.length && score / src.qs.length >= 0.75) {
    useStudy.getState().markChapterDone(src.chapter);
    toast(`Chapter ${src.chapter} quiz passed — next chapter unlocked`);
  }
  useStudy.getState().bumpStreak();
  useStudy.getState().setActiveTest({ ...src, done: true, score });
}

function TestPage() {
  const { chapter, mode } = Route.useSearch();
  const nav = useNavigate();
  const ready = useHydrated();
  const run = useStudy((s) => s.activeTest);
  const setRun = useStudy((s) => s.setActiveTest);
  const patch = useStudy((s) => s.patchActiveTest);
  const history = useStudy((s) => s.testHistory);
  const [abandoning, setAbandoning] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const current = useStudy.getState().activeTest;
    const clearSearch = () =>
      void nav({ to: "/test", search: {}, replace: true });

    if (chapter && Number.isFinite(chapter)) {
      const live =
        current &&
        !current.done &&
        current.chapter === chapter &&
        current.mini;
      if (!live) launch({ n: 6, chapter, mode: `Chapter ${chapter} quiz` });
      clearSearch();
      return;
    }

    if (mode) {
      const wanted =
        mode === "timed"
          ? { n: 24, timed: true, mode: "Timed mock" }
          : mode === "practice"
            ? { n: 24, mode: "Untimed 24" }
            : mode === "weak"
              ? { n: 12, weak: true, mode: "Weak topics" }
              : { n: 10, mode: "Quick ten" };
      const live =
        current &&
        !current.done &&
        current.mode === wanted.mode &&
        current.qs.length === wanted.n;
      if (!live) launch(wanted);
      clearSearch();
    }
  }, [ready, chapter, mode, nav]);

  const ticking = !!run && run.timed && !run.done;
  useEffect(() => {
    if (!ticking) return;
    const id = window.setInterval(() => {
      const cur = useStudy.getState().activeTest;
      if (!cur || cur.done || !cur.timed) return;
      if (cur.remaining <= 1) {
        finish(cur);
        toast("Time is up — paper submitted");
        return;
      }
      useStudy.getState().patchActiveTest({ remaining: cur.remaining - 1 });
    }, 1000);
    return () => window.clearInterval(id);
  }, [ticking]);

  if (!ready) return <div className="h-64 animate-pulse rounded-xl bg-paper-2" />;

  if (!run) {
    const recent = history.slice(-6).reverse();
    return (
      <div className="space-y-8">
        <header>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
            Practice
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold">Tests</h1>
          <p className="mt-2 max-w-xl text-ink-soft">
            The real Life in the UK test is 24 questions in 45 minutes. You need
            18 correct (75%) to pass. Questions mix history, government, culture
            and law.
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2">
          <ModeCard
            title="Timed mock exam"
            meta="24 questions · 45 minutes"
            onClick={() => launch({ n: 24, timed: true, mode: "Timed mock" })}
          />
          <ModeCard
            title="Untimed practice"
            meta="24 questions · no clock"
            onClick={() => launch({ n: 24, mode: "Untimed 24" })}
          />
          <ModeCard
            title="Weak-topic drill"
            meta="12 questions from cards you miss"
            onClick={() => launch({ n: 12, weak: true, mode: "Weak topics" })}
          />
          <ModeCard
            title="Quick ten"
            meta="10 mixed questions"
            onClick={() => launch({ n: 10, mode: "Quick ten" })}
          />
        </div>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold">Chapter quizzes</h2>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Button
                key={n}
                size="sm"
                variant="outline"
                onClick={() =>
                  launch({ n: 6, chapter: n, mode: `Chapter ${n} quiz` })
                }
              >
                Chapter {n}
                <span className="text-muted">({chapterFacts(n).length})</span>
              </Button>
            ))}
          </div>
        </section>

        {recent.length > 0 && (
          <section className="rounded-xl bg-paper-2 p-5 shadow-card">
            <h2 className="font-display text-lg font-semibold">Recent results</h2>
            <ul className="mt-3 space-y-2">
              {recent.map((h) => (
                <li key={h.at} className="flex justify-between text-sm">
                  <span className="text-muted">
                    {new Date(h.at).toLocaleDateString()} · {h.mode ?? (h.mini ? "Chapter quiz" : "Practice")}
                  </span>
                  <span
                    className={cn(
                      "font-semibold tabular-nums",
                      h.score / h.total >= 0.75 ? "text-ok" : "text-crimson",
                    )}
                  >
                    {h.score}/{h.total}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  }

  if (run.done) return <Result run={run} onAgain={() => setRun(null)} />;

  if (!run.qs.length) {
    return (
      <div className="rounded-xl bg-paper-2 p-6 text-center shadow-card">
        <p className="text-ink-soft">This paper has no questions.</p>
        <Button className="mt-4" onClick={() => setRun(null)}>
          Back to tests
        </Button>
      </div>
    );
  }

  const q = run.qs[run.pos];
  const f = q ? FACTS[q.i] : undefined;
  if (!q || !f) {
    return (
      <div className="rounded-xl bg-paper-2 p-6 text-center shadow-card">
        <p className="text-ink-soft">This question could not be loaded.</p>
        <Button className="mt-4" onClick={() => setRun(null)}>
          Back to tests
        </Button>
      </div>
    );
  }
  const mins = Math.floor(run.remaining / 60);
  const secs = run.remaining % 60;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-muted">
        <span className="tabular-nums">
          Question {run.pos + 1} of {run.qs.length}
          {run.mini ? " · chapter quiz" : ""}
        </span>
        {run.timed ? (
          <span
            className={cn(
              "inline-flex items-center gap-1.5 font-medium tabular-nums",
              run.remaining < 120 && "text-crimson",
            )}
          >
            <Timer className="size-3.5" />
            {mins}:{String(secs).padStart(2, "0")}
          </span>
        ) : (
          <span>{run.mode}</span>
        )}
      </div>
      <Progress value={(100 * run.pos) / run.qs.length} />

      <div className="rounded-xl bg-paper-2 p-5 shadow-card">
        <p className="mb-3 text-[11px] font-semibold tracking-wider text-muted uppercase">
          {TOPICS[f.t].name}
        </p>
        <h2 className="font-display text-xl font-semibold leading-snug">{f.q}</h2>
        <div className="mt-4 space-y-2">
          {q.opts.map((o, k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                const latest = useStudy.getState().activeTest;
                if (!latest || latest.done) return;
                const qs = latest.qs.map((item, idx) =>
                  idx === latest.pos ? { ...item, sel: k } : item,
                );
                patch({ qs });
              }}
              className={cn(
                "block w-full rounded-md px-4 py-3 text-left text-[15px] shadow-[0_0_0_1px_var(--line)] transition-[background-color,box-shadow] duration-150",
                q.sel === k
                  ? "bg-navy/8 shadow-[0_0_0_1.5px_var(--navy)]"
                  : "bg-paper hover:bg-ink/4",
              )}
            >
              {o.x}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {run.pos > 0 && (
          <Button variant="outline" onClick={() => patch({ pos: run.pos - 1 })}>
            Back
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Flag question"
          onClick={() => {
            const latest = useStudy.getState().activeTest;
            if (!latest || latest.done) return;
            const qs = latest.qs.map((item, idx) =>
              idx === latest.pos ? { ...item, flagged: !item.flagged } : item,
            );
            patch({ qs });
          }}
        >
          <Flag className={cn("size-4", q.flagged && "fill-crimson text-crimson")} />
        </Button>
        <Button
          className="flex-1"
          disabled={q.sel === null}
          onClick={() => {
            const latest = useStudy.getState().activeTest;
            if (!latest || latest.done) return;
            const cur = latest.qs[latest.pos];
            if (!cur || cur.sel === null) return;
            if (latest.pos === latest.qs.length - 1) finish(latest);
            else patch({ pos: latest.pos + 1 });
          }}
        >
          {run.pos === run.qs.length - 1 ? "Finish test" : "Next"}
        </Button>
      </div>
      {abandoning ? (
        <div className="flex flex-col gap-2 rounded-xl bg-paper-2 p-4 shadow-card sm:flex-row sm:items-center">
          <p className="flex-1 text-sm text-ink-soft">
            Abandon this test? Progress will be lost.
          </p>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="crimson"
              onClick={() => {
                setRun(null);
                setAbandoning(false);
              }}
            >
              Abandon
            </Button>
            <Button size="sm" variant="outline" onClick={() => setAbandoning(false)}>
              Keep going
            </Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="w-full py-2 text-sm text-muted hover:text-ink"
          onClick={() => setAbandoning(true)}
        >
          Abandon test
        </button>
      )}
    </div>
  );
}

function ModeCard({
  title,
  meta,
  onClick,
}: {
  title: string;
  meta: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl bg-paper-2 p-5 text-left shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]"
    >
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted">{meta}</p>
    </button>
  );
}

function Result({ run, onAgain }: { run: TestRun; onAgain: () => void }) {
  const pass = run.qs.length > 0 && run.score / run.qs.length >= 0.75;
  const wrong = run.qs.filter((q) => !(q.opts[q.sel ?? -1]?.ok));
  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-paper-2 px-5 py-10 text-center shadow-card">
        <div
          className={cn(
            "font-display text-6xl font-semibold tabular-nums tracking-tight",
            pass ? "text-ok" : "text-crimson",
          )}
        >
          {run.score}/{run.qs.length}
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold">
          {pass ? "Pass — above the 75% mark" : "Not yet — pass mark is 75%"}
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          {pass
            ? "On test day you will have 45 minutes for 24 questions."
            : "Review the misses below, then study the cards — the scheduler will drill the weak spots."}
        </p>
        <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
          <Button variant="crimson" onClick={onAgain}>
            Take another
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Done</Link>
          </Button>
        </div>
      </div>

      {wrong.length === 0 ? (
        <p className="rounded-xl bg-paper-2 p-5 text-center shadow-card">
          Perfect score. Nothing to review.
        </p>
      ) : (
        <div>
          <h3 className="mb-3 font-display text-xl font-semibold">
            Review {wrong.length} incorrect
          </h3>
          <div className="space-y-3">
            {wrong.map((q) => {
              const f = FACTS[q.i];
              const yours = q.opts[q.sel ?? -1]?.x ?? "No answer";
              const correctOpt = q.opts.find((o) => o.ok)?.x ?? f.s ?? f.a;
              return (
                <div key={`${q.i}-${f.q}`} className="rounded-xl bg-paper-2 p-4 shadow-card">
                  <p className="font-medium">{f.q}</p>
                  <p className="mt-2 text-sm text-muted">
                    Your answer: <span className="text-crimson">{yours}</span>
                  </p>
                  <p className="mt-1 text-sm">
                    Correct: <span className="font-medium text-ok">{correctOpt}</span>
                  </p>
                  {f.a && f.a !== correctOpt && (
                    <p className="mt-1 text-sm text-ink-soft">{f.a}</p>
                  )}
                  <p className="mt-2 text-xs text-muted">
                    {TOPICS[f.t].name} · Chapter {TOPICS[f.t].ch}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
