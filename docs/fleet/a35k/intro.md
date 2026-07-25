<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  A35K Airbus A350-1000
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A35K — Airbus A350-1000 · Intro

**A35K / A350 family — common type rating A330/A350** · Ultra-long-haul widebody twin, Premier flagship and ETOPS backbone for the longest trunks
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **A35K** |
| Family / type rating | A350 family — common type rating **A330/A350**; Airbus FBW Cross-Crew Qualification `[VERIFY]` |
| Variants operated | Airbus A350-1000 (type cert **A350-1041**); one designator, single variant |
| Engines (modelled) | **Rolls-Royce Trent XWB-97** |
| ICAO code letter | **E** — wingspan **64.75 m** (just inside the <65 m Code E band), Code E stands/gates 🟧 `[VERIFY]` |
| Config (K Global) | 1 Premier · seats `[VERIFY]` + belly cargo `[VERIFY]` `[VAMSYS mirror 2026-07-25]`; 10 tails |
| MTOW / MLW / MZFW / OEW | ~319,000 / ~236,000 / ~223,000 / ~155,000 🟧 `[VERIFY]` |
| Max fuel | ~124 t (~156,000 L) 🟧 `[VERIFY]` |
| Service ceiling | ~FL431 🟧 `[VERIFY]` |
| Typical cruise | M0.85 (Mmo ~M0.89) 🟧 `[VERIFY]` |
| Range (rep. payload) | ~8,700 NM structural 🟧 `[VERIFY]` |
| ETOPS/EDTO | EDTO-capable, type certified **up to 370 min**; K Global approved rule time **180 min** — see Dispatch |
| RFF category required | ICAO **CAT 9** (length 73.79 m → 61–<76 m band) 🟩 — see [Fleet Capability Matrix](../capability-matrix.md) |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** A35K (Airbus A350-1000, Trent XWB-97) → **SimBrief profile:** Airbus A350-1000 (Trent XWB-97) — SimBrief **A35K** → **Sim model:** X-Plane 11 **FlightFactor A350 (-1000 variant)** — approved model 🟧 `[VERIFY]`

The dispatch profile (SimBrief A350-1000 / Trent XWB-97) models the correct airframe and engine and drives the OFP burn. The approved X-Plane 11 flight model is the **FlightFactor A350**, but the availability and fidelity of a true **-1000** variant (vs the base **-900** shell) is **not yet confirmed** — the -1000 is 7 m longer with a materially higher MTOW and uprated XWB-97 thrust, so a -900 model would misrepresent field length, cruise burn and ceiling against the -1000 OFP, and any burn comparison must account for that. Resolve in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file.

## 3. Role in the network
Ultra-long-haul widebody twin and **Premier flagship**. Primary role is the longest premium intercontinental trunks where the -1000's larger cabin and ~8,700 NM reach carry a full premium load non-stop, and where EDTO reach opens transoceanic/transpolar routings. Sits above the A339 and alongside the A359/A388 on the flagship trunks — the -1000 sizes larger than the A359 (greater length, cabin and MTOW) while sharing the common A330/A350 type rating. Based out of the Frankfurt (EDDF) superhub.

## 4. Dimensions & ground footprint
- Length **73.79 m** (242 ft 1 in); wingspan **64.75 m** (212 ft 5 in); height **17.08 m** (56 ft) 🟧 `[VERIFY]`
- **ICAO Code E** — wingspan (64.75 m) keeps it inside the Code E band, but the **73.79 m length is ~7 m longer than the A359** (66.80 m): plan for longer stands, greater pushback/turn clearance and length-limited Code E gates that accept the A359 but not the -1000. Confirm stand length at scheduled fields. 🟧
- Twin-aisle, main-deck passenger doors per side; forward and aft lower-deck cargo doors (LD3/LD6 container-capable belly) plus bulk hold. GPU/air-start and de-ice footprint per large widebody-twin standard.

## 5. Weights
| | kg |
|---|---|
| OEW | ~155,000 🟧 `[VERIFY]` |
| MZFW | ~223,000 🟧 `[VERIFY]` |
| MTOW | ~319,000 🟧 `[VERIFY]` |
| MLW | ~236,000 🟧 `[VERIFY]` |
| Max fuel | ~124,000 (~156,000 L) 🟧 `[VERIFY]` |

Higher across the board than the A359 — the ~319 t MTOW (vs ~280 t on the -900) is the headline difference that drives field length and hot-and-high behaviour (§6).

## 6. Performance
- Service ceiling **~FL431**; typical cruise **M0.85** (Mmo ~M0.89) 🟧 `[VERIFY]`.
- **Field length:** ~2,900–3,100 m TO at MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]` — **longer than the A359** at the -1000's higher MTOW; confirm runway length at length-critical and high-elevation fields before scheduling.
- **Hot-and-high:** the uprated **Trent XWB-97** gives strong thrust, but the higher ~319 t MTOW offsets much of it — net hot-and-high sensitivity is **moderate** (matrix Table D). High-elevation/high-temperature hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) drive thrust-limited takeoffs; on the heaviest ultra-long-haul legs out of those fields expect payload/fuel penalties. Assess per-field before scheduling. 🟧
- Cost-index / step-climb profile per OM E and the SimBrief profile; no reference OFP built for this type yet 🟧 `[VERIFY]`.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Field length longer than A359 at higher MTOW; public-derived, not OFP-verified |
| Range vs network trunk sectors | 🟩 | ~8,700 NM structural covers the longest scheduled trunks (public figure — no OFP yet) |
| ETOPS/EDTO adequacy | 🟩 | Type certified to 370 min; K Global approved to 180 min — see Dispatch |
| Stand / gate compatibility | 🟧 | Code E wingspan but 73.79 m length — confirm stand length at all scheduled fields |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (FlightFactor A350 -1000 variant) unconfirmed — see Sim-Model |

## 8. Related pack files
**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md) · Fleet Index → [overview](../index.md)
**Planned:** — (all six pack files built)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A350-1000 type page — https://www.aircraft.airbus.com/en/aircraft/a350/a350-1000
- Airbus — A350 Aircraft Characteristics (Airport & Maintenance Planning) — https://www.aircraft.airbus.com/en/aircraft-characteristics-airport-and-maintenance-planning-ac
- EASA — TCDS EASA.A.151 Airbus A350 — https://www.easa.europa.eu/en/document-library/type-certificates
- EASA — EASA certifies Airbus A350 XWB for up to 370-minute ETOPS — https://www.easa.europa.eu/en/newsroom-and-events/news/easa-certifies-airbus-a350-xwb-370-minute-etops
- SKYbrary — Airbus A350-1000 (A35K) — https://skybrary.aero/aircraft/a35k
- Wikipedia — Airbus A350 — https://en.wikipedia.org/wiki/Airbus_A350
- Wikipedia — Rolls-Royce Trent XWB — https://en.wikipedia.org/wiki/Rolls-Royce_Trent_XWB

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Airbus/EASA/SKYbrary data + the Fleet Capability Matrix, cloning the A339 pack pattern; no reference OFP yet |
| v0.1.1 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH and Livery now built; pack complete (all six files) |
