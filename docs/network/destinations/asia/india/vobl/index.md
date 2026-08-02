# VOBL — Kempegowda Intl · Airport Briefing

**VOBL / BLR** · Bengaluru (Devanahalli), Karnataka, India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AAI eAIP India (AIP India, AD 2 VOBL) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 13°11′56″N / 077°42′20″E (13.1989, 77.7056) `[AAI eAIP India, AD 2 VOBL 2.2]` |
| Field elevation | **3,003 ft / 915 m AMSL** (reference temperature 36.6°C) `[AAI eAIP AD 2 VOBL 2.2]` |
| Mag variation | 🟧 **1.83° W (2010 epoch)**, annual change 0.033° E per the sourced AIP cycle — current-day value not independently re-confirmed against current AIRAC; secular drift since 2010 would put the present-day figure roughly 0.5° less westerly, **not a sourced AIP figure** |
| Time zone | UTC+5:30 (IST) — no daylight-saving observed |
| Runway(s) | **09L/27R** 4,000 × 45 m (asphalt, CAT I ILS) · **09R/27L** 4,000 × 45 m (asphalt, CAT IIIB ILS) — full parallel pair, both Code-F capable |
| Preferential runway | Multiple configuration modes (09/27 Segregated, 09 Dependent, single-runway) selected by wind and LVP status; **Code-F aircraft use RWY 09R/27L (south) only**, even in segregated ops — see §10/§11 |
| Longest LDA | 4,000 m (both runway pairs; no displaced thresholds published) |
| Approaches | **ILS CAT IIIB on 09R/27L**; **ILS CAT I only on 09L/27R** — do not assume both runways share the same low-vis capability, see §3.3/§18 |
| RFF category | **CAT 10** (within ATS hours) `[AAI eAIP AD 2 VOBL 2.6]` 🟩 |
| Control type | **Radar** — Bengaluru Tower/Ground/Delivery on the field; **Bengaluru Radar** approach and lower-sector ACC; parent FIR believed **Chennai FIR** 🟧 (not explicitly confirmed in the reachable AD 2 VOBL extract — corroborated only via general/tier-4 sources) |
| Elevation class | **~3,003 ft — a genuinely elevated field for India**, though **not** hot-and-high by extreme international standards (cf. Bogotá/Mexico City ~7,000+ ft); runways are ample (4,000 m) so field length/strength is non-limiting, but the elevation plus pre-monsoon high reference temperature (36.6°C) is a real, non-critical performance input — see §3.5 |
| Special-airport status | Not operator-categorised as crew-restricted; the standing caution is the **Yelahanka (VOYK) military airbase** 3.2–4.3 NM south, sharing a similar 090/270 runway orientation — see §3.1/§3.2/§5 🟥 |
| Customs / PoE | **Yes — H24** `[AAI eAIP AD 2 VOBL 2.3]` 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **[VABB](../vabb/index.md)**, VOHS, **[VIDP](../vidp/index.md)** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Undulating Deccan plateau; no close-in high terrain found in the reachable obstacle table beyond airfield furniture (ATC tower ~200 ft AGL equivalent). Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | Both 4,000 m runways are ample for any K Global type; elevation/reference-temperature effect on takeoff performance is real but non-limiting given runway length — see §3.5. |
| Approach availability / minima | 🟧 | **RWY 09R/27L is CAT IIIB; RWY 09L/27R is CAT I only** — a real asymmetry, not a symmetric CAT III pair. Public sources (Wikipedia, aviation press) claim the north runway also reached CAT IIIB in 2025 — **this conflicts with the primary AIP extract retrieved** (AMDT 04-25, eff. 2025-08-07), which states 09L/27R remains CAT I. Primary source is treated as authoritative here; discrepancy flagged in §18. |
| Airspace / traffic / control | 🟥 | **Yelahanka (VOYK) military airbase** 3.2–4.3 NM south shares a near-identical runway orientation; AIP-published missed-approach turn restrictions and mandatory SID adherence exist specifically because of this proximity — see §3.2. |
| Weather / seasonal hazard | 🟥 | **Winter radiation fog (typically Dec–Jan)** is BLR's defining low-visibility hazard, driving recurring pre-dawn LVP activation, delays and occasional diversions to Chennai/Hyderabad — directly related to why the south runway carries CAT IIIB infrastructure. Pre-monsoon (Mar–May) convective storms/hail are a secondary seasonal threat. |
| Curfew / slots / hours | 🟩 | **No curfew found** — ATS, customs, fuel, handling and security are all published H24; only the aerodrome operator's administrative office keeps limited hours (Mon–Fri 0300–1200 UTC). Runway hourly-capacity limits are published (§6) but no IATA slot level confirmed — see §18. |
| RFF category vs our types | 🟩 | CAT 10 — above any K Global fleet requirement. |
| Fuel availability | 🟩 | Jet A-1, H24, hydrant + dispenser + bowser system, shared multi-oil-company fuel farm. |
| Customs / handling / security | 🟩 | H24 customs/immigration/security per AIP; specific ground-handling agent for K Global not confirmed 🟧. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
VOBL sits at 3,003 ft AMSL on the undulating Deccan plateau. The reachable AIP obstacle table (AD 2.10) lists only airfield-adjacent furniture (ATC tower, meteorological masts, ILS glide-path huts/antennas, wind-direction indicators) up to roughly 3,200 ft — none of it a close-in high-terrain factor for arrival, departure or missed-approach paths. This is not a CFIT-significant field; verify the MSA ring on the current chart as routine practice, but terrain is not the operative threat here — traffic proximity is (§3.2).

### 3.2 Airborne conflict / traffic 🟥
The single most distinctive threat at VOBL is **Yelahanka Air Force Station (VOYK)**, an active military airbase only **3.2 NM south of RWY 09R/27L and 4.3 NM south of RWY 09L/27R**, sharing a near-identical 090/270 runway orientation. The AIP explicitly warns pilots landing at VOBL to "exercise caution for VOYK having similar runway orientation," and publishes hard mitigations: **no left turn after a missed approach from RWY 27L, no right turn after a missed approach from RWY 09R**, and departures must **strictly follow the promulgated SIDs** because of VOYK's proximity. Military helicopter circuits operate up to 1.5 NM north of the VOYK runway (height not exceeding 700 ft AGL), and fixed-wing training aircraft fly practice ILS approaches to VOYK RWY 27 — 3.2 NM south of VOBL's extended RWY 09R/27L centreline — plus fixed-wing VOYK VOR-185 A/B/C training activity up to 6,000 ft. This is a standing, briefable airborne-conflict threat, not a one-off NOTAM item.

### 3.3 Runway excursion 🟧
No displaced thresholds are published for either runway — all four declared-distance sets (TORA/TODA/ASDA/LDA) equal the full 4,000 m runway length, not independently re-confirmed against a live AIRAC 🟧. The genuine asymmetry to brief is **ILS category, not runway length**: RWY 09R/27L is CAT IIIB-equipped; RWY 09L/27R is CAT I only. A crew assuming a symmetric CAT III pair (as several public secondary sources incorrectly imply) would be briefing the wrong capability for the north runway in low-visibility conditions.

### 3.4 Weather threat 🟥
Bengaluru's elevation gives it a milder climate than most Indian metros, but **winter radiation fog (typically December–January)** is the field's defining and recurring low-visibility hazard, forming in the pre-dawn hours ahead of the morning departure bank and routinely triggering Low Visibility Procedures, sequencing delays, and — in the more severe events — diversions to Chennai or Hyderabad. This is the direct operational reason the newer south runway (09R/27L) was built out to CAT IIIB. Separately, the **pre-monsoon period (roughly March–May)** brings the Karnataka plateau's characteristic afternoon/evening convective thunderstorms, occasionally with hail — a standard tropical-convective threat rather than a field-specific anomaly. See §14.

### 3.5 Operational considerations 🟧
Three durable planning points: (1) **elevation/reference-temperature performance** — 3,003 ft field elevation combined with a 36.6°C AIP reference temperature is a real, quantifiable input to takeoff performance calculations, though the 4,000 m runways make it non-limiting for K Global types under normal conditions; (2) the **VOYK military-airfield interaction** (§3.2) demands strict SID adherence and correct missed-approach turn direction, briefed every approach/departure; (3) **runway-capacity/mode management** — the airport publishes explicit hourly movement caps (33 arrivals-only/33 departures-only/42 mixed in single-runway mode; 35/35/60 in segregated mode, with each Code-F/Code-E/ATR movement counted as two ATMs) and requires Code-F aircraft to use the south runway exclusively even in segregated operation — a scheduling-relevant constraint, not merely a technical footnote.

---

## 4. Cautions & Warnings

- **Yelahanka (VOYK) military airbase, 3.2–4.3 NM south, shares a near-identical runway orientation** — no left turn after a missed approach from 27L, no right turn after a missed approach from 09R; departures must fly the exact promulgated SID.
- **RWY 09L/27R is CAT I only** — do not plan or expect a CAT II/III approach on the north runway; only RWY 09R/27L (south) is CAT IIIB-equipped.
- **Code-F aircraft (A380/747-8 class) are restricted to RWY 09R/27L** at all times, including segregated-mode operation — never plan a Code-F movement on the north runway.
- **Winter pre-dawn radiation fog (Dec–Jan)** can trigger LVP with little warning ahead of the morning bank — check current LVP status and have a Chennai/Hyderabad diversion contingency in season.
- **No curfew** — ATS/customs/fuel/handling/security are H24; the published runway-capacity limits (not a curfew) are the real scheduling constraint at peak banks.
- Mandatory follow-me service applies below RVR 350 m (arrivals to non-ASMGL-equipped stands, or on taxiways without centreline lighting) and below RVR 550 m on TWY P/Q for aircraft without serviceable ADS-B — brief before a low-vis arrival.
- Mag variation is sourced to a 2010 AIP epoch — treat the exact current-day value as 🟧 pending a live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **VOYK military-airfield proximity and its missed-approach/SID constraints** (§3.2). 🟥
- **Crew-qualification gate:** CAT II/III currency required for low-visibility approaches to RWY 09R/27L in winter fog conditions; RWY 09L/27R never supports better than CAT I — confirm crew/aircraft currency and correct runway assumption before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** No curfew or night ban found. Code-F aircraft restricted to RWY 09R/27L only (all modes). Strict SID adherence and missed-approach turn-direction restrictions apply because of VOYK proximity (§3.2) — no RNP AR ban or circling restriction found in reachable sources; verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard international arrival into India; no special state permit found beyond normal customs/immigration formalities. 🟩
- **Operations notes:** Airport operator/ANSP-adjacent body — **Bengaluru International Airport Limited (BIAL)** (a Fairfax India/Siemens Project Ventures/Airports Authority of India/KSIIDC consortium); AAI provides ATS. Aerodrome coordinator contact published for disabled-aircraft-removal coordination (BIAL COO's office).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | H24 for ATS/customs/fuel/handling/security; aerodrome **operator's administrative office** Mon–Fri 0300–1200 UTC (0830–1730 IST) only | 🟩 |
| Night / curfew restrictions | **None found** — no curfew; published runway hourly-movement capacity caps apply instead (33/33/42 single-RWY mode; 35/35/60 segregated mode, Code-F/E/ATR counted as 2 ATMs each) `[AAI eAIP AD 2 VOBL 2.3]` | 🟩 |
| RFF category | **CAT 10** (within ATS hours) | 🟩 |
| Fuel | Jet A-1; hydrants, dispensers and bowsers; H24 | 🟩 |
| PCN | RWY 09L/27R asphalt PCN 74/F/B/W/T (first 150–180 m from each threshold concrete, PCN 86/R/B/W/T); RWY 09R/27L asphalt PCN 98/F/C/W/T (first 150 m from each threshold concrete, PCN 86/R/B/W/T); apron zones PCN 76–92/R/B/W/T depending on stand group | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Ground handling available (bridge-mounted equipment mandatory on contact stands); specific agent(s) contracted for K Global not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09L | 4,000 × 45 m | Asphalt / PCN 74/F/B/W/T (first 150 m from THR concrete, PCN 86/R/B/W/T) | 4,000 m | 4,000 m | 4,000 m | 4,000 m | CAT I ILS (IBAN); north runway |
| 27R | 4,000 × 45 m | Asphalt / PCN 74/F/B/W/T (first 180 m from THR concrete, PCN 86/R/B/W/T) | 4,000 m | 4,000 m | 4,000 m | 4,000 m | CAT I ILS (IDEV); north runway |
| 09R | 4,000 × 45 m | Asphalt / PCN 98/F/C/W/T (first 150 m from THR concrete, PCN 86/R/B/W/T) | 4,000 m | 4,000 m | 4,000 m | 4,000 m | **CAT IIIB ILS (IBLN)**; south runway; **Code-F runway** |
| 27L | 4,000 × 45 m | Asphalt / PCN 98/F/C/W/T (first 150 m from THR concrete, PCN 86/R/B/W/T) | 4,000 m | 4,000 m | 4,000 m | 4,000 m | **CAT IIIB ILS (IDVN)**; south runway; **Code-F runway** |

*Source: AAI eAIP India, AD 2 VOBL 2.12/2.13, AMDT 04-25 (eff. 2025-08-07, retrieved 2026-07-26). No displaced thresholds published for any designator. Runway strips 4,120 × 280 m; RESA 240 × 120 m (09L/27R) or 240 × 90 m (09R/27L). All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Bengaluru Information | 128.675 | H24 (assumed) | |
| Delivery | Bengaluru Delivery | 121.825 (main) / 121.900 (backup) | 0000–1730 UTC; beyond this on 121.775 | |
| Ground | Bengaluru Ground | 121.650 (SMC-1) / 121.775 (SMC-2) | H24 | |
| Tower | Bengaluru Tower | 118.475 / 124.350 (TWR-1 main/backup) · 119.050 / 123.675 (TWR-2 main/backup) | H24 | Multiple positions — take the assigned frequency |
| Approach | Bengaluru Radar | 121.250 (Approach Arrival, main) · 125.275 (Approach Departure/Arrival, backup) · 127.750 (Approach Departure, main) | H24 | |
| Centre / FIR | Bengaluru Radar — "Lower Bengaluru" sectors: 119.450 (Sector-West, main) · 126.325 (Sector-East, main) · 125.750 (backup) | H24 | Parent FIR believed **Chennai FIR** 🟧 (not explicitly confirmed in reachable AD 2 VOBL extract) — see [Asia airspace general brief](../../../../airspace/asia.md) |

*Source: AAI eAIP India, AD 2 VOBL 2.18, AMDT 04-25 (eff. 2025-08-07, retrieved 2026-07-26). Emergency frequency 121.500 MHz H24.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| DVOR/DME | BIA | 116.800 MHz (CH115X) | H24 | On field |
| ILS LOC 09L | IBAN | 109.300 MHz | H24 | **CAT I** only |
| ILS GP 09L | — | 332.000 MHz | H24 | |
| ILS DME 09L | IBAN | CH52X | H24 | |
| ILS LOC 27R | IDEV | 108.300 MHz | H24 | **CAT I** only |
| ILS GP 27R | — | 334.100 MHz | H24 | |
| ILS DME 27R | IDEV | CH20X | H24 | |
| ILS LOC 09R | IBLN | 109.900 MHz | H24 | **CAT IIIB** |
| ILS GP 09R | — | 338.800 MHz | H24 | |
| ILS DME 09R | IBLN | CH36X | H24 | |
| ILS LOC 27L | IDVN | 111.500 MHz | H24 | **CAT IIIB** |
| ILS GP 27L | — | 332.900 MHz | H24 | |
| ILS DME 27L | IDVN | CH52X | H24 | |

*Source: AAI eAIP India, AD 2 VOBL 2.19, AMDT 04-25 (eff. 2025-08-07, retrieved 2026-07-26). Glide-path coverage on RWY 09R/27L is restricted to ±7–8° at 10 NM per the published remarks — verify on current chart.*

---

## 10. Arrival

- **Transition altitude / level:** TA 7,000 ft; TL by QNH — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm assumed) — confirm no local override on current chart.
- **Preferential runway logic:** Multiple configuration modes exist — 09/27 Segregated (one runway arrivals-only, the other departures-only), 09 Dependent (RWY 09R arrivals / 09L departures), and single-runway modes. Selection is wind- and LVP-driven; **during LVP, only 27 Segregated Mode, 09 Dependent Mode, or single-RWY 09R/27L mode are used** — the CAT I north runway is not used as the sole low-vis runway. **Code-F aircraft use RWY 09R/27L only**, in every mode.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 09L | ILS CAT I (IBAN) | North runway |
| 27R | ILS CAT I (IDEV) | North runway |
| 09R | ILS CAT I/II/IIIB (IBLN) | South runway; primary low-vis/Code-F runway |
| 27L | ILS CAT I/II/IIIB (IDVN) | South runway; primary low-vis/Code-F runway |

- **STARs (names only — verify current AIRAC):** At least **PEXEG 7N** and **GUNIM 7N** (via the GUNIM transition, W81/N563) are confirmed by name from the reachable AIP extract; the full current-AIRAC STAR set was not obtained this pass — pull the live list at planning. 🟧
- **LVP:** Safeguarding Procedures initiate when RVR <1,200 m and/or visibility forecast to 800 m or below, and/or cloud ceiling 400 ft forecast to fall to 200 ft or below. LVP is implemented when RVR <800 m and/or ceiling <200 ft (with Safeguarding Procedures complete). CAT I operations continue until TDZ RVR falls below 550 m. Mandatory follow-me applies below RVR 350 m (non-ASMGL stands / taxiways without centreline lights) and below RVR 550 m on TWY P/Q for aircraft without serviceable ADS-B.
- **Missed approach watch-items:** Terrain is not the driver; the operative constraint is the **VOYK military-airfield proximity** — no left turn on a missed approach from 27L, no right turn on a missed approach from 09R (§3.2).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV 1 SIDs are published per runway (09L, 09R, 27L, and presumably 27R); specific current-AIRAC SID names were not obtained in this research pass — waypoint identifiers (e.g. BL401/BL402/BL403 series) were found but not full procedure names. Pull the live current-AIRAC SID list before use. 🟧
- **RNP / climb-gradient requirements:** RNAV 1 departure routes exist from at least three runways; gradient/equipage specifics not confirmed this pass — verify on current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP; exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Standard clearance-delivery/ground procedure; cross-bleed/APU notification procedure not confirmed. 🟧 Pushback is restricted during low-visibility single-runway operation (max 3 simultaneous per apron, max 4 combined across Apron 1&2 or 3&4).
- **ATC slot / CTOT & clearance:** No IATA slot level confirmed in reachable sources 🟧; the airport instead publishes explicit **hourly runway-movement capacity caps** (§6) that function as the practical scheduling constraint at peak banks.
- **De-icing:** **NIL** — not required at this tropical-latitude, non-freezing-climate field. `[AAI eAIP AD 2 VOBL 2.3/2.4]`

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** The published measure is limited to **minimising the use of reverse thrust after landing** to reduce disturbance in areas adjacent to the aerodrome, consistent with safety of operations — no departure/approach noise-routing procedure found. `[AAI eAIP AD 2 VOBL 2.21]`
- **Night noise / dB limits:** None found; no curfew or noise-based movement restriction identified.
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Minimise use after landing per the published noise-abatement note above; no further detail confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Numbered stand groups (V36–V70, 1–123 and sub-series) span apron PCN zones from 76 to 92/R/B/W/T; **bridge-mounted (jetbridge) equipment is mandatory on contact stands**. Terminal 1 historically listed gates 41–42 as A380/Code-F-capable, but T1 became **domestic-only from 12 Sep 2023** — current-day Code-F/widebody gate assignment (now presumably concentrated at Terminal 2, which has Code-F gate provisions) is **not independently confirmed** this pass. 🟧 | 🟧
- **Push-back:** Standard ground-handling push-back; mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground on the day; extensive taxiway network (A/A1–A11, B/B1–B4, D, F, G/G1/G4, H/H1–H10, K, M, N/N1/N2, P/P1, Q, R, S, and taxilanes L1–L3) links both runways to the terminal/apron complex.
- **Hot spots / tight taxiways:** 🟥 A dedicated hot-spot chart is referenced in the AIP (AD 2.24) but its content was not extracted this pass — verify on current chart before ground-movement planning. 🟧 Known ILS-protection ground constraints: **TWY H1/H2 not to be used when ILS RWY 09R is active; TWY H9/H10 not to be used when ILS RWY 27L is active.**
- **Follow-me:** Mandatory below RVR 350 m (non-ASMGL stands / taxiways without centreline lights) and below RVR 550 m on TWY P/Q for aircraft without serviceable ADS-B; otherwise available on request.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Bengaluru's ~3,000 ft elevation gives it a notably milder climate than most Indian metros ("Garden City"); this is a genuinely elevated field for India, though not hot-and-high by extreme international standards.
- **Seasonal hazards:** **Winter radiation fog (typically December–January)** forms in the pre-dawn hours and is the field's defining recurring low-visibility hazard, driving LVP activation, sequencing delays and occasional diversions to Chennai/Hyderabad ahead of the morning departure bank — the direct operational reason the south runway (09R/27L) carries CAT IIIB infrastructure. **Pre-monsoon convective activity (roughly March–May)** brings afternoon/evening thunderstorms and occasional hail, standard tropical-plateau climatology rather than a field-specific anomaly. The June–September southwest monsoon brings sustained rainfall but is not reported as a distinct low-visibility driver at this field.
- **Local effects:** No notable terrain/sea-breeze effect at this inland plateau field; the elevation/reference-temperature combination (3,003 ft / 36.6°C) is a real, non-critical input to takeoff performance in the hottest pre-monsoon weeks.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, ILS/navaid U/S (especially CAT IIIB equipment status on 09R/27L), lighting, obstacle/crane, RFF downgrade, VOYK military-activity NOTAMs, GPS/RAIM for RNAV procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / spoke** (non-base) — see K Global category **L** and base flag **No** in §1.
- **Nearest suitable alternates:** Company preferred alternates **[VABB](../vabb/index.md)** (Mumbai), **VOHS** (Hyderabad), **[VIDP](../vidp/index.md)** (Delhi) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1, H24, hydrant/dispenser/bowser system fed from an 11-acre multi-oil-company fuel farm via a ~36 km pipeline from Devanagonthi. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (4,000 m both runways) is non-limiting for any K Global type; the elevation/reference-temperature combination is a real but non-critical performance input in the hottest pre-monsoon weeks. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No widebody-specific field-length or RFF constraint at VOBL — both runways and RFF CAT 10 comfortably cover any K Global type. The one real fleet-specific consideration is **Code-F restriction to RWY 09R/27L** — confirm the intended type's code letter against the assigned runway before planning, particularly for any widebody rotation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ILS CAT status discrepancy** — the primary AIP extract retrieved (AMDT 04-25, eff. 2025-08-07) states RWY 09L/27R is CAT I only and RWY 09R/27L is CAT IIIB; Wikipedia and several aviation-press sources claim the north runway also achieved CAT IIIB in May 2025. Primary AIP is treated as authoritative here; the claim of a symmetric CAT III pair is **not confirmed** and should be re-verified against a live AIRAC before relying on it.
- **RFF category discrepancy** — primary AIP states CAT 10; at least one secondary aggregator reports CAT 9. Primary AIP (CAT 10) is treated as authoritative.
- **Magnetic variation** — sourced to a 2010 AIP epoch (1.83° W); current-day value not independently re-confirmed.
- **Parent FIR** — believed Chennai FIR; not explicitly confirmed in the reachable AD 2 VOBL extract.
- **SID/STAR current names** — only PEXEG 7N/GUNIM 7N (STAR) confirmed by name; full current-AIRAC SID/STAR lists not obtained this pass.
- **Take-off minima, engine run-up restriction, follow-me general availability outside LVP, push-back mandatory-vs-self-manoeuvre policy** — none confirmed in reachable sources.
- **IATA slot coordination level** — not confirmed; the airport instead publishes explicit hourly runway-movement capacity caps.
- **Current-day widebody/Code-F gate assignment** — Terminal 1's historically A380-capable gates 41–42 predate T1 becoming domestic-only (Sep 2023); current Code-F gate location (likely Terminal 2) not independently confirmed.
- **Ground-handling agent(s) contracted for our operation** — not confirmed.
- **Taxiway hot-spot chart detail (AD 2.24)** — referenced but not extracted this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AAI eAIP India, AD 2 VOBL** (AD 2.1–2.24), AMDT 04-25, eff. 2025-08-07 — https://aim-india.aai.aero/eaip/eaip-v2-04-2025/eAIP/IN-AD%202.1VOBL-en-GB.html (retrieved 2026-07-26). *ARP/elevation/mag-var, runway physical characteristics, declared distances, RFF category, ATS airspace, communications, navaids, LVP/low-vis procedures, local aerodrome regulations (VOYK).*
- OurAirports — https://ourairports.com/airports/VOBL/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation cross-check, runway list.*
- Wikipedia — "Kempegowda International Airport" — https://en.wikipedia.org/wiki/Kempegowda_International_Airport (retrieved 2026-07-26). *History, terminal programme, second-runway/CAT IIIB narrative (flagged as conflicting with primary AIP for the north runway — see §18), cargo/fuel-farm detail.*
- SkyVector — https://skyvector.com/airport/VOBL/Kempegowda-International-Airport (retrieved 2026-07-26). *Cross-check.*
- Deccan Herald — "Fog delays 67 flights at KIA" and related reporting on winter fog/LVP events — https://www.deccanherald.com/india/karnataka/bengaluru/fog-delays-67-flights-at-kia-789333 (retrieved 2026-07-26). *Seasonal winter-fog/LVP corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
