# OJAI — Queen Alia Intl · Airport Briefing

**OJAI / AMM** · Zizya, Amman, Jordan · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Jordan CARC AIP (AD 2 OJAI, AIRAC AMDT 13/2016 cycle, amended through AMDT 84/2017) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 31°43′21.20″N / 35°59′35.57″E (31.72256, 35.99321) `[Jordan CARC AIP AD 2 OJAI 2.2, AMDT 13/2016]`; Navigraph navdata gives 31.72413, 35.99462 `[Navigraph navdata]` — ~150 m cross-source variance, not operationally significant |
| Field elevation | **2,397 ft / 730 m AMSL** (reference temperature 31.5°C) `[CARC AIP AD 2 OJAI 2.2]`. OurAirports gives 2,395 ft; Navigraph/stub gives 2,396 ft — consistent within rounding |
| Mag variation | 5° E, annual change 4.8′ E — sourced to the 2016 AIP cycle 🟧 verify current AIRAC |
| Time zone | **UTC+3 (Arabia Standard Time), year-round** — Jordan abolished seasonal DST in Oct 2022 |
| Runway(s) | **08L/26R** and **08R/26L**, both **3,660 × 61 m**, asphalt, PCN 79/F/C/W/T `[CARC AIP AD 2 OJAI 2.12]` |
| Preferential runway | Wind-dependent; **26L/26R** reported preferred when winds are calm 🟧 (VATSIM Jordan vACC cross-check — not an AIP-published rule) |
| Longest LDA | 3,660 m — all four runway ends |
| Approaches | **ILS CAT II** on **08L, 26L, 26R**; **08R has no ILS** — RNAV (GNSS) and NDB only; VOR approach also charted for 26L |
| RFF category | **CAT 10** `[CARC AIP AD 2 OJAI 2.6]` 🟩 |
| Control type | **Radar** — Amman Approach / Queen Alia Tower; the Amman (**OJAC**) FIR is classed among the region's continental radar/ADS-B FIRs — see [Middle East Airspace Briefing](../../../../airspace/middle-east.md) |
| Elevation class | Moderately elevated (2,397 ft) — **below** the OM E high-elevation working trigger (~8,000 ft); a secondary planning factor (mild density-altitude effect on hot summer days) rather than a true hot-and-high performance limit |
| Special-airport status | None categorised; standing crew-briefing items are the CAT II low-visibility environment and the Code F apron/taxi restrictions (§5) |
| Customs / PoE | **Yes — H24** `[CARC AIP AD 2 OJAI 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LLBG, OMDB, OTHH** (all cross-country — plain ICAO, no markdown link) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | AIP obstacle table shows only modest obstacles (poles ~78 m elevation on the 08L/26R approach; a telecom tower at 805 m elevation ~6.7 km from the 08R/26L threshold) — no significant close-in high terrain. |
| Runway length vs fleet perf | 🟩 | 3,660 m on all four runway ends is ample for any K Global type. |
| Approach availability / minima | 🟧 | **ILS CAT II confirmed** on 08L/26L/26R; **08R has no ILS** (RNAV/NDB only). An initial task anchor referenced "CAT III" — **not corroborated** in the reachable AIP; treated as an open discrepancy (§18). |
| Airspace / traffic / control | 🟩 | Class C Queen Alia CTR (SFC–5,500 ft), radar throughout, moderate hub traffic (~68,000 movements in 2022) — a straightforward terminal environment relative to regional mega-hubs. |
| Weather / seasonal hazard | 🟧 | Seasonal dust/sandstorms and occasional winter fog at this elevated plateau field; hot, dry summers (ref. temp 31.5°C). |
| Curfew / slots / hours | 🟩 | No curfew or slot restriction found in the AIP; ATS/administration/customs all H24. |
| RFF category vs our types | 🟩 | CAT 10 — above any K Global fleet requirement. |
| Fuel availability | 🟩 | Jet A-1, H24, no stated uplift limit `[CARC AIP AD 2 OJAI 2.4]`. |
| Customs / handling / security | 🟧 | Full handling confirmed to Code E; **limited capacity for Code F** aircraft, and hangar/repair facilities for visiting aircraft are restricted — see §5/§13. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OJAI sits on the elevated Zizya plateau south of Amman at 2,397 ft AMSL. The AIP obstacle table (AD 2.10) lists only modest obstructions — poles around 78 m AGL on the 08L/26R approach/take-off surface and a telecommunications tower (elevation 805 m, ~6.7 km from the 08R/26L threshold, bearing 252°M). There is no close-in high terrain of CFIT concern; the field's elevation itself (not surrounding terrain) is the operative planning note — verify the current MSA ring as routine practice.

### 3.2 Airborne conflict / traffic 🟩
Queen Alia CTR is Class C, surface to 5,500 ft, worked by Amman Approach (128.9) and Queen Alia Tower (119.8) under radar service; the Amman (OJAC) FIR is one of the region's continental radar/ADS-B FIRs per the [Middle East Airspace Briefing](../../../../airspace/middle-east.md), which also flags a lighter-weight **EASA Information Note** (take-risk-into-account, not "avoid at all levels") covering Israel, Jordan, Oman and Saudi Arabia — a normal awareness item here, not a heavy standing caution. Traffic is moderate for a national hub (~68,000 movements in 2022) — nowhere near the density of the network's mega-hub fields.

### 3.3 Runway excursion 🟧
No displaced thresholds are published for either runway pair. The AIP requires a **5 NM landing interval between successive arrivals on RWY 26L and 08L** and directs pilots to use minimum runway-occupancy time — a workload/sequencing item rather than a hazard in itself. Contamination is not a significant seasonal factor at this arid plateau field, though occasional winter rain (and, rarely, light snow at this elevation in the Amman area) should be briefed.

### 3.4 Weather threat 🟧
Seasonal dust and sandstorms (regional shamal-pattern events, per the [Middle East Airspace Briefing](../../../../airspace/middle-east.md)) can reduce visibility with little warning. The elevated plateau location also sees occasional winter fog/low-stratus. Summers are hot and dry (AIP reference temperature 31.5°C) with a mild density-altitude effect, consistent with the field's "moderately elevated, not hot-and-high" classification (§1).

### 3.5 Operational considerations 🟧
Code F aircraft face specific ground-handling constraints: entry to the North Apron is via Taxiway Juliet only (to stand N26), entry to the South Apron via Taxiway Sierra only (to stand S30), with mandatory follow-me guidance, minimum-power taxiing on outer engines, and a defined push-back sequence (§13). The field's standing low-visibility mitigation is its confirmed **CAT II** ILS capability on three runway ends — not CAT III (§18). Hangar space and repair facilities for visiting aircraft are limited (private companies/Royal Pavilion only).

---

## 4. Cautions & Warnings

- **08R has no ILS** — RNAV (GNSS)/NDB approach only; do not expect a precision approach on this runway end.
- **CAT II, not CAT III** — the field's confirmed low-visibility capability is Category II on 08L/26L/26R; verify current AIRAC before assuming autoland/CAT III minima.
- **5 NM landing-interval requirement** applies between successive arrivals on RWY 26L/08L — expect ATC to manage spacing accordingly; vacate expeditiously.
- **Code F entry/exit is taxiway-restricted** — North Apron via Taxiway Juliet (stand N26) only, South Apron via Taxiway Sierra (stand S30) only; follow-me and minimum-power (outer-engine) taxi are mandatory.
- **Extra caution at TWY F/G intersections with service roads** — an explicit AIP remark for both aprons.
- Seasonal **dust/sandstorm** events can drop visibility with little warning; brief a diversion contingency in season.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport." The standing briefing items are the CAT II low-visibility environment and the Code F apron/taxi restrictions. 🟧
- **Crew-qualification gate:** Standard CAT II currency required for a low-visibility approach on 08L/26L/26R; no CAT III equipment/currency applies here pending further confirmation (§18). 🟧
- **Operating restrictions / bans:** No RNP AR, circling, or night-ops restriction found in the reachable AIP; controlled VFR flight is **PPR** (prior permission required) per AD 2.22. No back-track on the runway (AIP local traffic regulation). 🟧
- **Overflight / entry / permits:** Standard Jordanian international arrival; no special state permit beyond normal customs/immigration. 🟩
- **Operations notes:** ANSP/airport administration — Civil Aviation Regulatory Commission (CARC) provides ATS; airport operated under a long-term BOT concession by Airport International Group (AIG). Full ground handling confirmed up to Code E; **limited capacity for Code F**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (Amman Approach, Queen Alia Tower, SMC ground) `[CARC AIP AD 2 OJAI 2.3/2.18]` | 🟩 |
| AD operating hours | H24 — aerodrome administration, customs, health, AIS, ARO, MET, ATS, fuelling, handling, security, de-icing all H24 | 🟩 |
| Night / curfew restrictions | None found in the reachable AIP | 🟩 |
| RFF category | CAT 10 | 🟩 |
| Fuel | Jet A-1, H24, no stated limit `[CARC AIP AD 2 OJAI 2.4]` | 🟩 |
| PCN | Runway 79/F/C/W/T; apron/taxiway PCN varies 42–99 by surface — see §7/§13 | 🟩 |
| Customs | H24 `[CARC AIP AD 2 OJAI 2.3]` | 🟩 |
| Handling / FBO | Full service to Code E; **limited capacity for Code F**; hangar space limited to private companies/maintenance/Royal Pavilion; repair facilities available only for a stated legacy type list (B727, B737, L1011, A300, A310, A32S, A330, A340) — current-fleet applicability not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08L | 3,660 × 61 m | Asphalt / PCN 79/F/C/W/T | 3,660 m | 4,503 m | 3,810 m | 3,660 m | ILS CAT II (IQAN) |
| 26R | 3,660 × 61 m | Asphalt / PCN 79/F/C/W/T | 3,660 m | 4,503 m | 3,810 m | 3,660 m | ILS CAT II (IQAR) |
| 08R | 3,660 × 61 m | Asphalt / PCN 79/F/C/W/T | 3,660 m | 4,503 m | 3,810 m | 3,660 m | **No ILS** — RNAV (GNSS) / NDB only |
| 26L | 3,660 × 61 m | Asphalt / PCN 79/F/C/W/T | 3,660 m | 4,503 m | 3,810 m | 3,660 m | ILS CAT II (IQA); VOR approach also charted |

*Source: Jordan CARC AIP AD 2 OJAI 2.12/2.13, AIRAC AMDT 13/2016 (runway geometry) and AMDT 84/2017 (declared distances). No displaced thresholds published. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Queen Alia Information | 127.600 | — 🟧 | Sourced to VATSIM Jordan vACC cross-check, not the reachable AIP extract — verify current AIP/AIRAC |
| Ground | Queen Alia Ground / SMC | 121.900 / 121.600 (fire) | H24 | 121.9 used for aircraft SMC; 121.6 for fire-fighting vehicles `[CARC AIP AD 2 OJAI 2.18]` |
| Tower | Queen Alia Tower | 119.8 (primary), 121.5 (emergency) | H24 | `[CARC AIP AD 2 OJAI 2.18]` |
| Approach | Amman Approach | 128.9 (primary), 121.5 (emergency) | H24 | `[CARC AIP AD 2 OJAI 2.18]` |
| Centre / FIR | Amman Control (OJAC) | 128.500 🟧 | H24 | See [Middle East Airspace Briefing](../../../../airspace/middle-east.md); frequency per VATSIM cross-check, verify current AIP |

*Source: Jordan CARC AIP AD 2 OJAI 2.18, AMDT 13/2016; ATIS and Centre frequencies cross-checked against the VATSIM Jordan vACC pilot briefing (2024) — a network-sim document, not regulatory; verify against current AIRAC.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | MDB | 399 kHz | H24 | Output power 62.5 W |
| NDB | QA | 410 kHz | H24 | 3.94 NM from THR 26L |
| DVOR/DME | QAA | 115.2 (CH99X) | H24 | 7.3 NM from THR RWY 26L |
| ILS/DME 08L | IQAN | 109.3 | H24 | CAT II; DME CH30X |
| ILS/DME 26R | IQAR | 111.10 | H24 | CAT II; DME CH48X |
| ILS/DME 26L | IQA | 110.90 | H24 | CAT II; DME CH46X |

*Source: Jordan CARC AIP AD 2 OJAI 2.19, AIRAC AMDT 13/2016.*

---

## 10. Arrival

- **Transition altitude / level:** TA **13,000 ft AMSL** `[CARC AIP AD 2 OJAI 2.17]`; TL **FL150** 🟧 (VATSIM Jordan vACC cross-check, not confirmed in the reachable AIP — verify current chart).
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-dependent; 26L/26R reported preferred in calm-wind conditions 🟧 (network-sim cross-check only).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 08L | ILS CAT II (IQAN); NDB | |
| 26R | ILS CAT II (IQAR) | |
| 26L | ILS CAT II (IQA); VOR | Reported calm-wind-preferred runway |
| 08R | RNAV (GNSS); NDB | **No ILS** |

- **STARs / arrival transition fixes (names only):** EGLOT, ELOXI, GENEX, KIPAS, KULDI, KINUR, LOSAR, LOSIL, LUDAN, MUNRA, OSAMA, QTR, QTR01 🟧 (VATSIM Jordan vACC cross-check — pull the current-AIRAC STAR names at planning; these are network-sim transition-fix references, not confirmed AIP procedure names).
- **LVP:** CAT II environment on 08L/26L/26R; exact RVR trigger not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (benign plateau field). General published missed-approach logic (per network-sim cross-check) involves a runway-heading climb before radar-vectored re-sequencing — verify the actual charted missed approach and any holding fixes on the current AIRAC.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** GENEX, KULDI, KIPAS, KINUR, LOSAR, LOSIL, LUDAN, MOUAB, MUNRA, QTR, QTR01 🟧 (VATSIM Jordan vACC cross-check — pull the live current-AIRAC SID list before use; not independently confirmed against the primary AIP in this pass).
- **RNP / climb-gradient requirements:** RNAV (GNSS) SIDs are charted for all four runway ends per the AIP chart index (AD 2.24) — confirm RNP level/gradient on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP chart set — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Push-back direction assigned by ATC; Code F aircraft follow a defined outer-engine, minimum-power push-back sequence specific to the North/South apron (§13). 🟧 confirm cross-bleed/APU notification procedure locally.
- **ATC slot / CTOT & clearance:** No slot-coordination or CTOT regime found in the reachable AIP — treat as an uncoordinated/Level 1 field pending confirmation. 🟧
- **De-icing:** Available H24 at the **Cargo Apron, Taxiways J and E**; fluid **Kilfrost ABC-3** (Type II de/anti-icing, ISO 11078 / AMS 1428) `[CARC AIP AD 2 OJAI 2.4]`. Location may be changed by the airport operator per operational coordination.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **NIL** — no noise abatement procedure published `[CARC AIP AD 2 OJAI 2.21]`.
- **Night noise / dB limits:** None found.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Code E stands are distributed across the **North Apron** (N04, N08, N14, N19, N20, N21), **South Apron** (S06, S10, S24, plus others), and **Hotel Apron** (28–32, Code D/E mix, up to B747-400); **Code F** is limited to **stand N26** (North) and **stand S30** (South, except AN124/AN225), plus Cargo Apron stand 1 (up to B747-8F) and stand 2A. 🟧
- **Push-back:** ATC-directed; Code F push-back follows a defined sequence — e.g. on the North Apron, pushed back facing south toward Taxiway Juliet then east until aligned on the Taxiway Hotel centreline, breaking away only after taxi clearance.
- **Standard taxi routes:** Runway-and-apron-specific per the AIP local traffic regulation table (AD 2.20) — confirm routing with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 Pilots are specifically cautioned re: **Taxiways F and G** ahead of intersections with service roads (AIP remark, both aprons).
- **Follow-me:** **Mandatory for Code F** on both North and South Aprons at arrival and departure; marshaller availability is mandatory on all North/South/Hotel/Royal Pavilion apron stands even where Visual Guidance Docking Systems are fitted.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Semi-arid plateau climate; hot, dry summers (AIP reference temperature 31.5°C) and cool, occasionally wet winters at this elevation.
- **Seasonal hazards:** Seasonal **dust/sandstorm** events consistent with the wider regional shamal pattern (see [Middle East Airspace Briefing](../../../../airspace/middle-east.md)); occasional winter fog/low stratus at the elevated plateau location; rare light winter precipitation (occasional snow reported in the wider Amman area).
- **Local effects:** No significant terrain-driven local wind effects identified in reachable sources.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT II equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNAV procedures, and the regional conflict-zone/GNSS-interference picture (see [Middle East Airspace Briefing](../../../../airspace/middle-east.md) §9/§11). Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — not a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **LLBG**, **OMDB**, **OTHH** — all cross-country, referenced by ICAO code only per governance `[VAMSYS mirror 2026-07-26]`; confirm suitability, runway/RFF adequacy and current minima per leg. Domestically, [**OJAQ** (Aqaba, King Hussein Intl)](../ojaq/index.md) is Jordan's secondary/coastal field, though its single 3,000 m runway and lighter category should be weighed against widebody suitability before use.
- **Fuel-uplift notes:** Jet A-1 confirmed available H24 with no stated uplift limit `[CARC AIP AD 2 OJAI 2.4]`. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,660 m all ends) is non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No type-specific performance penalty identified for any K Global type at OJAI's field length/elevation. The one fleet-relevant constraint is **apron/taxi access for Code F** aircraft (§13) — confirm compatibility against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before planning a Code F rotation here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **CAT III capability** — an initial planning anchor referenced CAT III; the reachable CARC AIP (2016/2017 cycle) confirms **CAT II** on 08L/26L/26R only, with no ILS at all on 08R. Treated as a discrepancy — verify against the current AIRAC before briefing CAT III.
- **Magnetic variation** — sourced to the 2016 AIP cycle; not independently re-confirmed against current AIRAC.
- **ATIS and Amman Control (Centre) frequencies** — sourced only to the VATSIM Jordan vACC pilot briefing (2024), a network-sim document; not found in the reachable primary AIP extract.
- **Transition level (FL150)** — sourced only to the VATSIM cross-check; the primary AIP gives TA 13,000 ft but no TL.
- **SIDs/STARs (current names)** — the primary AIP chart index (AD 2.24) confirms RNAV (GNSS) SID/STAR charts exist per runway, but individual procedure names were sourced only to the VATSIM cross-check; pull the live current-AIRAC procedure list before use.
- **Preferential-runway logic (26-configuration when calm)** — sourced only to the VATSIM cross-check, not an AIP-published rule.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy** — none confirmed in reachable sources.
- **Repair-facility type list currency (B727/L1011/A300/A310/A32S/A330/A340)** — sourced to the 2016 AIP cycle; current-fleet applicability not re-verified.
- **VATSIM cross-check note:** the VATSIM Jordan vACC pilot briefing (2024) is a network-simulation document, not regulatory — used here only for corroboration/planning colour on ATIS/Centre frequencies, SID/STAR fix names, transition level, and preferential-runway tendency; no discrepancy against the primary AIP was found beyond the items listed above.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Jordan CARC AIP, AD 2 OJAI** (AIRAC AMDT 13/2016, amended through AMDT 84/2017) — ARP/elevation/mag-var, operational hours, handling/fuel/de-icing, RFF, apron/taxiway/stand data, runway physical characteristics & declared distances, lighting, ATS airspace/CTR, communications, navaids, local traffic regulations, obstacle data, chart index — https://carc.gov.jo/images/AIS/AerodromesAD/AD2_OJAI.pdf (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/OJAI/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Wikipedia — "Queen Alia International Airport" — https://en.wikipedia.org/wiki/Queen_Alia_International_Airport (retrieved 2026-07-26). *History, terminal capacity/expansion, traffic volumes, hub status.*
- VATSIM Jordan vACC — "Pilot Briefing: Queen Alia Intl. Airport [OJAI]" (2024) — https://jordan.vatsim.me/wp-content/uploads/2024/02/jovacc-ojai-briefing-2024.pdf (retrieved 2026-07-26). *Network-sim document, not regulatory — used for ATIS/Centre frequency, SID/STAR fix, and preferential-runway cross-check only.*
- [Middle East Airspace Briefing](../../../../airspace/middle-east.md) — Amman (OJAC) FIR classification, EASA Information Note (Jordan) context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
