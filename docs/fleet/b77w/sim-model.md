<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  B77W Boeing 777-300ER
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# B77W — Boeing 777-300ER · Sim-Model

**B77W / 777 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **FlightFactor 777** (777 Professional, incl. -300ER variant) | X-Plane 11 (v2.x) `[VERIFY — K Global test]` | study | 🟧 Conditional — leading candidate; approval pending |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** 777 of any variant |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any 777 add-on, so nothing here is 🟩 Approved. The table lists the genuine, publicly available study-level candidate and what it costs operationally. The Intro §2 mapping line (`Sim model: X-Plane 11 FlightFactor 777 [VERIFY]`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever model is flown and every model-specific figure stays `[VERIFY]`.

**Why FlightFactor 777 leads:** it is the only **study-level** 777 for X-Plane 11 — deep FMC/CDU, autothrottle, LNAV/VNAV, custom systems and failure logic. The base product is the 777-200-family; the **-300ER (B77W) is provided as a variant/expansion within the FlightFactor 777 line**, so the airframe, GE90-115B engine model and the long -300ER fuselage/gear are represented rather than approximated 🟧 `[VERIFY — confirm the -300ER variant is installed, not the -200LR/F]`. There is no comparable second study-level 777 for XP11, so — unlike the A339 pack — there is **no fallback model tier**; the approval decision is effectively FlightFactor-or-nothing on XP11.

## 2. Type ↔ model fidelity note 🟧

- **FlightFactor 777 (-300ER variant)** *is* a 777-300ER with **GE90-115B** — it matches the real type, the SimBrief 777-300ER / GE90-115B dispatch profile (Dispatch §2) and the Intro §2 mapping directly. Cruise burn, ceiling and FMC/VNAV behaviour should track the OFP without a variant correction. This is the fidelity-preferred path. 🟩 (fidelity) / 🟧 (approval still pending)
- **Variant-mismatch hazard 🟥:** if the installed FlightFactor variant is a **777-200LR or 777F** rather than the **-300ER**, the airframe is the wrong length, weight and (for the -200/F) a different GE90 rating — a burn/performance comparison against the -300ER OFP will read wrong and the long-fuselage ground geometry (tail-strike margin, stand length) will not match. Confirm the **-300ER** variant is selected before any performance work. 🟥 `[VERIFY]`
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). Treat all Dispatch burn figures as GE90-115B / -300ER targets; if a different variant is flown they will not reproduce exactly.

## 3. Systems-depth caveats

- **FlightFactor 777 (study):** deep FMC/CDU with LNAV/VNAV, autothrottle, realistic EICAS with EICAS-message + non-normal-checklist logic, hydraulics/electrics/fuel/pressurisation modelled, GE90 start and engine model, autoflight, and a failure system — enough that the Checklist and QRH can be flown largely as real. **XP11 limits:** XP11's older weather/lighting engine means some environmental cues (weather radar returns, night lighting, ground handling) are less faithful than a current-generation sim would render 🟧. Verify each non-normal is actually simulated before relying on the QRH memory/recall items against it `[VERIFY]`.
- **General:** the XP11 777 model does not reproduce real certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Installed variant | 🟥 | FlightFactor 777 | Line must fly the **-300ER (B77W)**, not the -200LR/F — wrong length/weight/thrust otherwise | Confirm -300ER variant loaded before dispatch/perf work |
| Weather radar | 🟧 | FlightFactor 777 | XP11 weather-radar behaviour is degraded vs a current-generation sim | Cross-check MET/SIGMET externally; don't rely solely on WXR returns |
| Failure/EICAS depth | 🟧 | FlightFactor 777 | Study-level but some deep/compound EICAS non-normals may not fully resolve | Treat 🟧 QRH items as reference; confirm the message triggers on the build |
| Navdata / AIRAC | 🟧 | FlightFactor 777 | FMC routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Ground geometry | 🟧 | FlightFactor 777 | Long -300ER fuselage → tail-strike margin on rotation and long stand length | Respect rotation-rate/pitch limits; confirm Code E stand length (Intro §4) |
| Perf realism | 🟧 | FlightFactor 777 | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests FlightFactor 777 and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **FlightFactor 777 (-300ER, XP11)**. There is no fallback tier — if this model is not approved, the type has no study-level XP11 representation.
- **ETOPS/EDTO modelling fidelity 🟥.** The B77W is a high-capacity EDTO trunk twin (Dispatch §5, approved rule time 180 min; type-capable to 330). **No add-on simulates operator EDTO approval, critical-fuel scenarios or en-route-alternate adequacy** — those are dispatch/OFP disciplines, not sim features. The sim can fly the routing and a single-engine driftdown (FlightFactor study-level models engine-out), but the **decompression + engine-out critical-fuel check remains an OFP/OM E task** and must not be inferred from in-sim behaviour. 🟥
- **AIRAC/navdata dependency 🟥.** Long trunks (dense EDDF and twin-coast North America references) route through oceanic/polar tracks that demand a **current AIRAC cycle**; an out-of-date cycle breaks the FMC route, waypoints and ETOPS entry/exit points. Pilots must maintain current navdata before dispatching a B77W leg. 🟥
- **Re-baseline trigger 🟧.** If the fleet later standardises on a newer sim or a new FlightFactor 777 build, re-test and re-baseline the Checklist/QRH at that point (Instructions trigger: "Approved sim model / version / new AIRAC").

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- FlightFactor — 777 product page (X-Plane.Org Store) — https://store.x-plane.org/Boeing-777-Professional_p_1194.html
- FlightFactor — developer site — https://www.flightfactor.aero/
- SKYbrary — Boeing 777-300 (B77W) — https://skybrary.aero/aircraft/b77w
- Boeing — 777 Airplane Characteristics for Airport Planning — https://www.boeing.com/content/dam/boeing/boeingdotcom/company/about_bca/startup/pdf/historical/777_2LR_300ER_Boeing.pdf

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model (FlightFactor 777 -300ER, XP11 study-level lead); no fallback tier on XP11; variant-mismatch flagged 🟥; approved-model decision left open `[VERIFY]`. |
