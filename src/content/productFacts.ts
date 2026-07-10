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

const requireFact = (id: string) => {
  const fact = productFacts[id];
  if (!fact) throw new Error(`Missing product facts for ${id}`);
  return fact;
};

export const s3TurboListFacts = requireFact("s3-turbo-list");
export const httpmonFacts = requireFact("https-traffic-inspector");
export const worldClockFacts = requireFact("world-clock");
export const doubanMovieRatingFacts = requireFact("douban-movie-rating");
export const agentRadarFacts = requireFact("agent-radar");

export function s3MetaLine() {
  return `Rust · ${s3TurboListFacts.licenseLabel} · ${s3TurboListFacts.latestRelease} · S3-compatible · Parquet · Agent-safe JSON`;
}
