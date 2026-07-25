<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  B77F Boeing 777F
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B77F — Boeing 777F · Intro

**B77F / 777 family — type rating Boeing 777** · Long-haul heavy widebody-twin **freighter**; the fleet's main-deck long-haul cargo workhorse
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. The B77F shares the **777 type** with the passenger [B77W](../b77w/intro.md) — keep the two consistent and cross-reference. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **B77F** |
| Family / type rating | 777 family — Boeing **777** type rating (Boeing FMC/CDU, autothrottle, LNAV/VNAV); common with the passenger B77W 🟩 |
| Variants operated | Boeing 777F (freighter); one designator, single variant — **main-deck cargo, no passengers** `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **2 × GE GE90-110B1** 🟩 |
| ICAO code letter | **E** — wingspan **64.8 m**, Code E stands/gates only 🟧 |
| Config (K Global) | **Freighter — 102,000 kg cargo, no seats** `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | ~347,800 / ~260,800 / ~248,600 / ~144,000 kg 🟧 `[VERIFY]` |
| Max fuel | ~145 t (~181,300 L) 🟧 `[VERIFY]` |
| Service ceiling | ~FL430 🟧 `[VERIFY]` |
| Typical cruise | M0.84 (M0.89 max) 🟩 |
| Range (rep. payload) | ~4,900 NM at max structural payload (~102 t) 🟧 `[VERIFY]` |
| ETOPS/EDTO | Twin, EDTO-capable — type certified **up to 330 min** (GE90); **operator rule time not yet set for the freighter** — see Dispatch §5 & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **B** (Upper Heavy) / ICAO **H**; **RFF Cat 9** (length 63.7 m → 61–<76 m band) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** B77F (Boeing 777F, 2 × GE90-110B1) → **SimBrief profile:** B77F (777F / GE90-110B1) → **Sim model:** X-Plane 11 **FlightFactor 777 (777F variant)** (candidate) — approved model 🟧 `[VERIFY]`

The dispatch profile (SimBrief B77F / GE90-110B1) models the correct freighter airframe and engine and drives the OFP burn. The X-Plane 11 flight model candidate is the **FlightFactor 777 (777F variant)** — consistent with the B77W pack's FlightFactor 777 choice, since both share the 777 type; approval is **not yet confirmed** as a management decision (marked 🟧 `[VERIFY]`). If the tested model's engine/aero data differ from the GE90-110B1 SimBrief profile, cruise burn, ceiling and field performance realism will differ from the OFP and any burn comparison must account for that. Resolve in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network
Long-haul **heavy widebody-twin freighter** — the fleet's **main-deck long-haul cargo workhorse** (35 tails). It carries no passengers: a full main-deck freight capacity (~102,000 kg K Global config) plus lower-deck cargo, on the twin-engine efficiency and EDTO reach of the 777 platform. Primary role is the long cargo trunks — the FRA + HKG two-anchor cargo grid and deep intercontinental freight sectors — where a twin's fuel efficiency beats the 8F quad on payload-appropriate sectors and EDTO reach (once the operator rule time is set) opens transoceanic great-circle cargo routings. Shares the 777 type rating and much of the ground/dispatch handling with the passenger [B77W](../b77w/intro.md), differing in the **main-deck freighter loading discipline** (see §4). Sits alongside the 8F (main-deck quad) in the cargo fleet and below it in size. Based out of the Frankfurt (EDDF) superhub within the multi-hub cargo network.

## 4. Dimensions & ground footprint
- Length **63.7 m** (209 ft 1 in); wingspan **64.8 m** (212 ft 7 in); height **~18.6 m** (61 ft 1 in) 🟧 `[VERIFY]`
- **ICAO Code E** — plans and parks only on Code E-capable stands/taxiways; watch wingspan-restricted taxiways and turn/pushback limits at constrained hubs. Shorter fuselage than the B77W (-300ER), so stand-length geometry is less marginal than the passenger -300ER. 🟧
- **RFF Cat 9** (63.7 m → 61–<76 m band) — see [Fleet Capability Matrix](../capability-matrix.md) (Table D); confirm Cat 9 fire cover at all scheduled fields. 🟩
- **Wake — RECAT-EU B (Upper Heavy) / ICAO H:** heavy separation applies; not Super. 🟩
- **Freighter ground/loading footprint 🟥:** **main-deck side cargo door** (large, upper-forward-left) for palletised main-deck loading, plus forward and aft lower-deck cargo holds — a **distinct loading operation** from a passenger belly aircraft, needing a main-deck cargo loader and active load-position planning. No passenger doors/jetbridge role. GPU/air-start and de-ice footprint per heavy widebody-twin standard.

## 5. Weights
| | kg |
|---|---|
| OEW | ~144,000 🟧 `[VERIFY]` |
| MZFW | ~248,600 🟧 `[VERIFY]` |
| MTOW | ~347,800 🟩 |
| MLW | ~260,800 🟧 `[VERIFY]` |
| Max fuel | ~145,000 (~181,300 L) 🟧 `[VERIFY]` |

High MZFW relative to OEW — the freighter structure is optimised for main-deck payload (~102 t revenue cargo). Very high MTOW (~347.8 t) — among the heaviest twins operated; drives stand, taxiway-strength (ACN/PCN) and wake considerations and a long field-length requirement at max weight. Distinct from the passenger B77W weights (higher pax MTOW/-300ER structure) — do not interchange.

## 6. Performance
- Service ceiling **~FL430**; typical cruise **M0.84** (M0.89 max) 🟩.
- **Cost index:** set on the FMC PERF INIT / VNAV page; default CI per OM E economy policy 🟧 `[VERIFY]` — no B77F reference OFP CI yet on file.
- **Field length:** long — order of ~3,000 m TO at/near MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]`. High freight TOW makes the type runway-length-sensitive at max payload/fuel; confirm field length and climb-limit at every scheduled departure field.
- **Hot-and-high:** the GE90-110B1's high thrust helps, but high freight TOW keeps hot/high departures thrust- and field-limited at elevation hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) — matrix rates hot/high sensitivity **Moderate**. Expect payload/fuel penalties on long legs out of those fields; assess per-field before scheduling. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Long field at high freight TOW; hot/high penalties public-derived, not OFP-verified (matrix: Moderate) |
| Range vs network trunk sectors | 🟧 | ~4,900 NM at max structural payload `[VERIFY]` — confirm reserves/payload trade against longest scheduled cargo sector |
| ETOPS/EDTO adequacy | 🟧 | Twin; type capable to 330 min, but **operator rule time not yet set for the freighter** (not in OpsSpec batch 1) — see Dispatch §5 & matrix |
| Stand / gate compatibility | 🟧 | Code letter E; RFF Cat 9 — confirm Code E stands + Cat 9 RFF at all scheduled fields |
| Freighter loading discipline | 🟥 | Main-deck cargo (side door) + lower-deck — distinct from pax belly loading; active main-deck CG management (see Dispatch §4) |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (FlightFactor 777 / 777F variant candidate) unconfirmed — see Sim-Model |

## 8. Related pack files
**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md) · Passenger sibling: [B77W — Intro](../b77w/intro.md) · Fleet Capability Matrix: [Fleet Capability Matrix](../capability-matrix.md) · Fleet Index → [overview](../index.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 777 Freighter product page — https://www.boeing.com/commercial/777
- Boeing — 777 Airplane Characteristics for Airport Planning — https://www.boeing.com/content/dam/boeing/boeingdotcom/company/about_bca/startup/pdf/historical/777_2LR_300ER_Boeing.pdf
- SKYbrary — Boeing 777 Freighter (B77L / 777F) — https://skybrary.aero/aircraft/b77l
- Boeing — Boeing to Offer up to 330-Minute ETOPS on 777 — https://boeing.mediaroom.com/2011-12-12-Boeing-to-Offer-up-to-330-Minute-ETOPS-on-777
- Wikipedia — Boeing 777 (777F) — https://en.wikipedia.org/wiki/Boeing_777
- Wikipedia — General Electric GE90 — https://en.wikipedia.org/wiki/General_Electric_GE90

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Boeing/SKYbrary data + VAMSYS mirror config + Fleet Capability Matrix; freighter (main-deck cargo, no pax) captured; shares 777 type with B77W (cross-referenced, consistent sim-model choice); EDTO capable to 330 min but **operator rule time not yet set for the freighter** (matrix cell 🟧, open item); no type OFP yet (figures `[VERIFY]` pending). |
| v0.2 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH and Livery built; pack complete, no dead links. |
