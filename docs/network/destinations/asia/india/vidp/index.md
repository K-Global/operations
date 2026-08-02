# VIDP — Indira Gandhi Intl · Airport Briefing

**VIDP / DEL** · New Delhi, Delhi (NCT), India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AAI eAIP India (AD 2 VIDP) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 28°34′07″N / 077°06′44″E (28.5686, 77.1122) `[AAI eAIP AD 2.2 VIDP]` |
| Field elevation | **778 ft / 237 m AMSL** (reference temperature 41.0°C) `[AAI eAIP AD 2.2 VIDP]`; OurAirports cross-check reports 777 ft — 1 ft rounding difference, non-material 🟩 |
| Mag variation | 🟧 **0.75° E (2010 epoch), annual change 0.033° E** per AIP — a straight-line projection to 2026 gives ~1.3° E, but this is **not itself a sourced AIP figure**; confirm current-cycle value against the live AIRAC |
| Time zone | **UTC+5:30 (IST)** — no daylight-saving observed |
| Runway(s) | **09/27** 2,813 × 45 m · **10/28** 3,810 × 45 m · **11L/29R** 4,400 × 45 m (opened 2023, closely-spaced parallel to 11R/29L) · **11R/29L** 4,430 × 60 m (main/longest pair) — **four runways total**, all asphalt, all lighted except 11L/29R's status not independently confirmed 🟧 |
| Preferential runway | Config/traffic-flow dependent across the four-runway layout; no single AIP-stated preferential rule found — confirm active configuration via ATIS 🟧 |
| Longest LDA | ~4,400 m (RWY 11L, no displaced threshold reported) — see §7 for the significant displacements on 27/11R/29L |
| Approaches | **ILS CAT III reported on RWY 10/28, 11R/29L and 11L/29R** (all three main/long runways); RWY 09/27 approach category **not confirmed** — likely CAT I given its restricted-use status, flag 🟧 |
| RFF category | **CAT 10** (within ATS hours) `[AAI eAIP AD 2.6 VIDP]` 🟩 |
| Control type | **Radar** — Delhi Approach/Delhi Control on departure/arrival; **Delhi ACC (VIDF)** en route — see [Asia airspace brief](../../../../airspace/asia.md) |
| Elevation class | Near sea-level-adjacent (778 ft) — **not** hot-and-high; the reference temperature of 41.0°C is a warm-day performance note but field elevation is not the driver. The defining reliability driver here is **winter dense fog**, not density altitude |
| Special-airport status | Not operator-categorised as crew-restricted, but 🟥 **closely-spaced parallel runways (11L/29R & 11R/29L)** and one of the world's busiest traffic environments both warrant standing crew awareness — see §5 |
| Customs / PoE | **Yes** — H24 `[AAI eAIP AD 2.3 VIDP]` 🟩 |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **VIJP, VAAH** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Indo-Gangetic plain; no high terrain. Close-in urban obstacles (buildings, trees, poles, a metro overhead-traction line) are AIP-catalogued around all four approach/departure sectors but are height-limited (max ~180–200 ft AGL) — an obstacle-awareness item, not a CFIT/terrain issue. |
| Runway length vs fleet perf | 🟩 | Up to 4,430 m available (11R/29L); non-limiting for any K Global type. Mind the large threshold displacements on 27, 11R and 29L (§7). |
| Approach availability / minima | 🟩 | CAT III reported on three of the four runways — deep low-visibility capability matching the fog threat. RWY 09/27 category unconfirmed 🟧. |
| Airspace / traffic / control | 🟥 | One of the world's busiest airports (AIP-published peak capacity 86 movements/hour); four-runway geometry with two closely-spaced parallels drives sustained high controller/crew workload — see §3.2. |
| Weather / seasonal hazard | 🟥 | Winter (Dec–Jan, sometimes Nov–Feb) **dense radiation fog** is the field's defining threat, routinely triggering LVPs and significant network-wide delay/cancellation events — see §3.4/§14. |
| Curfew / slots / hours | 🟩 | ATS, customs, fuelling, handling and security all published H24; no night curfew found in reachable sources 🟧 (not independently confirmed as "none" on current AIRAC). Hourly movement-rate ceiling (86/hr) is a real capacity constraint in its own right. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Multiple named suppliers (IOC, BPCL, HPCL at T1; IOST, BSSPL at T2/T3) published with capacities/discharge rates — better-sourced than most fields in this build pass. |
| Customs / handling / security | 🟩 | Customs, health/sanitation, AIS/ARO/MET briefing, handling and security all confirmed H24 by the primary AIP. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
VIDP sits at 778 ft AMSL on the flat Indo-Gangetic plain — there is **no high terrain** relevant to arrival, departure or missed-approach paths. The AIP's obstacle table (AD 2.10) catalogues a large number of close-in urban obstacles around all four runway sectors — buildings, sintex water tanks, trees, light poles, a localizer hut/antenna near the RWY 09/27 approach, and (notably) several unlit "METRO ELECTRIC TRACTION OVERHEAD FRAME" structures near the RWY 27 approach/RWY 09 departure sector — but these top out around 850–960 ft AMSL (roughly 180–200 ft AGL) and are a standard dense-urban-airport obstacle environment rather than a terrain/CFIT threat. Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟥
Delhi is consistently ranked among the world's busiest airports by movements. The AIP itself publishes an **approved peak hourly capacity of 86 air-traffic movements/hour (max departure rate 51/hr, max arrival rate 42/hr)** — a hard, source-confirmed capacity ceiling, not an estimate. The field's four-runway layout includes two **closely-spaced parallel runways, 11L/29R and 11R/29L**, which the AIP specifically flags for: an alert on closely-spaced parallel operations; a caution on runway-crossing clearances on RWY 11L/29R after a landing on 11R/29L; the **"Land, Vacate, Hold and Proceed"** principle after landing on RWY 11R/29L; and extra pilot caution when entering the **Eastern Link taxiways**, where correct taxiway identification and accurate read-back of taxi instructions are explicitly called out. Control is **Radar** throughout (Delhi Approach/Delhi Control) under the **Delhi FIR (VIDF)** — cross-ref [Asia airspace brief](../../../../airspace/asia.md). Expect sustained high workload during banks, especially when the closely-spaced pair is running mixed arrival/departure traffic.

### 3.3 Runway excursion 🟧
Three of the four runways carry **significant published threshold displacements**: RWY 27 displaced 152 m (499 ft); RWY 11R displaced 640 m (2,100 ft); and RWY 29L displaced a very large **1,460 m (4,790 ft)** — the latter meaningfully shortens the usable landing distance on that end relative to the runway's full physical length. Brief the correct displaced-threshold picture per runway rather than assuming full physical length is landing-usable; see §7. RWY 09/27 additionally carries a **usage restriction** (§3.5/§5) rather than a pavement/strength caveat.

### 3.4 Weather threat 🟥
**Winter dense/radiation fog (typically December–January, occasionally extending into November or February)** is Delhi's signature and most operationally consequential hazard. Visibility can collapse with limited warning; recent fog events have driven Runway Visual Range down into the **75–300 m band** (and lower in the most severe episodes), with single-day disruption examples in the 2025–2026 season running to 70–230+ flights delayed or cancelled. CAT III infrastructure on three of the four runways is the direct mitigation and supports roughly 30 landings/hour even in heavy fog, but **CAT III capability does not remove the delay exposure** — taxi/ground-movement throughput, runway occupancy and overall traffic flow remain constrained in near-zero visibility even when the ILS itself supports the approach. Outside winter, expect standard North India climatology: pre-monsoon heat and dust (Apr–Jun, consistent with the AIP's 41.0°C reference temperature) and monsoon-season (Jul–Sep) convective activity. See §14.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) the **winter fog/CAT III season** as the dominant seasonal reliability driver, with ground-movement throughput — not just landing capability — as the binding constraint; (2) the **closely-spaced parallel runway pair (11L/29R & 11R/29L)** and its AIP-flagged crossing/vacate discipline; (3) the **86-movements/hour capacity ceiling** at one of the world's busiest airports, meaning schedule integrity has real knock-on consequences; and (4) **RWY 09/27's restricted-use status** — the AIP limits this runway to VVIP/state/defence aircraft and **scheduled civil flights operated by scheduled airlines**, which covers a K Global operation but excludes any ad hoc/non-scheduled sector on this runway. Non-scheduled flights generally require a Delhi Airport Arrival/Departure Clearance Number (DACN/DDCN) from IGIA-AOCC before operating at all — not applicable to a normal K Global scheduled rotation, but relevant if planning any non-scheduled/positioning flight.

---

## 4. Cautions & Warnings

- **Winter dense fog (Dec–Jan, sometimes Nov–Feb)** can drop visibility below CAT I minima with limited warning — check current LVP status and CAT III currency before planning into or out of this season.
- **Closely-spaced parallel runways 11L/29R and 11R/29L** — AIP-flagged for crossing-clearance caution and the "Land, Vacate, Hold and Proceed" principle after landing on 11R/29L.
- **Eastern Link taxiways** — extra caution entering; confirm correct taxiway identification and read back taxi instructions precisely.
- **Large threshold displacements** on RWY 27 (152 m), RWY 11R (640 m) and especially **RWY 29L (1,460 m)** — verify the active runway's true landing distance available, don't assume full physical length.
- **RWY 09/27 is restricted-use** — VVIP/state/defence aircraft and scheduled civil flights only; not available for non-scheduled operations.
- **Peak hourly movement ceiling of 86/hour** (51 departures, 42 arrivals) is an AIP-published capacity limit, not an estimate — expect flow-driven sequencing delays at busy banks even in good weather.
- Several close-in obstacles near the RWY 09/27 and RWY 10/28 approach/departure sectors (buildings, trees, a localizer hut/antenna, metro overhead-traction structures) are marked **unlit** in the AIP obstacle table — maintain a normal visual scan on visual segments.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **closely-spaced parallel-runway environment** and the **winter CAT III/fog environment**. 🟥
- **Crew-qualification gate:** CAT II/III currency required for full-capability low-visibility arrivals in the winter fog season — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** **RWY 09/27 restricted to VVIP/state/defence aircraft and scheduled civil flights operated by scheduled airlines** — a K Global scheduled rotation qualifies; non-scheduled/positioning flights do not. `[AAI eAIP AD 2.3 VIDP, remark 3]` 🟥 No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international scheduled-service arrival into India; **non-scheduled flights require a Delhi Airport Arrival/Departure Clearance Number (DACN/DDCN)** from IGIA-AOCC before operating — not applicable to a normal scheduled K Global rotation. 🟧
- **Operations notes:** Airport operator — **Delhi International Airport Ltd (DIAL)**, a GMR Group-led entity; ANSP/ATS — **Airports Authority of India (AAI)** (Delhi Approach/Delhi Control, Delhi ACC). Non-sked night-parking approval and DACN/DDCN applications route through DIAL's flight-data/AOCC email contacts (see AIP AD 2.3).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[AAI eAIP AD 2.3 VIDP]` | 🟩 |
| AD operating hours | Aerodrome-operator administrative office Mon–Sat 0400–1230 UTC (0930–1800 IST), except 2nd/4th/5th Saturdays and Sundays; **ATS itself is H24** and unaffected by these admin-office hours | 🟩 |
| Night / curfew restrictions | None found in reachable sources; H24 ATS/handling/customs/fuelling suggests no standing curfew, but not independently confirmed as "none" on current AIRAC | 🟧 |
| RFF category | CAT 10 (within ATS hours) | 🟩 |
| Fuel | Jet A-1, all types; H24 `[AAI eAIP AD 2.3/2.4 VIDP]` — see §7/§16 for suppliers | 🟩 |
| PCN | Runway-specific figures not confirmed from a primary table this pass | 🟧 |
| Customs | H24 `[AAI eAIP AD 2.3 VIDP]` | 🟩 |
| Handling / FBO | H24 handling published by AIP; specific ground handler(s) contracted for a K Global operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 2,813 × 45 m | Asphalt / PCN not confirmed 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ~2,813 m (no displacement reported) | Restricted use — see §5 |
| 27 | 2,813 × 45 m | Asphalt / PCN not confirmed 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ~2,661 m (THR displaced 152 m / 499 ft) | Restricted use — see §5 |
| 10 | 3,810 × 45 m | Asphalt / PCN not confirmed 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ~3,810 m (no displacement reported) | CAT III reported |
| 28 | 3,810 × 45 m | Asphalt / PCN not confirmed 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ~3,810 m (no displacement reported) | CAT III reported |
| 11L | 4,400 × 45 m | Asphalt / PCN not confirmed 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ~4,400 m (no displacement reported) | Opened 2023; closely-spaced parallel to 11R/29L; CAT IIIB/CAT II reported |
| 29R | 4,400 × 45 m | Asphalt / PCN not confirmed 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ~4,400 m (no displacement reported) | Opened 2023; closely-spaced parallel to 11R/29L |
| 11R | 4,430 × 60 m | Asphalt / PCN not confirmed 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ~3,790 m (THR displaced 640 m / 2,100 ft) | Main/longest pair; CAT III reported; closely-spaced parallel to 11L/29R |
| 29L | 4,430 × 60 m | Asphalt / PCN not confirmed 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | **~2,970 m (THR displaced 1,460 m / 4,790 ft)** | Large displacement — verify before planning a limiting-weight landing |

*Physical dimensions and displaced-threshold figures cross-checked from OurAirports (tier-4) against the AAI eAIP's confirmation of all four runway designators (09/27, 10/28, 11L/29R, 11R/29L) in the VOR-checkpoint and taxiway-lighting tables (AD 2.8/2.9). The primary AIP's runway-physical-characteristics (AD 2.12) and declared-distance (AD 2.13) tables were **not reachable in full within this research pass** — TORA/TODA/ASDA are flagged "Not published / verify" pending a direct AD 2.12/2.13 pull. All distances in metres unless noted. See §18.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Delhi ATIS | 126.4 | H24 (assumed) 🟧 | |
| Delivery | Delhi Clearance Delivery | 121.95 | H24 (assumed) 🟧 | |
| Ground | Delhi Ground / SMC | 121.9 / 121.625 | H24 (assumed) 🟧 | |
| Tower | Delhi Tower — RWY 28/10 118.1 · RWY 29/11 118.25 · RWY 27/09 118.75 | — | H24 (assumed) 🟧 | Runway-specific tower positions — take the assigned frequency |
| Approach | Delhi Approach | 126.35 | H24 (assumed) 🟧 | |
| Centre / FIR | Delhi Control (Area Control East 120.9 / West 124.55) | — | H24 | Delhi ACC — VIDF FIR; see [Asia airspace brief](../../../../airspace/asia.md) |

*Frequencies sourced to OurAirports (tier-4) — **not independently cross-checked against the primary AIP's AD 2.17/2.18 communications table this pass**; treat as representative pending a live-AIRAC verification. See §18.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | DPN — Delhi | 116.10 | H24 (assumed) 🟧 | On/near field (0.7 NM N of ARP) |
| NDB | LM — Delhi | 320 kHz | H24 (assumed) 🟧 | ~2.0 NM E |
| NDB | DP — Delhi | 274 kHz | H24 (assumed) 🟧 | ~5.4 NM WNW |
| NDB | PL — Delhi | 303 kHz | H24 (assumed) 🟧 | ~5.4 NM E |
| NDB | DH — Delhi | 202 kHz | H24 (assumed) 🟧 | ~5.7 NM E |
| ILS (all runways) | Idents/frequencies not confirmed | — | — | CAT III reported on 10/28, 11L/29R, 11R/29L (§1/§10); RWY 09/27 category unconfirmed 🟧 |

*VOR/NDB data sourced to OurAirports closest-navaids (tier-4). ILS idents/frequencies were **not obtained from a primary AIP table this pass** — pull the current-AIRAC navaid page before use. See §18.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed in reachable sources this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** No single AIP-stated preferential-runway rule found across the four-runway layout; expect ATC to assign configuration by traffic flow/wind — confirm via ATIS. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 10/28 | ILS CAT III (name/ident not confirmed) | Not confirmed 🟧 | Not confirmed 🟧 | |
| 11L/29R | ILS CAT III / CAT II reported | Not confirmed 🟧 | Not confirmed 🟧 | Closely-spaced parallel to 11R/29L |
| 11R/29L | ILS CAT III (name/ident not confirmed) | Not confirmed 🟧 | Not confirmed 🟧 | Closely-spaced parallel to 11L/29R |
| 09/27 | Category not confirmed | Not confirmed 🟧 | Not confirmed 🟧 | Restricted-use runway — see §5 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Triggered by winter radiation/dense fog dropping RVR into (and below) the 75–300 m band; exact RVR/trigger thresholds by category not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plain); the operative missed-approach concern is re-sequencing into a very high-density, closely-spaced-parallel-runway traffic environment, especially during a fog event.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — verify locally. 🟧
- **ATC slot / CTOT & clearance:** No IATA slot-level classification confirmed in reachable sources; the AIP's published **86 movements/hour capacity ceiling** functions as a de facto flow constraint at busy banks. Delhi's ACDM (Airport Collaborative Decision Making) cell coordinates domestic-airline/ATC/DIAL flow management. 🟧
- **De-icing:** **NIL** — not required/published for this climate; the seasonal-hazard equivalent here is winter fog, not snow/ice (§14). `[AAI eAIP AD 2.3 VIDP]`

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources this pass — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable **MARS (Multiple Aircraft Ramp System) centre stands** are published with continuous lead-in lines for wide-body use, alongside single-aircraft stands; Terminal 3's Apron/pier stands (A, B, C, D series) carry Advanced Visual Docking Guidance System (AVDGS) at a large number of contact positions, and Terminal 1 has AVDGS on all Code C stands. `[AAI eAIP AD 2.9 VIDP]` 🟧 Exact widebody stand allocation for a K Global operation not confirmed. | 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; expect routing that respects the closely-spaced-parallel-runway crossing discipline (§3.2).
- **Hot spots / tight taxiways:** 🟥 **Eastern Link taxiways** (correct-taxiway-ID/read-back caution) and the **closely-spaced parallel runway pair 11L/29R–11R/29L** (crossing-clearance caution, "Land, Vacate, Hold and Proceed" after 11R/29L) are the AIP-flagged complex ground points at this field.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** North Indian continental climate on the Indo-Gangetic plain; three broad seasons — winter (Dec–Feb), summer/pre-monsoon (Mar–Jun), and monsoon (Jul–Sep). AIP reference temperature is a high **41.0°C**, consistent with pre-monsoon heat.
- **Seasonal hazards:** **Winter dense/radiation fog (Dec–Jan, occasionally Nov–Feb)** is the field's defining and most disruptive seasonal hazard — routinely dropping RVR into the 75–300 m band (and lower in severe events), driving widespread delays/cancellations network-wide despite CAT III infrastructure on three of the four runways; ground-movement throughput remains the binding constraint even when the ILS itself supports the approach. Pre-monsoon (Apr–Jun) brings heat and dust-storm potential; monsoon season (Jul–Sep) brings convective/thunderstorm activity — general regional climatology, no VIDP-specific frequency statistic found for either.
- **Local effects:** No notable terrain/sea-breeze local effects at this inland, flat-terrain field; urban-heat and dense-traffic effects on the local climate are not separately quantified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the closely-spaced-parallel-runway pair and Eastern Link taxiways), navaid U/S, CAT III equipment status/current LVP state, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and any capacity/flow-management notice against the 86-movements/hour ceiling. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — VIDP is not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **VIJP** (Jaipur) and **VAAH** (Ahmedabad) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg; neither is built out in this batch.
- **Fuel-uplift notes:** Jet A-1, H24, multiple named into-plane suppliers — **IOC** and **BPCL** (Terminal 1, refueller-truck capacities 11–36 KL, discharge rates 400–1,300 L/min) and **IOST**/**BSSPL** (Terminals 2/3, hydrant dispensers, discharge rates ~3,500–3,800 L/min). `[AAI eAIP AD 2.4 VIDP]` 🟩 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runway pair (up to 4,430 m); mind the large threshold displacement on RWY 29L (§7). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific field-length or field-elevation performance penalty identified for any K Global type at VIDP — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference. The operative planning consideration at this field is winter CAT III/fog reliance (§3.4/§14) and closely-spaced-parallel-runway ground discipline (§3.2) rather than aircraft performance. For low-visibility procedures generally, see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Runway-anchor discrepancy (resolved this build):** the seed data referenced a runway "09R/27L" that does not exist. VIDP's actual fourth runway is **11L/29R**, opened 14 July 2023 as a closely-spaced parallel to the pre-existing **11R/29L** — not a second parallel to 09/27. The current, verified four-runway set is **09/27, 10/28, 11L/29R, 11R/29L**. No further "09R/27L" reference should be carried forward.
- **Declared distances (TORA/TODA/ASDA)** — not obtained from the primary AIP's AD 2.12/2.13 tables this pass; only physical dimensions and displaced thresholds are populated (cross-checked tier-4). Pull the primary table before treating §7 as audit-grade.
- **PCN / pavement strength** — not confirmed for any runway.
- **ILS idents, frequencies and sub-category (CAT II vs IIIA vs IIIB) per runway** — reported qualitatively (CAT III on 10/28, 11L/29R, 11R/29L) but not confirmed from a primary navaid table.
- **RWY 09/27 approach category** — not confirmed; likely CAT I given its restricted-use status.
- **ATC frequencies** — sourced to OurAirports (tier-4) only; not cross-checked against the primary AIP's AD 2.17/2.18 tables this pass.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima, transition altitude/level, noise-abatement procedure, engine run-up restriction, reverse-thrust policy, push-back/follow-me policy** — none confirmed in reachable sources.
- **Night curfew** — none found, but not independently confirmed as "none exists" on the current AIRAC.
- **Handling agent(s) for a K Global operation** — not confirmed.
- **Mag variation current-cycle value** — sourced to a 2010 epoch with a stated annual-change rate; a straight-line 2026 projection (~1.3° E) is not itself a sourced figure.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AAI eAIP India — AD 2 VIDP**, AMDT 04-26, eff. 14 MAY 2026 — https://aim-india.aai.aero/eaip/eaip-v2-04-2026/eAIP/IN-AD%202.1VIDP-en-GB.html (retrieved 2026-07-26). *ARP, elevation, mag variation, operational hours, RFF category, handling/fuel facilities, passenger facilities, aprons/taxiway/SMGCS data, obstacle table.*
- AAI eAIP India — AD 2 VIDP, AMDT 01-25, eff. 23 JAN 2025 — https://aim-india.aai.aero/eaip-v2-01-2025/eAIP/IN-AD%202.1VIDP-en-GB.html (retrieved 2026-07-26). *Prior-cycle cross-check.*
- OurAirports — https://ourairports.com/airports/VIDP/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *Runway physical dimensions/displaced thresholds, ATC frequencies, VOR/NDB cross-check.*
- AirlineGeeks — "Delhi Airport Gets Fourth Runway, Dual-Elevated Taxiway," 2023-07-21 — https://airlinegeeks.com/2023/07/21/delhi-airport-gets-fourth-runway-and-a-dual-elevated-taxiway/ (retrieved 2026-07-26). *RWY 11L/29R opening, CAT IIIB/II detail.*
- Aerospace Global News — "IndiGo becomes inaugural operator on Delhi Airport's fourth runway" — https://aerospaceglobalnews.com/news/indigo-becomes-inaugural-operator-on-delhi-airports-fourth-runway/ (retrieved 2026-07-26). *Fourth-runway corroboration.*
- India TV News — "Delhi airport revamp: All four runways set to be operational from first week of January 2024," 2023-12-29 — https://www.indiatvnews.com/delhi/delhi-airport-all-four-runways-to-be-operational-from-first-week-of-january-2024-latest-updates-2023-12-29-909484 (retrieved 2026-07-26). *Four-runway operational-status timeline.*
- ETV Bharat — "Delhi airport authorities asked to expedite CAT III-enabled 4th runway," 2024-01-15 — https://www.etvbharat.com/english/state/delhi/union-aviation-minister-delhi-airport-cat-iii-ils/na20240115182751265265885 (retrieved 2026-07-26). *CAT III status across the three main runways.*
- Business Today — "Delhi airport to use next gen AI and enhanced runways to tackle winter chaos," 2025-12-11 — https://www.businesstoday.in/amp/technology/news/story/delhi-airport-to-use-next-gen-ai-and-enhanced-runways-to-tackle-winter-chaos-506254-2025-12-11 (retrieved 2026-07-26). *Fog-season RVR range, CAT III throughput.*
- Business Standard — "Delhi airport to increase passenger handling capacity by 20% by 2030," 2025-10-29 — https://www.business-standard.com/industry/aviation/delhi-airport-to-increase-passenger-handling-capacity-by-20-by-2030-ceo-125102901544_1.html (retrieved 2026-07-26). *Terminal/overall capacity figures.*
- Gulf News — "Dense fog in North India: Over 100 flights delayed as thick fog envelops Delhi" — https://gulfnews.com/world/asia/india/dense-fog-in-north-india-over-100-flights-delayed-as-thick-fog-envelops-delhi-1.1672222983035 (retrieved 2026-07-26). *Fog-disruption corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
