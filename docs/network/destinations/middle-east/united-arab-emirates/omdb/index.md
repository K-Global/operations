# OMDB — Dubai Intl · Airport Briefing

**OMDB / DXB** · Dubai, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — UAE GCAA AIP not reachable this pass; built from tier-4 public sources, cross-checked against the Emirates (OMAE) FIR brief

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (OurAirports, Wikipedia, the Emirates FIR brief) pending a live UAE GCAA AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 25.25278°N 55.36444°E `[Navigraph navdata]`; independent tier-4 fix 25.249790°N 55.370992°E (~0.4 NM SW) — minor discrepancy, not reconciled 🟧 |
| Field elevation | **62 ft / 19 m AMSL** — consistent across sources 🟩 |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+4 (UAE Standard Time, no DST) |
| Runway(s) | **12L/30R** 4,351 m × 60 m · **12R/30L** 4,447 m × 60 m (both asphalt, lighted) `[OurAirports]` |
| Preferential runway | Not published / verify — closely-spaced parallels used in independent/dependent mode by traffic direction; no published preferential rule found 🟧 |
| Longest LDA | ~4,447 m class before displaced-threshold adjustment (see §7 for exact figures) |
| Approaches | ILS reported on both runways `[tier-4]` — CAT/sub-category and per-runway minima not confirmed from a primary source 🟧 |
| RFF category | Not published / verify — assumed in the highest ICAO band given the airport's traffic volume and widebody mix, **not confirmed** 🟧 |
| Control type | **Radar** — Dubai TMA terminal control (**dans — Dubai Air Navigation Services**, per the Emirates FIR brief); **Emirates area control (GCAA — Sheikh Zayed Air Navigation Centre)** enroute — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |
| Elevation class | Near sea-level (62 ft) — **not** hot-and-high; the performance driver is **summer extreme heat/density altitude**, not field elevation |
| Special-airport status | 🟥 **Closely-spaced parallel runways with significant displaced thresholds** on both (see §7); one of the world's busiest international-passenger airports — very high traffic density |
| Customs / PoE | **Yes** — Terminal 1 and Terminal 3 international halls; H24 assumed for a major hub, exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` |
| K Global base | No — in-country alternate/secondary field to the [OMAA](../omaa/index.md) home hub `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **OMDW, OMAA** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 18 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal desert site; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | Both parallels are in the 4,350 m+ class — ample for any K Global widebody type even after displaced-threshold reduction; exact current-cycle figures pending AIP confirmation. |
| Approach availability / minima | 🟧 | ILS reported on both runways by tier-4 corroboration only — CAT/sub-category and minima not independently confirmed from a primary AIP table this pass. |
| Airspace / traffic / control | 🟥 | One of the world's busiest international-passenger airports; closely-spaced parallel runways plus very high movement rate drive sustained high controller/crew workload — see §3.2. |
| Weather / seasonal hazard | 🟥 | Summer extreme heat/density altitude and shamal dust are the field's defining seasonal hazards — see §14. |
| Curfew / slots / hours | 🟧 | No published curfew found in reachable sources; a slot-coordination regime would be expected at a field of this traffic density but is **not confirmed** — verify at planning. |
| RFF category vs our types | 🟧 | Category not confirmed from a primary source this pass — assumed adequate for widebody ops at a major international hub. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 as a major hub; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | T1/T3 international halls confirmed to exist; exact desk hours and current terminal/gate assignment for our operation not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OMDB sits at 62 ft AMSL on flat coastal/desert terrain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
Dubai Intl is historically one of the **busiest airports in the world for international passenger traffic**, operating two closely-spaced parallel runways (12L/30R, 12R/30L) at very high movement rates. The airport has previously operated single-runway (during scheduled resurfacing work — see §18) with material capacity reduction, underlining how tightly the two-runway system is utilised in normal operations. Expect sustained high controller/crew workload, frequent parallel-dependent sequencing, and dense radar vectoring under **dans (Dubai Air Navigation Services)** terminal control within the wider Emirates FIR. Cross-ref [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §3/§6.

### 3.3 Runway excursion 🟧
Both runways carry **significant displaced thresholds** on all four ends (see §7 for exact figures) — brief the correct declared distances per runway/direction rather than assuming a full-length LDA. No further contamination/braking-action data confirmed in reachable sources this pass.

### 3.4 Weather threat 🟥
**Summer extreme heat (routinely 45°C+) and the associated density-altitude performance penalty** is the field's defining seasonal hazard. **Shamal winds and blowing dust/sand** reduce visibility across the region and can trigger low-visibility procedures with limited notice. See §14 and the [Middle East airspace brief](../../../../airspace/middle-east.md) §11.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **very high traffic density and closely-spaced parallel-runway geometry**, which drives continuous sequencing pressure during banks; (2) the **displaced thresholds on all four runway ends**, a genuine declared-distance/briefing item rather than a full-length assumption; and (3) the **long-horizon network transition** — the emirate's 2024-announced expansion of [OMDW](../omdw/index.md) is intended, over roughly a decade, to eventually take over as the region's primary hub, with OMDB's long-term role subject to change. None of this changes current-day operations, but it is a durable planning-horizon note (see §18). RFF, navaid and approach infrastructure are assumed first-tier for a hub of this scale, but this is **not yet independently confirmed**.

---

## 4. Cautions & Warnings

- **Regional conflict-zone advisory is live** — the Emirates FIR (OMAE) sits under an active EASA CZIB and reported GPS spoofing/jamming; re-check the current picture at planning (see the Middle East airspace brief §9).
- **Displaced thresholds on all four runway ends** — do not assume full-length LDA; brief the correct declared distance per assigned runway (§7).
- **Very high traffic density on closely-spaced parallels** — expect continuous sequencing and vectoring during banks; maintain a heightened traffic scan even under radar.
- **Summer density-altitude/heat performance** — routine 45°C+ days materially affect takeoff performance planning even at this near-sea-level field.
- **Shamal dust/haboob events** can drop visibility rapidly with limited warning — confirm current LVP status before planning.
- **Multi-terminal operation (T1/T2/T3) with a nearby cargo terminal and General Aviation Terminal** — confirm current terminal/gate assignment for our operation rather than assuming a static picture (§6/§13).
- **Long-term network-transition context:** the emirate's approved expansion of Al Maktoum Intl (OMDW) is intended, over roughly a decade, to eventually take over as the primary hub — a durable planning-horizon note, not a current-day operational change (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **displaced-threshold declared distances** and the **very high traffic density on closely-spaced parallels**. 🟧
- **Crew-qualification gate:** Not confirmed in reachable sources beyond standard low-visibility currency expectations for a major hub. 🟧
- **Operating restrictions / bans:** No published curfew, RNP AR ban or circling restriction found in reachable sources — **not confirmed as "none," treat as unverified**. 🟧
- **Overflight / entry / permits:** Standard UAE international arrival; no special state permit required for a normal commercial operation. 🟩
- **Operations notes:** ANSP — **GCAA**; terminal control via **dans (Dubai Air Navigation Services)**; enroute via **Emirates area control (Sheikh Zayed Air Navigation Centre)**. See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §4.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 for a major international hub — not independently confirmed | 🟧 |
| AD operating hours | Assumed H24 — no published curfew found in reachable sources | 🟧 |
| Night / curfew restrictions | Not published / verify — no curfew found, not confirmed as "none" | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available H24; specific supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | T1 & T3 international halls; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable public sources | 🟧 |

**Terminal context (durable):** the airport operates **three passenger terminals**. **Terminal 1** connects via automated people-mover to a large satellite concourse used by international carriers; **Terminal 2** serves budget/regional carriers with a bus-boarding gate layout (no jetbridges); **Terminal 3** is the largest facility, comprising three concourses and historically the home of the field's dominant widebody long-haul operation, including dedicated A380-capable gates. A separate **cargo terminal** (rated in the low millions of tonnes/year capacity) and a nearby **General Aviation Terminal / Executive Flights Terminal** (premium-passenger check-in with buggy transfer to gates) round out the facility. Exact current passenger-capacity and stand-count figures were not independently confirmed this pass. 🟧

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12L | 4,351 m × 60 m | Asphalt / PCN not published | Not published | Not published | Not published | Reduced by a **450 m displaced threshold** | Displaced threshold — see note |
| 30R | (reciprocal of 12L) | Asphalt / PCN not published | Not published | Not published | Not published | Reduced by a **300 m displaced threshold** | Displaced threshold — see note |
| 12R | 4,447 m × 60 m | Asphalt / PCN not published | Not published | Not published | Not published | Reduced by a **715 m displaced threshold** | Displaced threshold — see note |
| 30L | (reciprocal of 12R) | Asphalt / PCN not published | Not published | Not published | Not published | Reduced by a **132 m displaced threshold** | Displaced threshold — see note |

*Physical runway lengths and displaced-threshold distances per OurAirports (tier-4). TORA/TODA/ASDA/exact LDA and PCN figures are not published in any source reached this pass and must be pulled from the GCAA AIP before operational use. The 12R/30L runway was closed for a 45-day resurfacing/lighting-replacement program in 2019 (16 Apr–30 May), during which the airport operated single-runway with reduced capacity — a historical event, not a current constraint. All lengths in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (ARR) | Dubai ATIS | 126.275 | Not confirmed (assumed H24) | 🟧 |
| ATIS (DEP) | Dubai ATIS | 131.7 | Not confirmed (assumed H24) | 🟧 |
| Ground | Dubai Ground | 118.35 | Not confirmed (assumed H24) | 🟧 |
| Tower | Dubai Tower | 118.75 | Not confirmed (assumed H24) | 🟧 |
| Arrival | Dubai Arrival | 124.9 | Not confirmed (assumed H24) | 🟧 |
| Departure | Dubai Departure | 124.45 | Not confirmed (assumed H24) | 🟧 |
| Centre / FIR | Emirates area control (GCAA — Sheikh Zayed ANC) | Per current AIRAC | H24 | See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) |

*Source: tier-4 aggregator snapshot (OurAirports). For a hub of this traffic density, additional sector/position frequencies almost certainly exist beyond this single-entry-per-service table — treat every frequency above as unconfirmed pending a live AIRAC/AIP cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | Dubai (DUB) | 115.70 | Not confirmed (assumed H24) | ~0.4 NM NW — effectively on field `[tier-4]` |
| VOR-DME | Sharjah (SHJ) | 112.30 | Not confirmed (assumed H24) | ~9.5 NM ENE |
| VOR-DME | Ras Al Khaimah (RAV) | 113.60 | Not confirmed (assumed H24) | ~37 NM ENE |
| ILS (both runways) | Idents not published | Not published | Not published | CAT/sub-category not confirmed 🟧 |

*Sourced to OurAirports navaid-proximity data (tier-4); idents/frequencies for the field's own ILS installations were not found in reachable sources this pass. Confirm all idents/frequencies against the current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — expect wind-driven selection between the two closely-spaced parallels; no published preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 12L/30R | ILS (name/CAT not confirmed) | Not published | Not published | Verify minima on current chart 🟧 |
| 12R/30L | ILS (name/CAT not confirmed) | Not published | Not published | Verify minima on current chart 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed this pass; expect an LVP regime consistent with regional shamal-dust exposure. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal site); the operative missed-approach concern is re-sequencing into a very high-density, closely-spaced-parallel radar environment — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §3.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** RNAV 1/RNP 1 terminal procedures are standard across the dense Abu Dhabi/Dubai TMA per the [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §5 — confirm gradient/equipage per SID on the current chart. See also [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** A slot-coordination regime would be expected at a field of this traffic density but is **not confirmed** — verify at planning. 🟧
- **De-icing:** Not applicable — no cold-weather de-icing requirement at this field. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminal 3's three concourses historically host the field's dominant widebody long-haul operation, including dedicated A380-capable gates; exact current code-letter allocation for our operation not confirmed this pass. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day — not published in reachable sources. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass; the closely-spaced parallel-runway geometry (§3.2) is the standing ground-density consideration. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Arid desert/coastal climate; extreme summer heat (routinely 45°C+, Jun–Sep) is the dominant seasonal characteristic.
- **Seasonal hazards:** **Summer heat and density-altitude performance penalty** (Jun–Sep) is the defining hazard for a near-sea-level field. **Shamal winds and blowing dust/sand** reduce visibility across the region and can trigger LVO with limited notice — see the [Middle East airspace brief](../../../../airspace/middle-east.md) §11.
- **Local effects:** Coastal/marine layer effects possible near the Gulf shoreline; no significant terrain-driven local wind effect at this flat site.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM (GNSS interference is reported region-wide — see the Middle East airspace brief §9), conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **In-country alternate / secondary field** to the [OMAA](../omaa/index.md) home hub.
- **Nearest suitable alternates:** Company preferred alternates **OMDW** ([briefing](../omdw/index.md)) and **OMAA** ([briefing](../omaa/index.md)) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on either parallel runway even after displaced-threshold reduction; the operative planning consideration is summer heat/density-altitude performance rather than field length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty is expected for any K Global type at OMDB; the operative planning consideration is **summer high-OAT takeoff performance** rather than aircraft-specific limitation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **UAE GCAA AIP was not reachable this pass** — every figure in this briefing traces to tier-4 public corroboration and should be treated as provisional pending a primary-source pull.
- **ARP coordinate discrepancy** — Navigraph-sourced fix vs an independent tier-4 fix differ by ~0.4 NM — not reconciled.
- **ILS idents, frequencies, CAT/sub-category and per-runway minima** — not confirmed from a primary source.
- **ATC frequency table** — only a single-entry-per-service tier-4 snapshot found; almost certainly incomplete for a hub of this size.
- **RFF category, PCN, exact declared distances (TORA/TODA/ASDA), curfew/slot regime, take-off minima, transition altitude** — none confirmed in reachable sources.
- **Current (2026) terminal/gate assignment for our operation** across the T1/T2/T3 layout — not confirmed.
- **SIDs/STARs (current names)** — not obtained in this research pass.
- **Long-term network-transition timeline** — the 2024-announced OMDW expansion is intended, over roughly a decade, to eventually take over as the region's primary hub; the effect (if any) on OMDB's long-term role as a K Global alternate should be revisited periodically rather than assumed static.
- **VATSIM cross-check** — no dedicated VATSIM vACC/division airport SOP for OMDB was located and cross-checked this pass; treat as an outstanding QA item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OMDB/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid tier-4 baseline, displaced-threshold figures.*
- Wikipedia — "Dubai International Airport" — https://en.wikipedia.org/wiki/Dubai_International_Airport (retrieved 2026-07-26). *Terminal/concourse structure, cargo terminal, 2019 runway-resurfacing closure, GAT/Executive Flights Terminal.*
- Wikipedia — "Al Maktoum International Airport" — https://en.wikipedia.org/wiki/Al_Maktoum_International_Airport (retrieved 2026-07-26). *2024 expansion-announcement / long-term network-transition context.*
- Companion OM C file: [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) — FIR structure, ANSP/control-unit detail, conflict-zone context.
- Companion OM C file: [Middle East airspace brief](../../../../airspace/middle-east.md) — regional conflict-zone, GNSS-interference and seasonal-hazard context.
- **UAE GCAA AIP (AD 2 OMDB)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
