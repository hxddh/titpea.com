const { chromium } = require("playwright");
const fs = require("fs");
const OUT = process.env.OUT || ".";
const LANG = process.env.LANG_UI || "en";
const FONT = fs
  .readFileSync(
    require("path").resolve(process.env.APP_REPO || "../goban-studio", "tests/fonts/inter-latin-wght-normal.woff2"),
  )
  .toString("base64");
const CSS = `@font-face{font-family:"Pinned";font-weight:100 900;src:url(data:font/woff2;base64,${FONT}) format("woff2")}:root,:root:lang(zh){--font:"Pinned","Noto Sans CJK SC",sans-serif !important}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function pointOf(page, x, y) {
  await page.waitForFunction(() => {
    const c = document.querySelector("canvas.board");
    return !!(c && window.__board && window.__board.canvas === c && window.__board.geom);
  });
  return page.evaluate(
    ([x, y]) => {
      const c = document.querySelector("canvas.board");
      const r = c.getBoundingClientRect();
      const g = window.__board.geom;
      return { x: r.left + g.ox + x * g.cell, y: r.top + g.oy + y * g.cell };
    },
    [x, y],
  );
}
module.exports = async function run(steps) {
  const { serve } = await import("./serve.mjs");
  const { server, origin } = await serve();
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: LANG === "zh" ? "zh-CN" : "en-US",
    reducedMotion: "reduce",
    deviceScaleFactor: 2,
    colorScheme: "light",
    bypassCSP: true,
  });
  await ctx.addInitScript((css) => {
    const add = () => {
      const s = document.createElement("style");
      s.textContent = css;
      document.head.appendChild(s);
    };
    if (document.head) add();
    else document.addEventListener("DOMContentLoaded", add);
  }, CSS);
  const page = await ctx.newPage();
  page.on("pageerror", (e) => console.log("PAGEERR", e.message));
  page.on("console", (m) => m.type() === "error" && console.log("CONSOLE", m.text()));
  if (process.env.CLOCK) {
    await page.clock.install({ time: new Date(process.env.CLOCK) });
    await page.clock.resume();
  }
  await page.goto(origin + "/");
  await page.waitForSelector(".ob-card");
  await page.click(".ob-card .btn.primary");
  await page.click(".choice >> nth=1");
  await page.waitForSelector("canvas.board, .page");
  // v10+: "Not now" on the placement offer, as scripts/ui-test.mjs onboard() does.
  await page.keyboard.press("Control+3");
  await page.click(".placement-offer .link");
  await page.waitForSelector(".learn-path .path-row");
  await page.waitForFunction(
    () =>
      JSON.parse(localStorage.getItem("goban9:settings.json") || "{}").onboarded === true &&
      JSON.parse(localStorage.getItem("goban9:profile.json") || "{}").placement?.skipped === true,
  );
  await page.evaluate(() => document.fonts.ready);
  try {
    await steps({
      page,
      origin,
      sleep,
      pointOf,
      OUT,
      LANG,
      click: async (x, y) => {
        const p = await pointOf(page, x, y);
        await page.mouse.click(p.x, p.y);
      },
    });
  } finally {
    await browser.close();
    server.close();
  }
};
