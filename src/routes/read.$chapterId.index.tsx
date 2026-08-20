import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { chapterFacts, getChapter, ROMAN } from "@/lib/content";
import { chapterUnlocked, useStudy } from "@/lib/store";
import { useHydrated } from "@/lib/use-hydrated";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/read/$chapterId/")({
  component: ChapterPage,
});

function ChapterPage() {
  const { chapterId } = Route.useParams();
  const num = Number(chapterId);
  const ch = getChapter(num);
  const ready = useHydrated();
  const nav = useNavigate();
  const chaptersDone = useStudy((s) => s.chaptersDone);
  const sectionsRead = useStudy((s) => s.sectionsRead);
  const toggle = useStudy((s) => s.toggleChapterDone);
  const unlocked = !ready || chapterUnlocked(num);

  if (!ch) {
    return <p className="text-muted">Chapter not found.</p>;
  }
  if (!unlocked) {
    return (
      <div className="py-10 text-center">
        <p className="text-ink-soft">This chapter is locked.</p>
        <Button className="mt-4" onClick={() => void nav({ to: "/read" })}>
          Back to chapters
        </Button>
      </div>
    );
  }

  const done = chaptersDone.includes(num);
  const facts = chapterFacts(num);

  return (
    <div className="space-y-6">
      <Link
        to="/read"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink"
      >
        <ChevronLeft className="size-4" />
        All chapters
      </Link>
      <header>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
          Chapter {ROMAN[num]}
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold">{ch.title}</h1>
        <p className="mt-2 text-sm text-ink-soft">
          {ch.sections.length} sections · {facts.length} flashcards cover this chapter.
        </p>
      </header>

      <ol className="space-y-2">
        {ch.sections.map((s, i) => {
          const read = sectionsRead.includes(`${num}.${i}`);
          return (
            <li key={s.id}>
              <Link
                to="/read/$chapterId/$sectionId"
                params={{ chapterId: String(num), sectionId: String(i) }}
                className="flex items-center gap-4 rounded-xl bg-paper-2 px-4 py-3.5 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]"
              >
                <span className="w-8 font-display text-sm tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-medium">{s.title}</span>
                {read && <span className="text-xs text-ok">Read</span>}
                <span className="text-muted">›</span>
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          variant={done ? "outline" : "default"}
          onClick={() => {
            toggle(num);
            if (!done) toast(`Chapter ${num} marked complete`);
          }}
        >
          {done ? "Unmark complete" : "Mark chapter complete"}
        </Button>
        {num <= 5 && (
          <Button asChild variant="outline">
            <Link to="/test" search={{ chapter: num }}>
              Chapter {num} quiz
            </Link>
          </Button>
        )}
        <Button asChild variant="ghost">
          <Link to="/cards" search={{ chapter: num }}>
            Study this chapter’s cards
          </Link>
        </Button>
      </div>
    </div>
  );
}
