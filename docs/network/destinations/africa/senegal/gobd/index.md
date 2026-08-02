# GOBD — Blaise Diagne Intl · Airport Briefing

**GOBD / DSS** · Diass, Thiès Region (serves Dakar), Senegal · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — ASECNA/ANACIM-derived, tier-4 corroborated

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 sources (OurAirports, Wikipedia) cross-checked against each other; the ASECNA AIS supplementary page for Dakar could not be retrieved this pass (JavaScript frameset, per the source register) — treat AIP-grade figures (declared distances, navaid status, minima) as 🟧 pending a live-AIRAC cross-check. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N14°40′15″ / W17°04′22″ (14.670878, -17.072829) `[OurAirports]` 🟧 not cross-checked against a primary AIP coordinate |
| Field elevation | **290 ft / 88 m AMSL** `[OurAirports; Wikipedia gives 289.59 ft/88.27 m — consistent]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+0 (GMT, no DST) |
| Runway(s) | **01/19**, 3,500 × 60 m asphalt, lighted `[OurAirports]` — single runway, no parallel |
| Preferential runway | Not published / verify — wind-dependent, single runway so no runway-selection logic beyond direction 🟧 |
| Longest LDA | ≈3,380 m (3,500 m runway less the 120 m displaced threshold in the landing direction — see §7) 🟧 not AIP-confirmed |
| Approaches | Not confirmed in reachable sources this pass — a field of this size (2017-built, major international gateway) is assessed to have at least one precision/RNP approach; verify current AIRAC 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Assessed **Radar/procedural mix** typical of a modern ASECNA international gateway — not independently confirmed 🟧 |
| Elevation class | Near sea-level (290 ft) — **not** hot-and-high; coastal Sahelian climate is the operative driver, not density altitude |
| Special-airport status | None identified — single-runway field with **no redundancy if the runway is closed**; see §5 |
| Customs / PoE | **Yes** — main international gateway for Senegal (opened 2017, replaced the in-city Léopold Sédar Senghor Intl) |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` 🟩 — the richest West-African field in the network |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **GOGS (Cap Skirring), GOOY (Dakar-Yoff, legacy)** `[VAMSYS mirror 2026-07-26]` — plain-text reference only, no OM C brief exists for either yet |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal Cap-Vert/Thiès plain; no close-in high terrain. |
| Runway length vs fleet perf | 🟩 | 3,500 m is ample for any K Global widebody type at typical weights; see §16/§17. |
| Approach availability / minima | 🟧 | Not confirmed in reachable sources this pass — pull the current-AIRAC approach list at planning. |
| Airspace / traffic / control | 🟧 | Major international gateway; control type (radar vs procedural) not independently confirmed. |
| Weather / seasonal hazard | 🟧 | Harmattan dust (Nov–Mar) and West African monsoon convection (Jun–Oct) — see §14. |
| Curfew / slots / hours | 🟧 | No curfew/slot regime found in reachable sources — assumed unrestricted 24 h gateway; not confirmed. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Assumed available as the nation's primary gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟩 | Confirmed international Port of Entry; major-gateway customs infrastructure since 2017. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
GOBD sits on the flat Cap-Vert/Thiès coastal plain at 290 ft AMSL. There is no close-in high terrain relevant to arrival, departure or missed-approach paths — this is a non-issue field for terrain. Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
As Senegal's principal international gateway and a **North Atlantic/EUR-SAM entry point**, GOBD carries meaningful scheduled traffic (Air France, Air Senegal, Emirates, Turkish Airlines, Delta, TAP, Brussels Airlines and others) into a **single runway**. Control type (radar vs procedural) is not confirmed from reachable sources this pass — treat as procedural-leaning per the general **Dakar (GOOO) FIR** picture (ASECNA-administered) until confirmed locally. Cross-ref the [Africa Airspace Briefing](../../../../airspace/africa.md) — the Dakar FIR (GOOO), including its oceanic sector, is worked by ASECNA and is the Atlantic gateway FIR for the EUR/SAM corridor.

### 3.3 Runway excursion 🟥
GOBD's single runway (01/19) carries a **real precedent**: on 9 May 2024 a Boeing 737-300 (Transair, operating for Air Sénégal) suffered a rejected takeoff, ran off the runway and caught fire on a Bamako departure — 10 of 85 occupants injured, aircraft written off. This is a direct, dated, field-specific runway-excursion event and should be briefed as such — review rejected-takeoff decision speeds, wet/contaminated-runway margins and runway-condition reporting discipline before departure. The runway also carries **120 m displaced thresholds at both ends (01 and 19)** — confirm the correct LDA in the landing direction versus the full 3,500 m TORA available for takeoff (§7).

### 3.4 Weather threat 🟧
West Africa's twin seasonal hazards apply: **harmattan dust** (Saharan haze, worst Nov–Mar) can reduce visibility in the dry season, and the **West African monsoon/ITCZ convective season** (roughly Jun–Oct) brings heavy rain and embedded thunderstorms — the dominant en-route/terminal weather threat per the [Africa Airspace Briefing](../../../../airspace/africa.md) §11. No GOBD-specific frequency statistic was found this pass — treat as regional climatology. See §14.

### 3.5 Operational considerations 🟧
Two durable points: (1) **single runway, no redundancy** — any runway obstruction/closure closes the field entirely, which matters for alternate/diversion planning given this is a modern (2017) but still single-strip gateway; (2) the field is comparatively new and well-appointed relative to many regional neighbours, but **approach/navaid/ATC infrastructure details were not independently confirmed** this pass (§9/§18) — the open items here are mostly currency/confirmation gaps rather than known safety-critical deficiencies.

---

## 4. Cautions & Warnings

- **Single runway (01/19) — no redundancy.** A closure for any reason (disabled aircraft, contamination, navaid outage) closes the field; factor this into alternate selection.
- **Displaced thresholds both ends (120 m)** — confirm the correct LDA for the landing runway in use; do not assume the full 3,500 m is available for landing.
- **Rejected-takeoff/runway-excursion precedent (9 May 2024)** — review RTO decision-speed discipline and runway-condition reporting, especially in wet-season conditions.
- **Harmattan dust (Nov–Mar)** can degrade visibility; **monsoon convection (Jun–Oct)** brings heavy rain/embedded CB — check current SIGMET before planning.
- No on-field ILS/VOR could be confirmed from reachable public sources this pass — the nearest charted VOR-DME (Dakar "YF", 113.10 MHz) sits ~24 nm west, associated with the legacy Léopold Sédar Senghor field (GOOY), not GOBD itself. **Do not assume on-field precision-approach navaid coverage without a current-AIRAC check** (§9/§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **single-runway-no-redundancy** consideration, not a terrain/approach-complexity item. 🟧
- **Crew-qualification gate:** None identified. 🟧
- **Operating restrictions / bans:** None found in reachable sources — verify current AIRAC for any RNP AR / circling restriction. 🟧
- **Overflight / entry / permits:** Standard international arrival for a national Port-of-Entry gateway; no special state permit found beyond ordinary diplomatic clearance practice. 🟧
- **Operations notes:** Airport built and initially financed with major Saudi Binladin Group participation; operated today under a **Summa-Limak** concession (the same Summa group also manages [GFLL Freetown](../../sierra-leone/gfll/index.md) — a useful operational-continuity note across the two West-African fields). ANSP/regulatory authority is **ANACIM** (Senegal's civil aviation agency) with en-route service from **ASECNA** (Dakar FIR, GOOO).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — assumed H24 as the national primary gateway | 🟧 |
| AD operating hours | Not published / verify — assumed H24 | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Assumed Jet A-1 available as the national gateway; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International Port of Entry confirmed; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01 | 3,500 × 60 m | Asphalt, lighted; PCN not published 🟧 | ≈3,500 m 🟧 not AIP-confirmed | 🟧 | 🟧 | ≈3,380 m (3,500 m less 120 m displaced threshold) 🟧 | Threshold displaced 120 m (394 ft) |
| 19 | 3,500 × 60 m | Asphalt, lighted; PCN not published 🟧 | ≈3,500 m 🟧 not AIP-confirmed | 🟧 | 🟧 | ≈3,380 m (3,500 m less 120 m displaced threshold) 🟧 | Threshold displaced 120 m (394 ft) |

*Source: OurAirports runway record (retrieved 2026-07-26) — physical runway length and displaced-threshold figures only; full TORA/TODA/ASDA declared-distance table is **not AIP-confirmed this pass**. Verify against a current ASECNA/ANACIM AIP AD 2 GOBD before treating as audit-grade. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (English) | Dakar/Diass ATIS | 126.2 | Not published / verify 🟧 | `[OurAirports]` |
| ATIS (French) | Dakar/Diass ATIS | 126.6 | Not published / verify 🟧 | `[OurAirports]` |
| Tower | Diass Tower | 118.8 | Not published / verify 🟧 | `[OurAirports]` |
| Arrival / Approach | Diass Arrival | 120.5 | Not published / verify 🟧 | `[OurAirports]` |
| Centre / FIR | Dakar (GOOO) | Per current AIRAC | H24 (assumed) | See [Africa Airspace Briefing](../../../../airspace/africa.md) — ASECNA-administered FIR |

*Source: OurAirports frequency record (retrieved 2026-07-26) — tier-4, not independently AIP-cross-checked. Treat as representative pending a live-AIRAC verification.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | YF (Dakar) | 113.10 | H24 (assumed) | 🟧 **~24 nm W of GOBD** — associated with the legacy Léopold Sédar Senghor field (GOOY), **not confirmed as serving GOBD's own approaches** |
| NDB | SDS (Dakar) | 323 kHz | H24 (assumed) | 🟧 Same ~24 nm-west legacy-field association as above |

*No on-field ILS, VOR or NDB could be identified from reachable public (tier-4) sources for GOBD itself — a material gap for a field of this size and importance. **Confirm on-field navaid/approach infrastructure against a current AIRAC before use** — see §18.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Single runway (01/19) — selection is wind-direction driven only; no parallel/config logic applies.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 01 | Not confirmed 🟧 | Pull current-AIRAC approach list at planning |
| 19 | Not confirmed 🟧 | Pull current-AIRAC approach list at planning |

- **STARs (names only):** Not confirmed in reachable research pass. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative concern is the single-runway environment — a missed approach has no parallel-runway option and will re-sequence behind other single-runway traffic.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed this pass. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found in reachable sources — assumed unrestricted. 🟧
- **De-icing:** **NIL** — coastal-tropical field, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not individually confirmed; GOBD was purpose-built in 2017 as a modern international gateway and is understood to handle widebody international traffic routinely (Emirates, Turkish, Delta, TAP among current operators) — specific widebody stand count/config not confirmed this pass. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Tower on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources — not confirmed absent. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Coastal Sahelian/Sudano-Sahelian climate — dry season roughly Nov–May, wet/monsoon season roughly Jun–Oct.
- **Seasonal hazards:** **Harmattan dust** (Nov–Mar, Saharan haze reducing visibility, worst inland but can affect the coast) and the **West African monsoon/ITCZ convective band** (Jun–Oct, heavy rain and embedded thunderstorms) are the region's defining hazards per the [Africa Airspace Briefing](../../../../airspace/africa.md) §11. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Local effects:** Coastal location — onshore/sea-breeze effects plausible but not independently confirmed as operationally significant this pass.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (single-runway field — any closure is field-closing), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and any West-Africa conflict-zone/overflight bulletins per the [Africa Airspace Briefing](../../../../airspace/africa.md) §9. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / West-Africa network gateway.
- **Nearest suitable alternates:** **GOGS (Cap Skirring)**, **GOOY (Dakar-Yoff, legacy)** `[VAMSYS mirror 2026-07-26]` — plain-text reference, no OM C brief exists yet for either; confirm current operational status of GOOY (civil scheduled service moved to GOBD in December 2017 — GOOY's present-day civil-use status as an alternate is **not confirmed** this pass). 🟧
- **Fuel-uplift notes:** Assumed Jet A-1 available as the national primary gateway; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,500 m runway is non-limiting for any K Global type at typical weights. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific performance penalty identified — 3,500 m runway length is ample for the full K Global widebody range at typical operating weights. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **On-field navaid / ILS infrastructure** — no on-field VOR/NDB/ILS could be confirmed from reachable tier-4 sources; the nearest charted VOR-DME/NDB pair is ~24 nm west and associated with the legacy Léopold Sédar Senghor field (GOOY), not GOBD. Material gap — verify against a current ASECNA/ANACIM AIP.
- **Full declared-distance table (TORA/TODA/ASDA)** — only physical runway length and displaced-threshold figures were confirmed; official declared distances not obtained.
- **SIDs/STARs/approaches (current names and minima)** — not obtained this pass.
- **ATS/AD operating hours, curfew, slot regime, RFF category, PCN, fuel supplier/hours, handling agent(s), stand/gate configuration** — none confirmed in reachable sources.
- **Mag variation, transition altitude/level, take-off minima, noise-abatement procedure** — none confirmed.
- **GOOY (legacy Dakar-Yoff) current civil-operational status** — civil scheduled service moved to GOBD in Dec 2017; whether GOOY remains usable/available as a company alternate is not confirmed.
- **ASECNA AIS supplementary page for Dakar** (`ais-asecna.org/en/supp/dakar.htm`) could not be retrieved this pass — likely a JavaScript frameset per the source register; a browser-based re-attempt may succeed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/GOBD/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid cross-check — tier-4, not AIP-grade.*
- Wikipedia — "Blaise Diagne International Airport" — https://en.wikipedia.org/wiki/Blaise_Diagne_International_Airport (retrieved 2026-07-26). *History, opening date, operator, 9 May 2024 runway-excursion accident.*
- ASECNA AIS Dakar supplementary page — http://www.ais-asecna.org/en/supp/dakar.htm — **not reachable this pass** (JavaScript frameset); listed for future retrieval attempt.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
