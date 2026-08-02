# OEJN — King Abdulaziz Intl · Airport Briefing

**OEJN / JED** · Jeddah, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the GACA/SANS Saudi eAIP (AD 2 OEJN) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N21°40'52" / E039°09'22" (21.6811, 39.1561) `[GACA eAIP AD 2.2]` |
| Field elevation | **49 ft** (reference temperature 37.9°C) `[GACA eAIP AD 2.2]`; commonly cited as 48 ft in secondary sources |
| Mag variation | 4° E (2020 epoch), annual change +0.05° `[GACA eAIP AD 2.2]` |
| Time zone | UTC+3 (AST), no DST |
| Runway(s) | **16C/34C** and **16L/34R** 4,000 × 60 m; **16R/34L** 3,800 × 60 m — three parallel runways |
| Preferential runway | Not published — confirm with ATC on the day 🟧 |
| Longest LDA | 4,000 m (16C/34C, 16L/34R) |
| Approaches | **ILS CAT I** all six ends, **RNP** all six ends, **VOR** all six ends |
| RFF category | **CAT 10** 🟩 |
| Control type | **Radar** — Jeddah Control/Final, Class D CTR (10 NM), Class A CTA/TMA above |
| Elevation class | Near sea-level (49 ft) — **not** hot-and-high; the performance/reliability driver here is extreme summer heat (ref. temp 37.9°C) and seasonal flash flooding, not density altitude |
| Special-airport status | Shared civil/military field (RSAF King Abdullah Air Base, C-130 squadrons); the **Hajj Terminal** and seasonal surge are the standing crew-briefing item — see §5 |
| Customs / PoE | **Yes** — H24 `[GACA eAIP AD 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **OERK, OBBI** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Red Sea coastal plain at 49 ft; no CFIT-relevant terrain. Only obstacles listed are the field's own towers. |
| Runway length vs fleet perf | 🟩 | 4,000 m on the two main pairs is ample for any K Global widebody; the 3,800 m third runway is also non-limiting. |
| Approach availability / minima | 🟩 | ILS CAT I on all six ends — no CAT II/III published despite CAT-II-standard lighting/power infrastructure; plan CAT I minima only. |
| Airspace / traffic / control | 🟥 | Saudi Arabia's busiest airport, driven substantially by Hajj/Umrah surge — three-parallel-runway high-density operation; the AIP itself warns of simultaneous-ILS confusion risk. |
| Weather / seasonal hazard | 🟥 | **Flash flooding from intense convective rain** is a documented, sometimes fatal hazard (2009, 2011, 2022 events); extreme summer heat and Red Sea humidity are standing factors. |
| Curfew / slots / hours | 🟩 | No curfew found — H24 operation across all published service categories. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | JP1/JP4 turbine fuel, H24, extensive hydrant system (152 pits). |
| Customs / handling / security | 🟧 | H24 customs/immigration confirmed at the airport level; Hajj-season surge-specific procedures not documented in reachable AIP/public sources — see §5. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OEJN sits at 49 ft on the flat Red Sea coastal plain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. The only obstacles listed in the reachable AIP extract are the field's own control-tower-type structures (214 ft and 90 ft, both marked/lighted). This is a non-issue field for terrain.

### 3.2 Airborne conflict / traffic 🟥
Jeddah is **consistently the busiest airport in Saudi Arabia** and one of the busiest in the Middle East, driven substantially by its unique role as the **principal Hajj/Umrah air gateway** (proximity ~65 km to Mecca). Three parallel runways (16C/34C, 16L/34R, 16R/34L) operate under Jeddah Control/Final; the AIP explicitly cautions **"exercise extreme care in selecting the correct ILS for the assigned runway as more than one ILS will be operating simultaneously"** on all six runway ends — a directly AIP-sourced parallel-runway crew-awareness item. Cross-ref the [Middle East airspace brief](../../../../airspace/middle-east.md) — Jeddah hosts the **Jeddah FIR (OEJD)** itself, the largest FIR in the MID region and the backbone of the region's surviving southern-bypass traffic flow.

### 3.3 Runway excursion 🟩
No displaced thresholds found for any of the six runway ends; declared distances are internally consistent (TORA=TODA=ASDA=LDA on each end). No contamination/braking-action concern in this climate.

### 3.4 Weather threat 🟥
**Flash flooding from intense convective/monsoon-influenced rainfall is the field's signature and most serious documented weather hazard** — the 25 November 2009 event dropped roughly 70 mm of rain in about 4 hours (more than a full average year's rainfall in one event), with a reported death toll of ~100+ regionally and severe infrastructure damage; a further serious flood occurred in late January 2011 (~110 mm in 3 hours) and again in November 2022. GACA's own 2006+ expansion programme explicitly included a new storm-water drainage network in direct response. **Extreme summer heat** (AIP reference temperature 37.9°C) and Red Sea coastal humidity are standing factors. Fog is not a documented issue at this field. See §14.

### 3.5 Operational considerations 🟥
Three durable items to plan around: (1) the **Hajj/Umrah seasonal surge** — Jeddah absorbs an estimated additional 1.5–2 million passengers over roughly six weeks during Hajj season via the dedicated Hajj Terminal (80,000-pilgrim simultaneous capacity), a scale and schedule-density consideration even outside the peak weeks (Umrah traffic is year-round); (2) **flash-flood risk** during the autumn/winter rainy season — ramp/drainage and possible wind-shear/microburst activity around intense convective cells; (3) the **shared civil/military field** (RSAF King Abdullah Air Base, C-130 squadrons) adds a mixed-traffic dimension. RFF, navaid and approach infrastructure are all first-tier.

---

## 4. Cautions & Warnings

- **Three parallel runways with simultaneous ILS operation** — the AIP specifically warns to select the correct ILS for the assigned runway.
- **Flash flooding** from intense rainfall is a real, sometimes fatal hazard (2009/2011/2022 events) — typically autumn/winter; expect possible ramp flooding, drainage-dependent taxiway/apron closures and convective wind-shear/microburst risk in season.
- **Hajj/Umrah seasonal surge** drives Saudi Arabia's highest passenger volumes through this field — expect schedule density and ground-congestion pressure during peak weeks even though no formal Hajj-specific ATC procedure was found in reachable AIP text.
- **Extreme summer heat** (AIP reference temperature 37.9°C) — factor into performance planning on the hottest days, though field length is non-limiting.
- No CAT II/III ILS capability is published — plan CAT I minima only, despite CAT-II-standard lighting/secondary-power infrastructure.
- Shared civil/military field (RSAF King Abdullah Air Base) — expect mixed civil/military traffic awareness.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **Hajj/Umrah surge** and **flash-flood season**. 🟥
- **Crew-qualification gate:** None identified beyond standard CAT I currency. 🟩
- **Operating restrictions / bans:** Overflight of Jeddah city is prohibited below 5,000 ft AGL except for departure/arrival per ATC `[GACA eAIP AD 2.21]`. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Saudi international arrival; Hajj/Umrah pilgrim traffic uses standard visa/Nusuk-platform arrangements, not a flight-operational permit. 🟩
- **Operations notes:** Aerodrome operator — **GACA**. Field shared with RSAF **King Abdullah Air Base** (Nos. 4, 16, 20 Squadrons, C-130 Hercules). Hajj Terminal designed by SOM (Fazlur Rahman Khan), tent-roof structural engineering by Horst Berger — an Aga Khan Award-winning (1983) structure, open/naturally-ventilated except for climate-controlled customs/baggage areas. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[GACA eAIP AD 2.3]` | 🟩 |
| AD operating hours | H24 — no curfew identified | 🟩 |
| Night / curfew restrictions | None found in reachable AIP text | 🟩 |
| RFF category | CAT 10 | 🟩 |
| Fuel | JP1/JP4 turbine fuel, H24, hydrant system (152 pits, 20–63 L/s tanker rate) | 🟩 |
| PCN | Runway PCN 72–78/F/A/W/T; apron/taxiway ratings up to Code F (Apron 7) | 🟩 |
| Customs | H24 `[GACA eAIP AD 2.3]` | 🟩 |
| Handling / FBO | Not confirmed for our operation; ARABASCO and APSCO named in tier-3 aggregated sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16C | 4,000 × 60 m | Asphalt / PCN 72/F/A/W/T | 4,000 m | 4,000 m | 4,000 m | 4,000 m | |
| 34C | 4,000 × 60 m | Asphalt / PCN 72/F/A/W/T | 4,000 m | 4,000 m | 4,000 m | 4,000 m | |
| 16L | 4,000 × 60 m | Asphalt / PCN 78/F/A/W/T | 4,000 m | 4,000 m | 4,000 m | 4,000 m | |
| 34R | 4,000 × 60 m | Asphalt / PCN 78/F/A/W/T | 4,000 m | 4,000 m | 4,000 m | 4,000 m | |
| 16R | 3,800 × 60 m | Asphalt / PCN 77/F/A/W/T | 3,800 m | 3,800 m | 3,800 m | 3,800 m | |
| 34L | 3,800 × 60 m | Asphalt / PCN 77/F/A/W/T | 3,800 m | 3,800 m | 3,800 m | 3,800 m | |

*Source: GACA/SANS eAIP AD 2.12/2.13 (AIRAC AMDT 05/24, eff. 2024-08-22 — retrieved 2026-07-26). No displaced thresholds found. All distances in metres. Airfield-wide lighting/power built to CAT II standard per AD 2.9/2.15, though ILS is CAT I only (§9).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Jeddah Information | 126.200 (Arrival) / 128.700 (Departure) | H24 | |
| Delivery | Jeddah Ground Control | 121.800 | H24 | Clearance delivery |
| Ground | Jeddah Ground Control | 121.600 (West) / 121.700 (East) / 121.900 (Centre) | H24 | |
| Tower | Jeddah Tower | 118.200 (West) / 118.500 (East) | H24 | + 124.300 standby |
| Approach | Jeddah Control | 119.100 (CTA-East) / 125.450 (CTA-West) | H24 | |
| Final | Jeddah Final | 123.800 (primary) / 124.000 (APP) | H24 | DOC 60 NM/20,000 ft |
| Centre / FIR | Jeddah FIR (OEJD) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) — Jeddah is the largest FIR in the MID region |

*Source: GACA/SANS eAIP AD 2.18 (retrieved 2026-07-26); cross-checked against OurAirports and SkyVector. Treat exact current-cycle frequencies as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/DME 16C | IJDC | 109.700 | H24 | CAT I |
| ILS/DME 34C | IJDW | 109.500 | H24 | CAT I |
| ILS/DME 16L | IDFJ | 108.500 | H24 | CAT I |
| ILS/DME 34R | IEAL | 108.300 | H24 | CAT I |
| ILS/DME 16R | IJDD | 109.300 | H24 | CAT I; unusable inside THR |
| ILS/DME 34L | IJDL | 109.100 | H24 | CAT I |
| DVOR/TACAN | JDW | 115.300 (CH100X) | H24 | "King Abdulaziz Jeddah" — reference radial for the whole TMA |

*All six ILS installations are explicitly CAT I per the current AIP text — no CAT II/III capability published, despite the airfield lighting/power standard being built to CAT II. Source: GACA/SANS eAIP AD 2.19 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft `[GACA eAIP AD 2.17]`; TL by QNH — verify current chart.
- **Speed:** 250 KIAS below FL100 (Class A CTA/TMA norm above; Class D CTR) — confirm current chart.
- **Preferential runway logic:** Not published — confirm with Jeddah Control on the day.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 16C | ILS or LOC, RNP, VOR | CAT I |
| 34C | ILS or LOC, RNP, VOR | CAT I |
| 16L | ILS or LOC, RNP, VOR | CAT I |
| 34R | ILS or LOC, RNP, VOR | CAT I |
| 16R | ILS or LOC, RNP, VOR | CAT I; LOC unusable inside THR |
| 34L | ILS or LOC, RNP, VOR | CAT I |

- **STARs (names only):** Four RNAV STAR base names (**VEMEM, MISAM, MUVOL, NOMDA**), each with runway-specific suffixed variants across all six ends. `[GACA eAIP AD 2.22.2.3]`
- **LVP:** Not applicable — no CAT II/III capability published; standard CAT I minima apply.
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); named missed-approach holds include **RADKI, IMDAP, ULULU, ALVON, ALTUN** tied to specific runway ends — verify current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV SIDs published for all six runway ends (GNSS-based, RNAV 1); ATC may radar-vector after departure if no SID assigned. `[GACA eAIP AD 2.22.2.6]`
- **RNP / climb-gradient requirements:** No special climb-gradient requirement identified — flat coastal field. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not individually confirmed for our operation. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified in reachable sources; Hajj-season demand surge may drive informal flow management — not documented in AIP text. 🟧
- **De-icing:** **NIL** — not provided, consistent with the climate. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) (non-applicable here).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Overflight of Jeddah city below 5,000 ft AGL is prohibited except for departure/arrival under ATC instruction.
- **Night noise / dB limits:** Not published; no curfew or noise-charge regime identified.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** **Apron 7** is rated up to **ICAO Code F** (A380/747-8-capable), splittable into Code-C double stands; standard aprons (1–6) carry Code E as the common ceiling. `[GACA eAIP AD 2.8/2.20]` | 🟩
- **Push-back:** Not individually confirmed for our operation. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** None specifically flagged in the reachable AIP extract beyond the general parallel-ILS-selection caution (§3.2).
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot desert/coastal climate, Red Sea humidity.
- **Seasonal hazards:** **Flash flooding from intense convective rain** — a documented, serious hazard (25 Nov 2009: ~70 mm in ~4 hours, ~100+ regional deaths, >10,000 homes damaged; late Jan 2011: ~110 mm in 3 hours, ≥10 deaths; Nov 2022: further severe flooding) — typically autumn/winter. **Extreme summer heat** confirmed by the AIP's own 37.9°C reference temperature. **Dust/sandstorms** occur along the Red Sea coastal corridor. Fog is not documented as a factor.
- **Local effects:** Coastal humidity; drainage-dependent ramp/taxiway flooding risk during intense rain events — GACA's own expansion programme added a dedicated storm-water drainage network in response.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET (convective, dust). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, ramp-flooding closures in season, current Middle East conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block. See also the [Middle East airspace brief](../../../../airspace/middle-east.md) §9 for the region's live conflict-zone picture.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — not a K Global base; a high-demand Hajj/Umrah-linked destination.
- **Nearest suitable alternates:** Company preferred alternates [**OERK**](../oerk/index.md) (Riyadh, sibling field), **OBBI** (Bahrain) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** JP1/JP4, H24, extensive hydrant system; specific into-plane provider not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific limiting factor identified at OEJN — runway length, RFF category and navaid infrastructure are non-limiting for any K Global type. Hajj/Umrah-season schedule-density planning (§3.5) is a network/commercial consideration rather than a type-performance one; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Hajj-season special ATC/parking/slot procedures** — not documented in the retrieved AIP extract; likely covered by seasonal AIC/NOTAM supplements not opened this pass.
- **Take-off minima, engine run-up, reverse-thrust policy** — not confirmed in reachable sources.
- **Ground handling agent for our operation** — not confirmed; ARABASCO/APSCO are tier-3 sourced only.
- **Terminal/gate assignment for our operation** — not confirmed.
- **AIP currency** — the retrieved cycle is described by the host site as an archived amendment; verify against current AIRAC before operational use, though physical infrastructure figures are unlikely to have changed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **GACA/SANS eAIP, AD 2 OEJN Jeddah/King Abdulaziz International**, AIRAC AMDT 05/24 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2005_24_2024_08_22/eAIP/AD%202%20OEJN%20JEDDAH%20-%20KING%20ABDULAZIZ%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26). **Host site marks this an archived amendment — verify against current AIRAC before operational use.**
- OurAirports — https://ourairports.com/airports/OEJN/ and /frequencies.html (retrieved 2026-07-26). *Cross-check.*
- SkyVector — https://skyvector.com/airport/OEJN/King-Abdulaziz-International-Airport (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "King Abdulaziz International Airport" — https://en.wikipedia.org/wiki/King_Abdulaziz_International_Airport (retrieved 2026-07-26). *Hajj Terminal, terminal history, flood-event corroboration.*
- weather.com — flood retrospective (25 Nov 2009 event) — retrieved 2026-07-26 via aggregated search. *Flash-flood hazard corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
