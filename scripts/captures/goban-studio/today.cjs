const fs = require("fs");
require("./cap.cjs")(async ({ page, sleep, OUT, LANG }) => {
  // The four analysed games of the v13 learn-focus test (scripts/ui-tests/learn-focus.mjs).
  await page.evaluate(() => {
    const key = "goban9:profile.json";
    const p = JSON.parse(localStorage.getItem(key) || '{"v":9}');
    const now = Date.now();
    const ph = (loss) => ({ loss, mistakes: 1, blunders: 0, moves: 30, accuracy: 0.6 });
    p.games = [0, 1, 2, 3].map((i) => ({
      id: "plan-" + i,
      at: now - (i + 1) * 3600000,
      size: 19,
      color: 1,
      won: false,
      moves: 180,
      confidence: "high",
      phases: { opening: ph(2), middle: ph(7), endgame: ph(2) },
      themes: { cut: 1 },
      themeLoss: { cut: 5 },
    }));
    p.week = null;
    localStorage.setItem(key, JSON.stringify(p));
  });
  await page.reload();
  await page.waitForSelector(".page");
  await page.keyboard.press("Control+3");
  await page.waitForSelector(".learn-path .path-focus");
  await page.waitForLoadState("networkidle").catch(() => {});
  await sleep(800);
  await page.screenshot({ path: OUT + `/goban-studio-practice-${LANG}.png` });
  fs.writeFileSync(`./practice-${LANG}.txt`, await page.locator("body").innerText());
  await page.keyboard.press("Control+1");
  await page.waitForSelector(".today .hero");
  await page.waitForLoadState("networkidle").catch(() => {});
  await sleep(800);
  await page.screenshot({ path: OUT + `/goban-studio-today-${LANG}.png` });
  fs.writeFileSync(`./today-${LANG}.txt`, await page.locator("body").innerText());
  await page.click(".today-row[data-row=path]");
  await page.waitForFunction(() => window.__state.learn?.view === "problem" || window.__state.learn?.view === "lesson");
  console.log("first:", await page.evaluate(() => window.__state.learn.view));
  // Go to the first problem of today's path.
  for (let i = 0; i < 10 && (await page.evaluate(() => window.__state.learn.view)) !== "problem"; i++) {
    await page.keyboard.press("Control+3");
    await page.waitForSelector(".learn-path .path-row");
    const rows = page.locator(".learn-path .path-row");
    const n = await rows.count();
    for (let j = 0; j < n; j++) {
      if (await rows.nth(j).locator(".thumb, canvas").count()) {
        await rows.nth(j).click();
        break;
      }
    }
    await sleep(300);
  }
  await page.waitForSelector("canvas.board");
  await page.waitForLoadState("networkidle").catch(() => {});
  await sleep(1500);
  await page.screenshot({ path: OUT + `/goban-studio-problem-${LANG}.png` });
  fs.writeFileSync(`./problem-${LANG}.txt`, await page.locator("body").innerText());
  console.log(
    JSON.stringify(
      await page.evaluate(() => ({ id: window.__state.learn.problem?.def?.id, daily: !!window.__state.learn.daily })),
    ),
  );
});
