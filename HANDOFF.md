# Handoff — K Global Operations Manual

The Operations Manual is scaffolded: MkDocs Material, brand-matched to the
public site, with a site-wide "internal" banner, a nine-section structure, and
a GitHub Actions → Pages deploy. `mkdocs build --strict` passes with zero
warnings. It ships **placeholders only** — no real operational content yet.

## Decisions needed from you

### 1. Visibility — the important one

GitHub Pages is **public by default**, even from a private repo. This manual is
meant to hold internal detail (dispatch, numbering, IDs, procedures) — the exact
material we kept *off* the public website. Before real content lands, decide how
it's hosted:

- **GitHub Enterprise Cloud** private Pages (access-controlled), or
- self-host the built `site/` behind your own auth, or
- accept it's effectively public and keep truly sensitive material (credentials,
  API keys, VAMSYS IDs) out of it entirely.

The scaffold is safe to publish as-is (placeholders only). **Do not populate the
sensitive sections until this is settled.**

### 2. Content source

The `docs/` pages are stubs. Each section index lists its intended contents.
Point me at the internal Knowledge source (paste it, or add the Knowledge repo
to the session) and I'll write the real pages, section by section, respecting
the visibility decision above.

### 3. Enable Pages

In **`K-Global/operations` → Settings → Pages**, set **Source: GitHub Actions**
(and configure access restriction if using Enterprise private Pages). Then the
included workflow publishes to `https://k-global.github.io/operations/` on merge
to `main`.

## What's built

- `mkdocs.yml` — Material theme, brand palette, light/dark, top-nav tabs,
  section indexes, search.
- `overrides/main.html` — site-wide internal banner (visual reminder, **not**
  access control).
- Nine sections + home, each a scaffolded stub with an intended-contents
  checklist.
- `.github/workflows/deploy.yml` — strict build + official Pages deploy flow.
- Shared brand assets and `extra.css` (same tokens as the public site).

## Deliberately not included

No real credentials, API details, VAMSYS/fleet IDs, flight-number bands,
decision records, or sensitive mechanics — those wait on the visibility
decision. The stale `KGlobal_Fleet_Catalog.xlsx` was not used.
