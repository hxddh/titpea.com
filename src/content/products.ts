import type { Product, ProductSlug } from "../lib/site";
import { doubanMovieRatingProduct } from "./products/douban-movie-rating";
import { s3TurboListProduct } from "./products/s3-turbo-list";
import { storageOpsProduct } from "./products/storageops";
import { httpmonProduct } from "./products/httpmon";
import { worldClockProduct } from "./products/world-clock";

export const productSlugs: ProductSlug[] = [
  "s3-turbo-list",
  "storageops",
  "httpmon",
  "world-clock",
  "douban-movie-rating",
];

export const products: Record<ProductSlug, Product> = {
  "s3-turbo-list": s3TurboListProduct,
  storageops: storageOpsProduct,
  httpmon: httpmonProduct,
  "world-clock": worldClockProduct,
  "douban-movie-rating": doubanMovieRatingProduct,
};

export const aboutProducts = [
  "world-clock",
  "douban-movie-rating",
  "s3-turbo-list",
  "storageops",
  "httpmon",
] as ProductSlug[];
