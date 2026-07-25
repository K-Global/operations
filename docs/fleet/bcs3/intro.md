<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  BCS3 Airbus A220-300
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# BCS3 — Airbus A220-300 · Intro

**BCS3 / A220 family — separate type rating BD-500** · Smallest narrowbody twin in the mainline fleet, thin-route/regional-trunk gap-filler
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **BCS3** |
| Family / type rating | Airbus A220 family (ex-Bombardier CSeries CS300) — **separate type rating, BD-500**; Airbus fly-by-wire sidestick controls but **no Cross-Crew Qualification with the A320/A330/A350 family** — a stand-alone rating 🟩 |
| Variants operated | Airbus A220-300 (single variant in the K Global fleet) `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **Pratt & Whitney PW1500G** (geared turbofan, GTF) 🟩 |
| ICAO code letter | **C** 🟩 |
| Config (K Global) | 140 pax + 2,500 kg belly `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | up to **70.9 t** (156,000 lb, current-production MTOW option) 🟩 / ~62,600 kg 🟧 `[VERIFY]` / ~58,600 kg 🟧 `[VERIFY]` / ~40,600 kg 🟧 `[VERIFY]` |
| Max fuel | ~19,130 L 🟧 `[VERIFY]` |
| Service ceiling | FL410 🟩 |
| Typical cruise | M0.78 (max M0.82) 🟧 `[VERIFY]` |
| Range (rep. payload) | ~3,350–3,550 NM at the higher MTOW option 🟩 |
| ETOPS/EDTO | Narrowbody twin, classic ETOPS applies; K Global rule time **120 min** — see Dispatch & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **D** 🟧 (inferred, unconfirmed against the current assignment list) / ICAO **M** 🟩; **RFF Cat 6** (length 38.71 m) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** BCS3 (Airbus A220-300, PW1500G) → **SimBrief profile:** BCS3 (A220-300 / PW1500G) → **Sim model:** no X-Plane 11 model confirmed on file 🟧 `[VERIFY]`

The dispatch profile (SimBrief BCS3 / PW1500G) models the correct airframe and engine and drives the OFP burn. Unlike the A339/A359 packs, **no candidate X-Plane 11 flight model has yet been identified or approved** for the A220 — this is an open item, not a management decision pending confirmation, and is flagged 🟧 `[VERIFY]` accordingly. Any fuel-burn comparison between the SimBrief OFP and a flown model cannot be validated until a Sim-Model candidate is selected. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network

Smallest narrowbody twin in the mainline fleet — 5 tails, 140-seat config. The A220-300's combination of narrowbody-twin economics with widebody-class cabin comfort (5-abreast, wider seats) makes it the natural fit for thin/regional trunks that don't justify an A319/A320, and for slot- or runway-constrained fields where its shorter field length and Code C footprint help. It sits below the A319 (120 seats) in the Airbus narrowbody line, though its higher-MTOW range option (~3,350–3,550 NM) also allows some longer, thinner point-to-point sectors the smaller A319 could not sustain economically. Based across the pax-hub network on a case-by-case basis given the small (5-tail) fleet.

## 4. Dimensions & ground footprint

- Length **38.71 m**; wingspan **35.10 m** 🟧 `[VERIFY]`; height ~**11.50 m** 🟧 `[VERIFY]`
- **ICAO Code C** — standard narrowbody stand/gate/taxiway compatibility, no Code D/E restrictions. 🟩
- **RFF Cat 6** (38.71 m → 28–<39 m band) — see [Fleet Capability Matrix](../capability-matrix.md) (Table D); confirm Cat 6 cover at all scheduled fields. 🟩
- Single-aisle, five-abreast cabin; two passenger doors per side plus overwing exits; forward and aft lower-deck cargo compartments (belly hold, no LD3/LD6 container standard — bulk-loaded). GPU/air-start and de-ice footprint per narrowbody-twin standard.

## 5. Weights

| | kg |
|---|---|
| OEW | ~40,600 🟧 `[VERIFY]` |
| MZFW | ~58,600 🟧 `[VERIFY]` |
| MTOW | up to 70,900 (156,000 lb, current-production option) 🟩 |
| MLW | ~62,600 🟧 `[VERIFY]` |
| Max fuel | ~19,130 L 🟧 `[VERIFY]` |

The A220-300 has been offered at a series of increasing MTOW options since entry into service (63.1 t → 67.6 t → 69.9 t → 70.9 t); K Global's operating MTOW should be confirmed against the delivered/VAMSYS airframe spec 🟧 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance

- Service ceiling **FL410**; typical cruise **M0.78** (max **M0.82**) 🟧 `[VERIFY]`.
- No type-specific K Global OFP yet on file (watch-item; BCS3 dispatch figures are public-Airbus-derived, not OFP-verified).
- **Cost index:** set per OM E / route economics; no BCS3 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** public references vary by MTOW option; treat as 🟧 `[VERIFY]` until a K Global-specific figure is confirmed.
- **Hot-and-high:** matrix rates hot/high sensitivity **Low** — geared-turbofan (PW1500G) gives good thrust margin at altitude/temperature relative to older narrowbody twins. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟩

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟩 | Matrix rates sensitivity Low (GTF thrust margin); field length itself not yet OFP-verified 🟧 |
| Range vs network trunk sectors | 🟩 | ~3,350–3,550 NM at higher-MTOW option covers thin/regional and some longer point-to-point sectors |
| ETOPS/EDTO adequacy | 🟩 | Narrowbody twin — K Global rule time 120 min; see Dispatch & matrix |
| Stand / gate compatibility | 🟩 | Code letter C / RFF Cat 6 — standard narrowbody footprint, no special stand requirement |
| Type rating / crew qualification | 🟥 | **BD-500 is a stand-alone type rating** — not cross-qualified with A320/A330/A350 CCQ; crewing must schedule accordingly |
| Steep approach | 🟥 | **A220-300 is NOT steep-approach certified** (the A220-**100** is) — do not assume LCY/steep-field access; ties to OM E steep-approach deferral (matrix Table C, §Open items) |
| Modelling fidelity (sim vs real) | 🟧 | No X-Plane 11 model yet identified/approved — open item, see §2 |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A220 aircraft family page — https://www.airbus.com/en/products-services/commercial-aircraft/a220-family
- Wikipedia — Airbus A220 — https://en.wikipedia.org/wiki/Airbus_A220
- Wikipedia — Pratt & Whitney PW1000G — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_PW1000G
- Aviation Today — EASA Approves Airbus A220 for CAT III Autoland Operations — https://www.aviationtoday.com/2018/12/05/easa-approves-airbus-a220-cat-iii-autoland-operations/
- Simple Flying — Which Aircraft Can Land At London City Airport? (A220-100 vs -300 steep-approach distinction) — https://simpleflying.com/london-city-airport-approved-aircraft/
- SKYbrary — Airbus A220-300 (BCS3) — https://skybrary.aero/aircraft/bcs3

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.1 | 2026-07-25 | Pack completed — Sim-Model, Checklist, QRH and Livery built (§8 links updated, no dead links); Sim-Model confirms the honest open item (no XP11 A220-300 candidate identified); Checklist/QRH re-expressed from public type knowledge, informed by the FCOM Volume 1 systems architecture (EICAS/ECL, two-law FBW, PW1500G) — Volume 2 (limitations/procedures) not on file, so procedural sequencing is generic and flagged 🟧 throughout. |
| v0.1 | 2026-07-25 | Initial draft — built from public Airbus/Wikipedia/SKYbrary data + VAMSYS mirror; capability values cross-linked to the Fleet Capability Matrix; type rating (BD-500, no CCQ) and steep-approach exclusion (A220-300, not -100) flagged 🟥; no X-Plane 11 model yet identified (open item, not a pending management decision). |
