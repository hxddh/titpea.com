// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://titpea.com",
  trailingSlash: "always",
  build: {
    // Keep all CSS in external stylesheets so the strict CSP (style-src 'self')
    // in public/_headers never blocks an inlined <style> block.
    inlineStylesheets: "never",
  },
});
