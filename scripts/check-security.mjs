import fs from "node:fs";

const headers = fs.readFileSync("public/_headers", "utf8");
const astroConfig = fs.readFileSync("astro.config.mjs", "utf8");
const required = [
  "Content-Security-Policy:",
  "Permissions-Policy:",
  "Cross-Origin-Opener-Policy:",
  "X-Content-Type-Options: nosniff",
  "Referrer-Policy: strict-origin-when-cross-origin",
];
const failures = required.filter((header) => !headers.includes(header));

if (headers.includes("unsafe-inline")) failures.push("CSP must not allow unsafe-inline scripts");
if (!/assetsInlineLimit:\s*0/.test(astroConfig)) {
  failures.push("Astro must keep executable scripts external for the script-src 'self' CSP");
}

function htmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = `${directory}/${entry.name}`;
    return entry.isDirectory() ? htmlFiles(file) : file.endsWith(".html") ? [file] : [];
  });
}

if (fs.existsSync("dist")) {
  for (const file of htmlFiles("dist")) {
    const html = fs.readFileSync(file, "utf8");
    for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      const attributes = match[1];
      const body = match[2].trim();
      const type = attributes.match(/\btype=["']([^"']+)["']/i)?.[1]?.toLowerCase();
      if (/\bsrc\s*=/.test(attributes) || type === "application/ld+json" || body.length === 0) continue;
      failures.push(`${file}: inline executable script conflicts with the script-src 'self' CSP`);
    }
  }
}

if (failures.length > 0) {
  console.error("Security header check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Security header check passed");
