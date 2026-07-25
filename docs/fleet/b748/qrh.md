<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  B748 Boeing 747-8 (8i / 8F)
  Thorough, chaptered non-normal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory/recall item — immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# B748 — Boeing 747-8 · QRH

**B748 / 747 family** · flown as SSG 747-8 (8i Intercontinental / 8F Freighter) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for non-normal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's EICAS/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror the Boeing non-normal grouping, adapted for a **four-engine (quad)** type. Flag legend 🟥 memory/recall item · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Boeing philosophy: **EICAS annunciates; the crew flies the aircraft first, then runs the non-normal checklist for the EICAS message.** A small set of **memory (recall) items** (Ch 1, 🟥) are done from memory with no reference; everything else is read-and-do from the QRH after the flight path is secure. PF flies/manages thrust & config on **all four engines**; PM reads and actions the checklist.
- **Recall vs read-and-do:** the RECALL switch redisplays EICAS alerts. Only the Ch 1 items are memorised; all other chapters are reference checklists.
- **Quad-specific note 🟩:** with four engines, a single engine-out is a materially smaller performance event than on a twin, but the type also carries **quad-specific memory items** not found on the twins in this fleet — notably a **multiple-engine flameout/stall** drill (Ch 1/Ch 7) and per-engine (1/2/3/4) fire and failure handling.
- **Model caveat 🟧:** SSG 747-8 is study-level and drives real EICAS logic for most items, but some deep or compound non-normals — especially multi-engine or asymmetric quad scenarios — may **not trigger or fully resolve** on the XP11 build. Where a step depends on failure logic the model may not simulate, it is flagged 🟧. Confirm behaviour on the flown build `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory / recall items (immediate action) 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Airspeed unreliable** 🟥 | Autopilot/autothrottle/flight-director OFF; set **known pitch + thrust** (e.g. flaps-up wings-level attitude + climb/cruise thrust as applicable) `[VERIFY]`; keep clean if able | Level off, identify the good source, use standby/alternate, read Ch 10 |
| **Cabin altitude / rapid depressurization → Emergency descent** 🟥 | **Oxygen masks / crew comms** ON; verify packs on and outflow valves closed; if cabin uncontrollable, **initiate emergency descent** — thrust idle (all 4), speedbrake, descend at max appropriate speed (VMO/MMO as structure permits), turn off track if needed, target **FL140 / MSA, whichever is higher** `[VERIFY]` | Signs on, PA, MAYDAY, read Ch 2/Ch 16 |
| **Engine fire / severe damage or separation (1/2/3/4)** 🟥 | Thrust lever (affected engine) IDLE; **fuel control switch CUTOFF**; **engine fire switch PULL** (rotate to discharge per interval) | Confirm fire out, secure, divert; read Ch 7/Ch 8 |
| **Multiple engine flameout or stall** 🟥 | Continuous ignition ON (as applicable); fuel control switches (affected engines) **CUTOFF then RUN** to attempt relight; if EGT rises rapidly approaching limit, retard/repeat as needed | Establish best glide/relight speed, assess restart envelope, plan driftdown/forced landing; read Ch 7 |
| **Aborted engine start** 🟥 | Fuel control switch (affected engine) **CUTOFF**; dry-motor per limits | Log event, reattempt per checklist or dispatch with reduced engine count per MEL |
| **Traffic (TCAS RA)** 🟥 | Disconnect autopilot as required; **follow RA guidance** promptly and smoothly; do not manoeuvre opposite the RA | Return to clearance when "clear of conflict", advise ATC |
| **Ground proximity / terrain (PULL UP)** 🟥 | **Max thrust (all engines available), wings level, rotate toward pitch-limit / stick-shaker**; do not descend until terrain cleared | Continue climb to safe altitude, read Ch 16 |
| **Windshear** 🟥 | **Max thrust, wings level, pitch for climb (toward pitch-limit if needed)**; do not change config until clear | Escape, report, reassess approach/departure |
| **Rejected takeoff (before V1)** 🟥 | **Thrust idle (all 4), max braking (autobrake RTO), speedbrake, reverse (as available)**; maintain directional control | Stop, assess (fire/evac Ch 8/Ch 17), advise ATC |

*Memory-item modelling 🟧: SSG 747-8 simulates airspeed faults, engine fire/cutoff/discharge and depressurisation credibly on most builds; the multiple-engine-flameout drill and deep quad asymmetric logic may be abstracted — verify each triggers before training to it `[VERIFY]`.*

## Ch 1a — General (doors, oxygen, misc annunciations)
- **Door not closed/locked (entry/cargo/access):** confirm before pressurising; do not pressurise with a DOOR message unresolved. **8F:** confirm both the main-deck side cargo door and the nose-loading door are closed/locked — these are additional door pages not present on the 8i.
- **Crew oxygen low:** verify quantity vs dispatch minimum; consider altitude implications.
- **Notes/model 🟧:** door-page + oxygen logic generally modelled; confirm the 8F's extra door pages on build `[VERIFY]`.

## Ch 2 — Air systems / pressurization
- **CABIN ALTITUDE (excess cabin alt):** don masks/comms; if uncontrollable → emergency descent (Ch 1). Then manage pressurisation config.
- **Bleed leak / bleed off (per engine, wing, body):** isolate the affected bleed per checklist; expect single-source air, possible altitude limit.
- **Pack / ALTN vent / cabin temperature:** run affected-pack checklist; single- or dual-pack ops, monitor cabin alt and temperature.
- **Notes/model 🟧:** cabin-alt + emergency-descent behaviour modelled; deep bleed-isolation across four engines may be partial `[VERIFY]`.

## Ch 3 — Anti-ice / rain
- **Eng anti-ice on/leak/loss (per engine, 1–4):** manage per checklist; note bleed/performance penalty with anti-ice on, more pronounced with fewer available bleed sources.
- **Wing anti-ice:** ON in icing; watch performance/bleed cost.
- **Notes/model 🟧:** anti-ice effects modelled at surface level; confirm per-engine leak logic.

## Ch 4 — Autoflight
- **Autopilot / autothrottle / flight-director disconnect or fault:** hand-fly as required; re-engage remaining channels; for autothrottle loss manage thrust manually across all engaged engines.
- **Notes/model 🟧:** autoflight disconnects modelled; compound fault depth may vary.

## Ch 5 — Communications
- **Radio / audio failure:** select alternate radio/audio path, **squawk 7600**, follow lost-comms procedure for the clearance/airspace.
- **Notes/model 🟧:** basic on the build.

## Ch 6 — Electrical
- **AC bus / generator off (per engine 1–4, APU):** run affected-bus checklist; manage electrical load, monitor remaining sources — losing one of four generators is a smaller event than on a twin but still requires load management.
- **Backup generator / standby system:** confirm essential/standby busses powered; expect load-shed; APU start if available.
- **Battery only:** minimum essential loads; expedite as required.
- **Notes/model 🟧:** SSG models bus transfers and generator faults; some reversions may be abstracted `[VERIFY]`.

## Ch 7 — Engines / APU

### Engine fire / severe damage / separation (1/2/3/4) 🟥
- **Recognition:** FIRE ENG (n) EICAS, N1/EGT/vibration anomaly, yaw toward the affected side.
- **Actions:** thrust lever (affected engine) IDLE · **fuel control switch CUTOFF** · **engine fire switch PULL** · discharge agent (second bottle if still burning after the interval) · secure, divert.
- **Notes/model:** fire-switch + agent logic modelled on SSG; confirm interval logic 🟧 `[VERIFY]`.

### Engine failure / flameout / in-flight start
- **Recognition:** N1/N2 rollback, EGT/FF drop, ENG FAIL EICAS, yaw.
- **Actions:** maintain control (rudder for asymmetry — smaller correction than a twin with one of four out) · confirm failed engine · secure per checklist · assess relight envelope (windmill/starter-assist) · **driftdown to the applicable engine-out ceiling** · consider EDTO/adequate-aerodrome planning (Ch 16/Dispatch §5) even though the quad has no diversion-time limit.
- **Notes/model:** single-engine handling modelled on SSG 🟧; multi-engine asymmetry depth to confirm.

### Multiple engine flameout or stall 🟥
- **Recognition:** more than one engine rolling back/flaming out — commonly linked to volcanic ash, severe icing, fuel contamination or an unrelated common cause.
- **Actions (memory, Ch 1):** continuous ignition ON as applicable · fuel control switches (affected engines) **CUTOFF then RUN** to attempt relight · if EGT approaches the limit on relight, retard/repeat · establish best glide/relight speed · plan driftdown/forced landing · declare emergency.
- **Notes/model 🟧:** this is a genuinely quad-specific drill (a twin's equivalent is total thrust loss; here it can be partial across 2–4 engines) — verify the model supports a realistic multi-engine-out scenario before training to it `[VERIFY]`.

### Aborted engine start / autostart / limit-surge-stall
- **Actions:** for hot/hung start or aborted start → fuel control switch CUTOFF, dry-motor per limits, log; for surge/stall reduce thrust on the affected engine; EEC mode as required.
- **Notes/model:** start-abuse logic present 🟧; confirm depth per engine position.

### APU limit / shutdown
- **Actions:** per checklist; if APU fire → Ch 8.

## Ch 8 — Fire protection
- **FIRE ENG (1/2/3/4) 🟥:** memory sequence Ch 1/Ch 7 — cutoff, fire switch, discharge.
- **FIRE APU:** APU fire switch, discharge agent, APU shutdown.
- **Engine tailpipe fire:** motor the engine (no agent for a tailpipe fire) per checklist; do not discharge into the tailpipe.
- **Smoke / fire / fumes (flight deck/cabin):** don masks/goggles 100%, isolate suspected source (electrical load-shed / bleed isolation), consider emergency descent and **land at nearest suitable**.
- **Cargo fire — lower deck (8i and 8F):** confirm, **discharge cargo agent**, land ASAP, isolate per checklist.
- **Cargo fire — main deck (8F only) 🟥:** the 8F carries a main-deck freighter compartment with its own detection/suppression logic distinct from the lower-deck system on both variants — confirm the correct (main-deck vs lower-deck) fire checklist before actioning; **discharge the main-deck agent**, land ASAP. Main-deck fire on a freighter is a materially different scenario from a belly-hold fire on the 8i — do not apply the 8i lower-deck-only drill to an 8F main-deck event. 🟥 `[VERIFY]`
- **Notes/model 🟧:** lower-deck cargo agent modelled on SSG; main-deck (8F) fire-system depth not independently confirmed `[VERIFY]`.

## Ch 9 — Flight controls
- **STABILIZER / runaway or jam:** control column/manual trim per checklist; if runaway, cut the affected trim path; expect trim-limited handling.
- **Auto speedbrake / spoiler fault:** per checklist; manual speedbrake as required.
- **Flap / slat disagree or jam:** stop at safe config, compute higher approach speed & landing distance (Ch 16), plan a longer runway — the 747-8's long field length (Intro §6) leaves less margin for a flap-limited approach.
- **Flight-control mode degradation:** expect a secondary/reduced control mode with fewer protections — hand-fly, plan a stabilised, flapped approach at higher VREF.
- **Notes/model:** stab/speedbrake faults modelled 🟧; confirm control-mode reversion depth on build.

## Ch 10 — Flight instruments / displays
### Airspeed unreliable / ADIRU fault 🟥
- **Recognition:** IAS/ALT disagree, speed flags, ADIRU/attitude fault.
- **Actions (memory, Ch 1):** AP/AT/FD OFF, **pitch + thrust** reference `[VERIFY]`, identify the good source, use standby/alternate; then troubleshoot.
- **Notes/model:** SSG models ADIRU/attitude faults 🟧 — verify.
### ALTN attitude / display select / baro-set disagree / instrument-source loss
- **Actions:** revert to remaining sources/displays; select alternate attitude/source; resolve baro disagreement; hand-fly if displays degraded.
- **Notes/model 🟧:** depth varies by build.

## Ch 11 — Flight management / navigation
- **FMC message / position or nav degradation / RNP-GPS loss:** cross-check position, downgrade nav capability, **advise ATC** and select a lower RNP as required; hand-fly LNAV if lost.
- **Route-file / FMC load fault 🟧:** if the FMC will not accept a plan, check the route-file format first (Sim-Model §3 — native XP11 `.fms` is not accepted) before assuming a nav-system fault.
- **Notes/model 🟧:** FMC fault depth model-dependent `[VERIFY]`.

## Ch 12 — Fuel
- **Fuel imbalance:** open **crossfeed**, balance per procedure, identify cause (leak vs asymmetric burn across up to four tanks/engines).
- **Fuel leak:** if a leak is suspected, **do not** crossfeed blindly; isolate per checklist, reassess fuel/range and divert.
- **Low level / centre-tank / transfer fault:** manage transfer pumps and centre-tank scheduling; gravity feed if required; recompute reserves (Dispatch §3/§5).
- **Notes/model 🟧:** crossfeed/centre-tank logic present on SSG; confirm across all four engine feeds `[VERIFY]`.

## Ch 13 — Hydraulics
- **Systems:** four independent hydraulic systems (one per engine position), each with engine-driven and electric/air demand pumps. Single- or even double-system loss is more tolerable on this type than on a twin's fewer circuits, given the redundancy; multi-loss still degrades flight controls, gear and braking.
- **Single-system loss:** HYD EICAS · manage per checklist · note affected surfaces/brakes.
- **Multiple-system loss:** expect **flight-control degradation**, alternate/gravity gear, alternate braking — cross-ref Ch 9/Ch 14.
- **Notes/model 🟧:** SSG models the four systems and demand pumps; some reversions may be partial `[VERIFY]`.

## Ch 14 — Landing gear / brakes / tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **alternate (gravity/free-fall) extension**; do not force. The 747-8's multi-truck main gear (four main trucks) means confirm each truck/position on the gear synoptic, not just an overall "3 green" summary.
- **Alternate extension:** per checklist; expect no retract afterwards.
- **Antiskid / autobrake / brake source / brake temp:** alternate braking, modulate manually, longer rollout; watch brake temperature after heavy braking at high landing weight (Intro §5, MLW class).
- **Tyre failure / gear-up or partial:** brief evacuation, RFF as available (Cat 10, Intro §4), minimise braking asymmetry.
- **Notes/model 🟧:** gravity extension + brake logic modelled on SSG; confirm multi-truck gear representation on build.

## Ch 15 — Warning systems / EICAS config
- **CONFIG warnings (flaps / stabilizer / spoilers / parking brake / rudder / gear):** resolve the offending configuration before takeoff/landing; a CONFIG warning blocks a safe takeoff.
- **Altitude alert / airspeed low / altitude callouts / warning-system fault:** cross-check and correct; treat a warning-system fault as loss of that protection.
- **Notes/model 🟧:** config-warning logic modelled; some warning-system faults may not simulate.

## Ch 16 — Abnormal & emergency performance
- **Abnormal-config landing distance & VREF increments** (flap/slat-less, control-mode degraded): compute via the sim/OFP performance tool for the flown config — do not guess; use a longer runway and higher approach speed `[VERIFY]`. The 747-8's already-long field length (Intro §6) leaves reduced margin for a degraded-config landing — confirm the field before committing.
- **Driftdown / engine-out ceiling:** on engine loss, follow driftdown to the applicable ceiling for the number of engines remaining; for EDTO/adequate-aerodrome planning this feeds the en-route-alternate/critical-fuel check — **dispatch discipline, not sim-modelled** (Dispatch §5, OM E), even though the quad carries no ETOPS diversion-time limit. 🟥
- **Overweight landing:** if landing above MLW (~312,100 kg 8i / ~346,100 kg 8F `[VERIFY]`), use overweight-landing technique/speed, expect longer distance, inspection required.
- **Code F ground constraint 🟥:** any diversion or return must still land at a **Code F-capable** field (Intro §4) — an emergency does not waive the wingspan/stand constraint at the diversion aerodrome; confirm Code F suitability as part of the divert decision where time permits.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 17 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire/ditching/major failure.
- **Actions (memory, Ch 1-family):** aircraft **stopped**, parking brake set; **cabin crew alert**; shut down **all engines and APU** (fuel control switches CUTOFF); if evacuation ordered → **EVAC command/signal**, cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft, cabin crew direct evacuation to usable exits (assess fire side/wind), account for all, move upwind. **8F:** no passengers — crew-only evacuation via flight-deck/crew-rest egress; confirm main-deck cargo does not block the escape path.
- **Notes/model 🟧:** SSG models engine/APU shutdown and secure; passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Boeing 747-8 (B748) — https://skybrary.aero/aircraft/b748
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Rejected Take Off (general) — https://skybrary.aero/articles/rejected-take-off
- SSG — Boeing 747-8 Inter Anniversary Edition product page (simulated-systems scope) — https://store.x-plane.org/B-747-8-Inter-Anniversary-Edition_p_1079.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered Boeing 747-8 non-normal/emergency reference re-expressed (EICAS grouping, four-engine); memory/recall items 🟥 (airspeed unreliable, cabin-alt/emergency descent, engine fire ×4, multiple-engine flameout, aborted start, TCAS, GPWS/terrain, windshear, RTO, evacuation); 8F main-deck cargo-fire and door items separated from 8i lower-deck; Code F ground constraint restated at Ch 16; figures `[VERIFY]`. |
