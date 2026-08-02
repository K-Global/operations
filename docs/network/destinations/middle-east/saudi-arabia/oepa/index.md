# OEPA — Al Qaisumah International · Airport Briefing

**OEPA / AQI** · Al Qaisumah / Hafr Al-Batin, Eastern Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Saudi AIP (SANS eAIP, AD 2 OEPA) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). This is the only **uncontrolled** field in this five-field pack — see §2/§5. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N28°20′11.0″ / E046°07′37.0″ (28.3364, 46.1269) `[AIP AD 2 OEPA 2.2]` — 1,525 m SE of THR 16; 3 km N of Qaisumah town |
| Field elevation | **1,175 ft AMSL** (reference temperature 38°C) |
| Mag variation | 4° E (2020 epoch, 0.05°/yr increasing) |
| Time zone | UTC+3 (AST) — no DST observed |
| Runway(s) | **16/34**, 3,050 × 45 m, asphalt (PCN 79/F/A/W/T) — single runway field |
| Preferential runway | No published preferential rule |
| Longest LDA | 3,050 m (both ends) |
| Approaches | **ILS CAT I / LOC RWY 34** (IHFR), **RNP RWY 34**, **VOR RWY 34** · **RWY 16: RNP and VOR only — no precision approach** |
| RFF category | **CAT 7** |
| Control type | 🟥 **Uncontrolled aerodrome** — no ATS unit; **TIBA self-announce procedures** on 122.800 MHz H24; call the Flight [Reporting] Service on 133.500 MHz 15 minutes before arrival |
| Elevation class | Sea-level-adjacent (1,175 ft) — not hot-and-high; the 38°C reference temperature is a standard hot-day performance input |
| Special-airport status | 🟥 **Uncontrolled, PPR required** (3-hour prior notice for non-scheduled flights) **and published operating hours 04:00–20:00 local only** — effectively closed overnight. See §5/§6 |
| Customs / PoE | Limited hours — Sun–Thu 04:00–20:00, not H24 🟧 |
| K Global category | 🟧 **Not in VAMSYS** — pending reconciliation |
| K Global base | 🟧 **Not in VAMSYS** — pending reconciliation |
| Company preferred alternates | 🟧 **Not in VAMSYS** — pending reconciliation; see §16 for geographically nearest fields (computed, not company-assigned) |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Eastern-Province desert plain at 1,175 ft AMSL; no close-in high terrain identified for the field itself. |
| Runway length vs fleet perf | 🟧 | 3,050 m at 1,175 ft is generous for narrowbody types. No K Global fleet assignment exists to validate against (not in VAMSYS). |
| Approach availability / minima | 🟧 | ILS CAT I only on RWY 34; **RWY 16 has no precision approach at all** — RNP/VOR only. |
| Airspace / traffic / control | 🟥 | **Uncontrolled field, Class G ATZ, no ATS unit** — TIBA self-announce (122.800 MHz) and a 15-minute-prior FRS call (133.500 MHz) are the only published traffic-management procedures. PPR (3 hr) required for non-scheduled flights. |
| Weather / seasonal hazard | 🟧 | Interior Eastern-Province desert climate; regional shamal/dust exposure per the airspace brief; no field-specific severe-weather statistic sourced this pass. |
| Curfew / slots / hours | 🟥 | **Published operational hours 04:00–20:00 local (≈01:00–17:00 UTC) — the field is effectively closed overnight**, functioning as a hard curfew even though not labelled as one. |
| RFF category vs our types | 🟧 | CAT 7 — adequacy against any assigned K Global type not yet validated (no fleet assignment). |
| Fuel availability | 🟧 | Jet A-1, tanker-served, hours of operation (HO) not H24. |
| Customs / handling / security | 🟧 | Customs/immigration Sun–Thu 04:00–20:00; handling HO; security H24. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OEPA sits on the flat Eastern-Province desert plain at 1,175 ft AMSL, near the Kuwait/Iraq border region (not the Yemen border belt relevant to OEGN/OENG elsewhere in this pack). No close-in high terrain was identified for the field itself. The VOR/TACAN (HFR) does carry an AIP-published caveat — signal reception is **"restricted beyond 30 NM below 5,000 ft due to roughness and scalloping"** — an indirect signal of some terrain irregularity in the surrounding area affecting navaid reception rather than a close-in obstacle/CFIT threat.

### 3.2 Airborne conflict / traffic 🟥
This is the **only uncontrolled field in this five-field pack.** There is no ATS unit, no published Tower/Approach/Ground frequency (the AIP's communications table returns entirely NIL), and the ATZ is Class G. Traffic management relies on **TIBA (Traffic Information Broadcasts by Aircraft) procedures, strictly applied on 122.800 MHz, H24**, plus a **mandatory 15-minute-prior call to the Flight [Reporting] Service on 133.500 MHz**. This is a materially different self-separation environment from the other four (Class D controlled) fields in this pack — brief crews accordingly; do not expect radar or a controlling authority.

### 3.3 Runway excursion 🟧
No displaced threshold; THR 16 elevation 1,173 ft (TDZ 1,172 ft), THR 34 elevation 1,176 ft (TDZ 1,175 ft) — a shallow +0.07%/+0.01% grade rising toward RWY 34. CWY 60×150 m both ends; strip 3,110×300 m; RESA 90×90 m both ends. No SWY published. PCN 79/F/A/W/T is ample strength for narrowbody types.

### 3.4 Weather threat 🟧
Interior Eastern-Province desert climate, with the regional shamal/dust exposure documented in the [Middle East airspace brief](../../../../airspace/middle-east.md) §11. The field carries an Automatic Weather Station (AWS) plus WX radar per the MET section — a more developed MET capability than several of the other fields in this pack. No field-specific thunderstorm-frequency statistic sourced this pass.

### 3.5 Operational considerations 🟥
Three durable planning items, in order of severity: (1) the field is **uncontrolled with no ATS unit** — TIBA/FRS procedures only (§3.2); (2) **published operating hours are 04:00–20:00 local only**, effectively an overnight closure with the same practical impact as a hard curfew; (3) **PPR (3-hour prior notice) is required for any non-scheduled flight** — this field cannot be treated as a walk-up alternate without prior coordination.

---

## 4. Cautions & Warnings

- 🟥 **Uncontrolled aerodrome** — no ATC service exists; TIBA (122.800 MHz, H24) self-announce procedures apply, plus a mandatory 15-minute-prior call to the Flight Service on 133.500 MHz.
- 🟥 **PPR (Prior Permission Required), 3-hour notice, for non-scheduled flights** — do not plan an unscheduled diversion here without confirming this requirement is met.
- 🟥 **Published operating hours 04:00–20:00 local (≈01:00–17:00 UTC)** — treat the field as closed outside this window.
- 🟧 **RWY 16 has no precision approach** — RNP/VOR only; RWY 34 carries the field's only ILS.
- 🟧 **VOR/TACAN (HFR) reception is restricted beyond 30 NM below 5,000 ft** due to terrain roughness/scalloping — verify current chart for the operational implication.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport," but the combination of **uncontrolled status, limited operating hours and a PPR requirement** functions as a de facto special-handling field. 🟥
- **Crew-qualification gate:** None separately published; crews should be briefed on self-announce/TIBA procedures given the absence of ATC.
- **Operating restrictions / bans:** 🟥 **PPR (3-hour prior notice) required for non-scheduled flights**; **operating hours limited to 04:00–20:00 local** — both are hard AIP-published constraints, not cautions.
- **Overflight / entry / permits:** Standard Kingdom of Saudi Arabia entry beyond the PPR requirement above. 🟧
- **Operations notes:** ANSP/regulator — **General Authority of Civil Aviation (GACA)**. Ground handling/cargo per AIP is the national flag-carrier's arm, hours of operation (HO); other agents not confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | 🟥 **None — uncontrolled field; TIBA/FRS procedures only** | 🟥 |
| AD operating hours | 🟥 **04:00–20:00 local (≈01:00–17:00 UTC)** — effectively closed overnight | 🟥 |
| Night / curfew restrictions | Functionally a hard overnight closure via the operating-hours window above | 🟥 |
| RFF category | CAT 7 | 🟩 |
| Fuel | Jet A-1, tanker-served, hours of operation (HO) not H24 | 🟧 |
| PCN | RWY 79/F/A/W/T; taxiways 61/F/A/W/T; apron 72/F/A/W/T | 🟩 |
| Customs | Sun–Thu 04:00–20:00 | 🟧 |
| Handling / FBO | National flag-carrier handling arm (AIP-listed), HO; others not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16 | 3,050 × 45 m | Asphalt / PCN 79/F/A/W/T | 3,050 m | 3,110 m | 3,050 m | 3,050 m | THR elev 1,173 ft; **no precision approach** — RNP/VOR only |
| 34 | 3,050 × 45 m | Asphalt / PCN 79/F/A/W/T | 3,050 m | 3,110 m | 3,050 m | 3,050 m | THR elev 1,176 ft (field high point); ILS CAT I (IHFR); SALS approach lighting |

*Source: SANS/GACA eAIP, AD 2 OEPA 2.12/2.13. CWY 60×150 m both ends (accounts for TODA exceeding TORA); strip 3,110×300 m both ends; RESA 90×90 m both ends. No SWY published. No displaced threshold. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| TIBA | — | 122.800 | H24 | **Strictly applied** — no ATS unit exists at this field |
| Flight Service (pre-arrival call) | FRS | 133.500 | Per AIP requirement | Call **15 minutes before arrival time** |
| Tower / Approach / Ground | — | None published | — | 🟥 AIP communications table returns NIL — **uncontrolled field** |
| Centre / FIR | Jeddah FIR (OEJD) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: SANS/GACA eAIP, AD 2 OEPA 2.17/2.18.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 34 | IHFR | 108.500 | H24 | CAT I |
| GP RWY 34 | IHFR | 329.900 | H24 | |
| DME RWY 34 | IHFR | CH22X | H24 | Antenna elevation 1,300 ft |
| VOR/TACAN | HFR | 113.100 (CH78X) | H24 | Mag decl 4° E; antenna elevation 1,200 ft; **AIP-flagged: restricted beyond 30 NM below 5,000 ft due to roughness and scalloping** |

*Source: SANS/GACA eAIP, AD 2 OEPA 2.19.*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft; TL by QNH — verify current AIRAC. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 unless otherwise directed.
- **Preferential runway logic:** No published preferential rule; RWY 34 is the only precision-approach direction.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 34 | ILS/LOC (IHFR), RNP, VOR | — | — | CAT I |
| 16 | RNP, VOR | — | — | **No precision approach** |

- **STARs (names only):** Not confirmed in reachable research pass — pull current-AIRAC arrival routing at planning. 🟧
- **LVP:** Not applicable — uncontrolled field with no ATS unit; low-visibility management is a crew self-separation matter under TIBA. 🟥
- **Missed approach watch-items:** Terrain is not the driver (flat plain); the operative watch-item is the **absence of any controlling authority** — a missed approach is entirely a self-announce/TIBA event.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Published RWY 16 and RWY 34 departure procedures — climb on runway heading to 3,000 ft, then proceed via the flight-planned route, continuing climb to the cleared flight level. Verify exact profile on current chart. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed this pass. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** No ATS unit — self-coordinate via TIBA (122.800) and confirm with the handling agent. 🟧
- **ATC slot / CTOT & clearance:** No ATC clearance service exists at this field — no slot regime; the operative requirement is **PPR (3-hour prior notice)** for non-scheduled flights, not a clearance-delivery process.
- **De-icing:** NIL (not applicable to this climate).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None published. 🟧
- **Night noise / dB limits:** Not applicable — the field's own operating-hours window (04:00–20:00 local) precludes routine night movements.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** No K Global stand assignment (not in VAMSYS). Single Civil Apron, asphalt PCN 72/F/A/W/T. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Parallel taxiway (PARL TXY, 45 m) and a secondary taxiway (TXY, 27.5 m), both asphalt PCN 61/F/A/W/T.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data. 🟩
- **Follow-me:** Not confirmed — with no ATS unit, self-coordinate with the handling agent. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Interior Eastern-Province desert climate.
- **Seasonal hazards:** Regional shamal/dust exposure per the [Middle East airspace brief](../../../../airspace/middle-east.md) §11. The field's Automatic Weather Station (AWS) plus WX radar is a comparatively strong MET capability for a regional field.
- **Local effects:** None field-specific identified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (particularly the HFR VOR's published reception restriction), lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block. **Given the field's uncontrolled status, also confirm PPR grant and current operating-hours window before planning.**

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not assigned (not in VAMSYS). 🟧
- **Nearest suitable alternates (computed from AIP ARP coordinates, not a VAMSYS/company figure):** **OEDF** (Dammam/King Fahd Intl, ~225 NM SE); **OERK** (Riyadh/King Khaled Intl, ~205 NM S) — both full-service, controlled, H24 fields, a materially different operating profile from OEPA itself. 🟧
- **Fuel-uplift notes:** Jet A-1, tanker-served, hours of operation (HO) not H24. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** No fleet assignment (not in VAMSYS). Sea-level-adjacent 3,050 m runway is non-limiting for narrowbody types generally — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) once a type is assigned.

---

## 17. Fleet-specific notes (optional)

- No K Global fleet/route assignment exists for this field (not in VAMSYS). No type-specific performance penalty is expected given the runway length/elevation; **the governing consideration for any assignment here is the field's uncontrolled status, PPR requirement and limited operating hours**, not aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- STARs, exact take-off minima, engine run-up restriction, reverse-thrust policy, push-back/follow-me availability — none confirmed in reachable sources.
- Handling agent(s) beyond the AIP-listed national-carrier arm, and exact HO windows for fuelling/handling — not individually confirmed.
- PPR grant procedure/contact point — AIP states the 3-hour requirement but not the specific request channel.
- HFR VOR/TACAN reception restriction (beyond 30 NM below 5,000 ft) — operational implication for any procedure relying on it not fully assessed this pass.
- K Global category/base/alternates/taxi-times — pending VAMSYS reconciliation (field is not in VAMSYS at all).
- No dedicated VATSIM vACC/division SOP found for OEPA in this research pass — cross-check when one becomes available.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEPA — Al Qaisumah International**, AIRAC AMDT cycle retrieved (2025-01-02 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEPA%20AL%20QAISUMAH%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26). *Primary source for ARP, elevation, runways/declared distances, RFF, uncontrolled-status/PPR/operating-hours, navaids.*
- OurAirports — https://ourairports.com/airports/OEPA/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- **K Global — [Middle East airspace brief](../../../../airspace/middle-east.md)** (internal companion document, v0.1, 2026-07-25) — regional shamal/dust seasonal context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
