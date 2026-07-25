<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  B748 Boeing 747-8 (8i / 8F)
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# B748 — Boeing 747-8 · Sim-Model

**B748 / 747 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **SSG 747-8** (Anniversary Edition, covers Intercontinental 8i + Freighter 8F) | X-Plane 11 (v2.x) `[VERIFY — K Global test]` | study | 🟧 Conditional — leading candidate; approval pending |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** 747-8 of any variant |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any 747-8 add-on, so nothing here is 🟩 Approved. The table lists the genuine, publicly available study-level candidate and what it costs operationally. The Intro §2 mapping line (`Sim model: X-Plane 11 SSG 747-8 [VERIFY]`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to the SSG 747-8 and every model-specific figure stays `[VERIFY]`.

**Why SSG 747-8 leads:** it is the only **study-level** 747-8 for X-Plane 11 — dual FMC/CDU (Captain + First Officer), autothrottle, LNAV/VNAV, autoland capability, and a licensed exterior/systems model. Critically, the **same package models both variants** — the Intercontinental (8i) passenger jet and the Freighter (8F) — sharing the airframe/GEnx-2B engine model and differing mainly in payload handling and exterior/loading representation 🟧 `[VERIFY — confirm the correct 8i/8F variant is loaded per tail]`. There is no comparable second study-level 747-8 for XP11, so — as with the B77W pack — there is **no fallback model tier**; the approval decision is effectively SSG-or-nothing on XP11. Later product revisions add X-Plane 12 compatibility 🟧 `[VERIFY]`; this pack is written to the XP11 baseline.

## 2. Type ↔ model fidelity note 🟧

- **SSG 747-8** *is* a 747-8 with **4 × GEnx-2B67** — it matches the real type, the SimBrief B748/GEnx-2B dispatch profile (Dispatch §2) and the Intro §2 mapping directly. One flight-model/engine set underlies both the 8i and 8F, so cruise burn, ceiling and FMC/VNAV behaviour should track the OFP without a variant aero correction; the pax/freighter split lives in payload and loading, not aerodynamics. This is the fidelity-preferred path. 🟩 (fidelity) / 🟧 (approval still pending)
- **Variant-selection discipline 🟥:** confirm the **8i (Intercontinental)** model is loaded for Premier/Intercontinental tails and the **8F (Freighter)** model for Cargo tails before any dispatch or performance work — loading the wrong variant carries the wrong payload assistant, door/cargo representation and reference weights. 🟥 `[VERIFY]`
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). Treat all Dispatch burn figures as GEnx-2B / 747-8 targets.

## 3. Systems-depth caveats

- **SSG 747-8 (study):** dual FMC/CDU (Captain "LEFT" / First Officer "RIGHT"), autothrottle, LNAV/VNAV, autoland, IRS alignment (multi-minute, position-dependent) and a cockpit-tablet utility for ground services (GPU connect/disconnect) and a payload assistant that sets fuel/pax/cargo load for FMC takeoff-data calculation — deep enough that the Checklist can be flown largely as real. 🟧
- **Flight-plan format quirk 🟧:** the SSG FMC does **not** load the native X-Plane 11 `.fms` route format — it requires the older X-Plane 10-style `.fms` file or the developer's own UFMC route format (importable from SimBrief-generated plans). Loading a plain XP11 `.fms` file into the FMC will fail; plan for the correct export format before every dispatch. 🟧 `[VERIFY]`
- **IRS alignment time 🟧:** full inertial alignment after entering position takes on the order of several minutes (an in-sim options setting can shorten it) — build this into before-start timing, especially on a quick turn.
- **Freighter (8F) representation 🟧:** main-deck cargo loading (side + nose door) is represented visually/in the payload assistant rather than through a certified structural loadsheet tool — the FMC's own CG/ZFW entries are informational, not a substitute for the OM E loadsheet (Dispatch §4). Confirm this before relying on in-sim CG figures for an 8F leg. 🟧 `[VERIFY]`
- **General:** the XP11 model does not reproduce real certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Route/flight-plan format | 🟧 | SSG 747-8 | FMC rejects native XP11 `.fms`; needs X-Plane 10-format `.fms` or UFMC | Export SimBrief plans in a compatible format before dispatch `[VERIFY]` |
| IRS alignment time | 🟧 | SSG 747-8 | Multi-minute align after position entry | Build into before-start flow; use the options page to shorten if a quick turn |
| Variant selection | 🟥 | SSG 747-8 | Loading 8i where 8F (or vice versa) is scheduled gives the wrong payload/loading tool | Confirm correct variant per tail before dispatch/perf work |
| Freighter CG/loadsheet | 🟧 | SSG 747-8 (8F) | In-sim payload assistant CG entry is not a certified loadsheet | Treat OM E loadsheet as authority; sim CG is informational only |
| Quad engine/failure depth | 🟧 | SSG 747-8 | Four-engine asymmetric-failure logic depth not independently confirmed | Verify each non-normal engine scenario actually triggers before training to it `[VERIFY]` |
| Navdata / AIRAC | 🟧 | SSG 747-8 | FMC routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Ground footprint / Code F | 🟧 | SSG 747-8 | Sim does not enforce real-world Code F stand/taxiway wingspan constraints | Apply Intro §4 Code F discipline manually — the sim will let the aircraft go where the real jet cannot |
| Perf realism | 🟧 | SSG 747-8 | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests SSG 747-8 and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **both the 8i and 8F variants (XP11)** — they are separate loadouts within one product. There is no fallback tier — if this model is not approved, the type has no study-level XP11 representation.
- **EDTO/quad modelling fidelity 🟥.** The B748 is a quad with **no ETOPS diversion-time limit**, but ICAO EDTO adequate-aerodrome planning still applies (Dispatch §5). **No add-on simulates operator EDTO approval, critical-fuel scenarios or en-route-alternate adequacy** — those are dispatch/OFP disciplines, not sim features. The sim can fly the routing and an engine-out driftdown on however many of the four engines the model fails, but the **critical-fuel/adequate-aerodrome check remains an OFP/OM E task** and must not be inferred from in-sim behaviour. 🟥
- **Code F ground-footprint discipline 🟥.** The sim does **not** enforce wingspan-based Code F stand/taxiway restrictions (Intro §4) — it will happily park or taxi the 747-8 somewhere the real aircraft could not go. Pilots must apply the Code F constraint manually at every field; this is a dispatch/planning discipline, not something the model protects. 🟥
- **8F main-deck loading discipline 🟥.** The in-sim payload assistant is a convenience tool, not the certified loadsheet — the 8F's active main-deck CG management (Dispatch §4) must be verified against the OM E loadsheet, never against the FMC's own CG/ZFW entry. 🟥
- **AIRAC/navdata + flight-plan-format dependency 🟥.** Long trunks (dense EDDF pax/cargo grid, transoceanic/polar cargo sectors) demand both a **current AIRAC cycle** and a **compatible route-file format** (§3) — either gap breaks the FMC route, waypoints and EDTO entry/exit points. Pilots must confirm both before dispatching a B748 leg. 🟥
- **Re-baseline trigger 🟧.** If the fleet later standardises on X-Plane 12 or a newer SSG 747-8 build, re-test and re-baseline the Checklist/QRH at that point (Instructions trigger: "Approved sim model / version / new AIRAC").

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SSG — Boeing 747-8 Inter Anniversary Edition product page (X-Plane.Org Store) — https://store.x-plane.org/B-747-8-Inter-Anniversary-Edition_p_1079.html
- Supercritical Simulations Group — developer site — https://www.supercriticalsimulation.com
- FSElite — Supercritical Simulations Group Releases B747-8 Inter Anniversary Edition — https://fselite.net/content/supercritical-simulations-group-releases-b747-8-inter-anniversary-edition/
- X-PlaneReviews — Aircraft Update: B 747-8 Series Anniversary Edition X-Plane 12 — https://xplanereviews.com/forums/topic/11339-aircraft-update-b-747-8-series-anniversary-edition-x-plane-12/
- SKYbrary — Boeing 747-8 (B748) — https://skybrary.aero/aircraft/b748

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model (SSG 747-8 Anniversary Edition, XP11 study-level lead, covers both 8i/8F); no fallback tier on XP11; variant-selection and flight-plan-format quirks flagged; approved-model decision left open `[VERIFY]`. |
