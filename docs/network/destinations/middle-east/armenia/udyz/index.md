# UDYZ — Zvartnots · Airport Briefing

**UDYZ / EVN** · Zvartnots, Yerevan, Armenia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Armenia (ARMATS)-derived, chart cross-checked

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP Armenia (ARMATS eAIP, section AD-2.UDYZ — the eAIP renders via a JavaScript frameset and did not return extractable text this pass, see §18) cross-checked against publicly reachable secondary chart data and standard public aeronautical sources; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N40°08.8′ / E044°23.8′ (approx., secondary-chart-sourced) 🟧 |
| Field elevation | **2,838 ft AMSL** (highest runway-end elevation; RWY 09 threshold ~2,800 ft) |
| Mag variation | 🟧 **~5°–6° E** — sources disagree (5.0° E vs 6.1° E across different retrieval dates); not confirmed against the current AIP cycle |
| Time zone | UTC+4 (AMT, no DST observed) |
| Runway(s) | **09/27**, 3,850 × 56 m, asphalt — single runway |
| Preferential runway | **Approach preferred on RWY 09; take-off preferred on RWY 27** (noise-abatement driven — see §12) |
| Longest LDA | 🟧 Not independently confirmed against declared-distance table this pass — full runway length (3,850 m) is the secondary-chart figure; treat as unconfirmed pending primary AIP re-check |
| Approaches | **ILS CAT I and CAT II on RWY 09** (CAT II requires special aircrew/aircraft certification); RWY 27 — visual/non-precision only in reachable sources |
| RFF category | 🟧 Not published / verify |
| Control type | **Radar/procedural mix** — Yerevan TWR/APP on the field; FIR: **Yerevan (UDDD)** — see [Middle East airspace brief](../../../../airspace/middle-east.md) |
| Elevation class | **Moderate elevation (2,838 ft)** — below the network's hot-and-high threshold, but the field sits in a valley/plateau ringed by significant terrain (Mt. Aragats, Mt. Ararat) — CFIT/MSA is the operative concern here, not density altitude — see §3.1 |
| Special-airport status | 🟥 **CAT II approach requires special aircrew and aircraft certification**; significant surrounding high terrain drives elevated MSA sectors — see §5 |
| Customs / PoE | **Yes** — Armenia's principal international gateway |
| K Global category | **R** `[VAMSYS mirror 2026-07-25]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **UGTB, UBBB** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Yerevan sits in a plateau/valley ringed by significant terrain — **Mt. Aragats** (~13,419 ft) to the NW and **Mt. Ararat** (~16,854 ft, across the Turkish border) to the SW dominate the area MSA picture; published sector MSAs around the ZVR VOR reach as high as **18,100 ft**. This is the field's defining threat — see §3.1. |
| Runway length vs fleet perf | 🟩 | 3,850 m single runway is ample for any K Global widebody at this field's moderate elevation; no length constraint identified. |
| Approach availability / minima | 🟧 | ILS CAT I/II on RWY 09 only; RWY 27 approach appears visual/non-precision in reachable sources — confirm current chart. CAT II requires special aircrew/aircraft certification. |
| Airspace / traffic / control | 🟧 | Single-runway field with a radar/procedural mix; traffic density expected to be moderate as Armenia's main gateway, not confirmed against current data. |
| Weather / seasonal hazard | 🟧 | Continental climate — cold snowy winters (de-icing required) and hot dry summers; field-specific fog/wind statistics not confirmed this pass — see §14. |
| Curfew / slots / hours | 🟧 | No curfew or slot-coordination requirement found in reachable sources — not independently confirmed either way. |
| RFF category vs our types | 🟧 | Not published / verify — no RFF category confirmed in reachable sources. |
| Fuel availability | 🟧 | Jet A-1 confirmed available; hours/supplier not confirmed. |
| Customs / handling / security | 🟧 | Confirmed as Armenia's principal PoE; exact hours/handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Zvartnots sits at a moderate field elevation (2,838 ft) but in a geographic setting dominated by major peaks: **Mt. Aragats** (~13,419 ft / ~4,090 m) to the northwest and the iconic **Mt. Ararat** (~16,854 ft / ~5,137 m, across the Turkish border to the southwest) both loom over the Yerevan plateau, with the Geghama volcanic range to the east. Published area MSA sectors around the **ZVR VOR (112.3)** reach as high as **18,100 ft** in places — a clear signal of the terrain complexity surrounding this field despite its own modest elevation. This is the airport's single defining threat: **MSA discipline and terrain awareness, not density altitude, are the operative CFIT concerns here.** RNAV SIDs off both runway ends require notably high minimum climb gradients (up to ~7% in secondary-chart data) — a direct consequence of the surrounding terrain. Cross-ref [Middle East airspace brief](../../../../airspace/middle-east.md) for the wider FIR picture; FIR is **Yerevan (UDDD)**.

### 3.2 Airborne conflict / traffic 🟧
UDYZ is a single-runway field operating under a radar/procedural mix (Yerevan APP/TWR) as Armenia's principal international gateway. Traffic density is not independently confirmed in reachable sources this pass, but as a single-runway field serving national and regional connecting traffic, workload is expected to be materially lower than the İstanbul-area megahubs on the network's Turkey side.

### 3.3 Runway excursion 🟧
No declared-distance table was reached from the primary AIP this pass (the ARMATS eAIP renders via JavaScript and returned no extractable text — see §18); secondary-chart data shows a single 3,850 × 56 m asphalt runway with **180° turns on the runway forbidden except at the designated turn pad** — a specific ground-manoeuvring restriction rather than a stopping-distance concern. Treat exact declared distances (TORA/TODA/ASDA/LDA) as unconfirmed pending a primary-source re-check.

### 3.4 Weather threat 🟧
Armenia's continental climate brings cold, snowy winters (de-icing facilities are confirmed present, implying a recognised winter season) and hot, dry summers. No field-specific fog, wind-shear or convective-frequency statistic was found in reachable public sources this pass — treat regional continental-climate seasonality as context, not a quantified hazard, pending a dedicated climatology source. See §14.

### 3.5 Operational considerations 🟥
Plan around: (1) the **surrounding high-terrain / MSA environment** (§3.1) — brief this as the field's primary threat on every arrival/departure; (2) the **CAT II approach on RWY 09 requiring special aircrew and aircraft certification** — confirm currency before planning a low-vis arrival; (3) **noise-abatement routing around the city of Etchmiadzin** on RWY 27 departures, where low overflight is explicitly prohibited (§12); and (4) the **180°-turn-on-runway prohibition** except at the designated turn pad — a specific ground-manoeuvring constraint to brief before any non-standard runway back-track.

---

## 4. Cautions & Warnings

- **Significant high terrain surrounds the field** — Mt. Aragats (NW) and Mt. Ararat (SW, across the border) with area MSAs reaching 18,100 ft in places; maintain strict MSA discipline on every arrival and departure.
- **RWY 09 ILS CAT II requires special aircrew and aircraft certification** — do not plan a CAT II approach without confirming currency; RWY 27 has no confirmed precision approach in reachable sources.
- **RNAV SID climb gradients are notably steep** (secondary-chart data shows requirements up to ~7% on some departures) — a direct terrain-driven performance consideration; verify current-chart gradients before departure planning, especially at higher weights.
- **180° turns on the runway are forbidden** except at the designated turn pad — plan any need to back-track accordingly.
- **RWY 27 departures must complete their turn before or after overflying the city of Etchmiadzin; low overflight of the city is explicitly prohibited** — a noise/community-sensitivity constraint with real routing implications.
- Mag variation, RFF category, declared distances and current-AIRAC procedure names are not independently confirmed this pass — treat as 🟧 pending a live-AIRAC/ARMATS-eAIP cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources, but the standing crew-briefing items are the **surrounding high-terrain/MSA environment** and the **CAT II certification requirement on RWY 09**. 🟥
- **Crew-qualification gate:** CAT II currency and aircraft certification required for a low-vis approach on RWY 09; confirm before planning. 🟧
- **Operating restrictions / bans:** 180°-turn-on-runway prohibition (except at the designated turn pad); no RNP AR ban or circling restriction confirmed — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival into Armenia; no special state permit identified for scheduled commercial ops in reachable sources. 🟧
- **Operations notes:** Operator — **Armenia International Airports CJSC** (under a concession originally signed in 2001/2002 with Corporación América for a 30-year term — current concession status not independently re-confirmed this pass, flagged 🟧); ANSP — **ARMATS** (Armenian Air Traffic Services, state-owned air navigation service provider).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not independently confirmed this pass — assumed H24 as the principal national gateway | 🟧 |
| AD operating hours | Not confirmed — no curfew identified in reachable sources | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 confirmed available; hours/supplier not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Confirmed present (principal PoE); hours not confirmed | 🟧 |
| Handling / FBO | Not individually confirmed in reachable sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 3,850 × 56 m | Asphalt / PCN not published 🟧 | 🟧 Not confirmed | 🟧 Not confirmed | 🟧 Not confirmed | 🟧 Not confirmed | THR elevation ~2,800 ft; preferred approach runway |
| 27 | 3,850 × 56 m | Asphalt / PCN not published 🟧 | 🟧 Not confirmed | 🟧 Not confirmed | 🟧 Not confirmed | 🟧 Not confirmed | THR elevation ~2,838 ft (highest point); preferred take-off runway; turn before/after overflying Etchmiadzin, low overflight prohibited |

*Source: secondary chart data (see §Sources) cross-checked against publicly reachable summaries; the primary ARMATS eAIP (AD-2.UDYZ) renders via a JavaScript frameset and did not return extractable declared-distance figures this pass. No displaced thresholds identified in secondary sources. All distances in metres where stated; treat every figure in this table as 🟧 pending a live primary-AIP pull.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Yerevan ATIS | 119.5 | 🟧 Not confirmed | |
| Ground | Yerevan Ground | 119.0 | 🟧 Not confirmed | |
| Tower | Yerevan Tower | 120.9 | 🟧 Not confirmed | |
| Approach | Yerevan Approach | 126.0 | 🟧 Not confirmed | |
| Centre / FIR | Yerevan (UDDD) | Per current AIRAC | 🟧 Not confirmed | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: secondary chart data (see §Sources); not cross-checked against the primary ARMATS eAIP this pass — treat all frequencies as 🟧 pending AIRAC verification.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | ZVR | 112.3 | 🟧 Not confirmed | Primary area navaid; MSA sectors referenced from this VOR |
| ILS 09 | IZR (LOC) | 108.1 | 🟧 Not confirmed | CAT I and CAT II (CAT II requires special aircrew/aircraft certification); GP 3.00°, TCH 52 ft |

*Source: secondary chart data (see §Sources); not cross-checked against the primary ARMATS eAIP this pass — treat as 🟧 pending AIRAC verification. No ILS identified for RWY 27 in reachable sources.*

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Secondary-chart data shows TA 11,500 ft; TL by ATC — not independently confirmed against a current primary source this pass.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) expected — confirm no local override on current chart.
- **Preferential runway logic:** **RWY 09 is preferred for approach** per noise-abatement policy (§12) — confirm assignment on ATIS.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 09 | ILS/DME (CAT I and CAT II), also VOR/DME and RNP (LNAV/VNAV) named in secondary sources | OKUDA / ZVR | 🟧 Not confirmed | CAT II requires special aircrew/aircraft certification |
| 27 | RNAV (RNP, LNAV) named in secondary sources; no ILS identified | LUMIK / BASRU / AGUGO | 🟧 Not confirmed | Confirm current chart — visual/non-precision profile expected |

- **STARs (names only):** Secondary-chart data references RNAV STARs via **GOSIS, INDUR, SEVAN, TIBLO** waypoints for RWY 09, and **GOSIS, INDUR, SEVAN, TIBLO** (different transitions) plus holding over **LUMIK**/**SEVAN** for RWY 27 — names only, not obtained from a primary current-AIRAC source; pull the live procedure list at planning. 🟧
- **LVP:** Not confirmed in reachable sources this pass. 🟧
- **Missed approach watch-items:** Terrain-driven — the surrounding high ground (§3.1) makes the published missed-approach climb gradient and turn direction safety-critical; verify current chart before every approach, and do not improvise a missed-approach track in this terrain environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Secondary-chart data references RNAV SIDs via **GOSIS, SEVAN, TIBLO, INDUR** waypoints from both runway ends, with published minimum climb gradients as steep as **~7%** on some routes — names and gradients not obtained from a primary current-AIRAC source; pull the live procedure list at planning. 🟧
- **RNP / climb-gradient requirements:** 🟥 Terrain-driven steep climb gradients are a real performance consideration at this field — confirm exact current-AIRAC gradient and equipage requirement per SID before departure planning, particularly at higher weights. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed in reachable sources — verify current chart. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination or CTOT regime identified in reachable sources — treat as unconfirmed pending verification. 🟧
- **De-icing:** Dedicated de-icing stands (25/26) referenced in secondary sources with specific tow/push-back access procedures; season and provisioning not confirmed against a primary source. Armenia's continental winter climate implies a real de-icing season. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **RWY 27 departures must complete their turn before or after overflying the city of Etchmiadzin; low overflight of the city is prohibited.** This is the field's confirmed noise-abatement rule from secondary-chart data. **Preferential runway policy favours RWY 09 for approach and RWY 27 for take-off** generally.
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Passenger aprons (Apron 1/2/3) with a separate cargo terminal apron; specific Code E/F widebody stand allocation not confirmed in reachable sources. 🟧 | 🟧
- **Push-back:** De-icing stands (25/26) require engine-tow or push-back-tractor access per secondary-chart data (stand 25 entered via stand 24 with tow/push-back; stand 26 similarly); general push-back policy for passenger stands not confirmed.
- **Standard taxi routes:** Main taxiway (Main TWY) plus lettered taxiways B/C/D serving the apron/stand complex per secondary-chart data; confirm routing with Ground on the day.
- **Hot spots / tight taxiways:** Not individually confirmed in reachable sources this pass. 🟧
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Continental climate on the Armenian plateau — cold, snowy winters and hot, dry summers; prevailing wind data not confirmed in reachable sources this pass. 🟧
- **Seasonal hazards:** Winter de-icing season implied by confirmed de-icing stand infrastructure; no field-specific fog/wind/convective statistic found. Surrounding high terrain (§3.1) can be expected to generate local mountain-wave/turbulence effects, though not independently quantified. 🟧
- **Local effects:** Mountain/valley terrain effects (katabatic winds, localised turbulence) plausible given the surrounding peaks, but not confirmed against a dedicated source. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current terrain/obstacle NOTAMs given the surrounding high-terrain environment. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates **UGTB** (Tbilisi, Georgia) and **UBBB** (Baku, Azerbaijan) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg; both lie beyond the immediate high-terrain ring around Yerevan.
- **Fuel-uplift notes:** Jet A-1 confirmed available; hours/supplier not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,850 m) non-limiting for any K Global type; the operative performance consideration is the **steep terrain-driven SID climb-gradient requirement** (§11), not runway length or field elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No widebody-specific runway-length or elevation performance penalty identified at this field. The operative fleet-relevant consideration is confirming each type's climb performance against the terrain-driven SID gradient requirements referenced in §11 before departure planning at higher weights. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary ARMATS eAIP (AD-2.UDYZ) could not be extracted this pass** — the eAIP renders via a JavaScript frameset; a full re-pull (browser-rendered or PDF-attachment access) is needed to confirm every figure in this brief against the primary source of record. This is the dominant open item for this field.
- **Declared distances (TORA/TODA/ASDA/LDA)** — not confirmed against a primary source; secondary-chart data suggests full-length (3,850 m) but this is unconfirmed.
- **RFF category and PCN** — not published/verify in any reachable source this pass.
- **Mag variation** — sources disagree (5.0° E vs 6.1° E across different retrieval dates).
- **Current-AIRAC SID/STAR names and exact climb-gradient figures** — secondary-chart data (dated material, retrieved via a public chart-hosting mirror) references GOSIS/SEVAN/TIBLO/INDUR waypoints and gradients up to ~7%, but this has not been cross-checked against a current-AIRAC source.
- **Transition altitude** — secondary-chart data shows 11,500 ft; not independently confirmed.
- **Slot/curfew regime, ATS hours, handling agent(s), stand/gate allocation** — none confirmed in reachable sources.
- **Concession/operator status** — Armenia International Airports CJSC's original 30-year concession (from 2002) approaches its stated term; current status not re-confirmed this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Armenia (ARMATS eAIP), section AD-2.UDYZ** — primary source of record; landing page reached but rendered via a JavaScript frameset with no extractable text this pass — https://armats.am/storage/attachments/173390625201-25(23JAN2025)WithnewAICs/html/eAIP/UD-AD-2.UDYZ-en-GB.html (retrieved 2026-07-26). **Access-pattern note: requires a browser-rendered pull or the equivalent PDF attachment; flag for future build passes.**
- Jeppesen chart data (Zvartnots UDYZ/EVN, effective dates ranging 2016–2020 across individual chart panels), reproduced via a public document-hosting mirror — https://www.docdroid.net/file/download/yLg30bC/udyz-pdf.pdf (retrieved 2026-07-26). *Runway dimensions, ILS CAT I/II detail, VOR/ATIS/TWR/GND/APP frequencies, MSA sectors, RNAV SID/STAR waypoints and climb gradients, noise-abatement (Etchmiadzin) rule, 180°-turn restriction. Chart-derived secondary data, not a primary AIP citation — dated material, flagged 🟧 throughout pending current-AIRAC re-verification.*
- Wikipedia — "Zvartnots International Airport" — https://en.wikipedia.org/wiki/Zvartnots_International_Airport (retrieved 2026-07-26). *Elevation, operator/concession background, general context.*
- OurAirports — https://ourairports.com/airports/UDYZ/ (retrieved 2026-07-26). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP (ARMATS) cross-checked against secondary chart data; K Global fields from live VAMSYS; 4-page pack. |
