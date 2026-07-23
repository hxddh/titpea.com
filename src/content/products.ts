import type { Product, ProductSlug } from "../lib/site";
import { doubanMovieRatingProduct } from "./products/douban-movie-rating";
import { s3TurboListProduct } from "./products/s3-turbo-list";
import { storageAgentWorkbenchProduct } from "./products/storage-agent-workbench";
import { storageOpsProduct } from "./products/storageops";
import { httpmonProduct } from "./products/httpmon";
import { agentRadarProduct } from "./products/agent-radar";
import { pagewiseProduct } from "./products/pagewise";
import { worldClockProduct } from "./products/world-clock";
import { gobanProduct } from "./products/goban";
import { chessboardProduct } from "./products/chessboard";
import { easierBookmarksProduct } from "./products/easier-bookmarks";
import { productManifest } from "./productManifest";

export const productSlugs = productManifest.map((item) => item.slug) as ProductSlug[];

export const products: Record<ProductSlug, Product> = {
  "s3-turbo-list": s3TurboListProduct,
  "storage-agent-workbench": storageAgentWorkbenchProduct,
  storageops: storageOpsProduct,
  httpmon: httpmonProduct,
  "agent-radar": agentRadarProduct,
  pagewise: pagewiseProduct,
  "world-clock": worldClockProduct,
  "douban-movie-rating": doubanMovieRatingProduct,
  goban: gobanProduct,
  chessboard: chessboardProduct,
  "easier-bookmarks": easierBookmarksProduct,
};
