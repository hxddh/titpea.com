// Did a release sync move any tag or publish date? The scheduled workflow run
// redeploys only when it did. Notes are refilled at every build and never
// committed, so they never count; comparing the whole file redeployed daily.
//
//   node scripts/release-tags-changed.mjs [before.json] [after.json]
//
// With no arguments, compares the committed src/content/releases.json (HEAD)
// with the file on disk. Prints true or false, and writes changed=<value> to
// $GITHUB_OUTPUT when it is set.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

/** Each product's tag and publish date: the only fields a redeploy waits for. */
export const releaseKey = (releases) =>
  JSON.stringify(
    Object.keys(releases)
      .sort()
      .map((slug) => [slug, releases[slug]?.version ?? null, releases[slug]?.published ?? null]),
  );

export const releaseTagsChanged = (before, after) => releaseKey(before) !== releaseKey(after);

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [beforePath, afterPath] = process.argv.slice(2);
  const before = JSON.parse(
    beforePath
      ? fs.readFileSync(beforePath, "utf8")
      : execFileSync("git", ["show", "HEAD:src/content/releases.json"], { encoding: "utf8" }),
  );
  const after = JSON.parse(fs.readFileSync(afterPath ?? "src/content/releases.json", "utf8"));
  const changed = releaseTagsChanged(before, after);
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
  console.log(String(changed));
}
