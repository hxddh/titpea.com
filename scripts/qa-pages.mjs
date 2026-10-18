// Browser QA over every route the site builds (siteRoutes plus the privacy
// pages), in three viewports, against a running preview of this checkout:
//   npm run preview -- --port 4401 & QA_PORT=4401 npm run qa:pages
// Visits run in parallel on a small pool of pages (QA_WORKERS, default: the
// machine's cores, at most six). QA_VERBOSE=1 logs every visit and the table.
import { assertServesThisBuild, inPool, viewports, workers } from "./qa/config.mjs";
import { checkOgAssets } from "./qa/assetChecks.mjs";
import { catalogTasks, checkCatalogFacets } from "./qa/catalogChecks.mjs";
import { loadChromium, prepareOutputDir } from "./qa/browser.mjs";
import { checkMobileMenu } from "./qa/navigationChecks.mjs";
import { printQaReport } from "./qa/report.mjs";
import { checkRoute } from "./qa/routeMetrics.mjs";
import { runSectionIndexTask, sectionIndexTasks } from "./qa/sectionIndexChecks.mjs";
import { privacyRoutes } from "./privacy-routes.mjs";

const { siteRoutes } = await import(new URL("../src/lib/pages.ts", import.meta.url));
const routes = [...siteRoutes, ...privacyRoutes];
const chromium = loadChromium();
const started = Date.now();

await assertServesThisBuild();
prepareOutputDir();
const browser = await chromium.launch({ headless: true });

// One page per worker and viewport, reused across that worker's tasks.
const pages = new Map();
async function pageFor(worker, viewport) {
  const key = `${worker}:${viewport.name}`;
  if (!pages.has(key)) {
    const page = await browser.newPage({ viewport });
    page.setDefaultTimeout(8_000);
    pages.set(key, page);
  }
  return pages.get(key);
}

const mobile = viewports.find((viewport) => viewport.name === "mobile");
const tasks = [
  ...viewports.flatMap((viewport) => routes.map((route) => ({ kind: "route", viewport, route }))),
  { kind: "menu", viewport: mobile },
  ...sectionIndexTasks(routes, viewports),
  ...catalogTasks(routes, viewports),
];

const results = (
  await inPool(tasks, workers, async (task, worker) => {
    const page = await pageFor(worker, task.viewport);
    try {
      if (task.kind === "route") return [await checkRoute(page, task.viewport, task.route)];
      if (task.kind === "menu") return [await checkMobileMenu(page, routes)];
      if (task.kind === "catalog") return [await checkCatalogFacets(page, task)];
      return [await runSectionIndexTask(page, task)];
    } catch (error) {
      // A task that throws (a timeout, a missing element) is a failed check, not a crashed run.
      return [
        {
          viewport: task.viewport.name,
          path: `${task.route?.path ?? ""} ${task.kind}${task.index !== undefined ? `:${task.index}` : ""}`,
          overflow: 0,
          nav: task.viewport.name === "desktop" ? "flex" : "none",
          mobile: task.viewport.name === "desktop" ? "none" : "block",
          h1: task.kind,
          h1Lines: 1,
          anchorCount: 0,
          textOk: false,
          details: { error: error.message.split("\n")[0] },
        },
      ];
    }
  })
).flat();

await browser.close();
results.push(...(await checkOgAssets(routes)));
console.log(
  `QA visited ${tasks.length} pages with ${workers} workers in ${((Date.now() - started) / 1000).toFixed(1)}s`,
);
printQaReport(results);
