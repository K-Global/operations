# EFHK — Helsinki-Vantaa · Airport Briefing

**EFHK / HEL** · Vantaa, Uusimaa, Finland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Fintraffic ANS AIP-derived, K Global build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Fintraffic ANS AIP Finland (AD 2 EFHK, AIRAC cycle 003-2023 retrieved — newer cycles exist and should be spot-checked); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N60°19′02″ / E024°57′48″ (60.3172, 24.9633) `[AIP Finland AD 2 EFHK 2.2]` |
| Field elevation | **180 ft / 55 m AMSL** (reference temperature 23°C) |
| Mag variation | **9.3° E (epoch Jan 2020), annual change +0.2°** `[AIP Finland AD 2 EFHK 2.2]` — current-day value not independently re-confirmed against the latest AIRAC 🟧 |
| Time zone | **UTC+2 (EET) / UTC+3 (EEST, DST)** — differs from Norway/Sweden (CET/CEST) |
| Runway(s) | **04L/22R** 3,060 × 60 m (asphalt, PCN 100) · **04R/22L** 3,500 × 60 m (asphalt, PCN 102) · **15/33** 2,901 × 60 m (asphalt, PCN 108) |
| Preferential runway | Primary landing **RWY 15** (from NW) or **22L** (from NE); primary takeoff **RWY 22R** (toward SW); shifts to **04L/04R** in northerly/easterly wind — see §3.2 |
| Longest LDA | 3,500 m (04R), displaced to 3,200 m LDA; 22L LDA 3,500 m |
| Approaches | **ILS CAT III on 04L and 22R**; **ILS CAT II on 22L**; **ILS CAT I on 04R and 15**; **RWY 33 has approach lighting only, no ILS** — brief the correct category per runway end 🟧 |
| RFF category | **CAT 9** 🟩 |
| Control type | **Radar** — Helsinki Radar/Arrival; EFHK CTR North/South (Class D, TMZ H24); FIR/ACC Finland (EFIN) — no dedicated FIR brief in-library, see [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (180 ft) — **not** hot-and-high; the performance/reliability driver here is **long, harsh Nordic winters with heavy snow/ice**, the most severe of the three Nordic capitals in this pack |
| Special-airport status | 🟧 **Fully slot-coordinated** (Regulation (EC) 793/2004-equivalent); PPR for non-based aircraft; asymmetric CAT III/CAT II/CAT I/no-ILS pattern across the three runways — see §5 |
| Customs / PoE | **Yes** — single consolidated terminal (T1/T2 merged 2022), internally split Schengen (gates 5–36) / non-Schengen (gates 37–55) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **ESSA, EETN, EYVI** (cross-country — plain ICAO reference, no link) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat, low-lying, forested/lake terrain in Uusimaa; no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | 3,500 m (04R) and 3,060 m (04L/22R) are ample for any K Global widebody; 2,901 m (15/33) is non-limiting for typical operations. |
| Approach availability / minima | 🟧 | Asymmetric CAT III (04L/22R) vs CAT II (22L) vs CAT I (04R/15) vs no-ILS (33) pattern — brief the correct category per assigned runway. |
| Airspace / traffic / control | 🟩 | Independent parallel operations on 04L/22R and 04R/22L confirmed since Nov 2007; ~20 runway-combination options reported — a well-instrumented, radar-controlled hub. |
| Weather / seasonal hazard | 🟥 | **Long, severe Nordic winter** — the harshest of the three fields in this pack; a documented icing-related fatal cargo-flight crash (2005) underscores contamination/wing-icing risk. |
| Curfew / slots / hours | 🟧 | Fully slot-coordinated regime; noise-driven night runway-preference restrictions apply (RWY 33 landing / RWY 15 SE-departure avoided at night for jets; prop SE departures banned at night). |
| RFF category vs our types | 🟩 | CAT 9 — above any of our fleet's typical requirement. |
| Fuel availability | 🟩 | Jet A-1 confirmed H24; specific supplier brand not confirmed. |
| Customs / handling / security | 🟩 | Single consolidated terminal since 2022, H24 customs/immigration; Schengen/non-Schengen split by gate range within the same building. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EFHK sits at 180 ft AMSL in flat, low-lying Uusimaa terrain — forested and lake-dotted but with **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟩
Helsinki-Vantaa runs a genuinely three-dimensional runway system: **04L/22R and 04R/22L are true parallel pairs capable of independent simultaneous operations (confirmed since November 2007)**, with **15/33 as a third, differently-oriented strip** giving roughly **twenty distinct runway-combination options** depending on wind and traffic. Typical logic: **RWY 15 (from the northwest) or RWY 22L (from the northeast)** are the primary landing runways with **RWY 22R (toward the southwest)** the primary takeoff runway; the configuration flips to **04L/04R** when wind is from the north/east. A **dependent-parallel-approach mode** also exists (per AIP AD 2 remarks, ATIS reports RWY 15 touchdown-zone wind instead of runway-specific wind during this mode) — confirm the active mode from ATIS/ATC. Cross-ref [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 (no Finland-specific FIR brief in-library).

### 3.3 Runway excursion 🟧
**RWY 22R and 04R both carry displaced thresholds** (22R: LDA 3,000 m vs 3,060 m TORA; 04R: LDA 3,200 m vs 3,500 m TORA) — confirm the correct LDA is used for landing performance, not the full runway length. Extensive **reduced-declared-distance intersection take-off data** exists in the AIP for numerous taxiway entry points — verify the specific intersection figure if an intersection departure is used. Winter contamination (snow/ice) is the dominant seasonal excursion driver at this field, consistent with its severe-winter climate (§14).

### 3.4 Weather threat 🟥
Finland's climate gives EFHK the **longest and most severe winter of the three Nordic capitals in this pack** — heavy, persistent snow and ice are a routine seasonal condition rather than an occasional event. A documented, field-relevant cold-weather accident: **31 January 2005**, a Cessna 208B cargo aircraft crashed shortly after takeoff between the first and third runways, attributed to **wing-surface ice/snow contamination causing a stall** — a concrete, sourced precedent for rigorous pre-departure de-icing/wing-inspection discipline at this field. See §14 and [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

### 3.5 Operational considerations 🟧
Plan around: (1) the **asymmetric ILS-category pattern** across the three runways (CAT III on 04L/22R, CAT II on 22L, CAT I on 04R/15, no ILS on 33) — confirm the assigned runway's actual capability before relying on autoland; (2) **noise-driven night runway restrictions** — jet landings on RWY 33 and jet takeoffs on RWY 15 (both toward the SE, over populated areas) are avoided at night, and propeller takeoffs to the SE are banned at night outright; and (3) the field's **two-tier de-icing system** — main gate-position de-icing plus a separate remote de-icing apron (Aprons 6/8) reached via a dedicated supervisor frequency, integrated into Airport CDM.

---

## 4. Cautions & Warnings

- **CAT III is not available on every runway end** — only 04L and 22R carry CAT III; 22L is CAT II; 04R and 15 are CAT I; **RWY 33 has no ILS at all** — never assume autoland capability without checking the assigned runway end.
- **Displaced thresholds on 22R (LDA 3,000 m) and 04R (LDA 3,200 m)** — use the correct LDA figure, not the full runway length, for landing performance.
- **Night noise routing restrictions**: jet landings on RWY 33 and jet takeoffs on RWY 15 (both toward the SE) are avoided at night; propeller takeoffs to the SE are prohibited at night outright unless safety dictates otherwise.
- **Winter icing is a real, documented hazard at this field** — the 2005 Cessna 208B stall-crash (wing ice/snow contamination shortly after takeoff) is a direct precedent; treat pre-departure wing inspection and de-icing holdover discipline with full seriousness in this climate.
- **De-icing is a two-tier system** (gate-position vs remote Apron 6/8) integrated into Airport CDM — confirm which applies to the assigned stand/runway before requesting de-icing.
- **Follow-me car is mandatory for all A380 movements** — a ground-ops note relevant if operating alongside such traffic.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing crew-briefing items are the **asymmetric ILS-category pattern** and the **severe-winter/icing environment**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability winter low-vis ops into 04L/22R (CAT III) and 22L (CAT II); 04R/15 do not support better than CAT I, and 33 has no ILS at all — confirm crew/aircraft currency and plan the approach ban accordingly. 🟧
- **Operating restrictions / bans:** Night noise-driven runway restrictions apply (§3.5/§4); PPR required for non-based aircraft; no RNP AR ban or circling restriction found — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **Fintraffic ANS** (Air Navigation Services Finland). Airport operator — **Finavia**. Slot coordinator — **Helsinki-Vantaa Slot Coordination Association ry**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24; airport/ATS/customs/immigration/MET/de-icing all H24 per AIP | 🟩 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | No blanket curfew; **noise-driven runway-preference restrictions at night** (RWY 33 landing / RWY 15 SE-departure avoided for jets; prop SE departures banned) | 🟧 |
| RFF category | **CAT 9** | 🟩 |
| Fuel | **Jet A-1**, H24; specific supplier brand not confirmed | 🟧 |
| PCN | Runway-specific — see §7 | 🟩 |
| Customs | H24; single consolidated terminal (since 21 Jun 2022), Schengen gates 5–36 / non-Schengen gates 37–55 | 🟩 |
| Handling / FBO | **Airpro, Aviator, Swissport** provide ground handling generally; specific handler for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04L | 3,060 × 60 m | Asphalt / PCN 100/F/A/W/T | 3,060 m | 3,060 m | 3,060 m | 3,060 m | CAT III |
| 22R | 3,060 × 60 m | Asphalt / PCN 100/F/A/W/T | 3,060 m | 3,060 m | 3,060 m | **3,000 m** | CAT III; **displaced threshold** |
| 04R | 3,500 × 60 m | Asphalt / PCN 102/F/B/W/T | 3,500 m | 3,560 m | 3,500 m | **3,200 m** | CAT I; **displaced threshold** |
| 22L | 3,500 × 60 m | Asphalt / PCN 102/F/B/W/T | 3,500 m | 3,590 m | 3,500 m | 3,500 m | CAT II |
| 15 | 2,901 × 60 m | Asphalt / PCN 108/F/B/W/T | 2,901 m | 2,901 m | 2,901 m | 2,901 m | CAT I |
| 33 | 2,901 × 60 m | Asphalt / PCN 108/F/B/W/T | 2,901 m | 2,901 m | 2,901 m | 2,901 m | No ILS — approach lighting (PAPI 3.5°) only |

*Source: AIP Finland AD 2 EFHK 2.12/2.13, AIRAC cycle 003-2023 (eff. 2023-06-15). Extensive reduced-declared-distances exist for numerous intersection take-off points — see AIP AD 2.13 for exact figures. Newer cycles exist (002-2025, 005-2024) — spot-check before treating as current-AIRAC-final. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Arrival 135.075 / Departure 114.200 | — | H24 (D-ATIS) | Departure ATIS co-located on the Helsinki VOR frequency |
| Ground | Helsinki Ground | 121.800 / 118.125 | H24 | |
| Tower | Helsinki Tower | 118.600 / 118.850 / 119.700 (backup) / 121.500 (emergency) | H24 | |
| Approach / Radar | Helsinki Arrival 119.900 / 124.325 · Helsinki Radar 119.100 / 129.850 | H24 | Sector-specific — take the assigned frequency |
| Centre / FIR | Finland ACC (EFIN) | Per current AIRAC | H24 | See [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 — exact FIR/ACC designator and controlling-centre name not independently confirmed this pass |
| Apron | Helsinki Apron | 121.650 | H24 | Apron mgmt/marshalling/business terminal |
| De-icing supervisor (gate) | Helsinki De-icing Supervisor | 127.025 | HO | |
| De-icing supervisor (remote) | Remote De-icing Supervisor | 133.850 | HO | Aprons 6/8, outside the normal ATC manoeuvring area |

*Source: AIP Finland AD 2 EFHK 2.18, AIRAC cycle 003-2023. Cross-check against the current cycle before treating as final.*

---

## 9. Navaids

| Aid | Ident | Freq / CH | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | HEL | 114.200 (CH89X) | H24 | Co-located with departure ATIS |
| ILS 04R | HG | LOC 111.500 / GP 332.900 (CH52X) | H24 | **CAT I**; GP 3.0° |
| ILS 22L | HK | LOC 110.300 / GP 335.000 (CH40X) | H24 | **CAT II**; service volume 18 NM |
| ILS 15 | HL | LOC 109.100 / GP 331.400 (CH28X) | H24 | **CAT I** |
| ILS 04L | HTV | LOC 111.900 / GP 331.100 (CH56X) | H24 | **CAT III** |
| ILS 22R | HUO | LOC 110.700 / GP 330.200 (CH44X) | H24 | **CAT III** |
| RWY 33 | — | No ILS — PAPI 3.5° only | — | Non-precision only |

*Source: AIP Finland AD 2 EFHK 2.19, AIRAC cycle 003-2023 (eff. 2023-06-15) — treat as needing a cross-check against the currently effective cycle before treating as audit-grade.*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft AMSL (EFHK CTR North/South); TL by QNH, no fixed published value found — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Primary landing **RWY 15** (NW arrivals) or **RWY 22L** (NE arrivals); shifts to **04L/04R** with northerly/easterly wind. A dependent-parallel-approach mode exists (ATIS then reports RWY 15 TDZ wind) — confirm active mode.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 04L | ILS CAT III (HTV) | |
| 22R | ILS CAT III (HUO) | Displaced threshold — LDA 3,000 m |
| 04R | ILS CAT I (HG) | Displaced threshold — LDA 3,200 m |
| 22L | ILS CAT II (HK) | |
| 15 | ILS CAT I (HL) | Primary landing runway (NW arrivals) |
| 33 | Non-precision (PAPI 3.5° only) | No ILS; avoided as a jet landing runway at night |

- **STARs (names only):** Not confirmed in reachable public sources — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III on 04L/22R is the standing mitigation for winter low-vis conditions; 22L is CAT II only, 04R/15 CAT I only, 33 has no ILS — plan accordingly. Exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat, low-lying); the operative concern is re-sequencing within the multi-runway-combination environment and correct-runway/CAT-category awareness.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable public sources — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** APU use restricted to unavoidable situations (ground power preferred at stand); push-back/taxi coordinated via Ground; Mode-S transponder activation procedures apply from push-back through parking.
- **ATC slot / CTOT & clearance:** **Fully slot-coordinated** (Regulation (EC) 793/2004-equivalent regime); PPR for non-based aircraft; requests via the Helsinki-Vantaa Slot Coordination Association ry.
- **De-icing:** **Two-tier system** — main gate-position de-icing via **Helsinki De-icing Supervisor (127.025)**, or the **Remote De-icing Apron (Aprons 6/8)** via **Remote De-icing Supervisor (133.850)**, reached outside the normal ATC manoeuvring area; de-icing request window 0330–2330 UTC, requested 20 min prior to TOBT; integrated into Airport CDM (TOBT for de-icing flights = ready-time to *begin* de-icing). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No named NADP confirmed in reachable sources. 🟧 The dominant documented noise constraint is the **night runway-preference restriction**: jet landings on RWY 33 and jet takeoffs on RWY 15 (both toward the SE, over populated areas) are avoided at night; low-noise aircraft may use RWY 22L southbound concurrently with RWY 22R departures during the day.
- **Night noise / dB limits:** No explicit dB limit found; the restriction operates through runway-preference logic rather than a published per-movement charge. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧
- **Propeller take-offs toward the SE are prohibited at night** unless safety dictates otherwise — a specific, sourced operating restriction.

---

## 13. Ground operations

- **Stands for our types:** Single consolidated terminal (Terminals 1 and 2 merged 21 Jun 2022) — internally split **Schengen (gates 5–36)** and **non-Schengen/long-haul (gates 37–55)**. Widebody capability: non-Schengen area accommodates **8 widebody aircraft simultaneously**; **Gate 48 (West Pier, opened Nov 2019) can accommodate the A380**; West Pier has 9 widebody gates; South Pier (2017) has dual-boarding jet bridges at gates 52–55 (5 gates can dual-park two narrowbodies). | 🟩 |
- **Push-back:** Coordinated via Ground; APU use restricted to unavoidable situations, ground power preferred.
- **Standard taxi routes:** Confirm with Ground/Apron on the day; aircraft landing RWY 22L must **not** vacate via taxiway ZG unless specifically instructed by ATC.
- **Hot spots / tight taxiways:** Formally charted hot spots are on the graphical Aerodrome Chart (not captured in this text-based extract) — not confirmed by ID this pass. 🟧 Notable procedural points: stop bars on every taxiway leading to a runway, with additional closer stop bars on TWY ZD, ZG and Y at the CAT II/III holding position.
- **Follow-me:** **Mandatory for all A380 movements**; general availability for other types not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Long, severe Nordic winter — the harshest of the three Nordic-capital fields in this pack; heavy, persistent snow/ice cover is routine rather than occasional.
- **Seasonal hazards:** **Winter snow/ice contamination** is the field's defining hazard, with a documented fatal precedent (31 Jan 2005, Cessna 208B wing-ice/snow-contamination stall crash shortly after takeoff). Historical fog/thunderstorm-related accidents are also on record (1957 fog overrun; 1963 thunderstorm-related landing accidents). A large dedicated winter-maintenance fleet (~200 vehicles, including purpose-built Vammas PSB 5500 plough-sweeper-blowers and 1,200–1,500 hp snow blowers) targets clearing a full runway in as little as 13 minutes.
- **Local effects:** No notable terrain/sea-breeze effects at this inland, flat, lake-and-forest-dotted field; winter snow/ice is the standout local effect, with a crosswind runway (15/33) provided specifically for wind off the primary NE-SW axis.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT II/III equipment status per runway end, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current de-icing status (gate vs remote apron). Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** (not a K Global base). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **ESSA** (Stockholm Arlanda), **EETN** (Tallinn), **EYVI** (Vilnius) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** **Jet A-1** confirmed H24; specific into-plane supplier/brand not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting on the main runway (3,500 m, RWY 04R/22L) for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No type-specific performance penalty identified at this field's elevation/length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning consideration at EFHK is the asymmetric ILS-category pattern and this field's severe-winter/icing environment (the harshest of the three fields in this pack) rather than aircraft performance — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to epoch 2020; current-day value not independently re-confirmed against the latest AIRAC.
- **Exact FIR/ACC designation and controlling-centre name for Finland** (commonly referenced elsewhere as EFIN/Tampere-based "Finland Control") — not independently confirmed this pass.
- **Fixed transition level value** (if published) — likely QNH-calculated per standard European practice; not confirmed as a fixed AIP figure.
- **Named SIDs/STARs** — not obtained this pass; these are on graphical AD 2.24 charts not captured in the text extract fetched.
- **Formally charted taxiway hot spots (by ID)** — on the graphical Aerodrome Chart, not the text AIP.
- **Fuel supplier/brand** — fuel type (Jet A-1) confirmed, brand not confirmed.
- **NADP classification and any published noise-charge tariff** — not confirmed.
- **AIRAC currency** — data drawn from cycle 003-2023 (eff. 2023-06-15); newer cycles (002-2025, 005-2024) exist and should be spot-checked for changes before treating this brief as current-AIRAC-final.
- **Ground handling agent(s) for our specific operation** — Airpro/Aviator/Swissport confirmed as field-general handlers, not operation-specific.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Fintraffic ANS — AIP Finland, AD 2 EFHK**, AIRAC cycle 003-2023 (eff. 2023-06-15) — https://www.ais.fi/eaip/003-2023_2023_06_15/eAIP/EF-AD%202%20EFHK%20-%20HELSINKI-VANTAA%201-en-GB.html (retrieved 2026-07-26). *ARP/elevation/runway geometry/declared distances, ILS idents/categories/frequencies, ATC frequencies, RFF category, de-icing procedure detail, ground-ops remarks, slot regime.* **Newer AIRAC cycles (002-2025, 005-2024) exist at ais.fi — spot-check before treating figures as current-cycle-final.**
- OurAirports — https://ourairports.com/airports/EFHK/ , /runways.html (retrieved 2026-07-26). *Elevation/runway cross-check (minor 1 ft elevation and displaced-threshold-distance discrepancy noted — AIP treated as authoritative).*
- Wikipedia — "Helsinki Airport" — https://en.wikipedia.org/wiki/Helsinki_Airport (retrieved 2026-07-26). *Runway configuration logic, terminal consolidation (2022), ground handlers, cargo facility, history, 2005 icing accident, independent-parallel-ops date (Nov 2007).*
- Finavia newsroom — "Finavia introduces its winter maintenance beasts at Helsinki Airport" — https://www.finavia.fi/en/newsroom/2022/finavia-introduces-its-winter-maintenance-beasts-helsinki-airport (retrieved 2026-07-26). *Winter maintenance fleet detail.*
- Finavia newsroom — "Finavia to start using recycled de-icing fluid at Helsinki Airport" — https://www.finavia.fi/en/newsroom/2023/finavia-start-using-recycled-de-icing-fluid-helsinki-airport (retrieved 2026-07-26). *De-icing fluid/sustainability detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from Fintraffic ANS AIP Finland (cycle 003-2023); K Global fields from live VAMSYS; 4-page pack. |
