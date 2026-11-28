// Astro writes only the root 404.astro as /404.html; src/pages/zh/404.astro
// comes out as /zh/404/index.html. Move it to /zh/404.html, where Cloudflare
// Pages looks for the nearest not-found page and where public/_redirects
// sends every unknown /zh/ address.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export default function notFoundPages() {
  return {
    name: "titpea:not-found-pages",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const from = path.join(root, "zh/404/index.html");
        if (!fs.existsSync(from)) throw new Error("not-found-pages: dist/zh/404/index.html was not built");
        fs.renameSync(from, path.join(root, "zh/404.html"));
        fs.rmdirSync(path.dirname(from));
        logger.info("moved /zh/404/ to /zh/404.html");
      },
    },
  };
}
