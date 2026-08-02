# EGGW — Luton · Airport Briefing

**EGGW / LTN** · Luton, Bedfordshire, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the UK AIP (NATS Aeronautical Information Service, eAIP AD 2‑EGGW) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 51°52′29″N / 000°22′06″W (mid-point of RWY 07/25) `[UK AIP AD 2.2]` |
| Field elevation | **527 ft AMSL** (reference temperature 20°C) — cross-check sources give 526 ft; AIP figure is authoritative |
| Mag variation | **0.41° E (2022)**, annual change 0.20° E `[UK AIP AD 2.2]` — 🟧 not re-confirmed against current AIRAC |
| Time zone | UTC+0 (GMT) / UTC+1 (BST, UK DST observed) |
| Runway(s) | **Single runway 07/25** — 2,162 × 45 m, asphalt, grooved, **PCN 75/R/D/X/T** `[UK AIP AD 2.12]` |
| Preferential runway | Wind-driven single-runway operation; no parallel/alternate runway — see §5/§10/§11 |
| Longest LDA | 2,162 m (RWY 07) |
| Approaches | **ILS/LLZ Category III capability** on both ends per AIP; ATC Low Visibility Procedures confirmed for CAT II/III ops `[UK AIP AD 2.19/2.20]` |
| RFF category | **CAT 7 (A7)**, Cat 8/9 available by prior arrangement `[UK AIP AD 2.6]` 🟩 |
| Control type | **Radar** — Luton Tower/Ground/Director on the field; **London (EGTT)** en route/FIR — 🟧 **no EGTT FIR brief exists yet in this library**; see [Europe airspace briefing](../../../../airspace/europe.md) for continental context |
| Elevation class | **527 ft AMSL — one of the higher-elevation major London-area airports**; sits at the NE edge of the **Chiltern Hills**, with a **~40 m (130 ft) drop-off at the western end of the runway** and a shorter-than-typical 2,162 m runway — see §3.1/§3.5 🟧 |
| Special-airport status | 🟥 **Slot-coordinated IATA Level 3** (since Summer 2013, coordinator **Airport Coordination Limited, ACL**); single-runway, elevated field with a comparatively short runway for the traffic mix; rising terrain to the west |
| Customs / PoE | **Yes** — H24 `[UK AIP AD 2.3]` |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGLL, EGKK, EHAM** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 14 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | NE edge of the Chiltern Hills; ~40 m drop-off at the runway's western end; charted obstacles (trees to 555 ft, masts to ~722 ft) near the field — not a major CFIT driver at normal circling/approach altitudes but a genuine local watch-item. See §3.1. |
| Runway length vs fleet perf | 🟧 | Single runway 2,162 m is on the shorter side for a London-area field; non-limiting for K Global's Category **S** fleet at typical weights, but a standing performance watch-item generally. |
| Approach availability / minima | 🟩 | ILS/LLZ Category III capability confirmed on both runway ends per AIP; LVP procedures in place. |
| Airspace / traffic / control | 🟧 | Single-runway capacity constraint; shared/coordinated terminal holding (ABBOT fix shared with Stansted/Cambridge traffic) requires cross-field awareness. |
| Weather / seasonal hazard | 🟧 | Standard UK maritime climate at an elevated, hill-edge site; no field-specific extreme-weather statistic confirmed this pass. |
| Curfew / slots / hours | 🟥 | **Slot-coordinated Level 3** (ACL) **and** Luton's **own locally-run night noise/Quota Count scheme** (distinct from the Heathrow/Gatwick/Stansted DfT scheme) — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 7 (with 8/9 by arrangement) — adequate for our Category S fleet. |
| Fuel availability | 🟩 | AVTUR Jet A-1, bowser refuelling H24, confirmed supplier (Shell UK) `[UK AIP AD 2.4]`. |
| Customs / handling / security | 🟧 | Customs H24 confirmed; a **nominated handling agent is mandatory** for all visiting aircraft — named agents confirmed (Harrods Business Aviation, Signature Flight Support, Swissport, Menzies) but agent for our specific operation not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
EGGW sits at 527 ft AMSL where "the valley of the River Lea cuts its way through the north-east end of the Chiltern Hills," on a hill-top location with a **~40 m (130 ft) drop-off at the western end of the runway** `[Wikipedia, tier-4 corroboration]`. AIP-confirmed obstacles include trees at 523–555 ft elevation (up to ~74 ft AGL) near the RWY 25 approach, and masts to 721–722 ft elevation (165–168 ft AGL, lit red) plus a TV mast at 698 ft in the circling area/aerodrome vicinity `[UK AIP AD 2.10]`. This is not a major CFIT driver at normal instrument-approach/circling altitudes, but the elevated, hill-edge siting and rising ground to the north/northeast (**Barton Hills area — not independently confirmed by name in this pass** 🟧) make it a genuine local terrain-awareness item, distinct from the flat-lowland profile of EGLL/EGKK. The AIP itself carries a specific warning: **"Possible light distraction on approach to Runway 07"** at a charted position `[UK AIP AD 2.20]`.

### 3.2 Airborne conflict / traffic 🟥
Single-runway capacity constraint — all traffic funnels through RWY 07/25. Terminal holding uses **ABBOT** (a Terminal Holding facility **shared with Stansted/Cambridge arrivals** — cross-field traffic awareness required) and **ZAGZO** (Luton-only Terminal Holding facility); reporting point **BIGLI** is used for arrivals from the north/northeast under coordination with London Military `[UK AIP AD 2.21/2.22]`. Cross-ref the continental [Europe airspace briefing](../../../../airspace/europe.md) — **no dedicated EGTT (London FIR/UIR) brief exists yet**; treat this as an open item.

### 3.3 Runway excursion 🟧
RWY 25 threshold is displaced **82 m** per AIP (a Wikipedia cross-check gives 85 m — AIP figure is authoritative). Declared distances show ASDA 2,219 m / LDA 2,080 m on RWY 25 versus TORA/TODA/ASDA/LDA all 2,162 m on RWY 07 — brief the correct reduced RWY 25 figures. The runway's comparatively short overall length (2,162 m) for a London-area field is a standing performance/excursion watch-item generally, though non-limiting for K Global's Category S fleet. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

### 3.4 Weather threat 🟧
Standard UK maritime climate at an elevated (527 ft), hill-edge site. No field-specific extreme-weather hazard statistic (e.g. a documented fog-frequency figure) was confirmed in this research pass — treat as general SE/Central-England climatology pending further confirmation. **Continuous Descent Approach (CDA) is mandatory** for all jets and props >5,700 kg MTOM on both runway ends, commencing from 5,000 ft QNH with no level segment exceeding 2.5 NM `[UK AIP AD 2.21]`. See §14.

### 3.5 Operational considerations 🟧
Plan around three durable constraints: (1) the **elevated, rising-terrain siting with a comparatively short 2,162 m runway** — a genuine watch-item for larger/heavier types even though non-limiting for our Category S fleet; (2) the **Level 3 slot-coordinated regime** (ACL, formally escalated from Level 2 in Summer 2013 after departure-peak breaches) — schedule integrity has direct network consequences; and (3) **Luton's own locally-run night noise/Quota Count scheme** (§6/§12), governed by the airport's own Consultative Committee rather than the DfT designated-airport scheme that applies at Heathrow/Gatwick/Stansted. Widebody movements are explicitly restricted to specific taxi routings (Follow-Me required via Taxiway Bravo 8; no widebody transit via Taxiway Echo 1) — confirm current widebody handling procedure if operating a larger type here. 🟧

---

## 4. Cautions & Warnings

- **Rising terrain / hill-edge siting** — NE edge of the Chiltern Hills, ~40 m drop-off at the runway's western end; elevated field (527 ft) relative to nearby EGLL (83 ft) and EGKK (203 ft).
- **RWY 25 threshold displaced 82 m** — brief the reduced ASDA (2,219 m) / LDA (2,080 m), not the full runway length.
- **AIP-published caution: "Possible light distraction on approach to Runway 07"** — a charted, named hazard at this field.
- **Comparatively short runway (2,162 m) for a London-area field** — non-limiting for our Category S fleet but a standing generic performance watch-item.
- **ABBOT holding fix is shared with Stansted/Cambridge traffic** — maintain cross-field traffic awareness.
- **Widebody movements are taxi-restricted** — no widebody transit via Taxiway Echo 1; Follow-Me mandatory via Taxiway Bravo 8 for widebody aircraft.
- **Luton runs its own night noise/Quota Count scheme, separate from the Heathrow/Gatwick/Stansted DfT scheme** — do not assume the same numeric limits apply.
- **ATC frequencies and SID/STAR designators below are drawn from a 2022-cycle AIP snapshot** — verify current chart before use.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **rising-terrain/hill-edge siting** and the **comparatively short runway**. 🟧
- **Crew-qualification gate:** CAT II/III currency required for full-capability ops in low-visibility conditions; AIP confirms Runways 07 and 25 are "suitable for Category II/III operations" with ATC LVPs `[UK AIP AD 2.20]`. 🟧
- **Operating restrictions / bans:** Luton's own night noise/QC scheme (§6/§12); widebody taxi restrictions (Echo 1 no-transit, Bravo 8 Follow-Me mandatory) `[UK AIP AD 2.20]`. 🟧
- **Overflight / entry / permits:** Standard UK international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **NATS** (Luton Tower/Ground/Radar on the field). Airport site owned by **Luton Borough Council**; operated under concession by **London Luton Airport Operations Limited (LLAOL)**, current ownership Aena Internacional (51%) / Infrabridge (49%). Slot coordinator — **Airport Coordination Limited (ACL)**. A **nominated ground handling agent is mandatory** for all visiting aircraft `[UK AIP AD 2.20]`.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower H24; Ground/Delivery HX (0600–2300 local / 0500–2200 UTC per AIP hour convention) `[UK AIP AD 2.18]` | 🟧 |
| AD operating hours | H24 (AD Administration H24) | 🟩 |
| Night / curfew restrictions | Luton's **own locally-run scheme** (governed by the London Luton Airport Consultative Committee / Noise and Track Sub-Committee, not the DfT scheme): noise-violation limits **80 dBA day (0700–2300) / 79 dBA night (2300–0700)** at three Noise Monitoring Terminals; **QC >2 banned at night**; **Chapter 2 aircraft banned outright at night**; scheduled arrivals only accepted 0545–0700, all other arrivals after 0700 `[UK AIP AD 2.21]` | 🟥 |
| RFF category | **CAT 7 (A7)**, Cat 8/9 by prior arrangement `[UK AIP AD 2.6]` | 🟩 |
| Fuel | AVTUR Jet A-1; bowser refuelling, H24, surcharge applies; out-of-hours contact confirmed (Shell UK Ltd) `[UK AIP AD 2.4]` | 🟩 |
| PCN | Runway 75/R/D/X/T; Taxiway E notably narrower (19 m, concrete) and exceeds the 1.5% slope guideline at 1.7% `[UK AIP AD 2.8/2.12]` | 🟧 |
| Customs | H24 `[UK AIP AD 2.3]` | 🟩 |
| Handling / FBO | **Mandatory nominated handling agent** for all visiting aircraft — confirmed names: Harrods Business Aviation, Signature Flight Support, Swissport, Menzies `[UK AIP AD 2.20]`; agent for our specific operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 2,162 × 45 m | Asphalt, grooved / PCN 75/R/D/X/T | 2,162 m | 3,243 m | 2,162 m | 2,162 m | No displacement |
| 25 | 2,162 × 45 m | Asphalt, grooved / PCN 75/R/D/X/T | 2,162 m | 3,243 m | **2,219 m** | **2,080 m** | Landing threshold displaced 82 m |

*Source: UK AIP AD 2‑EGGW 2.12/2.13 (NATS eAIP, AIRAC cycle effective 2022‑06‑16 — treat as needing a live-AIRAC cross-check for currency, though core runway geometry/PCN/declared distances change rarely). Intersection take-off options also published from Taxiways B, H, C (RWY 07) and A, C (RWY 25) with reduced TORA/TODA/ASDA — pull the current AIRAC table if an intersection departure is used. Runway strip 2,339 × 300 m; clearway ~1,081 × 150 m (RWY 07) / ~1,024 × 150 m (RWY 25). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Luton ATIS | 120.580 | H24 | `[UK AIP AD 2.18]` |
| Delivery | Luton Delivery | 121.885 | When directed by ATC | |
| Ground | Luton Ground | 121.755 | 0600–2300 local (0500–2200 UTC) | |
| Tower | Luton Tower | 132.555 (primary, H24) · 126.725 (when directed, H24) · 121.500 (emergency, H24) | H24 | |
| Approach / Radar | Luton Radar | 129.550 (H24) · 132.050 (when directed) | H24 | |
| Director | Luton Director | 128.750 | When directed | |
| Fire (non-ATS) | Luton Fire | 121.600 | Ground emergencies only | |
| Centre / FIR | London (EGTT) — no dedicated brief in this library yet | Per current AIRAC | H24 | See [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |

*Source: UK AIP AD 2‑EGGW 2.18 (NATS eAIP, AIRAC cycle effective 2022‑06‑16) — cross-checked against OurAirports and SkyVector (tier-4), broadly consistent with minor rounding. Treat as needing a live-AIRAC cross-check for full currency.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LLZ RWY 07 | I-LTN | 109.150 | H24 (assumed) | Category III capability; DME Ch 28Y |
| Glidepath RWY 07 | — | 331.250 | H24 (assumed) | 3° GP, ref. datum height 58 ft |
| ILS/LLZ RWY 25 | I-LJ | 109.150 | H24 (assumed) | Category III capability; DME Ch 28Y |
| Glidepath RWY 25 | — | 331.250 | H24 (assumed) | 3° GP, ref. datum height 55 ft |
| NDB | HEN | 433.5 kHz | H24 | Range 30 NM |
| NDB / locator | LUT | 345.0 kHz | H24 | Range 20 NM |
| Area VOR/DME (LAM) | Lambourne | 115.60 | H24 (assumed) | Regional reference |
| Area VOR/DME (BNN) | Bovingdon | 113.75 | H24 (assumed) | Regional reference |
| Area VOR/DME (BKY) | Barkway | 116.25 | H24 (assumed) | Regional reference |
| Area VOR/DME (BPK) | Brookmans Park | 117.50 | H24 (assumed) | Regional reference |
| Area VOR/DME (DET) | Detling | 117.30 | H24 (assumed) | Regional reference |

*Source: UK AIP AD 2‑EGGW 2.19 (NATS eAIP, AIRAC cycle effective 2022‑06‑16). AIP AD 2.20 §3 confirms Runways 07 and 25 are "suitable for Category II/III operations" with ATC Low Visibility Procedures. Sub-category (IIIA/IIIB/IIIC) not itemised — verify current chart.*

---

## 10. Arrival

- **Transition altitude / level:** Not independently confirmed in the AIP sections reached this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven single-runway selection; no parallel/alternate runway.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 07 | ILS (I-LTN), Category III capability | AIP-flagged "possible light distraction on approach" |
| 25 | ILS (I-LJ), Category III capability | Displaced threshold; reduced LDA 2,080 m |

- **STARs / holding fixes (names only):** **ABBOT** (Terminal Holding, shared with Stansted/Cambridge arrivals), **ZAGZO** (Luton-only Terminal Holding); reporting point **BIGLI** for arrivals from the north/northeast coordinated with London Military `[UK AIP AD 2.21/2.22]`. Pull the current-AIRAC STAR list at planning.
- **LVP:** CAT II/III capability confirmed on both runway ends; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Rising terrain to the north/northeast and the runway's hill-edge siting are the operative missed-approach concerns here (distinct from the flat-lowland profile at EGLL/EGKK) — verify climb-gradient/turn constraints on the current chart.

---

## 11. Departure

- **SIDs / Noise Preferential Routeings (NPRs, names as published):** RWY 25 — **OLNEY Kilo/Juliet**, **Compton Papa**, **Non-RNAV MATCH/Detling Mike**, **RNAV MATCH/Detling**; RWY 07 — **OLNEY Sierra**, **Compton Uniform/Victor**, **MATCH/Detling Tango** `[UK AIP AD 2.21 §5]`. Fly the charted current-AIRAC version — these are confirmed designators from the primary AIP, not fabricated, but must still be flown against the current chart.
- **RNP / climb-gradient requirements:** Not itemised in the sections reached this pass — verify per-SID gradient/equipage on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Nose-in parking is standard; pushback direction varies by apron zone (Main/North/South) with specific face-north/south/east/west instructions per stand block `[UK AIP AD 2.20]`.
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated** since Summer 2013 (coordinator **ACL**); all flights require a slot allocation, including ad-hoc requests via the ACL online-coordination portal `[UK AIP AD 2.20]`.
- **De-icing:** Aircraft de-icing "by arrangement with handling companies," service available H24 per the operational-hours table `[UK AIP AD 2.3/2.7]`. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **Noise Preferential Routeings (NPRs)** apply to all departing jets and aircraft >5,700 kg — obligation ceases at **3,000 ft QNH (day) / 4,000 ft QNH (night)** for conventional SIDs, **4,000 ft QNH** for RNAV1 SIDs; track deviations outside the published "Lateral Swathe" incur a nominal fine `[UK AIP AD 2.21]`.
- **Night noise / dB limits:** Luton's **own locally-run scheme** — noise-violation limits **80 dBA day / 79 dBA night** at three named Noise Monitoring Terminals (Frogmore/Stagenhoe Bottom Farm, Grove Farm Slip End, Pepsal End Farm Pepperstock); night departures exceeding 79 dB at 6.5 km from start of roll incur a nominal fine `[UK AIP AD 2.21]`. Governance via the **London Luton Airport Consultative Committee (LLACC)** and its **Noise and Track Sub-Committee (NTSC)**.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Single terminal, ~60 stands (28 dedicated jetbridge gates in three piers, 1–19 / 20–28 / 30–43); mix of Standard Apron/Stand and **MARS (Multiple Aircraft Ramp System)** stands `[UK AIP AD 2.9, Wikipedia]`. Overwhelmingly a narrowbody LCC/charter field — occasional widebody movements are explicitly regulated (below). | 🟧
- **Push-back:** Nose-in parking, marshaller-guided; Stands 54/56/58/62/71/80/81 excepted from nose-in; Stands 8 & 9 carry a >1% slope caution `[UK AIP AD 2.9]`.
- **Standard taxi routes:** Confirm with Ground on the day; Taxiways A, B, C, D, F, H, K are 23 m wide asphalt, **Taxiway E is 19 m wide concrete and exceeds the 1.5% slope guideline at 1.7%** `[UK AIP AD 2.8]`.
- **Hot spots / tight taxiways:** 🟥 **Holding Point Hotel 1** — "unusual alignment of the taxiway and runway entry point," caution when queuing (area immediately west of H1 is explicitly not a holding area); **Taxiway Echo 1** — **no widebody transit in either direction**, maximum size B757/A321 under power; **Taxiway Bravo 8** — widebody aircraft require a Follow-Me vehicle; **Hold A4E** — not usable by aircraft larger than 737-800/BBJ/A321 `[UK AIP AD 2.20]`.
- **Follow-me:** Mandatory for widebody aircraft via Taxiway Bravo 8; general follow-me availability for other types not itemised. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate at an elevated (527 ft), Chiltern-Hills-edge site.
- **Seasonal hazards:** No field-specific extreme-weather hazard statistic confirmed this pass; general UK maritime fog/low-cloud risk applies. **CDA mandatory** for jets/props >5,700 kg from 5,000 ft QNH (no level segment >2.5 NM) — a standing noise/energy-management procedure at this field `[UK AIP AD 2.21]`.
- **Local effects:** Rising terrain to the north/northeast and the runway's own ~40 m western drop-off are the standout local effects, distinct from the flat-lowland profile at EGLL/EGKK.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT II/III equipment status, lighting, obstacle/mast status (masts to ~722 ft charted near the field, AIP AD 2.10), RFF downgrade, slot/CTOT constraints, current arrival-window status (scheduled arrivals only 0545–0700 per the night scheme). Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates [**EGLL**](../egll/index.md) (Heathrow), [**EGKK**](../egkk/index.md) (Gatwick), [**EHAM**](../../netherlands/eham/index.md) (Amsterdam Schiphol) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1; bowser refuelling, H24, surcharge applies; confirmed out-of-hours contact (Shell UK Ltd) `[UK AIP AD 2.4]`. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length (2,162 m) is non-limiting for K Global's Category **S** fleet at typical arrival/departure weights, but is comparatively short for a London-area field generally — confirm performance margin for the specific type/weight combination. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

---

## 17. Fleet-specific notes (optional)

- K Global's Category **S** operation at EGGW should confirm current-weight runway performance margin given the field's comparatively short 2,162 m runway and elevated (527 ft), rising-terrain siting — a generic watch-item rather than a known-limiting case. Widebody-type movements (if ever scheduled here) face explicit taxi restrictions (no Echo 1 transit, mandatory Bravo 8 Follow-Me) — confirm before planning any non-Category-S type into this field. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Transition altitude/level** — not confirmed in the AIP sections reached this pass.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, general (non-widebody) follow-me availability** — none confirmed in reachable sources this pass.
- **ILS sub-category (IIIA/IIIB/IIIC)** — Category III capability confirmed generically; sub-category not itemised.
- **"Barton Hills" as the specific named high ground** — referenced in general regional geography but not independently confirmed by name in the AIP or Wikipedia text reached this pass; the ~40 m runway-end drop-off and AIP obstacle data are confirmed, the specific hill name is not.
- **Named ground handling agent for our specific operation** — Harrods Business Aviation, Signature Flight Support, Swissport and Menzies are confirmed to operate at the field generally; agent for K Global's operation not confirmed.
- **Current-cycle SID/STAR designators beyond the confirmed AD 2.21 NPR table** — the NPR/departure-route names listed in §11 are AIP-sourced and current to the 2022-06-16 cycle; re-verify against the live current AIRAC.
- **No dedicated EGTT (London FIR/UIR) brief exists yet in this library** — flagged per governance; link only the continental [Europe airspace briefing](../../../../airspace/europe.md) until a dedicated EGTT brief is built.
- **Terminal 2 / capacity-expansion programme status** — a proposed second terminal (targeting 32M pax/yr by 2039) was under consultation per Wikipedia; current status not confirmed this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **UK AIP (NATS Aeronautical Information Service), AD 2‑EGGW**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGGW-en-GB.html (retrieved 2026-07-26). *ARP/elevation/mag-var, operational hours, cargo/handling, RFF category, seasonal/de-icing, apron/taxiway data, obstacles, runway physical characteristics, declared distances, communications, navaids, noise abatement/NPR table, holding fixes, local traffic regulations (widebody taxi restrictions, mandatory handling agent).*
- OurAirports — https://ourairports.com/airports/EGGW/ and /runways.html and /closest-navaids.html and /frequencies.html (retrieved 2026-07-26). *Cross-check.*
- SkyVector — https://skyvector.com/airport/EGGW/London-Luton-Airport (retrieved 2026-07-26). *Frequency cross-check.*
- Wikipedia — "Luton Airport" — https://en.wikipedia.org/wiki/Luton_Airport (retrieved 2026-07-26). *Chiltern Hills/hill-edge siting, terminal structure, ownership, transformation programme.*
- Airport Coordination Limited — Luton case study — https://www.acl-uk.org/luton/ (retrieved 2026-07-26). *Level 3 coordination history (Summer 2013).*
- London Luton Airport — Consultative Committee / Noise and Track Sub-Committee — https://www.london-luton.co.uk/corporate/the-llacc/llacc and /ntsc (retrieved 2026-07-26). *Local noise-scheme governance.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
