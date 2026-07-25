# SF34 — Saab 340B · Pack Index

> **ICAO type designator:** SF34 · **Type cert:** EASA.A.068 (SAAB SF340A, 340B) · **Engines:** 2 × GE CT7-9B `[VERIFY — VAMSYS: production-block/propeller supplier fit]`
> **TURBOPROP — the smallest airframe in the K Global fleet.** Different powerplant, systems and handling from every other pack in this group (regional jets); do not brief it from a jet mental model.
> **Status:** 🟧 Pack complete (Draft) — all six files drafted (v0.1) from public Wikipedia/EASA TCDS/Carenado-storefront data; capability values not yet researched to mainline standard (Fleet Capability Matrix secondary/indicative table only, all 🟧); approved sim model still a management decision `[VERIFY]`.

## Variants operated

| VAMSYS name | Class | Seats | Cargo (kg) |
|---|---|---|---|
| Saab 340B | `[VERIFY — VAMSYS]` | typically 34 (range 33–36) 🟩 | `[VERIFY — VAMSYS]` |

Config `[VERIFY — VAMSYS]`; **Regional** network, EDDF-based only — Regional remains one of the EDDF-only units, unlike the multi-hub City/Intercontinental/Executive/Charter/Cargo units. **2 tails** — this count is confirmed directly at the type level (Fleet Index), since Saab is a single-type manufacturer group at K Global, unlike the multi-type Bombardier/Embraer/ATR aggregates. Weights: OEW ~8,618 kg 🟩 / MTOW ~13,608 kg (30,000 lb, post-Service-Bulletin 340B figure) 🟩 / MZFW, MLW not found in surveyed public sources 🟧 `[VERIFY]`. No shared type rating — the SF34 is the sole Saab-group type at K Global. Capability values (EDTO, RVSM, PBN, LVO, steep, RECAT, RFF): see the Fleet Capability Matrix's **secondary/indicative table** — [Fleet Capability Matrix](../capability-matrix.md) (this type is not yet researched to mainline standard; every cell 🟧).

**Turboprop correction 🟥:** unlike the CRJ/E-jet packs in this group, the SF34 is powered by **2 × GE CT7-9B free-turbine turboprops** driving 4-blade, constant-speed, fully-feathering, reversible propellers, managed through power/condition/prop levers rather than a jet thrust lever, and fitted with an **autofeather** system for takeoff/climb engine-failure protection. See Intro §6 and QRH Ch 1/Ch 2 for what genuinely applies (autofeather, prop/airframe ice protection) versus the jet-fleet EICAS/thrust-lever picture.

## Pack files

- [SF34 — Intro](intro.md) — v0.1 Draft ✅ built
- [SF34 — Dispatch](dispatch.md) — v0.1 Draft ✅ built
- [SF34 — Sim-Model](sim-model.md) — v0.1 Draft ✅ built
- [SF34 — Checklist](checklist.md) — v0.1 Draft ✅ built
- [SF34 — QRH](qrh.md) — v0.1 Draft ✅ built
- [SF34 — Livery](livery.md) — v0.1 Draft ✅ built

Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Saab 340 — https://en.wikipedia.org/wiki/Saab_340
- EASA — Type Certificate Data Sheet EASA.A.068 (SAAB SF340A, 340B) — https://www.easa.europa.eu/en/document-library/type-certificates/noise/easaa068-saab-340
- X-Plane.Org Store — Saab 340 XP11 (Carenado) — https://store.x-plane.org/Saab-340-XP11-_p_951.html
- Threshold — Carenado Releases Saab 340B for X-Plane — https://www.thresholdx.net/news/cs340b

## Change Log

| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Converted stub to full pack index; built all six files (Intro / Dispatch / Sim-Model / Checklist / QRH / Livery) from public Wikipedia/EASA TCDS/Carenado-storefront data; flagged as a TURBOPROP and the smallest airframe in the fleet throughout (🟥); flight-deck generation corrected (early CRT-based EFIS, not full glass nor fully analog); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; registration count confirmed at 2 tails (type-specific, single-type manufacturer group); candidate sim model (Carenado Saab 340B, X-Plane 11) identified pending management approval `[VERIFY]`. |
