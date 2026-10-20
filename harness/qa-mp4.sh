#!/usr/bin/env bash
# MP4 sensors for a rendered cut. Prints one line per sensor and a final counter line
# ending in FAIL=<n>. Usage: harness/qa-mp4.sh <video.mp4> [expected_seconds] [out_dir]
set -euo pipefail
mp4="$1"; expect="${2:-}"; out="${3:-$(dirname "$mp4")/qa}"
mkdir -p "$out"
fail=0; warn=0
say() { printf '%-5s %s\n' "$1" "$2"; [ "$1" = FAIL ] && fail=$((fail+1)); [ "$1" = WARN ] && warn=$((warn+1)); return 0; }

# 1. Spec: 1920x1080, 30/1 CFR, H.264 yuv420p, frame count = duration x 30 (+-1)
read -r w h fps pix codec nb dur < <(ffprobe -v error -select_streams v:0 -count_frames \
  -show_entries stream=width,height,r_frame_rate,pix_fmt,codec_name,nb_read_frames:format=duration \
  -of default=nw=1:nk=1 "$mp4" | paste -sd' ' | awk '{print $2,$3,$5,$4,$1,$6,$7}')
spec="${w}x${h} ${fps} ${codec} ${pix} frames=${nb} dur=${dur}s"
if [ "$w" = 1920 ] && [ "$h" = 1080 ] && [ "$fps" = 30/1 ] && [ "$codec" = h264 ] && [ "$pix" = yuv420p ]; then say ok "spec $spec"; else say FAIL "spec $spec (want 1920x1080 30/1 h264 yuv420p)"; fi
python3 -I - "$nb" "$dur" "$expect" <<'EOF' && say ok "frame count matches duration" || say FAIL "frame count / duration mismatch"
import sys
nb, dur, exp = int(sys.argv[1]), float(sys.argv[2]), sys.argv[3]
ok = abs(nb - round(dur * 30)) <= 1 and (not exp or abs(dur - float(exp)) <= 0.5)
sys.exit(0 if ok else 1)
EOF

# 2. Freezes longer than 4 s (the final 5 s end card is exempt). A planned held read listed in
#    PLANNED_HOLDS ("start-end,start-end" in global seconds) may freeze up to 5.5 s inside its window.
log=$(ffmpeg -hide_banner -nostats -i "$mp4" -vf "freezedetect=n=0.001:d=4" -map 0:v -f null - 2>&1 || true)
starts=$(grep -oE "freeze_start: [0-9.]+" <<< "$log" | awk '{print $2}' || true)
durs=$(grep -oE "freeze_duration: [0-9.]+" <<< "$log" | awk '{print $2}' || true)
bad=""; planned=""
paste <(printf '%s\n' $starts) <(printf '%s\n' $durs) | while read -r s fd; do
  [ -z "$s" ] && continue
  fd="${fd:-$(awk -v s="$s" -v d="$dur" 'BEGIN{print d-s}')}"
  awk -v s="$s" -v d="$dur" 'BEGIN{exit !(s >= d-5)}' && continue
  if python3 -I -c "import sys; s,fd=float(sys.argv[1]),float(sys.argv[2]); w=[tuple(map(float,x.split('-'))) for x in sys.argv[3].split(',') if x]; sys.exit(0 if fd<=5.5 and any(a<=s and s+fd<=b for a,b in w) else 1)" "$s" "$fd" "${PLANNED_HOLDS:-}"; then
    echo "planned $s+${fd}s"; else echo "bad $s+${fd}s"; fi
done > "$out/.freezes"
bad=$(grep '^bad' "$out/.freezes" | cut -d' ' -f2 | paste -sd' ' || true)
planned=$(grep '^planned' "$out/.freezes" | cut -d' ' -f2 | paste -sd' ' || true)
rm -f "$out/.freezes"
if [ -z "$bad" ]; then say ok "no unplanned freeze > 4s outside the end card${planned:+ (planned holds: $planned)}"; else say FAIL "freeze > 4s at: $bad"; fi

# 3. Black frames
blacks=$(ffmpeg -hide_banner -nostats -i "$mp4" -vf "blackdetect=d=0.1:pic_th=0.98:pix_th=0.10" -map 0:v -f null - 2>&1 | grep -c "black_start" || true)
if [ "$blacks" = 0 ]; then say ok "no black segments"; else say FAIL "$blacks black segment(s)"; fi

# 4. Review pack: one cell per second, 10 columns, decoded from the MP4 itself
sheets=$(python3 -I -c "import math; print(math.ceil(float('$dur') / 60))")  # 60 cells per sheet
ffmpeg -hide_banner -loglevel error -y -i "$mp4" -vf "fps=1,scale=384:-1,tile=10x6:padding=4:color=0x222222" -frames:v "$sheets" "$out/sheet-%02d.png"
say ok "review pack: $(ls "$out"/sheet-*.png | wc -l) sheet(s) in $out"

printf 'qa-mp4: FAIL=%d WARN=%d\n' "$fail" "$warn"
exit $(( fail > 0 ))
