# Round-1 fix packet — 07-rerank

- File: compositions/frames/07-rerank.html (the ONLY file you edit)
- Global window: 62.0–70.0 s (frame length 8 s; root/ground data-duration 8.5). Global time = 62 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 7 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P0] In the settled state the three Top-3 slots above the cut line are empty dashed outlines, while the five rejected rows stay visible and blurred below it. The frame reads as 'nothing was selected and the losers were kept', which inverts the reranker's teaching point.

**Fix:** From local 4.0 s to the end, keep the three winning rows filled in place (x 96-776, y 300-492): solid card, full opacity, #1f2bd8 score bars, no blur. Do not swap them for dashed slots at local 4.5 s. At local 3.8 s, just before the answer card, draw a 2px #1f2bd8 arrow from the 'Top 3' pill's right edge (x 914, y 522) to the card's left edge (x 962, y 522). Push the five rows below the line back with opacity 0.35 only, with no blur.

Evidence (draft 1, old timing — global times there were pre-retime): still-07: three empty dashed outlines (y 300-355, 368-423, 436-491) above the blue line; five blurred rows with lavender bars below it (y 540-870). strip-07: at 65.0 s the rows are boxed above the line; at 65.5 s the slots are empty.

### 2. [P1] The payoff is back-loaded and cut short, and its order reverses the logic. The answer card, citation and 'LLM / ระบบอื่น' chip all arrive within about 1 s at the end, so the LLM chip that carries brief point 7 is visible about 1.3 s. It is the smallest element on screen (cap height 17px) and straddles the card's top border.

**Fix:** Use the static 64.0-65.5 hold. Bring in 'LLM / ระบบอื่น' at local 3.4 s (global 64.4), the answer card at 3.8 s and the citation at 4.3 s (deck cues now 5.3 / 4.2 / 4.8; copy unchanged). Extend the frame by 1.0 s so the full state holds at least 3.5 s, and shift later frames by 1.0 s. Move the chip fully inside the card's top-left (x 1000-1240, y 440-488) at 28px. Push the answer title, grey lines and citation down by 60px, so the card grows to y 421-748.

Evidence (draft 1, old timing — global times there were pre-retime): strip-07: card at 65.5 s, citation at 66.0 s, LLM chip at 66.5 s; 67.5 s is the last cell before the 68.0 s crossfade (strip-08); 64.0-65.5 s is static. still-07: chip at x 1550-1790, y 392-447, straddling the card's top border at y about 421.

### 3. [P2] The reranker's visible action, the example document moving from 5th to 1st, is marked only by a small blue icon outline and completes in about 0.5 s. The cut line is then drawn across row 4 before the rows make room.

**Fix:** From local 0.8 s, give the example row a #e6e7fb fill and a 2px #1f2bd8 outline. Slow the reorder to 1.0 s with ease-in-out (local 1.2-2.2 s). Shift rows 4-8 down by the gap height (0.25 s) before drawing the cut line into the empty gap, then pop the 'Top 3' pill.

Evidence (draft 1, old timing — global times there were pre-retime): strip-07: at 62.0 s the example row is 5th, distinguished only by a small blue-outlined icon; at 63.0 s it is 1st. At 63.5 s the cut line and 'Top 3' pill are drawn across row 4's content.

## Orchestrator notes (take precedence over the fixes above where they conflict)

- The frame is now 8 s: set your root data-duration and ground clip data-duration to 8.5.
- Deck cues changed: 'Top 3' 2.4 s · chip 'LLM / ระบบอื่น' 3.4 s · answer line 'คำตอบ พร้อมแหล่งอ้างอิง' 3.8 s · citation 4.3 s. Follow the storyboard's Scene 3/4 order: arrow from the Top 3 pill to the card, card at 3.2 s, LLM chip inside the card's top-left at 3.4 s.
