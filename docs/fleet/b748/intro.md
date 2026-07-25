<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  B748 Boeing 747-8 (8i / 8F)
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B748 — Boeing 747-8 · Intro

**B748 / 747 family — type rating Boeing 747-8** · Four-engine widebody; the fleet's flagship high-capacity quad, flown as **747-8i passenger** and **747-8F freighter** under one designator
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **B748** (covers **747-8i** passenger and **747-8F** freighter) |
| Family / type rating | 747 family — Boeing **747-8** type rating (Boeing FMC/CDU, autothrottle, LNAV/VNAV); common across 8i and 8F 🟩 |
| Variants operated | Boeing 747-8i (passenger) and Boeing 747-8F (freighter) — one ICAO type, two loadsheets `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **4 × GE GEnx-2B67** — the type is a **quad** 🟩 |
| ICAO code letter | **F** — wingspan **68.4 m** (>65–<80 m → Code F); Code F stands/gates/taxiways only 🟥 |
| Config (K Global) | 747-8i: **331 pax + 45,000 kg belly**; 747-8F: **freighter, main-deck cargo, no pax** `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | ~447,700 / ~312,100 / ~295,300 (8i) · ~330,000 (8F) / ~220,000 (8i) · ~197,000 (8F) kg 🟧 `[VERIFY]` |
| Max fuel | ~226,000 kg (~291,000 L) 🟧 `[VERIFY]` |
| Service ceiling | ~FL430 🟧 `[VERIFY]` |
| Typical cruise | M0.85 (max M0.90) 🟩 |
| Range (rep. payload) | 8i ~7,700 NM pax; 8F ~4,100 NM at max structural payload 🟧 `[VERIFY]` |
| ETOPS/EDTO | **Quad — no ETOPS diversion-time limit; ICAO EDTO adequate-aerodrome concept still applies (2+ engines)** — see Dispatch & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **B** (Upper Heavy) / ICAO **H**; **RFF Cat 10** (length 76.25 m → 76–<90 m band) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** B748 (Boeing 747-8, 4 × GEnx-2B67) → **SimBrief profile:** B748 (747-8 / GEnx-2B) → **Sim model:** X-Plane 11 **SSG 747-8** (candidate) — approved model 🟧 `[VERIFY]`

The dispatch profile (SimBrief B748 / GEnx-2B) models the correct four-engine airframe and drives the OFP burn. The X-Plane 11 flight model candidate is the **SSG 747-8**; approval is **not yet confirmed** as a management decision (marked 🟧 `[VERIFY]`), the same posture as the A359/B77W packs. A single SimBrief B748 profile drives both the 8i and 8F — the passenger/freighter difference is carried in the loadsheet (pax + belly vs main-deck cargo), not the aero/engine model. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network
Four-engine widebody and the fleet's **flagship high-capacity quad**. With 21 tails split across the passenger 8i (Premier / Intercontinental) and the freighter 8F (Cargo), it covers the heaviest and highest-volume long-haul work: the densest premium intercontinental trunks (8i, 331 seats) and the main-deck heavy/outsize cargo network (8F). As a quad it carries **no twin-style ETOPS diversion-time limit**, opening deep-oceanic, transpolar and remote routings on great-circle tracks without a 180-min diversion constraint — though ICAO EDTO adequate-aerodrome planning still applies (see Dispatch). Sits at the top of the fleet with the A388 among the largest types, above the twins (A359/B77W) and alongside the A346 quad. Based out of the Frankfurt (EDDF) superhub; the 8F anchors the FRA + HKG cargo grid.

## 4. Dimensions & ground footprint
- Length **76.25 m** (250 ft 2 in); wingspan **68.4 m** (224 ft 7 in); height **~19.4 m** (63 ft 6 in) 🟧 `[VERIFY]`
- **ICAO Code F** 🟥 — the wingspan (68.4 m) puts the 747-8 in **Code F**, the most demanding aerodrome-reference-code group. It plans and parks **only on Code F-capable stands, gates and taxiways**; watch wingspan-restricted taxiway separations, dual-taxiway/holding constraints, pushback/turn limits and Code F stand availability at every scheduled field — Code F is materially more restrictive than the Code E twins in the fleet. Confirm per field. 🟥
- **RFF Cat 10** (76.25 m → 76–<90 m band) — see [Fleet Capability Matrix](../capability-matrix.md) (Table D); confirm Cat 10 fire cover at all scheduled fields (a step above the Cat 9 widebody twins). 🟩
- **Wake — RECAT-EU B (Upper Heavy) / ICAO H:** heavy separation applies; not Super (that is A388/J), but at the top of Heavy. 🟩
- **8i (passenger):** twin-aisle, upper-deck cabin, main-deck passenger doors per side; forward and aft lower-deck cargo (LD3/LD6 belly) plus bulk hold. **8F (freighter):** main-deck side cargo door **and nose-loading door** for outsize/long loads, plus lower-deck cargo — a distinct ground/loading footprint from the 8i. GPU/air-start and de-ice footprint per four-engine heavy standard; long turn radius.

## 5. Weights
| | 8i (pax) kg | 8F (freighter) kg |
|---|---|---|
| OEW | ~220,000 🟧 `[VERIFY]` | ~197,000 🟧 `[VERIFY]` |
| MZFW | ~295,300 🟧 `[VERIFY]` | ~330,000 🟧 `[VERIFY]` |
| MTOW | ~447,700 🟩 | ~447,700 🟩 |
| MLW | ~312,100 🟧 `[VERIFY]` | ~346,100 🟧 `[VERIFY]` |
| Max fuel | ~226,000 (~291,000 L) 🟧 `[VERIFY]` | ~226,000 🟧 `[VERIFY]` |

Both variants share the ~447.7 t MTOW class — among the heaviest types operated; drives Code F stand, taxiway-strength (ACN/PCN) and wake considerations and a long field-length requirement at max weight. The **8F carries the higher MZFW** (structure optimised for main-deck freight) and the 8i the higher passenger/belly payload — keep the two loadsheets separate (see Dispatch §4). 🟧

## 6. Performance
- Service ceiling **~FL430**; typical cruise **M0.85** (max **M0.90**) 🟩.
- **Cost index:** set on the FMC PERF INIT / VNAV page; default CI per OM E economy policy 🟧 `[VERIFY]` — no B748 reference OFP CI yet on file.
- **Field length:** long — order of ~3,000+ m TO at/near MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]`. The ~447.7 t MTOW makes the type runway-length-sensitive at max payload/fuel; confirm field length and climb-limit at every scheduled departure field.
- **Hot-and-high:** four GEnx-2B67 give strong total thrust, but the very high MTOW keeps hot/high departures thrust- and field-limited at elevation hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) — matrix rates hot/high sensitivity **Moderate–high**. Expect payload/fuel penalties on long legs out of those fields; assess per-field before scheduling. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Long field at ~447.7 t MTOW; hot/high penalties public-derived, not OFP-verified (matrix: Moderate–high) |
| Range vs network trunk sectors | 🟧 | 8i ~7,700 NM / 8F ~4,100 NM at max payload `[VERIFY]` — confirm reserves against longest scheduled sector |
| ETOPS/EDTO adequacy | 🟩 | **Quad — no ETOPS diversion-time limit**; ICAO EDTO adequate-aerodrome planning still applies — see Dispatch & matrix |
| Stand / gate compatibility | 🟥 | **ICAO Code F** + RFF Cat 10 — confirm Code F stands/taxiways and Cat 10 RFF at all scheduled fields |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (SSG 747-8 candidate) a management decision, unconfirmed — see Sim-Model |

## 8. Related pack files
**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md) · Fleet Capability Matrix: [Fleet Capability Matrix](../capability-matrix.md) · Fleet Index → [overview](../index.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 747-8 product page — https://www.boeing.com/commercial/747
- Boeing — 747-8 Airplane Characteristics for Airport Planning — https://www.boeing.com/content/dam/boeing/boeingdotcom/company/about_bca/startup/pdf/historical/747_8.pdf
- SKYbrary — Boeing 747-8 (B748) — https://skybrary.aero/aircraft/b748
- EASA — Type Certificate Data Sheet, Boeing 747-8 (validation) — https://www.easa.europa.eu/en/document-library/type-certificates
- Wikipedia — Boeing 747-8 — https://en.wikipedia.org/wiki/Boeing_747-8
- Wikipedia — General Electric GEnx — https://en.wikipedia.org/wiki/General_Electric_GEnx

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH and Livery built; pack complete (all six files). |
| v0.1 | 2026-07-25 | Initial draft — built from public Boeing/EASA/SKYbrary data + VAMSYS mirror config + Fleet Capability Matrix; one designator covering 747-8i pax + 747-8F freighter; Code F + quad (no ETOPS diversion limit / EDTO adequate-aerodrome) captured; approved sim model (SSG 747-8 candidate) a management decision `[VERIFY]`; no type OFP yet (figures `[VERIFY]` pending). |
