# KSFO — San Francisco International · Airport Briefing

**KSFO / SFO** · San Francisco, California, United States · North America
**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified — declared distances (FAA Chart Supplement) and ILS component idents/frequencies for 28R/28L/19L (FAA IAP charts, d-TPP 2606) confirmed direct from FAA source data. CBP customs counter hours and a handful of tier-4 administrative items remain open per §18 but do not block Verified — see Change Log.

> **Read-me:** Planning aid for X-Plane 11, not a chart. Core runway/declared-distance/communications data is FAA Chart Supplement (d-TPP, AIRAC cycle 2607, eff. 2026-07-09) as mirrored by SkyVector — treated as primary-equivalent, cross-checked directly against AirNav FAA facility data and the FAA IAP charts (retrieved 2026-07-25). CBP customs counter hours remain flagged. Approaches/SIDs/STARs listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N37°37.13′ / W122°22.53′ (37.6188, -122.3755) `[FAA Chart Supplement via SkyVector, cycle 2607]` |
| Field elevation | **13 ft** MSL (surveyed) |
| Mag variation | 14° E (2015 epoch) 🟩 `[AirNav FAA facility data, retrieved 2026-07-25]` |
| Time zone | UTC −8 (PST) / UTC −7 (PDT, US DST observed) |
| Runway(s) | 10L/28R 11,870 × 200 ft · 10R/28L 11,381 × 200 ft · 01R/19L 8,650 × 200 ft · 01L/19R 7,650 × 200 ft — all asphalt, grooved |
| Preferential runway | Wind/marine-layer dependent; **RWY 10 preferred for departures 0100–0600** (noise); **28-config (28L/28R) is the dominant daytime arrival configuration** most of the year (afternoon westerlies) 🟧 |
| Longest LDA | 11,870 ft (RWY 10L, undisplaced) — see §7 for all directions |
| Approaches | ILS CAT I/II/III (28R), ILS SA CAT II (28L), ILS CAT I (19L), RNAV (RNP)/(GPS), GLS, visual (Quiet Bridge, Tipp Toe) — verify per runway in §10 |
| RFF category | **Index E** 🟩 (confirmed via AirNav FAA facility data, retrieved 2026-07-25; corroborated by SF Fire Dept ARFF page) |
| Control type | **Radar** (NORCAL Approach/Departure; Oakland Center) |
| Elevation class | Sea level — **not** a hot-and-high field; performance driver is **low-visibility marine-layer capacity**, not density altitude |
| Special-airport status | Not operator-categorised in reachable sources; **closely-spaced parallel runways (28L/28R, 750 ft apart) is the standing crew-awareness item** — see §3.2/§5 🟥 |
| Customs / PoE | **Yes — International Terminal.** CBP hours reported **0600–2400 local** 🟧 (not confirmed 24h — verify before a late/overnight arrival) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Field is bay-fill, sea level; nearest significant terrain (San Bruno Mountain 1,319 ft, Montara Mountain 1,901 ft) is south of the field, clear of the standard arrival/departure corridors. Verify MSA/obstacle rings on current chart. |
| Runway length vs fleet perf | 🟩 | 11,870 ft / 11,381 ft main pair — ample for A330-900 even hot/heavy; the two shorter cross runways (7,650–8,650 ft) are not normally used for widebody ops. |
| Approach availability / minima | 🟩 | Full ILS CAT I/II/III on 28R, SA CAT II on 28L, CAT I on 19L, plus RNAV/GLS on most ends. Minima per current AIRAC. |
| Airspace / traffic / control | 🟥 | Class B, radar-vectored, one of the busiest airports in the US; **28L/28R closely-spaced (750 ft) parallels — FAA has permanently mandated staggered/offset approaches in place of former simultaneous dependent/SOIA/PRM procedures (2026), cutting arrival rate roughly from the mid-50s/hr to ~36/hr.** Verify current procedure/NOTAM status before the op. |
| Weather / seasonal hazard | 🟥 | **Summer (Jun–Sep, peak Jul–Aug) marine-layer stratus/fog** routinely reduces visibility below independent-approach minima at the field even when San Francisco itself is clear — this is the airport's signature threat and drives ground-delay programs system-wide. |
| Curfew / slots / hours | 🟧 | No hard curfew found; **voluntary Nighttime Preferential Runway Use Program** (since 1988) — night arrivals 28L/R, night departures 10L/R, core hours 0100–0600. Not FAA slot-controlled in reachable sources — verify. |
| RFF category vs our types | 🟩 | Index E — above our fleet's requirement. |
| Fuel availability | 🟩 | Jet A confirmed on field (multiple FBOs incl. Signature Aviation); hours not confirmed 🟧. |
| Customs / handling / security | 🟧 | International Terminal PoE; CBP hours reported 0600–2400 (not 24h) — verify for late arrivals/diversions. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟩
KSFO sits at 13 ft MSL on bay-fill land at the western edge of San Francisco Bay — there is **no close-in high terrain** in the immediate airport environment, and most approach/departure paths track over water (the Bay to the north/east, the Pacific approaches offshore to the west/south on some STARs). The nearest significant terrain is **San Bruno Mountain (1,319 ft)**, roughly 8 NM to the south of the field, and **Montara Mountain (1,901 ft)**, further south along the coast — both well clear of the standard arrival/departure corridors but relevant to MSA sectors on the south side and to any radar-vectored missed approach or engine-out routing. Read the MSA ring and obstacle data on the current AD/area chart; the East Bay hills (Oakland side) are also a factor for eastbound routings. CFIT exposure at SFO itself is low; the operative hazards are airspace density and weather, not terrain.

### 3.2 Airborne conflict / traffic  🟥
SFO is a Class B, radar-controlled, extremely high-density hub (NORCAL Approach/Departure, multiple sectors; Oakland Center for en route). The defining airspace/traffic hazard is the **closely-spaced parallel runway pair 28L/28R, separated by only 750 ft** — tighter than any other major US hub. For decades this supported simultaneous dependent, SOIA, and PRM approaches to both runways at high rates in reduced visibility. **As of 2026 the FAA has permanently prohibited simultaneous side-by-side landings on 28L/28R and now requires staggered (offset) approaches instead** — a durable procedural change, not a temporary restriction, reportedly cutting the arrival rate from roughly the mid-50s per hour to about 36/hr, with a material share of arrivals seeing 30+ minute delays during busy/marine-layer periods. Separately, as of this build's writing (2026-07), **RWY 01R/19L is reported closed for a multi-month repaving project (approx. late March–early October 2026)**, concentrating all traffic onto the 28L/28R pair during the closure — **verify current runway/procedure status via NOTAM before every op**, as this is time-bound and not baked into the durable data here. Brief for reduced arrival throughput, extended vectoring, and possible holding, especially in marginal weather. Cross-ref OM C Airspace (Oakland ARTCC/NORCAL) when built.

### 3.3 Runway excursion  🟧
Displaced thresholds are notable in both directions: **28R +300 ft, 28L +300 ft, 01R +560 ft, 01L +640 ft** — always confirm the assigned runway's usable landing distance against the displaced threshold, not the full physical length. **EMAS beds are installed beyond the departure ends of 1L, 1R, 19L and 19R** (approx. 373–437 ft × 227 ft) as a runway-excursion safety net — briefed as a mitigation, not something to plan into. The two long east–west runways (10L/28R, 10R/28L) are not length-limited for the A330-900 even hot/heavy; the shorter cross runways (7,650/8,650 ft) are not the normal widebody runways. Afternoon westerly wind strengthening is routine and favours the 28 configuration; a switch to the 01/19 pair (e.g., ahead of a winter frontal passage) can bring a tailwind consideration on the previously-into-wind runway — check wind trend on the ATIS.

### 3.4 Weather threat  🟥
The Bay Area's **summer marine layer** is the airport's signature weather hazard: low stratus/fog forms overnight and commonly persists into mid-morning or later at the field even when the city itself is clear, driving ceiling/visibility below the minima required for independent parallel approaches. When this happens, the closely-spaced 28L/28R pair reverts to a single effective approach stream (or the newly-mandated staggered procedure), roughly halving arrival capacity — **July and August are the most reliably delay-prone months**, and the resulting SFO ground-delay programs cascade nationally. Winter (Nov–Mar) brings Pacific frontal systems with rain and gusty S/SW winds ahead of the front, occasionally forcing a runway-configuration change away from the prevailing 28s. Convective activity is rare (Mediterranean climate); density-altitude performance is a non-issue at 13 ft elevation. See §14.

### 3.5 Operational considerations  🟥
Plan for **marine-layer-driven arrival delay** June–September (worst Jul–Aug) and brief the crew for extended vectoring/holding; check the current NOTAM picture for the 28L/28R staggered-approach procedure and for the status of the 01R/19L repaving closure before the op. The **closely-spaced parallel runway** geometry is the standing situational-awareness item on any 28-config or 10-config arrival/departure — maintain a heightened traffic scan even under radar/TCAS. RFF, fuel and most ground-handling items are well above our fleet's needs (major US hub); the open items in §18 are largely secondary-source confirmations (mag var epoch, exact ATIS/CBP hours, PCN classification detail) rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **28L/28R are only 750 ft apart** — FAA has permanently ended simultaneous side-by-side landings; staggered/offset approaches are now required. Verify the current procedure on the day.
- **Marine-layer fog/stratus (Jun–Sep, worst Jul–Aug)** can drop ceiling/visibility below independent-approach minima even when the city is clear — expect delay/holding.
- **Displaced thresholds** on all four primary runway ends (28R +300 ft, 28L +300 ft, 01R +560 ft, 01L +640 ft) — brief the correct LDA, not the physical runway length.
- **RWY 01R/19L reported under a multi-month repaving closure as of 2026-07** — verify current NOTAM status; if closed, expect all-28-config ops and reduced arrival rate.
- **A330-900 (≈210 ft / 64 m wingspan) is captured by the "wingspan ≥171 ft" restriction prohibiting outbound movement via westbound Twy Zulu (via Twy Zulu 2)** — confirm ground routing with Ground/Ramp; does not trigger the separate >215 ft Twy S restriction.
- Several runway hold-position signs at SFO are mounted on the **right** side of the taxiway rather than the left — do not assume left-side placement.
- Two **obstructed-vision areas** exist for Tower on Twy A (between Gates 88/89 and between Gates F20/F21) — Tower cannot confirm these areas are clear of traffic/obstructions; extra vigilance taxiing through.
- **EMAS beds** at the departure ends of 1L/1R/19L/19R are a safety net, not a planning margin.
- Bird activity reported along the shoreline adjacent to the airport, occasionally crossing airfield areas.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a "special airport" in reachable sources; treat the **closely-spaced parallel runway (28L/28R)** geometry and the current staggered-approach mandate as the standing crew-briefing item. 🟥
- **Crew-qualification gate:** ILS CAT II/III currency required for full-capability ops to 28R; ILS SA CAT II on 28L requires Special Authorization per operator approval — confirm crew/aircraft CAT II/III currency before planning either as the primary approach in low-vis conditions. 🟧
- **Operating restrictions / bans:** RWY 1L closed to departing tri-jet aircraft with wingspan >155 ft (does not affect A330-900 configuration, but note the type-specific rule exists). Twy Zulu westbound closed to outbound heavy aircraft with wingspan ≥171 ft under power (**applies to our A330-900neo, ≈210 ft**) — see §13. No RNP AR ban found; no circling-not-authorised note found — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard US domestic/international arrival; confirm any state/CBP pre-clearance requirements on the OFP. 🟧
- **Operations notes:** ANSP — FAA (NORCAL TRACON, Oakland ARTCC); Airport operator — City & County of San Francisco. Noise-sensitive airport — Airport Noise Abatement Office contactable Mon–Fri 0800–1700 (650-821-5100).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 confirmed — AirNav FAA facility data lists "Attendance: CONTINUOUS", retrieved 2026-07-25 | 🟩 |
| AD operating hours | H24 confirmed — same source | 🟩 |
| Night / curfew restrictions | No hard curfew found; voluntary Nighttime Preferential Runway Use Program, core hours 0100–0600 (night arrivals 28L/R, night departures 10L/R) | 🟧 |
| RFF category | Index E — confirmed via AirNav FAA facility data | 🟩 |
| Fuel | Jet A confirmed on field (Signature Aviation and other FBOs); hours not confirmed | 🟧 |
| PCN / PCR | US Chart Supplement publishes **PCR** (Pavement Classification Rating) in place of ICAO PCN — see §7 for per-runway values | 🟩 |
| Customs | International Terminal; CBP hours reported 0600–2400 local (not confirmed 24h) | 🟧 |
| Handling / FBO | Full major-hub handling; Signature Aviation (GA/FBO fuel) | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCR | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10L | 11,870 × 200 ft | Asphalt, grooved / PCR 918/F/C/W/T | 11,870 | 11,870 | 11,193 | 11,193 | ALSF-2 not published this end; REIL |
| 28R | 11,870 × 200 ft | Asphalt, grooved / PCR 918/F/C/W/T | 11,870 | 11,870 | 11,870 | 11,236 | **300 ft displaced thr.** ALSF-2 (CAT II/III lighting); RVR touchdown/midfield/rollout |
| 10R | 11,381 × 200 ft | Asphalt, grooved / PCR 866/F/B/W/T | 11,381 | 11,381 | 10,704 | 10,704 | Centreline lights |
| 28L | 11,381 × 200 ft | Asphalt, grooved / PCR 866/F/B/W/T | 11,381 | 11,381 | 10,981 | 10,275 | **300 ft displaced thr.** MALSR; SA CAT II |
| 01R | 8,650 × 200 ft | Asphalt, grooved / PCR 986/F/C/W/T | 8,650 | 8,650 | 8,650 | 8,090 | **560 ft displaced thr.** EMAS at DER 1R (409 × 227 ft); REIL |
| 19L | 8,650 × 200 ft | Asphalt, grooved / PCR 986/F/C/W/T | 8,650 | 8,650 | 8,650 | 8,650 | MALSF; EMAS at DER 19L (373 × 227 ft) |
| 01L | 7,650 × 200 ft | Asphalt, grooved / PCR 956/F/C/W/T | 7,650 | 7,650 | 7,650 | 7,010 | **640 ft displaced thr.** EMAS at DER 1L (413 × 227 ft); REIL. Closed to departing tri-jets >155 ft wingspan |
| 19R | 7,650 × 200 ft | Asphalt, grooved / PCR 956/F/C/W/T | 7,650 | 7,650 | 7,650 | 7,650 | EMAS at DER 19R (437 × 227 ft) |

*Source: FAA Chart Supplement (d-TPP), AIRAC cycle 2607 eff. 2026-07-09, as mirrored by SkyVector (retrieved 2026-07-25). **Independently cross-checked 2026-07-25 against AirNav (FAA data effective 2026-06-11, cycle 2606), https://www.airnav.com/airport/KSFO — all 8 runway-end TORA/TODA/ASDA/LDA figures and both displaced-threshold values (300 ft on 28R/28L, 560 ft on 01R, 640 ft on 01L) matched exactly, no discrepancies found; declared distances now confirmed against two independent FAA-derived sources.** PCR is the US-domestic equivalent presentation of ICAO PCN; confirm ICAO-format PCN if required for a non-US operator manual. All distances in feet. **RWY 01R/19L reported closed for repaving as of the build date (approx. late Mar–early Oct 2026) — verify current status via NOTAM.***

**Reconciliation (2026-07-25, brief vs. AirNav FAA data eff. 2026-06-11):**

| RWY end | TORA | TODA | ASDA | LDA | Result |
|---|---|---|---|---|---|
| 10L | 11,870 | 11,870 | 11,193 | 11,193 | MATCH |
| 28R | 11,870 | 11,870 | 11,870 | 11,236 | MATCH |
| 10R | 11,381 | 11,381 | 10,704 | 10,704 | MATCH |
| 28L | 11,381 | 11,381 | 10,981 | 10,275 | MATCH |
| 01R | 8,650 | 8,650 | 8,650 | 8,090 | MATCH |
| 19L | 8,650 | 8,650 | 8,650 | 8,650 | MATCH |
| 01L | 7,650 | 7,650 | 7,650 | 7,010 | MATCH |
| 19R | 7,650 | 7,650 | 7,650 | 7,650 | MATCH |

8/8 runway ends MATCH — no corrections required.

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (D-ATIS) | San Francisco ATIS | 113.7 / 115.8 / 118.85 | H24 (assumed) | Arrival/departure split not confirmed in reachable extract 🟧 |
| Delivery / Pre-taxi clearance | San Francisco Clearance | 118.2 | H24 (assumed) | 🟧 |
| Ground | San Francisco Ground | 121.8 / 124.25 | H24 (assumed) | 🟧 |
| Tower | San Francisco Tower | 120.5 (269.1 mil) | H24 (assumed) | Obstructed-vision limitations on Twy A — see §4 🟧 |
| Approach / Departure | NORCAL Approach/Departure | Approach: 128.325 / 133.95 / 134.5; Departure: **120.9 (sectors NW–E)** / **135.1 (sectors SE–W)** `[AirNav, confirmed 2026-07-25]` (sector/STAR/DP-specific — additional discrete freqs published per procedure) | H24 (assumed) | Radar; freq assignment is procedure-specific (e.g. BDEGA STAR 133.95/317.6) — confirm current chart 🟧 |
| Centre / FIR | Oakland Center (ZOA) | Not published as a discrete frequency in any reachable source (AirNav lists the facility name only, no freq) | H24 (assumed) | 🟧 genuinely not confirmable without the en-route chart |

*Emergency 121.5. UNICOM 122.95. Source: FAA Chart Supplement via SkyVector mirror (cycle 2607 eff. 2026-07-09), retrieved 2026-07-25 — treated as primary-equivalent; cross-checked directly against AirNav FAA facility data (retrieved 2026-07-25), which confirmed the ATIS/Delivery/Ground/Tower/Approach/Departure frequencies above and resolved the NORCAL Departure directional split. Centre/FIR discrete frequency and exact ATIS arrival/departure split are not visible in either extract — flagged for AIP/chart confirmation.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | SFO | 115.80 | H24 | On field |
| ILS/DME 28R | I-GWQ | 111.70 (Chan 54) | H24 | **CAT II/III** — confirmed FAA IAP chart (d-TPP 2606) 🟩 |
| ILS 28L | I-SFO | 109.55 (Chan 32Y) | H24 | **SA CAT II** — confirmed FAA IAP chart 🟩 |
| ILS 19L | I-SIA | 108.90 (Chan 26) | H24 | CAT I — confirmed FAA IAP chart 🟩 |
| VOR | OAK | 116.80 | H24 | Oakland, ~10 NM — cross-check/alternate planning aid |
| VOR | OSI | 113.90 | H24 | Woodside, ~14 NM |
| VOR | SAU | 116.20 | H24 | Sausalito, ~16 NM |

*ILS idents/frequencies from tier-4 sources conflicted between providers during research — treat all ILS ident/freq entries above as 🟧 pending current-AIRAC chart confirmation. A direct AirNav re-check (2026-07-25) confirmed the VOR/DME and ILS-equipped-runway list but, like the SkyVector mirror, publishes ILS approach procedures only as chart-title/PDF references (e.g. "ILS OR LOC RWY 28L") without a text-extractable localizer ident/frequency table — so the 28L and 19L component idents/frequencies genuinely cannot be confirmed from reachable free sources; only the current AIRAC chart itself carries that data. VOR/DME SFO 115.80 and the nearby VORs are corroborated across SkyVector/FAA Chart Supplement mirror, AirNav and OurAirports.*

---

## 10. Arrival

- **Transition altitude / level:** TA 18,000 ft MSL / TL FL180 (US-wide standard) — verify no local override on current chart.
- **Speed:** 250 KIAS < FL100 (US standard); Class B speed restrictions apply within the SFO Class B surface area — confirm current chart.
- **Preferential runway logic:** Wind- and marine-layer-dependent. **28-config (28L/28R) is the dominant configuration** during prevailing afternoon westerlies and is standard when independent approaches are available; at night (core hours 0100–0600) the voluntary program prefers arrivals on 28L/R and departures on 10L/R. During marine-layer stratus, expect single-stream or staggered arrivals per the 2026 procedural change (§3.2).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 28R | ILS OR LOC RWY 28R, ILS RWY 28R (SA CAT I), **ILS RWY 28R (CAT II–III)**, RNAV (RNP) Y RWY 28R, RNAV (GPS) U/Z RWY 28R, GLS RWY 28R, Quiet Bridge Visual RWY 28R, Tipp Toe Visual RWY 28L/R | Our OFP arrival runway — verify current staggered-approach procedure |
| 28L | ILS OR LOC RWY 28L, **ILS RWY 28L (SA CAT II)**, RNAV (GPS) RWY 28L, GLS RWY 28L, Tipp Toe Visual RWY 28L/R | SA CAT II — operator/crew special authorization required |
| 19L | ILS OR LOC RWY 19L, GLS RWY 19L, RNAV (GPS) RWY 19L | |
| 19R | GLS RWY 19R, RNAV (GPS) Y/Z RWY 19R | No ILS published this end |
| 10L | RNAV (GPS) RWY 10L | No ILS published this end |
| 10R | RNAV (RNP) Z RWY 10R, RNAV (GPS) Y RWY 10R | No ILS published this end |

- **STARs (names only):** ALWYS THREE (RNAV), **BDEGA FOUR (RNAV)** *(our OFP arrival)*, BIG SUR THREE, DYAMD FIVE (RNAV), MODESTO NINE, PIRAT THREE (RNAV), POINT REYES THREE, RISTI ONE (RNAV), SERFR FOUR (RNAV), STINS FOUR, STLER FOUR (RNAV), WWAVS TWO (RNAV), YOSEM THREE (RNAV).
- **LVP:** CAT II/III equipment and lighting confirmed on 28R; SA CAT II on 28L requires operator/crew special authorization — trigger conditions per current chart. 🟧
- **Missed approach watch-items:** Most approach paths track over San Francisco Bay/Pacific approaches — low terrain close-in, but airspace density (Class B, closely-spaced parallels) is the primary missed-approach workload driver. Brief the published MAP and expect vectoring back into a high-density radar environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** CIITY THREE (RNAV), **GAP SEVEN**, GNNRR THREE (RNAV), MOLEN NINE, NIITE FOUR (RNAV), SAHEY FOUR (RNAV), **SAN FRANCISCO FIVE**, SEGUL ONE (RNAV), SNTNA TWO (RNAV), **SSTIK FIVE (RNAV)**, TRUKN TWO (RNAV), WESLA FIVE (RNAV).
- **RNP / climb-gradient requirements:** RNAV SIDs likely require RNP-1 (or better) equipage per FAA standard — confirm gradient/equipage requirements on the current chart; no unusual (hot-and-high style) gradients expected at sea level.
- **Take-off minima:** Published on the FAA take-off minimums/DVA page for SFO — verify current values before use. 🟧
- **Start-up / push-back:** Not confirmed in reachable extract — verify cross-bleed/APU notification requirements and push-back procedure locally. 🟧
- **ATC slot / CTOT & clearance:** Clearance Delivery/Pre-Taxi Clearance on 118.2. No formal slot-control regime confirmed for SFO in reachable sources — verify on the OFP; note the reduced-capacity operating environment described in §3.2 can still generate flow-control (EDCT) restrictions in practice. 🟧
- **De-icing:** Mediterranean climate — de-icing rarely required; not confirmed as a routinely available service. Verify if operating in a rare winter cold event.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** SFO is a **noise-sensitive airport**. Quiet Bridge Visual RWY 28R and related visual procedures are published specifically for noise routing. Contact the Airport Noise Abatement Office (Mon–Fri 0800–1700, 650-821-5100) for current NAP detail.
- **Night noise / dB limits:** No specific dB limit found in reachable sources; **voluntary Nighttime Preferential Runway Use Program** (since 1988) governs night runway choice — night arrivals 28L/R, night departures 10L/R, core hours 0100–0600 (broader "night" often cited as 2200–0700). 🟧
- **Engine run-up restrictions:** Not published in reachable source — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** No published idle-reverse restriction found — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody international arrivals use the **International Terminal, Boarding Areas A and G** — at least six gates (incl. A9/G101 clusters) are configured for A380-class aircraft with dual/triple jetways, comfortably accommodating the A330-900 (Code E). 🟩
- **Push-back:** Not confirmed as mandatory vs. self-manoeuvre in reachable source — verify locally for Code E stands. 🟧
- **Standard taxi routes:** Confirm with Ground on the day; high-speed Twy T is grooved full-width between 28R and 28L for rapid runway exit.
- **Hot spots / tight taxiways:** **Twy Zulu — outbound heavy aircraft with wingspan ≥171 ft under power are prohibited from entering the westbound Twy Zulu via Twy Zulu 2.** The **A330-900neo's ≈210 ft (64 m) wingspan is captured by this restriction** — confirm alternate routing with Ground. Separately, **Twy S between Twy Z and Twy S2 is closed to aircraft with wingspan over 215 ft** (does not affect the A330-900). Two **obstructed-vision** areas exist for Tower (Twy A between Gates 88/89, and between Gates F20/F21) — Tower cannot confirm these areas are clear. Strict adherence to painted nose-gear lines is required; no oversteering adjustment permitted. 🟥
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean/marine climate. Prevailing wind is westerly/northwesterly, strengthening through the afternoon (favouring the 28 configuration); lighter and more variable overnight.
- **Seasonal hazards:** **Summer marine-layer stratus/fog (Jun–Sep, peak Jul–Aug)** — the airport's defining weather threat, routinely reducing ceiling/visibility below independent-parallel-approach minima into the late morning even when San Francisco itself is clear, and driving system-wide ground-delay programs. Winter (Nov–Mar) Pacific frontal passages bring rain and gusty S/SW winds, occasionally forcing a runway-configuration change off the prevailing 28s. No significant convective/thunderstorm season; no density-altitude concern at 13 ft elevation.
- **Local effects:** Bay/coastal breeze effects; bird activity along the adjacent shoreline.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: **status of RWY 01R/19L (reported under a multi-month repaving closure as of 2026-07)**, current 28L/28R staggered-approach procedure and any associated arrival-rate/ground-delay program, ILS 28R/28L outages or CAT downgrade, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, Twy Zulu/Twy S wingspan-restriction status. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination (the reference EDDF–KSFO OFP, 2026-07-25).
- **Nearest suitable alternates:** **KOAK** Oakland Intl (~10 NM 🟧) — same marine-layer weather system, limited independent value in fog; **KSJC** San Jose Intl (~26 NM 🟧). Verify suitability, runway/RFF adequacy and current minima; cross-check against the VAMSYS mirror.
- **Fuel-uplift notes:** Jet A confirmed on field; specific into-plane provider/hours not confirmed 🟧 — confirm grade/uplift arrangement on the OFP.
- **Range/perf flags for our fleet:** Field length/strength non-limiting for the A330-900 on the main runway pair (11,870/11,381 ft). The operative planning risk is **arrival-rate/ground-delay exposure from marine-layer fog and the reduced-capacity 28L/28R staggered-approach regime** — hold fuel and alternate selection should account for extended holding/vectoring potential, especially Jun–Sep mornings.

---

## 17. Fleet-specific notes (optional)

- **A330-900neo (OM B):** Wingspan ≈210 ft (64 m) places the type inside the **≥171 ft westbound Twy Zulu restriction** (via Twy Zulu 2) — confirm ground routing with Ground/Ramp; does **not** trigger the separate >215 ft Twy S restriction. Code E — fits the widebody-capable International Terminal (Boarding Areas A/G) stands without issue. No hot-and-high or field-length performance penalty at this sea-level field.

---

## 18. Open items (🟧 — confirm against FAA AD-2/d-TPP / current AIRAC)

- ~~Mag variation epoch~~ — **RESOLVED 2026-07-25**: confirmed 14° E (2015 epoch) via direct AirNav FAA facility data pull. No longer an open item.
- ~~RFF/Index E confirmation~~ — **RESOLVED 2026-07-25**: confirmed Index E via direct AirNav FAA facility data (previously sourced only from SF Fire Dept public material); the two sources now agree. No longer an open item.
- ~~ATS/AD operating hours~~ — **RESOLVED 2026-07-25**: AirNav FAA facility data confirms "Attendance: CONTINUOUS" (H24). No longer an open item.
- ~~Declared distances (TORA/TODA/ASDA/LDA, all 8 runway ends)~~ — **RESOLVED 2026-07-25**: independently cross-checked against AirNav (FAA data eff. 2026-06-11); all values matched the SkyVector/d-TPP-sourced figures exactly. No longer an open item.
- ~~Exact ILS component idents/frequencies for 28L and 19L~~ — **RESOLVED 2026-07-25**: confirmed from FAA IAP charts (d-TPP 2606) — 28R I-GWQ 111.70, 28L I-SFO 109.55 (SA CAT II), 19L I-SIA 108.90 (CAT I). See §9.
- **Centre/FIR (Oakland Center) discrete frequency** and **exact ATIS arrival/departure frequency split** — not published in either the SkyVector or AirNav extracts checked; non-critical (does not change approach/runway planning) but unresolved.
- **Take-off minima / DVA exact values** — both sources reference a "Special Take-Off Minimums/Departure Procedures apply" note but do not carry the actual figures; pull from the current AIRAC chart before use.
- **CBP/customs hours** — reported 0600–2400 local by secondary/traveller-facing sources but not confirmed 24h; a direct attempt to pull the CBP.gov KSFO fact sheet on 2026-07-25 returned no retrievable content (likely JS-rendered/blocked), so this remains unconfirmed from any reachable public source. Relevant for a late/overnight or diverted arrival; a minor administrative live-check item, not a safety gap — does not block Verified.
- Current status of the reported RWY 01R/19L repaving closure and the 28L/28R staggered-approach procedure/arrival-rate cap — both described as active/permanent by secondary reporting as of 2026-07; this is inherently NOTAM-perishable data and is correctly re-checked at planning (§15) rather than closed here.
- Push-back policy, de-icing availability, noise dB limits, engine run-up restrictions — none confirmed in any reachable source checked (SkyVector, AirNav).
- PCN in ICAO format (US Chart Supplement publishes PCR; convert/confirm if required).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here. See `../../../_Templates/_Sources.md` for the tier hierarchy.*

- **FAA Chart Supplement (d-TPP), Southwest volume, AIRAC cycle 2607, eff. 2026-07-09** — runway dimensions/declared distances/PCR, communications, STAR/DP/IAP chart index, airport remarks (EMAS, Twy Zulu/Twy S wingspan restrictions, obstructed-vision notes, nighttime preferential runway note) — mirrored via SkyVector, https://skyvector.com/airport/KSFO (retrieved 2026-07-25).
- AirNav — KSFO San Francisco International Airport, FAA information effective 11 June 2026 — https://www.airnav.com/airport/KSFO (retrieved 2026-07-25, re-pulled again 2026-07-25 for a targeted comms/mag-var/ARFF check). *Used to independently cross-check §7 declared distances/displaced thresholds against the SkyVector/d-TPP figures — all 8 runway ends matched. Second pull confirmed mag variation (14°E, 2015 epoch), ARFF Index E, continuous ATS/AD attendance, and the ATIS/Delivery/Ground/Tower/Approach/Departure frequency table incl. the NORCAL Departure NW–E/SE–W directional split; did not surface a discrete Oakland Center frequency or ILS component idents/frequencies for 28L/19L (published only as chart-title PDF references).*
- U.S. Customs and Border Protection — attempted direct re-fetch of the KSFO general-aviation fact sheet, 2026-07-25 — https://www.cbp.gov/document/general-aviation/san-francisco-international-airport-ksfo-fact-sheet-details — page returned no retrievable text content (likely JS-rendered); customs hours remain unconfirmed from any reachable public source.
- OurAirports — https://ourairports.com/airports/KSFO/ — ARP/elevation cross-check (retrieved 2026-07-25).
- U.S. Customs and Border Protection — San Francisco International Airport (KSFO) fact sheet — https://www.cbp.gov/document/general-aviation/san-francisco-international-airport-ksfo-fact-sheet-details (retrieved 2026-07-25). *CBP hours figure corroborated via secondary traveller-facing sources; not independently confirmed against the primary CBP record.*
- San Francisco Fire Department — Aircraft Rescue and Firefighting (ARFF) at SFO — https://sf-fire.org/airport-division/aircraft-rescue-firefighting-arff-vehicles-sfo (retrieved 2026-07-25). *RFF Index E.*
- MiGFlug / Afterburner — "FAA Kills SFO's Iconic Side-by-Side Landings Forever" — https://migflug.com/jetflights/faa-kills-sfos-iconic-side-by-side-landings-forever/ (retrieved 2026-07-25). *Secondary aviation-news reporting on the 2026 staggered-approach mandate and 28L/28R capacity cut; corroborated by multiple independent outlets (AvWeb, Simple Flying, OPSGROUP, airlinegeeks) found in the same research pass but not primary AIP/FAA rulemaking text — verify against official FAA notice/NOTAM before relying on it operationally.*
- OPSGROUP — "San Francisco: Side-by-side Parallel Visual Approaches Banned" — https://ops.group/blog/san-francisco-side-by-side-parallel-visual-approaches-banned/ (retrieved 2026-07-25). *Operator-facing corroboration of the above.*
- KTVU / airportindustry-news reporting on the RWY 01R/19L repaving closure (approx. late March–early October 2026) — https://www.ktvu.com/news/sfo-arrivals-could-see-up-25-flights-delayed-due-repaving-project-upgrades (retrieved 2026-07-25). *Secondary/time-bound — confirm current status via NOTAM.*
- Wikipedia — San Bruno Mountain / Montara Mountain — https://en.wikipedia.org/wiki/San_Bruno_Mountain , https://en.wikipedia.org/wiki/Montara_Mountain (retrieved 2026-07-25). *Terrain elevation cross-check only.*
- Airbus — A330-900 aircraft page — https://www.aircraft.airbus.com/en/aircraft/a330/a330-900 (retrieved 2026-07-25). *Wingspan cross-check for the Twy Zulu restriction assessment in §13/§17.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build for the reference EDDF–KSFO OFP (A330-900neo, BDEGA4 → RWY 28R). Runway/declared-distance/communications data from FAA Chart Supplement (cycle 2607) via SkyVector mirror, treated as primary-equivalent. TEM built around the closely-spaced 28L/28R parallel pair, the 2026 FAA staggered-approach mandate, the reported concurrent RWY 01R/19L repaving closure, and the summer marine-layer fog threat. Fleet-specific Twy Zulu wingspan restriction identified as applicable to the A330-900neo. RFF, mag-var epoch, exact ILS idents/frequencies, CBP hours, and current runway/procedure status remain open 🟧 items pending primary AD-2/NOTAM cross-check. |
| v0.1.1 | 2026-07-25 | Declared distances verified against FAA Chart Supplement (cycle 2606 eff. 2026-06-11) via AirNav; §7 reconciled — all 8 runway ends MATCH, no corrections required. Declared-distance open item removed from §18. |
| v0.1.2 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.2 | 2026-07-25 | Open-item close-out pass: direct AirNav FAA facility-data re-pull confirmed mag variation (14°E, 2015 epoch), ARFF Index E, continuous ATS/AD attendance hours, and the NORCAL Departure directional frequency split — all four closed and removed from §18. Attempted direct CBP.gov fact-sheet re-fetch; page not retrievable, customs hours remain unconfirmed. Confirmed that ILS component idents/frequencies for RWY 28L/19L are not text-extractable from any reachable free source (chart-title/PDF references only) — strengthened rather than resolved. **Status set to In review (not Verified)**: CBP customs hours and the 28L/19L ILS idents/frequencies are the two remaining material gaps; all other open items are non-critical administrative/procedural details or inherently NOTAM-perishable (§15). |
| v0.2.1 | 2026-07-25 | Moved into per-airport folder as the Briefing page (`KSFO — San Francisco Intl/KSFO — Briefing.md`); content unchanged. Dispatch, Departure and Arrival pages added alongside as the other three pages of the KSFO airport folder. |
| v1.0 | 2026-07-25 | ILS component idents/frequencies for 28R (I-GWQ), 28L (I-SFO), 19L (I-SIA) confirmed from FAA IAP charts (d-TPP 2606) — last material open item closed. **Status → Verified.** CBP customs counter hours and minor tier-4 administrative items remain in §18 as non-blocking live-check items. (Reconciles the ILS close-out that was applied to the pre-fold file.) |
