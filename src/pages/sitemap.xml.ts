import { allPages } from "../lib/pages";

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
  ];
  const urls = [...allPages.map((model) => model.seo), ...privacyRoutes]
    .map((seo) => {
      const alternates = [
        `<xhtml:link rel="alternate" hreflang="en" href="${escapeXml(seo.alternates.en)}"/>`,
        `<xhtml:link rel="alternate" hreflang="zh-CN" href="${escapeXml(seo.alternates.zh)}"/>`,
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(seo.alternates.xDefault)}"/>`,
      ].join("");
      return `<url><loc>${escapeXml(seo.canonicalUrl)}</loc>${alternates}</url>`;
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
