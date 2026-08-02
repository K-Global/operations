# Atlanta ARTCC (KZTL) — FIR Briefing

**Scope:** single ARTCC (US domestic "FIR") — Georgia, Alabama, the Carolinas, Tennessee and parts of Kentucky/West Virginia/Virginia/Florida/Mississippi, containing **Hartsfield-Jackson Atlanta (KATL)** — the **busiest en-route ARTCC in the United States** · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · **Adjacent ARTCCs:** Washington (KZDC) NE · Indianapolis (KZID) N · Memphis (KZME) NW · Houston (KZHU) SW · Jacksonville (KZJX) SE
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference, not a chart or clearance. Atlanta Center is a **fully radar/ADS-B-controlled continental ARTCC** — no procedural segment — and is the **busiest air traffic control facility in the United States** by operations count, driving chronic flow-management (MIT/GDP-style) constraints around the KATL mega-hub. Its defining features are **very high traffic density**, the **Appalachian/Blue Ridge foothills** on its northern edge (a modest terrain factor compared with the western US, but present), and a **severe-convective-weather corridor** (spring/summer thunderstorms, tornado risk, occasional inland tropical-remnant impacts). Routings and levels here are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for the aerodromes inside the ARTCC live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / control ident | **KZTL** — Atlanta ARTCC ("Atlanta Center"); US domestic Class A enroute. Underlying terminal facility: **Atlanta TRACON (A80)** for the KATL metro |
| Controlling ATSU / ANSP | **FAA Air Traffic Organization** — Atlanta ARTCC, located at Hampton, GA (near KATL) |
| Airspace class & vertical limits | US **Class A FL180–FL600** enroute; terminal **Class B** at Atlanta — terminal detail in the airport brief (§9) 🟧 |
| RVSM | 🟥 Applicable **FL290–FL410** (14 CFR 91.180) — see OM E §5 |
| PBN environment | RNAV enroute (Q-route high / T-route low) · RNAV SID/STAR at KATL · RNP APCH arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B**; domestic datalink not required (VHF continuous) |
| Primary language & comms | 🟩 **VHF throughout; English** |
| Key hazard(s) | 🟥 **Extreme traffic density / flow-management exposure** — the busiest ARTCC in the US, chronically feeding one of the world's busiest hub airports (KATL) · **spring/summer severe convection** (thunderstorms, hail, tornado risk) · modest **Appalachian/Blue Ridge terrain** on the northern edge |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/ADS-B-controlled throughout — no procedural segment. |
| Communication coverage & language | 🟩 | Continuous VHF; English. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟥 | **ADS-B Out mandatory** — FAA 14 CFR 91.225; **1090ES required ≥ FL180**, effective 01 JAN 2020. Continuous SSR/ADS-B coverage. |
| Terrain / MORA / driftdown | 🟧 | Generally moderate — the ARTCC includes the **southern Appalachian / Blue Ridge Mountains** foothills across its northern portion (western North Carolina / eastern Tennessee), with peaks over 6,000 ft (e.g. Mount Mitchell 6,684 ft, the highest point east of the Mississippi, sits within or very near the ARTCC's northern boundary) — a real but much smaller terrain factor than the western US ARTCCs. §8. |
| Diversion-aerodrome coverage | 🟩 | Dense — KATL plus numerous major regional/metro fields inside the ARTCC (per §9). |
| Special-use airspace (military / danger) | 🟧 | Military training areas/MOAs across the Southeast; normally clear of a high-level metro transit but confirm active status at planning. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV (Q/T routes, RNAV SID/STAR) · Mode S + ADS-B Out (1090ES ≥ FL180).** All defined in OM E; confirm current-AIRAC route/SID. §5. |

---

## 3. ARTCC structure & lateral/vertical boundaries

- **Lateral extent:** Atlanta Center covers roughly **129,000 sq mi** of the Southern United States, including parts of **Georgia, Alabama, South Carolina, North Carolina, Tennessee, Kentucky, West Virginia and Virginia**, and touches parts of **Florida and Mississippi**. 🟧 (a public secondary source cites ~103,000 sq mi and "6 states" — the discrepancy is unresolved; treat both as approximate pending FAA ENR confirmation.)
- **Vertical structure:** as with any US ARTCC, **one facility** works the whole column; sector stratification is documented (network-sim source) as **Ultra-Low (SFC–10,000 ft)**, **Low (SFC/10,000 ft–FL230)**, **High (FL240–FL330)** and **Ultra-High (FL340 and above)**, combined/split with traffic and staffing. 🟧 (exact current FAA sector count/boundaries — verify facility documentation; the network-sim stratification is cross-checked here as corroboration, not as the authoritative FAA structure.)
- **Adjacent ARTCCs (by boundary):** Atlanta Center **borders five other ARTCCs**:
  - **NE — Washington (KZDC, FAA).** Mid-Atlantic; the Washington/Baltimore metroplex.
  - **N — Indianapolis (KZID, FAA).** Ohio Valley.
  - **NW — Memphis (KZME, FAA).** Tennessee Valley / Mid-South.
  - **SW — Houston (KZHU, FAA).** Gulf-coast approach.
  - **SE — Jacksonville (KZJX, FAA).** Florida / south-eastern seaboard.
- **Sectorisation:** transit-relevant fact is that the whole column is one FAA facility (no separate UAC); ZTL overlies or abuts numerous approach control facilities, including **Atlanta (A80), Charlotte, Greensboro, Knoxville, Chattanooga and Birmingham** approaches — reflecting the density of major terminals inside this single ARTCC.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **Atlanta ARTCC (KZTL, FAA)** — radar/ADS-B control of the full column, feeding the metro TRACONs across the busiest en-route traffic count in the US (3,104,115 operations in 2024, per public FAA activity data).
- **Terminal facilities inside the ARTCC:** 🟩 **Atlanta TRACON (A80)** sequences the KATL Class B; numerous smaller approach controls (Charlotte, Greensboro, Knoxville, Chattanooga, Birmingham and others) handle the ARTCC's other major terminals. Terminal procedures are in the airport briefing (§9).
- **FIS / FSS:** US **Flight Service** (Leidos) provides flight-information/advisory service; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal domestic IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Atlanta ARTCC and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — required per **14 CFR 91.180**. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 RNAV enroute on the **Q-route (high-altitude RNAV)** and **T-route (low-altitude RNAV)** structure; **RNAV SID/STAR** and **RNP APCH** at KATL — high traffic density makes RNAV SIDs/STARs and flow-managed routing the norm. Standard RNAV-1/RNAV-2 airframe capability suffices. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟩 **not required** — VHF voice continuous; PDC available at major terminals as a convenience. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** with **ADS-B Out** required — **14 CFR 91.225**; **1090ES required at and above FL180** (UAT/978 MHz permitted only below 18,000 ft), effective 01 JAN 2020.

---

## 6. Communications & frequencies

- **ARTCC sectors / frequencies:** a metro transit is handed sequentially through **Atlanta Center** low/high sectors and onward to the adjacent-ARTCC center (**Washington / Indianapolis / Memphis / Houston / Jacksonville**) or to **Atlanta TRACON (A80)** at the terminal end; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **FIS / advisory:** US **Flight Service** (Leidos) for flight-information/advisory service in uncontrolled airspace.
- **Language:** 🟩 **English**.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 US high-altitude **jet-route / Q-route (RNAV)** structure feeding the KATL arrival/departure gates; as the nation's busiest ARTCC, expect **preferential/flow-managed routing** and frequent tactical reroutes around convective weather in season.
- **Major fixes / entry-exit points:** metro **arrival gates** (corner-post/RNAV feeder fixes into A80) and the STAR transition fixes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance). 🟧 (exact current STAR/SID by AIRAC/runway config — pull on the day.)
- **Hubs & aerodromes inside the ARTCC:** 🟩 **Hartsfield-Jackson Atlanta (KATL)** — the served field for this brief. ZTL also overlies numerous other major terminals (Charlotte, Greensboro/Piedmont Triad, Knoxville, Chattanooga, Birmingham and others), reflecting the density of airports inside this single ARTCC.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts — 🟧:** the ARTCC is mostly moderate/low Piedmont and coastal-plain terrain, but its **northern portion crosses the southern Appalachians / Blue Ridge Mountains** (western North Carolina, eastern Tennessee) where peaks exceed **6,000 ft** — **Mount Mitchell, 6,684 ft**, the highest point in the eastern United States, sits within or very close to the ARTCC's northern boundary. This is a much smaller terrain factor than the western US ARTCCs but is not negligible for MEA/MORA in that corner. 🟧 (per-quadrant grid-MORA and the precise Mount Mitchell/ARTCC-boundary relationship — verify FAA ENR charts.)
- **Boundary terrain:** higher terrain continues into neighbouring ARTCCs (e.g. further Appalachian ridgelines toward Washington KZDC/Indianapolis KZID); KATL itself sits on relatively flat Piedmont terrain.
- **Driftdown / depressurisation escape:** 🟧 not a binding constraint for a KATL-area transit at normal RVSM cruise levels; the Blue Ridge terrain in the ARTCC's northern corner would be the relevant consideration only for routings that track close to that boundary — plan the escape toward lower Piedmont/coastal-plain terrain and the dense diversion-field set (§9).
- **Cold-temperature altitude corrections:** 🟩 not typically a factor at KATL (moderate elevation, ~1,026 ft, temperate climate); may apply at higher-elevation fields in the Appalachian corner in winter — a terminal driver, see the airport briefings and OM E.

---

## 9. Diversion aerodromes within the ARTCC

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Hartsfield-Jackson Atlanta Intl | **KATL** | Served hub / primary dep-return alternate | [KATL brief](../../../destinations/north-america/united-states/katl/index.md) |

- **Coverage note:** 🟩 dense — Atlanta Center overlies numerous major regional and metro airports (Charlotte, Greensboro, Knoxville, Chattanooga, Birmingham and others) in addition to KATL, so **ETP/critical-point planning is not a driver** in this radar-controlled continental ARTCC. The operational constraint is **capacity/flow management** around the KATL mega-hub (§1), not field spacing. 🟧 (build additional in-ARTCC alternate briefs if planned as regular diversions.)

---

## 10. Special-use airspace

- **Military MOA / restricted areas — 🟧:** military training areas/MOAs are present across the Southeast within and adjacent to KZTL; a high-level metro transit is normally clear of them, but confirm active status at planning, especially if radar-vectored off the direct route.
- **Danger / prohibited areas:** 🟧 standing security/VIP TFRs can appear over the Atlanta metro at short notice; NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — US domestic operation.

> **SUA currency:** re-check active MOA/restricted-area status and current TFRs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply the standard **US domestic IFR lost-comms** procedure (route/altitude per last clearance / expected / filed — 14 CFR 91.185; squawk **7600**); continuous VHF coverage makes prolonged loss unlikely.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued; convective-weather deviations are a routine seasonal factor given the density of thunderstorm activity feeding into the busiest US ARTCC's flow constraints. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Spring/summer severe convection:** 🟥 thunderstorms, hail and tornado risk are a recurring hazard across the Southeast — a documented historical case (Southern Airways Flight 242, 1977, hail/engine-related accident near Atlanta) contributed to the FAA's establishment of Center Weather Service Units (CWSUs) at ARTCCs including Atlanta. Expect significant tactical rerouting and arrival-flow constraints during active convective weather.
  - **Inland tropical-system remnants:** 🟧 Gulf/Atlantic tropical cyclones occasionally track inland through the Southeast, bringing heavy rain and gusty winds well after landfall.
  - **Winter precipitation (occasional):** 🟧 the Southeast sees infrequent but disruptive winter ice/snow events; not a routine seasonal driver but can significantly affect KATL flow when it occurs.

> **Pull at planning (T-2h):** enroute NOTAMs, SIGMET/AIRMET (convection, tornado watches, turbulence), active MOA/restricted-area status, **GDP/flow-management advisories** around KATL, the assigned RNAV SID/STAR/runway config, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **KZTL lateral boundaries** (Washington/Indianapolis/Memphis/Houston/Jacksonville) and the sector-band boundaries — verify FAA / VATUSA ZTL boundary charts. Reconcile the ~129,000 sq mi (Wikipedia) vs ~103,000 sq mi (secondary source) area discrepancy.
- Current **FAA sector count/structure** (the Ultra-Low/Low/High/Ultra-High stratification cited here is network-sim corroboration, not confirmed FAA structure) — verify facility documentation.
- Published **grid-MORA / MEA** values over the Blue Ridge/Appalachian northern corner (per-quadrant), and the precise Mount Mitchell/ARTCC-boundary relationship — verify FAA ENR charts.
- Current **KATL RNAV SID/STAR** set and runway-config logic — pull the day's charts.
- Military **MOA/restricted-area** activity across the Southeast along the transit corridor — live NOTAM at planning.
- No OM C airport briefs yet for other major in-ARTCC fields (Charlotte, Greensboro, Knoxville, Chattanooga, Birmingham) — build if they become planned alternates. KATL brief linked in §9.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **FAA — 14 CFR 91.225 (ADS-B Out) & 91.180 (RVSM) & 91.185 (two-way radio comms failure)** — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91 (retrieved 2026-07-26).
- **Wikipedia — Atlanta Air Route Traffic Control Center** — busiest US ARTCC (3,104,115 operations, 2024); ~129,000 sq mi covering GA/AL/SC/NC/TN/KY/WV/VA plus touches of FL/MS; borders 5 ARTCCs (Houston, Jacksonville, Washington, Indianapolis, Memphis); overlies Atlanta, Charlotte, Greensboro, Knoxville, Chattanooga and Birmingham approaches — https://en.wikipedia.org/wiki/Atlanta_Air_Route_Traffic_Control_Center (retrieved 2026-07-26). *Corroboration; boundaries/area figure to re-verify vs FAA ENR/facility documentation.*
- **123atc.com — ZTL Atlanta ARTCC facility summary** — secondary public reference citing ~103,000 sq mi / 6 states / 15 radar approach facilities / 13 major internal airports — https://123atc.com/facility/ZTL (retrieved 2026-07-26). *Tier-4 corroboration only; area figure conflicts with the Wikipedia figure above — unresolved, flagged §12.*
- **ZTL ARTCC — public Standard Operating Procedures documentation** — sector altitude stratification (Ultra-Low SFC–10,000 / Low SFC(or 10,000)–FL230 / High FL240–FL330 / Ultra-High FL340+) — https://www.ztlartcc.org/storage/files/ZTL%20Center%20SOP_1546361303.pdf (retrieved 2026-07-26). *Tier-4 network-sim corroboration only — sector-band structure cross-checked here; not confirmed against current FAA facility documentation.*
- **FAA — Aeronautical Information Manual (AIM), Ch. 3 (Airspace) & 4 (ATC)** — Class A FL180–FL600, Class B terminal, Q/T-route (RNAV) structure — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/ (retrieved 2026-07-26).
- **Terrain elevations (public reference)** — Mount Mitchell 6,684 ft, highest point in the eastern United States (southern Appalachians / Blue Ridge) — Wikipedia (retrieved 2026-07-26). *Per-quadrant grid-MORA to be taken from ENR charts.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
