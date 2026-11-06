const fs = require("fs");
require("./cap.cjs")(async ({ page, sleep, click, OUT, LANG }) => {
  await page.evaluate(() => {
    const key = "goban-studio.progress.v2";
    const p = JSON.parse(localStorage.getItem(key) || "{}");
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
    p.v = 5;
    localStorage.setItem(key, JSON.stringify(p));
  });
  await page.reload();
  await page.waitForSelector(".page");
  await page.keyboard.press("Control+1");
  await page.waitForSelector(".plan-focus .plan-row");
  await sleep(800);
  await page.screenshot({ path: OUT + `/goban-studio-today-${LANG}.png` });
  fs.writeFileSync("./ttext.txt", await page.locator("body").innerText());
  await page.locator(".group-row .btn").first().click();
  await page.waitForSelector("canvas.board");
  await sleep(1500);
  await page.screenshot({ path: OUT + `/goban-studio-problem-${LANG}.png` });
  fs.writeFileSync("./ptext.txt", await page.locator("body").innerText());
  console.log(JSON.stringify(await page.evaluate(() => window.__state.progress.daily.items)));
});
