import { externalProjects, indexedProduct, localizedProductTitle } from "./productIndex";
import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import { s3TurboListFacts } from "./productFacts";
import { catalogCopy } from "./i18n/pageCopy";
import { type Locale, type ProductSlug } from "../lib/site";

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
  group: "storage" | "browser" | "external";
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
  const s3 = indexedProduct("s3-turbo-list", locale);
  const storageops = indexedProduct("storageops", locale);
  const worldClock = indexedProduct("world-clock", locale);
  const douban = indexedProduct("douban-movie-rating", locale);
  const httpmon = externalProjects["https-traffic-inspector"];
  const storage: ProductCatalogItem[] = [
    {
      id: "s3-turbo-list",
      number: "01",
      verb: "List / Diff",
      name: s3.name,
      href: s3.href,
      text: copy.s3Text,
      tagline: copy.s3Tagline,
      displayRole: copy.s3Role,
      slug: "s3-turbo-list",
      isPrimary: true,
      group: "storage",
    },
    {
      id: "storageops",
      number: "02",
      verb: "Diagnose",
      name: storageops.name,
      href: storageops.href,
      text: copy.storageopsText,
      tagline: copy.storageopsTagline,
      displayRole: copy.storageopsRole,
      slug: "storageops",
      isPrimary: true,
      group: "storage",
    },
    {
      id: "https-traffic-inspector",
      number: "03",
      verb: "Inspect",
      name: httpmon.name,
      href: httpmon.href,
      text: copy.httpmon,
      tagline: copy.httpmonTagline,
      displayRole: copy.httpmonRole,
      group: "external",
    },
  ];

  const browser: ProductCatalogItem[] = [
    {
      id: "world-clock",
      name: localizedProductTitle("world-clock", locale),
      href: worldClock.href,
      text: copy.worldClockText,
      tagline: copy.browserTagline,
      displayRole: copy.worldClockRole,
      slug: "world-clock",
      group: "browser",
    },
    {
      id: "douban-movie-rating",
      name: localizedProductTitle("douban-movie-rating", locale),
      href: douban.href,
      text: copy.doubanText,
      tagline: copy.browserTagline,
      displayRole: copy.doubanRole,
      slug: "douban-movie-rating",
      group: "browser",
    },
  ];

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
        `${storageOpsEvidenceFacts.toolsCount} Pi tools`,
        "golden-case evals",
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
