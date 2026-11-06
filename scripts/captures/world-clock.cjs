// Capture World Clock 9.0.0 (real extension loaded unpacked, fresh profile, fixed clock).
const { chromium } = require("playwright");
const sharp = require("sharp");
const fs = require("fs"),
  os = require("os"),
  path = require("path");
const EXT = path.resolve(process.env.APP_REPO || "../world-clock", "extension");
const OUT = process.env.OUT || "captures-out/world-clock";

// Fixed instants: en 2026-11-04 12:20 UTC, zh 01:20 UTC (shifted +3h → inside everyone's working hours; no DST change within 14 days).
const SETS = {
  en: {
    locale: "en-US",
    lang: "en_US.UTF-8",
    tz: "Europe/London",
    time: "2026-11-04T12:20:00Z",
    cities: ["local", "paris", "berlin", "new-york", "toronto"],
    searchCities: ["local", "new-york", "tokyo", "sydney", "san-francisco"],
    query: "san",
    person: "new-york",
    label: "Alice",
    work: ["8", "16"],
  },
  zh: {
    locale: "zh-CN",
    lang: "zh_CN.UTF-8",
    tz: "Asia/Shanghai",
    time: "2026-11-04T01:20:00Z",
    cities: ["local", "tokyo", "seoul", "singapore", "sydney"],
    searchCities: ["local", "new-york", "london", "tokyo", "sydney", "singapore"],
    query: "新",
    person: "london",
    label: "Alice",
    work: ["10", "19"],
  },
};
const ONLY = process.argv[2];

async function save(buf, name) {
  fs.writeFileSync(path.join(OUT, name + ".png"), buf);
  await sharp(buf)
    .webp({ quality: 90 })
    .toFile(path.join(OUT, name + ".webp"));
  const m = await sharp(buf).metadata();
  console.log(name, m.width + "x" + m.height);
}

async function open(S, scheme, list = S.searchCities) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "wc-"));
  const ctx = await chromium.launchPersistentContext(profile, {
    channel: "chromium",
    headless: true,
    locale: S.locale,
    timezoneId: S.tz,
    deviceScaleFactor: 2,
    viewport: { width: 340, height: 600 },
    colorScheme: scheme,
    env: { ...process.env, LANG: S.lang, LANGUAGE: S.lang.split(".")[0] },
    args: [`--lang=${S.locale}`, `--disable-extensions-except=${EXT}`, `--load-extension=${EXT}`],
  });
  await ctx.clock.setFixedTime(new Date(S.time));
  const page = await ctx.newPage();
  await page.goto("chrome://extensions");
  await page.waitForTimeout(400);
  const id = await page.evaluate(
    () => new Promise((r) => chrome.developerPrivate.getExtensionsInfo((l) => r(l[0].id))),
  );
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(`chrome-extension://${id}/popup.html`);
  await page.waitForTimeout(300);
  // Seed the city list in the extension's own storage, then reload.
  await page.evaluate((c) => {
    localStorage.clear();
    return chrome.storage.sync.set({ v: 2, cities: c, theme: "default", scheme: "auto", people: {} });
  }, list);
  await page.reload();
  await page.waitForTimeout(500);
  console.log("  now in page:", await page.evaluate(() => new Date().toString()));
  const fit = async () => {
    await page.setViewportSize({ width: 340, height: 600 });
    const h = Math.ceil(await page.evaluate(() => document.body.getBoundingClientRect().height));
    await page.setViewportSize({ width: 340, height: Math.min(600, h) });
    await page.waitForTimeout(150);
  };
  const done = async () => {
    console.log("  errors", errors);
    await ctx.close();
    fs.rmSync(profile, { recursive: true, force: true });
  };
  await page.mouse.move(339, 1);
  return { page, fit, done };
}

(async () => {
  for (const [key, S] of Object.entries(SETS)) {
    if (ONLY && ONLY !== key) continue;
    // 1. scroll +3h
    for (const scheme of key === "en" ? ["dark", "light"] : ["dark"]) {
      const { page, fit, done } = await open(S, scheme, S.cities);
      for (let i = 0; i < 3; i++) await page.keyboard.press("ArrowDown");
      await page.waitForTimeout(500);
      await page.mouse.move(339, 1);
      await fit();
      await save(await page.screenshot(), `world-clock-scroll-${key}` + (scheme === "light" ? "-light" : ""));
      console.log(
        await page.evaluate(
          () =>
            [...document.querySelectorAll(".row")].map((r) => r.innerText.replace(/\s+/g, " ")).join(" | ") +
            " || pill=" +
            document.getElementById("shiftLabel").textContent +
            " hint=" +
            document.getElementById("hint").textContent,
        ),
      );
      await done();
    }
    // 2. search
    {
      const { page, fit, done } = await open(S, "dark");
      await page.click("#openSettings");
      await page.fill("#search", S.query);
      await page.waitForTimeout(300);
      await page.evaluate(() => document.activeElement.blur());
      await page.mouse.move(339, 1);
      await fit();
      await save(await page.screenshot(), `world-clock-search-${key}`);
      console.log(await page.evaluate(() => document.getElementById("settings").innerText.replace(/\s+/g, " ")));
      await done();
    }
    // 3. names + working hours
    {
      const { page, fit, done } = await open(S, "dark");
      await page.click("#openSettings");
      await page.click(`#cityList li[data-key="${S.person}"]`);
      await page.waitForTimeout(200);
      await page.fill("#cityList .edit input", S.label);
      const sel = page.locator("#cityList .edit select");
      await sel.nth(0).selectOption(S.work[0]);
      await sel.nth(1).selectOption(S.work[1]);
      await page.waitForTimeout(300);
      await page.focus("#cityList .edit input");
      await page.keyboard.press("Enter");
      await page.waitForTimeout(300);
      await page.click(`#cityList li[data-key="${S.person}"]`);
      await page.waitForTimeout(300);
      await page.evaluate(() => document.activeElement.blur());
      await page.mouse.move(339, 1);
      await fit();
      await save(await page.screenshot(), `world-clock-names-${key}`);
      console.log(await page.evaluate(() => document.getElementById("settings").innerText.replace(/\s+/g, " ")));
      console.log("  storage", JSON.stringify(await page.evaluate(() => chrome.storage.sync.get(null))));
      await done();
    }
  }
})();
