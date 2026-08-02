# OEGN — Jazan / King Abdullah Bin Abdulaziz · Airport Briefing

**OEGN / GIZ** · Jazan, Jazan Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Saudi AIP (SANS eAIP, AD 2 OEGN) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15) — this field carries an active regional closure/security watch-item, see §2/§5. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N16°54′04.0″ / E042°35′09.0″ (16.9011, 42.5858) `[AIP AD 2 OEGN 2.2]` |
| Field elevation | **20 ft AMSL** (reference temperature 37.5°C) |
| Mag variation | 2° E (2010 epoch) — not re-verified against a current-cycle table 🟧 |
| Time zone | UTC+3 (AST) — no DST observed |
| Runway(s) | **15/33**, 3,050 × 45 m, asphalt (PCN 42/F/C/X/T) — single runway field |
| Preferential runway | No published preferential rule; standard circuit RWY 15 left-hand / RWY 33 right-hand (reversed under ESCAT) |
| Longest LDA | 3,050 m (both ends) |
| Approaches | **ILS CAT I / LOC RWY 33** (IGZN), **RNAV(GNSS)/ILS RWY 33**, **RNP RWY 33**, **RNP RWY 15**, **VOR-DME/TACAN RWY 15 & RWY 33** |
| RFF category | **CAT 6** |
| Control type | **Procedural/radar mix** — Jazan Tower (Class D CTR) with area surveillance radar at the field; Jazan Approach (Class C TMA) |
| Elevation class | Sea-level (20 ft) — **not** hot-and-high; reference temperature (37.5°C) is a performance input but density-altitude is not the field's defining threat |
| Special-airport status | 🟥 **Active regional closure/security watch-item** — see §2/§5. Bird-hazard caution (AIP-flagged) — see §3.4/§4 |
| Customs / PoE | **Yes** — customs PN (prior notice), immigration H24 |
| K Global category | 🟧 **Not in VAMSYS** — pending reconciliation |
| K Global base | 🟧 **Not in VAMSYS** — pending reconciliation |
| Company preferred alternates | 🟧 **Not in VAMSYS** — pending reconciliation; see §16 for geographically nearest fields (computed, not company-assigned) |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Coastal Tihamah plain at 20 ft AMSL; the Fayfa/'Asir highlands rise well inland (~100 km) and are not a close-in factor for this field. |
| Runway length vs fleet perf | 🟧 | 3,050 m sea-level runway is generous for narrowbody ops; no K Global fleet assignment exists (not in VAMSYS) to validate against. |
| Approach availability / minima | 🟩 | ILS CAT I plus RNP/RNAV coverage on RWY 33; RWY 15 served by RNP/VOR only — no precision approach that direction. |
| Airspace / traffic / control | 🟩 | Class D CTR (10 NM) / Class C TMA; field surveillance radar; moderate traffic — not a congestion field. |
| Weather / seasonal hazard | 🟧 | Tihamah coastal humidity/haze and Red Sea convective activity; no field-specific severe-weather statistic sourced this pass. |
| Curfew / slots / hours | 🟧 | No slot regime; AD administration HS (business hours) but ATS/fuelling/handling/security published H24 — confirm current status given §2 closure watch-item. |
| RFF category vs our types | 🟧 | CAT 6 — adequacy against any assigned K Global type not yet validated (no fleet assignment). |
| Fuel availability | 🟩 | Jet A-1, H24 per AIP, tanker-served (386,000 L combined capacity). |
| Customs / handling / security | 🟧 | Customs by prior notice (not H24); handling/security published H24 — national-carrier ground handling is the AIP-listed provider, others not confirmed. |
| **Regional security / airspace status** | 🟥 | **K Global's Middle East airspace brief records OEGN among four SW-Saudi airports NOTAM-closed following Houthi missile/drone attacks** (with OEAB/Abha, OENG/Najran, OESH/Sharurah). This is a **live, perishable status** — treat the field as **unavailable for planning purposes** pending fresh NOTAM confirmation at the time of use. See §5 and the [Middle East airspace brief](../../../../airspace/middle-east.md) §9. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OEGN sits on the flat Red Sea (Tihamah) coastal plain at 20 ft AMSL. The Fayfa Mountains (peaks reportedly exceeding 2,600 m) and the broader 'Asir/Sarawat escarpment lie roughly 100 km inland — well clear of the immediate approach, departure and circling areas. Terrain is not the operative threat at the field itself; the regional escarpment is a factor only for routings that transit closer to the highlands (see the [Middle East airspace brief](../../../../airspace/middle-east.md) §7 on the Asir/Sarawat belt).

### 3.2 Airborne conflict / traffic 🟥
Two distinct threats layer here. First, ordinary traffic: Jazan Approach (Class C TMA, radar) and Jazan Tower (Class D CTR, field surveillance radar to 250 NM via GIZ VOR/DME and secondary radar, partially supplemented by Abha/Alsoodah MSSRs above FL110) manage a moderate volume with standard VFR gates (Kilo/Tango/Golf) and IFR reporting points (MEKTU, PEKAR, BOXIL, SIMDO, NABAN, IMDOL). Second, and dominant: **the field sits inside the active Red Sea / Yemen conflict-zone picture.** K Global's regional airspace brief documents OEGN as one of four SW-Saudi fields NOTAM-closed after Houthi missile/drone activity, and the wider area (southern Red Sea approaches, Jazan/'Asir/Najran border belt) carries an assessed HIGH risk from missile-intercept debris and possible misidentification. **This is not routine ATC traffic risk — it is airspace-closure/security risk and must be re-verified live before any planning use.** See [Middle East airspace brief](../../../../airspace/middle-east.md) §9.

### 3.3 Runway excursion 🟧
No displaced threshold; THR 15 elevation 16 ft, THR 33 elevation 20 ft (a shallow +0.04%/−0.04% longitudinal grade). RESA 240×120 m both ends, CWY 300×45 m both ends, no published SWY. No PCN/strength concern for narrowbody types (PCN 42/F/C/X/T). No LDA-shortfall or contamination-specific note found this pass — verify current AIRAC for any amendment.

### 3.4 Weather threat 🟧
Tihamah coastal climate — hot, humid, with Red Sea moisture driving haze/reduced-visibility conditions and occasional convective activity; no field-specific thunderstorm-frequency statistic sourced this pass. **AIP-flagged bird hazard:** "extreme caution during approach and departure due to large flocks of birds crossing the aerodrome in all seasons of the year, the highest concentrations at dawn and at dusk" (AIP AD 2.23.1) — a genuine, sourced, standing threat, not a generic caution.

### 3.5 Operational considerations 🟧
Three durable planning items: (1) the **AIP-published bird-hazard warning** at dawn/dusk (§3.4); (2) **RWY 33 is the only precision-approach direction** (ILS CAT I) — RWY 15 arrivals rely on RNP/VOR only, a minima-driven runway-selection factor in marginal weather; (3) the **regional security/closure status** (§2) dominates all other planning considerations for this field and must be resolved before the field is used operationally.

---

## 4. Cautions & Warnings

- 🟥 **Field carries an active NOTAM-closure history** per K Global's regional airspace brief (Houthi missile/drone activity, SW-Saudi border belt) — re-verify current status before any use; do not plan into OEGN on this file's snapshot alone.
- 🟥 **Bird strike hazard, AIP-published:** large flocks cross the aerodrome in all seasons; highest concentration at dawn and dusk — brief accordingly on approach/departure at those times.
- 🟧 **RWY 15 has no precision approach** — RNP/VOR only; RWY 33 carries the field's only ILS.
- 🟧 **Aprons 2 and 3, and TWY N, are not visible from the Tower** — aircraft taxiing from Apron 2/3 must hold short of TWY A and advise Tower (AIP local regulation); TWY N is treated as non-manoeuvring area.
- 🟧 Aircraft parked at Apron 1 for more than one hour, or overnight, must shift to Apron 2 or 3 (except large aircraft) — an AIP-published ground-ops rule.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟩
- **Crew-qualification gate:** None published beyond standard IFR currency. 🟩
- **Operating restrictions / bans:** 🟥 **Treat the field as closed pending live confirmation** — K Global's Middle East regional airspace brief lists OEGN among four SW-Saudi airports (with OEAB/Abha, OENG/Najran, OESH/Sharurah) NOTAM-closed following Houthi missile/drone attacks in the border-region conflict picture. This status is **live and perishable**; this durable brief cannot certify current availability — pull the current AIS NOTAM set and company routing policy before any use.
- **Overflight / entry / permits:** Standard Kingdom of Saudi Arabia entry; no additional state permit found for scheduled/charter ops absent the closure above. 🟧
- **Operations notes:** ANSP/regulator — **General Authority of Civil Aviation (GACA)**. Ground handling/cargo per AIP is the national flag-carrier's handling arm; other agents not confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (Tower/Approach/Ground) | 🟩 |
| AD operating hours | AD administration HS Sun–Thu 05:00–13:00 (0800–1600 LMT); ATS/fuelling/handling/security published H24 | 🟧 |
| Night / curfew restrictions | None published | 🟩 |
| RFF category | CAT 6 | 🟩 |
| Fuel | Jet A-1, H24 — 2× 18,000 L + 1× 45,000 L tankers (386,000 L capacity) | 🟩 |
| PCN | RWY 42/F/C/X/T; taxiways/aprons 42–90/R or F, B/C, W/X/T (varies by surface — see §7) | 🟩 |
| Customs | Prior-notice (PN) for customs; immigration H24 | 🟧 |
| Handling / FBO | National flag-carrier handling arm (AIP-listed); repair facilities PN via same and other handling agents | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 15 | 3,050 × 45 m | Asphalt / PCN 42/F/C/X/T | 3,050 m | 3,350 m | 3,050 m | 3,050 m | THR elev 16 ft; no precision approach this direction |
| 33 | 3,050 × 45 m | Asphalt / PCN 42/F/C/X/T | 3,050 m | 3,350 m | 3,050 m | 3,050 m | THR elev 20 ft; ILS CAT I (IGZN); CAT I approach lighting (900 m) |

*Source: SANS/GACA eAIP, AD 2 OEGN 2.12/2.13 (AMDT cycle retrieved 2025-01-02 series). CWY 300×45 m both ends; RESA 240×120 m both ends; no SWY published. No displaced threshold. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Jazan Information | 127.850 | H24 | D-ATIS available via SITA on request |
| Approach | Jazan Approach | 124.900 (primary, DOC 50 NM/16,000 ft) · 119.150 (standby) | H24 | 335.200 MIL |
| Tower | Jazan Tower | 118.000 (DOC 15 NM/2,000 ft) | H24 | 235.900 MIL |
| Ground | Jazan Ground Control | 121.900 (DOC 5 NM/GND) | H24 | 280.000 MIL |
| Emergency | Guard | 121.500 / 243.000 | H24 | |
| Centre / FIR | Jeddah FIR (OEJD) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: SANS/GACA eAIP, AD 2 OEGN 2.18.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 33 | IGZN | 109.900 | H24 | CAT I |
| GP RWY 33 | IGZN | 333.800 | H24 | GPA 3°, RDH 52.3 ft |
| DME RWY 33 | IGZN | CH36X | H24 | Paired with ILS |
| VOR/DME | GIZ | 117.700 (CH124X) | H24 | Mag decl 2° E; antenna elevation 200 ft |

*Source: SANS/GACA eAIP, AD 2 OEGN 2.19.*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft; TL by QNH — verify current AIRAC. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 unless otherwise directed.
- **Preferential runway logic:** No published preferential rule; RWY 33 is the only precision-approach direction, a practical driver in marginal weather (§3.5).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 33 | ILS/LOC (IGZN), RNAV(GNSS)/ILS, RNP | — | — | CAT I; GIZ DVORTAC holding MHA 2,000 ft |
| 15 | RNP, VOR-DME/TACAN | — | — | No precision approach; GIZ DVORTAC holding MHA 2,000 ft |

- **STARs (names only):** Not confirmed in reachable research pass — pull current-AIRAC arrival routing at planning. 🟧
- **LVP:** Trigger conditions not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative watch-items are the bird-hazard window (dawn/dusk) and re-sequencing under Jazan Approach.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Published RWY 15 and RWY 33 departure procedures exist (straight climb on runway heading before a turn, minimum turn altitude, no turns before DER) — verify exact tracks/altitudes on the current chart. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed this pass beyond the departure-procedure altitude gates above — verify current AIRAC. 🟧 See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not independently confirmed — coordinate with Ground/Tower. 🟧
- **ATC slot / CTOT & clearance:** No slot regime identified; standard clearance delivery via Tower/Approach.
- **De-icing:** NIL (not applicable to this climate).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Per AIP, see current Instrument Approach Charts — no separate NAP narrative published. 🟧
- **Night noise / dB limits:** None published.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** No K Global stand/gate assignment (not in VAMSYS). Aprons 1–4 available; Apron 4 is the highest-strength surface (PCN 90/R/B/W/T concrete). 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** TWY A (main, 45 m, PCN 64/F/A/X/T), A1/A2 (23 m spurs), B, C. TWY N has no published width/surface/strength and is treated as non-manoeuvring area (§4).
- **Hot spots / tight taxiways:** 🟥 **Aprons 2 and 3 and TWY N are not visible from the Tower** — aircraft taxiing from Apron 2/3 hold short of TWY A and advise Tower (AIP local aerodrome regulation).
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot, humid Red Sea (Tihamah) coastal climate.
- **Seasonal hazards:** Coastal haze/humidity; Red Sea convective activity in season — no field-specific frequency statistic sourced. General regional shamal/dust exposure per the [Middle East airspace brief](../../../../airspace/middle-east.md) §11.
- **Local effects:** Coastal location; sea-breeze effects plausible but not independently confirmed for this field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. **Given the §2/§5 regional closure/security status, this is the single most important pre-planning check for this field** — confirm current NOTAM-open status before any further planning, in addition to the standard checks: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block; cross-check the [Middle East airspace brief](../../../../airspace/middle-east.md) §9/§11 live-data pointers.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not assigned (not in VAMSYS). 🟧
- **Nearest suitable alternates (computed from AIP ARP coordinates, not a VAMSYS/company figure):** **OEAB** (Abha, ~81 NM NNW) — *also carries the same regional closure status, see §2* 🟥; **OEBH** (Bisha, ~185 NM N); **OEJN** (Jeddah/King Abdulaziz Intl, ~346 NM N) — the nearest unaffected full-service field. 🟧
- **Fuel-uplift notes:** Jet A-1, H24, tanker-served (386,000 L combined capacity). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** No fleet assignment (not in VAMSYS). Sea-level 3,050 m runway is non-limiting for narrowbody types generally — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) once a type is assigned.

---

## 17. Fleet-specific notes (optional)

- No K Global fleet/route assignment exists for this field (not in VAMSYS). No type-specific performance penalty is expected given the sea-level runway; revisit once a fleet type and route role are assigned. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field closure/security status (§2/§5)** — the durable snapshot records a NOTAM-closure history; live status must be re-confirmed before any planning use. **Highest-priority open item on this brief.**
- Magnetic variation — sourced to a 2010 epoch; current-day value not independently re-verified.
- STARs and exact SID tracks/altitudes — not obtained in this research pass; pull current-AIRAC procedure charts.
- LVP trigger conditions, take-off minima, engine run-up restriction, reverse-thrust policy, push-back/follow-me availability — none confirmed in reachable sources.
- Handling agent(s) beyond the AIP-listed national-carrier arm — not individually confirmed.
- K Global category/base/alternates/taxi-times — pending VAMSYS reconciliation (field is not in VAMSYS at all).
- No dedicated VATSIM vACC/division SOP found for OEGN in this research pass — cross-check when one becomes available.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEGN — Jazan/King Abdullah Bin Abdulaziz**, AIRAC AMDT cycle retrieved (documents dated within the 2025-01-02 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEGN%20JAZAN%20-%20KING%20ABDULLAH%20BIN%20ABDULAZIZ-en-GB.html (retrieved 2026-07-26). *Primary source for ARP, elevation, runways/declared distances, RFF, comms, navaids, hours, bird-hazard note.*
- OurAirports — https://ourairports.com/airports/OEGN/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- SkyVector — https://skyvector.com/airport/OEGN/Jazan-King-Abdullah-Abdulaziz-Airport (retrieved 2026-07-26). *Coordinate/chart-pointer cross-check.*
- **K Global — [Middle East airspace brief](../../../../airspace/middle-east.md)** (internal companion document, v0.1, 2026-07-25) — regional conflict-zone/closure status (§9), sourced in turn to EASA CZIBs and OPSGROUP Middle East operational-picture reporting. *Primary basis for the §2/§5 closure watch-item in this brief.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
