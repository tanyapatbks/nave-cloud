# Round-7 packet — 11-close

- File: compositions/frames/11-close.html (the ONLY file you edit)
- Global window (124.5 s film): 108.5–124.5 s (frame length 16 s). Global time = 108.5 + local time.
- Storyboard block: STORYBOARD.md '## Frame 11 —'. Its last note is the spec for this round:
  > Round-7 revisions: frame is 16s (end hold trimmed to ~5s; every cue unchanged). Line 1 'การจะเปลี่ยนผ่านไปสู่ Digital Navy' drops to 44px and the payoff 'Reliable · Searchable · Permission-aware' rises to 64px (≈1330px wide, inside the card interior), Thai chips re-centred under their words (chip size and colour unchanged); the whole text stack and the concentric rings move down 52px so the block centres in the dashed card. The card, veil and tile lattice do not change.

## What to do

- Frame length is now 16 s: set root and every clip's data-duration (ground, lattice, backing, rings, stage, …) to 16, and the timeline's end padding (if any) to 16. Every cue stays where it is; the card simply holds ~5 s instead of ~6 s.
- Apply the Round-7 sizes: line 1 44px, payoff 64px (must fit inside the dashed card interior x 262–1658 with ≥ 30px each side), Thai chips re-centred under their words; move the whole text stack and the concentric rings down 52px so the block centres in the card. Do NOT change the card, the veil or the lattice (the round-6 uniform veil and the ≤5% payoff-band tiles must stay exactly as they are).

## Critic findings on the round-6 render (context; timings there are global times of the OLD cut, and the Round-7 note wins where they differ)

- [P2] The payoff 'Reliable · Searchable · Permission-aware' is meant to be the landing line, but its cap height (R ≈40 px, y 621–661) is the same as line 1's 'Digital Navy' (D ≈39 px, y 242–281). In a seven-line block, size does not lead the eye to it.
  - Suggested fix: Reduce line 1 'การจะเปลี่ยนผ่านไปสู่ Digital Navy' from about 52 px to 44 px and raise the payoff from about 58 px to 64 px. The payoff is then about 1330 px wide, which fits the 1400 px card interior. Re-centre each Thai chip under its word, keeping chip size and colour.
  - Evidence: still-11-close.png: the 'D' of Digital Navy spans y 242–281 and the 'R' of Reliable spans y 621–661, so the two lines have nearly identical cap heights. The payoff spans x 358–1561.
- [P2] The text block (y 235–738) sits high in the dashed card (y 188–890): 47 px of padding above and 152 px below, so the card looks empty under the chips.
  - Suggested fix: Move the whole text stack (lines 1–5, payoff and chips) and the concentric rings down 52 px so the block centre sits at the card centre (y≈539). Do NOT shrink the card: the tile grid fills it down to y≈860, and raising the card's bottom edge would leave the bottom tile row outside the veil, bringing back the half-veiled tiles fixed in round 5.
  - Evidence: still-11-close.png (plus a contrast-stretched copy): text ink spans y 235–738 inside the dashed card at y 188–890. The veiled tile grid runs evenly to about y 860. The band between payoff and chips (y 664–686) is clean.
