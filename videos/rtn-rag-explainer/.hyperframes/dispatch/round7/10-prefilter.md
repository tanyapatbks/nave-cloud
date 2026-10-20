# Round-7 packet — 10-prefilter

- File: compositions/frames/10-prefilter.html (the ONLY file you edit)
- Global window (124.5 s film): 97–108.5 s (frame length 11.5 s). Global time = 97 + local time.
- Storyboard block: STORYBOARD.md '## Frame 10 —'. Its last note is the spec for this round:
  > Round-7 revisions: frame is 11.5s (end hold trimmed by 0.5s; the rule still holds still from ~8.6s to the end). The residue chips come out of the struck document: as it leaves the red box for the lock box (~3.5s) the three chips spawn at its last centre and travel to their slots scaling 0.6→1, landing at 3.8 / 4.2 / 4.6s, their dashed leads then joining the single route (leak dot 4.7–5.2s unchanged). The right panel (grid, locks, empty result slot, AI node) holds at 35% opacity from 0.5s to 5.3s and rises to 100% over 5.3–5.6s with the '✓ ขอบเขตก่อน แล้วค่อยค้น' label, before its scope box draws. The transient filter bar that sweeps the red box is red (the box outline's red), 4px thick and clipped to the box interior — never near-black.

## What to do

- Frame length is now 11.5 s: root data-duration is already 12.1 (assembler, includes the 0.6 s blur-crossfade); set #f10-ground, #f10-stage and any other clip data-duration to 12.1. Every cue stays where it is.
- Apply the three Round-7 changes: residue chips spawn from the struck document's last centre and travel to their slots (scale 0.6→1), still landing at 3.8 / 4.2 / 4.6; the right panel at 35% opacity from 0.5 to 5.3 s rising to 100% over 5.3–5.6 s; the transient filter bar red, 4px, clipped to the red box interior.
- Keep everything else from round 6 (spacing, the single dashed route, the leak dot 4.7–5.2, red 'ไม่ได้', the rule holding still to the end; PLANNED hold).

## Critic findings on the round-6 render (context; timings there are global times of the OLD cut, and the Round-7 note wins where they differ)

- [P2] The case against 'filter afterwards' rests on the residue chips (log / จำนวนผล / สรุป) being leftovers of the locked document. On screen the struck document moves to the dashed lock box at 99.0 s, and the three chips then simply fade in inside the empty red box (99.5–100.0 s), with nothing showing they came from that document.
  - Suggested fix: At local 3.5 (99.0 s), as the struck document leaves the red box for the lock box, spawn the three chips at the document's last centre (≈635, 520). Move each to its slot (log y≈463, จำนวนผล y≈519, สรุป y≈575) with a scale of 0.6→1, staggered 0.2 s and all landed by local 4.3. Then draw the dashed leads into the existing single route to the AI node. Copy unchanged.
  - Evidence: strip-10-prefilter.png (enlarged): 98.0 s locked doc inside the red box, AI node lit; 98.5 s doc struck; 99.0 s red box empty and doc in the dashed lock box; 99.5 s 'log' fades in alone inside the box; 100.0 s all three chips. None moves out of the document.
- [P2] From 96.0 to about 101.0 s the right panel sits at full contrast with the same red-locked grid as the left, while only the left panel animates the leak story. Two near-identical grids split attention during the subtler half of the lesson.
  - Suggested fix: Hold the whole right panel (grid, locks, empty result slot and AI node) at 35% opacity from local 0.5 to 5.3. Fade it to 100% over local 5.3–5.6, as the '✓ ขอบเขตก่อน แล้วค่อยค้น' label lands and before the scope box draws at about local 5.8.
  - Evidence: strip-10-prefilter.png 96.5–100.5 s: the right panel grid with red locks is fully visible and static, while the left panel scans, pulls, strikes and leaks. The right label appears at 101.0 s.
- [P2] While the locked document is struck, a heavy near-black horizontal bar sweeps across the red residue box and slightly past its right edge. Black is otherwise used only for text, so this flash looks off-palette and glitch-like next to the red 'wrong path' marks.
  - Suggested fix: At local 3.0 (98.5 s), recolour the transient filter bar to the red of the red box outline, set it to 4 px thick, and clip it to the box interior (x≈527–742) so it no longer overshoots the right edge.
  - Evidence: strip-10-prefilter.png (enlarged) 98.5 s: a thick near-black line crosses the red box at the struck document's height and runs slightly past the box's right edge. It is gone by 99.0 s.
