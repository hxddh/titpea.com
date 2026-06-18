import { productArchetypeContracts } from "../src/content/productArchetypes.ts";
import { productModel } from "../src/content/siteModel.ts";
import { productSlugs, products } from "../src/content/products.ts";

const failures = [];

for (const locale of ["en", "zh"]) {
  for (const slug of productSlugs) {
    const model = productModel(slug, locale);
    const contract = productArchetypeContracts[products[slug].archetype];
    const actual = model.sections.map((section) => section.id);
    const expected = contract.sections.map((section) => section.id).filter((id) => actual.includes(id));
    const required = contract.sections.filter((section) => section.required).map((section) => section.id);

    if (actual.join("|") !== expected.join("|")) {
      failures.push(`${model.path}: section order differs from archetype contract`);
    }
    for (const id of required) {
      if (!actual.includes(id)) failures.push(`${model.path}: missing required section ${id}`);
    }
    if (model.navItems.map((item) => item.id).join("|") !== expected.join("|")) {
      failures.push(`${model.path}: navItems must mirror rendered section order`);
    }
    for (const section of model.sections) {
      if (!section.id || !section.kind) failures.push(`${model.path}: section missing id/kind`);
    }
  }
}

if (failures.length > 0) {
  console.error("Section contract check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Section contract check passed");
