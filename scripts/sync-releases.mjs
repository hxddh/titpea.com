// Refresh src/content/releases.json from each repository's latest GitHub
// release, so download buttons, meta lines, and About carry the current tag
// without hand edits. CI runs this before every build and on a daily
// schedule. If GitHub cannot be reached, the committed tags stay and the
// build continues; `--strict` turns that into a failure.
import fs from "node:fs";

const file = new URL("../src/content/releases.json", import.meta.url);
const releases = JSON.parse(fs.readFileSync(file, "utf8"));
const strict = process.argv.includes("--strict");
const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "titpea-release-sync",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

const changes = [];
const problems = [];

for (const [slug, entry] of Object.entries(releases)) {
  try {
    const response = await fetch(`https://api.github.com/repos/${entry.repo}/releases/latest`, { headers });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const { tag_name: tag } = await response.json();
    if (!/^v?\d+\.\d+/.test(tag ?? "")) throw new Error(`unexpected tag ${JSON.stringify(tag)}`);
    if (tag !== entry.version) {
      changes.push(`${slug}: ${entry.version} → ${tag}`);
      entry.version = tag;
    }
  } catch (error) {
    problems.push(`${slug} (${entry.repo}): ${error.message}`);
  }
}

if (changes.length > 0) fs.writeFileSync(file, `${JSON.stringify(releases, null, 2)}\n`);

console.log(changes.length > 0 ? `Release tags updated:\n- ${changes.join("\n- ")}` : "Release tags are current.");
if (problems.length > 0) {
  console[strict ? "error" : "warn"](`Could not read the latest release for:\n- ${problems.join("\n- ")}`);
  if (strict) process.exit(1);
}
