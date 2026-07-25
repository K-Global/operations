<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  E75 Embraer E175
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# E75 — Embraer E175 · QRH

**E75 / E-Jet family — common type rating E170/E175** · flown as X-Crafts E175 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's EICAS/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Embraer E-Jet philosophy: **EICAS drives the response** — a caution/warning message cues the crew to the associated checklist, which is normally worked from the on-screen electronic checklist; PF flies + manages thrust/config, PM reads and actions the EICAS message/checklist.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- **Model caveat 🟧:** the X-Crafts E175 represents engine, electrical, hydraulic and fuel logic with reasonable depth; pneumatics/air-management logic is simplified (checklist-response level, not full fault injection). Where a step depends on failure logic the model may not fully simulate, it is flagged 🟧. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / air-data disagree** 🟥 | Disconnect AP/FD/autothrottle; set **known pitch + thrust** (approx wings-level pitch attitude / climb thrust below the reduction altitude, then adjust) `[VERIFY]`; keep clean if able | Level off, identify the faulty air-data source, use remaining/backup indications, read Ch 10 |
| **Emergency descent (rapid depressurisation)** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speedbrake, target max operating speed as structure permits; turn off track if needed; descend to **FL100 / MSA** | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Thrust lever idle → fuel/ignition to the affected engine OFF; **fire handle** pull; **discharge extinguisher agent** per EICAS/timing | Confirm fire out, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut engines/APU down**; if evac ordered → **EVAC command**, cut fuel/electrics per flow | Cabin evac signal, ATC/RFF, read Ch 14 |
| **Stall warning / stall** 🟥 | Nose down, reduce angle of attack; **apply thrust** (unless near ground low-energy — pitch priority); wings level; recover, then clean up | Monitor speed, resume, read Ch 7 |

*Memory-item modelling 🟧: engine fire/discharge, air-data faults and depressurisation are represented with reasonable depth on the X-Crafts E175; verify each triggers before training to it.*

## Ch 2 — Engines / APU / power plant
### Engine fire 🟥
- **Recognition:** EICAS fire warning, possible N1/EGT anomaly.
- **Actions:** Thrust lever IDLE · fuel/ignition to the engine OFF · fire handle pulled · discharge agent 1 (then agent 2 if still burning after the interval) · secure, divert.
- **Notes / model:** fire-handle and dual-agent logic represented 🟧 `[VERIFY]`.

### Engine failure / flameout / in-flight relight
- **Recognition:** N1/N2 rollback, EGT/fuel-flow drop, EICAS engine-fail message, yaw.
- **Actions:** Maintain control (rudder for asymmetry) · confirm failed engine · secure per EICAS · assess relight envelope (windmill/starter) · driftdown to one-engine-inop ceiling.
- **Notes / model:** single-engine handling + driftdown represented; asymmetry feel is approximate 🟧.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** EGT over-temperature on start, stagnant N2, or thrust not matching lever position.
- **Actions:** Abort start (fuel/ignition off), dry-motor per EICAS/limits, log; for thrust anomaly cross-check autothrottle/thrust lock.
- **Notes / model:** start-abuse logic present 🟧 `[VERIFY]`.

## Ch 3 — Fire, smoke & fumes
### APU fire
- **Recognition:** APU fire warning/EICAS. · **Actions:** APU fire handle, agent, APU master OFF. · **Notes/model:** represented 🟧.
### Cargo smoke
- **Recognition:** cargo smoke warning. · **Actions:** confirm, **discharge cargo agent**, land ASAP, isolate per EICAS. · **Notes/model:** 🟧 may not be fully simulated `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, EICAS smoke message. · **Actions:** masks/goggles, 100% oxygen, isolate suspected source (electrical load-shed), consider emergency descent/land ASAP. · **Notes/model:** smoke-source logic limited 🟧.

## Ch 4 — Electrical
### Generator / IDG loss
- **Recognition:** EICAS generator fault, automatic bus-tie transfer between the two independent electrical networks. · **Actions:** per EICAS (generator off/reset, manage load), monitor remaining sources.
### Emergency electrical config / RAT
- **Recognition:** loss of AC buses → RAT auto-deploy available (manual deploy also possible), emergency configuration. · **Actions:** confirm essential buses powered, APU start if available, land ASAP; expect degraded systems. · **Notes/model:** RAT deployment and emergency-electrical config represented 🟧 `[VERIFY]`.
### Battery-only
- **Recognition:** all generators lost, batteries only (Battery 2 is dedicated to the APU start bus). · **Actions:** minimum essential loads, APU/RAT priority, expedite landing.

## Ch 5 — Hydraulics
- **Systems:** the real type operates independent hydraulic circuits; any hydraulic pump can provide sufficient pressure for the systems that require it. One-circuit loss is generally tolerable; multi-loss degrades flight controls, gear and braking.
- **Single-system loss:** EICAS hydraulic fault · manage per EICAS · note affected surfaces/brakes.
- **Double/multi-loss:** expect degraded flight-control response, alternate/gravity gear extension, alternate braking — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** hydraulic synoptic and reversions represented at mid-to-study depth; verify specific reversions before training to them `[VERIFY]`.

## Ch 6 — Fuel
- **Imbalance:** EICAS fuel imbalance · open crossfeed, balance per procedure, identify cause (leak vs asymmetric burn).
- **Leak:** if leak suspected, **do not** open crossfeed blindly; isolate per EICAS, reassess fuel/range and divert.
- **Low level / feed / transfer fault:** manage transfer pumps as required; recompute reserves (Dispatch §3).
- **Notes / model 🟧:** crossfeed/transfer logic modelled; verify depth before relying on it for training.

## Ch 7 — Flight controls & high-lift
### Control degradation
- **Recognition:** EICAS flight-control message, reduced control authority/protections. · **Actions:** fly manually as needed, respect that protections may be reduced, plan a flapped/managed approach (higher approach speed), expect a different control feel with gear down. · **Notes/model:** the real type's fly-by-wire primary/secondary surfaces with cable-driven ailerons are represented; degradation logic is approximate 🟧.
### Flap / slat jam
- **Recognition:** EICAS flap/slat lock message. · **Actions:** stop at safe configuration, compute higher approach speed & landing distance (Ch 13), longer runway.
### Speedbrake / spoiler fault; trim runaway
- **Actions:** per EICAS; for uncommanded pitch trim, use manual trim/disconnect the autotrim path per procedure. 🟧

## Ch 8 — Landing gear, brakes & tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **gravity (free-fall) extension**; do not force.
- **Alternate / gravity extension:** per EICAS/QRH; expect no retraction afterwards. · **Notes/model:** gravity extension represented 🟧 `[VERIFY]`.
- **Brake / anti-skid fault:** alternate braking (modulate manually as required), longer rollout, avoid locked wheels.
- **Tyre failure / gear-up or partial:** brief evacuation, foam/RFF as available, minimise braking asymmetry.
- **Autobrake:** the real 5-position system (RTO/OFF/LO/MID/HI) is represented — select per landing performance requirement. 🟩

## Ch 9 — Air / pressurisation / ice & rain
### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin altitude warning, rate of cabin-altitude climb, excess cabin altitude message. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle, speedbrake, maximum operating speed as structure allows, off-track if required, level **FL100/MSA**; PA, MAYDAY. Then EICAS/QRH for pressurisation configuration. · **Notes/model:** cabin-altitude logic and emergency descent represented; depth of pressurisation-fault logic is 🟧 `[VERIFY]`.
### Pack / bleed fault
- **Actions:** per EICAS, single-pack ops, consider altitude limit; monitor cabin altitude. · **Notes/model:** air-management logic is simplified (checklist-response level) — treat as procedural training 🟧.
### Anti-ice
- **Actions:** wing/engine anti-ice ON in icing, note performance/bleed penalty.

## Ch 10 — Navigation, instruments & autoflight
### Unreliable airspeed / air-data fault 🟥
- **Recognition:** speed/altitude disagree, air-data-source fault flags. · **Actions (memory, Ch 1):** AP/FD/autothrottle OFF, **pitch + thrust** table `[VERIFY]`, identify faulty source, use remaining/backup indications, then troubleshoot. · **Notes/model:** air-data fault logic represented 🟧 `[VERIFY]`.
### Sensor fault, display loss, autoflight fault, RNP/GPS loss
- **Actions:** revert to remaining sources/displays; for RNP loss downgrade navigation and advise ATC; hand-fly if autoflight lost. · **Notes/model 🟧:** the moving-map/NAV display is limited-range on this model — cross-check against charts.

## Ch 11 — Communications
- **Radio / audio failure:** select alternate radio/audio path, squawk 7600, follow lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select alternate transponder, advise ATC. · **Notes/model 🟧:** basic functions represented.

## Ch 12 — Miscellaneous
- **Door / slide fault:** EICAS door indication, confirm before pressurising; disarm slides before any door open.
- **Windshield heat, water/waste, bird strike:** stabilise, assess damage/engine effect, reduce thrust changes, land at nearest suitable.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-config landing distance & approach-speed increments** (flap/slat-less, degraded controls): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inop ceiling:** on engine loss, follow driftdown to the OEI ceiling. The E75's short-haul City/Regional network sits inside the 60-minute diversion standard, so no EDTO critical-fuel check applies (Dispatch §5) — this differs from K Global's EDTO-backbone widebody types.
- **Overweight landing:** if landing above MLW `[VERIFY]`, use overweight-landing technique/speed, expect longer distance, inspection required. `[VERIFY]`
- Method and figures are re-derived from public data; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire/major failure.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alert**; shut down **engines and APU**; if evacuation ordered → **EVAC command/signal**, cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure aircraft, cabin crew direct evacuation to usable exits (assess fire side/wind), account for all, move upwind.
- **Notes / model 🟧:** shutdown/secure flow is represented; passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Aircraft type reference — https://skybrary.aero/
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- EASA — Type-Certificate Data Sheet EASA.IM.A.001, Embraer ERJ 170 — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25-cs-22-cs-23-cs-vla-cs-lsa/easaima001-erj-170
- X-Crafts — E-Jets Family for X-Plane (simulated-systems scope) — https://www.xcrafts.com/ejets-family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered E-Jet EICAS abnormal/emergency reference re-expressed for the E175; memory items 🟥 (unreliable airspeed, emergency descent, engine fire, evacuation, stall); figures `[VERIFY]`; consistent with the common E170/E175 type-rating pair. |
