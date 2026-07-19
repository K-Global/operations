# K Global — Operations Manual

The **Operations Manual / Knowledge Center** for K Global, a fictional VATSIM
virtual airline. Built with [MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), deployed to
GitHub Pages via GitHub Actions on push to `main`, at **ops.kglobalair.com**.

Branded to the K Global Brand Guidelines v1.0 (Marine Teal accent on a
monochrome core; Inter Tight / Inter / B612 Mono), shared with the
[public website](https://kglobalair.com).

> **Public knowledge center.** This manual is served on **public GitHub Pages**.
> It carries operational detail that's off-tone for the marketing website — but
> because it's world-readable, sensitive material is **deliberately kept out**.

## Visibility & the golden rule

This manual is **public**. The split from the marketing website is *scope*, not
*secrecy*: operational reference lives here, brand-facing summaries live there.
Genuine secrets belong in **neither** — keep them in access-controlled systems.

**Never write into these pages:** credentials, API keys, OAuth client IDs,
private endpoints, tokens, or any identifier that would let someone reach a
live system. When in doubt, leave it out.

(If the manual ever needs to be genuinely private, that requires GitHub
Enterprise Cloud private Pages or self-hosting behind auth — see `HANDOFF.md`.)

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
├── mkdocs.yml
├── requirements.txt
└── HANDOFF.md
```

## Status

Sections are **scaffolded stubs** awaiting content from the internal Knowledge
source. Each section index lists its intended contents so pages can be filled
in without reorganising the manual.
