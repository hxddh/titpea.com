// node --test scripts/new-product.test.mjs
import assert from "node:assert/strict";
import test from "node:test";
import { MARKER, camelCase, insertIntoIndex, insertTokens, productSource, siteOrder } from "./new-product.mjs";

const index = `import type { Product } from "../schema";
import alpha from "./alpha";
import gamma from "./gamma";
import worldClock from "./world-clock";

export const products: Product[] = [
  alpha,
  gamma,
  worldClock,
];
`;
const lineOf = { alpha: "storage", gamma: "agents", "world-clock": "everyday" };
const order = siteOrder(
  index,
  (slug) => `export default defineProduct({\n  slug: "${slug}",\n  line: "${lineOf[slug]}",\n`,
);

const tokens = `:root {
  --tint-alpha: #111111;
  --ink-alpha: #222222;
  --tint-world-clock: #333333;
  --ink-world-clock: #444444;

  --fill-alpha: #222222;
  --fill-world-clock: #444444;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --tint-alpha: #555555;
    --ink-alpha: #666666;
    --tint-world-clock: #777777;
    --ink-world-clock: #888888;
  }
}
body[data-product="alpha"] {
  --product-tint: var(--tint-alpha);
}
body[data-product="world-clock"] {
  --product-tint: var(--tint-world-clock);
}

body[data-product] {
  --wash-1: red;
}
`;

test("site order reads each product's line", () => {
  assert.deepEqual(order, [
    { slug: "alpha", line: "storage" },
    { slug: "gamma", line: "agents" },
    { slug: "world-clock", line: "everyday" },
  ]);
});

test("a new product goes after the last product of its line", () => {
  const next = insertIntoIndex(index, order, "beta-tool", "storage");
  assert.match(next, /import alpha from "\.\/alpha";\nimport betaTool from "\.\/beta-tool";\nimport gamma/);
  assert.match(next, /\n {2}alpha,\n {2}betaTool,\n {2}gamma,\n/);
});

test("a line with no products yet puts it last", () => {
  const next = insertIntoIndex(index, order, "zeta", "games");
  assert.match(next, /import worldClock from "\.\/world-clock";\nimport zeta from "\.\/zeta";/);
  assert.match(next, /\n {2}worldClock,\n {2}zeta,\n\];/);
});

test("an existing slug is refused", () => {
  assert.throws(() => insertIntoIndex(index, order, "gamma", "agents"), /already/);
});

test("tokens: pairs, fill and mapping land in alphabetical order, in every block", () => {
  const css = insertTokens(tokens, "beta");
  assert.equal(css.split("--tint-beta:").length - 1, 2);
  assert.match(css, /--ink-alpha: #222222;\n {2}--tint-beta: [^\n]*\n {2}--ink-beta: [^\n]*\n {2}--tint-world-clock/);
  assert.match(css, /--ink-alpha: #666666;\n {4}--tint-beta: [^\n]*\n {4}--ink-beta: [^\n]*\n {4}--tint-world-clock/);
  assert.match(css, /--fill-alpha: #222222;\n {2}--fill-beta: [^\n]*\n {2}--fill-world-clock/);
  assert.match(css, /\}\nbody\[data-product="beta"\] \{\n[\s\S]*?\n\}\nbody\[data-product="world-clock"\]/);
  assert.equal(css.split(MARKER).length - 1, 5);
});

test("tokens: a slug that sorts last follows the last entry of each run", () => {
  const css = insertTokens(tokens, "zulu");
  assert.match(css, /--ink-world-clock: #444444;\n {2}--tint-zulu: [^\n]*\n {2}--ink-zulu: [^\n]*\n\n {2}--fill-alpha/);
  assert.match(css, /--fill-world-clock: #444444;\n {2}--fill-zulu: [^\n]*\n\}/);
  assert.match(
    css,
    /--tint-world-clock\);\n\}\nbody\[data-product="zulu"\] \{\n[\s\S]*?\n\}\n\nbody\[data-product\] \{/,
  );
});

test("the product template marks every field to write, in both locales", () => {
  const source = productSource({ slug: "beta-tool", type: "extension", line: "everyday" });
  assert.match(source, /slug: "beta-tool"/);
  assert.match(source, /runsOn: \["chrome"\]/);
  assert.match(source, /category: "BrowserApplication"/);
  assert.match(source, /^ {2}en: \{/m);
  assert.match(source, /^ {2}zh: \{/m);
  assert.ok(source.split(MARKER).length - 1 >= 20);
  assert.equal(camelCase("beta-tool"), "betaTool");
});
