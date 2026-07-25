<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  A388 Airbus A380-800
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM or add-on text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# A388 — Airbus A380-800 · QRH

**A388 / A380 family** · flown as Peters Aircraft A380-800 (lead by default) / riviere A380-800 (freeware alternative) 🟧 `[VERIFY — model]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane 11. **In a real non-normal the aircraft's ECAM/QRH is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words; **no verbatim OEM or add-on text**. Chapters mirror ATA-style grouping and are adapted for the A380's **four engines**, 2-hydraulic + 2-electric flight-control architecture, and twin-deck size. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- Airbus philosophy: **fly first, ECAM does the ordered actions**, then read the QRH for anything the ECAM does not fully cover. PF flies + manages thrust/config; PM reads and actions the ECAM/QRH.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- **Model caveat 🟥:** unlike the A339 pack, **neither current A388 candidate is a systems-authentic FBW study aircraft** (Sim-Model §2–3). Peters Aircraft's model has known FMC-reliability issues and dated systems; riviere's freeware model is default-level with no meaningful ECAM failure logic. **Treat every non-normal below as a training/reference item, not something reliably reproducible on either current model** — confirm what actually triggers on the flown build before training to it `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / IAS disagree** 🟥 | Disconnect AP/FD/ATHR; set **known pitch + thrust** (approx wings-level pitch attitude / CLB thrust below THR RED, then reduce) `[VERIFY]`; keep clean if able | Level off, troubleshoot ADR, use remaining/backup speed source if available, read Ch 10 |
| **Emergency descent (rapid depress.)** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speedbrake, target **MMO/VMO** as structure permits; turn off track if needed; descend to **FL100 / MSA** | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire / severe damage (any of four)** 🟥 | Thrust lever idle → **ENG MASTER off** (affected engine); **ENG FIRE p/b** push; **discharge AGENT** per ECAM/time | Confirm fire out, secure, assess remaining three engines, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake; **shut all four engines/APU down**; if evac ordered → **EVAC command**, cut fuel/electrics per flow | Cabin evac signal, ATC/RFF, read Ch 14 — note twin-deck evacuation needs more exits/time than a single-deck widebody |
| **Stall warning / stall** 🟥 | Nose down, reduce pitch; **TOGA on remaining/available engines** (unless near ground low-energy — pitch priority); wings level; recover, then clean up | Monitor speed, resume, read Ch 7 |

*Memory-item modelling 🟥: neither Peters Aircraft nor riviere reliably reproduces ADR fault logic, four-engine fire/discharge sequencing or depressurisation behaviour to study-level fidelity — verify each triggers before training to it, and treat the drill as a procedural exercise regardless of what the model actually does `[VERIFY]`.*

## Ch 2 — Engines / APU / power plant
### Engine fire 🟥
- **Recognition:** ENG FIRE warning + ECAM on the affected engine (1, 2, 3 or 4), possible N1/EGT anomaly.
- **Actions:** Thrust lever IDLE (affected engine) · ENG MASTER OFF · ENG FIRE p/b OUT · agent 1 (then agent 2 if still burning after the interval) · secure, assess remaining engines, divert.
- **Notes / model 🟧:** neither current candidate models fire/discharge logic to study depth; treat as a procedural drill `[VERIFY]`.

### Engine failure / flameout / in-flight relight
- **Recognition:** N1/N2 rollback on the affected engine, EGT/FF drop, ECAM ENG FAIL, mild yaw.
- **Actions:** Maintain control (rudder as needed — **asymmetry is markedly milder on a quad**, engine loss removes roughly a quarter of total thrust from one side rather than half, so the yaw/control input required is smaller than on a twin) · confirm failed engine · secure per ECAM · assess relight envelope (windmill/starter) · reassess performance on three engines · consider EDTO adequate-aerodrome diversion if applicable (Ch 13).
- **Second engine failure (dual, same side or otherwise) 🟥:** significantly more serious — expect a real driftdown/performance problem even on a quad; treat as an emergency, plan nearest suitable landing, reassess climb/cruise capability on two engines. 🟥
- **Notes / model 🟧:** single-engine asymmetry handling not modelled to real fidelity on either candidate; dual-engine scenarios are unlikely to be simulated at all — treat as a briefing/procedural exercise `[VERIFY]`.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** EGT over-temp on start, stagnant N2, or thrust not matching lever, on any of the four engines.
- **Actions:** Abort start (MASTER OFF, affected engine), dry-motor per ECAM/limits, log; for thrust anomaly cross-check ATHR/thrust lock; continue sequential start of remaining engines once resolved.
- **Notes / model 🟧:** start-abuse logic limited on both candidates.

## Ch 3 — Fire, smoke & fumes
### APU fire
- **Recognition:** APU FIRE warning/ECAM. · **Actions:** APU FIRE p/b, agent, APU MASTER OFF. · **Notes/model 🟧:** limited on both candidates.
### Cargo smoke
- **Recognition:** SMOKE CARGO warning (twin-deck — confirm which hold, forward/aft/bulk). · **Actions:** confirm, **discharge cargo agent**, land ASAP, isolate per ECAM. · **Notes/model 🟧:** unlikely to be simulated on either candidate `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, ECAM SMOKE — note the twin-deck cabin makes source localisation harder than a single-deck jet. · **Actions:** masks/goggles, ON 100%, isolate suspected source (elec load-shed), consider emergency descent/land ASAP. · **Notes/model 🟧:** smoke source logic not modelled on either candidate.

## Ch 4 — Electrical
### Generator loss (per-engine, four generators)
- **Recognition:** ELEC GEN FAULT ECAM (affected engine/generator), bus transfer. · **Actions:** per ECAM (GEN off/reset, manage load), monitor remaining three sources — a single generator loss is well within the aircraft's redundancy margin. 🟩
### Multiple generator loss / emergency electrical config
- **Recognition:** loss of multiple AC busses → emergency electrical configuration, RAT deployment as applicable. · **Actions:** confirm essential busses powered, APU start if available, land ASAP; expect degraded systems/law. · **Notes/model 🟧:** emergency-electrical reversion not modelled to real depth on either candidate.
### Battery-only (all four batteries)
- **Recognition:** all generators lost, batteries only. · **Actions:** minimum essential loads, APU/emergency-power priority, expedite landing.

## Ch 5 — Hydraulics & flight-control power
- **Architecture:** the A380 does **not** use a three-hydraulic-circuit layout like the smaller Airbus FBW types — flight controls are powered by **two hydraulic circuits plus two independent electrical (electro-hydrostatic) sources**, giving four independent power paths to the control surfaces 🟩 `[VERIFY]`. This is materially different from the A330/A350 three-circuit system referenced in those packs — do not assume the same failure logic carries across types.
- **Single-source loss:** ECAM HYD/F-CTL fault · manage per ECAM · with four independent sources, a single loss is tolerable and normally leaves full control authority.
- **Multiple-source loss:** expect **flight-control law degradation** as more sources are lost; alternate/gravity gear extension and alternate braking become relevant — cross-ref Ch 7/Ch 8.
- **Notes / model 🟥:** neither current candidate models the real 2H+2E architecture or its degradation logic — this is a training/conceptual chapter only until a systems-accurate model exists `[VERIFY]`.

## Ch 6 — Fuel
- **Imbalance:** ECAM FUEL imbalance across the twin-deck, multi-tank system · open X-FEED, balance per procedure, identify cause (leak vs asymmetric burn across four engines).
- **Leak:** if leak suspected, **do not** open crossfeed blindly; isolate per ECAM, reassess fuel/range and divert.
- **Low level / feed / transfer fault:** manage transfer pumps, gravity feed if required; recompute reserves (Dispatch §3/§7).
- **Notes / model 🟧:** fuel-system depth (multi-tank transfer logic) simplified or absent on both candidates.

## Ch 7 — Flight controls & high-lift
### Control-law degradation (alternate / direct law)
- **Recognition:** ECAM F/CTL, "ALTN LAW"/"DIRECT LAW", loss of protections. · **Actions:** fly manually as needed, respect that hard protections may be lost, plan a flapped/managed approach (higher VAPP), expect direct law with gear down. · **Notes/model 🟧:** law-reversion logic not modelled to real depth on either candidate.
### Flap / slat jam
- **Recognition:** ECAM F/CTL FLAPS/SLATS LOCKED. · **Actions:** stop at safe config, compute higher approach speed & landing distance (Ch 13), confirm runway length is adequate for the type's already-long field requirement.
### Speedbrake / spoiler fault; trim runaway
- **Actions:** per ECAM; for uncommanded pitch trim, use manual trim/disconnect autotrim path per procedure. 🟧

## Ch 8 — Landing gear, brakes & tyres
- **Gear disagree / unsafe:** recycle once; if still unsafe use **gravity (free-fall) extension**; do not force. The A380's multi-bogie main gear (more wheels than the twin widebodies) means gear-related abnormals may affect only part of the gear set — confirm exactly which leg/bogie is affected before acting. `[VERIFY]`
- **Alternate / gravity extension:** per ECAM/QRH; expect no retract afterwards. · **Notes/model 🟧:** gravity extension logic not confirmed on either candidate `[VERIFY]`.
- **Brake / anti-skid fault:** alternate braking (modulate manually as required), longer rollout, avoid locked wheels — note the type's high landing mass means brake energy/rollout margins are less forgiving than lighter widebodies.
- **Tyre failure / gear-up or partial:** brief evac, foam/RFF (Cat 10 cover required — Dispatch §7) as available, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain
### Rapid depressurisation + emergency descent 🟥
- **Recognition:** CABIN ALT warning, ears/climb of cabin alt, EXCESS CAB ALT — twin-deck cabin volume is larger, so oxygen-mask deployment timing/planning should still assume standard emergency-descent urgency, not a slower one. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle, speedbrake, MMO/VMO as structure allows, off-track if required, level **FL100/MSA**; PA, MAYDAY. Then ECAM/QRH for pressurisation config. · **Notes/model 🟧:** cabin-alt/emergency-descent logic not confirmed on either candidate `[VERIFY]`.
### Pack / bleed fault (multi-pack, four-engine architecture)
- **Actions:** per ECAM, reduced-pack ops, consider altitude limit; monitor cabin alt. `[VERIFY — pack count/architecture]`
### Anti-ice
- **Actions:** wing/engine anti-ice ON in icing, note performance/bleed penalty across four engines.

## Ch 10 — Navigation, instruments & autoflight
### Unreliable airspeed / ADR fault 🟥
- **Recognition:** IAS/ALT disagree, speed flags, ADR DISAGREE. · **Actions (memory, Ch 1):** AP/FD/ATHR OFF, **pitch + thrust** table `[VERIFY]`, identify faulty ADR, use remaining source, then troubleshoot. · **Notes/model 🟧:** ADR-fault logic not confirmed on either candidate `[VERIFY]`.
### IRS/ADIRS fault, display loss, AP/FD/ATHR fault, GPS/RNP loss
- **Actions:** revert to remaining sources/displays; for RNP loss downgrade nav and advise ATC; hand-fly if autoflight lost. · **Notes/model 🟧:** the Peters Aircraft FMC has known reliability issues (Sim-Model §1/§3) — cross-check routing manually rather than trusting FMS behaviour during any nav abnormal drill.

## Ch 11 — Communications
- **Radio / audio failure:** select alternate radio/audio path, squawk 7600, follow lost-comms procedure for the airspace/clearance.
- **Transponder fault:** select alternate XPDR, advise ATC. · **Notes/model 🟧:** basic on both candidates.

## Ch 12 — Miscellaneous
- **Door / slide fault:** ECAM DOORS (twin-deck, multiple doors per side per deck — confirm which door/deck), confirm before pressurising; disarm slides before any door open.
- **Windshield / windscreen heat, water/waste, bird strike, volcanic ash:** stabilise, assess damage/engine effect across four engines, for ash exit the cloud (descend/turn), reduce thrust changes, land at nearest suitable.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** not simulated on either candidate.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-config landing distance & VAPP increments** (flap/slat-less, alternate/direct law): compute via the sim/OFP performance tool for the flown config — do not guess; use a longer runway and higher approach speed `[VERIFY]`. Note the type already needs a long field at MTOW (Intro §6) — an abnormal-config landing compounds this.
- **Engine-out performance:** on single-engine loss, reassess climb/cruise capability on three engines — **asymmetry and performance loss are milder than on a twin** (one of four vs one of two), but a **second engine loss** is a serious event requiring an immediate landing-distance/diversion reassessment. For EDTO sectors this feeds the adequate-aerodrome check — **dispatch discipline, not sim-modelled** (Dispatch §5, OM E). 🟥
- **Overweight landing:** if landing above MLW (~394,000 kg 🟧 `[VERIFY]`), use overweight-landing technique/speed, expect longer distance, inspection required. `[VERIFY]`
- **Code F / RFF Cat 10 restated 🟥:** any abnormal ending in a diversion must confirm the diversion field holds **Code F stand/taxiway capability and Cat 10 RFF cover** — not every otherwise-suitable field can accept this type (Intro §4, Dispatch §7). This is a real, live constraint independent of the abnormal itself.
- Method and figures are re-derived from public data / the OFP; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire/ditching/major failure.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alert**; shut down **all four engines and APU**; if evacuation ordered → **EVAC command/signal**, cut fuel and non-essential electrics per secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination — twin-deck specific:** flight crew secure aircraft; cabin crew direct evacuation to usable exits on **both decks** (assess fire side/wind on each deck independently), account for all, move upwind. A full A380 evacuation involves substantially more passengers and exits than a single-deck widebody — expect a longer, more complex evacuation to coordinate.
- **Notes / model 🟥:** neither candidate models shutdown/secure logic to real depth, and passenger evacuation itself is not simulated on either — train the flow and the twin-deck coordination point conceptually, not against the sim's visual behaviour.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Airbus A380-800 (A388) — https://skybrary.aero/aircraft/a388
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- EASA — TCDS EASA.A.110 Airbus A380 — https://www.easa.europa.eu/en/document-library/type-certificates
- Airbus — A380 type page — https://www.aircraft.airbus.com/en/aircraft/a380
- X-Plane Reviews — Aircraft Review: Airbus A380-842 XP12 by Peters Aircraft (systems-scope reference) — https://xplanereviews.com/forums/topic/16523-aircraft-review-airbus-a380-842-xp12-by-peters-aircraft/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered Airbus FBW abnormal/emergency reference re-expressed and adapted for four engines, 2H+2E flight-control architecture and twin-deck evacuation; memory items 🟥 (unreliable airspeed, emergency descent, engine fire, evacuation, stall); engine-out asymmetry noted milder on a quad but dual-engine loss flagged as serious; neither current sim candidate is systems-authentic 🟥; Code F/RFF Cat 10 restated 🟥; figures `[VERIFY]`. |
