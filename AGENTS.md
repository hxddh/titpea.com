# Agent notes for Titpea

Bilingual (`en` / `zh`) Astro 6 static site for [titpea.com](https://titpea.com/). No React. Cloudflare Pages. CSP `script-src 'self'; style-src 'self'` — no inline scripts or CSS.

## Read first

- [DESIGN.md](DESIGN.md) — the page shape (glass chrome, centered hero, stats, feature cards, showcase, commands, FAQ), measurable floors, and review order.
- `src/content/schema.ts` — the whole content model.
- `src/styles/tokens.css` — spacing, type, color, depth. Do not invent parallel tokens; shadows, blur, and gradients come only from here.

Settled design decisions in DESIGN.md (for example the studio home) are the owner's. Do not reverse them, and do not push design changes straight to `main`: open a pull request so CI and the owner review them.

## Where things live

| Path                             | What it holds                                                           |
| -------------------------------- | ----------------------------------------------------------------------- |
| `src/content/products/<slug>.ts` | Everything one product page shows, English and Chinese                  |
| `src/content/products/index.ts`  | Site order: one import and one list entry per product                   |
| `src/content/site.ts`            | Site facts and interface copy (nav, Home, About)                        |
| `src/content/releases.json`      | Latest release tag per repository; `npm run releases:sync` refreshes it |
| `src/lib/pages.ts`               | Page models, SEO, nav, routes — derived, never hand-written             |
| `src/components/product/`        | One component per section kind, plus `visuals/` for hero objects        |
| `src/styles/`                    | Cascade layers; each page loads only its own sheets (below)             |

### Styles

`global.css` declares the cascade layers, lowest first — `tokens, base, chrome, components, demos, templates, locale, identity` — and loads on every page: `fonts`, `tokens`, `base`, `chrome`, `shared` (template parts more than one kind of page renders: the centered hero, the closing band, code spans), `locale` (Chinese optics) and `identity` (icon plates, display lines, product colour). Layer order, not specificity, decides between files, so do not prefix a selector (`html `, a doubled class) to win; put the rule in the right layer.

Everything else is imported by the component that renders it: `home` (HomePage), `about` and `release-list` (AboutPage), `releases` (ReleasesPage), `privacy` (PrivacyPage), `family` (FamilyBand), `document` (the hand-written privacy policies and the 404), and `visuals`, `demo` and `product` (ProductPage). One route renders every product, so a live demo's sheet (`demo-<name>.css`) is linked by `src/components/product/demo-styles.ts` only on the pages that play it. A stylesheet that is not imported by `global.css` starts with the same `@layer` statement; `npm run check:dist` fails when a page's sheets set the layers up in another order, or when a page off the product pages loads more than 40 KB of CSS.

### Add a product

1. `npm run new:product <slug> -- --type <cli|pi|actions|desktop|mac|extension|game|experiment> --line <storage|agents|everyday|games>` writes `src/content/products/<slug>.ts` from a template, adds it to `src/content/products/index.ts` after the last product of its line, and adds placeholder colours to `tokens.css`. Every placeholder is marked `TODO(new-product)`, and `npm run check` fails while one is left.
2. Write both locales (the closest existing product is the best model; keep the section ids identical across locales) and sample the colours from the icon.
3. If it ships GitHub releases, set `repo` and add an entry to `releases.json` (`npm run releases:sync` fills the tag), and write `{version}` in its meta line.
4. Give it an icon: official artwork as `design/icons/<slug>-official.png`, or a site-designed `design/icons/<slug>.svg` (see `design/icons/README.md`), then `npm run assets:icons`.
5. `npm run assets:og <slug>` renders its share image and records its inputs in `design/og-manifest.json`; `npm run check` fails when a product's title, headline, catalog line, icon or hero screenshot changes without a redraw.
6. New or replaced screenshots: save as WebP, then `npm run assets:images` writes the `-900w.webp` and `-1200w.webp` variants that `srcset` uses.

New or changed Chinese headings may need characters the Chinese display font lacks: `npm run build && npm run assets:fonts && npm run build` recuts it (`check:dist` names any missing character).

Replacing an image under the same file name is fine: the build appends `?v=<content hash>` to every `/assets/` URL (`src/integrations/asset-versions.mjs`), so browsers and the CDN fetch the new bytes.

A new hero object is the only case that needs a component: add a `kind` to `Visual` in `schema.ts` and a file in `components/product/visuals/`.

### Provenance: `asOf`

Screenshot visuals, showcases, `commands.items` (for their `capturedOutput`) and FAQ items take an optional `asOf: "v14.0.0"`: the release tag the capture or answer describes. Set it when you capture a screenshot or output, or write an answer that depends on a version. `npm run check` fails on a value that is not a tag, and warns (without failing) when the product's release in `releases.json` is a major version ahead, listing each item so it can be recaptured or rechecked.

`npm run check` also fails when a product names an image or recording under `public/` that does not exist, when an image's declared `width`/`height` differ from the file's own size, and when `tokens.css` lacks the product's `--tint-<slug>`/`--ink-<slug>` (light and both dark blocks), its `--fill-<slug>` (light block only; white on it must reach 4.5:1), or its `body[data-product]` mapping.

## After copy, layout, or style changes

```sh
npm run check        # source rules
npm run build
npm run check:dist   # built output rules
```

For layout or rendered copy, also run `npm run preview` and `npm run qa:pages`.

After an intentional visual change to one of the baseline screens (`scripts/visual-targets.json`), refresh them with `VISUAL_BASELINE_PLATFORM=linux npm run visual:approve` on Linux with `fonts-noto-cjk` installed (as CI does). If visual CI fails on font rasterization, replace only the failed files from the `visual-baseline-<sha>` artifact; on a pull request the same screenshots are also pushed to the `captures/pr-<number>` branch, so `git fetch origin captures/pr-<number>` and `git show FETCH_HEAD:<file>.png` work where the artifact cannot be downloaded. CI runs on a pinned `ubuntu-24.04`, so the baselines change only when the image is changed on purpose.

## Ship

When CI is green, merge to `main`. The deploy job syncs release tags, builds, deploys, and runs the production smoke test; once a day a scheduled run checks for new release tags and redeploys only when one changed. The cron is set for 18:17 UTC (02:17 Singapore time), but GitHub starts scheduled runs late, in practice 3 to 6.5 hours late (roughly 21:00–00:45 UTC, 05:00–08:45 Singapore time), so do not count on the exact time.
