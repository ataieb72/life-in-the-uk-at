import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { FACTS, HANDBOOK, TOPICS } from "@/lib/content";
import { focusCardSession, useStudy } from "@/lib/store";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

export function CommandSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (query.length < 2) return { sections: [] as { ch: number; si: number; title: string; hit: string }[], facts: [] as { i: number; q: string; topic: string }[] };
    const sections: { ch: number; si: number; title: string; hit: string }[] = [];
    HANDBOOK.chapters.forEach((c) =>
      c.sections.forEach((s, si) => {
        if (s.title.toLowerCase().includes(query)) {
          sections.push({ ch: c.num, si, title: s.title, hit: s.title });
          return;
        }
        for (const b of s.blocks) {
          const i = b.x.toLowerCase().indexOf(query);
          if (i >= 0) {
            sections.push({
              ch: c.num,
              si,
              title: s.title,
              hit: b.x.slice(Math.max(0, i - 40), i + query.length + 60),
            });
            break;
          }
        }
      }),
    );
    const facts: { i: number; q: string; topic: string }[] = [];
    FACTS.forEach((f, i) => {
      if (f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)) {
        facts.push({ i, q: f.q, topic: TOPICS[f.t].name });
      }
    });
    return { sections: sections.slice(0, 8), facts: facts.slice(0, 8) };
  }, [q]);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="hidden h-9 w-52 justify-between px-3 text-muted md:inline-flex"
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex items-center gap-2">
          <Search className="size-3.5" />
          Search
        </span>
        <kbd className="text-[10px] tracking-wide text-muted">⌘K</kbd>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label="Search handbook"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0" title="Search">
          <Command className="bg-transparent" shouldFilter={false}>
            <div className="border-b border-line px-3">
              <Command.Input
                value={q}
                onValueChange={setQ}
                placeholder="Search the handbook or questions…"
                className="h-12 w-full bg-transparent text-base outline-none placeholder:text-muted"
              />
            </div>
            <Command.List className="max-h-80 overflow-auto p-2">
              {q.trim().length < 2 ? (
                <p className="px-3 py-8 text-center text-sm text-muted">
                  Type at least two letters. Jump to a chapter, section, or fact.
                </p>
              ) : (
                <>
                  {results.sections.length > 0 && (
                    <Command.Group heading="Handbook" className="px-1 py-1 text-[11px] font-semibold tracking-wider text-muted uppercase">
                      {results.sections.map((r) => (
                        <Command.Item
                          key={`${r.ch}-${r.si}-${r.hit.slice(0, 12)}`}
                          value={`sec-${r.ch}-${r.si}-${r.hit.slice(0, 24)}`}
                          onSelect={() => {
                            setOpen(false);
                            setQ("");
                            void nav({
                              to: "/read/$chapterId/$sectionId",
                              params: {
                                chapterId: String(r.ch),
                                sectionId: String(r.si),
                              },
                            });
                          }}
                          className="mt-1 cursor-pointer rounded-md px-3 py-2 text-sm data-[selected=true]:bg-navy/8"
                        >
                          <div className="text-[11px] font-semibold tracking-wide text-crimson uppercase">
                            Ch {r.ch} · {r.title}
                          </div>
                          <div className="line-clamp-2 text-ink-soft">…{r.hit}…</div>
                        </Command.Item>
                      ))}
                    </Command.Group>
                  )}
                  {results.facts.length > 0 && (
                    <Command.Group heading="Questions" className="mt-2 px-1 py-1 text-[11px] font-semibold tracking-wider text-muted uppercase">
                      {results.facts.map((r) => (
                        <Command.Item
                          key={r.i}
                          value={`fact-${r.i}`}
                          onSelect={() => {
                            setOpen(false);
                            setQ("");
                            useStudy.getState().setActiveSession(focusCardSession(r.i));
                            void nav({ to: "/cards" });
                          }}
                          className="mt-1 cursor-pointer rounded-md px-3 py-2 text-sm data-[selected=true]:bg-navy/8"
                        >
                          <div className="text-[11px] font-semibold tracking-wide text-muted uppercase">
                            {r.topic}
                          </div>
                          <div className="text-ink">{r.q}</div>
                        </Command.Item>
                      ))}
                    </Command.Group>
                  )}
                  {results.sections.length === 0 && results.facts.length === 0 && (
                    <p className="px-3 py-8 text-center text-sm text-muted">
                      No matches for “{q}”.
                    </p>
                  )}
                </>
              )}
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
