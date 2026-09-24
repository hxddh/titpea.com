// Responsive screenshots: when `npm run assets:images` has written a
// `-900w.webp` sibling for a public image, offer both through srcset.
import fs from "node:fs";

const variantWidth = 900;

export function srcsetFor(src: string, width: number): string | undefined {
  const variant = src.replace(/\.(webp|png|jpg)$/, `-${variantWidth}w.webp`);
  if (variant === src || !fs.existsSync(`public${variant}`)) return undefined;
  return `${variant} ${variantWidth}w, ${src} ${width}w`;
}

/** Screenshots never render wider than the 1040px wide frame. */
export const screenshotSizes = "(max-width: 1084px) calc(100vw - 44px), 1040px";
