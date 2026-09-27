// Accessibility gate: axe-core (WCAG 2.x A/AA plus best practices) on every
// page in the sitemap, light and dark, desktop and phone. Any violation fails.
// Two readability floors on top: reading text (card bodies, answers) reaches
// 7:1, and no text outside a hero product mock is smaller than 13px.
// Needs the preview server, like qa:pages:
//   npm run a11y:check
import fs from "node:fs";
import { createRequire } from "node:module";
import { chromium } from "playwright";

const require = createRequire(import.meta.url);
const axeSource = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const origin = process.env.QA_ORIGIN ?? "http://127.0.0.1:4321";
const paths = [
  ...fs.readFileSync("dist/sitemap.xml", "utf8").matchAll(/<loc>https:\/\/titpea\.com([^<]*)<\/loc>/g),
].map((match) => match[1]);
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined;

const browser = await chromium.launch({ executablePath });
const failures = [];
for (const colorScheme of ["light", "dark"]) {
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({ viewport, colorScheme, reducedMotion: "reduce" });
    const page = await context.newPage();
    for (const path of paths) {
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
        return problems.slice(0, 5);
      });
      for (const problem of readability) failures.push(`${colorScheme} ${viewport.width}px ${path}: ${problem}`);
      for (const violation of violations) {
        failures.push(
          `${colorScheme} ${viewport.width}px ${path}: ${violation.id} (${violation.impact}) ${violation.targets.join(" | ")}`,
        );
      }
    }
    await context.close();
  }
}
await browser.close();

if (failures.length > 0) {
  console.error(`Accessibility check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`Accessibility check passed: ${paths.length} pages × 2 themes × 2 viewports, readability floors held`);
