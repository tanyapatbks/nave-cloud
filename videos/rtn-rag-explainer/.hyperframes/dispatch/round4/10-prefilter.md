# Round-4 fix packet — 10-prefilter

- File: compositions/frames/10-prefilter.html (the ONLY file you edit)
- Global window: 89.0–101.0 s (frame length 12 s; root/ground data-duration 12.6). Global time = 89 + local time.
- Storyboard block: STORYBOARD.md '## Frame 10 —' — Scene lines plus every 'Round-N revisions' line (the spec).

## Fixes from critic round 4

### 1. [P1] The wrong-path leak, the one reason the left method is wrong, ends as a knot. The dashed lock box (x 705–768, y 367–445) overlaps the residue box's top-right corner. A dotted vertical at x≈725 runs from it down past the end of the จำนวนผล pill to สรุป. A dotted red line at y≈515 and the solid blue '→' at y≈495 both enter the small AI node about 20 px apart. And from about 96 s the left AI node fades to pale lavender while the leak still ends in it, so the final state reads as 'the AI received nothing'.

**Fix:** (1) Move the lock box fully above the residue box: y 318–381, same x, at least 16 px above the box top (y≈400).
(2) Route the trails as a comb: each residue chip's dotted trail runs straight right from its pill end to one vertical collector at x=766 (24 px outside the box edge at 742). The collector starts at the lock box's bottom-right corner.
(3) Replace the solid blue arrow with one 3 px dotted red arrow from the collector at y=495 into the AI node, and delete the second dotted line at y≈515.
(4) Keep the left AI node at full blue to the end of the frame, with a 3 px ring in the residue red of the '× ค้นทั้งคลัง แล้วค่อยกรอง' label. To shift emphasis to the right path, dim only the left document grid, to 60%.

Evidence (draft 4): still-10-prefilter.png zoom of x 510–870, y 350–610: the lock box overlaps the box corner. The vertical dotted trail crosses the จำนวนผล trail end. A dotted line at y≈515 and the blue arrow at y≈495 enter the lavender AI circle. strip-10 95.0 s: the AI node is still solid blue. 96.5 s onward: lavender.

### 2. [P2] The two panel labels are placed differently. '× ค้นทั้งคลัง แล้วค่อยกรอง' starts 295 px inside its panel; '✓ ขอบเขตก่อน แล้วค่อยค้น' starts 27 px inside its panel. The side-by-side comparison looks unbalanced.

**Fix:** Move the left label pill so it starts at x=156 (28 px inside the panel at x=128), matching the right label's inset (x≈1079 in a panel at x=1052). Keep both on the panels' top borders (y 242–302).

Evidence (draft 4): still-10-prefilter.png: left pill x≈423–840 over a panel starting x=128; right pill x≈1079–1503 over a panel starting x=1052.

## Orchestrator notes (take precedence where they conflict)

- Global lowest-text guide: Adopt a lowest-text guide of y≈840 for takeaway copy. Frame 03 is handled by its fix 2. In frame 10, move both rule lines up 48 px (line 1 top ≈727, 40 px below the panels' bottom at ≈687), so line 2 ends by y≈837.
- Keep the round-3 timing (residue alone 92.8–94.3 s, rule lines 7.6 / 8.1 s local).
