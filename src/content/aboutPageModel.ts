import { ui } from "./home";
import { productCatalogModel } from "./productCatalogModel";
import { siteConfig } from "./siteConfig";
import { pathFor, type Locale } from "../lib/site";

export function aboutPageModel(locale: Locale) {
  const copy = ui[locale];
  const catalog = productCatalogModel(locale);

  return {
    kind: "about" as const,
    locale,
    current: "about" as const,
    path: pathFor(locale, "about"),
    alternatePath: pathFor(locale === "zh" ? "en" : "zh", "about"),
    title: copy.aboutTitle,
    description: copy.aboutDescription,
    ogImage: siteConfig.assets.og.about,
    expectedText: [copy.aboutHeadline, copy.profileTitle],
    hero: {
      eyebrow: "hxddh",
      title: copy.aboutHeadline,
      lead: copy.aboutLead,
      contactLabel: locale === "zh" ? "联系方式" : "Contact links",
      actions: [
        { label: "GitHub", href: siteConfig.externalLinks.github, style: "primary" },
        { label: "Chrome Web Store", href: siteConfig.externalLinks.worldClockChrome, style: "ghost" },
        { label: "Email", href: `mailto:${siteConfig.email}`, style: "ghost" },
      ],
      systemLabel: locale === "zh" ? "产品线" : "Product lines",
      groups: catalog.groups,
    },
    products: {
      label: copy.productsLabel,
      title: locale === "zh" ? "先是存储主线，然后是轻工具" : "Storage first, utilities second",
      items: catalog.all,
    },
    profile: {
      label: copy.profileLabel,
      title: copy.profileTitle,
      body: copy.profileBody,
    },
    focus: {
      label: copy.focusLabel,
      title: locale === "zh" ? "关注边界" : "Working boundaries",
      items: copy.focusItems,
    },
  };
}
