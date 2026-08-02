# OEGS — Qassim / Prince Naif Bin Abdulaziz · Airport Briefing

**OEGS / ELQ** · Buraidah, Al-Qassim Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Saudi AIP (SANS eAIP, AD 2 OEGS) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N26°18′10.0″ / E043°46′27.0″ (26.3028, 43.7742) `[AIP AD 2 OEGS 2.2]` — 25 km W of Buraidah |
| Field elevation | **2,126 ft AMSL** (reference temperature 34°C) |
| Mag variation | 4° E (2020 epoch, 0.05°/yr increasing) |
| Time zone | UTC+3 (AST) — no DST observed |
| Runway(s) | **15/33**, 3,000 × 45 m, asphalt (PCN 67/F/A/W/T) — single runway field |
| Preferential runway | No published preferential rule; standard circuit RWY 15 left-hand / RWY 33 right-hand, visual circuit altitude 3,700 ft MSL |
| Longest LDA | 3,000 m (both ends) |
| Approaches | **ILS CAT I / LOC RWY 15** (IGAS), **VOR RWY 15**, **VOR RWY 33** — **no precision approach on RWY 33** |
| RFF category | **CAT 8** |
| Control type | **Radar/procedural mix** — Gassim Approach and Gassim Tower, Class D CTR |
| Elevation class | **Hot-and-high** — 2,126 ft field elevation combined with a 34°C reference temperature; the **published 6.0% minimum climb gradient** on both runway departures is a direct, quantified consequence 🟥 |
| Special-airport status | 🟥 **Steep minimum-climb-gradient departure (365 ft/NM, 6.0%, up to 5,000 ft) on both runways — "if unable to comply, procedure not authorised."** See §5/§11 |
| Customs / PoE | **Yes** — H24 |
| K Global category | 🟧 **Not in VAMSYS** — pending reconciliation |
| K Global base | 🟧 **Not in VAMSYS** — pending reconciliation |
| Company preferred alternates | 🟧 **Not in VAMSYS** — pending reconciliation; see §16 for geographically nearest fields (computed, not company-assigned) |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Najd plateau — generally flat interior terrain; no close-in high ground identified near the field. |
| Runway length vs fleet perf | 🟧 | 3,000 m at 2,126 ft elevation is workable for narrowbody types but the **6.0% minimum climb gradient** is the binding performance constraint, not runway length — see §5/§11. No K Global fleet assignment exists to validate against (not in VAMSYS). |
| Approach availability / minima | 🟧 | ILS CAT I only on RWY 15; RWY 33 has VOR only — a real minima gap on that direction. |
| Airspace / traffic / control | 🟩 | Class D CTR (10 NM, SFC–4,500 ft), moderate traffic, radar/procedural mix — not a congestion field. |
| Weather / seasonal hazard | 🟧 | Interior Najd-plateau climate; shamal/dust exposure per the regional airspace brief; no field-specific severe-weather statistic sourced this pass. |
| Curfew / slots / hours | 🟩 | No slot regime; ATS/fuelling/handling/security/customs/AIS/MET briefing all published H24. |
| RFF category vs our types | 🟧 | CAT 8 — adequacy against any assigned K Global type not yet validated (no fleet assignment). |
| Fuel availability | 🟧 | Jet A-1, H24 per AIP, tanker-served — specific capacity figures not published (unlike OEGN's tanker table). |
| Customs / handling / security | 🟩 | Customs, immigration, handling, security all published H24. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OEGS sits on the Najd plateau at 2,126 ft AMSL, 25 km west of Buraidah. No close-in high terrain was identified in reachable sources for this interior field — a materially different terrain picture from Hail (Jabal Aja/Salma) or Najran (Asir foothills) elsewhere in this network's Saudi footprint. CFIT is not the operative threat here; the field's defining hazard is performance-related (§3.5), not terrain-related.

### 3.2 Airborne conflict / traffic 🟩
Gassim Approach (Class D CTR, 10 NM radius, SFC–4,500 ft AMSL) and Gassim Tower manage a moderate interior-Saudi traffic volume. No radar-surveillance-coverage caveat or unusual traffic-density note was found. VFR entry gates (East Gate/Buraydah Flagpole, West Gate/Al Shehya Mosque) are AIP-published for VFR flights entering the CTR.

### 3.3 Runway excursion 🟧
No displaced threshold; THR 15 elevation 2,126.40 ft (the field's high point), THR 33 elevation 2,121.63 ft — a shallow ∓0.06% longitudinal grade. SWY and CWY both 300×45 m at each end. PCN 67/F/A/W/T is ample strength for narrowbody types. No contamination-specific note found this pass.

### 3.4 Weather threat 🟧
Interior Najd-plateau climate — hot, dry, with the regional shamal/dust exposure documented in the [Middle East airspace brief](../../../../airspace/middle-east.md) §11 (summer/winter shamal, haboob dust walls, extreme heat/density-altitude). No field-specific thunderstorm-frequency statistic sourced this pass.

### 3.5 Operational considerations 🟥
The field's genuine, AIP-quantified operational threat is **performance, not terrain or weather**: both RWY 15 and RWY 33 departures carry a published **minimum climb gradient of 365 ft/NM (6.0%) to 5,000 ft**, with the explicit AIP caveat *"if unable to comply, procedure not authorised."* Combined with the 2,126 ft field elevation and 34°C reference temperature, this is a real hot-and-high departure-performance case — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and validate against the assigned type's climb-gradient capability before this field is used operationally. Secondary: RWY 33 carries no precision approach (VOR only), a minima-driven runway-selection factor in marginal weather.

---

## 4. Cautions & Warnings

- 🟥 **Both runway departures require a 6.0% (365 ft/NM) minimum climb gradient to 5,000 ft** — AIP-stated as a hard authorisation gate ("if unable to comply, procedure not authorised"). Validate against the assigned aircraft type's all-engine/one-engine-inoperative climb performance at field elevation/temperature before use.
- 🟧 **RWY 33 has no precision approach** — VOR only; RWY 15 carries the field's only ILS.
- 🟧 The field may be used as an alternate for a very heavy type (up to 395 t all-up weight per AIP note) under a dedicated royal-parking/Code-C-apron-sharing rule — an unusual ground-ops constraint if ever relevant.
- 🟩 No obstacle data published (AIP table returns NIL) — standard vigilance still applies pending current-AIRAC confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport," but the **6.0% minimum climb-gradient departure requirement is itself a hard performance gate** — treat functionally as a special-procedure field. 🟥
- **Crew-qualification gate:** None published beyond standard IFR currency and climb-gradient performance validation for the type in use.
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Kingdom of Saudi Arabia entry; no additional state permit found. 🟩
- **Operations notes:** ANSP/regulator — **General Authority of Civil Aviation (GACA)**. Handling per AIP is the national flag-carrier's arm; other agents not confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD administration HS Sun–Thu 05:00–13:00 (0800–1600 LMT); ATS/customs/health/AIS/MET/fuelling/handling/security all published H24 | 🟩 |
| Night / curfew restrictions | None published | 🟩 |
| RFF category | CAT 8 | 🟩 |
| Fuel | Jet A-1, H24, tanker-served (capacity not published) | 🟧 |
| PCN | RWY 67/F/A/W/T; taxiways 65/F/A/W/T; aprons 53/R/A/W/T | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | National flag-carrier handling arm (AIP-listed); others not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 15 | 3,000 × 45 m | Asphalt / PCN 67/F/A/W/T | 3,000 m | 3,300 m | 3,300 m | 3,000 m | THR elev 2,126.40 ft (field high point); ILS CAT I (IGAS) |
| 33 | 3,000 × 45 m | Asphalt / PCN 67/F/A/W/T | 3,000 m | 3,300 m | 3,300 m | 3,000 m | THR elev 2,121.63 ft; **no precision approach** |

*Source: SANS/GACA eAIP, AD 2 OEGS 2.12/2.13. SWY/CWY both 300×45 m at each end. No displaced threshold. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Gassim Information | 128.600 | H24 | D-ATIS available via SITA on request |
| Approach | Gassim APP | 119.150 (DOC 60 NM/15,000 ft) | H24 | Primary frequency |
| Tower | Gassim TWR | 118.000 (DOC 60 NM/15,000 ft) | H24 | 358.800 MIL; guard 121.500/243.000 |
| Ground | Gassim Ground Control | 121.900 (DOC 5 NM/GND) | H24 | |
| Centre / FIR | Jeddah FIR (OEJD) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: SANS/GACA eAIP, AD 2 OEGS 2.18.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 15 | IGAS | 110.100 | H24 | CAT I |
| GP RWY 15 | IGAS | 334.400 | H24 | GPA 3°, RDH 50 ft |
| DME RWY 15 | IGAS | CH38X | H24 | Antenna elevation 2,200 ft |
| VOR/TACAN | GAS | 117.100 (CH118X) | H24 | Mag decl 4° E; antenna elevation 2,200 ft |

*Source: SANS/GACA eAIP, AD 2 OEGS 2.19.*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft; TL by QNH — verify current AIRAC. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 unless otherwise directed.
- **Preferential runway logic:** No published preferential rule; RWY 15 is the only precision-approach direction, a practical driver in marginal weather (§3.5).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 15 | ILS/LOC (IGAS), VOR | — | — | CAT I |
| 33 | VOR | — | — | No precision approach |

- **STARs (names only):** Not confirmed in reachable research pass — pull current-AIRAC arrival routing at planning. 🟧
- **LVP:** Trigger conditions not confirmed this pass. 🟧
- **Missed approach watch-items:** Radio-communication-failure procedure specifies proceeding to the OEGS VOR hold, descending to maintain 6,000 ft, then a procedure turn to establish final — a genuine AIP-published contingency, verify current chart for the live version.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Published RWY 15/RWY 33 departure procedures — climb on runway heading to 5,000 ft, then expect radar vectors to the flight-planned route. **Minimum climb gradient 365 ft/NM (6.0%) up to 5,000 ft is a hard authorisation gate** — "if unable to comply, procedure not authorised." 🟥
- **RNP / climb-gradient requirements:** See above — this is the field's binding performance constraint. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not independently confirmed — coordinate with Ground/Tower. 🟧
- **ATC slot / CTOT & clearance:** No slot regime identified.
- **De-icing:** NIL (not applicable to this climate).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None published beyond the current Instrument Approach Charts reference. 🟧
- **Night noise / dB limits:** None published.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** No K Global stand assignment (not in VAMSYS). Royal Apron and Civil Apron both concrete/asphalt PCN 53/R/A/W/T. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** TWY A/A1/A2, TWY B/B1 (all 26 m, asphalt PCN 65/F/A/W/T).
- **Hot spots / tight taxiways:** None flagged in reachable AIP data. 🟩
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot, dry, interior Najd-plateau climate.
- **Seasonal hazards:** Regional shamal/dust exposure and extreme summer heat/density-altitude per the [Middle East airspace brief](../../../../airspace/middle-east.md) §11 — directly relevant given this field's own 6.0% climb-gradient departure constraint.
- **Local effects:** None field-specific identified beyond the regional pattern.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not assigned (not in VAMSYS). 🟧
- **Nearest suitable alternates (computed from AIP ARP coordinates, not a VAMSYS/company figure):** **OEHL** (Hail, ~131 NM NW); **OERK** (Riyadh/King Khaled Intl, ~178 NM SE) — the nearest major full-service field. 🟧
- **Fuel-uplift notes:** Jet A-1, H24, tanker-served (capacity figure not published). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** No fleet assignment (not in VAMSYS). The **6.0% minimum climb gradient** is the binding performance consideration, not range — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) once a type is assigned.

---

## 17. Fleet-specific notes (optional)

- No K Global fleet/route assignment exists for this field (not in VAMSYS). **Any type assigned here must be validated against the AIP-published 6.0% (365 ft/NM) minimum climb gradient at 2,126 ft field elevation / 34°C reference temperature** before use — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- STARs, exact take-off minima, LVP trigger conditions, engine run-up restriction, reverse-thrust policy, push-back/follow-me availability — none confirmed in reachable sources.
- Handling agent(s) beyond the AIP-listed national-carrier arm — not individually confirmed.
- Fuel-tanker capacity figure — not published (unlike OEGN's tanker table).
- K Global category/base/alternates/taxi-times — pending VAMSYS reconciliation (field is not in VAMSYS at all).
- No dedicated VATSIM vACC/division SOP found for OEGS in this research pass — cross-check when one becomes available.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEGS — Gassim/Prince Naif Bin Abdulaziz**, AIRAC AMDT cycle retrieved (2025-01-02 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEGS%20GASSIM%20-%20PRINCE%20NAIF%20BIN%20ABDULAZIZ-en-GB.html (retrieved 2026-07-26). *Primary source for ARP, elevation, runways/declared distances, RFF, comms, navaids, hours, departure-gradient requirement.*
- OurAirports — https://ourairports.com/airports/OEGS/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- **K Global — [Middle East airspace brief](../../../../airspace/middle-east.md)** (internal companion document, v0.1, 2026-07-25) — regional shamal/dust/heat seasonal context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
