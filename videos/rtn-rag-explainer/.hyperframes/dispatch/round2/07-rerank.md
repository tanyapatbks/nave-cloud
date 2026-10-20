# Round-2 fix packet — 07-rerank

- File: compositions/frames/07-rerank.html (the ONLY file you edit)
- Global window: 62.0–70.0 s (frame length 8 s; root/ground data-duration 8.5). Global time = 62 + local time.
- Storyboard block: STORYBOARD.md '## Frame 7 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P1] Reranking, the concept this frame teaches, is its shortest beat. At 63.0 s the eight scored rows appear with the winner highlighted in slot 5. At 63.5 s the rows collapse onto each other: only four are distinct, and the highlighted row overlaps the one below. At 64.0 s the list is fully sorted. After the citation lands, nothing moves from about 66.5 s to 70.0 s.

**Fix:** Run the sort over local 1.0–3.0 (63.0–65.0 s). Move the three winners first, one at a time with a 0.15 s stagger, each lifted above the other rows (raised z-index plus a 0 6px 16px shadow) so no two rows overlap; then settle the other five. Re-time the cut line and 'Top 3' to local 3.2, 'LLM / ระบบอื่น' to 4.0, the answer card to 4.4 and the citation to 4.9. This leaves about a 2.8 s hold and keeps the 8 s frame.

Evidence (draft 2, current global timing): strip-07-rerank.png, enlarged: at 63.0 s the highlighted row is in slot 5; at 63.5 s only four rows are visible and overlapping; at 64.0 s the list is sorted. The 66.5–69.5 s samples are identical.

### 2. [P2] Nothing ties the winning top row (blue outline, x 96–776, y 300–356) to the citation 'อ้างอิง: นโยบาย69 · v02' (x≈1047–1455, y≈650–708) about 700 px away, so the winning row and the cited document read as two separate things.

**Fix:** When the citation lands (local 4.9 after fix 1), pulse row 1's outline from 2 to 4 px and back, and scale the citation chip 1.0→1.05→1.0, both together over 0.5 s. Do not add a connector line; it would cross the Top 3 pill.

Evidence (draft 2, current global timing): still-07-rerank.png: row 1 is outlined, the citation sits at the bottom of the answer card, and no visual link connects them. In strip-07-rerank.png at 66.5 s the citation appears with no reaction in the list.

### 3. [P2] Continuity break: frame 06 ends on a รวมผล stack of 3 sheets, and frame 07 opens on 8 rows to rerank, so the reranker seems to receive more results than search returned.

**Fix:** Start the 8 rows stacked as one pile at row 1's position (x 96–776, y 300–356) with 4 px offsets. Deal them down to their slots over local 0.4–1.0 (0.07 s stagger) before the scores fill at 1.0, so the list reads as the merged pile spread out.

Evidence (draft 2, current global timing): still-06-hybrid.png: the รวมผล stack shows 3 sheets. strip-07-rerank.png at 62.5 s: 8 rows are already laid out.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- LLM chip and citation: 28px IBM Plex Mono (component 8).
- Use a lift (translate + subtle shadow allowed only during the move, removed at rest — frame.md has no shadows at rest) rather than a permanent shadow.
- Deck cues: Top 3 3.2 s, LLM 4.0 s, answer 4.4 s, citation 4.9 s.
