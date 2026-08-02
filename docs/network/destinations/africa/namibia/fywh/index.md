# FYWH — Hosea Kutako International · Airport Briefing

**FYWH / WDH** · Windhoek, Namibia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build, primary AIP not independently reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from OurAirports/SkyBrary/AC-U-KWIK public cross-check sources plus the VAMSYS mirror; the **Namibia Civil Aviation Authority (NCAA)** AIP/AIS system was reachable only as a general publications index and a login-gated Internet Briefing System (registered Namibian pilots / NA residential address only) — no AD 2 FYWH page could be pulled this pass. Approaches/SIDs/STARs are listed **by name/type only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | -22.48111, 17.47028 `[Navigraph navdata, seeded]` — 🟧 OurAirports gives -22.47990, 17.47090 and AC-U-KWIK gives S22-28.8/E017-28.3 (≈0.1 NM spread) — immaterial for planning, not AIP-verified |
| Field elevation | **5,640 ft / 1,719 m AMSL** `[OurAirports; SKYbrary 5,640 ft; AC-U-KWIK 5,641 ft — mutually corroborated]` — **HIGH-ELEVATION, hot-and-high** |
| Mag variation | 12° W `[AC-U-KWIK]` — 🟧 not cross-checked against a primary AIP source |
| Time zone | UTC+2 (CAT/WAST, no DST) `[AC-U-KWIK]` |
| Runway(s) | **08/26, 4,575 × 45 m asphalt, lighted** (primary) `[OurAirports; SKYbrary; AC-U-KWIK ≈4,570 m]`. A second, much shorter/narrower **16/34, 1,524 × 30 m asphalt** also exists per the same tier-4 sources 🟧 — not independently confirmed against a primary AIP and not usable for our fleet types (see §7/§13) |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not published / verify 🟧 (08/26 physical length 4,575 m) |
| Approaches | **ILS, RNAV(GNSS)/GPS, VOR** published as approach *types* `[AC-U-KWIK]` — exact procedure names and runway assignment not confirmed; pull current-AIRAC chart names at planning 🟧 |
| RFF category | **CAT 9** `[AC-U-KWIK; Wikipedia — "a Category 9 airport"]` |
| Control type | Not confirmed — a Windhoek Approach frequency exists (120.5 MHz, §8) implying at least a procedural approach service; radar coverage not confirmed in reachable sources 🟧 |
| Elevation class | **Hot-and-high (5,640 ft)** — the field's single most important operational characteristic; higher than HKJK (5,330 ft) and above several of the illustrative fields in [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — density-altitude performance driver, see §3.5/§9/§16/§17 🟥 |
| Special-airport status | Not operator-categorised in reachable sources 🟧 |
| Customs / PoE | **Yes — international gateway**; desk hours not independently confirmed beyond AD hours (§6) 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` — 🟧 raw VAMSYS code; the H/L/M/S/R category scheme is **not yet defined project-wide** (see the company Knowledge base item B-008) — do not infer a meaning ("Restricted" etc.) beyond the raw letter |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **FAOR** (O.R. Tambo Intl, Johannesburg, South Africa), **FBSK** (Sir Seretse Khama Intl, Gaborone, Botswana), **FDSK** (Sikhuphe Intl, Eswatini) `[VAMSYS mirror 2026-07-26]` — all cross-country from Namibia |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Windhoek sits on the **Khomas Hochland** (central Namibian highland plateau); undulating hill terrain surrounds the field. No close-in obstacle/peak bearing-distance data found in reachable sources for FYWH specifically — verify the MSA ring on the current chart. |
| Runway length vs fleet perf | 🟧 | 4,575 m (08/26) is ample at sea-level-equivalent conditions, but the field's **hot-and-high** regime (§3.5) erodes the true margin; declared distances/PCN are unpublished this pass. |
| Approach availability / minima | 🟧 | ILS/RNAV(GNSS)/VOR *types* confirmed via AC-U-KWIK; exact procedure names, runway assignment and minima not confirmed — pull current-AIRAC. |
| Airspace / traffic / control | 🟧 | **Windhoek FIR (FYWF)** — see [Africa Airspace brief](../../../../airspace/africa.md). Windhoek Approach published (120.5 MHz); radar vs procedural control not confirmed. |
| Weather / seasonal hazard | 🟧 | Hot, semi-arid/steppe climate (Köppen **BSh**); austral-summer (≈Nov–Apr) afternoon convective activity typical of the southern-African interior; density altitude peaks in hot late-dry-season afternoons. See §14. |
| Curfew / slots / hours | 🟧 | AD hours **0400–2000Z** with out-of-hours (O/T) by 48 h PNR + fee `[AC-U-KWIK]`; Control Tower **H24** `[AC-U-KWIK]`; NCAA AIS office hours separately reported as **0300–1900Z** `[NCAA IBS]` — the two figures describe different services (AIS/flight-plan office vs AD/tower) and are not necessarily in conflict, but neither is cross-checked against the primary AD 2 page. No formal slot-coordination regime found ("Slots Required: No" per AC-U-KWIK). |
| RFF category vs our types | 🟩 | **CAT 9** — meets/exceeds our fleet's requirement. |
| Fuel availability | 🟧 | AVGAS + Jet fuel available per AC-U-KWIK; supplier, grade certification and hours not confirmed. |
| Customs / handling / security | 🟩 | International PoE confirmed; ground handling **mandatory** `[AC-U-KWIK]` — on-field handling/FBO agents identified (§6/§13). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
Windhoek sits at **5,640 ft** on the **Khomas Hochland** — the central Namibian highland plateau — with undulating hill terrain surrounding the city and field (regional relief in the Khomas Region reaches roughly 2,000–2,480 m at its highest points, well away from the immediate airport environment). This is general public-reference geography, **not independently confirmed against a primary AIP/MSA chart for FYWH specifically** — no close-in obstacle bearing/distance table was found in reachable sources this pass. Verify the MSA sectors and terrain/obstacle data on the current-AIRAC chart before relying on this description; treat this domain as a verification gap rather than a known CFIT hot spot.

### 3.2 Airborne conflict / traffic 🟧
FYWH sits within **Windhoek FIR (FYWF)** — see the [Africa Airspace brief](../../../../airspace/africa.md) §3, which lists Windhoek among the national FIRs of the ESAF picture. A **Windhoek Approach** frequency is published (120.5 MHz, §8); whether this is a radar or procedural approach service is not confirmed in reachable sources. As Namibia's primary international gateway, traffic density is modest relative to the continent's major hubs (cf. HKJK, FAOR) — no published traffic-flow or sequencing constraint was found this pass.

### 3.3 Runway excursion 🟧
The primary runway **08/26 (4,575 × 45 m asphalt, lighted)** has no published declared-distance split (TORA/TODA/ASDA/LDA) or PCN in reachable sources — verify against the primary AIP before treating the physical length as a performance-limited answer. A **secondary, much shorter and narrower runway 16/34 (1,524 × 30 m asphalt)** also exists per tier-4 sources — this is not usable for our fleet types and should not be confused with the primary runway when reviewing charts (§7/§13). The field's high density altitude raises true groundspeed at touchdown, which lengthens the effective landing roll and raises brake/tyre energy for a given IAS — see §3.5 and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §5.

### 3.4 Weather threat 🟧
Windhoek has a **hot, semi-arid/steppe climate (Köppen BSh)** `[SKYbrary]`. The austral-summer rainy season (roughly **November–April**) brings afternoon convective thunderstorm activity typical of the southern-African interior plateau; the dry season (roughly May–October) is generally clear, but diurnal heating on the high plateau drives density altitude to its worst in the hot late-dry-season afternoons (approximately September–October, ahead of the rains). No FYWH-specific fog/visibility statistic was found this pass. See §14.

### 3.5 Operational considerations 🟥
**The field's single most important operational characteristic is its high elevation (5,640 ft) combined with a hot, semi-arid climate** — a textbook density-altitude / hot-and-high performance regime as defined in [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md). FYWH sits **higher than HKJK (5,330 ft)** and comfortably inside that OM E doc's illustrative network-example band (cf. KDEN ~5,434 ft, SKBO ~8,358 ft). Treat every departure — especially a warm-afternoon departure — as potentially **thrust/climb-gradient-limited, not merely runway-length-limited**: confirm SID minimum-climb-gradient compliance and engine-out (OEI) escape routing for the actual OAT/weight on the day before dispatch. This consideration recurs through §9 (arrival energy/climb), §11/§16 (departure/dispatch performance) and §17 (fleet notes) of this pack and is not a one-off caution.

---

## 4. Cautions & Warnings

- **High-elevation, hot-and-high field (5,640 ft)** — density-altitude take-off/climb-gradient performance is the standing threat here; see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and §3.5/§9/§16/§17.
- A **second, much shorter/narrower runway (16/34, 1,524 × 30 m)** exists alongside the primary 08/26 — not usable for our fleet; confirm you are briefed against the correct runway on the current chart.
- **Declared distances (TORA/TODA/ASDA/LDA) and PCN are not published in reachable public sources this pass** — verify against the primary NCAA AIP before a performance-limited case.
- **Company preferred alternates (FAOR/FBSK/FDSK) are all cross-country diversions** from Namibia — factor the extra fuel/time into planning (§16); none is a short-hop alternate.
- **ATIS frequency captured from a tier-4 aggregator (114.1 MHz)** sits in the VOR/navaid band rather than the typical VHF ATIS range — treat as a possible transcription artefact pending primary confirmation (§8).
- A single **2009 crowd-sourced comment** (not a chart) suggests an ILS on RWY 26 at 110.30/258° — **unverified, aged, single-source** — do not brief this as fact (§9).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; **K Global VAMSYS carries a raw category code "R"** whose scheme meaning is not yet defined project-wide (§1) — do not treat this as an operational restriction until the scheme is defined (the company Knowledge base B-008). 🟧
- **Crew-qualification gate:** No published special-crew-qualification requirement found in reachable sources; the standing briefing item is the **hot-and-high performance regime** (§3.5) — confirm any operator high-elevation-aerodrome training/briefing requirement applies here. 🟧
- **Operating restrictions / bans:** None found beyond the **out-of-hours (O/T) regime** — operations outside 0400–2000Z require 48 h PNR and attract a fee `[AC-U-KWIK]` — verify against current AIRAC/AIP. 🟧
- **Overflight / entry / permits:** Namibia overflight/landing permit and pax visa/entry requirements are **not independently confirmed this pass** — confirm the current requirement per nationality/operator before every operation. 🟧
- **Operations notes:** Regulator/ANSP — **Namibia Civil Aviation Authority (NCAA)**; airport operator — **Namibia Airports Company (NAC)**. FIR — **Windhoek FIR (FYWF)**; see the [Africa Airspace brief](../../../../airspace/africa.md).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Control Tower **H24** `[AC-U-KWIK]` | 🟧 |
| AD operating hours | **0400–2000Z**; out-of-hours (O/T) by 48 h PNR + fee `[AC-U-KWIK]`. NCAA AIS office hours reported separately as **0300–1900Z** `[NCAA IBS]` (a different service — flight-plan processing, not necessarily AD/tower hours) | 🟧 |
| Night / curfew restrictions | No formal curfew found; the O/T regime above is the practical constraint | 🟧 |
| RFF category | **CAT 9** `[AC-U-KWIK; Wikipedia]` | 🟩 |
| Fuel | AVGAS + Jet fuel available `[AC-U-KWIK]`; grade certification, supplier and hours not confirmed | 🟧 |
| PCN | Not published / verify (aggregator lists only a non-numeric "International" tag) | 🟧 |
| Customs | International PoE confirmed; desk hours not independently confirmed beyond AD hours | 🟧 |
| Handling / FBO | **Mandatory** ground handling `[AC-U-KWIK]`; on-field agents identified in public sources include Jetmate Aviation and General Aviation Services (G.A.S.) Namibia | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08 | 4,575 × 45 m | Asphalt, lighted (high-intensity lighting per AC-U-KWIK) / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Primary runway; ILS/RNAV/VOR approach types published (§9/§10) |
| 26 | 4,575 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal. A single 2009 crowd-sourced OurAirports comment ("RUNWAY 26 — 110.30 — 258°") suggests an ILS on this end — **unverified, aged, single-source; not corroborated elsewhere** (§9) |

*A secondary runway **16/34 (1,524 × 30 m asphalt, lighted)** also exists per OurAirports/SKYbrary — general-aviation scale, not usable for our fleet types, and not independently confirmed against a primary AIP. Dimensions/surface from OurAirports and SKYbrary (mutually corroborated); AC-U-KWIK gives a close secondary figure (≈4,570 m / 14,991 ft) for 08/26. All distances metres unless noted. No primary AIP declared-distance table was reachable this pass — treat all TORA/TODA/ASDA/LDA splits as unconfirmed pending the current AD 2 FYWH page.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | — | 114.1 MHz `[OurAirports]` | Not published 🟧 | 🟧 this frequency sits in the VOR/navaid band rather than the typical VHF ATIS range — possible aggregator transcription artefact; treat with caution pending primary confirmation |
| Ground / Apron | Windhoek Apron | 121.9 MHz `[OurAirports, labelled "GTE/APRON"]` | Not published 🟧 | |
| Tower | Windhoek Tower | 118.1 MHz `[OurAirports]` | H24 `[AC-U-KWIK]` | |
| Approach | Windhoek Approach | 120.5 MHz `[OurAirports]` | Not published 🟧 | Radar vs procedural not confirmed |
| Centre / FIR | Windhoek (FYWF) | Not published / verify 🟧 | — | See [Africa Airspace brief](../../../../airspace/africa.md) |

*Frequencies from OurAirports (tier-4, retrieved 2026-07-26) — not independently cross-checked against a primary AIP. Emergency 121.500 assumed per ICAO norm — verify. Treat all values as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | WHV (Windhoek) | 114.50 MHz `[OurAirports]` | Not published 🟧 | On field, ~0.1 NM N of ARP |
| NDB | WH (Windhoek) | 280 kHz `[OurAirports]` | Not published 🟧 | On field, ~0.3 NM S of ARP |
| ILS/LOC/DME (unconfirmed) | — | 110.30 MHz, course ≈258° 🟧 **single-source, unverified** | — | Sourced only to a single 2009 crowd-sourced OurAirports comment ("RUNWAY 26 — 110.30 — 258°"); no primary or secondary corroboration found this pass — treat as an unconfirmed lead consistent with an ILS serving RWY 26, not a fact, pending the current AIRAC chart |

*No on-field secondary navaid data beyond the above was found in reachable sources. Approach types (ILS/RNAV(GNSS)/VOR) are confirmed only generically via AC-U-KWIK (§1) — pull the current-AIRAC procedure/navaid detail at planning.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) assumed — confirm current chart.
- **Preferential runway logic:** Not published / verify — no declared preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08 | ILS / RNAV(GNSS) / VOR (types only) 🟧 | Not confirmed | Not confirmed | Pull current-AIRAC approach names at planning |
| 26 | ILS / RNAV(GNSS) / VOR (types only) 🟧; unverified single-source ILS lead 110.30/258° (§9) | Not confirmed | Not confirmed | Pull current-AIRAC approach names at planning |

- **STARs (names only):** Not confirmed in reachable sources — pull current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain (Khomas Hochland plateau, §3.1) is undulating rather than an extreme close-in peak picture, but is not independently confirmed for FYWH — verify MSA/step-downs on the current chart. The more material factor at this field is the **degraded missed-approach/go-around climb gradient under high density altitude** — factor actual OAT/density altitude into any missed-approach assessment, not just the charted gradient; see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §5. 🟥

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable sources this pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed for FYWH specifically. Given the field's hot-and-high regime (§3.5), treat **SID minimum-climb-gradient compliance and OEI escape routing as the binding item on every departure**, not a formality — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4. 🟥
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — verify locally with handling. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found (**"Slots Required: No"** per AC-U-KWIK); ground handling is mandatory. No formal ATFM/CTOT programme confirmed. 🟧
- **De-icing:** **NIL** — hot, semi-arid climate; no de-icing requirement expected.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed in reachable sources — confirm bay/stand assignment with handling. On-field FBO/ground-handling agents identified in public sources: **Jetmate Aviation**, **General Aviation Services (G.A.S.) Namibia** `[AC-U-KWIK]`. 🟧
- **Push-back:** Not confirmed — verify locally. 🟧
- **Standard taxi routes:** Confirm with Ground/Tower on the day; our operation uses the primary runway system (08/26) — the secondary 16/34 is not relevant to our fleet.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** **Hot, semi-arid/steppe climate (Köppen BSh)** `[SKYbrary]` on the high Khomas Hochland plateau; generally dry with strong diurnal heating.
- **Seasonal hazards:** Austral-summer rainy season (**≈Nov–Apr**) brings afternoon convective thunderstorm activity typical of the southern-African interior; dry season (**≈May–Oct**) is generally clear, with density altitude peaking in the hot late-dry-season afternoons (Sep–Oct). General regional climatology — not independently quantified for FYWH this pass. 🟧
- **Local effects:** Landlocked high-plateau setting — no sea-breeze effect; diurnal heating on the plateau is the dominant local effect, expressed operationally through density altitude (§3.5) rather than through a distinct wind/turbulence signature.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF status, GPS/RAIM, and the out-of-hours (O/T) notice regime (§6). Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination (not a K Global base — §1).
- **Nearest suitable alternates:** Company preferred alternates **FAOR** (O.R. Tambo Intl, Johannesburg, South Africa), **FBSK** (Sir Seretse Khama Intl, Gaborone, Botswana), **FDSK** (Sikhuphe Intl, Eswatini) `[VAMSYS mirror 2026-07-26]` — **all are cross-country diversions from Namibia**; none is a short-hop alternate. Confirm suitability, runway/RFF adequacy and current minima per leg, and factor the sizeable diversion distance into fuel/time planning before dispatch. 🟧
- **Fuel-uplift notes:** AVGAS + Jet fuel available per tier-4 source `[AC-U-KWIK]`; supplier, grade certification and hours not confirmed. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟥 **Hot-and-high field (5,640 ft)** is the dominant performance driver — expect a possible take-off weight reduction (payload and/or fuel trade) on warm afternoons to meet climb-gradient/thrust limits; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md). The cross-country-only alternate picture (above) compounds this: a weight reduction taken for the departure/destination limit must still leave lawful reserves to a distant alternate.

---

## 17. Fleet-specific notes (optional)

- No FYWH-specific widebody-stand or performance issue is independently confirmed, but the combination of **high field elevation (5,640 ft), a hot semi-arid climate, and cross-country-only alternates (§16)** warrants a full performance and fuel-reserve check before dispatching any type with a material hot-and-high sensitivity. See the **Fleet Capability Matrix Table D "Hot-and-high sensitivity" column** — [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — for the per-type indicative tendency; the day's RTOW/gradient numbers remain AFM/OFP outputs per [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (NCAA AD 2 FYWH) could not be reached this pass** — the AIM Publications page redirected to the NCAA home page and the Internet Briefing System is login-gated to registered Namibian pilots / NA residents; declared distances, PCN, exact ATS/AD hours, navaid/approach detail, SIDs/STARs, mag variation and terrain/obstacle data are all unconfirmed pending this source.
- **VAMSYS category code "R"** — scheme semantics (H/L/M/S/R) not yet defined project-wide; see the company Knowledge base B-008.
- **Second runway 16/34** — role/status not confirmed against a primary AIP; treated here as a general-aviation-scale runway not usable for our fleet.
- **ILS ident/frequency on RWY 26** — the only lead found (110.30/258°) is a single 2009 crowd-sourced comment; not corroborated.
- **ATIS frequency (114.1 MHz)** — sits in the VOR/navaid band, possible aggregator transcription error; verify against a primary source.
- **AD/tower operating hours vs AIS office hours** — 0400–2000Z (AC-U-KWIK, AD/O.T. regime) vs 0300–1900Z (NCAA IBS, AIS office) are plausibly two different services but neither is cross-checked against the primary AD 2 page.
- **Approach/departure control type** (radar vs procedural), SID/STAR names, take-off minima, LVP triggers, noise-abatement procedures, stand/taxi hot-spot detail, and fuel supplier/hours — none confirmed in reachable sources.
- **Terrain/MSA quantification** for FYWH specifically — the Khomas Hochland description in §3.1 is general regional geography, not a field-specific obstacle table.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/FYWH/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid cross-check — tier-4.*
- Wikipedia — "Hosea Kutako International Airport" — https://en.wikipedia.org/wiki/Hosea_Kutako_International_Airport (retrieved 2026-07-26). *History, RFF Category 9, ground-handling transition, development plans.*
- SKYbrary — "Windhoek/Hosea Kutako International Airport" — https://skybrary.aero/airports/fywh (retrieved 2026-07-26). *Elevation, runway table, Köppen BSh climate classification.*
- AC-U-KWIK — https://acukwik.com/Airport-Info/FYWH (retrieved 2026-07-26). *Runway/elevation cross-check, RFF Category 9, AD/O.T. hours, control-tower H24, slots-not-required, handling-mandatory, fuel types, mag variation, on-field handling agents.*
- Namibia Civil Aviation Authority (NCAA) — AIM Publications index — https://www.ncaa.com.na/index.php/document-downloads/industrial-documents/aim-publications/aeronautical-information-publication (redirects to home page; retrieved 2026-07-26) and NCAA Internet Briefing System — https://ibs.ncaa.com.na/fwf-ncaa/public/static/home.faces (login-gated to registered Namibian pilots/NA residents; AIS office hours 0300–1900Z noted from the public landing page; retrieved 2026-07-26). *Primary AD 2 FYWH page NOT reached this pass.*
- [Africa Airspace brief](../../../../airspace/africa.md) — Windhoek FIR (FYWF) context, ESAF structure, seasonal hazards.
- [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — hot-and-high methodology applied throughout this brief.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
