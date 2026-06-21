import { productManifest, productManifestBySlug } from "../src/content/productManifest.ts";
import { productSlugs, products } from "../src/content/products.ts";
import { productFacts } from "../src/content/productFacts.ts";

const failures = [];
const slugs = productManifest.map((item) => item.slug);

if (new Set(slugs).size !== slugs.length) failures.push("manifest contains duplicate slugs");
if (slugs.join("|") !== productSlugs.join("|")) failures.push("products must derive their order from the manifest");

for (const item of productManifest) {
  if (!products[item.slug]) failures.push(`${item.slug}: missing product content`);
  if (products[item.slug]?.name !== item.name) failures.push(`${item.slug}: manifest and product name differ`);
  if (!productFacts[item.factId]) failures.push(`${item.slug}: missing fact source ${item.factId}`);
  if (productManifestBySlug[item.slug] !== item) failures.push(`${item.slug}: manifest lookup mismatch`);
}

if (failures.length > 0) {
  console.error("Product manifest check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Product manifest check passed: ${productManifest.length} products`);
