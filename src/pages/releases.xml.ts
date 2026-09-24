// Atom feed of the latest release per product, built from releases.json,
// so readers can follow every product in one subscription.
import { site } from "../content/site";
import { feedEntries } from "../lib/pages";

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export function GET() {
  const entries = feedEntries();
  const updated = entries[0]?.published ?? "2026-01-01";
  const body = entries
    .map((entry) => {
      const content = [
        `<p>${escapeXml(entry.summary)}</p>`,
        entry.items.length > 0 ? `<ul>${entry.items.map((item) => `<li>${escapeXml(item)}</li>`).join("")}</ul>` : "",
        `<p><a href="${escapeXml(entry.notesUrl)}">Release notes</a></p>`,
      ].join("");
      return `  <entry>
    <id>tag:titpea.com,${entry.published}:${entry.slug}/${escapeXml(entry.version)}</id>
    <title>${escapeXml(`${entry.name} ${entry.version}`)}</title>
    <updated>${entry.published}T00:00:00Z</updated>
    <link rel="alternate" href="${escapeXml(entry.pageUrl)}"/>
    <link rel="related" href="${escapeXml(entry.notesUrl)}"/>
    <summary>${escapeXml(entry.summary)}</summary>
    <content type="html">${escapeXml(content)}</content>
  </entry>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${site.baseUrl}/releases.xml</id>
  <title>Titpea releases</title>
  <subtitle>The latest release of every Titpea product.</subtitle>
  <updated>${updated}T00:00:00Z</updated>
  <author><name>hxddh</name><uri>${site.github}</uri></author>
  <link rel="self" href="${site.baseUrl}/releases.xml"/>
  <link rel="alternate" href="${site.baseUrl}/about/"/>
${body}
</feed>
`;
  return new Response(xml, { headers: { "Content-Type": "application/atom+xml; charset=utf-8" } });
}
