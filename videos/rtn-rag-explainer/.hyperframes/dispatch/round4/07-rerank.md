# Round-4 fix packet — 07-rerank

- File: compositions/frames/07-rerank.html (the ONLY file you edit)
- Global window: 62.0–70.0 s (frame length 8 s; root/ground data-duration 8.5). Global time = 62 + local time.
- Storyboard block: STORYBOARD.md '## Frame 7 —' — Scene lines plus every 'Round-N revisions' line (the spec).

## Fixes from critic round 4

### 1. [P1] The round-3 scored-but-unsorted hold is effectively missing. At 62.5 s the eight rows are scored but unsorted (row 5 has the longest bar) and the headline is still finishing. By 63.0 s row 5 has already lifted onto the offset track and rows 7–8 have shifted right. The before-state lasts 0.5 s or less, so the re-sort has no visible reason for a lay viewer (brief point 7).

**Fix:** Have rows and score bars fully drawn, and the headline type-on finished, by local 0.4–0.5 s. Hold the list completely still from local 0.4 to 1.4 s (62.4–63.4). Start the re-sort at local 1.4 s and finish it by 3.1 s, so the 'Top 3' cut-line keeps its deck cue at local 3.2 s. The LLM chip (4.0), answer card (4.4) and citation (4.9) stay on their cues.

Evidence (draft 4): strip-07-rerank.png, zoomed. 62.5 s: unsorted bars, row 5 longest, headline just completing. 63.0 s: row 5 lifted right with a highlight border, rows 7–8 offset right. 63.5–64.0 s: re-sort in progress.

### 2. [P1] This round-3 ask ('no rows piling up') is not met. The winners' 'offset track' is only about 30 px right of the losers, so the winners slide over them. At 63.5 s a loser's icon peeks out behind a moving winner at the 5th–6th row band. At 64.0 s loser bars show under winners 2 and 3. The re-sort also runs only about 1.5 s against the roughly 2 s asked.

**Fix:** Within local 1.4–3.1 s, move rows so no two overlap on any frame:
(1) 1.4–1.75 s: the three winners slide right 720 px onto a clear track (x≈816–1496, empty until the Top 3 pill at 3.2 s and the LLM panel at 4.0 s).
(2) 1.75–2.35 s: the losers close up into slots 4–8 on the left track and dim to their final opacity.
(3) 2.35–2.75 s: the winners move vertically on the right track to the heights of slots 1–3.
(4) 2.75–3.1 s: the winners slide left into slots 1–3 at x=96.

Evidence (draft 4): strip-07-rerank.png zoomed at 3.5×. 63.5 s: a doubled icon at the left edge where a winner overlaps a loser row. 64.0 s: rows 2–3 sit over loser rows whose bars and icons show beneath, about 30 px further left.

### 3. [P2] Only row 1 has the blue selected border and lavender fill. Rows 2–3 above the 'Top 3' line look like ordinary rows (only their bar colour differs), so the chosen set does not read as one group.

**Fix:** When the Top 3 cut-line lands at local 3.2 s, give rows 2–3 a 2 px border in the cut-line blue at 50% opacity. Row 1 keeps its stronger fill as the cited source.

Evidence (draft 4): still-07-rerank.png: row 1 (y 300–356) has a blue border and lavender fill. Rows 2–3 (y 368–492) have the same light-grey border as rows 4–8.

## Orchestrator notes (take precedence where they conflict)

- The right-hand track must stay clear: nothing else is on screen at x 816–1496 before 3.2 s. Keep the deck cues 3.2 / 4.0 / 4.4 / 4.9 s.
