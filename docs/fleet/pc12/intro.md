<!--
================================================================================
  K Global — AIRFRAME PACK · INTRO  ·  PC12 Pilatus PC-12
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# PC12 — Pilatus PC-12 · Intro

**PC12 / Pilatus PC-12** · Single-engine turboprop, Executive-unit utility/executive aircraft
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Type reference for X-Plane 11, not a substitute for the aircraft's own documentation. Figures carry provenance tags; verify `[VERIFY]` items before use. Capability values (RECAT, wake, RFF) are not restated here — see the Fleet Capability Matrix (secondary/indicative table for this type). **This is not a jet** — see §3 for how the operating paradigm differs from the rest of the Executive-unit business-jet fleet. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ICAO type designator | **PC12** |
| Family / type rating | **Pilatus PC-12** single-type family (PC-12/45, /47, /47E "NG", /47E "NGX" variants share one basic type certificate) 🟩; K Global's exact delivered sub-variant not yet confirmed against VAMSYS 🟧 `[VERIFY]` |
| Airframe class | **Single-engine turboprop** — fundamentally different aircraft class from every other Executive-unit type (E35L/GLF6/GLF5/FA7X/CL30 are all multi-engine business jets) 🟥 — do not carry across jet-specific dispatch/planning assumptions without checking §3 |
| Engine (modelled) | **1 × Pratt & Whitney Canada PT6A-67P** turboprop, 890 kW (1,200 shp), 4-blade Hartzell composite constant-speed reversible propeller 🟩 |
| Crew | **1 or 2 — single-pilot certified** 🟩; K Global crewing policy for single-pilot operation is a separate OM A/D question, not addressed in this pack 🟧 `[VERIFY]` |
| ICAO code letter | **B** (inferred from 16.28 m wingspan, 15–<24 m band) 🟧 `[VERIFY]` |
| Config (K Global) | `[VERIFY — VAMSYS]`; manufacturer reference 6–9 passenger seats 🟩 |
| MTOW / Empty weight / MZFW / MLW | 4,740 / 2,810 / 4,100 / 4,500 kg 🟩 |
| Max fuel | 1,226 kg (~1,521 L) 🟩 |
| Service ceiling | **FL300** (30,000 ft) 🟩 — well below the mainline/business-jet fleet; not a flight-level-competitive asset on trunk sectors |
| Typical cruise | ~285 kn (528 km/h) 🟩 |
| Range (rep. payload) | **~1,845 NM** (high-speed cruise, VFR reserves) 🟩 — far short of the E35L/GLF6/FA7X large-cabin jets; a short/regional Executive asset, not a long-range one |
| EDTO/ETOPS | **Not applicable — single engine.** No diversion-time or twin-engine EDTO concept applies; see Dispatch §5 |
| RECAT-EU / wake / RFF | Per matrix secondary (indicative) table: **RECAT F / ICAO wake L (Light)** 🟧; RFF category **Cat 3** (14.4 m → 12–<18 m band) 🟧 `[VERIFY]` — see [Fleet Capability Matrix](../capability-matrix.md) |

## 2. Modelling & profile mapping 🟥

The three-way mapping — **no external source records this; it is a K Global decision:**

> **Real type:** PC12 (Pilatus PC-12, single PT6A-67P turboprop) → **SimBrief profile:** PC12 — 🟧 `[VERIFY]` a PC-12 airframe profile is understood to exist in SimBrief's aircraft-type list; confirm it matches the delivered sub-variant (e.g. standard PC-12/47E vs "NG"/"NGX") before dispatch → **Sim model:** Carenado **PC-12 HD Series** for X-Plane 11 🟧 `[VERIFY]`

The dispatch profile and the approved X-Plane 11 flight model are both management decisions, neither yet formally confirmed (both marked 🟧 `[VERIFY]`) — the same posture as the mainline packs. Any fuel-burn comparison between the SimBrief OFP and the flown model must be validated in Sim-Model before this pack is Verified. Cross-ref Dispatch §2 (SimBrief setup) and the Sim-Model file (to build).

## 3. Role in the network — a genuinely different aircraft class 🟥

The PC-12 is operated by the **Executive unit** alongside the GLF6/GLF5, FA7X, CL30 and E35L types — see the [Fleet overview](../index.md) (the [Fleet overview](../index.md)) — but it is **not a business jet** and should not be planned as one:

- **Single-engine, not twin.** An engine failure is a total loss of thrust, not a one-engine-inoperative diversion case; there is no ETOPS/EDTO concept, no "critical fuel" scenario in the twin sense, and forced-landing/engine-failure planning follows a wholly different logic (§5, §7).
- **Turboprop, not jet.** Lower cruise speed (~285 kn vs ~450+ kn for the jet fleet), lower service ceiling (**FL300** vs FL390–410+ for the jets), and a materially shorter range (~1,845 NM vs ~2,000–7,000+ NM for the business-jet fleet) — this is a **short/regional Executive** asset, not a long-range one.
- **Single-pilot capable.** Certified for single-pilot operation 🟩; whether K Global actually crews it single-pilot is an OM A/D crewing-policy question, not addressed here 🟧 `[VERIFY]`.
- **Possible unpaved/short-strip capability.** The PC-12 is widely used off improved runways (gravel, grass, short/unimproved strips) in general Pilatus/operator service 🟧 — whether K Global exploits this for any Executive-unit destination is a network/route-planning question, not yet confirmed against the K Global airport register 🟧 `[VERIFY]`.
- **No steep-approach/LCY candidacy.** Unlike the E35L (see that pack's §1), the PC-12 is not part of the OM E Steep Approach Operations candidate discussion — it is a short-field type by a different mechanism (utility STOL-class performance, not a steep-glidepath certification), and the two should not be conflated.

Do **not** apply the E35L/GLF/FA7X/CL30 dispatch assumptions (twin-engine EDTO screening, jet cruise-speed route timing, jet-class field-length margins) to the PC-12 without re-checking each against this section.

## 4. Dimensions & ground footprint

- Length **14.4 m** (47 ft 3 in); wingspan **16.28 m** (53 ft 5 in); height **4.26 m** (14 ft 0 in) 🟩
- **ICAO Code B** (inferred, 15–<24 m wingspan band) 🟧 `[VERIFY]` — small-aircraft footprint; no ramp/stand constraint typical of any K Global type
- **RFF category — Cat 3** (12–<18 m length band, ICAO Annex 14) 🟧 `[VERIFY — computed, not a primary-source cell]`; note that Cat 3 cover is a much lighter requirement than any other K Global type carries — confirm at any dedicated PC-12 destination
- Single main-deck door, unpressurised-class ground handling relative to the jet fleet is **not** the case (PC-12 is pressurised), but GPU/APU/ground-support footprint is materially lighter than any jet in the fleet; single-engine turboprop start/taxi procedure differs from jet APU/engine-start sequencing (see Checklist, to build)

## 5. Weights

| | kg |
|---|---|
| Empty weight | 2,810 🟩 |
| MZFW | 4,100 🟩 |
| MTOW | 4,740 🟩 |
| MLW | 4,500 🟩 |
| Max fuel | 1,226 (~1,521 L) 🟩 |

K Global operates the PC-12; confirm the exact delivered sub-variant (standard PC-12/47E vs the "NG"/"NGX" avionics/engine upgrades) against the VAMSYS mirror — the PT6A-67P engine cited here is common to the NG-generation aircraft 🟧 `[VERIFY — VAMSYS variant]`.

## 6. Performance

- Service ceiling **FL300**; typical cruise **~285 kn** (528 km/h); stall speed **~67 kn** (124 km/h) 🟩.
- Rate of climb **~1,919 fpm** 🟩.
- Average fuel flow: **no primary OFP or manufacturer per-hour figure on file** — a network sanity-check derivation (1,226 kg max fuel ÷ ~6.5 hr endurance at 1,845 NM/285 kn cruise) gives **~189 kg/hr average** 🟧 `[VERIFY — derived, not a primary source]`; replace with type OFP figures once first flown.
- **Field length:** takeoff distance over 50 ft **2,602 ft (793 m)**; landing distance over 50 ft **2,169 ft (661 m)** 🟩 — materially shorter than any jet in the fleet, consistent with the type's short/unimproved-strip reputation (§3).
- **Hot-and-high:** not researched to mainline standard 🟧 — single PT6A turboprop performance is generally well-regarded at altitude/temperature relative to piston/light-jet peers, but no K Global-specific penalty data is on file; assess per field.

## 7. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Single-engine operating paradigm | 🟥 | No ETOPS/EDTO concept; no OM E doc currently addresses single-engine-specific commercial/passenger-ops policy (e.g. engine-failure/forced-landing-site planning, any night/IMC single-engine restriction) — open gap, see §7 note below and Dispatch §5 |
| SimBrief profile / variant match | 🟧 | Confirm PC-12 profile matches delivered sub-variant before dispatch |
| Range vs Executive-unit long-range missions | 🟧 | ~1,845 NM is short/regional only — not a substitute for the E35L/GLF6/FA7X on long sectors |
| Single-pilot crewing | 🟧 | Type-certified single-pilot; K Global's actual crewing policy for this type is an OM A/D question, not resolved here |
| Unpaved/short-strip capability | 🟧 | Commonly exploited in general PC-12 service; not yet confirmed as a K Global network use-case |
| Modelling fidelity (sim vs real) | 🟧 | Approved X-Plane 11 model (Carenado PC-12 HD Series) a management decision, unconfirmed — see Sim-Model (to build) |

**Open item — single-engine commercial-ops policy gap:** the OM E Operations catalogue (ETOPS/EDTO, Fuel Policy, etc.) is written for the multi-engine mainline/business-jet fleet. No dedicated OM E procedure yet addresses single-engine-specific planning (equivalent of an engine-failure/forced-landing-site or single-engine-IFR policy). Flagged here for the OM open-items roll-up; do not assume mainline EDTO-adjacent logic covers this type by default.

## 8. Related pack files

**Built:** [Dispatch](dispatch.md) · [Sim-Model](sim-model.md) · [Checklist](checklist.md) · [QRH](qrh.md) · [Livery](livery.md) · [Pack index](index.md)
Fleet Index → [overview](../index.md) · [Capability values](../capability-matrix.md) · Steep Approach policy (not applicable to this type, see §3): `../../../OM E Operations/Steep Approach Operations.md`

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Pilatus PC-12 (dimensions, weights, engine, performance table) — https://en.wikipedia.org/wiki/Pilatus_PC-12
- Pilatus Aircraft — PC-12 Technical Data — https://www.pilatus-aircraft.com/en/pc-12/technical-data
- AOPA — Pilatus PC-12 aircraft guide — https://www.aopa.org/go-fly/aircraft-and-ownership/aircraft-guide/aircraft/pilatus-pc-12
- SKYbrary — Pilatus PC-12 (PC12) — https://skybrary.aero/aircraft/pc12
- Just Flight / X-Plane Store — Carenado PC-12 HD Series (X-Plane 11) — https://www.justflight.com/product/carenado-pc12-hd-series-xplane-11

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — built from public Wikipedia/Pilatus/AOPA/SKYbrary data + VAMSYS mirror; capability values cross-linked to the Fleet Capability Matrix secondary (indicative) table; single-engine turboprop operating paradigm explicitly distinguished from the jet fleet (§3); single-engine commercial-ops policy gap flagged as an open item; approved sim model (Carenado PC-12 HD Series) a management decision `[VERIFY]`. |
