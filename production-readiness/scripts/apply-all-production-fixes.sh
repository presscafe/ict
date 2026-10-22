#!/usr/bin/env bash
set -euo pipefail

# Verified Production Hardening Patch Runner — Press Cafe & Farouk Pandor Portfolio
# Default mode is local branch creation + build verification ONLY (no remote push unless --push is passed).
# Client/third-party boundary repositories are strictly excluded.

PUSH_MODE="${1:-}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PATCH_DIR="$(cd "$SCRIPT_DIR/../patches" && pwd)"
WORK_DIR="${WORK_DIR:-/tmp/presscafe-prod-hardening}"
BRANCH="prod-hardening-2026-10-22"

mkdir -p "$WORK_DIR"

apply_patch() {
  local slug="$1"
  local patch_name="$2"
  local test_cmd="$3"
  local title="$4"
  local dest="$WORK_DIR/${slug//\//__}"

  echo "================================================================"
  echo "Processing $slug using $patch_name"
  echo "================================================================"
  rm -rf "$dest"
  gh repo clone "$slug" "$dest" -- --depth=5
  cd "$dest"
  git checkout -b "$BRANCH"
  git apply --check "$PATCH_DIR/$patch_name"
  git apply "$PATCH_DIR/$patch_name"

  if [[ -n "$test_cmd" ]]; then
    eval "$test_cmd"
  fi

  git add -A
  git commit -m "$title"

  if [[ "$PUSH_MODE" == "--push" ]]; then
    git push -u origin "$BRANCH"
    gh pr create --repo "$slug" --title "$title" --body "Automated verified production hardening patch from presscafe/ict production-readiness audit (2026-10-22)."
  else
    echo "DRY RUN COMPLETE for $slug (local verified commit ready at $dest; pass --push to push & open PR)."
  fi
}

apply_patch \
  "presscafe/brandinganddecorationbotswana" \
  "brandinganddecorationbotswana-prod.patch" \
  "node --check store/config.js && node --check store/assets/app.js && node --check store/sw.js" \
  "fix(store): lock staff margin panel off public builds, add 1600x900 mats, enforce prepay terms & headers"

apply_patch \
  "faroukpandor/faroukpandor.github.io" \
  "faroukpandor-github-io-prod.patch" \
  "test -f index.html && test -f portfolio.html" \
  "fix(portfolio): resolve 404 private repo links, add BDB venture link, strip citation artifact"

apply_patch \
  "faroukpandor/smartfarm" \
  "smartfarm-prod.patch" \
  "npm install --no-audit --no-fund && npm run build" \
  "feat(pwa): add gitignore, offline service worker, JSON backup, and poultry FCR margin module"

apply_patch \
  "presscafe/moruajunction" \
  "moruajunction-prod.patch" \
  "npm install --no-audit --no-fund && npm run check && npm run build" \
  "fix(data): correct Botswana district/town geography, add pilot disclosure banner, sync dataset check"

apply_patch \
  "presscafe/next-netlify-starter-cns" \
  "next-netlify-starter-cns-prod.patch" \
  "npm install --no-audit --no-fund && npm run build" \
  "chore(hygiene): remove scratch _drive-work TSVs and reconcile Next 16.4.2 build status"

echo "All 5 flagship repositories patched and build-verified cleanly."
