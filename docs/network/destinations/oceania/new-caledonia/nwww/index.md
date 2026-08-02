# NWWW — Nouméa La Tontouta · Airport Briefing

**NWWW / NOU** · Païta, near Nouméa, New Caledonia · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not directly reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the French SIA (Service de l'Information Aéronautique) AIP for New Caledonia (AIP Outre-Mer, PAC-N region, AD 2 NWWW) where corroborated, cross-checked against IVAO France and VATSIM Australia-Pacific (VATPAC) network-sim operating manuals for this field. The primary eAIP page could not be rendered in this research pass (JavaScript-framed publication) — figures below are corroborated across at least two independent tier-4 sources unless flagged. Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S22°00′52″ / E166°12′47″ (approx., -22.0144/166.2131) `[Navigraph navdata / cross-check]` |
| Field elevation | **51 ft AMSL** |
| Mag variation | 🟧 **~12–13°E** — sources disagree slightly across AIRAC cycles (IVAO tables show both "13°E (2025 cycle)" and a working figure of "12°E" for wind-correction purposes); not reconciled to a single current-cycle figure this pass |
| Time zone | UTC+11 (no DST observed) |
| Runway(s) | 🟥 **11/29, 3,250 × 45 m** — the **sole runway** confirmed across every reachable source (Wikipedia, IVAO France, VATPAC). **A second runway "16/34" could not be corroborated in any reachable source and is not carried forward as a fact — see §18.** |
| Preferential runway | **RWY 11** (east-facing) for both arrivals and departures, given the precision-approach infrastructure on that end; reciprocal **RWY 29** used when tailwind on 11 exceeds ~10 kt (or ~5 kt on a wet runway) — see §10/§11 |
| Longest LDA | 3,250 m (both directions) |
| Approaches | **ILS/LOC (multiple IAF variants) + RNP + VOR + NDB on RWY 11**; **RWY 29 has no ILS — RNP and a visual circling procedure (VPT) only** — see §10 |
| RFF category | Not confirmed in reachable sources — verify against current AIP 🟧 |
| Control type | **Radar/ADS-B-based** (Tontouta uses ADS-B for control/FIS/alerting rather than conventional radar); no CPDLC at this field — see §3.2 |
| Elevation class | Sea-level (51 ft) — **not** hot-and-high; the defining considerations are the **single-runway/reciprocal-operations model** and **Pacific-island isolation** for diversion planning |
| Special-airport status | 🟧 Not operator-categorised as crew-restricted in reachable sources; standing planning items are the **single runway with a visual-only reciprocal end** and the field's role as a **key Coral-Sea/New-Caledonia diversion point** in the wider Oceania network — see [Oceania airspace brief](../../../../airspace/oceania.md) §8 |
| Customs / PoE | Yes — international gateway for New Caledonia (French overseas collectivity); hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | Not base — network destination `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **NSFA, NFFN** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Rolling terrain typical of New Caledonia's Grande Terre; no verified close-in high-terrain data obtained this pass — verify MSA/MVA against a primary AIP chart before relying on it. |
| Runway length vs fleet perf | 🟩 | 3,250 m is ample for the K Global types likely to serve this Pacific destination (up to widebody twin). |
| Approach availability / minima | 🟧 | Full precision approach only on RWY 11; **RWY 29 is RNP/visual-circling only, with no ILS** — a genuine operational asymmetry to brief. |
| Airspace / traffic / control | 🟧 | ADS-B-based ATS surveillance rather than conventional radar; no CPDLC — a distinct local procedure model. |
| Weather / seasonal hazard | 🟥 | **South Pacific tropical-cyclone season (Nov–Apr)** directly affects New Caledonia — cross-ref the [Oceania airspace brief](../../../../airspace/oceania.md) §11. |
| Curfew / slots / hours | 🟧 | No curfew identified; a **night visual-approach restriction** applies from the north sector (LTO VOR radials 290°–128°) — see §10. |
| RFF category vs our types | 🟧 | Not confirmed in reachable sources — verify against current AIP before relying on it. |
| Fuel availability | 🟧 | Not confirmed in reachable sources; Aircalin (the based carrier) and Qantas operate widebody service here, implying standard Jet A-1 availability, but not independently sourced. |
| Customs / handling / security | 🟧 | International PoE confirmed by role; specific hours/handling detail not confirmed in reachable sources. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
New Caledonia's Grande Terre is a mountainous, elongated island, and rolling terrain lies in the vicinity of Tontouta. No verified MSA/MORA figure was obtained from a primary source this pass — treat the local terrain picture as unconfirmed and consult the current AIRAC MSA/area chart rather than relying on this brief for a terrain clearance figure. This is flagged rather than asserted as benign, unlike a genuinely flat/oceanic field.

### 3.2 Airborne conflict / traffic 🟧
Tontouta's ATS distinctively relies on **ADS-B** for control, flight-information and alerting services rather than a conventional radar picture — equipped/certified aircraft benefit from route/level/coordination-error detection and trajectory monitoring under this system. **Separation standard is 5 NM within ADS-B-covered airspace**; outside that coverage, control reverts to **non-radar (procedural) separation**. **There is no CPDLC at Tontouta.** The Nouméa/Tontouta SIV (Flight Information Sector) and Oceanic Control Area extend roughly ±700 NM diagonally from the field, worked by "Tontouta Information"/Tontouta Approach. Cross-ref the [Oceania — SW Pacific & Tasman airspace brief](../../../../airspace/oceania.md) for the wider South Pacific procedural-oceanic picture.

### 3.3 Runway excursion 🟧
No displaced threshold identified for RWY 11/29; declared distances are symmetric both directions (§7). The standing excursion consideration is the **reciprocal-runway wind-limit trigger** (§3.5) — a late runway change driven by a tailwind building past the trigger threshold is the main watch-item, not a length constraint at 3,250 m.

### 3.4 Weather threat 🟥
New Caledonia sits within the **South Pacific tropical-cyclone basin (RSMC Nadi area of responsibility)**, with the cyclone season running **1 November – 30 April, peaking January–March** — see the [Oceania airspace brief](../../../../airspace/oceania.md) §11 for the regional picture. Convective weather in this window can materially affect Tontouta operations and its role as a Coral-Sea diversion point for other Pacific legs. The 2024 New Caledonia civil unrest also closed the airport to international traffic for a period — a reminder that this Pacific-island gateway can face non-weather-related access disruption; not a current constraint but worth institutional awareness.

### 3.5 Operational considerations 🟧
Three durable, field-specific items to plan around: (1) **RWY 29 has no ILS** — only RNP and a visual circling procedure (VPT) are published for that end, so any approach in marginal weather with a westerly/reciprocal wind component is materially more demanding than the RWY 11 case; (2) the **reciprocal-runway wind-limit trigger** — RWY 11 is used for both arrivals and departures unless tailwind exceeds ~10 kt (or ~5 kt wet), at which point RWY 29 is used for both; and (3) **no CPDLC** — datalink-equipped crews should not expect to use it at this field, voice procedures apply throughout.

---

## 4. Cautions & Warnings

- 🟥 **RWY 29 has no ILS approach** — only RNP and a visual manoeuvre with prescribed track (VPT, breaking right after an ILS/VOR approach to RWY 11) are published. A westerly-wind arrival in marginal weather is materially more demanding than the RWY 11 case — brief accordingly.
- **Reciprocal-runway operation is the norm** — RWY 11 is preferred for both arrival and departure; a tailwind trigger (~10 kt dry / ~5 kt wet) switches both to RWY 29.
- **No CPDLC at Tontouta** — do not expect datalink service at this field; voice procedures apply.
- **Night visual approaches are prohibited from the north sector**, between LTO VOR radials 290° and 128° — a specific, named restriction.
- **Backtracking on RWY 11/29 can take 2–3 minutes** given taxiways B/C sit over a kilometre from both thresholds — factor this into sequencing/turnaround timing; Category A/B aircraft and B738/A320-class types may turn around at an intermediate point, other types must backtrack the full runway length.
- **ADS-B-based control with no radar fallback outside ADS-B coverage** — confirm aircraft ADS-B equipage/currency is not an issue for this destination.
- 🟧 A **second runway ("16/34") appears in this brief's original tasking brief but could not be corroborated in any reachable source** (Wikipedia, IVAO France, VATPAC all show a single runway 11/29) — treat any reference to a second runway at this field as unconfirmed pending direct primary-AIP verification (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as crew-restricted in reachable sources; the standing briefing items are the **RWY 29 no-ILS asymmetry** and the **ADS-B/no-CPDLC control model**. 🟧
- **Crew-qualification gate:** None specifically identified; confirm operator-internal RNP/RNP-AR currency requirements given RWY 29's approach profile. 🟧
- **Operating restrictions / bans:** Night visual-approach prohibition from the north sector (§4); no RNP AR ban or general circling restriction otherwise identified. 🟧
- **Overflight / entry / permits:** New Caledonia is a French overseas collectivity; standard French/EU-administered international entry — no separate overflight permit identified for civil traffic in reachable sources. 🟩
- **Operations notes:** ANSP — French DGAC/DSNA regional structure (Nouméa/Tontouta sector); airport operator — Aéroport de Nouméa - La Tontouta (Chambre de Commerce et d'Industrie de Nouvelle-Calédonie). **Aircalin** (the New Caledonian flag carrier) is based here and is the field's predominant carrier; **Qantas** also serves the field with widebody equipment.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 per network-sim sources (positions shown 00:00–24:00) — not independently AIP-confirmed 🟧 | 🟧 |
| AD operating hours | Not confirmed in reachable sources | 🟧 |
| Night / curfew restrictions | No general curfew identified; night visual-approach restriction from the north sector (§4) | 🟧 |
| RFF category | Not confirmed in reachable sources | 🟧 |
| Fuel | Not confirmed in reachable sources; standard Jet A-1 availability inferred from Aircalin/Qantas widebody operations, not independently sourced | 🟧 |
| PCN | Not confirmed in reachable sources | 🟧 |
| Customs | International PoE confirmed by role; hours not confirmed | 🟧 |
| Handling / FBO | Not individually confirmed in reachable sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 11 | 3,250 × 45 m | Not confirmed 🟧 | 3,250 m | 3,350 m | 3,250 m | 3,250 m | True/mag bearing ~109°; preferred runway (precision approach) |
| 29 | 3,250 × 45 m | Not confirmed 🟧 | 3,250 m | 3,350 m | 3,250 m | 3,250 m | True/mag bearing ~289°; **no ILS** — RNP/visual circling only |

*Source: cross-checked between IVAO France (wiki.ivao.fr) and VATPAC (sops.vatpac.org) network-sim operating manuals, both showing the same single-runway 11/29 configuration and matching declared-distance figures; surface/PCN not obtained from either. 🟧 The French SIA primary eAIP (AD 2 NWWW) could not be rendered in this research pass — treat the table above as tier-4 corroborated, not primary-verified, pending a direct AIP pull. A "16/34" second runway referenced in this brief's original tasking anchor is **not supported by any reachable source** and is not carried into this table (§18). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Tontouta ATIS | 126.200 (VATPAC) | HO | 🟧 |
| Ground | Tontouta Ground | 121.700 | H24 (network-sim) | 🟧 |
| Tower | Tontouta Tower | 118.100 | H24 (network-sim) | 🟧 |
| Approach | Tontouta Approach ("La Tontouta Information") | 119.700 | H24 (network-sim) | Also manages the SIV/OCA; no dedicated Departures position — Approach handles both arrivals and departures |
| Centre / FIR | Nouméa/Tontouta sector — see [Oceania airspace brief](../../../../airspace/oceania.md) | — | Handoff to/from Nadi (NFFF) and Brisbane (YBBB) oceanic sectors on trans-Pacific/Tasman routings |

*Source: IVAO France and VATPAC network-sim operating manuals (both corroborate Ground/Tower/Approach frequencies; ATIS frequency only sourced from VATPAC) — treat as 🟧 tier-4 pending primary AIP cross-check. No CPDLC service at this field (§3.2).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | LTO | 112.9 | H24 (assumed) | Primary IAF for most STARs feeding RWY 11; also the reference radial for the night visual-approach restriction |
| NDB | FND | 354 kHz | H24 (assumed) | Serves NDB approaches to RWY 11 |
| ILS/LOC (multiple IAF variants x/y/z) | LT | 109.9 | H24 (assumed) | RWY 11 only; RWY 29 has **no ILS** |

*Source: IVAO France network-sim operating manual (tier-4) — not independently AIP-confirmed. 🟧 Treat idents/frequencies as provisional pending primary-source verification.*

---

## 10. Arrival

- **Transition altitude / level:** **TA 11,000 ft**; **TL FL120** (QNH 1013–1048 hPa) or **FL130** (QNH 977–1012 hPa) `[IVAO France / VATPAC, tier-4]`. 🟧
- **Speed:** Not independently confirmed beyond standard ICAO norms; verify current chart. 🟧
- **Preferential runway logic:** **RWY 11 is preferred for both arrivals and departures** given the precision-approach infrastructure on that end, with **no published wind limitation** for RWY 11 use in the primary reference located; **operational practice (VATPAC) switches both arrivals and departures to RWY 29 when tailwind on RWY 11 exceeds ~10 kt, or ~5 kt with a wet runway.** Circuit direction: **RWY 11 right-hand** (may be flown north of the runway with ATS authorisation), **RWY 29 left-hand**.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | Notes |
|---|---|---|---|
| 11 | ILS/LOC (three IAF variants x/y/z) | TOSAM / SAMID / SUDOV–PEPIT | Precision approach; multiple IAF options feed the same localiser |
| 11 | RNP | — | |
| 11 | VOR | PEPIT (via LTO) | |
| 11 | NDB (two variants y/z) | FND | |
| 29 | RNP | — | **No ILS on this end** |
| 29 | VPT (visual manoeuvre, prescribed track) | — | Flown after an ILS or VOR approach to RWY 11, breaking right; left-hand main circuit; max 185 kt IAS |

- **STARs (names only):** Two families — routes ending in **"2"** use VOR **LTO** as the IAF (e.g. **POXAK 2** from Sydney/YSSY, **NISAS 2** from Brisbane/YBBN, **TEPAM 2** from Cairns/YCNS, **ONIBA 2** from Port Moresby/AYPY, **GOPRA 2** from Tokyo/RJAA-RJTT, **NIPOG 2** from Port Vila/NVVV, **PULON 2** from Honolulu/PHNL, **MUSUS 2** from Nadi/NFFN, **ADKAD 2** from Tahiti/NTAA, **VIRAR 2** from Auckland/NZAA, **SCUBA 2** from Norfolk Island/YSNF); routes ending in **"2A"** feed an intermediate IAF matched to the final-approach procedure chosen. 🟧 Verify current AIRAC names before use.
- **LVP:** Not independently confirmed; low-visibility capability exists only on RWY 11 (ILS-equipped). 🟧
- **Missed approach watch-items:** No terrain-driven MAP data confirmed this pass (§3.1); the operative concern for RWY 29 arrivals is the lack of a precision missed-approach infrastructure — verify the published RNP/visual missed-approach procedure on the current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Procedural SIDs are runway-suffixed — **"3E" for RWY 11, "3W" for RWY 29** — terminating at **GOPRA, LTO, NISAS, ONIBA, POXAK, SCUBA, TEPAM** or **VIRAR**; a dedicated **POGO** SID serves traffic bound for Nouméa Magenta (NWWM), transitioning to the appropriate NWWM STAR at GIRAD. An omnidirectional departure procedure is published for aircraft unable to accept a procedural SID. 🟧 Verify current AIRAC names/gradients before use.
- **RNP / climb-gradient requirements:** Not independently confirmed for the procedural SIDs; the **GOPRA** procedural SID carries a minimum altitude constraint at the LTO waypoint (7,000 ft) in at least one referenced source. 🟧 See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed in reachable sources. 🟧
- **Start-up / push-back:** Notable **B777-300 turn-back procedure** on the RWY 11/29 turn-pad ("raquette") with dedicated markings, limited to 10 km/h during the manoeuvre; **B777 push-back from stands P11/P21 is west-facing only, via TWY W**, to a marked stop; an **A380 at stand P21 activates a "ZEC A380" extension**, with push-back via bretelle B and outer engines kept shut down during the manoeuvre. 🟧 Network-sim sourced, not primary-AIP-confirmed.
- **ATC slot / CTOT & clearance:** No formal slot-coordination or CTOT regime identified. 🟧
- **De-icing:** Not applicable/confirmed — tropical Pacific-island climate makes de-icing a non-factor at this field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 Terminal apron is divided into a **civil area (north)** and a **military area (south)**, with a **freight parking area west of the main civil apron**. Named stands include **P1/P2** (wide-body: B787, B772/B773, A332, A342, A359 — paired-neutralisation with P11/P21), **P3–P5** (narrowbody/regional; P5 neutralises P51/P52 and, if occupied by a Code D/E aircraft, also neutralises P61–P64), **P7** (ATR maintenance apron), **P11** (main widebody stand: B787, B773, B744, A332, A359), **P21** (widebody incl. **A380 via the "ZEC A380" extension**: B787, B772, B744, A359, A380), **P51/P52** (P51 narrowbody B737-700/A319; P52 widebody-capable), **P61–P65** (ATR/turboprop and VFR), **D1/D2** (D1 narrowbody B739/B787/A321; D2 widebody-capable) — heavy paired-neutralisation logic throughout, confirm current stand plan with handling. 🟧 Network-sim sourced.
- **Push-back:** See §11 for the B777/A380-specific procedures at P11/P21.
- **Standard taxi routes:** Taxiways **B, C and W** are Code E-capable (up to A339/B77W-class); taxiways **G and T** serve the military apron and are Code C-capable (up to CN235/A400M-class).
- **Hot spots / tight taxiways:** 🟥 **Backtracking on the runway can take 2–3 minutes** given taxiways B/C sit over a kilometre from both thresholds — factor into sequencing. Category A/B aircraft and B738/A320-class types may turn around at an intermediate runway point; all others must backtrack the full length.
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical Pacific-island climate; RWY 11 (east-facing) is the dominant operational orientation given its precision-approach infrastructure and the reciprocal-wind-limit trigger for switching to RWY 29 (§10).
- **Seasonal hazards:** 🟥 **South Pacific tropical-cyclone season, 1 November – 30 April (peak January–March)** — New Caledonia sits within the RSMC Nadi area of responsibility; see the [Oceania airspace brief](../../../../airspace/oceania.md) §11 for the regional picture and bulletin sources.
- **Local effects:** No specific local wind/terrain effect confirmed in reachable sources beyond the general tropical-island pattern. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, cyclone bulletins in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (especially the RWY 11 ILS — RWY 29 has no backup precision aid), lighting, obstacle/crane, RFF status, cyclone-season advisories, and any civil-security NOTAMs given the field's history of unrest-driven closure (§3.4). Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Network destination; also a recognised **Coral-Sea/New-Caledonia diversion point** in the wider Oceania network (see the [Oceania airspace brief](../../../../airspace/oceania.md) §8).
- **Nearest suitable alternates:** Company preferred alternates **NSFA** (Nadi, Fiji — cross-country, plain text) and **NFFN** (Nadi International, Fiji — cross-country, plain text) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg; both require standard oceanic-alternate planning given inter-island distances.
- **Fuel-uplift notes:** Not confirmed in reachable sources; standard Jet A-1 availability inferred from resident widebody operations (Aircalin, Qantas) but not independently sourced. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,250 m) is non-limiting for any K Global type likely on this route. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — ETOPS-EDTO Procedures`](../../../../../flight-ops/etops-edto.md) for the wider Pacific-diversion planning context.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty identified for any K Global type at NWWW. The one asymmetry worth flagging fleet-wide is that **RWY 29 offers no precision approach** — any type/crew combination without current RNP-approach capability should treat a westerly-wind arrival as materially more constrained than the RWY 11 case. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP verification** — the French SIA eAIP page for AD 2 NWWW could not be rendered in this research pass (JavaScript-framed publication); every figure in this brief is tier-4 (network-sim) corroborated across at least IVAO France and/or VATPAC, not primary-AIP-verified. Re-pull directly from https://www.sia.aviation-civile.gouv.fr/ (eAIP PAC-N) before treating any figure here as audit-grade.
- 🟥 **"Second runway (16/34)"** — this brief's original tasking anchor referenced a second runway "16/34" at NWWW. **No reachable source (Wikipedia, IVAO France, VATPAC) corroborates a second runway at this field** — all three independently show a single runway 11/29. This has **not** been fabricated into the runway table; confirm directly against the primary AIP whether a second runway exists, is planned, or the anchor was in error.
- **Magnetic variation** — sources show both "13°E (2025 cycle)" and a working "12°E" figure; not reconciled.
- **RFF category, PCN, fuel supplier/hours, customs hours, handling agent(s)** — none confirmed in reachable sources.
- **ATC frequencies (Ground/Tower/Approach/ATIS)** — network-sim sourced only (IVAO France / VATPAC); not primary-AIP-confirmed.
- **Take-off minima, noise abatement, engine run-up/reverse-thrust policy** — none confirmed.
- **Current STAR/SID names and RNP/gradient specifics** — network-sim sourced (2026 AIRAC cycle per IVAO France's own changelog); pull the live current-AIRAC procedure list before use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **French SIA (Service de l'Information Aéronautique) — eAIP France Outre-Mer, PAC-N region** — https://www.sia.aviation-civile.gouv.fr/ (attempted 2026-07-26; page did not render in this research pass — JavaScript-framed publication, primary source of record but not directly cited for figures in this build).
- **IVAO France — "NWWW - Nouméa La Tontouta" operating manual** (MANEX Aéroports Civils, Outre-Mer chapter, AIRAC cycle 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/nwww-noumea-la-tontouta (retrieved 2026-07-26). *Network-sim, not regulatory — runway/declared-distance, frequency, navaid, SID/STAR, stand and taxiway detail cross-checked here.*
- **VATPAC (VATSIM Australia-Pacific) — "Nouméa La Tontouta (NWWW)" Standard Operating Procedures** — https://sops.vatpac.org/pacific/New-Caledonia/La-Tontouta/ (retrieved 2026-07-26). *Network-sim, not regulatory — runway-mode/wind-trigger logic, backtracking, ATIS, VPT circling procedure cross-checked here; independently corroborates the single-runway 11/29 configuration.*
- Wikipedia — "La Tontouta International Airport" — https://en.wikipedia.org/wiki/La_Tontouta_International_Airport (retrieved 2026-07-26). *General/history, single-runway corroboration, 2024 civil-unrest closure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from cross-checked tier-4 network-sim sources (IVAO France, VATPAC) pending primary French SIA AIP verification; K Global fields from live VAMSYS; 4-page pack. Flagged the unconfirmed "16/34" second-runway anchor rather than fabricating it. |
