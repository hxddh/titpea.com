// @ts-check
import { defineConfig } from "astro/config";
import assetVersions from "./src/integrations/asset-versions.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://titpea.com",
  trailingSlash: "always",
  // Astro 7 defaults to JSX-style whitespace stripping ("jsx"), which removes
  // spaces between inline elements; keep Astro 6's HTML-aware compression.
  compressHTML: true,
  integrations: [assetVersions()],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
  build: {
    // Keep all CSS in external stylesheets so the strict CSP (style-src 'self')
    // in public/_headers never blocks an inlined <style> block.
    inlineStylesheets: "never",
  },
});
