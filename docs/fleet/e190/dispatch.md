<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  E190 Embraer 190
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# E190 — Embraer 190 · Dispatch

**E190 / E-Jet family** · Narrowbody regional jet, City/Regional network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the E190. Capability values are held in the Fleet Capability Matrix's **secondary/indicative table** (🟧 throughout — this type is not yet researched to mainline standard) — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | 27,837 🟩 / not found 🟧 `[VERIFY]` / 51,800 🟩 / not found 🟧 `[VERIFY]` kg |
| Max fuel | ~12,971 kg 🟧 `[VERIFY]` |
| Payload (K Global config) | `[VERIFY — VAMSYS]` — not yet broken out per type; see the fleet register aggregate (~30 tails across five Embraer types + E35L) |
| Typical block burn | No public reference and **no K Global reference OFP** yet 🟧 `[VERIFY]` |
| Cost index (default) | Per OM E / route economics — no E190 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` (generic fleet-wide policy, applied here) |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Regional short/medium-haul type — not typically EDTO-planned; no K Global rule time asserted.** Matrix secondary table marks this type "Twin; ETOPS-capable" 🟧 indicative only — see §5 |

## 2. SimBrief setup

- **Airframe profile:** E190 (Embraer 190) — SimBrief E190 (E190STD)
- **Aircraft-data overrides:** OEW / MTOW — set to public figures above where they differ from SimBrief defaults 🟧 `[VERIFY]`; MZFW/MLW/max fuel pending confirmation 🟧 `[VERIFY]`; ceiling FL410; engines CF34-10E; PBN/equip — **not confirmed** for this type (matrix secondary table, indicative only) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold — not applicable in normal City/Regional service; do not set an EDTO rule time for this type without a specific route case** `[VERIFY]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type — not yet populated `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the E190 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No public or K Global-verified cruise burn figure is on file for this type 🟧 — the ~12,971 kg max-fuel figure against a ~2,450 NM structural range suggests adequate reserve margin on the short/medium City/Regional sector set, but this has not been confirmed against a flown OFP. **Tankering:** regional-jet tank size is limited relative to the mainline fleet; assess price-differential tankering case-by-case per OM E, weight-and-CG permitting `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: not yet broken out per type — `[VERIFY — VAMSYS]`; the group aggregate is ~30 tails across five Embraer types plus the E35L business jet, split 4 City / 6 Regional / 8 Executive.
- Standard pax/bag weights and belly bulk loading plan per OM E loading policy; keep ZFW within MZFW (once confirmed) and CG within envelope. 🟧
- **Hot-and-high / short-field penalties:** not assessed for this type — no matrix column covers hot-and-high sensitivity for the secondary/indicative table. Treat as unconfirmed until a K Global assessment is made. 🟧

## 5. ETOPS / EDTO 🟥

- **Capability:** the Fleet Capability Matrix carries the E190 only in its **secondary/indicative table**, marking it "Twin; ETOPS-capable" 🟧 — this is an **indicative** note, not a confirmed type fact researched to mainline standard.
- **K Global application:** the E190 flies the **City/Regional network** — short/medium-haul sectors within structural range, not the EDTO-relevant oceanic/remote long-thin routes flown by the mainline widebody fleet. **No EDTO rule time is asserted for this type** — none is needed for its normal route set, and none should be assumed or set in SimBrief without a specific route case and a fresh capability review.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (secondary table for this type). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set as applicable; not normally an EDTO consideration for this type's route set. 🟧

## 6. Route applicability

- **Cleared/typical:** City and Regional network short-haul sectors, comfortably within the ~2,450 NM structural range. Not flown on oceanic/EDTO-limiting long-thin routes — those remain mainline widebody territory.
- **Watch:** hot-and-high performance unassessed (§4); confirm reserves and field performance per field before scheduling into thin-margin airports.
- **Steep-approach note:** the first-generation E190 (E1) as operated here is **not** steep-approach certified; the **E190-E2** is the prospective LCY/steep-field candidate per the Fleet Capability Matrix (Table C, Open items) — a different airframe, not this fleet. Do not route this type into steep-approach-only fields on the assumption the family is certified.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No E190 reference OFP yet | 🟧 | Burn/CI/alternates are public-Embraer-derived only — replace with type OFP figures when first flown |
| MZFW / MLW not confirmed | 🟧 | Not found in surveyed public sources — confirm against EASA TCDS EASA.IM.A.071 or VAMSYS |
| Payload/config not broken out | 🟧 | `[VERIFY — VAMSYS]` — group aggregate only; reseed when VAMSYS type-level data is available |
| Hot-and-high payload limit | 🟧 | Not assessed — no matrix column for this type |
| ETOPS/EDTO | 🟧 | Not typically EDTO-planned; no K Global rule time asserted; matrix secondary-table capability note is indicative only |
| Steep approach | 🟥 | E1 (this fleet) not certified; E190-E2 is the prospective LCY solution — a different airframe; matrix operator approval remains deferred |
| Common type rating with E195 | 🟩 | Crew-scheduling flexibility across E190/E195; distinct from E170/E175 and ERJ-145 ratings |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Embraer — commercial aircraft — https://www.embraer.com
- EASA — TCDS EASA.IM.A.071 ERJ 190 (covers E190/E195 family) — https://www.easa.europa.eu/en/document-library/type-certificates/noise/easaima071-erj-190
- SKYbrary — Embraer E190 (E190) — https://skybrary.aero/aircraft/e190
- Wikipedia — Embraer E-Jet family — https://en.wikipedia.org/wiki/Embraer_E-Jet_family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Embraer/EASA data; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); no EDTO rule time asserted (regional short/medium-haul type); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; no type OFP yet (watch-item); steep-approach distinction flagged. |
