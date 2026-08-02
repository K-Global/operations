# DGAA — Kotoka Intl · Airport Briefing

**DGAA / ACC** · Accra, Greater Accra Region, Ghana · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Ghana GCAA AIP/public-source build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Ghana Civil Aviation Authority (GCAA) AIP and public aeronautical/operator sources; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N05°36′19″ / W000°10′00″ (5.605190, -0.166786) `[OurAirports]` |
| Field elevation | **205 ft / 62 m AMSL** |
| Mag variation | 🟧 Not published / verify against current AIRAC |
| Time zone | UTC+0 (GMT, no DST) |
| Runway(s) | **03/21** — 3,403 × 61 m (11,165 × 200 ft), asphalt, paved, lighted |
| Preferential runway | 🟧 Single-runway field — no preferential-runway choice; config is landing/departure-direction only, wind-dependent |
| Longest LDA | RWY 03 full length ~3,403 m; **RWY 21 LDA reduced — threshold displaced 411 m (1,349 ft)**, see §7 🟧 |
| Approaches | 🟧 Not confirmed this pass — historically ILS-equipped on one runway direction; verify current AIRAC (see §9/§10) |
| RFF category | 🟧 Not published / verify — a full-service West-African gateway handling widebody long-haul (incl. reported A380-capable operations), so a high ICAO category is expected but not sourced |
| Control type | Radar/procedural mix expected around Accra TMA; not independently confirmed — see [Africa airspace brief](../../../../airspace/africa.md) 🟧 |
| Elevation class | Near sea-level (205 ft) — **not** hot-and-high; coastal field |
| Special-airport status | 🟧 Not operator-categorised as restricted in reachable sources; **joint civil/military field** — co-located with a Ghana Air Force base, see §5 |
| Customs / PoE | **Yes** — Terminal 3 international hall; hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DBBB, DIAP** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Coastal, low-lying Accra Plain — no close-in high terrain relevant to arrival/departure/missed-approach paths. |
| Runway length vs fleet perf | 🟩 | 3,403 m is ample for K Global narrowbody and widebody types on RWY 03; RWY 21's displaced threshold reduces usable LDA — see §7. |
| Approach availability / minima | 🟧 | Not confirmed from a primary source this pass — a single-runway international gateway of this size is expected to have at least one precision/APV approach; verify current AIRAC. |
| Airspace / traffic / control | 🟧 | Busiest gateway in the West-Africa/Gulf-of-Guinea network per the continental brief; exact control type (radar vs procedural) around the Accra TMA not independently confirmed. |
| Weather / seasonal hazard | 🟧 | **Harmattan dust haze (Nov–Mar)** is the defining regional hazard; **heavy tropical rain** implicated in a historical runway-excursion accident (§3.3/§4). |
| Curfew / slots / hours | 🟧 | No curfew/slot regime found in reachable sources — assumed unrestricted H24 major-gateway operation; not independently confirmed. |
| RFF category vs our types | 🟧 | Not published — confirm adequacy for K Global widebody types before planning. |
| Fuel availability | 🟧 | Jet A-1 assumed available as the country's primary international gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | Terminal 3 international hall confirmed; desk hours, handling agent(s) not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DGAA sits at 205 ft AMSL on the flat, low-lying Accra coastal plain. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths — a non-issue field for CFIT. Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
Accra is the principal international gateway for Ghana and one of the busier terminals in the Gulf-of-Guinea corridor, handling sustained long-haul widebody, regional and domestic traffic through a single runway. The field is co-located with a Ghana Air Force installation (transport and helicopter squadrons), which adds a military-traffic dimension to the local flow. Exact control type (radar vs procedural) and sectorisation around the Accra TMA are not independently confirmed this pass — treat as a mixed environment pending live confirmation. Cross-ref the [Africa airspace brief](../../../../airspace/africa.md) and name the controlling FIR — **Accra (DGAC)** — in all planning.

### 3.3 Runway excursion 🟥
This is the field's most concrete, sourced hazard. **RWY 21's landing threshold is displaced 411 m (1,349 ft)**, materially reducing usable LDA in that direction — brief the correct displaced-threshold picture before accepting a RWY 21 landing clearance. The field's public accident history includes **more than one runway-excursion event**, including a landing overrun in heavy rain that ran through the perimeter into an adjacent area with fatalities on the ground, a separate landing excursion, and a takeoff excursion into the perimeter fence — a recurring pattern that points to **wet-runway braking action and single-runway margin** as the standing excursion threat here, not a one-off. Confirm current runway friction/grooving status and current-AIRAC declared distances before every operation, and brief a firm go-around gate for any unstable wet-runway approach.

### 3.4 Weather threat 🟧
**Harmattan dust haze (approx. Nov–Mar)** is the defining regional hazard along this stretch of coast, degrading visibility in the dry season. The wet season brings **heavy tropical downpours** — directly implicated in the field's historical runway-excursion accident record (§3.3) — and the standard Gulf-of-Guinea convective/thunderstorm risk. No DGAA-specific frequency statistics were found for either hazard this pass; treat as general regional climatology pending a sourced figure. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) the **RWY 21 displaced threshold** (§3.3/§7) — always confirm which runway direction is in use and the resulting LDA; (2) the **single-runway, joint civil/military field** — expect shared-use considerations with the co-located Air Force installation; (3) **RFF category and exact approach minima are not confirmed in reachable public sources** — both are open items (§18) that should be closed before treating this brief as verified for widebody long-haul planning.

---

## 4. Cautions & Warnings

- **RWY 21 landing threshold is displaced 411 m (1,349 ft)** — do not assume full-length LDA in that direction; confirm current AIP figure.
- **Wet-runway excursion risk is a documented pattern at this field** (multiple historical runway-excursion events, including one fatal-on-the-ground overrun in heavy rain) — hold a firm unstable-approach/go-around discipline, especially in wet-season convective weather.
- **Single runway (03/21)** — no crosswind runway option; a strong crosswind or a runway-blocking event has no on-field alternative.
- **Joint civil/military field** — a Ghana Air Force installation shares the airfield; expect occasional military traffic/ramp activity.
- **Harmattan dust season (Nov–Mar)** can reduce visibility with limited warning — check current TAF/visibility trend before a marginal-weather arrival.
- RFF category, exact ATC frequencies beyond APP/GND/TWR, and current-AIRAC approach minima are **not confirmed** in reachable sources — treat as 🟧 pending verification (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. The standing crew-briefing items are the **RWY 21 displaced threshold** and the **wet-runway excursion history** (§3.3). 🟧
- **Crew-qualification gate:** None identified in reachable sources — confirm no additional currency requirement against current company route qualification data. 🟧
- **Operating restrictions / bans:** No curfew, RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival for a national gateway; no special state permit identified for scheduled operations. 🟩
- **Operations notes:** Airport operator — **Ghana Airports Company Limited (GACL)**; regulator/ANSP — **Ghana Civil Aviation Authority (GCAA)**. The field is co-located with **Air Force Base Accra** (Ghana Air Force transport and helicopter squadrons) — a joint civil/military aerodrome.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | 🟧 Not published / verify — assumed H24 given gateway status |
| AD operating hours | 🟧 Not published / verify — assumed H24 |
| Night / curfew restrictions | 🟧 None found in reachable sources — not independently confirmed as "none" |
| RFF category | 🟧 Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as the primary national gateway; supplier/hours not confirmed | 🟧 |
| PCN | 🟧 Not published / verify | 🟧 |
| Customs | **Yes** — Terminal 3 international hall; exact hours not confirmed | 🟧 |
| Handling / FBO | 🟧 Not confirmed; Terminal 1 (former passenger terminal) reported under conversion to an FBO facility | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03 | 3,403 × 61 m | Asphalt, paved, lighted / PCN not published 🟧 | 🟧 not published | 🟧 not published | 🟧 not published | ~3,403 m (full length, no displacement reported) | |
| 21 | 3,403 × 61 m | Asphalt, paved, lighted / PCN not published 🟧 | 🟧 not published | 🟧 not published | 🟧 not published | **Reduced — threshold displaced 411 m (1,349 ft)**; usable LDA approx. **2,992 m** (arithmetic from displacement, not an AIP-published LDA figure — 🟧 verify) | **Displaced threshold — see §3.3/§4** |

*Source: OurAirports runway extract (retrieved 2026-07-26) cross-checked against Ghana GCAA public references. TORA/TODA/ASDA figures and the exact published RWY 21 LDA are **not confirmed from a primary AIP table this pass** — the LDA shown is a derived estimate from the reported displacement distance, not a sourced declared-distance figure. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | 🟧 Not published / verify | — | — | |
| Delivery | 🟧 Not published / verify | — | — | |
| Ground | Accra Ground | 121.9 | 🟧 not confirmed | |
| Tower | Accra Tower | 119.1 | 🟧 not confirmed | |
| Approach | Accra Approach | 119.5 | 🟧 not confirmed | |
| Centre / FIR | Accra (DGAC) | Per current AIRAC | 🟧 | See [Africa airspace brief](../../../../airspace/africa.md) — no dedicated Accra FIR brief exists yet in this tree (§18) |

*Source: OurAirports frequency extract (retrieved 2026-07-26). Treat as 🟧 pending a live-AIRAC cross-check — ATIS/Delivery not found in reachable sources.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/DME or VOR/DME | 🟧 Not published / verify | 🟧 | 🟧 | A gateway of this size and long-haul widebody profile is expected to carry at least one instrument approach aid, but no ident/frequency was confirmed in reachable public sources this pass |

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not published / verify current chart.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Single-runway field — landing runway is wind-direction-driven only (03 vs 21), no preferential/noise-based choice.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 03 | 🟧 Not confirmed this pass | Verify current AIRAC |
| 21 | 🟧 Not confirmed this pass | **Displaced threshold — reduced LDA, see §7** |

- **STARs (names only):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning.
- **LVP:** 🟧 Not published / verify — harmattan dust-haze reduced-visibility events are the plausible trigger scenario pending a sourced procedure.
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative concern is confirming current approach/minima data and joint civil/military traffic sequencing.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning.
- **RNP / climb-gradient requirements:** 🟧 Not confirmed — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the network-wide PBN framework applied here.
- **Take-off minima:** 🟧 Not published / verify.
- **Start-up / push-back:** 🟧 Not confirmed — coordinate with Accra Ground (121.9) per standard practice.
- **ATC slot / CTOT & clearance:** 🟧 No slot-coordination regime identified in reachable sources — assumed non-coordinated; not independently confirmed.
- **De-icing:** **NIL** — coastal tropical field, no de-icing requirement. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** 🟧 Not published / verify.
- **Night noise / dB limits:** 🟧 Not published / verify.
- **Engine run-up restrictions:** 🟧 Not published / verify.
- **Reverse thrust / idle-reverse policy:** 🟧 Not published / verify.

---

## 13. Ground operations

- **Stands for our types:** 🟧 Not confirmed — Terminal 3 (opened 2018, ~$274M project) is built for widebody long-haul international service and is reported to accommodate very-large-aircraft (A380-class) operations; exact stand/gate count and Code E/F allocation not sourced. | 🟧
- **Push-back:** 🟧 Not confirmed — coordinate with Accra Ground.
- **Standard taxi routes:** 🟧 Not confirmed — confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none."
- **Follow-me:** 🟧 Not confirmed — verify locally.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical coastal climate on the Accra Plain; Gulf-of-Guinea maritime influence.
- **Seasonal hazards:** **Harmattan dust haze (approx. Nov–Mar)** reduces visibility along this stretch of West African coast; the wet season brings **heavy convective downpours** — a factor directly implicated in the field's historical runway-excursion accident record (§3.3). No DGAA-specific frequency/severity statistic found this pass.
- **Local effects:** Coastal location; no notable terrain-driven local effect (flat plain).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, RFF status, lighting, obstacle/crane, GPS/RAIM, harmattan-related visibility advisories. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / West-Africa Gulf-of-Guinea network gateway.
- **Nearest suitable alternates:** Company preferred alternates **DBBB** (Cotonou) and **DIAP** (Abidjan) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. Both are cross-country from Ghana; confirm overflight/permit status before planning either as a working alternate.
- **Fuel-uplift notes:** Jet A-1 assumed available as the country's primary international gateway; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length (3,403 m) is non-limiting for K Global narrowbody/widebody types on RWY 03; mind the reduced LDA on RWY 21 (§7). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration beyond the general network fleet reference — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning items at this field are the **RWY 21 displaced threshold** and **confirming RFF category** for the largest widebody type planned here, not aircraft performance in the general case.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RFF category** — not published in reachable sources; confirm adequacy for the largest K Global type planned into DGAA.
- **Declared distances (TORA/TODA/ASDA)** and the exact published RWY 21 LDA — only the threshold-displacement distance (411 m) is sourced; the LDA shown in §7 is a derived estimate, not an AIP figure.
- **PCN / pavement strength** — not published in reachable sources.
- **Approaches, SIDs/STARs, transition altitude/level, take-off minima** — none confirmed from a primary AIP table this pass; pull the current-AIRAC procedure set at planning.
- **ATIS/Delivery frequencies and ATS hours** — not found in reachable sources (only APP/GND/TWR sourced).
- **Navaid inventory (ILS/VOR/DME ident and frequency)** — not confirmed.
- **Slot/curfew regime** — assumed none; not independently confirmed.
- **Stand/gate allocation for widebody long-haul, including any Code F consideration** — Terminal 3 is reported A380-capable but exact stand count/allocation not sourced.
- **Administrative note:** public reporting indicates the field's official designation reverted from "Kotoka International Airport" to **"Accra International Airport"** in February 2026 — confirm current VAMSYS/AIP naming and whether this affects any published ident cross-reference.
- **Accra (DGAC) FIR brief does not yet exist** as a dedicated document in this tree — only the continental [Africa airspace brief](../../../../airspace/africa.md) covers it; build if the network expands.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DGAA/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency extract.*
- Wikipedia — "Accra International Airport" (formerly Kotoka International Airport) — https://en.wikipedia.org/wiki/Kotoka_International_Airport (retrieved 2026-07-26). *Terminal structure, operator/regulator, name-change history, accident record corroboration — airline/operator names in the source are not repeated here per governance.*
- Ghana Civil Aviation Authority — https://www.gcaa.com.gh/ (retrieved 2026-07-26). *Regulator of record; primary AIP not independently re-pulled this pass.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
