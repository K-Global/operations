# MMMX — Benito Juárez Intl · Airport Briefing

**MMMX / MEX** · Mexico City, Mexico · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Mexico (SENEAM)-derived, public-source cross-checked

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Mexico (SENEAM, Publicación de Información Aeronáutica), AD 2 MMMX, cross-checked against public aeronautical data; the primary SENEAM AD 2 PDF could not be retrieved in full this pass (see §18) — figures below are corroborated across independent public sources but flagged 🟧 pending a direct AIP re-verify. Approaches/SIDs/STARs are listed **by name/type only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). **This is a high-elevation, hot-and-high field — read this brief together with [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md), which defines the performance regime applied here.** Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 19°26′09″N / 099°04′13″W (19.435822, -99.070330) `[OurAirports/SkyVector cross-check 2026-07-26]` |
| Field elevation | 🟥 **7,316 ft / 2,230 m AMSL — VERY HIGH-ELEVATION.** Hot-and-high is the field's dominant performance driver, not a secondary consideration — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) |
| Mag variation | Not confirmed from a primary table this pass 🟧 |
| Time zone | UTC−6 (CST); mainland Mexico (incl. Mexico City) discontinued seasonal DST from 2022 — verify current status 🟧 |
| Runway(s) | **05L/23R** 3,952 × 45 m (12,966 × 148 ft) · **05R/23L** 3,900 × 45 m (12,795 × 148 ft) — both asphalt, lighted. 🟥 **The two parallels are separated by less than 300 m (~980 ft) — a closely-spaced, dependent pair, not independent parallels** |
| Preferential runway | **05R** is the usual landing runway per operational cross-check; late changes to **23L** (and a sidestep to **23R**) are reported as common depending on wind/traffic — see §10 |
| Longest LDA | **23L ≈ 3,900 m / 12,795 ft** (no displaced threshold found in reachable sources) 🟧 — see §7 for the full displaced-threshold picture |
| Approaches | **ILS/DME (RWY 05R)** — procedural (conventional-navaid) and RNAV-waypoint variants; **VOR/DME (RWY 05L)**, 3.25° glidepath; **ILS (RWY 23L)** — no CAT II/III capability confirmed; RNAV(GNSS) coverage not confirmed 🟧 |
| RFF category | Not published / verify 🟧 — field is widebody-capable (implies a high RFF category) but no primary figure confirmed |
| Control type | **Radar** — Mexico City ACC/Approach (SENEAM), within the **Mexico FIR (MMFR)** 🟧 (not independently re-confirmed as radar vs. mixed-procedural this pass) |
| Elevation class | 🟥 **Hot-and-high — the airport's defining performance regime.** See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §9 (MMMX is a named network example, ~7,293–7,316 ft depending on source) |
| Special-airport status | 🟥 An external operator reference classifies MMMX in an **elevated special-airport tier** (enhanced-briefing category) driven by high elevation, close-in mountainous terrain and the closely-spaced dependent-parallel geometry — see §5 |
| Customs / PoE | **Yes** — Terminal 1 and Terminal 2 international facilities; 24 h customs coverage reported 🟧 (not independently confirmed against a primary schedule) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **MMGL, MMMY, MPTO** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **16 min / 20 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Active volcano (Popocatépetl) and multiple mountain ranges close-in on several quadrants — see §3.1. |
| Runway length vs fleet perf | 🟧 | Both runways are nominally long (~3,900–3,950 m), but **hot-and-high erodes effective performance** — the constraint is thrust/climb-gradient, not raw length. See §3.5 and the OM E cross-link. |
| Approach availability / minima | 🟧 | ILS/DME (05R) and VOR/DME (05L) confirmed by type; no CAT II/III capability found; terrain drives a high-workload, late-turn approach, especially 05R. |
| Airspace / traffic / control | 🟥 | One of the busiest dual-runway airports in the world; a **saturation declaration caps movements at 61/hour**; the two parallels are closely-spaced/dependent, not independent. |
| Weather / seasonal hazard | 🟧 | Two-season climate (dry Nov–Apr, wet May–Oct); morning radiation fog/smog in the dry season; volcanic ash risk from Popocatépetl year-round. |
| Curfew / slots / hours | 🟥 | No hard curfew found, but the **61-movements/hour saturation cap** plus Terminal-specific operating windows (T1 05:00–23:59, T2 06:00–23:00) function as a de facto capacity/slot constraint. |
| RFF category vs our types | 🟧 | Not confirmed from a primary source. |
| Fuel availability | 🟩 | Jet A-1 reported available via multiple into-plane suppliers, 24/7 — tier-4 sourced, not independently confirmed. |
| Customs / handling / security | 🟧 | 24 h customs reported; handling agent(s) include Menzies among others — not exhaustively confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
MMMX sits on a high plateau **surrounded by mountains on multiple sides** — this is the field's primary terrain threat, independent of the density-altitude performance problem. The active volcano **Mt Popocatépetl** (~18,000 ft AMSL) lies **35 NM SE**. A range of mountains runs south from a point ~18 NM E of the field (~7 NM SE of the RWY 23 approach paths): the 10,000 ft contour is reached by 15 NM, with a peak to ~13,600 ft AMSL at 20 NM E. On the far side of the city, a second range curves from NW round to S at ~15 NM range, with the 10,000 ft contour ~17 NM W/15 NM SW and terrain reaching ~13,000 ft AMSL by 16 NM SW. An isolated spot elevation of **10,200 ft AMSL** sits at 038°/22 NM. Closer in, high ground begins **5 NM N** and reaches nearly **10,300 ft AMSL at 10 NM N**. Accurate navigation (raw-data cross-check against FMS) is required to guarantee terrain clearance, particularly during any weather-avoidance deviation off the published profile. Cross-ref the [Mexico FIR](../../../../airspace/north-america.md) regional context (Mexico FIR, MMFR, SENEAM) and the Popocatépetl volcanic-ash watch (§3.4/§14).

### 3.2 Airborne conflict / traffic 🟥
MMMX is one of the busiest dual-runway airports in the world; a **saturation declaration reaffirms a cap of 61 movements/hour**. The two parallel runways (05L/23R and 05R/23L) are **separated by less than 300 m** — a **closely-spaced, dependent pair**, not independent parallels, which materially limits simultaneous-operations capacity versus a nominal two-runway field. Controlling authority is **SENEAM** (Mexico City ACC/Approach) within the single, countrywide **Mexico FIR (MMFR)** — see the general [North America airspace brief](../../../../airspace/north-america.md) for the broader continental airspace-management context (that brief's specific routing does not cover the Mexico FIR; the Mexico-specific FIR/ACC structure is summarised here and in §8/§10/§11).

### 3.3 Runway excursion 🟧
Displaced thresholds are asymmetric across the four runway ends (see §7 for the full table) — **05L displaced 1,034 ft (315 m)**, **23R displaced 1,641 ft (500 m)**, **05R displaced 1,493 ft (455 m)**; **23L shows no displacement** in reachable sources 🟧 (not independently re-confirmed against the primary AIP). Operational cross-check reports **rubber-contaminated runway surfaces near the runway ends** giving slippery conditions when wet, and that the **runways can be slow to drain water**. Runway/taxiway centreline lighting is reported **low-intensity with no centreline lights** on some sections, and centreline markings on **05R/23L are reported faded**, particularly at the midpoint — a night/low-vis excursion risk. **Late runway changes are reported as a recurring pattern** (e.g., 23L→23R sidestep) — brief the alternate runway/approach before the approach begins.

### 3.4 Weather threat 🟧
Two seasons: **dry season (Nov–Apr)** — mainly dry and sunny with occasional light showers; early-morning **radiation fog** is possible; on occasion Gulf-of-Mexico depressions push south, bringing low cloud/poor visibility over a wide area and strong-to-gale-force northerly winds with dust behind the front. **Wet season (May–Oct)** — frequent afternoon thunderstorms, with rain falling almost daily in Jul/Aug. Early-morning mist/smog typically dissipates by midday (basin-trapped haze). **Volcanic ash** from the active **Popocatépetl** (35 NM SE, §3.1) is a standing, non-seasonal hazard — cross-ref [`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md) and monitor VONA/ash advisories at planning (§15).

### 3.5 Operational considerations 🟥
This is a **hot-and-high field first, everything else second** — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the full method. At 7,316 ft field elevation, true airspeed for a given IAS runs roughly **+15%**, driving higher groundspeeds, larger turn radii and longer landing/take-off rolls than the raw runway length suggests. The **RWY 05R approach** is reported as a high-workload case: a late, ~113° turn onto a short final with a low platform altitude (historically ~8,800 ft, ~1,500 ft AAL) requires prompt glideslope capture and full landing configuration well before the turn to final. A **20,000 ft maximum flap-extension altitude** applies on arrival — observe it. On departure, **RWY 05L is more obstacle-restricted than 05R**, and **RWY 23L/23R departures carry a higher workload** due to terrain. A **"packs-off" technique** is commonly used to recover takeoff performance at this elevation; if packs are not reconfigured by 10,000 ft a cabin-altitude warning follows, and above 14,000 ft cabin altitude the emergency oxygen masks will deploy — brief this explicitly against distraction risk. Hot/hung engine starts are a recognised risk at this altitude — verify FCOM technique for the type. See §11 and the OM E cross-link for the full takeoff/landing/climb-gradient treatment.

---

## 4. Cautions & Warnings

- **Two closely-spaced, dependent parallel runways (<300 m separation)** — never assume independent simultaneous operations; expect sequencing constraints under the 61-movements/hour saturation cap.
- **Active volcano Mt Popocatépetl** (~18,000 ft AMSL, 35 NM SE) — monitor volcanic-ash advisories; see [`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md).
- **Hot-and-high field (7,316 ft elevation)** — expect materially reduced climb performance, higher approach/landing groundspeeds and larger turn radii; see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- **RWY 05R approach is a high-workload, late-turn-to-short-final case** — configure early; a delay capturing the glideslope after the final turn leaves little margin.
- Runway/taxiway signage and ATC instructions are in **Spanish** ("Izquierda" = left, "Derecha" = right) — confirm any ambiguous clearance.
- **Low-intensity runway/taxiway lighting**, absent centreline lights on some sections, and **faded centreline markings reported on 05R/23L** — heightened night/low-vis excursion risk.
- **Rubber-contaminated, slow-draining runway surfaces** near the runway ends — treat wet-runway braking with extra caution.
- **Late runway changes are a recurring pattern** (e.g., 23L↔23R sidestep) — brief the likely alternate before top-of-descent.
- **20,000 ft maximum flap-extension altitude** must be observed on the arrival.
- Apron/taxiway lighting can obscure other aircraft on the parallel runway during the takeoff/landing roll or while taxiing — maintain a heightened visual scan.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** 🟥 An external operator reference places MMMX in an **elevated special-airport tier** requiring enhanced crew briefing, driven by the combination of high elevation, close-in mountainous terrain and the closely-spaced dependent-runway geometry. K Global does not yet have a formally codified equivalent category gate — treat as a **command-experience/enhanced-briefing candidate field** pending policy confirmation. 🟧
- **Crew-qualification gate:** Not formally codified in K Global policy this pass — recommend the standard high-elevation/terrain enhanced-briefing discipline from [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) as the interim standard. 🟧
- **Operating restrictions / bans:** **Engine-out taxi (EOT) is reported not approved** (external operator reference); RNP AR authorisation status not confirmed — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Mexican international arrival; no special state permit or PPR requirement found. 🟩
- **Operations notes:** ANSP — **SENEAM** (Servicios a la Navegación en el Espacio Aéreo Mexicano), providing Mexico City ACC/Approach within the single, countrywide **Mexico FIR (MMFR)**. Airport operator — **Grupo Aeroportuario de la Ciudad de México (GACM)**. Ground handling includes **Menzies** among other agents (not exhaustively confirmed).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 assumed for a major international hub — not independently confirmed | 🟧 |
| AD operating hours | **Saturation-declared cap of 61 movements/hour**; Terminal 1 operating window 05:00–23:59, Terminal 2 06:00–23:00 local | 🟥 |
| Night / curfew restrictions | No hard curfew found; a night noise restriction on heavier aircraft is reported without confirmed specifics | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1; multiple into-plane suppliers reported (incl. SUAT Fuels, ASMCORP), 24/7 | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | 24 h coverage reported for both terminals | 🟧 |
| Handling / FBO | Menzies among other ground handlers; not exhaustively confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05L | 3,952 × 45 m (12,966 × 148 ft) | Asphalt, lighted / PCN not published 🟧 | 3,952 m 🟧 | 3,952 m 🟧 | 3,952 m 🟧 | **3,638 m / 11,932 ft** (THR displaced 315 m / 1,034 ft) | TORA/TODA/ASDA assumed equal to full length pending AIP confirmation |
| 23R | 3,952 × 45 m (12,966 × 148 ft) | Asphalt, lighted / PCN not published 🟧 | 3,952 m 🟧 | 3,952 m 🟧 | 3,952 m 🟧 | **3,452 m / 11,325 ft** (THR displaced 500 m / 1,641 ft) | Threshold further displaced than 23L — relevant to any 23L→23R sidestep (§3.3) |
| 05R | 3,900 × 45 m (12,795 × 148 ft) | Asphalt, lighted / PCN not published 🟧 | 3,900 m 🟧 | 3,900 m 🟧 | 3,900 m 🟧 | **3,445 m / 11,302 ft** (THR displaced 455 m / 1,493 ft) | Usual landing runway (§10); high-workload late-turn approach |
| 23L | 3,900 × 45 m (12,795 × 148 ft) | Asphalt, lighted / PCN not published 🟧 | 3,900 m 🟧 | 3,900 m 🟧 | 3,900 m 🟧 | **3,900 m / 12,795 ft** (no displacement found) | Longest published LDA at the field |

*Source: OurAirports MMMX runway data (retrieved 2026-07-26), cross-checked against Wikipedia/public references. TORA/TODA/ASDA are assumed equal to full runway length — this is **not independently confirmed against the primary AIP Mexico (SENEAM) AD 2 MMMX table**, which could not be retrieved in full this pass (§18); PCN and any starter-extension/intersection detail are unconfirmed. All distances metric primary, feet secondary.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Mexico ATIS | 127.65 | H24 (assumed) 🟧 | |
| Delivery | Mexico Clearance Delivery | 122.1 | H24 (assumed) 🟧 | |
| Ground | Mexico Ground | 121.0 (also reported 121.85) 🟧 | — | Discrepancy between sources — verify current chart |
| Tower | Mexico Tower | 118.55 (one source); 118.1/118.7 (another source) 🟧 | — | Sources disagree — likely reflects multiple tower positions/sectors; verify current AIRAC |
| Approach | Mexico Approach | 121.2 | — | |
| Arrival | Mexico Arrival | 129.6 | — | |
| Departure | Mexico Departure | 120.5 | — | |
| Information | Mexico Info | 126.9 | — | |
| Centre / FIR | Mexico ACC (SENEAM) | Per current AIRAC 🟧 | H24 (assumed) | Single countrywide **Mexico FIR (MMFR)** — see [North America airspace brief](../../../../airspace/north-america.md) for general continental context |

*Frequencies cross-checked across OurAirports and independent public ATC-frequency listings (retrieved 2026-07-26); several show minor disagreement (Ground, Tower) — treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | MEX | Not confirmed 🟧 | H24 (assumed) | On-field VOR/DME referenced by multiple approach procedures |
| ILS/DME | Not confirmed 🟧 | Not confirmed 🟧 | H24 (assumed) | Serves RWY 05R — procedural (ILS/DME ONE) and RNAV-waypoint (ILS/DME TWO) variants reported |
| VOR/DME (steep GP) | Not confirmed 🟧 | Not confirmed 🟧 | H24 (assumed) | Serves RWY 05L; reported 3.25° glidepath (non-standard, verify) |
| ILS | Not confirmed 🟧 | Not confirmed 🟧 | H24 (assumed) | Serves RWY 23L |

*Idents/frequencies not independently confirmed against a primary source this pass — the SENEAM AD 2 MMMX PDF could not be retrieved in full (§18). Treat the whole table as 🟧 pending direct AIP verification.*

---

## 10. Arrival

- **Transition altitude / level:** Transition altitude reported at **18,500 ft** (cross-checked against an independent public operational reference); TL by QNH — verify current chart. 🟧
- **Speed:** Reported **250 kt within 30 NM of the MEX VOR below 18,000 ft**. 🟧
- **Preferential runway logic:** **RWY 05R is the usual landing runway**; **RWY 23L/23R** used when wind dictates, with **late changes reported as common** (including a 23L→23R sidestep, the latter's threshold being further displaced). Northern arrivals reported routed via a SLM→SMO transition.
- **Approaches (names/types only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05R | ILS/DME (procedural, conventional navaids) and an RNAV-waypoint variant | SMO (also referenced as MAVEK, an RNAV waypoint at the same position) | Platform altitude historically ~8,800 ft (~1,500 ft AAL) 🟧 | High-workload — glideslope capture required promptly after the ~113° final turn; verify current chart |
| 05L | VOR/DME, reported 3.25° glidepath | Not confirmed 🟧 | Not confirmed 🟧 | Non-standard glidepath angle — verify; switching to 05L from 05R is reported to reduce track mileage materially |
| 23L | ILS | SLM | Not confirmed 🟧 | Reported as an easier approach to manage than 05R; terrain constraints can force aggressive ATC speed control |
| 23R | Sidestep from a 23L ILS approach | — | — | Threshold further displaced than 23L (§7) — expect reduced usable LDA |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed this pass; early-morning dry-season radiation fog is the plausible trigger — verify. 🟧
- **Missed approach watch-items:** 🟥 **Go-around on RWY 23L/23R tracks toward terrain** — this is a terrain-driven missed-approach case, consistent with the mountainous quadrants described in §3.1. Brief the missed-approach profile and any published turn/gradient constraint against the current chart before every arrival.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** 🟥 High-elevation departure — apply [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4 in full (thrust-limited RTOW, degraded net climb gradient, SID minimum-climb-gradient compliance, engine-out escape routing). Operational cross-check reports **RWY 05L departures are more obstacle-restricted than 05R**, and **RWY 23L/23R departures carry a higher workload due to terrain**. An isolated spot elevation of **10,200 ft AMSL at 038°/22 NM** is a relevant obstacle if routed direct toward the north-east on departure.
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Operational cross-check reports that **push-back from most Terminal 1 stands blocks the main taxiway**, risking delay; starting one engine on stand is used by some operators to reduce this. Verify local procedure. 🟧
- **ATC slot / CTOT & clearance:** The **61-movements/hour saturation cap** almost certainly drives some form of flow management at peak times; a formal CTOT/ATFM-style regime specific to MMMX is not independently confirmed. 🟧
- **De-icing:** Not typically required given the two-season (dry/wet) climate; early-morning cold at 7,316 ft elevation in the dry season may occasionally warrant local caution — treat as **NIL by default, verify locally in season**. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No MMMX-specific published NADP confirmed this pass; fly the type's standard noise-abatement departure procedure per FCOM. 🟧
- **Night noise / dB limits:** A night noise restriction affecting heavier aircraft is reported without confirmed specifics. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminal 1 (main international/domestic) and Terminal 2 (used by a subset of carriers) both handle widebody traffic; exact stand/code-letter allocation not confirmed. 🟧 | 🟧
- **Push-back:** Reported mandatory from most Terminal 1 stands (blocks the main taxiway during the push) — verify current procedure. 🟧
- **Standard taxi routes:** Operational cross-check flags the **Taxiway A1/Taxiway A split** as a point of confusing signage — exercise caution taxiing to RWY 05R.
- **Hot spots / tight taxiways:** 🟥 **Taxiway A is reported unsuitable for heavy jets.** The **A1/A split** is a reported signage/confusion point; a **service road running parallel to Taxiway H1 is not depicted on charts** and can be confused with the taxiway at night (it is brightly lit). Crews cleared to cross RWY 05L should confirm they remain on Taxiway A1 and are not inadvertently lined up on the runway or routed toward Terminal 2.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** High-altitude subtropical highland climate on the Mexican plateau; two well-defined seasons rather than four.
- **Seasonal hazards:** **Dry season (Nov–Apr)** — generally dry/sunny, early-morning radiation fog possible, and occasional Gulf-of-Mexico depressions bringing low cloud/poor visibility and strong-to-gale-force northerly winds with dust. **Wet season (May–Oct)** — frequent afternoon thunderstorms, near-daily rain in Jul/Aug. **Volcanic ash** from the active Popocatépetl (§3.1) is a standing, non-seasonal hazard — see [`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md).
- **Local effects:** Basin-trapped morning mist/smog, typically dissipating by midday.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, volcanic-ash (VONA) advisories for Popocatépetl. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, the RWY 05L/23R and 05R/23L centreline-lighting status, navaid U/S, obstacle/crane, RFF downgrade, current saturation-cap/flow-management notices, GPS/RAIM, and **Popocatépetl volcanic-ash (VONA) advisories**. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination (non-base). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **MMGL** (Guadalajara), **MMMY** (Monterrey), **MPTO** (Toluca) `[VAMSYS mirror 2026-07-26]` — note **MPTO itself sits at a comparably high elevation (~8,400+ ft)** and is not a "gets you low" alternate; confirm current suitability, runway/RFF adequacy and any hot-and-high performance implication at MPTO before filing it.
- **Fuel-uplift notes:** Jet A-1 reported available via multiple into-plane suppliers, 24/7. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟥 High-elevation departure/arrival penalty applies per [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — expect a **real payload/fuel trade** on hot-day departures. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) (Table D, hot-and-high sensitivity) for the per-type tendency; compute the actual RTOW/gradient at dispatch.

---

## 17. Fleet-specific notes (optional)

- No single K Global type carries a unique MMMX-specific restriction beyond the field-wide hot-and-high regime; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) (Table D) for the per-type hot-and-high sensitivity tendency and prefer lower-sensitivity types where the network allows a choice for this destination.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP Mexico (SENEAM) AD 2 MMMX PDF** — a live URL was located (`aipmexico.seneam.gob.mx`) but the document could not be retrieved in full this pass; re-attempt and re-verify every figure below directly against it.
- **Declared distances (TORA/TODA/ASDA)** — assumed equal to full runway length; not confirmed against the primary AIP table.
- **PCN, RFF category, take-off minima** — not published/confirmed in reachable sources.
- **ATC frequencies (Ground, Tower)** — two independent public sources disagree; resolve against current AIRAC.
- **Navaid idents/frequencies (VOR/DME, ILS/DME)** — not confirmed from a primary table.
- **SIDs/STARs (current names)** — not obtained this pass; pull the live current-AIRAC procedure list.
- **Transition altitude (18,500 ft)** — tier-4 cross-checked, not primary-AIP-confirmed.
- **Mag variation** — not confirmed.
- **RNP AR authorisation status; formal special-airport/enhanced-briefing policy gate** — not codified in K Global policy; recommend adopting one given the elevated-category signal in §5.
- **Night noise restriction specifics** — reported but not detailed.
- **Displaced-threshold status of RWY 23L** — no displacement found; not independently re-confirmed as "none exists."

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Mexico (SENEAM), AD 2 MMMX** — https://aipmexico.seneam.gob.mx/AIP/doc/AD/AD_2/38_MMMX/AD_2-MMMX-2.pdf — primary source of record; retrieval did not complete this research pass (retrieved-attempt 2026-07-26). **Re-verify directly before treating any figure above as audit-grade.**
- OurAirports — https://ourairports.com/airports/MMMX/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Runway dimensions/displaced thresholds, ARP, elevation, ATC frequencies.*
- Wikipedia — "Mexico City International Airport" — https://en.wikipedia.org/wiki/Mexico_City_International_Airport (retrieved 2026-07-26). *Elevation, runway lengths, hot-and-high classification, saturation-cap/61-movements-per-hour, terminal operating hours.*
- SkyVector — https://skyvector.com/airport/MMMX/Benito-Juarez-International-Airport (retrieved 2026-07-26). *Cross-check, coordinates.*
- Public Route Information Manual (third-party flight-simulation planning reference, operator-neutral; no operator identified) — https://planning.simfest.co.uk/RIM/MMMX.pdf (retrieved 2026-07-26). *Operational cross-check only, not regulatory: terrain/CFIT quantification, runway-excursion/ground hazards, approach/departure workload notes, packs-off high-elevation technique, seasonal weather pattern, diversion-airport list.*
- SUAT Fuels — https://suatfuels.com/airports/mex.html (retrieved 2026-07-26). *Jet A-1 supplier corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Mexico (SENEAM); K Global fields from live VAMSYS; 4-page pack. |
