<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  A339 Airbus A330-900neo
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# A339 — Airbus A330-900neo · QRH

**A339 / A330 family** · flown as ToLiss A339 (lead) / JARDesign JD330 (fallback) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's ECAM/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Airbus philosophy: **fly first, ECAM does the ordered actions**, then read the QRH for anything the ECAM does not fully cover. PF flies + manages thrust/config; PM reads and actions the ECAM/QRH.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- **Model caveat 🟧:** ToLiss A339 is study-level and drives real ECAM logic for most items; JARDesign JD330 is mid-fidelity and may **not trigger or fully resolve** several procedures below. Where a step depends on failure logic the model may not simulate, it is flagged 🟧. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / IAS disagree** 🟥 | Disconnect AP/FD/ATHR; set **known pitch + thrust** (approx wings-level ~10° pitch / CLB thrust below THR RED, then reduce) `[VERIFY]`; keep clean if able | Level off, troubleshoot ADR, use backup speed/BUSS if available, read Ch 10 |
| **Emergency descent (rapid depress.)** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speedbrake, target **MMO/VMO** as structure permits; turn off track if needed; descend to **FL100 / MSA** | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Thrust lever idle → **ENG MASTER off**; **ENG FIRE p/b** push; **discharge AGENT** per ECAM/time | Confirm fire out, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake; **shut engines/APU down**; if evac ordered → **EVAC command**, cut fuel/electrics per flow | Cabin evac signal, ATC/RFF, read Ch 14 |
| **Stall warning / stall** 🟥 | Nose down, reduce pitch; **TOGA** (unless near ground low-energy — pitch priority); wings level; recover, then clean up | Monitor speed, resume, read Ch 7 |

*Memory-item modelling 🟧: ToLiss simulates ADR faults, engine fire/discharge and depressurisation credibly; JD330 may abstract several — verify each triggers before training to it.*

## Ch 2 — Engines / APU / power plant
### Engine fire 🟥
- **Recognition:** ENG FIRE warning + ECAM, possible N1/EGT anomaly.
- **Actions:** Thrust lever IDLE · ENG MASTER OFF · ENG FIRE p/b OUT · agent 1 (then agent 2 if still burning after the interval) · secure, divert.
- **Notes / model:** ToLiss models fire p/b + dual agents; JD330 fire logic simplified 🟧.

### Engine failure / flameout / in-flight relight
- **Recognition:** N1/N2 rollback, EGT/FF drop, ECAM ENG FAIL, yaw.
- **Actions:** Maintain control (rudder for asymmetry) · confirm failed engine · secure per ECAM · assess relight envelope (windmill/starter) · driftdown to one-engine-inop ceiling · consider EDTO diversion (Ch 13).
- **Notes / model:** single-engine handling + driftdown modelled on ToLiss; JD330 approximates asymmetry 🟧.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** EGT over-temp on start, stagnant N2, or thrust not matching lever.
- **Actions:** Abort start (MASTER OFF), dry-motor per ECAM/limits, log; for thrust anomaly cross-check ATHR/thrust lock.
- **Notes / model:** start abuse logic present on ToLiss 🟧; limited on JD330.

## Ch 3 — Fire, smoke & fumes
### APU fire
- **Recognition:** APU FIRE warning/ECAM. · **Actions:** APU FIRE p/b, agent, APU MASTER OFF. · **Notes/model:** ToLiss modelled; JD330 partial 🟧.
### Cargo smoke
- **Recognition:** SMOKE CARGO warning. · **Actions:** confirm, **discharge cargo agent**, land ASAP, isolate per ECAM. · **Notes/model:** 🟧 may not be simulated on JD330 `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, ECAM SMOKE. · **Actions:** masks/goggles, ON 100%, isolate suspected source (elec load-shed), consider emergency descent/land ASAP. · **Notes/model:** smoke source logic limited 🟧.

## Ch 4 — Electrical
### Generator / IDG loss
- **Recognition:** ELEC GEN FAULT ECAM, bus transfer. · **Actions:** per ECAM (GEN off/reset, manage load), monitor remaining sources.
### Emergency electrical config / RAT
- **Recognition:** loss of AC busses → RAT auto-deploy, EMER config. · **Actions:** confirm essential busses powered, APU start if available, land ASAP; expect degraded systems/law. · **Notes/model:** RAT + emer-elec well modelled on ToLiss; JD330 abstracted 🟧.
### Battery-only
- **Recognition:** all gens lost, batteries only. · **Actions:** minimum essential loads, APU/RAT priority, expedite landing.

## Ch 5 — Hydraulics
- **Systems:** three circuits (Green / Blue / Yellow). One-system loss is tolerable; multi-loss degrades flight controls, gear and braking.
- **Single-system loss:** ECAM HYD fault · manage per ECAM · note affected surfaces/brakes.
- **Double/loss of two:** expect **flight-control law degradation**, alternate/gravity gear, alternate braking (accumulator) — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** ToLiss models the three circuits and reversions; JD330 hydraulic depth limited — some reversions may not occur `[VERIFY]`.

## Ch 6 — Fuel
- **Imbalance:** ECAM FUEL imbalance · open X-FEED, balance per procedure, identify cause (leak vs asymmetric burn).
- **Leak:** if leak suspected, **do not** open crossfeed blindly; isolate per ECAM, reassess fuel/range and divert.
- **Low level / feed / transfer fault:** manage transfer pumps, gravity feed if required; recompute reserves (Dispatch §3/§5).
- **Notes / model 🟧:** crossfeed/transfer modelled on ToLiss; JD330 fuel logic simplified.

## Ch 7 — Flight controls & high-lift
### Control-law degradation (alternate / direct law)
- **Recognition:** ECAM F/CTL, "ALTN LAW"/"DIRECT LAW", loss of protections. · **Actions:** fly manually as needed, respect that hard protections may be lost, plan a flapped/managed approach (higher VAPP), expect direct law with gear down. · **Notes/model:** ToLiss models law reversion + protections faithfully; JD330 approximate 🟧.
### Flap / slat jam
- **Recognition:** ECAM F/CTL FLAPS/SLATS LOCKED. · **Actions:** stop at safe config, compute higher approach speed & landing distance (Ch 13), longer runway. 
### Speedbrake / spoiler fault; trim runaway
- **Actions:** per ECAM; for uncommanded pitch trim, use manual trim/disconnect autotrim path per procedure. 🟧

## Ch 8 — Landing gear, brakes & tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **gravity (free-fall) extension**; do not force. 
- **Alternate / gravity extension:** per ECAM/QRH; expect no retract afterwards. · **Notes/model:** gravity extension modelled on ToLiss 🟧 (JD330 verify).
- **Brake / anti-skid fault:** alternate braking (accumulator/ANTI SKID off — modulate manually), longer rollout, avoid locked wheels.
- **Tyre failure / gear-up or partial:** brief evac, foam/RFF as available, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain
### Rapid depressurisation + emergency descent 🟥
- **Recognition:** CABIN ALT warning, ears/climb of cabin alt, EXCESS CAB ALT. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle, speedbrake, MMO/VMO as structure allows, off-track if required, level **FL100/MSA**; PA, MAYDAY. Then ECAM/QRH for pressurisation config. · **Notes/model:** ToLiss models cabin-alt + emer descent; JD330 partial 🟧.
### Pack / bleed fault
- **Actions:** per ECAM, single-pack ops, consider altitude limit; monitor cabin alt.
### Anti-ice
- **Actions:** wing/engine anti-ice ON in icing, note performance/bleed penalty.

## Ch 10 — Navigation, instruments & autoflight
### Unreliable airspeed / ADR fault 🟥
- **Recognition:** IAS/ALT disagree, speed flags, ADR DISAGREE. · **Actions (memory, Ch 1):** AP/FD/ATHR OFF, **pitch + thrust** table `[VERIFY]`, identify faulty ADR, use remaining/backup (BUSS if fitted), then troubleshoot. · **Notes/model:** ToLiss models ADR faults + BUSS logic 🟧 (JD330 verify).
### IRS/ADIRS fault, display loss, AP/FD/ATHR fault, GPS/RNP loss
- **Actions:** revert to remaining sources/displays; for RNP loss downgrade nav and advise ATC; hand-fly if autoflight lost. · **Notes/model 🟧:** depth varies by model.

## Ch 11 — Communications
- **Radio / audio failure:** select alternate radio/audio path, squawk 7600, follow lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select alternate XPDR, advise ATC. · **Notes/model 🟧:** basic on both models.

## Ch 12 — Miscellaneous
- **Door / slide fault:** ECAM DOORS, confirm before pressurising; disarm slides before any door open.
- **Windshield / windscreen heat, water/waste, bird strike, volcanic ash:** stabilise, assess damage/engine effect, for ash exit the cloud (descend/turn), reduce thrust changes, land at nearest suitable.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-config landing distance & VAPP increments** (flap/slat-less, alternate/direct law): compute via the sim/OFP performance tool for the flown config — do not guess; use a longer runway and higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inop ceiling:** on engine loss, follow driftdown to the OEI ceiling; for EDTO this feeds the en-route-alternate/critical-fuel check — **dispatch discipline, not sim-modelled** (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above MLW (191,000 kg), use overweight-landing technique/speed, expect longer distance, inspection required. `[VERIFY]`
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire/ditching/major failure. 
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alert**; shut down **engines and APU**; if evacuation ordered → **EVAC command/signal**, cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY. 
- **Crew coordination:** flight crew secure aircraft, cabin crew direct evacuation to usable exits (assess fire side/wind), account for all, move upwind.
- **Notes / model 🟧:** ToLiss models shutdown/secure; the passenger evacuation itself is not simulated on either model — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A330neo (A339) — https://skybrary.aero/aircraft/a339
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- EASA — TCDS EASA.A.004 Airbus A330 — https://www.easa.europa.eu/en/downloads/7518/en
- ToLiss — A330-900 product page (simulated-systems scope) — https://store.x-plane.org/Airbus-A330-900-neo-by-ToLiss_p_1952.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered A330 FBW abnormal/emergency reference re-expressed; memory items 🟥 (unreliable airspeed, emergency descent, engine fire, evacuation, stall); figures `[VERIFY]` |
