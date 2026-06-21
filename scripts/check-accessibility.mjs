import fs from "node:fs";
import path from "node:path";

const root = "dist";
const files = fs
  .readdirSync(root, { recursive: true })
  .filter((file) => typeof file === "string" && file.endsWith(".html"));
const failures = [];

for (const file of files) {
  const fullPath = path.join(root, file);
  const html = fs.readFileSync(fullPath, "utf8");
  if (!/<html lang="(?:en|zh-CN)">/.test(html)) failures.push(`${fullPath}: missing document language`);
  if ((html.match(/<h1\b/g) ?? []).length !== 1) failures.push(`${fullPath}: expected exactly one h1`);
  if (!/<a class="skip-link" href="#main-content">/.test(html)) failures.push(`${fullPath}: missing skip link`);
  if (!/<main id="main-content" tabindex="-1">/.test(html))
    failures.push(`${fullPath}: missing focusable main landmark`);
  if (!/aria-label="(?:Primary|主导航)"/.test(html)) failures.push(`${fullPath}: missing labeled primary navigation`);
  if (/target="_blank"/.test(html) && !/rel="[^\"]*noopener/.test(html))
    failures.push(`${fullPath}: external target lacks noopener`);
}

if (failures.length > 0) {
  console.error("Accessibility contract check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Accessibility contract check passed: ${files.length} documents`);
