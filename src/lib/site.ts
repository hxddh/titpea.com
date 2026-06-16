export type Locale = "en" | "zh";
export type ProductSlug = "s3-turbo-list" | "storageops" | "world-clock" | "douban-movie-rating";
export type CurrentPage = "home" | "about" | "s3-turbo-list" | "storageops" | "world-clock" | "douban";
export type HeaderNavItem = {
  label: string;
  href: string;
  current?: CurrentPage;
  external?: boolean;
  showInPrimary?: boolean;
};

export type HeaderNavGroup = {
  label: string;
  items: HeaderNavItem[];
};

type Link = {
  label: string;
  href: string;
};

type Localized<T> = Record<Locale, T>;

export type ProductCopy = {
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  lead: string;
  primaryCta: Link;
  secondaryCta: Link;
  meta: string;
  proof: string[];
  positioningLabel: string;
  positioning: Array<[string, string]>;
  featuresLabel: string;
  features: Array<[string, string]>;
  rationaleLabel: string;
  rationaleTitle: string;
  rationaleBody: string[];
  workflowLabel?: string;
  workflow?: Array<[string, string]>;
  automationLabel?: string;
  automation?: Array<[string, string]>;
  examplesLabel?: string;
  examples?: Array<[string, string]>;
  casesLabel?: string;
  casesTitle?: string;
  casesBody?: string;
  cases?: string[];
  finalCta?: string;
  finalCtaLabel?: string;
  faqLabel?: string;
  faq?: Array<[string, string]>;
};

export type Product = {
  slug: ProductSlug;
  current: CurrentPage;
  name: string;
  category: "storage" | "browser";
  archetype: "storageCli" | "agentPackage" | "browserExtension";
  role: "inventory" | "diagnosis" | "traffic" | "time" | "ratings";
  visual: "terminal" | "diagnostic" | "clock" | "rating";
  locales: Localized<ProductCopy>;
};

export function pathFor(locale: Locale, slug?: ProductSlug | "about") {
  const path = slug ? `${slug}/` : "";
  return locale === "zh" ? `/zh/${path}` : `/${path}`;
}

export function slugForCurrentPage(current: CurrentPage): ProductSlug | "about" | undefined {
  if (current === "home") return undefined;
  if (current === "douban") return "douban-movie-rating";
  return current;
}
