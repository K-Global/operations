# MMUN — Cancún Intl · Airport Briefing

**MMUN / CUN** · Cancún, Quintana Roo, Mexico · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Mexico (SENEAM)-derived, public-source cross-checked

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Mexico (SENEAM, Publicación de Información Aeronáutica), AD 2 MMUN, cross-checked against public aeronautical data; the primary SENEAM AD 2 PDF could not be retrieved in full this pass (see §18) — figures below are corroborated across independent public sources but flagged 🟧 pending a direct AIP re-verify. Approaches/SIDs/STARs are listed **by name/type only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). **MMUN sits in the Atlantic/Caribbean hurricane belt — read §14 and the tropical-cyclone watch-item in §3.4 before every wet-season rotation.** Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 21°02′27″N / 086°52′24″W (21.040817, -86.873470) `[OurAirports/SkyVector cross-check 2026-07-26]` |
| Field elevation | **22 ft / 7 m AMSL** (one public source shows 20 ft / 6 m — minor cross-source variance) 🟧 — low, coastal, **no hot-and-high consideration** |
| Mag variation | Not confirmed from a primary table this pass 🟧 |
| Time zone | **UTC−5**, year-round — Quintana Roo runs a permanent "Southeast Zone" offset and does not observe the mainland Mexico DST pattern; verify current status 🟧 |
| Runway(s) | **12L/30R** 2,800 × 45 m (9,186 × 148 ft) · **12R/30L** 3,500 × 60 m (11,483 × 197 ft) — both asphalt, lighted. Parallel, **usable simultaneously** (unlike MMMX — no closely-spaced dependency reported) |
| Preferential runway | **12L usual landing runway**; **12R usual departure runway**; **12R also used for landing** during very early/late arrivals or when 12L is closed for single-runway operations; **30L/30R** used in winter or heavy-rain conditions — see §10 |
| Longest LDA | **12R/30L ≈ 3,500 m / 11,483 ft** (no displaced threshold found in reachable sources) 🟧 |
| Approaches | Procedural **VOR/DME** to 12L/30R based on a hold at the **NCP VOR**, outbound leg via the **CUN VOR**, inbound again via NCP; an **ILS** is also reported (ident ICUN, 111.10 — tier-4 sourced, not primary-confirmed) 🟧 |
| RFF category | Not published / verify 🟧 — the field has historically received A380 traffic (2013), implying high RFF capability, but no primary figure confirmed |
| Control type | 🟩 Radar/procedural mix typical of the region — Mérida ACC (SENEAM) provides area control; **no significant terrain in the vicinity** (see §3.1) |
| Elevation class | **Sea-level / coastal** — **not** hot-and-high; the defining seasonal driver here is **tropical-cyclone exposure**, not density altitude |
| Special-airport status | 🟩 An external operator reference classifies MMUN in its **baseline category** (no elevated-briefing tier) — contrast with MMMX's elevated-category status |
| Customs / PoE | **Yes** — Terminal 3 (dedicated international) and Terminal 2 (mixed domestic/international); major leisure-gateway hours expected 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **MMMX, MMGL, MPTO** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | No significant terrain in the vicinity — a materially different risk profile from MMMX. |
| Runway length vs fleet perf | 🟩 | 12R/30L (3,500 m) is ample for any K Global type; 12L/30R (2,800 m) is shorter but non-limiting at sea level for typical operating weights. |
| Approach availability / minima | 🟧 | Procedural VOR/DME confirmed by type; an ILS is tier-4 reported but not primary-confirmed; no CAT II/III capability found. |
| Airspace / traffic / control | 🟧 | High leisure-traffic volume, especially in peak winter/spring-break/summer periods; control structure (Mérida ACC/SENEAM) not exhaustively confirmed as radar throughout. |
| Weather / seasonal hazard | 🟥 | **Atlantic/Caribbean hurricane season (Jun–Nov, peak Aug–Oct)** is the field's defining seasonal hazard — see §3.4/§14. |
| Curfew / slots / hours | 🟧 | No hard curfew found; not independently confirmed as slot-coordinated. |
| RFF category vs our types | 🟧 | Not confirmed from a primary source. |
| Fuel availability | 🟧 | Jet A-1 reported available via a named supplier network; hours not independently confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed (T3, plus T2 for a subset of routes); exact hours not confirmed; handling includes Menzies Aviation Mexico. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
MMUN sits on the eastern edge of the flat Yucatán Peninsula — **no significant terrain** exists in the vicinity per operational cross-check. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here, a material contrast with the mountain-ringed MMMX.

### 3.2 Airborne conflict / traffic 🟧
MMUN is Mexico's busiest airport for international passengers and one of the busiest in Latin America, with pronounced seasonal peaks (winter high season, spring break, and Jul/Aug summer). Area control is provided by **Mérida ACC** (SENEAM) within the single, countrywide **Mexico FIR (MMFR)**; eastbound/oceanic traffic hands off toward the **Havana FIR (MUFH)**, and crews may need to call Mérida Centre approximately 10 minutes prior to that boundary. See the [North America airspace brief](../../../../airspace/north-america.md) for general continental context (that brief's specific routing does not cover the Mexico/Mérida FIR structure; the Mexico-specific detail is summarised here and in §8/§10/§11).

### 3.3 Runway excursion 🟧
No displaced thresholds were found in the reachable data for either runway pair — not independently re-confirmed against the primary AIP (§18). **PAPIs on RWY 30L and 30R are reported difficult to see**, becoming visible only around 1,000 ft on the approach — a specific visual-guidance caution when those runways are in use (winter/heavy-rain configuration, §10).

### 3.4 Weather threat 🟥
MMUN's defining seasonal hazard is **Atlantic/Caribbean tropical-cyclone exposure**: the regional hurricane season runs **June–November**, with the highest risk **July–November** and peak activity typically **August–October** as sea-surface temperatures peak. The airport has a documented history of **suspending operations ahead of approaching storms** (e.g., mass flight cancellations during Hurricane Beryl) and activates an **Early Warning Group for hydrometeorological phenomena** under its aeronautical-authority-approved Emergency Plan. Outside hurricane season, **May–October is a pronounced rainy season with high humidity** (heavy-rain events are themselves the trigger for a 30L/30R runway-configuration switch, §10); the field otherwise has a warm, trade-wind-moderated tropical climate year-round. See §14 for the durable seasonal picture and §15 for the live tropical-cyclone NOTAM/advisory watch.

### 3.5 Operational considerations 🟧
The field is **not** hot-and-high or terrain-constrained — MMUN's operational profile is comparatively benign versus MMMX. The standing watch-items are: (1) the **tropical-cyclone/hurricane-season ground-stop risk** (§3.4), which can suspend operations with limited notice and drive fleet-wide diversion/repositioning decisions; (2) **PAPI visibility on 30L/30R** (§3.3); and (3) the **single-runway-operations mode** when 12L is closed, which shifts landing traffic to 12R and increases workload/spacing sensitivity (§10). RFF and navaid infrastructure are not fully confirmed in reachable sources — the open items in §18 are mostly currency/administrative confirmations rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **Hurricane season June–November (peak Aug–Oct)** — monitor tropical-cyclone advisories continuously in season; the airport has a track record of suspending operations with limited notice ahead of a storm.
- **PAPIs on RWY 30L/30R are reported difficult to see**, only becoming visible around 1,000 ft — brief this specifically when those runways are assigned (winter/heavy-rain config).
- **Single-runway operations**: when RWY 12L is closed, landing traffic shifts to **12R**, typically for very early/late arrivals — confirm current runway status before planning the approach.
- **No significant terrain** — a materially lower-workload CFIT profile than MMMX, but do not relax standard MSA/terrain-awareness discipline.
- **Rainy season (May–Oct)** brings high humidity even on nominally dry days, and heavy-rain events are themselves a trigger for the 30L/30R configuration switch.
- **Havana FIR boundary handoff** — be prepared to call Mérida Centre ~10 minutes prior to the boundary on eastbound/oceanic-adjacent routings.
- Confirm whether an assigned VOR/DME procedural approach is based on the **NCP** or **CUN** VOR for the relevant leg (outbound vs inbound) — the two are used at different points in the same procedure (§10).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** 🟩 An external operator reference places MMUN in its **baseline (non-elevated) category** — contrast with MMMX's elevated-category status. No terrain- or elevation-driven enhanced-briefing gate applies here; the operative planning gate is **seasonal (hurricane) risk management**, not a per-approach crew qualification.
- **Crew-qualification gate:** None identified beyond standard line qualification. 🟩
- **Operating restrictions / bans:** Not confirmed — no RNP AR status or specific approach ban found in reachable sources. 🟧
- **Overflight / entry / permits:** Standard Mexican international arrival; no special state permit or PPR requirement found. 🟩
- **Operations notes:** ANSP — **SENEAM**, providing **Mérida ACC** area control within the single, countrywide **Mexico FIR (MMFR)**. Airport operator — **Grupo Aeroportuario del Sureste (ASUR)**. Ground handling includes **Menzies Aviation Mexico**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 assumed for a major international gateway — not independently confirmed | 🟧 |
| AD operating hours | No restricted operating window found; treat as H24 pending confirmation | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1; supplier network reported, hours not independently confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International facilities in Terminal 3 (dedicated) and Terminal 2 (partial); exact hours not confirmed | 🟧 |
| Handling / FBO | Menzies Aviation Mexico among ground handlers; not exhaustively confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12L | 2,800 × 45 m (9,186 × 148 ft) | Asphalt, lighted / PCN not published 🟧 | 2,800 m 🟧 | 2,800 m 🟧 | 2,800 m 🟧 | 2,800 m 🟧 | Usual landing runway (§10); SIDs on this runway reported based on the NCP VOR at the runway end |
| 30R | 2,800 × 45 m (9,186 × 148 ft) | Asphalt, lighted / PCN not published 🟧 | 2,800 m 🟧 | 2,800 m 🟧 | 2,800 m 🟧 | 2,800 m 🟧 | PAPI reported difficult to see (§3.3); used in winter/heavy-rain configuration |
| 12R | 3,500 × 60 m (11,483 × 197 ft) | Asphalt, lighted / PCN not published 🟧 | 3,500 m 🟧 | 3,500 m 🟧 | 3,500 m 🟧 | 3,500 m 🟧 | Usual departure runway; also used for landing in single-runway-ops mode; SIDs reported based on the CUN VOR |
| 30L | 3,500 × 60 m (11,483 × 197 ft) | Asphalt, lighted / PCN not published 🟧 | 3,500 m 🟧 | 3,500 m 🟧 | 3,500 m 🟧 | 3,500 m 🟧 | PAPI reported difficult to see (§3.3); used in winter/heavy-rain configuration |

*Source: OurAirports MMUN runway data (retrieved 2026-07-26), cross-checked against Wikipedia/public references. No displaced thresholds found in reachable sources — 🟧 not independently confirmed against the primary AIP Mexico (SENEAM) AD 2 MMUN table, which could not be retrieved in full this pass (§18). TORA/TODA/ASDA/LDA assumed equal to full runway length pending AIP confirmation. PCN not published in reachable sources. All distances metric primary, feet secondary.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Cancún ATIS | 127.7 | H24 (assumed) 🟧 | |
| Delivery | Cancún Clearance Delivery | 122.1 | — | Contact 10 min prior to ETD (operational cross-check) |
| Ground | Cancún Ground | 121.7 | — | |
| Tower (North) | Cancún Tower North | 118.1 | — | Reported used for **departures** |
| Tower (South) | Cancún Tower South | 118.6 | — | Reported used for **arrivals** |
| Approach | Cancún Approach | 120.4 | — | Combined APP/ARR frequency per source |
| Departure | Cancún Departure | 119.8 | — | |
| Centre / FIR | Mérida ACC (SENEAM) | Per current AIRAC 🟧 | H24 (assumed) | Single countrywide **Mexico FIR (MMFR)**; hands off to **Havana FIR (MUFH)** eastbound — see [North America airspace brief](../../../../airspace/north-america.md) for general continental context |

*Frequencies sourced to OurAirports (retrieved 2026-07-26), cross-checked against an independent public operational reference; the Tower-North/departures vs Tower-South/arrivals split is corroborated across both sources. Treat exact current-cycle values as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | CUN | Not confirmed 🟧 | H24 (assumed) | On-field; used as the outbound leg reference for the 12L/30R procedural VOR/DME approach and the basis for RWY 12R SIDs |
| VOR/DME | NCP | Not confirmed 🟧 | H24 (assumed) | On-field, located at the RWY 12L end; used for the approach hold and final segment, and the basis for RWY 12L SIDs |
| ILS | ICUN (reported) | 111.10 (reported) 🟧 | H24 (assumed) | Tier-4 sourced only — not independently confirmed against a primary table; runway served not confirmed |

*Idents/frequencies not fully confirmed against a primary source this pass — the SENEAM AD 2 MMUN PDF could not be retrieved in full (§18). Treat the whole table as 🟧 pending direct AIP verification.*

---

## 10. Arrival

- **Transition altitude / level:** Transition altitude reported at **18,500 ft** (consistent with the MMMX cross-check, suggesting a national policy value); TL by QNH — verify current chart. 🟧
- **Speed:** Not independently confirmed for MMUN specifically; apply standard Mexico FIR speed constraints pending verification. 🟧
- **Preferential runway logic:** **12L is the usual landing runway.** **12R** is also used for landing during very early/late arrivals, and specifically during **single-runway operations when 12L is closed**. **30L/30R** are used in **winter or heavy-rain** conditions. Arrivals through the Havana FIR are typically descended to FL250–FL200 before transfer to Mérida Centre; during quiet periods, expect a direct clearance to the CUN or NCP VOR then radar vectors toward a point at D20 on the extended centreline for RWY 12L, at 4,000 ft. Crews may also be vectored to the CUN VOR and asked to fly outbound on a westerly radial to ~20 NM at low level before turning back to the field.
- **Approaches (names/types only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 12L / 30R | Procedural VOR/DME | Hold at **NCP VOR** | Not confirmed 🟧 | Outbound leg of the procedure uses the **CUN VOR**; inbound/final again uses **NCP** — verify current chart |
| — | ILS (reported, runway not confirmed) | Not confirmed 🟧 | Not confirmed 🟧 | Tier-4 sourced only (ident ICUN, 111.10) — verify against primary AIP |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed this pass; heavy-rain events (rainy season, §14) are the plausible operationally relevant weather trigger, though not necessarily a formal LVP case. 🟧
- **Missed approach watch-items:** 🟩 No terrain driver (§3.1/§5); the operative missed-approach concern is re-sequencing into seasonal peak-period traffic and, in season, proximity to active tropical-cyclone weather.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. Operational cross-check reports most SIDs route to a waypoint on the airway at approximately **2,000 ft**, or direct to the Havana FIR boundary; **RWY 12L SIDs are reported based on the NCP VOR** (at the runway end), and **RWY 12R SIDs on the CUN VOR**. 🟧
- **RNP / climb-gradient requirements:** No elevated climb-gradient requirement expected — **sea-level field, no terrain constraint** (contrast with MMMX). Verify per SID/type on the current chart regardless. 🟩
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Contact Tower, Clearance or Ground approximately **10 minutes prior to ETD** per operational cross-check. 🟧
- **ATC slot / CTOT & clearance:** No formal slot/CTOT regime independently confirmed; expect seasonal peak-period sequencing delay rather than a structural capacity cap (contrast MMMX's saturation declaration). 🟧
- **De-icing:** **NIL** — tropical/coastal climate, no de-icing requirement. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No MMUN-specific published NADP confirmed this pass; fly the type's standard noise-abatement departure procedure per FCOM. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminal 3 (dedicated international, ~21 gates reported) is the primary international widebody-capable concourse; Terminal 2 handles a mixed domestic/international load; Terminal 4 (opened 2017, under phased expansion through 2026) adds capacity. Exact stand/code-letter allocation for our operation not confirmed. 🟧 | 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Hot spots / tight taxiways:** None specifically identified in reachable sources — a materially lower ground-complexity profile than MMMX. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Warm tropical climate year-round, moderated by an onshore trade wind; coastal, sea-level field.
- **Seasonal hazards:** 🟥 **Atlantic/Caribbean hurricane season, June–November, highest risk July–November, peak activity typically August–October** — the field's defining seasonal hazard, with a documented history of operational suspension ahead of approaching storms. **Rainy season May–October** brings pronounced humidity even on nominally dry days and frequent heavy-rain events (itself the trigger for a 30L/30R runway-configuration switch, §10).
- **Local effects:** No notable terrain/local-wind effects beyond the standard coastal/trade-wind pattern; no fog-prone microclimate identified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, and — in season — **NHC/national tropical-cyclone advisories and forecast cone**. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. any single-runway-operations notice affecting 12L), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and — during hurricane season — **any airport-suspension/ground-stop NOTAM and the current tropical-cyclone forecast track**. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination (non-base). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **MMMX** (Mexico City), **MMGL** (Guadalajara), **MPTO** (Toluca) `[VAMSYS mirror 2026-07-26]` — note all three are considerably inland/west and themselves high-elevation hot-and-high fields (MMMX/MPTO); confirm suitability and any hot-and-high performance implication before filing. In an active tropical-cyclone scenario, also consider the wider regional diversion picture (e.g., inland Mexican fields clear of the storm track) beyond the standing company-preferred set.
- **Fuel-uplift notes:** Jet A-1 reported available via a named supplier network; hours not independently confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟩 No field-elevation or field-length performance penalty at MMUN — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference. The operative planning risk here is **tropical-cyclone-driven diversion/extra-fuel decision-making in season**, not aircraft performance.

---

## 17. Fleet-specific notes (optional)

- No K Global type carries a field-specific performance restriction at MMUN (sea-level, no terrain constraint). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for general range/payload reference when planning hurricane-season contingency fuel/alternate decisions.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP Mexico (SENEAM) AD 2 MMUN PDF** — a live URL was located (`aipmexico.seneam.gob.mx`) but the document could not be retrieved in full this pass; re-attempt and re-verify every figure below directly against it.
- **Declared distances (TORA/TODA/ASDA/LDA)** — assumed equal to full runway length; not confirmed against the primary AIP table; displaced-threshold status not confirmed.
- **PCN, RFF category, take-off minima** — not published/confirmed in reachable sources.
- **Navaid idents/frequencies (CUN VOR, NCP VOR, ILS)** — CUN/NCP idents assumed from operational naming convention, exact frequencies not confirmed; ILS (ICUN 111.10) is tier-4 only.
- **SIDs/STARs (current names)** — not obtained this pass; pull the live current-AIRAC procedure list.
- **Transition altitude (18,500 ft)** — tier-4 cross-checked (same value as MMMX), not primary-AIP-confirmed for MMUN specifically.
- **Field elevation** — minor cross-source variance (22 ft vs 20 ft) — resolve against primary AIP.
- **Mag variation, ATS hours, curfew status** — not confirmed.
- **Formal slot/CTOT regime, if any** — not confirmed.
- **Stand/gate assignment for our operation** across Terminal 2/3/4.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Mexico (SENEAM), AD 2 MMUN** — https://aipmexico.seneam.gob.mx/AIP/doc/AD/AD_2/7_MMUN/AD_2-MMUN-2.pdf — primary source of record; retrieval did not complete this research pass (retrieved-attempt 2026-07-26). **Re-verify directly before treating any figure above as audit-grade.**
- OurAirports — https://ourairports.com/airports/MMUN/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Runway dimensions, ARP, elevation, ATC frequencies.*
- Wikipedia — "Cancún International Airport" — https://en.wikipedia.org/wiki/Canc%C3%BAn_International_Airport (retrieved 2026-07-26). *Elevation, runway data, terminal structure, ASUR operator detail, A380 service history.*
- SkyVector — https://skyvector.com/airport/MMUN/Cancun-Internacional-Airport (retrieved 2026-07-26). *Cross-check, coordinates.*
- Public Route Information Manual (third-party flight-simulation planning reference, operator-neutral; no operator identified) — https://planning.simfest.co.uk/RIM/MMUN.pdf (retrieved 2026-07-26). *Operational cross-check only, not regulatory: runway-selection logic, PAPI-visibility caution, VOR/DME approach structure, SID basis, Mérida Centre/Havana FIR handoff detail, seasonal weather pattern, diversion-airport list.*
- The Yucatan Times — "Cancun Airport activates the Early Warning Group for hydrometeorological phenomena" (2024) — https://theyucatantimes.com/2024/07/cancun-airport-activates-the-early-warning-group-for-hydrometeorological-phenomena/ (retrieved 2026-07-26). *Hurricane-season contingency-planning corroboration.*
- TravelPulse — "Cancun Airport Reopens After Impact of Hurricane Beryl" — https://www.travelpulse.com/news/airlines-airports/cancun-airport-reopens-after-impact-of-hurricane-beryl (retrieved 2026-07-26). *Operational-suspension precedent.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Mexico (SENEAM); K Global fields from live VAMSYS; 4-page pack. |
