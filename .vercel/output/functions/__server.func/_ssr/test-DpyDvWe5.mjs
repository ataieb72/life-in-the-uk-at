import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as Flag, i as Timer } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { B as shuffle, D as chapterFacts, P as cn, T as TOPICS, b as weakTopicIds, i as Route$5, o as Button, x as FACTS, y as useStudy } from "./router-G4sCl9hs.mjs";
import { t as useHydrated } from "./use-hydrated-CGIDDHca.mjs";
import { t as Progress } from "./progress-Cxs8NiOC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/test-DpyDvWe5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function pickQuestions(n, chFilter, weak) {
	let pool = FACTS.map((f, i) => i).filter((i) => FACTS[i].d?.length === 3);
	if (chFilter) pool = pool.filter((i) => TOPICS[FACTS[i].t].ch === chFilter);
	if (weak) {
		const w = new Set(weakTopicIds());
		const pref = pool.filter((i) => w.has(i));
		if (pref.length >= n) pool = pref;
	}
	const byTopic = {};
	shuffle(pool).forEach((i) => {
		(byTopic[FACTS[i].t] ??= []).push(i);
	});
	const buckets = shuffle(Object.values(byTopic));
	const picked = [];
	while (picked.length < n && buckets.some((b) => b.length)) for (const b of buckets) {
		if (picked.length >= n) break;
		if (b.length) picked.push(b.pop());
	}
	return shuffle(picked).map((i) => ({
		i,
		opts: shuffle([{
			x: FACTS[i].s || FACTS[i].a,
			ok: true
		}, ...FACTS[i].d.map((d) => ({
			x: d,
			ok: false
		}))]),
		sel: null,
		flagged: false
	}));
}
function begin(opts) {
	const qs = pickQuestions(opts.n, opts.chapter, opts.weak);
	if (!qs.length) {
		toast("Not enough questions for this paper yet.");
		return null;
	}
	return {
		qs,
		pos: 0,
		chapter: opts.chapter ?? null,
		mini: !!opts.chapter && opts.n <= 8,
		timed: !!opts.timed,
		remaining: opts.timed ? 2700 : 0,
		startedAt: Date.now(),
		done: false,
		score: 0,
		mode: opts.mode
	};
}
function launch(opts) {
	const run = begin(opts);
	if (run) useStudy.getState().setActiveTest(run);
}
function finish(run) {
	const latest = useStudy.getState().activeTest;
	const src = latest && !latest.done ? latest : run;
	if (!src || src.done) return;
	let score = 0;
	src.qs.forEach((q) => {
		if (q.opts[q.sel ?? -1]?.ok) score += 1;
	});
	const seconds = Math.round((Date.now() - src.startedAt) / 1e3);
	useStudy.getState().pushTest({
		at: Date.now(),
		score,
		total: src.qs.length,
		mini: src.mini,
		chapter: src.chapter,
		timed: src.timed,
		seconds,
		mode: src.mode
	});
	if (src.mini && src.chapter && src.qs.length && score / src.qs.length >= .75) {
		useStudy.getState().markChapterDone(src.chapter);
		toast(`Chapter ${src.chapter} quiz passed — next chapter unlocked`);
	}
	useStudy.getState().bumpStreak();
	useStudy.getState().setActiveTest({
		...src,
		done: true,
		score
	});
}
function TestPage() {
	const { chapter, mode } = Route$5.useSearch();
	const nav = useNavigate();
	const ready = useHydrated();
	const run = useStudy((s) => s.activeTest);
	const setRun = useStudy((s) => s.setActiveTest);
	const patch = useStudy((s) => s.patchActiveTest);
	const history = useStudy((s) => s.testHistory);
	const [abandoning, setAbandoning] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const current = useStudy.getState().activeTest;
		const clearSearch = () => void nav({
			to: "/test",
			search: {},
			replace: true
		});
		if (chapter && Number.isFinite(chapter)) {
			if (!(current && !current.done && current.chapter === chapter && current.mini)) launch({
				n: 6,
				chapter,
				mode: `Chapter ${chapter} quiz`
			});
			clearSearch();
			return;
		}
		if (mode) {
			const wanted = mode === "timed" ? {
				n: 24,
				timed: true,
				mode: "Timed mock"
			} : mode === "practice" ? {
				n: 24,
				mode: "Untimed 24"
			} : mode === "weak" ? {
				n: 12,
				weak: true,
				mode: "Weak topics"
			} : {
				n: 10,
				mode: "Quick ten"
			};
			if (!(current && !current.done && current.mode === wanted.mode && current.qs.length === wanted.n)) launch(wanted);
			clearSearch();
		}
	}, [
		ready,
		chapter,
		mode,
		nav
	]);
	const ticking = !!run && run.timed && !run.done;
	(0, import_react.useEffect)(() => {
		if (!ticking) return;
		const id = window.setInterval(() => {
			const cur = useStudy.getState().activeTest;
			if (!cur || cur.done || !cur.timed) return;
			if (cur.remaining <= 1) {
				finish(cur);
				toast("Time is up — paper submitted");
				return;
			}
			useStudy.getState().patchActiveTest({ remaining: cur.remaining - 1 });
		}, 1e3);
		return () => window.clearInterval(id);
	}, [ticking]);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-xl bg-paper-2" });
	if (!run) {
		const recent = history.slice(-6).reverse();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.18em] text-muted uppercase",
						children: "Practice"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-3xl font-semibold",
						children: "Tests"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-ink-soft",
						children: "The real Life in the UK test is 24 questions in 45 minutes. You need 18 correct (75%) to pass. Questions mix history, government, culture and law."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeCard, {
							title: "Timed mock exam",
							meta: "24 questions · 45 minutes",
							onClick: () => launch({
								n: 24,
								timed: true,
								mode: "Timed mock"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeCard, {
							title: "Untimed practice",
							meta: "24 questions · no clock",
							onClick: () => launch({
								n: 24,
								mode: "Untimed 24"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeCard, {
							title: "Weak-topic drill",
							meta: "12 questions from cards you miss",
							onClick: () => launch({
								n: 12,
								weak: true,
								mode: "Weak topics"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeCard, {
							title: "Quick ten",
							meta: "10 mixed questions",
							onClick: () => launch({
								n: 10,
								mode: "Quick ten"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 font-display text-lg font-semibold",
					children: "Chapter quizzes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						1,
						2,
						3,
						4,
						5
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => launch({
							n: 6,
							chapter: n,
							mode: `Chapter ${n} quiz`
						}),
						children: [
							"Chapter ",
							n,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [
									"(",
									chapterFacts(n).length,
									")"
								]
							})
						]
					}, n))
				})] }),
				recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-paper-2 p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Recent results"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: recent.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [
									new Date(h.at).toLocaleDateString(),
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
				})
			]
		});
	}
	if (run.done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
		run,
		onAgain: () => setRun(null)
	});
	if (!run.qs.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-paper-2 p-6 text-center shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-ink-soft",
			children: "This paper has no questions."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-4",
			onClick: () => setRun(null),
			children: "Back to tests"
		})]
	});
	const q = run.qs[run.pos];
	const f = q ? FACTS[q.i] : void 0;
	if (!q || !f) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-paper-2 p-6 text-center shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-ink-soft",
			children: "This question could not be loaded."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-4",
			onClick: () => setRun(null),
			children: "Back to tests"
		})]
	});
	const mins = Math.floor(run.remaining / 60);
	const secs = run.remaining % 60;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums",
					children: [
						"Question ",
						run.pos + 1,
						" of ",
						run.qs.length,
						run.mini ? " · chapter quiz" : ""
					]
				}), run.timed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("inline-flex items-center gap-1.5 font-medium tabular-nums", run.remaining < 120 && "text-crimson"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-3.5" }),
						mins,
						":",
						String(secs).padStart(2, "0")
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: run.mode })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: 100 * run.pos / run.qs.length }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-paper-2 p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-[11px] font-semibold tracking-wider text-muted uppercase",
						children: TOPICS[f.t].name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold leading-snug",
						children: f.q
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-2",
						children: q.opts.map((o, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								const latest = useStudy.getState().activeTest;
								if (!latest || latest.done) return;
								const qs = latest.qs.map((item, idx) => idx === latest.pos ? {
									...item,
									sel: k
								} : item);
								patch({ qs });
							},
							className: cn("block w-full rounded-md px-4 py-3 text-left text-[15px] shadow-[0_0_0_1px_var(--line)] transition-[background-color,box-shadow] duration-150", q.sel === k ? "bg-navy/8 shadow-[0_0_0_1.5px_var(--navy)]" : "bg-paper hover:bg-ink/4"),
							children: o.x
						}, k))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [
					run.pos > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => patch({ pos: run.pos - 1 }),
						children: "Back"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Flag question",
						onClick: () => {
							const latest = useStudy.getState().activeTest;
							if (!latest || latest.done) return;
							const qs = latest.qs.map((item, idx) => idx === latest.pos ? {
								...item,
								flagged: !item.flagged
							} : item);
							patch({ qs });
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: cn("size-4", q.flagged && "fill-crimson text-crimson") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "flex-1",
						disabled: q.sel === null,
						onClick: () => {
							const latest = useStudy.getState().activeTest;
							if (!latest || latest.done) return;
							const cur = latest.qs[latest.pos];
							if (!cur || cur.sel === null) return;
							if (latest.pos === latest.qs.length - 1) finish(latest);
							else patch({ pos: latest.pos + 1 });
						},
						children: run.pos === run.qs.length - 1 ? "Finish test" : "Next"
					})
				]
			}),
			abandoning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 rounded-xl bg-paper-2 p-4 shadow-card sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "flex-1 text-sm text-ink-soft",
					children: "Abandon this test? Progress will be lost."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "crimson",
						onClick: () => {
							setRun(null);
							setAbandoning(false);
						},
						children: "Abandon"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setAbandoning(false),
						children: "Keep going"
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "w-full py-2 text-sm text-muted hover:text-ink",
				onClick: () => setAbandoning(true),
				children: "Abandon test"
			})
		]
	});
}
function ModeCard({ title, meta, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "rounded-xl bg-paper-2 p-5 text-left shadow-card transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_var(--navy)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-lg font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: meta
		})]
	});
}
function Result({ run, onAgain }) {
	const pass = run.qs.length > 0 && run.score / run.qs.length >= .75;
	const wrong = run.qs.filter((q) => !q.opts[q.sel ?? -1]?.ok);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-paper-2 px-5 py-10 text-center shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("font-display text-6xl font-semibold tabular-nums tracking-tight", pass ? "text-ok" : "text-crimson"),
					children: [
						run.score,
						"/",
						run.qs.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl font-semibold",
					children: pass ? "Pass — above the 75% mark" : "Not yet — pass mark is 75%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: pass ? "On test day you will have 45 minutes for 24 questions." : "Review the misses below, then study the cards — the scheduler will drill the weak spots."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-center gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "crimson",
						onClick: onAgain,
						children: "Take another"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Done"
						})
					})]
				})
			]
		}), wrong.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-xl bg-paper-2 p-5 text-center shadow-card",
			children: "Perfect score. Nothing to review."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "mb-3 font-display text-xl font-semibold",
			children: [
				"Review ",
				wrong.length,
				" incorrect"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: wrong.map((q) => {
				const f = FACTS[q.i];
				const yours = q.opts[q.sel ?? -1]?.x ?? "No answer";
				const correctOpt = q.opts.find((o) => o.ok)?.x ?? f.s ?? f.a;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-paper-2 p-4 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: f.q
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: ["Your answer: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-crimson",
								children: yours
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm",
							children: ["Correct: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ok",
								children: correctOpt
							})]
						}),
						f.a && f.a !== correctOpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: f.a
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: [
								TOPICS[f.t].name,
								" · Chapter ",
								TOPICS[f.t].ch
							]
						})
					]
				}, `${q.i}-${f.q}`);
			})
		})] })]
	});
}
//#endregion
export { TestPage as component };
