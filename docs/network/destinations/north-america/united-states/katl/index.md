# KATL — Hartsfield-Jackson Atlanta International · Airport Briefing

**KATL / ATL** · Atlanta, Georgia, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the FAA Aeronautical Information Publication (AIP), AD 2 Georgia — KATL, plus the FAA Chart Supplement and standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 33°38′12.12″N / 084°25′40.31″W (33.63670, -84.42786) `[FAA AIP AD 2.2 KATL]` `[Navigraph navdata]` |
| Field elevation | **1,026.2 ft / 313 m AMSL** `[FAA AIP AD 2.2]` |
| Mag variation | 🟧 **5° W** — sourced to the 2015 epoch; current-day value not independently re-confirmed against current AIRAC |
| Time zone | UTC-5 (EST) / UTC-4 (EDT, US DST observed) |
| Runway(s) | **Five parallel/near-parallel east–west runways:** 08L/26R (9,000 ft), 08R/26L (~10,000 ft), 09L/27R (12,390 ft, longest), 09R/27L (9,000 ft), 10/28 (9,000 ft) — all rigid-pavement, ILS-equipped both ends |
| Preferential runway | Published preferential-use logic: **08R/26L and 09L/27R primarily for departures; 08L/26R and 09R/27L primarily for arrivals**; 10/28 used per flow `[FAA AIP General Remarks]` — see §10/§11 |
| Longest LDA | 11,890 ft (RWY 27R); TORA 12,390 ft on the 09L/27R pair |
| Approaches | **ILS/DME published on all ten runway ends**; ILS CAT II/III confirmed for RWY 08L and RWY 09R; RWY 10 carries CAT II/III equipment with a **type-specific CAT III restriction** (see §5); CAT category for the remaining runway ends not independently confirmed this pass 🟧; RNAV(GPS) approaches also expected — verify current AIRAC |
| RFF category | **FAA ARFF Index E** (Class I certified 1 May 1973, 14 CFR Part 139) — the top FAA index; ICAO-scale equivalent not independently confirmed 🟧 |
| Control type | **Radar** — Atlanta Tower (ATCT) on the field; **Atlanta TRACON ("A80")** approach/departure — one of the largest and busiest terminal radar facilities in the US, sectorized across Atlanta/Macon/Columbus/Athens; **Atlanta ARTCC (ZTL)** en route — see [North America airspace brief](../../../../airspace/north-america.md) |
| Elevation class | 1,026 ft — **not** hot-and-high; density altitude is a non-issue at this field |
| Special-airport status | 🟥 **Extensive wingspan-based taxiway restrictions** (thresholds at 171 ft, 213 ft, 214 ft and 225 ft) apply on several taxiways — directly relevant to the K Global A388 (A380-family, ~262 ft wingspan), which exceeds every published threshold — see §13/§17 |
| Customs / PoE | **Yes** — international terminal/concourse; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **KCLT, KMEM, KBNA** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 22 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Rolling Piedmont terrain at 1,026 ft; no close-in high ground relevant to any arrival/departure/missed-approach path. |
| Runway length vs fleet perf | 🟩 | Shortest runway 9,000 ft, longest 12,390 ft — ample for every K Global type including the A388. |
| Approach availability / minima | 🟧 | Full ILS/DME coverage on all ten runway ends; CAT category confirmed for only two runway ends this pass; SID/STAR/approach names not fully pulled from a primary source. |
| Airspace / traffic / control | 🟥 | World's busiest airport by passenger traffic; one of the busiest TRACONs in the US; several closely-spaced parallel runway pairs drive PRM procedures and sustained high workload — see §3.2. |
| Weather / seasonal hazard | 🟧 | Rare but real winter ice-storm risk (Southeastern US, not a heavy-snow field); routine summer convective/thunderstorm activity is the more frequent seasonal driver of ground delay. |
| Curfew / slots / hours | 🟩 | H24 ATS/AD hours; no flight-movement curfew found — see §6 for the (unrelated) landside terminal-access restriction. |
| RFF category vs our types | 🟩 | FAA ARFF Index E — the top FAA category, above any K Global type's requirement. |
| Fuel availability | 🟧 | Jet A confirmed available per FAA data; specific supplier/hours not independently confirmed. |
| Customs / handling / security | 🟧 | Confirmed Port of Entry; desk hours, ground handler and specific gate assignment not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
Hartsfield-Jackson sits at 1,026 ft AMSL on the rolling Piedmont plateau of north Georgia — gently undulating terrain with no close-in high ground, ridgelines or mountainous obstacles relevant to any arrival, departure or missed-approach path. This is a non-issue field for CFIT; verify the MSA ring on the current chart as routine practice, but terrain is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
Since 1998, Hartsfield-Jackson has been the **world's busiest airport by passenger traffic** (108.1 million passengers in 2024), sustained by an unusual **five parallel/near-parallel east–west runway** arrangement (08L/26R, 08R/26L, 09L/27R, 09R/27L, 10/28) that supports triple/quadruple simultaneous approaches and departures — one of only a handful of US airports with this capability. The overlying airspace is worked by **Atlanta TRACON ("A80")**, one of the largest and busiest terminal radar approach control facilities in the country, sectorized across Atlanta, Macon, Columbus and Athens, with **Atlanta ARTCC (ZTL)** providing en route service — see [North America airspace brief](../../../../airspace/north-america.md). Several runway pairs sit **less than 1,000 ft apart** (closely-spaced parallels), which FAA runway-safety data flags as carrying elevated incursion risk; **Precision Runway Monitor (PRM)** simultaneous-close-parallel-approach procedures are published for 09L/27R, 09R/27L and 10/28 specifically to manage this. Expect sustained high controller/crew workload, frequent runway-crossing sequencing, and a standing FAA-published requirement to read back all runway-holding instructions.

### 3.3 Runway excursion 🟧
Several runway ends carry meaningful LDA reductions against total runway length — most notably **09L (LDA 11,730 ft vs 12,390 ft TORA, a 660 ft difference)** and **27R (LDA 11,890 ft vs 12,390 ft, 500 ft)** — with smaller reductions on 08L/26R (200–500 ft) and 27L/09R (0–135 ft). Brief the correct published LDA for the assigned runway rather than assuming full-length landing distance is available; see §7. No runway is contamination-critical in normal conditions, but the rare winter ice event (§3.4) raises braking-action risk sharply relative to its low frequency.

### 3.4 Weather threat 🟧
Atlanta has a humid subtropical climate with a real, if infrequent, **winter ice-storm risk**: the field is not a heavy-snow airport, but freezing-rain/ice events — most notably the January 2014 regional ice storm that paralysed metro Atlanta ground transport and forced widespread flight cancellations — can occur with comparatively limited routine large-scale de-icing practice relative to a northern hub field. Treat any winter precipitation forecast as a higher-relative-risk item than its raw frequency suggests. Summer afternoons carry the standard Southeastern US **convective/thunderstorm risk**, which is the more frequent seasonal driver of ground-delay/flow programs at this traffic volume. See §14.

### 3.5 Operational considerations 🟥
Three durable planning constraints stand out: (1) an extensive set of **wingspan-based taxiway restrictions** — thresholds at 171 ft, 213 ft, 214 ft and 225 ft trigger specific routing, passing, or speed restrictions on Taxiways V, W, F, L/M, A and SJ — directly relevant to the K Global **A388** (A380-family, ~262 ft wingspan), which exceeds every published threshold; see §13/§17. (2) The **preferential-runway program** (§10/§11). (3) The sheer **traffic density** driving continuous parallel-dependent operations under Atlanta TRACON. RFF, navaid and lighting infrastructure are all high-end (ARFF Index E; ILS/DME on every runway end); the open items in §18 are mostly currency/administrative confirmations rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **Wingspan >213–225 ft** (this includes the K Global A388) triggers specific taxiway-use, passing and speed restrictions on TWY L/M, F, A, SJ, V and W — brief before any A388 rotation through this field (§13/§17).
- **Touch-and-go operations, low approaches and practice instrument approaches are NOT permitted on any runway** `[FAA AIP]`.
- **Bird activity is noted on and in the vicinity of the airport** `[FAA AIP]` — standard wildlife-hazard vigilance.
- Rare but sharp **winter ice-storm risk** — do not assume "no de-icing planning needed" simply because this is a Southeastern US field.
- **Closely-spaced parallel runways** (several pairs under 1,000 ft apart) — expect PRM/simultaneous-close-parallel procedures and strict runway-crossing readback discipline.
- **Read back ALL runway-holding instructions** — the FAA AIP explicitly flags this as a standing requirement at this field.
- RWY 10 carries a **type-specific CAT III restriction** for several common widebody/narrowbody types (CAT II authorised only with autopilot disconnected after touchdown) — verify against current AIRAC before planning a low-vis arrival to 10. 🟧

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **wingspan-based ground-movement restriction set** for Group VI-class aircraft (the K Global A388). 🟥
- **Crew-qualification gate:** No CAT II/III-specific crew-currency mandate found beyond standard company minima; confirm current CAT category by runway before planning a low-vis arrival — CAT category is only confirmed this pass for 08L and 09R, with 10 carrying a type-specific CAT III restriction. 🟧
- **Operating restrictions / bans:** Touch-and-go, low approaches and practice instrument approaches are prohibited on all runways `[FAA AIP]`; RWY 10 is not authorised for CAT III on several aircraft types (CAT II authorised only with autopilot disconnected after touchdown, per public network-sim corroboration — not independently AIP-confirmed this pass). 🟧
- **Overflight / entry / permits:** Standard US domestic/international Port of Entry; no special state permit required beyond normal US CBP/APIS procedures. 🟩
- **Operations notes:** ATCT — Atlanta Tower; TRACON — Atlanta Approach/Departure ("A80"); ARTCC — Atlanta Center (ZTL); airport operator — City of Atlanta Department of Aviation.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24, all months/all days/all hours `[FAA AIP AD 2.3]` | 🟩 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | **No flight-movement curfew found.** A landside **terminal-access restriction (23:00–04:30 local, ticketed passengers/authorised personnel only)** governs terminal building, parking and SkyTrain access — it is **not** an aircraft-movement curfew. Noise is managed through a Noise & Operations Monitoring System (NOMS) rather than a curfew regime. 🟧 (confirm no informal night flow restriction) | 🟧 |
| RFF category | FAA ARFF Index E; Class I certified 1 May 1973 `[FAA AIP AD 2.6]` | 🟩 |
| Fuel | 100, 100LL, Jet A confirmed available `[FAA AIP AD 2.4]`; specific into-plane supplier/hours not confirmed | 🟧 |
| PCN | Runway-specific, PCN 62–105 range — see §7 | 🟩 |
| Customs | Yes — international terminal/concourse; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Signature Aviation (general-aviation ramp, per public cross-check); airline/widebody handling agent not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08L | 9,000 × 150 ft | Rigid / PCN 105 R/B/W/T | 9,000 | 9,000 | 8,800 | 8,800 | Thr elev 1,014.6 ft |
| 26R | 9,000 × 150 ft | Rigid / PCN 105 R/B/W/T | 9,000 | 9,000 | 8,500 | 8,500 | Thr elev 990 ft |
| 08R | ~10,000 × 150 ft | Rigid / PCN 74 R/A/W/T | 9,999 | 10,999 | 9,999 | 9,999 | Thr elev 1,023.7 ft; TODA exceeds TORA (stopway/clearway) |
| 26L | ~10,000 × 150 ft | Rigid / PCN 74 R/A/W/T | 9,999 | 9,999 | 9,999 | 9,999 | Thr elev 995.4 ft |
| 09L | 12,390 × 150 ft | Rigid / PCN 62 R/A/W/T | 12,390 | 12,390 | 11,730 | 11,730 | **Longest runway**; thr elev 1,018.7 ft; intersection departure available from TWY M2, rwy remaining 11,440 ft TORA/TODA, 10,780 ft ASDA `[FAA AIP General Remarks]` |
| 27R | 12,390 × 150 ft | Rigid / PCN 62 R/A/W/T | 12,390 | 12,390 | 12,390 | 11,890 | Thr elev 977.2 ft; intersection departures from TWY LB (11,040 ft TORA/TODA, 12,140 ft ASDA) or TWY LC (10,810 ft TORA/TODA, 11,910 ft ASDA) during TWY W operations `[FAA AIP General Remarks]` |
| 09R | 9,000 × 150 ft | Rigid / PCN 68 R/A/W/T | 9,000 | 9,000 | 9,000 | 9,000 | Thr elev 1,026.1 ft |
| 27L | 9,000 × 150 ft | Rigid / PCN 68 R/A/W/T | 9,000 | 9,000 | 8,865 | 8,865 | Thr elev 984.7 ft |
| 10 | 9,000 × 150 ft | Rigid / PCN 74 R/A/W/T | 9,000 | 9,000 | 9,000 | 9,000 | Thr elev 1,000.3 ft; bridges Interstate 285; CAT III not authorised for several types (§5) |
| 28 | 9,000 × 150 ft | Rigid / PCN 74 R/A/W/T | 9,000 | 9,000 | 9,000 | 9,000 | Thr elev 997.5 ft |

*Source: FAA AIP, AD 2 Georgia — KATL, AD 2.12/2.13 (retrieved 2026-07-26). All distances in feet. Surface described as "rigid" per PCN pavement-type code (R); commonly described elsewhere as concrete. No wingspan >214 ft may pass another aircraft ≥225 ft wingspan on TWY L/M east of L7; aircraft with wingspans >214 ft are restricted to ≤15 mph on TWY A, L, M and SJ — see §13.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (arrival) | Atlanta D-ATIS (ARR) | 119.65 | H24 | `[FAA AIP AD 2.18]` |
| ATIS (departure) | Atlanta D-ATIS (DEP) | 125.55 | H24 | `[FAA AIP AD 2.18]` |
| Delivery | Atlanta Clearance Delivery / Pre-taxi (CD/P) | 118.1 | H24 | `[FAA AIP AD 2.18]` |
| Ground | Atlanta Ground (GND/P) | **121.9** (RWY 08L/26R, 08R/26L) · **121.75** (RWY 09L/27R, 09R/27L) · **121.65** (RWY 10/28) | H24 | Config-specific — take the frequency assigned by the departure/arrival runway `[FAA AIP AD 2.18]` |
| Tower | Atlanta Tower (LCL/P) | **119.1** (RWY 08L/26R) · **125.325** (RWY 08R/26L) · **123.85** (RWY 09L/27R) · **119.3** (RWY 09R/27L) · **119.5** (RWY 10/28) | H24 | Config-specific — take the assigned frequency `[FAA AIP AD 2.18]` |
| PRM | Precision Runway Monitor | 132.55 (RWY 09L/27R, 09R/27L) · 133.425 (RWY 10/28) | H24 | Simultaneous close-parallel approach monitoring `[FAA AIP AD 2.18]` |
| Approach / Departure | Atlanta Approach/Departure ("A80" TRACON) | Sector-specific — not individually confirmed from a primary table this pass 🟧 | H24 | One of the largest/busiest US TRACONs, sectorized Atlanta/Macon/Columbus/Athens; tier-4 cross-check suggests approach frequencies in the 127–128 MHz range, not independently corroborated |
| Centre / FIR | Atlanta ARTCC (ZTL) | Per current AIRAC | H24 | See [North America airspace brief](../../../../airspace/north-america.md) — no dedicated OM C FIR brief exists yet for ZTL |
| Emergency | — | 121.5 / 243.0 (UHF) | — | `[FAA AIP AD 2.18]` |

*Source: FAA AIP, AD 2 Georgia — KATL, AD 2.18 (retrieved 2026-07-26). Ramp-control frequencies (multiple, by ramp zone, incl. dedicated snow/ice channels) are published but are ground-handling/company frequencies, not ATC — not reproduced here.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/DME 08L | HFW | 109.3 | H24 | CAT II/III confirmed |
| ILS/DME 08R | ATL | 109.9 | H24 | CAT category not independently confirmed 🟧 |
| ILS/DME 09L | HZK | 110.5 | H24 | CAT category not independently confirmed 🟧 |
| ILS/DME 09R | FUN | 108.9 | H24 | CAT II/III confirmed |
| ILS/DME 10 | OMO | 111.55 | H24 | CAT II/III equipped; CAT III not authorised for several types — see §5 🟧 |
| ILS/DME 26L | BRU | 108.7 | H24 | CAT category not independently confirmed 🟧 |
| ILS/DME 26R | GXZ | 110.1 | H24 | CAT category not independently confirmed 🟧 |
| ILS/DME 27L | FSQ | 108.5 | H24 | CAT category not independently confirmed 🟧 |
| ILS 27R | AFA | 111.3 | H24 | No collocated DME published; CAT category not independently confirmed 🟧 |
| ILS/DME 28 | PKU | 111.75 | H24 | CAT category not independently confirmed 🟧 |

*Source: FAA AIP AD 2 Georgia — KATL, AD 2.19 (idents/coordinates, retrieved 2026-07-26); frequencies cross-checked against the FAA Chart Supplement (Georgia section, aeronav.faa.gov), retrieved 2026-07-26. Full ILS/DME coverage exists on all ten runway ends — an unusually complete instrument-approach infrastructure reflecting the field's traffic volume.*

---

## 10. Arrival

- **Transition altitude / level:** TA is the US-wide fixed **18,000 ft MSL** (not field-specific, per FAA convention); TL assigned by ATC per current altimeter setting.
- **Speed:** 250 KIAS below 10,000 ft MSL (14 CFR 91.117, US-wide); tier-4 network-sim corroboration suggests ~210 kt on downwind and no less than 180 kt to the final approach fix, ATC permitting — not independently AIP-confirmed. 🟧
- **Preferential runway logic:** Published preferential-use logic favours **08L/26R and 09R/27L for arrivals**; **08R/26L and 09L/27R primarily for departures**; RWY 10/28 assigned per traffic flow `[FAA AIP General Remarks]`.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 08L | ILS/DME (HFW) | CAT II/III confirmed |
| 08R | ILS/DME (ATL) | CAT category not confirmed 🟧 |
| 09L | ILS/DME (HZK) | CAT category not confirmed 🟧 |
| 09R | ILS/DME (FUN) | CAT II/III confirmed |
| 10 | ILS/DME (OMO) | CAT III not authorised for several types — verify current chart 🟧 |
| 26L | ILS/DME (BRU) | CAT category not confirmed 🟧 |
| 26R | ILS/DME (GXZ) | CAT category not confirmed 🟧 |
| 27L | ILS/DME (FSQ) | CAT category not confirmed 🟧 |
| 27R | ILS (AFA) | No collocated DME published |
| 28 | ILS/DME (PKU) | CAT category not confirmed 🟧 |

- **STARs (names only):** Publicly-indexed RNAV STARs include **GNDLF, SITTH** (south/east-flow arrivals) and **HOBBT, JJEDI** (west-flow arrivals) — reported at 8 RNAV plus 3 non-RNAV STARs network-wide; not independently FAA-source-confirmed this pass — pull the current-AIRAC STAR list at planning. 🟧 Non-RNAV-capable aircraft are vectored to conform to the same STAR track.
- **LVP:** Exact RVR/trigger conditions not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (rolling, low terrain) — the operative missed-approach concern is re-sequencing back into a very high-density, closely-spaced-parallel TRACON environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Publicly-indexed RNAV departures include PENCL, PLMMR, VRSTY, POUNC, VARNM, JACCC, SMLTZ, KAJIN, PADGT, PHIIL, BANNG, NASSA, SMKEY, GAIRY, HAALO and CUTTN, with a non-RNAV "ATL1" departure (radar vectors to the first fix) for aircraft that cannot fly an RNAV SID — verify the current-AIRAC list before use. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify per-SID gradient/equipage on the current chart. 🟧
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Normally at pilot/company discretion; a Ground Metering Program may be applied at high-traffic times (advised via the departure ATIS).
- **ATC slot / CTOT & clearance:** No formal IATA slot-coordination scheme found in reachable public sources; ATFM/ground-delay and EDCT-style programs are commonly applied in convective-weather periods given the field's traffic volume. 🟧
- **De-icing:** Available; season roughly **November–March** with occasional severe events (§3.4/§14); specific pad locations and holdover provisioning not confirmed this pass. 🟧 See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** A **Noise & Operations Monitoring System (NOMS)** programme is in effect `[FAA AIP]`; this is a noise-monitoring/complaint-management programme rather than a mandated SID-level noise-abatement routing — specific noise-preferential routing by SID not confirmed this pass. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧 No formal flight curfew exists (§6).
- **Engine run-up restrictions:** Run-ups are permitted only at designated/coordinated sites; coordinate movement-area and non-movement-area run-up use with airport operations `[FAA AIP]`.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Two-terminal, seven-concourse layout — Domestic Terminal (Concourses T, A, B, C, D) and the Maynard H. Jackson Jr. International Terminal (Concourses E and F), all linked by an underground automated people-mover ("the Plane Train") and moving-walkway concourse. **Concourse F carries the field's Group VI-capable gate(s)**, able to accept A380-class aircraft — the relevant cluster for the K Global A388; specific K Global gate/stand assignment is not confirmed via VAMSYS this pass. 🟧 | 🟧
- **Push-back:** Normally pilot/company discretion; mandatory-vs-self-manoeuvre policy for Code F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground on the day; the field publishes standard coded taxi-route phraseology (name/existence only, not reproduced here).
- **Hot spots / tight taxiways:** 🟥 Publicly-indexed FAA hot spots include taxiway junctions at **TWY C/D and RWY 08L-26R**, and **TWY C/D and RWY 08R-26L** — exact current wording not independently re-verified against the primary Chart Supplement PDF this pass 🟧. In addition, extensive **wingspan-based restrictions** apply: **TWY V** (wingspan >171 ft restricted), **TWY W** (wingspan >171 ft and/or tail height >45 ft restricted), **TWY F** east of Ramp 5N/west of TWY D (Group VI, wingspan >214 ft, restricted), and **mandatory taxiway-centerline adherence on TWY L/M, E/F and SC/SJ** (between SG and R) whenever an aircraft with wingspan >214 ft is present on the field — all directly relevant to the K Global A388 `[FAA AIP General Remarks]`.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical climate typical of the Georgia Piedmont; prevailing operational wind pattern not independently sourced this pass, though the published preferential-runway logic (§10/§11) implies a stable typical orientation.
- **Seasonal hazards:** A rare but real **winter ice-storm risk** — the January 2014 regional ice event is the notable modern example, paralysing metro Atlanta ground transport and forcing widespread flight cancellations; this is a Southeastern US field with comparatively limited routine exposure to large-scale winter operations relative to a northern hub. Summer afternoons bring the standard Southeastern US **convective/thunderstorm** risk, the more frequent seasonal driver of ground-delay/flow programs given this field's traffic volume.
- **Local effects:** No terrain-driven local effect — the field sits on gently rolling, low terrain.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the wingspan-restricted taxiways in §13), navaid U/S, CAT III equipment status (esp. RWY 10), lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNAV procedures, ground-delay/EDCT programs. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** within the North America network (non-base) `[VAMSYS mirror 2026-07-26]` — specific inbound pairing against the network's route register not independently confirmed this pass. 🟧
- **Nearest suitable alternates:** Company preferred alternates KCLT, KMEM, KBNA `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A confirmed available `[FAA AIP]`; specific into-plane supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (9,000–12,390 ft) non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- The **A388** (A380-family) is the K Global type most affected by this field's ground-movement environment: its ~262 ft wingspan exceeds every published restriction threshold (171 ft, 213 ft, 214 ft, 225 ft — §13), meaning taxi routing, passing and simultaneous-parallel-taxi restrictions apply on multiple named taxiways. Concourse F's Group VI-capable gate(s) are understood to be the only stands able to accept the type, though the specific K Global gate assignment is not confirmed via VAMSYS this pass. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM B — A388 Dispatch`](../../../../../fleet/a388/dispatch.md).
- No field-length or field-elevation performance penalty for any K Global type at KATL.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2015 epoch; current-day value not independently re-confirmed.
- **CAT II/III sub-category by runway** — confirmed only for RWY 08L and 09R; the remaining seven ILS-equipped runway ends not independently confirmed; RWY 10's type-specific CAT III restriction sourced to a network-sim document, not an AIP table.
- **SIDs/STARs (current names/full list)** — publicly-indexed names gathered this pass are not independently FAA-source-confirmed; pull the live current-AIRAC procedure list before use.
- **Approach/Departure (TRACON "A80") sector frequencies** — not confirmed from a primary table this pass; tier-4 cross-check only.
- **Take-off minima, RNP/gradient requirements, LVP trigger RVR values** — not confirmed in reachable sources.
- **Noise-abatement SID-level routing, night noise/dB limits, reverse-thrust/idle-reverse policy, engine run-up site list** — not confirmed in reachable sources.
- **Fuel supplier(s) and into-plane hours; ground handling agent for widebody/international operations** — not confirmed.
- **Customs/immigration desk hours** — not confirmed; Port of Entry status confirmed, hours are not.
- **FAA hot spot exact current wording** — gathered via a search-indexed summary of the FAA Chart Supplement hot-spot listing; the primary PDF could not be read directly this pass — re-verify wording against the current Chart Supplement.
- **K Global gate/stand assignment (esp. for the A388) and specific network route pairing into KATL** — not confirmed via VAMSYS this pass.
- **De-icing pad locations/provisioning** — availability assumed seasonally, exact infrastructure not confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3 — Aerodromes, AD 2 Georgia (KATL)** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_georgia.html (retrieved 2026-07-26). *ARP, elevation, mag var, runway physical characteristics, declared distances, approach/runway lighting, ATS communications frequencies, navaid idents/coordinates, RFF category, general remarks (wingspan restrictions, preferential runway use, touch-and-go prohibition, NOMS, bird activity).*
- FAA Chart Supplement — Georgia section (aeronav.faa.gov) — cross-check for ILS localizer frequencies against AD 2.19 idents (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/KATL/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Cross-check only; runway/frequency figures treated as tier-4.*
- Wikipedia — "Hartsfield–Jackson Atlanta International Airport" — https://en.wikipedia.org/wiki/Hartsfield%E2%80%93Jackson_Atlanta_International_Airport (retrieved 2026-07-26). *Historical/context: world's-busiest-airport ranking, runway history, terminal/concourse layout, Plane Train, Taxiway Victor end-around taxiway — non-airline-specific facts only.*
- vZTL (Virtual Atlanta ARTCC, VATSIM) — Pilot Guide, ATL — https://www.ztlartcc.org/pilots/guide/atl (retrieved 2026-07-26). **Network-sim SOP, not regulatory** — used to cross-check preferential-runway logic, ground-control frequency split, and standard speed/altitude practice against the FAA AIP; no discrepancy found against the primary AIP data used here.
- POSCON — Pilot Resources, KATL/ATL — https://forums.poscon.net/docs/pilots/nam/usa/katl/ (retrieved 2026-07-26). **Network-sim document, not regulatory** — cross-check for RWY 10 CAT III type restriction, LAHSO distances, cargo-ramp layout, closely-spaced-parallel-runway incursion-risk note; corroborates rather than conflicts with the FAA AIP.
- AJC / FOX 5 Atlanta — reporting on the 2026 landside terminal-access restriction (23:00–04:30) — used only to distinguish this from an aircraft-movement curfew, not cited as an operational source.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
