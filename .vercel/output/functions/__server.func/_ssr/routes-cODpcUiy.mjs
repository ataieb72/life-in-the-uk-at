import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as BookOpen, d as Flame, l as Layers, p as ClipboardCheck, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { C as ROMAN, D as chapterFacts, R as fmtWhen, _ as todayStudied, d as masteredCount, h as seenCount, l as dueCards, m as readinessScore, o as Button, p as nextReviewTs, w as TESTABLE_CHAPTERS, x as FACTS, y as useStudy } from "./router-G4sCl9hs.mjs";
import { t as useHydrated } from "./use-hydrated-CGIDDHca.mjs";
import { t as Progress } from "./progress-Cxs8NiOC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-cODpcUiy.js
var import_jsx_runtime = require_jsx_runtime();
function Stat({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-paper-2 px-3 py-4 shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-2xl font-semibold tracking-tight tabular-nums text-navy",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 text-xs tracking-wide text-muted uppercase",
			children: label
		})]
	});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden rounded-xl shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/hero-westminster.jpg",
						alt: "The Palace of Westminster at dawn",
						className: "h-52 w-full object-cover object-center sm:h-64"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-navy/85 via-navy/25 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 p-5 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold tracking-[0.18em] text-navy-fg/70 uppercase",
								children: "Official 3rd edition"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-3xl font-semibold tracking-tight text-navy-fg sm:text-4xl",
								children: "Prepare for the Life in the UK test"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-lg text-sm text-navy-fg/80",
								children: "405 facts, the full handbook, spaced-repetition cards, and timed mock exams. The real test is 24 questions in 45 minutes. Pass mark 75%."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						n: ready ? String(due) : "—",
						label: "Cards due"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						n: ready ? `${streak}` : "—",
						label: "Day streak"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						n: ready ? `${Math.round(100 * seen / FACTS.length)}%` : "—",
						label: "Cards started"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						n: ready ? `${Math.round(100 * mastered / FACTS.length)}%` : "—",
						label: "Mastered"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: "Today"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: due ? `${due} review${due === 1 ? "" : "s"} waiting${FACTS.length - seen ? `, and new cards still to meet.` : "."}` : seen ? `Caught up. Next review ${fmtWhen(next)}.` : "Start with Chapter 1, or open a short card session."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-2xl font-semibold tabular-nums text-navy",
								children: [today, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-base font-medium text-muted",
									children: ["/", goal]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] tracking-wide text-muted uppercase",
								children: "Daily goal"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: goal ? 100 * today / goal : 0,
						className: "mt-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col gap-2 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "crimson",
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cards",
								search: { start: true },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {}), "Start review"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/test",
								search: { mode: "timed" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {}), "Mock exam"]
							})
						})]
					}),
					lastFull && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							"Last practice test:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-ink",
								children: [
									lastFull.score,
									"/",
									lastFull.total
								]
							}),
							" ",
							lastFull.score / lastFull.total >= .75 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ok",
								children: "pass"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-crimson",
								children: "below 75%"
							})
						]
					}),
					lastRead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/read/$chapterId/$sectionId",
							params: {
								chapterId: String(lastRead.chapter),
								sectionId: String(lastRead.section)
							},
							className: "inline-flex items-center gap-1 font-medium text-crimson hover:underline",
							children: ["Resume reading", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: "Exam readiness"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: "Based on reading, card mastery, and recent mock scores."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-semibold tabular-nums text-navy",
							children: readyPct
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: readyPct }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted",
						children: "Aim for 70+ before you book. The official pass mark is 18 of 24."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Handbook"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/read",
					className: "inline-flex items-center gap-1 text-sm font-medium text-crimson",
					children: ["All chapters", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: TESTABLE_CHAPTERS.map((c) => {
					const ids = chapterFacts(c.num);
					const st = ready ? ids.filter((i) => {
						const cc = cards[`f${i}`];
						return cc && cc.seen > 0;
					}).length : 0;
					const pct = ids.length ? Math.round(100 * st / ids.length) : 0;
					const done = chaptersDone.includes(c.num);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$chapterId",
						params: { chapterId: String(c.num) },
						className: "block rounded-xl bg-paper-2 px-4 py-3.5 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mr-2 font-display text-sm text-muted",
										children: ROMAN[c.num]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: c.title
									}),
									done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-xs text-ok",
										children: "Read"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shrink-0 text-xs tabular-nums text-muted",
								children: [
									st,
									"/",
									ids.length
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: pct,
							className: "mt-2"
						})]
					}, c.num);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read",
						className: "rounded-xl bg-paper-2 p-4 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
								className: "size-5 text-navy",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-semibold",
								children: "Read"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: "The complete 3rd edition, searchable, with check-you-understand boxes."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cards",
						className: "rounded-xl bg-paper-2 p-4 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
								className: "size-5 text-navy",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-semibold",
								children: "Flashcards"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: "SM-2 spaced repetition. Rate 0–5. Weak cards come back the same day."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/test",
						className: "rounded-xl bg-paper-2 p-4 shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
								className: "size-5 text-navy",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-semibold",
								children: "Practice tests"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: "24-question mocks with an optional 45-minute timer. Chapter quizzes too."
							})
						]
					})
				]
			}),
			streak > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4 text-crimson" }),
					streak,
					"-day streak. Keep a session going each day so intervals can grow."
				]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
