# DTTA — Carthage · Airport Briefing

**DTTA / TUN** · Tunis, Tunis Governorate, Tunisia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4/public-source build, AIP not independently reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. The primary source of record for this field is the **AIP Tunisia (OACA — Office de l'Aviation Civile et des Aéroports)**; the live eAIP could not be reached this pass (see §18), so static data here is corroborated from public tier-4 sources (OurAirports, Wikipedia, SkyVector) per the source register and flagged accordingly. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N36°51′04″ / E010°13′38″ (36.851002, 10.227200) `[OurAirports]` 🟧 not cross-checked against primary AIP |
| Field elevation | **22 ft / 7 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+1** — Tunisia observes a fixed UTC+1 offset year-round, no DST |
| Runway(s) | **01/19** 3,200 × 45 m (asphalt, lighted) · **11/29** 2,840 × 45 m (asphalt, lighted; **RWY 29 threshold displaced ~200 m**) |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | 3,200 m nominal on 01/19; 11/29 usable landing distance reduced by the RWY 29 displaced threshold — exact declared-distance table not published / verify 🟧 |
| Approaches | CAT III capability per network/K Global reference (task brief) 🟧 not independently confirmed from a primary AIP minima table this pass |
| RFF category | Not published / verify 🟧 |
| Control type | Radar approach assumed for the country's principal international gateway — not independently confirmed 🟧 |
| Elevation class | Sea-level (22 ft) — **not** hot-and-high |
| Special-airport status | Not operator-categorised; the **RWY 29 displaced threshold** is the standing crew-briefing item — see §5 |
| Customs / PoE | **Yes** — main international gateway; hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DAAG, GMMN** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Low-lying coastal site near the Lake of Tunis; no close-in high terrain expected — not independently quantified this pass. |
| Runway length vs fleet perf | 🟩 | 3,200 m on 01/19 — ample for K Global types; 11/29 (2,840 m, displaced-threshold-reduced) is the secondary runway. |
| Approach availability / minima | 🟧 | CAT III capability per network reference; minima/sub-category not confirmed from a primary AIP table. |
| Airspace / traffic / control | 🟧 | Principal Tunisian gateway; radar approach assumed, not independently confirmed. Tunis FIR (DTTC) — see [Africa airspace brief](../../../../airspace/africa.md). |
| Weather / seasonal hazard | 🟧 | Mediterranean coastal climate; sirocco (chili/gibli-type southerly wind) and winter frontal passages are general-climatology hazards, not field-specific sourced data this pass. |
| Curfew / slots / hours | 🟧 | Not published / verify. |
| RFF category vs our types | 🟧 | RFF category not published / verify. |
| Fuel availability | 🟧 | Assumed available as a major international gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed by role; desk hours/handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DTTA sits on the coastal plain adjoining the Lake of Tunis at 22 ft AMSL, close to the historic site of Carthage. No close-in high terrain is expected to affect arrival/departure paths — this is treated as a non-issue field for terrain, though the sector MSA has not been independently verified from a primary source this pass.

### 3.2 Airborne conflict / traffic 🟧
As Tunisia's principal international gateway, DTTA carries the country's heaviest traffic load; a radar approach service is assumed for a field of this size but not independently confirmed. Cross-ref the [Africa airspace brief](../../../../airspace/africa.md) for the **Tunis (DTTC)** FIR — a national FIR at the Maghreb/Mediterranean seam of the AFI region — and general regional airspace structure. DTTA also sits at the hub of this K Global Tunisia sub-network, with all three secondary Tunisian fields ([DTTJ](../dttj/index.md), [DTNH](../dtnh/index.md), [DTMB](../dtmb/index.md)) naming it as a preferred alternate.

### 3.3 Runway excursion 🟧
**RWY 29 carries a displaced threshold of approximately 200 m**, reducing the usable landing distance on that runway end below the full 2,840 m physical length — a genuine LDA-limited case per template guidance. No other displaced thresholds are noted at tier-4 for 01/19 or RWY 11. Exact declared-distance figures (TORA/TODA/ASDA/LDA) are not confirmed from a primary source — treat as **not published / verify** pending an AIP AD 2 DTTA cross-check.

### 3.4 Weather threat 🟧
General Mediterranean-coastal climatology applies: a hot, dry, dust-laden sirocco-type southerly wind can affect visibility and gusts in season, and winter frontal passages bring gusty westerly/north-westerly winds and rain. No field-specific frequency/severity statistic obtained this pass — treat as general regional climatology pending a primary MET source. See §14.

### 3.5 Operational considerations 🟧
The defining planning items are: (1) the **RWY 29 displaced threshold** (§3.3) — confirm the exact reduced LDA before planning a landing on that runway end; (2) **CAT III capability** claimed at the network level but not independently verified against a primary minima table; and (3) the general absence of independently-sourced AIP data this pass — most of §2's flags are currency/verification items rather than confirmed safety-critical gaps, but they should be closed before this brief is treated as Verified.

---

## 4. Cautions & Warnings

- **RWY 29 threshold is displaced ~200 m** — do not assume the full 2,840 m physical length is available for landing on that runway end; confirm the exact declared LDA before planning.
- **Sirocco-type dust/wind events** are a recognised Maghreb-regional hazard — expect reduced visibility and gusty conditions in season; confirm current TAF/SIGMET at planning.
- Multiple open verification items (§18) — this brief has **not** been through a primary-AIP cross-check; treat quantitative fields (declared distances, RFF, curfew, minima) as provisional until closed.
- CAT III capability is asserted at the network/VAMSYS level (task brief) — **do not** treat this as an AIP-confirmed fact without a current-AIRAC cross-check.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; the standing crew-briefing item is the **RWY 29 displaced threshold** (§3.3). 🟧
- **Crew-qualification gate:** If CAT III capability is confirmed on the current chart, standard CAT II/III currency requirements would apply — not independently confirmed this pass. 🟧
- **Operating restrictions / bans:** None found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival for the country's main gateway; no special state permit noted beyond ordinary overflight/landing-permit practice for Tunisia (see the [Africa airspace brief](../../../../airspace/africa.md) §9 on the general African overflight-permit picture). 🟧
- **Operations notes:** ANSP/airport authority — **OACA (Office de l'Aviation Civile et des Aéroports)**, headquartered on the airport property.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — assumed H24 given gateway status | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as the principal gateway; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed by role; hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01/19 | 3,200 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | No displaced threshold noted |
| 11 | 2,840 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | |
| 29 | 2,840 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | **Reduced — threshold displaced ~200 m** 🟧 | Confirm exact LDA against AIP before planning |

*Source: OurAirports runway extract (retrieved 2026-07-26) — physical length/width/surface plus the RWY 29 displaced-threshold figure. No full declared-distance table or PCN was reachable this pass; treat all distance fields as provisional pending a primary AIP AD 2 DTTA cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Tunis ATIS | 118.675 | Not published / verify | `[OurAirports]` |
| CTAF | — | 118.500 | Not published / verify | `[OurAirports]` |
| Ground | Tunis Ground | 121.900 | Not published / verify | `[OurAirports]` |
| Tower | Tunis Tower | 118.100 | Not published / verify | `[OurAirports]` |
| Approach | Tunis Approach | 121.200 | Not published / verify | `[OurAirports]` |
| Centre / FIR | Not published / verify | — | — | Tunis (DTTC) FIR — see [Africa airspace brief](../../../../airspace/africa.md) 🟧 |

*Source: OurAirports frequency extract (retrieved 2026-07-26) — tier-4, not independently AIP-cross-checked. Treat all values as provisional.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | TUC (Tunis) | 116.50 | Not published / verify | On field (0.2 nm ENE) `[OurAirports]` |
| NDB | KDN (Tunis) | 386 kHz | Not published / verify | ~4.3 nm ESE `[OurAirports]` |
| NDB | TS (Tunis) | 325 kHz | Not published / verify | ~5.5 nm NNE `[OurAirports]` |
| ILS | Not published / verify 🟧 | — | — | CAT III capability asserted at network level (task brief); no ILS ident/frequency/category confirmed from a primary source this pass |

*Source: OurAirports closest-navaids extract (retrieved 2026-07-26) — tier-4. No ILS data was reachable; this is a material gap for a field carrying a CAT III designation and is carried to §18.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 assumed — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — with 01/19 as the longer, presumably preferred runway and 11/29 as secondary (with its RWY 29 displaced threshold), wind/config logic should be confirmed. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 01/19, 11/29 | Not published / verify 🟧 | — | — | CAT III capability asserted at network level; specific approach names/minima not confirmed |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain not confirmed as a driver at this low-lying coastal field; re-sequencing around the busiest traffic bank in the Tunisia sub-network is the more likely operative concern.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the general AFI/Maghreb PBN picture.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** Not published / verify; no slot-coordination level confirmed. 🟧
- **De-icing:** Not applicable / not expected at this coastal, near-sea-level Mediterranean field — not independently confirmed as NIL.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — principal national gateway, widebody-capable stand/gate assignment not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — confirm with Ground on the day.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate; prevailing wind direction not independently sourced this pass.
- **Seasonal hazards:** A sirocco-type hot, dry, dust-bearing southerly wind affecting the wider Maghreb in season, and winter Mediterranean frontal passages (wind/rain), are general regional hazards; no field-specific statistic obtained.
- **Local effects:** Low-lying site adjoining the Lake of Tunis; local terrain/sea-breeze effects not independently sourced.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. RWY 29 displaced-threshold status), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and the general Maghreb overflight/permit picture in the [Africa airspace brief](../../../../airspace/africa.md). Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate; also the K Global-designated alternate for the other three Tunisian fields in this network. Not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **DAAG** (Algiers) and **GMMN** (Casablanca–Mohammed V) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as the principal Tunisian gateway; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,200 m on 01/19) is non-limiting for any K Global type; the shorter, displaced-threshold-affected 11/29 is the secondary runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific performance consideration identified at this field length/elevation on the primary runway (01/19); confirm any type-specific LDA margin against the RWY 29 displaced threshold before planning that runway end. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (OACA/AIP Tunisia) not reached this pass** — this entire brief rests on tier-4 corroboration (OurAirports, Wikipedia, SkyVector) and should be re-verified against AD 2 DTTA before treating as Verified.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN** — not published / verify; the exact RWY 29 reduced LDA figure is a priority item given the confirmed displaced threshold.
- **RFF category** — not published / verify.
- **ILS/approach minima** — CAT III is asserted at the network/VAMSYS level; no primary-source ILS ident, frequency or sub-category (I/II/III) was found.
- **Mag variation, TA/TL, SIDs/STARs, take-off minima, curfew/slot regime, fuel supplier/hours, handling agent, stand/terminal assignment, noise procedures** — none confirmed in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DTTA/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid tier-4 baseline, incl. RWY 29 displaced-threshold figure.*
- Wikipedia — "Tunis–Carthage International Airport" — https://en.wikipedia.org/wiki/Tunis%E2%80%93Carthage_International_Airport (retrieved 2026-07-26). *Context corroboration; no operator/airline names carried into this brief per governance.*
- SkyVector — https://skyvector.com/airport/DTTA (retrieved 2026-07-26, pointer only, not separately fetched for data).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
