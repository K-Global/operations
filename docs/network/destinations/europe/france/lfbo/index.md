# LFBO — Toulouse-Blagnac · Airport Briefing

**LFBO / TLS** · Blagnac (Toulouse), Haute-Garonne, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP France, AD 2 LFBO, admin data cycle AIRAC AMDT 06/25, noise-abatement section eff. 12 JUN 2025, runway/declared-distance pages eff. 28 DEC 2023) plus public cross-checks; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 43°38'06"N / 001°22'04"E (Tower) `[SIA eAIP AD 2 LFBO.2]` |
| Field elevation | **499 ft AMSL** (reference temperature 27°C; geoid undulation 160 ft) |
| Mag variation | **1.6594° E** (2025 epoch, annual change +0.121°) |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **14L/32R** 3,025 × 45 m (bituminous concrete, PCN 60 F/A/W/T) · **14R/32L** 3,503 × 45 m (bituminous concrete, PCN 85 F/B/W/U) |
| Preferential runway | Config/wind-dependent; **RWY 14R carries the field's CAT III ILS** and is the mandated night-hours runway (§6/§11/§12) |
| Longest LDA | 3,503 m (14R/32L) |
| Approaches | **ILS CAT III on RWY 14R** (LOC "TBS" 110.7) · ILS on 32L ("TBN" 109.3), 32R ("TD" 108.35), 14L ("TG" 108.9) — sub-categories not confirmed for the latter three 🟧 |
| RFF category | **CAT 9** (modulated to level 7 per NOTAM/schedule; level 9 on 7-day PPR) 🟩 |
| Control type | **Radar** — Blagnac/Toulouse Approche (DSNA) and Blagnac Tour on the field; **Bordeaux ACC (LFBB)** en route — no dedicated OM C FIR brief yet, see [Europe Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level equivalent (499 ft) — **not** hot-and-high |
| Special-airport status | 🟥 **Hard noise curfew (turbofan aircraft, chapter/margin-graduated, 2200–0600)**; Code F (A380/AN124/B747-8/B777-300) ground-movement and LVP-departure restrictions — see §5/§12 |
| Customs / PoE | **Yes** — H24 `[SIA eAIP AD 2 LFBO.3]` |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LFML, LEMD, LEBL** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Garonne-valley plain; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | 3,503 m (14R/32L) is ample for any K Global Category R type; 3,025 m (14L/32R) is likewise non-limiting. |
| Approach availability / minima | 🟩 | CAT III on 14R gives strong low-vis capability; the other three runway ends carry ILS of unconfirmed sub-category — see §9. |
| Airspace / traffic / control | 🟩 | Radar environment (Blagnac/Toulouse Approche, DSNA); significant Airbus manufacturing/test traffic shares the field — see §3.2. |
| Weather / seasonal hazard | 🟧 | No LFBO-specific fog/convective frequency statistic found this pass — treat as general SW-France climatology pending confirmation. |
| Curfew / slots / hours | 🟥 | **Hard noise curfew**: no non-Chapter 3/4/14-compliant turbofan aircraft may operate at LFBO at all; graduated restrictions further limit lower-margin Chapter 3 aircraft between 2200–0600 — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 9 — comfortably above any K Global fleet requirement. |
| Fuel availability | 🟧 | Fuel supplier/hours not confirmed in the reachable extract this pass. |
| Customs / handling / security | 🟩 | H24 customs/immigration confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFBO sits at 499 ft AMSL on the Garonne-valley plain near Toulouse — no close-in high terrain relevant to any arrival, departure or missed-approach path was identified in the reachable extract. Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟥
LFBO is a significant **Airbus manufacturing and flight-test centre** in addition to its commercial-airline role — the AIP carries specific provisions for Code F (A380/An-124/B747-8/B777-300, wingspan > 65 m) ground movements, a manufacturer-reserved taxiway (P101, Airbus A380 activity only) and a dedicated remote stand (D51) for Code F parking. Expect mixed commercial/test-flight traffic patterns and confirm ground routing carefully around Code F movements. Cross-ref [Europe Airspace Briefing](../../../../airspace/europe.md); a dedicated **Bordeaux (LFBB) ACC/FIR brief does not yet exist in OM C** — flagged for future build. 🟧

### 3.3 Runway excursion 🟩
No displaced thresholds identified on either runway pair in the reachable extract; declared distances are essentially full-length on all four runway ends (TODA slightly exceeds TORA/ASDA via a modest clearway on each). Not independently re-confirmed against current AIRAC. 🟧

### 3.4 Weather threat 🟧
No LFBO-specific fog/convective-frequency statistic was found in the reachable extract — treat as general South-West France climatology (Atlantic-influenced, occasional winter fog/low-stratus, summer convective activity) pending confirmation. See §14.

### 3.5 Operational considerations 🟥
Plan around four durable items: (1) a **hard noise-abatement regime** — no non-Chapter 3/4/14-compliant turbofan may operate at all, and lower-cumulative-margin Chapter 3 aircraft face further graduated night-hour restrictions (§12); (2) a **specific night-hours runway-use rule** funnelling RWY 14-configuration take-offs and landings onto **RWY 14R only** between 2200–0600 (§11); (3) **Code F ground-movement and LVP-departure restrictions** tied to taxiway P101 and stand D51 (§13); and (4) a **Push-and-Hold procedure** available for CTOT management via coordinated remote stands, requiring 72 h prior notice to the airport operator.

---

## 4. Cautions & Warnings

- **Hard noise curfew** — no aircraft with turbofan engines that do not comply with ICAO Annex 16 Vol. I Chapter 3/4/14 may land or leave its stand for take-off at LFBO **between 2200 and 0600 local**, full stop; graduated cumulative-margin restrictions further limit marginal Chapter 3 aircraft in the 2200–0000 and 0000–0600 windows (see §12). Non-compliance risks an ACNUSA fine of up to €40,000 for a legal entity.
- **Night RWY-use rule:** in the RWY 14 configuration, **take-offs and landings between 2200–0600 are restricted to RWY 14R only** (with specific taxiway-entry constraints by time window) — see §11.
- **Code F aircraft (A380/An-124/B747-8/B777-300) cannot depart in LVP conditions** — taxiway P101 (needed for Code F ground movement) is unusable in LVP except for manufacturer (Airbus) activity; Code F **arrivals** in LVP are permitted with ATC-specified routing.
- **RWY 14R must be vacated at its extremity via TWY M2 under LVP** — TWY M4 is usable only on specific ATC clearance in that regime.
- **Push-back clearance / half-turn restrictions:** half-turns on taxiways/runways are prohibited for turbojets > 24 m wingspan and turboprops > 36 m wingspan (pilot-responsibility only where unmarked); TWY P10 is clearstrip-limited to 84 m — taxiing under captain's responsibility for 52–65 m wingspan, forbidden ≥ 65 m except manufacturer activity.
- **Engine test ground-runs are prohibited between 2200–0600** and are restricted to the "Bikini" run-up area or the protected pad at the St Martin Lagardère site.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing crew-briefing items are the **hard noise curfew** and the **Code F/LVP ground-movement restrictions**. 🟥
- **Crew-qualification gate:** CAT III currency required for a low-visibility RWY 14R arrival/departure. 🟧
- **Operating restrictions / bans:** No non-Chapter 3/4/14-compliant turbofan may operate at LFBO at all; graduated night restrictions on lower-margin Chapter 3 aircraft (§12); night RWY-use funnels traffic to 14R only (§11); Code F departures banned under LVP; no RNP AR ban or circling restriction found in the reachable extract otherwise — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen operation; no special state permit required. 🟩
- **Operations notes:** ANSP — **DSNA**; airport operator — **ATB** (Aéroport Toulouse-Blagnac); mandatory-handling-adjacent environment given significant Airbus manufacturing/test-flight co-location.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 (administration, customs, health, ATS) | 🟩 |
| Night / curfew restrictions | **Hard noise curfew 2200–0600** (Chapter 3/4/14-graduated, see §12); night RWY-use restricted to 14R only (see §11) | 🟥 |
| RFF category | **CAT 9**, modulated to level 7 per NOTAM/schedule; level 9 available on 7-day PPR (contact +33 (0)5 61 42 45 05) | 🟩 |
| Fuel | Not confirmed in reachable extract — verify locally | 🟧 |
| PCN | 14L/32R: 60 F/A/W/T · 14R/32L: 85 F/B/W/U (bituminous concrete both) | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Not individually confirmed in reachable extract — verify locally | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 14L | 3,025 × 45 m | Bituminous concrete / PCN 60 F/A/W/T | 3,025 m | 3,125 m | 3,025 m | 3,025 m | |
| 32R | 3,025 × 45 m | Bituminous concrete / PCN 60 F/A/W/T | 3,025 m | 3,125 m | 3,025 m | 3,025 m | |
| 14R | 3,503 × 45 m | Bituminous concrete / PCN 85 F/B/W/U | 3,503 m | 3,563 m | 3,503 m | 3,503 m | Field's CAT III direction; night-hours mandated runway (§11) |
| 32L | 3,503 × 45 m | Bituminous concrete / PCN 85 F/B/W/U | 3,503 m | 3,593 m | 3,503 m | 3,503 m | |

*Source: SIA France eAIP, AD 2 LFBO.12/.13, cycle eff. 28 DEC 2023 (physical/declared-distance pages) — treat exact current-cycle figures as stable given no runway reconstruction identified, but not independently re-confirmed against the very latest AIRAC. Intersection take-offs are published from several taxiways (M10/S10 on 14R; M4/S4 on 32L) — confirm exact intersection distance with ATC/Ground before use. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Toulouse/Blagnac | 123.125 (tier-4 cross-check) 🟧 | H24 | Official comm table lists a 123.130 "DEP and ARR parameters broadcasting" service — exact ATIS frequency not fully reconciled this pass |
| FIS | Toulouse Information | 121.250 · 123.930 | H24 | VFR assistance in SIV Toulouse |
| Delivery/Prevol | Blagnac Prevol | 121.705 | H24 | For non-8.33 kHz-equipped aircraft — see AD 2 LFBO.23 |
| Ground | Blagnac Sol | 121.900 | H24 | |
| Tower | Blagnac Tour | 118.100 | H24 | |
| Approach | Blagnac Approche | 121.105 | H24 | |
| Approach | Toulouse Approche | 120.355 (sector EB) · 123.850 (auxiliary) · 124.975 · 125.180 · 129.305 | H24 | Sector-specific — take the assigned frequency |
| VDF (homer) | Toulouse Gonio | 118.100 / 120.350 / 121.250 / 123.850 / 125.175 / 129.300 | H24 | |
| Centre / FIR | **Bordeaux ACC (LFBB)** | Per current AIRAC | H24 | No dedicated OM C brief yet — see [Europe Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: SIA France eAIP, AD 2 LFBO.18, cycle AMDT 06/25.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | TOU | 117.7 (CH 124X) | H24 | On field |
| NDB | TL | 368 kHz | H24 | |
| NDB | TOE | 415 kHz | H24 | |
| NDB | TS | 423 kHz | HX | ~8.4 NM from THR 32L |
| NDB | TW | 406 kHz | HX | ~16 NM from THR 32L |
| ILS 14L | TG | 108.9 | H24 | Sub-category not confirmed 🟧 |
| ILS 32R | TD | 108.35 | H24 | Sub-category not confirmed 🟧 |
| ILS 14R | TBS | 110.7 | HX | **CAT III** |
| ILS 32L | TBN | 109.3 | HX | Sub-category not confirmed 🟧 |

*Source: SIA France eAIP, AD 2 LFBO.19, AMDT-cycle extract retrieved 2026-07-26.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed from a primary table this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override.
- **Preferential runway logic:** Config/wind-dependent; RWY 14R (CAT III) is the field's primary low-vis/precision direction and the mandated runway for night-hours operations (§11). Visual approaches must join the runway track per the field's specific arrangements — not individually confirmed this pass.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 14L | ILS (TG) | Sub-category not confirmed |
| 32R | ILS (TD) | Sub-category not confirmed |
| 14R | ILS CAT III (TBS) | Field's precision/night-mandated direction |
| 32L | ILS (TBN) | Sub-category not confirmed |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** RWY 14R must be vacated at its extremity via TWY M2; TWY M4 usable only on specific ATC clearance; exact RVR/ceiling trigger not confirmed for LFBO this pass (a comparable regional field, LFBZ, uses RVR ≤ 550 m / ceiling ≤ 200 ft — treat as indicative only). 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat valley plain); the operative concern is re-sequencing in a mixed commercial/Airbus-test traffic environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed for LFBO this pass — verify per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Night RWY-use rule (RWY 14 configuration):** Between **2200–0600 local**, take-offs are restricted to **RWY 14R only** — from TWY M10, S10 or the threshold between 2200–0000, and from the threshold only between 0000–0600; landings are likewise restricted to **RWY 14R only**. No stand-leave for take-off is permitted before 0600 for a flight scheduled at/after 0600. The equivalent RWY 32-configuration night rule was not captured in this research pass — confirm against current AIRAC. 🟧
- **Start-up / push-back:** Standard departure-clearance process; non-8.33 kHz-equipped aircraft use the **Blagnac Prevol** frequency (121.705). **Push-and-Hold procedure** available for CTOT management at stands A20/B20, A22/B22 or Romeo — requires 72 h prior coordination with the airport operator (superviseur-APOC@toulouse.aeroport.fr); not applicable at night without a marshaller, not applicable in LVP, and not applicable when parking is saturated.
- **ATC slot / CTOT & clearance:** No slot-coordination level confirmed in the reachable extract — EUROCONTROL Network Manager ATFM/CTOT applies as general practice; the Push-and-Hold procedure exists specifically to manage CTOT holds. 🟧
- **De-icing:** Not confirmed in the reachable extract this pass — verify locally. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **No aircraft fitted with turbofan engines not certified to Chapter 3, 4 or 14** (with MTOW ≥ 34,000 kg or a certified passenger configuration > 19 seats) **may be operated at LFBO at all.** Additionally: no non-compliant turbofan aircraft may land or leave its stand for take-off **between 2200–0600 local**; a Chapter-3-compliant aircraft with a **cumulative margin < 10 EPNdB** may not land or leave its stand **between 2200–0000**; a Chapter-3-compliant aircraft with a cumulative margin **< 13 EPNdB** may not land or leave its stand **between 0000–0600**. Exemptions exist for medical/humanitarian, emergency, French-Transport-Code-Article-L6100-2 and government flights; the pilot-in-command may waive only for flight-safety reasons. Non-compliance risks an ACNUSA administrative fine up to €40,000 for a legal entity.
- **Night noise / dB limits:** Governed through the Chapter/margin-graduated regime above rather than a simple per-movement dB limit.
- **Engine run-up restrictions:** Engine tests (> 5 min running, or above start-up/taxi power) are **prohibited 2200–0600** and restricted to the "Bikini" run-up area or the protected pad at St Martin Lagardère.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧
- **APU restrictions:** Section 21.3-equivalent restrictions exist (definitions/exemptions mirror the medical/emergency/state/perishable-cargo carve-outs seen at other French fields); exact time-window figures not confirmed this pass. 🟧
- **Noise-abatement departure:** Turbofan aircraft off **RWY 32R and 32L fly ICAO NADP1**. All IFR/VFR flights must comply with published noise-abatement procedures; **overflight of the hospital of Purpan is prohibited at all times.**

---

## 13. Ground operations

- **Stands for our types:** Not individually detailed for K Global Category R operations in the reachable extract. 🟧
- **Push-back:** Half-turns on taxiways/runways prohibited for turbojets > 24 m wingspan and turboprops > 36 m wingspan (pilot-responsibility where unmarked). TWY P10 clearstrip-limited to 84 m — captain's-responsibility taxi for 52–65 m wingspan, forbidden ≥ 65 m except manufacturer activity.
- **Standard taxi routes:** Confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 **Code F ground movements** (A380/An-124/B747-8/B777-300, wingspan > 65 m) are confined to taxiways specified on the field's GMC 04 chart; **TWY P101 is Airbus-A380-manufacturer-activity only**; Code F parking is at stand **D51** (other stands require ADOP coordination). Under LVP, RWY 14R must be vacated via **TWY M2** only, and **TWY M4** requires a specific ATC clearance.
- **Follow-me:** Not individually confirmed in the reachable extract for standard commercial stands — Code F arrivals under LVP receive controller-specified ground-movement routing.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Garonne-valley plain, South-West France; Atlantic-influenced with some continental modification — no LFBO-specific prevailing-wind statistic confirmed this pass.
- **Seasonal hazards:** No field-specific fog/convective-frequency statistic identified — treat as general South-West France climatology (occasional winter fog/low-stratus, summer convective activity) pending confirmation. 🟧
- **Local effects:** No notable terrain/sea-breeze effect identified at this inland, flat-terrain field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. TWY P101/M2/M4 status under LVP), navaid U/S, ILS CAT III (14R) status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current Push-and-Hold stand availability. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Category R destination/enroute field within the K Global network (not a base).
- **Nearest suitable alternates:** Company preferred alternates **LFML** ([Marseille-Provence](../lfml/index.md)), **LEMD** ([Madrid-Barajas](../../spain/lemd/index.md)), **LEBL** ([Barcelona–El Prat](../../spain/lebl/index.md)) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Supplier/hours not confirmed in the reachable extract — verify locally before planning an uplift at this field. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for K Global Category R operations on either runway pair (3,025 m / 3,503 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No LFBO-specific type consideration beyond the general noise curfew and Code F/LVP ground-movement restrictions (§12/§13), which are not expected to affect standard K Global Category R equipment. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **ATIS frequency** — official comm table shows a 123.130 "DEP/ARR parameters broadcasting" service; a tier-4 aggregator lists 123.125 as ATIS — not reconciled.
- **RWY 32-configuration night-hours use rule** — only the RWY 14-configuration rule was captured this pass.
- **Fuel supplier(s) and hours, handling agent(s)** — not confirmed in reachable sources.
- **Transition altitude/level, take-off minima, LVP RVR/ceiling trigger, ILS sub-category on 14L/32R/32L.**
- **Reverse-thrust/idle-reverse policy, APU restriction exact time windows, follow-me availability.**
- **Bordeaux (LFBB) ACC/FIR brief** — does not yet exist in OM C Airspace; this field currently links only to the general [Europe Airspace Briefing](../../../../airspace/europe.md).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP, AD 2 LFBO** (AD 2.1–2.21), mirrored via the French Air Force DIRCAM MIAC1 civil/military AIP compilation, admin-data cycle AMDT 06/25, noise-abatement section eff. 12 JUN 2025, runway/declared-distance pages eff. 28 DEC 2023 — https://www.dircam.dsae.defense.gouv.fr/images/Stories/Doc/MIAC1/miac1_toulouse_blagnac_lfbo.pdf (retrieved 2026-07-26). *Primary source for ARP, elevation, mag var, runways/declared distances, RFF, communications, navaids, local traffic regulations (LVP/Code F/Push-and-Hold), noise abatement.*
- Yinlei.org Airport Charts Service — https://yinlei.org/eaip-download-service/public/airports/LFBO?lang=en (retrieved 2026-07-26). *Tier-4 cross-check for frequencies/navaids; ATIS frequency discrepancy noted in §18.*
- OurAirports — https://ourairports.com/airports/LFBO/ (retrieved 2026-07-26). *Cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
