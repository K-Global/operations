# EGPF — Glasgow · Airport Briefing

**EGPF / GLA** · Glasgow (Paisley), Renfrewshire, Scotland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the UK NATS eAIP (AD 2 EGPF); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 55°52′19″N 004°25′59″W `[UK NATS eAIP AD 2 EGPF, AIRAC 2022-06-16]` |
| Field elevation | **26 ft AMSL** (geoid undulation 178 ft; reference temperature 16°C) |
| Mag variation | **1.63°W** (2022 epoch), annual change **0.22°E** — drifting toward zero/easterly over time; not re-confirmed against a current-AIRAC value 🟧 |
| Time zone | UTC+0 (GMT) / UTC+1 (BST, EU/UK DST observed) |
| Runway(s) | **05/23** — single runway, 2,665 × 46 m, asphalt, grooved, PCN 65/R/B/W/T |
| Preferential runway | Wind-driven; no published preferential-runway rule found in the reachable extract — verify current AIP 🟧 |
| Longest LDA | 2,661 m (RWY05); RWY23 LDA reduced to 2,356 m by a **displaced threshold** — see §7 |
| Approaches | **ILS RWY05 (IUU)** and **ILS RWY23 (IOO)**, both CAT III-designated per LLZ; sub-category (IIIA/IIIB/IIIC) not confirmed 🟧; RNP/other approach types not confirmed 🟧 |
| RFF category | **A9 H24; Category A10 available by prior arrangement** — directly relevant to any Code F/widebody op, see §5/§17 🟥 |
| Control type | **Radar** — Glasgow Approach/Radar on the field; **Scottish FIR (EGPX)** en route — **no dedicated Scottish FIR brief exists yet in this network**, see §18 |
| Elevation class | Near sea-level (26 ft) — **not** hot-and-high; no density-altitude performance driver |
| Special-airport status | 🟥 **Code F (A380) special stand-safeguarding and taxi procedures** — Stand 30 and associated hold-point/turnaround logic; genuinely notable for a single-runway regional-category field — see §5/§13 |
| Customs / PoE | **Yes — H24** (Customs & Immigration H24 per AD 2 EGPF hours table) |
| K Global aerodrome category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGPH, EGCC, EGLL** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 14 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field itself is coastal/near sea-level; moderate high ground exists in the wider Clyde basin (Kilpatrick Hills to the N/NE, Renfrewshire/Gleniffer Braes uplands to the S) — general regional geography, not quantified from this build's AIP extract. Verify the MSA/obstacle ring on the current chart. |
| Runway length vs fleet perf | 🟧 | Single runway 2,665 m; LDA 2,661 m (RWY05) / 2,356 m (RWY23, displaced threshold) — adequate for narrowbody and most widebody types at typical weights, but the RWY23 LDA gap and single-runway/no-crosswind-alternative geometry warrant weight-and-balance attention on a limiting day. |
| Approach availability / minima | 🟩 | ILS on both runway ends, CAT III-designated — strong low-visibility capability for a regional-category field; exact sub-category and minima not confirmed this pass. |
| Airspace / traffic / control | 🟧 | Class D CTR/ATZ, radar service (Glasgow Approach/Radar); **Scottish FIR (EGPX)** en route has **no dedicated FIR brief in this network** — a real gap, see §18. Ground frequency runs seasonal/tactical hours, not H24. |
| Weather / seasonal hazard | 🟥 | West-coast Scotland Atlantic-exposed weather, and a **quantified, AIP-documented wildlife hazard** — large Greylag/Canada goose and Whooper swan flocks (100+ birds, seen flying up to 500 ft) Sept–Apr — a genuine, sourced TEM item. |
| Curfew / slots / hours | 🟧 | No hard curfew identified, but a real **night-noise restriction**: jets not meeting ICAO Annex 16 Vol I Part II Ch.3 noise standards may not depart 2330–0559 (2230–0459 local-adjusted) except by discretionary written Operations Director permission — narrower than a full movement ban but a live operative restriction. |
| RFF category vs our types | 🟥 | Base cover is **A9 H24**; **A10 is available only by prior arrangement** — any Code F (A380) or RFF-A10-requiring movement must be coordinated in advance, not assumed on demand. |
| Fuel availability | 🟩 | AVTUR Jet A-1 and AVGAS 100LL, H24 fuelling, two named suppliers. |
| Customs / handling / security | 🟩 | Customs & Immigration, Security and Handling all published H24; four named handling agents on field. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
EGPF sits at 26 ft AMSL on the Clyde coastal plain west of Glasgow. The reachable AIP extract used for this build did not carry a quantified MSA/obstacle table, so no close-in terrain figures are stated here as sourced fact. As general regional geography (not AIP-sourced this pass), the wider Clyde basin includes moderate high ground — the Kilpatrick Hills to the north/north-east and the Renfrewshire uplands/Gleniffer Braes to the south — neither of which is unusually close-in to the runway 05/23 centreline, but neither independently confirmed against the current chart's MSA sectors either. Treat this as a non-quantified 🟧 item: read the MSA ring on the current chart as routine practice before relying on this brief for terrain clearance.

### 3.2 Airborne conflict / traffic 🟧
Glasgow operates a **Class D CTR** with an **ATZ of 2.5 NM radius (RWY 05/23), SFC–2,000 ft**, worked by **Glasgow Approach/Glasgow Radar** (119.100 MHz H24, published DOC 42 NM/15,000 ft; secondary sectors 125.250 and 128.755 MHz as directed by ATC). En route, the field sits inside **Scottish FIR (EGPX)**. **No Scottish (EGPX) FIR brief exists yet in this network** — the only FIR brief built so far covers Langen (EDGG) in Germany. This file links to the [Europe area brief](../../../../airspace/europe.md) for general regional context pending a dedicated Scottish FIR build; flag this explicitly as a real network gap, not an oversight specific to this file — see §18.

### 3.3 Runway excursion 🟥
Single runway **05/23**, 2,665 × 46 m, no crosswind alternative on the field. RWY23 carries a **displaced threshold** — declared LDA of 2,356 m against a TODA of 3,090 m, a genuine ~734 m gap explained by the displaced-threshold arrows published on RWY23; do not plan RWY23 landing distance off the full physical/TODA figure. Separately, and independent of runway direction: **Code E/F aircraft are not permitted to execute a 180° turn on RWY05/23 under any circumstances** — an aircraft requiring the full length of RWY23 for takeoff must instead back-track and turn within a purpose-built **92 m × 61 m runway extension, entered at Bravo1**. Only aircraft up to **30,000 kg MTWA** may use taxiway link **C1** to enter/exit the runway — a genuine weight-restricted ground-movement constraint, independently corroborated by a VATSIM UK published local-procedure reference for this field (see Sources).

### 3.4 Weather threat 🟥
West-coast Scotland is exposed to Atlantic frontal systems — wind, rain and reduced visibility are routine seasonal considerations; no EGPF-specific frequency statistic was sourced this pass, treat as general regional climatology pending a dedicated seasonal study. The **standout, AIP-documented threat is wildlife**: large numbers of Greylag/Canada geese and Whooper swans are present **September–April**, with flocks regularly exceeding **100 birds** and observed flying **up to 500 ft** — squarely in the approach/departure flight-path altitude band. Active bird control is conducted on the field with ATC liaison, but this is a real, quantified, sourced strike-risk item, not a generic caution — brief it specifically for any autumn/winter/spring rotation. Soft grass verges alongside paved surfaces also warrant caution when taxiing off the marked centreline.

### 3.5 Operational considerations 🟥
The centrepiece operational consideration at EGPF is the field's **Code F (A380) special stand-safeguarding regime**, built around **Stand 30** (see §5/§13 for full detail) — a genuinely notable capability for a single-runway, VAMSYS-category-R field, and one that requires specific crew/ground-ops briefing rather than generic widebody handling assumptions. In parallel, plan around: (1) **RFF category A9 H24 with A10 only by prior arrangement** — any operation requiring RFF A10 (Code F/A380-class) must be coordinated ahead of time, not assumed; (2) the **night-noise Chapter-3 restriction** (2330–0559/2230–0459) — narrower than a hard curfew but a real gate on non-compliant jet departures without discretionary Operations Director permission; and (3) the **seasonal wildlife hazard** (§3.4). The RWY23 displaced threshold and the Code E/F no-180°-turn rule (§3.3) are durable ground/runway-discipline items. Open items in §18 are largely currency/administrative confirmations against this build's 2022-cycle AIP extract, not safety-critical gaps.

---

## 4. Cautions & Warnings

- **RWY23 has a displaced threshold** — published LDA is 2,356 m, notably shorter than TODA (3,090 m); never plan RWY23 landing distance off the physical/TODA figure.
- **Code E/F aircraft may never execute a 180° turn on RWY05/23** — a full-length RWY23 departure requires back-track and turn in the dedicated 92 m × 61 m extension via Bravo1.
- **Taxiway link C1 is weight-restricted to ≤30,000 kg MTWA** — do not route a widebody or Code C/D/E/F aircraft via C1.
- **Stand 30 (Code F/A380) has its own hold-point and taxi logic that changes with runway-in-use and CAT status** — do not apply generic widebody taxi assumptions here; see §13.
- **RFF Category A10 is by prior arrangement only** — confirm well ahead of any planned Code F/A380 movement; do not assume A10 cover is standing.
- **Large goose/swan flocks (100+ birds, up to 500 ft) are a genuine seasonal hazard Sept–Apr** — brief bird-strike TEM specifically for this window.
- **Ground frequency (121.705) keeps seasonal hours and may close tactically in quiet periods** — closures are broadcast on ATIS; do not assume Ground is always live.
- **Jets not meeting ICAO Annex 16 Vol I Part II Ch.3 noise standards cannot depart 2330–0559 (2230–0459) without discretionary written Operations Director permission** — plan schedule buffer around this window.
- Runway/comms/navaid figures in this brief are sourced to a **2022 AIRAC cycle** and have not been independently re-confirmed against the current AIRAC — treat exact frequencies/PCN/mag-var as pending a live cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** VAMSYS aerodrome category **R**; not identified as a crew-restricted "special airport" in the AIP beyond the Code F (A380) stand-safeguarding regime, which is itself a real, briefable special procedure — see §13. 🟥
- **Crew-qualification gate:** CAT III currency required for full low-visibility capability; crews planning a Code F (A380) movement must be briefed on the Stand 30 hold-point/no-180°-turn logic before the flight. 🟧
- **Operating restrictions / bans:** **Code E/F 180° turns prohibited on RWY05/23 under any circumstances** (§3.3); taxiway link **C1 restricted to ≤30,000 kg MTWA**; jets not meeting **ICAO Annex 16 Vol I Part II Ch.3** noise standards barred from departure **2330–0559 (2230–0459)** except by discretionary written permission of the Operations Director; training flights are subject to restriction and can be curtailed following noise complaints — exact training-flight rules not detailed in the reachable extract 🟧.
- **Overflight / entry / permits:** Standard UK/CAA international arrival — no special state permit required. 🟩
- **Operations notes:** Admin — **Glasgow Airport Ltd**. Fuelling by **Pentland Aviation** and **Signature Aviation Services** (bowser). On-field handling agents: **Gama Aviation**, **Menzies Aviation**, **Signature Flight Support**, **Swissport GB Ltd** — H24 availability noted for at least some; exact per-agent hours not itemised in the reachable extract 🟧.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD Administration H24 | 🟩 |
| Night / curfew restrictions | No hard curfew identified; **ICAO Annex 16 Vol I Part II Ch.3 night-noise restriction 2330–0559 (2230–0459)** on non-compliant jets, waivable only by discretionary written Operations Director permission | 🟧 |
| RFF category | **A9 H24; A10 by prior arrangement** | 🟥 |
| Fuel | AVTUR Jet A-1, AVGAS 100LL — H24 (Pentland Aviation; Signature Aviation Services, bowser) | 🟩 |
| PCN | 65/R/B/W/T (RWY05/23) | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Gama Aviation, Menzies Aviation, Signature Flight Support, Swissport GB Ltd — H24 noted for at least some, not individually itemised | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 2,665 × 46 m | Asphalt, grooved / PCN 65/R/B/W/T | 2,658 m | 2,783 m | 2,658 m | 2,661 m | THR elevation 26 ft. Intersection-takeoff distances published from Link F/E/D (not individually transcribed — verify current chart for exact intersection TORA figures). |
| 23 | 2,665 × 46 m | Asphalt, grooved / PCN 65/R/B/W/T | 2,661 m | 3,090 m | 2,812 m | **2,356 m** | THR elevation 21 ft. **Displaced threshold** (AIP-published displaced-threshold arrows on RWY23) accounts for the LDA/TODA gap — never use TODA/physical length as a landing-distance proxy on this runway end. Intersection-takeoff distances published from Link A/B. Full-length departures require back-track/turn via the dedicated 92 m × 61 m extension entered at Bravo1 (Code E/F: no 180° turn permitted — §3.3). Following 2017 resurfacing, the threshold-to-Link-F section carries a published **fast-drying capability** after wet conditions. |

*Source: UK NATS eAIP, AD 2 EGPF (AIRAC effective 2022-06-16), retrieved 2026-07-26. All distances in metres. This is a single-runway field with no crosswind alternative — see §3.3 for the runway-excursion TEM read.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Glasgow Arrival/Departure Information | 129.575 | H24 | Also available via a 24-hour telephone playback line |
| Delivery | Not separately published in the reachable extract | — | — | 🟧 Confirm current chart — clearance delivery may be integrated with Ground/Tower at this field size |
| Ground | Glasgow Ground | 121.705 | **Seasonal** — Winter 0630–2130, Summer 0530–2030 (local) | May be closed tactically during quiet traffic periods; closures broadcast on ATIS — do not assume H24 |
| Tower | Glasgow Tower | 118.805 | H24 | |
| Approach / Radar | Glasgow Approach / Glasgow Radar | 119.100 (primary, DOC 42 NM/15,000 ft); 125.250 and 128.755 as directed by ATC | H24 | |
| Centre / FIR | Scottish FIR (EGPX) en route | Per current AIRAC | H24 | No dedicated Scottish FIR brief exists in this network — see §18. A VATSIM UK reference for this field labels the en-route sector "Scottish Control" — network-sim corroboration only, not independently AIP-confirmed this pass 🟧 |
| Fire (non-ATS) | — | 121.600 | — | Non-ATS fire frequency |

*Source: UK NATS eAIP, AD 2 EGPF (AIRAC effective 2022-06-16), retrieved 2026-07-26 — treat exact frequencies as 🟧 pending a live-AIRAC cross-check, though the overall service structure (ATIS/Ground/Tower/Approach split, seasonal Ground hours) is stable and independently corroborated by a VATSIM UK published local-procedure reference for this field (see Sources).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS LLZ RWY05 | IUU | 110.100 | H24 | CAT III-designated; LLZ elevation 25 ft |
| ILS GP RWY05 | — | 334.400 | H24 | 3° glidepath, RDH 51.5 ft, elevation 64 ft. **Caution:** glidepath flags may occur when the aircraft is below glidepath and right of centreline. |
| ILS LLZ RWY23 | IOO | 110.100 | H24 | CAT III-designated; LLZ elevation 33 ft |
| ILS GP RWY23 | — | 334.400 | H24 | RDH 50 ft, elevation 70 ft |
| DME | IUU (RWY05) / IOO (RWY23) | Paired with respective ILS | H24 | Zero range at threshold |
| VOR/DME | GOW | 115.400 (CH101X) | H24 | "Glasgow" VOR/DME — **shared navaid also serving Edinburgh** (EGPH); do not assume it is uniquely an EGPF aid when planning |
| VOR/DME | TRN | 117.500 (CH122X) | H24 | |

*Source: UK NATS eAIP, AD 2 EGPF (AIRAC effective 2022-06-16), retrieved 2026-07-26. ILS sub-category (IIIA/IIIB/IIIC) not stated beyond "CAT III" in the reachable extract — 🟧 verify on current chart.*

---

## 10. Arrival

- **Transition altitude / level:** TA **6,000 ft** (Glasgow QNH) — independently corroborated by a VATSIM UK published local-procedure reference for this field, which states all standard instrument departures climb initially to 6,000 ft on Glasgow QNH; TL by QNH not confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven; no published preferential-runway rule found in the reachable extract. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05 | ILS (IUU) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III-designated |
| 23 | ILS (IOO) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III-designated; displaced threshold reduces usable LDA (§7) |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III infrastructure on both runway ends implies LVP capability; exact RVR/trigger conditions not confirmed this pass. 🟧
- **Missed approach watch-items:** No quantified close-in terrain identified (§3.1); the seasonal wildlife hazard (§3.4) is a more immediate missed-approach-altitude-band consideration than terrain at this field.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧 A VATSIM UK reference for this field notes all standard instrument departures climb initially to 6,000 ft on Glasgow QNH, consistent with the TA above — network-sim corroboration only.
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify equipage/gradient per SID on current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in the reachable extract. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination level identified in the reachable extract — treat as unconfirmed rather than assuming a Level 1 (non-coordinated) status. 🟧
- **De-icing:** **Available H24** per the AD 2 EGPF operating-hours table. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Standard climb profile published for both runways, day and night — climb to **1,500 ft QFE**, then a minimum **500 fpm** climb gradient to **3,000 ft QFE**. ILS glidepath-intercept floor of **2,000 ft QFE** applies for jets on both runways. A **visual approach limitation** applies to aircraft **>5,700 kg MTWA**: a 5 NM/1,500 ft QFE gate.
- **Night noise / dB limits:** Noise limit **94 dB(A) day** (0600–2330 / 0500–2230) and **87 dB(A) night** (2330–0600 / 2230–0500) at monitoring points. **Jet aircraft not meeting ICAO Annex 16 Vol I Part II Ch.3 noise standards are not permitted to depart 2330–0559 (2230–0459)** except by discretionary written permission of the Operations Director — this is a Chapter-3-compliance-gated night restriction, not a blanket movement curfew; a compliant modern jet is not restricted by this rule.
- **Engine run-up restrictions:** Not published in the reachable extract. 🟧
- **Reverse thrust / idle-reverse policy:** Not published in the reachable extract. 🟧
- **Training flights:** Subject to restriction and can be curtailed following noise complaints — exact rules not detailed in the reachable extract. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟥 **Stand 30** is the field's established heavy/Code F position, with dedicated safeguarding procedures published at AD 2.20:
  - **CAT I, RWY23 in use:** Code F (A380) departures taxi via **A** to hold **A2**, then line up via **A1** — **no right turns permitted at this intersection** (runway width 45 m at that point, no turning area). Arrivals vacate at **G**.
  - **RWY05 in use:** Code F departures taxi via **G** to hold **G2**, then depart via **G1**. Arrivals vacate via **A** or **B**.
  - **CAT II/III conditions (either runway):** Code F aircraft hold at **A3/G2** and vacate at **A** or **G**.
  - A **reduced taxiway centreline-to-object clearance of 47.5 m** applies along specified sections — Alpha1-to-ATC-Tower, ATC-Tower-to-Golf2, and Golf2-to-Golf1 — to accommodate Code F wingspan.
  - **Red-light vehicle road-holding lights** are installed to stop vehicle traffic during Code F movements — expect active ground-vehicle management whenever a Code F aircraft is taxiing.
  - This regime is independently corroborated by a VATSIM UK published local-procedure reference for this field, which separately states Stand 30 is the preferred position for heavy-aircraft operators — a network-sim source, not regulatory, but consistent with the AIP-published safeguarding procedure.
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed in the reachable extract. 🟧
- **Standard taxi routes:** Vary by runway-in-use and CAT status per the Stand 30 logic above; confirm exact routing with Ground/Tower on the day. Code A–E aircraft may exit RWY05 via A1, B1 or E1, and RWY23 via A1, B1, D1, E1, F1 or G1 (VATSIM UK reference — network-sim corroboration only). 🟧
- **Hot spots / tight taxiways:** 🟥 Taxiway link **C1** is restricted to aircraft **≤30,000 kg MTWA** for entry/exit of RWY05/23 — do not route a Code C/D/E/F aircraft via C1. **Code E/F aircraft may never execute a 180° turn on RWY05/23** — the dedicated back-track/turn extension at the RWY23 end (92 m × 61 m, entered at Bravo1) is the only sanctioned method for a full-length RWY23 departure by these types. **Soft grass verges** alongside paved surfaces warrant caution when taxiing off the marked centreline.
- **Follow-me:** Availability not confirmed in the reachable extract. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** West-coast Scottish maritime climate, exposed to Atlantic frontal systems; frequent wind and rain are standard seasonal expectations. No EGPF-specific climatological statistic sourced this pass.
- **Seasonal hazards:** 🟥 **Wildlife — large Greylag/Canada goose and Whooper swan flocks present September–April**, regularly exceeding 100 birds and observed flying up to 500 ft; active bird control is conducted with ATC liaison, but this remains a genuine, quantified seasonal strike-risk item to brief. General Atlantic-exposed frontal weather (wind, low cloud, rain) is the standard seasonal pattern; no specific fog/icing statistic sourced this pass.
- **Local effects:** Soft grass verges caution when taxiing off centreline (§13); no other notable local terrain/sea-breeze effect sourced this pass.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. Stand 30/Code F safeguarding status and the C1/Bravo1 restrictions), navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade (esp. A10 availability if a Code F movement is planned), GPS/RAIM, current bird-hazard NOTAMs in season. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / network spoke — **not a K Global base** `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**EGPH**](../egph/index.md) (Edinburgh), [**EGCC**](../egcc/index.md) (Manchester), [**EGLL**](../egll/index.md) (Heathrow) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg; note EGPH shares the GOW VOR/DME with this field (§9).
- **Fuel-uplift notes:** AVTUR Jet A-1 and AVGAS 100LL, H24, via **Pentland Aviation** and **Signature Aviation Services** (bowser). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for narrowbody and typical widebody weights on RWY05; the RWY23 displaced-threshold LDA (2,356 m) warrants a weight check on a limiting day. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference, and §17 below for the Code F (A380) consideration.

---

## 17. Fleet-specific notes (optional)

- **A388 / Airbus A380 (OM B):** Any Code F movement at EGPF must plan around (1) **RFF Category A10 by prior arrangement** — not standing cover, coordinate ahead of the flight; (2) the **Stand 30 special stand-safeguarding and hold-point procedures** (§13), which vary by runway-in-use and CAT condition; and (3) the **Code E/F no-180°-turn rule** on RWY05/23, meaning a full-length RWY23 departure must back-track/turn via the dedicated extension at Bravo1. See [`OM B — A388 Dispatch`](../../../../../fleet/a388/dispatch.md) and [`OM E — Wake Turbulence Separation`](../../../../../flight-ops/wake-turbulence-separation.md) for the associated wake-category planning. Real-world precedent (a scheduled Code F service historically operating from the field's International pier) is consistent with the AIP's dedicated safeguarding procedure — this is a genuinely engineered capability at this field, not a theoretical one.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Scottish FIR (EGPX) brief does not yet exist in this network** — this is a real gap, not an omission specific to this file. Only a Langen (EDGG) FIR brief has been built to date. This file links to the [Europe area brief](../../../../airspace/europe.md) for general regional context in the interim.
- **AIRAC currency** — this brief is built from a NATS eAIP extract effective 2022-06-16; runway/comms/navaid figures have not been independently re-confirmed against the current AIRAC cycle. Treat exact frequencies, PCN, and mag-var as pending a live cross-check.
- **Magnetic variation** — 1.63°W at 2022 epoch, annual change 0.22°E; current-day value not independently re-confirmed.
- **SIDs/STARs (current names), IAF/FAF fixes, take-off minima, exact LVP/RVR trigger values, TL by QNH** — none confirmed from reachable sources this pass; pull the live current-AIRAC procedure set before use.
- **ILS sub-category (IIIA/IIIB/IIIC)** — stated only as "CAT III" in the reachable extract.
- **Preferential-runway rule, delivery frequency, start-up/push-back procedure, follow-me availability, push-back mandatory-vs-self-manoeuvre policy, engine run-up and reverse-thrust/idle-reverse policy** — none confirmed in reachable sources.
- **ATC slot-coordination level** — not identified in the reachable extract; do not assume non-coordinated status.
- **Terrain/MSA quantification** — the Kilpatrick Hills/Renfrewshire-uplands terrain note in §3.1 is general regional geography, not sourced from this build's AIP extract; verify the MSA ring on the current chart.
- **Handling-agent hours by individual agent** — H24 noted for "at least some" per the source hours table; not itemised per agent.
- **VATSIM UK cross-check used for corroboration only** (network-sim, not regulatory) — the Stand 30 heavy-aircraft designation, the C1/30,000 kg restriction, the 6,000 ft initial-climb altitude, and the RWY05/23 exit-taxiway list all independently match between the AIP-derived facts used in this build and the VATSIM UK reference, which is a reassuring but non-regulatory consistency check, not a substitute for current-AIRAC verification.
- **Ongoing airside pier/infrastructure investment programme** (multi-year, 2025–2027 per public reporting) may affect stand availability/allocation during the works — not reflected in the 2022-cycle AIP extract; confirm current stand status at planning if this becomes operationally relevant.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **UK NATS eAIP — AD 2 EGPF**, AIRAC effective 2022-06-16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGPF-en-GB.html (retrieved 2026-07-26). *Primary source — ARP, elevation, mag var, runway/declared distances, RFF, hours, fuel, handling, communications, navaids, AD 2.20 local aerodrome regulations (Code F/A380 stand-safeguarding), AD 2.21 noise abatement.*
- OurAirports — https://ourairports.com/airports/EGPF/ (retrieved 2026-07-26). *Cross-check — ARP/elevation/runway.*
- SkyVector — https://skyvector.com/airport/EGPF (retrieved 2026-07-26). *Cross-check — coordinates/chart index.*
- VATSIM UK — Glasgow (EGPF) airport reference — https://www.vatsim.uk/airports/EGPF (retrieved 2026-07-26). *Network-sim, not regulatory — used to corroborate the Stand 30 heavy-aircraft designation, taxiway C1/30,000 kg restriction, RWY05/23 exit-taxiway list, and the 6,000 ft initial-climb altitude. Consistent with, but not a substitute for, the primary AIP.*
- AirportMapHQ — "Glasgow Airport Map 2026 — GLA Terminal & Gate Guide" — https://airportmaphq.com/glasgow-airport-map-terminal.html (retrieved 2026-07-26). *Tier-4 — terminal/pier/gate layout context, used on the companion Dispatch page.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
