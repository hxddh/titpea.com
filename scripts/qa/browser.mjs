import fs from "node:fs";
import { createRequire } from "node:module";
import { outDir } from "./config.mjs";

export function loadChromium() {
  const require = createRequire(import.meta.url);
  try {
    return require("playwright").chromium;
  } catch {
    console.error(
      "Playwright is required for qa:pages. Install it locally or run this script in the Codex bundled runtime.",
    );
    process.exit(1);
  }
}

export function prepareOutputDir() {
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
}

/**
 * Open a page. With `images` (the one full visit per route and viewport),
 * every lazy image is started and awaited, so the broken-image check sees
 * them all. Interaction visits (anchor and pointer clicks) skip that: images
 * carry width and height, so layout does not wait on them.
 */
export async function visit(page, url, label, { images = true } = {}) {
  if (process.env.QA_VERBOSE === "1") console.error(`[qa] ${label}: ${url.pathname}`);
  await page.goto(url.href, { waitUntil: "domcontentloaded", timeout: 8_000 });
  await page.locator("body").waitFor({ state: "visible", timeout: 8_000 });
  if (!images) return;
  const imageCount = await page.locator("img").count();
  if (imageCount > 0) {
    // Lazy images far below the fold only load once scrolled near; start
    // them all so the wait below covers every image on the page.
    await page.evaluate(() => {
      for (const image of document.querySelectorAll('img[loading="lazy"]')) image.loading = "eager";
    });
    await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete), {
      timeout: 8_000,
    });
  }
}

/**
 * Wait until scrolling and the local nav's active link have settled: at least
 * `minMs` (the section index re-reads its state that long after a click),
 * then unchanged for several animation frames in a row. Replaces fixed sleeps.
 */
export async function settle(page, minMs) {
  await page.evaluate(async (minMs) => {
    const start = performance.now();
    const frame = () => new Promise((resolve) => requestAnimationFrame(resolve));
    const state = () =>
      [
        window.scrollX,
        window.scrollY,
        document.querySelector(".product-section-index [data-section-link][aria-current]")?.getAttribute("href"),
      ].join("|");
    let last = state();
    let stableFrames = 0;
    while (performance.now() - start < 5_000) {
      await frame();
      const now = state();
      stableFrames = now === last ? stableFrames + 1 : 0;
      last = now;
      if (stableFrames >= 4 && performance.now() - start >= minMs) return;
    }
  }, minMs);
}
