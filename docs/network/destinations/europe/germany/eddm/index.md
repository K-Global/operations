# EDDM — Munich (Franz Josef Strauß) · Airport Briefing

**EDDM / MUC** · Freising, Bavaria, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft — provisional (DFS eAIP not directly reachable; built from cross-checked public sources)

> **Read-me:** Planning aid, not a chart. The **DFS eAIP** (Germany's official AIP) could not be fetched directly (JavaScript-rendered/blocked to a raw pull) — core data below is cross-checked across OpenNav's AD-2 chart index, OurAirports/SkyVector, Wikipedia and the VATSIM Germany knowledgebase (operational SOPs are explicitly sourced from AIP text where quoted). Treat AIP-specific figures (PCN, RFF category, exact declared distances, mag var) as **provisional** — see §18. Approaches/SIDs/STARs by **name only** — fly the charted current-AIRAC version. Live weather/NOTAMs pulled at planning (§14/§15). Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N48°21′13.7″ / E011°47′09.9″ (48.35380, 11.78610) `[OpenNav / OurAirports, cross-checked]` |
| Field elevation | **1,487 ft / 453 m** MSL |
| Mag variation | Not confirmed in reachable sources — verify 🟧 |
| Time zone | UTC +1 (CET) / UTC +2 (CEST, EU DST) |
| Runway(s) | 08L/26R & 08R/26L — each **4,000 m × 60 m**, concrete, widely spaced (fully **independent** parallel pair, not closely-spaced) |
| Preferential runway | Direction-of-flight split: **"Northern Runway" 08L/26R** generally for north-bound traffic, **"Southern Runway" 08R/26L** for south-bound traffic; cargo-apron departures default south for shorter taxi 🟧 |
| Longest LDA | Not confirmed exact (physical 4,000 m each; full-length TORA/TODA/ASDA/LDA not individually published in reachable sources) 🟧 |
| Approaches | **ILS CAT II & III** on **all four runway ends** (08L/08R/26L/26R), plus NDB and RNAV(GPS) on all four |
| RFF category | Not confirmed in reachable sources 🟧 — major long-haul/A380-hosting hub implies a high category (CAT 9/10) |
| Control type | **Radar** (München Radar/Approach, Director; Langen ACC en route) |
| Elevation class | Moderate (1,487 ft) — **not** hot-and-high; not a performance driver |
| Special-airport status | **Slot-coordinated (Level 3)** + **PPR** for non-scheduled/business aviation; **High-Intensity Runway Operations (HIRO)** procedure in effect for max throughput — see §5 |
| Customs / PoE | **Yes** — CIQ, Schengen/Non-Schengen segregated by terminal; hours not confirmed 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Bavarian plain at the field; Alps rise ~50–60 NM south, well outside the standard TMA corridors. Low CFIT exposure. |
| Runway length vs fleet perf | 🟩 | 4,000 m each — ample for any type in our fleet even hot/heavy; non-limiting. |
| Approach availability / minima | 🟩 | ILS CAT II/III confirmed on all four runway ends; per VATSIM SOP citing AIP, **ILS is approved to CAT IIIb on all runways.** Minima per current AIRAC. |
| Airspace / traffic / control | 🟧 | Radar-controlled major European hub; widely-spaced independent parallel runways (not a closely-spaced pair); HIRO intersection-departure procedures compress runway occupancy — verify current procedure status. |
| Weather / seasonal hazard | 🟧 | Humid continental climate; summer thunderstorms, winter snow, and Alpine **Föhn wind** events causing rapid temperature/wind shifts. |
| Curfew / slots / hours | 🟧 | Slot-coordinated (Level 3) + PPR; structured **night-noise regime** with a core no-movement window and a bonus-list-only fringe — exact current boundary times/caps not confirmed from a primary source, see §12/§18. |
| RFF category vs our types | 🟧 | Not confirmed — see §1. |
| Fuel availability | 🟩 | Jet A-1 confirmed on field; hours not confirmed 🟧. |
| Customs / handling / security | 🟩 | CIQ available, Schengen/Non-Schengen terminal segregation; full major-hub handling. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
Munich Airport sits on the flat Bavarian plain at **1,487 ft**, roughly 28 km NE of the city, surrounded by agricultural land with no close-in high ground. The northern edge of the **Alps** begins approximately 50–60 NM to the south — well outside the standard TMA arrival/departure corridors, but relevant to regional diversion planning, mountain-wave/turbulence potential on strong southerly flow days, and the Föhn-wind effect (see §3.4). CFIT exposure at the field itself is low; read the current MRVA/MSA data on the area chart for any south-bound routing.

### 3.2 Airborne conflict / traffic  🟧
Munich is one of Europe's largest hub airports — **radar-controlled** (München Radar/Approach with dedicated Feeder positions, Langen ACC en route) — operating **two widely-spaced, fully independent parallel runways** (the "Northern Runway" 08L/26R and "Southern Runway" 08R/26L). Unlike a closely-spaced pair, both runways can be worked simultaneously without the capacity constraint seen at tightly-spaced fields. Traffic flow is generally split by direction of flight (north-bound via the northern runway, south-bound via the southern runway); cargo-apron traffic is normally routed to the southern runway to minimise taxi distance. **High-Intensity Runway Operations (HIRO, AD 2 EDDM §3.2.3)** require prompt compliance with taxi/take-off clearances at published intersections to sustain maximum throughput — expect intersection departures to be assigned without prior pilot request. Cross-ref <../../../../Airspace/FIR/Europe/Langen (EDGG).md> when built.

### 3.3 Runway excursion  🟧
On 3 November 2011 a widebody twin veered off runway 08R shortly after touchdown during an autoland in CAT I conditions: an **ILS localizer signal disturbance caused by a departing aircraft** produced a late flight-path deviation, and the automatic go-around was inhibited once the deviation persisted past main-gear runway contact; the crew did not disconnect the autopilot or set thrust manually, and the aircraft crossed the runway before stopping on the adjacent grass (no injuries; German BFU investigation). **Take-away: maintain a firm go-around trigger on autoland if a late-stage deviation appears, particularly with traffic departing the parallel runway during your approach.** Both runways are 4,000 m — long enough that reverse thrust is rarely required by design (reducing runway-contamination/reverse-related excursion risk), at the cost of longer taxi-in distances (reflected in the 16-minute taxi-in planning figure).

### 3.4 Weather threat  🟧
Humid continental climate (Köppen **Dfb**): warm, humid summers with **frequent thunderstorms**; cold winters with **frequent snowfall and persistent snow cover** driving significant de-icing demand. The field's proximity to the Alps means high precipitation, and rainstorms can arrive violently and with little warning. A warm, dry **Föhn wind** off the Alps can change the temperature completely within a few hours, even in winter — monitor the TAF trend group closely rather than relying on a static forecast. See §14.

### 3.5 Operational considerations  🟧
Munich is **slot-coordinated (Level 3)** with **PPR** additionally required for non-scheduled/business aviation. The field enforces a structured **night-noise regime** (§12) with a hard core no-movement window, a bonus-list-only fringe, and (per secondary reporting) a per-night scheduled-movement cap — confirm exact current figures against the AIP/NfL before planning a late/early rotation. **CAT II/III currency** is required to exploit the field's full LVP capability. Winter de-icing throughput and the night-noise window are the two recurring planning constraints for a Munich rotation, not runway length or terrain.

---

## 4. Cautions & Warnings

- An **ILS localizer signal disturbance from a departing aircraft** contributed to a 2011 CAT-I autoland runway excursion on 08R — maintain a firm go-around trigger on any late-stage autoland deviation.
- **Night-noise regime**: reported core no-movement window **00:00–05:00** (emergency/government only), with **bonus-list-only** operations 22:00–24:00 and 05:00–06:00, and a reported ~28-movement/night cap on scheduled+charter traffic — verify exact current figures against AIP/NfL. 🟧
- Only **ICAO Annex 16 Chapter 3**-compliant aircraft are permitted at night; individual noise level must not exceed ~75 dB(A) average at the fixed monitoring points ("Munich List") for bonus-list eligibility.
- **WTC H/J** departures off RWY 26L via OTT require noise-protection **"W"-suffix SIDs** between 2200–0600 local.
- **B747-class** departures are barred from the northern runway (08L/26R) 2200–0600 (southern runway only) — not applicable to the current K Global fleet but a genuine type-specific rule.
- Both runways are 4,000 m — reverse thrust is rarely required, but **taxi times run long**; budget the 20-min taxi-out / 16-min taxi-in planning figures.
- **Winter operations**: frequent snowfall and persistent snow cover — confirm de-icing pad assignment and runway/taxiway friction reports before a winter rotation.
- **Föhn wind** can produce rapid, unexpected temperature/wind shifts even in winter — brief the TAF trend group.
- A proposed **third runway** remains politically suspended (since 2020) — only two runways exist; do not assume future capacity relief.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a "special airport" in reachable sources; **slot-coordinated (Level 3)** with **PPR** additionally required for non-scheduled/business aviation. 🟧
- **Crew-qualification gate:** CAT II/III currency required to exploit full LVP capability (ILS approved to CAT IIIb on all four runway ends per VATSIM SOP citing AIP); no other special crew gate found in reachable sources. 🟧
- **Operating restrictions / bans:** Night-noise regime per §12; WTC H/J via OTT require "W"-suffix SIDs 2200–0600; B747-class barred from the northern runway at night; engine run-ups after 23:00 require ATC approval. No RNP AR ban or circling-not-authorised note found — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Schengen/Non-Schengen segregation by terminal (CIQ available); PPR required in addition to slot for non-scheduled/business aviation.
- **Operations notes:** Regulator — DFS (Deutsche Flugsicherung); Airport operator — Flughafen München GmbH; FIR — **Langen (EDGG)** en route, München TMA/Radar locally.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (assumed — major hub scale; not explicitly confirmed) | 🟧 |
| AD operating hours | H24 (assumed) | 🟧 |
| Night / curfew restrictions | 22:00–06:00 regime, core no-movement window 00:00–05:00 — see §12 | 🟧 |
| RFF category | Not confirmed in reachable sources | 🟧 |
| Fuel | Jet A-1 confirmed on field; hours not confirmed | 🟧 |
| PCN | Not published in reachable sources | 🟧 |
| Customs | CIQ available, Schengen/Non-Schengen segregated; hours not confirmed | 🟧 |
| Handling / FBO | Full major-hub handling; business-aviation FBOs present on field | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface | Full-length TORA (Heavy+) | Notes |
|---|---|---|---|---|
| 08L | 4,000 × 60 m | Concrete | 4,000 m (holding points A1/A2) | "Northern Runway." ILS CAT II/III, NDB, RNAV(GPS). Reduced intersection TORA: Medium Jet A3 3,800 m, Light Jet A4 2,820 m, Turboprop A6 2,200 m |
| 26R | 4,000 × 60 m | Concrete | 4,000 m (holding points A14/A15) | Opposite direction of 08L. ILS CAT II/III, NDB, RNAV(GPS) |
| 08R | 4,000 × 60 m | Concrete | 4,000 m (holding points B1/B2) | "Southern Runway." ILS CAT II/III, NDB, RNAV(GPS). Reduced intersection TORA: Medium Jet B3 3,800 m, Light Jet B4 2,840 m, Turboprop B6 2,220 m |
| 26L | 4,000 × 60 m | Concrete | 4,000 m (holding points B14/B15) | Opposite direction of 08R. ILS CAT II/III, NDB, RNAV(GPS). Reduced intersection TORA: Light Jet B12 2,820 m, Turboprop B10 2,200 m |

*Full-length TODA/ASDA/LDA per direction and PCN are **not individually confirmed** from reachable public sources — treat physical length (4,000 m) as the reference and verify exact declared distances/PCN against DFS AIP AD 2 EDDM. Intersection TORA figures corroborated via the VATSIM Germany FIR München SOP, which cites the AIP as its source (tier-4 corroboration, not primary) — reconfirm before relying on an intersection departure. All distances metric.* 🟧

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | München ATIS | 123.130 | H24 (assumed) | |
| Delivery | München Delivery | 121.730 | H24 (assumed) | Issues combined enroute + start-up clearance |
| Ground | München Ground North / South | 121.980 / 121.830 | H24 (assumed) | Split by runway side; single legacy freq 119.405 also listed by one source 🟧 |
| Apron | Vorfeld 1 / 2 / 3 | 121.780 / 121.710 / 121.930 | H24 (assumed) | Pushback always via Apron, not included in start-up clearance |
| De-icing coordinator | — | 121.990 | Seasonal | |
| Tower | München Tower North / South | 118.705 / 120.505 | H24 (assumed) | CTR split N/S at the tower when both positions staffed |
| Director / Approach | München Director / Radar | 118.825 (Director); 131.225 (local radar); 120.775 (arrival) | H24 (assumed) | Post-SID departure hand-off ~123.905 (north) / 127.955 (south) 🟧 |
| Centre / FIR | Langen Radar (ACC) | 123.900 | H24 | |

*Frequencies cross-checked between OurAirports and the VATSIM Germany knowledgebase (network-sim, corroboration only — see the source register); hours assumed H24 given the airport's hub scale but not independently confirmed. Emergency 121.5.* 🟧

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | MUN | Not confirmed 🟧 | H24 (assumed) | On field, München |
| NDB | MIQ | Not confirmed 🟧 | H24 (assumed) | "Mike" — used in SID/STAR naming |
| VOR/DME | IGL | Not confirmed 🟧 | H24 (assumed) | Ingolstadt, enroute |
| ILS localizers | MNE / MNW / MSE / MSW | Not confirmed 🟧 | H24 (assumed) | On-field idents per chart index; mapping to specific runway end and exact frequency not confirmed from reachable sources — verify current AIRAC |

*Navaid idents identified via OpenNav's waypoint/navaid index for EDDM; frequencies and exact runway-end mapping are **not confirmed** from any reachable public source — this is a genuine gap, verify against DFS AIP AD 2 EDDM before use.* 🟧

---

## 10. Arrival

- **Transition altitude / level:** **5,000 ft** (Germany-standard TA); initial climb clearance out of Munich is always **"climb via SID to FL070."** Verify no local override on current chart.
- **Speed:** 250 KIAS < FL100 (standard), plus TMA-specific restrictions per chart.
- **Preferential runway logic:** Direction-of-flight split — north-bound traffic generally routed to the northern runway (08L/26R), south-bound to the southern runway (08R/26L); both can run independently and simultaneously (not wind-limited the way a single-runway field is, though the physical direction 08 vs 26 in use is wind-dependent).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 08L | ILS CAT II/III, NDB, RNAV (GPS) | Northern runway |
| 26R | ILS CAT II/III, NDB, RNAV (GPS) | Northern runway |
| 08R | ILS CAT II/III, NDB, RNAV (GPS) | Southern runway |
| 26L | ILS CAT II/III, NDB, RNAV (GPS) | Southern runway |

- **STARs / transitions (names only):** Clearance-limit fixes **BETOS, NAPSA, LANDU, ROKIL** depending on inbound direction; RNAV transitions are flown from these fixes.
- **FMC/RNAV transition caution:** Per VATSIM Germany operational guidance, many FMC implementations mis-sequence the RNAV transition at Munich — the transition should start at the **next-to-last** STAR waypoint, but some FMCs append it after the STAR's final waypoint instead, causing an unwanted fly-to-and-back. Compare the FMC waypoint list against the published arrival chart and remove the redundant STAR endpoint if needed. 🟧 (procedural caution, not an AIP figure — verify against your own FMS/aircraft type behaviour)
- **LVP:** ILS approved to **CAT IIIb** on all four runway ends per VATSIM SOP citing AIP — confirm current status/NOTAM before relying on it.
- **Missed approach watch-items:** No significant close-in terrain; the primary missed-approach workload driver is traffic density/HIRO sequencing, not terrain.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Waypoint-named SID families incl. **ALG (Allgäu), BIBAG, KIRDI, MERSI, MIQ (Mike), OBAXA, ROTAX, TULSI, TURBU, VAVOR** — each with runway-specific numeric/letter designators (e.g. 2Q/2E/3S/4N).
- **RNP / climb-gradient requirements:** Initial climb clearance is always **"climb via SID to FL070"** regardless of runway. WTC H/J departures off 26L via OTT require noise-protection **"W"-suffix** SIDs between 2200–0600 local. No unusual (hot-and-high style) gradient requirement — field is not elevation-limited.
- **Take-off minima:** Not confirmed in reachable sources — verify current AIRAC. 🟧
- **Start-up / push-back:** München Delivery issues a **combined enroute + start-up clearance**; pushback is coordinated **separately with Apron** (not included in the start-up clearance). Colour-coded taxi lines (blue/orange) support guided simultaneous pushback for medium aircraft; "swingover" manoeuvres between adjacent taxiways are used to optimise flow.
- **ATC slot / CTOT & clearance:** Slot-coordinated (Level 3) + PPR for non-scheduled/business aviation.
- **De-icing:** Dedicated de-icing coordinator frequency (121.990); significant winter demand given the snow climatology — confirm pad assignment on the day.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Noise-protection **"W"-suffix SIDs** required for WTC H/J departures off 26L via OTT, 2200–0600 local. Airport charges are linked to aircraft noise level, monitored via **16 fixed noise-monitoring stations** around the field (per airport literature — not independently verified here). 🟧
- **Night noise / dB limits:** Reported core no-movement window **00:00–05:00**; **bonus-list-only** movements 22:00–24:00 and 05:00–06:00 for ICAO Annex 16 Chapter 3-compliant aircraft with individual noise ≤ ~75 dB(A) average at the monitoring points ("Munich List"); a per-night scheduled+charter movement cap (~28) has been reported — **verify exact current figures against AIP/NfL before planning a night rotation.** 🟧
- **Engine run-up restrictions:** Engine test runs after 23:00 require prior ATC approval.
- **Reverse thrust / idle-reverse policy:** Both runways were built to 4,000 m specifically to reduce the need for thrust reversal on landing — treat idle/minimal reverse as the local norm and brief accordingly for noise.

---

## 13. Ground operations

- **Stands for our types:** **Terminal 1** — non-hub-carrier airlines (stands 101–109 currently under construction/not assigned; stands 118–121 reserved for flights with elevated security requirements). **Terminal 2** and its satellite — the dominant hub carrier and alliance partners, including widebody parking; medium-body types intermixed with widebodies or at satellite stands 243–256. **Cargo apron** — stands 901–907, all widebody-capable; cargo traffic is normally routed to depart the southern runway (08R/26L) to minimise taxi distance. **General aviation** — apron 13 (positions G11–G26) and aprons 7/8. 🟩
- **Push-back:** Coordinated with **Apron**, separate from the start-up clearance. Colour-coded (blue/orange) taxi lines are used for guided pushback of medium aircraft, allowing multiple simultaneous pushbacks; pushback may be issued facing away from the departure runway with an expected U-turn.
- **Standard taxi routes:** Two-phase taxi — first to a numbered **entry** (N1–N4 north, on bridges; S1–S8 south), then handed to Ground for the remainder to the runway.
- **Hot spots / tight taxiways:** Colour-coded (orange/blue) restricted lines exist on taxiways W1, C3, E1, D3, D6 and E3, with wingspan-banded limits (30 m / 36 m / 52 m / 65 m / 80 m / >80 m classes) — confirm eligibility before using a colour-coded line for taxi/pushback.
- **Follow-me:** Not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid continental climate (Köppen **Dfb**) — variable weather patterns, large seasonal temperature range.
- **Seasonal hazards:** **Summer** — warm, humid, with frequent thunderstorms and sometimes violent, fast-developing rainstorms. **Winter** — frequent snowfall and persistent snow cover, driving significant de-icing demand. Year-round — Alpine **Föhn wind** events can shift temperature and wind rapidly within a few hours.
- **Local effects:** Proximity to the northern Alps raises precipitation and can produce mountain-wave/turbulence effects on strong southerly-flow days; monitor regional SIGMET activity.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: current ILS/CAT status on all four runway ends, runway/taxiway closures (esp. HIRO intersection availability), night-noise/bonus-list NOTAMs, de-icing pad status, GPS/RAIM for RNAV SIDs/transitions, third-runway project status (context only, no impact expected). Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — EDDM's own K Global-preferred alternates are **EDDF, LSZH, EDDS**; taxi-in 16 min / taxi-out 20 min `[VAMSYS mirror 2026-07-25]the section templates_Sources.md`, not a primary citation; flagged where used.*
- SKYbrary — Munich Airport (EDDM) — https://skybrary.aero/airports/eddm (retrieved 2026-07-25). *Climatology (Köppen Dfb), runway table cross-check, accident index.*
- SKYbrary — "B773, Munich Germany, 2011" — https://skybrary.aero/accidents-and-incidents/b773-munich-germany-2011 (retrieved 2026-07-25). *BFU-investigated runway excursion on RWY 08R following an ILS localizer signal disturbance during a CAT I autoland — TEM §3.3 source.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-14 | Baseline stub — position/elevation seeded from Navigraph navdata; destination status, base flag, taxi times, category and alternates pending VAMSYS reconciliation. |
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS. Full 18-section rebuild: DFS eAIP unreachable (JS-rendered) — cross-checked OpenNav/OurAirports/Wikipedia/SKYbrary/VATSIM Germany knowledgebase instead. Confirmed ILS CAT II/III (CAT IIIb per SOP citing AIP) on all four runway ends; independent (not closely-spaced) parallel-runway geometry; HIRO high-throughput procedure; night-noise regime (core 00:00–05:00 + bonus-list fringe); 2011 BFU-investigated runway-excursion case built into TEM §3.3. K Global fields applied: Category L, Base no, preferred alternates EDDF/LSZH/EDDS, taxi-in 16 min / taxi-out 20 min. RFF category, PCN, mag variation, exact declared distances beyond intersection TORA, and exact night-regime figures remain open 🟧 items per §18. Folded to 4-page pack 2026-07-25 — Dispatch, Departure and Arrival pages split out into `EDDM — Munich/`; this Briefing's content otherwise unchanged; relative links re-based one level deeper. |
