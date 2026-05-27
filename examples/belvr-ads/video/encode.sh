#!/usr/bin/env bash
# Encode the frames captured by record.js into a Reels-ready MP4.
# - H.264 yuv420p (max compatibility, plays in Safari/iOS)
# - 30fps to match the capture rate
# - Silent AAC stereo audio track (some platforms reject videos without one)
# - faststart (web-streamable, no initial buffer pause)
set -euo pipefail

cd "$(dirname "$0")"
FRAMES_DIR=/tmp/belvr-frames
OUT=belvr-spot.mp4

if [ ! -d "$FRAMES_DIR" ]; then
  echo "No frames found at $FRAMES_DIR. Run record.js first." >&2
  exit 1
fi

ffmpeg -y -hide_banner -loglevel warning \
  -framerate 30 -i "$FRAMES_DIR/frame-%04d.jpg" \
  -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=48000 \
  -c:v libx264 -pix_fmt yuv420p -crf 18 -preset medium \
  -c:a aac -b:a 128k -shortest \
  -movflags +faststart \
  "$OUT"

echo "Wrote $OUT"
ls -lh "$OUT"
