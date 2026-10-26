// The site header: Home, About, Releases, each product line, then GitHub.
import { products } from "../../content/products";
import { site, ui } from "../../content/site";
import { lines, type Line, type Locale, type Product } from "../../content/schema";
import { type CurrentPage, pathFor } from "./shared";

export type NavItem = { label: string; href: string; current?: CurrentPage; external?: boolean };
export type NavGroup = { label: string; line?: Line; items: NavItem[] };

/** Local nav links on a product page, Get started and FAQ included. */
export const maxNavLinks = 4;

const navLabel = (product: Product, locale: Locale) => product[locale].navLabel ?? product[locale].title;

/** Home and About, then each product line with all of its products, then GitHub. */
export function navGroups(locale: Locale): NavGroup[] {
  const copy = ui[locale];
  return [
    {
      label: copy.groups.main,
      items: [
        { label: copy.home, href: pathFor(locale), current: "home" },
        { label: copy.about, href: pathFor(locale, "about"), current: "about" },
        { label: copy.releases, href: pathFor(locale, "releases"), current: "releases" },
      ],
    },
    ...lines.map((line) => ({
      label: copy.groups[line],
      line,
      items: products
        .filter((product) => product.line === line)
        .map((product) => ({
          label: navLabel(product, locale),
          href: pathFor(locale, product.slug),
          current: product.slug,
        })),
    })),
    { label: copy.groups.external, items: [{ label: "GitHub", href: site.github, external: true }] },
  ];
}
