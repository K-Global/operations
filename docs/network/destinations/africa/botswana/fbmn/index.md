# FBMN — Maun International · Airport Briefing

**FBMN / MUB** · Maun, North-West District, Botswana · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (primary CAAB eAIP verification pending)

> **Read-me:** Planning aid for the sim, not a chart. The Civil Aviation Authority of Botswana (CAAB) publishes the national AIP in loose-leaf paper form and its online AIP/eAIP portal was not independently reachable this pass — figures below are built from CAAB's own public airport page plus OurAirports, SkyVector, Wikipedia and a public ATC-training aerodrome reference, cross-checked against each other. Treat AIP-specific values (declared distances, RFF category, PCN, minima) as **provisional**. Approaches/SIDs/STARs are listed **by name only where known, or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | **19°58.35′S / 23°25.68′E (-19.97250, 23.42805)** `[legacy stub / Navigraph navdata, corroborated by SkyVector]` — OurAirports' own ARP figure (-19.970491, 23.431409) sits ~250 m NE of this; treat as reference-point convention variance, not a live discrepancy 🟧 |
| Field elevation | **3,094 ft / 943 m AMSL** — consistent across Navigraph, OurAirports (3,093 ft), SkyVector (3,094 ft) and a public ATC-training aerodrome reference (943 m); effectively confirmed (±1 ft rounding only) |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC +2 (CAT, no DST) |
| Runway(s) | Single — **08/26**, asphalt, lighted. 🟧 **Length discrepancy across sources — flagged, not silently resolved:** SkyVector (12,139 ft / 3,700 m × 45 m), a public ATC-training aerodrome reference (3,670 m × 45 m) and general aviation-directory cross-checks converge on **~3,670–3,700 m × 45 m**; OurAirports independently records a much shorter **2,000 m × 30 m**, which reads as a stale/erroneous entry against three converging sources. This brief uses **~3,670–3,700 m × 45 m** as the working figure — **verify the exact declared length against the current CAAB AIP before relying on it for a performance-limited case.** |
| Preferential runway | Not published / verify — wind-dependent, no stated preference found 🟧 |
| Longest LDA | Not published / verify 🟧 (runway ~3,670–3,700 m physical, per above) |
| Approaches | Not confirmed in reachable sources this pass — an on-field VOR (MAV 112.70) suggests a VOR/RNAV(GNSS)-type approach exists; no ILS reference found anywhere in the sources checked 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | **Tower** service referenced (CAAB lists a Senior Air Traffic Control Officer on staff) alongside an **AFIS** tag carried by OurAirports on the same 118.7 MHz frequency — the exact current service level (full ATC tower vs AFIS) is not reconciled between sources; treat as **procedural/non-radar** by the continental default (see [Africa Airspace brief](../../../../airspace/africa.md) §3) until confirmed otherwise 🟧 |
| Elevation class | Low–moderate elevation (3,094 ft) — **not** classically hot-and-high, but density-altitude/performance margins are still worth checking on hot dry-season (Sep–Oct) afternoons, especially for lighter/turboprop types sharing the field 🟧 |
| Special-airport status | Not operator-categorised in reachable sources. The field's defining characteristic is not a chart restriction but **traffic density**: Maun is reported as the busiest airport in Africa for aircraft movements after O.R. Tambo, driven by very high volumes of light bush/charter traffic serving Okavango Delta camps — see §3.2/§5 🟥 |
| Customs / PoE | Yes — international airport (Air Botswana, SA Airlink, CemAir, Fastjet Zimbabwe and others operate scheduled international/regional service); hours tied to reported AD operating hours — see §6 🟧 |
| K Global category | **Not set** `[VAMSYS mirror 2026-07-26]` — 🟧 VAMSYS `category` field is null for this airport. The H/L/M/S/R category scheme is not yet defined project-wide (the company Knowledge base item B-008) — do not infer a meaning from the null value. |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| K Global suitable alternate | Not confirmed in the VAMSYS mirror this pass — verify 🟧 |
| Company preferred alternates | **FBSK** (Sir Seretse Khama Intl, Gaborone, Botswana — same country), **FYWH** (Hosea Kutako Intl, Windhoek, Namibia), **FLKK** (Lusaka, Zambia) `[VAMSYS mirror 2026-07-26]` — cross-country pair further afield than FBSK; confirm suitability/runway-RFF adequacy per leg |
| Taxi-in / taxi-out (VAMSYS) | Not published / verify 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Maun sits on the flat Okavango Delta/Kalahari fringe plain; no close-in high terrain bears on arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟧 | ~3,670–3,700 m physical would be ample for any K Global narrowbody/regional type; **OurAirports carries a conflicting 2,000 m figure** — resolve against the CAAB AIP before treating length as non-limiting for a specific leg. Declared distances (TORA/TODA/ASDA/LDA) unpublished. |
| Approach availability / minima | 🟧 | No approach names confirmed; on-field VOR suggests a VOR/RNAV(GNSS) approach exists. Minima unconfirmed. |
| Airspace / traffic / control | 🟥 | **Very high density of light GA/bush-charter traffic** sharing the circuit and airspace with scheduled turboprop/regional-jet service, in a procedural (non-radar-confirmed) control environment — see §3.2. |
| Weather / seasonal hazard | 🟧 | Semi-arid savanna climate; dry season (Apr–Oct) dust/haze and thermal turbulence vs wet/green season (Nov–Mar) convective storms; morning/dusk mist reported locally (§14). |
| Curfew / slots / hours | 🟧 | Reported AD operating hours (0730–1630 local) trace to a CAAB page written in a COVID-era operational context — current hours unconfirmed, effectively a night-ops constraint if still accurate. |
| RFF category vs our types | 🟧 | Not published — verify before planning any K Global type here. |
| Fuel availability | 🟧 | Jet A-1 presumed available given scheduled turboprop/regional-jet service (Air Botswana, SA Airlink, CemAir, Fastjet Zimbabwe); not independently confirmed. |
| Customs / handling / security | 🟧 | International PoE function present; hours/desk-level detail and specific ground-handling agent for our operation not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
FBMN sits at **3,094 ft AMSL** on the flat southern fringe of the Okavango Delta/Kalahari sandveld. There is no close-in high terrain relevant to arrival, departure or missed-approach paths — this is a non-issue field for terrain in the classic CFIT sense. Honour the charted MSA/sector altitudes regardless; the operational threats at this field lie elsewhere (traffic density, §3.2; weather, §3.4).

### 3.2 Airborne conflict / traffic  🟥
This is the standout threat at Maun. CAAB's own airport description states the field functions as **"a hub for small single and twin-engine aircraft feeding mainline carriers,"** with **on average six light-aircraft movements generated for every scheduled-aircraft arrival**, and independent sources describe Maun as **the busiest airport in Africa for aircraft movements after O.R. Tambo (Johannesburg)**, particularly during the June–August high safari season. This traffic is overwhelmingly VFR bush-charter flow feeding Okavango Delta lodges and airstrips, mixing in the same circuit and terminal airspace as scheduled IFR turboprop/regional-jet arrivals — in a control environment whose exact service level (tower vs AFIS) and radar status are not confirmed (§1). Maintain a heightened visual lookout in the circuit and on any visual approach/departure, expect non-standard GA patterns, and do not assume radar-vectored separation from light traffic. Cross-reference the [Africa Airspace brief](../../../../airspace/africa.md) §3 for the continental default of procedural/non-radar control.

### 3.3 Runway excursion  🟧
The physical runway (~3,670–3,700 m per the converging sources, §1) is not length-limiting for any K Global type if that figure is confirmed — but **declared distances (TORA/TODA/ASDA/LDA) are not published in reachable sources**, and OurAirports' conflicting 2,000 m entry means the runway-length question itself is not fully closed. Do not treat the long physical-runway figure as a substitute for a verified performance number on a weight-limited case. Wet/green-season (Nov–Mar) rainfall may reduce braking action; no contamination-reporting data was found.

### 3.4 Weather threat  🟧
Maun sits in a semi-arid savanna climate on the Kalahari fringe. The **dry season (roughly Apr–Oct)** brings dust/haze and afternoon thermal turbulence, sharpening toward hot conditions in Sep–Oct; the **wet/green season (roughly Nov–Mar)** brings convective thunderstorm activity typical of the regional rainy season. A public airport-user comment also notes that **morning/dusk mist and low cloud can roll in** at this field — a ceiling/visibility factor at the margins of the operating day, worth checking against the reported limited AD operating hours (§6). See §14.

### 3.5 Operational considerations  🟧
Beyond traffic density (§3.2), the field's proximity to the Okavango Delta wetlands and adjoining game areas (Moremi Game Reserve) carries a **wildlife-strike risk** (birdlife and, at the margins, larger game) typical of a safari-gateway field — not independently quantified in reachable sources but a standing situational-awareness item. **Declared distances, RFF category, PCN and approach/SID/STAR names are all unconfirmed** — re-verify every figure on the current CAAB AIP before relying on it operationally.

---

## 4. Cautions & Warnings

- 🟥 **Very high volume of light GA/bush-charter traffic** sharing the circuit with scheduled arrivals/departures — maintain vigilant visual lookout; do not assume radar separation.
- Runway-length discrepancy across sources (~3,670–3,700 m vs an outlier 2,000 m figure) — verify against the current CAAB AIP before a performance-limited planning case.
- Wildlife-strike risk (birdlife/game) given the field's location on the edge of the Okavango Delta wetland/game-reserve system.
- Morning/dusk mist and low cloud reported locally — check current weather at the margins of the operating day.
- Reported AD/ATS operating hours (0730–1630 local) may be stale (sourced from a COVID-era CAAB page) — confirm current hours before planning a late/early movement.
- Declared distances, RFF category and PCN are all unpublished in reachable sources — do not assume a performance-limited case is clear without AIP confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources. The field's defining operational character is **extreme light-aircraft traffic density** (§3.2), not a chart-based special-airport designation. 🟧
- **Crew-qualification gate:** None published in reachable sources — verify. Given the traffic-density profile, a thorough traffic-awareness/visual-lookout briefing is warranted regardless of formal qualification gates. 🟧
- **Operating restrictions / bans:** None found in reachable sources; no AR/RNP-specific restriction identified. Verify against current AIRAC/AIP. 🟧
- **Overflight / entry / permits:** Standard Botswana state entry/overflight requirements apply — confirm current permit lead-time on the OFP; not independently detailed for this field. 🟧
- **Operations notes:** Regulator and ANS provider — **Civil Aviation Authority of Botswana (CAAB)**, Directorate of Air Navigation Services. FIR — **Gaborone FIR (FBGR)**, which also covers delegated Namibian airspace over the Caprivi Strip above FL145; see the [Africa Airspace brief](../../../../airspace/africa.md) for the continental picture (no dedicated Gaborone FIR brief exists yet in this repo).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Reported **0730–1630 local** on CAAB's own airport page (written in a COVID-era operational context — reduced-movement hours may no longer be current) | 🟧 |
| AD operating hours | Same as ATS hours above — verify current status | 🟧 |
| Night / curfew restrictions | No explicit night curfew published, but the reported ATS/AD hours above effectively preclude night movements if still accurate | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 presumed available (scheduled turboprop/regional-jet service); grade/hours not independently confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE function present; hours tied to AD operating hours above — desk-level detail unconfirmed | 🟧 |
| Handling / FBO | Numerous Delta-charter operators are based at the field (Wilderness Air, Mack Air, Moremi Air, Kavango Air, Delta Air, Safari Air, Major Blue Air, Boro Air, Helicopter Horizons) alongside scheduled carriers (Air Botswana, SA Airlink, CemAir, Fastjet Zimbabwe); specific handling agent for a K Global operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

**RWY 08/26 — asphalt, lighted · MAG 076°/256° · THR 08 elev ~3,078 ft, THR 26 elev ~3,080 ft (SkyVector)**

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08 | ~3,670–3,700 m × 45 m 🟧 (see §1 discrepancy note) | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | THR elev ~3,078 ft |
| 26 | ~3,670–3,700 m × 45 m 🟧 (see §1 discrepancy note) | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | THR elev ~3,080 ft |

*Length figure per SkyVector (3,700 m/12,139 ft) and a public ATC-training aerodrome reference (3,670 m), both independently corroborated by general aviation-directory cross-checks; OurAirports records a conflicting 2,000 m × 30 m figure treated here as a probable stale/erroneous outlier — **verify the exact declared length and full distance breakdown against the current CAAB AIP AD 2.13 before any performance-limited planning.** All distances metric unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Maun ATIS | 126.600 | Not published 🟧 | `[SkyVector]` |
| Delivery | Not published | — | — | Not confirmed as a separate service 🟧 |
| Ground | Maun Ground | 121.900 | Not published 🟧 | `[OurAirports]` |
| Tower | Maun Tower | 118.700 | Per reported AD hours (§6) 🟧 | Also carried as an **AFIS** frequency by OurAirports — service-level (Tower vs AFIS) not reconciled between sources 🟧 |
| Approach | Maun Approach | 126.000 | Not published 🟧 | `[OurAirports / SkyVector]` |
| Centre / FIR | Gaborone (FBGR) | Not published / verify | — | See [Africa Airspace brief](../../../../airspace/africa.md) |

*Frequencies from OurAirports and SkyVector (both tier-4, cross-checked against each other and consistent). Emergency 121.500. Delivery/FIR-centre frequency and all service hours are primary-pending. 🟧*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | MAV (Maun) | 112.70 | Not published 🟧 | On/near field, ~1.5 NM per SkyVector; DME status not confirmed |
| NDB (enroute reference only) | OR (Orapa) | 295 kHz | Not published 🟧 | ~131 NM bearing 126° — distant enroute aid, not an FBMN approach aid |
| NDB (enroute reference only) | MT (Matetsi) | 260 kHz | Not published 🟧 | ~166 NM bearing 058° — distant enroute aid, not an FBMN approach aid |

*From SkyVector's "nearby navigation aids" listing (tier-4). No ILS or DME-paired navaid was found for FBMN in any reachable source — verify against the current AIRAC whether any precision or RNP approach exists.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed; no field-specific constraint found.
- **Preferential runway logic:** Not published — wind-dependent selection between 08/26 assumed by default for a single-runway field. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08/26 | Not confirmed in reachable sources 🟧 | — | — | On-field VOR (MAV) suggests a VOR or RNAV(GNSS) approach likely exists — verify current AIRAC |

- **STARs (names only):** Not confirmed in reachable sources. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** No terrain factor (flat delta plain); the standing missed-approach/go-around risk is **re-entering a circuit dense with light GA/bush-charter traffic** (§3.2) — maintain traffic awareness through the go-around.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable sources. 🟧
- **RNP / climb-gradient requirements:** Not confirmed — verify on the current AIRAC. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the general capability topic. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — the ramp/apron is shared with a large light-GA/charter fleet; confirm start-up sequencing and any push-back requirement locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination or CTOT/ATFM regime found — not a slot-coordinated field. 🟧
- **De-icing:** **NIL** — sub-tropical savanna field, no icing-condition relevance.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** No published idle-reverse restriction found. 🟧

---

## 13. Ground operations

- **Stands for our types:** Mixed apron shared between the extensive light-GA/charter fleet based at the field and scheduled turboprop/regional-jet traffic; specific stand assignment for our types not confirmed. 🟧
- **Push-back:** Not confirmed — self-manoeuvre plausible for narrowbody/regional types given the GA-charter-dominant ramp, but verify locally. 🟧
- **Standard taxi routes:** Single runway, single main apron — routing expected to be straightforward; not independently detailed. 🟧
- **Hot spots / tight taxiways:** Not captured in reachable sources; ramp congestion from the very high light-aircraft movement rate is a plausible caution given the traffic-density profile (§3.2). 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Semi-arid savanna climate on the Kalahari/Okavango Delta fringe; prevailing wind not independently sourced.
- **Seasonal hazards:** **Dry season (roughly Apr–Oct)** — dust/haze and afternoon thermal turbulence, sharpening toward hot conditions Sep–Oct. **Wet/green season (roughly Nov–Mar)** — convective thunderstorm activity typical of the regional rainy season. Note the Okavango Delta's own flood pulse (driven by rainfall far upstream in the Angolan highlands months earlier) peaks around **Jun–Aug**, which is also the safari high season and the period of heaviest light-aircraft movement at this field (§3.2) — a coincidence of high traffic density with the drier, generally more benign flying weather of the season.
- **Local effects:** A public airport-user account notes that **morning/dusk mist and low cloud can roll in** at this field — check current METAR/TAF at the margins of the operating day.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF status, GPS/RAIM, and any current traffic-management notice given the field's high light-aircraft movement rate. Source: official AIS / SimBrief OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — Okavango Delta safari-tourism gateway, likely a regional/leisure-network endpoint rather than a hub or technical stop.
- **Nearest suitable alternates:** As carried in VAMSYS for this build — **FBSK** (Sir Seretse Khama Intl, Gaborone, Botswana — same country), **FYWH** (Hosea Kutako Intl, Windhoek, Namibia — cross-country), **FLKK** (Lusaka, Zambia — cross-country) `[VAMSYS mirror 2026-07-26]`. Confirm suitability, runway/RFF adequacy and current minima per leg before use.
- **Fuel-uplift notes:** Jet A-1 presumed available given scheduled turboprop/regional-jet service; supplier and hours not independently confirmed. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** Runway length is presumptively non-limiting for any K Global type at ~3,670–3,700 m (pending the §1/§7 discrepancy resolution); moderate field elevation (3,094 ft) is not a hot-and-high driver in the classic sense. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific reference.

---

## 17. Fleet-specific notes (optional)

- No K Global type has a field-specific consideration confirmed at FBMN beyond the general traffic-density caution (§3.2). Any narrowbody/regional type in the network is expected to be non-limiting on runway length pending the §7 declared-distance confirmation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific reference if a widebody or long-range type is ever planned here (unlikely given the field's regional/leisure role).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Runway-length discrepancy** — OurAirports (2,000 m × 30 m) vs SkyVector/public ATC-training reference/general cross-checks (~3,670–3,700 m × 45 m). This brief uses the longer, multiply-corroborated figure as the working value but the exact declared length is unconfirmed against the primary AIP.
- Declared distances (TORA/TODA/ASDA/LDA); PCN; RFF category — none published in reachable sources.
- Control-service level — Tower vs AFIS not reconciled between OurAirports and CAAB's own staffing reference; radar status unconfirmed (procedural assumed by continental default).
- ATS/AD operating hours — sourced from a COVID-era CAAB page; current hours not independently confirmed.
- Approach/SID/STAR names, minima, TA/TL, take-off minima — none confirmed in reachable sources.
- Mag variation; fuel supplier and hours; handling agent for a K Global operation; noise/NAP detail.
- ARP figure varies ~250 m between the Navigraph/SkyVector-corroborated seed value and OurAirports' independent figure — treated as reference-point convention, not flagged as a live safety issue, but worth a primary-source reconciliation.
- CAAB's own eAIP/AIP portal was not independently reached this pass — primary verification pending.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Civil Aviation Authority of Botswana (CAAB)** — Maun International Airport page — https://www.caab.co.bw/maun-international-airport/ (retrieved 2026-07-26). *Operating hours, based charter/scheduled operators, staffing, traffic-density description, terminal-renovation context.*
- CAAB — AIP/eAIP portal — https://www.caab.co.bw/aeronautic-information-publication-aip/ and https://www.caab.co.bw/aip-register/ (attempted 2026-07-26). *Portal not independently reachable this pass; primary AD 2 FBMN verification PENDING.*
- CAAB — Air Navigation Services page — https://www.caab.co.bw/air-navigation-services/ (retrieved 2026-07-26). *Gaborone FIR (FBGR) scope, including delegated Namibian Caprivi Strip airspace above FL145.*
- OurAirports — https://ourairports.com/airports/FBMN/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway (conflicting length figure — see §1/§7/§18), frequency cross-check — tier-4.*
- SkyVector — https://skyvector.com/airport/FBMN/Maun-Airport (retrieved 2026-07-26). *Coordinates, elevation, runway dimensions/headings/threshold elevations, communications, nearby navaids — tier-4.*
- Wikipedia — "Maun Airport" — https://en.wikipedia.org/wiki/Maun_Airport (retrieved 2026-07-26). *Traffic-density description (busiest-in-Africa-after-O.R.-Tambo claim, Jun–Aug peak), based charter operators, scheduled-service history.*
- Learn ATC — FBMN Aerodrome reference — https://server.learn-atc.com/tools/aerodrome/fbmn (retrieved 2026-07-26). *Runway length/width cross-check, ATS frequency cross-check — tier-4 public ATC-training resource.*
- [Africa Airspace brief](../../../../airspace/africa.md) — Gaborone FIR (FBGR), continental procedural/non-radar picture, seasonal hazards.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP context (CAAB portal not independently reached) plus public cross-check sources; K Global fields from live VAMSYS; 4-page pack. Flags the runway-length discrepancy between OurAirports and three converging sources, and the Tower-vs-AFIS control-service ambiguity. |
