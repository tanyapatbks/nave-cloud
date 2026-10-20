# Round-2 fix packet — 01-hook

- File: compositions/frames/01-hook.html (the ONLY file you edit)
- Global window: 0.0–9.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 0 + local time.
- Storyboard block: STORYBOARD.md '## Frame 1 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P2] The fifth material chip 'ตาราง' (settled x≈735–867, y≈640–690) runs about 60 px onto the blurred document grid, which starts at x≈808, so its right half sits on a tile. During 2.4–4.8 s the grid behind it is still at full opacity.

**Fix:** Start the document grid at x≥920 for the whole frame (shift it right 112 px, or drop its first column), leaving at least 50 px of clear space after the chip row. If the grid must stay, cut the chip gaps from 12 to 8 px and the chip side padding by 4 px so the row ends at x≤790.

Evidence (draft 2, current global timing): still-01-hook.png: the ตาราง pill's right half overlaps the first grid column (x≈808–867). strip-01-hook.png 3.0 s: the chip row sits against undimmed tiles.

### 2. [P2] The film's only definition of RAG gets little time alone. The chip 'ค้นเอกสารจริงก่อน แล้วจึงตอบ' lands at 6.0 s and the tracker pops in at about 7.3–7.5 s, pulling the eye away. The frame is about 40% faded by 9.0 s. That leaves about 2.7 s at full opacity, only about 1.3 s of it without competition.

**Fix:** Move the tracker cue from local 7.3 to local 8.0 so the chip has 2.0 s alone. If runtime allows, add 0.5 s to frame 01 (exit crossfade at 9.25 instead of 8.75) and shift later frames by +0.5 s.

Evidence (draft 2, current global timing): strip-01-hook.png: no chip at 5.5 s, chip present at 6.0 s, no tracker at 7.0 s, tracker present at 7.5 s. strip-02-ingest.png 9.0 s: the frame 01 content is about 40% opacity.

### 3. [P2] The RAG definition chip (x 96–551, y 525–585) sits at the left margin under line 2. 'RAG' ends line 1 at x≈505–620. Only the shared blue links them, so the chip can read as a subtitle rather than as 'this is what RAG means'.

**Fix:** When the chip appears at local 6.0, draw a 2 px blue connector over 0.3 s from the RAG underline (x≈560, y≈417) down to the chip's top edge (x≈520, y≈525).

Evidence (draft 2, current global timing): still-01-hook.png: RAG is underlined at the end of line 1, the chip starts at the left margin under line 2, and nothing connects them.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- For the chip/grid overlap, prefer shifting the document wall right (or dropping its first column) over shrinking the chips; the chips must stay ≥ 28px after the 4.6 s move.
- Tracker cue is now local 8.0 s (deck updated). Its style/size must not change (it hands over to the persistent chrome at 9.0 s).
