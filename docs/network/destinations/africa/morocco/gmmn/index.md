# GMMN — Mohammed V Intl · Airport Briefing

**GMMN / CMN** · Casablanca, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. The primary AIP source of record (AIP Morocco / ONDA, AD 2 GMMN) could not be retrieved this research pass — figures below are cross-checked across multiple public tier-4 sources plus a network-sim (VATSIM Morocco/Maghreb vACC) aerodrome-procedures document, and are flagged 🟧 pending AIP confirmation. Approaches/SIDs/STARs are listed **by name/ident only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N33°21.85′ / W7°34.90′ (33.3675, -7.5900) `[Maghreb vACC / SkyVector cross-check]` |
| Field elevation | **656 ft / 200 m AMSL** — confirmed across five independent sources 🟩 |
| Mag variation | 🟧 **~1.0° W** (Maghreb vACC, doc dated 2023-10-12); a 2014 Jeppesen-chart extract shows 4.1° W and a commercial trip-support source shows 2° W — cross-source spread not resolved against a primary AIP table this pass |
| Time zone | UTC+1; Morocco has historically suspended its DST-style offset during Ramadan in some years — confirm current-year practice locally 🟧 |
| Runway(s) | **17L/35R** and **17R/35L**, parallel, ~3,717 m / 3,711 m × 45 m, asphalt (cross-checked OurAirports/SkyVector/Maghreb vACC) |
| Preferential runway | **Segregated one-way logic**, not independent parallel ops: in the dominant northerly config, **35L = landing / 35R = takeoff**; in the southerly config, **17L = takeoff / 17R = landing** (chart/SOP-informed) 🟧 — see §3.2/§10/§11 |
| Longest LDA | 3,717 m (17L/35R) `[Maghreb vACC cross-check]` 🟧 |
| Approaches | **ILS CAT III on 35R (INR) and 35L (INL)**; **ILS CAT I only on 17R (ICAS)**; RWY 17L approach type not identified in reachable sources 🟧 — approach capability is **not uniform** across the four runway ends |
| RFF category | **CAT 9** (ac-u-kwik, tier-4 only) 🟧 |
| Control type | **Radar** — Mohammed V Approach (Class D CTR/TMA, 7 NM radar separation minima); Casablanca ACC (**GMMM** — Casablanca FIR) en route — see [Africa — General Airspace](../../../../airspace/africa.md) |
| Elevation class | Near-sea-level coastal plain (656 ft) — **not** hot-and-high; the CAT III/LVP infrastructure on 35L/35R points to **coastal fog/low-cloud** as the field's operative weather driver (inferred, see §3.4) 🟧 |
| Special-airport status | 🟥 **IATA Level 3 slot-coordinated** (tier-4 sourced, not AIP-confirmed); segregated-parallel-runway operating logic; major hub under an active multi-year expansion programme (new ~3,700 m third runway, new ATC tower, new terminal, targeted 2029) — see §5 |
| Customs / PoE | **Yes** — OPS H24 assumed; admin hours reported Mon–Fri 0830–1630L (ac-u-kwik) 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` 🟩 |
| Company preferred alternates | **DAAG** (Algiers, Algeria — plain-text, cross-border), **[GMMX](../gmmx/index.md)** (Marrakech), **[GMTT](../gmtt/index.md)** (Tangier) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Casablanca-Settat coastal plain; no close-in high terrain found in any reachable source. |
| Runway length vs fleet perf | 🟩 | ~3,717 m / 3,711 m runways are ample for any K Global widebody; non-limiting. |
| Approach availability / minima | 🟧 | CAT III confirmed on 35R/35L only; 17R is CAT I only; RWY 17L's approach type not identified — confirm before assigning a low-vis approach to 17L. |
| Airspace / traffic / control | 🟥 | Major Royal Air Maroc hub (4th-busiest airport in Africa, 2022; ~10.4M pax 2024); segregated-parallel-runway logic and a Class D radar terminal area drive real workload — see §3.2. |
| Weather / seasonal hazard | 🟧 | CAT III/LVP infrastructure implies seasonal coastal fog is the defining hazard; no independent fog-frequency statistic sourced this pass. |
| Curfew / slots / hours | 🟥 | **IATA Level 3** slot coordination reported (tier-4 only); no hard night curfew identified in reachable sources — neither figure is AIP-confirmed. |
| RFF category vs our types | 🟧 | CAT 9 (tier-4 only) — appears adequate for the network, not independently confirmed. |
| Fuel availability | 🟧 | Jet A-1 confirmed present across multiple sources; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | Customs confirmed Yes; several third-party ground handlers found in a business-aviation directory, but K Global's contracted handler is not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
GMMN sits at 656 ft AMSL on the flat Casablanca-Settat coastal plain (Nouaceur Province, ~16 NM inland of the Atlantic coast at Casablanca). No close-in high terrain was found in any reachable source. Published holding fixes associated with the field (BIRVO, CAE NDB, DEVNO, KOTAG, NASRO) carry minimum holding altitudes in the 3,000–7,000 ft / FL130 band, consistent with an unremarkable sector-safety-altitude picture — verify the current MSA ring on the chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟥
GMMN is the hub for Royal Air Maroc, Royal Air Maroc Express and Air Arabia Maroc, and was the 4th-busiest airport in Africa in 2022 (~10.4M passengers, 2024; ~67,000 movements, 2022). The field's two full-length parallel runways are **not** operated as independent simultaneous parallels: cross-checked ATC-procedure material describes a **segregated one-way logic** — in the dominant northerly configuration, RWY 35L is dedicated to landing and 35R to takeoff; in the southerly configuration, 17L is dedicated to takeoff and 17R to landing — with a published minimum-weather threshold (visibility ≥2,000 m, ceiling ≥500 ft) for running this segregated mode at all. This is a materially different picture from a conventional independent-parallel hub, and crews should positively confirm the assigned runway/role rather than assume interchangeability. Arrivals are commonly vectored point-to-point rather than flown as a full published STAR to the IAF (per the Maghreb vACC cross-check), adding vectoring workload during banks. The terminal airspace is Class D throughout (ATZ/CTR/CTA/TMA) with 7 NM radar separation as the applied minimum. A multi-year airport-expansion programme (new ~3,700 m third runway, new 42 m ATC tower, new terminal raising capacity from ~15M to ~35M pax/yr, construction from 2025 targeting 2029) will add construction-related ground/airspace complexity through the life of this pack. Cross-ref [Africa — General Airspace](../../../../airspace/africa.md).

### 3.3 Runway excursion 🟧
Cross-checked declared distances show **LDA = TORA on all four runway ends** (no displaced thresholds), with modest stopways (~60–90 m) accounting for the TODA/ASDA margin above TORA — a low-excursion-risk picture on paper, though not independently AIP-verified this pass. One specific, chart-informed ground trap: a taxiway reached after landing on RWY 35L visually resembles a rapid-exit but must be taxied at **normal speed, not as a high-speed turnoff** — a genuine excursion/incursion trap if misjudged. 🟧 Not independently re-confirmed against a current AIRAC cycle.

### 3.4 Weather threat 🟧
GMMN's CAT III ILS infrastructure on 35L/35R, together with a published three-stage Low Visibility Procedure regime (trigger conditions keyed to RVR and cloud base — see §10), strongly implies that **seasonal coastal fog/low cloud** is the field's defining weather threat, in the same logical relationship that EDDF's basin fog has to its CAT III fleet. No independent fog-frequency statistic was found in reachable sources this pass — this is an infrastructure-inferred threat, not a directly sourced one, and should be confirmed against the AIP/climatological record. General climate is a mild, Atlantic-influenced transitional-Mediterranean type (Köppen Csa per SKYbrary) with no tropical-cyclone, harmattan, or ITCZ relevance at this latitude.

### 3.5 Operational considerations 🟥
Three durable planning constraints stand out: (1) the **segregated-parallel-runway logic** — always confirm the assigned runway's role (landing vs. takeoff) rather than assuming independent parallel use; (2) a reported **IATA Level 3 slot-coordination** regime (tier-4 sourced only) meaning schedule integrity may carry real network consequences pending AIP/coordinator confirmation; and (3) an **active, multi-year expansion programme** (third runway, new tower, new terminal, targeted completion ~2029 ahead of the 2030 FIFA World Cup) that will progressively change taxiway, stand and tower assignments — expect a rising construction-NOTAM load through this pack's validity period. Most other open items (§18) are currency/administrative confirmations rather than safety-critical gaps, but the absence of a directly-fetched primary AIP this pass should be treated as a genuine limitation, not a formality.

---

## 4. Cautions & Warnings

- **Segregated parallel-runway roles** (35L = land / 35R = depart northerly; 17L = depart / 17R = land southerly) — confirm the assigned runway's role; do not assume either parallel is available in the reciprocal role.
- **Approach capability is not uniform across the field** — CAT III exists on 35R/35L only; 17R is CAT I only; RWY 17L's approach type is unconfirmed. Check the assigned runway before planning a low-visibility approach.
- Chart-informed **holding-position confusion risk** between the parallel runway pair near the 17L/17R and 35L/35R hold points — read back hold-short instructions carefully.
- A taxiway reached after a **RWY 35L landing looks like a rapid-exit but is not** — taxi at normal speed.
- **Bird activity** noted as a local hazard in chart-source material.
- **Active multi-year construction programme** (new runway/terminal/tower, through ~2029) — expect evolving ground layout and construction NOTAMs.
- Company alternate **DAAG (Algiers)** is a materially greater distance than GMMX/GMTT — treat as an enroute/contingency alternate rather than a close diversion option; confirm routing rationale before filing.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **segregated-parallel-runway logic** and the **non-uniform CAT III/CAT I approach picture**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-visibility ops on RWY 35L/35R; RWY 17R is CAT I only and RWY 17L is unconfirmed — confirm crew/aircraft currency and the correct runway's actual capability before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction, or hard night curfew found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival; Morocco visa/entry requirements apply per passenger nationality; no special state permit found for scheduled commercial ops. 🟩
- **Operations notes:** ANSP/airport operator — **ONDA** (Office National Des Aéroports), Morocco's national airports authority. Multiple third-party ground handlers are listed in a business-aviation FBO directory (G-OPS, Moroccan Aviation Services, ASE Morocco, FCG Ops Africa, Link Aero Trading Agency) — K Global's specific contracted handler is not confirmed.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Control Tower H24 (ac-u-kwik) | 🟩 |
| AD operating hours | OPS H24; Admin Mon–Fri 0830–1630L (ac-u-kwik) | 🟧 |
| Night / curfew restrictions | None identified in reachable sources; a 2014 chart source shows different tailwind-takeoff runway preference by day (0600–2300L, RWY35 favoured) vs. night (2300–0600L, RWY17 favoured) but no hard movement ban found | 🟧 |
| RFF category | **CAT 9** (ac-u-kwik) | 🟧 |
| Fuel | Jet A-1 confirmed present (multiple sources); hours/supplier not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Yes; hours beyond "OPS H24" assumption not independently confirmed | 🟧 |
| Handling / FBO | Several third-party handlers listed in a business-aviation directory; airline-side handler for K Global not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 17L | 3,717 × 45 m | Asphalt / PCN not published 🟧 | 3,717 m | 4,617 m | 3,777 m | 3,717 m | Stopway ~90 m (295 ft); no ILS identified — approach type unconfirmed 🟧 |
| 35R | 3,717 × 45 m | Asphalt / PCN not published 🟧 | 3,717 m | 4,117 m | 3,777 m | 3,717 m | Stopway ~60 m (197 ft); **ILS CAT III (INR, 109.900)** |
| 17R | 3,711–3,717 m × 45 m (minor cross-source variance, immaterial) | Asphalt / PCN not published 🟧 | 3,717 m | 4,601 m | 3,771 m | 3,711 m | **ILS CAT I only (ICAS, 108.300)** |
| 35L | 3,711–3,717 m × 45 m (minor cross-source variance, immaterial) | Asphalt / PCN not published 🟧 | 3,717 m | 4,011 m | 3,771 m | 3,711 m | **ILS CAT III (INL, 110.700)** |

*Source: cross-checked from a Maghreb vACC (VATSIM Morocco) aerodrome-procedures document (network-sim, not regulatory — see Sources) and corroborated for gross runway length/width by OurAirports and SkyVector. No AIP-primary declared-distance table was reached this pass — treat all TORA/TODA/ASDA/LDA figures as 🟧 pending ONDA AIP confirmation. No displaced thresholds found (LDA = TORA on every end). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Mohammed V Information | 126.300 | H24 (assumed) 🟧 | |
| Delivery | "Mohammed 5th Delivery" (per SOP) | Not separately isolated in reachable cross-check — likely combined with Ground 130.600 🟧 | — | Start-up clearance issued with the en-route clearance per Maghreb vACC SOP |
| Ground | Mohammed V Ground / Sol | 130.600 (primary); 121.700 shown as a second Ground frequency in one cross-check 🟧 | H24 (assumed) | |
| Tower | Mohammed V Tower / Tour | 118.500 (primary); 119.900 shown as a Tower-secondary in one source but as Approach-primary in another — likely a cross-source extraction artifact 🟧 | H24 | |
| Approach | Mohammed V Approach / Approche | 119.900 (primary); 121.300 (secondary) | H24 (assumed) | Class D CTR/TMA; 7 NM radar separation applied |
| Centre / FIR | Casablanca ACC (**GMMM** — Casablanca FIR) | Per current AIRAC | H24 (assumed) | Named coordination fixes/transfer levels include NIKZO/FOBAC, ODAXA/LAKAM, TOLSI, SADIC, LACAJ (FL110–FL150 band) — see [Africa — General Airspace](../../../../airspace/africa.md) |

*Emergency frequency 121.500 also cross-checked (SkyVector). Source: Maghreb vACC (VATSIM Morocco) cross-check plus SkyVector — treat as 🟧 pending AIP-primary confirmation; the Tower/Ground/Approach structure itself is consistent across all sources checked.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS | INR | 109.900 | H24 (assumed) | Serves RWY **35R** — 3° GP, **CAT III** |
| ILS | INL | 110.700 | H24 (assumed) | Serves RWY **35L** — 3° GP, **CAT III** |
| ILS | ICAS | 108.300 | H24 (assumed) | Serves RWY **17R** — 3° GP, **CAT I only** |
| ILS | — | — | — | RWY **17L** — ident/frequency/approach type not identified in reachable sources 🟧 |
| VOR/DME | CBL (Casablanca) | 115.10 | H24 (assumed) | On/near field, ~3.6 NM |
| VOR/DME | SLK (Sidi Khedim) | 112.50 | H24 (assumed) | ~15.4 NM; used as an approach/IAF reference |
| VOR/DME | CBA (Anfa) | 116.90 | H24 (assumed) | ~10.6 NM |
| VOR/DME | BNS (Benslimane) | 117.45 | H24 (assumed) | ~25.1 NM |
| NDB | NUA (Nouasseur) | 255 | H24 (assumed) | ~4.2 NM |
| NDB | SAK (Anfa) | 413 | H24 (assumed) | ~10.6 NM |
| NDB | HA (El Hank) | 301 | H24 (assumed) | ~15.5 NM |
| NDB | CAE (Benslimane) | 275 | H24 (assumed) | ~27.9 NM |

*All idents/frequencies cross-checked between SkyVector and the Maghreb vACC document (ILS CAT designations from the Maghreb vACC document only) — 🟧 not independently AIP-verified this pass.*

---

## 10. Arrival

- **Transition altitude / level:** TA **4,000 ft** (Maghreb vACC cross-check) 🟧; TL by QNH not confirmed.
- **Speed:** 250 KIAS below FL100 within the Casablanca TMA.
- **Preferential runway logic:** Segregated one-way logic (§3.2) — 35L landing/35R takeoff northerly, 17R landing/17L takeoff southerly; up to 7 KT tailwind, the 35-configuration is used.
- **Approaches (names/idents only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 35R | ILS (INR) | Vectored / SLK-referenced | Verify chart | **CAT III** |
| 35L | ILS (INL) | Vectored / SLK-referenced | Verify chart | **CAT III** |
| 17R | ILS (ICAS) | Vectored / SLK-referenced | Verify chart | **CAT I only** |
| 17L | Not confirmed 🟧 | — | — | Approach type not identified in reachable sources |

- **STARs (names only):** Not confirmed in reachable research pass. Arrivals are commonly vectored point-to-point rather than flown as a full published STAR to the IAF (Maghreb vACC cross-check); named holding fixes exist (BIRVO, CAE NDB, DEVNO, KOTAG, NASRO) — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Cross-checked three-stage regime — **Preparation** (RVR ≤1,000 m or cloud base <400 ft); **In-force** (RVR <800 m or cloud base <200 ft); **Termination** (RVR >1,500 m and increasing, cloud base >300 ft and increasing). Source is a network-sim document — verify against the AIP. 🟧
- **Missed approach watch-items:** Not terrain-driven; the operative concern is re-sequencing into a busy, radar-vectored single-stream environment during banks, and coordination between Approach/Tower on go-around traffic.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Current SID names not confirmed in reachable research pass; historic chart material shows departure routings referencing NUA, SLK and various named waypoints — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed in reachable sources. 🟧
- **Start-up / push-back:** Per Maghreb vACC cross-check, start-up clearance is typically issued together with the en-route clearance ~10 minutes before EOBT; nose-in stands require pushback before start-up (APU-dependent); reverse thrust is prohibited on apron/stands (chart-informed). 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3** slot-coordination reported (tier-4 sourced only) 🟧; a Target Start-Up Approval Time (TSAT)-style sequencing practice is described operationally in the Maghreb vACC cross-check.
- **De-icing:** No de-icing infrastructure or seasonal requirement found in reachable sources for this near-sea-level North African field — treat as **NIL** pending confirmation. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Chart-informed runway-usage pattern shows a **reversed day/night preference** — daytime (0600–2300L) tailwind departures favour the RWY 35 config; nighttime (2300–0600L) tailwind departures shift to the RWY 17 config. Not independently AIP-confirmed. 🟧
- **Night noise / dB limits:** Not found in reachable sources. 🟧
- **Engine run-up restrictions:** Engine test runs restricted to Tower-assigned areas with Tower permission (chart-informed).
- **Reverse thrust / idle-reverse policy:** Reverse thrust prohibited on apron/stands (chart-informed); in-flight/landing reverse-thrust policy not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Historic apron/pier groupings (B/C/D/E/G/J series, plus VIP and Cargo areas) appear in cross-check chart material; exact current-day Code E/F widebody stand assignment is not confirmed, particularly given the active expansion programme. 🟧
- **Push-back:** Nose-in stands require pushback before start-up (APU-dependent); mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** No fixed regulated taxi routes; advisory practice (Maghreb vACC cross-check) is for outbound traffic to use outer taxiways and inbound traffic to use apron inner taxiways, with unidirectional entries/exits recommended where practical.
- **Hot spots / tight taxiways:** 🟥 Chart-informed holding-position confusion risk near the parallel-runway hold points for 17L/17R and 35L/35R; a taxiway reached after a RWY 35L landing resembles a rapid-exit but must be taxied at normal speed (§3.3/§4). Not independently AIP-confirmed.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mild, Atlantic-influenced transitional-Mediterranean climate (Köppen **Csa**, per SKYbrary); the field sits on the Casablanca-Settat coastal plain, ~16 NM inland of the Atlantic.
- **Seasonal hazards:** Seasonal **coastal fog/low cloud** is inferred as the field's defining weather threat from its CAT III/LVP infrastructure (§3.4) — not independently statistic-sourced this pass. 🟧 No tropical-cyclone, harmattan, or ITCZ relevance at this latitude.
- **Local effects:** A coastal sea-breeze/maritime airflow influence is plausible given the field's proximity to the Atlantic coast, but not independently confirmed. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures and **construction-related NOTAMs from the active expansion programme**, navaid U/S (especially the CAT III equipment on 35L/35R), lighting, obstacle/crane, RFF downgrade, GPS/RAIM for any RNP procedure. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / company alternate (K Global base = **No**) `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **DAAG** (Algiers, Algeria — cross-border, materially greater distance), **[GMMX](../gmmx/index.md)** (Marrakech Menara, ~108 NM S), **[GMTT](../gmtt/index.md)** (Tangier Ibn Batouta, further N) `[VAMSYS mirror 2026-07-26]` — exact distances/suitability not independently confirmed this pass; confirm DAAG's planning rationale (enroute/contingency vs. local diversion) before filing. 🟧
- **Fuel-uplift notes:** Jet A-1 confirmed present across multiple sources; specific supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length (~3,717 m) and RFF category are non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No field-elevation (656 ft) or field-length performance penalty applies to any K Global type at GMMN. The operative planning considerations are the segregated-parallel-runway logic and the non-uniform CAT III/CAT I approach picture rather than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP Morocco (ONDA) AD 2 GMMN could not be retrieved this research pass** (site fetch attempts timed out) — every figure in this pack is cross-checked from tier-4 public sources and a network-sim (Maghreb vACC/VATSIM Morocco) document rather than the primary AIP. Re-attempt the ONDA eAIP before advancing this pack past Draft.
- **Magnetic variation** — cross-source spread from 1.0° W (2023 cross-check) to 4.1° W (2014 chart-derived); not AIP-confirmed.
- **PCN and exact TORA/TODA/ASDA/LDA** — sourced to a network-sim document, not the AIP; re-verify.
- **RFF category (CAT 9)** — single tier-4 source only.
- **ILS 17L** — ident, frequency and approach type not found in reachable sources.
- **ILS sub-category (IIIA/IIIB/IIIC)** on 35L/35R — not confirmed.
- **Slot-coordination level** — one tier-4 source shows "IATA Level 3 coordinated," another shows "Slots Required: N/A" — reconcile against the AIP/IATA coordination list.
- **Night curfew** — none identified, but not verified as "none" against current AIRAC.
- **SIDs/STARs (current names)** — not obtained this pass; pull the live current-AIRAC procedure list.
- **Take-off minima, LVTO RVR by category, engine-out/EOSID procedure** — none confirmed in reachable sources.
- **Current-day terminal/stand assignment** — a historic (2014) three-terminal-plus-cargo layout was found; the current-day picture amid the 2025–2029 expansion programme is not independently confirmed.
- **Seasonal fog-frequency statistic** — the CAT III/LVP infrastructure implies coastal fog is significant, but no frequency statistic was independently sourced.
- **Legacy stub cross-check:** the prior seeded VAMSYS-mirror stub (dated 2026-07-19) recorded K Global base = **Yes**, taxi 10/12 min, and preferred alternates GMME/GMAD — all superseded by the current mirror used throughout this pack (2026-07-26: base = No, taxi 12/15 min, alternates DAAG/GMMX/GMTT). Flagged for awareness; the current mirror is treated as authoritative.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (e.g. a 2014 Jeppesen JeppView chart extract, used only to inform runway/threshold/hot-spot/noise-runway detail) informs content but is not listed here.*

- **AIP Morocco (ONDA), AD 2 GMMN** — attempted via https://siamaroc.onda.ma/eaip/ad/AD2GMMN.pdf and https://siamaroc.onda.ma/eAIP/menu.html — **not retrieved this research pass** (fetch timed out); primary source of record, re-attempt before Verified status.
- OurAirports — https://ourairports.com/airports/GMMN/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- SkyVector — https://skyvector.com/airport/GMMN (retrieved 2026-07-26). *Coordinates, runway/threshold data, frequencies, navaids.*
- SKYbrary Aviation Safety — "Casablanca/Mohammed V International Airport" — https://skybrary.aero/airports/gmmn (retrieved 2026-07-26). *Elevation, runway, climate classification.*
- Wikipedia — "Mohammed V International Airport" — https://en.wikipedia.org/wiki/Mohammed_V_International_Airport (retrieved 2026-07-26). *Traffic figures, hub carriers, 2025–2029 expansion programme.*
- AC-U-KWIK — https://acukwik.com/Airport-Info/GMMN (retrieved 2026-07-26). *RFF category, slot-coordination level, hours, handling agents (tier-4).*
- Universal Weather and Aviation — https://www.universalweather.com/airports/GMMN-CMN-MOHAMMED-V-AIRPORT-CASABLANCA-CASABLANCA-MOROCCO/ (retrieved 2026-07-26). *Magnetic variation cross-check (tier-4, partially paywalled).*
- Bigorre.org — https://www.bigorre.org/aero/notam/gmmn/en (retrieved 2026-07-26). *General cross-check.*
- Maghreb vACC (VATSIM Morocco division) — "Casablanca MV (GMMN)" aerodrome procedures — https://docs.vatsim.ma/controllers/aerodrome-procedures/casablanca/ (retrieved 2026-07-26; page last updated 2023-10-12). **Network-sim document, not regulatory** — used as the operational cross-check for ARP/elevation/mag-var, ILS idents/frequencies/CAT, declared distances, LVP stages, and runway-selection/ground-procedure logic, per governance.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
