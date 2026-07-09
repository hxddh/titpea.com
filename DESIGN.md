# Titpea Design Principles

Titpea is a concise personal product site for independent products (and a few utilities).
Its design should make each product easier to understand, not make the site feel like a generic
developer dashboard or a marketing campaign.

**North star:** a clean technical _editorial_ page that links out to independent products —
not a SaaS marketing template, not a component demo, not a dashboard.

## Page Roles (Do Not Collapse)

| Page    | Job                                             | Density |
| ------- | ----------------------------------------------- | ------- |
| Home    | One line of positioning + quiet product index   | Sparse  |
| About   | Who / how they think + two representative works | Sparse  |
| Product | Problem → evidence → usage → boundary → action  | Dense   |

Home must feel **sparser** than product pages. Never copy product-page structure onto Home.

## Aesthetic Non-Negotiables

These override convenience. If a change is “more correct” but makes the surface louder, rework it.

- **One primary solid control per view** (filled ink button). Secondary actions are ghost or text links.
- **No form-badge walls** on Home/About (`Desktop` / `CLI` / `Extension` as chrome). Put form in prose if needed.
- **No inset ink frames** to fake hierarchy. Hierarchy comes from type size, weight, and spacing.
- **No SaaS split hero** (copy left / giant UI right) on Home. Centered editorial hero only.
- **No hover lift / decorative shadow** on product previews. Focus ring is enough.
- **No cropping product UI** with `scale` + `overflow: hidden` to force a layout.
- **At most one product visual** on Home, limited width (~720–800px), full uncropped frame, with a one-line caption.
- **Product indexes are lists (rows), not card grids**, unless a card carries unique media.
- Interaction is nearly static: prefer color/opacity changes under 150ms; respect `prefers-reduced-motion`.

## Use Principles, Not Templates

- Cards are valid when they give products or concepts a distinct identity. Avoid only card grids in which every item has the same visual weight and no meaningful difference.
- A layout rule is a prompt for judgment, never a mandate to replace a clearer existing structure.
- Keep the page quiet enough for technical claims, commands, screenshots, and charts to remain the focus.

## Product Hierarchy

- Give the most important product a stronger visual footprint, then make supporting products easy to scan.
- Use actual product screenshots and authentic command-shaped visuals where they explain the product better than prose.
- Do not turn product pages into abstract workflows. Explain the real runtime, boundary, inputs, and outputs.
- On Home, flagship weight is larger type (and optional single proof visual)—not badges or heavy borders.

## Page Composition

- A product page should earn every section. Prefer a short sequence of product-specific evidence over a fixed template with repeated claims.
- For core tools, the usual shape is: what the tool changes, how it works, and what remains after the run. FAQ is for adoption blockers, not a second feature list.
- Keep the section directory for long desktop product pages only. On mobile it is a normal, horizontally scrollable directory rather than a sticky control.
- Use one source of truth for each product fact. Repeating a claim in the hero, proof strip, body, and FAQ weakens the page instead of strengthening it.
- About does not host a full product catalog; it links to Home.

## Typography And Copy

- Hero headings should normally fit in one or two lines. Shorten copy before shrinking the type.
- Product descriptions should be compact and factual. Avoid generic phrases that could describe any developer tool.
- Chinese copy should read as natural technical Chinese. Keep command names and established terms such as `skill` and `trace` when translation reduces clarity.
- Suggested roles: Display (home/product hero only), Title (section h2), Body (17–18px), Meta (12px mono, weight 500).

## Visual Language

- Preserve the existing light technical surface, fine grid, dark ink, and restrained controls.
- Use color sparingly and semantically. Do not add gradients, glow, or decorative effects merely to create visual impact.
- Use the same card radius and border language across the site, but vary scale, density, and media when the content demands it.
- Hairline dividers and list rows beat padded equal-height cards for indexes.

## Constraints (Measurable Floors)

Principles above are prompts for judgment. The rules below are not — they are hard
floors that a change either meets or fails, and several are enforced in CI. When a
principle and a constraint seem to disagree, satisfy the constraint and rework the design.

- Accessibility
  - Text contrast: body and labels at least 4.5:1; text 18px+ or non-text at least 3:1.
    `--faint` is a border/decoration token and must not be used for text.
  - Interactive targets are at least 44x44px.
  - Motion respects `prefers-reduced-motion`.
  - Every image has an `alt`; decorative images use `alt=""`.
- Performance
  - No layout shift: every `<img>` declares intrinsic `width`/`height`.
  - Keep CSS in external stylesheets so the strict CSP never blocks an inlined `<style>`.
- Tokens are the single source of truth
  - Spacing, radius, type size, and color come from `tokens.css`; components avoid magic numbers.
  - `mono` is for labels, eyebrows, meta, and commands; `sans` is for headings and prose.
  - Hero headings stay within two lines.
- Responsive
  - Breakpoints are 900px (tablet to single column) and 640px (phone).
  - For bilingual layouts, size shared cards for the longer language so the Chinese page
    does not leave large gaps.

## Color Semantics

Color is used sparingly and always carries meaning. The palette lives in `tokens.css`.

| Role             | Token / value            | Meaning                                        |
| ---------------- | ------------------------ | ---------------------------------------------- |
| Ink              | `--ink`                  | Primary text, primary buttons, active state    |
| Muted            | `--muted`                | Secondary text and quiet labels (AA compliant) |
| Faint            | `--faint`                | Hairlines and decoration only — never text     |
| Line / soft line | `--line` / `--soft-line` | Card dividers and borders                      |
| Reference green  | `#16a56c` family         | A baseline or recommended data point           |
| Caution orange   | `#d97706` family         | An outlier or value that needs attention       |

Do not introduce a third accent color or use green/orange decoratively.

## Review Before Release

- The pipeline enforces most of this automatically: `visual:check` compares desktop and
  mobile baselines, `qa:pages` checks overflow, navigation, anchors, and the mobile menu,
  `a11y:check` runs structural checks, and `facts:external` keeps external claims fresh.
  After an intentional visual change, refresh the baselines with `npm run visual:approve`.
- Still review by eye (this is not optional for Home/About):
  - First impression is a sentence and a person—not an app chrome dump.
  - Flagship is obvious without heavy chrome.
  - Home is quieter than product pages.
  - Title line count, text density, image cropping, horizontal overflow.
- Every product claim must be traceable to project documentation, a screenshot, a test result, or source code.
