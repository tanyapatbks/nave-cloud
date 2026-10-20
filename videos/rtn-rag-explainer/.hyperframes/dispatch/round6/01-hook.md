# Round-6 (final) packet — 01-hook

- File: compositions/frames/01-hook.html (the ONLY file you edit)
- Global window (124.5 s film): 0–13.5 s (frame length 13.5 s). Global time = 0 + local time.
- Storyboard block: STORYBOARD.md '## Frame 1 —'. Its last note is the spec for this round:
  > Round-6 revisions (final): frame is 13.5s. Roll eases in-and-out (power2.inOut) over 0.8–3.6s so the first years tick visibly; the eyebrow ('จากวันนั้น...' / 'จนวันนี้...') is 40px semibold #3A372E with 16px to the year, and the left text stack sits 24px lower; the era line stays on screen 4.4–9.2s; era out 9.2s, year block shrink 9.2–9.8s, wall dim 9.4–9.8s; headline 9.6s / 10.2s; tracker 12.4 / 12.5 / 12.6s.

## What to do

- Frame length is now 13.5 s: set BOTH root and #f01-ground data-duration to 14 (root already 14; ground still says 12.5).
- Retime to the Round-6 note (all local): roll 0.8–3.6 with ease power2.inOut (keep it seek-safe: years derived from the eased progress); 'จนวันนี้...' at 3.9; era line in at 4.4 and on screen until 9.2 (era out 9.2); #f01-ygrp shrink 9.2–9.8; wall dim 9.4–9.8; headline 'แล้ววันนี้...' at 9.6, lines 'หากเราจะเริ่มจัดทำ RAG' + 'ให้กับ ทร.ได้อย่างไร' at 10.2 (keep the existing per-line stagger and RAG underline relative to their line); chips keep 5.6; tracker pills at 12.4 / 12.5 / 12.6 (they must have settled, unchanged in CSS, before the persistent chrome takes over at local 13.5).
- Eyebrow 'จากวันนั้น...' / 'จนวันนี้...': 40px semibold (Chulabhorn Likit Text 700 if 600 is not loaded) colour #3A372E, 16px gap to the year numerals. Shift the whole left text stack (eyebrow, year, era lines, headline, chips) down 24px for the whole frame so the tracker-to-eyebrow gap is ≥ 48px once the tracker lands.
- Do NOT add the RAG→AI connector/node from the critic list (rejected: the requester removed the RAG definition from this frame).
- Keep the layout waivers on the digit reels/slots (the full check depends on them).

## Draft-5 critic fixes (apply; where timing or pixel values differ from the Round-6 note above, the note wins)

- [P2] The 'จากวันนั้น...' / 'จนวันนี้...' label that gives the year roll its meaning is about 28 px grey (ink y 137–168), sitting above a numeral roughly 146 px tall. From 11.0 s the tracker's bottom edge (y=112) is only 25 px above it, so it reads as a tracker caption rather than the start of the sentence.
  - Fix: Set the label to 40 px semibold #3A372E, the same near-black as 'แล้ววันนี้...', with 16 px between label and year. Shift the whole left text stack (label, year, era lines, headline, chips) down 24 px for the entire frame, so the tracker-to-label gap is at least 48 px once the tracker lands at local 11.0. Keep the label crossfade at local 3.9.
  - Evidence (draft 5, old timing): still-01-hook.png: label ink spans y 137–168 in grey, tracker pills end at y=112, gap about 25 px. strip-01-hook.png 4.0–7.5 s: the label is a thin line above the 2569 numeral.
- [P2] The roll starts fast, so the starting year 2449 barely registers: the counter shows 2449 at 0.5 s but is already in the 249x range, with odometer fragments, by 1.0 s.
  - Fix: Keep the deck's roll window (local 0.8–3.6) and the landing on 2569, but change the roll easing from ease-out to ease-in-out (e.g. power2.inOut). The first 5–6 years (2449→2455) should tick visibly between local 0.8 and 1.4, then the roll speeds up and settles on 2569 by 3.6. Leave the 'จนวันนี้...' swap at 3.9.
  - Evidence (draft 5, old timing): strip-01-hook.png: 2449 at 0.5 s, '249' plus a rolling fragment at 1.0 s, 2525 at 1.5 s, 2569 settled at 3.5 s.
