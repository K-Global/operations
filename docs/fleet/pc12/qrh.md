<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  PC12 Pilatus PC-12
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# PC12 — Pilatus PC-12 · QRH

**PC12 / Pilatus PC-12** · flown as Carenado PC-12 HD Series 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's own AFM/checklist is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**
>
> **This document is NOT a jet QRH scaled down — it is built on a different logic. This is a single-engine aircraft: an engine failure is a total loss of thrust, and the correct response is a glide/forced-landing sequence, not a one-engine-inoperative diversion.** There is no ETOPS/EDTO concept, no driftdown-to-a-lower-ceiling-and-continue-on-one-engine case, and no "the other engine gets you there" logic anywhere in this file. Contrast this directly against the E35L QRH in the same Executive group, which is a genuine twin and where engine failure is a controllability/diversion event. **Do not cross-apply either document to the other type.** See also Intro §3/§7 and Dispatch §5 — K Global's own OM E catalogue does not yet define a dedicated single-engine commercial-ops policy; this QRH does not invent one, it flags the gap where it matters (Ch 0, Ch 12).

---

## Ch 0 — Using this QRH
- Philosophy for a single-engine, single-pilot-capable aircraft: **fly the aircraft, then work the problem** — with one pilot possibly alone in the cockpit, task prioritisation (aviate → navigate → communicate) matters more here than crew-coordination choreography. Where two pilots are crewed, PF flies, PM reads/actions.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book — most critically, the engine-failure feathering/glide sequence, because there is no time to read a checklist while establishing best glide with the only engine gone.
- **Model caveat 🟥:** the Carenado PC-12 HD Series' fidelity for feathered-prop drag reduction and glide performance is **not confirmed** (Sim-Model §2–§3). If the model does not degrade credibly on a simulated engine failure, in-sim training of Ch 1/Ch 2 has limited value and should be supplemented by ground/paper review of the published procedure.
- **OM E gap, restated:** no current OM E Operations document defines K Global's single-engine commercial-ops policy (forced-landing-site/terrain screening, any night/IMC/overwater restriction some authorities apply to single-engine commercial turboprop operations). This QRH gives the aircraft-handling procedure; the operational-policy question is a separate, still-open item (Ch 12).
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Engine failure in flight** 🟥🟥 | **Establish best-glide pitch attitude/speed immediately** `[VERIFY — speed]`; **condition lever to CUT-OFF/FEATHER** to feather the propeller and reduce drag; select the nearest suitable landing area (open field, road, water as a last resort); **MAYDAY**, transponder 7700 | Attempt a relight only if time/altitude clearly permit per the flow (Ch 2); if not, commit to the forced landing — flaps/gear per the forced-landing sequence, brief occupants, secure fuel/electrics before touchdown, read Ch 13 |
| **Engine failure before rotation / on ground** 🟥 | Power lever IDLE, brake to stop; if overrun/collision risk, condition lever CUT-OFF | Secure aircraft, evacuate if warranted |
| **Stall warning (stick shaker) / stall (stick pusher)** 🟥 | **Do not fight the pusher** — reduce angle of attack, add power, wings level; recover, then clean up | Monitor speed margin, resume flight path, read Ch 7 |
| **Rapid decompression / cabin-altitude warning** 🟥 | Oxygen masks ON (crew, and cabin occupants if fitted); descend toward **FL100/MSA**; on the NGX-generation avionics an automatic emergency-descent mode may engage if fitted and pilot input is not detected 🟧 `[VERIFY — avionics variant]` | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire in flight** 🟥 | Condition lever CUT-OFF/FEATHER (this both isolates fuel to the fire **and** is the correct engine-failure response, since the only engine is now shut down); use the hand fire extinguisher if the source is reachable and safe to approach; this becomes an engine-failure/glide sequence (above) | Establish best glide, forced-landing sequence, read Ch 2/3/13 |
| **Evacuation (post forced-landing or on the ground)** 🟥 | Aircraft stopped; condition lever CUT-OFF, fuel/electrics secured per flow; direct occupants clear, upwind if fire risk | ELT confirmed, account for all occupants, read Ch 14 |

*Memory-item modelling 🟥🟧: the engine-failure feathering/glide sequence is the single most important item in this table to verify against the flown model before relying on it for training (Sim-Model §2–§3, §5).*

## Ch 2 — Powerplant (single Pratt & Whitney Canada PT6A-67P)

### Engine failure / flameout in flight — the aircraft's defining non-normal 🟥
- **Recognition:** torque/ITT/NG rollback or unwind, fuel-flow drop, propeller behaviour change (windmilling unless feathered), yaw/pitch change from thrust loss.
- **Actions:** establish **best-glide speed** immediately (memory, Ch 1) · **condition lever to CUT-OFF/FEATHER** — feathering the propeller significantly reduces drag versus a windmilling prop and materially extends glide range/time; do not delay this step · select landing area (open field, road; water only as a last resort and only if no better option exists) · brief occupants · assess restart only if altitude/time margin is genuinely available, per the flow — do not let a restart attempt consume the altitude needed for the forced landing itself.
- **This is fundamentally different from an OEI event on a twin** (contrast the E35L QRH): there is no remaining engine, no driftdown-and-continue, and no diversion to a distant suitable airport unless glide range genuinely permits reaching one. Plan for **off-airport landing** as the default expectation once the engine is confirmed failed and altitude/position do not favour a runway.
- **Notes / model 🟥:** feather-drag and glide-ratio fidelity on the Carenado model is **not confirmed** (Sim-Model §2) — this is the training-value-critical item for this type.

### Abnormal start / hot start
- **Recognition:** ITT exceeding the start limit, hung/stagnant NG, no light-off.
- **Actions:** abort the start (condition lever CUT-OFF, motor to clear per flow), allow cooldown, log the exceedance before any further start attempt.
- **Notes/model:** start-abuse/over-temperature logic depth not confirmed 🟧.

### Torque / ITT / NG limit exceedance in flight
- **Recognition:** parameter above the published limit for the selected power setting.
- **Actions:** reduce power to restore the parameter within limits; if it cannot be controlled, treat as an impending failure and plan accordingly (nearest suitable landing); monitor trend, do not simply accept a sustained exceedance.

### Propeller / governor malfunction
- **Recognition:** uncommanded RPM change, overspeed, or failure to respond to the condition/power lever.
- **Actions:** per the flow, reduce power to control RPM/torque, plan a precautionary landing if the malfunction cannot be resolved.

## Ch 3 — Fire, smoke & fumes
### Engine fire in flight 🟥
- **Recognition:** fire warning/indication, abnormal smoke from the engine compartment.
- **Actions:** condition lever CUT-OFF/FEATHER (isolates fuel and shuts down the only engine — this converts the event into the Ch 1/Ch 2 engine-failure/glide sequence); use the aircraft's hand fire extinguisher only if the source is accessible and it is safe to do so — **the PC-12 does not carry a built-in engine fire-suppression bottle system in the way a jet's engine nacelle does** 🟧 `[VERIFY]`; land/forced-land as the failure sequence dictates.
### Cockpit/cabin smoke or fumes
- **Recognition:** smell/smoke in the cabin. · **Actions:** ventilate as able, isolate suspected electrical source (load-shed non-essential busses), land at the nearest suitable field.
- **Notes/model:** smoke-source logic depth not confirmed 🟧.

## Ch 4 — Electrical
- **Systems:** a single engine-driven generator plus battery — there is **no second engine-driven source to fall back on**, unlike a twin's dual-generator architecture (contrast E35L QRH Ch 4). **No APU** is fitted to provide backup electrical power in flight.
- **Generator failure:** battery-only operation has a limited duration — minimise electrical load immediately (shed non-essential avionics/systems), plan to land before the battery is depleted.
- **Notes/model:** battery-endurance/load-shed logic not confirmed 🟧 `[VERIFY]`.

## Ch 5 — Landing gear, flaps & flight controls (electric actuation)
- **The PC-12 uses electrically-actuated landing gear and flaps, not a hydraulic system** — a genuine point of difference from most comparable aircraft and from every jet in the Executive-unit fleet.
- **Gear/flap actuator fault:** recognise via the gear/flap position indication disagreeing with the selector; use the alternate/emergency extension method per the flow if the primary electric actuation fails; do not force a mechanism that is not moving normally.
- **Trim runaway / flight-control anomaly:** disconnect the affected trim/autopilot function per the flow, fly manually, retrim as needed.
- **Notes/model 🟧:** electric-actuator failure-mode fidelity (vs a generic/borrowed hydraulic-style fault) not confirmed, Sim-Model §4.

## Ch 6 — Fuel
- **Tank imbalance (wing-to-wing, not engine-to-engine):** the single engine draws from both wing tanks; an imbalance is a tank-management issue, not an inter-engine crossfeed issue as on a twin. Manage per the flow, identify cause (uneven transfer vs a leak).
- **Suspected leak:** isolate the affected tank per the flow, reassess remaining fuel/range, land at the nearest suitable field rather than continuing the planned routing.

## Ch 7 — Stall protection, flight controls & handling
### Stall warning / stick shaker / stick pusher 🟥
- **Recognition:** aural stall warning and control-column shake at a margin above stall speed; if ignored, an automatic nose-down pitch input (the "pusher") follows. This dual-computer, dual-angle-of-attack-sensor protection system is unusual for an aircraft of this class — treat it as a genuine safety system, not a nuisance to override.
- **Actions (memory, Ch 1):** do not fight the pusher — reduce angle of attack, add power, wings level, recover, then re-establish the intended flight path.
- **Notes/model 🟧:** presence and correct triggering logic on the Carenado model not confirmed — verify before stall-recovery training (Sim-Model §4).

## Ch 8 — Air / pressurisation / ice protection
### Rapid decompression / cabin-altitude warning 🟥
- **Recognition:** cabin-altitude warning horn/indication, ear/climb sensation. · **Actions (memory, Ch 1):** oxygen masks ON, descend toward **FL100/MSA**; on the later NGX-generation avionics an automatic emergency-descent mode may be fitted and may engage without pilot input if none is detected — confirm applicability to K Global's delivered sub-variant 🟧 `[VERIFY]`. · **Notes/model:** depressurisation-event fidelity not confirmed 🟧.
### Bleed-air / pressurisation-source fault
- **Actions:** per the flow; because pressurisation air is drawn from the single engine, a pressurisation-source fault ties directly back to engine health — cross-check Ch 2.
### Icing (pneumatic boots, prop/engine-inlet anti-ice)
- **Actions:** cycle boots and select anti-ice per the flow when in icing conditions; monitor performance penalty; exit icing conditions if accretion is significant.

## Ch 9 — Navigation, instruments & autoflight
- **Display / avionics fault:** revert to remaining displays/sources; hand-fly if autoflight is lost — a materially higher single-pilot workload consideration than on a two-crew jet.
- **GPS/RNP degradation:** downgrade navigation capability, advise ATC.
- **Notes/model 🟧:** avionics-variant match (Primus Apex vs a simpler panel) not confirmed, Sim-Model §2.

## Ch 10 — Communications
- **Radio failure:** select alternate radio path, squawk 7600, follow lost-comms procedure for the airspace/clearance — single-pilot workload management is the key difference from the two-crew jets.

## Ch 11 — Miscellaneous
- **Door fault:** confirm indication before flight/pressurising.
- **Bird strike:** assess damage, especially to the single engine/propeller — any engine-parameter abnormality after a strike should be treated with a precautionary landing bias given there is no second engine.
- **Unlawful interference:** squawk 7500, follow security procedure.

## Ch 12 — Single-engine operating-policy gap and off-airport/short-strip considerations 🟥

- **No K Global single-engine commercial-ops policy yet exists in OM E** (Intro §7, Dispatch §5). This QRH provides the aircraft-handling procedure for an engine failure (Ch 1/Ch 2); it does **not** define, and must not be read as defining, K Global's route/terrain screening policy, night/IMC restriction (if any authority-mandated), or overwater carriage rules for single-engine commercial passenger flights. Flagged for the OM open-items roll-up.
- **Forced-landing-site planning is a route-specific discipline**, not a fixed procedure — pilots should maintain situational awareness of suitable off-airport landing options along the route given the type's short/regional range and possible unpaved-strip network use (Intro §3, Dispatch §6).
- **Ditching:** if a forced landing over water is unavoidable, treat water only as the last-resort option per Ch 1; no K Global-specific ditching procedure or equipment fit is confirmed for this type 🟧 `[VERIFY]`.

## Ch 13 — Forced-landing sequence (expanded reference) 🟥
- Confirm engine failure, feather (Ch 1/Ch 2), establish best glide.
- Select and commit to a landing area — favour open, obstacle-free terrain; assess wind and surface.
- Configure per the forced-landing flow: gear and flaps as briefed for the chosen surface (a paved runway favours normal gear-down landing; rough/unknown terrain may favour a gear-up decision per the flow — confirm published guidance `[VERIFY]`), secure fuel (condition lever CUT-OFF) and non-essential electrics prior to touchdown, brief occupants, MAYDAY/transponder 7700 maintained as long as practical.
- After touchdown: secure the aircraft, evacuate if warranted (Ch 14), account for all occupants.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** post forced-landing, fire, or any condition requiring rapid egress.
- **Actions (memory, Ch 1):** aircraft stopped; condition lever CUT-OFF; fuel/electrics secured per flow; direct occupants to the nearest safe exit, move upwind of any fire.
- **Notes/model 🟧:** shutdown/secure flow plausible on the flown model; the occupant evacuation itself is not meaningfully simulated — train the flow and decision-making, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Pilatus Aircraft — PC-12 Technical Data — https://www.pilatus-aircraft.com/en/pc-12/technical-data
- SKYbrary — Pilatus PC-12 (PC12) — https://skybrary.aero/aircraft/pc12
- AOPA — Pilatus PC-12 aircraft guide — https://www.aopa.org/go-fly/aircraft-and-ownership/aircraft/pilatus-pc-12
- Wikipedia — Pilatus PC-12 — https://en.wikipedia.org/wiki/Pilatus_PC-12
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered single-engine turboprop abnormal/emergency reference built on a genuinely different logic from the twin-jet QRHs: engine failure = feather/glide/forced-landing (Ch 1, Ch 2, Ch 13), not a diversion; stall-protection system, electric gear/flap actuation, single-generator electrical architecture and no-APU condition all called out as points of real difference from the rest of the Executive-unit fleet; single-engine commercial-ops policy gap restated (Ch 0, Ch 12); memory items 🟥; feather/glide model-fidelity flagged 🟥 as the key training-value question (cross-ref Sim-Model). |
