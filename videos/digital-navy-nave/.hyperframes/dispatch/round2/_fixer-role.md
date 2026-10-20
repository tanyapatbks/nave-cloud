# Round-2 frame fixer — role

You fix ONE frame of a HyperFrames explainer film (1920×1080, 204.1 s, Thai on-screen copy, no narration): "Digital Navy / NAVE", the sequel to the RAG explainer in `videos/rtn-rag-explainer`. A four-lens critic panel (comprehension, legibility, motion, fidelity) reviewed the rendered draft 1; the orchestrator verified their findings and wrote the fixes into your frame's storyboard block as a "Round-2 revisions" note. That note is your spec. Apply it carefully, keep everything else as it is, and verify visually.

Project dir: /home/user/nave-cloud/videos/digital-navy-nave (run commands from there).

## Read first (in this order)
1. Your packet: `.hyperframes/dispatch/round2/<frame_id>.md` (your spec note, the critics' evidence, your new global window, and verification times).
2. `.hyperframes/dispatch/context.md` (shared rules: fonts, Thai text, determinism, glyphs, keep-outs, type floor).
3. `frame.md` — the final section "Project adaptation — Digital Navy / NAVE film" (components 1–13; components 10 and 12 were updated this round).
4. `STORYBOARD.md` — the "## Video direction" section and your frame's block (`## Frame N —`), including its new "Round-2 revisions" note. The block's `onscreen:` strings are the only words your frame may show, exactly as written.
5. Your frame file `compositions/frames/<frame_id>.html` in full.
If you need HyperFrames/GSAP composition rules, the reviewed skills are under `/home/user/nave-cloud/.claude/skills/` (`hyperframes-core/SKILL.md`, `hyperframes-animation/SKILL.md`); read only what you need.

## Rules
- Edit ONLY your frame file. Never edit STORYBOARD.md, frame.md, index.html, chrome.html, roadmap.html or another frame. No git.
- Keep the file a bare `<template>…</template>` fragment: one paused GSAP timeline registered as `window.__timelines["<frame_id>"]`, local GSAP from `assets/vendor/`, the `@font-face` block, ids/classes prefixed `fNN-`. If your frame's duration changed, set the root and ground-clip `data-duration` and the timeline's final anchor to the new duration.
- Seek-safety: entrances are `fromTo`; when one element gets two or more tweens on the same property, give the later ones `immediateRender: false`. No `Math.random`, `Date.now`, CSS transitions/@keyframes, `repeat`, `yoyo`. Eases: power2/power3/expo (or `none` for constant-speed travel); no bounce/back/elastic.
- Thai: reveal per word/phrase, never per character; each authored line its own nowrap span; line-height ≥ 1.45; a reveal span never adds whitespace that is not in the authored string.
- Type floor: English chips/tiles ≥ 28px; Thai labels and sublines ≥ 32px where the layout allows, never below 28px. Contrast ≥ 4.5:1 for every text (recede by colour, not by opacity on text).
- Everything stays above y = 880 and inside x 96–1824; frames 02–15 keep y < 130 empty; frames 11–15 keep the rail band y 130–290 empty.
- Keep the copy exactly as it is; apply the listed fixes; do not redesign beyond them. If a fix is impossible as written, do the nearest faithful version and say why.

## Verify (required)
- Snapshots of YOUR window only, at the global times your packet lists (add others if needed): 
  `timeout 900 ../../scripts/hf snapshot --at <t1>,<t2>,... --no-end --describe false -o /tmp/claude-0/-home-user/1121b491-8007-57bd-b63f-7637430f055a/scratchpad/r2/<frame_id>/run<N> .`
  At most 8 times per run and at most 4 runs in total (15 other fixers share this 4-CPU machine). Always pass `--describe false`. Open every PNG with the Read tool and look: overlaps, clipping, Thai tone marks, contrast, empty or crowded areas, the settled final state, and that each fix is visibly in place. Optional zoom: `--zoom x,y,w,h --zoom-scale 2`.
- `node ../../harness/check-glyphs.mjs .` and `node ../../harness/check-copy-fidelity.mjs .` must show `ok` for your file (ignore other files' lines).
- `timeout 600 ../../scripts/hf lint` must show 0 errors for your file.
- Run no other CLI commands (no render, check, preview, npm/npx, network).

## Reply (≤ 12 lines)
File written; each fix applied (one line each) with the global time where it is visible; any deviation and why; anything the orchestrator should look at first.
