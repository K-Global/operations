# VABB — Chhatrapati Shivaji Maharaj International · Airport Briefing

**VABB / BOM** · Mumbai, Maharashtra, India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AAI eAIP India (AD 2 VABB) and the AERA regulatory technical record, cross-checked against public tier-4 sources; approaches/SIDs/STARs are listed **by name/category only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 19°05′30″N / 072°51′58″E (328.97°/368.7 m from the runway intersection) `[AAI eAIP AD 2.2 VABB]` — cross-checked 19.0887/72.8679 (OurAirports/SkyVector, minor rounding difference, see §18) |
| Field elevation | **40 ft / 12.2 m AMSL** (reference temperature 34.6°C) `[AAI eAIP AD 2.2 VABB]`; tier-4 sources commonly show 39 ft |
| Mag variation | 🟧 **0.75° W (2010 epoch), annual change 0.0333° E** `[AAI eAIP AD 2.2 VABB]` — dated to a 2010 baseline within a mirrored 2023-cycle eAIP page; extrapolated to near-zero/low westerly today. A tier-4 source separately states 001° W — treat exact current-day value as unconfirmed pending a live-AIRAC cross-check |
| Time zone | **UTC+5:30 (IST)** — no daylight-saving observed |
| Runway(s) | **09/27** 3,448 × 60 m (main, intersecting) · **14/32** 2,871 × 45 m (secondary, crossing) — the two runways **physically intersect** south of the terminal buildings `[AERA CSMIA Stakeholder Consultation 2025; AAI eAIP AD 2.2]` |
| Preferential runway | **09/27 is the primary/default runway**; single-runway-at-a-time operating policy in force since mid-2013 (see §3.5/§5) — 14/32 used only when 09/27 is unavailable |
| Longest LDA | ≈3,308 m (RWY 09, displaced-threshold-adjusted) / ≈2,965 m (RWY 27) — computed from published displaced thresholds, **not a primary declared-distance table figure this pass** 🟧 (see §7) |
| Approaches | **ILS CAT I (RWY 09)**, **ILS CAT II (RWY 27)**, **ILS CAT I (RWY 14)**, **no ILS / simple approach only (RWY 32)** `[AERA CSMIA Stakeholder Consultation 2025]` — 🟧 this contradicts a commonly assumed "CAT III on 27" figure; not corroborated from a primary AIP minima table this pass, treat AERA's CAT II figure as the best-available official statement pending direct AD 2 AIP confirmation |
| RFF category | **CAT 10** (within ATS hours) `[AAI eAIP AD 2.6; AERA]` 🟩 |
| Control type | **Radar** — Mumbai Approach/Radar (ASR + SMR on field); **Mumbai ACC / Mumbai FIR (VABF)** en route — see [Asia airspace general brief](../../../../airspace/asia.md) |
| Elevation class | Near sea-level (40 ft), coastal/flat — **not** hot-and-high; the defining performance/reliability drivers are the **intersecting-runway single-effective-runway capacity ceiling** and the **SW monsoon** |
| Special-airport status | 🟥 **Intersecting-runway pair operated as a single-runway-at-a-time airfield** — one of the busiest capacity-constrained airports in the world on this basis (surpassed London Gatwick in March 2017 as the "world's busiest single-runway airport"); dense close-in urban obstacle environment (see §3.1/§18) |
| Customs / PoE | **Yes — Terminal 2 only** (all international traffic); CISF security H24; exact immigration desk hours not independently confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **VAPO, VAAH** (Pune, Ahmedabad) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Coastal/flat, no mountainous terrain, but the AIP obstacle register lists a dense field of buildings/trees (up to ~220 ft) within the RWY 09/27 approach/take-off surfaces, plus a lit ~1,018 ft TV mast and isolated hill obstacle further out — a genuine close-in obstacle environment rather than a classic CFIT threat. |
| Runway length vs fleet perf | 🟩 (09/27) / 🟧 (14/32) | 09/27 (3,448 m) is ample for any K Global widebody. 14/32 (2,871 m) is shorter, has smaller published RESAs than ICAO-recommended, and is the fallback runway only — treat as more limiting, especially wet/contaminated. |
| Approach availability / minima | 🟧 | ILS CAT II on 27 only; CAT I on 09/14; RWY 32 has no ILS. Lower low-visibility capability than a "CAT III hub" assumption — verify current AIRAC minima before planning low-vis ops. |
| Airspace / traffic / control | 🟥 | Very high density; effectively single-runway capacity (~44 ATMs/hr per the regulator) against ~900+ average daily movements — a structurally congested, radar-controlled terminal area. |
| Weather / seasonal hazard | 🟥 | SW monsoon (Jun–Sep) brings heavy rain, reduced visibility and waterlogging risk; occasional Arabian Sea cyclone systems (e.g. Cyclone Tauktae, May 2021) have forced multi-hour closures. |
| Curfew / slots / hours | 🟩 | No hard night curfew found — ATS/fuelling/handling/security are H24; only the aerodrome operator's administrative office keeps restricted hours. Formal IATA slot-coordination level not independently confirmed 🟧. |
| RFF category vs our types | 🟩 | CAT 10 — above any K Global fleet requirement. |
| Fuel availability | 🟩 | Jet A-1 via the MAFFFL common-user hydrant system (MIAL/IOCL/BPCL/HPCL joint venture); H24, primary-sourced storage/dispenser figures (§7 of Dispatch page). |
| Customs / handling / security | 🟧 | PoE confirmed at Terminal 2 only; ground-handling market in transition following the 2025 termination of a major handler's security clearance (see §5/§13); exact immigration desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
VABB sits at 40 ft AMSL on the flat Mumbai coastal plain — there is no mountainous terrain relevant to arrival, departure or missed-approach paths, and this is **not** a classic CFIT field. However, the AIP's own AD 2.10 obstacle register is unusually dense for the RWY 09/27 approach/take-off surfaces: dozens of buildings, trees (many flagged as coconut palms) and electrical/antenna structures ranging roughly 35–220 ft, reflecting the airport's location amid dense Mumbai suburbs (Santacruz/Vile Parle/Kalina). Further out, the circling-area obstacle list includes buildings up to ~836 ft, an isolated "Hill" obstacle (~272 ft), and a **lit ~1,018 ft television mast (Doordarshan Tower)** — the tallest charted obstacle in the vicinity. Historically, the RWY 32 approach (Trombay Hill, ~4.5 NM from the threshold, with the Bhabha Atomic Research Centre nuclear complex at Anushakti Nagar underlying the flight path) was at one point subject to a no-fly restriction; current status is not independently reconfirmed this pass. **Fly the charted obstacle/MSA data — this is a low-level, obstacle-rich urban environment, not a high-terrain one.** 🟧

### 3.2 Airborne conflict / traffic 🟥
Mumbai is one of the busiest terminal areas in Asia (India's second-busiest airport by passengers, ~54–55 million pax/year and ~330,000 annual aircraft movements, averaging roughly 900+ movements/day). Because RWY 09/27 and RWY 14/32 **physically intersect** south of the terminal buildings, the field cannot run fully independent dual-runway operations: MIAL scrapped simultaneous cross-runway operations in mid-2013 after finding single-runway operation more efficient, and 14/32 is now used only when 09/27 is unavailable (maintenance, weather, emergency). This makes VABB, on a per-runway basis, one of the highest-density **single-effective-runway** airports in the world — it overtook London Gatwick in March 2017 as the busiest airport operating with only one runway at a time. Runway capacity is regulator-quoted at **44 ATMs/hour** (with historical peak records around 51/hour in 2014 and 1,007 movements in a single day in December 2018); expect sustained sequencing pressure, extended vectoring, and ATFM-style flow management, especially in poor weather. Mumbai Approach/Radar and Mumbai ACC (Mumbai FIR, **VABF**) provide radar service — cross-ref [Asia airspace general brief](../../../../airspace/asia.md).

### 3.3 Runway excursion 🟧
RWY 09/27 (3,448 × 60 m) is non-limiting for any K Global type. RWY 14/32 (2,871 × 45 m) is the shorter, narrower fallback runway with smaller published RESAs (14: 90 × 90 m; 32: 150 × 100 m — both below the ICAO-recommended 240 × 150 m) `[AERA CSMIA Stakeholder Consultation 2025]`; a Boeing 747-400 hydroplaned and sustained gear damage landing on 14/32 in 2005, and the runway's shorter length has been publicly noted as a constraint for wide-body or wet-runway operations. Both runway pairs carry displaced thresholds (approximate, tier-4-sourced, see §7) — confirm the exact usable LDA for the assigned runway/direction before committing to a landing, particularly on 14/32 in the monsoon season.

### 3.4 Weather threat 🟥
The **SW monsoon (June–September)** is VABB's signature weather hazard: Mumbai receives on the order of 2,500 mm of rainfall across this window, with July–August typically the wettest. Heavy rain, reduced visibility, gusty/crosswind conditions and runway/taxiway waterlogging routinely cut the achievable arrival/departure rate well below the field's already capacity-constrained baseline, cascading into network-wide delays; airport operations have publicly discussed pre-monsoon drainage and runway maintenance work (including scheduled multi-hour runway closures ahead of the monsoon, e.g. a reported 6-hour closure on 7 May 2026) to mitigate hydroplaning/waterlogging risk. Mumbai is not a primary landfall zone for Arabian Sea tropical cyclones, but has been directly affected — **Cyclone Tauktae (May 2021)** forced an approximately 11-hour full closure. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **intersecting-runway, single-runway-at-a-time policy** — this is a structural capacity ceiling (~44 ATMs/hr against sustained high demand), not an occasional flow restriction, so expect routine ATFM-style delay exposure even in good weather; (2) the **lower-than-assumed low-visibility capability** — CAT II (not CAT III) on RWY 27 only, per the best available official figure, meaning monsoon/fog-driven low-vis events can compress arrival rate further than a CAT III field would; and (3) an **evolving ground-handling market** — a major handler's security clearance was revoked and its Mumbai/Ahmedabad contracts terminated in May 2025, with other agents (AISATS, Bird Worldwide Flight Services, AIASL, Indo Thai Airport Management Services) onboarding staff/stations — confirm the current handler for any given operation (see §13).

---

## 4. Cautions & Warnings

- **RWY 09/27 and RWY 14/32 physically intersect** — the field cannot run true independent dual-runway operations; single-runway-at-a-time policy is standard since 2013.
- **Monsoon season (Jun–Sep) drives waterlogging/reduced-visibility delay risk** — build schedule buffer, especially Jul–Aug.
- **RWY 32 has no ILS** (simple/visual approach only) — do not expect an instrument approach on this end.
- **RWY 14/32 RESAs are smaller than ICAO-recommended** and the runway is shorter/narrower than 09/27 — treat as the less-forgiving runway, particularly wet.
- **Dense close-in obstacle field** (buildings, coconut palms, electrical structures) within the RWY 09/27 approach/take-off surfaces, per the AIP obstacle register — fly the published profile, do not shortcut visually below MSA/obstacle clearance.
- **Ground-handling agent assignment is in flux (2025 transition)** — confirm the current handler before planning a turn.
- **Runway capacity (~44 ATMs/hr) is a structural ceiling**, not a transient flow restriction — expect ATFM-style delay exposure as routine, not exceptional.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **intersecting-runway/single-effective-runway environment** and the **dense close-in obstacle field**. 🟧
- **Crew-qualification gate:** No specific crew-qualification restriction confirmed in reachable sources; standard CAT I/CAT II currency applies for the assigned ILS category. 🟧
- **Operating restrictions / bans:** No hard curfew found (H24 ATS/fuelling/handling/security); RWY 32 has no instrument approach (visual/simple approach only) — do not plan an IFR arrival on that end. 🟧
- **Overflight / entry / permits:** Non-scheduled/general-aviation movements require positive approval from the Airport Operations Control Centre (AOCC); published notice requirements are **72 hours for international** and **12 hours for domestic** non-scheduled movements `[AAI eAIP AD 2.2 VABB]`. Standard scheduled-service entry is otherwise unrestricted beyond normal Indian AIP/customs requirements.
- **Operations notes:** Aerodrome operator — **Mumbai International Airport Limited (MIAL)**, a joint venture of Adani Enterprises (74%, via Adani Airport Holdings) and the Airports Authority of India (26%). Reference code **4F** (Code F-capable, A380-capable runway system).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[AAI eAIP AD 2.3]` | 🟩 |
| AD operating hours | H24 for ATS/MET briefing/fuelling/handling/security; aerodrome **operator's administrative office** only Mon–Sat 0330–1200 UTC (0900–1730 IST), closed 2nd/4th Sat and all Sun `[AAI eAIP AD 2.3]` | 🟩 |
| Night / curfew restrictions | **None found** — no hard night curfew identified in reachable sources; capacity is constrained by the single-effective-runway ceiling rather than a curfew | 🟩 |
| RFF category | **CAT 10** (within ATS hours) `[AAI eAIP AD 2.6]` | 🟩 |
| Fuel | Jet A-1 (H24) via the **MAFFFL** common-user hydrant system (MIAL/IOCL/BPCL/HPCL JV); AVGAS/WMM/JP-5 handled by IOCL (barrels; no dedicated refuelling facility for these products) `[AAI eAIP AD 2.4]` | 🟩 |
| PCN | Not confirmed in the reachable AIP extract this pass — verify current AIRAC | 🟧 |
| Customs | **Terminal 2 only** (all international ops); exact desk hours not confirmed | 🟧 |
| Handling / FBO | Multiple agents — **AISATS, Bird Worldwide Flight Services, AIASL (Air India Airport Services), Indo Thai Airport Management Services**, among others; market in transition following a 2025 handler-contract termination — specific handler for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 3,448 × 60 m | Hard-surfaced (asphalt/concrete — exact PCN not confirmed this pass) 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | ≈3,308 m (computed; displaced threshold ≈140 m) 🟧 | Main runway; ILS CAT I; primary/default direction |
| 27 | 3,448 × 60 m | Hard-surfaced 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | ≈2,965 m (computed; displaced threshold ≈483 m) 🟧 | Main runway; **ILS CAT II** — the field's deepest published low-vis capability; TDZ lighting fitted (unique to 27 per AIP) |
| 14 | 2,871 × 45 m | Hard-surfaced 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | ≈2,471 m (computed; displaced threshold ≈400 m) 🟧 | Secondary/crossing runway; ILS CAT I; used only when 09/27 unavailable; small RESA (90 × 90 m) |
| 32 | 2,871 × 45 m | Hard-surfaced 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | ≈2,673 m (computed; displaced threshold ≈198 m) 🟧 | Secondary/crossing runway; **no ILS** — visual/simple approach only; historical Trombay Hill/BARC proximity on this approach (§3.1); RESA 150 × 100 m |
| Overall reference | RWY 09/27: 3,448 m physical, quoted by the regulator as "3,188 m with displaced threshold" (aggregate figure) `[AERA CSMIA Stakeholder Consultation 2025]`; RWY 14/32: 2,871 m physical | | | | | | Runway strips: 09/27 3,308 × 300 m; 14/32 2,991 × 300 m `[AERA CSMIA Stakeholder Consultation 2025]` |

*Displaced-threshold figures are computed from tier-4 sources (SkyVector: 09 ≈140 m/459 ft, 27 ≈483 m/1,585 ft, 14 ≈400 m/1,312 ft, 32 ≈198 m/650 ft; a second tier-4 source (IFATC) gives slightly different values — 466 ft/1,585 ft/1,339 ft/853 ft) — **not independently confirmed against a primary AD 2.13 declared-distance table this pass**; treat all LDA/TORA/TODA/ASDA figures here as 🟧 pending current-AIRAC verification. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Mumbai Information | 126.40 | H24 (assumed) 🟧 | |
| Delivery | Mumbai Delivery | 121.85 | H24 (assumed) 🟧 | Clearance delivery |
| Ground | Mumbai Ground | 121.75 / 121.85 / 121.90 | H24 (assumed) 🟧 | Multiple positions |
| Tower | Mumbai Tower | 118.10 / 122.50 | H24 (assumed) 🟧 | |
| Approach / Radar | Mumbai Approach / Mumbai Radar | 119.30 / 120.35 / 127.90 | H24 (assumed) 🟧 | Sector-specific — take the assigned frequency |
| Control / Radar (en route) | Mumbai Control | 120.50 / 125.35 / 132.70 / 133.42 | H24 (assumed) 🟧 | |
| Emergency | Chhatrapati Shivaji Intl | 121.50 | H24 | |
| Centre / FIR | Mumbai ACC — **Mumbai FIR (VABF)** | Per current AIRAC | H24 | See [Asia airspace general brief](../../../../airspace/asia.md) |

*Frequencies sourced to a tier-4 aggregator (SkyVector) — not independently confirmed against the primary AD 2.18 communications table this pass; the tower/ground/approach/delivery structure itself is a reasonable planning baseline but every frequency should be cross-checked against a live AIRAC. 🟧*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | BBB (Mumbai) | 116.60 | H24 (assumed) | On field `[SkyVector]` |
| NDB | BB (Mumbai) | Not confirmed this pass 🟧 | H24 (assumed) | ~2.6 NM from the field |
| ASR / SMR | — | — | H24 (assumed) | Airport Surveillance Radar + Surface Movement Radar on field — supports radar approach control and low-visibility surface guidance `[AERA CSMIA Stakeholder Consultation 2025]` |
| DVOR | — | — | H24 (assumed) | Doppler VOR on field, per the regulator's navaid list `[AERA CSMIA Stakeholder Consultation 2025]` |
| ILS 09 | Ident/freq not confirmed this pass 🟧 | — | H24 | CAT I |
| ILS 27 | Ident/freq not confirmed this pass 🟧 | — | H24 | **CAT II** — deepest published low-vis capability at the field |
| ILS 14 | Ident/freq not confirmed this pass 🟧 | — | H24 | CAT I |
| RWY 32 | No ILS | — | — | Visual/simple approach only |

*VOR checkpoints are published at three locations on the field (short of RWY 14 holding point on Taxilane W7; TWY N1 near the RWY 27 threshold; TWY N short of TWY N11) `[AAI eAIP AD 2.8 VABB]`. ILS idents/frequencies not obtained in this research pass — pull the current-AIRAC navaid data at planning.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed in reachable sources this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO/India norm) — confirm no local override on current chart.
- **Preferential runway logic:** **RWY 09/27 is the default/primary runway pair**; RWY 14/32 is used only when 09/27 is unavailable (maintenance, weather, or emergency) per MIAL's single-runway-at-a-time policy in force since mid-2013.
- **Approaches (names/categories only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 09 | ILS CAT I; VOR (CAT A/B and CAT C/D minima published) | Primary arrival end in the 09-configuration |
| 27 | ILS **CAT II**; VOR | Primary arrival end in the 27-configuration; deepest low-vis capability at the field |
| 14 | ILS CAT I; VOR (CAT A/B and CAT C/D minima published) | Crossing runway — used only when 09/27 unavailable |
| 32 | **No ILS** — visual/simple (GPS-referenced per a tier-4 source) approach only; VOR published | Crossing runway; historical Trombay Hill/BARC proximity (§3.1) |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Monsoon/fog-driven low-visibility events are the routine trigger; CAT II on RWY 27 is the standing mitigation — exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Traffic/sequencing density (single-effective-runway environment) is the dominant re-sequencing concern; the RWY 09/27 close-in obstacle field (§3.1) is the terrain-adjacent watch-item — fly the published missed-approach profile.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify per-SID RNP/gradient requirements on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Standard practice; specific cross-bleed/APU notification procedure not confirmed. 🟧 Isolation bays are published: primary (when RWY 09/27 in use) at TWY E9; secondary (when RWY 14/32 in use) at the end of RWY 27 between TWY N11 and the abandoned pavement abeam the RWY 09 threshold marking, aircraft parked facing south only, taken in under follow-me service `[AAI eAIP AD 2.8 VABB]`.
- **ATC slot / CTOT & clearance:** No hard curfew or confirmed formal IATA slot-coordination level found in reachable sources; the field's structural capacity ceiling (~44 ATMs/hr) drives routine ATFM-style flow management in India's air traffic management system. 🟧
- **De-icing:** **NIL** — not required at this tropical/coastal field `[AAI eAIP AD 2.4 VABB]`. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No specific published NADP/noise-routing procedure confirmed in reachable sources this pass — verify on current chart/AIP local regulations. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** **131 Code-C-equivalent parking stands** (17 occupied by obsolete/non-operational aircraft) per the 2025 regulator figure; **Terminal 2 uses Multiple Aircraft Ramp System (MARS) stands** allowing a single stand to take one widebody or two narrowbodies. Contact gates: **Terminal 1 — 8; Terminal 2 — 43** (Level 3: 22, Level 4: 21); bus gates: 31 (T1: 23, T2: 8). An older public figure (Wikipedia, pre-2025) cites 108 total parking stands and 60 boarding bridges — **treat the exact current stand count as 🟧, figures vary by source/vintage.**
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; a full-length parallel taxiway serves RWY 09/27 (13 taxiways including 4 rapid-exit) and RWY 14/32 (10 taxiways including 3 rapid-exit).
- **Hot spots / tight taxiways:** 🟥 The intersection of RWY 09/27 and RWY 14/32 itself is the field's principal ground/runway-crossing hot spot; MIAL's own 2025 capital programme separately references ongoing work on **Taxiway M (west side)** and a **dual-use Taxiway Zulu** (operates as a taxiway by day and an aircraft stand at night) — both indicative of a congested, actively-reconfigured airside layout. Confirm current taxiway status against NOTAMs.
- **Follow-me:** Available/required for isolation-bay movements (§11); general availability otherwise not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical coastal climate; RWY 09/27 (roughly east–west) is the default/primary pair.
- **Seasonal hazards:** **SW monsoon, June–September**, is the field's defining seasonal hazard — Mumbai receives on the order of 2,500 mm of rainfall in this window, with heavy rain, reduced visibility and airside waterlogging cutting achievable movement rates well below the already capacity-constrained baseline; pre-monsoon drainage/runway maintenance work (including scheduled multi-hour closures) is a recurring seasonal pattern. Mumbai is not a primary Arabian Sea cyclone-landfall zone but has been directly affected — **Cyclone Tauktae (May 2021)** forced an approximately 11-hour full airport closure. No de-icing season (tropical climate).
- **Local effects:** Coastal location; no significant terrain-driven local wind effect identified — the close-in urban obstacle field (§3.1) is the more relevant local hazard than terrain/wind.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories (Arabian Sea, Nov–Apr and pre/post-monsoon shoulder months). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. RWY 14/32 availability status given the single-runway-at-a-time policy, and Taxiway M/Zulu status), navaid U/S (ILS CAT II serviceability on RWY 27 in particular), lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, monsoon-season waterlogging/drainage advisories. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — not a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **VAPO** (Pune) and **VAAH** (Ahmedabad) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg; neither is built out in this pack.
- **Fuel-uplift notes:** Jet A-1 via the **MAFFFL** common-user hydrant system (MIAL/IOCL/BPCL/HPCL joint venture) — storage of 30,000 KL at the Sahar (T2) fuel farm and 17,000 KL at Santacruz, Hydrant Refuelling System with 34 dispensers and 15 refuelling vehicles `[AAI eAIP AD 2.4 VABB]`. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** RWY 09/27 is non-limiting for any K Global type. RWY 14/32 is shorter with smaller RESAs — treat as the less-forgiving fallback runway, particularly in the monsoon. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) for type-specific guidance if dispatched onto 14/32.

---

## 17. Fleet-specific notes (optional)

- No K Global type is field-length- or field-elevation-limited on RWY 09/27 (Code F-capable, 3,448 m). If ever dispatched onto RWY 14/32 (2,871 m, no ILS on 32, smaller RESAs), confirm performance margins against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and reference [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md); in the monsoon, also cross-ref [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and, for CAT II ops on RWY 27, [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ILS category on RWY 27** — the regulator's 2025 technical table states **CAT II**, not the commonly assumed CAT III; not independently corroborated from a primary AD 2 minima table this pass — verify against the current AIRAC before planning low-vis ops.
- **ARP / field elevation minor variance** — AIP-sourced 40 ft vs tier-4-sourced 39 ft; AIP-sourced ARP vs OurAirports/SkyVector coordinates differ by a small margin.
- **Magnetic variation** — sourced to a 2010 AIP epoch (0.75° W) inside a mirrored 2023-cycle eAIP page; a separate tier-4 source states 001° W; current-day value not independently reconfirmed.
- **Declared distances (TORA/TODA/ASDA/exact LDA) and PCN** — not obtained from a primary AD 2.13 table this pass; LDA values here are computed from tier-4 displaced-threshold data and flagged accordingly.
- **ATC frequencies** — sourced to a tier-4 aggregator (SkyVector), not cross-checked against the primary AD 2.18 communications table.
- **ILS/NDB idents and frequencies** — not obtained in this research pass.
- **SIDs/STARs (current names), RNP/gradient requirements, take-off minima, TA/TL** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Formal IATA slot-coordination level** — not independently confirmed; no hard curfew found, but high-demand/capacity-constrained scheduling pressure exists regardless.
- **Ground-handling agent for our operation** — market in transition following a 2025 handler-contract termination; specific contracted agent not confirmed.
- **Exact stand/gate count** — figures differ between a 2025 regulator presentation (131 Code-C-equivalent) and older public sources (108 physical positions, pre-2025).
- **PCN, push-back policy, noise-abatement procedure, engine run-up and reverse-thrust policy** — none confirmed in reachable sources.
- **VATSIM/IVAO India vACC cross-check** — no published vACC airport-specific SOP for VABB located in this research pass; not performed this build.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Airports Authority of India — eAIP India, AD 2 VABB** (2023-cycle mirror, AD 2.2–2.10 reachable extract) — https://aim-india.aai.aero/eaip-v2-01-2023/eAIP/IN-AD%202.1VABB-en-GB.html (retrieved 2026-07-26). *ARP, elevation, mag variation, operational hours, fuel facilities, RFF category, apron/isolation-bay data, obstacle register.*
- **AERA (Airports Economic Regulatory Authority of India) — CSMIA Fourth Control Period Stakeholder Consultation**, 25 March 2025 — https://aera.gov.in/uploads/stack_holder/17436568126440.pdf (retrieved 2026-07-26). *Runway dimensions/RESA, ILS category per runway, runway capacity (44 ATMs/hr), stand/gate counts, ARFF category, navaid list.*
- OurAirports — https://ourairports.com/airports/VABB/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/VABB/Chhatrapati-Shivaji-International-Airport (retrieved 2026-07-26). *Runway/displaced-threshold/communications cross-check.*
- IFATC — https://www.ifatc.org/appr_info?code=VABB (retrieved 2026-07-26). *Displaced-threshold/approach-type cross-check (network-sim reference, not regulatory).*
- PilotNav — https://www.pilotnav.com/airport/VABB (retrieved 2026-07-26). *VOR/NDB, runway coordinate cross-check, approach-plate index (names only, not transcribed).*
- Wikipedia — "Chhatrapati Shivaji Maharaj International Airport" — https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_Maharaj_International_Airport (retrieved 2026-07-26). *History, terminal structure, single-runway-operation policy, traffic statistics, incident history.*
- Mumbai Aviation Fuel Farm Facility Ltd (MAFFFL) — https://www.mafffl.in/ (retrieved 2026-07-26). *Fuel joint-venture confirmation.*
- BusinessToday — "Mumbai International Airport to have Indothai after removal of Turkey's Celebi," 2025-05-16 — https://www.businesstoday.in/latest/corporate/story/mumbai-international-airport-to-have-indothai-after-removal-of-turkeys-celebi-476649-2025-05-16 (retrieved 2026-07-26). *Ground-handling market transition.*
- Deccan Herald — "Mumbai airport resumes flight operations after 11-hour hiatus due to Tauktae" — https://www.deccanherald.com/india/mumbai-airport-resumes-flight-operations-after-11-hour-hiatus-due-to-tauktae-987021 (retrieved 2026-07-26). *Cyclone Tauktae closure, May 2021.*
- HappyFares — "Mumbai Monsoon BOM Flight Delays 2026" — https://www.happyfares.in/blog/mumbai-monsoon-flight-delays-bom-2026/ (retrieved 2026-07-26). *Monsoon rainfall/delay pattern — travel-blog source, corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
