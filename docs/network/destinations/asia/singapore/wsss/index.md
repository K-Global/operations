# WSSS — Singapore Changi · Airport Briefing

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

**WSSS / SIN** · Changi, East Region, Singapore · Asia

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the CAAS AIP Singapore (AD 2 WSSS) plus tier-4 public corroboration where a live AIP pull was not reachable this pass; approaches/SIDs/STARs are listed **by name/category only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N01°21′01″ / E103°59′38″ (1.3502, 103.9940) `[OurAirports]` — SkyVector's fix (N1°21.55′/E103°59.36′) differs marginally; non-material variance 🟧 |
| Field elevation | **22 ft / 7 m AMSL** |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+8** (Singapore Standard Time) — no daylight-saving observed |
| Runway(s) | **02L/20R** 4,000 × 60 m · **02C/20C** 4,000 × 60 m (opened 30 Nov 2023) · **02R/20L** 4,000 × 60 m — 🟥 **not yet available for civil/commercial operations** (RSAF-only; civil service targeted **Q4 2027** under the Changi East programme) |
| Preferential runway | Config/wind-dependent; predominant-direction pattern not independently confirmed this pass 🟧 |
| Longest LDA | 4,000 m (02L; 02C/20C both ends) |
| Approaches | ILS **CAT II** (RWY 02L); ILS **CAT II/III** (RWY 02C ident ICE / RWY 20C ident ICC); **RNP** approaches published to 02L/02C/20R/20C; RWY 02R/20L — no civil approach published (not in civil service) |
| RFF category | **CAT 10** (ICAO highest — A380-capable) 🟩 |
| Control type | **Radar** — Singapore Approach/Departure on the TMA; Changi Tower/Ground on the field; **Singapore FIR (WSJC)** en route — see [Singapore (WSJC) FIR brief](../../../../airspace/fir/asia/singapore-wsjc.md) and [Asia — Airspace General](../../../../airspace/asia.md) |
| Elevation class | Sea-level (22 ft) — **not** hot-and-high; the performance/reliability drivers here are **monsoon-season convective weather (Sumatra squalls)** and **transboundary haze**, not density altitude |
| Special-airport status | Not formally special-categorised; standing caution items are the **extremely dense multi-airport TMA** (Seletar WSSL, Paya Lebar Air Base WSAP, Tengah Air Base WSAT all within ~17 NM) and the **RWY 02R/20L civil-availability restriction** — see §5 |
| Customs / PoE | **Yes** — H24, all-international gateway (Changi has no domestic terminal/traffic) 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **YES — home/base station** `[VAMSYS mirror 2026-07-26]` 🟩 |
| Company preferred alternates | **WMKK, WIDD** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Singapore is essentially flat; no close-in high terrain relevant to any Changi arrival, departure or missed-approach path. Non-issue for the field itself. |
| Runway length vs fleet perf | 🟩 | All civil runway ends offer 4,000 m (RWY 20R's usable landing length is 3,260 m past its displaced threshold) — ample for any K Global widebody. |
| Approach availability / minima | 🟧 | CAT II/III capability is **runway-specific** (02L, 02C, 20C), not fleet-wide across all runway ends; RNP approaches published to the four active civil ends. Sub-minima and current SID/STAR names not independently confirmed this pass. |
| Airspace / traffic / control | 🟥 | One of the densest multi-airport terminal areas in the region — Changi shares a tight TMA with Seletar, Paya Lebar Air Base and Tengah Air Base, plus Singapore Strait shipping-lane airspace underneath. |
| Weather / seasonal hazard | 🟥 | **Sumatra squalls** (sudden line-thunderstorm wind shear, Apr–Nov, predawn) and **transboundary haze** (Aug–Oct, visibility-reducing biomass-burning smoke) are the field's defining seasonal threats. |
| Curfew / slots / hours | 🟩 | **No curfew** — H24 operation; no evidence found of formal IATA slot-level coordination (not independently confirmed either way) 🟧. |
| RFF category vs our types | 🟩 | CAT 10 — above any K Global fleet requirement. |
| Fuel availability | 🟩 | Jet A-1 via the Changi Airport Fuel Hydrant Installation (CAFHI) joint-venture hydrant system, H24 major-hub provision. |
| Customs / handling / security | 🟩 | H24 international PoE; ground handling split between SATS and dnata Singapore — both well-established major-hub agents. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
Singapore is a low-lying island state with no high terrain near Changi — the highest point in the country, Bukit Timah Hill (~163 m), sits on the far western side of the island, well clear of any Changi arrival, departure or missed-approach track. All approach and departure paths on the 02/20 axis lie predominantly over the Singapore Strait/open water to the east and southeast. CFIT is not the operative threat at this field; verify the MSA ring on the current chart as routine practice only.

### 3.2 Airborne conflict / traffic 🟥
Changi sits inside one of the most congested multi-airport terminal areas in the region. **Seletar (WSSL)** lies ~8 NM to the northwest, **Paya Lebar Air Base (WSAP)** ~5 NM to the west-northwest, and **Tengah Air Base (WSAT)** ~17 NM to the west `[SkyVector]` — all sharing overlapping approach/departure flows with Changi under Singapore Approach/Departure radar control. The Singapore vACC (VATSIM) explicitly trains controllers for what it describes as "a challenging, tight and congested airspace" spanning the Changi–Seletar–Paya Lebar complex, corroborating the real-world workload picture. Add to this: (1) **RWY 02R/20L is not yet in civil service** — it remains an active RSAF runway, so civil crews should expect coordination/crossing traffic in its vicinity even though it is not a landing/departure option today; and (2) an ongoing **Singapore–Malaysia airspace/FIR-boundary realignment discussion** (reported as recently as December 2025) affecting inbound/outbound flows to the west — a live example of the region's airspace complexity. Underneath the arrival/departure corridors, the **Singapore Strait carries some of the highest-density shipping traffic in the world** (on the order of 90,000 vessel transits per year through the wider Malacca–Singapore Strait system) — not a direct flight-safety factor, but illustrative of how constrained and shared this environment is at every level. Cross-ref [Singapore (WSJC) FIR brief](../../../../airspace/fir/asia/singapore-wsjc.md).

### 3.3 Runway excursion 🟧
**RWY 20R carries a 740 m displaced threshold**, reducing its landing distance available to **3,260 m** against the runway's full 4,000 m length — the displaced section remains usable for departure but must not be used as a touchdown zone. No other displaced thresholds were found in reachable sources for 02L, 02C or 20C — not independently re-confirmed against a current AIRAC cycle. RWY 02R/20L's civil-side declared distances are not published at all, consistent with its current non-civil status.

### 3.4 Weather threat 🟥
Two distinct, quantifiable seasonal hazards define this field. **(1) Sumatra squalls** — organised squall lines that form over Sumatra or the Strait of Malacca and track eastward into Singapore and Peninsular Malaysia, most common **April–November** during the inter/southwest monsoon period, typically developing in the **predawn-to-early-morning hours** and lasting a few hours. They can produce severe, sudden wind shear and gusts — a July 2014 event produced gusts as high as 103.7 km/h — but are generally identifiable on weather radar with useful lead time. **(2) Transboundary haze** — biomass-burning smoke from Sumatra/Kalimantan carried by the prevailing southeast monsoon, concentrated **August–October**, has produced hazardous air-quality and visibility episodes in Singapore in 1997, 2013, 2015 and 2019; nearby Seletar has been closed by CAAS in the past specifically for haze-driven visibility below operating minima. Both hazards are monitored via NOTAM/SIGMET and PSI/visibility bulletins at planning — see §14/§15.

### 3.5 Operational considerations 🟧
Plan around three durable constraints: (1) **RWY 02R/20L is RSAF-only** under the current AIP status — never plan a civil movement on it; monitor for the Q4 2027 civil-service target; (2) **CAT II/III low-visibility capability is concentrated on specific runway ends** (02L, 02C, 20C) rather than being available fleet-wide across the airfield, so runway assignment matters materially for haze-season or squall-affected approach planning; and (3) the field carries **no curfew and no confirmed slot-coordination regime**, which removes the schedule-integrity pressure seen at curfew/slot-bound hubs elsewhere in the network — the standing pressure here is airspace density and monsoon-season weather, not schedule administration.

---

## 4. Cautions & Warnings

- **RWY 20R has a 740 m displaced threshold** (LDA 3,260 m vs a 4,000 m full length) — never plan to touch down short of it; it remains usable for departure.
- **RWY 02R/20L is not available for civil/commercial operations** — it is an active RSAF runway pending the Changi East civil-service target of Q4 2027; do not plan into or out of it under current status.
- **Sumatra squalls** can arrive with little notice in the predawn/early-morning hours, April–November — monitor weather radar/TAF trend and brief a sudden-wind-shear contingency in season.
- **Haze season (August–October)** can suppress visibility for extended periods — monitor PSI/visibility NOTAMs; nearby Seletar has been closed for this reason historically.
- **Extremely dense multi-airport TMA** (Changi, Seletar, Paya Lebar Air Base, Tengah Air Base) — expect sustained vectoring/sequencing workload even under full radar control.
- **CAT II/III capability is runway-specific, not fleet-wide** — confirm the assigned runway before committing to a low-visibility approach expectation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew special airport in reachable sources; the standing crew-briefing items are the **dense multi-airport TMA** and the **runway-specific low-visibility capability**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-visibility approaches on the equipped runway ends (02L, 02C, 20C) — confirm crew/aircraft currency before planning a low-vis arrival in haze season. 🟧
- **Operating restrictions / bans:** **RWY 02R/20L not authorised for civil operations under current status** 🟥 (military-only, pending Q4 2027 civil service); no curfew; no RNP-AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival procedures apply; overflight/transit of Singapore-administered airspace is generally subject to standard state permit requirements — exact current process not independently confirmed this pass. 🟧
- **Operations notes:** ANSP/regulator — **Civil Aviation Authority of Singapore (CAAS)**; airport operator — **Changi Airport Group (CAG)**; ground handling — **SATS** (majority share) and **dnata Singapore**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 — no curfew | 🟩 |
| Night / curfew restrictions | **None** — Singapore has historically operated Changi around the clock with no night movement ban | 🟩 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | Jet A-1, H24, via the CAFHI hydrant joint venture (Air BP, TotalEnergies, Chevron, ExxonMobil, PetroChina, Shell) | 🟩 |
| PCN | Not published / verify — reachable sources gave inconsistent runway/apron figures | 🟧 |
| Customs | H24, all-international PoE | 🟩 |
| Handling / FBO | SATS (majority share) and dnata Singapore | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 02L | 4,000 × 60 m | Asphalt (PEM) / PCN not published — verify 🟧 | 4,000 m | 4,000 m 🟧 | 4,000 m | 4,000 m | Full length both directions of use; ILS CAT II |
| 20R | 4,000 × 60 m | Asphalt (PEM) / PCN not published — verify 🟧 | 4,000 m | 4,000 m 🟧 | 4,000 m | **3,260 m** | **740 m displaced threshold** — do not land short of it; full length remains usable for departure |
| 02C | 4,000 × 60 m | Asphalt / PCN not published — verify 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | Opened 30 Nov 2023; ILS CAT III (ident ICE) |
| 20C | 4,000 × 60 m | Asphalt / PCN not published — verify 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | 4,000 m 🟧 | ILS CAT II/III (ident ICC) |
| 02R | 4,000 × 60 m (extended from ~2,750 m) | Asphalt / PCN not published | — | — | — | — | 🟥 **Not available for civil/commercial operations** — RSAF-only; civil declared distances not published |
| 20L | 4,000 × 60 m | Asphalt / PCN not published | — | — | — | — | 🟥 Reciprocal end of the same non-civil runway — see 02R |

*Declared distances for 02L/20R are corroborated across OurAirports, SkyVector and Wikipedia (citing the CAAS AIP Supplement on RWY 02R/20L data); 02C/20C figures assume symmetry with 02L/20R pending a current-AIRAC cross-check — flagged. All distances in metres. RWY 02R/20L status per multiple corroborating public sources describing an active RSAF/Changi East conversion targeting Q4 2027 civil service.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Changi Arrival ATIS 128.025 · Changi Departure ATIS 128.60 · Changi East (RWY 02R/20L) Info 139.95 | — | H24 (assumed) | 🟧 aggregator-sourced |
| Delivery | Singapore Delivery | 119.60 / 121.65 | H24 (assumed) | 🟧 |
| Ground | Singapore Ground | 121.00 / 121.72 / 121.85 / 122.55 / 124.30 / 125.65 | H24 (assumed) | Multiple positions — take the assigned frequency 🟧 |
| Tower / Apron | Changi Tower/Apron (ramp-taxi) 121.90 · Singapore Tower 118.25 / 118.60 · Changi East Tower 122.25 | — | H24 (assumed) | Two tier-4 sources (SkyVector, Learn ATC) give **conflicting runway-to-frequency mapping** — not AIP-verified 🟧 |
| Approach | Singapore Approach | 124.05 / 124.60 / 126.30 | H24 (assumed) | Sector-specific — take the assigned frequency 🟧 |
| Arrival / Departure | Singapore Arrival 119.30 / 119.40 / 119.55 · Singapore Departure 120.30 / 121.62 | — | H24 (assumed) | 🟧 |
| Centre / FIR | Singapore ACC — **Singapore FIR (WSJC)** | Per current AIRAC | H24 | See [Singapore (WSJC) FIR brief](../../../../airspace/fir/asia/singapore-wsjc.md) |

*Frequencies sourced to SkyVector and Learn ATC (both tier-4 aggregators); the two sources disagree on exact runway-to-tower-frequency assignment — treat as 🟧 pending a live-AIRAC cross-check. The overall Delivery→Ground→Tower→Approach structure is stable and well corroborated. A datalink departure-clearance (DCL) service is available with logon ID **WSSS** — see [`OM E — Datalink and Oceanic Procedures`](../../../../../flight-ops/datalink-and-oceanic-procedures.md).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | PLA (Paya Lebar) | 116.30 | H24 (assumed) | ~4.6 NM, on/near field |
| VOR | PU (Papa Uniform) | 115.10 | H24 (assumed) | ~5.1 NM |
| VOR | VTK (Tekong) | 116.50 | H24 (assumed) | ~3.9 NM |
| VOR | SJ (Sinjon) | 113.50 | H24 (assumed) | ~11.5 NM |
| NDB | AG (Sembawang) | 325 kHz | H24 (assumed) | ~10.9 NM |
| ILS 02C | ICE | 108.3 | H24 | **CAT III** 🟧 |
| ILS 20C | ICC | 109.7 | H24 | **CAT II/III** 🟧 |
| ILS 02L | Ident not confirmed | Not confirmed | H24 (assumed) | **CAT II** 🟧 |
| ILS 20R | Not confirmed | Not confirmed | H24 (assumed) | Category not confirmed this pass 🟧 |

*Idents/frequencies sourced to tier-4 aggregators (SkyVector, Learn ATC) and search-indexed AIP fragments; not independently re-confirmed against a current AIRAC. RNP approaches are additionally published to 02L, 02C, 20R and 20C per GNSS/PBN implementation — verify current chart.*

---

## 10. Arrival

- **Transition altitude / level:** **TA 11,000 ft**, **TL FL130** (2,000 ft transition layer) — established Singapore-FIR-wide, per CAAS AIP ENR 1.7.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Config/wind-dependent; Singapore's wind pattern is monsoon-driven (NE monsoon Dec–Mar, SW monsoon Jun–Sep, calmer inter-monsoon Apr–May/Oct–Nov) — a confirmed predominant runway direction was not obtained this pass. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 02L | ILS CAT II; RNP | Not confirmed 🟧 | Not confirmed 🟧 | |
| 20R | ILS (category not confirmed); RNP | Not confirmed 🟧 | Not confirmed 🟧 | 740 m displaced threshold — LDA 3,260 m |
| 02C | ILS CAT III (ICE); RNP | Not confirmed 🟧 | Not confirmed 🟧 | |
| 20C | ILS CAT II/III (ICC); RNP | Not confirmed 🟧 | Not confirmed 🟧 | |
| 02R / 20L | — none (civil) — | — | — | 🟥 Not in civil service — never an arrival runway under current status |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Haze-driven visibility reduction is the routine LVP trigger at this field (rather than fog, given the equatorial climate); CAT II/III on the equipped runway ends is the standing mitigation. Exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat island state); the operative missed-approach concern is re-sequencing into a very dense, multi-airport radar environment shared with Seletar and Paya Lebar Air Base traffic.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** RNP/GNSS-based departure routes are implemented as part of Singapore's PBN programme; verify gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** A datalink departure-clearance (DCL) service is available with ground-system logon ID **WSSS**; confirm cross-bleed/APU notification procedure locally. 🟧 See [`OM E — Datalink and Oceanic Procedures`](../../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **ATC slot / CTOT & clearance:** No evidence found of formal IATA Level 2/3 slot coordination at Changi in reachable sources — not independently confirmed either way. 🟧
- **De-icing:** **NIL** — equatorial climate, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in detail this pass; the field's arrival/departure corridors on the 02/20 axis run predominantly over the Singapore Strait/open water to the east, which structurally limits residential-overflight noise exposure compared with land-locked hubs elsewhere in the network. 🟧
- **Night noise / dB limits:** None identified — consistent with the absence of a curfew.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody/Code E–F capacity reported by terminal: **Terminal 1** (gate codes C/D), **Terminal 2** (gate codes E/F — gate F31 reported as the first A380-ready gate), **Terminal 3** (gate codes A/B — 28 aerobridge gates, 8 A380-capable), **Terminal 4** (gate code G — 4 widebody stands). 🟧 Aggregator-sourced; not an official CAG gate count. | 🟧
- **Push-back:** Company/CAG push-back policy (mandatory vs self-manoeuvre) not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Not identified by name in reachable public sources this pass — flag for AIP/AIRAC confirmation, particularly given the airfield's ongoing Changi East construction history (RWY 02C/20C and RWY 02R/20L have each seen multiple NOTAM'd construction-related closures in recent years). 🟧
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Equatorial — hot, humid, and thermally stable year-round with minimal seasonal temperature variation. Wind pattern is monsoon-driven: **Northeast monsoon** (Dec–Mar), **Southwest monsoon** (Jun–Sep), with calmer, more variable **inter-monsoon** periods (Apr–May, Oct–Nov).
- **Seasonal hazards:** **Sumatra squalls** — sudden line-thunderstorm wind shear events tracking east from Sumatra/the Strait of Malacca, most common Apr–Nov, typically forming in the predawn/early-morning hours (documented gusts to 103.7 km/h, Jul 2014). **Transboundary haze** — biomass-burning smoke from Sumatra/Kalimantan concentrated Aug–Oct under the prevailing southeast monsoon flow, with historically significant episodes in 1997, 2013, 2015 and 2019. Routine tropical convective showers/thunderstorms occur year-round, typically in the afternoon/evening.
- **Local effects:** Coastal sea-breeze convergence is a routine tropical effect; no notable terrain-driven local wind effect given the flat island setting.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, PSI/haze advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (especially any Changi East construction-related NOTAMs affecting 02C/20C or the 02R/20L conversion programme), navaid U/S, CAT II/III equipment status, lighting, obstacle/crane, RFF downgrade, PSI/haze visibility advisories, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Home hub / base** — the primary departure and return field for the K Global network in the region.
- **Nearest suitable alternates:** Company preferred alternates **WMKK** (Kuala Lumpur–Sepang, Malaysia) and **WIDD** (Indonesia) `[VAMSYS mirror 2026-07-26]` — cross-check identifies WIDD as Batam–Hang Nadim International Airport, Riau Islands, Indonesia (~16 NM from WSSS); confirm the intended alternate identity in VAMSYS if a different Indonesian field was assumed — see §18.
- **Fuel-uplift notes:** Jet A-1, H24, via the CAFHI hydrant joint venture (Air BP, TotalEnergies, Chevron, ExxonMobil, PetroChina, Shell). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on any civil runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- As the regional home hub, WSSS is the base field for the K Global fleet generally rather than a single-type consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM B — Fleet Index`](../../../../../fleet/index.md). No field-elevation or field-length performance penalty for any type at WSSS; the operative planning considerations are haze-season low-visibility runway selection and monsoon-season convective/wind-shear awareness rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RWY 02R/20L civil-service timing** — multiple corroborating public sources target Q4 2027; monitor for an AIRAC amendment bringing it into civil service and update this pack at that point.
- **Declared distances for 02C/20C** and the exact TODA figures for 02L/20R — assumed symmetric with published 02L/20R data, not independently confirmed from a primary AIP table this pass.
- **PCN figures** — reachable sources gave inconsistent runway/apron pavement-strength values; not confirmed.
- **Magnetic variation** — not obtained in reachable sources this pass.
- **ILS idents/frequencies for 02L and 20R**, and the CAT category for 20R — not confirmed from a primary table.
- **ATC frequency-to-runway mapping** — two tier-4 sources (SkyVector, Learn ATC) disagree on which tower/ATIS frequency serves which runway; not AIP-verified.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Slot-coordination level** — no formal IATA Level 2/3 coordination identified, but not independently confirmed as absent either.
- **Terminal/gate stand counts by code letter** (T1 C/D, T2 E/F, T3 A/B, T4 G) — aggregator-sourced, not an official CAG count.
- **Taxiway hot spots** — none identified by name in reachable public sources; flag for AIRAC confirmation given the field's active construction history.
- **Overflight/entry permit specifics** for Singapore FIR transit — not confirmed.
- **Noise-abatement procedure, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, push-back policy** — none confirmed in reachable sources.
- **WIDD alternate identity** — cross-check identifies WIDD as Batam–Hang Nadim (Indonesia); confirm this matches the intended VAMSYS alternate.
- **Preferential/predominant runway direction** — not independently confirmed this pass; wind pattern is monsoon-driven but a stated operational preference was not sourced.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **CAAS AIP Singapore, AD 2 WSSS** (eAIP landing page, cycle valid from 2026-03-19) — https://aim-sg.caas.gov.sg/aim-content/uploads/aip/31-MAR-2026/AIP/2026-03-19-000000/html/eAIP/SG-AD-2-WSSS-en-GB.html — **primary source of record**; a live pull was not completed this session (fetch timed out / access-gated), so tier-4 public corroboration was used per the source hierarchy — treat all figures below as 🟧 pending a direct AIP cross-check.
- **CAAS AIP Singapore, ENR 1.7** (Altimeter Setting Procedures) — https://aim-sg.caas.gov.sg/aim-content/uploads/aip/2025-07-24/final/2017-08-17-Non-AIRAC/html/eAIP/ENR-1.7-en-GB.html (retrieved 2026-07-26). *Transition altitude/level.*
- OurAirports — https://ourairports.com/airports/WSSS/ and https://ourairports.com/airports/WSSS/runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- SkyVector — https://skyvector.com/airport/WSSS/Singapore-Changi-International-Airport (retrieved 2026-07-26). *Coordinates, communications, navaids, nearby-airport bearings/distances.*
- Wikipedia — "Singapore Changi Airport" — https://en.wikipedia.org/wiki/Singapore_Changi_Airport (retrieved 2026-07-26). *Runway history/dimensions, RWY 02R/20L status and Q4 2027 civil-service target, fire-station layout, terminal history.*
- Wikipedia — "Sumatra squall" — https://en.wikipedia.org/wiki/Sumatra_squall (retrieved 2026-07-26). *Seasonal wind-shear threat detail.*
- Learn ATC — WSSS Aerodrome — https://www.learn-atc.com/tools/aerodrome/WSSS (retrieved 2026-07-26). *Frequency/runway cross-check (flight-sim training aggregator, not authoritative).*
- Changi Airport Group — Airport Safety & Emergency Services — https://www.changiairport.com/en/corporate/about-us/business-expertise/airport-safety-and-security.html (retrieved 2026-07-26). *RFF Category 10 operator statement.*
- Flightglobal — "Singapore to use third runway during Changi East upgrading" — https://www.flightglobal.com/singapore-to-use-third-runway-during-changi-east-upgrading/135154.article (retrieved 2026-07-26). *RWY 02R/20L conversion background.*
- Simple Flying — "The Game-Changing New Mega Terminal Coming To Singapore Changi Airport" — https://simpleflying.com/singapore-changi-mega-terminal/ (retrieved 2026-07-26). *Changi East/Terminal 5 context.*
- Singapore vACC (VATSIM) — https://sinvacc.org/ and https://pushback.sinvacc.org/ (retrieved 2026-07-26). *Network-sim cross-check — Changi/Seletar/Paya Lebar combined FIR training scope; not regulatory.*
- CAAS Newsroom — "Seletar Airport Closed due to Prolonged Poor Visibility Caused by Haze" — https://www.caas.gov.sg/about-caas/newsroom/Detail/seletar-airport-closed-due-to-prolonged-poor-visibility-caused-by-haze (retrieved 2026-07-26). *Haze/visibility operational corroboration.*
- CAPA / dnata — Supplier profile — https://centreforaviation.com/data/profiles/suppliers/dnata-singapore (retrieved 2026-07-26). *Ground handling market split (SATS/dnata).*
- IOP Conference Series: Earth and Environmental Science — "Case Study of Ship Traffic Crowds in The Malacca Strait" — https://iopscience.iop.org/article/10.1088/1755-1315/1081/1/012009/pdf (retrieved 2026-07-26). *Shipping-lane density context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
