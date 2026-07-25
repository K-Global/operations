<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  MD11 McDonnell Douglas MD-11F
  Thorough, chaptered non-normal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory/recall item — immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# MD11 — McDonnell Douglas MD-11F · QRH

**MD11 / MD-11 family** · flown as Rotate MD-11 (Freighter edition) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for non-normal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's own EAD/SD and checklist are authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror a generic widebody non-normal grouping, adapted for a **trijet freighter with a tail-mounted #2 engine and genuinely demanding pitch-handling characteristics**. Flag legend 🟥 memory/recall item · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Philosophy: **the EAD/SD annunciates; the crew flies the aircraft first, then runs the non-normal checklist for the alert.** A small set of **memory (recall) items** (Ch 1, 🟥) are done from memory with no reference; everything else is read-and-do after the flight path is secure. PF flies/manages thrust & config across **three engines**; PM reads and actions the checklist. **Crew complement is two pilots, no cabin crew, no flight engineer** — any procedure step written for a passenger cabin, cabin crew, or a flight-engineer panel does not apply on this type.
- **Trijet framing 🟩:** losing any **one** of three engines is a materially smaller event than a twin's single-engine-inoperative case (two engines remain) — but the MD-11's genuine handling sensitivity (§ below) is **independent** of engine count and applies on every approach and landing, engines-normal or not.
- **Handling-qualities framing 🟥 — read this before anything else.** This type has a smaller horizontal tailplane than its DC-10 predecessor and a cruise CG that shifts aft (a fuel-ballast tank in the stabilizer empties before landing to bring CG forward). This gives **reduced natural pitch damping**, compensated by the **Longitudinal Stability Augmentation System (LSAS)**. Standard landing speeds run **~10–20 kt faster** than comparable widebodies. The combination has been linked, publicly and repeatedly, to **flare/pitch-control difficulty and pilot-induced oscillation** on this type across its operational history — this is a genuine, well-documented 🟥 hazard item, not a training abstraction. Fly a stabilized approach at the correct reference speed, make smooth and measured pitch corrections, and do not attempt to "chase" the flight path in the flare (Ch 9, Ch 16).
- **Model caveat 🟧:** Rotate MD-11 is study-level and drives real EAD/SD logic for most items where the Freighter edition is confirmed installed (see Sim-Model). Whether the model reproduces **degraded handling with LSAS off/failed** is the single most safety-relevant open question in this pack — confirm behaviour on the flown build `[VERIFY]` before relying on it for handling training.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory / recall items (immediate action) 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Airspeed unreliable** 🟥 | Autopilot/autothrottle/flight-director OFF; set **known pitch + thrust** `[VERIFY]`; keep clean if able | Level off, identify the good source, use standby/alternate, read Ch 10 |
| **Cabin altitude / rapid depressurization → Emergency descent** 🟥 | **Oxygen masks / crew comms** ON (flight-deck only — no passenger cabin); if flight-deck altitude uncontrollable, **initiate emergency descent** — thrust idle, speedbrake, descend at max appropriate speed, turn off track if needed, target **FL100 / MSA** | MAYDAY, read Ch 2/Ch 12-manoeuvres |
| **Main-deck cargo fire (Class E-type compartment)** 🟥 | **Do not attempt to enter or access the main deck in flight**; shut off main-deck ventilation/air supply per checklist to starve the fire; don oxygen/smoke protection on the flight deck; **divert to the nearest suitable airport — land as soon as possible** | Brief ATC/company, plan an on-arrival main-deck assessment before any door is opened; read Ch 8 |
| **Engine fire / severe damage / separation (1, 2-tail, or 3)** 🟥 | Throttle (affected engine) CLOSED; **fuel control/start lever CUTOFF**; **engine fire handle PULL** (rotate to discharge per interval) | Confirm fire out, secure, divert; read Ch 8/Ch 7 |
| **Loss of two of three engines** 🟥 | Establish **best glide/relight speed on the remaining engine**; fuel control/start levers (affected engines) CUTOFF then RUN (relight attempt); APU/RAT electrical as available; set up for driftdown/single-engine approach planning | Read Ch 7; declare emergency; plan nearest suitable |
| **LSAS fail / degraded pitch handling** 🟥 | Recognise **reduced pitch damping / more sensitive elevator response**; **hand-fly smoothly, small measured corrections, avoid abrupt inputs**; do not chase the flight path; increase approach stabilisation margin | Brief the change in handling, plan a longer/less time-pressured approach, read Ch 9 |
| **Traffic (TCAS RA)** 🟥 | Disconnect autopilot as required; **follow RA guidance** promptly and smoothly; do not manoeuvre opposite the RA | Return to clearance when "clear of conflict", advise ATC |
| **Ground proximity / terrain (PULL UP)** 🟥 | **Max thrust (all available engines), wings level, rotate to pitch-limit / stick-shaker**; do not descend until terrain cleared | Continue climb to safe altitude, read Ch 12 |
| **Windshear** 🟥 | **Max thrust, wings level, pitch for climb (toward pitch-limit if needed)**; do not change config until clear | Escape, report, reassess approach/departure |
| **Rejected takeoff (before V1)** 🟥 | **Thrust idle, max braking (autobrake RTO), speedbrake, reverse**; maintain directional control | Stop, assess (fire/evac Ch 8/Ch 17), advise ATC |

*Memory-item modelling 🟧: Rotate MD-11 simulates airspeed/ADIRU faults, engine fire/cutoff/discharge, depressurisation and TCAS/GPWS on most builds; the **LSAS-off/degraded handling item is the most likely to be abstracted or absent even on a confirmed Freighter-edition model** — verify it actually reproduces degraded pitch handling before training to it `[VERIFY]`. Main-deck cargo-fire detection/ventilation-shutoff logic is a secondary open item.*

## Ch 1a — General (doors, oxygen, misc annunciations)
- **Door not closed/locked (main-deck side cargo door / forward, center, aft lower-deck cargo doors):** confirm before pressurising; do not pressurise with a door alert unresolved. No passenger doors exist on this type; three lower-deck door positions (one more than the twin freighters in this fleet).
- **Crew oxygen low:** verify quantity vs dispatch minimum (two-pilot crew only).
- **Notes/model 🟧:** door-page + oxygen logic generally modelled; confirm the three-lower-deck-door representation on the build.

## Ch 2 — Air systems / pressurization
- **CABIN ALTITUDE (excess flight-deck/pressurised-zone alt):** don masks/comms; if uncontrollable → emergency descent (Ch 1). Then manage pressurisation config. The main-deck cargo compartment is **not** part of the pressurised passenger-cabin design lineage — its ventilation is managed separately (Ch 8).
- **Bleed leak / bleed off (per engine, incl. #2 tail engine):** isolate the affected bleed per checklist; expect single/dual-source air, possible altitude limit.
- **Pack / ALTN vent / flight-deck temperature:** run affected-pack checklist; monitor flight-deck altitude and temperature.
- **Notes/model 🟧:** FlightFactor-class cabin-alt + emergency-descent behaviour is a reasonable public analogue; confirm bleed-isolation depth specifically on Rotate MD-11 `[VERIFY]`.

## Ch 3 — Anti-ice / rain
- **Eng anti-ice on/leak/loss (1, 2-tail, 3):** manage per checklist; note bleed/perf penalty with anti-ice on — the **#2 tail engine's S-duct inlet** is a distinct icing/anti-ice zone from the wing-mounted engines.
- **Wing anti-ice:** ON in icing; watch performance/bleed cost.
- **Windshield anti-ice/defog/wipers:** per checklist.
- **Notes/model 🟧:** anti-ice effects modelled at surface level; confirm per-engine (incl. #2) leak/anti-ice logic.

## Ch 4 — Autoflight
- **Autopilot / autothrottle / flight-director disconnect or fault:** hand-fly as required — **with heightened awareness of the type's reduced pitch damping** (§Ch 0); re-engage remaining channels; for autothrottle loss manage thrust manually across all three engines.
- **LSAS interaction with autoflight 🟥:** LSAS provides artificial pitch damping independent of the autopilot — an LSAS fault while hand-flying, or while the autopilot is engaged, both change handling; confirm which system(s) are active before assessing aircraft response.
- **Notes/model 🟧:** autoflight disconnects modelled; LSAS-autoflight interaction depth model-dependent `[VERIFY]`.

## Ch 5 — Communications
- **Radio / audio failure:** select alternate radio/audio path, **squawk 7600**, follow lost-comms procedure for the clearance/airspace.
- **Notes/model 🟧:** basic on the build.

## Ch 6 — Electrical
- **AC bus / generator off (per engine, incl. #2 tail):** run affected-bus checklist; manage electrical load, monitor remaining sources.
- **Backup/standby system:** confirm essential/standby busses powered; expect load-shed; APU start if available.
- **Battery / utility off:** minimum essential loads; expedite as required.
- **Notes/model 🟧:** Rotate MD-11 models bus transfers per its systems-depth marketing; confirm reversion depth `[VERIFY]`.

## Ch 7 — Engines / APU

### Engine fire / severe damage / separation (1, 2-tail, 3) 🟥
- **Recognition:** ENG FIRE alert, N1/N2/EGT/vibration anomaly, yaw (wing engines) or pitch/trim effect (tail engine — see below).
- **Actions:** throttle (affected engine) CLOSED · **fuel control/start lever CUTOFF** · **engine fire handle PULL** · discharge agent (second bottle if still burning after the interval) · secure, divert.
- **Tail (#2) engine distinction 🟥:** because #2 is mounted on the fuselage centerline via an S-duct through the vertical fin, its failure does **not** produce the classic wing-engine asymmetric yaw/roll — instead expect a **pitch/trim shift** from the altered thrust line and rear weight/CG effects, compounded by the type's already-reduced pitch damping (§Ch 0). Do not apply a wing-engine-failure mental model (rudder-for-yaw) reflexively to a #2 failure; assess the actual control response.
- **Notes/model:** fire handle + dual bottles modelled per Rotate's general systems scope 🟧; per-position (esp. #2) fidelity to confirm.

### Engine failure / flameout / in-flight start
- **Recognition:** N1/N2 rollback, EGT/FF drop, ENG FAIL alert, yaw (wing engine) or trim shift (#2).
- **Actions:** maintain control (rudder for wing-engine asymmetry; retrim for #2's pitch effect) · confirm failed engine · secure per checklist · assess relight envelope · **driftdown to the two-engine-inoperative-remaining ceiling** · adequate-aerodrome planning **only if a policy has been set for this leg** (Dispatch §5) — do not assume one.
- **Notes/model:** single-engine handling + driftdown modelled 🟧; per-position asymmetry fidelity to confirm.

### Loss of two of three engines 🟥
- **Recognition:** two engines rolled back/flamed out — commonly linked to a common cause (fuel contamination, severe icing, volcanic ash) or cascading failure.
- **Actions (memory, Ch 1):** establish best glide/relight speed on the remaining engine · fuel control/start levers (affected engines) CUTOFF→RUN (relight) · APU/RAT electrical as available · plan single-engine driftdown/forced landing · declare emergency.
- **Notes/model 🟧:** this is the trijet's genuinely severe engine case (a twin's equivalent is total thrust loss); verify the model supports a realistic dual-engine-out scenario before training to it `[VERIFY]`.

### Aborted engine start / autostart / limit-surge-stall
- **Actions:** for hot/hung start → CUTOFF, dry-motor per limits; for surge/stall reduce thrust on affected engine; log.
- **Notes/model:** start-abuse logic presence/depth to confirm 🟧.

### APU limit / shutdown
- **Actions:** per checklist; if APU fire → Ch 8.

## Ch 8 — Fire protection

### Main-deck cargo fire (Class E-type compartment) 🟥
- **Configuration note:** the MD-11F main deck is a large-volume cargo compartment with no passenger cabin above/around it and, consistent with freighter main-deck design generally, typically **no built-in extinguishing-agent discharge** for the main deck itself — protection relies on **smoke/fire detection**, **shutting off ventilating airflow**, and **excluding smoke/flame from the flight deck**, rather than a dischargeable bottle as used for the lower-deck holds.
- **Recognition:** MAIN DECK / CARGO FIRE-type alert, smoke indication.
- **Actions (memory, Ch 1):** **do not attempt to enter or access the main deck in flight** · shut off main-deck ventilation/air supply per checklist · don oxygen/smoke protection on the flight deck · **divert — land as soon as possible**.
- **Notes/model 🟧:** main-deck detection/ventilation-shutoff logic is the item most likely to be abstracted even on a confirmed Freighter-edition model — verify before training to it `[VERIFY]`.

### Lower-deck cargo fire (forward, center, or aft position)
- **Configuration note:** the MD-11 carries **three** lower-deck cargo positions (forward, center, aft) — one more zone to check than the twin freighters in this fleet. Each position has its own smoke/heat detection with associated **extinguishing-agent bottle discharge**.
- **Actions:** confirm the affected position, **discharge the associated cargo-hold agent bottle**, land ASAP, isolate per checklist.
- **Notes/model 🟧:** lower-deck detection/discharge modelled per Rotate's general systems scope; confirm all three positions represented on the build.

### FIRE ENG (1, 2-tail, 3) 🟥
- Memory sequence Ch 1/Ch 7 — cutoff, fire handle, discharge. Note the tail (#2) engine's fire-handle/bottle routing is a longer physical run (through the fin) than a wing engine's — a systems-depth item to confirm, not a crew-action difference.

### FIRE APU
- APU fire handle, discharge agent, APU shutdown.

### Engine tailpipe fire
- Motor the engine (no agent for tailpipe fire) per checklist; do not discharge into the tailpipe.

### Smoke / fire / fumes (flight deck)
- Don masks/goggles 100%, isolate suspected source (electrical load-shed / bleed isolation), consider emergency descent and **land at nearest suitable**.

- **Notes/model 🟧:** engine/APU fire + lower-deck cargo agent modelled per Rotate's general systems scope; main-deck (Class E-type) detection/ventilation logic is the freighter-specific item most likely to need verification `[VERIFY]`.

## Ch 9 — Flight controls 🟥 — the pack's central handling chapter

- **LSAS (Longitudinal Stability Augmentation System) — normal function:** compensates for the type's reduced natural pitch damping (smaller tailplane than the DC-10, aft-shifting cruise CG via a stabilizer fuel-ballast tank). LSAS engagement is treated as a **preflight/before-taxi memory check** (Checklist), not an optional system.
- **LSAS fail / degraded pitch handling 🟥 (memory, Ch 1):** recognise reduced pitch damping and a more sensitive elevator response; **hand-fly with smooth, small, measured corrections; avoid abrupt inputs and do not chase the flight path** — the historically documented risk on this type is **pilot-induced oscillation**, most acute in the landing flare. Increase the stabilised-approach margin (earlier stabilisation, more conservative go-around threshold) whenever LSAS status is in doubt.
- **STABILIZER / runaway or jam:** control column/manual trim per checklist; if runaway, cut the affected trim path; expect trim-limited handling — **cross-check against the loadsheet CG**, which interacts directly with this type's pitch sensitivity (Dispatch §4) more than on a conventional passenger jet with a less consequential CG range.
- **Auto speedbrake / spoiler fault:** per checklist; manual speedbrake as required.
- **Flap / slat disagree or jam:** stop at safe config, compute higher approach speed & landing distance (Ch 16), plan a longer runway — this type's landing speeds are already elevated versus comparable jets (Intro §6), so a flap/slat-limited approach compounds an existing margin issue.
- **Notes/model:** Rotate models LSAS switches/fail lights and standard flight-control logic per its published systems scope 🟧; **whether it reproduces the actual degraded handling qualities when LSAS is off/failed is unverified** — the pack's single highest-priority modelling question (Sim-Model §3).

## Ch 10 — Flight instruments / displays
### Airspeed unreliable / ADIRU fault 🟥
- **Recognition:** IAS/ALT disagree, speed flags, ADIRU/attitude fault.
- **Actions (memory, Ch 1):** AP/AT/FD OFF, **pitch + thrust** reference `[VERIFY]`, identify the good source, use standby/alternate; then troubleshoot.
- **Notes/model:** ADIRU/attitude fault logic present per general systems scope 🟧 — verify.
### ALTN attitude / display select / EFIS source select / baro-set disagree / instrument-source loss
- **Actions:** revert to remaining sources/displays; select alternate attitude/source; resolve baro disagreement; hand-fly if displays degraded.
- **Notes/model 🟧:** depth varies by build.

## Ch 11 — Flight management / navigation
- **FMC/FMS message / position or nav degradation:** cross-check position, downgrade nav capability, **advise ATC**; hand-fly if lost.
- **Notes/model 🟧:** dual-FMC fault depth model-dependent `[VERIFY]`.

## Ch 12 — Fuel
- **Fuel imbalance:** open **crossfeed**, balance per procedure, identify cause (leak vs asymmetric burn across three engines).
- **Fuel leak:** if a leak is suspected, **do not** crossfeed blindly; isolate per checklist, reassess fuel/range and divert.
- **Stabilizer ballast-tank transfer fault 🟥:** the type's cruise-CG design depends on fuel scheduling into/out of the horizontal-stabilizer tank (Intro §2/§6). A transfer-schedule fault directly affects both fuel balance **and** CG/pitch handling — treat this as a combined fuel-and-handling non-normal, not a fuel-only item; recompute the loadsheet CG implication, not just the fuel figure.
- **Low level / jettison:** manage pumps and tank scheduling; assess whether the config **can jettison** to reach a safe landing weight when required, per checklist; recompute reserves (Dispatch §3).
- **Notes/model 🟧:** crossfeed/tank-scheduling logic present per Rotate's general systems scope; **stabilizer-tank-fault handling-interaction behaviour is unverified** `[VERIFY]`.

## Ch 13 — Hydraulics
- **Systems:** three independent hydraulic systems, each with engine-driven and electric/air demand pumps (auto-commanded reserve/manual pump logic). Single-system loss is tolerable; multi-loss degrades flight controls, gear and braking.
- **Single-system loss:** hydraulic system alert · manage per checklist · note affected surfaces/brakes.
- **Loss of two:** expect **flight-control degradation**, alternate/gravity gear, alternate braking — cross-ref Ch 9/Ch 14; compounds the type's already-demanding pitch handling.
- **Notes/model 🟧:** three-system representation and demand-pump logic present per Rotate's general systems scope; confirm depth `[VERIFY]`.

## Ch 14 — Landing gear / brakes / tyres
- **Five-point gear 🟥:** nose gear + two wing-mounted main gears + a **center (2-wheel) gear** under the rear fuselage — a trijet/DC-10-heritage configuration not shared by any twin or quad type in this fleet. Confirm **all four gear positions** individually on the gear synoptic before relying on a summary indication; a "3 green"-style shorthand does not apply.
- **Gear disagree / unsafe (any position):** recycle once; if still unsafe use **alternate (gravity/free-fall) extension**; do not force.
- **Alternate extension:** per checklist; expect no retract afterwards; confirm the center gear specifically, since its extension logic can differ from the main gears (normal configuration is center-gear-extended — Dispatch §4).
- **Antiskid / autobrake / brake source / brake temp:** alternate braking, modulate manually, longer rollout; watch brake temperature after heavy braking, especially given this type's already-elevated landing speeds.
- **Tyre failure / gear-up or partial:** brief the evacuation flow (Ch 17), RFF as available, minimise braking asymmetry.
- **Notes/model 🟧:** gravity extension + five-point gear representation and brake logic — depth to confirm on the build.

## Ch 15 — Warning systems / alert config
- **CONFIG alerts (flaps/slats / stabilizer / spoilers / parking brake / rudder / gear):** resolve the offending configuration before takeoff/landing; a config alert blocks a safe takeoff.
- **Altitude alert / airspeed low / altitude callouts / warning-system fault:** cross-check and correct; treat a warning-system fault as loss of that protection.
- **Notes/model 🟧:** config-alert logic modelled; some warning-system faults may not simulate.

## Ch 16 — Abnormal & emergency performance
- **Abnormal-config landing distance & reference-speed increments** (flap/slat-less, LSAS off/degraded): compute via the sim/OFP performance tool for the flown config — do not guess; this type's baseline reference speed is already higher than comparable widebodies (Intro §6), so a degraded-config approach compounds an existing margin issue — use a longer runway and a more conservative go-around threshold `[VERIFY]`.
- **Driftdown / two-engine-remaining ceiling:** on one-engine loss, follow driftdown to the applicable ceiling; for adequate-aerodrome planning this feeds the en-route-alternate check **only if a policy has been set** for the freighter (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above the normal MLW, use overweight-landing technique/speed, expect longer distance, inspection required; consider **fuel jettison** first (Ch 12) when time permits — re-check the loadsheet main-deck CG against the actual (not planned) landing weight/configuration, mindful of the stabilizer-tank fuel state (Ch 12). 🟥
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 17 — Evacuation 🟥
- **Configuration note:** the MD11 carries **no passengers and no cabin crew** — a **two-pilot flight-deck crew only**. There is no passenger-cabin evacuation to command or coordinate.
- **Recognition/trigger:** commander's decision after fire/ditching/major failure/gear collapse where the flight deck itself must be vacated on the ground.
- **Actions (memory, Ch 1-family):** aircraft **stopped**, parking brake set; shut down **all engines and APU** (fuel control/start levers CUTOFF); if the flight deck must be vacated, use the **flight-deck emergency egress** (the type's escape means from the flight deck) rather than a cabin evacuation slide sequence; cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** two pilots secure the aircraft and self-evacuate via the flight-deck egress means; coordinate with RFF directly (no cabin crew to relay through); account for both crew, move upwind, clear of the aircraft — particularly clear of any main-deck cargo-fire zone (Ch 8).
- **Notes/model 🟧:** engine/APU shutdown and secure flow present per general systems scope; a two-pilot flight-deck egress is unlikely to be modelled at all — train the flow and crew coordination conceptually, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — McDonnell Douglas MD-11 — https://en.wikipedia.org/wiki/McDonnell_Douglas_MD-11
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Rejected Take Off (general) — https://skybrary.aero/articles/rejected-take-off
- SKYbrary — Cargo Compartment Fire (general) — https://skybrary.aero/articles/cargo-compartment-fire
- SKYbrary — Pilot-Induced Oscillation (general) — https://skybrary.aero/articles/pilot-induced-oscillation-pio
- Rotate — MD-11 Freighter product page (simulated-systems scope) — https://store.x-plane.org/Rotate-MD-11-Freighter_p_1580.html

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered non-normal/emergency reference built for a trijet freighter with a tail-mounted (#2, S-duct) engine and a genuinely demanding pitch-handling profile; **LSAS fail/degraded-handling added to Ch 1 memory items 🟥** and made the pack's central handling chapter (Ch 9); tail-engine (#2) failure-asymmetry distinction captured (Ch 7/Ch 8); three-lower-deck-position cargo fire and five-point (center) gear called out; main-deck Class E-type cargo fire handling aligned with the freighter pattern used elsewhere in this fleet (no in-flight extinguishing discharge, ventilation shutoff + divert); two-pilot flight-deck evacuation, no passenger-cabin evacuation; figures `[VERIFY]`. |
