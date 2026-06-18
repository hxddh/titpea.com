import { siteRoutes } from "../content/siteModel";
import { siteConfig } from "../content/siteConfig";

const paths = siteRoutes.map((route) => route.path);

export function GET() {
  const urls = paths
    .map((path) => {
      const loc = `${siteConfig.baseUrl}${path}`;
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
