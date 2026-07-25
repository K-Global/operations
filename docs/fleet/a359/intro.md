<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  A359 Airbus A350-900
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A359 — Airbus A350-900 · Intro

**A359 / A350 family — common type rating A330/A350** · Long-haul widebody twin, the ETOPS backbone of the intercontinental network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **A359** |
| Family / type rating | A350 family — common type rating **A330/A350**; Airbus FBW Cross-Crew Qualification 🟧 `[VERIFY]` |
| Variants operated | Airbus A350-900 and A350-900 ULR (both type cert **A350-941**; ULR shares the same type certificate) `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **Rolls-Royce Trent XWB-84** 🟩 |
| ICAO code letter | **E** — wingspan 64.75 m, Code E stands/gates only 🟩 |
| Config (K Global) | A350-900: 326 pax + 38,000 kg belly; A350-900 ULR: 250 pax + 8,000 kg `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | 280,000 / 207,000 / 195,700 / ~145,000 🟧 `[VERIFY]` |
| Max fuel | ~111 t (~141,000 L) 🟩 (ULR 165,000 L 🟩) |
| Service ceiling | ~FL431 🟧 `[VERIFY]` |
| Typical cruise | M0.85 (max M0.89) 🟩 |
| Range (rep. payload) | ~8,100–8,300 NM 🟧 `[VERIFY]` (ULR ~9,700 NM 🟩) |
| ETOPS/EDTO | EDTO-capable, type certified up to 370 min; K Global rule time **180 min** — see Dispatch & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **B** / ICAO **H**; **RFF Cat 9** (length 66.80 m) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** A359 (Airbus A350-900, Trent XWB-84) → **SimBrief profile:** A359 (A350-900 / Trent XWB) → **Sim model:** FlightFactor A350 (X-Plane 11) 🟧 `[VERIFY]`

The dispatch profile (SimBrief A359 / Trent XWB) models the correct airframe and engine and drives the OFP burn. The approved X-Plane 11 flight model — **FlightFactor A350** — is a management decision, not yet formally confirmed (marked 🟧 `[VERIFY]`), the same posture as the A339 pack. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network
Long-haul widebody twin and the **ETOPS backbone of the intercontinental network**. With 53 tails it is the largest widebody-twin fleet at K Global — the workhorse for medium-to-ultra-long intercontinental trunks where strong payload-range and 370-min-class EDTO reach open transoceanic, transpacific and deep-polar routings that thinner or shorter-legged types cannot serve. Based out of the Frankfurt (EDDF) superhub and worked across the pax-hub network; sits above the A339 (thinner trunks) and alongside the larger A346/A35K/A388 on the heaviest/longest sectors. The A350-900 ULR sub-fleet (250 pax, extended tankage) is reserved for the ultra-long non-stop pairings.

## 4. Dimensions & ground footprint
- Length **66.80 m** (219 ft 2 in); wingspan **64.75 m** (212 ft 5 in); height ~**17.05 m** (55 ft 11 in) 🟧 `[VERIFY]`
- **ICAO Code E** — plans and parks only on Code E-capable stands/taxiways; watch wingspan-restricted taxiways and turn/pushback limits at constrained hubs. 🟩
- **RFF Cat 9** (66.80 m → 61–<76 m band) — see [Fleet Capability Matrix](../capability-matrix.md) (Table D); confirm Cat 9 cover at all scheduled fields. 🟩
- Twin-aisle, two main-deck passenger doors per side plus overwing; forward and aft lower-deck cargo doors (LD3/LD6 container-capable belly) plus bulk hold. GPU/air-start and de-ice footprint per widebody-twin standard.

## 5. Weights
| | kg |
|---|---|
| OEW | ~145,000 🟧 `[VERIFY]` |
| MZFW | 195,700 🟩 |
| MTOW | 280,000 🟩 (max weight-variant 283,000 🟩) |
| MLW | 207,000 🟩 |
| Max fuel | ~111,000 (~141,000 L) 🟩 (ULR 165,000 L 🟩) |

K Global operates the standard 280 t weight variant (WV010) as the fleet baseline; the type certificate (A350-941) spans MTOWs from 210 t to 283 t 🟩 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance
- Service ceiling **~FL431**; typical cruise **M0.85** (max **M0.89**) 🟩.
- Average fuel flow **~5.8 t/hr** (public reference; long-haul cruise) 🟩 — no type-specific K Global OFP yet on file (watch-item; A359 dispatch figures are public-Airbus-derived, not OFP-verified).
- **Cost index:** set per OM E / route economics; no A359 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** ~2,600–2,700 m TO at MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]`.
- **Hot-and-high:** strong Trent XWB-84 thrust gives good field/altitude performance for the weight class — matrix rates hot/high sensitivity **Moderate** (better than the A346/A339). High-elevation/high-temperature hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) still drive thrust-limited takeoffs at high TOW; assess per-field before scheduling long legs. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Field length/hot-high public-derived, not OFP-verified; matrix rates sensitivity Moderate |
| Range vs network trunk sectors | 🟩 | ~8,100–8,300 NM structural (ULR ~9,700 NM) covers the intercontinental trunk set |
| ETOPS/EDTO adequacy | 🟩 | Type certified to 370 min; K Global rule time 180 min — see Dispatch & matrix |
| Stand / gate compatibility | 🟩 | Code letter E / RFF Cat 9 — confirm Code E stands + Cat 9 RFF at all scheduled fields |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (FlightFactor A350) a management decision, unconfirmed — see Sim-Model |

## 8. Related pack files
**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A350-900 type page — https://www.aircraft.airbus.com/en/aircraft/a350/a350-900
- Airbus — A350 Aircraft Characteristics (Airport & Maintenance Planning) — https://www.aircraft.airbus.com/en/aircraft/a350/a350-900
- EASA — TCDS EASA.A.151 Airbus A350 — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa151-airbus-a350
- EASA — EASA certifies Airbus A350 XWB for up to 370-minute ETOPS — https://www.easa.europa.eu/en/newsroom-and-events/news/easa-certifies-airbus-a350-xwb-370-minute-etops
- SKYbrary — Airbus A350-900 (A359) — https://skybrary.aero/aircraft/a359
- Wikipedia — Airbus A350 — https://en.wikipedia.org/wiki/Airbus_A350
- Wikipedia — Rolls-Royce Trent XWB — https://en.wikipedia.org/wiki/Rolls-Royce_Trent_XWB

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Airbus/EASA/SKYbrary data + VAMSYS mirror; capability values cross-linked to the Fleet Capability Matrix; approved sim model (FlightFactor A350) a management decision `[VERIFY]`. |
