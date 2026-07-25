<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  A388 Airbus A380-800
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A388 — Airbus A380-800 · Intro

**A388 / A380 family — separate A380 type rating** · Four-engine full-length double-deck widebody, the flagship of the network and its highest-capacity frame
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **A388** |
| Family / type rating | A380 family — **separate A380 type rating** (its own type; not the A330/A350 or any other Airbus rating) 🟩 |
| Variants operated | Airbus A380-800 (type cert **A380-841 / -842 / -861** depending on engine fit) `[VAMSYS mirror 2026-07-25]` 🟧 `[VERIFY]` |
| Engines (modelled) | **Four engines** — **Rolls-Royce Trent 900** *or* **Engine Alliance GP7200**; K Global's engine choice is an open management decision 🟧 (note both; -841/-842 = Trent 900, -861 = GP7200) |
| ICAO code letter | **F** 🟥 — wingspan **79.8 m** places the type in Code F; plans and parks **only on Code F stands/gates/taxiways** (a real, live network constraint) |
| Config (K Global) | A380-800: **555 pax + 40,000 kg belly** `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | ~575,000 / ~394,000 / ~361,000 / ~277,000 🟧 `[VERIFY]` |
| Max fuel | ~254 t (~320,000 L) 🟧 `[VERIFY]` |
| Service ceiling | ~FL430 🟧 `[VERIFY]` |
| Typical cruise | M0.85 (max M0.89) 🟧 `[VERIFY]` |
| Range (rep. payload) | ~8,000 NM 🟧 `[VERIFY]` |
| ETOPS/EDTO | **Quad — no ETOPS diversion-time limit; ICAO EDTO adequate-aerodrome concept applies (2+ engines)** — see Dispatch & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **A (Super)** / ICAO **J (Super)**; **RFF Cat 10** (length 72.72 m sits in the Cat 9 band, but fuselage width >7 m **up-categorises to Cat 10**) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** A388 (Airbus A380-800, Trent 900 *or* GP7200) → **SimBrief profile:** A388 (A380-800) → **Sim model:** X-Plane 11 A380 add-on (candidate model TBC) 🟧 `[VERIFY]`

The dispatch profile (SimBrief A388) models the correct airframe and drives the OFP burn. The approved X-Plane 11 flight model is a management decision, **not yet confirmed** (marked 🟧 `[VERIFY]`), the same posture as the A339/A359 packs. Because K Global has not yet fixed the **engine choice** (Trent 900 vs GP7200 🟧), the SimBrief airframe sub-selection and any fuel-burn comparison between the OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network
Four-engine full-length double-deck widebody and the **flagship / highest-capacity frame in the fleet**. With 17 tails and 555 seats it carries the largest single-frame payload at K Global — reserved for the densest, highest-demand trunks out of the Frankfurt (EDDF) superhub and the primary pax hubs, where the seat count fills and a Code F stand is available at both ends. It sits at the top of the widebody stack above the A359/A35K/A346 on the very heaviest sectors. As a quad it carries **no ETOPS diversion-time limit** (see §7 and Dispatch §5), which frees routing over remote/oceanic tracks — but the **Code F ground constraint**, not range, is the binding scheduling limit for this type.

## 4. Dimensions & ground footprint
- Length **72.72 m** (238 ft 7 in); wingspan **79.8 m** (261 ft 8 in); height ~**24.09 m** (79 ft 1 in) 🟧 `[VERIFY]`
- **ICAO Code F** 🟥 — the wingspan (79.8 m, Code F band 65–<80 m) restricts the type to **Code F-capable stands, gates, taxiways and runways**. This is a **hard, live network constraint**: many otherwise-suitable hubs lack Code F stands, dual-taxiway routing, or the twin-airbridge / upper-deck boarding that the type needs. Confirm Code F handling at **both** ends of every scheduled leg before committing — this, not payload-range, is the type's binding limit. Watch wingspan-restricted taxiways, turn-pad radii and pushback limits.
- **RFF Cat 10** 🟩 — length 72.72 m falls in the ICAO Cat 9 band (61–<76 m), but the fuselage width exceeds the band maximum, **up-categorising to Cat 10** — see [Fleet Capability Matrix](../capability-matrix.md) (Table D). Confirm Cat 10 cover at all scheduled fields (fewer aerodromes hold Cat 10 than Cat 9).
- Full-length twin-deck cabin (main + upper), multiple doors per side per deck; lower-deck forward and aft cargo (LD3/containerised belly) plus bulk hold. GPU/air-start, twin/upper airbridge and de-ice footprint are all outsized versus the twin widebodies.

## 5. Weights
| | kg |
|---|---|
| OEW | ~277,000 🟧 `[VERIFY]` |
| MZFW | ~361,000 🟧 `[VERIFY]` |
| MTOW | ~575,000 🟧 `[VERIFY]` |
| MLW | ~394,000 🟧 `[VERIFY]` |
| Max fuel | ~254,000 (~320,000 L) 🟧 `[VERIFY]` |

K Global operates the A380-800 as the fleet flagship; the exact weight variant and engine fit are pending confirmation against VAMSYS 🟧 `[VERIFY — VAMSYS weight variant / engine]`.

## 6. Performance
- Service ceiling **~FL430**; typical cruise **M0.85** (max **M0.89**) 🟧 `[VERIFY]`.
- Average fuel flow is high (four large engines, very high TOW) — no type-specific K Global OFP yet on file (watch-item; A388 dispatch figures are public-derived, not OFP-verified). 🟧
- **Cost index:** set per OM E / route economics; no A388 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** long — the type needs substantial runway at MTOW; ~3,000 m class TO at MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]`.
- **Hot-and-high:** very heavy airframe — matrix rates hot/high sensitivity **Moderate–high**. High-elevation/high-temperature hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) drive thrust-limited takeoffs at high TOW and can force payload/fuel penalties; assess per-field before scheduling. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| **Stand / gate compatibility (Code F)** | 🟥 | ICAO **Code F** (79.8 m span) + **RFF Cat 10** — Code F stands + Cat 10 RFF must be confirmed at **both ends** of every leg; the binding network constraint for this type |
| Engine choice (Trent 900 vs GP7200) | 🟧 | K Global engine fit not yet fixed — drives SimBrief sub-selection & burn; management decision |
| Hot-and-high / field performance | 🟧 | Long field + hot/high penalty at high TOW; matrix rates sensitivity Moderate–high; public-derived, not OFP-verified |
| Range vs network trunk sectors | 🟧 | ~8,000 NM structural covers the dense trunk set; range is not the binding limit (Code F is) `[VERIFY]` |
| ETOPS/EDTO adequacy | 🟩 | **Quad — no ETOPS diversion-time limit; ICAO EDTO adequate-aerodrome concept applies (2+ engines)** — see Dispatch & matrix |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model + engine fit unconfirmed — see Sim-Model |

## 8. Related pack files
**Built:** [Intro](intro.md) · [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A380 type page — https://www.aircraft.airbus.com/en/aircraft/a380
- Airbus — A380 Aircraft Characteristics (Airport & Maintenance Planning) — https://www.aircraft.airbus.com/en/aircraft/a380
- EASA — TCDS EASA.A.110 Airbus A380 — https://www.easa.europa.eu/en/document-library/type-certificates
- ICAO — Aerodrome Design (Annex 14) aeroplane reference code / Code F — https://www.icao.int/
- SKYbrary — Airbus A380-800 (A388) — https://skybrary.aero/aircraft/a388
- Wikipedia — Airbus A380 — https://en.wikipedia.org/wiki/Airbus_A380
- Wikipedia — Rolls-Royce Trent 900 — https://en.wikipedia.org/wiki/Rolls-Royce_Trent_900
- Wikipedia — Engine Alliance GP7000 — https://en.wikipedia.org/wiki/Engine_Alliance_GP7000

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH and Livery built; all six pack files now linked, no deferred items remain. |
| v0.1 | 2026-07-25 | Initial draft — built from public Airbus/EASA/SKYbrary data + VAMSYS mirror; capability values cross-linked to the Fleet Capability Matrix; **Code F stand constraint** flagged 🟥 as the binding network limit; quad EDTO stated as adequate-aerodrome concept (no ETOPS diversion-time limit); engine choice (Trent 900 vs GP7200) and approved X-Plane 11 model both open 🟧 `[VERIFY]`. |
