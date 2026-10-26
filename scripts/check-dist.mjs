// Built-output checks: security headers and CSP, accessibility landmarks,
// structured data, raw code markers, Chinese headings, and the sitemap. Runs after the build.
//   npm run check:dist
import fs from "node:fs";
import path from "node:path";
import { headingIssues } from "./copy-rules.mjs";
import { needsSerifSc, zhDisplayText } from "./zh-display-text.mjs";

// The characters the Chinese display font carries (npm run assets:fonts writes it).
const displayChars = new Set(fs.readFileSync("design/fonts/zh-display-chars.txt", "utf8").trim());

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

const layerOrder = fs
  .readFileSync("src/styles/global.css", "utf8")
  .match(/^@layer ([\w\s,-]+);/m)[1]
  .split(",")
  .map((name) => name.trim());

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

  // Cascade layers: the page's stylesheets, read in the order they load, must
  // set up the layers in global.css's order, whichever file comes first. A
  // page off the product pages loads at most 40 KB of CSS (DESIGN.md).
  const established = [];
  let cssBytes = 0;
  for (const [, href] of html.matchAll(/<link rel="stylesheet" href="([^"?]+)/g)) {
    const css = fs.readFileSync(path.join("dist", href), "utf8");
    cssBytes += Buffer.byteLength(css);
    for (const [, names] of css.matchAll(/@layer\s+([\w\s,-]+?)\s*[;{]/g)) {
      for (const name of names.split(",").map((part) => part.trim())) {
        if (!established.includes(name)) established.push(name);
      }
    }
  }
  if (established.join() !== layerOrder.join()) {
    fail(`${file}: stylesheets set up layers as ${established.join(", ")}, not ${layerOrder.join(", ")}`);
  }
  if (!/<body[^>]*\sdata-product=/.test(html) && cssBytes > 40 * 1024) {
    fail(`${file}: ${(cssBytes / 1024).toFixed(1)} KB of CSS; a page off the product pages loads at most 40 KB`);
  }

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

  // Every local file a page loads exists in the build (a missing one ships as a broken image).
  for (const match of html.matchAll(/\b(?:src|href|poster|srcset|content)="([^"]+)"/g)) {
    for (const candidate of match[1].split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      const local = url.replace(/^https:\/\/titpea\.com(?=\/)/, "");
      if (!/^\/(?:assets|_astro|scripts)\//.test(local)) continue;
      const target = path.join("dist", decodeURIComponent(local.replace(/[?#].*$/, "")));
      if (!fs.existsSync(target)) fail(`${file}: ${local.replace(/[?#].*$/, "")} is missing from the build`);
    }
  }

  // Every in-site link to a #fragment lands on an element with that id.
  for (const match of html.matchAll(/\bhref="((?:https:\/\/titpea\.com)?\/[^"#?]*|)#([^"]+)"/g)) {
    const page = match[1].replace(/^https:\/\/titpea\.com/, "");
    const targetFile = page === "" ? file : path.join("dist", page, page.endsWith("/") ? "index.html" : "");
    if (!fs.existsSync(targetFile) || fs.statSync(targetFile).isDirectory()) continue;
    const target = page === "" ? html : fs.readFileSync(targetFile, "utf8");
    const id = decodeURIComponent(match[2]);
    if (!target.includes(`id="${id}"`)) fail(`${file}: link to ${page || ""}#${id} has no matching id on that page`);
  }

  // Copy never shows raw Markdown code markers: `x` renders as <code>.
  const visible = text(
    html
      .replace(/<(script|style|code|pre)\b[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+\b(?:content|data-[\w-]+)="[^"]*"[^>]*>/g, " "),
  );
  if (visible.includes("`")) fail(`${file}: a raw backtick shows in page text (use Prose.astro)`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    if (match[1].includes("`")) fail(`${file}: structured data carries a raw backtick (use plainText)`);
  }

  // Chinese headings read as headings, not sentences.
  if (/<html lang="zh-CN">/.test(html)) {
    for (const match of html.matchAll(/<(h[1-3])\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
      for (const issue of headingIssues(text(match[2]), match[1].toLowerCase())) fail(`${file}: ${issue}`);
    }
  }

  // Every character of a Chinese display line is in the display font subset.
  const missing = [
    ...new Set([...zhDisplayText(html)].filter((char) => needsSerifSc(char) && !displayChars.has(char))),
  ];
  if (missing.length) {
    fail(`${file}: Chinese display lines use ${missing.join("")}, missing from the font subset (npm run assets:fonts)`);
  }
}

/* ---------- SVG assets ---------- */

// style-src 'self' also blocks inline styles inside SVGs served as files.
for (const file of fs.readdirSync("dist", { recursive: true })) {
  if (typeof file !== "string" || !file.endsWith(".svg")) continue;
  const svg = fs.readFileSync(path.join("dist", file), "utf8");
  if (/\sstyle="|<style[\s>]/.test(svg)) fail(`dist/${file}: inline style conflicts with the CSP`);
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
