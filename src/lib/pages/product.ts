// Product pages: copy with its synced version, structured data, local nav.
import { absoluteUrl, site, ui } from "../../content/site";
import { type Line, type Locale, type Product, type ProductCopy } from "../../content/schema";
import { otherLocale, pageTitle, pathFor, plainText, releasedOf, versionOf } from "./shared";
import { type PageLanguageLink, type PageSeo, buildSeo, languageLink } from "./seo";
import { maxNavLinks } from "./nav";
import { type Family, familyFor } from "./catalog";

/** Replace `{version}` everywhere in a product's copy with its synced release tag. */
function withVersion(copy: ProductCopy, version: string | undefined): ProductCopy {
  if (!version) return copy;
  return JSON.parse(JSON.stringify(copy).replaceAll("{version}", version)) as ProductCopy;
}

export type ProductPageModel = {
  kind: "product";
  locale: Locale;
  slug: string;
  line: Line;
  current: string;
  path: string;
  alternatePath: string;
  seo: PageSeo;
  language: PageLanguageLink;
  copy: ProductCopy;
  icon: string;
  version?: string;
  /** Publish date of that release, already formatted for the locale. */
  released?: string;
  /** The primary action downloads a release, so the button carries the tag. */
  downloadsRelease: boolean;
  frame: "wide" | "narrow";
  sectionIndex: boolean;
  navItems: Array<{ id: string; label: string }>;
  /** Members of a family see the whole family, with this page marked, at the page's end. */
  family?: Family;
  primaryCta?: string;
  expectedText: string[];
};

function productStructuredData(product: Product, copy: ProductCopy, path: string, locale: Locale, version?: string) {
  const faq = copy.sections.find((section) => section.kind === "faq");
  const action = !copy.primaryCta.soon && copy.primaryCta.href.startsWith("http") ? copy.primaryCta.href : undefined;
  const repoUrl = product.repo
    ? `https://github.com/${product.repo}`
    : action && /^https:\/\/github\.com\/[^/]+\/[^/#?]+\/?$/.test(action)
      ? action
      : undefined;
  const app = {
    "@type": "SoftwareApplication",
    name: copy.title,
    description: copy.description,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    applicationCategory: product.schema.category,
    operatingSystem: product.schema.os,
    url: absoluteUrl(path),
    // Every product is free. A store listing installs and a release downloads;
    // a source-only product's repository is only its sameAs, never a download.
    ...(product.price === "unannounced" ? {} : { offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }),
    author: { "@type": "Person", name: "hxddh", url: site.github },
    ...(version ? { softwareVersion: version.replace(/^v/, "") } : {}),
    ...(action?.includes("chromewebstore.google.com") ? { installUrl: action } : {}),
    ...(action && /\/releases(\/|$)/.test(action) ? { downloadUrl: action } : {}),
    ...(repoUrl ? { sameAs: repoUrl } : {}),
  };
  const faqPage = faq && {
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.title,
      acceptedAnswer: { "@type": "Answer", text: plainText(item.body) },
    })),
  };
  return { "@context": "https://schema.org", "@graph": faqPage ? [app, faqPage] : [app] };
}

export function productPage(product: Product, locale: Locale): ProductPageModel {
  const version = versionOf(product.slug);
  const copy = withVersion(product[locale], version);
  const path = pathFor(locale, product.slug);
  const alternatePath = pathFor(otherLocale(locale), product.slug);
  // The local nav holds at most four links, in page order (ProductPage): the
  // demo, the feature list, Get started, the data section, the FAQ. Get started
  // and FAQ always stay; the others fill the remaining places in that order.
  const sectionItem = (section: (typeof copy.sections)[number]) => ({
    id: section.id,
    label: section.nav ?? ("label" in section ? section.label : section.title),
  });
  const ofKind = (...kinds: string[]) => copy.sections.filter((section) => kinds.includes(section.kind));
  const start = copy.commands ? [{ id: "start", label: copy.commands.title }] : [];
  const faq = ofKind("faq").map(sectionItem);
  const others = [...ofKind("demo", "cards"), ...ofKind("data")]
    .map(sectionItem)
    .slice(0, maxNavLinks - start.length - faq.length);
  const navItems = [
    ...others.filter((item) => item.id !== "data"),
    ...start,
    ...others.filter((item) => item.id === "data"),
    ...faq,
  ];
  return {
    kind: "product",
    locale,
    slug: product.slug,
    line: product.line,
    current: product.slug,
    path,
    alternatePath,
    seo: buildSeo({
      title: pageTitle(copy.title),
      description: copy.description,
      path,
      alternatePath,
      locale,
      ogImage: product.og,
      structuredData: productStructuredData(product, copy, path, locale, version),
    }),
    language: languageLink(locale, alternatePath),
    copy,
    icon: product.icon,
    version,
    released: releasedOf(product.slug, locale),
    downloadsRelease: !copy.primaryCta.soon && Boolean(version) && /\/releases/.test(copy.primaryCta.href),
    frame: copy.visual.frame ?? "narrow",
    sectionIndex: product.sectionIndex,
    navItems,
    family: familyFor(product.slug, locale),
    primaryCta: copy.primaryCta.soon ? undefined : copy.primaryCta.href,
    expectedText: [copy.headline, copy.primaryCta.label],
  };
}
