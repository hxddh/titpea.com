// Accessibility gate: axe-core (WCAG 2.x A/AA plus best practices) on every
// page in the sitemap, light and dark, desktop and phone. Any violation fails.
// Readability floors on top: reading text (card bodies, answers) reaches 7:1,
// no text outside a hero product mock is smaller than 13px, and a Chinese
// heading never leaves a single character alone on its last line.
// Needs the preview server, like qa:pages (same QA_PORT / QA_BASE_URL and
// QA_WORKERS); pages are checked in parallel, each in its own fresh load:
//   npm run a11y:check
import fs from "node:fs";
import { createRequire } from "node:module";
import { chromium } from "playwright";
import { assertServesThisBuild, baseUrl as origin, inPool, workers } from "./qa/config.mjs";

const require = createRequire(import.meta.url);
const axeSource = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const paths = [
  ...fs.readFileSync("dist/sitemap.xml", "utf8").matchAll(/<loc>https:\/\/titpea\.com([^<]*)<\/loc>/g),
].map((match) => match[1]);
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined;
const started = Date.now();

await assertServesThisBuild();
const browser = await chromium.launch({ executablePath });
const modes = ["light", "dark"].flatMap((colorScheme) =>
  [
    { width: 1440, height: 900 },
    { width: 390, height: 844 },
  ].map((viewport) => ({ colorScheme, viewport })),
);
// One context per worker and mode, reused across that worker's pages.
const contexts = new Map();
async function pageFor(worker, mode) {
  const key = `${worker}:${mode.colorScheme}:${mode.viewport.width}`;
  if (!contexts.has(key)) {
    const context = await browser.newContext({
      viewport: mode.viewport,
      colorScheme: mode.colorScheme,
      reducedMotion: "reduce",
    });
    contexts.set(key, await context.newPage());
  }
  return contexts.get(key);
}
// Same order as the serial run: theme, then viewport, then page.
const tasks = modes.flatMap((mode) => paths.map((path) => ({ ...mode, path })));
const failures = (
  await inPool(tasks, workers, async ({ colorScheme, viewport, path }, worker) => {
    const page = await pageFor(worker, { colorScheme, viewport });
    const failures = [];
    {
      await page.goto(`${origin}${path}`, { waitUntil: "networkidle" });
      await page.addScriptTag({ content: axeSource });
      const violations = await page.evaluate(async () => {
        const result = await window.axe.run(document, {
          runOnly: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"],
        });
        return result.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          targets: violation.nodes.slice(0, 3).map((node) => node.target.join(" ")),
        }));
      });
      const readability = await page.evaluate(() => {
        const luminance = (color) => {
          const [r, g, b] = color
            .match(/[\d.]+/g)
            .slice(0, 3)
            .map((value) => {
              const channel = Number(value) / 255;
              return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
            });
          return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        };
        const background = (element) => {
          for (let node = element; node; node = node.parentElement) {
            const color = getComputedStyle(node).backgroundColor;
            if (!/rgba\(.*,\s*0\)$/.test(color) && color !== "transparent") return color;
          }
          return getComputedStyle(document.body).backgroundColor;
        };
        const visible = (element) => {
          const box = element.getBoundingClientRect();
          return box.width > 0 && box.height > 0 && getComputedStyle(element).visibility !== "hidden";
        };
        const problems = [];
        for (const element of document.querySelectorAll(
          ".feature-card p, .faq-answer, .home-catalog-text, .panel p, .whats-new-list li",
        )) {
          if (!visible(element)) continue;
          const [a, b] = [luminance(getComputedStyle(element).color), luminance(background(element))];
          const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
          if (ratio < 7)
            problems.push(`reading text ${ratio.toFixed(2)}:1 < 7:1: "${element.textContent.trim().slice(0, 40)}"`);
        }
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const seen = new Set();
        while (walker.nextNode()) {
          const element = walker.currentNode.parentElement;
          if (!walker.currentNode.textContent.trim() || seen.has(element)) continue;
          seen.add(element);
          if (element.closest(".hero-visual-frame, svg, .sr-only, .skip-link") || !visible(element)) continue;
          const size = Number.parseFloat(getComputedStyle(element).fontSize);
          if (size < 12.9) problems.push(`${size}px text: "${element.textContent.trim().slice(0, 40)}"`);
        }
        // A Chinese heading has no spaces to break at, so one that does not fit
        // strands its last character; keep such headings short enough to fit.
        // A lede must not leave one word on its last line either (about three
        // characters, "游戏。").
        if (document.documentElement.lang.startsWith("zh")) {
          for (const lede of document.querySelectorAll(".lead")) {
            if (!visible(lede)) continue;
            const range = document.createRange();
            range.selectNodeContents(lede);
            const lines = new Map();
            for (const rect of range.getClientRects()) {
              const top = Math.round(rect.top);
              lines.set(top, (lines.get(top) ?? 0) + rect.width);
            }
            const widths = [...lines.values()];
            const size = Number.parseFloat(getComputedStyle(lede).fontSize);
            if (widths.length > 1 && widths.at(-1) < size * 3.6)
              problems.push(`lede strands its last word: "${lede.textContent.trim().slice(0, 40)}"`);
          }
          for (const heading of document.querySelectorAll("h1, h2, h3")) {
            if (!visible(heading)) continue;
            const range = document.createRange();
            range.selectNodeContents(heading);
            const lines = new Map();
            for (const rect of range.getClientRects()) {
              const top = Math.round(rect.top);
              lines.set(top, (lines.get(top) ?? 0) + rect.width);
            }
            const widths = [...lines.values()];
            const size = Number.parseFloat(getComputedStyle(heading).fontSize);
            if (widths.length > 1 && widths.at(-1) < size * 1.6)
              problems.push(`heading strands one character: "${heading.textContent.trim().slice(0, 40)}"`);
          }
        }
        return problems.slice(0, 5);
      });
      for (const problem of readability) failures.push(`${colorScheme} ${viewport.width}px ${path}: ${problem}`);
      for (const violation of violations) {
        failures.push(
          `${colorScheme} ${viewport.width}px ${path}: ${violation.id} (${violation.impact}) ${violation.targets.join(" | ")}`,
        );
      }
    }
    return failures;
  })
).flat();
await browser.close();

if (failures.length > 0) {
  console.error(`Accessibility check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(
  `Accessibility check passed: ${paths.length} pages × 2 themes × 2 viewports, readability floors held ` +
    `(${workers} workers, ${((Date.now() - started) / 1000).toFixed(1)}s)`,
);
