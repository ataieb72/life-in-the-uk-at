import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as getChapter, C as ROMAN, D as chapterFacts, c as chapterUnlocked, o as Button, r as Route$1, y as useStudy } from "./router-G4sCl9hs.mjs";
import { t as useHydrated } from "./use-hydrated-CGIDDHca.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read._chapterId.index-BwfMLBiq.js
var import_jsx_runtime = require_jsx_runtime();
function ChapterPage() {
	const { chapterId } = Route$1.useParams();
	const num = Number(chapterId);
	const ch = getChapter(num);
	const ready = useHydrated();
	const nav = useNavigate();
	const chaptersDone = useStudy((s) => s.chaptersDone);
	const sectionsRead = useStudy((s) => s.sectionsRead);
	const toggle = useStudy((s) => s.toggleChapterDone);
	const unlocked = !ready || chapterUnlocked(num);
	if (!ch) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "Chapter not found."
	});
	if (!unlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-10 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-ink-soft",
			children: "This chapter is locked."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-4",
			onClick: () => void nav({ to: "/read" }),
			children: "Back to chapters"
		})]
	});
	const done = chaptersDone.includes(num);
	const facts = chapterFacts(num);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/read",
				className: "inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "All chapters"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] font-semibold tracking-[0.18em] text-muted uppercase",
					children: ["Chapter ", ROMAN[num]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl font-semibold",
					children: ch.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: [
						ch.sections.length,
						" sections · ",
						facts.length,
						" flashcards cover this chapter."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-2",
				children: ch.sections.map((s, i) => {
					const read = sectionsRead.includes(`${num}.${i}`);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$chapterId/$sectionId",
						params: {
							chapterId: String(num),
							sectionId: String(i)
						},
						className: "flex items-center gap-4 rounded-xl bg-paper-2 px-4 py-3.5 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-8 font-display text-sm tabular-nums text-muted",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-medium",
								children: s.title
							}),
							read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-ok",
								children: "Read"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "›"
							})
						]
					}) }, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: done ? "outline" : "default",
						onClick: () => {
							toggle(num);
							if (!done) toast(`Chapter ${num} marked complete`);
						},
						children: done ? "Unmark complete" : "Mark chapter complete"
					}),
					num <= 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/test",
							search: { chapter: num },
							children: [
								"Chapter ",
								num,
								" quiz"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cards",
							search: { chapter: num },
							children: "Study this chapter’s cards"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { ChapterPage as component };
