import { indexedProduct, localizedProductTitle } from "./productIndex";
import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import { s3TurboListFacts } from "./productFacts";
import { catalogCopy } from "./i18n/pageCopy";
import { type Locale, type ProductSlug } from "../lib/site";
import { productManifest } from "./productManifest";

export type ProductCatalogItem = {
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
  group: "storage" | "browser";
};

export type EvidenceSummary = {
  label: string;
  title: string;
  body: string;
  href: string;
  stats: string[];
};

export function productCatalogModel(locale: Locale) {
  const copy = catalogCopy[locale];
  const catalogText = (slug: ProductSlug) => {
    if (slug === "s3-turbo-list") return [copy.s3Text, copy.s3Tagline, copy.s3Role];
    if (slug === "storageops") return [copy.storageopsText, copy.storageopsTagline, copy.storageopsRole];
    if (slug === "httpmon") return [copy.httpmon, copy.httpmonTagline, copy.httpmonRole];
    if (slug === "world-clock") return [copy.worldClockText, copy.browserTagline, copy.worldClockRole];
    return [copy.doubanText, copy.browserTagline, copy.doubanRole];
  };
  const catalogItems = productManifest.map((item) => {
    const product = indexedProduct(item.slug, locale);
    const [text, tagline, displayRole] = catalogText(item.slug);
    return {
      id: item.slug,
      number: item.group === "storage" ? String(item.catalog.order).padStart(2, "0") : undefined,
      verb: item.catalog.verb,
      name: item.group === "browser" ? localizedProductTitle(item.slug, locale) : product.name,
      href: product.href,
      text,
      tagline,
      displayRole,
      slug: item.slug,
      isPrimary: item.catalog.primary,
      group: item.group,
    } satisfies ProductCatalogItem;
  });
  const storage = catalogItems.filter((item) => item.group === "storage");
  const browser = catalogItems.filter((item) => item.group === "browser");
  const s3 = indexedProduct("s3-turbo-list", locale);
  const storageops = indexedProduct("storageops", locale);

  const evidence: EvidenceSummary[] = [
    {
      label: "s3-turbo-list benchmark",
      title: copy.s3EvidenceTitle,
      body: copy.s3EvidenceBody,
      href: s3.href,
      stats: [s3EvidenceFacts.version, s3TurboListFacts.licenseLabel ?? "current license", "agent-safe JSON"],
    },
    {
      label: "StorageOps agent package",
      title: copy.storageopsEvidenceTitle,
      body: copy.storageopsEvidenceBody,
      href: storageops.href,
      stats: [
        `${storageOpsEvidenceFacts.skillsCount} diagnostic skills`,
        `${storageOpsEvidenceFacts.toolsCount} registered tools`,
        "CLI / Web API / MCP",
      ],
    },
  ];

  return {
    storage,
    browser,
    evidence,
    all: [...storage, ...browser],
    groups: [...copy.groups],
    featuredProductPath: s3.href,
    secondaryProductPath: storageops.href,
  };
}
