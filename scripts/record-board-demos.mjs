/**
 * Record short muted demo loops from the real Goban / Chessboard web UIs
 * (the apps' own src/web, served locally): Goban steps through the mistakes
 * its review names, Chessboard runs its Stockfish review and steps through its key moments.
 * Nothing is scripted inside the apps; the recording only clicks their UI.
 * Each loop is recorded twice, with the app in English and in Chinese, and
 * written as public/assets/<name>-<en|zh>.mp4 (H.264) and .webm (VP9), with
 * its first frame as the .webp poster.
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
  await page.goto(`${server.origin}/`, { waitUntil: "networkidle" });
  await page.waitForSelector("#board");
  const markStart = await act(page);
  // The take is the last part of the recording, which ends when the context
  // closes. Its start is measured back from that end: the recorder's frames
  // can trail the page by seconds while the apps' engines run, so an offset
  // from the page's opening lands in the wrong place.
  const take = ((Date.now() - markStart) / 1000 - trimStart).toFixed(2);
  const video = page.video();
  await context.close();
  await server.close();
  const raw = await video.path();
  const mp4 = path.join(outDir, `${name}.mp4`);
  const webm = path.join(outDir, `${name}.webm`);
  const common = ["-y", "-sseof", `-${take}`, "-i", raw, "-an", "-vf", "fps=30,scale=1222:-2:flags=lanczos"];
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
  // The poster (the showcase image and the fallback) is the recording's first frame.
  const frame = path.join(dir, "poster.png");
  execFileSync(ffmpeg, ["-y", "-i", mp4, "-frames:v", "1", frame], { stdio: "ignore" });
  const poster = path.join(outDir, `${name}.webp`);
  await sharp(frame).webp({ quality: 82 }).toFile(poster);
  for (const file of [mp4, webm, poster])
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
      // Step through the mistakes it names: each chip rebuilds that position
      // and shows its explanation beside the curve. Review opens on the last
      // one, so pick the first before the take starts.
      // v3.0+ adds mistakes as its engine confirms them ("+2 awaiting the
      // engine"), so wait until the chip list has stopped growing.
      const chips = page.locator("#review-side-chips button[data-i]");
      let count = await chips.count();
      for (let still = 0, tries = 0; still < 4 && tries < 60; tries += 1) {
        await page.waitForTimeout(500);
        const now = await chips.count();
        still = now === count ? still + 1 : 0;
        count = now;
      }
      await chips.nth(0).click();
      await page.waitForTimeout(2000);
      await quiet(page);
      const start = Date.now();
      await page.waitForTimeout(1800);
      for (let index = 1; index < count; index += 1) {
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
    { script: chessboardInit, arg: { pgn: CHESS_PGN, langId: lang === "en" ? "en" : "zh-CN", lang } },
    async (page) => {
      await page.waitForTimeout(800);
      await quiet(page);
      if (!(await page.evaluate(() => document.getElementById("app")?.classList.contains("panel-open")))) {
        await page.click("#toggle-panel");
        await page.waitForTimeout(400);
      }
      // Stockfish reviews every ply in the browser; the loop starts once it has.
      await analyseChessboard(page);
      await quiet(page);
      // 9.0+: the review's first layer is the summary, the curve and the key
      // moments; bring it to the top of the panel and start at the first moment.
      await page.evaluate(() => document.getElementById("rv-summary")?.scrollIntoView({ block: "start" }));
      const prev = page.locator("#rv-km .km-prev");
      const next = page.locator("#rv-km .km-next");
      while (await prev.isEnabled()) await prev.click();
      await page.waitForTimeout(600);
      const start = Date.now();
      await page.waitForTimeout(1800);
      while (await next.isEnabled()) {
        await next.click();
        await quiet(page);
        await page.waitForTimeout(1800);
      }
      // The second layer: the full report folded under the key moments.
      await page.click("#rv-full > summary");
      await page.evaluate(() => document.getElementById("rv-full")?.scrollIntoView({ block: "start" }));
      await quiet(page);
      await page.waitForTimeout(2400);
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
