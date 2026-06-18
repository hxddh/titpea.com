import { allPageModels, siteRoutes } from "../src/content/siteModel.ts";

const failures = [];

for (const model of allPageModels) {
  if (!model.seo) failures.push(`${model.path}: missing seo object`);
  if (model.seo?.canonicalPath !== model.path) failures.push(`${model.path}: seo canonicalPath must equal model path`);
  if (!model.seo?.canonicalUrl?.startsWith("https://titpea.com/")) {
    failures.push(`${model.path}: canonicalUrl must be absolute titpea.com URL`);
  }
  if (!model.seo?.alternates?.en || !model.seo?.alternates?.zh || !model.seo?.alternates?.xDefault) {
    failures.push(`${model.path}: missing seo alternates`);
  }
  if (!model.language?.href || model.language.href !== model.alternatePath) {
    failures.push(`${model.path}: language switch must point at alternatePath`);
  }
  if (!model.expectedText?.every((text) => JSON.stringify(model).includes(text))) {
    failures.push(`${model.path}: expectedText must be visible in model JSON`);
  }
}

for (const route of siteRoutes) {
  const model = allPageModels.find((item) => item.path === route.path);
  if (!model) failures.push(`${route.path}: route has no page model`);
  if (model && route.title !== model.seo.title) failures.push(`${route.path}: route title must come from seo`);
}

if (failures.length > 0) {
  console.error("Page model contract check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Page model contract check passed: ${allPageModels.length} models`);
