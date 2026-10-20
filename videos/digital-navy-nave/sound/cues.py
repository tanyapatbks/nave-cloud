"""Sound design for the Digital Navy / NAVE film (the optional sound version; the silent master
stays the main deliverable). Every time is a frame's global start (from sound/timeline.json,
written from index.html by sound/timeline.mjs) plus the local cue time in STORYBOARD.md, so
re-timing the cut re-times the sound with it.

    cd vendor/whaleyxbt-claude-motion
    python3 -m sfx ../../videos/digital-navy-nave/sound/cues.py

Accent, don't narrate: a calm D-major pad under everything, per-key typing in the composer,
small pops for chips and tiles, soft whooshes on transitions, one impact on "แต่!", one riser
into the NAVE wordmark, chimes only on arrivals (the wordmark, verified, approved, the close).
"""

from sfx.synth import blip, chime, click, envelope, impact, pad, pop, riser, scratch, whoosh

TIMELINE = "../../videos/digital-navy-nave/sound/timeline.json"
OUT = "../../videos/digital-navy-nave/sound/nave-sfx.wav"
TARGET_LUFS = -16.0  # a briefing room, not a feed: sit under the picture
CEILING_DB = -3.5  # true-peak ceiling of the WAV: AAC adds ~2.4 dB of overshoot, so the MP4 stays near -1 dBFS

# D major throughout. Chapter 1 (the problem) rests on B minor, the turn opens into D, the
# roadmap moves to G/D, the close resolves on D6/9.
D = 146.83
B_MIN = [123.47, 246.94, 293.66, 369.99]
D_ADD9 = [146.83, 220.0, 293.66, 369.99, 659.25]
G_OVER_D = [146.83, 196.0, 293.66, 392.0, 493.88]
D_69 = [146.83, 220.0, 293.66, 369.99, 493.88, 659.25]
NOTES = [587.33, 659.25, 739.99, 880.0, 987.77, 1174.66, 1318.51]  # D5 E5 F#5 A5 B5 D6 E6
LOW = [293.66, 329.63, 369.99, 440.0]
CHIME_D = [1174.66, 1479.98, 1760.0]
CHIME_SMALL = [1479.98, 1760.0]

PUSH = ["03-data", "05-nave", "06-mfa", "07-pqc", "08-workspace", "09-prompts", "11-stage1",
        "12-stage2", "13-stage3", "14-stage4", "15-stage5"]
CROSS = ["02-challenge", "04-turn", "10-roadmap"]


def score(mix, tl):
    s = tl["starts"]
    dur = tl["duration"]
    put = mix.put

    def at(fid, t):
        return s[fid] + t

    # --- bed -------------------------------------------------------------------------------
    turn, close = s["04-turn"], s["16-close"]
    volume = envelope([
        (0, 0), (2.0, 0.8), (turn - 0.4, 0.9), (turn + 0.6, 0.25), (turn + 1.6, 1.0),
        (close, 1.0), (close + 6.0, 1.25), (dur - 2.0, 1.25), (dur, 0),
    ])
    chords = [(0, D_ADD9), (s["02-challenge"], B_MIN), (turn + 0.6, D_ADD9),
              (s["10-roadmap"], G_OVER_D), (close, D_69)]
    mix.put_stereo(0, *pad(dur, chords, volume=volume), gain=0.026)

    # --- transitions ---------------------------------------------------------------------
    for fid in PUSH:
        put(at(fid, -0.05), whoosh(0.55, 500, 2600, peak=0.45), 0.07, 0.3)
    for fid in CROSS:
        put(at(fid, -0.1), whoosh(0.8, 300, 1400, peak=0.5, q=0.6), 0.05)
    put(at("16-close", -0.1), whoosh(1.0, 2400, 400, peak=0.4, q=0.6), 0.07)

    # --- 01 hook: the composer types the question ------------------------------------------
    put(at("01-hook", 0.05), pop(500, 260, 0.2), 0.12)
    mix.typing(at("01-hook", 0.6), at("01-hook", 1.95), 22, gain=(0.12, 0.2))
    put(at("01-hook", 2.2), click(2200), 0.2)
    put(at("01-hook", 2.25), blip(NOTES[3], 0.3, 0.08), 0.1)
    put(at("01-hook", 2.6), whoosh(0.6, 700, 2800, peak=0.4), 0.09, -0.1)
    put(at("01-hook", 3.0), blip(NOTES[0], 0.4, 0.12), 0.09)
    put(at("01-hook", 3.9), whoosh(0.7, 300, 1800, peak=0.55), 0.1)
    put(at("01-hook", 4.1), chime(CHIME_SMALL, dur=1.6, tau=0.55), 0.09)
    put(at("01-hook", 4.8), scratch(0.6), 0.06, 0.1)
    for i, t in enumerate((6.9, 7.0, 7.1)):
        put(at("01-hook", t), click(2600 + i * 200, 0.03), 0.07, -0.7 + i * 0.12)

    # --- 02 challenge -------------------------------------------------------------------------
    for i, t in enumerate((1.2, 1.7, 2.0)):
        put(at("02-challenge", t), pop(700 + i * 120, 320, 0.16), 0.15, -0.6)
    put(at("02-challenge", 5.4), whoosh(1.0, 400, 1600, peak=0.6), 0.06, 0.4)
    put(at("02-challenge", 6.35), click(1500), 0.22, 0.4)
    put(at("02-challenge", 6.4), blip(NOTES[2], 0.5, 0.15), 0.12, 0.4)
    for i, t in enumerate((7.0, 7.4, 7.8)):
        put(at("02-challenge", t), pop(900 + i * 150, 420, 0.15), 0.13, 0.1 + i * 0.25)

    # --- 03 data: the questions every unit asks ------------------------------------------------
    put(at("03-data", 2.0), whoosh(0.8, 600, 2000, peak=0.5), 0.05)
    for i, t in enumerate((3.2, 3.8, 4.4, 5.0)):
        put(at("03-data", t), pop(760 + i * 90, 380, 0.15), 0.14, -0.7 + i * 0.45)
    put(at("03-data", 5.6), scratch(0.45), 0.05)
    put(at("03-data", 8.1), pop(420, 260, 0.2), 0.14, 0.2)
    put(at("03-data", 8.6), pop(380, 240, 0.2), 0.14, 0.5)

    # --- 04 turn: the one impact ----------------------------------------------------------------
    put(at("04-turn", -1.4), riser(2.0, 220, 2600), 0.05)
    put(at("04-turn", 0.6), impact(1.4), 0.3)
    put(at("04-turn", 2.6), whoosh(0.6, 600, 2400, peak=0.4), 0.08)
    put(at("04-turn", 3.1), chime(CHIME_D, dur=2.0, tau=0.7), 0.12)

    # --- 05 NAVE: pieces gather, the wordmark lands ---------------------------------------
    put(at("05-nave", 0.9), blip(NOTES[0], 0.4, 0.12), 0.08, -0.4)
    put(at("05-nave", 3.6), riser(1.0, 400, 4200), 0.07)
    for i in range(6):
        put(at("05-nave", 3.65 + i * 0.12), pop(1200 + i * 90, 700, 0.1), 0.05, -0.8 + i * 0.32)
    put(at("05-nave", 4.6), chime(CHIME_D, dur=2.4, tau=0.9), 0.2)
    put(at("05-nave", 4.6), whoosh(0.5, 2600, 600, peak=0.2), 0.08)
    put(at("05-nave", 5.0), blip(NOTES[5], 0.5, 0.15), 0.1, 0.3)
    put(at("05-nave", 5.6), pop(980, 460, 0.15), 0.12)

    # --- 06 MFA: two factors open the door; a leaked password alone does not -------------------
    put(at("06-mfa", 1.4), pop(620, 300, 0.18), 0.12, -0.7)
    put(at("06-mfa", 2.7), click(1700), 0.22, 0.3)
    put(at("06-mfa", 2.75), blip(NOTES[2], 0.35, 0.1), 0.12, 0.3)
    put(at("06-mfa", 3.6), click(1900), 0.22, 0.3)
    put(at("06-mfa", 3.65), blip(NOTES[3], 0.35, 0.1), 0.12, 0.3)
    put(at("06-mfa", 3.7), whoosh(0.5, 900, 2600, peak=0.5), 0.09, 0.3)
    put(at("06-mfa", 4.1), chime(CHIME_SMALL, dur=1.4, tau=0.5), 0.12, 0.5)
    put(at("06-mfa", 6.3), whoosh(0.6, 500, 1500, peak=0.6), 0.06, -0.2)
    put(at("06-mfa", 6.9), click(1700), 0.2, 0.3)
    put(at("06-mfa", 7.0), blip(LOW[0], 0.4, 0.14), 0.16, 0.3)
    put(at("06-mfa", 7.02), blip(LOW[0] * 1.06, 0.4, 0.14), 0.1, 0.3)  # a small rub: refused
    put(at("06-mfa", 7.2), pop(360, 220, 0.18), 0.12, 0.5)

    # --- 07 PQC: stolen today, broken later; the new lock holds ----------------------------------
    put(at("07-pqc", 0.8), scratch(0.8), 0.05)
    put(at("07-pqc", 2.8), whoosh(1.2, 500, 1400, peak=0.6, q=0.7), 0.06, -0.3)
    put(at("07-pqc", 4.4), blip(LOW[1], 0.6, 0.2), 0.12, 0.6)
    put(at("07-pqc", 4.6), scratch(0.5), 0.09, 0.6)
    put(at("07-pqc", 6.4), pop(700, 1100, 0.16), 0.12, -0.6)
    put(at("07-pqc", 7.9), chime(CHIME_SMALL, dur=1.4, tau=0.5), 0.1, 0.5)
    put(at("07-pqc", 8.2), pop(900, 450, 0.14), 0.1)
    put(at("07-pqc", 8.4), pop(1050, 500, 0.14), 0.1)

    # --- 08 workspace hub -------------------------------------------------------------------------
    put(at("08-workspace", 2.4), pop(560, 280, 0.2), 0.14)
    put(at("08-workspace", 3.0), pop(900, 450, 0.14), 0.11, -0.1)
    put(at("08-workspace", 3.4), pop(1000, 500, 0.14), 0.11, 0.1)
    put(at("08-workspace", 3.6), scratch(0.8), 0.05)
    for i, (t, p) in enumerate(((5.6, -0.7), (6.0, 0.7), (6.4, -0.7), (6.8, 0.7))):
        put(at("08-workspace", t), pop(1100 + i * 110, 520, 0.15), 0.13, p)
    put(at("08-workspace", 8.2), whoosh(0.6, 2400, 600, peak=0.7), 0.08)
    put(at("08-workspace", 8.8), chime(CHIME_SMALL, dur=1.4, tau=0.5), 0.09)

    # --- 09 ask, then command ----------------------------------------------------------------------
    mix.typing(at("09-prompts", 1.0), at("09-prompts", 2.3), 26, gain=(0.12, 0.2))
    put(at("09-prompts", 2.5), click(2200), 0.2)
    put(at("09-prompts", 3.2), click(2600, 0.03), 0.12, 0.6)
    put(at("09-prompts", 3.7), click(2800, 0.03), 0.12, 0.6)
    put(at("09-prompts", 4.0), whoosh(0.5, 600, 2200, peak=0.4), 0.07)
    put(at("09-prompts", 5.0), pop(950, 470, 0.15), 0.12, -0.2)
    put(at("09-prompts", 5.4), scratch(0.6), 0.05)
    put(at("09-prompts", 9.0), whoosh(0.45, 2200, 700, peak=0.3), 0.07)
    mix.typing(at("09-prompts", 9.6), at("09-prompts", 11.0), 29, gain=(0.12, 0.2))
    put(at("09-prompts", 11.2), click(2200), 0.2)
    put(at("09-prompts", 12.0), click(2600, 0.03), 0.12, -0.5)
    put(at("09-prompts", 12.6), click(2800, 0.03), 0.12, -0.5)
    put(at("09-prompts", 12.9), pop(520, 300, 0.18), 0.12, 0.1)
    put(at("09-prompts", 15.0), click(1600), 0.22, 0.1)
    put(at("09-prompts", 15.3), chime(CHIME_SMALL, dur=1.4, tau=0.5), 0.12, 0.1)
    put(at("09-prompts", 15.6), whoosh(0.6, 700, 2400, peak=0.5), 0.07, 0.6)
    put(at("09-prompts", 16.8), blip(NOTES[1], 0.4, 0.12), 0.09, 0.1)

    # --- 10 roadmap: stations light, the pin lands ---------------------------------------------
    put(at("10-roadmap", 1.4), scratch(2.0), 0.04)
    for i, t in enumerate((1.6, 2.1, 2.6, 3.1, 3.6)):
        put(at("10-roadmap", t), blip(NOTES[i], 0.35, 0.1), 0.1, -0.8 + i * 0.4)
    put(at("10-roadmap", 4.6), whoosh(0.6, 400, 1600, peak=0.8), 0.07, -0.6)
    put(at("10-roadmap", 5.2), click(1500), 0.2, -0.6)
    put(at("10-roadmap", 5.45), blip(NOTES[3], 0.6, 0.2), 0.12, -0.6)

    # --- 11–15 stages: soft ticks for tiles, one weight for the safety policy --------------------
    def tiles(fid, times, base=1300):
        for i, t in enumerate(times):
            put(at(fid, t), click(base + (i % 5) * 120, 0.03), 0.07, -0.6 + (i % 5) * 0.3)

    for fid in ("11-stage1", "12-stage2", "13-stage3", "14-stage4", "15-stage5"):
        put(at(fid, 0.3), blip(NOTES[0], 0.4, 0.12), 0.08, -0.5)
    tiles("11-stage1", (2.0, 2.4, 2.8))
    tiles("11-stage1", (4.6, 5.0, 5.4, 5.8, 6.2), base=900)
    put(at("12-stage2", 2.0), pop(760, 380, 0.15), 0.12, -0.6)
    put(at("12-stage2", 3.6), pop(900, 1300, 0.14), 0.12, -0.6)
    put(at("12-stage2", 6.5), whoosh(0.8, 600, 1800, peak=0.5), 0.06, -0.6)
    tiles("12-stage2", (8.4, 9.6, 10.8, 12.2), base=1100)
    tiles("12-stage2", (13.8, 14.05, 14.3, 14.55), base=1500)
    tiles("13-stage3", [1.8 + 0.45 * k for k in range(10)])
    put(at("13-stage3", 7.0), whoosh(1.2, 500, 2400, peak=0.7, q=0.7), 0.05)
    tiles("14-stage4", [1.8 + 0.5 * k for k in range(10)])
    put(at("14-stage4", 6.5), scratch(0.5), 0.05)
    put(at("14-stage4", 7.1), pop(420, 180, 0.3), 0.2)
    put(at("14-stage4", 7.12), blip(LOW[2], 0.6, 0.2), 0.12)
    tiles("14-stage4", (9.2, 9.7, 10.2), base=1600)
    for i, t in enumerate((2.0, 2.6, 3.2, 3.8)):
        put(at("15-stage5", t), pop(800 + i * 120, 400, 0.15), 0.12, (-0.6, 0.6, 0.6, -0.6)[i])
    put(at("15-stage5", 5.0), scratch(1.2), 0.04)
    put(at("15-stage5", 5.4), chime(CHIME_D, dur=2.0, tau=0.7), 0.12)
    put(at("15-stage5", 6.2), whoosh(2.0, 400, 2000, peak=0.5, q=0.6), 0.05)

    # --- 16 close ------------------------------------------------------------------------------------
    put(at("16-close", 0.7), blip(NOTES[0], 0.5, 0.15), 0.09)
    put(at("16-close", 1.2), scratch(0.4), 0.05)
    put(at("16-close", 1.9), blip(NOTES[2], 0.45, 0.14), 0.07)
    put(at("16-close", 3.1), blip(NOTES[3], 0.45, 0.14), 0.07)
    put(at("16-close", 4.8), blip(NOTES[4], 0.5, 0.15), 0.08)
    put(at("16-close", 6.0), chime(CHIME_D + [2349.32], dur=3.2, tau=1.2), 0.22)
    put(at("16-close", 6.6), pop(980, 460, 0.15), 0.1)
    put(at("16-close", 8.2), blip(NOTES[5], 0.8, 0.3), 0.07)
