## Dispatch context (shared by every frame of this run; read after your role, packet and frame.md)

- PROJECT_DIR: /home/user/nave-cloud/videos/rtn-rag-explainer
- Canvas: 1920×1080. Captions: disabled — still keep every element above y = 896px (83%).
- Confirmed sketch: none (autonomous run). Build straight from your packet's Scene lines.
- Narration: NONE. This overrides the role's "never render narration as text" rule: your block's `onscreen:` strings ARE the visible copy. Render each exactly, character for character (Thai + English), revealed at its cue time. Do not add, remove, paraphrase or translate visible words. Do not render `scene`, `narrativeRole`, `keyMessage` or Scene-line prose as text.
- GSAP: load the LOCAL copy inside your `<template>`: `<script src="assets/vendor/gsap.min.js"></script>`. Optional plugins (load + `gsap.registerPlugin(...)` only if used): `assets/vendor/CustomEase.min.js`, `assets/vendor/DrawSVGPlugin.min.js`, `assets/vendor/MotionPathPlugin.min.js`. No CDN or external URL anywhere in the file.
- Fonts: inside your `<template>` `<style>`, include the `@font-face` rules you use, copied verbatim from frame.md "Font loading (auto-generated)" (src `assets/fonts/...`). Only these families exist: "IBM Plex Sans Thai" (400/500/600/700), "IBM Plex Sans Thai Looped" (400/500/600), "Sarabun" (400/700), "IBM Plex Mono" (400/500/600). Never name any other family (no system fallbacks such as Inter, Arial, sans-serif chains beyond these).
- Background: a full-bleed `class="clip"` ground layer, colour `#fdfae7`, full duration, lowest track (never paint the background on #root).
- Thai text rules (frame.md "Project adaptation"): line-height ≥ 1.45; each authored line is its own `display:block; white-space:nowrap` span (no `<br>`); reveal per word/phrase spans, NEVER per character; no italics; no uppercase/tracking on Thai; nothing load-bearing under 28px (chips ≥ 22px).
- Determinism: no `Math.random`, `Date.now`, CSS `transition`/`@keyframes`, `repeat`, `yoyo`. Anything "noisy" (scan speckle, scattered positions) must come from a fixed seeded function of the element index written in your file.
- Ids and reusable class names: prefix with `fNN-` where NN is your frame number (e.g. `f02-`), except the contract selectors `#root` and `.clip`.
- Shared header (frames 02–10 only): paste this snippet verbatim into your template, replace `fNN` with your prefix, `TERM` with your block's `term:` value, and add `is-current` / `is-done` classes to the pills per frame.md component 1 (02–05: ① current · 06–07: ① done, ② current · 08–10: ① and ② done, ③ current). The header is static: present from t=0, never animated.

```html
<style>
  #fNN-hdr{position:absolute;left:96px;right:96px;top:56px;height:60px;display:flex;justify-content:space-between;align-items:center}
  #fNN-hdr .fNN-track{display:flex;gap:12px}
  #fNN-hdr .fNN-pill{font-family:"IBM Plex Sans Thai";font-weight:500;font-size:24px;line-height:1.45;padding:8px 22px;border-radius:100px;border:1.5px solid rgba(30,43,250,0.2);color:#6b6b6b;background:transparent;white-space:nowrap}
  #fNN-hdr .fNN-n{font-weight:700;margin-right:10px}
  #fNN-hdr .fNN-pill.is-current{background:#1e2bfa;border-color:#1e2bfa;color:#fdfae7}
  #fNN-hdr .fNN-pill.is-done{background:rgba(30,43,250,0.08);border-color:rgba(30,43,250,0.08);color:#1e2bfa}
  #fNN-hdr .fNN-term{font-family:"IBM Plex Mono","IBM Plex Sans Thai";font-weight:500;font-size:24px;line-height:1.45;padding:8px 22px;border-radius:100px;color:#1e2bfa;background:rgba(30,43,250,0.08);white-space:nowrap}
  #fNN-h2{position:absolute;left:96px;top:148px;max-width:1500px;font-family:"IBM Plex Sans Thai";font-weight:700;font-size:60px;line-height:1.45;color:#111111}
  #fNN-h2 .fNN-line{display:block;white-space:nowrap}
</style>
<div id="fNN-hdr">
  <div class="fNN-track"><span class="fNN-pill"><b class="fNN-n">1</b>อ่านได้</span><span class="fNN-pill"><b class="fNN-n">2</b>ค้นเจอ</span><span class="fNN-pill"><b class="fNN-n">3</b>ตามสิทธิ์</span></div>
  <span class="fNN-term">TERM</span>
</div>
```

  Frame 01 introduces the tracker in its last Scene with the same pill styles (all "upcoming", no term chip). Frame 11 has no header.
- Headline: use `#fNN-h2` (above) for the frame's headline; reveal its phrases on their cues.
- Do NOT run the hyperframes CLI, npm, npx, or any network command. Do not edit STORYBOARD.md, frame.md, index.html or any other frame's file. Your only output is your `src` file (a single bare `<template>…</template>` fragment).
- Glyphs: only characters the shipped fonts contain. Never use circled digits (①②③), ✗, ✕, emoji or other dingbats as text: draw icons as inline SVG. Safe symbols: × ✓ → ← ↓ ↑ ≈ · — … (✓ is missing from Sarabun). `node ../../harness/check-glyphs.mjs .` is run on your file afterwards.
- When done, reply with ≤ 8 lines: file written; each Scene window you implemented; any deviation from the packet and why; anything the orchestrator should check first (e.g. a long Thai line that might overflow).
