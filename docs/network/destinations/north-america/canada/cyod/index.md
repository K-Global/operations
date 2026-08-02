# CYOD — Cold Lake · Airport Briefing

**CYOD / YOD** · Cold Lake, Alberta, Canada · North America

**Version** v0.1.3 · **Updated** 2026-07-26 · **Status** Draft — provisional (a dated tier-1 CFS mirror was located 2026-07-25 — see §7/§18; current-cycle AIP Canada still not openly reachable; folded into a 4-page pack 2026-07-26 — see Dispatch/Departure/Arrival pages and Change Log)

> **Read-me:** Planning aid for X-Plane 11, not a chart. Static data is from the primary AIP source of record where reachable; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal. Companion pages: [Dispatch](dispatch.md) · [Departure](departure.md) · [Arrival](arrival.md).

> **Field role/notice:** CYOD is **CFB Cold Lake — an operational RCAF fighter base (4 Wing, CF-18 Hornet)**, not a normal civil airport. It appears in K Global operations as the **fuel-enroute / enroute-alternate reference point** on the reference EDDF–KSFO OFP (2026-07-25), used for the contingency-fuel check. It is **not a scheduled port of call** and is briefed here **strictly as an emergency/enroute-alternate reference**, subject to military PPR. See §5 and §16.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 54°24′18″N 110°16′44″W (54.405, −110.279) `[OurAirports]`; Wikipedia gives 54.40528°N 110.28222°W — consistent within rounding |
| Field elevation | 1,775 ft / 541 m MSL `[OurAirports / Wikipedia]` |
| Mag variation | **14°E (2009 epoch, CFS 2021 mirror); 13°E (2022 epoch, SkyVector)** — both now sourced; current 2026 epoch not confirmed, estimate ~12–13°E 🟧 |
| Time zone | Mountain Time — MST UTC−7 / MDT UTC−6 (Alberta observes DST) |
| Runway(s) | 04/22 — 8,270 × 200 ft; 13L/31R — 12,600 × 200 ft; 13R/31L — 10,000 × 150 ft (all asphalt, lighted) `[OurAirports]` |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not published / verify — runway 13L/31R physical length 12,600 ft; declared distances (TORA/TODA/ASDA/LDA) not sourced 🟧 |
| Approaches | Military-type procedures expected (ILS, TACAN, PAR) — **names only, not confirmed**; verify on current AIRAC/CFS 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Military-controlled aerodrome (RCAF tower); Radar/approach service via military APP — civil-equivalent control type not published 🟧 |
| Elevation class | Sea-level-equivalent — not a hot-and-high field 🟩 |
| Special-airport status | **Military airbase — PPR required; not categorised for civil ops** — see §5 🟥 |
| Customs / PoE | Nominally an Airport of Entry (CBSA-staffed) but international civil use is restricted to military aircraft/personnel per CFS — **not usable as a normal civil PoE** 🟥 |
| K Global category | 🟧 **Not in VAMSYS** — unset; this field is not a VAMSYS-networked destination |
| K Global base | 🟧 **Not in VAMSYS** — unset (No — not a base; fuel-enroute/emergency reference only, see §16) |
| Company preferred alternates | 🟧 **Not in VAMSYS** — unset; see §16 (CYEG Edmonton, CYYC Calgary cited as nearest civil alternates, not VAMSYS-sourced) |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** — unset |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Boreal lake-district terrain, generally flat to gently rolling; no significant high terrain near the field |
| Runway length vs fleet perf | 🟩 | 13L/31R at 12,600 ft is physically compatible with all K Global widebody types — runway length is not the limiter here |
| Approach availability / minima | 🟧 | Military approach names/minima not published in public sources — verify via CFS/military AIP if a real diversion is contemplated |
| Airspace / traffic / control | 🟥 | Active fighter operational base; Cold Lake Air Weapons Range (CLAWR) restricted/danger airspace ~35 km north; high-tempo military traffic (incl. annual Maple Flag exercise) |
| Weather / seasonal hazard | 🟧 | Continental sub-arctic climate — severe winter cold, icing, blowing snow; cold-temperature altimetry correction applies |
| Curfew / slots / hours | 🟧 | ATS/AD operating hours not published in public sources |
| RFF category vs our types | 🟧 | **CAT 5** confirmed via CFS (2021-cycle mirror)/SkyVector cross-check — verify current cycle and against our largest fleet type's required category; access (military PPR) remains the binding constraint regardless. |
| Fuel availability | 🟥 | Military fuel supply only — availability by prior arrangement, not established for civil/commercial uplift |
| Customs / handling / security | 🟥 | Military PPR gate is the binding constraint — civil/scheduled traffic normally redirected to Cold Lake Regional Airport (CEN5), a separate uncontrolled civil field ~4 NM NW `[Wikipedia, citing Canada Flight Supplement]` |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
Cold Lake sits in Alberta's boreal lake district at 1,775 ft elevation. Surrounding terrain is benign — flat to gently rolling, forested, dotted with lakes — with no high terrain features close to the field. No CFIT-specific mitigation beyond standard MSA discipline is indicated by the data gathered; confirm MSA sectors against current-AIRAC area chart before use.

### 3.2 Airborne conflict / traffic 🟥
CYOD is an active RCAF fighter operational base (4 Wing — 401, 409 and 410 Squadrons, CF-18 Hornet) and NORAD western-air-defence node. The Cold Lake Air Weapons Range (CLAWR), a large restricted/danger training area, lies approximately 35 km north of the field and is in continuous or near-continuous use for air-to-air and air-to-ground training, including the high-density annual **Maple Flag** exercise (typically May–June). Any diversion into this airspace requires coordination through military ATC; expect high fighter-traffic density and non-standard procedural loads compared with a civil field. Cross-reference the [North America airspace brief](../../../../airspace/north-america.md) for regional context before planning any use of this field; no dedicated Edmonton Centre FIR brief has yet been built in this network.

### 3.3 Runway excursion 🟧
Published runway data shows ample length (13L/31R at 12,600 × 200 ft) with no displaced-threshold or LDA-shortfall information available. The seasonal risk is contamination: Alberta winters bring snow, ice and blowing-snow conditions that can affect runway friction; no contamination-reporting or RFF-response data specific to civil diversions is published. Treat any winter diversion as requiring a fresh contamination/braking-action check via NOTAM at time of use (§15).

### 3.4 Weather threat 🟧
Continental sub-arctic climate: severe winter cold (temperatures to −30/−40 °C are common December–February), icing, blowing snow and reduced visibility in winter; summer convective thunderstorm activity. Cold-temperature altimetry corrections are required below the transition altitude in extreme cold per standard Canadian cold-weather procedures — brief this for any winter-season contingency use. See also §14 (live wx pulled at planning) and [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

### 3.5 Operational considerations 🟥
The binding constraint at CYOD is not performance — it is **access**. This is a military PPR field with no established civil handling, no confirmed civil fuel uplift, and international civil use is restricted to military aircraft/personnel per the Canada Flight Supplement (per Wikipedia citation, CFS effective 2025-11-27 to 2026-01-22). For K Global purposes this field is briefed **only** as: (a) the fuel-enroute reference point named on the reference EDDF–KSFO OFP (2026-07-25), and (b) a theoretical emergency enroute alternate requiring real-time coordination with military ATC/PPR authority — never a planned diversion of first choice while a normal civil alternate (e.g. CYEG Edmonton, CYYC Calgary) remains available.

---

## 4. Cautions & Warnings

- 🟥 Military airbase — PPR required for any civil aircraft; not a scheduled or routine-diversion port of call.
- 🟥 Cold Lake Air Weapons Range (CLAWR) restricted/danger airspace ~35 km north of the field — high-density fighter training, including the annual Maple Flag exercise.
- 🟥 Fuel is military-supplied; availability for civil/commercial aircraft is by prior arrangement only — do not plan to uplift here.
- 🟧 Cold-weather ops: sub-arctic winters bring ice/snow contamination and require cold-temperature altimetry correction.
- 🟧 Civil/unscheduled traffic is normally redirected to the separate, uncontrolled Cold Lake Regional Airport (CEN5) ~4 NM NW — do not confuse the two fields when briefing this diversion.
- 🟧 ATIS frequency recorded in the public tier-4 source (26 MHz) appears anomalous/incomplete — verify against current CFS before use; do not rely on it as published here.
- 🟩 Terrain is benign — no significant high ground near the field.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Military airbase (RCAF 4 Wing, CF-18 Hornet fighter operations) — not categorised under any civil operator special-airport scheme. Treat as a non-standard, PPR-gated field for all civil purposes. 🟥
- **Crew-qualification gate:** No civil crew-qualification programme exists for this field in K Global's network — it is not a trained-to destination. Any real use would be an emergency/enroute-alternate diversion requiring full command-level briefing and real-time coordination with military ATC before commitment. 🟥
- **Operating restrictions / bans:** Civil SIDs/STARs and RNP AR procedures are not established for this field in public sources; military approach names (ILS/TACAN/PAR-type) are referenced generically only — verify on current AIRAC/CFS before any planning reliance. Night ops / civil handling capability unconfirmed.
- **Overflight / entry / permits:** CYOD is nominally listed as an Airport of Entry with CBSA staffing, but per the Canada Flight Supplement (cited via Wikipedia, eff. 2025-11-27 to 2026-01-22) its use by international flights is **currently restricted to military aircraft and personnel**. Unscheduled civilian traffic is directed instead to Cold Lake Regional Airport (CEN5), a separate uncontrolled civil field. **PPR via military channels is required for any civil aircraft movement.** 🟥
- **Operations notes:** No civil handling/FBO presence is established at CYOD. Any diversion use is an emergency/military-coordinated event, not a planned commercial operation.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | **CAT 5** `[CFS 17 JUN 2021 / SkyVector cross-check — 2021-cycle mirror, re-verify current]` | 🟧 |
| Fuel | Military supply — availability by prior arrangement only; not established for civil/commercial uplift | 🟥 |
| PCN | 04/22: 77/F/D/X/U · 13L/31R: 99/F/D/X/T · 13R/31L: 100/R/A/X/T — see §7 | 🟧 |
| Customs | Nominally AOE / CBSA-staffed, but international civil use restricted to military traffic per CFS — not usable as a normal civil PoE | 🟥 |
| Handling / FBO | None established for civil ops | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04/22 | 8,270 × 200 ft (2,521 × 61 m) — CFS-confirmed verbatim 🟩 | Asphalt, lighted; **PCN 77/F/D/X/U** `[CFS 17 JUN 2021 / SkyVector cross-check]` | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | Mobile/BAK-12 arrest system Rwy 04 (1,305 ft) and Rwy 22 (1,460 ft) `[CFS]` |
| 13L/31R | 12,600 × 200 ft (3,840 × 61 m) — CFS-confirmed verbatim 🟩 | Asphalt, lighted; **PCN 99/F/D/X/T** `[CFS 17 JUN 2021 / SkyVector cross-check]` | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | Longest runway; physically widebody-capable. ILS "IOD" 109.3 serves Rwy 31R-13L; Mobile Arrest System Rwy 13L (2,010 ft) and Rwy 31R (1,780 ft), plus BAK-12 Rwy 31R (1,485 ft) `[CFS]` |
| 13R/31L | 10,000 × 150 ft (3,048 × 46 m) — CFS-confirmed verbatim 🟩 | Asphalt, lighted; **PCN 100/R/A/X/T** `[CFS 17 JUN 2021 / SkyVector cross-check]` | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | 🟧 CFS gated — verify | BAK-12 Smart Arrest System, both ends (1,360 ft) `[CFS]` |

*2026-07-25 reconciliation: a public mirror of the actual NAV CANADA Canada Flight Supplement AD/facility text for CYOD (AIRAC cycle effective 0901Z 17 JUN 2021 – 0901Z 12 AUG 2021 — the oldest/only openly reachable cycle found; current cycle remains subscription-gated) was located and read directly — https://imageserver.fltplan.com/afd/Canada/17JUN2021/CYOD-287.PDF. Its "RWY DATA" line reads verbatim "Rwy 13L(130°)/31R(310°) 12,600x200 ASPH / Rwy 13R(130°)/31L(310°) 10,000x150 ASPH / Rwy 04(040°)/22(220°) 8270x200 ASPH" — an exact match to the dimensions already in this brief (previously sourced only to OurAirports/tier-4); dimensions are now 🟩 CFS-confirmed. Its "RCR" line publishes PCN values for all three runways verbatim as shown above; SkyVector independently republishes the identical PCN figures, corroborating the CFS mirror. **No numeric TORA/TODA/ASDA/LDA table appears anywhere in this CFS AD entry** — same pattern as CYZF (see that brief) — so declared distances remain a genuine CFS/AIP Canada gate, not a research gap. Given the CFS mirror's age (2021), all figures above should be re-verified against the current AIRAC cycle before operational reliance, though runway dimensions/PCN are not the kind of data that changes often absent a resurfacing project.

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | — | **118.25 / 260.0** `[CFS 17 JUN 2021 / SkyVector]` — corrects prior tier-4 "26 MHz" figure, now confirmed erroneous | Varies, broadcast on ATIS | `[CFS]` |
| Clearance Delivery | CLD | 120.6 / 230.6 `[CFS/SkyVector]` | Not published 🟧 | `[CFS]` |
| Ground | GND | 121.9 / 275.8 `[CFS/SkyVector]` | Not published 🟧 | `[CFS]` |
| Tower | TWR | 126.2 / 226.5 / 236.6 / 255.7 (E) `[CFS/SkyVector]` | Limited hours (ltd hrs); O/T "Cold Lake advisory" 126.2 (E) | Military tower `[CFS]` |
| Approach / Terminal | TML/APP | 124.5 / 322.8 (E) `[CFS/SkyVector]` | Not published 🟧 | `[CFS]` |
| Departure | DEP | 124.5x / 322.8 (U) `[CFS/SkyVector]` | Not published 🟧 | `[CFS]` |
| Arrival / PAR | ARR | 119.4x/120.6x/124.5x/128.2x/134.1x/269.6x/279.8x/294.6x/324.3x/336.0x/350.5x/378.5x (E) `[CFS/SkyVector]` | 14–06Z‡ Mon–Fri, closed Sat/Sun/Hol (PAR use) | Multiple discrete PAR channels `[CFS]` |
| Military Wing Ops | OPS | 340.2 `[CFS/SkyVector]` — corrects prior tier-4 "34.02 MHz" (OurAirports figure was a decimal-shift error) | Not published 🟧 | Tran acft call 30 min prior to ETA `[CFS]` |
| PMSV (military weather) | PMSV | 344.6 `[CFS/SkyVector]` — corrects prior tier-4 "34.46 MHz" (same decimal-shift error) | Not published 🟧 | `[CFS]` |
| Centre / FIR | — | Edmonton Centre (name only, frequency not published) | — | Cross-check the [North America airspace brief](../../../../airspace/north-america.md) 🟧 |

**2026-07-25 reconciliation:** the CFS AD/facility text (17 JUN 2021 mirror, direct-fetched — https://imageserver.fltplan.com/afd/Canada/17JUN2021/CYOD-287.PDF) and SkyVector's corroborating listing replace the prior tier-4-only (OurAirports) frequency set. Several OurAirports figures were confirmed **decimal-shift errors** (e.g. "34.02"/"34.46 MHz" for what CFS/SkyVector both give as 340.2/344.6; "26 MHz" ATIS was likewise wrong — correct value is 118.25/260.0). Hours/dates for most services remain unpublished in the reachable sources and this is still a 2021-cycle mirror — re-verify against current AIRAC before operational reliance.

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | YOD | 398 kHz | Preventive maint 20–23Z‡ Wed if required | On field `[CFS 17 JUN 2021]` |
| TACAN | UOD | 113.5 Ch 82 | Preventive maint 01–07Z‡ 1st/3rd Fri of month | On field `[CFS 17 JUN 2021]` |
| ILS/LOC | IOD | 109.3 | Preventive maint 01–07Z‡ 1st/3rd Fri of month | Serves **Rwy 31R-13L**; CAT/RVR minima not confirmed `[CFS 17 JUN 2021]` |

**2026-07-25 reconciliation:** navaid idents/frequencies were located in the same 17 JUN 2021 CFS mirror used for the §7 declared-distances check (previously "not published" — no public source had been reached at v0.1 build time). This is a 2021-cycle source; re-verify idents, frequencies and maintenance windows against current AIRAC before reliance, and confirm whether any additional navaid was added/decommissioned since.

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧
- **Speed:** Not published / verify 🟧
- **Preferential runway logic:** Not published / verify 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 31R/13L | ILS (ident IOD, 109.3) | Not published | Not published | ILS confirmed serving Rwy 31R-13L per CFS (2021 mirror); minima/CAT not confirmed 🟧 |
| — | PAR (Precision Approach Radar) | Not published | Not published | Confirmed available (multiple discrete channels, §8) 14–06Z‡ Mon–Fri, closed Sat/Sun/Hol per CFS; military-controlled 🟧 |
| — | TACAN (ident UOD, 113.5 Ch 82) | Not published | Not published | On-field TACAN confirmed; approach procedure/runway assignment not separately confirmed 🟧 |

- **STARs (names only):** Not published / verify 🟧
- **LVP:** Not published / verify 🟧
- **Missed approach watch-items:** None terrain-driven identified (benign terrain, §3.1); confirm against current chart if a real diversion is planned.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify 🟧
- **RNP / climb-gradient requirements:** Not published / verify — no hot-and-high driver at this elevation 🟧
- **Take-off minima:** Not published / verify 🟧
- **Start-up / push-back:** Not published / verify — no civil handling established 🟧
- **ATC slot / CTOT & clearance:** Not applicable — not a scheduled/slot-controlled civil field; any movement is via military coordination.
- **De-icing:** Not published / verify 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify — not applicable to a military operational base in the civil sense 🟧
- **Night noise / dB limits:** Not published / verify 🟧
- **Engine run-up restrictions:** Not published / verify 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify 🟧

---

## 13. Ground operations

- **Stands for our types:** No civil stands/apron allocation established — not applicable to K Global operations 🟧
- **Push-back:** Not published / verify 🟧
- **Standard taxi routes:** Not published / verify 🟧
- **Hot spots / tight taxiways:** Not published / verify 🟧
- **Follow-me:** Not published / verify — likely required given military-controlled movement area, unconfirmed 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Continental sub-arctic (Alberta Lakeland district). Prevailing wind direction not sourced to AIP 🟧.
- **Seasonal hazards:** Severe winter cold (routinely −30 °C to −40 °C, December–February), icing, blowing snow and whiteout conditions; summer convective thunderstorm activity. Cold-temperature altimetry correction applies below transition altitude in extreme cold. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).
- **Local effects:** No significant terrain-driven local wind effect identified; standard prairie/boreal seasonal variability.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures,
> navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, TFR, military exercise NOTAMs (e.g. Maple Flag), restricted-airspace (CLAWR) activation status. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Fuel-enroute / enroute-alternate reference point only — named as "CYOD/YOD" on the reference EDDF–KSFO OFP (2026-07-25) as the contingency-fuel check point. **Not a scheduled destination, base, or planned diversion of first choice.** 🟧 Not in VAMSYS — unset.
- **Nearest suitable (civil) alternates for real contingency planning:** CYEG Edmonton International and CYYC Calgary International are the nearest fully civil, fully serviced alternates in the region — exact distances/bearings not verified in this build; confirm via current OFP/route manual before relying on them. Not yet cross-checked against a VAMSYS mirror (this field is not a VAMSYS-networked destination). 🟧
- **Fuel-uplift notes:** Military supply only; availability by prior arrangement, not established for civil/commercial uplift. Do not plan fuel uplift at CYOD. 🟥
- **Range/perf flags for our fleet:** Runway length (12,600 ft on 13L/31R) is physically compatible with all K Global widebody types — runway performance is not the constraint. The binding constraint is civil access (military PPR, §5). No OM B type-specific performance penalty identified at this elevation (1,775 ft, non-hot-and-high). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 17. Fleet-specific notes (optional)

- No fleet-specific ground/performance consideration beyond the generic note in §16 — the field's long runways are not a limiting factor for any K Global type. There is no established civil stand/handling infrastructure for any type, so this remains an emergency-only reference field, not a plannable stop for any fleet. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RESOLVED 2026-07-25:** a tier-1 CFS AD/facility mirror WAS located and read directly (AIRAC cycle effective 17 JUN 2021 – 12 AUG 2021 — https://imageserver.fltplan.com/afd/Canada/17JUN2021/CYOD-287.PDF), superseding pure tier-4 (OurAirports) reliance for runway dimensions, PCN, ARFF category, communications frequencies (several OurAirports figures were confirmed decimal-shift errors — see §8), and navaids (§9). It is a dated (2021) cycle, not the current AIRAC — re-verify all figures below against a current-cycle source before operational reliance; the true current-cycle CFS/AIP Canada product remains subscription-gated and was not reached.
- Mag variation — now sourced (14°E/2009 per CFS mirror, 13°E/2022 per SkyVector); current 2026 epoch still not directly confirmed.
- ATS/AD operating hours, night restrictions, curfew — still not published in any reachable source (the CFS mirror gives service/PPR hours in §5/§13 context but no blanket AD operating-hours statement).
- **RESOLVED 2026-07-25:** RFF category — CAT 5, confirmed via CFS mirror + SkyVector cross-check (see §6/§7). Still verify against current cycle and against our fleet's required category.
- **PARTIALLY RESOLVED 2026-07-25:** PCN for all three runways now confirmed (§7) via the CFS mirror + SkyVector cross-check. **Full declared distances (TORA/TODA/ASDA/LDA) remain genuinely unconfirmed** — the CFS AD entry itself (like CYZF's) does not carry a numeric declared-distance table; this is a CFS/AIP Canada gate, not a research gap. See §7 note.
- **RESOLVED 2026-07-25:** navaid idents/frequencies serving the field — NDB YOD 398, TACAN UOD 113.5 Ch 82, ILS IOD 109.3 (Rwy 31R-13L), all per the CFS mirror (§9). Re-verify against current cycle.
- **PARTIALLY RESOLVED 2026-07-25:** approach names/runway assignment — ILS (IOD, Rwy 31R-13L), TACAN (UOD) and PAR (multiple discrete channels) all confirmed present per the CFS mirror (§10); IAF/FAF and minima still not confirmed in any reachable public source.
- SID/STAR names, transition altitude/level — still not published in any reachable source.
- **RESOLVED 2026-07-25:** ATIS frequency — confirmed 118.25/260.0 per CFS mirror + SkyVector; the prior tier-4 "26 MHz" figure was erroneous (see §8).
- Preferential runway logic, take-off minima, de-icing availability (beyond the "Ltd Mil Type I D-ice" note now in the CFS mirror) — still not fully published.
- Exact distance/bearing from CYOD to CYEG/CYYC for alternate planning — still not sourced.
- Fuel availability terms/PN for any exceptional civil uplift arrangement — still not sourced beyond the general PPR/coordination language already in §5/§13.
- **Additional item identified:** the CFS mirror also lists a noise-abatement procedure (weekday 0400–1330Z, weekend Fri 0400Z–Mon 1330Z, all day holidays; straight-in-only jet recovery, no overhead breaks without Wg Ops approval) and taxiway-geometry cautions (sharp >135° turns at Twy intersections A1-A and A2-A for large aircraft) not yet propagated into §11/§12/§13 of this brief — flagged here for a future update.
- This field is **not in VAMSYS** — category, base flag, preferred alternates and taxi timings are all unset (see §1/§16 and the Dispatch page).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Private/subscription material (e.g. in-sim charts) may inform content but is not listed here.*

- **Canada Flight Supplement (Nav Canada), Aerodrome/Facility Directory, AIRAC cycle effective 0901Z 17 JUN 2021 – 0901Z 12 AUG 2021** (public PDF mirror, located and read verbatim 2026-07-25 for §7 declared-distances reconciliation) — ARP, elevation, mag var, hours, customs, ARFF (CAT 5), fuel, runway data, PCN, arrest-system distances, comms, navaids (NDB/TACAN/ILS), noise-abatement procedure, cautions — https://imageserver.fltplan.com/afd/Canada/17JUN2021/CYOD-287.PDF (retrieved 2026-07-25). *Not current-AIRAC — re-verify; this is the oldest/only openly-reachable CFS cycle found for this field.*
- SkyVector — https://skyvector.com/airport/CYOD/Cold-Lake-Group-Captain-R-W-Airport — independent cross-check of runway dimensions, PCN, ARFF category, mag var and communications frequencies against the CFS mirror above; all corroborated (retrieved 2026-07-25).
- OurAirports — CFB Cold Lake (CYOD/YOD) facility data (retrieved 2026-07-25) — https://ourairports.com/airports/CYOD/
- OurAirports — CFB Cold Lake runways (retrieved 2026-07-25) — https://ourairports.com/airports/CYOD/runways.html
- OurAirports — CFB Cold Lake frequencies (retrieved 2026-07-25) — https://ourairports.com/airports/CYOD/frequencies.html — **note: several frequency figures (Wing Ops, PMSV, ATIS) were found to be erroneous/decimal-shift artifacts when cross-checked against the CFS mirror and SkyVector; corrected in §8.**
- Wikipedia — CFB Cold Lake, citing Canada Flight Supplement, eff. 2025-11-27Z to 2026-01-22Z (retrieved 2026-07-25) — https://en.wikipedia.org/wiki/CFB_Cold_Lake
- Wikipedia — Cold Lake Regional Airport, citing Canada Flight Supplement (retrieved 2026-07-25) — https://en.wikipedia.org/wiki/Cold_Lake_Regional_Airport
- NAV CANADA — Aeronautical Information / AIP Canada portal (landing page only; current-cycle AD-2 CYOD data is behind the CFS/AIP Canada subscription/publication product, not directly fetchable as an open public URL) (retrieved 2026-07-25) — https://www.navcanada.ca/en/aeronautical-information/aip-canada.aspx

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build |
| v0.1.1 | 2026-07-25 | Declared distances checked vs NAV CANADA CFS + public mirrors; §7 reconciled (see §18 for items still gated). A public CFS AD/facility mirror (17 JUN 2021 cycle) was located and read directly, confirming runway dimensions verbatim (now 🟩) and PCN for all three runways (now 🟧-sourced rather than blank); numeric TORA/TODA/ASDA/LDA confirmed genuinely absent from the CFS entry itself — remains 🟧 CFS-gated. Same source also resolved ARFF category (CAT 5), navaids (NDB/TACAN/ILS), several comms frequencies (correcting OurAirports decimal-shift errors), and mag variation sourcing — propagated to §2/§6/§8/§9/§10/§18. |
| v0.1.2 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.1.3 | 2026-07-26 | Folded into a 4-page pack at `CYOD — Cold Lake/` (Briefing/Dispatch/Departure/Arrival); content preserved unchanged aside from adding cross-links (North America airspace brief, OM E Cold Weather Operations, OM B Fleet Capability Matrix, the source register) re-based for the new folder depth, and noting the VAMSYS unset status (§1/§16/§18). |
