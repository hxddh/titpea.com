import fs from "node:fs";
import path from "node:path";

const distDir = new URL("../dist/zh/", import.meta.url).pathname;
const forbiddenTerms = [" inventory", " artifact", " bucket", " endpoint", " provider", "warnings", "exit codes"];

const failures = [];

function htmlToVisibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name.endsWith(".html")) {
      const visibleText = htmlToVisibleText(fs.readFileSync(fullPath, "utf8")).toLowerCase();
      const matched = forbiddenTerms.filter((term) => visibleText.includes(term.trim().toLowerCase()));
      if (matched.length > 0) {
        failures.push(`${fullPath}: ${matched.join(", ")}`);
      }
    }
  }
}

if (!fs.existsSync(distDir)) {
  console.error("Copy lint requires a built dist directory. Run npm run build first.");
  process.exit(1);
}

walk(distDir);

if (failures.length > 0) {
  console.error("Chinese copy lint failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Chinese copy lint passed");
