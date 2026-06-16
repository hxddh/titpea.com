import { siteRoutes } from "../src/content/siteManifest.ts";
import { productSlugs } from "../src/content/products.ts";

const failures = [];
const routeKeys = new Set(siteRoutes.map((route) => `${route.locale}:${route.path}`));
const expectedCount = 2 * (2 + productSlugs.length);

if (siteRoutes.length !== expectedCount) {
  failures.push(`expected ${expectedCount} routes, got ${siteRoutes.length}`);
}

for (const route of siteRoutes) {
  if (route.path !== route.canonicalPath) failures.push(`${route.path}: canonicalPath must match path`);
  if (!route.title || route.title.endsWith(".")) failures.push(`${route.path}: invalid title "${route.title}"`);
  if (!route.ogImage.startsWith("/assets/og-") || !route.ogImage.endsWith(".png")) {
    failures.push(`${route.path}: invalid ogImage ${route.ogImage}`);
  }
  if (route.expectedText.length < 2) failures.push(`${route.path}: expectedText must include at least two entries`);

  const alternateLocale = route.locale === "zh" ? "en" : "zh";
  if (!routeKeys.has(`${alternateLocale}:${route.alternatePath}`)) {
    failures.push(`${route.path}: alternatePath ${route.alternatePath} has no ${alternateLocale} route`);
  }

  if (route.kind === "product") {
    if (!route.slug) failures.push(`${route.path}: product route missing slug`);
    if (!route.primaryCta) failures.push(`${route.path}: product route missing primary CTA`);
  }

  if (route.kind === "home" && !route.primaryCta) failures.push(`${route.path}: home route missing primary CTA`);
}

const productRouteCounts = new Map();
for (const route of siteRoutes.filter((route) => route.kind === "product")) {
  productRouteCounts.set(route.slug, (productRouteCounts.get(route.slug) ?? 0) + 1);
}

for (const slug of productSlugs) {
  if (productRouteCounts.get(slug) !== 2) failures.push(`${slug}: expected two localized product routes`);
}

if (failures.length > 0) {
  console.error("Site manifest check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Site manifest check passed: ${siteRoutes.length} routes`);
