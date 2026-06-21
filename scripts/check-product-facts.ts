import { productFacts } from "../src/content/productFacts.ts";
import { productManifest } from "../src/content/productManifest.ts";
import { products } from "../src/content/products.ts";

const failures: string[] = [];
const forbiddenFacts = [
  "MIT License",
  "v0.5.0",
  "v0.18.0",
  "Version 7.0",
  "Version 1.3",
  "Updated June",
  "138 users",
  "52 users",
  "5.0 rating",
  "5.0 评分",
  "44.08 KiB",
  "33.68 KiB",
];

const visibleCopy = (slug: (typeof productManifest)[number]["slug"]) =>
  Object.values(products[slug].locales)
    .map((copy) => JSON.stringify(copy))
    .join("\n");

for (const item of productManifest) {
  const fact = productFacts[item.factId];
  if (!fact) {
    failures.push(`${item.slug}: fact source ${item.factId} is missing`);
    continue;
  }
  if (!fact.source) failures.push(`${item.slug}: fact source type is missing`);
  if (fact.source === "github-api" && !fact.repository)
    failures.push(`${item.slug}: GitHub fact source needs repository`);
  if (fact.source === "chrome-web-store" && !fact.listingUrl)
    failures.push(`${item.slug}: Chrome Web Store fact source needs listingUrl`);
  if (fact.source === "manual" && !fact.repository)
    failures.push(`${item.slug}: manual facts need a repository reference`);
  if (fact.source === "chrome-web-store" && !fact.volatileFactsPolicy)
    failures.push(`${item.slug}: Chrome product must define volatile fact policy`);
  if (!fact.stableFacts.length) failures.push(`${item.slug}: fact source must include stable facts`);

  const copy = visibleCopy(item.slug);
  if (fact.licenseLabel && !copy.includes(fact.licenseLabel)) {
    failures.push(`${item.slug}: licensed product must surface ${fact.licenseLabel} in product copy`);
  }
  if (fact.latestRelease && !copy.includes(fact.latestRelease)) {
    failures.push(`${item.slug}: released product must surface ${fact.latestRelease} in product copy`);
  }
}

const allCopy = productManifest.map((item) => visibleCopy(item.slug)).join("\n");
for (const staleFact of forbiddenFacts) {
  if (allCopy.includes(staleFact)) failures.push(`outdated product fact remains in product copy: ${staleFact}`);
}

if (failures.length > 0) {
  throw new Error(`Product fact check failed:\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
}

console.log(`Product facts verified against manifest: ${productManifest.length} products`);
