<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  B77W Boeing 777-300ER
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B77W — Boeing 777-300ER · Intro

**B77W / 777 family — type rating Boeing 777** · Long-haul heavy widebody twin; one of the fleet's largest twins and its high-capacity EDTO trunk aircraft
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **B77W** |
| Family / type rating | 777 family — Boeing **777** type rating (Boeing FMC/CDU, autothrottle, LNAV/VNAV) 🟩 |
| Variants operated | Boeing 777-300ER; one designator, single variant |
| Engines (modelled) | **GE90-115B** (highest-thrust turbofan in service) 🟩 |
| ICAO code letter | **E** — wingspan **64.8 m**, Code E stands/gates only 🟧 |
| Config (K Global) | ~442 pax + 30,000 kg belly `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | ~351,500 / ~251,300 / ~237,700 / ~168,000 kg 🟧 `[VERIFY]` |
| Max fuel | ~145 t (~181,300 L) 🟧 `[VERIFY]` |
| Service ceiling | ~FL431 🟧 `[VERIFY]` |
| Typical cruise | M0.84 (M0.89 max) 🟩 |
| Range (rep. payload) | ~7,370 NM structural 🟧 `[VERIFY]` |
| ETOPS/EDTO | Twin, EDTO-capable — type certified **up to 330 min** (GE90); K Global approved rule time **180 min** — see Dispatch |
| Wake / RFF | RECAT-EU **B** (Upper Heavy) / ICAO **H**; RFF **Cat 9** (length 73.9 m → 61–<76 m band) 🟩 — see [Fleet Capability Matrix](../capability-matrix.md) |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** B77W (Boeing 777-300ER, GE90-115B) → **SimBrief profile:** Boeing 777-300ER (B77W) → **Sim model:** X-Plane 11 **FlightFactor 777** — approved model 🟧 `[VERIFY]`

The dispatch profile (SimBrief B77W / GE90-115B) models the correct airframe and engine and drives the OFP burn. The X-Plane 11 flight model candidate is the **FlightFactor 777**; approval is **not yet confirmed** as a management decision. If the tested model's engine/aero data differ from the GE90-115B SimBrief profile, cruise burn, ceiling and field performance realism will differ from the OFP and any burn comparison must account for that. Resolve in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file.

## 3. Role in the network
Long-haul **heavy** widebody twin and one of the fleet's largest twins. Primary role is high-density intercontinental trunks where a ~442-seat twin fills frames that a 288-seat A339 or a smaller widebody cannot, and where EDTO reach (up to the 180-min approved rule time) opens transoceanic/transpolar routings without a quad. Sits above the A339/A359/A35K in seat count and payload and below the A346/A388/B748 quads. Based out of the pax superhubs; a natural fit for the densest EDDF and twin-coast North America trunks and long Asia/Middle East sectors.

## 4. Dimensions & ground footprint
- Length **73.9 m** (242 ft 4 in); wingspan **64.8 m** (212 ft 7 in); height **~18.5 m** (60 ft 8 in) 🟧 `[VERIFY]`
- **ICAO Code E** — plans and parks only on Code E-capable stands/taxiways. As one of the longest twins in the fleet, watch **stand length** and nose-gear-to-jetbridge geometry as well as wingspan; a full-length Code E stand may still be marginal for the -300ER's fuselage — confirm per field. 🟧
- **Wake — RECAT-EU B (Upper Heavy) / ICAO H:** heavy behind/ahead separation applies; sequence and spacing at busy hubs bite. Not Super (that is A388/J), but at the top of Heavy. 🟩
- Twin-aisle, four main-deck passenger doors per side; forward and aft lower-deck cargo doors (LD3/LD6 container-capable belly) plus bulk hold. Very large belly (30,000 kg K Global config) — significant cargo revenue/loading role. GPU/air-start and de-ice footprint per heavy widebody-twin standard; long turn radius.

## 5. Weights
| | kg |
|---|---|
| OEW | ~168,000 🟧 `[VERIFY]` |
| MZFW | ~237,700 🟧 `[VERIFY]` |
| MTOW | ~351,500 🟧 `[VERIFY]` |
| MLW | ~251,300 🟧 `[VERIFY]` |
| Max fuel | ~145,000 (~181,300 L) 🟧 `[VERIFY]` |

Very high MTOW (~351.5 t) — among the heaviest twins operated; drives stand, taxiway-strength (ACN/PCN) and wake considerations, and long field-length requirement at max weight.

## 6. Performance
- Service ceiling **~FL431**; typical cruise **M0.84** (M0.89 max) 🟧 `[VERIFY]`.
- **Cost index:** set on the FMC PERF INIT / VNAV page; default CI per OM E economy policy 🟧 `[VERIFY]`.
- **Field length:** long — order of ~3,000+ m TO at/near MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]`. The -300ER's high MTOW makes it runway-length-sensitive at max payload/fuel; confirm field length and climb-limit at every scheduled departure field.
- **Hot-and-high:** the GE90-115B's very high thrust helps, but the high MTOW keeps hot/high departures thrust- and field-limited at elevation hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) — expect payload/fuel penalties or reduced ZFW on long legs out of those fields. Assess per-field before scheduling. 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Long field at high MTOW; hot/high penalties public-derived, not OFP-verified |
| Range vs network trunk sectors | 🟧 | ~7,370 NM structural `[VERIFY]` — confirm reserves against longest scheduled sector |
| ETOPS/EDTO adequacy | 🟩 | Twin; type capable to 330 min, K Global approved **180 min** (widebody twin) — see Dispatch |
| Stand / gate compatibility | 🟧 | Code letter E + long fuselage — confirm Code E stand length at all scheduled fields |
| Wake / RFF | 🟩 | RECAT-EU B (Upper Heavy) / ICAO H; RFF Cat 9 — see Fleet Capability Matrix |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (FlightFactor 777) unconfirmed — see Sim-Model |

## 8. Related pack files
[Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md) · Fleet Capability Matrix: [Fleet Capability Matrix](../capability-matrix.md) · Fleet Index → [overview](../index.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 777-300ER product page — https://www.boeing.com/commercial/777
- Boeing — 777 Airplane Characteristics for Airport Planning — https://www.boeing.com/content/dam/boeing/boeingdotcom/company/about_bca/startup/pdf/historical/777_2LR_300ER_Boeing.pdf
- SKYbrary — Boeing 777-300 (B77W) — https://skybrary.aero/aircraft/b77w
- Boeing — Boeing 777-300ER Performs 330-Minute ETOPS Flight — https://boeing.mediaroom.com/2003-10-15-Boeing-777-300ER-Performs-330-Minute-ETOPS-Flight
- Wikipedia — Boeing 777 — https://en.wikipedia.org/wiki/Boeing_777
- Wikipedia — General Electric GE90 — https://en.wikipedia.org/wiki/General_Electric_GE90

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Boeing/SKYbrary data + VAMSYS mirror config + Fleet Capability Matrix; no reference OFP yet (figures `[VERIFY]` pending). |
| v0.1.1 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH and Livery now built (all six pack files present). |
