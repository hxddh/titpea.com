import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = new URL("../public/assets/", import.meta.url);

const images = [
  {
    file: "og-home.png",
    eyebrow: "titpea.com",
    title: "S3 automation toolkit",
    body: "Focused tools for object storage list / diff, Pi diagnosis, and request-level evidence.",
    accent: "#2457ff",
    mark: "S3",
  },
  {
    file: "og-about.png",
    eyebrow: "hxddh",
    title: "Object storage tools",
    body: "Clear commands, inspectable output, and evidence that can move into the next diagnostic step.",
    accent: "#121826",
    mark: "HX",
  },
  {
    file: "og-s3-turbo-list.png",
    eyebrow: "s3-turbo-list",
    title: "Automatic S3 inventory and diff",
    body: "Startup discovery, bounded diff, Parquet output, and agent-safe run evidence.",
    accent: "#16a56c",
    mark: "LIST",
  },
  {
    file: "og-storageops.png",
    eyebrow: "StorageOps",
    title: "S3 diagnosis agent for Pi",
    body: "Object-storage skills, bounded tools, helper scripts, and eval-backed routing.",
    accent: "#7c3aed",
    mark: "PI",
  },
  {
    file: "og-world-clock.png",
    eyebrow: "World Clock",
    title: "A timezone feed in one click",
    body: "Live city time, work-hours context, and light / dark browser-native themes.",
    accent: "#0f7a3a",
    mark: "UTC",
  },
  {
    file: "og-douban-movie-rating.png",
    eyebrow: "Douban Movie Rating Assistant",
    title: "Global ratings inside Douban",
    body: "IMDb, Rotten Tomatoes, and Metacritic context on the page you are already reading.",
    accent: "#d97706",
    mark: "RT",
  },
];

const escape = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function svg({ eyebrow, title, body, accent, mark }) {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f8f9fb"/>
  <path d="M0 0h1200v630H0z" fill="#f8f9fb"/>
  <path d="M90 98h1020v1H90zM90 532h1020v1H90z" fill="#d9dde7"/>
  <path d="M91 180h1018M91 250h1018M91 320h1018M91 390h1018M91 460h1018" stroke="#eceff5"/>
  <rect x="840" y="120" width="210" height="210" rx="16" fill="${accent}"/>
  <rect x="872" y="152" width="146" height="146" rx="12" fill="#fff" fill-opacity=".11"/>
  <text x="945" y="248" text-anchor="middle" fill="#fff" font-family="SFMono-Regular, Consolas, monospace" font-size="50" font-weight="800">${escape(mark)}</text>
  <text x="90" y="160" fill="${accent}" font-family="SFMono-Regular, Consolas, monospace" font-size="24" letter-spacing="4" font-weight="700">${escape(eyebrow)}</text>
  <text x="90" y="268" fill="#111827" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="70" font-weight="760">${escape(title)}</text>
  <foreignObject x="94" y="326" width="690" height="128">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; color:#4b5563; font-size:30px; line-height:1.35; font-weight:500;">${escape(body)}</div>
  </foreignObject>
  <text x="90" y="572" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="22" font-weight="700">titpea.com</text>
  <circle cx="1070" cy="561" r="8" fill="${accent}"/>
</svg>`;
}

await fs.mkdir(outDir, { recursive: true });

for (const image of images) {
  await sharp(Buffer.from(svg(image)))
    .png()
    .toFile(path.join(outDir.pathname, image.file));
  console.log(`generated ${image.file}`);
}
