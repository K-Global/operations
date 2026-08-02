# LFMT — Montpellier-Méditerranée · Airport Briefing

**LFMT / MPL** · Montpellier (Mauguio), Hérault, Occitanie, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP France, AD 2 LFMT) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 43°35'00"N / 003°57'41"E (43.5833, 3.9614) — intersection of RWY 12L/30R centreline and TWY W1 `[SIA AIP AD 2 LFMT 2.2]` |
| Field elevation | **17 ft AMSL** (reference temperature 30.6 °C; geoid undulation 163 ft) |
| Mag variation | **2.2851° E** (epoch 2025, annual change +0.118° E/yr) — apply drift correction for current year 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **12L/30R** 2,600 × 45 m (macadam, PCN 45 F/C/W/T) — main/only IFR-serviced runway · **12R/30L** 1,100 × 30 m (macadam, 4 t/0.9 MPa) — light-aircraft-only secondary runway |
| Preferential runway | Noise-based: **approaches preferred 30R** (until 8 kt tailwind component, day and night — sea-facing); **departures preferred 12L at night** (2100–0700 local summer, until 5 kt tailwind and vis > 1,900 m) — see §12 |
| Longest LDA | 2,600 m (12L and 30R both full length) |
| Approaches | RWY 30R: **ILS/LOC (CAT I)**, RNP, VOR; RWY 12L: **RNP**, VOR (x/y variants) — **no precision approach on 12L** 🟧 |
| RFF category | French SSLIA **Level 7** (0500–2200 local) / **Level 5** (2200–0500 local) — broadly ICAO CAT 7/CAT 5 equivalent; extension to Level 7 possible with 24 hr PN for non-scheduled traffic 🟧 |
| Control type | **Radar** — Montpellier has its **own dedicated approach control** (Montpellier Approach, TMA/CTA Montpellier); Class D CTR (SFC–1,500 ft AMSL) on the field; wider regional en-route FIR authority is **Marseille ACC (LFMM)** — no dedicated Marseille FIR brief exists yet in this library, see [Europe airspace overview](../../../../airspace/europe.md) and §18 |
| Elevation class | Sea-level (17 ft) — **not** hot-and-high; the performance/reliability driver here is the **runway wingspan/gear-width restriction** (see below), not density altitude |
| Special-airport status | 🟥 **RWY 12L/30R — the only usable runway for our fleet — is prohibited to aircraft with wingspan > 36 m or main-gear overall width > 9 m**, without a 3-month prior-notice safety assessment; RWY 12R/30L is banned outright to turbojets/aircraft > 5.7 t. Effectively caps this field at Code C (narrowbody) — see §5 |
| Customs / PoE | **Yes** — 0500–2200 local; outside these hours, 7 hr PN + mandatory GenDec email for non-scheduled flights |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` — consistent with the AIP-confirmed narrowbody-only (Code C) restriction 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LFML, LFMN, LEBL** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Mediterranean coastal plain; no close-in high terrain. Non-factor for arrival/departure/missed-approach paths. |
| Runway length vs fleet perf | 🟥 | Not a **length** issue (2,600 m is ample for any Code C type) — the binding constraint is the AIP-published **wingspan (>36 m) / main-gear-width (>9 m) prohibition** on RWY 12L/30R, which rules out any widebody diversion without a 3-month PN safety assessment. |
| Approach availability / minima | 🟧 | RWY 30R has ILS CAT I + RNP + VOR; RWY 12L has **RNP/VOR only — no precision approach**. LVP use is authorised on 12L/30R, but the field's only CAT I/LVP-capable end is 30R. |
| Airspace / traffic / control | 🟩 | Montpellier operates its **own dedicated approach control** within a Class D CTR; moderate traffic density; not a high-workload TMA. |
| Weather / seasonal hazard | 🟥 | **Tramontane/mistral-family NW wind** and Mediterranean convective storms are the field's defining hazard; a September 2022 landing accident on RWY 12L during a nighttime storm ended in the adjacent lagoon (see §3.3/§3.4/§14). |
| Curfew / slots / hours | 🟧 | **IATA Level 1** (facilitated, not fully coordinated) per the French slot coordinator; no hard night flight ban found in the reachable AIP extract, but AD administration/handling/security/customs hours are modulated to scheduled traffic (0500–2100/2200) rather than H24 — confirm any off-hours PPR requirement. |
| RFF category vs our types | 🟧 | Level 7 (0500–2200) matches ICAO CAT 7 needed for our narrowbody types, but the field **steps down to Level 5 overnight (2200–0500)** unless extended by prior notice — confirm RFF cover for any scheduled movement outside 0500–2200. |
| Fuel availability | 🟧 | Jet A-1 available 0300–2200 with a 30-min PN; outside these hours a night-duty call-out applies (1 hr response, surcharge billed) — plan turnarounds accordingly. |
| Customs / handling / security | 🟧 | Mandatory ground-handling agreement required for any non-based aircraft > 6 t; customs 0500–2200 (not H24); **only one mobile de-icing unit is available field-wide** — a genuine winter throughput constraint. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFMT sits at 17 ft AMSL on the flat Mediterranean coastal plain between Montpellier and the Étang de l'Or lagoon — there is **no close-in high terrain** relevant to arrival, departure, or missed-approach paths. Verify the MSA ring on the current chart as routine practice, but terrain/CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟩
Montpellier runs its **own dedicated approach control** (Montpellier Approach, three published sectors — FA/FB/FE per current AIRAC) inside a Class D CTR (SFC–1,500 ft AMSL) and TMA Montpellier (transition altitude 5,000 ft). Traffic density is moderate — a regional/leisure destination field, not a high-workload hub. The wider en-route authority for southeast France is **Marseille ACC (LFMM)**; see the general [Europe airspace overview](../../../../airspace/europe.md) pending a dedicated Marseille FIR brief (§18).

### 3.3 Runway excursion 🟥
RWY 12R (the secondary runway) carries a **displaced threshold** (THR 12R elevation 7 ft, DTHR 10 ft), reducing its LDA to 1,000 m against a 1,100 m TORA/TODA/ASDA — not operationally relevant to K Global since this runway is banned outright to turbojets and aircraft > 5.7 t (§5, §7). The main runway (12L/30R) carries no displaced threshold and is well within Code C landing-distance requirements. The standing excursion hazard here is **environmental, not geometric**: in September 2022, a nighttime cargo/freighter arrival on RWY 12L overran the runway during a convective storm and came to rest in the **Étang de l'Or lagoon**, roughly 180 m beyond the runway end — occupants evacuated without injury, and the French BEA opened an investigation. RWY 12L has no precision approach and no approach lighting comparable to 30R's CAT I package — brief a stabilised-approach/go-around-early mindset on 12L in marginal weather, and note the lagoon lies immediately off both runway ends.

### 3.4 Weather threat 🟥
The Gulf of Lions coast (Sète–La Grande-Motte, LFMT included) is exposed to the **Tramontane**, a gusty north-westerly wind of the mistral family that can exceed 50 kt in the lowest layer and is treated as a strategic METAR-watch station for anticipating conditions across the Gulf of Lions 🟧 (tier-4 corroboration, not an AIP-published threshold figure). Combined with the standard Mediterranean-coast risk of **late-summer/autumn convective storms** — the direct causal factor in the September 2022 RWY 12L runway-excursion event above — this is the field's defining weather hazard. See §14.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) the **wingspan (>36 m) / main-gear-width (>9 m) prohibition on RWY 12L/30R**, which caps this field at Code C for K Global and rules out any of our widebody types without a 3-month PN safety assessment (§5, §7); (2) RWY 12L carries **no precision approach**, so low-visibility ops effectively concentrate on 30R; (3) **mandatory ground-handling agreement** for any non-based aircraft over 6 t, and a **single mobile de-icing unit field-wide** — a real winter/adverse-weather throughput risk; (4) the **Étang de l'Or lagoon and its Natura 2000 wetland habitat** sit immediately adjacent to the platform, creating both a runway-excursion consequence (§3.3) and an active bird-strike/wildlife-hazard environment (a recognised year-round and migratory bird stopover — see §14).

---

## 4. Cautions & Warnings

- **RWY 12L/30R is prohibited to aircraft with wingspan > 36 m or main-gear width > 9 m** without a 3-month PN safety assessment — verify our assigned type is within limits before dispatch (Fleet Capability Matrix cross-ref, §16/§17).
- **RWY 12R/30L is banned outright** to turbojets, aircraft > 5.7 t, wingspan > 24 m, main-gear width > 6 m, or reference take-off distance > 800 m — not usable by any K Global type under any circumstance.
- **RWY 12L has no precision approach** (RNP/VOR only) — the field's only ILS/CAT I/LVP-capable runway end is 30R.
- **Étang de l'Or lagoon sits immediately off both runway ends** — a September 2022 nighttime storm landing on RWY 12L overran into the lagoon; maintain a strict stabilised-approach and early-go-around discipline in convective/gusty conditions.
- **Tramontane/mistral-family NW wind** can produce strong, gusty crosswind/tailwind components with little warning — check current wind trend against the noise-preferential runway logic (§12) before committing to an approach.
- **Only one mobile de-icing unit exists field-wide** — plan winter turnaround buffer; de-icing is arranged only by prior agreement with the field's contracted ground-handling agency.
- **Active bird-strike/wildlife-hazard environment** — the adjacent Natura 2000 wetland (Étang de l'Or) is a significant migratory and resident bird habitat.
- **Visual illusion caution:** the coastline near LFMT is **not perpendicular to the runway axis** — the AIP specifically flags this as a source of misleading visual approach cues.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport," but the AIP publishes a **hard physical restriction**: RWY 12L/30R is prohibited to aircraft with wingspan > 36 m or main-gear overall width > 9 m, absent a 3-month prior-notice safety-impact assessment by the airport operator. RWY 12R/30L is separately banned to turbojets, aircraft > 5.7 t, wingspan > 24 m, gear width > 6 m, or reference take-off distance > 800 m. **Net effect: this field is Code C (narrowbody) only for K Global purposes.** 🟥
- **Crew-qualification gate:** No special crew-currency requirement identified in reachable sources beyond standard Code C proficiency; confirm current AIRAC for any locally-mandated briefing item. 🟧
- **Operating restrictions / bans:** RWY 12L: take-off prohibited from TWY W1. RWY 12R: take-off prohibited from TWY Q. Circuit/training-flight restrictions apply to non-based aircraft (acoustic-group bans, seasonal weekend slot restrictions on the secondary runway) — not relevant to scheduled K Global service. Aerodrome is closed to ULM/microlights (except based) and gliders except emergency. 🟧
- **Overflight / entry / permits:** Standard Schengen/non-Schengen international arrival; customs available 0500–2200, with 7 hr PN + GenDec required outside these hours for non-scheduled flights. No broader state permit required. 🟩
- **Operations notes:** ANSP/AD administration — **Aéroport Montpellier Méditerranée S.A.** (airport operator); ATS provided by DGAC/SIA-published Montpellier Tower/Approach/FIS positions. Ground handling for any non-based aircraft > 6 t requires a **prior agreement with a contracted handling agency** — mandatory, not optional. Slot facilitation is **IATA Level 1** per the French slot coordinator.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD administration 0500–2100 local, modulated to scheduled commercial flight times | 🟧 |
| Night / curfew restrictions | No hard night-flight ban found in reachable AIP extract; noise-preferential routing shifts departures to RWY 12L 2100–0700 (summer −1 hr); RFF steps down to Level 5 overnight (2200–0500) | 🟧 |
| RFF category | Level 7 (0500–2200) / Level 5 (2200–0500); extension to Level 7 possible with 24 hr PN | 🟧 |
| Fuel | Jet A-1 (CIV-MIL) + 100LL; 0300–2200 with 30-min PN; outside hours, night-duty call-out (1 hr response, surcharge) | 🟧 |
| PCN | RWY 12L/30R: 45 F/C/W/T; RWY 12R/30L: 4 t/0.9 MPa; apron/TWY strengths vary by stand — see §7/§13 | 🟩 |
| Customs | 0500–2200; 7 hr PN + GenDec required outside these hours for non-scheduled flights | 🟧 |
| Handling / FBO | Mandatory prior-agreement handling for non-based aircraft > 6 t — see Dispatch §5 for agency detail | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12L | 2,600 × 45 m | Macadam / 45 F/C/W/T | 2,600 m | 2,600 m | 2,600 m | 2,600 m | THR elev 17 ft; no precision approach; take-off prohibited from TWY W1 |
| 30R | 2,600 × 45 m | Macadam / 45 F/C/W/T | 2,600 m | 2,600 m | 2,600 m | 2,600 m | THR elev 6 ft; **ILS CAT I + RNP + VOR**; LVP-authorised end; yellow-marked runway-end turnaround at THR restricted to wingspan < 36 m/gear < 9 m, unusable at night or RVR < 800 m |
| 12R | 1,100 × 30 m | Macadam / 4 t @ 0.9 MPa | 1,100 m | 1,100 m | 1,100 m | **1,000 m** | THR elev 7 ft, **DTHR 10 ft** (displaced threshold reduces LDA); take-off prohibited from TWY Q; **banned to turbojets/>5.7 t/wingspan>24 m/gear>6 m** — not usable by K Global |
| 30L | 1,100 × 30 m | Macadam / 4 t @ 0.9 MPa | 1,100 m | 1,100 m | 1,100 m | 1,100 m | Same restrictions as 12R apply to this runway pair; no night lighting, no PAPI, no ILS |

*Intersection take-offs (reduced TORA/TODA/ASDA where published): TWY J and TWY Y — 2,200 m; TWY V — 1,500 m; TWY R1 (RWY 12R) — 1,000 m. Reduced runway separation is applied on RWY 30R/12L per national ATC regulation. Source: SIA AIP France, AD 2 LFMT 2.12/2.13, AIRAC cycle 11 JUN 2026 (amendment 05/26, eff. 2026-05-14). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Montpellier | 124.130 MHz | H24 | Tel +33 4 67 13 11 70 |
| Delivery | — | Not separately published | — | Combined with Ground/Tower positions — confirm locally 🟧 |
| Ground | Montpellier Ground | 121.955 MHz | H24 | |
| Tower | Montpellier Tower | 118.200 / 118.775 MHz | H24 | Also serves as VDF/Homer frequency |
| Approach | Montpellier Approach | 120.375 MHz (auxiliary) · 127.280 MHz (sector FB) · 130.855 MHz (sector FA) · 131.055 MHz (sector FE) | H24 | Own dedicated TMA/CTA Montpellier approach control — sector-specific, take the assigned frequency |
| FIS | Montpellier Information | 125.900 MHz (SIV 2/2.1) · 134.375 MHz (SIV 1/1.1/1.2) · 136.625 MHz (SIV 3) | H24 | Flight information service outside controlled sectors |
| Centre / FIR | Marseille ACC (LFMM) | Per current AIRAC | H24 | Regional en-route authority for southeast France; no dedicated FIR brief exists yet in this library — see [Europe airspace overview](../../../../airspace/europe.md) and §18 |

*Source: SIA AIP France, AD 2 LFMT 2.18. VDF/Homer service is also published on 118.200, 118.775, 130.855, 131.055, 134.375 and 136.625 MHz H24.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | FJR | 114.45 MHz (CH 91Y) | H24 | On-field, 314°/868 m from THR 30R; range 80 NM (225°–345°)/60 NM at FL500 |
| NDB | FG | 339 kHz | H24 | 123°/1.7 NM from THR 30R; range 25 NM |
| LOC 30R | FG (I.E.1) | 108.55 MHz | H24 | 303°/266 m from THR 12L; serves ILS CAT I RWY 30R |
| GP 30R | — | 329.75 MHz | H24 | 3.0° slope, RDH 15.2 m (50 ft); 325°/317 m from THR 30R |
| DME 30R | — | CH 22Y | H24 | Co-located with GP; range 25 NM at FL250 |

*Note: the LOC and NDB share the published ident "FG" — as printed in the source AIP. Source: SIA AIP France, AD 2 LFMT 2.19.*

---

## 10. Arrival

- **Transition altitude / level:** TA 5,000 ft (TMA Montpellier); TL determined by Montpellier Approach per current QNH.
- **Speed:** 250 KIAS throughout the TMA (a **local rule stricter than the generic "< FL100"** norm) — confirm on current chart.
- **Preferential runway logic:** Approaches preferred on **RWY 30R** (until an 8 kt tailwind component, day and night) for environmental/sea-facing reasons; RWY 12L approaches must be flown at an angle ≥ the PAPI descent angle (6.4%/3.7°).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 30R | ILS/LOC (Y and Z variants); RNP; VOR | Per current chart | Per current chart | **CAT I precision**, LVP-authorised |
| 12L | RNP; VOR (Y and Z variants) | Per current chart, incl. named IAF **MT502** for the RNP procedure | Per current chart | **No precision approach** — non-precision minima apply |

- **STARs (names only):** A combined RNAV/conventional STAR set serves all runways — pull the current-AIRAC STAR list at planning.
- **LVP:** RWY 12L/30R is authorised for LVP use; RWY 30R is the only CAT I-equipped end (ILS + approach lighting). Exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Not terrain-driven (flat coastal plain). The AIP publishes a specific radio-failure/EAT reference at the holding fix **ESPIG**, with a second-attempt procedure via IAF **MT502** for the RNP RWY 12L approach, and TMA-exit routing via the FJR VOR radials if repeated missed approaches occur — verify the full procedure on the current chart before relying on it.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV departures (initial/"NORD"/"SUD" variants) from RWY 12L; RNAV departure from RWY 30R; a conventional SID also serves RWY 12L/30R. RNAV departures are **preferred and ATC-declared in service** — a crew without the required RNAV capability must announce "Non-RNAV" at start-up request to be assigned a conventional departure.
- **RNP / climb-gradient requirements:** RNAV departure equipment must use a GNSS and/or DME/DME sensor; DME/DME-only systems additionally need an inertial-navigation capability and a pre-line-up position-accuracy check (< 0.17 NM vs. a known reference) to fly the RNAV SIDs. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Push-back is mandatory ("P") at most commercial-class stands (B2–B4, C2, C3, D1/D4–D6, D8); a small number allow autonomous ("A") departure — confirm the assigned stand's departure code with Ground before start (Dispatch §3).
- **ATC slot / CTOT & clearance:** **IATA Level 1** (facilitated, not fully coordinated) — no dedicated CTOT regime confirmed; standard EUROCONTROL Network Manager flow measures may still apply in regional congestion/weather events. 🟧
- **De-icing:** Available by prior agreement with the field's contracted ground-handling agency; **only one mobile de-icing unit exists field-wide** — a genuine throughput constraint in winter operations. Winter snow-plan validity: 1 December–31 March.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Maritime/over-sea routing is preferred for environmental reasons. **Approaches preferred RWY 30R** (until an 8 kt tailwind component) day and night; **departures preferred RWY 12L at night** (2100–0700 local summer −1 hr, until a 5 kt tailwind component and visibility > 1,900 m). Visual approach guidance for RWY 30R specifies maintaining 4,000 ft until the coastline (left-hand traffic via named fixes GIGNA/BALRU) or until 4 NM from FJR (right-hand via SIMAR, with La Grande-Motte overflight not below 2,000 ft) — at night, 4,000 ft is held until the coastline on both sides. Jet departures off RWY 30R maintain take-off power to 1,500 ft AGL then climb thrust (V2+10) to 3,000 ft.
- **Night noise / dB limits:** No published per-movement dB limit found; noise management is via preferential-runway routing, training-flight acoustic-group bans, and a One Stop Shop noise-complaint contact — not a numeric curfew. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Commercial-class stands rated to A321-Neo/737-800 wingspan (~36 m) are the effective ceiling for this field: **B2/B3** (44.50 m length/36 m span, push-back mandatory), **C2/C3** (same class, push-back), **D1/D4–D6/D8** (A321/737-800W class, push-back), **D3/D7** (737-800 class). Stands **D2** and **D9** are geometrically studied for larger critical aircraft (B757/A310 and B747-400 respectively) **but the surrounding movement area is not certified for that traffic** — do not plan a widebody onto either despite the stand's nominal size. 🟧
- **Push-back:** Mandatory ("P") at most commercial stands; a few permit autonomous ("A"/"AD"/"AG" — right/left self-manoeuvre) departure under specific conditions — confirm per stand (§20.5 AIP table).
- **Standard taxi routes:** TWY widths/PCN vary considerably — several taxiways (J, M, T1–T6, V, W1, W2, Y) are restricted to aircraft with undercarriage width < 9 m, consistent with the runway's own wingspan/gear-width ceiling.
- **Hot spots / tight taxiways:** 🟧 No-entry sign at TWY W1, with a documented **absence of "no entry bar" lighting equipment** at that same location — treat as a specific taxi-discipline caution at night/low-vis. Holding-point mandatory-instruction signs and WIG-WAG protection lights are sited at TWY J, T1, T6, V, W1 and Y.
- **Follow-me:** Not confirmed in reachable sources — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean climate — hot, dry summers and mild, wetter winters; the field sits on the coastal plain between Montpellier and the Étang de l'Or lagoon, roughly 7 km from the sea.
- **Seasonal hazards:** **Tramontane** — a gusty north-westerly wind of the mistral family affecting the Gulf of Lions coast (Sète–La Grande-Motte) that can exceed 50 kt in the lowest layer 🟧 (tier-4 corroborated, not an AIP-published numeric threshold) — LFMT's METAR is used regionally as a lead indicator for this wind. **Late-summer/autumn Mediterranean convective storms** are the other defining hazard, directly implicated in a September 2022 nighttime RWY 12L runway-excursion accident into the adjacent lagoon (§3.3/§3.4). No numeric seasonal-frequency statistic was found for either hazard in reachable sources.
- **Local effects:** Coastal/lagoon proximity — the AIP specifically warns that the shoreline near the field is **not perpendicular to the runway axis**, a documented source of visual-approach illusion. The adjacent Étang de l'Or is a Natura 2000-protected wetland (Special Protection Area FR9112017, Special Area of Conservation FR9101408) supporting a significant year-round and migratory bird population — an active wildlife/bird-strike hazard environment.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (in particular the shared VOR FJR — a published contingency permits a visual departure off the secondary runway pair if FJR fails, not relevant to K Global's runway assignment), lighting (esp. the documented TWY W1 no-entry-bar lighting gap), obstacle/crane, RFF level (confirm Level 7 vs. Level 5 for the scheduled movement time), de-icing unit availability/status, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / spoke field — not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates [**LFML**](../lfml/index.md) (Marseille-Provence), [**LFMN**](../lfmn/index.md) (Nice-Côte d'Azur), and [**LEBL**](../../spain/lebl/index.md) (Barcelona) `[VAMSYS mirror 2026-07-26]` — confirm current suitability, runway/RFF adequacy and minima per leg.
- **Fuel-uplift notes:** Jet A-1 (CIV-MIL) available 0300–2200 with a 30-min PN; outside these hours a night-duty call-out applies (1 hr response, surcharge billed). Multiple fuel-card networks accepted; **no defueling capability** at this field. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (2,600 m) is non-limiting for any Code C K Global type. The binding constraint is the **wingspan (>36 m)/gear-width (>9 m) restriction** on the only usable runway — confirm assigned type clearance against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before dispatch; no widebody type should be planned into LFMT without a verified 3-month PN safety-assessment exception. 🟥

---

## 17. Fleet-specific notes (optional)

- LFMT is a **narrowbody (Code C) destination only** for K Global — the runway's AIP-published wingspan/gear-width ceiling rules out any widebody type absent an operator-granted exception (§5, §7, §16). Cross-check the assigned type against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) at planning; there is no field-length or field-elevation performance penalty for any Code C type at this field.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Marseille ACC (LFMM) FIR brief** — does not yet exist in this Operations Manual; this brief cross-refers to the general [Europe airspace overview](../../../../airspace/europe.md) as the closest available reference pending a dedicated build.
- **Magnetic variation** — sourced to a 2025 epoch figure (2.2851° E, +0.118°/yr); current-year value not independently re-derived.
- **Take-off minima** — published per AIP but exact figures not extracted this pass.
- **LVP/CAT I RVR trigger values** — not confirmed from a primary minima table this pass.
- **Delivery frequency** — not separately published in the reachable AIP extract; appears combined with Ground/Tower — confirm locally.
- **CTOT/ATFM specifics for LFMT** — Level 1 slot facilitation confirmed; broader EUROCONTROL flow-measure exposure not independently sourced for this field.
- **Engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability** — none confirmed in reachable sources.
- **VAMSYS aerodrome category "R" — formal definition** — not documented elsewhere in this pack; the AIP-confirmed Code C/narrowbody restriction is consistent with a restricted category but the platform's own definition of "R" has not been independently verified.
- **Tramontane wind — quantified frequency/threshold data** — corroborated only via tier-4 sources (windfinder-type statistics); no AIP-published numeric wind-limit specific to this hazard was found.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP (Service de l'Information Aéronautique), AD 2 LFMT 2.1–2.24**, AIRAC cycle 11 JUN 2026 (amendment 05/26, effective 2026-05-14) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFMT-fr-FR.html (retrieved 2026-07-26). *ARP, elevation, mag variation, runway/declared-distance data, PCN, lighting, navaids, ATS communications, transition altitude, RFF, hours, handling, noise abatement, LVP, local traffic regulations.*
- OurAirports — https://ourairports.com/airports/LFMT/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/LFMT (retrieved 2026-07-26). *Runway/frequency/navaid cross-check.*
- Wikipedia — "Montpellier–Méditerranée Airport" — https://en.wikipedia.org/wiki/Montpellier%E2%80%93M%C3%A9diterran%C3%A9e_Airport (retrieved 2026-07-26). *History, 2011 runway re-designation (magnetic drift), September 2022 runway-excursion accident summary.*
- COHOR (French airport slot coordinator) — "Montpellier – Méditerranée Airport (MPL/LFMT)" — https://www.cohor.org/en/airports/aeroport-de-montpellier-mediterranee-mpl-lfmt/ (retrieved 2026-07-26). *IATA Level 1 slot designation.*
- Aéroport Montpellier Méditerranée — "Pilot information" — https://www.montpellier.aeroport.fr/en/professionals/general-aviation/pilot-information (retrieved 2026-07-26). *Runway data cross-check (operator's own published summary).*
- Aéroport Montpellier Méditerranée — "Sustainable development" — https://www.montpellier.aeroport.fr/en/amm-company/csr/sustainable-development (retrieved 2026-07-26). *Étang de l'Or Natura 2000 wetland/biodiversity and bird-strike-hazard context.*
- Windfinder — wind statistics for Montpellier Airport — https://www.windfinder.com/windstatistics/montpellier_aeroport (retrieved 2026-07-26). *Tier-4 corroboration only — general wind-pattern statistics, not an AIP-published figure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
