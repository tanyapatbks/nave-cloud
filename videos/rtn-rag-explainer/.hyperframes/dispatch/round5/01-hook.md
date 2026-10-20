# Round-5 packet — 01-hook

- File: compositions/frames/01-hook.html (the ONLY file you edit)
- Global window (new timing, 119 s film): 0.0–12.0 s (frame length 12 s; root/ground data-duration 12.5). Global time = 0 + local time.
- Storyboard block: STORYBOARD.md '## Frame 1 —' (Scene lines + every revision note; the 'Requester copy revision' note wins over older notes).
- `node ../../harness/check-copy-fidelity.mjs .` must print `ok` for your file (it currently lists exactly the copy you must add or remove).

## Requester copy changes (top priority)

- The requester rewrote this frame's copy and opening (STORYBOARD.md '## Frame 1 —' has been fully rewritten; follow its Scene 1–5 exactly). The frame is now 12 s: set root and ground data-duration to 12.5.
- Replace the '120+' numeral and 'ปี ของข้อมูลกองทัพเรือ' with the eyebrow 'จากวันนั้น...' over a year that rolls from 2449 to 2569 year by year, slowing to a stop at 3.6 s; then 'จนวันนี้...' replaces 'จากวันนั้น...'. Every intermediate year is shown. The roll must be seek-safe: rendering the timeline at any time t must show the correct year (e.g. precompute each year's time from the ease curve and place one tl.set per year, or set the text from a deterministic function in onUpdate of a single tween with immediateRender handled). Keep the literal strings '2449' and '2569' present in the file (markup or JS string) for the copy check.
- A short calendar-flip feel: when a digit changes, that digit slides/flips briefly; keep it subtle and seek-safe. Digits are tabular (Chulabhorn Likit Display numerals are proportional — use font-variant-numeric: tabular-nums or fixed-width digit slots so the year does not jitter horizontally).
- Add the era line 'ยุคสมัยที่เปลี่ยนผ่าน ข้อมูลต่างๆมากมาย' / 'ถูกจัดเก็บในหลากหลายรูปแบบ' (4.8 s, removed at 7.4 s) and the new headline 'แล้ววันนี้...' / 'หากเราจะเริ่มจัดทำ RAG' / 'ให้กับ ทร.ได้อย่างไร' exactly as written (no question mark). Delete the definition chip 'ค้นเอกสารจริงก่อน แล้วจึงตอบ' and its bracket connector entirely.
- Tracker labels become '1 จัดการ' '2 ค้นหา' '3 สิทธิการเข้าถึง' at 10.8 / 10.9 / 11.0 s, same CSS as compositions/chrome.html (.ch-pill) so it hands over to the persistent chrome at 12.0 s without any shift.
- Keep: the wall cascade (now finishing as the year stops), chips at their final place from 5.6 s, the example-document tile, wall dim, no text lighter than #6B675C.
