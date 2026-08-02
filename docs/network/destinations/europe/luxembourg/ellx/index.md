# ELLX — Luxembourg-Findel · Airport Briefing

**ELLX / LUX** · Findel (Niederanven), near Luxembourg City, Luxembourg · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Luxembourg AIP AD 2 ELLX (mirrored via the Belgian AIS eAIP) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 49°37′24″N / 006°12′16″E (49.6234, 6.2044) — 193° MAG / 560 m from TWR `[AIP AD 2.2]` |
| Field elevation | **1,234 ft / 376 m AMSL** (reference temperature 26°C; geoid undulation 158 ft) — notably high for a Northwest European field, though the field sits on the rolling Luxembourg plateau rather than mountainous terrain |
| Mag variation | 🟧 **3° E**, annual change ~11′ E increasing per the AIP's AD 2.2 entry; the on-field navaid table carries a **3° E / 2024** epoch — treat as current to that cycle, re-confirm against current AIRAC |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **06/24**, 4,002 × 45 m, asphalt (single runway — no crosswind alternative) |
| Preferential runway | 🟧 No explicit AIP-published preferential-runway rule found — wind is the primary determinant given the single-runway geometry; in low-visibility conditions RWY24 is operationally favoured for its CAT II/III capability against RWY06's CAT I-only status (inference, not a stated rule) |
| Longest LDA | 4,002 m (both runway ends) |
| Approaches | **ILS CAT I** RWY06 (ILE) · **ILS CAT II/III** RWY24 (ILW) · VOR 06/24 · RNP APCH (LNAV, LNAV/VNAV) 06/24 — **circling not authorised** |
| RFF category | **CAT 9** `[AIP AD 2.6]` 🟩 |
| Control type | **Radar** — Luxembourg Radar/Approach + Luxembourg Tower on the field; Class D CTR (vertical limit 2,500 ft AMSL) `[AIP AD 2.17]` |
| Elevation class | 1,234 ft — elevated for the region but **not** hot-and-high (temperate climate, no density-altitude performance penalty); the operative caution is close-in obstacle proximity and the RWY06 slope-driven optical illusion (§3.1/§3.3), not thin-air performance 🟧 |
| Special-airport status | 🟥 **Major European all-cargo/freight gateway** with a heavy scheduled night-freight character, a single runway, and a hard curfew (2200–0500 local) with no confirmed blanket freight exemption in the reachable AIP text — see §5/§12 |
| Customs / PoE | **Yes** — H24 `[AIP AD 2.3]` 🟩 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EBBR, EHAM, EDDF** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | No mountainous terrain; the field sits atop the Luxembourg plateau. AIP-published **unlit, unmarked vegetation obstacles** stand close to both runway ends (roughly 30–60 ft above local terrain). No MSA sector table is published in the reachable source — pull the AD 2.10/2.24 chart at planning. |
| Runway length vs fleet perf | 🟩 | 4,002 m is ample for any K Global type; the constraint is the **single-runway geometry** (no crosswind option), not length. |
| Approach availability / minima | 🟧 | CAT III exists only on **RWY24**; RWY06 is **CAT I only** — an asymmetric low-vis capability that matters for runway selection in marginal weather. |
| Airspace / traffic / control | 🟧 | Radar-controlled Class D CTR; AIP notes **reduced radar coverage north of the field below 2,500 ft**. Traffic mix is unusually freighter-heavy for the movement count (~100,000 movements/yr on one runway per public reporting). |
| Weather / seasonal hazard | 🟧 | Temperate oceanic (Köppen Cfb) climate; standard Central European winter icing/de-icing season. No ELLX-specific fog/low-vis frequency statistic is published in reachable sources. |
| Curfew / slots / hours | 🟥 | Hard curfew **2200–0500 local**, named exemptions only (government/SAR/humanitarian/hospital/distress/delayed-scheduled flights) — no blanket cargo/freight carve-out found in the reachable text. Field "should not be considered as an alternate" during the curfew window. |
| RFF category vs our types | 🟩 | CAT 9 — above typical requirement for K Global's fleet. |
| Fuel availability | 🟩 | AVGAS 100LL + Jet A1, H24, substantial on-field tankage. |
| Customs / handling / security | 🟩 | H24 customs, security and handling; dedicated cargo apron (P7) and a Business Aviation apron (P5, on request). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
ELLX sits at 1,234 ft AMSL on the Luxembourg plateau — notably elevated compared with the low-lying river-basin fields common elsewhere in the region, but this is rolling plateau terrain, not a mountain approach, and there is no density-altitude performance penalty in this temperate climate. The AIP publishes several **unlit, unmarked vegetation obstacles** close to both runway ends — approximately 1,195–1,291 ft elevation, i.e. roughly 30–60 ft above the immediate local terrain — affecting both the runway's physical obstacle assessment and the VOR/LNAV/LNAV-VNAV approach minima to both runway ends. None are lit or marked. No MSA sector/altitude table is published in the reachable source (only the general PANS-OPS 1,000 ft/3–5 NM obstacle-clearance rule for radar vectoring is quoted) — pull the AD 2.10/2.24 MSA chart at planning.

### 3.2 Airborne conflict / traffic 🟧
ELLX is a single-runway Class D CTR under radar control (**Luxembourg Radar/Approach**, **Luxembourg Tower**), but carries an unusually dense and heavy-freighter-weighted traffic mix for its infrastructure — public reporting puts annual movements around 100,000 on the one runway, split between scheduled passenger, substantial widebody freighter, and general-aviation/training traffic. Code F aircraft other than the largest freighter type require **72-hour advance special permission** — a real coordination item for any heavy K Global movement here. The AIP explicitly flags **reduced radar coverage north of the field below 2,500 ft** — a specific caution for arrivals/departures routed that side. Brussels (EBBU) is understood to provide the surrounding area control environment; **no dedicated FIR brief exists yet in this system** — cross-ref [Airspace/General/Europe.md](../../../../airspace/europe.md) 🟧 and treat the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md) as a formatting reference only, not a substitute.

### 3.3 Runway excursion 🟧
Single runway 06/24 means **no crosswind-runway alternative** — a crosswind beyond type limits is a diversion driver, not a runway-selection option. RESA is asymmetric and below the ICAO-recommended 240 m at both ends (**130 × 150 m at RWY06**, **97 × 150 m at RWY24**) 🟧. The AIP itself flags a **significant longitudinal slope profile** — RWY06: +1.50% (0–1,512 m), −0.41% (1,512–2,982 m), −0.02% (2,982–4,002 m); RWY24 the mirror image — noting this "**might generate optical illusion, especially during approach on RWY 06**" and that "**opposite THR not visible**" from either end. Several **intersection take-off** points are published but **not permitted for WTC 'H' aircraft ≥136,000 kg** (TWY F/G/H on RWY06; TWY C/F on RWY24) — a direct constraint for K Global's heavier types.

### 3.4 Weather threat 🟧
Temperate oceanic climate (Köppen **Cfb**) — moderately cool summers, comparatively mild winters, roughly 14°C annual temperature range. Prevailing wind is south-westerly per general regional climatology (not independently ELLX-quantified). The recurring seasonal driver is the standard Central European **winter icing/de-icing season**; de-icing here is **on-stand only**, H24, using KFOR (potassium formate) and NAFO (sodium formate) fluids. No ELLX-specific fog/low-visibility frequency statistic is published — flag pending a climatological data pull. The published **RVR take-off minimum is a hard 125 m floor** (no departure below that value except emergency). See §14.

### 3.5 Operational considerations 🟥
ELLX functions as a **major European all-cargo/freight gateway** with a heavy scheduled night-freight character — a dedicated cargo apron (P7) with its own facilities is published, and the field's cargo tonnage ranks among Europe's highest by public reporting. However, the published curfew closes the airport to traffic **2200–0500 local (2100–0400 UTC)**, with named exemptions limited to government, SAR, humanitarian, hospital, distress and **delayed** scheduled flights — **no blanket cargo/freight exemption was found** in the reachable AIP text, and the field explicitly "should not be considered as a take-off, en route or destination alternate" during that window. This is a real and durable scheduling tension for a network with meaningful nighttime freight demand: a scheduled freight rotation timed into the curfew window must qualify under a named exemption or be re-timed. Additional standing constraints: the **CAT I/CAT III asymmetry** between RWY06 and RWY24 makes the wind-vs-weather-category trade-off a genuine dispatch decision in marginal conditions on a single-runway field; engine run-ups are restricted to a single taxiway (TWY I) on a time-windowed schedule and **prohibited outright on Sundays/public holidays**; and **Chapter 2 (ICAO Annex 16) noise-certified aircraft are banned outright** (EU Directive 2002/30).

---

## 4. Cautions & Warnings

- **Single runway 06/24 — no crosswind alternative.** A crosswind beyond type limits is a diversion driver here, not a runway-change option.
- **RWY06 approach carries an AIP-published optical-illusion risk** from the runway's longitudinal slope profile; the opposite threshold is not visible from either end.
- **Unlit, unmarked vegetation obstacles** stand close to both runway ends (up to ~60 ft above local terrain) — AIP-published, not lit.
- **Curfew 2200–0500 local is hard** and carries no confirmed blanket freight exemption — a late-running freight rotation is a real diversion/delay risk, not a formality.
- **RWY06 is CAT I only** — full CAT II/III capability exists only on **RWY24**; brief which runway a low-vis approach actually requires before assuming either end is interchangeable.
- **RVR take-off minimum 125 m is a hard floor** (emergency departures excepted).
- **Code F aircraft other than the largest published freighter type require 72-hour advance special permission** — plan any heavy widebody movement accordingly.
- **Intersection take-offs are barred for WTC 'H' aircraft ≥136,000 kg** at several named taxiways on both runway ends.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the single-runway/no-crosswind-alternative geometry, RWY06's slope-driven optical illusion, and the CAT I/CAT III asymmetry between runway ends. 🟧
- **Crew-qualification gate:** CAT II/III currency is required to use RWY24's full low-visibility capability; RWY06 is **CAT I only** — a crew/aircraft without CAT III currency cannot rely on RWY06 in low-vis conditions and must plan for RWY24 or a diversion. 🟧
- **Operating restrictions / bans:** **Circling approaches prohibited** (published); Chapter 2 (ICAO Annex 16) noise-certified aircraft banned; Code F aircraft other than the largest published freighter type require 72-hour advance special permission; balloon/glider/ULM/parachute/aerobatic flights prohibited; aircraft without radio prohibited.
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required for scheduled commercial operations. Specific local rules apply to General Air Traffic (GAT) flights (AIP cross-references AD 2.20 §6) — not fully extracted from the reachable source. 🟧
- **Operations notes:** AD operator — **Société de l'aéroport de Luxembourg SA** (lux-Airport); Airport Duty Manager (out-of-hours / GAT / Code-F coordination) — reachable via the published operations contact. ANSP identity not independently confirmed as distinct from the airport operator. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 (AIS/ARO/MET Briefing/ATS all H24) `[AIP AD 2.3]` | 🟩 |
| AD operating hours | Closed to traffic **2200–0500 local (2100–0400 UTC)**, named exemptions only | 🟥 |
| Night / curfew restrictions | See §12; local/training flights further windowed Mon–Sat 0530–2100 (0430–2000), Sun/Hol 0700–2100 (0600–2000) | 🟥 |
| RFF category | **CAT 9** | 🟩 |
| Fuel | AVGAS 100LL + Jet A1, H24 | 🟩 |
| PCN | Runway table carries **79/F/A/W/T** alongside an accompanying **"800"** figure whose exact coding (legacy PCN vs. newer ACR-PCR method) was not decoded from reachable sources — asphalt surface confirmed | 🟧 |
| Customs | H24 | 🟩 |
| Handling / FBO | H24; dedicated cargo apron **P7**; Business Aviation Centre handling on apron **P5** (on request) | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | 4,002 × 45 m | Asphalt · PCN 79/F/A/W/T (+ "800" figure, coding not decoded) 🟧 | 4,002 m | 4,002 m | 4,002 m | 4,002 m | THR elev 1,158.5 ft; TDZ elev 1,204 ft; slope +1.50%/−0.41%/−0.02%; RESA 130×150 m; **ILS CAT I only**; intersection TO from TWY E (2,464 m), F (2,497 m, WTC 'H' ≥136,000 kg not permitted), G/H (3,275 m, same restriction) |
| 24 | 4,002 × 45 m | Asphalt · PCN 79/F/A/W/T (+ "800" figure, coding not decoded) 🟧 | 4,002 m | 4,002 m | 4,002 m | 4,002 m | THR elev 1,212.6 ft; TDZ elev 1,213 ft; slope +0.02%/+0.41%/−1.50% (mirror of 06); RESA 97×150 m; **ILS CAT II/III**; intersection TO from TWY C (2,850 m, WTC 'H' ≥136,000 kg not permitted), F (1,529 m, same restriction) |

*Source: Luxembourg AIP AD 2.12/2.13 (mirrored via Belgian AIS eAIP). No stopway/clearway on either runway. Strip dimensions 4,122 × 280 m both ends. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Luxembourg ATIS | 134.755 | H24 | 8.33 kHz channel; DOC 40 NM/FL150 |
| Delivery | Luxembourg Delivery | 121.855 | H24 | 8.33 kHz channel; DOC 5 NM/GND |
| Ground | — | 🟧 No separate Ground frequency published in the reachable extract | — | Tower likely handles ground movement at this field size — confirm locally |
| Tower | Luxembourg Tower | 118.105 (primary) · 362.300 (aux) · 121.500 (emerg) · 120.165 / 119.950 (spare) | H24 | 8.33 kHz; DOC 25 NM/FL040 |
| Approach / Radar | Luxembourg Radar | 120.885 (primary) · 362.300 (aux) · 121.500 (emerg) · 120.165 / 119.950 (spare) | H24 | DOC 80 NM/FL200 primary; **reduced radar coverage north of the field below 2,500 ft** |
| Arrival | Luxembourg Arrival | 118.905 | HX | Control on final approach with radar, on ATC instruction only; DOC 40 NM/FL200 |
| VDF (Homer) | Luxembourg Homer | 118.105 / 120.885 | H24 | 8.33 kHz |
| Centre / FIR | Brussels (EBBU) — no dedicated FIR brief in this system | Per current AIRAC | H24 (assumed) | See [Airspace/General/Europe.md](../../../../airspace/europe.md) 🟧 |

*Source: Luxembourg AIP AD 2.18 (mirrored via Belgian AIS eAIP), cross-checked against OurAirports' published ELLX frequency list (ATIS/APP/TWR match). AIRAC amendment/effective date not captured in the reachable text extract — treat exact current-cycle figures as needing a live cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS 06 (LOC/GP/DME) | ILE | LOC 109.900 / GP 333.800 / DME CH36X | H24 | **CAT I**; glidepath 3°, RDH 57 ft |
| ILS 24 (LOC/GP/DME) | ILW | LOC 110.700 / GP 330.200 / DME CH44X | H24 | **CAT II/III**; glidepath 3°, RDH 50 ft |
| VOR/DME (on field) | LUX | 112.250 (CH59Y) | H24 | 060° GEO / 1.93 NM from ARP; DOC 60 NM/FL250 |
| VOR/DME | DIK | 114.400 (CH91X) | H24 | 349° GEO / 14.58 NM from ARP; DOC 100 NM/FL500 |

*All idents/frequencies sourced to the Luxembourg AIP AD 2.19 (mirrored via Belgian AIS eAIP).*

---

## 10. Arrival

- **Transition altitude / level:** TA **5,000 ft AMSL**; TL not published as a fixed value in the reachable extract (ATC-assigned per QNH) — verify current chart. 🟧
- **Speed:** Published radar-vectoring speed restrictions — **250 KIAS max** crossing 25 DME LUX or below FL100; **180 KIAS max** at FAF/FAP.
- **Preferential runway logic:** No explicit AIP-stated preferential-runway rule found; wind governs given the single-runway geometry, and RWY24's CAT II/III capability makes it the operational fallback in low-visibility conditions. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 06 | ILS CAT I (ILE); VOR 06; RNP APCH (LNAV, LNAV/VNAV) 06 | CAT I only — never rely on this end for CAT II/III minima |
| 24 | ILS CAT II/III (ILW); VOR 24; RNP APCH (LNAV, LNAV/VNAV) 24 | Full low-vis capability resides here |

- **STARs (names only):** REMBA5K, LNO7K, BETEX4K, EXCOS2K, AKELU5K, MMD6K — verify current AIRAC.
- **LVP:** Trigger conditions tied to CAT II/III operations on RWY24; exact RVR/trigger figures not published / verify. 🟧 Published LVP holding points: RWY06 departures via **TWY B4** (CAT II/III); RWY24 departures via **TWY A** (CAT II/III), with **TWY C** usable for an intermediate take-off position.
- **Missed approach watch-items:** Circling is prohibited — a go-around must fly the published missed approach, not a visual circle. The AIP-flagged unlit vegetation obstacles near both thresholds (§3.1) and the **reduced radar coverage north of the field below 2,500 ft** are relevant if the miss vectors that direction.

---

## 11. Departure

- **SIDs (names only — fly the charted version):**
  - RWY06 conventional: DIK5T, ASMOX4T, EXCOS4T, GTQ4T, MMD2T, RAPOR8T
  - RWY06 RNAV1: LNO1P, ARCKY1P, RAPOR1P, MMD1P, ASMOX1P, EXCOS1P, GTQ3P
  - RWY24 conventional: DIK5X, ASMOX4Z, EXCOS4X, GTQ4X, MMD2X, RAPOR8X
  - RWY24 RNAV1: LNO1R, ARCKY1R, RAPOR1R, MMD1R, ASMOX1R, EXCOS2R, GTQ2R
- **RNP / climb-gradient requirements:** The SIDs themselves constitute the field's noise-abatement procedure; a **minimum 3.3% climb gradient to 4,000 ft QNH** applies (based on 250 KIAS/25° bank/ISA+15°C) with the most noise-abatement-efficient aircraft setting required, unless ATC instructs otherwise. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for RNAV1 equipage.
- **Take-off minima:** Published **RVR take-off minimum of 125 m** is a hard floor (emergency departures excepted); further chart-specific minima not published / verify. 🟧
- **Start-up / push-back:** Not detailed in the reachable extract — confirm locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination level (IATA Level 2/3) was found in reachable sources — not confirmed as slot-coordinated at this scale. 🟧
- **De-icing:** **On-stand only**, H24, using KFOR (potassium formate) and NAFO (sodium formate) fluids; no specially prepared winter runway surface. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** The published SIDs constitute the noise-abatement procedure; minimum 3.3% climb gradient to 4,000 ft QNH with quietest available aircraft configuration required, unless ATC instructs otherwise.
- **Night noise / dB limits:** Governed through the hard curfew and local/training-flight time windows (§6) rather than a stated per-movement dB limit. **Chapter 2 (ICAO Annex 16) noise-certified aircraft are banned outright** under EU Directive 2002/30.
- **Engine run-up restrictions:** Confined to a single designated area (**TWY I**), permitted Mon–Fri 0600–2000 (0500–1900) and Sat 0700–1900 (0600–1800); **prohibited on Sundays and public holidays**. Requires 2-hour prior approval from the Airport Duty Manager.
- **Reverse thrust / idle-reverse policy:** Published — reverse thrust "should be limited to idle power wherever possible," with higher power reserved for safety or operational-instruction compliance.

---

## 13. Ground operations

- **Stands for our types:** Dedicated cargo apron **P7** (with cargo-handling facilities); Business Aviation apron **P5** (handling on request via the Business Aviation Centre); apron **P2** serves as an overflow/ACL reference point (elevation 1,233 ft); apron **P1** East is reserved for air-ambulance/police use, West is restricted with default overflow to P2; apron **P6** is for based aircraft. 🟧 Exact widebody/Code-E contact-stand count not confirmed. | 🟧
- **Push-back:** Not detailed in the reachable extract. 🟧
- **Standard taxi routes:** Taxiways A1, A2, B1 ("green lane" — a designated vehicle corridor requiring Tower authorisation), B3 (helicopter exception), B4, C, D1, D2, E, F, G, H, I (engine-test area).
- **Hot spots / tight taxiways:** 🟥 Intersection take-off points on **TWY F/G/H** (RWY06) and **TWY C/F** (RWY24) are barred to WTC 'H' aircraft ≥136,000 kg — a direct constraint for K Global's heavier freighter-class movements. The **TWY B1 "green lane"** vehicle corridor requires Tower authorisation to cross — a real ground-workload item given the field's heavy freight/handling-vehicle traffic.
- **Follow-me:** Availability not confirmed in reachable source. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate oceanic climate (Köppen **Cfb**) — moderately cool summer, comparatively mild winter, roughly 14°C annual temperature range. Prevailing wind south-westerly per general regional climatology (not independently ELLX-quantified).
- **Seasonal hazards:** Standard Central European **winter icing/de-icing season** (on-stand de-icing, KFOR/NAFO fluids, §11) is the field's defining recurring seasonal driver. No ELLX-specific fog/low-visibility frequency statistic is published — flag pending a climatological data pull.
- **Local effects:** The field sits atop the Luxembourg plateau; no specific local wind/terrain effect confirmed beyond general regional climatology.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, ILS CAT II/III equipment status on RWY24, navaid U/S, lighting, obstacle/crane, RFF downgrade, curfew-exemption NOTAMs, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin — **not a K Global base** `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **EBBR** (Brussels, Belgium), **EHAM** (Amsterdam Schiphol, Netherlands), **EDDF** (Frankfurt, Germany) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVGAS 100LL and Jet A1, H24. Substantial on-field tankage — 4 Jet A1 storage tanks totalling ~6.9 million litres, 12 trucks (25,000–85,000 L each), delivery flow rates 1,200–4,000 L/min — ample for widebody freighter uplift. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the single 4,002 m runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). Category **S** per VAMSYS — cross-check the 10/12-minute taxi figures against turnaround planning at [`ELLX — Dispatch`](dispatch.md).

---

## 17. Fleet-specific notes (optional)

- Any K Global **Code F** freighter-class type larger than the field's largest routinely accepted freighter type requires **72-hour advance special permission** for an ELLX movement — confirm against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before scheduling a heavy widebody rotation here. No field-length or field-elevation performance penalty applies to any K Global type on the main runway.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Mag variation current-day value** — AIP AD 2.2 text carries a 2020-epoch figure (3° E, 11′ E/yr increasing) while the on-field navaid table carries a 2024 epoch (also 3° E) — broadly consistent, but not independently re-confirmed against the current AIRAC cycle.
- **AIP amendment/effective date** — not captured in the reachable text extract of the source mirror; treat exact current-cycle figures (frequencies, minima, distances) as needing a live-AIRAC cross-check.
- **Transition level** — only the transition altitude (5,000 ft) was found; TL is ATC/QNH-assigned and not listed as a fixed value in reachable sources.
- **PCN/PCR coding** — the runway table shows a dual figure ("800" alongside "79/F/A/W/T"); the exact classification method (legacy PCN vs. newer ICAO ACR-PCR scale) was not decoded from reachable sources.
- **No blanket cargo/freight curfew exemption confirmed** — the reachable AIP text names government/SAR/humanitarian/hospital/distress/delayed-scheduled flights only; whether a separate freight-specific exemption or local arrangement exists was not confirmed and should be verified directly with the operator/AIS before relying on any night-freight schedule assumption.
- **Ground frequency** — no separate Ground frequency was found; Tower is assumed to handle ground movement at this field size, not independently confirmed.
- **Slot-coordination level** — not confirmed as IATA Level 2/3 or uncoordinated; not stated in reachable sources.
- **Exact widebody/Code-E stand count and push-back policy** — not confirmed in reachable sources.
- **MSA sector/altitude table** — only the general PANS-OPS obstacle-clearance rule was found in text; the graphical MSA chart is not available in reachable sources.
- **Named instrument approach chart titles** (e.g. "ILS Z RWY 24") — only approach types and CAT status confirmed; formal chart titles are on the graphical charts.
- **ELLX-specific fog/low-visibility frequency data** — not found; general Central European winter climatology assumed.
- **VATSIM vACC/division SOP cross-check** — no VATSIM Benelux/Luxembourg division airport briefing or SOP has been identified to validate taxi routing, hot spots and frequency sequence against; treat the operational detail above as AIP-sourced only until such a cross-check can be performed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Luxembourg AIP, AD 2 ELLX** (mirrored via the Belgian AIS eAIP, skeyes) — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.ELLX-en-GB.html (retrieved 2026-07-26). Primary source for ARP/elevation/mag-variation, runway physical characteristics and declared distances, lighting, communications, navaids, RFF category, operational hours/curfew, SID/STAR names, ground operations, obstacles and de-icing provisioning. AIRAC amendment/effective date not captured in the reachable text extract — treat exact current-cycle figures as needing a live cross-check.
- OurAirports — https://ourairports.com/airports/ELLX/ , /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check — frequency list (ATIS 134.755, Approach 120.885, Tower 118.105) matches the AIP mirror.*
- Wikipedia — "Luxembourg Airport" — https://en.wikipedia.org/wiki/Luxembourg_Airport (retrieved 2026-07-26). *Traffic/cargo-tonnage statistics, operator identity, and airport-history corroboration.*
- SKYbrary — "Luxembourg (ELLX)" — https://skybrary.aero/airports/ellx (retrieved 2026-07-26). *Climatology (Köppen Cfb) and runway-dimension cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
