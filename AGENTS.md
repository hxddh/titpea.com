# Agent notes for Titpea

Bilingual (`en` / `zh`) Astro 6 static site for [titpea.com](https://titpea.com/). No React. Cloudflare Pages. CSP `script-src 'self'; style-src 'self'` — no inline scripts or CSS.

## Read first

- [DESIGN.md](DESIGN.md) — the page shape (glass chrome, centered hero, stats, feature cards, showcase, commands, FAQ), measurable floors, and review order.
- `src/content/schema.ts` — the whole content model.
- `src/styles/tokens.css` — spacing, type, color, depth. Do not invent parallel tokens; shadows, blur, and gradients come only from here.

## Where things live

| Path                             | What it holds                                                           |
| -------------------------------- | ----------------------------------------------------------------------- |
| `src/content/products/<slug>.ts` | Everything one product page shows, English and Chinese                  |
| `src/content/products/index.ts`  | Site order: one import and one list entry per product                   |
| `src/content/site.ts`            | Site facts and interface copy (nav, Home, About)                        |
| `src/content/releases.json`      | Latest release tag per repository; `npm run releases:sync` refreshes it |
| `src/lib/pages.ts`               | Page models, SEO, nav, routes — derived, never hand-written             |
| `src/components/product/`        | One component per section kind, plus `visuals/` for hero objects        |
| `src/styles/`                    | `base`, `chrome`, `pages`, `product`, `visuals`, `tokens`, `fonts`      |

### Add a product

1. Copy the closest `src/content/products/<slug>.ts` and rewrite both locales. Keep the section ids identical across locales.
2. Import it in `src/content/products/index.ts` where it belongs in site order.
3. If it ships GitHub releases, set `repo` and add an entry to `releases.json` (`npm run releases:sync` fills the tag), and write `{version}` in its meta line.
4. `npm run assets:og <slug>` renders its share image.

A new hero object is the only case that needs a component: add a `kind` to `Visual` in `schema.ts` and a file in `components/product/visuals/`.

## After copy, layout, or style changes

```sh
npm run check        # source rules
npm run build
npm run check:dist   # built output rules
```

For layout or rendered copy, also run `npm run preview` and `npm run qa:pages`.

After an intentional visual change to one of the four baseline screens, refresh them with `VISUAL_BASELINE_PLATFORM=linux npm run visual:approve` on Linux with `fonts-noto-cjk` installed (as CI does). If visual CI fails on font rasterization, replace only the failed files from the `visual-baseline-<sha>` artifact.

## Ship

When CI is green, merge to `main`. The deploy job syncs release tags, builds, deploys, and runs the production smoke test; a daily scheduled run redeploys so new release tags go live without a commit.
