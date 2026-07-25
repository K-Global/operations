<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  E145 Embraer ERJ-145
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# E145 — Embraer ERJ-145 · QRH

**E145 / ERJ family (own type rating)** · flown as X-Crafts ERJ Family (E145/E145XR) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's EICAS/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH

- **EICAS philosophy, not ECAM:** this type presents Master Warning / Master Caution plus a scrolling message list (EICAS) — there is no Airbus-style "ordered synoptic action" ECAM logic to step through. The pilot flies the aircraft first, references the EICAS message, then opens the QRH for anything not already covered by a recall item.
- **Conventional flight controls:** the ERJ-145 has **no fly-by-wire law** to degrade — primary controls are hydraulically-boosted and cable/rod-actuated with manual-reversion capability, flown through a conventional yoke. Several procedures below (jammed control, trim runaway) reflect this directly and would not exist in the same form on a fly-by-wire type.
- **No autothrottle:** thrust is hand-flown in every phase, including during and after an abnormal. Nothing in this QRH assumes an autothrottle exists.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- PF flies and manages thrust/configuration; PM reads and actions the EICAS message/QRH and handles communications.
- **Model caveat 🟧:** the candidate X-Crafts ERJ Family is a mid–study-depth add-on per vendor description, not independently verified by K Global. Several procedures below may not be fully modelled; where a step depends on failure logic the model may not simulate, it is flagged 🟧. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/limits here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Emergency descent (incl. rapid depressurisation)** 🟥 | Crew oxygen masks **ON**, establish crew comms; alert cabin ("emergency descent"); thrust levers **IDLE**; speedbrakes **OPEN**; extend the **landing gear as a drag device** below the gear-extension speed limit `[VERIFY]` — a distinctive feature of this type, gear is used for drag on the emergency descent, unlike many other jet types; initiate descent to **10,000 ft or the applicable minimum safe altitude, whichever is higher** `[VERIFY]` | Squawk 7700, exterior lights on, PA to cabin, level at the safe altitude, read Ch 9 |
| **Unreliable airspeed / ADC disagree** 🟥 | Disconnect AP/FD; **do not** select speedbrakes; set a known **pitch + thrust** reference from performance data `[VERIFY]`; cross-check GPS ground speed and GPS altitude if available | Identify the faulty air-data source, consider an ADC-reversion selection, read Ch 10 |
| **Engine fire / severe damage / uncontained failure or separation** 🟥 | Affected thrust lever **IDLE**; engine **START/STOP selector** to **STOP**; fire-extinguisher handle **PULL** (do not rotate at this step — rotation discharges the agent; confirm the discharge step before doing it) | Confirm fire out, secure the engine, divert; read Ch 2 |
| **Erroneous stall-protection actuation (false stick shaker/pusher)** 🟥 | Quick-disconnect button **PRESS and HOLD**; stall-protection **cutout switches (1+2) PUSH OUT**; release the quick-disconnect button | Fly pitch manually, verify the AOA indication is genuine before resuming normal ops, read Ch 7 |
| **Pitch or aileron/rudder trim runaway** 🟥 | Quick-disconnect button **PRESS and HOLD**; oppose the runaway with manual control input until controlled | Isolate the affected trim system per the expanded checklist, read Ch 7 |
| **Emergency evacuation** 🟥 | Aircraft **stopped**, parking brake **SET**; shut down **engines and APU**; if evacuation is ordered, command **EVAC** per the secure-cockpit flow | Cabin crew directs evacuation to usable exits, read Ch 14 |

*Memory-item modelling 🟧: engine fire/shutdown logic and basic autopilot/AP-FD disconnects are the items most likely to be credibly modelled; the quick-disconnect trim/stall-protection-cutout logic and the gear-as-drag-device emergency-descent detail are the most likely to be simplified or absent on a mid-fidelity add-on — verify each before training to it `[VERIFY]`.*

## Ch 2 — Engines / APU / power plant

### Engine fire / severe damage / separation 🟥
- **Recognition:** EICAS engine-fire warning, possible parameter anomaly (N1/N2/ITT), or evidence of damage/separation (vibration, abnormal noise) without a fire indication.
- **Actions:** Affected thrust lever IDLE · engine START/STOP selector STOP · fire-extinguisher handle pull (not rotate) · discharge the agent per the expanded checklist · secure, divert.
- **Notes / model:** basic fire-warning + shutdown logic is a reasonable expectation on a mid-fidelity add-on; the separate "severe damage/no fire indication" case is less likely to be distinctly modelled 🟧.

### Engine failure / flameout / in-flight relight
- **Recognition:** rollback or loss of N1/N2, fuel-flow/ITT drop, EICAS engine-fail message, yaw toward the failed side.
- **Actions:** Maintain control (rudder for asymmetry) · confirm the failed engine before actioning anything · secure per the expanded checklist · assess the relight envelope · fly the one-engine-inoperative driftdown profile to the applicable ceiling (Ch 13).
- **Notes / model:** single-engine asymmetry handling is commonly modelled; a realistic windmill-relight envelope is less certain on a mid-fidelity add-on 🟧 `[VERIFY]`.

### Abnormal engine start / thrust anomaly
- **Recognition:** start-limit exceedance (temperature, stagnant rotation), or thrust not matching the lever position.
- **Actions:** Abort the start (thrust lever idle, start/stop selector to STOP) · allow the required cooling/dry-motor interval per the expanded checklist before a further attempt · for a thrust anomaly, cross-check the indicated parameters against the lever position.
- **Notes / model:** start-abuse logic depth varies by add-on 🟧.

### ATTCS failure (automatic takeoff thrust uptrim)
- **Recognition:** loss of the automatic thrust-uptrim function that would otherwise increase thrust on the remaining engine(s) after an engine failure during takeoff/go-around; this is separate from, and does not imply, an autothrottle for other flight phases.
- **Actions:** Advance the remaining thrust lever(s) to maximum manually.
- **Notes / model:** 🟧 uptrim-failure logic is a detail unlikely to be modelled on a mid-fidelity add-on; treat as a knowledge item `[VERIFY]`.

### Dual engine failure 🟥
- **Recognition:** loss of both engines — total thrust loss, EICAS dual-fail indication.
- **Actions (memory-adjacent, treat with urgency):** Oxygen masks as required · fuel pump power ON for both tanks, pump selectors set · attempt an APU start if within its altitude limit `[VERIFY]` · target a windmill-relight airspeed appropriate to the altitude band (higher above 10,000 ft, a narrower band below it) `[VERIFY]` · fly the driftdown/best-glide profile and prepare for a forced landing or ditching (Ch 12) if relight is unsuccessful.
- **Notes / model:** 🟧 dual-engine-failure logic and APU-assisted air-start modelling depth are uncertain on a mid-fidelity add-on `[VERIFY]`.

## Ch 3 — Fire, smoke & fumes

### APU fire
- **Recognition:** APU-fire EICAS warning. · **Actions:** APU fuel shutoff valve push in · APU master OFF · discharge the agent if fitted and still required. · **Notes/model:** 🟧 partial on a mid-fidelity add-on.

### Cargo smoke
- **Recognition:** cargo-smoke EICAS message. · **Actions:** confirm, discharge the cargo fire-suppression agent if fitted, land at the nearest suitable airport, isolate ventilation/heating to the compartment per the expanded checklist. · **Notes/model:** 🟧 may not be simulated `[VERIFY]`.

### Avionics / cabin smoke or fumes
- **Recognition:** smell or visible smoke, EICAS smoke message. · **Actions:** crew oxygen masks and smoke goggles on, establish crew comms, isolate the suspected electrical source per the expanded checklist, consider an emergency descent (Ch 1) and land as soon as possible. · **Notes/model:** source-isolation logic is limited on most add-ons 🟧.

## Ch 4 — Electrical

### Generator / bus fault
- **Recognition:** EICAS generator-fault message, automatic bus transfer. · **Actions:** per the expanded checklist (reset/isolate the affected generator, manage remaining load), monitor the remaining sources.

### Battery overtemperature 🟥
- **Recognition:** battery-overtemperature EICAS message. · **Actions:** switch the affected battery OFF. · **Notes/model:** simple system-state logic, reasonable to expect on most add-ons 🟩/🟧.

### Essential-power transfer fault
- **Recognition:** essential-bus transfer-fail EICAS message. · **Actions:** manually select/confirm essential power per the expanded checklist. · **Notes/model:** 🟧 depth varies.

### Battery-only operation
- **Recognition:** all generators lost, batteries carrying essential loads only. · **Actions:** minimise essential loads, prioritise an APU start if available, expedite landing.

## Ch 5 — Hydraulics

- **Systems:** this type is typically described as carrying **two hydraulic systems** feeding flight controls, gear and brakes 🟧 `[VERIFY]` — a materially smaller redundancy margin than a three-system widebody. Loss of one system is a significant event on this type, not a minor one.
- **Single-system loss:** EICAS hydraulic-fault message · manage per the expanded checklist · note which surfaces/gear/brake functions are affected and plan a longer landing distance if braking is degraded.
- **Notes / model 🟧:** hydraulic-system depth and any manual-reversion flight-control behaviour are uncertain on a mid-fidelity add-on — verify before relying on it for training `[VERIFY]`.

## Ch 6 — Fuel

- **Imbalance:** EICAS fuel-imbalance message · open crossfeed to balance, identify the cause (leak vs asymmetric burn) before continuing to use it. **Crossfeed must be closed for takeoff, landing and go-around on this type** 🟥 — do not attempt any of those phases with crossfeed open.
- **Leak:** if a leak is suspected, do **not** open crossfeed blindly — isolate per the expanded checklist, reassess fuel and range, and divert.
- **Low pressure / feed / transfer fault:** manage the fuel pumps and transfer logic per the expanded checklist; recompute reserves against the OFP (Dispatch §3/§7) if the anomaly affects usable fuel.
- **Notes / model 🟧:** crossfeed and transfer-pump logic depth is model-dependent.

## Ch 7 — Flight controls & high-lift

### Jammed aileron or elevator 🟥
- **Recognition:** control column/wheel resists movement in one axis. · **Actions:** operate the aileron/elevator disconnect handle (press and pull) to split the control run and regain control of the unaffected side. · **Notes/model:** 🟧 this is a conventional-controls procedure with no fly-by-wire equivalent; verify the add-on actually models a jam and disconnect rather than omitting the failure mode entirely `[VERIFY]`.

### Pitch / aileron / rudder trim runaway
- See Ch 1 memory item (quick-disconnect). Follow with isolation of the affected trim system per the expanded checklist.

### Flap / slat asymmetry or jam
- **Recognition:** EICAS flap/slat disagree or asymmetry message. · **Actions:** stop the surfaces at a safe, symmetric configuration, compute the higher approach speed and landing distance for that configuration (Ch 13), plan a longer runway.

### Speedbrake / spoiler fault
- **Actions:** per the expanded checklist; note any asymmetric deployment and its effect on roll control. 🟧

## Ch 8 — Landing gear, brakes & tyres

- **Gear disagree / unsafe indication:** recycle once if within limits; if still unsafe, use the **alternate/gravity extension** method; do not attempt to force the gear.
- **Alternate / gravity extension:** per the expanded checklist; expect no retraction capability afterwards. · **Notes/model:** 🟧 gravity-extension modelling depth is uncertain `[VERIFY]`.
- **Brake / anti-skid fault:** use alternate braking per the expanded checklist, expect a longer rollout, avoid locked-wheel skids.
- **Tyre failure:** brief the cabin for a possible evacuation, minimise braking asymmetry, expect RFF standby as available.

## Ch 9 — Air / pressurisation / ice & rain

### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin-altitude warning, rapid ear/pressure sensation, EICAS excessive-cabin-altitude message. · **Actions (memory, Ch 1):** oxygen masks on, crew comms established; **emergency descent** — thrust idle, speedbrakes open, gear extended as a drag device below its speed limit `[VERIFY]`, target 10,000 ft/MSA; squawk 7700, PA to cabin. Then work the pressurisation-fault items on the expanded checklist. · **Notes/model:** 🟧 the gear-as-drag-device technique is a genuinely distinctive feature of this type — confirm the add-on's gear-speed limit and drag modelling support it realistically before training to it `[VERIFY]`.

### Pack / bleed fault
- **Actions:** per the expanded checklist, expect single-pack operation and possibly an altitude restriction; monitor cabin altitude.

### Anti-ice
- **Actions:** engine and wing anti-ice ON in icing conditions per the expanded checklist; note the bleed-air and performance penalty.

## Ch 10 — Navigation, instruments & autoflight

### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, ADC-fault EICAS message. · **Actions (memory, Ch 1):** AP/FD off, pitch+thrust reference `[VERIFY]`, identify the faulty source, select the remaining/backup air-data source if available, then troubleshoot. · **Notes/model:** 🟧 air-data-fault logic depth varies by add-on.

### IRS fault, display loss, AP/FD fault, GPS/RNP loss
- **Actions:** revert to the remaining source/display; hand-fly if the autopilot/flight director is lost — there is no autothrottle to lose in addition; for an RNP/GPS-position loss, downgrade the navigation capability and advise ATC. · **Notes/model 🟧:** depth varies by add-on.

## Ch 11 — Communications

- **Radio / audio failure:** select the alternate radio/audio path, squawk 7600, follow the lost-communications procedure for the airspace/clearance in use.
- **Transponder fault:** select the alternate transponder, advise ATC. · **Notes/model 🟧:** basic function only on most add-ons.

## Ch 12 — Miscellaneous

- **Door / slide fault:** confirm via EICAS before pressurising; disarm slides before opening any door on the ground.
- **Windshield / heat, water/waste, bird strike, volcanic ash:** stabilise, assess any damage or engine effect; for volcanic ash, exit the cloud (descend/turn away), minimise thrust changes, and land at the nearest suitable airport.
- **Ditching (non-annunciated, follow the expanded checklist if it occurs):** squawk 7700, cabin signs on, ELT on, packs/bleeds off, select the maximum usable flap setting, gear up, reduce onboard fuel if time permits, land parallel to the swell.
- **Unlawful interference:** squawk 7500, follow the security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance

- **Abnormal-configuration landing distance & approach-speed increments** (flap/slat asymmetry, alternate braking, gear alternate-extended): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and a higher approach speed `[VERIFY]`.
- **Driftdown / one-engine-inoperative ceiling:** on engine loss, fly the driftdown profile to the one-engine-inoperative ceiling — materially lower than the type's all-engine service ceiling of ~FL370 (Intro §6). This type flies short regional sectors with no K Global EDTO rule time applicable (Dispatch §5), so the driftdown consideration is a performance/terrain item rather than an EDTO en-route-alternate discipline. 🟩
- **Overweight landing:** if landing above the maximum landing mass, use the overweight-landing technique — a controlled, low rate-of-descent touchdown — and expect a post-landing inspection requirement; specific rate-of-descent and mass figures are aircraft/variant-specific and remain `[VERIFY]` pending the VAMSYS weight-variant confirmation (Intro §5).
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Evacuation 🟥

- **Recognition/trigger:** commander's decision after fire, ditching, or a major failure on the ground or immediately after landing.
- **Actions (memory, Ch 1):** aircraft stopped, parking brake set; shut down engines and APU; if evacuation is ordered, command EVAC per the secure-cockpit flow, cut fuel and non-essential electrics while preserving essential comms/lighting; declare an emergency, alert RFF.
- **Crew coordination:** flight crew secures the aircraft; cabin crew directs the evacuation to usable exits (assessing fire location and wind), accounts for all occupants, and moves everyone upwind/clear.
- **Notes / model 🟧:** basic engine/APU shutdown and secure-flow logic is a reasonable expectation; the passenger evacuation itself is not simulated on either candidate model — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Embraer ERJ 145 (E145) — https://skybrary.aero/aircraft/e145
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- EASA — Type Certificate Data Sheet, Embraer EMB-135/EMB-145 family — https://www.easa.europa.eu/en/document-library/type-certificates
- Embraer — commercial aircraft (public) — https://www.embraer.com

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered ERJ-145 abnormal/emergency reference re-expressed; memory items 🟥 (emergency descent with gear-as-drag-device, unreliable airspeed, engine fire, erroneous stall-protection actuation, trim runaway, evacuation); EICAS/conventional-flight-control/no-autothrottle facts carried through from Sim-Model and Checklist; figures `[VERIFY]`. |
