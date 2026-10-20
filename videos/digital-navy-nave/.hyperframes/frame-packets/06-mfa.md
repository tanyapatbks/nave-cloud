# Frame packet: 06-mfa

## Project inputs

- Project: /home/user/nave-cloud/videos/digital-navy-nave
- Design tokens: /home/user/nave-cloud/videos/digital-navy-nave/frame.md
- RULES_DIR: /home/user/nave-cloud/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 6 — ประตูแรก: MFA

- scene: The signed-in person passes a door with two factors and is verified; a leaked password alone stays locked out at a second door
- voiceover:
- duration: 11s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/06-mfa.html
- type: feature_showcase
- persuasion: Demonstration (two factors open the door) + counterexample (one leaked factor does not)
- beat: Confidence + reassurance
- blueprint: compose
- term: MFA · Multi-Factor Authentication
- focal: the two factor slots of each door
- roles: headline = supporting · gate (two stacked doors) = foreground subject · upper lane (person + two factors) = foreground subject (Scene 2) · lower lane (leaked password) = foreground subject (Scene 3) · result chips = supporting
- onscreen: headline "เริ่มจากยกระดับความปลอดภัย" + "ของระบบภายใน ทร. ด้วย MFA" (0.3s) · person "น.อ.aaaaa" (1.4s) · factor "รหัสผ่าน" (2.0s) · factor "ยืนยันผ่านแอปบนมือถือ" (2.9s) · verified "ยืนยันตัวตนแล้ว" (4.0s) · attempt "แม้รหัสผ่านจะรั่วไหล" (6.0s) · denied "ก็ยังเข้าสู่ระบบไม่ได้" (7.2s)

narrativeRole: Shows the first concrete move: stronger security on internal systems through more than one proof of identity.
keyMessage: With MFA a password alone is not enough — even a leaked password cannot get in.

Scene 1 (0.0–1.4s): headline per phrase, two authored lines (component 2) as [เริ่มจากยกระดับ][ความปลอดภัย] · [ของระบบภายใน ทร.][ด้วย MFA]; "MFA" in cobalt weight. The gate draws in at x 1180–1420 as two stacked doors (card-tinted, radius 20px, each split by a vertical seam into two leaves with a small cobalt padlock on the seam): upper door y 340–590, lower door y 610–860. Each door has two empty 64px factor slots on its left face at x 1196 (upper slots y 380–444 and 470–534; lower slots y 650–714 and 740–804), dashed 2px cobalt-35% outlines.
Scene 2 (1.4–5.6s): upper lane, left of the gate: the identity badge (component 6, signed-in ring) with "น.อ.aaaaa" at x 96, y≈380–476 (1.4s). Factor 1: a chip "รหัสผ่าน" with a key glyph at its right end travels right on the upper-slot-1 row and stops with only the glyph inside slot 1, the Thai text staying on screen left of the gate (2.0–2.7s); the slot turns solid #0B6A45 with the white shared check. Factor 2: a chip "ยืนยันผ่านแอปบนมือถือ" with a phone glyph (the shared check on its screen) does the same into slot 2 (2.9–3.6s; second check). The upper door's leaves part (3.7–4.1s, power3.inOut) and stay open; the success badge "ยืนยันตัวตนแล้ว" (success-solid, white text + check) appears right of the gate at x 1448–1760, y 431–480 (4.0s).
Scene 3 (5.6–11.0s): lower lane: an "outsider" ghost token (dashed #8A867A outline, no person, a key glyph at its right end) with the line "แม้รหัสผ่านจะรั่วไหล" (#5F5B50, 34px) appears left of the lower door (6.0s) and slides so its key glyph docks into lower slot 1 (6.3–6.9s; outline only, no check); lower slot 2 stays empty and its outline turns red (#9B2D27) with a small × (7.0s); the lower door never opens. The deny chip "ก็ยังเข้าสู่ระบบไม่ได้" (#b42318 on #fde7e3, × icon) lands right of the gate at x 1448–1780, y 700–749 (7.2s). The deny chip and the empty slot pulse once together (7.8s). Hold still from 8.2s.
