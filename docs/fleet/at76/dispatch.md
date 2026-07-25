<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  AT76 ATR 72-600
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# AT76 — ATR 72-600 · Dispatch

**AT76 / ATR-600 series** · **TURBOPROP** 🟥 · Regional network, short-haul feeder
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS/EDTO rules) is defined once in OM E — this file **applies** it to the AT76. **This is a turboprop, not a jet** 🟥 — the fuel/performance regime (low FL250 cruise ceiling, torque/ITT-based power setting, icing discipline at the lower flight levels it actually flies) is materially different from every other type in this OM B tree; see §5 and §7. Capability values are held in the Fleet Capability Matrix's **secondary/indicative table** (🟧 throughout — this type is not yet researched to mainline standard) — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | not found 🟧 `[VERIFY]` / not found 🟧 `[VERIFY]` / ~22,800 🟩 (public reference; some sources ~23,000 🟧) / not found 🟧 `[VERIFY]` kg |
| Max fuel | Not confirmed for this variant 🟧 `[VERIFY]` |
| Payload (K Global config) | `[VERIFY — VAMSYS]` — not yet broken out per type; see group aggregate (5 tails across AT76/AT46) |
| Typical block burn | No public reference and **no K Global reference OFP** yet 🟧 `[VERIFY]` — turboprop fuel flow is materially lower per hour than a comparable regional jet, but exact figures are unconfirmed |
| Cost index (default) | Per OM E / route economics — no AT76 reference OFP CI yet 🟧 `[VERIFY]`; turboprop cost-index logic (if modelled by SimBrief for this profile) trades speed against burn differently from a jet profile — confirm the profile's CI behaviour before assuming a jet-style CI scale applies |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` (generic fleet-wide policy, applied here) |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Short-haul regional turboprop — not EDTO-planned; no K Global rule time asserted.** Matrix secondary table marks this type "Twin" 🟧 indicative only — see §5 |

## 2. SimBrief setup

- **Airframe profile:** AT76 (ATR 72-600) — SimBrief AT76
- **Aircraft-data overrides:** OEW / MZFW / MLW / max fuel — pending confirmation 🟧 `[VERIFY]`; MTOW ~22,800 kg (public reference) 🟩; ceiling **FL250** (hard cap — do not plan a cruise level above this for the type); engines PW127M / PW127XT-M — confirm which fit applies to K Global's tails `[VERIFY — VAMSYS]`; PBN/equip — **not confirmed** for this type (matrix secondary table, indicative only) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold — not applicable; do not set an EDTO rule time for this type** `[VERIFY]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- **Turboprop cruise-profile note 🟧:** confirm the SimBrief AT76 profile is set to a realistic low-altitude short-sector climb/cruise/descent shape (this type rarely if ever climbs to its FL250 ceiling on a short Regional sector) rather than defaulting to jet-style high-altitude cruise logic `[VERIFY]`.
- Basis: VAMSYS `simbrief_overrides` for this type — not yet populated `[VERIFY — VAMSYS]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the AT76 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. No public or K Global-verified cruise burn figure is on file for this type 🟧 — turboprop fuel flow is, in general public terms, markedly lower per block hour than a comparably sized regional jet, but this has not been confirmed against a flown OFP for this specific airframe/engine fit. **Tankering:** turboprop tank size and burn-rate economics differ materially from the jet fleet; assess price-differential tankering case-by-case per OM E, weight-and-CG permitting, and do not assume jet-fleet tankering thresholds apply `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: not yet broken out per type — `[VERIFY — VAMSYS]`; the group aggregate is 5 tails across the two ATR types (AT76/AT46), 6 Regional business unit.
- Standard pax/bag weights and belly bulk loading plan per OM E loading policy; keep ZFW within MZFW (once confirmed) and CG within envelope. High-wing turboprop loading/trim behaviour differs from the low-wing jet fleet — confirm CG-envelope handling per the flown model/OFP 🟧.
- **Hot-and-high / short-field penalties:** the PW127M/XT family carries publicly noted boost and Reserve-Take-Off functions that improve hot-and-high and short-field performance versus earlier ATR variants, but K Global has not assessed this for specific network airports — no matrix column covers hot-and-high sensitivity for the secondary/indicative table. Treat as unconfirmed until a K Global assessment is made. 🟧
- **Icing discipline note 🟥:** this type's short/thin Regional network typically flies at lower flight levels than the jet fleet, where airframe/propeller icing exposure is materially higher. Ground de-ice holdover and in-flight propeller/wing/tail ice-protection discipline (Intro §6) are a first-order dispatch consideration for this type — see §7 and QRH Ch 9.

## 5. ETOPS / EDTO 🟥

- **Capability:** the Fleet Capability Matrix carries the AT76 only in its **secondary/indicative table**, marking it "Twin" 🟧 — this is an **indicative** note, not a confirmed type fact researched to mainline standard.
- **K Global application:** the AT76 flies the **Regional network** — the shortest, thinnest-route tier of the fleet, well within structural range and nowhere near an EDTO-relevant scenario. **No EDTO rule time is asserted for this type** — none is needed for its normal route set, and none should be assumed or set in SimBrief without a specific route case and a fresh capability review.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (secondary table for this type). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set as applicable; not normally an EDTO consideration for this type's route set. 🟧

## 6. Route applicability

- **Cleared/typical:** Regional network short/thin sectors, within the ~825 NM structural range (source-variant dependent, §Intro). Short-field capable (~1,333 m TO / ~914 m LDG, public reference) — a genuine operational advantage for thin/regional airports the jet fleet cannot serve.
- **Watch:** hot-and-high performance unassessed (§4); confirm reserves and field performance per field before scheduling into thin-margin airports; confirm PW127M vs PW127XT-M engine fit before assuming performance figures; **low cruise-altitude regime (FL250 hard ceiling) drives materially different terrain/weather/icing planning** than any jet type in the fleet.
- **Common-rated sibling:** the AT46 shares this pack's ATR-600 type rating and much of its dispatch method — see the [AT46 Dispatch](../at46/dispatch.md) for the smaller variant's payload/range trade-off.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No AT76 reference OFP yet | 🟧 | Burn/CI/alternates are public-ATR/AeroCorner-derived only — replace with type OFP figures when first flown |
| OEW/MZFW/MLW/max fuel not confirmed | 🟧 | Not found in surveyed public sources — confirm against EASA TCDS A.084 or VAMSYS |
| PW127M vs PW127XT-M engine fit | 🟧 | Confirm which engine variant K Global's tails carry before treating performance figures as authoritative |
| Payload/config not broken out | 🟧 | `[VERIFY — VAMSYS]` — group aggregate only (5 tails across AT76/AT46); reseed when VAMSYS type-level data is available |
| Hot-and-high payload limit | 🟧 | Not assessed — no matrix column for this type; PW127M/XT boost functions noted publicly |
| ETOPS/EDTO | 🟧 | Not EDTO-planned; no K Global rule time asserted; matrix secondary-table capability note is indicative only |
| Icing/ice-protection discipline | 🟥 | Lower cruise-altitude regime increases icing exposure versus jet fleet — propeller/wing/tail ice protection is a first-order dispatch item, not a secondary caution |
| FL250 hard ceiling | 🟥 | Structural/pressurisation cap — plan terrain/weather clearance accordingly; distinct from every jet type in the fleet |
| Common type rating with AT46 | 🟩 | Crew-scheduling flexibility across AT76/AT46 — both ATR-600 common-rated |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — ATR ATR-72-600 (AT76) — https://skybrary.aero/aircraft/at76
- EASA — Type Certificate Data Sheet A.084 (ATR42/ATR72) — https://www.easa.europa.eu/en/document-library/type-certificates
- ATR Aircraft — ATR 72-600 factsheet — https://www.atr-aircraft.com/wp-content/uploads/2020/07/Factsheets_-_ATR_72-600.pdf
- ATR Aircraft — PW127XT engine — https://www.atr-aircraft.com/innovation/pw127xt-engine/
- AeroCorner — ATR 72-600 — https://aerocorner.com/aircraft/atr-72-600/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public ATR/EASA TCDS/AeroCorner data; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering case-by-case); no EDTO rule time asserted (short-haul regional turboprop); capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table; no type OFP yet (watch-item); turboprop-specific icing/cruise-ceiling discipline flagged 🟥. |
