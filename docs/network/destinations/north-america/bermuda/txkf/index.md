# TXKF — L F Wade Intl · Airport Briefing

**TXKF / BDA** · Hamilton, Bermuda · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid, not a chart. Static data is drawn from the Bermuda AIP (Bermuda Department of Civil Aviation / Bermuda Airport Authority) where reachable, cross-checked against public FAA-sourced data and operator/tier-4 material; approaches/procedures are named only where confirmed — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N32°21′50″ / W064°40′42″ (32.3638, -64.6782) — OurAirports/SkyVector cross-check |
| Field elevation | **18 ft** (FAA-sourced survey data; runway 12/30 threshold elevations 17.8–18.0 ft) 🟧 cross-check discrepancy — OurAirports lists 12 ft, SKYbrary lists 16 ft; the primary Bermuda eAIP AD 2 TXKF page could not be rendered this pass (JavaScript frameset — see §18) |
| Mag variation | Not published / verify 🟧 |
| Time zone | **Atlantic Time Zone — UTC−4 (AST), UTC−3 with DST (ADT)** |
| Runway(s) | **12/30**, single runway, 2,958 × 46 m / 9,706 × 150 ft, asphalt-concrete |
| Preferential runway | Wind-dependent (single runway, no reciprocal option); **180° turns on RWY 12/30 prohibited unless instructed by ATC** 🟥 |
| Longest LDA | 9,669 ft / 2,947 m (both directions per tier-4 cross-check) 🟧 |
| Approaches | VOR/DME and RNAV(GNSS) assumed by runway-end lighting/PAPI infrastructure; **no ILS confirmed in reachable public sources** — verify current AIRAC 🟧 |
| RFF category | **CAT 9, published hours 0700–2300 LT.** ARFF is resourced to CAT 9 around the clock in practice, but **outside 0700–2300 LT the field is uncontrolled and a ~20-minute callout is required** for ARFF response — see §16/§18 🟥 |
| Control type | **Mixed/layered** — local Tower/Ground (contracted ATC provider) for the aerodrome; terminal-area radar (**"Bermuda Radar"**) is a **remote FAA position** operated by New York-facility controllers; the surrounding oceanic FIR is **New York Oceanic (KZWY)** — see §3.2 |
| Elevation class | Sea-level — **not** hot-and-high; the operative performance/planning driver is isolation (single runway, no on-island alternate) and Atlantic hurricane-season closure risk, not density altitude |
| Special-airport status | 🟥 **Single runway with no reciprocal/alternate option** — TXKF is the sole airport on the island; a runway blockage removes the only landing option for all of Bermuda. See §5. |
| Customs / PoE | **Yes** — U.S. CBP preclearance for US-bound passengers, published hours **0700–1600 daily** (pax pre-clear in Bermuda and arrive in the US as a domestic flight); Bermuda customs/immigration hours for other flows not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **KDCA** (Washington Reagan), **KJFK** (New York JFK) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Low-lying reclaimed-island site; no high terrain. The real close-in hazard is water, not terrain — see §3.1. |
| Runway length vs fleet perf | 🟧 | ~9,700 ft is ample length for any K Global type, but there is **no reciprocal runway** if 12/30 is blocked, and the field's weight-bearing figure (PCN-style "80/F/A/W/U") is tier-4-sourced and not independently confirmed. |
| Approach availability / minima | 🟧 | ILS presence unconfirmed; VOR/DME + RNAV(GNSS) assumed. No CAT II/III capability found in reachable sources. |
| Airspace / traffic / control | 🟧 | Unusual three-layer control authority (local Tower/Ground → remote FAA "Bermuda Radar" → New York Oceanic KZWY) — see §3.2. |
| Weather / seasonal hazard | 🟥 | Atlantic hurricane season (Jun–Nov, Bermuda's own historical peak late Aug–mid Oct) drives real, recurring 1–2 day full airport closures; wind shear/turbulence on both runway ends in northern-quadrant wind >15 kt. |
| Curfew / slots / hours | 🟧 | No formal curfew found, but the Tower is **not H24** (published RFF/ATS hours 0700–2300 LT); outside those hours the field runs on pilot-controlled lighting with reduced ARFF readiness. |
| RFF category vs our types | 🟧 | CAT 9 nominal — adequate for the fleet in daylight/tower hours, but the ~20-minute callout gap outside 0700–2300 LT is a material consideration for any night-time emergency diversion. |
| Fuel availability | 🟩 | Jet A-1 confirmed via on-field FBOs. |
| Customs / handling / security | 🟧 | US CBP preclearance confirmed with published hours; no scheduled-carrier ground handler identified for our fleet in reachable sources — only general-aviation FBOs found. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
TXKF sits on reclaimed and levelled land at the eastern tip of St. David's Island — the airfield was built in 1941–43 by levelling Long Bird Island and several smaller islands and filling the waterways between them (see §5 history). There is no high terrain anywhere near the field; **the operative close-in hazard is water, not terrain** — the runway and its surrounding aprons occupy a narrow reclaimed peninsula with open ocean or harbour on most sides, so there is effectively no overrun margin in several directions. Treat this as a runway-excursion/overrun consideration (§3.3) rather than a CFIT one.

### 3.2 Airborne conflict / traffic 🟧
Traffic density itself is low (a single runway serving on the order of a few hundred thousand passengers a year), but the **control architecture is unusual and worth briefing explicitly**. The Tower and Ground positions are local, contracted to a private ATC provider, and are **not staffed H24** (see §6). Terminal-area radar service — referred to operationally as **"Bermuda Radar"** — is not a separate Bermuda-based facility: it is a **remote position operated by FAA New York-facility controllers**, confirmed independently both in FAA New York Center Oceanic-operations training material (which lists "Bermuda Radar" alongside Piarco, San Juan, Miami, Jacksonville and Gander Domestic as one of the non-data-link facilities adjacent to the KZWY data-link service area) and in a VATSIM New York Oceanic pilot briefing showing matching "Bermuda Radar" VHF assignments (128.50 / 119.10) — the 119.1 figure also appears independently in FAA-sourced airport remarks as the local approach/departure frequency. Beyond Bermuda Radar's terminal airspace, the surrounding oceanic FIR is **New York Oceanic (KZWY)** — see the [North Atlantic brief](../../../../airspace/north-atlantic.md) for NAT HLA/OTS/datalink context. Crew should expect the local tower and the terminal radar/oceanic environment to be operationally seamless but **administratively and geographically separate** — this is a normal, published arrangement, not a fault condition, but it is atypical enough to merit a briefing note. The North America airspace brief ([North America](../../../../airspace/north-america.md)) does **not** cover Bermuda or this mid-Atlantic territory at all (it documents only a Canada/western-US polar routing) — it is linked here for completeness only, not as an operational reference for TXKF.

### 3.3 Runway excursion 🟧
Both runway ends report identical declared distances in the tier-4 source used (TORA = ASDA = LDA = 9,669 ft / 2,947 m each direction against a 9,706 ft physical runway), but the same source separately reports a **579 ft displaced threshold against RWY 12 without a corresponding reduction in the published LDA** — an internal inconsistency that could not be resolved against the primary Bermuda AIP this pass (see §18). Do not treat the LDA figures in §7 as audit-grade until cross-checked against a current AIRAC chart. **180° turns on RWY 12/30 are prohibited unless specifically instructed by ATC** — there is no engineered turn-pad, so back-taxi repositioning requires an ATC-directed manoeuvre. Given the reclaimed-island setting (§3.1), any excursion off either runway end has a real prospect of departing prepared surface into water or harbour margin — brief this as a genuine overrun consideration, not a generic one.

### 3.4 Weather threat 🟥
TXKF's defining seasonal hazard is the **Atlantic hurricane season (1 June – 30 November)**, with Bermuda's own historical risk concentrated **late August through mid-October** (September is the highest-probability month for a close pass or direct hit). This is not a theoretical risk: the field has a documented, recent, real closure precedent — Hurricane Imelda (Category 2) forced a full airport closure in October 2025 alongside schools, ferries and government services. The airport typically closes for **1–2 days** whenever a tropical storm or hurricane is forecast to track within roughly 100 NM of the island; airlines reroute or cancel around the closure window. Separately, and independent of season, there is a published **potential for light-to-moderate turbulence and/or wind shear on approach to both RWY 12 and RWY 30** whenever the surface wind originates from the northern quadrants and exceeds 15 kt — this applies to both runway ends, not just one.

### 3.5 Operational considerations 🟥
TXKF's principal relevance to K Global is **not as a scheduled destination** (K Global category **S**, Base **No** — §1) but as a **genuine North Atlantic en-route/EDTO diversion field**. Bermuda sits close to the middle of the ocean gap that numerous NAT organised-track-system routings cross between the US East Coast and Europe, making it one of a very small number of usable landmasses inside an otherwise vast oceanic segment further south than the Iceland/Greenland/Canada diversion chain documented in the [North Atlantic brief](../../../../airspace/north-atlantic.md) §8. A publicly documented 2018 case illustrates the role concretely: a widebody twin en route from the US East Coast to South America diverted to TXKF for a suspected cargo-fire indication; ATC advised the crew the tower was unstaffed at the time of arrival but that emergency services had been alerted and were standing by, and the aircraft landed roughly 38 minutes after the divert decision with ARFF present as promised. That case is the direct real-world illustration of the RFF/callout caveat in §1/§16 — plan around it rather than assume H24 CAT 9 coverage as a given. The other durable operational constraints are the **single-runway/no-alternate** exposure (§3.3/§5) and the **recurring hurricane-season closure risk** (§3.4); by contrast, terrain, traffic density and fuel availability are all non-issues here.

---

## 4. Cautions & Warnings

- **Single runway (12/30) with no reciprocal option** — a runway blockage removes the only landing option for the entire island; there is no on-island alternate. 🟥
- **Wind shear / light-to-moderate turbulence** on approach to **either** runway end when surface wind is from the northern quadrants and exceeds 15 kt. 🟧
- **180° turns on RWY 12/30 prohibited unless instructed by ATC** — no engineered turn-pad.
- **Tower/RFF are not H24** (published hours 0700–2300 LT); outside those hours the field runs on **pilot-controlled lighting (122.8, 7/5/3 microphone clicks)** and **ARFF callout takes roughly 20 minutes** — see §16. 🟥
- **Hurricane season (Jun–Nov, peak late Aug–mid Oct)** brings real, recurring 1–2 day full airport closures whenever a system tracks within ~100 NM — most recently documented October 2025. 🟥
- **Wildlife control service is unavailable 0300–1100Z** per FAA-sourced remarks. 🟧
- **Flight is prohibited within 3 NM of restricted area R-3017** per FAA-sourced remarks — confirm current status/location against AIP. 🟧
- **Aircraft movements on the apron are uncontrolled** per FAA-sourced remarks — maintain own-separation awareness on the ramp.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. The standing briefing items are the **single-runway/no-alternate exposure**, the **hurricane-season closure risk**, and the **limited tower/RFF hours** — treat all three as durable crew-briefing content. 🟧
- **Crew-qualification gate:** No field-specific crew-qualification gate found. If TXKF is used as a planned or contingency EDTO/ETOPS alternate, standard EDTO crew/aircraft currency and suitability requirements apply — see [`OM E — ETOPS-EDTO Procedures`](../../../../../flight-ops/etops-edto.md).
- **Operating restrictions / bans:** 180° turns on RWY 12/30 prohibited without ATC instruction; flight within 3 NM of R-3017 prohibited (verify current status); foreign civil government aircraft may require landing fees/diplomatic clearance per FAA-sourced remarks — not independently confirmed for our operation. 🟧
- **Overflight / entry / permits:** Bermuda is a UK Overseas Territory with its **own national AIP** (Bermuda Department of Civil Aviation / Bermuda Airport Authority) — it is governed independently of the UK CAA. U.S. CBP preclearance is available for US-bound passengers (§1/§6). No other special state permit identified. 🟧
- **Operations notes:** Airport operator — **Bermuda Skyport Corporation Limited** (concession holder since 2017, operating under the Ministry overseeing Bermuda's aerodrome). Air traffic control (Tower/Ground) is delivered under contract by a private ATC service provider; the field was formerly the joint-use USAAF/RAF **Kindley Field**, then **Kindley Air Force Base**, then **US Naval Air Station Bermuda** (1970–1995) before transfer to the Bermuda Government — this military heritage explains the single long, wide, ex-military-standard runway (the airfield originally had three runways; only 12/30 remains active, with one former runway now a taxiway and the other obstructed by former munitions bunkers).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground staffed approximately **0700–2300 LT** (derived from RFF/lighting-control published hours; not independently confirmed as an explicit ATS-hours statement) | 🟧 |
| AD operating hours | Field usable H24 via pilot-controlled lighting outside tower hours; **all aircraft operating into/out of TXKF are required to operate under IFR** | 🟧 |
| Night / curfew restrictions | No formal curfew found; outside ~2300–0700 LT the field is uncontrolled and lighting is pilot-activated on CTAF/UNICOM **122.8** (3-step, 7/5/3 microphone clicks) | 🟧 |
| RFF category | **CAT 9 (0700–2300 LT)**; ARFF resourced to CAT 9 around the clock in intent, but **~20-minute callout required outside published hours** | 🟥 |
| Fuel | **Jet A-1**, available via on-field FBOs (Pike Aviation, Seven Jets); hours not independently confirmed | 🟧 |
| PCN | Reported tier-4 weight-bearing figure **"80/F/A/W/U"** (PCN-style) — not confirmed against the primary Bermuda AIP | 🟧 |
| Customs | **US CBP preclearance 0700–1600 daily** for US-bound passengers; Bermuda customs/immigration hours for all other flows not confirmed | 🟧 |
| Handling / FBO | **Pike Aviation** and **Seven Jets** (general-aviation FBOs) identified; no scheduled-carrier ground handler confirmed for our operation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 2,958 × 46 m / 9,706 × 150 ft | Asphalt-concrete; weight-bearing "80/F/A/W/U" (tier-4, unconfirmed) 🟧 | 9,669 ft / 2,947 m | 10,620 ft / 3,237 m | 9,669 ft / 2,947 m | 9,669 ft / 2,947 m | A **579 ft displaced threshold** is reported against RWY 12 in the same tier-4 source **without** a corresponding LDA reduction — unresolved inconsistency, verify against primary AIP 🟧. PAPI (P4L, 3.40° GPA) reported **unusable 9° either side of centreline**; SALS approach lights; REIL; centreline lights. |
| 30 | 2,958 × 46 m / 9,706 × 150 ft (reciprocal, same physical runway) | Asphalt-concrete; as above | 9,669 ft / 2,947 m | 10,243 ft / 3,122 m | 9,669 ft / 2,947 m | 9,669 ft / 2,947 m | PAPI (P4L, 3.00° GPA); SSALR approach lighting with runway alignment indicator lights; centreline lights. |

*Source: FAA-sourced foreign-airport data via SkyVector (retrieved 2026-07-26), cross-checked against OurAirports and SKYbrary for the physical runway length (2,958–2,961 m, consistent to rounding). The primary Bermuda AIP AD 2 TXKF declared-distance table could not be independently rendered this pass — treat these figures as tier-4-corroborated, not primary-verified, until cross-checked. All distances converted; original source in feet.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS / AWOS-3PT | — | 119.6 | Hours not confirmed 🟧 | |
| Ground / Clearance Delivery | Bermuda Ground | 124.5 | Tower hours (§6) | Also handles clearance delivery when the tower is staffed |
| Tower | Bermuda Tower | 118.1 | ~0700–2300 LT (derived) 🟧 | |
| CTAF / UNICOM / PCL | — | 122.8 | H24 | Pilot-controlled lighting (7/5/3 clicks) outside tower hours: MIRL RY12/30, PAPI RY12 & RY30, REIL RY12, SALS RY12, ALSF-1 RY30 |
| Approach / Departure ("Bermuda Radar") | New York Approach | 119.1 (cross-checked against a VATSIM NY Oceanic reference showing matching "Bermuda Radar" 119.10) | Not confirmed H24 | Remote FAA position, not co-located on Bermuda — see §3.2 🟧 |
| Clearance Delivery (tower closed) | New York ARTCC | 128.5 (cross-checked against the same reference's "Bermuda Radar" 128.50) | When ATCT closed | 🟧 |
| Centre / FIR | New York Oceanic (KZWY) | Per current AIRAC | H24 | See [North Atlantic brief](../../../../airspace/north-atlantic.md) |

*Frequencies sourced to FAA-sourced foreign-airport data (SkyVector, retrieved 2026-07-26); "Bermuda Radar" naming and the 119.10/128.50 pairing independently cross-checked against a VATSIM New York Oceanic pilot-briefing reference (network-sim document, not regulatory — retrieved 2026-07-26) and against FAA New York Center oceanic-operations training material listing "Bermuda Radar" as a facility adjacent to the KZWY data-link service area. Not independently confirmed against the primary Bermuda AIP.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | BDA | 113.90 | H24 (assumed) 🟧 | On field — "Bermuda VOR" |
| ILS | — | — | — | **Not confirmed in reachable public sources** — verify current AIRAC chart before assuming precision-approach capability 🟧 |
| NDB | — | — | — | None found |

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed (no local override found).
- **Preferential runway logic:** Wind-dependent — single runway, no reciprocal choice beyond direction of use. Wind shear/turbulence risk applies to both ends in northern-quadrant wind >15 kt (§3.4).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 12 | VOR/DME and/or RNAV(GNSS) assumed — **not confirmed by name** | Not confirmed | Not confirmed | ILS presence unconfirmed 🟧 |
| 30 | VOR/DME and/or RNAV(GNSS) assumed — **not confirmed by name** | Not confirmed | Not confirmed | ILS presence unconfirmed 🟧 |

- **STARs (names only):** Not confirmed in reachable sources — pull current AIRAC at planning. 🟧
- **LVP:** No CAT II/III capability found — treat as **not available**; confirm current status. 🟧
- **Missed approach watch-items:** Terrain is not the driver (§3.1); the operative missed-approach concern is that **TXKF is the only airfield on the island** — a missed approach here has no local diversion beyond a return to the hold or a genuine oceanic/mainland diversion. Plan fuel accordingly for any TXKF approach.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable sources — pull current AIRAC at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. 🟧
- **Take-off minima:** Not confirmed. 🟧
- **Start-up / push-back:** **Aircraft movements on the apron are uncontrolled** per FAA-sourced remarks — no push-back/ground coordination beyond Ground on 124.5 for taxi. **APU use is limited to 45 minutes before scheduled take-off, and shut down as soon as possible when parked on Apron IV.**
- **ATC slot / CTOT & clearance:** No slot coordination or CTOT/ATFM regime identified — general aviation/scheduled mix under standard IFR clearance delivery (§8).
- **De-icing:** **NIL confirmed** — humid subtropical climate (Köppen Cfa; hot humid summers, cool winters); no de-icing infrastructure found and none climatically expected, but not explicitly stated in a primary source. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** **8 aircraft stands** reported, served by a single passenger terminal (rebuilt, opened December 2020) and one cargo terminal; the airport is reported able to support aircraft up to A380 size, but this is an operator/travel-source claim not confirmed against a current stand-by-stand capability table. 🟧
- **Push-back:** Not confirmed; apron movements are uncontrolled (§11). 🟧
- **Standard taxi routes:** RWY 30 landing — exit right via Taxiway E, F or B, contact Ground on 124.5, then right on Taxiway A, left on Taxiway H to Apron IV. RWY 12 landing — exit left via Taxiway C, contact Ground on 124.5.
- **Hot spots / tight taxiways:** None specifically named in reachable sources beyond the taxi routing above. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical climate (Köppen **Cfa**) — hot, humid summers and cool winters, with significant precipitation in all seasons; winter rainfall (and occasionally snowfall, per general regional classification) associated with westerly-steered storms, summer rainfall mostly thunderstorm-driven.
- **Seasonal hazards:** **Atlantic hurricane season, 1 June – 30 November**, with Bermuda's own historical peak risk **late August through mid-October** (September highest-probability month). The airport has a real, recurring closure precedent — typically **1–2 days closed** whenever a tropical system is forecast within ~100 NM, most recently documented for Hurricane Imelda (Category 2) in October 2025.
- **Local effects:** Small, low, isolated Atlantic island — exposed to open-ocean wind/sea-state effects with no significant terrain-driven local wind effect; wind shear/turbulence on approach to both runway ends in northern-quadrant wind >15 kt (§3.4).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories (in season). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closure/hurricane-season NOTAMs, navaid U/S, lighting, RFF downgrade, restricted-area R-3017 status, GPS/RAIM, tropical-cyclone advisories. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **North Atlantic en-route/EDTO diversion and alternate field — not a scheduled K Global destination** (Category S, Base No — §1). TXKF's real value is its position close to the middle of the ocean gap crossed by numerous NAT organised-track-system routings between the US East Coast and Europe — see the [North Atlantic brief](../../../../airspace/north-atlantic.md) for the broader NAT HLA/OTS/diversion framework (that brief's own diversion table currently covers only the northern Iceland/Greenland/Canada chain; TXKF fills the analogous role further south, for tracks running closer to 30–35°N — a gap the North Atlantic brief itself does not yet detail 🟧). For fleet EDTO/ETOPS planning methodology and alternate-suitability criteria, see [`OM E — ETOPS-EDTO Procedures`](../../../../../flight-ops/etops-edto.md).
- **Nearest suitable alternates:** Company preferred alternates **KDCA** (Washington Reagan) and **KJFK** (New York JFK) `[VAMSYS mirror 2026-07-26]` — both mainland US fields, confirm suitability/runway/RFF adequacy and current minima per leg; both are outside K Global's own network territory conventions used elsewhere in this OM, cited here as plain ICAO text per company data.
- **Fuel-uplift notes:** Jet A-1 confirmed available via on-field FBOs (Pike Aviation, Seven Jets); uplift capacity/hours for a widebody-scale contingency diversion are **not confirmed** — this is a general-aviation-oriented fuel infrastructure, not a confirmed scheduled-carrier-scale one. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (~9,700 ft) is non-limiting for any K Global type. The operative constraint is **RFF/ARFF availability outside 0700–2300 LT** (§1/§6) and the **single-runway/no-alternate** exposure (§3.3/§5), not aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type EDTO/ETOPS range reference.

---

## 17. Fleet-specific notes (optional)

- TXKF is not a scheduled destination for any K Global type; the relevant fleet consideration is which of the network's EDTO/ETOPS-approved twin-engine types would realistically plan or divert to TXKF on a North Atlantic crossing — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — ETOPS-EDTO Procedures`](../../../../../flight-ops/etops-edto.md). No field-length, weight-bearing or approach-category penalty specific to any single type was identified in reachable sources.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary Bermuda AIP AD 2 TXKF page** could not be rendered this pass (JavaScript frameset served empty to automated fetch, consistent with the access-pattern hazard noted for several state eAIPs) — all figures in this brief are tier-4-corroborated (FAA-sourced SkyVector data, OurAirports, SKYbrary, Wikipedia, OPSGROUP, operator website) rather than primary-verified. Re-attempt via a rendered browser session before this brief is used operationally.
- **Field elevation** — three-way discrepancy across tier-4 sources (18 ft FAA-sourced survey vs 16 ft SKYbrary vs 12 ft OurAirports); not resolved against the primary AIP.
- **Magnetic variation** — not obtained in reachable sources.
- **Declared-distance / displaced-threshold inconsistency** — a 579 ft displaced threshold reported against RWY 12 without a corresponding LDA reduction in the same source (§7); unresolved.
- **ILS presence on RWY 12 or RWY 30** — not confirmed in any reachable public source; approach names/minima not confirmed by name.
- **PCN / weight-bearing figure ("80/F/A/W/U")** — tier-4-sourced, not confirmed against the primary AIP.
- **ATS/Tower hours** — derived from RFF/lighting-control published hours (approx. 0700–2300 LT), not independently confirmed as an explicit ATS-hours statement.
- **RFF Category 9 / after-hours callout time** — sourced via a tier-4 secondary account (OPSGROUP) quoting Bermuda AIP GEN 4-1-1 and AD 2.6 text; not independently confirmed against the primary AIP this pass.
- **"Bermuda Radar" exact real-world frequency assignment** — the 119.10/128.50 pairing is cross-checked against a VATSIM (network-sim) reference and FAA training material naming the facility, not a primary ATC frequency table.
- **SIDs/STARs, take-off minima, transition altitude/level, noise-abatement procedure, de-icing status, stand-by-stand widebody capability, ground-handling agent for scheduled carriers, restricted area R-3017 current status** — none confirmed in reachable sources this pass.
- **North America airspace brief does not cover Bermuda/mid-Atlantic** — linked per cross-reference convention only; it documents an unrelated Canada/western-US polar routing.
- **North Atlantic brief's diversion table (§8)** does not yet detail a southern/mid-Atlantic diversion tier that would formally place TXKF in context — worth adding when that brief is next revised.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- Bermuda Airport Authority — AIP for Bermuda, AD 2.TXKF, valid from 27 Nov 2025 — https://www.airportauthority.bm/eaip/27-Nov-2025-A/2025-11-27-AIRAC/html/eAIP/TX-AD-2.TXKF-en-GB.html (attempted 2026-07-26; page renders empty to automated fetch — JavaScript frameset, see §18). **Primary source of record — not independently rendered this pass.**
- SkyVector — TXKF / L F Wade International Airport (FAA-sourced foreign-airport data, effective 2026-06-11) — https://skyvector.com/airport/TXKF/L-F-Wade-International-Airport (retrieved 2026-07-26). *Runway dimensions/declared distances, frequencies, navaid, weight-bearing figure, operational remarks.*
- OurAirports — https://ourairports.com/airports/TXKF/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SKYbrary Aviation Safety — Bermuda/L.F. Wade International Airport — https://skybrary.aero/airports/txkf (retrieved 2026-07-26). *Elevation/climate/runway cross-check.*
- Wikipedia — "L.F. Wade International Airport" — https://en.wikipedia.org/wiki/L.F._Wade_International_Airport (retrieved 2026-07-26). *History (Kindley Field/USAAF-RAF/USN NAS Bermuda), operator, control-authority description (New York ARTCC), preclearance.*
- OPSGROUP — "Do you use Bermuda (TXKF) as a NAT alternate at night?", 2018-02-08 — https://ops.group/blog/nighttime-diverts-to-bermuda/ (retrieved 2026-07-26). *RFF Category 9 hours, after-hours ARFF callout time, documented real-world diversion case.*
- Bermuda Skyport Corporation Limited — "U.S. Customs and Border Protection" — https://bermudaairport.com/passenger-information/u-s-customs-and-border-protection/ (retrieved 2026-07-26). *CBP preclearance description and hours.*
- U.S. Federal Aviation Administration — "Operations in the New York Center Oceanic CTA/FIR" (Teterboro Users Group briefing, May 2018) — https://teterborousersgroup.org/wp-content/uploads/2018/05/TUG-15-May-2018.pdf (retrieved 2026-07-26). *KZWY FIR structure, "Bermuda Radar" as an adjacent non-data-link facility.*
- Virtual New York ARTCC (VATSIM) — "New York Oceanic Pilot Briefing" — https://zny-uploads.s3.us-east-1.amazonaws.com/documents/Oceanic%20Pilot%20Briefing.pdf (retrieved 2026-07-26). **VATSIM cross-check** — network-sim document, not regulatory; corroborates "Bermuda Radar" naming and 119.10/128.50 frequency pairing.
- AP / local news — "Hurricane Imelda rumbles toward Bermuda as airport, schools and government offices close", 2025-10-01/02 — https://abcnews.go.com/International/wireStory/hurricane-imelda-rumbles-bermuda-airport-schools-government-offices-126110756 (retrieved 2026-07-26). *Documented recent hurricane-season closure precedent.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
