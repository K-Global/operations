<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  E145 Embraer ERJ-145
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# E145 — Embraer ERJ-145 · Intro

**E145 / ERJ family — own type rating (shared across the ERJ-135/140/145 family)** · Narrowbody regional twinjet, short-sector Regional-unit workhorse
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix (secondary/indicative table — this type is not yet researched to the mainline standard). Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **E145** |
| Family / type rating | **Own type rating**, shared across the **ERJ-135/140/145 family** — a **single crew qualification** covers all three; this is the **older ERJ (Embraer Regional Jet) family**, a distinct programme and distinct type rating from the newer **E-Jet family (E170/175/190/195)** 🟩 |
| Variants operated | Embraer ERJ-145 `[VAMSYS mirror — pending live reseed, VERIFY]` |
| Engines (modelled) | 2 × **Rolls-Royce AE 3007** series turbofan, **rear-fuselage-mounted** 🟩 |
| ICAO code letter | **C** 🟧 `[VERIFY — public wingspan figures (~20.0 m) sit at the B/C boundary; confirm against the current ICAO aerodrome-reference-code assignment before using for stand/gate planning]` |
| Config (K Global) | `[VERIFY — VAMSYS]` — group stub not yet broken out per type; see the [Fleet overview](../index.md) |
| MTOW | **~22,000 kg** (LR-family variant) 🟧 `[VERIFY]` |
| Seats (typical) | **~50** (1-2 single-aisle, three-abreast) 🟩 |
| Range | **~1,550–2,000 NM** depending on variant (STD vs LR) 🟧 `[VERIFY]` |
| Service ceiling | ~FL370 🟧 `[VERIFY]` |
| Typical cruise | ~M0.78 🟧 `[VERIFY]` |
| ETOPS/EDTO | Twin, but flown on short regional sectors — **no K Global EDTO rule time applies**; see Dispatch §5 |
| Airframe layout | **Rear-fuselage-mounted engines, T-tail** — visually and structurally distinct from the underwing-engine, low-tail E-Jet family 🟩 |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) (secondary/indicative table) — currently indicative **E** / ICAO **M** 🟧; RFF category not yet researched to the mainline standard 🟧 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** E145 (Embraer ERJ-145, Rolls-Royce AE 3007) → **SimBrief profile:** E145 (ERJ-145) → **Sim model:** X-Crafts ERJ Family (E145/E145XR variant), X-Plane 11 — candidate identified, **not yet formally approved** 🟧 `[VERIFY]`

The dispatch profile (SimBrief E145) models the correct airframe/engine family and drives the OFP burn. A candidate X-Plane 11 flight model has now been identified (Sim-Model §1) but **not yet tested and approved** for this type (marked 🟧 `[VERIFY]`) — the same open posture the mainline packs carried before their Sim-Model decision closed. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated against a future reference OFP before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the [Sim-Model](sim-model.md) file.

## 3. Role in the network

Regional narrowbody twinjet, flown by the **Regional** business unit on short-sector, thin-demand routes below the density/range tier the E-Jet pairs (E170/175, E190/195) and mainline narrowbodies (A319/A320/A21N) serve. The ERJ-145 is Embraer's **older regional-jet programme** — rear-fuselage-mounted engines and a T-tail, developed in the 1990s ahead of the newer E-Jet family, and it carries its **own, separate type rating** shared only across the ERJ-135/140/145 (not portable to any E-Jet). This distinction matters operationally: crew qualified on E70/E75/E190/E195 are **not** automatically qualified on E145, and vice versa. See the [Fleet overview](../index.md) for the type-rating grouping across the Embraer fleet.

## 4. Dimensions & ground footprint

- Public reference dimensions (final production ERJ-145): length **~29.87 m** (98 ft); wingspan **~20.0 m** (65 ft 9 in); height **~6.76 m** (22 ft 2 in) 🟧 `[VERIFY]`
- **ICAO Code C** carried here per the task brief's data anchor 🟧 `[VERIFY]` — note the public wingspan figure (~20.0 m) sits close to the Code B/C boundary (Code B: 15–<24 m also covers this span); confirm the actual assignment before using for narrow taxiway/stand planning.
- **Rear-fuselage-mounted engines, T-tail** — a materially different ground/servicing footprint from the underwing-engine E-Jet family (engine strike/FOD clearances, tail-strike geometry on rotation, boarding stair placement). 🟩
- RFF/ARFF category not yet researched to the mainline standard for this type — see [Fleet Capability Matrix](../capability-matrix.md) secondary table. 🟧
- Single-aisle (three-abreast, offset-aisle typical), single forward airstair/door, small belly hold; no dedicated large-container cargo capability at this size of frame.

## 5. Weights

| | kg |
|---|---|
| MTOW | ~22,000 (LR-family variant) 🟧 `[VERIFY]` |
| OEW | `[VERIFY]` — not yet sourced to a specific variant |
| Max fuel | `[VERIFY]` — variant-dependent (STD vs LR fuel-tank fit) |

K Global's specific ERJ-145 sub-variant (STD/ER/LR/LU/XR — public sources describe several MTOW/fuel-capacity variants under the same ICAO designator) is not yet confirmed against the VAMSYS mirror 🟧 `[VERIFY — VAMSYS weight variant]`. Populate this table fully once the type reseed lands.

## 6. Performance

- Service ceiling **~FL370**; typical cruise **~M0.78** 🟧 `[VERIFY]`.
- No K Global reference OFP yet on file — burn/CI figures are public-derived only, not operator-verified (watch-item, same posture as the mainline packs before their first flown OFP). 🟧
- **Range:** **~1,550–2,000 NM** depending on sub-variant (STD vs LR) 🟧 `[VERIFY]` — comfortably covers short regional sectors; not intended for long-thin missions.
- **Hot-and-high:** not yet assessed to the mainline standard for this type; treat as unverified pending a dedicated study. 🟧
- **No steep-approach certification** — the ERJ-145 is **not** a steep-approach type; K Global's steep/LCY-field solution is expected to be based on the **Embraer E190/E195** instead (see Fleet Capability Matrix §Open items), not this type. 🟩

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Not yet assessed to the mainline standard — treat as unverified |
| Range vs network regional sectors | 🟧 | ~1,550–2,000 NM structural, variant-dependent; confirm against actual K Global regional sector lengths |
| ETOPS/EDTO adequacy | 🟩 | Twin, but short regional sectors — no K Global rule time applies; see Dispatch §5 |
| Stand / gate compatibility | 🟧 | ICAO code letter carried as C per task brief; public wingspan sits near the B/C boundary — confirm |
| Modelling fidelity (sim vs real) | 🟧 | Candidate sim model identified (X-Crafts ERJ Family, E145/E145XR) — not yet tested/approved, see Sim-Model |
| Type-rating distinctness | 🟩 | Own rating (ERJ-135/140/145); explicitly **not** interchangeable with any E-Jet type rating |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md) (secondary/indicative table)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Embraer — commercial aircraft (public) — https://www.embraer.com
- EASA — Type Certificate Data Sheet, Embraer EMB-135/EMB-145 family — https://www.easa.europa.eu/en/document-library/type-certificates
- SKYbrary — Embraer ERJ 145 (E145) — https://skybrary.aero/aircraft/e145
- Wikipedia — Embraer ERJ 145 family — https://en.wikipedia.org/wiki/Embraer_ERJ_145_family
- Wikipedia — Rolls-Royce AE 3007 — https://en.wikipedia.org/wiki/Rolls-Royce_AE_3007

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | Pack completed — Sim-Model, Checklist, QRH and Livery built; §2 and §7 updated to reflect the identified (not yet approved) X-Crafts ERJ Family candidate; §8 links refreshed, no dead links. |
| v0.1 | 2026-07-25 | Initial draft — Intro built from public Embraer/EASA/SKYbrary/Wikipedia data per the task brief's data anchors; cloned from the A320 Intro pattern; flags heavy on 🟧 pending VAMSYS reseed and sim-model selection; type-rating distinctness from the E-Jet family called out per governance. |
