# DTMB — Monastir · Airport Briefing

**DTMB / MIR** · Monastir, Monastir Governorate, Tunisia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4/public-source build, AIP not independently reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. The primary source of record for this field is the **AIP Tunisia (OACA — Office de l'Aviation Civile et des Aéroports)**; the live eAIP could not be reached this pass (see §18), so static data here is corroborated from public tier-4 sources (OurAirports, Wikipedia, SkyVector) per the source register and flagged accordingly. This is a **newly-built folder** — the field was previously missing from the destination tree as a route endpoint. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N35°45′29″ / E010°45′17″ (35.758099, 10.754700) `[OurAirports]` 🟧 not cross-checked against primary AIP |
| Field elevation | **9 ft / 3 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+1** — Tunisia observes a fixed UTC+1 offset year-round, no DST |
| Runway(s) | **07/25** 2,950 × 45 m (asphalt, lighted) — single runway |
| Preferential runway | Not published / verify — single-runway field, wind-based end selection only 🟧 |
| Longest LDA | 2,950 m nominal — no displaced threshold noted at tier-4; exact declared distances not published / verify 🟧 |
| Approaches | Not published / verify 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Not published / verify — tower/approach service assumed for a field with international charter traffic 🟧 |
| Elevation class | Sea-level (9 ft, the lowest-elevation field in this batch) — **not** hot-and-high |
| Special-airport status | None found; single-runway coastal/resort field serving Monastir and the wider Sousse area |
| Customs / PoE | International/customs role tagged at tier-4 (#customs, matching DTTA and DTTJ); hours not confirmed 🟧 |
| K Global category | **Not set** 🟧 `[VAMSYS mirror 2026-07-26]` — category field is unpopulated in VAMSYS |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DTNH, DTTA, LICD** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | Not published / verify 🟧 — no taxi-time figure given in the VAMSYS mirror for this field |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Low-lying coastal site — no high terrain in the vicinity; non-issue field for terrain. |
| Runway length vs fleet perf | 🟩 | 2,950 m single runway — the shortest in this batch, but non-limiting for K Global's smaller/regional-category types; confirm against the eventually-assigned VAMSYS category. |
| Approach availability / minima | 🟧 | Not published / verify — no ILS/approach data reachable this pass; on-field VOR-DME confirmed (see §9). |
| Airspace / traffic / control | 🟧 | Tunis FIR (DTTC) — see [Africa airspace brief](../../../../airspace/africa.md); control type at the field not independently confirmed. |
| Weather / seasonal hazard | 🟧 | Mediterranean coastal climate; seasonal sirocco-type wind and summer heat are general-climatology considerations, not field-specific sourced data. |
| Curfew / slots / hours | 🟧 | Not published / verify. |
| RFF category vs our types | 🟧 | RFF category not published / verify. |
| Fuel availability | 🟧 | Not published / verify. |
| Customs / handling / security | 🟧 | International/customs role tagged at tier-4; hours/handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DTMB sits on the low-lying Sahel coast at Monastir, adjoining Sousse, at just 9 ft AMSL — the lowest-elevation field in this batch. No high terrain is expected in the vicinity; this is a non-issue field for terrain, though the sector MSA has not been independently verified from a primary source.

### 3.2 Airborne conflict / traffic 🟧
DTMB sits within the **Tunis (DTTC)** FIR (see the [Africa airspace brief](../../../../airspace/africa.md)). As a leisure/resort-charter field serving Monastir and Sousse, traffic is expected to be strongly seasonal, peaking with the European holiday charter season; control type (radar vs procedural) not independently confirmed.

### 3.3 Runway excursion 🟧
Single runway (07/25), 2,950 m — the **shortest physical runway in this five-field batch**. No displaced threshold noted at tier-4. No declared-distance table (TORA/TODA/ASDA/LDA) confirmed from a primary source — treat as **not published / verify** pending an AIP AD 2 DTMB cross-check. Given the shorter length relative to the other fields here, confirm field-length adequacy against whatever type is ultimately assigned to this field once its VAMSYS category is set.

### 3.4 Weather threat 🟧
General Mediterranean-coastal climatology applies: a hot, dry sirocco-type southerly wind can affect visibility and gusts in season, and summer heat is pronounced at this Tunisian Sahel latitude. No field-specific frequency/severity statistic obtained this pass — treat as general regional climatology. See §14.

### 3.5 Operational considerations 🟧
This is a **newly-added folder with the network's shortest runway and an as-yet-unset VAMSYS category** — both are genuine open items rather than confirmed facts, and neither should be assumed favourably. Confirm the eventual K Global category and re-validate runway-length adequacy for whatever type is assigned here before treating this as an active destination. As with the other secondary Tunisian fields, most §2 flags are currency/verification items rather than confirmed safety-critical gaps.

---

## 4. Cautions & Warnings

- **VAMSYS category not yet set** for this field 🟧 — do not assume a category or fleet-suitability assignment; confirm before scheduling.
- **Single-runway field (07/25)**, and the **shortest runway in this batch (2,950 m)** — no reciprocal-pair or crossing-runway options; confirm field-length adequacy for the assigned type.
- Sirocco-type dust/wind events are a recognised Maghreb-regional hazard, most relevant during this field's peak (warm-season) traffic period — confirm current TAF/SIGMET at planning.
- No taxi-in/taxi-out time is populated in the VAMSYS mirror for this field — confirm before using a default planning figure.
- This brief carries a materially higher proportion of open/unverified items than the network's primary gateways — do not treat any quantitative figure here as AIP-confirmed without a current-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; the standing item is the unset VAMSYS category (§4) and the shorter runway (§3.3). 🟧
- **Crew-qualification gate:** None identified beyond confirming type-vs-runway-length suitability once the VAMSYS category is set. 🟧
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
| Customs | International/customs role tagged at tier-4; hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07/25 | 2,950 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | No displaced threshold noted; shortest runway in this batch of five |

*Source: OurAirports runway extract (retrieved 2026-07-26) — physical length/width/surface only. No declared-distance table or PCN was reachable this pass; treat all distance fields as provisional pending a primary AIP AD 2 DTMB cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Monastir ATIS | 113.100 | Not published / verify | `[OurAirports]` — coincides with the on-field VOR-DME frequency (see §9); a VOR-collocated ATIS voice channel is plausible but not independently confirmed |
| Tower | Bourguiba Tower | 118.300 | Not published / verify | `[OurAirports]` |
| Approach | Bourguiba Approach | 119.300 | Not published / verify | `[OurAirports]` |
| Ground | Not published / verify | — | — | 🟧 |
| Centre / FIR | Not published / verify | — | — | Tunis (DTTC) FIR — see [Africa airspace brief](../../../../airspace/africa.md) 🟧 |

*Source: OurAirports frequency extract (retrieved 2026-07-26) — tier-4, not independently AIP-cross-checked. The ATIS/VOR frequency coincidence (113.1) is noted as a curiosity, not a confirmed fact, and is carried to §18.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | MON (Monastir) | 113.10 | Not published / verify | On field (0.4 nm WSW) `[OurAirports]` |
| ILS | Not published / verify 🟧 | — | — | No ILS ident/frequency confirmed from a primary source this pass |

*Source: OurAirports closest-navaids extract (retrieved 2026-07-26) — tier-4.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 assumed — confirm no local override on current chart.
- **Preferential runway logic:** Single-runway field — wind-based end selection only.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07/25 | Not published / verify 🟧 | — | — | On-field VOR-DME (MON) suggests at least a conventional non-precision approach exists — verify current chart |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not a factor at this flat coastal field (§3.1); the operative concerns are the unset VAMSYS category and the shorter runway (§3.3, §4).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the general AFI/Maghreb PBN picture.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** Not published / verify; no slot-coordination level confirmed — a leisure/charter field of this size is not expected to be heavily slot-coordinated, but this is not independently confirmed. 🟧
- **De-icing:** Not applicable — no winter-freeze climatology at this Tunisian coastal field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — expect a modest apron sized for a seasonal leisure operation. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — single-runway field, likely limited taxiway complexity; confirm with Tower/Ground on the day.
- **Hot spots / tight taxiways:** None identified at tier-4. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate; prevailing wind direction not independently sourced this pass.
- **Seasonal hazards:** Sirocco-type hot, dry, dust-bearing southerly wind is a general Maghreb-regional hazard; pronounced summer heat is typical of this Tunisian Sahel coast. No field-specific statistic obtained.
- **Local effects:** Low-lying coastal location (9 ft AMSL, the lowest in this batch); local terrain/sea-breeze effects not independently sourced.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and the general Maghreb overflight/permit picture in the [Africa airspace brief](../../../../airspace/africa.md). Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — seasonal leisure/resort field, VAMSYS category not yet set, not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **DTNH** ([Enfidha-Hammamet](../dtnh/index.md), in-country), **DTTA** ([Tunis-Carthage](../dtta/index.md), in-country) and **LICD** (Lampedusa, cross-country) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Not published / verify. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (2,950 m) is the shortest in this batch — confirm adequacy against whatever type is assigned once the VAMSYS category is set. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

---

## 17. Fleet-specific notes (optional)

- No type has yet been confirmed for this field (VAMSYS category unset, §1/§4) — re-visit this section once a type/category is assigned, with reference to [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) given the shorter field length.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (OACA/AIP Tunisia) not reached this pass** — this entire brief rests on tier-4 corroboration (OurAirports, Wikipedia, SkyVector) and should be re-verified against AD 2 DTMB before treating as Verified.
- **VAMSYS category not set** — confirm the intended K Global category/fleet assignment for this field.
- **Taxi-in/taxi-out times not populated in VAMSYS** — confirm before using a default planning figure.
- **Declared distances, PCN, RFF category** — not published / verify.
- **Approach/ILS data** — no ILS or named approach procedure was confirmed from a primary source; the on-field VOR-DME suggests at least a conventional non-precision approach exists.
- **ATIS/VOR frequency coincidence (113.1)** — plausible (VOR-collocated ATIS voice channel) but not independently confirmed; verify against a primary source.
- **Ground frequency** — not found; ATIS/Tower/Approach sourced tier-4 only.
- **Mag variation, TA/TL, SIDs/STARs, take-off minima, curfew/hours, fuel supplier/hours, handling agent, stand assignment** — none confirmed in reachable sources.
- **Seasonal operating-hours pattern** — this field's traffic and possibly its hours are likely strongly seasonal (European charter/holiday season); not independently confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DTMB/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid tier-4 baseline, incl. #customs tag.*
- Wikipedia — "Monastir Habib Bourguiba International Airport" — https://en.wikipedia.org/wiki/Habib_Bourguiba_International_Airport (retrieved 2026-07-26). *Location/role corroboration (serves Monastir and Sousse areas, strongly seasonal charter-driven traffic); no operator/airline names carried into this brief per governance.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. New folder — field was previously missing from the destination tree as a route endpoint. |
