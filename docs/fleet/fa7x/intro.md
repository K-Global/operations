<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  FA7X Dassault Falcon 7X
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# FA7X — Dassault Falcon 7X · Intro

**FA7X / Dassault Falcon 7X** · Large-cabin business jet, Executive unit (VIP / charter-style operation)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix **secondary (indicative) table**, which covers this type at 🟧 confidence. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **FA7X** |
| Family / type rating | Dassault Falcon 7X — a distinct type rating from the later, longer-fuselage Falcon 8X (not operated by K Global) 🟩 |
| Variants operated | Dassault Falcon 7X (single sub-type) `[VAMSYS mirror 2026-07-25]` |
| Engines | **3 × Pratt & Whitney Canada PW307A — a TRIJET** 🟩 — the unusual three-engine layout is this type's defining feature in the K Global fleet; no other operated type carries three engines except the deferred MD-11F |
| Flight controls | **Fly-by-wire** 🟩 — a digital FBW flight control system, notable as one of the first business jets so equipped |
| Flight deck | Dassault EASy (Honeywell Primus Epic-based integrated avionics) 🟩 |
| ICAO code letter | **C** — wingspan 26.21 m (24–<36 m band) 🟩 |
| Config (K Global) | ~12–16 pax VIP configuration, Executive unit `[VERIFY — VAMSYS]` |
| MTOW / BOW / Max payload | ~31,751 kg (70,000 lb) / ~16,601 kg (36,600 lb) / ~1,996 kg (4,400 lb) 🟩 |
| Max fuel | ~14,488 kg (31,940 lb) 🟩 |
| Service ceiling | **FL510** (51,000 ft) 🟩 |
| Typical cruise | M0.80 (max **M0.90**) 🟩 |
| Range (8 pax) | **~5,950 NM** 🟩 |
| ETOPS/EDTO | Trijet (3 engines) — **not** a classic-ETOPS twin construct; **no K Global operator rule time is established for this type** — see Dispatch §5 and the matrix secondary table |
| Steep approach / London City (EGLC) 🟥 | 🟧 **Flagged prominently** — the Falcon 7X is commonly cited in business-aviation sources as a realistic candidate for London City-class steep/short fields; **not operator-approved** and not independently confirmed to a primary certification source in this pass. Directly relevant to the OM E steep-approach deferral (no mainline type is steep-certified) — see §3 and Dispatch §5 |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) secondary table — 🟧 indicative throughout (RECAT-EU **F**, ICAO wake **M–L**); RFF **Cat 4** (length 23.38 m, 18–<24 m band) 🟧 computed from public length, confirm against the operator ARFF category record |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** FA7X (Dassault Falcon 7X, 3 × PW307A) → **SimBrief profile:** Falcon 7X (FA7X) 🟧 `[VERIFY — confirm exact SimBrief profile availability/defaults]` → **Sim model:** approved X-Plane 11 add-on **not yet confirmed** 🟧 `[VERIFY]`

No study-level X-Plane 11 Falcon 7X model has been confirmed as the K Global-approved add-on; this is an open management decision, the same posture as the widebody fleet's unconfirmed sim-model items (e.g. A388, A346). The dispatch profile should model the correct trijet/PW307A airframe and drive the OFP burn; any fuel-burn comparison between the SimBrief OFP and the eventual flown model must be validated in a Sim-Model file (to build) before this pack is Verified.

## 3. Role in the network

Large-cabin business jet operated by the **Executive** unit for VIP/charter-style missions — on-demand point-to-point work rather than the scheduled trunk-route pattern of the mainline fleet. With 2 tails it is one of the smallest sub-fleets at K Global, sitting alongside the Gulfstream G650ER/G550 pair as the long-range end of the business-jet group; the Challenger 300 (`CL30`) covers the shorter-range super-midsize segment beneath it.

**Trijet significance 🟩:** the three-engine PW307A layout is unique among K Global's operated types (only the deferred MD-11F freighter also carries three engines). Practically, it gives the type an extra powerplant over the twin-engine bizjets in the fleet, which is operationally relevant to engine-out planning and to how EDTO/diversion-time concepts apply (see Dispatch §5) — though K Global has **not** established an operator rule time for it, and this should not be read as an ETOPS-style approval.

**Steep approach / London City candidacy 🟧:** per the OM E Steep Approach Operations doc (`../../../OM E Operations/Steep Approach Operations.md`) and the Fleet Capability Matrix secondary table, no mainline K Global type is steep-approach certified, and the LCY/steep-field network solution is expected to be built around the Embraer E190/E195. That same doc explicitly notes several business-jet types — **Falcon 7X, Challenger/Legacy-class, Gulfstream** — as commonly LCY/steep-approach-capable in the wider market and worth carrying as a fallback/parallel option. This pack records the Falcon 7X's candidacy prominently for that reason; it is **not** an operator approval, and the specific EGLC/steep-approach certification has not been confirmed against a primary Dassault/EASA source in this build pass — flagged 🟧 `[VERIFY]` and left as an open item for OM E when the steep-approach decision is revisited.

## 4. Dimensions & ground footprint

- Length **23.38 m** (76.08 ft); wingspan **26.21 m** (86 ft); height **7.83 m** (25.67 ft) 🟩
- **ICAO Code C** (24–<36 m wingspan band) — standard business-jet/Code C stand footprint; no wingspan-restricted taxiway concerns. 🟩
- **RFF Cat 4** (23.38 m → 18–<24 m band per ICAO Annex 14) 🟧 computed from the public length figure; confirm against each field's ARFF category assignment for this type, especially at fields near the 24 m band boundary.
- Cabin: 2.34 m width, 1.88 m headroom, 11.91 m cabin length; typical 12–16 passenger configurations; forward/aft lavatories, full galley. Two-pilot flight deck (crew of two) plus cabin crew per K Global VIP-ops standard.

## 5. Weights

| | kg |
|---|---|
| BOW (basic operating weight) | ~16,601 🟩 |
| MTOW | ~31,751 🟩 |
| Max payload | ~1,996 🟩 |
| Max fuel | ~14,488 (~31,940 lb) 🟩 |

K Global operates the standard Falcon 7X variant (not the later, larger Falcon 8X). Individual tail weight variants/options (e.g. cabin fit-out, avionics options) should be confirmed against the VAMSYS mirror before use in performance planning 🟧 `[VERIFY — VAMSYS weight variant]`.

## 6. Performance

- Service ceiling **FL510** (51,000 ft); typical cruise **M0.80** (max **M0.90**) 🟩 — notably high for a business jet, close to the fastest in class.
- Average cruise fuel burn **~2,250 lb/hr (~1.02 t/hr)** (public reference); first-hour burn (climb-inclusive) **~4,000 lb** 🟧 — no K Global type-specific reference OFP yet on file (watch-item).
- **Cost index:** set per OM E / mission economics; no FA7X reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** takeoff balanced field length **~1,740 m** (5,710 ft); landing distance **~631 m** (2,070 ft) 🟩 — short-field performance is a type strength, relevant to the steep/short-field candidacy noted in §3.
- **Hot-and-high / short-field:** the type's structural efficiency (BOW roughly half MTOW) and short-field figures above suggest favourable hot-and-high and short-runway performance versus comparable bizjets, but this has **not** been assessed against K Global's specific network fields 🟧 — treat as an open item, not a cleared capability.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Trijet configuration (3 × PW307A) | 🟩 | Confirmed type fact; unique among K Global's operated types bar the deferred MD-11F |
| Fly-by-wire flight controls | 🟩 | Confirmed type fact (digital FBW) |
| Range vs typical Executive-unit missions | 🟩 | ~5,950 NM (8 pax) comfortably covers long-range VIP/charter sectors |
| EDTO/diversion-time approach | 🟧 | Trijet — no classic twin-ETOPS construct applies as-is; no K Global operator rule time established; do not assume one — see Dispatch §5 |
| Steep approach / London City (EGLC) capability | 🟧 | Prominently flagged per the task brief and the OM E Steep Approach doc's own candidate list; **not** independently confirmed to a primary certification source in this pass; not operator-approved |
| Stand / gate compatibility | 🟩 | Code letter C / RFF Cat 4 (computed) — standard business-jet footprint |
| Modelling fidelity (sim vs real) | 🟧 | No confirmed X-Plane 11 add-on on file — approved sim model is an open management decision |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values (secondary indicative table)](../capability-matrix.md) · Steep Approach policy: `../../../OM E Operations/Steep Approach Operations.md`

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Dassault Aviation / Dassault Falcon — Falcon 7X aircraft page — https://www.dassaultfalcon.com/aircraft/falcon-7x
- Wikipedia — Dassault Falcon 7X (dimensions, weights, range, PW307A, EASA/FAA type certificates) — https://en.wikipedia.org/wiki/Dassault_Falcon_7X
- EASA — Type Certificate Data Sheet A155 (Dassault Falcon 7X) — https://www.easa.europa.eu/en/document-library/type-certificates
- FAA — Type Certificate Data Sheet A59NM (Dassault Falcon 7X) — https://www.faa.gov/aircraft/air_cert/design_approvals/media
- SKYbrary — Steep Approach (definition, certification concept) — https://skybrary.aero/articles/steep-approach
- Simple Flying — Which Aircraft Can Land At London City Airport? (steep-approach airframe landscape) — https://simpleflying.com/london-city-airport-approved-aircraft/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — pack core (Intro) built from public Dassault/Wikipedia/EASA data + VAMSYS mirror; trijet (3×PW307A) and fly-by-wire flagged as confirmed type facts; steep-approach/London City candidacy flagged prominently per the OM E steep-approach deferral, tagged 🟧 `[VERIFY]` (not independently confirmed to a primary certification source); capability values cross-linked to the Fleet Capability Matrix secondary (indicative) table; approved sim model an open management decision. |
| v0.1 | 2026-07-25 | §8 updated — Sim-Model, Checklist, QRH and Livery built; pack core complete. Sim-Model records an honest research finding (no Falcon 7X X-Plane 11 add-on identified); Checklist/QRH re-express real-aircraft flow with three-engine-handling and EASy II/DFCS content, memory items 🟥; Livery records the 2-tail D-AK register, house scheme pending. |
