## Dispatch context (shared by every frame of this run; read after your role, packet and frame.md)

- PROJECT_DIR: /home/user/nave-cloud/videos/rtn-rag-explainer
- Canvas: 1920×1080. Captions: disabled — still keep every element above y = 896px (83%).
- Confirmed sketch: none (autonomous run). Build straight from your packet's Scene lines.
- Narration: NONE. This overrides the role's "never render narration as text" rule: your block's `onscreen:` strings ARE the visible copy. Render each exactly, character for character (Thai + English), revealed at its cue time. Do not add, remove, paraphrase or translate visible words. Do not render `scene`, `narrativeRole`, `keyMessage` or Scene-line prose as text.
- GSAP: load the LOCAL copy inside your `<template>`: `<script src="assets/vendor/gsap.min.js"></script>`. Optional plugins (load + `gsap.registerPlugin(...)` only if used): `assets/vendor/CustomEase.min.js`, `assets/vendor/DrawSVGPlugin.min.js`, `assets/vendor/MotionPathPlugin.min.js`. No CDN or external URL anywhere in the file.
- Fonts: inside your `<template>` `<style>`, paste the `@font-face` block from frame.md "Font loading" verbatim. Families: "Chulabhorn Likit Text" (300/400/500/700), "Chulabhorn Likit Display" (500), "IBM Plex Mono" (400/500/600), and "IBM Plex Sans Thai" (400/500/700, fallback only). Use the stacks `"Chulabhorn Likit Text","IBM Plex Sans Thai"` and `"IBM Plex Mono","Chulabhorn Likit Text","IBM Plex Sans Thai"`; never name any other family.
- Background: a full-bleed `class="clip"` ground layer, colour `#fdfae7`, full duration, lowest track (never paint the background on #root).
- Thai text rules (frame.md "Project adaptation"): line-height ≥ 1.45; each authored line is its own `display:block; white-space:nowrap` span (no `<br>`); reveal per word/phrase spans, NEVER per character; no italics; no uppercase/tracking on Thai; type floor for projection: English term labels/chips ≥ 28px; Thai labels and sublines ≥ 32px wherever the layout allows, never below 28px; nothing load-bearing under 28px.
- Determinism: no `Math.random`, `Date.now`, CSS `transition`/`@keyframes`, `repeat`, `yoyo`. Anything "noisy" (scan speckle, scattered positions) must come from a fixed seeded function of the element index written in your file.
- Ids and reusable class names: prefix with `fNN-` where NN is your frame number (e.g. `f02-`), except the contract selectors `#root` and `.clip`.
- Header (frames 02–10): NONE in the frame. The tracker and term chip are rendered once by the persistent chrome layer `compositions/chrome.html` (mounted above all transitions). Keep the top band (y < 130) empty in your frame. Frame 01 keeps its own tracker (all "upcoming", Chulabhorn Likit Text 500 28px, padding 6px 22px), which hands over to the chrome at 9.0 s.
- Headline styles (paste into your `<style>` with your prefix):

```html
<style>
  #fNN-h2{position:absolute;left:96px;top:148px;max-width:1500px;font-family:"Chulabhorn Likit Text","IBM Plex Sans Thai";font-weight:700;font-size:60px;line-height:1.45;color:#111111}
  #fNN-h2 .fNN-line{display:block;white-space:nowrap}
</style>
```

- Headline: use `#fNN-h2` (above) for the frame's headline; reveal its phrases on their cues.
- Do NOT run the hyperframes CLI, npm, npx, or any network command. Do not edit STORYBOARD.md, frame.md, index.html or any other frame's file. Your only output is your `src` file (a single bare `<template>…</template>` fragment).
- Glyphs: only characters the shipped fonts contain. Never use circled digits (①②③), ✗, ✕, emoji or other dingbats as text: draw icons as inline SVG. Safe symbols: × → ← ↓ ↑ ≈ · — …. The check mark is always the shared inline-SVG icon from frame.md component 6, never the ✓ text glyph. `node ../../harness/check-glyphs.mjs .` is run on your file afterwards.
- When done, reply with ≤ 8 lines: file written; each Scene window you implemented; any deviation from the packet and why; anything the orchestrator should check first (e.g. a long Thai line that might overflow).
