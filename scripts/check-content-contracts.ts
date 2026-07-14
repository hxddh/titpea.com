import { allPageModels, productModel } from "../src/content/siteModel.ts";
import { productSlugs } from "../src/content/products.ts";

const failures: string[] = [];
const genericHeadings = new Set(["learn more", "details", "更多", "了解更多"]);

for (const model of allPageModels) {
  const title = model.seo.title.trim();
  const description = model.seo.description.trim();
  if (title.length < 3 || title.length > 70) failures.push(`${model.path}: SEO title must be 3-70 characters`);
  const minimumDescriptionLength = model.locale === "zh" ? 12 : 24;
  if (description.length < minimumDescriptionLength || description.length > 180)
    failures.push(`${model.path}: SEO description must be ${minimumDescriptionLength}-180 characters`);
  if (new Set(model.expectedText.filter(Boolean)).size !== model.expectedText.filter(Boolean).length)
    failures.push(`${model.path}: semantic checks must not duplicate text`);
  if (model.kind !== "product") continue;

  const { copy, sections } = model;
  if (copy.headline.length > 42) failures.push(`${model.path}: headline is too long for a product page`);
  if (copy.lead.length < 28 || copy.lead.length > 210)
    failures.push(`${model.path}: lead must be concise and specific`);
  if (copy.primaryCta.href === copy.secondaryCta.href)
    failures.push(`${model.path}: primary and secondary CTA must differ`);
  if (!sections.some((section) => section.kind === "faq")) failures.push(`${model.path}: product narrative needs FAQ`);
  if (sections.length < 3) failures.push(`${model.path}: product narrative needs at least three rendered sections`);
  for (const section of sections) {
    const heading = ("title" in section ? section.title : section.label).trim();
    if (genericHeadings.has(heading.toLowerCase())) failures.push(`${model.path}: generic section heading ${heading}`);
  }
}

for (const slug of productSlugs) {
  const english = productModel(slug, "en");
  const chinese = productModel(slug, "zh");
  const enSections = english.sections.map((section) => section.id).join("|");
  const zhSections = chinese.sections.map((section) => section.id).join("|");
  if (enSections !== zhSections) failures.push(`${slug}: English and Chinese section structures diverge`);
  if (english.navItems.map((item) => item.id).join("|") !== chinese.navItems.map((item) => item.id).join("|"))
    failures.push(`${slug}: English and Chinese section navigation diverges`);
}

if (failures.length > 0) {
  throw new Error(`Content contract check failed:\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
}

console.log(`Content contract check passed: ${allPageModels.length} localized pages`);
