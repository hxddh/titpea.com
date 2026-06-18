import { absoluteUrl } from "../siteConfig";
import type { PageLanguageLink, PageSeo } from "./types";
import { pathFor, type Locale, type ProductSlug } from "../../lib/site";

export function alternateLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export function pagePath(locale: Locale, slug?: ProductSlug | "about") {
  return pathFor(locale, slug);
}

export function buildPageSeo(input: {
  title: string;
  description: string;
  path: string;
  alternatePath: string;
  locale: Locale;
  ogImage: string;
  structuredData?: Record<string, unknown>;
}): PageSeo {
  const enPath = input.locale === "en" ? input.path : input.alternatePath;
  const zhPath = input.locale === "zh" ? input.path : input.alternatePath;

  return {
    title: input.title,
    description: input.description,
    canonicalPath: input.path,
    canonicalUrl: absoluteUrl(input.path),
    alternates: {
      en: absoluteUrl(enPath),
      zh: absoluteUrl(zhPath),
      xDefault: absoluteUrl(enPath),
    },
    ogImage: input.ogImage,
    ogImageUrl: absoluteUrl(input.ogImage),
    structuredData: input.structuredData,
  };
}

export function languageLink(locale: Locale, alternatePath: string): PageLanguageLink {
  const target = alternateLocale(locale);
  return {
    href: alternatePath,
    label: target === "zh" ? "中文" : "English",
    locale: target,
    hreflang: target === "zh" ? "zh-CN" : "en",
  };
}

export const pageTitle = (title: string) => (title === "Titpea" ? title : `${title} - Titpea`);
