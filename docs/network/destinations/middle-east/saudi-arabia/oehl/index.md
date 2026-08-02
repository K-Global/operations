# OEHL — Hail · Airport Briefing

**OEHL / HAS** · Hail, Hail Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Saudi AIP (SANS eAIP, AD 2 OEHL) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N27°26′23.0″ / E041°41′11.0″ (27.4397, 41.6864) `[AIP AD 2 OEHL 2.2]` — 5 NM S of Hail city |
| Field elevation | **3,305 ft AMSL** (reference temperature 37.6°C); highest runway TDZ (RWY 36) 3,331 ft |
| Mag variation | 4° E (2020 epoch, 0.05°/yr increasing) |
| Time zone | UTC+3 (AST) — no DST observed |
| Runway(s) | **18/36**, 3,300 × 45 m, asphalt (PCN 58/F/A/X/T) — single runway field |
| Preferential runway | No published preferential rule; right-hand circuit for RWY 36 (AIP-specified); RWY 18 by implication standard/left-hand |
| Longest LDA | 3,300 m (both ends) |
| Approaches | **ILS CAT I / LOC RWY 18** (IHIL), **RNP RWY 18**, **RNP RWY 36**, **VOR RWY 18**, **VOR RWY 36** — **no precision approach on RWY 36** |
| RFF category | **CAT 7** |
| Control type | **Radar/procedural mix** — Hail Approach (Class C TMA, 40 NM/4,500 ft AMSL) and Hail Tower (Class D CTR) |
| Elevation class | 🟥 **Hot-and-high** — 3,305 ft field elevation with a 37.6°C reference temperature is a genuine density-altitude/performance driver — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) |
| Special-airport status | 🟧 Field surrounded by granite highland terrain (Jabal Aja/Jabal Salma ranges) — see §3.1; AIP-published circling-area obstacle (TV tower/broadcast antenna, ~3,790 ft, 4,800 m west of the field) — see §3.1/§4 |
| Customs / PoE | **Yes** — customs/immigration H24 |
| K Global category | 🟧 **Not in VAMSYS** — pending reconciliation |
| K Global base | 🟧 **Not in VAMSYS** — pending reconciliation |
| Company preferred alternates | 🟧 **Not in VAMSYS** — pending reconciliation; see §16 for geographically nearest fields (computed, not company-assigned) |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Hail city sits on a high plateau ringed by the **Jabal Aja (~1,544 m/5,066 ft)** and **Jabal Salma (~1,430 m/4,692 ft)** granite ranges; the AIP separately publishes a **circling-area obstacle** (TV tower/broadcast antenna, ~3,790 ft, ~2.6 NM west of the field). Genuine terrain/obstacle awareness item — see §3.1. |
| Runway length vs fleet perf | 🟧 | 3,300 m at 3,305 ft elevation is workable for narrowbody types but the **field elevation/reference-temperature combination is a real hot-and-high performance driver**. No K Global fleet assignment exists to validate against (not in VAMSYS). |
| Approach availability / minima | 🟧 | ILS CAT I only on RWY 18; RWY 36 is RNP/VOR only — a minima gap on that direction. |
| Airspace / traffic / control | 🟩 | Class C TMA (40 NM) / Class D CTR (10 NM), moderate traffic, radar/procedural mix. |
| Weather / seasonal hazard | 🟧 | High-plateau interior climate; regional shamal/dust exposure per the airspace brief; no field-specific severe-weather statistic sourced this pass. |
| Curfew / slots / hours | 🟩 | No slot regime; ATS/fuelling/handling/security/customs all published H24 (health/sanitation PN only). |
| RFF category vs our types | 🟧 | CAT 7 — adequacy against any assigned K Global type not yet validated (no fleet assignment). |
| Fuel availability | 🟧 | Jet A-1, H24 per AIP, tanker-served — capacity figure not published. |
| Customs / handling / security | 🟩 | Customs/immigration H24; handling/security H24. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
OEHL sits at 3,305 ft AMSL on the high Najd plateau at the edge of Hail city, itself ringed by two named granite ranges — **Jabal Aja** (~1,544 m/5,066 ft, roughly 1,750 ft above the field) to the west and **Jabal Salma** (~1,430 m/4,692 ft, roughly 1,360 ft above the field) — both reported in general geographic sources as flanking the city, though neither is captured as a numbered obstacle in the reachable AIP obstacle table. 🟧 The AIP's own obstacle data (AD 2.10) instead flags a closer, quantified hazard: a **TV tower (~3,793 ft) and broadcast antenna (~3,787 ft), roughly 4,800 m (~2.6 NM) west of the aerodrome**, in the circling area. Treat the AIP obstacle as the authoritative close-in figure and the named mountain ranges as regional-terrain awareness pending MSA-chart confirmation — verify both against the current area/approach charts.

### 3.2 Airborne conflict / traffic 🟩
Hail Approach (Class C TMA, 4,500 ft AMSL within 40 NM) and Hail Tower (Class D CTR, 10 NM, SFC–5,500 ft AMSL) manage a moderate interior-Saudi traffic volume with field surveillance radar (40 NM radius) and standard VFR gates (East Gate/training city, West Gate/farm). No unusual traffic-density or congestion note found.

### 3.3 Runway excursion 🟧
No displaced threshold. THR 18 elevation 3,265 ft (TDZ 3,299 ft), THR 36 elevation 3,301 ft (TDZ 3,331 ft — the field's highest point) — a +0.3%/−0.3% longitudinal grade, steeper than the other four Saudi regional fields in this pack. CWY 420×45 m (RWY 18) / 400×45 m (RWY 36); a short 60×45 m SWY exists on RWY 36 only. No RESA published. PCN 58/F/A/X/T is adequate for narrowbody types; no contamination-specific note found this pass.

### 3.4 Weather threat 🟧
High-plateau interior climate — hot summers, cooler winters than the coastal/Gulf fields, with the regional shamal/dust exposure documented in the [Middle East airspace brief](../../../../airspace/middle-east.md) §11. No field-specific thunderstorm-frequency statistic sourced this pass.

### 3.5 Operational considerations 🟥
The field's genuine, quantified operational threats are **hot-and-high performance** (3,305 ft elevation, 37.6°C reference temperature — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md)) and the **RWY 36 minima gap** (no precision approach). The AIP-published RNP holding structure (RADMI/SISIX for RWY 18, UMIKA/VUSOL for RWY 36, with dedicated missed-approach holds TAPLKI/PASIV) indicates a reasonably developed RNP environment for a regional field — verify current names/altitudes on the chart before use.

---

## 4. Cautions & Warnings

- 🟧 **Circling-area obstacle**, AIP-published: a TV tower (~3,793 ft) and broadcast antenna (~3,787 ft) roughly 4,800 m (~2.6 NM) west of the aerodrome — verify against the current area/approach chart.
- 🟧 Hail city is ringed by the **Jabal Aja and Jabal Salma** granite highland ranges — general terrain awareness; not independently confirmed as charted obstacles for this specific approach/departure geometry.
- 🟥 **Hot-and-high field** — 3,305 ft elevation combined with a 37.6°C reference temperature; validate weight/performance for the assigned type before use.
- 🟧 **RWY 36 has no precision approach** — RNP/VOR only; RWY 18 carries the field's only ILS.
- 🟧 A short stopway (60×45 m) exists on RWY 36 only — do not assume symmetry between the two runway ends.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **hot-and-high performance case** and the **RWY 36 minima gap**. 🟧
- **Crew-qualification gate:** None published beyond standard IFR currency and hot-and-high performance validation.
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Kingdom of Saudi Arabia entry; no additional state permit found. 🟩
- **Operations notes:** ANSP/regulator — **General Authority of Civil Aviation (GACA)**. Ground handling/repair per AIP is the national flag-carrier's arm; other agents not confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD administration HS Sun–Thu 05:00–13:00 (0800–1600 LMT); ATS/customs/immigration/fuelling/handling/security published H24; health/sanitation PN only | 🟧 |
| Night / curfew restrictions | None published | 🟩 |
| RFF category | CAT 7 | 🟩 |
| Fuel | Jet A-1, H24, tanker-served (capacity not published) | 🟧 |
| PCN | RWY 58/F/A/X/T; taxiways 56/F/A/X/T; aprons (civil/helipad) 42/R/C/W/T | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | National flag-carrier handling arm (AIP-listed); others not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 18 | 3,300 × 45 m | Asphalt / PCN 58/F/A/X/T | 3,300 m | 3,720 m | 3,720 m | 3,300 m | THR elev 3,265 ft, TDZ 3,299 ft; ILS CAT I (IHIL); CWY 420×45 m |
| 36 | 3,300 × 45 m | Asphalt / PCN 58/F/A/X/T | 3,300 m | 3,700 m | 3,360 m | 3,300 m | THR elev 3,301 ft, TDZ 3,331 ft (field's high point); **no precision approach**; short 60×45 m SWY; CWY 400×45 m |

*Source: SANS/GACA eAIP, AD 2 OEHL 2.12/2.13 (AIRAC AMDT cycle retrieved 2026-03-19 series). No displaced threshold. No RESA published. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Hail Information | 127.850 | H24 | D-ATIS available via SITA on request |
| Approach | Hail APP | 123.200 (primary, DOC 60 NM/15,000 ft) · 120.250 (secondary) | H24 | 234.500 MIL |
| Tower | Hail TWR | 118.700 (DOC 60 NM/15,000 ft) | H24 | 237.600 MIL; guard 121.500/243.000 |
| Ground | Hail Ground Control | 121.900 (DOC 5 NM/GND) | H24 | 335.300 MIL |
| Centre / FIR | Jeddah FIR (OEJD) | Per current AIRAC | H24 | See [Middle East airspace brief](../../../../airspace/middle-east.md) |

*Source: SANS/GACA eAIP, AD 2 OEHL 2.18.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY 18 | IHIL | 110.300 | H24 | CAT I |
| GP RWY 18 | IHIL | 335.000 | H24 | GPA 3°, ILS reference-datum height 53 ft |
| DME RWY 18 | IHIL | CH40X | H24 | Antenna elevation 3,300 ft |
| DVOR/TACAN | HIL | 113.500 (CH82X) | H24 | Mag decl 4° E; antenna elevation 3,400 ft |

*Source: SANS/GACA eAIP, AD 2 OEHL 2.19.*

---

## 10. Arrival

- **Transition altitude / level:** TA 13,000 ft; TL by QNH — verify current AIRAC. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 unless otherwise directed.
- **Preferential runway logic:** No published preferential rule; RWY 18 is the only precision-approach direction. Right-hand circuit specified for RWY 36.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 18 | ILS/LOC (IHIL), RNP, VOR | RADMI/SISIX (RNP) | — | CAT I; HIL DVORTAC hold MHA 6,500 ft |
| 36 | RNP, VOR | UMIKA/VUSOL (RNP) | — | No precision approach; HIL DVORTAC hold MHA 6,500 ft |

- **STARs (names only):** Not confirmed in reachable research pass — pull current-AIRAC arrival routing at planning. 🟧
- **LVP:** Trigger conditions not confirmed this pass. 🟧
- **Missed approach watch-items:** Dedicated RNP missed-approach holds are AIP-published — **TAPLKI** (6,000 ft, RWY 18) and **PASIV** (7,500 ft, RWY 36) — verify current chart for the live procedure. Terrain/obstacle awareness per §3.1 applies to any missed-approach path.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Published IFR departure — **RWY 18: climb outbound on HIL radial 174 to 6,500 ft, expect radar vectors. RWY 36: climb outbound on HIL radial 003 to 6,500 ft, expect radar vectors.** Verify exact profile on current chart.
- **RNP / climb-gradient requirements:** Not independently confirmed beyond the above — verify current AIRAC. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not independently confirmed — coordinate with Ground/Tower. 🟧
- **ATC slot / CTOT & clearance:** No slot regime identified.
- **De-icing:** NIL (not applicable to this climate, though winter nights on this high plateau can be cool — no de-icing infrastructure published regardless).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None published. 🟧
- **Night noise / dB limits:** None published.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** No K Global stand assignment (not in VAMSYS). Civil Apron and a Helipad, both concrete PCN 42/R/C/W/T. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** TWY A/A1/A2/A3, 23 m, asphalt PCN 56/F/A/X/T.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data. 🟩
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** High-plateau interior climate — hotter summers, cooler winters than the coastal Saudi fields in this network.
- **Seasonal hazards:** Regional shamal/dust exposure and extreme summer heat/density-altitude per the [Middle East airspace brief](../../../../airspace/middle-east.md) §11 — directly relevant given this field's own elevation.
- **Local effects:** None field-specific identified beyond the highland-plateau setting.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not assigned (not in VAMSYS). 🟧
- **Nearest suitable alternates (computed from AIP ARP coordinates, not a VAMSYS/company figure):** **OEGS** (Qassim, ~131 NM SE); **OERK** (Riyadh/King Khaled Intl, ~308 NM SE) — the nearest major full-service field. 🟧
- **Fuel-uplift notes:** Jet A-1, H24, tanker-served (capacity figure not published). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** No fleet assignment (not in VAMSYS). Hot-and-high performance is the binding consideration — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) once a type is assigned.

---

## 17. Fleet-specific notes (optional)

- No K Global fleet/route assignment exists for this field (not in VAMSYS). **Any type assigned here must be validated for hot-and-high performance at 3,305 ft elevation / 37.6°C reference temperature**, and for the RWY 36 non-precision minima — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Jabal Aja/Jabal Salma terrain proximity** to the actual approach/departure/missed-approach paths — sourced to general geographic references, not the AIP obstacle table; cross-check against the current area/MSA chart.
- STARs, exact take-off minima, LVP trigger conditions, engine run-up restriction, reverse-thrust policy, push-back/follow-me availability — none confirmed in reachable sources.
- Handling agent(s) beyond the AIP-listed national-carrier arm — not individually confirmed.
- Fuel-tanker capacity figure — not published.
- K Global category/base/alternates/taxi-times — pending VAMSYS reconciliation (field is not in VAMSYS at all).
- No dedicated VATSIM vACC/division SOP found for OEHL in this research pass — cross-check when one becomes available.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEHL — Hail**, AIRAC AMDT cycle retrieved (2026-03-19 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIRAC%20AIP%20AMDT%2003_26_2026_03_19/eAIP/AD%202%20OEHL%20HAIL-en-GB.html (retrieved 2026-07-26). *Primary source for ARP, elevation, runways/declared distances, RFF, comms, navaids, hours, obstacle table, RNP holding structure.*
- OurAirports — https://ourairports.com/airports/OEHL/ (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- House of Saud — "Hail Region Guide: Saudi Arabia's Desert Rose" — https://houseofsaud.com/travel/hail-region-guide/ (retrieved 2026-07-26). *Jabal Aja/Jabal Salma elevation/proximity corroboration — travel-guide source, not AIP-grade.*
- **K Global — [Middle East airspace brief](../../../../airspace/middle-east.md)** (internal companion document, v0.1, 2026-07-25) — regional shamal/dust/heat seasonal context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
