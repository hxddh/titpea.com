import { allPageModels } from "../content/siteModel";

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export function GET() {
  const urls = allPageModels
    .map((model) => {
      const alternates = [
        `<xhtml:link rel="alternate" hreflang="en" href="${escapeXml(model.seo.alternates.en)}"/>`,
        `<xhtml:link rel="alternate" hreflang="zh-CN" href="${escapeXml(model.seo.alternates.zh)}"/>`,
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(model.seo.alternates.xDefault)}"/>`,
      ].join("");
      return `<url><loc>${escapeXml(model.seo.canonicalUrl)}</loc>${alternates}</url>`;
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
