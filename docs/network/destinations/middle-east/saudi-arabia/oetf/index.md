# OETF — Taif Intl · Airport Briefing

**OETF / TIF** · Taif, Makkah Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Saudi Arabia not reached this pass; tier-4-verified, provisional

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (SkyVector, Wikipedia) — the GACA AIP/eAIP was not reachable this pass (JS-rendered portal). Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N21°29.00′ / E040°32.67′ (21.4833, 40.5445) `[SkyVector]` |
| Field elevation | **4,848 ft AMSL** (runway 07 threshold — highest confirmed point; other thresholds 4,737–4,775 ft) — confirmed by both SkyVector and Wikipedia-class sources |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+3 (AST, no DST observed) |
| Runway(s) | **07/25**, 3,735 × 45 m (12,254 × 148 ft), hard surface · **17/35**, 3,350 × 45 m (10,991 × 148 ft), surface not confirmed — 🟧 **the task brief's assumed 18/36 designator is not corroborated; two independent tier-4 checks show 07/25 + 17/35 — see §18** |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | 3,735 m (12,254 ft) nominal on 07/25; per-threshold declared-distance breakdown not published 🟧 |
| Approaches | Not confirmed in reachable sources — pull current-AIRAC procedure list at planning 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar/procedural mix typical of a Jeddah (OEJD) FIR field close to the Jeddah TMA — not independently confirmed for OETF specifically 🟧 |
| Elevation class | **HIGH-ELEVATION / hot-and-high** 🟥 — 4,848 ft field elevation meets a meaningful fraction of the OM E ≳8,000 ft working trigger and, combined with summer temperatures, drives a real density-altitude performance penalty; see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) |
| Special-airport status | Historic field (witnessed the first landing of Ibn Saud's aircraft, founder of the Kingdom); converted to regional/international status in 2009 |
| Customs / PoE | International since 2009; hours not published / verify 🟧 |
| K Global category | 🟧 **Not in VAMSYS** — unset |
| K Global base | 🟧 **Not in VAMSYS** — unset |
| Company preferred alternates | 🟧 **Not in VAMSYS** — unset |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** — unset |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Taif sits in the western Hejaz/Sarawat highlands, ~30 km east of the city and near the escarpment down to the Jeddah coastal plain — mountainous surrounding terrain is expected but not independently quantified in reachable sources; treat as a genuine CFIT consideration pending a chart/MSA check. |
| Runway length vs fleet perf | 🟧 | 3,735 m nominal is generous in absolute terms, but **at 4,848 ft field elevation the effective/limiting factor is thrust and climb-gradient, not raw length** — see §3.5 and OM E. |
| Approach availability / minima | 🟧 | Not confirmed in reachable sources — verify current AIRAC. |
| Airspace / traffic / control | 🟧 | Close to the Jeddah (OEJN) TMA (~78 NM) and the Jeddah (OEJD) FIR core; traffic density not independently quantified for OETF itself. |
| Weather / seasonal hazard | 🟥 | Highland climate — hot summer days combined with the field's elevation is the field's defining **hot-and-high** performance driver; see §3.5/§14. |
| Curfew / slots / hours | 🟧 | Not published / verify. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not confirmed in reachable sources. |
| Customs / handling / security | 🟧 | International status since 2009; desk hours and handling detail not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
Taif sits in the western Hejaz/Sarawat highland belt, roughly 30 km east of the city of Taif and about 70 km from Mecca, near the escarpment that drops from the highland plateau down to the Jeddah coastal plain. The Middle East regional airspace brief notes the wider **Asir/Sarawat Mountains** belt (further south, rising to ~3,133 m/~10,280 ft near the Yemen border) as a hot-and-high/terrain driver for the region's southern-bypass corridor — see [Middle East Airspace Briefing](../../../../airspace/middle-east.md) §7. Taif itself sits further north on the same highland system; no field-specific MSA/terrain figure was found in reachable public sources this pass — treat the surrounding high ground as a real consideration and confirm the MSA ring and terrain-clearance picture on the current chart before planning any non-standard arrival/departure.

### 3.2 Airborne conflict / traffic 🟧
OETF lies within the **Jeddah (OEJD) FIR**, roughly 78 NM from King Abdulaziz International (OEJN/Jeddah) and its TMA — see [Middle East / Gulf Airspace Briefing](../../../../airspace/middle-east.md). No field-specific traffic-density data was found; treat as a moderate regional field with seasonal Hajj/Umrah-period traffic effects on the wider Jeddah TMA that could indirectly affect OETF arrivals/departures during peak season.

### 3.3 Runway excursion 🟧
Two runways identified (07/25, 17/35); no displaced threshold or declared-distance detail was found in reachable sources for either — not independently confirmed. 17/35's surface type is unconfirmed in the sources reached.

### 3.4 Weather threat 🟥
Highland desert climate — Taif is known regionally as a warm-weather retreat *relative to* the Jeddah coastal plain, but summer daytime temperatures at 4,848 ft still combine with the field elevation to produce meaningful **density altitude**. Regional **shamal winds and blowing dust** also apply (see [Middle East Airspace Briefing](../../../../airspace/middle-east.md) §11). No OETF-specific climatology statistic was found this pass — see §14.

### 3.5 Operational considerations 🟥
**This is the pack's hot-and-high field.** At 4,848 ft field elevation, a hot summer day pushes density altitude well above the field elevation, which — per [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — makes take-off performance **thrust/climb-gradient-limited rather than field-length-limited**, lengthens landing ground-roll via higher groundspeed, and typically forces a **payload/fuel trade-off** on hot-day departures rather than a simple runway-length check. Dispatch must compute RTOW, V-speeds and the net take-off flight path from the AFM/EFB performance application for the day's temperature and weight — **never assume the 3,735 m runway alone clears the constraint**. Confirm SID minimum-climb-gradient compliance and the engine-out obstacle/escape routing given the surrounding highland terrain (§3.1). See the OM E doc for the full method; per-type hot-and-high sensitivity is tabulated in the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md), Table D.

---

## 4. Cautions & Warnings

- 🟥 **Hot-and-high field (4,848 ft)** — compute RTOW/climb-gradient from the AFM/EFB for the day's temperature and weight; do not assume the long runway removes the constraint. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- **Surrounding highland/escarpment terrain** — confirm MSA and any engine-out obstacle/escape routing on the current chart before planning.
- **Two civil runways (07/25, 17/35)** — confirm which is active and the day's config logic; not published this pass.
- 🟧 Runway designator/pairing not independently AIP-confirmed against the task's assigned reference data — verify against current AIRAC (§18).
- Regional **shamal dust** and summer heat — confirm current METAR/TAF and any dust NOTAM at planning; heat directly compounds the hot-and-high performance penalty above.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing item is the **hot-and-high elevation regime** (§3.5) combined with surrounding highland terrain. 🟥
- **Crew-qualification gate:** None identified in reachable sources beyond standard hot-and-high/high-elevation-aerodrome briefing per [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md). 🟧
- **Operating restrictions / bans:** Not confirmed — verify current AIRAC for any RNP AR / circling restriction or engine-out obstacle departure requirement. 🟧
- **Overflight / entry / permits:** Standard Saudi international arrival (international/regional status since 2009); no special state permit identified. 🟧
- **Operations notes:** ANSP — GACA / Jeddah (OEJD) FIR. Historic significance: the field witnessed the first landing of the aircraft of Ibn Saud, founder of the Kingdom — no current operational impact.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not confirmed in reachable sources | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE since 2009; hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 3,735 × 45 m (12,254 × 148 ft) | Hard (PCN not published) 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | THR elev **4,848 ft** — field's high point |
| 25 | 3,735 × 45 m (12,254 × 148 ft) | Hard (PCN not published) 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | THR elev 4,737 ft |
| 17 | 3,350 × 45 m (10,991 × 148 ft) | Surface not confirmed 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | THR elev 4,753 ft |
| 35 | 3,350 × 45 m (10,991 × 148 ft) | Surface not confirmed 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | THR elev 4,775 ft |

*Source: SkyVector airport data (retrieved 2026-07-26). 🟧 The task brief's reference data assumed an 18/36 designator; reachable public sources instead show two runways, 07/25 and 17/35 (17/35's surface unconfirmed) — flagged for AIP cross-check (§18). No displaced-threshold or per-threshold declared-distance table found; treat TORA/TODA/ASDA/LDA as the nominal runway length pending AIP confirmation — and note per §3.5 that raw length is not the binding hot-and-high performance limit in any case.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Taif ATIS | 127.05 | Not published / verify | 🟧 |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Taif Ground / Ground Control | 121.90 / 335.30 | Not published / verify | 🟧 |
| Tower | Taif Tower | 118.70 / 237.60 | Not published / verify | 🟧 |
| Approach | Taif Approach | 119.70 / 349.50 | Not published / verify | Field has a dedicated Approach position |
| Emergency | Taif Tower Emergency | 121.50 / 243.00 | H24 (guard) | Standard VHF/UHF guard |
| Centre / FIR | Jeddah (OEJD) | Per current AIRAC | H24 | See [Middle East Airspace Briefing](../../../../airspace/middle-east.md) |

*Source: SkyVector airport communications data (retrieved 2026-07-26) — tier-4, not independently AIP-verified. Dedicated Approach frequency (unlike OESK/OETB in this pack) is consistent with proximity to the Jeddah TMA.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR (on field) | TIF | 112.70 | Not published / verify | On-field, radial 216°/0.2 NM from ARP |
| VOR | KFB (King Faisal Naval Base) | 113.10 | Not published / verify | ~77.3 NM, radial 079° |
| VOR | JDW (King Abdulaziz, Jeddah) | 115.30 | Not published / verify | ~80.6 NM, radial 095° |
| VOR | BHA (Al Baha) | 113.50 | Not published / verify | ~93.7 NM, radial 316° |
| ILS | Not confirmed in reachable sources | — | — | 🟧 verify current AIRAC |

*Source: SkyVector navaid data (retrieved 2026-07-26) — tier-4, not independently AIP-verified.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07/25 | Not confirmed in reachable sources | — | — | 🟧 |
| 17/35 | Not confirmed in reachable sources | — | — | 🟧 |

- **STARs (names only):** Not confirmed in reachable sources — pull current-AIRAC list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** 🟥 **Terrain-driven** — surrounding highland/escarpment terrain (§3.1) is the operative missed-approach concern here, unlike the flatter fields elsewhere in this pack; confirm the published missed-approach climb gradient and any terrain-driven turn constraint on the current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable sources. 🟧
- **RNP / climb-gradient requirements:** 🟥 Expect a **non-standard (>200 ft/NM) minimum climb gradient** to be plausible given the field's elevation and surrounding terrain, per the general OM E high-elevation pattern — not independently confirmed for OETF specifically; verify on the current chart. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified for this field class; assumed none. 🟧
- **De-icing:** Not applicable — desert/highland climate; no cold-weather season identified, though highland nights can be markedly cooler than the coastal plain — not a de-icing driver on current evidence.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources. 🟧
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Highland Hejaz/Sarawat climate — markedly cooler than the Jeddah coastal plain at altitude, but still hot in summer; prevailing wind not confirmed.
- **Seasonal hazards:** **Density-altitude/hot-and-high performance penalty** is the field's defining hazard (§3.5) — worst on hot summer afternoons. Regional **shamal winds and blowing dust** also apply (see [Middle East Airspace Briefing](../../../../airspace/middle-east.md) §11). No OETF-specific climatology statistic was found this pass.
- **Local effects:** Highland/escarpment terrain effects (mechanical turbulence, local wind channelling) are plausible given the surrounding topography but not independently quantified.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, and the regional GNSS-jamming/conflict-zone NOTAM picture (see [Middle East Airspace Briefing](../../../../airspace/middle-east.md) §9/§11). Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** 🟧 Not yet defined in VAMSYS — based on field characteristics (regional/domestic + seasonal international leisure traffic near Mecca, hot-and-high elevation), a plausible role is a **thin regional destination**, not a hub or primary alternate.
- **Nearest suitable alternates:** Jeddah/King Faisal Navy Base (OEJF, ~77 NM), King Abdulaziz Intl (OEJN, ~78 NM), King Saud Bin Abdulaziz (OEBA, ~94 NM) `[SkyVector proximity data, retrieved 2026-07-26]` — OEJN in particular is a major sea-level hub and a strong practical alternate; confirm suitability, runway/RFF adequacy and current minima before relying on any as a planning alternate. 🟧 No VAMSYS-mirrored preferred-alternate set exists for this field.
- **Fuel-uplift notes:** Not confirmed in reachable sources. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟥 Field length (3,735 m) is generous in absolute terms but **the binding constraint at 4,848 ft is thrust/climb-gradient, not length** — compute RTOW per type/day/weight from the AFM/EFB; do not treat this as a non-limiting field by length alone. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) Table D (hot-and-high sensitivity by type) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 17. Fleet-specific notes (optional)

- **Hot-and-high sensitivity varies materially by type** — per the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) Table D, geared-turbofan narrowbodies and types like the A359/B789 rate low on hot-and-high sensitivity, while heavy quads and other high-MTOW types carry a notable hot/high payload penalty. This is an indicative type-tendency reference only — the actual RTOW/gradient numbers for any planned OETF rotation remain an AFM/EFB output for the day's weight and temperature, not a value stored here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Runway designator/pairing** — this brief's assigned reference data indicated 18/36; reachable public sources instead show two runways, 07/25 and 17/35 (17/35's surface unconfirmed). Resolve against the GACA AIP before use.
- **GACA AIP/eAIP** was not reachable this pass (JS-rendered portal) — declared distances, PCN, RFF category, ATS/AD hours, curfew, fuel, customs hours, stands, taxi routes, approaches, SIDs/STARs, take-off minima, SID minimum-climb-gradient tables, noise procedures all unconfirmed.
- **Terrain/MSA detail** around the field (escarpment to the Jeddah plain, highland relief) — not independently quantified in reachable public sources; a genuine gap given the field's hot-and-high/terrain profile.
- Magnetic variation, transition altitude/level, and preferential-runway logic — not found in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- SkyVector — OETF Taif International Airport — https://skyvector.com/airport/OETF/Taif-International-Airport (retrieved 2026-07-26). *Runway, navaid, communications, elevation, ARP data.*
- Wikipedia — "Taif International Airport" — https://en.wikipedia.org/wiki/Taif_International_Airport (retrieved 2026-07-26). *History (Ibn Saud first landing), location relative to Taif city/Mecca, 2009 regional/international conversion.*
- General Authority of Civil Aviation (GACA) — airport landing page search attempted; no direct reachable Taif page found this pass (JS-rendered portal pattern); not usable as a citable source.
- [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — cross-referenced for the hot-and-high performance method applied at this field (internal OM E procedure, not a public URL).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public tier-4 sources (GACA AIP unreachable); K Global fields not in VAMSYS (flagged); cross-linked to OM E High-Elevation Aerodrome Operations; 4-page pack. |
