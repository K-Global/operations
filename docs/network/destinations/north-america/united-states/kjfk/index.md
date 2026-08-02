# KJFK — John F Kennedy International · Airport Briefing

**KJFK / JFK** · Queens, New York City, New York, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Core aerodrome data (reference point, elevation, magnetic variation, runway physical characteristics, declared distances, communications, navaids, general remarks) is drawn directly from the **FAA Aeronautical Information Publication (AIP), Part 3 AD 2.0, New York** (retrieved 2026-07-26) — treated as primary. Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version; several names below are corroborated only against tier-4 chart-index mirrors and are flagged accordingly. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N40°38′23.741″ / W073°46′43.292″ (40.6399, -73.7787) `[FAA AIP AD 2.2.1, retrieved 2026-07-26]` |
| Field elevation | **13 ft MSL** `[FAA AIP AD 2.2.3]` |
| Mag variation | 13° W (2020 epoch) `[FAA AIP AD 2.2.5]` |
| Time zone | UTC −5 (EST) / UTC −4 (EDT, US DST observed) |
| Runway(s) | **04L/22R** 12,079 × 200 ft · **04R/22L** 8,400 × 200 ft · **13L/31R** 10,000 × 200 ft · **13R/31L** 14,511 × 200 ft — two intersecting non-parallel pairs, not a simple parallel set |
| Preferential runway | No single default published in reachable sources — wind/demand/noise driven across four possible configurations; the 04/22 and 13/31 pairs intersect near midfield, so configuration choice also depends on converging/dependent-operation rules — pull current ATIS configuration at planning 🟧 |
| Longest LDA | 12,467 ft (RWY 13R) — see §7 for all eight runway ends |
| Approaches | **ILS CAT II/III on 04R and 22L**; **ILS CAT II on 13L**; ILS CAT I on 04L, 22R, 31R, 31L; **no ILS on 13R** (VOR or GPS RWY 13R, Parkway Visual RWY 13R, dual-PAPI RLLS lighting) — see §9/§10 |
| RFF category | **ARFF Index E** `[FAA AIP AD 2.6.2]`; Class-I certified since 5/1/1973 |
| Control type | **Radar**, Class B — JFK ATCT on field; **New York TRACON (N90, Westbury NY)** approach/departure; **New York ARTCC (ZNY, Ronkonkoma)** en route |
| Elevation class | Sea level (13 ft) — **not** hot-and-high; the performance/reliability drivers are **airspace/traffic density, converging-runway geometry, and coastal weather**, not density altitude |
| Special-airport status | 🟥 **FAA-Order slot-controlled (Part 93 High Density heritage)** — scheduled operations capped at **81/hour, 0600–2259 local**; intersecting non-parallel runway quad drives dependent/converging approach procedures — see §5/§11 |
| Customs / PoE | **Yes** — Federal Inspection Services historically in Terminals 1, 4, 7 and 8; exact desk hours not confirmed 🟧 (assumed major-gateway H24) |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **YES — hub/base** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **KEWR, KLGA** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **20 min / 22 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Field is bay-fill/reclaimed marshland at 13 ft MSL on Jamaica Bay; no close-in high terrain. Non-issue for the field itself. |
| Runway length vs fleet perf | 🟩 | All eight runway ends are 8,400 ft or longer; ample for the A330-900 even hot/heavy — field length is not a limiting factor at this fleet type. |
| Approach availability / minima | 🟩 | ILS CAT II/III on 04R/22L, CAT II on 13L, CAT I on the remaining ILS ends; 13R has no ILS (VOR/GPS + visual only) — brief accordingly if 13R is assigned. |
| Airspace / traffic / control | 🟥 | One of the most congested airspace systems in the US (N90 TRACON handles JFK/LGA/EWR/TEB/ISP in close proximity); JFK's own runway layout is two **intersecting, non-parallel** pairs requiring dependent/converging-approach procedures — see §3.2. |
| Weather / seasonal hazard | 🟧 | Coastal exposure to winter nor'easters, summer convective activity, and occasional tropical-system remnants; fog/low-stratus occurs but is less the defining threat than at some coastal fields — see §14. |
| Curfew / slots / hours | 🟥 | No hard curfew (H24 confirmed operation) but a **hard FAA-Order scheduling cap of 81 operations/hour, 0600–2259 local** — see §6/§11. |
| RFF category vs our types | 🟩 | Index E — above our fleet's requirement. |
| Fuel availability | 🟧 | Jet A assumed available as a major international gateway; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | FIS confirmed in principle; exact desk hours not confirmed, and the airport's terminal programme is **mid-transition in 2026** (New Terminal One Phase A and Terminal 6 first gates both opening this year) — confirm current gate/terminal assignment before finalising a stand plan. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
KJFK sits at 13 ft MSL on reclaimed marshland at the edge of Jamaica Bay, in the flat coastal plain of Long Island/Queens — there is **no close-in high terrain** relevant to any arrival, departure or missed-approach path. This is a non-issue field for terrain; the operative hazards here are airspace complexity and the airfield's own runway geometry (§3.2), not CFIT. Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟥
JFK sits inside the **New York TRACON (N90)** area, one of the most complex and congested terminal environments in the world, sharing airspace in close proximity with LaGuardia (KLGA), Newark Liberty (KEWR), Teterboro (KTEB) and Long Island MacArthur (KISP). The field's own runway layout compounds this: JFK has **two intersecting, non-parallel runway pairs** — 04L/22R and 04R/22L (oriented roughly NE–SW) crossing near midfield with 13L/31R and 13R/31L (oriented roughly SE–NW) — rather than a simple parallel set. The AIP explicitly flags **converging operations on RWY 13R and RWY 22L, conducted via an arrival distance window**, a dependent-approach procedure driven directly by this intersecting geometry. Expect radar vectors, runway crossings, and configuration choices that are traffic- and wind-dependent rather than a single default "calm-wind" runway. Cross-ref the **[North America Airspace brief](../../../../airspace/north-america.md)** for FIR/ARTCC-level context — note that brief's current scope is the western Canada/US corridor into KSFO, not a JFK/ZNY-specific writeup; a dedicated Northeast/oceanic-entry ARTCC brief covering **New York ARTCC (ZNY)** is not yet built (see §18).

### 3.3 Runway excursion 🟧
Declared distances (§7) show real gaps between physical runway length and usable LDA on several ends — most notably **RWY 22R, where the physical length is 12,079 ft but the published LDA is only 7,795 ft**, a reduction well beyond what the tier-4 displaced-threshold figures alone would explain; the AIP's own remark on converging 13R/22L operations is the likely operational driver. Treat the FAA-published TORA/TODA/ASDA/LDA table (§7) as authoritative — do not back-calculate LDA from a runway's physical length or from the (separately tier-4-sourced) displaced-threshold figures. Non-standard EMAS beds are installed at the departure ends of **RWY 4R (393 × 226 ft)** and **RWY 22L (405 × 226 ft)** as a runway-excursion safety net. None of the eight runway ends are limiting for the A330-900 at normal weights.

### 3.4 Weather threat 🟧
JFK's coastal Queens/Jamaica Bay location exposes it to **winter nor'easters** (heavy snow, ice, and strong onshore winds — a significant de-icing and ground-delay driver), **summer convective activity** (afternoon/evening thunderstorms typical of the US Northeast), and, less frequently, the **remnants of Atlantic tropical systems** in late summer/early autumn bringing heavy rain and gusty wind. Gusty surface wind is a recurring factor in runway-configuration changes given the intersecting non-parallel layout — a config change here is not a simple reciprocal swap but a choice between two differently-oriented runway pairs. Coastal fog/low stratus occurs but is not as reliably defining a threat here as at some West Coast fields; verify current-season NOTAM/SIGMET picture regardless. See §14.

### 3.5 Operational considerations 🟥
The defining threat pairing at JFK is **airspace/traffic density plus the intersecting-runway/converging-approach geometry** — brief for extended vectoring, runway crossings, and a config that may not match the "obvious" wind-preferred runway due to dependent-operation rules. The **FAA-Order 81-operations/hour scheduling cap** (§6/§11) and the historically long taxi times through JFK's "Bay" taxiway system (reflected in the VAMSYS 20/22-minute taxi figures) are the standing commercial/tactical planning items. RFF is well above fleet requirement. The **Bldg 73 apron ramp wingspan restriction (>171 ft, except under tow)** and the **Twy A 17-kt speed restriction naming the A330 explicitly** (§13/§17) are real, fleet-relevant ground-ops items — not hypothetical.

---

## 4. Cautions & Warnings

- **Two intersecting, non-parallel runway pairs** (04/22 crossing 13/31 near midfield) — do not assume a simple parallel-runway config logic; converging/dependent operations apply between RWY 13R and RWY 22L.
- **RWY 22R published LDA is only 7,795 ft against a 12,079 ft physical length** — brief the declared LDA, not the runway length, if assigned this end.
- **Bldg 73 ramp is closed to aircraft with wingspan over 171 ft except under tow — the A330-900neo (≈210 ft/64 m) is captured.** Confirm ground routing with Ramp/Ground.
- **Twy A between Twy NA and Twy NB carries a 17 kt/20 mph maximum speed restriction that explicitly names the A330** (along with A380, 747-8/-400, 777-200/-300ER, A340, 787, A350) — do not assume normal taxi speed applies through this segment.
- **Official Chart Supplement Hot Spot HS1**: Twy K/Twy J complex intersection, close proximity to RWY 04L and RWY 31L `[FAA Chart Supplement NE vol, cycle eff. 2026-03-19–2026-05-14, retrieved 2026-07-26]` — re-verify against the current cycle before the op. 🟧
- Aircraft are **not permitted to stop on either the Twy A or Twy B bridges**.
- **RWY 31R and RWY 13L holding-position markings at the RWY 4L/22R junction are reported obscured** (SE and NW sides respectively) — the same complex central area as HS1; extra vigilance taxiing through.
- **Flocks of birds on and in the vicinity of the airport** are a standing AIP remark — JFK sits directly adjacent to the Jamaica Bay Wildlife Refuge.
- **High volume of low-level VFR traffic (500 ft and below) along the shoreline south of JFK**, plus **indefinite para-sail and banner-towing operations at 1,000 ft and below over the Upper/Lower New York Bays including Rockaway Inlet** — relevant to the historic Canarsie-area visual approach corridor to RWY 13L/13R.
- **No ILS on RWY 13R** — only VOR/GPS and Parkway Visual, with a dual-PAPI (RLLS) lighting system; do not expect a precision approach to this end.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a "special airport" in reachable sources; the standing crew-briefing items are the **intersecting non-parallel runway geometry**, the **converging RWY 13R/22L dependent-approach procedure**, and the **absence of an ILS on RWY 13R**. 🟥
- **Crew-qualification gate:** ILS CAT II/III currency required for full-capability ops to RWY 04R/22L; ILS CAT II currency required for RWY 13L — confirm crew/aircraft currency before planning either as the primary low-vis approach. 🟧
- **Operating restrictions / bans:** Bldg 73 ramp closed to wingspan >171 ft except under tow (captures the A330-900neo); Twy A (between Twy NA/NB) 17 kt speed cap naming the A330 explicitly; several taxiway closures/restrictions reported "until further notice" in the AIP general remarks (Twy Z between RWY 04L/22R plus Twy Y; Twy NB closed to southbound turns at Twy A; Twy D between Twy C and Hangar 7) — verify current status via NOTAM before planning ground routing. 🟧 No RNP AR ban or circling-not-authorised note found in reachable sources — verify current AIRAC.
- **Overflight / entry / permits:** Standard US domestic/international arrival; **Special Air Traffic Rules — 14 CFR Part 93 High Density Airport heritage** applies, with a prior reservation (Operating Authorization/"slot") required for scheduled IFR operations — see AIM and §6/§11. 🟥
- **Operations notes:** ANSP — FAA (New York TRACON/N90; New York ARTCC/ZNY). Airport operator — The Port Authority of New York and New Jersey. Noise-sensitive airport with an active noise-abatement restriction line: **212-435-3782** (normal business hours) `[FAA AIP general remarks]`.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | **H24 confirmed** — FAA AIP AD 2.3.1: "All Months, All Days, All Hours" | 🟩 |
| AD operating hours | H24 confirmed — same source | 🟩 |
| Night / curfew restrictions | **No hard curfew** — 24-hour operation; noise-abatement restrictions handled via the Port Authority contact line, not a movement ban | 🟩 |
| RFF category | ARFF Index E — confirmed via FAA AIP | 🟩 |
| Fuel | Jet A assumed available (major international gateway); specific supplier/hours not confirmed | 🟧 |
| PCN | 04L/22R **90 R/B/W/T** · 04R/22L **90 F/B/W/T** · 13L/31R **148 R/A/W/T** · 13R/31L **98 R/B/W/T** `[FAA AIP AD 2.12]` | 🟩 |
| Customs | FIS historically in T1/T4/T7/T8; exact hours not confirmed | 🟧 |
| Handling / FBO | Major-hub handling assumed; specific agent not confirmed in reachable public sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04L | 12,079 × 200 ft | Concrete / PCN 90 R/B/W/T | 11,351 | 11,351 | 11,470 | 11,010 | No ILS-lighting ALS; VASI P4L |
| 22R | 12,079 × 200 ft | Concrete / PCN 90 R/B/W/T | 12,079 | 12,079 | 11,219 | **7,795** | Converging-ops arrival-distance-window reduction (§3.3) — do not back-calculate from length |
| 04R | 8,400 × 200 ft | Asphalt / PCN 90 F/B/W/T | 8,400 | 8,400 | 8,400 | 8,400 | **ALSF-2; ILS CAT II/III (ident JFK)**; EMAS at DER (393×226 ft) |
| 22L | 8,400 × 200 ft | Asphalt / PCN 90 F/B/W/T | 8,400 | 8,400 | 8,400 | 8,400 | **ALSF-2; ILS CAT II/III (ident IWY)**; EMAS at DER (405×226 ft) |
| 13L | 10,000 × 200 ft | Concrete / PCN 148 R/A/W/T | 10,000 | 10,000 | 10,000 | 9,093 | ALSF-2; **ILS CAT II (ident TLK)** |
| 31R | 10,000 × 200 ft | Concrete / PCN 148 R/A/W/T | 10,000 | 10,000 | 9,513 | 8,486 | MALSR; ILS CAT I (ident RTH) |
| 31L | 14,511 × 200 ft | Concrete / PCN 98 R/B/W/T | 14,511 | 14,511 | 14,511 | 11,247 | No ALS; ILS CAT I (ident MOH, no DME component found) |
| 13R | 14,511 × 200 ft | Concrete / PCN 98 R/B/W/T | 14,511 | 14,511 | 14,511 | 12,467 | **No ILS.** Dual-PAPI RLLS lighting; supports VOR or GPS RWY 13R & Parkway Visual RWY 13R |

*Source: FAA AIP, Part 3 AD 2.0 New York, AD 2.12 (Runway Physical Characteristics) and AD 2.13 (Declared Distances) — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_new_york.html (retrieved 2026-07-26), treated as primary. **Cross-check (tier-4):** OurAirports (retrieved 2026-07-26) independently confirms all four physical runway lengths/widths (12,079/8,400/10,000/14,511 ft × 200 ft) and reports displaced thresholds of 463 ft (04L) / 2,696 ft (22R), 905 ft (13L) / 1,030 ft (31R), 2,043 ft (13R) / 3,263 ft (31L), and none on 04R/22L — these figures **do not fully reconcile arithmetically** against the FAA-published LDAs above (most notably 22R, §3.3); treat the AIP's AD 2.13 declared distances as authoritative and the exact per-runway displaced-threshold/stopway breakdown as **not itemised in this reachable AIP HTML extract — verify on the current Chart Supplement airport diagram.** 🟧 Surface material (concrete vs asphalt) is derived from the PCN pavement-type code (R = rigid/concrete, F = flexible/asphalt) rather than a literal surface-type field; one secondary source additionally describes 04L/22R as grooved concrete. 🟧*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Approach | JFK Approach | 125.7 | 24 | `[FAA AIP AD 2.18]` |
| Clearance / Pre-Taxi Clearance | JFK Clearance | 135.05 | 24 | Additional N/S split published on 348.6 (UHF) |
| Ground (Primary) | JFK Ground | 121.9 | 24 | Secondary UHF 348.6 |
| Ground (South) | JFK Ground | 121.65 | 24 | |
| Tower — RWY 04R/22L & 13L/31R | JFK Tower | 119.1 | 24 | |
| Tower — RWY 04L/22R & 13R/31L | JFK Tower | 123.9 (281.55 mil) | 24 | |
| D-ATIS (Arrival, SW) | JFK ATIS | 115.4 | 24 | |
| D-ATIS (Arrival, NE) | JFK ATIS | 117.7 | 24 | |
| D-ATIS (Arr/Dep) | JFK ATIS | 128.725 | 24 | |
| Ramp Control | JFK Ramp | 125.05 | — | Pushback metering applies during peak banks — see §11/§13 |
| Class B (≤2,000 ft & within 8 NM, tower-controlled) | — | 125.25 / 281.55 | — | |
| PARCH STAR | — | 125.7 | — | Shares frequency with Approach |
| ROBER STAR | — | 125.7 | — | Shares frequency with Approach |
| Centre / FIR | New York ARTCC (ZNY) | Not published in this AIP extract | 24 | 🟧 discrete en-route frequency not confirmable from this source |
| Emergency | — | 121.5 (243 mil) | — | |

*Source: FAA AIP AD 2.18 (Air Traffic Services Communication Facilities), retrieved 2026-07-26. New York TRACON (N90) is the approach/departure facility referenced by name in industry/ATC-community sources; 🟧 note reported 2024 FAA controller-workforce reassignments from N90 (Westbury, NY) toward Philadelphia TRACON — current facility staffing/status not independently confirmed, verify before relying on the facility name operationally.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | JFK | 115.9 (freq not itemised in this AIP extract — verify chart) | H24 | On field, 40°37′58.38″N/073°46′17.01″W; mag var 12° W `[FAA AIP AD 2.19]` 🟧 |
| ILS/DME 04L | HIQ | Not itemised in this extract 🟧 | H24 | CAT I |
| ILS/DME 22R | JOC | Not itemised 🟧 | H24 | CAT I |
| ILS/DME 04R | JFK | Not itemised 🟧 | H24 | **CAT II/III**; inner marker present |
| ILS/DME 22L | IWY | Not itemised 🟧 | H24 | **CAT II/III**; inner marker present |
| ILS/DME 13L | TLK | Not itemised 🟧 | H24 | **CAT II** |
| ILS/DME 31R | RTH | Not itemised 🟧 | H24 | CAT I |
| ILS 31L | MOH | Not itemised 🟧 | H24 | CAT I; no DME component found in this extract |
| Canarsie VOR | CRI | Not confirmed 🟧 | — | Referenced by name in historical/current RWY 31-family and 13L/13R procedure documentation — frequency not independently confirmed |

*Source: FAA AIP AD 2.19 (Radio Navigation and Landing Aids), retrieved 2026-07-26 — gives idents, site coordinates and elevations for every ILS component but **does not itemise the tuned frequency** for the JFK VOR/DME or any ILS in this HTML extract; frequencies must be taken from the current Chart Supplement/IAP chart. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** TA 18,000 ft MSL / TL FL180 (US-wide standard) — verify no local override on current chart.
- **Speed:** 250 KIAS < FL100 (US standard); Class B speed restrictions apply within the JFK Class B surface area — confirm current chart.
- **Preferential runway logic:** No single default — wind, demand, and the converging-runway dependency between RWY 13R and RWY 22L jointly determine the active configuration; N90 assigns the landing runway. See §3.2.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 04R | ILS OR LOC RWY 04R, **ILS RWY 04R (CAT II–III)** | Full precision capability |
| 22L | ILS OR LOC RWY 22L, **ILS RWY 22L (CAT II–III)** | Full precision capability |
| 13L | ILS OR LOC RWY 13L, **ILS RWY 13L (CAT II)** | Historic curved visual ("Canarsie") also flown to this end in visual conditions — see §18 |
| 31R | ILS OR LOC RWY 31R | CAT I |
| 04L | ILS OR LOC RWY 04L | CAT I |
| 22R | ILS OR LOC RWY 22R | CAT I |
| 31L | ILS OR LOC RWY 31L | CAT I |
| 13R | **VOR or GPS RWY 13R**, Parkway Visual RWY 13R | **No ILS** — dual-PAPI RLLS lighting |

- **STARs (names only — verify current AIRAC):** **CAMRN FOUR**, **PARCH THREE (RNAV)**, **ROBER TWO** `[names corroborated via FAA AIP comms table (PARCH/ROBER STAR freq 125.7) and tier-4 chart-index mirrors, retrieved 2026-07-26]` 🟧 — exact current edition numbers to verify.
- **LVP:** CAT II/III equipment and lighting confirmed on 04R and 22L (ALSF-2); CAT II on 13L. 🟧 exact RVR trigger values not in reachable extract.
- **Missed approach watch-items:** No terrain driver (§3.1); the primary missed-approach workload driver is re-sequencing into the dense N90 traffic environment, and — if on the 13-series — awareness of the converging RWY 22L dependency.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **KENNEDY FIVE** (conventional), **SKORR FIVE (RNAV)**, **DEEZZ FIVE (RNAV)** `[current per tier-4 corroboration, retrieved 2026-07-26]` 🟧 — verify current edition on the day's chart; several historic conventional SIDs (BETTE, GREKI, HAPIE, MERIT-series) have been reported retired/replaced by RNAV procedures and should **not** be assumed current.
- **RNP / climb-gradient requirements:** RNAV SIDs likely require RNP-1 (or better) equipage per FAA standard; no unusual hot-and-high-style gradient expected at sea level — confirm on the current chart. 🟧
- **Take-off minima:** Not itemised in reachable extract — pull from the current AIRAC chart before use. 🟧
- **Start-up / push-back:** **Ramp metering in effect — contact Ramp Control prior to pushback, 1200–1500Z and 1900–0300Z daily** `[FAA AIP general remarks]` — build this into peak-bank turnaround planning (see Dispatch page).
- **ATC slot / CTOT & clearance:** JFK is **FAA-Order slot-controlled** — scheduled operations capped at **81/hour, 0600–2259 local**, administered directly by the FAA Slot Administration Office (not an independent coordinator) `[89 FR 41486, FAA Federal Register Notice, effective 2024-10-27]`. 🟥 See §Dispatch §4 for the full commercial treatment.
- **De-icing:** Not confirmed as a specific pad/gate system in reachable sources for this build pass; a Northeast-US coastal winter climate makes de-icing a routine seasonal requirement — verify current provisioning. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Noise-sensitive airport; restrictions/queries via **212-435-3782** (normal business hours) `[FAA AIP general remarks]`. Historic Port Authority measures include a 1959 mandatory departure noise limit (112 PNdB) and a 1986 per-exceedance penalty — both dated tier-4 historical figures; current fee schedule not independently confirmed. 🟧 A historic noise-abatement departure procedure off RWY 22R (intercepting the JFK R-232, referenced in older material as the "Kennedy Climb") and a steep post-departure turn off RWY 31L historically associated with reducing noise over Canarsie are reported in secondary sources — **not confirmed as currently charted/named procedures**; do not assume either survives on the current AIRAC without verification. 🟧
- **Night noise / dB limits:** No specific current dB limit found in reachable sources — verify locally. 🟧
- **Engine run-up restrictions:** Not published in reachable source — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** No published idle-reverse restriction found — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody international gates historically concentrated in Terminals 1, 4, 7 and 8; the terminal programme is **mid-transition in 2026** with New Terminal One (Phase A, initial widebody gates, adjacent to Terminal 4) and the first gates of the new Terminal 6 both opening this year — confirm current gate assignment with handling. See Dispatch §2/§3. 🟧
- **Push-back:** Ramp-metering procedure applies at peak banks (§11) — contact Ramp Control prior to pushback during the published metering windows. 🟧 Mandatory-vs-self-manoeuvre policy not confirmed for Code E stands.
- **Standard taxi routes:** JFK's taxiway system ("Bay" taxiways plus the A/B/K/J complex) is extensive and historically associated with long taxi times, reflected in the VAMSYS 20 min/22 min planning figures; confirm routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **Official Chart Supplement Hot Spot HS1 — Twy K/Twy J complex intersection, close proximity to RWY 04L and RWY 31L** `[FAA Chart Supplement NE vol, cycle eff. 2026-03-19–2026-05-14]`. The AIP separately reports **RWY 31R holding-position markings at the RWY 4L/22R junction obscured (SE side)** and **RWY 13L holding-position markings at the same junction obscured (NW side)** — the same complex central area. **Bldg 73 apron ramp is closed to wingspan >171 ft except under tow** (captures the A330-900neo). **Twy A between Twy NA and Twy NB carries a 17 kt/20 mph maximum speed restriction naming the A330 explicitly** (with A380, 747-8/-400, 777-200/-300ER, A340, 787, A350); A380/747-8 additionally carry a blanket 17 kt/20 mph cap on **all** taxiways. **Aircraft may not stop on either the Twy A or Twy B bridges.** Several taxiway segments (Twy Z/Twy Y between RWY 04L/22R; Twy NB southbound turns at Twy A; Twy D between Twy C and Hangar 7) are reported closed "until further notice" — verify current NOTAM status. 🟥
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid continental/coastal climate typical of the US Northeast; wind is variable by season and system passage rather than a single dominant prevailing direction, which is part of why JFK's config logic depends on both wind and the converging-runway rules (§3.2).
- **Seasonal hazards:** **Winter nor'easters** (roughly Nov–Mar) bring heavy snow, icing and strong onshore winds — the principal seasonal de-icing/ground-delay driver. **Summer convective activity** (afternoon/evening thunderstorms, roughly May–Sep) is typical of the Northeast corridor and a recurring ATFM/ground-delay-program driver system-wide. **Remnant tropical systems** occasionally affect the New York area in late summer/early autumn with heavy rain and gusty wind — rare but not zero-probability; monitor seasonally. No hot-and-high concern at 13 ft elevation.
- **Local effects:** Coastal/bay proximity (Jamaica Bay) brings bird activity (§4) and a marine influence on low-level wind and occasional fog; the shoreline south of the field carries a reported high volume of low-level VFR traffic.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-system advisories in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: current status of the Twy Z/Twy Y and Twy D closures noted in §13, current Chart Supplement Hot Spot cycle (HS1 above is from the 2026-03-19–2026-05-14 cycle), ILS 04R/22L/13L outages or CAT downgrade, RWY 13R VOR/GPS or Parkway Visual NOTAM status, ramp-metering window changes, RFF downgrade, GPS/RAIM for RNAV procedures, bird-activity advisories. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Home hub/base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** **KEWR** and **KLGA** (company-preferred, `[VAMSYS mirror 2026-07-26]`) — both share the same congested New York-area airspace and weather system as JFK, so a systemic N90-area flow event or a widespread nor'easter/convective outbreak reduces their independent value as weather alternates; treat as primarily a *capacity/ATC* alternate pairing rather than an independent-weather one. LGA additionally carries its own slot-control regime and the LGA-specific Perimeter Rule (a LaGuardia restriction — **it does not apply to JFK** and should not be conflated with JFK's own FAA-Order scheduling cap, §11). 🟧
- **Fuel-uplift notes:** Jet A assumed available as a major international gateway; specific into-plane provider/hours not confirmed — confirm on the OFP. 🟧
- **Range/perf flags for our fleet:** Field length/strength is non-limiting for the A330-900 on any of the eight runway ends. The operative planning risk is **N90/JFK airspace congestion and the FAA-Order 81-ops/hour scheduling cap** (§11) rather than runway performance — hold fuel and alternate selection should account for ATC-driven delay exposure, especially in winter nor'easter or summer convective conditions.

---

## 17. Fleet-specific notes (optional)

- **A330-900neo (OM B):** Wingspan ≈210 ft (64 m) places the type inside the **Bldg 73 apron ramp >171 ft wingspan restriction** (closed except under tow) and directly inside the **Twy A (between Twy NA/NB) 17 kt/20 mph speed restriction**, which names the A330 explicitly alongside 747-8, 777-300ER, A350 and other large types — confirm ground routing with Ramp/Ground before pushback. Code E — fits the historic widebody-capable gate clusters in T1/T4/T7/T8 (and, from 2026, the new Terminal One/Terminal 6 gates) without a physical-size issue. No hot-and-high or field-length performance penalty at this sea-level field. See **[Fleet Capability Matrix](../../../../../fleet/capability-matrix.md)**.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Exact current SID/STAR edition numbers (KENNEDY FIVE, SKORR FIVE, DEEZZ FIVE; CAMRN FOUR, PARCH THREE, ROBER TWO) — corroborated by name only via tier-4 chart-index mirrors and the AIP's communications table; not independently verified against a current-cycle chart in this pass.
- ILS/VOR tuned frequencies (JFK VOR/DME and all seven ILS idents) — the reachable FAA AIP extract gives idents/coordinates/site elevations but not tuned frequencies; pull from the current Chart Supplement/IAP chart.
- Take-off minima and any special departure procedure (ODP/DVA) figures — not itemised in reachable sources.
- Exact CAT II/III RVR trigger values and current LVP procedure text for RWY 04R/22L/13L.
- Current status of the historic "Kennedy Climb" (RWY 22R noise-abatement procedure) and the steep post-departure turn off RWY 31L — referenced in secondary/historical material only, not confirmed as currently charted/named.
- Current status of the Twy Z/Twy Y closure (between RWY 04L/22R), the Twy NB southbound-turn restriction at Twy A, and the Twy D (Twy C–Hangar 7) closure — all reported "until further notice" in the reachable AIP general remarks; re-verify via current NOTAM.
- CBP/FIS desk hours and the current (mid-transition) widebody gate/terminal assignment for our operation, given the concurrent New Terminal One Phase A and Terminal 6 first-gate openings in 2026.
- Exact expiration date and hourly cap of the current FAA slot-control Order — the 2024 Federal Register notice (89 FR 41486) confirms 81 operations/hour through 2026-10-24; secondary reporting (2026) indicates a further extension to October 2028, referencing Federal Register document 2026-12591, which could not be independently fetched and read in full during this build — confirm current expiration/terms before relying on it for long-range schedule planning.
- Canarsie VOR (CRI) frequency, and current status/currency of the historic curved "Canarsie" visual approach to RWY 13L relative to the newer RNAV (GPS) Z procedure.
- No dedicated OM C Airspace brief yet exists for **New York ARTCC (ZNY)** or New York TRACON (N90) specifically — the linked North America airspace brief (§3.2) is scoped to the western Canada/US corridor; build a Northeast/ZNY-specific brief if this becomes a priority.
- Fuel supplier/hours, ground-handling agent, and Fuel/de-icing provisioning detail — not confirmed in reachable public sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3, AD 2.0 — New York** (John F. Kennedy International, ICAO Identifier KJFK) — reference point, elevation, magnetic variation, ATS attendance, RFF/ARFF category, runway physical characteristics, declared distances, approach lighting, communications, navaids, and general remarks (wingspan/speed restrictions, taxiway closures, converging-ops note, hot-spot-adjacent obscured markings, noise-abatement contact) — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_new_york.html (retrieved 2026-07-26).
- FAA — Chart Supplement Northeast (NE) volume, Airport Hot Spots list, cycle effective 19 Mar 2026 – 14 May 2026 — https://aeronav.faa.gov/afd/19Mar2026/ne_hotspot.pdf (retrieved 2026-07-26). *KJFK HS1 description; re-verify against the current cycle.*
- OurAirports — https://ourairports.com/airports/KJFK/ and https://ourairports.com/airports/KJFK/runways.html (retrieved 2026-07-26). *Tier-4 cross-check of ARP/elevation/runway dimensions and displaced-threshold figures — does not fully reconcile against AIP declared distances, see §7.*
- Federal Register — "Operating Limitations at John F. Kennedy International Airport," 89 FR 41486, Docket FAA-2007-29320, effective 2024-10-27 — https://www.federalregister.gov/documents/2024/05/13/2024-10297/operating-limitations-at-john-f-kennedy-international-airport (retrieved 2026-07-26). *81 operations/hour scheduling cap, 0600–2259 local; FAA Slot Administration Office administration; Part 93 High Density Rule background.*
- Aviation A2Z — "FAA Blocks New Flights at New York JFK, Extends Strict Slot Controls" — https://aviationa2z.com/index.php/2026/06/21/faa-blocks-new-flights-at-new-york-jfk-extends-strict-slot-controls/ (retrieved 2026-07-26). *Secondary reporting of a further extension to October 2028 — not independently confirmed against the full Federal Register text in this pass, see §18.*
- Simple Flying — reporting on JFK New Terminal One (Phase A widebody gates, 2026) and Terminal 6 (first gates, 2026; full completion 2028) — https://simpleflying.com/inside-new-york-jfk-new-terminal-1-22-widebody-gates/ and related 2026 terminal-guide reporting (retrieved 2026-07-26). *Secondary/current-affairs corroboration of the 2026 terminal-transition status.*
- AirNavRadar — "Battling Bad Weather & Windshear on the Canarsie Approach to JFK Runway 13L" — https://www.airnavradar.com/blog/battling-bad-weather-windshear-on-the-canarsie-approach-to-jfk-runway-13l (retrieved 2026-07-26). *Secondary corroboration of the historic Canarsie visual approach; current-charting status not independently confirmed, see §18.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
