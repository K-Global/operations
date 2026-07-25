<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  A35K Airbus A350-1000
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# A35K — Airbus A350-1000 · Sim-Model

**A35K / A350 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **FlightFactor A350 XWB Advanced** — **-1000 variant** | X-Plane 11 (v1.1.x) `[VERIFY — K Global test]` | study | 🟧 Conditional — leading candidate; **-1000 variant fidelity unconfirmed**, approval pending |
| **FlightFactor A350 XWB Advanced** — **-900 shell** (as -1000 stand-in) | X-Plane 11 | study | 🟧 Conditional — fallback; wrong length/MTOW/thrust, see §2 |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** A350 of any variant |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any A350 add-on, so nothing here is 🟩 Approved. The table lists genuine, publicly available candidates and what each would cost operationally. The Intro §2 mapping line (`Sim model: X-Plane 11 FlightFactor A350 (-1000 variant) [VERIFY]`) resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever variant is flown and every model-specific figure stays `[VERIFY]`.

**Why the FlightFactor A350 leads:** it is the only study-level A350 XWB available for X-Plane 11 — deep FMS, full Airbus FBW law logic, ECAM with failure system, and a modelled Trent XWB engine. The open question is the **variant**: the product is primarily built as the **A350-900**, and whether the installed build exposes a genuine **-1000** option (longer fuselage, six-wheel main bogies, uprated **Trent XWB-97**, higher MTOW) rather than a -900 shell is **unconfirmed** 🟧 `[VERIFY]`. If only a -900 is available it must be treated as a stand-in and every -1000-specific figure corrected (see §2).

## 2. Type ↔ model fidelity note 🟧

- **FlightFactor A350 as a true -1000** *is* the A350-1000 with **Trent XWB-97** — it would match the real type, the SimBrief A350-1000/Trent XWB-97 dispatch profile (Dispatch §2) and the Intro §2 mapping directly. Cruise burn, ceiling, field length and FMS behaviour should track the OFP without a variant correction. This is the fidelity-preferred path. 🟩 (fidelity) / 🟧 (variant availability + approval both still pending)
- **FlightFactor A350 -900 shell** used to represent the A35K introduces exactly the mismatch flagged in Intro §2: the -900 is **~7 m shorter, ~40 t lighter at MTOW (~280 t vs ~319 t), lower-thrust (Trent XWB-84 vs -97) and four-wheel main gear** — so field length reads short, burn/weights read light, and any comparison against the -1000 OFP (longer, heavier airframe) must be corrected for the variant. Acceptable as a visual/procedural stand-in; **not** fidelity-equivalent for fuel, field-length or performance work. 🟧
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). If a -900 shell is the flown model, treat all Dispatch weight/burn/field figures as -1000-target references the model will not reproduce.

## 3. Systems-depth caveats

- **FlightFactor A350 (study):** deep FMS, FBW normal/alternate/direct law with Airbus protections, realistic ECAM and failure logic, hydraulics (**two systems — Green/Yellow**, see below), electrics (incl. Li-Ion main batteries + RAT/emergency electrical), fuel, pressurisation, engine start and a Trent XWB model, autoflight/A-THR **including the A350 automatic emergency-descent function**, and a failure system — enough that the Checklist and QRH can be flown largely as real. **XP11 limits:** XP11's older weather/lighting engine means some environmental cues (weather radar returns, night lighting) are less faithful than a modern build; verify each abnormal is actually simulated before relying on the QRH memory items against it `[VERIFY]`.
- **-1000 vs -900 systems 🟧:** the A350 systems architecture is common across variants, so procedures port cleanly; the differences are **physical/performance** (length, six-wheel bogie geometry, XWB-97 thrust, MTOW), not systems logic. If the flown build is a -900 shell the **procedures are still valid**, but ground geometry (longer body / tighter turns), field length and thrust-limited behaviour will not match the -1000.
- **General:** the XP11 model does not reproduce real certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Variant availability | 🟥 | FlightFactor A350 | A true **-1000** option (vs a -900 shell) is unconfirmed on the installed build | Confirm the -1000 variant loads before line use; if only -900, apply the §2 variant corrections |
| Fuselage / gear geometry | 🟧 | -900 shell | -900 is ~7 m shorter with **four-wheel** bogies, not the -1000's **six-wheel** — ground turn/stand footprint wrong | Plan stands/turns to the real -1000 length (73.79 m); do not trust the -900 footprint |
| Engine variant / thrust | 🟥 | -900 shell | Trent XWB-84 (-900), not the **-97** — burn/thrust/field length differ from the -1000 | Apply a -900→-1000 correction to burn/field comparisons; prefer a true -1000 for fuel work |
| Weather radar | 🟧 | FlightFactor A350 | XP11 weather-radar behaviour is degraded vs newer sims | Cross-check MET/SIGMET externally; don't rely solely on WXR returns |
| Navdata / AIRAC | 🟧 | Both | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | Both | Modelled performance is approximate; not certified data | Use the SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: confirm the **FlightFactor A350 -1000 variant** loads, then run the test pass on it (XP11).
- **ETOPS/EDTO modelling fidelity 🟥.** The A35K is an EDTO backbone (Dispatch §5, type certified to 370 min, K Global approved 180 min). **No add-on simulates operator EDTO approval, critical-fuel scenarios or en-route-alternate adequacy** — those are dispatch/OFP disciplines, not sim features. The sim can fly the routing and a single-engine driftdown (FlightFactor models engine-out at study level), but the **decompression + engine-out critical-fuel check remains an OFP/OM E task** and must not be inferred from in-sim behaviour. 🟥
- **AIRAC/navdata dependency 🟥.** The longest premium trunks route through oceanic/near-polar tracks that demand a **current AIRAC cycle**; an out-of-date cycle breaks the FMS route, waypoints and ETOPS entry/exit points. Pilots must maintain current navdata before dispatching an A35K leg. 🟥
- **Field-length / hot-and-high realism 🟧.** If a -900 shell is flown, its lower MTOW and XWB-84 thrust will **understate** the -1000's field length and thrust-limited hot-and-high behaviour (Intro §6, Dispatch §4) — do not clear a length-critical or high-elevation departure on the strength of the -900's in-sim margin.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- FlightFactor — A350 XWB Advanced product page (X-Plane.Org Store) — https://store.x-plane.org/Airbus-A350-XWB-Advanced_p_838.html
- FlightFactor — developer site — https://www.flightfactor.aero/
- SKYbrary — Airbus A350-1000 (A35K) — https://skybrary.aero/aircraft/a35k
- Airbus — A350-1000 type page — https://www.aircraft.airbus.com/en/aircraft/a350/a350-1000
- Wikipedia — Rolls-Royce Trent XWB — https://en.wikipedia.org/wiki/Rolls-Royce_Trent_XWB

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models (FlightFactor A350 XWB Advanced lead; -1000 variant availability + approval both left open `[VERIFY]`, -900 shell fallback with §2 variant corrections); noted A350 two-hydraulic-system / auto-emergency-descent architecture |
