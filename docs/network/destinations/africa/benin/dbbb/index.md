# DBBB — Bernardin Gantin · Airport Briefing

**DBBB / COO** · Cotonou, Atlantique Department, Benin · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — ASECNA (AIP Benin)/public-source build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public aeronautical sources cross-checked against the ASECNA-published AIP framework for Benin (no primary eAIP page was reachable this pass); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N06°21′26″ / E002°23′04″ (6.357230, 2.384350) `[OurAirports]` |
| Field elevation | **19 ft / 6 m AMSL** |
| Mag variation | 🟧 Not published / verify against current AIRAC |
| Time zone | UTC+1 (WAT, no DST) |
| Runway(s) | **06/24** — 2,410 × 45 m (7,906 × 148 ft), asphalt, paved, lighted |
| Preferential runway | 🟧 Single-runway field — no preferential-runway choice; wind-dependent config only |
| Longest LDA | RWY 24 full length ~2,410 m; **RWY 06 LDA reduced — threshold displaced 38 m (125 ft)**, see §7 🟧 |
| Approaches | 🟧 Not confirmed this pass — verify current AIRAC (see §9/§10) |
| RFF category | 🟧 Not published / verify |
| Control type | 🟧 Not confirmed — West-African coastal gateway; treat as mixed radar/procedural pending confirmation, consistent with the regional pattern |
| Elevation class | Near sea-level (19 ft) — **not** hot-and-high; coastal field |
| Special-airport status | 🟧 Not operator-categorised as restricted in reachable sources |
| Customs / PoE | **Yes** — the country's largest airport and primary international entry point; hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DGAA, DNMM** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Coastal, low-lying Bight-of-Benin plain — no close-in high terrain relevant to arrival/departure/missed-approach paths. |
| Runway length vs fleet perf | 🟧 | 2,410 m is adequate for narrowbody types; **confirm field-length performance for any widebody type** planned here. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). |
| Approach availability / minima | 🟧 | Not confirmed from a primary source this pass; verify current AIRAC. |
| Airspace / traffic / control | 🟧 | Control type not independently confirmed; the field sits within the **ASECNA-administered West African airspace bloc** — see §3.2. |
| Weather / seasonal hazard | 🟧 | **Harmattan dust haze (Nov–Mar)** and standard wet-season convective activity apply regionally; no field-specific statistic sourced. |
| Curfew / slots / hours | 🟧 | No curfew/slot regime found in reachable sources — not independently confirmed as "none." |
| RFF category vs our types | 🟧 | Not published — confirm adequacy for the planned type. |
| Fuel availability | 🟧 | Assumed available as the country's primary gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | Confirmed as the primary national Port of Entry; desk hours/handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DBBB sits at 19 ft AMSL on the low-lying Bight-of-Benin coastal plain. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths — a non-issue field for CFIT. Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
Cotonou is Benin's largest airport and primary international entry point, with flights connecting across Africa and to Europe. It sits within the **ASECNA** framework of pooled air-navigation services covering a bloc of West/Central African states. Per the task assignment for this field, the controlling FIR is **Niamey (DRRR)** — name this FIR in all planning and cross-ref the [Africa airspace brief](../../../../airspace/africa.md) for the WACAF Free Route Airspace (FL250+), RNAV 5 enroute and HF/AFI IFBP (126.9 MHz) framework that applies across ASECNA airspace. Exact control type (radar vs procedural) at the field itself is not independently confirmed — treat as procedural pending confirmation, consistent with the regional pattern. 🟧 *(Note: some public references place Benin's terminal airspace within the Accra FIR structure rather than Niamey — this has not been reconciled against a primary AIP source this pass; see §18.)*

### 3.3 Runway excursion 🟧
**RWY 06's landing threshold is displaced 38 m (125 ft)**, a modest but real LDA reduction — confirm the current published figure before accepting a RWY 06 landing clearance. No runway-excursion accident history was found in reachable sources for this field specifically.

### 3.4 Weather threat 🟧
**Harmattan dust haze (approx. Nov–Mar)** is the defining regional hazard along this stretch of West African coast, degrading visibility in the dry season. The wet season brings standard Gulf-of-Guinea convective/thunderstorm risk. No DBBB-specific frequency or severity statistic was found this pass. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) the **RWY 06 displaced threshold** (§3.3/§7) — confirm which runway direction is in use and the resulting LDA; (2) **RFF category and exact approach minima are not confirmed** in reachable public sources — both are open items (§18); (3) a **replacement-airport project at Glo-Djigbé** has been publicly discussed since 1974 with construction announced and stalled more than once — not an operational factor today, but a watch item for any long-term route-planning horizon.

---

## 4. Cautions & Warnings

- **RWY 06 landing threshold is displaced 38 m (125 ft)** — do not assume full-length LDA in that direction; confirm current AIP figure.
- **Single runway (06/24)** — no crosswind runway option.
- **Harmattan dust season (Nov–Mar)** can reduce visibility with limited warning — check current TAF/visibility trend before a marginal-weather arrival.
- RFF category, exact ATC frequencies beyond APP/TWR, and current-AIRAC approach minima are **not confirmed** in reachable sources — treat as 🟧 pending verification (§18).
- One reported frequency entry (658.6 MHz, tagged "A/G Voice") falls outside the standard VHF aviation band and is very likely a source data-entry artifact — do not rely on it (§8).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. The standing crew-briefing item is the **RWY 06 displaced threshold** (§3.3). 🟧
- **Crew-qualification gate:** 🟧 None identified in reachable sources — confirm against current company route-qualification data.
- **Operating restrictions / bans:** 🟧 None found in reachable sources — verify current AIRAC.
- **Overflight / entry / permits:** 🟧 Standard West African international arrival expected; confirm current Benin overflight/landing permit requirements before operating.
- **Operations notes:** The field operates under the **ASECNA** air-navigation-services framework applicable to Benin; the country's national AIP is published within the ASECNA eAIP system.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | 🟧 Not published / verify — assumed H24 given gateway status | 🟧 |
| AD operating hours | 🟧 Not published / verify | 🟧 |
| Night / curfew restrictions | 🟧 None found in reachable sources — not independently confirmed | 🟧 |
| RFF category | 🟧 Not published / verify | 🟧 |
| Fuel | 🟧 Jet A-1 assumed available as the primary national gateway; supplier/hours not confirmed | 🟧 |
| PCN | 🟧 Not published / verify | 🟧 |
| Customs | **Yes** — primary national Port of Entry; exact hours not confirmed | 🟧 |
| Handling / FBO | 🟧 Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | 2,410 × 45 m | Asphalt, paved, lighted / PCN not published 🟧 | 🟧 not published | 🟧 not published | 🟧 not published | **Reduced — threshold displaced 38 m (125 ft)**; usable LDA approx. **2,372 m** (arithmetic from displacement, not an AIP-published LDA figure — 🟧 verify) | **Displaced threshold — see §3.3/§4** |
| 24 | 2,410 × 45 m | Asphalt, paved, lighted / PCN not published 🟧 | 🟧 not published | 🟧 not published | 🟧 not published | ~2,410 m (full length, no displacement reported) | |

*Source: OurAirports runway extract (retrieved 2026-07-26). TORA/TODA/ASDA figures and the exact published RWY 06 LDA are **not confirmed from a primary AIP table this pass** — the LDA shown is a derived estimate from the reported displacement distance, not a sourced declared-distance figure. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | 🟧 Not published / verify | — | — | |
| Delivery | 🟧 Not published / verify | — | — | |
| Ground | 🟧 Not published / verify | — | — | |
| Tower | Cotonou Tower | 118.7 and/or 125.9 | 🟧 not confirmed | Two tower frequencies reported in the source data; not independently reconciled |
| Approach | Cotonou Approach | 125.9 | 🟧 not confirmed | Same frequency also reported as a Tower frequency — 🟧 confirm current AIRAC split |
| A/G (advisory) | 🟧 Reported | 658.6 | 🟧 | **Falls outside the standard 118–137 MHz VHF aviation band — very likely a data-entry artifact; do not treat as reliable** |
| Centre / FIR | Niamey (DRRR), ASECNA | Per current AIRAC | 🟧 | See [Africa airspace brief](../../../../airspace/africa.md) — no dedicated Niamey FIR brief exists yet in this tree (§18) |

*Source: OurAirports frequency extract (retrieved 2026-07-26). Treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/VOR/DME | 🟧 Not published / verify | 🟧 | 🟧 | Navaid inventory not confirmed in reachable public sources this pass |

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not published / verify current chart.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Single-runway field — landing runway is wind-direction-driven only (06 vs 24).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 06 | 🟧 Not confirmed this pass | **Displaced threshold — reduced LDA, see §7** |
| 24 | 🟧 Not confirmed this pass | Verify current AIRAC |

- **STARs (names only):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning.
- **LVP:** 🟧 Not published / verify — harmattan dust-haze reduced-visibility events are the plausible trigger scenario.
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative concern is confirming current approach/minima data.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning.
- **RNP / climb-gradient requirements:** 🟧 Not confirmed — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the network-wide PBN framework (RNAV 5 enroute per the ASECNA/WACAF structure).
- **Take-off minima:** 🟧 Not published / verify.
- **Start-up / push-back:** 🟧 Not confirmed.
- **ATC slot / CTOT & clearance:** 🟧 No slot-coordination regime identified — assumed non-coordinated.
- **De-icing:** **NIL** — coastal tropical field. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** 🟧 Not published / verify.
- **Night noise / dB limits:** 🟧 Not published / verify.
- **Engine run-up restrictions:** 🟧 Not published / verify.
- **Reverse thrust / idle-reverse policy:** 🟧 Not published / verify.

---

## 13. Ground operations

- **Stands for our types:** 🟧 Not confirmed — the field is described as Benin's largest airport and primary international gateway; exact stand/gate count and Code C/D/E allocation not sourced. | 🟧
- **Push-back:** 🟧 Not confirmed.
- **Standard taxi routes:** 🟧 Not confirmed — confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none."
- **Follow-me:** 🟧 Not confirmed.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical coastal climate on the Bight-of-Benin plain; Gulf-of-Guinea maritime influence.
- **Seasonal hazards:** **Harmattan dust haze (approx. Nov–Mar)** reduces visibility along this stretch of West African coast; the wet season brings standard convective downpours. No DBBB-specific statistic found this pass.
- **Local effects:** Coastal location; no notable terrain-driven local effect (flat plain).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, RFF status, lighting, obstacle/crane, GPS/RAIM, harmattan-related visibility advisories, ASECNA route/FRA point-set notices. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — West-Africa Gulf-of-Guinea network field.
- **Nearest suitable alternates:** Company preferred alternates **DGAA** (Accra) and **DNMM** (Lagos) `[VAMSYS mirror 2026-07-26]` — both cross-country from Benin; confirm suitability, runway/RFF adequacy, current minima and overflight/permit status per leg.
- **Fuel-uplift notes:** 🟧 Assumed available as the country's primary gateway; specific into-plane provider/hours not confirmed. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length (2,410 m) is adequate for narrowbody types; confirm widebody field-length performance before scheduling. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration beyond the general network fleet reference — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning items at this field are the **RWY 06 displaced threshold** and confirming field-length adequacy for the largest type planned here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RFF category, PCN, TORA/TODA/ASDA** — none published in reachable sources.
- **Exact published RWY 06 LDA** — only the threshold-displacement distance (38 m) is sourced; the LDA shown in §7 is a derived estimate.
- **Approaches, SIDs/STARs, transition altitude/level, take-off minima** — none confirmed from a primary AIP table this pass.
- **ATIS/Ground/Delivery frequencies** — not found in reachable sources.
- **Navaid inventory** — not confirmed.
- **FIR assignment reconciliation** — this brief uses **Niamey (DRRR)** per the network assignment for this field; some public references place Benin's terminal airspace within the Accra FIR structure. Reconcile against a primary AIP source.
- **A/G frequency 658.6 MHz** — falls outside the standard VHF aviation band; very likely a source data-entry error.
- **Niamey (DRRR) FIR brief does not yet exist** as a dedicated document in this tree — only the continental [Africa airspace brief](../../../../airspace/africa.md) covers it.
- **Glo-Djigbé replacement-airport project** — publicly discussed since 1974, stalled multiple times; watch item for any long-term route-planning horizon, not an operational factor today.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DBBB/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency extract.*
- Wikipedia — "Cadjehoun Airport" (Cardinal Bernardin Gantin International Airport) — https://en.wikipedia.org/wiki/Cadjehoun_Airport (retrieved 2026-07-26). *History, name-change (2021), Glo-Djigbé replacement-airport project — airline/operator names in the source are not repeated here per governance.*
- ASECNA — Agency for Aerial Navigation Safety in Africa and Madagascar (AIP/FIR framework applicable to Benin) — https://en.wikipedia.org/wiki/Agency_for_Aerial_Navigation_Safety_in_Africa_and_Madagascar (retrieved 2026-07-26). *Regional ANSP context; primary ASECNA eAIP page for DBBB was not reachable this pass.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
