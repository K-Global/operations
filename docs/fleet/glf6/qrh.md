<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  GLF6 Gulfstream G650ER
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# GLF6 — Gulfstream G650ER · QRH

**GLF6 / Gulfstream GVI family** · flown as AKD Studio GLF650 (lead) / legacy X-Hangar model (fallback) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11, adapted for the Executive-unit VIP charter paradigm (crew of two, no cabin-crew-driven turnback pressure, VIP passengers to be briefed calmly). **In a real non-normal the aircraft's own CAS/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror system/ATA-style grouping used across the Gulfstream large-cabin family. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Crew-of-two philosophy: PF flies and manages thrust/configuration; PM (the other pilot — there is no flight engineer or additional crew position on this type) reads and actions the CAS/QRH. With only two on the flight deck, task-sharing discipline matters more than on a larger-crew type.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- **Model caveat 🟧:** the AKD Studio GLF650 is documented (independent trade coverage) as simulating custom GPWS, TCAS, fire-protection, electrical, hydraulic, fuel and flight-control failure logic; the legacy X-Hangar model relies on X-Plane's default systems and will **not** trigger or resolve several of the procedures below. Confirm behaviour on the flown build before training to it `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / air-data disagree** 🟥 | Disconnect autopilot/autothrottle; set **known pitch + thrust** `[VERIFY]`; keep wings level, maintain a safe configuration | Level off, cross-check remaining air-data sources, read Ch 10 |
| **Emergency descent (rapid depressurisation)** 🟥 | Don **oxygen masks**, establish crew communication; **initiate descent** — thrust idle, speedbrake as needed, target max operating speed as structure permits; turn off track if required; level at **FL100 / MSA** whichever is higher | Cabin signs on, notify ATC (MAYDAY), read Ch 9 |
| **Engine fire / severe damage** 🟥 | Affected thrust lever idle → **fuel/engine master OFF**; **fire push-button** actuate; **discharge extinguishing agent** per CAS/time sequence | Confirm fire indication clear, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut down engines/APU**; if evacuation ordered → command evacuation, isolate fuel/non-essential electrics per secure flow | Direct occupants to usable exits, account for all, read Ch 14 |
| **Stall warning / approach to stall** 🟥 | Reduce angle of attack (nose down as needed); apply **maximum available thrust** (unless close to the ground at low energy, where pitch control takes priority); wings level; recover, then re-establish planned flight path | Monitor speed margin, resume, read Ch 7 |

*Memory-item modelling 🟧: the AKD Studio GLF650 is reported to model air-data faults, fire/extinguishing logic and depressurisation credibly; the legacy fallback model may abstract several of these — verify each triggers before training to it.*

## Ch 2 — Engines / APU / power plant
### Engine fire 🟥
- **Recognition:** fire warning + CAS message, possible parameter anomaly (N1/EGT/vibration).
- **Actions:** affected thrust lever IDLE · fuel/engine master OFF · fire push-button OUT · discharge agent (then the second charge if still indicating after the interval) · secure, divert.
- **Notes / model:** lead model documented with custom fire-protection logic; legacy fallback simplified 🟧.

### Engine failure / flameout / in-flight relight
- **Recognition:** parameter rollback, CAS engine-fail indication, yaw with asymmetric thrust.
- **Actions:** maintain control (rudder for asymmetry) · confirm the failed engine before acting · secure per CAS · assess relight envelope · fly the one-engine-inoperative driftdown profile to a safe altitude · plan the nearest suitable diversion (long-range over-water sectors make diversion-airport adequacy a route-by-route planning task per Dispatch §5, not a fleet rule time).
- **Notes / model:** single-engine handling and driftdown behaviour depth is model-dependent 🟧 `[VERIFY]`.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** exhaust-temperature over-limit on start, stagnant rotation, or thrust not matching lever position.
- **Actions:** abort the start (master OFF), allow a cooling/dry-motor cycle per CAS/limits before re-attempting, log the event; for a thrust anomaly cross-check the autothrottle/thrust-rating system.
- **Notes / model:** start-abuse logic present on the lead model 🟧; limited on the fallback.

## Ch 3 — Fire, smoke & fumes
### APU fire
- **Recognition:** APU fire warning/CAS. · **Actions:** fire push-button, discharge agent, APU master OFF. · **Notes/model:** lead model documented; fallback partial 🟧.
### Baggage-compartment smoke
- **Recognition:** smoke warning for the baggage/cargo compartment (this type carries VIP baggage only, no palletised cargo). · **Actions:** confirm, discharge the compartment extinguishing agent if fitted, land at the nearest suitable airport, isolate ventilation per CAS. · **Notes/model:** 🟧 may not be simulated on the fallback model `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, CAS smoke indication. · **Actions:** oxygen masks/goggles as needed, 100% oxygen, isolate the suspected source (electrical load-shed), consider an emergency descent or land at the nearest suitable airport. · **Notes/model:** smoke-source logic depth limited 🟧.

## Ch 4 — Electrical
### Generator loss
- **Recognition:** generator-fault CAS message, automatic bus transfer. · **Actions:** per CAS (reset/isolate as directed, manage remaining load), monitor remaining sources.
### Emergency electrical configuration
- **Recognition:** loss of primary AC sources triggers an automatic reversion to an emergency power configuration. · **Actions:** confirm essential buses powered, start the APU if available, plan to land at the nearest suitable airport, expect some systems in a reduced-capability state. · **Notes/model:** emergency-electrical logic well modelled on the lead product; fallback abstracted 🟧.
### Battery-only power
- **Recognition:** all generator sources lost, batteries only remain. · **Actions:** minimum essential loads, prioritise APU/emergency-source recovery, expedite the approach and landing.

## Ch 5 — Hydraulics
- **Systems:** the type carries multiple independent hydraulic circuits; loss of a single circuit is generally tolerable, loss of more than one degrades flight-control authority, gear operation and braking.
- **Single-system loss:** hydraulic-fault CAS message · manage per CAS · note any affected surfaces or brake modes.
- **Multiple-system loss:** expect **degraded flight-control law/authority**, use of an alternate or gravity gear-extension method, and alternate braking — cross-reference Ch 7/Ch 8.
- **Notes / model 🟧:** the lead model is documented with a custom hydraulic system; fallback hydraulic depth is limited — some reversions may not occur `[VERIFY]`.

## Ch 6 — Fuel
- **Imbalance:** fuel-imbalance CAS indication · balance per procedure (crossfeed/transfer as applicable), identify the cause (leak vs. asymmetric burn) before acting further.
- **Leak:** if a leak is suspected, **do not** open a crossfeed/transfer path blindly; isolate the affected side per CAS, reassess fuel and range, and divert.
- **Low level / feed / transfer fault:** manage transfer pumps as directed, recompute reserves against the mission fuel plan (Dispatch §3).
- **Notes / model 🟧:** the lead model documents a custom fuel system; fallback fuel logic is simplified.

## Ch 7 — Flight controls & high-lift
### Flight-control degradation
- **Recognition:** flight-control CAS message, reduced control authority or protections. · **Actions:** hand-fly as required, respect that some protections may be reduced or unavailable, plan a higher approach speed/longer runway if the abnormal configuration requires it. **The GLF6 is fly-by-wire** — this is a materially different failure mode from the GLF5's conventional mechanical/hydraulic controls, and a pilot moving between the two types should be briefed on the difference. 🟩 (type fact) / 🟧 (model fidelity of the specific reversion)
### Flap/slat anomaly
- **Recognition:** flap/slat CAS disagreement or asymmetry indication. · **Actions:** stop at a safe configuration, compute the resulting higher approach speed and landing distance (Ch 13), plan a longer runway.
### Speedbrake / trim anomaly
- **Actions:** per CAS; for an uncommanded trim indication, use the manual trim path/disconnect per procedure. 🟧

## Ch 8 — Landing gear, brakes & tyres
- **Gear disagree / unsafe indication:** recycle once if the procedure allows; if still unsafe, use the **alternate/gravity extension** method; do not force the system.
- **Alternate / gravity extension:** per CAS/QRH; expect no retraction capability afterward. · **Notes/model:** gravity-extension logic modelled on the lead product 🟧 (verify on the fallback).
- **Brake / anti-skid fault:** use alternate braking as directed, expect a longer rollout, avoid a locked-wheel condition.
- **Tyre failure / gear malfunction on landing:** brief for a possible evacuation, request RFF standby, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain
### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin-altitude warning, rate-of-change indication. · **Actions (memory, Ch 1):** oxygen masks ON, crew communication established; **emergency descent** — thrust idle, speedbrake as needed, target maximum operating speed as structure allows, off-track if required, level at **FL100/MSA**; notify ATC (MAYDAY). Then work the CAS/QRH for the pressurisation-system configuration. · **Notes/model:** lead model documents cabin-altitude and emergency-descent logic; fallback partial 🟧.
### Pack / bleed-air fault
- **Actions:** per CAS, consider a single-source configuration and any resulting altitude limitation; monitor cabin altitude closely.
### Ice and rain protection
- **Actions:** engine/wing anti-ice ON as required in icing conditions; note the associated performance and bleed-air penalty.

## Ch 10 — Navigation, instruments & autoflight
### Unreliable airspeed / air-data fault 🟥
- **Recognition:** speed/altitude disagreement between displays, air-data-fault CAS indication. · **Actions (memory, Ch 1):** autopilot/autothrottle OFF, **pitch + thrust** table `[VERIFY]`, identify the faulty source, revert to a remaining/backup source, then troubleshoot. · **Notes/model:** lead model documents air-data-fault logic 🟧 (verify on fallback).
### Inertial-reference fault, display loss, autoflight fault, satellite-navigation degradation
- **Actions:** revert to remaining sources/displays; for a navigation-accuracy downgrade, advise ATC and adjust the routing/approach minima accordingly; hand-fly if autoflight is lost. · **Notes/model 🟧:** depth varies by model.

## Ch 11 — Communications
- **Radio / audio failure:** select an alternate radio/audio path, squawk **7600**, follow the lost-communications procedure applicable to the airspace and clearance in use.
- **Transponder fault:** select an alternate transponder, advise ATC. · **Notes/model 🟧:** basic on both models.

## Ch 12 — Miscellaneous
- **Door fault:** confirm via CAS before pressurising; do not open a door with slides/hatches armed if fitted.
- **Windshield heat fault, water/waste-system fault, bird strike, volcanic ash encounter:** stabilise, assess damage/engine effect, for an ash encounter exit the affected airspace (descend/turn as appropriate), minimise thrust changes, land at the nearest suitable airport.
- **Unlawful interference:** squawk **7500**, follow the applicable security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-configuration landing distance and approach-speed increments** (flap/slat-restricted, degraded flight-control law): compute via the sim/OFP performance tool for the flown configuration — do not estimate; plan a longer runway and a higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inoperative profile:** on engine loss, follow the driftdown profile to a safe one-engine-inoperative altitude; for long-range over-water sectors this feeds the diversion-airport-adequacy assessment that Dispatch §5 treats as a route-by-route planning task, **not** a fleet-wide EDTO rule time. 🟥
- **Overweight landing:** if landing above maximum landing weight, use the overweight-landing technique and expect a longer distance and a post-landing inspection requirement `[VERIFY]`.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, ditching, or a major failure.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; shut down **engines and APU**; if evacuation is ordered → command the evacuation, cut fuel and non-essential electrics per the secure flow while retaining essential lighting/communication; notify ATC/RFF (MAYDAY).
- **Crew coordination:** with a crew of two and typically 0–2 cabin attendants (if carried) plus VIP occupants, flight crew must brief exit assessment (fire side, wind) and direct occupants clearly — there is no dedicated cabin-crew evacuation command structure to rely on the way a larger-crew aircraft would have; brief VIP passengers on this before departure where practical.
- **Notes / model 🟧:** shutdown/secure sequencing may be modelled; passenger evacuation itself is not simulated on either candidate model — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Gulfstream Aerospace G650 (GLF6) — https://skybrary.aero/aircraft/glf6
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- EASA — Type Certificate Data Sheet, Gulfstream GVI (G650) — https://www.easa.europa.eu/en/document-library/type-certificates
- X-Plane.Org Store — GLF650 "Ultimate Business Jet" by AKD Studio (simulated-systems scope) — https://store.x-plane.org/GLF650--Ultimate-Business-Jet-Aircraft-by-AKD-Studio_p_1955.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered Gulfstream large-cabin twin abnormal/emergency reference re-expressed for crew-of-two Executive-unit VIP ops; memory items 🟥 (unreliable airspeed, emergency descent, engine fire, evacuation, stall); fly-by-wire handling difference vs GLF5 noted; figures `[VERIFY]`. |
