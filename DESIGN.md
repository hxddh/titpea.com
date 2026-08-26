# Titpea Design Principles

Titpea is a concise personal product site. Its design should make each tool easier to understand, not make the site feel like a generic developer dashboard or a marketing campaign.

## Use Principles, Not Templates

- Cards are valid when they give products or concepts a distinct identity. Avoid only card grids in which every item has the same visual weight and no meaningful difference.
- A layout rule is a prompt for judgment, never a mandate to replace a clearer existing structure.
- Keep the page quiet enough for technical claims, commands, screenshots, and charts to remain the focus.

## Product Hierarchy

- Give the most important product a stronger visual footprint, then make supporting products easy to scan.
- Use actual product screenshots and authentic command-shaped visuals where they explain the product better than prose.
- Do not turn product pages into abstract workflows. Explain the real runtime, boundary, inputs, and outputs.

## Page Composition

- A product page should earn every section. Prefer a short sequence of product-specific evidence over a fixed template with repeated claims.
- For core tools, the usual shape is: what the tool changes, how it works, and what remains after the run. FAQ is for adoption blockers, not a second feature list.
- Keep the section directory for long desktop product pages only. On mobile it is a normal, horizontally scrollable directory rather than a sticky control.
- Use one source of truth for each product fact. Repeating a claim in the hero, proof strip, body, and FAQ weakens the page instead of strengthening it.

## Typography And Copy

- Load Inter for Latin. CJK falls back to the system face. Do not list a webfont that is never fetched.
- Display headings use weight 600 and negative tracking. Do not create hierarchy only by jumping to 700 at default letter-spacing.
- Hero headings should normally fit in one or two lines. Shorten copy before shrinking the type.
- Product descriptions should be compact and factual. Avoid generic phrases that could describe any developer tool.
- Chinese copy should read as natural technical Chinese. Keep command names and established terms such as `skill` and `trace` when translation reduces clarity.
- `mono` is for labels, eyebrows, meta, and commands. Navigation, buttons, footer, and menu group titles use `sans`.

## Visual Language

- Preserve the existing light technical surface, dark ink, and restrained controls. Do not add a decorative body grid.
- Product and About heroes are left-aligned. Captions sit below screenshots, not as overlay pills. Screenshots do not scale on hover. The remaining catalog is a two-column text list with hairline separators, not a mosaic of equal-weight cards.
- Equal-weight product sections — fit and limits, features, and similar — are two-column hairline lists. Numbered workflows stay as step mosaics; charts, terminals, and the Pulse menu-bar visual keep the box that is the product.
- Hairlines should recede: borders use ink or white at low opacity, not a painted gray card frame. Product screenshots sit on a quiet shadow, not a 1px box.
- Proof chips are optional. Short product pages should omit them when the same facts already live in the hero, workflow, or FAQ.
- Use color sparingly and semantically. Do not add gradients, glow, or decorative effects merely to create visual impact.
- Use the same card radius and border language across the site, but vary scale, density, and media when the content demands it.

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
  - `mono` is for labels, eyebrows, meta, and commands; `sans` is for headings, prose, navigation, buttons, footer, and menu group titles.
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
- Still review by eye: title line count, text density, image cropping, and horizontal overflow.
- Every product claim must be traceable to project documentation, a screenshot, a test result, or source code.
