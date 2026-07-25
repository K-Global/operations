<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  A319 Airbus A319-100
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A319 — Airbus A319-100 · Intro

**A319 / A320 family — common type rating A319/A320/A321** · Narrowbody twin, the smallest/thinnest-sector frame in the mainline fleet
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **A319** |
| Family / type rating | A320 family — common type rating **A319/A320/A321**; Airbus FBW 🟩 |
| Variants operated | Airbus A319-100 (single sub-type) `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **CFM56-5B** or **IAE V2500** (dual-source type; tail-dependent) 🟧 `[VERIFY]` |
| ICAO code letter | **C** — wingspan 35.80 m (sharklets), Code C stands/gates 🟩 |
| Config (K Global) | 120 pax + 7,500 kg belly `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | ~75,500 / ~62,500 / ~57,900 / ~40,800 🟧 `[VERIFY]` |
| Max fuel | ~24,210 L (~19,050 kg — same tank as A320 family) 🟧 `[VERIFY]` |
| Service ceiling | ~FL410 🟧 `[VERIFY]` |
| Typical cruise | M0.78 (max M0.82) 🟩 |
| Range (rep. payload) | ~3,700 NM 🟧 `[VERIFY]` |
| ETOPS/EDTO | EDTO-capable, type certified up to 180 min; K Global rule time **120 min** — see Dispatch & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **D** / ICAO **M**; **RFF Cat 6** (length 33.84 m) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** A319 (Airbus A319-100, CFM56-5B/V2500) → **SimBrief profile:** A319 (A319-100) → **Sim model:** ToLiss A319 (X-Plane 11) 🟧 `[VERIFY]`

The dispatch profile (SimBrief A319) models the correct airframe/engine family and drives the OFP burn. The approved X-Plane 11 flight model — **ToLiss A319** — is a management decision, not yet formally confirmed (marked 🟧 `[VERIFY]`), the same posture as the A359/A339 packs. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network

Narrowbody twin and the **smallest/thinnest-sector frame** in the mainline fleet. With only 6 tails it is a minority type used for the thinnest routes and lowest-demand pairings that would under-fill an A320/A21N — lighter than the rest of the A320 family, giving a higher service ceiling and longer relative range for its size. Based out of the Frankfurt (EDDF) superhub; sits below the A320 in capacity. Shares the A320-family common type rating with the A320 and A21N packs, giving crew-scheduling flexibility across all three narrowbody types.

## 4. Dimensions & ground footprint

- Length **33.84 m** (111 ft 0 in); wingspan **35.80 m** (117 ft 5 in, sharklet-equipped); height ~**11.76 m** (38 ft 7 in) 🟧 `[VERIFY]`
- **ICAO Code C** — standard narrowbody stands/gates. 🟩
- **RFF Cat 6** (33.84 m → 28–<39 m band) — see [Fleet Capability Matrix](../capability-matrix.md) (Table D); confirm Cat 6 cover at all scheduled fields. 🟩
- Single-aisle, one main-deck passenger door per side forward/aft plus overwing exits; single lower-deck belly hold (bulk + limited container capability). GPU/air-start and de-ice footprint per narrowbody standard.

## 5. Weights

| | kg |
|---|---|
| OEW | ~40,800 🟧 `[VERIFY]` |
| MZFW | ~57,900 🟧 `[VERIFY]` |
| MTOW | ~75,500 🟧 `[VERIFY]` |
| MLW | ~62,500 🟧 `[VERIFY]` |
| Max fuel | ~19,050 (~24,210 L) 🟧 `[VERIFY]` |

K Global operates the higher-MTOW A319-100 weight variant; lower-MTOW weight variants exist across the type certificate and should be confirmed against the VAMSYS mirror before use in performance planning 🟧 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance

- Service ceiling **~FL410** (higher than the A320/A21N due to lower weight); typical cruise **M0.78** (max **M0.82**) 🟧 `[VERIFY]`.
- Average fuel flow **~2.2–2.4 t/hr** (public reference; short/medium-haul cruise, lighter than A320) 🟧 `[VERIFY]` — no type-specific K Global OFP yet on file (watch-item; A319 dispatch figures are public-Airbus-derived, not OFP-verified).
- **Cost index:** set per OM E / route economics; no A319 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** ~1,600–2,000 m TO at MTOW, sea-level ISA, dry paved (shortest field requirement in the family) 🟧 `[VERIFY]`.
- **Hot-and-high:** matrix rates hot/high sensitivity **Low** — light for its thrust; performs well hot/high relative to the rest of the family. High-elevation/high-temperature hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) still warrant a per-field check on thin, low-frequency routes. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟩

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟩 | Field length/hot-high public-derived, not OFP-verified; matrix rates sensitivity Low (best in family) |
| Range vs network trunk sectors | 🟩 | ~3,700 NM structural covers the thin/short-haul niche this type serves |
| ETOPS/EDTO adequacy | 🟩 | Type certified to 180 min; K Global rule time 120 min — see Dispatch & matrix |
| Stand / gate compatibility | 🟩 | Code letter C / RFF Cat 6 — standard narrowbody footprint |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (ToLiss A319) a management decision, unconfirmed — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A319 type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a319
- Airbus — A320 Family Aircraft Characteristics (Airport & Maintenance Planning) — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a320
- EASA — TCDS EASA.A.064 Airbus A320 (covers A318/A319/A320/A321) — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa064-airbus-a318-a319-a320-and-a321
- SKYbrary — Airbus A319 (A319) — https://skybrary.aero/aircraft/a319
- Wikipedia — Airbus A320 family — https://en.wikipedia.org/wiki/Airbus_A320_family
- Wikipedia — CFM International CFM56 — https://en.wikipedia.org/wiki/CFM_International_CFM56
- Wikipedia — IAE V2500 — https://en.wikipedia.org/wiki/IAE_V2500

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Airbus/EASA/SKYbrary data + VAMSYS mirror; capability values cross-linked to the Fleet Capability Matrix; approved sim model (ToLiss A319) a management decision `[VERIFY]`. |
| v0.1.1 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH, Livery built; all six pack files now linked, no dead links. |
