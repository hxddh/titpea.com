import type { PageSectionId } from "../productArchetypes";
import type { ProductPageSection } from "../productPageTypes";
import type { ProductVisualModel } from "../visualModels";
import type { CurrentPage, Locale, Product, ProductSlug } from "../../lib/site";

export type PageSeo = {
  title: string;
  description: string;
  canonicalPath: string;
  canonicalUrl: string;
  alternates: {
    en: string;
    zh: string;
    xDefault: string;
  };
  ogImage: string;
  ogImageUrl: string;
  structuredData?: Record<string, unknown>;
};

export type PageLanguageLink = {
  href: string;
  label: string;
  locale: Locale;
  hreflang: "en" | "zh-CN";
};

export type BasePageModel = {
  kind: "home" | "about" | "product";
  locale: Locale;
  current: CurrentPage;
  path: string;
  alternatePath: string;
  expectedText: string[];
  seo: PageSeo;
  language: PageLanguageLink;
};

export type HomePageModel = BasePageModel & {
  kind: "home";
  current: "home";
  primaryCta: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    actions: Array<{ label: string; href: string; style: "primary" | "ghost" }>;
    proofLabel: string;
    proofItems: readonly string[];
  };
  flow: ProductCatalogBlock;
  browser: {
    label: string;
    title: string;
    body: string;
    tools: ProductCatalogItemModel[];
    screenshotLabel: string;
    screenshots: Array<{ href: string; className: string; src: string; alt: string }>;
  };
};

export type AboutPageModel = BasePageModel & {
  kind: "about";
  current: "about";
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    contactLabel: string;
    actions: Array<{ label: string; href: string; style: "primary" | "ghost" }>;
  };
  products: {
    label: string;
    title: string;
    items: ProductCatalogItemModel[];
  };
};

export type ProductCatalogItemModel = {
  id: string;
  number?: string;
  verb?: string;
  name: string;
  href: string;
  text: string;
  tagline: string;
  displayRole: string;
  isPrimary?: boolean;
  slug?: ProductSlug;
  group: "storage" | "browser" | "external";
};

export type ProductCatalogBlock = {
  label: string;
  title: string;
  body?: string;
  items: ProductCatalogItemModel[];
};

export type EvidenceSummaryModel = {
  label: string;
  title: string;
  body: string;
  href: string;
  stats: string[];
};

export type ProductPageModel = BasePageModel & {
  kind: "product";
  slug: ProductSlug;
  current: ProductSlug;
  pageClass: string;
  primaryCta: string;
  sectionIndex: boolean;
  indexLabel: string;
  navItems: Array<{ id: PageSectionId; label: string }>;
  visual: ProductVisualModel;
  structuredData: Record<string, unknown>;
  copy: Product["locales"][Locale];
  sections: ProductPageSection[];
};

export type SitePageModel = HomePageModel | AboutPageModel | ProductPageModel;

export type SiteRoute = {
  path: string;
  locale: Locale;
  current: CurrentPage;
  kind: SitePageModel["kind"];
  slug?: ProductSlug;
  title: string;
  canonicalPath: string;
  alternatePath: string;
  ogImage: string;
  ogImageUrl: string;
  expectedText: string[];
  primaryCta?: string;
  sectionIndex?: boolean;
};
