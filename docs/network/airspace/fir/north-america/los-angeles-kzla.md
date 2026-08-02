# Los Angeles ARTCC (KZLA) — FIR Briefing

**Scope:** single ARTCC (US domestic "FIR") — southern & central California, southern Nevada and adjacent desert, containing the **Los Angeles metro superhub (KLAX West-coast hub)** · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · **Adjacent ARTCCs:** Oakland (KZOA) NW/W · Salt Lake City (KZLC) N/NE · Albuquerque (KZAB) E · Mexican FIR (Mazatlán/Hermosillo) S · offshore Pacific warning-area boundary with Oakland W
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — verified vs FAA airspace structure + 14 CFR + VATUSA ZLA SOP; exact sector-band class letters, per-quadrant MORA and the R-2508-complex activation detail flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Los Angeles Center is a **fully radar/ADS-B-controlled continental ARTCC** — no procedural segment; the defining features are **high terrain on the north/east (Sierra Nevada, San Gabriel/San Bernardino, Mojave ranges)** driving MORA/driftdown, **one of the densest military special-use-airspace concentrations in the US** (the R-2508 complex and dozens of MOAs/warning areas), and the **coastal marine-layer / Santa-Ana / wildfire-smoke weather regime** of the LA basin. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for the aerodromes inside the ARTCC (KLAX, KSAN, KLAS …) live in the airport briefings (§9). Live restrictions (NOTAMs, TFRs, SUA activation, fire TFRs, SIGMETs) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / control ident | **KZLA** — Los Angeles ARTCC ("Los Angeles Center"); US domestic Class A enroute. Underlying terminal facility: **Southern California TRACON (SCT)** for the LA basin / San Diego metro (KLAX, KONT, KBUR, KSNA, KSAN); **Las Vegas TRACON (L30)** for the Las Vegas area |
| Controlling ATSU / ANSP | **FAA Air Traffic Organization** — Los Angeles ARTCC. No separate upper-airspace unit: one facility works low + high sectors |
| Airspace class & vertical limits | US **Class A FL180–FL600** enroute; terminal **Class B** at the LA basin (SCT), San Diego and Las Vegas — terminal detail in the airport briefs (§9) 🟧 |
| RVSM | 🟥 Applicable **FL290–FL410** (14 CFR 91.180) — see OM E §5 |
| PBN environment | RNAV enroute (Q-route high / T-route low) · RNAV SID/STAR at the metros · RNP APCH arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B**; domestic datalink not required (VHF continuous) |
| Primary language & comms | 🟩 **VHF throughout; English** |
| Key hazard(s) | 🟥 **High terrain N/E** — Sierra Nevada (Mt Whitney 14,505 ft), San Gabriel/San Bernardino (Mt San Gorgonio 11,503 ft), Mojave ranges — driving MORA & driftdown · **very dense military SUA** (R-2508 complex, MOAs, warning areas) · **marine-layer / Santa-Ana / wildfire-smoke** coastal weather regime |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/ADS-B-controlled throughout — no procedural segment. |
| Communication coverage & language | 🟩 | Continuous VHF; English. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟥 | **ADS-B Out mandatory** — FAA 14 CFR 91.225; **1090ES required ≥ FL180**, effective 01 JAN 2020. Continuous SSR/ADS-B coverage. |
| Terrain / MORA / driftdown | 🟥 | High terrain on the north and east — **Sierra Nevada (Mt Whitney 14,505 ft)**, San Gabriel/San Bernardino/San Jacinto (to ~11,500 ft), Mojave/Panamint (Telescope Peak 11,043 ft). Drives MEA/MORA and the engine-out/decompression driftdown floor. §8. |
| Diversion-aerodrome coverage | 🟩 | Dense on the coast — KLAX/KONT/KBUR/KSNA/KSAN/KLAS; inland/mountain fields thinner. Curated brief exists for KSAN (§9). |
| Special-use airspace (military / danger) | 🟥 | One of the densest SUA concentrations in the US — ~**70,800 sq mi** incl. **40 restricted areas, 11 warning areas, 34 MOAs, 33 ATCAAs** (R-2508 complex — China Lake / Edwards / Fort Irwin; Nellis; Miramar). Activation coordinated tactically — confirm active at planning. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV (Q/T routes, RNAV SID/STAR) · Mode S + ADS-B Out (1090ES ≥ FL180).** All defined in OM E; confirm current-AIRAC route/SID. §5. |

---

## 3. ARTCC structure & lateral/vertical boundaries

- **Lateral extent:** Los Angeles Center covers **southern and central California, southern Nevada** and small parts of the adjacent desert, plus an offshore Pacific shelf. Its airspace integrates roughly **70,800 sq mi of military special-use airspace** (§10) — an unusually high proportion.
- **Vertical structure:** as with any US ARTCC, **one facility** works the whole column. VATUSA ZLA organises the airspace into **six areas (A–F)**, further subdivided into **20 low-altitude and 16 high-altitude sectors**; sectors combine/split with traffic and staffing (when fully combined, the facility works as a single sector). The cruise band for our transits sits in the high sectors; the climb/descent to the metro is worked by the low sectors and then handed to **SCT (Southern California TRACON)**.
- **Adjacent ARTCCs (by boundary):**
  - **NW / W — Oakland (KZOA, FAA).** Central/northern California and the eastern Pacific; also owns the offshore oceanic Pacific continuation and the KRNO/KSMF fields to the north.
  - **N / NE — Salt Lake City (KZLC, FAA).** Great Basin / Nevada–Utah.
  - **E — Albuquerque (KZAB, FAA).** Arizona / New Mexico desert.
  - **S — Mexican FIR (Mazatlán / Hermosillo ACC).** The San Diego/Mexicali border crossing is handled at the ATC/FIR level. 🟧 (a **Denver (KZDV)** corner-contact on the NE is possible — verify FAA boundary charts.)
- **Sectorisation:** transit-relevant fact is that the whole column is one FAA facility (no separate UAC); the six-area / low-high sector set is combined/decombined tactically, and the LA-basin/San-Diego terminal airspace is delegated to **SCT**, Las Vegas to **L30**.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **Los Angeles ARTCC (KZLA, FAA)** — radar/ADS-B control of the full column across the six areas / low + high sectors, feeding the metro TRACONs.
- **Terminal facilities inside the ARTCC:** 🟩 **Southern California TRACON (SCT)** sequences the LA basin and San Diego Class B/C; **Las Vegas TRACON (L30)** the Las Vegas Class B. Terminal procedures are in the airport briefings (§9).
- **FIS / FSS:** US **Flight Service** (Leidos) provides flight-information/advisory service; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal domestic IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Los Angeles ARTCC and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — required per **14 CFR 91.180**. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 RNAV enroute on the **Q-route (high-altitude RNAV)** and **T-route (low-altitude RNAV)** structure; **RNAV SID/STAR** and **RNP APCH** at the metros — the terrain-ringed LA basin makes RNAV SIDs/STARs the norm for terrain-safe departures/arrivals. Standard RNAV-1/RNAV-2 airframe capability suffices. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟩 **not required** — VHF voice continuous; PDC available at major terminals as a convenience. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** with **ADS-B Out** required — **14 CFR 91.225**; **1090ES required at and above FL180** (UAT/978 MHz permitted only below 18,000 ft), effective 01 JAN 2020.

---

## 6. Communications & frequencies

- **ARTCC sectors / frequencies:** a metro transit is handed sequentially through **Los Angeles Center** low/high sectors and onward to the adjacent-ARTCC center (**Oakland / Salt Lake / Albuquerque**) or to **SCT / L30** at the terminal end; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **FIS / advisory:** US **Flight Service** (Leidos) for flight-information/advisory service in uncontrolled airspace.
- **Language:** 🟩 **English**.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 US high-altitude **jet-route / Q-route (RNAV)** structure feeding the metro arrival/departure gates; the terrain and dense SUA make much of the enroute structure **fixed/preferential** rather than direct through the desert ranges.
- **Terminal & terrain-driven routing:** 🟩 the LA basin is **ringed by mountains**, so the metro relies on **RNAV SIDs/STARs** engineered for terrain clearance and noise; departures climb through gaps/over the San Gabriels, arrivals descend on RNAV STARs into SCT. TEC-style short-hop routing exists for basin co-terminal repositioning.
- **Major fixes / entry-exit points:** metro **arrival gates** (the corner-post/RNAV feeder fixes into SCT) and the STAR transition fixes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance). 🟧 (exact current STAR/SID by AIRAC/runway config — pull on the day.)
- **Hubs & aerodromes inside the ARTCC:** 🟩 **Los Angeles (KLAX, West-coast hub)**, **Ontario (KONT)**, **Hollywood Burbank (KBUR)**, **John Wayne/Orange County (KSNA)**, **San Diego (KSAN)**, **Las Vegas-Harry Reid (KLAS)**, **Palm Springs (KPSP)**. Terminal detail is in the airport briefings (§9). **Reno (KRNO)** and **Sacramento (KSMF)** sit across the boundary in **Oakland ARTCC (KZOA)**.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts — 🟥 the binding enroute/descent constraint on the N/E:** the ARTCC spans low coastal basin to high desert ranges:
  - **Sierra Nevada** — **Mount Whitney 14,505 ft**, the highest in the contiguous US, on the northern/north-eastern edge.
  - **San Gabriel / San Bernardino / San Jacinto** — the ranges ringing the LA basin: **Mount San Gorgonio 11,503 ft**, San Jacinto Peak 10,834 ft, Mount San Antonio ("Baldy") 10,064 ft.
  - **Mojave / Panamint / Death Valley ranges** — Telescope Peak 11,043 ft; broad high-desert terrain across the eastern sectors. 🟧 (per-quadrant grid-MORA — verify on FAA ENR charts.)
- **Boundary terrain:** the high Sierra continues north into **Oakland (KZOA)** and the Great Basin ranges east into **Salt Lake (KZLC)** — the terrain belt does not stop at the ARTCC boundary.
- **Driftdown / depressurisation escape:** 🟥 an engine-out or decompression over the Sierra/San Gabriel/Mojave must clear terrain to **~14,500 ft (Sierra) / ~11,500 ft (San Gabriel-San Bernardino)** locally — plan the escape toward the **coastal basin / Pacific descent corridor** and the nearest capable field (§9). The LA basin fields themselves are low/coastal, but the eastbound/inland legs are terrain-limited.
- **Cold-temperature altitude corrections — 🟧:** applied at the **high-elevation / mountain fields** (e.g. Bishop KBIH and other high-desert alternates) below the FAA Cold Temperature Airport threshold; KLAX/KSAN are low/coastal and warm. A terminal driver — see the airport briefings and OM E.

---

## 9. Diversion aerodromes within the ARTCC

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Los Angeles Intl | **KLAX** | West-coast hub / primary dep-return alternate | [KLAX brief](../../../destinations/north-america/united-states/klax/index.md) |
| Ontario Intl | **KONT** | Inland basin alternate — **better wx than the coast in marine-layer events**; long runways, cargo | Brief to build 🟧 |
| San Diego Intl | **KSAN** | South-basin alternate; single runway, terrain-constrained | [KSAN brief](../../../destinations/north-america/united-states/ksan/index.md) |
| Las Vegas-Harry Reid | **KLAS** | Desert alternate (E); full international, high traffic | Brief to build 🟧 |
| Hollywood Burbank | **KBUR** | LA-basin reliever; short runways, terrain-close | Brief to build 🟧 |
| John Wayne/Orange County | **KSNA** | LA-basin reliever; short runway, steep noise departure | Brief to build 🟧 |
| Palm Springs | **KPSP** | Desert alternate (E); high terrain close on three sides | Brief to build 🟧 |

- **Coverage note:** 🟩 dense full-service coverage in the coastal basin, so **ETP/critical-point planning is not a driver**; the real constraint is **terrain-clearance on the inland/mountain legs** (§8) and marine-layer weather at the coast (§11). **KONT** is the key alternate when the coast is fogged in; **KLAS** covers the eastern desert.

---

## 10. Special-use airspace

- **Military restricted / MOA / warning areas — 🟥 one of the densest SUA concentrations in the US:** VATUSA/FAA describe ~**70,800 sq mi** of military SUA in the ARTCC — approximately **40 restricted areas, 11 warning areas, 34 MOAs and 33 ATCAAs**. Principal complexes:
  - **R-2508 Complex** — the large joint-use range block over the western Mojave: **China Lake (Naval Air Weapons Station), Edwards AFB (R-2515), Fort Irwin/NTC (R-2502)** and the associated MOAs (Isabella, Owens, Panamint, Saline, Shoshone) — routinely active, coordinated tactically.
  - **Nellis** range/airspace over southern Nevada (near KLAS); **MCAS Miramar** and associated airspace near San Diego; offshore **Pacific warning areas (W-289 / W-291 family)**.
- **Danger / prohibited areas:** 🟧 standing security/VIP and **wildfire TFRs** (firefighting-aircraft TFRs can appear at short notice over active fires — §11) are NOTAM-published; pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none for the US domestic transit; the US–Mexico crossing on the southern boundary is handled at the ATC/FIR level.

> **SUA currency:** re-check active restricted/MOA/warning-area status (R-2508 complex especially) and current TFRs — including **fire TFRs** — at planning; this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply the standard **US domestic IFR lost-comms** procedure (route/altitude per last clearance / expected / filed — 14 CFR 91.185; squawk **7600**); continuous VHF coverage makes prolonged loss unlikely.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued; note the reduced manoeuvring room where SUA and terrain box the route. Squawk **7700** and declare for emergencies.
- **Terrain-driven contingency — 🟥:** in an engine-out or decompression over the Sierra/San Gabriel/Mojave (§8), fly the pre-briefed **driftdown/escape route** to clear terrain (up to ~14,500 ft locally), squawk **7700**, and descend toward the coastal basin / Pacific corridor and the nearest capable field (§9).
- **Seasonal hazards (durable):**
  - **Marine layer / coastal stratus:** the LA basin's night/morning **marine-layer stratus** brings low ceilings and IFR to the coastal fields (KLAX west-flow, morning arrivals), clearing on the daytime "burn-off"; drives SCT flow and single-approach configs. 🟧
  - **Santa Ana winds:** autumn/winter **offshore (NE) downslope flow** brings strong gusty winds, mountain-wave turbulence, and **elevated wildfire risk**.
  - **Wildfire smoke & fire TFRs:** summer–autumn **wildfire smoke** reduces visibility over the basin and deserts, and **firefighting TFRs** can close volumes at short notice (§10).
  - **Summer monsoon convection:** July–September **desert/mountain thunderstorms** (Arizona/southern-Nevada monsoon reaching the eastern sectors); winter **Sierra mountain wave** on strong cross-barrier flow.

> **Pull at planning (T-2h):** enroute NOTAMs, TFRs (incl. **fire TFRs**), active **R-2508-complex / MOA / warning-area** status, SIGMET/AIRMET (mountain turbulence/wave, convection, smoke/reduced-visibility), the assigned metro **RNAV SID/STAR / runway config** (marine-layer dependent), and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **KZLA lateral boundaries** (incl. any Denver KZDV corner-contact NE and the Mexican-FIR southern limit) and the six-area / sector-band boundaries — verify FAA / VATUSA ZLA boundary charts.
- **Airspace class letter per band / terminal Class B shelves** (LA basin, San Diego, Las Vegas) — stated Class A enroute, Class B/C terminal; not individually re-verified against the current charts.
- Published **grid-MORA / MEA** values over the Sierra / San Gabriel / Mojave (per-quadrant) — verify on FAA ENR charts.
- Current **metro RNAV SID/STAR** set and runway-config logic (marine-layer dependent) — pull the day's charts.
- **R-2508-complex / Nellis / Miramar / warning-area** activation and current **fire TFRs** along the transit corridor — live NOTAM at planning.
- No OM C airport briefs yet for **KONT, KLAS, KBUR, KSNA, KPSP** — build if they become planned alternates. KLAX and KSAN briefs linked in §9.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **FAA — 14 CFR 91.225 (ADS-B Out) & 91.180 (RVSM) & 91.185 (two-way radio comms failure)** — ADS-B airspace classes, 1090ES ≥ FL180 effective 01 JAN 2020; RVSM FL290–410; lost-comms rules — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91 (retrieved 2026-07-25).
- **FAA — Aeronautical Information Manual (AIM), Ch. 3 (Airspace) & 4 (ATC)** — Class A FL180–FL600, Class B/C terminal, Q/T-route (RNAV) and jet-route structure, special-use-airspace types — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/ (retrieved 2026-07-25).
- **FAA — Los Angeles ARTCC (ZLA) fact sheet** — facility coverage (S/central CA, southern NV), ~70,800 sq mi military SUA incl. **40 restricted / 11 warning / 34 MOA / 33 ATCAA**, adjacent Oakland/Salt Lake/Albuquerque — https://www.faa.gov/sites/faa.gov/files/about/office_org/headquarters_offices/ato/ZLA-ARTCC.pdf (retrieved 2026-07-25).
- **VATUSA / Los Angeles ARTCC (ZLA) — Standard Operating Procedures v2.00 (23 JUN 2024)** — airspace **six areas A–F**, **20 low + 16 high sectors**, combine/decombine logic (fully combined = single sector) — https://laartcc.org/document/los-angeles-artcc (retrieved 2026-07-25). *Tier-4 network-sim corroboration only — area/sector structure and combine logic cross-checked here; boundaries to re-verify vs FAA charts.*
- **Los Angeles ARTCC — facility overview (public reference)** — coverage, adjacent centers (Oakland/Salt Lake/Albuquerque + international), SUA integration — https://en.wikipedia.org/wiki/Los_Angeles_Air_Route_Traffic_Control_Center (retrieved 2026-07-25). *Corroboration; boundaries to re-verify vs FAA ENR.*
- **Terrain elevations (public reference)** — Mt Whitney 14,505 ft (Sierra Nevada), Mt San Gorgonio 11,503 ft (San Bernardino), San Jacinto Peak 10,834 ft, Telescope Peak 11,043 ft (Panamint) — Wikipedia range/peak articles (retrieved 2026-07-25). *Per-quadrant grid-MORA to be taken from ENR charts.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_FIR Briefing Template.md`. Los Angeles ARTCC (KZLA): single FAA facility, six areas A–F / 20 low + 16 high sectors, SCT + L30 TRACONs delegated; adjacent Oakland/Salt Lake/Albuquerque + Mexican FIR south; RVSM/RNAV Q-T routes/ADS-B referenced to OM E; high Sierra/San-Gabriel/Mojave terrain MORA & driftdown; in-ARTCC fields (KLAX/KONT/KSAN/KLAS/KBUR/KSNA/KPSP) + KRNO/KSMF adjacent; dense R-2508-complex/MOA/warning-area SUA (~70,800 sq mi); domestic 91.185 + terrain contingency; marine-layer/Santa-Ana/wildfire-smoke/monsoon seasonal note. Parent area brief: North America. VATUSA ZLA SOP v2.00 (23 JUN 2024) cross-checked. |
