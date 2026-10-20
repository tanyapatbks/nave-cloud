# Round-3 fix packet — 08-two-people

- File: compositions/frames/08-two-people.html (the ONLY file you edit)
- Global window: 70.0–79.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 70 + local time.
- Storyboard block: STORYBOARD.md '## Frame 8 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P2] The denied line 'ไม่พบเอกสารในสิทธิ์ของท่าน' is plain text with a 2 px brand-blue underline, so it reads as a hyperlink rather than a system refusal. It is also styled differently from the solid green pill on the left.

**Fix:** Remove the underline. Put the line in a neutral pill the same height as the green badge (about 58 px): fill #E4E2DA, 2 px #8A867A border, text #2A2925, weight 600. Replace its 32 px padlock with a 32 px magnifier-with-dash ('no result') glyph in #5F5B50; the 'ไม่มีสิทธิ์' chip keeps its padlock.

Evidence (draft 3): still-08-two-people.png: the right panel line at x≈1170–1690, y≈680–722 has a blue underline under the text and no container; the left result is a solid #0A6845-style pill with white text.

### 2. [P2] The left result group (document tile plus green badge) is about 30 px right of the centre of its result area, while the right panel's content is centred.

**Fix:** Shift the left document tile and green badge 30 px left as one group, so the group (x≈248–736) centres on the result area's centre at x≈492.

Evidence (draft 3): still-08-two-people.png: the group spans x≈278–766 (centre ≈522), while the inner result area spans x≈167–817 (centre ≈492).

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- Keep the round-2 solid green badge; the neutral denied pill must match its height.
