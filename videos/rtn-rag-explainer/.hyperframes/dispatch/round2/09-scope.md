# Round-2 fix packet — 09-scope

- File: compositions/frames/09-scope.html (the ONLY file you edit)
- Global window: 79.0–89.0 s (frame length 10 s; root/ground data-duration 10.5). Global time = 79 + local time.
- Storyboard block: STORYBOARD.md '## Frame 9 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P2] 'ACL' is never glossed, and the English chips 'Identity' and 'ACL' are never visually tied to their Thai meanings 'ตัวตน' and 'ทะเบียนเอกสาร' in the headline.

**Fix:** No copy change. When 'Identity' appears (local 1.4), draw a 3 px blue underline under 'ตัวตน' in headline line 2 over 0.3 s. When 'ACL' appears (local 2.2), draw the same underline under 'ทะเบียนเอกสาร'. Hold both underlines to the end of the frame.

Evidence (draft 2, current global timing): still-09-scope.png: the headline at y≈250–300 and the Identity chip (x≈492–675, y≈378–430) and ACL chip (x≈575–670, y≈583–633) have no linking cue.

### 2. [P2] The Identity avatar is a solid blue generic figure (x 125–235, y 385–495). It does not match the grey ring avatars of กำลังพล ก / ข in 08, so the person who asked in 08 is not recognisable as the 'ตัวตน' here.

**Fix:** Reuse the 08 avatar component (same ring and figure) at 110 px. Colour only the ring in the brand blue to mark it as active.

Evidence (draft 2, current global timing): still-09-scope.png versus still-08-two-people.png: the two avatars are visibly different components.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- The frame-08 avatar markup is in compositions/frames/08-two-people.html; copy its look (ring + figure) into your own prefixed SVG; ring stroke cobalt.
