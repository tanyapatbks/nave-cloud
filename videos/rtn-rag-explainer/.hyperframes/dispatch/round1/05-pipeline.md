# Round-1 fix packet — 05-pipeline

- File: compositions/frames/05-pipeline.html (the ONLY file you edit)
- Global window: 41.0–50.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 41 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 5 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P1] The payoff station 'ทำดัชนี · Index' is an empty highlighted box (with a duplicate inner border) for the whole final hold. Its output, four lavender bars with blue knobs that look like UI sliders, hangs unconnected about 75px below it, so the searchable index looks like a missing graphic.

**Fix:** From local 6.0 s (global 47.0), keep the index inside the Index card. Scale the four rows to fit its inner area (about 200x110 at x 1592-1792, y 445-555) and replace the slider knobs with 8px square row markers at each row's left edge. Delete the copy at y 660-816. Remove the inner duplicate card border (x 1573-1813, y 425-575) so the card matches the other five stations and keeps only its active highlight.

Evidence (draft 1, old timing — global times there were pre-retime): still-05: Index card (x 1561-1825, y 413-587) contains only an empty inner card; four bars with knobs float at y 660-816 with no connector. strip-05: dots sit inside the box at 46.5 s, drop out at 47.0-48.0 s, and the box stays empty to the push.

### 2. [P2] Station glyphs are inconsistent and weak. Only Ingest has a green check, and it is clipped by the card's top-right corner and overlaps the document. The Parse and Clean glyphs are pale grey on pale grey.

**Fix:** Move the check fully inside the card, inset 12px from the top-right and clear of the doc outline. Add the same check to each station as the conveyor passes it (local 1.0 / 1.8 / 2.6 / 3.6 / 4.4 / 5.2 s). Raise the Parse and Clean glyph strokes to #8b8fe8 at 100% opacity, 3px.

Evidence (draft 1, old timing — global times there were pre-retime): still-05: green check at about x 237-265, y 420-450 overlaps the Ingest card's top edge and the document. No other station has a check. The Parse box (x 383-622) shows faint grey strokes.

### 3. [P2] The Clean micro-chip '๒๕๖๙ → 2569' is crammed against the card's bottom border.

**Fix:** Raise the chip by 8px so its bottom sits at least 16px above the card's bottom edge (chip at y 522-558 in a card ending at y 574), or make the card 16px taller.

Evidence (draft 1, old timing — global times there were pre-retime): still-05: chip bottom at y about 566 against the Clean card bottom at y about 574 (about 8px).

## Orchestrator notes (take precedence over the fixes above where they conflict)

- Also implement the storyboard's new Embed beat: each of the four chunk cards briefly flips into a short column of IBM Plex Mono digits (illustrative vector values such as 0.12 / -0.48 / 0.91, deterministic, small, muted — a texture, not data), which condenses into one dot. Keep it inside the Embed station and within its cue window (4.4–5.2 s).
- Type floor: the English station labels (Ingest … Index) ≥ 28px and Thai station names ≥ 32px; widen the station cards to ~250px or tighten the gutters so 'แปลงเป็นความหมาย' still fits on one line inside its card. If 32px cannot fit, use the largest size that fits (never below 28px) and say so.
- With the index now inside the Index card, nothing should remain below y≈600 except what the Scene lines describe.
