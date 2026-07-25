<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  B77F Boeing 777F
  Thorough, chaptered non-normal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory/recall item — immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# B77F — Boeing 777F · QRH

**B77F / 777 family** · flown as FlightFactor 777 (777F variant) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for non-normal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's EICAS/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror the Boeing non-normal grouping and are **shared with the passenger [B77W](../b77w/qrh.md)** except where the freighter configuration changes the procedure — flagged inline. The two material differences are **main-deck cargo fire handling** (Ch 8) and **evacuation** (Ch 17) — both driven by the absence of a passenger cabin and cabin crew. Flag legend 🟥 memory/recall item · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Boeing philosophy: **EICAS annunciates; the crew flies the aircraft first, then runs the non-normal checklist for the EICAS message.** A small set of **memory (recall) items** (Ch 1, 🟥) are done from memory with no reference; everything else is read-and-do from the QRH after the flight path is secure. PF flies/manages thrust & config; PM reads and actions the checklist. **Crew complement is two pilots, no cabin crew** — any procedure step written for a passenger cabin (PA to cabin, cabin-crew brief, evacuation via cabin crew) does not apply; see Ch 17.
- **Recall vs read-and-do:** the RECALL switch redisplays EICAS alerts. Only the Ch 1 items are memorised; all other chapters are reference checklists.
- **Model caveat 🟧:** FlightFactor 777 is study-level and drives real EICAS/non-normal logic for most items where the freighter variant is confirmed installed (see Sim-Model). Main-deck cargo detection/suppression logic is the item most likely to be abstracted — flagged in Ch 8. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory / recall items (immediate action) 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Airspeed unreliable** 🟥 | Autopilot/autothrottle/flight-director OFF; set **known pitch + thrust** (e.g. flaps-up wings-level attitude + climb/cruise thrust as applicable) `[VERIFY]`; keep clean if able | Level off, identify the good source, use standby/alternate, read Ch 10 |
| **Cabin altitude / rapid depressurization → Emergency descent** 🟥 | **Oxygen masks / crew comms** ON (flight-deck only — no passenger cabin); if flight-deck altitude uncontrollable, **initiate emergency descent** — thrust idle, speedbrake, descend at max appropriate speed (VMO/MMO as structure permits), turn off track if needed, target **FL100 / MSA** | MAYDAY, read Ch 2/Ch 12-manoeuvres |
| **Main-deck cargo fire (Class E compartment)** 🟥 | **Do not attempt to enter or access the main deck in flight**; shut off main-deck ventilation/air supply per checklist to starve the fire; don oxygen/smoke protection on the flight deck; **divert to the nearest suitable airport — land as soon as possible** | Brief ATC/company (dangerous-goods status if known), plan an on-arrival main-deck assessment before any door is opened; read Ch 8 |
| **Engine fire / severe damage / separation** 🟥 | Autothrottle affected engine OFF; **thrust lever CLOSED**; **fuel control switch CUTOFF**; **engine fire switch PULL** (rotate to discharge per interval) | Confirm fire out, secure, divert; read Ch 8/Ch 7 |
| **Dual engine failure / loss of thrust both engines** 🟥 | Establish **glide/relight speed**; fuel control switches CUTOFF then RUN (relight attempt); RAM air/APU as available; set up for driftdown/forced landing | Read Ch 7; declare emergency; plan nearest suitable |
| **Traffic (TCAS RA)** 🟥 | Disconnect autopilot as required; **follow RA guidance** promptly and smoothly; do not manoeuvre opposite the RA | Return to clearance when "clear of conflict", advise ATC |
| **Ground proximity / terrain (PULL UP)** 🟥 | **Max thrust, wings level, rotate to pitch-limit / stick-shaker**; do not descend until terrain cleared | Continue climb to safe altitude, read Ch 12 |
| **Windshear** 🟥 | **Max thrust, wings level, pitch for climb (toward pitch-limit if needed)**; do not change config until clear | Escape, report, reassess approach/departure |
| **Rejected takeoff (before V1)** 🟥 | **Thrust idle, max braking (autobrake RTO), speedbrake, reverse**; maintain directional control | Stop, assess (fire/evac Ch 8/Ch 17), advise ATC |

*Memory-item modelling 🟧: FlightFactor simulates airspeed/ADIRU faults, engine fire/cutoff/discharge, depressurisation and TCAS/GPWS credibly on most builds; the main-deck cargo-fire detection/ventilation-shutoff logic is the item most likely to be abstracted on a freighter-variant model — verify it actually triggers before training to it `[VERIFY]`.*

## Ch 1a — General (doors, oxygen, misc annunciations)
- **Door not closed/locked (main-deck side cargo door / lower-deck cargo doors):** confirm before pressurising; do not pressurise with a DOOR message unresolved. No passenger doors exist on this type.
- **Crew oxygen low:** verify quantity vs dispatch minimum (two-pilot crew only); consider altitude/EDTO implications once a rule time is set.
- **Notes/model 🟧:** door-page + oxygen logic generally modelled; confirm cargo-door-specific pages on the build.

## Ch 2 — Air systems / pressurization
- **CABIN ALTITUDE (excess flight-deck/pressurised-zone alt):** don masks/comms; if uncontrollable → emergency descent (Ch 1). Then manage pressurisation config. Note: the main-deck cargo compartment (Class E) is **not** part of the pressurised passenger-cabin design lineage — its ventilation is managed separately (Ch 8).
- **Bleed leak / bleed off (L, R, body, wing, strut):** isolate the affected bleed per checklist; expect single-source air, possible altitude limit.
- **Pack / ALTN vent / flight-deck temperature:** run affected-pack checklist; single-pack ops, monitor flight-deck altitude and temperature.
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
- **Battery / utility off:** minimum essential loads; expedite as required.
- **Notes/model 🟧:** FlightFactor models bus transfers and backup gens; some reversions may be abstracted `[VERIFY]`.

## Ch 7 — Engines / APU
### Engine fire / severe damage / separation 🟥
- **Recognition:** ENG FIRE / severe-damage EICAS, N1/EGT/vibration anomaly, yaw.
- **Actions:** autothrottle off · thrust lever CLOSED · **fuel control switch CUTOFF** · **engine fire switch PULL** · discharge agent (second bottle if still burning after the interval) · secure, divert.
- **Notes/model:** fire switch + dual bottles modelled on FlightFactor; confirm interval logic 🟧.

### Engine failure / flameout / in-flight start
- **Recognition:** N1/N2 rollback, EGT/FF drop, ENG FAIL EICAS, yaw.
- **Actions:** maintain control (rudder for asymmetry) · confirm failed engine · secure per checklist · assess relight envelope (windmill/starter-assist) · **driftdown to one-engine-inop ceiling** · consider EDTO diversion **only if an operator rule time has been set for this leg** (Ch 12/Dispatch §5) — do not assume one.
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

### Main-deck cargo fire (Class E compartment) 🟥 — freighter-specific, differs from B77W
- **Configuration note:** the 777F main deck is a large-volume **Class E cargo compartment** with no passenger cabin above/around it and, on the real type, typically **no built-in extinguishing-agent discharge system** for the main deck itself — protection relies on **smoke/fire detection**, **shutting off ventilating airflow to the compartment**, and **excluding smoke/flame/agent from the flight deck**, rather than a dischargeable bottle as used for the lower-deck (Class C) holds. This is a materially different fire-handling model from the passenger B77W, which has no main-deck cargo compartment at all.
- **Recognition:** MAIN DECK / CARGO FIRE-type EICAS message, smoke indication.
- **Actions (memory, Ch 1):** **do not attempt to enter or access the main deck in flight** · shut off main-deck ventilation/air supply per checklist · don oxygen/smoke protection on the flight deck · **divert — land as soon as possible**, there is no in-flight extinguishing action beyond starving the fire of air.
- **Notes/model 🟧:** main-deck detection and ventilation-shutoff logic is the item most likely to be abstracted or absent even on a confirmed freighter-variant model — verify before training to it `[VERIFY]`.

### Lower-deck cargo fire (fwd/aft, Class C-type holds)
- **Actions:** confirm, **discharge cargo-hold agent bottle** (as fitted for the lower-deck holds), land ASAP, isolate per checklist. This mirrors the B77W's lower-deck cargo-fire handling — the freighter difference is the **additional, larger main-deck compartment above**, handled separately above.
- **Notes/model 🟧:** lower-deck bottle-discharge logic modelled on FlightFactor per the shared 777 systems baseline; confirm on build.

### FIRE ENG (L, R) 🟥
- Memory sequence Ch 1/Ch 7 — cutoff, fire switch, discharge.

### FIRE APU
- APU fire switch, discharge agent, APU shutdown.

### Engine tailpipe fire
- Motor the engine (no agent for tailpipe fire) per checklist; do not discharge into the tailpipe.

### Smoke / fire / fumes (flight deck)
- Don masks/goggles 100%, isolate suspected source (electrical load-shed / bleed isolation), consider emergency descent and **land at nearest suitable**.

### Bottle discharge (eng/APU/lower-deck cargo) EICAS
- Confirms agent state; continue per checklist.

- **Notes/model 🟧:** engine/APU fire + lower-deck cargo agent modelled on FlightFactor per the shared 777 baseline; main-deck (Class E) detection/ventilation logic is the freighter-specific item most likely to need verification `[VERIFY]`.

## Ch 9 — Flight controls
- **STABILIZER / runaway or jam:** control column/manual trim per checklist; if runaway, cut the affected trim path; expect trim-limited handling — **cross-check against the loadsheet CG**, which drives trim more directly on a freighter than on a passenger jet with a more predictable load distribution.
- **Auto speedbrake / spoiler fault:** per checklist; manual speedbrake as required.
- **Flap / slat disagree or jam:** stop at safe config, compute higher approach speed & landing distance (Ch 16), plan a longer runway.
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
- **Low level / config / jettison:** manage pumps and centre-tank scheduling; assess whether the type/config **can jettison** to reach a safe landing weight (below MLW ~260,800 kg `[VERIFY]`) when required, per checklist; recompute reserves (Dispatch §3/§5) — **payload-vs-fuel headroom is tighter at max structural cargo** than on a lighter-loaded pax leg (Dispatch §3), so reassess landing weight/config carefully after any fuel-abnormal.
- **Notes/model 🟧:** crossfeed/centre-tank/jettison logic present on FlightFactor per the shared 777 baseline; confirm behaviour `[VERIFY]`.

## Ch 13 — Hydraulics
- **Systems:** three independent systems (Left / Centre / Right), each with engine-driven + electric/air demand pumps. Single-system loss is tolerable; multi-loss degrades flight controls, gear and braking.
- **Single-system loss:** HYD EICAS · manage per checklist · note affected surfaces/brakes.
- **Loss of two:** expect **flight-control degradation**, alternate/gravity gear, alternate braking — cross-ref Ch 9/Ch 14.
- **Notes/model 🟧:** FlightFactor models the three systems and demand pumps; some reversions may be partial `[VERIFY]`.

## Ch 14 — Landing gear / brakes / tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **alternate (gravity/free-fall) extension**; do not force.
- **Alternate extension:** per checklist; expect no retract afterwards.
- **Antiskid / autobrake / brake source / brake temp:** alternate braking, modulate manually, longer rollout; watch brake temperature after heavy braking, especially at a **high landing weight from an aborted long cargo sector**.
- **Tyre failure / gear-up or partial:** brief the evacuation flow (Ch 17), RFF as available, minimise braking asymmetry.
- **Notes/model 🟧:** gravity extension + brake logic modelled on FlightFactor; confirm on build.

## Ch 15 — Warning systems / EICAS config
- **CONFIG warnings (flaps / stabilizer / spoilers / parking brake / rudder / gear):** resolve the offending configuration before takeoff/landing; a CONFIG warning blocks a safe takeoff.
- **Altitude alert / airspeed low / altitude callouts / warning-system fault:** cross-check and correct; treat a warning-system fault as loss of that protection.
- **Notes/model 🟧:** config-warning logic modelled; some warning-system faults may not simulate.

## Ch 16 — Abnormal & emergency performance
- **Abnormal-config landing distance & VREF increments** (flap/slat-less, control-mode degraded): compute via the sim/OFP performance tool for the flown config — do not guess; use a longer runway and higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inop ceiling:** on engine loss, follow driftdown to the OEI ceiling; for EDTO this feeds the en-route-alternate/critical-fuel check **only once an operator rule time is set** for the freighter — **dispatch discipline, not sim-modelled** (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above MLW (~260,800 kg) `[VERIFY]`, use overweight-landing technique/speed, expect longer distance, inspection required; consider **fuel jettison** first (Ch 12) when time permits — the loadsheet main-deck CG must be re-checked against the actual (not planned) landing weight/configuration. 🟥
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 17 — Evacuation 🟥 — freighter-specific, differs from B77W
- **Configuration note:** the B77F carries **no passengers and no cabin crew** — a **two-pilot flight-deck crew only**. There is no passenger-cabin evacuation to command or coordinate; a passenger-jet "evacuate the cabin" procedure **does not apply**. The main deck (freight) is not normally occupied in flight and is not evacuated in the passenger sense.
- **Recognition/trigger:** commander's decision after fire/ditching/major failure/gear collapse where the flight deck itself must be vacated on the ground.
- **Actions (memory, Ch 1-family):** aircraft **stopped**, parking brake set; shut down **engines and APU** (fuel control switches CUTOFF); if the flight deck must be vacated, use the **flight-deck emergency egress** (the type's escape means from the flight deck — e.g. window/rope egress or the entry-door area, as fitted) rather than a cabin evacuation slide sequence; cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** two pilots secure the aircraft and self-evacuate via the flight-deck egress means; coordinate with RFF directly (no cabin crew to relay through); account for both crew, move upwind, clear of the aircraft — particularly clear of any main-deck cargo-fire zone (Ch 8).
- **Notes/model 🟧:** FlightFactor models engine/APU shutdown and secure flow; a two-pilot flight-deck egress (vs a passenger cabin evacuation) is unlikely to be modelled at all — train the flow and crew coordination conceptually, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 777 Freighter (B77L / 777F) — https://skybrary.aero/aircraft/b77l
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Rejected Take Off (general) — https://skybrary.aero/articles/rejected-take-off
- SKYbrary — Cargo Compartment Fire (general) — https://skybrary.aero/articles/cargo-compartment-fire
- FlightFactor — 777 product page (simulated-systems scope) — https://store.x-plane.org/Boeing-777-Professional_p_1194.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — cloned from the B77W chaptered QRH (shared 777 non-normal grouping); **freighter-specific rewrite of Ch 8 (main-deck Class E cargo-fire handling — no main-deck extinguishing discharge, ventilation shutoff + divert, added to Ch 1 memory items 🟥) and Ch 17 (evacuation — two-pilot flight-deck egress, no cabin/passenger evacuation)**; EDTO-dependent steps (Ch 7/Ch 16) flagged 🟥 not to assume a rule time; figures `[VERIFY]`. |
