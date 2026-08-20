import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as Bookmark, m as ChevronLeft, n as Type } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as getChapter, D as chapterFacts, I as escapeHtml, P as cn, n as Route, o as Button, y as useStudy, z as highlightDates } from "./router-G4sCl9hs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read._chapterId._sectionId-C6XjSO3z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function renderBlocks(blocks) {
	let html = "";
	let listBuf = [];
	let listType = null;
	const flush = () => {
		if (!listBuf.length) return;
		html += `<div class="${listType === "check" ? "check-box" : "info-box"}"><b>${listType === "check" ? "Check that you understand" : "In this chapter"}</b><ul>${listBuf.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>`;
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
		} else if (b.t === "info" || b.t === "check") listBuf.push(b.x);
		else {
			flush();
			const x = b.x;
			if (x.length < 72 && !/[.:;,?!)]$/.test(x) && !/^[a-z]/.test(x)) html += `<h3>${escapeHtml(x)}</h3>`;
			else html += `<p>${highlightDates(escapeHtml(x))}</p>`;
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
	(0, import_react.useEffect)(() => {
		if (ch && sec) {
			markRead(bmId);
			setLast(chNum, secIdx);
		}
	}, [
		bmId,
		ch,
		sec,
		chNum,
		secIdx,
		markRead,
		setLast
	]);
	const html = (0, import_react.useMemo)(() => sec ? renderBlocks(sec.blocks) : "", [sec]);
	if (!ch || !sec) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "Section not found."
	});
	const facts = chapterFacts(chNum);
	const sizeClass = readerSize === "sm" ? "text-[15px]" : readerSize === "lg" ? "text-[19px]" : "text-[17px]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/read/$chapterId",
					params: { chapterId: String(chNum) },
					className: "inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }),
						"Chapter ",
						chNum
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Cycle type size",
						onClick: () => setReaderSize(readerSize === "sm" ? "md" : readerSize === "md" ? "lg" : "sm"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": bookmarked ? "Remove bookmark" : "Bookmark section",
						onClick: () => toggleBm(bmId),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", bookmarked && "fill-crimson text-crimson") })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold tracking-[0.18em] text-muted uppercase",
				children: ch.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-3xl font-semibold",
				children: sec.title
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("reader", sizeClass),
				dangerouslySetInnerHTML: { __html: html }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Key facts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-ink-soft",
						children: [
							facts.length,
							" flashcards cover chapter ",
							chNum,
							". Reviewing right after reading is the fastest way to lock facts in."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "crimson",
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cards",
							search: { chapter: chNum },
							children: "Study this chapter’s cards"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [secIdx > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "flex-1",
					onClick: () => void nav({
						to: "/read/$chapterId/$sectionId",
						params: {
							chapterId: String(chNum),
							sectionId: String(secIdx - 1)
						}
					}),
					children: "Previous"
				}), secIdx < ch.sections.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => void nav({
						to: "/read/$chapterId/$sectionId",
						params: {
							chapterId: String(chNum),
							sectionId: String(secIdx + 1)
						}
					}),
					children: "Next section"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => {
						markDone(chNum);
						toast(`Chapter ${chNum} complete`);
						nav({ to: "/read" });
					},
					children: "Finish chapter"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
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
      ` })
		]
	});
}
//#endregion
export { SectionPage as component };
