---
version: alpha
name: Blue Professional — Frame (video / frame layer)
description: >
  Video-first companion to Blue Professional's design.md. The unit is the frame (1920×1080). Atoms
  are identical and sacred — the warm cream canvas, a single saturated cobalt (#1e2bfa) as the only
  accent, the three-step gray text ladder, Chulabhorn Likit Text (display, labels, body) + IBM Plex Mono (IDs, chips),
  soft cobalt-tinted cards (4% fill / 20% border / 10–14px radius) with NO shadows, pill chrome, and
  the cobalt progress bar. Composition + frame scale rewritten. Motion out of scope.
unit: the frame — 1920×1080 primary; 9:16 and 1:1 documented
principle: atoms are sacred · composition is free · numbers come from the script

colors:
  bg: "#fdfae7"
  primary: "#1e2bfa"
  text: "#111111"
  text-muted: "#6b6b6b"
  text-light: "#9a9a9a"
  accent-light: "rgba(30,43,250,0.08)"
  accent-medium: "rgba(30,43,250,0.15)"
  border: "rgba(30,43,250,0.2)"
  card-bg: "rgba(30,43,250,0.04)"
  positive: "#059669"
  negative: "#dc2626"

radii:
  pill: "100px"
  card-lg: "14px"
  card-md: "12px"
  card-sm: "10px"
  bar: "6px"
  circle: "50%"

typography:
  # — reading ramp (IBM Plex Sans Thai body + IBM Plex Sans Thai chrome) —
  body:    { fontFamily: "IBM Plex Sans Thai", cqw: 0.85, weight: 400, lineHeight: 1.6, color: "text-muted" }
  h4-eyebrow:{ fontFamily: "IBM Plex Sans Thai", cqw: 0.8, weight: 600, tracking: "0.08em", upper: true, color: "primary" }
  tag:     { fontFamily: "IBM Plex Sans Thai", px: 12, weight: 500, color: "primary" }
  counter: { fontFamily: "IBM Plex Sans Thai", px: 13, weight: 500, tracking: "0.05em", color: "text-muted" }
  # — display / numerical ramp (IBM Plex Sans Thai, near-black headings / cobalt numerals) —
  h3:      { fontFamily: "IBM Plex Sans Thai", cqw: 1.25, weight: 500, lineHeight: 1.3, tracking: "-0.02em", color: "text" }
  stat-num:{ fontFamily: "IBM Plex Sans Thai", cqw: 1.9, weight: 700, lineHeight: 1.0, color: "primary" }
  blockquote:{ fontFamily: "IBM Plex Sans Thai", cqw: 2.4, weight: 500, lineHeight: 1.35, color: "text" }
  h2:      { fontFamily: "IBM Plex Sans Thai", cqw: 2.6, weight: 600, lineHeight: 1.1, tracking: "-0.02em", color: "text" }
  metric-value:{ fontFamily: "IBM Plex Sans Thai", cqw: 3.0, weight: 700, lineHeight: 1.0, color: "primary" }
  h1:      { fontFamily: "IBM Plex Sans Thai", cqw: 4.2, weight: 700, lineHeight: 1.08, tracking: "-0.02em", color: "text" }
  quote-mark:{ fontFamily: "IBM Plex Sans Thai", cqw: 8.0, weight: 700, lineHeight: 0.5, color: "primary", opacity: 0.15 }

spacing:
  pad-x: "5cqw"
  pad-y-top: "5cqw"
  gap-cards: "1.4cqw"
  accent-line: "60px × 4px"

components:
  card-tinted:
    backgroundColor: "{colors.card-bg}"
    border: "1.5px solid {colors.border}"
    rounded: "{radii.card-lg}"
    shadow: "none"
    description: "Universal content card. Never solid-colored, never opaque-bordered, NO shadow."
  metric-card:
    backgroundColor: "{colors.card-bg}"
    border: "1.5px solid {colors.border}"
    rounded: "{radii.card-lg}"
    typography: "{typography.metric-value} ({colors.primary}) + {typography.metric-label} + {typography.metric-desc}"
    description: "+ optional inline ↑/↓ change chip ({colors.positive}/{colors.negative} text, no fill)."
  tag-pill:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.primary}"
    rounded: "{radii.pill}"
    typography: "{typography.tag}"
    description: "Top-right of the slide-header."
  cta-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "{radii.pill}"
    typography: "IBM Plex Sans Thai 600"
    shadow: "soft cobalt on hover only — the system's only shadow"
    description: "The one solid element."
  accent-line:
    backgroundColor: "{colors.primary}"
    size: "60×4, 2px radius"
    description: "Above cover titles / eyebrow separators."
  bar-track:
    backgroundColor: "{colors.accent-light}"
    fill: "{colors.primary} (display:block so width resolves)"
    rounded: "{radii.bar}"
    description: "28px track; fill carries the value."
  step-circle:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "50%"
    size: "56px"
    description: "Sequential steps fade opacity 1.0→0.85→0.7→0.55."
  split-highlight:
    backgroundColor: "{colors.accent-light}"
    borderLeft: "4px solid {colors.primary}"
    rounded: "{radii.card-md}"
    description: "Inline pull-quote callout."
  slide-header:
    typography: "{typography.h4-eyebrow} (cobalt) left, tag-pill right; {typography.h2} below"
    description: "Top band of every content frame."
  atmosphere:
    elements: "clipped diagonal cobalt-tint panel, 3×3 cobalt dot grid, concentric closing rings"
    description: "Cover/closing only. Never on content frames."
  progress-bar:
    backgroundColor: "{colors.primary}"
    size: "3px tall, bottom edge, width grows with index"
    description: "Persistent progress strip."
---

# Blue Professional — Frame (video / frame layer)

## Brand adaptation (READ FIRST — the frontmatter is the source of truth)

This is the **blue-professional** preset remixed onto the captured brand. The YAML frontmatter above (colors · typography · components) is **normative and already correct — use it verbatim.** The prose below is the ORIGINAL preset's intent; read it THROUGH the frontmatter:

- **Fonts** — already set to **IBM Plex Sans Thai** (display) / **IBM Plex Sans Thai Looped** (body); ignore any preset font name lingering in prose.
- **Weights** — the brand font ships `{400, 500, 600, 700}` only; every weight is clamped to these — ignore higher preset weights (e.g. 600/700) in prose.
- **Colors** — use the frontmatter hex; preset color NAMES in prose (e.g. "cobalt", "cream") mean the remapped brand values.


## Overview

Blue Professional at frame scale is a **consulting-grade system: restraint with one strong
commitment.** A warm cream canvas and a single saturated cobalt that carries every accent —
eyebrow, metric, CTA, chart fill, progress bar. No secondary brand color, no pastels, just cream,
cobalt, and a tight ladder of grays. The register is investment-research / McKinsey briefing:
measured, data-dense without crowding, executive-readable at distance.

The voice is two faces in fixed roles: **IBM Plex Sans Thai** (display, every numeral, all chrome —
eyebrows uppercase 0.08em) and **IBM Plex Sans Thai** (body, muted gray, line 1.6). Headlines are near-black;
cobalt is reserved for accent moments. Depth is **soft and tinted** — 4% cobalt card fills with 20%
cobalt borders and 10–14px radii — never shadowed. The lack of harsh shadows is the premium signal.

**Key characteristics at frame scale:**

- **Warm cream ground** on every frame; **single cobalt** as the only accent.
- **IBM Plex Sans Thai** (display/numerals/chrome) + **IBM Plex Sans Thai** (body) — near-black headlines, cobalt numerals.
- **Tinted cards** — cobalt 4% fill, cobalt 20% 1.5px border, 10–14px radius, **no shadow**.
- **Pill chrome** (100px) — tag pills + the one solid cobalt CTA; cobalt **progress bar**.
- **Soft rounded corners everywhere** (no square corners save the progress bar).
- **Atmosphere** (diagonal panel, dot grid, concentric rings) on cover/closing only.

## The Frame

### Frame Craft Bar

Three eyeball tests gate every frame before any structural check:

- **Squint** — one **near-black headline or cobalt numeral** dominates at 3–6× its neighbor.
- **Silence** — content frames read **balanced, not crowded**; the **dashboard is the one dense exception**.
- **Restraint** — a **single cobalt accent** carries everything; headlines stay near-black (never cobalt); no shadows (tinted cards do the lift); positive/negative inline-text only.
- **Reference** — aim at an **investment-research / McKinsey quarterly briefing**; failure looks like a **heavy-outlined, multi-color dashboard**.

- **Primary:** 1920×1080 (16:9). Display authored in **`cqw`** (`px ÷ 1920 × 100 = cqw`).
- **Vertical:** 1080×1920 (9:16). **Square:** 1080×1080 (1:1).
- **Safe area:** `pad-x` 5cqw; bottom reserves room for the counter + progress bar.

**The container law (load-bearing).** Every frame ground sets `container-type: size`; ALL
frame-relative units are `cqw`/`cqh` against it — never `vw`. Card radii stay px (10–14px); the
pill radius stays 100px; borders stay 1–1.5px.

## Colors

Tokens identical to the source. `{colors.bg}` cream is the universal ground; `{colors.primary}`
cobalt is the **only** accent — every eyebrow, numeral, CTA, chart fill, progress bar, and the 4px
highlight left-rule. Headlines are `{colors.text}` near-black (never cobalt); body is
`{colors.text-muted}`; tertiary is `{colors.text-light}`. Cards fill `{colors.card-bg}` (4%) with
`{colors.border}` (20%) borders. `{colors.positive}`/`{colors.negative}` appear **only inline** on
directional change chips — never as fills. **No second accent color.**

## Typography

Two ramps. The **reading ramp** (IBM Plex Sans Thai body 0.85cqw muted; IBM Plex Sans Thai eyebrow uppercase 0.08em
cobalt) carries copy + chrome; the **display/numerical ramp** (IBM Plex Sans Thai `h3` 1.25cqw → `h1`
4.2cqw near-black; numerals `stat-num`/`metric-value` in cobalt) carries headings and figures.

- **Legibility floor:** any load-bearing line ≥ **1.4cqw**; px chrome (tag/counter) is colophon only.
- **Fit-to-measure:** size the headline to its length. Cap the block at **≤ 78cqw**; ≤3 words → `h1`; 4–6 → `h2`; 7+ → `h3`. Cobalt numerals scale `metric-value`→`stat-num` by card size.
- **Headlines near-black, −0.02em**; **eyebrows cobalt, uppercase, 0.08em**; **numerals cobalt 600–700**; **body IBM Plex Sans Thai 400 muted, line 1.6**. No italic, no uppercase body, no cobalt headline.

## Depth & Surface

Soft and tinted — never offset. Depth from:

- **Tinted cards** — 4% cobalt fill + 20% cobalt 1.5px border + 10–14px radius reads as lifted without offset.
- **Border-left accent** — the 4px cobalt rule on split-highlight blocks pulls a callout forward.
- **Rounded corners** — the 10–14px radius is part of the softness; square corners break it.

**Ceiling:** zero box-shadow on content (the only shadow is a soft cobalt CTA _hover_); no opaque cobalt borders; no harsh outlines.

## Shapes

- **100px** — tag pills, CTA, nav buttons (pill chrome).
- **14/12/10px** — cards by size (large metric / standard stat / detail + mini).
- **6px** — bar tracks + fills. **50%** — step circles, nav circles, dots, closing rings.
- **0** — only the progress bar. No square-cornered content.

## Components

- **card-tinted / metric-card** — the universal soft-tint content cards (no shadow).
- **tag-pill / cta-button / accent-line** — the cobalt pill chrome + the one solid CTA + the 60×4 rule.
- **bar-track / step-circle / split-highlight** — cobalt data + sequence + callout patterns.
- **slide-header** (eyebrow + tag pill) — the structural rhythm; **atmosphere** (diagonal/dots/rings) on cover/closing only; **progress-bar** on every frame.

## Frame Treatments

> Recipe: ground · container · composes · focal · chrome · accent · silence · Fixed/Free · density.
> Atmosphere only on cover/closing; content frames carry the slide-header rhythm.

### 1 · Cover (identity · move: diagonal accent · left)

**Ground** cream + the clipped diagonal cobalt-tint panel (right ~36%) + a 3×3 cobalt dot grid.
**Composes** accent-line, meta, h1, body sub. **Focal** a 2-line IBM Plex Sans Thai `h1` near-black, left,
under a cobalt accent-line + meta. **Chrome** counter + progress bar. **Accent** the cobalt line +
diagonal panel. **Silence** the diagonal panel holds the right third. **Fixed** near-black h1, cobalt
accents, atmosphere here only. **Free** title, meta. **Density** low.

### 2 · Dashboard (data · move: 3-up metric grid · the dense frame)

**Ground** cream, `pad-x`. **Composes** slide-header (eyebrow + tag-pill), h2, 3× metric/tinted card.
**Focal** a row of tinted cards — cobalt `metric-value` + IBM Plex Sans Thai label + muted desc + optional
green/red change chip. **Chrome** eyebrow left, tag-pill right; progress bar. **Accent** the cobalt
numerals. **Silence** tight — the density exception. **Fixed** 4% tint cards, 20% borders, no shadow,
cobalt numerals. **Free** figures (from script), labels. **Density** dense-exception.

### 3 · Bar Ranking (data · move: cobalt bars · left)

**Ground** cream, `pad-x`. **Composes** eyebrow, h2, bar-track rows. **Focal** 3–5 labeled
cobalt-fill bars on cobalt-8% tracks with cobalt percentages. **Chrome** eyebrow; progress bar.
**Accent** the cobalt fills + figures. **Silence** moderate. **Fixed** 6px tracks, cobalt fills.
**Free** rows, values (from script). **Density** standard.

### 4 · Pull Quote (quote · move: concentric rings · centered)

**Ground** cream, centered, with faint concentric closing-rings behind. **Composes** quote-mark,
blockquote, cite. **Focal** a IBM Plex Sans Thai `blockquote` near-black under a 15%-opacity cobalt
quote-mark; an uppercase cobalt-muted cite beneath. **Accent** the faint rings + quote-mark. **Silence**
~55%. **Fixed** near-black quote, soft rings. **Free** quote, cite. **Density** low.

### 5 · Split + Highlight (content · move: asymmetric split · left)

**Ground** cream, two columns. **Composes** eyebrow, h2, body, split-highlight block. **Focal** an
IBM Plex Sans Thai body column beside a cobalt-8% highlight block (4px cobalt left rule) carrying an inline pull
quote. **Accent** the highlight's left rule. **Silence** generous gutter. **Fixed** tinted highlight,
4px cobalt rule. **Free** body, callout. **Density** standard.

### 6 · Closing / CTA (closer · move: centered rings + CTA)

**Ground** cream + concentric closing-rings. **Composes** accent-line, h1, body, cta-button. **Focal**
a IBM Plex Sans Thai `h1` near-black, centered, with the one solid cobalt `cta-button` pill below. **Accent**
the CTA + rings. **Silence** ~60%. **Fixed** one CTA, near-black h1, soft rings. **Free** sign-off, CTA
label. **Density** low.

## Composition Rules

### Do

- Start every frame on **warm cream**; let **cobalt carry every accent** (eyebrow, numeral, CTA, bar, progress).
- Set headlines **near-black, −0.02em**; eyebrows **cobalt uppercase 0.08em**; numerals **cobalt 600–700**.
- Use **tinted cards** (4% fill, 20% border, 10–14px radius, no shadow); body IBM Plex Sans Thai 400 muted, line 1.6.
- Keep all chrome **pill-shaped (100px)**; one solid cobalt CTA per closing frame.
- Reserve **atmosphere** (diagonal panel, dots, rings) for cover/closing; content frames keep the slide-header rhythm.
- Lean left on cover/dashboard/split, centered on quote/closer.

### Don't

- No second accent color; no cobalt headlines.
- No drop shadows on content (only the soft cobalt CTA hover); no opaque cobalt borders.
- No square corners (save the progress bar); no font substitutes; no uppercase body.
- Don't use the green/red change chips as general accents — directional comparisons only.
- Don't fill space with heavier borders — add substance; don't blow a headline edge-to-edge.

## Aspect-Ratio Behavior

| Treatment         | 16:9                       | 9:16                           | 1:1                      |
| ----------------- | -------------------------- | ------------------------------ | ------------------------ |
| Cover             | title left, diagonal right | title top, diagonal band below | title upper, dots corner |
| Dashboard         | 3 cards across             | 3 stacked                      | 2×2                      |
| Bar Ranking       | 3–5 bars                   | 3–5 bars (tighter)             | 3 bars                   |
| Pull Quote        | centered, rings behind     | centered, taller               | centered                 |
| Split + Highlight | side-by-side               | stacked                        | stacked                  |
| Closing / CTA     | centered + CTA             | centered + CTA                 | centered + CTA           |

`pad-x` holds on the short edge; re-step display above the 1.4cqw floor. The diagonal cover panel
becomes a top/bottom band on 9:16. Numerals stay Latin Arabic digits in CJK builds.

## Approved Entities

No real customers, logos, or vendors are defined in the source — render any such mark as a
placeholder. Figures, metrics, and quotes are content; the system supplies cream + cobalt + grays.

## Numerals & Claims (hard rule)

Never invent figures, financials, percentages, or dates at frame scale. Render slots as `— figure —`,
`{metric}`, `+NN%`, `↑ —`. Metric cards, bar values, and stat cells especially carry placeholders
until the script supplies them. Directional chips require a real comparison from the script.

## Pre-Render Self-Audit

- **Squint** — one near-black headline or cobalt numeral dominates per frame.
- **Silence** — content frames balanced, not crowded; only the dashboard runs dense.
- **Single accent** — cobalt only; headlines near-black; positive/negative inline only.
- **Type** — IBM Plex Sans Thai headings −0.02em near-black, cobalt eyebrows 0.08em + numerals; IBM Plex Sans Thai body muted line 1.6; ≥1.4cqw floor.
- **Depth** — tinted cards (no shadow), soft rounded corners, 20% cobalt borders; no square content corners.
- **Anchor** — left on cover/dashboard/split, centered on quote/closer; atmosphere on cover/closing only.
- **Fabrication** — every numeral traces to the script, else placeholder.

## Known Gaps

- **Motion intentionally out of scope.** frame.md specifies composition only; the source's 500ms translateX transitions + bar-fill animations are deck mechanics.
- **IBM Plex Sans Thai family, local files (see Font loading); never Google Fonts at render.** CJK pairing (Noto Sans SC 700 display / Noto Serif SC 400 body) carries over; the eyebrow's uppercase+tracking signal weakens in CJK — pair it with the accent-line.
- **9:16 / 1:1 are guidance**; verify the floor and that the diagonal panel reflows to a band.
- Diagonal panel (clip-path), dot grid, concentric rings, and bars are CSS-only; no external imagery is required.


## Font loading

Font files live in `assets/fonts/` (Chulabhorn Likit via `scripts/fetch-fonts.sh`; IBM Plex Sans Thai / Mono are OFL and committed). Paste this `<style>` into every frame's `<template>`:

```html
<style>
@font-face{font-family:"Chulabhorn Likit Text";font-weight:300;font-style:normal;font-display:block;src:url("assets/fonts/ChulabhornLikitText-Light.woff2") format("woff2");}
@font-face{font-family:"Chulabhorn Likit Text";font-weight:400;font-style:normal;font-display:block;src:url("assets/fonts/ChulabhornLikitText-Regular.woff2") format("woff2");}
@font-face{font-family:"Chulabhorn Likit Text";font-weight:500;font-style:normal;font-display:block;src:url("assets/fonts/ChulabhornLikitText-Medium.woff2") format("woff2");}
@font-face{font-family:"Chulabhorn Likit Text";font-weight:700;font-style:normal;font-display:block;src:url("assets/fonts/ChulabhornLikitText-Bold.woff2") format("woff2");}
@font-face{font-family:"Chulabhorn Likit Display";font-weight:500;font-style:normal;font-display:block;src:url("assets/fonts/ChulabhornLikitDisplay-Medium.woff2") format("woff2");}
@font-face{font-family:"IBM Plex Sans Thai";font-weight:400;font-style:normal;font-display:block;src:url("assets/fonts/IBMPlexSansThai-Regular.ttf") format("truetype");}
@font-face{font-family:"IBM Plex Sans Thai";font-weight:500;font-style:normal;font-display:block;src:url("assets/fonts/IBMPlexSansThai-Medium.ttf") format("truetype");}
@font-face{font-family:"IBM Plex Sans Thai";font-weight:700;font-style:normal;font-display:block;src:url("assets/fonts/IBMPlexSansThai-Bold.ttf") format("truetype");}
@font-face{font-family:"IBM Plex Mono";font-weight:400;font-style:normal;font-display:block;src:url("assets/fonts/IBMPlexMono-Regular.ttf") format("truetype");}
@font-face{font-family:"IBM Plex Mono";font-weight:500;font-style:normal;font-display:block;src:url("assets/fonts/IBMPlexMono-Medium.ttf") format("truetype");}
@font-face{font-family:"IBM Plex Mono";font-weight:600;font-style:normal;font-display:block;src:url("assets/fonts/IBMPlexMono-SemiBold.ttf") format("truetype");}
</style>
```


## Project adaptation — Digital Navy / NAVE film (hand-tuned; overrides the preset where they differ)

This film is the sequel to `videos/rtn-rag-explainer` and shares its look exactly: same cream ground, single cobalt accent, grey ladder, Chulabhorn Likit typography, tinted cards without shadows, persistent chrome, motion grammar and transitions. Where this section is silent, the RAG film's `frame.md` "Project adaptation" rules apply unchanged.

### Thai typography (load-bearing — identical to the RAG film)

- **All Thai and Latin text:** `Chulabhorn Likit Text` (จุฬาภรณ์ลิขิต, the 14th Thai government standard font set; weights 300/400/500/700). Headlines 700; labels 500–700; sentences 400–500. `Chulabhorn Likit Display` (500) for very large display type (≥ 72px: "Digital Navy", "แต่!", the NAVE wordmark). **IDs, English term chips and item tiles:** `IBM Plex Mono` 500. Every stack ends with `"IBM Plex Sans Thai"` as a per-glyph fallback (Chulabhorn Likit has no ✓ or →). Stacks: `"Chulabhorn Likit Text","IBM Plex Sans Thai"` · `"Chulabhorn Likit Display","Chulabhorn Likit Text","IBM Plex Sans Thai"` · `"IBM Plex Mono","Chulabhorn Likit Text","IBM Plex Sans Thai"`.
- **Line height ≥ 1.45** on any Thai line; never `line-height: 1`; never an `overflow: hidden` mask tighter than the line box on Thai text.
- **No uppercase / tracking tricks for Thai**; emphasis by weight or cobalt colour, never italics.
- **Line breaks authored by hand**: each line its own `display:block; white-space:nowrap` span (no `<br>`). ≤ 35 Thai base characters per line, ≤ 2 lines per text block.
- **Never animate Thai character-by-character.** Reveal per word or phrase from pre-split spans. **Typing** (the composer, frames 01 and 09) is shown **per word**: each word span appears whole while the caret jumps to its end — the look of typing without ever splitting a Thai cluster.
- **Type sizes at 1920×1080:** headline `h2` 60px/700 line-height 1.45 near-black · labels 34–40px/600 · sentences 32–36px/400–500 `#5F5B50` · chips 28px (floor) · nothing load-bearing below 28px.
- Numerals: Latin digits.

### Colour semantics for this film (single accent kept)

- **Cobalt `#1e2bfa`** = the active thing: NAVE, the person's identity + policy scope, the AI's reach, the current roadmap stage, and the path forward. Never a headline colour except the hero words named in the storyboard ("Digital Navy", "โอกาส", "นาวี").
- **Greys** = the old way, the not-yet, the outside. Text floor `#6B675C` (5.3:1 on cream); secondary text `#5F5B50`; body ink `#3F3C35`.
- **`success-solid #0B6A45`** (white text/check) for verified / approved badges; **`success-ink #08573A`** on a light tint. The check is always the shared inline-SVG icon (component 8).
- **Red** (`#b42318` text on `#fde7e3`, strokes `#9B2D27`) only for *blocked / broken*: the leaked-password attempt in frame 06 and the cracked classical lock in frame 07. Nowhere else, never larger than a chip or a stroke.
- **Atmosphere** (faint concentric rings + 3×3 cobalt dot grid) only on frames 01 and 16.

### Shared components (copy exactly; prefix ids/classes `fNN-`)

1. **Chapter tracker + term chip** — one persistent layer, `compositions/chrome.html`, mounted above every transition for frames 02–15 (same geometry as the RAG film: top band left 96px, right 96px, top 56px, height 60px; frames 02–15 draw nothing at y < 130). Tracker pills, gap 12px: `1 โจทย์` · `2 NAVE` · `3 เส้นทาง` (the numeral a bold `<b>`). Pill: `Chulabhorn Likit Text` 500 28px, padding 6px 22px, radius 100px, 1.5px border `rgba(30,43,250,0.2)`. States: current = cobalt fill + `#fdfae7` text; done = `accent-light` fill + cobalt text; upcoming = transparent + `#6b675c` text. Term chip (right): `IBM Plex Mono` 500 28px, cobalt on `accent-light`, radius 100px; swaps at each frame boundary (old out 0.15 s, new in 0.2 s, never both visible). Chapter by frame: 02–03 → 1 current · 04–09 → 1 done, 2 current · 10–15 → 1 and 2 done, 3 current. Frame 01 builds the three pills itself in its last beat (all "upcoming") at the identical geometry.
2. **Headline** (`h2`): left 96px, top 148px, `Chulabhorn Likit Text` 700 60px, line-height 1.45, `#111111`, max width 1500px, 1–2 authored lines. Content below runs to **y ≤ 880px** (nothing below 896px). Frames 11–15 (roadmap stages) have no `h2`: their stage header (component 10) sits below the roadmap rail.
3. **Document tile** (from the RAG film): 132×172px (or a uniform scale of it), radius 10px, `card-bg` fill + 1.5px `border`; a 4px top band (PDF = `#111`, scan = `#6b6b6b`, chart/table = cobalt 40%); 3–4 grey 6px "text lines"; small kind glyph top-left. The RAG film's **example document** = the same tile with a 2.5px cobalt outline. Recreated content is never readable and never invented.
4. **Policy scope** = the RAG film's permission scope: cobalt dashed outline (3px, dash 14/10, radius 28px) drawn by self-draw, with a label pill (cobalt fill, `#fdfae7` text, `Chulabhorn Likit Text` 600 28–32px, padding 6px 24px) on its top edge.
5. **Composer** (the NAVE prompt box; frames 01 and 09): `card-tinted` on cream, width 1200px (frame 01: 1100px), height 112px, radius 20px, 1.5px `border`; left inset 32px: the **spark** (component 7, 30px cobalt); then the typed text `Chulabhorn Likit Text` 500 40px `#111111`; the **caret** = 3px × 48px cobalt bar, blinking as finite opacity steps (never `repeat`); right inset 24px: the **send button** = 64px cobalt circle with a `#fdfae7` up-arrow (SVG, 3px stroke). On submit the button presses (scale 0.92 → 1, `power2`, no overshoot) and the caret hides.
6. **Identity badge** (the RAG film's frame-08 avatar): 96px circle, `rgba(30,43,250,0.06)` fill, 1.5px `rgba(30,43,250,0.2)` ring (cobalt 2.5px ring when it is "the signed-in person"), grey silhouette `#9a9a9a`; name `น.อ.aaaaa` in `Chulabhorn Likit Text` 600 40px `#111`. Optional chips beside it: `Identity` and `Policy` (component 11 mono chips). No photos, uniforms, ranks insignia or unit emblems.
7. **Spark** (the AI mark, from the RAG film): `<svg viewBox="0 0 30 30"><path d="M15 0C16 9 21 14 30 15C21 16 16 21 15 30C14 21 9 16 0 15C9 14 14 9 15 0Z" fill="#1e2bfa"/></svg>`; as an "AI node": the spark centred in a 64px cream circle with a 2px cobalt ring.
8. **Allow / deny chips + shared check icon** (from the RAG film): check `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>` — never the ✓ text glyph. Deny = an SVG × (two 3px strokes), never ✗ or ✕.
9. **NAVE wordmark** (frames 05 and 16; small variant elsewhere): `NAVE` in `Chulabhorn Likit Display` 500, `#111111`, ~180px; a 6px-wide cobalt vertical rule (radius 3px, ~150px tall) with ~44px gaps; `นาวี` in `Chulabhorn Likit Text` 700, cobalt, ~150px; below, centred, the mono chip `NAV Ecosystem` (component 11). No emblem, no anchor, no naval device. Small variant = the same lockup uniformly scaled (≥ 0.3).
10. **Roadmap rail** (frames 10–15): built by frame 10, then held by the persistent layer `compositions/roadmap.html` (mounted above the frame transitions for frames 11–15, like the chrome). Geometry: track line at y = 184 from x 160 to x 1760 (4px, round caps). Five nodes (48px circles) centred at x = 160, 560, 960, 1360, 1760, y = 184, numerals 1–5 (`Chulabhorn Likit Text` 700 28px). Labels centred under each node, top y = 222, `IBM Plex Mono` 500 28px: `Demo` · `Foundation` · `Core Production` · `Specialized` · `Elite`. Track segment x 160→336 = solid cobalt (travelled); x 336→1760 = 3px dashed `#B9B4A2` (dash 12/10). Node 1 = cobalt fill, `#fdfae7` numeral (reached); nodes 2–5 = `#fdfae7` fill, 2px `rgba(30,43,250,0.35)` border, numeral `#5F5B50`. **Pin** at x = 336 (the visual midpoint between the `Demo` and `Foundation` labels, so the pin label never merges with either): a cobalt map-pin SVG (40×54, top y = 130, tip touching the track at y = 184), label `เราอยู่ตรงนี้` centred under it at top y = 222 (`Chulabhorn Likit Text` 700 28px, cobalt on `accent-light`, radius 100px, padding 4px 14px 2px). The canonical markup + CSS is `compositions/roadmap.html`: frame 10 copies it exactly (same elements, sizes and @font-face weights). **Focus** (the stage the current frame shows) moves at each stage-frame boundary (+0.25 s). Stages reached or in progress (1, 2): a 10px `rgba(30,43,250,0.15)` halo and a cobalt label. Stages not yet reached (3–5): a `#ECE8DA` halo and an ink label (`#111`, weight 600, 3px `#111` underline) — the moving focus must never read as progress. From frame 14's 4+ beat (local 8.7 s) to the end of frame 15 node 4 also carries a 24px cobalt "+" badge at its top-right (centre x 1384, y 164), owned by `roadmap.html`.
11. **English mono chip** (term chips, `Identity`/`Policy`, `NAV Ecosystem`, `ML-KEM`, citations): `IBM Plex Mono` 500 **28px**, cobalt on `accent-light`, radius 100px, padding 6px 20px. Nothing English in mono below 28px.
12. **Stage header** (frames 11–15): no step-circle (the rail already shows the number). One row at x 96, y 300–380: the cobalt eyebrow `ขั้นที่ N` (`Chulabhorn Likit Text` 700 40px, cobalt) then, 20px after it on the same baseline, the stage's English name (`Chulabhorn Likit Text` 700 52px `#111`, line-height 1.3; 48px if it would pass x 1500). Below it, y 384–448, the Thai purpose line — the stage's plain-Thai takeaway and its held payoff — in `Chulabhorn Likit Text` 600 44px `#111` with its key phrase in cobalt. Content below runs y ≈ 470–880. When a stage's English tile build has finished, the tile labels may recede to `#6B675C` so the hold rests on the Thai purpose line.
13. **Item tile** (stage contents): height 64px (56px in frame 13's two-column list), radius 12px, `card-bg` fill, 1.5px `border`, padding 0 18px, icon-to-text gap 10px; in a justified row use `flex: 1 1 auto` so tiles fill x 96–1824 without clipping a label; a 28px cobalt stroke icon (2px, round caps, distinct per item) then the English term in `IBM Plex Mono` 500 28px `#111`. **Missing** variant (frame 11 "ยังไม่มี"): transparent fill, 2px dashed `#8A867A` border, text `#5F5B50`, a 24px hollow circle icon in `#8A867A`.

### Narration — none; the on-screen copy IS the content

No voice-over and no captions. Each frame block's `onscreen:` strings are the only words that frame may show: render them exactly as written (Thai + English), revealed at their cue times. Do not add, paraphrase or translate. Keep the bottom band (y > 896) empty.
