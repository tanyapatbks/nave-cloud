# Digital Navy / NAVE explainer — motion design spec

Date: 2026-10-20 · Status: built autonomously at the requester's request · Branch:
`claude/digital-navy-nave-motion-68qbaw`

## Goal

The sequel to the RTN permission-aware RAG explainer (`videos/rtn-rag-explainer`, spec
`2026-10-20-rtn-rag-motion-design.md`), in the same look and motion grammar. It answers the
requester's question "what kind of future is called a Digital Navy?", turns the RTN's
data-management problem into an opportunity, introduces NAV Ecosystem (NAVE | นาวี) as the
RTN's secure AI workspace, and walks the requester's five-stage roadmap with today's
checkpoint (between stage 1 and stage 2).

Requester's terms: "High-quality Claude Motion", thorough and careful, same theme as the
first film. Clarifications received during the build: the two hard-to-read notebook lines
("Documents — การดำเนินงานของหน่วยขึ้นตรง"; "เก็บข้อมูลที่ไหน · หน้าเว็บเป็นยังไง · Outputs
ต้องการประสิทธิผลแบบไหน"); skip the web-demo page; stage 1 is titled "Demo Only".

## Content contract (every requester point appears)

| Requester point | Frame |
|---|---|
| Opening question: what future is called a Digital Navy? | 01 (answered in 16) |
| Shared challenge of ทร. ทบ. ทอ.: bring tech in smoothly, seamlessly, with tangible results | 02 |
| RTN data problem: where to start, what to do, how to manage and store files (overall and per unit); security and access rights | 03 |
| "แต่!" — not a problem but an opportunity | 04 |
| The move led by กรมการสื่อสารและเทคโนโลยีสารสนเทศทหารเรือ with NAVE, aligned with command's needs in many dimensions | 05 |
| MFA for internal systems | 06 |
| A plan to support PQC (stated as a plan) | 07 |
| NAVE as the RTN AI workspace: one place, each person's identity + policy, linked units and internal apps | 08 |
| Prompting / commanding NAVE (stylised composer, not the demo page) | 09 |
| Five stages and today's checkpoint | 10, then 11–15 one stage each |
| The close answers the question and lands NAVE \| นาวี | 16 |

The frame-by-frame plan with exact copy and cue times is
`videos/digital-navy-nave/STORYBOARD.md`; the brief is `videos/digital-navy-nave/BRIEF.md`;
the requester's words and the notebook transcription are in
`videos/digital-navy-nave/capture/extracted/visible-text.txt`.

## Decisions

- **Same engine and workflow as film 1:** HyperFrames 0.8.181 + GSAP 3.15.0 (local copies),
  the `faceless-explainer` pipeline run autonomously, no narration (on-screen copy is the
  content). The CLI runs only through `scripts/hf`.
- **Same look:** film 1's `frame.md` design system (cream ground, one cobalt accent, grey
  ladder, tinted cards, no shadows; Chulabhorn Likit for Thai/Latin, IBM Plex Mono for
  chips, IBM Plex Sans Thai fallback), plus a project section with 13 NAVE components
  (identity card, composer, policy scope, MFA doors, PQC lock, roadmap rail, stage header,
  tiles…).
- **Three chapters:** 1 โจทย์ (frames 02–03, introduced by 01) · 2 NAVE (04–09, opening on the turn) · 3 เส้นทาง (10–15), then the close (16), shown by
  a persistent tracker. Crossfade at chapter changes, push-slide left within a chapter,
  blur-crossfade into the close.
- **Honesty rule:** chapter 2 shows the target picture of NAVE, not a working product. Frame
  09 carries the tag "ตัวอย่าง · ภาพเป้าหมาย", frame 10 bridges with "ภาพเป้าหมายข้างต้น
  ไปถึงได้ทีละขั้น", PQC is drawn dashed as "planned", and stage 1's lists read "ขั้นนี้ทำได้แค่"
  / "ขั้นนี้ยังขาด". Demo values (น.อ.aaaaa, the ศซบ. question, the citation นโยบาย69 · v02)
  are callbacks to film 1 and are illustrative.
- **Persistent layers:** the tracker and term chip (`compositions/chrome.html`, frames
  02–15) and the roadmap rail with the "เราอยู่ตรงนี้" pin (`compositions/roadmap.html`,
  frames 11–15) are mounted above every transition by `harness/post-assemble.mjs`, driven
  by `layers.json`; `--sync` keeps their internal start times equal to index.html. Stages
  reached or in progress (1, 2) take a cobalt focus; stages not yet reached (3–5) take an ink
  focus, so the moving focus never reads as progress.
- **No web demo, no emblems:** the requester's demo was not reachable and they asked to skip
  it; NAVE appears only as diagrams. No ships, anchors, flags, uniforms, insignia, emblems,
  real product logos, URLs or people photos.
- **Length: 204.1 s (3:24), not the 180 s planned.** Every notebook item is on screen and
  readable at ≤ 17 Thai chars/s (`harness/check-copy.mjs`); review round 2 lengthened frames
  12 and 14 instead of cutting the requester's items.

## Quality harness

1. `harness/check-copy.mjs` (reading budget, line length, banned audience words, with the
   storyboard's `copy_allow`), `check-copy-fidelity.mjs` (every on-screen string is in the
   storyboard), `check-glyphs.mjs` (no tofu in the local fonts).
2. HyperFrames `lint` + `check` (runtime, layout, motion, WCAG AA contrast) on the assembled
   project.
3. `snapshot` stills at every Scene midpoint during the build.
4. Fresh-eyes critic panel (comprehension, legibility, motion, fidelity) on the rendered
   MP4's review pack (`harness/review-pack.sh`) against `qa/copy-deck.md`; the orchestrator
   verifies each finding and writes "Round-N revisions" into the storyboard; one fixer
   agent per frame applies them.
5. `harness/qa-mp4.sh`: spec (1080p30 H.264 yuv420p), frame count, no unplanned freeze over
   4 s, no black frames, contact sheets decoded from the MP4.
6. Sound version: `sound/cues.py` on the local sfx engine (pure synthesis, no third-party
   media), mastered to −16 LUFS, muxed without re-encoding the picture.

## Deliverables

- `videos/digital-navy-nave/renders/digital-navy-nave.mp4` (silent master) and
  `digital-navy-nave-sfx.mp4` (with sound); renders are not committed.
- Source: `videos/digital-navy-nave/` (compositions, storyboard, frame.md, layers, sound
  cue sheet); fonts are fetched by `scripts/fetch-fonts.sh`.
