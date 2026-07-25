<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  DH8D De Havilland Canada Dash 8 Q400
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# DH8D — De Havilland Canada Dash 8 Q400 · Dispatch

**DH8D · TURBOPROP 🟥** · Regional turboprop, Regional network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the DH8D. Capability values are held in the Fleet Capability Matrix's **secondary/indicative table** (🟧 throughout — this type is not yet researched to mainline standard) — cited, not restated. **Flag 🟥 — turboprop dispatch differs from the jets in this group:** fuel planning must use the DH8D's own SimBrief profile (turboprop torque/climb model), not a jet profile, and icing/contamination discipline is a first-order dispatch item for this type. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | 17,819 🟩 / ~26,308 (derived) 🟧 `[VERIFY]` / 30,481 🟩 / not found 🟧 `[VERIFY — TCDS A-142]` kg |
| Max fuel | 6,526 L (1,724 US gal) 🟧 `[VERIFY]` — source table merges Q-series figures |
| Payload (K Global config) | Max payload 8,489 kg (public spec) 🟩; K Global cabin/seat breakout `[VERIFY — VAMSYS]` |
| Typical block burn | No public reference and **no K Global reference OFP** yet 🟧 `[VERIFY]` |
| Cost index (default) | Per OM E / route economics — no DH8D reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` (generic fleet-wide policy, applied here) |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Regional short-haul twin-turboprop — not EDTO-planned; no K Global rule time asserted.** Matrix secondary table marks this type "Twin" 🟧 indicative only — see §5 |
| Icing planning 🟥 | Icing/contamination is a **first-order dispatch consideration** for this type — ground de-ice holdover, in-flight anti-ice fuel/power penalty, and field-elevation/temperature awareness at Regional-network fields — see §5a |

## 2. SimBrief setup

- **Airframe profile:** DH8D (De Havilland Canada Dash 8 Q400) — SimBrief DH8D
- **Aircraft-data overrides:** OEW 17,819 kg 🟩 / MTOW 30,481 kg 🟩 / MZFW, MLW, max fuel — pending confirmation 🟧 `[VERIFY]`; ceiling 25,000 ft (27,000 ft on drop-mask variant); engines 2× PW150A — confirm exact rating fit against VAMSYS `[VERIFY — VAMSYS]`; PBN/equip — **not confirmed** for this type (matrix secondary table, indicative only) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub (turboprop torque-limited climb/cruise — **do not substitute a jet climb profile**), descent per OM E; **ETOPS threshold — not applicable in normal Regional service; do not set an EDTO rule time for this type without a specific route case** `[VERIFY]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧; **anti-ice/de-ice fuel-flow penalty** should be modelled explicitly for icing-season sectors 🟧 `[VERIFY]`
- Basis: VAMSYS `simbrief_overrides` for this type — not yet populated `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the DH8D as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No public or K Global-verified cruise burn figure is on file for this type 🟧 — the public field-length and cruise-speed figures (Intro §6) suggest good short-field performance and an unusually fast cruise for a turboprop, but this has not been confirmed against a flown OFP. **Turboprop-specific note 🟥:** propeller-driven fuel-flow behaviour (torque-limited climb, autofeather drag penalty on an engine-out diversion) is not interchangeable with the jet fuel-planning assumptions used elsewhere in this group — confirm the SimBrief DH8D profile is actually selected, not a jet substitute. **Tankering:** turboprop tank size and payload/range trade-off are tighter than the jet fleet; assess price-differential tankering case-by-case per OM E, weight-and-CG permitting `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: not yet broken out — `[VERIFY — VAMSYS]`; 2 tails per the Fleet Index (6 Regional unit), a confirmed per-type count (not an aggregate). Public Q400 cabin spans a typical 78-seat to a maximum 90-seat configuration (Intro §1).
- Standard pax/bag weights and belly bulk loading plan per OM E loading policy; keep ZFW within MZFW (once confirmed) and CG within envelope. 🟧
- **Hot-and-high / short-field penalties:** not assessed for this type — no matrix column covers hot-and-high sensitivity for the secondary/indicative table. The DH8D's short published field lengths (Intro §6) suggest headroom at most Regional-network fields, but this is not a confirmed K Global assessment. 🟧
- **Turboprop loading note 🟥:** forward and aft baggage compartments are external-access only (both doors open outward, from outside the aircraft) — confirm ground-handling procedures reflect this, unlike the jets in this group which may have differing hold-access arrangements.

## 5. ETOPS / EDTO 🟥

- **Capability:** the Fleet Capability Matrix carries the DH8D only in its **secondary/indicative table**, marking it "Twin" 🟧 — this is an **indicative** note, not a confirmed type fact researched to mainline standard.
- **K Global application:** the DH8D flies the **Regional network** — short-haul sectors well within the type's ~1,100 NM structural range, not the EDTO-relevant oceanic/remote long-thin routes flown by the mainline widebody fleet. **No EDTO rule time is asserted for this type** — none is needed for its normal route set, and none should be assumed or set in SimBrief without a specific route case and a fresh capability review.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (secondary table for this type). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set as applicable; not normally an EDTO consideration for this type's short route set. 🟧

## 5a. Icing & cold-weather dispatch 🟥

- **Turboprops of this class are commonly certified for flight into known icing conditions** — general public knowledge, re-expressed, not a confirmed K Global type-specific certification statement for these tails 🟧 `[VERIFY — TCDS A-142]`.
- **Dispatch impact:** ground de-icing/anti-icing (fluid type/holdover time) per OM E cold-weather policy; in-flight ice-protection systems impose a bleed-air/electrical-load fuel-flow penalty that should be reflected in the fuel plan for icing-season sectors — not yet quantified for this type 🟧 `[VERIFY]`.
- **Field selection:** confirm de-ice facilities and holdover-time tables are current for every Regional-network field flown in the icing season; this is a first-order Regional-network dispatch item given the type's shorter-field, more marginal-weather route profile relative to the mainline jet fleet.
- Cross-ref Intro §6 (icing/de-ice architecture) and QRH Ch 9 (icing procedures).

## 6. Route applicability

- **Cleared/typical:** Regional-network short-haul sectors, within the ~1,100 NM structural range (Intro §1). Not flown on oceanic/EDTO-limiting long-thin routes — those remain mainline widebody territory.
- **Watch:** hot-and-high performance unassessed (§4); confirm reserves and field performance per field before scheduling into thin-margin airports; confirm icing/de-ice facility availability at every field flown in season (§5a).
- **Standalone type:** the DH8D does not share a common type rating with any other type in this group — the ATR 72/42 (`AT76`/`AT46`) share a rating with each other, and the CRJ7/CRJ9 share a rating with each other, but the DH8D is a distinct crew qualification on its own.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No DH8D reference OFP yet | 🟧 | Burn/CI/alternates are public-Wikipedia/manufacturer-spec-derived only — replace with type OFP figures when first flown |
| MZFW/MLW/max fuel not independently confirmed | 🟧 | MZFW is derived (OEW + max payload), not an independently published figure; confirm against Transport Canada TCDS A-142 or VAMSYS |
| Payload/config not broken out | 🟧 | `[VERIFY — VAMSYS]` — 2-tail count is confirmed per Fleet Index; seat/cabin config is not |
| Hot-and-high payload limit | 🟧 | Not assessed — no matrix column for this type |
| ETOPS/EDTO | 🟧 | Not EDTO-planned; no K Global rule time asserted; matrix secondary-table capability note is indicative only |
| Icing / de-ice dispatch penalty | 🟥 | Not yet quantified for this type; first-order Regional-network dispatch item — see §5a |
| Turboprop fuel-planning model | 🟥 | SimBrief DH8D profile (turboprop torque/climb) must be used — do not substitute a jet profile from elsewhere in this group |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — De Havilland Canada Dash 8 — https://en.wikipedia.org/wiki/De_Havilland_Canada_Dash_8
- Transport Canada — Type Certificate Data Sheet A-142 (DHC-8 series) — https://wwwapps.tc.gc.ca/saf-sec-sur/2/nico-celn/c_d.aspx?lang=eng&aprv_num=A-142
- De Havilland Aircraft of Canada — Dash 8-400 — https://dehavilland.com/en/aircraft/dash-8-400

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Wikipedia/Transport Canada TCDS data; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); no EDTO rule time asserted (regional short-haul twin-turboprop); icing/cold-weather dispatch called out as a first-order item (§5a, 🟥); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; no type OFP yet (watch-item); confirmed this type has no common-type-rating sibling in the group. |
