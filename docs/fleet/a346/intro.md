<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  A346 Airbus A340-600
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# A346 — Airbus A340-600 · Intro

**A346 / A340 family — separate A340 type rating** · Four-engine long-fuselage widebody, the long/thin ultra-range frame with no ETOPS diversion limit
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **A346** |
| Family / type rating | A340 family — **separate A340 type rating** (Airbus FBW; the A340-500/600 is its own rating, **not** the A330/A350 common rating) 🟩 |
| Variants operated | Airbus A340-600 (type cert **A340-642 / -643**) `[VAMSYS mirror 2026-07-25]` 🟧 `[VERIFY]` |
| Engines (modelled) | **Four × Rolls-Royce Trent 556** 🟩 |
| ICAO code letter | **E** — wingspan **63.45 m**, Code E stands/gates only 🟩 `[VERIFY]` |
| Config (K Global) | A340-600: **368 pax + 40,000 kg belly** `[VAMSYS mirror 2026-07-25]` |
| MTOW / MLW / MZFW / OEW | ~380,000 / ~265,000 / ~245,000 / ~177,000 🟧 `[VERIFY]` |
| Max fuel | ~156 t (~194,900 L) 🟧 `[VERIFY]` |
| Service ceiling | ~FL410 🟧 `[VERIFY]` |
| Typical cruise | M0.83 (max M0.86) 🟧 `[VERIFY]` |
| Range (rep. payload) | ~7,900 NM 🟧 `[VERIFY]` |
| ETOPS/EDTO | **Quad — no ETOPS diversion-time limit; ICAO EDTO adequate-aerodrome concept applies (2+ engines)** — see Dispatch & matrix |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) — RECAT-EU **B (Upper Heavy)** / ICAO **H (Heavy)**; **RFF Cat 9** (length **75.36 m**, 61–<76 m band) 🟩 |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** A346 (Airbus A340-600, Trent 556) → **SimBrief profile:** A346 (A340-600) → **Sim model:** X-Plane 11 A340-600 add-on (candidate model TBC) 🟧 `[VERIFY]`

The dispatch profile (SimBrief A346 / Trent 556) models the correct airframe and engine and drives the OFP burn. The approved X-Plane 11 flight model is a management decision, **not yet confirmed** (marked 🟧 `[VERIFY]`), the same posture as the A339/A359 packs. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network
Four-engine long-fuselage widebody and the **long/thin ultra-range frame**. With 11 tails and 368 seats it fills a niche above the A359 on the very longest, thinner premium trunks where a quad's routing freedom (no ETOPS diversion-time limit) and long legs are wanted but the A388's 555 seats would not fill. Based out of the Frankfurt (EDDF) superhub and worked across the pax-hub network; sits between the twin widebodies (A359/A339) and the A388 flagship. As a quad it carries **no ETOPS diversion-time limit** (see §7 and Dispatch §5), which opens remote/oceanic tracks — but the **very long fuselage** (75.36 m, the longest airframe in the fleet) drives tail-strike sensitivity on rotation/flare and a RFF Cat 9 requirement.

## 4. Dimensions & ground footprint
- Length **75.36 m** (247 ft 3 in) — **the longest airframe in the fleet**; wingspan **63.45 m** (208 ft 2 in); height ~**17.30 m** (56 ft 9 in) 🟧 `[VERIFY]`
- **ICAO Code E** 🟩 — wingspan 63.45 m parks only on Code E-capable stands/taxiways; watch wingspan-restricted taxiways and turn/pushback limits at constrained hubs.
- **Long-fuselage handling** 🟧 — at 75.36 m the type is **tail-strike sensitive** on rotation and flare; long-fuselage geometry also affects taxiway fillet/turn clearances and pushback. Brief pitch-limit / tail-strike awareness for the type.
- **RFF Cat 9** 🟩 — length 75.36 m falls in the ICAO Cat 9 band (61–<76 m) — see [Fleet Capability Matrix](../capability-matrix.md) (Table D); confirm Cat 9 cover at all scheduled fields (note the length sits near the top of the Cat 9 band).
- Twin-aisle single main-deck cabin, multiple doors per side; forward and aft lower-deck cargo (LD3/containerised belly) plus bulk hold. GPU/air-start and de-ice footprint per long widebody standard.

## 5. Weights
| | kg |
|---|---|
| OEW | ~177,000 🟧 `[VERIFY]` |
| MZFW | ~245,000 🟧 `[VERIFY]` |
| MTOW | ~380,000 🟧 `[VERIFY]` |
| MLW | ~265,000 🟧 `[VERIFY]` |
| Max fuel | ~156,000 (~194,900 L) 🟧 `[VERIFY]` |

K Global operates the A340-600 on the long/thin ultra-range trunks; the exact weight variant is pending confirmation against VAMSYS 🟧 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance
- Service ceiling **~FL410**; typical cruise **M0.83** (max **M0.86**) 🟧 `[VERIFY]`.
- Average fuel flow is comparatively high for the seat count (four Trent 556, heavy long-fuselage airframe) — no type-specific K Global OFP yet on file (watch-item; A346 dispatch figures are public-derived, not OFP-verified). 🟧
- **Cost index:** set per OM E / route economics; no A346 reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** long — the type needs substantial runway at MTOW; ~3,000 m class TO at MTOW, sea-level ISA, dry paved 🟧 `[VERIFY]`.
- **Hot-and-high:** the matrix rates hot/high sensitivity **High** — the quad is historically thrust-limited and carries a **notable hot/high payload penalty**. High-elevation/high-temperature hubs (FAOR 5,558 ft, HAAB ~7,600 ft, NBO ~5,300 ft) drive thrust-limited takeoffs; assess per-field before scheduling long legs — the A346 is more penalised here than the A359/A339. See [Fleet Capability Matrix](../capability-matrix.md) (Table D). 🟧

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| **Hot-and-high / field performance** | 🟧 | Matrix rates sensitivity **High** — quad, thrust-limited, notable hot/high payload penalty; long field at MTOW; public-derived, not OFP-verified |
| Long-fuselage / tail-strike | 🟧 | 75.36 m — longest airframe in the fleet; tail-strike sensitivity on rotation/flare; taxiway turn/fillet clearances |
| Range vs network trunk sectors | 🟧 | ~7,900 NM structural covers the long/thin trunk set `[VERIFY]` |
| Stand / gate compatibility | 🟩 | Code letter **E** / **RFF Cat 9** — confirm Code E stands + Cat 9 RFF at all scheduled fields |
| ETOPS/EDTO adequacy | 🟩 | **Quad — no ETOPS diversion-time limit; ICAO EDTO adequate-aerodrome concept applies (2+ engines)** — see Dispatch & matrix |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model unconfirmed — see Sim-Model |

## 8. Related pack files
**Built:** [Intro](intro.md) · [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Airbus — A340 type page — https://www.aircraft.airbus.com/en/previous-aircraft/a340
- Airbus — A340-500/-600 Aircraft Characteristics (Airport & Maintenance Planning) — https://www.aircraft.airbus.com/en/previous-aircraft/a340
- EASA — TCDS EASA.A.015 Airbus A340 — https://www.easa.europa.eu/en/document-library/type-certificates
- SKYbrary — Airbus A340-600 (A346) — https://skybrary.aero/aircraft/a346
- Wikipedia — Airbus A340 — https://en.wikipedia.org/wiki/Airbus_A340
- Wikipedia — Rolls-Royce Trent 500 — https://en.wikipedia.org/wiki/Rolls-Royce_Trent_500

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Airbus/EASA/SKYbrary data + VAMSYS mirror; capability values cross-linked to the Fleet Capability Matrix; four-engine / long-fuselage (75.36 m, RFF Cat 9, tail-strike) called out; quad EDTO stated as adequate-aerodrome concept (no ETOPS diversion-time limit); **separate A340 type rating** (not A330/A350) noted; approved X-Plane 11 model open 🟧 `[VERIFY]`. |
