// The hand-written privacy pages (src/pages/**/privacy/index.astro) are not
// product models, so siteRoutes does not list them. Chrome Web Store listings
// link to them, so QA and the production smoke test visit them too. Each page
// declares its path, alternate, title, locale and share image as literals in
// its frontmatter; read them from there so nothing is listed twice.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const pagesDir = fileURLToPath(new URL("../src/pages/", import.meta.url));

function privacyFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) return [];
    const page = path.join(full, "index.astro");
    return [...(entry.name === "privacy" && fs.existsSync(page) ? [page] : []), ...privacyFiles(full)];
  });
}

function literal(source, file, pattern, name) {
  const match = pattern.exec(source);
  if (!match) throw new Error(`${path.relative(process.cwd(), file)}: cannot read ${name} for QA routes`);
  return match[1].trim();
}

/** Route records shaped like siteRoutes entries, with kind "privacy". */
export const privacyRoutes = privacyFiles(pagesDir)
  .map((file) => {
    const source = fs.readFileSync(file, "utf8");
    const routePath = literal(source, file, /const path = "([^"]+)"/, "path");
    const alternatePath = literal(source, file, /const alternatePath = "([^"]+)"/, "alternatePath");
    const current = literal(source, file, /\bcurrent="([^"]+)"/, "current");
    return {
      path: routePath,
      locale: literal(source, file, /\blocale: "(en|zh)"/, "locale"),
      current,
      kind: "privacy",
      slug: current,
      title: literal(source, file, /\btitle: "([^"]+)"/, "title"),
      canonicalPath: routePath,
      alternatePath,
      ogImage: literal(source, file, /\bogImage: "([^"]+)"/, "ogImage"),
      expectedText: [literal(source, file, /<h1>([^<{]+)<\/h1>/, "h1")],
    };
  })
  .sort((a, b) => a.path.localeCompare(b.path));
