<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  B738 Boeing 737-800
  Thorough, chaptered non-normal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM/airline text.
  FLAG LEGEND  🟥 recall/memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# B738 — Boeing 737-800 · QRH

**B738 / 737 Next Generation family** · flown as Zibo 737-800X (lead) / default XP11 737-800 (fallback) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for non-normal & emergency handling on X-Plane 11, Boeing philosophy. **In a real non-normal the aircraft's own alert system and QRH are authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM/airline text**. Chapters mirror the Boeing QRH ATA-style grouping. Flag legend 🟥 recall/memory · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH (Boeing 737NG philosophy)
- **No ECAM/EICAS that actions itself.** The 737NG's alert/annunciator panel raises a light and a Master Caution/Warning; the crew then **select and read-and-do** the matching non-normal checklist. There is no fly-by-wire envelope protection on this type — it is a classic yoke-and-column, cable/hydraulic-actuated airframe.
- **Recall (memory) items on the 737NG are deliberately few** and mostly confined to the **Non-Normal Maneuvers** (Ch 1): rejected takeoff, stall/approach-to-stall recovery, terrain, traffic (TCAS RA), upset recovery, windshear — plus the immediate first steps of cabin-altitude/rapid-depressurisation and of an engine fire/severe damage event. Everything else in this QRH is a **read-and-do** checklist, not a memory item — do not action it from memory.
- **RECALL check:** after any immediate actions, the RECALL function is used on the ground/before-takeoff and descent flows to display outstanding items and confirm nothing is missed (see Checklist "Recall …… Checked" entries).
- **Model caveat 🟧:** Zibo 737-800X drives a real alert/annunciator message set for many items when its failure module is active; the default XP11 737-800 is lighter and may **not trigger or fully resolve** several procedures below. Where a step depends on failure logic the model may not simulate, it is flagged 🟧. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Recall / Non-Normal Maneuvers 🟥
*The 737NG's true "by-memory" set is this short list of maneuvers plus the immediate first actions of the two events marked 🟥 below. Everything else in this QRH is read-and-do.*

| Condition | Immediate action (recall/memory) | Then |
|---|---|---|
| **Rejected takeoff** 🟥 | Below V1, reject decisively: thrust levers **idle**, **max manual braking / autobrake RTO**, speedbrake, reverse thrust as needed; keep straight on the centreline | Stop, assess, advise ATC, evacuate only if required (Ch 16) |
| **Approach-to-stall / stall recovery** 🟥 | Disconnect autopilot/autothrottle; **reduce angle of attack** (nose down as needed) while smoothly applying **thrust**; level wings; **do not** chase the stick shaker with abrupt pitch inputs | Recover to a normal flight path, resume, debrief |
| **Terrain (GPWS) caution/warning** 🟥 | Warning: disconnect autopilot, **apply maximum thrust**, roll wings level, pitch to the stall-warning/shaker margin and hold until clear; do not reconfigure until clear | Verify clear of terrain, resume, report |
| **Traffic (TCAS RA)** 🟥 | **Comply with the RA immediately**, disconnect autopilot if required, do not manoeuvre contrary to the RA even against ATC instruction unless visually clear | Return to assigned clearance once "clear of conflict" |
| **Upset recovery (nose-high / nose-low)** 🟥 | Disconnect autopilot/autothrottle; nose-high — reduce pitch, reduce thrust, roll to nose-down pitch rate; nose-low — recover from any stall first, roll wings level (shortest direction), then raise the nose | Re-establish stable flight, resume |
| **Windshear caution/warning/escape** 🟥 | Caution: manoeuvre to avoid; Warning/encounter — **disconnect autopilot, maximum thrust, roll wings level, pitch toward ~15°**, retract speedbrake, do not change configuration or chase airspeed until clear | Once clear, resume normal flight, report the encounter |
| **Cabin altitude warning / rapid depressurisation** 🟥 | **Oxygen masks ON, 100%**; establish crew comms; if not controllable → **emergency descent**: thrust idle, speedbrake, target **MMO/VMO** as structure permits, turn off track if needed, descend toward **FL100 / MSA** | Passenger signs/oxygen as needed, PA, MAYDAY, read-and-do Ch 2 |
| **Engine fire / severe damage or separation** 🟥 | Autothrottle disconnect; thrust lever (affected engine) **confirm closed**; engine start lever (affected engine) **confirm CUTOFF**; engine fire switch **confirm pull**, rotate to discharge if fire persists | Secure remaining systems per checklist, plan nearest suitable landing, read Ch 7/8 |
| **Evacuation** 🟥 | Aircraft **stopped**, parking brake set; **engine start levers CUTOFF**; if evacuation ordered → **EVAC command/signal**, cut fuel/electrics per secure flow | Cabin evacuation to usable exits, RFF/ATC MAYDAY, read Ch 16 |

*Recall-item modelling 🟧: Zibo simulates stall/stick-shaker, TCAS-equivalent alerting, cabin-alt and engine fire logic to useful depth when its failure module is enabled; the default 737-800 may abstract several of these — verify each triggers before training to it.*

## Ch 2 — Air systems / pressurisation
### Cabin altitude warning / rapid depressurisation + emergency descent 🟥 (see Ch 1)
- **Recognition:** cabin-altitude exceedance or intermittent cabin-altitude/configuration horn, cabin-altitude lights.
- **Actions:** masks/comms (recall, Ch 1); pressurization mode selector **MAN**, outflow valve held closed then modulated; if uncontrollable and above ~14,000 ft cabin altitude → emergency descent. Once stabilised, read-and-do the remaining pressurisation steps.
- **Notes / model:** Zibo models the pressurisation panel and manual mode; default 737-800 partial 🟧.
### Pressurization auto-fail / unscheduled change
- **Actions:** verify engine bleeds/packs, select ALTN mode if AUTO fails, revert to MAN if still uncontrolled — per checklist. 🟧
### Duct overheat / dual bleed / pack trip
- **Actions:** per checklist — isolate the affected bleed/pack, monitor duct pressure and temperature, expect a single-pack/no-bleed configuration change. 🟧

## Ch 3 — Anti-ice & rain
- **Wing / engine anti-ice fault or valve-open indication:** per checklist; anti-ice ON in icing conditions, note the CFM56-7B bleed-air penalty on thrust/fuel flow.
- **Window heat fault:** monitor window condition, avoid rapid thermal stress if heat is lost; expect a lower safe airspeed if a window must be closed manually (per real-type experience, not modelled identically in-sim).
- **Notes / model 🟧:** anti-ice fault/valve logic depth model-dependent.

## Ch 4 — Automatic flight (autopilot / autothrottle)
- **Autopilot / autothrottle disconnect or fault:** revert to manual thrust/hand-fly; for an autothrottle fault, set thrust manually and monitor N1.
- **Alternate EEC mode:** disengage autothrottle, retard thrust levers before switching engine control to alternate mode to avoid an uncommanded thrust step, then re-engage autothrottle if needed; note that alternate-mode thrust-limit protection differs from normal mode.
- **Notes / model 🟧:** EEC-mode switching and alternate-mode limiting depth varies by model.

## Ch 5 — Communications
- **Radio / audio failure:** select alternate radio/audio path, squawk 7600, follow lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select alternate mode/source, advise ATC. · **Notes/model 🟧:** basic on both models.

## Ch 6 — Electrical
### Generator / bus loss
- **Recognition:** generator-off-bus or source-off indications. · **Actions:** per checklist — reset/verify the affected generator, manage bus ties, monitor remaining sources.
### Loss of both engine-driven generators / battery-only config
- **Actions:** APU generator as available, standby power management, minimum essential loads, expedite landing. · **Notes/model:** Zibo models bus losses and standby power to useful depth 🟧; default abstracted.

## Ch 7 — Engines / APU
### Engine failure or shutdown
- **Recognition:** N1/N2 rollback, EGT/fuel-flow drop, an engine-fail alert, yaw.
- **Actions:** confirm the failed engine, thrust lever confirm closed, engine start lever confirm CUTOFF once conditions allow, pack (affected side) OFF, consider APU start, balance fuel, set transponder to TA-only to protect single-engine climb performance, plan nearest suitable landing.
- **Notes / model:** single-engine handling and driftdown modelled on Zibo 🟧; default approximates asymmetry.
### One-engine-inoperative landing
- **Actions:** select landing flap per performance (higher flap settings may not be available depending on autoland capability), apply the applicable VREF/bank-angle limits, brief a flaps-1/15 go-around; **fail-operational autoland status is unconfirmed for the K Global fleet — operator minima remain CAT I regardless** (Intro/Dispatch, matrix Table C). 🟥
### Engine in-flight start / relight
- **Actions:** confirm within the in-flight-start (windmill or crossbleed) envelope, thrust lever closed, start lever CUTOFF then selected per windmill/crossbleed method, monitor EGT against the start limit, abort the attempt if EGT does not rise as expected.
### Abnormal start / high oil temperature / engine control fault
- **Actions:** abort the start (start lever CUTOFF) on hot start or stagnant N2; for a high-oil-temperature indication in the amber band, retard the affected thrust lever; for an on-ground engine-control-system fault, do not take off. · **Notes/model 🟧:** start-abuse and control-fault logic depth varies.

## Ch 8 — Fire protection
### APU fire 🟥
- **Recognition:** APU fire indication. · **Actions:** APU fire switch pull, discharge bottle, APU shutdown. · **Notes/model:** Zibo modelled 🟧; default partial.
### Engine fire / severe damage or separation 🟥 (see Ch 1 for the immediate steps)
- **Read-and-do continuation:** isolation valve closed, pack (affected side) off, APU bleed off, APU start if available, balance fuel, transponder TA-only, plan nearest suitable landing per the one-engine-inoperative landing procedure (Ch 7).
### Cargo fire / smoke
- **Recognition:** cargo-fire/smoke-detector alert. · **Actions:** confirm, discharge the cargo fire bottle, land ASAP, isolate per checklist. · **Notes/model:** 🟧 may not be simulated on the default 737-800 `[VERIFY]`.
### Smoke, fire or fumes (flight deck / cabin) 🟥
- **Actions:** masks/goggles 100%, establish comms, isolate the suspected source (electrical load-shed per checklist), consider emergency descent / land ASAP. · **Notes/model:** smoke-source logic limited 🟧.

## Ch 9 — Flight controls
### Runaway stabilizer 🟥
- **Recognition:** uncommanded stabilizer trim movement. · **Actions:** hold the control column firmly, disconnect the autopilot, use the **stabilizer trim cutout switches** to stop the runaway, trim manually thereafter. · **Notes/model:** Zibo models trim/stabilizer faults 🟧; default limited.
### Flap / slat asymmetry or disagree; speedbrake-do-not-arm
- **Actions:** stop at the safe/reported flap position, compute the higher approach speed and landing distance for the achieved flap setting (Ch 15), plan a longer runway; for a speedbrake fault do not arm it and brief a manual-extension landing roll. 🟧
### Jammed or restricted flight controls
- **Actions:** identify and apply the additional force/technique per checklist for the affected axis; consider a reduced-control landing with extra margin. 🟧

## Ch 10 — Flight instruments
### Airspeed unreliable / IAS-ALT disagree 🟥
- **Recognition:** speed/altitude disagree flags, unreliable-airspeed indications. · **Actions (recall, Ch 1 posture):** autopilot/autothrottle/flight director OFF, set a **known pitch + thrust** reference for the configuration and phase `[VERIFY]`, identify the faulty air-data source, cross-check remaining instruments, then read-and-do. · **Notes/model:** Zibo models air-data faults 🟧 (default verify).
### Display source fault / loss of a display
- **Actions:** revert to the remaining or standby display source, hand-fly if autoflight guidance is lost. · **Notes/model 🟧:** depth varies by model.

## Ch 11 — Flight management, navigation & IRS
- **FMC disagree / FMC fail; GPS or RNP capability loss:** revert to the remaining FMC/nav source; for an RNP-capability loss, downgrade the navigation capability advised to ATC and hand-fly or use a conventional procedure as needed.
- **IRS align or attitude fault:** use the remaining or standby attitude source; re-align only per the applicable ground/in-flight procedure. · **Notes/model 🟧:** varies by model.

## Ch 12 — Fuel
- **Fuel imbalance:** cross-feed per checklist to balance, identify cause (leak vs asymmetric burn) before assuming a simple transfer will resolve it.
- **Low pressure — fuel pump (single or multiple):** confirm remaining pump(s) cover the demand; do not run a tank dry with the corresponding pump still selected on.
- **Suspected leak:** do **not** open cross-feed blindly; isolate per checklist, reassess fuel and range, and divert if the loss is confirmed.
- **Notes / model 🟧:** cross-feed/transfer logic modelled on Zibo; default fuel-system depth simplified.

## Ch 13 — Hydraulics
- **Systems:** System A / System B / Standby. Engine-driven and electric pumps normally supply A and B; Standby covers key flight-control and gear-extension functions if needed.
- **Single-system loss:** manage per checklist, note the affected surfaces/brakes/spoilers for that system.
- **Loss of System A and B / manual reversion:** expect **manual reversion** flight control feel and increased control forces, alternate gear extension, alternate/standby braking — cross-ref Ch 9 / Ch 14.
- **Notes / model 🟧:** Zibo models the three systems and manual reversion to useful depth; default hydraulic depth limited — some reversions may not occur `[VERIFY]`.

## Ch 14 — Landing gear, brakes & tyres
- **Gear disagree / unsafe indication:** recycle once if appropriate; if still unsafe, use the **manual/alternate gear extension**; do not force it.
- **Manual gear extension:** per checklist; expect no retraction afterwards. · **Notes/model:** modelled on Zibo 🟧 (default verify).
- **Antiskid / brake fault:** use the remaining braking mode, modulate manually if antiskid is lost, expect a longer landing roll, avoid locked wheels.
- **Tyre failure / gear-up or partial-gear landing:** brief a possible evacuation, expect asymmetric braking effects, minimise differential braking.

## Ch 15 — Warning systems & abnormal/emergency performance
- **Takeoff/landing configuration warning:** resolve the offending item before continuing; a configuration warning during the takeoff roll before V1 is a reject cue.
- **Overspeed warning:** reduce speed toward the applicable limit without abrupt control inputs.
- **Abnormal-config landing distance & VREF increments** (reduced flap, manual reversion, one engine inoperative): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and a higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inoperative ceiling:** on engine loss, follow driftdown to the OEI ceiling; for EDTO routing this feeds the en-route-alternate/critical-fuel check — **dispatch discipline, not sim-modelled** (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above MLW (~66,360 kg 🟧 `[VERIFY]`), use the overweight-landing technique and expect a longer distance and a post-landing inspection requirement.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 16 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, severe damage, or another condition making the aircraft unsafe to occupy.
- **Actions (recall, Ch 1):** aircraft **stopped**, parking brake set; cabin crew alerted; **engine start levers CUTOFF**, shut down the APU; if evacuation is ordered → **EVAC command/signal**, cut fuel and non-essential electrics per the secure flow, retain essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft; cabin crew direct evacuation to usable exits (assess fire side/wind), account for all occupants, move upwind.
- **Notes / model 🟧:** Zibo models the shutdown/secure flow; the passenger evacuation itself is not simulated on either model — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 737-800 (B738) — https://skybrary.aero/aircraft/b738
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Windshear (general) — https://skybrary.aero/articles/windshear
- SKYbrary — Cabin Depressurisation (general) — https://skybrary.aero/articles/cabin-decompression
- FAA — Advisory Circular 120-92 / TCAS II operational guidance (general RA response) — https://www.faa.gov/regulations_policies/advisory_circulars/
- EASA — TCDS EASA.IM.A.120 Boeing 737 — https://www.easa.europa.eu/en/document-library/type-certificates
- X-Plane.Org Forum — Zibo Mod (simulated-systems scope) — https://forums.x-plane.org/files/file/40803-zibo-b738-for-xp11/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered Boeing 737NG non-normal/emergency reference re-expressed; Boeing 737NG philosophy documented (recall confined to Non-Normal Maneuvers + immediate steps of cabin-altitude and engine-fire events, everything else read-and-do); recall items 🟥 (rejected takeoff, stall recovery, terrain, TCAS RA, upset recovery, windshear, cabin altitude/rapid depress, engine fire/severe damage, evacuation); figures `[VERIFY]`. No verbatim OEM/airline text. |
