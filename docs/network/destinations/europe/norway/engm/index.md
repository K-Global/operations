# ENGM — Oslo Gardermoen · Airport Briefing

**ENGM / OSL** · Ullensaker, Akershus/Viken, Norway · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Norge / public-data build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from Avinor AIP Norge (AD 2 ENGM) where reachable, cross-checked with public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N60°12′10″ / E011°05′02″ (60.2028, 11.0839) — minor (~1 NM) variance between public sources on exact ARP; treat as indicative pending AIP AD 2.2 confirmation 🟧 |
| Field elevation | **681 ft / 208 m AMSL** |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **01L/19R** 3,600 × 45 m (asphalt) · **01R/19L** 2,950 × 45 m (asphalt) — two full-length, fully independent parallel runways |
| Preferential runway | Wind/traffic dependent; the field is built for **independent parallel-runway operation** (segregated arrivals/departures split is commonly described but the exact assignment logic is not independently AIP-confirmed this pass) 🟧 — see §3.2 |
| Longest LDA | Not published / verify 🟧 (runway length 3,600 m on 01L/19R; declared-distance table not confirmed) |
| Approaches | ILS reported with **CAT III capability** on the field (tier-4 sourced); exact per-runway-end category (which end is CAT I vs CAT II/III) not confirmed from a primary table this pass 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Oslo ATC Centre ("Oslo ACC", part of Avinor Flysikring's consolidated Norway ACC, physically sited at Røyken) provides approach/en-route; **FIR Norway (ENOR)** — no dedicated FIR brief in-library, see [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (681 ft) — **not** hot-and-high; the performance/reliability driver here is **winter freezing fog/rain and runway contamination**, not density altitude |
| Special-airport status | Not operator-categorised in reachable sources; the standing crew-briefing items are the **independent-parallel-runway environment** and **winter CAT III/de-icing reliance** — see §5 |
| Customs / PoE | **Yes** — international/domestic transfer requires a baggage re-clearance step for most itineraries (a small set of through-ticketed connections use a "domestic transfer" process that skips it) 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **ESSA, EKCH, ESGG** (cross-country — plain ICAO reference, no link) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat glaciofluvial delta plain (Trandum Delta) north of Oslo; no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | 3,600 m (01L/19R) and 2,950 m (01R/19L) are ample for any K Global widebody at typical arrival/departure weights; exact declared-distance table not confirmed — see §7. |
| Approach availability / minima | 🟧 | CAT III capability reported on the field; which runway end(s) carry CAT I vs CAT II/III not confirmed from a primary source this pass. |
| Airspace / traffic / control | 🟧 | Independent parallel-runway operation (~80 movements/hour design capacity); SKYbrary flags **runway misidentification** as a named risk category for this field — brief crews to positively confirm the assigned runway. |
| Weather / seasonal hazard | 🟥 | Winter **freezing fog/freezing rain** is the field's defining hazard — has historically closed the airport and caused a multi-aircraft icing-related engine-damage event (Dec 1998). |
| Curfew / slots / hours | 🟧 | Night movement restriction reported (23:00–06:00, north-side exception) from an older source; current slot-coordination level not confirmed. |
| RFF category vs our types | 🟧 | Category not published in reachable sources — confirm meets our fleet requirement before treating as non-limiting. |
| Fuel availability | 🟧 | Not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | International PoE confirmed; domestic-transfer customs nuance noted; ground handler(s) and desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ENGM sits at 681 ft AMSL on the flat **Trandum Delta** — a glaciofluvial (sand/gravel) outwash plain north of Oslo — with **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟧
Gardermoen was built with **two full-length, fully independent parallel runways** (01L/19R 3,600 m; 01R/19L 2,950 m), each reportedly served by its own ILS and dedicated runway-end ground radar, giving a design capacity of roughly **80 movements/hour**. The commonly described operating concept — one runway weighted to arrivals, the other to departures, with mixed-mode used at lower traffic or certain wind states — is **widely reported in enthusiast/flight-sim sources but not independently confirmed against the AIP or Avinor's published ATS procedures this pass**; do not brief the arrival/departure split as a fixed fact without a current-chart check. Separately, **SKYbrary's ENGM airport page carries an explicit "Runway Misidentification" risk tag** — with two similarly-oriented parallel runways in use, positively confirm the assigned runway before landing/departing. Cross-ref [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 (no Norway-specific FIR brief exists in-library yet).

### 3.3 Runway excursion 🟧
No displaced thresholds were found in reachable public sources for either runway pair — **not independently confirmed against the AIP**. PCN and the full declared-distance (TORA/TODA/ASDA/LDA) table were not located this pass either — treat exact figures as unverified until checked against a current AIRAC/AIP extract. The principal excursion driver at this field is **winter contamination** (snow, slush, ice) rather than geometry — braking-action reporting and runway condition assessment matter far more here than at a temperate-climate field.

### 3.4 Weather threat 🟥
**Winter radiation/freezing fog and freezing rain** is Gardermoen's signature hazard. On **14 December 1998**, freezing fog combined with supercooled rain produced glaze icing that damaged at least 20 aircraft engines during takeoff roll and forced 5 aircraft to make precautionary single-engine landings — a documented, field-specific cold-weather event. A further operational constraint unique to this field: **de-icing fluid use is restricted** because the airport sits directly above the **Trandum Delta**, one of Norway's largest uncontained quaternary groundwater aquifers — fluid provisioning and runoff management are handled with this in mind. See §14 and [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

### 3.5 Operational considerations 🟧
Plan around: (1) the **independent-parallel-runway environment** and its associated runway-misidentification risk (§3.2); (2) **winter freezing fog/rain and de-icing-fluid provisioning constraints** tied to the underlying aquifer (§3.4); and (3) a **reported night movement restriction (23:00–06:00, with a north-side exception)** sourced to an older reference — confirm the current regime before relying on it operationally (§6/§9 in the Dispatch page). RFF category, exact ILS categories per runway end, and PCN/declared distances are all open items (§18) rather than confirmed safety-critical gaps — but should be closed before this brief is treated as verified.

---

## 4. Cautions & Warnings

- **Two independent parallel runways** — SKYbrary flags runway misidentification as a named risk at this field; positively confirm the assigned runway.
- **Winter freezing fog/freezing rain** can close the field or produce glaze-icing conditions with limited warning (Dec 1998 precedent) — check current LVP/CAT III status and de-ice provisioning before planning.
- **De-icing fluid use is constrained** by the airport's position atop the Trandum Delta aquifer — confirm current-season provisioning/holdover guidance locally rather than assuming unlimited fluid availability.
- **Reported night movement restriction 23:00–06:00** (with a north-side exception) — sourced to an older reference; verify current NOTAM/AIP before building a schedule around it.
- International connections at OSL commonly require a **baggage re-clearance through customs** for domestic onward legs — a pax-flow, not tactical-flying, consideration, but relevant to connection-time planning.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **independent-parallel-runway environment** and the **winter CAT III/de-icing environment**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability winter low-vis ops, consistent with the field's reported CAT III infrastructure — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Reported night movement restriction 23:00–06:00 (north-side exception) — not independently re-confirmed against a current source; no RNP AR ban or circling restriction found — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival (Norway participates in Schengen though outside the EU); no special state permit required. 🟩
- **Operations notes:** ANSP — **Avinor Flysikring** (Oslo ATC Centre, "Oslo ACC," sited at Røyken as part of Norway's consolidated three-site ACC structure). Airport operator — **Avinor AS**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 at a major international hub — not independently confirmed | 🟧 |
| AD operating hours | Reported night restriction 23:00–06:00 (north-side landing/takeoff exception) — sourced to an older reference | 🟧 |
| Night / curfew restrictions | See above — current regime not independently re-confirmed | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not confirmed in reachable public sources | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed; domestic-transfer baggage re-clearance nuance for most itineraries; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable public sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01L | 3,600 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | West runway; no displaced threshold found in reachable sources |
| 19R | 3,600 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Reciprocal |
| 01R | 2,950 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | East runway; no displaced threshold found in reachable sources |
| 19L | 2,950 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Reciprocal |

*Runway dimensions corroborated across OurAirports, SkyVector, Wikipedia and SKYbrary. Full declared-distance table and PCN were not located in reachable public sources this pass — verify against AIP Norge AD 2 ENGM 2.12/2.13 before treating as audit-grade. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Gardermoen ATIS | Arrival 126.12 / Departure 127.15 (source discrepancy vs a second public source — treat as indicative) | Assumed H24 | 🟧 |
| Delivery | Gardermoen Delivery | 121.68 / 121.93 | Assumed H24 | 🟧 |
| Ground | Gardermoen Ground | 121.60 / 121.73 / 121.90 | Mixed H24/HX | 🟧 |
| Tower | Gardermoen Tower | 118.30 / 118.70 / 120.10 / 123.32 / 257.80 | Mixed H24/HX | Multiple positions — take the assigned frequency 🟧 |
| Approach / Director | Gardermoen Approach/Final | 118.47 / 119.97 / 120.45 / 128.90 / 129.30 / 136.40 | Mixed | 🟧 |
| Centre / FIR | Oslo ACC (Norway ACC network, Røyken) | Per current AIRAC | H24 | See [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 |

*Two overlapping tier-4 sources (SkyVector, OurAirports) show minor frequency discrepancies — treat exact values as 🟧 pending a live-AIRAC cross-check; the tower/ground/approach/delivery structure itself is stable.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | GRM (Gardermoen) | 115.95 | Assumed H24 | On/near field |
| NDB | SLB (Solberg) | Not published / verify 🟧 | Assumed H24 | Near Skytta |
| ILS — all runway ends | Not published / verify 🟧 | Not published / verify 🟧 | H24 (assumed) | CAT III capability reported on the field; per-end idents/frequencies/categories not confirmed |

*The former MSK "Morskogen" NDB (347 kHz) is reported decommissioned (c. 2011) — do not use as current. ILS idents/frequencies per runway end were not located in reachable public sources this pass — verify against AIP Norge AD 2 ENGM 2.13/2.14 or a current chart supplier.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic-dependent within the independent-parallel-runway concept (§3.2); exact segregated-mode assignment not AIP-confirmed this pass. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 01L/19R/01R/19L | ILS (CAT III capability reported field-wide) | Not published / verify 🟧 | Not published / verify 🟧 | Exact per-runway-end category not confirmed |

- **STARs (names only):** Not confirmed in reachable public sources — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Winter freezing fog/freezing rain is the routine trigger (§14); exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plain); the operative concern is re-sequencing within the independent-parallel-runway traffic flow and positive runway confirmation (§3.2).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable public sources — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed in reachable public sources. 🟧
- **ATC slot / CTOT & clearance:** Slot-coordination level not confirmed; EUROCONTROL Network Manager ATFM/CTOT regulation may apply as general Northern-Europe practice — not independently ENGM-sourced. 🟧
- **De-icing:** Reported **three de-icing platforms** (cited to an AIP AD 2 ENGM extract via a secondary source, not independently re-confirmed this pass); **fluid use is restricted** owing to the underlying Trandum Delta aquifer. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No named NADP confirmed in reachable sources. 🟧 OSL is operated as a low-noise-footprint "silent airport" for terminal announcements (gate-local paging only) — a passenger-experience policy, not a flight procedure.
- **Night noise / dB limits:** Not confirmed in reachable sources — verify locally. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Single-terminal, multi-pier layout — West Wing (domestic), South Pier, North Pier (opened 2017), East Pier (international; long-haul/widebody expansion added gates intended to eventually support A380-size aircraft). Exact current stand count is inconsistent between public sources (~71–72 reported, split roughly 44–50 bridge-connected) — treat as indicative only. 🟧 | 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; two runway-end ground radars are reported in use for surface monitoring.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources — verify AIP aerodrome chart. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid continental (Köppen Dfb), warm-summer subtype; large seasonal temperature range typical of inland Scandinavia.
- **Seasonal hazards:** **Winter radiation/freezing fog and freezing rain** is the field's defining hazard — has produced full airport closures and a documented multi-aircraft glaze-icing engine-damage event (14 Dec 1998). Recognised snow/de-icing season through the winter months; de-icing fluid use is constrained by the field's position over the Trandum Delta aquifer (§3.4).
- **Local effects:** No notable terrain/sea-breeze effects at this inland, flat-plain field; winter fog is the standout local effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current de-icing-pad status. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** (not a K Global base). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **ESSA** (Stockholm Arlanda), **EKCH** (Copenhagen), **ESGG** (Gothenburg) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Not confirmed in reachable public sources. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting on the main runway (3,600 m) for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No type-specific performance penalty identified at this field's elevation/length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning consideration at ENGM is winter cold-weather/de-icing reliance rather than aircraft performance — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — not located in reachable sources.
- **RFF category** — not located in reachable sources.
- **Exact ILS category per runway end** (which end is CAT I vs CAT II/III) — field-wide CAT III capability reported but not confirmed per-end.
- **PCN and full declared-distance table** (TORA/TODA/ASDA/LDA) — not located in reachable sources.
- **Transition altitude/level** — not located.
- **Independent-parallel-runway segregated-mode assignment logic** (which runway is arrivals-weighted vs departures-weighted) — commonly described in enthusiast sources, not AIP-confirmed.
- **Current slot-coordination level** — not located.
- **Current night-restriction/curfew regime** — sourced to an older reference (23:00–06:00, north-side exception); needs a live check.
- **Named SIDs/STARs** — not obtained this pass.
- **Taxiway hot spots** — not located.
- **ATC frequencies** — two tier-4 sources show minor discrepancies; not current-AIRAC-verified.
- **De-icing pad location/season dates**, ground handler(s), fuel supplier — not confirmed.
- **NADP / noise-charge specifics** — not confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ENGM/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- SkyVector — https://skyvector.com/airport/ENGM/Oslo-Gardermoen-Airport (retrieved 2026-07-26). *Coordinates, runway, frequency, navaid cross-check.*
- Wikipedia — "Oslo Airport, Gardermoen" — https://en.wikipedia.org/wiki/Oslo_Airport,_Gardermoen (retrieved 2026-07-26). *History, terminal/pier layout, de-icing/aquifer constraint, curfew, 1998 icing event.*
- Wikipedia — "Oslo Air Traffic Control Center" — https://en.wikipedia.org/wiki/Oslo_Air_Traffic_Control_Center (retrieved 2026-07-26). *ACC structure/siting.*
- SKYbrary — ENGM airport page — https://skybrary.aero/airports/engm (retrieved 2026-07-26). *Climate classification, runway-misidentification risk tag.*
- OpenNav — https://opennav.com/airport/ENGM (retrieved 2026-07-26). *Navaid cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public AIP-adjacent data (Avinor AIP Norge not independently reachable this pass); K Global fields from live VAMSYS; 4-page pack. |
