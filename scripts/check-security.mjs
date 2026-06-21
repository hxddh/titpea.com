import fs from "node:fs";

const headers = fs.readFileSync("public/_headers", "utf8");
const required = [
  "Content-Security-Policy:",
  "Permissions-Policy:",
  "Cross-Origin-Opener-Policy:",
  "X-Content-Type-Options: nosniff",
  "Referrer-Policy: strict-origin-when-cross-origin",
];
const failures = required.filter((header) => !headers.includes(header));

if (headers.includes("unsafe-inline")) failures.push("CSP must not allow unsafe-inline scripts");
if (failures.length > 0) {
  console.error("Security header check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Security header check passed");
