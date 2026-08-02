# GMFF — Saïss Intl · Airport Briefing

**GMFF / FEZ** · Fez, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. The primary AIP source of record (AIP Morocco / ONDA, eAIP) could not be reached in this research pass (JavaScript frameset / connection timeout — a known access pattern for this state's eAIP); static data below is therefore built from cross-checked tier-4 public sources and flagged accordingly. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 33°55.64′N / 004°58.65′W (33.9273, -4.9774) `[OurAirports / SkyVector / Universal Weather — cross-checked, tier-4]` |
| Field elevation | **1,896 ft / 578 m AMSL** (commonly rounded to 1,900 ft / 579 m in public sources) — matches the given anchor |
| Mag variation | 🟧 **001° W** `[Universal Weather, tier-4]` — epoch/currency not stated; not independently AIP-confirmed |
| Time zone | **UTC+1** (Africa/Casablanca), observed fixed year-round under standard Moroccan practice; Morocco has periodically reverted to **UTC+0 during Ramadan** in recent years — confirm current-year practice at planning 🟧 |
| Runway(s) | **09/27**, 3,200 × 45 m (10,499 × 148 ft), asphalt, lighted — single runway, no crosswind alternative |
| Preferential runway | Not confirmed in reachable public sources — single-runway field; selection presumably wind-driven — verify current AIP/chart 🟧 |
| Longest LDA | RWY 09 ≈3,200 m (no displaced threshold reported); RWY 27 reduced by a displaced threshold — reported as **250 m** (OurAirports) or **221 m / 725 ft** (SkyVector) — source discrepancy, see §7/§18 🟧 |
| Approaches | Not confirmed in any reachable public source this pass — **verify current AIRAC.** On-field VOR (FES 115.70) may support a conventional approach; no ILS reported in any reachable source 🟧 |
| RFF category | **Not published / verify** 🟧 |
| Control type | Not independently confirmed. A "Fès Approach" control position is modelled in a network-sim reference (IVAO Morocco Division document), implying a real-world approach service exists — radar vs procedural not confirmed 🟧 |
| Elevation class | ~1,900 ft — not classically hot-and-high, but Saïss-plain summer heat (average warmest-month temperature ~27°C) combined with the field's elevation gives a modest density-altitude margin worth checking on hot-day / max-weight departures 🟧 |
| Special-airport status | None found in reachable sources; not operator-categorised |
| Customs / PoE | **Yes** — designated Airport of Entry `[Universal Weather, tier-4]`; exact desk hours not confirmed 🟧 |
| K Global category | **Not set in VAMSYS** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **GMTT, LXGB, GMMN** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **Not published in the VAMSYS mirror this pass** — verify 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Fez sits on the Saïss Plain immediately north of the **Middle Atlas**, which rises to peaks over 3,000 m (highest **Jebel Bou Naceur, 3,340 m**) beginning within a few tens of NM to the south/southeast (cf. Ifrane, ~32 NM S/SSE, itself set in the Atlas foothills). Real, relevant terrain for arrival/departure/missed-approach planning to the south — exact MSA/obstacle figures not obtained from a primary chart this pass. |
| Runway length vs fleet perf | 🟩 | 3,200 m asphalt is ample for narrowbody types and comfortable for most widebody types at typical regional-sector weights. Confirm specific-type field-length performance via OM B for any max-weight/long-sector case. |
| Approach availability / minima | 🟧 | Approach names/minima not confirmed in any reachable public source this pass — pull current AIRAC before planning. |
| Airspace / traffic / control | 🟧 | Regional single-runway field; control-facility type (radar/procedural) not independently confirmed. A "Fès Approach" position is referenced in a network-sim (IVAO) document, suggesting a real approach service exists — see §8. |
| Weather / seasonal hazard | 🟧 | Mediterranean-continental climate — hot, arid summers and cold, wet winters with occasional snow. Inland-plain fog/low-vis at night is plausible but not quantified from a primary source — see §14. |
| Curfew / slots / hours | 🟧 | ATS hours, AD operating hours and any curfew not confirmed in reachable public sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 reported available via third-party ground-handling/trip-support brokers; no confirmed primary supplier or hours. |
| Customs / handling / security | 🟧 | Designated Port of Entry confirmed; desk hours and a named default handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
GMFF sits at ~1,900 ft on the flat **Saïss Plain**, but this plain is bounded immediately to the south by the **Middle Atlas** range, which runs roughly 350 km south from the Fez/Meknès area and reaches peaks above 3,000 m — the range high point, **Jebel Bou Naceur, is 3,340 m**. The resort town of Ifrane, itself set in the Atlas foothills, lies only ~32 NM (60 km) south of Fez. This is real, close-proximity high terrain relative to a field at ~1,900 ft elevation — treat the southern/south-eastern quadrant as terrain-driven for any non-standard climb, descent, or missed-approach path, and fly the current-chart MSA sectors precisely; no primary MSA/obstacle table was obtained in this research pass. North and west of the field the Saïss Plain and pre-Rif hills are comparatively benign, but should not be assumed clear without checking the chart.

### 3.2 Airborne conflict / traffic 🟧
GMFF is a single-runway regional field with moderate traffic density relative to Morocco's coastal hubs (Casablanca, Marrakech). Control-facility type (radar vs procedural approach) is not independently confirmed from a primary source; a "Fès Approach" position appears in a network-sim reference (IVAO Morocco Division training document — not regulatory, cross-check only, see §8/Sources), implying a real-world approach service exists. Cross-ref [Africa — General Airspace](../../../../airspace/africa.md) and the field is inside **Casablanca FIR (GMMM)**.

### 3.3 Runway excursion 🟧
Single runway 09/27, no crosswind-runway option — a crosswind or tailwind event outside limits leaves no on-field runway alternative; consider diversion planning accordingly (§16). A displaced threshold is reported on RWY 27, but the two tier-4 sources disagree on its length (250 m vs 221 m/725 ft) — treat the shorter, more conservative LDA as the planning figure until the current AIP/chart confirms it (see §7/§18). No overrun/RESA data was found in reachable sources.

### 3.4 Weather threat 🟧
Fez has a Mediterranean-continental-transitional climate: short, hot, arid summers (average warmest-month temperature ~27°C) and long, cold, wet winters during which short cold spells and occasional snow occur. The airport sits in an inland plain setting where radiation fog/low cloud at night is climatologically plausible in winter, though no GMFF-specific fog-frequency statistic was found in a reachable source — treat as a seasonal caution pending a primary MET climatology. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) the **single-runway, no-crosswind-alternative geometry** (§3.3); (2) the **unresolved K Global category** (Not set in VAMSYS) — confirm before scheduling this field into service; (3) **unpublished taxi-in/out times** in the VAMSYS mirror — build schedule buffer until confirmed; and (4) the **unconfirmed RFF category, customs hours, and fuel supplier/hours** (§6) — treat as open administrative items rather than known safety gaps, but do not assume H24/major-hub-level service at a single-runway regional field of this size.

---

## 4. Cautions & Warnings

- **Single runway (09/27) with no crosswind alternative** — a crosswind/tailwind event beyond limits has no on-field runway option; factor into alternate planning.
- **Middle Atlas terrain rises quickly to the south/southeast** (peaks to 3,340 m within ~30–60 NM) — respect MSA sectors and do not descend early on that side of the field.
- **Displaced threshold on RWY 27** — two public sources disagree on its length (250 m vs 221 m); use the more conservative published LDA until confirmed on the current chart.
- **K Global category is unset in VAMYS** — flag before this field is scheduled into revenue service.
- **Taxi-in/out timings are not published in the VAMSYS mirror** — do not assume a default turnaround buffer.
- **Winter inland-plain fog/low visibility is climatologically plausible** at night — verify current METAR/TAF and any LVP status at planning; no CAT II/III infrastructure is confirmed at this field.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in any reachable source. 🟧
- **Crew-qualification gate:** None identified; the standing crew-briefing item is the **Middle Atlas terrain to the south** (§3.1) and the **single-runway/no-crosswind-alternative geometry** (§3.3).
- **Operating restrictions / bans:** None found in reachable sources — no RNP AR ban, circling restriction, or night-ops limit confirmed; verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival; airport is a designated Port of Entry (§1/§6). No special state landing permit confirmed as required for scheduled commercial ops, though business-aviation trip-support sources note landing permits "may be required" depending on operation type — verify per aircraft/operation category. 🟧
- **Operations notes:** Airport operator/ANSP — **ONDA (Office National Des Aéroports)**, the Moroccan state airports authority.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed in reachable public sources | 🟧 |
| AD operating hours | Not confirmed in reachable public sources | 🟧 |
| Night / curfew restrictions | None found — not confirmed either way | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 reported available via third-party ground-handling/trip-support brokers; supplier and exact hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Designated Port of Entry; desk hours not confirmed | 🟧 |
| Handling / FBO | No single named default handling agent confirmed; several international trip-support/ground-handling brokers service the field for business aviation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 3,200 × 45 m | Asphalt, lighted / PCN not published 🟧 | 3,200 m (not independently confirmed) 🟧 | — | — | ≈3,200 m — no displaced threshold reported | Threshold elevation ~1,857 ft `[SkyVector]` |
| 27 | 3,200 × 45 m | Asphalt, lighted / PCN not published 🟧 | 3,200 m (not independently confirmed) 🟧 | — | — | Reduced by a displaced threshold — **250 m** (OurAirports) or **221 m / 725 ft** (SkyVector); resulting LDA ≈2,950 m or ≈2,979 m depending on source — **discrepancy, see §18** 🟧 | Threshold elevation ~1,893 ft `[SkyVector]` |

*Units: metres unless noted. TORA/TODA/ASDA figures are not independently confirmed against a primary AIP table this pass — treat runway length (3,200 m) as the best-corroborated figure (three independent tier-4 sources agree) and the displaced-threshold/LDA figures as open items pending current-AIRAC confirmation.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Fès ATIS | 127.80 | Not confirmed 🟧 | `[SkyVector, tier-4 — single source]` |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Not published / verify | — | — | 🟧 |
| Tower | Fès Tower | 118.60 | Not confirmed 🟧 | Corroborated by two independent tier-4 sources (OurAirports, SkyVector) |
| Approach | Fès Approach | **121.40** `[SkyVector]` vs **118.500** `[IVAO Morocco Division doc, network-sim, not regulatory]` — **discrepancy, not resolved this pass** | Not confirmed | See §18 |
| Centre / FIR | Casablanca ACC (GMMM) — "Casablanca Control" | Per current AIRAC | H24 (assumed) | See [Africa — General Airspace](../../../../airspace/africa.md) |

*Frequencies not cross-checked against a primary AIP table this pass — treat as 🟧 pending live-AIRAC confirmation, particularly the Approach frequency discrepancy noted above.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | FES | 115.70 | Not confirmed (assumed H24) 🟧 | On/near field (SkyVector plots it ~1.8 NM from the ARP at radial 092°); may support a conventional (non-precision) approach — not confirmed |
| NDB | IFN (Ifrane) | 409 kHz | Not confirmed 🟧 | ~27 NM S/SSE of the field — a nearby regional aid, not a GMFF-specific approach aid |
| ILS | None reported | — | — | No ILS found in any reachable source for GMFF |

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed in reachable public sources — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) assumed — confirm no local override on current chart.
- **Preferential runway logic:** Not confirmed — single runway, presumed wind-driven selection between 09 and 27. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 09 | Not confirmed — verify current AIRAC | — | — | 🟧 |
| 27 | Not confirmed — verify current AIRAC | — | — | Displaced threshold reduces LDA — see §7 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** No CAT II/III or LVP infrastructure confirmed at this field — treat any low-visibility arrival as a diversion-risk case pending current AIP confirmation. 🟧
- **Missed approach watch-items:** Terrain to the south/southeast (§3.1) is the primary consideration for any missed approach off RWY 27; verify current-chart missed-approach terrain clearance.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed — no primary source obtained this pass. 🟧
- **Take-off minima:** Not confirmed in reachable public sources. 🟧
- **Start-up / push-back:** Not confirmed. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found in reachable sources — presumed non-coordinated regional field, not independently confirmed. 🟧
- **De-icing:** Availability not confirmed. Given the climate (§14), routine de-icing demand is likely low relative to European fields, but this must not be assumed NIL without current-AIP confirmation, given the field does see occasional winter cold/snow. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None found in reachable sources — not confirmed either way. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — the passenger terminal has undergone at least two expansion phases (2018 modernisation; a further ~MAD 500 million/46,000 m² expansion tendered in 2024), so apron/stand configuration is likely evolving — see §Dispatch page for the commercial detail. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed — single-runway field, taxiway layout not obtained from a primary source this pass. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean-continental climate — short, hot, arid summers (average warmest-month temperature ~27°C) and long, cold, wet winters (average coldest-month temperature ~10°C) with occasional short cold spells and snow. Prevailing wind direction not confirmed from a primary source. 🟧
- **Seasonal hazards:** Winter cold spells with occasional snow; inland-plain radiation fog/low cloud at night is climatologically plausible but not quantified from a primary MET source. No harmattan/ITCZ/cyclone exposure at this latitude/location — those are lower-latitude West/East African hazards, not relevant here.
- **Local effects:** Field sits on the open Saïss Plain with Middle Atlas high ground rising close by to the south (§3.1) — terrain-influenced local wind effects are plausible near the high ground but not documented for the field itself.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closure (no reciprocal runway available), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination (regional Morocco network field) — not a K Global base. 🟧 (category itself is unset — see §1)
- **Nearest suitable alternates:** Company preferred alternates [**GMTT**](../gmtt/index.md) (Tangier Ibn Batouta, ~118 NM NNW) and [**GMMN**](../gmmn/index.md) (Casablanca Mohammed V, ~135 NM SW) `[VAMSYS mirror 2026-07-26]`; **LXGB** (Gibraltar) is also a company preferred alternate for this field `[VAMSYS mirror 2026-07-26]`. Confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 reported available via third-party ground-handling/trip-support brokers; no confirmed primary into-plane supplier or hours. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,200 m) is non-limiting for narrowbody types; confirm widebody-type performance at max weight via OM B if the field is ever used for a long-sector widebody rotation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration confirmed beyond the general field-length note in §16 — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference. Revisit this section once a K Global category is set for the field (§1) and an actual fleet type is assigned to the route.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (AIP Morocco / ONDA eAIP, AD 2 GMFF) could not be reached this pass** — connection timeout; a known access pattern for this state's eAIP (JavaScript frameset). All figures below are tier-4/public-source only until a primary AIP pass is completed.
- **K Global category is unset in VAMYS** — confirm before scheduling into service.
- **Taxi-in/out times not published in the VAMSYS mirror.**
- **Displaced threshold on RWY 27** — two tier-4 sources disagree (250 m vs 221 m/725 ft); resulting LDA differs accordingly.
- **Approach control frequency discrepancy** — 121.40 (SkyVector) vs 118.500 (IVAO Morocco Division network-sim document, not regulatory).
- **Magnetic variation (001° W)** — single tier-4 source, epoch not stated.
- **RFF category, PCN, ATS/AD operating hours, curfew, customs desk hours, primary fuel supplier/hours, named handling agent, stand count/layout, taxi routes, hot spots, follow-me availability** — none confirmed in reachable public sources.
- **Approaches, SIDs, STARs, take-off minima, transition altitude/level, RNP/gradient requirements, LVP status, noise-abatement procedure, engine run-up/reverse-thrust policy** — none confirmed; pull current AIRAC before use.
- **Terrain/MSA quantification** — Middle Atlas proximity and highest-peak elevation are corroborated from general public geographic sources, not from a primary chart; no field-specific MSA sector table obtained this pass.
- **VATSIM/IVAO cross-check** — only an IVAO Morocco Division training document (2016, network-sim, not regulatory) was found; no VATSIM vACC-published GMFF-specific SOP/briefing was located in this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/GMFF/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- SkyVector — https://skyvector.com/airport/GMFF/Fes-Saiss-International-Airport (retrieved 2026-07-26). *Coordinates, runway/threshold detail, communications, navaids.*
- Universal Weather and Aviation — https://www.universalweather.com/airports/GMFF-FEZ-SAISS-AIRPORT-FES-FES-MOROCCO/ (retrieved 2026-07-26). *Magnetic variation, Port-of-Entry/customs flag, runway summary.*
- metar-taf.com — https://metar-taf.com/airport/GMFF-fes-saiss-international-airport (retrieved 2026-07-26). *FIR (Casablanca) confirmation, timezone.*
- IVAO Morocco Division — "IVAO Morocco Division Rules — Based Pilots and ATC," v1.0, 2016-03-04 — mirrored via https://silo.tips/download/ivao-morocco-division (retrieved 2026-07-26). **Network-sim training document, not regulatory** — cross-check only; used for Tower/Approach frequency corroboration and transponder-code context.
- Wikipedia — "Fès–Saïss Airport" — https://en.wikipedia.org/wiki/Fes-Sa%C3%AFss_Airport (retrieved 2026-07-26). *General history/traffic-growth corroboration.*
- Climates to Travel — "Fez climate" — https://www.climatestotravel.com/climate/morocco/fez (retrieved 2026-07-26). *Seasonal climate corroboration.*
- Journey Beyond Travel — "Morocco's Mountain Ranges: An Overview" — https://www.journeybeyondtravel.com/blog/morocco-mountains-high-atlas-middle-atlas-anti-atlas.html (retrieved 2026-07-26). *Middle Atlas extent/peak-elevation corroboration (public travel-geography source, not aviation-grade).*
- MEConstructionNews — "Morocco's Fez-Saiss Airport expansion 60% complete" — https://meconstructionnews.com/2356/moroccos-fez-saiss-airport-expansion-60-complete (retrieved 2026-07-26). *Terminal capacity/expansion history.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
