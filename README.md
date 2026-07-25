# K Global — Operations Manual

The **Operations Manual / Knowledge Center** for K Global, a fictional VATSIM
virtual airline. Built with [MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), deployed to
GitHub Pages via GitHub Actions on push to `main`, at **ops.kglobalair.com**.

Branded to the K Global Brand Guidelines v1.0 (Marine Teal accent on a
monochrome core; Inter Tight / Inter / B612 Mono), shared with the
[public website](https://kglobalair.com).

> **Members-only.** Every page is **AES-encrypted at build time**
> (`mkdocs-encryptcontent-plugin`); readers enter a shared members password to
> view it. Still on free GitHub Pages — no host change, no per-user login.

## Access & the golden rule

The manual sits behind a **single shared members password** (the `OPS_PASSWORD`
GitHub Actions secret; see `HANDOFF.md` to set/rotate it). That's a **gate, not
a vault** — the encryption is brute-forceable by design and the password is
shared, so it keeps the public out but must not be trusted with real secrets.

**Never write into these pages** — even behind the password: credentials, API
keys, OAuth client IDs, private endpoints, tokens, or anything that would let
someone reach a live system. When in doubt, leave it out.

(For true per-user access, you'd need a backend — e.g. a Cloudflare Worker
running VATSIM/VAMSYS OAuth — or GitHub Enterprise Cloud private Pages. Both
were considered and set aside in favour of this simpler gate.)

## Local preview

Requires Python 3.9+.

```bash
pip install -r requirements.txt
OPS_PASSWORD="anything-for-local" mkdocs serve   # http://127.0.0.1:8000
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
