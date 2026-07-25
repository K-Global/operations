<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  A320 Airbus A320-200
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A320 — Airbus A320-200 · Dispatch

**A320 / A320 family** · Narrowbody twin, short/medium-haul core
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the A320. Capability values are held in the Fleet Capability Matrix — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~42,600 🟧 / ~62,500 / ~78,000 / ~66,300 kg 🟧 `[VERIFY]` |
| Max fuel | ~19,050 kg (~24,210 L) 🟧 `[VERIFY]` |
| Payload (K Global config) | 150 pax + 8,000 kg belly `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | ~2.4–2.6 t/hr avg short/medium-haul cruise (public reference) 🟧 — no A320 reference OFP yet 🟧 |
| Cost index (default) | Per OM E / route economics — no A320 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type certified up to **180 min** 🟥 — see §5 & matrix |

## 2. SimBrief setup

- **Airframe profile:** A320 (A320-200) — SimBrief A320
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults 🟧 `[VERIFY]`; ceiling ~FL398; engines CFM56-5B or V2500 per tail; PBN/equip per fleet standard (RVSM, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold & rule selector = 120 min** (narrowbody twin) `[K Global OpsSpec 2026-07-25]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the A320 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Public short/medium-haul cruise burn is **~2.4–2.6 t/hr** 🟧; against ~19 t max fuel the aircraft carries adequate reserve margin on the short/medium trunk set. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg — narrowbody tank size limits tankering headroom vs the widebody fleet, but short-turn pairs can still benefit weight-and-CG permitting; tankering is authorised **case-by-case** per OM E `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading

- K Global config: **150 pax + 8,000 kg belly** `[VAMSYS mirror 2026-07-25]`.
- Standard pax/bag weights and belly bulk/limited-container plan per OM E loading policy; keep ZFW within MZFW ~62,500 kg and CG within envelope. 🟧
- **Hot-and-high / short-field penalties:** matrix rates hot/high sensitivity **Low–moderate** (neo/thrust-variant dependent); thrust-limited takeoffs at FAOR/HAAB/NBO can force reduced payload or fuel on longer/thinner legs at high TOW — check per field before committing schedule. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 5. ETOPS / EDTO 🟥

- **Capability:** A320 type is EDTO-certified **up to 180 minutes** (twin, classic ETOPS). K Global operates to the **approved rule time**, not the type maximum. **Approved EDTO rule time: 120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]` — the 180-min certification is the type ceiling, not the K Global approval.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set; no A320 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- **Critical-fuel note:** narrowbody twin EDTO scenarios are typically confined to overwater/remote short-hop sectors within the network; check against the fuel plan per OM E on any route approaching the 120-min rule-time boundary. 🟥

## 6. Route applicability

- **Cleared/typical:** short-to-medium-haul narrowbody trunks within ~3,300 NM structural range. The A320 is the standard-density frame for domestic/regional network sectors; not typically flown on oceanic/EDTO-limiting long-thin routes (see A21N/widebody fleet for those missions).
- **Watch:** hot-and-high departures where payload is thrust-capped (§4); confirm reserves on any sector approaching structural range.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No A320 reference OFP yet | 🟧 | Burn/CI/alternates are public-Airbus-derived — replace with type OFP figures when first flown |
| Range vs longest scheduled sector | 🟧 | ~3,300 NM structural — confirm reserves on long narrowbody trunks |
| Hot-and-high payload limit | 🟧 | FAOR/HAAB/NBO thrust-limited at high TOW — payload/fuel penalties (matrix: Low–moderate) |
| ETOPS adequacy on thin routes | 🟥 | Approved rule time **120 min** (narrowbody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type 180 — confirm en-route alternates per leg |
| Dual-engine source (CFM56-5B / V2500) | 🟧 | Confirm engine fit per tail before applying fuel-flow assumptions |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A320 type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a320
- EASA — TCDS EASA.A.064 Airbus A320 — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa064-airbus-a318-a319-a320-and-a321
- SKYbrary — Airbus A320 (A320) — https://skybrary.aero/aircraft/a320
- Wikipedia — Airbus A320 family — https://en.wikipedia.org/wiki/Airbus_A320_family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Airbus/EASA data + VAMSYS mirror; OpsSpec values applied (EDTO 120 min type-180, contingency 5%/ERA, final reserve 30 min, tankering case-by-case); capability values cross-linked to the Fleet Capability Matrix; no type OFP yet (watch-item). |
