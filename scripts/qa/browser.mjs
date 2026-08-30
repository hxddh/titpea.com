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

export async function visit(page, url, label) {
  console.error(`[qa] ${label}: ${url.pathname}`);
  await page.goto(url.href, { waitUntil: "domcontentloaded", timeout: 8_000 });
  await page.locator("body").waitFor({ state: "visible", timeout: 8_000 });
  const imageCount = await page.locator("img").count();
  if (imageCount > 0) {
    await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete), {
      timeout: 8_000,
    });
  }
}
