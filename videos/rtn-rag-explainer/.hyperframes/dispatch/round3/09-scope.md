# Round-3 fix packet — 09-scope

- File: compositions/frames/09-scope.html (the ONLY file you edit)
- Global window: 79.0–89.0 s (frame length 10 s; root/ground data-duration 10.5). Global time = 79 + local time.
- Storyboard block: STORYBOARD.md '## Frame 9 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P2] The headline underlines are timed to their cards ('ตัวตน' at 80.5 s with Identity, 'ทะเบียนเอกสาร' at 81.0 s with ACL), but the chips do not carry the link. Both the 'Identity' chip (x≈505–675) and the 'ACL' chip (x≈588–670) sit horizontally under 'ทะเบียนเอกสาร' (x≈315–722), and nothing sits under 'ตัวตน' (x≈96–248) except the avatar, so the layout hints at the wrong pairing.

**Fix:** Give the 'Identity' and 'ACL' chips the same 3 px blue underline as the headline words. Draw each one in sync with its headline underline: Identity at local 1.5 s (80.5 s), ACL at local 2.0 s (81.0 s), each over 0.3 s. On landing, pulse each headline word and its chip together (scale 1.06×, 0.3 s).

Evidence (draft 3): strip-09-scope.png (zoomed): at 80.5 s only 'ตัวตน' is underlined; at 81.0 s both are. still-09-scope.png: the chip positions are as stated, and the chips have no underline.

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- Frame 04's fixer is enlarging the canonical badge to 18px dots / 6px gaps / ≈120×36 pill. Use exactly that for your four object badges (re-check compositions/frames/04-tags.html at the end of your work and match it).
- Frame 04 is finished. The canonical 4-dot badge is now: pill 120×36px, box-sizing border-box, radius 100px; border 1.5px solid rgba(30,43,250,0.2); fill rgba(30,43,250,0.08); four #1e2bfa dots 18px with 6px gaps, centred (13.5px inside the border each side). Use exactly this for your four object badges.
