import fs from "node:fs";

const productFile = new URL("../src/content/products.ts", import.meta.url);
const evidenceFile = new URL("../src/content/evidence.ts", import.meta.url);
const content = `${fs.readFileSync(productFile, "utf8")}\n${fs.readFileSync(evidenceFile, "utf8")}`;

const requiredFacts = ["Apache-2.0", "v0.18.0", "Agent-safe JSON"];
const forbiddenFacts = ["MIT License", "v0.5.0"];

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

  if (repo.license?.key !== "apache-2.0") {
    failures.push(`GitHub license mismatch: expected apache-2.0, got ${repo.license?.key ?? "none"}`);
  }

  if (release.tag_name !== "v0.18.0") {
    failures.push(`GitHub latest release mismatch: expected v0.18.0, got ${release.tag_name ?? "none"}`);
  }
} catch (error) {
  failures.push(`Could not verify GitHub product facts: ${error.message}`);
}

if (failures.length > 0) {
  console.error("Product fact check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Product facts verified: s3-turbo-list Apache-2.0 / v0.18.0");
