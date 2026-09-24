# App icons

Every product needs an icon; `npm run check` fails without one. `npm run assets:icons`
renders each source here to `public/assets/icons/<slug>.webp` (208 px, clipped to the
site tile, radius 22.5%).

| Product                                                          | Source                                                                               | Kind                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| Storage Agent, PageWise, Pulse, World Machine, Goban, Chessboard | their repositories (already in `public/assets/icons/`)                               | official                                                     |
| Easier Bookmarks                                                 | `easier-bookmarks-official.png` from the extension repository's `design/icon-source` | official                                                     |
| s3-turbo-list, StorageOps, httpmon                               | `<slug>.svg`                                                                         | site-designed, storage family (blue, bucket motif)           |
| celagent, Agent Radar                                            | `<slug>.svg`                                                                         | site-designed, agents family (graphite)                      |
| World Clock, Douban Movie Rating Assistant                       | `<slug>.svg`                                                                         | site-designed until the Chrome Web Store artwork is supplied |

To replace a site-designed icon with official artwork, add `<slug>-official.png`
(square, at least 512 px), delete `<slug>.svg`, and run `npm run assets:icons`.

Design rules for site-designed icons: 1024×1024 tile, top sheen, one white glyph drawn in
50 px strokes with round caps, and a single idea per product (what it does, not its name).
