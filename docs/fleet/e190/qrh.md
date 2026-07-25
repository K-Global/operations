<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  E190 Embraer 190
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# E190 — Embraer 190 · QRH

**E190 / E-Jet family (E1 generation)** · flown as X-Crafts E190 (lead) / Flight Procedures Simulation E190 (fallback, XP12-only) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane. **In a real non-normal the aircraft's EICAS/electronic checklist is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words from general public E-Jet type knowledge; **no verbatim OEM text**, and the source material surveyed for this type was thin on abnormal procedures, so several chapters below are built from general public turbofan/regional-jet knowledge rather than a type-specific abnormal source — flagged 🟧 throughout. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH

- Embraer E-Jet philosophy: **fly first**, let the EICAS present the caution/warning, then work the **electronic checklist** presented on the display for the ordered actions. PF flies + manages thrust/config; PM reads and actions the EICAS/electronic checklist.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the checklist. Everything else: stabilise, then work the electronic checklist.
- **No Airbus-style envelope protection 🟧:** flight controls are fly-by-wire assisted on most surfaces (ailerons remain cable-actuated) through a **conventional yoke**, but there is **no hard flight-envelope law** — stall, overspeed and bank protections that an Airbus-family aircraft would enforce automatically are **not present**; the pilot must recognise and recover manually.
- **Model caveat 🟧:** neither candidate add-on (Sim-Model §1) has been confirmed against a full type-specific abnormal/emergency procedure source. Treat every non-normal below as a training aid, not a certified procedure, and confirm what the flown model actually triggers before relying on it `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / air data disagree** 🟥 | Disconnect AP/FD/autothrottle; set **known pitch + thrust** for the phase of flight `[VERIFY]`; keep clean if able | Level off, identify the faulty air-data source, use remaining/backup indications, read Ch 10 |
| **Rapid depressurisation / emergency descent** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speedbrake as fitted, descend toward **FL100 / MSA**, turn off track if needed | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Affected thrust lever idle → **engine master/fuel OFF**; **fire-extinguisher handle** pulled/actioned; discharge agent per EICAS guidance | Confirm fire indication clear, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut down engines and APU**; if evacuation ordered → **command the evacuation**, cut fuel/electrics per the secure flow | Cabin evacuation signal, ATC/RFF, read Ch 14 |
| **Stall warning / stick shaker** 🟥 | Reduce angle of attack (nose down), apply thrust as required, wings level; recover, then clean up | Monitor speed, resume, read Ch 7 |

*Memory-item modelling 🟧: confirm on the flown add-on (Sim-Model §1) whether engine-fire logic, air-data-fault simulation and stall/stick-shaker behaviour are actually modelled before training to this table `[VERIFY]`.*

## Ch 2 — Engines / APU / power plant

### Engine fire 🟥
- **Recognition:** EICAS fire warning, possible abnormal engine-parameter indication.
- **Actions:** Thrust lever IDLE · engine master/fuel OFF · fire-extinguisher handle actioned · discharge agent · secure, divert.
- **Notes / model:** confirm fire-handle and agent-discharge logic is simulated on the flown add-on 🟧 `[VERIFY]`.

### Engine failure / flameout / in-flight relight
- **Recognition:** thrust/parameter rollback on one engine, EICAS engine-fail indication, yaw.
- **Actions:** maintain control (rudder for asymmetry) · confirm the failed engine · secure per EICAS/electronic checklist · assess relight envelope · plan a single-engine diversion to the nearest suitable field (this type is not typically EDTO-planned — Dispatch §5 — so plan a prompt diversion rather than an oceanic driftdown).
- **Notes / model:** single-engine handling/asymmetry modelling depth is add-on dependent 🟧 `[VERIFY]`.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** over-temperature indication on start, stagnant core speed, or thrust not matching lever position.
- **Actions:** abort start (fuel/master OFF), motor the engine per EICAS/limits before a re-attempt, log the event; for a thrust anomaly cross-check the autothrottle/FADEC mode annunciation.
- **Notes / model:** start-abuse logic depth varies by add-on 🟧.

## Ch 3 — Fire, smoke & fumes

### APU fire
- **Recognition:** APU fire warning/EICAS indication. · **Actions:** APU fire-extinguisher handle, discharge agent, APU master OFF. · **Notes/model:** confirm simulated 🟧.
### Cargo smoke
- **Recognition:** cargo-smoke warning. · **Actions:** confirm, discharge the cargo fire-suppression agent, land ASAP, isolate per EICAS. · **Notes/model:** 🟧 may not be fully simulated `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, EICAS smoke indication. · **Actions:** masks/goggles as fitted, 100% oxygen, isolate the suspected source (electrical load-shed), consider an emergency descent/land ASAP. · **Notes/model:** smoke-source logic depth limited 🟧.

## Ch 4 — Electrical

- **System:** two independent AC networks (each with its own generator) with automatic bus-tie transfer on a source fault; an APU generator and a ram air turbine (RAT) back up the main sources; DC supplied by batteries and transformer-rectifier units.
- **Generator loss (single):** EICAS electrical-fault indication, automatic bus transfer · confirm remaining sources cover essential loads · monitor.
- **Emergency electrical configuration / RAT:** loss of the main AC sources triggers automatic **RAT deployment**; confirm essential busses powered, start the APU if available, expect degraded systems, land ASAP.
- **Battery-only:** all generator sources lost — minimum essential loads, prioritise APU/RAT recovery, expedite landing.
- **Notes/model 🟧:** RAT-deployment and bus-transfer logic is generally represented on E-Jet add-ons at a systems level, but depth varies — verify before training to it `[VERIFY]`.

## Ch 5 — Hydraulics

- **Systems:** the type carries multiple independent hydraulic systems; loss of one is normally tolerable with the others covering essential flight-control, gear and brake functions.
- **Single-system loss:** EICAS hydraulic-fault indication · manage per EICAS/electronic checklist · note affected surfaces/brakes.
- **Multiple-system loss:** expect degraded flight-control response and reversion to alternate gear extension/braking — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** hydraulic-system depth and reversion logic is add-on dependent; confirm before relying on it `[VERIFY]`.

## Ch 6 — Fuel

- **Imbalance:** EICAS fuel-imbalance indication · use crossfeed to balance, identify cause (leak vs asymmetric burn).
- **Leak:** if a leak is suspected, **do not** open crossfeed blindly; isolate per EICAS, reassess fuel/range and divert.
- **Low level / pump fault:** manage DC/AC fuel pumps per EICAS; recompute reserves (Dispatch §3).
- **Notes / model 🟧:** crossfeed and pump-fault logic modelled at a systems level; depth is add-on dependent.

## Ch 7 — Flight controls & high-lift

### Reduced flight-control authority
- **Recognition:** EICAS flight-control fault indication, degraded response on an affected surface. · **Actions:** fly manually with the remaining surfaces, respect that **no hard envelope protection exists on this type** — the pilot must self-limit pitch/bank/speed — plan a flapped, higher-VREF approach. · **Notes/model:** fault-injection depth varies by add-on 🟧.
### Flap / slat jam
- **Recognition:** EICAS flap/slat fault. · **Actions:** stop at the safe achieved configuration, compute the higher approach speed & landing distance (Ch 13), use a longer runway.
### Trim runaway / speedbrake fault
- **Actions:** per EICAS; for an uncommanded trim input, use the manual trim/disconnect path. 🟧

## Ch 8 — Landing gear, brakes & tyres

- **Gear disagree / unsafe:** recycle once if permitted; if still unsafe use the **alternate (gravity/free-fall) extension**; do not force.
- **Alternate/gravity extension:** per EICAS/electronic checklist; expect no retract afterwards. · **Notes/model:** confirm modelled on the flown add-on 🟧 `[VERIFY]`.
- **Brake / anti-skid fault:** use alternate braking, modulate manually if anti-skid is inoperative, expect a longer rollout, avoid a locked wheel.
- **Tyre failure / partial gear:** brief the cabin for a possible evacuation, request RFF standby, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain

### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin-altitude warning, rate-of-climb of cabin altitude. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle thrust, speedbrake as fitted, descend toward **FL100/MSA**, off-track if required; PA, MAYDAY. Then work the EICAS/electronic checklist for the pressurisation configuration. · **Notes/model:** cabin-altitude and emergency-descent logic depth is add-on dependent 🟧.
### Pack / bleed fault
- **Actions:** per EICAS, single-pack operation, consider an altitude limit; monitor cabin altitude.
### Anti-ice
- **Actions:** wing/engine anti-ice ON in icing conditions; note the associated thrust/bleed performance penalty.

## Ch 10 — Navigation, instruments & autoflight

### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, air-data-source fault indication. · **Actions (memory, Ch 1):** AP/FD/autothrottle OFF, fly a known pitch + thrust `[VERIFY]`, identify the faulty source, use the remaining/backup indication, then troubleshoot. · **Notes/model:** air-data-fault simulation depth is add-on dependent 🟧.
### Display loss, autoflight fault, navigation-accuracy loss
- **Actions:** revert to the remaining display(s)/source(s); for a navigation-accuracy loss, downgrade the navigation mode and advise ATC; hand-fly if autoflight is lost. · **Notes/model 🟧:** depth varies by add-on.

## Ch 11 — Communications
- **Radio / audio failure:** select the alternate radio/audio path, squawk 7600, follow the lost-communications procedure for the airspace/clearance.
- **Transponder fault:** select the alternate transponder, advise ATC. · **Notes/model 🟧:** basic on both candidates.

## Ch 12 — Miscellaneous
- **Door / slide fault:** confirm on the EICAS before pressurising; disarm slides before opening any door on the ground.
- **Windshield heat fault, water/waste, bird strike:** stabilise, assess damage/engine effect, reduce unnecessary thrust changes, land at the nearest suitable field.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-configuration landing distance & approach-speed increments** (flap/slat-less, reduced flight-control authority): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and a higher approach speed `[VERIFY]`.
- **Single-engine diversion:** on engine loss, plan the nearest suitable diversion field promptly — this type's short/medium-haul network (Dispatch §5) is **not typically EDTO-planned**, so there is normally no extended single-engine driftdown/critical-fuel case to work, unlike the mainline widebody EDTO fleet.
- **Overweight landing:** if landing above MLW (once confirmed — Intro §5), use the overweight-landing technique/speed, expect a longer distance, and log the event for inspection. `[VERIFY]`
- Method and figures are re-derived from public data; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, major failure, or an unsafe landing.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alerted**; shut down **engines and APU**; if evacuation is ordered → **command the evacuation**, cut fuel and non-essential electrics per the secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft; cabin crew direct the evacuation to usable exits (assess fire side/wind), account for all occupants, move upwind.
- **Notes / model 🟧:** shutdown/secure logic is generally represented; the passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Embraer E190 (E190) — https://skybrary.aero/aircraft/e190
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- EASA — TCDS EASA.IM.A.071 ERJ 190 (covers E190/E195 family) — https://www.easa.europa.eu/en/document-library/type-certificates/noise/easaima071-erj-190
- Wikipedia — General Electric CF34 — https://en.wikipedia.org/wiki/General_Electric_CF34

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered E-Jet (E1/CF34-10E) abnormal/emergency reference built largely from general public turbofan/regional-jet knowledge (type-specific abnormal source thin) 🟧; memory items 🟥 (unreliable airspeed, emergency descent, engine fire, evacuation, stall); no hard flight-envelope protection noted (Ch 0/7); no EDTO driftdown case for this network (Ch 13); figures `[VERIFY]` |
