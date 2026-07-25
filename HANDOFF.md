# Handoff — K Global Operations Manual

The Operations Manual is scaffolded: MkDocs Material, brand-matched to the
public site, a nine-section structure, and a GitHub Actions → Pages deploy.
`mkdocs build --strict` passes with zero warnings. It ships **placeholders
only** — no real operational content yet.

## Decisions made

- **Access: members-only via a shared password.** Every page is
  **AES-encrypted at build time** (`mkdocs-encryptcontent-plugin`); a reader
  enters the shared members password to decrypt it in-browser. This stays on
  free GitHub Pages — no host change, no per-user login. It replaced the
  earlier "public + click-through disclaimer" approach.
  - It is **one shared password**, not per-user — you can't revoke an
    individual; if it leaks, rotate it (one secret change + redeploy).
  - It is a **gate, not a vault.** The plugin is brute-forceable by design, so
    **still keep genuine secrets out** (credentials, API keys, OAuth client
    IDs, private endpoints, tokens) — even behind the password.
- **Content: scaffold for now.** Pages remain intended-contents stubs. When
  you're ready, point me at the Knowledge source (paste it, or add the repo to
  the session) and I'll write the real pages, keeping secrets out.

## Still to do

### Enable Pages + custom domain (required — nothing is live until this)

> ⚠️ The first deploy after the initial merge **failed** because Pages wasn't
> enabled yet. Do this and it'll go green.

In **`K-Global/operations` → Settings → Pages**:

1. **Source: GitHub Actions**
2. **Custom domain:** `ops.kglobalair.com` → Save (this repo ships `docs/CNAME`
   with that domain, and `site_url` is set to match).
3. Tick **Enforce HTTPS** once the certificate is issued.

**DNS to add** (subdomain — simpler than the apex site):

| Type | Name | Value |
|---|---|---|
| CNAME | `ops` | `k-global.github.io` |

Then re-run the latest **Actions → Deploy** workflow if it had already failed.

### Set the members password (required — the build refuses to publish without it)

In **`K-Global/operations` → Settings → Secrets and variables → Actions → New
repository secret**:

- **Name:** `OPS_PASSWORD`
- **Value:** a **strong** shared password (long — the plugin is brute-forceable,
  so length is your only real protection). This is what you hand out to members.

The deploy workflow injects it at build time and **fails on purpose** if the
secret is missing (so the manual can never publish unencrypted). To **rotate**
the password: change the secret and re-run **Actions → Deploy**.

> Hand the password to pilots through a members-only channel (e.g. your VAMSYS
> pilots' area or Discord), never on the public website.

## What's built

- **Members-only password gate** (`mkdocs-encryptcontent-plugin`) — every page
  AES-encrypted at build time; password from the `OPS_PASSWORD` secret, never
  in the repo. Verified: page bodies and the search index carry no plaintext.
- A **"fictional flight-sim, not real-world guidance"** banner on every page +
  `noindex` (search engines can't surface it; encrypted anyway).
- `mkdocs.yml` — Material theme, brand palette, light/dark, top-nav tabs,
  section indexes.
- Nine sections + home, each a scaffolded stub with an intended-contents
  checklist and editorial "keep secrets out" guardrails.
- `.github/workflows/deploy.yml` — strict build (with the password) + a
  fail-safe that refuses to publish unencrypted + official Pages deploy flow.
- Shared brand assets and `extra.css` (same tokens as the public site).

## Local preview

```bash
pip install -r requirements.txt
OPS_PASSWORD="anything-for-local" mkdocs serve   # http://127.0.0.1:8000
```

Without `OPS_PASSWORD` set, local builds use a non-secret placeholder
(`CHANGE-ME-LOCAL-ONLY`) — fine for previewing, never used by the live deploy.

## Deliberately not included

No real credentials, API details, VAMSYS/fleet IDs, or private endpoints —
those are barred from this public manual by policy, not merely pending. Content
sections are stubs awaiting the Knowledge source. The stale
`KGlobal_Fleet_Catalog.xlsx` was not used.
