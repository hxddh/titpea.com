import { viewports } from "./qa/config.mjs";
import { checkOgAssets } from "./qa/assetChecks.mjs";
import { loadChromium, prepareOutputDir } from "./qa/browser.mjs";
import { checkMobileMenu } from "./qa/navigationChecks.mjs";
import { printQaReport } from "./qa/report.mjs";
import { checkRoute } from "./qa/routeMetrics.mjs";
import { checkSectionIndex } from "./qa/sectionIndexChecks.mjs";

const { siteRoutes: routes } = await import(new URL("../src/content/siteManifest.ts", import.meta.url));
const chromium = loadChromium();

prepareOutputDir();
const browser = await chromium.launch({ headless: true });
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  page.setDefaultTimeout(8_000);

  for (const route of routes) {
    results.push(await checkRoute(page, viewport, route));
  }

  if (viewport.name === "mobile") {
    results.push(await checkMobileMenu(page));
  }

  for (const route of routes.filter((route) => route.sectionIndex)) {
    results.push(...(await checkSectionIndex(page, viewport, route)));
  }

  await page.close();
}

await browser.close();
results.push(...(await checkOgAssets(routes)));
printQaReport(results);
