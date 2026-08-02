# KSAN — San Diego Intl · Airport Briefing

**KSAN / SAN** · San Diego, California, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the FAA Chart Supplement / Airport Master Record (5010) as mirrored by AirNav, cross-checked against OurAirports; approaches/SIDs/STARs/departure procedures are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 32.73356, -117.18967 `[Navigraph navdata]` |
| Field elevation | **17 ft** `[Navigraph navdata]` (AirNav/FAA 5010 cross-check gives 16 ft estimated, runway-end spot elevations 13.9–16.4 ft — normal small-scale variance, non-material) |
| Mag variation | 🟧 **~11° E** — derived from the published magnetic/true runway headings (RWY 09 095°M/106°T, RWY 27 275°M/286°T; FAA data via AirNav) — not independently cross-checked against a current epoch chart value |
| Time zone | UTC-8 (PST) / **UTC-7 (PDT, US DST observed)** |
| Runway(s) | **Single runway 09/27** — 9,401 × 200 ft (2,865 × 61 m), asphalt/concrete, grooved |
| Preferential runway | Wind-driven; westerly (RWY 27, landing toward the ocean) is the dominant flow direction — see §10/§11 |
| Longest LDA | 7,591 ft (RWY 27) / 7,280 ft (RWY 09) — both **well short of the full 9,401 ft** physical length due to large displaced thresholds; see §7 |
| Approaches | RWY 09: **ILS Y/LOC Y**, **ILS Z/LOC Z**, RNAV (GPS) · RWY 27: **RNAV (RNP) Z**, **RNAV (GPS) Y**, **LOC** — **no ILS glideslope to RWY 27** |
| RFF category | **ARFF Index D** 🟧 — see §6 and §2 (may not cover our largest fleet types) |
| Control type | **Radar** — Lindbergh Tower/Ground on the field; **SoCal Approach/Departure** (Southern California TRACON); **Los Angeles ARTCC (KZLA)** en route — see [Los Angeles (KZLA) FIR brief](../../../../airspace/fir/north-america/los-angeles-kzla.md) |
| Elevation class | Sea-level (17 ft) — **not** hot-and-high; the defining performance/planning driver here is the **single runway + close-in terrain/urban obstacle environment**, not density altitude |
| Special-airport status | 🟥 **Single-runway field in a dense urban bowl** — no reciprocal/parallel runway exists; any runway closure or disabled aircraft closes the entire field. RWY 27 approach passes close over downtown high-rises/Balboa Park with a large displaced threshold and no ILS — see §3/§5 |
| Customs / PoE | **Yes** — international airport of entry, Terminal 2; CBP administrative desk hours Mon–Fri 09:00–17:00 with operational coverage for scheduled international arrivals 🟧 (exact off-hours staffing not independently confirmed) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | KLAX, KLAS `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Downtown San Diego high-rises and a close-in parking structure sit directly under the RWY 27 approach path; Point Loma high ground and Cowles Mountain (1,593 ft, city high point) bound the metro area. Not a mountain-airport MSA problem, but a genuine close-in obstacle/CFIT-adjacent environment — see §3.1. |
| Runway length vs fleet perf | 🟧 | Single runway, 9,401 ft physical length, but declared LDA is materially shorter (7,591 ft RWY 27 / 7,280 ft RWY 09) due to large displaced thresholds. Non-limiting for typical widebody landing weights but leaves less margin than the raw runway length suggests — confirm performance for each leg/weight. |
| Approach availability / minima | 🟧 | RWY 27 has **no ILS glideslope** (LOC/RNAV only) and a steeper-than-standard 3.50° PAPI; RWY 09 has ILS but reduced approach lighting complexity is not confirmed. Field is reported to carry relatively high landing minima (ceiling/visibility) versus a typical ILS CAT I field, attributed to the short-runway/close-in-obstacle environment — verify exact minima on current AIRAC. |
| Airspace / traffic / control | 🟧 | Busy Class B/C-adjacent terminal airspace under Southern California TRACON (SoCal Approach/Departure), sharing the basin with KLAX and several reliever fields; single-runway capacity constraint compounds any flow event. |
| Weather / seasonal hazard | 🟥 | Coastal marine-layer stratus/fog is the field's defining weather threat, concentrated Oct–Feb, and is the number one weather-related cause of delay/diversion/cancellation at this field — see §3.4/§14. |
| Curfew / slots / hours | 🟥 | No hard curfew, but a long-standing (since 1976) **voluntary/regulatory nighttime noise-restriction program 23:30–06:30** with per-violation financial penalties for non-Stage-3-equivalent/loud aircraft — see §6/§12. |
| RFF category vs our types | 🟧 | ARFF Index D is published; Index D covers aircraft up to ~159 ft overall length — several K Global widebody types (e.g. B77W, B748, A388) exceed this, which would normally require Index E coverage on notification. Confirm current index and prior-notice requirement before planning the largest types into this field. |
| Fuel availability | 🟩 | Signature Flight Support FBO reports 24-hour Jet A/100LL availability. |
| Customs / handling / security | 🟧 | International airport of entry confirmed (Terminal 2); exact off-hours CBP staffing model and gate-space/handling constraints noted in AIP-style remarks (restricted gate space, customs services and aircraft servicing/parking) are a recognised limitation — see §6/§13. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
San Diego Intl sits at sea level in a dense urban bowl rather than a mountain environment, but it carries a genuine close-in obstacle/CFIT-adjacent profile that is unusual for a major commercial field. The **RWY 27 approach** (landing to the west, over downtown) passes low over Balboa Park and Hillcrest before crossing directly above a multi-story parking structure and city high-rises in the final quarter-mile — the structure and surrounding buildings sit close enough to the extended centreline that the runway carries a large 1,810 ft displaced threshold and a steeper-than-standard 3.50° PAPI glide path (versus the RWY 09 side's 3.30°). FAA obstruction data for the runway environment records a 31 ft tree at 674 ft from the runway (385 ft left of centreline, 15:1 slope to clear), a published approach-surface ratio of 44:1 to the displaced threshold, a 61 ft sign at 250 ft from the runway (500 ft right of centreline), and a +40 ft light pole 110 ft from the runway end (260 ft right) — a tightly constrained obstacle environment immediately around the runway ends. On the wider metro scale, **Point Loma** forms high ground west/southwest of the field (relevant to the RWY 09 offshore/bay approach sector) and **Cowles Mountain** (1,593 ft, the city's highest point) lies to the east — neither is a factor on the charted approach/departure paths but both are cited locally as the terrain bounding the San Diego basin. The controlling mitigation is procedural: fly the charted RNAV/LOC/ILS exactly, respect the displaced thresholds, and never treat this as a "normal" visual field despite its short-runway feel — verify the current MSA/obstacle DP on the chart before every arrival.

### 3.2 Airborne conflict / traffic 🟧
KSAN sits inside the busy Southern California terminal complex, sharing airspace and TRACON coverage (Southern California TRACON, "SoCal Approach/Departure") with Los Angeles, Orange County, Ontario and several general-aviation reliever fields, and abuts military airspace/traffic near NAS North Island and MCAS Miramar. The field itself has a single runway, so all arrival and departure traffic funnels through one physical strip — there is no parallel or crossing runway to absorb a flow disruption. Cross-ref [Los Angeles (KZLA) FIR brief](../../../../airspace/fir/north-america/los-angeles-kzla.md) §9, which lists KSAN as the "south-basin alternate; single runway, terrain-constrained" diversion field for the ARTCC.

### 3.3 Runway excursion 🟧
Both runway ends carry large displaced thresholds — 1,000 ft on RWY 09 and 1,810 ft on RWY 27 — which materially shorten the usable landing distance versus the 9,401 ft physical pavement (LDA 7,280 ft and 7,591 ft respectively; see §7). These figures are non-limiting for typical widebody landing weights but leave less margin than the raw runway length implies, particularly in a tailwind or on a wet/contaminated surface (rare in this climate, but not impossible during winter Pacific storm systems). Practice approaches and touch-and-go operations are prohibited at the field per published remarks — plan every approach as a full-stop, terminal-style operation.

### 3.4 Weather threat 🟥
The **coastal marine layer** is San Diego's signature weather hazard: cold Pacific water combined with a temperature inversion traps low stratus/fog against the coast, most frequently October–February, with dense fog (visibility ≤¼ mile) reported on the order of two nights per month during that window — though it can occur in any month. Low ceiling/visibility from the marine layer is reported as the number one weather-related cause of delay, diversion and cancellation at this field, and the short-runway/close-in-obstacle environment is cited as a reason the field carries relatively high landing minima compared with a typical ILS CAT I runway. Build schedule buffer and a firm diversion trigger (KLAX/KLAS) for any arrival planned in the autumn/winter fog season, especially early morning before the marine layer burns off. See §14.

### 3.5 Operational considerations 🟥
Three durable constraints define ops planning at this field: (1) it is a genuine **single-runway airport** — any runway closure, disabled aircraft, or even a prolonged ground stop on 09/27 closes the entire field with no alternate runway to fall back on; (2) the **RWY 27 close-in obstacle/displaced-threshold environment** (§3.1) demands a stabilised, charted approach every time, with no ILS glideslope available on that end; and (3) the **gate-constrained apron/limited-footprint site** — published remarks explicitly cite restricted gate space, customs servicing and aircraft parking/servicing limitations as a recognised constraint of the field (see §13). RFF coverage (ARFF Index D) should be confirmed against our largest fleet types before planning them into KSAN (§2).

---

## 4. Cautions & Warnings

- **RWY 27 approach passes close over downtown high-rises, Balboa Park/Hillcrest and a multi-story parking structure on short final** — fly the charted LOC/RNAV approach precisely; no ILS glideslope is published to this end.
- **Large displaced thresholds on both runway ends** (1,000 ft RWY 09 / 1,810 ft RWY 27) — do not assume the full 9,401 ft is available for landing; see §7 for exact LDA.
- **PAPI glide angle is steeper on RWY 27 (3.50°)** than RWY 09 (3.30°) — brief the correct visual reference for the assigned runway.
- **No reciprocal/parallel runway** — a disabled aircraft or closure on 09/27 closes the entire airport; carry a firm diversion trigger.
- **Practice approaches and touch-and-go operations are prohibited** — plan every approach as a full-stop.
- **Marine-layer fog is a recurring autumn/winter hazard**, concentrated Oct–Feb — check current/forecast conditions and hold a diversion plan.
- **Wingspan-limited taxi routing**: aircraft exiting RWY 09 at TWY D and turning right onto TWY Bravo are limited to a maximum 136 ft wingspan (B757-300W-equivalent) — this excludes every K Global widebody type from that specific exit/turn combination.
- **Restricted gate space / apron footprint** is a published, recognised limitation of the field — confirm stand availability before planning a widebody rotation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a restricted-crew "special airport" in reachable public sources, but the **single-runway/close-in-obstacle RWY 27 approach** is a standing crew-briefing item given the lack of ILS glideslope, steep PAPI and displaced threshold. 🟥
- **Crew-qualification gate:** No published CAT II/III or special-qualification requirement found (RWY 27 has no ILS at all); a full RNAV/LOC approach briefing and stabilised-approach discipline is the operative requirement. 🟧
- **Operating restrictions / bans:** Practice approaches and touch-and-go operations prohibited; special takeoff minimums and departure procedures are published for the field (see §11) — verify current AIRAC before use. 🟧
- **Overflight / entry / permits:** Standard US domestic/international arrival; no special state permit required beyond normal customs/immigration processing for an international arrival. 🟩
- **Operations notes:** ANSP — FAA Air Traffic Organization (Lindbergh Tower/Ground; Southern California TRACON approach/departure). Airport operator — San Diego County Regional Airport Authority.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground per published hours; airfield reported to operate sunset to sunrise for some services — confirm current hours 🟧 | 🟧 |
| AD operating hours | Scheduled commercial ops essentially H24 subject to the noise program below | 🟧 |
| Night / curfew restrictions | No hard curfew, but a long-standing **voluntary/regulatory nighttime noise-restriction program**: takeoffs generally restricted 23:30–06:30, with additional Stage-3-equivalent/EPNdB-based restrictions in defined evening/night windows and escalating financial penalties for violations ($2,000 / $6,000 / $10,000 per violation tier) — see §12. 🟥 | 🟥 |
| RFF category | **ARFF Index D** | 🟧 |
| Fuel | Jet A / 100LL — Signature Flight Support FBO, reported 24-hour availability | 🟩 |
| PCN | Not published in reachable sources; weight-bearing capacity reported as Single wheel 120,000 lb / Double wheel 250,000 lb / Double tandem 550,000 lb / Dual double-tandem 1,120,000 lb (FAA 5010 data) | 🟧 |
| Customs | International airport of entry (Terminal 2); CBP administrative office hours Mon–Fri 09:00–17:00 — 🟧 exact off-hours/weekend staffing model for scheduled international arrivals not independently confirmed | 🟧 |
| Handling / FBO | Signature Flight Support (FBO — GA/charter); airline ground handling per carrier arrangement — not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 9,401 × 200 ft (2,865 × 61 m) | Asphalt/concrete, grooved, excellent condition | 8,280 ft | 9,401 ft | 8,280 ft | **7,280 ft** | Displaced threshold **1,000 ft**; ILS/LOC-DME; PAPI 3.30° left; MALSR approach lighting |
| 27 | 9,401 × 200 ft (2,865 × 61 m) | Asphalt/concrete, grooved, excellent condition | 9,401 ft | 9,401 ft | 9,401 ft | **7,591 ft** | Displaced threshold **1,810 ft** (large — clears the close-in downtown/parking-structure obstacle environment, §3.1); LOC-DME only, **no ILS glideslope**; PAPI 3.50° right (steeper than standard); MALS approach lighting (threshold to 1,400 ft) |

*Single physical runway 09/27 — there is no reciprocal or parallel runway at this field. Source: FAA Airport Master Record (5010) / Chart Supplement data as mirrored by AirNav (retrieved 2026-07-26); cross-checked against OurAirports (displaced-threshold figures consistent). All distances in feet; convert for metric planning as needed. Displaced thresholds materially reduce LDA versus the 9,401 ft physical length on both ends — this is the field's central runway-planning fact.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | San Diego ATIS | 134.8 | — | 🟧 hours not confirmed |
| Delivery | San Diego Clearance Delivery | 125.9 | — | |
| Ground | Lindbergh Ground | 123.9 | — | Used 0000–0600 local for Terminal 2 ramp-area access when Ramp Control is not staffed (see §13) |
| Tower | Lindbergh Tower | 118.3 / 338.225 | — | |
| Approach | SoCal Approach | 119.6 (West) / 124.35 (East) | — | Southern California TRACON — sector-specific, take the assigned frequency |
| Departure | SoCal Departure | 119.6 (West) / 124.35 (East) | — | Southern California TRACON |
| Centre / FIR | Los Angeles ARTCC (KZLA) | Per current AIRAC | H24 | See [Los Angeles (KZLA) FIR brief](../../../../airspace/fir/north-america/los-angeles-kzla.md) |
| Ramp Control | San Diego Ramp | 129.775 (primary) / 131.975 (secondary) | 0600–2400 local | Required for Terminal 2 gate/ramp/island/West RON access; Ground 123.9 covers this function 0000–0600 |

*Source: FAA Chart Supplement / AirNav mirror (retrieved 2026-07-26); cross-checked against OurAirports frequency list (matching). Treat exact current-cycle frequencies as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VORTAC | MZB (Mission Bay) | 117.80 | H24 (assumed) | Local area navaid, ~3 NM radial/distance from the field |
| VORTAC | PGY (Poggi) | — | H24 (assumed) | ~13 NM |
| VOR/DME | TIJ (Tijuana) | 116.50 | H24 (assumed) | ~17 NM, cross-border reference |
| VORTAC | OCN (Oceanside) | — | H24 (assumed) | ~33 NM N |
| VORTAC | JLI (Julian) | 113.75 | H24 (assumed) | ~39 NM E |
| ILS/LOC-DME 09 | Per current chart | Per current chart 🟧 | H24 (assumed) | Serves RWY 09 only |
| LOC-DME 27 | Per current chart | Per current chart 🟧 | H24 (assumed) | Serves RWY 27 — **no glideslope component** |

*Source: AirNav nearby-navaid extract (FAA data, retrieved 2026-07-26); ILS/LOC frequencies not individually extracted this pass — pull from the current AIRAC chart. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** US standard 18,000 ft MSA/TA; transition level by QNH — no local override found. 🟧
- **Speed:** Standard 250 KIAS below 10,000 ft MSL (14 CFR 91.117); SoCal TRACON speed control applies in the terminal area.
- **Preferential runway logic:** Wind-driven single-runway configuration; the prevailing onshore westerly flow favours **RWY 27** (landing toward downtown/over the parking-structure environment, §3.1) as the dominant configuration, with **RWY 09** used in the reciprocal/offshore-wind case ("the flip," per local terminology).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 09 | ILS Y or LOC Y RWY 09 | Per chart | Per chart | ILS available; verify minima |
| 09 | ILS Z or LOC Z RWY 09 | Per chart | Per chart | Alternate ILS/LOC variant |
| 09 | RNAV (GPS) RWY 09 | Per chart | Per chart | |
| 27 | RNAV (RNP) Z RWY 27 | Per chart | Per chart | RNP AR-type procedure — confirm operator/aircraft authorisation |
| 27 | RNAV (GPS) Y RWY 27 | Per chart | Per chart | |
| 27 | LOC RWY 27 | Per chart | Per chart | **No glideslope** — non-precision only on this end |

- **STARs (names only):** **BARET FIVE** — verify current AIRAC for the active transition/runway assignment.
- **LVP:** No CAT II/III infrastructure identified at this field (RWY 27 has no ILS at all); low-visibility arrivals in marine-layer conditions rely on the RNAV/LOC procedures above, and the field is reported to carry relatively high landing minima versus a typical ILS CAT I runway because of the short-runway/close-in-obstacle profile — confirm current published minima on the AIRAC chart before planning close to marine-layer minima. 🟧
- **Missed approach watch-items:** Terrain/obstacle-driven on the RWY 27 side given the close-in downtown/parking-structure environment (§3.1); fly the published missed approach exactly and expect vectoring back into the busy SoCal terminal area — verify climb-gradient/turn constraints on the current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **BORDER SEVEN** (departure procedure) — verify current AIRAC for runway/transition assignment.
- **RNP / climb-gradient requirements:** Special takeoff minimums and departure procedures are published for this field given the surrounding terrain/obstacle environment — verify exact requirements on the current chart before every departure; do not assume standard takeoff minima apply. 🟧
- **Take-off minima:** Published per FAA TERPS as special minimums for the field — not transcribed here; verify current AIRAC/Chart Supplement. 🟧
- **Start-up / push-back:** Ramp Control (129.775/131.975, 0600–2400) governs Terminal 2 gate/ramp movement; Ground 123.9 covers the same function 0000–0600. Confirm push-back/start procedure locally given the constrained apron (§13).
- **ATC slot / CTOT & clearance:** No IATA slot-coordination level identified for this field in reachable sources; standard FAA ATC clearance-delivery procedure applies (125.9). 🟧
- **De-icing:** **Essentially NIL** — coastal Southern California climate; de-icing infrastructure/provisioning not a standing requirement at this field. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** San Diego operates a long-standing (since 1976) voluntary/regulatory nighttime noise-restriction program rather than a hard legal curfew. Nighttime noise is limited to 70 dB in nearby residential areas 23:30–06:30; daytime/evening/night noise thresholds are tiered at approximately 90 EPNdB (07:00–19:00), 85 EPNdB (19:00–22:00) and 80 EPNdB (22:00–07:00) at the takeoff reference point.
- **Night noise / dB limits:** Takeoffs are restricted 22:00–23:30 and 06:30–07:00 for aircraft that are not Stage-3-certificated-equivalent or that exceed 104 EPNdB at the takeoff reference point; takeoffs are further restricted 23:30–06:30 under the core nighttime program. Public-safety and genuine emergency operations are exempted.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — given the reduced LDA on both runway ends (§7), full reverse thrust is a reasonable planning assumption pending operator/type policy confirmation. 🟧
- **Curfew infringement consequence:** Violations of the time-of-day noise restriction carry escalating civil penalties — $2,000 (first infraction in a rolling six-month period), $6,000 (second), $10,000 (third) — assessed by an airport noise-abatement review panel, which also considers exemptions (e.g. ATC-caused delay, medical emergency).

---

## 13. Ground operations

- **Stands for our types:** Terminal 2 (East Concourse ~13 gates, West Concourse ~19 gates) is the field's international/widebody-capable terminal; the new Terminal 1 (Phase 1A opened September 2025, 19 gates, growing toward 30 by 2028) is primarily domestic. Published operational remarks explicitly flag **restricted gate space, customs services and aircraft servicing/parking** as a recognised limitation of the field — confirm widebody stand availability before planning a rotation here. 🟧 | 🟧
- **Push-back:** Ramp Control (Terminal 2 gates/ramp, 129.775/131.975, 0600–2400; Ground 123.9, 0000–0600) governs push-back/ramp movement; mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Ramp on the day; the field's compact single-runway/limited-taxiway-system layout leaves little routing flexibility compared with a multi-runway hub.
- **Hot spots / tight taxiways:** 🟥 Published remarks include: aircraft exiting **RWY 09 at TWY D and turning right onto TWY Bravo are limited to a maximum wingspan of 136 ft** (B757-300W-equivalent) — this excludes every K Global widebody type from that exit/turn combination; aircraft crossing **RWY 09/27 on TWY C6** must hold short of TWY C6 facing west on TWY C, parallel to the runway; taxiing aircraft are prohibited from passing to the south of aircraft located on TWY B into the alley between Gates 7 and 14; taxiing aircraft must follow lead-in lines onto stands; jet-blast impact is noted at the north end of TWY F, with engine-start restricted until 800 ft from the north end of TWY F (abeam the second parking pad); outboard engines of four-engine aircraft are to be kept at idle power in specified areas.
- **Follow-me:** Availability not confirmed in reachable source — verify locally, particularly relevant given the constrained apron/taxiway geometry. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean/semi-arid coastal Southern California climate; prevailing onshore westerly wind favours the RWY 27 configuration as the field's dominant operating direction.
- **Seasonal hazards:** **Coastal marine-layer stratus/fog** is the defining seasonal hazard, most frequent October–February (dense fog, visibility ≤¼ mile, on the order of two nights per month in-season, though possible in any month) — the number one weather-related cause of delay, diversion and cancellation at this field. No winter snow/ice season and no meaningful de-icing requirement (§11).
- **Local effects:** Marine-layer stratus burns off through the morning in a typical pattern but can persist through entire mornings, especially around seasonal transitions (reported to be a recurring problem around Thanksgiving week and the start of spring break); no significant terrain-wind or sea-breeze effect beyond the standard coastal onshore/offshore diurnal pattern.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (single-runway field — any RWY 09/27 NOTAM is field-critical), navaid U/S (RWY 27 has no glideslope to begin with), lighting, obstacle/crane near the RWY 27 approach corridor, RFF index/downgrade, GPS/RAIM for the RNAV/RNP procedures, marine-layer-driven ground-delay programs. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — not a K Global base (§1).
- **Nearest suitable alternates:** Company preferred alternates KLAX, KLAS `[VAMSYS mirror 2026-07-26]` — both covered within [Los Angeles (KZLA) FIR brief](../../../../airspace/fir/north-america/los-angeles-kzla.md) §9; confirm suitability, runway/RFF adequacy and current minima per leg. KLAX carries its own single/multi-runway constraints; KLAS is the eastern-desert alternate clear of the coastal marine layer.
- **Fuel-uplift notes:** Jet A / 100LL available 24 hours via Signature Flight Support FBO; no fuel-freeze/cold-soak consideration relevant to this coastal, sea-level field. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Declared LDA (7,280–7,591 ft) is non-limiting for typical widebody landing weights but leaves reduced margin versus the raw 9,401 ft runway length — confirm performance for each type/weight. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- **Short/limited-runway and steep-approach considerations apply to every K Global widebody planned into KSAN** — see [`OM E — Steep Approach Operations`](../../../../../flight-ops/steep-approach-operations.md) (RWY 27's 3.50° PAPI and close-in obstacle profile) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) (reduced LDA from the large displaced thresholds). High-Elevation Aerodrome Operations does not apply — KSAN is a sea-level field.
- **ARFF Index D vs our largest types:** Confirm current RFF coverage/notification requirement before planning our longest-fuselage widebody types (e.g. B77W, B748, A388) into this field — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Wingspan-restricted taxi route** (RWY 09/TWY D/TWY Bravo, 136 ft max) excludes every K Global widebody — brief an alternative taxi-in routing for any RWY 09 landing.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — derived from published magnetic/true runway headings (~11° E), not independently sourced from a current-epoch chart value.
- **ATS/AD operating hours, exact ATIS hours** — not independently confirmed from a primary current-cycle table.
- **PCN / pavement classification number** — not published in reachable sources; only FAA 5010 weight-bearing-capacity figures obtained.
- **CBP/immigration off-hours and weekend staffing model** for scheduled international arrivals — administrative office hours confirmed (Mon–Fri 09:00–17:00), operational coverage model for arrivals outside those hours not independently confirmed.
- **ILS/LOC frequencies and idents (RWY 09/27)** — not individually extracted this pass; pull from current AIRAC.
- **Exact published landing minima (ceiling/visibility) per approach** — general "relatively high minima" characterisation sourced to a tier-4 discussion source, not transcribed from a primary minima table (governance: minima are never transcribed here regardless).
- **Take-off minima / special departure procedure detail (BORDER SEVEN)** — existence confirmed, gradient/minima not transcribed; verify current chart.
- **RNP AR authorisation status** for RNAV (RNP) Z RWY 27 — operator/aircraft authorisation not confirmed.
- **ARFF Index D current status and any Index-E notification/PPR requirement** for our largest widebody types.
- **Reverse-thrust/idle-reverse policy, engine run-up restriction, follow-me availability, push-back mandatory-vs-self-manoeuvre policy** — none confirmed in reachable sources.
- **Terminal 2 international/widebody gate assignment for our operation** and current gate count following the phased Terminal 1 rollout (2025–2028).
- **VATSIM/vACC KSAN airport SOP cross-check** — not located as a standalone published SOP distinct from the general Los Angeles ARTCC (ZLA) documentation cited in the FIR brief; note as an open cross-check item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AirNav — KSAN San Diego International Airport** (mirrors FAA Chart Supplement / Airport Master Record 5010 data — runway dimensions, declared distances, displaced thresholds, PAPI angles, approach lighting, weight-bearing capacity, ARFF index, frequencies, obstruction data, operational remarks, IAP/SID/STAR names) — https://www.airnav.com/airport/KSAN (retrieved 2026-07-26).
- **OurAirports — KSAN** — https://ourairports.com/airports/KSAN/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- **FAA — Los Angeles ARTCC (ZLA) fact sheet** — https://www.faa.gov/sites/faa.gov/files/about/office_org/headquarters_offices/ato/ZLA-ARTCC.pdf (retrieved 2026-07-25, via the KZLA FIR brief). *ARTCC/TRACON context.*
- Airliners.net forum — "San Diego's Lindbergh Field, An Extreme Airport?" — https://www.airliners.net/forum/viewtopic.php?t=553735 (retrieved 2026-07-26). *RWY 27 approach/parking-structure/obstacle corroboration — tier-4, community source.*
- OBRAG (Ocean Beach Rag) — "New York Times Looks at San Diego Airport's Night-Time Curfew … in 1975" and related noise-program articles — https://obrag.org/2025/01/new-york-times-looks-at-san-diego-airports-night-time-curfew-in-1975/ (retrieved 2026-07-26). *Nighttime noise-program history — tier-4.*
- City of San Diego — Airports Noise Management — https://www.sandiego.gov/airports/noise (retrieved 2026-07-26). *Noise program structure — operator/regulatory source.*
- SAN Airport — Aircraft Noise — https://www.san.org/aircraft-noise/ (retrieved 2026-07-26). *Operator noise-program statement.*
- U.S. CBP — San Diego International Airport / San Diego field office — https://www.cbp.gov/travel/biometrics/biometric-location/san-diego-international-airport , https://www.cbp.gov/about/contact/ports/field-office/san-diego (retrieved 2026-07-26). *CBP hours/PoE.*
- Signature Aviation — SAN location — https://www.signatureaviation.com/locations/SAN (retrieved 2026-07-26). *FBO/fuel.*
- KPBS Public Media — "New Terminal 1 at San Diego Int'l to open with 19 gates…" — https://www.kpbs.org/news/economy/2025/08/27/new-terminal-1-at-san-diego-intl-opens-with-19-gates-30-restaurants (retrieved 2026-07-26). *Terminal 1 phasing/gate count.*
- Airways Magazine — "San Diego International Opens Its New Terminal 1" — https://www.airwaysmag.com/new-post/san-diego-international-new-terminal-1 (retrieved 2026-07-26). *Terminal 1 corroboration.*
- AOPA — "The coastal marine layer" — https://www.aopa.org/news-and-media/all-news/2025/march/flight-training/weather-the-coastal-marine-layer (retrieved 2026-07-26). *Marine-layer mechanism.*
- Yahoo News — "How does fog affect flying in and out of San Diego?" — https://www.yahoo.com/news/does-fog-affect-flying-san-005155678.html (retrieved 2026-07-26). *Marine-layer frequency/impact statistics — tier-4.*
- Wikipedia — "San Diego International Airport" and "Cowles Mountain" — https://en.wikipedia.org/wiki/San_Diego_International_Airport , https://en.wikipedia.org/wiki/Cowles_Mountain (retrieved 2026-07-26). *Historical/context and terrain elevation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
