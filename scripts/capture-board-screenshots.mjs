/**
 * Capture optimized product screenshots from local Goban / Chessboard web UIs.
 * Usage: node scripts/capture-board-screenshots.mjs
 *        node scripts/capture-board-screenshots.mjs --featured  (Home's Chessboard row only)
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";
import { assertPinned, CHESS_PGN, GOMOKU_SGF, pasteGoban, serveDir } from "./board-apps.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/assets");

const VIEWPORT = { width: 1223, height: 768 };
// 2x pixels so the captures stay sharp on high-density screens.
const SCALE = 2;

async function writeWebp(page, outName) {
  const png = await page.screenshot({ type: "png" });
  const outPath = path.join(outDir, outName);
  await sharp(png).webp({ quality: 82 }).toFile(outPath);
  const meta = await sharp(outPath).metadata();
  console.log(`wrote ${outName} ${meta.width}x${meta.height}`);
}

async function dismissToasts(page) {
  await page.evaluate(() => {
    document.querySelectorAll(".toast, .toast-stack, [class*='toast']").forEach((el) => el.remove());
  });
}

async function openPanel(page) {
  const open = await page.evaluate(() => document.getElementById("app")?.classList.contains("panel-open"));
  if (!open) {
    await page.click("#toggle-panel");
    await page.waitForTimeout(400);
  }
}

async function captureGoban(browser, lang) {
  const server = await serveDir(assertPinned("goban"));
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: SCALE,
    permissions: ["clipboard-read", "clipboard-write"],
  });
  const page = await context.newPage();
  await page.addInitScript((lang) => {
    localStorage.setItem("goban.v12.lang", lang);
    localStorage.setItem(
      "goban.v11.settings",
      JSON.stringify({
        mode: "pvp",
        difficulty: "normal",
        humanColor: "b",
        soundOn: false,
        thinkLevel: "standard",
        showCoords: true,
        openingRule: "standard",
      }),
    );
    localStorage.setItem("goban.panelOpen", "1");
  }, lang);
  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  await page.waitForTimeout(500);

  await pasteGoban(page, GOMOKU_SGF);
  await page.waitForTimeout(800);
  await openPanel(page);
  await dismissToasts(page);
  await writeWebp(page, `goban-game-board-${lang}.webp`);

  const moves = page.locator("#move-list button");
  const moveCount = await moves.count();

  // Notebook theme at the finished position; the theme lives in the settings dialog.
  await page.click("#settings-btn");
  await page.click('#theme-seg button[data-theme="notebook"]');
  await page.click("#settings-close");
  await page.waitForTimeout(300);
  if (moveCount > 0) {
    await moves.nth(moveCount - 1).click();
    await page.waitForTimeout(300);
  }
  await dismissToasts(page);
  await writeWebp(page, `goban-notebook-${lang}.webp`);

  await context.close();
  await server.close();
}

async function captureChessboard(browser, lang) {
  const server = await serveDir(assertPinned("chessboard"));
  const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: SCALE });
  const page = await context.newPage();
  await page.addInitScript(
    ({ pgn, langId }) => {
      localStorage.setItem(
        "chess.v1.settings",
        JSON.stringify({
          soundOn: false,
          flipped: false,
          mode: "pvp",
          difficulty: "normal",
          humanColor: "w",
          langId,
        }),
      );
      localStorage.setItem("chess.panelOpen", "1");
      localStorage.setItem("chess.v1.save", JSON.stringify({ v: 1, pgn, savedAt: Date.now() }));
    },
    { pgn: CHESS_PGN, langId: lang === "zh" ? "zh-CN" : "en" },
  );

  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  await page.waitForTimeout(1000);
  await openPanel(page);
  await dismissToasts(page);
  await writeWebp(page, `chessboard-game-board-${lang}.webp`);

  const analyzeBtn = page.locator("#an-run");
  if (await analyzeBtn.isVisible().catch(() => false)) {
    await analyzeBtn.click();
    // The accuracy line appears only once every ply has been evaluated.
    await page.waitForSelector("#acc-line:not([hidden])", { timeout: 240000 });
    await page.waitForTimeout(800);
  }
  // Dark appearance with the green board on the final position, set in Preferences.
  await page.click("#rep-end").catch(() => {});
  await page.click("#prefs-open");
  await page.click('#prefs-look button[data-appearance="dark"]');
  await page.click('#prefs-look button[data-board-id="green"]');
  await page.click("#prefs-close");
  await page.mouse.move(0, 0);
  await page.waitForTimeout(400);
  await dismissToasts(page);
  await writeWebp(page, `chessboard-theme-${lang}.webp`);

  await context.close();
  await server.close();
}

/**
 * Home's featured row: the finished Stockfish review on the final position,
 * in the page's language, at 1800x1200 so it stays sharp at full row width.
 */
async function captureChessboardFeatured(browser, lang) {
  const server = await serveDir(assertPinned("chessboard"));
  const context = await browser.newContext({ viewport: { width: 1200, height: 800 }, deviceScaleFactor: 1.5 });
  const page = await context.newPage();
  await page.addInitScript(
    ({ pgn, langId }) => {
      localStorage.setItem(
        "chess.v1.settings",
        JSON.stringify({
          soundOn: false,
          flipped: false,
          mode: "pvp",
          difficulty: "normal",
          humanColor: "w",
          langId,
        }),
      );
      localStorage.setItem("chess.panelOpen", "1");
      localStorage.setItem("chess.v1.save", JSON.stringify({ v: 1, pgn, savedAt: Date.now() }));
    },
    { pgn: CHESS_PGN, langId: lang === "zh" ? "zh-CN" : "en" },
  );
  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  await page.waitForTimeout(1000);
  await openPanel(page);
  await page.click("#an-run");
  // The accuracy line appears only once every ply has been evaluated.
  await page.waitForSelector("#acc-line:not([hidden])", { timeout: 240000 });
  await page.waitForTimeout(800);
  await page.click("#rep-start");
  await page.waitForTimeout(300);
  await page.click("#rep-end");
  await page.mouse.move(0, 0);
  await page.waitForTimeout(600);
  await dismissToasts(page);
  await writeWebp(page, `chessboard-featured-${lang}.webp`);
  await context.close();
  await server.close();
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  if (process.argv.includes("--featured")) {
    for (const lang of ["en", "zh"]) await captureChessboardFeatured(browser, lang);
    await browser.close();
    return;
  }
  for (const lang of ["en", "zh"]) {
    await captureGoban(browser, lang);
    await captureChessboard(browser, lang);
  }
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
