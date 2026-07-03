import { pathFor, type HeaderNavGroup, type HeaderNavItem, type Locale } from "../lib/site";
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
    ...(["storage", "personal"] as const).map((group) => ({
      label: copy.groups[group],
      items: productManifest
        .filter((item) => item.group === group)
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

export function primaryNavItems(locale: Locale): HeaderNavItem[] {
  return headerNavGroups(locale)
    .flatMap((group) => group.items)
    .filter((item) => item.showInPrimary);
}
