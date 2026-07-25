# CRJ2 — Bombardier CRJ-200 · Pack Index

> **ICAO type designator:** CRJ2 · **Type cert:** shares FAA TCDS A21EA "CL-600 Regional Jet Series" (CL-600-2B19 variant) `[VERIFY]`, held by MHI RJ Aviation ULC; EASA equivalent EASA.IM.A.673 `[VERIFY]` · **Engines:** 2 × GE CF34-3B1
> **Status:** 🟧 Pack complete (Draft) — all six files drafted (v0.1) from public MHIRJ/SKYbrary/Wikipedia/EASA TCDS/JRollon data; capability values not yet researched to mainline standard (Fleet Capability Matrix secondary/indicative table only, all 🟧); approved sim model still a management decision `[VERIFY]`.

## SEPARATE type rating — not a common rating with CRJ700/900

**This pack documents a distinct practical type rating from the CRJ700/900 (`CRJ7`/`CRJ9`)**, even though all sit on the same broad CL-600 type-certificate lineage. The CRJ-200 is the older, smaller airframe: a genuine **hard wing with no leading-edge slats** (the CRJ700/900 wing was later redesigned with slats), an older Rockwell Collins Pro Line 4 avionics fit shared in name only, lower weights, shorter range, and a smaller ICAO code-letter footprint (B vs C). Do not treat crews, figures, or handling notes as interchangeable across this pack and the CRJ7/CRJ9 packs — see the [Fleet overview](../index.md), "Type-rating grouping", and Intro §3 of this pack.

## Variants operated

| VAMSYS name | Class | Seats | Cargo (kg) |
|---|---|---|---|
| Bombardier CRJ-200 | `[VERIFY — VAMSYS]` | `[VERIFY — VAMSYS]` | `[VERIFY — VAMSYS]` |

Config `[VERIFY — VAMSYS]`; City/Regional network `[VERIFY — VAMSYS]` (per-type tail count not yet broken out from the four-type Bombardier aggregate — see the [Fleet overview](../index.md)). Weights: OEW 13,835 kg 🟩 / MTOW ER 23,133 kg · LR 24,041 kg 🟩 / MZFW derived-estimate only, MLW not found 🟧 `[VERIFY]` / max fuel 6,489 kg 🟩. Typical seating ~50 pax (public sources, general knowledge) `[VERIFY — VAMSYS]` for the exact K Global config. Capability values (EDTO, RVSM, PBN, LVO, steep, RECAT, RFF): see the Fleet Capability Matrix's **secondary/indicative table** — [Fleet Capability Matrix](../capability-matrix.md) (this type is not yet researched to mainline standard; every cell 🟧).

**Hard-wing handling note 🟥 — MANDATORY:** the CRJ-200 retains its original wing design with **no leading-edge slats or other high-lift devices** — a genuine "hard wing." This drives higher approach speeds/AOA margins throughout and a stricter ice/ground-contamination discipline than the slatted CRJ700/900. See Intro §6, Dispatch §4, Checklist (icing items), and QRH Ch 0/7/9/13 for what this means operationally. Do not apply CRJ700/900 slatted-wing assumptions to this type, and do not apply this type's hard-wing cautions to the CRJ700/900.

## Pack files

- [CRJ2 — Intro](intro.md) — v0.1 Draft ✅ built
- [CRJ2 — Dispatch](dispatch.md) — v0.1 Draft ✅ built
- [CRJ2 — Sim-Model](sim-model.md) — v0.1 Draft ✅ built
- [CRJ2 — Checklist](checklist.md) — v0.1 Draft ✅ built
- [CRJ2 — QRH](qrh.md) — v0.1 Draft ✅ built
- [CRJ2 — Livery](livery.md) — v0.1 Draft ✅ built

Same-family, **separately rated** sibling group: [CRJ7 pack](../crj7/index.md) · [CRJ9 pack](../crj9/index.md) · Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- MHI RJ Aviation Group (CRJ program, successor to Bombardier) — https://www.mhi.com/business/products-services/aviation/aircraft-aftermarket-service/crj
- SKYbrary — Bombardier Regional Jet CRJ-200 (CRJ2) — https://skybrary.aero/aircraft/crj2
- Wikipedia — Bombardier CRJ100/200 — https://en.wikipedia.org/wiki/Bombardier_CRJ100/200
- Wikipedia — General Electric CF34 — https://en.wikipedia.org/wiki/General_Electric_CF34
- EASA — Type Certificate Data Sheet EASA.IM.A.673, CL-600 Regional Jet Series — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25-cs-22-cs-23-cs-vla-cs-lsa/easaima673-cl-600
- X-Plane.Org Store — CRJ-200 (JRollon) — https://store.x-plane.org/CRJ-200_p_82.html
- JRollon — product site — https://jrollon.com/CRJ200.html
- Aerosoft — CRJ-200 XP (X-Plane 11) — https://www.aerosoft.com/en/shop/flight/x-plane/x-plane-11/aircraft/549/crj-200-xp

## Change Log

| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Converted stub to full pack index; built all six files (Intro / Dispatch / Sim-Model / Checklist / QRH / Livery) from public MHIRJ/SKYbrary/Wikipedia/EASA TCDS/JRollon-Aerosoft data; documented as a **separate type rating** from the CRJ700/900 (not a common-rating pairing) and flagged 🟥 throughout; hard-wing/no-leading-edge-slat handling premise established as the pack's defining discipline item (icing/contamination, approach-speed schedule); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; registration count left honestly unseeded pending VAMSYS type-level breakout; cross-referenced CRJ7/CRJ9 as the same-family but separately-rated sibling group. |
