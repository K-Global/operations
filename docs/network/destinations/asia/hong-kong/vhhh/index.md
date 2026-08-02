# VHHH — Hong Kong International · Airport Briefing

**VHHH / HKG** · Chek Lap Kok, Lantau, Hong Kong SAR · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the CAD Hong Kong eAIP (AIP Hong Kong, AD 2 VHHH) plus public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 22°18′32″N / 113°54′53″E (22.3089, 113.9147), mid-point of aerodrome `[CAD AIP AD 2 VHHH 2.2]` |
| Field elevation | **28 ft AMSL** (reference temperature 34°C) `[CAD AIP AD 2 VHHH 2.2]` |
| Mag variation | 3° W (2020), annual change 4′ W `[CAD AIP AD 2 VHHH 2.2]` |
| Time zone | UTC+8 (Hong Kong Time, no DST observed) |
| Runway(s) | Three parallel east–west runways, each **3,800 × 60 m, asphalt**: **North 07L/25R**, **Centre 07C/25C**, **South 07R/25L** — the Three-Runway System (3RS), fully commissioned 28 Nov 2024 |
| Preferential runway | Segregated-mode default: **North (07L/25R) = arrivals**, **Centre (07C/25C) = departures**, **South (07R/25L) = mixed** (arrivals + departures); dual/single-runway mixed mode used for maintenance or per traffic need |
| Longest LDA | 3,800 m (25L — the only runway end published without a threshold displacement) |
| Approaches | ILS on all three runways — **category is not uniform by runway end**: CAT III (07L, 25C), CAT II (07C, 07R, 25L), CAT I (25R); RNP Y approach also available to the 25-direction runways for suitably equipped operators 🟧 (network-sim cross-check, verify current AIRAC) |
| RFF category | **Category 10** (ICAO highest) 🟩 |
| Control type | **Radar** — Hong Kong Approach/Departure/Tower/Ground/Delivery on the field; Hong Kong (VHHK) ACC en route — see [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md) and the [Asia airspace overview](../../../../airspace/asia.md) |
| Elevation class | Sea-level (28 ft) — **not** hot-and-high; the field's defining local hazard is **Lantau Island terrain-induced windshear/turbulence**, not density altitude |
| Special-airport status | Not operator-categorised as a restricted-crew special airport in reachable sources; the standing crew-briefing items are **Lantau windshear** and the **non-uniform ILS category by runway end** — see §5 |
| Customs / PoE | **Yes — H24** `[CAD AIP AD 2 VHHH 2.3]` |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **YES — home/base station** `[VAMSYS mirror 2026-07-26]` 🟩 |
| Company preferred alternates | **ZGGG, ZGSZ** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Lantau Island's close-in high ground (peaks ~1,000 m/3,280 ft, valleys ~400 m/1,300 ft) sits immediately south of the field and drives quantified, frequent terrain-induced windshear — see §3.1. |
| Runway length vs fleet perf | 🟩 | All three 3,800 m runways are ample for any K Global widebody type. |
| Approach availability / minima | 🟧 | ILS available on all three runways, but the CAT is **not uniform** — CAT I/II/III mixed by runway end; confirm the assigned runway's category before planning a low-vis operation. |
| Airspace / traffic / control | 🟥 | Independent triple-parallel-runway radar operation with near-identical designators (07L/07C/07R, 25L/25C/25R) — real runway-confusion risk — inside a congested, multi-FIR Pearl River Delta environment. |
| Weather / seasonal hazard | 🟥 | South China Sea tropical cyclone season (~May–Nov, peak Jul–Sep) can ground all flights outright at Typhoon Signal No. 8; Lantau windshear is a year-round threat. |
| Curfew / slots / hours | 🟩 | **H24 operation, no published curfew** — a genuine network advantage; a noise-mitigation period shifts the South Runway to standby overnight rather than restricting movements. |
| RFF category vs our types | 🟩 | Category 10 — above any fleet requirement. |
| Fuel availability | 🟩 | Jet A-1 (AVTUR 650) hydrant refuelling, H24, confirmed AIP figure (500 gpm). |
| Customs / handling / security | 🟧 | H24 customs/immigration/security confirmed; the specific ground-handling agent contracted for our operation is not confirmed in reachable public sources. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Hong Kong International Airport sits on reclaimed land at 28 ft AMSL immediately **north of Lantau Island**, whose interior peaks reach roughly 1,000 m (~3,280 ft) with valleys as low as ~400 m (~1,300 ft) between them (Hong Kong Observatory). This close-in complex terrain is the field's defining CFIT/windshear consideration — not a classic high-terrain-on-the-missed-approach hazard, but a source of quantified mechanical turbulence and windshear on the approach and departure paths nearest the high ground (see §3.4). Separately, the AIP's own obstacle chart marks several obstruction-lit peaks in the New Territories to the north and west of the field for pilot awareness on those tracks — most notably **Castle Peak (1,919 ft AMSL)** roughly 15 NM northwest of the field, plus a cluster of lower peaks (Tuen Mun, Tsing Yi, Tai Lam Chung, Shek Lung Kung, Tai Che Tung, Fa Peng Teng, 883–1,576 ft) `[CAD AIP AD 2 VHHH 2.10]`. Verify the current MSA sectors on the area chart; the Lantau terrain to the south remains the more operationally significant threat given its proximity to all three runway thresholds.

### 3.2 Airborne conflict / traffic 🟥
HKIA runs **independent and dependent parallel operations across three closely-designated runways** (07L/07C/07R and 25L/25C/25R) under Hong Kong Approach/Departure and Hong Kong Tower — a genuine runway-confusion risk given how similar the three designators sound and read on a clearance. Independent parallel departures off the Centre Runway (07C) are assigned SIDs with a distinguishing suffix and require the crew to report the assigned SID to Tower so the correct turn direction is applied 🟧 (VATSIM vACC cross-check — verify against current AIRAC). The field also sits inside a **dense, multi-FIR Pearl River Delta terminal environment** shared with Macau, Shenzhen and Guangzhou, requiring continuous coordination across adjacent approach/departure sectors. Cross-ref the [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md) and the [Asia airspace overview](../../../../airspace/asia.md).

### 3.3 Runway excursion 🟧
**Five of the six runway ends carry a displaced threshold** (160–174 m: 07L/25R 174 m, 07C/25C 171 m, 07R 160 m); only **25L** publishes the full 3,800 m as LDA with no displacement `[CAD AIP AD 2 VHHH 2.13]`. Confirm the correct LDA — not the full published runway length — in every landing-distance calculation. All three runways are **grooved full-length** with a 240 × 150 m RESA at each end, a meaningful excursion mitigation. The AIP also flags specific arrow-marked sections of the Centre Runway (between certain taxiway junctions near each threshold) that are **not usable for RWY 07C/25C landing or take-off** — a marking-recognition item worth briefing on that runway specifically `[CAD AIP AD 2 VHHH 2.13, Notes 13–14]`.

### 3.4 Weather threat 🟥
Two distinct, well-documented hazards define this field's weather threat:

1. **Lantau terrain-induced windshear/turbulence** — winds crossing the Lantau mountains from the **south or southeast** are disturbed by the terrain and produce significant low-level windshear and mechanical turbulence downstream over the airport, most pronounced along the approach/departure paths closest to Lantau (the **South Runway, 07R/25L**, is nearest the high ground). The Hong Kong Observatory quantifies this at roughly **1 in 500 flights** reporting significant windshear and **1 in 2,500** reporting significant turbulence — among the best-documented terrain-windshear environments in the network.
2. **South China Sea tropical cyclone (typhoon) season**, roughly **May–November** with a peak around **July–September**. The Hong Kong Observatory's Tropical Cyclone Warning Signal system (T1 Standby → T3 Strong Wind → T8 Gale/Storm, with four directional variants, up to T9/T10) governs the response: T1/T3 may affect individual flights but ops continue; **at T8 and above, flights in and out of HKIA are grounded outright** — a hard, whole-airport stop rather than a gradual capacity reduction.

See §14 for the durable seasonal picture; live TC advisories and windshear/turbulence warnings are pulled at planning (§14/§15).

### 3.5 Operational considerations 🟥
Plan around four durable characteristics: (1) **RFF Category 10** and full-length grooved/RESA-protected runways are first-tier infrastructure — not the risk driver here; (2) the **non-uniform ILS category by runway end** (CAT I/II/III mixed) means the assigned runway's actual capability must be confirmed every time, not assumed from the field's overall reputation as CAT III-capable; (3) **transition altitude is unusually high at 9,000 ft** (vs. the more common 5,000–6,000 ft) — brief the altimetry transition explicitly, especially for crews used to lower TAs; (4) the **segregated-mode runway-role convention** (North=arrivals, Centre=departures, South=mixed) is the default expectation but not a guarantee — single/mixed-runway operation is used for maintenance and off-peak periods, so confirm the assigned runway and its role by ATIS/ATC rather than assuming. Flights transiting into mainland Chinese airspace should also expect **metric (meters-based) cruising-level assignment** in places — a PRC ATC convention, not an HKIA-specific item, but worth a standing note for planning. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 4. Cautions & Warnings

- **Lantau Island terrain-induced windshear/turbulence** is a quantified, year-round threat (~1 in 500 flights significant windshear, ~1 in 2,500 significant turbulence) — worst on southerly/southeasterly flow, closest to the South Runway (07R/25L). Brief the windshear-escape manoeuvre as a matter of course, not an exception.
- **Typhoon Signal No. 8 or above grounds all flights outright** — this is a hard stop, not a gradual capacity reduction; build typhoon-season (~May–Nov) schedule contingency accordingly.
- **Three near-identical runway designators** (07L/07C/07R, 25L/25C/25R) — always read back and positively confirm the assigned runway; do not assume from habit or from the previous rotation's assignment.
- **ILS category is NOT uniform across the field** — 07L/25C are CAT III, 07C/07R/25L are CAT II, 25R is CAT I. Confirm the correct category for the actual assigned runway before committing to a low-visibility approach.
- **Segregated-mode runway roles** (North=arrivals, Centre=departures, South=mixed) are the default but can change to single/mixed-runway mode for maintenance — confirm by ATIS/ATC, don't assume.
- **Displaced thresholds on 5 of 6 runway ends** (160–174 m) — only 25L publishes full-length LDA; verify the correct LDA in every landing-distance calculation.
- **Transition altitude is unusually high at 9,000 ft** — brief the altimetry transition explicitly.
- **Sky Bridge underpass** near Stand N12/R16 (taxilane B7) has a published **28 m height clearance** for aircraft taxiing underneath — a ground-clearance item for any routing through that area.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew special airport in reachable sources 🟩; the standing crew-briefing items are Lantau windshear (§3.4) and the non-uniform ILS category by runway end (§3.5). 🟧
- **Crew-qualification gate:** CAT II/III currency required for the runways so-equipped (07L, 25C = CAT III; 07C, 07R, 25L = CAT II); windshear-recognition/escape-manoeuvre proficiency is a standing expectation given the field's quantified exposure. 🟧
- **Operating restrictions / bans:** Training, test, demonstration and recreational flights at HKIA require prior Director-General of Civil Aviation approval and are not normally granted — not applicable to scheduled commercial service `[CAD AIP AD 2 VHHH 2.20]`; no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Hong Kong SAR international arrival procedures; no special state permit required for scheduled service. 🟩
- **Operations notes:** ANSP/ATC — **Hong Kong Civil Aviation Department (CAD)**; airport operator — **Airport Authority Hong Kong (AAHK)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 — **no published curfew** `[CAD AIP AD 2 VHHH 2.3]` | 🟩 |
| Night / curfew restrictions | None published; a daily **noise-mitigation period 1500–2300 UTC** (2300–0700 HKT) places the South Runway on standby where operating conditions permit — a runway-assignment practice, not a movement ban | 🟧 |
| RFF category | **Category 10** `[CAD AIP AD 2 VHHH 2.6]` | 🟩 |
| Fuel | Jet A-1 (AVTUR 650); hydrant refuelling all main apron and cargo stands, 500 gpm; H24 `[CAD AIP AD 2 VHHH 2.4]` | 🟩 |
| PCR | **PCR 720/F/B/W/T** (all three runways) — Hong Kong publishes Pavement Classification Rating (PCR), not the ICAO PCN format used at some other fields; treat as the local rating scale | 🟧 |
| Customs | H24 `[CAD AIP AD 2 VHHH 2.3]` | 🟩 |
| Handling / FBO | Not individually confirmed for our operation in reachable public sources; fixed 960V/400Hz ground power confirmed at all main apron and cargo stands | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCR | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07L | 3,800 × 60 m | Asphalt / PCR 720/F/B/W/T | 3,800 m | 3,860 m | 3,800 m | 3,626 m | THR displaced 174 m; entering from TWY C3, TORA/ASDA 3,317 m |
| 25R | 3,800 × 60 m | Asphalt / PCR 720/F/B/W/T | 3,800 m | 3,860 m | 3,800 m | 3,626 m | THR displaced 174 m; entering from TWY C10, TORA/ASDA 3,228 m |
| 07C | 3,800 × 60 m | Asphalt / PCR 720/F/B/W/T | 3,800 m | 3,978 m | 3,800 m | 3,629 m | THR displaced 171 m; marked section between TWY B2/B3 and A1/F1 not usable for landing/take-off |
| 25C | 3,800 × 60 m | Asphalt / PCR 720/F/B/W/T | 3,800 m | 3,978 m | 3,800 m | 3,629 m | THR displaced 171 m; marked section between A12/F8 and B10/B11 not usable for landing/take-off |
| 07R | 3,800 × 60 m | Asphalt / PCR 720/F/B/W/T | 3,800 m | 4,100 m | 3,800 m | 3,640 m | THR displaced 160 m |
| 25L | 3,800 × 60 m | Asphalt / PCR 720/F/B/W/T | 3,800 m | 4,100 m | 3,800 m | **3,800 m** | Only runway end published with **no** threshold displacement |

*Source: CAD Hong Kong eAIP, AD 2 VHHH 2.12/2.13, cycle valid from 11 Jun 2026 (retrieved 2026-07-26). All distances in metres. RESA 240 × 150 m and full-length grooving confirmed at every runway end.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Hong Kong International Airport Arrival Information / Departure Information | 128.2 / 127.05 | H24 | Data-link D-ATIS available (VHHHA / VHHHD) |
| Delivery | Hong Kong Delivery | 122.15 | H24 | 2-way PDC via data-link available |
| Ground | Hong Kong Ground | 121.6 / 121.875 / 122.125 / 122.55 / 122.6 | H24 | Multiple ground sectors across the taxiway system |
| Tower | Hong Kong Tower | 118.2 / 118.4 (AMC South) / 118.7 (AMC North) | H24 | ATZ split North/South at the Centre Runway centreline |
| Approach | Hong Kong Approach | 119.1 | H24 | |
| Departure | Hong Kong Departure | 123.8 / 122.0 | H24 | |
| Zone | Hong Kong Zone | 120.6 / 122.075 | H24 | Non-IFR flights within CTR below 2,000 ft AMSL |
| Centre / FIR | Hong Kong (VHHK) ACC | Per current AIRAC | H24 | See [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md) |

*Source: CAD Hong Kong eAIP, AD 2 VHHH 2.18, cycle valid from 11 Jun 2026 (retrieved 2026-07-26); cross-checked against the VATSIM Hong Kong vACC pilot briefing (network-sim, not regulatory — see Sources) which lists matching primary-position frequencies.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | SMT | 114.8 / CH 95X | H24 | Coverage restrictions apply by radial — see AIP note |
| DVOR/DME | TD | 116.1 / CH 108X | H24 | 3°W (2020); coverage ≥200 NM at FL350+ |
| ILS/DME 07L (CAT III) | IZSL | LOC 111.55 / GP 332.75 / DME CH 52Y | H24 | GP unusable beyond 6° left of course |
| ILS/DME 25R (CAT I) | ITFR | LOC 108.75 / GP 330.35 / DME CH 24Y | H24 | GP unusable below 1.8° elevation angle |
| ILS/DME 07C (CAT II) | IZSC | LOC 109.3 / GP 332.0 / DME CH 30X | H24 | LOC unusable beyond 22° left / 26° right |
| ILS/DME 25C (CAT III) | ITFC | LOC 109.3 / GP 332.0 / DME CH 30X | H24 | LOC unusable beyond 19° right |
| ILS/DME 07R (CAT II) | IZSR | LOC 110.9 / GP 330.8 / DME CH 46X | H24 | LOC unusable beyond 19° right |
| ILS/DME 25L (CAT II) | ITFL | LOC 110.9 / GP 330.8 / DME CH 46X | H24 | LOC unusable beyond 28° left / 22° right; GP unusable beyond 7° left |

*Source: CAD Hong Kong eAIP, AD 2 VHHH 2.19, cycle valid from 11 Jun 2026 (retrieved 2026-07-26). ILS category is confirmed per runway end from the primary table — treat as authoritative over any general "CAT III airport" assumption.*

---

## 10. Arrival

- **Transition altitude / level:** TA **9,000 ft** `[CAD AIP AD 2 VHHH 2.17]` — unusually high vs. the common 5,000–6,000 ft norm, brief accordingly; TL reported as **FL110** by a VATSIM vACC cross-check 🟧 (network-sim source — verify the primary AIP's QNH-dependent TL table before relying on this as a fixed value).
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — not independently confirmed against a primary local override this pass. 🟧
- **Preferential runway logic:** Segregated-mode default — **North (07L/25R) = arrivals**, **South (07R/25L) = mixed** (some arrivals, e.g. shorter-taxi cargo/business aviation); Centre is departures-only in the default concept. Wind (monsoon-driven) sets 07- vs 25-configuration.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07L | ILS | LIMES (07-config IAF) 🟧 | Verify chart | **CAT III** |
| 25R | ILS | RIVMI (25-config IAF) 🟧 | Verify chart | **CAT I** |
| 07C | ILS | LIMES 🟧 | Verify chart | **CAT II** |
| 25C | ILS | RIVMI 🟧 | Verify chart | **CAT III** |
| 07R | ILS | LIMES 🟧 | Verify chart | **CAT II** |
| 25L | ILS; RNP Y (on request) 🟧 | RIVMI 🟧 | Verify chart | **CAT II** |

- **STARs (names only):** A "07-configuration" set and a "25-configuration" set are each flown by a family of RNAV STARs feeding the LIMES (07s) or RIVMI (25s) IAFs, plus a Golf-suffixed set connecting to the RNP Y approach on the 25-direction runways, available on request only 🟧 (VATSIM vACC cross-check — pull the live current-AIRAC STAR names/minima before use).
- **LVP:** Trigger conditions apply on the CAT II/III-equipped runway ends (07L, 25C = III; 07C, 07R, 25L = II); exact RVR trigger values not confirmed this pass. 🟧
- **Missed approach watch-items:** Lantau high ground to the south is the standing terrain consideration; a go-around also re-enters a dense triple-parallel/Pearl River Delta radar environment — expect vectoring/holding, especially during a typhoon-outer-band or monsoon-convective event.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not obtained from the primary AIP in this research pass 🟧; a VATSIM vACC cross-check references RNAV SIDs (independent-parallel departures off the Centre Runway carry a distinguishing suffix) plus contingency conventional SIDs defined by VOR/DME radials that end in a discontinuity requiring ATC vectors — pull the live current-AIRAC SID list before use.
- **RNP / climb-gradient requirements:** RNAV SID structure is standard across the field; verify gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** AAHK operates an Airport Collaborative Decision Making (ACDM) system with Target Start-up Approval Times (TSAT) for flow management, and a colour-coded pushback-direction system by apron area 🟧 (verify local procedure and current status).
- **ATC slot / CTOT & clearance:** No formal IATA slot-coordination level confirmed in reachable sources; ACDM/TSAT flow management applies during high-demand periods. 🟧
- **De-icing:** **NIL** — not provisioned; not required in Hong Kong's subtropical climate `[CAD AIP AD 2 VHHH 2.3/2.4]`. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** ICAO Noise Abatement Departure Procedure 1 or 2 (NADP 1/2) permitted at operator discretion for all RWY 07 take-offs; operators are not required to notify CAD of the adopted procedure `[CAD AIP AD 2 VHHH 2.21]`.
- **Night noise / dB limits:** A daily **noise-mitigation period, 1500–2300 UTC (2300–0700 HKT)**, places the **South Runway (07R/25L) on standby** where operating conditions permit, alongside a preferential-runway-use programme (west flow when departures dominate, east flow when arrivals dominate at night) `[CAD AIP AD 2 VHHH 2.21]`. No published per-movement dB limit or noise-surcharge regime confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** The **Midfield Concourse** (opened 2015, Code E/F-capable) and Terminal 1 contact stands are the primary widebody clusters; exact stand count/allocation for our operation not confirmed. 🟧 | 🟧
- **Push-back:** Mandatory at contact gates; AAHK uses a colour-coded pushback-direction system by apron area 🟧 (network-sim cross-check — verify local procedure).
- **Standard taxi routes:** Extensive multi-taxiway network (A–K plus bridge taxiways V/V4/W/S/T/D/E linking the three runways to the terminal/apron complex); confirm routing with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 The **Sky Bridge** underpass over Taxilane B7 near Stand N12/R16 has a published **28 m height clearance** for aircraft taxiing underneath; several named bridge-taxiway junctions (H/V, V/V4, V4/W, W/H, W/TXL W2, S/H, T/H, D/E) are noted in the AIP as **not available** for straight-section use — plan routing accordingly `[CAD AIP AD 2 VHHH 2.8]`.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Subtropical monsoon climate — northeasterly monsoon flow dominates in the drier winter months (roughly Nov–Mar), shifting to southwesterly monsoon flow in the humid summer (roughly Apr–Sep).
- **Seasonal hazards:** **South China Sea tropical cyclone (typhoon) season, roughly May–November, peaking around July–September** — the Hong Kong Observatory's Tropical Cyclone Warning Signal system (T1 Standby, T3 Strong Wind, T8 Gale/Storm with four directional variants, up to T9/T10) governs the response; **T8 and above grounds all flights outright**. **Lantau Island terrain-induced windshear/turbulence** is a year-round hazard, most pronounced on southerly/southeasterly flow (§3.4).
- **Local effects:** Mechanical turbulence off Lantau's terrain is the standout local effect; monsoon-driven low-level windshear is also documented in late autumn/early winter under certain synoptic patterns.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical cyclone advisories, windshear/turbulence warnings. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. maintenance-driven single/mixed-runway mode changes), navaid U/S, CAT II/III equipment status per runway, lighting, obstacle/crane, RFF downgrade, current tropical cyclone signal status, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Home hub / base station** — the primary departure and return field for the K Global network.
- **Nearest suitable alternates:** Company preferred alternates **ZGGG** (Guangzhou Baiyun) and **ZGSZ** (Shenzhen Bao'an) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 (AVTUR 650) available H24 by hydrant refuelling at all main apron and cargo stands, 500 gpm `[CAD AIP AD 2 VHHH 2.4]`. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on any of the three 3,800 m runways. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- As the home hub, VHHH is the base field for the K Global fleet generally rather than a single-type consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM B — Fleet Index`](../../../../../fleet/index.md). No field-elevation or field-length performance penalty for any type at VHHH; the operative planning consideration is Lantau windshear awareness and typhoon-season schedule risk rather than aircraft performance. The published reference temperature (34°C) is worth checking against type-specific take-off performance charts for peak-summer departures.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Take-off minima** — not confirmed from a primary table this pass.
- **LVP/CAT trigger RVR values** — not confirmed per runway this pass.
- **Transition level** — sourced to a VATSIM vACC cross-check (FL110); not independently confirmed against the primary AIP's QNH-dependent table.
- **SIDs/STARs (current names, full list)** — the family names and IAFs (LIMES/RIVMI) are VATSIM vACC-sourced; pull the live current-AIRAC procedure list before use.
- **RNP Y approach coverage** — reported as available to the 25-direction runways by the vACC cross-check; exact runway coverage and procedure name not confirmed against the primary AIP.
- **Slot-coordination level** — no formal IATA level confirmed; ACDM/TSAT flow management referenced instead.
- **Ground-handling agent(s)** for our operation — not confirmed.
- **Widebody stand count/allocation** at the Midfield Concourse/T1 for our operation — not confirmed.
- **Follow-me availability, engine run-up restriction, reverse-thrust/idle-reverse policy** — none confirmed in reachable sources.
- **Noise-charge regime** — not confirmed in reachable sources.
- **PCR-to-PCN equivalence** — Hong Kong publishes PCR, not ICAO PCN; no conversion confirmed this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **CAD Hong Kong eAIP, AD 2 VHHH 2.1–2.21**, cycle valid from 11 Jun 2026 (published 2026-04-16) — https://www.ais.gov.hk/eaip_20260611/2026-06-11-000000/html/eAIP/VH-AD-2-VHHH-en-US.html (retrieved 2026-07-26). *Runway geometry/declared distances/PCR, ILS idents/frequencies/category, RFF category, ATS hours, communications, navaids, obstacles, noise-abatement procedures.*
- OurAirports — https://ourairports.com/airports/VHHH/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Hong Kong Observatory — "Terrain-induced Windshear & Turbulence over the Hong Kong International Airport" — https://www.hko.gov.hk/en/education/aviation-and-marine/aviation/00457-terraininduced-windshear-turbulence-over-the-hong-kong-international-airport.html (retrieved 2026-07-26). *Lantau terrain-windshear mechanism and frequency statistics.*
- Hong Kong Observatory — "Windshear and Turbulence Warning Service" — https://www.hko.gov.hk/en/aviat/amt/windshear_warning.htm (retrieved 2026-07-26).
- Wikipedia — "Hong Kong tropical cyclone warning signals" — https://en.wikipedia.org/wiki/Hong_Kong_tropical_cyclone_warning_signals (retrieved 2026-07-26). *T1/T3/T8 signal definitions and airport-operations impact.*
- Airport Authority Hong Kong — "Target Commissioning Date of Three-runway System" and Three-Runway System project pages — https://www.hongkongairport.com/en/media-centre/press-release/2024/pr_1757 , https://threerunwaysystem.hongkongairport.com/en/ (retrieved 2026-07-26). *3RS commissioning dates (North Runway 25 Nov 2022; full 3RS 28 Nov 2024) and North/Centre/South segregated-mode operating concept.*
- International Airport Review — "Hong Kong International Airport launches three-runway system" — https://www.internationalairportreview.com/news/232434/hong-kong-international-airport-launches-three-runway-system-boosting-capacity-and-solidifying-aviation-hub-status/ (retrieved 2026-07-26).
- **VATSIM Hong Kong vACC — VHHH Pilot Briefing** (Release 2601) — https://vathk.com/pdf/PB_VHHH_2601.pdf (retrieved 2026-07-26). *Network-sim document, not regulatory — used to cross-check runway/STAR/SID operational concept (segregated mode, IAFs, transition level, frequencies); flagged 🟧 wherever used as the sole source.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
