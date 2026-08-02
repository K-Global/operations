# Flight Management & Operational Flows — OM E Procedure

**Scope:** Airframe-, airport- and flight-agnostic **method** for how K Global crews (1) manage the **flight-management computer** — the Airbus **MCDU/FMGS** or Boeing **FMC/CDU** — through initialisation, route & performance, oceanic/ETOPS fixes, secondary flight plans, fix info, holds & lateral revisions, PBN/RNP & approach set-up, datalink loading and change discipline; and (2) run the **standard operational flows by phase** — the flow *philosophy* and task-sharing, pre-flight through post-flight. This file defines the generic **flow and cross-check discipline**; the **challenge-and-response checklist, the button-by-button sequence, and every type-specific behaviour live in the OM B airframe pack** (Checklist / Sim-Model / QRH) and cannot be overridden here. **Airframe constraints cannot be ignored** — the generic flow is tailored per type in OM B; the A339 pack is the worked example.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Doc 8168 PANS-OPS / Annex 6 / EASA CAT.OP & AMC / SKYbrary FMS-Automation-Monitoring-PBN-SOP-TEM); type-specific behaviour flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (method/philosophy), **not** a checklist, a QRH, or a type rating. It states *how* to operate the FMS and *how* the flows are structured; **it never lists the actual challenge-and-response items, the exact MCDU/FMC pages, keystrokes, or autoflight logic — those are type facts owned by the OM B pack.** Where behaviour is Airbus-vs-Boeing- or model-specific it is flagged 🟧 and must be verified against the airframe pack and the aircraft's own FCOM/QRH, not read off this page. **Terminology (stated once, then generic):** "FMS" here means the whole flight-management system; the crew interface is the **MCDU** (Airbus, part of the FMGS with its ATC **mailbox**) or the **FMC/CDU / MCDU** (Boeing). Where this file says "the box", "scratchpad", "LSK" (line-select key), "EXEC/INSERT" or "ACTIVATE" it means the equivalent function on the flown type. This file governs the **airborne SOP method**; overarching SOP *policy* is owned by **OM A A07**. Sim context: X-Plane 11 / SimBrief dispatch. Flag legend: 🟥 hard requirement/hazard · 🟧 caution / type- or model-specific / unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What this doc is | The **generic FMS-management method** + the **phase-by-phase flow philosophy**; the *finished* flow (items, pages, callouts) is the OM B **Checklist** — this file is the reasoning behind it 🟩 |
| Golden rule of the box — 🟥 | **No data goes into the FMS unverified by the other pilot.** Every insertion that changes the lateral path, vertical path, speed, or performance is **built by one pilot and independently cross-checked by the other before EXEC/INSERT/ACTIVATE.** |
| Data-integrity gate — 🟥 | **Position/IRS alignment confirmed**, **nav database in currency (AIRAC valid for the whole flight)**, route **cross-checked leg-by-leg against the OFP/master document** — gross-error and reasonableness checks (distance, ETA, fuel, tracks) before pushback |
| Change discipline — 🟥 | The universal pattern is **build → review → execute** (Airbus: dashed/blue "MOD" plan reviewed on ND, then INSERT; Boeing: modified plan in white on the EXEC prompt, then EXEC). **Never rush an FMS change on short final** — below the stabilisation gate the FMS is monitored, not re-programmed |
| ETOPS / oceanic use | ETPs/equal-time points entered as **fixes** (place/bearing/distance or lat-long); **SEC F-PLN** pre-loaded for the likely diversion/escape; **SLOP** offset via lateral revision — feeds `./ETOPS-EDTO Procedures.md`, `./Polar and High-Latitude Operations.md`, `./Datalink and Oceanic Procedures.md` |
| PBN/RNP use | Approach **selected from the database (never built by hand)**; RNP value & GNSS/RAIM awareness; LNAV/VNAV or LPV set-up; **no unauthorised modification below the FAF/final gate** — feeds `./PBN and RNP Operations.md` |
| Flow philosophy | **PF/PM task-sharing, standard callouts, monitoring & cross-verification, automation-level management, TEM, stabilised-approach gate** — policy owned by **OM A A07**; this file applies it to the FMS + phase flows 🟩 |
| Type override — 🟥 | **Airframe constraints cannot be ignored.** Airbus **FMGS/mailbox/SEC-F-PLN** ≠ Boeing **FMC/CDU/ALTN-RTE**; autoflight logic, VNAV/managed-descent behaviour and driftdown pages differ. Tailored per type in OM B — matrix `../OM B Fleet/Fleet Capability Matrix.md`, worked example `../OM B Fleet/OM B Airbus/A339/A339 — Checklist.md` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| "No unverified data / independent cross-check" principle | 🟩 | Core industry SOP (SKYbrary FMS & Monitoring; ICAO PANS-OPS crew-cross-check). Sourced and airframe-agnostic. |
| Initialisation & data integrity (IRS align, AIRAC, route cross-check) | 🟩 | Method sourced. **The actual init pages/sequence are type-specific (🟧) — OM B Checklist.** |
| Route & performance, gross-error checks vs OFP | 🟩 | Reasonableness/gross-error checking is standard; the specific PERF/INIT fields and cost-index behaviour are type facts 🟧. |
| ETP/ETP-as-fix & SEC/ALTN flight-plan use | 🟧 | Method sourced; **SEC-F-PLN (Airbus) vs ALTN/secondary RTE (Boeing) behave differently — activation logic is type-specific.** Cross-links to ETOPS/Polar/Datalink. |
| Fix Info / fix pages, holds, offsets, lateral revisions | 🟧 | Concepts generic; page names, DIR-TO/RTE-revision behaviour and SLOP entry differ by type. |
| RNP/PBN & approach set-up, RAIM, LNAV/VNAV/LPV | 🟩 | Method aligns with PBN doc & ICAO PANS-OPS; **RNP/RNP-AR capability & authorisation is per-type/OpsSpec (🟧).** |
| Datalink / CPDLC route & oceanic-clearance loading | 🟧 | Method generic; FANS 1/A vs ATN B1 mailbox behaviour is type/avionics-specific — see Datalink doc. |
| Phase flows (pre-flight → post-flight) & PF/PM sharing | 🟩 | Flow philosophy sourced (SKYbrary SOP/TEM; OM A A07 owns policy). **Challenge-response items live in OM B Checklist (🟧).** |
| Stabilised-approach gate | 🟩 | Standard concept (SKYbrary/FSF); **numeric gate heights are type/ops-policy — verify in OM A A07 + OM B (🟧).** |
| Automation-level management / "climb the ladder down" | 🟩 | Sourced; mode/FMA specifics are type facts 🟧. |

---

## 3. Foundational principles (apply to everything below)

- **The golden rule — 🟥 no unverified data.** Every entry that alters the **lateral path, vertical path, speed schedule, or performance** is *built by one pilot and independently verified by the other* before it is made active. "Independent" means the checking pilot confirms the entry **against the source document (OFP / clearance / chart / plate), not merely against the other pilot's read-back.** This is the single most important habit in FMS operation and the reason most of the flows below pair a build with a cross-check.
- **Build → review → execute — 🟥 the change pattern.** A change is first **staged** (Airbus: a "MOD" temporary flight plan shown dashed/blue; Boeing: a modified route with the **EXEC** prompt illuminated 🟧), then **reviewed on the ND/plan and the relevant page**, then **made active** (INSERT / EXEC / ACTIVATE). A staged plan is *not flying the aircraft* — until it is executed the aircraft follows the old plan; after it is executed the new plan is live. Both pilots must know which state they are in.
- **The FMS is a tool, not the authority — 🟥.** The **OFP, the ATC clearance, the chart/plate, and the aircraft's own FCOM/QRH are authoritative.** When the box and the source disagree, believe the source and fix the box. Gross-error and reasonableness checks (does the distance, ETA, fuel and track *look right*?) are run at every major re-entry.
- **Automation-level management — 🟩.** Select the **lowest useful level of automation for the situation** and always be ready to step down a rung (managed/VNAV → selected/level-change → basic modes → hand-fly). If the aircraft is not doing what is expected, **do not re-program the box in a hurry — take a lower automation level, fly the aircraft, then sort the FMS.** Monitoring the **FMA / mode annunciations** is how the crew knows what the automation is actually doing.
- **Type specifics defer to OM B — 🟥.** This document is deliberately airframe-agnostic. **The keystrokes, page names, autoflight logic, VNAV/managed-descent behaviour, mailbox/uplink handling, and secondary-plan mechanics are type facts** and live in the OM B airframe pack (Checklist / Sim-Model / QRH) and the aircraft FCOM. **Airframe constraints cannot be ignored** — where the generic method and the type differ, the type wins. Fleet placement of these capabilities: `../OM B Fleet/Fleet Capability Matrix.md`.

---

# Part 1 — FMS / MCDU / FMC management

*Generic method. Airbus **MCDU** (within the **FMGS**, with the ATC **mailbox**) and Boeing **FMC/CDU** are named once here; below, "the box" / "the FMS" is used generically. Page names in examples are illustrative — verify against the type.*

## 4. Initialisation & data integrity

- **Position initialisation / IRS-IRU alignment — 🟥.** The inertial systems are aligned at a **known, verified gate/parked position** before movement; a mis-set init position corrupts every downstream position, ETP and RNP computation. Confirm the **entered position matches the actual ramp position** (from the airport chart / known coordinates), confirm **all IRS/ADIRU units go to NAV/ALIGNED**, and do **not move the aircraft during alignment** 🟧 (alignment time and the exact procedure are type-specific — OM B).
- **Nav-database currency (AIRAC) — 🟥.** Confirm the **active AIRAC cycle is valid for the entire flight** (including any post-midnight or cycle-boundary sector). If the flight will cross into a new cycle, verify the box holds and can activate the correct cycle. **Never operate a procedure the database cannot render** — a chart with no coded procedure is flown by other means, not hand-built into the box (see §10).
- **Route entry & independent cross-check — 🟥.** The route is entered (by company route/co-route where available, or waypoint-by-waypoint) and then **cross-checked leg-by-leg against the OFP/master flight plan by both pilots** — waypoint sequence, tracks and distances, discontinuities resolved, no "phantom" or duplicate waypoints, no auto-inserted database default that contradicts the OFP. **Total distance and ETA/ETE are reasonableness-checked against the OFP.** This is the primary application of the golden rule (§3).
- **The "no data goes in unverified" principle in practice — 🟥.** One pilot loads; the other verifies **against the source**, not against the loader's words. Applies to route, performance, weights, takeoff data, winds and every later revision. A silent solo entry that changes the path is a defeated cross-check.

## 5. Route & performance

- **Flight-plan entry & winds/temps — 🟩.** Enter the routing, then **upload/enter the forecast winds and temperatures** (climb, cruise-by-waypoint, descent) so the FMS predictions (ETA, fuel, top-of-descent, ETP) are wind-corrected; a route with no winds gives optimistic still-air predictions. Datalink wind upload where available (§11) still gets a reasonableness check.
- **Cost index / cruise & descent forecasts — 🟩.** Enter the **cost index** from the OFP (it sets the speed schedule — a wrong CI silently changes speeds and burn), the **cruise level and any planned step climbs**, and the **descent forecast/QNH**. Confirm the resulting **planned Mach/speed and TOD** are sensible.
- **Weights & takeoff/performance data — 🟥.** Enter **ZFW/ZFWCG (or gross weight) from the loadsheet**, block/planned fuel, and the **takeoff data (V-speeds, thrust/FLEX or derate, THS/stab trim, flap/CONF)**. **V-speeds and the trim setting are gross-error-checked and cross-verified** — an out-of-range V-speed or a trim outside the green band is a takeoff-safety item, not a typo to wave through. The actual data source (performance app / OFP) and field names are type/ops-specific 🟧.
- **Gross-error / reasonableness check vs the OFP — 🟥.** Before committing, compare the **FMS trip fuel, ETA and route distance against the OFP**. A material mismatch (fuel, distance, ETA, or a track that "doesn't look right" on the ND) means **stop and find the cause** — usually a mis-entered waypoint, wind, CI or weight. The OFP is authoritative (§3).

## 6. ETPs / equal-time points as FMS fixes

- **Why they go in the box — 🟩.** On ETOPS/EDTO, oceanic and remote legs the **ETP/equal-time points and the critical/decision points** are entered as **fixes** so the crew always sees, on the ND, where they are relative to the point that governs the diversion decision. This makes the ETOPS/EDTO go/continue/divert decision (`./ETOPS-EDTO Procedures.md` §6/§8) a *visual* one, not a paper calculation done under pressure.
- **How to enter them — 🟩.** Enter each point either as a **place/bearing/distance** off a coded waypoint or as a **latitude/longitude fix** (from the OFP), named consistently (e.g. ETP1, CP, EEP/EXP), and cross-checked against the OFP coordinates by both pilots (§4). On the reference EDDF–KSFO OFP these correspond to the **ETOPS ENTRY / CP-for-fuel / EXIT** points and their alternates (`./ETOPS-EDTO Procedures.md` §8) 🟧.
- **Using them in flight — 🟥.** Abeam/at an ETP, the crew reads **which alternate is nearer in time** and confirms fuel against the critical-fuel line; the point drives the default divert target if an EDTO-relevant event occurs. High-latitude overlays (fuel-freeze, cold alternates, grid/true nav) sit on top — `./Polar and High-Latitude Operations.md`.

## 7. Secondary (SEC) flight-plan use

- **What it is for — 🟩.** The **secondary flight plan** (Airbus **SEC F-PLN**; Boeing **secondary/ALTN route** 🟧) is a *pre-built, non-active* plan the crew can **activate quickly** when the situation changes. Standard K Global uses:
  - a **likely diversion/alternate routing** pre-loaded for the ETOPS/oceanic segment or a weather-threatened destination, so a divert is an *activation*, not a *build*;
  - a **likely re-route** (expected runway change, a commonly-issued re-clearance, a company preferred re-route);
  - an **engine-out driftdown / escape routing** for terrain-critical or high-terrain segments, so the OEI escape path is one action away.
- **Activation discipline — 🟥.** A secondary plan is **staged, not flying** until activated; **activation makes it the active plan and drops the previous one** — treat activation with the same build→review→execute cross-check as any path change (§3). **Airbus SEC-F-PLN and Boeing secondary-route activation behave differently** (what is preserved, what is lost, how the active plan is affected) — **verify the type behaviour in OM B before relying on it (🟧).** Keep the secondary *current*: an out-of-date secondary is worse than none because it invites a wrong activation.

## 8. Fix Info / fix pages

- **What they give you — 🟩.** The **Fix Info / fix pages** draw **radials, ranges (rings) and abeam references** from a chosen waypoint onto the ND — used for **terrain/abeam awareness, decision/abeam points, a range ring for an ETP or a driftdown gate, and constraint/energy awareness around top-of-descent.** They add situational awareness **without altering the flight plan**.
- **Typical uses — 🟩.** A range ring to know "X NM to run" to a constraint or an alternate; a radial to identify an abeam point or a terrain-clearance line; a PBN/RNP fix reference to confirm the aircraft is where an RNP procedure expects it. Because fix info **does not modify the path**, it is a low-risk, high-value tool — but the **page and entry method are type-specific** 🟧.

## 9. Holds, offsets & lateral revisions

- **Holds — 🟩.** Holds are **built at a waypoint via a lateral revision** (database hold, or a manual hold defined by inbound course/turn/leg time or distance), reviewed on the ND, then executed. Confirm the **hold fits the airspace/constraint** (right turns/left turns, leg length, speed/altitude) before executing; enter an **EFC/onward-clearance awareness** so the hold is not flown indefinitely.
- **SLOP / lateral offsets — 🟥.** Strategic Lateral Offset (**SLOP**) is applied as a **lateral offset via a lateral revision** on oceanic/remote tracks per `./Datalink and Oceanic Procedures.md` — right-side offsets in defined increments, established and **cancelled at the correct points**, and coordinated as required. The offset is a **path change** and follows the cross-check pattern.
- **Route revisions & DIR-TO discipline — 🟥.** Route revisions (insert/delete waypoint, airway change, new arrival) are **staged, reviewed leg-by-leg, then executed** (§3). **DIR-TO (direct-to) is powerful and easy to misuse:** confirm you are going **direct to the *intended* waypoint** (beware duplicate names / wrong entry in the list), confirm **no constraint or terrain is cut off**, and confirm both pilots agree **before** executing — a wrong DIR-TO can delete downstream constraints or turn the aircraft toward terrain.

## 10. RNP / PBN & approach set-up

- **Select, don't build — 🟥.** The **approach (and its transition/STAR) is selected from the navigation database** — it is **never hand-built** from a chart. If the database has no coded procedure, the procedure is **not flown as an RNP/PBN approach.** This is the cardinal PBN rule (`./PBN and RNP Operations.md`).
- **RNP value & sensor awareness — 🟩.** Confirm the **required navigation-performance value** for the phase/approach and that the system is meeting it; confirm the **navigation source (GNSS and, where required, RAIM/ABAS availability)** — a **RAIM/GNSS-availability prediction** is checked at planning/dispatch for RNP approaches where required (`./PBN and RNP Operations.md`). Loss of the required performance means the approach reverts to what the remaining capability supports, or a go-around.
- **LNAV / VNAV / LPV set-up — 🟩.** Set the approach up for the **intended minima line** (LNAV, LNAV/VNAV, or LPV), confirm the **final approach fix, the coded vertical path/angle and the minima** match the plate, arm the correct lateral/vertical modes, and confirm the **missed approach is coded and reviewed**. Exact mode names/behaviour are type facts 🟧.
- **No unauthorised modification below the gate — 🟥.** Once established on final (at/inside the **FAF or the stabilisation gate**), the FMS approach is **flown and monitored, not re-programmed.** A late change to the approach, minima or path below the gate is a destabiliser — if the approach is no longer valid, **go around and re-set up in a safe configuration** (§18). RNP AR carries additional, authorisation-gated constraints — `./PBN and RNP Operations.md`.

## 11. Datalink loading

- **CPDLC / uplink route loading — 🟩.** Where the avionics support it, **route clearances, oceanic clearances and wind uploads can be loaded via datalink (CPDLC/FANS 1/A or ATN B1)** into the FMS mailbox/uplink buffer. A loaded uplink is **reviewed before it is accepted/inserted** — an uplinked route or clearance gets the **same leg-by-leg cross-check against the source** as a manual entry (§4). An uplink that does not match the expected clearance is queried, not blindly loaded.
- **Oceanic clearance loading — 🟩.** The oceanic clearance (track/level/speed) is loaded and **cross-checked against the flight plan and the read/confirmed clearance** before the box is reconfigured for the oceanic entry; Mach-number technique and reporting discipline follow `./Datalink and Oceanic Procedures.md`. **Mailbox/uplink handling is avionics- and type-specific (🟧).**

## 12. Change discipline (the cross-check pattern, restated)

- **Modify → review → execute — 🟥.** Restating §3 because it is where errors happen: **build** the change, **review** it on the ND/plan and the relevant page (both pilots), **execute** it, then **confirm the FMA/mode and the ND show what was intended.** Announce the change and its state ("staged", "executed") so both pilots share the same mental model.
- **Never rush an FMS change on short final — 🟥.** Below the stabilisation gate the FMS is **monitored, not re-programmed.** Head-down reprogramming close to the ground is a primary cause of path/altitude excursions and CFIT-precursor events. If a change is genuinely needed late, the safe answer is usually **take a lower automation level and/or go around**, then re-program in a low-workload phase. The box waits; the ground does not.

---

# Part 2 — Operational flows by phase

*The standard SOP **flows** and their philosophy. The **challenge-and-response items and the exact sequence live in the OM B Checklist** (worked example: `../OM B Fleet/OM B Airbus/A339/A339 — Checklist.md`). Here we define **what each flow is for, who does what, and the cross-checks** — the reasoning the checklist backstops. Overarching SOP policy: **OM A A07**.*

## 13. Pre-flight

- **Cockpit-preparation flow — 🟩.** A **structured, repeatable scan** (typically panel-by-panel / flow-pattern) that leaves the aircraft configured and the safety/nav systems set: power/electrics, IRS/ADIRU alignment (§4), lights/signs, pressurisation/ECS, and the systems set-up the type requires. The **flow is done first, then the checklist confirms it** — the checklist is a *back-up to the flow, not a substitute for it*.
- **FMS / performance set-up — 🟥.** Initialise and cross-check the box per **Part 1**: position/AIRAC/route, winds, CI, weights and takeoff data — **built by one pilot, verified by the other against the OFP/loadsheet** (§4–§5). This is the single most cross-check-intensive pre-flight task.
- **Transition altitude / transition level — 🟩 [K Global OpsSpec 2026-07-25].** K Global crews **use the published state transition altitude (TA)** for the climb-out altimetry change and the **published state transition level (TL)** for the descent altimetry change, exactly as charted/AIP for the departure, en-route and destination states — **there is no operator override**; the box and the crew always set the local published value, cross-checked against the chart at each transition (§16 climb, §17 descent).
- **Briefings — departure, threats, TEM — 🟩.** A **departure/taxi/take-off briefing** (runway, SID, initial altitude/speed, stop/go and rejected-takeoff decision, engine-out escape/acceleration altitude, terrain, MSA) framed by **Threat & Error Management** — the crew names the **threats** for this departure (weather, terrain, hot/high, contamination, traffic, unfamiliarity) and the **mitigations**. Briefings are **interactive** (PM confirms, not just listens), not a monologue.
- **Fuel & OFP review — 🟩.** Confirm **planned fuel vs required** (trip/contingency/alternate/final reserve/additional, and any ETOPS critical-fuel driver), the route, alternates and the fuel policy for the sector — `./Fuel Policy.md`. Note the **fuel-check points** to be used in cruise (§16).
- **MEL / CDL check — 🟥.** Screen the tech log and any open items against the **Minimum Equipment / CDL policy** (`../OM A Policy and SOP/A09 — Minimum Equipment Policy.md`): confirm each defect is **acceptable for this flight and this regime** (an item may be go for a normal sector but **no-go for ETOPS/LVO/PBN** — cross-check the relevant OM E doc). A disqualifying item is resolved before dispatch.
- **Loadsheet / CG — 🟥.** Confirm the **final loadsheet weights and CG are within limits** and **match what was entered in the FMS** (ZFW/ZFWCG and the takeoff data derived from them). A loadsheet-to-FMS mismatch invalidates the performance figures — reconcile before pushback.

## 14. Taxi / before-take-off

- **Flow — 🟩.** Complete the **before-taxi/before-take-off flow**: flight controls checked full and free, flaps/slats and trim set to the take-off configuration **matching the take-off data** (§5), autobrake/RTO as required, radar/anti-ice as required, take-off memo/config confirmed. **Cross-check the final take-off data one last time** — any late runway/intersection/weight change means **re-computing and re-entering, then re-verifying** the data (do not fly stale take-off numbers).
- **TEM in the taxi phase — 🟩.** Sterile-flight-deck discipline, **positional/lookout awareness** (hot-spots, runway-incursion risk, hold-short instructions read back and monitored), and a shared plan for the **rejected take-off** (who calls, who does what). Confirm the **actual assigned runway and SID match the FMS** before entering the runway.

## 15. Take-off & initial climb

- **Flow & philosophy — 🟩.** PF flies to the FMA/target; **PM monitors and calls deviations** (speed, thrust, config, mode) and handles the routine radio/gear/flap actions per the type flow. The **rejected-take-off decision** is the captain's per the briefed criteria; after V1 the flight is committed to fly. **Engine-out**: fly the **briefed escape/acceleration profile** (SID or the type OEI escape/SEC-F-PLN routing, §7) — do not improvise a path near terrain.
- **Automation & mode confirmation — 🟩.** Engage automation at the **briefed altitude/point**, and **confirm the FMA shows the intended lateral/vertical/speed modes** (LNAV/NAV, VNAV/managed climb, target speed). An unexpected mode is caught by monitoring, not discovered later.

## 16. Climb & cruise

- **Climb — 🟩.** Comply with SID/PBN constraints (LNAV/RNAV as required, §10), monitor the climb against the FMS profile and any **crossing restrictions**, and confirm level-off at the cleared/planned level with the correct altimetry set at transition.
- **Cruise — FMS monitoring — 🟩.** Cruise is a **monitoring phase**: track **actual position vs the FMS/OFP waypoints**, confirm each waypoint sequences correctly (no un-sequenced or skipped legs), and keep the **FMA and the active leg matching the clearance**. Position monitoring is the backstop against a **gross-navigation error** on oceanic/remote tracks.
- **Fuel checks vs plan — 🟥.** At the **planned fuel-check points** (each waypoint or a set interval), compare **fuel remaining vs the OFP figure** for that point; a developing **negative trend** is investigated early (winds, level, config, leak) and drives an en-route decision (step, re-route, tanker-stop, or a **MINIMUM FUEL / MAYDAY FUEL** declaration if it comes to it) per `./Fuel Policy.md`.
- **Step climbs — 🟩.** Fly the **planned step climbs** as weight/winds allow — staged and executed with the cross-check pattern (§9/§12); confirm the step is still optimal against actual winds/temps before requesting it.
- **ETP / alternate awareness — 🟥.** On ETOPS/oceanic/polar legs keep the **ETP/CP fixes (§6) and the current best alternate** in view; know at every moment the divert target and the fuel state against the critical-fuel line (`./ETOPS-EDTO Procedures.md`, `./Polar and High-Latitude Operations.md`). Pre-load/keep current the **SEC diversion plan** (§7).

## 17. Descent & approach preparation

- **Arrival & approach briefing — 🟩.** Before top-of-descent, brief the **STAR, the approach (selected from the database, §10), the runway, minima, the missed approach, and the energy/vertical plan** — again framed by **TEM** (terrain, weather, tailwind, contamination, short/limited runway, hot/high, LVO — cross-link the relevant OM E doc). Interactive: PM confirms the set-up matches the plate.
- **FMS approach set-up — 🟥.** Set up the approach per **§10**: correct approach and transition selected, FAF/vertical path/minima confirmed against the plate, correct modes armed, missed approach coded and reviewed, **cross-checked by both pilots.** Load any expected re-route/runway change as a **secondary plan (§7)** so a switch is an activation, not a scramble.
- **Energy plan — 🟩.** Confirm the **descent point (TOD), speed and configuration plan** get the aircraft to the stabilisation gate on speed, on path, in configuration. Monitor **actual vs planned descent path** and intervene early (speedbrake, lower automation, request track miles) — energy problems are cheap to fix early and expensive late.

## 18. Approach & landing

- **Stabilised-approach gate — 🟥.** The approach must be **stabilised by the gate** (on the correct lateral/vertical path, on speed, in landing configuration, thrust set, checklists complete). **Not stabilised at the gate = go around.** The gate heights and the stabilisation criteria are **ops-policy/type-specific** (OM A A07 + OM B) 🟧 — this file mandates that a **gate exists and is honoured**.
- **FMS is monitored, not re-programmed — 🟥.** Below the gate the FMS/approach is **flown and monitored** (§10/§12); a late need to change means **go around**, not head-down reprogramming.
- **PF/PM & callouts — 🟩.** Standard callouts (mode/FMA, deviations, minima/decision, "stable"/"go-around") per OM A A07 and the type flow; **either pilot may (and must) call a go-around** if the approach is unsafe or unstable. The go-around is a **flown, briefed manoeuvre**, not a surprise.

## 19. Post-flight

- **After-landing / taxi-in flow — 🟩.** Complete the **after-landing flow** (config clean-up, systems as required, taxi-in) with **sterile-cockpit and positional discipline maintained until parked** — runway-incursion and taxi-collision risk does not end at touchdown.
- **Shutdown / secure flow — 🟩.** Secure the aircraft per the type shutdown flow (engines/APU/electrics/fuel/doors as required) and complete the **parking/secure checklist**.
- **Tech log / defect reporting — 🟥.** Record and report any **defect or occurrence** in the tech log and via the reporting process — `../OM A Policy and SOP/A12 — Occurrence Reporting and Investigation.md`. An **EDTO-relevant or PBN/nav-relevant event is reported** for continued-airworthiness/oversight (`./ETOPS-EDTO Procedures.md` §8).
- **FMS / nav-data note — 🟩.** Note any **FMS/nav anomaly** (mis-behaving procedure, database discrepancy, position/RAIM issue, an approach not coded as charted) so it is captured for the next crew and for database/defect follow-up — a database error found on one sector protects the next.

## 20. Cross-cutting SOP principles

*OM A A07 (SOP Philosophy & Structure) **owns the overarching policy**; the points below are how it applies to the FMS + phase flows in this doc.*

- **PF/PM task-sharing — 🟩.** Clear division: **PF flies/manages the flight path; PM monitors, cross-checks, works the radio/systems, and runs the checklist.** FMS entries follow the golden rule — one builds, the other verifies (§3). Task-sharing is **explicit** through changes of automation and role.
- **Standard callouts — 🟩.** A **common, minimal callout set** (FMA/mode changes, deviations, gates, minima, go-around) so that monitoring is audible and a deviation is called, not silently watched. Exact wording is per OM A A07 / OM B.
- **Monitoring & cross-verification — 🟥.** **Active monitoring is a primary task, not a passive default** — the PM (and PF) verify the aircraft is doing what the FMS/clearance intends (position, path, mode, energy, fuel). Most FMS-error and automation-surprise events are monitoring breakdowns.
- **Automation-level management — 🟩.** Match the automation to the task and **step down a rung when confused or high-workload** (§3). "If it isn't doing what you want, take control and fly."
- **Threat & Error Management — 🟩.** Every briefing names the **threats** and **mitigations**; errors are **trapped early** (cross-checks, callouts, gates) and **managed** before they become undesired states. TEM is the connective tissue of all the flows above.
- **Stabilised-approach gate — 🟥.** A gate exists, is briefed, and is honoured (§18). It is the last, hardest trap for an unstable/energy-mismanaged approach.

---

## Cross-references

- **ETOPS / EDTO Procedures (OM E)** — ETPs/critical points as fixes, EDTO go/continue/divert, critical fuel: `./ETOPS-EDTO Procedures.md`
- **Polar & High-Latitude Operations (OM E)** — high-latitude overlay on ETP/alternate/fuel-freeze and true/grid nav: `./Polar and High-Latitude Operations.md`
- **Datalink & Oceanic Procedures (OM E)** — CPDLC/oceanic-clearance loading, SLOP offset, Mach-number technique, reporting: `./Datalink and Oceanic Procedures.md`
- **PBN & RNP Operations (OM E)** — nav-spec ladder, RNP value/RAIM, RNP APCH → LNAV/LNAV-VNAV/LPV, RNP AR authorisation: `./PBN and RNP Operations.md`
- **Fuel Policy (OM E)** — fuel scheme, in-flight fuel checks/commit point, MINIMUM/MAYDAY FUEL: `./Fuel Policy.md`
- **OM A A07 — SOP Philosophy & Structure** — owner of the overarching SOP policy this doc applies: `../OM A Policy and SOP/A07 — Standard Operating Procedures — Philosophy and Structure.md`
- **OM A A09 — Minimum Equipment Policy** — MEL/CDL dispatch screen (incl. regime-specific no-go): `../OM A Policy and SOP/A09 — Minimum Equipment Policy.md`
- **OM A A12 — Occurrence Reporting & Investigation** — tech-log/defect and EDTO/nav-event reporting: `../OM A Policy and SOP/A12 — Occurrence Reporting and Investigation.md`
- **Fleet Capability Matrix (OM B)** — per-type placement of PBN/RNP-AR/LVO/EDTO/autoflight capability: `../OM B Fleet/Fleet Capability Matrix.md`
- **A339 — Checklist (OM B, worked example)** — the *finished* challenge-and-response flow this method backstops: `../OM B Fleet/OM B Airbus/A339/A339 — Checklist.md`
- **A339 — Sim-Model (OM B)** — model-specific FMGS/autoflight fidelity notes (where the sim differs from the jet): `../OM B Fleet/OM B Airbus/A339/A339 — Sim-Model.md`

---

## Open items (🟧 — confirm)

- **Standard callout set & wording** — owned by OM A A07 (stub); this doc references it generically. Confirm the K Global callout list once A07 is populated.
- **Stabilised-approach gate heights & criteria** — the exact gate (e.g. 1000 ft IMC / 500 ft VMC) and the stabilisation criteria are ops-policy — confirm in OM A A07 and reconcile per type in OM B.
- **Secondary-plan behaviour per type** — Airbus SEC-F-PLN vs Boeing secondary/ALTN activation logic (what is preserved/lost on activation) — document per type in the OM B packs; only the A339 pack currently exists.
- **Datalink/mailbox handling per type/avionics** — FANS 1/A vs ATN B1 uplink-review/insert mechanics — capture in OM B + Datalink doc as type packs are built.
- **RNP AR / LVO / RNP-approach operational authorisation** — capability is in the Fleet Capability Matrix; the **operator/OpsSpec authorisation** (which crews/types are approved) is still open across OM E — verify before line use.
- **Automation-management specifics** — mode/FMA names and the managed-vs-selected / VNAV behaviour are type facts; A339 documented, other types pending their OM B packs.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim/OEM material (SimBrief airframe profiles, aircraft FCOM/QRH) may inform content but is not cited or reproduced. No verbatim OEM FCOM text is used. Durable method only — no live route/type data stored here.*

- **ICAO Doc 8168 — Procedures for Air Navigation Services: Aircraft Operations (PANS-OPS), Vol I** — flight-procedure design/flying, database-coded procedures, PBN/RNP approach flying and crew cross-check philosophy — summarised via SKYbrary (ICAO not freely hosted): https://skybrary.aero/articles/procedures-air-navigation-services-aircraft-operations-pans-ops-doc-8168 (retrieved 2026-07-25).
- **ICAO Annex 6 — Operation of Aircraft, Part I** — operator SOPs, equipment/navigation-database and operational-control requirements underpinning the flow discipline — summarised via SKYbrary: https://skybrary.aero/articles/icao-annex-6-operation-aircraft (retrieved 2026-07-25).
- **EASA — CAT.OP.MPA (Operating Procedures) & associated AMC/GM (SOPs, use of automation, monitoring, stabilised approach)** — EU operational-procedure and SOP requirements — https://www.easa.europa.eu/en/document-library/acceptable-means-of-compliance-and-guidance-materials (retrieved 2026-07-25) 🟧 confirm exact CAT.OP.MPA point references.
- **SKYbrary — Flight Management System (FMS)** — FMS role, initialisation, route/performance data entry, database currency, crew cross-check of entries: https://skybrary.aero/articles/flight-management-system-fms (retrieved 2026-07-25).
- **SKYbrary — Automation & Flight Path Management / Use of Automation** — automation-level management, mode/FMA monitoring, automation-surprise avoidance, "fly the aircraft first": https://skybrary.aero/articles/flight-deck-automation (retrieved 2026-07-25).
- **SKYbrary — Monitoring / PF & PM (Pilot Flying / Pilot Monitoring)** — active monitoring as a primary task, cross-verification, task-sharing and callouts: https://skybrary.aero/articles/pilot-monitoring (retrieved 2026-07-25).
- **SKYbrary — Standard Operating Procedures (SOPs)** — SOP purpose/structure, flow-then-checklist philosophy, briefings: https://skybrary.aero/articles/standard-operating-procedures-sops (retrieved 2026-07-25).
- **SKYbrary — Threat and Error Management (TEM)** — threat identification, error trapping and management applied through briefings and cross-checks: https://skybrary.aero/articles/threat-and-error-management-tem (retrieved 2026-07-25).
- **SKYbrary — Stabilised Approach / Flight Safety Foundation ALAR** — the stabilised-approach gate concept and go-around discipline: https://skybrary.aero/articles/stabilised-approach (retrieved 2026-07-25).
- **SKYbrary — Performance-Based Navigation (PBN) / RNP APCH / GNSS RAIM** — selecting coded approaches, RNP value/RAIM awareness, LNAV/LNAV-VNAV/LPV set-up: https://skybrary.aero/articles/performance-based-navigation-pbn (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | OpsSpec batch 3: TA/TL published, GLS where supported, EFB perf authorised, derate ≤25%, PIC extra-fuel discretion, tankering ≥10% guideline. |
| v0.1 | 2026-07-25 | Initial draft. Airframe-agnostic OM E — Operations procedure for FMS/MCDU/FMC management (Part 1: initialisation & data integrity, route & performance, ETPs-as-fixes, secondary flight plan, fix info, holds/offsets/lateral revisions, RNP/PBN & approach set-up, datalink loading, change discipline) and the standard operational flows by phase (Part 2: pre-flight → post-flight + cross-cutting SOP principles). States the golden rule (no unverified data / independent cross-check) and build→review→execute pattern; explicitly defers all keystroke/page/autoflight/secondary-plan behaviour to the OM B airframe pack (A339 Checklist/Sim-Model worked example, Fleet Capability Matrix) with "airframe constraints cannot be ignored." Cross-linked to ETOPS/EDTO, Polar, Datalink & Oceanic, PBN/RNP, Fuel Policy (OM E) and A07/A09/A12 (OM A). Built from ICAO Doc 8168 PANS-OPS / Annex 6 + EASA CAT.OP + SKYbrary FMS/Automation/Monitoring/SOP/TEM/Stabilised-Approach/PBN. Open items: callout set & gate heights (A07), per-type secondary-plan & datalink behaviour, RNP AR/LVO operational authorisation. |
