<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  A21N Airbus A321neo family
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# A21N — Airbus A321neo family · QRH

**A21N / A320 family** · flown as ToLiss A321 (base + NEO expansion) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11, applicable across all three A21N sub-variants (neo/LR/XLR). **In a real non-normal the aircraft's ECAM/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Airbus philosophy: **fly first, ECAM does the ordered actions**, then read the QRH for anything the ECAM does not fully cover. PF flies + manages thrust/config; PM reads and actions the ECAM/QRH.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- **Model caveat 🟧:** the candidate model is study-level and drives real ECAM logic for most items **provided both the base package and the NEO expansion are installed** (Sim-Model §1) — a base-only install represents the wrong (classic-engine) type and its fuel/failure logic will not match an A21N. Confirm the build before training to any procedure below `[VERIFY]`.
- **Sub-variant caveat 🟧:** several Ch 6 (fuel) items are LR/XLR-specific (rear-centre-tank). Confirm the model's sub-variant selection matches the tail/mission before relying on those items (Sim-Model §2).
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / IAS disagree** 🟥 | Disconnect AP/FD/ATHR; set **known pitch + thrust** (approx wings-level ~10° pitch / climb thrust below thrust-reduction alt, then adjust) `[VERIFY]`; keep clean if able | Level off, troubleshoot ADR, use remaining/backup speed source, read Ch 10 |
| **Emergency descent (rapid depress.)** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speedbrake, target **MMO/VMO** as structure permits; turn off track if needed; descend to **FL100 / MSA** | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Thrust lever idle → **ENG MASTER off**; **ENG FIRE p/b** push; **discharge AGENT** per ECAM/time | Confirm fire out, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake; **shut engines/APU down**; if evac ordered → **EVAC command**, cut fuel/electrics per flow | Cabin evac signal, ATC/RFF, read Ch 14 |
| **Stall warning / stall** 🟥 | Nose down, reduce pitch; **TOGA** (unless near ground low-energy — pitch priority); wings level; recover, then clean up | Monitor speed, resume, read Ch 7 |

*Memory-item modelling 🟧: the candidate model simulates ADR faults, engine fire/discharge and depressurisation credibly when correctly installed (Sim-Model §1) — verify each triggers before training to it `[VERIFY]`.*

## Ch 2 — Engines / APU / power plant
### Engine fire 🟥
- **Recognition:** ENG FIRE warning + ECAM, possible N1/EGT anomaly.
- **Actions:** Thrust lever IDLE · ENG MASTER OFF · ENG FIRE p/b OUT · agent 1 (then agent 2 if still burning after the interval) · secure, divert.
- **Notes / model:** fire p/b + dual agents modelled; behaviour may differ slightly by installed engine type (LEAP-1A vs PW1100G) 🟧.

### Engine failure / flameout / in-flight relight
- **Recognition:** N1/N2 rollback, EGT/FF drop, ECAM ENG FAIL, yaw.
- **Actions:** Maintain control (rudder for asymmetry) · confirm failed engine · secure per ECAM · assess relight envelope (windmill/starter) · driftdown to one-engine-inop ceiling · consider EDTO diversion (Ch 13).
- **Notes / model:** single-engine handling and driftdown/OEI ceiling data are modelled; confirm figures against the sub-variant flown (LR/XLR driftdown differs from base neo at higher weight) 🟧.

### Abnormal start / hot start / thrust anomaly / engine cooldown
- **Recognition:** EGT over-temp on start, stagnant N2, or thrust not matching lever.
- **Actions:** Abort start (MASTER OFF), dry-motor per ECAM/limits, log; for thrust anomaly cross-check ATHR/thrust lock.
- **Notes / model 🟧:** the PW1100G engine option carries a documented dual-cooling cycle before start is available and after shutdown — treat an apparent "start lockout" as this cooling behaviour before assuming a fault; engine-type-dependent, confirm which engine the tail carries `[VERIFY]`.

## Ch 3 — Fire, smoke & fumes
### APU fire
- **Recognition:** APU FIRE warning/ECAM. · **Actions:** APU FIRE p/b, agent, APU MASTER OFF.
### Cargo smoke
- **Recognition:** SMOKE CARGO warning. · **Actions:** confirm, **discharge cargo agent**, land ASAP, isolate per ECAM.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, ECAM SMOKE. · **Actions:** masks/goggles, ON 100%, isolate suspected source (elec load-shed), consider emergency descent/land ASAP. · **Notes/model:** smoke-source logic depth 🟧 `[VERIFY]`.

## Ch 4 — Electrical
### Generator / IDG loss
- **Recognition:** ELEC GEN FAULT ECAM, bus transfer. · **Actions:** per ECAM (GEN off/reset, manage load), monitor remaining sources.
### Emergency electrical config / RAT
- **Recognition:** loss of AC busses → RAT auto-deploy, EMER config. · **Actions:** confirm essential busses powered, APU start if available, land ASAP; expect degraded systems/law.
### Battery-only
- **Recognition:** all gens lost, batteries only. · **Actions:** minimum essential loads, APU/RAT priority, expedite landing.

## Ch 5 — Hydraulics
- **Systems:** Green / Yellow / (Blue, config-dependent) circuits per the type's hydraulic architecture. Single-system loss is tolerable; multi-loss degrades flight controls, gear and braking.
- **Single-system loss:** ECAM HYD fault · manage per ECAM · note affected surfaces/brakes.
- **Double/loss:** expect **flight-control law degradation**, alternate/gravity gear, alternate braking (accumulator) — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** hydraulic reversions modelled; alternate-braking pressure is capped in the model per its own limits — verify against current build `[VERIFY]`.

## Ch 6 — Fuel
### General (all variants)
- **Imbalance:** ECAM FUEL imbalance · open X-FEED, balance per procedure, identify cause (leak vs asymmetric burn).
- **Leak:** if leak suspected, **do not** open crossfeed blindly; isolate per ECAM, reassess fuel/range and divert.
- **Low level / feed / transfer fault:** manage transfer pumps, gravity feed if required; recompute reserves (Dispatch §3/§5).

### LR/XLR rear-centre-tank (RCT) handling 🟥 `[VERIFY]`
- **Normal behaviour:** on the LR/XLR fuel-tank configuration, additional fuel carried in the rear-centre tank group transfers automatically into the main system on the aircraft's own schedule; it is not manually sequenced in normal ops (Checklist cruise item).
- **Transfer fault:** ECAM will annunciate a stuck/partial centre-tank transfer or pump fault. **Do not** attempt to force a transfer ahead of ECAM guidance — follow the ECAM fuel page actions, and recompute usable fuel/range assuming the RCT quantity may be **unusable** for the remainder of the sector.
- **CG implication:** an un-transferred RCT quantity shifts the fuel-driven CG aft-heavy pattern used for planning; cross-check trim/CG if a transfer fault persists into descent.
- **EDTO/ETOPS implication 🟥:** for an LR/XLR sector dispatched close to the 120-min EDTO rule-time boundary (Dispatch §5), an RCT transfer fault materially changes the critical-fuel picture — treat as a **divert-consideration trigger**, not just a fuel-page nuisance, and reassess the en-route-alternate adequacy immediately.
- **Notes / model 🟧:** RCT logic is part of the NEO expansion's LR/XLR fuel-tank configuration (Sim-Model §1–2); confirm the installed build actually models a transfer-fault case before relying on it for training `[VERIFY]`.

## Ch 7 — Flight controls & high-lift
### Control-law degradation (alternate / direct law)
- **Recognition:** ECAM F/CTL, "ALTN LAW"/"DIRECT LAW", loss of protections. · **Actions:** fly manually as needed, respect that hard protections may be lost, plan a flapped/managed approach (higher VAPP), expect direct law with gear down.
### Flap / slat jam
- **Recognition:** ECAM F/CTL FLAPS/SLATS LOCKED. · **Actions:** stop at safe config, compute higher approach speed & landing distance (Ch 13), longer runway.
### Speedbrake / spoiler fault; trim runaway
- **Actions:** per ECAM; for uncommanded pitch trim, use manual trim/disconnect autotrim path per procedure. 🟧

## Ch 8 — Landing gear, brakes & tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **gravity (free-fall) extension**; do not force.
- **Alternate / gravity extension:** per ECAM/QRH; expect no retract afterwards.
- **Brake / anti-skid fault:** alternate braking (accumulator/ANTI SKID off — modulate manually), longer rollout, avoid locked wheels.
- **Tyre failure / gear-up or partial:** brief evac, foam/RFF as available, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain
### Rapid depressurisation + emergency descent 🟥
- **Recognition:** CABIN ALT warning, ears/climb of cabin alt, EXCESS CAB ALT. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle, speedbrake, MMO/VMO as structure allows, off-track if required, level **FL100/MSA**; PA, MAYDAY. Then ECAM/QRH for pressurisation config.
### Pack / bleed fault
- **Actions:** per ECAM, single-pack ops, consider altitude limit; monitor cabin alt.
### Anti-ice
- **Actions:** wing/engine anti-ice ON in icing, note performance/bleed penalty.

## Ch 10 — Navigation, instruments & autoflight
### Unreliable airspeed / ADR fault 🟥
- **Recognition:** IAS/ALT disagree, speed flags, ADR DISAGREE. · **Actions (memory, Ch 1):** AP/FD/ATHR OFF, **pitch + thrust** table `[VERIFY]`, identify faulty ADR, use remaining/backup source, then troubleshoot.
### IRS/ADIRS fault, display loss, AP/FD/ATHR fault, GPS/RNP loss
- **Actions:** revert to remaining sources/displays; for RNP loss downgrade nav and advise ATC; hand-fly if autoflight lost.

## Ch 11 — Communications
- **Radio / audio failure:** select alternate radio/audio path, squawk 7600, follow lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select alternate XPDR, advise ATC.

## Ch 12 — Miscellaneous
- **Door / slide fault:** ECAM DOORS, confirm before pressurising; disarm slides before any door open.
- **Windshield / windscreen heat, water/waste, bird strike, volcanic ash:** stabilise, assess damage/engine effect, for ash exit the cloud (descend/turn), reduce thrust changes, land at nearest suitable.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-config landing distance & VAPP increments** (flap/slat-less, alternate/direct law): compute via the sim/OFP performance tool for the flown config — do not guess; use a longer runway and higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inop ceiling:** on engine loss, follow driftdown to the OEI ceiling; **LR/XLR driftdown figures differ from the base neo** at the sub-variant's higher structural/operating weight (Intro §5) — for EDTO this feeds the en-route-alternate/critical-fuel check — **dispatch discipline, not sim-modelled** (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above MLW, use overweight-landing technique/speed, expect longer distance, inspection required. **MLW is variant-dependent (neo/LR lower, XLR higher due to higher MTOW)** — confirm the correct figure for the tail before assuming an overweight-landing case `[VERIFY]`.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire/ditching/major failure.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alert**; shut down **engines and APU**; if evacuation ordered → **EVAC command/signal**, cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure aircraft, cabin crew direct evacuation to usable exits (assess fire side/wind), account for all, move upwind.
- **Notes / model 🟧:** shutdown/secure flow is modelled; the passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A321 (A321) — https://skybrary.aero/aircraft/a321
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- EASA — TCDS EASA.A.064 Airbus A318/A319/A320/A321 — https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25/easaa064-airbus-a318-a319-a320-and-a321
- Airbus — A321XLR type page — https://www.aircraft.airbus.com/en/aircraft/a320-the-most-successful-aircraft-family-ever/a321xlr
- X-Plane.Org Store — A321-NEO add-on to the ToLiss Airbus A321 (simulated-systems scope) — https://store.x-plane.org/A321-NEO-ADD-ON-to-the-ToLiss-Airbus-A321_p_1351.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered A320-family FBW abnormal/emergency reference re-expressed; memory items 🟥 (unreliable airspeed, emergency descent, engine fire, evacuation, stall); LR/XLR rear-centre-tank fuel handling added as Ch 6 sub-section with EDTO cross-ref; figures `[VERIFY]` |
