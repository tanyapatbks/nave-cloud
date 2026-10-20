# Frame packet: 04-tags

## Project inputs

- Project: /home/user/nave-cloud/videos/rtn-rag-explainer
- Design tokens: /home/user/nave-cloud/videos/rtn-rag-explainer/frame.md
- RULES_DIR: /home/user/nave-cloud/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 4 — ทุกชิ้นติดป้ายเดิม

- scene: The example document splits into chunks and tree nodes; one metadata tag is stamped onto every piece
- voiceover:
- duration: 9s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-tags.html
- type: feature_showcase
- persuasion: Concretization (label inheritance made visible) + question→answer pairing
- beat: Comprehension + confidence
- blueprint: compose
- term: Data Governance
- focal: the metadata tag card, then its copies on each chunk
- roles: header/tracker = supporting (① current) · example document = foreground subject (Scene 1) · chunks + tree nodes = foreground subject (Scene 2) · tag card = foreground subject (Scene 3) · mini badges = supporting
- onscreen: headline "แบ่งเป็นชิ้น — ทุกชิ้นติดป้ายเดิม" (0.3s) · chip "Chunk" (1.4s) · tag rows "มาจากไหน? · SourceID" (2.8s) "ฉบับไหน? · Version" (3.5s) "ลับแค่ไหน? · Classification" (4.2s) "ใครเห็นได้? · Access" (4.9s) · chip "Tree Nodes" (6.4s)

narrativeRole: Shows that governance metadata is inherited by every piece the system will ever search — nothing travels unlabelled.
keyMessage: Every document and every chunk carries SourceID, Version, Classification and Access.

Scene 1 (0.0–1.4s): header present; headline per-phrase reveal; the example document tile (large, ~260×340, Sarabun interior) sits centre-left at y≈560.
Scene 2 (1.4–2.8s): the document splits into four horizontal chunk cards that fan out to the right in a column (`center-outward-expansion`, ordered by index); chip "Chunk" pops by the first card.
Scene 3 (2.8–6.0s): the metadata tag card (frame.md component 7) appears to the left of the column; its four rows reveal one by one on their cues, each row's question in Thai 600 and term in mono cobalt. As the fourth row lands, the tag "stamps" a 4-dot mini badge onto every chunk card in order (deterministic stagger, short smooth settle) — the inheritance.
Scene 4 (6.0–9.0s): two tree-node pills (section headings of the same document) attach above the chunk column with thin connector lines (`svg-path-draw`), and each receives the same mini badge; chip "Tree Nodes". Hold still (held read) from 7.2s.

## Selected motion rule: center-outward-expansion

---
name: center-outward-expansion
description: Elements start clustered at screen center and expand outward to their final positions, driven by a shared progress value.
metadata:
  tags: expansion, scatter, center, reveal, layout, sync, burst
---

# Center-Outward Expansion

Elements begin at one shared center point and radiate outward to their final positions — the entry beat itself, or motion driven by another animation's progress (a counting number, a beat). Flat 2D cousin of [depth-scatter-assemble.md](depth-scatter-assemble.md) (per-element 3D cloud): here every element shares the SAME origin.

## How It Works

Each element carries its final offset as `data-target-x/y`. Its position lerps between center and target: `x = targetX × progress`. Self-centering is baked as `xPercent/yPercent: -50` so the tweened `x`/`y` are pure offsets from the stage center. Standalone burst = per-item staggered `fromTo`; driven burst = one shared proxy (see Variations).

## Recipe

```html
<!-- inside a standard scene clip (hyperframes-core) -->
<div class="burst-wrap">
  <div class="burst-item" data-target-x="-360" data-target-y="-180">{itemA}</div>
  <div class="burst-item" data-target-x="360" data-target-y="-180">{itemB}</div>
  <div class="burst-item" data-target-x="0" data-target-y="360">{itemC}</div>
</div>
```

```css
.burst-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.burst-item {
  position: absolute;
  top: 50%;
  left: 50%; /* GSAP xPercent/yPercent -50 bakes the centering; x/y tween the offset */
  will-change: transform;
}
```

```js
document.querySelectorAll(".burst-item").forEach((el, i) => {
  tl.fromTo(
    el,
    { xPercent: -50, yPercent: -50, x: 0, y: 0, scale: 0.6, opacity: 0 },
    {
      x: Number(el.dataset.targetX),
      y: Number(el.dataset.targetY),
      scale: 1,
      opacity: 1,
      duration: EXPAND_DUR,
      ease: EXPAND_EASE,
    },
    ENTRY_AT + i * STAGGER,
  );
});
```

## Variations

- **Synced to a driver (chord)**: when the burst shadows a counter / beat, drop the stagger and drive all items from ONE 0→1 proxy tween with the driver's exact duration AND ease; `onUpdate` writes `translate(-50%,-50%) translate(targetX*p, targetY*p)` per item — the two read as one beat.
- **Partially-spread start**: with 6+ items the full cluster piles up — start from `{ x: targetX * START_PROGRESS, ... }`.
- **Idle micro-float**: hand off to [sine-wave-loop.md](sine-wave-loop.md) after landing instead of freezing.

## Values

| token          | range                | notes                                                            |
| -------------- | -------------------- | ---------------------------------------------------------------- |
| ITEM_COUNT     | 3–8                  | > 8 = visual chaos mid-expansion; low counts want wider spread   |
| EXPAND_DUR     | 1.0–1.8s             | must equal the driver's duration in the synced variant           |
| EXPAND_EASE    | `power3.out` default | `power2.out` gentler, `expo.out` dramatic stop; NEVER `in` eases |
| STAGGER        | 0.04–0.08s           | tighter = chord; looser = lazy arpeggio                          |
| ENTRY_AT       | 0–0.5s               | a beat of compositional quiet before the burst                   |
| START_PROGRESS | 0–0.5                | 0 = dramatic full cluster; ~0.3 avoids the pile-up               |

## Critical Constraints

- **Tween `x`/`y` over the baked `xPercent/yPercent: -50`** — mutating `left`/`top` fights the centering and causes pixel jitter.
- **Out-easing only** — `in` easings read as items being sucked back mid-air.
- **No other absolute-positioned siblings inside `.burst-wrap`** — they'd steal the centered baseline.
- **❗ The burst IS the beat** — don't park a "real headline" label below it (the eye snaps to the label and ignores the burst). If a label is needed, reveal it post-burst in the same stack.
- Synced variant: identical duration + ease as the driver, or the chord falls apart.

## See also

`counting-dynamic-scale` (the classic chord driver) · `depth-scatter-assemble` (3D per-element cloud) · `card-morph-anchor` (burst out of a morphed card) · `sine-wave-loop` (post-landing life).

## Selected motion rule: svg-path-draw

---
name: svg-path-draw
description: Animate SVG paths drawing progressively using stroke-dasharray and stroke-dashoffset.
metadata:
  tags: svg, stroke, draw, path, reveal, icon, vector
---

# SVG Path Draw

## Contents

- [Recipe](#recipe)
- [Variations](#variations)
- [Values](#values)
- [Critical Constraints](#critical-constraints)
- [See also](#see-also)

Reveals an SVG shape by animating its stroke as if a pen were tracing it. Two stroke properties together: **`stroke-dasharray = <pathLength>`** makes the entire path one dash; **`stroke-dashoffset`** starts at the path length (dash shifted fully out of view → invisible) and tweens to `0` (fully drawn). The length comes from the DOM API `path.getTotalLength()` — measured, never guessed.

Works on anything with a stroke: `<path>`, `<circle>`, `<rect>`, `<line>`, `<polyline>`, `<polygon>`, `<ellipse>`.

## Recipe

```html
<!-- inside a standard scene clip -->
<svg class="logo-mark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path id="bar-left" d="M 60 40 L 60 160" />
  <path id="bar-right" d="M 140 40 L 140 160" />
  <path id="bar-mid" d="M 60 100 L 140 100" />
</svg>
```

```css
.logo-mark path {
  fill: none; /* outline-only draw — a fill would appear immediately and ruin the reveal */
  stroke: {accentColor};
  stroke-width: 12;
  stroke-linecap: round; /* softer endpoints */
  stroke-linejoin: round;
}
```

```js
// Setup: measure each path and set its dash pattern. Real measured geometry, not a magic number.
document.querySelectorAll(".logo-mark path").forEach((p) => {
  const len = p.getTotalLength();
  p.style.strokeDasharray = `${len}`;
  p.style.strokeDashoffset = `${len}`;
});

// Stagger draws so the eye reads continuous motion — each segment starts at
// ~70-80% of the previous segment's duration, before it finishes.
tl.to(
  "#bar-left",
  { strokeDashoffset: 0, duration: SEGMENT_DRAW_DUR, ease: "power2.out" },
  SEG_1_START,
);
tl.to(
  "#bar-right",
  { strokeDashoffset: 0, duration: SEGMENT_DRAW_DUR, ease: "power2.out" },
  SEG_2_START,
);
tl.to(
  "#bar-mid",
  { strokeDashoffset: 0, duration: FINAL_SEGMENT_DUR, ease: "power2.out" },
  SEG_3_START,
);

// Companion wordmark fades in only after the last stroke settles.
tl.to(
  ".brand-line",
  { opacity: 1, duration: BRAND_FADE_DUR, ease: "power1.out" },
  BRAND_FADE_START,
);
```

## Variations

- **Ring starting at 12 o'clock** — `<circle>` / `<rect>` strokes start at 3 o'clock by default; rotate the element `-90deg` so a progress ring draws from the top:

```html
<circle
  cx="100"
  cy="100"
  r="60"
  id="ring"
  style="transform-origin: 100px 100px; transform: rotate(-90deg)"
/>
```

- **Linear (constant-speed) draw** — `ease: "none"` for a steady-rate "real pen" trace.
- **Draw then fill** — for filled shapes, tween `fillOpacity: 0 → 1` AFTER the stroke completes (requires `fill-opacity: 0` initially and a real `fill` in CSS):

```js
tl.to(
  "#path",
  { strokeDashoffset: 0, duration: SEGMENT_DRAW_DUR, ease: "power2.out" },
  SEG_1_START,
);
tl.to(
  "#path",
  { fillOpacity: 1, duration: FILL_FADE_DUR, ease: "power1.out" },
  SEG_1_START + SEGMENT_DRAW_DUR,
);
```

## Values

| token             | range                                   | notes                                                                                              |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| SEGMENT_DRAW_DUR  | 0.3–0.8s                                | fast snap vs deliberate pen trace; >~1s feels sluggish for a logo reveal                           |
| FINAL_SEGMENT_DUR | 60–80% of SEGMENT_DRAW_DUR              | proportional to segment length — a short connector at full duration reads slower than its siblings |
| SEG_N_START       | previous start + 70–80% of its duration | reads as continuous motion, not N isolated animations                                              |
| SEG_1_START       | 0–0.4s                                  | a small ~0.2s lead-in lets the viewer settle before motion                                         |
| BRAND_FADE_START  | ≥ last stroke end (+ ~0.2s beat)        | earlier and the wordmark competes with the draw                                                    |
| BRAND_FADE_DUR    | 0.3–0.8s                                | snap (urgent) vs glide (premium)                                                                   |

Ease families are discrete choices: **stroke draws** use `power2.out` (a hand lifting at end of stroke) or `none` for constant speed — never `back.out` / `elastic.out` (pens don't bounce). **Fades** use `power1.out`.

## Critical Constraints

- **`fill: none`** for outline-only draws — otherwise the fill appears immediately.
- **Dasharray/dashoffset = the measured `getTotalLength()`**, set at setup; requires the SVG in the DOM (inline SVG is fine; a loaded `<image>` SVG is not).
- **Complex paths**: if `getTotalLength()` looks wrong, overestimate slightly (`len * 1.05`) — too large is invisible at animation start; too small clips the end.
- **Stagger multi-path draws at ~70–80%** of the previous segment's duration.
- **A drawn line must land on something.** When the path is a connector (rail, beam, underline, callout) rather than a shape, both endpoints must sit on real elements and the draw must do a job — reveal, route, validate, or emphasize. A stroke that only decorates empty space reads as filler; attach it or cut it.

## See also

`svg-icon-enrichment` (internal parts animate after the outline draws) · `counting-dynamic-scale` (stroke draws an icon while a number counts up) · `hacker-flip-3d` (logo draws, wordmark decodes beneath).
