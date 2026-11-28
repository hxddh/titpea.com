import { siteRoutes } from "../src/lib/pages.ts";
import { privacyRoutes } from "./privacy-routes.mjs";

const baseUrl = process.env.SMOKE_BASE_URL ?? "https://titpea.com";
// A fresh deploy can take a little while to reach every CDN edge, so give the
// checks a generous settle window and bypass any stale edge cache per attempt.
const attempts = 6;
const requestTimeoutMs = 8_000;
const retryDelayMs = 5_000;

// Verify every route the build produced: it must resolve, carry the page
// landmarks, declare the right language, and render its own page-specific
// <title>. Driving this from siteRoutes keeps the smoke test in sync with
// content automatically instead of hardcoding strings that silently drift.
// The privacy pages that store listings link to are checked the same way.
const checks = [...siteRoutes, ...privacyRoutes].map((route) => ({
  path: route.path,
  title: route.title,
  lang: route.locale === "zh" ? "zh-CN" : "en",
}));

function includesTitle(html, title) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? match[1].includes(title) : false;
}

async function checkRoute({ path, title, lang }) {
  try {
    const url = new URL(path, baseUrl);
    url.searchParams.set("_cacheBust", `${Date.now()}-${Math.random().toString(36).slice(2)}`);
    const response = await fetch(url, {
      redirect: "follow",
      cache: "no-store",
      headers: { "cache-control": "no-cache" },
      signal: AbortSignal.timeout(requestTimeoutMs),
    });
    const html = await response.text();
    if (!response.ok) return `${path}: ${response.status}`;
    if (!/<main\b/.test(html) || !/<h1\b/.test(html)) return `${path}: missing page landmarks`;
    if (!new RegExp(`<html[^>]*\\blang="${lang}"`).test(html)) return `${path}: wrong or missing html lang (${lang})`;
    if (!includesTitle(html, title)) return `${path}: <title> missing expected text "${title}"`;
  } catch (error) {
    return `${path}: ${error.message}`;
  }
  return null;
}

// An unknown address answers 404 with the not-found page in its own language.
const missingPaths = [
  { path: "/no-such-titpea-page/", title: "Page not found", lang: "en" },
  { path: "/zh/no-such-titpea-page/", title: "页面不存在", lang: "zh-CN" },
];

async function checkMissingPath({ path, title, lang }) {
  try {
    const url = new URL(path, baseUrl);
    url.searchParams.set("_cacheBust", `${Date.now()}-${Math.random().toString(36).slice(2)}`);
    const response = await fetch(url, {
      redirect: "follow",
      cache: "no-store",
      headers: { "cache-control": "no-cache" },
      signal: AbortSignal.timeout(requestTimeoutMs),
    });
    if (response.status !== 404) return `${path}: expected 404, got ${response.status}`;
    const html = await response.text();
    if (includesTitle(html, "Small software by hxddh")) {
      return `${path}: unknown path served the home page`;
    }
    if (!includesTitle(html, title)) return `${path}: missing not-found title "${title}"`;
    if (!new RegExp(`<html[^>]*\\blang="${lang}"`).test(html)) return `${path}: wrong or missing html lang (${lang})`;
  } catch (error) {
    return `${path}: ${error.message}`;
  }
  return null;
}

// Response headers only the edge sets (public/_headers): pages stay
// same-origin; the share images, icons and the feed may be loaded by other
// sites; the feed is served as Atom. Each value must be exact: Pages joins a
// header two rules both set with a comma.
const headerChecks = [
  { path: "/", headers: { "cross-origin-resource-policy": "same-origin" } },
  { path: "/favicon.svg", headers: { "cross-origin-resource-policy": "cross-origin" } },
  { path: "/assets/og-home.png", headers: { "cross-origin-resource-policy": "cross-origin" } },
  {
    path: "/releases.xml",
    headers: {
      "cross-origin-resource-policy": "cross-origin",
      "content-type": "application/atom+xml; charset=utf-8",
    },
  },
];

async function checkHeaders({ path, headers }) {
  try {
    const url = new URL(path, baseUrl);
    url.searchParams.set("_cacheBust", `${Date.now()}-${Math.random().toString(36).slice(2)}`);
    const response = await fetch(url, {
      cache: "no-store",
      headers: { "cache-control": "no-cache" },
      signal: AbortSignal.timeout(requestTimeoutMs),
    });
    await response.arrayBuffer();
    for (const [name, expected] of Object.entries(headers)) {
      const actual = response.headers.get(name);
      if (actual?.toLowerCase() !== expected) return `${path}: ${name} is ${actual ?? "missing"}, expected ${expected}`;
    }
  } catch (error) {
    return `${path}: ${error.message}`;
  }
  return null;
}

const failures = [];
for (let attempt = 0; attempt < attempts; attempt += 1) {
  failures.length = 0;
  const results = await Promise.all(checks.map(checkRoute));
  failures.push(...results.filter(Boolean));
  failures.push(...(await Promise.all(headerChecks.map(checkHeaders))).filter(Boolean));
  failures.push(...(await Promise.all(missingPaths.map(checkMissingPath))).filter(Boolean));
  if (failures.length === 0) break;
  if (attempt < attempts - 1) await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
}

if (failures.length > 0) {
  console.error("Production smoke check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Production smoke check passed: ${checks.length} routes`);
