# Round-3 fix packet — 04-tags

- File: compositions/frames/04-tags.html (the ONLY file you edit)
- Global window: 32.0–41.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 32 + local time.
- Storyboard block: STORYBOARD.md '## Frame 4 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P2] The vertical trunk that delivers the ●●●● badge to the chunks, at x≈1614 from y≈858 up to y≈525, is drawn above the chunk card bodies. It passes behind each badge and stays on screen in the settled state, so the right-hand stack carries a permanent line through all four cards. Together with the tree-node connectors at x≈1122 and x≈1718, it clutters the stack.

**Fix:** Move the trunk below the chunk cards in z-order, so it shows only in the 16 px gaps between cards. Once the last chunk badge fills (local 6.6 s = 38.6 s), fade the trunk to 0 opacity over 0.4 s and keep only the 12 px horizontal ticks into each badge.

Evidence (draft 3): still-04-tags.png, crop x 1450–1760 y 440–880: a 2 px pale-blue line crosses the body of every chunk card and runs into and out of each ●●●● badge. It persists in the settled still, and in strip-04-tags.png from 38.5 to 40.5 s.

### 2. [P2] The label-travel motion starts at 37.0 s, only about 0.5 s after the last tag row 'ใครเห็นได้? · Access' lands at about 36.5 s. Motion pulls the eye away before the fourth row is read.

**Fix:** Hold with no motion from local 4.6 to 5.3 s. Run the bullet flight into the document badge and the trail to the chunks from local 5.3 to 6.8 s (37.3–38.8 s). Keep 'สารบัญ / Tree Nodes' at its deck cue of local 7.0 s (39.0 s).

Evidence (draft 3): strip-04-tags.png: the rows complete at 34.5, 35.0, 36.0 and 36.5 s; at 37.0 s the rows pulse and the badge flight starts; at 38.5 s all chunks are badged; at 39.0 s Tree Nodes appears.

### 3. [P2] The ●●●● badge dots are about 12 px, and the badge is the only carrier of 'the four labels' on the chunks and Tree Nodes (repeated in 09 and 11).

**Fix:** Increase the badge dots from about 12 px to 18 px with 6 px gaps on the document, chunk and tree-node badges. Widen the badge pill to fit (about 120×36 px).

Evidence (draft 3): still-04-tags.png: the chunk badges at x≈1565–1663 show four dots about 12 px wide.

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- The bigger badge (18px dots, 6px gaps, ≈120×36 pill) becomes the canonical badge; state its final spec in your reply (frame 09 will copy it).
