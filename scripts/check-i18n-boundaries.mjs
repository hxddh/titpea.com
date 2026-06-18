import fs from "node:fs";
import path from "node:path";

const allowed = new Set([
  "src/content/pages/seo.ts",
  "src/layouts/SiteLayout.astro",
  "src/lib/site.ts",
  "scripts/check-i18n-boundaries.mjs",
  "scripts/check-site-manifest.mjs",
  "scripts/check-site-page-model.mjs",
  "scripts/qa/routeMetrics.mjs",
]);

const failures = [];

function filesUnder(dir, extensions) {
  return fs
    .readdirSync(path.join(process.cwd(), dir), { recursive: true })
    .filter((file) => typeof file === "string" && extensions.some((extension) => file.endsWith(extension)))
    .map((file) => path.join(dir, file));
}

for (const file of filesUnder("src", [".ts", ".astro"])) {
  if (file.includes("src/content/i18n/") || allowed.has(file)) continue;
  const content = fs.readFileSync(path.join(process.cwd(), file), "utf8");
  const lines = content.split("\n");
  lines.forEach((line, index) => {
    if (/locale\s*===\s*["']zh["']|locale\s*!==\s*["']zh["']|const\s+isZh|isZh\s*\?/.test(line)) {
      failures.push(`${file}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (failures.length > 0) {
  console.error("I18n boundary check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("I18n boundary check passed");
