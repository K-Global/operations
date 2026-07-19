# Handoff — K Global Operations Manual

The Operations Manual is scaffolded: MkDocs Material, brand-matched to the
public site, a nine-section structure, and a GitHub Actions → Pages deploy.
`mkdocs build --strict` passes with zero warnings. It ships **placeholders
only** — no real operational content yet.

## Decisions made

- **Visibility: public, secrets kept out.** The manual is served on public
  GitHub Pages as a single open knowledge center. Operational reference is fine
  here; genuine secrets (credentials, API keys, OAuth client IDs, private
  endpoints, tokens) are **not** — they stay in access-controlled systems. The
  pages and README now reflect this. *(If you later need it genuinely private,
  that requires GitHub Enterprise Cloud private Pages or self-hosting behind
  auth.)*
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

## What's built

- `mkdocs.yml` — Material theme, brand palette, light/dark, top-nav tabs,
  section indexes, search.
- Nine sections + home, each a scaffolded stub with an intended-contents
  checklist and editorial "keep secrets out" guardrails.
- `.github/workflows/deploy.yml` — strict build + official Pages deploy flow.
- Shared brand assets and `extra.css` (same tokens as the public site).

## Deliberately not included

No real credentials, API details, VAMSYS/fleet IDs, or private endpoints —
those are barred from this public manual by policy, not merely pending. Content
sections are stubs awaiting the Knowledge source. The stale
`KGlobal_Fleet_Catalog.xlsx` was not used.
