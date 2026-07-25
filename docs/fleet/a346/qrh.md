<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  A346 Airbus A340-600
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# A346 — Airbus A340-600 · QRH

**A346 / A340 family — separate A340 type rating** · flown as ToLiss A346 (sole candidate) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's ECAM/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror ATA-style grouping. The A340 is a **separate type rating** from the A330/A350 — although the FBW philosophy (ECAM-driven, memory items first, then read-and-do) is shared Airbus family-wide, **four-engine specifics** (asymmetric thrust with an outboard engine loss, four-source electrical/hydraulic redundancy, driftdown ceiling) are type-specific and must not be assumed from twin-engine Airbus experience. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Airbus philosophy: **fly first, ECAM does the ordered actions**, then read the QRH for anything the ECAM does not fully cover. PF flies + manages thrust/config; PM reads and actions the ECAM/QRH. On recognising a failure: reset the master caution/warning, announce the failure title, then let the ECAM drive the actions.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- **Four-engine consideration 🟩:** with four engines, a single engine failure is a lower-consequence event than on a twin — three engines remain and MCT/continued flight is normally straightforward. The **outboard-engine** case is the one that demands the most rudder/lateral trim due to its greater distance from the centreline; treat inboard vs outboard engine loss as different handling cases, not identical.
- **Model caveat 🟧:** the approved candidate (ToLiss A346) is a study-level product with fault-injection and ATA-chapter failure logic; confirm each procedure below actually triggers/resolves on the flown build before relying on it for training `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / ADR disagree** 🟥 | Disconnect AP/FD/ATHR; set a **known pitch + thrust** reference (if before thrust reduction, a higher pitch/thrust combination; if after thrust reduction, a lower climb-thrust pitch combination scaled to altitude) `[VERIFY]`; identify and isolate the faulty ADR(s), keeping at least one ADR on to retain stall-warning protection | Level off, troubleshoot, use remaining/standby instruments, read Ch 10 |
| **Emergency descent (rapid depress.)** 🟥 | Crew oxygen masks ON, set diluter to the appropriate position, establish crew comms; **initiate descent** — thrust idle (or confirm idle if autothrust engaged), speedbrake full, target a safe descent speed up to VMO/MMO as structure permits, turn off track if needed, descend toward **FL100 / MSA (whichever higher)** | Cabin signs on, PA, squawk/MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Thrust lever IDLE → **ENG MASTER off**; **ENG FIRE p/b** push; **discharge fire agent** per ECAM timing; if a second agent is required after the interval, discharge it | Confirm fire out, secure, divert; read Ch 2/3 |
| **Windshear (encountered)** 🟥 | **Thrust levers TOGA**; follow SRS/flight-director pitch guidance (full aft stick if demanded); do **not** change configuration (flaps/slats/gear) until clear of the shear; monitor flight path/speed closely and recover smoothly once clear | Notify ATC, review conditions, read Ch 9/13 |
| **EGPWS "pull up" / terrain alert** 🟥 | AP off if engaged; **pitch to maximum climb attitude** (full aft stick if demanded); **thrust TOGA**; confirm speedbrake retracted; wings level or adjust bank only as needed for terrain avoidance | Continue climb until alert clears and flight path is confirmed safe, then resume |
| **TCAS resolution advisory** 🟥 | Disconnect AP; **respond promptly** to the RA target vertical speed, adjusting pitch/thrust smoothly; do not maneuver on a traffic advisory alone; notify ATC | Resume normal navigation once "clear of conflict," read Ch 10/11 |
| **Loss of braking** 🟥 | If autobrake selected, press brake pedals firmly (overrides autobrake); if still no braking, select anti-skid OFF (reverts to alternate braking) and press pedals with care (alternate mode is more sensitive); max reverse thrust; if still no braking, apply parking brake in short successive applications | Vacate/stop as able, notify ATC/ops, inspect brakes/tyres after stop |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut down all engines and APU**; if evacuation ordered → **EVAC command/signal**, cut fuel/non-essential electrics per secure flow | Cabin evac signal, ATC/RFF, read Ch 14 |
| **Stall warning / stall** 🟥 | Nose down, reduce angle of attack; **TOGA** (unless near ground in a low-energy state — prioritise pitch/AoA reduction first); wings level; recover, then clean up | Monitor speed, resume, read Ch 7 |

*Memory-item modelling 🟧: the approved candidate models ADR faults, engine fire/discharge, depressurisation, windshear/EGPWS/TCAS cueing and stall warning to study-level depth — verify each triggers before training to it `[VERIFY]`.*

## Ch 2 — Engines / APU / power plant
### Engine fire 🟥
- **Recognition:** ENG FIRE warning + ECAM, possible N1/EGT anomaly on the affected engine.
- **Actions:** Thrust lever IDLE · ENG MASTER OFF · ENG FIRE p/b OUT · discharge agent 1 (then agent 2 if still burning after the interval) · secure, consider diversion.
- **Notes / four-engine:** losing one of four engines to fire leaves three for continued flight, but rudder/lateral trim demand is greater for an **outboard** engine than an inboard one — brief which engine before assuming a "standard" single-engine response. 🟧

### Engine failure / flameout / in-flight relight (no damage vs with damage)
- **Recognition:** N1/N2 rollback, EGT/FF drop, ECAM ENG FAIL, yaw toward the failed side (more pronounced for an outboard engine).
- **Actions:** Maintain control (rudder for asymmetry, larger input for outboard-engine loss) · confirm the failed engine · thrust levers on remaining engines to MCT · run ECAM actions · assess relight envelope if flame-out only (no damage) · for failure **with damage**, follow the damage-specific ECAM branch (do not attempt relight) · driftdown to the appropriate one-engine-inoperative (or, in a rarer case, two-engine-inoperative) ceiling · consider EDTO adequate-aerodrome diversion (Ch 13).
- **Notes / four-engine:** unlike a twin, a **single**-engine failure on a quad is a comparatively low-workload event (three engines remain, MCT is normally sufficient to continue); the QRH distinguishes failure **with** damage (more conservative, no relight attempt, closer inspection needed) from **without** damage (relight may be assessed). A **second** engine failure on the same flight, while rare, is far more consequential and should trigger a more urgent diversion posture. 🟧

### Abnormal start / hot start / thrust anomaly
- **Recognition:** EGT over-temp on start, stagnant N2, or thrust not matching lever, on any of the four engines.
- **Actions:** Abort start (MASTER OFF), dry-motor per ECAM/limits, log; for thrust anomaly cross-check ATHR/thrust lock; note that four engines multiply the start-sequence permutations to monitor.
- **Notes / model:** start-abuse logic present on the study-level candidate 🟧 `[VERIFY]`.

## Ch 3 — Fire, smoke & fumes
### APU fire
- **Recognition:** APU FIRE warning/ECAM. · **Actions:** APU FIRE p/b, agent, APU MASTER OFF.
### Cargo smoke
- **Recognition:** SMOKE CARGO warning. · **Actions:** confirm, **discharge cargo agent**, land ASAP, isolate ventilation per ECAM.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, ECAM SMOKE. · **Actions:** masks/goggles, 100% oxygen, isolate the suspected source (electrical load-shed), consider emergency descent/land ASAP. · **Notes/model:** smoke-source logic depth is model-dependent 🟧.

## Ch 4 — Electrical
### Generator loss (single)
- **Recognition:** ELEC GEN FAULT ECAM, automatic bus transfer to a remaining source. · **Actions:** per ECAM (isolate/reset the affected generator, manage load); with **four** generator sources the type tolerates a single-source loss with more margin than a twin. 🟩
### Electrical emergency configuration (multiple-source loss)
- **Recognition:** progressive loss of AC buses beyond a single source, ECAM emergency-electrical-configuration warning, **land ASAP**. · **Actions:** confirm which essential buses remain powered, start the APU if available and within its envelope, expect loss of autopilot/autothrust and degraded systems/flight-control law, prioritise essential comms/instruments, brief the crew task-share change, plan the nearest suitable landing. · **Notes/model:** because the type has four independent generators, reaching a full emergency-electrical state requires losing **multiple** sources simultaneously — a materially rarer scenario than on a twin, but the consequence (loss of AP/ATHR, degraded law) is broadly similar once reached. 🟧
### Battery-only
- **Recognition:** all generator sources lost, batteries only. · **Actions:** minimum essential loads, APU/ram-air-turbine priority if fitted, expedite landing.

## Ch 5 — Hydraulics
- **Systems:** multiple independent hydraulic circuits feeding flight controls, gear and brakes. Single-circuit loss is tolerable; loss of two circuits together degrades flight-control law, gear extension and braking.
- **Single-system loss:** ECAM HYD fault · manage per ECAM · note affected surfaces/brakes.
- **Dual-circuit loss (e.g. one circuit's reservoir low level plus a pump-pressure fault on another):** **land ASAP**; expect flight-control law degradation, use the alternate/gravity gear-extension method, expect alternate braking (reduced/accumulator-limited) — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** the study-level candidate models the independent circuits and their reversions; verify each reversion actually triggers `[VERIFY]`.

## Ch 6 — Fuel
- **Imbalance:** with four engine-feed tanks plus centre/trim tank transfers, an ECAM fuel-imbalance advisory is analysed against the fuel page — **open cross-feed as needed and balance per procedure**, and check the sum of remaining fuel against the fuel-on-board-at-departure figure; if the sum is decreasing faster than expected, **suspect a leak** rather than a transfer/imbalance issue.
- **Leak:** if a leak is suspected, **do not** open cross-feed blindly; isolate the affected tank/engine per ECAM, reassess fuel/range, and divert.
- **Low level / feed / transfer fault:** manage transfer pumps, use gravity feed if required; recompute reserves (Dispatch §3/§7).
- **Notes / model 🟧:** the four-tank/centre-transfer logic is more complex than a twin's fuel system — confirm the model's transfer/cross-feed logic before relying on it in training `[VERIFY]`.

## Ch 7 — Flight controls & high-lift
### Control-law degradation (alternate / direct law)
- **Recognition:** ECAM F/CTL, "ALTN LAW"/"DIRECT LAW", loss of protections. · **Actions:** fly manually as needed, respect that hard protections may be lost, plan a flapped/managed approach (higher VAPP), expect direct law with gear down.
### Flap / slat jam
- **Recognition:** ECAM F/CTL FLAPS/SLATS LOCKED. · **Actions:** stop at safe configuration, compute higher approach speed & landing distance (Ch 13), use a longer runway.
### Speedbrake / spoiler fault; trim runaway
- **Actions:** per ECAM; for uncommanded pitch trim, use manual trim or disconnect the autotrim path per procedure. 🟧

## Ch 8 — Landing gear, brakes & tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **gravity (free-fall) extension**; do not force.
- **Alternate / gravity extension:** per ECAM/QRH; expect no retraction afterward.
- **Brake / anti-skid fault:** alternate braking (accumulator/anti-skid off — modulate manually, more sensitive than normal mode), longer rollout, avoid locked wheels; see Ch 1 loss-of-braking memory item.
- **Tyre failure / gear-up or partial:** brief evac, foam/RFF as available, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain
### Rapid depressurisation + emergency descent 🟥
- **Recognition:** CABIN ALT warning, ears/climb of cabin altitude, EXCESS CAB ALT. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle (or confirm idle if autothrust engaged), speedbrake full, target speed up to VMO/MMO as structure allows, off-track if required, level at **FL100/MSA whichever higher**; PA, MAYDAY. Then ECAM/QRH for pressurisation configuration.
### Pack / bleed fault
- **Actions:** per ECAM, single/reduced-pack ops, consider an altitude limit; monitor cabin altitude.
### Anti-ice
- **Actions:** wing/engine anti-ice ON in icing conditions, note the associated performance/bleed penalty across four engines.

## Ch 10 — Navigation, instruments & autoflight
### Unreliable airspeed / ADR fault 🟥
- **Recognition:** IAS/ALT disagree, speed flags, ADR DISAGREE, possible spurious stall/overspeed warnings. · **Actions (memory, Ch 1):** AP/FD/ATHR OFF, set known pitch + thrust reference `[VERIFY]`, identify and isolate the faulty ADR(s) while keeping at least one ADR on for stall protection, then troubleshoot using remaining/standby instruments and, if altitude is also affected, GPS altitude and radio altimeter as cross-check aids.
### IRS/ADIRS fault, display loss, AP/FD/ATHR fault, GPS/RNP loss
- **Actions:** revert to remaining sources/displays; for RNP loss downgrade navigation and advise ATC; hand-fly if autoflight is lost. · **Notes/model 🟧:** depth varies by build.

## Ch 11 — Communications
- **Radio / audio failure:** select alternate radio/audio path, squawk 7600, follow the lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select alternate transponder, advise ATC.

## Ch 12 — Miscellaneous
- **Door / slide fault:** ECAM DOORS, confirm before pressurising; disarm slides before any door is opened.
- **Windshield / windscreen heat, water/waste, bird strike, volcanic ash:** stabilise, assess damage/engine effect (note four engines to cross-check for ash/bird-strike damage rather than one or two), for ash exit the cloud (descend/turn), reduce thrust changes, land at the nearest suitable aerodrome.
- **Unlawful interference:** squawk 7500, follow the security procedure.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-config landing distance & VAPP increments** (flap/slat-less, alternate/direct law): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and higher approach speed, and account for the **longer landing roll typical of the -600's higher approach speeds and mass** `[VERIFY]`.
- **Driftdown / engine-out ceiling:** on a single-engine loss, follow driftdown to the appropriate three-engine ceiling; a second engine loss (rare) demands a materially lower two-engine ceiling and a more urgent diversion posture. For EDTO this feeds the adequate-aerodrome/critical-fuel check — **dispatch discipline, not sim-modelled** (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above MLW (~265,000 kg), use the overweight-landing technique/speed, expect a longer distance, and post-landing inspection is required. `[VERIFY]`
- **Tail-strike awareness 🟥:** at 75.36 m, the -600 is the longest airframe in the fleet — over-rotation on takeoff or an aggressive flare on landing carries a materially higher tail-strike risk than the shorter twin-aisle types. Brief pitch-rate discipline specifically for this type; do not transfer A339/A359 rotation habits directly.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire/ditching/major failure.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alert**; shut down all **engines and APU**; if evacuation ordered → **EVAC command/signal**, cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft, cabin crew direct evacuation to usable exits (assess fire side/wind), account for all, move upwind. With a **368-seat** configuration and multiple exits along a long fuselage, brief exit-usability assessment across the full cabin length.
- **Notes / model 🟧:** shutdown/secure sequencing is modelled on the study-level candidate; the passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A340-600 (A346) — https://skybrary.aero/aircraft/a346
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Windshear (general) — https://skybrary.aero/articles/windshear
- SKYbrary — TCAS (general) — https://skybrary.aero/articles/traffic-alert-and-collision-avoidance-system-tcas
- EASA — TCDS EASA.A.015 Airbus A340 — https://www.easa.europa.eu/en/document-library/type-certificates
- ToLiss — A340-600 product page (simulated-systems scope, developer site) — https://toliss.com/pages/a340-600

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered four-engine Airbus FBW abnormal/emergency reference re-expressed; memory items 🟥 (unreliable airspeed, emergency descent, engine fire, windshear, EGPWS, TCAS RA, loss of braking, evacuation, stall); four-engine specifics (outboard vs inboard engine loss, four-source electrical/hydraulic redundancy, driftdown ceiling) and long-fuselage tail-strike awareness called out; figures `[VERIFY]`. |
