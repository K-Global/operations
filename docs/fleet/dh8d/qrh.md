<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  DH8D De Havilland Canada Dash 8 Q400
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# DH8D — De Havilland Canada Dash 8 Q400 · QRH

**DH8D · TURBOPROP 🟥** · flown as FlyJSim Q4XP 🟧 `[VERIFY — model]` · sim = X-Plane 11/12
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane. **In a real non-normal the aircraft's own annunciated caution/warning system is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words from general public turboprop-systems knowledge; **no verbatim OEM text**, and several chapters below are built from general public turboprop knowledge rather than a type-specific abnormal source, flagged 🟧 throughout. Chapters mirror ATA-style grouping. **Flag 🟥 — this is a turboprop**: the memory-item set below (Ch 1) differs materially from the turbofan QRHs elsewhere in this group — engine-failure handling centres on **autofeather**, and propeller mishandling (inadvertent ground-range selection in flight) is a hazard with no jet equivalent. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH

- Q400 philosophy: **fly first**, let the caution/warning annunciation present the abnormal indication, then work the **checklist** for the ordered actions. PF flies + manages power/condition levers; PM reads and actions the checklist.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the checklist. Everything else: stabilise, then work the checklist.
- **Turboprop control architecture 🟥:** each engine is controlled by a **power lever** (commands power via FADEC, and — in the ground/reverse range — propeller blade angle) and a **condition lever** (sets propeller governing RPM, selects power ratings, commands manual feather, and controls fuel on/off). This split-lever architecture is the source of several turboprop-specific non-normals below (autofeather, beta-range mishandling) that have no equivalent on the single-thrust-lever jets elsewhere in this group.
- **T-tail awareness 🟧:** as a T-tail type, a **deep stall / tailplane-blanking risk** exists if AOA is allowed to develop well beyond the stall warning at aft CG — the memory item in Ch 1 (immediate nose-down at the first stall indication) is written with this in mind; do not delay recovery to "confirm" the stall.
- **Model caveat 🟧:** the candidate add-on (Sim-Model §1) has not been confirmed against a full type-specific abnormal/emergency procedure source. Treat every non-normal below as a training aid, not a certified procedure, and confirm what the flown model actually triggers before relying on it `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Engine failure in flight** 🟥 | Identify the failed engine (power/torque loss, abnormal parameters); confirm **autofeather has operated** (or manually feather via the condition lever if autofeather did not trigger/is not armed); maintain control — rudder for asymmetry, respect the reduced climb performance on one engine `[VERIFY]` | Secure the failed engine per checklist, assess relight envelope, plan a prompt diversion to the nearest suitable field, read Ch 2 |
| **Autofeather failure to operate** 🟥 | Recognise continued high drag / failure to feather following an engine failure; **manually select the condition lever to feather** without delay `[VERIFY]` | Confirm feathered indication, secure per checklist, read Ch 2 |
| **Inadvertent ground-range (beta) selection in flight** 🟥 | **Never move a power lever below the flight-idle gate in flight.** If a power lever is inadvertently moved below flight idle in flight, **immediately return it above the gate** — do not attempt to diagnose first `[VERIFY]` | Confirm normal propeller governing restored, assess for any overspeed/engine damage indication, read Ch 2 |
| **Stall warning / stick shaker** 🟥 | **Immediately** reduce angle of attack (nose down), apply power as required, wings level — do **not** delay given the T-tail deep-stall risk `[VERIFY]` | Monitor speed, recover clean, read Ch 7 |
| **Unreliable airspeed / air data disagree** 🟥 | Disconnect AP/FD; set **known pitch + power** for the phase of flight `[VERIFY]`; keep clean if able | Level off, identify the faulty air-data source, use remaining/backup indications, read Ch 10 |
| **Rapid depressurisation / emergency descent** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — power reduced, descend toward **FL100 / MSA**, turn off track if needed | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire** 🟥 | Affected power lever idle → **condition lever FUEL OFF** (fuel/hydraulic shutoff handle pulled per flow); **fire-extinguisher bottle discharged** per annunciation | Confirm fire indication clear, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut down engines and APU** (condition levers FUEL OFF); if evacuation ordered → **command the evacuation**, cut fuel/electrics per the secure flow | Cabin evacuation signal, ATC/RFF, read Ch 14 |

*Memory-item modelling 🟧: confirm on the flown add-on (Sim-Model §1) whether autofeather logic, ground-beta lockout, stall/stick-shaker behaviour and engine-fire logic are actually modelled before training to this table `[VERIFY]`.*

## Ch 2 — Engines / propellers / APU / power plant

### Engine failure / flameout 🟥
- **Recognition:** power/torque rollback on one engine, abnormal parameter indication, yaw; possible autofeather annunciation.
- **Actions:** confirm autofeather operated (Ch 1) or manually feather · maintain directional control (rudder for asymmetry — no envelope protection on a conventional turboprop) · secure the affected engine per checklist · plan a prompt diversion (this type is not typically EDTO-planned — Dispatch §5 — so a prompt diversion is the norm, not an extended driftdown case).
- **Notes / model:** single-engine handling/asymmetry and autofeather modelling depth is add-on dependent 🟧 `[VERIFY]`.

### Autofeather system fault 🟥
- **Recognition:** autofeather armed-indication abnormal, or failure to feather following a genuine engine failure (Ch 1).
- **Actions:** if armed but not triggering, manually feather via the condition lever; if the system indicates a fault while armed for takeoff, assess per checklist whether takeoff should proceed.
- **Notes / model:** autofeather arm/trigger logic depth is add-on dependent 🟧 `[VERIFY]`.

### Propeller overspeed / beta-range mishandling 🟥
- **Recognition:** unexpected propeller RPM increase, associated warning tone, most commonly following an inadvertent power-lever movement below the flight-idle gate in flight (Ch 1).
- **Actions:** immediately return the power lever above the flight-idle gate (memory item, Ch 1); monitor for any resulting engine/propeller damage indication; do not attempt to trouble-shoot before restoring the lever position.
- **Notes / model:** this is a turboprop-specific hazard with no equivalent on the jets elsewhere in this group — confirm the flown add-on actually models ground-beta lockout and the associated warning 🟧 `[VERIFY]`.

### Abnormal start / hot start / power anomaly
- **Recognition:** over-temperature indication on start, stagnant core speed, or power not matching lever position.
- **Actions:** abort start (condition lever FUEL OFF), motor the engine per limits before a re-attempt, log the event; for a power anomaly cross-check the FADEC/rating-mode annunciation.
- **Notes / model:** start-abuse logic depth varies by add-on 🟧.

## Ch 3 — Fire, smoke & fumes

### Engine fire 🟥
- **Recognition:** fire warning, possible abnormal engine-parameter indication. · **Actions:** power lever IDLE · condition lever FUEL OFF · fuel/hydraulic shutoff handle pulled · fire-extinguisher bottle discharged per annunciation · secure, divert. · **Notes/model:** confirm fire-handle and bottle-discharge logic is simulated 🟧 `[VERIFY]`.
### APU fire
- **Recognition:** APU fire warning. · **Actions:** APU fire-extinguisher actioned, APU master OFF. · **Notes/model:** confirm simulated 🟧.
### Baggage compartment smoke
- **Recognition:** baggage-compartment smoke warning (forward or aft). · **Actions:** confirm, action the compartment fire-suppression system per checklist, land ASAP. · **Notes/model:** 🟧 may not be fully simulated `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, smoke-detector indication. · **Actions:** oxygen/smoke goggles as fitted, isolate the suspected source (electrical load-shed), consider an emergency descent/land ASAP. · **Notes/model:** smoke-source logic depth limited 🟧.

## Ch 4 — Electrical

- **System:** engine-driven generators supply the main AC/DC busses; an APU generator and batteries (main, auxiliary, standby) back up the main sources.
- **Generator loss (single):** electrical-fault indication · confirm remaining sources cover essential loads · monitor.
- **Emergency electrical configuration:** loss of main sources — confirm essential busses powered from remaining sources, start the APU if available, expect degraded systems, land ASAP.
- **Battery-only:** all generator sources lost — minimum essential loads, prioritise APU recovery or a prompt landing.
- **Notes/model 🟧:** electrical-fault-injection depth is add-on dependent; confirm before training to it `[VERIFY]`.

## Ch 5 — Hydraulics

- **Systems:** the type carries engine-driven and electrically-driven hydraulic sources; loss of one source is normally tolerable, with the remaining source(s) covering essential flight-control, gear and braking functions.
- **Single-source loss:** hydraulic-fault indication · manage per checklist · note affected surfaces/brakes.
- **Multiple-source loss:** expect degraded flight-control response and reversion to alternate gear extension/braking — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** hydraulic-system depth and reversion logic is add-on dependent; confirm before relying on it `[VERIFY]`.

## Ch 6 — Fuel

- **Imbalance:** fuel-imbalance indication · use crossfeed to balance, identify cause (leak vs asymmetric burn — note that an autofeathered/shut-down engine will stop burning from its own tank).
- **Leak:** if a leak is suspected, **do not** open crossfeed blindly; isolate per checklist, reassess fuel/range and divert.
- **Low level / boost pump fault:** manage the fuel boost pumps per checklist; recompute reserves (Dispatch §3).
- **Notes / model 🟧:** boost-pump and crossfeed/transfer logic modelled at a systems level per the candidate's public feature notes; depth is add-on/version dependent.

## Ch 7 — Flight controls & high-lift

### Reduced flight-control authority
- **Recognition:** flight-control fault indication, degraded response on an affected surface. · **Actions:** fly manually with the remaining surfaces, respect that **no envelope protection exists on this (conventionally controlled) type** — the pilot must self-limit pitch/bank/speed — plan a flapped, higher-VREF approach; watch T-tail deep-stall margin at aft CG (Ch 0). · **Notes/model:** fault-injection depth varies by add-on 🟧.
### Flap jam
- **Recognition:** flap-fault indication. · **Actions:** stop at the safe achieved configuration, compute the higher approach speed & landing distance (Ch 13), use a longer runway.
### Trim runaway
- **Actions:** per checklist; for an uncommanded trim input, use the manual trim/disconnect path. 🟧

## Ch 8 — Landing gear, brakes & tyres

- **Gear disagree / unsafe:** recycle once if permitted; if still unsafe use the **alternate (gravity/free-fall or hand-pump) extension**; do not force.
- **Alternate/gravity extension:** per checklist; expect no retract afterwards. · **Notes/model:** confirm modelled on the flown add-on 🟧 `[VERIFY]`.
- **Brake / anti-skid fault:** use alternate braking, modulate manually if anti-skid is inoperative, expect a longer rollout, avoid a locked wheel.
- **Tyre failure / partial gear:** brief the cabin for a possible evacuation, request RFF standby, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain

### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin-altitude warning, rate-of-climb of cabin altitude. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — power reduced, descend toward **FL100/MSA**, off-track if required; PA, MAYDAY. Then work the checklist for the pressurisation configuration. · **Notes/model:** cabin-altitude and emergency-descent logic depth is add-on dependent 🟧.
### Pack / bleed fault
- **Actions:** per checklist, single-pack operation, consider an altitude limit; monitor cabin altitude.
### Icing / de-ice discipline 🟥
- **Recognition:** ice-detection annunciation, visible ice accretion, airspeed/performance degradation. · **Actions:** engine-nacelle intake guards, wing/tail pneumatic de-ice boots, and electric heat for the propellers, pitot/static probes, AOA vanes and windshields — select/cycle per the annunciated ice-protection logic; note the associated power/electrical-load penalty (Dispatch §5a). **This is a turboprop with a certified icing-conditions capability (general public knowledge, re-expressed) — treat icing discipline as a first-order item on this type**, more so than on the jets elsewhere in this group given its shorter-field, more marginal-weather Regional-network role. Confirm the flown model's ice-protection annunciation logic before training to it 🟧 `[VERIFY]`.

## Ch 10 — Navigation, instruments & autoflight

### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, air-data-source fault indication. · **Actions (memory, Ch 1):** AP/FD OFF, fly a known pitch + power `[VERIFY]`, identify the faulty source, use the remaining/backup indication, then troubleshoot. · **Notes/model:** air-data-fault simulation depth is add-on dependent 🟧.
### Display loss, autoflight fault, navigation-accuracy loss
- **Actions:** revert to the remaining display(s)/source(s); for a navigation-accuracy loss, downgrade the navigation mode and advise ATC; hand-fly if autoflight is lost. · **Notes/model 🟧:** depth varies by add-on.

## Ch 11 — Communications
- **Radio / audio failure:** select the alternate radio/audio path, squawk 7600, follow the lost-communications procedure for the airspace/clearance.
- **Transponder fault:** select the alternate transponder, advise ATC. · **Notes/model 🟧:** basic on the candidate add-on.

## Ch 12 — Miscellaneous
- **Door / baggage-compartment fault:** confirm indication clear before pressurising; both baggage doors are external-access only.
- **Windshield heat fault, water/waste, bird strike:** stabilise, assess damage/engine effect, reduce unnecessary power changes, land at the nearest suitable field.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-configuration landing distance & approach-speed increments** (flap-fault, reduced flight-control authority): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and a higher approach speed `[VERIFY]`.
- **Single-engine diversion:** on engine loss and autofeather, plan the nearest suitable diversion field promptly — this type's Regional network (Dispatch §5) is **not EDTO-planned**, so there is normally no extended single-engine driftdown/critical-fuel case to work, unlike the mainline widebody EDTO fleet.
- **Overweight landing:** if landing above MLW (once confirmed — Intro §5), use the overweight-landing technique/speed, expect a longer distance, and log the event for inspection. `[VERIFY]`
- Method and figures are re-derived from public data; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, major failure, or an unsafe landing.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alerted**; shut down **engines (condition levers FUEL OFF) and APU**; if evacuation is ordered → **command the evacuation**, cut fuel and non-essential electrics per the secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft; cabin crew direct the evacuation to usable exits (main door, Type II/III overwing exit — assess fire side/wind, and propeller-arc avoidance if either engine has not fully spooled down), account for all occupants, move upwind and clear of the propeller discs.
- **Notes / model 🟧:** shutdown/secure logic is generally represented; the passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — De Havilland Canada Dash 8 — https://en.wikipedia.org/wiki/De_Havilland_Canada_Dash_8
- Transport Canada — Type Certificate Data Sheet A-142 (DHC-8 series) — https://wwwapps.tc.gc.ca/saf-sec-sur/2/nico-celn/c_d.aspx?lang=eng&aprv_num=A-142
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- Wikipedia — Pratt & Whitney Canada PW100 (covers PW150A) — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_Canada_PW100

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered Q400 turboprop abnormal/emergency reference built largely from general public turboprop knowledge (type-specific abnormal source thin) 🟧; memory items 🟥 include engine failure/autofeather, autofeather-fault manual feathering, inadvertent ground-beta selection in flight, stall/stick-shaker, unreliable airspeed, rapid depressurisation/emergency descent, engine fire, evacuation; turboprop-specific hazards (autofeather, beta-range mishandling, icing) flagged throughout as having no jet equivalent elsewhere in this group; no EDTO driftdown case for this network (Ch 13); figures `[VERIFY]`. |
