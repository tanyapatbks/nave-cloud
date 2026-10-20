# Round-1 fix packet — 06-hybrid

- File: compositions/frames/06-hybrid.html (the ONLY file you edit)
- Global window: 50.0–62.0 s (frame length 12 s; root/ground data-duration 12.5). Global time = 50 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 6 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P0] The frame animates the permission scope as a filter applied after search. Keyword and Vector mark their hits, then a vertical line sweeps across those found thumbnails while the lane-3 chips, including 'ขอบเขตสิทธิ์', light up, and everything merges at 'รวมผล'. That is the 'ค้นทั้งคลัง แล้วค่อยกรอง' pattern frame 10 marks as wrong, so it contradicts brief point 10.

**Fix:** Keep all copy. (a) Remove 'ขอบเขตสิทธิ์' from the lane-3 stack; lane 3 keeps 'ปี 2569' and 'หน่วย สสท./ศซบ.', laid out in one row starting at x 1226 with 12px gaps. (b) Shrink the lane boxes' right edge from x 1583 to 1559 (the thumbnail column shifts 24px left). At local 1.6 s (global 51.6), right after the question card and before the Keyword lane, draw the frame-09/11 dashed blue scope border (same dash, same shield pill) around all three lanes at x 776-1573, y 272-812. Put the 'ขอบเขตสิทธิ์' chip straddling the border's top-left (x about 800-960, y 250-294), so the query connector visibly enters the scope before any lane searches. (c) Delete the vertical sweep line that crosses the Keyword and Vector thumbnails at local 6.0-7.0 s; the lane-3 chips just light in place. (d) Add 1.0 s to the frame: lane starts 2.8 / 4.6 / 6.4 s, 'รวมผล' at 8.4 s, hold at least 3 s. Shift later frames by 1.0 s, and update the deck to move the 'ขอบเขตสิทธิ์' cue to 1.6 s on the scope border.

Evidence (draft 1, old timing — global times there were pre-retime): strip-06 zoom, 56.0-57.0 s: a blue vertical line sweeps left to right over thumbnails already marked by Keyword and Vector, while 'ปี 2569', then 'หน่วย สสท./ศซบ.', light in lane 3. In still-06, 'ขอบเขตสิทธิ์' is the third lane-3 chip (x 1347-1500, y 740-775), and the 'รวมผล' bracket (x 1595-1640) merges it with the other two lanes.

### 2. [P1] 'Together they find what one method misses' (brief point 6: don't rely on vector alone) is encoded only in about 12px lavender corner markers on faint thumbnails. Doc 2 (table) is a Keyword-only hit and doc 4 (scan) a Vector-only hit, but the merged stack is three generic cards. Three 'นโยบาย' captions that are not in the deck add reading load, and one of them is grey.

**Fix:** Give hit thumbnails a solid 2px #1f2bd8 outline, a #e6e7fb fill and a 20px marker; set misses to 30% opacity. Keep the current hit pattern (Keyword: docs 1-3; Vector: docs 1 and 4, doc 3 faded). At 'รวมผล', slide each lane's hit cards into the merged stack (0.5 s, 0.08 s stagger), so doc 2 visibly arrives only from Keyword and doc 4 only from Vector; make doc 2 the stack's front card. Delete the three 'นโยบาย' captions at y about 585-605; the subline 'แนวทางปฏิบัติ ≈ นโยบาย' already says it.

Evidence (draft 1, old timing — global times there were pre-retime): still-06: lavender squares on Keyword thumbnails 1-3 (x 1290-1475, y 325-338) and dots on Vector 1 and 4, with 3 faded (y 478-492), on low-contrast 70x90 thumbnails. 'นโยบาย' captions under Vector 1, 3 and 4, the third pale grey. The 'รวมผล' stack (x 1656-1820, y 447-650) shows no per-lane origin.

### 3. [P2] The highlight oval around 'แนวทางปฏิบัติ' crowds 'ปี' and the search icon.

**Fix:** Give the oval 10px clearance on both sides: shift '...ปี 69 ของ ศซบ.' right by 8px (the card has about 36px spare, since text ends at about x 686 in a card ending at x 722) and keep 12px between the oval's left stroke and the search icon.

Evidence (draft 1, old timing — global times there were pre-retime): still-06: the oval (x 163-425, y 343-413) has its right stroke about 3px from 'ปี', and its left stroke nearly touches the magnifier at x 128-160.

## Orchestrator notes (take precedence over the fixes above where they conflict)

- The frame is now 12 s: set your root data-duration and ground clip data-duration to 12.5 (12 s + 0.5 s transition overlap).
- Deck cues changed: 'ขอบเขตสิทธิ์' chip at 1.6 s (on the scope boundary), lanes at 2.8 / 4.6 / 6.4 s, 'รวมผล' at 8.4 s. The lane-3 filter row shows only 'ปี 2569' and 'หน่วย สสท./ศซบ.'.
- REJECTED sub-point: do NOT make doc 2 the stack's front card. The example document (doc 1, cobalt outline) stays on top, for continuity with frame 07 where it rises to rank 1. Doc 2 and doc 4 must still visibly arrive from their own lanes.
- The dashed scope boundary must look exactly like frame.md component 4 and the one in compositions/frames/09-scope.html (dash, stroke, radius, label pill style).
