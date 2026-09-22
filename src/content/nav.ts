import { pathFor, type CurrentPage, type DesktopNavEntry, type HeaderNavGroup, type Locale } from "../lib/site";
import { headerCopy } from "./i18n/navCopy";
import { siteConfig } from "./siteConfig";
import { catalogLines, productManifest } from "./productManifest";

export function headerUi(locale: Locale) {
  const copy = headerCopy[locale];
  return {
    primaryLabel: copy.primaryLabel,
    menuLabel: copy.menuLabel,
    menuText: copy.menuText,
    themeToDark: copy.themeToDark,
    themeToLight: copy.themeToLight,
    themeDarkText: copy.themeDarkText,
    themeLightText: copy.themeLightText,
  };
}

export function headerNavGroups(locale: Locale): HeaderNavGroup[] {
  const copy = headerCopy[locale];

  return [
    {
      label: copy.groups.main,
      items: [
        { label: copy.links.home, href: pathFor(locale), current: "home" },
        { label: copy.links.about, href: pathFor(locale, "about"), current: "about", showInPrimary: true },
      ],
    },
    ...catalogLines.map((line) => ({
      label: copy.groups[line],
      items: productManifest
        .filter((item) => item.line === line)
        .map((item) => ({
          label: item.nav.label ? copy.links[item.nav.label] : item.name,
          href: pathFor(locale, item.slug),
          current: item.slug,
          showInPrimary: item.nav.primary,
        })),
    })),
    {
      label: copy.groups.external,
      items: [{ label: "GitHub", href: siteConfig.externalLinks.github, external: true, showInPrimary: true }],
    },
  ];
}

export function desktopNavEntries(locale: Locale, current: CurrentPage): DesktopNavEntry[] {
  const groups = headerNavGroups(locale);
  const main = groups[0];
  const external = groups[groups.length - 1];
  const lines = groups.slice(1, -1);
  const about = main.items.find((item) => item.href.includes("about"))!;
  const github = external.items[0];

  return [
    {
      kind: "link",
      label: about.label,
      href: about.href,
      current: about.current,
    },
    ...lines.map((line) => ({
      kind: "dropdown" as const,
      label: line.label,
      items: [...line.items],
      open: line.items.some((item) => item.current === current),
    })),
    {
      kind: "link",
      label: github.label,
      href: github.href,
      external: true,
    },
  ];
}
