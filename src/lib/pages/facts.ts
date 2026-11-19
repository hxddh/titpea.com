// The facts every view of a product shares: where it runs, what kind of thing
// it is, its licence and its version. Product page, Home, menus and Releases
// read them here, so no page words them on its own.
import { ui } from "../../content/site";
import { isCommandLine, platformOrder, type Locale, type Product } from "../../content/schema";
import { releasedOf, versionOf } from "./shared";

export type PlatformId = Product["platforms"][number]["id"];

/** The platforms in the site's one order, each named for the locale ("macOS 14+"). */
export function platformLabels(product: Product, locale: Locale): string[] {
  const names = ui[locale].platforms;
  return [...product.platforms]
    .sort((a, b) => platformOrder.indexOf(a.id) - platformOrder.indexOf(b.id))
    .map((platform) =>
      platform.min ? names[platform.id].min.replace("{min}", platform.min) : names[platform.id].name,
    );
}

/** Filter keys for Home: each platform id, and `cli` for command-line tools. */
export const filterKeys = (product: Product): string[] => [
  ...product.platforms.map((platform) => platform.id),
  ...(isCommandLine(product.type) ? ["cli"] : []),
];

export const kindLabel = (product: Product, locale: Locale) => ui[locale].kinds[product.type];

export type ProductFacts = {
  kind: string;
  platforms: string[];
  stack: string[];
  license?: string;
  version?: string;
  released?: string;
};

export const productFacts = (product: Product, locale: Locale): ProductFacts => ({
  kind: kindLabel(product, locale),
  platforms: platformLabels(product, locale),
  stack: product[locale].stack ?? [],
  license: product.license,
  version: versionOf(product.slug),
  released: releasedOf(product.slug, locale),
});

/** The first-open guide's lines for an unnotarized build, in the site's one wording. */
export function firstOpenLines(product: Product, locale: Locale): { summary: string; lines: string[] } | undefined {
  const rule = product.firstOpen;
  if (!rule) return undefined;
  const copy = ui[locale].firstOpen;
  const lines: string[] = [];
  if (rule.macos) {
    let line = rule.macos === "once" ? copy.macosOnce : copy.macosEachRelease;
    if (rule.macosFrom) {
      const scope = copy.macosFrom.replace("{version}", rule.macosFrom);
      line = locale === "zh" ? line.replace(/^macOS：/, `${scope}：`) : line.replace(/^macOS:/, `On ${scope}:`);
    }
    lines.push(line);
  }
  if (rule.windows) lines.push(copy.windows);
  return { summary: copy.summary, lines };
}
