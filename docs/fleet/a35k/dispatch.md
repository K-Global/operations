<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  A35K Airbus A350-1000
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A35K — Airbus A350-1000 · Dispatch

**A35K / A350 family** · Ultra-long-haul widebody twin, Premier flagship EDTO trunk aircraft
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the A35K. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~155,000 / ~223,000 / ~319,000 / ~236,000 🟧 `[VERIFY]` |
| Max fuel | ~124 t (~156,000 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | 1 Premier · seats `[VERIFY]` + belly cargo `[VERIFY]` `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | ~6.7 t/hr avg (public-derived, longer/heavier than A339) 🟧 `[VERIFY]` — no reference OFP built for this type yet |
| Cost index (default) | Per OM E / SimBrief profile 🟧 `[VERIFY]` |
| Reserve rule | Final reserve + alternate per OM E fuel policy 🟧 `[VERIFY]` |
| Contingency | Per OM E policy 🟧 `[VERIFY]` |
| ETOPS/EDTO | **Approved EDTO rule time: 180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type certified **up to 370 min** (Trent XWB / A350 XWB) 🟥 |

## 2. SimBrief setup
- **Airframe profile:** Airbus A350-1000 (Trent XWB-97) — SimBrief **A35K**
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults (MTOW ~319,000 / MLW ~236,000 / MZFW ~223,000 🟧 `[VERIFY]`); ceiling ~FL431; engines Trent XWB-97; PBN/equip per fleet standard 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule, contingency %, fuel factor, cruise mode/sub, climb/descent per OM E; cost index per OM E default; **ETOPS threshold & rule selector = 180 min** (approved rule time) 🟧 `[VERIFY]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the A35K as taxi + trip + contingency + alternate + final reserve + any additional/holding — method defined once in OM E, applied here, not restated. Against ~124 t max fuel the -1000 carries large EDTO/critical-fuel margin on the ultra-long-haul trunks it is built for; burn is higher than the A339 (longer, heavier airframe) so trip fuel scales accordingly 🟧 `[VERIFY]`. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg; the large ~156,000 L tank gives real tankering headroom on short-turn pairs, weight-and-CG permitting. Exact reserve/contingency percentages are defined in OM E — apply, do not restate here. 🟧 `[VERIFY OM E]`

## 4. Payload & loading
- K Global config: **1 Premier · seats `[VERIFY]` + belly cargo `[VERIFY]`** `[VAMSYS mirror 2026-07-25]`. Reseed exact seat count and cargo allowance from live VAMSYS before use.
- Standard pax/bag weights and belly LD3/LD6 container plan per OM E loading policy; keep ZFW within MZFW (~223 t) and CG within envelope.
- **Hot-and-high / short-field penalties:** the higher ~319 t MTOW (vs A359 ~280 t) means thrust-limited takeoffs at FAOR/HAAB/NBO bite harder on the -1000 than on the -900 despite the uprated XWB-97 — check per field before committing schedule, and expect reduced payload or fuel on long legs out of high-elevation hubs. 🟧

## 5. ETOPS / EDTO 🟥
- **Capability:** A350 XWB type is EDTO-certified **up to 370 minutes** (EASA, Trent XWB family). K Global operates to the **approved rule time**, not the type maximum. **Approved EDTO rule time: 180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]` — the A35K, as a widebody twin, is approved to the full 180-min OpsSpec rule time, well inside the 370-min type ceiling.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. This file only records the type application.
- **En-route alternates:** select per leg (transoceanic/near-polar routings) — no reference OFP built for this type yet, so no fixed alternate pair recorded here 🟧 `[VERIFY]`.
- **Critical-fuel note:** critical-fuel scenario (decompression + engine-out driftdown at the ETOPS entry point to the most limiting en-route alternate) must be checked against the fuel plan per OM E; the ~124 t tank leaves large margin on typical trunk burns. 🟥

## 6. Route applicability
- **Cleared/typical:** the longest premium intercontinental trunks within ~8,700 NM structural range; ultra-long-haul flagship pairings that need both the cabin and the EDTO reach. Well suited to transoceanic/near-polar routings.
- **Watch:** length-critical and high-elevation departures where the higher MTOW caps payload (§4), and stand-length limits at Code E gates that accept the A359 but not the 73.79 m -1000 (see Intro §4).
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| Range vs longest scheduled sector | 🟧 | ~8,700 NM structural (public) — confirm reserves on the longest trunk; no OFP yet |
| Hot-and-high payload limit | 🟧 | Higher MTOW than A359 — FAOR/HAAB/NBO thrust-limited; payload/fuel penalties bite harder |
| ETOPS adequacy on thin routes | 🟩 | Approved rule time **180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type capable 370 — confirm en-route alternates per leg |
| Tankering opportunity/risk | 🟩 | Large ~156,000 L tank gives headroom; check hub price differentials + CG |
| Stand length | 🟧 | 73.79 m — longer than A359; confirm Code E gate length per field |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A350-1000 type page — https://www.aircraft.airbus.com/en/aircraft/a350/a350-1000
- EASA — EASA certifies Airbus A350 XWB for up to 370-minute ETOPS — https://www.easa.europa.eu/en/newsroom-and-events/news/easa-certifies-airbus-a350-xwb-370-minute-etops
- EASA — TCDS EASA.A.151 Airbus A350 — https://www.easa.europa.eu/en/document-library/type-certificates
- SKYbrary — Airbus A350-1000 (A35K) — https://skybrary.aero/aircraft/a35k
- Wikipedia — Airbus A350 — https://en.wikipedia.org/wiki/Airbus_A350
- Wikipedia — Rolls-Royce Trent XWB — https://en.wikipedia.org/wiki/Rolls-Royce_Trent_XWB

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Airbus/EASA data + the Fleet Capability Matrix (EDTO 180 approved / 370 capable); no reference OFP yet |
