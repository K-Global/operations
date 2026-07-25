<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  CRJ2 Bombardier CRJ-200
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# CRJ2 — Bombardier CRJ-200 · QRH

**CRJ2 — SEPARATE type rating from the CRJ700/900** · flown as JRollon CRJ-200 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane. **In a real non-normal the aircraft's EICAS/electronic checklist is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words from general public CRJ-family/turbofan-regional-jet knowledge; **no verbatim OEM text**, and the source material surveyed for this type was thin on abnormal procedures, so several chapters below are built from general public knowledge rather than a type-specific abnormal source — flagged 🟧 throughout. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH

- CRJ-200 philosophy: **fly first**, let the EICAS present the caution/warning, then work the **paper/electronic checklist** for the ordered actions. PF flies + manages thrust/config; PM reads and actions the checklist.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the checklist. Everything else: stabilise, then work the checklist.
- **Conventional flight controls 🟧:** the CRJ-200 is **not** fly-by-wire — ailerons, elevator and rudder are conventionally actuated through a yoke and pedals (cable/hydraulic), and there is **no envelope-protection law**. Stall, overspeed and bank limits are **not** automatically enforced; the pilot must recognise and recover manually.
- **T-tail awareness 🟧:** as a T-tail type, a **deep stall / tailplane-blanking risk** exists if AOA is allowed to develop well beyond the stall warning at aft CG — the memory item in Ch 1 (immediate nose-down at the first stall indication) is written with this in mind; do not delay recovery to "confirm" the stall.
- **Hard-wing note 🟥 — MANDATORY:** this type has **NO leading-edge slats** (Intro §6) — a genuine hard wing, unlike the slatted CRJ700/900. This raises the stakes of two chapters specifically: **stall/stick-shaker recovery** (Ch 1/Ch 7 — no slat-extended low-speed lift margin to fall back on) and **icing/contamination discipline** (Ch 9 — a hard, unslatted leading edge is less tolerant of ice/frost/contamination than a slatted wing). Treat both as genuine 🟥 handling items for this type, not the general contamination caveats used in the CRJ700/900 pack.
- **Model caveat 🟧:** the candidate add-on (Sim-Model §1) has not been confirmed against a full type-specific abnormal/emergency procedure source, and its systems/annunciation depth against this QRH's chapters is unverified (Sim-Model §3). Treat every non-normal below as a training aid, not a certified procedure, and confirm what the flown model actually triggers before relying on it `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Stall warning / stick shaker (hard-wing type)** 🟥 | **Immediately** reduce angle of attack (nose down), apply thrust as required, wings level — do **not** delay; on this **unslatted** wing there is no slat-extended low-speed margin to buy time, and the T-tail deep-stall risk compounds the urgency `[VERIFY]` | Monitor speed, recover clean, read Ch 7 |
| **Airframe icing / ice-detection warning** 🟥 | Anti-ice **ON** (wing/engine, per EICAS ICE annunciation) immediately on detection or entering known icing; increase speed margin above the icing-adjusted schedule; avoid further AOA increase until the wing is confirmed clean — this is a genuine **hard-wing** discipline item, not a general caveat | Monitor ice-detection/EICAS status, exit icing conditions if able, read Ch 9 |
| **Unreliable airspeed / air data disagree** 🟥 | Disconnect AP/FD/autothrottle; set **known pitch + thrust** for the phase of flight `[VERIFY]`; keep clean if able | Level off, identify the faulty air-data source, use remaining/backup indications, read Ch 10 |
| **Rapid depressurisation / emergency descent** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speedbrake/ground-lift-dumping as fitted for descent use, descend toward **FL100 / MSA**, turn off track if needed | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Affected thrust lever idle → **engine master/fuel OFF**; **fire-extinguisher handle** pulled/actioned; discharge agent per EICAS guidance | Confirm fire indication clear, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut down engines and APU**; if evacuation ordered → **command the evacuation**, cut fuel/electrics per the secure flow | Cabin evacuation signal, ATC/RFF, read Ch 14 |

*Memory-item modelling 🟧: confirm on the flown add-on (Sim-Model §1) whether stall/stick-shaker behaviour, ice-detection annunciation, engine-fire logic and air-data-fault simulation are actually modelled before training to this table `[VERIFY]`.*

## Ch 2 — Engines / APU / power plant

### Engine fire 🟥
- **Recognition:** EICAS fire warning, possible abnormal engine-parameter indication.
- **Actions:** Thrust lever IDLE · engine master/fuel OFF · fire-extinguisher handle actioned · discharge agent · secure, divert.
- **Notes / model:** confirm fire-handle and agent-discharge logic is simulated on the flown add-on 🟧 `[VERIFY]`.

### Engine failure / flameout / in-flight relight
- **Recognition:** thrust/parameter rollback on one engine (CF34-3B1), EICAS engine-fail indication, yaw.
- **Actions:** maintain control (rudder for asymmetry — no envelope protection to help here, Ch 0) · confirm the failed engine · secure per checklist · assess relight envelope · plan a prompt diversion to the nearest suitable field (this type is not typically EDTO-planned — Dispatch §5 — so plan a prompt diversion rather than an oceanic driftdown). Note the **hard-wing approach-speed penalty** (below normal single-engine handling) if a single-engine approach follows.
- **Notes / model:** single-engine handling/asymmetry modelling depth is add-on dependent 🟧 `[VERIFY]`.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** over-temperature indication on start, stagnant core speed, or thrust not matching lever position.
- **Actions:** abort start (fuel/master OFF), motor the engine per EICAS/limits before a re-attempt, log the event.
- **Notes / model:** start-abuse logic depth varies by add-on 🟧.

## Ch 3 — Fire, smoke & fumes

### APU fire
- **Recognition:** APU fire warning/EICAS indication. · **Actions:** APU fire-extinguisher handle, discharge agent, APU master OFF. · **Notes/model:** confirm simulated 🟧.
### Cargo smoke
- **Recognition:** cargo-smoke warning. · **Actions:** confirm, discharge the cargo fire-suppression agent, land ASAP, isolate per EICAS. · **Notes/model:** 🟧 may not be fully simulated `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, EICAS smoke indication. · **Actions:** masks/goggles as fitted, 100% oxygen, isolate the suspected source (electrical load-shed), consider an emergency descent/land ASAP. · **Notes/model:** smoke-source logic depth limited 🟧.

## Ch 4 — Electrical

- **System:** independent AC networks (each with its own engine-driven generator), with an essential-bus transfer path on a source fault; an APU generator backs up the main sources; DC supplied by batteries and transformer-rectifier units.
- **Generator loss (single):** EICAS electrical-fault indication, essential-bus transfer available · confirm remaining sources cover essential loads · monitor.
- **Emergency electrical configuration:** loss of main AC sources — confirm essential busses powered via the transfer path, start the APU if available, expect degraded systems, land ASAP.
- **Battery-only:** all generator sources lost — minimum essential loads, prioritise APU recovery, expedite landing.
- **Notes/model 🟧:** bus-transfer logic depth on the JRollon CRJ-200 has not been independently verified against this description — confirm before training to it `[VERIFY]`.

## Ch 5 — Hydraulics

- **Systems:** the type carries multiple independent hydraulic systems; loss of one is normally tolerable with the others covering essential flight-control, gear, ground-lift-dumping and brake functions.
- **Single-system loss:** EICAS hydraulic-fault indication · manage per checklist · note affected surfaces/brakes/ground-lift-dumping.
- **Multiple-system loss:** expect degraded flight-control response and reversion to alternate gear extension/braking — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** hydraulic-system depth and reversion logic is add-on dependent; confirm before relying on it `[VERIFY]`.

## Ch 6 — Fuel

- **Imbalance:** EICAS fuel-imbalance indication · use crossfeed to balance, identify cause (leak vs asymmetric burn). Note the **small total fuel capacity** on this type (max 6,489 kg, Intro §5) — an imbalance or leak eats into reserves faster than on the larger CRJ700/900.
- **Leak:** if a leak is suspected, **do not** open crossfeed blindly; isolate per EICAS, reassess fuel/range and divert promptly given the limited fuel margin.
- **Low level / boost pump fault:** manage the independent fuel boost pumps per EICAS; recompute reserves (Dispatch §3).
- **Notes / model 🟧:** boost-pump and crossfeed/transfer logic modelling depth on the JRollon CRJ-200 is unverified; confirm before relying on it `[VERIFY]`.

## Ch 7 — Flight controls & high-lift

### Reduced flight-control authority
- **Recognition:** EICAS flight-control fault indication, degraded response on an affected surface. · **Actions:** fly manually with the remaining surfaces, respect that **no envelope protection exists on this (non-fly-by-wire) type** — the pilot must self-limit pitch/bank/speed — plan a flapped, higher-VREF approach (already elevated on this hard-wing type — see below); watch T-tail deep-stall margin at aft CG (Ch 0). · **Notes/model:** fault-injection depth varies by add-on 🟧.
### Hard-wing handling 🟥 — no leading-edge slats
- **Recognition:** N/A — this is a standing airframe characteristic, not a fault. · **Handling implication:** the CRJ-200's wing has **no leading-edge high-lift devices** — approach speeds and AOA margins are inherently higher than the slatted CRJ700/900; there is **no slat-extension case to fail** (nothing to jam), but there is also **no slat margin to fall back on** if speed decays. Fly the published VREF/approach-speed schedule precisely; do not carry a slatted-type's lower reference speeds onto this airframe.
### Trim runaway / ground-lift-dumping fault
- **Actions:** per EICAS; for an uncommanded trim input, use the manual trim/disconnect path; for a ground-lift-dumping (spoiler) fault, expect reduced deceleration/lift-dump on landing and plan a longer rollout. 🟧

## Ch 8 — Landing gear, brakes & tyres

- **Gear disagree / unsafe:** recycle once if permitted; if still unsafe use the **alternate (gravity/free-fall) extension**; do not force.
- **Alternate/gravity extension:** per EICAS/checklist; expect no retract afterwards. · **Notes/model:** confirm modelled on the flown add-on 🟧 `[VERIFY]`.
- **Brake / anti-skid fault:** use alternate braking, modulate manually if anti-skid is inoperative, expect a longer rollout, avoid a locked wheel — plan for the type's higher approach/touchdown speed (hard wing) when computing the resulting landing distance.
- **Tyre failure / partial gear:** brief the cabin for a possible evacuation, request RFF standby, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain

### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin-altitude warning, rate-of-climb of cabin altitude. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle thrust, use of ground-lift-dumping/speedbrake surfaces as fitted for descent, descend toward **FL100/MSA**, off-track if required; PA, MAYDAY. Then work the checklist for the pressurisation configuration. · **Notes/model:** cabin-altitude and emergency-descent logic depth is add-on dependent 🟧.
### Pack / bleed fault
- **Actions:** per EICAS, single-pack operation, consider an altitude limit; monitor cabin altitude.
### Airframe icing / anti-ice discipline 🟥 — MANDATORY, hard-wing type
- **Recognition:** visible ice accretion, ice-detection EICAS annunciation, or known/forecast icing conditions.
- **Actions:** wing/engine anti-ice **ON** per EICAS ICE annunciation or on entering known icing — **do not delay**; this type has **no leading-edge slats** (Intro §6/Ch 0), so a contaminated or ice-affected wing loses lift margin with **no slat-extended fallback** the way a slatted CRJ700/900 wing would tolerate better. Increase approach-speed margin per the icing-adjusted schedule; respect ground de-ice holdover times strictly; do **not** accept takeoff with visible contamination on the wing.
- **Notes / model:** ice-detection/EICAS ICE message logic depth on the JRollon CRJ-200 is unverified 🟧 `[VERIFY]` — confirm before training to it, but brief the real-aircraft discipline regardless of what the model simulates.

## Ch 10 — Navigation, instruments & autoflight

### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, air-data-source fault indication. · **Actions (memory, Ch 1):** AP/FD/autothrottle OFF, fly a known pitch + thrust `[VERIFY]`, identify the faulty source, use the remaining/backup indication, then troubleshoot. On this hard-wing type, an unreliable-airspeed event is compounded by the already-higher normal approach-speed schedule — err toward a conservative, higher pitch/thrust setting rather than risk a low-speed excursion. · **Notes/model:** air-data-fault simulation depth is add-on dependent 🟧.
### Display loss, autoflight fault, navigation-accuracy loss
- **Actions:** revert to the remaining display(s)/source(s); for a navigation-accuracy loss, downgrade the navigation mode and advise ATC; hand-fly if autoflight is lost (remember: no envelope protection, Ch 0). · **Notes/model 🟧:** depth varies by add-on.

## Ch 11 — Communications
- **Radio / audio failure:** select the alternate radio/audio path, squawk 7600, follow the lost-communications procedure for the airspace/clearance.
- **Transponder fault:** select the alternate transponder, advise ATC. · **Notes/model 🟧:** basic on the candidate add-on.

## Ch 12 — Miscellaneous
- **Door / slide fault:** confirm on the EICAS before pressurising; disarm slides before opening any door on the ground.
- **Windshield heat fault, water/waste, bird strike:** stabilise, assess damage/engine effect, reduce unnecessary thrust changes, land at the nearest suitable field.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-configuration landing distance & approach-speed increments:** compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway. On this **hard-wing** type the baseline VREF is already higher than a slatted CRJ700/900, so any abnormal-configuration increment compounds from a higher starting point `[VERIFY]`.
- **Single-engine diversion:** on engine loss, plan the nearest suitable diversion field promptly — this type's short-haul network (Dispatch §5) is **not typically EDTO-planned**, and its structural range is the shortest in the regional group (Intro §1), so there is normally no extended single-engine driftdown/critical-fuel case to work.
- **Overweight landing:** if landing above MLW (once confirmed — Intro §5), use the overweight-landing technique/speed, expect a longer distance, and log the event for inspection. `[VERIFY]`
- Method and figures are re-derived from public data; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, major failure, or an unsafe landing.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alerted**; shut down **engines and APU**; if evacuation is ordered → **command the evacuation**, cut fuel and non-essential electrics per the secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft; cabin crew direct the evacuation to usable exits (main door, rear airstair/service door, overwing exits — assess fire side/wind), account for all occupants, move upwind.
- **Notes / model 🟧:** shutdown/secure logic is generally represented; the passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Bombardier Regional Jet CRJ-200 (CRJ2) — https://skybrary.aero/aircraft/crj2
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- Wikipedia — Bombardier CRJ100/200 — https://en.wikipedia.org/wiki/Bombardier_CRJ100/200
- Wikipedia — General Electric CF34 — https://en.wikipedia.org/wiki/General_Electric_CF34

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered CRJ-200 (Pro Line 4/EICAS, conventional flight controls, T-tail, **hard wing/no leading-edge slats**) abnormal/emergency reference built largely from general public turbofan/regional-jet knowledge (type-specific abnormal source thin) 🟧; memory items 🟥 (stall/stick-shaker on the unslatted wing, airframe icing/anti-ice, unreliable airspeed, emergency descent, engine fire, evacuation); hard-wing discipline flagged 🟥 as mandatory throughout Ch 0/7/9/13, distinct from the CRJ700/900 pack's slatted-wing caveats; no EDTO driftdown case for this network (Ch 13); figures `[VERIFY]`. |
