import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Lock, g as Bookmark } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as getChapter, C as ROMAN, D as chapterFacts, O as chapterReadMinutes, S as HANDBOOK, c as chapterUnlocked, y as useStudy } from "./router-G4sCl9hs.mjs";
import { t as useHydrated } from "./use-hydrated-CGIDDHca.mjs";
import { t as Progress } from "./progress-Cxs8NiOC.mjs";
import { t as Switch } from "./switch-Ck4st0qB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read.index-DLDdPeTA.js
var import_jsx_runtime = require_jsx_runtime();
function ReadIndex() {
	const ready = useHydrated();
	const progressive = useStudy((s) => s.progressive);
	const setProgressive = useStudy((s) => s.setProgressive);
	const chaptersDone = useStudy((s) => s.chaptersDone);
	const sectionsRead = useStudy((s) => s.sectionsRead);
	const bookmarks = useStudy((s) => s.bookmarks);
	const cards = useStudy((s) => s.cards);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.18em] text-muted uppercase",
					children: "Handbook"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl font-semibold",
					children: "Read the book"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-ink-soft",
					children: "Everything in the official 3rd edition. The real test draws on the whole book — including the introduction."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center justify-between gap-4 rounded-xl bg-paper-2 px-4 py-3 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Progressive unlock"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block text-muted",
						children: "Pass a 6-question chapter quiz to open the next chapter."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					checked: progressive,
					onCheckedChange: setProgressive,
					"aria-label": "Progressive unlock"
				})]
			}),
			ready && bookmarks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 font-display text-lg font-semibold",
				children: "Bookmarks"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: bookmarks.map((id) => {
					const [ch, si] = id.split(".").map(Number);
					const sec = getChapter(ch)?.sections[si];
					if (!sec) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$chapterId/$sectionId",
						params: {
							chapterId: String(ch),
							sectionId: String(si)
						},
						className: "flex items-center gap-2 rounded-lg bg-paper-2 px-3 py-2.5 text-sm shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-3.5 fill-crimson text-crimson" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: ["Ch ", ch]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: sec.title
							})
						]
					}, id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: HANDBOOK.chapters.map((c) => {
					const locked = ready && !chapterUnlocked(c.num);
					const ids = chapterFacts(c.num);
					ready && ids.filter((i) => {
						const cc = cards[`f${i}`];
						return cc && cc.seen > 0;
					}).length;
					const readN = c.sections.filter((_, i) => sectionsRead.includes(`${c.num}.${i}`)).length;
					const mins = chapterReadMinutes(c);
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm text-muted",
										children: ROMAN[c.num]
									}),
									locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5 text-muted" }),
									chaptersDone.includes(c.num) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold tracking-wide text-ok uppercase",
										children: "Complete"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-xl font-semibold",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									c.sections.length,
									" sections · ~",
									mins,
									" min · ",
									ids.length,
									" cards"
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm tabular-nums text-muted",
							children: [
								readN,
								"/",
								c.sections.length
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: c.sections.length ? 100 * readN / c.sections.length : 0,
						className: "mt-3"
					})] });
					if (locked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toast(`Chapter ${c.num} is locked. Pass the Chapter ${c.num - 1} quiz to open it.`),
						className: "w-full rounded-xl bg-paper-2 p-5 text-left opacity-60 shadow-card",
						children: inner
					}, c.num);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/read/$chapterId",
						params: { chapterId: String(c.num) },
						className: "block rounded-xl bg-paper-2 p-5 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]",
						children: inner
					}, c.num);
				})
			})
		]
	});
}
//#endregion
export { ReadIndex as component };
