# LFLL — Lyon-Saint Exupéry · Airport Briefing

**LFLL / LYS** · Colombier-Saugnieu (Lyon), Rhône, Auvergne-Rhône-Alpes, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Planning aid for the sim, not a chart. The primary French AIP (SIA eAIP, AD 2 LFLL) could not be rendered from a raw fetch this pass (JavaScript frameset — see §Sources); static data below is built from cross-checked tier-4 public sources per the source register and flagged accordingly. Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 45°43′32″N / 005°04′52″E (45.72556, 5.08111) |
| Field elevation | **821 ft / 250 m AMSL** — cross-confirmed across three independent public sources 🟩 |
| Mag variation | 🟧 **2.6° E** (~2025 epoch, IVAO France reference) — not an AIP-sourced current figure |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **17R/35L** 4,000 × 45 m (asphalt) · **17L/35R** 2,670 × 45 m (asphalt) — two parallel runways, **dependent**, same QFU 173°/353° for both (see §3.3) |
| Preferential runway | North-flow ("35-config") is standard: **35L for departure, 35R for arrival**; south-flow ("17-config") reciprocal: **17R for departure, 17L for arrival** — the field habitually **segregates** the long runway to departures and the short runway to arrivals rather than mixing both on either 🟧 |
| Longest LDA | 4,000 m (17R/35L); preferred arrival runway (17L/35R) is **2,670 m** — see §3.3/§7 |
| Approaches | ILS/LOC on **17L, 35R, 35L**; **no ILS on 17R** (RNP + VOR only); RNP (RNAV) and VOR available all four runway ends — by name only, verify current AIRAC |
| RFF category | 🟧 **Category 9** (French 1–10 SSLIA scale) — tier-4 sourced, not independently confirmed from a primary table |
| Control type | **Radar** — Lyon Tower/Ground/Delivery on-field; **Lyon Approach** (radar, also covers Chambéry/Annecy approach when those are closed, plus the Lyon SIV); **Marseille ACC (LFMM)** en route — see [Europe airspace general reference](../../../../airspace/europe.md) (no dedicated French FIR brief exists yet — §18) |
| Elevation class | Near sea-level equivalent (821 ft) — **not** hot-and-high; the operative planning considerations are the **dependent-runway pair** and regional terrain to the east/southwest (§3.1/§3.2), not density altitude |
| Special-airport status | None identified in reachable sources; standing crew-briefing items are the **dependent-runway, segregated-use pattern** and **relief east/southwest of the field** — see §5 |
| Customs / PoE | Presumed **Yes** (scheduled international/Schengen-external service) — exact desk hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EDDF, LSZH, LFML** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 14 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Relief to the east and southwest of the field drives non-trivial minimum guidance/MSA sectoring; no close-in obstacle hazard identified, but not a flat/benign field either — verify the MSA ring on the current chart. |
| Runway length vs fleet perf | 🟧 | The **habitually preferred arrival runway (17L/35R) is only 2,670 m** — non-limiting for narrowbody types but worth an explicit landing-performance check for any heavier K Global type at high landing weight; the 4,000 m runway (17R/35L) is available but is the standard **departure** runway, not the default arrival — see §3.3. |
| Approach availability / minima | 🟧 | ILS/LOC published on 3 of 4 runway ends (**not** 17R, RNP/VOR only there); RNP and VOR available on all four ends; ILS category (I/II/III) not confirmed from a primary table. |
| Airspace / traffic / control | 🟥 | The two runways are **dependent** — simultaneous takeoffs and landings are not permitted between them (tier-4 sourced; treat as a working assumption pending primary-AIP confirmation) — a hard capacity/sequencing constraint, not a mere caution. |
| Weather / seasonal hazard | 🟧 | Conflicting characterisation: the airport operator states the field does not suffer lake/valley fog (flat plain, away from high Alpine peaks); general French inland-valley winter climatology nonetheless carries a plausible frost/radiation-fog risk under temperature inversion. De-icing season (mid-Nov–mid-Apr) is confirmed. Not independently resolved from MET statistics this pass. |
| Curfew / slots / hours | 🟧 | No blanket night closure found; a **noisiest-aircraft restriction (Chapter 3, cumulative margin <13 EPNdB) applies 22:00–06:00** since Feb 2023 — modern K Global equipment is very likely compliant, but confirm. Slot-coordination level not confirmed. |
| RFF category vs our types | 🟧 | Category 9 (tier-4) is adequate on paper for any K Global type but not independently confirmed from a primary table. |
| Fuel availability | 🟧 | Not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | Presumed available for scheduled international service (Schengen-external-border field); exact desk hours and handling agent(s) not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
LFLL sits at 821 ft AMSL on a plain east of Lyon, but the IVAO France operational reference for the field explicitly flags that **minimum guidance altitudes (AMG) require particular attention because of relief to the east of the aerodrome and also to the southwest** — the foothills of the Alps to the east and higher ground toward the Massif Central/Rhône corridor to the southwest bound the Lyon TMA more than a flat-plain field would suggest. A specific **3,300 ft caution zone south of the field** is called out for radar vectoring during ILS-intercept sequencing. This is not a close-in CFIT trap on the scale of a mountain-valley field, but it is materially more terrain-aware than a true flat-plain airport — verify the MSA ring and any charted obstacle notes on the current AIRAC before an unfamiliar arrival/departure.

### 3.2 Airborne conflict / traffic 🟧
Lyon Approach (radar) manages not only the Lyon TMA/CTA but also **Chambéry (LFLB) and Annecy (LFLP) approach when those units are closed**, plus the wider **Lyon SIV** — a moderate consolidation of traffic and responsibility onto a single approach position outside peak coverage. The Lyon CTR (Class D, surface–2,500 ft) has a vertically elongated shape and directly abuts the **Lyon-Bron (LFLY)** CTR to the west, requiring active coordination and anticipation for west–east transit traffic. En route, the Lyon TMA/CTA sits within **Marseille ACC (LFMM)**, contiguous with the Paris (LFFF) and Geneva (LSAG) FIRs/ACCs — see the [general European airspace reference](../../../../airspace/europe.md); no dedicated French FIR/ACC brief exists yet in this Operations Manual (§18).

### 3.3 Runway excursion / dependent-runway capacity 🟥
This is the field's most distinctive characteristic. LFLL's two parallel runways — **17R/35L (4,000 m)** and **17L/35R (2,670 m)** — share essentially the same magnetic alignment (QFU 173°/353° for both) and are **operationally dependent**: simultaneous takeoffs and landings between them are not permitted. Rather than alternating arrivals and departures across both runways, the field's standing preferential pattern **segregates them by role**: in the dominant north-flow ("35") configuration, **35L (the long runway) is the departure runway and 35R (the short runway) is the arrival runway**; the reciprocal south-flow ("17") configuration mirrors this as **17R for departure, 17L for arrival**. In practice this means the **habitual landing runway is the shorter 2,670 m strip**, not the longer 4,000 m one — a real Threat & Error consideration for landing-performance planning (see §7, §16) and one that a crew accustomed to "longest runway = usual arrival runway" fields should not assume here. No displaced thresholds were found on either runway in reachable sources (TORA=TODA=ASDA=LDA on both, full length each direction).

### 3.4 Weather threat 🟧
LFLL's own operator states the field does **not** suffer from lake/valley fog, sitting on a wide, flat plain well away from the high Alpine peaks, and normally handles poor visibility via its ILS infrastructure. This is a favourable claim worth some scepticism: the Rhône corridor and inland Auvergne-Rhône-Alpes plain are broadly prone to winter radiation fog and frost under temperature inversion, a recognised regional pattern across inland France in the Oct–Mar window, and no independent MET frequency statistic was found to confirm or refute the operator's characterisation for this specific field. Treat winter fog/frost as a plausible seasonal caution pending a live METAR/TAF climatology check, rather than a non-issue. The airport's published snow/de-icing season runs **mid-November to mid-April** (see §11/§14), which is itself a signal that winter low-temperature/precipitation ops are a standing consideration here even if fog specifically is overstated as absent.

### 3.5 Operational considerations 🟧
Plan around three durable characteristics: (1) the **dependent-runway, segregated-use pattern** (§3.3) — know which runway is assigned which role before requesting a non-standard configuration; (2) **regional terrain awareness** east/southwest of the field driving AMG/MSA sectoring (§3.1); and (3) the **noisiest-aircraft night restriction (22:00–06:00)** — a narrower constraint than a blanket curfew, but still worth a schedule check for any late/early rotation (§6/§12). RFF, navaid and approach infrastructure are all reasonably represented in reachable public sources but not primary-AIP-verified; the open items in §18 are mostly currency/verification gaps rather than known safety-critical deficiencies.

---

## 4. Cautions & Warnings

- **The habitual landing runway is the shorter 2,670 m strip (17L/35R)**, not the longer 4,000 m runway (17R/35L) — do not assume the long runway is the default arrival; check ATIS/assigned configuration.
- **The two runways are dependent** — simultaneous takeoff/landing operations between them are not permitted; expect single-stream sequencing logic even though there are nominally two runways.
- **Relief east and southwest of the field** drives non-trivial AMG/MSA sectoring, including a specific 3,300 ft caution zone south of the field during ILS-intercept radar vectoring — do not descend below the sectored MSA early.
- **RWY 17R has no published ILS** (RNP/VOR only) — do not expect an ILS on that specific runway end.
- **Winter fog/frost risk is disputed between the operator's own public statement (minimal) and general regional inland-valley climatology (plausible)** — do not take the operator's "no fog" claim as a substitute for checking current METAR/TAF/TAF-trend at planning.
- **Noisiest-aircraft restriction 22:00–06:00** (Chapter 3, cumulative margin <13 EPNdB) applies — modern K Global equipment should be compliant, but do not assume a blanket "no restriction" picture for a late/early rotation.
- Mag variation, RFF category and ILS sub-category are sourced to tier-4 references only — treat exact current values as 🟧 pending a live-AIRAC/primary-AIP cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not identified as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **dependent-runway segregated-use pattern** and **regional relief east/southwest of the field**. 🟧
- **Crew-qualification gate:** None identified beyond standard type currency; no CAT II/III-specific crew-qualification requirement confirmed (ILS sub-category itself is unconfirmed — §18). 🟧
- **Operating restrictions / bans:** No blanket curfew; **noisiest-aircraft restriction 22:00–06:00** (Chapter 3, cumulative margin <13 EPNdB, effective Feb 2023) applies. No RNP AR requirement or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Schengen/non-Schengen international arrival; no special state permit identified. 🟩
- **Operations notes:** ANSP/tower and approach services are French DGAC/DSNA provision (Lyon Tower/Ground/Delivery on-field; Lyon Approach for TMA/CTA, also covering Chambéry/Annecy approach when closed); en route under **Marseille ACC (LFMM)**. Airport operator is **Aéroport de Lyon** (VINCI Airports group).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Ground/Delivery/Approach — assumed H24 as a scheduled international field; not independently itemised | 🟧 |
| AD operating hours | H24 assumed; no blanket night closure identified | 🟧 |
| Night / curfew restrictions | No blanket curfew; **noisiest-aircraft (Chapter 3, <13 EPNdB) restriction 22:00–06:00** since Feb 2023 | 🟧 |
| RFF category | **Category 9** (tier-4 sourced) | 🟧 |
| Fuel | Not confirmed — supplier/hours unknown in reachable sources | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Presumed available for scheduled international service; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not individually confirmed in reachable public sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 17R | 4,000 × 45 m | Asphalt / PCN not published 🟧 | 4,000 m | 4,000 m | 4,000 m | 4,000 m | Long runway; standard **departure** runway in south-flow; no ILS this end (RNP/VOR only) |
| 35L | 4,000 × 45 m | Asphalt / PCN not published 🟧 | 4,000 m | 4,000 m | 4,000 m | 4,000 m | Same physical runway as 17R; standard **departure** runway in north-flow; ILS/LOC this end |
| 17L | 2,670 × 45 m | Asphalt / PCN not published 🟧 | 2,670 m | 2,670 m | 2,670 m | 2,670 m | Short runway; standard **arrival** runway in south-flow; ILS/LOC this end |
| 35R | 2,670 × 45 m | Asphalt / PCN not published 🟧 | 2,670 m | 2,670 m | 2,670 m | 2,670 m | Same physical runway as 17L; standard **arrival** runway in north-flow; ILS/LOC this end |

*No displaced thresholds identified — TORA/TODA/ASDA/LDA equal on both runways, both directions, in every reachable source cross-checked (IVAO France operational reference; SkyVector; OurAirports). Intersection take-off distances are published for both runways (multiple entry points reducing available TORA) — confirm exact intersection/distance pairing on the current AIRAC chart before planning an intersection departure. All distances in metres. Both runways share essentially the same QFU (173°/353°) and are dependent (§3.3) — not independently confirmed against a primary AIP table this pass.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Saint-Ex ATIS | 126.18 🟧 | H24 assumed | Not independently confirmed |
| Delivery | Saint-Exupéry Delivery | 121.655 | H24 assumed | Pre-flight/start-up clearance |
| Ground | Saint-Exupéry Ground | 121.830 | H24 assumed | Stand/gate to runway-holding-point jurisdiction only — taxiways between the two runways are Tower's, not Ground's (§13) |
| Tower | Saint-Exupéry Tower | 120.455 | H24 assumed | A combined Tower/Approach position (132.00) exists for lower-traffic periods |
| Approach | Lyon Approach | 136.075 (primary); sector freqs 120.230 / 125.430 / 131.310 / 133.150 | H24 assumed | Also covers Chambéry (LFLB)/Annecy (LFLP) approach when those are closed, and the Lyon SIV |
| Information / FIS | Lyon Information | 135.20 / 135.52 | — | Wider Lyon SIV flight-information service, distinct from on-field ATIS |
| Centre / FIR | **Marseille ACC (LFMM)** | Per current AIRAC | H24 | No dedicated French FIR brief exists yet — see [Europe airspace general reference](../../../../airspace/europe.md); §18 open item |

*Sourced to a cross-check of SkyVector's public frequency listing and the IVAO France operational reference document for LFLL (a network-simulation training document, not regulatory — cited per governance as operational cross-check, not as AIP authority). Treat exact current frequencies as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | LSE | 114.75 | H24 assumed | On-field, "Lyon Saint-Exupéry" |
| ILS/LOC 17L | LSS | 109.1 | H24 assumed | Category not confirmed 🟧 |
| ILS/LOC 35R | LSN | 111.5 | H24 assumed | Category not confirmed 🟧 |
| ILS/LOC 35L | SAN | 110.75 | H24 assumed | Category not confirmed 🟧 |
| — 17R | — | — | — | **No ILS published this end** — RNP/VOR only |
| VOR (en route) | LTP | 115.55 | H24 assumed | La Tour du Pin, ~21 NM |
| VOR (en route) | CBY | 115.40 | H24 assumed | Chambéry, ~30 NM |
| VOR (en route) | PAS | 116.60 | H24 assumed | Passeiry, ~47 NM |
| NDB (en route) | CH | 346 kHz | H24 assumed | Chambéry, ~35 NM |

*All idents/frequencies cross-checked between SkyVector and the IVAO France operational reference; not independently re-confirmed against a current-AIRAC primary source.*

---

## 10. Arrival

- **Transition altitude / level:** TA **5,000 ft**; TL **FL60** (1013 < QNH < 1048 hPa) or **FL70** (977 < QNH < 1012 hPa) — standard French AIP-format figures per the IVAO France operational reference; not independently re-confirmed against a current primary AIP. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/config-driven. North-flow ("35-config") is standard: **35R for arrival** (short runway), 35L for departure. South-flow ("17-config") reciprocal: **17L for arrival** (short runway), 17R for departure. Traffic-pattern altitude 1,800 ft QNH; left-hand circuit for runway 17, right-hand for runway 35.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 17L | ILS/LOC; RNP; VOR | Standard arrival runway, south-flow |
| 17R | RNP; VOR | No ILS this end; standard departure runway, south-flow |
| 35R | ILS/LOC; RNP; VOR | Standard arrival runway, north-flow |
| 35L | ILS/LOC; RNP; VOR | Standard departure runway, north-flow (ILS present but not the habitual arrival end) |

- **STARs (names only):** AMVAR, PINED, FEDZI, LESPI, MEZIN, MTL, MILPA — verify current AIRAC.
- **LVP:** Trigger conditions not confirmed from a primary source; ILS availability on 3 of 4 runway ends is the standing low-visibility infrastructure — sub-category (I/II/III) not confirmed. 🟧
- **Missed approach watch-items:** Regional relief east/southwest of the field and the 3,300 ft south-side caution zone during ILS-intercept vectoring are the operative terrain-awareness items on a go-around; the dependent-runway pair (§3.3) also means a missed approach re-sequences into a single-stream environment rather than a free choice of two independent runways.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** ALURA, BELEP, BELUS, BUSIL, MABES, MADOT, MOKIP, MURRO, REPSI, ROMAM, RISOR (RNAV) — suffixed by configuration (north/south flow) on the current chart. BELEP, MURRO, REPSI, RISOR and ROMAM carry a piston/turboprop restriction 06:00–22:00 local (not relevant to K Global jet equipment). A non-RNAV/omnidirectional departure option exists for aircraft not RNAV-1 capable (runway-heading climb to 5,000 ft then assigned routing) — verify on current chart.
- **RNP / climb-gradient requirements:** SIDs are RNAV; confirm RNP-1 equipage/gradient per the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Ground has jurisdiction from stand/gate to the runway 17R/35L holding points; taxiways between the two runways are Tower's jurisdiction, not Ground's (§13). Several stands carry push-back-direction restrictions — see [Dispatch §3](dispatch.md).
- **ATC slot / CTOT & clearance:** Slot-coordination level not confirmed. 🟧 EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard EU practice; not independently LFLL-sourced this pass.
- **De-icing:** Available; snow/de-icing season runs **mid-November to mid-April**; potassium-formate de-icing/anti-icing fluid; holdover typically up to ~1.5 h in normal conditions, as little as ~20 min in heavy snowfall. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** RNAV SID structure (§11) is the primary noise-routing mechanism; no additional named noise-abatement departure track identified beyond the standard SIDs.
- **Night noise / dB limits:** No blanket curfew; **noisiest-aircraft restriction** (Chapter 3 aircraft, cumulative margin below 13 EPNdB) applies **22:00–06:00**, effective 1 Feb 2023 — intended to cut nighttime noise by roughly 4 dB versus the prior regime. Modern Chapter 4/Stage 4-equivalent equipment is very likely compliant, but confirm against current type-certification margin data if operating an older airframe.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Three terminals (T1, T2, T3); a single taxiway (parallel to the long runway, 17R/35L) serves all three terminals plus the cargo apron and general-aviation parking. Several stands carry **push-back-direction restrictions** (e.g. certain stands prohibited from pushing south, east or west); a small number of stands and one apron sector are reported closed. Widebody aircraft occupy paired/double stand positions at some gates, blocking the adjacent single stands. See [Dispatch §3](dispatch.md) for the stand-restriction detail. 🟧
- **Push-back:** Ground-controlled from stand/gate; specific mandatory-vs-self-manoeuvre policy by code letter not confirmed. 🟧
- **Standard taxi routes:** The single parallel taxiway structure keeps routing comparatively simple relative to a multi-runway hub; confirm with Ground/Apron on the day, particularly for the taxiways lying **between** the two runways, which fall under **Tower's** jurisdiction rather than Ground's.
- **Hot spots / tight taxiways:** Most aircraft can use the full taxiway network; the largest Code F types (A380-class, B747-8-class, An-124-class) have a restricted taxi routing per the local operational reference — confirm applicability against the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for any K Global type in that class. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧
- **Rail integration:** A dedicated SNCF TGV/OUIGO station (Calatrava-designed canopy) sits immediately adjacent to the terminal complex, with the **Rhônexpress** tram terminus on its level −1 linking to central Lyon (Part-Dieu) in under 30 minutes; the station serves roughly 30 French and Italian cities daily. This is a passenger/crew ground-connection asset rather than an airside operational factor, but it is a defining feature of this field worth noting for crew logistics and any rail/air interline planning.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate climate on the plain east of Lyon, in the Rhône corridor; the field operates in both north-flow ("35") and south-flow ("17") configurations, with north-flow described as the standard/preferential pattern.
- **Seasonal hazards:** The airport operator characterises the field as free of lake/valley fog; general regional inland-valley climatology nonetheless carries a plausible winter radiation-fog/frost risk under temperature inversion, not independently confirmed either way from MET statistics this pass (§3.4) 🟧. The **snow/de-icing season runs mid-November to mid-April**, using potassium-formate fluid; this is confirmed operator-sourced information, not just a general seasonal assumption.
- **Local effects:** Regional relief to the east and southwest (§3.1) is the standout local effect on IFR guidance/sectoring rather than any specific sea-breeze or valley-wind phenomenon.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (either runway of the dependent pair), navaid U/S, ILS status per runway end, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current Lyon SIV/TMA restricted-area (LF-R45 series) activation. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Spoke/destination** field — Category **S**, not a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**EDDF**](../../germany/eddf/index.md) (Frankfurt), [**LSZH**](../../switzerland/lszh/index.md) (Zurich), [**LFML**](../lfml/index.md) (Marseille-Provence) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Not confirmed in reachable public sources — supplier, hours and quality/grade unconfirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The 4,000 m runway (17R/35L) is non-limiting for any K Global type; the **habitual arrival runway (2,670 m, 17L/35R)** warrants an explicit landing-performance check for heavier types at high landing weight — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- No K Global type-specific restriction identified beyond the general landing-performance check flagged in §16 for the 2,670 m habitual arrival runway. The largest Code F aircraft types (A380/B747-8/An-124 class) are reported to have a restricted taxi routing at this field (§13) — verify applicability against any K Global type in that class via the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md); not otherwise expected to be a live consideration for the network's typical equipment at this Category-S field.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP unreachable this pass** — the SIA France eAIP domain is reachable, but the AD 2 LFLL page renders as an empty JavaScript frameset extract to a raw fetch (consistent with the documented access limitation in the source register). All figures below are tier-4 cross-checked but not primary-AIP-verified.
- **Runway designators — resolved but flag for final AIP confirmation.** Current tier-4 sources (2026) consistently show **17R/35L** (4,000 m) and **17L/35R** (2,670 m). Older sources (pre-2019, including an older AIP-cited Wikipedia snapshot) show **18R/36L** and **18L/36R** for the same physical runways — a real-world redesignation driven by magnetic-variation secular drift, corroborated by a dated (2019) public comment describing the change. The task brief's assumed "17L/35R and 18R/36L" combination reflects this same pair of designators from two different eras, not a genuine non-parallel-designator anomaly — both runways share the same QFU (173°/353°) and are genuinely parallel. Confirm against a current primary AIP table before treating as final.
- **Dependent-runway/no-simultaneous-ops rule** — sourced to a network-sim (IVAO France) operational reference, not a primary AIP table; treat as a working assumption pending confirmation.
- **Magnetic variation** (2.6° E) — tier-4/network-sim sourced only, epoch approximate.
- **PCN, take-off minima, ILS sub-category (I/II/III), LVP trigger RVR values** — none confirmed from a primary source.
- **RFF category** (Category 9) — tier-4 sourced (SSLIA-visit public reporting), not confirmed from a primary AIP table.
- **Fuel supplier(s)/hours, handling agent(s), customs/immigration desk hours, slot-coordination level** — none confirmed in reachable public sources.
- **Winter fog/frost frequency** — operator states the field is fog-free; general regional climatology suggests otherwise is plausible; not resolved from independent MET statistics this pass.
- **No dedicated French FIR/ACC brief exists yet in this Operations Manual** — this page cross-references the general [Europe airspace document](../../../../airspace/europe.md) as the closest available reference; a Marseille ACC (LFMM)-specific brief is a recommended future addition.
- **ATC frequencies** — cross-checked between SkyVector (public, crowd-sourced) and the IVAO France operational reference (network-sim, not regulatory); representative but not current-AIRAC-verified.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France (Service de l'Information Aéronautique) — AIP France, AD 2.LFLL.** Domain reachable (https://www.sia.aviation-civile.gouv.fr/, retrieved 2026-07-26); the specific AD 2 LFLL eAIP page (multiple AIRAC-dated deep links located, e.g. cycle effective 14 May 2026 at https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_14_MAY_2026/FRANCE/AIRAC-2026-05-14/html/eAIP/FR-AD-2.LFLL-fr-FR.html) **rendered empty to a raw fetch this pass** — JavaScript frameset, consistent with the documented access limitation for this source. Not used as a cited figure source this build; flagged throughout as the outstanding Tier-1 gap.
- OurAirports — https://ourairports.com/airports/LFLL/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/LFLL/Lyon-Saint-Exupery-Airport (retrieved 2026-07-26). *Runway dimensions/headings, ATC frequencies, navaid cross-check; includes a 2019 user comment documenting the 18/36→17/35 runway redesignation.*
- Wikipedia — "Lyon–Saint-Exupéry Airport" — https://en.wikipedia.org/wiki/Lyon%E2%80%93Saint-Exup%C3%A9ry_Airport (retrieved 2026-07-26). *ARP, elevation, historical runway designators (18R/36L / 18L/36R, citing a 2015-effective AIP snapshot), airport history.*
- IVAO France Division — "LFLL - Lyon Saint-Exupéry" operational reference (MANEX Aéroports Civils, AIRAC 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfll-lyon-saint-exupery (retrieved 2026-07-26). **Network-simulation training document, not regulatory** — used per governance as an operational cross-check only (runway/declared-distance table, preferential-configuration logic, dependent-runway rule, SID/STAR names, ATC positions/frequencies, ground-jurisdiction split, terrain/AMG caution notes, transition altitude/level).
- Agrepi — SSLIA (aircraft rescue and firefighting service) visit reports for LFLL, e.g. https://www.agrepi.com/visite-du-sslia-de-laeroport-lyon-saint-exupery-mars-2022/ (retrieved 2026-07-26). *RFF/SSLIA category-9 corroboration.*
- International Airport Review — "Winter operations are an Olympic sport for Lyon-Saint Exupéry Aéroport" — https://www.internationalairportreview.com/article/232604/winter-operations-are-an-olympic-sport-for-lyon%E2%80%91saint-exupery-aeroport/ (retrieved 2026-07-26). *Operator-sourced de-icing season/fluid/fog characterisation.*
- Air Journal — "Lyon Saint-Exupéry veut faire moins de bruit la nuit" — https://www.air-journal.fr/2021-10-09-lyon-saint-exupery-veut-faire-moins-de-bruit-la-nuit-5230917.html (retrieved 2026-07-26). *Noisiest-aircraft night-restriction detail (22:00–06:00, effective Feb 2023).*
- Lyon Aéroport (operator) — "SNCF Railway Station Lyon-Saint Exupéry" — https://www.lyonaeroports.com/en/access-transports/railway-station (retrieved 2026-07-26). *TGV/Rhônexpress integration detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
