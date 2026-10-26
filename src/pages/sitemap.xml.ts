import { allPages, newestReleaseDate } from "../lib/pages";
import releases from "../content/releases.json";

// lastmod is the day a page's content last changed on its own: a product page
// on its latest release, Home, About and Releases on the newest release
// anywhere. Pages with no such date (the privacy index) carry none rather
// than a build date that moves daily.
const published = releases as Record<string, { published?: string }>;
const newest = newestReleaseDate();
const lastmodFor = (model: (typeof allPages)[number]) =>
  model.kind === "product" ? published[model.slug]?.published : model.kind === "privacy" ? undefined : newest;

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export function GET() {
  const privacyRoutes = [
    {
      canonicalUrl: "https://titpea.com/easier-bookmarks/privacy/",
      alternates: {
        en: "https://titpea.com/easier-bookmarks/privacy/",
        zh: "https://titpea.com/zh/easier-bookmarks/privacy/",
        xDefault: "https://titpea.com/easier-bookmarks/privacy/",
      },
    },
    {
      canonicalUrl: "https://titpea.com/zh/easier-bookmarks/privacy/",
      alternates: {
        en: "https://titpea.com/easier-bookmarks/privacy/",
        zh: "https://titpea.com/zh/easier-bookmarks/privacy/",
        xDefault: "https://titpea.com/easier-bookmarks/privacy/",
      },
    },
    {
      canonicalUrl: "https://titpea.com/douban-movie-rating/privacy/",
      alternates: {
        en: "https://titpea.com/douban-movie-rating/privacy/",
        zh: "https://titpea.com/zh/douban-movie-rating/privacy/",
        xDefault: "https://titpea.com/douban-movie-rating/privacy/",
      },
    },
    {
      canonicalUrl: "https://titpea.com/zh/douban-movie-rating/privacy/",
      alternates: {
        en: "https://titpea.com/douban-movie-rating/privacy/",
        zh: "https://titpea.com/zh/douban-movie-rating/privacy/",
        xDefault: "https://titpea.com/douban-movie-rating/privacy/",
      },
    },
    {
      canonicalUrl: "https://titpea.com/paper-sudoku/privacy/",
      alternates: {
        en: "https://titpea.com/paper-sudoku/privacy/",
        zh: "https://titpea.com/zh/paper-sudoku/privacy/",
        xDefault: "https://titpea.com/paper-sudoku/privacy/",
      },
    },
    {
      canonicalUrl: "https://titpea.com/zh/paper-sudoku/privacy/",
      alternates: {
        en: "https://titpea.com/paper-sudoku/privacy/",
        zh: "https://titpea.com/zh/paper-sudoku/privacy/",
        xDefault: "https://titpea.com/paper-sudoku/privacy/",
      },
    },
  ];
  const urls = [
    ...allPages.map((model) => ({ ...model.seo, lastmod: lastmodFor(model) })),
    ...privacyRoutes.map((route) => ({ ...route, lastmod: undefined })),
  ]
    .map((seo) => {
      const alternates = [
        `<xhtml:link rel="alternate" hreflang="en" href="${escapeXml(seo.alternates.en)}"/>`,
        `<xhtml:link rel="alternate" hreflang="zh-CN" href="${escapeXml(seo.alternates.zh)}"/>`,
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(seo.alternates.xDefault)}"/>`,
      ].join("");
      const lastmod = seo.lastmod ? `<lastmod>${seo.lastmod}</lastmod>` : "";
      return `<url><loc>${escapeXml(seo.canonicalUrl)}</loc>${lastmod}${alternates}</url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}
