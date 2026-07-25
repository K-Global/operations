<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  E35L Embraer Legacy 650 (EMB-135BJ)
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# E35L — Embraer Legacy 650 · QRH

**E35L / EMB-135BJ Legacy 650** · flown as X-Crafts ERJ Family (Legacy 650 variant) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's own AFM/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror ATA-style grouping. **This is a genuine twin** — an engine-out event is a controllability/driftdown/diversion case, not a forced-landing case; contrast the PC12 QRH in the same Executive group, which is a single-engine document by necessity. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Philosophy: **fly the aircraft first, then work the CAS/crew-alerting page**, then consult this QRH for anything the CAS page doesn't fully resolve. PF flies + manages thrust/configuration; PM reads and actions the CAS/QRH.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- **Model caveat 🟧:** the X-Crafts ERJ Family's failure/CAS depth has not been independently verified for this pack (Sim-Model §3). Where a step depends on failure logic the model may not simulate, it is flagged 🟧. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Engine failure / severe damage in flight** 🟥 | Maintain control (rudder for asymmetry); identify and confirm the failed engine; thrust lever idle → shut down per CAS/flow if damage/fire indicated | Driftdown to one-engine-inoperative ceiling, assess divert field, read Ch 2/13 |
| **Engine fire** 🟥 | Thrust lever idle → engine shutdown; fire-suppression discharge per CAS/flow if fitted and confirmed | Confirm fire out, secure, divert; read Ch 2/3 |
| **Rapid decompression / emergency descent** 🟥 | Oxygen masks ON, establish crew comms; initiate descent — thrust idle, speedbrake as fitted, descend toward **FL100 / MSA** | Signs on, PA, MAYDAY, read Ch 9 |
| **Unreliable airspeed / air-data disagree** 🟥 | Disconnect AP/FD/autothrottle; set known pitch + thrust `[VERIFY]`; keep configuration clean if able | Level off, troubleshoot air-data source, read Ch 10 |
| **Stall warning / stall** 🟥 | Reduce angle of attack, add thrust, wings level; recover, then clean up on schedule | Monitor speed, resume flight path, read Ch 7 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; shut engines/APU down; if evacuation ordered → command evacuation, cut fuel/non-essential electrics per secure flow | Direct occupants clear, RFF/ATC MAYDAY, read Ch 14 |

*Memory-item modelling 🟧: confirm each item above actually triggers and resolves on the flown X-Crafts build before training to it — depth not independently verified for this pack (Sim-Model §3).*

## Ch 2 — Engines / APU / power plant
### Engine fire 🟥
- **Recognition:** fire warning + CAS message, possible parameter anomaly (ITT/N1/N2).
- **Actions:** thrust lever idle · engine shutdown · fire-suppression discharge per CAS/flow · secure, divert.
- **Notes / model:** fire-warning and discharge logic depth not confirmed on the flown build 🟧.

### Engine failure / flameout / in-flight relight
- **Recognition:** N1/N2 rollback, ITT/fuel-flow drop, CAS engine-fail indication, yaw.
- **Actions:** maintain control (rudder for asymmetry) · confirm the failed engine · secure per CAS/flow · assess relight envelope · **driftdown to the one-engine-inoperative ceiling** · plan a diversion.
- **This is a genuine twin-engine event** — with one AE 3007A2 remaining, the aircraft continues to fly and diverts; it is not a total-power-loss/glide scenario (contrast the PC12, a single-engine type in the same Executive group, where engine failure is a forced-landing case).
- **Notes / model:** single-engine handling/driftdown fidelity on the X-Crafts model not independently verified 🟧.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** ITT over-temperature on start, stagnant N2, or thrust not matching lever/FADEC command.
- **Actions:** abort start, allow cooldown per flow, log; for a thrust anomaly cross-check the FADEC/thrust-lever relationship.
- **Notes / model:** FADEC start-abuse logic depth not confirmed 🟧.

## Ch 3 — Fire, smoke & fumes
### APU fire
- **Recognition:** APU fire warning/CAS. · **Actions:** APU fire p/b (if fitted), agent, APU master OFF. · **Notes/model:** depth not confirmed 🟧.
### Baggage-compartment smoke
- **Recognition:** smoke/CAS warning for the baggage compartment. · **Actions:** confirm, isolate per flow, land ASAP. · **Notes/model:** 🟧 may not be simulated `[VERIFY]`.
### Cockpit/cabin smoke or fumes
- **Recognition:** smell/smoke, CAS smoke indication. · **Actions:** masks/goggles if fitted, isolate suspected source (electrical load-shed), consider emergency descent/land ASAP. · **Notes/model:** smoke-source logic limited 🟧.

## Ch 4 — Electrical
- **Systems:** twin generator architecture with APU generator backup (Intro/Dispatch reference) — one-generator loss is tolerable; monitor bus transfer per CAS.
- **Generator loss:** per CAS (isolate/reset, manage load), monitor remaining sources.
- **Emergency electrical config / battery-only:** confirm essential busses powered, APU start if available, land ASAP; expect reduced systems availability. · **Notes/model:** emergency-config fidelity not confirmed 🟧.

## Ch 5 — Hydraulics
- **Systems:** dual-redundant hydraulic architecture (Intro/Dispatch reference). Single-system loss is generally tolerable; monitor affected surfaces/gear/brakes per CAS.
- **Notes / model 🟧:** hydraulic-reversion depth on the X-Crafts model not independently verified `[VERIFY]`.

## Ch 6 — Fuel
- **Imbalance:** CAS fuel-imbalance indication · crossfeed/balance per flow, identify cause (leak vs asymmetric burn).
- **Leak:** if leak suspected, isolate per flow rather than crossfeeding blindly; reassess fuel/range and divert.
- **Notes / model 🟧:** crossfeed/transfer logic depth not confirmed.

## Ch 7 — Flight controls & high-lift
- **Recognition:** CAS flight-control caution, restricted authority or degraded feel.
- **Actions:** fly manually as needed; for a flap/slat jam, stop at a safe configuration, compute a higher approach speed and landing distance (Ch 13), use a longer runway.
- **Notes/model:** control-system reversion fidelity not confirmed 🟧.

## Ch 8 — Landing gear, brakes & tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use the alternate/emergency extension method per flow; do not force.
- **Brake / anti-skid fault:** use alternate braking as available, expect longer rollout, avoid locked wheels.
- **Tyre failure / gear-up or partial:** brief evacuation readiness, RFF as available, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain
### Rapid decompression + emergency descent 🟥
- **Recognition:** cabin-altitude warning, ear/climb sensation, CAS excess-cabin-altitude indication. · **Actions (memory, Ch 1):** masks ON, crew comms; emergency descent — idle thrust, speedbrake as fitted, descend to **FL100/MSA**; PA, MAYDAY. Then CAS/QRH for pressurisation configuration. · **Notes/model:** depressurisation-event fidelity not confirmed 🟧.
### Bleed / pressurisation-source fault
- **Actions:** per CAS/flow, consider altitude limit, monitor cabin altitude.
### Anti-ice
- **Actions:** wing/engine anti-ice ON in icing conditions, note performance/bleed penalty.

## Ch 10 — Navigation, instruments & autoflight
### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, air-data flags. · **Actions (memory, Ch 1):** AP/FD/autothrottle OFF, known pitch + thrust `[VERIFY]`, identify the faulty source, use remaining/backup indications, then troubleshoot. · **Notes/model:** air-data-fault fidelity not confirmed 🟧.
### Display / autoflight loss, GPS/RNP degradation
- **Actions:** revert to remaining sources/displays; for RNP loss, downgrade navigation capability and advise ATC; hand-fly if autoflight is lost. · **Notes/model 🟧:** depth not confirmed.

## Ch 11 — Communications
- **Radio / audio failure:** select alternate radio/audio path, squawk 7600, follow the lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select alternate transponder, advise ATC.

## Ch 12 — Miscellaneous
- **Door / baggage-compartment fault:** confirm indication before pressurising.
- **Windshield heat, bird strike, volcanic ash:** stabilise, assess damage/engine effect; for ash, exit the cloud (descend/turn), reduce thrust changes, land at the nearest suitable field.
- **Unlawful interference:** squawk 7500, follow security procedure.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-configuration landing distance & approach-speed increments** (flap-restricted, degraded controls): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and a higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inoperative ceiling:** on engine loss, follow driftdown to the OEI ceiling and plan the nearest suitable diversion — this is a **twin-engine controllability/diversion task**, distinct in kind from the PC12's single-engine glide/forced-landing task in the same Executive group. `[VERIFY]`
- **Overweight landing:** if landing above MLW `[VERIFY — MLW not established, Intro §5]`, use overweight-landing technique/speed, expect a longer distance, inspection required.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, major failure, or any condition requiring rapid egress.
- **Actions (memory, Ch 1):** aircraft stopped, parking brake set; shut down engines and APU; if evacuation ordered → command evacuation, cut fuel and non-essential electrics per secure flow, retain essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft; direct occupants to the safest usable exit (assess fire side/wind); account for all occupants, move upwind.
- **Notes / model 🟧:** shutdown/secure flow plausible on the flown model; the occupant evacuation itself is not meaningfully simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Embraer Legacy 600 (incl. Legacy 650 variant table) — https://en.wikipedia.org/wiki/Embraer_Legacy_600
- fstc.eu — Embraer EMB-135BJ Legacy 600/650 type-rating course reference (systems basis) — https://fstc.eu/flight-crew-pilots/typeratings/airplane/embraer-emb-135bj-legacy-600-650/
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- FlightGlobal — "USA gives thumbs-up to Legacy 650" — https://www.flightglobal.com/news/articles/usa-gives-thumbs-up-to-legacy-650-353728/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered twin-jet abnormal/emergency reference re-expressed for Primus Elite/CAS-based crew alerting; memory items 🟥 (engine failure, engine fire, emergency descent, unreliable airspeed, stall, evacuation); explicit contrast drawn against the PC12's single-engine forced-landing logic in the same Executive group; figures `[VERIFY]`. |
