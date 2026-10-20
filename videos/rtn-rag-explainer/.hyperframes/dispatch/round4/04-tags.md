# Round-4 fix packet — 04-tags

- File: compositions/frames/04-tags.html (the ONLY file you edit)
- Global window: 32.0–41.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 32 + local time.
- Storyboard block: STORYBOARD.md '## Frame 4 —' — Scene lines plus every 'Round-N revisions' line (the spec).

## Fixes from critic round 4

### 1. [P2] As the badge dots leave for the trunk, rows 3 and 4 ('ลับแค่ไหน? · Classification', 'ใครเห็นได้? · Access') drop to about 50% opacity for about 0.5 s. They are back to full at 38.0 s, so the text the viewer is reading flickers just as motion starts elsewhere.

**Fix:** Keep all four tag rows at 100% opacity throughout. Signal each dot's departure only on that row's bullet: a scale pulse 1.0→1.4→1.0 over 0.3 s at local 5.3 / 5.45 / 5.6 / 5.75 s (37.3–37.75 s global).

Evidence (draft 4): strip-04-tags.png 37.5 s (zoomed): rows 3–4 are visibly lighter than rows 1–2, with a dot leaving beside the Access bullet. At 38.0 s all four rows are back to full.

### 2. [P2] Each 'Tree Nodes' pill is drawn as a small branch glyph, one short grey dash and the ●●●● badge. Nothing suggests a table of contents, so 'สารบัญ / Tree Nodes' (which returns in frame 09) arrives as an unexplained term on two pills.

**Fix:** In both node pills (x 1083–1307 and 1541–1765), replace the single grey dash with a mini two-level contents list: one 60 px heading bar plus two 40 px sub-bars indented 12 px, stacked. Grow the pill height from 58 to 72 px downward. Keep the branch glyph at the left, the badge at the right, and the existing connectors (left node → chunks 1–2, right node → chunks 3–4).

Evidence (draft 4): still-04-tags.png: node pills at y≈281–339 hold only a branch icon, a ≈36 px grey dash and the 4-dot badge. strip-04 39.0 s: they arrive together with 'สารบัญ / Tree Nodes'.

### 3. [P2] 'สารบัญ' is bold black, about 34 px, at y≈195–225, inside the headline's vertical band (y 150–230). It reads as a second title next to 'แบ่งเป็นชิ้น — ทุกชิ้นติดป้ายเดิม'.

**Fix:** Keep it above the 'Tree Nodes' chip, as the deck specifies ('label สารบัญ over chip Tree Nodes'). Restyle it to 28 px medium in the sub-label grey used in frame 03 (#5B574B, 6.8:1) so it reads as a caption.

Evidence (draft 4): still-04-tags.png: 'สารบัญ' at x≈1370–1468, y≈195–225, same weight and colour family as the headline, which ends at x≈925.

## Orchestrator notes (take precedence where they conflict)

- Keep the canonical 120×36 badge unchanged (frames 05, 09, 11 copy it).
