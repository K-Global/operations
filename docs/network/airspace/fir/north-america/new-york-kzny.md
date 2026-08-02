# New York ARTCC (KZNY) — FIR Briefing

**Scope:** single ARTCC (US domestic "FIR") — New York, New Jersey and eastern Pennsylvania, containing the **New York metro superhub (KJFK East-coast hub)** and the world's densest terminal airspace · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · oceanic continuation in [North Atlantic](../../north-atlantic.md) · **Adjacent ARTCCs:** Boston (KZBW) NE · Cleveland (KZOB) W · Washington (KZDC) SW · New York Oceanic (KZWY, worked separately) / Gander Oceanic (CZQX) offshore SE
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — verified vs FAA airspace structure + 14 CFR + VATUSA ZNY policy; exact sector-band class letters, per-quadrant MORA and the KZNY/KZWY oceanic split flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. New York Center is a **fully radar/ADS-B-controlled continental ARTCC** — no procedural segment on the domestic side (the offshore oceanic component is worked separately as New York Oceanic, KZWY, and its procedures live in the [North Atlantic](../../north-atlantic.md) brief). Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for the aerodromes inside the ARTCC (KJFK, KEWR, KLGA, KPHL …) live in the airport briefings (§9). Live restrictions (NOTAMs, TFRs, GDP/ground-stop status, SIGMETs) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / control ident | **KZNY** — New York ARTCC ("New York Center"); US domestic Class A enroute. Underlying terminal facilities: **New York TRACON (N90)** for the JFK/EWR/LGA/TEB metro, **PHL TRACON** for Philadelphia. Offshore: **New York Oceanic (KZWY)**, worked as a separate area |
| Controlling ATSU / ANSP | **FAA Air Traffic Organization** — New York ARTCC. No separate upper-airspace unit: one facility works low + high + super-high sectors |
| Airspace class & vertical limits | US **Class A FL180–FL600** enroute; sector shelves span **0 AGL–FL600**. Terminal **Class B** at the New York metro (N90) and Philadelphia — terminal detail in the airport briefs (§9) 🟧 |
| RVSM | 🟥 Applicable **FL290–FL410** (14 CFR 91.180) — see OM E §5 |
| PBN environment | RNAV enroute (Q-route high / T-route low) · RNAV SID/STAR at the metro · RNP APCH arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B**; domestic datalink not required (VHF continuous). Oceanic CPDLC/ADS-C (FANS) applies only in the KZWY offshore component — see [North Atlantic](../../north-atlantic.md) |
| Primary language & comms | 🟩 **VHF throughout; English** |
| Key hazard(s) | 🟥 **Extreme traffic density** — the New York metro is the busiest, most flow-constrained terminal airspace in the world (chronic GDP/ground-stop exposure); Atlantic **oceanic boundary handoff** to KZWY/Gander SE; **winter nor'easters / snow / deicing** and **summer convection / tropical systems**. Terrain is a non-factor (low coastal plain) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Domestic side fully radar/ADS-B-controlled; the offshore **KZWY oceanic** area is procedural and worked separately ([North Atlantic](../../north-atlantic.md)). |
| Communication coverage & language | 🟩 | Continuous VHF; English. No HF/SATVOICE on the domestic side (HF families belong to the KZWY/NAT segment). |
| Datalink / surveillance requirement | 🟥 | **ADS-B Out mandatory** — FAA 14 CFR 91.225; **1090ES required ≥ FL180** (UAT permitted only below 18,000 ft), effective 01 JAN 2020. Continuous SSR/ADS-B coverage. |
| Terrain / MORA / driftdown | 🟩 | Low. Coastal plain plus the Catskills / Poconos / Appalachian foothills (Slide Mtn ~4,180 ft the local high) — not a cruise or driftdown factor. §8. |
| Diversion-aerodrome coverage | 🟩 | Very dense — KJFK/KEWR/KLGA/KPHL/KTEB inside the ARTCC, KBOS just across the Boston boundary. Curated briefs exist for KJFK, KEWR, KBOS (§9). |
| Special-use airspace (military / danger) | 🟧 | Offshore **Atlantic warning areas (W-105/W-106/W-107 family)** and inland MOAs/restricted areas over PA/NJ; normally clear of a high-level metro transit but confirm active status at planning. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV (Q/T routes, RNAV SID/STAR) · Mode S + ADS-B Out (1090ES ≥ FL180).** All defined in OM E; confirm the current-AIRAC route/PDR. §5. |

---

## 3. ARTCC structure & lateral/vertical boundaries

- **Lateral extent:** New York Center's domestic airspace covers **New York, New Jersey and eastern Pennsylvania**, plus a large offshore Atlantic shelf. Including the offshore oceanic component the facility is responsible for roughly **327,000 sq mi (≈850,000 km²)** of controlled airspace; the separately-worked **New York Oceanic (KZWY)** area extends far out over the Atlantic — some **3.25 million sq mi**, more than halfway toward north-west Africa and including the airspace over **Bermuda (TXKF)**. 🟧 (exact domestic/oceanic lateral split — verify FAA/VATUSA boundary charts.)
- **Vertical structure:** unlike a European FIR/UIR split, a US ARTCC is **one facility** that works the whole column. VATUSA ZNY documents the airspace as **28 sectors** — **16 low-altitude, 12 high-altitude and 2 super-high-altitude** — with shelves from **0 AGL up to FL600**; sectors combine/split with traffic and staffing. The cruise band for our transits sits in the high/super-high sectors; the climb/descent to the metro is worked by the low sectors and then handed to **N90 (New York TRACON)**.
- **Adjacent ARTCCs (by boundary):**
  - **NE — Boston (KZBW, FAA).** New England; also owns the higher terrain (Adirondacks/Green/White Mtns) that sits **outside** KZNY.
  - **W — Cleveland (KZOB, FAA).** Great Lakes / western Pennsylvania; the westbound handoff off the metro.
  - **SW — Washington (KZDC, FAA).** Mid-Atlantic; the Washington/Baltimore metroplex and the southbound flow share the busy **Northeast Corridor** with KZNY.
  - **SE — offshore:** handoff to **New York Oceanic (KZWY)** and onward **Gander Oceanic (CZQX)** for the North Atlantic — the transition from radar to procedural oceanic control ([North Atlantic](../../north-atlantic.md)).
- **Sectorisation:** transit-relevant fact is that the whole column is one FAA facility (no separate UAC); the low/high/super-high sector set is combined/decombined tactically, and the metro terminal airspace is delegated to **N90** and **PHL TRACON**.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **New York ARTCC (KZNY, FAA)** — radar/ADS-B control of the full 0 AGL–FL600 column across the low/high/super-high sectors, feeding the metro TRACONs.
- **Terminal facilities inside the ARTCC:** 🟩 **New York TRACON (N90)** sequences the JFK/EWR/LGA/TEB Class B; **PHL TRACON** the Philadelphia Class B. Terminal procedures are in the airport briefings (§9).
- **FIS / FSS:** US **Flight Service** (Leidos) provides flight-information/advisory service; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal domestic IFR routing (the procedural regime begins offshore in KZWY).

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in New York ARTCC and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — required per **14 CFR 91.180**. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 RNAV enroute on the **Q-route (high-altitude RNAV)** and **T-route (low-altitude RNAV)** structure; **RNAV SID/STAR** and **RNP APCH** at the metro terminals. Standard RNAV-1/RNAV-2 airframe capability suffices. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟩 **not required** on the domestic side — VHF voice continuous; PDC available at major terminals as a convenience. The oceanic **CPDLC + ADS-C (FANS 1/A)** datalink mandate applies only in the **KZWY / NAT** offshore continuation — see [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md) and [North Atlantic](../../north-atlantic.md).
- **Transponder / ADS-B:** 🟥 **Mode S** with **ADS-B Out** required — **14 CFR 91.225**; **1090ES (Mode-S extended squitter) required at and above FL180** (UAT/978 MHz permitted only below 18,000 ft), effective 01 JAN 2020.

---

## 6. Communications & frequencies

- **ARTCC sectors / frequencies:** a metro transit is handed sequentially through **New York Center** low/high sectors and onward to the adjacent-ARTCC center (**Boston / Cleveland / Washington**) or to **N90 / PHL TRACON** at the terminal end; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **FIS / advisory:** US **Flight Service** (Leidos) for flight-information/advisory service in uncontrolled airspace.
- **Language:** 🟩 **English**.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 US high-altitude **jet-route / Q-route (RNAV)** structure feeding the metro arrival/departure gates; the **Northeast Corridor** (Boston–New York–Washington) is one of the most preferential-routed, flow-managed volumes in the world. Much of the metro traffic is routed on **published Preferential Departure/Arrival Routes (PDRs/PDARs)** and coded departure routes rather than pilot-preferred direct.
- **Tower Enroute Control (TEC):** 🟩 the New York metro has a dense **TEC route** network for short IFR hops between the metro fields at low altitude without a full center clearance — planning context for co-terminal repositioning, not for a high-level trunk arrival.
- **Major fixes / entry-exit points:** metro **arrival gates** (the fixed corner-post feeder fixes into N90) and the RNAV STAR transition fixes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance). 🟧 (exact current STAR/PDR by AIRAC/runway config — pull on the day.)
- **Hubs & aerodromes inside the ARTCC:** 🟩 **New York-JFK (KJFK, East-coast hub)**, **Newark (KEWR)**, **LaGuardia (KLGA)**, **Teterboro (KTEB)**, **Philadelphia (KPHL)**, plus Islip (KISP), Stewart (KSWF), White Plains (KHPN). Terminal detail is in the airport briefings (§9). **Boston (KBOS)** sits just across the boundary in **Boston ARTCC (KZBW)**.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low throughout. The ARTCC is dominated by the **Atlantic coastal plain**; the only relief is the inland **Catskills, Poconos and Appalachian foothills** (Slide Mountain, Catskills, ~4,180 ft the local high). Not a cruise-level factor at FL290+. 🟧 (per-quadrant grid-MORA — take from FAA ENR charts.)
- **Boundary terrain:** the higher **Adirondacks / Green / White Mountains** sit **across the northern boundary in Boston ARTCC (KZBW)**, not here. Noted so the boundary is explicit.
- **Driftdown / depressurisation escape:** not a terrain-limited problem in this ARTCC — cruise clears all terrain by a wide margin and the **very high diversion-field density** (§9) removes any terrain-limited escape concern. The limiting driftdown/decompression case for the wider trunk is offshore over the Atlantic ([North Atlantic](../../north-atlantic.md) §8), not here.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter (FAA Cold Temperature Airports where listed) — a terminal, not enroute, driver; see the airport briefings (§9) and OM E.

---

## 9. Diversion aerodromes within the ARTCC

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| New York-JFK | **KJFK** | East-coast hub / primary dep-return alternate | [KJFK brief](../../../destinations/north-america/united-states/kjfk/index.md) |
| Newark Liberty | **KEWR** | Co-terminal alternate (N90) | [KEWR brief](../../../destinations/north-america/united-states/kewr/index.md) |
| LaGuardia | **KLGA** | Co-terminal alternate (N90); short runways, no widebody | Brief to build 🟧 |
| Philadelphia | **KPHL** | In-ARTCC alternate (SW); full international | Brief to build 🟧 |
| Teterboro | **KTEB** | Bizjet reliever (N90) — no scheduled/heavy ops | Brief to build 🟧 |
| Boston-Logan | **KBOS** | Adjacent-ARTCC alternate — **in Boston ARTCC (KZBW)**, NE | [KBOS brief](../../../destinations/north-america/united-states/kbos/index.md) |

- **Coverage note:** 🟩 extremely dense — multiple Cat I/II/III fields within short range, so **ETP/critical-point planning is not a driver** in this radar-controlled continental ARTCC. The operational constraint is **capacity/flow (GDP/ground-stop)**, not field spacing; KEWR/KPHL give in-ARTCC redundancy, KBOS the nearest major across the Boston boundary.

---

## 10. Special-use airspace

- **Military MOA / restricted:** 🟧 inland **MOAs and restricted areas over Pennsylvania / New Jersey** (military training) and **offshore Atlantic warning areas (W-105 / W-106 / W-107 family)** used for military activity over the ocean. A high-level metro transit is normally clear of them, but confirm active status at planning — especially if radar-vectored off the direct route.
- **Danger / prohibited areas:** 🟧 the New York metro carries **prohibited/security airspace** and standing **VIP/stadium TFRs**; these are terminal/low-level and NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — US domestic operation.

> **SUA currency:** re-check active MOA/restricted/warning-area status and current TFRs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply the standard **US domestic IFR lost-comms** procedure (route/altitude per last clearance / expected / filed — 14 CFR 91.185; squawk **7600**); continuous VHF coverage makes prolonged loss unlikely. The oceanic contingency regime applies only offshore in KZWY ([North Atlantic](../../north-atlantic.md) §10).
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Winter — nor'easters / snow / ice:** heavy snow, freezing precipitation and low ceilings drive **deicing, reduced runway acceptance, GDPs and ground stops** across the metro; the dominant winter operational constraint.
  - **Summer — convection & tropical systems:** embedded/frontal thunderstorms and squall lines, plus **Atlantic tropical-cyclone (hurricane) season (Jun–Nov)**, close arrival gates and trigger large **Ground Delay Programs / reroutes** through the congested Northeast Corridor.
  - **Sea-breeze / low ceilings & fog** at the coastal metro fields — a terminal driver; see the airport briefings.

> **Pull at planning (T-2h):** enroute NOTAMs, TFRs, **GDP / ground-stop / reroute advisories** (metro flow), SIGMET/AIRMET (convection, turbulence, icing), active MOA/warning-area status, tropical-cyclone advisories in season, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **KZNY domestic / KZWY oceanic lateral split** and the sector-band boundaries — verify FAA / VATUSA ZNY boundary charts.
- **Airspace class letter per band / terminal Class B shelves** (metro & Philadelphia) — stated Class A enroute, Class B terminal; not individually re-verified against the current charts.
- Published **grid-MORA / MEA** values (per-quadrant) — take from FAA ENR charts; low throughout but not asserted numerically.
- Current **metro STAR / PDR / TEC** set and runway-config logic — pull the day's charts.
- Inland **MOA/restricted** and offshore **warning-area** activity along the transit corridor — live NOTAM at planning.
- No OM C airport briefs yet for **KLGA, KPHL, KTEB** — build if they become planned alternates. KJFK, KEWR, KBOS briefs linked in §9.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **FAA — 14 CFR 91.225 (ADS-B Out) & 91.180 (RVSM) & 91.185 (two-way radio comms failure)** — ADS-B airspace classes, 1090ES ≥ FL180 effective 01 JAN 2020; RVSM FL290–410; lost-comms rules — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91 (retrieved 2026-07-25).
- **FAA — Aeronautical Information Manual (AIM), Ch. 3 (Airspace) & 4 (ATC)** — Class A FL180–FL600, Class B terminal, Q/T-route (RNAV) and jet-route structure, Preferential/Tower-Enroute-Control routing — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/ (retrieved 2026-07-25).
- **VATUSA / Virtual New York ARTCC (ZNY)** — General Policy Document **ZNY-1000 Rev F**; facility description **28 sectors (16 low / 12 high / 2 super-high)**, shelves 0 AGL–FL600, ~3.27 M sq mi incl. **New York Oceanic (ZWY)** and Bermuda — https://nyartcc.org/ and https://zny-uploads.s3.amazonaws.com/files-publications/ZNY_GP_Rev_F.pdf (retrieved 2026-07-25). *Tier-4 network-sim corroboration only — sector count/structure and the ZWY oceanic split cross-checked here; boundaries to re-verify vs FAA charts.*
- **New York ARTCC — facility overview (public reference)** — coverage of NY/NJ/eastern PA + Atlantic, ~327,000 sq mi incl. oceanic, adjacent Boston (ZBW)/Cleveland (ZOB)/Washington (ZDC), oceanic ZWY (3.25 M sq mi incl. Bermuda) — https://en.wikipedia.org/wiki/New_York_Air_Route_Traffic_Control_Center (retrieved 2026-07-25). *Corroboration; boundaries to re-verify vs FAA ENR.*
- **Terrain elevations (public reference)** — Slide Mountain (Catskills) ~4,180 ft; coastal-plain ARTCC otherwise — https://en.wikipedia.org/wiki/Slide_Mountain_(Ulster_County,_New_York) (retrieved 2026-07-25). *Per-quadrant grid-MORA to be taken from ENR charts.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_FIR Briefing Template.md`. New York ARTCC (KZNY): single FAA facility, 28 sectors (16 low / 12 high / 2 super-high) 0 AGL–FL600, N90 + PHL TRACONs delegated; adjacent Boston/Cleveland/Washington + offshore KZWY/Gander oceanic handoff; RVSM/RNAV Q-T routes/ADS-B referenced to OM E; low coastal-plain terrain; in-ARTCC metro fields (KJFK/KEWR/KLGA/KPHL/KTEB) + KBOS adjacent; Atlantic warning-area/MOA SUA; domestic 91.185 contingency; winter nor'easter + summer convection/tropical + GDP/ground-stop flow note. Parent area brief: North America; oceanic continuation: North Atlantic. VATUSA ZNY (ZNY-1000 Rev F) cross-checked. |
