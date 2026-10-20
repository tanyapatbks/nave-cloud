# Copy deck — RTN permission-aware RAG explainer (draft review)

Generated from `STORYBOARD.md` by `harness/make-copy-deck.mjs`; do not edit by hand.

Global times are in the assembled video (transitions overlap neighbouring frames by ~0.5 s). The on-screen copy below is the ONLY text the film should show, plus the 3-step tracker `1 อ่านได้ · 2 ค้นเจอ · 3 ตามสิทธิ์` and an English term chip in the top band of frames 02–10. From frame 02 to frame 10 those two sit on one persistent layer above all transitions (they never slide or crossfade with a frame). There is no narration.


## Frame 01 — 120 ปีของเอกสาร และคำถามเดียว  ·  0.0–9.0 s
- on-screen copy (local cue times): "120+" (0.3s) · "ปี ของข้อมูลกองทัพเรือ" (1.2s) · chips "PDF" "ภาพสแกน" "รูปภาพ" "แผนภูมิ" "ตาราง" (2.4s, staggered) · headline line 1 "แล้วเราจะจัดทำ RAG" + line 2 "ให้กับ ทร. ได้อย่างไร?" (4.6s) · chip under RAG "ค้นเอกสารจริงก่อน แล้วจึงตอบ" (6.0s) · tracker "1 อ่านได้" "2 ค้นเจอ" "3 ตามสิทธิ์" (8.0s)
- must teach: The Navy has 120+ years of documents in many forms; the question is how to make an AI answer from them.

## Frame 02 — ทำให้ AI อ่านเอกสารได้  ·  9.0–20.0 s
- term chip: Ingestion Pipeline
- on-screen copy (local cue times): headline "ขั้นแรก: ทำให้ AI อ่านเอกสารได้" (0.3s) · lane 1 "เอกสาร PDF" → "ดึงข้อความ + โครงสร้าง" (1.4s) · lane 2 "ภาพสแกน / รูปภาพ" → "อ่านตัวอักษร + เข้าใจภาพ" chip "OCR + Vision Models" (4.2s) · lane 3 "แผนภูมิ / ตาราง" → "ดึงตัวเลขจริง + ความสัมพันธ์" (7.0s)
- must teach: PDFs keep their structure, scans are read by OCR and vision models, and charts/tables give up their real numbers.

## Frame 03 — ชื่อไฟล์บอกที่มาในบรรทัดเดียว  ·  20.0–32.0 s
- term chip: Metadata
- on-screen copy (local cue times): headline "ตั้งชื่อไฟล์แบบเดียวกันทุกไฟล์" (0.3s) · tokens + labels in order: "ศซบ" "หน่วย · กอง/แผนก" (1.4s) · "สสท" "เจ้าของ · หน่วยขึ้นตรง" (2.4s) · "2600000001" "ผู้นำเข้า · เลข 10 หลัก" (3.4s) · "v02" "เวอร์ชัน" (4.4s) · "2569" "ปี พ.ศ." (5.2s) · "นโยบาย69" "ชื่อเอกสาร" (6.0s) · ".pdf" (6.8s) · bridge "สิทธิ์จริง อยู่ในทะเบียนเอกสาร" (7.6s)
- must teach: One standard filename (<sub-unit>_<unit>_<owner-id>_<version-no>_<year>_<name>.pdf) tells you unit, owner, who ingested it, version, year and name — but access rights come from the document registry.

## Frame 04 — ทุกชิ้นติดป้ายเดิม  ·  32.0–41.0 s
- term chip: Data Governance
- on-screen copy (local cue times): headline "แบ่งเป็นชิ้น — ทุกชิ้นติดป้ายเดิม" (0.3s) · chip "Chunk" (1.4s) · tag rows "มาจากไหน? · SourceID" (2.4s) "ฉบับไหน? · Version" (3.0s) "ลับแค่ไหน? · Classification" (3.6s) "ใครเห็นได้? · Access" (4.2s) · label "สารบัญ" over chip "Tree Nodes" (7.0s)
- must teach: Every document and every chunk carries SourceID, Version, Classification and Access.

## Frame 05 — จากไฟล์ สู่ดัชนีที่ค้นได้  ·  41.0–50.0 s
- term chip: Ingest → Index
- on-screen copy (local cue times): headline "จากไฟล์ สู่ดัชนีที่ค้นได้" (0.3s) · stations in order, each Thai + English: "รับเข้า · Ingest" (1.0s) "แยกส่วน · Parse" (1.8s) "ทำความสะอาด · Clean" (2.6s) with micro "๒๕๖๙ → 2569" (2.9s) "ตัดเป็นชิ้น · Chunk" (3.6s) "แปลงเป็นความหมาย · Embed" (4.4s) "ทำดัชนี · Index" (5.6s)
- must teach: Ingest → Parse → Clean → Chunk → Embed → Index turns a file into indexes that can be searched.

## Frame 06 — ค้นหา 3 ทางพร้อมกัน  ·  50.0–62.0 s
- term chip: Hybrid Search
- on-screen copy (local cue times): headline "ค้นหา 3 ทางพร้อมกัน" (0.3s) · question card "แนวทางปฏิบัติปี 69 ของ ศซบ." (1.0s) · scope chip on the boundary "ขอบเขตสิทธิ์" (1.6s) · lane "ค้นคำตรงตัว" chip "Keyword" sub "ชื่อ · รหัส · คำเฉพาะ" (2.8s) · lane "ค้นตามความหมาย" chip "Vector" sub "แนวทางปฏิบัติ ≈ นโยบาย" (4.6s) · lane "กรองตามป้าย" chip "Metadata" filter chips "ปี 2569" "หน่วย สสท./ศซบ." (6.4s) · merge label "รวมผล" (9.4s)
- must teach: Hybrid search combines keyword, vector and metadata filters; together they find what one method alone misses.

## Frame 07 — คัดตัวจริง ก่อนส่งให้ AI ตอบ  ·  62.0–70.0 s
- term chip: Reranker
- on-screen copy (local cue times): headline "คัดตัวจริง ก่อนส่งให้ AI ตอบ" (0.3s) · cut-line label "Top 3" (3.2s) · chip "LLM / ระบบอื่น" (4.0s) · answer card "คำตอบ พร้อมแหล่งอ้างอิง" (4.4s) · citation chip "อ้างอิง: นโยบาย69 · v02" (4.9s)
- must teach: A reranker picks the most relevant results before the LLM (or another system) uses them.

## Frame 08 — คำถามเดียวกัน คำตอบตามสิทธิ์  ·  70.0–79.0 s
- term chip: Access Control
- on-screen copy (local cue times): headline "คำถามเดียวกัน — คำตอบตามสิทธิ์" (0.3s) · badge left "กำลังพล ก" + chip "มีสิทธิ์" (1.2s) · badge right "กำลังพล ข" + chip "ไม่มีสิทธิ์" (1.6s) · question card (small, centred) "แนวทางปฏิบัติปี 69 ของ ศซบ." (2.4s) · left result "✓ พบ: นโยบาย69" (4.0s) · right result "ไม่พบเอกสารในสิทธิ์ของท่าน" (5.0s)
- must teach: If someone may not open a document, the AI must not find it for them either.

## Frame 09 — สิทธิ์จริงมาจากตัวตน + ทะเบียนเอกสาร  ·  79.0–89.0 s
- term chip: Identity + ACL
- on-screen copy (local cue times): headline "สิทธิ์จริงมาจาก" + "ตัวตน + ทะเบียนเอกสาร" (0.3s) · badge chip "Identity" (1.4s) · ledger chip "ACL" (2.2s) · scope pill "ขอบเขตสิทธิ์เดียวกัน" (3.8s) · four items inside in order "เอกสาร · Docs" (4.8s) "ชิ้นข้อมูล · Chunks" (5.4s) "สารบัญ · Tree Nodes" (6.0s) "เครื่องมือ AI · Agent Tools" (6.6s)
- must teach: Identity + the ACL in the document registry define one permission scope shared by docs, chunks, tree nodes and agent tools.

## Frame 10 — กำหนดขอบเขตก่อน แล้วค่อยค้น  ·  89.0–101.0 s
- term chip: Pre-filter
- on-screen copy (local cue times): headline "กำหนดขอบเขตก่อน แล้วค่อยค้น" (0.3s) · left label "× ค้นทั้งคลัง แล้วค่อยกรอง" (1.0s) · residue chips "log" "จำนวนผล" "สรุป" (3.8s) · right label "✓ ขอบเขตก่อน แล้วค่อยค้น" (5.3s) · rule "ถ้ากำลังพลเปิดเอกสารไม่ได้" (7.6s) + "RAG ก็ต้องดึงเอกสารนั้นไม่ได้" (8.1s)
- must teach: Never search the whole archive and filter afterwards; apply the permission scope first.

## Frame 11 — ส่วนที่ยากที่สุด  ·  101.0–111.0 s
- on-screen copy (local cue times): line 1 "ส่วนที่ยากที่สุด ไม่ใช่การสร้าง Embedding" (0.4s) · line 2 "แต่คือการเปลี่ยนข้อมูลกว่า 120 ปี ให้เป็นความรู้ที่" (2.8s) · payoff "เชื่อถือได้" (4.6s) "ค้นหาได้" (5.0s) "รู้สิทธิ์" (5.4s) · chips under them "Reliable" "Searchable" "Permission-aware" (5.8s)
- must teach: The hardest part is not embeddings; it is turning 120+ years of Navy data into reliable, searchable, permission-aware knowledge.

## Brief points that must all be present and correct

1. 120+ years of Navy data in many forms (PDFs, scans/images, charts, tables); the question "how do we build RAG for the RTN?"
2. Ingestion by modality: PDFs → text + structure; scans/images → OCR + vision models; charts/tables → their actual data and relationships.
3. Filename metadata convention <sub-unit>_<unit>_<owner-id>_<version-no>_<year>_<name>.pdf with the example ศซบ_สสท_2600000001_v02_2569_นโยบาย69.pdf (หน่วย กอง/แผนก · เจ้าของ หน่วยขึ้นตรง · เลขประจำตัว 10 หลักของผู้นำเข้า · เวอร์ชัน · ปี · ชื่อเอกสาร).
4. Data governance: every doc/chunk carries SourceID, Version, Classification, Access metadata.
5. Pipeline order: Ingest → Parse → Clean → Chunk → Embed → Index.
6. Hybrid search: keyword (exact names, IDs, terms) + vector (meaning) + metadata filters (date, department, access); do not rely on vector search alone.
7. A reranker selects the most relevant results before the LLM (or another system).
8. If a person cannot open a document, RAG must not retrieve it.
9. Real permissions come from identity + the ACL in the document registry; docs, chunks, tree nodes and agent tools share the same scope.
10. The scope is applied BEFORE searching; never search the whole archive and filter afterwards.
11. Closing: the hardest part is not embeddings; it is turning 120+ years of messy multimodal Navy data into reliable, searchable, permission-aware knowledge.

Constraints: no ships / naval decoration / insignia; never addresses the audience (no "ผู้บังคับบัญชา", "ผู้ไม่มีพื้นฐาน"); no invented numbers or document contents; Thai + English technical terms.
