// Accessibility gate: axe-core (WCAG 2.x A/AA plus best practices) on every
// page in the sitemap, light and dark, desktop and phone. Any violation fails.
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
console.log(`Accessibility check passed: ${paths.length} pages × 2 themes × 2 viewports`);
