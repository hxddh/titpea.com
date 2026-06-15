import fs from "node:fs";

const productFile = new URL("../src/content/products.ts", import.meta.url);
const evidenceFile = new URL("../src/content/evidence.ts", import.meta.url);
const factsFile = new URL("../src/content/productFacts.json", import.meta.url);
const factsContent = fs.readFileSync(factsFile, "utf8");
const content = `${fs.readFileSync(productFile, "utf8")}\n${fs.readFileSync(evidenceFile, "utf8")}\n${factsContent}`;
const facts = JSON.parse(factsContent);

const s3Facts = facts["s3-turbo-list"];
const chromeFacts = [facts["world-clock"], facts["douban-movie-rating"]];
const requiredFacts = [
  s3Facts.licenseLabel,
  s3Facts.latestRelease,
  ...s3Facts.stableFacts.filter((fact) => fact === "Agent-safe JSON"),
];
const forbiddenFacts = [
  "MIT License",
  "v0.5.0",
  "Version 7.0",
  "Version 1.3",
  "Updated June",
  "138 users",
  "52 users",
  "5.0 rating",
  "5.0 评分",
  "44.08 KiB",
  "33.68 KiB",
];

const failures = [];

for (const fact of requiredFacts) {
  if (!content.includes(fact)) {
    failures.push(`Missing local fact: ${fact}`);
  }
}

for (const fact of forbiddenFacts) {
  if (content.includes(fact)) {
    failures.push(`Outdated local fact still present: ${fact}`);
  }
}

async function getJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "titpea-product-facts-check",
    },
  });

  if (!response.ok) {
    throw new Error(`${url} returned ${response.status}`);
  }

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

for (const fact of chromeFacts) {
  if (!fact.volatileFactsPolicy) {
    failures.push(`Missing Chrome volatile fact policy for ${fact.listingUrl}`);
  }
}

if (failures.length > 0) {
  console.error("Product fact check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Product facts verified: s3-turbo-list ${s3Facts.licenseLabel} / ${s3Facts.latestRelease}`);
