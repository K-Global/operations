# EGNX — East Midlands · Airport Briefing

**EGNX / EMA** · Castle Donington, Leicestershire, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the NATS UK eAIP (AD 2 EGNX) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 52°49′52″N 001°19′40″W (52.83111, -1.32778) — midpoint of RWY 09/27; 7 NM SE of Derby `[NATS eAIP AD 2.2]` |
| Field elevation | **306 ft AMSL** (reference temperature 21°C) |
| Mag variation | 0.02°W (2022), annual change 0.20°E — near-zero at the ARP; the two ILS localisers are separately surveyed at ~0.8°E (2027) 🟧 — different survey points/epochs, not a resolved discrepancy |
| Time zone | UTC+0 (GMT) / UTC+1 (BST) |
| Runway(s) | **Single RWY 09/27**, 2,894 × 45 m, asphalt (ungrooved PFC), PCN 87/F/C/W/T |
| Preferential runway | Wind-driven; max 5 kt tailwind accepted in light-wind conditions; **RWY 27 is the field's genuine low-visibility runway** (CAT II/IIIB) and the operational default when fog/mist is a factor — see §3/§10 |
| Longest LDA | **2,764 m (RWY 27)**; RWY 09 LDA **2,714 m** — both reduced from the 2,894 m TORA by displaced thresholds (RWY 09: 180 m: RWY 27: 131 m) |
| Approaches | 🟧/🟩 **Asymmetric by design — the field's defining operational feature:** **RWY 09 — ILS CAT I / Lower-Than-Standard CAT I only** (ident IEMW); **RWY 27 — ILS CAT II/IIIB** (ident IEME, for operators whose minima are CAA-accepted) — see §9/§10 |
| RFF category | **Category A7** (as published) — Category 8 on remission; **Category 9 available by arrangement**, min. 12 h notice via Aerodrome Control Room 🟧 |
| Control type | **Radar** — East Midlands Radar/Director on the field; Class D CTR (two segments, SFC–FL105 and SFC–5,500 ft ALT); no separate FIR-level TMA brief in this library — see §18 |
| Elevation class | Near sea-level (306 ft), flat Trent-valley field — **not** hot-and-high; CFIT is not the operative threat here (see §3.1) |
| Special-airport status | 🟧 **PPR/slot-controlled via Airport Coordination Ltd (ACL)** for all scheduled flights except GA/military; long-wheelbase Code F types (A340-600, A350-1000, A380-800, B777-300) are **strictly PPR** due to taxiway constraints — see §5 |
| Customs / PoE | **Yes** — H24 `[NATS eAIP AD 2.3]` |
| K Global category | **Not set** 🟧 — pending VAMSYS |
| K Global base | **No** |
| Company preferred alternates | [EGBB](../egbb/index.md), [EGCC](../egcc/index.md), and **EGTK** (Oxford/Kidlington — named only, no OM C entry exists in this library; **unlinked pending a future EGTK build**) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **n/a** 🟧 — not set |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Trent-valley field at 306 ft; no close-in high terrain. The only circling-area obstacle of note is a 758 ft AMSL chimney at Ratcliffe-on-Soar (~2.9 NM NE) plus temporary cranes/transporters — verify current obstacle NOTAM. |
| Runway length vs fleet perf | 🟧 | 2,894 m TORA is ample for narrowbody types; displaced thresholds reduce usable LDA to 2,714–2,764 m — check margin for heavy freighter types (747-400/An-124-class equipment cargo-handled here) against OM B performance data. |
| Approach availability / minima | 🟧 | **Asymmetric CAT capability**: RWY 09 CAT I/LTS CAT I only; RWY 27 CAT II/IIIB. A wind-driven runway choice in marginal visibility must respect this — RWY 09 is never a low-vis option. |
| Airspace / traffic / control | 🟧 | Class D CTR, radar service, generally uncongested vs. major hubs — but the field's cargo-hub role concentrates DHL/UPS overnight sort-wave traffic into a busy nighttime bank (see Dispatch §6). |
| Weather / seasonal hazard | 🟧 | Inland Trent-valley location — general UK-climatology risk of autumn/winter radiation fog and mist is plausible (not an EGNX-specific sourced frequency statistic this pass) — the CAT II/IIIB asymmetry exists precisely to manage this risk on one runway end only. |
| Curfew / slots / hours | 🟧 | **No general curfew** — one of the UK's few 24 h no-curfew fields, which is the commercial reason DHL/UPS anchor European hub sort operations here. However **all scheduled flights require prior ACL approval/slot** (GA/military exempt), and non-Chapter-3-compliant jets are banned 2300–0700 (2200–0600) — see §6/§12. |
| RFF category vs our types | 🟧 | Category A7 as published, with Category 9 available **only** by arrangement (12 h notice) — confirm this is pre-arranged if operating heavy freighter equipment. |
| Fuel availability | 🟩 | AVTUR Jet A-1 confirmed H24 both seasons via Air BP and Texaco/Valero; AVGAS 100LL on restricted hours only (not relevant to K Global fleet). |
| Customs / handling / security | 🟩 | Customs, health/sanitation, handling and security all confirmed H24; six named third-party handling agents on field, cargo handling to 747-400/An-124. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EGNX sits at 306 ft AMSL in the flat Trent valley — **no close-in high terrain** is relevant to arrival, departure or missed-approach paths. The only notable circling-area obstacle is a 758 ft AMSL chimney at Ratcliffe-on-Soar (643 ft AGL, ~2.9 NM NE of the ARP), plus a cluster of temporary cranes and container transporters in the circling area (up to ~361 ft AMSL) associated with airport-area construction — verify current obstacle NOTAM before a circling manoeuvre. This is a non-issue field for terrain; CFIT is not the operative threat here — the runway-end approach-capability asymmetry is (§3.5).

### 3.2 Airborne conflict / traffic 🟧
East Midlands sits in a Class D CTR (two vertical segments, SFC–FL105 and SFC–5,500 ft ALT) under **East Midlands Radar/Director**, with a 2.5 NM-radius ATZ (SFC–2,000 ft AAL, published remark — see §18 for a table/AIRAC discrepancy note). Traffic density is modest compared to a major hub, but the field's identity as a 24 h cargo sort-hub for DHL and UPS concentrates a genuine overnight traffic bank into the small hours — expect a busier-than-daytime radar picture around the night sort wave (see Dispatch §6). No dedicated UK FIR brief exists in this library for London FIR (EGTT), which EGNX sits within — cross-ref [Airspace — Europe](../../../../airspace/europe.md) for general enroute/regional context, **but that file's primary scope is continental Europe, not a UK-specific FIR brief** — a genuine library gap, flagged in §18.

### 3.3 Runway excursion 🟧
Single runway, both ends displaced (RWY 09: 180 m; RWY 27: 131 m), reducing usable LDA to 2,714 m (RWY 09) and 2,764 m (RWY 27) against the full 2,894 m paved length. Max accepted tailwind is 5 kt in light-wind conditions — confirm current wind limits on the day. Grass verges alongside taxiways/aprons are noted as weak and liable to waterlogging. Bird activity is a recognised seasonal factor (spring/autumn, on agricultural land under the approaches) with an active Bird Control Unit; expect possible ATC-requested delay to allow dispersal.

### 3.4 Weather threat 🟧
As an inland Trent-valley field, EGNX carries the general UK-climatology risk of autumn/winter radiation fog and mist — this is an informed inference from regional climatology, **not an EGNX-specific sourced frequency statistic** this pass. The direct operational consequence of any low-visibility event is the field's **asymmetric CAT capability**: only RWY 27 carries CAT II/IIIB infrastructure; RWY 09 arrivals are capped at CAT I/LTS CAT I. A fog event with wind favouring RWY 09 is therefore more operationally constraining than the same event with wind favouring RWY 27 — brief this explicitly (§10). Building-induced turbulence and wind-shear are specifically warned for RWY 09 landings in strong southerly winds.

### 3.5 Operational considerations 🟧
Three durable constraints define ops planning here: (1) the **RWY 09/RWY 27 CAT I vs CAT II/IIIB asymmetry** — never plan a low-vis arrival on RWY 09; (2) the **ACL PPR/slot-approval gate** applying to all scheduled flights (GA/military exempt) — schedule integrity depends on a live ACL slot, not merely runway/weather planning; and (3) **strict PPR for long-wheelbase Code F types** (A340-600, A350-1000, A380-800, B777-300) due to taxiway geometry limits (§13) — confirm eligibility before planning any of these types into EGNX. The field's 24 h no-curfew posture (§6/§12) is the standing commercial advantage, not a threat.

---

## 4. Cautions & Warnings

- **RWY 09 is CAT I/LTS CAT I only; RWY 27 is CAT II/IIIB** — never expect low-visibility capability on RWY 09 under any circumstance.
- **Long-wheelbase Code F types (A340-600, A350-1000, A380-800, B777-300) are strictly PPR** due to taxiway limitations — confirm before planning.
- **Building-induced turbulence/wind-shear** warned for RWY 09 landings in strong southerly winds.
- A **pyrotechnic factory ~3 NM north** of the aerodrome tests rockets/flares (up to 150,000 candela) to 1,000 ft AGL, day and night.
- A **model aircraft/small-UAS site** sits within the ATZ (~2.3 NM NE); operations normally stay below 400 ft, exceptionally to 800 ft with ATC approval.
- **Two wind turbines** bearing 230° from the ARP (range 1,076 m, blade-tip 148 ft AGL) — expect a slight increase in turbulence in southerly winds.
- Grass verges alongside taxiways/aprons are weak and liable to waterlogging.
- Bird activity is elevated in spring/autumn on agricultural land under the approaches — expect possible ATC-requested delay.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a restricted "special airport," but the field is **PPR/slot-controlled via Airport Coordination Ltd (ACL)**, acting as agent for the airport. 🟧
- **Crew-qualification gate:** CAT II/IIIB currency required to use RWY 27's low-vis capability; **RWY 09 is capped at CAT I/LTS CAT I** — do not plan or expect a CAT II/III approach on RWY 09 regardless of crew currency. 🟥
- **Operating restrictions / bans:** Jet aircraft failing to meet ICAO Chapter 3 noise certification are **not permitted to land or take off between 2300–0700 (2200–0600)** except by special ATC dispensation — this is the field's only night restriction; it does **not** apply to Chapter-3-compliant modern jets, consistent with the field's 24 h no-curfew cargo-hub role. Long-wheelbase Code F types are strictly PPR (§4). 🟧
- **Overflight / entry / permits:** 🟧 **All scheduled flights except General Aviation and military** require prior approval of the Airport Managing Director **and** prior notification to **Airport Coordination Ltd (ACL)**, who act as the airport's coordination agent. Ad-hoc slot requests: ACL Mon–Fri 0830–1700 (email lonacxh@acl-uk.org / tel +44(0)161-493 1850); outside those hours, Airfield Operations +44(0)1332-852973. OCS account-holders may self-serve via the online coordination portal.
- **Operations notes:** All visiting aircraft must **pre-book a designated handling agent prior to landing** — this is a hard AIP requirement, not merely a recommendation. Planned-diversion filers must have handling/maintenance/recovery arrangements agreed with Airport Management in advance (emergency diversions are unaffected).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (Administration, Customs, Health/Sanitation, Handling, Security, De-icing all H24) | 🟩 |
| Night / curfew restrictions | **No general curfew** — 24 h cargo-hub field; only restriction is a **Chapter-3-noncompliant jet ban 2300–0700 (2200–0600)** | 🟧 |
| RFF category | **Category A7** (Category 8 on remission; Category 9 by arrangement, 12 h notice) | 🟧 |
| Fuel | AVTUR Jet A-1 H24 both seasons (Air BP; Texaco/Valero); AVGAS 100LL 0700/0800–1700/1800 (Donington Aviation) | 🟩 |
| PCN | RWY 09/27: PCN 87/F/C/W/T; aprons/taxiways PCN 32–78 depending on section (concrete/asphalt mix) — see §7 | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Six named agents: Signature Flight Support, Swissport (pax & cargo), Aviation Solutions (cargo only), Donington Aviation (gen/exec + hangarage), Advantage Flight Support (gen/exec), DHL Aviation (own ops; ad-hoc cargo charters via Aviation Solutions) | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 2,894 × 45 m | Asphalt, ungrooved PFC / PCN 87/F/C/W/T | 2,894 m | 3,205 m | 2,924 m | 2,714 m | Threshold displaced 180 m; THR elev 305.9 ft, TDZ 306.3 ft; PAPI (left, 3°, MEHT 55 ft) 347 m from THR |
| 27 | 2,894 × 45 m | Asphalt, ungrooved PFC / PCN 87/F/C/W/T | 2,894 m | 3,353 m | 2,924 m | 2,764 m | Threshold displaced 131 m; THR elev 281.6 ft, TDZ 286.0 ft; PAPI (left, 3°, MEHT 55 ft) 372 m from THR; **CAT II/IIIB runway** |

*Intersection take-offs published from Holding Points H1/M1/S1/W1 (both directions) at reduced TORA/TODA/ASDA — verify exact figures and current holding-point layout on the current AIRAC chart before use. Both runway ends carry 30 m blast strips and 7.5 m shoulders each side (60 m total paved width); RESA 240 × 90 m each end. Runway crossfall restricted to 1.25% along its entire length. Source: NATS eAIP AD 2.12/2.13 (retrieved 2026-07-26). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | East Midlands Information | 122.680 | H24 | |
| Delivery | Not separately published — likely combined with Ground | — | — | 🟧 confirm current chart |
| Ground | East Midlands Ground | 121.905 | H24 | VDF; DOC 3 NM/GND |
| Tower | East Midlands Tower | 124.005 | H24 | DOC 25 NM/4,000 ft |
| Director | East Midlands Director | 120.130 | As directed by ATC | DOC 25 NM/10,000 ft; VDF |
| Approach / Radar | East Midlands Radar | 126.180 (DOC 60 NM/20,000 ft) · 134.180 Lower Airspace Radar Service (DOC 60 NM/20,000 ft) | H24 | |
| Centre / FIR | London FIR (EGTT) — no dedicated UK FIR brief in this library | — | — | See [Airspace — Europe](../../../../airspace/europe.md) for general context only (continental-Europe-scoped, not UK-specific) 🟧 |
| Fire (non-ATS) | East Midlands Fire | 121.600 | When fire vehicle attending an aircraft emergency | Non-ATS channel |

*Source: NATS eAIP AD 2.18 (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC (CAT I) | IEMW | 109.350 | H24 | **RWY 09** — LOC signal performance "I"; mag var 0.84°E (2027) |
| ILS/GP (RWY 09) | IEMW | 331.850 | H24 | 3° glidepath, ref. datum height 56 ft |
| ILS/DME (RWY 09) | IEMW | Ch 30Y / 109.350 | H24 | On field; zero range at THR 09/27 |
| NDB (locator) | EMW | 393.0 kHz | H24 | Range 10 NM; co-located with RWY 09 ILS |
| ILS/LOC (CAT III) | IEME | 109.350 | H24 | **RWY 27** — LOC signal performance "III"; mag var 0.82°E (2027) |
| ILS/GP (RWY 27) | IEME | 331.850 | H24 | 3° glidepath, ref. datum height 54 ft |
| ILS/DME (RWY 27) | IEME | Ch 30Y / 109.350 | H24 | On field; zero range at THR 09/27 |
| NDB (locator) | EME | 353.5 kHz | H24 | Range 20 NM; co-located with RWY 27 ILS |
| VOR/DME | HON | 113.650 / Ch 83Y | H24 | DOC 60 NM/50,000 ft (85–100 NM in stated sectors) |
| VOR/DME | POL | 112.100 / Ch 58X | H24 | DOC 115 NM/50,000 ft; reduced low-level coverage sector 280–335° |
| VOR/DME | DTY | 116.400 / Ch 111X | H24 | RNAV substitution only |
| VOR/DME | TNT | 115.700 / Ch 104X | H24 | RNAV substitution only |

*Both runway ends share the 109.350 LOC frequency (only one end is active at a time on this single-runway field). ILS is unavailable for maintenance Sundays 0900–1300 (0800–1200); other navaids have published monthly maintenance windows — see AD 2.20 for the full schedule. Source: NATS eAIP AD 2.19 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** TA **6,000 ft** (applies uniformly across CTR 1, CTR 2 and the ATZ); TL by QNH — verify current chart. 🟧
- **Speed:** 250 KIAS below FL100, reducing to 250–210 KT during the intermediate approach phase; **continuous descent approach (CDA) technique is required of all turbo-jet/turbo-prop aircraft at all times** — a monitored/logged requirement (airport noise and track-keeping system), not merely advisory.
- **Preferential runway logic:** Wind-driven (max 5 kt tailwind accepted in light wind); **RWY 27 is the default low-visibility runway** given its CAT II/IIIB capability — RWY 09 is never a low-vis option regardless of wind (§3.4).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 09 | ILS (IEMW) | Not confirmed 🟧 | Not confirmed 🟧 | **CAT I / LTS CAT I only** — never CAT II/III |
| 27 | ILS (IEME) | Not confirmed 🟧 | Not confirmed 🟧 | **CAT II/IIIB**, CAA-accepted operators |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** During Low Visibility Procedures on RWY 09, arriving aircraft are limited to **CAT I or LTS CAT I approaches only**; Holding Points S1/S2, W1/W2, M1/M2 and H1/H2 close under LVP; RWY 27 departures route via Holding Point A2 only and landing traffic vacates via G2 only; RWY 09 departures route via G2 only and landing traffic vacates via A2 only. When visibility drops below 350 m, Airfield Operations "lead vehicles" are available on request. 🟧 Exact RVR trigger thresholds not confirmed this pass.
- **Missed approach watch-items:** Not terrain-driven (flat field) — the operative concern is re-sequencing within the Class D CTR under East Midlands Radar; a RWY 27 go-around must not commence any turn until past the runway end and must avoid overflying Castle Donington (sector 360°–065° magnetic, 0.65 NM radius from the localizer).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify current chart for RNP/gradient requirements per SID. 🟧 See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact RVR figures not confirmed this pass. 🟧
- **Start-up / push-back:** Push-back is mandatory except from self-manoeuvring stands **21, 23, 24 and 70R**; **powerback manoeuvres are not permitted**. Designated Tug Release Points (TRPs) apply where installed.
- **ATC slot / CTOT & clearance:** All scheduled flights (except GA/military) require prior **ACL** approval/notification (§5); formal IATA coordination-level classification (1/2/3) not found in the reachable AIP text this pass — the PPR/slot mechanism itself is confirmed. 🟧
- **De-icing:** **Available H24**, by arrangement with handling agents (mechanical and chemical clearing equipment). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Aircraft should avoid overflying **Diseworth** (south of the field) and **Castle Donington** (north). A local noise-abatement climb profile applies to FL100 (or the manufacturer's recommended procedure) — **verify the exact current profile on the AIP/chart, do not rely on a transcription here.** Distinct runway-specific turn restrictions are published: **RWY 27** — turbojet/turbofan departures must reach 1,500 ft and pass the runway end before any turn, and a RWY 27 go-around may not turn before the runway end; **RWY 09** — turbojet/turbofan/aircraft >17,000 kg track 096° magnetic to 1.5 NM (northbound) or 2.0 NM (southbound) before turning, as cleared. Overnight (2200–0700 local / 2100–0600), **RWY 27 departures normally use the Whiskey intersection** (2,463 m available from abeam Whiskey); full-length departure is available on request for performance/ATC reasons only.
- **Night noise / dB limits:** No published per-movement dB limit found; the operative night restriction is the Chapter-3-noncompliant jet ban 2300–0700 (§6). Visual circuits by large/turbojet/turbofan aircraft must be flown at ≥2,000 ft QNH; final turn onto RWY 27 approach must avoid overflying Kegworth.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Reverse thrust/reverse pitch above idle power is to be **avoided** between 2200–0700 (2100–0600), consistent with safe operation.

---

## 13. Ground operations

- **Stands for our types:** Self-manoeuvring stands are **21, 23, 24 and 70R**; all others are nose-in/push-back configuration. Stands 20 (B767-300W) and 24 (B757-200W) require towing on/off via Taxiway Q. Widebody-freighter-specific stand/apron assignment for DHL/UPS operations is not detailed in the public AIP — confirm with handling. 🟧
- **Push-back:** Mandatory except from self-manoeuvring stands; **no powerback**.
- **Standard taxi routes:** RWY 27 departures normally use **Taxiway S**; landing traffic on RWY 27 must not plan to vacate via Taxiway S without first requesting ATC permission (it is the normal departure route).
- **Hot spots / tight taxiways:** 🟥 Runway intersections **M and S are closed to aircraft larger than Code C** (max span 36 m). Taxiway J (Code E, off Taxiway A onto the West Apron) narrows to a Code D taxilane south of its junction with Taxiway B. Delta taxilane widens to a bespoke 68.4 m max wingspan between D and V holding points; **Taxiway V is bespoke-limited to 68.4 m span / 76.25 m length** (B747-8 reference case). Taxiway C is restricted to Code C. Long wheelbase Code E/F aircraft must use caution entering/exiting the runway at all exits due to pavement-width constraints. The **Maintenance Area and Taxiway M south of M3 are not controlled by ATC** — expect uncontrolled vehicle/aircraft movement.
- **Follow-me:** "Lead vehicles" available on request when visibility drops below 350 m.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate inland England, Trent valley; no dominant single prevailing-wind statistic sourced this pass — plan runway choice per live wind.
- **Seasonal hazards:** General UK-inland climatology suggests an autumn/winter radiation-fog/mist risk 🟧 (not an EGNX-specific sourced frequency figure); the CAT II/IIIB vs CAT I runway-end asymmetry (§3.4/§9) is the field's standing mitigation, but only on RWY 27. Grass cutting for bird control occurs April–October within the runway strip, with possible restriction to light-aircraft circuit flying during cutting. Bird concentrations are elevated in spring/autumn on agricultural land under the approaches.
- **Local effects:** Building-induced turbulence/wind-shear specifically warned for RWY 09 in strong southerly winds; slight turbulence increase possible near the wind turbines (230°/1,076 m from ARP) in southerly wind.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (note the published monthly maintenance windows for ILS/DME/NDBs, AD 2.20), lighting, obstacle/crane status (circling-area cranes are dynamic — see §3.1), RFF category/downgrade, GPS/RAIM, current ACL slot status. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / cargo-freight hub** — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates [**EGBB**](../egbb/index.md) (Birmingham) and [**EGCC**](../egcc/index.md) (Manchester), plus **EGTK** (Oxford/Kidlington — named only, no OM C entry exists in this library, unlinked pending a future EGTK build) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1 confirmed H24 both seasons via Air BP and Texaco/Valero. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Usable LDA (2,714–2,764 m) is non-limiting for narrowbody types but check margin for any heavy freighter/widebody type against actual landing weight — cargo handling is confirmed to 747-400/An-124 scale. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- EGNX's role in the network is cargo-freight destination, not passenger base — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference. The single-runway, displaced-threshold geometry (§7) and the RWY 09/27 CAT-capability asymmetry (§9/§10) are the two considerations most likely to matter for any heavy freighter-class type; there is no crosswind-runway alternative on this field, so type-specific crosswind/tailwind limits apply directly to the single 09/27 orientation.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ATZ upper limit** — the sourced table shows a tracked amendment between 2,000 ft AGL (per the published remark) and 2,306 ft ALT; not resolved from the reachable extract — verify current AIRAC.
- **RFF category** — sourced verbatim as "Category A7"; the "A" prefix is not a standard ICAO category notation and is not independently confirmed against a second source — verify current designation. Category 9 by arrangement (12 h notice) should be confirmed as pre-arranged for any heavy freighter operation.
- **Magnetic variation** — an apparent difference between the AD 2.2 general ARP value (0.02°W, 2022) and the ILS-referenced values (~0.8°E, 2027) reflects different survey points/epochs and has not been cross-verified as consistent.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima (exact RVR figures)** — not obtained in this research pass.
- **Coordination level (IATA Level 1/2/3 classification)** — not found in the reachable AIP text; the ACL PPR/slot-approval mechanism itself is confirmed, the formal level is not.
- **Seasonal fog/mist frequency at EGNX specifically** — inferred from general inland-UK climatology, not an EGNX-specific sourced statistic.
- **Clearance Delivery frequency** — no distinct "Delivery" service found in the AD 2.18 communications table; likely combined with Ground (121.905) — not independently confirmed.
- **VATSIM cross-check** — not performed this pass; pending a vACC/division EGNX SOP lookup.
- **London FIR (EGTT)** — no dedicated OM C UK FIR brief exists in this library; §3.2/§8 link to [Airspace — Europe](../../../../airspace/europe.md) for general context only — that file's primary scope is continental Europe, not UK-specific. This is a library gap, not resolved by this build.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **NATS UK eAIP — AD 2 EGNX (East Midlands)**, AIRAC cycle 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGNX-en-GB.html (retrieved 2026-07-26). *ARP/elevation/mag var, runway physical characteristics, declared distances, RFF, ATS airspace, communications, navaids, local aerodrome regulations (CAT II/IIIb, PPR/ACL, ground movement), noise abatement procedures.*
- Wikipedia — "East Midlands Airport" — https://en.wikipedia.org/wiki/East_Midlands_Airport (retrieved 2026-07-26). *Ownership (Manchester Airports Group), DHL/UPS hub status, passenger/movement statistics.*
- Simple Flying — "Why Is East Midlands Airport Such A Significant Cargo Hub?" (Jake Hardiman, upd. 2024-06-16) — https://simpleflying.com/east-midlands-airport-cargo/ (retrieved 2026-07-26). *Cargo tonnage, 24/7 no-slot-restriction cargo operation, DHL/UPS/FedEx/Royal Mail hub status, UPS £138m hub investment.*
- Manchester Airports Group — East Midlands cargo services — https://www.magairports.com/about-us/cargo-services/east-midlands-airport-cargo/ (retrieved 2026-07-26). *"UK's busiest pure cargo airport," 24/7 cargo logistics operation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
