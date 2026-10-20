# Round-4 fix packet — 01-hook

- File: compositions/frames/01-hook.html (the ONLY file you edit)
- Global window: 0.0–9.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 0 + local time.
- Storyboard block: STORYBOARD.md '## Frame 1 —' — Scene lines plus every 'Round-N revisions' line (the spec).

## Fixes from critic round 4

### 1. [P2] Three things reflow at once between 4.0 and 4.5 s in the left column. '120+' shrinks to about half height, the subtitle shrinks, and the five modality chips drop about 106 px (y≈574 → ≈680). Then the headline types into the gap at 5.0 s while the document wall dims and one card is highlighted. It reads as a layout jump.

**Fix:** Place the chip row at its final y (top ≈656, as in still-01) when it first appears at local 2.4 s, so it never moves. Animate only the '120+' and subtitle shrink, over local 3.9–4.5 s (ease-in-out). Dim the document wall over local 4.3–4.6 s. Keep the headline on its deck cue at local 4.6 s.

Evidence (draft 4): strip-01-hook.png 4.0 s → 4.5 s → 5.0 s: the chips sit lower in each cell while '120+' and the subtitle shrink; in the 5.0 s cell the headline is typing into the opened gap. still-01: chips at y≈656–705.

### 2. [P2] The three-step roadmap is fully readable for only about 0.5 s before it becomes the persistent tracker. At 8.0 s only pills 1 and 2 are showing (pill 3 has not appeared), and pill 3 settles only by 8.5 s, just before the 9.0 s hand-off. The still-01 capture catches pill 3 at 3.2:1, mid-fade.

**Fix:** Keep the deck cue at local 8.0 s but compress the stagger to 8.0 / 8.1 / 8.2 s with 0.25 s fades, so all three pills reach the persistent-tracker colour (text ≈#67635A, 5.6:1) by local 8.45 s and hold unchanged until the cut. Do not change position or size; those already match.

Evidence (draft 4): strip-01-hook.png 8.0 s: '1 อ่านได้' and '2 ค้นเจอ' only. 8.5 s: all three; pill 3's downscaled contrast (3.53) equals the persistent tracker's in strip-02 at 16.0 s. still-01: '3 ตามสิทธิ์' text rgb(143,139,129) = 3.19:1 vs pills 1–2 at 5.6–5.8:1.

## Orchestrator notes (take precedence where they conflict)

- Keep the tracker geometry and colours exactly as they are (they match the persistent chrome).
