# K Global — Operations Manual

The internal **Operations Manual / Knowledge Center** for K Global, a fictional
VATSIM virtual airline. Built with [MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), deployed to
GitHub Pages via GitHub Actions on push to `main`.

> **⚠️ Internal document.** This manual contains operational detail
> deliberately kept off the [public website](https://github.com/K-Global/website).
> See **Visibility** below — GitHub Pages is public by default.

## Visibility (read this before publishing real content)

Standard GitHub Pages is **publicly reachable**, even when served from a private
repository. If this manual is meant to be genuinely private, one of the
following is required *before* real operational content lands:

- **GitHub Enterprise Cloud** with private Pages (access-controlled), **or**
- host the built site behind your own auth (not GitHub Pages), **or**
- accept that the content is effectively public and keep truly sensitive
  material (credentials, API keys, IDs) out of it entirely.

Until that's decided, the scaffold ships with **placeholders only** — no real
credentials, IDs, or sensitive mechanics. See `HANDOFF.md`.

## Local preview

Requires Python 3.9+.

```bash
pip install -r requirements.txt
mkdocs serve      # http://127.0.0.1:8000
mkdocs build --strict
```

## Layout

```
operations/
├── .github/workflows/deploy.yml   # Build + deploy to GitHub Pages
├── docs/
│   ├── index.md                   # Knowledge Center home
│   ├── getting-started/           # Onboarding
│   ├── company/                   # Profile, brand, callsign
│   ├── network/                   # Regions, hubs, numbering
│   ├── fleet/                     # Strategy, as-built, registrations
│   ├── business-units/            # Nine units in detail
│   ├── flight-ops/                # Dispatch, VAMSYS, SOPs
│   ├── events/                    # Programmes & scoring
│   ├── comms/                     # NOTAMs & alerts
│   ├── reference/                 # Glossary & appendices
│   ├── stylesheets/extra.css      # Brand tokens (shared with public site)
│   └── assets/                    # Logo, favicon
├── overrides/main.html            # Site-wide "internal" banner
├── mkdocs.yml
├── requirements.txt
└── HANDOFF.md
```

## Status

Sections are **scaffolded stubs** awaiting content from the internal Knowledge
source. Each section index lists its intended contents so pages can be filled
in without reorganising the manual.
