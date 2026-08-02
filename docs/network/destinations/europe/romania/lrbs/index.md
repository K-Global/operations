# LRBS — Băneasa-Aurel Vlaicu · Airport Briefing

**LRBS / BBU** · Băneasa, Bucharest, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public aeronautical data (AIP-referenced NOTAM text seen via a ground handler's public briefing page) cross-checked against the AIP Romania (ROMATSA) chart-index; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). **LRBS is not currently reflected in VAMSYS** — category, base flag, taxi times and company-preferred alternates are all 🟧 pending reconciliation. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 44°30′13″N / 026°06′13″E (44.50361, 26.10361) `[Navigraph navdata / OurAirports cross-check]` |
| Field elevation | **297–299 ft / 91 m AMSL** (sources cluster within 2 ft of each other) |
| Mag variation | 🟧 ~29′ E per a 1966-dated reference cited on a ground handler's public briefing page — **very stale**, not usable as a current figure |
| Time zone | UTC+2 (EET) / UTC+3 (EEST, EU DST observed) |
| Runway(s) | **07/25**, reported as **3,200 × 45 m concrete** (one tier-4 source gives 3,099 m — 🟧 confirm current length); **RWY 07 displaced threshold ~787 ft (240 m)**, **RWY 25 displaced threshold ~2,609 ft (795 m)** per one tier-4 source (a second gives a single 453 ft figure — discrepancy, verify) 🟧 |
| Preferential runway | Not confirmed from a primary AIP table this pass 🟧 |
| Longest LDA | Materially reduced by the displaced thresholds above on both ends — verify current published LDA before use 🟧 |
| Approaches | **ILS RWY 07 (CAT A/B and CAT C/D)**, **ILS RWY 25 (CAT A/B and CAT C/D)**, **NDB RWY 07 (CAT A/B, C/D)**, **NDB RWY 25 (CAT A/B, C/D)** `[AIP Romania chart-index cross-check]`; **SRE and PAR (surveillance/precision radar approach)** also reported available — a former military field legacy capability 🟧 |
| RFF category | **ICAO CAT 8** reported via a ground handler's public briefing page — not confirmed against a primary AIP table 🟧 |
| Control type | **Radar** — Băneasa CTR (Class C, on-field) nested inside **Bucuresti TMA (Class A)**, ~4 NM south of LROP and sharing its approach environment; **București ACC (LRBB)** en route — no dedicated FIR brief yet published, see [Europe airspace brief](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (297–299 ft) — **not** hot-and-high |
| Special-airport status | **PPR (prior permission required)** reported as a standing requirement for arrivals via the field's ground handler (submit ≥3 h before landing) — historically a business/GA-focused field with limited terminal capacity; confirm current requirement at planning 🟧 |
| Customs / PoE | Reported **Yes, H24** (administration, customs, immigration, medical, refuelling, handling, security, de-icing all listed H24 by a ground handler) — not confirmed against a primary AIP source 🟧 |
| K Global category | **Not applicable — LRBS is not currently reflected in VAMSYS** 🟧 |
| K Global base | **Not applicable — pending VAMSYS reconciliation** 🟧 |
| Company preferred alternates | **Not applicable — pending VAMSYS reconciliation** 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not applicable — pending VAMSYS reconciliation** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Wallachian Plain, same setting as LROP 4 NM north; no close-in high terrain identified. |
| Runway length vs fleet perf | 🟧 | ~3,200 m nominal but **materially reduced by displaced thresholds on both ends** (240 m on 07, ~795 m reported on 25) — confirm actual usable LDA/TORA before treating as non-limiting. |
| Approach availability / minima | 🟧 | ILS + NDB confirmed by name on both runway ends, split by aircraft category (A/B vs C/D); a documented AIP caution exists about certain missed-approach/IAF geometry not being reachable for CAT A/B aircraft (§3.2). |
| Airspace / traffic / control | 🟧 | Shares Bucuresti TMA (Class A) with LROP just 4 NM north — proximity to Romania's busiest airport is a real traffic-integration factor. |
| Weather / seasonal hazard | 🟧 | Same continental climate as LROP; no field-specific hazard statistic found. |
| Curfew / slots / hours | 🟧 | PPR requirement reported (§1); no formal curfew identified; historically low movement-capacity design (≈15 movements/hour reported). |
| RFF category vs our types | 🟧 | CAT 8 reported (secondary source) — not primary-confirmed; likely non-limiting for narrowbody types but not verified against our RFF requirement. |
| Fuel availability | 🟧 | Refuelling reported H24 by the field's ground handler; not confirmed against a primary source. |
| Customs / handling / security | 🟧 | All reported H24 by the field's ground handler; historic terminal design capacity (~600,000 pax/year, one departure/25 min) suggests real throughput constraints at any volume. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LRBS sits at 297–299 ft AMSL on the same flat Wallachian Plain as LROP, roughly 4 NM to the north. No close-in high terrain is relevant to arrival, departure or missed-approach paths.

### 3.2 Airborne conflict / traffic 🟧
LRBS lies only ~4 NM south of **LROP**, sharing the **Bucuresti TMA (Class A)** airspace structure and Bucharest Approach services — proximity to Romania's busiest airport is a genuine traffic-integration factor for any arrival/departure here. A documented AIP-referenced caution (via a ground handler's public NOTAM excerpt, citing AIP Romania AD 2.4-5) notes that on the **ILS/NDB approach from the BSE IAF or the RWY 25 missed approach**, **CAT A/B aircraft might not reach the ABORA fix** once established on final; a mirrored caution applies on **RWY 07 from the BSW IAF** regarding the **ADULI** fix for CAT A/B aircraft. Treat these as durable procedural geometry notes to verify on the current chart, not a one-off NOTAM. 🟥 No dedicated București (LRBB) FIR brief exists yet — see [Europe airspace brief](../../../../airspace/europe.md). 🟧

### 3.3 Runway excursion 🟧
Reported displaced thresholds are **large relative to the field's nominal runway length** — approximately 240 m on RWY 07 and as much as ~795 m on RWY 25 per one tier-4 source (a second source gives a single, smaller 453 ft figure — **the discrepancy is not resolved this pass** and must be verified against the current AIP declared-distance table before any landing-distance planning). 🟥

### 3.4 Weather threat 🟧
Same continental climate as LROP (§ see LROP Briefing) — cold winters with a de-icing season, warm summers with convective risk. No LRBS-specific hazard statistic found. De-icing is reported as an H24-available service by the field's ground handler. 🟧

### 3.5 Operational considerations 🟧
LRBS converted to a business/GA-dedicated field in March 2012 and only resumed limited scheduled low-cost service from 2023, with Wizz Air establishing a growing base presence from 2025. The terminal building (a 1952-era historic monument that cannot be structurally expanded) was designed for **no more than ~600,000 passengers/year and one departure per 25 minutes** — a real capacity constraint if scheduled volume grows. **PPR is reported as a standing arrival requirement** via the field's ground handler. The field periodically hosts the **Bucharest International Air Show (BIAS)**, which triggers a full multi-day airport closure (2026 edition reported 25 Aug–1 Sep) — check the event calendar/NOTAM at planning rather than assuming year-round availability. 🟧

---

## 4. Cautions & Warnings

- **Large, inconsistently-reported displaced thresholds on both runway ends** — confirm the current AIP declared-distance table before any landing-distance planning; do not rely on the nominal 3,200 m runway length alone.
- **CAT A/B aircraft may not reach the ABORA fix (RWY 25 missed approach / BSE IAF) or the ADULI fix (RWY 07 missed approach / BSW IAF)** per an AIP-referenced caution — verify current chart geometry before planning either missed approach.
- **PPR (prior permission required)** is reported as standing policy for arrivals — confirm current requirement and lead time before dispatch.
- **The historic 1952 terminal cannot be expanded** and was designed for limited throughput (~600,000 pax/year, one departure/25 min) — a real capacity/turnaround constraint if volume grows.
- **The field closes fully for the periodic Bucharest International Air Show (BIAS)** — check the event calendar/NOTAM before scheduling.
- Mag variation is sourced to a 1966-dated reference — **do not use it as a current figure** without independent verification.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing operational items are the PPR requirement and the displaced-threshold geometry (§3.3). 🟧
- **Crew-qualification gate:** None specifically identified in reachable sources. 🟧
- **Operating restrictions / bans:** None identified beyond the PPR requirement and the periodic BIAS full-field closure. 🟧
- **Overflight / entry / permits:** PPR reported as standing policy (submit via the ground handler, historically ≥3 h before landing) — confirm current requirement. 🟧 Romania's Schengen air-border status should also be reconfirmed for current-day passenger-flow planning. 🟧
- **Operations notes:** ANSP — **ROMATSA**; airport operator — **National Company "Bucharest Airports" (Compania Națională Aeroporturi București)**, the same operator as LROP. The field is Eastern Europe's oldest continuously operating airport (aviation activity from 1909, flight school from 1912).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed against a primary source; reported H24 services generally | 🟧 |
| AD operating hours | Not confirmed | 🟧 |
| Night / curfew restrictions | None identified; PPR requirement applies (§5) | 🟧 |
| RFF category | **ICAO CAT 8** (secondary source) | 🟧 |
| Fuel | Refuelling reported H24 by the field's ground handler | 🟧 |
| PCN | Stand-strength corrected via NOTAM to 39/R/D/W/T for stands 17–23 (was previously published as 44/R/D/W/T) — runway PCN not confirmed | 🟧 |
| Customs | Reported H24 by the field's ground handler | 🟧 |
| Handling / FBO | Multiple FBO/ground handlers reported operating at the field (e.g. Alpha Handling) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | ~3,200 × 45 m (one source: 3,099 m) | Concrete / PCN not confirmed 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Reduced by a reported **~240 m (787 ft) displaced threshold** 🟧 | Displaced threshold — confirm current figure |
| 25 | ~3,200 × 45 m (one source: 3,099 m) | Concrete / PCN not confirmed 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Reduced by a reported **~795 m (2,609 ft) displaced threshold** (one source instead gives 453 ft — discrepancy, verify) 🟧 | Large, unresolved displaced-threshold discrepancy — **verify against current AIP before use** |

*Runway length and displaced-threshold figures are inconsistent between the two tier-4 sources cross-checked (OurAirports vs. SkyVector) — neither has been confirmed against a primary AIP declared-distance table this pass. Treat all runway distance figures here as provisional.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Băneasa ATIS | 126.120 | Not confirmed | 🟧 |
| Delivery | Not confirmed | Not confirmed | Not confirmed | 🟧 |
| Ground | Băneasa Ground | 129.950 (a NOTAM correction cites **129.960** as the current published value, superseding 129.950) | Not confirmed | 🟧 confirm current AIRAC |
| Tower | Băneasa Tower | 120.800 (also 125.200 reported) | Not confirmed | 🟧 |
| Approach | Bucharest Approach (shared with LROP) | 119.415 / 120.600 (reported) | Not confirmed | 🟧 |
| Centre / FIR | București ACC (LRBB) | Per current AIRAC | H24 assumed | No dedicated FIR brief published yet — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 |

*Source: SkyVector cross-check (tier-4) plus a ground handler's NOTAM excerpt confirming a Ground-frequency correction. Not confirmed against a primary AIP frequency table this pass.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | BSE (Băneasa) | 256 kHz | Not confirmed | IAF for RWY 25 approach/missed approach |
| NDB | BSW (Băneasa) | ~370 kHz region (cross-referenced, not independently isolated) 🟧 | Not confirmed | IAF for RWY 07 approach/missed approach |
| VOR | STJ (Strejnic) | 113.20 (subject to periodic U/S — a DVOR/DME outage was reported in mid-2026) | Not confirmed | Shared regional navaid with LROP/LRCL area |
| VOR | FLR (Floresti) | 112.20 | Not confirmed | Shared regional navaid |
| VOR | COM (Comana) | 110.80 | Not confirmed | Shared regional navaid |
| ILS 07 | Ident not confirmed 🟧 | Not confirmed 🟧 | Not confirmed | CAT A/B and CAT C/D minima published separately |
| ILS 25 | Ident not confirmed 🟧 | Not confirmed 🟧 | Not confirmed | CAT A/B and CAT C/D minima published separately |
| SRE / PAR | — | — | Not confirmed | Surveillance/precision radar approach reported available — legacy military-field capability, current status not reconfirmed 🟧 |

*BSE/BSW NDB idents and the STJ VOR intermittent-U/S pattern are cross-referenced from a ground handler's public NOTAM excerpt (citing AIP Romania AD 2.4-5) and the LROP-area chart; not independently confirmed against a primary current AIP navaid table.*

---

## 10. Arrival

- **Transition altitude / level:** A ground handler's briefing page cites a **"1200 M"** transition-altitude-style figure — the unit/context is unclear and **not usable as a reliable current value**; verify on the current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not confirmed from a primary source this pass. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07 | ILS (CAT A/B, CAT C/D); NDB | BSW | Not confirmed 🟧 | CAT A/B may not reach ADULI on the miss — verify chart |
| 25 | ILS (CAT A/B, CAT C/D); NDB | BSE | Not confirmed 🟧 | CAT A/B may not reach ABORA on the miss — verify chart |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed. 🟧
- **Missed approach watch-items:** 🟥 See §3.2 — CAT A/B aircraft geometry caution on both runway ends' missed approach (ABORA/ADULI fixes). Airspace/traffic proximity to LROP (4 NM north) is the other standing consideration, not terrain.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed — the field's AIP NOTAM history references conventional SID/STAR routes at LRBS (subject to periodic suspension with RNAV1 vectoring as a fallback) — current standing procedure names not confirmed this pass. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. 🟧
- **Take-off minima:** Not confirmed. 🟧
- **Start-up / push-back:** Reported ~28 apron stands; marshaller/follow-me procedures have periodically been mandated by NOTAM during apron-chart suspensions — confirm current requirement at planning. 🟧
- **ATC slot / CTOT & clearance:** No formal slot-coordination evidence found; PPR (§5) is the field's standing arrival-control mechanism rather than IATA-level slot coordination. 🟧
- **De-icing:** Reported available H24 by the field's ground handler; provisioning detail not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧
- **Recurring event closure:** The field periodically hosts the **Bucharest International Air Show (BIAS)**, Romania's largest airshow, which triggers a full multi-day closure — treat as a recurring seasonal-calendar item to check at planning, not a permanent restriction. 🟧

---

## 13. Ground operations

- **Stands for our types:** ~28 apron stands reported by the field's ground handler; code-letter/widebody suitability not confirmed — the field's historic GA/business-aviation focus suggests smaller-type orientation. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed. 🟧
- **Hot spots / tight taxiways:** None specifically identified in reachable sources — not independently verified. 🟧
- **Follow-me:** Periodically mandated by NOTAM during apron-chart-suspension periods — confirm current requirement. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Same Wallachian Plain continental climate as LROP, 4 NM north.
- **Seasonal hazards:** Winter snow/icing season (de-icing reported available H24); no field-specific fog/wind statistic found.
- **Local effects:** None beyond general continental climatology identified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (STJ VOR/DME has shown periodic outages), lighting, obstacle/crane (temporary cranes near the RWY 07/25 strip have been a recurring NOTAM theme), RFF downgrade, GPS/RAIM, current PPR/apron-marshalling requirements, BIAS or other event-driven full-field closures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not currently operated** — LRBS is not reflected in VAMSYS; if activated, its role would need definition (likely a secondary Bucharest destination or GA/charter field). 🟧
- **Nearest suitable alternates:** Not applicable pending VAMSYS reconciliation. The field's Bucharest sibling, [**LROP — Henri Coandă**](../lrop/index.md), lies approximately 4 NM north and shares the same TMA/ACC structure.
- **Fuel-uplift notes:** Refuelling reported H24 by the field's ground handler; not confirmed against a primary source. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The large, inconsistently-reported displaced thresholds (§3.3/§7) make field-length adequacy for any K Global type **unconfirmed** — do not assume the nominal 3,200 m is fully usable. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Not applicable — LRBS is not currently in the K Global network. If activated, the displaced-threshold discrepancy (§3.3/§7) would need resolution before any type-specific performance clearance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **LRBS is not in VAMSYS** — category, base flag, taxi times and company-preferred alternates all need reconciliation if the field is activated.
- Mag variation — sourced to a 1966-dated reference; unusable as a current figure.
- Runway length and displaced-threshold figures — inconsistent between two tier-4 sources (OurAirports vs. SkyVector); not primary-confirmed.
- RFF category (CAT 8 reported) — secondary source only, not primary-confirmed.
- Transition altitude — figure found is ambiguous in unit/context.
- ATC frequencies — SkyVector-sourced plus one NOTAM-confirmed correction (Ground 129.960); not fully cross-checked against a primary AIP table.
- ILS idents (both runway ends) — not obtained this pass.
- SIDs/STARs (current names), take-off minima, NADP detail — none confirmed; pull the live current-AIRAC procedure list before use.
- PPR requirement — reported as standing policy via a ground handler; confirm current status and lead time.
- Stand count/code-letter suitability (~28 stands reported) — not primary-confirmed.
- Current Schengen air-border status — not independently reverified this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- Alpha Handling — "Bucharest Băneasa Airport (LRBS/BBU) Information & FBO" — https://alphahandling.com/en/lrbs_bbu-airport (retrieved 2026-07-26). *RFF category, navigation aids (ILS/SRE/PAR), apron stand count, transition-altitude figure, mag-variation reference, H24 services list, live NOTAM excerpts (AIP Romania AD 2.4-5/17 APR 2025 caution on ABORA/ADULI fixes; Ground-frequency correction to 129.960). Ground-handler public page, not a primary AIP source — cross-check only.*
- OurAirports — https://ourairports.com/airports/LRBS/ and /runways.html (retrieved 2026-07-26). *Runway dimensions, displaced-threshold figures, elevation.*
- SkyVector — https://skyvector.com/airport/LRBS/Baneasa-Aurel-Vlaicu-Airport (retrieved 2026-07-26). *Navaid/frequency cross-check; a conflicting displaced-threshold figure.*
- Wikipedia — "Bucharest Băneasa Aurel Vlaicu International Airport" — https://en.wikipedia.org/wiki/Bucharest_B%C4%83neasa_Aurel_Vlaicu_International_Airport (retrieved 2026-07-26). *History, 2012 business-aviation conversion, terminal capacity/historic-monument status, 2022+ scheduled-service resumption, BIAS airshow.*
- AIP Romania (ROMATSA / AIS Romania) AIRAC AIP AMDT 13/25, WEF 2025-11-27 — https://www.aisro.ro/files/amdt/LR_Amdt_A_2025_13_en.pdf (retrieved 2026-07-26). *Chart-index confirmation of ILS/NDB approach names by runway end and aircraft category.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. LRBS not in VAMSYS — category/base/taxi/alternates flagged 🟧. |
