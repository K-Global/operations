# LPPT — Humberto Delgado · Airport Briefing

**LPPT / LIS** · Lisbon, Portugal · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Portugal-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the NAV Portugal eAIP (AIP Portugal, AD 2 LPPT) plus public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 38°46′27″N / 009°08′03″W (38.7742, -9.1342) `[AIP Portugal AD 2 LPPT 1.1]` — at midpoint TWY T3, 7 KM (3.65 NM) BRG 359° GEO from S. Jorge Castle |
| Field elevation | **355 ft / 108 m AMSL** (reference temperature 24.2°C, August); geoid undulation 53 m |
| Mag variation | **2° W (2020)**, 0.17°/yr decreasing — 🟧 current-day value not re-confirmed against current AIRAC |
| Time zone | **UTC+0 (WET) / UTC+1 (WEST, EU DST)** — mainland Portugal runs **one hour behind Spain/Central Europe** (CET/CEST); do not assume common time with Iberian neighbours |
| Runway(s) | **02/20** — single physical runway, 3,707 × 45 m, asphalt (PCN 200/F/A/W/T). 🟧 **Historic second runway 17/35 (2,304 m) is PERMANENTLY CLOSED** (ANA closed it for apron/parking expansion, c. 2022) — now used for taxiing/aircraft parking only, **not available** for takeoff or landing despite still appearing on older charts/references |
| Preferential runway | Wind-dependent between the 02- and 20-configurations; no crosswind runway remains since 17/35 closure — see §3.4 |
| Longest LDA | 3,617 m (RWY 02) / 3,207 m (RWY 20) — see §7 for displaced-threshold detail |
| Approaches | **ILS CAT III on both runway ends** (RWY 02 — ILI; RWY 20 — ILB); RNAV/PBN STARs via Point Merge System (PMS, in effect since 16 May 2024) |
| RFF category | **CAT 9** 🟩 |
| Control type | **Radar** — Lisboa Approach/Tower on the field; **Lisboa ACC (LPPC)** en route — no dedicated FIR brief in this library, see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (355 ft) — **not** hot-and-high; the defining constraint here is **single-runway capacity + no crosswind runway**, not density altitude |
| Special-airport status | 🟥 **Single-runway, capacity-constrained hub** operating near/above original design capacity (interim cap raised to ~45 movements/hour; forecast ~39M pax by 2030 vs. a field designed for far less); slot scarcity is a reported commercial issue — see §5/§16 |
| Customs / PoE | **Yes** — H24 `[AIP Portugal AD 2 LPPT 2.3]` 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LPPR, LEMD, LEAL** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Field sits at 355 ft on the Tagus estuary coastal plain; no close-in high terrain on the approach/departure paths. Serra de Sintra (~500 m) and Arrábida hills lie well clear of the field — area awareness only. |
| Runway length vs fleet perf | 🟧 | 3,707 m physical length is ample for any K Global type, but **RWY 20's threshold is displaced 499 m** (LDA 3,207 m) and **RWY 02's published departure climb gradient runs up to 6% to 2,000 ft** (obstacle-driven) — both are real planning inputs, not simple non-issues. |
| Approach availability / minima | 🟩 | ILS CAT III on both runway ends — deep low-visibility capability for a single-runway field. |
| Airborne conflict / traffic | 🟥 | Single-runway hub operating at/near capacity; PMS STARs manage the merge but the field has no spare runway capacity for a disruption. |
| Weather / seasonal hazard | 🟥 | Atlantic frontal passages (autumn–winter) bring cross/shifting wind and **windshear** that historically justified keeping the now-closed 17/35 crosswind runway available 3–4 months of the year — that mitigation no longer exists. |
| Curfew / slots / hours | 🟥 | Hard **night curfew 00:00–06:00** with noise-class-tiered exceptions and a movement cap; capacity-driven slot scarcity reported industry-wide — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 9 — adequate for any K Global type. |
| Fuel availability | 🟩 | Jet A-1, fuelling H24 `[AIP Portugal AD 2 LPPT 2.3]`. |
| Customs / handling / security | 🟩 | H24 confirmed for customs, handling and security in the AIP; exact terminal/stand assignment for a given operation is tier-4 sourced only — see §13/§18. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LPPT sits at 355 ft AMSL on the flat Tagus estuary coastal plain. There is no close-in high terrain relevant to arrival, departure or missed-approach paths — Serra de Sintra (~500 m, NW) and the Arrábida range (S, across the estuary) are area features only, not approach-path hazards. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟥
LPPT is a **single-runway hub** handling international, domestic and connecting traffic for a network well beyond the field's original design capacity — passenger forecasts run to ~39 million by 2030 against an airport built for a fraction of that. The Portuguese government has raised the interim movement cap to roughly 45/hour, and the field has adopted a **Point Merge System (PMS)** for RNAV STARs (effective 16 May 2024) to manage arrival sequencing efficiently into the single runway. With no second runway, any weather, technical or ATC disruption compresses directly into extended holding/vectoring — brief for sequencing delay as routine, not exceptional.

### 3.3 Runway excursion 🟧
Both declared-distance sets carry meaningful displaced thresholds: **RWY 02 is displaced 90 m** (LDA 3,617 m) and **RWY 20 is displaced 499 m** (LDA 3,207 m) — the RWY 20 displacement in particular is a large bite out of the physical 3,707 m length. Neither is limiting for K Global types at typical landing weights, but do not assume full-length distance is available on either runway. With the historic crosswind runway (17/35) now closed and repurposed for taxi/parking, RWY 02/20 must absorb all crosswind conditions — see §3.4.

### 3.4 Weather threat 🟥
Lisbon's Atlantic-facing coastal position means autumn–winter frontal passages bring shifting/gusting wind and **windshear** events. Historically, the second runway (17/35) provided a genuine crosswind alternative used roughly 3–4 months of the year specifically for wind-shear-driven safety reasons; **that runway is now permanently closed** or repurposed as taxi/parking area, meaning RWY 02/20 must be flown through the full range of seasonal wind conditions with no crosswind option. Brief crosswind/gust performance conservatively in the autumn–winter window. See §14.

### 3.5 Operational considerations 🟥
Three durable planning constraints: (1) the **single-runway capacity ceiling** — LPPT is widely reported as operating above its designed capacity, with real commercial slot scarcity (business-aviation operators have been publicly reported as shut out of slots in 2025); (2) **RWY 02's obstacle-driven departure climb gradient (up to 6% to 2,000 ft)**, a genuine performance planning input, not a formality; and (3) a long-range network note — a **replacement Lisbon airport (Luís de Camões, at Alcochete)** is confirmed for construction with a target opening in the mid-2030s, at which point LPPT is planned to close. None of this changes today's planning, but it explains why this field runs tight.

---

## 4. Cautions & Warnings

- **No crosswind runway remains** — 17/35 is permanently closed/repurposed; RWY 02/20 absorbs all wind conditions, including autumn–winter windshear events that historically required the crosswind runway.
- **RWY 20 threshold is displaced 499 m** (LDA 3,207 m vs. 3,707 m physical) — do not assume full-length distance; verify against current AIRAC before any performance-limited planning.
- **RWY 02 departure climb gradient up to 6% to 2,000 ft** (obstacle-driven, ATIS-notified) — a real performance-planning input, not boilerplate.
- **RWY 02 missed-approach climb gradient up to 3.5% to 2,000 ft** — brief the go-around performance case accordingly.
- **Hard night curfew 00:00–06:00** with noise-class-tiered exceptions (see §12) — a late-day schedule slip has real diversion/permit consequences.
- **Field operates at/near capacity** — expect holding/sequencing pressure as routine on a single runway serving a fast-growing network; PMS STARs (effective 16 May 2024) are the current mitigation.
- **Instrument-approach training/instruction into LPPT is generally not permitted** due to traffic demand (exceptions only via APP-supervisor coordination) — do not plan a training approach here.
- Mag variation is sourced to the 2020 AIP epoch — treat the exact current value as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **single-runway/no-crosswind-runway environment** and the **RWY 02 obstacle climb gradient**. 🟧
- **Crew-qualification gate:** CAT II/III currency required to exploit the field's full low-visibility capability; confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** Hard night curfew 00:00–06:00 (§6/§12); instrument-approach training generally not permitted (traffic demand); no RNP AR restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. Slot coordination is reported industry-wide as tight at this field — exact IATA coordination level not confirmed in the reachable AD 2 extract. 🟧
- **Operations notes:** ANSP/airport operator — **ANA Aeroportos de Portugal, SA**; all traffic entering the CTR must contact Approach frequency; helicopter movements handled separately at the RWY 02/20 × TWY T intersection.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (through Airport Duty Manager) | 🟩 |
| Night / curfew restrictions | **Landing/takeoff forbidden by law 00:00–06:00** except force majeure; night movement cap **26/day, 91/week**; noise-class-tiered exceptions (Level 4 no scheduled night takeoff; Levels 8/16 barred from night scheduling entirely; Level 2 may operate 00:00–00:30 and from 05:00; Levels 0/0.5/1 unrestricted) | 🟥 |
| RFF category | CAT 9 | 🟩 |
| Fuel | Jet A-1, fuelling H24 | 🟩 |
| PCN | Runway PCN 200/F/A/W/T; apron PCNs vary 74–139 by stand group — see §13 | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | H24 handling confirmed; specific handling agent(s) for our operation not confirmed 🟧 | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 02 | 3,707 × 45 m | Asphalt / PCN 200/F/A/W/T | 3,707 m | 3,807 m | 3,707 m | 3,617 m | THR permanently displaced 90 m; slope 1% |
| 02 (from TWY M5) | — | — | 3,707 m | 3,807 m | 3,707 m | — | Intersection take-off |
| 02 (from TWY N2) | — | — | 3,631 m | 3,731 m | 3,631 m | — | Intersection take-off |
| 02 (from TWY P) | — | — | 3,007 m | 3,107 m | 3,007 m | — | Intersection take-off |
| 20 | 3,707 × 45 m | Asphalt / PCN 200/F/A/W/T | 3,707 m | 3,807 m | 3,707 m | 3,207 m | THR permanently displaced **499 m** (large bite out of physical length); slope 1% |
| 20 (from TWY S4) | — | — | 3,707 m | 3,807 m | 3,707 m | — | Intersection take-off |
| 20 (from TWY U5) | — | — | 2,412 m | 2,512 m | 2,412 m | — | Intersection take-off, **except heavy jets** |

*Strip 3,827 × 300 m; RESA 240 × 90 m both ends; CWY 100 × 300 m both ends; OFZ established. Source: AIP Portugal, AD 2 LPPT 2.12/2.13, eff. 11 Jun 2026. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Lisboa Information | 124.155 (arrivals) / 121.955 (departures) | H24 | |
| Delivery | Lisboa Delivery | 118.955 / 118.505 | Broadcast by ATIS | |
| Ground | Lisboa Ground | 121.755 / 118.505 | 07:00–23:00 (06:00–22:00) | |
| Tower | Lisboa Tower | 118.105 / 118.505 / 279.000 / 121.500 / 243.000 | Mixed H24/HX | Multiple positions — take assigned frequency |
| Approach | Lisboa Approach | 119.105 / 119.555 / 120.355 / 233.975 / 363.300 | H24 | |
| Approach (Control/Arrival) | Lisboa Control / Lisboa Arrival | 123.980 / 119.555 / 120.355 / 282.700 / 233.975 · 125.130 / 119.555 / 120.355 | HO | Sector-specific — take assigned frequency |
| Centre / FIR | Lisboa ACC (LPPC) | Per current AIRAC | H24 | See [Europe airspace briefing](../../../../airspace/europe.md) — no dedicated FIR brief exists in this library 🟧 |

*Source: AIP Portugal, AD 2 LPPT 2.17/2.18, eff. 11 Jun 2026. "HO" hours not spelled out numerically in the reachable extract — treat as 🟧 pending live cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | LIS | 114.800 / CH95X | H24 | On field |
| NDB | LAR | 382 kHz | H24 | ~area locator |
| ILS RWY 02 | ILI (LOC) | 109.100 | H24 | **CAT III/E/4**; GP 331.400; DME CH28X; MM 75 MHz at 0.57 NM from THR |
| ILS RWY 20 | ILB (LOC) | 109.500 | H24 | **CAT III/E/4**; GP 332.600; DME CH32X; OM 75 MHz at 3.95 NM from THR |

*Source: AIP Portugal, AD 2 LPPT 2.19, eff. 11 Jun 2026.*

---

## 10. Arrival

- **Transition altitude / level:** TA **4,000 ft**; TL by QNH — not published as a fixed value in the reachable AIP text, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm).
- **Preferential runway logic:** Wind-dependent between 02- and 20-configurations; no crosswind runway option remains (§3.4) — expect the assigned configuration to hold through a frontal passage rather than switch to a reciprocal for crosswind relief.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 02 | ILS (ILI) | Per PMS merge PESEX | — | CAT III |
| 20 | ILS (ILB) | Per PMS merge UPKAT | — | CAT III |

- **STARs (names only):** RNAV STARs using **Point Merge System (PMS)** — merge point **PESEX** feeds RWY 02, **UPKAT** feeds RWY 20 (effective 16 May 2024); descend via Mach transition to 280 KIAS on the STAR. Verify current-AIRAC names.
- **LVP:** RWY 20 trigger — RVR TDZ ≤550 m or cloud base ≤200 ft; RWY 02 trigger — RVR TDZ ≤800 m or cloud base ≤200 ft.
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative concern is re-sequencing into a capacity-constrained single-runway environment with no parallel to absorb the go-around.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV SIDs based on RNAV 1 for equipped aircraft; radar vectoring/DCT for non-RNAV aircraft. Verify current-AIRAC SID names.
- **RNP / climb-gradient requirements:** 🟥 **RWY 02 departure climb gradient up to 6% to 2,000 ft** (obstacle-driven, ATIS-notified) — verify the exact figure and equipment/performance implication on the current chart before planning a RWY 02 departure at weight. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Ground/Apron-coordinated; cross-bleed/APU notification procedure not confirmed locally. 🟧
- **ATC slot / CTOT & clearance:** Field is reported as capacity-constrained with real slot scarcity; EUROCONTROL Network Manager ATFM/CTOT regulation is a reasonable expectation for a congested EU hub, not independently LPPT-sourced this pass. 🟧
- **De-icing:** **Not available** — consistent with the mild Atlantic-coastal climate; not a Lisbon planning factor.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Visual approach from the south — descend over the river, align before overflying the city (RWY 02) or fly left downwind over the sea until aligned (RWY 20). From the north, RWY 20 has no restriction; RWY 02 flies a left-hand traffic circuit. Final approach angle must be ≥3° per PAPI; flat approaches with high thrust at low altitude are prohibited.
- **Night noise / dB limits:** Noise classes by EPNdB — Level 0 (<87), 0.5 (87–89.9), 1 (90–92.9), 2 (93–95.9), 4 (96–98.9), 8 (99–101.9), 16 (>101.9). Level 4 cannot take off at night on a scheduled service; Levels 8/16 cannot be scheduled for the night period at all; Level 2 may depart 00:00–00:30 or from 05:00; Levels 0/0.5/1 unrestricted.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** **Reverse thrust is forbidden immediately after a night landing.**

---

## 13. Ground operations

- **Stands for our types:** Wingspan-restricted stand notes exist by apron — e.g. **Apron 50** accepts wingspan >65 m only via TWY M2, **Apron 14** accepts wingspan >58 m with reduced 4.5 m clearance; "some areas not currently available for Code F movements" is noted for towing procedures. No single code-letter-by-stand summary table found. 🟧
- **Push-back:** Not individually confirmed for stand-by-stand mandatory-vs-self-manoeuvre policy. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; stop bars exist at all CAT II/III RWY 02/20 holding positions and named taxiways (A1–A6, G2, H1, H3, H4, M2–M4, N1, Q1, Q2, S3, T1–T6, U2–U4, W3); runway-incursion microwave alarm sensors are fitted at CAT II/III holding positions on TWY A6, A7, H1, H3, H4, M5, N2, P, S3, T5, T6, U5, U6.
- **Hot spots / tight taxiways:** 🟧 Areas not visible from the Tower include Apron 10/11 stands 104–108 and 114–117, and various stands/taxiways/taxilanes across Aprons 20/30/40/41/42/50 (TWY M3, M4, L1, L2, V, N1, Z2, taxilanes Z1, Z3, A1) — brief extra vigilance in these areas.
- **Follow-me:** Availability not confirmed in reachable source. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Atlantic-coastal climate on the Tagus estuary; summer "Nortada" (persistent NW–N wind) is the dominant summer pattern.
- **Seasonal hazards:** Autumn–winter Atlantic frontal passages bring shifting/gusting wind and **windshear** events — historically the reason a crosswind runway (17/35) was kept available roughly 3–4 months of the year; that runway is now closed, so RWY 02/20 must be flown through the full range of seasonal wind conditions. Occasional Saharan dust reduces visibility (nuisance-level, not a cruise/approach hazard).
- **Local effects:** Estuary/coastal wind effects are the standout local factor; no significant terrain-wind interaction at the field itself.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, current ATFM/CTOT status, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — **not** a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**LPPR**](../lppr/index.md) (Porto), [**LEMD**](../../spain/lemd/index.md) (Madrid), [**LEAL**](../../spain/leal/index.md) (Alicante) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1, fuelling confirmed H24. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting for any K Global type on the 3,707 m runway; **RWY 02's 6% obstacle climb gradient** is the one real performance-planning input at weight. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty for any K Global type at LPPT. The one type-relevant consideration is confirming climb performance against **RWY 02's obstacle-driven departure gradient (up to 6% to 2,000 ft)** at high weight — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Transition level** — not published as a fixed value in reachable text; only TA (4,000 ft) confirmed.
- **Take-off minima / RVR figures** — not tabulated in the reachable AD 2 extract.
- **Slot-coordination level (IATA Level)** — capacity constraints and reported slot scarcity are well corroborated publicly, but the exact coordination level/coordinator was not found in the reachable AD 2 text.
- **Stand-by-code-letter map and push-back policy** — wingspan notes exist per apron but no single summary table found.
- **Handling agent(s) for our operation and confirmed turnaround times** — not individually confirmed.
- **Terminal structure (T1/T2) and gate assignment for our operation** — sourced only to tier-4 travel-guide material, not the AD 2 text; see Dispatch page.
- **ATC frequency "HO" hours** — not spelled out numerically in the reachable extract.
- **Mag variation current-day value** — sourced to the 2020 AIP epoch.
- **New Lisbon airport (Luís de Camões, Alcochete) timeline** — publicly reported target mid-2030s; monitor for schedule/impact updates as the date approaches.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Portugal (NAV Portugal eAIP), AD 2 LPPT**, valid from 11 Jun 2026 — https://ais.nav.pt/wp-content/uploads/AIS_Files/eAIP_Current/eAIP_Online/eAIP/html/eAIP/LP-AD-2.LPPT-en-PT.html (retrieved 2026-07-26). *ARP/elevation, runway/declared distances, communications, navaids, curfew/noise regulations, PMS STAR procedure.*
- OurAirports — https://ourairports.com/airports/LPPT/ (retrieved 2026-07-26). *Cross-check.*
- Infinite Flight Community / The Portugal News — RWY 17/35 closure reporting, e.g. https://www.theportugalnews.com/news/pilots-concerned-with-possible-closure-of-a-lisbon-airport-runway/41105 (retrieved 2026-07-26). *17/35 closure corroboration — tier-4, not AIP-grade.*
- Centre for Aviation (CAPA) — New Lisbon Airport (Luís de Camões, Alcochete) project reporting, https://centreforaviation.com/news/portuguese-government-decides-to-build-new-lisbon-airport-at-campo-de-tiro-de-alcochete-1263579 (retrieved 2026-07-26). *Replacement-airport timeline corroboration.*
- Aviation International News — "Slot Shortfall Shuts Business Jets Out of Portugal Lisbon Airport," 2025-11-10 — https://www.ainonline.com/aviation-news/business-aviation/2025-11-10/slot-shortfall-shuts-business-jets-out-lisbon-airport (retrieved 2026-07-26). *Slot-scarcity corroboration — tier-4.*
- VATSIM Forum — "New Procedures: Point Merge System at LPPT (WEF 16MAY2024)" — https://forum.vatsim.net/t/new-procedures-point-merge-system-at-lppt-wef-16may2024/5595 (retrieved 2026-07-26). *PMS STAR procedure corroboration — network-sim source, not regulatory.*
- Portugal vACC — https://portugal-vacc.org/ (retrieved 2026-07-26). *VATSIM division covering Lisboa/Santa Maria FIRs — network-sim source, not regulatory; operational content (PMS, runway configuration) cross-checked against the AIP text above.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Portugal (NAV); K Global fields from live VAMSYS; 4-page pack. |
