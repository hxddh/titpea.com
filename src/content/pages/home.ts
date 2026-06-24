import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { s3EvidenceFacts } from "../productEvidenceFacts";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { HomePageModel } from "./types";
import type { Locale } from "../../lib/site";

export function buildHomePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale);
  const alternatePath = pagePath(alternateLocale(locale));
  const description = copy.homeDescription;
  const inLanguage = { en: "en", zh: "zh-CN" }[locale];
  const benchmark = s3EvidenceFacts.parallelRuns.find((run) => run.label === "c=8") ?? s3EvidenceFacts.parallelRuns[0];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand,
    url: absoluteUrl(path),
    inLanguage,
    description,
    publisher: {
      "@type": "Person",
      name: "hxddh",
      url: siteConfig.githubProfile,
    },
  };

  return {
    kind: "home",
    locale,
    current: "home",
    path,
    alternatePath,
    primaryCta: catalog.featuredProductPath,
    expectedText: [copy.homeTitle, copy.storageTitle, copy.browserTitle],
    seo: buildPageSeo({
      title: pageTitle(siteConfig.brand),
      description,
      path,
      alternatePath,
      locale,
      ogImage: siteConfig.assets.og.home,
      structuredData,
    }),
    language: languageLink(locale, alternatePath),
    hero: {
      eyebrow: copy.productIndex,
      title: copy.homeTitle,
      lead: copy.homeLead,
      actions: [
        { label: "s3-turbo-list", href: catalog.featuredProductPath, style: "primary" },
        { label: "GitHub", href: siteConfig.externalLinks.github, style: "ghost", external: true },
      ],
      signature: {
        label: `${copy.signatureLabel} · ${s3EvidenceFacts.version}`,
        command: "s3-turbo-list s3://prod-assets --diff",
        result: `${s3EvidenceFacts.objectCount} · ${benchmark.seconds}s · ${benchmark.throughput.toLocaleString("en-US")}/s · Parquet`,
      },
    },
    storage: {
      label: copy.storageLine,
      title: copy.storageTitle,
      items: catalog.storage,
    },
    browser: {
      label: copy.browserLine,
      title: copy.browserTitle,
      items: catalog.browser,
    },
  };
}
