import { pathFor, type HeaderNavGroup, type HeaderNavItem, type Locale } from "../lib/site";
import { headerCopy } from "./i18n/navCopy";
import { siteConfig } from "./siteConfig";

export function headerUi(locale: Locale) {
  const copy = headerCopy[locale];
  return {
    primaryLabel: copy.primaryLabel,
    menuLabel: copy.menuLabel,
    menuText: copy.menuText,
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
    {
      label: copy.groups.storage,
      items: [
        {
          label: "s3-turbo-list",
          href: pathFor(locale, "s3-turbo-list"),
          current: "s3-turbo-list",
          showInPrimary: true,
        },
        { label: "StorageOps", href: pathFor(locale, "storageops"), current: "storageops", showInPrimary: true },
        { label: "httpmon", href: siteConfig.externalLinks.httpmon, external: true },
      ],
    },
    {
      label: copy.groups.browser,
      items: [
        {
          label: copy.links.worldClock,
          href: pathFor(locale, "world-clock"),
          current: "world-clock",
          showInPrimary: true,
        },
        {
          label: copy.links.douban,
          href: pathFor(locale, "douban-movie-rating"),
          current: "douban-movie-rating",
          showInPrimary: true,
        },
      ],
    },
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
