export const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4321";
export const outDir = process.env.QA_OUT_DIR ?? "/tmp/titpea-page-qa";

export const viewports = [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "tablet", width: 850, height: 1100 },
  { name: "mobile", width: 390, height: 920 },
];

export function screenshotName(viewport, path, suffix = "") {
  const cleanPath = path.replaceAll("/", "_") || "_home";
  return `${viewport}${cleanPath}${suffix}.png`;
}
