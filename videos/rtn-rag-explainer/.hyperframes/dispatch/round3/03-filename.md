# Round-3 fix packet — 03-filename

- File: compositions/frames/03-filename.html (the ONLY file you edit)
- Global window: 20.0–32.0 s (frame length 12 s; root/ground data-duration 12.5). Global time = 20 + local time.
- Storyboard block: STORYBOARD.md '## Frame 3 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P1] The filename is the frame's subject, but in the settled state (27.5–32.0 s, the longest-read state) it is dimmed. Token text measures #7C7772 on the #F6F5E6 pills (about 4.0:1). The primary labels (หน่วย, เจ้าของ, ผู้นำเข้า…) are #7C7770 (about 4.1:1). The sub-labels 'กอง/แผนก', 'หน่วยขึ้นตรง' and 'เลข 10 หลัก', which carry brief point 3, are #AAAAA1 (about 2.2:1) and will wash out on a projector. The dim also starts at about 27.5 s, while the bridge 'สิทธิ์จริง…' is still typing, so the effect lands before its cause.

**Fix:** Set the sub-label colour to #5F5B50 (6.4:1 on #FCF8E5) at ≥30 px, and the primary labels to #3F3C35 (10.3:1). Never dim the token text: keep it at #3A3832 (10.7:1 on #F6F5E6). If the bridge needs emphasis, fade only the token pill fill and border to 60% opacity over 0.4 s, starting when the bridge finishes typing (local 8.5 s = 28.5 s), not at local 7.5 s.

Evidence (draft 3): still-03-filename.png (settled): pixel-measured sub-labels #AAAAA1 on #FCF8E5 = 2.2:1, labels #7C7770 = 4.1:1, tokens #7C7772 on #F6F5E6 = 4.0:1. strip-03-filename.png: tokens are at full contrast at 27.0 s and grey at 27.5 s, while the bridge shows only 'สิทธิ์จริง'.

### 2. [P1] Round-2 ask not resolved. The only visual cue that the filename is not the permission is a crossed padlock about 30 px wide, drawn as a thin grey line icon (#6C6A66). It floats in empty space at x≈945–975, y≈675–705 and is attached to neither the filename nor the bridge chip. At projection distance it is a speck, so the 'what it does not tell you' half of brief point 3 rests on the bridge text alone.

**Fix:** Delete the floating icon. Draw a 2 px dashed vertical connector at x=980 (under the '_' between 2600000001 and v02, clear of the ผู้นำเข้า and เวอร์ชัน labels), from the bottom of the filename row (y≈522) to the top edge of the bridge chip (y≈745). Centre an 80 px circle (3 px #B3261E outline, #FCF8E5 fill) on it at y≈695. Inside, put a 52 px closed padlock with a 4 px #B3261E diagonal strike. Pop the circle in at local 7.6 s (27.6 s, with the bridge), scale 0.8→1 over 0.3 s, and draw the strike over 0.3 s right after.

Evidence (draft 3): still-03-filename.png, crop x 600–1300 y 420–860: a single ~30 px grey slashed-padlock outline, not attached to anything, about 40 px above the bridge chip and about 30 px below 'เลข 10 หลัก'. strip-03-filename.png, 28.0–31.5 s: the icon is barely visible at cell scale.

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- ORCHESTRATOR OVERRIDE on fix 2: draw the 80px circle, padlock and strike in ink #3F3C35 (not red #B3261E — red is reserved for frames 08 and 10). Keep the dashed connector and the timing.
