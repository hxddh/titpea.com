// Refresh src/content/releases.json from each repository's latest GitHub
// release (tag and publish date), so download buttons, meta lines, catalog
// cards, and About carry the current tag and date without hand edits. CI runs this before every build and on a daily
// schedule. If GitHub cannot be reached, the committed tags stay and the
// build continues; `--strict` turns that into a failure.
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import * as prettier from "prettier";
import { highlightsFrom, summaryFrom } from "./release-notes.mjs";

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
    const { tag_name: tag, published_at: publishedAt, name, body, html_url: url } = await response.json();
    if (!/^v?\d+\.\d+/.test(tag ?? "")) throw new Error(`unexpected tag ${JSON.stringify(tag)}`);
    const published = /^\d{4}-\d{2}-\d{2}/.test(publishedAt ?? "") ? publishedAt.slice(0, 10) : entry.published;
    const notes = {
      summary: summaryFrom(name ?? "", body ?? "", tag),
      items: highlightsFrom(body ?? ""),
      url: url ?? `https://github.com/${entry.repo}/releases/tag/${tag}`,
    };
    // Keep the committed highlights when a release body yields nothing new.
    const nextNotes = notes.summary || notes.items.length > 0 ? notes : tag === entry.version ? entry.notes : undefined;
    if (
      tag !== entry.version ||
      published !== entry.published ||
      JSON.stringify(nextNotes) !== JSON.stringify(entry.notes)
    ) {
      changes.push(`${slug}: ${entry.version} → ${tag} (${published})`);
      entry.version = tag;
      entry.published = published;
      if (nextNotes) entry.notes = nextNotes;
      else delete entry.notes;
    }
  } catch (error) {
    problems.push(`${slug} (${entry.repo}): ${error.message}`);
  }
}

// Written through Prettier so a synced file passes format:check as committed.
if (changes.length > 0) {
  const path = fileURLToPath(file);
  const options = (await prettier.resolveConfig(path)) ?? {};
  fs.writeFileSync(file, await prettier.format(JSON.stringify(releases), { ...options, filepath: path }));
}

console.log(changes.length > 0 ? `Release tags updated:\n- ${changes.join("\n- ")}` : "Release tags are current.");
if (problems.length > 0) {
  console[strict ? "error" : "warn"](`Could not read the latest release for:\n- ${problems.join("\n- ")}`);
  if (strict) process.exit(1);
}
