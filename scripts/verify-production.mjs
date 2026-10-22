import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

let passed = 0;
let failed = 0;

function check(label, fn) {
  try {
    fn();
    console.log(`  PASS  ${label}`);
    passed++;
  } catch (err) {
    console.error(`  FAIL  ${label}: ${err.message}`);
    failed++;
  }
}

function walkFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, out);
    else out.push(full);
  }
  return out;
}

const KNOWN_SECRET_SHA256 = new Set([
  "049d50771ce304cb21931d77528f24018fd516b061d1c62d2474b7b016619e74",
  "db92ce14081ec7fff6070c1536907cd10f8b4b6b012a0734acf0f1f2a20d6a8c",
  "4cc7fb65f044155fde58e0469e14d5426098ca4163974f7ee375f7e1e55accfa"
]);

console.log("=== Press Cafe & Portfolio Production Gate Verification ===");

const requiredFiles = [
  "README.md",
  "SECURITY.md",
  "LICENSE",
  ".gitignore",
  "charter/MASTER-OPERATING-CHARTER-v5.0.md",
  "profile/OWNER-AND-PORTFOLIO-PROFILE.md",
  "portfolio-register.md",
  "operating-state.md",
  "playbooks/30-DAY-REVENUE-EXECUTION-KIT.md",
  "intake/WRITTEN-TASKS-INTAKE-PROTOCOL.md",
  "production-readiness/PRODUCTION-READINESS-AUDIT-AND-RUNBOOK.md",
  "production-readiness/patches/brandinganddecorationbotswana-prod.patch",
  "production-readiness/patches/moruajunction-prod.patch",
  "production-readiness/patches/faroukpandor-github-io-prod.patch",
  "production-readiness/patches/smartfarm-prod.patch",
  "production-readiness/patches/next-netlify-starter-cns-prod.patch",
  "production-readiness/scripts/supabase-keepalive-workflow.yml",
  "production-readiness/scripts/google-sheets-webhook.gs",
  "site/index.html",
  "site/assets/app.js",
  "site/assets/emb-mockup-studio.js",
  "site/assets/styles.css",
  "site/sw.js",
  "site/manifest.webmanifest",
  "site/bdb-store/index.html",
  "site/bdb-store/assets/app.js",
  "site/bdb-store/data/catalogue.json",
  "site/bdb-store/_headers"
];

check("All canonical operating docs, patches, and PWA files exist", () => {
  for (const rel of requiredFiles) {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p) || fs.statSync(p).size === 0) {
      throw new Error(`Missing or empty file: ${rel}`);
    }
  }
});

check("All JavaScript/MJS bundles pass node --check syntax gate", () => {
  for (const jsFile of [
    "site/assets/app.js",
    "site/assets/emb-mockup-studio.js",
    "site/sw.js",
    "site/bdb-store/config.js",
    "site/bdb-store/assets/app.js",
    "site/bdb-store/sw.js",
    "scripts/serve.mjs",
    "scripts/verify-production.mjs"
  ]) {
    execSync(`node --check "${path.join(ROOT, jsFile)}"`, { stdio: "pipe" });
  }
});

check("BDB storefront catalogue parses cleanly and includes 1600x900mm Entrance Mats", () => {
  const cat = JSON.parse(fs.readFileSync(path.join(ROOT, "site/bdb-store/data/catalogue.json"), "utf8"));
  if (!Array.isArray(cat.products) || cat.products.length < 38) {
    throw new Error(`Expected >=38 SKUs in catalogue.json, found ${cat.products?.length}`);
  }
  const hasMat = cat.products.some((p) => p.id === "mat01" && p.name.includes("1600"));
  if (!hasMat) throw new Error("1600x900mm rubber door mat SKU missing from catalogue.json");
});

check("BDB storefront locks internal gross-margin table off public domains", () => {
  const appJs = fs.readFileSync(path.join(ROOT, "site/bdb-store/assets/app.js"), "utf8");
  if (appJs.includes("Internal margin view (staff only — remove before sharing)")) {
    throw new Error("Unprotected staff margin summary still present in bdb-store/assets/app.js");
  }
  if (!appJs.includes("canShowInternalMargin()")) {
    throw new Error("Missing canShowInternalMargin() guard in bdb-store/assets/app.js");
  }
});

check("Zero leaked API tokens, private keys, or customer PII in repository docs & web app", () => {
  const forbiddenPatterns = [
    { name: "GitHub token", re: /gh[pousr]_[A-Za-z0-9_]{20,}/ },
    { name: "Private key block", re: /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
    { name: "Customer private email", re: /equiclotech@/i },
    { name: "Confidential mat production source leak", re: /MAT-BW-LOCAL|rubber mat maker/i },
    { name: "Raw +267 phone digits", re: /\+?267[\s-]?7[0-9]{7}/ }
  ];

  for (const file of walkFiles(ROOT)) {
    const rel = path.relative(ROOT, file);
    if (rel === "scripts/verify-production.mjs") continue;
    const content = fs.readFileSync(file, "utf8");
    // Hash-scan alphanumeric tokens across ALL files including .patch files
    const tokens = content.match(/[A-Za-z0-9]{16,44}/g) || [];
    for (const tok of tokens) {
      const digest = crypto.createHash("sha256").update(tok).digest("hex");
      if (KNOWN_SECRET_SHA256.has(digest)) {
        throw new Error(`Known exposed token hash detected in ${rel}`);
      }
    }
    // Check PII patterns across all non-patch files (Morua patch contains synthetic shop numbers in diff context)
    if (!rel.endsWith(".patch")) {
      for (const pat of forbiddenPatterns) {
        if (pat.re.test(content)) {
          throw new Error(`${pat.name} detected in ${rel}`);
        }
      }
    }
  }
});

check("Automation shell scripts pass bash -n syntax verification", () => {
  execSync(`bash -n "${path.join(ROOT, "production-readiness/scripts/apply-all-production-fixes.sh")}"`, { stdio: "pipe" });
  execSync(`bash -n "${path.join(ROOT, "production-readiness/scripts/archive-stale-repos-and-forks.sh")}"`, { stdio: "pipe" });
});

console.log(`\nSummary: ${passed} checks passed, ${failed} failed.`);
if (failed > 0) process.exit(1);
