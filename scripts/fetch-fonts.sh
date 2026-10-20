#!/usr/bin/env bash
# Fetch the Chulabhorn Likit (จุฬาภรณ์ลิขิต) web fonts from the Chulabhorn Royal Academy's
# official download and verify the archive before extracting the WOFF2 files the video uses.
# The font is the 14th Thai government standard font set (Cabinet resolution, 6 July 2021);
# the Academy distributes it free for any use, including commercial. The files are not
# committed to this repository (no explicit redistribution grant); run this script instead.
set -euo pipefail
url="https://www.cra.ac.th/assets/download/Chulabhorn_Likit.zip"
sha256="aad67fd45fab86dbcc6884491b2fd8be5d639a7670a845d66e9947a202ed6029"
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
dest="$root/videos/rtn-rag-explainer/assets/fonts"
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT

curl -sSfL -o "$tmp/fonts.zip" "$url"
echo "$sha256  $tmp/fonts.zip" | sha256sum -c --quiet -
unzip -q "$tmp/fonts.zip" 'webfont/*.woff2' -d "$tmp"
mkdir -p "$dest"
for w in light regular medium bold; do
  W="$(tr '[:lower:]' '[:upper:]' <<< "${w:0:1}")${w:1}"
  cp "$tmp/webfont/chulabhornlikittext-$w.woff2" "$dest/ChulabhornLikitText-$W.woff2"
done
cp "$tmp/webfont/chulabhornlikitdisplay-medium.woff2" "$dest/ChulabhornLikitDisplay-Medium.woff2"
ls "$dest"/ChulabhornLikit*.woff2
