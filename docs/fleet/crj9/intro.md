<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  CRJ9 Bombardier CRJ900
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# CRJ9 — Bombardier CRJ900 · Intro

**CRJ9 / CRJ series — common type rating with CRJ700** · Narrowbody regional jet, City/Regional network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. This pack shares its type rating with the **[CRJ7](../crj7/intro.md)** — read that pack alongside this one; sections that are identical across the pair are cross-referenced rather than repeated. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are **not researched to mainline standard** for this type — the Fleet Capability Matrix carries the CRJ9 in its **secondary/indicative table** only, every cell 🟧. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **CRJ9** |
| Manufacturer model | CL-600-2D24 (Regional Jet Series 900) 🟩 |
| Family / type rating | Bombardier/Canadair CRJ series — **common type rating with CRJ700** (`CRJ7`) 🟩; see the CRJ7 pack for the shared-rating discussion |
| Type-certificate holder | **MHI RJ Aviation ULC** (formerly Bombardier Inc.; CRJ program acquired by Mitsubishi Heavy Industries, closed 2020-06-01) 🟩 — FAA TCDS **A21EA** (same certificate as the CRJ700) |
| Variants operated | Bombardier CRJ900 (single sub-type) `[VERIFY — VAMSYS]`; family also includes an extended-range **CRJ900ER** variant 🟧 |
| Engines | **2 × GE CF34-8C5** (FADEC) 🟩 — from mid-production, upgraded to the **CF34-8C5B1** standard (58.4 kN take-off thrust, 63.4 kN with auto power reserve) 🟧 `[VERIFY]` |
| ICAO code letter | **C** — wingspan 23.30 m 🟩 |
| Config (K Global) | City/Regional network `[VERIFY — VAMSYS]`; seats/cargo not yet broken out per type — aggregate ~10 tails across the four-type Bombardier group (CRJ7/CRJ9/CRJ2/CL30) `[VERIFY — VAMSYS]` |
| MTOW / OEW | 36,500 kg (SKYbrary, baseline) 🟩; ER variant higher 🟧 `[VERIFY]`; OEW not found in surveyed public sources 🟧 `[VERIFY — FAA TCDS A21EA]` |
| MZFW / MLW | Not published in the public sources surveyed 🟧 `[VERIFY — FAA TCDS A21EA]` |
| Max fuel | Not found in surveyed public sources 🟧 `[VERIFY]` |
| Service ceiling | 41,000 ft (FL410) 🟩 |
| Typical cruise | M0.80, TAS ~458 kt (SKYbrary) 🟩; maximum operating Mach publicly cited in the **M0.82–0.85** range depending on source 🟧 `[VERIFY]` |
| Range (rep. payload) | ~1,553 NM at full passenger load (public secondary source) 🟧 `[VERIFY]`; ER variant extends this materially — figure not confirmed |
| ETOPS/EDTO | Regional short-haul type — **not typically EDTO-planned**; no K Global rule time asserted — see Dispatch & matrix |
| RECAT-EU / wake / RFF | **Not in the mainline Fleet Capability Matrix tables** — see the matrix's **secondary/indicative table** (🟧 throughout): RECAT-EU E / ICAO wake M (indicative); RFF category not tabulated for this type — see §4 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** CRJ9 (Bombardier CRJ900, CL-600-2D24, CF34-8C5) → **SimBrief profile:** CRJ9 (CRJ9) → **Sim model:** AD Simulations/DeltaWing CRJ-900 for X-Plane 11/12 🟧 `[VERIFY]`

The dispatch profile (SimBrief CRJ9) models the correct airframe/engine family and drives the OFP burn. The candidate X-Plane model is identified in Sim-Model but **not yet formally approved** by K Global management (marked 🟧 `[VERIFY]`) — same open posture as the CRJ7 pack and the other regional packs pending a decision. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file for the candidate model and its fidelity notes.

## 3. Role in the network

Narrowbody regional jet operating in the **City** and **Regional** business units `[VERIFY — VAMSYS]` — the smaller-gauge, secondary/domestic tier below the mainline narrowbody trunk fleet (A319/A320/A21N/BCS3), stretched from the CRJ700 to carry more passengers on the same short-haul mission profile. Shares the **CRJ series common type rating with the CRJ700** (see `../CRJ7/CRJ7 — Intro.md`), giving crew-scheduling flexibility across those two types; the CRJ-200 (`CRJ2`) sits on the same type certificate but is documented as a separate pack — see the [Fleet overview](../index.md), "Type-rating grouping".

## 4. Dimensions & ground footprint

- Length **36.20 m** (118 ft 9 in); height **7.50 m** (24 ft 7 in) 🟧 (SKYbrary figure — some public sources cite a taller tail height for this variant; treat as `[VERIFY]`); wingspan **23.30 m** (76 ft 5 in, winglet-equipped) 🟩
- **ICAO Code C** — standard regional-jet stands/gates; no wingspan-restricted taxiway concerns. 🟩
- **RFF category:** not tabulated in the Fleet Capability Matrix (secondary table carries no RFF column for deferred types). By ICAO Annex 14 length band (28–<39 m), the 36.20 m length would indicate **Cat 6** — stated here as an **indicative, non-matrix-sourced** estimate only 🟧 `[VERIFY]`; confirm against the matrix once the CRJ packs are researched to mainline standard.
- Single-aisle, one main-deck passenger door forward plus a rear airstair/service door and overwing exits; single lower-deck belly hold. GPU/air-start and de-ice footprint per regional-jet standard. **T-tail** configuration, as on the CRJ7 — same deep-stall/pitch-up awareness applies; see QRH Ch 1 and Ch 7.

## 5. Weights

| | kg |
|---|---|
| OEW | Not found in surveyed public sources 🟧 `[VERIFY — FAA TCDS A21EA]` |
| MZFW | Not found in surveyed public sources 🟧 `[VERIFY — FAA TCDS A21EA]` |
| MTOW | 36,500 (baseline, SKYbrary) 🟩; ER variant higher 🟧 `[VERIFY]` |
| MLW | Not found in surveyed public sources 🟧 `[VERIFY — FAA TCDS A21EA]` |
| Max fuel | Not found in surveyed public sources 🟧 `[VERIFY]` |

K Global operates a single CRJ900 sub-type `[VERIFY — VAMSYS]`; confirm the exact weight variant (baseline vs CRJ900ER) and the CF34-8C5 vs CF34-8C5B1 engine standard against the FAA TCDS A21EA or the VAMSYS mirror before use in performance planning 🟧 `[VERIFY]`.

## 6. Performance

- Service ceiling **41,000 ft**; cruise TAS ~458 kt at M0.80 (SKYbrary); maximum operating Mach publicly cited **M0.82–0.85** depending on source 🟧 `[VERIFY]`.
- Average fuel flow — no public reference surveyed and **no K Global reference OFP** yet on file 🟧 `[VERIFY]` — dispatch figures are public-SKYbrary/Bombardier-derived only (watch-item).
- **Cost index:** set per OM E / route economics; no CRJ9 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** takeoff ~1,972 m; landing ~1,660 m (SKYbrary, MTOW/MLW, ISA, SL) 🟩 — longer than the CRJ7's field-length figures, consistent with the stretched fuselage and higher weight.
- **Wing / high-lift note 🟥:** the CRJ900 shares the CRJ700's redesigned wing with **leading-edge slats** (see `../CRJ7/CRJ7 — Intro.md` §6 for the full correction) — the CRJ700/900 family is **not** a "hard wing" (no-leading-edge-device) type; that characteristic belongs to the **CRJ-200** (`CRJ2`), a separate pack in this group. Do not conflate the two when briefing icing/speed-discipline items.
- **Hot-and-high:** not yet assessed by K Global; the matrix's secondary table does not carry a hot-and-high column for this type. The longer, heavier CRJ900 will have a tighter hot-and-high margin than the CRJ7 — treat as an assumption pending assessment, not a confirmed rating 🟧.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Not assessed; no matrix column for this type — treat as unconfirmed; expect a tighter margin than the CRJ7 given the higher weight |
| Range vs network City/Regional sectors | 🟩 | ~1,553 NM (baseline, full pax) comfortably covers the City/Regional short-haul set; ER variant extends further |
| ETOPS/EDTO adequacy | 🟧 | Regional short-haul type; not typically EDTO-planned; matrix marks EDTO applicability indicative only |
| Wing / icing note | 🟥 | **Corrected premise (shared with CRJ7):** CRJ700/900 carry a slatted wing (unlike the CRJ-200 hard wing) — anti-ice/speed-discipline items in the QRH are the general regional-jet icing/contamination caveats, not a hard-wing AOA limitation |
| Stand / gate compatibility | 🟩 | Code letter C — standard regional-jet footprint |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane model not yet confirmed — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Common-rated sibling: [CRJ7 pack](../crj7/index.md) · Fleet Index → [overview](../index.md) · [Capability values (secondary/indicative table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- MHI RJ Aviation Group (CRJ program, successor to Bombardier) — https://www.mhi.com/business/products-services/aviation/aircraft-aftermarket-service/crj
- FAA — Type Certificate Data Sheet A21EA (CL-600-2C10 / CL-600-2D24) — https://drs.faa.gov/browse/excelExternalWindow/DRSDOCID139432206720241108194210.0001
- SKYbrary — Bombardier CRJ-900 (CRJ9) — https://skybrary.aero/aircraft/crj9
- Wikipedia — Bombardier CRJ700 series (covers CRJ700/900/1000 family) — https://en.wikipedia.org/wiki/Bombardier_CRJ700_series
- Wikipedia — General Electric CF34 — https://en.wikipedia.org/wiki/General_Electric_CF34

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public MHIRJ/FAA TCDS/SKYbrary/Wikipedia data; capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table (not the mainline tables — this type is not yet researched to mainline standard); wing/icing premise corrected against public sources (slatted wing, shared with CRJ7, unlike the CRJ-200); cross-referenced CRJ7 throughout as the common-rated sibling; approved sim model a management decision `[VERIFY]`. |
