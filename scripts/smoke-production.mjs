import { siteRoutes } from "../src/content/siteModel.ts";

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
const checks = siteRoutes.map((route) => ({
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

const failures = [];
for (let attempt = 0; attempt < attempts; attempt += 1) {
  failures.length = 0;
  const results = await Promise.all(checks.map(checkRoute));
  failures.push(...results.filter(Boolean));
  if (failures.length === 0) break;
  if (attempt < attempts - 1) await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
}

if (failures.length > 0) {
  console.error("Production smoke check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Production smoke check passed: ${checks.length} routes`);
