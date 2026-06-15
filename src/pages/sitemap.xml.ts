import { productSlugs } from "../content/products";

const site = "https://titpea.com";
const staticPaths = ["", "about"];
const paths = [
  ...staticPaths,
  ...productSlugs,
  ...staticPaths.map((path) => (path ? `zh/${path}` : "zh")),
  ...productSlugs.map((slug) => `zh/${slug}`),
];

export function GET() {
  const urls = paths
    .map((path) => {
      const loc = `${site}/${path ? `${path}/` : ""}`;
      return `<url><loc>${loc}</loc></url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}
