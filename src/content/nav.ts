import {
  pathFor,
  type CurrentPage,
  type DesktopNavEntry,
  type HeaderNavGroup,
  type HeaderNavItem,
  type Locale,
} from "../lib/site";
import { headerCopy } from "./i18n/navCopy";
import { siteConfig } from "./siteConfig";
import { productManifest } from "./productManifest";

export function headerUi(locale: Locale) {
  const copy = headerCopy[locale];
  return {
    primaryLabel: copy.primaryLabel,
    menuLabel: copy.menuLabel,
    menuText: copy.menuText,
    themeToDark: copy.themeToDark,
    themeToLight: copy.themeToLight,
    themeShortDark: copy.themeShortDark,
    themeShortLight: copy.themeShortLight,
  };
}

function productNavItems(locale: Locale, group: "storage" | "personal", current: CurrentPage): HeaderNavItem[] {
  const copy = headerCopy[locale];

  return productManifest
    .filter((item) => item.group === group)
    .map((item) => ({
      label: item.nav.label ? copy.links[item.nav.label] : item.name,
      href: pathFor(locale, item.slug),
      current: item.slug,
      showInPrimary: item.nav.primary,
    }))
    .map((item) => ({
      ...item,
      current: item.current === current ? item.current : undefined,
    }));
}

export function headerNavGroups(locale: Locale, current: CurrentPage = "home"): HeaderNavGroup[] {
  const copy = headerCopy[locale];

  return [
    {
      label: copy.groups.main,
      items: [
        { label: copy.links.home, href: pathFor(locale), current: current === "home" ? "home" : undefined },
        {
          label: copy.links.about,
          href: pathFor(locale, "about"),
          current: current === "about" ? "about" : undefined,
          showInPrimary: true,
        },
      ],
    },
    ...(["storage", "personal"] as const).map((group) => ({
      label: copy.groups[group],
      items: productNavItems(locale, group, current),
    })),
    {
      label: copy.groups.external,
      items: [{ label: "GitHub", href: siteConfig.externalLinks.github, external: true, showInPrimary: true }],
    },
  ];
}

export function desktopNavEntries(locale: Locale, current: CurrentPage): DesktopNavEntry[] {
  const copy = headerCopy[locale];
  const homeHref = pathFor(locale);
  const aboutHref = pathFor(locale, "about");

  return [
    {
      kind: "link",
      label: copy.links.work,
      href: `${homeHref}#work`,
    },
    { kind: "link", label: copy.links.notes, href: `${homeHref}#notes` },
    { kind: "link", label: copy.links.about, href: aboutHref, current: current === "about" ? "about" : undefined },
    {
      kind: "link",
      label: "GitHub",
      href: siteConfig.externalLinks.github,
      external: true,
    },
  ];
}
