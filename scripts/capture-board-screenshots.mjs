/**
 * Capture optimized product screenshots from local Goban / Chessboard web UIs.
 * Usage: node scripts/capture-board-screenshots.mjs
 *        node scripts/capture-board-screenshots.mjs --featured  (Home's Chessboard row only)
 */
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/assets");
const appsRoot = "/tmp/board-apps";

const VIEWPORT = { width: 1223, height: 768 };

const GOMUKU_SGF = `(;GM[1]FF[4]SZ[15]AP[Goban:capture]
;B[hh];W[ih];B[gh];W[hg];B[gi];W[ig];B[gj];W[jh];B[gk];W[kh]
;B[gl];W[fi];B[fm];W[eh];B[en]
)`;

// Short decisive miniature with enough moves for a review curve.
const CHESS_PGN = `[Event "Site capture"]
[Site "titpea.com"]
[Date "2026.07.23"]
[White "Player"]
[Black "Stockfish"]
[Result "1-0"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5
6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nb4 9. Qe4 c6 10. a3 Na6
11. d4 Kd6 12. Bf4+ Ke7 13. Bxd5 cxd5 14. Nxd5+ Ke8
15. Nf6+ gxf6 16. Qxe5+ Be7 17. Qxe7# 1-0`;

function contentType(filePath) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (filePath.endsWith(".wasm")) return "application/wasm";
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  if (filePath.endsWith(".png")) return "image/png";
  return "application/octet-stream";
}

async function serveDir(root) {
  const server = http.createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const rel = urlPath === "/" ? "/index.html" : urlPath;
      const filePath = path.join(root, rel);
      if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end("forbidden");
        return;
      }
      const data = await fs.readFile(filePath);
      res.writeHead(200, { "Content-Type": contentType(filePath) });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("missing");
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  return {
    origin: `http://127.0.0.1:${port}`,
    close: () => new Promise((resolve) => server.close(resolve)),
  };
}

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
  const server = await serveDir(path.join(appsRoot, "goban/src/web"));
  const context = await browser.newContext({
    viewport: VIEWPORT,
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
        themeId: "wood",
        thinkLevel: "standard",
        showCoords: true,
        analysisOn: true,
        openingRule: "standard",
      }),
    );
    localStorage.setItem("goban.panelOpen", "1");
  }, lang);
  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  await page.waitForTimeout(500);

  await page.evaluate(async (sgf) => {
    await navigator.clipboard.writeText(sgf);
  }, GOMUKU_SGF);
  await page.click("#sgf-paste");
  const confirm = page.locator("#confirm-ok");
  if (await confirm.isVisible().catch(() => false)) {
    await confirm.click();
  }
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
  const server = await serveDir(path.join(appsRoot, "chessboard/src/web"));
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();
  await page.addInitScript(
    ({ pgn, langId }) => {
      localStorage.setItem(
        "chess.v1.settings",
        JSON.stringify({
          soundOn: false,
          flipped: false,
          themeId: "wood",
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
    await page.waitForSelector("#acc-line:not([hidden])", { timeout: 120000 });
    await page.waitForTimeout(800);
  }
  // Night theme on the final position, with the Setup tab's theme controls in view.
  await page.click("#rep-end").catch(() => {});
  await page.click("#tab-setup");
  await page.click('#theme-seg button[data-theme="night"]');
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
  const server = await serveDir(path.join(appsRoot, "chessboard/src/web"));
  const context = await browser.newContext({ viewport: { width: 1200, height: 800 }, deviceScaleFactor: 1.5 });
  const page = await context.newPage();
  await page.addInitScript(
    ({ pgn, langId }) => {
      localStorage.setItem(
        "chess.v1.settings",
        JSON.stringify({
          soundOn: false,
          flipped: false,
          themeId: "wood",
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
  await page.waitForSelector("#acc-line:not([hidden])", { timeout: 120000 });
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
