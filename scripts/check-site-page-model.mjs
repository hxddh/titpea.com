import { allSitePageModels, siteRoutes } from "../src/content/sitePageModels.ts";
import { productArchetypeContracts } from "../src/content/productArchetypes.ts";
import { products } from "../src/content/products.ts";
import { siteConfig } from "../src/content/siteConfig.ts";

const failures = [];

function visibleStrings(value) {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(visibleStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(visibleStrings);
  return [];
}

for (const model of allSitePageModels) {
  const visible = visibleStrings(model).join("\n");
  const route = siteRoutes.find((item) => item.path === model.path);

  if (!route) failures.push(`${model.path}: missing route`);
  if (!model.locale) failures.push(`${model.path}: missing locale`);
  if (!model.title || !model.description) failures.push(`${model.path}: missing title or description`);
  if (!model.ogImage?.startsWith("/assets/og-")) failures.push(`${model.path}: invalid og image`);
  if (!model.expectedText.every((text) => visible.includes(text))) {
    failures.push(`${model.path}: expectedText is not visible in page model`);
  }

  if (model.kind === "product") {
    const product = products[model.slug];
    const contract = productArchetypeContracts[product.archetype];
    const sectionIds = model.sections.map((section) => section.id);
    const requiredIds = contract.sections.filter((section) => section.required).map((section) => section.id);
    const contractVisibleIds = contract.sections.map((section) => section.id).filter((id) => sectionIds.includes(id));

    if (sectionIds.join("|") !== contractVisibleIds.join("|")) {
      failures.push(`${model.path}: section order does not match archetype contract`);
    }
    for (const id of requiredIds) {
      if (!sectionIds.includes(id)) failures.push(`${model.path}: missing required section ${id}`);
    }
    if (model.navItems.some((item, index) => item.id !== contractVisibleIds[index])) {
      failures.push(`${model.path}: nav order does not match rendered sections`);
    }
    if (!model.visual.kind || !model.visual.label) failures.push(`${model.path}: incomplete visual model`);
    if (!model.structuredData?.applicationCategory) failures.push(`${model.path}: missing structured data category`);
    if (
      contract.group === "browser" &&
      !visible.includes(model.locale === "zh" ? "声明不收集数据" : "No data collection disclosed")
    ) {
      failures.push(`${model.path}: browser product missing privacy posture`);
    }
  }
}

for (const route of siteRoutes) {
  if (!route.canonicalPath || !route.alternatePath) failures.push(`${route.path}: missing canonical or alternate path`);
  if (!route.ogImage.startsWith(siteConfig.assets.og.home.slice(0, "/assets/og-".length))) {
    failures.push(`${route.path}: route og image must use site asset registry`);
  }
}

if (failures.length > 0) {
  console.error("Site page model check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Site page model check passed: ${allSitePageModels.length} page models`);
