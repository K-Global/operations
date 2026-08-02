# KIAH — George Bush Intercontinental/Houston · Airport Briefing

**KIAH / IAH** · Houston, Texas, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the FAA Chart Supplement (South Central U.S., cycle effective 2026-07-09) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 29.98444, -95.34144 `[Navigraph navdata]`; cross-checked 29.9845, -95.3415 (N29°59.07′/W95°20.49′) per FAA Chart Supplement 🟩 |
| Field elevation | **~97 ft / 30 m AMSL** — Navigraph navdata carries 96 ft; OurAirports lists 97 ft; the FAA Chart Supplement raw survey figure is 95 ft, and individual runway touchdown elevations range 84.3–94.8 ft. Minor cross-source variance, not operationally significant 🟧 |
| Mag variation | Approx. **2–3° E** (Texas Gulf Coast, current epoch not independently sourced this pass) 🟧 |
| Time zone | UTC−6 (CST) / UTC−5 (CDT, US DST observed) |
| Runway(s) | **08L/26R** 9,000×150 ft · **08R/26L** 9,402×150 ft · **09/27** 10,000×150 ft · **15L/33R** 12,001×150 ft (longest) · **15R/33L** 10,000×150 ft — three close east–west parallels (08L/26R, 08R/26L, 09/27) plus a separate parallel pair oriented 15/33 (15L/33R, 15R/33L) crossing the east–west set at roughly 62° |
| Preferential runway | Config/wind/flow-dependent; no single published preferential-runway rule found in reachable sources — confirm active configuration via ATIS 🟧 |
| Longest LDA | 12,001 ft / 3,658 m (15L/33R, both ends) |
| Approaches | **ILS CAT II/III** on 08L/26R (both ends) plus single-end CAT II/III on 26L (08R/26L) and 27 (09/27); **GLS (GBAS)** on all six east–west runway ends; **RNAV (RNP) Y** and **RNAV (GPS) Z** on all six east–west ends; **ILS/LOC** and **RNAV (GPS)** on 15R and 33R (names only — verify current AIRAC) |
| RFF category | **FAA Part 139 ARFF Index E** (highest US index; consistent with A380/747-8-class traffic) — exact current certificate record not fully re-parsed this pass 🟧 |
| Control type | **Radar** — Houston Approach/Departure (TRACON) on the terminal area; **Houston ARTCC** en route (no OM C FIR brief built for this centre yet — named here, not linked) |
| Elevation class | Sea-level (~97 ft) — **not** hot-and-high; the operative threats are **Gulf-of-Mexico convective/thunderstorm activity, Atlantic hurricane season (Jun–Nov), and fog** — see §3.4/§14 |
| Special-airport status | 🟥 **RWY 09/27 closed to aircraft with wingspan ≥215 ft** (excludes our A380/747-8-class quads); several wingspan-restricted taxiway segments — see §5/§13 |
| Customs / PoE | **Yes** — Customs Landing Rights confirmed; Terminal D/E international arrivals (Federal Inspection Service facility); exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **KHOU, KDFW** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Texas Gulf Coastal Plain; no close-in high terrain relevant to any arrival, departure or missed-approach path. |
| Runway length vs fleet perf | 🟥 | All five runways (9,000–12,001 ft) are ample in length for any K Global type, but **RWY 09/27 is closed to aircraft with wingspan ≥215 ft** — a hard AIP restriction that excludes the A388 (A380) and B748 (747-8) from that runway specifically. |
| Approach availability / minima | 🟧 | Strong infrastructure — CAT II/III and GLS on the three east–west runways — but exact ILS sub-category (IIIA/IIIB) and ILS idents/frequencies were not confirmed from a primary table this pass. |
| Airspace / traffic / control | 🟧 | Houston Class B; five-runway field with two crossing parallel sets drives continuous multi-stream sequencing under Houston Approach/Departure; Houston ARTCC en route — see §3.2. |
| Weather / seasonal hazard | 🟥 | Gulf-of-Mexico convective/thunderstorm activity and the Atlantic hurricane season (Jun–Nov) are the field's defining threats, plus Gulf Coast fog — not terrain or density altitude. |
| Curfew / slots / hours | 🟩 | No curfew or slot-coordination regime found in reachable sources; ATCT attendance is continuous (H24). IAH is not one of the FAA's slot-controlled fields. |
| RFF category vs our types | 🟩 | FAA Part 139 Index E — the highest US ARFF index, consistent with hosting A380/747-8-class traffic; exceeds any K Global type's requirement. |
| Fuel availability | 🟧 | Jet-A confirmed generally available per FAA Chart Supplement service data; specific commercial into-plane supplier/hours for airline operations not confirmed. |
| Customs / handling / security | 🟧 | Confirmed Port of Entry (Terminal D/E international facility); exact CBP desk hours and our ground-handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
KIAH sits at approximately 97 ft AMSL on the flat Texas Gulf Coastal Plain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
Houston operates **five runways in two crossing parallel groups** — three closely-spaced east–west runways (08L/26R, 08R/26L, 09/27) plus a separate 15/33-oriented parallel pair (15L/33R, 15R/33L) that crosses the east–west set at roughly 62° — inside **Houston Class B airspace**. **Houston Approach/Departure** (TRACON) sequences continuous multi-runway arrival and departure streams, and **Houston ARTCC** owns the en route hand-off (no dedicated OM C FIR brief exists yet for this centre — see the general [North America airspace brief](../../../../airspace/north-america.md), which covers a different specific corridor and does not itself describe Houston Center's sectors). Expect active runway-configuration changes and cross-runway sequencing, particularly when the 09/27 wingspan restriction (§3.5) forces re-routing of our largest widebodies to a different runway than the rest of the arrival bank.

### 3.3 Runway excursion 🟧
All five runways are grooved concrete in good-to-excellent published condition; no displaced thresholds were found in the reachable FAA Chart Supplement extract for any runway — **not independently re-confirmed against a current AIRAC cycle**, flagged for verification. Declared distances (TORA/TODA/ASDA/LDA) are equal and symmetric on every runway (§7), so there is no LDA-limited case identified from the data gathered. The standing runway-specific caution is **not** excursion risk but the **RWY 09/27 wingspan restriction** (§3.5) — briefing the wrong runway for a wide-span type would be a selection error rather than a length/excursion problem.

### 3.4 Weather threat 🟥
Houston's defining weather threats are not terrain-driven: (1) **Gulf-of-Mexico convective/thunderstorm activity**, common on summer afternoons in this humid subtropical Gulf Coast climate; (2) the **Atlantic hurricane season (1 June–30 November)**, which can bring tropical-storm or hurricane conditions, heavy rain and high wind requiring ground-stop, evacuation or diversion contingency planning — see [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md); and (3) **radiation/advection fog**, typical of humid Gulf Coast mornings, which is the operational reason for the field's CAT II/III infrastructure on the main east–west runway set. **Winter de-icing at KIAH is a rare, occasional event driven by infrequent hard-freeze episodes, not a planned seasonal program** — a direct contrast with a snow-belt field where de-icing is routine every winter; see §11/§14.

### 3.5 Operational considerations 🟥
Three durable ground/runway-use constraints stand out: (1) **RWY 09/27 is closed to aircraft with wingspan ≥215 ft** — this excludes the K Global A388 (A380, ~261.6 ft span) and B748 (747-8, ~224.4 ft span) from that runway; our other widebody types (A339, A346, A359, A35K, B77W, B77F, B789 — all under 215 ft) are unrestricted there. (2) A dense set of **wingspan-restricted taxiway segments** (TWY WD, NR, WW, NK, NJ, RC, SF, WC) constrain ground routing for our larger types — see §13. (3) The FAA Chart Supplement notes **magnetic anomalies on RWY 15L/33R and on taxiways WA/WB** that may affect compass heading for takeoff, and several named movement areas that are **not visible from the tower** — both call for extra crew/ATC vigilance and read-back discipline.

---

## 4. Cautions & Warnings

- **RWY 09/27 is closed to any aircraft with a wingspan of 215 ft or more** — never plan an A388 (A380) or B748 (747-8) departure or arrival on this runway.
- Several taxiway segments carry hard wingspan limits (TWY WD >171 ft, TWY NR >125 ft/>214 ft by segment, TWY WW ≥135 ft closed, TWY RC >118 ft, TWY WC >118 ft) — confirm the assigned taxi route accommodates the aircraft's wingspan before pushback.
- **RWY 15L/33R and taxiways WA/WB carry known magnetic anomalies** that may affect compass heading for takeoff — cross-check FMS/compass alignment on these surfaces.
- Portions of several taxiways (WA, WB, WD, NR, WL, WM per FAA remarks) are **not visible from the tower** — expect extra ground vigilance and explicit read-back on crossings.
- **Bird and bat wildlife hazard** is noted on and in the vicinity of the airport.
- The field's defining weather threats are **Gulf-of-Mexico convective activity, the Atlantic hurricane season (Jun–Nov), and fog** — not terrain; brief accordingly rather than expecting a terrain-driven threat profile.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **RWY 09/27 wingspan-215 ft restriction** and the **CAT II/III low-visibility environment** on the east–west runway set. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability operations into the CAT III-equipped runway ends (08L/26R both ends; 26L and 27 single-end) during low-visibility conditions — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** **RWY 09/27 closed to wingspan ≥215 ft** (hard AIP restriction) 🟥. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard US international arrival; Customs Landing Rights confirmed, no special state permit required beyond normal CBP processing. 🟩
- **Operations notes:** ANSP — **FAA** (Houston Approach/Departure TRACON; **Houston ARTCC** en route). Airport operator — **City of Houston, Houston Airport System** (Department of Aviation). ATCT attendance is **continuous (H24)** per the FAA Chart Supplement.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | ATCT continuous (H24) attendance | 🟩 |
| AD operating hours | Open to the public, H24; no curfew found in reachable sources | 🟩 |
| Night / curfew restrictions | None identified — IAH is not one of the FAA's slot-controlled/curfew fields | 🟧 |
| RFF category | FAA Part 139 **Index E** | 🟧 |
| Fuel | Jet-A confirmed generally available (FAA Chart Supplement service data); commercial into-plane supplier/hours for airline ops not confirmed | 🟧 |
| PCN | Not published in ICAO PCN format — FAA data uses PCR/weight-bearing classification instead (PCR 690–1,100 across runways, see §7) | 🟧 |
| Customs | Customs Landing Rights confirmed; Terminal D/E international (FIS) facility; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Signature Aviation and Atlantic Aviation identified as FBOs (general aviation); airline ground-handling agent for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / strength | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08L | 9,000 × 150 ft (2,743 × 46 m) | Concrete, grooved, excellent condition; S-75/D-210/ST-409/DT-873, PCR 1100/R/A/W/T | 9,000 ft | 9,000 ft | 9,000 ft | 9,000 ft | ALSF2 approach lights (CAT II/III config) |
| 26R | 9,000 × 150 ft (2,743 × 46 m) | Same runway as 08L | 9,000 ft | 9,000 ft | 9,000 ft | 9,000 ft | ALSF2 approach lights (CAT II/III config) |
| 08R | 9,402 × 150 ft (2,866 × 46 m) | Concrete, grooved, good condition; S-75/D-210/ST-498/DT-873, PCR 1090/R/A/W/T | 9,402 ft | 9,402 ft | 9,402 ft | 9,402 ft | MALSR approach lights (08R); SA CAT I/II |
| 26L | 9,402 × 150 ft (2,866 × 46 m) | Same runway as 08R | 9,402 ft | 9,402 ft | 9,402 ft | 9,402 ft | ALSF2 approach lights; CAT II/III |
| 09 | 10,000 × 150 ft (3,048 × 46 m) | Concrete, grooved, good condition; D-210/ST-560, PCR 690/R/A/W/T | 10,000 ft | 10,000 ft | 10,000 ft | 10,000 ft | MALSR; SA CAT I/II. **Closed to wingspan ≥215 ft** 🟥 |
| 27 | 10,000 × 150 ft (3,048 × 46 m) | Same runway as 09 | 10,000 ft | 10,000 ft | 10,000 ft | 10,000 ft | ALSF2 approach lights; CAT II/III. **Closed to wingspan ≥215 ft** 🟥 |
| 15L | 12,001 × 150 ft (3,658 × 46 m) | Concrete, grooved, good condition; S-100/D-200/ST-400/DT-800, PCR 870/R/B/W/T | 12,001 ft | 12,001 ft | 12,001 ft | 12,001 ft | Non-precision markings; longest runway on the field |
| 33R | 12,001 × 150 ft (3,658 × 46 m) | Same runway as 15L | 12,001 ft | 12,001 ft | 12,001 ft | 12,001 ft | MALSR approach lights; precision markings |
| 15R | 10,000 × 150 ft (3,048 × 46 m) | Concrete, grooved, good condition; S-75/D-200/ST-400/DT-873, PCR 980/R/A/W/T | 10,000 ft | 10,000 ft | 10,000 ft | 10,000 ft | MALSR approach lights; precision markings |
| 33L | 10,000 × 150 ft (3,048 × 46 m) | Same runway as 15R | 10,000 ft | 10,000 ft | 10,000 ft | 10,000 ft | Non-precision markings; no approach lights published |

*Source: FAA Chart Supplement (South Central U.S.), KIAH, cycle effective 2026-07-09 — mirrored via SkyVector (retrieved 2026-07-26). No displaced thresholds found in the reachable extract 🟧 not independently re-confirmed. All distances as published (feet primary, metres derived).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | D-ATIS | 124.05 (also by phone) | H24 (assumed) 🟧 | Digital ATIS |
| Delivery | Houston Clearance Delivery | 128.1 | H24 | |
| Ground | Houston Ground | 118.575 (RWY 08L/26R, 08R/26L, 09/27); 119.95; 121.7 (RWY 15L/33R, 15R/33L) | H24 | Runway-specific assignment |
| Tower | Houston Tower | 120.725 (primary); 125.35 (RWY 08L/26R); 127.3 (RWY 08R/26L); 135.15 (RWY 15L/33R, 15R/33L); 288.25 (RWY 09/27); 290.2 (RWY 15L/33R, 15R/33L) | H24 (continuous attendance) | Multiple positions — take the assigned frequency |
| Approach | Houston Approach | 120.05 (East); 124.35 (West); 316.15 (West); 379.1 (North & East) | H24 (assumed) 🟧 | Sector-specific |
| Departure | Houston Departure | 119.7 (North); 123.8 (West); 127.125; 257.2 (East); 257.7 (West); 281.4 (North) | H24 (assumed) 🟧 | Sector-specific |
| Centre / FIR | **Houston ARTCC** | Per current AIRAC | H24 | Named per FAA Chart Supplement; no OM C FIR brief built for this centre yet |

*Source: FAA Chart Supplement (South Central U.S.), KIAH, cycle effective 2026-07-09 — mirrored via SkyVector (retrieved 2026-07-26). UNICOM 122.950; emergency 121.5; Class B frequency 127.125/269.075 (East). Additional SID/STAR/DP-specific frequencies exist — see Departure/Arrival pages.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | IAH ("HUMBLE") | 116.60 | H24 (assumed) 🟧 | On-field VOR/DME |
| VOR/DME | PIK ("CONROE") | 115.55 | H24 (assumed) 🟧 | ~22 NM, enroute/STAR reference |
| VOR/DME | EFD ("ELLINGTON") | 109.40 | H24 (assumed) 🟧 | ~25 NM, enroute/STAR reference |
| VOR/DME | DAS ("DAISETTA") | 116.90 | H24 (assumed) 🟧 | ~38 NM, enroute reference |
| NDB | CX ("ALIBI") | 281 kHz | H24 (assumed) 🟧 | ~28 NM |
| NDB | GDE ("GOODHUE") | 368 kHz | H24 (assumed) 🟧 | ~59 NM, enroute reference only |
| ILS/LOC, GLS | Ident/freq not published in reachable source | — | H24 (assumed) 🟧 | ILS/LOC and GLS (GBAS) approaches published for 08L, 08R, 09, 26L, 26R, 27, 15R, 33R by name only — exact idents/frequencies **not confirmed this pass**, pull current AIRAC |

*Source: FAA Chart Supplement (South Central U.S.), KIAH, cycle effective 2026-07-09 — mirrored via SkyVector (retrieved 2026-07-26). GBAS approach service volume published as 20 NM from threshold, all GLS approaches.*

---

## 10. Arrival

- **Transition altitude / level:** 18,000 ft MSL (standard FAA transition altitude); transition level by QNH — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below 10,000 ft MSL (14 CFR 91.117).
- **Preferential runway logic:** Wind/traffic/flow-dependent; no single published preferential-runway rule found in reachable sources — confirm active configuration via ATIS. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 08L | ILS OR LOC; ILS (SA CAT I); ILS (CAT II-III); GLS; RNAV (RNP) Y; RNAV (GPS) Z | Full CAT II/III + GLS + RNP AR |
| 08R | ILS OR LOC; ILS (SA CAT I-II); GLS; RNAV (RNP) Y; RNAV (GPS) Z | SA CAT I/II only on this end |
| 09 | ILS OR LOC; ILS (SA CAT I-II); GLS; RNAV (RNP) Y; RNAV (GPS) Z | **Closed to wingspan ≥215 ft** 🟥 |
| 26L | ILS OR LOC; ILS (SA CAT I); ILS (CAT II-III); GLS; RNAV (RNP) Y; RNAV (GPS) Z | Full CAT II/III + GLS + RNP AR |
| 26R | ILS OR LOC; ILS (CAT II-III); GLS; RNAV (RNP) Y; RNAV (GPS) Z | Full CAT II/III + GLS + RNP AR |
| 27 | ILS OR LOC; ILS (SA CAT I); ILS (CAT II-III); GLS; RNAV (RNP) Y; RNAV (GPS) Z | **Closed to wingspan ≥215 ft** 🟥 |
| 15R | ILS OR LOC; RNAV (GPS) | CAT I-equivalent only |
| 33R | ILS OR LOC; RNAV (GPS) | CAT I-equivalent only |
| 15L | — none published in reachable source — | Non-precision markings only; verify current chart |
| 33L | — none published in reachable source — | Non-precision markings only; verify current chart |

- **STARs (names only — verify current AIRAC, cycle effective 2026-07-09):** BAZBL ONE, DOOBI THREE, DRLLR FIVE, DUUUK FOUR, GESNR TWO, GILCO FIVE, GUSHR THREE, HTOWN THREE, HUDZY FIVE, LINKK ONE, MSCOT FOUR, NNCEE TWO, OHIIO FOUR, RIICE ONE, SKNRD FIVE, SOULL ONE, TEJAS FIVE, TTORO THREE, ZEEKK THREE.
- **LVP:** CAT II/III trigger conditions apply on the east–west runway set per Gulf Coast fog risk (§14); exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative missed-approach concern is re-sequencing into a busy Houston Class B, five-runway traffic environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version, cycle effective 2026-07-09):** ALEXANDRIA THREE, BLTWY SEVEN, BNDTO SIX, CRIED ONE, EL DORADO ONE, FLYZA FIVE, GIFFA ONE, GUMBY THREE, HOODO SEVEN, INDIE EIGHT, JUNCTION ONE, LAKE CHARLES FIVE, LEONA FOUR, LUFKIN FOUR, LURIC EIGHT, MMUGS FOUR, PITZZ FIVE, RITAA SEVEN, STRYA EIGHT, STYCK EIGHT, WYLSN EIGHT.
- **RNP / climb-gradient requirements:** Several RNAV-suffixed DPs are published (RNAV/RNP departure structure); confirm gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** A dedicated take-off minimums chart is published; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Houston Ground/Clearance Delivery sequence per §8; cross-bleed/APU notification procedure not confirmed locally. 🟧
- **ATC slot / CTOT & clearance:** No permanent slot-coordination regime identified (IAH is not one of the FAA's slot-controlled fields); ad hoc ATCSCC ground-delay/EDCT programs can apply during severe convective weather or hurricane-related traffic management. 🟧
- **De-icing:** Rare/occasional event driven by infrequent Gulf Coast hard-freeze episodes — **not a routine seasonal program**, a direct contrast with a snow-belt field; no dedicated remote de-icing pad infrastructure confirmed in reachable sources. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** FAA Chart Supplement remarks note a "noise sensitive area" north, east and west of the airport; no detailed noise-abatement departure procedure (NADP) was found in reachable sources. 🟧
- **Night noise / dB limits:** None identified — no curfew or per-movement noise-charge program found in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** **Terminal D** (Mickey Leland Terminal — international arrivals, gates supporting super-jumbo aircraft including the A380 and 747-8) and **Terminal E** (international arrivals for a portion of carriers) are the widebody/international clusters; Terminals A/B/C are more domestic/regional oriented. Five terminals, ~116 gates total, linked airside by the **Skyway** automated people mover and landside by the **Subway** APM. 🟧 (gate-level assignment for our specific operation not confirmed) | 🟧
- **Push-back:** Mandatory-vs-self-manoeuvre policy by stand not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Ramp on the day; note the extensive wingspan-restricted taxiway network below.
- **Hot spots / tight taxiways:** 🟥 **TWY WD** (closed to wingspan >171 ft between TWY NR and TWY WB); **TWY NR** (closed to wingspan >125 ft between TWY WD and TWY WB; a separate segment between TWY WW and TWY WB closed to wingspan >214 ft); **TWY WW** (run-up pad for RWY 15L, closed to wingspan ≥135 ft); **TWY NK** (dual-taxiway operations between TWY NB and the North Ramp/Terminal D ramp — west centreline restricted to wingspan ≤125 ft, east centreline ≤214 ft; simultaneous aircraft operations prohibited when the middle taxilane is in use); **TWY NJ** (similar dual-taxiway restriction between TWY NB and the Terminal C ramp); **TWY RC** (closed to wingspan >118 ft); **TWY SF** (between RWY 09/27 up to the east bridge, closed to wingspan ≥215 ft); **TWY WC** (west of RWY 15R/33L, restricted to wingspan ≤118 ft) — all sourced directly from the FAA Chart Supplement airport remarks (cycle effective 2026-07-09).
- **Follow-me:** Availability not confirmed in reachable sources — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical Gulf Coast climate; prevailing wind generally south/south-easterly (Gulf onshore flow) for much of the year — exact wind rose not independently sourced this pass. 🟧
- **Seasonal hazards:** **Atlantic hurricane season (1 June–30 November)** — the Texas Gulf Coast lies within the Atlantic hurricane basin and can be affected by tropical storms/hurricanes bringing heavy rain, high wind and potential ground-stop/evacuation contingencies; see [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). Summer brings frequent **Gulf Coast afternoon convective thunderstorms**. **Radiation/advection fog** is a recognised morning hazard in this humid climate — the direct operational reason for the field's CAT II/III infrastructure. **Winter de-icing is a rare, occasional event** tied to infrequent hard-freeze episodes rather than a planned season — contrast this explicitly with a snow-belt field where de-icing is routine every winter.
- **Local effects:** No significant terrain/sea-breeze effect beyond the general Gulf onshore flow noted above; flat coastal plain.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical cyclone advisories in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the wingspan-restricted taxiways in §13), navaid U/S, ILS/GLS equipment status, lighting, obstacle/crane, RFF downgrade, current ATCSCC ground-delay/flow programs (thunderstorm/hurricane season), GPS/RAIM for RNP procedures, wildlife activity. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — international/domestic widebody service in the K Global network (not a base) `[VAMSYS mirror 2026-07-25]`.
- **Nearest suitable alternates:** Company preferred alternates **KHOU** (Houston Hobby) and **KDFW** (Dallas/Fort Worth) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet-A confirmed generally available as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length is non-limiting for any K Global type on the main runways; **RWY 09/27's wingspan ≥215 ft restriction excludes the A388 and B748 specifically** from that runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type wingspan/RFF reference.

---

## 17. Fleet-specific notes (optional)

- **A388 (A380) and B748 (747-8):** cannot use **RWY 09/27** (wingspan ≥215 ft prohibited) — plan runway assignment accordingly; Terminal D's super-jumbo-capable gate infrastructure is the relevant stand consideration for these two types.
- **All other K Global widebodies (A339, A346, A359, A35K, B77W, B77F, B789)** have a wingspan under 215 ft and are unrestricted on any KIAH runway per the current wingspan remarks. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field elevation** — minor cross-source variance (Navigraph 96 ft / OurAirports 97 ft / FAA raw survey 95 ft); not operationally significant but not reconciled to a single authoritative figure.
- **Magnetic variation** — current-epoch value not independently sourced this pass.
- **ILS/GLS idents and frequencies** — approach names confirmed by runway; exact idents/frequencies not obtained in this research pass.
- **ILS sub-category (IIIA/IIIB)** — not confirmed from a primary table this pass.
- **Preferential-runway logic / active configuration rule** — not found in reachable sources; confirm via ATIS on the day.
- **Take-off minima exact figures** — chart exists (SC5TO) but figures not transcribed.
- **RFF/ARFF certificate record** — "Index E" inferred from a partially-parsed Chart Supplement field; exact current certificate detail not fully confirmed.
- **CBP/customs desk hours** — assumed major-hub coverage aligned with international widebody banks, not independently confirmed.
- **Ground-handling agent(s) for our operation** — not confirmed.
- **Fuel into-plane provider and uplift hours (airline-scale, not FBO/GA)** — not confirmed.
- **Noise-abatement departure procedure detail** — only a general "noise sensitive area" remark found; no NADP specifics.
- **Preferential wind rose / prevailing-wind statistics** — general Gulf Coast climatology stated; field-specific wind rose not sourced.
- **Push-back mandatory-vs-self-manoeuvre policy and follow-me availability** — not confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **FAA Chart Supplement, South Central U.S. (KIAH)**, cycle effective 2026-07-09 0901Z — official FAA data, runway geometry/declared distances/PCR, communications, navaids, airport remarks (wingspan restrictions, magnetic anomalies, wildlife hazard), SID/STAR/IAP name index — mirrored via https://skyvector.com/airport/IAH/George-Bush-Intercontinental-Houston-Airport , source PDF https://skyvector.com/files/tpp/2607/afdpdf/SC_354_09JUL2026.pdf (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/KIAH/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Wikipedia — "George Bush Intercontinental Airport" — https://en.wikipedia.org/wiki/George_Bush_Intercontinental_Airport (retrieved 2026-07-26). *Terminal/gate structure, history, Skyway/Subway APM detail — context only.*
- NOAA National Hurricane Center — Atlantic hurricane season dates (1 June–30 November) — https://www.nhc.noaa.gov/ (retrieved 2026-07-26). *General season reference.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
