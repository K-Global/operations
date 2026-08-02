# KLAX — Los Angeles International · Airport Briefing

**KLAX / LAX** · Los Angeles, California, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Core runway/declared-distance/communications data is FAA Chart Supplement (d-TPP, AIRAC cycle 2607, eff. 2026-07-09) as mirrored by SkyVector, cross-checked against AirNav FAA facility data and the FAA IAP chart index (retrieved 2026-07-26). Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N33°56.55′ / W118°24.48′ (33.9425, -118.4080) `[FAA Chart Supplement via SkyVector/AirNav, cycle 2607]` |
| Field elevation | **127 ft MSL** (surveyed) |
| Mag variation | 🟧 **12° E** (2020-epoch value reported via FAA Chart Supplement/AirNav data); not independently re-confirmed against the current AIRAC cycle |
| Time zone | UTC −8 (PST) / UTC −7 (PDT, US DST observed) |
| Runway(s) | **North complex:** 06L/24R 8,926 × 150 ft · 06R/24L 10,885 × 150 ft — **South complex:** 07L/25R 12,923 × 150 ft · 07R/25L 11,095 × 200 ft — all concrete or asphalt-concrete, grooved. Complexes separated by the Central Terminal Area; within each complex the two runways are only **≈700 ft (north) / ≈800 ft (south)** apart centerline-to-centerline 🟧 (tier-4 corroborated) |
| Preferential runway | **Normal ("west") ops — the dominant configuration most of the year:** arrivals 24R/25L, departures 24L/25R (over-ocean). **East ops** (wind ≥10 kt easterly): arrivals 06L/07R, departures 06R/07L. **Noise-abatement single-runway ops (0000–0630 local):** arrivals RWY 06R, departures RWY 25R — see §10/§11/§12 |
| Longest LDA | 11,259 ft (RWY 07L, after 832 ft displaced threshold) — see §7 for all directions |
| Approaches | ILS OR LOC on all 8 runway ends; **ILS CAT II/III on RWY 24R and RWY 25L only** (ALSF-2 lighting); RNAV (RNP) Z and RNAV (GPS) Y on all 8 ends — verify per runway in §10 |
| RFF category | **Index E** 🟩 (FAA highest ARFF index — aircraft ≥200 ft length; confirmed via AirNav FAA facility data, retrieved 2026-07-26) |
| Control type | **Radar** — LAX ATCT (Tower/Ground/Clearance on field); **Southern California TRACON (SoCal Approach/Departure)** — the busiest TRACON in the US, based in San Diego; **Los Angeles ARTCC (ZLA)** en route — see [North America area brief](../../../../airspace/north-america.md) |
| Elevation class | Sea level — **not** hot-and-high; the performance/reliability driver is **coastal marine-layer stratus/fog ("June Gloom")**, not density altitude |
| Special-airport status | 🟥 **Closely-spaced parallel runway pairs within each complex** (≈700–800 ft apart) plus a **FAA-published Hot Spot cluster (HS1–HS3) at the north/south-complex crossing area** — a long-standing runway-incursion focus point; extremely high-density Class B — see §3.2/§5 |
| Customs / PoE | **Yes — Tom Bradley International Terminal (Terminal B / TBIT).** CBP hours reported **0600–2400 local** 🟧 (not confirmed 24h — verify before a late/overnight arrival) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **YES — hub/base** `[VAMSYS mirror 2026-07-26]` 🟩 |
| Company preferred alternates | **KSNA, KBUR** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **20 min / 22 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Coastal plain, 127 ft MSL; nearest significant terrain (Santa Monica Mountains, peaks ≈2,000–2,800 ft) lies well north of the field; standard arrival/departure corridors are clear of it. Verify MSA/obstacle rings on the current chart. |
| Runway length vs fleet perf | 🟩 | 12,923 ft / 11,095 ft main pair (south complex) and 10,885 ft (north complex) are ample for any K Global type including quads; only 06L/24R (8,926 ft) is comparatively shorter and still non-limiting for our fleet at sea level. |
| Approach availability / minima | 🟩 | ILS on all 8 runway ends; CAT II/III on 24R and 25L specifically; RNAV (RNP)/RNAV (GPS) on every end. Minima per current AIRAC. |
| Airspace / traffic / control | 🟥 | Class B, SoCal-TRACON-vectored, one of the busiest airports in the world; **closely-spaced parallel runway pairs within each complex** and a **published Hot Spot cluster (HS1–HS3)** at the crossing point between the north and south complexes — a recognised, long-standing runway-incursion risk area. |
| Weather / seasonal hazard | 🟥 | **Coastal marine-layer stratus/fog ("June Gloom", strongest May–Jul)** routinely drops ceiling/visibility at the field into the morning even when downtown LA is clear — the airport's signature weather threat, directly why CAT II/III infrastructure exists on 24R/25L. |
| Curfew / slots / hours | 🟧 | **No legal curfew.** LAX is an FAA **Level 2 schedule-facilitation airport** (not slot-coordinated). Long-standing **voluntary Over-Ocean Operation (since 1985)** and **Preferential Runway Use Program** shape runway assignment by time of day — see §6/§12. |
| RFF category vs our types | 🟩 | Index E — above our fleet's requirement. |
| Fuel availability | 🟩 | Jet A confirmed on field (Signature Aviation, Atlantic Aviation FBOs); scheduled-carrier into-plane hours not confirmed 🟧. |
| Customs / handling / security | 🟧 | Tom Bradley International Terminal (TBIT) FIS hall confirmed; CBP hours reported 0600–2400 (not confirmed 24h) — verify for late arrivals/diversions. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
LAX sits at 127 ft MSL on the flat Los Angeles coastal plain, directly adjacent to the Pacific shoreline — there is **no close-in high terrain** in the immediate airport environment, and the standard over-ocean departure/approach paths track over water to the west. The nearest significant terrain is the **Santa Monica Mountains** (peaks such as Saddle Peak, ≈2,800 ft), roughly 15+ NM north of the field, well clear of the standard arrival/departure corridors but relevant to MSA sectors on the north side and to any vectored missed approach or engine-out routing that turns inland. The Baldwin Hills/Kenneth Hahn high ground (≈500 ft) is closer in but low and does not drive CFIT exposure. Read the MSA ring and obstacle data on the current AD/area chart. CFIT exposure at LAX itself is low; the operative hazards are airspace density and coastal weather, not terrain.

### 3.2 Airborne conflict / traffic  🟥
LAX combines **two widely-separated pairs of closely-spaced parallel runways** — the north complex (06L/24R, 06R/24L, ≈700 ft apart centerline-to-centerline 🟧) and the south complex (07L/25R, 07R/25L, ≈800 ft apart 🟧) — with an extremely high-density Class B environment under **Southern California TRACON (SoCal Approach/Departure)**, the busiest TRACON in the United States. The airport's own FAA Chart Supplement Hot Spot table publishes three points directly related to this geometry: **HS1** (RWY 24L at Twys V, W and Y — short distance between parallel runways; after landing 24R, manage taxi speed and expect to hold short of 24L), **HS2** (RWY 25L at Twy F — aircraft cross the 25L holding position markings without authorization; aircraft on Twy A instructed onto Twy F should expect to hold short of 25L), and **HS3** (Twy F from Twy A — surface incident risk; do not proceed onto Twy F without an explicit ATC clearance). The crossing zone between the north and south complexes (the Central Terminal Area crossfield taxiways, including Taxiway C13 and Taxiway R) has separately been the subject of an FAA Letter to Airmen on runway incursions specific to LAX's north complex — this is a well-documented, long-standing NTSB/FAA runway-safety focus area at this airport, not an isolated finding. Cross-ref [North America area brief (Los Angeles ARTCC / ZLA)](../../../../airspace/north-america.md).

### 3.3 Runway excursion  🟧
Displaced thresholds apply on three of the four physical runways: **07L +832 ft, 25R +957 ft** (south, outboard-of-terminal pair), **06R +537 ft, 24L +801 ft** (north, inboard pair). **07R/25L carries no displaced threshold** (full 11,095 ft usable both directions). **06L/24R** publishes no displaced threshold but an asymmetric ASDA/LDA (8,566 ft one direction vs the full 8,926 ft the other) — confirm the assigned direction's declared distance, not the physical runway length, before every departure/arrival. A **blast fence 180 ft east of RWY 25R** is noted in the Chart Supplement as capable of deflecting turbulence upward on departure. The two south-complex runways (07L/25R, 07R/25L) are not length-limited for any K Global type; the shorter 06L/24R (8,926 ft) remains non-limiting at this sea-level field but should not be assumed equivalent to the other three.

### 3.4 Weather threat  🟥
The Los Angeles Basin's **coastal marine layer ("June Gloom")** is the airport's signature weather hazard: low stratus/fog forms overnight along the coast and commonly persists into mid-morning at the field — even when areas a few miles inland are clear — dropping ceiling/visibility into IFR and, on the worst mornings, below CAT I minima. This is the direct operational reason CAT II/III ILS infrastructure exists on RWY 24R and RWY 25L. The marine layer is most persistent **May through July** and typically burns off by late morning to early afternoon. Separately, the LA Basin sees occasional **Santa Ana wind events** (offshore, dry, gusty, typically autumn–winter) strong enough to force the less-common **East Operations** configuration (arrivals 06L/07R, departures 06R/07L) when the wind is out of the east at 10 kt or greater. Convective activity is rare (Mediterranean/coastal climate); density-altitude performance is a non-issue at 127 ft elevation. See §14.

### 3.5 Operational considerations  🟥
Plan for **marine-layer-driven low-ceiling mornings May–July** and brief the crew for the CAT II/III 24R/25L plan; brief the **closely-spaced parallel geometry** and the published **HS1–HS3** crossing points as standing situational-awareness items on every arrival/departure regardless of weather. LAX carries **no legal curfew** and is an FAA Level 2 schedule-facilitation field (not formally slot-coordinated), but the long-standing voluntary **Over-Ocean Operation** and **Preferential Runway Use Program** materially shape which runway is assigned by time of day — confirm the active configuration on ATIS rather than assuming Normal ops. RFF, fuel and most ground-handling items are well above our fleet's needs (major US hub); the open items in §18 are largely secondary-source confirmations (mag-var epoch, exact ILS idents/frequencies, CBP hours) rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **HS1 — after landing RWY 24R, manage taxi speed and expect to hold short of RWY 24L** — the two north-complex runways are only ≈700 ft apart.
- **HS2/HS3 — do not cross RWY 25L via Twy F, or proceed onto Twy F from Twy A, without an explicit ATC clearance** — a published surface-incident/runway-incursion risk area.
- **Marine-layer fog/stratus (strongest May–Jul)** can drop ceiling/visibility below CAT I minima at the field even when inland LA is clear — expect the CAT II/III 24R/25L plan and possible holding/diversion contingency.
- **Displaced thresholds** on 07L (+832 ft), 25R (+957 ft), 06R (+537 ft), 24L (+801 ft) — brief the correct LDA, not the physical runway length; 07R/25L has none.
- **Wingspan-based taxiway restrictions apply widely to Code E/F aircraft:** Twy D between D7/D8 (north of Terminal 1) closed to wingspan >157 ft; aircraft with wingspan >214 ft must contact LAX Airside Ops for restrictions; outbound turn westbound from Twy D8 onto Twy D not permitted for wingspan >198 ft; left turn onto Twy C10 under power not authorized for wingspan >155 ft westbound on Twy C. **This captures essentially all K Global widebody types** — confirm routing with Ground before pushback. See §13/§17.
- **Aircraft with length >240 ft are prohibited on Taxiways C7, C8 and C9** between Taxiway C and Taxiway B — relevant to the largest K Global quads.
- **Blast fence 180 ft east of RWY 25R** can deflect turbulence upward on departure.
- **Simultaneous aircraft operations are prohibited** on Twys L and H9, and on Twy H2 and G, between RWY 07L/25R and RWY 07R/25L (south complex).
- **West remote gates 406–409:** use of open gates as a taxi path is prohibited; a southbound turn is not available from gates 408/409.
- Bird activity reported on and in the vicinity of the airport (Chart Supplement remark).
- **Practice instrument approaches and touch-and-go landings are prohibited** at LAX.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **closely-spaced parallel runway geometry** and the **HS1–HS3 published Hot Spot cluster** at the north/south-complex crossing. 🟥
- **Crew-qualification gate:** ILS CAT II/III currency required for full-capability ops to 24R/25L in low-visibility (marine-layer) conditions — confirm crew/aircraft CAT II/III currency before planning either as the primary approach. 🟧
- **Operating restrictions / bans:** Practice instrument approaches and touch-and-go landings prohibited; multiple wingspan/length-based taxiway restrictions (§4/§13); no RNP AR ban or circling-not-authorised note found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard US domestic/international arrival; confirm any CBP pre-clearance/notification requirements on the OFP. 🟧
- **Operations notes:** ANSP — FAA (Southern California TRACON approach; Los Angeles ARTCC (ZLA) en route); Airport operator — **Los Angeles World Airports (LAWA)**, City of Los Angeles; FSS — Hawthorne. Noise-sensitive airport — LAWA Noise Management office administers the Over-Ocean Operation and Preferential Runway Use Program (§12).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 confirmed — AirNav FAA facility data lists "Attendance: Continuous," retrieved 2026-07-26 | 🟩 |
| AD operating hours | H24 — major hub, no operating-hours restriction | 🟩 |
| Night / curfew restrictions | **No legal curfew.** Voluntary **Over-Ocean Operation** (since 1985): all westbound departures on RWY 24L/25R fly straight ahead until past the shoreline before any turn; over-ocean arrival routing used 0000–0630. **Preferential Runway Use Program:** daytime/evening (0700–2200) prefers outer runways (24R/25L) for arrivals and inner runways (24L/25R) for departures; during noise-sensitive hours (2200–0700) ATC maximizes use of inboard runways 06R/24L and 07L/25R and Taxiways C and E. **Noise-abatement single-runway ops 0000–0630 local: arrivals RWY 06R, departures RWY 25R.** Airport maintenance restricted 2300–0600. | 🟧 |
| RFF category | Index E — confirmed via AirNav FAA facility data | 🟩 |
| Fuel | Jet A confirmed on field (Signature Aviation, Atlantic Aviation FBOs); scheduled-carrier into-plane hours not confirmed | 🟧 |
| PCN / PCR | US Chart Supplement publishes **PCR** (Pavement Classification Rating) in place of ICAO PCN — see §7 for per-runway values | 🟩 |
| Customs | Tom Bradley International Terminal (TBIT/Terminal B) FIS hall; CBP hours reported 0600–2400 local (not confirmed 24h) | 🟧 |
| Handling / FBO | Full major-hub handling; Signature Aviation and Atlantic Aviation (GA/FBO fuel); LAWA Ramp Tower operates several terminal-ramp control frequencies | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCR | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06L | 8,926 × 150 ft | Asphalt-concrete, grooved / PCR 610/R/A/W/T | 8,926 | 8,926 | 8,566 | 8,566 | North complex, outer. No displaced threshold published; ASDA/LDA reduced vs TORA/TODA — confirm current chart 🟧 |
| 24R | 8,926 × 150 ft | Asphalt-concrete, grooved / PCR 610/R/A/W/T | 8,926 | 8,926 | 8,926 | 8,926 | Reciprocal — full length both declared distances. **ILS CAT II/III (ALSF-2)** — one of two primary low-vis arrival runways |
| 06R | 10,885 × 150 ft | Concrete, grooved / PCR 980/R/A/W/T | 10,285 | 10,285 | 10,285 | 9,748 | North complex, inner. **537 ft displaced thr.** Noise-abatement single-runway arrival RWY (0000–0630) |
| 24L | 10,885 × 150 ft | Concrete, grooved / PCR 980/R/A/W/T | 10,285 | 10,285 | 10,285 | 9,483 | **801 ft displaced thr.** **HS1** — short distance to 24R; manage taxi speed, expect hold short |
| 07L | 12,923 × 150 ft | Concrete, grooved / PCR 870/R/A/W/T | 12,091 | 12,091 | 12,091 | 11,259 | South complex, inner (nearest terminals). **832 ft displaced thr.** Longest physical runway at LAX; MALSR |
| 25R | 12,923 × 150 ft | Concrete, grooved / PCR 870/R/A/W/T | 12,091 | 12,091 | 12,091 | 11,134 | **957 ft displaced thr.** Standard over-ocean departure runway (Normal ops); MALSR |
| 07R | 11,095 × 200 ft | Asphalt-concrete, grooved / PCR 1070/R/A/W/T | 11,095 | 11,095 | 11,095 | 11,095 | South complex, outer. No displaced threshold — full length both directions. Widest runway at LAX (200 ft); MALSR |
| 25L | 11,095 × 200 ft | Asphalt-concrete, grooved / PCR 1070/R/A/W/T | 11,095 | 11,095 | 11,095 | 11,095 | **ILS CAT II/III (ALSF-2)** — one of two primary low-vis arrival runways. **HS2/HS3** — Twy F crossing point |

*Source: FAA Chart Supplement (d-TPP), Southwest volume, AIRAC cycle 2607, eff. 2026-07-09, as mirrored by SkyVector/AirNav (retrieved 2026-07-26). PCR is the US-domestic equivalent presentation of ICAO PCN; confirm ICAO-format PCN if required for a non-US operator manual. All distances in feet. North complex (06L/24R, 06R/24L) and south complex (07L/25R, 07R/25L) are separated by the Central Terminal Area and connected by crossfield taxiways (Taxiway C13, Taxiway R — the latter >3,400 ft long and 100 ft wide, built to accommodate A380/747-8-class aircraft) 🟧 tier-4 corroborated, not independently re-verified against a primary LAWA engineering document.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| D-ATIS | Los Angeles ATIS | 133.8 (Arrival) / 135.65 (Departure) | H24 (assumed) | Phone readback 310-646-2297 `[AirNav, retrieved 2026-07-26]` |
| Delivery | Los Angeles Clearance Delivery | 120.35 / 327.0 | H24 (assumed) | 🟧 |
| Ground | Los Angeles Ground | 121.4 (West) / 121.65 (North complex) / 121.75 (South complex) / 327.0 | H24 (assumed) | Complex-specific — take the assigned frequency 🟧 |
| Tower | Los Angeles Tower | 119.8 (Helicopters) / 120.95 (South complex) / 133.9 (North complex) / 239.3 (North complex & Heli) / 379.1 (South complex) | H24 (assumed) | Complex-specific — take the assigned frequency 🟧 |
| Approach | SoCal Approach (Southern California TRACON) | 124.3 (approach from west / departure to west) / 124.5 (225–044° radial from LAX) / 124.9 (090–224°) / 128.5 (045–089°), plus military discretes | H24 (assumed) | Sector-specific — busiest TRACON in the US; confirm current chart 🟧 |
| Departure | SoCal Departure (Southern California TRACON) | 124.3 (045–224°) / 125.2 (225–044°) / 263.025, plus military discretes | H24 (assumed) | Sector/procedure-specific — confirm current chart 🟧 |
| Centre / FIR | Los Angeles ARTCC (ZLA) | 128.2/351.7 (NE above 7,000 ft) · 134.75/285.5 (E above 7,000 ft) · 132.85/322.4 (SE above 7,000 ft) — used for Class B; additional en-route sector frequencies per current chart | H24 | See [North America area brief](../../../../airspace/north-america.md) |
| Ramp | LAWA Ramp Tower | Multiple terminal-ramp frequencies (e.g. 129.325 Twy C10, 129.4 Twy C7, 129.5 Twy C6, 130.5 Twy C9, 130.85 Twy C8, 131.45 Twy D9, 131.075 Twys K/L, 131.975 Twy M/C13) | Varies by ramp area | 🟧 confirm current assignment |

*Emergency 121.5/243.0. UNICOM 122.95. Source: FAA Chart Supplement via SkyVector/AirNav mirror (cycle 2607 eff. 2026-07-09), retrieved 2026-07-26 — treated as primary-equivalent. Cross-checked against the Los Angeles ARTCC (ZLA) VATSIM division reference (laartcc.org, retrieved 2026-07-26) — a network-sim document, **not regulatory**, but its published SID/STAR/runway-configuration content matched the FAA Chart Supplement data closely on every point checked.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | LAX | 113.60 | H24 | On/near field (≈1.3 NM from ARP per AirNav) |
| VOR | SMO | 110.80 | H24 | Santa Monica, ≈4.7 NM |
| VOR | VNY | 113.10 | H24 | Van Nuys, ≈17.3 NM |
| VOR | SLI | 115.70 | H24 | Seal Beach, ≈20.1 NM |
| NDB | SB (Petis) | 397 kHz | H24 | ≈52.4 NM — long-range cross-check only |
| ILS 06L–24R | — | — | H24 | ILS OR LOC published both ends 🟧 idents/frequencies not extractable from reachable free sources — verify current AIRAC chart |
| ILS 06R–24L | — | — | H24 | ILS OR LOC published both ends 🟧 idents/frequencies not extractable |
| ILS 07L–25R | — | — | H24 | ILS OR LOC published both ends 🟧 idents/frequencies not extractable |
| ILS 07R–25L | — | — | H24 | ILS OR LOC published both ends; **25L also carries the dedicated ILS RWY 25L (CAT II–III)** procedure 🟧 idents/frequencies not extractable |
| ILS 24R (CAT II–III) | — | — | H24 | Dedicated CAT II/III procedure — ALSF-2 lighting confirmed via Chart Supplement; ident/frequency not extractable from reachable free sources 🟧 |

*All eight runway ends publish an "ILS OR LOC" approach per the FAA d-TPP chart index (SkyVector/AirNav mirror, retrieved 2026-07-26), and 24R/25L additionally carry a dedicated "ILS RWY (CAT II–III)" procedure — confirmed from the chart-title index. Neither SkyVector's nor AirNav's public extract publishes the underlying localizer ident/frequency table (charts are referenced only as titled PDF links); these values genuinely cannot be confirmed from a reachable free source this pass — pull them from the current AIRAC chart. VOR/DME LAX and the surrounding VORs are corroborated across the FAA Chart Supplement mirror and AirNav.*

---

## 10. Arrival

- **Transition altitude / level:** TA 18,000 ft MSL / TL FL180 (US-wide standard) — verify no local override on current chart.
- **Speed:** 250 KIAS < FL100 (US standard); Class B speed restrictions apply within the LAX Class B surface area — confirm current chart.
- **Preferential runway logic:** **Normal ("west") ops** — the dominant configuration essentially year-round given prevailing onshore westerlies — assigns arrivals to **24R and 25L** (both CAT II/III equipped). **East ops** (wind ≥10 kt easterly) assign arrivals to **06L and 07R**. **Noise-abatement hours (0000–0630 local)** funnel arrivals onto **RWY 06R** only. Confirm the active configuration on ATIS.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 24R | ILS OR LOC RWY 24R, **ILS RWY 24R (CAT II–III)**, RNAV (RNP) Z RWY 24R, RNAV (GPS) Y RWY 24R | Primary Normal-ops arrival (north complex); CAT II/III currency required for low-vis use |
| 25L | ILS OR LOC RWY 25L, **ILS RWY 25L (CAT II–III)**, RNAV (RNP) Z RWY 25L, RNAV (GPS) Y RWY 25L | Primary Normal-ops arrival (south complex); CAT II/III currency required for low-vis use |
| 06L | ILS OR LOC RWY 06L, RNAV (RNP) Z RWY 06L, RNAV (GPS) Y RWY 06L | East-ops arrival |
| 07R | ILS OR LOC RWY 07R, RNAV (RNP) Z RWY 07R, RNAV (GPS) Y RWY 07R | East-ops arrival |
| 06R | ILS OR LOC RWY 06R, RNAV (RNP) Z RWY 06R, RNAV (GPS) Y RWY 06R | Noise-abatement (0000–0630) sole arrival runway |
| 24L | ILS OR LOC RWY 24L, RNAV (RNP) Z RWY 24L, RNAV (GPS) Y RWY 24L | Secondary Normal-ops arrival option |
| 07L | ILS OR LOC RWY 07L, RNAV (RNP) Z RWY 07L, RNAV (GPS) Y RWY 07L | Secondary Normal/East-ops arrival option |
| 25R | ILS OR LOC RWY 25R, RNAV (RNP) Z RWY 25R, RNAV (GPS) Y RWY 25R | Secondary Normal-ops arrival option |

- **STARs (names only):** ANJLL FOUR (RNAV), BASET FIVE, BAYST ONE (RNAV), BIGBR THREE (RNAV), BOGET TWO (RNAV), BRUEN TWO (RNAV), DIRBY TWO (RNAV), GOATZ TWO (RNAV), HLYWD ONE (RNAV), HUULL TWO (RNAV), IRNMN TWO (RNAV), KIMMO THREE, LEENA EIGHT, **MDNYT TWO (RNAV)** *(for use only between midnight and 0630 local — over-ocean noise-abatement arrival)*, MOORPARK FOUR, OCEAN THREE, OLAAA TWO (RNAV), RYDRR TWO (RNAV), SADDE EIGHT, SEAVU TWO, SNSTT TWO (RNAV), VISTA THREE, WAYVE ONE (RNAV), ZUUMA FOUR (RNAV).
- **LVP:** CAT II/III equipment and ALSF-2 lighting confirmed on 24R and 25L; trigger conditions per current chart. 🟧
- **Missed approach watch-items:** Terrain is not the driver (coastal plain, most finals track over the LA Basin or ocean); the operative missed-approach concern is re-sequencing into a very high-density Class B environment with closely-spaced parallel traffic on the opposing/adjacent runway.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** CATALINA EIGHT, CHATY FIVE, DARRK THREE (RNAV), DOTSS TWO (RNAV), GARDY FOUR (RNAV), GORMAN SEVEN, **KYLOW ONE (RNAV)** *(over-ocean SID, westbound/northbound)*, LADYJ FOUR (RNAV) *(NA between 2100–0700 local)*, LAXX ONE, MOOOS TWO (RNAV), MUELR FOUR (RNAV), ORCKA FIVE (RNAV) *(NA between 2100–0700 local)*, OSHNN ONE (RNAV), PERCH THREE, PNDAH TWO (RNAV), SEAL BEACH EIGHT, SEBBY THREE, SKWRL TWO (RNAV), **STHBY ONE (RNAV)** *(over-ocean SID, southbound/eastbound)*, SUMMR TWO (RNAV), TRTON THREE (RNAV), VENTURA EIGHT, WNNDY THREE (RNAV), ZILLI FIVE (RNAV).
- **RNP / climb-gradient requirements:** RNAV SIDs likely require RNP-1 (or better) equipage per FAA standard — confirm gradient/equipage on the current chart. No hot-and-high-style gradients expected at sea level. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** A dedicated Take-Off Minimums / Diverse Vector Area chart is published for LAX — exact figures not extracted this pass; verify current AIRAC. 🟧
- **Start-up / push-back:** Aircraft use minimal power when taxiing in the vicinity of terminals due to blast hazard (Chart Supplement remark); confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** LAX is an **FAA Level 2 schedule-facilitation airport** — no formal IATA slot coordination; Clearance Delivery on 120.35/327.0. Peak-hour flow management (ground delay/EDCT-style) can still apply in practice during high demand or marine-layer disruption. 🟧
- **De-icing:** Mediterranean/coastal climate — de-icing rarely required; not confirmed as a routinely provisioned service. Verify only for a rare winter cold event.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **Over-Ocean Operation (OOO)** — voluntary program in place since 1985; all departures during over-ocean operations are made on **RWY 24L and 25R**, and pilots must fly straight ahead until past the shoreline before beginning any turn unless specifically instructed otherwise by ATC. Over-ocean **approach** routing is used 0000–0630 local. **Preferential Runway Use Program:** during the day/evening (0700–2200) LAX prefers the **outer runways (24R/25L) for arrivals** and the **inner runways (24L/25R) for departures**; during noise-sensitive hours (2200–0700) ATC maximizes use of the **inboard runways 06R/24L and 07L/25R** and Taxiways C and E. **Noise-abatement single-runway ops apply 0000–0630 local: arrivals RWY 06R, departures RWY 25R.**
- **Night noise / dB limits:** No specific published per-movement dB limit found in reachable sources; the runway-use programs above are the operative noise-management mechanism. Aircraft maintenance is restricted 2300–0600. LAWA monitors for deviations (early turns, east departures 0000–0630) and issues notifications/requests a response. 🟧
- **Engine run-up restrictions:** Not published in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** No published idle-reverse restriction found — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody Code E/F operations concentrate at the **Tom Bradley International Terminal (Terminal B / TBIT)**, including the West Gates (201–225, opened 2021) and the original TBIT concourse (gates 130–159); skybridges connect TBIT to Terminals 3 and 4. Terminals 1–8 form the horseshoe (T1/T3 north side, T4–T8 south side) around TBIT on the west. See Dispatch §2/§3 for detail. 🟩
- **Push-back:** Not confirmed as mandatory vs. self-manoeuvre in reachable source; aircraft are instructed to use minimal power near terminals due to blast hazard (Chart Supplement remark). 🟧
- **Standard taxi routes:** LAX ATCT publishes named taxi routes (North Route via Twy C/B to Twy N; South Route via Twy E/D to Twy P; Coastal Route via Twy Y; Sunset Route via Twy C to Twy Y) per VATSIM ZLA division reference material — network-sim doc, not regulatory, confirm actual routing with Ground on the day. 🟧
- **Hot spots / tight taxiways:** 🟥 **HS1** (RWY 24L at Twys V, W, Y — short distance between parallel runways; manage taxi speed after landing 24R, expect hold short of 24L); **HS2** (RWY 25L at Twy F — crossing without authorization); **HS3** (Twy F from Twy A — surface incident risk, do not proceed without ATC clearance). Separately: **Twy D between D7/D8** (north of Terminal 1) closed to wingspan >157 ft; aircraft with wingspan **>214 ft** must contact LAX Airside Ops (424-646-5292) for restrictions; outbound turn westbound from Twy D8 onto Twy D not permitted for wingspan >198 ft; left turn onto Twy C10 under power not authorized for wingspan >155 ft westbound on Twy C; **aircraft with length >240 ft prohibited on Twys C7, C8, C9** between Twy C and Twy B; simultaneous aircraft operations prohibited on Twys L/H9 and Twy H2/G between the south-complex runways. West remote gates 406–409: open gates not to be used as a taxi path; no southbound turn available from gates 408/409.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean/coastal climate. Prevailing wind is onshore westerly/southwesterly, consistent with Normal ("west") ops being the dominant configuration essentially year-round.
- **Seasonal hazards:** **Coastal marine-layer stratus/fog ("June Gloom"), strongest May–Jul** — the airport's defining weather threat, routinely dropping ceiling/visibility at the field into the morning even when the LA Basin inland is clear; directly why CAT II/III capability exists on 24R/25L. Occasional **Santa Ana wind events** (offshore, dry, gusty — typically autumn–winter) are strong enough to force East Operations (wind ≥10 kt easterly). No significant convective/thunderstorm season; no density-altitude concern at 127 ft elevation.
- **Local effects:** Coastal onshore-flow effects; bird activity on/near the airport (Chart Supplement remark). See also [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) for general handling of the Santa Ana/offshore-wind case.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: current runway configuration (Normal/East/noise-abatement), CAT II/III equipment status on 24R/25L, HS1–HS3 area restrictions, runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Hub / base.**
- **Nearest suitable alternates:** Company preferred alternates **KSNA** (John Wayne/Orange County, ≈31 NM) and **KBUR** (Hollywood Burbank, ≈16 NM) `[VAMSYS mirror 2026-07-26]` — both plain-ICAO planning references (no dedicated folder yet). Confirm suitability, runway/RFF adequacy and current minima per leg; note both share the same LA-Basin marine-layer weather system on the worst mornings.
- **Fuel-uplift notes:** Jet A confirmed on field via multiple FBOs (Signature Aviation, Atlantic Aviation); scheduled-carrier into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the south-complex runways (12,923 ft / 11,095 ft); the shorter 06L/24R (8,926 ft) remains non-limiting at sea level. The operative planning risk is **marine-layer ceiling/visibility exposure May–Jul** and the closely-spaced-parallel traffic environment, not aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- As a hub/base, LAX is the base field for the K Global fleet generally rather than a single-type consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). No field-elevation or field-length performance penalty for any type at this sea-level, long-runway field. The operative fleet-wide consideration is **ground-movement wingspan/length restrictions (§13)**: the FAA Chart Supplement's ">214 ft wingspan, contact Airside Ops" threshold captures the **A388 (A380-800, ≈262 ft span)** and **B748 (747-8, ≈224 ft span)** outright, and the ">240 ft length" Twy C7–C9 restriction captures the **B748 and A346 (A340-600)** — confirm exact per-tail dimensions against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) rather than assuming. The narrower >155/157/198 ft thresholds are wide enough to potentially affect most K Global widebody types (A339, A346, A359, A35K, A388, B748, B77W, B77F, B789) on the specific taxiways named in §13 — confirm ground routing with Ground/Ramp before pushback on any Code E/F movement. Also see [`OM E — Wake Turbulence Separation`](../../../../../flight-ops/wake-turbulence-separation.md) given the closely-spaced parallel operating environment.

---

## 18. Open items (🟧 — confirm against FAA AD-2/d-TPP / current AIRAC)

- **Magnetic variation** — reported as 12° E (2020-epoch value via FAA Chart Supplement/AirNav data); not independently re-confirmed against the current AIRAC cycle.
- **ILS component idents/frequencies** for all eight runway ends, including the dedicated CAT II/III procedures on 24R/25L — not text-extractable from any reachable free source this pass (chart-title/PDF references only); pull from the current AIRAC chart.
- **Take-off minima / DVA exact figures** — a dedicated chart is published but figures were not extracted this pass.
- **CBP/customs hours at TBIT** — reported 0600–2400 local by secondary/traveller-facing sources; not independently confirmed as exactly 24h or non-24h from a primary CBP record. Relevant for a late/overnight or diverted arrival.
- **Closely-spaced parallel runway separation distances** (≈700 ft north / ≈800 ft south) — sourced to a tier-4 corroboration (industry commentary), not an official LAWA/FAA engineering figure; directionally consistent with the published HS1 hot-spot description but not independently verified to the foot.
- **Terminal/gate wayfinding renumbering** — LAWA has an active $43M terminal/gate/station renumbering and wayfinding project ahead of the 2028 LA Olympics; no final numbering decision had been announced as of the most recent reachable reporting. Confirm current terminal/gate nomenclature before relying on any terminal reference in this pack.
- **Push-back mandatory-vs-self-manoeuvre policy, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability** — none confirmed in reachable sources.
- **Fuel into-plane provider/hours for scheduled-carrier operations** — Jet A confirmed on field generally; scheduled-carrier-specific arrangement not confirmed.
- **PCN in ICAO format** (US Chart Supplement publishes PCR) — convert/confirm if required.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **FAA Chart Supplement (d-TPP), Southwest volume, AIRAC cycle 2607, eff. 2026-07-09** — runway dimensions/declared distances/PCR, communications, remarks (wingspan/length taxiway restrictions, Hot Spot references, noise-abatement remarks), SID/STAR/IAP chart index — mirrored via SkyVector, https://skyvector.com/airport/KLAX (retrieved 2026-07-26).
- AirNav — KLAX Los Angeles International Airport — https://www.airnav.com/airport/KLAX (retrieved 2026-07-26). *ARFF Index E, ATS/AD continuous attendance, communications frequency table, fuel providers, ownership/operator data, remarks.*
- FAA — Airport Diagrams / Airport Hot Spots (Southwest chart supplement region) — https://www.aopa.org/ustprocs/20251002/SW-3/lax_hot_spot.pdf (retrieved 2026-07-26). *HS1–HS3 hot-spot descriptions for KLAX.*
- Los Angeles World Airports (LAWA) — Rules and Regulations, Section 13 (Noise Abatement) — https://www.lawa.org/-/media/lawa-web/lawa-rules-and-reg/lax-rules/section-13---noise-abatement.ashx (retrieved 2026-07-26). *Over-Ocean Operation and Preferential Runway Use Program, primary operator statement.*
- Los Angeles World Airports (LAWA) — "Efforts to Reduce or Limit Aircraft Noise at LAX" — https://www.lawa.org/lawa-environment/noise-management/lawa-noise-management-lax/efforts-to-reduce-or-limit-aircraft-noise-at-lax (retrieved 2026-07-26).
- **Los Angeles ARTCC (ZLA) — VATSIM division** — https://laartcc.org/airport/KLAX (retrieved 2026-07-26). *Network-sim doc, **not regulatory** — used to cross-check Normal/East/noise-abatement runway-configuration logic, SID/STAR names, ODP text and named ground taxi routes; content matched the FAA Chart Supplement data on every point checked.*
- LinkedIn — "LAX Arrival Runway Assignments" (aviation-industry commentary) — https://www.linkedin.com/pulse/lax-arrival-runway-assignments-jason-herman-cam (retrieved 2026-07-26). *Tier-4 corroboration of the ≈700/800 ft closely-spaced-parallel separation figures and inboard/outboard runway-use logic — not an official LAWA/FAA source.*
- U.S. Customs and Border Protection — TBIT passenger-processing coverage (secondary reporting) — https://www.cbp.gov/newsroom/local-media-release/cbp-and-lax-roll-out-passenger-processing-technology-tom-bradley (retrieved 2026-07-26). *CBP hours corroborated via secondary/traveller-facing sources, not an official CBP hours table.*
- The Epoch Times — "LAX Plans to Update Terminal and Gate Numbers Ahead of 2028 LA Olympics" — https://www.theepochtimes.com/bright/lax-plans-to-update-terminal-and-gate-numbers-ahead-of-2028-la-olympics-5648764 (retrieved 2026-07-26). *Terminal/gate renumbering project status.*
- OurAirports — https://ourairports.com/airports/KLAX/ — ARP/elevation cross-check (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
