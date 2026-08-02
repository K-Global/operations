# LRCL — Avram Iancu · Airport Briefing

**LRCL / CLJ** · Cluj-Napoca, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public aeronautical data cross-checked against AIP Romania (ROMATSA) chart-index references; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 46°47′21″N / 023°41′08″E (46.78917, 23.69222) `[Navigraph navdata / OurAirports cross-check]` |
| Field elevation | **1,039 ft / 317 m AMSL** (Wikipedia/OurAirports cite 1,036–1,039 ft) |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+2 (EET) / UTC+3 (EEST, EU DST observed) |
| Runway(s) | **07/25** 2,040 × 45 m, concrete — single runway (the field's older 08/26 runway was converted to a taxiway when 07/25 opened) |
| Preferential runway | Not confirmed from a primary AIP table this pass 🟧 |
| Longest LDA | ~2,040 m nominal; **RWY 07 carries a 787 ft (~240 m) displaced threshold** — reduces usable LDA on 07 🟧 |
| Approaches | **ILS RWY 25**, **RNAV (GNSS) RWY 07**, **RNAV (GNSS) RWY 25**, **VOR RWY 07** `[AIP Romania chart-index cross-check]` |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar/procedural mix assumed** — Napoca Approach serves the field; **București ACC (LRBB)** en route — no dedicated FIR brief yet published, see [Europe airspace brief](../../../../airspace/europe.md) 🟧 |
| Elevation class | 1,039 ft — modest elevation, **not** hot-and-high, but higher than either Bucharest field; verify any density-altitude margin on a hot summer day 🟧 |
| Special-airport status | None identified in reachable sources |
| Customs / PoE | **Yes** — international scheduled service confirmed; hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LHBP, LYBE, LROP** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Transylvanian basin setting near Cluj-Napoca; field elevation 1,039 ft is modest but higher than the Bucharest fields — no specific close-in high-terrain hazard identified, but not independently verified against an MSA chart this pass. |
| Runway length vs fleet perf | 🟧 | Single 2,040 m runway with a displaced threshold on 07 — verify field-length margin for our types against current performance data; not a hard limit for narrowbody types but merits confirmation. |
| Approach availability / minima | 🟧 | ILS RWY 25 plus RNAV(GNSS) on both ends and VOR RWY 07 confirmed by name; minima not confirmed from a primary table. |
| Airspace / traffic / control | 🟧 | Regional airport, second-busiest in Romania; control type/radar coverage not independently confirmed. |
| Weather / seasonal hazard | 🟧 | Transylvanian continental climate — colder winters than Bucharest, snow/icing season; no field-specific hazard statistic found. |
| Curfew / slots / hours | 🟧 | Not confirmed — no evidence of curfew or slot coordination found. |
| RFF category vs our types | 🟧 | Not published in reachable sources. |
| Fuel availability | 🟧 | Not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed by virtue of scheduled international service; hours/handler not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
LRCL sits at 1,039 ft AMSL near Cluj-Napoca, in the Someșeni area of the Transylvanian basin. No specific close-in high-terrain hazard was identified in reachable sources, but this has **not been independently verified against an MSA/area chart** this pass — Transylvania is generally hillier terrain than the Wallachian Plain around Bucharest, so treat this as a caution item pending chart verification rather than a confirmed non-issue. 🟧

### 3.2 Airborne conflict / traffic 🟧
LRCL is Romania's second-busiest airport by passenger traffic (behind LROP), but well below LROP's density. **Napoca Approach** provides terminal service; control-type (procedural vs full radar) was not independently confirmed. No dedicated FIR brief exists yet for București (LRBB); cross-ref the general [Europe airspace brief](../../../../airspace/europe.md). 🟧

### 3.3 Runway excursion 🟧
LRCL has a **single runway (07/25)**, 2,040 × 45 m concrete, replacing an older 08/26 runway (now a taxiway) in October 2013. **RWY 07 carries a displaced threshold of 787 ft (~240 m)** — this materially reduces the usable landing distance from that direction and must be factored into landing-distance planning. A **January 2016 runway-excursion accident** (a Boeing 737-400 skidded off the runway after an extended flare and touchdown roughly 700 m from the RWY 25 threshold, on a wet-snow-contaminated surface, no injuries) is a documented real-world precedent for contamination/long-landing risk at this single-runway field. 🟥

### 3.4 Weather threat 🟧
Cluj-Napoca sits in the Transylvanian basin, with a more pronounced continental climate than Bucharest — colder winters with a recognised snow/icing season (directly relevant to the 2016 wet-snow excursion above). No field-specific fog or wind-shear statistic was found in reachable sources. 🟧

### 3.5 Operational considerations 🟧
The field has **only one runway** — there is no alternate-direction/parallel-runway option if 07/25 is disrupted (closure, contamination, disabled aircraft). This single-runway dependency, combined with the RWY 07 displaced threshold and the documented 2016 wet-snow excursion, makes **winter contamination and long-landing risk the field's standing operational watch-item**. 🟥

---

## 4. Cautions & Warnings

- **RWY 07 has a 787 ft (~240 m) displaced threshold** — confirm the correct usable landing distance before committing to that direction.
- **Single-runway field** — no parallel or reciprocal-direction alternative exists on the field itself if 07/25 becomes unusable; factor this into alternate planning.
- **Documented winter contamination excursion risk** — a January 2016 event involved an extended flare and touchdown ~700 m past the RWY 25 threshold on a wet-snow-contaminated runway; brief a firm touchdown-zone target and go-around discipline in winter contamination conditions.
- Field elevation (1,039 ft) and Transylvanian terrain context are higher/hillier than Bucharest — verify the current MSA chart rather than assuming a flat-plain profile.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟩
- **Crew-qualification gate:** No specific crew-qualification gate identified; the standing briefing items are the RWY 07 displaced threshold and winter-contamination excursion risk (§3.3). 🟧
- **Operating restrictions / bans:** None identified in reachable sources. 🟧
- **Overflight / entry / permits:** Standard international arrival; Romania's Schengen air-border status should be reconfirmed for current-day passenger-flow planning. 🟧
- **Operations notes:** ANSP — **ROMATSA**; airport historically operated under Cluj County Council administration (since 1997, per Wikipedia). New terminal capacity added in phases through 2024, most recently a 2024 departure-hall/apron extension. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed | 🟧 |
| AD operating hours | Not confirmed | 🟧 |
| Night / curfew restrictions | None identified | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not confirmed | 🟧 |
| PCN | 105/R/D/W/T reported in tier-4 sources — **not independently confirmed against a primary AIP table** | 🟧 |
| Customs | International PoE confirmed by scheduled service; hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 2,040 × 45 m | Concrete / PCN 105/R/D/W/T 🟧 (tier-4, not primary-confirmed) | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Reduced by **787 ft (~240 m) displaced threshold** — verify current published LDA 🟧 | Displaced threshold — confirm current-cycle distance |
| 25 | 2,040 × 45 m | Concrete / PCN 105/R/D/W/T 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Reciprocal; ILS-equipped |

*Runway opened 26 October 2013, replacing the field's original 08/26 runway (now a taxiway). Length/width and RWY 07 displaced threshold cross-checked between SkyVector and OurAirports. Declared-distance breakdown (TORA/TODA/ASDA) not obtained from a primary AIP table this pass.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Cluj ATIS | 125.520 | Not confirmed | 🟧 |
| Delivery | Not confirmed | Not confirmed | Not confirmed | 🟧 |
| Ground | Not confirmed | Not confirmed | Not confirmed | 🟧 |
| Tower | Cluj Tower | 118.700 (also 134.400 reported) | Not confirmed | 🟧 |
| Approach | Napoca Approach | 119.680 (also 126.430 / 127.270 reported — sector-specific) | Not confirmed | 🟧 |
| Centre / FIR | București ACC (LRBB) | Per current AIRAC | H24 assumed | No dedicated FIR brief published yet — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 |

*Source: SkyVector cross-check (tier-4). Not confirmed against a primary AIP frequency table this pass — treat as indicative only.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | CLJ (Cluj-Napoca) | 111.20 | Not confirmed | ~4.0 NM |
| VOR | BAI (Baisoara) | 117.95 | Not confirmed | ~26.0 NM |
| VOR | CIC (Cicau) | 112.25 | Not confirmed | ~28.4 NM |
| VOR | ZLU (Zalau) | 108.00 | Not confirmed | ~32.6 NM |
| NDB | TGM (Targu Mures) | 428 kHz | Not confirmed | ~32.7 NM |
| ILS 25 | Ident not confirmed 🟧 | Not confirmed 🟧 | Not confirmed | CAT not confirmed — Wikipedia notes CAT I ILS installed 2001, upgraded to CAT II in Feb 2009 (dated, not reconfirmed against current AIRAC) 🟧 |

*VOR idents/frequencies per SkyVector (tier-4). CAT I ILS installation (2001) and CAT II upgrade (2009) per Wikipedia — historical facts, not reconfirmed as the field's current ILS category.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not confirmed from a primary source this pass. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07 | RNAV (GNSS); VOR | Not confirmed 🟧 | Not confirmed 🟧 | Displaced threshold — confirm LDA |
| 25 | ILS; RNAV (GNSS) | Not confirmed 🟧 | Not confirmed 🟧 | Historically reported CAT I/II ILS (dated) |

- **STARs (names only):** An RNAV Arrival Chart exists for both RWY 07 and RWY 25 per the AIP chart index — specific STAR names not confirmed this pass. 🟧
- **LVP:** Not confirmed — CAT I/II ILS history on RWY 25 suggests some low-vis capability; current status not reconfirmed. 🟧
- **Missed approach watch-items:** Single-runway field — a missed approach returns traffic into a non-parallel environment; terrain/MSA specifics not independently confirmed this pass. 🟧

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify on current chart. 🟧
- **Take-off minima:** Not confirmed. 🟧
- **Start-up / push-back:** Not confirmed — a regional-scale terminal (9 gates, expanded to 12 in 2024) suggests limited stand count; confirm with Ground/Apron on the day. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination evidence found; standard EU ATFM practice may apply during peak periods. 🟧
- **De-icing:** Not confirmed — Transylvanian winter climate (§3.4) makes a de-icing season plausible, but provisioning/availability not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminal expanded from 9 to 12 gates in a May 2024 extension; specific stand/code-letter assignment for our types not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** The original 08/26 runway now serves as a taxiway following the 2013 runway change — specific routing not confirmed. 🟧
- **Hot spots / tight taxiways:** None specifically identified in reachable sources — not independently verified. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Transylvanian-basin continental climate — colder winters than Bucharest, with a recognised snow/icing season.
- **Seasonal hazards:** Winter snow/icing contamination is the field's documented hazard (§3.3/§3.4, 2016 excursion precedent). No specific fog/wind-shear statistic found. 🟧
- **Local effects:** Not independently confirmed beyond general Transylvanian-basin climatology. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (single-runway field — a closure has no on-field alternative), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, conflict-zone. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — a non-base regional field in the K Global network. 🟩
- **Nearest suitable alternates:** Company preferred alternates **LHBP, LYBE, LROP** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. [**LROP — Henri Coandă**](../lrop/index.md) is the same-country (Romania) alternate and is linked directly; LHBP/LYBE are cross-country and referenced by ICAO only.
- **Fuel-uplift notes:** Not confirmed in reachable sources. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 2,040 m single runway with a displaced threshold on 07 — confirm field-length margin for the assigned type against current performance data; not identified as a hard limit for narrowbody types. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- The field's single 2,040 m runway with a displaced RWY 07 threshold is the one real performance consideration here — confirm landing/takeoff distance margins for the assigned K Global type against current data before dispatch, particularly in winter contamination conditions. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Mag variation, transition altitude, take-off minima — none confirmed in reachable sources.
- Declared distances (TORA/TODA/ASDA/LDA breakdown per runway), including the exact current RWY 07 displaced-threshold distance.
- PCN (105/R/D/W/T reported in tier-4 sources only) — not primary-confirmed.
- ATC frequencies — SkyVector-sourced only, not cross-checked against a primary AIP table.
- ILS ident and current CAT status on RWY 25 (historically CAT I from 2001, upgraded CAT II in 2009 — not reconfirmed as current).
- RFF category — not published in reachable sources.
- Curfew/slot status (assumed none) — not confirmed.
- Fuel supplier(s), handling agent(s), customs/immigration hours — none confirmed.
- SIDs/STARs (current names) — not obtained; pull the live current-AIRAC procedure list before use.
- Terrain/MSA profile — not independently verified against an area chart this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Romania (ROMATSA / AIS Romania) AIRAC AIP AMDT 13/25**, WEF 2025-11-27 — https://www.aisro.ro/files/amdt/LR_Amdt_A_2025_13_en.pdf (retrieved 2026-07-26). *Chart-index confirmation of ILS RWY 25 / RNAV(GNSS) RWY 07+25 / VOR RWY 07 approach names.*
- OurAirports — https://ourairports.com/airports/LRCL/ and /runways.html (retrieved 2026-07-26). *Runway/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/LRCL/Avram-Iancu-Airport (retrieved 2026-07-26). *Navaid/frequency/runway/displaced-threshold cross-check.*
- Wikipedia — "Cluj International Airport" — https://en.wikipedia.org/wiki/Cluj_International_Airport (retrieved 2026-07-26). *History, 2013 runway change, ILS CAT I/II installation dates, 2016 runway-excursion incident, terminal expansion.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. |
