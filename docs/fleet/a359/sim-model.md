<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  A359 Airbus A350-900
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# A359 — Airbus A350-900 · Sim-Model

**A359 / A350 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **FlightFactor A350** (A350-900, Trent XWB) | X-Plane 11 / 12 (Advanced) `[VERIFY — K Global test]` | mid-to-study (advanced systems; FMS simplified) | 🟧 Conditional — leading candidate; approval pending |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** A350 of any variant |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any A350 add-on, so nothing here is 🟩 Approved. Unlike the A330 family, the X-Plane A350 space is effectively **single-supplier**: no study-level ToLiss A350 exists, so the FlightFactor A350 is both the leading candidate and the practical only option on XP11. The Intro §2 mapping line (`Sim model: FlightFactor A350 [VERIFY]`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to the FlightFactor build and every model-specific figure stays `[VERIFY]`.

**Why FlightFactor A350 leads:** it is the **actual A350-900 with Trent XWB** — correct airframe, engine, six-display CDS, FBW law structure and the 2H/2E hydraulic/electric architecture — so it carries **no** variant/engine fidelity penalty against the SimBrief A359 / Trent XWB dispatch profile (Dispatch §2) or the Intro §2 mapping. Cruise burn, ceiling and general handling should track the OFP without a variant correction (contrast the A339 pack, where the fallback model was a ceo airframe). The caveat is **depth, not airframe**: the model's FMS is **simpler than a full FMGS** (basic SID/STAR handling, some fields differ) and several failure/ECAM behaviours are shallower than a true study aircraft — see §3.

## 2. Type ↔ model fidelity note 🟧

- **FlightFactor A350** *is* an A350-900 with **Trent XWB** — it matches the real type, the SimBrief A359 / Trent XWB dispatch profile (Dispatch §2) and the Intro §2 mapping directly. Cruise burn (~5.8 t/hr public long-haul reference), ceiling (~FL431) and FMS lateral behaviour should track the OFP without a variant correction. This is the fidelity-preferred **and** only path on XP11. 🟩 (airframe fidelity) / 🟧 (approval still pending)
- **No ceo/neo or engine mismatch exists** for this type — the A350 has a single powerplant family (Trent XWB) and no ceo predecessor, so the fuel/thrust mismatch that dogs the A339 fallback does **not** apply here. The A359 fidelity risk is concentrated in **systems/FMS depth** (§3), not in the airframe or engine.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). Because there is no reference A359 OFP on file yet (Dispatch §7 watch-item), treat all burn figures as public-Airbus-derived targets the model should approximate but which are not OFP-verified.

## 3. Systems-depth caveats

- **FlightFactor A350 (mid-to-study):** advanced systems simulation — FBW normal/alternate/direct law, six-display CDS with ECAM-style warnings, the **two-circuit (Green/Yellow) 2H/2E hydraulic architecture** with electric backup, four-generator electrical system with **RAT** emergency generation, engine start and Trent XWB model, autoflight/ATHR, fuel including **trim-tank CG management**, and a failure set — enough that the Checklist and QRH can be flown largely as real. **Depth limits:** the **FMS is simpler than a full FMGS** (basic SID/STAR, some fields/behaviours differ), and several non-normals are **abstracted or partially modelled** — the ECAM does not reproduce the full real failure logic for every system 🟧. Verify each abnormal actually triggers and resolves as written before relying on the QRH against it `[VERIFY]`.
- **XP11 vs XP12:** the FlightFactor A350 runs on XP11, but XP12's lighting/weather/ground-handling engine gives more faithful environmental cues (weather radar, night lighting); on XP11 those are less refined 🟧. If K Global standardises on XP12, re-baseline the pack at that point.
- **General:** the model does **not** reproduce real certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| FMS depth | 🟧 | FlightFactor A350 | FMS simpler than a full FMGS — basic SID/STAR, some PERF/F-PLN fields differ from the real jet | Follow the DIFSRIP page order; hand-check the route/procedure vs OFP; expect fewer managed refinements |
| Failure / ECAM depth | 🟧 | FlightFactor A350 | Advanced but not full study-level failure logic; some QRH abnormals partially or not modelled | Use for normal-ops confidently; treat 🟧 QRH items as reference; confirm each failure triggers before training to it |
| Weather radar | 🟧 | FlightFactor A350 | XP11 weather-radar behaviour is degraded vs XP12 | Cross-check MET/SIGMET externally; don't rely solely on WXR returns |
| Night lighting / PBR | 🟧 | FlightFactor A350 | XP11 lighting less refined than XP12 | Cosmetic; verify house-livery appearance on the flown build (see Livery §4) |
| Navdata / AIRAC | 🟧 | FlightFactor A350 | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities / missing SIDs-STARs |
| Perf realism | 🟧 | FlightFactor A350 | Modelled performance is approximate; not certified data | Use the SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the FlightFactor A350 and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **FlightFactor A350 (XP11)** — with no study-level alternative in the X-Plane A350 space, this is the single decision gating the pack.
- **ETOPS/EDTO modelling fidelity 🟥.** The A359 is the ETOPS backbone of the intercontinental network (Dispatch §5, EDTO rule time 180 min, type certified to 370 min). **No add-on simulates operator EDTO approval, critical-fuel scenarios or en-route-alternate adequacy** — those are dispatch/OFP disciplines, not sim features. The model can fly the routing and a single-engine driftdown, but the **decompression + engine-out critical-fuel check remains an OFP/OM E task** and must not be inferred from in-sim behaviour. 🟥
- **AIRAC/navdata dependency 🟥.** Long ultra-long-haul trunks (transoceanic/transpacific/deep-polar) route through oceanic/polar tracks that demand a **current AIRAC cycle**; an out-of-date cycle breaks the FMS route, waypoints and ETOPS entry/exit points — and this is more exposed on a model whose FMS is already simplified. Pilots must maintain current navdata before dispatching an A359 leg. 🟥
- **ULR sub-fleet not distinctly modelled 🟧.** The A350-900 ULR (extended tankage, 250-pax config) is a fuel-system/weight variant, not a separate airframe; the add-on will not represent the ULR tankage or CG behaviour distinctly — apply the ULR overrides at the SimBrief/dispatch layer (Dispatch §2/§4), not from the sim.
- **XP11 vs XP12 divergence 🟧.** If the fleet later moves to XP12, the FlightFactor A350 gains improved weather/lighting/ground handling — re-test and re-baseline the Checklist/QRH at that point (Instructions §5 trigger: "Approved sim model / version / new AIRAC").

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- FlightFactor — A350 product page (X-Plane.Org Store) — https://store.x-plane.org/Airbus-A350-XWB-Advanced_p_268.html
- FlightFactor — official site — https://flightfactor.aero/
- X-Plane.Org — FlightFactor A350 forum / support — https://forums.x-plane.org/
- SKYbrary — Airbus A350-900 (A359) — https://skybrary.aero/aircraft/a359
- EASA — TCDS EASA.A.151 Airbus A350 — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa151-airbus-a350

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model (FlightFactor A350, XP11/12 lead; effectively single-supplier for the type); correct airframe/engine so no variant penalty, fidelity risk is FMS/systems depth; approved-model decision left open `[VERIFY]`. |
