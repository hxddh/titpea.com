// node --test scripts/release-tags-changed.test.mjs
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { releaseTagsChanged } from "./release-tags-changed.mjs";

const committed = {
  pulse: { repo: "hxddh/Pulse", version: "v30.0.0", published: "2026-10-14" },
  goban: { repo: "hxddh/goban", version: "v3.1.0", published: "2026-10-01" },
};
const copy = (value) => JSON.parse(JSON.stringify(value));

test("notes filled in by a sync are not a change", () => {
  const synced = copy(committed);
  synced.pulse.notes = { summary: "Tray", items: ["One ungrouped list"], url: "https://example.com" };
  assert.equal(releaseTagsChanged(committed, synced), false);
});

test("key order is not a change", () => {
  const reordered = { goban: committed.goban, pulse: committed.pulse };
  assert.equal(releaseTagsChanged(committed, reordered), false);
});

test("a new tag is a change", () => {
  const synced = copy(committed);
  synced.goban.version = "v3.2.0";
  assert.equal(releaseTagsChanged(committed, synced), true);
});

test("a new publish date is a change", () => {
  const synced = copy(committed);
  synced.pulse.published = "2026-10-15";
  assert.equal(releaseTagsChanged(committed, synced), true);
});

test("an added or removed product is a change", () => {
  const added = { ...copy(committed), readout: { repo: "hxddh/readout", version: "v1.0.0", published: "2026-10-16" } };
  assert.equal(releaseTagsChanged(committed, added), true);
  assert.equal(releaseTagsChanged(added, committed), true);
});

test("the command prints the answer and writes GITHUB_OUTPUT", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "release-tags-"));
  const before = path.join(dir, "before.json");
  const after = path.join(dir, "after.json");
  const output = path.join(dir, "output");
  fs.writeFileSync(before, JSON.stringify(committed));
  const synced = copy(committed);
  synced.pulse.version = "v31.0.0";
  fs.writeFileSync(after, JSON.stringify(synced));
  const script = fileURLToPath(new URL("./release-tags-changed.mjs", import.meta.url));
  const stdout = execFileSync(process.execPath, [script, before, after], {
    encoding: "utf8",
    env: { ...process.env, GITHUB_OUTPUT: output },
  });
  assert.equal(stdout.trim(), "true");
  assert.equal(fs.readFileSync(output, "utf8"), "changed=true\n");
  fs.rmSync(dir, { recursive: true, force: true });
});
