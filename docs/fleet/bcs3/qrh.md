<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  BCS3 Airbus A220-300
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# BCS3 — Airbus A220-300 · QRH

**BCS3 / A220 family — separate type rating BD-500** · no confirmed X-Plane 11 model 🟥 `[VERIFY — see Sim-Model]` · sim = X-Plane 11

**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's own EICAS/Electronic Checklist (ECL) is authoritative** — the A220 uses a Collins-style EICAS crew-alerting system (Warning/Caution/Advisory/Status messages) and an ECL presented on the flight-deck display, organised into NORMAL, NON-NORMAL, PROC and FCTN checklist groups. This is **not** an Airbus ECAM and the procedures below must **not** be assumed identical to the A320/A330/A350 family. All content is re-expressed in K Global's own words from public type knowledge; **no verbatim OEM text**, and no model has yet been validated against it (Sim-Model) — treat every procedure as 🟧 reference until confirmed. Flag legend 🟥 memory/immediate · 🟧 model-dependent/unverified · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH

- **Philosophy:** fly the aircraft first; the EICAS drives crew attention to the fault and the ECL (electronic checklist) presents the ordered non-normal actions on the flight-deck display. PF flies + manages thrust/config; PM reads and actions the ECL.
- **Two facts that shape this whole pack, restated here:** the A220 is a **stand-alone BD-500 type rating** — no CCQ with the A320/A330/A350 family, so crews must not assume Airbus ECAM habits transfer directly to this EICAS/ECL aircraft. And the K Global A220-300 is **NOT steep-approach certified** (the A220-100 is) — this affects Ch 13 approach/landing performance planning, not just dispatch.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book/ECL.
- **Fly-by-wire note 🟧:** the A220 FBW has only **two** control laws — **Normal mode** and **Direct mode**. There is no Airbus-style intermediate "Alternate law" — do not brief or expect that middle tier of protection loss on this type (see Ch 7).
- **Sim-model caveat 🟥:** no X-Plane 11 add-on has been identified or tested for this type (Sim-Model). Every procedure below is written from public type knowledge, **not** validated against a flown model — confirm what actually triggers/resolves before relying on any of this for training `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / air-data disagree** 🟥 | Disconnect AP/FD/autothrottle; set **known pitch + thrust** (approx wings-level pitch/climb thrust below the relevant limit, then adjust) `[VERIFY]`; keep configuration clean if able | Level off, identify the faulty air-data source, use remaining/standby instrument (ISI), read Ch 10 |
| **Emergency descent (rapid depressurisation)** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speedbrake, target max operating speed as structure permits; turn off track if needed; descend toward **FL100 / MSA**. Note: the A220's autoflight can **automatically** initiate an emergency descent in some conditions — if it has not, do this manually without delay | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage** 🟥 | Thrust lever idle → **engine master off**; **fire pushbutton** push; **discharge extinguishing agent** per EICAS/ECL timing | Confirm fire out, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **shut engines/APU down**; if evacuation ordered → **evacuation signal**, cut fuel/electrics per secure flow | Cabin evacuation signal, ATC/RFF, read Ch 14 |
| **Stall warning / approach to stall** 🟥 | Nose down, reduce pitch/angle of attack; **apply go-around/max thrust** (unless near ground in a low-energy state — pitch priority); wings level; recover, then clean up | Monitor speed, resume, read Ch 7 |

*Memory-item modelling 🟧: no sim model has been tested against any of these — verify each triggers before training to it (Sim-Model §3).*

## Ch 2 — Engines / APU / power plant

### Engine fire 🟥
- **Recognition:** engine fire warning + EICAS message, possible parameter anomaly (N1/ITT).
- **Actions:** thrust lever idle · engine master off · fire pushbutton out · discharge agent (first bottle, then second if still burning after the interval) · secure, divert.
- **Notes:** PW1500G-specific fire-loop and extinguishing logic is a real system on the type; no sim model has been confirmed to simulate it 🟧.

### Engine failure / flameout / in-flight relight
- **Recognition:** N1/N2 rollback, ITT/fuel-flow drop, EICAS engine-fail message, yaw (asymmetric thrust on a twin).
- **Actions:** maintain control (rudder for asymmetry) · confirm the failed engine · secure per EICAS/ECL · assess relight envelope (windmill/starter-assisted) · driftdown to the one-engine-inoperative ceiling · consider EDTO diversion (Ch 13, Dispatch §5).
- **Notes:** the PW1500G is a geared-turbofan (GTF) — different spool/response characteristics from older-generation turbofans; performance figures are `[VERIFY]` pending a K Global reference OFP.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** ITT over-temperature on start, stagnant N2, or thrust not matching lever/FADEC target.
- **Actions:** abort start (master off), dry-motor per procedure/limits, log the event; for thrust anomaly cross-check autothrottle/FADEC target.
- **Notes:** engine start on the A220 is FADEC-managed (largely automatic sequence) — abnormal-start logic depth is model-dependent 🟧 and unconfirmed.

## Ch 3 — Fire, smoke & fumes

### APU fire
- **Recognition:** APU fire warning/EICAS message. · **Actions:** APU fire pushbutton, discharge agent, APU master off. · **Notes:** 🟧 not simulated on any confirmed model.

### Cargo compartment smoke/fire
- **Recognition:** cargo smoke warning (dedicated cargo-compartment fire-protection system on this type). · **Actions:** confirm, **discharge cargo extinguishing agent**, land ASAP, isolate ventilation per EICAS/ECL. · **Notes:** 🟧 unconfirmed on any sim model `[VERIFY]`.

### Equipment bay smoke
- **Recognition:** equipment-bay smoke detection message — a system distinct from cabin/cargo smoke detection on this type. · **Actions:** per EICAS/ECL, consider isolating avionics cooling/ventilation source, land ASAP if smoke persists. · **Notes:** 🟧 not commonly modelled even on study-level add-ons.

### Main landing gear overheat
- **Recognition:** dedicated main-gear overheat detection message (separate system from wheel/brake temperature indication). · **Actions:** per EICAS/ECL — typically extend gear early / avoid retraction, assess for brake or wheel-well fire risk. · **Notes:** 🟧 niche system, unlikely to be simulated in depth.

### Lavatory fire
- **Recognition:** lavatory smoke detector / built-in extinguisher discharge indication. · **Actions:** confirm, use handheld extinguisher if accessible, land ASAP.

### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, EICAS smoke message. · **Actions:** masks/goggles, 100% oxygen, isolate suspected source (electrical load-shed), consider emergency descent/land ASAP. · **Notes:** smoke-source logic limited/unconfirmed on any model 🟧.

## Ch 4 — Electrical

### Generator loss
- **Recognition:** electrical generation fault message, automatic bus transfer. · **Actions:** per EICAS/ECL (isolate/reset per procedure), monitor remaining sources (primary/secondary distribution).

### Emergency electrical configuration
- **Recognition:** loss of primary AC sources → emergency/backup electrical configuration, expect a degraded-systems posture. · **Actions:** confirm essential buses powered, start APU if available, land ASAP; expect some systems in a reduced/backup mode. · **Notes:** public specifications describe an emergency ram-air-driven backup source on this type-class; confirm exact architecture against the flown model/authoritative source before training to it 🟧 `[VERIFY]`.

### Battery-only
- **Recognition:** all generation sources lost, batteries only. · **Actions:** minimum essential loads, APU/backup-source priority, expedite landing.

## Ch 5 — Hydraulics

- **Systems:** **three** hydraulic systems, numbered **1 / 2 / 3** — not the Airbus-style colour-coded (Green/Blue/Yellow) naming. One-system loss is generally tolerable; multi-system loss degrades flight controls, gear and braking.
- **Single-system loss:** EICAS hydraulic fault message · manage per EICAS/ECL · note affected surfaces/brakes.
- **Multiple-system loss:** expect **flight-control law degradation toward Direct mode** (see Ch 7 — there is no intermediate law on this type), alternate/gravity gear extension, alternate braking.
- **Notes 🟧:** hydraulic-system depth (all three circuits and their reversions) is unconfirmed on any sim model `[VERIFY]`.

## Ch 6 — Fuel

- **Imbalance:** EICAS fuel-imbalance message · use cross-feed, balance per procedure, identify cause (leak vs asymmetric burn).
- **Leak:** if a leak is suspected, **do not** open cross-feed blindly; isolate per EICAS/ECL, reassess fuel/range and divert.
- **Low level / feed / transfer fault:** manage transfer pumps, gravity feed if required; recompute reserves (Dispatch §3/§5). The modest ~19,130 L max fuel (Intro §5) leaves comparatively tight margin on a leak/imbalance scenario near structural range.
- **Fuel tank inerting:** the A220 fits a fuel tank inerting system as standard — a fault here is a maintenance/dispatch item rather than an in-flight emergency in most cases, but note it exists as a distinct system from the fuel-quantity/transfer chain.
- **Notes 🟧:** cross-feed/transfer modelling unconfirmed on any sim model.

## Ch 7 — Flight controls & high-lift

### Control-law degradation (Normal mode → Direct mode) 🟧
- **Recognition:** EICAS flight-control message indicating loss of Normal mode, reversion to **Direct mode**. Unlike the Airbus three-law scheme, there is **no intermediate "Alternate law" step** — do not brief for one.
- **Actions:** fly manually as needed, expect **reduced/no envelope protections** in Direct mode, plan a flapped/managed approach with an appropriately higher reference speed, expect Direct mode with gear down in some configurations.
- **Notes:** this two-law model is a genuine, meaningful difference from the Airbus A320/A330/A350 FBW family — re-brief crews transitioning from Airbus types accordingly.

### Flap / slat (high-lift) jam
- **Recognition:** EICAS high-lift system fault, flaps/slats locked. · **Actions:** stop at a safe configuration, compute a higher approach speed & landing distance (Ch 13), use a longer runway.

### Spoiler fault; trim runaway
- **Actions:** per EICAS/ECL; for uncommanded pitch trim, use the manual trim/disconnect path per procedure. 🟧

## Ch 8 — Landing gear, brakes & tyres

- **Gear disagree / unsafe:** recycle once if permitted; if still unsafe, use **alternate/gravity extension**; do not force.
- **Alternate / gravity extension:** per EICAS/ECL; expect no retraction afterwards. · **Notes 🟧:** unconfirmed on any sim model.
- **Nosewheel steering fault:** a dedicated system on this type — expect reduced/degraded steering authority, plan for differential braking/rudder on rollout, brief a longer landing roll if steering is lost.
- **Brake / anti-skid fault:** alternate braking, modulate manually if anti-skid is lost, longer rollout, avoid locked wheels.
- **Main gear overheat:** see Ch 3 — dedicated detection system, distinct from tyre/brake temperature monitoring.
- **Tyre failure / gear-up or partial:** brief evacuation, foam/RFF as available, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain

### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin altitude warning, rate-of-climb of cabin altitude, excess cabin altitude message. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle, speedbrake, appropriate high-speed target as structure allows, off-track if required, level at **FL100/MSA**; PA, MAYDAY. The autoflight system on this type can **automatically arm/fly an emergency descent** in certain conditions — confirm whether it has engaged before assuming full manual action is required, but **never delay** manual action if it has not. Then EICAS/ECL for pressurisation configuration.
- **Notes 🟧:** the automatic emergency-descent behaviour is a genuine feature of this type's autoflight system, distinct from a purely-manual Airbus emergency descent — unconfirmed whether any sim model reproduces it `[VERIFY]`.

### Bleed air leak / overheat
- **Recognition:** bleed-air leak or overheat detection message (a dedicated detection system on this type, covering the bleed manifold/duct routing). · **Actions:** isolate the affected side per EICAS/ECL, monitor for secondary effects (pack/pressurisation availability), consider altitude/routing changes if bleed sources are reduced.

### Pack / bleed fault
- **Actions:** per EICAS/ECL, single-pack operations, consider an altitude limit; monitor cabin altitude.

### Ice protection (wing / cowl / probes)
- **Actions:** wing and engine-cowl anti-ice ON in icing conditions per EICAS/ECL, note the performance/bleed penalty; confirm air-data probe heating is active before relying on airspeed in icing.

## Ch 10 — Navigation, instruments & autoflight

### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, air-data fault message. · **Actions (memory, Ch 1):** AP/FD/autothrottle OFF, **pitch + thrust** table `[VERIFY]`, identify the faulty air-data source, use the remaining source or the standby instrument (ISI), then troubleshoot. · **Notes 🟧:** modelling depth unconfirmed on any sim model.

### Inertial reference fault, display loss, autoflight fault, satellite-navigation loss
- **Actions:** revert to the remaining sources/displays (including the standby instrument); for a navigation-precision loss downgrade the RNP capability in use and advise ATC; hand-fly if autoflight is lost. · **Notes 🟧:** depth unconfirmed.

## Ch 11 — Communications

- **Radio / audio failure:** select the alternate radio/audio path, squawk 7600, follow the lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select the alternate transponder, advise ATC.
- **Data-link (CPDLC) abnormal operation:** the type has a documented abnormal-operation path for controller-pilot data link — if data link fails or disagrees with voice, revert to voice communications and follow the applicable lost-link procedure. 🟧
- **Notes 🟧:** basic communications logic only, unconfirmed on any sim model.

## Ch 12 — Miscellaneous

- **Door / slide fault:** confirm door status before pressurising; disarm slides before any door is opened on the ground. The type has a **reinforced flight-deck door** with its own control/indication logic — treat any related fault per EICAS/ECL.
- **Windshield/window heat, water/waste, bird strike, volcanic ash:** stabilise, assess damage/engine effect; for volcanic ash exit the cloud (descend/turn), reduce thrust changes, land at the nearest suitable aerodrome.
- **Unlawful interference:** squawk 7500, follow the security procedure. 🟧 mostly not simulated on any model.

## Ch 13 — Abnormal & emergency performance

- **Abnormal-configuration landing distance & reference-speed increments** (flap/slat-less, Direct-mode landing): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and a higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inoperative ceiling:** on engine loss, follow driftdown to the OEI ceiling; for EDTO this feeds the en-route-alternate/critical-fuel check — **dispatch discipline, not sim-modelled** (Dispatch §5). 🟥
- **Overweight landing:** if landing above MLW (~62,600 kg 🟧 `[VERIFY]`), use overweight-landing technique/speed, expect a longer distance, inspection required. `[VERIFY]`
- **Steep approach is out of scope 🟥.** The K Global A220-300 is **not** steep-approach certified (the A220-100 is) — do not compute or brief a steep-approach performance case on this type; ties to the OM E steep-approach deferral and Dispatch §6.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Evacuation 🟥

- **Recognition/trigger:** commander's decision after fire/ditching/major failure.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alert**; shut down **engines and APU**; if evacuation ordered → **evacuation command/signal**, cut fuel and non-essential electrics per the secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft, cabin crew direct evacuation using the main-door slides, overwing emergency exits, and (for the flight crew) the dedicated flight-crew emergency exit hatch if the main doors are unusable; account for all, move upwind of any fire.
- **Notes 🟧:** shutdown/secure flow may be simulated to some depth once a model is confirmed; the passenger evacuation itself is not expected to be simulated on any consumer add-on — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A220-300 (BCS3) — https://skybrary.aero/aircraft/bcs3
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- Airbus — A220 aircraft family page — https://www.airbus.com/en/products-services/commercial-aircraft/a220-family
- Wikipedia — Airbus A220 — https://en.wikipedia.org/wiki/Airbus_A220
- Wikipedia — Pratt & Whitney PW1000G (geared turbofan family, incl. PW1500G) — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_PW1000G

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered A220-300/BD-500 abnormal/emergency reference re-expressed from public type knowledge; source gap noted (no operator-neutral QRH/procedures source on file — informed by systems architecture only, no confirmed sim model); memory items 🟥 (unreliable airspeed, emergency descent, engine fire, evacuation, stall); two-law FBW (Normal/Direct, no Alternate) and steep-approach exclusion restated as key A220-vs-Airbus distinctions; figures `[VERIFY]`. |
