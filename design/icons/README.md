# App icons

Every product needs an icon; `npm run check` fails without one. `npm run assets:icons`
renders each source here to `public/assets/icons/<slug>.webp` (208 px, clipped to the
site tile, radius 22.5%). Official PNGs are first cropped to their opaque tile, so
store-style artwork with a transparent margin and drop shadow fills the tile like the rest.

| Product                                              | Source                                                                                                             | Kind                                                                                 |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Storage Agent, PageWise, Pulse, World Machine, Goban | their repositories (already in `public/assets/icons/`)                                                             | official                                                                             |
| Chessboard                                           | `chessboard-official.png`, from the app repository's `assets/icon.png` (11.0 and later)                            | official                                                                             |
| Easier Bookmarks                                     | `easier-bookmarks-official.png`, from the extension repository's `brand/logo.svg`                                  | official                                                                             |
| Readout                                              | `readout-official.png`, from the app repository's `tools/icon/readout-1024.png` (3.2.0 and later)                  | official                                                                             |
| Bilingual (对读)                                     | `bilingual-official.png`, from the extension repository's `icons/icon-1024.png`                                    | official                                                                             |
| Douban Movie Rating Assistant                        | `douban-movie-rating-official.png`, from the extension repository's `store/assets/icon-source.svg` (1.4 and later) | official                                                                             |
| World Clock                                          | `world-clock-official.png`, rendered at 1024 px from the extension repository's `brand/icon.svg`                   | official                                                                             |
| s3-turbo-list                                        | `s3-turbo-list.svg`                                                                                                | site-designed: a card-catalog drawer pulled open, its tabbed cards in view (listing) |
| StorageOps                                           | `storageops.svg`                                                                                                   | site-designed: a stethoscope (diagnosis)                                             |
| httpmon                                              | `httpmon.svg`                                                                                                      | site-designed: an opened envelope, its letter showing (a request looked into)        |
| celagent                                             | `celagent.svg`                                                                                                     | site-designed: a suitcase with a terminal sticker (a session that travels)           |
| Agent Radar                                          | `agent-radar.svg`                                                                                                  | site-designed: a radar dish sending out waves                                        |

To replace a site-designed icon with official artwork, add `<slug>-official.png`
(square, at least 512 px), delete `<slug>.svg`, and run `npm run assets:icons`.

Design rules for site-designed icons: 1024×1024 tile with a top sheen; one image per product
that says what it does (not its name); its own colour, so no two icons read alike; a mark
bold enough to survive 28 px; no third-party logos or marks.
