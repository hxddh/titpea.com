import fs from "node:fs";

const facts = JSON.parse(fs.readFileSync(new URL("../src/content/productFacts.json", import.meta.url), "utf8"));
const s3Facts = facts["s3-turbo-list"];
const githubFacts = Object.entries(facts).filter(([, fact]) => fact.repository);
const failures = [];
const warnings = [];

async function getJson(url) {
  let response;
  try {
    response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "titpea-external-facts-check",
      },
    });
  } catch (error) {
    const networkError = new Error(`${url} network error: ${error.message}`);
    networkError.transient = true;
    throw networkError;
  }

  if (!response.ok) {
    const error = new Error(`${url} returned ${response.status}`);
    error.transient = response.status === 403 || response.status === 429 || response.status >= 500;
    throw error;
  }
  return response.json();
}

try {
  for (const [id, fact] of githubFacts) {
    const repo = await getJson(`https://api.github.com/repos/${fact.repository}`);
    if (!repo.full_name) failures.push(`${id}: GitHub repository is not readable`);
    if (fact.licenseKey && repo.license?.key !== fact.licenseKey) {
      failures.push(`${id}: GitHub license mismatch: expected ${fact.licenseKey}, got ${repo.license?.key ?? "none"}`);
    }
    if (fact.latestRelease) {
      const release = await getJson(`https://api.github.com/repos/${fact.repository}/releases/latest`);
      if (release.tag_name !== fact.latestRelease) {
        failures.push(
          `${id}: GitHub latest release mismatch: expected ${fact.latestRelease}, got ${release.tag_name ?? "none"}`,
        );
      }
    }
  }
} catch (error) {
  if (error.transient) warnings.push(`Could not verify GitHub product facts: ${error.message}`);
  else failures.push(`Could not verify GitHub product facts: ${error.message}`);
}

if (failures.length > 0) {
  console.error("External fact freshness check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn("External fact freshness check warning:");
  warnings.forEach((warning) => console.warn(`- ${warning}`));
  process.exit(0);
}

console.log(
  `External facts verified: ${githubFacts.length} GitHub repositories; s3-turbo-list ${s3Facts.licenseLabel} / ${s3Facts.latestRelease}`,
);
