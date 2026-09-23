# Titpea Design Principles

Titpea is a personal product site. Each product page reads like a product launch page: one clear claim, the product itself shown large, then a short run of evidence. The home page is a directory built from the same pieces. The reference is the Omni page (hanxiao.io/omni): centered heroes, glass chrome, large photographs, feature cards, and a FAQ you can open.

## When Rules Compete

Protect them in this order:

1. Facts and CI floors: contrast, 44px targets, CSP, headline length and line count, external release tags.
2. The reader's job on that page: what the tool changes, how it runs, what remains.
3. The page shape below: centered hero → product object → sections → closing action.
4. Craft: type, spacing, depth, bilingual density.

When a principle and a constraint disagree, satisfy the constraint and rework the design.

## Page Shape

Every page uses the same few parts. Build new content from them before inventing a new part.

- **Chrome.** A glass pill header (`.site-header-bar.glass`) holds the wordmark Titpea, the four product lines as dropdowns, About, GitHub, language, and theme. On product pages the header scrolls away and the **local nav** pins instead: a glass pill with the product name, the product's own section links, and one filled primary action. On narrow screens the section links collapse behind a `Sections` / `目录` disclosure and the action hides only when that disclosure is present.
- **Hero.** Centered, over a soft color wash (`.wash`). Eyebrow, then `h1`, then a balanced lede, then actions, then a mono meta line. Product heroes put the product object below the copy, centered.
- **Product object.** Real screenshots sit in the wide frame (1040px) as photographs: rounded (`--radius-shot`), lifted (`--shadow-shot`). CSS mocks, terminals, and charts stay in the narrow frame (820px) so their type keeps product scale. They keep their own window contour (`--radius-window`).
- **Section.** A centered section head (optional kicker, `h2` at `--title-section`, optional `.sub`), then one object: a feature grid, a showcase photograph, a numbered flow, a panel, or the FAQ.
- **Feature cards.** `--paper-raised` fill, `--radius-card`, no border, no shadow. The grid picks its columns from the item count: 1 is a narrow single column, 2 and 4 are two columns, anything else is three. A `primary` card spans the row. Numbered flows use an accent step badge.
- **Showcase.** A compact head (kicker, `--title-show` heading, sub) above a full-width photograph.
- **FAQ.** A disclosure list (`details.faq-item`) on hairlines, first answer open. Only adoption blockers not already on the page.
- **Closing action.** The product name and one large filled capsule. It may repeat the primary download or repository link, and it never restates the hero headline.
- **Footer.** Copyright on the left, GitHub and email on the right.

## Home

- The hero is the contents line (`Agents and tools` / `Agent 和工具`) and the relationship between the featured pair, said once in the lede. Home hero CTA count is 0; the featured rows are the actions.
- `Selected work` / `主要作品` introduces two showcase rows: role kicker, product name, one-liner, `Learn more ›`, then the full captured screenshot. The whole row is one link.
- `More tools` / `更多工具` groups the rest into Storage, Agents, Everyday, and Experimental. Each product is a raised card with its role, name, and one-liner. A product belongs to one line, and the header dropdowns use the same four lines.

## Product Pages

- `h1` is the slogan (`copy.headline`), not the product name. The eyebrow is `{title} · {eyebrow}`. English ≤ 24 characters, Chinese ≤ 18, and the heading stays within two lines at every breakpoint. Shorten copy before shrinking type.
- Hero actions: one filled `.button.primary.large` and one `.button.ghost` text link with a chevron. Keep 2–3.
- Earn every section. Short products may be hero, one showcase, and one card grid. An Inside section needs a real object (a panel), not copy restating the hero.
- One source of truth per fact. The section after the hero does not inventory the lead, and FAQ asks the extra fact, not the platforms line already in the meta.
- Label schematic interface examples explicitly; they are not captured execution evidence.

## Type

- System face first (`-apple-system`, SF Pro), then Inter for Latin elsewhere, then the system CJK face. Do not load a CJK webfont.
- Display weight is 700 with tight tracking (`-0.035em` on the hero, `-0.03em` on section heads). Chinese (`:lang(zh)`) uses `-0.01em` and looser line-height on headings, and `1.7` on body copy, so Latin tracking never crushes CJK.
- Sizes come from tokens: `--title-hero`, `--title-display`, `--title-section`, `--title-show`, `--text-lede`, `--text-sub`, `--text-kicker`, `--text-card-title`, `--text-card-body`, `--text-list-body`, `--text-catalog-name`.
- Secondary copy (lede, sub, card body, FAQ answers) is `--muted`. Headings, names, and About body are `--ink`.
- `mono` is for meta lines, commands, terminals, evidence labels, and data. Everything else is `sans`.

## Color and Depth

| Role                | Token                                  | Meaning                                            |
| ------------------- | -------------------------------------- | -------------------------------------------------- |
| Canvas              | `--paper`                              | Page background                                    |
| Raised              | `--paper-raised`                       | Feature cards, catalog cards, panels               |
| Ink / muted         | `--ink` / `--muted`                    | Primary and secondary text (both AA)               |
| Faint               | `--faint`                              | Decoration only, never text                        |
| Accent              | `--accent-fill`, `--link`, `--accent`  | The filled primary action, links, and focus rings  |
| Glass               | `--glass`, `--glass-blur`, `--menu-bg` | Header and local nav bars; near-opaque menu panels |
| Wash                | `--wash-1..3`                          | Hero background only                               |
| Reference / caution | `--data-ref` / `--data-caution`        | A baseline or recommended data point / an outlier  |

- One accent. Do not use green or orange decoratively.
- Depth is a token decision: shadows, blur, and gradients in page stylesheets come only from `tokens.css`. `architecture:check` enforces this.
- Glass is for chrome. Content never floats. Menu panels use `--menu-bg`, because a glass panel nested in a glass bar cannot blur the page behind it.
- Dark mode is a first-class theme (OS preference or the header toggle), with pure black canvas and a `#161617` raised tone.

## Interaction

- The header dropdowns and mobile menu are `<details>` with outside-click and Escape close.
- The local nav highlights the section in view, scrolls to the exact offset on click, and closes its narrow-screen disclosure on outside click, Escape, or selection.
- Capsules press to `scale(0.98)`; catalog cards lift 2px on hover. `prefers-reduced-motion` turns off smooth scroll, the lift, and transitions.
- No script is inline; CSP stays `script-src 'self'; style-src 'self'`.

## Constraints (Measurable Floors)

- Accessibility
  - Text contrast: at least 4.5:1 for body and labels, and 3:1 for text 18px+ or non-text. White on `--accent-fill` passes in both themes.
  - Interactive targets are at least 44×44px. Compact capsules extend their hit area with a pseudo-element.
  - Every image has an `alt`; decorative images use `alt=""`.
- Performance
  - Every `<img>` declares intrinsic `width` and `height`. Heroes use `fetchpriority="high"`; later photographs lazy-load.
  - CSS stays in external stylesheets so the strict CSP never blocks an inlined `<style>`.
- Responsive
  - Breakpoints are 1000px (feature grids go to two columns), 900px (header nav → menu; local nav links → disclosure), and 640px (single column, 16px gutter).
  - For bilingual layouts, size shared cards for the longer language.

## Review Before Release

- The pipeline enforces most of this: `architecture:check` (depth tokens, retired files, zh optics), `qa:pages` (overflow, headline and lede lines, CTAs, sticky local nav, anchors, mobile menu), `visual:check` (desktop and mobile baselines), `a11y:check`, `content:check`, and `facts:external`.
- Still review by eye, in this order:
  1. First read: from the first viewport alone, does the reader know what the product changes?
  2. Language: did simplification keep every qualifier?
  3. Composition: one dominant object per section, and a grid whose geometry matches the argument.
  4. Rhythm: one owner per gap. Sections use padding-top only.
  5. Restraint: if a card, section, or line can go without losing meaning, remove it.
- Every product claim must be traceable to project documentation, a screenshot, a test result, or source code.

## Content release, September 2026

- Home groups are Storage, Agents, Everyday, and Experimental. Keep experimental maturity visible.
- Storage Agent leads with the existing investigation result screenshot. The welcome image is a secondary starting-point illustration.
- Product copy starts with an action and result. Preserve conditions on model data, waiting signals, and successfully persisted sessions. Do not promise zero data loss from a recovery feature.
- Keep each metadata segment together when wrapping, including license names.
