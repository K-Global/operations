<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  CL30 Bombardier Challenger 300
  Thorough, chaptered abnormal/emergency reference, tailored to the identified candidate.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# CL30 — Bombardier Challenger 300 · QRH

**CL30 / Bombardier Challenger 300** · flown as the identified X-Plane 11 candidate 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11, crew of two. **In a real non-normal the aircraft's own AFM/QRH is authoritative** — this document supports training and quick recall and is tailored to what the identified candidate actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Twin-turbofan (2 × Honeywell HTF7000), conventional flight controls (manual ailerons; hydraulic elevator/rudder with mechanical reversion), Rockwell Collins Pro Line 21-style crew-alerting. PF flies + manages thrust/config; PM reads and actions the crew-alerting/QRH.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- **Model caveat 🟧:** the identified X-Plane 11 candidate has custom cockpit systems at a mid depth (Sim-Model §3) but builds its FMS/navigation core on default X-Plane logic and is **not confirmed** to reproduce a full certified-systems failure/alerting simulation. Where a step depends on failure logic the model may not simulate, it is flagged 🟧. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/times here are generic-type placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / air-data disagree** 🟥 | Disconnect autopilot/flight director/autothrottle; set **known pitch + thrust** (approx wings-level pitch attitude / climb-detent thrust below the reference speed, then adjust) `[VERIFY]`; keep clean if able | Level off, troubleshoot air-data source, use standby instruments if fitted, read Ch 10 |
| **Emergency descent (rapid decompression)** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speed brake, target max operating speed as structure permits; turn off track if needed; descend toward **FL100 / MSA** | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Thrust lever idle → **fuel/engine shutoff**; **fire push-button** actioned; **discharge agent** per crew-alerting/time | Confirm fire out, secure, divert; read Ch 2/3 |
| **Rejected takeoff (below V1)** 🟥 | Thrust levers **idle**; **max braking**, spoilers/speed brake deployed, reverse thrust as required; maintain directional control | Stop on runway, assess, notify ATC/RFF as needed |
| **Stall warning (stick shaker) / stick pusher** 🟥 | Reduce angle of attack immediately — nose down, **do not fight the pusher**; increase thrust; wings level; recover, then clean up | Monitor speed margin, resume, read Ch 7 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut engines/APU down**; if evac ordered → **evacuation command**, cut fuel/electrics per secure flow | Direct occupants to usable exits, MAYDAY, read Ch 14 |

*Memory-item modelling 🟧: engine shutdown/fire and evacuation-secure flows are represented on the identified candidate at a functional level; stick-pusher/stall-protection and air-data-fault logic depth are **not independently confirmed** — verify each triggers as expected before training to it `[VERIFY]`.*

## Ch 2 — Engines / APU / power plant
### Engine fire 🟥
- **Recognition:** fire warning + crew-alerting message, possible parameter anomaly (N1/ITT).
- **Actions:** Thrust lever IDLE · fuel/engine shutoff · fire push-button actioned · agent discharge (first, then second if still burning after the interval) · secure, divert.
- **Notes / model:** shutdown/fire-handle flow represented; discharge-agent logic depth 🟧 `[VERIFY]`.

### Engine failure / flameout / in-flight relight
- **Recognition:** parameter rollback (N1/N2/ITT/fuel flow), crew-alerting engine-fail message, yaw.
- **Actions:** Maintain control (rudder for asymmetry) · confirm failed engine · secure per crew-alerting · assess relight envelope · driftdown to one-engine-inop ceiling · consider diversion (Ch 13).
- **Notes / model:** single-engine handling/asymmetry represented at a functional level; driftdown performance is **not** certified-data-accurate on the sim 🟧.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** over-temperature indication on start, stagnant parameters, or thrust not matching lever position.
- **Actions:** Abort start (shutoff), dry-motor per crew-alerting/limits, log; for thrust anomaly cross-check thrust-lever/parameter agreement.
- **Notes / model:** HTF7000 start-limit/FADEC fidelity **not independently confirmed** 🟧 `[VERIFY]` (Sim-Model §2, §4).

## Ch 3 — Fire, smoke & fumes
### APU fire
- **Recognition:** APU fire warning/crew-alerting. · **Actions:** fire push-button, agent, APU master off. · **Notes/model:** functional-level representation expected; depth 🟧 `[VERIFY]`.
### Baggage-compartment smoke
- **Recognition:** smoke warning for the baggage compartment (no main cargo hold on this type — Intro §4). · **Actions:** confirm, discharge compartment agent if fitted, land ASAP. · **Notes/model:** 🟧 may not be simulated on the identified candidate `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, crew-alerting SMOKE message. · **Actions:** masks/goggles, 100% oxygen, isolate suspected source (electrical load-shed), consider emergency descent/land ASAP. · **Notes/model:** smoke-source logic depth 🟧 not confirmed.

## Ch 4 — Electrical
### Generator loss
- **Recognition:** generator-fault crew-alerting message, bus transfer. · **Actions:** per crew-alerting (reset/isolate, manage load), monitor remaining sources.
### Emergency electrical configuration
- **Recognition:** loss of primary AC busses → emergency configuration, standby power sources. · **Actions:** confirm essential busses powered, APU start if available, land ASAP; expect degraded systems. · **Notes/model:** emergency-electrical-configuration depth 🟧 not confirmed `[VERIFY]`.
### Battery-only
- **Recognition:** all generators lost, batteries only. · **Actions:** minimum essential loads, APU priority, expedite landing.

## Ch 5 — Hydraulics
- **Systems:** multiple hydraulic circuits power flight controls (elevator/rudder), gear, brakes, flaps, spoilers and reversers; **ailerons remain manually controlled** regardless of hydraulic state 🟩. One-system loss is generally tolerable; loss of all hydraulic power drives **mechanical reversion** of the elevator/rudder.
- **Single-system loss:** crew-alerting hydraulic-fault message · manage per procedure · note affected surfaces/brakes.
- **Total hydraulic loss:** expect **mechanical reversion** on elevator/rudder (higher control forces), alternate gear extension, alternate/accumulator braking — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** hydraulic-circuit depth and mechanical-reversion behaviour are **not independently confirmed** on the identified candidate — verify before relying on it `[VERIFY]`.

## Ch 6 — Fuel
- **Imbalance:** crew-alerting fuel-imbalance message · balance per procedure, identify cause (leak vs asymmetric burn).
- **Leak:** if a leak is suspected, isolate per crew-alerting, reassess fuel/range and divert; do not blindly cross-feed.
- **Low level / feed / transfer fault:** manage transfer pumps, recompute reserves (Dispatch §3/§5).
- **Notes / model 🟧:** fuel-system logic depth not independently confirmed.

## Ch 7 — Flight controls & high-lift
### Manual reversion (loss of hydraulic power to elevator/rudder)
- **Recognition:** crew-alerting flight-control message, increased control forces. · **Actions:** fly with higher forces, plan a longer/flapped approach with margin, brief the crew. · **Notes/model:** mechanical-reversion behaviour 🟧 not independently confirmed.
### Flap jam / asymmetry
- **Recognition:** crew-alerting FLAP fault, asymmetric indication. · **Actions:** stop at safe/current position, compute higher approach speed & landing distance (Ch 13), use a longer runway.
### Speed brake / spoiler fault; trim runaway
- **Actions:** per crew-alerting; for uncommanded pitch trim, use manual trim/disconnect the autotrim path per procedure. 🟧

## Ch 8 — Landing gear, brakes & tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **alternate (gravity/manual) extension**; do not force.
- **Alternate extension:** per crew-alerting/QRH; expect no retract afterwards. · **Notes/model:** alternate-extension logic 🟧 `[VERIFY]`.
- **Brake / anti-skid fault:** alternate/accumulator braking, modulate manually if anti-skid is off, longer rollout, avoid locked wheels.
- **Tyre failure / gear-up or partial:** brief evacuation preparedness, RFF as available, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain
### Rapid decompression + emergency descent 🟥
- **Recognition:** cabin-altitude warning, ear discomfort/rapid cabin-altitude climb. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle thrust, speed brake, target max operating speed as structure allows, off-track if required, level **FL100/MSA**; PA, MAYDAY. Then crew-alerting/QRH for pressurisation configuration. · **Notes/model:** cabin-altitude/emergency-descent logic depth 🟧 not confirmed.
### Bleed / pressurisation-source fault
- **Actions:** per crew-alerting, single-source operation, consider altitude limit; monitor cabin altitude.
### Anti-ice
- **Actions:** wing/engine anti-ice ON in icing conditions, note performance/bleed-air penalty.

## Ch 10 — Navigation, instruments & autoflight
### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, air-data flags. · **Actions (memory, Ch 1):** autopilot/flight director/autothrottle OFF, **pitch + thrust** table `[VERIFY]`, identify the faulty source, use remaining/standby indications, then troubleshoot. · **Notes/model:** air-data-fault logic 🟧 not confirmed (Sim-Model §2).
### Attitude/display fault, autopilot/flight-director/autothrottle fault, GPS/RNP loss
- **Actions:** revert to remaining displays/sources; for RNP loss downgrade navigation and advise ATC; hand-fly if autoflight is lost. · **Notes/model 🟧:** depth built on default X-Plane FMS/nav core (Sim-Model §2) — verify before training to it.

## Ch 11 — Communications
- **Radio / audio failure:** select alternate radio/audio path, squawk 7600, follow the lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select alternate transponder mode, advise ATC. · **Notes/model 🟧:** basic representation expected.

## Ch 12 — Miscellaneous
- **Door / baggage-compartment fault:** confirm status before pressurising; disarm any emergency equipment before opening a door on the ground.
- **Windshield heat, bird strike, volcanic ash:** stabilise, assess damage/engine effect, for ash exit the cloud (descend/turn), reduce thrust changes, land at the nearest suitable aerodrome.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** not simulated on the identified candidate.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-configuration landing distance & approach-speed increments** (flap fault, manual reversion): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inop ceiling:** on engine loss, follow driftdown to the OEI ceiling; feeds any extended-diversion/critical-fuel check — **dispatch discipline, not sim-modelled**, and no K Global EDTO rule time is established for this type (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above MLW, use overweight-landing technique/speed, expect longer distance, inspection required. `[VERIFY]`
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, gear collapse or major failure.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; shut down **engines and APU**; if evacuation ordered → **evacuation command/signal**, cut fuel and non-essential electrics per secure flow, keep essential lighting/comms; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft; direct occupants to the usable exits (assess fire side/wind), account for all, move upwind. Crew of two — no separate cabin crew station assumed for this type; brief passengers/occupants directly.
- **Notes / model 🟧:** shutdown/secure flow represented; the occupant evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Bombardier Challenger 300 (CL30) — https://skybrary.aero/aircraft/cl30
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Stick Pusher (general) — https://skybrary.aero/articles/stick-pusher
- Wikipedia — Bombardier Challenger 300 (flight-control architecture, engines) — https://en.wikipedia.org/wiki/Bombardier_Challenger_300
- X-Plane.Org Store — Bombardier Challenger 300 v2 Captain Edition (simulated-systems scope) — https://store.x-plane.org/Bombardier-Challenger-300-v2-Captain-Edition-XP11_p_749.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered twin-turbofan/conventional-controls abnormal/emergency reference re-expressed; memory items 🟥 (unreliable airspeed, emergency descent, engine fire, rejected takeoff, stall/stick-pusher, evacuation); figures `[VERIFY]`; model-depth caveats throughout (Sim-Model cross-ref). |
