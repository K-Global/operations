# WIII — Soekarno-Hatta · Airport Briefing

**WIII / CGK** · Jakarta (Tangerang, Banten), Indonesia · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Indonesia (AirNav Indonesia)-derived, Asia network build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Indonesia (Directorate General of Civil Aviation / AirNav Indonesia), AD 2 WIII, plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 06°07′25″S / 106°39′40″E (-6.1236, 106.6611) `[AIP Indonesia AD 2 WIII 2.2]` |
| Field elevation | **34 ft AMSL** (reference temperature 32°C); geoid undulation NIL `[AIP AD 2 WIII 2.2]` |
| Mag variation | 🟧 **1° E (2015) / 0.02° decreasing** per the retrieved AIP cycle — a 2015 epoch value, current-day figure not independently re-confirmed |
| Time zone | UTC+7 (WIB — Western Indonesia Time), no DST |
| Runway(s) | **07L/25R** 3,600 × 60 m (concrete) · **07R/25L** 3,660 × 60 m (concrete) · **06/24** ~3,000 m, opened Aug 2019 🟧 (third, crossing runway — dimensions/surface/PCN not found in the reachable AIP extract, tier-4 sourced only) |
| Preferential runway | Not explicit in the reachable AIP; equatorial light/variable wind regime — no dominant configuration identified this pass 🟧 |
| Longest LDA | 3,660 m (07R/25L) |
| Approaches | **ILS CAT I** confirmed on 07R/25L/25R (and 07L per an AIP remark, exact frequency not clearly extracted this pass); **no CAT II/III found in reachable sources** — treat as CAT I only pending a current-AIRAC check 🟧 |
| RFF category | **Category 9** `[AIP AD 2 WIII 2.6]` 🟩 |
| Control type | **Radar** — Jakarta Approach (Class B TMA, multiple named sectors: Terminal East/West/South, Arrival North/East, Lower North/Centre/East) under **Jakarta (WIIF)** FIR — see [Asia Airspace Brief](../../../../airspace/asia.md) |
| Elevation class | Near sea-level (34 ft) — **not** hot-and-high; the performance/reliability drivers here are equatorial convective weather, monsoon rain and seasonal regional haze, not density altitude |
| Special-airport status | 🟥 One of the busiest airports in Southeast Asia; **three-runway layout with a crossing runway (06/24) intersecting the parallel pair** — see §5 |
| Customs / PoE | **Yes** — H24 `[AIP AD 2 WIII 2.3]` 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **WMKK, WSSS, WARR** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Java north-coast plain; no close-in high terrain relevant to any arrival/departure/missed-approach path. |
| Runway length vs fleet perf | 🟩 | 3,600 m / 3,660 m main parallel pair is ample for any K Global type; the newer 06/24 crossing runway (~3,000 m, tier-4) is not independently confirmed as widebody-suitable this pass. |
| Approach availability / minima | 🟧 | ILS CAT I confirmed on the parallel-runway ends; no CAT II/III found in reachable sources — a real constraint if convective weather or haze drops visibility below CAT I minima. |
| Airspace / traffic / control | 🟥 | High-density Class B TMA under Jakarta Approach, multiple time-split sector handovers (UTC 1500–2300 vs 2300–1500), plus a crossing third runway — sustained high workload. |
| Weather / seasonal hazard | 🟥 | Equatorial convective activity and monsoon rain (windshear alerting equipment is AIP-listed), plus seasonal transboundary haze and regional volcanic-ash exposure — see §3.4/§14. |
| Curfew / slots / hours | 🟧 | AD operates H24 with no curfew identified; a dated tier-4 source reports **Level 2** slot coordination — not independently reconfirmed for the current season. |
| RFF category vs our types | 🟩 | Category 9 — adequate for our fleet; cross-check specific type requirement in OM B if needed. |
| Fuel availability | 🟩 | Jet A-1, H24, hydrant/dispenser/tanker infrastructure, ~108 million-litre capacity `[AIP AD 2 WIII 2.4]`. |
| Customs / handling / security | 🟧 | H24 customs confirmed; specific ground-handling agent for our operation not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
WIII sits at 34 ft AMSL on the flat coastal plain of northern Java — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟥
Jakarta Approach operates a **Class B TMA** with multiple named sectors — Terminal East/West/South, Arrival North/East, and Lower North/Centre/East — several of which hand off responsibility between Jakarta TMA East and Jakarta TMA West depending on the time of day (a recurring **UTC 1500–2300 / 2300–1500 split** is published against several sector frequencies). Crews should expect a sector/frequency change driven purely by time-of-day rather than geography. The field's **third runway (06/24)**, brought into service in 2019, **crosses the two parallel east–west runways (07L/25R, 07R/25L)** — an unusual geometry that adds runway-crossing sequencing to an already high-density radar environment. Cross-ref [Asia Airspace Brief](../../../../airspace/asia.md) (Jakarta / WIIF FIR).

### 3.3 Runway excursion 🟧
No displaced thresholds were found in the reachable AIP extract for either parallel runway — **not independently re-confirmed against a current AIRAC cycle**. LDA equals TORA on all four parallel-runway ends (no stopway/clearway distance reduces the landing distance). The recurring seasonal threat is **heavy monsoon-season convective rainfall reducing braking action** on a wet runway — no specific contamination/braking-action data confirmed this pass.

### 3.4 Weather threat 🟥
Jakarta has an **equatorial climate with no true dry-cold season** — a wet monsoon period (roughly Nov–Mar) brings heavy convective rain and thunderstorm activity, and the AIP's own MET-equipment list includes a **Low-Level Windshear Alert System (LLWAS)** — a direct signal that convective windshear is a recognised hazard here `[AIP AD 2 WIII 2.11]`. In the dry season (roughly Jun–Oct), the wider Sumatra/Kalimantan region is subject to **transboundary peatland/forest-fire haze**, which has closed airports and cut visibility to well below landing minima elsewhere in western Indonesia and the Malacca Strait region in past seasons (worse in El Niño years); Jakarta itself is typically less severely affected than up-country fields but is not immune and should be watched during a regional haze event. **Regional volcanic-ash exposure** exists from the Indonesian volcanic arc — most proximately **Anak Krakatau** in the Sunda Strait (~155 km WSW of Jakarta), within the VAAC Darwin advisory area; check volcanic-ash advisories before any Java Sea/Sunda Strait routing. With **no CAT II/III capability confirmed** at this field (§9), any of these events dropping visibility below CAT I minima is an operationally significant scenario. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md), [`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

### 3.5 Operational considerations 🟥
Plan around three durable items: (1) the **06/24 crossing-runway geometry** interacting with continuous parallel-runway traffic; (2) a dated tier-4 source reporting **Level 2 slot coordination** (coordinator historically Garuda Indonesia Schedule Planning, "JKTSPGA") — not independently reconfirmed for the current season, but worth building schedule margin around; and (3) the **published semi-circular initial-level assignment** on departure (aircraft are given FL280/FL290 as an interim level pending the final level from Jakarta ACC) — a workload item for crews expecting a direct climb clearance. RFF and fuel infrastructure are first-tier; most §18 open items are currency/administrative confirmations rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **LLWAS (Low-Level Windshear Alert System) is AIP-listed equipment** — convective windshear is a real, recognised hazard here, especially during the Nov–Mar monsoon.
- **RWY 06/24 crosses the parallel runway pair** — expect explicit runway-crossing clearances when cross-runway operations are active.
- **Seasonal transboundary haze** (dry season, worse in El Niño years) can reduce visibility with little notice across the wider western-Indonesia/Malacca Strait region — monitor regional smoke/haze advisories in season, even though Jakarta itself is usually less severely hit than up-country fields.
- **Anak Krakatau (Sunda Strait, ~155 km WSW)** is an active volcano under VAAC Darwin's advisory area — check volcanic-ash advisories before Sunda Strait/Java Sea routings.
- **ILS is Category I only** on the parallel-runway ends per the reachable primary source — do not assume CAT II/III capability without a current-AIRAC confirmation.
- **Jakarta Approach sector assignment changes by time-of-day (UTC)**, not just geography — confirm the active sector/frequency rather than assuming a fixed one.
- Mag variation is sourced to a 2015 epoch — treat the current-day value as approximate pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **high-density Class B TMA** and the **06/24 crossing-runway geometry**. 🟧
- **Crew-qualification gate:** No special crew-qualification requirement identified beyond standard type rating; confirm current RNAV1/RNP currency for the field's SID/STAR structure. 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction or night-ops limit found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Indonesian international arrival; no special state permit identified for scheduled commercial ops. 🟩
- **Operations notes:** ANSP — **AirNav Indonesia (Perum LPPNPI)**, operating Jakarta Approach/Tower/Ground/Delivery on the field and **Jakarta (WIIF)** FIR en route. Airport operator per the retrieved AIP cycle — **PT Angkasa Pura II (Persero)** `[AIP AD 2 WIII 2.2]`; note a possible 2026-era rebranding of the Indonesian state airport operator group is referenced in some tier-4 sources but not independently confirmed for this field. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 — no curfew identified | 🟩 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Category 9 | 🟩 |
| Fuel | Jet A-1, H24; hydrant pit, dispenser and fuel truck, ~108 million-litre capacity | 🟩 |
| PCN | Runway-specific (114/111, see §7); apron/taxiway PCN ranges roughly 85–119 depending on stand/taxiway | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Maintenance/hangar handling via **GMF AeroAsia** (~33,800 m² hangar) and **Avia Technics Dirgantara** (~14,779 m² hangar); ground/ramp handling agent for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07L | 3,600 × 60 m | Concrete / PCN 114/R/D/W/T | 3,600 m | 4,000 m | 3,660 m | 3,600 m | THR elevation 29 ft; strip 3,840 × 300 m |
| 25R | 3,600 × 60 m | Concrete / PCN 114/R/D/W/T | 3,600 m | 3,960 m | 3,660 m | 3,600 m | THR elevation 21 ft; strip 3,840 × 300 m |
| 07R | 3,660 × 60 m | Concrete / PCN 111/R/D/W/T | 3,660 m | 4,060 m | 3,720 m | 3,660 m | THR elevation 34 ft; strip 3,900 × 300 m |
| 25L | 3,660 × 60 m | Concrete / PCN 111/R/D/W/T | 3,660 m | 4,060 m | 3,720 m | 3,660 m | THR elevation 27 ft; strip 3,900 × 300 m |
| 06/24 | ~3,000 m (tier-4) 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Third, crossing runway, entered service Aug 2019; no declared-distance/PCN table found in the reachable AIP extract (which predates the runway's opening) |

*Source: AIP Indonesia (Vol II), AD 2 WIII 2.12/2.13, AMDT 76 eff. 07 Mar 2019 — runway geometry/declared distances/PCN for 07L/25R and 07R/25L. RESA/strip 120 × 240 m at each threshold; SWY 60 × 60 m each end; no arresting system. No displaced thresholds found in the reachable extract — 🟧 not independently re-confirmed. All distances in metres. RWY 06/24 dimensions are tier-4 (press) sourced only — treat as unverified pending a current-AIRAC pull.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Soekarno Hatta AD Information | 126.85 | H24 | |
| Delivery | Soekarno Hatta Delivery One / Two | 125.15 / 121.95 (124.25 secondary) | H24 | Combined with Ground positions at published times — take the assigned frequency |
| Ground | Soekarno Hatta Ground One / Two | 121.75 (128.95 secondary) / 121.6 (128.85 secondary) | H24 | |
| Tower | Soekarno Hatta Tower One / Two | 120.25 (119.3 secondary) / 118.2 (118.75 secondary) | H24 | Runway-specific assignment (Tower Two typically 07R/25L, Tower One typically 07L/25R per the retrieved cycle) 🟧 |
| Approach | Jakarta Radar / Jakarta Director / Jakarta Arrival | 124.35, 130.1 / 127.90, 119.75, 123.75 / 125.45 | Mixed H24 / 2300–1500 UTC by sector | Terminal East/West/South, Arrival North/East, Lower North/Centre/East sectors split by time-of-day — take the assigned frequency |
| Centre / FIR | Jakarta ACC — **Jakarta (WIIF) FIR** | Per current AIRAC | H24 | See [Asia Airspace Brief](../../../../airspace/asia.md) |

*Source: AIP Indonesia, AD 2 WIII 2.18, AMDT 76 eff. 07 Mar 2019 — treat exact frequencies/hours as 🟧 pending a live-AIRAC cross-check; the overall Delivery→Ground→Tower→Approach structure is stable.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | CKG | 113.6 (CH-83X) | H24 | Usable range limited beyond 40 NM in certain radials/altitudes per AIP remark |
| VOR/DME | DKI | 114.6 (CH-93X) | H24 | Corridor/approach-transition navaid, off-field |
| VOR | IMU | 116.4 | H24 | En-route reference navaid, off-field; usability restrictions below certain altitudes per AIP remark |
| ILS/LLZ 25L | ICGL | 111.1 | H24 | CAT I 🟧 (sub-category not confirmed beyond Cat I); glide path 3.0° |
| ILS/LLZ 25R | — | 110.9 | H24 | CAT I 🟧; glide path 3.0° |
| ILS/LLZ 07R | — | 110.5 | H24 | CAT I 🟧 |
| ILS/LLZ 07L | — | Not clearly extracted this pass 🟧 | H24 (assumed) | CAT I confirmed by AIP remark; exact frequency not confirmed this pass |

*All idents/frequencies sourced to AIP Indonesia, AD 2 WIII 2.19, AMDT 76 eff. 07 Mar 2019; long-lived infrastructure, but not independently re-confirmed against a current AIRAC. No CAT II/III capability found in the reachable extract.*

---

## 10. Arrival

- **Transition altitude / level:** **TA 11,000 ft**, representative TL **FL130** per the retrieved AIP `[AIP AD 2 WIII 2.17]` — this pairing is unusually high for a sea-level field; flagged for a current-AIRAC cross-check. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) assumed — no local override confirmed this pass.
- **Preferential runway logic:** Not explicit in the reachable AIP; light/variable equatorial wind with a diurnal coastal sea/land-breeze pattern typical of Java's north coast — no dominant configuration confirmed. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07L | ILS (CAT I) | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | |
| 25R | ILS ICGL... (CAT I) | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | |
| 07R | ILS (CAT I) | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | |
| 25L | ILS (CAT I) | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | |
| 06/24 | Not published / verify 🟧 | — | — | New crossing runway; approach type not confirmed in reachable sources |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. Departures are confirmed to use an RNAV 1 transition/departure-route structure `[AIP AD 2 WIII 2.22]`; arrivals likely mirror this but names are not confirmed. 🟧
- **LVP:** No specific LVP/RVR trigger figures confirmed this pass; the practical visibility-reduction drivers at this field are monsoon convective rain and, seasonally, regional haze rather than radiation fog. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative missed-approach concern is re-sequencing into a high-density Class B TMA with a crossing third runway.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. Confirmed structure: SIDs are published as a **TRANSITION route plus a DEPARTURE route**, flown under **RNAV 1** `[AIP AD 2 WIII 2.22]`. 🟧
- **RNP / climb-gradient requirements:** RNAV 1 departures are standard at this field — verify gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Pilots are requested to call **Clearance Delivery for ATC clearance 25 minutes before pushback** (relative to EOBT); clearance may be cancelled if unable to push back within a 15-minute grace period past EOBT, or if the aircraft returns to the apron or develops a technical problem. Pushback is to be requested only when ready, and completed within 5 minutes of approval. Apron-specific pushback facing-direction/break-away points are separately published per stand `[AIP AD 2 WIII 2.20]` — confirm with Apron/Ground on the day.
- **ATC slot / CTOT & clearance:** A dated tier-4 source reports **IATA Level 2** slot coordination (coordinator historically Garuda Indonesia Schedule Planning, "JKTSPGA") — not independently reconfirmed for the current season. 🟧 Departing aircraft are given an interim **FL280/FL290** climb clearance pending the final cruise level from Jakarta ACC under a semi-circular level-assignment methodology `[AIP AD 2 WIII 2.20]`.
- **De-icing:** **NIL** — equatorial climate, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Reserved / NIL per the retrieved AIP — no published noise-abatement departure/approach routing found `[AIP AD 2 WIII 2.21]`. 🟩
- **Night noise / dB limits:** None identified in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Apron system spans Aprons A–J plus cargo/remote aprons; **Apron G (stands G15–G57)** and **Apron J** are equipped with an Advanced Visual Docking Guidance System (Safedock Type 3, laser-scanning) covering narrow-body **and** wide-body aircraft — the likely widebody/international cluster (broadly aligned with Terminal 3's international pier), but the exact Code E-capable subset is not itemised in the reachable extract. 🟧
- **Push-back:** Mandatory, apron-specific facing-direction and break-away points are separately published per stand/apron — confirm the assigned procedure with Ground/Apron on the day.
- **Standard taxi routes:** Extensive N/S/E/W-designated parallel and connector taxiway system feeding rapid-exit taxiways off both parallel runways; a published sign-box point on TWY SP2/NP2 marks where departing aircraft change to the monitoring Tower frequency.
- **Hot spots / tight taxiways:** No dedicated named hot-spot chart section was found in the reachable AIP extract — verify current AIRAC. The practical caution points are the apron-specific pushback choreography (several aprons use facing-and-break-away sequences) and the **06/24 crossing-runway** interaction with the parallel-runway taxi system. 🟧
- **Follow-me:** Availability not confirmed in reachable sources — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Equatorial, hot and humid year-round; no true dry-cold season. Two broad seasons — a **wet/monsoon period (roughly Nov–Mar)** dominated by the northwest monsoon, and a **dry period (roughly Jun–Sep)** dominated by the southeast monsoon, with transitional months in Apr–May and Oct.
- **Seasonal hazards:** The wet season brings **heavy convective rainfall and thunderstorm activity**; the AIP's own MET-equipment list includes a Low-Level Windshear Alert System (LLWAS), confirming convective windshear is a recognised local hazard. The dry season carries a recognised regional risk of **transboundary peatland/forest-fire haze** originating in Sumatra and Kalimantan, which has historically closed airports and cut visibility sharply across western Indonesia and the wider Malacca Strait region (worse in El Niño years) — Jakarta is typically less severely affected than up-country fields but should be watched during an active regional haze event. **Regional volcanic-ash exposure** exists from the Indonesian volcanic arc (nearest notable activity: Anak Krakatau, Sunda Strait, ~155 km WSW), within VAAC Darwin's advisory area.
- **Local effects:** Coastal Java north-shore location — a typical diurnal sea-breeze/land-breeze pattern is expected; no terrain-driven local effects (flat coastal plain).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, volcanic-ash advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. any 06/24 crossing-runway restrictions), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNAV1 procedures, regional haze/smoke advisories, VAAC Darwin volcanic-ash bulletins. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Asia-region destination / network node (not a base).
- **Nearest suitable alternates:** WMKK, WSSS, WARR `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1, H24, hydrant pit/dispenser/fuel-truck infrastructure, ~108 million-litre capacity `[AIP AD 2 WIII 2.4]` — no cold-soak/fuel-freeze consideration at this equatorial field. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main parallel-runway pair (3,600–3,660 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration confirmed for WIII beyond the network-generic reference — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). Field length/RFF are non-limiting for any K Global type; the operative planning considerations are seasonal convective weather/haze and the field's high-density, crossing-runway traffic environment rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RWY 06/24** — declared distances, surface and PCN not found in the reachable AIP extract (which predates the runway's Aug 2019 entry into service); length (~3,000 m) is tier-4 (press) sourced only.
- **Magnetic variation** — sourced to a 2015 epoch; current-day value not independently re-confirmed.
- **ILS sub-category** — CAT I confirmed on 07R/25L/25R and by remark on 07L; no CAT II/III found — confirm no upgrade on the current AIRAC.
- **ILS 07L exact frequency** — not clearly extracted from the reachable source this pass.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima and LVP/RVR trigger figures** — not confirmed in reachable sources.
- **Preferential-runway/wind-configuration logic** — not explicit in the reachable AIP.
- **Slot coordination level** — a dated tier-4 source reports Level 2 (coordinator historically Garuda Indonesia Schedule Planning); not independently reconfirmed for the current season.
- **Airport operator branding** — retrieved AIP cycle names PT Angkasa Pura II (Persero); a possible 2026-era state-operator rebrand referenced in some tier-4 sources is not independently confirmed for this field.
- **Ground/ramp handling agent** for our operation — not confirmed.
- **Widebody/Code E stand subset** within the AVDGS-equipped Apron G/J range — not itemised in the reachable extract.
- **Named ground hot spots** — no dedicated hot-spot chart section found in the reachable extract; verify current AIRAC.
- **Follow-me availability** and **engine run-up / reverse-thrust policy** — not confirmed in reachable sources.
- **AIP cycle currency** — primary source retrieved carries AMDT 76, eff. 07 Mar 2019, which predates the third runway's Aug 2019 opening; the original two-runway data should still be cross-checked against a live AIRAC before treating as audit-grade.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Indonesia (Vol II), AD 2 WIII 2.1–2.22**, AMDT 76, eff. 07 Mar 2019 — ARP/elevation/mag var, RFF category, apron/taxiway PCN, runway physical characteristics, declared distances, approach lighting, ATS airspace, communications, navaids, departure/arrival/low-visibility ground procedures — mirrored via https://pdfcoffee.com/119-wiii-ad-2-1-to-2-63pdf-pdf-free.html (retrieved 2026-07-26). **Treat exact current-cycle figures (frequencies, minima, PCN) as needing a live-AIP cross-check; the cycle predates the third runway.**
- OurAirports — https://ourairports.com/airports/WIII/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/WIII/Jakarta-International-Soekarno-Hatta-Airport (retrieved 2026-07-26). *Chart pointer.*
- Wikipedia — "Soekarno–Hatta International Airport" — https://en.wikipedia.org/wiki/Soekarno%E2%80%93Hatta_International_Airport (retrieved 2026-07-26). *Terminal/general corroboration.*
- FlightGlobal — "Soekarno-Hatta third runway enters service," 2019-08 — https://www.flightglobal.com/asia-pacific/2019/08/soekarno-hatta-third-runway-enters-service/ (retrieved 2026-07-26). *RWY 06/24 opening/length corroboration.*
- Tempo.co — "Third Runway of Soekarno-Hatta Airport to Complete in 2019" — https://en.tempo.co/read/915437/third-runway-of-soekarno-hatta-airport-to-complete-in-2019 (retrieved 2026-07-26). *RWY 06/24 corroboration.*
- APACA / schedule-coordination.jp — Indonesia slot-coordinator directory — http://www.schedule-coordination.jp/apaca/db%20pdf/indonesia%201.pdf (retrieved 2026-07-26). *Slot-coordination level — dated reference, not independently reconfirmed.*
- AirNav Indonesia — Jakarta FIR Air Traffic Management Contingency Plan — https://www.airnavindonesia.co.id/wp-content/uploads/2024/11/atm-cp-lvl-1-jkt-fir.pdf (retrieved 2026-07-26). *Jakarta (WIIF) FIR corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
