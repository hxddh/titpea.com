import { baseUrl } from "./config.mjs";

export async function checkOgAssets(routes) {
  const results = [];
  for (const route of routes) {
    const imageUrl = new URL(route.ogImage, baseUrl);
    const response = await fetch(imageUrl, { method: "HEAD" });
    results.push({
      viewport: "asset",
      path: `${route.path} og-image`,
      overflow: 0,
      nav: "asset",
      mobile: "asset",
      h1: "og-image",
      h1Lines: 1,
      anchorCount: 0,
      textOk: response.ok && (response.headers.get("content-type") ?? "").includes("image/png"),
      details: {
        url: imageUrl.href,
        status: response.status,
        contentType: response.headers.get("content-type"),
      },
    });
  }
  return results;
}
