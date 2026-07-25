<!--
================================================================================
  K Global — AIRFRAME PACK · QRH  ·  AT76 ATR 72-600
  Thorough, chaptered abnormal/emergency reference, tailored to the approved model.
  Re-expressed in K Global's own words — NO verbatim copyrighted OEM text.
  FLAG LEGEND  🟥 memory item / immediate action   🟧 model-dependent / caution   🟩 reference
================================================================================
-->

# AT76 — ATR 72-600 · QRH

**AT76 / ATR-600 series** · **TURBOPROP** 🟥 · flown as Aerosoft/McPhat Studios ATR 72-500 🟧 `[VERIFY — model, sub-variant gap]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** K Global quick-reference for abnormal & emergency handling on X-Plane. **In a real non-normal the aircraft's own systems/checklist is authoritative** — this document supports training and quick recall and is tailored to what the approved model actually simulates (🟧). All content is re-expressed in K Global's own words from general public turboprop/ATR-family knowledge; **no verbatim OEM text**, and the source material surveyed for this type was thin on abnormal procedures, so several chapters below are built from general public turboprop knowledge rather than a type-specific abnormal source — flagged 🟧 throughout. Chapters mirror ATA-style grouping. **This is a turboprop** — several memory items below (engine failure/autofeather, propeller overspeed, icing) have **no equivalent** in the jet-fleet packs in this OM B tree; read them as genuinely new content, not a re-statement. Flag legend 🟥 memory/immediate · 🟧 model-dependent · 🟩 reference. **Verify every figure `[VERIFY]` before relying on it.**

---

## Ch 0 — Using this QRH

- ATR-600 philosophy: **fly first**, let the CAS/status system present the caution/warning, then work the **checklist** for the ordered actions. PF flies + manages power/condition levers; PM reads and actions the checklist.
- **Memory items** (Ch 1, marked 🟥) are the only actions done without the checklist. Everything else: stabilise, then work the checklist.
- **Turboprop power-management awareness 🟥:** this type is flown on **torque, ITT, Np (propeller/power-turbine speed) and Ng (gas-generator speed)** — not N1/EPR/thrust-lever-angle. Every abnormal below that touches engine handling is written in these terms; do not translate it into jet-fleet thrust-lever logic.
- **Autofeather awareness 🟥:** an armed autofeather system (normally for takeoff/initial climb) automatically feathers a failed/underperforming engine's propeller above a torque-loss threshold — this removes the single largest source of asymmetric drag at the most critical phase of flight. Confirm autofeather is armed at the appropriate phase (Checklist, Before takeoff) — it is not a "set and forget" system across the whole flight.
- **Icing awareness 🟥:** this type's short-sector Regional network typically cruises at lower flight levels than the jet fleet, inside the icing-prone layer far more often. Propeller and airframe ice-protection discipline (Ch 9) is a first-order safety item, not a secondary caution.
- **Model caveat 🟧:** the candidate add-on (Sim-Model §1) is a -500-generation product with a noted limitation on condition-lever functionality and an incompletely simulated crew-alerting system. Treat every non-normal below as a training aid, not a certified procedure, and confirm what the flown model actually triggers before relying on it `[VERIFY]`.
- All speeds/altitudes/times here are placeholders pending confirmation — treat as `[VERIFY]`.

## Ch 1 — Memory items / immediate actions 🟥

| Condition | Immediate action (memory) | Then |
|---|---|---|
| **Engine failure / uncommanded torque loss on takeoff/climb** 🟥 | Maintain control (rudder for asymmetry); **confirm autofeather has operated** on the failed engine (or manually feather via the condition lever if autofeather did not fire) `[VERIFY]` | Secure the failed engine per checklist, assess single-engine performance, plan the nearest suitable diversion; read Ch 2 |
| **Propeller overspeed** 🟥 | **Immediately retard the affected power lever**; if overspeed continues, move the condition lever toward FEATHER to control the propeller `[VERIFY]` — a runaway propeller is a severe structural/vibration hazard unique to this type | Stabilise, assess damage/vibration, read Ch 2 |
| **Severe icing / ice-protection system failure** 🟥 | Exit icing conditions if able (altitude/track change); confirm propeller and airframe anti-ice/de-ice systems are selected ON per the CAS/ICE indication; if ice protection has failed, treat as an emergency — increase speed margin above stall/reference speeds as briefed and avoid further icing exposure `[VERIFY]` | Divert to the nearest suitable field with the ice protection status in mind; read Ch 9 |
| **Rapid depressurisation / emergency descent** 🟥 | Don **oxygen masks**, establish crew comms; **initiate descent** — power levers as required, descend toward **FL100 / MSA** (noting this type's low FL250 ceiling means the descent is shorter than for a high-cruising jet), turn off track if needed | Signs on, PA, MAYDAY, read Ch 9 |
| **Engine fire** 🟥 | Affected power lever idle → **condition lever to FUEL SHUT-OFF/FEATHER**; **fire-extinguisher handle** pulled/actioned; discharge agent per CAS guidance | Confirm fire indication clear, secure, divert; read Ch 2/3 |
| **Evacuation** 🟥 | Aircraft stopped, parking brake set; **condition levers to FUEL SHUT-OFF** (feather/secure both propellers — a live rotating propeller is a severe hazard to an evacuating cabin) 🟥; if evacuation ordered → **command the evacuation** | Cabin evacuation signal, ATC/RFF, read Ch 14 |

*Memory-item modelling 🟧: confirm on the flown add-on (Sim-Model §1) whether autofeather, propeller-overspeed and ice-protection-failure behaviour is actually modelled before training to this table `[VERIFY]` — the candidate's condition-lever limitation (Sim-Model §3) is directly relevant to several of these items.*

## Ch 2 — Engines / propellers / power plant

### Engine fire 🟥
- **Recognition:** fire warning, abnormal engine-parameter indication (torque/ITT/Ng).
- **Actions:** Power lever IDLE · condition lever FUEL SHUT-OFF/FEATHER · fire-extinguisher handle actioned · discharge agent · secure, divert.
- **Notes / model:** confirm fire-handle and agent-discharge logic is simulated on the flown add-on 🟧 `[VERIFY]`.

### Engine failure / flameout / autofeather 🟥
- **Recognition:** torque/Ng rollback on one engine, asymmetric yaw, autofeather annunciation (if armed and fitted).
- **Actions:** maintain control (rudder for asymmetry) · **confirm autofeather has driven the propeller to feather** — if not, manually feather via the condition lever · secure per checklist · assess single-engine performance (materially reduced climb capability on one engine for a twin turboprop at this weight class) · plan a prompt diversion to the nearest suitable field (this type is not EDTO-planned — Dispatch §5 — so plan a prompt diversion rather than an extended driftdown).
- **Notes / model:** autofeather and single-engine handling/asymmetry modelling depth is add-on dependent, and the candidate's condition-lever limitation directly affects this item 🟧 `[VERIFY]`.

### Propeller overspeed / governing fault 🟥
- **Recognition:** Np (propeller speed) exceeding limits, associated vibration/noise.
- **Actions:** retard the affected power lever immediately; if overspeed persists, move the condition lever toward FEATHER; be prepared for associated vibration and yaw as the propeller responds.
- **Notes / model:** propeller-governing-fault simulation depth is add-on dependent and directly tied to the noted condition-lever limitation 🟧 `[VERIFY]`.

### Abnormal start / hot start / torque anomaly
- **Recognition:** over-temperature indication on start (ITT), stagnant Ng, or torque not matching power-lever position.
- **Actions:** abort start (condition lever to FUEL SHUT-OFF), allow the engine to motor/cool per limits before a re-attempt, log the event; for a torque anomaly cross-check the power-lever/torque-indication correspondence.
- **Notes / model:** start-abuse logic depth varies by add-on 🟧.

## Ch 3 — Fire, smoke & fumes

### APU fire (if APU fitted/installed on the operated configuration)
- **Recognition:** APU fire warning/indication. · **Actions:** APU fire-extinguisher handle, discharge agent, APU master OFF. · **Notes/model:** confirm simulated and confirm the operated configuration actually carries an APU 🟧 `[VERIFY]`.
### Cargo smoke
- **Recognition:** cargo-smoke warning. · **Actions:** confirm, discharge the cargo fire-suppression agent (if fitted), land ASAP, isolate per CAS. · **Notes/model:** 🟧 may not be fully simulated `[VERIFY]`.
### Avionics / cabin smoke or fumes
- **Recognition:** smell/smoke, smoke indication. · **Actions:** masks/goggles as fitted, 100% oxygen, isolate the suspected source (electrical load-shed), consider an emergency descent/land ASAP. · **Notes/model:** smoke-source logic depth limited 🟧.

## Ch 4 — Electrical

- **System:** engine-driven generators supply the AC/DC network, with a battery bus for essential loads and standby power; ground/"hotel mode" power (single engine running, generator supplying ground services without both engines/APU) is a feature commonly fitted to this type but **not simulated** on the candidate model (Sim-Model §4).
- **Generator loss (single):** electrical-fault indication · confirm remaining source(s) cover essential loads · monitor.
- **Emergency electrical configuration:** loss of main generator sources — minimum essential loads, expect degraded systems, land ASAP.
- **Battery-only:** all generator sources lost — minimum essential loads, expedite landing.
- **Notes/model 🟧:** electrical-system depth and hotel-mode logic are add-on dependent; hotel mode specifically is **not** modelled on the candidate `[VERIFY]`.

## Ch 5 — Hydraulics

- **Systems:** hydraulic power (engine-driven pumps, with an electric backup pump) actuates flight controls, landing gear and brakes on this type.
- **Single-system/pump loss:** hydraulic-fault indication · manage per checklist · note affected surfaces/gear/brakes.
- **Full hydraulic loss:** expect a degraded/alternate gear-extension and braking method — cross-ref Ch 7/Ch 8.
- **Notes / model 🟧:** hydraulic-system depth and reversion logic is add-on dependent; confirm before relying on it `[VERIFY]`.

## Ch 6 — Fuel

- **Imbalance:** fuel-imbalance indication · use crossfeed to balance, identify cause (leak vs asymmetric burn).
- **Leak:** if a leak is suspected, **do not** open crossfeed blindly; isolate per checklist, reassess fuel/range and divert.
- **Low level / boost pump fault:** manage fuel boost pumps per checklist; recompute reserves (Dispatch §3).
- **Notes / model 🟧:** boost-pump and crossfeed/transfer logic modelling depth is add-on dependent; fuel-temperature indicator specifically is **not** simulated on the candidate (Sim-Model §3).

## Ch 7 — Flight controls & high-lift

### Reduced flight-control authority
- **Recognition:** flight-control fault indication, degraded response on an affected surface. · **Actions:** fly manually with the remaining surfaces, plan a flapped, higher-reference-speed approach; this type has **no envelope-protection law** (conventional controls) — the pilot must self-limit pitch/bank/speed. · **Notes/model:** fault-injection depth varies by add-on 🟧.
### Flap jam
- **Recognition:** flap-position fault. · **Actions:** stop at the safe achieved configuration, compute the higher approach speed & landing distance (Ch 13), use a longer runway.
### Trim runaway
- **Actions:** per checklist; for an uncommanded trim input, use the manual trim/disconnect path. 🟧

## Ch 8 — Landing gear, brakes & tyres

- **Gear disagree / unsafe:** recycle once if permitted; if still unsafe use the **alternate (gravity/free-fall) extension**; do not force.
- **Alternate/gravity extension:** per checklist; expect no retract afterwards. · **Notes/model:** confirm modelled on the flown add-on 🟧 `[VERIFY]`.
- **Brake / anti-skid fault:** use alternate braking, modulate manually if anti-skid is inoperative, expect a longer rollout, avoid a locked wheel. **Note:** propeller beta/reverse (Checklist, After landing) remains available independent of wheel-brake status and is a primary deceleration aid on this type — use it fully.
- **Tyre failure / partial gear:** brief the cabin for a possible evacuation, request RFF standby, minimise braking asymmetry.

## Ch 9 — Air / pressurisation / ice & rain 🟥

### Rapid depressurisation + emergency descent 🟥
- **Recognition:** cabin-altitude warning, rate-of-climb of cabin altitude. · **Actions (memory, Ch 1):** masks ON, crew comms; **emergency descent** toward **FL100/MSA** — noting this type's FL250 ceiling means the descent required is inherently shorter than for a high-cruising jet; PA, MAYDAY. Then work the checklist for the pressurisation configuration. · **Notes/model:** cabin-altitude and emergency-descent logic depth is add-on dependent 🟧.
### Bleed / pressurisation-source fault
- **Actions:** per checklist; monitor cabin altitude; consider an altitude limit if the source is degraded.
### Propeller & airframe icing / ice-protection failure 🟥
- **Recognition:** ice accretion visually or via ice-detection annunciation; performance degradation (reduced climb, increased fuel flow, buffet onset earlier than expected).
- **Actions (memory, Ch 1):** confirm propeller de-ice (electrothermal cyclic heating) and airframe (wing/tail) anti-ice/de-ice systems are selected per the annunciated ICE condition; **exit icing conditions** (altitude or track change) where practicable; if ice protection has failed, increase speed margin above stall/reference speeds as briefed and avoid further icing exposure.
- **Notes / model 🟧:** ice-detection and ice-protection-system simulation depth is add-on dependent and not confirmed for the candidate `[VERIFY]` — this is a genuine training gap given how central icing discipline is to this type's actual operating environment (lower cruise levels, Intro §6/Dispatch §4).

## Ch 10 — Navigation, instruments & autoflight

### Unreliable airspeed / air-data fault 🟥
- **Recognition:** airspeed/altitude disagree, air-data-source fault indication. · **Actions (memory, Ch 1):** autopilot/autothrottle-equivalent OFF, fly a known power setting + attitude `[VERIFY]`, identify the faulty source, use the remaining/backup indication, then troubleshoot. · **Notes/model:** air-data-fault simulation depth is add-on dependent 🟧.
### Display loss, autoflight fault, navigation-accuracy loss
- **Actions:** revert to the remaining display(s)/source(s); for a navigation-accuracy loss, downgrade the navigation mode and advise ATC; hand-fly if autoflight is lost. · **Notes/model 🟧:** depth varies by add-on; the candidate's Thales-glass-cockpit-vs--500-panel gap (Sim-Model §2) is directly relevant here.

## Ch 11 — Communications
- **Radio / audio failure:** select the alternate radio/audio path, squawk 7600, follow the lost-communications procedure for the airspace/clearance.
- **Transponder fault:** select the alternate transponder, advise ATC. · **Notes/model 🟧:** basic on the candidate add-on.

## Ch 12 — Miscellaneous
- **Door fault:** confirm before pressurising; disarm slides/assess before opening any door on the ground.
- **Windshield heat fault, water/waste, bird strike:** stabilise, assess damage/engine effect, reduce unnecessary power changes, land at the nearest suitable field. A bird-strike into a propeller disc carries a distinct vibration/damage signature versus a fan-blade strike — treat any abnormal vibration post-strike as a precautionary-landing driver.
- **Unlawful interference:** squawk 7500, follow security procedure. · **Notes/model 🟧:** mostly not simulated.

## Ch 13 — Abnormal & emergency performance
- **Abnormal-configuration landing distance & approach-speed increments** (flapless/reduced flight-control authority): compute via the sim/OFP performance tool for the flown configuration — do not guess; use a longer runway and a higher approach speed `[VERIFY]`.
- **Single-engine diversion:** on engine loss, plan the nearest suitable diversion field promptly — this type's Regional network (Dispatch §5) is **not EDTO-planned**, so there is no extended single-engine driftdown/critical-fuel case to work, unlike the mainline widebody EDTO fleet. Single-engine climb performance on a twin turboprop at typical Regional-network weights should be treated as materially reduced versus all-engine — confirm terrain clearance on the planned diversion track.
- **Overweight landing:** if landing above MLW (once confirmed — Intro §5), use the overweight-landing technique/speed, expect a longer distance, and log the event for inspection. `[VERIFY]`
- Method and figures are re-derived from public data; cite public sources only.

## Ch 14 — Evacuation 🟥
- **Recognition/trigger:** commander's decision after fire, major failure, or an unsafe landing.
- **Actions (memory, Ch 1):** aircraft **stopped**, parking brake set; **cabin crew alerted**; **condition levers to FUEL SHUT-OFF** to feather and stop both propellers — a rotating propeller disc is a severe strike/injury hazard to passengers evacuating past the wing 🟥, a consideration with no direct equivalent on the podded-engine jet fleet; if evacuation is ordered → **command the evacuation**, cut non-essential electrics per the secure flow, keep essential comms/lighting; RFF/ATC MAYDAY.
- **Crew coordination:** flight crew secure the aircraft (confirm both propellers stopped before any exit near the wing is used); cabin crew direct the evacuation to usable exits (forward door, rear airstair/service door — assess fire side/wind, propeller-disc clearance), account for all occupants, move clear and upwind.
- **Notes / model 🟧:** shutdown/secure logic is generally represented; the passenger evacuation itself is not simulated — train the flow, not the visual.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — ATR ATR-72-600 (AT76) — https://skybrary.aero/aircraft/at76
- SKYbrary — Unreliable Airspeed (general) — https://skybrary.aero/articles/unreliable-airspeed
- SKYbrary — Emergency Descent (general) — https://skybrary.aero/articles/emergency-descent
- EASA — Type Certificate Data Sheet A.084 (ATR42/ATR72) — https://www.easa.europa.eu/en/document-library/type-certificates
- Wikipedia — Pratt & Whitney Canada PW100/PW150 — https://en.wikipedia.org/wiki/Pratt_%26_Whitney_Canada_PW100
- Aerosoft/simMarket — ATR 72-500 for X-Plane (product page, feature list) — https://secure.simmarket.com/aerosoft-online-atr-72-500-for-x-plane.phtml

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — chaptered ATR-600 (turboprop, torque/ITT/Np/Ng power management, conventional flight controls) abnormal/emergency reference built largely from general public turboprop knowledge (type-specific abnormal source thin) 🟧; memory items 🟥 (engine failure/autofeather, propeller overspeed, severe icing, emergency descent, engine fire, evacuation-with-live-propeller hazard); no EDTO driftdown case for this network (Ch 13); condition-lever/CAS model limitations flagged throughout given the -500-generation candidate (Sim-Model §3); figures `[VERIFY]`. |
