import { pathFor, type CurrentPage, type DesktopNavEntry, type HeaderNavGroup, type Locale } from "../lib/site";
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

export function desktopNavEntries(locale: Locale, current: CurrentPage): DesktopNavEntry[] {
  const copy = headerCopy[locale];
  const groups = headerNavGroups(locale);
  const main = groups[0];
  const storage = groups[1];
  const personal = groups[2];
  const external = groups[3];
  const about = main.items.find((item) => item.href.includes("about"))!;
  const github = external.items[0];

  return [
    {
      kind: "link",
      label: about.label,
      href: about.href,
      current: about.current,
    },
    {
      kind: "dropdown",
      label: copy.groups.storage,
      items: [...storage.items],
      open: storage.items.some((item) => item.current === current),
    },
    {
      kind: "dropdown",
      label: copy.groups.personal,
      items: [...personal.items],
      open: personal.items.some((item) => item.current === current),
    },
    {
      kind: "link",
      label: github.label,
      href: github.href,
      external: true,
    },
  ];
}
