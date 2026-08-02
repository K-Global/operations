# EPWA — Warsaw Chopin · Airport Briefing

**EPWA / WAW** · Warsaw, Poland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. The Polish national eAIP (PANSA) was not reachable in a usable form for this build; static data below is drawn from tier-4 public aggregators (OurAirports, SkyVector) and general public reference, cross-checked against each other where possible — every such figure is flagged 🟧 and should be verified against the current AIRAC/AIP before being treated as authoritative. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N52°09′57″ / E020°58′02″ (52.1657, 20.9671) `[OurAirports / SkyVector]` 🟧 |
| Field elevation | **362 ft / 110 m AMSL** `[OurAirports / SkyVector, cross-checked]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **11/29** 2,800 × 50 m (asphalt) · **15/33** 3,690 × 60 m (asphalt) — **two intersecting (crossing) runways, not independent parallels** |
| Preferential runway | Not published / verify 🟧 — no wind/noise-based selection rule confirmed in reachable sources |
| Longest LDA | RWY 15 (undisplaced), ~3,690 m — the field's longest usable landing distance; RWY 33 LDA is reduced by its displaced threshold (see §7) 🟧 |
| Approaches | Not published / verify 🟧 — ILS presence on RWY 15/33 is plausible given the runway's length/displaced-threshold profile, but no ident, frequency or CAT has been confirmed from a public source; pull the current-AIRAC procedure list at planning |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Warszawa Approach on frequency; en-route handoff to Warszawa ACC (EPWW) — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 (no dedicated EPWW FIR brief exists in this network yet) |
| Elevation class | Near sea-level (362 ft) — not hot-and-high; the field sits on the flat Mazovian Lowland |
| Special-airport status | None confirmed; the field's defining operational feature is its **two intersecting (crossing) runways** rather than independent parallels, capping combined throughput (see §3.2) |
| Customs / PoE | **Yes** `[OurAirports #customs tag]` 🟩 — exact desk hours not published 🟧 |
| K Global aerodrome category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** — destination field `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EPKK, LKPR** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` 🟧 — the VAMSYS mirror gives two figures (12 and 15 min); which is in vs out is **not certain** from the source data, stated here as "12/15 min taxi in/out" pending confirmation |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Mazovian Lowland; no close-in high terrain relevant to the field. |
| Runway length vs fleet perf | 🟧 | RWY 15/33 (3,690 m) is ample for any K Global type likely to serve here; RWY 11/29 (2,800 m, with a 500 m displaced threshold on RWY 29) is comparatively limited — confirm against the assigned type's performance. |
| Approach availability / minima | 🟧 | No approach/ILS data confirmed from a public source this build — pull current AIRAC before planning. |
| Airspace / traffic / control | 🟧 | Radar-controlled; two **intersecting** (not parallel) runways cap current-rules throughput at reportedly ~34 movements/hour — a real capacity/sequencing constraint at Poland's busiest airport. |
| Weather / seasonal hazard | 🟥 | Continental Central/Eastern European climate — winter fog, snow and icing are a recurring, briefing-worthy seasonal threat. |
| Curfew / slots / hours | 🟧 | No curfew, slot level or coordinator confirmed from a public source; the on-field Ground ATC position is reported HX (0330–2200) — treat as a signal of reduced overnight service, not a confirmed curfew. |
| RFF category vs our types | 🟧 | Not published — verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major national airport; not independently confirmed. |
| Customs / handling / security | 🟧 | Port of Entry confirmed; desk hours, handling agent(s) and current security posture not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EPWA sits at 362 ft AMSL on the flat Mazovian Lowland in the Vistula river basin — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
EPWA is reported as Poland's busiest airport, handling on the order of 300 scheduled movements a day and in excess of 20 million passengers a year `[Wikipedia, retrieved 2026-07-26]`. Unlike a parallel-runway hub, **EPWA's two runways (11/29 and 15/33) physically intersect** rather than running independently — the published current-rules capacity of the field is reported at **34 takeoffs/landings per hour** `[Wikipedia, retrieved 2026-07-26]`, a direct consequence of the crossing geometry forcing dependency between arrival and departure streams. Expect radar sequencing, holding and extended vectoring during peak banks, and brief for the fact that a runway-configuration choice on one pair directly constrains the other.

### 3.3 Runway excursion 🟥
Both runway ends carry meaningful **displaced thresholds**: RWY 29 is displaced approximately 500 m (1,640 ft) and RWY 33 approximately 661 m (2,170 ft; a secondary source reports 2,198 ft — treat the small variance as unresolved pending AIP confirmation) `[OurAirports / SkyVector, cross-checked]` 🟧. These materially reduce the usable landing distance from the full published runway length — brief the correct LDA for the assigned runway, not the total pavement length. **RWY 11 is the site of a historical (1993) runway-excursion accident** following a wet-runway landing in which the aircraft's spoiler/reverser deployment logic did not activate as expected — a case that led to industry-wide certification review of that logic `[Wikipedia, retrieved 2026-07-26]`. There is no indication this is a standing hazard today, but it underscores the need for conservative braking-action assessment on this runway pair in contaminated conditions.

### 3.4 Weather threat 🟥
EPWA sits in a **continental Central/Eastern European climate** — winters (broadly November–March) bring recurring fog, snow and icing risk, consistent with the flat, river-adjacent lowland setting; summers carry the standard regional risk of afternoon convective storms (broadly May–August). No EPWA-specific frequency statistic for fog/low-visibility days was found in reachable sources — treat as general regional climatology pending a sourced figure. See §14.

### 3.5 Operational considerations 🟧
Plan around three durable constraints: (1) the **crossing-runway geometry**, which caps combined throughput and creates arrival/departure interdependency unlike an independent-parallel hub; (2) an active **airport expansion programme** (construction reported to have begun in late 2025, targeted for completion by 2029, adding widebody and narrowbody gate capacity) `[Wikipedia, retrieved 2026-07-26]` — expect periodic stand/taxiway NOTAMs through the build-out; and (3) **regional airspace security bulletins** — Polish airspace has seen reported flow disruptions tied to regional security incidents (e.g., a reported drone-related disruption in September 2025) `[Wikipedia, retrieved 2026-07-26]` — check current NOTAM/conflict-zone bulletins at planning as a standing practice for this FIR.

---

## 4. Cautions & Warnings

- **Displaced thresholds on RWY 29 (~500 m) and RWY 33 (~661 m)** — the usable landing distance is materially less than the published runway length; brief the correct LDA, not the total pavement figure.
- **Two intersecting (not parallel) runways** — expect sequencing dependency between arrival and departure streams; current-rules capacity is reported at ~34 movements/hour.
- **Historical (1993) runway-excursion accident on RWY 11** under wet/contaminated conditions — treat braking-action reports on this runway pair with elevated caution.
- **Winter fog/snow/icing season** — confirm current LVP and de-icing status before planning a winter-season arrival or departure.
- **Airport is mid-expansion** (construction through a targeted 2029 completion) — expect periodic stand/taxiway/gate NOTAMs.
- **Regional airspace security bulletins** — check current NOTAM/conflict-zone bulletins for the Warszawa (EPWW) FIR at planning.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **crossing-runway geometry** and the **displaced-threshold LDA reductions**. 🟧
- **Crew-qualification gate:** No special currency requirement confirmed; confirm crew/aircraft LVP currency ahead of a winter-season low-visibility arrival. 🟧
- **Operating restrictions / bans:** No curfew, RNP AR ban, or circling restriction confirmed in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Poland is an EU/Schengen member state; standard Schengen/non-Schengen international arrival, no special state permit expected. 🟩
- **Operations notes:** ANSP — **PAŻP/PANSA** (Polish Air Navigation Services Agency); airport operator — **Polish Airports State Enterprise (PPL)**. Slot coordinator not confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Delivery/Approach assumed H24; **Ground reported HX 0330–2200** `[OurAirports, retrieved 2026-07-26]` | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify — the Ground-position HX hours are a signal of reduced overnight activity, not a confirmed curfew | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available; hours/supplier not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Port of Entry confirmed; hours not published | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 11 | 2,800 × 50 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~2,800 m (no displaced threshold on this end) 🟧 | Threshold elevation ~362 ft |
| 29 | 2,800 × 50 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | **~2,300 m** (2,800 m minus a ~500 m displaced threshold — figure derived from tier-4 data, not an official published LDA) 🟧 | Threshold elevation ~346 ft; displaced threshold ~500 m / 1,640 ft |
| 15 | 3,690 × 60 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~3,690 m (no displaced threshold on this end) 🟧 | Threshold elevation ~352 ft |
| 33 | 3,690 × 60 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | **~3,029 m** (3,690 m minus a ~661 m displaced threshold; a secondary source reports 2,198 ft/~670 m displacement — small cross-source variance unresolved — figure derived, not an official published LDA) 🟧 | Threshold elevation ~354 ft; displaced threshold ~661 m / 2,170 ft (see variance note) |

*Source: OurAirports and SkyVector, cross-checked (retrieved 2026-07-26). Runway physical dimensions and displaced-threshold distances are tier-4 aggregator data; **no official TORA/TODA/ASDA/LDA table or PCN has been confirmed against the Polish AIP (PANSA eAIP)** for this build — treat every distance in this table as provisional pending a live-AIRAC/AIP cross-check. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (arrival) | Warszawa ATIS Arrival | 120.455 | H24 (assumed) 🟧 | |
| ATIS (departure) | Warszawa ATIS Departure | 123.430 | H24 (assumed) 🟧 | |
| Delivery | Okęcie Delivery | 121.605 | H24 (assumed) 🟧 | |
| Ground | Okęcie Ground | 121.905 | **HX 0330–2200** `[OurAirports]` | 🟧 not independently re-confirmed |
| Tower | Okęcie Tower | 118.305 | H24 (assumed) 🟧 | |
| Approach | Warszawa Approach | 125.055 / 128.805 / 135.930 | H24 (assumed) 🟧 | 128.805 reported as the commonly-used position |
| Director | Warszawa Director | 129.380 | — 🟧 | |
| Information | Warszawa Information | 118.775 / 128.575 | — 🟧 | |
| VOLMET | Warszawa Radar VOLMET | 127.600 | H24 (assumed) 🟧 | |
| Centre / FIR | Warszawa ACC (EPWW) | Per current AIRAC | H24 (assumed) 🟧 | See [Europe airspace brief](../../../../airspace/europe.md) — **no dedicated Warszawa (EPWW) FIR brief exists in this network yet** 🟧 |

*Source: OurAirports and SkyVector, cross-checked (retrieved 2026-07-26); values are closely consistent between the two tier-4 sources but **not corroborated against the Polish AIP** — treat as provisional pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | OKE (Okęcie) | 113.400 (OurAirports) / 113.45 (SkyVector — small cross-source variance) 🟧 | H24 (assumed) 🟧 | On field, ~0.4 nm NW of ARP |
| NDB | AY | 375 kHz | — 🟧 | ~1.4 nm WNW of field; likely ILS-locator role, not confirmed |
| NDB | W | 361 kHz | — 🟧 | ~1.6 nm SSE of field; likely ILS-locator role, not confirmed |
| NDB | WAO | 412 kHz | — 🟧 | ~4.6 nm SSE of field |
| NDB | WAG | 336 kHz | — 🟧 | ~6.5 nm WNW of field |
| VOR/DME (area) | WAR (Zaborówek) | 114.900 | — 🟧 | ~12.7 nm WNW; en-route reference |
| VOR/DME (area) | LIN (Linin) | 113.100 | — 🟧 | ~15.7 nm SSE; en-route reference |
| ILS | Not published / verify 🟧 | — | — | ILS presence on RWY 15/33 is plausible given the runway/displaced-threshold profile, but no ident, frequency or CAT has been confirmed from a public source |

*Source: OurAirports "closest navaids" and SkyVector, cross-checked (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify 🟧 — no wind/noise-based selection rule confirmed; RWY 15/33 (the longer pair) is presumed the more likely primary pair given its length and displaced-threshold engineering, but this is inference, not a sourced fact.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 11 | Not published / verify 🟧 | — | — | — |
| 29 | Not published / verify 🟧 | — | — | Displaced threshold — LDA reduced (§7) |
| 15 | Not published / verify 🟧 | — | — | ILS presence plausible, not confirmed |
| 33 | Not published / verify 🟧 | — | — | Displaced threshold — LDA reduced (§7); ILS presence plausible, not confirmed |

- **STARs (names only):** Not published / verify — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Winter fog/icing conditions are the plausible trigger given the field's continental climate; exact RVR/trigger figures not published. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat lowland); the operative missed-approach concern is re-sequencing into the crossing-runway traffic environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify 🟧
- **Start-up / push-back:** Not confirmed — confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** Slot coordination level and coordinator not confirmed in reachable sources; standard EUROCONTROL Network Manager ATFM/CTOT practice may apply as general EU-airspace practice, not independently EPWA-sourced. 🟧
- **De-icing:** Availability assumed given the field's continental winter climate; season, pad location and provisioning not confirmed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify 🟧
- **Night noise / dB limits:** Not published / verify 🟧
- **Engine run-up restrictions:** Not published / verify 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify 🟧

---

## 13. Ground operations

- **Stands for our types:** **Terminal A** is a single unified terminal complex (five check-in areas, A–E; 116 check-in desks plus 23 self-service kiosks; 45 gates, of which 27 are jetway-equipped and the remainder remote/apron) `[Wikipedia, retrieved 2026-07-26]` 🟧. The published gate mix is predominantly narrowbody-oriented; widebody stand availability is not confirmed. | 🟧
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed. 🟧
- **Standard taxi routes:** Not confirmed; the **intersection of the 11/29 and 15/33 runway pair** is the field's principal ground-dependency point and should be treated as the default caution area pending named-hot-spot confirmation.
- **Hot spots / tight taxiways:** 🟧 No individually named taxiway hot spots confirmed in reachable sources; the runway-crossing intersection itself is the structural hot spot at this field.
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Continental Central/Eastern European climate on the flat Mazovian Lowland; prevailing wind not confirmed from a public source. 🟧
- **Seasonal hazards:** Winter (broadly Nov–Mar) fog, snow and icing risk consistent with the flat, river-adjacent lowland setting; summer (broadly May–Aug) convective/thunderstorm risk consistent with regional Central European climatology. No EPWA-specific frequency statistic found — general regional climatology only.
- **Local effects:** The Vistula river valley lies a short distance east of the field; river-valley fog is a plausible local effect in the region but not independently confirmed as an EPWA-specific statistic.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (the airport is mid-expansion — expect periodic construction NOTAMs), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, regional airspace security/conflict-zone bulletins for the Warszawa (EPWW) FIR. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — a spoke/destination field in the K Global network, not a base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **EPKK** (Kraków) and **LKPR** (Prague) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major national airport; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** RWY 15/33 (3,690 m) is non-limiting for any K Global type likely to serve this destination; RWY 11/29 (2,800 m, with a ~500 m displaced threshold on RWY 29) is comparatively short and should be checked against the assigned type — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- No widebody-specific consideration confirmed at this destination field; the standing item is the shorter RWY 11/29 pair's usable landing distance once the RWY 29 displaced threshold is applied — check against the assigned type in [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) before planning that runway for a larger type.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (PANSA eAIP) not yet cross-verified** — every declared-distance, PCN, RFF-category, ILS/navaid, frequency, hours, curfew/slot and NAP figure in this pack is sourced to tier-4 public aggregators (OurAirports, SkyVector, Wikipedia) and should be treated as provisional pending a live-AIRAC/AIP check.
- **Magnetic variation, RFF category, PCN, take-off minima, TA/TL** — none confirmed from a public source.
- **TORA/TODA/ASDA per runway** — not published in reachable tier-4 sources; only physical length and displaced-threshold distance were available, and the LDA values in §7 are derived (not an official published figure).
- **Displaced-threshold distance on RWY 33** — OurAirports reports 661 m (2,170 ft), SkyVector reports 2,198 ft (~670 m); the small variance is unresolved.
- **ILS idents, frequencies and CAT capability per runway** — not confirmed in reachable sources; presence on RWY 15/33 is inference from runway/displaced-threshold engineering, not a sourced fact.
- **SIDs/STARs (current names)** — not obtained; pull the live current-AIRAC procedure list before use.
- **Preferential runway logic / prevailing wind** — not confirmed.
- **Curfew, slot coordination level/coordinator, noise-abatement procedure, night dB limits, engine run-up and reverse-thrust policy** — none confirmed in reachable sources.
- **RFF category, fuel supplier/hours, customs desk hours, handling agent(s), push-back policy, follow-me availability** — none confirmed.
- **Ground ATC HX hours (0330–2200)** — tier-4 sourced, not independently re-confirmed against the AIP.
- **Warszawa (EPWW) FIR brief** — no dedicated FIR page exists yet in this network; cross-references point to the general [Europe airspace brief](../../../../airspace/europe.md) in the interim.
- **VAMSYS taxi-in/out assignment** — the mirror gives 12 min and 15 min but does not clearly attribute which figure is in vs out; stated as "12/15 min taxi in/out" pending confirmation.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/EPWA/ (retrieved 2026-07-26). *ARP, elevation, Port-of-Entry tag.*
- OurAirports — https://ourairports.com/airports/EPWA/runways.html (retrieved 2026-07-26). *Runway dimensions, surface, displaced thresholds.*
- OurAirports — https://ourairports.com/airports/EPWA/frequencies.html (retrieved 2026-07-26). *ATC frequencies and hours.*
- OurAirports — https://ourairports.com/airports/EPWA/closest-navaids.html (retrieved 2026-07-26). *Navaid idents, frequencies, distances.*
- SkyVector — https://skyvector.com/airport/EPWA (retrieved 2026-07-26). *Cross-check of runway headings, displaced thresholds, threshold elevations, frequencies, navaids.*
- Wikipedia — "Warsaw Chopin Airport" — https://en.wikipedia.org/wiki/Warsaw_Chopin_Airport (retrieved 2026-07-26). *Terminal/gate structure, movements-per-hour capacity, expansion programme, historical runway-excursion accident, regional airspace-security bulletin reference.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
