---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "ปัญหาข้อมูลของ ทร. คือโอกาส — NAVE พา ทร. สู่ Digital Navy อย่างปลอดภัย เชื่อมโยง และก้าวทีละขั้น"
destination: briefing-screen
aspect: 1920x1080
language: th
audience: "กำลังพลและผู้บริหารของกองทัพเรือ ทั้งที่มีและไม่มีพื้นฐานเทคนิค"
length: 180s
angle: story-explainer with process
---

## Intent

The sequel to the RAG explainer (`videos/rtn-rag-explainer`), in exactly the same look and
motion grammar. It answers the requester's opening question — what kind of future is a
"Digital Navy"? — and walks through: the challenge every service faces (ทร. ทบ. ทอ.) in bringing
modern technology in seamlessly and usefully; the RTN's data-management problem and its
security / access-rights concerns; the turn ("not a problem — an opportunity"); the move led
by กรมการสื่อสารและเทคโนโลยีสารสนเทศทหารเรือ with NAV Ecosystem (NAVE | นาวี); MFA now and a plan
for PQC; NAVE as the RTN's AI workspace (one place, each person's identity + policy, linked
units and internal apps), shown as an explainer diagram with prompts typed into a NAVE-style
composer; and the requester's five-stage roadmap to a production-ready NAVE with today's
checkpoint (between stage 1 and stage 2). "High-quality", "thorough and careful", "same theme"
(requester's words). Built autonomously.

## Customizations

- Prompt / command animations ("ค่อยๆ prompt หรือสั่งการ") in a stylised NAVE composer, typed
  per word (never per Thai character).
- The roadmap's persistent rail with a "เราอยู่ตรงนี้" pin between stage 1 and stage 2.
- Callbacks to the RAG film: the same example question "แนวทางปฏิบัติปี 69 ของ ศซบ.", the
  person "น.อ.aaaaa", the citation "นโยบาย69 · v02", the dashed permission scope, the
  document tile and the 4-dot governance badge.

## Notes

- **No web-demo recreation.** The requester's demo (localhost:5173) is not reachable from the
  build machine; the requester then asked to skip showing the demo page. NAVE appears only as
  explainer diagrams in the film's own design system.
- Content-first visuals: no ships, anchors, waves, flags, uniforms, insignia, the RTN emblem,
  service emblems or people photos. No real product logos (ThaiD etc.), domains or URLs.
- Never address the audience on screen. "ผู้บังคับบัญชา" appears once, in the requester's own
  third-person phrase "สอดประสานกับความต้องการของผู้บังคับบัญชา ในหลากหลายมิติ" (allowed by
  `copy_allow` in the storyboard).
- No voice-over; silent master.
- Never invent figures, document contents, system names or results; demo values are
  illustrative. PQC facts used: "harvest now, decrypt later" risk; NIST standards ML-KEM and
  ML-DSA (FIPS 203/204, 2024). NAVE's PQC support is stated as a plan, not as done.
- Stage 1's handwritten title reads "Production / Demo Only" while its description says "not
  production ready"; the film titles it "Demo Only" (rail label "Demo") to stay faithful to
  the legible part. The requester clarified two hard-to-read lines: "Documents —
  การดำเนินงานของหน่วยขึ้นตรง" and "เก็บข้อมูลที่ไหน · หน้าเว็บเป็นยังไง · Outputs
  ต้องการประสิทธิผลแบบไหน".
- Thai text: ≤ 17 chars/s hard ceiling, plan ~12; ≤ 35 base chars per line; ≤ 2 lines per
  block; local fonts only (Chulabhorn Likit + IBM Plex Mono + IBM Plex Sans Thai fallback).
