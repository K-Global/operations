# OEMA — Prince Mohammad Bin Abdulaziz · Airport Briefing

**OEMA / MED** · Madinah, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the GACA/SANS Saudi eAIP (AD 2 OEMA) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N24°33'01" / E039°42'21" (24.5503, 39.7058) `[GACA eAIP AD 2.2]` |
| Field elevation | **2,134 ft** (reference temperature 42°C) `[GACA eAIP AD 2.2]`; commonly cited as 2,151 ft in secondary/simulator sources — use the AIP figure as authoritative 🟧 |
| Mag variation | 4° E (2020 epoch), annual change +0.05° `[GACA eAIP AD 2.2]` |
| Time zone | UTC+3 (AST), no DST |
| Runway(s) | **17/35** (main, 4,335 × 60 m) and **18/36** (secondary, 3,050 × 45 m) — **two runways, not one** — correcting the single-runway assumption 🟧 |
| Preferential runway | **17/35 is the preferential runway** for takeoff and landing; 18/36 "may be approved, however delay may be experienced" `[GACA eAIP AD 2.23.3]` |
| Longest LDA | 4,335 m (17/35) |
| Approaches | **ILS CAT I** on 17/35 only; **VOR** and **RNP** on all four runway ends (18/36 has no ILS) |
| RFF category | **CAT 10** 🟩 |
| Control type | **Radar** (TMAR, PSR/MSSR) — Madinah Approach, Class D CTR (10 NM) |
| Elevation class | **Elevated (2,134 ft) on a volcanic plateau** — a moderate, not extreme, hot-and-high input (ref. temp 42°C); see also §3.5 and cross-link to high-elevation guidance below |
| Special-airport status | Not formally categorised; standing items are the AIP-documented **terrain-driven VHF coverage gap**, a **charted VSS infringement on the VOR RWY 36 procedure**, and the **West Apron Hajj/Umrah-restricted parking rule** — see §5 |
| Customs / PoE | **Yes** — H24 `[GACA eAIP AD 2.3]` |
| K Global category | **Not in VAMSYS** 🟧 |
| K Global base | **Not in VAMSYS** 🟧 |
| Company preferred alternates | **Not in VAMSYS** 🟧 — nearest suitable planning candidates: **OEJN** (Jeddah, ~410 km) and **OERK** (Riyadh, ~630 km) |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

> Cross-link: [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for general elevated-field performance guidance; OEMA's ~2,134 ft elevation is moderate compared to [OEAB (Abha, ~6,858 ft)](../oeab/index.md) but the same reference-temperature planning discipline applies.

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Sits on a volcanic plateau (Harrat Rahat lava field to the south); not a high-mountain profile, but the AIP itself documents solar obstruction beacons on nearby high ground, a VHF terrain-coverage gap, and a charted VSS infringement on one approach — moderate terrain awareness warranted. |
| Runway length vs fleet perf | 🟩 | 4,335 m on the main runway (17/35) is ample for any K Global widebody; 3,050 m on 18/36 is adequate but the secondary/delay-likely runway. |
| Approach availability / minima | 🟧 | ILS CAT I only on 17/35; 18/36 has VOR/RNP only, no ILS. Lighting on 17/35 is CAT-II-standard hardware but the published ILS is CAT I. |
| Airspace / traffic / control | 🟥 | Major Hajj/Umrah gateway (with Jeddah) — seasonal pilgrim surge drives significant schedule density even outside peak weeks (Umrah is year-round). |
| Weather / seasonal hazard | 🟧 | Hot desert climate (BWh), AIP-documented wind-shear study/reporting request, bird-strike caution, dust storms in season. |
| Curfew / slots / hours | 🟩 | No curfew found — H24 operation across all published service categories. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Jet A-1, H24, hydrant (East Apron) + tanker. |
| Customs / handling / security | 🟧 | H24 customs/immigration confirmed; **field is not in VAMSYS — all K Global operational fields pending reconciliation.** |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
OEMA sits on a volcanic plateau at ~2,134 ft, adjacent to the northern reach of the **Harrat Rahat** lava field (a composite of four coalesced volcanic fields extending roughly 300 km south-southeast, highest point ~1,744 m / 5,722 ft, well south of the field). This is **not** a high-mountain CFIT profile like Abha further south, but the current AIP itself documents concrete evidence that terrain is operationally relevant here: (1) **"Solar Beacons on mountains around airport"** are noted in the lighting section, confirming elevated ground close enough to require obstruction marking; (2) two of the three Madinah Approach VHF frequencies carry an explicit **"coverage gap due to terrain"** remark, mitigated by a complementary frequency; (3) a **Visual Segment Surface (VSS) infringement** is charted on the VOR RWY 36 procedure — a building 1.3 NM before the threshold, elevation 2,290 ft, right of centreline. Treat this as a moderate, AIP-documented terrain-awareness field — well short of Abha's severity, but not a flat, featureless-desert profile either.

### 3.2 Airborne conflict / traffic 🟥
OEMA is **one of two designated Hajj/Umrah gateway airports** (with Jeddah/OEJN), serving pilgrims visiting the Prophet's Mosque before and/or after Hajj. During the Hajj season five Saudi airports handle pilgrim arrivals (Madinah, Jeddah, Riyadh, Dammam, Yanbu); large numbers of pilgrims arrive here in the first ten days of Dhu al-Hijjah, and post-Hajj visits continue over the following days (reported allowances up to 11 days total stay, of which up to 8 may be spent in Madinah). **Umrah traffic is year-round**, not confined to the Hajj season, via the Nusuk digital platform — meaning schedule-density surge is a recurring, not purely annual, consideration. Cross-ref the [Middle East airspace brief](../../../../airspace/middle-east.md) — Madinah sits within the **Jeddah FIR (OEJD)**, with Jeddah ACC delegating control up to FL240 to Madinah Approach.

### 3.3 Runway excursion 🟩
No displaced thresholds found on either runway; declared distances show a genuine clearway/stopway margin (e.g. RWY 17 TODA 4,635 m against a 4,335 m TORA). No seasonal contamination/braking-action concern in this desert climate.

### 3.4 Weather threat 🟧
**Wind shear** is a directly AIP-sourced, field-specific hazard: GACA's Meteorological Authority maintains an active study of the wind-shear phenomenon at this aerodrome and formally requests pilots report the time/altitude of any encounter — 8 wind-shear sensors plus a mobile upper-air observation unit are deployed. **Bird strike** is also directly AIP-flagged, with an explicit caution for extreme care on takeoff/landing due to bird concentration nearby. Hot desert climate (BWh) brings large diurnal temperature swings and dust storms in spring/summer. See §14.

### 3.5 Operational considerations 🟧
Three durable items: (1) **the field is not in VAMSYS** — all K Global operational fields (category, base flag, alternates, taxi times) are pending reconciliation; (2) **RWY 18/36 is the non-preferential runway** and its use "may be approved, however delay may be experienced" — plan 17/35 as the default; (3) **the West Apron is explicitly Hajj/Umrah-and-normal-traffic restricted**, with aircraft parked there beyond 2 hours subject to repositioning to the remote apron — a real, AIP-sourced ground-planning constraint during surge periods.

---

## 4. Cautions & Warnings

- **Two runways, not one** — 17/35 (main, preferential) and 18/36 (secondary, delay-likely) — do not assume single-runway operations.
- **AIP-documented VHF terrain coverage gap** on two of three Madinah Approach frequencies — expect a complementary frequency to be assigned.
- **Charted VSS infringement on VOR RWY 36** (building 1.3 NM before THR, 2,290 ft elevation, right of centreline) — a specific, named approach-hazard item.
- **Wind shear** is an AIP-flagged, actively studied local hazard — report any encounter per the AIP request.
- **Bird strike caution** is explicitly flagged in the AIP for takeoff/landing.
- **West Apron parking restricted to Hajj/normal traffic** — aircraft parked >2 hours subject to repositioning.
- **Field is not in VAMSYS** — do not assume a category, base flag, alternates or taxi-time figure without reconciliation.
- No CAT II/III ILS capability — 17/35 is CAT I only; 18/36 has no ILS at all.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted-crew "special airport" in reachable sources; standing items are terrain-awareness (§3.1) and Hajj/Umrah surge (§3.2). 🟧
- **Crew-qualification gate:** None identified beyond standard CAT I currency. 🟩
- **Operating restrictions / bans:** No noise abatement procedure published (AIP: "NIL"). No RNP AR ban or circling restriction found — verify current AIRAC. 🟧 Circling/circuit: left-hand for RWY 17/18, right-hand for RWY 35/36, height 1,500 ft AGL.
- **Overflight / entry / permits:** Standard Saudi international arrival; Hajj/Umrah pilgrim traffic uses standard visa/Nusuk-platform arrangements. 🟩
- **Operations notes:** Aerodrome operator — **GACA**; operated under a 25-year BOT concession by the **TIBAH** consortium (TAV Airports Holding, Saudi Oger, Al Rajhi Holding Group) — Saudi Arabia's first privatised airport. 2015 terminal design credited to **GMW Architects/Mimarlık** (a Foster+Partners connection was not corroborated by any source found — do not assert it). 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[GACA eAIP AD 2.3]` | 🟩 |
| AD operating hours | H24 — no curfew identified | 🟩 |
| Night / curfew restrictions | None found in reachable AIP text | 🟩 |
| RFF category | CAT 10 | 🟩 |
| Fuel | Jet A-1, H24; tanker (30–60 L/s) + fixed hydrant (East Apron, 40–65 L/s) | 🟩 |
| PCN | RWY 17/35 PCN 80/R/A/W/T (surface changes to PCN 75/F/A/W/T beyond 250 m from THR); RWY 18/36 PCN 59/F/A/W/T | 🟩 |
| Customs | H24 `[GACA eAIP AD 2.3]` | 🟩 |
| Handling / FBO | Not confirmed for our operation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 17 | 4,335 × 60 m | Asphalt / PCN 80/R/A/W/T | 4,335 m | 4,635 m | 4,455 m | 4,335 m | **Main runway, preferential** |
| 35 | 4,335 × 60 m | Asphalt / PCN 80/R/A/W/T | 4,335 m | 4,635 m | 4,455 m | 4,335 m | **Main runway, preferential** |
| 18 | 3,050 × 45 m | Asphalt / PCN 59/F/A/W/T | 3,050 m | 3,350 m | 3,170 m | 3,050 m | Secondary — "delay may be experienced" |
| 36 | 3,050 × 45 m | Asphalt / PCN 59/F/A/W/T | 3,050 m | 3,290 m | 3,050 m | 3,050 m | Secondary |

*Source: GACA/SANS eAIP AD 2.12/2.13 (AIRAC AMDT 07/25, eff. 2025-04-03 — retrieved 2026-07-26). No displaced thresholds found. All distances in metres. Wide-body aircraft on 18/36 may not taxi the parallel taxiway during that operation `[AD 2.23.3]`.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Madinah Information | 126.850 | H24 | |
| Ground | Madinah Ground Control | 121.900 | H24 | |
| Tower | Madinah Tower | 118.300 (primary) / 124.200 (secondary) | H24 | |
| Approach | Madinah Approach | 125.100 / 127.700 / 120.350 | H24 | **Two of the three carry an AIP-documented "coverage gap due to terrain"** — expect the complementary frequency to be assigned |
| Centre / FIR | Jeddah FIR (OEJD) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md); Jeddah ACC delegates control to FL240 to Madinah Approach |

*Source: GACA/SANS eAIP AD 2.18 (retrieved 2026-07-26); cross-checked against SkyVector. No discrete Clearance Delivery frequency found — likely handled on Ground. 🟧*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/DME 17 | INAH | 111.700 | H24 | CAT I |
| ILS/DME 35 | IDIN | 111.300 | H24 | CAT I |
| ILS/DME 36 | IPMA | 110.500 | H24 | CAT I; **note: RWY 18 has no ILS** |
| DVOR/DME | PMA | 114.100 (CH88X) | H24 | On field |

*Only 17/35/36 carry ILS; RWY 18 has VOR/RNP approaches only. Approach lighting on 17/35 is ALSAF II/SSALR (900 m, CAT-II-standard hardware) but the published ILS is CAT I — do not assume CAT II minima without confirming the current Instrument Approach Chart. Source: GACA/SANS eAIP AD 2.19 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft `[GACA eAIP AD 2.17]`; TL by QNH — verify current chart.
- **Speed:** 250 KIAS below FL100 (Class C TMA norm) — confirm current chart.
- **Preferential runway logic:** **17/35 is preferential**; 18/36 "may be approved, however delay may be experienced."
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 17 | ILS or LOC, VOR, RNP | CAT I |
| 35 | ILS or LOC, VOR, RNP | CAT I |
| 18 | VOR, RNP | **No ILS** |
| 36 | ILS or LOC, VOR, RNP | CAT I; **charted VSS infringement on VOR procedure** — building 1.3 NM before THR, 2,290 ft |

- **STARs (names only):** Published for all four runway ends (RNAV 1/GNSS-based) — exact designators not extracted this pass; pull the current-AIRAC name at planning. 🟧
- **LVP:** Not applicable — no CAT II/III capability published; standard CAT I minima on 17/35 only.
- **Missed approach watch-items:** Named holds **EGMEM** (min 6,200 ft, VOR RWY 17/18 and ILS/LOC RWY 17), **OBTOX** (min 6,000 ft, ILS/LOC RWY 35/36 and VOR RWY 35/36), **GERIR** (missed-approach hold, all runways), **ORLIG** (RNP missed approach, all runways) — all well above field elevation, reflecting the elevated-plateau/terrain-aware design. Verify current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV 1 SIDs published for all four runway ends, plus Radar Vector SID charts for RWY 35-36 and RWY 17-18. `[GACA eAIP AD 2.22/2.24]`
- **RNP / climb-gradient requirements:** No specific gradient figure extracted this pass; the elevated-plateau setting (2,134 ft, 42°C reference) warrants a performance check even absent a documented special gradient. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** East Apron mandates fixed 400 Hz ground power within 5 min of docking; APU permitted 15 min before engine start on departure; nose-in aircraft may start one engine at low power only if APU is inoperative `[GACA eAIP AD 2.23.4]`.
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified in reachable sources; Hajj/Umrah-season informal flow management possible but not documented in AIP text. 🟧
- **De-icing:** **NIL** — not provided, consistent with the desert climate. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) (non-applicable here).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None published (AIP: "NIL").
- **Night noise / dB limits:** Not published; no curfew or noise-charge regime identified.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** East Apron carries the highest PCN rating (85/R/A/W/T) and is the presumed widebody cluster; West/Remote/Royal/Military/GA/Isolation aprons are PCN 59/F/A/W/T. **West Apron is explicitly Hajj/Umrah-and-normal-traffic restricted**, with a 2-hour parking limit before repositioning to the remote apron. 🟧 | 🟧
- **Push-back:** East Apron fixed 400 Hz ground power procedure (§11); confirm push-back procedure locally.
- **Standard taxi routes:** Confirm with Ground/Apron on the day; wide-body aircraft on 18/36 may not taxi the parallel taxiway during that runway's use.
- **Hot spots / tight taxiways:** None specifically named beyond the West Apron 2-hour parking rule.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot desert climate (Köppen BWh) on an elevated volcanic plateau; large diurnal temperature swings — a sample AIP-cited METAR shows 43°C air temperature against a -2°C dew point on the same observation.
- **Seasonal hazards:** **Wind shear** — an AIP-documented, actively studied local hazard with a standing pilot-report request. **Dust storms** common in spring and summer. **Bird strike** — AIP-flagged caution for takeoff/landing. Winter nights can approach freezing given the elevation, though this is a moderate factor versus higher-elevation Saudi fields.
- **Local effects:** Volcanic-plateau setting (Harrat Rahat to the south) contributes to the terrain-aware items in §3.1; no coastal effects at this inland site.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET (dust, wind shear). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current Middle East conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block. See also the [Middle East airspace brief](../../../../airspace/middle-east.md) §9 for the region's live conflict-zone picture.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — a Hajj/Umrah-linked field; **not a K Global base** (VAMSYS: not in VAMSYS 🟧).
- **Nearest suitable alternates:** **Not in VAMSYS** 🟧 — durable planning candidates pending reconciliation: **OEJN** (Jeddah, sibling-region field, ~410 km) and **OERK** (Riyadh, ~630 km); confirm suitability, runway/RFF adequacy and current minima per leg once VAMSYS fields are set.
- **Fuel-uplift notes:** Jet A-1, H24, tanker + East Apron hydrant; specific into-plane provider not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** RWY 17/35 (4,335 m) is non-limiting for any K Global type; RWY 18/36 (3,050 m) is adequate but the secondary/delay-likely runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific limiting factor identified on RWY 17/35. On RWY 18/36 (3,050 m, no ILS), confirm current-type field-length/performance margin before planning a scheduled operation off that runway; expect it to be used only when 17/35 is unavailable. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field is not in VAMSYS** — category, base flag, alternates and taxi times all pending reconciliation.
- **Elevation discrepancy** — AIP states 2,134 ft; most secondary/simulator sources give 2,151 ft — use the AIP figure pending re-verification.
- **ILS CAT I vs CAT II lighting mismatch** on RWY 17/35 — AIP states CAT I ILS but CAT II-grade approach lighting; verify against the actual Instrument Approach Chart.
- **Take-off minima, engine run-up, reverse-thrust policy** — not confirmed in reachable sources.
- **Ground handling agent for our operation** — not confirmed.
- **Clearance Delivery frequency** — not found; likely handled on Ground.
- **SID/STAR exact current-AIRAC designators** — only chart existence/type confirmed.
- **AIP currency** — retrieved cycle dated AMDT 07/25 (2025-04-03); verify against current AIRAC before operational use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **GACA/SANS eAIP, AD 2 OEMA Madinah/Prince Mohammad Bin Abdulaziz International**, AIRAC AMDT 07/25, eff. 2025-04-03 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2007_25_2025_04_03/eAIP/AD%202%20OEMA%20MADINAH%20-%20PRINCE%20MOHAMMAD%20BIN%20ABDULAZIZ%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).
- Wikipedia — "Prince Mohammad bin Abdulaziz International Airport" — https://en.wikipedia.org/wiki/Prince_Mohammad_bin_Abdulaziz_International_Airport (retrieved 2026-07-26). *Terminal history, traffic.*
- SKYbrary — https://skybrary.aero/airports/oema (retrieved 2026-07-26). *Climate/METAR sample.*
- Airport Technology — "Prince Mohammed Bin Abdul Aziz International Airport" — https://www.airport-technology.com/projects/prince-mohammed-bin-abdul-aziz-international-airport-new-terminal-madinah/ (retrieved 2026-07-26). *2015 terminal design/architect credit.*
- Wikipedia — "Harrat Rahat" — https://en.wikipedia.org/wiki/Harrat_Rahat (retrieved 2026-07-26). *Regional volcanic-plateau terrain context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
