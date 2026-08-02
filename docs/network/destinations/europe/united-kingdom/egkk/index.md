# EGKK — Gatwick · Airport Briefing

**EGKK / LGW** · Crawley, West Sussex, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the UK AIP (NATS Aeronautical Information Service, eAIP AD 2‑EGKK) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 51°08′53″N / 000°11′25″W (mid-point of RWY 08R/26L) `[UK AIP AD 2.2]` |
| Field elevation | **203 ft AMSL** (reference temperature 20°C) |
| Mag variation | **0.53° E (2022)**, annual change 0.19° E `[UK AIP AD 2.2]` — 🟧 not re-confirmed against current AIRAC |
| Time zone | UTC+0 (GMT) / UTC+1 (BST, UK DST observed) |
| Runway(s) | **Main 08R/26L** 3,317 × 45 m · **Standby (close-parallel) 08L/26R** 2,561 × 45 m — both asphalt, grooved, **PCN 100/F/C/W/T** `[UK AIP AD 2.12]` |
| Preferential runway | **08R/26L is the operational runway for essentially all landings and takeoffs**; **08L/26R is a close-parallel "standby" runway, only 200 m from the main runway centreline — too close for ICAO-compliant independent/simultaneous use** — it normally functions as a taxiway and is brought into runway service only when the main runway is closed/unavailable. See §3.5/§5/§11. 🟥 |
| Longest LDA | 2,830 m (26L, main runway) |
| Approaches | **ILS CAT III on the main runway** (08R/26L); standby runway (08L/26R) has **no ILS** — RNAV(GNSS) or SRA when in use. Idents/per-end category not confirmed this pass 🟧 |
| RFF category | **CAT 10 (A10)** `[UK AIP AD 2.6]` 🟩 |
| Control type | **Radar** — Gatwick Tower/Ground/Director on the field (Director callsign confirmed, AIP AD 2.17); **London (EGTT)** en route/FIR — 🟧 **no EGTT FIR brief exists yet in this library**; see [Europe airspace briefing](../../../../airspace/europe.md) for continental context |
| Elevation class | Near sea-level (203 ft) — **not** hot-and-high; the defining operational characteristic is the **single-effective-runway capacity constraint**, the world's busiest airport operated this way |
| Special-airport status | 🟥 **Slot-coordinated IATA Level 3** (coordinator **Airport Coordination Limited, ACL**); **world's busiest single-runway airport**; standby/close-parallel runway rule — see §5 |
| Customs / PoE | **Yes** — H24 `[UK AIP AD 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGLL, EHAM, EBBR** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **16 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Sussex/Surrey lowland; no close-in high terrain relevant to arrival/departure/missed-approach paths. |
| Runway length vs fleet perf | 🟩 | Main runway (3,317 m, LDA 2,765–2,830 m) is ample for any K Global type; standby runway (2,561 m, LDA 2,146–2,241 m) is non-limiting when in use for our fleet. |
| Approach availability / minima | 🟧 | CAT III confirmed on the main runway; per-end ILS category/sub-category and idents not confirmed this pass. Standby runway has no ILS — RNAV(GNSS)/SRA only. |
| Airspace / traffic / control | 🟥 | **World's busiest single-runway airport** — the standby runway cannot be used concurrently for independent parallel ops, so all traffic funnels through one effective runway at a time. See §3.2. |
| Weather / seasonal hazard | 🟧 | Standard UK maritime climate; no field-specific extreme weather hazard identified beyond general fog/low-cloud risk common to SE England — verify current seasonal data. |
| Curfew / slots / hours | 🟥 | **Slot-coordinated Level 3** (ACL) **and** a **DfT-designated night quota scheme** — restricted period 2300–0700, quota period 2330–0600, seasonal movement/QC limits — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟧 | Hydrant refuelling confirmed; AIP explicitly notes **"very limited bowser capacity"**; specific supplier not confirmed. |
| Customs / handling / security | 🟧 | Customs/security/ATS all H24 per AIP; **named ground handling agent for our operation not individually confirmed** (Swissport, Menzies and dnata are known to operate at the field generally). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EGKK sits at 203 ft AMSL on flat Sussex/Surrey lowland — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Non-issue for terrain; verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟥
Gatwick operates as the **world's busiest single-runway airport**. Although two parallel runways exist, their centrelines are only **200 m apart — too close for ICAO-compliant simultaneous/independent operations** `[Wikipedia, tier-4 corroboration; consistent with the AIP's declared-distance/lighting treatment of both as fully marked runways]`. In routine operations **08L/26R (standby) functions as a taxiway**, and all landings plus nearly all takeoffs use **08R/26L (main)**. Two holding stacks serve the field: **WILLO** (west of Lewes, above Burgess Hill) and **TIMBA** (above Heathfield), with holding below 6,000 ft at the **Mayfield (MAY)** VOR `[Gatwick Airport noise-portal PDF, tier-4]`. This single-effective-runway structure means any main-runway disruption (closure, inspection, incident) has an outsized capacity impact versus a conventional dual-independent-runway hub. Cross-ref the continental [Europe airspace briefing](../../../../airspace/europe.md) — **no dedicated EGTT (London FIR/UIR) brief exists yet**; treat this as an open item.

### 3.3 Runway excursion 🟧
Displaced thresholds are published on all four runway ends (08R −395 m, 26L −425 m, 08L −321 m, 26R −415 m) `[UK AIP AD 2.12]` — brief the correct reduced LDA per end, not the full physical runway length. No contamination-specific excursion data confirmed this pass — verify current AIP/chart.

### 3.4 Weather threat 🟧
Standard UK maritime climate; Continuous Descent Approach (CDA/CDO) is used on both runways to minimise noise, particularly at night `[Wikipedia, Gatwick noise-portal, tier-4]`. No field-specific extreme-weather hazard (e.g. fog frequency statistic) was confirmed in this research pass — treat as general SE-England climatology pending further confirmation. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **standby-runway usage rule** — 08L/26R may only be brought into runway service when the main runway (08R/26L) is closed or unavailable, since the two runways cannot be operated independently and simultaneously; when in use it has **no ILS** (RNAV(GNSS) or SRA approach only); (2) the **Level 3 slot-coordinated regime** (ACL) — schedule integrity has direct network consequences at a capacity-constrained single-effective-runway field; and (3) the **DfT-designated night quota scheme** (§6/§12) — a late arrival/departure has real schedule and diversion implications. A **Northern Runway repositioning project** (Development Consent Order granted 21 Sep 2025, upheld by the High Court 23 Jun 2026) aims to enable independent dual-runway operation by "the turn of the decade" (~2030) — **not yet in effect**; the single-effective-runway constraint remains the operative reality for planning purposes today. 🟧

---

## 4. Cautions & Warnings

- **Only one runway is ever the operational runway in normal ops** — 08L/26R is a close-parallel standby, used as a taxiway except when the main runway is unavailable. Never assume both runways are independently usable.
- **When the standby runway is in use, it has no ILS** — expect RNAV(GNSS) or SRA (Surveillance Radar Approach) only; confirm current chart/NOTAM before planning an arrival on 08L/26R.
- **Displaced thresholds on all four runway ends** — brief the reduced LDA per end (08R 2,765 m, 26L 2,830 m, 08L 2,241 m, 26R 2,146 m), not the full physical length.
- **Maximum landing/takeoff weight limit of 562,000 kg applies to both runways** `[UK AIP AD 2.12]` — a non-factor for K Global's Category L fleet but a useful cross-check.
- **World's busiest single-runway airport** — capacity is tightly constrained; a main-runway disruption has an outsized network impact.
- **A Northern Runway independent-dual-runway project is approved but not yet operational** (target ~2030) — do not plan around future independent parallel capability; today's single-effective-runway constraint applies.
- **ATC frequencies, ILS idents/category, and current SID/STAR designators are not independently confirmed in this build** (§18) — do not use any value below as a substitute for the current chart.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **standby-runway usage rule and its RNAV(GNSS)/SRA-only approach when active**. 🟥
- **Crew-qualification gate:** CAT II/III currency required for full-capability ops on the main runway in low-visibility conditions — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Night restricted period 2300–0700 and night quota period 2330–0600 under the DfT scheme (§6/§12); no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard UK international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **NATS** (Gatwick Tower/Ground/Director on the field). Airport operator — **Gatwick Airport Limited**, day-to-day operated by **VINCI Airports** (50.01% majority stake since 2019) alongside a GIP-managed consortium (49.9%, GIP owned by BlackRock). Slot coordinator — **Airport Coordination Limited (ACL)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[UK AIP AD 2.3]` | 🟩 |
| AD operating hours | H24 (AD Administration H24) | 🟩 |
| Night / curfew restrictions | Night period **2300–0700** (noisiest QC/4, QC/8, QC/16 barred, exceptions apply); night quota period **2330–0600**: movement limit **Winter 3,250 / Summer 11,200**; noise quota (QC) limit **Winter 1,785 / Summer 5,150** `[GOV.UK DfT night-flight consultation, current regime]` | 🟥 |
| RFF category | **CAT 10 (A10)** `[UK AIP AD 2.6]` | 🟩 |
| Fuel | AVTUR Jet A-1; **hydrant refuelling, very limited bowser capacity**; H24 `[UK AIP AD 2.3/2.4]` | 🟧 |
| PCN | Both runways **100/F/C/W/T**; apron concrete 89/R/C/W/T and concrete block paving 100/F/C/W/T `[UK AIP AD 2.8/2.12]` | 🟩 |
| Customs | H24 `[UK AIP AD 2.3]` | 🟩 |
| Handling / FBO | H24 handling confirmed generically; Swissport, Menzies and dnata known to operate at the field generally — named agent for our operation not confirmed `[tier-4 corroboration]` | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08R (main) | 3,317 × 45 m | Asphalt, grooved / PCN 100/F/C/W/T | 3,159 m | 3,311 m | 3,233 m | **2,765 m** | Landing threshold displaced 395 m |
| 26L (main) | 3,317 × 45 m | Asphalt, grooved / PCN 100/F/C/W/T | 3,255 m | 3,399 m | 3,317 m | **2,830 m** | Landing threshold displaced 425 m; 150 m starter extension |
| 08L (standby) | 2,561 × 45 m | Asphalt, grooved / PCN 100/F/C/W/T | 2,561 m | 3,040 m | 2,561 m | **2,241 m** | Landing threshold displaced 321 m; runway-as-taxiway in normal ops |
| 26R (standby) | 2,561 × 45 m | Asphalt, grooved / PCN 100/F/C/W/T | 2,515 m | 2,657 m | 2,515 m | **2,146 m** | Landing threshold displaced 415 m; runway-as-taxiway in normal ops |

*Source: UK AIP AD 2‑EGKK 2.12/2.13 (NATS eAIP, AIRAC cycle effective 2022‑06‑16 — treat as needing a live-AIRAC cross-check for currency, though core runway geometry/PCN/declared distances change rarely). Intersection take-off options are also published from Holding Points Hotel 1, Golf 1 (RWY 08R), Alpha 1, Bravo 1, Charlie 1 (RWY 26L) with reduced TORA/TODA/ASDA — pull the current AIRAC table if an intersection departure is used. Maximum weight limit **562,000 kg** applies to landing/takeoff on both runway pairs. RESA 90×90 m and 240×90 m all ends; strip 08L/26R 2,681×150 m, 08R/26L 3,437×280 m. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Gatwick Info | 136.525 | H24 (assumed) | `[AIP chart mirror, AIRAC 07/2019]` 🟧 needs current-AIRAC cross-check |
| Delivery | Gatwick Delivery | 121.955 | When directed by ATC | 🟧 |
| Ground | Gatwick Ground | 121.805 | H24 (assumed) | 🟧 |
| Tower | Gatwick Tower | 124.230 / 134.230 | Mixed | 🟧 |
| Approach / Director | Gatwick Director | 118.95 / 126.82 / 129.02 | Mixed | 🟧 tier-4 (SkyVector) — sector-specific, take the assigned frequency |
| Fire (non-ATS) | Gatwick Fire | 121.600 | As required | 🟧 |
| Centre / FIR | London (EGTT) — no dedicated brief in this library yet | Per current AIRAC | H24 | See [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |

*ATIS/Delivery/Ground/Tower frequencies are cross-checked between an AIP chart mirror (AIRAC 07/2019) and SkyVector (tier-4) and agree closely; Director/Approach frequencies are SkyVector-only. The primary AIP AD 2.18 table for the current AIRAC cycle was not reached in this pass — treat all frequencies as 🟧 pending live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Localizer (main runway) | I-GG | 110.90 | H24 (assumed) | 🟧 geometric inference places this serving 08R approaches — not independently labelled in the source; verify current chart |
| Localizer (main runway) | I-WW | 110.90 | H24 (assumed) | 🟧 geometric inference places this serving 26L approaches — verify current chart |
| VOR/DME | OCK (Ockham) | 115.30 | H24 (assumed) | ~13.5 NM NW; regional reference fix |
| VOR/DME | MAY (Mayfield) | Not confirmed | — | Below-6,000 ft holding reference `[tier-4]` |

*ILS category/sub-category not confirmed from a primary table this pass. Standby runway (08L/26R) has **no ILS** — when in use, arrivals are RNAV(GNSS) or SRA (Surveillance Radar Approach) only `[Wikipedia, tier-4]`.*

---

## 10. Arrival

- **Transition altitude / level:** **TA 6,000 ft** (CTR and ATZ both state Transition Altitude 6,000 ft) `[UK AIP AD 2.17]` 🟩; TL by QNH — not itemised in sections reached this pass.
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** **08R/26L (main)** is used for essentially all landings; **08L/26R (standby)** is used only when the main runway is closed/unavailable. Roughly 74% of takeoffs are westbound (26 direction) per prevailing wind `[Wikipedia, tier-4]`.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 08R | ILS (CAT III capability) | Ident/category not confirmed this pass 🟧 |
| 26L | ILS (CAT III capability) | 🟧 |
| 08L | RNAV (GNSS) / SRA only | **No ILS** — only when main runway unavailable |
| 26R | RNAV (GNSS) / SRA only | **No ILS** — only when main runway unavailable |

- **STARs (names only):** Not confirmed as formal designators this pass — the two holding stacks (**WILLO, TIMBA**) and the **MAY (Mayfield)** below-6,000 ft holding point are confirmed by name; pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III applies to the main runway; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat lowland); the operative missed-approach concern is re-sequencing into the single-effective-runway traffic flow.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass this build — pull the current-AIRAC SID list at planning. 🟧 A named departure route ("**Route 4**," westbound then turning 180° back east) is confirmed and is subject to an active 2026 airspace-change consultation to reintroduce RNAV procedures `[gatwickairport.com]`.
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify per-SID gradient/equipage on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Nose-in parking, push-back required except stands 41 and 43 `[UK AIP AD 2.9]`; confirm cross-bleed/APU notification procedure locally.
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated** (coordinator **ACL**); EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated, single-effective-runway hub. 🟧
- **De-icing:** "By arrangement with handling agent" per AIP AD 2.4 — no dedicated remote pad locations confirmed in this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Noise Preferential Routes (NPRs) apply to departing jets, tracked as part of Gatwick's own **Airline Noise Performance Table (ANPT)** alongside QC-per-seat and CDA compliance `[Wikipedia, gatwickairport.com]`. Track-keeping violations specifically on "Lambourne departures from Runway 26 (Route 4)" are excluded from ANPT statistics.
- **Night noise / dB limits:** DfT-designated scheme — night period 2300–0700, night quota period 2330–0600 with movement/QC limits (§6). Governance via GATCOM (Gatwick Airport Consultative Committee), NATMAG and the Noise Management Board.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** **North Terminal** (31 gates, **3 A380-capable**, Piers 4/5/6) and **South Terminal** (32 gates + 7 remote/bus gates, Piers 1/2/3) both provide widebody-capable stands `[Wikipedia]`. Confirm current gate assignment with handling. 🟧 | 🟧
- **Push-back:** Nose-in parking; push-back mandatory except stands 41/43 `[UK AIP AD 2.9]`. Most stands use A-VDGS ("Safedock"); marshaller-only stands and mirror/Safedock-mixed stands are individually listed in the AIP.
- **Standard taxi routes:** Confirm with Ground/Director on the day; taxiways A–Z (with sub-designators) link the piers, both runways and cargo/maintenance areas.
- **Hot spots / tight taxiways:** 🟧 A tier-4 AIP-chart mirror (AIRAC 07/2019) identifies **HS1 (Foxtrot Romeo RET)** — aircraft vacating 26L via taxiway FR do not need clearance to cross 26R onto taxiway J, a point that can look like a runway crossing; **HS2 (Taxiway Juliet)** — caution where the taxiway deviates north; **HS3 (26R TODA)** — the take-off distance for 26R begins at a specific demarcation point given the runway's dual taxiway/standby-runway role. These were **not independently re-confirmed against the current-AIRAC AIP text reached in this pass** (truncated before the relevant section) — treat as a strong tier-4 lead, verify on the current chart.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate, SE England lowland; prevailing wind consistent with the ~74% westbound (26-direction) takeoff split.
- **Seasonal hazards:** No field-specific extreme-weather hazard statistic confirmed this pass; general UK maritime fog/low-cloud risk applies, mitigated by CAT III on the main runway. Winter de-icing (mechanical/chemical — potassium acetate primary, ethylene glycol in exceptional circumstances) is a recognised seasonal programme `[UK AIP AD 2.7]`.
- **Local effects:** No notable terrain/sea-breeze effects at this inland-lowland location.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. main-runway status, since the standby runway's availability directly gates capacity), navaid U/S, CAT III equipment status, lighting, obstacle/crane (multiple lit cranes charted near the field, AIP AD 2.10), RFF downgrade, slot/CTOT constraints. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates [**EGLL**](../egll/index.md) (Heathrow), [**EHAM**](../../netherlands/eham/index.md) (Amsterdam Schiphol), [**EBBR**](../../belgium/ebbr/index.md) (Brussels) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1; **hydrant refuelling, very limited bowser capacity** `[UK AIP AD 2.4]` — specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runway; also non-limiting on the standby runway when it is in use. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty for K Global's Category **L** operation at EGKK. The operative planning consideration is the **single-effective-runway capacity constraint** and its knock-on schedule/diversion risk if the main runway is disrupted — not aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ATC frequencies (§8)** — cross-checked between a dated AIP-chart mirror (AIRAC 07/2019) and a tier-4 hobby aggregator; the current-cycle AIP AD 2.18 communications table was not reached in this research pass.
- **ILS idents and per-runway-end category/sub-category (§9/§10)** — AIP AD 2.19 not reached; main-runway CAT III capability is confirmed generically, per-end idents/category are inferred/tier-4 only.
- **Named ground-movement hot spots (HS1–HS3, §13)** — sourced to a dated tier-4 AIP-chart mirror, not independently re-confirmed against the current-cycle AIP text.
- **SIDs/STARs (current designators)** — not obtained in this research pass; the two holding stacks (WILLO/TIMBA) and Route 4 are confirmed by name, formal current SID/STAR designators are not.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, cross-bleed/APU start procedure** — none confirmed in reachable sources this pass.
- **De-icing pad locations/procedure** — AIP states "by arrangement with handling agent" only.
- **Named ground handling agent(s) for our operation** — not confirmed; Swissport, Menzies, dnata are known to operate at the field generally.
- **No dedicated EGTT (London FIR/UIR) brief exists yet in this library** — flagged per governance; link only the continental [Europe airspace briefing](../../../../airspace/europe.md) until a dedicated EGTT brief is built.
- **Northern Runway independent-dual-runway project status** — DCO granted and upheld, but not operational; target ~2030. Confirm current status before treating dual-independent capability as available.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **UK AIP (NATS Aeronautical Information Service), AD 2‑EGKK**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGKK-en-GB.html (retrieved 2026-07-26). *ARP/elevation/mag-var, operational hours, cargo/handling, RFF category, seasonal/de-icing, apron/taxiway data, obstacles, runway physical characteristics, declared distances, transition altitude. Fetch truncated before AD 2.18 (communications) — navaids, local traffic regulations/noise, hot spots/charts index not reached; treat those items as unconfirmed pending a further pull.*
- AIP chart mirror (AIRAC 07/2019) — https://airportcodes.aero/charts/EGKK.pdf (retrieved 2026-07-26). *ATIS/Delivery/Ground/Tower frequencies, hot-spot detail — dated, needs current-AIRAC cross-check.*
- OurAirports — https://ourairports.com/airports/EGKK/ and /runways.html (retrieved 2026-07-26). *Cross-check.*
- SkyVector — https://skyvector.com/airport/EGKK (retrieved 2026-07-26). *Director/Approach frequency reference (tier-4).*
- Wikipedia — "Gatwick Airport" — https://en.wikipedia.org/wiki/Gatwick_Airport (retrieved 2026-07-26). *Standby-runway usage rule, terminal structure, ownership.*
- Gatwick Airport — "Northern Runway" — https://www.gatwickairport.com/company/future-plans/northern-runway.html (retrieved 2026-07-26). *Standby-runway rule, DCO/expansion status.*
- Gatwick Airport — "Route 4" — https://www.gatwickairport.com/company/noise-airspace/route-4.html (retrieved 2026-07-26). *Named departure route, 2026 airspace-change consultation.*
- Gatwick Airport noise portal — holding stacks (WILLO/TIMBA/MAY) — https://aircraftnoise.gatwickairport.com/2021/03/29/arrivals-and-holding/ (retrieved 2026-07-26).
- GOV.UK — night flight restriction consultation, Heathrow/Gatwick/Stansted from October 2025 (DfT) — https://www.gov.uk/government/consultations/night-flight-restrictions-heathrow-gatwick-and-stansted-airports-from-october-2025 (retrieved 2026-07-26). *Night quota movement/QC limits.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
