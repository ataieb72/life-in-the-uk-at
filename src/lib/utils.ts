import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function dayKey(ts = Date.now()): string {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function startOfDay(ts = Date.now()): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function fmtWhen(ts: number): string {
  if (!ts) return "—";
  const d = ts - Date.now();
  if (d <= 0) return "now";
  const DAY = 86_400_000;
  if (d < DAY) return `in ${Math.max(1, Math.round(d / 3_600_000))}h`;
  return `in ${Math.round(d / DAY)}d`;
}

export function fmtDate(ts: number): string {
  return new Date(ts).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function fmtDateTime(ts: number): string {
  return new Date(ts).toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function readMinutes(words: number): number {
  return Math.max(1, Math.round(words / 200));
}

export function highlightDates(text: string): string {
  return text.replace(
    /\b(1?\d{3}(?:–|-)\d{2,4}|[12]\d{3}|AD \d+|\d+ BC)\b/g,
    "<mark>$1</mark>",
  );
}

export function escapeHtml(t: string): string {
  return t
    .replace(/&/g, "\u0026amp;")
    .replace(/</g, "\u0026lt;")
    .replace(/>/g, "\u0026gt;")
    .replace(/"/g, "\u0026quot;");
}
