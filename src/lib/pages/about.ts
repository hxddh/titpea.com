// About: facts from the catalog and releases.json, scenes per line, contact.
import { products } from "../../content/products";
import { about, absoluteUrl, site, ui, type AboutPerson } from "../../content/site";
import { lines, type Line, type Locale } from "../../content/schema";
import { formatDate, newestRelease, otherLocale, pathFor, versionOf } from "./shared";
import { type PageLanguageLink, type PageSeo, buildSeo, languageLink } from "./seo";
import { releaseItems } from "./releases";

export type AboutPageModel = {
  kind: "about";
  locale: Locale;
  current: "about";
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  hero: { eyebrow: string; title: string; lead: string };
  /** The owner's own paragraph and portrait; absent until they supply it. */
  person?: AboutPerson;
  /** Computed from the catalog and releases.json, with the GitHub profile. */
  facts: { parts: string[]; github: { label: string; href: string } };
  scenes: {
    title: string;
    items: Array<{
      line: Line;
      label: string;
      when: string;
      value: string;
      products: Array<{ name: string; href: string; icon: string }>;
    }>;
  };
  releases: {
    title: string;
    moreLabel: string;
    feed: { label: string; href: string };
    items: Array<{
      name: string;
      href: string;
      icon: string;
      version: string;
      released?: string;
      highlight?: string;
    }>;
  };
  contact: {
    title: string;
    sub: string;
    /** Shown only while Web Analytics is on (edge-injected or by token). */
    analytics?: string;
    label: string;
    actions: Array<{ label: string; href: string; style: "primary" | "ghost" }>;
  };
  /** How many releases show before the rest fold away. */
  releasesShown: number;
  expectedText: string[];
};

export function aboutPage(locale: Locale): AboutPageModel {
  const copy = ui[locale];
  const path = pathFor(locale, "about");
  const alternatePath = pathFor(otherLocale(locale), "about");
  const count = String(products.length);
  const headline = copy.aboutHeadline.replace("{count}", count);
  const lead = copy.aboutLead;
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
    hero: { eyebrow: copy.aboutEyebrow, title: headline, lead },
    person: about.person[locale],
    facts: {
      parts: copy.aboutFacts
        .replace("{released}", String(products.filter((product) => versionOf(product.slug)).length))
        .replace("{date}", formatDate(newestRelease(), locale) ?? "")
        .split(" · "),
      github: { label: site.github.replace(/^https:\/\//, ""), href: site.github },
    },
    scenes: {
      title: copy.aboutScenesTitle,
      items: lines.map((line) => ({
        line,
        label: copy.groups[line],
        ...copy.aboutScenes[line],
        products: products
          .filter((product) => product.line === line)
          .map((product) => ({
            name: product[locale].title,
            href: pathFor(locale, product.slug),
            icon: product.icon,
          })),
      })),
    },
    releases: {
      title: copy.aboutReleasesTitle,
      moreLabel: copy.aboutReleasesMore,
      feed: { label: copy.aboutFeed, href: "/releases.xml" },
      // Newest release first; the list rebuilds itself from releases.json.
      items: releaseItems(locale),
    },
    releasesShown: 6,
    contact: {
      title: copy.aboutContactTitle,
      sub: copy.aboutContactSub,
      analytics: site.analyticsAutoInjected || site.analyticsToken ? copy.aboutAnalytics : undefined,
      label: copy.contactLabel,
      actions: [
        { label: "GitHub", href: site.github, style: "primary" },
        { label: "Email", href: `mailto:${site.email}`, style: "ghost" },
        { label: copy.aboutFeed, href: "/releases.xml", style: "ghost" },
      ],
    },
    expectedText: [headline, lead, copy.aboutReleasesTitle],
  };
}
