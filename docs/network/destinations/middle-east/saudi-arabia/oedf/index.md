# OEDF — King Fahd Intl · Airport Briefing

**OEDF / DMM** · Dammam, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the GACA/SANS Saudi eAIP (AD 2 OEDF) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N26°28'16" / E049°47'52" (26.4711, 49.7978) `[GACA eAIP AD 2.2]` |
| Field elevation | **75 ft** (reference temperature 45.2°C) `[GACA eAIP AD 2.2]`; commonly cited as 72 ft in secondary sources |
| Mag variation | 3° E (2020 epoch), annual change −0.05° `[GACA eAIP AD 2.2]` |
| Time zone | UTC+3 (AST), no DST |
| Runway(s) | **16L/34R** and **16R/34L** — two parallel pairs, all four ends 4,000 × 60 m |
| Preferential runway | Not published — confirm with ATC on the day 🟧 |
| Longest LDA | 4,000 m (all four ends) |
| Approaches | **ILS CAT I** all four ends, **RNP** all four ends, **VOR** on 16R/34L/34R (no VOR chart found for 16L) |
| RFF category | **CAT 9** 🟩 |
| Control type | **Radar** — Dammam Approach, Class C CTR (10 NM) / TMA / Class A CTA |
| Elevation class | Near sea-level (75 ft) — **not** hot-and-high; extreme summer heat (ref. temp 45.2°C) is the standing performance factor |
| Special-airport status | **Land area is the largest of any airport in the world** (780 km² per Guinness World Records) — mostly undeveloped desert; the developed/utilised footprint is much smaller (~37 km²). Widely reported "CAT III" claims refer to approach-lighting standard, **not** ILS category |
| Customs / PoE | **Yes** — H24 `[GACA eAIP AD 2.3]` |
| K Global category | **Not set in VAMSYS** 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **OBBI, OTBD, OTHH** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **n/a** — not set in VAMSYS 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Extremely flat Eastern Province coastal plain; threshold elevations range only ~51–75 ft across all four runway ends. No CFIT-relevant terrain. |
| Runway length vs fleet perf | 🟩 | 4,000 m on both pairs is ample for any K Global widebody. |
| Approach availability / minima | 🟩 | ILS CAT I on all four ends — despite ALSF-2/CAT-II-standard approach lighting, the ILS itself is CAT I only; plan CAT I minima. |
| Airspace / traffic / control | 🟩 | Radar environment (Dammam Approach), Class C TMA/CTR; serves the Eastern Province/Dammam-Khobar-Dhahran metro and Saudi Aramco's home region — a real but not saturated traffic environment. |
| Weather / seasonal hazard | 🟧 | Summer shamal winds/dust and extreme heat (ref. temp 45.2°C, all-time record ~51°C) are the standing hazards; Gulf-coast fog is plausible by regional analogy but not independently confirmed for this field. |
| Curfew / slots / hours | 🟩 | No curfew found — H24 operation across all published service categories. |
| RFF category vs our types | 🟩 | CAT 9 — adequate for the network's widebody types. |
| Fuel availability | 🟩 | Jet A-1, H24, hydrant (terminal gates) + tanker. |
| Customs / handling / security | 🟧 | H24 customs/immigration confirmed; specific ground-handling contractor for our operation not confirmed. **VAMSYS category is not set — flag for reconciliation.** |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OEDF sits on the flat Eastern Province coastal plain near the Arabian Gulf — runway threshold elevations across the whole four-runway-end complex range only from ~51 ft to ~75 ft AMSL, an extremely low-relief site. There is **no CFIT-relevant terrain** at this field.

### 3.2 Airborne conflict / traffic 🟩
OEDF is a genuine multi-role hub — passenger (Flynas/Flyadeal base), cargo (nine dedicated cargo stands; a genuinely multi-carrier freight gateway including DHL, Cargolux, Lufthansa Cargo, Emirates SkyCargo, Turkish Cargo among others), business aviation (a growing GA/FBO presence, with Universal Aviation awarded the sole GA-terminal ground-handling mandate in a reported 2026 development), and Saudi Aramco's own aviation operations (branded "Mukamalah," serving company sites at Yanbu, Tanajib, Shaybah and Haradh) — but is not among the region's most saturated terminal environments. A local **Oxford Saudi Flight Academy** visual training circuit operates east of RWY 16L/34R (contained within 2 NM, 1,000 ft AGL) — be aware of concurrent GA/training traffic. Cross-ref the [Middle East airspace brief](../../../../airspace/middle-east.md) — Dammam operations sit within the **Jeddah FIR (OEJD)** (general knowledge, not independently AIP-confirmed this pass 🟧).

### 3.3 Runway excursion 🟩
No displaced thresholds found; declared distances are internally consistent, with a **120 m stopway** giving ASDA (4,120 m) a margin above TORA/TODA/LDA (4,000 m) on all four ends. No seasonal contamination/braking-action concern in this desert climate.

### 3.4 Weather threat 🟧
**Summer shamal winds** (a hot, dry NW wind peaking in intensity around June) lift regional dust/sand and can reduce visibility; **extreme summer heat** is directly evidenced by the AIP's own 45.2°C reference temperature, with daily summer highs commonly exceeding 45°C and an all-time record near 51°C. **Gulf-coast fog** is a plausible factor by regional analogy (documented at nearby Abu Dhabi) but was **not independently confirmed for OEDF specifically** — treat as an open item. See §14.

### 3.5 Operational considerations 🟧
Two durable items to plan around: (1) **VAMSYS category is not set** for this field — reconcile before treating any category-dependent planning figure as final; (2) **extreme summer heat** (45.2°C reference temperature) is a genuine performance-planning input even though runway length is non-limiting. The airport's much-repeated "largest in the world by land area" (780 km²) distinction is a flavour fact, not an operational one — most of that area is undeveloped desert, with the actually built-up/utilised footprint closer to ~37 km².

---

## 4. Cautions & Warnings

- **VAMSYS category is not set for this field** 🟧 — confirm before relying on any category-dependent planning assumption.
- **Do not describe OEDF as CAT II/III** — widely repeated claims referring to "CAT III" describe the ALSF-2 **approach-lighting standard**, not the ILS decision-height category; the published ILS is **CAT I only** on all four ends.
- **Summer reference temperature 45.2°C** (record ~51°C) — factor density altitude into takeoff performance planning on the hottest days.
- **Summer shamal winds/dust** can reduce visibility with limited notice — check SIGMET/dust advisories in season.
- A local GA training circuit operates east of RWY 16L/34R — maintain traffic awareness in that sector.
- Field's 780 km² "largest airport" land-area record is mostly undeveloped desert — do not confuse with a large built/paved footprint.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted-crew "special airport" in reachable sources. 🟩
- **Crew-qualification gate:** None identified beyond standard CAT I currency. 🟩
- **Operating restrictions / bans:** Noise abatement: below 10,000 ft, turbine aircraft max 200 KT in the circuit, 250 KT elsewhere unless ATC directs otherwise `[GACA eAIP AD 2.22]`. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Saudi international arrival; no special state permit required. 🟩
- **Operations notes:** Aerodrome operator — **GACA**. **RWY 34L is the designated preferential/primary instrument runway**; 34L/34R used in calm-wind conditions `[GACA eAIP AD 2.22]`. Low-vis procedure: when RVR < 550 m, surface vis < 800 m, or ATC cannot observe ground movement — one arrival/one departure at a time, all departures from full runway length, follow-me on request.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[GACA eAIP AD 2.3]` | 🟩 |
| AD operating hours | H24 — no curfew identified | 🟩 |
| Night / curfew restrictions | None found in reachable AIP text | 🟩 |
| RFF category | CAT 9 | 🟩 |
| Fuel | Jet A-1, H24, hydrant (terminal gates) + tanker ("no limits" stated capacity) | 🟩 |
| PCN | Runway PCN 103/F/A/X/T (16L/34R), 111/F/A/X/T (16R/34L); apron PCN 64/R/B/X/T | 🟩 |
| Customs | H24 `[GACA eAIP AD 2.3]`; designated Airport of Entry | 🟩 |
| Handling / FBO | Not confirmed for our operation; **Universal Aviation** holds the GA-terminal mandate (2026); Kingdom Aviation, JetzHub, Aerospace Jet also present as FBOs | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16L | 4,000 × 60 m | Concrete & asphalt / PCN 103/F/A/X/T | 4,000 m | 4,000 m | 4,120 m | 4,000 m | 120 m stopway |
| 34R | 4,000 × 60 m | Concrete & asphalt / PCN 103/F/A/X/T | 4,000 m | 4,000 m | 4,120 m | 4,000 m | 120 m stopway; **designated preferential/primary instrument runway** |
| 16R | 4,000 × 60 m | Concrete & asphalt / PCN 111/F/A/X/T | 4,000 m | 4,000 m | 4,120 m | 4,000 m | 120 m stopway |
| 34L | 4,000 × 60 m | Concrete & asphalt / PCN 111/F/A/X/T | 4,000 m | 4,000 m | 4,120 m | 4,000 m | 120 m stopway |

*Source: GACA/SANS eAIP AD 2.12/2.13 (AIRAC AMDT 06/24, eff. 2025-01-02 — retrieved 2026-07-26). No displaced thresholds found. All distances in metres. The two runway pairs are separated by roughly 2,146 m with a cross-taxiway connection — the east side is generally associated with Saudi Aramco Aviation, the west with commercial carriers, per Wikipedia (not independently AIP-confirmed as a formal designation).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Dammam Information | 128.050 | H24 | |
| Delivery | — | Not separately listed — likely handled on Ground/Tower 🟧 | H24 | |
| Ground | Dammam Ground Control | 121.650 (East) / 121.750 (West) / 125.400 (West standby) | H24 | |
| Tower | Dammam Tower | 124.350 (West) / 118.050 (East) | H24 | |
| Approach | Dammam Approach | 126.300 (Upper) / 126.100 (Lower) / 125.000 (ARR/DEP) | H24 | |
| Centre / FIR | Jeddah FIR (OEJD) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md); FIR identity not independently AIP-confirmed this pass 🟧 |

*Source: GACA/SANS eAIP AD 2.18 (retrieved 2026-07-26); cross-checked against OurAirports and SkyVector. Treat exact current-cycle frequencies as 🟧 pending a live-AIRAC cross-check. No discrete Clearance Delivery frequency was found in the retrieved extract.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/DME 16L | IMBF | 111.700 | H24 | CAT I |
| ILS/DME 34R | IABF | 110.700 | H24 | CAT I |
| ILS/DME 16R | IWSR | 108.100 | H24 | CAT I |
| ILS/DME 34L | IWMR | 108.900 | H24 | CAT I |
| DVOR/TACAN | KFA | 112.300 (CH70X) | H24 | On field |

*All four ILS installations are explicitly CAT I per the current AIP text. Approach lighting is ALSF-2 (900 m, CAT II design standard) on all four ends — this is a lighting-hardware standard, not an ILS-category claim; do not conflate the two. Source: GACA/SANS eAIP AD 2.19 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft `[GACA eAIP AD 2.17]`; TL by QNH — verify current chart.
- **Speed:** 250 KIAS below FL100 (Class C TMA norm), 200 KT max in the circuit below 10,000 ft — confirm current chart.
- **Preferential runway logic:** **RWY 34L is the designated preferential/primary instrument runway**; 34L/34R used in calm-wind conditions.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 16L | ILS or LOC, RNP | CAT I; no VOR chart found in the reachable index 🟧 |
| 34R | ILS or LOC, RNP, VOR | CAT I |
| 16R | ILS or LOC, RNP, VOR | CAT I |
| 34L | ILS or LOC, RNP, VOR | CAT I; preferential/primary instrument runway |

- **STARs (names only):** RNAV STAR RWY 16L-16R and RWY 34L-34R (combined charts per pair) — exact designators not extracted this pass; pull the current-AIRAC name at planning. 🟧
- **LVP:** Low-vis procedure triggers at RVR < 550 m or surface vis < 800 m — one arrival/one departure at a time; no CAT II/III ILS capability published.
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); named holds **LOSAX** (STAR RWY 34L/34R and missed approach) and **RESAN** (missed approach/holding, multiple runways) — verify current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV SID and conventional SID per runway end (16R/34L/16L/34R); a Radar Vector SID also exists for RWY 34L-34R. `[GACA eAIP AD 2.24]`
- **RNP / climb-gradient requirements:** No special climb-gradient requirement identified — flat coastal field. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Apron 2 Stand 1/3 (Code F-capable) each require exclusive use of an adjacent taxiway (P1/P2) while occupied — confirm stand-specific procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified in reachable sources. 🟩
- **De-icing:** **NIL** — not provided, consistent with the desert climate. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) (non-applicable here).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Below 10,000 ft, turbine aircraft max 200 KT in the circuit, 250 KT elsewhere unless ATC directs otherwise.
- **Night noise / dB limits:** Not published; no curfew or noise-charge regime identified.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Six numbered aprons (1, 2, 4, 5, 8, 11), all concrete PCN 64/R/B/X/T; **Apron 2 Stand 1 and Stand 3 are Code F-capable** (A380-class), each requiring exclusive use of an adjacent taxiway while occupied; Stand 2 on the same ramp usable by Code C/D concurrently. Field is generally regarded as Code E-capable throughout (747-400/A340-600), with Code F use possible but not broadly recommended since only the runways meet Code F standard, not all taxiways/gates. 🟧 | 🟧
- **Push-back:** Not individually confirmed for our operation. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** A designated **hotspot at the TWY Romeo–Juliet 3 intersection** near RWY 16L/34R (runway-incursion risk; stop bars/signage installed) — brief before ground movement in that area. Stands 19, 20, 21 are **not visible from the tower** — extra vigilance required.
- **Follow-me:** Available on request per low-vis procedure; general availability not otherwise confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot desert/Gulf-coast climate.
- **Seasonal hazards:** **Summer shamal winds** (hot, dry NW wind, most intense around June) lift regional dust/sand. **Extreme summer heat** — AIP reference temperature 45.2°C; daily summer highs commonly exceed 45°C, with an all-time record near 51°C. **Gulf-coast fog** is plausible by regional analogy (confirmed at nearby Abu Dhabi, peak Dec/Jan) but not independently confirmed for OEDF specifically. 🟧
- **Local effects:** High coastal humidity typical of the Arabian Gulf littoral, worsening apparent-temperature/heat-stress conditions especially in transitional months.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET (dust). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current Middle East conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block. See also the [Middle East airspace brief](../../../../airspace/middle-east.md) §9 for the region's live conflict-zone picture.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates **OBBI** (Bahrain — one of the world's shortest international scheduled routes from here, ~87 km great-circle), **OTBD**, **OTHH** (Doha) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1, H24, hydrant + tanker ("no limits" stated capacity); specific into-plane provider not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific limiting factor identified at OEDF — runway length, RFF category and navaid infrastructure are non-limiting for any K Global type. Note: only the runways meet Code F standard here — do not assume gate/taxiway Code F capability fleet-wide without confirming the specific stand (Apron 2/1 or /3). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **VAMSYS category is not set for this field** — reconcile against operator/type data before treating as final.
- **VAMSYS taxi-in/taxi-out figures are not set** — not available for planning.
- **Clearance Delivery frequency** — not found in the retrieved AIP extract; likely handled on Ground/Tower.
- **FIR identity (Jeddah FIR/OEJD assumption)** — plausible from general knowledge but not independently confirmed against a primary ENR-section source this pass.
- **Take-off minima, engine run-up, reverse-thrust policy** — not confirmed in reachable sources.
- **Ground handling agent for our operation** — not confirmed.
- **Gulf-coast fog frequency specific to OEDF** — not found; only a regional (Abu Dhabi) analogue exists.
- **AIP currency** — retrieved cycle dated AMDT 06/24 (2025-01-02); verify against current AIRAC before operational use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **GACA/SANS eAIP, AD 2 OEDF Dammam/King Fahd International**, AIRAC AMDT 06/24, eff. 2025-01-02 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEDF%20DAMMAM%20-%20KING%20FAHD%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).
- Guinness World Records — "Largest airport (area)" — https://www.guinnessworldrecords.com/world-records/100257-largest-airport-area (retrieved 2026-07-26). *780 km² land-area record.*
- Wikipedia — "King Fahd International Airport" — https://en.wikipedia.org/wiki/King_Fahd_International_Airport (retrieved 2026-07-26). *Terminal, cargo, history, Bahrain-route corroboration.*
- acukwik — https://acukwik.com/Airport-Info/OEDF (retrieved 2026-07-26). *Cross-check.*
- Business Air News — "Universal secures Dammam GA terminal mandate" — https://www.businessairnews.com/hb_airportpage.html?recnum=1359 (retrieved 2026-07-26). *2026 GA-handling development.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
