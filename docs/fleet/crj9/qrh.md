<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  CRJ9 Bombardier CRJ900
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# CRJ9 — Bombardier CRJ900 · QRH

**CRJ9 / CRJ series** · flown as AD Simulations/DeltaWing CRJ-900 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane. **In a real non-normal the aircraft's EICAS/electronic checklist is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). This QRH is **structurally identical** to the **[CRJ7 QRH](../crj7/qrh.md)** — same avionics, same conventional flight controls, same T-tail, same corrected slatted-wing premise; only weight-driven performance figures (Ch 13) differ. All content is re-expressed in K Global's own words from general public CRJ-family/turbofan-regional-jet knowledge; **no verbatim OEM text**, and the source material surveyed for this type was thin on abnormal procedures, so several chapters below are built from general public knowledge rather than a type-specific abnormal source — flagged 🟧 throughout. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH

- CRJ900 philosophy: **fly first**, let the EICAS present the caution/warning, then work the **electronic/paper checklist** for the ordered actions. PF flies + manages thrust/config; PM reads and actions the checklist.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the checklist. Everything else: stabilise, then work the checklist.
- **Conventional flight controls 🟧:** the CRJ900 is **not** fly-by-wire — ailerons, elevator and rudder are conventionally actuated through a yoke and pedals (cable/hydraulic), and there is **no envelope-protection law**. Stall, overspeed and bank limits are **not** automatically enforced; the pilot must recognise and recover manually.
- **T-tail awareness 🟧:** as a T-tail type, a **deep stall / tailplane-blanking risk** exists if AOA is allowed to develop well beyond the stall warning at aft CG — the memory item in Ch 1 (immediate nose-down at the first stall indication) is written with this in mind; do not delay recovery to "confirm" the stall. The CRJ900's stretched fuselage moves the CG envelope relative to the CRJ7 — confirm the loaded CG before assuming identical handling margins.
- **Wing/icing note 🟧:** this type shares the CRJ7's **slatted wing** (Intro §6) — it is not the hard-wing CRJ-200. Icing/anti-ice items below are the general regional-jet contamination-discipline caveats, not a structural no-slat AOA limitation.
- **Model caveat 🟧:** the candidate add-on (Sim-Model §1) has not been confirmed against a full type-specific abnormal/emergency procedure source. Treat every non-normal below as a training aid, not a certified procedure, and confirm what the flown model actually triggers before relying on it `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Stall warning / stick shaker** 🟥 | **Immediately** reduce angle of attack (nose down), apply thrust as required, wings level — do **not** delay given the T-tail deep-stall risk `[VERIFY]` | Monitor speed, recover clean, read Ch 7 |
| **Unreliable airspeed / air data disagree** 🟥 | Disconnect AP/FD/autothrottle; set **known pitch + thrust** for the phase of flight `[VERIFY]`; keep clean if able | Level off, identify the faulty air-data source, use remaining/backup indications, read Ch 10 |
| **Rapid depressurisation / emergency descent** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speedbrake/ground-lift-dumping as fitted for descent use, descend toward **FL100 / MSA**, turn off track if needed | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Affected thrust lever idle → **engine master/fuel OFF**; **fire-extinguisher handle** pulled/actioned; discharge agent per EICAS guidance | Confirm fire indication clear, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut down engines and APU**; if evacuation ordered → **command the evacuation**, cut fuel/electrics per the secure flow | Cabin evacuation signal, ATC/RFF, read Ch 14 |

*Memory-item modelling 🟧: confirm on the flown add-on (Sim-Model §1) whether stall/stick-shaker behaviour, engine-fire logic and air-data-fault simulation are actually modelled before training to this table `[VERIFY]`.*

## Ch 2 — Engines / APU / power plant

### Engine fire 🟥
- **Recognition:** EICAS fire warning, possible abnormal engine-parameter indication.
- **Actions:** Thrust lever IDLE · engine master/fuel OFF · fire-extinguisher handle actioned · discharge agent · secure, divert.
- **Notes / model:** confirm fire-handle and agent-discharge logic is simulated on the flown add-on 🟧 `[VERIFY]`.

### Engine failure / flameout / in-flight relight
- **Recognition:** thrust/parameter rollback on one engine, EICAS engine-fail indication, yaw.
- **Actions:** maintain control (rudder for asymmetry — no envelope protection to help here, Ch 0) · confirm the failed engine · secure per checklist · assess relight envelope · plan a prompt diversion to the nearest suitable field (this type is not typically EDTO-planned — Dispatch §5 — so plan a prompt diversion rather than an oceanic driftdown). The heavier, more heavily loaded CRJ900 may see a reduced single-engine climb/drift-down margin relative to the CRJ7 — treat conservatively pending a confirmed figure.
- **Notes / model:** single-engine handling/asymmetry modelling depth is add-on dependent 🟧 `[VERIFY]`.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** over-temperature indication on start, stagnant core speed, or thrust not matching lever position.
- **Actions:** abort start (fuel/master OFF), motor the engine per EICAS/limits before a re-attempt, log the event; for a thrust anomaly cross-check the FADEC/thrust-rating mode annunciation.
- **Notes / model:** start-abuse logic depth varies by add-on 🟧.

## Ch 3 — Fire, smoke & fumes

### APU fire
- **Recognition:** APU fire warning/EICAS indication. · **Actions:** APU fire-extinguisher handle, discharge agent, APU master OFF. · **Notes/model:** confirm simulated 🟧.
### Cargo smoke
- **Recognition:** cargo-smoke warning. · **Actions:** confirm, discharge the cargo fire-suppression agent, land ASAP, isolate per EICAS. · **Notes/model:** 🟧 may not be fully simulated `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, EICAS smoke indication. · **Actions:** masks/goggles as fitted, 100% oxygen, isolate the suspected source (electrical load-shed), consider an emergency descent/land ASAP. · **Notes/model:** smoke-source logic depth limited 🟧.

## Ch 4 — Electrical

- **System:** independent AC networks (each with its own engine-driven generator), with an **AC ESS XFER / MAN** transfer path for the essential bus on a source fault; an APU generator backs up the main sources; DC supplied by batteries and transformer-rectifier units.
- **Generator loss (single):** EICAS electrical-fault indication, essential-bus transfer available via AC ESS XFER · confirm remaining sources cover essential loads · monitor.
- **Emergency electrical configuration:** loss of main AC sources — confirm essential busses powered via the AC ESS transfer path, start the APU if available, expect degraded systems, land ASAP.
- **Battery-only:** all generator sources lost — minimum essential loads, prioritise APU recovery, expedite landing.
- **Notes/model 🟧:** AC ESS XFER/MAN bus-transfer logic is represented on the candidate add-on at a systems level (per its public feature notes, shared engineering base with the CRJ7 product), but depth/version behaviour should be verified before training to it `[VERIFY]`.

## Ch 5 — Hydraulics

- **Systems:** the type carries multiple independent hydraulic systems; loss of one is normally tolerable with the others covering essential flight-control, gear, ground-lift-dumping and brake functions.
- **Single-system loss:** EICAS hydraulic-fault indication · manage per checklist · note affected surfaces/brakes/ground-lift-dumping.
- **Multiple-system loss:** expect degraded flight-control response and reversion to alternate gear extension/braking — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** hydraulic-system depth and reversion logic is add-on dependent; confirm before relying on it `[VERIFY]`.

## Ch 6 — Fuel

- **Imbalance:** EICAS fuel-imbalance indication · use crossfeed to balance, identify cause (leak vs asymmetric burn).
- **Leak:** if a leak is suspected, **do not** open crossfeed blindly; isolate per EICAS, reassess fuel/range and divert.
- **Low level / boost pump fault:** manage the independent fuel boost pumps per EICAS; recompute reserves (Dispatch §3).
- **Notes / model 🟧:** independent boost-pump and crossfeed/transfer logic modelled at a systems level per the candidate's public feature notes; depth is add-on/version dependent.

## Ch 7 — Flight controls & high-lift

### Reduced flight-control authority
- **Recognition:** EICAS flight-control fault indication, degraded response on an affected surface. · **Actions:** fly manually with the remaining surfaces, respect that **no envelope protection exists on this (non-fly-by-wire) type** — the pilot must self-limit pitch/bank/speed — plan a flapped, higher-VREF approach; watch T-tail deep-stall margin at aft CG (Ch 0). · **Notes/model:** fault-injection depth varies by add-on 🟧.
### Flap / slat jam
- **Recognition:** EICAS flap/slat fault. · **Actions:** stop at the safe achieved configuration, compute the higher approach speed & landing distance (Ch 13), use a longer runway. This type has a **slatted** wing, shared with the CRJ7 (Intro §6) — a slat-jam case is a genuine consideration here, unlike on a hard-wing CRJ-200 (which has none to jam).
### Trim runaway / ground-lift-dumping fault
- **Actions:** per EICAS; for an uncommanded trim input, use the manual trim/disconnect path; for a ground-lift-dumping (spoiler) fault, expect reduced deceleration/lift-dump on landing and plan a longer rollout — the heavier CRJ900 is more sensitive to a lift-dump fault than the CRJ7. 🟧

## Ch 8 — Landing gear, brakes & tyres

- **Gear disagree / unsafe:** recycle once if permitted; if still unsafe use the **alternate (gravity/free-fall) extension**; do not force.
- **Alternate/gravity extension:** per EICAS/checklist; expect no retract afterwards. · **Notes/model:** confirm modelled on the flown add-on 🟧 `[VERIFY]`.
- **Brake / anti-skid fault:** use alternate braking, modulate manually if anti-skid is inoperative, expect a longer rollout, avoid a locked wheel.
- **Tyre failure / partial gear:** brief the cabin for a possible evacuation, request RFF standby, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain

### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin-altitude warning, rate-of-climb of cabin altitude. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle thrust, use of ground-lift-dumping/speedbrake surfaces as fitted for descent, descend toward **FL100/MSA**, off-track if required; PA, MAYDAY. Then work the checklist for the pressurisation configuration. · **Notes/model:** cabin-altitude and emergency-descent logic depth is add-on dependent 🟧.
### Pack / bleed fault
- **Actions:** per EICAS, single-pack operation, consider an altitude limit; monitor cabin altitude.
### Anti-ice / icing discipline 🟥
- **Actions:** wing/engine anti-ice ON in icing conditions per EICAS ICE annunciation; note the associated thrust/bleed performance penalty. **This is a slatted-wing type (Intro §6), shared with the CRJ7** — anti-ice discipline is the standard regional-jet contamination-avoidance case (ground de-ice holdover time, no-icing-conditions-uncleared-takeoff rule, in-flight anti-ice as annunciated), not a hard-wing AOA restriction. Confirm the flown model's ICE EICAS message logic before training to it 🟧 `[VERIFY]`.

## Ch 10 — Navigation, instruments & autoflight

### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, air-data-source fault indication. · **Actions (memory, Ch 1):** AP/FD/autothrottle OFF, fly a known pitch + thrust `[VERIFY]`, identify the faulty source, use the remaining/backup indication, then troubleshoot. · **Notes/model:** air-data-fault simulation depth is add-on dependent 🟧.
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
- **Abnormal-configuration landing distance & approach-speed increments** (flap/slat-less, reduced flight-control authority): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and a higher approach speed `[VERIFY]`. The CRJ900's baseline landing field length (~1,660 m, SKYbrary) is longer than the CRJ7's (~1,509 m) — apply the CRJ900-specific figure, not the CRJ7's, when computing abnormal-configuration increments.
- **Single-engine diversion:** on engine loss, plan the nearest suitable diversion field promptly — this type's short-haul network (Dispatch §5) is **not typically EDTO-planned**, so there is normally no extended single-engine driftdown/critical-fuel case to work, unlike the mainline widebody EDTO fleet.
- **Overweight landing:** if landing above MLW (once confirmed — Intro §5), use the overweight-landing technique/speed, expect a longer distance, and log the event for inspection. `[VERIFY]`
- Method and figures are re-derived from public data; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, major failure, or an unsafe landing.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alerted**; shut down **engines and APU**; if evacuation is ordered → **command the evacuation**, cut fuel and non-essential electrics per the secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft; cabin crew direct the evacuation to usable exits (main door, rear airstair/service door, overwing exits — assess fire side/wind), account for all occupants, move upwind. The CRJ900 carries more passengers (76–90) than the CRJ7 (70, up to 78) on broadly the same exit layout — allow for a longer evacuation flow when briefing.
- **Notes / model 🟧:** shutdown/secure logic is generally represented; the passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Bombardier CRJ-900 (CRJ9) — https://skybrary.aero/aircraft/crj9
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- FAA — Type Certificate Data Sheet A21EA (CL-600-2C10 / CL-600-2D24) — https://drs.faa.gov/browse/excelExternalWindow/DRSDOCID139432206720241108194210.0001
- Wikipedia — General Electric CF34 — https://en.wikipedia.org/wiki/General_Electric_CF34

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered CRJ900 (Pro Line 4/EICAS, conventional flight controls, T-tail) abnormal/emergency reference built largely from general public turbofan/regional-jet knowledge (type-specific abnormal source thin) 🟧, structurally mirroring the CRJ7 QRH; memory items 🟥 (stall/stick-shaker, unreliable airspeed, emergency descent, engine fire, evacuation); wing/icing premise corrected (slatted wing, standard contamination discipline, not hard-wing AOA case); weight-driven performance figures (Ch 13) updated for the stretched fuselage; no EDTO driftdown case for this network; figures `[VERIFY]` |
