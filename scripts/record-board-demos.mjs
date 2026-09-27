/**
 * Record short muted demo loops from the real Goban / Chessboard web UIs
 * (the apps' own src/web, served locally): Goban replays a game move by
 * move, Chessboard runs its Stockfish review and steps through the result.
 * Nothing is scripted inside the apps; the recording only clicks their UI.
 * Writes public/assets/<name>.mp4 (H.264) and .webm (VP9) next to the poster.
 *
 *   git clone https://github.com/hxddh/goban /tmp/board-apps/goban
 *   git clone https://github.com/hxddh/chessboard /tmp/board-apps/chessboard
 *   pip install imageio-ffmpeg
 *   node scripts/record-board-demos.mjs
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/assets");
const appsRoot = process.env.BOARD_APPS ?? "/tmp/board-apps";
const VIEWPORT = { width: 1223, height: 768 };
const ffmpeg = execFileSync("python3", ["-c", "import imageio_ffmpeg as f; print(f.get_ffmpeg_exe())"])
  .toString()
  .trim();

// The same games the screenshots use (scripts/capture-board-screenshots.mjs).
const GOMOKU_SGF = `(;GM[1]FF[4]SZ[15]AP[Goban:capture]
;B[hh];W[ih];B[gh];W[hg];B[gi];W[ig];B[gj];W[jh];B[gk];W[kh]
;B[gl];W[fi];B[fm];W[eh];B[en]
)`;
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

const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".wasm": "application/wasm", ".svg": "image/svg+xml", ".png": "image/png" };

async function serveDir(root) {
  const server = http.createServer(async (req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const filePath = path.join(root, urlPath === "/" ? "/index.html" : urlPath);
    try {
      if (!filePath.startsWith(root)) throw new Error("outside");
      const body = await fs.readFile(filePath);
      res.writeHead(200, { "Content-Type": types[path.extname(filePath)] ?? "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end();
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  return { origin: `http://127.0.0.1:${server.address().port}`, close: () => new Promise((r) => server.close(r)) };
}

const quiet = (page) =>
  page.evaluate(() => document.querySelectorAll(".toast, .toast-stack, [class*='toast']").forEach((el) => el.remove()));

/** Record `act` in a fresh context; keep the part after `trimStart` seconds. */
async function record(browser, name, root, init, act, trimStart) {
  const server = await serveDir(root);
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "board-video-"));
  const context = await browser.newContext({
    viewport: VIEWPORT,
    recordVideo: { dir, size: VIEWPORT },
    permissions: ["clipboard-read", "clipboard-write"],
  });
  await context.addInitScript(init.script, init.arg);
  const page = await context.newPage();
  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  const started = Date.now();
  const markStart = await act(page);
  const video = page.video();
  await context.close();
  await server.close();
  const raw = await video.path();
  const from = ((markStart - started) / 1000 + trimStart).toFixed(2);
  const mp4 = path.join(outDir, `${name}.mp4`);
  const webm = path.join(outDir, `${name}.webm`);
  const common = ["-y", "-ss", from, "-i", raw, "-an", "-vf", "fps=30,scale=1222:-2:flags=lanczos"];
  execFileSync(ffmpeg, [...common, "-c:v", "libx264", "-preset", "slow", "-crf", "26", "-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4], { stdio: "ignore" });
  execFileSync(ffmpeg, [...common, "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "40", "-row-mt", "1", webm], { stdio: "ignore" });
  for (const file of [mp4, webm]) console.log(`${path.basename(file)} ${Math.round((await fs.stat(file)).size / 1024)} KB`);
}

async function recordGoban(browser) {
  await record(
    browser,
    "goban-review",
    path.join(appsRoot, "goban/src/web"),
    {
      script: () => {
        localStorage.setItem(
          "goban.v11.settings",
          JSON.stringify({ mode: "pvp", difficulty: "normal", humanColor: "b", soundOn: false, themeId: "wood", thinkLevel: "standard", showCoords: true, analysisOn: true, openingRule: "standard" }),
        );
        localStorage.setItem("goban.panelOpen", "1");
      },
    },
    async (page) => {
      await page.evaluate((sgf) => navigator.clipboard.writeText(sgf), GOMOKU_SGF);
      await page.click("#sgf-paste");
      const confirm = page.locator("#confirm-ok");
      if (await confirm.isVisible().catch(() => false)) await confirm.click();
      await page.waitForTimeout(700);
      await quiet(page);
      const moves = page.locator("#move-list button");
      const count = await moves.count();
      await moves.nth(0).click();
      await page.waitForTimeout(400);
      const start = Date.now();
      // Step through the record, then hold on the win.
      for (let index = 0; index < count; index += 1) {
        await moves.nth(index).click();
        await quiet(page);
        await page.waitForTimeout(480);
      }
      await page.waitForTimeout(1600);
      return start;
    },
    0,
  );
}

async function recordChessboard(browser) {
  await record(
    browser,
    "chessboard-review",
    path.join(appsRoot, "chessboard/src/web"),
    {
      script: ({ pgn }) => {
        localStorage.setItem("chess.v1.settings", JSON.stringify({ soundOn: false, flipped: false, themeId: "wood", mode: "pvp", difficulty: "normal", humanColor: "w" }));
        localStorage.setItem("chess.panelOpen", "1");
        localStorage.setItem("chess.v1.save", JSON.stringify({ v: 1, pgn, savedAt: Date.now() }));
      },
      arg: { pgn: CHESS_PGN },
    },
    async (page) => {
      await page.waitForTimeout(800);
      await quiet(page);
      // Stockfish reviews every ply in the browser; the loop starts once it has.
      const run = page.locator("#an-run");
      if (await run.isVisible().catch(() => false)) {
        await run.click();
        await page
          .waitForFunction(() => {
            const button = document.getElementById("an-run");
            return button && !button.disabled && !button.classList.contains("busy");
          }, null, { timeout: 60000 })
          .catch(() => {});
      }
      const moves = page.locator("#move-list button");
      const count = await moves.count();
      await moves.nth(0).click();
      await quiet(page);
      await page.waitForTimeout(400);
      const start = Date.now();
      for (let index = 0; index < count; index += 1) {
        await moves.nth(index).click();
        await quiet(page);
        await page.waitForTimeout(360);
      }
      await page.waitForTimeout(1600);
      return start;
    },
    0,
  );
}

const browser = await chromium.launch({ headless: true });
try {
  await recordGoban(browser);
  await recordChessboard(browser);
} finally {
  await browser.close();
}
