# Round-1 fix packet — 03-filename

- File: compositions/frames/03-filename.html (the ONLY file you edit)
- Global window: 20.0–32.0 s (frame length 12 s; root/ground data-duration 12.5). Global time = 20 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 3 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P2] After the filename completes there is a 1.5 s dead beat. The bridge 'สิทธิ์จริง อยู่ในทะเบียนเอกสาร' then appears first as an empty grey box and gets only about 2.3 s of full dwell, the shortest in the frame for its conceptual twist.

**Fix:** Bring the bridge in at local 7.6 s (global 27.6) instead of 8.6 s, fading the box and its text in together so no empty grey box appears. Put the frame-09 ACL ledger (book) icon, 28px #1f2bd8, at the chip's left inside its padding, so 'ทะเบียนเอกสาร' visually ties forward to frame 09. No new copy.

Evidence (draft 1, old timing — global times there were pre-retime): strip-03: filename complete at 27.0 s; at 27.5-28.0 s only the doc icon draws. At 28.5 s an empty grey box appears (x about 683-1237, y 745-835); at 29.0 s only 'สิทธิ์จริง' shows; full at 29.5 s; push begins about 31.8 s.

### 2. [P2] The filename tokens mix typefaces, which undercuts the 'one standard filename' look: Thai tokens fall back to a proportional sans while digits and Latin are monospace.

**Fix:** Set all seven token pills in one family, weight and size. Either use IBM Plex Sans Thai with tabular numerals for every token, or pair the mono with a Thai mono-width face, so 'นโยบาย69' is not split across two fonts.

Evidence (draft 1, old timing — global times there were pre-retime): still-03, token row y 438-522: 'ศซบ', 'สสท' and the Thai part of 'นโยบาย69' are proportional sans. '2600000001', 'v02', '2569', the '69' and '.pdf' are monospace, with a different stroke weight.

## Orchestrator notes (take precedence over the fixes above where they conflict)

- The token-typeface P2 is re-evaluated for the new fonts: set ALL seven token pills (and the '_' separators) in Chulabhorn Likit Text 500 at one size (~46px), including the digits and '.pdf'; no IBM Plex Mono in the strip.
- Bridge now starts at local 7.6 s per the storyboard (cue changed in the deck). The ledger icon should be the same book/ledger glyph frame 09 uses for its ACL ledger card (look at compositions/frames/09-scope.html for its look; draw your own inline SVG copy, prefixed f03-).
- Type floor: token sub-labels (line 2) ≥ 28px.
