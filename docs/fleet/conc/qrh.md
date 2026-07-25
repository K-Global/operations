<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  CONC Concorde (supersonic transport)
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# CONC — Concorde · QRH

**CONC / Concorde** · flown as Colimata Concorde FXP (XP11 build) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's own drills are authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). Concorde is **three-crew** (CA/FO/FE) and **supersonic** — several hazards below have no equivalent on the subsonic fleet. All content is re-expressed in K Global's own words; **no verbatim text**. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Three-crew philosophy: **CA/FO fly and manage the flight path; the FE works the systems/fuel/electrics panel** and actions most non-normals at the FE station. In a single-operator sim, one pilot does both — train the split anyway.
- **Memory items** (Ch 1, 🟥) are done from memory; everything else: stabilise, then read.
- **Supersonic-specific reality 🟥:** an emergency at Mach 2 / FL600 usually means **decelerate and descend a long way before any approach** — energy and time management dominate. The CG must stay within the (narrow, speed-dependent) supersonic envelope throughout any deceleration.
- **Model caveat 🟧:** the Colimata FXP add-on models supersonic flight, reheat and CG transfer, but the **XP11 build**'s failure-logic depth must be confirmed (Sim-Model §3–4) — treat each drill as a procedural exercise and verify what actually triggers `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Engine surge / violent bang at high Mach** 🟥 | Reduce Mach/thrust on the affected engine, keep wings level, monitor intake/engine params; if surge persists throttle affected engine back / shut down per drill | Assess intake system, decelerate, read Ch 2 |
| **CG out of limits (fwd or aft)** 🟥 | **Correct fuel transfer immediately** — pump toward the deficient tanks; **adjust Mach to match the CG** (do not accelerate/decelerate away from the envelope); do not force into the corner | Re-establish CG-vs-Mach schedule, read Ch 6 |
| **Rapid decompression (FL600)** 🟥 | **Oxygen masks ON**, crew comms; **decelerate + emergency descent** — thrust back, descend toward FL500 then lower as structure/CG allow; manage CG forward as you slow | PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Affected engine: throttle IDLE → **fuel/HP cock OFF** → **fire handle/agent** per drill; reheat off | Secure, decelerate, divert, read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake; **shut all four engines down**; if evac ordered → command evacuation, cut fuel/electrics per FE secure flow | Cabin evac, RFF/ATC, read Ch 14 |

*Memory-item modelling 🟧: confirm the XP11 FXP build reproduces engine-surge, CG-limit, decompression and fire logic before training to it; treat each as a procedural drill regardless `[VERIFY]`.*

## Ch 2 — Engines / power plant (four Olympus 593, reheat)
### Engine surge / intake malfunction 🟥
- **Recognition:** loud bang/thump, thrust/EGT fluctuation, yaw — **most likely at high Mach** where the variable intake manages supersonic airflow into the engine; an intake ramp/spill-door fault can unstart the intake and surge the engine.
- **Actions:** reduce Mach/thrust on the affected engine, keep the intake within its schedule; if surge persists, throttle back or shut the affected engine down per drill; **decelerate** — surge margin improves subsonically.
- **Notes / model 🟧:** confirm how deeply the XP11 FXP build models intake/surge behaviour `[VERIFY]`.

### Reheat failure / fails to light or cancel
- **Recognition:** reheat does not light for takeoff/transonic accel, or fails to cancel.
- **Actions:** for a **reheat-out on takeoff**, apply the reduced-thrust takeoff/refusal logic — reheat provides the takeoff thrust margin, so a failure may require reject or a performance-limited continuation per drill 🟥 `[VERIFY]`; for **transonic accel** without reheat, acceleration through the drag rise may be slow or impossible — **may preclude going supersonic**; for a **stuck-on reheat**, manage fuel burn and cancel manually.
- **Notes / model 🟧:** confirm reheat modelling on the flown build.

### Engine failure / flameout / relight
- **Recognition:** N1/N2 rollback, EGT/FF drop, yaw.
- **Actions:** maintain control (four-engine asymmetry is milder than a twin, but at high Mach with an outboard engine the yaw and intake interaction matter) · secure per drill · **decelerate to a relight/handling envelope** · reassess performance and range — **an engine out supersonic forces a subsonic descent and a serious range/fuel reassessment** 🟥.
- **Notes / model 🟧:** single/dual-engine handling fidelity on the XP11 build `[VERIFY]`.

## Ch 3 — Fire, smoke & fumes
### Engine fire 🟥
- **Recognition:** fire warning + params on the affected engine.
- **Actions:** throttle IDLE · **fuel/HP cock OFF** · **fire handle / agent** per drill · reheat off · secure, decelerate, divert.
- **Notes / model 🟧:** fire/agent logic depth to be confirmed on the flown build.
### Cabin / avionics smoke or fumes
- **Recognition:** smell/smoke — note the **high cabin differential** and small windows of a Mach-2 pressure hull.
- **Actions:** masks/goggles ON, isolate the suspected source (FE elec load-shed), consider **decelerate + descend + land ASAP**.

## Ch 4 — Electrical
- **Generator/AC loss (per engine):** FE manages bus transfer, monitors remaining sources — single loss is within redundancy. 🟩
- **Multiple generator loss / emergency electrical config:** FE confirms essential buses powered, shed load, expedite descent/landing; expect degraded systems including some fuel-transfer/CG automation — **manage CG manually with Mach** 🟥.
- **Notes / model 🟧:** emergency-electrical reversion depth on the XP11 build `[VERIFY]`.

## Ch 5 — Hydraulics & flight controls
- **Architecture:** multiple independent hydraulic systems drive the **elevons and rudder** (no flaps/slats). A single-system loss is tolerable; the FE manages system selection.
- **Multiple-system loss:** expect degraded control response and possible reversion; plan a higher-speed, higher-attitude delta approach and confirm runway length. Cross-ref Ch 8.
- **Notes / model 🟧:** flight-control failure logic depth to be confirmed `[VERIFY]`.

## Ch 6 — Fuel & CG (signature chapter) 🟥
- **CG out of limits (fwd or aft) 🟥:** the transonic CG envelope is **narrow and speed-dependent** — the CG must sit aft for supersonic cruise and forward for low speed. If CG drifts toward a limit: **correct fuel transfer toward the deficient trim tank AND adjust Mach to match the CG** (the two are coupled). Never accelerate/decelerate away from the envelope — that widens the gap. This is the single most type-specific emergency on the aircraft (Intro §7, Checklist).
- **Fuel-transfer / trim-pump fault 🟥:** if aft/forward transfer fails, **you cannot freely change Mach** — the CG can no longer be tracked. Restrict Mach to whatever the current CG supports, decelerate deliberately, and plan a subsonic recovery. 🟥 `[VERIFY]`
- **Imbalance / leak:** FE isolates per drill, recomputes fuel/range (range is already tight — Dispatch §3), diverts.
- **Notes / model 🟧:** confirm the XP11 build models trim-tank transfer, CG indication and the CG/Mach coupling — **the most important system to validate** (Sim-Model §3) `[VERIFY]`.

## Ch 7 — Flight controls & high-lift
- **No flaps/slats:** low-speed lift is delta **vortex lift** at high AoA — there is no high-lift device to fail, but there is also **no flap margin** to trade; respect minimum speeds and the high approach attitude.
- **Elevon / rudder faults:** manage per drill; a control fault plus the delta's high-attitude approach compounds the sight-picture challenge — brief it. `[VERIFY]`

## Ch 8 — Landing gear, brakes & tyres 🟥
- **Tyre failure 🟥:** a **real, defining hazard** for this type — high-pressure tyres, high takeoff/landing speeds, and a delta undercarriage make tyre debris and its consequences a top-tier risk. On a tyre burst: control the aircraft, expect possible structural/system damage from debris, brief RFF, minimise braking asymmetry. This is the type's historically most serious failure mode — treat with maximum seriousness. 🟥
- **Gear disagree / unsafe:** recycle once; use alternate/free-fall extension per drill; expect no retract afterwards.
- **Brakes / anti-skid:** high landing energy — mind brake/tyre temperatures on the rollout; alternate braking, longer rollout. 🟧

## Ch 9 — Air / pressurisation / supersonic environment 🟥
### Rapid decompression + emergency descent from FL600 🟥
- **Recognition:** cabin-altitude warning at ~FL600 — a **high-differential hull**, so a large-area failure is serious; time of useful consciousness at altitude is short.
- **Actions (memory, Ch 1):** masks ON, crew comms; **decelerate and descend** — thrust back, descend toward FL500 then lower, **managing CG forward as Mach reduces** (the descent and the CG schedule are coupled — a Concorde emergency descent is not a simple push-over); PA, MAYDAY. Then read the pressurisation drill.
- **Notes / model 🟧:** confirm decompression + the coupled CG/Mach descent on the XP11 build `[VERIFY]`.
### Skin / Mach-temperature limit
- **Recognition:** approaching Tmo / skin-temperature limit (~127 °C region) at high Mach.
- **Actions:** reduce Mach to respect the temperature limit — **the Mach limit is a temperature limit**, not just an airspeed one. 🟥
### Ozone / air-conditioning
- **Recognition:** ozone-related cabin-air quality issue if converters fail.
- **Actions:** manage per drill; consider altitude reduction (ozone concentration falls lower down). 🟧
### Cosmic-radiation limit
- **Recognition:** flight-deck radiation meter approaching its limit (elevated at FL500–600, especially at high latitude / solar events).
- **Actions:** **descend** to reduce dose per procedure. 🟧 `[VERIFY]`

## Ch 10 — Navigation & instruments
- **INS / analog instrument faults:** revert to remaining INS/standby instruments; there is **no modern FMS** to fall back on — hand-fly and navigate on remaining sources. 🟩
- **Notes / model 🟧:** period-avionics fidelity on the XP11 build `[VERIFY]`.

## Ch 11 — Communications
- **Radio/transponder failure:** select alternate, squawk 7600, follow lost-comms procedure. 🟧

## Ch 12 — Miscellaneous
- **Windshield/visor, bird strike, structural:** at high speed even minor damage matters — decelerate, assess, land at nearest suitable. Visor/droop-nose faults affect visibility for approach — plan accordingly. `[VERIFY]`
- **Unlawful interference:** squawk 7500, follow security procedure.

## Ch 13 — Abnormal & emergency performance
- **Engine-out supersonic 🟥:** an engine failure at Mach 2 forces a **subsonic descent** and a full range/fuel reassessment — the ~3,900 NM range and reheat/supersonic burn (Dispatch §3) leave little slack; identify the nearest suitable field early.
- **No-flap/slat approach is the *normal* config:** VAPP and the high approach attitude are baseline, not abnormal — but any control/CG abnormality raises the approach speed and attitude further; compute per the flown config and use a long runway. `[VERIFY]`
- **CG-restricted flight:** with a transfer fault (Ch 6) the achievable Mach is capped by the current CG — plan the whole recovery around that limit. 🟥
- Method/figures re-derived from public data; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Trigger:** commander's decision after fire/tyre event/major failure.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake; **shut down all four engines**; FE cuts fuel/electrics per secure flow; command evacuation, keep essential lighting/comms; RFF/ATC MAYDAY.
- **Crew coordination:** CA/FO secure the aircraft, FE completes the electrical/fuel secure, cabin crew direct evacuation clear of any fire/fuel — note a supersonic hull carries a large fuel load (Dispatch §1) and a possible tyre/fuel-fire scenario on the ground. Move upwind, account for all.
- **Notes / model 🟧:** secure/evac logic not modelled to real depth — train the flow conceptually.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Aérospatiale / BAC Concorde (CONC) — https://skybrary.aero/aircraft/conc
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- Heritage Concorde — fuel/CG transfer, intake system, systems — https://www.heritageconcorde.com/
- Heritage Concorde — Olympus 593 Mk 610 / reheat — https://www.heritageconcorde.com/concorde-olympus-593-mk610-engines
- Wikipedia — Concorde (systems, operations, safety) — https://en.wikipedia.org/wiki/Concorde

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered three-crew abnormal/emergency reference re-expressed for a supersonic four-engine delta. Memory items 🟥: engine surge at high Mach, **CG out of limits**, **rapid decompression at FL600 (coupled CG/Mach descent)**, engine fire, evacuation. Concorde-specific hazards captured: engine surge / intake unstart, reheat failure, **fuel-transfer/CG faults (signature Ch 6)**, tyre failure (Ch 8, the type's defining risk), emergency descent from supersonic cruise, skin/Mach-temperature limit, ozone and **cosmic-radiation** descent limits. XP11 FXP build failure-logic flagged `[VERIFY]`. No airline names per governance. |
