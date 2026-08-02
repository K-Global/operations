# OLBA — Rafic Hariri Intl · Airport Briefing

**OLBA / BEY** · Beirut, Lebanon · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for X-Plane 11, not a chart. Static data is from the primary AIP source of record where reached, cross-checked against public tier-4 sources; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. **A standing 🟥 caution on Lebanese/Beirut (OLBB) FIR airspace status appears in §2, §3.2, §4 and §18 — read it before every flight.** Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 33.81905, 35.49003 `[Navigraph navdata]` — consistent with N33°49.1′/E035°29.4′ per AIP chart and SkyVector |
| Field elevation | **85 ft AMSL** `[Navigraph navdata]` — independently corroborated by the AIP ILS RWY 16 chart ("AD ELEV 85 FT") and SkyVector; OurAirports/logistics-cluster sources report 87 ft (minor survey-rounding variance) 🟩 |
| Mag variation | **5.1° E (2020 epoch)**, per AIP AD 2.OLBA-73 ILS RWY 16 chart 🟧 — a separate network-sim cross-check shows 5.3° E; current-day value not re-confirmed against a newer AIRAC cycle |
| Time zone | **UTC+2 (EET)** winter / **UTC+3 (EEST)** summer — Lebanon DST last Sunday of March to last Sunday of October |
| Runway(s) | **03/21** 3,800 m concrete · **16/34** 3,395 m concrete · **17/35** 3,250 m asphalt (the field's original 1954 runway, rarely used today) |
| Preferential runway | Wind-dependent between the 03/21 and 16/34 concrete pair; 17/35 sees little scheduled use — exact selection criteria not confirmed 🟧 |
| Longest LDA | Not published / verify 🟧 — 03/21 (3,800 m / 12,467 ft physical length) is the longest runway; a primary declared-distance (LDA) table was not obtained this pass — see §7 |
| Approaches | **ILS / RNP / VOR-DME on RWY 03, 16 and 17**; **RNP only on RWY 21**; **NDB (BOD) additionally on RWY 17**; none published for RWY 34/35 |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Beirut Approach in the TMA, Beirut ACC (Beirut/OLBB FIR) en route — see [Middle East airspace brief](../../../../airspace/middle-east.md) |
| Elevation class | Sea-level, coastal — **not** hot-and-high 🟩 |
| Special-airport status | Not formally categorised in reachable sources; standing briefing items are the terrain/circling restriction (§3.1) and the airspace-status caution (§3.2) 🟧 |
| Customs / PoE | **Yes** — reported 24/7 by an operator-affiliated public source; not independently AIP-confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LLBG, LCLK, LGAV** (all cross-country) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Mount Lebanon range (Sannine ~2,628 m/8,622 ft, ~19 NM ESE) rises close to the field's east side; the published ILS RWY 16 chart states circling is **not authorised east and south of the airport** — a chart-confirmed terrain/obstacle restriction. See §3.1. |
| Runway length vs fleet perf | 🟩 | 3,800 m and 3,395 m concrete runways are ample for any K Global type; the 3,250 m asphalt 17/35 is non-limiting but rarely used. |
| Approach availability / minima | 🟧 | ILS/RNP/VOR-DME published on RWY 03/16/17; only RNP published on RWY 21; nothing published for RWY 34/35 in reachable sources — confirm current AIRAC. |
| Airspace / traffic / control | 🟥 | **STANDING CAUTION:** Beirut (OLBB) FIR status is variable and subject to periodic NOTAM-driven restriction, and is documented as under heightened advisory in the regional Middle East airspace picture (see linked brief); GNSS jamming/interference has been reported across the Eastern Mediterranean generally. Check current NOTAMs, the state airspace-status bulletin and any active EASA Conflict Zone Information Bulletin/Information Note before every flight. No party, cause or political position is asserted here — the operative instruction is simply to check before you fly. Radar approach service is otherwise normal for the field. |
| Weather / seasonal hazard | 🟧 | Mediterranean coastal climate — mild wet winters, hot dry summers; no AIP-sourced seasonal statistic obtained this pass. |
| Curfew / slots / hours | 🟧 | No curfew identified; a public trip-support aggregator reports **no PPR and no slot coordination required**; ATS/AD operating hours assumed H24 as the country's sole international gateway — not primary-AIP-confirmed. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 and AVGAS 100 reported available by an operator-affiliated source; specific supplier/hours not primary-confirmed. |
| Customs / handling / security | 🟧 | 24/7 customs/immigration reported by a tier-4 source; standard airport security screening; no operator-specific handling gap identified. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
The **Mount Lebanon range** rises close to the field's eastern side — **Mount Sannine (~2,628 m / 8,622 ft)** sits roughly 19 NM ESE on the eastern slopes of the Matn District, with the higher **Qurnat as Sawda massif (~3,088 m / 10,131 ft, Lebanon's highest point)** further north near Bcharre/the Cedars, outside the immediate terminal area but relevant to RNAV arrivals routing through the interior. The field's own **ILS RWY 16 approach chart explicitly states that circling is not authorised east and south of the airport** — a direct, chart-published terrain/obstacle-driven restriction; brief this before ever considering a circling clearance in that sector. MSA sectors and grid MORA were not extracted from a reachable primary chart this pass — verify the current AIRAC MSA ring before flight. 🟧

### 3.2 Airborne conflict / traffic 🟥
> **STANDING CAUTION — read before every flight.** Beirut (OLBB) FIR sits within the Levant continental FIR set covered by the [Middle East regional airspace brief](../../../../airspace/middle-east.md), which documents the FIR as **CZIB-affected** and subject to a heightened advisory posture, with airspace status changing by NOTAM at short notice. The same brief documents **GNSS jamming/spoofing reported across the Gulf and Eastern Mediterranean generally**. This picture is **live and perishable — it is not re-derived here.** Pull the current state NOTAMs, the airspace-status bulletin, and any active **EASA Conflict Zone Information Bulletin / Information Note** for Lebanon at every planning cycle, before every flight. This note takes no position on any party, cause or conflict — it states only that the status is variable and must be checked.

Day-to-day, Beirut Approach provides radar service in the TMA and Beirut ACC covers the en-route FIR; traffic density is moderate, consistent with the country's sole international gateway. No unusual VFR mix was identified in reachable sources.

### 3.3 Runway excursion 🟧
Displaced thresholds meaningfully reduce usable landing distance from the raw runway length: **RWY 03 (1,821 ft)**, **RWY 21 (3,264 ft)**, **RWY 16 (~590 ft)**, **RWY 35 (~2,690–2,789 ft, sources vary slightly)** — always fly from the published declared distance, never the physical runway length (§7). **RWY 17/35 is the field's original 1954 asphalt runway**, largely superseded by the newer concrete pair and rarely used today — expect a different surface/friction profile and confirm current serviceability/NOTAM status before planning it. No contamination/braking-action data was confirmed this pass.

### 3.4 Weather threat 🟧
Mediterranean coastal climate: mild, wet winters (frontal systems, occasional reduced visibility/low cloud off the sea) and hot, dry summers with periodic haze. No AIP-sourced seasonal frequency statistic was obtained this pass — treat as general regional climatology pending a primary source. See §14.

### 3.5 Operational considerations 🟧
No formal special-airport/crew-qualification category was identified in reachable sources. Treat the terrain-driven circling restriction (§3.1) and the standing airspace-status caution (§3.2) as this field's two durable, standing briefing items. RFF category, PCN and exact ATS/curfew hours remain unconfirmed — see §18.

---

## 4. Cautions & Warnings

- 🟥 **STANDING CAUTION — airspace status.** Beirut (OLBB) FIR/Lebanese airspace status is variable and subject to periodic NOTAM-driven restriction; documented as under heightened advisory in the regional Middle East airspace picture. GNSS jamming/interference has been reported across the Eastern Mediterranean generally. Check current NOTAMs, the state airspace-status bulletin, and any active EASA CZIB/Information Note before every flight — see [Middle East airspace brief](../../../../airspace/middle-east.md).
- 🟥 **Circling approach is not authorised east and south of the airport** (published chart restriction) — high terrain (Mount Lebanon range) lies to the east; do not request or accept a circling clearance into that sector.
- 🟧 **RWY 17/35 is the original 1954 asphalt runway, rarely used** — confirm current serviceability/NOTAM status before planning it.
- 🟧 **Displaced thresholds on RWY 03/21/16/35 significantly reduce landing distance** from the physical runway length — always fly the declared LDA, never raw runway length.
- 🟧 Magnetic variation is sourced to a 2020 chart epoch — treat the current-day value as indicative pending re-confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not categorised as a restricted-crew special airport in reachable sources; the standing briefing items are the terrain/circling restriction (§3.1/§4) and the airspace-status caution (§3.2/§4). 🟧
- **Crew-qualification gate:** None identified beyond standard type currency; confirm no incremental requirement on the current AIRAC. 🟧
- **Operating restrictions / bans:** Circling **not authorised east and south of the field** (chart-published, §3.1). No RNP AR restriction identified — RNP approaches are published for RWY 03/16/17/21. 🟥
- **Overflight / entry / permits:** Standard Lebanese entry for scheduled commercial operations; a public trip-support aggregator lists no PPR requirement. See the standing airspace-status caution (§3.2) for the FIR-level advisory. 🟧
- **Operations notes:** The **Directorate General of Civil Aviation (DGCA)**, under the Ministry of Public Works and Transport, both operates the field and provides ATC. More than one ground-handling agent operates at the field — see [Dispatch §5](dispatch.md).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 as the country's sole scheduled international gateway | 🟧 |
| AD operating hours | Reported 24/7 by an operator-affiliated public source | 🟧 |
| Night / curfew restrictions | None identified in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 and AVGAS 100 reported available; supplier/hours not primary-confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Reported 24/7 by a tier-4 source | 🟧 |
| Handling / FBO | More than one ground-handling agent operates at the field; a separate General Aviation Terminal serves business/charter traffic | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03 | 3,800 × 45 m (12,467 × 148 ft) | Concrete / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | TDZ elev 12 ft; displaced threshold 1,821 ft; stopway 394 ft |
| 21 | 3,800 × 45 m | Concrete / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | TDZ elev 40 ft; displaced threshold 3,264 ft; stopway 394 ft |
| 16 | 3,395 × 45 m (11,138 × 148 ft) | Concrete / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | TDZ elev 12 ft; displaced threshold ~590 ft; ILS-served (§9) |
| 34 | 3,395 × 45 m | Concrete / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | TDZ elev 48 ft; no displaced threshold published; stopway 361 ft |
| 17 | 3,250 × 45 m (10,663 × 148 ft) | Asphalt — original 1954 runway, rarely used 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | TDZ elev 85 ft; no displaced threshold published; stopway 197 ft |
| 35 | 3,250 × 45 m | Asphalt 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | TDZ elev 36 ft; displaced threshold ~2,690–2,789 ft (sources vary); stopway 197 ft |

*Physical dimensions, surfaces, TDZ elevations, displaced thresholds and stopways are corroborated across a public operator reference and SkyVector; a primary declared-distance (TORA/TODA/ASDA/LDA) table was not obtained this pass — treat as 🟧 pending AIP confirmation. One tier-4 logistics-sector source reports a 60 m width for RWY 17/35 against the two-source consensus of 45 m — see §18. All distances as sourced; units as published (ft).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Beirut ATIS | 120.600 | H24 (assumed) | 🟧 |
| Delivery | Not separately published | — | — | Not published / verify 🟧 |
| Ground | Beirut Ground | 121.900 | H24 (assumed) | Matches the AIP ILS RWY 16 chart 🟩 |
| Tower | Beirut Tower | 118.900 | H24 (assumed) | Matches the AIP chart; a 2024 public user report claims 122.700 — **unresolved discrepancy, verify current AIRAC** 🟧 |
| Approach | Beirut Approach | 120.300 | H24 (assumed) | Matches the AIP chart 🟩 |
| Centre / FIR | Beirut ACC (Radar) | 119.300 | H24 (assumed) | Beirut (OLBB) FIR — see [Middle East airspace brief](../../../../airspace/middle-east.md) |

*ATIS/Ground/Tower/Approach/Centre frequencies are cross-verified between SkyVector and the AIP AD 2.OLBA-73 ILS RWY 16 chart header — good two-source agreement except for the noted Tower-frequency discrepancy.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | KAD (KALDE) | 112.60 | H24 (assumed) | On/near field, 33°48′27″N 035°29′10″E; IAF/holding fix for multiple STARs and SIDs |
| VOR | BAR (BAYSUR) | 113.90 | H24 (assumed) | ~4.4 NM |
| VOR | CAK (CHEKA) | 116.20 | H24 (assumed) | ~30.7 NM; associated with the CHEKA-series arrivals |
| NDB | BOD | 351 kHz | H24 (assumed) | ~5.1 NM; serves the BOD-series SIDs and the RWY 17 NDB approach |
| ILS RWY 16 | IBB | 110.10 | H24 (assumed) | **CAT I** (chart shows CAT I minima only); transition level **FL 150** per chart |
| ILS RWY 03 / RWY 17 | Not published / verify | — | — | Idents/frequencies not obtained from a reachable primary source this pass 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Transition level **FL 150** confirmed on the AIP ILS RWY 16 chart; transition altitude not published this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on the current chart.
- **Preferential runway logic:** Wind-dependent between the 03/21 and 16/34 concrete pair; 17/35 sees little scheduled use. Exact selection criteria not confirmed. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 03 | ILS RWY 03; RNP RWY 03; VOR/DME RWY 03 | Not published 🟧 | Not published 🟧 | Verify current AIRAC |
| 16 | ILS RWY 16 (CAT I); RNP RWY 16; VOR/DME RWY 16 | KAD (KALDE VOR/DME) | Not transcribed — verify chart | Circling not authorised E/S of field (§3.1) |
| 17 | ILS RWY 17; RNP RWY 17; VOR/DME RWY 17; NDB (BOD) RWY 17 | Not published 🟧 | Not published 🟧 | Original 1954 runway, rarely used |
| 21 | RNP RWY 21 only | Not published 🟧 | Not published 🟧 | No ILS/VOR-DME published |
| 34 / 35 | None published for 34; VOR/DME and displaced-threshold data only for 35 | — | — | Verify current AIRAC 🟧 |

- **STARs (names only):** Conventional — **BALMA, CHEKA, ELIKA (formerly SILKO), KALDE, KUKLA** (RWY 03 "1N" series; RWY 16 "2F" series); **BALMA, BYBLO, ELIKA, KALDE, KUKLA** (RWY 17 "1A" series). RNAV — **BALMA, ELIKA, KUKLA, LEBOR** (RWY 03 "2N", RWY 16 "1X", RWY 17 "2A", RWY 21 "1R" series).
- **LVP:** Trigger conditions not published this pass. 🟧
- **Missed approach watch-items:** High terrain lies to the east of the field (§3.1) — fly the charted missed-approach track and altitude exactly; do not attempt an early turn toward higher ground. Verify the current chart for exact missed-approach routing.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **BOD 1** (RWY 17/21) · **BOD 2** (RWY 34/35) · **KALDE 2D** (RWY 17/21) · **KALDE 1E** (RWY 03) · **KALDE 2F** (RWY 34/35) · **LATEB 1D** (RWY 17/21) · **LATEB 1E** (RWY 03) · **LATEB 2F** (RWY 34/35) · **LEBOR 1D** (RWY 17/21) · **LEBOR 1E** (RWY 03) · **LEBOR 2F** (RWY 34/35).
- **RNP / climb-gradient requirements:** RNP approach procedures are published for RWY 03/16/17/21; SID-level RNP/gradient requirements not confirmed this pass — verify current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** A dedicated "Take-off Minima" chart is indexed for the field but its content was not reachable this pass. 🟧
- **Start-up / push-back:** Not published / verify. A dedicated start-up/push-back procedure is indexed for the General Aviation Terminal; scheduled-service procedure not confirmed. 🟧
- **ATC slot / CTOT & clearance:** A public trip-support aggregator reports **no slot coordination and no PPR required**; no CTOT/ATFM programme identified for the FIR. 🟧
- **De-icing:** Not identified as a seasonal requirement in reachable sources — Mediterranean coastal climate makes this a low-probability need, but no explicit confirmation ("available"/"NIL") was found. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Scheduled commercial traffic uses the main passenger terminal complex; a separate General Aviation Terminal (opened 2005, northwest corner of the field) serves business/charter traffic. Exact stand/gate assignment for scheduled service not confirmed this pass. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — confirm with Ground on the day.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate — mild, wet winters and hot, dry summers. 🟧 General climatology; no AIP-sourced statistic obtained this pass.
- **Seasonal hazards:** Winter frontal systems bringing occasional reduced visibility/low cloud off the sea; summer haze and periodic regional dust transport possible. No AIP-sourced frequency statistic confirmed.
- **Local effects:** Coastal sea-breeze effects likely given the shoreline-adjacent RWY 16/34; the close-in Mount Lebanon range (§3.1) may produce localised mechanical turbulence on strong easterly-flow days — a geography-based inference, not an AIP-sourced statistic. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. **Given the standing airspace-status caution (§3.2/§4), place particular emphasis on any NOTAM affecting Beirut (OLBB) FIR status, GNSS reliability, or approach/navaid serviceability, and check the current state airspace-status bulletin and any active EASA CZIB/Information Note.** Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination (non-base) `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** LLBG (~113 NM, cross-country), LCLK (~112 NM, cross-country) — both distances per SkyVector's nearby-airport data; LGAV (Athens, cross-country) is a longer-range Mediterranean alternate, distance not independently computed this pass 🟧 `[VAMSYS mirror 2026-07-26]`. All three are in different countries from Lebanon — reference by ICAO only, never as a folder link.
- **Fuel-uplift notes:** Jet A-1 and AVGAS 100 reported available; specific into-plane supplier/hours not primary-confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runway pair (3,800 m / 3,395 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific performance consideration identified beyond the general terrain/circling caution (§3.1/§4); the field is coastal/sea-level, so no hot-and-high or field-length penalty applies to any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RFF category** — not published in reachable sources.
- **PCN** (runway/taxiway/apron) — not published.
- **TORA/TODA/ASDA** (all runways) — a primary declared-distance table was not obtained this pass; only physical length, displaced threshold and stopway are confirmed (§7).
- **Take-off minima, LVP trigger conditions, transition altitude** — not published.
- **ATS/AD operating hours, curfew, slot-coordination level** — tier-4 sourced only ("24/7", "no PPR/slots required"); not primary-AIP-confirmed.
- **Tower frequency** — published as 118.900 and cross-checked against the AIP chart, but a 2024 public user report claims 122.700; unresolved, verify current AIRAC.
- **RWY 17/35 width** — one tier-4 logistics-sector source states 60 m against a two-source consensus (operator reference + SkyVector) of 45 m; treat 45 m as more likely correct pending primary confirmation.
- **MSA / grid-MORA figures** — not extracted from a reachable primary chart this pass.
- **ILS idents/frequencies for RWY 03 and RWY 17** — not obtained this pass.
- **Ground-handling agent(s) and stand/gate assignment for scheduled commercial service** — not confirmed.
- **The entire regional conflict-zone/airspace-status and GNSS-interference picture referenced from the Middle East airspace brief is live** — re-verify NOTAMs, the state airspace-status bulletin, and any active EASA CZIB/Information Note at every planning cycle; do not treat this file's snapshot as current clearance.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Lebanon, AD 2.OLBA-73 — ILS RWY 16** (Directorate General of Civil Aviation, AIRAC AMDT NR 1/2021, eff. 25 Mar 2021) — mirrored via https://lb.ivao.aero/wp-content/uploads/2024/01/AD-2.OLBA-73-ILS-RWY-16.pdf (retrieved 2026-07-26). *Primary-tier chart — used only for field elevation, mag variation, frequencies, ILS ident, transition level and the circling restriction; no minima table or missed-approach detail transcribed.*
- OurAirports — https://ourairports.com/airports/OLBA/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/OLBA (retrieved 2026-07-26). *Runway/declared-distance/comms/navaid cross-check.*
- Navigraph — OLBA public chart-index page (chart **names only**, no chart content) — https://navigraph.com/airport/OLBA/Beirut-Rafic-Hariri-International (retrieved 2026-07-26). *Confirms the current SID/STAR/approach name set.*
- OLBA (Optimal Lebanese Business Aviation) — private ground-handling operator's public "Lebanon AIP" reference page (**not** the government DGCA portal; the "OLBA" company name coincides with the airport's ICAO code) — https://www.olba.aero/AIP.php (retrieved 2026-07-26). *Tier-4 corroboration only — runway table, comms, fuel, customs hours.*
- Wikipedia — "Beirut–Rafic Hariri International Airport" — https://en.wikipedia.org/wiki/Beirut%E2%80%93Rafic_Hariri_International_Airport (retrieved 2026-07-26). *Infrastructure/runway history (1954 origin, 2004 runway redesignation, terminal build-out).*
- Wikipedia — "Mount Sannine" — https://en.wikipedia.org/wiki/Mount_Sannine (retrieved 2026-07-26). *Terrain elevation/location.*
- Digital Logistics Capacity Assessment (Logistics Cluster) — "Lebanon 2.2.1 Rafic Hariri International Airport" — https://lca.logcluster.org/lebanon-221-rafic-hariri-international-airport (retrieved 2026-07-26). *Tier-4; flagged discrepancy on RWY 17/35 width.*
- 1FLT — Beirut Rafic Hariri International Airport landing-permit reference — https://www.1flt.com/airports/olba (retrieved 2026-07-26). *Tier-4; slot/PPR-not-required corroboration.*
- IVAO Lebanon — "Lebanese Airports" (OLBA overview) — https://lb.ivao.aero/lebanese-airports/ (retrieved 2026-07-26). *Network-sim division reference, not regulatory — used only for a mag-variation cross-check.*
- **Companion OM C files:** [Middle East airspace brief](../../../../airspace/middle-east.md) (Beirut/OLBB FIR regional context, standing airspace-status caution) · same-folder [Dispatch](dispatch.md), [Departure](departure.md), [Arrival](arrival.md) pages.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
