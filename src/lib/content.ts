import handbookJson from "@/data/handbook.json";
import factsJson from "@/data/facts.json";
import type { Chapter, Fact, Handbook, Section, TopicId } from "./types";
import { readMinutes, wordCount } from "./utils";

export const HANDBOOK = handbookJson as Handbook;
export const FACTS = factsJson as Fact[];

export const TOPICS: Record<TopicId, { ch: number; name: string }> = {
  values: { ch: 1, name: "Values & principles" },
  "uk-nations": { ch: 2, name: "What is the UK" },
  "early-britain": { ch: 3, name: "Early Britain" },
  "middle-ages": { ch: 3, name: "The Middle Ages" },
  "tudors-stuarts": { ch: 3, name: "Tudors & Stuarts" },
  "global-power": { ch: 3, name: "A global power" },
  "20th-century": { ch: 3, name: "The 20th century" },
  "since-1945": { ch: 3, name: "Britain since 1945" },
  arts: { ch: 4, name: "Arts & culture" },
  customs: { ch: 4, name: "Customs & traditions" },
  leisure: { ch: 4, name: "Leisure" },
  places: { ch: 4, name: "Places of interest" },
  religion: { ch: 4, name: "Religion" },
  sport: { ch: 4, name: "Sport" },
  "uk-today": { ch: 4, name: "The UK today" },
  democracy: { ch: 5, name: "British democracy" },
  constitution: { ch: 5, name: "Constitution & government" },
  "rights-law": { ch: 5, name: "Rights & the law" },
  courts: { ch: 5, name: "The courts" },
  international: { ch: 5, name: "International institutions" },
  community: { ch: 5, name: "Your role in the community" },
};

export const TOPIC_IDS = Object.keys(TOPICS) as TopicId[];

export const ROMAN = ["", "I", "II", "III", "IV", "V", "VI"];

export function getChapter(num: number): Chapter | undefined {
  return HANDBOOK.chapters.find((c) => c.num === num);
}

export function getSection(ch: number, secIndex: number): Section | undefined {
  return getChapter(ch)?.sections[secIndex];
}

export function chapterFacts(ch: number): number[] {
  return FACTS.map((f, i) => i).filter((i) => TOPICS[FACTS[i].t].ch === ch);
}

export function topicFacts(topic: TopicId): number[] {
  return FACTS.map((f, i) => i).filter((i) => FACTS[i].t === topic);
}

export function sectionWords(sec: Section): number {
  return sec.blocks.reduce((n, b) => n + wordCount(b.x), 0);
}

export function chapterWords(ch: Chapter): number {
  return ch.sections.reduce((n, s) => n + sectionWords(s), 0);
}

export function chapterReadMinutes(ch: Chapter): number {
  return readMinutes(chapterWords(ch));
}

export type CheckItem = {
  id: string;
  ch: number;
  sec: number;
  title: string;
  x: string;
};

export function checkItems(): CheckItem[] {
  const out: CheckItem[] = [];
  HANDBOOK.chapters.forEach((c) =>
    c.sections.forEach((s, si) =>
      s.blocks.forEach((b, bi) => {
        if (b.t === "check") {
          out.push({
            ch: c.num,
            sec: si,
            title: s.title,
            x: b.x,
            id: `${c.num}.${si}.${bi}`,
          });
        }
      }),
    ),
  );
  return out;
}

export const TESTABLE_CHAPTERS = HANDBOOK.chapters.filter((c) => c.num <= 5);
