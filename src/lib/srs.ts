import type { CardState } from "./types";

export const DAY = 86_400_000;

export function freshCard(): CardState {
  return { ef: 2.5, int: 0, reps: 0, next: 0, seen: 0, lapses: 0 };
}

/** SM-2. Quality 0–5. Returns the next card state. */
export function rateCard(prev: CardState, q: number): CardState {
  const c: CardState = { ...prev, seen: prev.seen + 1 };
  if (q < 3) {
    c.reps = 0;
    c.int = 1;
    c.lapses += 1;
  } else {
    if (c.reps === 0) c.int = 1;
    else if (c.reps === 1) c.int = 6;
    else c.int = Math.round(c.int * c.ef);
    c.reps += 1;
  }
  c.ef = Math.max(1.3, c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  c.next = Date.now() + c.int * DAY;
  return c;
}
