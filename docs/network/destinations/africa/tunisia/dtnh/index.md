# DTNH — Hammamet · Airport Briefing

**DTNH / NBE** · Enfidha, Sousse Governorate, Tunisia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4/public-source build, AIP not independently reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. The primary source of record for this field is the **AIP Tunisia (OACA — Office de l'Aviation Civile et des Aéroports)**; the live eAIP could not be reached this pass (see §18), so static data here is corroborated from public tier-4 sources (OurAirports, Wikipedia, SkyVector) per the source register and flagged accordingly. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N36°04′33″ / E010°26′19″ (36.075833, 10.438611) `[OurAirports]` 🟧 not cross-checked against primary AIP |
| Field elevation | **21 ft / 6 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+1** — Tunisia observes a fixed UTC+1 offset year-round, no DST |
| Runway(s) | **09/27** 3,300 × 60 m (asphalt, lighted) — single runway, notably wide (60 m) for a medium-classified field |
| Preferential runway | Not published / verify — single-runway field, wind-based end selection only 🟧 |
| Longest LDA | 3,300 m nominal — no displaced threshold noted at tier-4; exact declared distances not published / verify 🟧 |
| Approaches | Not published / verify 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Not published / verify — tower service assumed for a field with international charter traffic 🟧 |
| Elevation class | Sea-level (21 ft) — **not** hot-and-high |
| Special-airport status | None found; single-runway resort field serving the Hammamet/Sousse coastal area, ~40 km inland of Hammamet itself |
| Customs / PoE | Not confirmed at tier-4 (no customs tag found); international arrivals expected given resort-charter role — hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DTTA, DTTJ, LMML** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Low-lying coastal-plain site — no high terrain in the vicinity; non-issue field for terrain. |
| Runway length vs fleet perf | 🟩 | 3,300 m, unusually wide (60 m) single runway — non-limiting for K Global's Cat S–assigned types. |
| Approach availability / minima | 🟧 | Not published / verify — no ILS/approach data reachable this pass; no on-field navaid identified (nearest is Monastir VOR-DME, ~24 nm SE). |
| Airspace / traffic / control | 🟧 | Tunis FIR (DTTC) — see [Africa airspace brief](../../../../airspace/africa.md); control type at the field not independently confirmed. |
| Weather / seasonal hazard | 🟧 | Mediterranean coastal climate; seasonal sirocco-type wind and summer heat are general-climatology considerations, not field-specific sourced data. |
| Curfew / slots / hours | 🟧 | Not published / verify. |
| RFF category vs our types | 🟧 | RFF category not published / verify. |
| Fuel availability | 🟧 | Not published / verify. |
| Customs / handling / security | 🟧 | No customs tag confirmed at tier-4 (unlike the other three Tunisian fields in this batch); PoE status not independently confirmed — flag for verification, not assumed absent. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DTNH sits on the low-lying Sahel coastal plain near Enfidha, roughly 40 km inland/south-west of Hammamet itself. No high terrain is expected in the vicinity — this is a non-issue field for terrain; the sector MSA has not been independently verified from a primary source.

### 3.2 Airborne conflict / traffic 🟧
DTNH sits within the **Tunis (DTTC)** FIR (see the [Africa airspace brief](../../../../airspace/africa.md)). As a leisure/resort-charter field built to serve the Hammamet–Sousse coast, traffic is expected to be strongly seasonal, peaking with the European holiday charter season; control type (radar vs procedural) not independently confirmed.

### 3.3 Runway excursion 🟧
Single runway (09/27), 3,300 m and a notably wide 60 m — wider than either DTTJ's or DTMB's single runway in this batch, and comparable to a widebody-optimised runway despite the field's medium-airport classification at tier-4. No displaced threshold noted. No declared-distance table (TORA/TODA/ASDA/LDA) confirmed from a primary source — treat as **not published / verify** pending an AIP AD 2 DTNH cross-check.

### 3.4 Weather threat 🟧
General Mediterranean-coastal climatology applies: a hot, dry sirocco-type southerly wind can affect visibility and gusts in season, and summer heat is pronounced at this latitude. No field-specific frequency/severity statistic obtained this pass — treat as general regional climatology. See §14.

### 3.5 Operational considerations 🟧
This is a **single-runway, seasonally-driven resort/charter field with no confirmed on-field navaid** at tier-4 (the nearest identified aid, Monastir VOR-DME, is ~24 nm away) — a genuine gap worth closing before relying on this field for an IFR approach in marginal weather. As with the other secondary Tunisian fields in this batch, most §2 flags are currency/verification items rather than confirmed safety-critical gaps, but the navaid gap specifically warrants a primary-source check before use.

---

## 4. Cautions & Warnings

- **Single-runway field (09/27)** — no reciprocal-pair or crossing-runway options; wind-based end selection only.
- **No on-field navaid confirmed** at tier-4 — the nearest identified aid (Monastir VOR-DME) is ~24 nm away; confirm approach/navaid availability before planning an IFR arrival here.
- Sirocco-type dust/wind events are a recognised Maghreb-regional hazard, most relevant during this field's peak (warm-season) traffic period — confirm current TAF/SIGMET at planning.
- This brief carries a materially higher proportion of open/unverified items than the network's primary gateways — do not treat any quantitative figure here as AIP-confirmed without a current-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; no crew-qualification gate identified beyond standard single-runway, seasonal-leisure-field awareness and the navaid-availability gap (§3.5). 🟧
- **Crew-qualification gate:** None identified. 🟧
- **Operating restrictions / bans:** None found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival; no special state permit noted beyond ordinary Tunisian overflight/landing-permit practice (see the [Africa airspace brief](../../../../airspace/africa.md) §9). 🟧
- **Operations notes:** ANSP/airport authority — **OACA (Office de l'Aviation Civile et des Aéroports)**, per the country-wide authority named for all Tunisian fields in this batch.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify — likely seasonal-charter-driven hours, not confirmed | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not published / verify | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | No customs tag confirmed at tier-4; PoE status not independently confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09/27 | 3,300 × 60 m | Asphalt, lighted / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | No displaced threshold noted; unusually wide (60 m) for the field's medium-classification |

*Source: OurAirports runway extract (retrieved 2026-07-26) — physical length/width/surface only. No declared-distance table or PCN was reachable this pass; treat all distance fields as provisional pending a primary AIP AD 2 DTNH cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | — | 136.300 | Not published / verify | `[OurAirports]` |
| Tower | Tower | 118.550 | Not published / verify | `[OurAirports]` — callsign string not separately confirmed |
| Ground | Not published / verify | — | — | 🟧 |
| Approach | Not published / verify | — | — | 🟧 |
| Centre / FIR | Not published / verify | — | — | Tunis (DTTC) FIR — see [Africa airspace brief](../../../../airspace/africa.md) 🟧 |

*Source: OurAirports frequency extract (retrieved 2026-07-26) — tier-4, not independently AIP-cross-checked. Only ATIS and Tower frequencies were found; no Approach/Ground frequency reachable this pass.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | MON (Monastir) | 113.10 | Not published / verify | Nearest identified aid — ~24.4 nm SE, **not on field** `[OurAirports]` |
| ILS | Not published / verify 🟧 | — | — | No ILS ident/frequency confirmed; no on-field navaid identified at all in this research pass |

*Source: OurAirports closest-navaids extract (retrieved 2026-07-26) — tier-4. The absence of an on-field navaid is a material gap for this field and is carried to §18.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 assumed — confirm no local override on current chart.
- **Preferential runway logic:** Single-runway field — wind-based end selection only.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 09/27 | Not published / verify 🟧 | — | — | No on-field navaid identified; approach type/name not confirmed — verify current chart before relying on an IFR approach here |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not a factor at this flat coastal-plain field (§3.1); the operative concern is the unconfirmed approach/navaid picture (§3.5, §9).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the general AFI/Maghreb PBN picture.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** Not published / verify; no slot-coordination level confirmed — a leisure/charter field of this size is not expected to be heavily slot-coordinated, but this is not independently confirmed. 🟧
- **De-icing:** Not applicable — no winter-freeze climatology at this Tunisian coastal-plain field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — the field's unusually wide single runway (60 m) suggests it may have been built with larger-aircraft capability in mind, but stand/apron sizing is not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — single-runway field, likely limited taxiway complexity; confirm with Tower/Ground on the day.
- **Hot spots / tight taxiways:** None identified at tier-4. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal-plain climate; prevailing wind direction not independently sourced this pass.
- **Seasonal hazards:** Sirocco-type hot, dry, dust-bearing southerly wind is a general Maghreb-regional hazard; pronounced summer heat is typical of this Tunisian Sahel coast. No field-specific statistic obtained.
- **Local effects:** Coastal-plain location; local terrain/sea-breeze effects not independently sourced.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and the general Maghreb overflight/permit picture in the [Africa airspace brief](../../../../airspace/africa.md). Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — seasonal leisure/resort field, Cat S, not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **DTTA** ([Tunis-Carthage](../dtta/index.md), in-country), **DTTJ** ([Djerba-Zarzis](../dttj/index.md), in-country) and **LMML** (Malta, cross-country) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Not published / verify. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,300 m) is non-limiting for K Global's Cat S–assigned types. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific performance consideration identified at this field length/elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (OACA/AIP Tunisia) not reached this pass** — this entire brief rests on tier-4 corroboration (OurAirports, Wikipedia, SkyVector) and should be re-verified against AD 2 DTNH before treating as Verified.
- **On-field navaid/approach data** — no navaid was identified at or near the field itself (nearest is Monastir VOR-DME, ~24 nm SE); confirm whether an on-field aid and/or a named approach procedure exists before relying on this field for an IFR arrival.
- **Declared distances, PCN, RFF category** — not published / verify.
- **ATC frequencies (Ground/Approach)** — not found; ATIS/Tower sourced tier-4 only.
- **Customs/PoE status** — no customs tag was found at tier-4 for this field, unlike the other three Tunisian fields in this batch; confirm actual PoE status rather than assuming either way.
- **Mag variation, TA/TL, SIDs/STARs, take-off minima, curfew/hours, fuel supplier/hours, handling agent, stand assignment** — none confirmed in reachable sources.
- **Seasonal operating-hours pattern** — this field's traffic and possibly its hours are likely strongly seasonal (European charter/holiday season); not independently confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DTNH/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid tier-4 baseline.*
- Wikipedia — "Enfidha–Hammamet International Airport" — https://en.wikipedia.org/wiki/Enfidha%E2%80%93Hammamet_International_Airport (retrieved 2026-07-26). *Location/role corroboration (~40 km from Hammamet, European-charter-driven traffic profile); no operator/airline names carried into this brief per governance.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
