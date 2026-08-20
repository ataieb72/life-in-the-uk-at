import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Bookmark, ChevronLeft, Type } from "lucide-react";
import { useEffect, useMemo } from "react";
import { chapterFacts, getChapter } from "@/lib/content";
import { useStudy } from "@/lib/store";
import { escapeHtml, highlightDates } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/read/$chapterId/$sectionId")({
  component: SectionPage,
});

function renderBlocks(blocks: { t: string; x: string }[]): string {
  let html = "";
  let listBuf: string[] = [];
  let listType: "info" | "check" | null = null;
  const flush = () => {
    if (!listBuf.length) return;
    html += `<div class="${listType === "check" ? "check-box" : "info-box"}"><b>${
      listType === "check" ? "Check that you understand" : "In this chapter"
    }</b><ul>${listBuf.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>`;
    listBuf = [];
    listType = null;
  };
  blocks.forEach((b) => {
    if (b.t === "infohead") {
      flush();
      listType = "info";
    } else if (b.t === "checkhead") {
      flush();
      listType = "check";
    } else if (b.t === "info" || b.t === "check") {
      listBuf.push(b.x);
    } else {
      flush();
      const x = b.x;
      if (x.length < 72 && !/[.:;,?!)]$/.test(x) && !/^[a-z]/.test(x)) {
        html += `<h3>${escapeHtml(x)}</h3>`;
      } else {
        html += `<p>${highlightDates(escapeHtml(x))}</p>`;
      }
    }
  });
  flush();
  return html;
}

function SectionPage() {
  const { chapterId, sectionId } = Route.useParams();
  const chNum = Number(chapterId);
  const secIdx = Number(sectionId);
  const ch = getChapter(chNum);
  const sec = ch?.sections[secIdx];
  const nav = useNavigate();
  const markRead = useStudy((s) => s.markSectionRead);
  const setLast = useStudy((s) => s.setLastRead);
  const markDone = useStudy((s) => s.markChapterDone);
  const toggleBm = useStudy((s) => s.toggleBookmark);
  const bookmarks = useStudy((s) => s.bookmarks);
  const readerSize = useStudy((s) => s.readerSize);
  const setReaderSize = useStudy((s) => s.setReaderSize);
  const bmId = `${chNum}.${secIdx}`;
  const bookmarked = bookmarks.includes(bmId);

  useEffect(() => {
    if (ch && sec) {
      markRead(bmId);
      setLast(chNum, secIdx);
    }
  }, [bmId, ch, sec, chNum, secIdx, markRead, setLast]);

  const html = useMemo(() => (sec ? renderBlocks(sec.blocks) : ""), [sec]);

  if (!ch || !sec) {
    return <p className="text-muted">Section not found.</p>;
  }

  const facts = chapterFacts(chNum);
  const sizeClass =
    readerSize === "sm" ? "text-[15px]" : readerSize === "lg" ? "text-[19px]" : "text-[17px]";

  return (
    <article className="space-y-6">
      <div className="flex items-center justify-between gap-2">
        <Link
          to="/read/$chapterId"
          params={{ chapterId: String(chNum) }}
          className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink"
        >
          <ChevronLeft className="size-4" />
          Chapter {chNum}
        </Link>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cycle type size"
            onClick={() =>
              setReaderSize(readerSize === "sm" ? "md" : readerSize === "md" ? "lg" : "sm")
            }
          >
            <Type className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark section"}
            onClick={() => toggleBm(bmId)}
          >
            <Bookmark
              className={cn("size-4", bookmarked && "fill-crimson text-crimson")}
            />
          </Button>
        </div>
      </div>

      <header>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
          {ch.title}
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold">{sec.title}</h1>
      </header>

      <div
        className={cn("reader", sizeClass)}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="rounded-xl bg-paper-2 p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold">Key facts</h2>
        <p className="mt-1 text-sm text-ink-soft">
          {facts.length} flashcards cover chapter {chNum}. Reviewing right after
          reading is the fastest way to lock facts in.
        </p>
        <Button asChild variant="crimson" className="mt-3">
          <Link to="/cards" search={{ chapter: chNum }}>
            Study this chapter’s cards
          </Link>
        </Button>
      </div>

      <div className="flex gap-2">
        {secIdx > 0 && (
          <Button
            variant="outline"
            className="flex-1"
            onClick={() =>
              void nav({
                to: "/read/$chapterId/$sectionId",
                params: { chapterId: String(chNum), sectionId: String(secIdx - 1) },
              })
            }
          >
            Previous
          </Button>
        )}
        {secIdx < ch.sections.length - 1 ? (
          <Button
            className="flex-1"
            onClick={() =>
              void nav({
                to: "/read/$chapterId/$sectionId",
                params: { chapterId: String(chNum), sectionId: String(secIdx + 1) },
              })
            }
          >
            Next section
          </Button>
        ) : (
          <Button
            className="flex-1"
            onClick={() => {
              markDone(chNum);
              toast(`Chapter ${chNum} complete`);
              void nav({ to: "/read" });
            }}
          >
            Finish chapter
          </Button>
        )}
      </div>

      <style>{`
        .reader p { margin: 0.85em 0; color: var(--ink); line-height: 1.65; }
        .reader h3 {
          font-family: var(--font-display);
          font-size: 1.05em;
          font-weight: 600;
          margin: 1.4em 0 0.4em;
          padding-left: 0.7em;
          border-left: 3px solid var(--crimson);
        }
        .info-box, .check-box {
          border-radius: 14px;
          padding: 14px 16px;
          margin: 1.1em 0;
        }
        .info-box { background: color-mix(in oklab, var(--navy) 6%, transparent); }
        .check-box { background: color-mix(in oklab, var(--crimson) 7%, transparent); }
        .info-box b, .check-box b {
          display: block;
          margin-bottom: 6px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .check-box b { color: var(--crimson); }
        .info-box ul, .check-box ul { margin: 0; padding-left: 1.15em; }
        .info-box li, .check-box li { margin: 0.25em 0; }
      `}</style>
    </article>
  );
}
