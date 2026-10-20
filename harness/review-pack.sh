#!/usr/bin/env bash
# Review pack decoded from a rendered MP4 (pixels only, never the preview):
# per frame window, a 2 fps strip and a full-resolution settled still.
# Usage: harness/review-pack.sh <video.mp4> <out_dir>
set -euo pipefail
mp4="$1"; out="$2"; mkdir -p "$out"
# id start duration (global seconds, from the assembled timeline)
frames="01-hook 0 9
02-ingest 9 11
03-filename 20 12
04-tags 32 9
05-pipeline 41 9
06-hybrid 50 11
07-rerank 61 7
08-two-people 68 9
09-scope 77 10
10-prefilter 87 10
11-close 97 10"
while read -r id s d; do
  n=$(( d * 2 )); rows=$(( (n + 5) / 6 ))
  ffmpeg -nostdin -hide_banner -loglevel error -y -ss "$s" -t "$d" -i "$mp4" \
    -vf "fps=2,scale=480:-1,drawtext=text='%{eif\:t+$s\:d}.%{eif\:mod((t+$s)*10\,10)\:d}s':x=8:y=8:fontsize=20:fontcolor=white:box=1:boxcolor=0x000000AA,tile=6x${rows}:padding=4:color=0x222222" \
    -frames:v 1 "$out/strip-$id.png"
  settle=$(python3 -I -c "print(round($s + $d - 0.6, 2))")
  ffmpeg -nostdin -hide_banner -loglevel error -y -ss "$settle" -i "$mp4" -frames:v 1 "$out/still-$id.png"
done <<< "$frames"
ls "$out" | wc -l
