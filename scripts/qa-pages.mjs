import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = process.argv[2] || "http://127.0.0.1:8080";
await mkdir("/workspace/screenshots", { recursive: true });

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const errors = [];

async function shot(name, url, viewport = { width: 1280, height: 800 }, action) {
  const page = await browser.newPage({ viewport });
  page.on("pageerror", (e) => errors.push(`${name}: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`${name} console: ${m.text()}`);
  });
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(400);
  if (action) await action(page);
  await page.screenshot({
    path: `/workspace/screenshots/${name}.png`,
    fullPage: true,
  });
  const text = (await page.locator("body").innerText()).slice(0, 200);
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
  });
  console.log(name, { overflow, text: text.replace(/\s+/g, " ").slice(0, 140) });
  await page.close();
}

await shot("home-desktop", `${base}/`);
await shot("home-mobile", `${base}/`, { width: 390, height: 844 });
await shot("read", `${base}/read`);
await shot("read-ch1", `${base}/read/1`);
await shot("read-sec", `${base}/read/3/1`);
await shot("cards", `${base}/cards`);
await shot("test", `${base}/test`);
await shot("progress", `${base}/progress`);

await shot("cards-session", `${base}/cards`, { width: 1280, height: 800 }, async (page) => {
  await page.getByRole("button", { name: /start session/i }).click();
  await page.waitForTimeout(300);
  const show = page.getByRole("button", { name: /show answer/i });
  if (await show.count()) {
    await show.click();
    await page.waitForTimeout(200);
  }
});

await shot("test-run", `${base}/test`, { width: 1280, height: 800 }, async (page) => {
  await page.getByRole("button", { name: /quick ten/i }).click();
  await page.waitForTimeout(400);
  const opt = page.locator("button").filter({ hasText: /.+/ }).nth(4);
  if (await opt.count()) await opt.click();
});

console.log("errors", errors);
await browser.close();
if (errors.length) process.exit(1);
