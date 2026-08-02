# LFRS — Nantes Atlantique · Airport Briefing

**LFRS / NTE** · Bouguenais (Nantes), Pays de la Loire, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP France, AD 2 LFRS, AIRAC cycle eff. 09 JUL 2026); approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 47°09′25″N 001°36′28″W, published as "at the intersection of the two runway centrelines" 🟧 — LFRS is a **single physical runway** (03/21); the AIP wording is carried as sourced but not over-read as implying a second runway |
| Field elevation | **90 ft AMSL** (reference temperature 26.5°C; geoid undulation 155 ft) |
| Mag variation | **0.7169° E** (2025 epoch, annual change +0.134°/yr) 🟧 — current-year drift not independently re-derived, treat the epoch value as the sourced figure |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **03/21**, 2,853 × 45 m, macadam, PCN 49 F/C/W/T — single runway, curved geometry (see §3.3) |
| Preferential runway | **RWY 03 preferred** until a 5 kt tailwind component is reached (noise-driven preference, not merely wind logic) — see §12 |
| Longest LDA | 2,853 m (RWY 03); RWY 21 LDA reduced to **2,591 m** by displaced threshold |
| Approaches | **ILS CAT III on RWY 03** (LOC ident NT, 109.9); **RWY 21 has NO ILS** — RNP Y and RNP Z (AR) only, the latter requiring specific operator/crew/aircraft authorisation 🟥 |
| RFF category | **CAT 9** for scheduled flights; baseline H24 provision at **CAT 7**, upgraded for scheduled service 🟧 |
| Control type | **Radar** — Nantes Approche (radar surveillance/vectoring); Nantes CTR is Class D SFC–1,500 ft |
| Elevation class | Sea-level, coastal Loire-estuary field — **not** a performance driver; not independently cross-checked against an obstacle chart this pass 🟧 |
| Special-airport status | 🟥 **Curved runway with no visibility of the opposite threshold from either end**; 🟥 **RWY 21 is RNP-AR-only (no ILS)** — crew-qualification gate; 🟥 **hard curfew 0000–0600 local** under ACNUSA enforcement — see §5/§12 |
| Customs / PoE | **Yes** — random-inspection basis; 2 hr prior notice required before ETA 🟧 |
| K Global Category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LFBD** (Bordeaux-Mérignac), **EGGW** (London Luton), **LFML** (Marseille-Provence) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Low-lying coastal Loire-estuary field, no significant close-in high terrain expected; 🟧 not independently cross-checked against an obstacle/MSA chart this pass. |
| Runway length vs fleet perf | 🟩 | 2,853 m is ample for the Category R (regional/narrowbody) role this field plays in the network; not sized for widebody long-haul ops. |
| Approach availability / minima | 🟥 | RWY 03 has full CAT III ILS; **RWY 21 has no ILS at all** — only RNP Y and RNP Z (AR), the latter Authorization Required. A crew/aircraft/operator without RNP AR approval effectively has one usable runway direction in IMC. |
| Airspace / traffic / control | 🟧 | Class D CTR, Nantes Approche radar with multiple sub-sectors (aux/NA/NB/RS/LU) — moderate-to-busy regional TMA; sits under **Brest ACC (LFRR)**, for which no dedicated K Global FIR brief yet exists — see §3.2. |
| Weather / seasonal hazard | 🟧 | Atlantic/Loire-estuary coastal exposure typical of western France — no field-specific fog/wind statistic found in the primary source this pass; treat as a general regional caution pending a dedicated seasonal study. |
| Curfew / slots / hours | 🟥 | **Hard curfew 0000–0600 local**, Chapter 3 (<13 EPNdB margin) restrictions 2200–0600, ACNUSA enforcement (fines up to €40,000), **and** seasonal slot coordination via **COHOR** (coordinated in summer, facilitated in winter). The single most operationally significant constraint at this field. |
| RFF category vs our types | 🟩 | CAT 9 (scheduled) is adequate for the Category R fleet types operating here. |
| Fuel availability | 🟩 | Fueling confirmed H24. |
| Customs / handling / security | 🟧 | Customs on a random-inspection basis with 2 hr prior notice; mandatory ground handling confirmed but the specific handling agent(s) are not individually named in the source extract. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFRS sits at 90 ft AMSL on the low-lying Loire estuary, 8 km SW of Nantes — a coastal, flat-terrain field with no obviously significant close-in high ground driving arrival, departure or missed-approach paths. This is treated as a non-factor field for terrain. 🟧 That assessment has not been independently cross-checked against a published obstacle or MSA chart this pass — verify the MSA ring on the current chart as routine practice before treating CFIT as fully closed out here.

### 3.2 Airborne conflict / traffic 🟧
Nantes CTR is Class D from the surface to 1,500 ft AMSL, with Nantes Approche providing radar surveillance, vectoring and flight-information/alert services across multiple sectors (aux below FL115, Sector LU above FL115, Sectors NA1-4, an auxiliary sector above FL115, Sectors NB1-5, and Sectors RS1-4) — a sector structure consistent with a moderate-to-busy regional TMA rather than a quiet field. Transition altitude is 5,000 ft (within the Nantes TMA), with the transition level calculated by Nantes Approche.

LFRS is the **western outlier** of this batch of France fields: it sits under **Brest ACC (LFRR)**, not Reims (LFEE), which controls the other three eastern French fields built alongside this one. There is currently **no dedicated K Global FIR brief for Brest (LFRR)** — the general [Europe airspace briefing](../../../../airspace/europe.md) names Brest (LFRR) among the FIRs covering continental France but does not carry Brest-specific sector/procedure detail. 🟧 This is a genuine documentation gap, not a safety-critical unknown — plan against the current AIRAC and standard DSNA radar-control practice until a dedicated Brest brief exists.

### 3.3 Runway excursion 🟥
This is the standout structural threat at LFRS. **The single runway (03/21) is curved, and there is no visibility of the opposite threshold from either end** — a direct situational-awareness and runway-excursion caution that must be briefed on every operation into this field, not treated as a minor curiosity. Compounding this:

- **Longitudinal profile** has six distinct slope sections along the runway's length (roughly −0.7% to +0.8%), with portions of longitudinal slope **exceeding 1.25%** along the runway and **0.8%** in the first/last quarters.
- **Transverse profile** has sections below 1% and others above 1.5%; transverse slopes in the first/last quarter of the runway strip **exceed 2.5%**, and transverse slopes on the first 3 m of the strip **occasionally exceed 5%**.
- **RESA sizing differs by end** — RWY 03 end RESA is 90 × 90 m; RWY 21 end RESA is 190 × 90 m.
- **RWY 21 carries a displaced threshold** (DTHR 83 ft elevation vs. 87 ft threshold elevation), cutting published LDA from the runway's nominal 2,853 m down to **2,591 m**.

None of this is a reason to avoid the field, but it is a real, AIP-published geometry/surface-quality caution set that should shape approach stabilisation discipline, go-around thresholds and landing-distance margin planning — treat it as briefed fact, not softened.

### 3.4 Weather threat 🟧
LFRS is a coastal, Loire-estuary field on the Atlantic-influenced west coast of France. No field-specific fog-frequency, wind-rose or seasonal-hazard statistic was found in the reachable primary-source extract for this build — the general western-France coastal climatology (Atlantic frontal systems, potential for marine fog/low stratus) is a reasonable planning caution but is **not independently sourced for LFRS specifically** this pass. RWY 03's full CAT III ILS infrastructure (vs. RWY 21's RNP-only, no-ILS approach) suggests low-visibility events are a recognised-enough risk here to justify Cat III investment on the preferred runway — treat that infrastructure choice itself as corroborating evidence of a real low-vis threat, even without an independent fog statistic.

### 3.5 Operational considerations 🟥
Three durable constraints dominate planning at this field:

1. **The ACNUSA-enforced noise/curfew regime** (§12) — a **hard 0000–0600 local movement ban** with only two narrow, notification-gated exceptions, Chapter 2 aircraft permanently prohibited, Chapter 3 sub-13-EPNdB-margin aircraft restricted 2200–0600, and administrative fines up to €40,000 for non-compliance. This is the most operationally significant and politically sensitive regime of any France field in this network build and must dominate schedule planning.
2. **RWY 21's RNP-AR-only status** — with no ILS published for that runway end, any crew/aircraft/operator lacking RNP AR authorisation is effectively restricted to RWY 03 in IMC, or to the RNP Y (non-AR) procedure where minima allow. This is a genuine crew-qualification gate, not a paperwork formality (§5).
3. **Seasonal slot coordination via COHOR** — summer seasons are fully slot-coordinated, winter seasons are schedule-facilitated only; schedule integrity has direct network consequences in the coordinated season.

RFF (CAT 9 scheduled) and navaid/approach infrastructure on RWY 03 are first-tier; the open items in §18 are mostly currency/administrative confirmations (handling agent name, exact SID/STAR chart names, takeoff minima table) rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **The runway is curved with no visibility of the opposite threshold from either end** — brief this explicitly; do not assume a straight sightline down the runway. 🟥
- **RWY 21 has no ILS** — only RNP Y and RNP Z (AR); the AR procedure requires specific operator/crew/aircraft authorisation before use. 🟥
- **Hard curfew 0000–0600 local** — no landing or takeoff-from-stand permitted in this window, with only two narrow delay/advance exceptions, each requiring advance Ministerial notification and after-the-fact justification within 2 working days. 🟥
- **Published longitudinal/transverse runway slope figures exceed normal tolerances in multiple sections** — up to 5% transverse slope on the first 3 m of the runway strip in places. 🟥
- **RWY 21 LDA is reduced to 2,591 m** by a displaced threshold — do not plan against the runway's nominal 2,853 m length for that direction. 🟧
- **RWY 21 departures must not turn before LULID** (2.3 NM from NTS VOR / 1.3 NM from NT locator) — a noise-abatement constraint, verify on the current SID chart. 🟧
- **In LVP, TWY B and E are not usable**; when RVR < 150 m only TWY A, R1, R2, C, RC, R3, D, RD, R4, R5, F are usable. 🟧
- **No takeoff is possible from TWY C or D** (except helicopters) on either runway direction. 🟧
- **Aerodrome is prohibited to ULM (microlights) and gliders.** 🟥

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally operator-categorised as a restricted-crew "special airport" in the reachable AIP extract, but the standing crew-briefing items are the **curved-runway/no-opposite-threshold-visibility geometry** and the **RWY 21 no-ILS/RNP-AR-only environment**. 🟥
- **Crew-qualification gate:** 🟥 **RWY 21's RNP Z (AR) procedure requires specific Authorization Required approval** (operator, aircraft and crew) before use — this is not a generic RNP capability, verify current operator RNP AR authorisation status before planning a RWY 21 IMC arrival via that procedure. The RNP Y procedure on RWY 21 does not carry the AR designation but should still be flown only by RNP-current crews. RWY 03 is the ILS CAT III-capable direction and the default IMC option.
- **Operating restrictions / bans:** Chapter 2 aircraft permanently prohibited; Chapter 3 aircraft with cumulative noise margin < 13 EPNdB restricted 2200–0600 (no landing, no departure from stand); hard curfew 0000–0600 (§12); circling (MVL) training to RWY 21 entirely prohibited; aerodrome prohibited to ULM and gliders. 🟥
- **Overflight / entry / permits:** No special state permit required for standard EU/Schengen international operation. 🟩 Seasonal **COHOR** slot coordination applies to scheduling (summer = full coordination, winter = facilitation/recommendation) under EU Regulation 95/93 (as amended) — 🟧 the precise IATA Level numeral was not independently restated in the AIP text itself, only the functional coordinated/facilitated split; treat as broadly consistent with an IATA Level 3 (summer) / Level 2 (winter) regime.
- **Operations notes:** Aerodrome administrator — **Aéroport du Grand Ouest (AGO)**, with an on-field aeronautical operations desk available H24 and phone-contactable. Handling is mandatory via a ground handling company; the specific agent(s) contracted for scheduled service are not individually named in the source extract. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD administration H24; police H24; immigration H24; health services H24 | 🟩 |
| Night / curfew restrictions | **Hard curfew 0000–0600 local** (narrow delay/advance exceptions only); Chapter 3 sub-13-EPNdB restricted 2200–0600; Chapter 2 permanently prohibited — see §12 | 🟥 |
| RFF category | **CAT 9** for scheduled flights; baseline H24 provision CAT 7 | 🟧 |
| Fuel | Fueling H24 | 🟩 |
| PCN | 49 F/C/W/T (runway) | 🟩 |
| Customs | Random-inspection basis; **2 hr prior notice before ETA required** | 🟧 |
| Handling / FBO | **Mandatory** — ground handling company; specific agent name(s) not confirmed in the source extract | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03 | 2,853 × 45 m | Macadam / PCN 49 F/C/W/T | 2,853 m | 2,903 m | 2,853 m | 2,853 m | THR elevation 73 ft. No takeoff from TWY C or D (except helicopters). Intersection departure from TWY B: TORA/TODA/ASDA 2,001/2,051/2,001 m. RESA 90 × 90 m. |
| 21 | 2,853 × 45 m | Macadam / PCN 49 F/C/W/T | 2,853 m | 2,913 m | 2,853 m | **2,591 m** | THR elevation 87 ft, **displaced threshold (DTHR) 83 ft**. No takeoff from TWY C or D (except helicopters); takeoff **is** possible from the DTHR with TORA 2,591 m. Intersection departure from TWY E: TORA/TODA/ASDA 2,343/2,403/2,343 m. RESA 190 × 90 m. |

*Note: RWY 03/21 is a single physical runway system with a curved, non-uniform-slope geometry — see §3.3 for the runway-excursion caution. All distances in metres. Source: SIA France eAIP, AD 2 LFRS, eff. 09 JUL 2026 (retrieved 2026-07-26).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Nantes ATIS | 126.930 | H24 | Also available by phone |
| FIS | Nantes Information | 122.800 (SIV1) · 130.275 (SIV2.1, and SIV4 when outside LFBH/La Rochelle ATS hours) | HO | |
| Approach | Nantes Approche | 119.400 (aux, below FL115, on ATC instruction) · 119.535 (above FL115, Sector LU) · 120.130 (Sectors NA1-4) · 121.215 (aux, above FL115, on ATC instruction) · 124.250 (Sectors NB1-5) · 124.430 (Sectors RS1-4) | HO | Sector-specific — take the assigned frequency; radar surveillance/vectoring/alert service |
| Ground | Nantes Ground | 121.655 | HO | |
| Tower | Nantes Tower | 118.655 | HO | "Nantes Tour"/"Nantes Tower" — Class D CTR SFC–1,500 ft |
| Centre / FIR | Brest ACC (LFRR) | Per current AIRAC | H24 | No dedicated K Global FIR brief exists yet — see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |

*Source: SIA France eAIP, AD 2 LFRS, eff. 09 JUL 2026 (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | NTS | 115.5 (CH102X) | H24 | On-field |
| LOC RWY 03 | NT | 109.9 | H24 | **CAT III** |
| GP RWY 03 | — | 333.8 | H24 | Slope 3.0° |
| DME RWY 03 | — | CH36X | H24 | |

**RWY 21 has no ILS.** Published approaches for RWY 21 are RNP-based only: an **RNP Y** procedure and an **RNP Z (AR)** procedure, the latter requiring Authorization Required approval (operator/crew/aircraft) before use — see §5. 🟥

*Source: SIA France eAIP, AD 2 LFRS, eff. 09 JUL 2026 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft (within the Nantes TMA); transition level calculated by Nantes Approche.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart. 🟧
- **Preferential runway logic:** **RWY 03 is preferred until a 5 kt tailwind component is reached** — a noise-abatement preference, not simply a wind-limit rule (§12).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 03 | ILS (LOC ident NT, CAT III) | Preferred runway; full CAT III infrastructure; arrivals must comply with instrument-approach-chart instructions designed to avoid overflying built-up areas (§12) |
| 21 | RNP Y | Non-precision RNP; must comply with chart instructions to avoid overflying Nantes city centre; mandatory ATC position report required (see current IAC chart) (§12) |
| 21 | RNP Z (AR) | 🟥 **Authorization Required** — operator/crew/aircraft-specific approval needed before use; same noise-avoidance/position-report requirements as RNP Y apply |

- **STARs (names only):** Not published in the reachable source extract — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Trigger conditions/exact RVR figures not published in the reachable extract — verify current chart. 🟧 In LVP, **TWY B and E are not usable**; when RVR < 150 m, only TWY A, R1, R2, C, RC, R3, D, RD, R4, R5, F are usable (§13).
- **Missed approach watch-items:** Not terrain-driven (flat coastal field); the operative concerns are (1) the RWY 21 mandatory ATC position report requirement on approach, and (2) re-sequencing within the Nantes Approche sector structure. Visual approaches must comply with the dedicated "Environment Visual Approach" chart (AD 2 LFRS ENV 01, name only).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Published as RNAV SID structures for RWY 03 and RWY 21; exact individual SID names **not published / verify** in the reachable extract this pass. 🟧
- **RNP / climb-gradient requirements:** RWY 21 departures **must not turn before reaching LULID** (2.3 NM from NTS VOR / 1.3 NM from NT locator) — a noise-abatement constraint designed to avoid overflying Bouaye, La Chevrolière and Pont Saint Martin; verify exact gradient/turn detail on the current SID chart. RWY 03 departures follow SIDs designed to avoid overflying the urbanised areas of Nantes, Rezé and Bouguenais. Takeoff from TWY B is only possible for CAT A/B aircraft.
- **Take-off minima:** Not published / verify — exact figures not confirmed in the reachable extract. 🟧
- **Start-up / push-back:** Stand entry requires marshaller assistance using conventional gestures, or the aircraft must hold on the taxiway centreline and request ATC assistance if no marshaller is present; parking is generally **nose-in**. Cross-bleed/APU start-up notification procedure not detailed in the reachable extract. 🟧
- **ATC slot / CTOT & clearance:** Seasonal **COHOR** coordination — summer seasons fully slot-coordinated, winter seasons schedule-facilitated only (§5). 🟧
- **De-icing:** Provided on-field; season/procedure detail not published in the reachable extract. 🟧

---

## 12. Noise & Environmental

This is the field's defining operational regime and the most politically sensitive of any France field in this network build — it operates under close ACNUSA scrutiny and should be briefed carefully, not softened.

- **Legal basis:** Arrêté (decree) of 23 May 2024, amending the 28 September 2021 ministerial decree on Nantes-Atlantique's operating restrictions, applicable from 1 June 2024, plus a 28 July 2023 decree on APU use during stopovers. Enforcement is by the **French Authority for Airport Noise Control (ACNUSA)** — non-compliance can lead to an administrative fine of **up to €40,000 for a corporate entity** (Transport Code articles L6361-4/L6361-9). 🟥
- **Aircraft-class restrictions:** **Chapter 2 aircraft (ICAO Annex 16) are permanently prohibited.** 🟥 **Chapter 3 aircraft with cumulative noise margin < 13 EPNdB may not land 2200–0600, and may not leave the parking stand for takeoff 2200–0600.** 🟥
- **Hard curfew:** **No aircraft may land or leave the parking stand for takeoff 0000–0600 local**, with only two narrow exceptions: (1) flights scheduled 2100–2330 delayed for reasons beyond the carrier's control, or (2) flights scheduled 0630–0900 brought forward for reasons beyond the carrier's control. 🟥 Any such movement requires the carrier to **notify the Minister of Civil Aviation in advance** that a delay-driven movement may occur in that window (the Minister may object), and the carrier must **subsequently submit justification** for the delay/anticipation to civil aviation services within **2 working days** of the takeoff/landing.
- **Training-flight restrictions:** Circling (MVL) training to RWY 21 is entirely prohibited for environmental reasons. VFR manoeuvrability training on the aerodrome needs prior ATC authorisation. IFR training flights need prior authorisation (72 hr notice) from the SNA Ouest control subdivision by email. Training flights by aircraft under 5.7 t MTOW: prohibited daily 2230–0600, minimum height 1,000 ft AAL. Training flights by aircraft 5.7 t MTOW and above: prohibited Mon–Fri 1200–1400 and 1800–0800, and entirely prohibited Saturdays, Sundays and public holidays; minimum height 1,500 ft AAL.
- **Engine testing:** Maintenance engine runs prohibited 2330–0600.
- **APU use:** Departing flights — limited to 10 minutes before scheduled off-block time on stands equipped with fixed ground power ("moyens de substitution"), or 30 minutes before if the stand is not so equipped. Arriving flights — limited to 10 minutes after arrival at the stand if equipped with ground power, or 20 minutes after arrival if not equipped. Use of the fixed ground-power alternative is **mandatory** except in case of equipment failure or technical incompatibility.
- **Noise-abatement operational procedures:** RWY 03 is the preferred runway until a 5 kt tailwind component is reached. Arrivals on RWY 03 must comply with instrument-approach-chart instructions designed to avoid overflying built-up areas. Arrivals on RWY 21 must comply with chart instructions designed to avoid overflying Nantes city centre **and** carry a mandatory ATC position report (see IAC charts). Visual approaches must comply with the dedicated "Environment Visual Approach" chart (AD 2 LFRS ENV 01, name only). Departures on RWY 03 follow SIDs designed to avoid overflying the urbanised areas of Nantes, Rezé and Bouguenais (takeoff from TWY B only for CAT A/B aircraft). Departures on RWY 21 follow SIDs designed to avoid overflying Bouaye, La Chevrolière and Pont Saint Martin, and must not turn before **LULID** (2.3 NM from NTS VOR / 1.3 NM from NT locator).
- **Reverse thrust:** A moderate/limited use of reverse thrust is recommended whenever operationally possible, particularly at night.
- **Exemptions:** Medical/humanitarian missions, aircraft in a flight-safety or security emergency, aircraft under Transport Code Art. L6100-1 §2, and government flights are exempt from the noise/curfew regime entirely. The APU rules separately do not apply to humanitarian/ambulance flights, flight-safety emergencies, military/state aircraft on public-service duty, or aircraft carrying live animals/plants/perishables/temperature-sensitive medical-cosmetic cargo.
- **Captain's discretion:** A captain may only deviate from the §21.2/21.3 noise rules if judged necessary for flight-safety reasons (and must justify any APU-rule deviation similarly, including for crew/pax/ground-personnel health protection). **Obtaining an engine start-up clearance from ATC does not itself constitute an exemption from these noise measures.**

---

## 13. Ground operations

- **Stands for our types:** Stand entry requires marshaller assistance (conventional gestures) or the aircraft must hold on the taxiway centreline and request ATC assistance if no marshaller is present; parking is generally **nose-in**. **Stand 5A** is reserved for widebody types (A330-200/300, B777-200, B787, A340-200/300) — taxi speed on TWY RC should be kept limited given the final turn onto that stand. **Stand 18A** (for the B757-200) requires an adapted taxi speed and "oversteering" technique for the last turn. 🟧
- **Push-back:** Not detailed in the reachable extract beyond marshaller/ATC-assistance requirements above. 🟧
- **Standard taxi routes:** Preferential runway vacating — **RWY 21 via TWY B**; **RWY 03** should preferentially vacate via **TWY C, D or E** to avoid infringing the localizer critical area.
- **Hot spots / tight taxiways:** 🟥 **TWY RD is limited to aircraft with wingspan < 36 m.** **TWY D and E are limited to aircraft with main-gear outer width (OMGWS) < 9 m.** The **Antonov 124 (AN124)** is subject to specific taxiing restrictions per AIP chart GMC01 (name only); aircraft with **wingspan over 36 m** are subject to taxiing restrictions per AIP chart GMC02 (name only). **A340-200/300** must keep outer engines at idle for the entire taxi phase, both arrival and departure. In LVP, **TWY B and E are not usable**; when RVR < 150 m, only TWY A, R1, R2, C, RC, R3, D, RD, R4, R5, F are usable.
- **Follow-me:** **Mandatory for entry to stand KILO 1 when RVR < 350 m.** Areas **INDIA, JULIETT and NOVEMBER** are reserved for general-aviation parking, prohibited for use at night and when RVR < 350 m; INDIA is for authorised based aircraft only, JULIETT/NOVEMBER are for light single-engine aircraft with wingspan < 12.8 m and are prohibited to helicopters. **Aerodrome is prohibited to ULM and gliders.** 🟥

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Coastal, Loire-estuary field on the Atlantic-influenced west coast of France — temperate oceanic climate typical of the region.
- **Seasonal hazards:** No field-specific fog-frequency, wind-rose or seasonal statistic was found in the reachable primary-source extract this pass. 🟧 Treat general western-France Atlantic coastal exposure (frontal systems, potential marine fog/low stratus) as a planning caution pending a dedicated seasonal study; RWY 03's full CAT III infrastructure is treated as corroborating evidence that low-visibility events are a recognised risk here.
- **Local effects:** No specific local terrain/sea-breeze effect confirmed in the reachable extract beyond the field's low-lying coastal-estuary setting. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (particularly TWY B/E in LVP), navaid U/S (ILS RWY 03 status especially, given RWY 21 has no ILS at all), lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures on RWY 21, current AUP/UUP or RAD constraints in the Brest FIR. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** field, **Category R** in the network — not a base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates [**LFBD**](../lfbd/index.md) (Bordeaux-Mérignac), **EGGW** ([London Luton](../../united-kingdom/eggw/index.md)), and [**LFML**](../lfml/index.md) (Marseille-Provence) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg; note LFML in particular is a considerable distance south, reflecting how few nearby wide-capability alternates exist on this stretch of the French Atlantic coast.
- **Fuel-uplift notes:** Fueling confirmed available H24; specific into-plane supplier not confirmed in the reachable extract. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 2,853 m (RWY 03) / 2,591 m usable LDA (RWY 21) is non-limiting for the Category R fleet types assigned to this destination; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference. This is not a field sized for widebody long-haul operation.

---

## 17. Fleet-specific notes (optional)

- As a **Category R** destination (not a base), LFRS is flown by the network's regional/narrowbody-appropriate types rather than long-haul widebodies — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for the type-by-type RNP AR authorisation status relevant to the RWY 21 RNP Z (AR) procedure (§5/§10). No field-length or field-elevation performance penalty is expected for any Category R type at LFRS; the operative planning considerations are the RWY 21 crew-qualification gate and the curfew/noise regime, not aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation current-year value** — sourced to the 2025-epoch figure (0.7169° E, +0.134°/yr); current-day drift not independently re-derived.
- **RFF CAT 9 vs. baseline CAT 7 upgrade procedure** — the mechanism/notice period for the H24 baseline-to-scheduled upgrade is not detailed in the reachable extract.
- **Handling agent name(s)** — mandatory ground handling confirmed, specific contracted agent(s) not individually named.
- **Exact SID/STAR chart names** — published as "RNAV SID RWY 03/RWY 21" generically; individual chart names not obtained this pass.
- **Take-off minima table** — not published in the reachable extract.
- **LVP RVR trigger figures** — TWY B/E unusability and the RVR < 150 m taxiway-restriction threshold are sourced, but the specific LVP declaration trigger for the field itself is not.
- **De-icing season/procedure detail** — availability confirmed, season/provisioning detail not.
- **Field-specific fog/wind seasonal statistic** — general western-France coastal climatology assumed; no LFRS-specific figure found.
- **Terrain/obstacle cross-check** — CFIT assessment (🟩) is a geographic/general judgement, not independently verified against a published obstacle or MSA chart this pass.
- **COHOR/IATA slot-level exact numeral** — functional coordinated (summer) / facilitated (winter) split is sourced; the precise IATA Level 2/3 numeral is not independently restated in the AIP text itself.
- **VATSIM/network cross-check** — not performed this pass; no VATSIM vACC/division airport SOP was consulted for LFRS in this build.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France (Service de l'Information Aéronautique) eAIP — AD 2 LFRS**, AIRAC cycle eff. 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ (eAIP France portal; AD 2 LFRS section within the current AIRAC package). Primary source for ARP, elevation, magnetic variation, runway geometry/declared distances/PCN, navaids, communications, hours/services, RFF, ground operations and the AD 2 LFRS.21 noise/curfew regime.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
