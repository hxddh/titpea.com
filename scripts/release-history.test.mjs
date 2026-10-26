import assert from "node:assert/strict";
import test from "node:test";
import { withLatest } from "./release-history.mjs";

const old = [
  { version: "v2.0.0", published: "2026-10-01", title: "" },
  { version: "v1.0.0", published: "2026-09-01", title: "" },
];

test("a failed listing keeps the old history and gains the new latest release", () => {
  const latest = { version: "v3.0.0", published: "2026-10-20", title: "Three" };
  assert.deepEqual(withLatest(old, latest, 5), [latest, ...old]);
});

test("the latest release already listed is not duplicated", () => {
  const latest = { version: "v2.0.0", published: "2026-10-01", title: "Two" };
  assert.deepEqual(
    withLatest(old, latest, 5).map((release) => release.version),
    ["v2.0.0", "v1.0.0"],
  );
});

test("the history stays within the limit, oldest dropped", () => {
  const latest = { version: "v3.0.0", published: "2026-10-20", title: "" };
  assert.deepEqual(
    withLatest(old, latest, 2).map((release) => release.version),
    ["v3.0.0", "v2.0.0"],
  );
});

test("an empty history stays empty", () => {
  assert.deepEqual(withLatest([], { version: "v1.0.0", published: "2026-01-01", title: "" }, 5), []);
});
