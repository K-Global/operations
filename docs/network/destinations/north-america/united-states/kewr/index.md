# KEWR — Newark Liberty International · Airport Briefing

**KEWR / EWR** · Newark, New Jersey, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the FAA Chart Supplement (Northeast volume, effective 2026-07-09) and standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N40°41.55′ / W74°10.12′ (40.6925, -74.1687) `[FAA Chart Supplement eff. 2026-07-09, via SkyVector]`; OurAirports cross-check gives 40.6894, -74.1705 — minor (~200 m) discrepancy, non-safety-critical 🟧 |
| Field elevation | **18 ft / 5.5 m AMSL** (OurAirports, Port Authority-sourced record) 🟧 current Chart Supplement lists a surveyed elevation of 17 ft — 1 ft difference, immaterial |
| Mag variation | 🟧 **13° W** (1985-epoch FAA facility record for the on-field ILS, consistent with the runway magnetic/true heading offset); current-day value not independently re-confirmed against current AIRAC |
| Time zone | UTC−5 (EST) / UTC−4 (EDT, US DST observed) |
| Runway(s) | **04L/22R** 11,000 × 150 ft (3,353 × 46 m), asphalt-concrete, grooved · **04R/22L** 9,999 × 150 ft (3,048 × 46 m), asphalt, grooved · **11/29** 6,725 × 150 ft (2,050 × 46 m), asphalt, grooved |
| Preferential runway | 🟧 None formally published (Port Authority terms of operation state "preferential runways — none"); config is wind- and ATC-flow driven, coordinated with the shared LaGuardia/JFK traffic flow under Philadelphia TRACON Area C |
| Longest LDA | 9,559 ft (RWY 22R) |
| Approaches | **ILS CAT II/III on 04R and 22L**; ILS/LOC + GLS (GBAS) on 04L/22R (04L also published SA CAT I/II); **RWY 11 has ILS/LOC**; **RWY 29 has no ILS — RNAV(RNP)/RNAV(GPS) and visual approaches only** (including named Bridge/Stadium visuals) — verify current AIRAC |
| RFF category | **ARFF Index E** (Class I certificated 5/1/1973) 🟩 |
| Control type | **Radar.** Historically **New York TRACON (N90)**; Newark-area approach control was relocated to **Philadelphia TRACON (Area C)** beginning 2024 following chronic N90 staffing/technology issues — an active FAA modernization program as of 2026, not yet a fully settled steady state 🟥. En route — **New York ARTCC (ZNY)** — see [North America Airspace brief](../../../../airspace/north-america.md) |
| Elevation class | Sea-level (18 ft) — **not** hot-and-high; the defining reliability driver here is **airspace congestion and ATC flow control**, not aircraft performance |
| Special-airport status | 🟥 One of the most congested, delay-prone airports in the US National Airspace System; FAA administrative order caps combined arrivals + departures at **72/hour** (through 24 Oct 2026); ASDE-X surface surveillance in use; several taxiways are **wingspan-restricted** (>171 ft / >118 ft) — see §13 |
| Customs / PoE | **Yes** — Terminal B, generally H24 for scheduled international arrivals (Global Entry/Mobile Passport Control available) 🟧 exact off-peak desk hours not independently confirmed |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred/suitable alternates | **KJFK, KPHL, KIAD** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 22 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal New Jersey meadowlands; no high terrain. All obstacles in the FAA record are man-made and close-in (poles, a tree, an antenna near runway ends). |
| Runway length vs fleet perf | 🟩 | 11,000 ft and 9,999 ft main runways are ample for any K Global widebody; 6,725 ft (11/29) is adequate for narrowbody and most widebody arrivals at typical destination weights — verify per type. |
| Approach availability / minima | 🟧 | CAT II/III on 04R/22L is a strong low-vis mitigation; **RWY 29 has no ILS** (RNAV/visual only) — a real factor if wind/config forces a 29 landing in poor visibility. |
| Airspace / traffic / control | 🟥 | The defining threat at this field — dense, constrained Class B airspace shared with JFK, LaGuardia and Teterboro; historic and ongoing ATC staffing/technology constraints; FAA-mandated hourly rate caps are directly in force — see §3.2/§3.5. |
| Weather / seasonal hazard | 🟥 | Full Northeast-US exposure: winter nor'easters and icing, summer convective activity, coastal/marsh fog — see §14. |
| Curfew / slots / hours | 🟧 | No formal curfew or slot-coordination regime in the EU sense; the operative capacity constraint is an **FAA administrative hourly rate order**, not a slot/curfew system — see §6/§12. Source is a 2011-dated Port Authority terms document; not independently re-confirmed as still current in every particular. |
| RFF category vs our types | 🟩 | ARFF Index E meets or exceeds requirement for any K Global type. |
| Fuel availability | 🟧 | Jet A confirmed generally available via FBOs (Allied Aviation Services, Signature Aviation); specific scheduled-carrier into-plane supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | Terminal B international PoE confirmed; exact CBP desk hours and current widebody gate/terminal assignment (Terminal B is mid-redevelopment) not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
KEWR sits at 18 ft AMSL in the flat New Jersey Meadowlands — there is **no close-in high terrain**. The FAA obstacle record for the field lists only man-made close-in obstacles (a 65 ft tree ~1,926 ft from RWY 04L, a 28 ft pole near RWY 22R, a 30 ft antenna near RWY 22L) — none is a CFIT driver, but they do influence approach-lighting/obstacle-clearance categorisation on individual runway ends. Verify the MSA ring on the current chart as routine practice; terrain itself is a non-issue.

### 3.2 Airborne conflict / traffic 🟥
This is the operative threat at Newark. KEWR sits inside one of the busiest and most constrained pieces of controlled airspace in the world, sharing Class B airspace and interlocking traffic flows with **JFK, LaGuardia and Teterboro**, plus a very high volume of low-level helicopter traffic (Kearny Heliport, ~3.5 NM NE, is explicitly flagged in the FAA record). Approach control for the Newark area was historically provided by **New York TRACON (N90)**; beginning in 2024 the FAA relocated this function to **Philadelphia TRACON (Area C)** after N90 suffered persistent controller-staffing shortfalls and a training/certification backlog. Through 2025, Philadelphia TRACON Area C experienced multiple documented telecommunications/radar outages affecting Newark-area control (28 Apr, 9 May, 11 May, 19 May 2025), prompting FAA administrative rate caps that remain in force into 2026 (currently 72 combined arrivals+departures/hour through 24 Oct 2026, per FAA order). Brief for sustained ATC-driven flow control (ground delay programs, ground stops, extended vectoring) as routine rather than exceptional at this field. Cross-ref [North America Airspace brief](../../../../airspace/north-america.md) for New York ARTCC (ZNY) en-route context.

### 3.3 Runway excursion 🟧
Declared distances carry **large displaced thresholds** on every runway (up to 2,541 ft on 04L, 1,794 ft on 22L) — always plan from the published LDA, never physical runway length. Two **Engineered Materials Arresting System (EMAS)** beds are installed at runway departure ends (182 × 170 ft and 437 × 178 ft) — a direct signal of historically constrained runway safety areas at a field ringed by marshland and waterways; exact runway ends not independently confirmed this pass 🟧. No specific tailwind-tendency note was found in the reachable record — treat ATC-driven late runway/config changes (common given the traffic-flow environment) as the standing excursion-adjacent risk instead.

### 3.4 Weather threat 🟥
KEWR is fully exposed to Northeast-US weather extremes: winter **nor'easters** bringing heavy snow/ice and low-vis conditions, summer **convective thunderstorm** activity, and recurring **coastal/marsh fog** off the Meadowlands and nearby waterways. The Port Authority maintains substantial winter-readiness resources at the field (reported: 500 tons of sand, 500 tons of salt, 80,000 gallons of liquid anti-icer, and 47 pieces of snow-removal equipment for a representative winter-storm event) — de-icing/snow-clearing throughput is a real seasonal factor. CAT II/III ILS on 04R/22L is the direct mitigation for the region's fog/low-visibility days. See §14.

### 3.5 Operational considerations 🟥
Plan around four durable-but-evolving constraints: (1) the **FAA administrative capacity order** capping combined arrivals+departures (currently 72/hour through 24 Oct 2026, eased from a 28–34/hour construction-period cap in 2025) — a direct, quantified, and still-active schedule constraint; (2) **RWY 4L/22R was fully reconstructed and reopened in 2025** — a recent history of runway-driven capacity reduction that could recur with future maintenance cycles; (3) the ongoing **Philadelphia TRACON Area C transition** — a genuine, improving-but-not-fully-resolved ATC reliability situation; brief current NOTAM/ATC status before every operation into this field; (4) several taxiways are **wingspan-restricted** (>171 ft / >118 ft), constraining Code F ground movement — verify current routing for any Code F tail assigned here (see §13/§17).

---

## 4. Cautions & Warnings

- **RWY 29 has no ILS** — RNAV(RNP)/RNAV(GPS) and named visual approaches (Bridge Visual, Stadium Visual) only; brief the correct non-precision/visual plan if 29 is the assigned landing runway in marginal weather.
- **Large displaced thresholds** on every runway (up to 2,541 ft) — always fly from the published LDA, not the physical runway length.
- **Two EMAS beds** are installed at runway departure ends — a standing signal of tight runway safety areas at this marshland-ringed field.
- **Wingspan-restricted taxiways** (>171 ft / >118 ft closures/speed restrictions on numerous segments, including TWY EE, TWY Z5, TWY A/AA, TWY R at B1) — verify current routing for any Code F aircraft.
- **High volume of low-level helicopter traffic** near the field (Kearny Heliport, ~3.5 NM NE) — maintain a heightened visual/TCAS scan below the Class B floor.
- **ATC-driven ground delay programs and flow control are routine, not exceptional**, at this field — build schedule buffer accordingly.
- Mag variation and several navaid frequencies are sourced to older FAA facility records — treat exact current values as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **dense Class B/N90–Philadelphia-TRACON traffic environment** and the **CAT II/III low-visibility infrastructure on 04R/22L**. 🟥
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-vis arrivals on 04R/22L; confirm crew/aircraft currency before planning a low-vis approach. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. FAA hourly rate-cap order is an airport-wide capacity restriction, not a crew/aircraft restriction (§6/§12). 🟧
- **Overflight / entry / permits:** Standard US domestic Port of Entry; no special state permit required for a US-flag or foreign-flag scheduled operation. 🟩
- **Operations notes:** ANSP/ATC — **Philadelphia TRACON (Area C)** approach, **New York ARTCC (ZNY)** en route, Newark Tower on the field. Airport operator — **The Port Authority of New York and New Jersey**. No independent slot coordinator identified — capacity is FAA-order-managed rather than IATA-slot-coordinated in the EU sense.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground/Delivery/Approach continuous (H24) — FAA record lists "Attendance: Continuous" | 🟩 |
| AD operating hours | H24 scheduled ops; no fixed operating-hours restriction found | 🟩 |
| Night / curfew restrictions | **No formal curfew** per Port Authority terms of operation (sourced 2011, not independently re-confirmed current); engine run-up restrictions do apply overnight (§12) | 🟧 |
| RFF category | **ARFF Index E** | 🟩 |
| Fuel | Jet A (Allied Aviation Services, Signature Aviation FBOs); scheduled-carrier into-plane supplier/hours not confirmed | 🟧 |
| PCN / PCR | Runway-specific — see §7 | 🟩 |
| Customs | Terminal B international hall; generally H24 assumed, exact desk hours not confirmed | 🟧 |
| Handling / FBO | Signature Aviation (GA/FBO); Swissport (confirmed ground-handling provider at the field) — specific handler for a K Global operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCR | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04L | 11,000 × 150 ft (3,353 × 46 m) | Asphalt-concrete, grooved / PCR 960/F/C/X/T | 11,000 ft | 11,000 ft | 11,000 ft | 8,459 ft | Displaced threshold 2,541 ft; ALS: MALSR |
| 22R | (reciprocal) | (as above) | 11,000 ft | 11,000 ft | 11,000 ft | 9,559 ft | Displaced threshold 1,441 ft; ALS: MALSR; **longest published LDA at the field** |
| 04R | 9,999 × 150 ft (3,048 × 46 m) | Asphalt, grooved / PCR 1020/F/C/X/T | 9,999 ft | 9,999 ft | 9,999 ft | 8,809 ft | Displaced threshold 1,190 ft; ALS: ALSF2; **ILS CAT II/III** |
| 22L | (reciprocal) | (as above) | 9,999 ft | 9,999 ft | 9,999 ft | 8,205 ft | Displaced threshold 1,794 ft; ALS: ALSF2; **ILS CAT II/III** |
| 11 | 6,725 × 150 ft (2,050 × 46 m) | Asphalt, grooved / PCR 950/F/C/X/T | 6,725 ft | 6,725 ft | 6,725 ft | 6,725 ft | ILS/LOC available |
| 29 | (reciprocal) | (as above) | 6,725 ft | 6,725 ft | 6,725 ft | 6,501 ft | Displaced threshold 224 ft; **no ILS** — RNAV(RNP)/RNAV(GPS) and named visual approaches only; PAPI unusable 4° left of centreline |

*Source: FAA Chart Supplement (Northeast volume), effective 2026-07-09, via SkyVector (retrieved 2026-07-26). Two EMAS installations (182 × 170 ft and 437 × 178 ft) exist at runway departure ends — exact runway assignment not independently confirmed 🟧. All distances in feet as published; metric conversions approximate.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Newark D-ATIS | 115.7 (ARR) / 134.825 (ARR/DEP) | H24 (assumed) | Digital ATIS; phone readback also published |
| Delivery | Newark Clearance Delivery | 118.85 | H24 | Also serves as Pre-Taxi Clearance frequency; **CPDLC departure-clearance service available** |
| Ground | Newark Ground | 121.8 / 126.15 | H24 | |
| Ramp | Ramp Control (Port Authority) | 132.45 | H24 (assumed) | Apron/ramp movement, non-movement-area coordination |
| Tower | Newark Tower | 118.3 / 134.05 / 257.6 | H24 | Frequencies apply within 6.5 NM of the field |
| Approach | Newark Approach (Philadelphia TRACON, Area C) | 127.6 (270–330°) / 128.55 (090–240°) / 132.7 (331–089°) / 132.8 (241–269°) / 379.9 | H24 | Sector-specific — take the assigned frequency; historically N90, now Philadelphia TRACON Area C (§3.2) |
| Departure | Newark Departure | 119.2 / 379.9 | H24 | |
| Unicom | — | 122.95 | — | |
| Emergency | — | 121.5 / 243.0 | — | |
| Centre / FIR | New York ARTCC (ZNY) | Per current AIRAC | H24 | See [North America Airspace brief](../../../../airspace/north-america.md) |

*Source: FAA Chart Supplement (Northeast volume), effective 2026-07-09, via SkyVector (retrieved 2026-07-26). Frequencies tied to the BRAND, PHLBO and SHAFF STAR sectors also appear in the published frequency block — these are arrival-sector approach frequencies keyed to those STARs; take the assigned sector frequency. Treat exact current-cycle frequencies as 🟧 pending a live-AIRAC cross-check, though the delivery/ground/tower/approach/departure structure itself is stable.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | EWR (Newark) | 113.75 | H24 (assumed) | On-field VOR/DME, radial 033°, 1.2 NM from ARP |
| ILS/DME (RWY 22L) | I-LSQ | 108.70 | H24 | CAT I facility record (2007); operational category upgraded to CAT II/III per current Chart Supplement — verify sub-category on current chart 🟧 |
| ILS (RWY 04R) | Not confirmed this pass 🟧 | — | — | CAT II/III per current Chart Supplement — verify ident/freq on current chart |
| ILS (RWY 04L) | Not confirmed this pass 🟧 | — | — | SA CAT I/II per current Chart Supplement — verify ident/freq on current chart |
| ILS (RWY 11) | Not confirmed this pass 🟧 | — | — | Verify ident/freq on current chart |
| VOR (regional, not on-field) | TEB 108.40 · CRI 112.30 · LGA 113.10 | — | — | Cross-check/context only — Teterboro, Canarsie and LaGuardia VORs, 10–15 NM from KEWR |
| NDB (regional, distant) | FR (FRIKK) 407 · NEL (LAKEHURST) 396 · IS (LOKKS) 366 · SW (NEELY) 335 | — | — | 30–48 NM from the field — minimal field-specific relevance |

*Source: FAA Chart Supplement (Northeast volume), effective 2026-07-09, via SkyVector (retrieved 2026-07-26); ILS 22L ident/frequency corroborated via a public FAA facility database extract dated 2007-01-18 (retrieved 2026-07-26) — long-lived infrastructure, unlikely to have changed materially, but not independently re-confirmed against current AIRAC.*

---

## 10. Arrival

- **Transition altitude / level:** The US uses a fixed nationwide transition altitude of **18,000 ft MSL** (not a per-field published value as in ICAO-standard states); transition level is assigned by ATC per current altimeter setting.
- **Speed:** 250 KIAS below 10,000 ft MSL (14 CFR 91.117); Class B speed restrictions apply within the New York Class B shelf.
- **Preferential runway logic:** No formally published preferential runway; wind- and ATC-flow-driven configuration, coordinated with the shared JFK/LaGuardia traffic flow under Philadelphia TRACON Area C. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 04L | ILS Z or LOC Z (SA CAT I/II); GLS | |
| 22R | ILS or LOC; GLS | |
| 04R | ILS or LOC (CAT II/III); GLS; RNAV(GPS) Y | **CAT II/III** |
| 22L | ILS or LOC (SA CAT I; CAT II/III); RNAV(GPS) Z; GLS | **CAT II/III** |
| 11 | ILS or LOC; GLS | |
| 29 | RNAV(RNP) Y/Z; RNAV(GPS) T/W/X; Bridge Visual; Stadium Visual | **No ILS — never assume a precision approach on 29** |

- **STARs (names only — verify current AIRAC):** BRAND ONE (RNAV), FLOSI FOUR (RNAV), PENNS TWO, PHLBO FOUR (RNAV), SHAFF SEVEN, WILLIAMSPORT THREE — current as of the 2026-07-09 effective Chart Supplement cycle; re-verify on the live AIRAC before use.
- **LVP:** CAT II/III capability on 04R/22L is the standing low-vis mitigation for the region's fog/nor'easter events; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal field) — the operative missed-approach concern is re-sequencing into a very high-density, multi-airport Class B radar environment shared with JFK/LaGuardia.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** DEVIL ONE, LIBERTY FIVE, NEWARK FIVE (conventional); PORTT FOUR (RNAV) — current as of the 2026-07-09 effective Chart Supplement cycle; verify on current AIRAC.
- **RNP / climb-gradient requirements:** Verify RNP/gradient equipage per SID on the current chart; see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per current Chart Supplement takeoff-minima page — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** **CPDLC departure clearance service available** (confirmed field feature); Ramp Control (132.45, Port Authority) coordinates apron/ramp movement; cross-bleed/APU notification procedure not confirmed locally. 🟧
- **ATC slot / CTOT & clearance:** No EU-style IATA slot regime; the operative constraint is the **FAA administrative rate-cap order** (currently 72 combined arrivals+departures/hour through 24 Oct 2026) plus routine EDCT-style ground-delay-program assignment during flow events — treat as standard practice at this field.
- **De-icing:** Available; season typically **Nov–Mar**. Port Authority winter-readiness resources for a representative storm event: 500 tons sand, 500 tons salt, 80,000 gallons liquid anti-icer, 47 pieces of snow-removal equipment. Specific de-icing pad locations not confirmed in reachable sources. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** KEWR is designated a **"Noise Sensitive Airport," 24 hours** under Port Authority terms of operation (sourced 2011 — not independently re-confirmed current 🟧). A historical departure noise limit of approximately **112–112.9 PNdB**, measured at community noise monitors in the first community off each runway end, was in force per the same source; monitor sites are published at fixed distances/offsets from brake release for RWY 4R, 22R, 22L and 29.
- **Night noise / dB limits:** Governed through the noise-monitor departure limit above rather than a separate curfew; no formal curfew or per-movement surcharge confirmed as currently in force. 🟧
- **Engine run-up restrictions:** Quantified in the same source — no jet run-up above "part power" (≤80%) for more than 1 minute at a time, one engine at a time, between 0700–2200; between 2200–0700 no run-up above part power for more than 30 seconds, one engine at a time; no full-power run-up permitted for maintenance day or night; run-ups only in operator-authorised areas. 🟧 verify current status.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 **Terminal A** (rebuilt 2023, 33 gates) — domestic/short-haul carriers. **Terminal B** (opened 1973, ~30 airlines, hosts most international/mixed-carrier traffic; undergoing a $200M near-term modernisation ahead of a full replacement planned for the mid-2030s; served ~11.5M passengers in 2025 against an original ~6.8M design capacity). **Terminal C** — United Airlines hub, concourses C-1/C-2/C-3, 68 gates total; the **C-3 international concourse** can accommodate up to 12 widebody or 19 narrowbody aircraft.
- **Push-back:** Coordinated via Ramp Control (132.45, Port Authority); mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Ramp on the day; several taxiway segments carry wingspan restrictions (below).
- **Hot spots / tight taxiways:** 🟥 **TWY EE** (between RWY 4R-22L and RWY 11-29) closed to aircraft with wingspan >171 ft; **TWY Z5** closed to wingspan >118 ft; **TWY Z** (between Z2/Z4 and east of TWY U), **TWY A** (between AA and the ramp), **TWY A11** (west of TWY A), and the taxiways surrounding the "ballpark" parking area (Y, S, K, B, U) all carry a 17 kt/20 mph speed restriction or closure for wingspan >171 ft; aircraft with wingspan >118 ft are prohibited from turning south on TWY R from TWY B1. Verify current applicability for any Code F tail.
- **Follow-me:** Availability not confirmed in reachable sources — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid continental Northeast-US climate with four distinct seasons; coastal/estuarine influence from the adjacent Meadowlands and Newark Bay.
- **Seasonal hazards:** Winter **nor'easters** (Nov–Mar) bring heavy snow/ice and de-icing-season demand; summer (Jun–Aug) carries the standard Northeast-US **convective thunderstorm** risk; recurring **coastal/marsh fog** affects visibility, particularly in shoulder seasons; occasional remnants of tropical systems (Aug–Oct) can bring heavy rain/wind.
- **Local effects:** Marshland/waterway-adjacent fog is the standout local effect; no significant terrain-driven wind effect at this flat, low-elevation field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (especially the wingspan-restricted taxiways in §13), navaid U/S, CAT II/III equipment status, lighting, obstacle/crane, RFF downgrade, current ATC flow-program/ground-delay-program status for the Philadelphia TRACON Area C/Newark airspace, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — not a K Global base.
- **Nearest suitable alternates:** Company preferred/suitable alternates **KJFK, KPHL, KIAD** `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A confirmed generally available via field FBOs (Allied Aviation Services, Signature Aviation); specific scheduled-carrier into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the two main runways (11,000 ft / 9,999 ft). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- The standing fleet-aware consideration at KEWR is **not** field length or elevation — it is the **wingspan-restricted taxiway network** (§13), which is a real planning item for any Code F aircraft in the network. Confirm current gate/taxi routing before assigning a Code F tail to this field. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 1985/2007-epoch FAA facility record (13° W); current-day value not independently re-confirmed.
- **ARP coordinates** — ~200 m difference between the current FAA Chart Supplement extract and OurAirports; non-safety-critical but not reconciled.
- **Field elevation** — 1 ft difference between the 18 ft Port Authority-sourced figure and the current Chart Supplement's 17 ft surveyed value; immaterial but not reconciled.
- **ILS idents/frequencies for RWY 04R, 04L and 11** — not obtained in this research pass; only RWY 22L (I-LSQ, 108.70) was confirmed. Pull the live current-AIRAC navaid list before use.
- **ILS sub-category (II/III split) for 04R/22L** — confirmed as "CAT II-III" per the current Chart Supplement approach-chart index, but exact RVR/DH minima not obtained this pass.
- **EMAS runway-end assignment** — two installations confirmed (182×170 ft, 437×178 ft) but not tied to specific runway ends in reachable sources.
- **Preferential runway/config logic, LVP trigger RVR, take-off minima, engine run-up restriction current status, reverse-thrust policy, follow-me availability, push-back mandatory-vs-self-manoeuvre policy** — none independently confirmed in reachable current sources; several rely on a 2011-dated Port Authority document.
- **Fuel into-plane provider and uplift hours for scheduled-carrier service** — FBO fuel confirmed, scheduled-carrier supplier not confirmed.
- **Current widebody gate/terminal assignment** amid Terminal B's ongoing multi-year redevelopment programme.
- **CBP/immigration desk hours at Terminal B** — assumed major-PoE H24 coverage, not independently confirmed.
- **De-icing pad locations and throughput** — winter-readiness equipment quantities confirmed; specific pad geography not confirmed.
- **Ground handling agent(s) for a K Global operation** — Swissport confirmed as a field provider generally; contract-specific handler not confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **FAA Chart Supplement (Northeast volume, d-TPP), KEWR** — effective 2026-07-09 — mirrored via SkyVector: https://skyvector.com/airport/EWR/Newark-Liberty-International-Airport (retrieved 2026-07-26). *Runway dimensions/declared distances/PCR, communications, navaid/approach/SID/STAR index, ARTCC, remarks.*
- OurAirports — https://ourairports.com/airports/KEWR/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- AirNav — https://www.airnav.com/airport/KEWR (retrieved 2026-07-26). *Cross-check reference (page content largely commercial listings this pass).*
- Port Authority of New York and New Jersey / Newark Liberty official site — https://www.newarkairport.com/explore-ewr/terminals/terminal-b (retrieved 2026-07-26). *Terminal B carrier mix/international role.*
- Boeing Company — Newark Liberty International Airport noise-abatement reference sheet (Port Authority-sourced data confirmed current as of 2/2011) — https://www.boeing.com/content/dam/boeing/boeingdotcom/commercial/noise/newark.pdf (retrieved 2026-07-26). *Noise-abatement terms, engine run-up restrictions, curfew/preferential-runway status, noise-monitor geography.*
- FAA Newsroom — "FAA Statements on Newark Liberty International Airport" — https://www.faa.gov/newsroom/faa-statements-newark-liberty-international-airport (retrieved 2026-07-26). *Philadelphia TRACON Area C relocation history, 2025 telecom/radar outages, FAA rate-cap orders, RWY 4L/22R reconstruction/reopening.*
- Bureau of Transportation Statistics — "Table 4, Ranking of Major Airport On-Time Arrival Performance, YTD through June 2025" — https://www.bts.gov/table-4-ranking-major-airport-time-arrival-performance-year-date (retrieved 2026-07-26). *On-time performance corroboration (63.65% total on-time, July 2025).*
- Port Authority of New York and New Jersey — Aircraft Rescue and Firefighting — https://www.panynj.gov/airports/en/aircraft-rescue-and-firefighting.html (retrieved 2026-07-26). *ARFF Index E / Class I certification corroboration.*
- airport-data.com — KEWR RWY 22L ILS facility record — https://airport-data.com/airport/EWR/ils/22L.html (retrieved 2026-07-26). *ILS ident/frequency (I-LSQ, 108.70), 2007-01-18 record; long-lived infrastructure.*
- Construction Today / Metro Airport News / Jersey Digs — Terminal B modernisation and Port Authority capital plan reporting (retrieved 2026-07-26). *Terminal B redevelopment timeline and passenger-volume figures — trade-press sourced, not a primary Port Authority planning document.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
