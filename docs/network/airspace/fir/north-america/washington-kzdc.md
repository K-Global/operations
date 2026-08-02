# Washington ARTCC (KZDC) — FIR Briefing

**Scope:** single ARTCC (US domestic "FIR") — the mid-Atlantic: Maryland, Pennsylvania, West Virginia, Delaware, New Jersey, Virginia and North Carolina, containing **Washington Dulles Intl (KIAD)** and the **Washington, DC Special Flight Rules Area / Flight Restricted Zone (SFRA/FRZ)** · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · **Adjacent ARTCCs:** New York (KZNY) N/NE · Boston (KZBW) NE corner-contact 🟧 · Cleveland (KZOB) NW · Indianapolis (KZID) W · Atlanta (KZTL) SW · Jacksonville (KZJX) S
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Washington Center is a **fully radar/ADS-B-controlled continental ARTCC** and the **4th-busiest ARTCC in the United States**. Its defining structural feature is the **DC SFRA/FRZ security airspace** nested around Ronald Reagan Washington National (KDCA) — a 30 nm-radius Special Flight Rules Area with an inner ~15 nm-radius Flight Restricted Zone — through which our destination, **Washington Dulles (KIAD)**, sits as a scheduled-IFR international gateway operating under its own established access procedures rather than the general-aviation SFRA rules. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances and any security-airspace instructions issued by ATC. Terminal procedures for KIAD live in the airport briefing (§9). Live restrictions (NOTAMs, TFRs, SFRA/FRZ status) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / control ident | **KZDC** — Washington ARTCC ("Washington Center"); US domestic Class A enroute. Facility located in Leesburg, Virginia. Underlying terminal facility: **Potomac TRACON (PCT)** for the KIAD/KDCA/KBWI mid-Atlantic metroplex |
| Controlling ATSU / ANSP | **FAA Air Traffic Organization** — Washington ARTCC. One facility works low + high + super-high sectors; no separate upper-airspace unit |
| Airspace class & vertical limits | US **Class A FL180–FL600** enroute; terminal **Class B** at the Washington metro (PCT) — terminal detail in the airport brief (§9) 🟧 |
| RVSM | 🟥 Applicable **FL290–FL410** (14 CFR 91.180) — see OM E §5 |
| PBN environment | RNAV enroute (Q-route high / T-route low) · RNAV SID/STAR at the metro · RNP APCH arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B**; domestic datalink not required (VHF continuous) |
| Primary language & comms | 🟩 **VHF throughout; English** |
| Key hazard(s) | 🟥 **DC SFRA/FRZ security airspace** — special ATC handling, discrete-squawk/flight-plan rules for GA traffic, and a hard **prohibited-airspace core (P-56, National Mall/Capitol/White House)** that must never be overflown, at any altitude, without explicit authorisation 🟥 · high traffic density typical of the mid-Atlantic corridor · **hurricane-season remnants and severe convection** reaching inland from the Atlantic/Gulf in summer–autumn |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/ADS-B-controlled — no procedural segment. |
| Communication coverage & language | 🟩 | Continuous VHF; English. |
| Datalink / surveillance requirement | 🟥 | **ADS-B Out mandatory** — FAA 14 CFR 91.225; **1090ES required ≥ FL180**, effective 01 JAN 2020. |
| Terrain / MORA / driftdown | 🟧 | Low to moderate — the Blue Ridge/Appalachian ridge-and-valley belt crosses the western part of the ARTCC (western VA/WV/western NC); not a factor for the KIAD terminal area itself, which is low/rolling Piedmont. §8. |
| Diversion-aerodrome coverage | 🟩 | Dense mid-Atlantic coverage — curated brief exists for KIAD (§9); KDCA, KBWI and others inside the ARTCC are not yet briefed. |
| Special-use airspace (military / danger) | 🟥 | The **DC SFRA (30 nm radius)** and inner **FRZ (~15 nm radius)** around KDCA, plus the **P-56 prohibited area** over the National Mall/Capitol/White House core — durable, permanent security airspace, distinct from ordinary military SUA. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV (Q/T routes, RNAV SID/STAR) · Mode S + ADS-B Out (1090ES ≥ FL180).** All defined in OM E; confirm current-AIRAC route/STAR. §5. |

---

## 3. ARTCC structure & lateral/vertical boundaries

- **Lateral extent:** Washington Center covers **165,000 sq mi (≈430,000 km²)** across Maryland, Pennsylvania, West Virginia, Delaware, New Jersey, Virginia and North Carolina. In 2024 the facility handled **2,468,399 aircraft operations**, ranking it the **4th busiest** of the 22 US ARTCCs.
- **Vertical structure:** as with any US ARTCC, **one facility** works the whole column, low through super-high. Public reference (see §Sources) describes the airspace as **8 numbered areas (1–8)** comprising **46 sectors** — **18 low-altitude, 14 high-altitude, 5 super-high-altitude** and **4 other-type sectors** (1 combined high/low, 3 intermediate). 🟧 (area/sector detail — tier-4 corroboration; re-verify against current FAA ENR/facility documentation.)
- **Adjacent ARTCCs (by boundary):**
  - **N/NE — New York (KZNY, FAA).** New York, New Jersey and eastern Pennsylvania; shares the busy Northeast Corridor traffic flow.
  - **NE — Boston (KZBW, FAA), corner-contact.** 🟧 (per public reference Boston lists Washington as an adjacent facility; exact boundary segment to verify.) See [Boston (KZBW)](boston-kzbw.md).
  - **NW — Cleveland (KZOB, FAA).** Western Pennsylvania / Ohio approaches.
  - **W — Indianapolis (KZID, FAA).** 🟧 (adjacency inferred from ZDC's western coverage into WV/western VA — verify FAA boundary charts.)
  - **SW — Atlanta (KZTL, FAA).** The southbound flow toward the Southeast; Area 8 of ZDC coordinates handoffs to Atlanta per public reference.
  - **S — Jacksonville (KZJX, FAA).** North Carolina coastal approaches toward Florida.
- **Sectorisation:** the whole column is one FAA facility (no separate UAC); the 8-area / 46-sector set combines and splits tactically with traffic, and the Washington-metro terminal airspace is delegated to **Potomac TRACON (PCT)**.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **Washington ARTCC (KZDC, FAA)** — radar/ADS-B control of the full column across the 8 areas / 46-sector set, feeding the metro TRACON.
- **Terminal facility inside the ARTCC:** 🟩 **Potomac TRACON (PCT)** sequences the KIAD/KDCA/KBWI Class B metroplex — one of the more complex US terminal facilities given the overlaid security airspace (§10). Terminal procedures for KIAD are in the airport briefing (§9).
- **FIS / FSS:** US **Flight Service** (Leidos) provides flight-information/advisory service; not a factor for an IFR hub transit remaining in controlled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal domestic IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Washington ARTCC and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — required per **14 CFR 91.180**. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 RNAV enroute on the **Q-route (high-altitude RNAV)** and **T-route (low-altitude RNAV)** structure; **RNAV SID/STAR** and **RNP APCH** at the metro terminals. Standard RNAV-1/RNAV-2 airframe capability suffices. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟩 **not required** — VHF voice continuous; PDC available at major terminals. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** with **ADS-B Out** required — **14 CFR 91.225**; **1090ES required at and above FL180** (UAT/978 MHz permitted only below 18,000 ft), effective 01 JAN 2020. Within the DC SFRA, a **discrete transponder code and continuous ATC contact** are additionally required by regulation for the airspace generally (§10) — a scheduled IFR arrival/departure operating under a standard ATC clearance is normally covered by the IFR exception to the SFRA's GA-specific flight-plan rule, but this should be confirmed against 14 CFR Part 93 Subpart V. 🟧

---

## 6. Communications & frequencies

- **ARTCC sectors / frequencies:** a KIAD transit is worked through Washington Center's low/high sectors and handed to the adjacent ARTCC (**New York / Boston / Cleveland / Indianapolis / Atlanta / Jacksonville**) or to **Potomac TRACON (PCT)** at the terminal end; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **FIS / advisory:** US **Flight Service** (Leidos) for flight-information/advisory service in uncontrolled airspace.
- **Language:** 🟩 **English**.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 US high-altitude **jet-route / Q-route (RNAV)** structure; the mid-Atlantic corridor shares in the same preferential/flow-managed routing regime as the wider Northeast Corridor (New York/Boston).
- **Terminal & security-airspace-driven routing:** 🟥 arrivals/departures at KIAD are sequenced by **Potomac TRACON** with published **RNAV SID/STAR** procedures that route around the DC SFRA/FRZ core rather than direct through it; ATC assigns the security-compliant routing tactically. 🟧 (exact current STAR/SID by AIRAC/runway config — pull on the day.)
- **Major fixes / entry-exit points:** the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance). 🟧
- **Hubs & aerodromes inside the ARTCC:** 🟩 **Washington Dulles Intl (KIAD)**, plus Ronald Reagan Washington National (KDCA), Baltimore/Washington Intl (KBWI), Richmond Intl (KRIC), Raleigh-Durham (KRDU) and Norfolk Intl (KORF). Terminal detail for KIAD is in the airport briefing (§9); the others are not yet briefed (§12).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 the Washington-metro/KIAD terminal area itself sits on **low, rolling Piedmont** terrain — not a factor for arrival/departure. Further west, the ARTCC's boundary crosses the **Blue Ridge and Appalachian ridge-and-valley belt** across western Virginia/West Virginia and western North Carolina (highest points in the region approach ~5,700 ft, e.g. Mount Rogers, VA). 🟧 (per-quadrant grid-MORA and exact peak data — verify FAA ENR charts / USGS.)
- **Boundary terrain:** the higher southern Appalachians (Great Smoky Mountains, >6,000 ft) lie further southwest, mostly outside KZDC in adjacent ARTCC territory (Atlanta/Jacksonville boundary area).
- **Driftdown / depressurisation escape:** not a terrain-limited problem for a KIAD-area transit at cruise — the western ridge belt is well clear of RVSM levels for an eastbound arrival, and diversion-field density in the mid-Atlantic corridor is high (§9).
- **Cold-temperature altitude corrections:** not typically a driver at KIAD (low/temperate Piedmont); relevant only at higher-elevation western fields if used as alternates — see OM E.

---

## 9. Diversion aerodromes within the ARTCC

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Washington Dulles Intl | **KIAD** | Primary in-ARTCC hub / dep-return alternate | [KIAD brief](../../../destinations/north-america/united-states/kiad/index.md) |
| Ronald Reagan Washington National | **KDCA** | Co-terminal alternate (PCT); short runways, inside the FRZ core, slot/perimeter-rule restrictions | Brief to build 🟧 |
| Baltimore/Washington Intl | **KBWI** | Co-terminal alternate (PCT); full international, outside the FRZ | Brief to build 🟧 |
| Richmond Intl | **KRIC** | Southern in-ARTCC alternate | Brief to build 🟧 |
| Raleigh-Durham Intl | **KRDU** | Southern-boundary alternate | Brief to build 🟧 |
| Norfolk Intl | **KORF** | Coastal/Hampton-Roads alternate | Brief to build 🟧 |

- **Coverage note:** 🟩 dense mid-Atlantic coverage — KDCA and KBWI give in-ARTCC redundancy close to KIAD, KRIC/KORF/KRDU extend coverage south. ETP/critical-point planning is not a driver in this radar-controlled continental ARTCC; the operational constraints are **flow/capacity** and the **security-airspace routing overlay** (§10), not field spacing.

---

## 10. Special-use airspace

- **DC Special Flight Rules Area (SFRA) — 🟥 permanent security airspace:** a roughly circular area of **30 nautical miles radius** centred on the Washington, DC (KDCA) VOR/DME, established (as the former DC ADIZ) after 11 September 2001 and made a permanent federal rule; codified at **14 CFR Part 93, Subpart V**. General-aviation traffic within the SFRA must file a discrete SFRA flight plan/squawk and remain in continuous ATC contact; special online training is required to operate within it.
- **DC Flight Restricted Zone (FRZ) — 🟥 inner, more restrictive ring:** nested inside the SFRA, extending approximately **15 nautical miles** around KDCA, with materially tighter access requirements (further restricted for most GA traffic; KDCA, KIAD and KBWI — the "DCA-3" airports — carry their own established procedures for scheduled/based traffic).
- **P-56 prohibited area — 🟥 hard core, never to be overflown:** covers the **National Mall / US Capitol / White House** complex at the centre of the FRZ; permanently prohibited to all aircraft regardless of altitude or clearance.
- **KIAD's position:** 🟧 Dulles sits within the 30 nm SFRA ring (roughly 26 nm from the KDCA VOR) but, as a major scheduled-IFR international gateway, operates under its own established access procedures distinct from the general-aviation SFRA rules; our operation is IFR throughout under a standard ATC clearance. **Confirm the exact regulatory basis and any residual squawk/flight-plan requirement against 14 CFR Part 93 Subpart V before relying on this note operationally.**
- **Military / other restricted areas:** 🟧 assorted smaller restricted areas and MOAs across western Virginia/West Virginia; normally clear of a high-level KIAD transit but confirm active status at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — US domestic operation.

> **SUA currency:** re-check current SFRA/FRZ NOTAM status, any temporary security TFRs (VIP movement, National Special Security Events) and standing restricted-area activity at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply the standard **US domestic IFR lost-comms** procedure (route/altitude per last clearance / expected / filed — 14 CFR 91.185; squawk **7600**); continuous VHF coverage makes prolonged loss unlikely. Note that lost-comms inside the SFRA/FRZ carries elevated intercept risk — comply promptly with any last ATC instruction and squawk as assigned.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued; deviations near the SFRA/FRZ boundary require particular attention to the security-airspace edge. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Summer — convection & hurricane-season remnants (Jun–Nov):** frontal thunderstorms and, periodically, the inland remnants of Atlantic/Gulf tropical systems reaching the mid-Atlantic, driving reroutes and ground delay programs through the corridor.
  - **Winter — mixed-precipitation events:** the mid-Atlantic sits on the rain/snow/ice line, producing freezing-rain and mixed-precipitation events that are more disruptive to deicing/ground ops than pure snow further north.
  - **Convective squall lines** tracking along the I-95 corridor in spring/summer, shared with the New York/Boston flow-management picture.

> **Pull at planning (T-2h):** enroute NOTAMs, SFRA/FRZ status and any security TFRs, TFRs generally, SIGMET/AIRMET (convection, icing), and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **KZDC boundary segments** with Boston (NE corner-contact) and Indianapolis (W) — verify FAA / facility boundary charts.
- **Area/sector configuration** (8 areas, 46 sectors) — tier-4 public-reference corroboration only; re-verify against current FAA facility documentation.
- **KIAD's precise regulatory status within the DC SFRA** (confirm exception basis for scheduled IFR ops) — verify 14 CFR Part 93 Subpart V directly.
- Published **grid-MORA / MEA** values over the Blue Ridge/Appalachian belt (per-quadrant) — verify on FAA ENR charts.
- Current **KIAD RNAV STAR/SID** set and security-compliant routing logic — pull the day's charts.
- Standing and event-driven **security TFRs** (National Special Security Events, VIP movement) — live NOTAM at planning.
- No OM C airport briefs yet for **KDCA, KBWI, KRIC, KRDU, KORF** — build if they become planned alternates. KIAD brief linked in §9.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **FAA — 14 CFR 91.225 (ADS-B Out) & 91.180 (RVSM) & 91.185 (two-way radio comms failure)** — ADS-B airspace classes, 1090ES ≥ FL180 effective 01 JAN 2020; RVSM FL290–410; lost-comms rules — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91 (retrieved 2026-07-26).
- **eCFR — 14 CFR Part 93, Subpart V (Washington, DC Metropolitan Area Special Flight Rules Area)** — codified SFRA rule — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-93/subpart-V (retrieved 2026-07-26).
- **Wikipedia — Special flight rules area** — DC SFRA history (2003 ADIZ → permanent 2008 rule), GA flight-plan/squawk/training requirements — https://en.wikipedia.org/wiki/Special_flight_rules_area (retrieved 2026-07-26).
- **AOPA — DC Flight Restricted Zone / "DC-3" airports security brief** — SFRA ~30 nm radius, FRZ ~15 nm radius, DCA/IAD/BWI ("DCA-3") special procedures — https://www.aopa.org/advocacy/advocacy-briefs/air-traffic-services-brief-washington-d-c-flight-restricted-zone-dc-3-airports (retrieved 2026-07-26).
- **FAA — Aeronautical Information Manual (AIM), Ch. 3 (Airspace) & 4 (ATC)** — Class A FL180–FL600, Class B terminal, Q/T-route (RNAV) structure — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/ (retrieved 2026-07-26).
- **Washington Air Route Traffic Control Center — facility overview (public reference)** — coverage (MD/PA/WV/DE/NJ/VA/NC), 165,000 sq mi, 2024 traffic (2,468,399 ops, 4th busiest), 8 areas / 46 sectors (18 low/14 high/5 super-high/4 other) — https://en.wikipedia.org/wiki/Washington_Air_Route_Traffic_Control_Center (retrieved 2026-07-26). *Tier-4 corroboration for area/sector detail; boundaries and adjacency to re-verify vs FAA ENR/facility documentation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
