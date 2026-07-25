<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  SF34 Saab 340B
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# SF34 — Saab 340B · QRH

**SF34 · Saab 340B — TURBOPROP** · flown as Carenado Saab 340B 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane. **In a real non-normal the aircraft's own emergency checklist/annunciator system is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words from general public turboprop/Saab 340 knowledge; **no verbatim OEM text**, and the source material surveyed for this type was thin on abnormal procedures, so several chapters below are built from general public turboprop knowledge rather than a type-specific abnormal source — flagged 🟧 throughout. Chapters mirror ATA-style grouping. **This is a turboprop** — engine-failure handling, autofeather, and prop/airframe ice protection are the dominant abnormal themes, replacing the EICAS/FADEC-centred picture in the jet packs. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH

- Saab 340B philosophy: **fly first**, identify the caution on the annunciator panel, then work the paper/checklist for the ordered actions. PF flies + manages power/condition/prop levers; PM reads and actions the checklist.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the checklist. Everything else: stabilise, then work the checklist.
- **Conventional flight controls 🟧:** the SF34 is **not** fly-by-wire — ailerons, elevator and rudder are conventionally actuated through a yoke and pedals, and there is **no envelope-protection law**. Stall, overspeed and bank limits are **not** automatically enforced by the flight controls; the pilot must recognise and recover manually. The type does, however, carry a **stick shaker AND stick pusher** pair (Intro §4) — a more assertive automatic stall-protection fit than many regional jets — do not disable or override the pusher without a specific, briefed reason.
- **Turboprop/autofeather awareness 🟥:** this is the dominant abnormal theme for this type. An engine failure at low speed/low altitude (takeoff through initial climb) generates far more drag from a windmilling, unfeathered propeller than an equivalent jet failure — **autofeather**, when armed, exists specifically to remove that drag automatically. Recognise an autofeather event promptly and confirm the propeller has actually feathered; do not assume it has without a positive indication.
- **Icing awareness 🟥:** at a 25,000 ft ceiling, this type cannot climb above weather the way the jet fleet can. Ice accretion on the wing/tail/prop is a first-order handling and performance issue, not a background caution — see Ch 9.
- **Model caveat 🟧:** the candidate add-on (Sim-Model §1) has not been confirmed against a full type-specific abnormal/emergency procedure source. Treat every non-normal below as a training aid, not a certified procedure, and confirm what the flown model actually triggers before relying on it `[VERIFY]`.
- All speeds/altitudes/times/torque values here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Engine failure / autofeather** 🟥 | Maintain control, apply rudder for asymmetry, confirm the failed engine, **confirm autofeather has driven the propeller to feather** (or feather manually per checklist if autofeather did not activate/is not armed); apply appropriate power on the live engine `[VERIFY]` | Secure the failed engine per checklist, assess single-engine performance, plan a prompt diversion (Ch 13), read Ch 2 |
| **Stall warning / stick shaker** 🟥 | **Immediately** reduce angle of attack (nose down), apply power as required, wings level; **do not** wait for the pusher to activate before responding `[VERIFY]` | Monitor speed, recover clean, read Ch 7 |
| **Severe icing / ice-protection failure** 🟥 | Select **all available ice protection ON** (prop, windshield, airframe/tail, engine inlet) immediately on any indication of ice accretion or ice-protection-system fault; **exit icing conditions** — change altitude/routing at the earliest opportunity given the FL250 ceiling ceiling constraint `[VERIFY]` | Monitor airspeed/handling for ice-contaminated stall behaviour, read Ch 9 |
| **Rapid depressurisation / emergency descent** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — power reduced, descend toward **FL100 / MSA** (well within reach from this type's FL250 ceiling), turn off track if needed | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire** 🟥 | Affected power lever idle → **fire handle pulled** (fuel/electrical isolation) → **extinguisher agent discharged** per the emergency panel | Confirm fire indication clear, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut down both engines** (condition levers fuel OFF); if evacuation ordered → **command the evacuation**, cut fuel/electrics per the secure flow | Cabin evacuation signal, ATC/RFF, read Ch 14 |

*Memory-item modelling 🟧: confirm on the flown add-on (Sim-Model §1) whether autofeather, stick-shaker/pusher behaviour, engine-fire logic and icing-performance degradation are actually modelled before training to this table `[VERIFY]`.*

## Ch 2 — Engines / propellers

### Engine failure / flameout in flight
- **Recognition:** torque/ITT/NG rollback on one engine, yaw, possible autofeather activation.
- **Actions:** maintain control (rudder for asymmetry — no envelope protection to help here, Ch 0) · confirm the failed engine and that the propeller has feathered (manually feather if autofeather did not activate) · secure per checklist · assess relight envelope if applicable · plan a prompt diversion to the nearest suitable field (this type has no EDTO consideration — Dispatch §5 — so plan the nearest suitable field, not an extended driftdown).
- **Notes / model:** single-engine handling, autofeather logic and asymmetry modelling depth is add-on dependent 🟧 `[VERIFY]`.

### Engine fire 🟥
- **Recognition:** fire warning/annunciation, possible abnormal engine-parameter indication.
- **Actions:** power lever IDLE · fire handle pulled (fuel/electrical isolation) · extinguisher agent discharged per the emergency panel · secure, divert.
- **Notes / model:** confirm fire-handle and agent-discharge logic is simulated on the flown add-on 🟧 `[VERIFY]`.

### Propeller overspeed / uncommanded pitch change
- **Recognition:** prop RPM above limit, or uncommanded pitch/torque behaviour.
- **Actions:** reduce power on the affected engine, attempt to control RPM per checklist; if uncontrollable, consider feathering the affected propeller.
- **Notes / model:** governor-fault and overspeed-protection simulation depth is add-on dependent 🟧.

### Abnormal start / hot start
- **Recognition:** over-temperature indication on start, stagnant NG/NH, or torque not matching lever position.
- **Actions:** abort start (condition lever fuel OFF), allow the engine to cool/motor per limits before a re-attempt, log the event.
- **Notes / model:** start-abuse logic depth varies by add-on 🟧.

## Ch 3 — Fire, smoke & fumes

### Cargo/baggage-compartment fire
- **Recognition:** cargo/baggage-fire warning. · **Actions:** confirm, discharge the fire-suppression agent if fitted, land ASAP. · **Notes/model:** 🟧 may not be fully simulated `[VERIFY]`.
### Cockpit/cabin smoke or fumes
- **Recognition:** smell/smoke, warning indication. · **Actions:** oxygen/smoke goggles as fitted, isolate the suspected source (electrical load-shed), consider an emergency descent/land ASAP. · **Notes/model:** smoke-source logic depth limited 🟧.

## Ch 4 — Electrical

- **System:** AC generated per engine (through a constant-speed drive or equivalent), DC supplied by batteries and transformer-rectifiers, cross-tie/bus-transfer logic for a single generator loss — general turboprop architecture 🟧 `[VERIFY — exact SF34 configuration]`.
- **Single generator loss:** annunciator electrical-fault indication · confirm bus transfer/cross-tie · monitor remaining sources cover essential loads.
- **Battery-only / total generator loss:** minimum essential loads, expedite landing, expect degraded avionics (EADI/EHSI depend on electrical power).
- **Notes/model 🟧:** bus-transfer/cross-tie logic and depth on the candidate add-on not independently confirmed `[VERIFY]`.

## Ch 5 — Hydraulics

- **System:** hydraulic power for landing gear, flaps and (where fitted) other systems — general turboprop architecture, single or dual system depending on production fit 🟧 `[VERIFY]`.
- **Hydraulic-system fault:** annunciator indication · manage per checklist · note affected surfaces/gear/flap actuation, plan an alternate-extension approach if gear-affected (Ch 8).
- **Notes/model 🟧:** hydraulic-system depth and reversion logic is add-on dependent; confirm before relying on it `[VERIFY]`.

## Ch 6 — Fuel

- **Imbalance:** annunciator fuel-imbalance indication · use crossfeed to balance, identify cause (leak vs asymmetric burn) — with only ~2,580 kg total fuel capacity, imbalance and low-fuel margins are proportionally tighter than on the jet fleet.
- **Leak:** if a leak is suspected, **do not** open crossfeed blindly; isolate per checklist, reassess fuel/range and divert given the type's small tank capacity.
- **Low level / boost pump fault:** manage the fuel boost pumps per checklist; recompute reserves (Dispatch §3) — margins are thinner on this type than on the mainline fleet.
- **Notes / model 🟧:** boost-pump and crossfeed logic modelling depth is add-on dependent.

## Ch 7 — Flight controls & stall protection

### Reduced flight-control authority
- **Recognition:** degraded response on an affected surface. · **Actions:** fly manually with the remaining surfaces, respect that **no envelope protection exists on this (non-fly-by-wire) type** — the pilot must self-limit pitch/bank/speed — plan a flapped, higher-approach-speed landing, compute the higher approach speed & landing distance (Ch 13). · **Notes/model:** fault-injection depth varies by add-on 🟧.
### Stall / stick shaker / stick pusher 🟥
- **Recognition:** shaker activation, followed by pusher (nose-down pitch input) if AOA continues to increase. · **Actions:** respond to the shaker **immediately** (Ch 1) — do not wait for or fight the pusher; if the pusher activates, allow the nose-down input and recover with power/attitude. · **Notes/model:** confirm shaker/pusher simulation depth on the flown add-on 🟧 `[VERIFY]`.
### Trim runaway
- **Actions:** per checklist; for an uncommanded trim input, use the manual trim/disconnect path. 🟧

## Ch 8 — Landing gear, brakes & tyres

- **Gear disagree / unsafe:** recycle once if permitted; if still unsafe use the **alternate (gravity/manual) extension**; do not force.
- **Alternate/gravity extension:** per checklist; expect no retract afterwards. · **Notes/model:** confirm modelled on the flown add-on 🟧 `[VERIFY]`.
- **Brake / anti-skid fault:** use alternate braking, modulate manually if anti-skid is inoperative, expect a longer rollout, avoid a locked wheel — a locked wheel on this type's smaller gear/tyre fit can be more consequential than on a larger jet.
- **Tyre failure / partial gear:** brief the cabin for a possible evacuation, request RFF standby, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain

### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin-altitude warning, rate-of-climb of cabin altitude. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — power reduced, descend toward **FL100/MSA** (a short descent given the FL250 ceiling), off-track if required; PA, MAYDAY. Then work the checklist for the pressurisation configuration. · **Notes/model:** cabin-altitude and emergency-descent logic depth is add-on dependent 🟧.
### Pressurisation fault / manual dump
- **Actions:** per checklist; the **PRESS DUMP** switch on the emergency panel (Intro §4) provides a manual pressurisation-dump path — confirm before use it is the intended action, not an inadvertent one.
### Severe icing / ice-protection failure 🟥
- **Recognition:** ice accretion visible/annunciated, ice-protection-system fault indication, degraded handling/performance (buffet onset earlier than clean, reduced climb capability). · **Actions (memory, Ch 1):** all available ice protection ON (prop, windshield, airframe/tail, engine inlet) · exit icing conditions at the earliest opportunity — change altitude or routing, remembering the FL250 ceiling limits how far "up and over" is an option compared with the jet fleet · increase approach speed if ice-contamination is suspected on landing (Ch 13). · **Notes/model:** ice-accretion and ice-protection-system simulation depth is add-on dependent 🟧 `[VERIFY]`.

## Ch 10 — Navigation, instruments & autoflight

### Display loss / EADI-EHSI fault
- **Recognition:** display blank/fault flag on the CRT-based EFIS. · **Actions:** revert to the remaining display/backup instrument, hand-fly if autopilot is affected (remember: no envelope protection, Ch 0). · **Notes/model 🟧:** depth varies by add-on; the early-generation CRT EFIS (Intro §7) has less redundancy than a modern glass suite — confirm backup instrumentation on the flown model.
### Autopilot / FMS fault
- **Actions:** disconnect, hand-fly, use raw data/backup navigation as required. · **Notes/model 🟧:** APS-85-style autopilot depth is add-on dependent.

## Ch 11 — Communications
- **Radio failure:** select the alternate radio path, squawk 7600, follow the lost-communications procedure for the airspace/clearance.
- **Transponder fault:** select the alternate transponder, advise ATC. · **Notes/model 🟧:** basic on the candidate add-on.

## Ch 12 — Miscellaneous
- **Door / slide fault:** confirm on the door-status panel before pressurising; disarm slides before opening any door on the ground.
- **Bird strike, water/waste, windshield heat fault:** stabilise, assess damage/engine effect, reduce unnecessary power changes, land at the nearest suitable field.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-configuration landing distance & approach-speed increments** (icing-contaminated wing, reduced flight-control authority, gear alternate-extended): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and a higher approach speed `[VERIFY]`.
- **Single-engine diversion:** on engine loss, plan the nearest suitable diversion field promptly — this type's short Regional network (Dispatch §5) has **no EDTO/extended-driftdown case** to work, and single-engine performance margin on a turboprop this size is typically tighter than on the jet fleet, making a prompt decision more important, not less.
- **Overweight landing:** if landing above MLW (once confirmed — Intro §5), use the overweight-landing technique/speed, expect a longer distance, and log the event for inspection. `[VERIFY]`
- Method and figures are re-derived from public data; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, major failure, or an unsafe landing.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alerted**; shut down **both engines** (condition levers fuel OFF); if evacuation is ordered → **command the evacuation**, cut fuel and non-essential electrics per the secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft; cabin crew direct the evacuation to usable exits (main door/airstair, any overwing or emergency exits fitted — assess fire side/wind), account for all occupants — a small cabin (33–36 seats) should evacuate quickly if exits are usable, move upwind.
- **Notes / model 🟧:** shutdown/secure logic is generally represented; the passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Saab 340 — https://en.wikipedia.org/wiki/Saab_340
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Propeller Icing / Airframe Icing (general) — https://skybrary.aero/articles/airframe-icing
- EASA — Type Certificate Data Sheet EASA.A.068 (SAAB SF340A, 340B) — https://www.easa.europa.eu/en/document-library/type-certificates/noise/easaa068-saab-340

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered Saab 340B (turboprop, CRT-based EFIS, conventional flight controls, stick shaker/pusher pair) abnormal/emergency reference built largely from general public turboprop knowledge (type-specific abnormal source thin) 🟧; memory items 🟥 (engine failure/autofeather, stall warning, severe icing, rapid depress, engine fire, evacuation); no EDTO driftdown case for this network (Ch 13); figures `[VERIFY]`. |
