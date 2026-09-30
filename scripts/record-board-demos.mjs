/**
 * Record short muted demo loops from the real Goban / Chessboard web UIs
 * (the apps' own src/web, served locally): Goban steps through the mistakes
 * its review names, Chessboard runs its Stockfish review and steps through the result.
 * Nothing is scripted inside the apps; the recording only clicks their UI.
 * Each loop is recorded twice, with the app in English and in Chinese, and
 * written as public/assets/<name>-<en|zh>.mp4 (H.264) and .webm (VP9).
 *
 *   Check out the pinned releases (scripts/board-apps.mjs), then
 *   pip install imageio-ffmpeg
 *   node scripts/record-board-demos.mjs
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { assertPinned, CHESS_PGN, GOMOKU_SGF, pasteGoban, serveDir } from "./board-apps.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/assets");
const VIEWPORT = { width: 1223, height: 768 };
const ffmpeg = execFileSync("python3", ["-c", "import imageio_ffmpeg as f; print(f.get_ffmpeg_exe())"])
  .toString()
  .trim();

const quiet = (page) =>
  page.evaluate(() => document.querySelectorAll(".toast, .toast-stack, [class*='toast']").forEach((el) => el.remove()));

/** Record `act` in a fresh context; keep the part after `trimStart` seconds. */
async function record(browser, name, root, init, act, trimStart) {
  const server = await serveDir(root);
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "board-video-"));
  const context = await browser.newContext({
    viewport: VIEWPORT,
    recordVideo: { dir, size: VIEWPORT },
    locale: init.arg.lang === "en" ? "en-US" : "zh-CN",
    permissions: ["clipboard-read", "clipboard-write"],
  });
  await context.addInitScript(init.script, init.arg);
  const page = await context.newPage();
  // The recording starts with the page, so offsets are measured from here.
  const started = Date.now();
  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  const markStart = await act(page);
  const video = page.video();
  await context.close();
  await server.close();
  const raw = await video.path();
  const from = ((markStart - started) / 1000 + trimStart).toFixed(2);
  const mp4 = path.join(outDir, `${name}.mp4`);
  const webm = path.join(outDir, `${name}.webm`);
  const common = ["-y", "-ss", from, "-i", raw, "-an", "-vf", "fps=30,scale=1222:-2:flags=lanczos"];
  execFileSync(
    ffmpeg,
    [
      ...common,
      "-c:v",
      "libx264",
      "-preset",
      "slow",
      "-crf",
      "26",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      mp4,
    ],
    { stdio: "ignore" },
  );
  execFileSync(ffmpeg, [...common, "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "40", "-row-mt", "1", webm], {
    stdio: "ignore",
  });
  for (const file of [mp4, webm])
    console.log(`${path.basename(file)} ${Math.round((await fs.stat(file)).size / 1024)} KB`);
}

async function recordGoban(browser, lang) {
  await record(
    browser,
    `goban-review-${lang}`,
    assertPinned("goban"),
    {
      arg: { lang },
      script: ({ lang }) => {
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
      },
    },
    async (page) => {
      await pasteGoban(page, GOMOKU_SGF);
      await page.waitForTimeout(700);
      await quiet(page);
      // Review is a state of the board (v1.74+): open it from the ⋯ menu and
      // let its engine pass settle, so the mistake list does not change mid-take.
      await page.click("#more-btn");
      await page.click("#sgf-review");
      await page.waitForSelector("#review-side:not([hidden])");
      await page.waitForSelector("#review-progress", { state: "hidden", timeout: 60000 }).catch(() => {});
      await page.waitForTimeout(600);
      await quiet(page);
      const start = Date.now();
      // Step through the mistakes it names: each chip rebuilds that position
      // and shows its explanation beside the curve.
      const chips = page.locator("#review-side-chips button[data-i]");
      const count = await chips.count();
      for (let index = 0; index < count; index += 1) {
        await chips.nth(index).click();
        await quiet(page);
        await page.waitForTimeout(1800);
      }
      await page.waitForTimeout(1200);
      return start;
    },
    0,
  );
}

async function recordChessboard(browser, lang) {
  await record(
    browser,
    `chessboard-review-${lang}`,
    assertPinned("chessboard"),
    {
      script: ({ pgn, lang }) => {
        localStorage.setItem(
          "chess.v1.settings",
          JSON.stringify({
            soundOn: false,
            flipped: false,
            mode: "pvp",
            difficulty: "normal",
            humanColor: "w",
            langId: lang === "en" ? "en" : "zh-CN",
          }),
        );
        localStorage.setItem("chess.panelOpen", "1");
        localStorage.setItem("chess.v1.save", JSON.stringify({ v: 1, pgn, savedAt: Date.now() }));
      },
      arg: { pgn: CHESS_PGN, lang },
    },
    async (page) => {
      await page.waitForTimeout(800);
      await quiet(page);
      if (!(await page.evaluate(() => document.getElementById("app")?.classList.contains("panel-open")))) {
        await page.click("#toggle-panel");
        await page.waitForTimeout(400);
      }
      // Stockfish reviews every ply in the browser; the loop starts once it has.
      const run = page.locator("#an-run");
      if (await run.isVisible().catch(() => false)) {
        await run.click();
        // The accuracy line appears only once every ply has been evaluated.
        await page.waitForSelector("#acc-line:not([hidden])", { timeout: 240000 });
        await page.waitForTimeout(800);
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
  // `--only goban` or `--only chessboard` records one app. Chessboard needs its
  // bundle built first (npm run build in its checkout).
  const only = process.argv.includes("--only") ? process.argv[process.argv.indexOf("--only") + 1] : undefined;
  for (const lang of ["en", "zh"]) {
    if (!only || only === "goban") await recordGoban(browser, lang);
    if (!only || only === "chessboard") await recordChessboard(browser, lang);
  }
} finally {
  await browser.close();
}
