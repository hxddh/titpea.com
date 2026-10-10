/**
 * Capture optimized product screenshots from local Goban / Chessboard web UIs.
 * Usage: node scripts/capture-board-screenshots.mjs
 *        node scripts/capture-board-screenshots.mjs --featured  (Home's Chessboard row only)
 *        node scripts/capture-board-screenshots.mjs --only goban  (or chessboard)
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";
import {
  analyseChessboard,
  assertPinned,
  CHESS_PGN,
  chessboardInit,
  GOMOKU_SGF,
  pasteGoban,
  serveDir,
} from "./board-apps.mjs";

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

/** Chessboard's side panel; Goban has none since v1.74. */
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
        showCoords: true,
        openingRule: "standard",
      }),
    );
  }, lang);
  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  await page.waitForTimeout(500);

  // v1.74+: one board, a top bar and the timeline under it; no sidebar.
  await pasteGoban(page, GOMOKU_SGF);
  await page.waitForTimeout(800);
  await dismissToasts(page);
  await writeWebp(page, `goban-game-board-${lang}.webp`);

  // Notebook theme at the finished position; Settings is in the ⋯ menu.
  await page.click("#more-btn");
  await page.click("#settings-btn");
  await page.click('#theme-seg button[data-theme="notebook"]');
  await page.click("#settings-close");
  await page.waitForTimeout(300);
  await dismissToasts(page);
  await writeWebp(page, `goban-notebook-${lang}.webp`);

  await context.close();
  await server.close();
}

/** Chessboard 9.0+: light and dark are in Settings · General, the board in Settings · Board; Play returns to the game. */
async function chessboardDarkGreen(page) {
  await page.click('#rail button[data-view="settings"]');
  await page.click("#cat-general");
  await page.click('button[data-appearance="dark"]');
  await page.click("#cat-board");
  await page.click('button[data-board-id="green"]');
  await page.click('#rail button[data-view="play"]');
}

async function captureChessboard(browser, lang) {
  const server = await serveDir(assertPinned("chessboard"));
  const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: SCALE });
  const page = await context.newPage();
  await page.addInitScript(chessboardInit, { pgn: CHESS_PGN, langId: lang === "zh" ? "zh-CN" : "en" });

  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  await page.waitForTimeout(1000);
  await openPanel(page);
  await dismissToasts(page);
  await writeWebp(page, `chessboard-game-board-${lang}.webp`);

  // Dark appearance with the green board on the final position of the reviewed game.
  await analyseChessboard(page);
  await page.click("#rep-end").catch(() => {});
  await chessboardDarkGreen(page);
  await page.mouse.move(0, 0);
  await page.waitForTimeout(600);
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
  await page.addInitScript(chessboardInit, { pgn: CHESS_PGN, langId: lang === "zh" ? "zh-CN" : "en" });
  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  await page.waitForTimeout(1000);
  await openPanel(page);
  await analyseChessboard(page);
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
  // `--only goban` or `--only chessboard` captures one app.
  const only = process.argv.includes("--only") ? process.argv[process.argv.indexOf("--only") + 1] : undefined;
  for (const lang of ["en", "zh"]) {
    if (!only || only === "goban") await captureGoban(browser, lang);
    if (!only || only === "chessboard") await captureChessboard(browser, lang);
  }
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
