# Round-2 fix packet — 02-ingest

- File: compositions/frames/02-ingest.html (the ONLY file you edit)
- Global window: 9.0–20.0 s (frame length 11 s; root/ground data-duration 11.5). Global time = 9 + local time.
- Storyboard block: STORYBOARD.md '## Frame 2 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P2] The lane visuals are jammed against the lane borders while a 275 px band below the lanes is empty. The PDF stack's back sheet top is at y≈320 against lane 1's border at y≈315. The scan tile bottom is at y≈625 against lane 2's bottom at y≈635. The chart tile bottom is at y≈793 against lane 3's bottom at y≈805. The band y≈805–1080 is empty.

**Fix:** Make each lane 180 px tall (lane 1 y 300–480, lane 2 y 500–680, lane 3 y 700–880) with the input/arrow/output group vertically centred, keeping at least 16 px inner padding top and bottom.

Evidence (draft 2, current global timing): still-02-ingest.png: all three lane visuals sit 5–12 px from a lane border, and the lower 275 px of the frame is empty.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- Keep the round-1 timing (descriptions at 2.6 / 5.4 / 8.2 s) and the ASCII ink-map beat. File is long; keep markup compact.
