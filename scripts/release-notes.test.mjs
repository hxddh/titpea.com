// node --test scripts/release-notes.test.mjs
import assert from "node:assert/strict";
import test from "node:test";
import { highlightsFrom, summaryFrom } from "./release-notes.mjs";

test("keeps up to three lines per language", () => {
  const notes = [
    "- One fixed thing in English",
    "- Two fixed things in English",
    "- Three fixed things in English",
    "- Four fixed things in English",
    "- 第一条中文说明",
    "- 第二条中文说明",
  ].join("\n");
  assert.deepEqual(highlightsFrom(notes), [
    "One fixed thing in English",
    "Two fixed things in English",
    "Three fixed things in English",
    "第一条中文说明",
    "第二条中文说明",
  ]);
});

test("leaves code and over-long lines to the release page", () => {
  const notes = [
    '- `"gap" in text` opened the hatch permanently',
    "- Persistent state moves to schema v3",
    `- ${"A very long line that goes on ".repeat(5)}`,
    "- A throttled run says it was throttled",
  ].join("\n");
  assert.deepEqual(highlightsFrom(notes), ["A throttled run says it was throttled"]);
});

test("joins wrapped bullets and reads bold sentence leads", () => {
  const notes = "- **Retries pause between failures.** Details follow\n  on a second line.\n- **Label** —";
  assert.deepEqual(highlightsFrom(notes), ["Retries pause between failures"]);
});

test("summary drops the tag from the release name", () => {
  assert.equal(summaryFrom("11.0.3 — Durable evidence", "", "v11.0.3"), "Durable evidence");
  assert.equal(summaryFrom("v1.2.0", "Faster listing for big buckets.", "v1.2.0"), "Faster listing for big buckets");
});
