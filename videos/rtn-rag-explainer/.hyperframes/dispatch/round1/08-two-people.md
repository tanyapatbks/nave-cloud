# Round-1 fix packet — 08-two-people

- File: compositions/frames/08-two-people.html (the ONLY file you edit)
- Global window: 70.0–79.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 70 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 8 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P1] The denied half of the comparison, which carries brief point 8, is the weakest thing on screen. 'ไม่มีสิทธิ์' is grey on a beige pill, and 'ไม่พบเอกสารในสิทธิ์ของท่าน' is mid-grey on light grey, while the allowed side has a solid blue chip. Both permission chips hang off the inner card edges into the centre gutter, so they read as a toggle pair rather than attributes of each person.

**Fix:** Move 'มีสิทธิ์' fully inside the left card, 16px after 'กำลังพล ก' (about x 480-594, y 473-531). Move 'ไม่มีสิทธิ์' fully inside the right card, 16px before 'กำลังพล ข' (right edge at about x 1444). Restyle 'ไม่มีสิทธิ์' at equal weight: #3a3a3a text, 2px #3a3a3a border, 22px lock icon. Set 'ไม่พบเอกสารในสิทธิ์ของท่าน' to #3a3a3a at 40px with a 32px lock icon to its left. Copy unchanged.

Evidence (draft 1, old timing — global times there were pre-retime): still-08: 'มีสิทธิ์' (x 779-893) and 'ไม่มีสิทธิ์' (x 1016-1156) straddle the card edges at x 850 and x 1070 (y 473-531). Measured 'ไม่มีสิทธิ์' at about #616056 on #E4E2DC and the right result at about #656462 on #EBE9E7 (about 4.6-4.9:1), against the solid blue allowed chip.

### 2. [P1] The deck's '✓' renders as a symmetric 'V' from a fallback font, so the result chip reads 'V พบ: นโยบาย69', which is easily confused with the 'v02' token. Frame 10's ✓ renders correctly.

**Fix:** Replace the U+2713 text glyph with the same SVG check icon used in frame 10's '✓ ขอบเขตก่อน แล้วค่อยค้น' label, sized to the chip's cap height (about 22px) in the chip's green (#0F8A5F).

Evidence (draft 1, old timing — global times there were pre-retime): still-08, zoom of the chip at x 444-703, y 668-726: the leading glyph is a plain 'V'. still-10's right label shows a true check.

### 3. [P2] Both cards keep their entry perspective tilt for the whole hold, so the result text sits on slanted baselines and the resting state looks unfinished.

**Fix:** Tween both cards' rotateX, rotateY and skew to exactly 0 by local 3.5 s (global 71.5), before the left result lands at 4.0 s, and hold them flat to the end.

Evidence (draft 1, old timing — global times there were pre-retime): still-08: the left card's bottom edge runs from y about 873 at x 102 to about 848 at x 850, and the right card is mirrored. The baseline of 'ไม่พบเอกสารในสิทธิ์ของท่าน' visibly slants. strip-08 shows no untilt from 70.0 to 76.5 s.

## Orchestrator notes (take precedence over the fixes above where they conflict)

- Use the shared SVG check icon from frame.md component 6 for '✓ พบ: นโยบาย69' (the ✓ character must not be rendered as text). Keep the copy string otherwise exact.
