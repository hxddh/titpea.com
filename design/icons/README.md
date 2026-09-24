# App icons

Every product needs an icon; `npm run check` fails without one. `npm run assets:icons`
renders each source here to `public/assets/icons/<slug>.webp` (208 px, clipped to the
site tile, radius 22.5%).

| Product                                                          | Source                                                                                | Kind                                                                        |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Storage Agent, PageWise, Pulse, World Machine, Goban, Chessboard | their repositories (already in `public/assets/icons/`)                                | official                                                                    |
| Easier Bookmarks                                                 | `easier-bookmarks-official.png`, from the extension repository's `design/icon-source` | official                                                                    |
| s3-turbo-list                                                    | `s3-turbo-list.svg`                                                                   | site-designed: a turbine, blades turning together (parallel listing, speed) |
| StorageOps                                                       | `storageops.svg`                                                                      | site-designed: a bucket with a heartbeat across it (diagnosis)              |
| httpmon                                                          | `httpmon.svg`                                                                         | site-designed: a prism, one stream in and its parts revealed                |
| celagent                                                         | `celagent.svg`                                                                        | site-designed: one session carried from one terminal to the next            |
| Agent Radar                                                      | `agent-radar.svg`                                                                     | site-designed: a phosphor radar sweep and the signals it caught             |
| World Clock                                                      | `world-clock.svg`                                                                     | site-designed: a globe in time-zone bands, day into night, hands on top     |
| Douban Movie Rating Assistant                                    | `douban-movie-rating.svg`                                                             | site-designed: a clapperboard carrying three outside ratings                |

To replace a site-designed icon with official artwork, add `<slug>-official.png`
(square, at least 512 px), delete `<slug>.svg`, and run `npm run assets:icons`.

Design rules for site-designed icons: 1024×1024 tile with a top sheen; one image per product
that says what it does (not its name); its own colour, so no two icons read alike; a mark
bold enough to survive 28 px; no third-party logos or marks.
