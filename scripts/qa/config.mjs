import fs from "node:fs";
import os from "node:os";

// The server under test. QA_BASE_URL wins (QA_ORIGIN is its older name);
// otherwise QA_PORT picks a port on localhost, so several worktrees can each
// run their own preview (npm run preview -- --port 4401) side by side.
export const baseUrl = (
  process.env.QA_BASE_URL ??
  process.env.QA_ORIGIN ??
  `http://127.0.0.1:${process.env.QA_PORT ?? 4321}`
).replace(/\/$/, "");
export const outDir = process.env.QA_OUT_DIR ?? "/tmp/titpea-page-qa";

// Pages checked at once. Each Chromium page renders on its own core, so the
// pool follows the machine (4 on a GitHub runner); QA_WORKERS overrides it.
export const workers = Math.max(1, Number(process.env.QA_WORKERS) || Math.min(6, os.availableParallelism()));

export const viewports = [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "tablet", width: 850, height: 1100 },
  { name: "mobile", width: 390, height: 920 },
];

export function screenshotName(viewport, path, suffix = "") {
  const cleanPath = path.replaceAll("/", "_") || "_home";
  return `${viewport}${cleanPath}${suffix}.png`;
}

/**
 * Stop unless the server answers with this checkout's dist/index.html. An
 * agent's preview from another worktree may hold the port; testing that
 * build instead of this one would pass or fail for the wrong reasons.
 */
export async function assertServesThisBuild() {
  const local = fs.readFileSync("dist/index.html", "utf8");
  let served;
  try {
    served = await (await fetch(`${baseUrl}/`, { signal: AbortSignal.timeout(8_000) })).text();
  } catch (error) {
    console.error(`No server at ${baseUrl} (${error.message}). Run npm run preview first, or set QA_PORT.`);
    process.exit(1);
  }
  if (served !== local) {
    console.error(
      `${baseUrl} is not serving this checkout's dist/ (another worktree's preview?). ` +
        "Run npm run preview -- --port <free port> here and set QA_PORT to it.",
    );
    process.exit(1);
  }
}

/** Run `task` over `items` with at most `size` in flight; results keep item order. */
export async function inPool(items, size, task) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(size, items.length) }, async (_, worker) => {
      while (next < items.length) {
        const index = next++;
        results[index] = await task(items[index], worker);
      }
    }),
  );
  return results;
}
