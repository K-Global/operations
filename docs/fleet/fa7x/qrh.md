<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  FA7X Dassault Falcon 7X
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# FA7X — Dassault Falcon 7X · QRH

**FA7X / Dassault Falcon 7X** · trijet (3 × PW307A) · Dassault DFCS fly-by-wire · EASy II (Honeywell Primus Epic) flight deck
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling. **In a real non-normal the aircraft's own CAS/QRH is authoritative** — this document supports training and quick recall. **No sim model is confirmed for this type** (see Sim-Model) — everything below is a **real-aircraft-flow reference re-expressed from public sources**, not validated against any simulated systems behaviour; treat every procedure as 🟧 model-unconfirmed by default. All content is re-expressed in K Global's own words; **no verbatim OEM text**. Chapters mirror ATA-style grouping. Flag legend 🟥 memory/immediate · 🟧 model-dependent/unconfirmed · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH
- **Dassault philosophy:** the EASy II CAS (crew alerting system) drives most non-normals with an ordered message/procedure prompt, broadly analogous in spirit to Airbus ECAM or Boeing EICAS — but the underlying **DFCS fly-by-wire logic is Dassault's own architecture**, not an Airbus normal/alternate/direct-law clone. Do not assume Airbus-specific control-law terminology applies here without independent confirmation 🟧 `[VERIFY]`.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the book. Everything else: stabilise, then read.
- **Model caveat 🟥:** no Falcon 7X X-Plane 11 add-on is confirmed to exist (Sim-Model). Every procedure below is written to public real-aircraft knowledge only — none of it has been checked against simulated failure logic. Do not assume any step below "just works" in-sim.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Unreliable airspeed / air data disagree** 🟥 | Disconnect autopilot/autothrottle; set **known pitch + thrust** `[VERIFY]`; keep wings level, clean if able | Identify faulty air-data source, use remaining/backup indications, read Ch 10 |
| **Emergency descent (rapid depressurisation)** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — thrust idle, speedbrake, target a safe high-speed descent as structure permits; turn off track if needed; descend toward **FL100 / MSA** | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire (any of three)** 🟥 | Thrust lever idle → **engine shutdown**; fire-suppression handle/switch actioned; **discharge agent** per CAS/time | Confirm fire out, secure affected engine, assess remaining two-engine performance, read Ch 2/3 |
| **Loss of a second engine (two of three down)** 🟥 | Identify and secure both failed engines per CAS; **fly the remaining single engine** — pitch/thrust for best glide or single-engine performance, expedite descent/diversion | Declare emergency, immediate diversion to nearest suitable, read Ch 2/13 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake; **shut all three engines and APU down**; if evacuation ordered → **evacuation signal**, cut fuel/non-essential electrics per secure flow | Cabin evacuation direction, ATC/RFF, read Ch 14 |
| **Stall warning / approach to stall** 🟥 | Reduce angle of attack, apply thrust as required; recover, then re-establish clean flight | Monitor speed, resume, read Ch 7 |

*Memory-item modelling 🟧: no confirmed sim model exists — every memory item above is a real-aircraft reference only (see Sim-Model §5).*

## Ch 2 — Engines / APU / power plant — trijet emphasis 🟥

### Single-engine failure (one of three) 🟩
- **Recognition:** CAS engine-fault message, N1/N2/EGT/FF anomaly on the affected engine, possible mild yaw if a **wing** engine is affected (a centre-engine failure produces little to no asymmetric yaw, since thrust is on the centreline).
- **Actions:** identify and confirm the failed engine per CAS · secure per procedure · reassess climb/cruise performance — **a trijet losing one engine still has two operating**, giving materially more margin than a twin losing its only remaining engine, but **the aircraft may not be able to sustain its planned FL510 cruise level on two engines** and a driftdown/step-down may be required · consider whether diversion is warranted based on remaining range/terrain/weather (Ch 13).
- **Notes:** K Global has **not** established an operator EDTO/diversion-time rule for this type (Dispatch §5) — a single-engine failure is not, by itself, an "EDTO event" in the classic twin sense, but still drives a driftdown/performance reassessment like any multi-engine aircraft losing a powerplant.

### Two-engine failure (two of three) 🟥
- **Recognition:** as above, on a second engine — this is the trijet's most critical multi-engine scenario, since only one engine remains.
- **Actions:** treat as equivalent in severity to a **twin-engine aircraft's single-engine-failure emergency** — secure both failed engines per CAS, fly the remaining engine for best single-engine performance, **declare an emergency and divert to the nearest suitable aerodrome immediately**; if the remaining engine is a wing engine expect asymmetric thrust and rudder/trim requirements; if it is the centre engine, expect centreline thrust but reduced total power.
- **Notes / model 🟧:** whether a future sim candidate can simulate an independent second-engine failure on top of a first (rather than only single engine-out) should be confirmed before relying on this scenario for training `[VERIFY]`.

### Centre engine (S-duct) specific considerations 🟧
- The centre engine draws air through an **S-duct inlet** routed from a dorsal intake down into the tail-mounted engine — a longer, curved inlet path than the wing engines' direct inlets. Public sources do not establish, to primary-certification detail, whether this creates a distinct failure signature (e.g. duct-related airflow disturbance/FOD ingestion pattern) beyond the general layout description 🟧 `[VERIFY]`. Treat any specific centre-engine-only procedure as an open item pending confirmation against a primary Dassault/EASA source.
- **No thrust reverser on the centre engine** is the general convention for S-duct trijet layouts (consistent with other S-duct trijets); if confirmed for this type, it means **only two of three engines contribute reverse thrust** on landing — relevant to landing-distance and RTO planning 🟧 `[VERIFY]`.

### Abnormal start / hot start / thrust anomaly
- **Recognition:** EGT over-temp on start, stagnant N2, or thrust not matching lever/FADEC command, on any of the three engines.
- **Actions:** abort start per CAS/FADEC guidance, allow cool-down/dry-motor per procedure, log the event; for thrust anomaly cross-check autothrottle/FADEC mode. 🟧

## Ch 3 — Fire, smoke & fumes
### APU fire
- **Recognition:** APU fire CAS message. · **Actions:** APU fire handle/switch, agent, APU master off.
### Cargo/baggage-compartment smoke
- **Recognition:** smoke/fire CAS message for the baggage compartment. · **Actions:** confirm, discharge suppression agent if fitted, land at the nearest suitable, isolate per CAS.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, CAS smoke message. · **Actions:** oxygen masks/goggles as required, isolate suspected source (electrical load-shed), consider emergency descent/land at the nearest suitable.

## Ch 4 — Electrical
### Generator loss (per engine)
- **Recognition:** CAS electrical-fault message, bus transfer. · **Actions:** per CAS (isolate/reset as directed), monitor remaining sources — with three engines there are, in principle, more generator sources than a twin, which is a trijet electrical-redundancy advantage 🟩; confirm the actual generator/bus architecture against a primary source before relying on this for training 🟧 `[VERIFY]`.
### Emergency/backup electrical configuration
- **Recognition:** loss of primary AC busses → emergency configuration. · **Actions:** confirm essential busses powered, APU start if available, land at the nearest suitable; expect degraded systems. **Whether this type carries a ram-air-turbine or relies solely on batteries/emergency generator for backup DFCS power is not confirmed to a primary source in this pass** 🟧 `[VERIFY]` — do not assert RAT availability without confirmation.
### Battery-only
- **Recognition:** all generator sources lost, batteries only. · **Actions:** minimum essential loads, APU priority, expedite landing.

## Ch 5 — Hydraulics
- **Systems:** multiple independent hydraulic circuits support flight controls, gear and brakes; exact circuit count/architecture for this type is not restated here without primary-source confirmation 🟧 `[VERIFY]`.
- **Single-system loss:** CAS hydraulic-fault message · manage per CAS · note affected surfaces/brakes.
- **Multiple-system loss:** expect **DFCS reversion/degraded control law** and possible alternate gear extension/braking — cross-ref Ch 7/Ch 8.

## Ch 6 — Fuel
- **Imbalance:** CAS fuel-imbalance message · balance per procedure (three tanks feeding three engines — cross-feed/transfer logic), identify cause (leak vs asymmetric burn).
- **Leak:** if a leak is suspected, isolate per CAS rather than opening cross-feed blindly; reassess fuel/range and divert.
- **Low level / feed / transfer fault:** manage transfer per CAS; recompute reserves (Dispatch §3/§5).

## Ch 7 — Flight controls (DFCS) & high-lift
### DFCS degraded mode / law reversion 🟧
- **Recognition:** CAS flight-control message indicating a reversion from the normal control law. · **Actions:** fly as directed by CAS, respect that some flight-envelope protections may be reduced or unavailable in a degraded mode, plan a conservative approach configuration and speed, expect a longer landing distance. · **Notes:** Dassault's DFCS architecture and its specific degraded-mode behaviour is **not** the same as Airbus's alternate/direct law — do not import Airbus-specific assumptions here 🟧 `[VERIFY]`.
### Flap jam
- **Recognition:** CAS flap-system fault. · **Actions:** stop at the achieved/safe configuration, compute the higher approach speed and landing distance for that configuration (Ch 13), use a longer runway.
### Trim / speedbrake fault
- **Actions:** per CAS; for an uncommanded trim indication, use the manual/backup trim path per procedure. 🟧

## Ch 8 — Landing gear, brakes & tyres
- **Gear disagree / unsafe indication:** recycle once if permitted; if still unsafe, use the alternate/emergency extension method; do not force.
- **Alternate extension:** per CAS/QRH; expect no retraction afterwards.
- **Brake / anti-skid fault:** use alternate braking as directed, expect a longer rollout, avoid locked-wheel braking.
- **Tyre failure:** brief for a possible evacuation, expect RFF standby, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain
### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin-altitude warning, rapid climb of cabin altitude. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** — idle, speedbrake, safe high-speed descent, off-track if required, level at **FL100/MSA**; PA, MAYDAY. Then CAS/QRH for pressurisation configuration. · **Notes:** this type's **FL510 service ceiling** is unusually high for a business jet, which makes cabin-altitude time-of-useful-consciousness margins tighter than at typical mid-cabin cruise levels — brief this explicitly for high-altitude legs 🟧.
### Pack / bleed fault
- **Actions:** per CAS, single/reduced-pack operation, consider an altitude limitation; monitor cabin altitude. With three engines there are, in principle, more bleed sources than a twin — a trijet redundancy advantage, not independently confirmed to a primary source for this exact system architecture 🟧 `[VERIFY]`.
### Anti-ice
- **Actions:** engine/wing anti-ice ON in icing conditions, note the performance/bleed penalty across the powerplants providing bleed.

## Ch 10 — Navigation, instruments & autoflight (EASy II)
### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, CAS air-data-fault message. · **Actions (memory, Ch 1):** autopilot/autothrottle OFF, **pitch + thrust** table `[VERIFY]`, identify the faulty air-data source, use remaining/backup indications, then troubleshoot.
### EASy II display / FMS fault, autoflight fault, navigation downgrade
- **Actions:** revert to remaining displays/sources; for a navigation-accuracy downgrade, advise ATC and adjust the routing/approach minima accordingly; hand-fly if autoflight is lost. 🟧

## Ch 11 — Communications
- **Radio / audio failure:** select the alternate radio/audio path, squawk **7600**, follow the lost-communications procedure for the airspace/clearance.
- **Transponder fault:** select the alternate transponder, advise ATC.

## Ch 12 — Miscellaneous
- **Door / baggage-compartment fault:** confirm via CAS before pressurising.
- **Windshield heat, water/waste, bird strike, volcanic ash:** stabilise, assess damage/engine effect (checking **all three engines**, including the centre engine, for ash/bird-strike effects — its S-duct inlet placement may reduce some direct-impact risk relative to the wing engines but does not eliminate it 🟧 `[VERIFY]`); for ash, exit the cloud (descend/turn), reduce thrust changes, land at the nearest suitable.
- **Unlawful interference:** squawk **7500**, follow the security procedure.

## Ch 13 — Abnormal & emergency performance — three-engine failure handling 🟥

- **Single-engine-out driftdown:** losing one of three engines still leaves two operating — materially more margin than a twin losing its one remaining engine — but the aircraft may **not** sustain FL510 (or the planned cruise level) on two engines; follow a driftdown profile to the two-engine-inoperative-one ceiling and reassess the routing/alternate. Compute via the flight-planning tool for the actual weight/conditions — do not guess `[VERIFY]`.
- **Two-engine-out (single engine remaining):** the trijet's critical emergency — treat with the same urgency as a twin's single-engine failure: immediate diversion to the nearest suitable aerodrome, single-engine performance and asymmetric-thrust handling (if the remaining engine is a wing engine) apply. This scenario is **less commonly trained** precisely because it requires two independent failures, but it must not be dismissed as implausible — brief it explicitly in recurrent training. 🟥
- **All-engine-out (extremely rare):** glide performance, engine-relight attempts within the FADEC-defined envelope, and forced-landing/ditching considerations are not detailed here pending primary-source confirmation of this type's glide/backup-power characteristics 🟧 `[VERIFY]` — treat as an open item for a future revision, not an assumed capability.
- **Abnormal-configuration landing distance & approach-speed increments** (degraded flap, DFCS degraded law, centre-engine reverser unavailable): compute via the flight-planning/performance tool for the actual configuration — do not guess; use a longer runway and a higher approach speed where indicated `[VERIFY]`.
- **EDTO/diversion-time reminder:** per Dispatch §5, K Global has **not** set an operator rule time for this type; any extended-diversion scenario compounding an engine failure must be assessed case-by-case against the OM E adequate-aerodrome framework. 🟥
- Method and figures are re-derived from public data only; cite public sources.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, ditching, or a major failure.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alert**; shut down **all three engines and the APU**; if evacuation is ordered → **evacuation signal**, cut fuel and non-essential electrics per the secure flow, keep essential comms/lighting where possible; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft; cabin crew direct evacuation to usable exits (assess the fire side/wind), account for all occupants, move upwind.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Dassault Aviation / Dassault Falcon — Falcon 7X aircraft page — https://www.dassaultfalcon.com/aircraft/falcon-7x
- Wikipedia — Dassault Falcon 7X (DFCS, EASy II, PW307A, S-duct centre engine) — https://en.wikipedia.org/wiki/Dassault_Falcon_7X
- EASA — Type Certificate Data Sheet A155 (Dassault Falcon 7X) — https://www.easa.europa.eu/en/document-library/type-certificates
- FAA — Type Certificate Data Sheet A59NM (Dassault Falcon 7X) — https://www.faa.gov/aircraft/air_cert/design_approvals/media
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- SKYbrary — Fly-By-Wire (general) — https://skybrary.aero/articles/fly-wire-flight-control-system

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered Falcon 7X abnormal/emergency reference re-expressed; memory items 🟥 (unreliable airspeed, emergency descent, engine fire, two-engine loss, evacuation, stall); dedicated three-engine-failure-handling treatment in Ch 2 and Ch 13 (single-engine-out driftdown vs two-engine-out critical case vs all-engine-out open item); centre-engine (S-duct)/no-reverser and RAT-availability points flagged 🟧 `[VERIFY]`, not asserted; figures `[VERIFY]`. |
