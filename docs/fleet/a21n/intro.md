<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  A21N Airbus A321neo family
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A21N — Airbus A321neo family · Intro

**A21N / A320 family — common type rating A319/A320/A321** · Narrowbody twin, longest-fuselage/highest-capacity single-aisle; LR/XLR sub-variants extend into long-thin ETOPS missions
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **A21N** (one designator covers all three variants below) |
| Family / type rating | A320 family — common type rating **A319/A320/A321**; Airbus FBW 🟩 |
| Variants operated | **A321neo** · **A321LR** · **A321XLR** — all share ICAO A21N and type cert; distinguished by fuel/range fit `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **CFM LEAP-1A** or **Pratt & Whitney PW1100G** (dual-source type; tail-dependent) 🟧 `[VERIFY]` |
| ICAO code letter | **C** — wingspan 35.80 m, Code C stands/gates 🟩 |
| Config (K Global, fleet-wide) | 185 pax + 4,000 kg belly `[VAMSYS mirror 2026-07-25]` — see §5 for per-variant split |
| MTOW (variant) | neo ~97,000 · LR ~97,000 · **XLR ~101,000** kg 🟧 `[VERIFY]` |
| Max fuel | neo ~26,730 L; **XLR ~32,940 L** (rear centre tank/RCT adds range) 🟧 `[VERIFY]` |
| Service ceiling | ~FL391 🟧 `[VERIFY]` |
| Typical cruise | M0.78 (max M0.82) 🟩 |
| Range (rep. payload) | neo ~3,500 NM · LR ~4,000 NM · **XLR ~4,700 NM** 🟧 `[VERIFY]` |
| ETOPS/EDTO | EDTO-capable, type certified up to 180 min; K Global rule time **120 min** — see Dispatch & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **D** / ICAO **M**; **RFF Cat 7** (length 44.51 m) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** A21N (Airbus A321neo family — neo/LR/XLR, LEAP-1A/PW1100G) → **SimBrief profile:** A21N (A321neo) → **Sim model:** ToLiss A321 (X-Plane 11) 🟧 `[VERIFY]`

The dispatch profile (SimBrief A21N) models the correct airframe/engine family and drives the OFP burn; SimBrief does not carry a distinct LR/XLR profile, so range-critical LR/XLR flights must apply the fuel/weight overrides in Dispatch §2 on top of the base A21N profile. The approved X-Plane 11 flight model — **ToLiss A321** — is a management decision, not yet formally confirmed (marked 🟧 `[VERIFY]`), the same posture as the A359/A339 packs. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network

Narrowbody twin and the **longest-fuselage, highest-capacity single-aisle** in the fleet. With 62 tails across three variants it covers the widest mission spread of any narrowbody type:

- **A321neo** (40 tails, 3 Regular · 7 Charter) — standard high-density short/medium-haul, above the A320 in capacity.
- **A321LR** (18 tails, 1 Premier) — long-thin Premier-Business missions where a widebody would be oversized.
- **A321XLR** (4 tails, 1 Premier) — the extended-range sub-variant (notable range extension via rear centre tank), reaching long-thin intercontinental-class sectors previously requiring a widebody.

Based out of the Frankfurt (EDDF) superhub and worked across the pax-hub network; sits above the A320 (shorter fuselage, lower capacity) and below the widebody fleet on trunk density, while the LR/XLR sub-fleet reaches into the widebody-twins' long-thin mission space. Shares the A320-family common type rating with the A320 and A319 packs.

## 4. Dimensions & ground footprint

- Length **44.51 m** (146 ft); wingspan **35.80 m** (117 ft 5 in, sharklet-equipped); height ~**11.76 m** (38 ft 7 in) 🟧 `[VERIFY]` — dimensions common across neo/LR/XLR (fuel/range differs, not airframe size).
- **ICAO Code C** — standard narrowbody stands/gates. 🟩
- **RFF Cat 7** (44.51 m → 39–<49 m band) — see [Fleet Capability Matrix](../capability-matrix.md) (Table D); confirm Cat 7 cover at all scheduled fields. 🟩
- Single-aisle, one main-deck passenger door per side forward/aft (plus additional overwing/optional door pair on the longer fuselage) plus overwing exits; single lower-deck belly hold. GPU/air-start and de-ice footprint per narrowbody standard.

## 5. Weights (per variant)

| Variant | MTOW (kg) | Max fuel | Range | Config |
|---|---|---|---|---|
| A321neo | ~97,000 🟧 `[VERIFY]` | ~26,730 L 🟧 `[VERIFY]` | ~3,500 NM 🟧 `[VERIFY]` | 185 pax / 4,000 kg `[VAMSYS mirror 2026-07-25]` |
| A321LR | ~97,000 🟧 `[VERIFY]` | ~32,940 L (additional centre tanks) 🟧 `[VERIFY]` | ~4,000 NM 🟧 `[VERIFY]` | `[VERIFY]` (Premier-Business config) |
| A321XLR | **~101,000** 🟧 `[VERIFY]` | **~32,940 L** (rear centre tank/RCT) 🟧 `[VERIFY]` | **~4,700 NM** 🟧 `[VERIFY]` | `[VERIFY]` (Premier-Business config) |

MZFW/MLW/OEW are variant- and fuel-fit-dependent and not yet confirmed against the VAMSYS mirror 🟧 `[VERIFY — VAMSYS weight variant]`. All three variants share the same type certificate; the LR/XLR distinction is a fuel-system/weight variant, not a separate airframe.

## 6. Performance

- Service ceiling **~FL391**; typical cruise **M0.78** (max **M0.82**) 🟧 `[VERIFY]`.
- Average fuel flow **~2.6–2.9 t/hr** (public reference; short/medium-haul cruise, heavier than A320 on comparable stage length) 🟧 `[VERIFY]` — no type-specific K Global OFP yet on file (watch-item; A21N dispatch figures are public-Airbus-derived, not OFP-verified).
- **Cost index:** set per OM E / route economics; no A21N reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** ~1,900–2,300 m TO at MTOW, sea-level ISA, dry paved (longer than A320 due to higher weight) 🟧 `[VERIFY]`.
- **Hot-and-high:** matrix rates hot/high sensitivity **Moderate** — heavier LR/XLR loads penalise hot/high TOW more than the base neo. High-elevation/high-temperature hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) drive thrust-limited takeoffs at high TOW; assess per-field, and per-variant, before scheduling long legs. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | Field length/hot-high public-derived, not OFP-verified; matrix rates sensitivity Moderate (LR/XLR heavier) |
| Range vs network trunk sectors | 🟧 | neo ~3,500 NM / LR ~4,000 NM / XLR ~4,700 NM structural — confirm against longest scheduled LR/XLR pairing |
| ETOPS/EDTO adequacy | 🟩 | Type certified to 180 min; K Global rule time 120 min — see Dispatch & matrix; LR/XLR long-thin missions are the point of the type |
| Stand / gate compatibility | 🟩 | Code letter C / RFF Cat 7 — standard narrowbody footprint |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (ToLiss A321) a management decision, unconfirmed; SimBrief has no distinct LR/XLR profile — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A321neo type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a321neo
- Airbus — A321XLR type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a321xlr
- Airbus — A320 Family Aircraft Characteristics (Airport & Maintenance Planning) — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a320
- EASA — TCDS EASA.A.064 Airbus A320 (covers A318/A319/A320/A321) — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa064-airbus-a318-a319-a320-and-a321
- SKYbrary — Airbus A321 (A321) — https://skybrary.aero/aircraft/a321
- Wikipedia — Airbus A320neo family — https://en.wikipedia.org/wiki/Airbus_A320neo_family
- Wikipedia — Airbus A321XLR — https://en.wikipedia.org/wiki/Airbus_A321XLR
- Wikipedia — CFM LEAP — https://en.wikipedia.org/wiki/CFM_International_LEAP
- Wikipedia — Pratt & Whitney PW1000G — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_PW1000G

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Airbus/EASA/SKYbrary data + VAMSYS mirror; one designator (A21N) documented across three variants (neo/LR/XLR); capability values cross-linked to the Fleet Capability Matrix; approved sim model (ToLiss A321) a management decision `[VERIFY]`. |
| v0.2 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH, Livery built; all six pack files now linked, no dead links. |
