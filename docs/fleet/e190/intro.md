<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  E190 Embraer 190
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# E190 — Embraer 190 · Intro

**E190 / E-Jet family (E1 generation) — common type rating with E195** · Narrowbody regional jet, City/Regional network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are **not researched to mainline standard** for this type — the Fleet Capability Matrix carries the E190 in its **secondary/indicative table** only, every cell 🟧. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **E190** |
| Family / type rating | Embraer E-Jet family, first generation (E1) — common type rating with **E195** 🟩; distinct from the E170/E175 rating and the older ERJ-145 rating |
| Variants operated | Embraer 190 (single sub-type) `[VERIFY — VAMSYS]` |
| Engines | **2 × GE CF34-10E** (FADEC), ~20,360 lbf each 🟩 |
| ICAO code letter | **C** — wingspan ~28.72 m (winglet-equipped variant) 🟧 `[VERIFY]` |
| Config (K Global) | 4 City / 6 Regional business units `[VERIFY — VAMSYS]`; seats/cargo not yet broken out per type `[VERIFY — VAMSYS]` |
| MTOW / OEW | 51,800 kg / 27,837 kg 🟩 |
| MZFW / MLW | Not published in the public sources surveyed 🟧 `[VERIFY — EASA TCDS]` |
| Max fuel | ~12,971 kg 🟧 `[VERIFY]` |
| Service ceiling | 41,000 ft (FL410) 🟩 |
| Typical cruise | M0.78 (max M0.82) 🟩 |
| Range (rep. payload) | ~2,450 NM 🟩 |
| ETOPS/EDTO | Regional short/medium-haul type — **not typically EDTO-planned**; no K Global rule time asserted — see Dispatch & matrix |
| RECAT-EU / wake / RFF | **Not in the mainline Fleet Capability Matrix tables** — see the matrix's **secondary/indicative table** (🟧 throughout): RECAT-EU D / ICAO wake M (indicative); RFF category not tabulated for this type — see §4 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** E190 (Embraer 190, CF34-10E) → **SimBrief profile:** E190 (E190STD) → **Sim model:** E-Jet add-on for X-Plane (e.g. SSG E-Jet family) 🟧 `[VERIFY]`

The dispatch profile (SimBrief E190) models the correct airframe/engine family and drives the OFP burn. The approved X-Plane flight model for the E190 is **not yet formally confirmed** (marked 🟧 `[VERIFY]`) — same open posture as the other packs pending a management decision. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file for the candidate models and their fidelity notes.

## 3. Role in the network

Narrowbody regional jet operating in the **City** and **Regional** business units `[VERIFY — VAMSYS]` — the smaller-gauge, secondary/domestic tier below the mainline narrowbody trunk fleet (A319/A320/A21N/BCS3). Shares the **E-Jet common type rating with the E195**, giving crew-scheduling flexibility across those two types; the E170/E175 pair and the ERJ-145 sit on separate type ratings within the same Embraer group (see the [Fleet overview](../index.md), "Type-rating grouping").

## 4. Dimensions & ground footprint

- Length **36.25 m** (118 ft 11 in); height **10.57 m** (34 ft 8 in) 🟩; wingspan ~**28.72 m** (winglet-equipped) 🟧 `[VERIFY]`
- **ICAO Code C** — standard regional-jet stands/gates; no wingspan-restricted taxiway concerns. 🟩
- **RFF category:** not tabulated in the Fleet Capability Matrix (secondary table carries no RFF column for deferred types). By ICAO Annex 14 length band (28–<39 m), the 36.25 m length would indicate **Cat 6** — stated here as an **indicative, non-matrix-sourced** estimate only 🟧 `[VERIFY]`; confirm against the matrix once the E-jet packs are researched to mainline standard.
- Single-aisle, one main-deck passenger door forward/aft plus overwing exits; single lower-deck belly hold. GPU/air-start and de-ice footprint per regional-jet standard.

## 5. Weights

| | kg |
|---|---|
| OEW | 27,837 🟩 |
| MZFW | Not found in surveyed public sources 🟧 `[VERIFY — EASA TCDS]` |
| MTOW | 51,800 🟩 |
| MLW | Not found in surveyed public sources 🟧 `[VERIFY — EASA TCDS]`; landing field length (MLW, ISA, SL) publicly cited at ~1,244 m 🟧 |
| Max fuel | ~12,971 🟧 `[VERIFY]` |

K Global operates a single E190 sub-type `[VERIFY — VAMSYS]`; confirm the exact weight variant and MZFW/MLW figures against the EASA TCDS (EASA.IM.A.071, ERJ 190 family) or the VAMSYS mirror before use in performance planning 🟧 `[VERIFY]`.

## 6. Performance

- Service ceiling **41,000 ft**; typical cruise **M0.78** (max **M0.82**) 🟩.
- Average fuel flow — no public reference surveyed and **no K Global reference OFP** yet on file 🟧 `[VERIFY]` — dispatch figures are public-Embraer-derived only (watch-item).
- **Cost index:** set per OM E / route economics; no E190 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** TO ~2,100 m (MTOW, ISA, SL); landing ~1,244 m (MLW, ISA, SL) 🟧 `[VERIFY]`.
- **Hot-and-high:** not yet assessed by K Global; the matrix's secondary table does not carry a hot-and-high column for this type. Regional jets typically retain reasonable thrust margin at moderate altitude/temperature, but this is an assumption, not a confirmed rating — flag 🟧 pending assessment.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Not assessed; no matrix column for this type — treat as unconfirmed |
| Range vs network City/Regional sectors | 🟩 | ~2,450 NM structural comfortably covers the City/Regional short-haul set |
| ETOPS/EDTO adequacy | 🟧 | Regional short/medium-haul type; not typically EDTO-planned; matrix marks EDTO applicability indicative only |
| Steep approach | 🟧 | **First-generation E190 (E1, as operated by K Global) is not steep-approach certified.** The **E190-E2** is the steep/LCY-capable candidate noted in the Fleet Capability Matrix (Table C, Open items) as K Global's prospective steep-approach solution — a **different, newer airframe**, not the E1 fleet documented in this pack. Do not conflate the two when assessing LCY-class steep-field operations; the matrix's operator steep-approach approval remains deferred fleet-wide. |
| Stand / gate compatibility | 🟩 | Code letter C — standard regional-jet footprint |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane E-jet add-on not yet confirmed; E1-vs-E2 generation matching is the key trap — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values (secondary/indicative table)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Embraer — commercial aircraft — https://www.embraer.com
- EASA — TCDS EASA.IM.A.071 ERJ 190 (covers E190/E195 family) — https://www.easa.europa.eu/en/document-library/type-certificates/noise/easaima071-erj-190
- SKYbrary — Embraer E190 (E190) — https://skybrary.aero/aircraft/e190
- Wikipedia — Embraer E-Jet family — https://en.wikipedia.org/wiki/Embraer_E-Jet_family
- Wikipedia — General Electric CF34 — https://en.wikipedia.org/wiki/General_Electric_CF34

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Embraer/EASA/SKYbrary/Wikipedia data; stub converted; capability values cross-linked to the Fleet Capability Matrix's secondary/indicative table (not the mainline tables — this type is not yet researched to mainline standard); steep-approach distinction flagged (E1 not certified; E190-E2 is the prospective steep/LCY candidate, a different airframe); approved sim add-on a management decision `[VERIFY]`. |
