<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  A320 Airbus A320-200
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A320 — Airbus A320-200 · Intro

**A320 / A320 family — common type rating A319/A320/A321** · Narrowbody twin, the core short/medium-haul workhorse of the network
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **A320** |
| Family / type rating | A320 family — common type rating **A319/A320/A321** (ceo and neo share a CCQ basis); Airbus FBW 🟩 |
| Variants operated | Airbus A320-200 (single sub-type) `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **CFM56-5B** or **IAE V2500** (dual-source type; tail-dependent) 🟧 `[VERIFY]` |
| ICAO code letter | **C** — wingspan 35.80 m (sharklets), Code C stands/gates 🟩 |
| Config (K Global) | 150 pax + 8,000 kg belly `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | ~78,000 / ~66,300 / ~62,500 / ~42,600 🟧 `[VERIFY]` |
| Max fuel | ~24,210 L (~19,050 kg) 🟧 `[VERIFY]` |
| Service ceiling | ~FL398 🟧 `[VERIFY]` |
| Typical cruise | M0.78 (max M0.82) 🟩 |
| Range (rep. payload) | ~3,300 NM 🟧 `[VERIFY]` |
| ETOPS/EDTO | EDTO-capable, type certified up to 180 min; K Global rule time **120 min** — see Dispatch & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **D** / ICAO **M**; **RFF Cat 6** (length 37.57 m) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** A320 (Airbus A320-200, CFM56-5B/V2500) → **SimBrief profile:** A320 (A320-200) → **Sim model:** ToLiss A320 (X-Plane 11) 🟧 `[VERIFY]`

The dispatch profile (SimBrief A320) models the correct airframe/engine family and drives the OFP burn. The approved X-Plane 11 flight model — **ToLiss A320** — is a management decision, not yet formally confirmed (marked 🟧 `[VERIFY]`), the same posture as the A359/A339 packs. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network

Narrowbody twin and the **core short/medium-haul workhorse**. With 50 tails it is the largest single-variant narrowbody fleet at K Global — the standard density/range balance for domestic and regional trunk routes out of the Frankfurt (EDDF) superhub and the wider pax-hub network. Sits below the A21N (longer-fuselage, higher-capacity, longer-range Premier/Regular missions) and above the A319 (thinner, shorter sectors); shares the A320-family common type rating with both, giving crew-scheduling flexibility across the three narrowbody types.

## 4. Dimensions & ground footprint

- Length **37.57 m** (123 ft 3 in); wingspan **35.80 m** (117 ft 5 in, sharklet-equipped); height ~**11.76 m** (38 ft 7 in) 🟧 `[VERIFY]`
- **ICAO Code C** — standard narrowbody stands/gates; no wingspan-restricted taxiway concerns typical of widebodies. 🟩
- **RFF Cat 6** (37.57 m → 28–<39 m band) — see [Fleet Capability Matrix](../capability-matrix.md) (Table D); confirm Cat 6 cover at all scheduled fields. 🟩
- Single-aisle, one main-deck passenger door per side forward/aft plus overwing exits; single lower-deck belly hold (bulk + limited container capability). GPU/air-start and de-ice footprint per narrowbody standard.

## 5. Weights

| | kg |
|---|---|
| OEW | ~42,600 🟧 `[VERIFY]` |
| MZFW | ~62,500 🟧 `[VERIFY]` |
| MTOW | ~78,000 🟧 `[VERIFY]` |
| MLW | ~66,300 🟧 `[VERIFY]` |
| Max fuel | ~19,050 (~24,210 L) 🟧 `[VERIFY]` |

K Global operates the standard A320-200 weight variant; higher-MTOW weight variants exist across the type certificate and should be confirmed against the VAMSYS mirror before use in performance planning 🟧 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance

- Service ceiling **~FL398**; typical cruise **M0.78** (max **M0.82**) 🟧 `[VERIFY]`.
- Average fuel flow **~2.4–2.6 t/hr** (public reference; short/medium-haul cruise) 🟧 `[VERIFY]` — no type-specific K Global OFP yet on file (watch-item; A320 dispatch figures are public-Airbus-derived, not OFP-verified).
- **Cost index:** set per OM E / route economics; no A320 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** ~1,700–2,100 m TO at MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]`.
- **Hot-and-high:** matrix rates hot/high sensitivity **Low–moderate** (neo/thrust-variant dependent). High-elevation/high-temperature hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) can still drive thrust-limited takeoffs at high TOW on short/thin sectors; assess per-field before scheduling. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Field length/hot-high public-derived, not OFP-verified; matrix rates sensitivity Low–moderate |
| Range vs network trunk sectors | 🟩 | ~3,300 NM structural covers the short/medium-haul trunk set |
| ETOPS/EDTO adequacy | 🟩 | Type certified to 180 min; K Global rule time 120 min — see Dispatch & matrix |
| Stand / gate compatibility | 🟩 | Code letter C / RFF Cat 6 — standard narrowbody footprint |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (ToLiss A320) a management decision, unconfirmed — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A320 type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a320
- Airbus — A320 Family Aircraft Characteristics (Airport & Maintenance Planning) — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a320
- EASA — TCDS EASA.A.064 Airbus A320 — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa064-airbus-a318-a319-a320-and-a321
- SKYbrary — Airbus A320 (A320) — https://skybrary.aero/aircraft/a320
- Wikipedia — Airbus A320 family — https://en.wikipedia.org/wiki/Airbus_A320_family
- Wikipedia — CFM International CFM56 — https://en.wikipedia.org/wiki/CFM_International_CFM56
- Wikipedia — IAE V2500 — https://en.wikipedia.org/wiki/IAE_V2500

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Airbus/EASA/SKYbrary data + VAMSYS mirror; capability values cross-linked to the Fleet Capability Matrix; approved sim model (ToLiss A320) a management decision `[VERIFY]`. |
| v0.2 | 2026-07-25 | Pack completed — Sim-Model, Checklist, QRH and Livery built (cloning the A339 pack pattern, informed by the A320-family normal checklist re-expressed, never copied); §8 links updated to all six built files. |
