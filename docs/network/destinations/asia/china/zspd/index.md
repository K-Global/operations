# ZSPD — Pudong · Airport Briefing

**ZSPD / PVG** · Pudong, Shanghai, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public cross-check build, primary-AIP verification pending

> **Read-me:** Planning aid for the sim, not a chart. AIP China (CAAC/AISC) is the primary source of record for this field but is subscription/registration-gated and was not reachable this pass; static data here is built from cross-checked public sources (OurAirports, SkyVector, Wikipedia, operator/press material) and flagged 🟧 where the primary AIP could not be confirmed. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | **31°08.70′N / 121°47.60′E** (31.1450, 121.79333) `[SkyVector / Navigraph-consistent cross-check]` 🟧 — OurAirports records a slightly different ARP (31.1434, 121.8050); the ~1.3 km longitude discrepancy between tier-4 sources is not resolved against the primary AIP this pass |
| Field elevation | **13 ft / 4 m AMSL** (OurAirports + SkyVector agree) 🟧 — the field's earlier internal Navigraph-derived figure of 11 ft is close but not identical; treat as pending AIP confirmation |
| Mag variation | **Not published / verify** 🟧 — AIP-China gated; no reliable dated public figure retrieved this pass |
| Time zone | **UTC+8** (China Standard Time) — no DST observed anywhere in China 🟩 |
| Runway(s) | **Four operational commercial parallel runways in two closely-spaced N–S pairs**: West pair **17L/35R** (4,000 × 60 m) and **17R/35L** (3,400 × 60 m); East pair **16L/34R** (3,800 × 60 m) and **16R/34L** (3,800 × 60 m); ~2.3–2.4 km separates the two pairs, each pair itself closely spaced (~250–430 m centreline-to-centreline) 🟧 — see §7 |
| Preferential runway | Wind/flow/CAAC-ATFM dependent; no published preferential-runway rule found — confirm configuration at planning 🟧 |
| Longest LDA | **4,000 m** (17L/35R) — based on published runway length, not a confirmed certified declared distance 🟧 |
| Approaches | **ILS, CAT III capability reported** (at least one runway, historically RWY 34L near Terminal 2) — extent of CAT III across all four runways **not independently confirmed** this pass 🟧 |
| RFF category | **Not published / verify** 🟧 |
| Control type | **Radar** — Shanghai Approach (multi-sector) on the field; **Shanghai (ZSHA) ACC/FIR** en route — see [Asia airspace brief](../../../../airspace/asia.md) |
| Elevation class | **Sea-level / coastal reclaimed land** — not hot-and-high; no density-altitude performance driver 🟩 |
| Special-airport status | None found in reachable sources; the standing crew-briefing item is the **four-runway, two-independent-pair geometry** plus **typhoon-season weather volatility** — see §5 |
| Customs / PoE | **Yes** — China's busiest international gateway (35.25M international pax); T1/T2 and the S1/S2 satellite halls handle international arrivals; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company alternates | **ZSSS (Shanghai Hongqiao), ZSHC (Hangzhou Xiaoshan)** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 20 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Yangtze-delta coastal/reclaimed land at 4 m AMSL; no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | All four commercial runways (3,400–4,000 m) are ample for any K Global widebody type; non-limiting. |
| Approach availability / minima | 🟧 | CAT III capability reported at the field; per-runway category/minima table not confirmed from a primary source this pass. |
| Airspace / traffic / control | 🟥 | Among the busiest terminal areas on Earth; four-runway, two-independent-pair geometry, plus a **dual-airport Shanghai metroplex** sharing airspace with Hongqiao (ZSSS), ~23 NM away — see §3.2. |
| Weather / seasonal hazard | 🟥 | **NW-Pacific/East China Sea typhoon season (~May–Nov, peak Jul–Sep)** routinely forces mass cancellations and ground stops — the field's defining hazard. See §3.4/§14. |
| Curfew / slots / hours | 🟧 | Widely reported as a slot-coordinated field (alongside Beijing/Guangzhou/Shenzhen/Hongqiao); exact IATA coordination level not confirmed from a primary list. No published hard curfew found — see §6. |
| RFF category vs our types | 🟧 | Not published — confirm before treating as adequate for our largest type. |
| Fuel availability | 🟩 | Sole into-plane supplier (SPIA joint venture) confirmed by name — see §6/§16. |
| Customs / handling / security | 🟩/🟧 | Major confirmed international PoE; exact desk hours, and current widebody terminal/gate assignment amid the T3 build-out, not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ZSPD sits at **4 m / 13 ft AMSL** on reclaimed coastal land in the Yangtze River delta, east of central Shanghai and directly adjacent to the East China Sea coastline. There is **no close-in high terrain** relevant to arrival, departure, or missed-approach paths — this is a non-issue field for CFIT. The coastal/reclaimed-land setting does carry two related but non-terrain watch-items: **wildlife/bird activity** from the surrounding coastal wetlands (monitor NOTAM/bird-activity advisories), and **drainage/standing-water risk on the airfield during typhoon-season deluge rainfall** (a contamination, not a terrain, threat — see §3.3/§3.4).

### 3.2 Airborne conflict / traffic 🟥
Shanghai Pudong is one of the busiest airports on the planet (84.99M passengers in 2025, China's busiest field and the country's busiest international gateway) operating **four parallel runways as two independent, closely-spaced N–S pairs** — a geometry that demands continuous awareness of which pair is active for arrivals vs departures and whether the two runways within a pair are running dependent (non-simultaneous) operations. Compounding this, ZSPD shares its terminal airspace and the overlying **Shanghai (ZSHA) ACC/FIR** with **Shanghai Hongqiao (ZSSS)**, a major domestic/regional airport only ~23 NM away — a genuine **dual-airport metroplex** that drives sustained sequencing, holding, and cross-traffic complexity during peak banks. A separate, non-parallel **fifth runway (15/33, 3,400 m)** is reserved exclusively for COMAC C919 test flights and is not part of the commercial runway system, but its activity is a NOTAM awareness item for anyone flying visual references near the field. Cross-ref the [Asia airspace brief](../../../../airspace/asia.md), which flags **China's strict, centralised CAAC ATFM/flow control (CTOT, MINIT, ground holding)** as a defining regional procedure that applies fully at this field.

### 3.3 Runway excursion 🟧
No displaced thresholds or declared-distance detail were found in reachable public sources for any of the four commercial runways — flagged, not independently confirmed either way. A serious historical case underlines the excursion/rejected-takeoff threat here: on **28 November 2009**, **Avient Aviation Flight 324**, a McDonnell Douglas MD-11F cargo freighter, failed to become airborne during its takeoff roll at ZSPD; the tail struck the runway and the aircraft overran the runway end, killing 3 of 7 crew. The subsequent investigation found the throttle levers had not been advanced to the required takeoff setting, a discrepancy the crew detected but did not correct in time — with fatigue and training cited as contributing factors. The case is a standing reminder of strict thrust-setting verification and RTO/decision discipline at this field, independent of any runway-specific declared-distance limitation.

### 3.4 Weather threat 🟥
The **North-West Pacific/East China Sea typhoon season (~May–November, peak July–September)** is ZSPD's signature and most consequential hazard, with a well-documented history of mass disruption: **Typhoon Bebinca** (Sept 2024) forced cancellation of essentially all flights; **Typhoon Chanthu** (Sept 2021) cut scheduled operations by ~80% from the morning of 13 Sept, with a full stop from 11:00; **Typhoon Lekima** (2019) forced ~2,000 nationwide cancellations with ZSPD alone seeing ~83% of movements delayed an average of two hours; and as recently as this year, **Typhoon Noul** (2026) produced roughly 650 delays and 60 cancellations at the field. Plan for the realistic possibility of a same-day full ground stop in season. Outside typhoon season, summer brings the standard East-China **afternoon convective/thunderstorm risk**, and winter brings occasional **fog/haze** episodes that reduce visibility — the direct operational reason CAT III infrastructure has been progressively installed at the field (§9). Winter cold is mild by regional standards (subtropical climate) but light icing/sleet is possible on the coldest days — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for the general procedure; ZSPD is not a high-de-icing-demand field compared with temperate/continental hubs.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) **China's strict, centralised CAAC ATFM/flow control** (CTOT, MINIT spacing, short-notice ground holding) applies in full at this high-density field — see the [Asia airspace brief](../../../../airspace/asia.md) §6; (2) the **two-independent-pair, four-runway geometry** requires correct identification of the active pair and the dependent/independent status within it; (3) **typhoon-season operational risk** (§3.4) is not a rare tail event here but a recurring, near-annual planning input; and (4) ZSPD is simultaneously one of the world's largest **passenger and cargo gateways** (FedEx, UPS and DHL Asia-Pacific hubs, plus the PACTL cargo terminal operator) — expect heavy freighter traffic sharing the same runway/taxiway system, particularly around the cargo apron areas. RFF category and exact CAT III/ILS-per-runway detail remain open items (§18) rather than safety-critical gaps identified this pass.

---

## 4. Cautions & Warnings

- **Typhoon season (~May–Nov, peak Jul–Sep)** can force a same-day, airport-wide ground stop with limited warning — always hold a weather-independent alternate and extra fuel/holding margin in season.
- **The four runways operate as two independent, closely-spaced N–S pairs, not four freely-interchangeable runways** — confirm the active pair and whether the two runways in that pair are running dependent or independent operations before briefing an approach/departure.
- **A separate, non-parallel fifth runway (15/33) is reserved for COMAC C919 test flights** — not part of scheduled commercial ops, but check NOTAMs for test-flight activity/restrictions near the field.
- **Historical RTO/runway-excursion case (Avient Aviation Flight 324, 2009, MD-11F)** — a reminder of strict thrust-setting cross-check and rejected-takeoff decision discipline; not a runway-specific limitation.
- **Dual-airport Shanghai metroplex** — Hongqiao (ZSSS) is only ~23 NM away and shares the Shanghai (ZSHA) terminal/en-route airspace; expect sequencing/holding complexity during peak banks feeding either field.
- **Coastal wetland proximity** — monitor NOTAM/bird-activity advisories; also expect standing-water/drainage issues on the airfield during the heaviest typhoon-season rainfall.
- Mag variation, RFF category, exact CAT III/ILS coverage per runway, and declared distances are all sourced to tier-4 cross-checks or unconfirmed — treat as 🟧 pending a live-AIP cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **two-independent-pair four-runway geometry** and the **typhoon-season weather volatility**. 🟥
- **Crew-qualification gate:** CAT II/III currency recommended given the field's reported low-visibility infrastructure and periodic fog/haze; confirm crew/aircraft currency before planning a low-vis arrival in season. 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction, or specific SID/STAR prohibition found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard PRC international arrival requirements apply; China requires prior overflight/operating permits for foreign operators on many routings — see the [Asia airspace brief](../../../../airspace/asia.md) §9 for the regional permit picture. Confirm operator-specific permit status at planning. 🟧
- **Operations notes:** Airport operator — **Shanghai Airport Authority** (Shanghai International Airport Co.); ANSP presumed to be the **CAAC East China Air Traffic Management Bureau**, not independently confirmed by name this pass. Multiple third-party and airline-affiliated ground handlers operate at the field (see Dispatch §5).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 given the field's scale and international-gateway status; not independently confirmed | 🟧 |
| AD operating hours | No published restricted operating-hours window found; airport markets an extended/night-flight service window (~01:00–06:00) as a passenger convenience, implying no blanket overnight closure | 🟧 |
| Night / curfew restrictions | **No published hard flight-movement curfew found** in reachable sources — unlike some regional peers; confirm against AIP GEN 2.2 / AD 2 hours of operation | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 — sole into-plane supplier is **Shanghai Pudong International Airport Aviation Fuel Supply Co. (SPIA)**, a joint venture of Shanghai International Airport Co. (40%), China Aviation Oil (33%) and Sinopec Shanghai Gaoqiao (27%); hours not independently confirmed | 🟩/🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Major international PoE (T1/T2, S1/S2 satellite halls); exact desk hours not confirmed | 🟧 |
| Handling / FBO | Multiple handlers reported, incl. **FASCO** and China Eastern-affiliated ground service for airline traffic, plus dedicated cargo handling via **PACTL** (Pudong International Airport Cargo Terminal Co.) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 17L | 4,000 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~4,000 m (length-based, not a certified LDA) 🟧 | Longest commercial runway; West pair |
| 35R | 4,000 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~4,000 m 🟧 | Reciprocal of 17L; West pair |
| 17R | 3,400 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~3,400 m 🟧 | West pair, closely spaced with 17L/35R (~250 m) |
| 35L | 3,400 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~3,400 m 🟧 | Reciprocal of 17R; West pair |
| 16L | 3,800 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~3,800 m 🟧 | East pair, closely spaced with 16R/34L (~430 m) |
| 34R | 3,800 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~3,800 m 🟧 | Reciprocal of 16L; East pair |
| 16R | 3,800 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~3,800 m 🟧 | East pair |
| 34L | 3,800 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~3,800 m 🟧 | Reciprocal of 16R; East pair. Historically the field's first CAT III-equipped runway (near T2) |
| 15/33 | 3,400 × 60 m | Not published 🟧 | — | — | — | — | **Separate, non-parallel runway reserved for COMAC C919 test flights only — not used for scheduled commercial ops** |

*Figures are cross-checked between OurAirports and SkyVector (independent tier-4 sources, in agreement on dimensions); no primary AIP declared-distance table (TORA/TODA/ASDA) was reachable this pass — treat all distance figures as length-based estimates pending AIP confirmation. The West pair (17L/35R + 17R/35L, ~250 m apart) and East pair (16L/34R + 16R/34L, ~430 m apart) are separated from each other by ~2.3–2.4 km, consistent with published descriptions of ZSPD as "two closely-spaced parallel runway pairs" operating largely independently of one another. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Shanghai/Pudong ATIS | 127.85 | Assumed H24 🟧 | |
| Delivery | Pudong Delivery | 121.62 / 121.95 | Assumed H24 🟧 | Multiple positions reported across sources |
| Ground | Pudong Ground | 121.62 / 121.65 (West) / 121.70 / 121.80 (East) / 121.87 | Assumed H24 🟧 | Sectorised East/West — take the assigned position |
| Apron | Pudong Apron | 121.65 / 121.97 / 122.12 / 122.60 / 122.70 | Assumed H24 🟧 | Ramp/taxi control |
| Tower | Pudong Tower | 118.32 / 118.40 (East) / 118.57 / 118.72 / 118.80 (17L/35R) / 124.35 (17R/35L) | Assumed H24 🟧 | Multiple positions by runway/sector — take the assigned frequency |
| Approach | Shanghai Approach | 119.07 / 119.20 / 119.75 / 120.30 / 120.65 / 121.10 / 121.37 / 123.80 / 124.05 / 125.40 / 125.62 / 125.85 / 126.30 / 126.65 / 128.05 | Assumed H24 🟧 | Very high sector count reflects the dual-airport Shanghai TMA workload |
| Emergency | Shanghai/Pudong Emergency | 121.50 | H24 | Guard |
| Centre / FIR | Shanghai (ZSHA) ACC | Per current AIRAC | H24 | See [Asia airspace brief](../../../../airspace/asia.md) |

*Source: OurAirports and SkyVector frequency listings cross-checked against each other (both tier-4, independently agree on the great majority of values); no primary AIP communications table reached this pass — treat exact current-cycle frequencies as 🟧 pending live-AIRAC cross-check. The sheer number of distinct Approach sectors is itself a strong signal of the field's traffic density.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | PUD (Pudong) | 116.90 | Assumed H24 🟧 | On-field, ~1.7 NM from ARP |
| VOR | PDL (Liuzao) | 109.40 | Assumed H24 🟧 | ~6.3 NM |
| VOR | XSY (Shuyuan) | 112.70 | Assumed H24 🟧 | ~13.4 NM |
| VOR | HSH (Hengsha) | 114.40 | Assumed H24 🟧 | ~13.6 NM |
| ILS | Not individually confirmed by ident/frequency this pass | — | — | **CAT III capability reported** at the field, historically first deployed on RWY 34L (near Terminal 2); per-runway ILS ident/frequency/category table not found in reachable public sources 🟧 |

*Source: SkyVector nearby-navaid listing (tier-4); a 2018-era operator/press item confirms CAT III deployment history on RWY 34L specifically but does not give a current all-runway ILS table. No primary AIP navaid table reached this pass.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) expected in Chinese continental airspace — confirm no local override on current chart.
- **Preferential runway logic:** Wind/flow/CAAC-ATFM dependent; which of the two independent runway pairs (West 17/35 or East 16/34) is active, and the in-pair dependent/independent status, are set tactically by Shanghai Approach/Tower — not a published fixed rule.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 17L/35R, 17R/35L, 16L/34R, 16R/34L | ILS (name/ident not confirmed this pass) 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | CAT III capability reported at the field generally; confirm per-runway category on current chart |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Triggered by seasonal fog/haze episodes; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal delta); the operative missed-approach concern is re-sequencing into a very high-density, dual-airport (ZSPD/ZSSS) metroplex traffic environment under CAAC flow control.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** China implements RNAV 5/RNP enroute, RNP 1 terminal SIDs/STARs and RNP APCH across its continental FIRs, including Shanghai (ZSHA) — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). Confirm gradient/equipage per SID on the current chart.
- **Take-off minima:** Published per AIP — not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** Widely reported as slot-coordinated; **China's centralised CAAC ATFM (CTOT, MINIT, ground holding)** applies as standard practice at this high-density field — see [Asia airspace brief](../../../../airspace/asia.md) §6. 🟧
- **De-icing:** Mild subtropical climate; occasional light icing/sleet possible on the coldest winter days but ZSPD is not a high-demand de-icing field compared with temperate/continental hubs. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody international traffic concentrates around **Terminal 1**, **Terminal 2**, and the **S1/S2 satellite concourses** (the world's largest single-building satellite terminal, 622,000 m², opened Sept 2019), connected to T1/T2 by an automated people mover (West line T1↔S1, East line T2↔S2). A dedicated **Terminal 3** is under construction (started 2021, south side of the field) to raise capacity from 60M to 80M passengers and add freight capacity; current-day widebody gate assignment ahead of T3's opening is not confirmed. 🟧 | 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; the two-independent-pair runway geometry (§7) drives which taxiway system serves the active runway pair.
- **Hot spots / tight taxiways:** Not identified by name in reachable public sources — confirm with Ground/Apron and the current chart. 🟧
- **Follow-me:** Not confirmed. 🟧
- **Cargo apron:** ZSPD is a major cargo gateway — dedicated freighter/cargo apron areas serve **PACTL** (Pudong International Airport Cargo Terminal Co., ~2M tonnes/year throughput, 190,000 m² covered storage, 100,000-tonne cool-chain capacity) plus dedicated **FedEx** (Shanghai Hub, 134,000 m², ~36,000 packages/hr, 66 weekly flights), **UPS** (international transfer centre) and **DHL** (Asia's largest express hub, opened 2012, 88,000 m²) facilities — expect significant freighter ground movement sharing the runway/taxiway system, particularly on the East side of the field near the cargo terminals.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical (Yangtze-delta coastal) climate; four distinct seasons, hot humid summers, mild winters.
- **Seasonal hazards:** **NW-Pacific/East China Sea typhoon season (~May–Nov, peak Jul–Sep)** is the field's defining hazard — recurring mass cancellations/ground stops (§3.4). Summer also brings **afternoon convective thunderstorms**. Winter brings occasional **fog/haze** episodes reducing visibility (the operational basis for CAT III infrastructure) and, rarely, light sleet/icing.
- **Local effects:** Coastal/estuarine location may support **sea-breeze effects** and localised convective enhancement; no significant terrain-driven local effect given the flat reclaimed-land setting.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories (JMA/CMA/JTWC). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, CAAC ATFM/flow-control measures, tropical-cyclone advisories in season, and **COMAC C919 test-flight activity** on the separate RWY 15/33. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — East China / Yangtze-delta gateway; not a K Global base (`Base: No` `[VAMSYS mirror 2026-07-26]`).
- **Nearest suitable alternates:** Company alternates **ZSSS (Shanghai Hongqiao), ZSHC (Hangzhou Xiaoshan)** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg; note ZSSS shares the same congested Shanghai (ZSHA) terminal airspace, so a weather-driven diversion may still face the same typhoon/flow-control conditions.
- **Fuel-uplift notes:** Jet A-1, sole into-plane supplier **SPIA** (joint venture, §6). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting for any K Global type on any of the four commercial runways. ZSPD is also a common departure/arrival point for **trans-Pacific and East-China-Sea over-water legs** — see [`OM E — ETOPS-EDTO Procedures`](../../../../../flight-ops/etops-edto.md) for diversion/escape-time planning on those routings, and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty confirmed for any K Global type — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). ZSPD's role as one of the world's largest cargo gateways (FedEx/UPS/DHL Asia-Pacific hubs, PACTL terminal) is relevant context should the network's cargo unit ever route through this field — no K Global freighter operation at ZSPD is confirmed this pass.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP China (CAAC/AISC)** was not reachable this pass (subscription/registration-gated) — every figure below should be re-verified against it before the field moves to `Verified` status.
- **ARP** — two tier-4 sources disagree by ~1.3 km in longitude (SkyVector/Navigraph vs OurAirports); not resolved against a primary source.
- **Field elevation** — 13 ft (OurAirports/SkyVector) vs the field's earlier internal 11 ft figure; not reconciled.
- **Magnetic variation** — not published in any reachable source this pass.
- **Declared distances (TORA/TODA/ASDA/LDA)**, **PCN**, and **RFF category** for all runways — not published in reachable public sources; runway-length figures used as a proxy only.
- **ILS ident/frequency/category per runway** — CAT III capability reported historically for RWY 34L only; current all-runway coverage not confirmed.
- **SIDs/STARs (current names)** and **take-off/landing minima** — not obtained this pass; pull the live current-AIRAC procedure list before use.
- **Displaced thresholds** — not confirmed either way.
- **Curfew / exact slot-coordination level (IATA Level 2 vs 3)** — widely reported as coordinated; not confirmed from a primary IATA list.
- **ATS/customs desk hours** — assumed H24 given the field's scale; not independently confirmed.
- **Ground handling agent(s) for our operation**, **taxiway hot-spot names**, **noise-abatement procedure**, **take-off minima**, and **push-back policy** — none confirmed in reachable sources.
- **Terminal/gate assignment for widebody international traffic** amid the ongoing Terminal 3 build-out — not confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ZSPD/runways.html and /frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway dimensions, frequency cross-check.*
- SkyVector — https://skyvector.com/airport/ZSPD/Shanghai-Pudong-Airport (retrieved 2026-07-26). *ARP, runway coordinates/headings, communications, nearby navaids.*
- Wikipedia — "Shanghai Pudong International Airport" — https://en.wikipedia.org/wiki/Shanghai_Pudong_International_Airport (retrieved 2026-07-26). *History, terminal/runway build-out timeline, traffic statistics, hub-carrier and cargo-hub detail, C919 test-runway footnote.*
- Aviation Week — "Shanghai Pudong Airport to Open Fifth Runway This Year" — https://aviationweek.com/air-transport/airports-networks/shanghai-pudong-airport-open-fifth-runway-year (retrieved 2026-07-26). *Fifth (C919 test-only) runway, 3,400 m, separate alignment.*
- SHINE News — "Pudong airport deploys low-visibility landing system" — https://www.shine.cn/news/metro/1803011072/ (retrieved 2026-07-26). *CAT III ILS deployment history, RWY 34L.*
- Caixin Global / Global Times — Sinopec–CNAF restructuring coverage, and SPIA ownership detail — https://www.caixinglobal.com/2026-01-09/sinopec-to-take-over-aviation-fuel-monopoly-cnaf-in-state-led-merger-102401852.html and https://www.globaltimes.cn/page/202607/1365748.shtml (retrieved 2026-07-26). *Fuel-supply structure at ZSPD (SPIA joint venture).*
- PACTL / Wikipedia — https://en.wikipedia.org/wiki/PACTL (retrieved 2026-07-26). *Cargo terminal operator, throughput/capacity figures.*
- FedEx Newsroom — "New Shanghai International Express and Cargo Hub" — https://newsroom.fedex.com/newsroom/asia-english/new-shanghai-international-express-cargo-hub-extends-fedex-operational-strength-customers-asia-pacific-2 (retrieved 2026-07-26). *FedEx Shanghai Hub detail.*
- China Daily — "DHL opens Pudong Airport center" — http://www.chinadaily.com.cn/regional/saa/2013-05/16/content_16505019.htm (retrieved 2026-07-26). *DHL Asia hub detail.*
- AVHerald — "Crash: Avient Aviation MD11 at Shanghai on Nov 28th 2009, overran runway on takeoff" — https://avherald.com/h?article=423638d8 (retrieved 2026-07-26). *Runway-excursion historical case.*
- Wikipedia — "Avient Aviation Flight 324" — https://en.wikipedia.org/wiki/Avient_Aviation_Flight_324 (retrieved 2026-07-26). *Accident cause/investigation summary.*
- AeroTime / nomadlawyer.org — Typhoon Bebinca (2024), Typhoon Chanthu (2021), Typhoon Lekima (2019) and Typhoon Noul (2026) disruption coverage — https://www.aerotime.aero/articles/shanghai-sees-massive-flight-cancellations-as-typhoon-bebinca-hits and https://www.nomadlawyer.org/typhoon-noul-disrupts-china-aviation-delays-cancellations-2026 (retrieved 2026-07-26). *Typhoon-season disruption pattern.*
- Schedule Coordination Japan (APACA) — China ATFM/coordinated-airport reference list — https://www.schedule-coordination.jp/apaca/db%20pdf/china.pdf (retrieved 2026-07-26). *Slot-coordination cross-check (tier-4).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
