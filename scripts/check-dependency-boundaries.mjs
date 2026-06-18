import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function filesUnder(dir, extension) {
  return fs
    .readdirSync(path.join(root, dir), { recursive: true })
    .filter((file) => typeof file === "string" && file.endsWith(extension))
    .map((file) => path.join(dir, file));
}

function assertNoImport({ name, files, forbidden }) {
  const hits = [];
  for (const file of files) {
    const content = read(file);
    for (const pattern of forbidden) {
      if (pattern.test(content)) hits.push(`${file}: ${pattern}`);
    }
  }
  if (hits.length > 0) failures.push(`${name}\n${hits.join("\n")}`);
}

assertNoImport({
  name: "components must render page models, not assemble content",
  files: filesUnder("src/components", ".astro"),
  forbidden: [
    /from\s+["'][^"']*content\/pages\/(?:home|about|product)["']/,
    /from\s+["'][^"']*content\/(?:homePageModel|aboutPageModel|productPageModel|siteManifest|sitePageModels)["']/,
    /(?:homePageModel|aboutPageModel|productPageModel)\(/,
  ],
});

assertNoImport({
  name: "catalog must not depend on product page assembly",
  files: ["src/content/productCatalogModel.ts"],
  forbidden: [/productPageModel/, /content\/pages\/product/],
});

assertNoImport({
  name: "visual components must not depend on facts or locale branching",
  files: filesUnder("src/components/visuals", ".astro").concat(["src/components/ProductVisual.astro"]),
  forbidden: [/productEvidenceFacts/, /s3EvidenceFacts/, /storageOpsEvidenceFacts/, /locale\s*===/, /isZh/],
});

assertNoImport({
  name: "layout must render seo/header inputs only",
  files: ["src/layouts/SiteLayout.astro"],
  forbidden: [/product[A-Z]/, /product\./, /routeFor/, /siteRoutes/, /slugForCurrentPage/],
});

assertNoImport({
  name: "deleted legacy page model files must stay deleted",
  files: filesUnder("src", ".ts").concat(filesUnder("src", ".astro")),
  forbidden: [/siteManifest/, /sitePageModels/, /homePageModel/, /aboutPageModel/],
});

if (failures.length > 0) {
  console.error("Dependency boundary check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Dependency boundary check passed");
