# Round-4 fix packet — 05-pipeline

- File: compositions/frames/05-pipeline.html (the ONLY file you edit)
- Global window: 41.0–50.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 41 + local time.
- Storyboard block: STORYBOARD.md '## Frame 5 —' — Scene lines plus every 'Round-N revisions' line (the spec).

## Fixes from critic round 4

### 1. [P2] Frame 04 just taught that every chunk carries the ●●●● label badge, and frames 09 and 11 reuse it. But the four chunk tiles in the Chunk card and the four rows in the Index card carry no badge, so the pipeline never shows the labels surviving to the index.

**Fix:** Add the frame-04 four-dot badge, scaled to ≈36 px wide, to the bottom of each of the four chunk tiles in the Chunk card (x 960–1222), landing with the Chunk cue at local 3.6 s (44.6 s). Add it to the right end of each Index row (x 1535–1797), shortening the bars by ≈44 px, landing with the Index cue at local 5.6 s (46.6 s).

Evidence (draft 4): still-05-pipeline.png: the Chunk card shows four outlined tiles with grey bars only. The Index card shows four ■ + bar rows with no dots. still-04 and still-09 show the badge on every chunk and item.

## Orchestrator notes (take precedence where they conflict)

- The badge on chunk tiles and Index rows is the canonical frame-04 badge scaled down proportionally (≈36px wide): same dot count, colours and spacing ratios.
