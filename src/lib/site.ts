export type Locale = "en" | "zh";
export type ProductSlug = "s3-turbo-list" | "storageops" | "world-clock" | "douban-movie-rating";
export type CurrentPage = "home" | "about" | ProductSlug;
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

export type ProductContentCard = {
  title: string;
  body: string;
  intent?: "fit" | "boundary" | "capability" | "workflow" | "automation" | "evidence" | "example";
  evidence?: string;
  surface?: "cli" | "agent" | "browser" | "artifact" | "protocol";
  priority?: "primary" | "secondary";
  compact?: boolean;
};

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
  positioning: ProductContentCard[];
  featuresLabel: string;
  features: ProductContentCard[];
  rationaleLabel: string;
  rationaleTitle: string;
  rationaleBody: string[];
  workflowLabel?: string;
  workflow?: ProductContentCard[];
  automationLabel?: string;
  automation?: ProductContentCard[];
  examplesLabel?: string;
  examples?: ProductContentCard[];
  casesLabel?: string;
  casesTitle?: string;
  casesBody?: string;
  cases?: string[];
  finalCta?: string;
  finalCtaLabel?: string;
  faqLabel?: string;
  faq?: ProductContentCard[];
};

export type Product = {
  slug: ProductSlug;
  name: string;
  archetype: ProductArchetype;
  locales: Localized<ProductCopy>;
};

export type ProductArchetype = "storageCli" | "agentPackage" | "browserExtension";

export function pathFor(locale: Locale, slug?: ProductSlug | "about") {
  const path = slug ? `${slug}/` : "";
  return locale === "zh" ? `/zh/${path}` : `/${path}`;
}

export function slugForCurrentPage(current: CurrentPage): ProductSlug | "about" | undefined {
  if (current === "home") return undefined;
  return current;
}
