import fs from "node:fs";
import path from "node:path";
import { headingIssues, zhAwkwardPatterns, zhForbiddenTerms } from "./copy-rules.mjs";

const distDir = new URL("../dist/zh/", import.meta.url).pathname;

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

function textFromHtml(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function checkHeadings(html, fullPath) {
  for (const match of html.matchAll(/<(h[1-3])\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const [, level, content] = match;
    for (const issue of headingIssues(textFromHtml(content), level.toLowerCase())) {
      failures.push(`${fullPath}: ${issue}`);
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name.endsWith(".html")) {
      const html = fs.readFileSync(fullPath, "utf8");
      const visibleText = htmlToVisibleText(html);
      const visibleTextLower = visibleText.toLowerCase();
      const matched = zhForbiddenTerms.filter((term) => visibleTextLower.includes(term.trim().toLowerCase()));
      if (matched.length > 0) {
        failures.push(`${fullPath}: ${matched.join(", ")}`);
      }
      for (const { pattern, label } of zhAwkwardPatterns) {
        const sentences = visibleText.split(/[。！？；]/).map((sentence) => sentence.trim());
        if (sentences.some((sentence) => pattern.test(sentence))) failures.push(`${fullPath}: ${label}`);
      }
      checkHeadings(html, fullPath);
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
