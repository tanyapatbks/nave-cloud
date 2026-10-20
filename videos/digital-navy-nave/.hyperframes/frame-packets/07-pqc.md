# Frame packet: 07-pqc

## Project inputs

- Project: /home/user/nave-cloud/videos/digital-navy-nave
- Design tokens: /home/user/nave-cloud/videos/digital-navy-nave/frame.md
- RULES_DIR: /home/user/nave-cloud/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 7 — อีกทั้งวางแผนรองรับ PQC

- scene: A timeline from today to the quantum future: an outsider copies encrypted data today and breaks it later — unless it is protected by post-quantum cryptography
- voiceover:
- duration: 12.5s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/07-pqc.html
- type: feature_showcase
- persuasion: Before/after on one timeline (classical lock vs post-quantum lock) + causal chain (copy now → decrypt later)
- beat: Foresight + unease → reassurance
- blueprint: compose
- term: PQC · Post-Quantum Cryptography
- focal: the stored copy's lock at the future end
- roles: headline = supporting · timeline = background structure · data packet + stolen copy = foreground subject · outsider token = supporting · quantum glyph = supporting · post-quantum lock + note/chip = foreground subject (Scene 4)
- onscreen: headline "อีกทั้งวางแผนรองรับ PQC ที่กำลังจะมาถึง" (0.3s) · timeline "วันนี้" (1.2s) "อนาคต · ยุคควอนตัม" (1.6s) · risk "ข้อมูลที่เข้ารหัสวันนี้ อาจถูกลักลอบเก็บไว้" (2.6s) + "แล้วถูกถอดรหัสได้ในอนาคต" (4.4s) · answer "การเข้ารหัสแบบใหม่ ที่ทนทานต่อควอนตัม" (6.6s) · note "เช่น มาตรฐาน NIST" (8.2s) · chip "ML-KEM" (8.4s)

narrativeRole: Explains why PQC must be planned now (data stolen today can be decrypted once quantum computers arrive) and that NAVE plans to support it.
keyMessage: Encrypted data stolen today could be read in the quantum future; post-quantum cryptography (published standards such as NIST's ML-KEM) closes that gap, so NAVE plans for it now.

Scene 1 (0.0–2.6s): headline (component 2) as [อีกทั้งวางแผนรองรับ PQC][ที่กำลังจะมาถึง], "PQC" in cobalt weight. A full-width timeline draws left→right at y 560 (x 160–1760, 3px #3F3C35, `svg-path-draw`, 0.8–1.6s) with two end nodes; labels under them at y 584–633: "วันนี้" centred on x 160 (1.2s) and "อนาคต · ยุคควอนตัม" right-aligned to x 1824 (1.6s; Chulabhorn Likit Text 600 34px).
Scene 2 (2.6–4.4s): at "วันนี้", a data packet (component 3 tile at ~0.6 scale, x 114–206, y 424–544) wearing a classical padlock (ink) sits above the line. The risk line reveals centred above, two lines y 296–354 / 354–412, as [ข้อมูลที่เข้ารหัสวันนี้][อาจถูกลักลอบเก็บไว้] (2.6s; Chulabhorn Likit Text 600 40px #111, no cobalt word). The "outsider" ghost token from frame 06 (dashed #8A867A outline, no person) arrives, pulls a dashed duplicate off the packet (2.8s) and carries it along the timeline (3.0–4.0s, power2.inOut) into a dashed "store" box near the future end (x 1560–1760, y 410–550).
Scene 3 (4.4–6.4s): the risk line's second line reveals as [แล้วถูกถอดรหัสได้][ในอนาคต] (4.4s). At the future end a quantum glyph (a cobalt circle with three thin elliptical orbits, 72px, x 1724–1796, y 318–390; static shape) appears and emits one ring; the stored copy's padlock cracks — a red #9B2D27 crack line self-draws across it and the shackle opens (4.6–5.2s).
Scene 4 (6.4–12.5s): the cracked copy dims to 40% and shifts 110px left inside the store (6.4–6.8s). At "วันนี้" the packet's padlock is replaced in place by a post-quantum lock (the same padlock outline filled with a 3×3 lattice of cobalt dots; `scale-swap-transition`, 6.4–6.8s) and the answer line reveals centred at y 676–734 as [การเข้ารหัสแบบใหม่][ที่ทนทานต่อควอนตัม] (6.6s; "ทนทานต่อควอนตัม" in cobalt weight). The outsider copies the packet again (6.9–7.6s) into the store; the quantum glyph emits a ring (7.7s) and the lattice lock holds — a cobalt ring + shared check settle on it (7.9s). One centred row at y 770–823: the muted note "เช่น มาตรฐาน NIST" (Chulabhorn Likit Text 500 32px #5F5B50, 8.2s) then the chip "ML-KEM" (component 11, 8.4s). Hold still from 9.2s.

## Selected motion rule: scale-swap-transition

---
name: scale-swap-transition
description: Coordinated shrink-out + spring pop-in morph-like transition between two elements — no SVG path interpolation needed.
metadata:
  tags: transition, morph, scale, swap, spring, pop
---

# Scale-Swap Transition

Simulates a "morph" between two DOM elements by overlapping exit and entrance scale animations. Lighter weight than [card-morph-anchor.md](card-morph-anchor.md) (which morphs container dimensions — use that for SHAPE changes; this rule is for SAME-shape state swaps) and easier than SVG path interpolation.

At a single trigger, two coordinated tweens fire:

1. **Outgoing**: scale `1.0 → EXIT_SCALE` + opacity `1 → 0`, fast `power2.in` (rushing away).
2. **Incoming**: scale `EXIT_SCALE → 1.0` + opacity `0 → 1`, `back.out(BOUNCE_FACTOR)` (arriving with weight).

A small `OVERLAP` window during which both are mid-tween creates the morph illusion; the incoming sits on top via z-index so the outgoing's fade-tail doesn't bleed through.

## Recipe

```html
<!-- Both cards position: absolute; inset: 0 in one fixed-size wrapper — same
     footprint, same transform-origin: 50% 50%. Incoming starts opacity: 0,
     transform: scale(EXIT_SCALE), z-index above the outgoing. -->
<div class="swap-wrap">
  <div class="card outgoing" id="outgoing">{outgoingIcon} {outgoingLabel}</div>
  <div class="card incoming" id="incoming">
    {incomingIcon} {incomingLabel}
    <div class="sub" id="sub">{incomingSubline}</div>
  </div>
</div>
```

```js
// Outgoing: shrink + fade fast
tl.to(
  "#outgoing",
  { scale: EXIT_SCALE, opacity: 0, duration: EXIT_DUR, ease: "power2.in" },
  TRIGGER,
);

// Incoming: pops in with overshoot, starting OVERLAP before the exit finishes
tl.to(
  "#incoming",
  { scale: 1.0, opacity: 1, duration: ENTER_DUR, ease: `back.out(${BOUNCE_FACTOR})` },
  TRIGGER + EXIT_DUR - OVERLAP,
);

// Inner content reveals AFTER the incoming settles
tl.fromTo(
  "#sub",
  { opacity: 0, y: SUB_REVEAL_Y_PX },
  { opacity: 1, y: 0, duration: SUB_REVEAL_DUR, ease: "power3.out" },
  TRIGGER + EXIT_DUR + SUB_REVEAL_DELAY,
);
```

## Variations

- **Delayed inner content reveal** — the classic pattern above: morph the container, then reveal inner text once it settles; the 0.2–0.4 s gap lets the eye land on the new shape before reading.
- **Triple swap (3-state cycle)** — chain A→B→C with triggers `TRIGGER_AB` / `TRIGGER_BC`; each transition is its own tween pair, the previous incoming becoming the next outgoing. State-evolution narratives (early → mid → final labels).
- **Color-shift transition (no scale)** — for a flat morph between same-shape states, drop the scale and keep opacity + a brief background hue tween; less dramatic, more product-UI tone.

## Values

| token            | range                                 | notes                                                                                                  |
| ---------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| TRIGGER          | ≥ outgoing settled + a presence-dwell | the outgoing must "land" before transforming                                                           |
| EXIT_DUR         | 0.3–0.5 s                             |                                                                                                        |
| ENTER_DUR        | 0.45–0.7 s                            | longer than `EXIT_DUR` so the overshoot can settle                                                     |
| OVERLAP          | 0.1–0.2 s                             | >0.3 s both are clearly visible together (no morph); <0.05 s leaves a visible empty gap                |
| EXIT_SCALE       | 0.6–0.8                               | smaller exits feel dramatic but risk reading as "vanish" instead of "morph"                            |
| BOUNCE_FACTOR    | 1.4 soft · 1.8 firm · 2.2 cartoony    |                                                                                                        |
| SUB_REVEAL_DELAY | 0.2–0.4 s                             | reveals during the morph compete with the swap for attention                                           |
| BRAND_REVEAL_AT  | < TRIGGER                             | context (brand, eyebrow) sets the stage early; revealed AT the swap it competes with the headline beat |

## Critical Constraints

- **Incoming z-index ABOVE outgoing** — otherwise the outgoing's fade-tail (opacity 0.3–0.5) bleeds through and double-exposes the frame.
- **Both elements share `transform-origin: 50% 50%`** — different origins make the morph read as one thing teleporting elsewhere.
- **Bouncy ease ONLY on the incoming** — outgoing `power2.in`, incoming `back.out`; reversed, the swap feels mechanical.
- **Both cards `position: absolute; inset: 0`** in the same fixed-size wrapper (sized to fit both states; the wrap never resizes).
- **Don't `display: none` the outgoing** after the fade — leave it at `opacity: 0` so layout doesn't reflow.
- **Inner content reveals after the container settles**; **climax dwell ≥ 1 s** after the final state + subline land.

## See also

`press-release-spring` (a button press TRIGGERS the swap — cause and effect) · `card-morph-anchor` (shape-changing alternative) · `reactive-displacement` (when the replacement should read as a causal collision) · `sine-wave-loop` (idle breathing on the final state).

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
