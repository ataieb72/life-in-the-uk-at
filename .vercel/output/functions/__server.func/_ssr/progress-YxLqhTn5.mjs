import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as chapterFacts, E as TOPIC_IDS, F as dayKey, L as fmtDateTime, P as cn, T as TOPICS, j as topicFacts, o as Button, v as topicMastery, w as TESTABLE_CHAPTERS, x as FACTS, y as useStudy } from "./router-G4sCl9hs.mjs";
import { t as useHydrated } from "./use-hydrated-CGIDDHca.mjs";
import { t as Progress } from "./progress-Cxs8NiOC.mjs";
import { t as Switch } from "./switch-Ck4st0qB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-YxLqhTn5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Badge({ children, className, tone = "muted" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase", tone === "muted" && "bg-ink/6 text-muted", tone === "ok" && "bg-ok/12 text-ok", tone === "bad" && "bg-crimson/12 text-crimson", tone === "navy" && "bg-navy/10 text-navy", className),
		children
	});
}
function lastNDays(n) {
	const out = [];
	const d = /* @__PURE__ */ new Date();
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
	const fileRef = (0, import_react.useRef)(null);
	const [confirmReset, setConfirmReset] = (0, import_react.useState)(false);
	const rows = (0, import_react.useMemo)(() => {
		return TOPIC_IDS.map((t) => {
			const ids = topicFacts(t);
			return {
				id: t,
				name: TOPICS[t].name,
				ch: TOPICS[t].ch,
				pct: ready ? topicMastery(ids) : 0,
				count: ids.length
			};
		});
	}, [cards, ready]);
	const chapterRows = (0, import_react.useMemo)(() => TESTABLE_CHAPTERS.map((c) => ({
		num: c.num,
		title: c.title,
		pct: ready ? topicMastery(chapterFacts(c.num)) : 0
	})), [cards, ready]);
	const days = lastNDays(28);
	const maxLog = Math.max(1, ...days.map((d) => log[d] ?? 0));
	const tests = history.slice(-12).reverse();
	function exportJson() {
		const s = useStudy.getState();
		const blob = new Blob([JSON.stringify({
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
			readerSize: s.readerSize
		})], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = "life-in-the-uk-progress.json";
		a.click();
		URL.revokeObjectURL(a.href);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold tracking-[0.18em] text-muted uppercase",
				children: "Tracking"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-3xl font-semibold",
				children: "Progress"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Study calendar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Last 28 days · darker means more cards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-7 gap-1.5",
						children: days.map((d) => {
							const n = log[d] ?? 0;
							const t = n / maxLog;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								title: `${d}: ${n} cards`,
								className: "aspect-square rounded-sm",
								style: { background: n === 0 ? "color-mix(in oklab, var(--ink) 7%, transparent)" : `color-mix(in oklab, var(--navy) ${20 + t * 70}%, transparent)` }
							}, d);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-between text-[11px] text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: days[0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "today" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Chapter mastery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3",
					children: chapterRows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate pr-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted",
									children: ["Ch ", r.num]
								}),
								" · ",
								r.title
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-muted",
							children: [r.pct, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: r.pct })] }, r.num))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Mastery by topic"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-2",
					children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: ["Ch ", r.ch]
							}),
							" · ",
							r.name
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-muted",
							children: [
								r.pct,
								"% · ",
								r.count
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: r.pct })] }, r.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Chapters"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: TESTABLE_CHAPTERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: chaptersDone.includes(c.num) ? "ok" : "muted",
						children: [
							"Ch ",
							c.num,
							" ",
							chaptersDone.includes(c.num) ? "done" : "open"
						]
					}, c.num))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Practice history"
				}), tests.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "No tests taken yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: tests.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [
								fmtDateTime(h.at),
								" · ",
								h.mode ?? (h.mini ? "Chapter quiz" : "Practice")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("font-semibold tabular-nums", h.score / h.total >= .75 ? "text-ok" : "text-crimson"),
							children: [
								h.score,
								"/",
								h.total
							]
						})]
					}, h.at))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Settings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 flex items-center justify-between gap-4 text-sm",
						children: ["Daily card goal", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: goal,
							onChange: (e) => setGoal(Number(e.target.value)),
							className: "h-9 rounded-sm bg-paper px-2 shadow-[0_0_0_1px_var(--line)]",
							children: [
								10,
								15,
								20,
								30,
								40
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: n }, n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 flex items-center justify-between gap-4 text-sm",
						children: ["New cards per session", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: newPerDay,
							onChange: (e) => setNewPerDay(Number(e.target.value)),
							className: "h-9 rounded-sm bg-paper px-2 shadow-[0_0_0_1px_var(--line)]",
							children: [
								5,
								10,
								15,
								20
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: n }, n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 flex items-center justify-between gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Progressive unlock", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-muted",
							children: "Pass a chapter quiz to open the next one"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: progressive,
							onCheckedChange: setProgressive
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Backup"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Progress lives on this device. Export a backup before switching browsers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: exportJson,
								children: "Export JSON"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => fileRef.current?.click(),
								children: "Import backup"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: "application/json",
								className: "hidden",
								onChange: (e) => {
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
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "text-crimson",
								onClick: () => setConfirmReset(true),
								children: "Reset all progress"
							}),
							confirmReset && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 w-full rounded-lg bg-paper p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-ink-soft",
									children: "Delete all progress on this device? This cannot be undone."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "crimson",
										onClick: () => {
											resetAll();
											setConfirmReset(false);
											toast("Progress reset");
										},
										children: "Delete everything"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => setConfirmReset(false),
										children: "Cancel"
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs text-muted",
						children: [FACTS.length, " facts in the bank · 3rd edition handbook"]
					})
				]
			})
		]
	});
}
//#endregion
export { ProgressPage as component };
