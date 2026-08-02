# UUEE — Sheremetyevo · Airport Briefing

**UUEE / SVO** · Khimki, Moscow Oblast, Russia · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from standard public aeronautical data (OurAirports, Wikipedia, airport-guide sources) — the Russian AIP (CAI) is not openly reachable this pass, so **every figure in this brief carries a primary-source-verification-pending flag 🟧** unless stated otherwise. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

> 🟥 **Network status — standby/reference only.** K Global's network is built around avoidance of Russian airspace (the network's long-haul route briefs route around Russia). UUEE is therefore **not currently part of the active K Global route network** — this pack exists as a standby/reference entry, not current operational guidance. Current overflight and airport-operating constraints affecting Russian airspace are not tracked in this durable file — check official state/NOTAM bulletins before any operational consideration.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 55°58′21″N / 37°24′47″E (55.97250, 37.41306) `[Navigraph navdata seed, VAMSYS mirror stub]`; OurAirports cross-check 55.976858, 37.411210 — minor discrepancy between sources, neither AIP-verified 🟧 |
| Field elevation | **630 ft / 192 m** `[Navigraph navdata seed]`; OurAirports cross-check gives 622 ft / 190 m — minor discrepancy, not AIP-verified 🟧 |
| Mag variation | Not published / verify 🟧 — notably, this field's **runway designators themselves were renumbered** (07L/07C/07R↔25 series → 06L/06C/06R↔24 series, circa 2015–2016) due to ongoing secular magnetic-variation drift, confirming the local variation is actively shifting |
| Time zone | UTC+3 (MSK) — no DST observed |
| Runway(s) | **06L/24R** 3,200 × 60 m · **06C/24C** 3,550 × 60 m · **06R/24L** 3,700 × 60 m — all concrete, lighted `[OurAirports]` 🟧 not cross-checked against a current AIP |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | Not published — declared distances not obtained this pass; longest physical runway is 06R/24L at 3,700 m 🟧 |
| Approaches | ILS reported on the parallel runways; CAT II/III capability commonly associated with a major Russian hub of this size but **not confirmed from a primary source this pass** 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar — Moscow Terminal/Approach; **Moscow FIR/UIR (UUWV)** en route. **No dedicated Moscow FIR brief exists in this library** — see [Europe airspace placeholder](../../../../airspace/europe.md) 🟧 (that file briefs a different DE–FR–ES–PT continental sector; linked only as the nearest available placeholder pending a dedicated Moscow FIR brief) |
| Elevation class | Near sea-level-equivalent (630 ft) — not hot-and-high; no density-altitude driver |
| Special-airport status | 🟥 **Field not currently served** (see network-status banner above). Independent simultaneous parallel approaches across the three parallels are reportedly **not certified**; dependent operation with a reported ~4 km separation is cited in tier-4 sources — **not independently confirmed** 🟧 |
| Customs / PoE | Yes — historically a major international gateway; current desk hours/status not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **UKBB, UMMS** (plain ICAO text — cross-country, no link) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **16 min / 20 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Network / overflight status | 🟥 | Not currently served — network avoids Russian airspace; standby/reference entry only. Re-verify current overflight/operating status before any use. |
| Terrain / CFIT | 🟩 | Flat Moscow-region terrain (Russian Plain); no close-in high ground. Non-issue for the field itself. |
| Runway length vs fleet perf | 🟩 | All three parallels (3,200–3,700 m) are ample for a Category L widebody; non-limiting, though not independently AIP-declared-distance confirmed. |
| Approach availability / minima | 🟧 | ILS reported on the parallels; CAT sub-category, minima, SIDs/STARs not obtained in this research pass. |
| Airspace / traffic / control | 🟧 | Radar-controlled Moscow TMA; reported dependent-only (non-independent) triple-parallel operation — tier-4, unconfirmed. No dedicated Moscow FIR brief exists in-library. |
| Weather / seasonal hazard | 🟥 | Severe continental winter (heavy snow/ice, sustained sub-zero temperatures, extensive de-icing season) is the field's defining seasonal hazard. |
| Curfew / slots / hours | 🟧 | Not confirmed in reachable public sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Assumed available as a major hub; not confirmed, and not re-verified for current-day accessibility given the field's non-active network status. |
| Customs / handling / security | 🟧 | Historically a major international gateway with full customs/handling infrastructure; current hours/agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
UUEE sits at approximately 630 ft AMSL in the flat Moscow-region lowland — there is **no close-in high terrain** relevant to arrival, departure, or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟧
UUEE operates three parallel east–west-oriented runways (06L/24R, 06C/24C, 06R/24L) in the dense Moscow terminal area. Public tier-4 sources report that **independent simultaneous parallel approaches are not certified** here — operations are described as dependent, with a cited ~4 km separation — **this has not been independently confirmed against a primary source**. Moscow's terminal airspace also carries significant military and general-aviation traffic in the wider Moscow TMA/FIR; no dedicated Moscow FIR brief exists in this library to cross-reference control-type or special-use-airspace detail (see §1 airspace placeholder note).

### 3.3 Runway excursion 🟧
No declared-distance table or displaced-threshold data was obtained in this pass — flagged for verification against a primary source. The principal seasonal excursion driver at this field is **winter runway contamination** (snow, ice, slush) during the extended cold season (§14) rather than any known geometric constraint.

### 3.4 Weather threat 🟥
UUEE's defining hazard is the **severe Moscow-region continental winter** — heavy and sustained snowfall, extended periods of sub-zero (often well below −10°C) temperatures, and an intensive de-icing season are the standing seasonal reality at this hub. Fog and temperature-inversion events are also a recognised risk at low-lying Moscow-region fields in the transitional seasons. Summer carries the standard risk of continental **convective storms**. No field-specific frequency statistics were found this pass — treat as general regional climatology pending a primary-source rebuild.

### 3.5 Operational considerations 🟥
The dominant "operational consideration" here is the **standing network-avoidance status** itself (§1 banner) — UUEE is not in current active route service. Should this field ever become operationally relevant again (diversion, charter, reference), a **full current-AIP rebuild is mandatory** before use: this brief's data is public-source-only, has not been cross-checked against a primary AIP, and current overflight/operating constraints affecting Russian airspace must be independently re-verified through official channels — they are not tracked here.

---

## 4. Cautions & Warnings

- 🟥 **Field is not currently served by the K Global network** — the network routes around Russian airspace. Treat this brief as standby/reference only, not current operational guidance.
- 🟥 **Current overflight and airport-operating constraints affecting Russian airspace and this field should be checked against official state/NOTAM bulletins** before any operational consideration — this file does not track that status and has not been updated for it.
- Runway designators have **already shifted once due to magnetic drift** (the historical "07/25" series is now "06/24") — treat any procedure or chart referencing the old series as outdated.
- Reported **dependent-only (non-independent) triple-parallel approach operation** — tier-4 sourced, unconfirmed; verify current AIP if this field is ever operationally relevant.
- **Severe continental winter** (heavy snow/ice, extended sub-zero season) is a historically major seasonal factor at this hub — expect an intensive de-icing regime in season.
- **Extended data non-currency:** with no current K Global operations here, this brief could only be corroborated against public tier-4 sources — treat every figure as provisional pending a live-AIP rebuild.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable public sources; the standing crew-briefing items would be the network non-currency itself and the severe winter-ops environment. 🟥
- **Crew-qualification gate:** Not applicable while the field is outside active service; if reactivated, a cold-weather-ops and low-visibility-currency review would be required pending confirmation of actual approach capability. 🟧
- **Operating restrictions / bans:** Not published / verify. 🟧
- **Overflight / entry / permits:** 🟥 Overflight/entry into Russian airspace and any state-permit requirements are governed by prevailing state and international restrictions **not tracked in this durable file** — confirm current guidance through official channels before any operational use.
- **Operations notes:** Russian Federation air navigation service provides ATC; the field is operated as Sheremetyevo International Airport. A full primary-source operations profile (ANSP designation, handling structure) was not obtained this pass. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — major-hub H24 assumed | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify — no curfew found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed as a major hub; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Historically full international customs; current hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06L | 3,200 × 60 m | Concrete, lighted / PCN not published | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Physical length only; declared distances not obtained |
| 24R | 3,200 × 60 m | Concrete, lighted | — | — | — | — | Reciprocal |
| 06C | 3,550 × 60 m | Concrete, lighted | — | — | — | — | Physical length only |
| 24C | 3,550 × 60 m | Concrete, lighted | — | — | — | — | Reciprocal |
| 06R | 3,700 × 60 m | Concrete, lighted | — | — | — | — | Longest of the three; physical length only |
| 24L | 3,700 × 60 m | Concrete, lighted | — | — | — | — | Reciprocal |

*Source: OurAirports (tier-4, crowd-sourced), retrieved 2026-07-26. Runway designators reflect a documented renumbering from the historical "07L/07C/07R–25L/25C/25R" series to the current "06/24" series (magnetic-variation drift). No primary-source AIP declared-distance table was reachable this pass — 🟧 all figures pending AIP verification. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (arrival) | Sheremetyevo ATIS | 122.075 | Not confirmed 🟧 | |
| ATIS (departure) | Sheremetyevo ATIS | 125.125 | Not confirmed 🟧 | |
| Delivery | Sheremetyevo Delivery | 120.875 | Not confirmed 🟧 | |
| Ground | Sheremetyevo Ground | 119.0 (TWY 1 & B) · 121.8 (TWY A) · 122.9 (TWY D & E) | Not confirmed 🟧 | Multiple positions by taxiway zone |
| Apron / Apron control | Sheremetyevo Apron | 121.9 (Apron 1, Terminal F & Cargo) · 123.6 (Apron 2, Terminals D/E/F) · 130.35 (Apron 3, Terminals A/B) · 134.55 (Apron 4, Terminals B/C) | Not confirmed 🟧 | Reported as "APP" in the source register but function as apron/ground positions by terminal zone — verify |
| Tower | Sheremetyevo Tower | 120.7 / 131.5 | Not confirmed 🟧 | Multiple positions |
| Radar / Approach | Sheremetyevo Radar | 118.1 / 122.7 | Not confirmed 🟧 | |
| VOLMET | PMSV | 127.875 | Not confirmed 🟧 | |
| Centre / FIR | Moscow FIR/UIR (UUWV) — no dedicated brief in-library | Per current AIRAC | — | See [Europe airspace placeholder](../../../../airspace/europe.md) 🟧 |

*Source: OurAirports (tier-4, crowd-sourced), retrieved 2026-07-26 — 🟧 not cross-checked against a primary AIP; treat frequency assignments as indicative only.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS (parallel runways) | Not published / verify 🟧 | Not published 🟧 | Not confirmed 🟧 | Multiple sources report ILS on the main parallels; ident/frequency/CAT sub-category not obtained this pass |
| VOR/DME | Not published / verify 🟧 | Not published 🟧 | Not confirmed 🟧 | |
| NDB | Not published / verify 🟧 | Not published 🟧 | Not confirmed 🟧 | |

*No primary-source navaid table was reachable this pass — the entire table is pending AIP verification.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Not confirmed — assume standard ICAO 250 KIAS below FL100 pending chart verification. 🟧
- **Preferential runway logic:** Not published / verify. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 06L/06C/06R/24L/24C/24R | Not confirmed in reachable research pass 🟧 | Not published 🟧 | Not published 🟧 | ILS reported; name/minima not obtained |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat lowland); the operative concern, if this field is ever used, would be re-sequencing in the dense Moscow TMA and the reported dependent-parallel operating mode (§3.2).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** Not published / verify — slot regime not confirmed. 🟧
- **De-icing:** Given the severe continental winter climate (§14), a substantial de-icing operation is expected at a hub of this size, but specific pad locations/provisioning were not confirmed this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — terminal structure reported as a Northern Complex (Terminals B, C) and Southern Complex (Terminals D, E, F), with Terminal A used for business/private aviation; Terminal E reported closed since March 2020 and Terminal F reported closed for renovation since 2021 in tier-4 sources — **current status not re-verified this pass**. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — the three-parallel-runway geometry is a plausible source of ground-movement complexity by analogy with other multi-parallel hubs, but no field-specific hot-spot data was obtained. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid continental climate typical of the Moscow region; four distinct seasons with a long, cold winter.
- **Seasonal hazards:** **Severe winter (typically Nov–Mar/Apr)** — heavy snowfall, sustained sub-zero temperatures, and an extensive de-icing season are the field's defining seasonal characteristic. Fog/temperature-inversion events are a recognised risk at low-lying Moscow-region fields in the shoulder seasons. Summer carries standard continental **convective storm** risk. No field-specific frequency statistics found this pass — general regional climatology only.
- **Local effects:** No notable terrain/sea-breeze effects at this inland, flat-terrain field; winter contamination is the standout local effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Given the field's network non-currency, also check current **overflight/operating-restriction bulletins** for Russian airspace generally, in addition to the standard runway/taxiway closures, navaid U/S, lighting, obstacle/crane, and RFF-downgrade checks. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not currently served — standby/reference entry only** (§1 banner). Not a scheduled departure, destination, or alternate in current network planning.
- **Nearest suitable alternates:** Sister field [**UUDD** (Domodedovo)](../uudd/index.md) within the Moscow area; company preferred alternates **UKBB, UMMS** (plain ICAO text, cross-country) `[VAMSYS mirror 2026-07-26]` — confirm current suitability, runway/RFF adequacy, minima, and airspace/overflight status before relying on any of these.
- **Fuel-uplift notes:** Assumed available as a major hub; not confirmed, and not re-verified for current-day accessibility. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway lengths (3,200–3,700 m) are non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration identified — the field is Category L and not currently in active service. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for general type reference should the field ever return to active planning.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Entire primary-source (AIP) verification** — the Russian AIP (CAI) was not reachable this pass; every figure in this brief is public-source (tier-4) only.
- **ARP / elevation discrepancy** — 630 ft/192 m (Navigraph seed) vs 622 ft/190 m (OurAirports); not reconciled.
- **Mag variation** — not obtained; note the field's runway designators have already been renumbered once for drift.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN** — not obtained; only physical runway dimensions sourced.
- **ILS/navaid idents, frequencies, CAT sub-category** — not confirmed.
- **SIDs/STARs, take-off minima, TA/TL** — not obtained.
- **RFF category, ATS/AD hours, curfew, customs/handling hours** — not confirmed.
- **Current terminal status** (E/F closure reports) — sourced to travel-guide material, not independently re-verified.
- **Independent-vs-dependent parallel-approach operating mode** — tier-4 sourced, unconfirmed.
- **Current overflight/operating-restriction status for Russian airspace** — not tracked in this durable file; must be checked through official channels before any operational use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/UUEE/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check; tier-4, crowd-sourced. Also source of the documented 07→06 runway-designator renumbering (magnetic drift).*
- Wikipedia — "Sheremetyevo International Airport" — https://en.wikipedia.org/wiki/Sheremetyevo_International_Airport (retrieved 2026-07-26). *General field/history corroboration — tier-4, not independently AIP-verified.*
- iFLY — "Moscow Sheremetyevo Airport Guide" — https://www.ifly.com/airports/sheremetyevo-international-airport (retrieved 2026-07-26). *Terminal-complex structure — travel-guide source, not AIP-grade.*
- FlightPlanDatabase — "UUEE" — https://flightplandatabase.com/airport/UUEE (retrieved 2026-07-26). *Parallel-runway independent/dependent-approach note — tier-4, unconfirmed.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public aeronautical data (AIP verification pending); K Global fields from live VAMSYS; 4-page pack. |
