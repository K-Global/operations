# LPPR — Francisco Sá Carneiro · Airport Briefing

**LPPR / OPO** · Porto, Portugal · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Portugal-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the NAV Portugal eAIP (AIP Portugal, AD 2 LPPR) plus public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 41°14′08″N / 008°40′41″W (41.2356, -8.6781) `[AIP Portugal AD 2 LPPR 1.1]` — at the RWY × TWY "H" intersection, 11 KM (6 NM) BRG 322° from Porto Centre (Clérigos Tower) |
| Field elevation | **227 ft / 69 m AMSL** (reference temperature 21°C, August); geoid undulation 55 m |
| Mag variation | **2° W (2020)**, 0.18°/yr decreasing — 🟧 current-day value not re-confirmed against current AIRAC |
| Time zone | **UTC+0 (WET) / UTC+1 (WEST, EU DST)** — same as LPPT; one hour behind Spain/Central Europe |
| Runway(s) | **17/35** — single runway, 3,480 × 45 m, asphalt (PCN 80/F/C/W/T) |
| Preferential runway | Wind-dependent between 17- and 35-configurations |
| Longest LDA | 3,330 m (RWY 35) / 3,180 m (RWY 17) — both thresholds carry significant permanent displacement, see §7 |
| Approaches | 🟧 **ILS RWY 17 is CAT II (not CAT III)** per the current AIP navaid table — this corrects an assumption commonly repeated elsewhere; **RWY 35 has no published ILS in the reachable AIP text** — its precision capability is CAT I-lighting-equipped and served by DVOR/RNP approaches per the chart index, not a tabulated ILS ident/frequency |
| RFF category | **CAT 8** 🟩 |
| Control type | **Radar** — Porto Approach/Tower on the field; **Lisboa ACC (LPPC)** en route — no dedicated FIR brief in this library, see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (227 ft) — **not** hot-and-high; the defining constraints here are **terrain/obstacles to the east** and **wildlife (bird) activity**, not density altitude |
| Special-airport status | 🟧 Not operator-categorised as restricted in reachable sources; standing crew-briefing items are the **corrected CAT II (not III) ILS on RWY 17**, the **east-side obstacle/terrain profile**, and **daily bird activity** — see §3/§5 |
| Customs / PoE | **Yes** — H24 `[AIP Portugal AD 2 LPPR 2.3]` 🟩 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LPPT, LPVZ** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Not a flat-field non-issue like LPPT — a published obstacle field exists to the east/northeast of the runway, including towers up to 137 m elevation and trees up to 196 m elevation (the field's single highest charted obstacle), plus a "natural highpoint" close to the field. See §3.1. |
| Runway length vs fleet perf | 🟩 | 3,480 m physical length is ample for any K Global type; both thresholds carry substantial permanent displacement (300 m RWY 17, 150 m RWY 35) that reduces usable LDA — a real but non-limiting planning input. |
| Approach availability / minima | 🟧 | **RWY 17 ILS is CAT II** (AIP-confirmed) — a materially lower-vis capability than the CAT III commonly assumed for this field. RWY 35 has no confirmed ILS in the reachable text — approach options there are DVOR/RNP-based. |
| Airborne conflict / traffic | 🟩 | Single-runway regional/international field; traffic density well below LPPT. |
| Weather / seasonal hazard | 🟧 | Atlantic-coastal exposure similar to LPPT; low-visibility procedures exist (LVTO down to RVR 125 m on RWY 17) implying the field does see genuine low-vis events. |
| Curfew / slots / hours | 🟥 | Hard **night curfew 00:00–06:00** with noise-class-tiered exceptions and a movement cap — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 8 — adequate for K Global's typical operation into this field. |
| Fuel availability | 🟩 | Jet A-1, confirmed hydrant system; fuelling hours are time-windowed (see §6), not unconditional H24. |
| Customs / handling / security | 🟩 | Customs/immigration and security confirmed H24; handling hours are windowed with on-request coverage outside the window — see §6. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
Unlike LPPT's flat coastal-plain siting, LPPR's AIP obstacle table lists a genuine cluster of charted obstacles concentrated to the **east/northeast** of the field: towers up to **137 m elevation** (101 m height, "Red and White Stripes and Fixed Red Light"), a tree at **196 m elevation** — the single highest charted obstacle at this field — and a "natural highpoint" close to the aerodrome (63 m elevation). Several trees and towers cluster near the RWY 17 and RWY 35 approach/departure lines within roughly the first ~1–2 km of each threshold. This is not a CFIT-significant terrain profile in the sense of close-in high ground dominating the approach, but it is materially different from LPPT and warrants a normal MSA/obstacle-chart cross-check rather than a "flat field, no issue" assumption.

### 3.2 Airborne conflict / traffic 🟩
LPPR is a single-runway regional/international gateway with meaningfully lower traffic density than LPPT — no capacity-ceiling or PMS-style sequencing pressure is evident in the reachable AIP text. Standard radar-controlled operation under Porto Approach/Tower.

### 3.3 Runway excursion 🟧
Both runway ends carry substantial permanent threshold displacement — **RWY 17 displaced 300 m** (LDA 3,180 m) and **RWY 35 displaced 150 m** (LDA 3,330 m) — reducing usable landing distance from the 3,480 m physical length. Neither is limiting for K Global types at typical landing weights, but do not assume full-length distance on either end. **TWY A3 is not available for Code E aircraft** — a real ground-movement constraint for our larger types, not merely a caution.

### 3.4 Weather threat 🟧
Porto shares the general Atlantic-coastal exposure of the Portuguese mainland (frontal passages, shifting wind). The AIP publishes a genuine **Low Visibility Take-Off Procedure for RWY 17 down to RVR 125 m** and an LVP trigger (TDZ RVR ≤550 m or cloud base ≤200 ft) — meaning the field does see operationally real low-visibility events, not merely a formality. Plan CAT II currency and low-vis taxi/LVTO procedure familiarity accordingly.

### 3.5 Operational considerations 🟧
Three durable planning items: (1) the **corrected ILS category on RWY 17 — CAT II, not the commonly assumed CAT III** — confirm crew/aircraft currency matches the actual published capability; (2) **daily bird activity**, specifically gulls (*Larus* spp.) crossing the field east–west at dawn/dusk, mitigated by gas-cannon and scarecrow devices along the runway strip; and (3) **TWY A3 is not available for Code E aircraft**, a real ground-routing constraint for our larger types on this single-runway field.

---

## 4. Cautions & Warnings

- 🟧 **RWY 17's ILS is CAT II, not CAT III** — verify current crew/aircraft minima against the actual published category before planning a low-vis arrival; do not assume CAT III capability at this field.
- **RWY 35 has no confirmed ILS in the reachable AIP text** — approach options there are DVOR/RNP-based per the current chart index; verify on the current AIRAC.
- **Both thresholds carry substantial permanent displacement** (RWY 17: 300 m: RWY 35: 150 m) — verify usable LDA before any performance-limited landing planning.
- **TWY A3 is not available for Code E aircraft** — plan ground routing accordingly for our larger types.
- **Daily bird activity (gulls) crossing the field east–west** at dawn/dusk — gas-cannon/scarecrow mitigation is in place but maintain a heightened visual scan during those windows.
- **Charted obstacle cluster to the east/northeast** (towers to 137 m elevation, a tree at 196 m elevation) — cross-check the current obstacle/MSA chart rather than assuming a flat-field profile.
- **Hard night curfew 00:00–06:00** with noise-class-tiered exceptions (§12).
- **Grass-cutting operations Tue–Sat 00:00–05:00** along the runway strip, under Tower control — a routine but real ground-activity NOTAM-adjacent item.
- Mag variation is sourced to the 2020 AIP epoch — treat the exact current value as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **corrected CAT II ILS on RWY 17** and the **east-side obstacle profile**. 🟧
- **Crew-qualification gate:** CAT II currency required to exploit RWY 17's full published low-visibility capability (not CAT III); confirm crew/aircraft currency matches this before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Hard night curfew 00:00–06:00 (§6/§12); **TWY A3 not available for Code E aircraft**; Reduced Engine Taxi prohibited at holding points for line-up or runway crossing; no RNP AR restriction found in reachable sources. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; **Aerodrome Slot mandatory for all flights** per the AIP (referencing GEN 1.2) 🟥 — confirm slot status before planning.
- **Operations notes:** ANSP/airport operator — **ANA Aeroportos de Portugal, SA**; continuous two-way radio communication required (Class C airspace); Mode-S multilateration surface-surveillance system in use; push-back is nose-in-stand-only and reverse thrust for stand manoeuvring is **not permitted**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (through Airport Duty Manager) | 🟩 |
| Night / curfew restrictions | **Landing/takeoff forbidden by law 00:00–06:00**, exception regime capped at **11/day, 70/week, 2,100/year**; Level 16 aircraft barred 00:00–06:00 entirely; Levels 4 and 8 barred 02:00–05:00 | 🟥 |
| RFF category | CAT 8 | 🟩 |
| Fuel | Jet A-1, hydrant system; fuelling **05:00–23:00 scheduled, 23:00–05:00 on request** — not unconditional H24 | 🟧 |
| PCN | Runway PCN 80/F/C/W/T; apron/taxiway PCNs vary 71–200 by area — see §13 | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | **05:00–01:00 scheduled, 01:00–05:00 on request**; agents reported publicly include Omni-Handling and Jetbase 🟧 (tier-4, not AIP-confirmed for our operation) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 17 | 3,480 × 45 m | Asphalt / PCN 80/F/C/W/T | 3,480 m | 3,480 m | 3,480 m | 3,180 m | THR permanently displaced 300 m; slope 0.8% |
| 17 (from TWY E5) | — | — | 2,726 m | 2,726 m | 2,726 m | — | Intersection take-off |
| 17 (from TWY G) | — | — | 2,650 m | 2,650 m | 2,650 m | — | Intersection take-off |
| 17 (from TWY A3) | — | — | 1,800 m | 1,800 m | 1,800 m | — | Intersection take-off — 🟧 TWY A3 not available for Code E aircraft |
| 35 | 3,480 × 45 m | Asphalt / PCN 80/F/C/W/T | 3,480 m | 3,480 m | 3,480 m | 3,330 m | THR permanently displaced 150 m; slope 0.2% |
| 35 (from TWY C) | — | — | 3,120 m | 3,120 m | 3,120 m | — | Intersection take-off |
| 35 (from TWY D) | — | — | 2,780 m | 2,780 m | 2,780 m | — | Intersection take-off |
| 35 (from TWY H) | — | — | 3,120 m | 3,120 m | 3,120 m | — | Intersection take-off |
| 35 (from TWY J) | — | — | 2,950 m | 2,950 m | 2,950 m | — | Intersection take-off |

*Strip 3,600 × 300 m; RESA 90 × 90 m; OFZ established; FCT CLBR 0.86. Source: AIP Portugal, AD 2 LPPR 2.12/2.13, eff. 14 May 2026. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Porto Information | 124.305 (arrivals) / 121.680 (departures) | H24 | ACARS-capable |
| Delivery | Porto Delivery | 118.930 / 118.855 | Broadcast by ATIS | |
| Ground | Porto Ground | 121.040 / 118.855 | Broadcast by ATIS | |
| Tower | Porto Tower | 118.005 / 118.855 | H24 | |
| Approach | Porto Approach | 120.910 / 127.155 | HO | |
| Approach (Control/Information) | Porto Control / Porto Information | 120.430 / 127.155 · 118.855 | HO | Sector-specific — take assigned frequency |
| Centre / FIR | Lisboa ACC (LPPC) | Per current AIRAC | H24 | See [Europe airspace briefing](../../../../airspace/europe.md) — no dedicated FIR brief exists in this library 🟧 |

*Source: AIP Portugal, AD 2 LPPR 2.17/2.18, eff. 14 May 2026. "HO" hours not spelled out numerically in the reachable extract — treat as 🟧 pending live cross-check. Emergency 121.500; UHF 243.000/277.800.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | PRT | 114.100 / CH88X | H24 | On field; coverage 200 NM FL500 (225°/315° radials), 80 NM FL500 (315°/225°) |
| ILS RWY 17 | PR (LOC) | 109.900 | H24 | 🟧 **CAT II/T/4** — corrects a commonly assumed CAT III; GP/DME 333.800/CH36X; OM 75 MHz at 5.35 NM from THR |
| RWY 35 | — | — | — | 🟧 No ILS ident/frequency found in reachable AIP text; served by DVOR/RNP approaches per the chart index (AD 2.23) — Precision Approach CAT I lighting is installed, implying a precision capability exists but was not captured in this extract's navaid table |

*Source: AIP Portugal, AD 2 LPPR 2.18/2.19, eff. 14 May 2026.*

---

## 10. Arrival

- **Transition altitude / level:** TA **4,000 ft**; TL by QNH — not published as a fixed value in the reachable AIP text, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm).
- **Preferential runway logic:** Wind-dependent between 17- and 35-configurations.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 17 | ILS (PR), RNP Y, RNP Z (LPV only) | Per current chart | — | 🟧 **CAT II** (corrected from a commonly assumed CAT III) |
| 35 | DVOR, RNP | Per current chart | — | 🟧 No ILS confirmed; DVOR/RNP-based per chart index |

- **STARs (names only):** RNAV STARs — RWY 17 (ABLEG3M/T, ASPOR3T, ELGIX3T, ASMOV3M, MALIS5T, PESUL4T, UBANI3M); RWY 35 (ABLEG6C, ASMOV3A, ASPOR6A/C, INKIT6C, MALIS5C, PESUL6C, UBANI3A). No conventional STARs published. Verify current-AIRAC names.
- **LVP:** Trigger — TDZ RVR ≤550 m or cloud base ≤200 ft. CAT I/II decision criteria: visibility <2,500 m and/or cloud base <400 ft triggers ATC instruction for ILS approaches to RWY 17.
- **Missed approach watch-items:** The charted obstacle cluster to the east/northeast (§3.1) is the field's one genuine terrain-adjacent consideration on a go-around — verify the published climb-gradient/turn on the current chart rather than assuming a flat-field profile.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Conventional — RWY 17 **MANIK6S**; RWY 35 **TURON6N**. RNAV — RWY 17 (ASMOV2R, BELDU9L, MANIK2R, PESUL9L, TURON9L, TURON9R, UBANI2R); RWY 35 (ASMOV2W, BELDU9E, PESUL9E, MANIK2E, MANIK2W, TURON9E, UBANI2W). Verify current-AIRAC names.
- **RNP / climb-gradient requirements:** Not individually confirmed for a specific SID this pass — verify on current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** **Low Visibility Take-Off Procedure — RWY 17, RVR at or above 125 m and below 400 m.** RVR assessed at TDZ (position A), mid-point (B) and stop-end (C); ATC always gives RVR-A, and gives B/C only if lower than A and below 550 m, or below 350 m, or on request.
- **Start-up / push-back:** Push-back is **nose-in-stand-only**; reverse thrust for stand manoeuvring is **not permitted**; contiguous stands cannot move simultaneously. Contact Porto Tower/Delivery 10 minutes before start-up.
- **ATC slot / CTOT & clearance:** **Aerodrome Slot is mandatory for all flights** (AIP, referencing GEN 1.2) 🟥 — confirm slot status before planning; EUROCONTROL ATFM/CTOT is a reasonable expectation, not independently LPPR-sourced.
- **De-icing:** **Not available** — consistent with the mild Atlantic-coastal climate.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No specific NADP1/2 named in reachable sources; general compliance with ICAO PANS-OPS Volume I and the Portuguese AIP is referenced. 🟧
- **Night noise / dB limits:** Noise classes by EPNdB — Level 0 (<87), 0.5 (87–89.9), 1 (90–92.9), 2 (93–95.9), 4 (96–98.9), 8 (99–101.9), 16 (>101.9). **Level 16 cannot be scheduled 00:00–06:00**; **Levels 4 and 8 cannot be scheduled 02:00–05:00**.
- **Engine run-up restrictions:** Idle power only on stands; above-idle testing only in a designated location, permitted 06:00–24:00 (05:00–23:00) with prior authorisation.
- **Reverse thrust / idle-reverse policy:** **Reverse thrust forbidden immediately after night landings**; reverse thrust for stand manoeuvring is not permitted at any time.

---

## 13. Ground operations

- **Stands for our types:** Apron S holds ~40 named stands (S08–S73 range); Apron T holds T01–T04; individual critical-aircraft-type notes range up to **A380 at stand S72** and **B77L at S42**, implying genuine Code E/F capability exists, though no single code-letter summary table was found. 🟧
- **Push-back:** **Nose-in-stand-only**; reverse thrust for stand manoeuvring **not permitted**; contiguous stands cannot move simultaneously.
- **Standard taxi routes:** Confirm with Ground/Apron on the day; stop bars exist at all CAT II/III holding positions (TWY S2, S4, E1, E2, E3, E4, RET F1).
- **Hot spots / tight taxiways:** 🟧 **TWY A3 is not available for Code E aircraft.** Areas not visible from the Tower: first 1,500 m of RWY 17 and last 1,500 m of RWY 35; right base leg RWY 35; stands S08–S12, S30–S35; Apron taxiways S1/S3.
- **Follow-me:** Availability not confirmed in reachable source. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Atlantic-coastal climate similar to LPPT; prevailing wind and frontal-passage exposure typical of northern Portugal.
- **Seasonal hazards:** Genuine low-visibility events occur — the AIP's published LVTO procedure (RVR down to 125 m) and LVP trigger (TDZ RVR ≤550 m) are not formalities. Standard Atlantic frontal-passage wind/rain exposure through autumn–winter.
- **Local effects:** **Daily bird activity** — flocks, notably gulls (*Larus* spp.), cross the field east–west morning/evening; gas-cannon and scarecrow devices are deployed along the runway strip for mitigation, with an additional portable unit available.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (including scheduled Tue–Sat grass-cutting activity, §22), navaid U/S, ILS category status, lighting, obstacle/crane, RFF downgrade, current ATFM/CTOT status, GPS/RAIM for RNP procedures, bird-activity NOTAMs. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — **not** a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**LPPT**](../lppt/index.md) (Lisbon) and **LPVZ** (Viseu — no brief exists in this library; plan-time reference only) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1, hydrant system (4 refuellers @ 18,000 L, 2 bowsers @ 43,000 L, 7 dispensers); fuelling hours are windowed **05:00–23:00 scheduled, 23:00–05:00 on request** — confirm against a late/early rotation. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting for any K Global type on the 3,480 m runway; no field-elevation performance penalty. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty for any K Global type at LPPR. The one type-relevant consideration is **TWY A3 not being available for Code E aircraft** — confirm ground-routing plan accounts for this on arrival/departure. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RWY 35 ILS ident/frequency** — no entry found in the reachable navaid table despite a "Precision Approach CAT I Lighting system" being installed; verify current-AIRAC approach chart for the actual navigation aid served.
- **RWY 17 ILS category — CAT II confirmed in this pass**, correcting a commonly assumed CAT III; re-verify against the current AIRAC before relying on it operationally.
- **Transition level** — not published as a fixed value; only TA (4,000 ft) confirmed.
- **Stand-by-code-letter map and push-back-policy detail** beyond the general nose-in/no-reverse rule.
- **Handling agent(s) for our operation and confirmed turnaround times** — publicly reported names (Omni-Handling, Jetbase) are tier-4, not individually confirmed.
- **ATC frequency "HO" hours** — not spelled out numerically in the reachable extract.
- **Mag variation current-day value** — sourced to the 2020 AIP epoch.
- **MSA table** — not tabulated in this AD 2 chapter; would appear on the individual approach charts.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Portugal (NAV Portugal eAIP), AD 2 LPPR**, valid from 14 May 2026 — https://ais.nav.pt/wp-content/uploads/AIS_Files/eAIP_Current/eAIP_Online/eAIP/html/eAIP/LP-AD-2.LPPR-en-PT.html (retrieved 2026-07-26). *ARP/elevation, runway/declared distances, communications, navaids (incl. the RWY 17 ILS CAT II correction), curfew/noise regulations, obstacle table, bird-hazard mitigation.*
- OurAirports — https://ourairports.com/airports/LPPR/ (retrieved 2026-07-26). *Cross-check.*
- Porto Airport terminal/handling guides (tier-4) — https://porto-opo-airport.com/guide/terminals/ and https://www.universalaviation.aero/locations/portugal/porto-lppr/ (retrieved 2026-07-26). *Terminal/pier structure and handling-agent names — travel/FBO-guide sources, not AIP-grade.*
- Portugal vACC — https://portugal-vacc.org/ (retrieved 2026-07-26). *VATSIM division covering Lisboa/Santa Maria FIRs — network-sim source, not regulatory; operational content (runway configuration, SID/STAR naming) cross-checked against the AIP text above.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Portugal (NAV); K Global fields from live VAMSYS; 4-page pack. |
