import { chromium } from "playwright";

const base = process.argv[2] || "http://127.0.0.1:8080";
const errors = [];
const notes = [];
const fail = (m) => errors.push(m);

const browser = await chromium.launch({ args: ["--no-sandbox"] });

async function newPage(viewport = { width: 1280, height: 900 }) {
  const page = await browser.newPage({ viewport });
  const local = [];
  page.on("pageerror", (e) => {
    const m = `pageerror: ${e.message}`;
    local.push(m);
    errors.push(m);
  });
  page.on("console", (m) => {
    if (m.type() === "error") {
      const t = m.text();
      if (/Failed to load resource|favicon|manifest/.test(t)) return;
      const msg = `console: ${t}`;
      local.push(msg);
      errors.push(msg);
    }
  });
  return { page, local };
}

async function body(page) {
  return (await page.locator("body").innerText()).replace(/\s+/g, " ");
}

async function shot(page, name) {
  await page.screenshot({
    path: `/workspace/screenshots/audit-${name}.png`,
    fullPage: true,
  });
}

try {
  const { page } = await newPage();

  // ── Home ──────────────────────────────────────────────
  await page.goto(base + "/", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(500);
  let t = await body(page);
  console.log("HOME", page.url(), t.slice(0, 180));
  if (!/Prepare for the Life in the UK test/i.test(t)) fail("home missing hero copy");
  if (!/405 facts/i.test(t)) fail("home missing 405 facts");
  await shot(page, "home");

  // Theme toggle
  const themeBtn = page.getByRole("button", { name: /switch to/i });
  if (!(await themeBtn.count())) fail("theme toggle missing");
  else {
    await themeBtn.click();
    await page.waitForTimeout(200);
    const dark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    notes.push(`dark after first toggle: ${dark}`);
    if (!dark) fail("theme toggle did not add dark class");
    await themeBtn.click();
    await page.waitForTimeout(150);
  }

  // ── Start review CTA ──────────────────────────────────
  await page.getByRole("link", { name: /start review/i }).click();
  await page.waitForTimeout(600);
  t = await body(page);
  console.log("REVIEW", page.url(), t.slice(0, 160));
  if (!/show answer/i.test(t) && !/end session/i.test(t)) fail("Start review did not open a session");
  // reveal + rate
  if (await page.getByRole("button", { name: /show answer/i }).count()) {
    await page.getByRole("button", { name: /show answer/i }).click();
    await page.waitForTimeout(200);
    t = await body(page);
    if (!/how well did you recall/i.test(t)) fail("reveal did not show rating scale");
    const easy = page.getByRole("button", { name: /easy/i });
    if (await easy.count()) {
      await easy.click();
      await page.waitForTimeout(250);
      t = await body(page);
      if (!/2 \/|show answer|session complete/i.test(t)) fail("rating a card did not advance");
    } else fail("Easy rate button missing");
  }
  if (await page.getByRole("button", { name: /end session/i }).count()) {
    await page.getByRole("button", { name: /end session/i }).click();
    await page.waitForTimeout(200);
  }

  // ── Keyboard on cards ─────────────────────────────────
  await page.goto(base + "/cards", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  if (await page.getByRole("button", { name: /start session/i }).count()) {
    await page.getByRole("button", { name: /start session/i }).click();
    await page.waitForTimeout(300);
  }
  await page.keyboard.press("Space");
  await page.waitForTimeout(200);
  t = await body(page);
  if (!/how well did you recall/i.test(t)) fail("Space did not reveal card");
  await page.keyboard.press("5");
  await page.waitForTimeout(200);
  t = await body(page);
  notes.push("after key-5: " + t.slice(0, 120));
  if (await page.getByRole("button", { name: /end session/i }).count()) {
    await page.getByRole("button", { name: /end session/i }).click();
  }

  // Chapter-only cards
  await page.getByRole("button", { name: /ch 2 only/i }).click();
  await page.waitForTimeout(400);
  t = await body(page);
  console.log("CH2 CARDS", t.slice(0, 180));
  if (!/what is the uk|uk nations|end session/i.test(t)) {
    notes.push("ch2 cards body: " + t.slice(0, 200));
  }
  if (!/end session|show answer/i.test(t)) fail("Ch 2 only did not start a session");
  await shot(page, "cards-ch2");
  if (await page.getByRole("button", { name: /end session/i }).count()) {
    await page.getByRole("button", { name: /end session/i }).click();
  }

  // ── Home mock exam ────────────────────────────────────
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  await page.getByRole("link", { name: /mock exam/i }).click();
  await page.waitForTimeout(600);
  t = await body(page);
  console.log("MOCK", t.slice(0, 180));
  if (!/Question 1 of 24/i.test(t)) fail("Mock exam did not start 24-q paper");
  if (!/\d+:\d+/.test(t)) fail("Timed mock missing timer");
  const timer1 = t.match(/(\d+):(\d+)/);
  // click an option — timer must keep ticking, not reset
  const opts = page.locator("main .rounded-xl button");
  if (await opts.count()) await opts.nth(0).click();
  await page.waitForTimeout(1600);
  t = await body(page);
  const timer2 = t.match(/(\d+):(\d+)/);
  notes.push(`timer ${timer1?.[0]} -> ${timer2?.[0]}`);
  if (timer1 && timer2) {
    const s1 = Number(timer1[1]) * 60 + Number(timer1[2]);
    const s2 = Number(timer2[1]) * 60 + Number(timer2[2]);
    if (s2 >= s1) fail(`timer did not count down after click (${timer1[0]} -> ${timer2[0]})`);
  }

  // ── Chapter quiz must REPLACE mock ────────────────────
  await page.goto(base + "/read/1", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  t = await body(page);
  console.log("READ CH1", t.slice(0, 160));
  const quiz = page.getByRole("link", { name: /chapter 1 quiz/i });
  if (!(await quiz.count())) fail("Chapter 1 quiz link missing");
  else {
    await quiz.click();
    await page.waitForTimeout(600);
    t = await body(page);
    console.log("CH1 QUIZ", t.slice(0, 180));
    if (!/Question 1 of 6/i.test(t)) fail("Chapter quiz did not replace in-progress mock");
    if (!/chapter quiz/i.test(t)) fail("Chapter quiz label missing");
  }

  // Flag
  const flag = page.getByRole("button", { name: /flag question/i });
  if (await flag.count()) {
    await flag.click();
    await page.waitForTimeout(150);
  } else fail("flag button missing");

  // In-app abandon
  page.once("dialog", (d) => {
    fail(`unexpected native dialog: ${d.message()}`);
    void d.dismiss();
  });
  await page.getByRole("button", { name: /abandon test/i }).click();
  await page.waitForTimeout(200);
  if (!(await page.getByRole("button", { name: /^abandon$/i }).count())) {
    fail("in-app abandon confirm missing");
  } else {
    await page.getByRole("button", { name: /^abandon$/i }).click();
    await page.waitForTimeout(300);
    t = await body(page);
    if (!/Timed mock exam/i.test(t)) fail("abandon did not return to lobby");
  }

  // ── Finish a quick ten ────────────────────────────────
  await page.getByRole("button", { name: /quick ten/i }).click();
  await page.waitForTimeout(400);
  for (let i = 0; i < 10; i++) {
    const answers = page.locator("main .rounded-xl button");
    const n = await answers.count();
    if (n) await answers.nth(i % Math.max(1, n)).click();
    const next = page.getByRole("button", { name: i === 9 ? /finish test/i : /^next$/i });
    if (await next.count()) await next.click();
    else fail(`missing next/finish on q${i + 1}`);
    await page.waitForTimeout(120);
  }
  t = await body(page);
  console.log("RESULT", t.slice(0, 200));
  if (!/\d+\/10/.test(t)) fail("quick ten did not show a score");
  if (!/take another/i.test(t)) fail("result missing Take another");
  await shot(page, "test-result");
  await page.getByRole("button", { name: /take another/i }).click();
  await page.waitForTimeout(250);
  t = await body(page);
  if (!/Timed mock exam/i.test(t)) fail("Take another did not return to lobby");

  // Weak-topic + untimed + chapter buttons on lobby
  await page.getByRole("button", { name: /weak-topic/i }).click();
  await page.waitForTimeout(400);
  t = await body(page);
  if (!/Question 1 of 12/i.test(t)) fail("weak-topic drill did not start 12-q paper");
  await page.getByRole("button", { name: /abandon test/i }).click();
  await page.getByRole("button", { name: /^abandon$/i }).click();
  await page.waitForTimeout(250);

  await page.getByRole("button", { name: /chapter 3/i }).click();
  await page.waitForTimeout(400);
  t = await body(page);
  if (!/Question 1 of 6/i.test(t)) fail("lobby Chapter 3 quiz did not start");
  await page.getByRole("button", { name: /abandon test/i }).click();
  await page.getByRole("button", { name: /^abandon$/i }).click();

  // ── Reader ────────────────────────────────────────────
  await page.goto(base + "/read", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  t = await body(page);
  if (!/Read the book/i.test(t)) fail("read index missing title");
  const ch3 = page.getByRole("link").filter({ hasText: /illustrious history/i }).first();
  if (!(await ch3.count())) fail("chapter 3 link missing");
  else {
    await ch3.click();
    await page.waitForTimeout(400);
    const sec = page.locator('a[href*="/read/3/"]').nth(1);
    if (await sec.count()) {
      await sec.click();
      await page.waitForTimeout(400);
      const reader = await page.locator(".reader").innerText().catch(() => "");
      notes.push("reader ch3 words " + reader.split(/\s+/).length);
      if (reader.length < 80) fail("reader body empty");
      // font size
      const typeBtn = page.getByRole("button", { name: /type size/i });
      if (await typeBtn.count()) await typeBtn.click();
      // bookmark
      const bm = page.getByRole("button", { name: /bookmark/i });
      if (await bm.count()) await bm.click();
      else fail("bookmark button missing");
      // next section
      const nextSec = page.getByRole("button", { name: /next section/i });
      if (await nextSec.count()) {
        await nextSec.click();
        await page.waitForTimeout(300);
      }
      await shot(page, "reader");
    } else fail("chapter 3 section link missing");
  }

  // Deep links
  await page.goto(base + "/read/99", { waitUntil: "networkidle" });
  await page.waitForTimeout(200);
  t = await body(page);
  if (!/not found/i.test(t)) fail("missing chapter did not show not-found");
  await page.goto(base + "/read/5/3", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const r5 = await page.locator(".reader").innerText().catch(() => "");
  if (r5.length < 80) fail("ch5 section reader empty");

  // ── Search ────────────────────────────────────────────
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  await page.locator("header button").filter({ hasText: /search/i }).first().click();
  await page.waitForTimeout(200);
  const input = page.getByPlaceholder(/search the handbook/i);
  if (!(await input.count())) fail("search input missing");
  else {
    await input.fill("Magna Carta");
    await page.waitForTimeout(400);
    const items = page.locator("[cmdk-item]");
    const n = await items.count();
    notes.push("search hits " + n);
    if (!n) fail("Magna Carta produced no search hits");
    else {
      await items.first().click();
      await page.waitForTimeout(500);
      console.log("SEARCH NAV", page.url());
      if (!/\/read\//.test(page.url())) fail("handbook search did not navigate to a section");
    }
  }

  await page.locator("header button").filter({ hasText: /search/i }).first().click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder(/search the handbook/i).fill("How many questions");
  await page.waitForTimeout(400);
  const factItems = page.locator("[cmdk-item]");
  if (await factItems.count()) {
    await factItems.last().click();
    await page.waitForTimeout(500);
    t = await body(page);
    console.log("FACT CARD", page.url(), t.slice(0, 180));
    if (!/How many questions are there in the Life in the UK test/i.test(t)) {
      fail("fact search did not open that card");
    }
  } else fail("fact search produced no items");
  if (await page.getByRole("button", { name: /end session/i }).count()) {
    await page.getByRole("button", { name: /end session/i }).click();
  }

  // ── Feynman ───────────────────────────────────────────
  t = await body(page);
  if (!/Explain it yourself/i.test(t)) {
    // may still be in session
    await page.goto(base + "/cards", { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    t = await body(page);
  }
  if (/Explain it yourself/i.test(t)) {
    await page.getByRole("button", { name: /compare with the handbook/i }).click();
    await page.waitForTimeout(300);
    t = await body(page);
    if (!/Official wording/i.test(t)) fail("Feynman compare produced no official wording");
    if (!(await page.getByRole("link", { name: /open this section/i }).count())) {
      fail("Feynman missing Open this section");
    }
  } else fail("Feynman block missing on cards lobby");

  // ── Progress ──────────────────────────────────────────
  await page.goto(base + "/progress", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  t = await body(page);
  console.log("PROGRESS", t.slice(0, 180));
  if (!/Study calendar/i.test(t)) fail("progress missing calendar");
  if (!/Chapter mastery/i.test(t)) fail("progress missing chapter mastery");
  if (!/Backup/i.test(t)) fail("progress missing backup");
  if (!/\d+\/10/.test(t) && !/Practice history/i.test(t)) notes.push("history maybe empty");
  await shot(page, "progress");

  // Reset uses in-app confirm
  await page.getByRole("button", { name: /reset all progress/i }).click();
  await page.waitForTimeout(200);
  if (!(await page.getByRole("button", { name: /delete everything/i }).count())) {
    fail("reset in-app confirm missing");
  } else {
    await page.getByRole("button", { name: /cancel/i }).click();
  }

  // ── Progressive unlock ────────────────────────────────
  await page.goto(base + "/read", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  const sw = page.getByLabel(/progressive unlock/i);
  if (!(await sw.count())) fail("progressive unlock switch missing");
  else {
    const before = await sw.getAttribute("data-state");
    await sw.click();
    await page.waitForTimeout(250);
    const after = await sw.getAttribute("data-state");
    notes.push(`progressive ${before} -> ${after}`);
    t = await body(page);
    // with no chapters done, ch2+ should lock
    if (after === "checked" && !/locked|lock/i.test(t) && !(await page.locator("button").filter({ hasText: /what is the uk/i }).count())) {
      // locked chapters become buttons not links
      const lockedBtns = await page.locator("button").filter({ hasText: /What is the UK|illustrious|thriving|Government/i }).count();
      notes.push("locked chapter buttons " + lockedBtns);
      if (!lockedBtns) fail("progressive unlock did not lock later chapters");
    }
    await sw.click();
  }

  // ── Login ─────────────────────────────────────────────
  await page.goto(base + "/login", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  t = await body(page);
  if (!/Sign in/i.test(t)) fail("login page missing");

  // ── Mobile ────────────────────────────────────────────
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const overflowHome = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
  );
  if (overflowHome) fail("mobile home horizontal overflow");
  const navLabels = await page.locator("nav[aria-label='Main'] a").allTextContents();
  notes.push("mobile nav: " + JSON.stringify(navLabels));
  if (!navLabels.some((x) => /home/i.test(x))) fail("mobile bottom nav missing");
  await shot(page, "mobile-home");

  await page.goto(base + "/cards", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  if (await page.getByRole("button", { name: /start session/i }).count()) {
    await page.getByRole("button", { name: /start session/i }).click();
    await page.waitForTimeout(300);
    if (await page.getByRole("button", { name: /show answer/i }).count()) {
      await page.getByRole("button", { name: /show answer/i }).click();
      await page.waitForTimeout(200);
    }
  }
  const overflowCards = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
  );
  if (overflowCards) fail("mobile cards horizontal overflow");
  await shot(page, "mobile-cards");

  await page.goto(base + "/test", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  const overflowTest = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
  );
  if (overflowTest) fail("mobile test horizontal overflow");
  await shot(page, "mobile-test");

  await page.close();
} catch (e) {
  fail(`script: ${e.message}\n${e.stack}`);
}

console.log("\n===== NOTES =====");
for (const n of notes) console.log("-", n);
console.log("\n===== ERRORS =====");
for (const e of errors) console.log("-", e);
console.log("error count", errors.length);

await browser.close();
process.exit(errors.length ? 1 : 0);
