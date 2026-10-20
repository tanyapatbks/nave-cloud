# Frame packet: 06-hybrid

## Project inputs

- Project: /home/user/nave-cloud/videos/rtn-rag-explainer
- Design tokens: /home/user/nave-cloud/videos/rtn-rag-explainer/frame.md
- RULES_DIR: /home/user/nave-cloud/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 6 — ค้นหา 3 ทางพร้อมกัน

- scene: One question runs through three searches at once; each catches different pieces; their results merge
- voiceover:
- duration: 11s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-hybrid.html
- type: feature_showcase
- persuasion: Comparison of options + counterexample (each alone misses something)
- beat: Comprehension + "aha"
- blueprint: compose
- term: Hybrid Search
- focal: the question card, then the merge
- roles: header/tracker = supporting (① done, ② current) · question card = foreground subject · three lanes = foreground subject · result markers (squares / circles / filter chips) = supporting · merge bracket = foreground subject (Scene 4)
- onscreen: headline "ค้นหา 3 ทางพร้อมกัน" (0.3s) · question card "แนวทางปฏิบัติปี 69 ของ ศซบ." (1.0s) · lane "ค้นคำตรงตัว" chip "Keyword" sub "ชื่อ · รหัส · คำเฉพาะ" (2.4s) · lane "ค้นตามความหมาย" chip "Vector" sub "แนวทางปฏิบัติ ≈ นโยบาย" (4.0s) · lane "กรองตามป้าย" chip "Metadata" sub "ปี · หน่วยงาน · สิทธิ์" (5.6s) · merge label "รวมผล" (7.4s)

narrativeRole: Explains why vector search alone is not enough: exact names/IDs, meaning, and filters each catch what the others miss.
keyMessage: Hybrid search combines keyword, vector and metadata filters; together they find what one method alone misses.

Scene 1 (0.0–2.4s): header present (tracker updates: ① done, ② current); headline per-phrase reveal; the question card (component 5) enters at upper-left (x 96, y≈300, width ~720). Three empty lane rows to its right (x 900–1824) at y≈300 / 470 / 640.
Scene 2 (2.4–4.0s): keyword lane reveals (label + chip + sub). Within the question card, the words "ศซบ." and "69" get a cobalt square underline; three small square markers light on matching tiles in the lane — and the phrase "แนวทางปฏิบัติ" stays unmarked (a miss).
Scene 3 (4.0–5.6s): vector lane reveals. "แนวทางปฏิบัติ" gets a cobalt circle; circle markers land on tiles labelled "นโยบาย" (meaning match) — including one tile of another unit (a plausible near-miss shown slightly greyer).
Scene 4 (5.6–7.4s): metadata lane reveals as three filter chips (ปี 2569 · หน่วย สสท./ศซบ. · ขอบเขตสิทธิ์) that sweep across the lane and grey out the off-target tiles (the other-unit tile fades to 35%).
Scene 5 (7.4–11.0s): a cobalt bracket self-draws across the right ends of all three lanes (`svg-path-draw`) and collapses the surviving markers into one short result stack of three tiles, the example document on top with its cobalt outline; label "รวมผล". Hold still from 9.0s.

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
