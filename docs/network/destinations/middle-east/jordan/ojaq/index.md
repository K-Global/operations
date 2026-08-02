# OJAQ — King Hussein Intl · Airport Briefing

**OJAQ / AQJ** · Aqaba, Jordan · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the Jordan CARC AIP (AD 2 OJAQ; base cycle AMDT 46/2007, runway/declared-distance and communications data amended through AMDT 62/66 in 2011/2012) plus standard public aeronautical data; approaches/SIDs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 29°36′41.83″N / 35°01′05.04″E (29.61162, 35.01807) `[Jordan CARC AIP AD 2 OJAQ 2.2]` — matches Navigraph navdata position closely `[Navigraph navdata]` |
| Field elevation | **175 ft / 53 m AMSL** (reference temperature 40.1°C) `[CARC AIP AD 2 OJAQ 2.2]`. OurAirports confirms 175 ft; Navigraph/stub gives 173 ft — ~2 ft cross-source variance, not operationally significant |
| Mag variation | 3° 20′ E, annual change 0.4′ E — sourced to the **2007/2011 AIP cycle** 🟧 significantly dated, verify current AIRAC |
| Time zone | **UTC+3 (Arabia Standard Time), year-round** — Jordan abolished seasonal DST in Oct 2022 |
| Runway(s) | **Single runway 01/19**, 3,000 × 45 m, asphalt, PCN 54/F/A/W/U `[CARC AIP AD 2 OJAQ 2.12]` |
| Preferential runway | **RWY 01** reported preferred when winds are calm 🟧 (VATSIM Jordan vACC cross-check — not an AIP-published rule) |
| Longest LDA | 3,000 m (both ends) |
| Approaches | **ILS CAT I on RWY 01 only**; RWY 19 has no ILS — simple approach lighting + PAPI only. Current-AIRAC chart titles (2025) indicate an **RNP/RNAV approach has since been added for RWY 01** 🟧 not independently confirmed by full-text this pass |
| RFF category | **CAT 9**, 60 trained personnel, rescue equipment includes a **patrol vessel** (coastal field) `[CARC AIP AD 2 OJAQ 2.6]` |
| Control type | Radar-served terminal (Aqaba Approach/King Hussein Tower); the Amman (**OJAC**) FIR — same FIR as OJAI — is classed among the region's continental radar/ADS-B FIRs — see [Middle East Airspace Briefing](../../../../airspace/middle-east.md) |
| Elevation class | Sea-level (175 ft) — **not** hot-and-high; the real thermal driver here is **extreme summer heat** (AIP reference temperature 40.1°C) rather than elevation |
| Special-airport status | 🟧 **Single runway, no crosswind alternative**; **not currently categorised in K Global's VAMSYS** (see below) — genuine planning constraints, see §5 |
| Customs / PoE | **Yes — H24** `[CARC AIP AD 2 OJAQ 2.3]` |
| K Global category | 🟧 **NOT currently categorised in VAMSYS** `[VAMSYS mirror 2026-07-26]` — do not assume a category letter; confirm before planning |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **HESH** (Egypt, cross-country — plain text), [**OJAI**](../ojai/index.md) (same-country Jordan — linked), **LLBG** (Israel, cross-country — plain text) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not published / verify** — no VAMSYS taxi-time figure supplied for this field |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | AIP obstacle table shows only modest obstructions (poles ~78 m AGL near RWY 01 threshold, a flag mast at 142 m ~8.5 km out); AIP remark states "slight terrain obstructions penetrate 2.5% of the approach and take-off surface." Benign Red Sea coastal-plain field. |
| Runway length vs fleet perf | 🟧 | Single runway, 3,000 m — non-limiting for narrowbody types; a genuine consideration for widebody weight/performance planning, and **no crosswind-runway alternative exists** on this field. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). |
| Approach availability / minima | 🟧 | **ILS CAT I confirmed on RWY 01 only**; RWY 19 has no ILS. Current-AIRAC chart titles suggest an RNP approach has since been added to RWY 01 — not independently confirmed by full text this pass. |
| Airspace / traffic / control | 🟧 | Small King Hussein CTR (8 NM radius, Class C); the field sits within ~15 miles (24 km) of Egypt, Saudi Arabia and Israel — the AIP's own local flying regulation cautions pilots "to remain within Jordanian Airspace." A genuine navigation-discipline item, not a conflict-zone one — see §3.2. |
| Weather / seasonal hazard | 🟧 | Southerly winds bring sandstorms across the Red Sea from Egypt; otherwise "normally excellent weather conditions" and the field is rarely weather-closed. Extreme summer heat (ref. temp 40.1°C) is a density-altitude factor despite the low elevation. |
| Curfew / slots / hours | 🟧 | No curfew found; AD administration/ATS stated H24, but the 2011/2012 AIP communications table shows **King Hussein Tower control hours of 0400–1800**, with Aqaba Approach's frequency used for combined APP/TWR/ground-movement control 1800–0400 — a position/frequency-structure nuance, not a closure, but verify current. |
| RFF category vs our types | 🟧 | CAT 9 — likely adequate for K Global's narrowbody/mid-size types but **not independently confirmed adequate for every fleet type**, compounded by the field's uncategorised VAMSYS status. |
| Fuel availability | 🟩 | Jet A-1 only, H24, confirmed uplift capacity (120–156 tonnes across AIP cycles). |
| Customs / handling / security | 🟧 | Small single-terminal field (~28,000 sq ft, 1–2 gates, one baggage carousel, ~1.5M pax/year design capacity); no hangar or repair facilities for visiting aircraft; customs H24 confirmed but overall handling scale is modest compared to OJAI. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OJAQ sits on the Red Sea coastal plain at 175 ft AMSL. The AIP obstacle table (AD 2.10) lists only modest obstructions — poles around 78 m AGL near the RWY 01 approach and a flag mast at 142 m elevation roughly 8.5 km out — with an explicit AIP remark that natural terrain obstructions penetrate only about 2.5% of the approach/take-off surface. This is a benign field for CFIT purposes; the Hajar-scale mountains and Wadi Rum desert terrain that give the wider region its dramatic relief lie well clear of the standard instrument approach paths.

### 3.2 Airborne conflict / traffic 🟧
King Hussein CTR is a small Class C area (8 NM radius, surface to 6,500 ft). The airport's geographic position is unusual: it sits close to the point where **Jordan, Egypt, Saudi Arabia and Israel converge at the head of the Gulf of Aqaba**, with all three neighbouring states within roughly 15 miles (24 km). The AIP's own local flying regulation explicitly directs pilots "to use caution to remain within Jordanian Airspace" — a genuine, AIP-stated navigation-discipline item rather than a conflict-zone concern. The Amman (OJAC) FIR — the same FIR that covers OJAI — is covered by a lighter-weight **EASA Information Note** (take-risk-into-account, not an "avoid all levels" advisory) for Jordan, proportionately less severe than the CZIB "avoid" tier applied elsewhere in the region; see the [Middle East Airspace Briefing](../../../../airspace/middle-east.md) §9. Traffic volume itself is light — around 3,000 movements/year, a mix of scheduled service, general aviation and Royal Jordanian Air Force training flights.

### 3.3 Runway excursion 🟧
The field has a **single runway with no crosswind alternative** — a genuine constraint if wind conditions exceed crosswind limits for the assigned direction. RWY 19 (the non-precision end) has no centreline lighting or touchdown-zone lighting, unlike RWY 01. No contamination/braking-action data was found in reachable sources; the arid, low-elevation coastal climate makes contamination a rare rather than routine consideration.

### 3.4 Weather threat 🟧
The field's own Wikipedia-corroborated profile notes it is "rarely closed" thanks to "normally excellent weather conditions," but **strong southerly winds bring sandstorms across the Red Sea from Egypt** — the field's signature weather hazard. Extreme summer heat (AIP reference temperature 40.1°C) drives a real density-altitude penalty despite the airport's low (175 ft) elevation — brief accordingly for a hot-day departure.

### 3.5 Operational considerations 🟧
This field is **not currently categorised in K Global's VAMSYS** — confirm any assumed operator category before planning a rotation here. The single-runway, single-approach-direction (ILS RWY 01 only) layout, combined with limited handling scale (no hangar/repair facilities for visiting aircraft, a small single terminal), makes this a genuinely more constrained field than OJAI. The reduced/combined ATC position structure overnight (per the 2011/2012 AIP communications table) is a secondary planning note — verify current hours.

---

## 4. Cautions & Warnings

- **Single runway, no crosswind alternative** — a strong crosswind on the active direction has no runway-orientation workaround at this field.
- **RWY 19 has no ILS** — approach lighting is a simple system only, with no centreline/TDZ lighting; RWY 01 is the only precision-approach end (ILS CAT I).
- **Field sits within ~15 miles of three international borders** (Egypt, Saudi Arabia, Israel) — the AIP itself cautions pilots to remain within Jordanian airspace; maintain positive navigation discipline in the King Hussein CTR (8 NM radius).
- **Southerly sandstorms off the Red Sea** (from Egypt) are the field's defining weather hazard — otherwise generally excellent, rarely-closed weather.
- **Not currently VAMSYS-categorised** — do not assume an operator category or standard taxi times for this field; confirm before dispatch.
- **No de-icing facility** — not required by climate, but relevant if ever planning a cold-soak fuel consideration on an inbound long-haul leg.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources, but the **single-runway/no-crosswind-alternative** layout and the **uncategorised VAMSYS status** are standing planning items. 🟧
- **Crew-qualification gate:** Standard CAT I currency for RWY 01; no CAT II/III infrastructure exists at this field. No AR/RNP-specific restriction found. 🟧
- **Operating restrictions / bans:** Right-hand circuit for RWY 01, left-hand circuit for RWY 19 (AIP local flying regulation); pilots cautioned to remain within Jordanian airspace given the field's border proximity. No RNP AR ban or circling restriction found. 🟧
- **Overflight / entry / permits:** Standard Jordanian international arrival; no special state permit beyond normal customs/immigration identified. The AIP historically notes the aerodrome "holds an interim airport operating certificate" (2016-cycle remark) — current certificate status not re-verified. 🟧
- **Operations notes:** ANSP/airport administration — Civil Aviation Regulatory Commission (CARC); airport commercially developed under the Aqaba Special Economic Zone framework (Aqaba Development Corporation / Aqaba Airports Company). No hangar or repair facilities for visiting aircraft.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Stated H24 in AD 2.3; the 2011/2012 communications table shows Tower control 0400–1800 with combined APP/TWR/SMC on the Approach frequency 1800–0400 | 🟧 |
| AD operating hours | H24 — administration, customs, health, AIS, ARO, MET, ATS, fuelling, handling, security all H24; **de-icing: Nil** `[CARC AIP AD 2 OJAQ 2.3]` | 🟩 |
| Night / curfew restrictions | None found in the reachable AIP | 🟩 |
| RFF category | CAT 9; 60 trained personnel; rescue equipment includes a patrol vessel (coastal field) | 🟧 |
| Fuel | Jet A-1 only, H24, confirmed uplift capacity 120–156 tonnes across AIP cycles | 🟩 |
| PCN | Runway PCN 54/F/A/W/U; apron/taxiway PCN 42–54 by surface — see §7/§13 | 🟩 |
| Customs | H24 `[CARC AIP AD 2 OJAQ 2.3]` | 🟩 |
| Handling / FBO | Cargo handling available H24; **no hangar or repair facilities for visiting aircraft**; small single-terminal passenger facility | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01 | 3,000 × 45 m | Asphalt / PCN 54/F/A/W/U | 3,000 m | 3,000 m | 3,195 m | 3,000 m | ILS CAT I (IAQA); stopway 195 m |
| 19 | 3,000 × 45 m | Asphalt / PCN 54/F/A/W/U | 3,000 m | 3,000 m | 3,060 m | 3,000 m | **No ILS** — simple approach lighting + PAPI only; ASDA revised from 3,000 m (2007 cycle) to 3,060 m by the 2012 amendment |

*Source: Jordan CARC AIP AD 2 OJAQ 2.12/2.13, base cycle AMDT 46/2007, declared-distance/lighting table amended through AMDT 66/2012. No displaced thresholds published. All distances in metres. 🟧 This is a significantly older AIP cycle than OJAI's — treat exact current-cycle figures as needing a live-AIRAC cross-check.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Approach | Aqaba Approach | 119.2 (2011/2012 AIP); **132.425** per VATSIM Jordan vACC (2024) 🟧 discrepancy — verify current | H24 | Combined APP/TWR/aircraft-surface-movement control 1800–0400 per the 2011/2012 AIP cycle |
| Tower | King Hussein Tower | 118.1 (primary), 121.5 (emergency) | 0400–1800 per 2011/2012 AIP cycle 🟧 | Combined with Approach frequency outside these hours (see above) |
| Ground / SMC | King Hussein SMC | 121.9 | H24 | Aircraft and vehicle surface-movement control |
| Fire | Civil Defense Fire Fighting | 121.6 | H24 | |
| Centre / FIR | Amman Control (OJAC) | 128.500 🟧 | H24 | See [Middle East Airspace Briefing](../../../../airspace/middle-east.md); same FIR as OJAI; frequency per VATSIM cross-check, verify current AIP |

*Source: Jordan CARC AIP AD 2 OJAQ 2.18, AMDT 46/2007 base with AMDT 59-66/2011-2012 amendments; Approach/Centre frequency cross-checked against the VATSIM Jordan vACC pilot briefing (2024) — a network-sim document, not regulatory; a frequency discrepancy (119.2 vs 132.425) exists between the two sources and should be resolved against the current AIRAC.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Locator | AQ | 404 kHz | H24 | Output power 1,000 W |
| NDB | AQC | 326 kHz | H24 | ~17 NM from THR RWY 01 |
| NDB | AQA | 418 kHz | H24 | ~39.3 NM from THR RWY 01 |
| DVOR/DME | AQB | 113.1 (CH78X) | H24 | Coverage 56 NM; 0.9 NM from THR RWY 01 |
| ILS/DME 01 | IAQA | 110.10 | H24 | **CAT I only**; GP 334.4 MHz, angle 3°, RDH 14.54 m |

*Source: Jordan CARC AIP AD 2 OJAQ 2.19, AMDT 46/2007. RWY 19 has no ILS/DME — VOR/DME (AQB) supports a non-precision approach to that end.*

---

## 10. Arrival

- **Transition altitude / level:** TA **13,000 ft AMSL** `[CARC AIP AD 2 OJAQ 2.17]`; TL not independently confirmed. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** No AIP-published rule found; **RWY 01** reported preferred in calm-wind conditions per a network-sim cross-check only. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 01 | ILS CAT I (IAQA); VOR/DME (AQB) | Only precision-approach end; current-AIRAC chart titles (2025) suggest an RNP approach has since been added 🟧 |
| 19 | VOR/DME (AQB) only | **No ILS** — simple approach lighting + PAPI |

- **STARs / arrival transition fixes (names only):** LOXUS, LONOL, TAMIM, PETRA, RAHMA, METSA 🟧 (VATSIM Jordan vACC cross-check — pull the current-AIRAC STAR names at planning).
- **LVP:** CAT I environment on RWY 01 only; no LVP infrastructure for RWY 19. 🟧
- **Missed approach watch-items:** Terrain is not the driver (benign coastal-plain field); confirm the current charted missed-approach routing and any holding fixes rather than relying on any network-sim summary.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** LOXUS, LONOL, TAMIM, METSA 🟧 (VATSIM Jordan vACC cross-check — pull the live current-AIRAC SID list before use; not independently confirmed against the primary AIP text in this pass).
- **RNP / climb-gradient requirements:** Not independently confirmed for this field's SIDs — current-AIRAC chart titles suggest RNP/RNAV procedures exist for RWY 01; verify gradient/equipage on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP chart set; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not individually confirmed in reachable sources — confirm locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination or CTOT regime found — treat as an uncoordinated field pending confirmation. 🟧
- **De-icing:** **Nil** `[CARC AIP AD 2 OJAQ 2.3/2.4]` — not required by this warm-climate coastal field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** **NIL** — no noise abatement procedure published `[CARC AIP AD 2 OJAQ 2.21]`.
- **Night noise / dB limits:** None found.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Per the VATSIM Jordan vACC cross-check, the passenger apron has stands 1–7 (stand 7 the "heavy" gate; 1–6 medium/small); additional heavy stands are reported at a "Charlie" apron; the Cargo Apron has 8 stands. 🟧 Not independently confirmed against the primary AIP text in this pass — the AIP itself (2007/2011 cycle) describes Apron 1 (89 × 425 m), Apron 2/Cargo (198 × 600 m) and a small Aero Sports apron, without a numbered-stand table.
- **Push-back:** Not individually confirmed. 🟧
- **Standard taxi routes:** Taxiways A–D and M connect the apron(s) to the runway; confirm routing with Ground/Tower on the day.
- **Hot spots / tight taxiways:** None specifically flagged in the reachable AIP; confirm current NOTAM/chart picture.
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot desert/coastal climate on the Gulf of Aqaba; "normally excellent" weather with the field rarely closed.
- **Seasonal hazards:** **Southerly winds bring sandstorms across the Red Sea from Egypt** — the field's defining weather hazard. Extreme summer heat (AIP reference temperature 40.1°C) drives a real density-altitude effect despite the field's low (175 ft) elevation.
- **Local effects:** Coastal Gulf-of-Aqaba location; no significant terrain-driven local wind effects identified in reachable sources, though the surrounding desert/mountain terrain (Wadi Rum inland) shapes the regional wind pattern.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closures (no alternate runway exists at this field), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNAV procedures, and the regional conflict-zone/GNSS-interference picture (see [Middle East Airspace Briefing](../../../../airspace/middle-east.md) §9/§11 — noting the lighter-weight EASA Information Note applicable to Jordan). Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — not a K Global base; **not currently categorised in VAMSYS** `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates are **HESH** (Sharm El Sheikh, Egypt — cross-country, plain ICAO text per governance) and **LLBG** (Tel Aviv, Israel — cross-country, plain ICAO text), plus [**OJAI**](../ojai/index.md) — Jordan's primary hub field, same country, and the only same-country sibling link in this pack `[VAMSYS mirror 2026-07-26]`. Confirm suitability, runway/RFF adequacy and current minima per leg; note OJAI's much longer runways (3,660 m vs OJAQ's 3,000 m) make it the stronger widebody alternate of the three.
- **Fuel-uplift notes:** Jet A-1 only, confirmed H24 with historical uplift capacity of 120–156 tonnes across AIP cycles. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Single 3,000 m runway is non-limiting for narrowbody types but a genuine planning consideration for widebody weight/performance, with no crosswind-runway alternative. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Any K Global widebody type planning a rotation into OJAQ should cross-check field-length/weight performance against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) given the single 3,000 m runway and lack of a crosswind alternative — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). Narrowbody types are not expected to face a field-length constraint here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **K Global VAMSYS category** — this field is **not currently categorised**; confirm before assuming any operator category.
- **VAMSYS taxi-in/taxi-out times** — not published for this field; confirm at planning.
- **Magnetic variation, runway/declared-distance figures** — sourced to a **2007/2011/2012 AIP cycle**, materially older than OJAI's; re-verify all figures against the current AIRAC before treating as audit-grade.
- **RWY 19 ASDA discrepancy** — 3,000 m (2007 cycle) vs 3,060 m (2012 amendment); the more recent figure is used here, but re-confirm.
- **Approach/Tower frequency and hours discrepancy** — Aqaba Approach shown as 119.2 MHz (2011/2012 AIP) vs 132.425 MHz (VATSIM cross-check, 2024); Tower control hours shown as 0400–1800 in the 2011/2012 AIP with combined APP/TWR/SMC overnight — confirm current structure against the live AIRAC.
- **RNP/RNAV approach to RWY 01** — current-AIRAC chart titles (2025) suggest this has been added since the reachable AIP text was published; not independently confirmed by full-text this pass.
- **Interim airport operating certificate** — a 2016-cycle AIP remark noted this status; current certificate status not re-verified.
- **Stand numbering/apron layout** — the VATSIM cross-check describes a numbered stand table (1–7 plus a "Charlie" apron) not found in the reachable primary AIP text (which describes only named aprons/taxiways); reconcile against the current AIP/chart.
- **VATSIM cross-check note:** the VATSIM Jordan vACC pilot briefing (2024) is a network-simulation document, not regulatory. It also shows an **ILS RWY 19 (110.9, 193°)** that is **not corroborated** by the primary AIP (which shows no ILS on RWY 19) — flagged here as a discrepancy rather than adopted into this brief.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **Jordan CARC AIP, AD 2 OJAQ** (base cycle AMDT 46/2007; runway/declared-distance/lighting table amended through AMDT 66/2012; communications table amended through AMDT 62/2011) — ARP/elevation/mag-var, operational hours, handling/fuel, RFF, apron/taxiway data, runway physical characteristics & declared distances, lighting, ATS airspace/CTR, communications, navaids, local traffic regulations, obstacle data, chart index — https://carc.gov.jo/pdf/AD2_OJAQ.pdf and https://khiaops.com/aac/attachments/article/121/052812AD2%20OJAQ.pdf (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/OJAQ/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Wikipedia — "King Hussein International Airport" — https://en.wikipedia.org/wiki/King_Hussein_International_Airport (retrieved 2026-07-26). *Border proximity, single-runway/CAT I confirmation, terminal scale, traffic volume, sandstorm hazard.*
- VATSIM Jordan vACC — "Pilot Briefing: Aqaba King Hussein Airport [OJAQ]" (2024) — https://jordan.vatsim.me/wp-content/uploads/2024/02/jovacc-ojaq-briefing-2024.pdf (retrieved 2026-07-26). *Network-sim document, not regulatory — used for frequency/SID/STAR/stand cross-check only; one discrepancy (RWY 19 ILS) noted and not adopted.*
- [Middle East Airspace Briefing](../../../../airspace/middle-east.md) — Amman (OJAC) FIR classification, EASA Information Note (Jordan) context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
