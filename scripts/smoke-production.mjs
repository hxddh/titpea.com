const baseUrl = process.env.SMOKE_BASE_URL ?? "https://titpea.com";
const paths = ["/", "/s3-turbo-list/", "/storageops/", "/httpmon/", "/zh/httpmon/"];
const failures = [];
const attempts = 4;
const requestTimeoutMs = 8_000;
const retryDelayMs = 3_000;

async function checkPath(path) {
  try {
    const response = await fetch(new URL(path, baseUrl), {
      redirect: "follow",
      signal: AbortSignal.timeout(requestTimeoutMs),
    });
    const html = await response.text();
    if (!response.ok) return `${path}: ${response.status}`;
    if (!/<main\b/.test(html) || !/<h1\b/.test(html)) return `${path}: missing page landmarks`;
  } catch (error) {
    return `${path}: ${error.message}`;
  }
  return null;
}

for (let attempt = 0; attempt < attempts; attempt += 1) {
  failures.length = 0;
  const results = await Promise.all(paths.map(checkPath));
  failures.push(...results.filter(Boolean));
  if (failures.length === 0) break;
  if (attempt < attempts - 1) await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
}

if (failures.length > 0) {
  console.error("Production smoke check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Production smoke check passed: ${paths.length} routes`);
