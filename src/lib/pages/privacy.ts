// The privacy index: one row per product from its privacy summary.
import { products } from "../../content/products";
import { site, ui } from "../../content/site";
import { type Locale, type PrivacySummary } from "../../content/schema";
import { otherLocale, pathFor } from "./shared";
import { type PageLanguageLink, type PageSeo, buildSeo, languageLink } from "./seo";

export type PrivacyPageModel = {
  kind: "privacy";
  locale: Locale;
  current: "privacy";
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  hero: { eyebrow: string; title: string; lead: string };
  columns: { tool: string; network: string; stays: string; details: string };
  rows: Array<{
    name: string;
    href: string;
    icon: string;
    /** Absent when the product's page has no data section yet. */
    privacy?: PrivacySummary & { level: string };
    /** Its "Where your data goes" section, when the page has one. */
    dataHref?: string;
  }>;
  dataLabel: string;
  unstated: string;
  productPage: string;
  /** Shown only while Web Analytics is on, as on About. */
  analytics?: string;
  expectedText: string[];
};

export function privacyPage(locale: Locale): PrivacyPageModel {
  const copy = ui[locale];
  const path = pathFor(locale, "privacy");
  const alternatePath = pathFor(otherLocale(locale), "privacy");
  return {
    kind: "privacy",
    locale,
    current: "privacy",
    path,
    alternatePath,
    seo: buildSeo({
      title: copy.privacyMetaTitle,
      description: copy.privacyDescription,
      path,
      alternatePath,
      locale,
      ogImage: site.og.home,
    }),
    language: languageLink(locale, alternatePath),
    hero: { eyebrow: site.brand, title: copy.privacyHeadline, lead: copy.privacyLead },
    columns: copy.privacyColumns,
    rows: products.map((product) => {
      const privacy = product[locale].privacy;
      const hasData = product[locale].sections.some((section) => section.kind === "data");
      return {
        name: product[locale].title,
        href: pathFor(locale, product.slug),
        icon: product.icon,
        privacy: privacy && { ...privacy, level: copy.privacyLevels[privacy.network] },
        dataHref: hasData ? `${pathFor(locale, product.slug)}#data` : undefined,
      };
    }),
    dataLabel: copy.privacyDataLink,
    unstated: copy.privacyUnstated,
    productPage: copy.privacyProductPage,
    analytics: site.analyticsAutoInjected || site.analyticsToken ? copy.aboutAnalytics : undefined,
    expectedText: [copy.privacyHeadline, copy.privacyColumns.network],
  };
}
