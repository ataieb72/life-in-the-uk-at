import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ClipboardCheck, Flame, Layers } from "lucide-react";
import { chapterFacts, FACTS, ROMAN, TESTABLE_CHAPTERS } from "@/lib/content";
import {
  dueCards,
  masteredCount,
  nextReviewTs,
  readinessScore,
  seenCount,
  todayStudied,
  useStudy,
} from "@/lib/store";
import { useHydrated } from "@/lib/use-hydrated";
import { fmtWhen } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/")({ component: Dashboard });

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl bg-paper-2 px-3 py-4 shadow-card">
      <div className="font-display text-2xl font-semibold tracking-tight tabular-nums text-navy">
        {n}
      </div>
      <div className="mt-0.5 text-xs tracking-wide text-muted uppercase">{label}</div>
    </div>
  );
}

function Dashboard() {
  const ready = useHydrated();
  const streak = useStudy((s) => s.streak.count);
  const chaptersDone = useStudy((s) => s.chaptersDone);
  const lastRead = useStudy((s) => s.lastRead);
  const history = useStudy((s) => s.testHistory);
  const goal = useStudy((s) => s.dailyGoal);
  const cards = useStudy((s) => s.cards);

  const due = ready ? dueCards().length : 0;
  const seen = ready ? seenCount() : 0;
  const mastered = ready ? masteredCount() : 0;
  const today = ready ? todayStudied() : 0;
  const next = ready ? nextReviewTs() : 0;
  const readyPct = ready ? readinessScore() : 0;
  const fulls = history.filter((h) => !h.mini);
  const lastFull = fulls[fulls.length - 1];

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-xl shadow-card">
        <img
          src="/hero-westminster.jpg"
          alt="The Palace of Westminster at dawn"
          className="h-52 w-full object-cover object-center sm:h-64"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-navy-fg/70 uppercase">
            Official 3rd edition
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-navy-fg sm:text-4xl">
            Prepare for the Life in the UK test
          </h1>
          <p className="mt-2 max-w-lg text-sm text-navy-fg/80">
            405 facts, the full handbook, spaced-repetition cards, and timed mock exams.
            The real test is 24 questions in 45 minutes. Pass mark 75%.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat n={ready ? String(due) : "—"} label="Cards due" />
        <Stat n={ready ? `${streak}` : "—"} label="Day streak" />
        <Stat
          n={ready ? `${Math.round((100 * seen) / FACTS.length)}%` : "—"}
          label="Cards started"
        />
        <Stat
          n={ready ? `${Math.round((100 * mastered) / FACTS.length)}%` : "—"}
          label="Mastered"
        />
      </div>

      <section className="rounded-xl bg-paper-2 p-5 shadow-card sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold">Today</h2>
            <p className="mt-1 text-sm text-ink-soft">
              {due
                ? `${due} review${due === 1 ? "" : "s"} waiting${FACTS.length - seen ? `, and new cards still to meet.` : "."}`
                : seen
                  ? `Caught up. Next review ${fmtWhen(next)}.`
                  : "Start with Chapter 1, or open a short card session."}
            </p>
          </div>
          <div className="text-right">
            <div className="font-display text-2xl font-semibold tabular-nums text-navy">
              {today}
              <span className="text-base font-medium text-muted">/{goal}</span>
            </div>
            <div className="text-[11px] tracking-wide text-muted uppercase">Daily goal</div>
          </div>
        </div>
        <Progress value={goal ? (100 * today) / goal : 0} className="mt-3" />
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button asChild variant="crimson" className="flex-1">
            <Link to="/cards" search={{ start: true }}>
              <Layers />
              Start review
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link to="/test" search={{ mode: "timed" }}>
              <ClipboardCheck />
              Mock exam
            </Link>
          </Button>
        </div>
        {lastFull && (
          <p className="mt-4 text-sm text-muted">
            Last practice test:{" "}
            <span className="font-semibold text-ink">
              {lastFull.score}/{lastFull.total}
            </span>{" "}
            {lastFull.score / lastFull.total >= 0.75 ? (
              <span className="text-ok">pass</span>
            ) : (
              <span className="text-crimson">below 75%</span>
            )}
          </p>
        )}
        {lastRead && (
          <p className="mt-2 text-sm">
            <Link
              to="/read/$chapterId/$sectionId"
              params={{
                chapterId: String(lastRead.chapter),
                sectionId: String(lastRead.section),
              }}
              className="inline-flex items-center gap-1 font-medium text-crimson hover:underline"
            >
              Resume reading
              <ArrowRight className="size-3.5" />
            </Link>
          </p>
        )}
      </section>

      <section className="rounded-xl bg-paper-2 p-5 shadow-card sm:p-6">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold">Exam readiness</h2>
            <p className="mt-1 text-sm text-ink-soft">
              Based on reading, card mastery, and recent mock scores.
            </p>
          </div>
          <div className="font-display text-3xl font-semibold tabular-nums text-navy">
            {readyPct}
          </div>
        </div>
        <Progress value={readyPct} />
        <p className="mt-3 text-xs text-muted">
          Aim for 70+ before you book. The official pass mark is 18 of 24.
        </p>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold">Handbook</h2>
          <Link
            to="/read"
            className="inline-flex items-center gap-1 text-sm font-medium text-crimson"
          >
            All chapters
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="space-y-2">
          {TESTABLE_CHAPTERS.map((c) => {
            const ids = chapterFacts(c.num);
            const st = ready
              ? ids.filter((i) => {
                  const cc = cards[`f${i}`];
                  return cc && cc.seen > 0;
                }).length
              : 0;
            const pct = ids.length ? Math.round((100 * st) / ids.length) : 0;
            const done = chaptersDone.includes(c.num);
            return (
              <Link
                key={c.num}
                to="/read/$chapterId"
                params={{ chapterId: String(c.num) }}
                className="block rounded-xl bg-paper-2 px-4 py-3.5 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="min-w-0">
                    <span className="mr-2 font-display text-sm text-muted">
                      {ROMAN[c.num]}
                    </span>
                    <span className="font-medium">{c.title}</span>
                    {done && <span className="ml-2 text-xs text-ok">Read</span>}
                  </div>
                  <span className="shrink-0 text-xs tabular-nums text-muted">
                    {st}/{ids.length}
                  </span>
                </div>
                <Progress value={pct} className="mt-2" />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <Link
          to="/read"
          className="rounded-xl bg-paper-2 p-4 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]"
        >
          <BookOpen className="size-5 text-navy" strokeWidth={1.75} />
          <h3 className="mt-3 font-display text-lg font-semibold">Read</h3>
          <p className="mt-1 text-sm text-ink-soft">
            The complete 3rd edition, searchable, with check-you-understand boxes.
          </p>
        </Link>
        <Link
          to="/cards"
          className="rounded-xl bg-paper-2 p-4 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]"
        >
          <Layers className="size-5 text-navy" strokeWidth={1.75} />
          <h3 className="mt-3 font-display text-lg font-semibold">Flashcards</h3>
          <p className="mt-1 text-sm text-ink-soft">
            SM-2 spaced repetition. Rate 0–5. Weak cards come back the same day.
          </p>
        </Link>
        <Link
          to="/test"
          className="rounded-xl bg-paper-2 p-4 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]"
        >
          <ClipboardCheck className="size-5 text-navy" strokeWidth={1.75} />
          <h3 className="mt-3 font-display text-lg font-semibold">Practice tests</h3>
          <p className="mt-1 text-sm text-ink-soft">
            24-question mocks with an optional 45-minute timer. Chapter quizzes too.
          </p>
        </Link>
      </section>

      {streak > 0 && (
        <p className="flex items-center gap-2 text-sm text-muted">
          <Flame className="size-4 text-crimson" />
          {streak}-day streak. Keep a session going each day so intervals can grow.
        </p>
      )}
    </div>
  );
}
