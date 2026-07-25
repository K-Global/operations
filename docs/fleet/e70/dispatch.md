<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  E70 Embraer E170
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# E70 — Embraer E170 · Dispatch

**E70 / E-Jet family** · Regional narrowbody twin, short-haul regional core
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, EDTO rules) is defined once in OM E — this file **applies** it to the E70. Capability values are held in the Fleet Capability Matrix (secondary/indicative table for this type) — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~21,000 🟧 / ~30,900 / ~37,200 / ~32,900 kg 🟧 `[VERIFY]` |
| Max fuel | ~9,850 kg (~12,675 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | ~72–78 pax + belly cargo `[VERIFY — VAMSYS]` |
| Typical block burn | No E70 reference OFP yet — public-Embraer-derived only 🟧 |
| Cost index (default) | Per OM E / route economics — no E70 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | Twin; regional short-haul network — **no K Global rule time asserted** for this type; see §5 |

## 2. SimBrief setup

- **Airframe profile:** E170 — SimBrief E170
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling ~FL410; engines 2 × CF34-8E; PBN/equip per fleet standard — verify against the Fleet Capability Matrix secondary table before assuming mainline-standard values 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; no EDTO threshold/rule-time selector applies on regional sectors (see §5)
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type, once populated `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the E70 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No K Global reference OFP has yet been flown for this type, so trip-fuel/CI figures are public-Embraer-derived only, not OFP-verified 🟧. **Tankering:** regional short-haul sector lengths and the type's modest fuel tank size limit tankering headroom; assess case-by-case per OM E on any leg with a meaningful Frankfurt/hub-vs-outstation price differential `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/Fuel Policy.md`.

## 4. Payload & loading

- K Global config: **~72–78 pax + belly cargo** `[VERIFY — VAMSYS]`.
- Standard pax/bag weights and belly bulk/limited-container plan per OM E loading policy; keep ZFW within MZFW and CG within envelope. 🟧
- **Hot-and-high / short-field penalties:** not yet assessed for this type against K Global's high-elevation hubs — treat as an open watch-item pending fleet-matrix research to mainline standard. 🟧

## 5. ETOPS / EDTO — regional, no rule time asserted 🟧

- **Capability:** the E170 is a twin; EDTO/ETOPS concepts apply in principle to any twin operating beyond the ICAO default **60-minute threshold** from an adequate alternate. K Global flies this type on **short-haul regional/city sectors** that are, by network design, well inside that threshold at normal cruise — the type does not currently require an EDTO rule-time approval to operate its scheduled routes.
- **No operator rule time set:** unlike the mainline narrowbody/widebody fleet (Fleet Capability Matrix Table A, OpsSpec batch 1), **no EDTO rule time has been approved or asserted for the E70** — the type sits in the matrix's secondary/indicative table only, flagged 🟧 throughout, not yet researched to the mainline standard. Do not assume the narrowbody-twin **120 min** figure applies here without a dedicated OpsSpec decision.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. If a future route were to approach the 60-minute threshold ring, this file's watch-item (below) requires EDTO planning to be invoked and a type-specific rule time sought **before** schedule commitment — it is not to be inferred from another type's approval.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set; not a live concern for the current short-haul regional network, but must be reassessed if route planning extends sector length. 🟧

## 6. Route applicability

- **Cleared/typical:** short-haul **Regional**-unit sectors within ~2,100 NM structural range — the standard mission for this type.
- **Watch:** any proposed route lengthening toward the EDTO threshold (§5); hot-and-high departures pending matrix research (§4).
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No E70 reference OFP yet | 🟧 | Burn/CI/alternates are public-Embraer-derived — replace with type OFP figures when first flown |
| Fleet Capability Matrix — secondary table only | 🟧 | E70 not yet researched to mainline standard; RECAT/wake/RFF/EDTO values indicative — confirm before operational use |
| EDTO rule time not set | 🟥 | Regional network keeps sectors inside the 60-min default threshold; do not schedule a route approaching that threshold without a dedicated OpsSpec EDTO decision for this type |
| Steep approach — not certified | 🟥 | Standard E170 not steep-certified; not a candidate for the OM E steep-approach deferral (E190-E2/E195-E2 differs) |
| Weight variant confirmation | 🟧 | Multiple E170 sub-variants (STD/LR/SU/SE) carry different MTOW/range — confirm VAMSYS mirror variant before performance planning |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Embraer — Commercial aviation, E-Jets — https://www.embraer.com
- EASA — Type-Certificate Data Sheet EASA.IM.A.001, Embraer ERJ 170 — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25-cs-22-cs-23-cs-vla-cs-lsa/easaima001-erj-170
- Wikipedia — Embraer E-Jet family — https://en.wikipedia.org/wiki/Embraer_E-Jet_family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Embraer/EASA data cloning the A320 Dispatch pattern; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); no EDTO rule time asserted for this type (secondary-table-only capability, regional sectors inside the 60-min default threshold); steep-approach non-certification flagged; no type OFP yet (watch-item). |
