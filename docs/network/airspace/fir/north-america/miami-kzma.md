# Miami ARTCC (KZMA) — FIR Briefing

**Scope:** single ARTCC (US domestic "FIR") — peninsular Florida plus the large **Miami Oceanic CTA/FIR** over the Gulf of Mexico, the Straits of Florida, the Bahamas approaches and the western Atlantic, containing **Miami Intl (KMIA)** · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · **Adjacent ARTCCs/oceanic FIRs:** Jacksonville (KZJX) N · Houston (KZHU) W/oceanic (Gulf boundary) · New York Oceanic (KZNY oceanic) NE · San Juan CERAP E · Nassau/Bahamas ACC, Havana ACC, Dominican Republic ACC, Haiti ACC S/SE
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Miami Center is the **2nd-busiest ARTCC in the United States** and has a dual character: a **fully radar/ADS-B-controlled domestic component** over peninsular Florida, and a **large procedural oceanic component (the Miami Oceanic CTA/FIR)** extending out over the Gulf of Mexico, the Straits of Florida and the western Atlantic/Caribbean approaches — worked by the same facility rather than split into a separate oceanic callsign as New York's KZWY is. The oceanic component uses **procedural separation and CPDLC/ADS-C where equipped**, and Miami delegates approach-control jurisdiction for certain underlying facilities in the Bahamas (e.g. Nassau). Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances domestically or procedural oceanic clearances offshore. Terminal procedures for KMIA live in the airport briefing (§9). Live restrictions (NOTAMs, hurricane advisories, SIGMETs) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / control ident | **KZMA** — Miami ARTCC ("Miami Center"); US domestic Class A enroute over peninsular Florida, plus the **Miami Oceanic CTA/FIR** over the Gulf/Straits of Florida/western Atlantic. Facility located in Miami-Dade County, Florida. Underlying terminal facility: **Miami TRACON (A80)** for KMIA and the South Florida metroplex |
| Controlling ATSU / ANSP | **FAA Air Traffic Organization** — Miami ARTCC, working both the domestic radar sectors and the oceanic procedural sectors from one facility |
| Airspace class & vertical limits | Domestic: US **Class A FL180–FL600**; terminal **Class B** at Miami (A80). Oceanic: **Class A FL55–FL600 inclusive** (Class E above FL600) in the Miami Oceanic CTA/FIR 🟧 (confirm current lower limit vs AIP) |
| RVSM | 🟥 Applicable **FL290–FL410** domestically (14 CFR 91.180); oceanic RVSM/PBCS equivalence applies within the Miami Oceanic CTA/FIR — see OM E §5 |
| PBN environment | Domestic: RNAV Q/T-route, RNAV SID/STAR, RNP APCH. Oceanic: **RNP-10/RNP-4** capability determines lateral separation minima (50 NM equipped vs 90 NM Miami-oceanic / 100 NM Houston-oceanic unequipped) — see OM E §5 |
| Surveillance & datalink | 🟩 Domestic: continuous **radar + ADS-B**. 🟧 Oceanic: primarily **procedural**, with **CPDLC/ADS-C (FANS 1/A)** available/recommended in parts of the Miami Oceanic CTA/FIR — extent of radar/ADS-B coverage over the Gulf/Straits vs fully procedural sectors to be confirmed against current FAA oceanic documentation |
| Primary language & comms | 🟩 **VHF domestically; English.** Oceanic: VHF plus **HF** where beyond VHF range — confirm current HF family/coverage 🟧 |
| Key hazard(s) | 🟥 **Hurricane season (Jun–Nov)** — Miami Center's area is among the most exposed in the NAS to tropical cyclones, with frequent large-scale reroutes/closures; 🟧 **oceanic/domestic procedural transition** when crossing from radar-controlled Florida airspace into the procedural Miami Oceanic CTA/FIR; summer convection (near-daily airmass thunderstorms) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟧 | Domestic Florida sectors fully radar/ADS-B-controlled; the **Miami Oceanic CTA/FIR** is substantially procedural — confirm the exact radar/ADS-B coverage footprint over the Gulf and Straits of Florida vs the fully procedural offshore sectors. |
| Communication coverage & language | 🟧 | VHF continuous domestically; oceanic HF coverage and any CPDLC mandate/availability to be confirmed against current FAA oceanic ops documentation. |
| Datalink / surveillance requirement | 🟥 | Domestic: **ADS-B Out mandatory** — FAA 14 CFR 91.225; **1090ES required ≥ FL180**, effective 01 JAN 2020. Oceanic: **RNP-10/RNP-4** capability drives the applicable lateral separation (50 NM equipped vs 90 NM Miami-oceanic/100 NM Houston-oceanic unequipped). |
| Terrain / MORA / driftdown | 🟩 | Florida is uniformly low/flat; not a terrain factor. The Miami Oceanic area is entirely over water — driftdown planning there is a ditching/water-alternate consideration, not a terrain one. |
| Diversion-aerodrome coverage | 🟧 | Dense over peninsular Florida (curated brief exists for KMIA, §9); the oceanic segment relies on Bahamas/Caribbean fields and is comparatively sparse — not separately assessed here. |
| Special-use airspace (military / danger) | 🟧 | Extensive Florida military training areas (e.g. around Eglin/Tyndall/Homestead) and offshore warning areas; a KMIA-focused domestic transit is normally clear but confirm at planning. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV (Q/T routes, RNAV SID/STAR) · Mode S + ADS-B Out (1090ES ≥ FL180)** domestically; **RNP-10/RNP-4** for any oceanic lateral-separation credit. All defined in OM E. §5. |

---

## 3. ARTCC / oceanic-FIR structure & lateral/vertical boundaries

- **Lateral extent — domestic:** Miami Center's domestic component covers **peninsular Florida**. Combined with its oceanic component the facility is responsible for roughly **22.5 million cubic miles** of airspace over the Southern United States, the Gulf of Mexico and the Atlantic — making it, by this measure, one of the largest single ARTCC areas of responsibility in the country, and the **2nd busiest** by traffic count (**2,643,111 aircraft operations in 2024**).
- **Lateral extent — oceanic:** the **Miami Oceanic CTA/FIR** extends over the **Gulf of Mexico** and the **western Atlantic/Straits of Florida/Caribbean approaches**. Its Gulf-of-Mexico boundary with the **Houston Oceanic CTA/FIR** runs roughly along **longitude W086°** in the east, with the Houston side extending south from the Houston Center coastal boundary to around **latitude N24°30′** mid-Gulf. 🟧 (exact boundary geometry — verify current FAA ENR 7 series.)
- **Vertical structure:** as with any US ARTCC, **one facility** works the whole column domestically; public reference (see §Sources) describes **four areas of operation** with **six areas of specialization** and **36 sectors** in total, operating 24/7. 🟧 (tier-4/community corroboration — re-verify against current FAA facility documentation.) The oceanic component is organised separately from the domestic radar sectors given its procedural character.
- **Adjacent ARTCCs / FIRs (by boundary):**
  - **N — Jacksonville (KZJX, FAA).** Northern Florida/Georgia; the domestic overland handoff.
  - **W / Gulf — Houston (KZHU, FAA).** Shares the Gulf of Mexico oceanic boundary (~W086°, per above).
  - **NE — New York Oceanic (KZNY oceanic component, FAA).** The Atlantic oceanic boundary, well offshore.
  - **E — San Juan CERAP (Combined En-Route/Approach Control, FAA, Puerto Rico).** The eastern Caribbean approach.
  - **S / SE — Nassau/Bahamas ACC, Havana ACC (Cuba), Dominican Republic ACC, Haiti ACC.** International FIRs bordering the Miami Oceanic area to the south; boundary geometry not detailed here 🟧.
- **Sectorisation:** the domestic Florida sectors are one FAA facility with combinable/decombinable low/high sectors feeding **Miami TRACON (A80)** and other Florida approach facilities (Palm Beach, Orlando, Fort Myers, Tampa areas overlie or abut ZMA); the oceanic sectors are organised procedurally and are not detailed here — pull current FAA oceanic ops guidance at planning.

---

## 4. Control & ATSU

- **Enroute ATSU — domestic:** 🟩 **Miami ARTCC (KZMA, FAA)** — radar/ADS-B control of peninsular Florida.
- **Enroute ATSU — oceanic:** 🟧 **Miami Oceanic (KZMA oceanic component, FAA)** — procedural control (with CPDLC/ADS-C where equipped and available) over the Gulf/Straits/western Atlantic; the same physical facility as the domestic center, unlike New York's separately-designated KZWY.
- **Terminal facility inside the ARTCC:** 🟩 **Miami TRACON (A80)** sequences KMIA and the South Florida metroplex Class B; Palm Beach, Orlando, Fort Myers and Tampa approach facilities overlie or abut ZMA airspace elsewhere in Florida. Terminal procedures for KMIA are in the airport briefing (§9).
- **Delegated approach jurisdiction (oceanic):** 🟧 per public reference, Miami Oceanic delegates jurisdiction over certain underlying approach facilities to regional partners — e.g. **Nassau (Bahamas)** approach control is understood to hold jurisdiction over new approach facilities created within the ZMA oceanic area in that region; confirm the current Letter of Agreement scope before relying on this operationally.
- **FIS / FSS:** US **Flight Service** (Leidos) for domestic flight-information/advisory service; oceanic flight-information needs are met through the oceanic ATC/CPDLC channel, not FSS.
- **Surveillance basis:** 🟩 continuous radar + ADS-B over peninsular Florida; 🟧 procedural (non-radar) over most of the oceanic area, with surveillance extent offshore to be confirmed.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Miami ARTCC/Oceanic and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — required per **14 CFR 91.180**, applying both domestically and within the Miami Oceanic CTA/FIR. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 Domestic RNAV **Q/T-route**, RNAV SID/STAR, RNP APCH at Miami. 🟥 Oceanic: **RNP-10 or RNP-4** capability qualifies for **50 NM lateral separation**; aircraft without RNP-10/RNP-4 approval are held to **90 NM lateral separation in the Miami Oceanic CTA/FIR** (100 NM in the adjoining Houston Oceanic CTA/FIR). Confirm our fleet's oceanic PBN approval status. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟧 not required domestically (VHF voice continuous); within the Miami Oceanic CTA/FIR, **CPDLC + ADS-C (FANS 1/A)** is available/used where equipped, reducing reliance on HF voice position reporting — confirm current mandate status (if any) for this oceanic area. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** with **ADS-B Out** required domestically — **14 CFR 91.225**; **1090ES required at and above FL180** (UAT/978 MHz permitted only below 18,000 ft), effective 01 JAN 2020. Oceanic surveillance basis is separate (§4) — confirm any ADS-C/ADS-B extension offshore.

---

## 6. Communications & frequencies

- **ARTCC sectors / frequencies (domestic):** a KMIA transit is worked through Miami Center's Florida low/high sectors and handed to the adjacent ARTCC (**Jacksonville**) inbound, or to **Miami TRACON (A80)** at the terminal end; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **Oceanic communications:** 🟧 VHF where in range; **HF** required beyond VHF coverage over the Gulf/Atlantic/Caribbean — confirm the current HF family and any CPDLC/logon requirements for the Miami Oceanic CTA/FIR before oceanic-segment planning.
- **FIS / advisory:** US **Flight Service** (Leidos) for domestic flight-information/advisory service in uncontrolled airspace.
- **Language:** 🟩 **English**.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Domestic enroute network:** 🟩 US high-altitude **jet-route / Q-route (RNAV)** structure feeding the South Florida metroplex; KMIA arrivals/departures are sequenced through **Miami TRACON (A80)** on published RNAV STAR/SID procedures.
- **Oceanic route structure:** 🟧 the Miami Oceanic CTA/FIR carries organized and random-RNAV routings over the Gulf of Mexico and western Atlantic/Caribbean toward South America, the Caribbean and onward oceanic systems; specific track/route structure is AIRAC- and destination-dependent and is not reproduced here — pull the current FAA oceanic route guidance and the SimBrief/current-AIRAC-validated route at planning.
- **Major fixes / entry-exit points:** 🟧 domestic/oceanic transition fixes and Bahamas/Caribbean boundary crossing points are AIRAC-dependent; not detailed here.
- **Hubs & aerodromes inside the ARTCC:** 🟩 **Miami Intl (KMIA)**; other Florida fields overlying or abutting ZMA include Fort Lauderdale-Hollywood (KFLL), Palm Beach Intl (KPBI), Orlando Intl (KMCO), Southwest Florida Intl/Fort Myers (KRSW) and Tampa Intl (KTPA). Terminal detail for KMIA is in the airport briefing (§9); the others are not yet briefed (§12).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 peninsular Florida is uniformly low and flat — no terrain factor for MEA/MORA or cruise/descent planning. The oceanic component is entirely over water.
- **Boundary terrain:** none of operational significance — adjacent Jacksonville/Houston ARTCC territory is likewise low-lying coastal plain.
- **Driftdown / depressurisation escape:** not a terrain-limited problem anywhere in this ARTCC. Over the oceanic component, the relevant contingency planning concern is **ditching/water-alternate distance** rather than terrain clearance — not separately assessed here; see OM E oceanic/ETOPS-EDTO guidance if the route profile requires it.
- **Cold-temperature altitude corrections:** not a factor at KMIA or elsewhere in this ARTCC (subtropical/tropical climate).

---

## 9. Diversion aerodromes within the ARTCC

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Miami Intl | **KMIA** | Primary in-ARTCC hub / dep-return alternate | [KMIA brief](../../../destinations/north-america/united-states/kmia/index.md) |
| Fort Lauderdale-Hollywood Intl | **KFLL** | Co-terminal alternate (A80 area) | Brief to build 🟧 |
| Palm Beach Intl | **KPBI** | South Florida alternate, north of the Miami metroplex | Brief to build 🟧 |
| Orlando Intl | **KMCO** | Central Florida alternate | Brief to build 🟧 |
| Southwest Florida Intl (Fort Myers) | **KRSW** | Gulf-coast alternate | Brief to build 🟧 |
| Tampa Intl | **KTPA** | West-coast alternate | Brief to build 🟧 |

- **Coverage note:** 🟩 dense over peninsular Florida — KFLL/KPBI give close in-ARTCC redundancy to KMIA; KMCO/KRSW/KTPA extend statewide coverage. Oceanic diversion planning (Bahamas/Caribbean fields) is not assessed in this brief. ETP/critical-point planning is not a driver for the domestic segment; hurricane-season closures/reroutes (§11) are the dominant operational constraint.

---

## 10. Special-use airspace

- **Military training areas:** 🟧 Florida hosts substantial military training airspace (e.g. around Eglin AFB, Tyndall AFB, Homestead ARB and associated MOAs/restricted areas, plus Gulf/Atlantic warning areas offshore); a KMIA-focused domestic transit is normally clear of the busier ranges but confirm active status at planning.
- **Danger / prohibited areas:** 🟧 standing security/VIP airspace exists around certain South Florida locations; NOTAM-published — pull live at planning.
- **Delegated oceanic approach jurisdiction:** see §4 — Nassau (Bahamas) approach-control delegation within parts of the ZMA oceanic area; confirm current LOA scope before operational reliance.
- **Overflight-permit / diplomatic considerations:** 🟧 the domestic Florida segment carries none; the oceanic segment approaches international FIRs (Bahamas, Cuba, Dominican Republic, Haiti) where overflight/diplomatic considerations may apply depending on routing — not assessed here, confirm per destination.

> **SUA currency:** re-check active MOA/restricted/warning-area status and current TFRs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply the standard **US domestic IFR lost-comms** procedure (route/altitude per last clearance / expected / filed — 14 CFR 91.185; squawk **7600**) domestically. 🟧 Oceanic lost-comms procedure for the Miami Oceanic CTA/FIR to be confirmed against current FAA oceanic guidance — likely follows the standard oceanic contingency construct (route/level per the last-received/expected clearance) but is not separately verified here.
- **Weather-deviation / in-flight contingency:** domestically, radar-tactical — **request the deviation from ATC**. Oceanic weather deviation follows standard oceanic contingency procedure where applicable — confirm against current FAA guidance for this area. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **🟥 Atlantic hurricane season (1 Jun–30 Nov):** the defining seasonal hazard for this ARTCC — Miami Center's area, spanning peninsular Florida and the Gulf/Atlantic/Caribbean approaches, is directly exposed to tropical cyclones. Storms can force **large-scale sector closures, extended reroutes and full facility evacuation/relocation of operations** in extreme cases (as has occurred historically during major hurricanes); expect significant advance planning impact and short-notice NOTAM/TFR activity in season.
  - **Near-daily summer convection:** Florida's subtropical airmass thunderstorm regime produces frequent afternoon/evening convective activity, particularly June–September, driving tactical rerouting and holding.
  - **Waterspouts / marine convection:** relevant to the oceanic and coastal segments in season.

> **Pull at planning (T-2h):** enroute NOTAMs, TFRs, active hurricane/tropical-cyclone advisories and any associated facility-level ground stops/reroutes, SIGMET/AIRMET (convection, turbulence), active MOA/warning-area status, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **Miami Oceanic CTA/FIR lateral boundaries** (Houston Oceanic Gulf boundary, Atlantic boundary with New York Oceanic, southern boundaries with Nassau/Havana/Dominican Republic/Haiti ACCs) — verify current FAA ENR 7-series oceanic documentation.
- **Domestic/oceanic radar vs procedural coverage footprint** within KZMA — confirm which offshore areas carry radar/ADS-B vs fully procedural service.
- **Area/sector configuration** (4 areas of operation / 6 specialties / 36 sectors) — tier-4/community corroboration only; re-verify against current FAA facility documentation.
- Current **CPDLC/ADS-C mandate or availability status** and **HF frequency family** for the Miami Oceanic CTA/FIR — verify against current FAA oceanic ops guidance.
- Current scope of the **Nassau-delegated approach-control jurisdiction** within the ZMA oceanic area — verify current Letter of Agreement.
- Fleet **RNP-10/RNP-4 oceanic approval status** (drives 50 NM vs 90 NM lateral separation) — confirm against OM E / fleet documentation.
- No OM C airport briefs yet for **KFLL, KPBI, KMCO, KRSW, KTPA** — build if they become planned alternates. KMIA brief linked in §9.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **FAA — 14 CFR 91.225 (ADS-B Out) & 91.180 (RVSM) & 91.185 (two-way radio comms failure)** — ADS-B airspace classes, 1090ES ≥ FL180 effective 01 JAN 2020; RVSM FL290–410; lost-comms rules — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91 (retrieved 2026-07-26).
- **FAA — Aeronautical Information Publication, ENR 7.1 (General Procedures) & ENR 7.4 (Operational Policy / 50 NM Lateral Separation)** — Miami/New York/San Juan FIRs over the Atlantic, Miami/Houston FIRs over the Gulf of Mexico, Houston-Miami Gulf boundary near W086°/N24°30′, Class A FL55–FL600 (Class E above) in Miami/New York Oceanic, RNP-10/RNP-4 50 NM lateral vs 90 NM (Miami oceanic)/100 NM (Houston oceanic) unequipped — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part2_enr_section_7.1.html and https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part2_enr_section_7.4.html (retrieved 2026-07-26).
- **Wikipedia — Miami Air Route Traffic Control Center** — facility location (Miami-Dade County), 2024 traffic (2,643,111 ops, 2nd busiest), ~22.5 million cubic miles of airspace, adjacent Houston/Jacksonville/New York Centers, San Juan CERAP, Turks & Caicos, Bahamas, Dominican Republic, Haiti and Cuba ACCs, hurricane-season operational impact — https://en.wikipedia.org/wiki/Miami_Air_Route_Traffic_Control_Center (retrieved 2026-07-26).
- **Miami ARTCC facility overview (public/community reference)** — 4 areas of operation, 6 specialties, 36 sectors, 24/7 operation, delegated Nassau (MYNA) approach-control jurisdiction within the ZMA oceanic area — public ATC-community/LOA references (retrieved 2026-07-26). *Tier-4 corroboration only; re-verify sector count and LOA scope against current FAA facility documentation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
