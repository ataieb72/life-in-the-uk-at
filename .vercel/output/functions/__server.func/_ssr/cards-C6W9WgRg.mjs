import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as getChapter, P as cn, T as TOPICS, a as Route$9, f as newCards, g as startCardSession, k as checkItems, l as dueCards, o as Button, s as cardId, u as focusCardSession, x as FACTS, y as useStudy } from "./router-G4sCl9hs.mjs";
import { t as useHydrated } from "./use-hydrated-CGIDDHca.mjs";
import { t as Progress } from "./progress-Cxs8NiOC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-C6W9WgRg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-lg bg-paper-2 px-3.5 py-3 text-base text-ink shadow-[0_0_0_1px_var(--line)] placeholder:text-muted/80 outline-none transition-[box-shadow] duration-150 focus-visible:shadow-[0_0_0_2px_var(--crimson)]", className),
		...props
	});
}
var RATES = [
	{
		q: 0,
		label: "Blank",
		hint: "No idea"
	},
	{
		q: 1,
		label: "Wrong",
		hint: "Missed it"
	},
	{
		q: 2,
		label: "Almost",
		hint: "Close"
	},
	{
		q: 3,
		label: "Hard",
		hint: "Got it"
	},
	{
		q: 4,
		label: "Good",
		hint: "Solid"
	},
	{
		q: 5,
		label: "Easy",
		hint: "Instant"
	}
];
function launch(chFilter) {
	const s = startCardSession(chFilter);
	if (!s) {
		toast(chFilter ? `No cards waiting for chapter ${chFilter}.` : "Nothing to review right now.");
		return;
	}
	useStudy.getState().setActiveSession(s);
}
function CardsPage() {
	const { chapter, start, fact } = Route$9.useSearch();
	const nav = useNavigate();
	const ready = useHydrated();
	const session = useStudy((s) => s.activeSession);
	const setSession = useStudy((s) => s.setActiveSession);
	const patch = useStudy((s) => s.patchActiveSession);
	const rate = useStudy((s) => s.rate);
	const cards = useStudy((s) => s.cards);
	const newPerDay = useStudy((s) => s.newPerDay);
	const setNewPerDay = useStudy((s) => s.setNewPerDay);
	const streak = useStudy((s) => s.streak.count);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const current = useStudy.getState().activeSession;
		const clearSearch = () => void nav({
			to: "/cards",
			search: {},
			replace: true
		});
		if (fact !== void 0 && Number.isFinite(fact) && FACTS[fact]) {
			if (!(current && current.queue[current.pos] === fact && current.pos < current.queue.length)) useStudy.getState().setActiveSession(focusCardSession(fact));
			clearSearch();
			return;
		}
		if (chapter && Number.isFinite(chapter)) {
			if (!(current && current.filter === chapter && current.pos < current.queue.length)) {
				const s = startCardSession(chapter);
				if (s) useStudy.getState().setActiveSession(s);
				else toast(`No cards waiting for chapter ${chapter}.`);
			}
			clearSearch();
			return;
		}
		if (start) {
			if (!(current && current.filter == null && current.pos < current.queue.length)) {
				const s = startCardSession();
				if (s) useStudy.getState().setActiveSession(s);
				else toast("Nothing to review right now.");
			}
			clearSearch();
		}
	}, [
		ready,
		chapter,
		start,
		fact,
		nav
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const s = useStudy.getState().activeSession;
			if (!s || s.pos >= s.queue.length) return;
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
			if (e.code === "Space" || e.key === " ") {
				e.preventDefault();
				if (!s.revealed) useStudy.getState().patchActiveSession({ revealed: true });
				return;
			}
			if (!s.revealed) return;
			if (e.key >= "0" && e.key <= "5") applyRate(Number(e.key));
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	function applyRate(q) {
		const s = useStudy.getState().activeSession;
		if (!s || s.pos >= s.queue.length) return;
		const i = s.queue[s.pos];
		rate(cardId(i), q);
		const nextQ = [...s.queue];
		if (q < 3) nextQ.push(i);
		useStudy.getState().setActiveSession({
			...s,
			queue: nextQ,
			pos: s.pos + 1,
			revealed: false,
			done: s.done + 1,
			ratings: [...s.ratings, q]
		});
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-xl bg-paper-2" });
	if (!session) {
		const due = dueCards().length;
		const fresh = newCards().length;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.18em] text-muted uppercase",
						children: "Spaced repetition"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-3xl font-semibold",
						children: "Flashcards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-ink-soft",
						children: "Every date, person, Act, battle and institution is a card. SM-2 schedules each one just before you would forget it. Rate recall from 0 (blank) to 5 (easy). Space to reveal, 0–5 to rate."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-paper-2 p-4 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-semibold tabular-nums text-navy",
							children: due
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "Due now"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-paper-2 p-4 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-semibold tabular-nums text-navy",
							children: fresh
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "New left"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-paper-2 p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "crimson",
							className: "w-full",
							onClick: () => launch(),
							children: "Start session"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 flex items-center justify-between text-sm text-ink-soft",
							children: ["New cards per session", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: newPerDay,
								onChange: (e) => setNewPerDay(Number(e.target.value)),
								className: "h-9 rounded-sm bg-paper px-2 shadow-[0_0_0_1px_var(--line)]",
								children: [
									5,
									10,
									15,
									20
								].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: n,
									children: n
								}, n))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [[
								1,
								2,
								3,
								4,
								5
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => launch(n),
								children: [
									"Ch ",
									n,
									" only"
								]
							}, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => launch(),
								children: "Mixed"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feynman, {})
			]
		});
	}
	if (session.pos >= session.queue.length) {
		const dueLeft = dueCards().length;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-paper-2 px-5 py-10 text-center shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.18em] text-muted uppercase",
					children: "Session complete"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-2 font-display text-3xl font-semibold",
					children: [session.done, " cards reviewed"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-ink-soft",
					children: [
						"Streak: ",
						streak,
						" day",
						streak === 1 ? "" : "s",
						".",
						dueLeft ? ` ${dueLeft} still due — keep going?` : " Nothing else due. Come back tomorrow."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-center gap-2 sm:flex-row",
					children: [dueLeft > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "crimson",
						onClick: () => launch(session.filter ?? void 0),
						children: "Continue reviewing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setSession(null),
						children: "Back to overview"
					})]
				})
			]
		});
	}
	const i = session.queue[session.pos];
	const f = FACTS[i];
	if (!f) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-paper-2 p-6 text-center shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-ink-soft",
			children: "This card is no longer in the bank."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-4",
			onClick: () => setSession(null),
			children: "Back to overview"
		})]
	});
	const c = cards[cardId(i)];
	const isNew = !c || c.seen === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums",
					children: [
						session.pos + 1,
						" / ",
						session.queue.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-xs font-medium hover:text-ink",
					onClick: () => setSession(null),
					children: "End session"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: 100 * session.pos / session.queue.length }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-60 rounded-xl bg-paper-2 px-6 py-10 text-center shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-4 left-4 text-[11px] font-semibold tracking-wider text-muted uppercase",
						children: TOPICS[f.t].name
					}),
					isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-4 right-4 text-[11px] font-semibold tracking-wider text-navy uppercase",
						children: "New"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-xl font-semibold leading-snug sm:text-2xl",
						children: f.q
					}),
					session.revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 border-t border-dashed border-line pt-5 text-[17px] text-ink",
						children: f.a
					})
				]
			}),
			session.revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-center text-sm text-muted",
					children: "How well did you recall it?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-1.5 sm:grid-cols-6",
					children: RATES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => applyRate(r.q),
						className: cn("flex min-h-14 flex-col items-center justify-center rounded-md px-2 py-2 text-paper-2 transition-[scale] duration-150 active:scale-[0.96]", r.q < 3 ? "bg-crimson/85 hover:bg-crimson" : "bg-navy hover:bg-navy/90"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold",
							children: r.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] opacity-80",
							children: [
								r.q,
								" · ",
								r.hint
							]
						})]
					}, r.q))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-[11px] text-muted",
					children: "Keys 0–5 · Space to reveal"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full",
				onClick: () => patch({ revealed: true }),
				children: "Show answer"
			})
		]
	});
}
function Feynman() {
	const items = (0, import_react.useMemo)(() => checkItems(), []);
	const [idx, setIdx] = (0, import_react.useState)(0);
	const feynman = useStudy((s) => s.feynman);
	const save = useStudy((s) => s.saveFeynman);
	const it = items[idx];
	const [out, setOut] = (0, import_react.useState)("");
	if (!it) return null;
	function compare() {
		const chObj = getChapter(it.ch);
		if (!chObj) return;
		const sec = chObj.sections[it.sec];
		const words = it.x.toLowerCase().split(/\W+/).filter((w) => w.length > 3 && !/^(that|this|with|about|between|which|what|when|does|have|been|from|they|their)$/.test(w));
		const score = (x) => words.reduce((a, w) => a + (x.toLowerCase().includes(w) ? 1 : 0), 0);
		let scored = sec.blocks.filter((b) => b.t === "p").map((b) => ({
			b,
			s: score(b.x)
		})).sort((a, b) => b.s - a.s).slice(0, 2).filter((x) => x.s > 0);
		if (!scored.length) {
			const all = [];
			chObj.sections.forEach((s2) => s2.blocks.forEach((b) => {
				if (b.t === "p") all.push({
					b,
					s: score(b.x)
				});
			}));
			scored = all.sort((a, b) => b.s - a.s).slice(0, 2).filter((x) => x.s >= 2);
		}
		setOut(scored.map((x) => x.b.x).join("\n\n") || sec.blocks.filter((b) => b.t === "p").slice(-2).map((b) => b.x).join("\n\n"));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-paper-2 p-5 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Explain it yourself"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-ink-soft",
				children: "The Feynman technique: pick a “Check that you understand” point, write it in your own words, then compare with the handbook."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "mt-3 h-11 w-full rounded-md bg-paper px-3 shadow-[0_0_0_1px_var(--line)]",
				value: idx,
				onChange: (e) => {
					setIdx(Number(e.target.value));
					setOut("");
				},
				children: items.map((item, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
					value: k,
					children: [
						"Ch ",
						item.ch,
						" · ",
						item.x.length > 64 ? `${item.x.slice(0, 64)}…` : item.x
					]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				className: "mt-3",
				placeholder: "Type your explanation…",
				value: feynman[it.id] ?? "",
				onChange: (e) => save(it.id, e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: compare,
					children: "Compare with the handbook"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/read/$chapterId/$sectionId",
						params: {
							chapterId: String(it.ch),
							sectionId: String(it.sec)
						},
						children: "Open this section"
					})
				})]
			}),
			out && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-lg bg-paper p-4 text-sm leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-2 text-[11px] font-semibold tracking-wider text-crimson uppercase",
					children: ["Official wording — ", it.x]
				}), out.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: p
				}, i))]
			})
		]
	});
}
//#endregion
export { CardsPage as component };
