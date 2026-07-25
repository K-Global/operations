<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  B77F Boeing 777F
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# B77F — Boeing 777F · Sim-Model

**B77F / 777 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Shares the 777 type with the passenger [B77W](../b77w/sim-model.md) — read that file alongside this one; the flight-deck model is common, only the airframe/variant and payload differ. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **FlightFactor 777** (777 line, **777F/freighter variant**) | X-Plane 11 `[VERIFY — K Global test]` | study | 🟧 Conditional — candidate; variant availability on the K Global XP11 build **unconfirmed** |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** 777 of any variant |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as with the B77W pack, K Global has **not** run a formal in-house test-and-approve pass on any 777 add-on, so nothing here is 🟩 Approved. The Intro §2 mapping line (`Sim model: X-Plane 11 FlightFactor 777, 777F variant [VERIFY]`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever model is flown and every model-specific figure stays `[VERIFY]`.

**Why FlightFactor 777 leads:** it is the only **study-level** 777 line for X-Plane, giving deep FMC/CDU, autothrottle, LNAV/VNAV, custom systems and failure logic consistent with the B77W pack's choice (both types share the 777 flight deck). **Variant caveat 🟥 `[VERIFY]`:** FlightFactor's product history matters here — the freighter (777F, GE90-110B1) variant is documented as part of the developer's **newer "Ultimate" 777 line**, and it is **not confirmed** whether the same freighter variant ships in the generation of the product tested for X-Plane 11 (vs. a later X-Plane 12 build). K Global's sim baseline is XP11 (per fleet policy) — **confirm the installed product actually includes a 777F/freighter airframe and GE90-110B1 engine model before assuming this pack's model line is usable**; if only the passenger -200/-300ER variants are present on the XP11-generation product, there is **no freighter airframe to fly** and this gap must be raised as a sim-model blocker, not assumed away.

## 2. Type ↔ model fidelity note 🟧

- **FlightFactor 777 (777F variant, if present on the XP11 build)** *is* a 777F with **GE90-110B1** — it matches the real type, the SimBrief 777F / GE90-110B1 dispatch profile (Dispatch §2) and the Intro §2 mapping directly. Cruise burn, ceiling and FMC/VNAV behaviour should track the OFP without a variant correction — **if** the freighter variant is genuinely installed. 🟧 (fidelity, conditional on variant availability) / 🟧 (approval still pending)
- **Variant-mismatch / variant-absence hazard 🟥:** two distinct risks apply here (more than on the B77W): (1) if the installed FlightFactor variant is a **passenger -200LR/-300ER** rather than the **777F**, the airframe has cabin/pax mass distribution, not main-deck freight geometry, and payload/CG behaviour will not represent the freighter; (2) the 777F variant may **not exist at all** on the XP11-generation product (see §1) — in which case there is no freighter model to fly and this must be escalated, not substituted with a relabelled passenger variant. 🟥 `[VERIFY]`
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§4** (profile, fuel, freighter payload/CG). Treat all Dispatch burn figures as GE90-110B1 / 777F targets; a passenger-variant substitution will not reproduce them.

## 3. Systems-depth caveats

- **FlightFactor 777 (study), if 777F variant confirmed:** deep FMC/CDU with LNAV/VNAV, autothrottle, realistic EICAS with EICAS-message + non-normal-checklist logic, hydraulics/electrics/fuel/pressurisation modelled, GE90 start and engine model, autoflight, and a failure system — enough that the Checklist and QRH can be flown largely as real. **Freighter-specific systems caveat 🟧:** main-deck cargo smoke/fire detection and the main-deck cargo fire-suppression (Halon-type flood) system, main-deck cargo-door/lock sensing and load-position/CG modelling are the parts most likely to be abstracted or absent even on a nominally "freighter" add-on model — verify each before relying on it for training `[VERIFY]`.
- **XP11 limits:** XP11's older weather/lighting engine means some environmental cues (weather radar returns, night lighting, ground handling) are less faithful than a current-generation sim would render 🟧.
- **General:** the XP11 777 model does not reproduce real certified performance data, and no add-on simulates a main-deck cargo loader, pallet build-up or load-planning software. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| 777F variant availability | 🟥 | FlightFactor 777 | Not confirmed the freighter variant ships on the XP11-generation product (vs a newer XP12-only line) | Confirm variant is installed before any dispatch/perf work; escalate if absent |
| Installed variant (if present) | 🟥 | FlightFactor 777 | Line must fly the **777F**, not a passenger -200LR/-300ER — wrong mass distribution/geometry otherwise | Confirm 777F variant loaded before dispatch/perf work |
| Main-deck cargo systems | 🟧 | FlightFactor 777 | Main-deck smoke/fire detection, suppression and pallet/CG behaviour likely abstracted vs a passenger cabin model | Treat main-deck fire/CG figures as reference; verify triggers on the build |
| Weather radar | 🟧 | FlightFactor 777 | XP11 weather-radar behaviour is degraded vs a current-generation sim | Cross-check MET/SIGMET externally; don't rely solely on WXR returns |
| Failure/EICAS depth | 🟧 | FlightFactor 777 | Study-level but some deep/compound EICAS non-normals may not fully resolve | Treat 🟧 QRH items as reference; confirm the message triggers on the build |
| Navdata / AIRAC | 🟧 | FlightFactor 777 | FMC routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Ground geometry | 🟧 | FlightFactor 777 | Main-deck side cargo door and loader positioning are not modelled — visual only | Treat ground cargo handling as a dispatch/ops discipline, not a sim feature |
| Perf realism | 🟧 | FlightFactor 777 | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global confirms a genuine 777F variant exists on the flown FlightFactor 777 product **and** tests it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: (1) confirm the 777F/freighter variant is actually present on the XP11-generation product; (2) if so, run the test pass; (3) if not, raise as a sim-model gap — there is **no fallback tier** on XP11, matching the B77W position.
- **ETOPS/EDTO modelling fidelity 🟥.** The B77F is an EDTO-capable twin (Dispatch §5; type-capable to 330 min, **operator rule time not yet set for the freighter**). **No add-on simulates operator EDTO approval, critical-fuel scenarios or en-route-alternate adequacy** — those are dispatch/OFP disciplines, not sim features. The sim can fly the routing and a single-engine driftdown (FlightFactor study-level models engine-out, where present), but the **decompression + engine-out critical-fuel check remains an OFP/OM E task** and must not be inferred from in-sim behaviour, and must not assume a rule time that has not been set. 🟥
- **Main-deck load-planning is never a sim feature 🟥.** The pallet position, main-deck CG discipline and floor-loading limits (Dispatch §4) are a dispatch/loadsheet function; no add-on computes or enforces this — the load plan must be correct before the sim session begins, not derived from it.
- **AIRAC/navdata dependency 🟥.** Long cargo trunks (FRA + HKG two-anchor grid and deep intercontinental freight sectors) route through oceanic/polar tracks that demand a **current AIRAC cycle**; an out-of-date cycle breaks the FMC route, waypoints and EDTO entry/exit points (once a rule time is set). Pilots must maintain current navdata before dispatching a B77F leg. 🟥
- **Re-baseline trigger 🟧.** If the fleet later standardises on a newer sim or a new FlightFactor 777 build that clarifies the 777F variant question, re-test and re-baseline the Checklist/QRH at that point (Instructions trigger: "Approved sim model / version / new AIRAC").

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- FlightFactor — 777 product page (X-Plane.Org Store) — https://store.x-plane.org/Boeing-777-Professional_p_1194.html
- FlightFactor — developer site — https://www.flightfactor.aero/
- SKYbrary — Boeing 777 Freighter (B77L / 777F) — https://skybrary.aero/aircraft/b77l
- Boeing — 777 Airplane Characteristics for Airport Planning — https://www.boeing.com/content/dam/boeing/boeingdotcom/company/about_bca/startup/pdf/historical/777_2LR_300ER_Boeing.pdf

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model (FlightFactor 777, 777F/freighter variant) cloned from the B77W pack pattern; **variant-availability gap flagged 🟥 `[VERIFY]`** (freighter variant documented on the developer's newer product line — not confirmed on the XP11-generation build K Global's fleet standardises on); no fallback tier on XP11; approved-model decision left open `[VERIFY]`. |
