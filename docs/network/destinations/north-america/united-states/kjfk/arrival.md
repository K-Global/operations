# KJFK — John F Kennedy International · Arrival Page

**KJFK / JFK** · Queens, New York City, New York, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [KJFK Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | No single default — wind, demand and the converging RWY 13R/22L dependency jointly drive the assigned config |
| Usual approach | ILS CAT II/III (04R/22L) or CAT II (13L) where assigned; VOR/GPS + Parkway Visual on 13R (no ILS this end) |
| Config logic | Wind/traffic/dependent-operations driven — N90 assigns the landing runway; the two intersecting non-parallel pairs mean config is not a simple reciprocal choice |
| Transition level | FL180 (by QNH; US standard) — verify current chart |
| LVP trigger | CAT II/III on 04R/22L, CAT II on 13L; exact RVR trigger values not in reachable extract 🟧 |
| Missed-approach driver | Airspace/traffic density and re-sequencing into N90's dense environment (not terrain) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **CAMRN FOUR**, **PARCH THREE (RNAV)**, **ROBER TWO** `[names corroborated via the FAA AIP communications table (PARCH/ROBER STAR frequency 125.7) and tier-4 chart-index mirrors, retrieved 2026-07-26]` 🟧 — confirm exact current edition on the day's chart.
- **Selection by arrival direction / runway:** N90 assigns the STAR-to-runway transition based on the active configuration; given JFK's intersecting non-parallel runway pairs, the same STAR can feed different final approach courses depending on which pair is active.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS (or, on RWY 13R, to VOR/GPS or Parkway Visual) transition with radar vectors from N90 to final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published STAR speed/altitude gates are a pointer only — verify chart; expect additional flow speed control given N90's traffic density.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard ~3:1 profile; plan TOD to meet the first STAR altitude gate. N90-area vectoring/holding can compress the descent — brief an early-descent contingency.
- **Speed control:** STAR speed gates, 250 KIAS below FL100, and JFK Class B speed limits within the surface area — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/config change between the two intersecting runway pairs (e.g., a wind shift favouring 13/31 over 04/22 or vice versa) is a materially different reassignment than a simple reciprocal-runway swap — brief this possibility specifically. Tailwind-on-descent and holding-then-repositioning during winter nor'easter or summer convective flow events are the other principal energy traps.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04R | ILS OR LOC RWY 04R, **ILS RWY 04R (CAT II–III)** | Full precision capability (ALSF-2) 🟩 | verify current chart |
| 22L | ILS OR LOC RWY 22L, **ILS RWY 22L (CAT II–III)** | Full precision capability (ALSF-2) 🟩 | verify current chart |
| 13L | ILS OR LOC RWY 13L, **ILS RWY 13L (CAT II)** | CAT II (ALSF-2); historic curved "Canarsie" visual also flown to this end in visual conditions 🟧 | verify current chart |
| 31R | ILS OR LOC RWY 31R | CAT I (MALSR) | verify current chart |
| 04L | ILS OR LOC RWY 04L | CAT I | verify current chart |
| 22R | ILS OR LOC RWY 22R | CAT I | verify current chart |
| 31L | ILS OR LOC RWY 31L | CAT I; no DME component found for this ILS in reachable extract 🟧 | verify current chart |
| 13R | **VOR or GPS RWY 13R**, Parkway Visual RWY 13R | **No ILS** — dual-PAPI RLLS lighting 🟧 | verify current chart |

- **LVP triggers:** CAT II/III capability confirmed on 04R and 22L (ALSF-2 lighting); CAT II on 13L. Exact RVR trigger values not confirmed in reachable extract — pull from current chart before relying on it. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Low. Bay-fill/reclaimed-marshland field at 13 ft MSL on Jamaica Bay; no close-in high terrain on any arrival path (Briefing §3.1).
- **Specific threats:** 🟥 **JFK's runway layout is two intersecting, non-parallel pairs** rather than a simple parallel set, and the AIP explicitly notes **converging operations between RWY 13R and RWY 22L conducted via an arrival distance window** — a dependent-approach procedure. Brief for possible extended vectoring, holding, and re-sequencing rather than a fixed default config. The historic curved "Canarsie" visual to RWY 13L (a non-straight-in visual with a late turn onto final) is a workload/spatial-orientation threat if flown — confirm its current-charting status before treating it as available (§Open items).
- **Airspace / traffic:** 🟥 Class B, radar-vectored, one of the most congested terminal airspace systems in the US — **New York TRACON (N90)** simultaneously works JFK, LGA, EWR, TEB and ISP traffic in close proximity. Brief for a high-density re-sequencing environment on any approach.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver — the field is flat and coastal (§3.1). Fly the published MAP; verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops the aircraft back into N90's dense, multi-airport traffic environment — expect extended vectoring and possible holding before re-sequencing, particularly if the converging RWY 13R/22L dependency is active.
- **Go-around traps:** Awareness of the intersecting-runway geometry during the miss — a missed approach off one pair can interact with traffic on the other, non-parallel pair in a way that would not occur at a conventional parallel-runway field.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway (mind the declared distances — Briefing §7):** 04R/22L **8,400 ft** each way, 13L **9,093 ft**, 31R **8,486 ft**, 31L **11,247 ft**, 13R **12,467 ft**, 04L **11,010 ft**, and **22R only 7,795 ft** against a 12,079 ft physical length (a converging-ops-driven reduction, not a simple displaced-threshold arithmetic) — brief the **published LDA**, not the runway's physical length, especially if assigned 22R.
- **Braking / vacate:** Not itemised in reachable sources for specific rapid-exit taxiways — confirm with Ground/Tower on the day; plan the vacate to minimise runway occupancy given JFK's traffic density.
- **Runway-excursion watch:** 🟧 Winter nor'easter snow/ice and routine Northeast-US rain are the seasonal wet/contaminated-runway considerations; a late runway-pair change (04/22 ↔ 13/31, e.g. ahead of a frontal passage) can introduce an unbriefed tailwind component — check ATIS wind trend.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Confirm routing with Ground — the path from any of the eight runway ends to the assigned terminal (T1/T4/T7/T8, or the New Terminal One/Terminal 6 gates as they come online in 2026) will differ materially depending on which of the two intersecting runway pairs was used to land, consistent with the VAMSYS 20-minute taxi-in planning figure.
- **Hot spots / tight taxiways:** 🟥 **Official Chart Supplement Hot Spot HS1 — Twy K/Twy J complex intersection, close proximity to RWY 04L and RWY 31L** `[FAA Chart Supplement NE vol, cycle eff. 2026-03-19–2026-05-14]`. The AIP separately reports **RWY 31R and RWY 13L holding-position markings at the RWY 4L/22R junction obscured** (SE and NW sides respectively) — the same complex central area. **Bldg 73 apron ramp is closed to wingspan >171 ft except under tow** (captures the A330-900neo — relevant to the inbound taxi-in routing as well as outbound). **Twy A between Twy NA/NB carries a 17 kt/20 mph speed restriction naming the A330 explicitly.** **Aircraft may not stop on either the Twy A or Twy B bridges.**
- **Stand/gate notes:** See [Dispatch §2/§3](dispatch.md) for the current (transition-year) terminal/gate picture.

---

## 9. Arrival frequency sequence

- **Sequence:** **JFK Approach 125.7 → JFK Tower (119.1 for RWY 04R/22L & 13L/31R, or 123.9 for RWY 04L/22R & 13R/31L, per assigned runway) → JFK Ground (121.9 primary / 121.65 south).** (Frequencies from Briefing §8; take the assigned frequency and confirm current chart.)
- **Approach/Departure control:** **New York TRACON (N90, Westbury NY)** is the facility for the JFK Class B; 🟧 note reported 2024 FAA controller-workforce reassignments toward Philadelphia TRACON — current facility staffing/status not independently confirmed. **New York ARTCC (ZNY, Ronkonkoma)** handles en-route inbound; see the **[North America Airspace brief](../../../../airspace/north-america.md)** for FIR/ARTCC-level context (that brief's current scope is the western Canada/US corridor, not JFK/ZNY-specific — see Briefing §18). 🟧

---

## 10. Gotchas

- **JFK's runway layout is two intersecting, non-parallel pairs** — a runway/config change here is a materially different event than a reciprocal swap at a conventional parallel-runway field; brief this specifically.
- **RWY 22R's published LDA (7,795 ft) is well short of its 12,079 ft physical length** due to the converging-ops arrival-distance-window rule — do not assume the long physical runway length is usable.
- **No ILS on RWY 13R** — only VOR/GPS and Parkway Visual with dual-PAPI lighting; do not expect a precision approach if assigned this end.
- **The historic curved "Canarsie" visual to RWY 13L is a late, non-straight-in turn onto final** — confirm its current-charting status before planning to fly it; the newer RNAV (GPS) approaches are the default expectation absent confirmation otherwise.
- **Official Hot Spot HS1 (Twy K/Twy J) plus two separately-reported obscured holding-position markings sit in the same central taxiway complex** — extra vigilance taxiing in through this area regardless of which runway was used to land.
- **Bldg 73 ramp wingspan restriction and the Twy A speed restriction both name/capture the A330-900neo** — confirm taxi-in routing accordingly.
- **KEWR and KLGA (company-preferred alternates) share JFK's own N90-area airspace and weather system** — a systemic ATC or weather event reduces their independent value; LGA additionally carries its own separate slot regime and Perimeter Rule (a LGA-specific restriction, not applicable to JFK).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact approach minima for all eight runway ends, and current tuned ILS/VOR frequencies (not itemised in the reachable FAA AIP HTML extract — see Briefing §9).
- Current status/currency of the historic curved "Canarsie" visual approach to RWY 13L relative to the RNAV (GPS) Z procedure.
- Current status of the Twy Z/Twy Y and Twy D taxiway closures noted in the Briefing — re-check via NOTAM.
- New York TRACON (N90) current facility/staffing status given reported 2024 workforce reassignments.
- No dedicated OM C Airspace brief yet exists specifically for New York ARTCC (ZNY)/N90 — see Briefing §18.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. Twy closures and ILS status), ATIS config/wind trend, GDP/EDCT/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3, AD 2.0 — New York (KJFK)** — runway/declared-distance data, approach lighting/CAT capability, communications, general remarks (converging-ops note, obscured holding-position markings, taxiway restrictions) — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_new_york.html (retrieved 2026-07-26).
- FAA — Chart Supplement Northeast (NE) volume, Airport Hot Spots, cycle effective 19 Mar 2026 – 14 May 2026 — https://aeronav.faa.gov/afd/19Mar2026/ne_hotspot.pdf (retrieved 2026-07-26).
- FlightAware — KJFK ILS RWY 04R (CAT II-III), ILS RWY 22L (CAT II-III), ILS RWY 13L (CAT II) procedure listings — https://www.flightaware.com/resources/airport/KJFK/procedures (retrieved 2026-07-26). *Tier-4 corroboration of CAT capability by runway end, consistent with the FAA AIP's ALSF-2 approach-lighting entries.*
- AirNavRadar — "Battling Bad Weather & Windshear on the Canarsie Approach to JFK Runway 13L" — https://www.airnavradar.com/blog/battling-bad-weather-windshear-on-the-canarsie-approach-to-jfk-runway-13l (retrieved 2026-07-26). *Secondary corroboration of the historic Canarsie visual approach; current-charting status not independently confirmed.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
