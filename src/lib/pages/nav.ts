// The site header: a Products menu (every product by line), Releases, About, GitHub.
import { products } from "../../content/products";
import { site, ui } from "../../content/site";
import { lines, type Line, type Locale } from "../../content/schema";
import { type CurrentPage, pathFor } from "./shared";

export type NavItem = {
  label: string;
  href: string;
  current?: CurrentPage;
  external?: boolean;
  /** Product entries: the app icon. Menus list names only; Home says what each is. */
  icon?: string;
};
export type NavGroup = { label: string; line: Line; items: NavItem[] };

/** Local nav links on a product page, Get started and FAQ included. */
export const maxNavLinks = 4;

/** Every product, by line, in site order. */
export function navGroups(locale: Locale): NavGroup[] {
  const copy = ui[locale];
  return lines.map((line) => ({
    label: copy.groups[line],
    line,
    items: products
      .filter((product) => product.line === line)
      .map((product) => ({
        label: product[locale].title,
        href: pathFor(locale, product.slug),
        current: product.slug,
        icon: product.icon,
      })),
  }));
}

/** The pages beside Products in the header, in order. */
export function sitePages(locale: Locale): NavItem[] {
  const copy = ui[locale];
  return [
    { label: copy.releases, href: pathFor(locale, "releases"), current: "releases" },
    { label: copy.about, href: pathFor(locale, "about"), current: "about" },
    { label: "GitHub", href: site.github, external: true },
  ];
}
