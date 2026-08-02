# VMMC — Macao Intl · Airport Briefing

**VMMC / MFM** · Macau · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP Macao (Civil Aviation Authority of Macao — AACM), Part 3 (AD), AD 2 VMMC, plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 22°08′58″N / 113°35′29″E, middle of runway `[AIP Macao AD 2 VMMC 2.2]`; closely corroborated by OurAirports/SkyVector (22.149599, 113.592003 ≈ 22°08′59″N / 113°35′31″E) |
| Field elevation | **20 ft / 6.2 m AMSL**; reference temperature **31.5 °C** `[AIP Macao AD 2 VMMC 2.2]` |
| Mag variation | **3° W (2016 epoch)** `[AIP Macao AD 2 VMMC 2.2]` 🟧 confirm against current AIRAC |
| Time zone | UTC+8 (Macau Standard Time) — no daylight saving observed |
| Runway(s) | **16/34**, single runway, **3,360 × 45 m** physical length, concrete, PCN 66/R/B/W/T `[AIP Macao AD 2 VMMC 2.12]` — built on reclaimed land in the sea, connected to the apron by **two causeway bridges** |
| Preferential runway | Wind/config-driven; no independently sourced prevailing-wind/wind-rose data this pass 🟧 — **RWY 34 is the field's only ILS CAT II direction** and is expected to be preferred whenever low-visibility capability is needed |
| Longest LDA | **2,930 m (RWY 34)** — both ends carry a **published displaced threshold** that cuts the 3,360 m physical runway back to **2,865 m LDA (RWY 16)** and **2,930 m LDA (RWY 34)** `[AIP Macao AD 2 VMMC 2.13]` 🟧 |
| Approaches | **ILS CAT II on RWY 34 only**; ILS (CAT I) on RWY 16; RNAV(GNSS) SID/STAR require RNP 1 / certified GNSS or the Conventional Procedure; **RNP AR APCH not authorised without special AACM authorisation** `[AIP Macao AD 2 VMMC 2.24, 2.20 §10–11]` |
| RFF category | **CAT IX (ICAO Annex 14)** `[AIP Macao AD 2 VMMC 2.6]` 🟧 verify against our largest Code F types — see §17 |
| Control type | **Aerodrome control only at the field** (Macau Tower, Class C ATZ) — **Macau has no dedicated approach unit of its own**; arriving traffic is worked by **Zhuhai Approach** (mainland China, Guangzhou FIR/ZGZU) or **Hong Kong Radar** (VHHK) depending on inbound routing `[AIP Macao AD 2 VMMC 2.23]` 🟥 — see [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md) and [Asia airspace general](../../../../airspace/asia.md) |
| Elevation class | Sea-level (20 ft) — **not** hot-and-high; the operative reliability drivers are the **compact reclaimed-land runway with dual-end displaced thresholds** and the **shared external approach-control arrangement**, not density altitude |
| Special-airport status | 🟥 Not formally designated a "special airport" in reachable AIP text, but operational realities stack: ILS CAT II on one runway direction only, RNP AR APCH requires special AACM authorisation, and a single-runway reclaimed-land site with reduced LDA both ends — brief as a de facto special-handling field, see §5 |
| Customs / PoE | **Yes — H24** `[AIP Macao AD 2 VMMC 2.3]`. Macau is a **separate customs/immigration territory from mainland China and Hong Kong** — all passengers, including those to mainland China/Hong Kong, clear Macau immigration and customs; a "two customs, one checkpoint" bus-shuttle arrangement exists for transfers to the Macau ferry terminals (background context only) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **NO** `[VAMSYS mirror 2026-07-26]` — destination / alternate field within the network, not a company base |
| Company preferred alternates | VHHH (Hong Kong), WSSS (Singapore) `[VAMSYS mirror 2026-07-26]` — both cross-territory from Macau; VHHH lies ~20 NM ENE across the Hong Kong FIR boundary |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Reclaimed-land site at 20 ft AMSL; no significant terrain reported in the AIP obstacle data beyond marine-channel fairway notes near Taipa/Coloane. Not a CFIT-driven field. |
| Runway length vs fleet perf | 🟧 | 3,360 m physical runway, but **both thresholds are displaced**, giving a published LDA of only **2,865 m (16) / 2,930 m (34)**. Confirmed AIP figures, but not yet cross-checked against per-type max-landing-weight field-length requirements — see §16/§17. |
| Approach availability / minima | 🟧 | ILS CAT II exists on **RWY 34 only**; RWY 16 is CAT I. RNP AR APCH is **not authorised without special AACM approval**. SID/STAR/approach names not obtained in this research pass — see §10/§11/§18. |
| Airspace / traffic / control | 🟥 | **Macau has no dedicated approach control of its own** — arrivals are worked by Zhuhai Approach or Hong Kong Radar depending on routing, inside an extremely tight Pearl River Delta terminal complex wedged against the Guangzhou/Zhuhai TMA and the Hong Kong FIR. See §3.2. |
| Weather / seasonal hazard | 🟥 | NW-Pacific / South China Sea **typhoon season (~May–Nov, peak Jul–Sep)** can disrupt the whole Pearl River Delta cluster (VMMC/VHHH/ZGSZ/ZGGG) simultaneously; wet-runway friction is actively managed (Mu-meter, "slippery when wet" notification below 0.42) on a runway with reduced LDA. See §14. |
| Curfew / slots / hours | 🟩 | No published night curfew found — AIP AD 2.3 lists all operational functions (ATS, customs, fuelling, handling, security) as **H24**, corroborated by public reporting that the airport has no curfew. A narrower rule bars **ICAO Annex 16 Chapter 2 noise-classified aircraft** from operating 00:00–08:00 local — not a general curfew for our fleet. |
| RFF category vs our types | 🟧 | **CAT IX** confirmed `[AIP Macao AD 2 VMMC 2.6]` — comfortably covers our A339/A359/A35K/B77W/B789-class equipment. If a Code F, CAT-X-recommended type (e.g. A388/B748-class) is ever dispatched here, confirm CAT IX meets the Annex 14 requirement for that fuselage length before use — see §17. |
| Fuel availability | 🟩 | Jet A-1 (AVTUR) confirmed, H24, hydrant-served on the "even" A stands and all B stands `[AIP Macao AD 2 VMMC 2.4]`. |
| Customs / handling / security | 🟧 | Customs/immigration confirmed H24 `[AIP Macao AD 2 VMMC 2.3]`; specific ground-handling agent(s) contracted for a K Global operation not confirmed — Menzies Macau and Servair Macau are named generically in public reporting. See §6/§16. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
VMMC sits at 20 ft AMSL on land reclaimed from the sea adjacent to Taipa and Coloane islands — there is **no significant terrain** relevant to arrival, departure or missed-approach paths in the reachable AIP obstacle data; the only "obstacle" entries found relate to marine shipping-channel fairways (Porto Interior / Porto Exterior / Porto de Ka Ho) near the approach/take-off surfaces, not high ground. CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟥
VMMC's defining airspace characteristic is that **it has no dedicated approach control of its own**. The Macau ATZ is a small **Class C** volume — a 5 NM-radius circle from the ARP (3 NM to the west, plus stubs to 10 NM on the RWY 34 approach and to 6.27 NM on the RWY 16 localizer inbound track), surface to 3,000 ft AMSL, worked by **Macau Tower** — but arriving traffic is required to acknowledge the identifier of whichever **external** approach unit is responsible for the routing: **Zhuhai Approach** (120.35 MHz, backup 124.25 MHz — mainland China, Guangzhou FIR/ZGZU) or **Hong Kong Radar** (126.3 MHz / 119.1 MHz — VHHK) `[AIP Macao AD 2 VMMC 2.23]`. This reflects VMMC's position squeezed into the **Pearl River Delta's densest, most overlapping terminal airspace** — the AIP's own area chart shows the Macau ATZ directly abutting the **Zhuhai Terminal Control Area** and the Guangzhou TMA boundary, with Hong Kong (VHHH/VHHX), Shenzhen (ZGSZ) and Guangzhou (ZGGG) all within a short radius. Macau sits in **Guangzhou FIR (ZGZU)**, immediately adjacent to the Hong Kong FIR (VHHK) — see the [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md) and [Asia airspace general](../../../../airspace/asia.md) for the wider PRD/cross-boundary coordination picture. Expect vectoring, sequencing and cross-unit handoff discipline distinct from a field with its own approach control.

### 3.3 Runway excursion 🟥
The single runway is **compact and both thresholds are displaced**: the physical 3,360 m runway yields a published **LDA of only 2,865 m (RWY 16) and 2,930 m (RWY 34)** — a **360–370 m loss off each end** `[AIP Macao AD 2 VMMC 2.13]`. Combined with the runway being built on reclaimed land accessed by **two causeway bridges** as the sole apron connection, this is the field's genuine runway-excursion watch item — brief the reduced-LDA figures explicitly rather than the nominal 3,360 m runway length. RESA dimensions were not stated in the reachable AIP extract for this build — see §18. Wet-runway braking action is actively managed: runway friction is measured by Mu-meter and the runway is notified **"slippery when wet" below a friction value of 0.42** `[AIP Macao AD 2 VMMC 1.1]` — respect any such NOTAM given the already-reduced LDA. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

### 3.4 Weather threat 🟥
VMMC sits in the **NW-Pacific / South China Sea typhoon belt (season broadly May–Nov, peak Jul–Sep)** — a coastal, reclaimed-land, single-runway field is a genuine weather-disruption risk in season, and (per the adjacent Hong Kong FIR brief) a significant typhoon can degrade the **whole Pearl River Delta cluster (VMMC/VHHH/ZGSZ/ZGGG) simultaneously**, removing the nominal short-range PRD alternates all at once. Humid subtropical convection and heavy-rain events are a routine wet-runway/braking-action consideration given the reduced LDA (§3.3). See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) **no dedicated Macau Approach** — confirm the assigned external approach unit (Zhuhai or Hong Kong) at planning and on first contact; (2) **RNP AR APCH is not authorised without special AACM authorisation**, and RNAV(GNSS) SID/STAR use requires RNP 1/certified GNSS or the Conventional Procedure must be flown instead `[AIP Macao AD 2 VMMC 2.20 §10–11]`; (3) **transit engine-out ferry flights are not permitted** through Macau at all, and departure engine-out ferry flights are only permitted ex-RWY 16 under restricted conditions (min 1,000 ft ceiling / 5 km visibility, no revenue load) `[AIP Macao AD 2 VMMC 2.20 §5]`; (4) the **reduced-LDA runway** (§3.3) drives max-landing-weight planning on both ends. Reference temperature is 31.5 °C at 20 ft AMSL — **not** a hot-and-high field; density altitude is not a driver here.

---

## 4. Cautions & Warnings

- **Runway LDA is reduced by displaced thresholds on both ends** — 2,865 m (RWY 16) / 2,930 m (RWY 34) against a 3,360 m physical runway; do not plan against the nominal length.
- **No dedicated Macau Approach** — arriving traffic works Zhuhai Approach or Hong Kong Radar depending on routing; confirm the assigned frequency at first contact.
- **ILS CAT II exists on RWY 34 only** — RWY 16 is CAT I.
- **RNP AR APCH not authorised without special AACM authorisation**; RNAV(GNSS) SID/STAR requires RNP 1/certified GNSS, else fly the Conventional Procedure.
- **Two causeway bridges are the sole ground link** between the runway and the apron/terminal — a single-point ground-access chokepoint if either is affected.
- **Noise-abatement lateral limit:** do not overshoot (RWY 34 departure) or deviate from (RWY 16 arrival) the Jiuzhou DVOR (ZAO) R231° — a hard noise-abatement boundary for Zhuhai City.
- **Typhoon season (~May–Nov, peak Jul–Sep)** can disrupt the whole Pearl River Delta cluster simultaneously — build weather-independent alternate planning in season.
- **Transit engine-out ferry flights are not permitted**; departure engine-out ferry only ex-RWY 16, restricted conditions.
- **Wet-runway friction is actively managed** (Mu-meter, "slippery when wet" below 0.42) — respect any such NOTAM given the already-reduced LDA.
- **Training flights require 24 h written advance notice** to the Chairman of Civil Aviation — not a spontaneous local-flying field.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally designated a "special airport" crew-category in reachable AIP text; however the stacked operational realities (single-runway reclaimed-land site with reduced LDA both ends, ILS CAT II on one runway direction only, RNP AR APCH gated behind special authorisation, no dedicated Macau Approach) function as de facto special-handling considerations. 🟥
- **Crew-qualification gate:** CAT II currency required for any low-visibility arrival planned onto RWY 34; operator CAT II minima must be accepted by the Civil Aviation Authority of Macao (AACM), and non-Macau-registered operators must submit aircraft type/certification/minima details for consideration `[AIP Macao AD 2 VMMC 1.1]`. 🟧
- **Operating restrictions / bans:** **RNP AR APCH not authorised without special AACM authorisation**; RNAV(GNSS) SID/STAR requires RNP 1/certified GNSS approval or the Conventional Procedure must be flown; **transit engine-out ferry flights not permitted**; departure engine-out ferry only ex-RWY 16 under restricted conditions; overflight of Macau SAR urban areas (Macau Peninsula, Taipa, Coloane) is forbidden for all aircraft; training flights require 24 h advance written request to the Chairman of Civil Aviation `[AIP Macao AD 2 VMMC 2.20]`. 🟥
- **Overflight / entry / permits:** Standard international arrival; prior authorisation may be required per AIP GEN 1.2 outside existing bilateral scheduled-service agreements — confirm current requirement at planning. Macau is a separate customs/immigration territory (§1). 🟧
- **Operations notes:** Airport operator — **CAM (Macau International Airport Co. Ltd)**; regulator/ANSP — **Autoridade de Aviação Civil (AACM — Civil Aviation Authority of Macao)**. An airport **expansion masterplan** has been under development since 2016, with visible construction phases from 2020 and a further phase begun in 2025 targeting completion around 2030 — monitor NOTAMs for construction-related restrictions; none identified as currently in force in reachable sources.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | **H24** `[AIP Macao AD 2 VMMC 2.3]` | 🟩 |
| AD operating hours | AD administration **H24** `[AIP Macao AD 2 VMMC 2.3]` | 🟩 |
| Night / curfew restrictions | No published curfew found; all functions listed H24 in the AIP, corroborated by public reporting that VMMC has no night curfew. ICAO Annex 16 **Chapter 2 noise-classified aircraft banned 00:00–08:00 local** `[AIP Macao AD 2 VMMC 2.21]` — a narrow rule, not a general curfew. | 🟩 |
| RFF category | **CAT IX** `[AIP Macao AD 2 VMMC 2.6]` — 2 rescue vessels, 2 fire-fighting (foam/water) vessels, 1 SAR vessel (85-person capacity, 20 life rafts), disabled-aircraft lifting capability up to 224 t | 🟧 verify vs Code F types, §17 |
| Fuel | **Jet A-1 (AVTUR JET A1)**; hydrant-served on all "even" A stands and all B stands; H24 `[AIP Macao AD 2 VMMC 2.3–2.4]` | 🟩 |
| PCN | Apron: concrete, **PCN 65/R/B/W/T**. Taxiways (C2, D, E, F, G): concrete, **PCN 66/R/B/W/T**. Causeway bridges H and C1: PCN not established (bridge structures) — calculated resistance up to 3,970 kN, equivalent to a loaded B747-400 `[AIP Macao AD 2 VMMC 2.8]` | 🟩 |
| Customs | **H24** `[AIP Macao AD 2 VMMC 2.3]` | 🟩 |
| Handling / FBO | Handling services **H24** per AIP; Menzies Macau (ground handling) and Servair Macau (catering) are named in public reporting as airport tenants; Macau Business Aviation Centre serves GA/bizjet traffic — none individually confirmed for a K Global operation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16 | 3,360 × 45 m | Concrete, PCN 66/R/B/W/T | 3,225 m | 3,285 m | 3,285 m | **2,865 m** | Displaced threshold **360 m**; THR 22°09′38.31″N 113°35′14.14″E; SWY/CWY 60 × 45 m; strip 3,510 × 300 m |
| 34 | 3,360 × 45 m | Concrete, PCN 66/R/B/W/T | 3,300 m | 3,360 m | 3,360 m | **2,930 m** | Displaced threshold **370 m**; THR 22°08′17.46″N 113°35′43.91″E; ILS CAT II; SWY/CWY 60 × 45 m; strip 3,510 × 300 m |

*Source: AIP Macao AD 2 VMMC 2.12/2.13 (mirrored full-text extract retrieved 2026-07-26). All distances in metres. 🟧 A tier-4 discrepancy exists on the physical runway length across public sources: OurAirports lists 3,214 m (10,544 ft), SkyVector lists 3,360 m (11,024 ft); the AIP figure (3,360 m) is used here as the primary source of record. RESA dimensions were not stated in the reachable AIP extract for this build — see §18.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | MACAU ATIS | 126.400 MHz | H24 | Continuous voice broadcast; content includes RWY-in-use, wind, visibility, RVR <1,500 m, weather, cloud, trend, QNH, temp/dewpoint, LVP/thunderstorm/typhoon-signal advisories `[AIP Macao AD 2 VMMC 2.23]` |
| Delivery | Not separately published | — | — | No dedicated Clearance Delivery frequency found — clearance is handled via Ground/Tower 🟧 |
| Ground | MACAU Ground | 121.725 MHz (primary) / 121.975 MHz (secondary) | H24 | |
| Tower | MACAU TWR | 118.000 MHz (primary) / 119.400 MHz (secondary); emergency 121.500 MHz | H24 | Aerodrome control, Class C ATZ |
| Approach | 🟥 **No dedicated Macau Approach** — **Zhuhai Approach** 120.35 MHz (backup 124.25 MHz) or **Hong Kong Radar** 126.3 MHz / 119.1 MHz | H24 | Assigned unit depends on arrival routing — acknowledge the correct identifier at first contact `[AIP Macao AD 2 VMMC 2.23]` |
| Centre / FIR | Macau lies in **Guangzhou FIR (ZGZU)**, immediately adjacent to the Hong Kong FIR (VHHK) | H24 | See [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md) |
| Fire liaison (ground only) | — | 123.100 MHz | H24 | Auxiliary — actual fire/crash fighting liaison only |
| SAR (main / backup) | — | 125.150 MHz / 120.800 MHz | H24 | For SAR vessel/aircraft communication |

*Source: AIP Macao AD 2 VMMC 2.18/2.23 (mirrored extract retrieved 2026-07-26), cross-checked against OurAirports and SkyVector public frequency listings (broadly consistent, with SkyVector additionally listing 119.40 as a Tower frequency, matching the AIP secondary channel). Treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | MCU (Macao) | 116.400 MHz / CH 111X | H24 | On-field, 22°08′08″N 113°35′52″E; unusable within sector 230°–260° at/below 2,700 ft `[AIP Macao AD 2 VMMC 2.19]` |
| ILS/DME 34 | MCN (LOC 109.700 / GP 333.200 / DME CH 34X) | — | H24 | **ILS CAT II** — the field's only CAT II direction |
| ILS/DME 16 | MCS (LOC 111.700 / DME CH 54X) | — | H24 | ILS CAT I (by exclusion — only RWY 34 is stated as CAT II in the AIP); 🟧 the source extract's LOC-16 site longitude appears inconsistent with the runway's own longitude — possible transcription artifact, verify against current AIRAC |
| DVOR/DME | ZAO (Jiuzhou) | 117.200 MHz / CH 119X | H24 | Off-field, 22°14′47″N 113°36′47″E; defines the **R231° noise-abatement boundary** for RWY 34 departures / RWY 16 arrivals (§12) |
| Secondary surveillance | — | 1030/1090 MHz | H24 | Monitoring purposes only `[AIP Macao AD 2 VMMC 2.19]` |

*All idents/frequencies sourced to AIP Macao AD 2 VMMC 2.19 (mirrored extract), retrieved 2026-07-26; cross-checked against SkyVector's on-field VOR listing (MCU 116.40, matching).*

---

## 10. Arrival

- **Transition altitude / level:** **TA 9,000 ft / 2,700 m** (per the AD 2.24 area-chart legend) 🟧 — not independently cross-checked against an AD 2.17/ENR 1.7 text table this pass.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind/config-driven; no independently sourced prevailing-wind data this pass. **RWY 34 carries the field's only ILS CAT II capability** and is expected to be preferentially assigned whenever low-visibility capability may be needed. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 34 | ILS RWY 34 (CAT II) | Not confirmed this pass 🟧 | Not confirmed 🟧 | Inbound track constrained by the ZAO R231° noise-abatement boundary (§12) |
| 16 | ILS RWY 16 (CAT I) | Not confirmed this pass 🟧 | Not confirmed 🟧 | Maintain inbound track 215° (true) on the localizer; do not deviate north of ZAO R231° |

- **STARs (names only):** Charts exist per AD 2.24 (STAR Macau RWY 34, STAR Macau RWY 16) but procedure names were not obtained in this research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Low Visibility Operations in force whenever **RVR (TDZ RWY 34) ≤ 800 m**, or **cloud base (RWY 34) ≤ 200 ft**, or visibility is decreasing rapidly; announced via RTF/ATIS as "LOW VISIBILITY OPERATIONS IN FORCE" `[AIP Macao AD 2 VMMC 1.1]`.
- **Missed approach watch-items:** Terrain is not the driver (reclaimed, flat site); the operative concern is re-sequencing within the extremely tight, externally-controlled ATZ — a go-around may require re-establishing contact with Zhuhai Approach or Hong Kong Radar per the assigned routing (§3.2).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Charts exist per AD 2.24 (SID Macau RWY 34, SID Macau RWY 16) but procedure names were not obtained in this research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** RNAV(GNSS) SID/STAR requires **RNP 1 or equivalent approval and certified GNSS**; aircraft without current RNP 1/P-RNAV capability must fly the Conventional Procedure. **RNP AR APCH is not authorised without special AACM authorisation** `[AIP Macao AD 2 VMMC 2.20 §10–11]`. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed in reachable sources this pass. 🟧
- **Start-up / push-back:** Detailed colour-coded procedures apply by stand group — see Departure §2/Dispatch §3 and Briefing §13.
- **ATC slot / CTOT & clearance:** No IATA slot-coordination level or CTOT/ATFM program identified for VMMC in reachable sources. 🟧
- **De-icing:** **NIL** — explicitly stated in the AIP; subtropical climate, no de-icing requirement `[AIP Macao AD 2 VMMC 2.3–2.4]`. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **RWY 34 departures:** climb offset 15° right to 400 ft (120 m), then turn right; **do not overshoot** Jiuzhou DVOR (ZAO) R231°, which defines the northern noise-abatement limit for Zhuhai City. **RWY 16 arrivals:** maintain inbound track 215° (true) on the localizer; **do not deviate from** ZAO R231° for the same reason `[AIP Macao AD 2 VMMC 2.21]`.
- **Night noise / dB limits:** ICAO Annex 16 **Chapter 2 noise-classified aircraft** are considered case-by-case and **banned from operating 00:00–08:00 local** `[AIP Macao AD 2 VMMC 2.21]`.
- **Engine run-up restrictions:** Engine runs above ground-idle power are **not normally permitted 22:00–07:00 local** (exceptions considered case-by-case); ground-run coordination via Airport Operation Coordination Centre and Macau Ground, anti-collision beacon on throughout `[AIP Macao AD 2 VMMC 2.21]`.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧 No aeroplane noise-abatement operating procedure for take-off (NADP) is published — the AIP states this item as **NIL**.

---

## 13. Ground operations

- **Stands for our types:** Stands **A1–A15, A17, B1–B6, B8** use an Advanced Visual Docking Guidance System (AVDGS); other stands are marshalled. **B7/B10** use a colour-coded "Green" pushback/tow procedure with **Breakaway Point 1** (wingspan < 36 m) or **Breakaway Point 2** (wingspan ≥ 36 m) — directly relevant to widebody ground movement `[AIP Macao AD 2 VMMC 2.20]`. 🟧 | 🟧
- **Push-back:** Mandatory colour-coded procedures apply by stand group (Blue / Green / Pink) — call Macau Ground (121.725 MHz) or Tower (118.000 MHz) five minutes before start-up; withdrawal of clearance if delays occur after the call `[AIP Macao AD 2 VMMC 2.20]`.
- **Standard taxi routes:** The runway is connected to the apron by **two causeway bridges** — Bridge H (23–39 m wide) and Bridge C1 (23 m wide) — both rated to a calculated resistance up to 3,970 kN, equivalent to a **loaded B747-400**; these bridges are the field's sole runway–apron ground link.
- **Hot spots / tight taxiways:** 🟥 The two causeway bridges are effectively a **single-point ground-access chokepoint** given the compact reclaimed-land site. Cargo apron stands **G01–G15** operate under strict sequential push/tow-out rules with designated Breakaway Points X/Y/Z, and certain stand pairs (B1/B3; Y/Z breakaway points) **cannot push back simultaneously** — expect tight ground choreography at peak.
- **Follow-me:** Available and used for all GA/helicopter arrivals to designated stands, and for coordinating engine ground-runs `[AIP Macao AD 2 VMMC 2.20]`. 🟩

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical Pearl River Delta coastal climate; reference temperature 31.5 °C used for elevation/performance calculation at the field's 20 ft AMSL. No independently sourced wind-rose data this pass. 🟧
- **Seasonal hazards:** **NW-Pacific / South China Sea typhoon season (~May–Nov, peak Jul–Sep)** — the region's defining seasonal hazard; a significant typhoon can disrupt the whole Pearl River Delta cluster (VMMC/VHHH/ZGSZ/ZGGG) simultaneously (see the [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md) §11). Heavy monsoon-season rain drives active wet-runway friction management (Mu-meter, "slippery when wet" below 0.42) — a genuine consideration given the already-reduced LDA (§3.3/§7).
- **Local effects:** No notable terrain/sea-breeze effect beyond standard PRD coastal climatology; the runway itself sits on reclaimed land in open water, connected to the terminal by two causeway bridges.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, typhoon-track advisories in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway/causeway-bridge closures (esp. any construction-related NOTAM tied to the ongoing masterplan/expansion works), navaid U/S, CAT II ILS equipment status on RWY 34, lighting, RFF downgrade below CAT IX, GPS/RAIM for RNAV(GNSS) procedures, and any Low Visibility Operations notice. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / alternate field** — VMMC is not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates VHHH (Hong Kong, ~20 NM ENE across the Hong Kong FIR boundary) and WSSS (Singapore) `[VAMSYS mirror 2026-07-26]` — both cross-territory from Macau, confirm suitability and current minima per leg. In-region, non-company alternates within the Guangzhou FIR include ZGSD (Zhuhai/Jinwan, ~15 NM), ZGSZ (Shenzhen/Bao'an, ~32 NM) and ZGGG (Guangzhou/Baiyun, ~76 NM) — distances approximate, tier-4 sourced, not AIP-derived. 🟧
- **Fuel-uplift notes:** Jet A-1 (AVTUR) confirmed available, H24, hydrant on the "even" A stands and all B stands. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The **reduced published LDA** (2,865 m RWY 16 / 2,930 m RWY 34 against a 3,360 m physical runway) is the field's primary performance consideration — confirm against type-specific max-landing-weight field-length requirements before planning a near-max-weight arrival. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- **RFF category (CAT IX) vs Code F equipment:** if a CAT-X-recommended type (A388/B748-class, fuselage length >76 m) is ever dispatched to VMMC, confirm CAT IX satisfies the Annex 14 requirement for that type before use — most K Global widebody types (A339/A359/A35K/B77W/B789-class) are comfortably within CAT IX. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Ground-movement note:** the causeway Bridge H/C1 strength is calculated to a loaded B747-400-equivalent (3,970 kN) — relevant if a heavier Code F type is ever dispatched here; confirm against type weight before routing such equipment over the bridges.
- **Reduced-LDA planning:** the displaced-threshold LDA figures (§7) apply to every type — confirm max-landing-weight field-length margin per type at planning, especially in wet-runway conditions (§3.3/§14).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RESA dimensions** — not stated in the reachable AIP extract for this build; confirm against current AD 2.12/2.24 obstruction charts.
- **SID/STAR/approach procedure names** — charts exist (AD 2.24 index, SID/STAR Macau RWY 34/16, pages 59–68E) but names were not obtained in this research pass; pull the current-AIRAC procedure list.
- **Take-off minima and exact LVTO RVR minima** (beyond the stated RWY 34 LVP trigger of RVR ≤800 m / cloud base ≤200 ft) — not confirmed for RWY 16 or other conditions.
- **Transition altitude (9,000 ft / 2,700 m)** — sourced from the AD 2.24 area-chart legend, not independently cross-checked against an AD 2.17/ENR 1.7 text table this pass.
- **Runway physical-length discrepancy across public sources** — AIP 3,360 m vs OurAirports 3,214 m (10,544 ft) vs SkyVector 3,360 m (11,024 ft); AIP figure used as primary, OurAirports figure appears stale/rounded — note only, does not affect the declared-distance table (§7), which is AIP-sourced throughout.
- **Magnetic variation (3° W, 2016 epoch)** — not independently re-confirmed against the current AIRAC cycle.
- **ILS/DME 16 (MCS) site coordinates** — the mirrored source extract's longitude for this navaid appears inconsistent with the runway's own longitude band; likely an OCR/transcription artifact in the mirror — confirm against current AIRAC before use.
- **Handling agent(s) contracted for a K Global operation and confirmed minimum turnaround time** — not confirmed; Menzies Macau/Servair Macau are named generically in public reporting, not confirmed for our operation.
- **Current stand/gate count** — historically reported as ~24 aircraft parking positions / 10 gates / 5 jetways in older public data; likely outdated given the masterplan/expansion works (2016 planning, 2020 construction start, a further phase begun 2025 targeting ~2030 completion) — re-verify at the next update cycle.
- **Prevailing wind / wind-rose data and season-driven runway-selection logic** — not independently sourced this pass.
- **Cargo handling weight limit (15,000 kg per unit, per AIP)** — confirm currency against current AD 2.4.
- **VATSIM cross-check** — no VATSIM Macau-specific vACC/SOP document distinct from the Hong Kong vACC (VATHK) material (which hosts the AIP mirror used for this build) was independently found this pass; treat as a partial cross-check only.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Civil Aviation Authority of Macao (AACM) — AIP Macao, Part 3 (AD), AD 2 VMMC** (mirrored full-text extract, amendments through AIRAC AMDT 02/19, 23 MAY 2019) — hosted via VATSIM Hong Kong vACC — https://vathk.com/pdf/macauaip.pdf (retrieved 2026-07-26). *ARP/elevation/reference temperature, mag variation, operational hours, handling/RFF/passenger facilities, apron/taxiway PCN, runway physical characteristics and declared distances, lighting, ATS airspace (ATZ), communications, navaids, local traffic regulations (push-back colour codes, engine-out ferry, PBN/RNP AR), noise abatement, additional information (ATIS content, external approach-unit acknowledgement, GNSS RAIM). The official AACM portal (aacm.gov.mo) was unreachable within this session (timeout) — this publicly reachable mirror was used instead; current-AIRAC re-verification recommended.*
- OurAirports — https://ourairports.com/airports/VMMC/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *Coordinates/elevation cross-check, tier-4 runway-length discrepancy noted in §7/§18.*
- SkyVector — https://skyvector.com/airport/VMMC (retrieved 2026-07-26). *Coordinates, runway/navaid/frequency cross-check, nearby-airport distances (VHHH, ZGSD, ZGSZ, ZGGG).*
- Wikipedia — "Macau International Airport" — https://en.wikipedia.org/wiki/Macau_International_Airport (retrieved 2026-07-26). *History (opened 9 Nov 1995, reclaimed land, cost, causeway construction), no-curfew statement, historical stand/gate/jetway count, ground-handling/catering tenants (Menzies Macau, Servair Macau), separate-customs-territory and "two customs, one checkpoint" ferry-transfer arrangement, expansion masterplan status.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from territory AIP; K Global fields from live VAMSYS; 4-page pack. |
