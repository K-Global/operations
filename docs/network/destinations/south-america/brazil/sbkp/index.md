# SBKP — Viracopos International · Airport Briefing

**SBKP / VCP** · Campinas, São Paulo, Brazil · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Brasil (DECEA)-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Brasil (DECEA/AISWEB) where reachable, cross-checked against public aeronautical registers; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S23°00′27″ / W047°08′04″ (-23.00740, -47.13450) `[AISWEB pilot-info / OurAirports, retrieved 2026-07-26]` |
| Field elevation | **2,170 ft / 661 m AMSL** |
| Mag variation | 🟧 Not published / verify — not confirmed in reachable sources |
| Time zone | **UTC−3** (Brazil has not observed DST since 2019) |
| Runway(s) | **15/33**, 3,240 × 45 m (asphalt) — **single runway, no parallel** |
| Preferential runway | N/A — single runway; direction (15 or 33) selected by wind |
| Longest LDA | ~3,240 m on RWY 15 (no displacement found); **RWY 33 threshold displaced 91 m** — landing LDA ≈ 3,149 m 🟧 (derived, not an independently confirmed declared-distance figure) |
| Approaches | Not confirmed by name/CAT in reachable sources 🟧 |
| RFF category | 🟧 Not published / verify |
| Control type | **Radar** — Campinas Approach terminal; **Curitiba (SBCW) FIR / ACC-CW (CINDACTA II)** en route — see [South America Airspace briefing](../../../../airspace/south-america.md) |
| Elevation class | Moderate (2,170 ft), same Paulista-plateau setting as SBGR ~40 km away — winter fog/stratus risk applies here too (§3.4) |
| Special-airport status | 🟥 **Single-runway field with no parallel** — any runway obstruction closes the airport entirely (a 2012 landing-gear-collapse incident closed the field for 45 hours, the first closure other than weather in the airport's history); not among Brazil's publicly reported slot-coordinated aerodromes 🟩 |
| Customs / PoE | **Yes** — international cargo/pax gateway; H24 expectation for a hub of this size 🟧 (desk hours not confirmed) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | No |
| Company preferred alternates | **SBGR, SBSP** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Same Paulista-plateau setting as SBGR (~40 km away); no specific close-in terrain identified for SBKP itself in reachable sources — read MSA off the current chart. |
| Runway length vs fleet perf | 🟩 | 3,240 m single runway is ample for any K Global widebody; historically hosted first-generation intercontinental jets (707/DC-8/Comet/VC10-era) from 1960. |
| Approach availability / minima | 🟧 | Approach names/CAT not confirmed in reachable sources this pass. |
| Airspace / traffic / control | 🟧 | Shares the São Paulo TMA with GRU and Congonhas; SBKP is the network's designated primary widebody alternate for that TMA (§16), so its own traffic/control picture matters for alternate-suitability planning. |
| Weather / seasonal hazard | 🟧 | Winter (Jun–Aug) plateau fog/stratus risk as at SBGR; notably, SBKP has a strong historical weather-reliability record — reported to average only ~5 closure days/year, the reason it is the standard São Paulo-area widebody alternate. |
| Curfew / slots / hours | 🟩 | Not among Brazil's five publicly reported slot-coordinated aerodromes. |
| RFF category vs our types | 🟧 | Not confirmed in reachable sources. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 given the field's cargo-hub role; specific supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | Major cargo/pax PoE; exact desk hours and current gate assignment not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
SBKP sits at 2,170 ft on the same broad Paulista plateau as SBGR, roughly 40 km to the north-west. No specific close-in high terrain was identified for SBKP itself in reachable research — read the MSA/MORA off the current-AIRAC chart as routine practice; this is not flagged as a significant CFIT-driver field, but it has not been independently confirmed as terrain-clear either.

### 3.2 Airborne conflict / traffic 🟧
SBKP is served by **Campinas Approach** under **Curitiba (SBCW) FIR / ACC-CW (CINDACTA II)** and sits within the broader **São Paulo TMA** complex shared with GRU and Congonhas (SBSP) — see the [South America Airspace briefing](../../../../airspace/south-america.md) §6. Because SBKP is the network's designated primary widebody alternate for SBGR (§16), its own traffic/control loading is directly relevant to diversion planning, not just to a scheduled operation here.

### 3.3 Runway excursion 🟧
**RWY 33 carries a 91 m displaced threshold** — confirm the correct landing LDA before committing to that direction (§7). No SBKP-specific runway-excursion accident was found in reachable research for the passenger/cargo operation era; a 2012 landing-gear-collapse on landing (RWY 15) closed the runway for 45 hours pending aircraft removal — a reminder that, on this **single-runway field**, any disabled aircraft on the runway closes the entire airport.

### 3.4 Weather threat 🟧
Same **winter (Jun–Aug) Paulista-plateau fog/low-stratus risk** as SBGR applies here. Notably, SBKP carries a strong **historical weather-reliability reputation** — commonly cited as closing for weather only around **5 days per year on average** — which is precisely why it is the network's (and, historically, the whole São Paulo air-transport system's) preferred widebody alternate when the SP-area fields are fog-affected. Summer (Nov–Mar) brings the same regional convective-storm risk as elsewhere on the plateau.

### 3.5 Operational considerations 🟥
The single defining operational fact at SBKP is that it is a **single-runway field with no parallel** — there is no redundancy if the runway is obstructed (the 2012 gear-collapse closure, the airport's first non-weather closure in over 50 years of operation, illustrates the consequence). This matters doubly here because SBKP is simultaneously (a) a scheduled K Global destination in its own right and (b) the network's **designated primary widebody alternate for SBGR** (§16) — a runway-blocking event at SBKP removes both roles at once. SBKP is also Brazil's **second-busiest cargo airport** and Azul Airlines' main hub, meaning a mixed high-tempo pax/cargo/freighter traffic flow shares the single runway.

---

## 4. Cautions & Warnings

- **Single runway, no parallel** — any disabled aircraft on RWY 15/33 closes the entire airport; there is no redundancy.
- **RWY 33 threshold displaced 91 m** — confirm the correct landing LDA before landing in that direction.
- **SBKP is the network's designated primary SBGR alternate** — its own runway/weather status is a live input to any SBGR diversion decision, not an independent consideration.
- **Mixed high-tempo cargo/pax/freighter traffic** on the single runway — Brazil's second-busiest cargo airport and Azul's main hub.
- Winter (Jun–Aug) plateau fog/stratus risk mirrors SBGR, ~40 km away — but SBKP's historical closure rate (~5 days/year) is notably better.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **single-runway-no-redundancy** consideration (§3.5). 🟧
- **Crew-qualification gate:** None confirmed beyond standard type currency. 🟧
- **Operating restrictions / bans:** None confirmed; verify current AIRAC for any RNP AR / circling restriction. 🟧
- **Overflight / entry / permits:** Standard Brazilian international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **DECEA** (Curitiba ACC-CW/CINDACTA II en route; Campinas Approach terminal). Airport operator — **Aeroportos Brasil** consortium (concession since 2012).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 assumed given the cargo-hub role | 🟧 |
| AD operating hours | H24 assumed | 🟧 |
| Night / curfew restrictions | None confirmed — not among Brazil's publicly reported slot/curfew-restricted fields | 🟩 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available H24; supplier not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Major cargo/pax PoE; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 15 | 3,240 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ~3,240 m (no displacement found) | Only runway; no parallel |
| 33 | 3,240 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | **Threshold displaced 91 m** — landing LDA ≈ 3,149 m 🟧 (derived, not an independently confirmed declared-distance figure) | Reciprocal of 15 |

*Runway geometry and displacement figure per OurAirports public register cross-check (retrieved 2026-07-26); exact declared-distance table (TORA/TODA/ASDA) not reached this pass — treat as 🟧 pending AIP confirmation. All distances in metres. A second runway has been discussed in airport master-planning since at least 2009 with various target dates; current status not confirmed — treat the field as single-runway until independently verified otherwise. 🟧*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | No ATIS frequency reached in reachable sources this pass |
| Delivery | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | No clearance-delivery frequency reached this pass |
| Ground | Campinas Ground | 121.900 | H24 assumed 🟧 | |
| Tower | Campinas Tower | 118.250 | H24 assumed 🟧 | |
| Approach | Campinas Approach | 121.400 | H24 assumed 🟧 | Terminal control, within the broader São Paulo TMA complex |
| Centre / FIR | Curitiba ACC (SBCW) / CINDACTA II | Per current AIRAC | H24 | See [South America Airspace briefing](../../../../airspace/south-america.md) |

*Frequencies per public register cross-check (OurAirports, retrieved 2026-07-26) — treat as 🟧 pending live-AIRAC confirmation. No ATIS or clearance-delivery frequency was found in the reachable register; this gap is flagged rather than guessed.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Not confirmed in reachable sources | — | — | — | 🟧 No navaid ident/frequency table reached this pass — pull the current-AIRAC navaid list at planning |

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed in reachable sources — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 — confirm no local override on current chart.
- **Preferential runway logic:** N/A (single runway) — direction (15 or 33) selected by wind.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 15 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | No displacement found |
| 33 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Threshold displaced 91 m |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed; winter (Jun–Aug) plateau fog/stratus is the plausible trigger, mirroring SBGR ~40 km away, though SBKP's historical closure rate is notably lower (§3.4). 🟧
- **Missed approach watch-items:** No specific close-in terrain identified (§3.1); on a single-runway field the primary missed-approach concern is re-sequencing given there is no parallel to shift to.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Brazil operates a national RNAV/PBN SID and STAR network `[South America Airspace briefing]`; exact RNP spec/gradient per SID not confirmed for SBKP. 🟧
- **Take-off minima:** Not confirmed in reachable sources. 🟧
- **Start-up / push-back:** Not confirmed — verify locally with Ground/Apron. 🟧
- **ATC slot / CTOT & clearance:** No slot regime confirmed for SBKP. 🟩
- **De-icing:** **NIL expected** — subtropical highland climate; no de-icing infrastructure or season established. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Single passenger terminal (phase-1 of a new terminal building opened May 2015 under the Aeroportos Brasil concession); a large dedicated **cargo terminal complex (~77,000 m², plus ~1,700 m² animal cargo and ~1,480 m³ refrigerated space)** reflects the field's status as Brazil's second-busiest cargo airport. Exact passenger widebody stand count/assignment not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed — confirm with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources; expect mixed pax/cargo/freighter ground traffic given the field's cargo-hub role. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Subtropical highland climate on the Paulista plateau (2,170 ft), the same broad setting as SBGR ~40 km away.
- **Seasonal hazards:** **Winter (Jun–Aug) plateau fog/low stratus** risk mirrors SBGR, though SBKP carries a notably better historical weather-reliability record (commonly cited at ~5 closure days/year). **Summer wet season (Nov–Mar)** brings the same regional convective-storm risk as elsewhere on the plateau.
- **Local effects:** None specifically identified for SBKP in reachable sources beyond the shared plateau climate.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (critical on this single-runway field), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination**, and simultaneously the network's **designated primary widebody alternate for SBGR** given its strong historical weather-reliability record `[South America Airspace briefing]`.
- **Nearest suitable alternates:** [**SBGR**](../sbgr/index.md) (Guarulhos — the K Global regional base) and **SBSP** (Congonhas — in-TMA reliever, no OM C brief built yet 🟧) `[VAMSYS mirror 2026-07-26]`. **Note:** because SBKP itself is SBGR's primary alternate, a runway-blocking event at SBKP (§3.5) removes that option for SBGR diversions at the same time it disrupts SBKP's own operation — plan a genuine third option accordingly.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 given the cargo-hub role; specific into-plane provider/hours not confirmed. 🟧
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the single 3,240 m runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- SBKP is a destination and network-alternate field rather than a single-type consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). No field-elevation or field-length performance penalty for any K Global type on the 3,240 m runway; the operative planning consideration is the field's single-runway-no-redundancy characteristic (§3.5) rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation, RFF category, PCN, exact TORA/TODA/ASDA per runway** — not confirmed in reachable sources.
- **ATIS and clearance-delivery frequencies** — not found in the reachable public register; a real gap, not assumed silence.
- **Approach names, ILS/RNP CAT, navaid idents/frequencies** — no navaid table reached this pass.
- **Transition altitude/level, take-off minima, NAP/NADP, engine run-up restriction, reverse-thrust policy** — none confirmed.
- **SIDs/STARs (current names)** — not obtained this pass; pull the live current-AIRAC procedure list before use.
- **Fuel supplier(s), into-plane hours, customs/immigration desk hours** — assumed major-hub H24 coverage, not individually confirmed.
- **Second-runway project status** — discussed in master planning since ~2009 with various target dates; current status not confirmed, treat the field as single-runway.
- **AISWEB / AIP Brasil AD 2 SBKP pages are JS-rendered and did not return readable content on this research pass** — flagged per the source register guidance; re-attempt with a browser-based tool for a future verification pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **DECEA / AISWEB — AIP Brasil, aerodrome page AD 2 SBKP** — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SBKP (JS-rendered frameset; did not return readable content to a direct fetch this pass — flagged per source-register guidance) (attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/SBKP/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check, displaced-threshold figure.*
- Wikipedia — "Viracopos–Campinas International Airport" — https://en.wikipedia.org/wiki/Viracopos-Campinas_International_Airport (retrieved 2026-07-26). *History, cargo-hub statistics, weather-reliability reputation, 2012 gear-collapse closure, second-runway master-plan history.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |