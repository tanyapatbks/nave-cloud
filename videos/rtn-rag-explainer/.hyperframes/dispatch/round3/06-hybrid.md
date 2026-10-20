# Round-3 fix packet — 06-hybrid

- File: compositions/frames/06-hybrid.html (the ONLY file you edit)
- Global window: 50.0–62.0 s (frame length 12 s; root/ground data-duration 12.5). Global time = 50 + local time.
- Storyboard block: STORYBOARD.md '## Frame 6 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P1] Round-2 ask only partly met. The beat showing what Keyword finds that Vector misses, and the reverse, is drawn but cannot be read at 1x. At 57.5 s the keyword-only table tile (lane 1 slot 2) and the vector-only scan tile (lane 2 slot 4) get a double outline. The 'missed' slots are 1 px dashed boxes in #B7B5B3 (about 1.7:1 on the lane grey), and the tiles are about 56×72 px. The square markers (keyword) and circle markers (vector) have no legend on the Keyword and Vector chips. 'รวมผล' and the stack arrive at 58.5 s, so the beat lasts about 1.5 s. At about 60.0 s the merged stack reorders with no explanation (doc moves from back to front), which looks like ranking before 07. Brief point 6 ('do not rely on vector alone') does not land for a non-technical viewer.

**Fix:** (1) Legend: put a 16 px filled square before 'Keyword' inside its chip and a 16 px filled circle before 'Vector', in the same blue as the tile corner markers. (2) Tiles: 56×72 → 64×88 px with 12 px gaps (x 1252–1544 per lane). Missed slots: 3 px dashed #6B675C border with a centred 28 px ✕ in #6B675C. (3) Beat, local 7.3–9.3 s (57.3–59.3 s): dim every lane tile except the two unique hits to 30%. From 7.3 to 8.3, scale the keyword-only table tile to 1.2× with a 4 px blue ring pulse; at the same moment pulse the dashed slot below it in lane 2 and thicken the question-card underlines under '69' and 'ศซบ.' from 3 to 6 px. From 8.3 to 9.3, do the same for the vector-only scan tile, the dashed slot above it in lane 1, and the ellipse around 'แนวทางปฏิบัติ'. (4) Bring in 'รวมผล' and the stack at local 9.4 s (deck cue 8.4 s; update the storyboard cue so the deck regenerates), and delete the stack reorder at about local 10.0 s. The stack stays static from 9.9 s to the cut at 12.0 s.

Evidence (draft 3): still-06-hybrid.png: Keyword and Vector chips have no shape marker; tiles at x≈1260–1532 are about 56×72 px; the dashed empty slot measured #B7B5B3 on #ECEAE6 = 1.7:1. strip-06-hybrid.png (zoomed): double outlines at 57.5 and 58.0 s, รวมผล stack at 58.5 s; stack order changes between 59.5 s (doc at the back) and 60.0 s (doc in front), and the lane tiles fade at 60.0 s.

### 2. [P2] The Metadata lane shows only its two filter chips, 'ปี 2569' and 'หน่วย สสท./ศซบ.'. It visibly does nothing: the column-3 tiles in lanes 1–2 fade at 57.0 s, but nothing links that fade to the metadata filter. The right half of lane 3 is an empty grey slab.

**Fix:** At local 7.0 s (57.0 s), draw a 2 px blue line from the right end of the 'หน่วย สสท./ศซบ.' chip up the inside of the lane boxes to the column-3 tiles of lanes 1 and 2 (x≈1430). Over 0.4 s, strike each of those two tiles with a 3 px grey diagonal while it fades to 25%, then fade the line out at 7.6 s, before the miss beat.

Evidence (draft 3): still-06-hybrid.png: lane 3 (y 640–795) has no tiles right of x≈1180; the column-3 tiles in lanes 1–2 (x≈1405–1460) are faded, with no visible cause. strip-06-hybrid.png, 57.0 s: the fade coincides with the metadata chips landing.

### 3. [P2] The question card reads 'แนวทางปฏิบัติ ปี 69 ของ ศซบ.' with a visible gap of about 12 px after the ellipse around 'แนวทางปฏิบัติ'. The deck, and the same card in 08, read 'แนวทางปฏิบัติปี 69 ของ ศซบ.' with no gap, so the 'same question' looks slightly different.

**Fix:** Draw the ellipse as an absolutely positioned overlay (it must not affect text layout), with −6 px horizontal inset, so the text flows exactly as in 08: 'แนวทางปฏิบัติปี 69 ของ ศซบ.'.

Evidence (draft 3): still-06-hybrid.png: the ellipse ends at x≈440 and 'ปี' starts at x≈452. still-08-two-people.png: 'แนวทางปฏิบัติปี' is set solid, with no gap.

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- ORCHESTRATOR OVERRIDE on the merge: instead of deleting the late reorder only, build รวมผล as a fan of EIGHT sheets (global count fix): the three marked hits in front, fully visible with their lane markers — table (■), scan (●), and the example document (■●) in the middle/front with its cobalt outline — plus five plain sheets behind in 6px steps. No reorder at all; static from settle to the cut. Cue: รวมผล at 9.4 s (deck updated).
- Also apply the global count fix: the pile shows eight sheets, so frame 07 can deal eight rows from it.
