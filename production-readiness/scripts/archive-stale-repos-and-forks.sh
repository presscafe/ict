#!/usr/bin/env bash
set -euo pipefail

# Safe Portfolio Hygiene Archiver (Dry-Run by Default; ZERO Deletions; Client Boundary Hard-Blocked)
# Usage:
#   bash production-readiness/scripts/archive-stale-repos-and-forks.sh           # Safe preview list
#   bash production-readiness/scripts/archive-stale-repos-and-forks.sh --execute # Archive untouched forks & empty repos

MODE="${1:---dry-run}"

# STRICT CLIENT / SHARED BOUNDARY BLOCKLIST — NEVER MODIFY OR ARCHIVE WITHOUT WRITTEN AUTHORITY
BLOCKED_REGEX='^(faroukpandor/(yellow-blue-pwa|yellowblue-pwa|YELLOWBLUEPWA|YELLOW-BLUE-LOGISTICS|YELLOW-BLUE-CARGO|YELLOW-BLUE-PROGRESSIVE-WEB-APPLICATION-3|YB17\.12\.2025|MegaDealsMA---B2B-B2C-E-Commerce-Platform|tshono\.com---Digital-Prosperity-Ecosystem))$'

# CORE ACTIVE REPOSITORIES KEPT LIVE & UNARCHIVED
KEEP_LIVE_REGEX='^(presscafe/(ict|brandinganddecorationbotswana|moruajunction|next-netlify-starter-cns|presscafe|reka-botswana|ssmab|tradingbot)|faroukpandor/(faroukpandor\.github\.io|smartfarm|agrisphere|ghost-farouk))$'

for owner in presscafe faroukpandor; do
  echo "=== Scanning $owner (mode: $MODE) ==="
  gh repo list "$owner" --limit 200 --json nameWithOwner,isFork,isArchived,diskUsage \
    --jq '.[] | select(.isArchived == false) | "\(.nameWithOwner)\t\(.isFork)\t\(.diskUsage)"' | \
  while IFS=$'\t' read -r full_name is_fork disk_kb; do
    if [[ "$full_name" =~ $BLOCKED_REGEX ]]; then
      echo "  [SKIP — CLIENT BOUNDARY HANDS-OFF] $full_name"
      continue
    fi
    if [[ "$full_name" =~ $KEEP_LIVE_REGEX ]]; then
      echo "  [KEEP LIVE — CORE PORTFOLIO]       $full_name"
      continue
    fi
    if [[ "$is_fork" == "true" || "$disk_kb" == "0" ]]; then
      if [[ "$MODE" == "--execute" ]]; then
        echo "  [ARCHIVING] $full_name (fork=$is_fork, size=${disk_kb}KB)"
        gh repo archive "$full_name" --yes
      else
        echo "  [WOULD ARCHIVE] $full_name (fork=$is_fork, size=${disk_kb}KB)"
      fi
    fi
  done
done
