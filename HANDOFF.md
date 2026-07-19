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

### Enable Pages

In **`K-Global/operations` → Settings → Pages**, set **Source: GitHub Actions**
(and configure access restriction if using Enterprise private Pages). Then the
included workflow publishes to `https://k-global.github.io/operations/` on merge
to `main`.

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
