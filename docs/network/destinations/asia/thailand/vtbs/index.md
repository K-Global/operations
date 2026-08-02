# VTBS — Suvarnabhumi Intl · Airport Briefing

**VTBS / BKK** · Bangkok (Samut Prakan Province), Thailand · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Thailand (AEROTHAI)-derived, Asia network build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Thailand (published by AEROTHAI — Aeronautical Radio of Thailand — under the Civil Aviation Authority of Thailand), cross-checked against public tier-4 sources; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 13°41′09″N / 100°44′56″E (13.6858, 100.7489) `[AIP Thailand AD 2 VTBS 2.2, 2023-04-20 cycle]` |
| Field elevation | **4.6 ft / 1.4 m AMSL** (reference temperature 33.2°C), per AIP threshold/ARP data 🟧 — the legacy stub cited 8 ft (Navigraph navdata); the AIP tier-1 figure is adopted here, see §18 |
| Mag variation | 0° 35′ W (2016 epoch, ~0° annual change) `[AIP Thailand AD 2 VTBS 2.2]` 🟧 — dated cycle, not re-confirmed against current AIRAC |
| Time zone | UTC+7 (ICT) — no DST |
| Runway(s) | **01/19** 4,000 × 60 m · **02R/20L** 3,700 × 60 m · **02L/20R** 4,000 × 60 m (third runway, opened for full operations 1 Nov 2024) — see §7 |
| Preferential runway | Wind-driven: the southbound **19/20L/20R** configuration is the default; the reciprocal **01/02R/02L** (northbound) configuration is used once the tailwind component exceeds ~5 kt, typically in the NE-monsoon (dry, cool) season — see §10/§11 🟧 |
| Longest LDA | 4,000 m (RWY 01/19) |
| Approaches | **ILS Z (CAT II)** on 01/19 and 02R/20L; **RNP** (non-precision, no ILS) on 02L/20R — see §10 |
| RFF category | **CAT 10** `[AIP Thailand AD 2 VTBS 2.6]` 🟩 |
| Control type | **Radar** — Suvarnabhumi Tower/Ground on the field; **Bangkok Approach**; **Bangkok ACC (VTBB)** en route — see [Asia Airspace Brief](../../../../airspace/asia.md) (Bangkok/VTBB FIR) |
| Elevation class | Sea-level / flat Chao Phraya delta plain — **not** hot-and-high; the performance/reliability driver here is **SW-monsoon convective rain and reduced visibility**, not density altitude |
| Special-airport status | Category B aircraft or above only, minimum final-approach speed 110 KT; school/training/circuit flights not permitted `[AIP Thailand AD 2 VTBS 2.20]` — non-issue for any K Global type 🟩 |
| Customs / PoE | **Yes** — H24 `[AIP Thailand AD 2 VTBS 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **VTBD** (Don Mueang), **VTBU** (U-Tapao) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 17 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Chao Phraya delta plain; no close-in high terrain. Urban high-rises/towers noted near the field (§3.1) but not a CFIT driver. |
| Runway length vs fleet perf | 🟩 | 4,000 m (01/19) and 3,700 m (02R/20L) are ample for any K Global type; the new 02L/20R (4,000 m) is arrivals-only and RNP-only, non-limiting for length. |
| Approach availability / minima | 🟧 | **ILS Z, CAT II** on 01/19 and 02R/20L — **not CAT III**; the new 02L/20R runway carries **no ILS**, RNP approach only. This is the field's ceiling on low-visibility capability — see §3.4. |
| Airspace / traffic / control | 🟧 | Busy Class C ATZ under radar (Bangkok Approach/Suvarnabhumi Tower); one of Southeast Asia's busiest fields, capacity raised 68→94 movements/hour with the 2024 third-runway opening — see §3.2. |
| Weather / seasonal hazard | 🟥 | SW-monsoon (approx. May–Oct) convective storms and heavy rain are the defining seasonal hazard, compounded by the CAT II (not CAT III) approach ceiling — see §3.4/§14. |
| Curfew / slots / hours | 🟩 | H24 aerodrome/ATS/customs; no curfew found in reachable sources. Slot-coordination level (IATA Level 1/2/3) not confirmed — flagged 🟧 in §18. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement; disabled-aircraft removal capability confirmed up to B744-class dimensions/weight. |
| Fuel availability | 🟩 | Jet A-1, H24, two confirmed into-plane providers on field (§16). |
| Customs / handling / security | 🟩 | H24 confirmed for customs, immigration, health, security, and handling per AIP. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
VTBS sits at 4.6 ft AMSL on the flat, reclaimed Chao Phraya delta plain (the site was formerly a swamp, historically known as "Nong Nguhao") — there is **no close-in high terrain** relevant to arrival, departure, or missed-approach paths. The AIP's aerodrome-obstacle table (AD 2.10) lists only urban obstacles — the on-field ATC tower (475 ft/145 m AMSL, lit) and a scatter of city high-rises/towers in the 130–390 ft AMSL range around the approach/circling areas — routine city-airport obstacle awareness rather than a terrain threat. CFIT is a non-issue field; verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
VTBS is one of the busiest airports in Southeast Asia (20th busiest worldwide by passenger traffic, serving more airlines than any other airport globally as of 2025) inside a Class C ATZ (5 NM radius, surface–2,000 ft) under radar control from **Bangkok Approach** and **Suvarnabhumi Tower/Ground**. The **third runway (02L/20R), opened for full operations 1 November 2024**, raised published movement capacity from roughly 68 to 94 flights/hour, but the operation is still a comparatively recent three-runway configuration — expect continued procedural refinement and a busy, radar-vectored terminal environment, especially around bank periods. Controlling en-route authority is **Bangkok ACC (VTBB)** — see the [Asia Airspace Brief](../../../../airspace/asia.md) (no dedicated Bangkok/VTBB FIR brief is built yet — see Open items).

### 3.3 Runway excursion 🟧
No displaced thresholds are published for 01/19 or 02R/20L in the reachable AIP extract. Runway 02R/20L's surface (the original West runway) is **grooved**; 01/19 (the original East runway) is **not grooved** — a genuine surface-friction differential to carry into wet-runway/braking-action planning, particularly relevant given the monsoon rainfall pattern (§3.4). A precedent exists: on 8 September 2020, a Boeing 747-400 arriving from China suffered a runway excursion while landing on the runway end then designated 19R (now 20L, part of 02R/20L) — historical corroboration, not a current defect, but a reminder that wet-runway excursion risk is real at this field. Historical AIP-adjacent reporting from 2007 (runway surface ruts) and c. 2016 (soft tarmac/taxiway patching) has also been publicly documented; treat as resolved/legacy unless a current NOTAM says otherwise (§18).

### 3.4 Weather threat 🟥
Thailand's **SW monsoon (approximately May–October)** brings the defining seasonal hazard here: afternoon/evening convective thunderstorms and heavy tropical rainfall that can sharply reduce visibility, produce standing water on the runway, and trigger ATC-driven holding, rerouting, or ground-delay programs. This is materially amplified by the field's **approach ceiling — ILS Z CAT II on 01/19 and 02R/20L, no ILS at all on the new 02L/20R** — meaning VTBS has **less low-visibility margin than a CAT III field**; a monsoon cell dropping visibility below CAT II minima is a genuine diversion-risk trigger, not merely a delay. The drier **NE-monsoon season (roughly Nov–Feb)** brings lower humidity and a wind-driven runway-configuration reversal (§10/§11); the intervening **hot season (Mar–May)** and dry-season agricultural/urban haze can also periodically reduce visibility. See §14.

### 3.5 Operational considerations 🟧
Three durable items to plan around: (1) the **2024 runway/procedure overhaul** — the third runway (02L/20R) opened, the two original runways were **re-designated** (former 01R/19L → **01/19**; former 01L/19R → **02R/20L**), and an entirely new SID/STAR set was published with the associated AIRAC cycles (3 Oct 2024) plus new ILS-approach waypoints (13 Jun 2024) — any cached older navdata (old runway names, old procedure names) is now invalid; (2) the field's **advanced surface-movement radar uses Mode S multilateration** — aircraft must have Mode S transponders operable on the ground per AIP AD 2.20, a real ground-ops procedural item; (3) the **ILS DME is offset** from the runway threshold (historically ~2.2–2.3 NM at the old West/East runways) — do not expect a zero DME read at the threshold. RFF and navaid infrastructure are first-tier; most open items in §18 are currency confirmations against the post-2024 AIRAC rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **No CAT III capability at this field** — 01/19 and 02R/20L are **ILS Z, CAT II**; the new 02L/20R has **no ILS at all** (RNP only). Do not assume CAT III low-visibility fallback here.
- **Runway/procedure renumbering (3 Oct 2024)** — former 01R/19L is now **01/19**; former 01L/19R is now **02R/20L**; the new third runway is **02L/20R**. Confirm any older chart/navdata reflects the current designators.
- **02R/20L is grooved; 01/19 is not** — factor this surface-friction difference into wet-runway/braking-action planning during the monsoon season.
- **ILS DME does not read zero at the threshold** — historically offset ~2.2–2.3 NM; rely on the navigation display or apply the offset if using raw DME.
- **Mode S transponder/TCAS ground procedures are mandatory** — the field's surface movement radar depends on Mode S multilateration; ensure transponders are correctly configured per AIP AD 2.20 before taxi.
- **Taxiways T8–T12 are prohibited for A380-class aircraft** — a wingspan-limited taxiway constraint; confirm routing for any Code F-class movement.
- **Category B-or-above / min. final-approach-speed-110-KT restriction and a training/circuit-flight ban** are locally published — non-issue for K Global's fleet, but a marker of how tightly the field protects declared runway capacity.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. The field does publish a local capacity-protection rule: only Category B aircraft or above, with a minimum final-approach speed of 110 KT, may operate at VTBS (exceptions for SAR/medical/inspection/VIP/emergency flights); school, training, and continuous circuit flights are **not permitted** `[AIP Thailand AD 2 VTBS 2.20]`. 🟩 Non-issue for any K Global type.
- **Crew-qualification gate:** No CAT II/III-specific crew-currency mandate found in reachable sources beyond the standard requirement to hold current CAT II approach qualification for the ILS Z approaches on 01/19 and 02R/20L. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources; verify current AIRAC. The 2024 SID/STAR overhaul superseded prior procedures entirely (§3.5). 🟧
- **Overflight / entry / permits:** Standard Thai international arrival; no special state permit found for scheduled commercial operations. 🟩
- **Operations notes:** Aerodrome operator — **Airports of Thailand Public Company Limited (AOT)**. ANSP for approach/en-route — **Aeronautical Radio of Thailand Ltd. (AEROTHAI)**, publisher of AIP Thailand. Associated MET office — the Aeronautical Meteorology Division, Thai Meteorological Department.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (aerodrome operator, ARO, AIS briefing office all H24) `[AIP Thailand AD 2 VTBS 2.3]` | 🟩 |
| Night / curfew restrictions | None found in reachable sources | 🟩 |
| RFF category | CAT 10; disabled-aircraft removal capability confirmed up to B744-class dimensions/weight | 🟩 |
| Fuel | Jet A-1, H24 — two confirmed into-plane providers (§16) | 🟩 |
| PCN | Runway/taxiway PCN 137 (asphalt); apron PCN 126 (concrete) `[AIP Thailand AD 2 VTBS 2.8/2.12]` | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Multiple ground-handling and fuel-service providers registered at the field; specific contracted agent for K Global operations not confirmed | 🟧 |

---

## 7. Runways & declared distances

*Runway designators shown are current (post-3 October 2024 re-designation). The two original runways carry forward the same physical pavement/geometry under new numbers; the declared-distance figures below are the last AIP-published values under the prior designators and are **not independently re-confirmed post-redesignation** — flagged 🟧. The third runway's own declared-distance/PCN table was not obtained in a machine-readable form this pass — flagged 🟧.*

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01 | 4,000 × 60 m | Asphalt, PCN 137/F/D/X/T; **not grooved** | 4,000 m | 4,000 m | 4,000 m | 4,000 m | Formerly **01R** (pre-3 Oct 2024); ILS Z CAT II; intersection entry (former TWY B12) reduces TORA/ASDA to 3,890 m 🟧 |
| 19 | 4,000 × 60 m | Asphalt, PCN 137/F/D/X/T; not grooved | 4,000 m | 4,550 m | 4,000 m | 4,000 m | Formerly **19L**; ILS Z CAT II; intersection entry (former TWY B2) reduces TORA/ASDA to 3,870 m 🟧 |
| 02R | 3,700 × 60 m | Asphalt, PCN 137/F/D/X/T; **grooved** | 3,700 m | 4,800 m | 3,700 m | 3,700 m | Formerly **01L**; ILS Z CAT II; intersection entry (former TWY E19) reduces TORA/ASDA to 3,590 m 🟧 |
| 20L | 3,700 × 60 m | Asphalt, PCN 137/F/D/X/T; grooved | 3,700 m | 4,400 m | 3,700 m | 3,700 m | Formerly **19R**; ILS Z CAT II; intersection entry (former TWY E2) reduces TORA/ASDA to 3,590 m. **Site of a 2020 landing runway excursion** (§3.3) 🟧 |
| 02L | 4,000 × 60 m | Asphalt (reported); PCN not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | **Third runway**, opened for full operations 1 Nov 2024; **no ILS — RNP approach only**; reported strip 4,120 × 300 m; **arrivals-only role** per operational cross-check (§10) |
| 20R | 4,000 × 60 m | as 02L 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Reciprocal of 02L; RNP approach only, no ILS |

*Strip/RESA/clearway (original two runways only): 01/19 strip 4,120 × 300 m, RESA 240 × 150 m, CWY 01-end NIL / 19-end 550 × 150 m. 02R/20L strip 3,820 × 300 m, RESA 240 × 150 m, CWY 02R-end 1,100 × 150 m / 20L-end 700 × 150 m. Source: AIP Thailand AD 2 VTBS 2.12/2.13, 2023-04-20 cycle (pre-redesignation) — figures carried forward under the new designators, not independently re-verified against a current AIRAC. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (arrival) | Suvarnabhumi Airport | 133.6 / 278.6 MHz | H24 | D-ATIS, synthesised voice |
| ATIS (departure) | Suvarnabhumi Airport | 127.65 MHz | H24 | D-ATIS |
| Delivery | Suvarnabhumi Delivery | 128.7 / 133.8 MHz | H24 | |
| Ground | Suvarnabhumi Ground | 121.65 MHz (East apron) · 121.75 MHz (Main apron) · 121.95 MHz (West apron) | H24 | Apron-sector split — confirm assignment per stand (§13) |
| Tower | Suvarnabhumi Tower | 118.2 / 274.5 MHz (RWY 01/19, formerly East runway) · 119.0 MHz (RWY 02R/20L, formerly West runway) | H24 | Runway-based split; the new RWY 02L/20R's tower assignment not independently confirmed 🟧 |
| Approach | Bangkok Approach | 122.35, 124.35, 125.2, 128.95, 119.1, 120.3, 125.8 MHz (sector-specific) | H24 | Take the assigned sector frequency |
| Departure | Suvarnabhumi Departure | 119.25 MHz | H24 | |
| Arrival | Suvarnabhumi Arrival | 121.1, 126.3 MHz | H24 | Typically assigned below ~7,000 ft per operational cross-check |
| Emergency | — | 121.5 / 243.0 MHz | H24 | Guard, all positions |
| Centre / FIR | Bangkok ACC (VTBB) | Per current AIRAC | H24 | See [Asia Airspace Brief](../../../../airspace/asia.md) — no dedicated VTBB FIR brief built yet |

*Source: AIP Thailand AD 2 VTBS 2.18, 2023-04-20 cycle. The 2024 runway re-designation/SUP 42-24 amended AD 2.18/2.19 — exact current-cycle frequencies and the runway-to-tower-position mapping are 🟧 not independently re-confirmed. Cross-checked against a VATSIM Thailand vACC pilot briefing (network-sim document, not regulatory), which corroborates the Delivery, Departure, Arrival and both ATIS frequencies exactly.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | SVB | 111.4 MHz, CH 51X | H24 | 🟧 Published terrain-shielding restriction: coverage below required altitude is degraded in sectors — radial 131°–150° not reliable below 4,000 ft; 151°–250° not below 2,000 ft; 251°–130° not below 2,500 ft. Relevant to any VOR-based holding/navigation near the field at low altitude. |
| ILS Z (CAT II) — RWY 01/19 & 02R/20L | Idents/frequencies last published under the pre-redesignation runway names (I-SWS/I-SWN/I-SES/I-SEN, 109.1–110.5 MHz range, CAT II LOC/DME + separate GP) | — | H24 | 🟧 **Not independently re-confirmed post-3-Oct-2024 redesignation** — SUP 42/24 explicitly amended AD 2.19; current idents/frequencies must be pulled from the current AIRAC before use. |
| RWY 02L/20R | No ILS published | — | — | RNP approach only (§7/§10) |

---

## 10. Arrival

- **Transition altitude / level:** TA 11,000 ft MSL `[AIP Thailand AD 2 VTBS 2.17]`; TL reported as a fixed **FL130** for all Thailand aerodromes per operational cross-check 🟧 (not independently confirmed from the AIP ENR extract obtained this pass).
- **Speed:** 250 KT or less below 10,000 ft (local rule, per operational cross-check) — confirm current chart.
- **Preferential runway logic:** Southbound **19/20L/20R** configuration is the default; the reciprocal **01/02R/02L** configuration is used once tailwind exceeds ~5 kt, more common in the NE-monsoon (dry) season. Runway roles per operational cross-check: **01/19 handles both arrivals and departures; 02L/20R is arrivals-only (RNP); 02R/20L is departures-only.** 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 01 | ILS Z, CAT II | Additional X/Y-suffix variants may also be charted historically — verify current AIRAC naming |
| 19 | ILS Z, CAT II | |
| 02R | ILS Z, CAT II | |
| 20L | ILS Z, CAT II | Site of a 2020 landing runway excursion (§3.3) |
| 02L | RNP | No ILS; arrivals-only role |
| 20R | RNP | No ILS |

- **STARs (names only):** Not confirmed in reachable research pass — an entirely new STAR set was published with AIRAC 2410 (3 Oct 2024), superseding all prior procedures (e.g. the former "DOLNI" arrivals no longer exist) — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Given the CAT II ceiling (no CAT III anywhere on field), SW-monsoon convective/heavy-rain events are the primary LVP trigger; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat delta plain); the operative missed-approach concern is re-sequencing into a busy, radar-vectored Class C terminal environment, particularly during a monsoon convective event.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — the prior SID set (including named departures such as the former "KIGOB"/"GORSI") was retired with the October 2024 AIRAC cycle; pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** RWY 02L/20R is RNP-served by design (no ILS); confirm RNP/gradient requirements per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Ground Control clearance required for start-up and push-back at every stand; standard nose-out push onto the taxilane centreline, apron-sector-specific frequency (§8/§13). Large widebody types have historically required a towbarless tow tractor at specific stands — confirm current equipment requirement for the assigned stand. 🟧
- **ATC slot / CTOT & clearance:** IATA slot-coordination level not confirmed in reachable sources; given the field's capacity constraints (68→94 movements/hour post-third-runway) at least Level 2-style coordination is plausible but unconfirmed. 🟧
- **De-icing:** **NIL** — tropical field, no de-icing facilities or season (per AIP AD 2.3/2.4).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — standard initial climb altitude reported at 6,000 ft (operational cross-check); no named noise-abatement departure routing found. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources; no curfew or night noise-charge regime found. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Two-terminal complex — the main terminal (Concourses/Gates A–G) plus the **SAT-1 satellite terminal** (connected by Automated People Mover). Confirmed A380-capable (Code F) stands: **C3, C7, E4, E8** (main terminal), **S111–S118** (SAT-1), and remote positions **201–203 / 401–403**. 🟧 K Global's specific contracted gate/terminal assignment not confirmed.
- **Stands NOT usable by our types:** **Taxiways T8, T9, T10, T11, T12 are prohibited for A380-class aircraft** — a wingspan-limited constraint; confirm routing for any Code F movement. 🟥
- **Remote / hardstand positions:** Remote stands exist in front of the cargo terminal (approx. **506–525**, cargo-designated) and elsewhere (201–203, 401–403, shared with domestic/A380 use per §above).
- **Ground-movement stand caveats:** Apron/Ground Control is split by sector — **East apron 121.65 MHz** (stands A1–6, B1–6, C1/C3/C5/C7/C9, 101–134, 201–203), **Main apron 121.75 MHz** (C2/C4/C6/C8/C10, D1–8, E1/E3/E5/E7/E9, 301–308), **West apron 121.95 MHz** (E2/E4/E6/E8/E10, F1–6, G1–5, 401–403, 501–525). Confirm the correct sector frequency before requesting push-back/taxi.
- **Follow-me:** Not confirmed in reachable sources. 🟧
- **Ground surveillance:** The field operates an **Advanced Surface Movement Radar using Mode S multilateration** — aircraft (and authorised ground vehicles) must have Mode S transponders operable while on the movement area, with specific squawk/TCAS-activation timing published in AIP AD 2.20. This is a genuine procedural item, not optional.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical savanna climate. Three broad seasons: **hot** (approx. Mar–May), **SW-monsoon/rainy** (approx. May–Oct), and **NE-monsoon/cool-dry** (approx. Nov–Feb). Prevailing wind favours the southbound 19/20L/20R runway configuration most of the year; the northbound 01/02R/02L configuration is used when the NE-monsoon brings a tailwind component exceeding ~5 kt on the default configuration (§10/§11).
- **Seasonal hazards:** The **SW monsoon (May–Oct)** brings the field's defining hazard — afternoon/evening convective thunderstorms and heavy rainfall capable of dropping visibility below the field's CAT II ceiling and producing standing water on the (partly ungrooved) runway surface; historical reporting also documents Bangkok-area flash-flooding in the surrounding lowlands during severe monsoon events. The **dry season (roughly Nov–Apr)** can bring periodic regional haze/reduced visibility from agricultural and urban air-quality sources — general regional climatology, no VTBS-specific frequency statistic found. No CFIT-relevant terrain effect exists at this flat delta-plain field.
- **Local effects:** No notable terrain/sea-breeze effect at this inland-delta, flat-plain field; monsoon convection is the standout local effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories (Gulf of Thailand/Andaman side systems can affect the wider region in season). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check especially: runway/taxiway status given the still-recent 2024 third-runway commissioning, navaid U/S (particularly the DVOR/DME SVB sector restrictions, §9), ILS status on 01/19 and 02R/20L, RFF category, lighting, obstacle/crane, GPS/RAIM for the RNP approach on 02L/20R. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — a standard Asia-network Suvarnabhumi rotation (not a base/hub).
- **Nearest suitable alternates:** Company preferred alternates **VTBD** (Don Mueang) and **VTBU** (U-Tapao) `[VAMSYS mirror 2026-07-26]` — confirm current suitability, runway/RFF adequacy and minima per leg; no dedicated K Global brief is built yet for either field.
- **Fuel-uplift notes:** Jet A-1, H24. Two confirmed into-plane providers on field: **Bangkok Aviation Fuel Services (BAFS)** and **Aircraft Service International Group (Menzies Aviation)**. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on RWY 01/19 (4,000 m) or 02R/20L (3,700 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty is expected for any K Global type at VTBS — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning considerations are the **CAT II (not CAT III) low-visibility ceiling** during the monsoon season and the **taxiway T8–T12 A380/Code-F restriction** (§13) rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field elevation** — AIP tier-1 figure (4.6 ft / 1.4 m) adopted over the legacy stub's Navigraph-sourced 8 ft; recommend re-verifying against a current AIRAC cycle given the 2024 runway works.
- **Magnetic variation** — sourced to a 2016 epoch; not re-confirmed against current AIRAC.
- **Declared distances / PCN for RWY 02L/20R (the new third runway)** — not obtained in machine-readable form this pass; the figures for 01/19 and 02R/20L are carried forward from the pre-redesignation (2023 cycle) publication and not independently re-confirmed post-redesignation.
- **ILS idents/frequencies for 01/19 and 02R/20L** — last published under the pre-redesignation runway names; SUP 42/24 explicitly amended AD 2.19; current idents/frequencies not independently re-confirmed.
- **SIDs/STARs (current names)** — entirely new procedures were published with the 3 Oct 2024 and 13 Jun 2024 AIRAC cycles; not obtained by name in this research pass.
- **Transition level (FL130 fixed)** — sourced to an operational (VATSIM) cross-check, not independently confirmed from the AIP ENR extract.
- **Tower frequency assignment for RWY 02L/20R** — the AIP's runway-based tower split (118.2 East / 119.0 West) predates the third runway; its own tower assignment not independently confirmed.
- **IATA slot-coordination level** — not confirmed in reachable sources.
- **Noise-abatement procedure (NADP), night noise regime, engine run-up and reverse-thrust policy** — none confirmed in reachable sources.
- **Follow-me availability, rapid-exit taxiway/vacate detail, contracted ground handling agent(s) for K Global operations** — not confirmed.
- **Take-off minima exact figures** — not confirmed this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Thailand, AD 2 VTBS (Aerodrome/Heliport VTBS)**, AEROTHAI/CAAT eAIP, 2023-04-20 AIRAC cycle — https://aip.caat.or.th/2023-04-20-AIRAC/html/eAIP/VT-AD-2.VTBS-en-GB.html (retrieved 2026-07-26). *ARP/elevation, runway geometry, declared distances, PCN, comms, navaids, hours, RFF, local regulations — pre-3-Oct-2024-redesignation baseline.*
- **AIRAC AIP SUP A 41/24 — Re-designation of Runway 01R/19L and 01L/19R at VTBS**, AEROTHAI/CAAT, effective 2024-10-02/03 — https://aip.caat.or.th/2024-10-02/html/eSUP/VT-eSUP-24-41-A-en-GB.html (retrieved 2026-07-26). *Confirms the runway re-designation mapping.*
- **AIRAC AIP SUP A 42/24 — Updates Aerodrome Information for New Runway Designations 01/19, 02R/20L, 02L/20R at VTBS**, AEROTHAI/CAAT, effective 2024-10-03 — https://aip.caat.or.th/2024-10-03-AIRAC/html/eSUP/VT-eSUP-24-42-A-en-GB.html (retrieved 2026-07-26). *Confirms third-runway (02L/20R) non-precision/RNP status and the AD sections amended.*
- VATSIM Thailand vACC — "VTBS - Suvarnabhumi Airport" pilot briefing — https://wiki.vacc-tha.org/books/pilot-briefings-charts/page/vtbs-suvarnabhumi-airport (retrieved 2026-07-26). *Network-sim document, not regulatory — used to cross-check runway roles, preferential-runway logic, frequencies, transition altitude/level, and approach names; matches AIP frequency data closely.*
- Wikipedia — "Suvarnabhumi Airport" — https://en.wikipedia.org/wiki/Suvarnabhumi_Airport (retrieved 2026-07-26). *General history, third-runway opening/capacity figures, tower height cross-check, 2020 runway-excursion event, historical pavement-quality reporting.*
- THAILAND.GO.TH — "Suvarnabhumi Airport's Third Runway Set to Take Flight..." — https://thailand.go.th/issue-focus-detail/suvarnabhumi-airports-third-runway-set-to-take-flight-in-september-2024-skyrocketing-capacity-to-94-flights-per-hour (retrieved 2026-07-26). *Third-runway capacity figure corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
