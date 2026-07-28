import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const outDir = new URL("../public/assets/", import.meta.url);

export const images = [
  {
    file: "og-home.png",
    eyebrow: "titpea.com",
    title: "S3 ecosystem and personal tools",
    body: "Two product lines: engineering tools for S3-compatible storage, and small products for everyday work and life.",
    accent: "#2457ff",
    mark: "S3",
    visual: "stack",
  },
  {
    file: "og-about.png",
    eyebrow: "hxddh",
    title: "Two product lines, one maker",
    body: "Cloud object storage by background — S3 ecosystem tools plus small products for everyday work and life.",
    accent: "#121826",
    mark: "HX",
    visual: "stack",
  },
  {
    file: "og-s3-turbo-list.png",
    eyebrow: "s3-turbo-list",
    title: "Automatic S3 inventory and diff",
    body: "Startup discovery, bounded diff, Parquet output, and agent-safe run evidence.",
    accent: "#16a56c",
    mark: "LIST",
    visual: "benchmark",
  },
  {
    file: "og-storage-agent-workbench.png",
    eyebrow: "Storage Agent",
    title: "A native agent for object storage",
    body: "Ask about S3-compatible storage in plain language; a local agent investigates it read-only.",
    accent: "#2563eb",
    mark: "SAW",
    visual: "workbench",
  },
  {
    file: "og-storageops.png",
    eyebrow: "StorageOps",
    title: "S3 diagnosis agent for Pi",
    body: "Object-storage skills, bounded tools, helper scripts, and eval-backed routing.",
    accent: "#7c3aed",
    mark: "PI",
    visual: "agent",
  },
  {
    file: "og-httpmon.png",
    eyebrow: "httpmon",
    title: "See CLI HTTP traffic",
    body: "A local terminal inspector for request and response evidence, HAR export, recording, and replay.",
    accent: "#16854a",
    mark: "HTTP",
    visual: "terminal",
  },
  {
    file: "og-pagewise.png",
    eyebrow: "PageWise",
    title: "Ask questions about your documents",
    body: "Local PDF text, OCR, and page-wise agent chat — files stay on your machine.",
    accent: "#0d9488",
    mark: "PDF",
    visual: "workbench",
  },
  {
    file: "og-world-clock.png",
    eyebrow: "World Clock",
    title: "A timezone feed in one click",
    body: "Live city time, work-hours context, and light / dark browser-native themes.",
    accent: "#0f7a3a",
    mark: "UTC",
    visual: "clock",
  },
  {
    file: "og-douban-movie-rating.png",
    eyebrow: "Douban Movie Rating Assistant",
    title: "Global ratings inside Douban",
    body: "IMDb, Rotten Tomatoes, and Metacritic context on the page you are already reading.",
    accent: "#d97706",
    mark: "RT",
    visual: "rating",
  },
  {
    file: "og-agent-radar.png",
    eyebrow: "Agent Radar",
    title: "Track AI agent signals in Markdown",
    body: "Watchlist, field notes, playbooks, storage implications, and a stdlib Python CLI.",
    accent: "#7c3aed",
    mark: "RADAR",
    visual: "radar",
  },
  {
    file: "og-goban.png",
    eyebrow: "Goban",
    title: "A focused Gomoku board for desktop",
    body: "Four AI levels, full-game review, daily challenges, and SGF tools for macOS and Windows.",
    accent: "#9b5f20",
    mark: "15×15",
    visual: "stack",
  },
  {
    file: "og-chessboard.png",
    eyebrow: "Chessboard",
    title: "A focused chessboard for desktop",
    body: "Stockfish 18, beginner lessons, mate drills, and PGN tools for macOS and Windows.",
    accent: "#6b4f2a",
    mark: "♔",
    visual: "stack",
  },
  {
    file: "og-easier-bookmarks.png",
    eyebrow: "Easier Bookmarks",
    title: "Bookmarks in the side panel",
    body: "Fast local search, full organization, keyboard access, and no analytics or external servers.",
    accent: "#2563eb",
    mark: "BM",
    visual: "stack",
  },
  {
    file: "og-pulse.png",
    eyebrow: "Pulse",
    title: "See waiting sessions in the menu bar",
    body: "A macOS status lamp for local coding-agent sessions — Waiting, Running, Idle, or Error — with a tray that opens the matching terminal.",
    accent: "#b42318",
    mark: "●",
    visual: "pulse",
  },
];

const escape = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function visualPanel(kind, accent, mark) {
  if (kind === "benchmark") {
    return `<g transform="translate(820 122)">
      <rect width="260" height="320" rx="18" fill="#fff" stroke="#d9dde7"/>
      <text x="28" y="52" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="18">1M OBJECTS</text>
      <text x="28" y="96" fill="#111827" font-family="Inter, ui-sans-serif, system-ui" font-size="42" font-weight="780">~19s</text>
      <rect x="28" y="138" width="204" height="18" rx="9" fill="#eef2f7"/>
      <rect x="28" y="138" width="72" height="18" rx="9" fill="#667085"/>
      <text x="28" y="184" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="15">single stream</text>
      <rect x="28" y="210" width="204" height="18" rx="9" fill="#eef2f7"/>
      <rect x="28" y="210" width="196" height="18" rx="9" fill="${accent}"/>
      <text x="28" y="256" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="15">-c 8 automatic</text>
      <text x="28" y="292" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="16">Parquet · manifest · trace</text>
    </g>`;
  }

  if (kind === "agent") {
    return `<g transform="translate(804 116)">
      <rect width="292" height="332" rx="18" fill="#fff" stroke="#d9dde7"/>
      <circle cx="146" cy="72" r="44" fill="${accent}"/>
      <text x="146" y="84" text-anchor="middle" fill="#fff" font-family="SFMono-Regular, Consolas, monospace" font-size="34" font-weight="800">${escape(mark)}</text>
      <path d="M146 118v34M74 208l48-48M218 208l-48-48" stroke="#b8c0cf" stroke-width="4"/>
      <rect x="28" y="204" width="72" height="66" rx="10" fill="#f3f5f8"/>
      <rect x="110" y="204" width="72" height="66" rx="10" fill="#f3f5f8"/>
      <rect x="192" y="204" width="72" height="66" rx="10" fill="#f3f5f8"/>
      <text x="64" y="244" text-anchor="middle" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="15">skills</text>
      <text x="146" y="244" text-anchor="middle" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="15">tools</text>
      <text x="228" y="244" text-anchor="middle" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="15">evals</text>
      <text x="28" y="310" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="16">bounded evidence</text>
    </g>`;
  }

  if (kind === "workbench") {
    return `<g transform="translate(792 116)">
      <rect width="316" height="332" rx="18" fill="#fff" stroke="#d9dde7"/>
      <path d="M0 52h316" stroke="#e4e7ec"/>
      <circle cx="26" cy="26" r="5" fill="#e4e7ec"/>
      <circle cx="44" cy="26" r="5" fill="#e4e7ec"/>
      <circle cx="62" cy="26" r="5" fill="#e4e7ec"/>
      <text x="88" y="31" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="13">storage agent · read-only</text>
      <path d="M104 52v280" stroke="#e4e7ec"/>
      <rect x="18" y="72" width="70" height="20" rx="6" fill="#eef2f7"/>
      <rect x="18" y="100" width="70" height="20" rx="6" fill="#eef2f7"/>
      <rect x="18" y="128" width="70" height="20" rx="6" fill="#eef2f7"/>
      <rect x="122" y="74" width="150" height="30" rx="10" fill="${accent}"/>
      <text x="134" y="94" fill="#fff" font-family="SFMono-Regular, Consolas, monospace" font-size="13">audit prod-assets</text>
      <text x="122" y="140" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="13">1 read policy · 2 scan ACLs</text>
      <rect x="122" y="160" width="172" height="132" rx="12" fill="#f7f9fc" stroke="#e4e7ec"/>
      <text x="138" y="188" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="12" font-weight="700">FINDING</text>
      <text x="138" y="214" fill="#111827" font-family="Inter, ui-sans-serif, system-ui" font-size="16" font-weight="700">Public list allowed</text>
      <text x="138" y="244" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="12">policy.json:12</text>
      <text x="138" y="272" fill="#2563eb" font-family="SFMono-Regular, Consolas, monospace" font-size="12">evidence attached</text>
    </g>`;
  }

  if (kind === "terminal") {
    return `<g transform="translate(786 102)">
      <rect width="324" height="368" rx="18" fill="#07110b" stroke="#193d27"/>
      <text x="26" y="44" fill="#8ebca0" font-family="SFMono-Regular, Consolas, monospace" font-size="15">httpmon · capturing</text>
      <path d="M0 66h324M0 126h324M0 204h324M0 300h324" stroke="#193d27"/>
      <text x="26" y="104" fill="#72de91" font-family="SFMono-Regular, Consolas, monospace" font-size="14">$ httpmon curl ...</text>
      <text x="26" y="156" fill="#72de91" font-family="SFMono-Regular, Consolas, monospace" font-size="13">REQUEST #1</text>
      <text x="26" y="184" fill="#f0fff4" font-family="SFMono-Regular, Consolas, monospace" font-size="14">GET api.github.com</text>
      <text x="26" y="236" fill="#72de91" font-family="SFMono-Regular, Consolas, monospace" font-size="13">RESPONSE</text>
      <text x="26" y="264" fill="#f0fff4" font-family="SFMono-Regular, Consolas, monospace" font-size="14">200 OK · 245ms</text>
      <text x="26" y="336" fill="#8ebca0" font-family="SFMono-Regular, Consolas, monospace" font-size="13">HTTP / HTTPS · HAR</text>
    </g>`;
  }

  if (kind === "clock") {
    return `<g transform="translate(800 94)">
      <rect width="304" height="392" rx="18" fill="#06150b" stroke="#123b20"/>
      <text x="28" y="48" fill="#10f06b" font-family="SFMono-Regular, Consolas, monospace" font-size="18">TIMEZONE FEED</text>
      ${["NYC 05:39", "LON 10:39", "TYO 18:39", "SYD 19:39", "PEK 17:39"].map((row, index) => `<text x="28" y="${98 + index * 54}" fill="${index === 0 ? "#c084fc" : index > 1 ? "#f8b300" : "#10f06b"}" font-family="SFMono-Regular, Consolas, monospace" font-size="26" font-weight="800">${row}</text>`).join("")}
      <text x="28" y="350" fill="#0b7c33" font-family="SFMono-Regular, Consolas, monospace" font-size="16">STATUS: LIVE · CITIES: 6</text>
    </g>`;
  }

  if (kind === "rating") {
    return `<g transform="translate(780 112)">
      <rect width="330" height="330" rx="18" fill="#fff" stroke="#d9dde7"/>
      <rect x="28" y="38" width="86" height="126" rx="6" fill="#e4e7ec"/>
      <text x="138" y="70" fill="#111827" font-family="Inter, ui-sans-serif, system-ui" font-size="22" font-weight="760">Movie Title</text>
      <text x="138" y="112" fill="#667085" font-family="Inter, ui-sans-serif, system-ui" font-size="18">Douban page context</text>
      <text x="28" y="224" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="22">IMDb 7.7</text>
      <text x="28" y="264" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="22">RT 94%</text>
      <text x="28" y="304" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="22">MC 72/100</text>
    </g>`;
  }

  if (kind === "pulse") {
    return `<g transform="translate(786 108)">
      <rect width="324" height="360" rx="18" fill="#fff" stroke="#d9dde7"/>
      <rect x="0" y="0" width="324" height="52" rx="18" fill="#f7f9fc"/>
      <rect x="0" y="36" width="324" height="16" fill="#f7f9fc"/>
      <text x="24" y="32" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="13">menu bar</text>
      <circle cx="236" cy="26" r="6" fill="${accent}"/>
      <text x="250" y="31" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="14" font-weight="700">2 · 4m</text>
      <path d="M0 52h324" stroke="#e4e7ec"/>
      <text x="24" y="90" fill="${accent}" font-family="Inter, ui-sans-serif, system-ui" font-size="22" font-weight="760">Waiting · 2</text>
      <text x="24" y="118" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="13">Claude · Codex</text>
      <path d="M0 138h324" stroke="#e4e7ec"/>
      <circle cx="30" cy="172" r="5" fill="${accent}"/>
      <text x="46" y="168" fill="#111827" font-family="Inter, ui-sans-serif, system-ui" font-size="16" font-weight="700">Approve package install</text>
      <text x="46" y="192" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="12">Claude · Bash · 4m</text>
      <circle cx="30" cy="236" r="5" fill="${accent}"/>
      <text x="46" y="232" fill="#111827" font-family="Inter, ui-sans-serif, system-ui" font-size="16" font-weight="700">Review failing CI</text>
      <text x="46" y="256" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="12">Codex · pending · 1m</text>
      <circle cx="30" cy="300" r="5" fill="#16805c"/>
      <text x="46" y="296" fill="#111827" font-family="Inter, ui-sans-serif, system-ui" font-size="16" font-weight="700">Draft release notes</text>
      <text x="46" y="320" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="12">Cursor · running</text>
      <text x="24" y="348" fill="#667085" font-family="SFMono-Regular, Consolas, monospace" font-size="12">local probe · harvest · hooks</text>
    </g>`;
  }

  return `<g transform="translate(840 120)">
    <rect width="210" height="210" rx="16" fill="${accent}"/>
    <rect x="32" y="32" width="146" height="146" rx="12" fill="#fff" fill-opacity=".11"/>
    <text x="105" y="128" text-anchor="middle" fill="#fff" font-family="SFMono-Regular, Consolas, monospace" font-size="50" font-weight="800">${escape(mark)}</text>
  </g>`;
}

// resvg (used by sharp) does not render <foreignObject>, so the title is a
// plain <text> that we wrap by hand into <tspan> lines. Keeping each line short
// stops long titles from running under the right-hand visual panel.
function titleTspans(title) {
  const maxChars = 18;
  const lines = [];
  let current = "";
  for (const word of title.split(" ")) {
    if (current && (current + " " + word).length > maxChars) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + " " + word : word;
    }
  }
  if (current) lines.push(current);
  const startY = 244 - (lines.length - 1) * 33;
  return lines.map((line, index) => `<tspan x="90" y="${startY + index * 66}">${escape(line)}</tspan>`).join("");
}

function svg({ eyebrow, title, body, accent, mark, visual }) {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f8f9fb"/>
  <path d="M0 0h1200v630H0z" fill="#f8f9fb"/>
  <path d="M90 98h1020v1H90zM90 532h1020v1H90z" fill="#d9dde7"/>
  <path d="M91 180h1018M91 250h1018M91 320h1018M91 390h1018M91 460h1018" stroke="#eceff5"/>
  ${visualPanel(visual, accent, mark)}
  <text x="90" y="150" fill="${accent}" font-family="SFMono-Regular, Consolas, monospace" font-size="24" letter-spacing="4" font-weight="700">${escape(eyebrow)}</text>
  <text fill="#111827" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="56" font-weight="760">${titleTspans(title)}</text>
  <foreignObject x="94" y="326" width="690" height="128">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; color:#4b5563; font-size:30px; line-height:1.35; font-weight:500;">${escape(body)}</div>
  </foreignObject>
  <text x="90" y="572" fill="#111827" font-family="SFMono-Regular, Consolas, monospace" font-size="22" font-weight="700">titpea.com</text>
  <circle cx="1070" cy="561" r="8" fill="${accent}"/>
</svg>`;
}

export function renderOg(image) {
  return sharp(Buffer.from(svg(image)))
    .png()
    .toBuffer();
}

async function main() {
  const requested = new Set(process.argv.slice(2));
  const selected = requested.size > 0 ? images.filter((image) => requested.has(image.file)) : images;
  if (requested.size > 0 && selected.length !== requested.size) {
    const known = new Set(images.map((image) => image.file));
    const unknown = [...requested].filter((file) => !known.has(file));
    throw new Error(`Unknown OG asset: ${unknown.join(", ")}`);
  }
  await fs.mkdir(outDir, { recursive: true });
  for (const image of selected) {
    await fs.writeFile(path.join(outDir.pathname, image.file), await renderOg(image));
    console.log(`generated ${image.file}`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
