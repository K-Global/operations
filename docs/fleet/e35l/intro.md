<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  E35L Embraer Legacy 650 (EMB-135BJ)
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# E35L — Embraer Legacy 650 · Intro

**E35L / EMB-135BJ Legacy 650** · Large-cabin business jet, Executive-unit twin
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (EDTO, RVSM, PBN, LVO, RECAT, RFF) are not restated here — see the Fleet Capability Matrix (secondary/indicative table for this type). Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **E35L** |
| Family / type rating | **EMB-135BJ Legacy 650** — business-jet derivative of the Embraer ERJ family, built on the ERJ-135 airframe 🟩. Reported as sharing a **common EMB-135/145 type-rating basis** with the ERJ-135/140/145 regional-jet family 🟧 `[VERIFY]` — confirm whether K Global crew qualification treats E35L as common-rated with the (deferred) OM B Embraer ERJ-145-family pack, or requires a separate type-rating line; the two groups sit in different OM B folders (Business Jets vs Embraer) pending that confirmation |
| Variants operated | Embraer Legacy 650 (EMB-135BJ); longer-range derivative of the Legacy 600 `[VAMSYS mirror 2026-07-25]` |
| Engines (modelled) | 2 × **Rolls-Royce AE 3007A2**, 9,020 lbf (40.1 kN) each, ISA+15°C 🟩 |
| ICAO code letter | **B** (inferred from 21.17 m wingspan, 15–<24 m band) 🟧 `[VERIFY]` — narrowbody-class stands/gates |
| Config (K Global) | `[VERIFY — VAMSYS]`; manufacturer reference layout 13–14 pax in three cabin zones 🟩 |
| MTOW / BOW (OEW) / MZFW* / Max fuel | 24,300 / 14,160 / ~16,400* / 9,300 kg 🟩 (*MZFW derived from BOW + max payload 2,240 kg — not a directly published figure 🟧 `[VERIFY]`) |
| Max fuel (volume) | ~11,600 L (derived from 9,300 kg at ~0.8 kg/L Jet A-1) 🟧 `[VERIFY]` |
| Service ceiling | **FL410** (41,000 ft) 🟩 |
| Typical cruise | M0.78 (max M0.80) 🟩 |
| Range (rep. payload) | **~3,900 NM** (4 pax, NBAA IFR reserves) 🟩 |
| ETOPS/EDTO | Twin business jet — not a K Global EDTO/OpsSpec type; see Dispatch §5 |
| Steep approach / London City 🟧 | **LCY candidate — flagged, not confirmed.** Several public charter-broker sources describe the Legacy 600/650 as operated into London City (EGLC); the more rigorous trade-press record (FlightGlobal) documents the related **Legacy 500** obtaining ANAC/EASA/EGLC steep-approach clearance, not explicitly the 650. The Fleet Capability Matrix secondary (indicative) table currently records E35L steep-certified = **No** 🟧 (unresearched to mainline standard). This is an **open item** — see §7 and the OM E Steep Approach Operations deferral (`../../../OM E Operations/Steep Approach Operations.md`), which already names "Challenger/Legacy-class" jets as a candidate family for the LCY solution. Do not plan an E35L LCY sector until the certification/operator-approval question is resolved |
| RECAT-EU / wake / RFF | Per matrix secondary (indicative) table: **RECAT E / ICAO wake M** 🟧; RFF category **Cat 5** (26.33 m → 24–<28 m band) 🟧 `[VERIFY]` — see [Fleet Capability Matrix](../capability-matrix.md) |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** E35L (Embraer Legacy 650 / EMB-135BJ, Rolls-Royce AE 3007A2) → **SimBrief profile:** E35L — 🟧 `[VERIFY]` **not confirmed as a native SimBrief airframe profile**; public flight-sim community requests for an E35L SimBrief profile were still open as of early 2026 (post-dating the X-Crafts Legacy 650 release). Dispatch may need a substitute profile (e.g. a generic mid/large-cabin bizjet or ERJ-135 performance proxy) until a dedicated E35L profile is confirmed available → **Sim model:** X-Crafts **ERJ Family** (includes the Legacy 650) for X-Plane 11 🟧 `[VERIFY]`

The dispatch profile and the approved X-Plane 11 flight model are both management decisions, neither yet formally confirmed (both marked 🟧 `[VERIFY]`) — the same posture as the mainline packs, but with an added SimBrief-profile-availability caveat unique to this type. Any fuel-burn comparison between the SimBrief OFP (or its substitute profile) and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network

Large-cabin business jet operated by the **Executive unit** alongside the GLF6/GLF5, FA7X and CL30 types — see the [Fleet overview](../index.md) (the [Fleet overview](../index.md)). The E35L is grouped under the fleet rather than the fleet because it flies as an Executive-unit VIP/charter-style asset, not part of the City/Regional E-Jet family, even though it shares its manufacturer and much of its airframe/type-rating heritage with the ERJ-135/140/145 regional jets (§1). Tails are combined with the wider Embraer regional group in the current fleet register (~30 total; not yet broken out per type — `[VERIFY — VAMSYS]`). The type's long range (~3,900 NM) and FL410 ceiling make it the Executive unit's large-cabin long-range option; its potential **London City / steep-approach candidacy** (§1, §7) is the one item that ties this pack into the OM E steep-approach deferral alongside the other business-jet types named there (Falcon 7X, Challenger/Legacy-class, Gulfstream).

## 4. Dimensions & ground footprint

- Length **26.33 m** (86 ft 5 in); wingspan **21.17 m** (69 ft 5 in); height **6.64 m** (21 ft 9 in) 🟩
- **ICAO Code B** (inferred, 15–<24 m wingspan band) 🟧 `[VERIFY]` — narrowbody/regional-class stands and taxiways; no widebody-scale ramp constraints
- **RFF category — Cat 5** (24–<28 m length band, ICAO Annex 14) 🟧 `[VERIFY — computed, not a primary-source cell]`; confirm cover at all scheduled Executive-unit fields, including any smaller/steep-approach candidate fields
- Twin-engine aft-fuselage-mounted powerplants (ERJ-135 heritage); single passenger door forward, aft baggage/cargo compartment (286 cu ft / 8.1 m³); no belly-cargo hold in the airline sense — Executive-unit VIP/charter cabin configuration, not a pax+cargo mainline layout

## 5. Weights

| | kg |
|---|---|
| BOW (basic operating weight, ≈ OEW) | 14,160 🟩 |
| MZFW (derived) | ~16,400 🟧 `[VERIFY — derived from BOW + max payload, not a published figure]` |
| MTOW | 24,300 🟩 |
| MLW | 🟧 `[VERIFY — not established from the public reference table used; distinct from the "typical landing weight" performance case cited in §6]` |
| Max payload | 2,240 kg 🟩 |
| Max fuel | 9,300 kg (~11,600 L) 🟧 `[VERIFY — volume derived]` |

K Global operates the Legacy 650 (longer-range derivative of the Legacy 600); confirm the exact delivered sub-variant (e.g. 650 vs 650E) against the VAMSYS mirror before use in performance planning 🟧 `[VERIFY — VAMSYS variant]`.

## 6. Performance

- Service ceiling **FL410**; typical cruise **M0.78** (max **M0.80**, ~459 kn/850 km/h at FL410) 🟩.
- Average fuel flow: **no primary OFP or manufacturer per-hour figure on file** — a network sanity-check derivation (9,300 kg max fuel ÷ ~8.7 hr endurance at 3,900 NM/M0.78 cruise) gives **~1.05 t/hr average** 🟧 `[VERIFY — derived, not a primary source]`; replace with type OFP figures once first flown.
- **Cost index:** set per OM E / route economics; no E35L reference OFP CI yet 🟧 `[VERIFY]`.
- **Field length:** takeoff **5,741 ft (1,750 m)** at MTOW, sea-level ISA; landing **2,842 ft (866 m)** at typical landing weight 🟩 — short-field performance relative to mainline narrowbodies, consistent with an LCY-class candidacy discussion (§1), but **not** itself evidence of steep-approach certification.
- **Hot-and-high:** not researched to mainline standard 🟧 — the AE3007 is a well-margined business-jet powerplant; assess per-field before scheduling any high-elevation Executive sector.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Type rating commonality (EMB-135/145) | 🟧 | Reported common with the ERJ-135/140/145 type-rating family; not confirmed against K Global's own crew-qualification scheme |
| SimBrief profile availability | 🟧 | E35L may not exist as a native SimBrief airframe profile — confirm or select a substitute before dispatch |
| Steep approach / London City candidacy | 🟧 | Flagged as an open LCY candidate (§1); matrix secondary table currently reads "No" (indicative, unresearched); reconcile before any EGLC-class scheduling decision |
| Range vs Executive-unit mission set | 🟩 | ~3,900 NM covers long-range Executive/VIP sectors |
| Weights (MZFW, MLW) | 🟧 | MZFW derived, not published; MLW not established from the source used |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (X-Crafts ERJ Family) a management decision, unconfirmed — see Sim-Model (to build) |

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md) · Steep Approach policy: `../../../OM E Operations/Steep Approach Operations.md`

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Embraer Legacy 600 (incl. Legacy 650 variant table: dimensions, weights, engines, range, field performance) — https://en.wikipedia.org/wiki/Embraer_Legacy_600
- Embraer — Executive Jets (public) — https://www.embraer.com
- fstc.eu — Embraer EMB-135BJ Legacy 600/650 type-rating course reference (common EMB-135/145 type-rating basis) — https://fstc.eu/flight-crew-pilots/typeratings/airplane/embraer-emb-135bj-legacy-600-650/
- doc8643 — EMBRAER EMB-135BJ Legacy (E35L) ICAO type designator reference — https://doc8643.com/aircraft/E35L
- FlightGlobal — "USA gives thumbs-up to Legacy 650" (FAA certification, Feb 2011) — https://www.flightglobal.com/news/articles/usa-gives-thumbs-up-to-legacy-650-353728/
- FlightGlobal (trade press) — reporting of London City steep-approach clearance for the related **Legacy 500** (context only; the E35L/650's own certification is unconfirmed — see §1 and the OM E Steep Approach deferral).
- X-Crafts — ERJ Family (includes Legacy 650) product page — https://www.xcrafts.com/erj-family
- X-Plane.Org Store — Embraer Legacy 650 by X-Crafts — https://store.x-plane.org/Embraer-Legacy-650-by-X-Crafts_p_996.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Wikipedia/Embraer/fstc.eu/doc8643/FlightGlobal data + VAMSYS mirror; capability values cross-linked to the Fleet Capability Matrix secondary (indicative) table; LCY/steep-approach candidacy flagged as an open item against the OM E Steep Approach Operations deferral; type-rating commonality with EMB-135/145 flagged for confirmation; SimBrief profile availability flagged unconfirmed; approved sim model (X-Crafts ERJ Family) a management decision `[VERIFY]`. |
