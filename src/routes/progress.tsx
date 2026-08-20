import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { FACTS, TESTABLE_CHAPTERS, TOPIC_IDS, TOPICS, chapterFacts, topicFacts } from "@/lib/content";
import { topicMastery, useStudy } from "@/lib/store";
import { useHydrated } from "@/lib/use-hydrated";
import { dayKey, fmtDateTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/progress")({ component: ProgressPage });

function lastNDays(n: number): string[] {
  const out: string[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  for (let i = n - 1; i >= 0; i--) {
    const x = new Date(d);
    x.setDate(d.getDate() - i);
    out.push(dayKey(x.getTime()));
  }
  return out;
}

function ProgressPage() {
  const ready = useHydrated();
  const cards = useStudy((s) => s.cards);
  const chaptersDone = useStudy((s) => s.chaptersDone);
  const history = useStudy((s) => s.testHistory);
  const log = useStudy((s) => s.studyLog);
  const goal = useStudy((s) => s.dailyGoal);
  const setGoal = useStudy((s) => s.setDailyGoal);
  const progressive = useStudy((s) => s.progressive);
  const setProgressive = useStudy((s) => s.setProgressive);
  const newPerDay = useStudy((s) => s.newPerDay);
  const setNewPerDay = useStudy((s) => s.setNewPerDay);
  const resetAll = useStudy((s) => s.resetAll);
  const importState = useStudy((s) => s.importState);
  const fileRef = useRef<HTMLInputElement>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const rows = useMemo(() => {
    void cards;
    return TOPIC_IDS.map((t) => {
      const ids = topicFacts(t);
      return {
        id: t,
        name: TOPICS[t].name,
        ch: TOPICS[t].ch,
        pct: ready ? topicMastery(ids) : 0,
        count: ids.length,
      };
    });
  }, [cards, ready]);

  const chapterRows = useMemo(
    () =>
      TESTABLE_CHAPTERS.map((c) => ({
        num: c.num,
        title: c.title,
        pct: ready ? topicMastery(chapterFacts(c.num)) : 0,
      })),
    [cards, ready],
  );

  const days = lastNDays(28);
  const maxLog = Math.max(1, ...days.map((d) => log[d] ?? 0));
  const tests = history.slice(-12).reverse();

  function exportJson() {
    const s = useStudy.getState();
    const blob = new Blob(
      [
        JSON.stringify({
          cards: s.cards,
          streak: s.streak,
          chaptersDone: s.chaptersDone,
          sectionsRead: s.sectionsRead,
          bookmarks: s.bookmarks,
          testHistory: s.testHistory,
          feynman: s.feynman,
          theme: s.theme,
          progressive: s.progressive,
          newPerDay: s.newPerDay,
          dailyGoal: s.dailyGoal,
          lastRead: s.lastRead,
          studyLog: s.studyLog,
          readerSize: s.readerSize,
        }),
      ],
      { type: "application/json" },
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "life-in-the-uk-progress.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
          Tracking
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold">Progress</h1>
      </header>

      <section className="rounded-xl bg-paper-2 p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold">Study calendar</h2>
        <p className="mt-1 text-sm text-muted">Last 28 days · darker means more cards</p>
        <div className="mt-4 grid grid-cols-7 gap-1.5">
          {days.map((d) => {
            const n = log[d] ?? 0;
            const t = n / maxLog;
            return (
              <div
                key={d}
                title={`${d}: ${n} cards`}
                className="aspect-square rounded-sm"
                style={{
                  background:
                    n === 0
                      ? "color-mix(in oklab, var(--ink) 7%, transparent)"
                      : `color-mix(in oklab, var(--navy) ${20 + t * 70}%, transparent)`,
                }}
              />
            );
          })}
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-muted">
          <span>{days[0]}</span>
          <span>today</span>
        </div>
      </section>

      <section className="rounded-xl bg-paper-2 p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold">Chapter mastery</h2>
        <div className="mt-4 space-y-3">
          {chapterRows.map((r) => (
            <div key={r.num}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="truncate pr-3">
                  <span className="text-muted">Ch {r.num}</span> · {r.title}
                </span>
                <span className="tabular-nums text-muted">{r.pct}%</span>
              </div>
              <Progress value={r.pct} />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-paper-2 p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold">Mastery by topic</h2>
        <div className="mt-4 space-y-2">
          {rows.map((r) => (
            <div key={r.id}>
              <div className="mb-1 flex justify-between text-xs">
                <span>
                  <span className="text-muted">Ch {r.ch}</span> · {r.name}
                </span>
                <span className="tabular-nums text-muted">
                  {r.pct}% · {r.count}
                </span>
              </div>
              <Progress value={r.pct} />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-paper-2 p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold">Chapters</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {TESTABLE_CHAPTERS.map((c) => (
            <Badge key={c.num} tone={chaptersDone.includes(c.num) ? "ok" : "muted"}>
              Ch {c.num} {chaptersDone.includes(c.num) ? "done" : "open"}
            </Badge>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-paper-2 p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold">Practice history</h2>
        {tests.length === 0 ? (
          <p className="mt-2 text-sm text-muted">No tests taken yet.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {tests.map((h) => (
              <li key={h.at} className="flex items-center justify-between text-sm">
                <span className="text-muted">
                  {fmtDateTime(h.at)} · {h.mode ?? (h.mini ? "Chapter quiz" : "Practice")}
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
        )}
      </section>

      <section className="rounded-xl bg-paper-2 p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold">Settings</h2>
        <label className="mt-4 flex items-center justify-between gap-4 text-sm">
          Daily card goal
          <select
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className="h-9 rounded-sm bg-paper px-2 shadow-[0_0_0_1px_var(--line)]"
          >
            {[10, 15, 20, 30, 40].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="mt-3 flex items-center justify-between gap-4 text-sm">
          New cards per session
          <select
            value={newPerDay}
            onChange={(e) => setNewPerDay(Number(e.target.value))}
            className="h-9 rounded-sm bg-paper px-2 shadow-[0_0_0_1px_var(--line)]"
          >
            {[5, 10, 15, 20].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="mt-4 flex items-center justify-between gap-4 text-sm">
          <span>
            Progressive unlock
            <span className="mt-0.5 block text-muted">
              Pass a chapter quiz to open the next one
            </span>
          </span>
          <Switch checked={progressive} onCheckedChange={setProgressive} />
        </label>
      </section>

      <section className="rounded-xl bg-paper-2 p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold">Backup</h2>
        <p className="mt-1 text-sm text-muted">
          Progress lives on this device. Export a backup before switching browsers.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" onClick={exportJson}>
            Export JSON
          </Button>
          <Button size="sm" variant="outline" onClick={() => fileRef.current?.click()}>
            Import backup
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const r = new FileReader();
              r.onload = () => {
                try {
                  const d = JSON.parse(String(r.result));
                  if (!importState(d)) throw new Error("bad");
                  toast("Backup imported");
                } catch {
                  toast("That file is not a valid backup");
                }
              };
              r.readAsText(file);
            }}
          />
          <Button
            size="sm"
            variant="ghost"
            className="text-crimson"
            onClick={() => setConfirmReset(true)}
          >
            Reset all progress
          </Button>
          {confirmReset && (
            <div className="mt-3 w-full rounded-lg bg-paper p-3">
              <p className="text-sm text-ink-soft">
                Delete all progress on this device? This cannot be undone.
              </p>
              <div className="mt-2 flex gap-2">
                <Button
                  size="sm"
                  variant="crimson"
                  onClick={() => {
                    resetAll();
                    setConfirmReset(false);
                    toast("Progress reset");
                  }}
                >
                  Delete everything
                </Button>
                <Button size="sm" variant="outline" onClick={() => setConfirmReset(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
        <p className="mt-4 text-xs text-muted">
          {FACTS.length} facts in the bank · 3rd edition handbook
        </p>
      </section>
    </div>
  );
}
