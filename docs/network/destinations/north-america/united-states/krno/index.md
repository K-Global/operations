# KRNO — Reno-Tahoe International · Airport Briefing

**KRNO / RNO** · Reno, Nevada, United States · North America
**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified — mag variation epoch, ARFF index and ILS component idents/frequencies for RWY 35L and 17R are now confirmed direct from FAA source data. Exact ATIS/Approach/Delivery operating hours and a handful of tier-4 administrative items remain open per §18 but do not block Verified — see Change Log.

> **Read-me:** Planning aid for X-Plane 11, not a chart. KRNO sits under a US FAA AIP system rather than a classic state eAIP; static figures below are FAA Chart Supplement / d-TPP data (AIRAC cycle 2607, eff. 2026-07-09) as mirrored by SkyVector and AirNav, cross-checked against OurAirports/Wikipedia. ILS component idents/frequencies for both ILS-equipped runway ends (35L, 17R) were retrieved directly from the FAA IAP chart text via aeronav.faa.gov (d-TPP cycle 2606, retrieved 2026-07-25) — see §9. Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal. Companion pages in this folder: [Dispatch](dispatch.md), [Departure](departure.md), [Arrival](arrival.md).
>
> **Context:** KRNO appears as a secondary destination-area alternate on the reference EDDF–KSFO OFP (2026-07-25). The OFP airport-weather list carries it, and NOTAMs on file flag **RNO ILS RWY 35L DME U/S** and **FMG TACAN AZM U/S** — both cross-checked against the navaid/approach data below. This is a **high-terrain, hot-and-high** field; §3 (TEM) is the value-add.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N39°29′56.8″ / W119°46′05.2″ (39.4991, -119.7681) `[AirNav FAA data / OurAirports]` |
| Field elevation | **4,415 ft / 1,346 m MSL** (surveyed 4,414.9 ft) — **HOT-AND-HIGH** 🟥 |
| Mag variation | **13° E (2020 epoch)** — confirmed via direct AirNav FAA facility-data pull, retrieved 2026-07-25 🟩. Note: Reno's runways were themselves redesignated 16/34→17/35 in Dec 2022 because of magnetic drift — drift is real and ongoing, so re-check the epoch again at the next data refresh even though the current 2020 figure is now source-confirmed. |
| Time zone | Pacific Time: **UTC-8 (PST)** standard / **UTC-7 (PDT)** daylight |
| Runway(s) | **17R/35L** 11,001 × 150 ft; **17L/35R** 9,000 × 150 ft; **08/26** 6,102 × 150 ft — all concrete/grooved |
| Preferential runway | Not published / verify 🟧 — no formal preferential-runway program found; 17R/35L (longest, ILS + MALSR) is the primary jet runway when wind allows |
| Longest LDA | 35L **10,011 ft** / 17R **10,001 ft** (displaced thresholds both ends) |
| Approaches | ILS/LOC 35L & 17R (3 variants), RNAV (RNP) & RNAV (GPS) both long runways, LOC Y 17R, VOR-D, TACAN-F — see §10 |
| RFF category | **ARFF Index C** `[FAA/AirNav]` |
| Control type | **Radar** — NORCAL TRACON (Approach/Departure), Class C surface area |
| Elevation class | **Hot-and-high** — dominant performance driver; summer density altitude routinely well above field elevation 🟥 |
| Special-airport status | Not formally categorised in the FAA system (no ICAO-style Cat B/C list); given terrain + hot-and-high profile, K Global should treat as an enhanced-briefing field — see §5 🟧 |
| Customs / PoE | **Yes — Customs Landing Rights Airport, PPR required** (775-784-5585); after-hours landing **without** prior approval **NOT authorised** 🟥 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Field sits in the Truckee Meadows bowl ringed by the Sierra Nevada/Carson Range. Peavine Peak 8,269 ft ~9 NM WNW; Mount Rose 10,785 ft ~12 NM SSW; charted obstacle 243 ft AGL, 8,050 ft from RWY 35L threshold. |
| Runway length vs fleet perf | 🟧 | 11,001 ft on 17R/35L is generous in absolute terms, but hot-and-high density altitude materially erodes climb/accelerate-stop margins, especially on the shorter 17L/35R (9,000 ft) and 08/26 (6,102 ft). |
| Approach availability / minima | 🟧 | Full ILS/RNP/RNAV/VOR/TACAN suite exists — ILS idents/freqs for 35L (I-AGY 109.90) and 17R (I-RNO 110.90) confirmed direct from FAA IAP charts, 2026-07-25 — but current OFP NOTAMs report **ILS RWY 35L DME U/S** and **FMG TACAN AZM U/S** — reduces available precision options; RNAV (RNP) procedures are FAA "RNP AR" type — confirm fleet/crew authorisation (§5, §18). Flag remains 🟧 pending live NOTAM re-check, not a source-confirmation gap. |
| Airspace / traffic / control | 🟧 | Radar-controlled Class C (NORCAL Approach/Departure); however remarks note **intensive glider/soaring activity up to 18,000 ft** in the vicinity and 30–50 NM south during mountain-wave conditions. |
| Weather / seasonal hazard | 🟥 | Mountain-wave turbulence, strong afternoon/frontal winds, summer heat driving high density altitude, winter mountain weather/icing, "cold temperature airport" altimetry correction below -13°C. |
| Curfew / slots / hours | 🟧 | No published nighttime curfew found; airport is a "noise sensitive area all quadrants" with recommended (unpublished) abatement procedures — verify. |
| RFF category vs our types | 🟧 | ARFF Index C confirmed — cross-check against OM B fleet RFF requirement for each type using KRNO as an alternate. |
| Fuel availability | 🟩 | 100LL and Jet A-1+ confirmed via two FBOs (Atlantic Aviation, Stellar Aviation). |
| Customs / handling / security | 🟥 | Customs Landing Rights airport — **mandatory PPR**, after-hours landing without prior approval not authorised. Material constraint if KRNO is ever used as an unplanned international diversion. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟥
KRNO (4,415 ft) sits in a bowl at the north end of the Truckee Meadows, ringed by the Sierra Nevada/Carson Range on most quadrants. **Peavine Peak (8,269 ft)** lies ~9 NM WNW/NW of the field (bearing ≈305° from the ARP); **Mount Rose (10,785 ft)**, the highest point of the Nevada Sierra, lies ~12 NM SSW (bearing ≈217°); the broader Sierra Nevada crest west of the field carries multiple peaks above 9,000–10,000+ ft within 15–20 NM. The FAA data set also carries a charted obstacle of **243 ft AGL, 8,050 ft from the RWY 35L threshold, 1,500 ft right of centreline** (37:1 approach ratio to the displaced threshold) — a close-in penetrator on the main precision runway. Net effect: this is a serious CFIT field on both departure and missed approach. Read the MSA ring/obstacle table on the current-AIRAC area and approach charts before every operation; do not descend below MSA or a charted step-down early, and brief the missed-approach climb gradient before commencing any approach — do not assume the long main runway buys margin against terrain. See also the [High-Elevation Aerodrome Operations](../../../../../flight-ops/high-elevation-aerodrome-operations.md) procedure (OM E), which names KRNO as an illustrative hot-and-high field.

### 3.2 Airborne conflict / traffic  🟧
Radar environment: NORCAL TRACON provides Approach/Departon control inside Class C airspace (Oakland ARTCC overlying). However, FAA remarks specifically flag **intensive glider/soaring activity in the vicinity and surrounding areas up to 18,000 ft**, plus glider/soaring operations **30–50 NM south of the airport during VFR weather and mountain-wave wind conditions**. Expect a non-trivial VFR/glider mix layered with the IFR arrival/departure flow, particularly on strong-wind days when wave activity is most likely. Cross-ref [North America Airspace](../../../../airspace/north-america.md) (Oakland ARTCC / NORCAL TRACON FIR brief).

### 3.3 Runway excursion  🟧
All three runways are concrete/grooved and in good condition. 17R/35L and 17L/35R both carry PAPI/ REIL/ MALSR-class lighting; 17R/35L has displaced thresholds both ends (17R 1,000 ft / 35L 990 ft, sources differ slightly — see §7). Waterfowl are flagged **"all quadrants, all seasons"**, concentrated NW of RWY 17R and east of RWY 17L — a bird-strike/runway-excursion-adjacent hazard on rollout and initial climb. Hot-and-high density altitude raises true groundspeed at touchdown for a given IAS, extending the effective landing roll versus a sea-level field — factor this into landing-distance assessments, especially on the shorter 17L/35R and 08/26.

### 3.4 Weather threat  🟥
Summer afternoons: NOAA 1991–2020 normals show a **July mean daily maximum of ~93.9°F (34.4°C)** at Reno, with a record high of 108°F (42°C) `[Wikipedia/NOAA]`. Combined with the 4,415 ft field elevation, density altitude on hot summer afternoons commonly rises well above field elevation — compute actual density altitude and takeoff/climb performance at dispatch; do not rely on a generic "long runway" assumption. Terrain-driven **mountain-wave turbulence** and strong, gusty afternoon winds are a recognised local hazard (reflected in the glider/soaring remarks above). Winter brings mountain weather — snow, icing, and gusty frontal passages — and the field is FAA-flagged as a **"Cold Temperature Airport"**, requiring altimetry temperature correction at or below -13°C — see the [Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md) procedure (OM E). See also §14.

### 3.5 Operational considerations  🟥
Hot-and-high performance is the headline planning item: expect reduced climb gradients and reduced usable payload on summer-afternoon departures, particularly relevant for widebody-class weight/thrust margins even off the 11,001 ft runway. A dedicated **SPARKS ONE (OBSTACLE)** departure procedure is published specifically for terrain avoidance — its existence alone confirms KRNO SIDs carry non-standard, terrain-driven climb-gradient requirements; confirm the exact gradient/altitude requirements on the current AIRAC chart before dispatch, do not assume standard 200 ft/NM. The RNAV (RNP) W/Y/Z approaches published here are FAA "RNP AR" (Authorization Required) procedures — confirm fleet/crew RNP AR authorisation before planning to rely on them; if not authorised, plan around the ILS/LOC or RNAV (GPS) options instead (subject to the DME U/S NOTAM noted above). Circling is expected to be terrain-constrained on at least some runway ends given the close-in high ground on most quadrants — verify circling NA/minima on the current chart before planning any circling approach.

---

## 4. Cautions & Warnings

- High terrain close-in on most quadrants (Peavine Peak 8,269 ft ~9 NM WNW; Mount Rose 10,785 ft ~12 NM SSW; broader Sierra Nevada crest further west) — do not descend below MSA early; brief the missed-approach climb gradient before every approach.
- Charted obstacle 243 ft AGL, 8,050 ft from the RWY 35L threshold, 1,500 ft right of centreline — close-in penetrator on the main precision runway.
- **OFP NOTAM: ILS RWY 35L DME U/S** and **FMG TACAN AZM U/S** — confirm current status and backup procedure before planning to use these.
- Hot-and-high: compute actual density altitude and takeoff/climb performance at dispatch — summer afternoons regularly exceed field-elevation density altitude by a wide margin.
- Mountain-wave turbulence and strong afternoon winds; intensive glider/soaring activity in the area, including up to 18,000 ft and 30–50 NM south during wave conditions.
- Waterfowl hazard all quadrants, all seasons (concentrated NW of RWY 17R and east of RWY 17L).
- "Cold Temperature Airport" — apply altimetry temperature correction at or below -13°C.
- Customs Landing Rights airport — PPR mandatory; after-hours landing without prior approval is **not authorised**. Do not assume walk-up customs availability on an unplanned diversion.
- RNAV (RNP) W/Y/Z approaches are RNP AR procedures — confirm fleet/crew authorisation before relying on them.
- Several taxiways carry air-carrier/wingspan restrictions (Twy C between Twy L–D restricted to ≤100,000 lb; Twy A between north Twy B–D closed to wingspan >149 ft; Twy M and Twy J east of 17L/35R closed to air carrier aircraft) — verify current taxi routing before pushback.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised in the FAA system (the US does not run an ICAO-style Cat B/C special-aerodrome list). Given the terrain profile, hot-and-high performance sensitivity, and DME-dependent/RNP AR procedures, K Global should treat KRNO as an **enhanced-briefing field** for any crew tasked to actually land there — currently it is referenced only as an OFP alternate, not a scheduled destination. 🟧
- **Crew-qualification gate:** No published FAA gate; recommend an internal K Global policy decision (command-experience / specific-briefing requirement) if KRNO is ever used operationally rather than only as a diversion reference — not yet decided, see §18. 🟧
- **Operating restrictions / bans:** RNAV (RNP) W/Y/Z approaches are RNP AR (Authorization Required) — do not plan to use unless fleet/crew RNP AR authorisation is confirmed (§18). Circling approaches likely terrain-restricted on some runway ends — verify per current chart before planning any circling approach.
- **Overflight / entry / permits:** Domestic US field — no overflight permit required for a US-registered/US-operating carrier; **Customs Landing Rights Airport** status means international arrivals require **PPR** (775-784-5585) and after-hours landing without prior approval is **not authorised**. 🟥
- **Operations notes:** All commercial aircraft must contact Ground Control for advisories prior to pushback on the terminal ramp (FAA remark). Transient aircraft with wingspan >75 ft require 24-hour PPR for parking (775-328-6600); aircraft over 12,500 lb require written PPR for training flights.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground/Approach — "Continuous" attendance per FAA data; confirm exact ATIS/ATC hours | 🟧 |
| AD operating hours | H24 (public-use, continuous attendance) | 🟩 |
| Night / curfew restrictions | No published nighttime curfew found; "noise sensitive area all quadrants" with unpublished recommended abatement procedures | 🟧 |
| RFF category | ARFF Index C | 🟩 |
| Fuel | 100LL, Jet A-1+ — Atlantic Aviation & Stellar Aviation FBOs; hours not confirmed | 🟧 |
| PCN | FAA **PCR** values published (not ICAO PCN): 17R/35L 917/R/B/W/T; 17L/35R 1034/R/C/W/T; 08/26 787/R/C/W/T — confirm ICAO PCN equivalence if needed for OM cross-ref | 🟧 |
| Customs | Customs Landing Rights Airport — PPR mandatory (775-784-5585); after-hours landing without prior approval NOT authorised | 🟥 |
| Handling / FBO | Atlantic Aviation, Stellar Aviation | 🟩 |

---

## 7. Runways & declared distances

*All distances in feet. Metric equivalents on request. Source: FAA d-TPP/Chart Supplement mirrored via SkyVector/AirNav, AIRAC cycle 2607 (eff. 2026-07-09), retrieved 2026-07-25.*

| RWY | Dimensions | Surface / PCR | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 17R | 11,001 × 150 ft | Concrete/grooved · 917/R/B/W/T | 11,001 | 11,001 | 11,001 | 10,001 | Displaced thr **1,000 ft — CONFIRMED** (AirNav/FAA eff. 2026-06-11 independently matches SkyVector/d-TPP; OurAirports' 999 ft was the outlier, now superseded). MALSR, PAPI 3.06°. |
| 35L | 11,001 × 150 ft | Concrete/grooved · 917/R/B/W/T | 11,001 | 11,001 | 11,001 | 10,011 | Displaced thr 990 ft. MALSR, PAPI 3.54°. Obstacle 243 ft AGL, 8,050 ft from thr, 1,500 ft right of centreline (37:1 ratio to DTHR). **ILS DME reported U/S per OFP NOTAM.** |
| 17L | 9,000 × 150 ft | Concrete/grooved · 1034/R/C/W/T | 9,000 | 9,000 | 9,000 | 9,000 | No displaced threshold published. REIL, PAPI 3.00°. |
| 35R | 9,000 × 150 ft | Concrete/grooved · 1034/R/C/W/T | 9,000 | 9,000 | 9,000 | 9,000 | No displaced threshold published. REIL, PAPI 3.35°. |
| 08 | 6,102 × 150 ft | Concrete/grooved · 787/R/C/W/T | 5,854 | 5,854 | 6,102 | 5,854 | ASDA > TORA/TODA/LDA (stopway/clearway margin) — explained by FAA data, not a fabrication. Obstacle 118 ft pole, 2,625 ft from runway, 500 ft left of centreline (20:1). |
| 26 | 6,102 × 150 ft | Concrete/grooved · 787/R/C/W/T | 6,102 | 6,102 | 6,102 | 6,102 | Obstacle 44 ft tree, 1,150 ft from runway, 275 ft left of centreline (21:1). |

*Independently re-verified 2026-07-25 against a fresh AirNav pull (FAA data effective 11 June 2026, cycle 2606), https://www.airnav.com/airport/KRNO — all 6 runway-end TORA/TODA/ASDA/LDA figures matched exactly, including displaced thresholds (1,000 ft on 17R, 990 ft on 35L) and the stopway-driven TORA/TODA<ASDA<LDA relationship on RWY 08 (5,854/5,854/6,102/5,854 ft — clearway/stopway margin, not a data error).*

**Reconciliation (2026-07-25, brief vs. AirNav FAA data eff. 2026-06-11):**

| RWY end | TORA | TODA | ASDA | LDA | Result | Notes |
|---|---|---|---|---|---|---|
| 17R | 11,001 | 11,001 | 11,001 | 10,001 | MATCH | Displaced thr 1,000 ft confirmed — resolves prior 999/1,000 ft source conflict in favour of 1,000 ft. |
| 35L | 11,001 | 11,001 | 11,001 | 10,011 | MATCH | Displaced thr 990 ft confirmed. |
| 17L | 9,000 | 9,000 | 9,000 | 9,000 | MATCH | No displaced threshold. |
| 35R | 9,000 | 9,000 | 9,000 | 9,000 | MATCH | No displaced threshold. |
| 08 | 5,854 | 5,854 | 6,102 | 5,854 | MATCH | ASDA > TORA/TODA/LDA — stopway/clearway margin, confirmed by FAA data, not an anomaly. |
| 26 | 6,102 | 6,102 | 6,102 | 6,102 | MATCH | |

6/6 runway ends MATCH — one prior discrepancy (RWY 17R displaced threshold) now resolved in favour of 1,000 ft; no other corrections required.

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS / D-ATIS | Reno ATIS | 135.8 / 363.0 | Not confirmed — verify | Also serves as ASOS freq (135.8) |
| Delivery | Clearance Delivery | 124.9 / 370.85 | Not confirmed — verify | |
| Ground | Reno Ground | 121.9 / 348.6 | Continuous (per FAA) | |
| Tower | Reno Tower | 118.7 / 257.8 | Continuous (per FAA) | |
| Approach / Departure | NORCAL Approach/Departure | 119.2 and 126.3 (split by radial/runway — see note) / 279.55 / 353.9 | Not confirmed — verify | 119.2 covers radials 036–225 / RWY 17L,17R departures; 126.3 covers radials 226–035 / RWY 26,35L,35R departures |
| Centre / FIR | Oakland ARTCC | — | H24 | Overlying centre |
| UNICOM | — | 122.95 | — | |
| Emergency | — | 121.5 / 243.0 | — | |

*From FAA data mirrored via SkyVector/AirNav (retrieved 2026-07-25). A direct AirNav re-check (2026-07-25) confirmed all frequencies above (D-ATIS 135.8/363.0, Clearance 124.9/370.85, Ground 121.9/348.6, Tower 118.7/257.8) but, like the first pull, published only "Attendance: CONTINUOUS" at the airport level with no per-facility ATIS/Approach/Delivery hour windows — genuinely not published in any reachable source checked — flag 🟧.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME (VORTAC, TACAN co-located) | FMG (MUSTANG) | 117.90 | Not confirmed — verify | ~5.5 NM, radial 233–234° from field. **OFP NOTAM: FMG TACAN AZM (azimuth) U/S** — confirm current status. |
| ILS/LOC/DME 35L | **I-AGY** | **109.90** (Chan 36) | — | 🟩 CAT I (MALSR) — confirmed direct from FAA IAP chart "ILS or LOC RWY 35L," retrieved 2026-07-25. **OFP NOTAM: DME U/S** — confirm current status before relying on I-AGY DME. See §10. |
| ILS/LOC/DME 17R | **I-RNO** | **110.90** (Chan 46) | — | 🟩 CAT I (MALSR) — confirmed direct from FAA IAP chart "ILS X or LOC X RWY 17R," retrieved 2026-07-25; same localizer transmitter serves the X/Y/Z chart variants and the LOC Y procedure at this ident/frequency. See §10. |
| VOR/DME | SWR (PALISADES) | 113.20 | — | ~30 NM, enroute-range aid, not airport-serving |
| VORTAC | HZN (HAZEN) | 114.10 | — | ~35 NM, enroute-range aid, not airport-serving |

*Both ILS-equipped runway ends (35L, 17R) are now source-confirmed. AirNav and the SkyVector d-TPP mirror both list these approaches only as chart-title/PDF references ("ILS OR LOC RWY 35L", "ILS X OR LOC X RWY 17R", etc.) with no extractable ident/frequency table, so the component data above was pulled by retrieving the actual FAA IAP chart PDFs directly from aeronav.faa.gov (d-TPP cycle 2606, eff. 11 Jun–09 Jul 2026) and reading the localizer ident/frequency/channel block printed on each plate. 17L and 35R carry no ILS (RNAV/GPS only per §10).*

---

## 10. Arrival

- **Transition altitude / level:** **18,000 ft MSL** (US nationwide fixed TA, not a variable AIP figure); transition level **FL180** (29.92 in Hg standard setting above 18,000 ft per the US system).
- **Speed:** 250 KIAS below FL100; observe charted STAR/IAF speed restrictions.
- **Preferential runway logic:** Not published / verify 🟧 — no formal preferential-runway program found; 17R/35L (longest, ILS + MALSR) is the primary jet runway when wind allows.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 35L | ILS OR LOC RWY 35L | LOC I-AGY 109.90 (§9). **DME reported U/S per OFP NOTAM** — confirm current status |
| 35L | RNAV (RNP) W RWY 35L | RNP AR — confirm authorisation |
| 35L | RNAV (RNP) Z RWY 35L | RNP AR — confirm authorisation |
| 35L | RNAV (GPS) X RWY 35L | |
| 35L | RNAV (GPS) Y RWY 35L | |
| 17R | ILS X OR LOC X RWY 17R | LOC I-RNO 110.90 (§9) |
| 17R | ILS Z OR LOC Z RWY 17R | LOC I-RNO 110.90 (§9) |
| 17R | ILS Y RWY 17R | LOC I-RNO 110.90 (§9) |
| 17R | RNAV (RNP) Y RWY 17R | RNP AR — confirm authorisation |
| 17R | RNAV (RNP) Z RWY 17R | RNP AR — confirm authorisation |
| 17R | RNAV (GPS) X RWY 17R | |
| 17R | LOC Y RWY 17R | LOC I-RNO 110.90 (§9) |
| 17L | RNAV (RNP) Y RWY 17L | RNP AR — confirm authorisation |
| 17L | RNAV (RNP) Z RWY 17L | RNP AR — confirm authorisation |
| 17L | RNAV (GPS) X RWY 17L | |
| 35R | RNAV (RNP) W RWY 35R | RNP AR — confirm authorisation |
| 35R | RNAV (RNP) Z RWY 35R | RNP AR — confirm authorisation |
| 35R | RNAV (GPS) X RWY 35R | |
| 35R | RNAV (GPS) Y RWY 35R | |
| — | VOR-D | Area-type procedure — verify serving runway(s) on current chart |
| — | TACAN-F | **OFP NOTAM: FMG TACAN AZM U/S** — confirm current status |
| 08/26 | None published in sources checked | Crosswind/shorter runway — verify on current AIRAC |

- **STARs (names only):** ANAHO TWO, DNGLE ONE (RNAV), EELZA FOUR (RNAV), KLUBS ONE (RNAV), ORRCA ONE (RNAV), RYANN TWO, SCOLA ONE (RNAV), TARVR TWO (RNAV), WADOL FOUR (RNAV), WINRZ ONE (RNAV).
- **LVP:** Trigger conditions not published in the sources checked — verify on current chart. 🟧
- **Missed approach watch-items:** Close-in high terrain on most quadrants — brief the published missed-approach track and climb gradient before every approach; do not assume a shallow standard climb clears terrain.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** ALPYN ONE (RNAV), MUSTANG ONE, PVINE FIVE (RNAV), RENO ONE, WAGGE EIGHT, ZEFFR NINE (RNAV). A dedicated obstacle departure procedure, **SPARKS ONE (OBSTACLE)**, is also published — its existence alone is itself evidence of terrain-driven, non-standard climb requirements at this field.
- **RNP / climb-gradient requirements:** Several SIDs are RNAV; confirm RNP capability and the specific climb-gradient/minimum-climb requirement on the current chart before dispatch — **do not assume a standard climb gradient clears the surrounding terrain.** Special take-off minimums/departure procedures are published (FAA "SW4TO" special-minimums page) — verify content on current AIRAC. 🟧
- **Take-off minima:** Special takeoff minimums apply per FAA Chart Supplement — not transcribed here; verify on current chart. 🟧
- **Start-up / push-back:** All commercial aircraft must contact Ground Control for advisories prior to pushback on the terminal ramp (FAA remark).
- **ATC slot / CTOT & clearance:** No slot regime found in sources checked — verify on OFP. 🟧
- **De-icing:** Availability/procedure not confirmed in sources checked — verify; winter mountain weather and the airport's "Cold Temperature Airport" designation make this a likely requirement in season. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** FAA remarks flag KRNO as a **"noise sensitive area all quadrants"**; turbojet operators are directed to use "recommended noise abatement procedures, available on request" — specific NAP routings not published in the sources checked. A direct AirNav re-check (2026-07-25) confirmed the identical remark text verbatim ("NOISE SENSITIVE AREA ALL QUADS. PILOTS OF TBJT ACFT USE RCMDD NOISE ABATEMENT PROCS; AVBL ON REQ.") with no additional dB limit or specific routing published — genuinely not available beyond "on request." 🟧
- **Night noise / dB limits:** Not published in sources checked. 🟧
- **Engine run-up restrictions:** Not published in sources checked. 🟧
- **Reverse thrust / idle-reverse policy:** No published idle-reverse restriction found. 🟧

---

## 13. Ground operations

- **Stands for our types:** Two concourses (B/C), 23 jet bridge gates per public reporting; specific stand/apron assignment not published in the sources checked. 🟧
- **Push-back:** All commercial aircraft contact Ground Control for advisories prior to pushback on the terminal ramp.
- **Standard taxi routes:** Not detailed in sources checked; note the following published taxiway restrictions:
  - Twy C between Twy L and Twy D — closed to air carrier aircraft / restricted to aircraft ≤100,000 lb.
  - Twy A between north Twy B and Twy D — closed to aircraft with wingspan >149 ft.
  - Twy M — closed to air carrier aircraft.
  - Twy J east of RWY 17L/35R — closed to air carrier aircraft.
- **Hot spots / tight taxiways:** Not captured from sources checked beyond the restrictions above — verify hot-spot chart on current AIRAC. 🟧
- **Follow-me:** Availability not captured — verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** High-desert basin climate at 4,415 ft. NOAA 1991–2020 normals: July mean daily maximum ≈93.9°F (34.4°C), record high 108°F (42°C); winters cold with snow. `[Wikipedia/NOAA]`
- **Seasonal hazards:** Summer — high density altitude on hot afternoons; mountain-wave turbulence and strong gusty winds, especially with westerly flow over the Sierra crest; intensive glider/soaring activity (including 30–50 NM south during mountain-wave conditions). Winter — mountain weather systems bringing snow/icing; airport is FAA-flagged as a **"Cold Temperature Airport"** requiring altimetry temperature correction at or below -13°C.
- **Local effects:** Terrain-channelled wind through the Truckee Meadows bowl; afternoon convective/orographic effects near the Sierra Nevada and Carson Range.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here. Check specifically for mountain-wave/turbulence AIRMETs and winter mountain-weather advisories.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: **ILS RWY 35L DME status** and **FMG TACAN AZM status** (both reported U/S on the OFP at time of this build), other navaid/runway/taxiway closures, lighting, obstacle/crane, RFF status, GPS/RAIM for RNP operations, and current SID/STAR validity. Source: official AIS / SimBrief OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Secondary/enroute destination-area alternate on transcontinental West-Coast routings (e.g., the reference EDDF–KSFO OFP); not a planned network destination — a **mountainous secondary alternate** requiring the performance and CFIT constraints in §3 to be briefed if ever selected.
- **Nearest suitable alternates:** KRTS Reno-Stead (~11 NM NW, GA field — limited/verify suitability for our types); KCXP Carson City (~18 NM S); KTRK Truckee-Tahoe (~20 NM SW — also high-terrain); KSPZ Silver Springs (~25 NM E). Not cross-checked against the VAMSYS mirror in this build — verify against the Fleet/Route register. 🟧
- **Fuel-uplift notes:** 100LL and Jet A-1+ confirmed available via Atlantic Aviation and Stellar Aviation FBOs; exact hours and contract-fuel arrangements not confirmed — verify before planning an uplift. 🟧
- **Range/perf flags for our fleet:** Hot-and-high density altitude is the dominant performance driver — takeoff weight/climb-gradient compliance over terrain, not runway length, is the limiting factor for widebody-class types even off the 11,001 ft runway. Link to relevant OM B performance data before using KRNO operationally.

---

## 17. Fleet-specific notes (optional)

- **Widebody types (OM B):** hot-and-high summer density altitude will drive a real takeoff-weight/payload penalty off any runway at KRNO; do not assume the 11,001 ft main runway removes the constraint — it is a thrust/climb-gradient limit, not a field-length limit, on hot afternoons.
- **RNP AR-capable types only:** the RNAV (RNP) W/Y/Z approaches are RNP AR procedures — restrict planning to types/crews with confirmed RNP AR authorisation; all others should plan around ILS/LOC or RNAV (GPS) procedures (subject to the current DME NOTAM).
- **All types:** confirm winter cold-temperature altimetry corrections (below -13°C) are applied per OM B procedure when operating in the cold season.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- ~~Displaced-threshold value for RWY 17R (1,000 ft SkyVector vs 999 ft OurAirports — minor discrepancy)~~ — **RESOLVED 2026-07-25**: independent AirNav (FAA eff. 2026-06-11) pull confirms 1,000 ft, matching SkyVector; OurAirports' 999 ft superseded. No longer an open item.
- ~~Current mag variation epoch~~ — **RESOLVED 2026-07-25**: confirmed 13° E (2020 epoch) via a direct AirNav FAA facility-data pull. No longer an open item — though given the known rapid local drift that drove the 2022 runway redesignation, re-check the epoch again at the next scheduled data refresh as routine good practice, not because the current figure is in doubt.
- Primary source verification: this build uses FAA d-TPP/Chart Supplement data mirrored via SkyVector/AirNav rather than a direct FAA eAIP/AeroNav fetch. §7 declared distances are dual-source confirmed; a second direct AirNav pull (2026-07-25) also confirmed mag variation, ARFF Index C, and all published comms frequencies. This caveat now applies only to procedural/chart-level data (ILS idents, exact ATC hours, SID gradients, circling minima) that neither mirror publishes as text.
- **ILS RWY 35L DME and FMG TACAN AZM status** — this is live NOTAM state, not a static-source research gap; correctly re-checked at planning (§15) rather than closed here.
- ~~Exact ILS component idents/frequencies for RWY 35L and 17R (X/Y/Z variants)~~ — **RESOLVED 2026-07-25**: retrieved directly from the FAA IAP chart PDFs (d-TPP cycle 2606, aeronav.faa.gov) — 35L I-AGY/109.90/Chan 36, 17R I-RNO/110.90/Chan 46 (same localizer serves the X/Y/Z/LOC-Y variants). Both ILS-equipped runway ends now source-confirmed in §9. No longer an open item.
- RNP AR authorisation status for K Global fleet/crews — needed before planning to use any RNAV (RNP) W/Y/Z approach at KRNO; this is an internal fleet/ops decision, not a public-source lookup.
- Exact SID climb-gradient/minimum-climb figures (RENO ONE, MUSTANG ONE, WAGGE EIGHT, ZEFFR NINE, ALPYN ONE, PVINE FIVE, SPARKS ONE OBSTACLE) — read off the current AIRAC chart at planning time; not published as text in any reachable source.
- Circling approach minima/NA status per runway end — verify on current chart.
- ATIS/Approach/Delivery exact operating hours — re-checked directly against AirNav 2026-07-25; only airport-wide "Attendance: CONTINUOUS" is published, no per-facility hour windows in any reachable source.
- De-icing availability/procedure, stand/apron assignment, hot-spot chart detail — not published in any reachable source checked.
- ICAO PCN equivalence for the published FAA PCR pavement values, if required for OM cross-reference.
- Nearest-alternate list not yet cross-checked against the VAMSYS mirror/Fleet register.
- Formal K Global crew-qualification policy for KRNO if it is ever used operationally rather than only as an OFP alternate reference — internal policy decision, not a source-research item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- FAA Chart Supplement / d-TPP data for KRNO, AIRAC cycle 2607, eff. 2026-07-09 — as mirrored by SkyVector — https://skyvector.com/airport/RNO/Reno-Tahoe-International-Airport (retrieved 2026-07-25).
- FAA airport facility data for KRNO (cycle 2606, eff. 2026-06-11) — AirNav — https://www.airnav.com/airport/KRNO (retrieved 2026-07-25, re-pulled again 2026-07-25 for a targeted comms/mag-var/ARFF/ILS check). *Second pull confirmed mag variation (13°E, 2020 epoch), ARFF Index C, all published ATIS/Delivery/Ground/Tower/Approach frequencies, FMG VORTAC (117.90), and the noise-abatement remark text verbatim; confirmed that ILS component idents/frequencies for RWY 35L and 17R are published only as chart-title/PDF references, not as extractable text.*
- **FAA IAP charts (d-TPP cycle 2606, eff. 11 Jun–09 Jul 2026), retrieved directly from aeronav.faa.gov, 2026-07-25** — "ILS or LOC RWY 35L" (https://aeronav.faa.gov/d-tpp/2606/00346IL35L.PDF), "ILS X or LOC X RWY 17R" (https://aeronav.faa.gov/d-tpp/2606/00346IXLX17R.PDF). Localizer ident/frequency/channel data confirmed: 35L I-AGY 109.90 Chan 36; 17R I-RNO 110.90 Chan 46.
- OurAirports — https://ourairports.com/airports/KRNO/ , https://ourairports.com/airports/KRNO/runways.html , https://ourairports.com/airports/KRNO/frequencies.html (retrieved 2026-07-25).
- Wikipedia — Reno–Tahoe International Airport — https://en.wikipedia.org/wiki/Reno%E2%80%93Tahoe_International_Airport (retrieved 2026-07-25) — runway redesignation history, general facility description.
- Wikipedia — Peavine Peak — https://en.wikipedia.org/wiki/Peavine_Peak (retrieved 2026-07-25) — terrain elevation/coordinates for CFIT quantification.
- Wikipedia — Mount Rose (Nevada) — https://en.wikipedia.org/wiki/Mount_Rose_(Nevada) (retrieved 2026-07-25) — terrain elevation/coordinates for CFIT quantification.
- Wikipedia — Reno, Nevada (climate table, NOAA 1991–2020 normals) — https://en.wikipedia.org/wiki/Reno,_Nevada (retrieved 2026-07-25) — summer temperature data for density-altitude discussion.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build. High-terrain/hot-and-high secondary alternate for the reference EDDF–KSFO OFP; CFIT and performance flags set 🟥; ILS 35L DME and FMG TACAN NOTAMs cross-referenced; RNP AR authorisation and several procedural/administrative items left open pending primary AIP access and VAMSYS cross-check. |
| v0.1.1 | 2026-07-25 | Declared distances verified against FAA Chart Supplement (cycle 2606 eff. 2026-06-11) via AirNav; §7 reconciled — all 6 runway ends MATCH; prior RWY 17R displaced-threshold discrepancy (999 ft vs 1,000 ft) resolved in favour of 1,000 ft. Declared-distance open item removed from §18. |
| v0.1.2 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.2 | 2026-07-25 | Open-item close-out pass: direct AirNav FAA facility-data re-pull confirmed mag variation (13°E, 2020 epoch), ARFF Index C, all published comms frequencies, FMG VORTAC, and the noise-abatement remark text verbatim — mag-variation epoch item closed and removed from §18. Confirmed that ILS component idents/frequencies for RWY 35L/17R and exact per-facility ATC hours are not text-extractable from any reachable free source (chart-title/PDF references and airport-wide "CONTINUOUS" only). **Status set to In review (not Verified)**: 35L/17R ILS idents/frequencies, ILS 35L DME/FMG TACAN live NOTAM status, RNP AR fleet authorisation, and exact SID climb-gradient figures are the material gaps; remaining open items are internal policy decisions (crew-qualification gate) or inherently time-bound/NOTAM data correctly deferred to §15. |
| v1.0 | 2026-07-25 | ILS close-out: retrieved the actual FAA IAP chart PDFs directly from aeronav.faa.gov (d-TPP cycle 2606) for RWY 35L and 17R and read the printed localizer ident/frequency/channel block off each plate — 35L I-AGY 109.90 Chan 36, 17R I-RNO 110.90 Chan 46 (the latter confirmed as the shared localizer for the X/Y/Z chart variants and the LOC Y procedure). §9 updated with confirmed idents/frequencies and 🟩 flags; §10 cross-referenced; §18 ILS open item resolved and removed. This was the last material public-source gap blocking Verified — the live ILS 35L DME/FMG TACAN NOTAM status remains correctly deferred to §15 (perishable, not a static-source gap), and RNP AR fleet authorisation plus exact SID climb-gradient figures are internal-policy/at-planning items, not public-source blockers. **Status set to Verified · v1.0.** |
| v1.0.1 | 2026-07-26 | Folded into a 4-page pack: moved into `KRNO — Reno-Tahoe Intl/` as the Briefing page, alongside new Dispatch, Departure and Arrival pages. Content unchanged aside from re-basing relative links one level deeper (the section templates, Airspace, OM E Operations) and adding companion-page cross-links in the read-me. |
