<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  GLF6 Gulfstream G650ER
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# GLF6 — Gulfstream G650ER · Intro

**GLF6 / Gulfstream GVI family** · Ultra-long-range large-cabin business jet, the flagship of the Executive-unit VIP fleet
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. This is a business-jet pack — Executive-unit VIP operating paradigm, not mainline pax/cargo scheduling; ETOPS/EDTO rule-time concepts do not apply the way they do to the mainline fleet (see §6 and Dispatch §5). Capability values (RVSM, PBN, LVO, RECAT, RFF) sit in the Fleet Capability Matrix's **secondary indicative table** (🟧 throughout, not yet researched to mainline standard) — see [Fleet Capability Matrix](../capability-matrix.md). Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **GLF6** |
| Family / certification basis | Gulfstream **GVI** type certificate; marketed as G650 / G650ER — K Global operates the **G650ER** (extended-range) variant only `[VAMSYS mirror — VERIFY]` |
| Variants operated | Gulfstream G650ER (single sub-type) `[VERIFY — VAMSYS]` |
| Engines | 2 × **Rolls-Royce BR725**, ~16,900–17,000 lbf (~71.6–75.6 kN) each 🟧 `[VERIFY — thrust figure varies by public source]` |
| ICAO code letter | **C** — wingspan ~30.4 m (24–<36 m band) 🟩 |
| Config (K Global) | VIP — indicative 8–19 pax, exact cabin config pending VAMSYS reseed `[VERIFY — VAMSYS]`; unit **Executive** |
| MTOW (ER) | ~103,600 lb / ~46,990 kg 🟧 `[VERIFY]` — base G650 MTOW 45,200 kg + ER's ~1,814 kg (4,000 lb) fuel-system increase |
| OEW (basic operating weight) | ~54,500 lb / ~24,700 kg 🟧 `[VERIFY]` |
| MZFW / MLW | Not confirmed from public source in this build — Gulfstream does not routinely publish these for the G650 line; OEM brochures instead give MTOW/BOW/max-fuel/max-payload 🟧 `[VERIFY]` |
| Max fuel | ER adds ~1,814 kg (4,000 lb) over standard G650 capacity (exact ER total 🟧 `[VERIFY]`) |
| Service ceiling | **FL510** 🟩 |
| Typical cruise | **M0.85** (high-speed cruise); max operating **M0.925** 🟩 |
| Range (rep. payload) | **~7,500 NM** at M0.85 (ER variant) 🟩 — real-world ER flights have exceeded this (Hong Kong–Teterboro, Singapore–Tucson) |
| Long-range over-water capability | Ultra-long-range twin — routinely flies intercontinental/transoceanic sectors without an intermediate stop; **not dispatched under an ETOPS/EDTO rule-time framework** (private/Executive VIP ops paradigm, not scheduled mainline ops) — see §6 & Dispatch §5 |
| Steep approach / LCY capability | 🟧 **Flagged** — Gulfstream conducted G650 steep-approach certification trials at London City Airport (LCY) in September 2018; commonly cited among steep-approach-capable business-jet types. **Operator approval status not confirmed** — ties into the OM E Steep Approach Operations deferred decision (see §7 & Dispatch §6) |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) secondary table — 🟧 indicative only (F–E / M–L wake, not yet researched to mainline standard) |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** GLF6 (Gulfstream G650ER, BR725) → **SimBrief profile:** GLF6 (G650ER) → **Sim model:** X-Plane Gulfstream G650 add-on 🟧 `[VERIFY — specific product not yet formally confirmed]`

No approved X-Plane 11 add-on for this type has been formally confirmed as a management decision (marked 🟧 `[VERIFY]`), the same posture carried by every mainline pack pending its Sim-Model file. The First Officer source library (`EFP/OM/OM B Fleet/Business Jets/GLF650ER/`) holds reference material that can inform the eventual Sim-Model build but does not itself constitute an approval. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in a future Sim-Model file before this pack is Verified.

## 3. Role in the network

The **flagship of K Global's Executive unit** — the largest, fastest and longest-ranged aircraft in the business-jet group, used for VIP/charter missions requiring true intercontinental reach without a fuel stop (~7,500 NM structural range covers the great majority of city pairs worldwide). Shares the Executive unit with the GLF5 (G550, shorter-range large-cabin), FA7X (Falcon 7X, trijet), CL30 (Challenger 300, super-midsize), E35L (Legacy 650, large-cabin) and PC12 (single-engine turboprop, short-hop/regional VIP). Where the mainline fleet dispatches scheduled pax/cargo services from the hub network, the Executive unit flies point-to-point VIP charter — this pack should be read with that different operating paradigm in mind throughout. See the [Fleet overview](../index.md) for the group index and unit context.

## 4. Dimensions & ground footprint

- Length **~30.41 m** (99 ft 9 in); wingspan **~30.36 m** (99 ft 7 in); height **~7.72 m** (25 ft 4 in) 🟧 `[VERIFY]` — figures are for the base G650 airframe; the ER shares the same external dimensions (extra fuel is carried in existing wing volume via a fuel-system modification, not a physical stretch)
- **ICAO Code C** — standard mid-size business-jet footprint, no wingspan-restricted stand/taxiway concerns 🟩
- RFF/ARFF category: see [Fleet Capability Matrix](../capability-matrix.md) secondary table — 🟧 indicative, not yet researched to mainline standard
- Twin-engine, rear-fuselage-mounted BR725s; single main cabin door forward, oval fuselage cross-section (no cargo-hold equivalent to a pax airliner — baggage compartment only)

## 5. Weights

| | kg |
|---|---|
| OEW / BOW | ~24,700 🟧 `[VERIFY]` |
| MZFW | Not confirmed — not routinely published by OEM for this type 🟧 `[VERIFY]` |
| MTOW (ER) | ~46,990 🟧 `[VERIFY]` |
| MLW | Not confirmed from public source in this build 🟧 `[VERIFY]` |
| Max fuel | ER adds ~1,814 kg over standard G650 capacity (exact ER total not confirmed) 🟧 `[VERIFY]` |

A blank beats a guess: where Gulfstream's public materials do not state a figure (MZFW, MLW, exact ER max-fuel total), this pack leaves it flagged rather than inventing a number. Populate from VAMSYS or a confirmed OEM source before using in performance planning.

## 6. Performance

- Service ceiling **FL510**; typical cruise **M0.85**, max operating **M0.925** 🟩 — among the fastest civil aircraft cruise speeds outside Concorde.
- Public reference fuel burn at FL470/ISA-7°C, M0.85: **~2,400 lb/hr (~1,090 kg/hr)** at ~67,500 lb weight, rising to **~3,000 lb/hr (~1,360 kg/hr)** at M0.90 🟧 `[VERIFY]` — no K Global reference OFP yet on file.
- **Cost index:** not applicable in the mainline sense — Executive-unit VIP missions are typically flown for minimum time/best comfort rather than route economics; set per OM E guidance if a CI concept is adopted for this unit 🟧.
- **Field length:** ~1,830 m TO / ~914 m landing at representative weights, sea-level ISA 🟧 `[VERIFY]` — short-field capable relative to its size class, a factor in the LCY/steep-approach discussion (§7).
- **Long-range over-water capability:** this is an ultra-long-range twin dispatched point-to-point across oceans and polar routes on VIP missions. **ETOPS/EDTO rule-time is not the operating paradigm for this unit** — do not apply a mainline-fleet rule time to this type; see Dispatch §5 for how over-water/remote-area planning is actually handled for Executive-unit flights.
- **Hot-and-high:** not assessed in this build — 🟧 indicative only, matrix secondary table.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs VIP mission profile | 🟩 | ~7,500 NM ER structural range covers the great majority of worldwide city pairs without a fuel stop |
| Steep approach / LCY capability | 🟧 | Gulfstream ran G650 steep-approach certification trials at LCY (2018, public source); **operator approval not confirmed** — ties to the OM E Steep Approach Operations deferred decision |
| Weights (MZFW/MLW) | 🟧 | Not confirmed from public source in this build — populate from VAMSYS/OEM before use in performance planning |
| ETOPS/EDTO applicability | 🟩 | Not the operating paradigm for Executive-unit VIP ops — see Dispatch §5 for how long-range over-water flights are actually planned |
| Modelling fidelity (sim vs real) | 🟧 | No approved X-Plane 11 add-on confirmed yet — management decision pending, see Sim-Model (to build) |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Group index: the [Fleet overview](../index.md) · [Capability values (indicative)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Gulfstream G650 / G700 / G800 — https://en.wikipedia.org/wiki/Gulfstream_G650
- SKYbrary — Gulfstream Aerospace G650 (GLF6) — https://skybrary.aero/aircraft/glf6
- Aviation International News — Gulfstream G650 Conducts Steep Approach Trials at LCY (2018) — https://www.ainonline.com/aviation-news/business-aviation/2018-09-20/gulfstream-g650-conducts-steep-approach-trials-lcy
- Simple Flying — Which Aircraft Can Land At London City Airport? — https://simpleflying.com/london-city-airport-approved-aircraft/
- Wikipedia — Rolls-Royce BR700 (BR725) — https://en.wikipedia.org/wiki/Rolls-Royce_BR700

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | Completed pack — Sim-Model, Checklist, QRH, Livery built; §8 links updated, no dead links. Sim-Model candidate researched live (AKD Studio GLF650, X-Plane 11/12); fly-by-wire handling noted throughout Checklist/QRH. |
| v0.1 | 2026-07-25 | Initial draft — built from public Wikipedia/SKYbrary/AIN data; converted stub to pack core (Intro + Dispatch); Executive-unit VIP framing; steep-approach/LCY flagged; sim model unconfirmed `[VERIFY]`; Sim-Model/Livery/Checklist/QRH left to build. |
