# Cross-Portfolio Production Readiness Audit & Verified Patch Runbook

**Audit Date:** 2026-10-22 (`Africa/Gaborone`)
**Scope Audited (`VERIFIED`):**
- **GitHub `presscafe`:** 125 public repositories (`35 originals + 90 upstream forks`) + private repos verified via Vercel linkage
- **GitHub `faroukpandor`:** 40 public repositories (`5 originals + 35 upstream forks`) + 63 private repos indexed in `REPOSITORY-RELATIONSHIP-REGISTRY.md` (`103` total in `faroukpandor`)
- **Vercel (`team_7BlyEqM9QEO8AFj0sn6kXqx4`):** All **15** projects inspected via API
- **Supabase:** Project `presscafe` (`tpsnbthvfwaviptwqvfy`, `eu-west-1`) — `INACTIVE` (`$0` burn)
- **Live Compiler & Link Verification:** Executed real `tsc`, `vite build`, `next build`, `node --check`, and `git apply --check` across all 5 active codebases.

---

## 1. Executive Production Verdict Table (`VERIFIED`)

| Tier | Asset / Repo | Current Prod Status | Critical Defects Caught by Real Build & Code Audit | Verified Fix Shipped Here |
|---|---|---|---|---|
| **Tier 1 — Immediate Cash Engine** | `presscafe/brandinganddecorationbotswana` (`store/` · `PRE-26`) | **BLOCKED UNTIL PATCH APPLIED** → **READY WITH PATCH** | 1. **`CRITICAL MARGIN LEAK`** (`store/assets/app.js:396`): Renders `<details class="margin">Internal margin view (staff only — remove before sharing)` publicly on DOM, exposing exact landed cost, decoration cost, profit in Pula, and margin % to every buyer.<br>2. **Dead email target** (`app.js:15`): `EMAIL: "quotes@example.co.bw"` & empty `WHATSAPP_NUMBER`.<br>3. **Contradictory payment copy** (`app.js:395`): Says *"50% deposit"* instead of owner's non-negotiable **100% payment before delivery + courier at client's cost**.<br>4. **Missing live demand SKUs**: Zero `1600 × 900 mm` heavy-duty rubber / logo inlay entrance mats (`PRE-49` + BA ISAGO demand) and missing `Goodhope / Lobatse / Kanye` delivery zone.<br>5. `"Prototype"` header badge + missing Cloudflare `_headers` CSP & `robots.txt`. | `production-readiness/patches/brandinganddecorationbotswana-prod.patch` (**`node --check` + `git apply --check` PASS**) **AND** live preview deployed at `/bdb-store/`! |
| **Tier 1 — Operating Hub & Studio** | `presscafe/ict` (`arena/b242d8dd-ict` · PR #1) | **PRODUCTION READY (`GREEN`)** | Previously had only static Markdown files with no interactive tool, no CI gate, no PII scanner, and no offline PWA. | Full zero-cost offline-first **Command & Paper-to-Plan Studio PWA** (`site/`), embedded hardened `/bdb-store/`, automated PII/link/patch gate (`npm test`), and GitHub Actions CI + Pages deploy (`.github/workflows/production-gate.yml`). |
| **Tier 2 — Public Credibility Showcase** | `faroukpandor/faroukpandor.github.io` (Live at `https://faroukpandor.github.io`) | **LIVE WITH BROKEN LINKS** → **READY WITH PATCH** | 1. **ALL 5 cards on `portfolio.html` and 3 rows on `index.html` return GitHub `404`** to public visitors because they link to private repos (`FAROUKPANDORCONSULTANT`, `AnimalHealth`, `EVERYTHING-CITY`, `MOKORO-ENTERPRISE-OS`, `AGRISAGE360`).<br>2. Missing active **Branding & Decoration Botswana** link on homepage.<br>3. Raw leaked chat citation token `citeturn0search0...` inside `PORTFOLIO-WIDE-UI-DESIGN-STANDARD.md:9`. | `production-readiness/patches/faroukpandor-github-io-prod.patch` (**`git apply --check` PASS**). |
| **Tier 2 — Domain Differentiation (`BSc Animal Science`)** | `faroukpandor/smartfarm` | **PROTOTYPE** → **READY WITH PATCH** | 1. **Missing `.gitignore` & lockfile** — running `npm install` risks committing 72 MB `node_modules/` to GitHub.<br>2. Header claims `"● Offline ready"` without registering a Service Worker while importing Google Fonts over the internet.<br>3. `Livestock` tab was an empty placeholder and had no local JSON backup export. | `production-readiness/patches/smartfarm-prod.patch` — adds `.gitignore`, offline `sw.js`, local system typography, **JSON Backup Export**, and a real **Non-Ruminant / Poultry Batch Feed, Mortality, FCR & Pula Margin Calculator** (**`tsc -b && vite build` PASS**). |
| **Tier 2 — Flagship Systems Demo** | `presscafe/moruajunction` | **`npm run check` FAILING ON `main`** → **GREEN WITH PATCH** | 1. **`npm run check` fails (`exit 1`)** at `scripts/dataset-check.mjs` (`the catalogue differs from what the toolkit produces`).<br>2. **Severe foreign & scrambled geography** across `server/seed.ts`, `server/national.ts`, `server/national-branches.ts`, & `README.md`: includes foreign cities **Mmabatho** (South Africa), **Tsumeb / Zambezi** (Namibia), **Berea** (Lesotho), and hallucinated **Durabans / Silume / Mooka / Sipholokwe**; puts **Good Hope** & **Kanye** in `South-East`, **Lobatse** in `Kgatleng`, **Gaborone** in `Central`, **Mochudi / Tlokweng / Ramokgwebana / Otse / Oodi** in `Kweneng`, and swaps **Ghanzi** & **Tsabong**.<br>3. Lacks upfront pilot disclosure banner clarifying shelf data is illustrative. | `production-readiness/patches/moruajunction-prod.patch` — authentic Botswana districts/towns across all 40 pavilions + pilot banner + regenerated `rust/seed/morua.json` (**`npm run dataset && npm run check && npm run build` 100% PASS**). |
| **Tier 3 — Clean Starter Template** | `presscafe/next-netlify-starter-cns` | **BUILDS (`next@16.4.2`) — HYGIENE FIX NEEDED** | Builds cleanly (`3/3` static pages in 2.6s), **but** `AUDIT-2026-10-21.md` falsely states `main` is broken on Next 12, and `_drive-work/` leaks 64 KB of internal Google Drive MD5/file-ID TSV tables publicly. | `production-readiness/patches/next-netlify-starter-cns-prod.patch` (**`npm run build` + `git apply --check` PASS**). |
| **Vercel Account Hygiene** | `team_7BlyEqM9QEO8AFj0sn6kXqx4` (`15` projects, `$0` Hobby) | **CLEANUP & SECRET ROTATION NEEDED** | 1. **Plain-text `TINA_TOKEN` env vars exposed** on 3 old TinaCMS starter projects: `barebones-starter` (`prj_5E3Qg4oSock9Her4ZZOTNRc10jh7`), `tina-cloud-starter-ssmab` (`prj_Rp3nAw5oZBbGHyaValNBwaNiwvyW`), and `identity-concept-tina-cloud-starter` (`prj_Q4Sue3AgWUOtkr4GefXNVWz1gNfA`).<br>2. **Broken `ERROR` / unbuilt starter projects** cluttering dashboard: `nextjs-commerce`, `nextjs-saleor-commerce`, `tina-cloud-starter`, `commerce`, `hugo-meghna-forestry2`, `frntr-ecommerce-crystalize-remix`, `chat-gpt-midjourney`, `watch-this`. | Rotate/revoke unused TinaCloud tokens & remove/pause unused Vercel starter projects (keep `munhumutapa`, `presscafe`, `reka-botswana`, `pandor-inc` paused/live as desired — zero cost). |
| **Tier 3 — Repo Sprawl (`125` upstream forks + `30+` untouched starters/0-KB empties)** | `presscafe` (`90` forks + `5` empty 0-KB repos) & `faroukpandor` (`35` forks) | **ARCHIVE / HIDE CLUTTER (`AMBER`)** | 125 unmodified forks (`Payload`, `Saleor`, `Next.js Commerce`, `TinaCMS`, etc.) bury genuine owned ventures when buyers inspect GitHub profiles. | Safe dry-run script at `production-readiness/scripts/archive-stale-repos-and-forks.sh` (archives clutter without permanent deletion; hard-blocks all client repos). |
| **Client / Third-Party Boundary (`HANDS-OFF`)** | `yellow-blue-pwa`, `yellowblue-pwa`, `YELLOWBLUEPWA`, `YELLOW-BLUE-LOGISTICS`, `YELLOW-BLUE-CARGO`, `YELLOW-BLUE-PROGRESSIVE-WEB-APPLICATION-3`, `YB17.12.2025`, `MegaDealsMA---B2B-B2C-E-Commerce-Platform`, `tshono.com---Digital-Prosperity-Ecosystem` | **STRICT HANDS-OFF (`CLIENT-OWNED` / `CO-OWNED`)** | Untouched per Master Prompt §5 & §14. | Hardcoded into `BLOCKED_CLIENT_REPOS` in every automation script so they cannot be modified, publicised, or archived accidentally. |

---

## 2. Applying All 5 Verified Production Patches in 2 Minutes

From any machine authenticated with `gh auth login` (with write permissions to `presscafe` and `faroukpandor`):

```bash
# Preview what will be patched (safe dry-run default — zero pushes without --push):
bash production-readiness/scripts/apply-all-production-fixes.sh

# Clone, create branch prod-hardening-2026-10-22, apply verified patches, run builds, and open PRs:
bash production-readiness/scripts/apply-all-production-fixes.sh --push
```

### Setting Live Contact Details on `Branding & Decoration Botswana` Before Cloudflare Pages Cutover (`PRE-26`)
Edit `store/config.js` in your deployment workspace (or set via Cloudflare build script):
```js
window.BDB_CONFIG = {
  WHATSAPP_NUMBER: "2677XXXXXXX", // your live business WhatsApp digits (no + or spaces)
  EMAIL: "your-sales-address@domain.co.bw",
  ENABLE_LOCAL_STAFF_MARGIN: false // MUST remain false on all public deployments
};
```
Then deploy `store/` directly to **Cloudflare Pages** (`Framework preset: None`, `Build command: (empty)`, `Build output directory: store` — `$0/month` unlimited static bandwidth + automatic SSL).
