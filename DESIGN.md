# DESIGN.md — SAMMIE / The Marketing Pulse Summit

Design register: **brand**. Color strategy: **Committed / drenched-dark** — a warm near-black surface
carries the identity; champagne-gold is the single saturated accent. Theme: **dark**, forced by the scene —
a premium evening marketing summit under cinematic stage lighting.

## Color (OKLCH — neutrals tinted toward gold hue ~85, low chroma at extremes)
| Token | OKLCH | Role |
|---|---|---|
| `--bg` | `oklch(0.15 0.008 85)` | page background (warm near-black, never `#000`) |
| `--bg-raised` | `oklch(0.19 0.010 85)` | raised surfaces, cards, tiles |
| `--bg-sunken` | `oklch(0.12 0.008 85)` | footer, deep bands |
| `--line` | `oklch(0.30 0.012 85)` | hairlines, borders (full borders only, never side-stripes) |
| `--text` | `oklch(0.95 0.010 85)` | primary text (warm off-white, never `#fff`) |
| `--text-muted` | `oklch(0.72 0.012 85)` | secondary text |
| `--text-faint` | `oklch(0.55 0.012 85)` | labels, meta |
| `--gold` | `oklch(0.80 0.115 85)` | primary accent — champagne gold |
| `--gold-deep` | `oklch(0.68 0.120 80)` | pressed/darker gold, gradients-of-one-hue |
| `--gold-soft` | `oklch(0.80 0.115 85 / 0.12)` | translucent gold wash |

Contrast: gold `0.80 L` on `0.15 L` bg passes AA for large + body. Muted text stays ≥ AA on bg.

## Typography
- **Display** (`--font-display`): **Archivo** variable, used UPPERCASE, tight tracking (-0.02em),
  heavy weights (700–900) for hero + section headings. Condensed-expressive character.
- **Body** (`--font-sans`): **Inter** (fallback Geist), 400–600, normal case.
- **Scale** (ratio ~1.33): 0.8125 / 1 / 1.333 / 1.777 / 2.369 / 3.157 / clamp hero to ~6–9rem.
- Body line length capped **65–75ch**. Weight/scale contrast ≥1.25 between steps. Loaded via `next/font`.

## Spacing & layout
- Section vertical rhythm varies: hero full-viewport; content bands `py-24`→`py-32`; tight sub-groups `gap-4`.
- Max content width ~1200px; hero + editorial rows go wider / asymmetric.
- Kicker labels: uppercase, `--text-faint`, letter-spacing `0.2em`, small, with a short gold rule.
- Cards used sparingly (session tiles, edition tiles). Never nested. No side-stripe accents.

## Elevation & surface
- Depth from tint + hairline, not heavy shadow. Optional soft shadow `0 20px 60px -30px oklch(0 0 0 / 0.6)`.
- Imagery: duotone-ish dark grade, gold-warm; gradient scrim `to-t` from `--bg` for legible overlaid text.

## Motion (Framer Motion + Lenis smooth scroll)
- Easing: ease-out-expo `cubic-bezier(0.16,1,0.3,1)` (`--ease`), ~0.6–0.9s reveals. No bounce/elastic.
- Transform/opacity only — never animate layout properties.
- Patterns: scroll **Reveal** (fade + 24px rise, once), hero gold-rule draw + single **shimmer sweep**
  on title, **CountUp** stats on view, **magnetic** primary CTA, subtle image **parallax**, partner-logo
  **marquee**, nav **condense-on-scroll**.
- Honor `prefers-reduced-motion`: collapse to instant/opacity-only.

## Bans (enforced)
No side-stripe borders, no gradient text (`background-clip:text`), no decorative glassmorphism, no
hero-metric template cliché, no identical icon-card grids, no em dashes in UI copy, no `#000`/`#fff`.
