# Round-6 (final) packet — 07-rerank

- File: compositions/frames/07-rerank.html (the ONLY file you edit)
- Global window (124.5 s film): 68.5–76.5 s (frame length 8 s). Global time = 68.5 + local time.
- Storyboard block: STORYBOARD.md '## Frame 7 —'. Its last note is the spec for this round:
  > Round-6 revisions (final): the scored list holds still to 1.6s; the right→up→left re-sort runs 1.6–3.0s inside x 790–1500; all three rows above the cut share one fill (#E6E6F7) and a 2px cobalt border; rank 1 keeps its dark-top-bar doc icon as the cited document.

## What to do

- Frame length unchanged (8 s, root 8.5).

## Draft-5 critic fixes (apply; where timing or pixel values differ from the Round-6 note above, the note wins)

- [P2] The scored list holds still only about 0.8–1 s (66.5–67.3 s) before the winners lift out. That is little time for a lay viewer to notice that the longest bars are not at the top.
  - Fix: Hold the 8-row list still until local 1.6 (67.6 s). Then run the existing right→up→left path, which is what keeps rows from overlapping, in 1.4 s (local 1.6–3.0) instead of about 1.7 s, keeping winners inside x 790–1500. Leave 'Top 3' at the deck's 3.2, LLM at 4.0, the answer card at 4.4 and the citation at 4.9.
  - Evidence (draft 5, old timing): strip-07-rerank.png: the list is static at 66.5 and 67.0 s; at 67.5 s the winners are already out at the right; at 68.0 s they sit at x≈820–1500; at 68.5 s they are up; at 69.0 s they are back in rows 1–3, with no overlap in any cell.
- [P2] Inside the Top 3 cut, rank 1 has a lavender fill and a dark-blue border, while ranks 2–3 keep the neutral fill and a lighter border. The selected group reads as one plus two rather than three selected results.
  - Fix: Give all three rows above the cut line (x 96–776, y 300–492) the same #E6E6F7 fill and 2 px #1F3BFF border. Keep rank 1's dark-top-bar doc icon as the only marker of the cited นโยบาย69 document.
  - Evidence (draft 5, old timing): still-07-rerank.png: row 1 (y 300–356) is lavender with a dark-blue border; rows 2–3 (y 368–492) are cream with light-blue borders.
