---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "RAG ที่ใช้ได้จริงกับ ทร. เริ่มจากคลังที่พร้อมและสิทธิ์ที่ถูกต้อง ไม่ใช่แค่ Embedding"
destination: briefing-screen
aspect: 1920x1080
language: th
audience: "กำลังพลและผู้บริหารของกองทัพเรือ ทั้งที่มีและไม่มีพื้นฐานเทคนิค"
length: 90s
angle: concept-explainer with process
---

## Intent

An on-screen-text explainer (Thai, with English technical terms as small tags) that shows
how to build RAG for the Royal Thai Navy's 120+ years of multimodal archives: ingestion by
modality, a filename metadata convention, governance metadata on every piece, the
Ingest -> Parse -> Clean -> Chunk -> Embed -> Index pipeline, hybrid search, a reranker
before the LLM, and access control applied before search. It must be understandable on a
first viewing by people with no technical background, while staying technically exact.
"High-quality", "thorough and careful" (user's words). Approved by the user to build
autonomously.

## Customizations

- Follow one example document (the user's own example filename
  `ศซบ_สสท_2600000001_v02_2569_นโยบาย69.pdf`) and one example question through the system.
- Plain Thai phrase first, English term as a small tag (Thai + English technical terms).
- Same question asked by two personnel with different permissions (pre-filter payoff).

## Notes

- Content-first visuals: no ships, no naval decoration, no official RTN emblem or insignia.
- Never address the audience on screen (no words like "ผู้บังคับบัญชา" or "ผู้ไม่มีพื้นฐาน").
- No voice-over; silent master (an optional SFX version may be produced from local synthesis).
- Never invent figures or document content; example values are illustrative.
- Thai text: <= 17 chars/s hard ceiling (Netflix Thai), plan ~8-12 chars/s; <= 35 base chars
  per line; <= 2 lines per text block; local fonts only.
- Permission rule from the brief: real permissions come from identity + the ACL in the
  document registry; docs, chunks, tree nodes and agent tools share one scope applied
  BEFORE search; never search the whole archive and filter afterwards.
