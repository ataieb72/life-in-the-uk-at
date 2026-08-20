import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, Lock } from "lucide-react";
import {
  chapterFacts,
  chapterReadMinutes,
  getChapter,
  HANDBOOK,
  ROMAN,
} from "@/lib/content";
import { chapterUnlocked, useStudy } from "@/lib/store";
import { useHydrated } from "@/lib/use-hydrated";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export const Route = createFileRoute("/read/")({ component: ReadIndex });

function ReadIndex() {
  const ready = useHydrated();
  const progressive = useStudy((s) => s.progressive);
  const setProgressive = useStudy((s) => s.setProgressive);
  const chaptersDone = useStudy((s) => s.chaptersDone);
  const sectionsRead = useStudy((s) => s.sectionsRead);
  const bookmarks = useStudy((s) => s.bookmarks);
  const cards = useStudy((s) => s.cards);

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
          Handbook
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold">Read the book</h1>
        <p className="mt-2 max-w-xl text-ink-soft">
          Everything in the official 3rd edition. The real test draws on the whole
          book — including the introduction.
        </p>
      </header>

      <label className="flex items-center justify-between gap-4 rounded-xl bg-paper-2 px-4 py-3 shadow-card">
        <span className="text-sm">
          <span className="font-medium">Progressive unlock</span>
          <span className="mt-0.5 block text-muted">
            Pass a 6-question chapter quiz to open the next chapter.
          </span>
        </span>
        <Switch
          checked={progressive}
          onCheckedChange={setProgressive}
          aria-label="Progressive unlock"
        />
      </label>

      {ready && bookmarks.length > 0 && (
        <section>
          <h2 className="mb-2 font-display text-lg font-semibold">Bookmarks</h2>
          <div className="space-y-2">
            {bookmarks.map((id) => {
              const [ch, si] = id.split(".").map(Number);
              const sec = getChapter(ch)?.sections[si];
              if (!sec) return null;
              return (
                <Link
                  key={id}
                  to="/read/$chapterId/$sectionId"
                  params={{ chapterId: String(ch), sectionId: String(si) }}
                  className="flex items-center gap-2 rounded-lg bg-paper-2 px-3 py-2.5 text-sm shadow-card"
                >
                  <Bookmark className="size-3.5 fill-crimson text-crimson" />
                  <span className="text-muted">Ch {ch}</span>
                  <span className="font-medium">{sec.title}</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <div className="space-y-3">
        {HANDBOOK.chapters.map((c) => {
          const locked = ready && !chapterUnlocked(c.num);
          const ids = chapterFacts(c.num);
          const st = ready
            ? ids.filter((i) => {
                const cc = cards[`f${i}`];
                return cc && cc.seen > 0;
              }).length
            : 0;
          void st;
          const readN = c.sections.filter((_, i) =>
            sectionsRead.includes(`${c.num}.${i}`),
          ).length;
          const mins = chapterReadMinutes(c);
          const inner = (
            <>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm text-muted">{ROMAN[c.num]}</span>
                    {locked && <Lock className="size-3.5 text-muted" />}
                    {chaptersDone.includes(c.num) && (
                      <span className="text-[11px] font-semibold tracking-wide text-ok uppercase">
                        Complete
                      </span>
                    )}
                  </div>
                  <h2 className="mt-1 font-display text-xl font-semibold">{c.title}</h2>
                  <p className="mt-1 text-sm text-muted">
                    {c.sections.length} sections · ~{mins} min · {ids.length} cards
                  </p>
                </div>
                <span className="text-sm tabular-nums text-muted">
                  {readN}/{c.sections.length}
                </span>
              </div>
              <Progress
                value={c.sections.length ? (100 * readN) / c.sections.length : 0}
                className="mt-3"
              />
            </>
          );
          if (locked) {
            return (
              <button
                key={c.num}
                type="button"
                onClick={() =>
                  toast(`Chapter ${c.num} is locked. Pass the Chapter ${c.num - 1} quiz to open it.`)
                }
                className="w-full rounded-xl bg-paper-2 p-5 text-left opacity-60 shadow-card"
              >
                {inner}
              </button>
            );
          }
          return (
            <Link
              key={c.num}
              to="/read/$chapterId"
              params={{ chapterId: String(c.num) }}
              className="block rounded-xl bg-paper-2 p-5 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
