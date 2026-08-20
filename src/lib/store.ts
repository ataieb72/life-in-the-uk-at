import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FACTS, TOPICS } from "./content";
import { freshCard, rateCard } from "./srs";
import type {
  CardSession,
  CardState,
  TestHistoryItem,
  TestRun,
} from "./types";
import { dayKey, shuffle, startOfDay } from "./utils";

const V1_KEY = "liuk-study-v1";

type Theme = "light" | "dark";

export type StudyState = {
  cards: Record<string, CardState>;
  streak: { last: number; count: number };
  chaptersDone: number[];
  sectionsRead: string[];
  bookmarks: string[];
  testHistory: TestHistoryItem[];
  feynman: Record<string, string>;
  theme: Theme;
  progressive: boolean;
  newPerDay: number;
  dailyGoal: number;
  lastRead: { chapter: number; section: number } | null;
  studyLog: Record<string, number>;
  readerSize: "sm" | "md" | "lg";
  activeTest: TestRun | null;
  activeSession: CardSession | null;
  hydrated: boolean;

  card: (id: string) => CardState;
  rate: (id: string, q: number) => void;
  bumpStreak: () => void;
  logStudy: (n?: number) => void;
  toggleChapterDone: (num: number) => void;
  markChapterDone: (num: number) => void;
  markSectionRead: (id: string) => void;
  toggleBookmark: (id: string) => void;
  setTheme: (t: Theme) => void;
  setProgressive: (v: boolean) => void;
  setNewPerDay: (n: number) => void;
  setDailyGoal: (n: number) => void;
  setReaderSize: (s: "sm" | "md" | "lg") => void;
  setLastRead: (chapter: number, section: number) => void;
  saveFeynman: (id: string, text: string) => void;
  pushTest: (item: TestHistoryItem) => void;
  setActiveTest: (t: TestRun | null) => void;
  patchActiveTest: (p: Partial<TestRun>) => void;
  setActiveSession: (s: CardSession | null) => void;
  patchActiveSession: (p: Partial<CardSession>) => void;
  resetAll: () => void;
  importState: (raw: unknown) => boolean;
};

function migrateV1(): Partial<StudyState> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(V1_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as {
      cards?: Record<string, CardState>;
      streak?: { last: number; count: number };
      chaptersDone?: number[];
      testHistory?: TestHistoryItem[];
      feynman?: Record<string, string>;
      settings?: { theme?: Theme; progressive?: boolean; newPerDay?: number };
    };
    if (!s.cards) return null;
    return {
      cards: s.cards,
      streak: s.streak ?? { last: 0, count: 0 },
      chaptersDone: s.chaptersDone ?? [],
      testHistory: s.testHistory ?? [],
      feynman: s.feynman ?? {},
      theme: s.settings?.theme ?? "light",
      progressive: s.settings?.progressive ?? false,
      newPerDay: s.settings?.newPerDay ?? 10,
    };
  } catch {
    return null;
  }
}

const defaults = (): Omit<
  StudyState,
  | "card"
  | "rate"
  | "bumpStreak"
  | "logStudy"
  | "toggleChapterDone"
  | "markChapterDone"
  | "markSectionRead"
  | "toggleBookmark"
  | "setTheme"
  | "setProgressive"
  | "setNewPerDay"
  | "setDailyGoal"
  | "setReaderSize"
  | "setLastRead"
  | "saveFeynman"
  | "pushTest"
  | "setActiveTest"
  | "patchActiveTest"
  | "setActiveSession"
  | "patchActiveSession"
  | "resetAll"
  | "importState"
> => ({
  cards: {},
  streak: { last: 0, count: 0 },
  chaptersDone: [],
  sectionsRead: [],
  bookmarks: [],
  testHistory: [],
  feynman: {},
  theme: "light",
  progressive: false,
  newPerDay: 10,
  dailyGoal: 20,
  lastRead: null,
  studyLog: {},
  readerSize: "md",
  activeTest: null,
  activeSession: null,
  hydrated: false,
});

export const useStudy = create<StudyState>()(
  persist(
    (set, get) => ({
      ...defaults(),

      card: (id) => get().cards[id] ?? freshCard(),

      rate: (id, q) => {
        const prev = get().cards[id] ?? freshCard();
        const next = rateCard(prev, q);
        set((s) => ({ cards: { ...s.cards, [id]: next } }));
        get().bumpStreak();
        get().logStudy(1);
      },

      bumpStreak: () => {
        const today = Math.floor(Date.now() / 86_400_000);
        const { last, count } = get().streak;
        if (last === today) return;
        set({
          streak: {
            last: today,
            count: last === today - 1 ? count + 1 : 1,
          },
        });
      },

      logStudy: (n = 1) => {
        const k = dayKey();
        set((s) => ({ studyLog: { ...s.studyLog, [k]: (s.studyLog[k] ?? 0) + n } }));
      },

      toggleChapterDone: (num) =>
        set((s) => ({
          chaptersDone: s.chaptersDone.includes(num)
            ? s.chaptersDone.filter((n) => n !== num)
            : [...s.chaptersDone, num],
        })),

      markChapterDone: (num) =>
        set((s) => ({
          chaptersDone: s.chaptersDone.includes(num)
            ? s.chaptersDone
            : [...s.chaptersDone, num],
        })),

      markSectionRead: (id) =>
        set((s) => ({
          sectionsRead: s.sectionsRead.includes(id)
            ? s.sectionsRead
            : [...s.sectionsRead, id],
        })),

      toggleBookmark: (id) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(id)
            ? s.bookmarks.filter((x) => x !== id)
            : [...s.bookmarks, id],
        })),

      setTheme: (theme) => {
        set({ theme });
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", theme === "dark");
        }
      },

      setProgressive: (progressive) => set({ progressive }),
      setNewPerDay: (newPerDay) => set({ newPerDay }),
      setDailyGoal: (dailyGoal) => set({ dailyGoal }),
      setReaderSize: (readerSize) => set({ readerSize }),
      setLastRead: (chapter, section) => set({ lastRead: { chapter, section } }),
      saveFeynman: (id, text) =>
        set((s) => ({ feynman: { ...s.feynman, [id]: text } })),
      pushTest: (item) =>
        set((s) => ({ testHistory: [...s.testHistory, item] })),
      setActiveTest: (activeTest) => set({ activeTest }),
      patchActiveTest: (p) =>
        set((s) =>
          s.activeTest ? { activeTest: { ...s.activeTest, ...p } } : {},
        ),
      setActiveSession: (activeSession) => set({ activeSession }),
      patchActiveSession: (p) =>
        set((s) =>
          s.activeSession ? { activeSession: { ...s.activeSession, ...p } } : {},
        ),

      resetAll: () => {
        const theme = get().theme;
        set({ ...defaults(), theme, hydrated: true });
      },

      importState: (raw) => {
        if (!raw || typeof raw !== "object") return false;
        const d = raw as Partial<StudyState> & { settings?: { theme?: Theme } };
        if (!d.cards || typeof d.cards !== "object") return false;
        set({
          cards: d.cards,
          streak: d.streak ?? { last: 0, count: 0 },
          chaptersDone: d.chaptersDone ?? [],
          sectionsRead: d.sectionsRead ?? [],
          bookmarks: d.bookmarks ?? [],
          testHistory: d.testHistory ?? [],
          feynman: d.feynman ?? {},
          theme: d.theme ?? d.settings?.theme ?? get().theme,
          progressive: d.progressive ?? false,
          newPerDay: d.newPerDay ?? 10,
          dailyGoal: d.dailyGoal ?? 20,
          lastRead: d.lastRead ?? null,
          studyLog: d.studyLog ?? {},
          readerSize: d.readerSize ?? "md",
          activeTest: null,
          activeSession: null,
        });
        get().setTheme(get().theme);
        return true;
      },
    }),
    {
      name: "liuk-study-v2",
      partialize: (s) => ({
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
        readerSize: s.readerSize,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        state.activeTest = null;
        state.activeSession = null;
        if (Object.keys(state.cards).length === 0) {
          const v1 = migrateV1();
          if (v1) state.importState(v1);
        }
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", state.theme === "dark");
        }
      },
    },
  ),
);

export function cardId(i: number): string {
  return `f${i}`;
}

export function dueCards(): number[] {
  const now = Date.now();
  const cards = useStudy.getState().cards;
  return FACTS.map((_, i) => i).filter((i) => {
    const c = cards[cardId(i)];
    return c && c.seen > 0 && c.next <= now;
  });
}

export function newCards(): number[] {
  const cards = useStudy.getState().cards;
  return FACTS.map((_, i) => i).filter((i) => {
    const c = cards[cardId(i)];
    return !c || c.seen === 0;
  });
}

export function startCardSession(chFilter?: number): CardSession | null {
  const pool = (i: number) =>
    chFilter === undefined || TOPICS[FACTS[i].t].ch === chFilter;
  const due = shuffle(dueCards().filter(pool));
  const perDay = useStudy.getState().newPerDay;
  const fresh = shuffle(newCards().filter(pool)).slice(0, Math.max(5, perDay));
  const queue: number[] = [];
  let d = 0;
  let n = 0;
  while (d < due.length || n < fresh.length) {
    for (let k = 0; k < 4 && d < due.length; k++) queue.push(due[d++]);
    if (n < fresh.length) queue.push(fresh[n++]);
  }
  if (!queue.length) return null;
  return {
    queue: queue.slice(0, 40),
    pos: 0,
    revealed: false,
    done: 0,
    ratings: [],
    filter: chFilter ?? null,
    startedAt: Date.now(),
  };
}

export function focusCardSession(index: number): CardSession {
  const fact = FACTS[index];
  const ch = fact ? TOPICS[fact.t].ch : undefined;
  const rest = startCardSession(ch);
  const queue = [index, ...(rest?.queue.filter((x) => x !== index) ?? [])].slice(
    0,
    40,
  );
  return {
    queue,
    pos: 0,
    revealed: false,
    done: 0,
    ratings: [],
    filter: ch ?? null,
    startedAt: Date.now(),
  };
}

export function masteredCount(): number {
  const cards = useStudy.getState().cards;
  return FACTS.filter((_, i) => {
    const c = cards[cardId(i)];
    return c && c.int >= 21;
  }).length;
}

export function seenCount(): number {
  const cards = useStudy.getState().cards;
  return FACTS.filter((_, i) => {
    const c = cards[cardId(i)];
    return c && c.seen > 0;
  }).length;
}

export function todayStudied(): number {
  return useStudy.getState().studyLog[dayKey()] ?? 0;
}

export function chapterUnlocked(num: number): boolean {
  const s = useStudy.getState();
  if (!s.progressive || num <= 1) return true;
  return s.chaptersDone.includes(num - 1) || s.chaptersDone.includes(num);
}

export function topicMastery(ids: number[]): number {
  if (!ids.length) return 0;
  const cards = useStudy.getState().cards;
  const m = ids.reduce((a, i) => {
    const c = cards[cardId(i)];
    return a + (c ? Math.min(1, c.int / 21) : 0);
  }, 0);
  return Math.round((100 * m) / ids.length);
}

export function readinessScore(): number {
  const seen = seenCount() / FACTS.length;
  const mast = masteredCount() / FACTS.length;
  const ch = useStudy.getState().chaptersDone.filter((n) => n <= 5).length / 5;
  const tests = useStudy.getState().testHistory.filter((t) => !t.mini);
  const last = tests.slice(-3);
  const testAvg = last.length
    ? last.reduce((a, t) => a + t.score / t.total, 0) / last.length
    : 0;
  const score = seen * 25 + mast * 35 + ch * 15 + testAvg * 25;
  return Math.round(score);
}

export function weakTopicIds(): number[] {
  const cards = useStudy.getState().cards;
  const history = useStudy.getState().testHistory;
  const wrongBias = new Map<number, number>();
  FACTS.forEach((_, i) => {
    const c = cards[cardId(i)];
    if (c && c.lapses > 0) wrongBias.set(i, (wrongBias.get(i) ?? 0) + c.lapses);
    if (c && c.seen > 0 && c.int < 6) wrongBias.set(i, (wrongBias.get(i) ?? 0) + 1);
  });
  void history;
  const ranked = [...wrongBias.entries()].sort((a, b) => b[1] - a[1]);
  if (ranked.length >= 8) return ranked.slice(0, 24).map(([i]) => i);
  return FACTS.map((_, i) => i)
    .filter((i) => {
      const c = cards[cardId(i)];
      return !c || c.seen === 0 || c.int < 6;
    })
    .slice(0, 24);
}

export function nextReviewTs(): number {
  const cards = Object.values(useStudy.getState().cards).filter((c) => c.seen > 0);
  if (!cards.length) return 0;
  return Math.min(...cards.map((c) => c.next));
}

export { startOfDay };
