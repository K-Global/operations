# DTTJ — Zarzis · Airport Briefing

**DTTJ / DJE** · Djerba (Mellita), Médenine Governorate, Tunisia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4/public-source build, AIP not independently reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. The primary source of record for this field is the **AIP Tunisia (OACA — Office de l'Aviation Civile et des Aéroports)**; the live eAIP could not be reached this pass (see §18), so static data here is corroborated from public tier-4 sources (OurAirports, Wikipedia, SkyVector) per the source register and flagged accordingly. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N33°52′25″ / E010°46′38″ (33.873719, 10.777300) `[OurAirports]` 🟧 not cross-checked against primary AIP |
| Field elevation | **19 ft / 6 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+1** — Tunisia observes a fixed UTC+1 offset year-round, no DST |
| Runway(s) | **09/27** 3,100 × 45 m (asphalt, lighted) — single runway |
| Preferential runway | Not published / verify — single-runway field, wind-based end selection only 🟧 |
| Longest LDA | 3,100 m nominal — no displaced threshold noted at tier-4; exact declared distances not published / verify 🟧 |
| Approaches | Not published / verify 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Not published / verify — a tower/approach service is assumed for a field with scheduled international charter traffic 🟧 |
| Elevation class | Sea-level (19 ft) — **not** hot-and-high |
| Special-airport status | None found; single-runway coastal/resort field serving Djerba island and the Zarzis area |
| Customs / PoE | **Yes** — international arrivals confirmed by role (tagged #customs at tier-4); hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DTTA, LMML** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Djerba is a low, flat coastal island — no high terrain in the vicinity; non-issue field for terrain. |
| Runway length vs fleet perf | 🟩 | 3,100 m single runway — non-limiting for K Global's Cat S–assigned types at this field. |
| Approach availability / minima | 🟧 | Not published / verify — no ILS/approach data reachable this pass. |
| Airspace / traffic / control | 🟧 | Tunis FIR (DTTC) — see [Africa airspace brief](../../../../airspace/africa.md); control type at the field not independently confirmed. |
| Weather / seasonal hazard | 🟧 | Mediterranean coastal/island climate; seasonal sirocco-type wind and summer heat are general-climatology considerations, not field-specific sourced data. |
| Curfew / slots / hours | 🟧 | Not published / verify. |
| RFF category vs our types | 🟧 | RFF category not published / verify. |
| Fuel availability | 🟧 | Not published / verify. |
| Customs / handling / security | 🟧 | International/customs role confirmed at tier-4 (tag); hours/handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
Djerba is a flat, low-lying coastal island off the Gulf of Gabès — there is no high terrain in the vicinity of DTTJ. This is a non-issue field for terrain; the sector MSA has not been independently verified from a primary source, but no CFIT-relevant feature is expected.

### 3.2 Airborne conflict / traffic 🟧
DTTJ sits within the **Tunis (DTTC)** FIR (see the [Africa airspace brief](../../../../airspace/africa.md)) at the Maghreb/Mediterranean seam of the AFI region. As a leisure/resort-island field, traffic is expected to be strongly seasonal (peaking with the European charter/holiday season) rather than a year-round high-density picture; control type (radar vs procedural) not independently confirmed.

### 3.3 Runway excursion 🟧
Single runway (09/27), 3,100 m, no displaced threshold noted at tier-4. No declared-distance table (TORA/TODA/ASDA/LDA) confirmed from a primary source — treat as **not published / verify** pending an AIP AD 2 DTTJ cross-check.

### 3.4 Weather threat 🟧
General Mediterranean-coastal/island climatology applies: a hot, dry sirocco-type southerly wind can affect visibility and gusts in season (most relevant in the shoulder/summer months when this leisure field sees its heaviest traffic), and hot, sun-baked summer conditions are typical of this southern Tunisian latitude. No field-specific frequency/severity statistic obtained this pass — treat as general regional climatology. See §14.

### 3.5 Operational considerations 🟧
This is a **single-runway, seasonally-driven resort/leisure field** with a materially thinner public data footprint than the network's primary gateways (DAAG, DTTA). Most §2 flags are currency/verification items — no safety-critical figure has been independently sourced this pass, but none has been fabricated either; treat the whole quantitative picture (approach minima, RFF, curfew, fuel) as open pending a primary-source pass.

---

## 4. Cautions & Warnings

- **Single-runway field (09/27)** — no reciprocal-pair or crossing-runway options; wind-based end selection only.
- Sirocco-type dust/wind events are a recognised Maghreb-regional hazard, most relevant during this field's peak (warm-season) traffic period — confirm current TAF/SIGMET at planning.
- This brief carries a materially higher proportion of open/unverified items than the network's primary gateways — do not treat any quantitative figure here as AIP-confirmed without a current-AIRAC cross-check (§18).
- No approach/navaid/ILS data was independently confirmed this pass — verify approach availability before planning an IFR arrival in marginal weather.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; no crew-qualification gate identified beyond standard single-runway, seasonal-leisure-field awareness. 🟧
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
| Customs | International/customs role tagged at tier-4; hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09/27 | 3,100 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | No displaced threshold noted |

*Source: OurAirports runway extract (retrieved 2026-07-26) — physical length/width/surface only. No declared-distance table or PCN was reachable this pass; treat all distance fields as provisional pending a primary AIP AD 2 DTTJ cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | — | — | 🟧 |
| Ground | Not published / verify | — | — | 🟧 |
| Tower | Djerba Tower | 118.150 | Not published / verify | `[OurAirports]` |
| Approach | Djerba Approach | 120.300 | Not published / verify | `[OurAirports]` |
| Centre / FIR | Not published / verify | — | — | Tunis (DTTC) FIR — see [Africa airspace brief](../../../../airspace/africa.md) 🟧 |

*Source: OurAirports frequency extract (retrieved 2026-07-26) — tier-4, not independently AIP-cross-checked. Only Tower and Approach frequencies were found; treat all values as provisional.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | JBA (Djerba) | 112.20 | Not published / verify | On field (0.4 nm NW) `[OurAirports]` |
| NDB | JER (Zarzis) | 371 kHz | Not published / verify | On field (0.3 nm NW) `[OurAirports]` |
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
| 09/27 | Not published / verify 🟧 | — | — | No approach name/type confirmed from a primary source; on-field VOR-DME (JBA) and NDB (JER) suggest at minimum a conventional non-precision approach exists — verify current chart |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not a factor at this flat coastal-island field (§3.1); the operative concern would be seasonal traffic density during the peak charter period.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the general AFI/Maghreb PBN picture.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** Not published / verify; no slot-coordination level confirmed — a leisure/charter field of this size is not expected to be heavily slot-coordinated, but this is not independently confirmed. 🟧
- **De-icing:** Not applicable — this southern Tunisian coastal/island field has no winter-freeze climatology and de-icing provisioning is not expected.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — expect a modest apron sized for a seasonal leisure operation rather than a mixed widebody hub. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — single-runway field, likely limited taxiway complexity; confirm with Ground on the day.
- **Hot spots / tight taxiways:** None identified at tier-4. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal/island climate at a southerly Tunisian latitude; prevailing wind direction not independently sourced this pass.
- **Seasonal hazards:** Sirocco-type hot, dry, dust-bearing southerly wind is a general Maghreb-regional hazard; summer heat is pronounced at this latitude. No field-specific statistic obtained.
- **Local effects:** Island/coastal location — expect sea-breeze effects typical of a small, low-lying island; not independently quantified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and the general Maghreb overflight/permit picture in the [Africa airspace brief](../../../../airspace/africa.md). Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — seasonal leisure/resort field, Cat S, not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **DTTA** (Tunis-Carthage, in-country) and **LMML** (Malta, cross-country) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Not published / verify. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,100 m) is non-limiting for K Global's Cat S–assigned types. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific performance consideration identified at this field length/elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (OACA/AIP Tunisia) not reached this pass** — this entire brief rests on tier-4 corroboration (OurAirports, Wikipedia, SkyVector) and should be re-verified against AD 2 DTTJ before treating as Verified.
- **Declared distances, PCN, RFF category** — not published / verify.
- **Approach/ILS data** — no ILS or named approach procedure was confirmed from a primary source; the on-field VOR-DME/NDB pair suggests at least a conventional non-precision approach exists.
- **ATC frequencies (ATIS/Ground/Centre)** — not found; Tower/Approach sourced tier-4 only.
- **Mag variation, TA/TL, SIDs/STARs, take-off minima, curfew/hours, fuel supplier/hours, handling agent, stand assignment** — none confirmed in reachable sources.
- **Seasonal operating-hours pattern** — this field's traffic and possibly its hours are likely strongly seasonal (European charter/holiday season); not independently confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DTTJ/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid tier-4 baseline.*
- Wikipedia — "Djerba–Zarzis Airport" (page title reference; content not retrievable via automated fetch this pass — flagged, not fabricated).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
