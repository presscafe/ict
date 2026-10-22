# Security, Privacy & Boundary Policy (`presscafe/ict`)

## 1. Zero Secrets & Zero Customer PII in Public Git
This repository (`presscafe/ict`) is currently **public**. Every pull request and commit is gated by `npm test` (`scripts/verify-production.mjs`), which enforces:
- **Zero credentials or tokens:** API keys, service tokens, webhook URLs, and `.env` files are strictly prohibited.
- **Zero customer PII:** Customer names, phone numbers (`+267 ...`), email addresses, street addresses, and confidential pricing quotes must reside **only** in private workspaces (Linear, Gmail Drafts, private Google Docs, or browser `localStorage`) — never committed to Git.
- **Public storefront safety:** Internal cost and gross-margin panels (`site/bdb-store/`) are stripped from all non-localhost public deployments.

## 2. Client & Third-Party Asset Boundary
Client-owned and co-owned repositories, shared Google Drive client artwork folders (`0.CLIENTS_ARTWORKS`, `Schools`, `0.BUSINESS_SERVICES`), and third-party organizational records remain strictly outside public publication and automated modification without explicit written authority.
