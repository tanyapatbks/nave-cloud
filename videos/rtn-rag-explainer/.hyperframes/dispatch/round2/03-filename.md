# Round-2 fix packet — 03-filename

- File: compositions/frames/03-filename.html (the ONLY file you edit)
- Global window: 20.0–32.0 s (frame length 12 s; root/ground data-duration 12.5). Global time = 20 + local time.
- Storyboard block: STORYBOARD.md '## Frame 3 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P2] Nothing visual ties the bridge 'สิทธิ์จริง อยู่ในทะเบียนเอกสาร' to the filename above it. It enters at about 27.5 s as a separate chip (x 673–1247, y 745–835) while the token row stays at full strength. The contrast 'the name is not the permission' rests on the single word 'จริง'.

**Fix:** Make it visual only, with no copy change. At local 7.6, when the bridge enters, fade the token row and its labels to 55% over 0.3 s. Place a 36 px grey slashed-padlock icon centred at (960, 690), between the label row (bottom y≈640) and the bridge (top y≈745). Pulse the bridge's registry icon (≈720, 790) 1.0→1.15→1.0 over 0.4 s.

Evidence (draft 2, current global timing): still-03-filename.png: the bridge chip sits alone below the row with no connector or contrast cue. strip-03-filename.png 27.5–31.5 s: the row stays at full opacity throughout.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- Draw the slashed padlock as inline SVG (grey #6b6b6b, 36px), no text.
