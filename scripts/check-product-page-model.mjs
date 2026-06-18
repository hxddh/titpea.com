import { products, productSlugs } from "../src/content/products.ts";
import { productPageModel } from "../src/content/productPageModel.ts";

const failures = [];
const locales = ["en", "zh"];

for (const locale of locales) {
  for (const slug of productSlugs) {
    try {
      const model = productPageModel(products[slug], locale);
      const ids = model.sections.map((section) => section.id);
      const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);

      if (model.slug !== slug) failures.push(`${slug} ${locale}: model slug mismatch`);
      if (model.current !== slug) failures.push(`${slug} ${locale}: current must equal slug`);
      if (model.path !== (locale === "zh" ? `/zh/${slug}/` : `/${slug}/`)) {
        failures.push(`${slug} ${locale}: invalid path ${model.path}`);
      }
      if (duplicateIds.length > 0) failures.push(`${slug} ${locale}: duplicate sections ${duplicateIds.join(", ")}`);
      if (model.navItems.some((item) => !ids.includes(item.id))) {
        failures.push(`${slug} ${locale}: nav includes missing section`);
      }
      if (model.sectionIndex && model.navItems.length < 5) failures.push(`${slug} ${locale}: section index too short`);
      if (model.expectedText.some((text) => !text)) failures.push(`${slug} ${locale}: empty expected text`);
      if (!model.structuredData?.applicationCategory) failures.push(`${slug} ${locale}: missing schema category`);
      if (!model.visual.kind) failures.push(`${slug} ${locale}: missing visual kind`);
    } catch (error) {
      failures.push(`${slug} ${locale}: ${error.message}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Product page model check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Product page model check passed: ${productSlugs.length * locales.length} localized models`);
