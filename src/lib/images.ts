// Responsive screenshots: when `npm run assets:images` has written
// `-<width>w.webp` siblings for a public image, offer them through srcset.
import fs from "node:fs";

const variantWidths = [900, 1200];

export function srcsetFor(src: string, width: number): string | undefined {
  const variants = variantWidths
    .map((variantWidth) => ({ variantWidth, path: src.replace(/\.(webp|png|jpg)$/, `-${variantWidth}w.webp`) }))
    .filter(({ path }) => path !== src && fs.existsSync(`public${path}`));
  if (variants.length === 0) return undefined;
  return [...variants.map(({ path, variantWidth }) => `${path} ${variantWidth}w`), `${src} ${width}w`].join(", ");
}

/** Screenshots never render wider than the 1040px wide frame. */
export const screenshotSizes = "(max-width: 1084px) calc(100vw - 44px), 1040px";
