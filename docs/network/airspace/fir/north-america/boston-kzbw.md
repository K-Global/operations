# Boston ARTCC (KZBW) — FIR Briefing

**Scope:** single ARTCC (US domestic "FIR") — New England: Connecticut, Vermont, Massachusetts, Rhode Island, Maine, New Hampshire, northeastern New York state and northeast Pennsylvania, containing **Boston Logan (KBOS)** and the western surface feed into the North Atlantic track system · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · oceanic continuation in [North Atlantic](../../north-atlantic.md) · **Adjacent ARTCCs/ACCs:** New York (KZNY) S · Cleveland (KZOB) W · Washington (KZDC) SW corner-contact 🟧 · Montreal ACC (CZUL) NW · Moncton ACC (CZQM) NE · Toronto ACC (CZYZ) NW
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Boston Center is a **fully radar/ADS-B-controlled continental ARTCC** — no procedural segment domestically. Its distinguishing role in this network is the **western surface feed into the North Atlantic organised-track system**: eastbound NAT-bound traffic climbing out of the Northeast is worked through Boston Center's high/oceanic-facing sectors and handed to the Canadian **Moncton FIR (CZQM)**, which in turn hands to Moncton/Gander domestic and on to the Gander Oceanic/Shanwick NAT structure — the NAT procedures themselves live in the [North Atlantic](../../north-atlantic.md) brief and are not repeated here. Boston Center also shares the **busiest, most flow-constrained airspace boundary in the country** with New York Center (KZNY) to the south. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for KBOS live in the airport briefing (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / control ident | **KZBW** — Boston ARTCC ("Boston Center"); US domestic Class A enroute. Facility located in Nashua, New Hampshire. Underlying terminal facility: **Boston Consolidated TRACON (A90)** for KBOS and the Boston-area satellites; other metro fields (Manchester, Providence, Bradley, Albany) are worked by their own approach controls within the ARTCC |
| Controlling ATSU / ANSP | **FAA Air Traffic Organization** — Boston ARTCC. One facility works low + high + super-high sectors; no separate upper-airspace unit |
| Airspace class & vertical limits | US **Class A FL180–FL600** enroute; terminal **Class B** at Boston (A90) — terminal detail in the airport brief (§9) 🟧 |
| RVSM | 🟥 Applicable **FL290–FL410** (14 CFR 91.180) — see OM E §5 |
| PBN environment | RNAV enroute (Q-route high / T-route low) · RNAV SID/STAR at Boston · RNP APCH arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B**; domestic datalink not required (VHF continuous). Oceanic CPDLC/ADS-C (FANS) applies only once traffic passes into the NAT system upstream of Moncton/Gander — see [North Atlantic](../../north-atlantic.md) |
| Primary language & comms | 🟩 **VHF throughout; English** |
| Key hazard(s) | 🟥 **Winter nor'easters / lake-effect and coastal snow and icing** · dense **New York-boundary flow constraint** (GDP/ground-stop exposure shared with KZNY) · modest terrain in the north (White & Green Mountains) relevant to low-sector MEA · **North Atlantic oceanic hand-off coordination** with Moncton (CZQM) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/ADS-B-controlled domestically; no procedural segment. The oceanic system that Boston feeds is procedural and is covered in [North Atlantic](../../north-atlantic.md). |
| Communication coverage & language | 🟩 | Continuous VHF; English. |
| Datalink / surveillance requirement | 🟥 | **ADS-B Out mandatory** — FAA 14 CFR 91.225; **1090ES required ≥ FL180**, effective 01 JAN 2020. Continuous SSR/ADS-B coverage. |
| Terrain / MORA / driftdown | 🟧 | Generally modest — coastal plain and rolling New England terrain, but the **White Mountains (Mt Washington, NH, 6,288 ft)** and **Green Mountains (Mt Mansfield, VT, 4,393 ft)** sit inside the ARTCC's northern sectors; not a cruise-level factor at FL290+ but relevant to low-sector MEA/MOCA. §8. |
| Diversion-aerodrome coverage | 🟩 | Curated brief exists for KBOS (§9); other in-ARTCC fields (Manchester, Bangor, Portland, Albany, Bradley) not yet briefed — flagged §12. Dense onward coverage into the adjacent New York ARTCC. |
| Special-use airspace (military / danger) | 🟧 | Northern-New-England MOAs (e.g. the Yankee 1/2 MOA complex, Vermont) and offshore Atlantic warning areas shared with the KZNY boundary; a legacy pocket of **Canadian airspace over New Brunswick** remains under ZBW's Area D (historical Loring AFB artifact) — confirm current status at planning. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV (Q/T routes, RNAV SID/STAR) · Mode S + ADS-B Out (1090ES ≥ FL180).** All defined in OM E; confirm current-AIRAC route. §5. |

---

## 3. ARTCC structure & lateral/vertical boundaries

- **Lateral extent:** Boston Center covers **165,000 sq mi (≈430,000 km²)** across Connecticut, Vermont, Massachusetts, Rhode Island, Maine, New Hampshire, northeastern New York state and northeast Pennsylvania, plus an offshore Atlantic shelf extending roughly **150 nm east of the Maine coast**. In 2024 the facility handled **1,502,689 flights**, ranking it the **18th busiest** of the 22 US ARTCCs.
- **Vertical structure:** as with any US ARTCC, **one facility** works the whole column, low through super-high. Public ATC-community reference (see §Sources) describes **30 sectors** — **16 low-altitude, 10 high-altitude, 1 super-high-altitude**, plus **3 combined low/high sectors** — organised into **five areas, A through E**. Area C carries roughly 60 nm of over-ocean airspace south of Long Island; Area D, the largest, extends the ~150 nm offshore shelf and includes the small pocket of Canadian (New Brunswick) airspace noted above. 🟧 (sector count/configuration — tier-4 ATC-community corroboration; re-verify against current FAA ENR.)
- **Adjacent ARTCCs/ACCs (by boundary):**
  - **S — New York (KZNY, FAA).** New York, New Jersey and eastern Pennsylvania; the shared boundary is one of the most heavily flow-managed in the US (Northeast Corridor). See [New York (KZNY)](new-york-kzny.md).
  - **W — Cleveland (KZOB, FAA).** Great Lakes / western New York; the westbound overflight handoff.
  - **SW — Washington (KZDC, FAA).** Boston and Washington Centers share a boundary reference per public ATC-community documentation 🟧 (exact corner/segment — verify FAA boundary charts); operationally the two centers coordinate directly during New York-boundary saturation events.
  - **NW — Montreal ACC (CZUL, NAV CANADA)** and **Toronto ACC (CZYZ, NAV CANADA).** Quebec/Ontario approaches to the Canadian domestic system.
  - **NE — Moncton ACC (CZQM, NAV CANADA).** The Maritimes; this is the **operational gateway for eastbound North Atlantic traffic** — Boston Center's northern high sectors (Area D) hand NAT-bound climb-outs to Moncton, which passes them on toward the Gander domestic/oceanic system. See [North Atlantic](../../north-atlantic.md).
- **Sectorisation:** the whole column is one FAA facility (no separate UAC); the low/high/super-high sector set combines and splits tactically with traffic, and Boston's own terminal airspace is delegated to **A90 (Boston Consolidated TRACON)**.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **Boston ARTCC (KZBW, FAA)** — radar/ADS-B control of the full column across the five areas (A–E) and the low/high/super-high sector set.
- **Terminal facility inside the ARTCC:** 🟩 **Boston Consolidated TRACON (A90)** sequences KBOS and its satellites; Manchester, Providence, Bradley and Albany are worked by their own approach facilities, all within KZBW's lateral boundary. Terminal procedures for KBOS are in the airport briefing (§9).
- **FIS / FSS:** US **Flight Service** (Leidos) provides flight-information/advisory service; not a factor for an IFR hub transit remaining in controlled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal domestic IFR routing. The oceanic hand-off to Moncton/Gander begins the procedural NAT regime **upstream** of this ARTCC.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Boston ARTCC and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — required per **14 CFR 91.180**. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 RNAV enroute on the **Q-route (high-altitude RNAV)** and **T-route (low-altitude RNAV)** structure; **RNAV SID/STAR** and **RNP APCH** at Boston. Standard RNAV-1/RNAV-2 airframe capability suffices. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟩 **not required** on the domestic side — VHF voice continuous; PDC available at major terminals. The oceanic **CPDLC + ADS-C (FANS 1/A)** mandate applies only once traffic is inside the NAT system — see [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md) and [North Atlantic](../../north-atlantic.md).
- **Transponder / ADS-B:** 🟥 **Mode S** with **ADS-B Out** required — **14 CFR 91.225**; **1090ES required at and above FL180** (UAT/978 MHz permitted only below 18,000 ft), effective 01 JAN 2020.

---

## 6. Communications & frequencies

- **ARTCC sectors / frequencies:** a KBOS transit is worked through Boston Center's low/high sectors (Area C/D on the coastal/oceanic-facing side) and handed to the adjacent ARTCC/ACC (**New York / Cleveland / Washington / Montreal / Moncton / Toronto**) or to **A90** at the terminal end; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **FIS / advisory:** US **Flight Service** (Leidos) for flight-information/advisory service in uncontrolled airspace.
- **Language:** 🟩 **English**.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 US high-altitude **jet-route / Q-route (RNAV)** structure; Boston shares in the Northeast Corridor's preferential/flow-managed routing with New York and Washington Centers.
- **North Atlantic surface feed:** 🟥 eastbound NAT-bound traffic climbs through Boston Center's northern high sectors (public ATC-community reference names Area D's **Augusta (AUG)** and **Millinocket (MLT)** sectors as the relevant high-altitude positions coordinating with Moncton and Montreal Centres 🟧 — tier-4 corroboration, re-verify) before being handed to **Moncton ACC (CZQM)** and onward toward the Gander domestic/oceanic system and the NAT track structure. The NAT track/entry-point mechanics themselves are owned by [North Atlantic](../../north-atlantic.md) — this brief only covers the domestic hand-off.
- **Major fixes / entry-exit points:** the SimBrief/current-AIRAC route provides the exact string for both the KBOS terminal transition and any onward NAT filing; not reproduced here (planning context, not a clearance). 🟧
- **Hubs & aerodromes inside the ARTCC:** 🟩 **Boston-Logan (KBOS)**; other in-ARTCC fields of note include Manchester-Boston Regional (KMHT), Bangor Intl (KBGR), Portland Intl Jetport (KPWM), Albany Intl (KALB) and Bradley Intl (KBDL) — terminal detail for KBOS is in the airport briefing (§9); the others are not yet briefed (§12).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 generally low — Atlantic coastal plain and rolling New England hills — but the ARTCC's northern sectors include the **White Mountains (New Hampshire)**, whose highest point **Mount Washington reaches 6,288 ft** (also noted for extreme recorded surface winds), and the **Green Mountains (Vermont)**, topping out at **Mount Mansfield, 4,393 ft**. Neither is a cruise-level factor at FL290+, but both matter for MEA/MOCA in the low sectors serving northern New England fields. 🟧 (per-quadrant grid-MORA — take from FAA ENR charts.)
- **Boundary terrain:** the higher **Adirondacks** sit just across the western boundary in **New York Center (KZNY)** territory, per the KZNY brief; the Canadian **Notre Dame / Chic-Choc** ranges lie further north across the Moncton/Quebec boundary.
- **Driftdown / depressurisation escape:** not a terrain-limited problem for a KBOS-area transit at cruise — the northern terrain belt is well clear of RVSM levels and diversion-field density along the coast is high (§9). The limiting driftdown case for onward NAT-bound traffic is the **oceanic segment**, covered in [North Atlantic](../../north-atlantic.md) §7–8, not here.
- **Cold-temperature altitude corrections:** relevant at the northern/inland fields (e.g. Bangor, Portland, Albany) in winter — a terminal, not enroute, driver; see the airport briefing and OM E.

---

## 9. Diversion aerodromes within the ARTCC

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Boston-Logan Intl | **KBOS** | Primary in-ARTCC hub / dep-return alternate | [KBOS brief](../../../destinations/north-america/united-states/kbos/index.md) |
| Manchester-Boston Regional | **KMHT** | Co-terminal alternate (A90 area) | Brief to build 🟧 |
| Bangor Intl | **KBGR** | Northern-Maine / oceanic-facing alternate; long runway, former USAF field | Brief to build 🟧 |
| Portland Intl Jetport | **KPWM** | Coastal Maine alternate | Brief to build 🟧 |
| Albany Intl | **KALB** | Western-boundary alternate, near the KZNY interface | Brief to build 🟧 |
| Bradley Intl | **KBDL** | Southern-New-England alternate (Hartford/Springfield) | Brief to build 🟧 |

- **Coverage note:** 🟩 dense on the coast and in southern New England; thinner but adequate in the far north (Bangor is the key oceanic-facing alternate). ETP/critical-point planning is not a driver in this radar-controlled continental ARTCC; the operational constraint is **capacity/flow at the New York boundary** and winter weather, not field spacing.

---

## 10. Special-use airspace

- **Military MOA / restricted:** 🟧 northern-New-England **MOA complexes** (e.g. the Yankee 1/2 MOAs over Vermont, worked by the Montpelier sector per public ATC-community reference) and assorted smaller military training areas; normally clear of a high-level KBOS transit but confirm active status at planning.
- **Danger / prohibited areas / legacy anomaly:** 🟧 a small pocket of **Canadian airspace over New Brunswick** (and a smaller area of Quebec) remains inside Boston Center's Area D as a historical artifact of the former Loring AFB terminal control area (Loring closed 1994; the airspace was never transferred back to Canadian control) — noted here as a durable structural curiosity, not an operational hazard for a jet transit.
- **Overflight-permit / diplomatic considerations:** 🟩 none — US domestic operation; the onward Canada/oceanic segment carries no overflight-permit requirement either.

> **SUA currency:** re-check active MOA status and any NOTAMs affecting the Boston/Moncton hand-off sectors at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply the standard **US domestic IFR lost-comms** procedure (route/altitude per last clearance / expected / filed — 14 CFR 91.185; squawk **7600**); continuous VHF coverage makes prolonged loss unlikely.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies domestically; that regime begins once traffic is inside the NAT system ([North Atlantic](../../north-atlantic.md) §10). Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Winter — nor'easters / coastal snow & ice:** the dominant winter constraint — heavy snow, freezing precipitation, coastal storms and low ceilings drive deicing, reduced runway acceptance and GDP/ground-stop exposure at KBOS and the northern New England fields.
  - **Summer — convection & residual tropical systems:** frontal thunderstorms and, less frequently than the Southeast, remnants of Atlantic tropical systems reaching New England; both can trigger reroutes through the congested KZNY/KZBW boundary.
  - **Coastal fog** at Maine/Massachusetts coastal fields — a terminal driver; see the airport briefing.

> **Pull at planning (T-2h):** enroute NOTAMs, TFRs, GDP/ground-stop/reroute advisories, SIGMET/AIRMET (convection, icing), active MOA status, any Moncton/Gander NAT-entry advisories, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **KZBW/KZDC boundary segment** (SW corner-contact) — verify FAA boundary charts.
- **Sector/area configuration** (30 sectors, 5 areas A–E) — tier-4 ATC-community corroboration only; re-verify against current FAA ENR/facility documentation.
- Published **grid-MORA / MEA** values over the White/Green Mountains (per-quadrant) — take from FAA ENR charts.
- Current status of the **legacy Canadian-airspace pocket** in Area D (former Loring AFB TCA) — confirm against current AIP Canada / FAA charts.
- **Yankee 1/2 MOA** and other northern-New-England SUA activation — live NOTAM at planning.
- Exact **Boston/Moncton NAT hand-off sector and fix structure** — verify against current FAA ENR and NAV CANADA AIP Canada ENR 2.
- No OM C airport briefs yet for **KMHT, KBGR, KPWM, KALB, KBDL** — build if they become planned alternates. KBOS brief linked in §9.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **FAA — 14 CFR 91.225 (ADS-B Out) & 91.180 (RVSM) & 91.185 (two-way radio comms failure)** — ADS-B airspace classes, 1090ES ≥ FL180 effective 01 JAN 2020; RVSM FL290–410; lost-comms rules — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91 (retrieved 2026-07-26).
- **FAA — Aeronautical Information Manual (AIM), Ch. 3 (Airspace) & 4 (ATC)** — Class A FL180–FL600, Class B terminal, Q/T-route (RNAV) structure — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/ (retrieved 2026-07-26).
- **Boston Air Route Traffic Control Center — facility overview (public reference)** — coverage (CT/VT/MA/RI/ME/NH/NE-NY/NE-PA), 165,000 sq mi, 2024 traffic (1,502,689 flights, 18th busiest), 30 sectors (16 low/10 high/1 super-high/3 combined), five areas A–E, adjacent ZNY/ZOB/ZDC/CZUL/CZQM/CZYZ, legacy Loring AFB Canadian-airspace pocket — https://en.wikipedia.org/wiki/Boston_Air_Route_Traffic_Control_Center (retrieved 2026-07-26). *Tier-4 corroboration for sector/area detail; boundaries and sector configuration to re-verify vs FAA ENR/facility documentation.*
- **North Atlantic Tracks / Gander-Moncton-Boston hand-off coordination (public reference)** — NAT track NOTAM searchability under Shanwick/Gander/Boston/New York Centers; Moncton-Boston hand-off geometry — https://nms.aim.faa.gov/nat and https://en.wikipedia.org/wiki/North_Atlantic_Tracks (retrieved 2026-07-26). *Corroboration only; exact hand-off sector/fix structure to re-verify.*
- **Terrain elevations (public reference)** — Mount Washington 6,288 ft (White Mountains, NH); Mount Mansfield 4,393 ft (Green Mountains, VT) — Wikipedia range/peak articles (retrieved 2026-07-26). *Per-quadrant grid-MORA to be taken from ENR charts.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
