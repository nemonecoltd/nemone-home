#!/bin/bash -l
set -euo pipefail

# home 배포 스크립트 (정적 export → msm VM 원자적 스왑)
# GitHub Actions(nemone-home)는 인프라 이전 전 구 서버 시크릿이 남아있어 아직 고장 상태 —
# 고칠 때까지 이 스크립트로 직접 배포한다.

cd "$(dirname "$0")"

SSH_KEY="$HOME/.ssh/msm_ci"
SSH_TARGET="ubuntu@34.64.111.65"
REMOTE_DIR="/home/ubuntu/apps/home_dist"

echo "▶ 빌드"
npm run build

echo "▶ 정적 파일 업로드"
TARBALL="/tmp/home_dist_$(date +%s).tar.gz"
tar -czf "$TARBALL" -C out . 2>/dev/null
scp -i "$SSH_KEY" "$TARBALL" "$SSH_TARGET:/tmp/"

echo "▶ 원자적 스왑"
ssh -i "$SSH_KEY" "$SSH_TARGET" "
  set -e
  rm -rf $REMOTE_DIR/dist_new
  mkdir -p $REMOTE_DIR/dist_new
  tar -xzf /tmp/$(basename "$TARBALL") -C $REMOTE_DIR/dist_new 2>/dev/null
  rm -rf $REMOTE_DIR/dist_old
  mv $REMOTE_DIR/dist $REMOTE_DIR/dist_old
  mv $REMOTE_DIR/dist_new $REMOTE_DIR/dist
  rm -rf $REMOTE_DIR/dist_old /tmp/$(basename "$TARBALL")
"
rm -f "$TARBALL"

echo "✅ home 배포 완료: $(date)"
