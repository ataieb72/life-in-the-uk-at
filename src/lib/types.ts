export type BlockType = "p" | "infohead" | "info" | "checkhead" | "check";

export type Block = {
  t: BlockType;
  x: string;
};

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

export type Chapter = {
  num: number;
  title: string;
  sections: Section[];
};

export type Handbook = {
  title: string;
  chapters: Chapter[];
};

export type TopicId =
  | "values"
  | "uk-nations"
  | "early-britain"
  | "middle-ages"
  | "tudors-stuarts"
  | "global-power"
  | "20th-century"
  | "since-1945"
  | "arts"
  | "customs"
  | "leisure"
  | "places"
  | "religion"
  | "sport"
  | "uk-today"
  | "democracy"
  | "constitution"
  | "rights-law"
  | "courts"
  | "international"
  | "community";

export type Fact = {
  t: TopicId;
  q: string;
  a: string;
  d: [string, string, string];
  s: string;
};

export type CardState = {
  ef: number;
  int: number;
  reps: number;
  next: number;
  seen: number;
  lapses: number;
};

export type TestHistoryItem = {
  at: number;
  score: number;
  total: number;
  mini: boolean;
  chapter?: number | null;
  timed?: boolean;
  seconds?: number;
  mode?: string;
};

export type TestOption = { x: string; ok: boolean };

export type TestQuestion = {
  i: number;
  opts: TestOption[];
  sel: number | null;
  flagged: boolean;
};

export type TestRun = {
  qs: TestQuestion[];
  pos: number;
  chapter: number | null;
  mini: boolean;
  timed: boolean;
  remaining: number;
  startedAt: number;
  done: boolean;
  score: number;
  mode: string;
};

export type CardSession = {
  queue: number[];
  pos: number;
  revealed: boolean;
  done: number;
  ratings: number[];
  filter: number | null;
  startedAt: number;
};
