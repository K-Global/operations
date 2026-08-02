# LEBL — Josep Tarradellas Barcelona-El Prat · Airport Briefing

**LEBL / BCN** · Barcelona, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP España (ENAIRE eAIP, AD 2-LEBL) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 41°17′49″N / 2°04′42″E (41.2969, 2.0783) `[AIP España AD 2-LEBL 2.2]` |
| Field elevation | **4 m / 14 ft AMSL** (reference temperature 29°C; low average temperature 9°C) |
| Mag variation | **1°E (2020)**, annual change 7.5′E |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **02/20** (2,528 m), **06L/24R** (3,352 m), **06R/24L** (2,660 m) — see §7. 🟧 Current AIRAC designates the third pair **02/20**, not the "07/25" reference used to scope this build — see §18 |
| Preferential runway | Wind/time-of-day dependent **segregated configuration**: day preferential West-parallel (arrivals 24R, departures 24L/24R); night preferential North crossed-runway (arrivals 02, departures 06R) — see §10/§11 |
| Longest LDA | 3,352 m (24R) |
| Approaches | **ILS CAT II/III on 06L/24R and 06R/24L** (4 of 6 runway ends); **ILS CAT I only on RWY 02**; **RWY 20 has no published approach** |
| RFF category | **CAT 10** (ICAO highest category) 🟩 |
| Control type | **Radar** — Barcelona TWR/GMC on the field; **Barcelona APP** terminal; **Barcelona ACC (LECB)** en route — no curated FIR brief exists yet; see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Sea-level (4 m) — **not** hot-and-high; several approaches/departures track directly over the Mediterranean given the coastal siting — see §3.4/§10 |
| Special-airport status | 🟧 Coastal/over-water approach tracks on the crossed 02/20 runway; segregated day/night preferential-configuration logic; not otherwise categorised as operator-restricted |
| Customs / PoE | **Yes — H24** `[AIP España AD 2-LEBL 2.3]` 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **LEMD, LEPA, LFML** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Field sits at 14 ft AMSL on the coastal Llobregat delta; flat with the Mediterranean immediately adjacent — no close-in high terrain relevant to any arrival/departure path. |
| Runway length vs fleet perf | 🟩 | 2,528–3,352 m runways are ample for any K Global widebody at typical arrival/departure weights. |
| Approach availability / minima | 🟧 | CAT II/III on 06L/24R and 06R/24L; RWY 02 is **CAT I only**; RWY 20 has no approach at all — runway/approach pairing is uneven across the three pairs, brief per assigned runway. |
| Airspace / traffic / control | 🟥 | Major Mediterranean hub with a three-runway mixed layout (one crossing runway plus two parallels) under **Barcelona APP** — see §3.2. |
| Weather / seasonal hazard | 🟧 | Coastal Mediterranean climate; sea-breeze and occasional strong Tramontana/Mestral wind effects are plausible at this coastal siting but not independently quantified this pass. |
| Curfew / slots & hours | 🟧 | No hard night curfew found in reachable sources; a **summer daytime arrival restriction for MTOW ≤ 15,000 kg aircraft (0700–1130 LT)** does not apply to K Global widebodies; slot-coordination level not independently confirmed. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Jet A-1, H24, no stated uplift limitations. |
| Customs / handling / security | 🟩 | H24 customs/immigration confirmed at AIP level; specific K Global handling agent not yet confirmed 🟧. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LEBL sits at 14 ft AMSL on the flat Llobregat river delta, directly on the Mediterranean coast. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths on any of the three runway pairs — a non-issue field for terrain. Verify the current-chart MSA ring as routine practice.

### 3.2 Airborne conflict / traffic 🟥
Barcelona-El Prat runs a **three-runway mixed layout**: a crossing runway pair (**02/20**) plus two parallel pairs (**06L/24R**, **06R/24L**), under **Barcelona APP** — a major Mediterranean gateway with sustained high traffic density. The AIP flags several **runway-holding-position siting anomalies** — the approach surfaces of RWY 02 and RWY 06L are penetrated by the physical position of certain holding points (TWY K7 for RWY 02; TWY Z6/Z7/Z8/Y6/Y7/S14/N16 for RWY 06L), with taxi restrictions by aircraft size through those points — a recognised complexity in the ground/airborne interface. Cross-ref [Europe — Airspace Briefing](../../../../airspace/europe.md) for the enroute Barcelona ACC (LECB) picture; **no dedicated LECB FIR brief exists in the library yet** 🟧.

### 3.3 Runway excursion 🟧
RWY 06L has a **430 m displaced threshold**, reducing its LDA to 2,922 m against a 3,352 m physical length. RWY 20 has **no published LDA at all** (not usable for landing). Aircraft rated Super/Heavy on the 06L/24R and 06R/24L pairs are governed by a wake-turbulence-category-specific rapid-exit-taxiway distance table — use the assigned RET or report inability at first contact to avoid extended runway occupancy.

### 3.4 Weather threat 🟧
Coastal Mediterranean climate — reference temperature 29°C, low average 9°C. The field's direct coastal siting means several arrival/departure tracks run **over open water** (notably the RWY 02 approach and the 06/24 parallel-pair operations, given the coastline orientation immediately south of the field) — benign for CFIT (flat, no obstacles) but a genuine consideration for visual reference at night and for any offshore convective cell tracking onshore. No LEBL-specific fog or wind-shear frequency statistic was found in reachable sources this pass — treat as a possibility to verify at planning. See §14.

### 3.5 Operational considerations 🟥
Three durable planning constraints: (1) the **uneven approach-capability split across the three runway pairs** — CAT II/III only exists on 06L/24R and 06R/24L, while RWY 02 is CAT I-only and RWY 20 has no approach — brief the assigned runway's actual capability, don't assume uniform CAT III coverage; (2) the **day/night segregated preferential-configuration logic**, which shifts the active runway set by time of day independent of wind (§10/§11); and (3) the **real-time slot/EOBT-matching regime** — the airport operations office may refuse a flight plan whose EOBT/ETA does not match the assigned airport slot. RFF and navaid infrastructure are first-tier; most open items are currency/administrative confirmations.

---

## 4. Cautions & Warnings

- **RWY 20 has no published approach and no landing distance** — it is available for takeoff only; never plan or expect a landing on 20.
- **RWY 02 is CAT I only** — do not assume CAT II/III capability on this runway despite the field's overall CAT III presence on the parallel pair.
- **RWY 06L has a 430 m displaced threshold** — brief the actual 2,922 m LDA, not the 3,352 m physical runway length.
- **Segregated day/night preferential configuration changes the active runway set by time of day**, not purely by wind — check ATIS at any operation spanning a shift boundary (0700/2300 LT).
- **Several runway-holding positions physically intrude on the approach surface of RWY 02 and RWY 06L** — expect size-based taxi restrictions through TWY K7 (RWY 02) and TWY Z6/Z7/Z8/Y6/Y7/S14/N16 (RWY 06L).
- **Powerback (reverse-thrust stand exit) is prohibited.**
- **Flight plans with an EOBT/ETA mismatched to the assigned airport slot may be refused** by the LEBL operations office — keep slot and flight-plan timing aligned.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **uneven CAT II/III coverage across runway pairs** and the **coastal over-water approach/departure tracks**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability ops into 06L/24R or 06R/24L; RWY 02 arrivals are CAT I-minima only. 🟧
- **Operating restrictions / bans:** All aircraft must have a contracted ramp-handling agent. Aerodrome is closed to VFR operations except ambulance/rescue/state/public-service flights; closed to helicopter ops except the same categories; closed to fixed-wing aircraft ≤ 2,000 kg MTOW except the same categories; closed to aircraft without adequate two-way radio. Summer (Jun–Sep) restriction: arrivals for aircraft MTOW ≤ 15,000 kg barred 0700–1130 LT (does not apply to K Global widebodies). 🟩 for our fleet.
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** Airport operator — **Aena**. ANSP — **ENAIRE** (Barcelona APP/TWR; Barcelona ACC LECB en route). A **Local Schedule Coordination Office** and real-time slot process exist via the Airport Operations Center.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | No hard night curfew found in reachable sources; summer daytime arrival restriction for MTOW ≤ 15,000 kg aircraft only (0700–1130 LT, Jun–Sep) — does not affect K Global widebody operations 🟧 | 🟧 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | Jet A-1, H24, no stated uplift limitations | 🟩 |
| PCN | Runway-specific — see §7; apron PCN 59–137 depending on ramp | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Aviapartner, Groundforce BCN, Menzies Aviation (ramp agents); several dedicated GA/Business FBOs; specific K Global contract not confirmed 🟧 | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 02 | 2,528 × 45 m | Asphaltic concrete / PCN 91/F/A/W/T | 2,528 m | 2,600 m | 2,528 m | 2,528 m | CAT I approach (720 m LIH) |
| 20 | 2,528 × 45 m | Asphaltic concrete / PCN 91/F/A/W/T | 2,528 m | 2,588 m | 2,528 m | **NU** | **Not usable for landing** — no approach published; takeoff-only |
| 06L | 3,352 × 60 m | Asphaltic concrete / PCN 97/F/A/W/T | 3,352 m | 3,412 m | 3,352 m | 2,922 m | THR displaced 430 m; ILS CAT II/III (QAA) |
| 24R | 3,352 × 60 m | Asphaltic concrete / PCN 97/F/A/W/T | 3,352 m | 3,412 m | 3,352 m | 3,352 m | ILS CAT II/III (BCA) |
| 06R | 2,660 × 60 m | Asphaltic concrete / PCN 129/F/A/W/T | 2,660 m | 2,720 m | 2,660 m | 2,660 m | ILS CAT II/III (BLE) |
| 24L | 2,660 × 60 m | Asphaltic concrete / PCN 129/F/A/W/T | 2,660 m | 2,720 m | 2,660 m | 2,660 m | ILS CAT II/III (BLW) |

*Source: AIP España AD 2-LEBL 2.12/2.13, AIRAC AMDT 2026/408, eff. 09-JUL-26 (retrieved 2026-07-26). All distances in metres. NU = not usable for that operation.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Barcelona Information | 118.655 (ARR) · 121.980 (DEP) | H24 | D-ATIS also provided |
| Delivery / Clearance | Barcelona CLR | 121.805 | H24 | |
| Ground (GMC) | Barcelona Ground | 121.655 (GMC C) · 121.705 (GMC N) · 122.230 (GMC S) | H24 | |
| Tower | Barcelona TWR | 118.105 (Local ARR / ARR+DEP) · 118.330 (Local DEP) · 122.830 (backup) | H24 | |
| Approach | Barcelona APP | 121.155/125.250/126.505/127.700 (APP-H) · 119.105/135.280 (APP-L) · 124.705 (backup) · 131.125 (APP) | H24 | Sector-specific — take the assigned frequency |
| Centre / FIR | Barcelona ACC (LECB) | Per current AIRAC | H24 | No dedicated FIR brief in-library — see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: AIP España AD 2-LEBL 2.18, AMDT 2026/408, eff. 09-JUL-26 (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | BCN | 116.700 MHz / CH 114X | H24 | On field |
| ILS 02 | BLT | 108.750 MHz | H24 | **CAT I only**; GP 330.350, DME CH 24Y |
| ILS 06L | QAA | 110.300 MHz | H24 | **CAT III**; GP 335.000, DME CH 40X |
| ILS 24R | BCA | 109.500 MHz | H24 | **CAT III**; GP 332.600, DME CH 32X |
| ILS 06R | BLE | 110.750 MHz | H24 | **CAT III**; GP 330.050, DME CH 44Y |
| ILS 24L | BLW | 111.500 MHz | H24 | **CAT III**; GP 332.900, DME CH 52X |
| NDB | VNV | 380.000 kHz | H24 | 90 NM coverage |

*On-field navaids plus one NDB; additional area VORs (PRA, SLL, VLA, CLE) support the Barcelona TMA/enroute structure per AIP España AD 2-LEBL 2.19, AMDT 2026/408, eff. 09-JUL-26 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** TA 1,850 m / 6,000 ft MSL; TL by QNH — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** **Segregated day/night configuration.** Day (0700–2300 LT): preferential **West-parallel config** lands on **24R** (24L restricted to aircraft justifying a need for longer runway length than 24L provides); non-preferential **East-parallel config** lands on **06L**. Night (2300–0700 LT): preferential **North crossed-runway config** lands on **02**; non-preferential **West single-runway config** lands on **24L**. Held until ~10 kt tailwind gust / 20 kt crosswind (considered from 7 kt tailwind).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 02 | ILS (BLT) | **CAT I only** — the field's only non-CAT-III-capable landing runway |
| 06L | ILS CAT II/III (QAA) | THR displaced 430 m |
| 24R | ILS CAT II/III (BCA) | Preferential day-config landing runway |
| 06R | ILS CAT II/III (BLE) | |
| 24L | ILS CAT II/III (BLW) | Restricted use — longer-runway-need justification required per local regulation |
| 20 | — none — | **Never an arrival runway** — no approach published, not usable for landing |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT II/III procedures apply on 06L/24R and 06R/24L; RWY 02 is CAT I-minima only, a materially different low-visibility capability from the parallel pair — brief accordingly. Exact RVR trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal delta); the operative missed-approach concern is re-sequencing into a high-density mixed-runway (crossing + parallel) traffic environment, and — on RWY 02 — the lower CAT I capability if visibility is marginal.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. Jet aircraft unable to maintain minimum IAS on specified SID segments (190 kt on several 02/06R/20/24L departures, 210 kt on specified 24R segments) must notify Tower on first contact. 🟧
- **RNP / climb-gradient requirements:** Local regulation requires any RNAV1-noncompliant aircraft to report on first contact on the Clearance frequency. Verify RNP/gradient per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Full **A-CDM** procedure (TOBT/TSAT/EOBT) with EUROCONTROL **FAM** (Flight Activation Monitoring) — keep TOBT/EOBT current from three hours before EOBT; DCL datalink clearance available; **powerback is prohibited**.
- **ATC slot / CTOT & clearance:** Real-time slot process via the Airport Operations Center; the LEBL operations office may **refuse a flight plan whose EOBT/ETA does not match the assigned airport slot**. Slot-coordination level not independently confirmed this pass. 🟧
- **De-icing:** Provided **by the handling agent**, not a dedicated airport-run remote pad; no fixed pad location confirmed this pass. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** The use of RWY 24R for departure is **restricted to aircraft that can justify needing more runway length than RWY 24L provides**, requiring a documented performance/safety justification submitted within 7 days and a mandatory RNAV1 "DNP" (Despegue No Preferente / non-preferential departure) SID — a direct noise/environmental-management mechanism, not a capacity one. The equivalent restriction applies to RWY 06L departures relative to RWY 06R.
- **Night noise / dB limits:** No hard night curfew or dB limit found in reachable sources; noise-related restrictions are described in AD 2-LEBL §21 which was not fully obtained this pass. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** **Powerback (reverse-thrust for stand exit) is prohibited.** Standard idle-reverse on landing not separately restricted in reachable sources.

---

## 13. Ground operations

- **Stands for our types:** Widebody-capable Code E/F stands are distributed across Ramps 1–3, 9–17 and 30/32; exact current allocation for our operation not confirmed 🟧. | 🟧
- **Push-back:** Handling-agent-managed; **powerback prohibited**; "follow-me" guidance mandatory for towed aircraft, corporate aviation, Code D+ aircraft to stands without a visual docking guidance system, helicopters, and Ramp 32 movements.
- **Standard taxi routes:** Confirm with Ground (GMC)/handling on the day; Code F aircraft (A388, A346, B748, AN124) are subject to named taxiway restrictions per the published GMC chart.
- **Hot spots / tight taxiways:** 🟥 AIP-flagged **runway-holding-position siting anomalies** — the RWY 02 approach surface is penetrated by the holding-point position on TWY K7 (with size-based taxi restrictions through TWY LS); the RWY 06L approach surface is penetrated by holding points on TWY Z6/Z7/Z8/Y6/Y7/S14/N16, with associated size-based taxi restrictions through those and adjacent points (Y6/Y7/AS/T12/T13/T14/PN/Z8/RN/S14/N13/N14/N15/N16/M16). A genuinely complex ground-taxi network for Code E/F aircraft.
- **Follow-me:** Mandatory in the specific cases listed above; available on pilot request in adverse visibility otherwise.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate — reference temperature 29°C, low average 9°C; sea-breeze effects plausible given the direct coastal siting on the Llobregat delta, not independently quantified this pass.
- **Seasonal hazards:** Winter snow plan applies **15 Nov–15 Mar** (potassium acetate/sodium formate surface treatment) despite the mild coastal climate — a standing precaution rather than a frequent event; summer convective activity is standard regional climatology (see [Europe — Airspace Briefing](../../../../airspace/europe.md) §11). No LEBL-specific fog-frequency data found this pass. 🟧
- **Local effects:** Coastal siting means several approach/departure tracks run over open Mediterranean water — benign for CFIT but a genuine consideration for night visual reference and offshore-cell tracking.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the day/night preferential-configuration status and the RWY 02/06L holding-point restrictions), navaid U/S, CAT II/III equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current AUP/UUP or RAD constraints in Spanish airspace. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin field — not a K Global base. `[VAMSYS mirror 2026-07-25]`
- **Nearest suitable alternates:** Company preferred alternates [**LEMD**](../lemd/index.md) (Madrid), **LEPA** (Palma de Mallorca), **LFML** (Marseille) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1, H24, no stated limitations. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting for any K Global type on the longer runway pair (06L/24R, 3,352/3,412 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-elevation or field-length performance penalty at this sea-level field.

---

## 17. Fleet-specific notes (optional)

- No K Global type carries a field-length or field-elevation limitation at LEBL. The operative planning items are (1) CAT II/III currency for the 06L/24R and 06R/24L pairs versus the CAT I-only capability on RWY 02 — see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md) — and (2) the RWY 24R/06L restricted-use noise rule, which is a scheduling/performance-justification item rather than a raw performance limit. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Runway designation discrepancy** — this pack's scope anchor referenced a "07/25" third runway pair; the current AIRAC (AMDT 2026/408, eff. 09-JUL-26) designates this pair **02/20**. The current-AIRAC AIP is the higher-tier source and is used throughout this pack; the discrepancy likely reflects a historical redesignation (magnetic-variation-driven runway renumbering is a known pattern at LEBL) — not independently traced to a specific amendment date this pass.
- **ILS sub-category (IIIA/IIIB/IIIC)** for QAA/BCA/BLE/BLW — not confirmed from a primary table this pass.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Item 21 (noise procedures)** — referenced in the local-regulation text (AD 2-LEBL §21, point 8) but not obtained in this research pass; specific noise-abatement/dB-limit detail not confirmed.
- **Slot-coordination level** (IATA Level 1/2/3) — not independently confirmed.
- **Take-off minima, engine run-up restriction, exact LVP RVR trigger values** — none confirmed in reachable sources.
- **Handling agent contracted for our operation and confirmed turnaround time** — not yet established.
- **Sea-breeze/wind-shear frequency data specific to LEBL** — general coastal-siting context given; not independently quantified.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP España (ENAIRE eAIP), AD 2-LEBL** (DATOS DEL AERÓDROMO), AIRAC AMDT 2026/408, eff. 09-JUL-26 — https://aip.enaire.es/aip/contenido_AMDT/LE_Amdt_2026_408_AD_2_LEBL_es.html (retrieved 2026-07-26). *ARP/elevation, runway geometry/declared distances/PCN, ILS idents/frequencies, ATC frequencies, RFF category, preferential configuration, local regulations, taxiway restrictions.*
- Wikipedia — "Josep Tarradellas Barcelona–El Prat Airport" (retrieved 2026-07-26). *Terminal layout corroboration.*
- Secret Flying — "Barcelona Airports Guide" — https://www.secretflying.com/guides/barcelona/airports/ (retrieved 2026-07-26). *Terminal/inter-terminal transfer corroboration.*
- OurAirports — https://ourairports.com/airports/LEBL/runways.html (retrieved 2026-07-26). *Runway cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
