import { allPageModels, productModel } from "../src/content/siteModel.ts";
import { productSlugs } from "../src/content/products.ts";

const failures: string[] = [];
const genericHeadings = new Set([
  "learn more",
  "details",
  "更多",
  "了解更多",
  "overview",
  "概览",
  "on this page",
  "页面内容",
  "questions & how-to",
  "常见问题与用法",
  "fit and limits",
  "适用与边界",
  "how a session runs",
  "一次会话怎么跑",
  "what you get in the workbench",
  "工作台里有什么",
  "local by design",
  "本地优先",
  "at the board",
  "棋盘上的能力",
  "in the menu bar",
  "菜单栏里有什么",
  "in the page",
  "页面里的信息",
]);
const genericCardTitles = new Set([
  "use it when",
  "什么时候用",
  "current platforms",
  "local by design",
  "out of scope",
  "what it isn't",
  "it is not",
  "private by design",
  "当前支持范围",
  "本地运行",
  "明确不做",
  "它不是什么",
  "which systems are supported?",
  "支持哪些系统？",
]);
const genericDirectoryLabels = new Set([
  "overview",
  "概览",
  "on this page",
  "页面内容",
  "questions & how-to",
  "常见问题与用法",
  "fit and limits",
  "适用与边界",
  "how a session runs",
  "一次会话怎么跑",
]);
const genericIndexLabels = new Set(["On this page", "页面内容", "Read this page", "阅读路径"]);

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
  if (genericIndexLabels.has(model.indexLabel))
    failures.push(`${model.path}: generic directory title ${model.indexLabel}`);
  for (const item of model.navItems) {
    const label = item.label.trim();
    if (genericDirectoryLabels.has(label.toLowerCase()) || genericDirectoryLabels.has(label)) {
      failures.push(`${model.path}: generic directory label ${label}`);
    }
  }
  for (const section of sections) {
    const heading = ("title" in section ? section.title : section.label).trim();
    if (genericHeadings.has(heading.toLowerCase()) || genericHeadings.has(heading)) {
      failures.push(`${model.path}: generic section heading ${heading}`);
    }
    if (!("items" in section) || !Array.isArray(section.items)) continue;
    for (const item of section.items) {
      if (!item || typeof item !== "object" || !("title" in item) || typeof item.title !== "string") continue;
      const cardTitle = item.title.trim();
      if (genericCardTitles.has(cardTitle.toLowerCase()) || genericCardTitles.has(cardTitle)) {
        failures.push(`${model.path}: generic card title ${cardTitle}`);
      }
    }
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
