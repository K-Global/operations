# LFML — Marseille-Provence · Airport Briefing

**LFML / MRS** · Marignane, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP FRANCE, AD 2 LFML) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 43°26'12"N / 005°12'54"E (43.4367, 5.2150) `[SIA AIP AD 2 LFML.2]` |
| Field elevation | **70 ft / 21 m AMSL** (reference elevation, current AIRAC cycle eff. 11 Jun 2026) — reference temperature 32.38°C. Public tier-4 sources (OurAirports, Wikipedia) commonly show **74 ft / 23 m**; the AIP figure is authoritative per the source hierarchy — see §18. |
| Mag variation | **2.5672° E** (2025 epoch, annual change +0.116° E/yr) → approx. 2.6–2.7° E current-day 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **13L/31R** 3,500 × 45 m (bituminous concrete) · **13R/31L** 2,370 × 45 m (bituminous concrete) |
| Preferential runway | Config/wind-dependent; **RWY 31 configuration** (31R primary, ILS-equipped) is favoured whenever the wind is northwesterly — directly relevant to the **Mistral** (§3.4/§14); RWY 13 configuration is the reciprocal; a fixed low-traffic **night "calm-air" config (13L land / 31R depart, 2300–0600L, wind <5 kt)** also applies — see §10/§11 |
| Longest LDA | 3,160 m (RWY 13L) |
| Approaches | **ILS CAT III (13L)**, **ILS CAT I (13R, 31R)**, **RNP (RNAV), including RNP AR — preferential on the 13R/31L pair**; **RWY 31L has no ILS** — RNP-only |
| RFF category | **Level 9** (French RFFS scale, ≈ ICAO CAT 9) 🟩 |
| Control type | **Radar** — Provence Tower/Ground/Delivery on the field; **Provence Approach** (delegated sub-sectors to Orange Approach and Salon Approach); **Marseille ACC (LFMM)** en route — a **different facility from LFML the airport** despite the shared "Marseille" name, delegates the MTL/MOLEN axis to Provence Approach — see [Europe airspace general brief](../../../../airspace/europe.md) and §18 |
| Elevation class | Near sea-level (70 ft) — **not** hot-and-high; the defining hazard here is the **Mistral wind**, not density altitude |
| Special-airport status | 🟧 **Two dependent parallel runways** (no simultaneous takeoff/landing ops on both); **RNP AR preferential approach** on the secondary runway pair requiring PBN/T1 flight-plan authorisation; strong regional **Mistral** wind — see §5 |
| Customs / PoE | **Yes — H24** `[SIA AIP AD 2 LFML.3]` |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LFMN, LEBL, LIMC** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 14 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal plain on the shore of the Étang de Berre; no significant close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | 3,500 m main runway (13L/31R) is ample for any K Global type; 2,370 m secondary (13R/31L) is comfortable for narrowbody equipment — confirm widebody suitability before planning it as a primary runway. |
| Approach availability / minima | 🟧 | ILS CAT III on 13L and ILS CAT I on 13R/31R give solid low-visibility coverage on the main runway pair, but **RWY 31L has no ILS at all** — its preferential approach is RNP AR (PBN/T1 required), backed by RNP Z. Confirm aircraft/crew RNP AR authorisation before relying on 31L. |
| Airspace / traffic / control | 🟧 | Two closely-spaced **dependent** runways drive a sequencing (not raw-density) workload; several military restricted areas (LF-R zones) ring the CTR and can further constrain airspace when active — see §3.2. |
| Weather / seasonal hazard | 🟥 | The **Mistral** — a strong, cold, gusty northwesterly wind — is the field's defining seasonal hazard, directly driving runway-configuration choice and a hard RWY 31L crosswind restriction. |
| Curfew / slots / hours | 🟧 | No blanket curfew and (per reachable sources) no slot coordination, but a **night noise regime (2200–0600L)** restricts landing/departure for aircraft below defined cumulative noise margins — confirm current K Global type compliance. |
| RFF category vs our types | 🟩 | Level 9 (≈ ICAO CAT 9) is adequate for any K Global fleet type. |
| Fuel availability | 🟩 | Jet A-1 confirmed H24 from two independent suppliers. |
| Customs / handling / security | 🟩 | Customs/immigration and handling confirmed H24; non-scheduled/charter security screening requires D-7 advance coordination with the airport — flag for irregular ops. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFML sits at 70 ft AMSL on the flat coastal plain beside the **Étang de Berre** lagoon — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟧
LFML operates **two closely-spaced, dependent parallel runways** — the main 13L/31R (3,500 m) and the secondary 13R/31L (2,370 m) — and per the AIP's local traffic regulations, **simultaneous takeoffs and landings on both runways are prohibited**; the field runs a segregated-mode operation rather than independent parallel ops, so sequencing discipline (not raw traffic density) is the main workload driver. **Provence Approach** provides terminal control for the PROVENCE CTA/TMA, with parts delegated to **Orange Approach** and **Salon Approach** depending on sector/altitude. The **CTR PROVENCE** (Class D, SFC–2,500 ft AMSL, activable H24) has a complex lateral boundary that specifically excludes several **military restricted areas** — LF-R 88 (Berre-La Fare), LF-R 186 (Martigues), LF-R 217/1.1 (Istres), LF-R 107 (Pilon du Roy), LF-R 276 (Patrouille de France) and the interfering portion of LF-R 269 (Flyboard-Air) — which can further constrain usable airspace when active. **Provence Approach** itself operates under delegation **from Marseille ACC (LFMM)** for part of its area (the MTL/MOLEN axis) — LFMM is the **en-route Area Control Centre**, a distinct facility from LFML the airport despite the shared "Marseille" name. No dedicated LFMM FIR brief exists yet in this Operations Manual; the closest available reference is the general [Europe airspace brief](../../../../airspace/europe.md) — see §18.

### 3.3 Runway excursion 🟧
RWY 31R's declared TORA/ASDA (3,440 m) is **60 m short of the runway's full 3,500 m physical length** — a defined overrun/stopway beyond the declared distances, separately lit; always brief the declared figures in §7, not the physical pavement length. RWY 13L carries a documented **approach-lighting deviation** (CS ADR-DSN.M.630(b)): only 420 m of CAT I lighting is installed versus the 900 m standard. RWY 13R has **no light approach device at all** (physically impossible per the AIP; threshold identification lights substitute) — relevant to low-visibility planning on that runway specifically. RWY 31L take-offs are **prohibited when the crosswind component, including gusts, exceeds 12 kt on a wet runway** — a hard, Mistral-relevant restriction (🟥, see §3.4).

### 3.4 Weather threat 🟥
The **Mistral** is the field's defining seasonal/regional hazard: a strong, cold, northwesterly wind (typically from **~300–330°**) funnelled down the Rhône valley into the Gulf of Lion, producing sustained speeds around **50 km/h (~27 kt)** and gusts to **90–100 km/h (~50 kt)**, most frequent in winter and spring and capable of persisting for several days at a stretch. Because the Mistral blows from close to the reciprocal of the RWY 31 heading (314° true), it drives a strong operational preference for the **RWY 31 configuration** (near-direct headwind on the ILS-equipped 31R) and is the direct cause of the **RWY 31L 12 kt/wet-runway takeoff prohibition** (§3.3). The Mistral typically clears cloud and improves visibility rapidly, so it is principally a **wind/turbulence/crosswind threat rather than a low-visibility one** — contrast with the Mediterranean climate notes in §14. No LFML-specific gust-frequency statistic beyond general regional Mistral climatology was found in reachable sources — treat the figures above as indicative regional climatology, not field-specific measured data 🟧.

### 3.5 Operational considerations 🟧
Plan around four durable items: (1) the **segregated dependent-runway operation** (§3.2/§7) — expect sequencing rather than independent parallel flow; (2) **RNP AR being the preferential approach on the secondary runway pair**, with **no ILS at all on RWY 31L** — confirm PBN/T1 flight-plan authorisation and crew RNP AR currency before planning that approach, see [OM E — PBN and RNP Operations](../../../../../flight-ops/pbn-and-rnp-operations.md); (3) the **Mistral's** direct influence on runway configuration and the RWY 31L crosswind prohibition (§3.4, cross-ref [OM E — Adverse Weather and Windshear](../../../../../flight-ops/adverse-weather-and-windshear.md)); and (4) the **night noise regime** (2200–0600L) restricting aircraft below defined cumulative noise margins — confirm current K Global type certification margins are compliant before scheduling late operations. RFF, fuel and customs infrastructure are all first-tier confirmed with H24 coverage; the open items in §18 are mostly currency/administrative confirmations rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **Mistral wind** (strong, gusty, from the northwest) can force short-notice runway/configuration changes — watch the ATIS wind trend closely, especially in winter and spring.
- **RWY 31L: takeoff prohibited when the crosswind component (including gusts) exceeds 12 kt on a wet runway** — a hard limit.
- **RWY 31L has no ILS** — only RNP X (AR) [PBN/T1 required, preferential] or RNP Z are published; confirm aircraft/crew authorisation before planning this runway as primary.
- **The two runways are dependent** — simultaneous takeoff/landing operations on both are prohibited; expect sequencing rather than independent parallel flow.
- **No runway exit signage exists on either runway pair** (13L/31R and 13R/31L) — maintain positive taxiway awareness on rollout, especially at night or in reduced visibility.
- After landing RWY 31R, exit **at the latest via TWY D1** to protect the LOC critical area; **A330 and B767 are specifically prohibited from exiting via TWY D2**.
- **Reduced wingtip clearance margin between TWY G1 and TWY L4** — maintain reduced speed through this stretch.
- **Night noise regime (2200–0600 local)** restricts landing/take-off for aircraft below defined cumulative noise margins — verify type compliance before scheduling late operations.
- The airport sits on a historic **French Navy airship/seaplane base** site (from 1920) and remains home to **Airbus Helicopters'** main French production site immediately adjacent to the field — expect occasional rotorcraft activity in the vicinity, segregated from the civil runway system.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **dependent-runway operation** and the **RNP AR-preferential secondary runway pair** (no ILS on 31L). 🟧
- **Crew-qualification gate:** RNP AR authorisation (aircraft PBN capability plus flight-plan "T1" annotation, and current crew RNP AR qualification) is required to fly the preferential **RNP X (AR)** approach to 31L/31R; without it, plan the alternate RNP Z/Y approach, or the ILS on the 13-side runways, depending on wind. 🟧
- **Operating restrictions / bans:** RWY 31L takeoff prohibited when crosswind (incl. gusts) exceeds 12 kt on a wet runway 🟥; Chapter 2 (non-Chapter-3-compliant) turbojets banned outright (moot for the K Global fleet); night noise regime 2200–0600L restricts non-compliant aircraft 🟧 — confirm per type.
- **Overflight / entry / permits:** Standard Schengen/non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** Aerodrome control — Provence Tower/Ground/Delivery and Provence Approach (delegated from **Marseille ACC / LFMM** for part of the CTA); airport operator — **Société Aéroport Marseille Provence (AMP)**. On-field handling agents include a national-carrier handling desk plus independent ground handlers and a general-aviation FBO — see §6/Dispatch §5.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (AD administration H24) | 🟩 |
| Night / curfew restrictions | No blanket curfew; **night noise regime 2200–0600L** restricts non-Chapter-3-compliant/high-cumulative-margin turbojets and turboprops from landing or leaving stand for takeoff — confirm K Global type compliance | 🟧 |
| RFF category | Level 9 (French RFFS scale) | 🟩 |
| Fuel | Jet A-1 (+ 100LL for GA) — H24; two independent suppliers (Shell-branded and Total/BP-branded) | 🟩 |
| PCN | 13L/31R: 58 R/B/W/T · 13R/31L: 70 F/C/W/T (bituminous concrete both) | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | National-carrier handling desk (own + assisted airlines) plus independent ground handlers for commercial/cargo/general aviation; a dedicated general-aviation FBO is also present | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 13L | 3,500 × 45 m | Bituminous concrete / PCN 58 R/B/W/T | 3,500 m | 3,500 m | 3,500 m | 3,160 m | THR 9 ft, DTHR 8 ft; RESA 90×90 m; CAT II/III lighting installed for only 420 m (vs 900 m standard — documented deviation) |
| 31R | 3,500 × 45 m | Bituminous concrete / PCN 58 R/B/W/T | 3,440 m | 3,500 m | 3,440 m | 2,780 m | THR 70 ft, DTHR 52 ft; RESA 210×90 m; 60 m stopway beyond declared distances; CAT I lighting 900 m |
| 13R | 2,370 × 45 m | Bituminous concrete / PCN 70 F/C/W/T | 2,370 m | 2,370 m | 2,370 m | 2,370 m | THR 8 ft, no DTHR; RESA 90×90 m; **no light approach device installed** (physically impossible per AIP — threshold ID lights only) |
| 31L | 2,370 × 45 m | Bituminous concrete / PCN 70 F/C/W/T | 2,370 m | 2,670 m | 2,370 m | 2,265 m | THR 64 ft, DTHR 61 ft; RESA 95×90 m; 300 m clearway; **takeoff prohibited >12 kt crosswind (incl. gusts) on wet RWY** 🟥 |

*Source: SIA France eAIP, AIP FRANCE AD 2 LFML.12/.13, AIRAC cycle effective 11 Jun 2026 (retrieved 2026-07-26). Intersection-departure TORA figures available from multiple taxiway entry points (D1–D9, E2/E3/E7/E9, F3) — see current AIRAC chart for exact intersection distances. All distances in metres; strip dimensions 3,560×280 m (13L/31R) and 2,490×280 m (13R/31L).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | PROVENCE | 125.355 | H24 | |
| Delivery | PROVENCE Prévol (FR) / PROVENCE Delivery (EN) | 121.730 | H24 | Contact before any ground movement — TWR organises the taxi sequence |
| Ground | PROVENCE Sol (FR) / PROVENCE Ground (EN) | 121.905 | H24 | |
| Tower | PROVENCE Tour (FR) / PROVENCE Tower (EN) | 133.100 (primary) · 123.725 (auxiliary) | H24 | Sole authority for runway-in-use selection (wind/operational constraints) |
| Approach | PROVENCE Approche (FR) / PROVENCE Approach (EN) | 120.205 (sectors MZ1–3) · 120.880 & 121.430 (sectors MAC1–10) · 124.350 (sectors ME1–2) · 132.300 (sector MB) · 127.725 / 129.475 (auxiliary) | H24 | Delegated sub-sectors: Orange Approach and Salon Approach (altitude/area-dependent) |
| Centre / FIR | **Marseille ACC (LFMM)** — en-route facility, distinct from LFML the airport | Per current AIRAC | H24 | Delegates the MTL/MOLEN axis to Provence Approach. No dedicated LFMM FIR brief exists yet in this Operations Manual — see [Europe airspace brief](../../../../airspace/europe.md) and §18 |

*Source: SIA France eAIP, AIP FRANCE AD 2 LFML.17/.18 (AIRAC eff. 11 Jun 2026, retrieved 2026-07-26). Cross-checked against SkyVector (retrieved 2026-07-26) and the IVAO France division MANEX for LFML (network-sim reference, not regulatory — retrieved 2026-07-26); values are consistent across all three sources.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | MAR | 383 kHz | H24 | 25 NM range; 311°/3.7 NM from DTHR 13L |
| NDB | OB | 395 kHz | HO | 50 NM range |
| VOR/DME | MRM | 108.80 (CH25X) | H24 | 60 NM (270°–90°)/100 NM at FL500; 124°/5.6 NM from DTHR 31R; occasional signal fluctuation reported in the southern sector 🟧 |
| ILS/LOC 13R (CAT I) | MCE | 108.30 | H24 | GP 334.1 MHz, 3.0° slope; DME CH20X, omnidirectional landing DME |
| ILS/LOC 13L (CAT III) | ML | 110.30 | H24 | GP 335.0 MHz, 3.0° slope; DME CH40X; non-frangible GP shelter, day/night marked |
| ILS/LOC 31R (CAT I) | MPV | 111.15 | H24 | GP 331.55 MHz, 4.0° slope; DME CH48Y; DME coverage limited left of the LOC axis beyond 17 NM/2,500 ft |
| — RWY 31L — | — | — | — | **No ILS/LOC published for RWY 31L** — RNP (RNAV) approaches only |

*Source: SIA France eAIP, AIP FRANCE AD 2 LFML.19 (AIRAC eff. 11 Jun 2026, retrieved 2026-07-26). The absence of a 31L LOC/GP entry in the primary AIP navaid table is corroborated by the IVAO France division MANEX for LFML, which lists RNP X (AR) and RNP Z as the only published approaches to 31L (network-sim cross-check, retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft (PROVENCE TMA); TL calculated by Provence Approach based on QNH. `[SIA AIP AD 2 LFML.20]`
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven. The **RWY 31 configuration** (31R for IFR/VFR arrivals, ILS-equipped) is favoured whenever wind is northwesterly, including during Mistral episodes; the **RWY 13 configuration** (13L primary) is the reciprocal, with a "low-traffic" and "high-traffic" sub-variant affecting how the secondary runway (13R) is used. A distinct **night "calm-air" configuration** applies 2300–0600L when wind is under 5 kt and traffic is light: **13L for landing**, 31R for departure. 🟧 (config-logic detail corroborated by the IVAO France division MANEX, network-sim reference, not regulatory.)
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 13L | ILS Y/Z (CAT III) | Preferential on the main runway pair when in the 13-config |
| 13R | ILS Y/Z / LOC Y/Z (CAT I) | |
| 31R | RNP X (AR) [preferential, PBN/T1 required]; ILS Z/LOC (CAT I); RNP Z; RNP Y | ILS available as a non-preferential alternate |
| 31L | RNP X (AR) [preferential, PBN/T1 required]; RNP Z | **No ILS published** |

- **STARs (names only — verify current AIRAC):** BALSI 1R/1D, LERGA 1R/1D, MTL 1R/1D (RNAV, IAF RISKI for the 13-config or DOLIV for the 31-config, FL080 min at the IAF); FJR 1L (IAF LIPSU or SALIN, FL070 min); TINOT 1L; NIDEV 1L; SOSUR 1L; LANKO 1G (IAF GEMKO). 🟧 Sourced to the IVAO France division MANEX (network-sim reference, not the primary AIP text extract reached this pass) — pull the current-AIRAC STAR list at planning.
- **LVP:** Trigger conditions not confirmed from a primary table this pass 🟧; low-visibility events are comparatively infrequent at this field given the clearing effect of the Mistral, but confirm current LVP status before planning into fog/marginal conditions.
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative missed-approach concern is re-sequencing within the dependent-runway environment (§3.2), particularly during a runway-configuration change driven by a Mistral onset.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Omnidirectional Type B departures — **MADRA 6C** (RWY 13L/R, initial altitude 4,000 ft) and **MTG 6C** (RWY 31R/L, initial altitude 4,000 ft); named RNAV SID families are tied to specific waypoints (e.g. NASIK, SOSUR, TINOT, VATIR, LUC, MTG) with runway-specific suffixes. 🟧 Sourced to the IVAO France division MANEX (network-sim reference, not the primary AIP text extract reached this pass) — pull the current-AIRAC SID list at planning.
- **RNP / climb-gradient requirements:** RNP AR is the preferential approach procedure on the secondary runway pair (arrival-side); confirm SID-side RNP/gradient requirements on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Aircraft must contact **Provence Prévol/Delivery** prior to any movement; Tower organises the taxi sequence into the manoeuvring area. Pilots must apply minimum power necessary to exit the stand. Several remote stands (25D, 30A, 30D, 40A, 40D) **require a mandatory push-back start**.
- **ATC slot / CTOT & clearance:** No slot-coordination regime confirmed in reachable sources for LFML (not an IATA Level 2/3 field per available data) 🟧 — verify current status; standard EUROCONTROL ATFM/CTOT regulation may still apply during flow events.
- **De-icing:** Available H24 in season. Two ground-handling operators run de-icing equipment on the field: one operates twin-boom rigs with Type I (50/50 mix, ~12,000 L stock) and Type IV (100%, ~1,000 L stock) fluids; a second operator runs its own rigs with Type I (~6,000 L) and Type IV (~6,000 L) stocks. Airport-side snow/ice clearance equipment includes multiple blade trucks, loaders, sweepers and de-icing-agent spreaders (total reserve ~40,000 L), with a published runway-clearance priority order (main runway first). GRF (Global Reporting Format) runway-surface condition reporting operates H24. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Specific NADP variant not confirmed in reachable sources this pass. 🟧
- **Night noise / dB limits:** Turbo-jet aircraft certified to Chapter 3 with a cumulative noise margin **under 10 EPNdB**, and turboprop aircraft (Chapter 2/3/5) with a cumulative margin **under 8 EPNdB**, are **prohibited from landing between 2200–0600 local, and from leaving the stand for takeoff in the same window**. Non-compliance can draw an ACNUSA administrative fine (up to €40,000 for a legal entity). Modern K Global fleet types are expected to carry comfortable noise margins above these thresholds, but **per-type compliance has not been individually confirmed** — verify against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before scheduling operations inside the night window. 🟧
- **Engine run-up restrictions:** An APU-use ministerial order (28 Jul 2023) exists for stopovers at this field; exact hours/conditions not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Taxiway/apron access is coded by wingspan: **Code C** ≤36 m, **Code D** ≤52 m, **Code E** ≤65 m. Code E aircraft access the runway thresholds only via **TWY G3** (RWY 13 side) or **TWY G4** (RWY 31 side). 🟧
- **Push-back:** Several remote stands (25D, 30A, 30D, 40A, 40D) **require a mandatory push-back start**; general push-back policy for contact stands not otherwise detailed in reachable sources. 🟧
- **Standard taxi routes:** RWY 13L/31R is served by TWY C1, D1–D4, D6–D9; RWY 13R/31L is served by TWY E2, E3, E7, E9, F3, F7. Confirm exact routing with Ground/Tower on the day.
- **Hot spots / tight taxiways:** 🟥 **No runway exit signage exists on either runway pair** — a standing gotcha. After landing RWY 31R, exit **at the latest via TWY D1** to protect the LOC critical area (report to control if an exceptional exit beyond D1 is required); **A330 and B767 aircraft are specifically prohibited from exiting via TWY D2** after landing 31R. **Reduced wingtip clearance between TWY G1 and TWY L4** requires a reduced taxi speed. TWY entries **G3/G4 via TWY C5** have insufficient wheel/edge margin for certain Code D aircraft (e.g. B757-200/300, B767-200/300, A310) — an over-steering technique is recommended for those types. Speed is further restricted to 10 kt on several apron taxiways for wide-span aircraft (TWY G1 abeam block 50 and abeam stands 71–74; TWY L4 abeam block 80; TWY L3 abeam stand 48A; the central apron taxiway between stands 5A–10C).
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean climate — hot, dry summers and mild, wetter winters; reference temperature 32.38°C (a minor summer performance consideration for heavier aircraft, not a hot-and-high issue given the field's near-sea-level elevation).
- **Seasonal hazards:** The **Mistral** is the field's defining seasonal hazard — a strong, cold, gusty northwesterly wind (typically ~300–330°), sustained around 50 km/h (~27 kt) with gusts to 90–100 km/h (~50 kt), most common in winter/spring and able to persist for several days; it directly drives runway-configuration choice (§3.4/§10) and the RWY 31L crosswind restriction (§3.3/§7). The Mistral generally clears cloud and improves visibility rapidly, so **wind/turbulence — not fog — is the primary Mistral-related threat** at this field.
- **Local effects:** Coastal/lagoon-side location (Étang de Berre) — no notable sea-breeze or terrain-channelling effect beyond the regional Mistral itself was identified in reachable sources.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. TWY D1/D2 exit constraints after RWY 31R landings), navaid U/S (esp. the RWY 31L ILS gap — confirm no NOTAM'd interim procedure), lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP AR procedures, current Mistral-related wind/gust NOTAMs or AIRMETs. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/spoke field — **not a K Global base** `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**LFMN**](../lfmn/index.md) (Nice), [**LEBL**](../../spain/lebl/index.md) (Barcelona), [**LIMC**](../../italy/limc/index.md) (Milan Malpensa) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. See also the neighbouring regional field [**LFMT**](../lfmt/index.md) (Montpellier) for local corroboration of Mediterranean coastal weather patterns.
- **Fuel-uplift notes:** Jet A-1 confirmed H24 from two independent on-field suppliers; no cold-soak/fuel-freeze consideration specific to this near-sea-level Mediterranean field. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runway pair (3,500 m); the 2,370 m secondary pair is comfortable for narrowbody equipment — confirm widebody suitability before planning it as primary. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- The **RNP AR requirement on the secondary runway pair** (RWY 31L has no ILS at all) interacts directly with individual type PBN/RNP AR capability — confirm equipage and crew currency per [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) before planning that runway as primary for any type. No field-elevation or field-length performance penalty applies to any K Global type at LFML.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field elevation discrepancy** — the current-AIRAC AIP text gives a reference elevation of **70 ft**; multiple public tier-4 sources (OurAirports, Wikipedia) commonly show **74 ft/23 m**. The AIP figure is used as authoritative per the source hierarchy; the variance is noted here rather than silently resolved.
- **Magnetic variation** — sourced to the 2025 epoch (2.5672° E, +0.116° E/yr secular drift); current-day precise value not independently re-derived beyond the linear estimate.
- **SIDs/STARs/approach names** — the runway/navaid/ILS-category data is AIP-sourced (Tier 1), but the specific SID/STAR/approach *names* in §10/§11 are sourced to the IVAO France division MANEX (network-sim reference, not regulatory) — pull the live current-AIRAC procedure list before use.
- **RNP AR minima, take-off minima, LVP trigger RVR values** — not confirmed from a primary table this pass.
- **NADP variant, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, general push-back policy for contact stands** — none confirmed in reachable sources.
- **APU-use restriction (28 Jul 2023 ministerial order)** — exists but exact hours/conditions not confirmed this pass.
- **Slot-coordination status** — not confirmed; assumed non-coordinated pending verification.
- **Night noise regime per-type compliance** — not individually confirmed for each K Global fleet type against the EPNdB thresholds in §12.
- **Security-screening D-7 advance-notice requirement** for non-scheduled/charter flights — noted from the AIP but applicability to K Global's scheduled operation should be confirmed with handling.
- **Terminal "Cœur d'aéroport" renovation programme** (reported architect-led modernisation of the historic Terminal 1) — status/timeline not confirmed; current terminal layout may evolve.
- **Dedicated Marseille (LFMM) FIR brief does not yet exist** in this Operations Manual — LFML's Centre/FIR references currently point to the general [Europe airspace brief](../../../../airspace/europe.md) only; a dedicated LFMM brief should be built and cross-linked when the Airspace/FIR/Europe library is next expanded.
- **1935-era "largest French naval air base" and personnel-count figures** cited in §Cautions/historical background are secondary-sourced (tourism-office and aggregator material), not independently verified against a primary historical record.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP (Service de l'Information Aéronautique), AIP FRANCE AD 2 LFML.1–.21**, AIRAC cycle effective 11 Jun 2026 — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFML-fr-FR.html (retrieved 2026-07-26). *Primary source for ARP, elevation, mag variation, runway geometry/declared distances/PCN, navaid idents/frequencies, ATC frequencies, RFF category, transition altitude, noise-abatement/night-restriction regime, local traffic regulations (dependent-runway rule, RWY 31L crosswind limit, taxiway hot spots), handling/fuel/de-icing facilities.*
- OurAirports — https://ourairports.com/airports/LFML/ (retrieved 2026-07-26). *ARP/elevation cross-check — source of the 74 ft variance noted in §18.*
- SkyVector — https://skyvector.com/airport/LFML (retrieved 2026-07-26). *Runway/frequency cross-check.*
- Wikipedia (EN) — "Marseille Provence Airport" — https://en.wikipedia.org/wiki/Marseille_Provence_Airport (retrieved 2026-07-26). *General background, terminal history, traffic statistics; cites the same SIA eAIP AIRAC-2026-06-11 cycle for elevation.*
- Wikipedia (FR) — "Aéroport de Marseille Provence" — https://fr.wikipedia.org/wiki/Aéroport_de_Marseille_Provence (retrieved 2026-07-26). *Terminal history (Hall A/B, Terminal 2), runway-orientation cross-check, "Cœur d'aéroport" renovation note, Airbus Helicopters and Sécurité Civile co-location.*
- Wikipedia (EN) — "Mistral (wind)" — https://en.wikipedia.org/wiki/Mistral_(wind) (retrieved 2026-07-26). *Mistral climatology (direction, speed, seasonality) used in §3.4/§14.*
- IVAO France Division — "LFML - Marseille Provence" (MANEX Aéroports Civils) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfml-marseille-provence (retrieved 2026-07-26). **Network-sim document, not regulatory** — used to corroborate runway-configuration logic, dependent-runway rule, SID/STAR/approach names and taxiway service split; cross-checked against the primary AIP where both sources cover the same data point (runway dimensions/declared distances matched exactly).
- Office de Tourisme de Marignane — "L'Aéro-Port de Marseille-Marignane (1920-1932)" — https://www.tourisme-marignane.com/marignane-aeronautique/laviation-a-marignane-une-histoire-commune/lhistoire-de-laviation-a-marignane/ (retrieved 2026-07-26). *Naval airship/seaplane base history predating the civil airport.*
- SKYbrary — attempted (https://skybrary.aero/articles/marseille-provence-airport) — page unreachable behind a bot-challenge redirect at retrieval time (2026-07-26); not cited as a source.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
