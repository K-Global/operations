<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  A339 Airbus A330-900neo
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A339 — Airbus A330-900neo · Intro

**A339 / A330 family — common type rating A330/A350** · Long-haul widebody twin, EDTO backbone for thin intercontinental trunks
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **A339** |
| Family / type rating | A330 family — common type rating **A330/A350**; Airbus FBW Cross-Crew Qualification `[VERIFY]` |
| Variants operated | Airbus A330-900 (type cert **A330-941**); one designator, single variant |
| Engines (modelled) | **Rolls-Royce Trent 7000-72** |
| ICAO code letter | **E** — wingspan ~64 m, Code E stands/gates only 🟧 |
| Config (K Global) | 288 pax + 20,000 kg belly `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | 251,000 / 191,000 / 181,000 `[OFP EDDF–KSFO 2026-07-25]` / ~135,093 🟧 `[VERIFY]` |
| Max fuel | ~111 t (139,090 L) 🟧 `[VERIFY]` |
| Service ceiling | FL411 🟧 `[VERIFY]` |
| Typical cruise | M.80–.82 `[OFP EDDF–KSFO 2026-07-25]` |
| Range (rep. payload) | ~7,200 NM structural; ~5,100 NM demonstrated on the reference EDDF–KSFO OFP `[OFP EDDF–KSFO 2026-07-25]` |
| ETOPS/EDTO | EDTO-capable, type certified beyond 180 min (up to 285 min); OFP dispatched **ETOPS 120 min** — see Dispatch |
| RFF category required | ICAO **CAT 9** (length 63.66 m → 61–<76 m band; fuselage <7 m) 🟩 — see [Fleet Capability Matrix](../capability-matrix.md) |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** A339 (Airbus A330-900neo, Trent 7000-72) → **SimBrief profile:** Airbus A330-900 (Trent 7000) → **Sim model:** X-Plane 11 A330-900 `[VERIFY]`

The dispatch profile (SimBrief A330-900 / Trent 7000) models the neo airframe and engine and drives the OFP burn. The approved X-Plane 11 flight model is **not yet confirmed** — if the tested airframe is a ceo-generation A330 shell, cruise burn and ceiling realism will differ from the neo OFP and any burn comparison must account for that. Resolve in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file.

## 3. Role in the network
Long-haul widebody twin. Primary role is thin-to-medium intercontinental trunks where a 288-seat twin sizes better than a quad or a larger widebody, and where EDTO reach opens transoceanic/transpolar routings. Reference mission for this pack is **EDDF–KSFO** (Frankfurt–San Francisco), ~5,123 NM great-circle, ~11h33 block `[OFP EDDF–KSFO 2026-07-25]` — a near-polar North Atlantic/Canada crossing dispatched under ETOPS. Based out of the Frankfurt (EDDF) superhub; complements the larger A346/A359/A35K/A388 widebodies on trunks that do not fill a bigger frame.

## 4. Dimensions & ground footprint
- Length **63.66 m** (208 ft 10 in); wingspan **64.0 m** (210 ft); height **16.79 m** (55 ft 1 in) 🟧 `[VERIFY]`
- **ICAO Code E** — plans and parks only on Code E-capable stands/taxiways; watch wingspan-restricted taxiways at constrained hubs (e.g. Code E turn/pushback limits). 🟧
- Twin-aisle, two main-deck passenger doors per side plus overwing; forward and aft lower-deck cargo doors (LD3/LD6 container-capable belly) plus bulk hold. GPU/air-start and de-ice footprint per widebody-twin standard.

## 5. Weights
| | kg |
|---|---|
| OEW | ~135,093 🟧 `[VERIFY]` |
| MZFW | 181,000 `[OFP EDDF–KSFO 2026-07-25]` |
| MTOW | 251,000 `[OFP EDDF–KSFO 2026-07-25]` |
| MLW | 191,000 `[OFP EDDF–KSFO 2026-07-25]` |
| Max fuel | ~111,000 (139,090 L) 🟧 `[VERIFY]` |

Reference dispatch (EDDF–KSFO, 2026-07-25): estimated ZFW **175,167 kg**, well inside MZFW `[OFP EDDF–KSFO 2026-07-25]`.

## 6. Performance
- Service ceiling **FL411**; typical cruise **M.80–.82** (up to M.86 max) 🟧 `[VERIFY]`.
- Reference step-climb profile (EDDF–KSFO, 2026-07-25): initial cruise **FL310**, stepping **FL340 → FL360 → FL380** as weight burned down; average fuel flow **5,863 kg/hr**; block/trip burn ~**67.8 t** over ~11h33 `[OFP EDDF–KSFO 2026-07-25]`.
- **Cost index CI 10** used on the reference OFP `[OFP EDDF–KSFO 2026-07-25]`.
- **Field length:** ~3,000 m TO at MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]`.
- **Hot-and-high:** high-elevation/high-temperature hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) drive thrust-limited takeoffs — expect payload/fuel penalties and possible tech-stop or reduced ZFW on long legs out of those fields. Assess per-field before scheduling. 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Field length and hot/high penalties public-derived, not OFP-verified |
| Range vs network trunk sectors | 🟩 | 5,123 NM demonstrated on the reference EDDF–KSFO OFP within ~7,200 NM structural range |
| ETOPS/EDTO adequacy | 🟧 | Type beyond-180 capable; OFP flew ETOPS 120 — see Dispatch |
| Stand / gate compatibility | 🟧 | Code letter E — confirm Code E stands at all scheduled fields |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model unconfirmed — see Sim-Model |

## 8. Related pack files
**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Livery](livery.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Pack index](index.md) · Fleet Index → [overview](../index.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A330-900 type page — https://www.aircraft.airbus.com/en/aircraft/a330/a330-900
- Airbus — A330 Aircraft Characteristics (Airport & Maintenance Planning) — https://www.aircraft.airbus.com/sites/g/files/jlcbta126/files/2023-08/ac_a330_jul2023_0.pdf
- EASA — TCDS EASA.A.004 Airbus A330 — https://www.easa.europa.eu/en/downloads/7518/en
- Airbus — EASA certifies A330neo for "beyond 180 minutes" ETOPS — https://www.airbus.com/en/newsroom/press-releases/2019-01-easa-certifies-a330neo-for-beyond-180-minutes-etops
- Wikipedia — Airbus A330neo — https://en.wikipedia.org/wiki/Airbus_A330neo
- Wikipedia — Rolls-Royce Trent 7000 — https://en.wikipedia.org/wiki/Rolls-Royce_Trent_7000

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.1 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.1 | 2026-07-25 | Initial draft — built from the reference EDDF–KSFO OFP (2026-07-25) + public Airbus/EASA data |
