<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  B77W Boeing 777-300ER
  Thorough, chaptered non-normal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory/recall item — immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# B77W — Boeing 777-300ER · QRH

**B77W / 777 family** · flown as FlightFactor 777 (-300ER) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for non-normal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's EICAS/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror the Boeing non-normal grouping. Flag legend 🟥 memory/recall item · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Boeing philosophy: **EICAS annunciates; the crew flies the aircraft first, then runs the non-normal checklist for the EICAS message.** A small set of **memory (recall) items** (Ch 1, 🟥) are done from memory with no reference; everything else is read-and-do from the QRH after the flight path is secure. PF flies/manages thrust & config; PM reads and actions the checklist.
- **Recall vs read-and-do:** the RECALL switch redisplays EICAS alerts. Only the Ch 1 items are memorised; all other chapters are reference checklists.
- **Model caveat 🟧:** FlightFactor 777 is study-level and drives real EICAS/non-normal logic for most items, but some deep or compound non-normals may **not trigger or fully resolve** on the XP11 build. Where a step depends on failure logic the model may not simulate, it is flagged 🟧. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory / recall items (immediate action) 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Airspeed unreliable** 🟥 | Autopilot/autothrottle/flight-director OFF; set **known pitch + thrust** (e.g. flaps-up wings-level attitude + climb/cruise thrust as applicable) `[VERIFY]`; keep clean if able | Level off, identify the good source, use standby/alternate, read Ch 10 |
| **Cabin altitude / rapid depressurization → Emergency descent** 🟥 | **Oxygen masks / crew comms** ON; if cabin uncontrollable, **initiate emergency descent** — thrust idle, speedbrake, descend at max appropriate speed (VMO/MMO as structure permits), turn off track if needed, target **FL100 / MSA** | Signs on, PA, MAYDAY, read Ch 2/Ch 12-maneuvers |
| **Engine fire / severe damage / separation** 🟥 | Autothrottle affected engine OFF; **thrust lever CLOSED**; **fuel control switch CUTOFF**; **engine fire switch PULL** (rotate to discharge per interval) | Confirm fire out, secure, divert; read Ch 8/Ch 7 |
| **Dual engine failure / loss of thrust both engines** 🟥 | Establish **glide/relight speed**; fuel control switches CUTOFF then RUN (relight attempt); RAM air/APU as available; set up for driftdown/forced landing | Read Ch 7; declare emergency; plan nearest suitable |
| **Traffic (TCAS RA)** 🟥 | Disconnect autopilot as required; **follow RA guidance** promptly and smoothly; do not manoeuvre opposite the RA | Return to clearance when "clear of conflict", advise ATC |
| **Ground proximity / terrain (PULL UP)** 🟥 | **Max thrust, wings level, rotate to pitch-limit / stick-shaker**; do not descend until terrain cleared | Continue climb to safe altitude, read Ch 12 |
| **Windshear** 🟥 | **Max thrust, wings level, pitch for climb (toward pitch-limit if needed)**; do not change config until clear | Escape, report, reassess approach/departure |
| **Rejected takeoff (before V1)** 🟥 | **Thrust idle, max braking (autobrake RTO), speedbrake, reverse**; maintain directional control | Stop, assess (fire/evac Ch 8/Ch 14), advise ATC |

*Memory-item modelling 🟧: FlightFactor simulates airspeed/ADIRU faults, engine fire/cutoff/discharge, depressurisation and TCAS/GPWS credibly on most builds; some may be abstracted — verify each triggers before training to it `[VERIFY]`.*

## Ch 1a — General (doors, oxygen, misc annunciations)
- **Door not closed/locked (entry/cargo/access):** confirm before pressurising; do not pressurise with a DOOR message unresolved.
- **Crew oxygen low:** verify quantity vs dispatch minimum; consider altitude/ETOPS implications.
- **Notes/model 🟧:** door-page + oxygen logic generally modelled; confirm on build.

## Ch 2 — Air systems / pressurization
- **CABIN ALTITUDE (excess cabin alt):** don masks/comms; if uncontrollable → emergency descent (Ch 1). Then manage pressurisation config.
- **Bleed leak / bleed off (L, R, body, wing, strut):** isolate the affected bleed per checklist; expect single-source air, possible altitude limit.
- **Pack / ALTN vent / cabin temperature:** run affected-pack checklist; single-pack ops, monitor cabin alt and temperature.
- **Notes/model 🟧:** FlightFactor models cabin-alt + emergency-descent behaviour; deep bleed-isolation logic may be partial `[VERIFY]`.

## Ch 3 — Anti-ice / rain
- **Eng anti-ice on/leak/loss (L, R):** manage per checklist; note bleed/perf penalty with anti-ice on.
- **Wing anti-ice:** ON in icing; watch performance/bleed cost.
- **Notes/model 🟧:** anti-ice effects modelled at surface level; confirm leak logic.

## Ch 4 — Autoflight
- **Autopilot / autothrottle / flight-director disconnect or fault:** hand-fly as required; re-engage remaining channels; for autothrottle loss manage thrust manually.
- **Notes/model 🟧:** autoflight disconnects modelled; compound fault depth may vary.

## Ch 5 — Communications
- **Datalink lost / datalink system:** revert to voice; follow lost-datalink procedure for the airspace.
- **Radio / audio failure:** select alternate radio/audio path, **squawk 7600**, follow lost-comms procedure for the clearance/airspace.
- **Notes/model 🟧:** basic on the build.

## Ch 6 — Electrical
- **AC bus / generator off (L, R, APU):** run affected-bus checklist; manage electrical load, monitor remaining sources.
- **Backup generator / backup system / standby system:** confirm essential/standby busses powered; expect load-shed; APU start if available.
- **Battery / cabin-utility off:** minimum essential loads; expedite as required.
- **Notes/model 🟧:** FlightFactor models bus transfers and backup gens; some reversions may be abstracted `[VERIFY]`.

## Ch 7 — Engines / APU
### Engine fire / severe damage / separation 🟥
- **Recognition:** ENG FIRE / severe-damage EICAS, N1/EGT/vibration anomaly, yaw.
- **Actions:** autothrottle off · thrust lever CLOSED · **fuel control switch CUTOFF** · **engine fire switch PULL** · discharge agent (second bottle if still burning after the interval) · secure, divert.
- **Notes/model:** fire switch + dual bottles modelled on FlightFactor; confirm interval logic 🟧.

### Engine failure / flameout / in-flight start
- **Recognition:** N1/N2 rollback, EGT/FF drop, ENG FAIL EICAS, yaw.
- **Actions:** maintain control (rudder for asymmetry) · confirm failed engine · secure per checklist · assess relight envelope (windmill/starter-assist) · **driftdown to one-engine-inop ceiling** · consider EDTO diversion (Ch 12/Dispatch §5).
- **Notes/model:** single-engine handling + driftdown modelled on FlightFactor 🟧.

### Dual engine failure / loss of thrust both engines 🟥
- **Recognition:** both engines rolled back / no thrust response.
- **Actions:** establish glide/relight speed · fuel control switches CUTOFF→RUN (relight) · RAM/APU electrical as available · plan driftdown/forced landing · declare emergency. (Memory, Ch 1.)
- **Notes/model 🟧:** relight logic present on FlightFactor; verify on build.

### Aborted engine start / autostart / limit-surge-stall / EEC / response
- **Actions:** for hot/hung start → CUTOFF, dry-motor per limits; for surge/stall reduce thrust on affected engine; EEC mode as required; log.
- **Notes/model:** start-abuse and EEC logic present 🟧; confirm depth.

### APU limit / shutdown
- **Actions:** per checklist; if APU fire → Ch 8.

## Ch 8 — Fire protection
- **FIRE ENG (L, R) 🟥:** memory sequence Ch 1/Ch 7 — cutoff, fire switch, discharge.
- **FIRE APU:** APU fire switch, discharge agent, APU shutdown.
- **Engine tailpipe fire:** motor the engine (no agent for tailpipe fire) per checklist; do not discharge into the tailpipe.
- **Smoke / fire / fumes:** don masks/goggles 100%, isolate suspected source (electrical load-shed / bleed isolation), consider emergency descent and **land at nearest suitable**.
- **Cargo fire (fwd/aft/main/bulk):** confirm, **discharge cargo agent**, land ASAP, isolate per checklist.
- **Bottle discharge (eng/APU/cargo) EICAS:** confirms agent state; continue per checklist.
- **Notes/model 🟧:** engine/APU fire + cargo agent modelled on FlightFactor; smoke-source logic may be limited `[VERIFY]`.

## Ch 9 — Flight controls
- **STABILIZER / runaway or jam:** control column/manual trim per checklist; if runaway, cut the affected trim path; expect trim-limited handling.
- **Auto speedbrake / spoiler fault:** per checklist; manual speedbrake as required.
- **Flap / slat disagree or jam:** stop at safe config, compute higher approach speed & landing distance (Ch 12), plan a longer runway.
- **Flight-control mode / PFC (primary flight computer) degradation:** expect secondary/direct control mode, reduced protections — hand-fly, plan a stabilised, flapped approach at higher VREF.
- **Notes/model:** FlightFactor models PFC mode reversion and stab/speedbrake faults 🟧; confirm on build.

## Ch 10 — Flight instruments / displays
### Airspeed unreliable / ADIRU fault 🟥
- **Recognition:** IAS/ALT disagree, speed flags, ADIRU/attitude fault.
- **Actions (memory, Ch 1):** AP/AT/FD OFF, **pitch + thrust** reference `[VERIFY]`, identify the good source, use standby/alternate; then troubleshoot.
- **Notes/model:** FlightFactor models ADIRU/attitude faults 🟧 — verify.
### ALTN attitude / display select / EFIS control / baro-set disagree / instrument-source loss
- **Actions:** revert to remaining sources/displays; select alternate attitude/source; resolve baro disagreement; hand-fly if displays degraded.
- **Notes/model 🟧:** depth varies by build.

## Ch 11 — Flight management / navigation
- **FMC message / position or nav degradation / RNP-GPS loss:** cross-check position, downgrade nav capability, **advise ATC** and select a lower RNP as required; hand-fly LNAV if lost.
- **Notes/model 🟧:** FMC fault depth model-dependent `[VERIFY]`.

## Ch 12 — Fuel
- **Fuel imbalance:** open **crossfeed**, balance per procedure, identify cause (leak vs asymmetric burn).
- **Fuel leak:** if a leak is suspected, **do not** crossfeed blindly; isolate per checklist, reassess fuel/range and divert.
- **Low level / config / jettison:** manage pumps and centre-tank scheduling; the -300ER **can jettison** — use fuel jettison to reach a safe landing weight (below MLW ~251,300 kg) when required, per checklist; recompute reserves (Dispatch §3/§5).
- **Notes/model 🟧:** crossfeed/centre-tank/jettison logic present on FlightFactor; confirm behaviour `[VERIFY]`.

## Ch 13 — Hydraulics
- **Systems:** three independent systems (Left / Centre / Right), each with engine-driven + electric/air demand pumps. Single-system loss is tolerable; multi-loss degrades flight controls, gear and braking.
- **Single-system loss:** HYD EICAS · manage per checklist · note affected surfaces/brakes.
- **Loss of two:** expect **flight-control degradation**, alternate/gravity gear, alternate braking — cross-ref Ch 9/Ch 14.
- **Notes/model 🟧:** FlightFactor models the three systems and demand pumps; some reversions may be partial `[VERIFY]`.

## Ch 14 — Landing gear / brakes / tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **alternate (gravity/free-fall) extension**; do not force.
- **Alternate extension:** per checklist; expect no retract afterwards.
- **Antiskid / autobrake / brake source / brake temp:** alternate braking, modulate manually, longer rollout; watch brake temperature after heavy braking (very high energy at -300ER landing weights).
- **Tyre failure / gear-up or partial:** brief evacuation, RFF as available, minimise braking asymmetry.
- **Notes/model 🟧:** gravity extension + brake logic modelled on FlightFactor; confirm on build.

## Ch 15 — Warning systems / EICAS config
- **CONFIG warnings (flaps / stabilizer / spoilers / parking brake / rudder / gear):** resolve the offending configuration before takeoff/landing; a CONFIG warning blocks a safe takeoff.
- **Altitude alert / airspeed low / altitude callouts / warning-system fault:** cross-check and correct; treat a warning-system fault as loss of that protection.
- **Notes/model 🟧:** config-warning logic modelled; some warning-system faults may not simulate.

## Ch 16 — Abnormal & emergency performance
- **Abnormal-config landing distance & VREF increments** (flap/slat-less, control-mode degraded): compute via the sim/OFP performance tool for the flown config — do not guess; use a longer runway and higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inop ceiling:** on engine loss, follow driftdown to the OEI ceiling; for EDTO this feeds the en-route-alternate/critical-fuel check — **dispatch discipline, not sim-modelled** (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above MLW (~251,300 kg) `[VERIFY]`, use overweight-landing technique/speed, expect longer distance, inspection required; consider **fuel jettison** first (Ch 12) when time permits.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 17 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire/ditching/major failure.
- **Actions (memory, Ch 1-family):** aircraft **stopped**, parking brake set; **cabin crew alert**; shut down **engines and APU** (fuel control switches CUTOFF); if evacuation ordered → **EVAC command/signal**, cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft, cabin crew direct evacuation to usable exits (assess fire side/wind), account for all, move upwind.
- **Notes/model 🟧:** FlightFactor models shutdown/secure; the passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 777-300 (B77W) — https://skybrary.aero/aircraft/b77w
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Rejected Take Off (general) — https://skybrary.aero/articles/rejected-take-off
- FlightFactor — 777 product page (simulated-systems scope) — https://store.x-plane.org/Boeing-777-Professional_p_1194.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered Boeing 777 non-normal/emergency reference re-expressed (EICAS grouping); memory/recall items 🟥 (airspeed unreliable, cabin-alt/emergency descent, engine fire/severe damage, dual engine failure, TCAS, GPWS/terrain, windshear, RTO); figures `[VERIFY]`. |
