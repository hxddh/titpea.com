import fs from "node:fs";

const facts = JSON.parse(fs.readFileSync(new URL("../src/content/productFacts.json", import.meta.url), "utf8"));
const s3Facts = facts["s3-turbo-list"];
const failures = [];

async function getJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "titpea-external-facts-check",
    },
  });

  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json();
}

try {
  const [repo, release] = await Promise.all([
    getJson("https://api.github.com/repos/hxddh/s3-turbo-list"),
    getJson("https://api.github.com/repos/hxddh/s3-turbo-list/releases/latest"),
  ]);

  if (repo.license?.key !== s3Facts.licenseKey) {
    failures.push(`GitHub license mismatch: expected ${s3Facts.licenseKey}, got ${repo.license?.key ?? "none"}`);
  }

  if (release.tag_name !== s3Facts.latestRelease) {
    failures.push(
      `GitHub latest release mismatch: expected ${s3Facts.latestRelease}, got ${release.tag_name ?? "none"}`,
    );
  }
} catch (error) {
  failures.push(`Could not verify GitHub product facts: ${error.message}`);
}

if (failures.length > 0) {
  console.error("External fact freshness check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`External facts verified: s3-turbo-list ${s3Facts.licenseLabel} / ${s3Facts.latestRelease}`);
