export type Locale = "en" | "zh";
export type ProductSlug =
  | "s3-turbo-list"
  | "storage-agent-workbench"
  | "storageops"
  | "httpmon"
  | "agent-radar"
  | "pagewise"
  | "world-clock"
  | "douban-movie-rating"
  | "goban"
  | "easier-bookmarks";
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

export type HeaderNavLink = {
  kind: "link";
  label: string;
  href: string;
  current?: CurrentPage;
  external?: boolean;
};

export type HeaderNavDropdown = {
  kind: "dropdown";
  label: string;
  items: HeaderNavItem[];
  open?: boolean;
};

export type DesktopNavEntry = HeaderNavLink | HeaderNavDropdown;

type Link = {
  label: string;
  href: string;
};

type Localized<T> = Record<Locale, T>;

export type ProductContentCard = {
  title: string;
  body: string;
  link?: Link;
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
  positioningLabel?: string;
  positioning?: ProductContentCard[];
  featuresLabel?: string;
  features?: ProductContentCard[];
  rationaleLabel?: string;
  rationaleTitle?: string;
  rationaleBody?: string[];
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

export type StorageCliProductCopy = ProductCopy & {
  workflow: ProductContentCard[];
  automation: ProductContentCard[];
  faq: ProductContentCard[];
};

export type AgentPackageProductCopy = ProductCopy & {
  workflow: ProductContentCard[];
  casesTitle: string;
  cases: string[];
  faq: ProductContentCard[];
};

export type BrowserExtensionProductCopy = ProductCopy & {
  features: ProductContentCard[];
  positioning: ProductContentCard[];
  faq: ProductContentCard[];
};

export type AgentWorkbenchProductCopy = ProductCopy & {
  features: ProductContentCard[];
  workflow: ProductContentCard[];
  positioning: ProductContentCard[];
  faq: ProductContentCard[];
};

export type StorageCliProduct = {
  slug: ProductSlug;
  name: string;
  archetype: "storageCli";
  locales: Localized<StorageCliProductCopy>;
};

export type MarkdownRadarProduct = {
  slug: "agent-radar";
  name: string;
  archetype: "markdownRadar";
  locales: Localized<StorageCliProductCopy>;
};

export type S3TurboListProduct = {
  slug: "s3-turbo-list";
  name: string;
  archetype: "s3TurboList";
  locales: Localized<
    ProductCopy & {
      casesTitle: string;
      cases: string[];
      rationaleTitle: string;
      rationaleBody: string[];
      faq: ProductContentCard[];
    }
  >;
};

export type AgentPackageProduct = {
  slug: ProductSlug;
  name: string;
  archetype: "agentPackage";
  locales: Localized<AgentPackageProductCopy>;
};

export type BrowserExtensionProduct = {
  slug: ProductSlug;
  name: string;
  archetype: "browserExtension";
  locales: Localized<BrowserExtensionProductCopy>;
};

export type NativeAppProduct = {
  slug: "goban";
  name: string;
  archetype: "nativeApp";
  locales: Localized<BrowserExtensionProductCopy>;
};

export type AgentWorkbenchProduct = {
  slug: "storage-agent-workbench";
  name: string;
  archetype: "agentWorkbench";
  locales: Localized<AgentWorkbenchProductCopy>;
};

export type DocumentAgentProduct = {
  slug: "pagewise";
  name: string;
  archetype: "documentAgent";
  locales: Localized<AgentWorkbenchProductCopy>;
};

export type Product =
  | S3TurboListProduct
  | StorageCliProduct
  | MarkdownRadarProduct
  | AgentPackageProduct
  | BrowserExtensionProduct
  | NativeAppProduct
  | AgentWorkbenchProduct
  | DocumentAgentProduct;

export type ProductArchetype =
  | "s3TurboList"
  | "storageCli"
  | "markdownRadar"
  | "agentPackage"
  | "browserExtension"
  | "nativeApp"
  | "agentWorkbench"
  | "documentAgent";

export function pathFor(locale: Locale, slug?: ProductSlug | "about") {
  const path = slug ? `${slug}/` : "";
  return locale === "zh" ? `/zh/${path}` : `/${path}`;
}

export function slugForCurrentPage(current: CurrentPage): ProductSlug | "about" | undefined {
  if (current === "home") return undefined;
  return current;
}
