# LFST — Strasbourg Entzheim · Airport Briefing

**LFST / SXB** · Strasbourg (Entzheim), Bas-Rhin, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AD 2 LFST); approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 48°32′31″N / 007°38′04″E — at the intersection of the runway centreline and TWY F |
| Field elevation | **505 ft AMSL** (reference temperature 28.9°C; geoid undulation 157 ft) |
| Mag variation | **3.2289° E** (2025 epoch, annual change +0.128°/yr) |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **05/23** — 2,400 × 45 m, bituminous concrete, PCN 76 F/C/W/T |
| Preferential runway | Not explicitly published as a wind rule; **RWY 23 carries the CAT II/III ILS and higher-category lighting** and is the field's low-visibility runway — RWY 05 is CAT I/basic-lighting only. Actual runway-in-use is wind/ATC-determined — confirm ATIS. 🟧 |
| Longest LDA | 2,400 m (both RWY 05 and RWY 23) |
| Approaches | **ILS CAT I RWY05 (ENT)** · **ILS CAT II/III RWY23 (STZ)** · VOR-DME STR |
| RFF category | **Level 7** standard; seasonal/hourly reduction to **Level 5** overnight in winter, possible elevation to **Level 8** in summer on 48 h request — see §6 🟧 |
| Control type | Strasbourg APP/TWR structure with sectorised frequencies implies **radar-supported approach control**; procedural-vs-radar not explicitly stated in the reachable AD 2 extract — verify. 🟧 |
| Elevation class | Sea-level equivalent (505 ft) — **not** hot-and-high; non-issue for performance. 🟩 |
| Special-airport status | Not operator-categorised as restricted-crew, but carries a **hard noise/night curfew** and a **RWY05-non-precision / RWY23-CAT-III asymmetry** — see §5. 🟥 |
| Customs / PoE | **Yes** — 0500–2200; outside these hours on request with 24 h prior notice. 🟧 |
| K Global category | **Not set** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LFSB, EDDS, LSZH** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **n/a** — not set in VAMSYS `[VAMSYS mirror 2026-07-26]` 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Alsace plain around the field; no close-in high terrain. Note the obstacle-driven omnidirectional departure climb gradients as a *departure-performance* watch item, not a CFIT/arrival hazard — see §3.1/§11. |
| Runway length vs fleet perf | 🟧 | 2,400 m is ample for narrowbody/regional-jet operations but would be limiting for any widebody long-haul type — fleet-aware note, see §17. |
| Approach availability / minima | 🟧 | RWY 23 has CAT II/III ILS (STZ); RWY 05 is CAT I / basic approach lighting only (ENT) — a real asymmetry to brief before assuming low-vis capability on either end. |
| Airspace / traffic / control | 🟧 | Multi-part CTR/TMA structure (partie 1, partie 1.1 Brumath, partie 2, a sector delegated to/from Stuttgart APP) with daily potential Class D→G reclassification for gliding/paramotor activity — see §3.2. |
| Weather / seasonal hazard | 🟧 | Alsace/Rhine-valley regional climatology plausibly supports winter radiation fog/inversions (the CAT II/III investment on RWY23 vs basic lighting on RWY05 mirrors the infrastructure logic seen at other fog-prone continental fields) — not confirmed via a seasonal-statistics source this pass. |
| Curfew / slots / hours | 🟥 | Hard night noise curfew (Chapter 2 aircraft banned H24; other aircraft banned 2230/2300–0500) with an EPNdB-gated exception process; engine-testing and training-flight bans layer on top — see §6/§12. |
| RFF category vs our types | 🟧 | Level 7 standard is adequate for narrowbody/regional types; seasonal night reduction to Level 5 (winter) is a conditional factor to confirm before a late/overnight operation. |
| Fuel availability | 🟧 | Shell Aviation hours are limited (not H24); outside-hours refuelling is standby-only, fee-based, and restricted to specific flight categories — see §6/§16. |
| Customs / handling / security | 🟧 | Customs 0500–2200 (24 h-notice extension); handling is compulsory for certain GA categories; hours and compulsory-handling triggers should be confirmed against the current schedule. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFST sits at 505 ft AMSL on the flat Alsace plain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for CFIT. The one terrain-linked item at this field is **obstacle-driven**, not CFIT: the omnidirectional departure climb gradients (3.8% off RWY 05, driven by a 4,374 ft tower 23 NM out at bearing 079° from ARP; 5.2% off RWY 23, driven by 2,799 ft terrain 11.2 NM out at bearing 230°) are a **departure-performance watch item** — see §11 and §3.5, and note the steeper 13.4%/10.3% ATS climb-slope requirement when crossing the LF-R199 Neuhof danger area with a 500 ft margin.

### 3.2 Airborne conflict / traffic 🟧
Strasbourg CTR is structured in multiple sub-parts — "partie 1" (2,500 ft AMSL/SFC, Class D, served by Strasbourg APP/TWR, with a locally reduced floor near Mundolsheim and within the "1.1 Brumath" sub-part), "partie 1.1 Brumath" (1,500 ft AMSL, Class D, deactivatable per ATIS announcement), "partie 2" (5,000 ft AMSL, Class D, locally reduced floor near Hohbuhl), and a part **delegated to/from Stuttgart APP** (2,500 ft AMSL, Class D) covering the German-border sector. The CTR sub-part "1.1 Brumath" and TMA sub-parts "1.2 Haguenau Sud"/"2.1 Haguenau Nord", plus the **LF-R199 Neuhof restricted area**, can be reclassified Class D→G daily between sunrise-30 min and sunset+30 min under a signed letter of agreement (announced via ATIS when active) — a real VFR/glider/paramotor mixing consideration during daylight hours. Cross-border coordination with Stuttgart APP adds an additional handoff layer near the German border. LFST sits under **Reims ACC (LFEE)** in the French upper-airspace structure; see [Europe airspace brief](../../../../airspace/europe.md) — **no dedicated K Global FIR brief exists yet for Reims (LFEE)**, flagged as an open item (§18).

### 3.3 Runway excursion 🟩
RWY 05/23 has symmetric declared distances (LDA 2,400 m both ends), a 240 × 90 m concrete-stopway RESA at both ends, and no displaced thresholds. Standard risk profile. The one real ground-routing watch item is that **TWY F and G close automatically whenever LVP is in progress**, changing the available vacate/ground-taxi routing on RWY 23 arrivals in low-vis conditions (§ Ground operations, §13).

### 3.4 Weather threat 🟧
No seasonal fog-frequency statistic was found in the reachable AD 2 extract, but the field's own infrastructure is a signal: **RWY 23 carries CAT II/III ILS (STZ) and CAT III-grade centreline/high-intensity lighting**, while RWY 05 has only basic, non-precision-category approach lighting (ENT, CAT I) — the same asymmetric investment pattern seen at other continental fields where low-visibility fog/inversion risk justifies one CAT III end. LVP is explicitly triggered at **RVR ≤ 800 m or ceiling ≤ 200 ft** (§ LVP data below), confirming an active low-vis operating regime exists at this field. Treat Alsace/Rhine-valley winter radiation fog as a plausible seasonal hazard pending confirmation from a dedicated climatology source (§14, §18).

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) the **hard noise/night curfew** — Chapter 2 aircraft banned H24 with no exceptions, other aircraft banned 2230–0500 (takeoffs, winter local time, summer −1 hr) and 2300–0500 (landings), with an unusually specific **EPNdB-gated exception process** (10 EPNdB cumulative noise margin for 2100–2300 movements, 13 EPNdB for 2300–0500, routed through the AD operator's on-duty supervisor/SASE); (2) the **RWY05-non-precision / RWY23-CAT-III asymmetry** — never assume low-vis capability on RWY 05; (3) **limited fuel hours** with a standby callout fee outside Shell Aviation's published hours; and (4) **compulsory handling** for international GA flights and GA flights outside the General Aviation Terminal's hours (0500–2100), both excluding based aircraft. RFF, navaid and approach infrastructure are otherwise standard for a regional field; the §18 open items are mostly currency/administrative confirmations.

---

## 4. Cautions & Warnings

- **RWY 23 (STZ) is the only CAT II/III ILS-equipped runway** — RWY 05 (ENT) is CAT I with basic (non-precision-category) approach lighting only; never assume low-vis capability on 05.
- **Noise curfew is hard, not a charge:** Chapter 2 aircraft are banned H24 with no exceptions; all other aircraft face takeoff bans 2230–0500 and landing bans 2300–0500 (winter local time, summer −1 hr) — the EPNdB-based delayed-flight exception routes through the AD operator's on-duty supervisor and is not automatic.
- **TWY F and G close automatically whenever LVP is in progress** — plan an alternate ground route during CAT III operations on RWY 23.
- **Wingspan/gear-track taxiway restrictions:** TWY F and G closed to aircraft with wingspan > 52 m; TWY M and Q closed to wingspan > 36 m; TWY Q additionally restricted to landing-gear track width < 9 m.
- **LF-R199 Neuhof danger area, when active,** imposes a steep ATS climb-gradient requirement (13.4% off RWY 05 / 10.3% off RWY 23, to 5,000 ft) to maintain the required 500 ft crossing margin — a departure-performance planning item.
- **Engine-testing and APU-use windows are tightly restricted** (testing prohibited 2100/2200–0500/0400; APU limited to 60 min before scheduled departure and 20 min after arrival).
- **Training flights face daily 2100–0700 bans**, plus additional weekend/holiday bans for aircraft over 6 tonnes — a scheduling consideration for any training/check activity routed through this field.
- **Fuel hours are limited** (Shell Aviation Sun–Fri 0430–2130, Sat 0430–2030) — outside these hours, refuelling is standby-duty-officer-only with a €300 callout fee, and restricted to scheduled/delayed commercial, State, and MEDEVAC flights.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in the source data; the standing crew-briefing items are the **RWY05/RWY23 approach-capability asymmetry** and the **noise-curfew regime**. 🟧
- **Crew-qualification gate:** CAT II/III currency required to exploit RWY 23's full low-visibility capability; RWY 05 has no such capability regardless of crew currency — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Hard night noise curfew (§6/§12); Chapter 2 aircraft banned H24; daily training-flight ban 2100–0700 (with additional weekend/holiday bans for aircraft ≥ 6 t); engine-testing and APU-use windows restricted. No RNP AR ban or circling restriction found in the source data — verify current AIRAC. 🟥
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** Administrator — **Société de l'Aéroport Strasbourg-Entzheim**. Handling — **Air France / Strasbourg Handling (Aviapartner)**; handling is **compulsory** (prior request required) for any international general-aviation flight (excluding based aircraft) and any general-aviation flight outside the General Aviation Terminal's hours (0500–2100, excluding based aircraft).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | MET H24; ATS H24 | 🟩 |
| AD operating hours | Customs/immigration 0500–2200 (outside hours on 24 h-notice request) | 🟧 |
| Night / curfew restrictions | Chapter 2 aircraft banned H24; other aircraft — takeoffs prohibited 2230–0500, landings prohibited 2300–0500 (winter LT, summer −1 hr); EPNdB-gated exception process for delayed scheduled pax flights; training flights banned daily 2100–0700 (+ weekend/holiday bans ≥ 6 t) | 🟥 |
| RFF category | Level 7 standard; 1 Nov–31 Mar: Level 7 during 0500–2255, Level 5 during 2255–0500; 1 Apr–31 Oct: Level 7 during 0400–2155, possible extension to Level 8 on 48 h prior request (working days) | 🟧 |
| Fuel | 100LL and Jet A1 — Shell Aviation Sun–Fri 0430–2130, Sat 0430–2030; outside hours, standby-duty-officer refuelling only (€300 callout fee), restricted to scheduled/delayed commercial, State and MEDEVAC flights | 🟧 |
| PCN | RWY 05/23: PCN 76 F/C/W/T (bituminous concrete) | 🟩 |
| Customs | 0500–2200; outside hours on 24 h-notice request | 🟧 |
| Handling / FBO | Air France / Strasbourg Handling (Aviapartner); compulsory for international GA (excl. based aircraft) and GA outside GAT hours 0500–2100 (excl. based aircraft) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 2,400 × 45 m | Bituminous concrete / PCN 76 F/C/W/T | 2,400 m | 2,695 m | 2,670 m | 2,400 m | THR elevation 503 ft; RESA 240 × 90 m concrete stopway; no displaced threshold. Intersection departure from TWY G: TORA 1,600 m (other intersection distances not separately published in the source extract) 🟧 |
| 23 | 2,400 × 45 m | Bituminous concrete / PCN 76 F/C/W/T | 2,400 m | 2,600 m | 2,671 m | 2,400 m | THR elevation 491 ft; RESA 240 × 90 m concrete stopway; no displaced threshold. Intersection departure from TWY F: TORA 1,800 m |

*Source: SIA France eAIP — AD 2 LFST, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26). All distances in metres. TWY F and G are closed to aircraft with wingspan > 52 m; TWY M and Q closed to wingspan > 36 m; TWY Q additionally restricted to landing-gear track width < 9 m. Stop bars: controllable at TWY E and H; permanent at TWY F and G.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Strasbourg ATIS | 126.930 | H24 | Also available by phone |
| FIS | Strasbourg Information | 119.450 (SIV 3 & SIV 4 below FL075) · 132.215 (SIV 4 above FL075) · 119.580 (Sector East) · 136.135 (Sector West) | H24 | |
| Ground | Strasbourg (TWR Ground) | 121.805 | H24 | |
| Tower | Strasbourg Tower | 119.250 | H24 | |
| Approach | Strasbourg Approche | 118.185 (aux) · 119.580 (Sector East) · 120.410 (Sector West) · 132.215 (above FL115, Sector SU) · 133.100 (aux) · 134.575 (below FL115, Sector SC) | H24 | Sector-specific — take the assigned frequency |
| Centre / FIR | Reims ACC (LFEE) — upper handoff | Per current AIRAC | H24 | No dedicated K Global FIR brief yet — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 |

*Source: SIA France eAIP — AD 2 LFST, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | STR | 115.6 (CH103X) | H24 | On field |
| ILS (LOC) RWY05 | ENT | 108.55 | H24 | **CAT I**; GP 329.75, slope 3.5°; DME CH22Y |
| ILS (LOC) RWY23 | STZ | 109.55 | H24 | **CAT II/III**; GP 332.45, slope 3°; DME CH32Y |

*Source: SIA France eAIP — AD 2 LFST, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26). RWY 23 is the field's precision (CAT II/III) runway; RWY 05 is CAT I only.*

---

## 10. Arrival

- **Transition altitude / level:** TA **7,000 ft AMSL (fixed)**; TL for the whole Strasbourg TMA is calculated by Strasbourg APP. Altimeter setting 1013.2 hPa above the transition level/altitude.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart. 🟧
- **Preferential runway logic:** Not explicitly published as a wind rule in the source extract; RWY 23's CAT II/III capability makes it the field's low-vis/LVP runway — actual runway-in-use is wind/ATC-determined, confirm ATIS. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05 | ILS CAT I (ENT) | ANDLO (radio-failure reporting fix) | Not published / verify 🟧 | Reciprocal, less-capable end |
| 23 | ILS CAT II/III (STZ) | SAV (radio-failure reporting fix) | Not published / verify 🟧 | Field's precision/LVP runway |

- **STARs (names only):** Not published / verify 🟧 — pull the current-AIRAC STAR list at planning.
- **LVP:** Only RWY 23 (ILS CAT III) is used for LVP. Applied when **RVR ≤ 800 m or ceiling ≤ 200 ft**; ends when RVR > 800 m and ceiling > 200 ft and improving. LVP ground lighting: CAT III lighting, high-intensity centreline/edge lighting; TWY P, E, H, K, M, N equipped with centreline lighting and usable; permanent stop bars on F and G, controllable stop bars on E and H. **TWY F and G are closed whenever LVP is in progress.** ATC transmits RVR on first contact and at every change; ATIS broadcasts LVP status.
- **Missed approach watch-items:** Terrain is not the driver (flat Alsace plain). On radio failure after a missed approach, the charted departure **BERUG 8M** (following an RWY 05 procedure) or **POGOL 7H/8H** (following an RWY 23 procedure) is flown, climbing to FL090 and seeking VMC — name only, verify current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Generic **RNAV SID RWY05 / RNAV SID RWY23** — exact current public chart names not confirmed this pass; verify current AIRAC. 🟧
- **RNP / climb-gradient requirements:** Omnidirectional departure RWY 05: climb runway heading at **3.8%** to 1,500 ft (1,009 ft AAL), then direct routing climbing at 3.8% to en-route safe altitude (gradient imposed by a 4,374 ft tower, bearing 079° from ARP, 23 NM out). Omnidirectional departure RWY 23: climb runway heading at **5.2%** to 1,500 ft (1,009 ft AAL), then direct routing climbing at 5.2% (gradient imposed by 2,799 ft terrain, bearing 230° from ARP, 11.2 NM out). Crossing the **LF-R199 Neuhof** danger area (when active) with a 500 ft vertical margin requires a steeper **13.4%** ATS climb slope to 5,000 ft off RWY 05, or **10.3%** off RWY 23. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify 🟧 — reduced runway separation minima exist for single-engine propeller VFR traffic only, not relevant to the K Global fleet.
- **Start-up / push-back:** Not published / verify — confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No explicit IATA slot-coordination level found for LFST in this AD 2 extract — treat as uncoordinated/Level 1 pending confirmation; a smaller regional field is unlikely to be Level 3, but this is not asserted without a source. 🟧
- **De-icing:** Provided per the AD 2 extract; specific pad location/procedure not detailed in the source data — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Omnidirectional departure procedures per §11 substitute for a named NAP track in the source data; no additional noise-routing SID detail found. 🟧
- **Night noise / dB limits:** **Chapter 2 aircraft (ICAO Annex 16) prohibited H24, no exceptions.** Other aircraft: takeoffs prohibited 2230–0500, landings prohibited 2300–0500 (winter local time, summer −1 hr). A delayed **scheduled passenger commercial flight** may request an exception via the AD operator's on-duty supervisor (SASE); granted only if the aircraft's cumulative noise margin exceeds **10 EPNdB** (movements 2100–2300) or **13 EPNdB** (movements 2300–0500). Exempt entirely: emergency landings, weather-diverted aircraft, Civil Security flights, official postal flights, search-and-rescue, MEDEVAC, State aircraft, humanitarian flights.
- **Engine run-up restrictions:** Engine testing prohibited 2100 (exceptionally 2200) to 0500 (exceptionally 0400).
- **Reverse thrust / idle-reverse policy:** Not published / verify 🟧. APU use is limited to 60 minutes before scheduled departure and 20 minutes after arrival.

---

## 13. Ground operations

- **Stands for our types:** Exact stand/apron layout beyond what follows is Not published / verify 🟧. Four-engined aircraft must taxi with outer engines at idle. Aircraft with wingspan > 36 m must taxi via **TWY K for Apron A** or **TWY N for Apron B** (except VIP State flights using stand A52 with FOLLOW-ME).
- **Push-back:** Not published / verify 🟧.
- **Standard taxi routes:** Confirm with Ground/Tower on the day; wheeled helicopters must move between TWY K/M/N/Q and the assigned stand by taxiing on the ground (no air-taxi between these points).
- **Hot spots / tight taxiways:** TWY F and G closed to wingspan > 52 m; TWY M and Q closed to wingspan > 36 m; TWY Q restricted to landing-gear track width < 9 m. **The service road between stands A28 and B1 cannot be used to bypass TWY P3.** TWY F and G close automatically whenever LVP is in progress.
- **Follow-me:** Available for VIP State flights using stand A52; general availability not otherwise confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate continental climate typical of the Alsace/Rhine-valley plain; prevailing wind not independently confirmed this pass. 🟧
- **Seasonal hazards:** Winter radiation fog/temperature inversion is plausible for this Rhine-valley location, consistent with the field's CAT II/III investment on RWY 23 (§3.4) — not confirmed via a dedicated seasonal-statistics source this pass. 🟧 De-icing is provided (§13/§11); season not detailed in source data.
- **Local effects:** None identified beyond the above in the reachable source data. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. TWY F/G status during LVP), navaid U/S, CAT II/III equipment status, lighting, obstacle/crane, RFF downgrade below Level 7, GPS/RAIM for RNAV procedures, LF-R199 Neuhof activity status. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate field within the European network — not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **LFSB** (Basel-Mulhouse), **EDDS** (Stuttgart), **LSZH** (Zurich) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** 100LL and Jet A1 available; Shell Aviation hours Sun–Fri 0430–2130, Sat 0430–2030; outside these hours, standby-duty-officer refuelling only (€300 callout fee), restricted to scheduled/delayed commercial, State and MEDEVAC flights. Storage: Jet A1 tanks 200 m³ plus trucks totalling 120 m³; 100LL truck 12 m³. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** 2,400 m runway pair is non-limiting for narrowbody/regional-jet operations; would be limiting for any widebody long-haul type — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- LFST's 2,400 m runway pair is sized for narrowbody/regional-jet operation, not for widebody long-haul types — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference. For any narrowbody type routed here, the operative planning considerations are the RWY05/RWY23 approach-capability asymmetry and the noise-curfew regime rather than field length or elevation. See also [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) for general guidance on runway-length-constrained fields, though 2,400 m is not itself a limiting figure for the network's narrowbody types.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Preferential/wind-based runway-in-use logic** — not explicitly published; inferred only from the RWY05/RWY23 CAT asymmetry.
- **Control type (radar vs procedural)** — not explicitly stated in the reachable AD 2 extract; sectorised APP frequencies imply radar support.
- **Seasonal fog/climatology statistics** — plausible given RWY23's CAT II/III investment, but not confirmed via a dedicated seasonal-statistics source.
- **SID/STAR current public chart names** — only the generic "RNAV SID RWY05/RWY23" terminology is confirmed; exact chart idents not obtained this pass.
- **Take-off minima table figures** — not published / verify.
- **IATA slot-coordination level** — not confirmed; treated as uncoordinated/Level 1 pending confirmation.
- **Stand/apron layout beyond the wingspan-based taxi rules (TWY K/N, service road A28–B1)** — exact stand numbering/layout not published in the reachable extract.
- **Push-back policy (mandatory vs self-manoeuvre), reverse-thrust/idle-reverse policy, follow-me general availability, engine run-up specifics beyond the stated windows** — none confirmed.
- **De-icing pad location/season/provisioning detail** — "provided" per AD 2, no further detail found.
- **K Global category** — not set in VAMSYS.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP — AD 2 LFST**, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ (eAIP France portal; AD 2 LFST section within the current AIRAC package). *Runway/declared distances, PCN, navaids, communications, ATS hours, CTR/TMA structure, LVP, noise/curfew regime, ground operations, flight/departure procedures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
