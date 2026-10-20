# Round-3 fix packet — 07-rerank

- File: compositions/frames/07-rerank.html (the ONLY file you edit)
- Global window: 62.0–70.0 s (frame length 8 s; root/ground data-duration 8.5). Global time = 62 + local time.
- Storyboard block: STORYBOARD.md '## Frame 7 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P1] Round-2 ask not resolved. The re-sort runs about 1.5 s (scored and unsorted at 63.0 s, settled at 64.5 s), not about 2 s, and rows still sit on top of each other mid-move. At 63.5 s the highlighted top-score row covers slot 4, whose blue bar shows beneath it, and a gap opens between slots 5 and 6. At 64.0 s the lifted third row covers most of the row below, and that row's bar peeks out, so the list reads as a doubled, jumbled pile. The scored-but-unsorted state is held for no time, so viewers never read the bars as scores before they move.

**Fix:** Bars fill from local 0.5 to 0.8 s, then hold still until local 1.0 s (63.0 s). Sort from local 1.0 to 3.0 s (63.0–65.0 s, power2.inOut), staggering each row's start by 0.06 s in final-rank order. Rows moving up travel on a track offset +40 px in x, above the other rows with a soft shadow, and return to x=0 over the last 0.3 s. Rows moving down stay at x=0 at 60% opacity while in flight. No two rows may share the same x track while their bars are within 24 px vertically. Keep the deck cues after it: Top 3 at local 3.2 s, LLM chip at 4.0, answer at 4.4, citation at 4.9.

Evidence (draft 3): strip-07-rerank.png (zoomed cells): 63.0 s unsorted with filled bars and the highlighted row in slot 5; 63.5 s highlighted row over slot 4 with that row's bar visible under its bottom edge and a gap at slot 5/6; 64.0 s rows 1–3 lifted, row 3 overlapping row 4 whose bar peeks out; 64.5 s settled.

### 2. [P2] The chip 'LLM / ระบบอื่น' uses a CPU icon. The headline says 'AI', and the answer line and frame 10 show the AI as a ✦ spark, so nothing visually ties 'LLM' to 'AI' for a non-technical viewer.

**Fix:** Replace the CPU icon in the 'LLM / ระบบอื่น' chip with the same ✦ spark glyph used at the start of the answer line and in frame 10's AI circle, at the same size as the current icon (about 24 px). Do not change the copy.

Evidence (draft 3): still-07-rerank.png: the chip at x≈1000–1270, y≈440–490 shows a chip/CPU outline icon, while '✦ คำตอบ พร้อมแหล่งอ้างอิง' sits directly below it.

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- The rows are already dealt from a pile at 0.4–0.89 s; keep that, finishing by 0.9 s, then hold the scored-but-unsorted list still to 1.0 s as fix 1 says.
