# Round-6 (final) packet — 11-close

- File: compositions/frames/11-close.html (the ONLY file you edit)
- Global window (124.5 s film): 107.5–124.5 s (frame length 17 s). Global time = 107.5 + local time.
- Storyboard block: STORYBOARD.md '## Frame 11 —'. Its last note is the spec for this round:
  > Round-6 revisions (final): frame is 17s; line 2 at 2.4s, line 3 rows at 4.4 / 5.6 / 6.8s, payoff 9.6 / 10.0 / 10.4s, Thai chips 10.8s (chip text 32px, chips 50px tall, centred under their words), background settle 9.6–10.4s; the cream veil is one uniform layer over the dashed frame's whole interior (no internal edge, no tile split), and from 9.6s tile borders and ●●●● pills inside the payoff band (x 340–1580, y 600–760) drop to ≤ 5% opacity; hold to the end.

## What to do

- Frame length is now 17 s: set root and #f11-ground data-duration to 17.
- Retime to the Round-6 note (local): line 1 0.4; line 2 2.4; line 3 rows 4.4 / 5.6 / 6.8; payoff 'Reliable' 9.6 (dot 9.85), 'Searchable' 10.0 (dot 10.25), 'Permission-aware' 10.4; Thai chips 10.8; background untidy→ordered settle 9.6–10.4 and its badges as the settle completes; hold everything to the end (no fade-out).

## Draft-5 critic fixes (apply; where timing or pixel values differ from the Round-6 note above, the note wins)

- [P1] On the longest hold of the film (payoff and chips settled from about 114.5 s to 119.0 s), a hard-edged veil ends at y≈790 inside the dashed frame. Tiles in the bottom row switch from veiled to visible in one pixel, and the lavender bar-chart tiles at x≈1120–1330 look chopped flat. Faint ●●●● ghost-tile pills also show at y≈682, between the payoff baseline (y≈661) and the Thai chip tops (y≈689). The payoff is centred but not clear of the tiles, and the seam reads as a render glitch.
  - Fix: Make the veil one uniform layer over the dashed frame's whole interior (x 262–1658, y 190–888) with no internal edge. If the bottom row must stay brighter, feather the veil's bottom with a linear gradient over at least 120 px ending at y≈880 so no tile is split. Also drop ghost-tile opacity to 5% or less (or hide tile borders and ●●●● pills) inside x 340–1580, y 600–760, from local 8.0 (113.0 s) to the end.
  - Evidence (draft 5, old timing): still-11-close.png: at x=1150 the pixel goes from (249,245,231) at y=788 to (230,227,233) at y=791; at x=1290, from (251,247,233) to (230,227,233). In the zoomed crop the bars are cut flat at y≈790 and faint ●●●● pills sit at y≈682 near x≈300–335 and 437–473. strip-11-close.png shows the seam in every cell from 113.0 to 118.5 s.
- [P2] The Thai meaning chips 'เชื่อถือได้' / 'ค้นหาได้' / 'แบ่งตามสิทธิการเข้าถึงข้อมูลได้' are about 28 px (ink y 696–729) under a payoff about 60 px tall. For viewers who read English poorly, the meaning is the smallest text on the closing card.
  - Fix: Raise the chip text to 32 px and the chip height to 50 px, keeping each chip centred on its English word (centres x≈475, 811, 1296). The payoff stays at its current size, so the English remains clearly dominant. The longest chip grows to about 410 px (x≈1091–1501), still inside the dashed frame.
  - Evidence (draft 5, old timing): still-11-close.png: the chip text ink spans y 696–729; the payoff cap height spans y 619–661; the chips are centred under their words.
