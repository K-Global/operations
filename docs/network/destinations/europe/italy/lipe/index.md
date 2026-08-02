# LIPE — Bologna/Borgo Panigale (Guglielmo Marconi) · Airport Briefing

**LIPE / BLQ** · Bologna, Emilia-Romagna, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. The primary state source (AIP Italia / ENAV eAIP, AD 2 LIPE) is registration/login-gated and was not independently reachable this pass — static data here is cross-corroborated from public tier-4 sources (SkyVector, AC-U-KWIK, Universal Weather, Wikipedia) and a network-sim operational reference (IVAO Italian Division), and flagged accordingly. Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 44°31′51″N / 11°17′49″E (44.5308, 11.2969) 🟧 tier-4 cross-check (SkyVector + Universal Weather agree; one older aggregator listing differs by ~0.5 km — see §18) |
| Field elevation | **123 ft / 37 m AMSL** — consistent across all reachable tier-4 sources |
| Mag variation | 🟧 **~3° E** — tier-4 sourced (AC-U-KWIK, Universal Weather); not confirmed against a current AIP cycle |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **12/30**, single runway, 2,800 × 45 m (asphalt) |
| Preferential runway | **RWY 12 for landing / RWY 30 for takeoff** for ICAO code D/E/F aircraft 🟧 (network-sim cross-check); reinforced at night by the noise-abatement direction rule — see §12 |
| Longest LDA | 2,493 m (RWY 12) / 2,442 m (RWY 30) 🟧 tier-4 — see §7 |
| Approaches | ILS, LOC, VOR, RNAV published for both runway ends (names only); **ILS reported CAT IIIB** by non-AIP sources — sub-category, ident and frequency **not confirmed** 🟧 |
| RFF category | **CAT 8** 🟧 (tier-4 sourced, not confirmed from primary AIP) |
| Control type | **Radar** — Bologna Approach/Tower on the field; **Milano ACC (LIMM)** en route. No dedicated Italian FIR brief exists yet in this library — see [Europe airspace overview](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (123 ft) — flat Po Valley, **not** hot-and-high; the defining seasonal driver is **winter radiation fog**, not density altitude |
| Special-airport status | Not operator-categorised as restricted; standing watch items are single-runway capacity, winter fog/LVP reliance, and the night noise-abatement regime — see §5 |
| Customs / PoE | **Yes** — international arrivals handled in the single terminal; exact desk hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LIMC, LIPZ, LIRF** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Po Valley basin; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟧 | Single 2,800 m runway is non-limiting for narrowbody types and for widebody types at moderate weight; no fleet-specific field-length/weight study performed this pass for our largest widebody types at MTOW — see §16/§17 and `OM B — Fleet Capability Matrix`. |
| Approach availability / minima | 🟧 | ILS/LOC/VOR/RNAV published both ends (names only, tier-4); CAT IIIB commonly reported but **not confirmed from a primary AIP table**. |
| Airspace / traffic / control | 🟩 | Single-runway regional field (~83,000 movements/year); radar environment under Bologna Approach/Tower and Milano ACC en route — not comparable to major-hub traffic complexity. |
| Weather / seasonal hazard | 🟥 | **Po Valley winter radiation fog and temperature inversions** are the field's defining seasonal threat. |
| Curfew / slots / hours | 🟥 | Formal **night noise restriction 23:30–05:00** with a preferential runway-direction rule and reduced overnight movement capacity — see §6/§12. |
| RFF category vs our types | 🟧 | CAT 8 reported (tier-4 only); confirm against fleet requirement, particularly for widebody types. |
| Fuel availability | 🟧 | Jet A-1 assumed available; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | Port-of-Entry confirmed; exact desk hours and the specific ground handler contracted for our operation not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LIPE sits at 123 ft AMSL in the flat Po Valley basin — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟩
LIPE is a **single-runway regional field** handling roughly 83,000 movements a year — busy for its class but not comparable to a multi-runway major hub. Bologna Approach/Radar (two sectors, tier-4 sourced) and Bologna Tower manage the local traffic; **Milano ACC (LIMM)** provides en route control. No dedicated Italian FIR brief exists yet in this library — cross-ref the [continental Europe airspace overview](../../../../airspace/europe.md) 🟧 pending a dedicated Milano ACC build. Non-standard traffic patterns are published as left-hand for RWY 12 and right-hand for RWY 30 (tier-4/network-sim cross-check) — brief the pattern direction for the runway in use.

### 3.3 Runway excursion 🟧
The single runway carries **displaced thresholds on both ends** (tier-4 reports ~310 m on RWY 12, ~362 m on RWY 30), reducing published LDA to 2,493 m (RWY 12) and 2,442 m (RWY 30) against a 2,800 m physical runway — brief the correct LDA for the runway in use, not the full physical length. As a single-runway field, any runway-surface NOTAM (contamination, closure, equipment U/S) is a **full-field stop** with no parallel/alternate runway option — this raises the operational weight of routine runway-condition NOTAMs relative to a multi-runway field.

### 3.4 Weather threat 🟥
The **Po Valley is one of the most fog-prone regions in Europe** — long nocturnal cooling, frequent temperature inversions, high relative humidity and weak synoptic forcing drive radiation fog, peaking **November–January**. Published climate research notes a declining fog-occurrence trend at Bologna over the last three decades, consistent with the broader European pattern, but the basin dynamics remain a live seasonal factor and the direct rationale for the field's low-visibility procedures (§10/§14). Standard Central European afternoon convective/thunderstorm risk applies in summer — general regional climatology, no LIPE-specific frequency statistic found.

### 3.5 Operational considerations 🟧
Three durable planning items: (1) **no jetways — all 24 gates are bus gates**, which lengthens boarding/deplaning versus a contact-gate field and should be budgeted into turnaround planning; (2) the **single-runway/LVP interaction** — when low-visibility procedures are in effect, operations are reported restricted to **RWY 12 only** for both landing and takeoff (tier-4), so a wind state favouring RWY 30 during fog can create a tailwind-limited or delay/diversion scenario; (3) the **night noise-abatement direction rule** (§12), which can constrain the usable runway direction after dark independent of wind.

---

## 4. Cautions & Warnings

- **Single runway (12/30)** — no parallel or reciprocal-direction option if the runway is NOTAM'd unusable; treat any runway-condition NOTAM as a full-field-stop risk.
- **Displaced thresholds both ends** reduce LDA below the physical 2,800 m runway length — confirm LDA for the runway in use, not TORA.
- **LVP reported restricted to RWY 12 only** — a fog event with wind favouring RWY 30 is a real operational trap; check current LVP status before planning.
- **All gates are bus gates (no jetways)** — build extra turnaround time versus a contact-gate assumption.
- **Night noise-abatement direction rule** (RWY 30 departures / RWY 12 arrivals preferred at night) can override the "expected" wind-favoured runway after dark.
- Mag variation and several figures in this brief are tier-4/network-sim sourced only — treat exact current values as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted "special airport" in reachable sources; the standing crew-briefing items are the **single-runway/LVP-to-RWY-12 interaction** and the **winter fog environment**. 🟧
- **Crew-qualification gate:** Standard CAT II/III currency expected for winter low-visibility ops against the reported CAT IIIB ILS (sub-category unconfirmed from a primary source). 🟧
- **Operating restrictions / bans:** Night noise restriction 23:30–05:00 with a preferential runway-direction rule for code D/E/F aircraft (§12); no RNP AR ban or circling restriction confirmed — network-sim source reports **circling not authorised** on either runway end, not independently AIP-confirmed. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **ENAV** (Bologna Approach/Radar, Bologna Tower on the field); en route — **Milano ACC (LIMM)**. Airport operator — **Aeroporto Guglielmo Marconi di Bologna S.p.A.** Single-runway, single-terminal field.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 assumed (tower/approach) | 🟧 |
| AD operating hours | Reported H24 with some restriction noted by an aggregator source, exact scope not confirmed | 🟧 |
| Night / curfew restrictions | **Formal night noise restriction 23:30–05:00**; preferential runway-direction rule (RWY 30 departures / RWY 12 arrivals) for code D/E/F; overnight movement capacity reported roughly halved versus daytime | 🟥 |
| RFF category | **CAT 8** (tier-4) | 🟧 |
| Fuel | Jet A-1 assumed available; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Yes; exact desk hours not confirmed | 🟧 |
| Handling / FBO | **Aviapartner** (scheduled/commercial ground handling); **TAG Bologna** (business-aviation FBO/GAT operator) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 2,800 × 45 m | Asphalt / PCN not published — verify 🟧 | 2,803 m 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | 2,493 m 🟧 | Displaced threshold ~310 m; **preferential landing runway** for code D/E/F; also the sole runway usable when LVP is in effect |
| 30 | 2,800 × 45 m | Asphalt / PCN not published — verify 🟧 | 2,803 m 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | 2,442 m 🟧 | Displaced threshold ~362 m; **preferential takeoff runway** for code D/E/F; default night noise-abatement departure direction |

*Source: cross-corroborated from SkyVector (displaced-threshold figures) and an IVAO Italian Division network-sim operational reference (TORA/LDA); the primary AIP Italia (ENAV eAIP, AD 2 LIPE) is registration/login-gated and was not independently reachable this pass — treat every figure in this table as 🟧 pending a live-AIRAC/primary-AIP cross-check. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Bologna ATIS | 134.870 | H24 (assumed) | 🟧 tier-4 only |
| Delivery | Not published separately — likely combined with Ground | — | — | 🟧 |
| Ground | Bologna Ground | 121.925 | H24 (assumed) | 🟧 |
| Tower | Bologna Tower | 120.800 | H24 (assumed) | 🟧 cross-corroborated across two tier-4 sources |
| Approach | Bologna Radar — West sector 133.775 / East sector 118.150 | Mixed | 🟧 sector split reported inconsistently as West/East vs North/South across sources — treat as indicative only |
| Centre / FIR | **Milano ACC (LIMM)** | Per current AIRAC | H24 | No dedicated Italian FIR brief exists yet in this library — see [Europe airspace overview](../../../../airspace/europe.md) 🟧 |

*Frequencies sourced to SkyVector and an IVAO Italian Division network-sim operational reference — network-sim doc, not regulatory; corroboration only. Not independently confirmed against a current AIRAC cycle.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | BOA | 117.10 | H24 (assumed) | On-field Bologna VOR/DME 🟧 |
| ILS | Not published / verify | Not published / verify | — | Serves the CAT-IIIB-reported runway end (RWY 12); ident, frequency and sub-category **not confirmed** from a primary source 🟧 |

*BOA VOR/DME cross-checked via SkyVector. ILS infrastructure existence corroborated by multiple tier-4 sources reporting CAT IIIB capability, but no primary-source ident/frequency table was reachable this pass.*

---

## 10. Arrival

- **Transition altitude / level:** TA 6,000 ft (tier-4); TL varies by QNH band per a published table — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** **RWY 12 preferred for landing** (code D/E/F) per tier-4 network-sim cross-check; reinforced at night by the noise-abatement direction rule (arrivals from the Bargellino direction, i.e. RWY 12).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 12 | ILS, LOC, VOR, RNAV | Not published / verify | Not published / verify | ILS reported **CAT IIIB** (unconfirmed); preferential landing runway; sole runway usable under LVP 🟧 |
| 30 | ILS, LOC, VOR, RNAV | Not published / verify | Not published / verify | Used for arrivals when wind/traffic dictates reciprocal-direction ops |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Reported to restrict operations to **RWY 12 only** (both arrival and departure) when in effect — trigger conditions/exact RVR minima not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat basin); the operative concern on a missed approach is that **this is a single-runway field** — there is no parallel-runway or reciprocal-direction fallback, raising the weight of a timely diversion decision if weather is marginal.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** PELEG, LUMAV, LUPOS, LOMED (published from both runway ends, both RNAV and conventional variants per tier-4/network-sim cross-check) — verify the current-AIRAC procedure list and naming before use. 🟧
- **RNP / climb-gradient requirements:** RNAV SID variants exist alongside conventional variants at both runway ends; confirm gradient/equipage requirements on the current chart. 🟧
- **Take-off minima:** Published per AIP — not confirmed in reachable sources this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources; ground handling for scheduled/commercial traffic is provided by **Aviapartner**. 🟧
- **ATC slot / CTOT & clearance:** Slot-requirement status is reported inconsistently across tier-4 sources (one indicates a requirement, another indicates none) — flagged, not resolved this pass. Standard EUROCONTROL Network Manager ATFM/CTOT regulation applies as general EU practice. 🟧
- **De-icing:** Availability not confirmed in reachable public sources — plan for a winter de-icing requirement given the regional cold-season climate and confirm locally. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** A formal **night noise restriction applies 23:30–05:00**. Reported practice directs all take-offs and landings toward/from the Bargellino direction where possible — i.e. **RWY 30 for departures, RWY 12 for arrivals** — even at the cost of delay, unless weather or safety conditions preclude it; overnight hourly movement capacity is reported at roughly half the daytime rate. Exemptions apply to state, military, humanitarian, and search-and-rescue flights, and to flights otherwise authorised by ENAC. A recent year recorded only a small fraction of a percent of annual movements as night overflights of the city, indicating tight practical enforcement of the restriction. 🟥
- **Night noise / dB limits:** No specific published per-movement dB limit found in reachable sources — the restriction is enforced through the movement/direction rule above rather than a stated decibel cap. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** A newer apron area ("Lot III", built 2023, ~42,000 m²) provides **4 code-E (widebody) stands or 9 code-C stands**; the balance of the apron is narrowbody-oriented. All **24 gates are bus gates — there are no jetways** at this field. 🟧
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Tier-4/network-sim reference reports **TWY J as the standard exit taxiway and TWY K as the standard entry taxiway** — not independently AIP-confirmed. 🟧
- **Hot spots / tight taxiways:** No named hot spots beyond the entry/exit taxiway assignment were found in reachable sources; this is a comparatively simple single-runway/single-taxiway-system field relative to a major hub, but the point is not independently confirmed. 🟧
- **Follow-me:** Availability not confirmed in reachable sources — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate Po Valley climate; prevailing wind not independently confirmed this pass. 🟧
- **Seasonal hazards:** **Po Valley radiation fog and temperature inversions**, peaking November–January, are the field's defining seasonal hazard — long nocturnal cooling and weak synoptic forcing in the basin routinely drive visibility down, which is the direct rationale for the field's low-visibility procedures (§10). Published climate research notes a declining fog-frequency trend at Bologna over the last three decades, consistent with the wider European pattern, but the basin dynamics remain live. Summer carries standard Central European afternoon convective-storm risk — general regional climatology, no LIPE-specific frequency statistic found.
- **Local effects:** No significant local terrain or sea-breeze effect at this inland, flat-basin field; the basin-trapped fog dynamic is the standout local effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closure/contamination (this is a single-runway field — a runway NOTAM is a full-field-stop risk), ILS/navaid U/S, current LVP status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNAV procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — network spoke, not a base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates [**LIMC**](../limc/index.md) (Milan Malpensa), [**LIPZ**](../lipz/index.md) (Venice Tessera), [**LIRF**](../lirf/index.md) (Rome Fiumicino) `[VAMSYS mirror 2026-07-26]` — LIMC and LIPZ are migrated to the 4-page folder format in this library; LIRF remains a single-file stub brief (not yet migrated) 🟧; confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The single 2,800 m runway is non-limiting for narrowbody types; no fleet-specific field-length/weight study has been performed this pass for our largest widebody types at MTOW. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- LIPE has historically supported scheduled widebody long-haul service (a seasonal Bologna–New York widebody service operated 2005–2008, per public sources), and the newer Lot III apron provides dedicated code-E stands — so widebody infrastructure exists at this field. The standing consideration for a widebody turn here is **bus-gate boarding/deplaning** (no jetways), which should be built into turnaround planning regardless of aircraft type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP access** — AIP Italia (ENAV eAIP) requires portal registration/login; not independently reachable this pass. Every figure in this brief is tier-4-corroborated only, pending a primary-source cross-check.
- **ARP coordinates** — two tier-4 sources (SkyVector, Universal Weather) agree at 44.5308/11.2969; one older aggregator listing differs by roughly 0.5 km. Not resolved against a primary source.
- **Magnetic variation (~3° E)** — tier-4 sourced only.
- **Declared distances (TORA/TODA/ASDA/LDA) and PCN** — TORA/LDA cross-checked via a network-sim operational reference; TODA/ASDA and PCN not found in any reachable source.
- **ILS ident, frequency and CAT sub-category (IIIA/IIIB)** — commonly reported elsewhere as CAT IIIB but not confirmed from a primary AIP table.
- **ATC frequencies** — sourced to tier-4/network-sim references only; sector-naming (West/East vs North/South) is inconsistent across sources.
- **SIDs/STARs (current names/gradients)** — SID names sourced to a network-sim reference; STAR names not obtained this pass. Pull the live current-AIRAC procedure list before use.
- **RFF category (CAT 8)** — tier-4 sourced only.
- **Slot-coordination requirement** — reported inconsistently (Yes vs N/A) across two tier-4 sources.
- **Fuel supplier(s) and into-plane hours; customs/immigration desk hours; ground handler contracted for our specific operation; push-back and follow-me policy; take-off minima; night noise dB limit; engine run-up and reverse-thrust policy; de-icing availability** — none confirmed in reachable sources.
- **Distance from city centre** — sources vary between roughly 2 km and 6 km depending on the reference point used; not resolved.
- **No dedicated Italian FIR brief exists yet in this library** — Milano ACC (LIMM) is referenced generically via the continental Europe airspace overview pending a dedicated build.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **ENAV — AIP Italia** landing page — https://www.enav.it/en/what-we-do/we-create-solutions-for-international-markets/informazioni-aeronautiche/aip-italia (retrieved 2026-07-26). *Primary source register entry; the eAIP itself requires portal registration/login and was not independently reachable this pass.*
- Wikipedia — "Bologna Guglielmo Marconi Airport" — https://en.wikipedia.org/wiki/Bologna_Guglielmo_Marconi_Airport (retrieved 2026-07-26). *Runway dimensions, terminal/gate structure, historical widebody service.*
- SkyVector — https://skyvector.com/airport/LIPE/Bologna-Borgo-Panigale-Airport (retrieved 2026-07-26). *ARP/runway-end coordinates, displaced thresholds, navaids, frequencies.*
- AC-U-KWIK — https://acukwik.com/Airport-Info/LIPE (retrieved 2026-07-26). *Elevation, magnetic variation, RFF category, customs/slot fields.*
- Universal Weather and Aviation — https://www.universalweather.com/airports/LIPE-BLQ-BOLOGNA-AIRPORT-BOLOGNA-EMILIA-ROMAGNA-ITALY/ (retrieved 2026-07-26). *ARP coordinates, magnetic variation, runway data cross-check.*
- IVAO Italian Division — Airport QuickOverview, LIPE — https://quickoverview.ivao.it/aerodrome/show/LIPE (retrieved 2026-07-26). *Network-sim operational reference, not regulatory — preferential runway logic, TORA/LDA, taxiway entry/exit assignment, frequencies, SID names, TA/TL. Corroboration only.*
- Aeroporto di Bologna (bologna-airport.it) — press release on night flight activity measures — https://www.bologna-airport.it/en/the-company/press-room/press-release/the-measures-regarding-night-time-flying-activity-to-avoid-take-offs-and-landings-on-the-city-of-bologna-have-been-confirmed/?idC=62420&idO=2612303 (retrieved 2026-07-26). *Night noise-abatement/curfew regime, operator statement.*
- MDPI (Aerospace) — "Observed Trends in Aviation-Related Weather Hazards at Major Italian Airports Under Changing Climate Conditions" — https://www.mdpi.com/2674-0494/5/1/7 (retrieved 2026-07-26). *Po Valley fog climatology.*
- Aviapartner — Bologna station page — https://www.aviapartner.aero/bologna (retrieved 2026-07-26). *Ground-handling presence at BLQ.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
