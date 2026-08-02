# Oakland ARTCC (KZOA) — FIR Briefing

**Scope:** single ARTCC (US domestic "FIR") — northern/central California and Nevada, containing **Reno-Tahoe (KRNO)** and **Sacramento (KSMF)** · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · **Adjacent ARTCCs:** Seattle (KZSE) N · Los Angeles (KZLA) S · Salt Lake City (KZLC) E · **Oakland Oceanic (KZAK)** W (same facility, separate FIR)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference, not a chart or clearance. Oakland Center is a **fully radar/ADS-B-controlled continental ARTCC** on its domestic side — no procedural segment. Its defining feature is that the **same facility also runs Oakland Oceanic (KZAK)**, the largest controlled airspace volume on Earth by area, worked as an entirely separate procedural FIR over the Pacific; this brief covers the **domestic KZOA** side only and treats KZAK as an adjacent domain (§3). Terrain on the domestic side ranges from the **Central Valley** (low, flat — KSMF) to the **eastern Sierra Nevada** (high, close-in terrain — KRNO). Routings and levels here are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for the aerodromes inside the ARTCC live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / control ident | **KZOA** — Oakland ARTCC ("Oakland Center"); US domestic Class A enroute. Underlying terminal facility: **Northern California TRACON (NORCAL)** for the Bay Area; independent/tower-served approach control at KRNO and KSMF |
| Controlling ATSU / ANSP | **FAA Air Traffic Organization** — Oakland ARTCC. Same physical facility (Fremont, CA) also runs **Oakland Oceanic (KZAK)** as a separately-worked FIR (§3) |
| Airspace class & vertical limits | US **Class A FL180–FL600** enroute; terminal **Class B/C** at the served metros — terminal detail in the airport briefs (§9) 🟧 |
| RVSM | 🟥 Applicable **FL290–FL410** (14 CFR 91.180) — see OM E §5 |
| PBN environment | RNAV enroute (Q-route high / T-route low) · RNAV SID/STAR at the metros · RNP APCH arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B** on the domestic side; datalink not required (VHF continuous). Contrast: the adjacent **KZAK Oceanic** is a procedural, largely non-radar FIR |
| Primary language & comms | 🟩 **VHF throughout; English** |
| Key hazard(s) | 🟥 **Sierra Nevada terrain** on the east (Reno/Tahoe area) driving MORA & driftdown · **Central Valley tule fog** (winter low-vis) · **Pacific frontal weather / atmospheric rivers** · adjacency to the **KZAK Oceanic** procedural boundary offshore |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Domestic KZOA fully radar/ADS-B-controlled; the co-located **KZAK Oceanic** is a separate, largely procedural Pacific FIR (§3) — not part of this brief's scope. |
| Communication coverage & language | 🟩 | Continuous VHF; English. No HF on the domestic side (HF belongs to KZAK oceanic operations). |
| Datalink / surveillance requirement | 🟥 | **ADS-B Out mandatory** — FAA 14 CFR 91.225; **1090ES required ≥ FL180**, effective 01 JAN 2020. Continuous SSR/ADS-B coverage domestically. |
| Terrain / MORA / driftdown | 🟥 | High terrain in the east — **Sierra Nevada** (peaks to ~10,000–14,000 ft near the Tahoe/Reno corridor); the Central Valley and coastal side are low. Drives MEA/MORA and driftdown for eastbound/mountain-adjacent routings. §8. |
| Diversion-aerodrome coverage | 🟩 | Full-service at KSMF (Central Valley, good weather alternate to the coast); KRNO is high-elevation and terrain-close. Curated briefs exist for both (§9). |
| Special-use airspace (military / danger) | 🟧 | Military ranges/MOAs across northern Nevada and the Sierra foothills; confirm active status at planning. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV (Q/T routes, RNAV SID/STAR) · Mode S + ADS-B Out (1090ES ≥ FL180).** All defined in OM E; confirm current-AIRAC route/SID. §5. |

---

## 3. ARTCC structure & lateral/vertical boundaries

- **Lateral extent:** Oakland Center's **domestic** airspace covers roughly **140,000 sq mi** of the Western United States — northern and central California and Nevada — while the **same facility** separately operates **Oakland Oceanic (KZAK)**, covering some **18.7 million sq mi of the Pacific** (~9.5% of Earth's surface), the largest controlled-airspace volume managed by a single ATC facility in the world. 🟧 (exact domestic/oceanic split at the coastal boundary — verify FAA ENR charts.)
- **Vertical structure:** as with any US ARTCC, **one facility** works the whole domestic column; Oakland Center is documented with a **total of 23 sectors**. The cruise band for our transits sits in the high sectors; climb/descent to the Bay Area is worked by the low sectors and handed to **NORCAL (Northern California TRACON)**; KRNO and KSMF have their own terminal facilities.
- **Adjacent ARTCCs (by boundary):**
  - **N — Seattle (KZSE, FAA).** Pacific Northwest.
  - **S — Los Angeles (KZLA, FAA).** Southern/central California — the KRNO/KSMF pair sits on the KZOA side of this boundary (per the KZLA brief).
  - **E — Salt Lake City (KZLC, FAA).** Great Basin / Nevada interior.
  - **W — Oakland Oceanic (KZAK).** Not a bordering ARTCC in the domestic sense — the **same Fremont, CA facility** runs KZAK as a distinct, separately-worked FIR seaward of the coastline; the practical "boundary" is the coast itself and the offshore Class A shelf, not a lateral ARTCC-to-ARTCC handoff. 🟧 (exact coastal handoff geometry — verify FAA ENR / KZAK charts.)
- **Sectorisation:** transit-relevant fact is that the whole domestic column is one FAA facility (no separate UAC); the 23-sector set is combined/decombined tactically, and the Bay Area terminal airspace is delegated to **NORCAL**.
- **Oakland Oceanic (KZAK) — adjacent domain, not this brief's scope:** 🟧 the world's largest single-facility controlled-airspace assignment, extending far out over the Pacific and bordering the Anchorage, Tokyo and Auckland FIRs. Largely **procedural** (oceanic-style separation, HF/SATCOM, CPDLC/ADS-C where equipped) rather than radar — the opposite operating model from the domestic KZOA side described in this brief. Any Pacific oceanic leg is a separate planning domain; this brief does not re-derive it.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **Oakland ARTCC (KZOA, FAA)** — radar/ADS-B control of the domestic column across the 23 sectors, feeding the served TRACONs/towers.
- **Terminal facilities inside the ARTCC:** 🟩 **Northern California TRACON (NORCAL)** sequences the Bay Area Class B/C; **KRNO** and **KSMF** are served by their own approach control/tower per the airport briefings (§9).
- **FIS / FSS:** US **Flight Service** (Leidos) provides flight-information/advisory service; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B** on the domestic side; no procedural pockets on a normal domestic IFR routing. Contrast the co-located **KZAK Oceanic**, which is largely non-radar (§3).

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Oakland ARTCC and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — required per **14 CFR 91.180**. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 RNAV enroute on the **Q-route (high-altitude RNAV)** and **T-route (low-altitude RNAV)** structure; **RNAV SID/STAR** and **RNP APCH** at the served metros — terrain-driven RNAV procedures are the norm at KRNO. Standard RNAV-1/RNAV-2 airframe capability suffices. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟩 **not required** on the domestic side — VHF voice continuous; PDC available at major terminals as a convenience. The adjacent **KZAK Oceanic** applies FANS-1/A CPDLC/ADS-C where the Pacific crossing requires it — a separate planning domain. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** with **ADS-B Out** required — **14 CFR 91.225**; **1090ES required at and above FL180** (UAT/978 MHz permitted only below 18,000 ft), effective 01 JAN 2020.

---

## 6. Communications & frequencies

- **ARTCC sectors / frequencies:** a transit is handed sequentially through **Oakland Center** low/high sectors and onward to the adjacent-ARTCC center (**Seattle / Los Angeles / Salt Lake**) or to **NORCAL**/KRNO/KSMF facilities at the terminal end; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **FIS / advisory:** US **Flight Service** (Leidos) for flight-information/advisory service in uncontrolled airspace.
- **Language:** 🟩 **English**.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 US high-altitude **jet-route / Q-route (RNAV)** structure feeding the Bay Area arrival/departure gates and the KRNO/KSMF terminal areas.
- **Terrain-driven routing:** 🟥 the **eastern boundary near Reno/Tahoe** is close to high Sierra terrain, so KRNO arrivals/departures rely on **RNAV SIDs/STARs** engineered for terrain clearance; KSMF, in the flat Central Valley, has no comparable terrain constraint.
- **Major fixes / entry-exit points:** Bay Area **arrival gates** (corner-post/RNAV feeder fixes into NORCAL) and the STAR transition fixes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance). 🟧 (exact current STAR/SID by AIRAC/runway config — pull on the day.)
- **Hubs & aerodromes inside the ARTCC:** 🟩 **Sacramento (KSMF)** and **Reno-Tahoe (KRNO)** — the two served fields for this brief. **San Francisco (KSFO)**, **Oakland (KOAK)** and **San Jose (KSJC)** also sit inside KZOA and are covered by the [North America (Canadian Domestic + Western US)](../../north-america.md) area brief.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts — 🟥 the binding constraint near the eastern boundary:** the ARTCC spans low Central Valley/coastal terrain to high Sierra Nevada peaks along its eastern edge near KRNO/Lake Tahoe (**Sierra Nevada peaks reaching ~10,000–14,000 ft**, with **Mount Whitney 14,505 ft** — the contiguous-US high point — further south near the KZLA boundary). 🟧 (per-quadrant grid-MORA — verify on FAA ENR charts.)
- **Boundary terrain:** the Sierra continues south into **Los Angeles ARTCC (KZLA)** and the Cascade Range continues north into **Seattle ARTCC (KZSE)** — the high-terrain belt does not stop at the ARTCC boundary.
- **Driftdown / depressurisation escape:** 🟥 an engine-out or decompression near the Sierra/Tahoe corridor must clear terrain to the local Sierra ridge height — plan the escape toward the **Central Valley** (KSMF side, low terrain) and the nearest capable field (§9).
- **Cold-temperature altitude corrections — 🟧:** applied at **high-elevation KRNO** (field elevation ~4,415 ft, mountain-ringed) below the FAA Cold Temperature Airport threshold; KSMF is low Central Valley and not a CTA case. A terminal driver — see the airport briefings and OM E.

---

## 9. Diversion aerodromes within the ARTCC

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Sacramento Intl | **KSMF** | Central Valley alternate — good weather when the coast is fogged in; served field | [KSMF brief](../../../destinations/north-america/united-states/ksmf/index.md) |
| Reno-Tahoe Intl | **KRNO** | High-elevation / Sierra-adjacent alternate; served field | [KRNO brief](../../../destinations/north-america/united-states/krno/index.md) |
| San Francisco Intl | **KSFO** | Bay Area destination/alternate (covered in the [North America](../../north-america.md) area brief) | [KSFO brief](../../../destinations/north-america/united-states/ksfo/index.md) |

- **Coverage note:** 🟩 dense on the coast/valley side (KSFO/KOAK/KSJC/KSMF); the Sierra/Tahoe side (KRNO) is thinner and terrain-constrained. **ETP/critical-point planning is not a driver** in this radar-controlled continental ARTCC — the real constraint is **terrain-clearance near the Sierra** (§8) and winter tule fog in the valley (§11).

---

## 10. Special-use airspace

- **Military restricted / MOA / warning areas — 🟧:** military training areas/MOAs across **northern Nevada** (near the Sierra/Tahoe corridor) and along the coast; normally clear of a high-level metro transit but **confirm active status at planning**, especially if radar-vectored near terrain.
- **Danger / prohibited areas:** 🟧 none of particular note beyond standard NOTAM-published temporary restrictions (wildfire TFRs are a seasonal factor common to California — see §11).
- **Overflight-permit / diplomatic considerations:** 🟩 none for the US domestic transit.

> **SUA currency:** re-check active restricted/MOA status and current TFRs (incl. fire TFRs) at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply the standard **US domestic IFR lost-comms** procedure (route/altitude per last clearance / expected / filed — 14 CFR 91.185; squawk **7600**); continuous VHF coverage makes prolonged loss unlikely.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Terrain-driven contingency — 🟥:** in an engine-out or decompression near the Sierra/Tahoe corridor (§8), fly the pre-briefed **driftdown/escape route** toward the Central Valley and the nearest capable field (§9), squawk **7700**.
- **Seasonal hazards (durable):**
  - **Tule fog:** winter **Central Valley radiation fog** brings very low visibility to KSMF and the valley floor, sometimes for days at a time.
  - **Sierra mountain wave / turbulence & icing:** strongest in winter with strong cross-barrier flow near KRNO/Tahoe.
  - **Pacific frontal systems / atmospheric rivers:** winter storms bring heavy precipitation, low ceilings and gusty surface winds to the coastal/valley side.
  - **Wildfire smoke & fire TFRs:** summer–autumn wildfire smoke reduces visibility across California, and firefighting TFRs can appear at short notice.

> **Pull at planning (T-2h):** enroute NOTAMs, TFRs (incl. fire TFRs), active MOA/restricted-area status, SIGMET/AIRMET (mountain turbulence/wave, tule fog, atmospheric-river precipitation), the assigned RNAV SID/STAR/runway config, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **KZOA domestic lateral boundaries** (Seattle/Los Angeles/Salt Lake) and the **domestic/KZAK Oceanic coastal split** — verify FAA / VATUSA ZOA boundary charts.
- **Airspace class letter per band / terminal Class B/C shelves** at KRNO/KSMF — not individually re-verified against current charts.
- Published **grid-MORA / MEA** values over the eastern Sierra/Tahoe corridor (per-quadrant) — verify on FAA ENR charts.
- Current **KRNO RNAV SID/STAR** set and runway-config logic (terrain-driven) — pull the day's charts.
- Military **MOA/restricted-area** activity along the northern Nevada / Sierra corridor and current **fire TFRs** — live NOTAM at planning.
- Confirm current **sector count/structure** (23 sectors per public source) against the latest FAA/VATUSA ZOA facility documentation.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **FAA — 14 CFR 91.225 (ADS-B Out) & 91.180 (RVSM) & 91.185 (two-way radio comms failure)** — ADS-B airspace classes, 1090ES ≥ FL180 effective 01 JAN 2020; RVSM FL290–410; lost-comms rules — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91 (retrieved 2026-07-26).
- **FAA — Oakland Air Route Traffic Control Center (ZOA)** — facility overview; co-located domestic (KZOA) and oceanic (KZAK) operations at the largest single-facility controlled-airspace assignment — https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/air_traffic_services/artcc/oakland (retrieved 2026-07-26).
- **Wikipedia — Oakland Air Route Traffic Control Center** — 23 sectors; ~140,000 sq mi domestic (CA/NV); KZAK Oceanic ~18.7 million sq mi (~9.5% of Earth's surface), largest ACC in the world by area; adjacent to 21 domestic facilities incl. Seattle, Los Angeles and Salt Lake City ARTCCs; overlies NORCAL TRACON — https://en.wikipedia.org/wiki/Oakland_Air_Route_Traffic_Control_Center (retrieved 2026-07-26). *Corroboration; boundaries/sector count to re-verify vs FAA ENR/facility documentation.*
- **FAA — Aeronautical Information Manual (AIM), Ch. 3 (Airspace) & 4 (ATC)** — Class A FL180–FL600, Class B/C terminal, Q/T-route (RNAV) structure — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/ (retrieved 2026-07-26).
- **Terrain elevations (public reference)** — Mount Whitney 14,505 ft (Sierra Nevada); KRNO field elevation ~4,415 ft — Wikipedia range/airport articles (retrieved 2026-07-26). *Per-quadrant grid-MORA to be taken from ENR charts.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
