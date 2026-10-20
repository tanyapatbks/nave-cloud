# Round-4 fix packet — 08-two-people

- File: compositions/frames/08-two-people.html (the ONLY file you edit)
- Global window: 70.0–79.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 70 + local time.
- Storyboard block: STORYBOARD.md '## Frame 8 —' — Scene lines plus every 'Round-N revisions' line (the spec).

## Fixes from critic round 4

### 1. [P2] In the 'ไม่มีสิทธิ์' chip and the 'ไม่พบเอกสารในสิทธิ์ของท่าน' pill, the stacked marks of สิทธิ์ (ิ + ์) sit about 3–7 px from the top border, against about 10 px of bottom padding, so both pills look cramped and top-heavy.

**Fix:** Increase the height of all four pills in the frame ('มีสิทธิ์', 'ไม่มีสิทธิ์', the green '✓ พบ: นโยบาย69' and the neutral result pill) by 6 px, and move their text baselines down 3 px. The green badge and the neutral pill stay equal height.

Evidence (draft 4): still-08-two-people.png zoomed: '์' in ไม่มีสิทธิ์ (chip x 1262–1437, y 472–530) and in สิทธิ์ (pill x 1170–1685, y 670–730) nearly touches the top outline.

## Orchestrator notes (take precedence where they conflict)

- Equal height for the green badge and the neutral pill is required.
