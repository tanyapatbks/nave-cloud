# Round-6 (final) packet — 09-scope

- File: compositions/frames/09-scope.html (the ONLY file you edit)
- Global window (124.5 s film): 85.5–95.5 s (frame length 10 s). Global time = 85.5 + local time.
- Storyboard block: STORYBOARD.md '## Frame 9 —'. Its last note is the spec for this round:
  > Round-6 revisions (final): everything below the headline moves down 32px (content ends ≤ y 892); the ACL ledger's highlighted row shows the frame-03 padlock glyph at its left (instead of the doc glyph) and a 4px cobalt left border, matching frame 03's bridge chip.

## What to do

- Frame length unchanged (10 s, root 10.5).
- Global spacing fix: move everything below the headline down 32px (the Round-6 note's value, not the critic's 40), so content ends ≤ y 892 and the scope's top edge/pill clear the line-2 underline. Keep the mask path, rects and pill consistent with the move. Headline stays put.

## Draft-5 critic fixes (apply; where timing or pixel values differ from the Round-6 note above, the note wins)

- [P2] Frame 03 says access depends on the document owner, and frame 09 sources permission from Identity + ACL, but nothing on screen connects the two. A viewer can conclude that the filename or owner code itself grants access.
  - Fix: When the ACL ledger's highlighted row draws (local 2.5, 85.5 s), replace the doc glyph at its left edge (x≈145, y≈740) with the same 26 px padlock glyph used in the frame 03 bridge chip. Add a 4 px #1F3BFF left border to the row, matching the bridge chip's left rule. No copy change.
  - Evidence (draft 5, old timing): still-09-scope.png: the highlighted ACL row (x≈122–750, y≈722–757) has a generic doc glyph; still-03-filename.png: the bridge chip has a padlock and a 4 px blue left rule; no element is shared between the two.
