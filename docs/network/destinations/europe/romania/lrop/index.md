# LROP — Henri Coandă · Airport Briefing

**LROP / OTP** · Otopeni, near Bucharest, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP Romania (ROMATSA / AIS Romania eAIP) chart extract plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 44°34′16″N / 026°05′06″E (44.57111, 26.08500) `[AIP Romania AD 2.5-40 chart, eff. 2016-02-04]` |
| Field elevation | **314 ft / 96 m AMSL** |
| Mag variation | 🟧 ~5° E per the 2016 AIP chart extract retrieved; not re-confirmed against current AIRAC |
| Time zone | UTC+2 (EET) / UTC+3 (EEST, EU DST observed) |
| Runway(s) | **08L/26R** 3,500 × 45 m (concrete) · **08R/26L** 3,500 × 45 m (concrete) — parallel pair |
| Preferential runway | **RWY 08** is the default/preferred direction (short taxi from the main apron, main traffic flow) unless the tailwind component on RWY 26 stays within roughly 6–7 kt 🟧 `[VATSIM RO vACC cross-check]` |
| Longest LDA | 3,500 m nominal on either runway — declared-distance breakdown (TORA/TODA/ASDA/LDA) not individually confirmed 🟧 |
| Approaches | **ILS RWY 08R (CAT IIIA)**, **ILS RWY 08L (CAT II)**, **ILS RWY 26L/26R (CAT I)**, plus **NDB** on all four runway ends `[VATSIM RO vACC cross-check; AIP chart index confirms ILS/NDB exist all 4 ends]` 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Otopeni CTR (Class C) on the field; Bucharest Approach/Director within **Bucuresti TMA (Class A)**; **București ACC (LRBB)** en route — no dedicated FIR brief yet published in this library, see [Europe airspace brief](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (314 ft) — **not** hot-and-high |
| Special-airport status | None identified in reachable sources; standard ICAO field with local ground-ops constraints — see §5/§13 |
| Customs / PoE | **Yes** — Romania's principal international gateway; H24 expectation 🟧 (exact desk hours not confirmed) |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LHBP, LBSF, LKPR** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Wallachian (Romanian) Plain; no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | 3,500 m on either parallel runway is ample for any K Global type. |
| Approach availability / minima | 🟧 | CAT II/CAT IIIA capability corroborated via a network-sim (VATSIM) cross-check; not confirmed from a primary AIP minima table this pass. |
| Airspace / traffic / control | 🟧 | Romania's busiest airport; Class C CTR nested in Class A TMA; radar-controlled, moderate-high but not extreme traffic density by EU standards. No dedicated FIR brief exists yet for București (LRBB) — see §1. |
| Weather / seasonal hazard | 🟧 | Continental climate — winter snow/icing season and summer convective risk expected; no field-specific frequency statistic found. |
| Curfew / slots / hours | 🟧 | No night curfew identified; slot-coordination level not confirmed. |
| RFF category vs our types | 🟧 | Not published in reachable sources. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 as the country's main gateway; not individually confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; exact desk hours and current handling agent(s) not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LROP sits at 314 ft AMSL on the flat Wallachian Plain north of Bucharest — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. The Carpathians lie well to the north/northwest and are not a factor at the field itself. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
LROP is Romania's busiest airport, with **two closely-spaced parallel concrete runways (08L/26R, 08R/26L)**. **Otopeni CTR** (Class C, on-field) sits inside **Bucuresti TMA** (Class A), with Bucharest Approach/Director providing radar vectoring. Traffic is predominantly narrowbody (A320/737-family) with occasional widebody movements — moderate-to-high density for the network but not in the same tier as a European mega-hub. No dedicated București (LRBB) FIR brief has yet been built in this library; cross-ref the general [Europe airspace brief](../../../../airspace/europe.md) pending a field-specific FIR page. 🟧

### 3.3 Runway excursion 🟧
No displaced thresholds were identified for either runway pair in reachable sources — **not independently confirmed against a current AIRAC cycle.** RWY 08L/26R underwent a full-depth rehabilitation (2020–2021) that raised its pavement classification to **PCN 92 R/D/W/T** and renewed the CAT III-capable visual aids system in both directions; RWY 08R/26L's current pavement/PCN currency was **not independently confirmed** this pass. 🟧

### 3.4 Weather threat 🟧
Romania has a temperate-continental climate — cold, snowy winters (a recognised de-icing season) and warm summers with typical Central/SE-European afternoon convective risk. The low-lying, flat Wallachian Plain setting is consistent with occasional autumn/winter radiation fog, but **no LROP-specific fog-frequency statistic was found** in reachable sources this pass. See §14.

### 3.5 Operational considerations 🟥
Two durable ground-ops constraints stand out: (1) **aircraft of code letter ≥4D (wingspan >52 m / OMGWS >9 m) must vacate RWY 08R via TWY D only**, or otherwise wait for towing with engines 1 and 4 shut down — a real constraint for any widebody-class rotation through the field; (2) **all jet aircraft must use the full runway length for takeoff** (noise-abatement policy) — intersection departures are at ATC discretion/pilot request only, and **TWY V/TWY W are exit-only** and must never be used to enter or depart the runway. RWY 08 is the default preferential configuration absent a significant tailwind component on 26. See §13.

---

## 4. Cautions & Warnings

- **Code ≥4D aircraft (wingspan >52 m) must vacate RWY 08R via TWY D only**, or await towing with engines 1 & 4 shut down — brief this before any widebody rotation.
- **TWY V and TWY W are exit-only** — never expect or accept a takeoff clearance via either.
- **Full-length takeoff required for all jets** (noise abatement) — do not assume an intersection departure will be offered.
- **RWY 08 is the default/preferred configuration**; expect a change to 26 only with a meaningful tailwind component on 08.
- Mag variation and several ATC frequencies are sourced to a 2016 AIP chart cycle — treat exact current values as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. 🟩
- **Crew-qualification gate:** CAT II currency for RWY 08L and CAT IIIA currency for RWY 08R low-visibility approaches, per a network-sim (VATSIM) cross-check of the field's category structure — confirm against the current AIP/chart before planning a low-vis approach. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found; the standing rule is **full-length-only takeoff for all jets** (noise abatement) — intersection departures at ATC discretion only. 🟧
- **Overflight / entry / permits:** Standard international arrival; Romania's Schengen-area air-border status should be reconfirmed for current passenger-flow planning (partial Schengen accession affecting air/sea borders was reported from 2024 — not independently reverified this pass). 🟧
- **Operations notes:** ANSP — **ROMATSA**; airport operator — **National Company "Bucharest Airports" (Compania Națională Aeroporturi București)**. Historically reported handling agents include Globeground and Menzies (Wikipedia-sourced, dated) — not independently reconfirmed as current. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 assumed for the country's principal gateway | 🟧 |
| AD operating hours | H24 assumed | 🟧 |
| Night / curfew restrictions | None identified in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available H24; supplier not confirmed | 🟧 |
| PCN | RWY 08L/26R **92 R/D/W/T** (post-2021 rehabilitation); RWY 08R/26L not confirmed | 🟧 |
| Customs | International PoE confirmed; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Historically Globeground / Menzies (dated Wikipedia source); not reconfirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08L | 3,500 × 45 m | Concrete / PCN 92 R/D/W/T (2021 rehab) | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | CAT II ILS; full-length takeoff only |
| 26R | 3,500 × 45 m | Concrete / PCN 92 R/D/W/T (2021 rehab) | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | CAT I ILS |
| 08R | 3,500 × 45 m | Concrete / PCN not confirmed 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | CAT IIIA ILS; Code ≥4D must vacate via TWY D only |
| 26L | 3,500 × 45 m | Concrete / PCN not confirmed 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | CAT I ILS |

*Overall runway length/width cross-checked across OurAirports, SkyVector and Wikipedia (all agree at 3,500 × 45 m for both pairs). No displaced thresholds found in reachable sources. Full TORA/TODA/ASDA/LDA breakdown not obtained this pass — pull the current AIP AD 2.13 table before treating as audit-grade.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Otopeni ATIS | 118.500 | H24 assumed | Confirmed consistent across the 2016 AIP chart and current cross-check sources 🟩 |
| Delivery | Otopeni Clearance Delivery | 121.955 | H24 assumed | An older-cycle value of 121.70 also appears in cross-check data — 🟧 verify current AIRAC |
| Ground | Otopeni Ground | 121.855 (also 121.70 in an older cycle) | H24 assumed | 🟧 verify current AIRAC |
| Tower | Otopeni Tower | 118.805 (main); 120.90 reported as an alternate/legacy tower frequency | H24 assumed | 🟧 the 2016 AIP chart showed 120.9/121.85 split by runway pair — frequency plan has likely evolved; verify current chart |
| Approach | Bucharest Approach | 119.415 (also 120.60 sector-specific reported) | H24 assumed | An older-cycle value of 118.25 also appears — 🟧 verify current AIRAC |
| Director | Bucharest Director | 127.15 / 120.60 | HX assumed | 🟧 |
| Centre / FIR | București ACC (LRBB) | Per current AIRAC | H24 | No dedicated FIR brief published yet — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 |

*Source: AIP Romania AD 2.5-40 visual approach chart (2016 cycle) cross-checked against SkyVector and a VATSIM Romania vACC operational reference (network-sim doc, not regulatory). Frequencies span multiple data vintages — treat exact current values as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | FLR (Floresti) | 112.20 | H24 assumed | ~16.7 NM |
| VOR | OPT (Rosiori) | 117.10 | H24 assumed | ~20.4 NM |
| VOR | STJ (Strejnic) | 113.20 | H24 assumed | ~21.4 NM |
| VOR | COM (Comana) | 110.80 | H24 assumed | ~23.9 NM |
| NDB | LL (Otopeni) | 659 kHz | H24 assumed | On/near field, ~0.6 NM |
| NDB | OTL (Otopeni) | 370 kHz | H24 assumed | ~3.6 NM |
| NDB | OPW (Otopeni) | 267 kHz | H24 assumed | ~4.4 NM |
| NDB | OPE (Otopeni) | 349 kHz | H24 assumed | ~5.4 NM |
| ILS 08L | Ident not confirmed 🟧 | Not confirmed 🟧 | H24 assumed | CAT II |
| ILS 08R | Ident not confirmed 🟧 | Not confirmed 🟧 | H24 assumed | CAT IIIA |
| ILS 26L | Ident not confirmed 🟧 | Not confirmed 🟧 | H24 assumed | CAT I |
| ILS 26R | Ident not confirmed 🟧 | Not confirmed 🟧 | H24 assumed | CAT I |

*VOR/NDB idents and frequencies cross-checked between SkyVector and the AIP 2016 chart extract (bearings/frequencies broadly agree, minor rounding differences). ILS idents not obtained this pass.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** RWY 08 is the default; a change to 26 is expected only with a meaningful tailwind component on 08.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08L | ILS (CAT II) + NDB | Not confirmed 🟧 | Not confirmed 🟧 | |
| 08R | ILS (CAT IIIA) + NDB | Not confirmed 🟧 | Not confirmed 🟧 | Code ≥4D taxi-in constraint, see §13 |
| 26L | ILS (CAT I) + NDB | Not confirmed 🟧 | Not confirmed 🟧 | LVTO available |
| 26R | ILS (CAT I) + NDB | Not confirmed 🟧 | Not confirmed 🟧 | LVTO available |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT II (08L) / CAT IIIA (08R) infrastructure implies an LVP regime exists; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plain); the operative concern is re-sequencing within the Class A Bucuresti TMA/Class C CTR structure.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify on current chart. 🟧
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Most Apron 1/Apron 2 stands are pushback-only; a handful of positions (regional gates, the GA/bizjet apron) allow self-start-up — confirm assignment with Ground/Apron on the day. 🟧
- **ATC slot / CTOT & clearance:** Slot-coordination level not confirmed; standard EUROCONTROL Network Manager ATFM/CTOT practice may apply during periods of congestion. 🟧
- **De-icing:** Available on stand / taxiway per local practice; season and provisioning specifics not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** The standing rule is **full-length-only takeoff for all jet aircraft**; intersection departures are permitted only at ATC discretion or pilot request. No further NADP detail identified. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** A network-sim (VATSIM) stand-assignment reference lists Apron 1 stands 107/109 as B772-capable (pushback-only) and stand 108 as a B77W remote position; Apron 2 stands 201 (B767/A31, pushback), 201A (B744, start-up) and 202–205 (B773, pushback) as the widebody-capable cluster. **Not independently confirmed against a real-world stand map this pass** — treat as a planning proxy only. 🟧
- **Push-back:** Mandatory at the majority of Code C/D/E stands per the same reference; a minority of positions (regional gates, GA/bizjet apron) allow self-start-up. 🟧
- **Standard taxi routes:** High-speed taxiways "Oscar" and "Victor" (built during the airport's Phase II expansion) connect the main apron to the runway system.
- **Hot spots / tight taxiways:** 🟥 **Code ≥4D aircraft must vacate RWY 08R via TWY D only** (or await towing with engines 1 & 4 shut down); **TWY V and TWY W are exit-only** — never expect entry or takeoff via either.
- **Follow-me:** Available; used to guide taxi during low-visibility procedures. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate-continental climate on the flat Wallachian Plain — cold, snowy winters and warm summers.
- **Seasonal hazards:** Winter snow/icing (de-icing season, exact months not AIP-confirmed) and typical SE-European summer afternoon convective activity; a low-lying, flat setting is consistent with occasional autumn/winter fog, though no LROP-specific frequency statistic was found. 🟧
- **Local effects:** None beyond general continental climatology identified in reachable sources.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current AUP/UUP or RAD status in the Bucuresti TMA. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — a non-base field in the K Global network. 🟩
- **Nearest suitable alternates:** Company preferred alternates **LHBP, LBSF, LKPR** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. Bucharest's other airport, [**LRBS — Băneasa**](../lrbs/index.md), lies approximately 4 NM south but is not currently reflected in VAMSYS company alternates.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as the country's main international gateway; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,500 m either runway) is non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- The one real widebody-specific ground-ops item is the **Code ≥4D vacate-via-TWY-D-only rule on RWY 08R** (§13) — brief this for any widebody-class rotation through the field. Otherwise no field-length or field-elevation performance penalty for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Magnetic variation — sourced to a 2016 AIP chart extract; not independently re-confirmed.
- Declared distances (TORA/TODA/ASDA/LDA breakdown per runway) — not obtained; only nominal runway length confirmed.
- PCN for RWY 08R/26L — not confirmed (08L/26R confirmed post-2021 rehab at PCN 92 R/D/W/T).
- ATC frequencies — sourced to a mix of 2016 AIP chart data, SkyVector, and a VATSIM Romania vACC reference; representative but not current-AIRAC-verified.
- ILS idents (all four runway ends) — not obtained this pass.
- RFF category — not published in reachable sources.
- Slot-coordination level, curfew status (assumed none) — not confirmed.
- Fuel supplier(s) and into-plane hours — assumed H24 major-gateway availability, not individually confirmed.
- Customs/immigration desk hours and current handling agent(s) — Globeground/Menzies is a dated (Wikipedia) reference, not reconfirmed.
- Current Schengen air-border status and its effect on PoE/immigration flow — reported as evolving from 2024, not independently reverified this pass.
- SIDs/STARs (current names), transition altitude/level, take-off minima, NADP detail — none confirmed in reachable sources; pull the live current-AIRAC procedure list before use.
- Stand/gate map — sourced to a VATSIM network-sim reference, not an official airport source; treat as a planning proxy only.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Romania (ROMATSA / AIS Romania), AD 2.5-40 Visual Approach Chart — Bucureşti/Henri Coandă (LROP)**, eff. 2016-02-04, AIRAC AIP AMDT 01/16 — https://www.aisro.ro/files/harti/LR_AD_2_LROP_5-40_en.pdf (retrieved 2026-07-26). *ARP, elevation, mag variation, ATC frequencies (2016 cycle), TMA/CTR structure.*
- **AIP Romania AIRAC AIP AMDT 13/25**, WEF 2025-11-27 — https://www.aisro.ro/files/amdt/LR_Amdt_A_2025_13_en.pdf (retrieved 2026-07-26). *Current chart index confirming ILS/NDB approach names by runway end.*
- OurAirports — https://ourairports.com/airports/LROP/ and /runways.html (retrieved 2026-07-26). *Runway/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/LROP/Henri-Coanda-Airport (retrieved 2026-07-26). *Navaid/frequency/runway cross-check.*
- Wikipedia — "Henri Coandă International Airport" — https://en.wikipedia.org/wiki/Henri_Coand%C4%83_International_Airport (retrieved 2026-07-26). *History, operator, general CAT III note, handling agents (dated).*
- VATSIM Romania vACC — LROP airport operational documentation — https://docs.rovacc.ro/airports/LROP.html (retrieved 2026-07-26). **Network-sim document, not regulatory** — operational cross-check of preferential runway logic, stand assignment, ground-movement rules and per-runway LVP category breakdown.
- World of PORR — "08L-26R Runway Henri Coanda Airport Bucharest" — https://www.worldofporr.com/en/1752020/08l-26r-runway-henri-coanda-airport-bucharest (retrieved 2026-07-26). *RWY 08L/26R 2020–21 rehabilitation, PCN 92 R/D/W/T, CAT III visual aids both directions.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. |
