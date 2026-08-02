# GFLL — Freetown Intl · Airport Briefing

**GFLL / FNA** · Lungi, Sierra Leone (serves Freetown, across the estuary) · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Sierra Leone CAA-derived, tier-4 corroborated

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 sources (OurAirports, Wikipedia) cross-checked against each other; the Sierra Leone Civil Aviation Authority AIP was **not reachable this pass** — treat AIP-grade figures (declared distances, minima, hours, RFF) as 🟧 pending a live-AIRAC cross-check. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N8°36′59″ / W13°11′44″ (8.616440, -13.195500) `[OurAirports]` 🟧 not cross-checked against a primary AIP coordinate |
| Field elevation | **84 ft / 26 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+0 (GMT, no DST) |
| Runway(s) | **12/30**, 3,200 × 46 m asphalt, lighted `[OurAirports]` — single runway, no parallel; no displaced threshold noted |
| Preferential runway | Not published / verify — wind-dependent, single runway so no runway-selection logic beyond direction 🟧 |
| Longest LDA | ≈3,200 m (no displaced threshold identified) 🟧 not AIP-confirmed |
| Approaches | Not confirmed in reachable sources this pass — on-field VOR-DME exists (§9), suggesting at least a VOR/DME approach is likely; verify current AIRAC 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Assessed **procedural/limited-radar**, consistent with the general **Roberts (GLRB) FIR** picture — not independently confirmed 🟧 |
| Elevation class | Near sea-level (84 ft) — **not** hot-and-high |
| Special-airport status | 🟥 **The airport sits across the Sierra Leone River estuary from Freetown city** — a structural access constraint, not a flight-operations one (see §5) |
| Customs / PoE | **Yes** — sole international airport in Sierra Leone |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **GGOV (Bissau, Guinea-Bissau), GBYD (Banjul, Gambia)** `[VAMSYS mirror 2026-07-26]` — cross-country, plain-text reference only, no link |
| Taxi-in / taxi-out (VAMSYS) | **5 min / 7 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal Lungi peninsula; no close-in high terrain on the airport side. The hilly Freetown peninsula (up to several hundred metres) lies across the estuary to the south — not a factor for the airport's own approach/departure paths but a regional awareness item. |
| Runway length vs fleet perf | 🟧 | 3,200 m is the **shortest of the three West-African fields built this pass** — workable for our narrower-body and mid-size widebody types but confirm current-weight performance for our largest types (A388/B748/B77W) before dispatching at max structural weight; see §16/§17. |
| Approach availability / minima | 🟧 | Not confirmed in reachable sources — on-field VOR-DME suggests conventional approach capability at minimum; verify current AIRAC. |
| Airspace / traffic / control | 🟧 | Sole international gateway for Sierra Leone; control type not independently confirmed; assessed procedural-leaning per the Roberts FIR. |
| Weather / seasonal hazard | 🟧 | West African monsoon convection (Jun–Oct, one of the wettest coastal belts in the region) is the defining hazard; harmattan influence is lesser this far south but not zero (Dec–Feb). |
| Curfew / slots / hours | 🟧 | No curfew/slot regime found in reachable sources — assumed unrestricted. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Assumed available as the sole national gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟥 | International Port of Entry confirmed, but the **airport is physically separated from Freetown by the estuary** — a structural passenger/crew-connection constraint (ferry/water-taxi/road only), a real commercial and turnaround-planning factor. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
GFLL sits on the flat, low-lying Lungi peninsula at 84 ft AMSL — no close-in high terrain affects the airport's own arrival, departure or missed-approach paths. The hilly Freetown peninsula (Sierra Leone's coastal highlands run to several hundred metres) lies across the Sierra Leone River estuary to the south; it is not close enough to constrain GFLL's own procedures but is worth situational awareness for any visual manoeuvring toward the city side.

### 3.2 Airborne conflict / traffic 🟧
As Sierra Leone's sole international airport, GFLL carries scheduled international service (Brussels Airlines, Kenya Airways, Ethiopian Airlines, ASKY, Air Côte d'Ivoire, and Turkish Airlines from 2026) into a **single runway**. Control type is not confirmed from reachable sources — treat as procedural-leaning per the general **Roberts (GLRB) FIR** picture (a multinational Guinea/Liberia/Sierra Leone interstate agency FIR) until confirmed locally. Cross-ref the [Africa Airspace Briefing](../../../../airspace/africa.md) §3, which names the Roberts FIR explicitly.

### 3.3 Runway excursion 🟧
No displaced threshold or excursion history was found for GFLL's single 3,200 m runway in reachable sources — **not independently confirmed as risk-free**, simply undocumented in the sources checked this pass. Standard wet-runway/braking-action discipline applies, particularly in the Jun–Oct monsoon season (§3.4/§14).

### 3.4 Weather threat 🟥
Sierra Leone's coast sits in one of the wettest belts of West Africa — the **monsoon season (roughly Jun–Oct)** brings very heavy rainfall and embedded convective activity, materially heavier than at more northerly Sahelian coastal fields. **Harmattan dust** influence is present but generally weaker this far south than at Sahelian fields, mainly Dec–Feb. This is the field's defining weather threat — see the [Africa Airspace Briefing](../../../../airspace/africa.md) §11 and §14 below.

### 3.5 Operational considerations 🟥
The single defining, durable operational fact about this field is that **the airport is physically separated from Freetown, the city it serves, by the Sierra Leone River estuary** — historically requiring a government ferry (~1 hour), private water-taxi speedboats (30–40 min to Aberdeen/Murray Town/Government wharf) or a road journey around the estuary (commonly 3+ hours with Freetown traffic). A "Lungi Bridge" project has been announced (2019) to permanently resolve this, but its current construction status is **not confirmed** this pass — treat the cross-estuary constraint as still standing. This drives real passenger/crew-connection-time and minimum-connect-time planning (see [Dispatch](dispatch.md) §2/§6), though it is a ground-logistics item rather than a flight-safety TEM item per se. Additionally, the field is a **single-runway, no-redundancy** environment — any closure closes the field entirely.

---

## 4. Cautions & Warnings

- **The airport is across the estuary from Freetown city** — factor ferry/water-taxi/road transfer time into crew scheduling and passenger minimum-connect-time; do not assume city-adjacent turnaround logistics.
- **Single runway (12/30) — no redundancy.** A closure for any reason closes the field.
- **Monsoon-season heavy rain (Jun–Oct)** is the region's most pronounced wet-season signature — check current SIGMET/TAF before planning; standard wet/contaminated-runway braking-action discipline applies.
- **Shortest runway of the three West-African fields in this pass (3,200 m)** — confirm current-weight performance for the largest K Global widebody types before dispatch at high weights (§16/§17).
- No approach minima or SID/STAR names could be confirmed from reachable public sources this pass — verify the current AIRAC chart before planning any non-visual arrival/departure.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. The standing crew-briefing item is the **single-runway-no-redundancy** consideration, not a terrain/approach-complexity one. 🟧
- **Crew-qualification gate:** None identified. 🟧
- **Operating restrictions / bans:** None found in reachable sources — verify current AIRAC for any RNP AR / circling restriction. 🟧
- **Overflight / entry / permits:** Standard international arrival for a national Port-of-Entry gateway; no special state permit found beyond ordinary diplomatic clearance practice. 🟧
- **Operations notes:** Airport officially renamed **Freetown International Airport** (still filed under ICAO GFLL / IATA FNA; historically known as Lungi International Airport). A **$270 million** expansion (new passenger terminal, VIP terminal, taxiway work) completed with the new terminal opening **4 March 2023**, managed under **Summa Airport (SL) Ltd** — the same Summa group also manages [GOBD Dakar](../../senegal/gobd/index.md), a useful operational-continuity note across the two fields. ANSP/regulatory authority is the **Sierra Leone Civil Aviation Authority**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — assumed H24 as the sole national gateway | 🟧 |
| AD operating hours | Not published / verify — assumed H24 | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Assumed Jet A-1 available as the sole national gateway; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International Port of Entry confirmed; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 3,200 × 46 m | Asphalt, lighted; PCN not published 🟧 | ≈3,200 m 🟧 not AIP-confirmed | 🟧 | 🟧 | ≈3,200 m 🟧 | No displaced threshold identified `[OurAirports]` |
| 30 | 3,200 × 46 m | Asphalt, lighted; PCN not published 🟧 | ≈3,200 m 🟧 not AIP-confirmed | 🟧 | 🟧 | ≈3,200 m 🟧 | No displaced threshold identified `[OurAirports]` |

*Source: OurAirports runway record (retrieved 2026-07-26) — physical runway length only; full TORA/TODA/ASDA declared-distance table is **not AIP-confirmed this pass**. Verify against a current Sierra Leone CAA AIP AD 2 GFLL before treating as audit-grade. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Tower | Lungi Tower | 118.1 | Not published / verify 🟧 | `[OurAirports]` |
| Ground | Lungi Ground | 121.9 | Not published / verify 🟧 | `[OurAirports]` |
| Approach | Lungi Approach | 119.1 | Not published / verify 🟧 | `[OurAirports]` |
| A/G voice radio | — | Listed as 667.3 MHz `[OurAirports]` | — | 🟧 **This figure is outside the VHF airband and is assessed as a database error in the source; do not use — treat as not published pending AIP confirmation.** |
| Centre / FIR | Roberts (GLRB) | Per current AIRAC | H24 (assumed) | See [Africa Airspace Briefing](../../../../airspace/africa.md) — multinational Guinea/Liberia/Sierra Leone interstate FIR |

*Source: OurAirports frequency record (retrieved 2026-07-26) — tier-4, not independently AIP-cross-checked. Treat as representative pending a live-AIRAC verification.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | LGI (Freetown Lungi) | 115.50 | H24 (assumed) | On field (~0.2 nm E) `[OurAirports]` — good corroboration of conventional approach capability |
| NDB | SL (Freetown Lungi) | 270 kHz | H24 (assumed) | On field (~1.8 nm ESE) `[OurAirports]` |
| NDB | LGI (Freetown Lungi) | 339 kHz | H24 (assumed) | On field (~2.7 nm NE) `[OurAirports]` |

*On-field VOR-DME and dual NDB presence is a reasonable indicator of at least conventional (VOR/NDB) approach capability — **ILS presence not confirmed**. Verify current approach list against a live AIRAC — see §18.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 assumed (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Single runway (12/30) — selection is wind-direction driven only.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 12 | Not confirmed 🟧 | On-field VOR-DME/NDB suggests conventional approach capability — verify current AIRAC |
| 30 | Not confirmed 🟧 | Same as above |

- **STARs (names only):** Not confirmed in reachable research pass. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver on the airport side; the operative concern is the single-runway environment — a missed approach has no parallel-runway option.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed this pass. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found in reachable sources — assumed unrestricted. 🟧
- **De-icing:** **NIL** — coastal-tropical field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not individually confirmed; the new terminal (opened March 2023) is understood to be designed for expanded international/widebody capacity, but stand count/config is not confirmed this pass. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Tower on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources — not confirmed absent. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical coastal climate — one of the wetter coastal belts of West Africa; distinct wet season (roughly May/Jun–Oct) and drier season (Nov–Apr).
- **Seasonal hazards:** **West African monsoon convection** (heavy rain, embedded thunderstorms, roughly Jun–Oct) is the field's defining weather hazard; **harmattan dust** (Nov–Mar) has a lesser but present influence this far south on the Guinea coast. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and the [Africa Airspace Briefing](../../../../airspace/africa.md) §11.
- **Local effects:** Coastal/estuary location — onshore/sea-breeze effects plausible but not independently confirmed as operationally significant this pass.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (single-runway field — any closure is field-closing), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and any West-Africa conflict-zone/overflight bulletins per the [Africa Airspace Briefing](../../../../airspace/africa.md) §9. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / West-Africa network gateway.
- **Nearest suitable alternates:** **GGOV (Bissau, Guinea-Bissau)**, **GBYD (Banjul, Gambia)** `[VAMSYS mirror 2026-07-26]` — both cross-country; plain-text reference only, no OM C briefs exist yet.
- **Fuel-uplift notes:** Assumed Jet A-1 available as the sole national gateway; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟧 3,200 m is the shortest runway of the three West-African fields built this pass — non-limiting for narrow-body/mid-size widebody types at typical weights, but confirm current-weight performance for the largest K Global types (A388/B748/B77W) before dispatch at high weight, especially on warm days. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

---

## 17. Fleet-specific notes (optional)

- 🟧 **Largest K Global widebody types (A388, B748, B77W)** should have current-AIRAC field-length/weight performance confirmed against this field's 3,200 m runway before dispatch at high structural weights — the runway is workable but is the tightest of the three West-African fields in this pass. Mid-size widebody and narrow-body types (A339, A359, A35K, B789, A320/A321 family) are not expected to be limited at typical weights. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Approach names, minima and full declared-distance table (TORA/TODA/ASDA)** — not obtained this pass; only physical runway length confirmed.
- **SIDs/STARs (current names)** — not obtained this pass.
- **ATS/AD operating hours, curfew, slot regime, RFF category, PCN, fuel supplier/hours, handling agent(s), stand/gate configuration** — none confirmed in reachable sources.
- **Mag variation, transition altitude/level, take-off minima, noise-abatement procedure** — none confirmed.
- **"A/G" frequency listed as 667.3 MHz in the OurAirports record** — outside the VHF airband, assessed as a source data error; do not rely on it.
- **Lungi Bridge project current construction status** (announced 2019, would resolve the cross-estuary access constraint) — not confirmed this pass.
- **Sierra Leone CAA AIP** could not be retrieved this pass — a browser-based or direct-authority re-attempt may succeed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/GFLL/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid cross-check — tier-4, not AIP-grade.*
- Wikipedia — "Freetown International Airport" (formerly Lungi International Airport) — https://en.wikipedia.org/wiki/Freetown_International_Airport (retrieved 2026-07-26). *History, terminal expansion/opening date, operator, estuary-access constraint, Lungi Bridge project.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
