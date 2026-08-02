# TISX — Henry E Rohlsen · Airport Briefing

**TISX / STX** · Christiansted/Kingshill, U.S. Virgin Islands · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the FAA Aeronautical Information Publication (AIP), Part 3 — Aerodromes (Virgin Islands), cross-checked against FAA Chart Supplement/d-TPP data; approaches/departure procedures are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 17°42′05.4″N / 064°48′07.0″W (17.7015, -64.8019) `[FAA AIP AD 2.2 TISX]` |
| Field elevation | 74 ft / 22.6 m AMSL — RWY 10 threshold/TDZE 74.1 ft; RWY 28 threshold 22.5 ft (runway slopes down west-to-east) |
| Mag variation | 13° W (2000 epoch) `[FAA AIP AD 2.2/2.19]` 🟧 current-day value not re-confirmed against a later epoch |
| Time zone | UTC−4 (Atlantic Standard Time), no DST observed |
| Runway(s) | 10/28, 10,004 × 150 ft (3,049 × 46 m), asphalt, grooved |
| Preferential runway | No formal published rule; RWY 10 carries the field's only precision-capable infrastructure (ILS + MALSR) and aligns into the prevailing easterly trade wind — the de facto preferred runway. RWY 28 is the non-precision, displaced-threshold reciprocal (see §3.5) 🟧 |
| Longest LDA | 9,003 ft (RWY 10); 8,998 ft (RWY 28, 1,000 ft displaced threshold) |
| Approaches | ILS or LOC RWY 10 (ident STX); RNAV (GPS) RWY 10; RNAV (GPS) RWY 28 — **no ILS published for RWY 28** |
| RFF category | FAA Part 139 ARFF Index C (Class-I certified 5/1/1973); ICAO-scale CAT equivalent not confirmed 🟧 |
| Control type | Procedural/Tower — Saint Croix Tower HX 0700–2200 local — with **San Juan CERAP (TJZS)** radar approach/departure control; San Juan CERAP issues IFR clearance by phone/frequency when the Tower is closed |
| Elevation class | Sea-level (74 ft) — **not** hot-and-high; density altitude is a non-factor here |
| Special-airport status | Not operator-categorised as restricted in reachable sources; no RNP AR ban or circling restriction found — verify current AIRAC 🟧 |
| Customs / PoE | CBP/PoE presence indicated `[cbp.gov]`; desk hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **TJSJ** (San Juan), **TNCM** (Sint Maarten) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | No close-in high terrain published for the approach paths in reachable sources; St. Croix's interior hills (highest ~1,088 ft) lie north/east of the field — not quantified against an MSA chart this pass. |
| Runway length vs fleet perf | 🟩 | 10,004 ft is exceptionally long for the region — non-limiting for any K Global narrowbody; widebody pavement-strength status is unconfirmed (see §7). |
| Approach availability / minima | 🟧 | RWY 10: ILS/LOC + RNAV(GPS), MALSR. RWY 28: RNAV(GPS) only, non-precision, REIL, 1,000 ft displaced threshold — a real capability gap between the two ends. |
| Airspace / traffic / control | 🟧 | Low-density field (historically ~99 movements/day, mostly air taxi/GA); Tower HX 0700–2200; San Juan CERAP covers approach/departure and after-hours IFR clearance. No Caribbean/San Juan CERAP area-airspace brief exists in OM C yet — see §3.2/§18. |
| Weather / seasonal hazard | 🟥 | Atlantic hurricane season (Jun–Nov, peak Aug–Oct) is the field's defining seasonal threat; Saharan dust haze also affects the wider Caribbean in summer. |
| Curfew / slots / hours | 🟧 | No curfew/slot regime; Tower HX 0700–2200, runway nominally H24 per the airport authority, ARFF unavailable 2300–0500 — an operational gap for any very-late/very-early movement. |
| RFF category vs our types | 🟧 | FAA Index C; ICAO-scale equivalence not confirmed — verify against K Global's largest type routinely rotated through TISX. |
| Fuel availability | 🟧 | 100LL confirmed hours (0700–1900, PPR outside); Jet A-1+ listed but hours not separately confirmed. |
| Customs / handling / security | 🟧 | CBP/PoE presence indicated; desk hours and handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
Henry E Rohlsen sits at 74 ft on St. Croix's flatter southwestern coastal plain; the island's interior hills (highest point roughly 1,088 ft, north-central St. Croix) lie well clear of the immediate airport environment. No close-in high terrain was identified for the RWY 10/28 approach paths in reachable sources, but no MSA-sector figure was independently confirmed this pass — verify against the current approach chart before treating terrain as a settled non-issue.

### 3.2 Airborne conflict / traffic 🟧
TISX is a low-density field — historically around 99 movements/day (68% air taxi, 25% general aviation, 6% scheduled commercial, 1% military, per a 12-month sample) — not a high-traffic environment. **Saint Croix Tower** operates HX 0700–2200 local; outside those hours, and for approach/departure control generally, **San Juan CERAP (TJZS)** provides radar service (128.65/279.6) and, when the Tower is closed, IFR clearance by phone or frequency. **No Caribbean/San Juan CERAP-area airspace brief yet exists in OM C** — the [North America airspace brief](../../../../airspace/north-america.md) on file covers only the EDDF–KSFO Canada/western-US polar reference route and does **not** address the Caribbean or San Juan CERAP; treat this as an open coverage gap (see §18) rather than an indication the airspace has been reviewed.

### 3.3 Runway excursion 🟧
RWY 28 carries a published **1,000 ft displaced threshold**, which is also reflected in RWY 10's accelerate-stop/landing distances (9,003 ft) running short of its full take-off distances (10,004 ft) — the two ends share the same physical geometry (see §7). A charted **217 ft building obstacle sits 5,330 ft from the runway, 800 ft right of centreline**, associated with the RWY 28 approach. Birds and wildlife are noted on and in the vicinity of the airport (published AIP remark) — a standing bird-strike/excursion consideration on both ends.

### 3.4 Weather threat 🟥
The Atlantic **hurricane season (June–November, climatological peak August–October)** is the field's defining seasonal hazard — a direct threat to the airport, its ARFF/tower availability and the wider USVI network, with potential for extended closure/diversion during a storm. The Caribbean is also subject to **Saharan Air Layer dust intrusions** in the summer months, reducing visibility regionally. Prevailing conditions are the typical **easterly trade winds**; exact seasonal wind-rose data was not independently sourced this pass. 🟧

### 3.5 Operational considerations 🟥
Plan around a genuine **capability gap between the two runway ends**: RWY 10 carries the field's only ILS/LOC, a MALSR, and precision-instrument markings; RWY 28 is RNAV(GPS)-only, non-precision, REIL-equipped, displaced-threshold, and its approach is **published as sometimes obscured by smoke from a landfill east of the airport** — RWY 10 is the de facto preferred/primary end when wind allows. Overnight, the **Tower closes at 2200 and ARFF is unavailable 2300–0500**; the airport authority (VIPA) states the runway itself is nominally available H24, with pilot-controlled lighting (MALSR RWY 10 / HIRL RWY 10-28) activated via CTAF 2300–0700 — a real gap for any very-late or very-early movement, mitigated only by San Juan CERAP's phone/frequency clearance service and pilot-activated lighting. TISX's **10,004 ft runway is exceptionally long for the region and is not the limiting factor** for K Global operations here — unlike its USVI sibling field [TIST](../tist/index.md), where runway length is understood to be the binding constraint. The field's live VAMSYS profile (Category R, **not** a base, preferred alternates TJSJ/TNCM) is consistent with a thin-network/alternate role rather than a scheduled widebody destination — see §16/§17 for the runway pavement-strength caveat that applies if that ever changes.

---

## 4. Cautions & Warnings

- RWY 28 approach is **published as sometimes obscured by smoke from a landfill east of the airport** — brief a go-around/RWY 10 contingency.
- **Birds & wildlife on and in the vicinity of the airport** — standing bird-strike consideration.
- RWY 28 is the **weaker end**: non-precision RNAV(GPS)-only, no MALSR, REIL only, 1,000 ft displaced threshold, and a charted 217 ft obstacle 5,330 ft from the runway (800 ft right of centreline) — prefer RWY 10 when wind allows.
- **Pilot-controlled lighting after hours:** MALSR RWY 10 / HIRL RWY 10-28 activated via CTAF 2300–0700.
- **ARFF unavailable 2300–0500**; **Tower closed 2200–0700** — San Juan CERAP provides phone/frequency IFR clearance when the Tower is closed.
- **Atlantic hurricane season (Jun–Nov, peak Aug–Oct)** — the field's single most consequential seasonal threat; build schedule/diversion contingency.
- A widely repeated claim that Rohlsen Airport was a **designated Space Shuttle Transatlantic Abort Landing (TAL) alternate** could **not** be corroborated against a primary NASA/FAA source in this research pass — official TAL-site lists point to Zaragoza/Morón (Spain) and Istres (France), not the Caribbean. What **is** independently sourced: the runway was extended from 7,600 ft to its current 10,004 ft (completed 2002) and is exceptionally long for the region, historically capable of receiving Boeing 747-size equipment. Treat the shuttle-alternate claim as **unconfirmed** 🟧 — see §18.
- Published weight-bearing figures (S-100/D-175/ST-300, plus a PCN/PCR figure of 1750/F/A/X/T that does not fit the standard two-to-three-digit ICAO PCN scale) are **internally hard to reconcile** with the airport's documented history of 747-size operations — do not use either figure for widebody load planning without independent pavement-strength verification (see §7/§17).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted/special-crew-qualification airport in reachable sources. 🟧
- **Crew-qualification gate:** None published; standard type-rating currency assumed sufficient — not independently confirmed. 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction, or specific SID/DP prohibition found in reachable sources; unscheduled air-carrier operations with more than 30 passenger seats require 24-hour PPR (contact the airport manager) per the FAA Chart Supplement remark. 🟧
- **Overflight / entry / permits:** U.S. territory — standard FAA domestic rules apply for a U.S.-registered/company operation; a CBP/PoE presence is indicated for arrivals requiring immigration/customs processing (see §6/§8). 🟧
- **Operations notes:** ANSP — FAA, with **San Juan CERAP (TJZS)** providing approach/departure radar service and after-hours IFR clearance; airport owner/operator — **Virgin Islands Port Authority (VIPA)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Saint Croix Tower/Ground HX 0700–2200 local; San Juan CERAP covers approach/departure and after-hours IFR clearance | 🟧 |
| AD operating hours | Terminal 0600–2300 (VIPA); runway nominally H24 (VIPA) — FAA AIP records a 0500–2300 attendance schedule; discrepancy not reconciled | 🟧 |
| Night / curfew restrictions | No formal curfew found; **ARFF unavailable 2300–0500** and airfield surface conditions unmonitored 2300–0600 AST are the practical overnight constraints | 🟧 |
| RFF category | FAA Part 139 ARFF Index C (Class-I certified 5/1/1973); ICAO-scale equivalence not confirmed | 🟧 |
| Fuel | 100LL and Jet A-1+ — 100LL confirmed 0700–1900 (PPR outside hours); Jet A-1+ hours not separately confirmed | 🟧 |
| PCN | Reported weight limits S-100/D-175/ST-300 plus a PCN/PCR figure of 1750/F/A/X/T that does not fit the standard ICAO PCN scale — treat as unconfirmed | 🟧 |
| Customs | CBP/PoE presence indicated (cbp.gov biometric-location listing); desk hours not confirmed | 🟧 |
| Handling / FBO | **Bohlke International Aviation** listed as fuel provider/FBO; ground-handling agent for a K Global operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 10,004 × 150 ft | Asphalt, grooved; weight limits S-100/D-175/ST-300, PCN/PCR figure 1750/F/A/X/T not independently confirmed 🟧 | 10,004 ft | 10,004 ft | 9,003 ft | 9,003 ft | ILS/LOC + RNAV(GPS); MALSR; precision-instrument markings; right traffic pattern |
| 28 | 10,004 × 150 ft | Asphalt, grooved; same weight-limit caveat | 10,004 ft | 10,004 ft | 10,004 ft | 8,998 ft | RNAV(GPS) only — no ILS; **1,000 ft displaced threshold**; REIL; non-precision markings; left traffic pattern; 217 ft obstacle 5,330 ft from runway, 800 ft right of centreline |

*ASDA/LDA on RWY 10 (9,003 ft, short of the 10,004 ft TORA/TODA) reflect the same physical displaced-threshold geometry published against RWY 28's landing distance — the two figures are two views of one shared displacement, not independent reductions. All distances sourced in feet; 10,004 ft ≈ 3,049 m.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Saint Croix ATIS | 135.65 | H24 | |
| Ground | Saint Croix Ground | 121.7 | 0700–2200 | |
| Tower | Saint Croix Tower | 118.6 / 239.3 | 0700–2200 | CTAF 118.6 when Tower closed |
| Approach/Departure | San Juan CERAP | 128.65 / 279.6 (Pico del Este & El Yunque RCAG) | H24 | No secondary frequency for the south side of the island |
| Centre / FIR | San Juan CERAP (TJZS) | 128.65 (IFR clearance when Tower closed; also 787-253-8664/8665 by phone) | H24 | See §18 — no Caribbean/San Juan CERAP airspace brief on file yet |
| UNICOM | — | 123.0 | — | |
| Emergency | — | 121.5 / 243.0 | — | |

*Source: FAA AIP Part 3 AD 2.0 Virgin Islands (TISX), cross-checked against FAA Chart Supplement data effective 2026-07-09 (mirrored via SkyVector).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 10 | STX | Per current chart — exact LOC frequency not independently re-confirmed this pass 🟧 | H24 (assumed) | Localizer + glideslope + outer marker, all ident STX |
| VOR | COY (Saint Croix) | 108.20 | H24 (assumed) | ~6.1 NM from field, radial 261° |
| VOR/DME | STT (Saint Thomas) | 108.60 | H24 (assumed) | ~41 NM, cross-island reference |

*Source: FAA AIP AD 2.19 (ILS/OM data); SkyVector nearby-navaid cross-check (FAA-derived, effective 2026-07-09).*

---

## 10. Arrival

- **Transition altitude / level:** Not independently confirmed this pass — standard US TA of 18,000 ft (FL180) assumed per national convention; verify current chart. 🟧
- **Speed:** Standard 250 KIAS below 10,000 ft MSL (US domestic norm).
- **Preferential runway logic:** No formal published rule; RWY 10's ILS/MALSR/precision-markings and easterly alignment into the prevailing trade wind make it the de facto primary end; RWY 28 (RNAV-only, non-precision, displaced threshold) is the reciprocal.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 10 | ILS or LOC RWY 10 | Not confirmed 🟧 | Not confirmed 🟧 | Precision; MALSR |
| 10 | RNAV (GPS) RWY 10 | Not confirmed 🟧 | Not confirmed 🟧 | |
| 28 | RNAV (GPS) RWY 28 | Not confirmed 🟧 | Not confirmed 🟧 | Non-precision only; no ILS; displaced threshold |

- **STARs (names only):** Not published/confirmed for a field this size in reachable sources — pull the current-AIRAC arrival procedure list at planning. 🟧
- **LVP:** No LVP/low-visibility procedure specifics found in reachable sources. 🟧
- **Missed approach watch-items:** Not terrain-driven in reachable sources; the RWY 28 landfill-smoke obscuration (§3.3/§4) is the more relevant go-around trigger on that end.

---

## 11. Departure

- **SIDs / departure procedures (names only — fly the charted version):** **HAMILTON NINE** and **SNOOZ FIVE** (departure procedure/ODP charts, per current FAA chart index).
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources for either procedure — verify gradient/equipage on the current chart. 🟧
- **Take-off minima:** Published per the FAA Chart Supplement takeoff-minimums page; exact figures not transcribed here — verify current chart. 🟧
- **Start-up / push-back:** Not published for a field this size in reachable sources — coordinate with Ground on the day. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime found; San Juan CERAP issues IFR clearance by phone/frequency when the Tower is closed.
- **De-icing:** **NIL** — sea-level tropical field, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No published noise-abatement departure/approach routing found for TISX in reachable sources (unlike TIST's published Water Island noise-sensitive-area note) — treat as **NIL/not published**. 🟧
- **Night noise / dB limits:** Not published. 🟧
- **Engine run-up restrictions:** Not published. 🟧
- **Reverse thrust / idle-reverse policy:** Not published. 🟧

---

## 13. Ground operations

- **Stands for our types:** The terminal is a two-story, ~181,000 sq ft building with **10 gates** (VIPA); specific stand/apron assignment for a K Global operation is not confirmed. 🟧
- **Push-back:** Not published — confirm with Ground on the day. 🟧
- **Standard taxi routes:** Not published for this field size in reachable sources.
- **Hot spots / tight taxiways:** None published/identified in reachable sources.
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical maritime climate; prevailing **easterly trade winds**, consistent with RWY 10 carrying the field's precision-approach infrastructure. Exact wind-rose statistics not independently sourced this pass. 🟧
- **Seasonal hazards:** **Atlantic hurricane season (June–November, climatological peak August–October)** is the defining hazard for the USVI generally and this field specifically. **Saharan Air Layer dust intrusions** affect regional visibility in summer months (general Caribbean climatology, not TISX-specific data). Convective showers/squalls are a standard year-round feature of the trade-wind belt.
- **Local effects:** No terrain-driven local wind effect identified — the field sits on the flatter southwestern coastal plain of St. Croix.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, ARFF-hours NOTAMs (overnight coverage gap, §6), navaid U/S, MALSR/HIRL activation status, obstacle/crane, GPS/RAIM for RNAV approaches, tropical-cyclone/TFR bulletins. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Consistent with the live VAMSYS profile (Category R, **not** a base), TISX reads as a **destination/alternate-tier** field rather than a scheduled widebody hub.
- **Nearest suitable alternates:** Company preferred alternates **TJSJ** (San Juan) and **TNCM** (Sint Maarten) `[VAMSYS mirror 2026-07-26]` — outside this build's scope; confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** 100LL confirmed available 0700–1900 (1-hour PPR outside those hours); Jet A-1+ is listed but uplift hours are not separately confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length (10,004 ft) is **not** a limiting factor for any K Global type — a notable contrast with the USVI sibling field [TIST](../tist/index.md), where runway length is understood to be the binding constraint. The open question here is **pavement strength for widebody equipment**, not runway length (see §7/§17). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 17. Fleet-specific notes (optional)

- TISX's long runway makes field length a non-issue for any K Global type, including widebodies — but the published weight-bearing figures (S-100/D-175/ST-300 plus an unreconciled PCN/PCR value, §7) do not obviously square with the field's own documented history of receiving Boeing 747-size equipment. Given the VAMSYS profile (Category R, non-base), TISX is most likely to see narrowbody/regional K Global equipment in practice; if a widebody type is ever rotated through this field, **verify current pavement strength/ACN-PCN compatibility independently before dispatching at anything approaching MTOW** — do not rely on the figures in §7 for that decision. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Caribbean / San Juan CERAP airspace** — no OM C area-airspace brief yet covers this FIR; the [North America airspace brief](../../../../airspace/north-america.md) on file addresses only the EDDF–KSFO Canada/western-US polar reference route. This is a genuine coverage gap, not a reviewed-and-cleared area.
- **Space Shuttle Transatlantic Abort Landing (TAL) alternate claim** — could not be corroborated against a primary NASA/FAA source; official TAL-site lists (Zaragoza, Morón, Istres) do not include TISX. Treat as unconfirmed folklore pending a primary source.
- **Weight-bearing / PCN figures** — S-100/D-175/ST-300 and a PCN/PCR value of 1750/F/A/X/T do not fit the standard ICAO PCN scale and are hard to reconcile with the field's documented 747-capable history; needs independent pavement-strength verification, especially before any widebody dispatch.
- **Attendance-hours discrepancy** — FAA AIP records 0500–2300; the airport authority's own site states terminal 0600–2300, Tower 0700–2200, runway H24. Not reconciled this pass.
- **ARFF-hours discrepancy** — SkyVector/FAA Chart Supplement data states ARFF unavailable 2300–0500; the airport authority's site implies ARFF is available whenever the terminal is open (0600–2300). Not reconciled.
- **Transition altitude/level** — assumed standard US FL180 by convention, not independently TISX-sourced.
- **Take-off minima, SID/DP RNP-gradient detail, LVP/RVR triggers, stand/apron assignment, ground-handling agent, push-back procedure, noise-abatement routing** — none confirmed in reachable public sources.
- **CBP/PoE desk hours** — presence indicated via a cbp.gov listing; hours not confirmed.
- **VATSIM/IVAO San Juan CERAP cross-check** — only a boundary Letter-of-Agreement document (Piarco FIR ↔ San Juan CERAP, network-sim, not regulatory) was found referencing TISX-bound routing; no dedicated TISX/San Juan CERAP airport SOP or briefing was located.
- **ILS localizer frequency for RWY 10** — ident (STX) and geometry confirmed; exact broadcast frequency not independently re-confirmed against a current chart this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3 — Aerodromes, Virgin Islands (AD 2, TISX)** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_virgin_islands.html (retrieved 2026-07-26). *ARP, elevation, mag var, attendance hours, runway/declared-distance/lighting/comms/navaid data, general remarks.*
- **SkyVector — STX/TISX airport page**, FAA data effective 2026-07-09 — https://skyvector.com/airport/STX/Henry-E-Rohlsen-Airport (retrieved 2026-07-26). *Current-cycle cross-check: comms, runway/weight-limit/PCN figures, IAP/DP chart index, obstacle data, ARFF-hours remark, fuel provider.*
- **Virgin Islands Port Authority (VIPA) — Henry E. Rohlsen Airport (STX/TISX)** — https://www.viport.com/herastx (retrieved 2026-07-26). *Operator statement on hours, terminal size, runway-extension history, naming history.*
- **Wikipedia — "Henry E. Rohlsen Airport"** — https://en.wikipedia.org/wiki/Henry_E._Rohlsen_Airport (retrieved 2026-07-26). *Traffic statistics, historical/naming corroboration.*
- **OurAirports — TISX** — https://ourairports.com/airports/TISX/ (retrieved 2026-07-26). *ARP/elevation cross-check, PoE/customs tag.*
- **U.S. Customs and Border Protection — St. Croix Henry E. Rohlsen Airport (biometric location listing)** — https://www.cbp.gov/travel/biometrics/biometric-location/st-croix-henry-e-rohlsen-airport (retrieved 2026-07-26). *CBP/PoE presence indication.*
- **Virtual San Juan CERAP (VATCAR) — Piarco FIR (TTZP) & San Juan CERAP (TJZS) Letter of Agreement** — https://sanjuan.vatcar.net/wp-content/uploads/2020/09/ZSU-TTZP.pdf (retrieved 2026-07-26). *Network-sim, not regulatory — tier-4 cross-check confirming San Juan CERAP handling of TISX-bound traffic and FIR boundary structure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
