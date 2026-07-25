<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  CRJ7 Bombardier CRJ700
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# CRJ7 — Bombardier CRJ700 · Intro

**CRJ7 / CRJ series — common type rating with CRJ900** · Narrowbody regional jet, City/Regional network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are **not researched to mainline standard** for this type — the Fleet Capability Matrix carries the CRJ7 in its **secondary/indicative table** only, every cell 🟧. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **CRJ7** |
| Manufacturer model | CL-600-2C10 (Regional Jet Series 700/701/702) 🟩 |
| Family / type rating | Bombardier/Canadair CRJ series — **common type rating with CRJ900** 🟩; broader CRJ100/200 certification commonality exists under the same type certificate but is treated as a separate practical rating pairing — see Sim-Model §2 |
| Type-certificate holder | **MHI RJ Aviation ULC** (formerly Bombardier Inc.; CRJ program acquired by Mitsubishi Heavy Industries, closed 2020-06-01) 🟩 — FAA TCDS **A21EA** |
| Variants operated | Bombardier CRJ700 (single sub-type) `[VERIFY — VAMSYS]`; family also includes higher-gross-weight CRJ701/CRJ702 variants 🟧 |
| Engines | **2 × GE CF34-8C5** (FADEC) 🟧 — baseline CRJ700 aircraft are certified with the lower-thrust **CF34-8C1**; the higher-gross-weight/ER variants and the CRJ900 use the **CF34-8C5** family; confirm which sub-variant K Global's tails carry `[VERIFY — VAMSYS]` |
| ICAO code letter | **C** — wingspan 23.24 m 🟩 |
| Config (K Global) | City/Regional network `[VERIFY — VAMSYS]`; seats/cargo not yet broken out per type — aggregate ~10 tails across the four-type Bombardier group (CRJ7/CRJ9/CRJ2/CL30) `[VERIFY — VAMSYS]` |
| MTOW / OEW | ~34,000 kg 🟩 (SKYbrary, baseline) — higher-GW variants to ~38,600 kg 🟧 `[VERIFY]`; OEW not found in surveyed public sources 🟧 `[VERIFY — TCDS]` |
| MZFW / MLW | Not published in the public sources surveyed 🟧 `[VERIFY — FAA TCDS A21EA]` |
| Max fuel | Not found in surveyed public sources 🟧 `[VERIFY]` |
| Service ceiling | 41,000 ft (FL410) 🟩 |
| Typical cruise | M0.77–0.80 🟩; maximum operating Mach publicly cited in the **M0.83–0.85** range depending on source 🟧 `[VERIFY]` |
| Range (rep. payload) | ~1,980 NM structural (SKYbrary) 🟧; other public sources cite shorter typical mission range (~1,500 NM) for the baseline aircraft — variant- and payload-dependent, treat as `[VERIFY]` |
| ETOPS/EDTO | Regional short-haul type — **not typically EDTO-planned**; no K Global rule time asserted — see Dispatch & matrix |
| RECAT-EU / wake / RFF | **Not in the mainline Fleet Capability Matrix tables** — see the matrix's **secondary/indicative table** (🟧 throughout): RECAT-EU E / ICAO wake M (indicative); RFF category not tabulated for this type — see §4 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** CRJ7 (Bombardier CRJ700, CL-600-2C10, CF34-8C5/8C1) → **SimBrief profile:** CRJ7 (CRJ7) → **Sim model:** AD Simulations/DeltaWing CRJ-700 for X-Plane 11/12 🟧 `[VERIFY]`

The dispatch profile (SimBrief CRJ7) models the correct airframe/engine family and drives the OFP burn. The candidate X-Plane model is identified in Sim-Model but **not yet formally approved** by K Global management (marked 🟧 `[VERIFY]`) — same open posture as the other regional packs pending a decision. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file for the candidate model and its fidelity notes.

## 3. Role in the network

Narrowbody regional jet operating in the **City** and **Regional** business units `[VERIFY — VAMSYS]` — the smaller-gauge, secondary/domestic tier below the mainline narrowbody trunk fleet (A319/A320/A21N/BCS3). Shares the **CRJ series common type rating with the CRJ900**, giving crew-scheduling flexibility across those two types; the CRJ-200 (`CRJ2`) sits on the same type certificate but is documented as a separate pack and treated as a distinct practical rating pairing pending confirmation (see the [Fleet overview](../index.md), "Type-rating grouping").

## 4. Dimensions & ground footprint

- Length **32.51 m** (106 ft 8 in); height **7.57 m** (24 ft 10 in); wingspan **23.24 m** (76 ft 3 in, winglet-equipped) 🟩
- **ICAO Code C** — standard regional-jet stands/gates; no wingspan-restricted taxiway concerns. 🟩
- **RFF category:** not tabulated in the Fleet Capability Matrix (secondary table carries no RFF column for deferred types). By ICAO Annex 14 length band (28–<39 m), the 32.51 m length would indicate **Cat 6** — stated here as an **indicative, non-matrix-sourced** estimate only 🟧 `[VERIFY]`; confirm against the matrix once the CRJ packs are researched to mainline standard.
- Single-aisle, one main-deck passenger door forward plus a rear airstair/service door and overwing exits; single lower-deck belly hold. GPU/air-start and de-ice footprint per regional-jet standard. **T-tail** configuration — tailplane sits clear of engine/wing wake but raises a specific **deep-stall / pitch-up awareness** requirement common to T-tail types; see QRH Ch 1 and Ch 7.

## 5. Weights

| | kg |
|---|---|
| OEW | Not found in surveyed public sources 🟧 `[VERIFY — FAA TCDS A21EA]` |
| MZFW | Not found in surveyed public sources 🟧 `[VERIFY — FAA TCDS A21EA]` |
| MTOW | ~34,000 (baseline) 🟩; higher-GW variants to ~38,600 🟧 `[VERIFY]` |
| MLW | Not found in surveyed public sources 🟧 `[VERIFY — FAA TCDS A21EA]` |
| Max fuel | Not found in surveyed public sources 🟧 `[VERIFY]` |

K Global operates a single CRJ700 sub-type `[VERIFY — VAMSYS]`; confirm the exact weight variant (baseline vs CRJ701/702 higher-GW) and the CF34-8C1 vs CF34-8C5 engine fit against the FAA TCDS A21EA or the VAMSYS mirror before use in performance planning 🟧 `[VERIFY]`.

## 6. Performance

- Service ceiling **41,000 ft**; cruise TAS ~442 kt at M0.77 (SKYbrary, baseline); maximum operating Mach publicly cited **M0.83–0.85** depending on source 🟧 `[VERIFY]`.
- Average fuel flow — no public reference surveyed and **no K Global reference OFP** yet on file 🟧 `[VERIFY]` — dispatch figures are public-Bombardier/SKYbrary-derived only (watch-item).
- **Cost index:** set per OM E / route economics; no CRJ7 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** takeoff ~1,565 m; landing ~1,509 m (SKYbrary, MTOW/MLW, ISA, SL) 🟩.
- **Wing / high-lift note 🟥:** the CRJ700's wing was **redesigned from the earlier CRJ200 and fitted with leading-edge slats** — the CRJ700/900 family is **not** a "hard wing" (no-leading-edge-device) type; that characteristic belongs to the **CRJ-200** (`CRJ2`), a separate pack in this group, which lacks leading-edge devices and flies notably higher approach speeds/AOA-limited handling as a result. Do not conflate the two when briefing icing/speed-discipline items — see QRH Ch 0/Ch 7 for what genuinely applies to this (slatted) wing.
- **Hot-and-high:** not yet assessed by K Global; the matrix's secondary table does not carry a hot-and-high column for this type. Regional jets typically retain reasonable thrust margin at moderate altitude/temperature, but this is an assumption, not a confirmed rating — flag 🟧 pending assessment.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Not assessed; no matrix column for this type — treat as unconfirmed |
| Range vs network City/Regional sectors | 🟩 | ~1,980 NM structural comfortably covers the City/Regional short-haul set |
| ETOPS/EDTO adequacy | 🟧 | Regional short-haul type; not typically EDTO-planned; matrix marks EDTO applicability indicative only |
| Wing / icing note | 🟥 | **Corrected premise:** CRJ700/900 carry a slatted wing (unlike the CRJ-200 hard wing) — anti-ice/speed-discipline items in the QRH are the general regional-jet icing/contamination caveats, not a hard-wing AOA limitation. Confirm before training to any "hard wing" assumption for this type. |
| Stand / gate compatibility | 🟩 | Code letter C — standard regional-jet footprint |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane model not yet confirmed — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Common-rated sibling: [CRJ9 pack](../crj9/index.md) · Fleet Index → [overview](../index.md) · [Capability values (secondary/indicative table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- MHI RJ Aviation Group (CRJ program, successor to Bombardier) — https://www.mhi.com/business/products-services/aviation/aircraft-aftermarket-service/crj
- FAA — Type Certificate Data Sheet A21EA (CL-600-2C10 / CL-600-2D24) — https://drs.faa.gov/browse/excelExternalWindow/DRSDOCID139432206720241108194210.0001
- SKYbrary — Bombardier CRJ-700 (CRJ7) — https://skybrary.aero/aircraft/crj7
- Wikipedia — Bombardier CRJ700 series — https://en.wikipedia.org/wiki/Bombardier_CRJ700_series
- Wikipedia — General Electric CF34 — https://en.wikipedia.org/wiki/General_Electric_CF34

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public MHIRJ/FAA TCDS/SKYbrary/Wikipedia data; capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table (not the mainline tables — this type is not yet researched to mainline standard); wing/icing premise corrected against public sources — CRJ700/900 carry a slatted (not hard) wing, unlike the CRJ-200; CF34-8C1 vs CF34-8C5 engine-fit distinction flagged; approved sim model a management decision `[VERIFY]`. |
