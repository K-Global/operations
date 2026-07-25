<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  B789 Boeing 787-9 Dreamliner
  Thorough, chaptered non-normal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM/airline text.
  FLAG LEGEND  🟥 recall/memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# B789 — Boeing 787-9 Dreamliner · QRH

**B789 / 787 family** · flown as Magknight 787 (lead) / default Laminar 787 (fallback) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for non-normal & emergency handling on X-Plane 11, Boeing philosophy. **In a real non-normal the aircraft's EICAS and QRH are authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM/airline text**. Chapters mirror the Boeing QRH ATA-style grouping. Flag legend 🟥 recall/memory · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH (Boeing philosophy)
- **Boeing philosophy differs from Airbus:** there is **no ECAM that actions itself**. EICAS displays the alert message; the crew **fly first, then select the matching non-normal checklist and read-and-do it**. PF flies + manages thrust/config; PM reads and actions the checklist.
- **Recall (memory) items** are a **small** set of immediate actions done without the book (Ch 1, marked 🟥). Everything else is a **read-and-do** non-normal checklist — do not action from memory.
- **Recall check:** after the immediate actions, the **RECALL** function on EICAS is used to display the outstanding alerts and confirm the correct checklist(s).
- **Model caveat 🟧:** Magknight 787 drives a real EICAS message set for many items; the default Laminar 787 is lighter and may **not trigger or fully resolve** several procedures below. Where a step depends on failure logic the model may not simulate, it is flagged 🟧. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Recall / memory items 🟥
*Boeing 787 recall (memory) items are deliberately few. These are the only actions done without reading the checklist; everything else is read-and-do.*

| Condition | Immediate action (recall/memory) | Then |
|---|---|---|
| **Airspeed Unreliable** 🟥 | Autopilot / autothrottle / flight director **OFF**; set **known pitch + thrust** (approx wings-level attitude / climb thrust below thrust-reduction, then reduce) `[VERIFY]`; keep flaps/gear as is | Level off, identify faulty source vs standby/backup, read Ch 10 |
| **Cabin Altitude** (excess cabin altitude) 🟥 | **Oxygen masks / crew comms ON**; if cabin altitude uncontrollable → **emergency descent** (Ch 9 immediate actions) | Pressurisation checklist, PA, MAYDAY, read Ch 2 |
| **Dual Engine Failure / Stall** 🟥 | **Fuel control switches CUTOFF then RUN** (relight attempt); establish **optimum relight airspeed**; RAM air / APU as available | Follow read-and-do, plan glide/driftdown, land/ditch, read Ch 7 |
| **Emergency Descent** (as required) 🟥 | Autothrottle idle, **thrust levers idle**, **speedbrake**, target **MMO/VMO** as structure allows; turn off track if needed; descend to **FL100 / MSA** | Masks/PA if depress., MAYDAY, read Ch 2/Ch 9 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake; **fuel control switches CUTOFF**; if evac ordered → **EVAC command**, cut engines/APU/electrics per flow | Cabin evac signal, ATC/RFF, read Ch 15 |

*Recall-item modelling 🟧: Magknight 787 simulates airspeed/ADIRU faults, engine relight and depressurisation to varying depth; the default 787 may abstract several — verify each triggers before training to it.*

## Ch 2 — Air systems, pressurisation, cabin altitude
### Cabin Altitude / rapid depressurisation + emergency descent 🟥
- **Recognition:** CABIN ALTITUDE alert, cabin-alt climb, ear/pressure cues.
- **Actions (recall, Ch 1):** masks ON, crew comms; if uncontrollable → emergency descent (idle, speedbrake, MMO/VMO as structure allows, off-track if required, level FL100/MSA); PA, MAYDAY. Then read-and-do the pressurisation checklist.
- **Notes / model:** Magknight models cabin-alt + descent; default 787 partial 🟧.
### Pack / bleed / cabin temperature
- **Actions:** per checklist — single-pack ops, altitude limit consideration, monitor cabin alt. Note the 787's **no-bleed (electric) architecture** — pack air is electrically driven, so a pack loss presents differently than on a bleed-air jet 🟧.

## Ch 3 — Anti-ice & rain
- **Wing / engine anti-ice fault or leak:** per checklist; anti-ice ON in icing, note performance/electrical penalty (electric wing anti-ice on the 787).
- **Notes / model 🟧:** anti-ice fault logic depth model-dependent.

## Ch 4 — Automatic flight (autoflight / autothrottle)
- **Autopilot / autothrottle disconnect or fault:** revert to manual thrust/hand-fly; for autothrottle fault set thrust manually and monitor.
- **A/P backdrive / FD fault:** hand-fly as needed, use remaining guidance. · **Notes/model 🟧:** varies by model.

## Ch 5 — Communications
- **Datalink lost / radio / audio failure:** select alternate radio/audio path, squawk 7600, follow lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select alternate XPDR, advise ATC. · **Notes/model 🟧:** basic on both models.

## Ch 6 — Electrical
### AC bus / generator loss
- **Recognition:** ELEC AC BUS / GEN OFF EICAS. · **Actions:** per checklist (load management, bus tie/APU gen), monitor remaining sources. The 787 has a **high-power electrical architecture (large gens, no engine bleed)** — electrical faults cascade to systems that on other types are pneumatic 🟧.
### Battery / emergency electrical config
- **Recognition:** major AC loss → battery/standby power, possible RAT-equivalent essential-bus provision. · **Actions:** minimum essential loads, APU start if available, land ASAP; expect degraded systems. · **Notes/model:** Magknight models bus losses; default abstracted 🟧.

## Ch 7 — Engines / APU
### Engine fire 🟥 (read-and-do after recall confirmation)
- **Recognition:** FIRE ENG L/R warning + EICAS, possible N1/EGT anomaly.
- **Actions:** Autothrottle disconnect · thrust lever IDLE · **fuel control switch CUTOFF** · **engine fire switch PULL** and rotate to **discharge bottle 1** (then bottle 2 if still burning after the interval) · secure, divert.
- **Notes / model:** Magknight models fire switch + bottles; default 787 fire logic simplified 🟧.
### Engine severe damage / separation 🟥
- **Actions:** thrust lever idle, **fuel control switch CUTOFF**, **engine fire switch PULL** (discharge if fire), do not attempt relight; secure, driftdown, divert.
### Engine failure / in-flight relight
- **Recognition:** N1/N2 rollback, EGT/FF drop, ENG FAIL, yaw.
- **Actions:** maintain control (rudder for asymmetry), confirm failed engine, secure per checklist, assess relight envelope (windmill/starter-assist), driftdown to one-engine-inop ceiling, consider EDTO diversion (Ch 13).
- **Notes / model:** single-engine handling + driftdown on Magknight; default approximates asymmetry 🟧.
### Aborted / abnormal start, ENG LIMIT EXCEED, ENG SURGE, APU limit
- **Actions:** for hot/hung start → **fuel control switch CUTOFF**, motor per limits; for surge reduce thrust on affected engine, avoid rapid lever movement; APU faults per checklist. · **Notes/model 🟧:** depth varies.

## Ch 8 — Fire protection (see also Ch 7 engine fire)
### APU fire 🟥
- **Recognition:** FIRE APU. · **Actions:** APU fire switch PULL, discharge bottle, APU shutdown. · **Notes/model:** Magknight modelled; default partial 🟧.
### Cargo fire / smoke
- **Recognition:** FIRE CARGO / DET FIRE CARGO. · **Actions:** confirm, **discharge cargo fire bottle**, land ASAP, isolate per checklist. · **Notes/model:** 🟧 may not be simulated on default 787 `[VERIFY]`.
### Smoke, fire or fumes 🟥 (immediate actions)
- **Recognition:** smoke/fumes or SMOKE alert. · **Actions:** don masks/goggles 100%, establish comms; isolate the suspected source (electrical load-shed per checklist), consider emergency descent / land ASAP. · **Notes/model:** smoke source logic limited 🟧.

## Ch 9 — Flight controls & stabilizer
### Runaway / stabilizer 🟥
- **Recognition:** STABILIZER alert / uncommanded pitch trim. · **Actions:** hold control column firmly, disengage autopilot, control pitch, use **stabilizer cutout** per procedure, trim manually. · **Notes/model:** Magknight models trim/stab faults 🟧; default limited.
### Flight-control mode degradation
- **Recognition:** EICAS F/CTL, reversion from normal to secondary/direct mode (the 787 is fly-by-wire — expect loss of some envelope protections on reversion). · **Actions:** fly manually as needed, respect reduced protection, plan a normal/managed approach with higher speed as required. · **Notes/model:** Magknight models FBW reversion to varying depth 🟧; default approximate.
### Flap / slat disagree or asymmetry; speedbrake fault
- **Actions:** per checklist; stop at safe config, compute higher approach speed & landing distance (Ch 13), longer runway.

## Ch 10 — Flight instruments & displays
### Airspeed Unreliable / ADIRU fault 🟥
- **Recognition:** IAS/ALT disagree, speed flags. · **Actions (recall, Ch 1):** AP/AT/FD OFF, **pitch + thrust** table `[VERIFY]`, identify faulty source vs standby, cross-check, then read-and-do. · **Notes/model:** Magknight models ADIRU/air-data faults 🟧 (default verify).
### Loss of all displays / display source fault
- **Recognition:** blank or reverted displays. · **Actions:** use standby/remaining displays, revert display source switching, hand-fly. · **Notes/model 🟧:** depth varies by model.

## Ch 11 — Flight management & navigation
- **FMC / nav fault, GPS / RNP loss:** revert to remaining sources; for RNP loss downgrade nav capability and advise ATC; hand-fly if autoflight lost. · **Notes/model 🟧:** varies by model.
- **IRS/ADIRU alignment or attitude fault:** use remaining/standby attitude source. 🟧

## Ch 12 — Hydraulics
- **Systems:** three hydraulic systems (Left / Center / Right), electric and engine-driven pumps plus the 787's electric-motor pumps. One-system loss is tolerable; multi-loss degrades flight controls, gear and braking.
- **Single-system loss:** EICAS HYD message · manage per checklist · note affected surfaces/brakes.
- **Double loss:** expect flight-control mode degradation, alternate/gravity gear, alternate braking — cross-ref Ch 9 / Ch 14.
- **Notes / model 🟧:** Magknight models the three systems and reversions to varying depth; default 787 hydraulic depth limited — some reversions may not occur `[VERIFY]`.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-config landing distance & VREF increments** (flap-limited, alternate/direct mode): compute via the sim/OFP performance tool for the flown config — do not guess; use a longer runway and higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inop ceiling:** on engine loss, follow driftdown to the OEI ceiling; for EDTO this feeds the en-route-alternate/critical-fuel check — **dispatch discipline, not sim-modelled** (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above MLW (~192,800 kg 🟧 `[VERIFY]`), use overweight-landing technique/speed, expect longer distance, inspection required.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Landing gear, brakes & tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **alternate (gravity/free-fall) extension**; do not force.
- **Alternate extension:** per checklist; expect no retract afterwards. · **Notes/model:** alternate extension modelled on Magknight 🟧 (default verify).
- **Antiskid / brake / brake-temp fault:** alternate/normal braking as available, modulate manually, longer rollout, avoid locked wheels.
- **Tyre failure / gear-up or partial:** brief evac, foam/RFF as available, minimise braking asymmetry.

## Ch 15 — Warning systems & evacuation
### Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire/ditching/major failure.
- **Actions (recall, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alert**; **fuel control switches CUTOFF**, shut down APU; if evacuation ordered → **EVAC command/signal**, cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure aircraft, cabin crew direct evacuation to usable exits (assess fire side/wind), account for all, move upwind.
- **Notes / model 🟧:** Magknight models shutdown/secure; the passenger evacuation itself is not simulated on either model — train the flow, not the visual.
### CONFIG / takeoff-config and warning-system faults
- **Actions:** resolve the offending config item before takeoff; a CONFIG warning on the roll → reject if before V1.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 787-9 (B789) — https://skybrary.aero/aircraft/b789
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Cabin Depressurisation (general) — https://skybrary.aero/articles/cabin-decompression
- EASA — TCDS EASA.IM.A.115 Boeing 787 — https://www.easa.europa.eu/en/document-library/type-certificates
- Magknight 787-9 (simulated-systems scope) — https://store.x-plane.org/787-9_p_1132.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered Boeing 787 non-normal/emergency reference re-expressed; Boeing philosophy (recall items + read-and-do) documented; recall/memory items 🟥 (airspeed unreliable, cabin altitude, dual engine failure, emergency descent, evacuation, engine/APU fire, stabilizer); figures `[VERIFY]`. No verbatim OEM/airline text. |
