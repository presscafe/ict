/* Press Cafe & Farouk Pandor — Command & Paper-to-Plan Studio
   Zero external dependencies. Offline-first PWA. Strict public-repo privacy: no PII or secrets hardcoded. */

const STORAGE_KEY = "presscafe_command_studio_v1";

const DEFAULT_PAPER_NOTES = [
  {
    id: "P1-01",
    text: "Close live 1600x900mm black/grey rubber door mat enquiry + lock trade price from Branded Mats SA & Perkal",
    desire: "fast_cash",
    lane: "ENT-01 · Branding & Decoration Botswana",
    rev: 5,
    feas: 5,
    impact: 5,
    urgency: 5,
    cost: 1,
    risk: 1
  },
  {
    id: "P1-02",
    text: "Send Q4 corporate workwear, golf shirt, gazebo & year-end gift catalogue offers to 25 Botswana buyers",
    desire: "core_vision",
    lane: "ENT-01 · Branding & Decoration Botswana",
    rev: 5,
    feas: 5,
    impact: 5,
    urgency: 4,
    cost: 1,
    risk: 1
  },
  {
    id: "P1-03",
    text: "Launch fixed B&D Botswana Instant Quote Storefront on Cloudflare Pages (margin leak removed + entrance mats added)",
    desire: "core_vision",
    lane: "ENT-01 · Branding & Decoration Botswana",
    rev: 4,
    feas: 5,
    impact: 4,
    urgency: 4,
    cost: 1,
    risk: 1
  },
  {
    id: "P1-04",
    text: "Non-ruminant poultry feed efficiency (FCR) & batch profit advisory pack + SmartFarm offline tool for Botswana producers",
    desire: "core_vision",
    lane: "ENT-03 · SmartFarm / Animal Science",
    rev: 4,
    feas: 4,
    impact: 4,
    urgency: 3,
    cost: 2,
    risk: 1
  },
  {
    id: "P1-05",
    text: "Fix broken 404 private repo links on faroukpandor.github.io before sharing portfolio with corporate partners",
    desire: "shape_together",
    lane: "ENT-04 · Farouk Pandor Consulting",
    rev: 3,
    feas: 5,
    impact: 4,
    urgency: 4,
    cost: 1,
    risk: 1
  },
  {
    id: "P1-06",
    text: "Archive 125 untouched upstream forks across presscafe & faroukpandor so genuine Botswana ventures stand out cleanly",
    desire: "delegate",
    lane: "SYS-01 · Operating System & GitHub Hygiene",
    rev: 2,
    feas: 5,
    impact: 3,
    urgency: 3,
    cost: 1,
    risk: 1
  }
];

const DEAL_PRESETS = [
  {
    id: "pre49_plain",
    label: "PRE-49 · 1600×900 Rubber Mat (Plain)",
    item: "Heavy-Duty Commercial Bevelled Rubber Door Mat — 1600 × 900 mm (Black / Grey)",
    supplier: "Branded Mats SA / Perkal (Oct 2026 Trade Quote)",
    qty: 2,
    zar: 950,
    fx: 0.77,
    freight: 380,
    decor: 0,
    setup: 0,
    margin: 38,
    courier: 220,
    lead: "7–10 working days from payment confirmation"
  },
  {
    id: "pre49_logo",
    label: "PRE-49 · 1600×900 Custom Logo Inlay Mat",
    item: "Custom Company Logo Inlay Heavy-Duty Entrance Mat — 1600 × 900 mm (Black / Grey + Logo)",
    supplier: "Branded Mats SA (Oct 2026 Custom Inlay Trade Quote)",
    qty: 2,
    zar: 1850,
    fx: 0.77,
    freight: 420,
    decor: 0,
    setup: 250,
    margin: 38,
    courier: 220,
    lead: "10–14 working days from vector artwork sign-off & 100% payment"
  },
  {
    id: "cl12_ishmael_audit",
    label: "CL-12 · Ishmael Koos Broiler Outgrower Advisory & Biosecurity Pack",
    item: "35-Day (2.0kg @ P24.50/kg Liveweight) Broiler House Biosecurity Audit, Integrator Pitch Submission + Biosecurity Conti Suits & Footbath Mats",
    supplier: "Farouk G. Pandor (BSc Animal Science — Non-Ruminant Stream) + B&D Biosecurity Pack",
    qty: 1,
    zar: 1650,
    fx: 1.0,
    freight: 0,
    decor: 350,
    setup: 1500,
    margin: 45,
    courier: 0,
    lead: "Immediate digital model + scheduled on-farm house inspection prior to integrator submission"
  },
  {
    id: "pitch01_khoemacau_wedge",
    label: "PITCH-01 · Khoemacau Phase 1 Anti-Fraud Verify Portal Wedge",
    item: "Standalone Official RFQ, Domain & Recruitment Anti-Fraud Micro-Portal (verify.khoemacau.com) + Lookalike Domain Defensive Audit (Zero ERP Exposure)",
    supplier: "Press Cafe (Pty) Ltd Engineering + Specialist Security Review Partner",
    qty: 1,
    zar: 18500,
    fx: 1.0,
    freight: 0,
    decor: 0,
    setup: 9500,
    margin: 48,
    courier: 0,
    lead: "14 working days from stakeholder sign-off (+ P4,500/mo managed edge SLA)"
  },
  {
    id: "pre21_workwear",
    label: "PRE-21A · 50× Reflective Conti Suits (Sweet-Orr)",
    item: "2-Piece Polycotton Conti Suit with Reflective Tape + Left-Chest Embroidery",
    supplier: "Sweet-Orr SA Trade Account (Verify Oct/Nov 2026 Sheet)",
    qty: 50,
    zar: 295,
    fx: 0.77,
    freight: 1450,
    decor: 38,
    setup: 250,
    margin: 36,
    courier: 400,
    lead: "7–12 working days from size breakdown, artwork approval & payment"
  },
  {
    id: "pre21_golfers",
    label: "PRE-21B · 35× Branded Golf Shirts (Captivity)",
    item: "Moisture-Management Corporate Golf Shirt + Embroidered Logo",
    supplier: "Captivity JHB Trade Account",
    qty: 35,
    zar: 145,
    fx: 0.77,
    freight: 750,
    decor: 38,
    setup: 250,
    margin: 40,
    courier: 220,
    lead: "7–10 working days from size curve, embroidery proof & payment"
  },
  {
    id: "pre21_gazebo",
    label: "PRE-21D · Branded 3×3m Gazebo Kit (National Flag)",
    item: "3 × 3 m Heavy-Duty Full-Colour Sublimated Corporate Gazebo + Carry Bag",
    supplier: "National Flag Trade Account",
    qty: 1,
    zar: 4650,
    fx: 0.77,
    freight: 650,
    decor: 0,
    setup: 0,
    margin: 35,
    courier: 350,
    lead: "10–14 working days from print proof sign-off & 100% payment"
  }
];

const REPO_MATRIX = [
  {
    tier: "Tier 1 · Cash Engine",
    repo: "presscafe/brandinganddecorationbotswana",
    status: "PATCH VERIFIED + LIVE PREVIEW",
    badge: "green",
    findings: "Fixed public customer exposure of staff gross-margin table (app.js:396), replaced dead quotes@example.co.bw, enforced 100% payment before delivery + buyer-account courier, added 1600×900mm entrance mats & Goodhope corridor zone, added Cloudflare _headers CSP.",
    action: "git apply production-readiness/patches/brandinganddecorationbotswana-prod.patch"
  },
  {
    tier: "Tier 1 · Operating Hub",
    repo: "presscafe/ict (arena/b242d8dd-ict · PR #1)",
    status: "PRODUCTION READY (GREEN)",
    badge: "green",
    findings: "Shipped zero-burn offline-first Command & Paper-to-Plan Studio PWA, embedded hardened /bdb-store/ preview, automated PII/secret/patch verification test suite, and GitHub Actions CI + Pages deploy pipeline.",
    action: "npm test && npm start"
  },
  {
    tier: "Tier 2 · Public Credibility",
    repo: "faroukpandor/faroukpandor.github.io",
    status: "PATCH VERIFIED",
    badge: "amber",
    findings: "Caught all 5 cards on live portfolio.html and 3 links on index.html returning GitHub 404 (private repo URLs), added Branding & Decoration Botswana active link, stripped raw leaked citation token from PORTFOLIO-WIDE-UI-DESIGN-STANDARD.md.",
    action: "git apply production-readiness/patches/faroukpandor-github-io-prod.patch"
  },
  {
    tier: "Tier 2 · Domain Showcase",
    repo: "faroukpandor/smartfarm",
    status: "BUILD GREEN WITH PATCH",
    badge: "green",
    findings: "Added missing .gitignore, removed offline-breaking Google Fonts @import, registered real offline Service Worker (sw.js), added JSON backup export, and built Non-Ruminant Poultry Batch FCR & Pula Margin Calculator.",
    action: "git apply production-readiness/patches/smartfarm-prod.patch"
  },
  {
    tier: "Tier 2 · Systems Demo",
    repo: "presscafe/moruajunction",
    status: "CHECK GATE FIXED -> GREEN",
    badge: "green",
    findings: "Fixed failing npm run check (dataset drift), replaced foreign/scrambled towns (Mmabatho [SA], Tsumeb [Namibia], Berea, Durabans, Good Hope in South-East, Gaborone in Central) across all 40 Botswana pavilions, and added upfront pilot disclosure banner.",
    action: "git apply production-readiness/patches/moruajunction-prod.patch"
  },
  {
    tier: "Client Mandate Fence",
    repo: "CNS (`presscafe/cns` + `next-netlify-starter-cns`)",
    status: "STRICT CLIENT BOUNDARY",
    badge: "red",
    findings: "Reclassified out of owned starters into Strict Client Fence (`CL-07`: CNS Enterprises 6-app ERP & web suite + CNS `.EMB` Drive archives). Excluded from automated patching & fork archival.",
    action: "CLIENT MANDATE — ACT ONLY ON CNS INSTRUCTION"
  },
  {
    tier: "Tier 2 · SME Client Site Factory",
    repo: "presscafe/barebones-starter (Live Vercel + Private Repo)",
    status: "ENCRYPTED & READY TO MONETIZE",
    badge: "green",
    findings: "ENCRYPTED DONE (`TINA_TOKEN` upgraded to `encrypted` on `barebones-starter`, `tina-cloud-starter1`, and `tina-cloud-starter-ssmab`)! Ready to clone per SME website client (P4.5k–P12k setup, $0/mo hosting).",
    action: "Live at barebones-starter-presscafe.vercel.app"
  },
  {
    tier: "Zero-Pause Cloud Fix",
    repo: "Supabase Free Tier + Google Sheets Webhook (`scripts/`)",
    status: "AUTOMATED $0/MO FOREVER",
    badge: "green",
    findings: "Eliminates 7-day Supabase free-tier auto-pause permanently: (1) `.github/workflows/supabase-keepalive.yml` pings PostgREST + Auth every Monday & Thursday at 06:00 CAT; (2) `google-sheets-webhook.gs` writes storefront quotes straight to Google Sheets 24/7 with zero server to sleep!",
    action: "production-readiness/scripts/supabase-keepalive-workflow.yml + google-sheets-webhook.gs"
  },
  {
    tier: "Client Mandate Fence",
    repo: "Ishmael Koos (35d 2.0kg Broiler @ P24.50/kg) · Andrew Motlhajoe (Selokolela Land)",
    status: "LIVE MODEL + PITCH PACK READY",
    badge: "amber",
    findings: "BSc Animal Science (Non-Ruminant) live Google Sheet financial model (`Tab 08`, EPEF=336.9) + Bankable Integrator Pitch Doc built! Proves P24.50 = BWP/kg liveweight (=P49/2kg bird, ~P135.5k/yr net per 5,000 birds) vs Tripartite Feed+Abattoir Cession.",
    action: "Open Google Sheet Tab 08 + Ishmael Koos Pitch Doc"
  },
  {
    tier: "Client Hands-Off",
    repo: "YellowBlue · Shenata · MegaDealsMA · Tshono · Mosha · Identity Concept · Futurewise · WCD · Mopipi Salon",
    status: "ALL 12 CLIENTS FENCED",
    badge: "red",
    findings: "All 12 client mandates cleanly separated (`Mosha` distinct from `Identity Concept`; `CNS` distinct; `Shenata`, `Futurewise`, `WCD`, `Mopipi Salon` fenced). Zero files deleted across Drive & Gmail.",
    action: "SEPARATE CLIENT MANDATES — ZERO MIXING WITH OWNED IP"
  }
];

const CHECKLIST_30D = [
  { id: "c01", week: "Week 1 · Immediate Cash & Quotes", title: "Send WhatsApp bridge message to PRE-49 rubber door mat buyer confirming exact 1600×900mm spec, quantity, logo vs plain, and delivery town." },
  { id: "c02", week: "Week 1 · Immediate Cash & Quotes", title: "Review & click Send on the 5 staged Gmail Drafts (Branded Mats SA, Perkal, Sweet-Orr pre-Monday ERP cutover, Captivity, National Flag)." },
  { id: "c03", week: "Week 1 · Immediate Cash & Quotes", title: "Share handwritten paper notebook pages in Arena chat so every idea is captured, scored, and merged cleanly without repo sprawl." },
  { id: "c04", week: "Week 1 · Immediate Cash & Quotes", title: "Issue formal written Pula quote on PRE-49 using verified Oct 2026 trade cost + 100% payment before delivery + buyer-account courier." },
  { id: "c05", week: "Week 2 · Storefront & Price Truth", title: "Complete PRE-21 4-job real landed-cost verification sheet (Sweet-Orr, Captivity, Perkal, National Flag) — archive all stale March sheets." },
  { id: "c06", week: "Week 2 · Storefront & Price Truth", title: "Apply verified production patches to brandinganddecorationbotswana & faroukpandor.github.io (`apply-all-production-fixes.sh --push`)." },
  { id: "c07", week: "Week 2 · Storefront & Price Truth", title: "Publish hardened B&D Botswana Instant Quote Storefront to Cloudflare Pages ($0/mo) with live business WhatsApp & email in store/config.js." },
  { id: "c08", week: "Week 3 · Direct Buyer Outreach", title: "Send 25 targeted WhatsApp/email Q4 corporate uniform, mat, gazebo & year-end gift offers across Gaborone, Goodhope, Lobatse, and mining contractors." },
  { id: "c09", week: "Week 3 · Direct Buyer Outreach", title: "Run strict Day-2 / Day-7 / Day-14 quote follow-up cadence across all open quotes labeled 00_ACTION/1_QUOTE_NOW." },
  { id: "c10", week: "Week 3 · Direct Buyer Outreach", title: "Run 5 short discovery conversations with Botswana poultry / livestock farmers using the SmartFarm Poultry FCR & Margin benchmark." },
  { id: "c11", week: "Week 4 · Close, Deliver & Repeat", title: "Collect 100% upfront customer payments before supplier dispatch, verify proof before production, and log actual realised net margin in Pula." },
  { id: "c12", week: "Week 4 · Close, Deliver & Repeat", title: "Archive 125 untouched forks (`archive-stale-repos-and-forks.sh --execute`) and rotate stale Vercel TinaCMS starter tokens." }
];

const DESIRE_LABELS = {
  core_vision: "Core Vision — I Really Want This",
  fast_cash: "Fast Cash Candidate (7–30d)",
  shape_together: "Explore / Shape Together",
  delegate: "Coordinate Specialist / Partner",
  park_later: "Someday / Keep Safe"
};

const LANES = [
  "ENT-01 · Branding & Decoration Botswana",
  "ENT-02 · Morua Junction / Commerce",
  "ENT-03 · SmartFarm / Animal Science",
  "ENT-04 · Farouk Pandor Consulting",
  "ENT-05 · Estates & Property",
  "SYS-01 · Operating System & GitHub Hygiene",
  "SOMEDAY · Park Safely (Zero Spend)"
];

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { notes: structuredClone(DEFAULT_PAPER_NOTES), checks: {}, repoFilter: "All" };
    const parsed = JSON.parse(raw);
    return {
      notes: Array.isArray(parsed.notes) && parsed.notes.length ? parsed.notes : structuredClone(DEFAULT_PAPER_NOTES),
      checks: parsed.checks || {},
      repoFilter: parsed.repoFilter || "All"
    };
  } catch {
    return { notes: structuredClone(DEFAULT_PAPER_NOTES), checks: {}, repoFilter: "All" };
  }
}

let appState = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch {
    /* ignore quota errors */
  }
}

function toast(msg) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[m]));
}

function guessLaneAndScores(line) {
  const t = line.toLowerCase();
  if (/mat|shirt|uniform|conti|ppe|embroid|print|banner|gazebo|gift|cap|hoodie|school|tracksuit|brand|quote/.test(t)) {
    return { lane: "ENT-01 · Branding & Decoration Botswana", rev: 5, feas: 5, impact: 4, urgency: 4, cost: 1, risk: 1, desire: "fast_cash" };
  }
  if (/farm|poultry|broiler|layer|chicken|feed|livestock|animal|crop|goat|cattle|vet|fcr|agri/.test(t)) {
    return { lane: "ENT-03 · SmartFarm / Animal Science", rev: 4, feas: 4, impact: 4, urgency: 3, cost: 2, risk: 1, desire: "core_vision" };
  }
  if (/mall|morua|shop|ecommerce|delivery|marketplace|city/.test(t)) {
    return { lane: "ENT-02 · Morua Junction / Commerce", rev: 2, feas: 3, impact: 4, urgency: 2, cost: 3, risk: 2, desire: "shape_together" };
  }
  if (/plot|land|property|estate|rent|house|lease/.test(t)) {
    return { lane: "ENT-05 · Estates & Property", rev: 3, feas: 3, impact: 4, urgency: 2, cost: 2, risk: 2, desire: "shape_together" };
  }
  if (/repo|github|vercel|website|portfolio|audit|clean/.test(t)) {
    return { lane: "SYS-01 · Operating System & GitHub Hygiene", rev: 3, feas: 5, impact: 3, urgency: 3, cost: 1, risk: 1, desire: "delegate" };
  }
  return { lane: "ENT-04 · Farouk Pandor Consulting", rev: 3, feas: 4, impact: 3, urgency: 3, cost: 2, risk: 2, desire: "shape_together" };
}

function scoreNote(n) {
  // Master Prompt §22: (Impact * Urgency * Feasibility * NearTermRevenue) penalised by Cost & Risk, normalised 0-100
  const raw = (n.rev * 1.35 + n.feas * 1.15 + n.impact * 1.0 + n.urgency * 0.9) - (n.cost * 0.65 + n.risk * 0.65);
  const pct = Math.max(8, Math.min(99, Math.round((raw / 20.5) * 100)));
  let verdict = "VALIDATE BUYER DEMAND FIRST";
  let badge = "badge-amber";
  let step = "Speak to 3 potential Botswana buyers & confirm willingness to pay before building anything new.";

  if (n.desire === "park_later" || pct < 42) {
    verdict = "PARK SAFELY IN VAULT (P0 COST)";
    badge = "badge-neutral";
    step = "Preserve cleanly in Notion / Markdown backlog; spend zero hours or Pula until core cash target is hit.";
  } else if (n.desire === "delegate") {
    verdict = "COORDINATE SPECIALIST / PARTNER";
    badge = "badge-green";
    step = "Define 1-page scope & margin split; let a specialist/supplier execute while you own client relationship.";
  } else if (pct >= 72) {
    verdict = "DO NOW — DIRECT 7–30 DAY CASH";
    badge = "badge-green";
    step = "Execute immediately under existing enterprise lane; confirm cost, send written quote, 100% prepay before delivery.";
  } else if (n.desire === "core_vision") {
    verdict = "STAGE 1 PILOT — PROVE DEMAND LEANLY";
    badge = "badge-amber";
    step = "Honour long-term vision by testing a zero-cost 1-page offer with 5 real customers before writing custom software.";
  }
  return { pct, verdict, badge, step };
}

function renderNotes() {
  const container = document.getElementById("notes-container");
  const sorted = [...appState.notes].sort((a, b) => scoreNote(b).pct - scoreNote(a).pct);

  document.getElementById("notes-count-inline").textContent = String(sorted.length);
  document.getElementById("kpi-paper-count").textContent = `${sorted.length} items`;
  const doNowCount = sorted.filter((n) => scoreNote(n).pct >= 72 && n.desire !== "park_later").length;
  document.getElementById("kpi-paper-top").textContent = `${doNowCount} high-velocity cash actions · ${sorted.length - doNowCount} staged/parked`;

  container.innerHTML = sorted
    .map((n) => {
      const s = scoreNote(n);
      return `
      <article class="note-card" data-id="${escapeHtml(n.id)}">
        <div class="note-top">
          <div style="flex:1; min-width:240px">
            <div style="display:flex; gap:0.45rem; flex-wrap:wrap; align-items:center; margin-bottom:0.35rem">
              <span class="badge ${s.badge}">${escapeHtml(s.verdict)}</span>
              <span class="badge badge-neutral">${escapeHtml(n.id)}</span>
              <strong style="font-size:0.84rem; color:var(--brand)">§22 Score: ${s.pct}/100</strong>
            </div>
            <h3>${escapeHtml(n.text)}</h3>
            <p class="kpi-note"><strong>Recommended Next Move:</strong> ${escapeHtml(s.step)}</p>
          </div>
          <button type="button" class="btn no-print" data-remove="${escapeHtml(n.id)}" title="Remove item">✕</button>
        </div>

        <div class="score-bar-track"><div class="score-bar-fill" style="width:${s.pct}%"></div></div>

        <div class="field-grid no-print" style="margin-top:0.65rem">
          <div class="field">
            <label>What Farouk Wants</label>
            <select data-field="desire" data-id="${escapeHtml(n.id)}">
              ${Object.entries(DESIRE_LABELS)
                .map(([val, label]) => `<option value="${val}" ${n.desire === val ? "selected" : ""}>${escapeHtml(label)}</option>`)
                .join("")}
            </select>
          </div>
          <div class="field">
            <label>Target Enterprise Home (Zero New Repo Sprawl)</label>
            <select data-field="lane" data-id="${escapeHtml(n.id)}">
              ${LANES.map((lane) => `<option value="${escapeHtml(lane)}" ${n.lane === lane ? "selected" : ""}>${escapeHtml(lane)}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="slider-row no-print">
          ${[
            ["rev", "90d Cash", n.rev],
            ["feas", "Feasibility", n.feas],
            ["impact", "Impact", n.impact],
            ["urgency", "Urgency", n.urgency],
            ["cost", "Effort/Cost", n.cost],
            ["risk", "Risk", n.risk]
          ]
            .map(
              ([key, label, val]) => `
            <div class="slider-item">
              <label><span>${label}</span><strong>${val}/5</strong></label>
              <input type="range" min="1" max="5" value="${val}" data-slider="${key}" data-id="${escapeHtml(n.id)}" />
            </div>`
            )
            .join("")}
        </div>
      </article>`;
    })
    .join("");
}

/* ---------------- DEAL & LANDED QUOTE DESK ---------------- */

function readDealInputs() {
  const qty = Math.max(1, Math.round(Number(document.getElementById("d-qty").value) || 1));
  const zar = Math.max(0, Number(document.getElementById("d-zar").value) || 0);
  const fx = Math.max(0.05, Number(document.getElementById("d-fx").value) || 0.77);
  const freight = Math.max(0, Number(document.getElementById("d-freight").value) || 0);
  const decor = Math.max(0, Number(document.getElementById("d-decor").value) || 0);
  const setup = Math.max(0, Number(document.getElementById("d-setup").value) || 0);
  const targetMarginPct = Math.min(89, Math.max(1, Number(document.getElementById("d-margin").value) || 38));
  const courier = Math.max(0, Number(document.getElementById("d-courier").value) || 0);
  const vatRate = Number(document.getElementById("d-vat").value) || 0;

  const baseUnitPula = zar * fx;
  const landedProductTotal = baseUnitPula * qty + freight;
  const decorTotal = decor * qty + setup;
  const totalDirectCost = landedProductTotal + decorTotal;

  // True gross margin pricing: Sell = Cost / (1 - Margin)
  const goodsSellExVat = totalDirectCost / (1 - targetMarginPct / 100);
  const unitSellExVat = goodsSellExVat / qty;
  const subtotalWithCourierExVat = goodsSellExVat + courier;
  const vatAmount = subtotalWithCourierExVat * vatRate;
  const grandTotal = subtotalWithCourierExVat + vatAmount;
  const grossProfit = goodsSellExVat - totalDirectCost;
  const achievedMargin = goodsSellExVat > 0 ? (grossProfit / goodsSellExVat) * 100 : 0;

  const gates = {
    dim: document.getElementById("g-dim").checked,
    art: document.getElementById("g-art").checked,
    cost: document.getElementById("g-cost").checked,
    terms: document.getElementById("g-terms").checked
  };
  const allGatesGreen = gates.dim && gates.art && gates.cost && gates.terms;

  return {
    item: document.getElementById("d-item").value.trim(),
    supplier: document.getElementById("d-supplier").value.trim(),
    lead: document.getElementById("d-lead").value.trim(),
    client: document.getElementById("d-client").value.trim() || "Client",
    phone: document.getElementById("d-phone").value.replace(/[^0-9]/g, ""),
    qty,
    zar,
    fx,
    freight,
    decor,
    setup,
    courier,
    vatRate,
    baseUnitPula,
    totalDirectCost,
    goodsSellExVat,
    unitSellExVat,
    vatAmount,
    grandTotal,
    grossProfit,
    achievedMargin,
    gates,
    allGatesGreen
  };
}

function bwp(n) {
  return "P" + n.toLocaleString("en-BW", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderDeal() {
  const d = readDealInputs();
  const alertEl = document.getElementById("deal-alert");

  if (d.achievedMargin < 28) {
    alertEl.innerHTML = `<div class="callout callout-danger"><strong>MARGIN FLOOR WARNING (${d.achievedMargin.toFixed(1)}%):</strong> Below the 28% commercial protection floor. Increase selling margin or lower freight/unit cost before quoting.</div>`;
  } else if (!d.allGatesGreen) {
    alertEl.innerHTML = `<div class="callout callout-amber"><strong>SPEC / COST CHECK MODE ACTIVE:</strong> Because all 4 safety checkboxes are not ticked yet, the message below safely asks the buyer to confirm spec/artwork without locking you into an unverified firm price. Tick all 4 boxes once supplier cost &amp; client spec are verified to switch to a <strong>Formal Written Pula Quote</strong>!</div>`;
  } else {
    alertEl.innerHTML = `<div class="callout callout-green"><strong>ALL 4 COMMERCIAL SAFETY GATES VERIFIED:</strong> Ready to send formal written quotation at <strong>${d.achievedMargin.toFixed(1)}% gross margin (${bwp(d.grossProfit)} gross profit)</strong>.</div>`;
  }

  document.getElementById("deal-summary-table").innerHTML = `
    <tbody>
      <tr><td>Supplier unit price (${d.zar.toFixed(2)} ZAR × ${d.fx.toFixed(2)})</td><td class="num">${bwp(d.baseUnitPula)}</td></tr>
      <tr><td>Total landed cost (${d.qty} units + ${bwp(d.freight)} SA→BW freight + ${bwp(d.decor * d.qty + d.setup)} branding)</td><td class="num"><strong>${bwp(d.totalDirectCost)}</strong></td></tr>
      <tr><td>Client unit sell price (${d.qty} × ${bwp(d.unitSellExVat)})</td><td class="num">${bwp(d.goodsSellExVat)}</td></tr>
      <tr><td>Nationwide BW courier (client's account)</td><td class="num">${d.courier > 0 ? bwp(d.courier) : "Quoted at cost / Collection"}</td></tr>
      ${d.vatRate > 0 ? `<tr><td>VAT (14%)</td><td class="num">${bwp(d.vatAmount)}</td></tr>` : ""}
      <tr><td><strong>TOTAL PAYABLE BEFORE DISPATCH</strong></td><td class="num"><strong>${bwp(d.grandTotal)}</strong></td></tr>
      <tr><td><strong>Projected Net Gross Profit (Internal Only)</strong></td><td class="num" style="color:var(--brand)"><strong>${bwp(d.grossProfit)} (${d.achievedMargin.toFixed(1)}%)</strong></td></tr>
    </tbody>
  `;

  let msg = "";
  if (!d.allGatesGreen) {
    msg = [
      `Good day ${d.client},`,
      ``,
      `Thank you for your enquiry with Press Cafe (Pty) Ltd regarding:`,
      `• Item: ${d.item}`,
      `• Indicative Quantity: ${d.qty}`,
      ``,
      `Before we issue your formal written Pula quotation, please confirm:`,
      `1. Exact dimensions / size breakdown required`,
      `2. Quantity required`,
      `3. Whether plain unbranded or custom branded (if branded, please send vector logo file in PDF, AI, EPS, or SVG)`,
      `4. Delivery town / physical address in Botswana`,
      ``,
      `Commercial Terms:`,
      `• Payment: 100% payment required prior to production / dispatch`,
      `• Delivery: Nationwide courier across Botswana billed for client's account (or collection by arrangement)`,
      ``,
      `As soon as confirmed, we will send your formal written quotation immediately.`,
      ``,
      `Kind regards,`,
      `Farouk Pandor`,
      `Press Cafe (Pty) Ltd`
    ].join("\n");
  } else {
    msg = [
      `FORMAL QUOTATION — PRESS CAFE (PTY) LTD`,
      `Client: ${d.client}`,
      `Date: ${new Date().toISOString().slice(0, 10)} (Valid for 14 days subject to stock)`,
      ``,
      `Item: ${d.item}`,
      `Quantity: ${d.qty} unit(s)`,
      `Unit Price: ${bwp(d.unitSellExVat)}`,
      `Line Subtotal: ${bwp(d.goodsSellExVat)}`,
      `Botswana Delivery Courier (Client Account): ${d.courier > 0 ? bwp(d.courier) : "At cost to nominated town / Collection"}`,
      ...(d.vatRate > 0 ? [`VAT (14%): ${bwp(d.vatAmount)}`] : []),
      `TOTAL PAYABLE: ${bwp(d.grandTotal)}`,
      ``,
      `Lead Time: ${d.lead}`,
      `Commercial Terms:`,
      `• 100% payment required before order release / delivery`,
      `• Artwork digital proof sign-off required prior to production`,
      `• Delivery nationwide in Botswana at client's cost`,
      ``,
      `Kind regards,`,
      `Farouk Pandor`,
      `Press Cafe (Pty) Ltd`
    ].join("\n");
  }

  document.getElementById("deal-message-preview").textContent = msg;
}

function renderPresets() {
  document.getElementById("deal-presets").innerHTML = DEAL_PRESETS.map(
    (p, i) => `<button type="button" class="chip ${i === 0 ? "active" : ""}" data-preset="${p.id}">${escapeHtml(p.label)}</button>`
  ).join("");
}

/* ---------------- REPO PRODUCTION MATRIX ---------------- */

function renderRepos() {
  const tiers = ["All", ...new Set(REPO_MATRIX.map((r) => r.tier))];
  document.getElementById("repo-filters").innerHTML = tiers
    .map((t) => `<button type="button" class="chip ${appState.repoFilter === t ? "active" : ""}" data-rfilter="${escapeHtml(t)}">${escapeHtml(t)}</button>`)
    .join("");

  const filtered = REPO_MATRIX.filter((r) => appState.repoFilter === "All" || r.tier === appState.repoFilter);
  document.getElementById("repo-table").innerHTML = `
    <thead>
      <tr>
        <th>Portfolio Tier</th>
        <th>Repository / Estate</th>
        <th>Status</th>
        <th>Verified Audit Findings &amp; Fixes</th>
        <th>Command / Action</th>
      </tr>
    </thead>
    <tbody>
      ${filtered
        .map(
          (r) => `
        <tr>
          <td><strong>${escapeHtml(r.tier)}</strong></td>
          <td><code>${escapeHtml(r.repo)}</code></td>
          <td><span class="badge badge-${r.badge}">${escapeHtml(r.status)}</span></td>
          <td>${escapeHtml(r.findings)}</td>
          <td>
            <button type="button" class="btn no-print" data-copycmd="${escapeHtml(r.action)}">Copy Command</button>
          </td>
        </tr>`
        )
        .join("")}
    </tbody>
  `;
}

/* ---------------- 30-DAY EXECUTION CHECKLIST ---------------- */

function renderChecklist() {
  const doneCount = CHECKLIST_30D.filter((i) => appState.checks[i.id]).length;
  document.getElementById("kpi-check-progress").textContent = `${doneCount} / ${CHECKLIST_30D.length}`;

  document.getElementById("checklist-container").innerHTML = CHECKLIST_30D.map((item) => {
    const checked = Boolean(appState.checks[item.id]);
    return `
      <label class="check-row ${checked ? "done" : ""}">
        <input type="checkbox" data-check="${item.id}" ${checked ? "checked" : ""} />
        <div>
          <span class="badge badge-neutral" style="margin-bottom:0.25rem">${escapeHtml(item.week)}</span>
          <div><strong>${escapeHtml(item.title)}</strong></div>
        </div>
      </label>`;
  }).join("");
}

/* ---------------- EVENT WIRING ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  // Tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });
      const target = btn.dataset.tab;
      document.querySelectorAll(".tab-view").forEach((view) => {
        view.hidden = view.id !== `tab-${target}`;
      });
    });
  });

  // Add raw paper lines
  document.getElementById("btn-parse-notes").addEventListener("click", () => {
    const raw = document.getElementById("paper-dump").value;
    const lines = raw.split(/\r?\n/).map((l) => l.replace(/^[-*•0-9.)\s]+/, "").trim()).filter(Boolean);
    if (!lines.length) {
      toast("Type or paste at least one line from your paper notes first.");
      return;
    }
    lines.forEach((line) => {
      const nextNum = appState.notes.length + 1;
      const g = guessLaneAndScores(line);
      appState.notes.unshift({
        id: `P-${String(nextNum).padStart(2, "0")}`,
        text: line,
        desire: g.desire,
        lane: g.lane,
        rev: g.rev,
        feas: g.feas,
        impact: g.impact,
        urgency: g.urgency,
        cost: g.cost,
        risk: g.risk
      });
    });
    document.getElementById("paper-dump").value = "";
    saveState();
    renderNotes();
    toast(`Added & scored ${lines.length} paper task(s).`);
  });

  document.getElementById("btn-load-examples").addEventListener("click", () => {
    document.getElementById("paper-dump").value = [
      "Follow up university & aviation authority heavy-duty branded entrance mats (3–6 mats per campus)",
      "Package 2027 January school uniform & house t-shirt early-bird order offer for Southern District schools",
      "Create 1-page Poultry Feed & Mortality Audit consultation sheet for Goodhope / Gaborone peri-urban farms",
      "Explore solar borehole pump supplier partnership for smallholder farmers (validate buyer demand first)",
      "Someday idea: mobile offline Setswana voice ledger for cattle post stock counts"
    ].join("\n");
    toast("Loaded 5 realistic sample lines — click 'Add & Score Lines →' to test!");
  });

  document.getElementById("btn-copy-arena").addEventListener("click", async () => {
    const sorted = [...appState.notes].sort((a, b) => scoreNote(b).pct - scoreNote(a).pct);
    const md = [
      "### Farouk's Handwritten Paper Tasks — Structured Intake Brief",
      "",
      ...sorted.map((n) => {
        const s = scoreNote(n);
        return `- **[${n.id}] ${n.text}** | My Intent: *${DESIRE_LABELS[n.desire]}* | Home: \`${n.lane}\` | §22 Score: **${s.pct}/100 (${s.verdict})**`;
      })
    ].join("\n");
    await navigator.clipboard.writeText(md);
    toast("Copied full structured brief — paste straight into Arena chat!");
  });

  document.getElementById("btn-export-csv").addEventListener("click", () => {
    const rows = [
      ["ID", "Task", "Owner_Intent", "Enterprise_Home", "Score_100", "Verdict", "Next_Step"].join(","),
      ...appState.notes.map((n) => {
        const s = scoreNote(n);
        return [n.id, n.text, DESIRE_LABELS[n.desire], n.lane, s.pct, s.verdict, s.step]
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(",");
      })
    ].join("\n");
    const blob = new Blob([rows], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `paper-tasks-prioritised-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("btn-print-notes").addEventListener("click", () => window.print());

  document.getElementById("btn-clear-notes").addEventListener("click", () => {
    appState.notes = structuredClone(DEFAULT_PAPER_NOTES);
    saveState();
    renderNotes();
    toast("Reset to baseline portfolio items.");
  });

  document.getElementById("notes-container").addEventListener("input", (e) => {
    const t = e.target;
    const id = t.dataset.id;
    const item = appState.notes.find((n) => n.id === id);
    if (!item) return;
    if (t.dataset.slider) {
      item[t.dataset.slider] = Number(t.value);
      saveState();
      renderNotes();
    } else if (t.dataset.field) {
      item[t.dataset.field] = t.value;
      saveState();
      renderNotes();
    }
  });

  document.getElementById("notes-container").addEventListener("click", (e) => {
    const removeId = e.target.dataset.remove;
    if (!removeId) return;
    appState.notes = appState.notes.filter((n) => n.id !== removeId);
    saveState();
    renderNotes();
  });

  // Deal presets & live inputs
  document.getElementById("deal-presets").addEventListener("click", (e) => {
    const id = e.target.dataset.preset;
    const p = DEAL_PRESETS.find((x) => x.id === id);
    if (!p) return;
    document.querySelectorAll("#deal-presets .chip").forEach((c) => c.classList.toggle("active", c.dataset.preset === id));
    document.getElementById("d-item").value = p.item;
    document.getElementById("d-supplier").value = p.supplier;
    document.getElementById("d-qty").value = p.qty;
    document.getElementById("d-zar").value = p.zar;
    document.getElementById("d-fx").value = p.fx;
    document.getElementById("d-freight").value = p.freight;
    document.getElementById("d-decor").value = p.decor;
    document.getElementById("d-setup").value = p.setup;
    document.getElementById("d-margin").value = p.margin;
    document.getElementById("d-courier").value = p.courier;
    document.getElementById("d-lead").value = p.lead;
    renderDeal();
  });

  document.getElementById("tab-deal").addEventListener("input", renderDeal);
  document.getElementById("tab-deal").addEventListener("change", renderDeal);

  document.getElementById("btn-copy-quote").addEventListener("click", async () => {
    const text = document.getElementById("deal-message-preview").textContent;
    await navigator.clipboard.writeText(text);
    toast("Copied message to clipboard!");
  });

  document.getElementById("btn-wa-quote").addEventListener("click", () => {
    const d = readDealInputs();
    const text = encodeURIComponent(document.getElementById("deal-message-preview").textContent);
    const url = d.phone ? `https://wa.me/${d.phone}?text=${text}` : `https://wa.me/?text=${text}`;
    window.open(url, "_blank", "noopener");
  });

  // Repo filter & copy command
  document.getElementById("repo-filters").addEventListener("click", (e) => {
    const f = e.target.dataset.rfilter;
    if (!f) return;
    appState.repoFilter = f;
    saveState();
    renderRepos();
  });

  document.getElementById("repo-table").addEventListener("click", async (e) => {
    const cmd = e.target.dataset.copycmd;
    if (!cmd) return;
    await navigator.clipboard.writeText(cmd);
    toast("Copied command!");
  });

  // 30-day checklist
  document.getElementById("checklist-container").addEventListener("change", (e) => {
    const id = e.target.dataset.check;
    if (!id) return;
    appState.checks[id] = e.target.checked;
    saveState();
    renderChecklist();
  });

  // Export studio backup JSON
  document.getElementById("btn-export-all").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(appState, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `presscafe-studio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  renderPresets();
  renderNotes();
  renderDeal();
  renderRepos();
  renderChecklist();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
});
