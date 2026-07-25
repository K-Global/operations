<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  CRJ9 Bombardier CRJ900
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# CRJ9 — Bombardier CRJ900 · Dispatch

**CRJ9 / CRJ series** · Narrowbody regional jet, City/Regional network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the CRJ9. This dispatch method is identical in structure to the **[CRJ7 Dispatch](../crj7/dispatch.md)** — the common-rated sibling — differing mainly in weight/range figures for the stretched airframe. Capability values are held in the Fleet Capability Matrix's **secondary/indicative table** (🟧 throughout — this type is not yet researched to mainline standard) — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | not found 🟧 `[VERIFY]` / not found 🟧 `[VERIFY]` / 36,500 🟩 (baseline; ER higher 🟧) / not found 🟧 `[VERIFY]` kg |
| Max fuel | Not found in surveyed public sources 🟧 `[VERIFY]` |
| Payload (K Global config) | `[VERIFY — VAMSYS]` — not yet broken out per type; see group aggregate (~10 tails across four Bombardier types) |
| Typical block burn | No public reference and **no K Global reference OFP** yet 🟧 `[VERIFY]` |
| Cost index (default) | Per OM E / route economics — no CRJ9 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` (generic fleet-wide policy, applied here) |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Regional short-haul type — not typically EDTO-planned; no K Global rule time asserted.** Matrix secondary table marks this type "Twin" 🟧 indicative only — see §5 |

## 2. SimBrief setup

- **Airframe profile:** CRJ9 (Bombardier CRJ900) — SimBrief CRJ9
- **Aircraft-data overrides:** OEW / MZFW / MLW / max fuel — pending confirmation 🟧 `[VERIFY]`; MTOW 36,500 kg (baseline) 🟩; ceiling FL410; engines CF34-8C5/8C5B1 — confirm which fit applies to K Global's tails `[VERIFY — VAMSYS]`; PBN/equip — **not confirmed** for this type (matrix secondary table, indicative only) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold — not applicable in normal City/Regional service; do not set an EDTO rule time for this type without a specific route case** `[VERIFY]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type — not yet populated `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the CRJ9 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No public or K Global-verified cruise burn figure is on file for this type 🟧 — the SKYbrary field-length and cruise figures (Intro §6) suggest the type behaves as a conventional short/medium-haul regional jet on fuel, burning somewhat more than the CRJ7 given the stretched fuselage and higher weight, but this has not been confirmed against a flown OFP. **Tankering:** regional-jet tank size is limited relative to the mainline fleet; assess price-differential tankering case-by-case per OM E, weight-and-CG permitting `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: not yet broken out per type — `[VERIFY — VAMSYS]`; the group aggregate is ~10 tails across four Bombardier types (CRJ7/CRJ9/CRJ2/CL30), City/Regional/Executive units.
- Standard pax/bag weights and belly bulk loading plan per OM E loading policy; keep ZFW within MZFW (once confirmed) and CG within envelope. 🟧 The CRJ900 carries more seats (76–90) than the CRJ7 (70, up to 78) on a broadly similar fuselage cross-section — cargo/belly volume per passenger is correspondingly tighter; confirm against the type OFP once flown.
- **Hot-and-high / short-field penalties:** not assessed for this type — no matrix column covers hot-and-high sensitivity for the secondary/indicative table. Expect a tighter margin than the CRJ7 given the higher weight. Treat as unconfirmed until a K Global assessment is made. 🟧
- **Hard-wing / contamination discipline note 🟥:** the CRJ900 shares the CRJ700's slatted wing (Intro §6) — it is **not** the hard-wing CRJ-200. The operationally significant discipline item for this type is standard turbofan/regional-jet **icing and ground-contamination speed/configuration care**, not a structural no-slat AOA limitation. Do not brief this type using CRJ-200 hard-wing cautions.

## 5. ETOPS / EDTO 🟥

- **Capability:** the Fleet Capability Matrix carries the CRJ9 only in its **secondary/indicative table**, marking it "Twin" 🟧 — this is an **indicative** note, not a confirmed type fact researched to mainline standard.
- **K Global application:** the CRJ9 flies the **City/Regional network** — short-haul sectors within structural range, not the EDTO-relevant oceanic/remote long-thin routes flown by the mainline widebody fleet. **No EDTO rule time is asserted for this type** — none is needed for its normal route set, and none should be assumed or set in SimBrief without a specific route case and a fresh capability review.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (secondary table for this type). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set as applicable; not normally an EDTO consideration for this type's route set. 🟧

## 6. Route applicability

- **Cleared/typical:** City and Regional network short-haul sectors, within the ~1,553 NM baseline range (ER variant extends further, §Intro). Not flown on oceanic/EDTO-limiting long-thin routes — those remain mainline widebody territory.
- **Watch:** hot-and-high performance unassessed (§4), and expected tighter than the CRJ7's given the higher weight; confirm reserves and field performance per field before scheduling into thin-margin airports; confirm CF34-8C5 vs -8C5B1 engine standard before assuming ER-level performance.
- **Common-rated sibling:** the CRJ7 shares this pack's type rating and dispatch method — see the [CRJ7 Dispatch](../crj7/dispatch.md) for the shorter-fuselage variant's payload/range trade-off. Where a route is within CRJ7 range but oversized on pax demand, the CRJ9 is the natural up-gauge within the same crew rating.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No CRJ9 reference OFP yet | 🟧 | Burn/CI/alternates are public-SKYbrary/Bombardier-derived only — replace with type OFP figures when first flown |
| OEW/MZFW/MLW/max fuel not confirmed | 🟧 | Not found in surveyed public sources — confirm against FAA TCDS A21EA or VAMSYS |
| CF34-8C5 vs CF34-8C5B1 engine standard | 🟧 | Confirm which engine standard K Global's tails carry before treating MTOW/thrust figures as authoritative |
| Payload/config not broken out | 🟧 | `[VERIFY — VAMSYS]` — group aggregate only; reseed when VAMSYS type-level data is available |
| Hot-and-high payload limit | 🟧 | Not assessed — no matrix column for this type; expect tighter margin than CRJ7 |
| ETOPS/EDTO | 🟧 | Not typically EDTO-planned; no K Global rule time asserted; matrix secondary-table capability note is indicative only |
| Wing/icing premise | 🟥 | CRJ700/900 have a slatted wing (not hard-wing); do not brief CRJ-200 no-slat cautions against this type |
| Common type rating with CRJ7 | 🟩 | Crew-scheduling flexibility across CRJ7/CRJ9; CRJ-200 documented separately in this group |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- MHI RJ Aviation Group (CRJ program, successor to Bombardier) — https://www.mhi.com/business/products-services/aviation/aircraft-aftermarket-service/crj
- FAA — Type Certificate Data Sheet A21EA (CL-600-2C10 / CL-600-2D24) — https://drs.faa.gov/browse/excelExternalWindow/DRSDOCID139432206720241108194210.0001
- SKYbrary — Bombardier CRJ-900 (CRJ9) — https://skybrary.aero/aircraft/crj9

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public MHIRJ/FAA TCDS/SKYbrary data; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); no EDTO rule time asserted (regional short-haul type); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; no type OFP yet (watch-item); wing/icing premise corrected (slatted wing, not hard-wing); cross-referenced CRJ7 as the common-rated sibling. |
