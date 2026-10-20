# Round-1 fix packet — 04-tags

- File: compositions/frames/04-tags.html (the ONLY file you edit)
- Global window: 32.0–41.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 32 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 4 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P2] The point that every chunk carries the same four labels rests on an identical '••••' badge. The badge appears on the doc and all four chunks in one frame, with nothing linking its dots to the four tag rows, so the motif never gets its meaning, and it returns in 09 and 11.

**Fix:** At local 5.5 s (global 37.5), emit four dots from the four row bullets (x 482; y 502/573/644/716). Tween them (0.5 s, power2.inOut) into the doc badge (x 236-336, y 733-763), pulsing each source row (opacity 1 to 0.6 to 1) as its dot leaves. Then stamp the chunk badges (x 1565-1665) one at a time, 0.2 s apart (local 6.0-6.6 s). Move the Tree Nodes cue from local 6.4 to 7.0 s, which leaves a 2.0 s hold.

Evidence (draft 1, old timing — global times there were pre-retime): strip-04, 37.5 s: '••••' badges appear on the document and on all four chunks in the same cell, and nothing travels from the tag rows. still-04 shows the identical four-dot pills with no legend.

### 2. [P2] The 'Tree Nodes' chip sits inside the tree-node row between the two node pills, with the same pill shape and fill, so it reads as a third node rather than a label.

**Fix:** Move the chip out of the row to y 232-277, centred at x about 1420 above the gap between the pills. Draw 1px #8b8fe8 leaders from it down to the top edge of each node pill, the same way 'Chunk' labels the chunk column. Copy unchanged.

Evidence (draft 1, old timing — global times there were pre-retime): still-04: 'Tree Nodes' at x 1327-1512, y 288-333, in line with the node pills at x 1083-1299 and 1541-1757 (y 281-340).

## Orchestrator notes (take precedence over the fixes above where they conflict)

- 'Tree Nodes' cue is now local 7.0 s (deck updated). The 4-dot badge you define here is reused unchanged in frames 09 and 11, so keep its size, dot spacing and colour simple and stable.
- Type floor: 'Chunk' and 'Tree Nodes' chips and the mono terms in the tag rows ≥ 28px.
