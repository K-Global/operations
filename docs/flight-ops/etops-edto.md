---
title: ETOPS / EDTO
---

<span class="kg-eyebrow">OM E · Operations</span>

# ETOPS / EDTO Procedures

**Location-agnostic capability and procedure policy for Extended Diversion Time
Operations (EDTO / ETOPS)** — the rule (threshold vs maximum diversion time),
the resulting area of operations, en-route-alternate suitability and planning
weather minima, the Critical Point / ETP and the critical-fuel scenario,
EDTO-significant systems and MEL, and the dispatch / in-flight go/no-go. It
applies to K Global's EDTO-capable types and is illustrated by the worked
flight **KAY09MA** (EDDF–KSFO, A330-900neo, planned **ETOPS rule time 120 min**).
An airspace or airport brief *applies* this method to a place; this page
*defines* it.

!!! note "Scope"
    This is an operations *method*, not a clearance, a chart, or an approval
    certificate. The actual approved rule time, the type's EDTO-significant-system
    limits, and the per-leg entry/exit points and alternates come from the
    current OFP and the operator EDTO approval, pulled at dispatch — no live
    data is stored here. ICAO's **EDTO** and the FAA/industry **ETOPS** are used
    interchangeably; the reference OFP labels the field "ETOPS RULE TIME."

## 1. Snapshot

| Field | Value |
|---|---|
| What EDTO is | Operation on a route with a point **more than the threshold time** (default **60 min**) from an adequate en-route alternate, at the approved cruise speed in ISA/still air — requires an **EDTO approval** from the State of the Operator |
| Reference rule time | **120 min** (KAY09MA) — the *maximum diversion time* planned; the aircraft stays within 120 min flying time of an adequate/suitable alternate along the whole route |
| Threshold vs maximum | **Threshold time** = the trigger that makes a flight EDTO (default 60 min); **maximum diversion time (rule time)** = the approved ceiling that draws the area of operations. Different numbers (§4) |
| Area of operations | The band within **120 min** of an adequate alternate at the **approved one-engine-inoperative (OEI) cruise speed** in ISA/still air. For our widebody twins this is a radius on the order of **~900–1,000 NM** around each alternate (type/speed-specific — compute, don't assume) |
| Often-limiting system | **Cargo-compartment fire-suppression time** is typically the most time-limited EDTO-significant system and the practical ceiling for longer rule times (§7) |
| Critical fuel | The route must carry fuel for the **critical-fuel scenario** — simultaneous depressurisation **+** engine-out driftdown from the most critical point to the limiting alternate, with ice/anti-ice/APU penalties and reserves (§6) |
| Alternate weather gate | An EDTO alternate is usable in planning only if forecast **at/above the EDTO planning minima** across the window it might be used; reference add-on minima **600 ft / ≈2 SM** (§5) |
| Illustrative flight | **KAY09MA** EDDF–KSFO; ENTRY N6952.3 W07818.0 (alt **BGSF**) · CP-for-fuel N6925.4 W08539.8 · EXIT N6618.0 W10021.0 (alt **CYZF**) |

## 2. Applicability & terminology

- **The core concept.** An aeroplane with two or more turbine engines may **not**
  be operated on a route containing a point farther (in flying time) than the
  **threshold time** from an adequate en-route alternate **unless the State of
  the Operator has granted an EDTO approval** (ICAO Annex 6 Part I). EDTO gives
  large twins an operational-safety level equivalent to the older three/four-engine
  fleet while allowing more direct routings.
- **EDTO vs ETOPS — same thing, different label.** ICAO Amendment 36 (2012)
  replaced *ETOPS* (Extended-range Twin OPerationS) with *EDTO* (Extended
  Diversion Time Operations), broadening it from twins to all turbine-engined
  aeroplanes. The FAA retains "ETOPS"; EASA keeps ETOPS for twins and LROPS for
  3/4-engine extended-range ops; the SimBrief OFP labels the field "ETOPS RULE
  TIME." Treat the terms as synonyms; prefer **EDTO** for the concept.
- **Twin vs more-than-twin speed basis.** ICAO converts threshold time to
  distance using the **one-engine-inoperative (OEI) cruise speed** for twins and
  the all-engines-operating speed for aeroplanes with more than two engines; the
  **FAA uses OEI speed for all types**. K Global's EDTO trunk (A339) is a twin,
  so the **OEI-speed basis** governs both the area of operations and the
  diversion-time calculation.
- **Two founding principles.** (1) **Preclude** the diversion — reliable
  engines/systems plus specific pre-dispatch maintenance; (2) **protect** the
  diversion if it happens — system redundancy plus operational process
  (alternates, fuel, comms) so a diversion completes safely.

## 3. Area of operations & threshold / rule time

- **Threshold time — the trigger.** The range, expressed in time, beyond which
  an EDTO approval is required. **Default 60 minutes.** Cross the threshold ring
  and the flight is an EDTO flight. Assume 60 min unless the OpsSpec says
  otherwise.
- **Maximum diversion time (the "rule time") — the ceiling.** The approved
  maximum time, at the approved cruise speed in ISA/still air, that the aeroplane
  may be from an adequate alternate at any point. The reference flight planned to
  **120 min**. The rule time — not the threshold — draws the operational band.
  Approvals step up as ≤90 · >90–180 · >180 min (plus route-specific 15%
  extensions of an approved time).
- **How the area of operations is built.** Take the approved OEI cruise speed for
  the type (a published still-air TAS schedule — for a widebody twin typically on
  the order of ~430–470 KTAS); multiply by the rule time for a still-air radius
  (120 min × ~450 KTAS ≈ ~900 NM; the commonly-quoted "~1,000 NM for ETOPS-120"
  reflects higher OEI schedules/rounding — **compute per type, don't quote a
  constant**); draw that radius around every adequate en-route alternate. The
  union of the rings is the area of operations, and the planned track must stay
  inside it end-to-end.
- **Why still air / ISA.** The ring is a planning construct for defining the
  approved area; the *actual* diversion time and the critical-fuel calc (§6) use
  forecast winds and temperatures, which can make the real diversion materially
  longer or shorter. Never confuse the still-air ring with the wind-corrected
  diversion on the day.
- **Reference (KAY09MA).** The EDDF–KSFO track leaves the European/North-American
  threshold rings over the North Atlantic / Greenland / Canadian near-polar
  segment; **BGSF** (entry) and **CYZF** (exit) are the adequate alternates whose
  120-min rings cover the gap, defining the ETOPS ENTRY → EXIT segment.

## 4. En-route alternates — adequate / suitable & planning minima

- **Adequate vs suitable — the two-stage test.**
    - **Adequate** = the aerodrome *can* receive the aeroplane: runway
      length/strength and geometry for the type, at least one instrument
      approach, and the required Rescue & Fire-Fighting category (EDTO typically
      needs RFFS Category 4, available or obtainable within the diversion time).
      Adequacy is a durable property of the field.
    - **Suitable** = adequate **and**, for the specific time window, the forecast
      weather, crosswind/tailwind and runway condition are acceptable and the
      field is open. Suitability is assessed per flight, per crossing time.
    - An EDTO alternate must be **adequate** to be listed and **suitable** to be
      counted at the planned crossing time.
- **EDTO planning weather minima (the "add-on" minima).** To list a field as an
  EDTO alternate at planning, the forecast must be at/above minima **more
  conservative than the field's own approach minima** — an add-on hedging against
  forecast error over the long lead time:

    | Approach capability at the alternate | Add to ceiling | Add to visibility |
    |---|---|---|
    | At least **one precision** approach | +400 ft | +1 SM (1600 m) |
    | Two or more precision approaches | +200 ft | +½ SM (800 m) |
    | Best available non-precision / circling | +400 ft | +1 SM (1600 m) over the higher base |

    The reference OFP shows **600 ft / 3219 m** (ceiling 600 ft, visibility ≈2 SM)
    — exactly the single-precision-approach case. The exact table is
    authority-specific (FAA 14 CFR 121 / EASA AMC 20-6 / operator OpsSpec) —
    verify the coded values; do not treat 600/3219 as a universal constant.
- **The suitability window.** Each EDTO alternate must be forecast at/above the
  planning minima for the whole period during which it might be used — in
  practice a window bracketing the expected time over the ETP / critical point
  (commonly ~1 hour either side). If the TAF dips below minima anywhere in that
  window, the field cannot be counted and an alternative plan is required.
- **Reference alternates (KAY09MA).** **BGSF Kangerlussuaq** (entry-side, most
  reliable Greenland field; procedural since radar ended ~Nov 2025) and
  **CYZF Yellowknife** (exit-side, Canadian NDA, true-referenced), re-checked at
  dispatch against the 600/3219 window; **BGTL Pituffik** is the far-north
  fallback (PPR/military). Field-specific detail lives in each airport brief.

## 5. Critical Point / ETP & the critical-fuel scenario

- **Critical Point (CP) / Equal-Time Point (ETP).** The point on track from which
  the flying time to two candidate diversion fields is equal, computed pairwise
  using the OEI TAS corrected for forecast wind. Multiple ETPs exist on a long
  leg; the ETP tells the crew which alternate is nearer in time and therefore the
  default divert target.
- **CP for fuel vs ETP for time — don't conflate.** The fuel-critical point
  maximises the fuel required for the worst-case diversion — not necessarily the
  equal-time point. Reference OFP: CP-for-fuel N6925.4 W08539.8, between ETOPS
  ENTRY (→ BGSF) and EXIT (→ CYZF).
- **The critical-fuel scenario — what fuel the flight must carry.** At the
  fuel-critical point, assume the simultaneous worst case and confirm enough fuel
  remains to complete the diversion:
    1. **Rapid depressurisation** → descend to 10,000 ft (or lowest safe/MSA level)
       where fuel flow is high, **combined with**
    2. an **engine failure** → single-engine driftdown and OEI cruise to the
       limiting alternate, **plus**
    3. **airframe/engine ice protection** and any airframe ice-accretion penalty,
       **plus**
    4. **APU fuel** if required as a power source, **plus**
    5. a **hold** at the alternate (commonly ~15 min at 1500 ft), approach and
       land, arriving with **final reserve** intact, **plus**
    6. applicable **performance/fuel-mileage penalties** (e.g. a 5% conservatism).

    The greater of the normal trip+reserve fuel and the critical-fuel requirement
    sets the minimum dispatch fuel. On a long over-water / near-polar EDTO leg the
    critical-fuel figure can be the binding constraint.
- **Why decompression drives it.** A depressurisation forces a low-altitude,
  high-fuel-flow diversion; combined with OEI it is usually the most
  fuel-demanding case — which is why cabin pressurisation is an EDTO-significant
  system (§7).

## 6. Aircraft systems, MEL & configuration for EDTO

- **EDTO-significant systems** — each with a demonstrated capability that must
  exceed the diversion time:
    - **Cargo-compartment fire suppression / containment** — usually the most
      time-limited system and the practical ceiling on rule time. The suppression
      bottle has a certified duration; **the maximum diversion time cannot exceed
      that duration** (with margin). Check the cargo-fire time limit against the
      planned rule time on every EDTO release.
    - **Fuel system** — sufficient independent feed/management for OEI diversion.
    - **Electrical (AC) power** — independent AC sources able to sustain required
      loads OEI for the diversion.
    - **Pressurisation / ECS** — drives the decompression leg of the critical-fuel
      scenario (§5).
    - **Hydraulics / flight controls, engine-fire suppression, ice protection,
      APU** — redundancy and (for the APU) in-flight start reliability.
- **The most-limiting-system rule.** The maximum diversion time must not exceed
  the most limiting EDTO-significant-system time limit in the AFM: **rule time ≤
  min(all system limits)**, normally cargo fire suppression. For >180 min the type
  must also meet a world-fleet IFSD rate < 0.01/1000 engine-hours.
- **MEL for EDTO.** The EDTO MEL is a **restricted subset** of the MMEL — items
  acceptable for a normal flight may be no-go for EDTO (an inoperative pack, an
  APU-start defect, a fuel-quantity/fuel-temp fault, a fire-detection channel).
  Screen every open MEL item against its EDTO provisions **before** committing to
  an EDTO release; a disqualifying item forces a non-EDTO routing or removal of
  the defect.
- **Pre-departure discipline.** EDTO relies on pre-dispatch maintenance
  precautions (engine condition / oil consumption / IFSD monitoring, APU-start
  validation, dual-maintenance-error avoidance, a fluids service check).
  Improper fluid servicing is a repeatedly-cited cause of ETOPS diversions.

## 7. Dispatch & in-flight procedure (worked KAY09MA example)

**Reference:** EDDF–KSFO, A330-900neo, planned **ETOPS rule time 120 min**;
ENTRY N6952.3 W07818.0 (BGSF) → CP-for-fuel N6925.4 W08539.8 → EXIT
N6618.0 W10021.0 (CYZF); add-on **600 ft / 3219 m**.

=== "At dispatch (build & gate)"

    1. **Confirm EDTO applies & the rule time** — track leaves the 60-min
       threshold rings → EDTO flight; set the SimBrief ETOPS threshold & rule
       selector = 120 min. Confirm the operator approval authorises the rule time.
    2. **Verify the speed basis** — twin → OEI cruise speed governs (§2/§3).
    3. **Read entry/exit & alternates off the OFP** — ENTRY→BGSF, EXIT→CYZF; the
       OFP draws the 120-min rings and the ETOPS segment.
    4. **Alternate suitability gate** — for BGSF and CYZF (and BGTL fallback),
       confirm the forecast is at/above 600 ft / 3219 m across the suitability
       window bracketing the ENTRY / CP / EXIT times, the field is open, RFFS ≥
       Cat 4, and runway/crosswind acceptable. If any alternate fails → re-plan.
       Do not proceed beyond the threshold with an alternate below minima.
    5. **Critical fuel** — read the OFP CP-for-fuel critical-fuel figure and
       confirm planned fuel ≥ the greater of trip+reserves and critical fuel (§5).
    6. **EDTO MEL & systems** — screen every open MEL item against the EDTO subset;
       confirm cargo-fire-suppression time ≥ rule time, and APU / packs / electrics
       / fuel-temp & fire detection serviceable (§6). Confirm pre-departure fluid
       servicing done.
    7. **Comms & monitoring** — confirm a reliable aeroplane↔airline comms means
       over the EDTO segment (HF/SATCOM/CPDLC) and current alternate weather.

=== "In flight (execute & re-evaluate)"

    - **Before crossing the threshold / ENTRY** — re-confirm the ENTRY-side
      alternate (BGSF) and downstream (CYZF) are still forecast/reported at/above
      minima for their windows; if not, hold, divert, or stay inside the threshold
      rings.
    - **Track the ETP/CP** — know at all times which alternate is nearer in time
      (wind-corrected ETP) and that the CP-for-fuel point is the worst-case fuel
      gate; monitor actual fuel vs the critical-fuel line.
    - **If an EDTO-significant system degrades** — apply the QRH; elect turn-back /
      divert / continue with heightened alertness, defaulting the divert to the
      time-nearest suitable alternate per the ETP.
    - **On a decompression or engine-out in the segment** — fly the assumed
      critical-fuel profile (driftdown / low-level) to the limiting alternate; the
      fuel plan was sized for exactly this.
    - **Report** any EDTO-relevant event for continued-airworthiness oversight.

## 8. Related procedures

- [Polar & High-Latitude Operations](polar.md) — high-latitude diversion
  planning that sits *on top of* EDTO on the same reference leg.
- The **Arctic** and **North Atlantic** airspace briefs apply this method to
  their oceanic and near-polar segments (ETP considerations, coast-in/out
  alternates, comms and contingency).
- The **A330-900neo (A339)** fleet page carries the type application (SimBrief
  ETOPS selector, reference figures, en-route alternates).

## Sources & references

*Public sources only; durable policy — no live data stored here.*

- **ICAO Annex 6 Part I** and **Doc 10085** — EDTO framework (threshold vs
  maximum diversion time, EDTO-significant systems, alternate criteria).
- **FAA AC 120-42B** and **14 CFR 121** — ETOPS area of operations, OEI speed
  basis, planning minima add-ons, most-limiting-system rule.
- **EASA AMC 20-6** — ETOPS for twins (planning minima, MEL).
- **SKYbrary** — ETOPS/EDTO summary articles.
