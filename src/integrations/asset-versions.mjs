// After the build, every reference to a file under /assets/ or /scripts/ in
// the built pages gets `?v=<first 10 hex of its SHA-256>`. A replaced icon,
// screenshot or script keeps its file name, so without this a browser or CDN
// could keep serving the old bytes; with it, the URL changes exactly when the
// bytes do, and public/_headers can let browsers cache these files for a year.
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const assetRef =
  /((?:https:\/\/titpea\.com)?\/(?:assets\/[\w./-]+?\.(?:webp|png|jpg|jpeg|svg|ico|mp4|webm)|scripts\/[\w.-]+?\.js))(?![\w?])/g;

function* pages(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* pages(full);
    else if (/\.(html|xml)$/.test(entry.name)) yield full;
  }
}

export default function assetVersions() {
  return {
    name: "titpea:asset-versions",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const hashes = new Map();
        const version = (ref) => {
          const file = path.join(root, ref.replace(/^https:\/\/titpea\.com/, ""));
          if (!hashes.has(file)) {
            hashes.set(
              file,
              fs.existsSync(file)
                ? createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 10)
                : null,
            );
          }
          return hashes.get(file);
        };
        let rewritten = 0;
        for (const page of pages(root)) {
          const html = fs.readFileSync(page, "utf8");
          const next = html.replace(assetRef, (ref) => {
            const v = version(ref);
            return v ? `${ref}?v=${v}` : ref;
          });
          if (next !== html) {
            fs.writeFileSync(page, next);
            rewritten += 1;
          }
        }
        logger.info(`versioned asset URLs in ${rewritten} files (${hashes.size} assets)`);
      },
    },
  };
}
