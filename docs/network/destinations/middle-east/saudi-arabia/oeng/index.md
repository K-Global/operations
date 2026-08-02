# OENG — Nejran · Airport Briefing

**OENG / EAM** · Najran, Najran Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Saudi AIP (SANS eAIP, AD 2 OENG) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15) — this field carries an active regional closure/security watch-item AND sits on an AIP-acknowledged undefined border segment, see §2/§5. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N17°36′41.0″ / E044°25′09.0″ (17.6114, 44.4192) `[AIP AD 2 OENG 2.2]` — 40 km NE of Najran city |
| Field elevation | **3,983 ft AMSL** (reference temperature 38.2°C) — the highest-elevation, highest-reference-temperature field in this five-field pack |
| Mag variation | 3° E (2020 epoch, 0.03°/yr increasing) at field level; the navaid table separately states 2° E for the DME/DVOR — a minor internal AIP discrepancy 🟧 |
| Time zone | UTC+3 (AST) — no DST observed |
| Runway(s) | **06/24**, 3,050 × 45 m, asphalt (PCN 60/F/A/X/T) — single runway field |
| Preferential runway | No published preferential rule; **circuit direction is asymmetric by design** — right-hand circuit NOT available for RWY 06 (left-hand only), left-hand circuit NOT available for RWY 24 (right-hand only) |
| Longest LDA | 3,050 m (both ends) |
| Approaches | **ILS CAT I RWY 06** (two variants, ILS Z/LOC and ILS Y) plus **VOR RWY 06**; **RWY 24 carries three separate VOR-only variants** (VOR X/Y/Z) — **no precision approach on RWY 24** |
| RFF category | **CAT 7** |
| Control type | **Part-time controlled** — Nejran Tower operates **03:00–19:00 UTC** (Class D CTR); **AFIS only 19:00–03:00 UTC**, reverting to Class G/ATZ outside CTR hours |
| Elevation class | 🟥 **Hot-and-high** — 3,983 ft field elevation with a 38.2°C reference temperature is the most demanding density-altitude case in this pack — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) |
| Special-airport status | 🟥 **AIP-acknowledged undefined international boundary** immediately south of the field, with the CTR's own southern edge defined as running "along Yemen national boundary" — plus the field's regional closure/security status (§2/§5) |
| Customs / PoE | Immigration by hours of operation (HO), not H24 — confirm current status 🟧 |
| K Global category | 🟧 **Not in VAMSYS** — pending reconciliation |
| K Global base | 🟧 **Not in VAMSYS** — pending reconciliation |
| Company preferred alternates | 🟧 **Not in VAMSYS** — pending reconciliation; see §16 for geographically nearest fields (computed, not company-assigned) |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Najran sits on the southern Saudi plateau (regional elevation 1,100–1,700 m); the 'Asir/Sarawat highlands rise to 9,000+ ft further west. The field's **triple-variant approach set per runway** (§10) is consistent with terrain-driven procedure design — no specific AIP obstacle/peak data was returned in this pass; verify current MSA chart. |
| Runway length vs fleet perf | 🟧 | 3,050 m at 3,983 ft is workable for narrowbody types but the **field's hot-and-high performance case is the most demanding in this pack**. No K Global fleet assignment exists to validate against (not in VAMSYS). |
| Approach availability / minima | 🟧 | ILS CAT I on RWY 06 (two variants); **RWY 24 has no precision approach at all** — three VOR-only variants instead. |
| Airspace / traffic / control | 🟥 | Part-time controlled field — Class D CTR only 03:00–19:00 UTC, reverting to Class G/ATZ (AFIS-only) outside those hours; the CTR's own southern boundary runs along the Yemen national boundary. |
| Weather / seasonal hazard | 🟧 | Southern-Saudi highland climate; regional shamal/dust exposure per the airspace brief; no field-specific severe-weather statistic sourced this pass. |
| Curfew / slots / hours | 🟧 | No slot regime, but **customs, fuelling and handling are published "HO" (hours of operation) rather than H24** — a real availability constraint outside Tower hours. |
| RFF category vs our types | 🟧 | CAT 7 — adequacy against any assigned K Global type not yet validated (no fleet assignment). |
| Fuel availability | 🟧 | Jet A-1, tanker-served, but fuelling hours are HO not H24 — confirm exact window. |
| Customs / handling / security | 🟧 | Customs/immigration/handling all HO; security H24. |
| **Regional security / airspace status** | 🟥 | **K Global's Middle East airspace brief records OENG among four SW-Saudi airports NOTAM-closed following Houthi missile/drone attacks** (with OEAB/Abha, OEGN/Jazan, OESH/Sharurah). This is a **live, perishable status** — treat the field as **unavailable for planning purposes** pending fresh NOTAM confirmation at the time of use. See §5 and the [Middle East airspace brief](../../../../airspace/middle-east.md) §9. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
OENG sits at 3,983 ft AMSL on the southern Saudi plateau, 40 km NE of Najran city, within a region whose general elevation runs 1,100–1,700 m and whose 'Asir/Sarawat highlands to the west rise to 9,000+ ft. No AIP obstacle-table entries were returned for this field in this pass (table NIL), but the **unusually rich approach-procedure set — three distinct non-precision variants on RWY 24 alone, plus two ILS variants on RWY 06 — is a strong indirect signal of terrain-constrained procedure design**, a pattern typical of Saudi highland-border fields. Verify the current area/MSA chart before use; do not assume a benign terrain picture solely from the absence of an obstacle-table entry.

### 3.2 Airborne conflict / traffic 🟥
Two layered threats. First, the field's **airspace structure is genuinely unusual**: Nejran Tower/CTR (Class D, SFC–8,500 ft AMSL) operates only **03:00–19:00 UTC**; outside those hours the same volume reverts to **Class G with AFIS only** (still on 118.500) — a real change in the traffic-management environment depending on time of day. Second, and more serious: **the field sits inside the active Red Sea/Yemen conflict-zone picture.** K Global's regional airspace brief documents OENG as one of four SW-Saudi fields NOTAM-closed after Houthi missile/drone activity, and the field's own AIP **explicitly notes that the international boundary immediately south of the airport is not clearly defined**, with the CTR's own southern edge drawn "along Yemen national boundary." **This is airspace-closure/security risk, not routine ATC risk, and must be re-verified live before any planning use.** See [Middle East airspace brief](../../../../airspace/middle-east.md) §9.

### 3.3 Runway excursion 🟧
No displaced threshold; THR 06 elevation 3,982.5 ft (TDZ 3,982 ft — essentially at the field's high point), THR 24 elevation 3,948 ft — a −0.34%/+0.34% longitudinal grade (steeper than Hail). CWY 300×150 m both ends (unusually wide), strip 3,290×300 m, RESA 90×90 m both ends. The stopway on both ends is published as **"other surface"** rather than asphalt — verify strength/character on the current chart. PCN 60/F/A/X/T is adequate for narrowbody types.

### 3.4 Weather threat 🟧
Southern-Saudi highland climate — cooler than the coastal/Gulf fields at this elevation, with the regional shamal/dust exposure documented in the [Middle East airspace brief](../../../../airspace/middle-east.md) §11. No field-specific thunderstorm-frequency statistic sourced this pass.

### 3.5 Operational considerations 🟥
Three durable planning items, in order of severity: (1) **the regional security/closure status** (§2/§5), which dominates all other planning considerations; (2) **hot-and-high performance** — the most demanding elevation/temperature combination in this pack (3,983 ft / 38.2°C); (3) **the part-time control regime and asymmetric circuit design** (right-hand circuit unavailable for RWY 06, left-hand unavailable for RWY 24) — both consistent with terrain-constrained circuit geometry and requiring careful runway/circuit-direction briefing.

---

## 4. Cautions & Warnings

- 🟥 **Field carries an active NOTAM-closure history** per K Global's regional airspace brief (Houthi missile/drone activity, SW-Saudi border belt) — re-verify current status before any use; do not plan into OENG on this file's snapshot alone.
- 🟥 **The AIP itself states the international boundary immediately south of the airport is not clearly defined** — a directly sourced, field-specific border-ambiguity fact, not a general regional caution.
- 🟥 **Hot-and-high field** — 3,983 ft elevation, 38.2°C reference temperature, the most demanding combination in this pack; validate weight/performance for the assigned type.
- 🟧 **The CTR is only Class D 03:00–19:00 UTC** — outside those hours the field reverts to Class G/ATZ with AFIS only (same 118.500 frequency, different service level).
- 🟧 **Circuit direction is asymmetric** — right-hand circuit not available for RWY 06 (left-hand only); left-hand circuit not available for RWY 24 (right-hand only). Circuit contained within 5 NM of the ARP at 1,500 ft AGL.
- 🟧 **RWY 24 has no precision approach at all** — three separate VOR variants only.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources, but the combination of **hot-and-high performance, part-time control, an AIP-acknowledged undefined border, and the regional closure status** functions as a de facto special-handling field. 🟥
- **Crew-qualification gate:** None separately published beyond standard IFR currency and hot-and-high performance validation.
- **Operating restrictions / bans:** 🟥 **Treat the field as closed pending live confirmation** — K Global's Middle East regional airspace brief lists OENG among four SW-Saudi airports (with OEAB/Abha, OEGN/Jazan, OESH/Sharurah) NOTAM-closed following Houthi missile/drone attacks in the border-region conflict picture. This status is **live and perishable**; this durable brief cannot certify current availability — pull the current AIS NOTAM set and company routing policy before any use.
- **Overflight / entry / permits:** Standard Kingdom of Saudi Arabia entry; the field's AIP notes it is used as an alternate aerodrome — confirm current designation. 🟧
- **Operations notes:** ANSP/regulator — **General Authority of Civil Aviation (GACA)**. Ground handling per AIP is the national flag-carrier's arm; other agents not confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower (Class D) 03:00–19:00 UTC; AFIS (Class G/ATZ) 19:00–03:00 UTC | 🟥 |
| AD operating hours | AD administration HS Sun–Thu 05:00–13:00 (0800–1600 LMT); AIP remark notes the field is "used as alternate AD" with operational hours H24 overall, but customs/fuelling/handling are separately published HO — reconcile at planning | 🟧 |
| Night / curfew restrictions | None published beyond the Tower/AFIS split above | 🟧 |
| RFF category | CAT 7 | 🟩 |
| Fuel | Jet A-1, tanker-served, **hours of operation (HO), not H24** | 🟧 |
| PCN | RWY 60/F/A/X/T; taxiways 60/F/A/X/T; aprons 75/R/B/W/T (Apron 1) and 30/R/B/W/T (Apron 2) | 🟩 |
| Customs | HO — not H24 | 🟧 |
| Handling / FBO | National flag-carrier handling arm (AIP-listed), HO; others not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | 3,050 × 45 m | Asphalt / PCN 60/F/A/X/T; SWY: other surface | 3,050 m | 3,350 m | 3,110 m | 3,050 m | THR elev 3,982.5 ft, TDZ 3,982 ft (field high point); ILS CAT I (INEJ, two chart variants) |
| 24 | 3,050 × 45 m | Asphalt / PCN 60/F/A/X/T; SWY: other surface | 3,050 m | 3,350 m | 3,110 m | 3,050 m | THR elev 3,948 ft; **no precision approach** — three VOR variants only |

*Source: SANS/GACA eAIP, AD 2 OENG 2.12/2.13 (AIRAC AMDT cycle retrieved 2026-01-23 series). CWY 300×150 m both ends; strip 3,290×300 m both ends; RESA 90×90 m both ends. No displaced threshold. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Nejran Information | 128.800 | H24 | |
| Tower | Nejran Tower | 118.500 (DOC 20 NM/8,500 ft) | **03:00–19:00 UTC** | 351.100 same hours |
| AFIS | Nejran Tower (AFIS mode) | 118.500 (DOC 20 NM/8,500 ft) | **19:00–03:00 UTC** | 351.100 same hours; advisory service only outside Tower hours |
| Ground | Nejran Ground Control | 121.900 (DOC 20 NM/GND) | H24 | 355.900 also listed |
| TIBA | — | 122.800 | H24 | TIBA procedure applied outside Nejran CTR hours |
| Emergency | Guard | 121.500 / 243.000 | H24 | |
| Centre / FIR | Jeddah FIR (OEJD) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: SANS/GACA eAIP, AD 2 OENG 2.18.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 06 | INEJ | 109.300 | H24 | CAT I; two chart variants published (ILS Y, ILS Z/LOC) |
| GP RWY 06 | INEJ | 332.000 | H24 | GPA 3°, RDH 50 ft |
| DME RWY 06 | INEJ | CH30X | H24 | Mag decl 2° E (navaid-table value); antenna elevation 4,000 ft |
| DVOR/TACAN | NEJ | 116.700 (CH114X) | H24 | Mag decl 2° E (navaid-table value); antenna elevation 4,000 ft |

*Source: SANS/GACA eAIP, AD 2 OENG 2.19. Note the 2° E navaid-table mag-var value differs from the 3° E field-level value in AD 2.2 — flagged as an internal AIP discrepancy, §18.*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft; TL by QNH — verify current AIRAC. 🟧
- **Speed:** Below 10,000 ft AIP-published limits: turbine aircraft in the traffic circuit max 200 KT, elsewhere max 250 KT (functionally standard ICAO speed control, published locally under the AIP's noise-abatement section).
- **Preferential runway logic:** No published preferential rule; RWY 06 is the only precision-approach direction. Circuit direction is asymmetric (§4).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 06 | ILS Z or LOC (INEJ), ILS Y (INEJ), VOR | — | — | CAT I; two distinct ILS chart variants |
| 24 | VOR Z, VOR X, VOR Y | — | — | **No precision approach** — three distinct VOR chart variants |

- **STARs (names only):** **STAR RWY 06-24** is AIP-published as a combined chart — verify current-AIRAC track/altitude detail. 🟧
- **LVP:** Trigger conditions not confirmed this pass. 🟧
- **Missed approach watch-items:** Not independently detailed this pass beyond the terrain-awareness note (§3.1) — verify current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **SID RWY 06** and **SID RWY 24** are AIP-published as separate charts — verify exact tracks/altitudes on the current chart. 🟧
- **RNP / climb-gradient requirements:** Not independently confirmed this pass — given the field's hot-and-high profile, verify climb-gradient requirements on the current chart. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not independently confirmed — coordinate with Ground/Tower (or AFIS outside Tower hours). 🟧
- **ATC slot / CTOT & clearance:** No slot regime identified; note the Tower/AFIS hours split (§6/§8) when planning clearance delivery.
- **De-icing:** NIL (not published; highland winter nights can be cool, but no de-icing infrastructure is published).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** AIP publishes a general below-10,000-ft speed limit (200 KT circuit / 250 KT elsewhere) under this heading — functionally a standard speed restriction rather than a dedicated NAP.
- **Night noise / dB limits:** None published.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** No K Global stand assignment (not in VAMSYS). Apron 1 (concrete, PCN 75/R/B/W/T) is the higher-strength surface; Apron 2 (concrete, PCN 30/R/B/W/T) is lower-strength. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** TWY A/B/C/D, 26 m, asphalt PCN 60/F/A/X/T.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data. 🟩
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Southern-Saudi highland climate; cooler than the coastal/Gulf fields at this elevation.
- **Seasonal hazards:** Regional shamal/dust exposure and extreme summer heat/density-altitude per the [Middle East airspace brief](../../../../airspace/middle-east.md) §11 — directly relevant given this field's hot-and-high profile.
- **Local effects:** None field-specific identified beyond the highland-plateau setting.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. **Given the §2/§5 regional closure/security status and the undefined-border acknowledgment, this is the single most important pre-planning check for this field** — confirm current NOTAM-open status before any further planning, in addition to the standard checks: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block; cross-check the [Middle East airspace brief](../../../../airspace/middle-east.md) §9/§11 live-data pointers.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not assigned (not in VAMSYS); AIP itself notes the field's role as an alternate aerodrome. 🟧
- **Nearest suitable alternates (computed from AIP ARP coordinates, not a VAMSYS/company figure):** **OEAB** (Abha, ~108 NM NW) — *also carries the same regional closure status, see §2* 🟥; **OEBH** (Bisha, ~175 NM NW); **OERK** (Riyadh/King Khaled Intl, ~459 NM N) — the nearest unaffected full-service field at range. 🟧
- **Fuel-uplift notes:** Jet A-1, tanker-served, hours of operation (HO) not H24 — confirm exact window. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** No fleet assignment (not in VAMSYS). Hot-and-high performance is the binding consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) once a type is assigned.

---

## 17. Fleet-specific notes (optional)

- No K Global fleet/route assignment exists for this field (not in VAMSYS). **Any type assigned here must be validated for hot-and-high performance at 3,983 ft elevation / 38.2°C reference temperature** — the most demanding combination in this pack — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field closure/security status (§2/§5)** — the durable snapshot records a NOTAM-closure history; live status must be re-confirmed before any planning use. **Highest-priority open item on this brief.**
- **Mag-var discrepancy** — field-level AD 2.2 states 3° E (2020); the navaid table (AD 2.19) states 2° E — not reconciled in this pass.
- STARs/SIDs exact tracks/altitudes, take-off minima, LVP trigger, engine run-up restriction, reverse-thrust policy, push-back/follow-me availability — none confirmed in reachable sources.
- Exact customs/fuelling/handling operating-hours window (HO) — not quantified beyond "hours of operation."
- Handling agent(s) beyond the AIP-listed national-carrier arm — not individually confirmed.
- K Global category/base/alternates/taxi-times — pending VAMSYS reconciliation (field is not in VAMSYS at all).
- No dedicated VATSIM vACC/division SOP found for OENG in this research pass — cross-check when one becomes available.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OENG — Nejran**, AIRAC AMDT cycle retrieved (2026-01-23 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2009_26_2026_01_23/eAIP/AD%202%20OENG%20NEJRAN-en-GB.html (retrieved 2026-07-26). *Primary source for ARP, elevation, runways/declared distances, RFF, comms, navaids, hours, the undefined-border local regulation, Tower/AFIS split.*
- OurAirports — https://ourairports.com/airports/OENG/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- **K Global — [Middle East airspace brief](../../../../airspace/middle-east.md)** (internal companion document, v0.1, 2026-07-25) — regional conflict-zone/closure status (§9), sourced in turn to EASA CZIBs and OPSGROUP Middle East operational-picture reporting. *Primary basis for the §2/§5 closure watch-item in this brief.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
