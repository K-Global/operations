<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  A359 Airbus A350-900
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A359 — Airbus A350-900 · Dispatch

**A359 / A350 family** · Long-haul widebody twin, ETOPS trunk backbone
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, ETOPS rules) is defined once in OM E — this file **applies** it to the A359. Capability values are held in the Fleet Capability Matrix — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~145,000 🟧 / 195,700 / 280,000 / 207,000 kg 🟩 |
| Max fuel | ~111 t (~141,000 L) 🟩 (ULR 165,000 L 🟩) |
| Payload (K Global config) | A350-900: 326 pax + 38,000 kg belly; A350-900 ULR: 250 pax + 8,000 kg `[VAMSYS mirror 2026-07-25]` |
| Typical block burn | ~5.8 t/hr avg long-haul cruise (public reference) 🟩 — no A359 reference OFP yet 🟧 |
| Cost index (default) | Per OM E / route economics — no A359 reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Approved EDTO rule time: 180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type certified up to **370 min** 🟥 — see §5 & matrix |

## 2. SimBrief setup
- **Airframe profile:** A359 (A350-900 / Trent XWB) — SimBrief A359
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from SimBrief defaults (MTOW 280,000 / MLW 207,000 / MZFW 195,700 🟩); ceiling ~FL431; engines Trent XWB-84; PBN/equip per fleet standard (RVSM, RNP 4 + RNAV 10 oceanic, RNP AR 0.3, full RNP APCH — see matrix Table B) 🟧 `[VERIFY]`
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; **ETOPS threshold & rule selector = 180 min** (widebody twin) `[K Global OpsSpec 2026-07-25]`
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧
- **ULR sub-fleet:** override tankage to 165,000 L and payload to the 250-pax / 8,000 kg config for ultra-long non-stop pairings 🟩
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]`

## 3. Fuel policy applied
OM E's generic fuel policy resolves for the A359 as taxi + trip + **contingency (5% / ERA)** + alternate + **final reserve (30 min)** + any additional/holding `[K Global OpsSpec 2026-07-25]`. Public long-haul cruise burn is **~5.8 t/hr** 🟩; against ~111 t max fuel (standard) the aircraft carries generous EDTO/critical-fuel margin on the trunk set, and the ULR's 165,000 L tankage extends that to the ultra-long non-stops. **Tankering:** assess Frankfurt-vs-outstation price differentials per leg — the large tank gives real tankering headroom on short-turn pairs, weight-and-CG permitting; tankering is authorised **case-by-case** per OM E `[K Global OpsSpec 2026-07-25]`. Exact reserve/contingency values are defined in OM E — apply, do not restate here beyond the figures above. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading
- K Global config: **A350-900 — 326 pax + 38,000 kg belly**; **A350-900 ULR — 250 pax + 8,000 kg** `[VAMSYS mirror 2026-07-25]`. The ULR trades belly cargo and seats for range (front cargo hold typically disabled on the ULR).
- Standard pax/bag weights and belly LD3/LD6 container plan per OM E loading policy; keep ZFW within MZFW 195,700 kg and CG within envelope. 🟧
- **Hot-and-high / short-field penalties:** matrix rates hot/high sensitivity **Moderate** (strong XWB thrust); thrust-limited takeoffs at FAOR/HAAB/NBO can still force reduced payload or fuel on long legs at high TOW — check per field before committing schedule. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 5. ETOPS / EDTO 🟥
- **Capability:** A350 XWB type is EDTO-certified **beyond 180 minutes, up to 370 min** (EASA). K Global operates to the **approved rule time**, not the type maximum. **Approved EDTO rule time: 180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]` — the A359 is approved to the full 180-min OpsSpec rule time; the 370-min certification is the type ceiling, not the K Global approval.
- **Method:** defined once in OM E — see `../../../OM E Operations/ETOPS-EDTO Procedures.md`. Capability/approval values are held in [Fleet Capability Matrix](../capability-matrix.md) (Table A). This file only records the type application.
- **En-route alternates:** selected per route from the OM E adequate-aerodrome set (transoceanic/near-polar driftdown fields); no A359 reference OFP alternates yet on file 🟧 — populate when the first type OFP is flown.
- **Critical-fuel note:** critical-fuel scenario (decompression + engine-out driftdown at the ETOPS entry point to the most limiting en-route alternate) must be checked against the fuel plan per OM E; the ~111 t tank (ULR 165,000 L) leaves adequate margin on the trunk set. 🟥

## 6. Route applicability
- **Cleared/typical:** medium-to-ultra-long intercontinental trunks within ~8,100–8,300 NM structural range (ULR ~9,700 NM). The A359 is the primary frame for transoceanic/transpacific and deep-polar routings needing 180-min EDTO reach; the ULR sub-fleet covers the ultra-long non-stop pairings.
- **Watch:** hot-and-high departures where payload is thrust-capped (§4); confirm reserves on any sector approaching structural range; ULR-only pairings must be flown by the ULR sub-fleet, not the standard-tank aircraft.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No A359 reference OFP yet | 🟧 | Burn/CI/alternates are public-Airbus-derived — replace with type OFP figures when first flown |
| Range vs longest scheduled sector | 🟧 | ~8,100–8,300 NM structural (ULR ~9,700) — confirm reserves on long trunks; ULR pairings ULR-only |
| Hot-and-high payload limit | 🟧 | FAOR/HAAB/NBO thrust-limited at high TOW — payload/fuel penalties (matrix: Moderate) |
| ETOPS adequacy on thin routes | 🟥 | Approved rule time **180 min** (widebody twin) 🟩 `[K Global OpsSpec 2026-07-25]`; type 370 — confirm en-route alternates per leg |
| Tankering opportunity/risk | 🟩 | Large tank gives headroom; case-by-case per OM E; check hub price differentials + CG |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A350-900 type page — https://www.aircraft.airbus.com/en/aircraft/a350/a350-900
- EASA — EASA certifies Airbus A350 XWB for up to 370-minute ETOPS — https://www.easa.europa.eu/en/newsroom-and-events/news/easa-certifies-airbus-a350-xwb-370-minute-etops
- EASA — TCDS EASA.A.151 Airbus A350 — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa151-airbus-a350
- SKYbrary — Airbus A350-900 (A359) — https://skybrary.aero/aircraft/a359
- Wikipedia — Airbus A350 — https://en.wikipedia.org/wiki/Airbus_A350

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Airbus/EASA data + VAMSYS mirror; OpsSpec values applied (EDTO 180 min type-370, contingency 5%/ERA, final reserve 30 min, tankering case-by-case); capability values cross-linked to the Fleet Capability Matrix; no type OFP yet (watch-item). |
