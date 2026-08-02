# ETOPS / EDTO Procedures — OM E Procedure

**Scope:** Location-agnostic capability/procedure policy for **Extended Diversion Time Operations (EDTO / ETOPS)** — the rule (threshold vs maximum diversion time), the resulting area of operations, en-route-alternate suitability and planning weather minima, the Critical Point / ETP and the critical-fuel scenario, EDTO-significant systems & MEL, and the dispatch/in-flight go/no-go. Applies to K Global's EDTO-capable types; illustrated by the reference EDDF–KSFO OFP (2026-07-25) (A330-900neo / Trent 7000, planned **ETOPS RULE TIME 120 MIN**). An airspace or airport brief *applies* this method to a place; this file *defines* it.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Annex 6 Part I / Doc 10085 / FAA AC 120-42B & 14 CFR 121 / EASA AMC 20-6 / SKYbrary); type- and operator-specific numbers flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (capability/method), **not** a clearance, a chart, or an operator approval certificate. It states the EDTO *concepts* and how K Global's OFP builds and checks them; the **actual approved rule time, the type's EDTO-significant-system limits, and the per-leg entry/exit points and alternates come from the current OFP and the operator EDTO approval**, pulled at dispatch — this file stores no live data. Terminology note: ICAO's **EDTO** and the FAA/industry **ETOPS** are used interchangeably here (see §3); the reference OFP labels the field **"ETOPS RULE TIME"**. Where a figure is type-, config- or authority-specific it is flagged 🟧 and must be verified against the AFM/OFP, not read off this page. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/route- or type-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What EDTO is | Operation on a route with a point **more than the threshold time** (default **60 min**) from an adequate en-route alternate, at the approved cruise speed in ISA/still air — requires an **EDTO approval** from the State of the Operator |
| Reference rule time | **120 min** (reference EDDF–KSFO OFP, 2026-07-25) — the *maximum diversion time* K Global planned to; the aircraft stays within 120 min flying time of an adequate/suitable alternate along the whole route 🟥 |
| Threshold vs maximum | **Threshold time** = the trigger that makes a flight EDTO (default 60 min); **maximum diversion time (rule time)** = the approved ceiling that draws the area of operations. They are different numbers (§4). |
| Area of operations | The band within **120 min** of an adequate alternate, measured at the **approved one-engine-inoperative (OEI) cruise speed** in ISA/still air. For our widebody twins this is a radius **on the order of ~900–1,000 NM** around each alternate 🟧 (type/speed-specific — compute, don't assume) |
| EDTO type capability (K Global fleet) 🟩 | Type-max diversion capability per the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table A — public type facts): **A339 (A330-900neo)** beyond 180 → **285 min**; **A359 / A35K (A350)** → **370 min**; **B789 (787-9), B77W (777-300ER), B77F (777F)** → **330 min**; narrowbody twins (**BCS3, A319, A320, A21N, B738**) classic ETOPS to **180 min**. Quads (**A346, A388, B748**) carry no twin-style ETOPS diversion limit — the **ICAO EDTO adequate-aerodrome concept still applies (2+ engines)**. **These are type maxima, not what K Global flies:** the operator's **approved rule time (OpsSpec batch 1, 2026-07-25)** is **180 min for widebody twins** (A339, A359, A35K, B789, B77W) and **120 min for narrowbody twins** (BCS3, A319, A320, A21N, B738) 🟩 `[K Global OpsSpec 2026-07-25]`; the reference OFP dispatched at 120 conservatively within that approval. B77F rule time and the quad case remain 🟧 |
| Often-limiting system | 🟥 **Cargo-compartment fire-suppression time** is typically the most time-limited EDTO-significant system and the practical ceiling for longer rule times (§7) |
| Critical fuel | The route must carry fuel for the **critical-fuel scenario** — simultaneous depressurisation **+** engine-out driftdown from the most critical point to the limiting alternate, with ice/anti-ice/APU penalties and reserves (§6) |
| Alternate weather gate | 🟥 An EDTO alternate is usable in planning only if forecast **at/above the EDTO planning minima** across the window it might be used; reference OFP add-on minima **WX MIN 600 ft / 3219 m (≈2 SM)** (§5) |
| Illustrative OFP | **Reference EDDF–KSFO OFP (2026-07-25)**; **ENTRY** N6952.3 W07818.0 (alt **BGSF**) · **CP-for-fuel** N6925.4 W08539.8 · **EXIT** N6618.0 W10021.0 (alt **CYZF**) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Threshold vs maximum diversion time | 🟩 | Distinction sourced (ICAO Annex 6 / Doc 10085). Threshold = EDTO trigger (default 60 min); rule time = approved ceiling. Both stated in the OFP. |
| Area of operations / OEI speed basis | 🟧 | Method verified (14 CFR 121.161 / AC 120-42B / ICAO): ring = rule time × approved OEI cruise speed, ISA/still air. **Numeric radius is type/speed-specific — computed by the OFP, not fixed here.** |
| Adequate vs suitable alternates | 🟩 | Adequate = meets landing/RFFS/navaid criteria; suitable = adequate **and** forecast weather/winds/runway state acceptable in the use window. Sourced. |
| EDTO planning weather minima (add-ons) | 🟧 | 600 ft / 3219 m on the reference OFP matches the **single-precision-approach** add-on (+400 ft ceiling, +1 SM/1600 m vis). Exact add-on table is authority-specific — verify against the operator OpsSpec/AMC. |
| Critical fuel scenario | 🟥 | Decompression + engine-out driftdown from the critical point, plus ice/anti-ice/APU and reserves. Must be checked against fuel on board every EDTO leg. |
| EDTO-significant systems / MEL | 🟥 | Fuel, AC electrical, cargo fire suppression, pressurisation, hydraulics, APU. **Cargo fire-suppression time is usually the limiting system.** MEL for EDTO is a restricted subset of the MMEL. |
| Operator approval level (max approved diversion time) | 🟩 | **Set by OpsSpec batch 1 (2026-07-25):** widebody twins (A339, A359, A35K, B789, B77W) approved to **180 min**; narrowbody twins (BCS3, A319, A320, A21N, B738) approved to **120 min**. Quads (A346/A388/B748) carry no ETOPS diversion-time limit — ICAO EDTO adequate-aerodrome concept applies. B77F not yet covered by batch 1 — remains 🟧. `[K Global OpsSpec 2026-07-25]` |
| Dispatch go/no-go on alternate weather | 🟥 | Flight may not proceed beyond the threshold until the identified alternates are re-evaluated and confirmed at/above minima for the period of possible use (ICAO Annex 6). |

---

## 3. Applicability & terminology (EDTO / ETOPS)

- **The core concept — 🟥:** an aeroplane with two or more turbine engines may **not** be operated on a route containing a point farther (in flying time) than the **threshold time** from an adequate en-route alternate **unless the State of the Operator has granted an EDTO approval** (ICAO Annex 6 Part I, §4.7 and Attachment B, formerly Attachment D). EDTO exists to give large twins (and now any turbine multi) an operational-safety level equivalent to the older three/four-engine fleet while allowing more direct routings.
- **EDTO vs ETOPS — same thing, different label:** ICAO **Amendment 36 (2012)** replaced **ETOPS** (Extended-range Twin OPerationS) with **EDTO** (Extended Diversion Time Operations), broadening it from twins to **all turbine-engined aeroplanes**. Annex 6 explicitly permits continued use of the word "ETOPS" provided the EDTO concepts are correctly embodied. Consequently the **FAA retains "ETOPS"** (re-defined as *Extended* range OPerationS), **EASA** keeps **ETOPS** for twins and uses **LROPS** for 3/4-engine extended-range ops, and our **SimBrief OFP labels the field "ETOPS RULE TIME."** Treat the terms as synonyms in K Global docs; prefer **EDTO** for the concept and quote **"ETOPS RULE TIME"** when reading the OFP.
- **Twin vs more-than-twin speed basis — 🟧 (know which applies):** ICAO converts *threshold time* to distance using the **one-engine-inoperative (OEI) cruise speed** in ISA/still air **for twins**, and the **all-engines-operating (AEO) cruise speed for aeroplanes with more than two engines**. **The FAA uses the OEI speed for all types.** K Global's EDTO trunk (A339) is a **twin**, so the **OEI-speed basis** governs both the area of operations and the diversion-time calculation. Verify the basis coded in the SimBrief airframe profile.
- **Where the rule bites:** EDTO planning is invoked whenever the great-circle track leaves the threshold ring of the departure/destination/en-route alternates — most K Global oceanic, near-polar and remote-continental trunks. Non-EDTO long-haul still carries the lighter Annex 6 "beyond 60 minutes" planning discipline (alternate identification, current aerodrome info, comms). This doc addresses the **approved-EDTO** case.
- **Two founding principles (unchanged from ETOPS):** (1) **preclude** the diversion — reliable engines/systems + specific pre-dispatch maintenance; (2) **protect** the diversion if it happens — system redundancy + operational process (alternates, fuel, comms) so a diversion completes safely. Everything below serves one of these two.

---

## 4. Area of operations & threshold / rule time

- **Threshold time — 🟥 the trigger:** the range, expressed in time, established by the State of the Operator beyond which an EDTO approval is required. **Default is 60 minutes** (some States use a value up to the type's basic capability). Cross the threshold ring and the flight is an EDTO flight. 🟧 Confirm the threshold coded for K Global (assume **60 min** unless the OpsSpec says otherwise).
- **Maximum diversion time (the "rule time") — 🟥 the ceiling:** the approved maximum time, at the approved cruise speed in ISA/still air, that the aeroplane may be from an adequate alternate at any point on the route. **The reference OFP planned to 120 min.** The rule time — **not** the threshold — draws the operational band. Approvals step up as **≤90 · >90–180 · >180 min** (plus **route-specific 15% extensions** of an approved time).
- **How the area of operations is built — the method (not a fixed number):**
  1. Take the **approved OEI cruise speed** for the type (a published still-air TAS schedule in the AFM/CMP — for a widebody twin typically on the order of ~430–470 KTAS 🟧).
  2. Multiply by the **rule time** → a **still-air radius** (120 min × ~450 KTAS ≈ **~900 NM**; the commonly-quoted "~1,000 NM for ETOPS-120" reflects higher OEI schedules/rounding — **compute per type, don't quote a constant**) 🟧.
  3. Draw that radius around **every adequate en-route alternate**; the union of the rings is the **area of operations**. The planned track must stay inside it end-to-end.
- **Why "still air / ISA":** the ring is a **planning construct** for defining the approved area; the *actual* diversion time and the *critical-fuel* calc (§6) use **forecast winds and temperatures**, which can make the real downwind/upwind diversion materially longer or shorter than the still-air ring. Never confuse the still-air area-of-operations ring with the wind-corrected diversion time on the day.
- **Reference (EDDF–KSFO, 2026-07-25):** the great-circle EDDF–KSFO track leaves the European/North-American threshold rings over the North Atlantic/Greenland/Canadian near-polar segment; **BGSF** (entry side) and **CYZF** (exit side) are the adequate alternates whose 120-min rings cover the gap, defining the **ETOPS ENTRY (N6952.3 W07818.0) → EXIT (N6618.0 W10021.0)** segment.

---

## 5. En-route alternates — adequate / suitable & planning weather minima

- **Adequate vs suitable — 🟥 the two-stage test:**
  - **Adequate** = the aerodrome **can** receive the aeroplane: runway length/strength and geometry for the type, at least one instrument approach (navaid), and the required **Rescue & Fire-Fighting** category (EDTO typically needs **RFFS Category 4** available, or obtainable within the diversion time). Adequacy is a durable property of the field.
  - **Suitable** = adequate **and**, for the specific time window, the **forecast weather, crosswind/tailwind, and runway condition** are acceptable, and the field is open (no limiting NOTAM). Suitability is assessed per flight, per crossing time.
  - An EDTO alternate must be **adequate** to be listed and **suitable** to be counted at the planned crossing time.
- **EDTO planning weather minima (the "add-on" minima) — 🟧:** to list a field as an EDTO alternate at flight-planning, the **forecast** must be at/above minima that are **more conservative than the field's own approach minima** — an add-on that hedges against forecast error over the long lead time. The typical add-on:

  | Approach capability at the alternate | Add to ceiling | Add to visibility |
  |---|---|---|
  | At least **one precision** approach | **+400 ft** | **+1 SM (1600 m)** |
  | Two or more precision approaches (separate suitable) | +200 ft | +½ SM (800 m) |
  | Best available **non-precision / circling** | +400 ft | +1 SM (1600 m) over the higher base |

  The reference OFP shows **WX MIN 600 ft / 3219 m** — i.e. **ceiling 600 ft, visibility ≈2 SM** — which is exactly the **single-precision-approach** case (a ~200 ft precision DH + 400 ft = 600 ft; a ~1 SM approach vis + 1 SM = 2 SM = 3218.7 m). 🟧 The exact add-on table is **authority-specific** (FAA 14 CFR 121 / EASA AMC 20-6 / operator OpsSpec) — verify the coded values; do not treat 600/3219 as a universal constant.
- **The suitability window — 🟥:** each EDTO alternate must be forecast at/above the planning minima **for the whole period during which it might be used** — in practice a window bracketing the **expected time over the ETP/critical point** (commonly ~1 hour before to ~1 hour after the earliest-to-latest possible time of use). If the TAF dips below minima anywhere in that window, the field cannot be counted and an alternative plan (different alternate, lower rule time, re-route, delay) is required.
- **Reference alternates (EDDF–KSFO, 2026-07-25):** **BGSF Kangerlussuaq** (entry-side, most reliable Greenland field; procedural since radar ended ~Nov 2025) and **CYZF Yellowknife** (exit-side, Canadian NDA, true-referenced). Both must be re-checked at dispatch against the 600/3219 window around the ENTRY/CP/EXIT times. **BGTL Pituffik** is the far-north Greenland fallback (PPR/military — availability caveats). Field-specific altimetry/runway/de-ice detail lives in each airport brief (§9), not here.

---

## 6. Critical Point / ETP & the critical fuel scenario

- **Critical Point (CP) / Equal-Time Point (ETP) — 🟩:** the point on track from which the flying time to **two candidate diversion fields is equal**. It is computed pairwise (A↔alternate, alternate↔B) using the **OEI TAS corrected for forecast wind** — the still-air ETP is the perpendicular-bisector crossing, then shifted by a wind vector. Multiple ETPs exist on a long leg (one per adjacent alternate pair). The ETP tells the crew, at any moment, **which alternate is nearer in time** and therefore the default divert target.
- **CP for fuel vs ETP for time — 🟧 (don't conflate):** the **fuel-critical point ("CP for fuel")** is the point that **maximises the fuel required** for the worst-case diversion — it is not necessarily the equal-time point. The OFP computes it separately. Reference OFP: **CP-for-fuel N6925.4 W08539.8**, sitting between **ETOPS ENTRY (N6952.3 W07818.0 → BGSF)** and **ETOPS EXIT (N6618.0 W10021.0 → CYZF)**.
- **The critical fuel scenario — 🟥 what fuel the flight must carry:** at the fuel-critical point, assume the **simultaneous** worst case and confirm enough fuel remains to complete the diversion:
  1. **Rapid depressurisation** at the critical point → descend to **10,000 ft** (or the lowest safe/MSA-driven level) where fuel flow is high, **combined with**
  2. an **engine failure** → single-engine **driftdown** and OEI cruise to the limiting alternate, **plus**
  3. **airframe/engine ice protection** and any **airframe ice accretion** penalty for the descent/hold, **plus**
  4. **APU fuel** if the APU is required as a power source for the diversion, **plus**
  5. a **hold** at the alternate (commonly ~15 min at 1500 ft), **approach and land**, arriving with **final reserve** intact, **plus**
  6. applicable **performance/fuel-mileage penalties** (e.g. a 5% fuel-flow conservatism as required).
  The greater of the **normal trip+reserve fuel** and the **critical-fuel requirement at the CP** sets the minimum dispatch fuel. On a long over-water/near-polar EDTO leg the critical-fuel figure can be the binding constraint.
- **Reference margin (EDDF–KSFO, 2026-07-25):** trip burn ~**67.8 t** at CI 10 against ~**111 t** usable tankage leaves comfortable critical-fuel headroom on this sector (see A339 Dispatch §3/§5). Margin is sector-specific — **the OFP's critical-fuel line, not this note, is authoritative.** 🟧
- **Why decompression drives it:** a depressurisation forces a low-altitude, high-fuel-flow diversion; combined with OEI it is usually the **most fuel-demanding** case and therefore the sizing scenario — which is why cabin pressurisation is an EDTO-significant system (§7).

---

## 7. Aircraft systems, MEL & configuration for EDTO

- **EDTO-significant systems — 🟥:** systems whose failure would prejudice an EDTO diversion, each with a demonstrated capability that must exceed the diversion time:
  - **Cargo-compartment fire suppression / containment** — 🟥 **usually the most time-limited system** and the practical ceiling on rule time. The Halon (or equivalent) suppression bottle has a certified **duration**; the **maximum diversion time cannot exceed that duration** (with margin). A type certified "beyond 180" typically owes it to an enhanced/longer cargo-fire capability. **Check the cargo-fire time limit against the planned rule time on every EDTO release.**
  - **Fuel system** — sufficient independent fuel feed/management for OEI diversion.
  - **Electrical (AC) power** — independent AC sources able to sustain required loads OEI for the diversion; battery capability where relevant.
  - **Pressurisation / ECS** — drives the decompression leg of the critical-fuel scenario (§6); loss reshapes the diversion profile.
  - **Hydraulics / flight controls, engine-fire suppression, ice protection, APU** — redundancy and (for the APU) **in-flight start reliability**, since the APU is often the backup power source assumed in the diversion.
- **The most-limiting-system rule — 🟥:** a State must ensure the **maximum diversion time does not exceed the most limiting EDTO-significant-system time limit** in the AFM (unless a specific safety risk assessment justifies otherwise). In practice: **rule time ≤ min(all EDTO-significant-system limits)**, and the limiting one is normally cargo fire suppression. For **>180 min** the type must also meet a world-fleet **IFSD rate < 0.01/1000 engine-hours**.
- **MEL for EDTO — 🟥:** the operator's **EDTO MEL is a restricted subset of the MMEL** — items acceptable for a normal flight may be **no-go for EDTO** (e.g. an inoperative pack, an APU-start defect, a fuel-quantity/fuel-temp indication fault, a fire-detection channel). At dispatch, screen every open MEL item against its EDTO provisions **before** committing to an EDTO release; a disqualifying item forces a non-EDTO routing (inside the threshold rings) or removal of the defect.
- **Pre-departure discipline:** EDTO relies on **pre-dispatch maintenance precautions** (engine condition/oil-consumption/IFSD monitoring, APU-start validation, dual-maintenance-error avoidance, a pre-departure service check of fluids). Improper fluid servicing is a repeatedly-cited cause of ETOPS diversions — fluids (engine/APU/hydraulic/generator) must be correctly serviced and high-consumption trends addressed.

---

## 8. Dispatch & in-flight procedure (worked EDDF–KSFO example)

**Reference:** EDDF–KSFO, **A339 (A330-900neo / Trent 7000)**, planned **ETOPS RULE TIME 120 MIN**; **ENTRY** N6952.3 W07818.0 (**BGSF**) → **CP-for-fuel** N6925.4 W08539.8 → **EXIT** N6618.0 W10021.0 (**CYZF**); add-on **WX MIN 600 ft / 3219 m**.

**At dispatch (build & gate):**
1. **Confirm EDTO applies & the rule time** — track leaves the 60-min threshold rings → EDTO flight; set the SimBrief **ETOPS threshold & rule selector = 120 min** (A339 Dispatch §2). Confirm the **operator approval** actually authorises the rule time used 🟧.
2. **Verify the speed basis** — twin → **OEI cruise speed** governs the area of operations and diversion time (§3/§4).
3. **Read the entry/exit & alternates off the OFP** — ENTRY→BGSF, EXIT→CYZF; the OFP draws the 120-min rings and the ETOPS segment between ENTRY and EXIT.
4. **Alternate suitability gate — 🟥** — for **BGSF** and **CYZF** (and BGTL fallback), confirm the **forecast** is at/above **600 ft / 3219 m** across the **suitability window** bracketing the ENTRY / CP / EXIT crossing times, the field is open (NOTAM), RFFS ≥ Cat 4, and runway/crosswind acceptable. If any alternate fails the window → re-plan (alternative field, lower rule time inside the threshold rings, re-route, or delay). **Do not proceed beyond the threshold with an alternate below minima.**
5. **Critical fuel — 🟥** — read the OFP **CP-for-fuel (N6925.4 W08539.8)** critical-fuel figure (decompression + OEI driftdown + ice/anti-ice/APU + hold + reserves) and confirm planned fuel ≥ the greater of trip+reserves and critical fuel (§6). Reference sector has wide margin (~67.8 t trip vs ~111 t tank) 🟧.
6. **EDTO MEL & systems — 🟥** — screen every open MEL item against the EDTO subset; confirm cargo-fire-suppression time ≥ rule time, and APU / packs / electrics / fuel-temp & fire detection serviceable (§7). Confirm pre-departure fluid servicing done.
7. **Comms & monitoring** — confirm a reliable aeroplane↔airline comms means over the EDTO segment (HF/SATCOM/CPDLC — see the airspace briefs) and that the crew has current alternate weather.

**In flight (execute & re-evaluate):**
- **Before crossing the threshold / ENTRY — 🟥:** re-confirm the ENTRY-side alternate (**BGSF**) and downstream (**CYZF**) are **still** forecast/reported at/above minima for their windows; if not, hold, divert, or route to stay inside the threshold rings.
- **Track the ETP/CP:** know at all times which alternate is nearer in **time** (wind-corrected ETP) and that the **CP-for-fuel** point is the worst-case fuel gate; monitor actual fuel vs the critical-fuel line.
- **If an EDTO-significant system degrades (an "EDTO-relevant event"):** apply the QRH, elect turn-back / divert / continue with heightened alertness, and default the divert to the time-nearest suitable alternate per the ETP.
- **On a decompression or engine-out in the segment:** fly the assumed critical-fuel profile (driftdown / low-level as applicable) to the limiting alternate; the fuel plan was sized for exactly this.
- **Report** any EDTO-relevant event for continued-airworthiness oversight.

---

## 9. Cross-references

- **Fleet Capability Matrix (OM B)** — the per-type EDTO/ETOPS type-max diversion capability (Table A: A339 285, A350 370, 787/777 330 min; quads = EDTO adequate-aerodrome, no twin ETOPS limit); cite it rather than restating the figures. The operator-approved rule time column is now set 🟩 [K Global OpsSpec 2026-07-25] (widebody twins 180 min, narrowbody twins 120 min); quads and B77F remain 🟧 [operator — VERIFY]: `../OM B Fleet/Fleet Capability Matrix.md`
- **A339 (A330-900neo) — Dispatch** — the type application of this method (SimBrief ETOPS selector, reference OFP figures, en-route alternates, capability to 285 min): `../OM B Fleet/OM B Airbus/A339/A339 — Dispatch.md`
- **Polar & High-Latitude Operations (OM E)** — high-latitude diversion planning that sits *on top of* EDTO on the same reference leg (fuel freeze, cold alternates, comms redundancy): `./Polar and High-Latitude Operations.md`
- **Arctic / High-Latitude Domestic airspace brief** — FIR structure, comms, terrain/icecap driftdown, diversion table (BGSF/BGTL/CYZF/CYFB/CYYR…): `../OM C Routes and Destinations/Airspace/General/Arctic.md`
- **North Atlantic (NAT) airspace brief** — oceanic ETP considerations, coast-in/out alternates, comms/contingency: `../OM C Routes and Destinations/Airspace/General/North Atlantic.md`
- **North America** — no standalone airspace brief yet; Canadian NDA content currently lives in the Arctic brief: `../OM C Routes and Destinations/Airspace/General/Arctic.md` 🟧
- **BGSF — Kangerlussuaq** (entry-side EDTO alternate): `../OM C Routes and Destinations/Airports/North America/Greenland/BGSF — Kangerlussuaq.md`
- **CYZF — Yellowknife** (exit-side EDTO alternate): `../OM C Routes and Destinations/Airports/North America/Canada/CYZF — Yellowknife.md`
- **BGTL — Pituffik Space Base** (far-north fallback, PPR): `../OM C Routes and Destinations/Airports/North America/Greenland/BGTL — Pituffik Space Base.md`

---

## Open items (🟧 — confirm)

- **Operator EDTO approval level** — RESOLVED for the mainline twins by OpsSpec batch 1 (2026-07-25): widebody twins (A339, A359, A35K, B789, B77W) 180 min; narrowbody twins (BCS3, A319, A320, A21N, B738) 120 min 🟩. Still open: **B77F** (not in batch 1) and the quads (A346/A388/B748 — no ETOPS diversion-time limit as a quad; EDTO adequate-aerodrome concept applies instead).
- **Threshold time coded for K Global** — assumed default 60 min; confirm against the OpsSpec.
- **EDTO planning-minima add-on table** — 600/3219 matches the single-precision-approach case; confirm the exact authority/OpsSpec add-on values (FAA 14 CFR 121 vs EASA AMC 20-6) and codify the suitability-window bracket (±1 h assumed).
- **A339 EDTO-significant-system limits** — the actual **cargo-fire-suppression time limit** and other AFM/CMP time limits, and the **approved OEI cruise-speed schedule** (needed to compute the real area-of-operations radius rather than the ~900–1,000 NM estimate).
- **Speed basis coded in SimBrief** — confirm OEI-speed basis for the A339 twin (and AEO basis if any 3/4-engine type is ever flown EDTO/LROPS).
- **Other EDTO-capable types** — the **type-max** diversion capability for each is now captured in the Fleet Capability Matrix (Table A: A350 370, 787/777 330, narrowbody twins 180 min; quads = EDTO adequate-aerodrome). The **operator EDTO approval / rule time** is now held for A21N, B738, BCS3, B77W, B789 (and A339, A359, A35K) per OpsSpec batch 1 (180 widebody / 120 narrowbody) 🟩. Only **B77F** remains open, 🟧 [operator — VERIFY].
- **ICAO Annex 6 clause numbering** — §4.7 / Attachment B referenced from public summaries; verify exact current-edition numbering against the Annex text.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material (SimBrief airframe profiles, AFM/CMP) may inform content but is not listed. Durable policy — no live weather/NOTAM/fuel data stored here.*

- **ICAO Annex 6 — Operation of Aircraft, Part I, §4.7 & Attachment B (formerly Attachment D) — "Guidance for operations by turbine-engined aeroplanes beyond 60 minutes to an en-route alternate incl. EDTO"** — threshold time, maximum diversion time, area of operations, adequate/suitable alternates, critical fuel, EDTO-significant systems, most-limiting-system rule — summarised via SKYbrary (ICAO not freely hosted): https://skybrary.aero/articles/extended-range-operations (retrieved 2026-07-25).
- **ICAO Doc 10085 — Extended Diversion Time Operations (EDTO) Manual, 1st Ed. 2017** — EDTO airworthiness / flight-ops / maintenance requirements, time-limited systems, operational approval process — https://www2023.icao.int/WACAF/Documents/Meetings/2019/EDTO/10085_cons_en.pdf (retrieved 2026-07-25).
- **SKYbrary — Extended Diversion Time Operations (EDTO)** — EDTO definition (>60 min / threshold), approval process, en-route/takeoff/destination alternates, cargo-fire/electrical time-limited systems, alternate re-evaluation vs aerodrome minima — https://skybrary.aero/articles/extended-diversion-time-operations-edto (retrieved 2026-07-25).
- **SKYbrary — Critical Point (CP) / Equal Time Point (ETP)** — ETP definition, still-air perpendicular-bisector method + wind-vector correction, OEI TAS basis — https://skybrary.aero/articles/critical-point-cp (retrieved 2026-07-25).
- **FAA Advisory Circular 120-42B — Extended Operations (ETOPS and Polar Operations), 2008** — FAA area-of-operations (60/180 min at approved OEI cruise speed, still air), ETOPS OpsSpec/MEL/CAMP/PDSC, alternate weather minima, fluid-servicing note — https://skybrary.aero/sites/default/files/bookshelf/4019.pdf (retrieved 2026-07-25).
- **14 CFR 121.161 — Airplane limitations: Type of route (ETOPS area of operations)** — the US rule fixing the diversion-time distance at the one-engine-inoperative cruise speed in still air — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-121/subpart-H/section-121.161 (retrieved 2026-07-25).
- **EASA — AMC 20-6 (ETOPS) / CAT.OP.MPA (ETOPS operational approval & planning minima)** — EU ETOPS/LROPS approval, en-route alternate planning minima add-ons, critical-fuel scenario — https://www.easa.europa.eu/en/document-library/acceptable-means-of-compliance-and-guidance-materials (AMC-20 collection; retrieved 2026-07-25) 🟧 confirm exact AMC 20-6 revision.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.3 | 2026-07-25 | OpsSpec batch 1: operator-approval values set (EDTO 180/120, LVO CAT IIIB/I, LVTO 125m, RNP AR 0.3, RNP APCH+LPV, contingency 5%/ERA, final reserve 30 min, tankering case-by-case; steep approach deferred). |
| v0.1.2 | 2026-07-25 | Wired per-type capability facts to the Fleet Capability Matrix (operator-approval values remain pending OpsSpec). Stated type-max EDTO figures from matrix Table A as type facts (A339 285, A350 370, 787/777 330 min; narrowbody twins 180; quads = ICAO EDTO adequate-aerodrome, no twin ETOPS limit); operator-approved rule time held 🟧. |
| v0.1.1 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.1 | 2026-07-25 | Initial draft. Second OM E — Operations location-agnostic procedure. Defines EDTO/ETOPS terminology, threshold vs maximum (rule) diversion time and the OEI-speed area-of-operations method, adequate/suitable en-route alternates and the add-on planning minima (600/3219 single-precision-approach case + suitability window), the ETP/CP and critical-fuel scenario (decompression + OEI driftdown), EDTO-significant systems & MEL (cargo-fire as limiter), and the dispatch/in-flight go/no-go — worked against the reference EDDF–KSFO OFP (2026-07-25) (A339, ETOPS 120, ENTRY→BGSF / CP-for-fuel / EXIT→CYZF). Built from ICAO Annex 6 Pt I / Doc 10085 + FAA AC 120-42B & 14 CFR 121.161 + EASA AMC 20-6 + SKYbrary. Cross-linked to A339 Dispatch, Polar & High-Latitude Ops, Arctic & NAT briefs, BGSF/CYZF/BGTL. Operator approval level, add-on table, and A339 system time-limits flagged open. |
