# CYYZ — Lester B. Pearson Intl · Airport Briefing

**CYYZ / YYZ** · Mississauga, Ontario, Canada · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from NAV CANADA public sources (Canada Flight Supplement / Canada Air Pilot structure, TC AIM) plus operator (GTAA) and cross-check sources; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N43°40′33″ / W079°37′50″ (43.6759, -79.6294) `[OurAirports, retrieved 2026-07-26]` |
| Field elevation | **569 ft AMSL** |
| Mag variation | 🟧 Not published / verify — western Ontario is ~10–11° W by regional estimate; not a sourced AIP figure this pass |
| Time zone | UTC-5 (EST) / UTC-4 (EDT, DST observed) |
| Runway(s) | **05/23** 3,389 × 61 m · **06L/24R** 2,956 × 61 m · **06R/24L** 2,743 × 61 m · **15L/33R** 3,368 × 61 m · **15R/33L** 2,770 × 61 m — Canada's busiest airfield, a five-runway, dual-parallel-pair-plus-crosswind layout |
| Preferential runway | Noise/wind-dependent **Preferential Runway System** active in restricted hours (00:30–06:29 local); daytime selection is wind/flow-driven across the five runways — see §10/§11 |
| Longest LDA | 3,389 m (RWY 05/23, before displaced-threshold reduction — see §7) |
| Approaches | **ILS CAT I/II/III on RWY 05** (confirmed CAT I/II/III hold-position signage); other runways' ILS category not confirmed this pass 🟧 — Toronto is one of only a handful of Canadian fields with CAT III capability |
| RFF category | 🟧 Not published / verify — assumed **CAT 9** for a widebody-international hub, not independently confirmed |
| Control type | **Radar** — Toronto Tower/Ground/Apron on the field; **Toronto Terminal** (NAV CANADA) approach/departure; **Toronto FIR (CZYZ)** — Toronto Area Control Centre en route — see [North America — Airspace](../../../../airspace/north-america.md) |
| Elevation class | Near sea-level (569 ft) — **not** hot-and-high; the defining reliability driver is **winter lake-effect snow/blowing snow/freezing rain**, not density altitude |
| Special-airport status | 🟥 **Slot-coordinated IATA Level 3** — Canada's busiest airport, full parallel-pair-plus-crosswind (five-runway) geometry, hard **restricted-hours regime 00:30–06:29** — see §5 |
| Customs / PoE | **Yes** — Terminal 1 and Terminal 3 international/US-preclearance facilities; major-hub H24 expectation 🟧 (exact desk hours not confirmed) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **CYOW, KBUF** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 17 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat southern-Ontario lakeshore plain; no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | Longest pair (05/23 3,389 m; 15L/33R 3,368 m) is ample for any K Global widebody; the shorter crosswind pair (06R/24L 2,743 m; 15R/33L 2,770 m) is non-limiting for typical arrival/departure weights but should be checked per type on hot/contaminated days. |
| Approach availability / minima | 🟧 | CAT III confirmed on RWY 05; category on the remaining four runway ends not independently confirmed this pass — treat as CAT I/II pending verification. |
| Airspace / traffic / control | 🟥 | Canada's busiest airport — five runways in a dual-parallel-pair-plus-single-crosswind-runway geometry drive continuous dependent/independent parallel operations and sustained controller/crew workload — see §3.2. |
| Weather / seasonal hazard | 🟥 | Lake Ontario proximity drives **lake-effect snow, blowing snow, freezing rain and low-ceiling events** — the field's defining winter threat, mitigated by the Central Deicing Facility (CDF) and CAT III infrastructure. |
| Curfew / slots / hours | 🟥 | **Slot-coordinated Level 3** **and** a **Restricted Hours Operating Policy (00:30–06:29 local)** with a Preferential Runway System and Transport Canada annual night-movement caps — see §6/§12. |
| RFF category vs our types | 🟧 | Assumed CAT 9 (not independently confirmed) — expected adequate for our fleet; confirm before treating as audit-grade. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 as Canada's busiest hub; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | Terminal 1 and Terminal 3 confirmed (Terminal 2 permanently closed/demolished); exact desk hours and current widebody stand/gate assignment not independently confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
CYYZ sits at 569 ft AMSL on the flat southern-Ontario lakeshore plain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟥
Toronto Pearson is **Canada's busiest airport**, operating **five runways** in a dual-parallel-pair (06L/24R–06R/24L and 15L/33R–15R/33L) plus single crosswind runway (05/23) geometry — a demanding layout that sustains continuous dependent/independent parallel approaches and departures under **Toronto Terminal** radar. Expect frequent runway-crossing sequencing, closely-spaced parallel operations (CSPO) procedures on the 05/23-adjacent pairs, and elevated controller/crew workload during arrival/departure banks. A 2025 Transport Canada Civil Aviation Safety Alert specifically addresses **Closely Spaced Parallel Operations (CSPO) standards** at CYYZ — a direct signal of the airfield's operational complexity. Cross-ref [North America — Airspace](../../../../airspace/north-america.md) for the Toronto FIR (CZYZ) context.

### 3.3 Runway excursion 🟧
Displaced thresholds exist on three of the five runways per tier-4 corroboration: **RWY 05 (41 m / 135 ft)**, **RWY 23 (148 m / 485 ft)**, **RWY 24R (60 m / 197 ft)**, and **RWY 15R/33L (179 m / 588 ft each)** — **not independently re-confirmed against a current AIRAC/CFS cycle**, flagged for verification. Brief the correct usable landing distance per runway rather than the full paved length (see §7).

### 3.4 Weather threat 🟥
**Lake Ontario's proximity drives lake-effect snow squalls, blowing snow, freezing rain and rapid visibility/ceiling drops**, particularly Nov–Mar — this is the field's signature weather hazard and the direct operational reason Toronto Pearson operates the **world's largest centralized deicing facility (CDF)** and carries CAT III approach capability on at least one runway. Summer brings the standard Great Lakes region risk of afternoon **convective/thunderstorm activity** and occasional severe-storm/tornado watches; no CYYZ-specific frequency statistic found this pass. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **five-runway CSPO environment** — dependent/independent parallel ops sustain high workload and are the subject of a dedicated 2025 TC safety alert; (2) the **slot-coordinated Level 3 regime** — schedule integrity has real network consequences at Canada's busiest airport; and (3) the **Restricted Hours Operating Policy (00:30–06:29)** combined with the **Preferential Runway System** and Transport Canada's annual night-movement cap — a late arrival/departure has real schedule and community-noise consequences (see §6/§12). RFF, navaid and approach infrastructure are first-tier for at least RWY 05; the open items in §18 are mostly currency/administrative confirmations for the remaining runways rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **Five-runway CSPO (Closely Spaced Parallel Operations) environment** — Transport Canada issued a dedicated 2025 Civil Aviation Safety Alert on CSPO standards/procedures at CYYZ; brief for dependent/independent parallel approach and departure sequencing.
- **During CAT II/III arrivals on RWY 05, departures are restricted to taxiways W & Y with wingspan < 36 m** — a direct ground-ops/low-vis interaction; confirm current low-vis taxi routing before planning a CAT II/III arrival.
- **Taxiway K is uncontrolled** and restricted to aircraft with wingspan ≤ 41.15 m (135 ft) and an Aircraft Load Rating ≤ 9.0 🟧 (tier-4-sourced, not independently re-confirmed).
- **Displaced thresholds on three of five runways** (05, 23, 24R, 15R/33L) reduce usable landing distance below the full paved length — always check the runway-specific LDA (§7), not the headline runway length.
- **Winter lake-effect snow/blowing snow/freezing rain** can degrade visibility and contaminate runways with little warning — the CDF and CAT III capability are the standing mitigations; check current LVP/deicing status before planning.
- **Restricted Hours Operating Policy 00:30–06:29 local** combined with a Preferential Runway System — a delayed late-night rotation has real noise-compliance and schedule consequences; build buffer accordingly.
- Mag variation, exact RFF category, and several runway/ILS category details are **not confirmed from a primary AIP table this pass** — treat as 🟧 pending a live NAV CANADA CFS/CAP cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **five-runway CSPO environment** and the **CAT III low-visibility environment on RWY 05**. 🟥
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-vis arrivals on RWY 05 in winter conditions — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Restricted Hours Operating Policy 00:30–06:29 (§6/§12); Preferential Runway System in restricted hours; no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival into Canada; no special state permit required. 🟩
- **Operations notes:** ANSP — **NAV CANADA** (Toronto Tower/Terminal; Toronto Area Control Centre en route); Airport operator — **Greater Toronto Airports Authority (GTAA)**. Slot coordination — Level 3 fully coordinated; specific coordinator not individually confirmed this pass. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground/Apron H24 (major-hub assumption); exact position hours not independently confirmed | 🟧 |
| AD operating hours | H24 scheduled ops; restricted-hours regime applies overnight (below) | 🟥 |
| Night / curfew restrictions | **Restricted Hours Operating Policy 00:30–06:29 local** (GTAA policy v4.1, 2019-05-29); **Preferential Runway System** active midnight–06:29; Transport Canada imposes an **annual cap on total night-flight movements** during restricted hours | 🟥 |
| RFF category | 🟧 Not published / verify — assumed CAT 9 | 🟧 |
| Fuel | Jet A-1 assumed available H24 (major hub); specific supplier/hours not confirmed | 🟧 |
| PCN | 🟧 Not published / verify this pass | 🟧 |
| Customs | Terminal 1 & Terminal 3 international/US-preclearance halls; exact desk hours not confirmed | 🟧 |
| Handling / FBO | GTAA (Apron Control) plus multiple third-party ground handlers (not individually confirmed) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 3,389 × 61 m | Asphalt/concrete; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | ≈3,348 m (thr displaced 41 m) | CAT I/II/III ILS hold-position signage confirmed |
| 23 | 3,389 × 61 m | Asphalt/concrete; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | ≈3,241 m (thr displaced 148 m) | |
| 06L | 2,956 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | 2,956 m | |
| 24R | 2,956 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | ≈2,896 m (thr displaced 60 m) | |
| 06R | 2,743 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | 2,743 m | |
| 24L | 2,743 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | 2,743 m | |
| 15L | 3,368 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | 3,368 m | |
| 33R | 3,368 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | 3,368 m | |
| 15R | 2,770 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | ≈2,591 m (thr displaced 179 m) | |
| 33L | 2,770 × 61 m | Asphalt; PCN 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published | ≈2,591 m (thr displaced 179 m) | |

*Source: OurAirports runway extract (retrieved 2026-07-26) for dimensions/displaced thresholds — **tier-4, cross-check only**; exact TORA/TODA/ASDA declared-distance figures and PCN were not obtained from the primary NAV CANADA CFS/CAP this pass — treat as 🟧 pending a live-source pull. All distances in metres; LDA figures are derived (full length minus displaced threshold) and not independently confirmed.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Toronto ATIS | 120.825 🟧 (OurAirports extract shows 112.15 — discrepancy, verify current AIRAC) | H24 (assumed) | 🟧 |
| Delivery | Toronto Clearance Delivery | 121.300 | H24 (assumed) | Initial call / IFR clearance |
| Apron | Toronto Apron / Ramp | South Apron 122.070 · North Apron 122.270 · Ramp Advisory 122.075 | H24 (assumed) | Push-back/apron guidance |
| Ground | Toronto Ground | 121.900 / 121.650 / 119.100 | Mixed | Multiple ground positions — take the assigned frequency |
| Tower | Toronto Tower | 118.350 / 118.700 | H24 (assumed) | Multiple tower positions |
| Departure | Toronto Departure | 127.575 / 128.800 | H24 (assumed) | |
| Approach / Arrival | Toronto Terminal (Approach) | 124.475 (ARR/APP) | H24 (assumed) | Sector-specific — take the assigned frequency |
| Pad control | Pad Control (deicing) | 131.170 | Winter season | CDF pad sequencing |
| Centre / FIR | Toronto Area Control Centre (CZYZ) | Per current AIRAC | H24 | See [North America — Airspace](../../../../airspace/north-america.md) |

*Source: OurAirports frequency extract (retrieved 2026-07-26), cross-checked against a secondary aggregator search — **tier-4, not an AIP/CFS primary pull**; treat exact frequencies as 🟧 pending a live NAV CANADA CFS cross-check. ATIS frequency shows a discrepancy between sources (120.825 vs 112.15) — flagged, not resolved this pass.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS RWY 05 | 🟧 not confirmed | 🟧 not confirmed | H24 (assumed) | CAT I/II/III capable (hold-position signage confirmed) |
| ILS other runways | 🟧 not confirmed this pass | 🟧 not confirmed | — | Category not independently confirmed — assume CAT I pending verification |
| VOR/DME | 🟧 not confirmed this pass | 🟧 not confirmed | H24 (assumed) | On-field VOR/DME expected at a hub of this size — not individually sourced |

*No navaid-specific idents/frequencies were obtained from a primary NAV CANADA source this pass — this table is intentionally sparse rather than fabricated; pull the current CFS/CAP navaid data at planning. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** TA **18,000 ft** (Canadian Southern Domestic Airspace standard); TL by QNH — see [North America — Airspace](../../../../airspace/north-america.md) §6.
- **Speed:** 250 KIAS below 10,000 ft; 200 KIAS within 10 NM / below 3,000 ft AAL of a controlled aerodrome (Canadian domestic norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/traffic/noise-dependent across the five runways; a formal **Preferential Runway System** applies specifically in restricted hours (00:30–06:29) to minimize residential noise impact — see §12.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 05 | ILS (CAT I/II/III) | Confirmed CAT I/II/III hold-position signage; primary low-vis runway |
| 23 | ILS 🟧 (category not confirmed) | Reciprocal of 05 |
| 06L/24R, 06R/24L, 15L/33R, 15R/33L | ILS/RNAV 🟧 (names/categories not confirmed this pass) | Pull current-AIRAC approach list at planning |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III trigger conditions apply per winter lake-effect/blowing-snow risk (§14); exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat lakeshore plain); the operative missed-approach concern is re-sequencing into a high-density, five-runway CSPO traffic environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed this pass — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the governing policy; verify per-SID gradient on the current chart. 🟧
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** GTAA Apron/Ramp control handles push-back approvals; confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated** — specific coordinator not individually confirmed this pass; NAV CANADA flow management applies at peak/adverse conditions as standard practice for Canada's busiest hub. 🟧
- **De-icing:** **Central Deicing Facility (CDF)** — reported the largest, most technologically advanced facility of its kind in the world, 65+ acres, six pads (each accommodating 2 widebody or 4 narrowbody aircraft simultaneously — up to 12 widebody/24 narrowbody total), **engines-on** operation after pushback and before taxi to the runway. Average deice time < 5 min, total throughput < 14 min; season typically **Oct–Apr/May**; ~3.17 M US gal (12 M L) of fluid consumed per season; glycol run-off captured and recycled via underground storage. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** A formal **Preferential Runway System** governs runway selection in restricted hours (00:30–06:29) to minimize the number of residential neighbourhoods overflown; an updated system was trialled 2020–2022 and approved by Transport Canada. Daytime runway selection also weighs noise alongside wind/capacity.
- **Night noise / dB limits:** Governed through the **Restricted Hours Operating Policy** and Transport Canada's **annual cap on total night-flight movements** during restricted hours, rather than a simple per-movement dB limit; a dedicated GTAA Enforcement Office monitors compliance — GTAA reports near-100% compliance with noise operating procedures.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable positions expected at **Terminal 1** and **Terminal 3** (Terminal 2 permanently closed/demolished); exact current widebody gate assignment for a long-haul international operation not independently confirmed. 🟧 | 🟧
- **Push-back:** GTAA Apron/Ramp control handles push-back approvals; mandatory-vs-self-manoeuvre policy not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 **Taxiways D4/D5** (south of RWY 06L/24R) have angled runway hold positions in effect; **Taxiway K is uncontrolled**, restricted to aircraft with wingspan ≤ 41.15 m (135 ft) and Aircraft Load Rating ≤ 9.0; during **CAT II/III arrivals on RWY 05, departures are restricted to taxiways W & Y** for aircraft with wingspan < 36 m. Design speeds vary by taxiway (C2/B2/H3/D1–D8 = 50 kt; J2/F1–F4 = 45 kt; rapid exits = 35 kt) 🟧 (tier-4-sourced, not independently re-confirmed).
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid continental climate on the Lake Ontario lakeshore plain; prevailing wind generally west/southwest, consistent with the five-runway system's typical daytime orientation choices.
- **Seasonal hazards:** **Lake-effect snow squalls, blowing snow and freezing rain** driven by Lake Ontario proximity are the field's defining winter hazard (typically Nov–Mar), directly motivating the Central Deicing Facility and CAT III infrastructure. Summer carries the standard Great Lakes-region risk of afternoon **convective storms**, with occasional severe-weather/tornado watches for the region — general regional climatology, no CYYZ-specific frequency statistic found.
- **Local effects:** Lake-proximity snow-band effects are the standout local effect; no significant terrain/sea-breeze effect at this inland-of-lakeshore field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT II/III equipment status, lighting, obstacle/crane, RFF downgrade, CDF/deicing pad status, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / origin** in the North American network — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates **CYOW** (Ottawa) and **KBUF** (Buffalo) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as Canada's busiest hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the two longest runways (05/23, 15L/33R). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty for any K Global type at CYYZ on the two longest runways; the operative planning consideration is winter CAT III/deicing reliance and restricted-hours/slot schedule integrity rather than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). For winter operational procedure, see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — not sourced this pass; regional estimate only, not an AIP figure.
- **RFF category** — assumed CAT 9 for a widebody-international hub; not independently confirmed.
- **Declared distances (TORA/TODA/ASDA) and PCN, all ten runway ends** — not obtained from the primary NAV CANADA CFS/CAP this pass; only overall length and displaced-threshold figures sourced (tier-4).
- **ILS category on all runway ends except RWY 05** — RWY 05 CAT I/II/III confirmed; remaining nine ends not confirmed.
- **Navaid idents/frequencies** — not obtained from a primary source this pass.
- **ATIS frequency discrepancy** (120.825 vs 112.15 across sources) — not resolved.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, push-back mandatory-vs-self-manoeuvre policy** — none confirmed in reachable sources.
- **Fuel supplier(s) and into-plane hours** — assumed H24 major-hub availability, not individually confirmed.
- **Customs/immigration desk hours** (T1/T3) — not confirmed; assumed major-hub H24 coverage.
- **Slot coordinator identity** — Level 3 status confirmed; specific coordinator not individually confirmed.
- **PCN and exact taxiway design-speed/hot-spot detail** — tier-4-sourced only, not independently re-confirmed against current AIRAC.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **NAV CANADA — Aeronautical Information Publications (AIP Canada / CFS / CAP) landing page** — https://www.navcanada.ca/en/aeronautical-information/publications.aspx (retrieved 2026-07-26). *Primary source targeted; direct AD 2 CYYZ extract not reachable this pass — flagged throughout.*
- OurAirports — https://ourairports.com/airports/CYYZ/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check — tier-4.*
- Transport Canada — Civil Aviation Safety Alert (CASA) 2025-06, "Closely Spaced Parallel Operations (CSPO) Standards and Procedures at CYYZ" — https://tc.canada.ca/en/aviation/reference-centre/civil-aviation-safety-alerts/closely-spaced-parallel-operations-cspo-standards-procedures-toronto-lester-b-pearson-international-airport-cyyz-civil-aviation-safety-alert-casa-no-2025-06 (retrieved 2026-07-26). *CSPO/five-runway operational-complexity corroboration.*
- GTAA — Restricted Hours Operating Policy v4.1, 2019-05-29 — https://cdn.torontopearson.com/-/media/project/pearson/content/community/noise-management/pdfs/gtaa-restricted-hours-operating-policy-v4-1.pdf (retrieved 2026-07-26). *Restricted-hours regime primary operator statement.*
- Pearson Airport (GTAA) — "How Pearson Runways Are Selected" — https://www.torontopearson.com/en/community/noise-management/understanding-airport-noise/runways (retrieved 2026-07-26). *Preferential Runway System.*
- Pearson Airport (GTAA) — "Are there flights at night?" — https://airportnoise.torontopearson.com/are-there-flights-at-night/ (retrieved 2026-07-26). *Night Flight Restriction Program / annual movement cap.*
- Pearson Airport (GTAA) — "Aircraft deicing" — https://www.torontopearson.com/en/whats-happening/stories/aircraft-deicing-2021 (retrieved 2026-07-26). *Central Deicing Facility detail.*
- Simple Flying — "Nearly 17,000 Planes: Toronto Pearson International Airport Reaches New De-Icing Record" — https://simpleflying.com/toronto-pearson-international-airport-new-de-icing-record/ (retrieved 2026-07-26). *CDF throughput corroboration.*
- Transport Canada — Airport Traffic Directives (AVOP D-2023) — https://cdn.torontopearson.com/-/media/project/pearson/content/airport-employees/passes-and-permits/avop/airport-traffic-directives-avop-d-2023.pdf (retrieved 2026-07-26). *RWY 05 CAT I/II/III hold-position and CAT II/III departure-taxiway restriction; Taxiway D4/D5/K detail — operator traffic-directive source, tier-3-equivalent.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from NAV CANADA (CFS/CAP); K Global fields from live VAMSYS; 4-page pack. |
