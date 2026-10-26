// About: one column — the claim, the owner's paragraph, and how to reach them.
import { products } from "../../content/products";
import { about, absoluteUrl, site, ui, type AboutPerson } from "../../content/site";
import { type Locale } from "../../content/schema";
import { otherLocale, pathFor } from "./shared";
import { type PageLanguageLink, type PageSeo, buildSeo, languageLink } from "./seo";

export type AboutPageModel = {
  kind: "about";
  locale: Locale;
  current: "about";
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  hero: { eyebrow: string; title: string };
  /** The owner's own paragraph and portrait; absent until they supply it. */
  person?: AboutPerson;
  /** One quiet line of text links under the paragraph. */
  links: Array<{ label: string; href: string }>;
  /** Shown only while Web Analytics is on (edge-injected or by token). */
  analytics?: string;
  expectedText: string[];
};

export function aboutPage(locale: Locale): AboutPageModel {
  const copy = ui[locale];
  const path = pathFor(locale, "about");
  const alternatePath = pathFor(otherLocale(locale), "about");
  const count = String(products.length);
  const headline = copy.aboutHeadline.replace("{count}", count);
  return {
    kind: "about",
    locale,
    current: "about",
    path,
    alternatePath,
    seo: buildSeo({
      title: copy.aboutMetaTitle,
      description: copy.aboutDescription,
      path,
      alternatePath,
      locale,
      ogImage: site.og.about,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        inLanguage: locale === "zh" ? "zh-CN" : "en",
        about: {
          "@type": "Person",
          name: "hxddh",
          url: absoluteUrl(path),
          sameAs: [site.github],
          email: site.email,
        },
      },
    }),
    language: languageLink(locale, alternatePath),
    hero: { eyebrow: copy.aboutEyebrow, title: headline },
    person: about.person[locale],
    links: [
      { label: "GitHub", href: site.github },
      { label: "Email", href: `mailto:${site.email}` },
    ],
    analytics: site.analyticsAutoInjected || site.analyticsToken ? copy.aboutAnalytics : undefined,
    expectedText: [headline],
  };
}
