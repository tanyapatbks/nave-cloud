# Round-2 fix packet — 11-close

- File: compositions/frames/11-close.html (the ONLY file you edit)
- Global window: 101.0–111.0 s (frame length 10 s; root/ground data-duration 10). Global time = 101 + local time.
- Storyboard block: STORYBOARD.md '## Frame 11 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P2] The film ends on a hard cut. The last element (the Reliable / Searchable / Permission-aware chips) lands at about 107.0 s, the card is static after that, and at 110.5 s it is still at full opacity with no fade.

**Fix:** Extend frame 11 by 1.5 s (to 112.5 s) and fade all content to the background colour over local 10.5–11.5. If runtime must stay at 111.0 s, run the same fade over local 9.3–10.0 instead.

Evidence (draft 2, current global timing): strip-11-close.png: the 107.0–110.5 s cells are identical and fully opaque.

### 2. [P2] The grey 'Embedding' that ends line 1 (≈#8B8683) measures 3.39:1 on the cream background, so the key term washes out. Doc tiles and their ●●●● pills also show through behind lines 1–2 and the payoff.

**Fix:** Set 'Embedding' to #5F5B57 (6.34:1 on #FEF8E5), keeping its lighter weight so it still reads as de-emphasised. Lower the doc-tile opacity to 0.25 or less inside the text block area (x≈460–1460, y≈260–750), or add an 85%-opacity cream radial scrim behind the text block.

Evidence (draft 2, current global timing): still-11-close.png: 'Embedding' is visibly paler than the rest of line 1 (pixel measurement 3.39:1), and tile edges and dots are visible under 'ให้เป็นความรู้ที่' and the payoff words.

### 3. [P2] The payoff chip gaps are unequal: about 172 px between Reliable and Searchable but only about 52 px between Searchable and Permission-aware, so the last two crowd together.

**Fix:** Put the three Thai payoff words on fixed column centres x=560 / 960 / 1360, with the blue separator dots at x≈765 and x≈1180. Give all three chips a fixed width of 330 px, each centred under its word, which yields equal gaps of about 70 px.

Evidence (draft 2, current global timing): still-11-close.png: the chips sit at x≈549–731, 903–1119 and 1171–1492.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- REJECTED by the orchestrator: the closing fade-out. The film ends on the payoff card (a presenter pauses on it). Do not add a fade.
