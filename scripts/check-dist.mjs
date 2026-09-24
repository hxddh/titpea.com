// Built-output checks: security headers and CSP, accessibility landmarks,
// structured data, Chinese headings, and the sitemap. Runs after the build.
//   npm run check:dist
import fs from "node:fs";
import path from "node:path";
import { headingIssues } from "./copy-rules.mjs";

const failures = [];
const fail = (message) => failures.push(message);

/* ---------- Headers and CSP ---------- */

const headers = fs.readFileSync("public/_headers", "utf8");
for (const header of [
  "Content-Security-Policy:",
  "Permissions-Policy:",
  "Cross-Origin-Opener-Policy:",
  "X-Content-Type-Options: nosniff",
  "Referrer-Policy: strict-origin-when-cross-origin",
]) {
  if (!headers.includes(header)) fail(`_headers: missing ${header}`);
}
if (headers.includes("unsafe-inline")) fail("_headers: CSP must not allow unsafe-inline");
if (!/assetsInlineLimit:\s*0/.test(fs.readFileSync("astro.config.mjs", "utf8"))) {
  fail("astro.config.mjs: keep scripts external (assetsInlineLimit: 0) for the script-src 'self' CSP");
}

/* ---------- Pages ---------- */

if (!fs.existsSync("dist")) {
  console.error("dist/ is missing — run npm run build first");
  process.exit(1);
}

const pages = fs
  .readdirSync("dist", { recursive: true })
  .filter((file) => typeof file === "string" && file.endsWith(".html"))
  .map((file) => ({ file: path.join("dist", file), html: fs.readFileSync(path.join("dist", file), "utf8") }));

const text = (html) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

for (const { file, html } of pages) {
  // CSP: only external or data scripts.
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const [, attributes, body] = match;
    const type = attributes.match(/\btype=["']([^"']+)["']/i)?.[1]?.toLowerCase();
    if (type === "application/ld+json") {
      try {
        JSON.parse(body);
      } catch {
        fail(`${file}: structured data is not valid JSON`);
      }
      continue;
    }
    if (/\bsrc\s*=/.test(attributes) || body.trim().length === 0) continue;
    fail(`${file}: inline executable script conflicts with the CSP`);
  }
  if (/<style[\s>]/i.test(html)) fail(`${file}: inline <style> conflicts with the CSP`);

  // Accessibility landmarks.
  if (!/<html lang="(?:en|zh-CN)">/.test(html)) fail(`${file}: missing document language`);
  if ((html.match(/<h1\b/g) ?? []).length !== 1) fail(`${file}: expected exactly one h1`);
  if (!html.includes('<a class="skip-link" href="#main-content">')) fail(`${file}: missing skip link`);
  if (!html.includes('<main id="main-content" tabindex="-1">')) fail(`${file}: missing focusable main landmark`);
  if (!/aria-label="(?:Primary|主导航)"/.test(html)) fail(`${file}: missing labeled primary navigation`);
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(image[0])) fail(`${file}: image without alt`);
    if (!/\bwidth="\d+"/.test(image[0]) || !/\bheight="\d+"/.test(image[0]))
      fail(`${file}: image without intrinsic size`);
  }
  if (/target="_blank"/.test(html) && !/rel="[^"]*noopener/.test(html)) fail(`${file}: target=_blank lacks noopener`);

  // Chinese headings read as headings, not sentences.
  if (/<html lang="zh-CN">/.test(html)) {
    for (const match of html.matchAll(/<(h[1-3])\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
      for (const issue of headingIssues(text(match[2]), match[1].toLowerCase())) fail(`${file}: ${issue}`);
    }
  }
}

/* ---------- Sitemap ---------- */

const sitemap = fs.readFileSync("dist/sitemap.xml", "utf8");
for (const { file } of pages) {
  const route = `/${path.relative("dist", file)}`.replace(/index\.html$/, "");
  if (route === "/404.html") continue;
  if (!sitemap.includes(`<loc>https://titpea.com${route}</loc>`)) fail(`sitemap.xml: missing ${route}`);
}

/* ---------- Releases feed ---------- */

const feed = fs.existsSync("dist/releases.xml") ? fs.readFileSync("dist/releases.xml", "utf8") : "";
if (!feed.includes('<feed xmlns="http://www.w3.org/2005/Atom">')) fail("releases.xml: missing Atom feed");
if ((feed.match(/<entry>/g) ?? []).length === 0) fail("releases.xml: no entries");
for (const page of pages.filter(({ file }) => !file.endsWith("404.html"))) {
  if (!page.html.includes('href="/releases.xml"')) fail(`${page.file}: missing releases feed link`);
}

if (failures.length > 0) {
  console.error(`Dist check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`Dist check passed: ${pages.length} pages`);
