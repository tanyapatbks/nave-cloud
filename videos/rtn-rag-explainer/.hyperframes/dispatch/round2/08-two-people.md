# Round-2 fix packet — 08-two-people

- File: compositions/frames/08-two-people.html (the ONLY file you edit)
- Global window: 70.0–79.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 70 + local time.
- Storyboard block: STORYBOARD.md '## Frame 8 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P1] The 'found' payoff washes out next to the denied side. '✓ พบ: นโยบาย69' is green #307F68 on mint #CCD9DB, measured at 3.33:1, at about 28 px. The denied line 'ไม่พบเอกสารในสิทธิ์ของท่าน' measures 10.07:1 at about 36 px. On a projector the eye lands on the denied side, while the frame needs the two outcomes to carry equal weight.

**Fix:** Turn the found chip into a solid badge: background #0B6A45 (the global success-solid token), white text and check icon (6.64:1), Thai text at 34 px to match the denied line, pill height about 60 px. Keep its left edge at x≈441, vertically centred on the doc tile (y≈700).

Evidence (draft 2, current global timing): still-08-two-people.png: the found chip is small, pale green on mint, while the denied line is large dark grey. Pixel measurement gives 3.33:1 versus 10.07:1.

### 2. [P2] The cards still enter with a 3D perspective swing. At 71.0 s both cards are visibly tilted, and at 71.5 s the right card is still skewed while 'ไม่มีสิทธิ์' and 'กำลังพล ข' are already on it. The cards are flat from 72.0 s, so the round-1 ask holds in the settled state, but the badges land on a tilted card.

**Fix:** Finish the entrance (rotate to 0) by local 1.1 (71.1 s), before the first badge at local 1.2. Alternatively, replace the 3D swing with a 24 px rise plus fade over local 0.5–1.1.

Evidence (draft 2, current global timing): strip-08-two-people.png, enlarged: 70.5–71.5 s show skewed card edges with the right badge visible at 71.5 s; 72.0 s is flat.

### 3. [P2] The climax 'same question, different answer' freezes from 75.5 s to 79.0 s (seven identical samples) with nothing guiding the eye between the two outcomes.

**Fix:** At local 5.8, pulse the found badge 1.0→1.06→1.0 over 0.4 s. At local 6.4, pulse the right card's lock and the 'ไม่มีสิทธิ์' chip the same way, and draw a 2 px accent underline under 'ไม่พบเอกสารในสิทธิ์ของท่าน' over 0.4 s. Keep everything else still.

Evidence (draft 2, current global timing): strip-08-two-people.png: the 75.5, 76.0, 76.5, 77.0, 77.5, 78.0 and 78.5 s cells are identical.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- Found badge: solid #0B6A45 with white text + the shared SVG check (success-solid).
