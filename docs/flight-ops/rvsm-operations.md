# RVSM Operations — OM E Procedure

**Scope:** Location-agnostic capability/procedure policy for **Reduced Vertical Separation Minimum (RVSM)** operations — the airspace (**FL290–FL410** with **1000 ft** vertical separation), the required equipment (two independent altimetry systems, automatic altitude-hold, altitude alerter, Mode-C/S transponder), height-keeping performance (**ASE / TVE**) and the **height-monitoring** programme, the RVSM approval, entry/exit and flight-planning (the **"W"** in the flight-plan equipment field), the contingency set (loss of RVSM capability, TCAS RA, wake, weather-deviation offset), and the relationship to CPDLC/oceanic datalink. Applies to K Global's RVSM-approved widebody fleet. An airspace brief *applies* RVSM to a region; this file *defines* the regime. Sim context: X-Plane 11 / SimBrief.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Annex 6 / Doc 9574 · FAA (14 CFR 91 Appx G / AIM) · EASA · SKYbrary); type- and approval-specific numbers flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (capability/method), **not** a clearance or an operator RVSM approval certificate. It states the RVSM *concepts* and how K Global operates within the regime. The **airspace where RVSM applies, the current levels available and the entry conditions come from the AIP/ATC, pulled at planning and in flight** — this file stores no live data. Aircraft RVSM approval status, the specific altimetry-system limits, and the operator's monitoring-programme results are approval/type-specific — verify against the AFM/FCOM and the operator RVSM approval, not this page. RVSM is a **vertical** performance regime; it is the altimetry counterpart to PBN's lateral performance (`./PBN and RNP Operations.md`). Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/type- or approval-specific · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What RVSM is | Reducing the vertical separation between aircraft from 2000 ft to **1000 ft** in a defined block, roughly **doubling the usable levels** and improving fuel-optimum access 🟩 |
| RVSM airspace | **FL290 to FL410 inclusive** where designated by the competent authority; **1000 ft (300 m)** vertical separation applied 🟥 |
| Above FL410 | **2000 ft** separation resumes above FL410 (RVSM does not extend above FL410) 🟩 |
| Core equipment | 🟥 **Two independent altimetry systems**, an **automatic altitude-control (hold) system**, an **altitude-alerting system**, and a **Mode-C/S SSR transponder** linked to the altitude-measurement system in use |
| Height-keeping metric | **ASE** (altimetry-system error) + **TVE** (total vertical error); aircraft held to a demonstrated tolerance (order **±65 ft / ±130 ft** in defined conditions) 🟧 |
| Monitoring | 🟥 Height-monitoring at **initial approval then periodically** (commonly ~**2 years / 1000 hr**) via a GMU/AGHME/other approved means — the programme is what keeps the safety case valid |
| Approval | RVSM requires an **operator approval** (airworthiness + operational); the aircraft must be an **approved RVSM airframe** 🟥 |
| Flight-plan flag | 🟥 **"W"** in **Item 10 (equipment)** of the ICAO flight plan denotes RVSM-approved; without it, the ATS system will not clear the aircraft into RVSM levels |
| Contingency posture | Loss of RVSM capability → advise ATC, expect **2000 ft separation / clear of RVSM**; **weather-deviation offset** and **TCAS-RA** procedures per §7 🟥 |
| Illustrative context | Any RVSM-approved K Global widebody cruising FL290–FL410 via SimBrief; the "W" flag set in the OFP/flight plan, levels pulled from ATC |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| RVSM airspace (FL290–FL410, 1000 ft) | 🟩 | Sourced (SKYbrary RVSM; FAA). Above FL410 reverts to 2000 ft. |
| Core equipment set | 🟥 | Two independent altimetry systems + auto altitude-hold + altitude alerter + Mode-C/S transponder tied to the altitude source. Sourced. |
| Height-keeping (ASE/TVE) tolerances | 🟧 | ±65 ft / ±130 ft bands cited from public summaries; the **airframe's demonstrated performance & limits come from the AFM/approval**, not this page. |
| Height-monitoring programme | 🟥 | Initial + periodic (~2 yr/1000 hr) monitoring is mandatory to sustain approval. Sourced. Exact interval/method operator/region-specific. |
| RVSM approval | 🟥 | Airworthiness + operational approval; approved airframe required. Sourced. |
| Flight-plan "W" (Item 10) | 🟥 | RVSM-approved indicator; must be filed to receive RVSM clearance. Sourced (ICAO FPL / FAA AIM). |
| Contingency (loss of capability, TCAS, wx-deviation) | 🟥 | Advise ATC "unable RVSM"; 2000 ft/clear of RVSM; weather-deviation lateral offset + level-offset logic; TCAS RA followed. Sourced (FAA AIM 4-6; ICAO). |
| CPDLC/oceanic relationship | 🟧 | RVSM is separate from datalink but co-applies with CPDLC/ADS-C in oceanic RVSM; contingency uses the general oceanic weather-deviation logic. Cross-linked. |

---

## 3. What RVSM is & where it applies

- **The core idea — 🟩:** **RVSM** reduces the vertical separation minimum between suitably-equipped aircraft in the upper airspace from the historic **2000 ft** to **1000 ft**. Because the block **FL290–FL410** now holds twice as many usable levels, RVSM increases airspace capacity and — operationally most important — gives long-haul flights **better access to fuel-optimum and step-climb levels** that were previously blocked by 2000-ft spacing.
- **The airspace — 🟥:** RVSM applies from **FL290 to FL410 inclusive** in airspace **designated** for it by the competent authority (which today is essentially all the world's upper airspace along the routes K Global flies — oceanic, continental and remote). **Above FL410, 2000 ft separation resumes** — RVSM does not extend higher, because altimetry-system error grows with altitude and the safety case is bounded at FL410.
- **Who may operate there — 🟥:** only **RVSM-approved aircraft flown by approved operators** (plus State/emergency/certain non-equipped exceptions handled by ATC with increased separation). A non-approved aircraft is either kept below FL290, above FL410, or given 2000-ft separation — all of which cost efficiency, so **RVSM approval is effectively mandatory for the fleet.**
- **Why the tolerances are tight — 🟧:** with only 1000 ft between traffic, the total vertical error each aircraft contributes must be small and well-characterised — hence the equipment redundancy (§4), the height-keeping performance standard (§5) and the ongoing monitoring (§5). The regime is a **collective** safety case: it holds only while the whole fleet stays within its error budget.

---

## 4. Required equipment

An RVSM-approved aircraft must carry and operate — 🟥:

- **Two independent primary altimetry systems** — two separate, independent sources of pressure-altitude, each meeting the RVSM accuracy specification, so a single altimetry fault is detectable (cross-comparison) and does not silently corrupt the level. A defined altimeter **split limit** (crew cross-check) is part of the SOP.
- **An automatic altitude-control system (altitude hold)** — an autopilot mode able to **hold a selected level within the RVSM tolerance** (and, where fitted, altitude-select/capture). Hand-flying for extended cruise in RVSM is not the intended mode; the automatic system is what delivers the height-keeping accuracy.
- **An altitude-alerting system** — warns the crew of deviation from the selected altitude, guarding against inadvertent level bust.
- **A secondary-surveillance-radar transponder (Mode C / Mode S)** with **altitude reporting connected to the altitude-measurement system in use for altitude-keeping** — so the level the aircraft flies is the level ATC and TCAS see. (Modern operations also require Mode S / ADS-B per the airspace; check the region.)
- **Serviceability — 🟥:** loss of any RVSM-required item (an altimetry system, the automatic altitude-hold, the alerter, or the transponder altitude-report) is a **loss of RVSM capability** and triggers the contingency in §7. Screen the RVSM equipment against the MEL before dispatch into RVSM levels.

---

## 5. Height-keeping (ASE / TVE) & the monitoring programme

- **The two error terms — 🟧:**
  - **ASE — Altimetry System Error** — the difference between the pressure altitude the aircraft's altimetry **displays/reports** and the true pressure altitude. ASE is the airframe/static-system contribution and is the term the airworthiness approval bounds.
  - **TVE — Total Vertical Error** — the difference between the aircraft's **actual geometric level** and its **assigned** level. TVE combines ASE with **flight-technical error** (how precisely the crew/autopilot holds the assigned level) and any altitude-source coupling error. **TVE is what the 1000-ft separation actually has to contain.**
- **The performance standard — 🟧 (verify per type):** RVSM airframes are demonstrated to hold altitude within tight bands — publicly quoted as within **±65 ft** in straight-and-level, non-turbulent conditions, or **±130 ft** for systems with FMS/performance-system altitude coupling. **The airframe's actual demonstrated ASE budget and any RVSM limitations come from the AFM and the type's RVSM approval — do not read the ±65/±130 figures as the aircraft limit.**
- **The height-monitoring programme — 🟥:** because the safety case is statistical and fleet-wide, each RVSM aircraft must have its height-keeping **independently verified**:
  - at **initial** RVSM approval, and
  - **periodically** thereafter — commonly around **every 2 years or 1000 flight hours** (interval region/operator-specific).
  Monitoring uses approved means — a portable **GPS Monitoring Unit (GMU)**, ground-based **AGHME**, or an **ADS-B height-monitoring** service — to measure the aircraft's actual ASE against the standard. **A lapsed or failed monitoring result invalidates the RVSM standing of that airframe** until resolved. The programme, not any single flight, is what keeps the regime safe — hence it is a durable operator obligation, tracked continuously (results pulled from the monitoring records, not stored here).
- **Crew height-keeping discipline — 🟥:** use the automatic altitude-hold for cruise, cross-check the two primary altimeters within the split limit at defined points, set/confirm the assigned level in the altitude-select window, and report any inability to hold the level (§7).

---

## 6. Approval, entry/exit & flight-planning

- **RVSM capability is a type fact — 🟩:** **all mainline K Global types are RVSM-capable** — recorded 🟩 in the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table B, RVSM column). Cite the matrix for the per-type capability rather than restating it.
- **RVSM approval — 🟥:** RVSM *capability* (above) is distinct from *approval*. Operating in RVSM airspace requires both an **airworthiness approval** (the airframe meets the RVSM equipment/performance standard, with an approved data package) and an **operational approval** (the operator's programmes — MEL, maintenance, crew procedures, and the **height-monitoring** participation — are accepted by the authority). K Global's **operator RVSM operational approval is now set — all mainline types are RVSM-approved** 🟩 [K Global OpsSpec 2026-07-25]. The individual **approved-airframe list** (which specific tails carry current height-monitoring results) remains an operator/maintenance record — held 🟧 [operator — VERIFY] (§Open items).
- **The flight-plan indicator — 🟥:** RVSM approval is declared to ATS by the letter **"W"** in **Item 10 (equipment & capabilities)** of the ICAO flight plan. **Without "W" filed, the ATS system will not issue a clearance into RVSM levels** — the flight is planned/cleared below FL290 or above FL410, or given increased separation. Confirm the OFP/flight plan carries "W" for any RVSM cruise (and the appropriate PBN/CPDLC descriptors alongside it).
- **Entry — 🟥:** before entering RVSM airspace the crew confirms the aircraft is RVSM-approved and **fully serviceable for RVSM** (two altimetry systems agreeing within limits, altitude-hold and alerter working, transponder reporting). An aircraft that cannot meet RVSM before entry must **request a level outside RVSM** or a non-RVSM routing.
- **Exit / re-entry:** vertical separation reverts to 2000 ft above FL410 and below FL290; when transiting out of and back into RVSM (e.g. a step-descent), the serviceability check applies again on re-entry.
- **Regional detail lives in the airspace briefs — 🟩:** which levels/regions are RVSM, the transition levels, and any regional monitoring or equipage overlays (oceanic CPDLC/ADS-C, Mode S) are in the **airspace briefs** — this file defines the regime; the briefs place it. Every airspace brief references RVSM.

---

## 7. Contingencies

- **Loss of RVSM capability (equipment) — 🟥:** if a required system fails such that the aircraft can no longer meet RVSM (e.g. loss of one altimetry system with the pair now outside the split limit, loss of automatic altitude-hold, or loss of the altitude-alerter/transponder altitude report), **advise ATC** with **"Unable RVSM due equipment"** and request a new clearance. ATC will provide **2000 ft separation** and/or clear the aircraft **out of RVSM airspace** as traffic permits. Maintain the last assigned level until re-cleared.
- **Weather-turbulence-induced inability — 🟥:** if severe turbulence/mountain-wave makes the aircraft unable to hold the level (typically deviations approaching **~200 ft**), advise ATC **"Unable RVSM due turbulence"** (or the specific reason) and request/accept increased separation or a level change.
- **Weather-deviation (offset) procedure — 🟥 (oceanic/remote, non-radar):** when deviating around weather without a timely clearance, apply the standard **general (oceanic) contingency/weather-deviation logic**: request the deviation; if unable to obtain a clearance, deviate and advise, and where the deviation is **≥ ~5–10 NM** offset the level by an established increment (commonly a **±300 ft** vertical offset keyed to direction of flight and left/right of track) to reduce collision risk with same-track traffic, broadcast intentions (121.5 / air-to-air), and re-establish on the cleared track/level as soon as able. (Exact offset values are the ICAO/regional weather-deviation procedure — see the airspace/oceanic brief.)
- **TCAS resolution advisory — 🟥:** a **TCAS RA is always followed** even inside RVSM — the 1000-ft spacing means RAs can occur against correctly-separated traffic; fly the RA, then return to the assigned level and advise ATC. Do not manoeuvre opposite to an RA to preserve RVSM spacing.
- **Wake turbulence — 🟧:** the reduced 1000-ft spacing can put an aircraft closer to another's wake; if wake encountered, a **small lateral offset within the cleared track-keeping tolerance** (or a level-change request) mitigates it — apply the region's SLOP/wake guidance rather than an uncoordinated level change.
- **Level bust prevention — 🟥:** because a 1000-ft bust now puts the aircraft directly at an occupied level, altitude-alerter use, altitude-select discipline and the standard level-change/read-back procedures are safety-critical — treat any altitude deviation as an immediate correct-and-report item.

---

## 8. Relationship to CPDLC / datalink

- **Separate but co-applied — 🟧:** RVSM (a **vertical** separation regime) is independent of **CPDLC/ADS-C** (controller-pilot datalink and automatic position reporting), but in **oceanic/remote RVSM** the two operate together — datalink provides the surveillance/communication that lets ATC manage 1000-ft-separated traffic where there is no radar. Some reduced-separation constructs combine **RVSM (vertical) + RNP 4 (lateral) + CPDLC/ADS-C (longitudinal/communication)**.
- **Flight-plan descriptors together — 🟩:** the flight plan typically carries **"W" (RVSM)** alongside the **datalink (J-codes)** and **PBN** descriptors — the aircraft must actually hold each declared capability. Confirm the full Item-10 set on the OFP.
- **Contingency overlap — 🟧:** the oceanic **weather-deviation and lateral-offset** procedures (§7) are shared with the datalink/oceanic regime; the crew executes one integrated contingency, not separate RVSM vs oceanic ones. Detail lives in the datalink/oceanic and airspace briefs.

---

## Cross-references

- **PBN & RNP Operations (OM E)** — the **lateral** performance counterpart to RVSM's vertical performance; combined RVSM + RNP 4 + CPDLC reduced oceanic separation: `./PBN and RNP Operations.md`
- **Datalink & Oceanic Procedures (OM E)** — CPDLC/ADS-C, oceanic clearance, and the shared weather-deviation/lateral-offset contingency: `./Datalink and Oceanic Procedures.md`
- **Low Visibility Operations (OM E)** — unrelated regime; shares the "two independent, monitored systems" integrity philosophy: `./Low Visibility Operations.md`
- **ETOPS / EDTO Procedures (OM E)** — oceanic/remote cruise where RVSM levels and step-climbs interact with driftdown/critical-fuel planning: `./ETOPS-EDTO Procedures.md`
- **Airspace briefs (all reference RVSM)** — regional RVSM levels, transition, monitoring/equipage overlays, oceanic contingency: `../OM C Routes and Destinations/Airspace/…`
- **Fleet Capability Matrix (OM B)** — the per-type RVSM *capability* (Table B: all mainline types 🟩 capable) as a type fact; the **operator RVSM operational approval** (all mainline types approved 🟩 [K Global OpsSpec 2026-07-25]) is noted there too — the individual **approved-airframe list** remains the separate 🟧 record. Cite it rather than restating per-type values: `../OM B Fleet/Fleet Capability Matrix.md`
- **Airframe RVSM approval** — the type's RVSM airworthiness status, altimetry limits/split, and any RVSM limitations: `../OM B Fleet/…` (verify per type) 🟧

---

## Open items (🟧 — confirm)

- **Operator RVSM approval** — RESOLVED by OpsSpec batch 2 (2026-07-25): **all mainline types are RVSM-approved** 🟩. Still open: the individual **approved-airframe list** (which specific tails carry current height-monitoring results) — an operator/maintenance record, not restated here.
- **Height-monitoring programme** — the operator's monitoring means (GMU / AGHME / ADS-B service), the interval (assumed ~2 yr / 1000 hr), and the record of each airframe's last result.
- **Per-type altimetry limits** — the AFM RVSM altimeter **split limit**, demonstrated ASE budget, and any RVSM operational limitations (feed §5).
- **Regional weather-deviation offset values** — confirm the exact ICAO/regional offset (±300 ft / 5–10 NM) wording used on the routes flown; codify in the oceanic/airspace briefs.
- **Item-10 descriptor set** — confirm the OFP/flight-plan filing carries **W** plus the correct datalink (J-codes) and PBN descriptors for each fleet.
- **ICAO Doc 9574 / Annex 6 numbering** — verify the current-edition clause references for the RVSM equipment/performance standard cited from public summaries.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material (SimBrief, AFM/FCOM, RVSM approval) may inform content but is not listed. Durable policy — no live level/monitoring data stored here.*

- **SKYbrary — Reduced Vertical Separation Minima (RVSM)** — airspace FL290–FL410 / 1000 ft, equipment (independent altimetry, automatic altitude-hold, alerter, transponder tied to altitude source), height-keeping and monitoring, approval — https://skybrary.aero/articles/reduced-vertical-separation-minima-rvsm (retrieved 2026-07-25).
- **FAA — Reduced Vertical Separation Minimum (RVSM)** — RVSM airspace definition, equipment, approval and monitoring (US) — https://www.faa.gov/air_traffic/separation_standards/rvsm (retrieved 2026-07-25).
- **FAA — Aeronautical Information Manual §4-6, Operational Policy/Procedures for RVSM** — height-keeping tolerances (±65/±130 ft), "Unable RVSM" phraseology, contingency, weather-deviation, TCAS in RVSM — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_6.html (retrieved 2026-07-25).
- **ICAO Annex 6 / Doc 9574 — Manual on a 300 m (1000 ft) Vertical Separation Minimum between FL290 and FL410 Inclusive** — RVSM airspace, ASE/TVE height-keeping performance, approval and monitoring framework — summarised via SKYbrary (ICAO not freely hosted) https://skybrary.aero/articles/reduced-vertical-separation-minima-rvsm (retrieved 2026-07-25).
- **NBAA — Reduced Vertical Separation Minima (RVSM)** — equipment, approval and monitoring overview — https://nbaa.org/aircraft-operations/communications-navigation-surveillance-cns/reduced-vertical-separation-minima-rvsm/ (retrieved 2026-07-25).
- **Wikipedia — Strategic lateral offset procedure (SLOP)** — lateral-offset mitigation used with RVSM in oceanic/remote airspace — https://en.wikipedia.org/wiki/Strategic_lateral_offset_procedure (retrieved 2026-07-25) 🟧 corroborate against the airspace-brief AIP/NAT source.
- **EASA — Air Operations (RVSM operational approval)** — EU RVSM approval framework and MEL/monitoring obligations — https://www.easa.europa.eu/en/document-library (retrieved 2026-07-25) 🟧 confirm current reference.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.2 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). |
| v0.1.1 | 2026-07-25 | Wired per-type capability facts to the Fleet Capability Matrix (operator-approval values remain pending OpsSpec). Referenced matrix Table B for **RVSM capability by type** (all mainline types RVSM-capable, type fact 🟩); operator RVSM approval / approved-airframe list held 🟧 [operator — VERIFY], resolved via OpsSpec not the matrix. |
| v0.1 | 2026-07-25 | Initial draft. OM E — Operations location-agnostic procedure for RVSM. Defines the regime (FL290–FL410 / 1000 ft, 2000 ft above FL410), the required equipment (two independent altimetry systems, automatic altitude-hold, altitude alerter, Mode-C/S transponder tied to the altitude source), height-keeping (ASE/TVE) and the initial+periodic height-monitoring programme, the RVSM approval, entry/exit and flight-planning (the "W" in Item 10), the contingency set (loss of capability → "Unable RVSM"/2000 ft, turbulence, weather-deviation lateral+level offset, TCAS RA, wake, level-bust prevention), and the relationship to CPDLC/ADS-C oceanic datalink. Built from ICAO Annex 6 / Doc 9574 + FAA (separation-standards page / AIM 4-6) + EASA + NBAA + SKYbrary. Cross-linked to PBN & RNP, Datalink/Oceanic, Low Visibility, ETOPS-EDTO, all airspace briefs and airframe RVSM approval. Operator RVSM approval/airframe list, monitoring programme, per-type altimetry limits and regional offset values flagged open. |
