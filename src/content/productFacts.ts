import facts from "./productFacts.json";

export type ProductFactSource = "github-api" | "manual" | "chrome-web-store";

export type ProductFacts = {
  source: ProductFactSource;
  repository?: string;
  listingUrl?: string;
  category?: string;
  licenseKey?: string;
  licenseLabel?: string;
  latestRelease?: string;
  stableFacts: string[];
  volatileFactsPolicy?: string;
};

export const productFacts = facts as Record<string, ProductFacts>;
