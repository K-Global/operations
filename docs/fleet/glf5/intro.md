<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  GLF5 Gulfstream G550
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# GLF5 — Gulfstream G550 · Intro

**GLF5 / Gulfstream GV-SP family** · Ultra-long-range large-cabin business jet, Executive-unit VIP fleet
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. This is a business-jet pack — Executive-unit VIP operating paradigm, not mainline pax/cargo scheduling; ETOPS/EDTO rule-time concepts do not apply the way they do to the mainline fleet (see §6 and Dispatch §5). Capability values (RVSM, PBN, LVO, RECAT, RFF) sit in the Fleet Capability Matrix's **secondary indicative table** (🟧 throughout, not yet researched to mainline standard) — see [Fleet Capability Matrix](../capability-matrix.md). Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **GLF5** |
| Family / certification basis | Gulfstream **GV-SP** type certificate; marketed as **G550** (a reduced-fuel-capacity sibling, the G500, also exists on the same basis but is not operated by K Global) 🟩 |
| Variants operated | Gulfstream G550 (single sub-type) `[VERIFY — VAMSYS]` |
| Engines | 2 × **Rolls-Royce BR710** C4-11, **15,385 lbf (68.44 kN)** each 🟩 |
| ICAO code letter | **C** — wingspan 28.50 m (24–<36 m band) 🟩 |
| Config (K Global) | VIP — indicative 14–19 pax (2 pilots + 0–2 cabin attendants), exact cabin config pending VAMSYS reseed `[VERIFY — VAMSYS]`; unit **Executive** |
| MTOW | **91,000 lb / ~41,277 kg** 🟩 |
| OEW (empty weight) | **48,300 lb / ~21,909 kg** 🟩 |
| Gross weight (published) | 54,500 lb / ~24,721 kg 🟧 `[VERIFY — terminology ambiguous; may approximate MZFW, not separately confirmed]` |
| MLW | **75,300 lb / ~34,156 kg** 🟩 |
| Max fuel | **41,300 lb / ~18,733 kg** 🟩 |
| Service ceiling | **FL510** 🟩 |
| Typical cruise | High-speed cruise **M0.85**; long-range cruise **M0.80**; max operating **M0.885** 🟩 |
| Range (rep. payload) | **~6,750 NM** 🟩 |
| Long-range over-water capability | Ultra-long-range twin — routinely flies intercontinental/transoceanic sectors without an intermediate stop; **not dispatched under an ETOPS/EDTO rule-time framework** (private/Executive VIP ops paradigm, not scheduled mainline ops) — see §6 & Dispatch §5 |
| Steep approach / LCY capability | 🟧 **Flagged** — the G550/GV-SP family is commonly cited among steep-approach/LCY-capable business-jet types alongside the G650, Falcon 7X and Challenger/Legacy-class aircraft. **Operator approval status not confirmed** — ties into the OM E Steep Approach Operations deferred decision (see §7 & Dispatch §6) |
| RECAT-EU / wake / RFF | See [Fleet Capability Matrix](../capability-matrix.md) secondary table — 🟧 indicative only (F–E / M–L wake, not yet researched to mainline standard) |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** GLF5 (Gulfstream G550, BR710) → **SimBrief profile:** GLF5 (G550) → **Sim model:** X-Plane Gulfstream G550 add-on 🟧 `[VERIFY — specific product not yet formally confirmed]`

No approved X-Plane 11 add-on for this type has been formally confirmed as a management decision (marked 🟧 `[VERIFY]`), the same posture carried by every mainline pack pending its Sim-Model file. The First Officer source library (`EFP/OM/OM B Fleet/Business Jets/Gulfstream G550/`) holds extensive reference material (systems chapters, checklists, FMS notes) that can inform the eventual Sim-Model build but does not itself constitute an approval. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in a future Sim-Model file before this pack is Verified.

## 3. Role in the network

A large-cabin ultra-long-range business jet in K Global's **Executive unit**, sitting just below the GLF6 (G650ER) in range and cabin size — the G550's ~6,750 NM covers the large majority of VIP intercontinental missions, with the G650ER reserved for the longest city pairs. Shares the Executive unit with the GLF6, FA7X (Falcon 7X, trijet), CL30 (Challenger 300, super-midsize), E35L (Legacy 650, large-cabin) and PC12 (single-engine turboprop, short-hop/regional VIP). As with the GLF6, this unit flies point-to-point VIP charter rather than scheduled network service — read this pack with that different dispatch paradigm in mind. See the [Fleet overview](../index.md) for the group index and unit context.

## 4. Dimensions & ground footprint

- Length **29.39 m** (96 ft 5 in); wingspan **28.50 m** (93 ft 6 in); height **7.87 m** (25 ft 10 in) 🟩
- Cabin: 13.39 m long × 2.24 m wide × 1.88 m high (43 ft 11 in × 7 ft 4 in × 6 ft 2 in); total length incl. baggage hold 15.27 m 🟩
- **ICAO Code C** — standard mid-size business-jet footprint, no wingspan-restricted stand/taxiway concerns 🟩
- RFF/ARFF category: see [Fleet Capability Matrix](../capability-matrix.md) secondary table — 🟧 indicative, not yet researched to mainline standard
- Twin-engine, rear-fuselage-mounted BR710s; standard head-up guidance system (HUD) and enhanced vision system (EVS) fitted as standard on the type 🟩

## 5. Weights

| | kg |
|---|---|
| OEW (empty weight) | ~21,909 🟩 |
| Gross weight (published, ambiguous term) | ~24,721 🟧 `[VERIFY — may approximate MZFW]` |
| MTOW | ~41,277 🟩 |
| MLW | ~34,156 🟩 |
| Max fuel | ~18,733 🟩 |

The G550's OEM materials publish "gross weight" rather than a separately labelled MZFW — treat that figure as an approximation only until confirmed against a primary Gulfstream/FAA source or the VAMSYS mirror 🟧 `[VERIFY]`.

## 6. Performance

- Service ceiling **FL510**; **high-speed cruise M0.85**, **long-range cruise M0.80**, max operating **M0.885** 🟩.
- Public reference fuel burn: first-hour burn ~2,000–2,300 kg, decreasing to ~1,400–1,100 kg by the third hour (long-range cruise profile, initial altitude FL400–410) 🟧 `[VERIFY]` — no K Global reference OFP yet on file.
- **Cost index:** not applicable in the mainline sense — Executive-unit VIP missions are typically flown for minimum time/best comfort rather than route economics; set per OM E guidance if a CI concept is adopted for this unit 🟧.
- **Field length:** take-off run **~1,800 m (5,910 ft)**, landing run **~840 m (2,770 ft)** at representative weights, sea-level ISA 🟩 — short-field capable relative to its size class, a factor in the LCY/steep-approach discussion (§7).
- **Long-range over-water capability:** an ultra-long-range twin dispatched point-to-point across oceans and polar routes on VIP missions. **ETOPS/EDTO rule-time is not the operating paradigm for this unit** — do not apply a mainline-fleet rule time to this type; see Dispatch §5 for how over-water/remote-area planning is actually handled for Executive-unit flights.
- **Hot-and-high:** not assessed in this build — 🟧 indicative only, matrix secondary table.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Range vs VIP mission profile | 🟩 | ~6,750 NM structural range covers the large majority of intercontinental VIP city pairs |
| Steep approach / LCY capability | 🟧 | G550/GV-SP family commonly cited as steep-approach/LCY-capable; **operator approval not confirmed** — ties to the OM E Steep Approach Operations deferred decision |
| Weights | 🟩 | OEW/MTOW/MLW/max-fuel confirmed from public source; "gross weight" (possible MZFW proxy) flagged 🟧 |
| ETOPS/EDTO applicability | 🟩 | Not the operating paradigm for Executive-unit VIP ops — see Dispatch §5 for how long-range over-water flights are actually planned |
| Modelling fidelity (sim vs real) | 🟧 | No approved X-Plane 11 add-on confirmed yet — management decision pending, see Sim-Model (to build) |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Group index: the [Fleet overview](../index.md) · [Capability values (indicative)](../capability-matrix.md)

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Gulfstream G550 — https://en.wikipedia.org/wiki/Gulfstream_G550
- Simple Flying — Which Aircraft Can Land At London City Airport? — https://simpleflying.com/london-city-airport-approved-aircraft/
- Wikipedia — Rolls-Royce BR700 (BR710) — https://en.wikipedia.org/wiki/Rolls-Royce_BR700

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | Completed pack — Sim-Model, Checklist, QRH, Livery built; §8 links updated, no dead links. Sim-Model candidate researched live (AKD Studio GLF550 v2, X-Plane 11/12); conventional (non-FBW) flight-control note added throughout Checklist/QRH. |
| v0.1 | 2026-07-25 | Initial draft — built from public Wikipedia data; converted stub to pack core (Intro + Dispatch); Executive-unit VIP framing; steep-approach/LCY flagged; sim model unconfirmed `[VERIFY]`; Sim-Model/Livery/Checklist/QRH left to build. |
