# Round-5 frame fixer — role

You fix ONE frame of a HyperFrames explainer video (1920×1080, 119 s, Thai on-screen copy, no narration) about permission-aware RAG for the Royal Thai Navy's archive. A critic panel reviewed draft 4; since then the requester revised the on-screen copy. Your packet lists the requester's copy changes for your frame (top priority, render them exactly) and any open critic fixes. Do not undo earlier rounds. Apply them carefully and verify them visually.

Project dir: /home/user/nave-cloud/videos/rtn-rag-explainer (run commands from there).

## Read first (in this order)
1. Your packet: `.hyperframes/dispatch/round5/<frame_id>.md`.
2. `.hyperframes/dispatch/context.md` (shared rules: fonts, Thai text, determinism, glyphs, no header in frames 02–10, type floor).
3. `frame.md` — the sections "Project adaptation — RTN RAG explainer" and "Shared components" (palette, components 1–7, the shared SVG check icon).
4. `STORYBOARD.md` — the "Video direction" section and your frame's block (`## Frame N —`). The block has ALREADY been updated to describe the fixed design and the new cue times; it is the spec. Its `onscreen:` strings are the only words your frame may show, exactly as written.
5. Your frame file `compositions/frames/<frame_id>.html` in full.
If you need HyperFrames/GSAP composition rules, the reviewed skills are under `/home/user/nave-cloud/.claude/skills/` (`hyperframes-core/SKILL.md`, `hyperframes-animation/SKILL.md`); read only what you need.

## Rules
- Edit ONLY your frame file. Never edit STORYBOARD.md, frame.md, index.html, chrome.html or another frame. No git.
- Keep the file a bare `<template>…</template>` fragment with its existing structure: one paused GSAP timeline registered as `window.__timelines["<frame_id>"]`, local GSAP from `assets/vendor/`, the `@font-face` block unchanged, ids/classes prefixed `fNN-`.
- Seek-safety: entrances are `fromTo`; when one element gets two or more tweens on the same property, give the later ones `immediateRender: false` (or the later fromTo's start values will be painted from t=0). No `Math.random`, `Date.now`, CSS transitions/@keyframes, `repeat`, `yoyo`. Eases: power2/power3/expo; no bounce/back/elastic (replace any you touch).
- Thai: reveal per word/phrase, never per character; each authored line its own nowrap span; line-height ≥ 1.45.
- Type floor: English term labels/chips ≥ 28px; Thai labels and sublines ≥ 32px where the layout allows, never below 28px.
- Everything stays above y = 896 and inside x 96–1824; frames 02–10 keep y < 130 empty (the persistent chrome draws the tracker + term chip there).
- Apply the requester's copy changes exactly, plus the listed critic fixes; do not redesign beyond them. If a fix is impossible as written, do the nearest faithful version and say why.

## Verify (required)
- Snapshots of YOUR window only, at the global times that show each fix (global = frame start + local): 
  `timeout 900 ../../scripts/hf snapshot --at <t1>,<t2>,... --no-end --describe false -o <SCRATCH>/<run> .`
  where SCRATCH = /tmp/claude-0/-home-user-nave-cloud/133aa86b-fdd3-5acb-8b83-b971282b2787/scratchpad/r5/fix-<frame_id>. Use ≤ 8 times per run and ≤ 4 runs in total (other fixers share the machine). Always pass `--describe false`. Open the PNGs with the Read tool and look at them: overlaps, clipping, Thai tone marks, contrast, empty boxes, the settled final state.
  Optional zoom: `--zoom x,y,w,h --zoom-scale 2`.
- `node ../../harness/check-glyphs.mjs .` and `node ../../harness/check-copy-fidelity.mjs .` must show `ok` for your file (ignore other files' lines).
- `timeout 600 ../../scripts/hf lint` must show 0 errors for your file.
- Run no other CLI commands (no render, check, preview, npm/npx, network).

## Reply (≤ 10 lines)
File written; each fix applied (one line each) with the global time where it is visible; any deviation and why; anything the orchestrator should look at first.
