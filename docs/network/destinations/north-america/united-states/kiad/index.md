# KIAD — Washington Dulles International · Airport Briefing

**KIAD / IAD** · Dulles, Virginia, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the FAA Aeronautical Information Publication (AIP), Part 3 AD 2 (District of Columbia — Washington Dulles Intl), plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 38°56′50.843″N / 077°27′35.743″W (38.947456, -77.459929) `[FAA AIP AD 2.2.1]` |
| Field elevation | **312.3 ft AMSL** `[FAA AIP AD 2.2.3]` (OurAirports cross-check: 312 ft) |
| Mag variation | 🟧 **10° W**, epoch **2000** `[FAA AIP AD 2.2.5]` — not re-verified against current AIRAC; treat as a dated/approximate figure |
| Time zone | UTC−5 (EST) / UTC−4 (EDT, US DST observed) |
| Runway(s) | **01C/19C** 11,500 × 150 ft · **01R/19L** 11,500 × 150 ft · **12/30** 10,501 × 150 ft · **01L/19R** 9,400 × 150 ft (all concrete, PCN 81 R/C/W/T) `[FAA AIP AD 2.12]` |
| Preferential runway | Wind/flow-dependent; ATC/PCT assigns "north flow" (01-config) or "south flow" (19-config), with RWY 12/30 used for crosswind/alternate-flow operations — no single fixed preferential rule confirmed in reachable sources 🟧 |
| Longest LDA | 11,500 ft (01C, 01R, 19L) |
| Approaches | ILS published on seven of eight runway ends (01C/19C, 01L/19R, 01R/19L, 12); **CAT II/III** capability confirmed on **01L, 19C, 01R** (ALSF-2 approach lighting also present on 19R/19L, suggesting similar capability — sub-category not independently confirmed 🟧); **RWY 30 has no published ILS** — visual/RNAV only |
| RFF category | FAA **ARFF Index E** (Class-I certified, cert. 1973-05-01) — broadly comparable to ICAO CAT 9/10 but not a directly sourced ICAO-scale figure 🟧 |
| Control type | **Radar** — Washington Dulles ATCT on the field; **Potomac Consolidated TRACON (PCT)** approach/departure; **Washington ARTCC (ZDC)** en route — see [North America airspace overview](../../../../airspace/north-america.md) |
| Elevation class | Near sea-level (312 ft) — **not** hot-and-high; the Piedmont's operative seasonal drivers are winter snow/ice and summer convective weather, not density altitude |
| Special-airport status | 🟧 Field lies inside the outer (30 NM) ring of the **Washington, DC Metropolitan Area Special Flight Rules Area (SFRA)/ADIZ** (14 CFR Part 93 Subpart V) — see §3.2/§5 |
| Customs / PoE | **Yes** — International Arrivals Building (IAB), rated ≈2,400 pax/hour; exact CBP desk hours not independently confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **KDCA, KBWI, KEWR** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **16 min / 20 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Rolling Piedmont terrain, no close-in high ground; 312 ft field elevation. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | Three of four runways exceed 10,500 ft (two at 11,500 ft); ample for any K Global widebody. |
| Approach availability / minima | 🟩 | Multiple CAT II/III-equipped runways give strong low-vis capability for a destination field; exact sub-categories on 19R/19L not confirmed. |
| Airspace / traffic / control | 🟥 | Sits inside the Potomac Consolidated TRACON's dense DC-area airspace complex alongside KDCA and KBWI, overlaid by the Washington DC SFRA/ADIZ — high workload and a standing special-security-airspace consideration. |
| Weather / seasonal hazard | 🟧 | Continental climate: winter snow/ice/de-icing season and summer convective thunderstorms are the defining seasonal threats. |
| Curfew / slots / hours | 🟩 | **No curfew** — H24 unrestricted movement, unlike sister-airport KDCA. Overnight engine run-ups require prior Airport Operations approval. |
| RFF category vs our types | 🟩 | FAA ARFF Index E — above any of our fleet's requirement. |
| Fuel availability | 🟧 | Jet A assumed available H24 as a major international gateway; specific into-plane supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International Arrivals Building confirmed with a rated 2,400 pax/hr capacity; exact CBP desk hours and current mobile-lounge/AeroTrain routing not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
KIAD sits at 312 ft AMSL in the rolling Piedmont of Northern Virginia — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
Dulles operates inside the **Potomac Consolidated TRACON (PCT)**, the terminal radar facility that also serves Reagan National (KDCA), Baltimore/Washington (KBWI) and a dense ring of general-aviation fields across the Washington, DC metro area — one of the busiest and most procedurally constrained terminal complexes in the US National Airspace System. The field additionally sits inside the **outer (30 NM) ring of the Washington, DC Metropolitan Area Special Flight Rules Area (SFRA)/ADIZ**, a standing national-security airspace overlay under 14 CFR Part 93 Subpart V requiring a discrete transponder code and continuous ATC contact. Routine IFR airline traffic under continuous PCT/ZDC control satisfies this automatically, but any lost-comm, NORDO or off-flight-plan contingency in this airspace carries real intercept-risk consequences and must be briefed. Cross-ref [North America airspace overview](../../../../airspace/north-america.md) for the wider ZDC/PCT context.

### 3.3 Runway excursion 🟧
Declared distances are internally consistent for seven of the eight runway ends. **RWY 19C's published LDA (11,089 ft) is 411 ft shorter than its TORA/TODA/ASDA (11,500 ft)** — consistent with a displaced threshold or a runway-end safety allowance, but the exact basis was not stated in the reachable AIP extract and is not independently confirmed. No other displaced thresholds were found. Confirm current-cycle figures before treating as audit-grade; the discrepancy is non-limiting for typical arrival weights on this runway regardless of cause.

### 3.4 Weather threat 🟧
KIAD has a full four-season Mid-Atlantic Piedmont climate. Winter brings a recognised **snow/ice/de-icing season** (roughly Nov–Mar) that is the field's principal seasonal reliability driver. Summer brings **afternoon convective thunderstorms** typical of the region, plus occasional remnant tropical-system rain/wind (Aug–Oct). No IAD-specific fog-frequency statistic was found in reachable sources — treat as general regional climatology pending a dedicated MET study. See §14.

### 3.5 Operational considerations 🟧
Plan around: (1) the **PCT/DC-SFRA airspace complexity** described in §3.2; (2) a **published engine run-up restriction between 2200–0700 local requiring prior Airport Operations approval**, relevant to any late-night maintenance activity; (3) **wingspan-restricted taxiways** — Taxilane A (between stands A1–A5) is closed above 118 ft wingspan, TWY E1 is restricted to aircraft under 79 ft wingspan, and B747-8 aircraft are capped at 17 kt taxi speed on TWY J — all AIP-published ground constraints directly relevant to Code E/F equipment; and (4) the **split mobile-lounge/AeroTrain terminal system** (§13, Dispatch §2), which materially affects connection-time planning at this field.

---

## 4. Cautions & Warnings

- **RWY 19C's published LDA is 411 ft shorter than its TORA** — confirm the current declared-distance basis before planning a length-critical landing on 19C.
- **RWY 30 has no published ILS** — visual/RNAV approach only; do not expect a precision approach to this runway.
- **Overnight engine run-ups (2200–0700 local) require prior approval from Airport Operations.**
- **Taxilane A (between A1–A5) is closed to aircraft with a wingspan over 118 ft; TWY E1 is restricted to aircraft under 79 ft wingspan** — verify current taxi routing for Code E/F equipment.
- **B747-8 aircraft are capped at 17 kt (20 mph) taxi speed on TWY J.**
- **RWY 30 departures use the "upper antenna" for ATC communications** per a published AIP local remark — a non-standard note worth briefing.
- Large bird flocks and deer are noted in the vicinity of the airport (published AIP remark) — maintain a wildlife-strike scan, especially at dawn/dusk.
- The field lies inside the **DC SFRA outer ring** — any lost-comm/NORDO contingency near Washington carries real intercept-risk consequences; review SFRA procedures before any non-standard event in this airspace.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **CAT II/III low-visibility environment** and the **DC SFRA airspace overlay**. 🟧
- **Crew-qualification gate:** CAT II/III currency recommended for full-capability ops into the CAT II/III-equipped runways (01L, 19C, 01R confirmed; 19R/19L probable on lighting evidence but sub-category unconfirmed). 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. No curfew (§6). 🟩
- **Overflight / entry / permits:** Standard US domestic/international arrival; the field sits inside the outer ring of the DC SFRA (30 NM of the DCA VOR/DME) per 14 CFR Part 93 Subpart V — normal IFR flights under continuous ATC contact satisfy the requirement; no additional permit is needed for scheduled airline operations. 🟧
- **Operations notes:** ANSP — **FAA** (Potomac Consolidated TRACON approach/departure; Washington Dulles ATCT, H24). Airport operator — **Metropolitan Washington Airports Authority (MWAA)**, which also operates **MWAA Ramp Tower/Control**, required for push-back and power clearance from all apron positions.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | ATCT / approach / departure H24, all days `[FAA AIP AD 2.3.1]` | 🟩 |
| AD operating hours | H24, all months, all days `[FAA AIP AD 2.3.1]` | 🟩 |
| Night / curfew restrictions | **No curfew** — 24-hour unrestricted movement. Engine run-ups 2200–0700 local require prior Airport Ops approval; flight training prohibited 2200–0700 local `[FAA AIP remarks]` | 🟩 |
| RFF category | FAA ARFF Index E (Class-I certified) `[FAA AIP AD 2.6]` | 🟩 |
| Fuel | Jet A and 100LL listed `[FAA AIP AD 2.4.2]`; Jet A assumed H24 major-gateway availability, specific into-plane supplier/hours not confirmed | 🟧 |
| PCN | 81 R/C/W/T on all four runways `[FAA AIP AD 2.12.4]` | 🟩 |
| Customs | International Arrivals Building, ≈2,400 pax/hr rated capacity; exact CBP desk hours not confirmed | 🟧 |
| Handling / FBO | MWAA Ramp Tower (push-back/apron clearances); Signature and other FBOs serve GA/itinerant traffic (122.95 / 129.77 per AIP remark); airline ground handlers not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01C | 11,500 × 150 ft | Concrete / PCN 81 R/C/W/T | 11,500 | 11,500 | 11,500 | 11,500 | ALS MALSR; PAPI 4L |
| 19C | 11,500 × 150 ft | Concrete / PCN 81 R/C/W/T | 11,500 | 11,500 | 11,500 | **11,089** | ALS ALSF-2; PAPI 4R; LDA 411 ft short of TORA — basis not confirmed 🟧 |
| 01L | 9,400 × 150 ft | Concrete / PCN 81 R/C/W/T | 9,400 | 9,400 | 9,400 | 9,400 | ALS ALSF-2; PAPI 4L; newest (4th) runway |
| 19R | 9,400 × 150 ft | Concrete / PCN 81 R/C/W/T | 9,400 | 9,400 | 9,400 | 9,400 | ALS ALSF-2; PAPI 4L |
| 01R | 11,500 × 150 ft | Concrete / PCN 81 R/C/W/T | 11,500 | 11,500 | 11,500 | 11,500 | ALS ALSF-2; PAPI 4R |
| 19L | 11,500 × 150 ft | Concrete / PCN 81 R/C/W/T | 11,500 | 11,500 | 11,500 | 11,500 | ALS ALSF-2; PAPI 4L |
| 12 | 10,501 × 150 ft | Concrete / PCN 81 R/C/W/T | 10,501 | 10,501 | 10,501 | 10,501 | ALS MALSR; PAPI 4R; run-up blast pad designated non-movement area |
| 30 | 10,501 × 150 ft | Concrete / PCN 81 R/C/W/T | 10,501 | 10,501 | 10,501 | 10,501 | No ALS/ILS published; PAPI 4L; departures use "upper antenna" for ATC comms per AIP remark |

*Source: FAA AIP Part 3 AD 2, District of Columbia — Washington Dulles Intl (AD 2.12/2.13/2.14), retrieved 2026-07-26. All distances in feet as published. No displaced thresholds found in the reachable extract other than the RWY 19C LDA note above — 🟧 not independently re-confirmed against a current AIRAC cycle.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Dulles D-ATIS | 134.85 | H24 | `[FAA AIP AD 2.18]` |
| Delivery | Dulles Clearance Delivery | 135.7 / 317.8 | H24 | |
| Ground | Dulles Ground (West) | 121.625 / 348.6 | H24 | West-side ground movement |
| Ground | Dulles Ground (East) | 121.9 / 317.8 | H24 | East-side ground movement |
| Tower | Dulles Tower — RWY 01R/19L | 120.1 / 317.8 | H24 | |
| Tower | Dulles Tower — RWY 01C/19C | 120.25 / 348.6 | H24 | |
| Tower | Dulles Tower — RWY 01L/19R & 12/30 | 134.425 / 348.6 | H24 | |
| Ramp | MWAA Ramp Control (midfield) | 129.55 | — | Push-back/power clearance mandatory from all apron positions |
| Approach / Departure | Potomac Consolidated TRACON ("Potomac Approach/Departure") | Sector-specific — reported values include 118.675 / 120.450 / 123.825 / 124.650 / 125.050 / 125.800 / 126.100 / 126.650 / 126.825 / 134.200 / 135.775 | H24 | 🟧 Sector assignment is AIRAC/traffic-dependent — take the assigned frequency |
| Centre / FIR | Washington ARTCC (ZDC) | Per current AIRAC | H24 | See [North America airspace overview](../../../../airspace/north-america.md) |

*Source: FAA AIP Part 3 AD 2 District of Columbia (AD 2.18), retrieved 2026-07-26 — ATIS/delivery/ground/tower frequencies. Potomac TRACON sector frequencies cross-checked against public scanner/frequency-reference aggregators (RadioReference, Milcom Monitoring Post) — 🟧 tier-4, not individually AIP-confirmed per sector; treat as representative pending a current-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS | OSZ | Not published in reachable extract 🟧 | H24 | Localizer + glideslope, RWY 01C — CAT I |
| ILS | DLX | Not published in reachable extract 🟧 | H24 | Localizer + glideslope + inner marker, RWY 19C — CAT II/III |
| ILS | OIU | Not published in reachable extract 🟧 | H24 | Localizer + glideslope + DME + inner marker, RWY 01L — CAT II/III |
| ILS | ISU | Not published in reachable extract 🟧 | H24 | Localizer + glideslope + DME + inner marker, RWY 19R — sub-category not confirmed 🟧 |
| ILS | IAD | Not published in reachable extract 🟧 | H24 | Localizer + glideslope + DME, RWY 01R — CAT II/III |
| ILS | SGC | Not published in reachable extract 🟧 | H24 | Localizer + glideslope + DME, RWY 19L — sub-category not confirmed 🟧 |
| ILS | AJU | Not published in reachable extract 🟧 | H24 | Localizer + glideslope, RWY 12 — CAT I |
| — | — | — | — | **RWY 30: no ILS published** — visual/RNAV approach only |

*Idents and site data sourced to FAA AIP Part 3 AD 2 District of Columbia (AD 2.19), retrieved 2026-07-26; the reachable extract lists identifiers, component types and site coordinates but not MHz frequency values — pull exact frequencies from the current AIRAC chart before use.*

---

## 10. Arrival

- **Transition altitude / level:** US-standard **18,000 ft MSL / FL180** nationwide (not a field-specific published figure) 🟩
- **Speed:** 250 KIAS below 10,000 ft MSL (14 CFR § 91.117, US national standard)
- **Preferential runway logic:** Flow-dependent; PCT assigns "north flow" (01-config) or "south flow" (19-config) per wind/traffic, with RWY 12/30 used in crosswind or specific flow configurations — exact selection criteria not confirmed 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 01C | ILS (OSZ) | CAT I |
| 19C | ILS (DLX) | CAT II/III |
| 01L | ILS (OIU) | CAT II/III |
| 19R | ILS (ISU) | 🟧 sub-category not confirmed |
| 01R | ILS (IAD) | CAT II/III |
| 19L | ILS (SGC) | 🟧 sub-category not confirmed |
| 12 | ILS (AJU) | CAT I |
| 30 | — none — | Visual/RNAV only, no ILS published |

- **STARs (names only — 🟧 assembled from public flight-tracking references, not independently confirmed against current AIRAC):** CAVLR, COATT, DELRO, GIBBZ, HYPER, PRIVO, PRTZL, SELINSGROVE, WAYNZ, WIGOL (RNAV STAR families) — pull the live current-AIRAC STAR list at planning.
- **LVP:** CAT II/III trigger conditions apply consistent with winter low-vis/fog events on the CAT II/III-equipped runways; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (rolling Piedmont, non-limiting); the operative missed-approach concern is re-sequencing into the dense PCT/DC-metro traffic environment.

---

## 11. Departure

- **SIDs (names only — 🟧 assembled from public flight-tracking references, not independently confirmed against current AIRAC):** BUNZZ, CAPITAL ONE, CLTCH, JCOBY, JDUBB, JERES, MCRAY, RNLDI, SCRAM, WOOLY (RNAV SID families) — pull the live current-AIRAC SID list before use.
- **RNP / climb-gradient requirements:** Multiple RNAV SIDs reported; verify RNP type and climb-gradient per SID/runway on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** **MWAA Ramp Tower** clearance is required for push-back and power from all apron positions; pushback clearances on the north side of the midfield terminal route onto Taxilane D only unless otherwise authorised `[FAA AIP remark]`.
- **ATC slot / CTOT & clearance:** No slot-coordination or CTOT regime identified for KIAD in reachable sources — standard FAA ATCSCC ground-delay/flow-management programs apply as for any major US gateway in adverse conditions. 🟧
- **De-icing:** Dedicated remote de-icing pads are reported (a mainline-carrier-run pad and a separate regional-carrier pad, plus a pad associated with the fourth-runway/01L-19R project); exact pad locations/geometry not confirmed from a primary source this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** MWAA publishes IAD aircraft-noise information and a WebTrak flight-tracking/noise-complaint portal; specific NADP/preferential-routing procedure detail was not confirmed in reachable sources this pass. 🟧
- **Night noise / dB limits:** No formal curfew or published per-movement dB limit identified — **IAD explicitly operates without nighttime flight restrictions**, unlike sister-airport KDCA's nighttime noise rule.
- **Engine run-up restrictions:** Run-ups between 2200–0700 local require prior approval from Airport Operations `[FAA AIP remark]`.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Concourses A/B (≈1.1M sq ft combined; 31 loading-bridge gates plus 31 hardstand regional positions) and Concourses C/D (≈923,000 sq ft; 58 positions, 50 loading-bridge gates, United-operated) provide widebody-capable Code E/F parking; **two dedicated gates support A380 upper- and lower-deck boarding**. The runway/taxiway system operates under FAA-approved Modifications of Standards for **Group VI** (A380/B747-8-class) aircraft. 🟧 (MWAA operator source, not an AIP figure) | 🟧
- **Push-back:** **MWAA Ramp Tower clearance is mandatory** for push-back/power from all apron positions; all 180° turns out of apron positions must be made using minimum power `[FAA AIP remark]`.
- **Standard taxi routes:** Confirm with Ground/Ramp on the day; **Taxilane C is the active primary taxilane** per AIP remark.
- **Hot spots / tight taxiways:** 🟧 No FAA-published hot-spot panel was reachable this pass — confirm against the current Chart Supplement/airport diagram hot-spot listing. Known AIP-published ground constraints: **Taxilane A (between A1–A5) closed above 118 ft wingspan; TWY E1 restricted below 79 ft wingspan; B747-8 capped at 17 kt taxi speed on TWY J.**
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical/continental-transition climate typical of the Mid-Atlantic Piedmont; four distinct seasons.
- **Seasonal hazards:** Winter **snow/ice** (roughly Nov–Mar) driving a recognised de-icing season; summer **afternoon convective thunderstorms**; occasional remnant tropical-system rain/wind (Aug–Oct). No IAD-specific fog-frequency figure was found — treat as general regional climatology pending a dedicated MET study.
- **Local effects:** No notable terrain/sea-breeze local effect at this inland Piedmont field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the wingspan-restricted taxiways in §13), CAT II/III equipment status, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures, current DC SFRA/ADIZ NOTAM or TFR activity. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — Category L, not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates **KDCA, KBWI, KEWR** `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A assumed available H24 as a major international gateway; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the three longer runways (9,400–11,500 ft). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No widebody-specific performance constraint was identified at KIAD beyond the standard Group VI Modification-of-Standards routing applicable to A380/B747-8-class aircraft (§13). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning considerations here are winter CAT II/III reliance and DC-SFRA airspace awareness rather than aircraft field-length or field-elevation performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2000 epoch (10° W); current-day value not independently re-confirmed.
- **ILS frequencies** — the reachable FAA AIP extract lists idents/site data but not MHz values for any of the seven published ILS; pull from current AIRAC chart.
- **ILS sub-category (CAT II vs III) on RWY 19R and 19L** — ALSF-2 lighting present (consistent with 01L/19C/01R, which are confirmed CAT II/III elsewhere), but not independently confirmed from a primary category table this pass.
- **RWY 19C LDA/TORA discrepancy (411 ft)** — basis (displaced threshold vs. safety allowance) not stated in the reachable extract.
- **SIDs/STARs (current names)** — assembled from public flight-tracking aggregators, not obtained from a primary AIRAC source this pass; pull the live current-AIRAC procedure list before use.
- **Potomac TRACON sector frequency assignment** — sourced to public scanner/frequency-reference aggregators, not individually AIP-confirmed per sector.
- **Take-off minima, reverse-thrust/idle-reverse policy, follow-me availability** — none confirmed in reachable sources.
- **Fuel supplier(s) and into-plane hours** — assumed H24 major-gateway availability, not individually confirmed.
- **CBP/immigration desk hours at the International Arrivals Building** — not confirmed; assumed major-gateway coverage aligned with international bank arrivals.
- **De-icing pad location/geometry and provisioning detail** — existence confirmed (mainline and regional-carrier pads reported), exact layout not confirmed from a primary source.
- **Airport diagram hot-spot panel** — not reachable this pass; known ground constraints (§13) are AIP-remark-sourced, not from a dedicated hot-spot listing.
- **CTOT/ATFM specifics for KIAD** — general FAA ATCSCC practice assumed, not independently KIAD-sourced.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **FAA Aeronautical Information Publication, Part 3 AD 2 — District of Columbia (Washington Dulles Intl, KIAD)** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_district_of_columbia.html (retrieved 2026-07-26). *ARP, elevation, mag var, runway geometry/PCN/declared distances, approach lighting/PAPI, ATC frequencies, ILS idents/site data, ARFF category, published local remarks.*
- OurAirports — https://ourairports.com/airports/KIAD/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/IAD/Washington-Dulles-International-Airport (retrieved 2026-07-26). *Chart/diagram pointer.*
- Metropolitan Washington Airports Authority — "Overview of Dulles" — https://www.mwaa.com/overview-dulles (retrieved 2026-07-26). *Terminal/concourse layout, AeroTrain/mobile-lounge system, Group VI Modification-of-Standards note, IAB capacity, cargo facilities.*
- eCFR — 14 CFR Part 93, Subpart V (Washington, DC Metropolitan Area Special Flight Rules Area) — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-93/subpart-V (retrieved 2026-07-26). *DC SFRA regulatory basis.*
- Wikipedia — "Washington, D.C., Special Flight Rules Area" — https://en.wikipedia.org/wiki/Washington,_D.C.,_Special_Flight_Rules_Area (retrieved 2026-07-26). *SFRA/ADIZ corroboration, non-safety-critical.*
- FAA — "Potomac Consolidated TRACON (PCT)" — https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/air_traffic_services/tracon/pct (retrieved 2026-07-26). *PCT scope/role corroboration.*
- Wikipedia — "Washington Air Route Traffic Control Center" — https://en.wikipedia.org/wiki/Washington_Air_Route_Traffic_Control_Center (retrieved 2026-07-26). *ZDC corroboration.*
- FlightAware — KIAD Instrument Approach Procedures index (ILS RWY 01R / 19C / 01L "CAT II-III" listings) — https://www.flightaware.com/resources/airport/KIAD/IAP (retrieved 2026-07-26). *Tier-4 cross-check of CAT II/III runway assignment.*
- FlightAware — KIAD SID/STAR procedure index — https://www.flightaware.com/resources/airport/KIAD/procedures (retrieved 2026-07-26). *Tier-4 SID/STAR name list — not independently confirmed against current AIRAC.*
- Wikipedia — "Dulles International Airport" — https://en.wikipedia.org/wiki/Dulles_International_Airport (retrieved 2026-07-26). *Non-safety-critical corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
