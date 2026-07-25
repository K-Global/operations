<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  B738 Boeing 737-800
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# B738 — Boeing 737-800 · Intro

**B738 / 737 Next Generation family** · Narrowbody twin, Boeing's core short/medium-haul workhorse
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **B738** |
| Family / type rating | Boeing 737 Next Generation (737NG: -600/-700/-800/-900) — common Boeing 737 type rating group 🟧 `[VERIFY]`; **Boeing FMC/CDU flight deck philosophy, not Airbus fly-by-wire/sidestick** — yoke-and-column controls 🟩 |
| Variants operated | Boeing 737-800 (single variant in the K Global fleet) `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | **CFM International CFM56-7B** 🟩 |
| ICAO code letter | **C** 🟩 |
| Config (K Global) | 189 pax + 5,000 kg belly `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | 79,016 kg (174,200 lb) 🟩 / ~66,360 kg 🟧 `[VERIFY]` / ~62,732 kg 🟧 `[VERIFY]` / 41,413 kg 🟩 |
| Max fuel | 26,020 L 🟩 |
| Service ceiling | 41,000 ft (FL410) 🟩 |
| Typical cruise | M0.785 (max M0.82) 🟩 |
| Range (rep. payload) | ~2,935 NM (structural, typical two-class payload) 🟩 |
| ETOPS/EDTO | Narrowbody twin, classic ETOPS applies; K Global rule time **120 min** — see Dispatch & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **D** 🟩 / ICAO **M** 🟩; **RFF Cat 7** (length 39.5 m) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** B738 (Boeing 737-800, CFM56-7B) → **SimBrief profile:** B738 (737-800 / CFM56-7B) → **Sim model:** freeware Zibo 737-800X (X-Plane 11) 🟧 `[VERIFY]`

The dispatch profile (SimBrief B738 / CFM56-7B) models the correct airframe and engine and drives the OFP burn. The candidate X-Plane 11 flight model — the widely-used **Zibo 737-800X freeware mod** — is a management decision, not yet formally confirmed (marked 🟧 `[VERIFY]`), the same posture as the A339/A359 packs. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network

Narrowbody twin and Boeing's core short/medium-haul workhorse — a small (3-tail) fleet at K Global, complementing the much larger Airbus A319/A320/A21N narrowbody line with a Boeing-flight-deck option for crew and route flexibility. At 189 seats it sits above the A320 (150 seats) and below the A21N (185 seats) in capacity, with a similar structural range (~2,935 NM) suited to short/medium-haul trunk and secondary-market flying rather than the network's long-haul widebody core.

## 4. Dimensions & ground footprint

- Length **39.5 m** (129 ft 6 in) 🟩; wingspan **35.79 m** with winglets / 34.32 m without 🟩; height ~**12.5 m** 🟧 `[VERIFY]`
- **ICAO Code C** — standard narrowbody stand/gate/taxiway compatibility, no Code D/E restrictions. 🟩
- **RFF Cat 7** (39.5 m → 39–<49 m band) — see [Fleet Capability Matrix](../capability-matrix.md) (Table D); confirm Cat 7 cover at all scheduled fields. 🟩
- Single-aisle, six-abreast cabin; two passenger doors per side plus overwing exits; forward and aft lower-deck cargo compartments (belly hold). GPU/air-start and de-ice footprint per narrowbody-twin standard.

## 5. Weights

| | kg |
|---|---|
| OEW | 41,413 🟩 |
| MZFW | ~62,732 🟧 `[VERIFY]` |
| MTOW | 79,016 (174,200 lb) 🟩 |
| MLW | ~66,360 🟧 `[VERIFY]` |
| Max fuel | 26,020 L 🟩 |

K Global operates the standard 737-800 baseline weight variant; confirm against VAMSYS whether any higher-MTOW or short-field-performance option is fitted to the delivered tails 🟧 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance

- Service ceiling **41,000 ft**; typical cruise **M0.785** (max **M0.82**) 🟩.
- Long-range cruise burn publicly reported at ~2,010 kg/hr at M0.785/FL410, rising to ~2,096–2,155 kg/hr at M0.80–0.82 🟧 `[VERIFY]` — no type-specific K Global OFP yet on file (watch-item; B738 dispatch figures are public-Boeing-derived, not OFP-verified).
- **Cost index:** set per OM E / route economics; no B738 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** takeoff run ~2,316 m (7,598 ft) at MTOW, sea-level ISA, dry paved 🟩.
- **Hot-and-high:** CFM56-7B is thrust-limited relative to newer geared-turbofan/LEAP-class engines — matrix rates hot/high sensitivity **Moderate**. High-elevation/high-temperature hubs still drive thrust-limited takeoffs at high TOW; assess per-field before scheduling. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Hot-and-high / field performance | 🟧 | CFM56-7B thrust-limited at high/hot fields at high TOW; matrix rates sensitivity Moderate |
| Range vs network trunk sectors | 🟩 | ~2,935 NM structural covers short/medium-haul trunk and secondary-market sectors |
| ETOPS/EDTO adequacy | 🟩 | Narrowbody twin — K Global rule time 120 min; type certified up to 180 min (up to 207 with approval); see Dispatch & matrix |
| Stand / gate compatibility | 🟩 | Code letter C / RFF Cat 7 — standard narrowbody footprint |
| LVO capability | 🟧 | Type CAT IIIB capability is HUD-/dual-channel-dependent; K Global operator minima set at **CAT I** pending confirmation of delivered fail-operational configuration — see matrix Table C |
| Modelling fidelity (sim vs real) | 🟧 | Candidate X-Plane 11 model (Zibo 737-800X) a management decision, unconfirmed — see Sim-Model |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Boeing — 737 family / 737-800 technical characteristics — https://www.boeing.com/commercial/737ng
- Wikipedia — Boeing 737 Next Generation — https://en.wikipedia.org/wiki/Boeing_737_Next_Generation
- Wikipedia — CFM International CFM56 — https://en.wikipedia.org/wiki/CFM_International_CFM56
- SKYbrary — Boeing 737-800 (B738) — https://skybrary.aero/aircraft/b738

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.1 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH and Livery built; pack now complete (all six files), no dead links. |
| v0.1 | 2026-07-25 | Initial draft — built from public Boeing/Wikipedia/SKYbrary data + VAMSYS mirror; capability values cross-linked to the Fleet Capability Matrix; candidate sim model (Zibo 737-800X) a management decision `[VERIFY]`; LVO CAT I (HUD-dependent fail-operational status unconfirmed) noted per matrix. |
