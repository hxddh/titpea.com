// Refresh src/content/releases.json from each repository's latest GitHub
// release (or a package's latest PyPI version) (tag and publish date), so download buttons, meta lines, catalog
// cards, and About carry the current tag and date without hand edits. Each
// entry also keeps `history`: its last five published releases (tag, date,
// title), newest first, for the releases page. CI runs this before every build and on a daily
// schedule. If GitHub cannot be reached, the committed tags stay and the
// build continues; `--strict` turns that into a failure.
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import * as prettier from "prettier";
import { highlightsFrom, summaryFrom } from "./release-notes.mjs";
import { withLatest } from "./release-history.mjs";

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
/** Lines parsed from each latest release's notes, for the CI summary only. */
const quoted = {};
const problems = [];
const historyLength = 5;

/**
 * A repository that ships more than one product names its tags with a prefix
 * (`tagPrefix: "lenslet-"` for lenslet-v4.0.0): the site keeps the bare version,
 * and only tags with that prefix count.
 */
const bare = (tag, prefix = "") => (prefix && tag?.startsWith(prefix) ? tag.slice(prefix.length) : tag);
const isVersion = (tag, prefix = "") =>
  (!prefix || tag?.startsWith(prefix)) && /^v?\d+\.\d+/.test(bare(tag, prefix) ?? "");

/** The repository's last published releases, newest first; drafts and prereleases left out. */
async function historyOf(repo, prefix = "") {
  const response = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=20`, { headers });
  if (!response.ok) throw new Error(`HTTP ${response.status} listing releases`);
  return (await response.json())
    .filter((release) => !release.draft && !release.prerelease && isVersion(release.tag_name, prefix))
    .filter((release) => /^\d{4}-\d{2}-\d{2}/.test(release.published_at ?? ""))
    .sort((a, b) => b.published_at.localeCompare(a.published_at))
    .slice(0, historyLength)
    .map((release) => ({
      version: bare(release.tag_name, prefix),
      published: release.published_at.slice(0, 10),
      title: (release.name ?? "").trim(),
    }));
}

/**
 * A package published to PyPI rather than as GitHub releases (`pypi:
 * "storageops"`): its latest non-yanked version and upload date, and the last
 * five as history. PyPI versions carry no `v`; the site writes tags with one.
 */
async function syncPypi(slug, entry) {
  const response = await fetch(`https://pypi.org/pypi/${entry.pypi}/json`, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const { info, releases: files } = await response.json();
  const history = Object.entries(files)
    .filter(([, uploads]) => uploads.length > 0 && !uploads.every((upload) => upload.yanked))
    .filter(([version]) => /^\d+\.\d+(\.\d+)?$/.test(version))
    .map(([version, uploads]) => ({
      version: `v${version}`,
      uploaded: uploads.map((upload) => upload.upload_time_iso_8601 ?? upload.upload_time).sort()[0],
    }))
    .sort((a, b) => b.uploaded.localeCompare(a.uploaded))
    .slice(0, historyLength)
    .map(({ version, uploaded }) => ({ version, published: uploaded.slice(0, 10), title: version }));
  // The latest is PyPI's own current version (the highest non-pre-release),
  // not the newest upload: a maintenance 1.9.1 after 2.0.0 is not current.
  const latest = history.find((release) => release.version === `v${info?.version}`) ?? history[0];
  if (!latest) throw new Error("no published version");
  if (
    latest.version !== entry.version ||
    latest.published !== entry.published ||
    JSON.stringify(history) !== JSON.stringify(entry.history ?? [])
  ) {
    changes.push(`${slug}: ${entry.version} → ${latest.version} (${latest.published}, PyPI)`);
    entry.version = latest.version;
    entry.published = latest.published;
    entry.history = history;
  }
}

for (const [slug, entry] of Object.entries(releases)) {
  if (entry.pypi) {
    await syncPypi(slug, entry).catch((error) => problems.push(`${slug} (PyPI ${entry.pypi}): ${error.message}`));
    continue;
  }
  try {
    const response = await fetch(`https://api.github.com/repos/${entry.repo}/releases/latest`, { headers });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const { tag_name: fullTag, published_at: publishedAt, name, body, html_url: url } = await response.json();
    if (!isVersion(fullTag, entry.tagPrefix)) throw new Error(`unexpected tag ${JSON.stringify(fullTag)}`);
    const tag = bare(fullTag, entry.tagPrefix);
    const published = /^\d{4}-\d{2}-\d{2}/.test(publishedAt ?? "") ? publishedAt.slice(0, 10) : entry.published;
    // The site links the notes and never quotes them (releaseHighlights are
    // written by hand); the parsed lines go only to the CI summary below,
    // where the owner reads them when writing highlights.
    quoted[slug] = { summary: summaryFrom(name ?? "", body ?? "", tag), items: highlightsFrom(body ?? "") };
    const nextNotes = { url: url ?? `https://github.com/${entry.repo}/releases/tag/${fullTag}` };
    // A failed listing keeps the committed history; the latest tag still updates,
    // so it is merged in: the history always contains the latest release.
    const listed = await historyOf(entry.repo, entry.tagPrefix).catch((error) => {
      problems.push(`${slug} (${entry.repo}): ${error.message}`);
      return entry.history ?? [];
    });
    const history = withLatest(listed, { version: tag, published, title: (name ?? "").trim() }, historyLength);
    if (JSON.stringify(history) !== JSON.stringify(entry.history ?? [])) {
      if (history.length > 0) entry.history = history;
      else delete entry.history;
      changes.push(`${slug}: history ${history.map((release) => release.version).join(", ") || "(none)"}`);
    }
    if (
      tag !== entry.version ||
      published !== entry.published ||
      JSON.stringify(nextNotes) !== JSON.stringify(entry.notes)
    ) {
      changes.push(`${slug}: ${entry.version} → ${tag} (${published})`);
      entry.version = tag;
      entry.published = published;
      delete entry.releaseCount;
      entry.notes = nextNotes;
    }
  } catch (error) {
    problems.push(`${slug} (${entry.repo}): ${error.message}`);
  }
}

// In CI, list what the site will quote from each release, so the owner can
// read it on the run page before or after it ships.
if (process.env.GITHUB_STEP_SUMMARY) {
  const cell = (text = "") => String(text).replaceAll("|", "\\|").replaceAll("\n", " ");
  const rows = Object.entries(releases).map(
    ([slug, entry]) =>
      `| ${slug} | ${cell(entry.version)} | ${cell(entry.published)} | ${cell(quoted[slug]?.summary)} | ${cell((quoted[slug]?.items ?? []).join(" · "))} |`,
  );
  fs.appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    [
      "### Latest release notes (for writing releaseHighlights; the site only links them)",
      "",
      "| Product | Tag | Date | Summary | Highlights |",
      "| --- | --- | --- | --- | --- |",
      ...rows,
      "",
    ].join("\n"),
  );
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
