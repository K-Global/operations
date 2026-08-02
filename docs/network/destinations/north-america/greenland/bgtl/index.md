# BGTL — Pituffik Space Base (formerly Thule Air Base) · Airport Briefing

**BGTL / THU** · Pituffik, NW Greenland (Avannaata Municipality) · North America
**Version** v0.1.3 · **Updated** 2026-07-26 · **Status** Draft — primary-sourced (Naviair AIP), several items unverified/dated — see §18

> **Read-me:** Planning aid for X-Plane 11, not a chart. Static data is from the Naviair AIP Greenland AD 2-BGTL pages (mixed AIRAC amendment dates 2017–2021 across sub-sections; the administrative section still names "U.S. Air Force" and has not visibly been updated for the 2023 USSF/Pituffik rename — treat as provisional and re-verify on the current AIRAC). Cross-checked against OurAirports and SkyVector. Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. **This field is listed on the reference EDDF–KSFO OFP (2026-07-25) as an ETOPS/EDTO enroute-alternate option (BGSF-area, shown in parentheses) — its own AIP explicitly restricts that role; see §5/§16.** Cross-link: `Airspace/General/Arctic.md` §7–8. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 76°31′52.33″N 068°42′11.38″W (76.5312, −68.7032) |
| Field elevation | 251 ft / 77 m MSL (AIP REF temp 5.9 °C) |
| Mag variation | 46.0° W (2015) — **not used operationally**; field operates on **TRUE north**, no magnetic reference applied 🟥 |
| Time zone | **UTC −04:00 standard / UTC −03:00 DST**, US transition dates — Pituffik uses its own zone, distinct from the rest of west Greenland (UTC −02:00) 🟧 |
| Runway(s) | One — **08T/26T, 3,047 × 42 m (≈9,997 × 138 ft)**, asphalt, **TRUE-referenced designators** |
| Preferential runway | Local rule: **take-off normally RWY 26T, landing normally RWY 08T** (right-hand circuit for RWY 08 landing) |
| Longest LDA | 3,047 m both directions |
| Approaches | ILS RWY 08 (LOC ITL/GP), TACAN/VOR (THT) both ends; historic radar (DASR) capability referenced — **names only, verify current AIRAC** |
| RFF category | **CAT 6** |
| Control type | **Radar-capable (DASR referenced) / Class D Thule CTR**, but ATS provided only **Mon–Fri 1200–2000 UTC**; no ATC outside those hours 🟥 |
| Elevation class | Sea-level (251 ft) — **not** hot-and-high; extreme cold/Arctic environment is the dominant performance driver 🟥 |
| Special-airport status | **Military PPR aerodrome ("Thule (MIL)") — not a normal civil field.** Special crew/aircraft authorization required — see §5 🟥 |
| Customs / PoE | "As AD" hours; **military PPR entry, not a standard civil Port of Entry** 🟥 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | AIP states "high terrain in all quadrants"; antenna obstacle 837 ft MSL, 0.86 NM from THR 08T, bearing 173° GEO. Regional Greenland icecap dome ~10,500 ft is the wider driftdown constraint (see Arctic brief §7). |
| Runway length vs fleet perf | 🟩 | 3,047 m/42 m single runway — ample length for our types; ASDA (3,355 m) exceeds LDA (3,047 m) both ends — stopway/overrun margin, not a limiting factor. |
| Approach availability / minima | 🟧 | ILS to RWY 08 only (LOC/GP); RWY 26T has no ILS — TACAN/VOR only. In-page AIP procedures field is "NIL" (charts issued separately); CAT/minima unverified. |
| Airspace / traffic / control | 🟧 | Thule CTR, Class D, 5.2 NM radius/2,800 ft MSL–GND; combined Thule TWR/APP; DASR referenced for surveillance maintenance. **ATS only Mon–Fri 1200–2000 UTC, closed Sat/Sun/US holidays** — no controlled service outside those hours. |
| Weather / seasonal hazard | 🟥 | Polar night (no sunrise, roughly Nov–Feb) and 24 h daylight in summer; severe downdrafts + moderate turbulence to 5,000 ft on final RWY 08T with surface wind >30 kt from 125°–185° GEO; **runway condition RCR 08 or lower expected 15 Sep–15 May** (~8 months/yr). |
| Curfew / slots / hours | 🟥 | AD open Mon–Thu 1000–2100, Fri 1000–2000 (local); **closed Sat/Sun/US federal holidays**; PN (prior notice) 6 HR to the AD even within hours. All access ultimately governed by PPR — see §5. |
| RFF category vs our types | 🟩 | CAT 6 confirmed by AIP — expect adequate; confirm against specific OM B type requirement. |
| Fuel availability | 🟧 | **JP-8 (F-34) military grade only**, limited hours (Mon–Thu 1030–2030, Fri 1030–2000 local); civil Jet A-1 availability/compatibility for our fleet not confirmed. |
| Customs / handling / security | 🟥 | Military PPR entry, not a civil PoE; **confirmed quarters mandatory before arrival** (no walk-up billeting); hangar space "extremely limited"; no repair facilities for visiting aircraft. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain  🟥
The AIP states plainly that Thule/Pituffik is surrounded by **"high terrain in all quadrants."** A charted obstacle — an antenna at **837 ft MSL, 0.86 NM from THR 08T on a bearing of 173° GEO** — sits in the approach/take-off area. More broadly, this field sits on the edge of the Greenland ice sheet; the **central icecap dome rises to ~10,500 ft** and is the binding driftdown/decompression-escape constraint for any transiting or diverting aircraft in this sector (see `Airspace/General/Arctic.md` §7). Because the field is **TRUE-referenced with no magnetic correction applied**, confirm the FMS/heading-reference setup before any approach — a magnetic-reference error here is a live CFIT threat, not a cosmetic one. Use grid/true-MORA reference, not magnetic MORA.

### 3.2 Airborne conflict / traffic  🟧
Thule CTR is a small Class D bubble (5.2 NM radius, 2,800 ft MSL/GND) with a combined **Thule TWR/APP** unit; a Digital Airport Surveillance Radar (DASR) is referenced in the AIP's scheduled-maintenance table, implying radar-assisted approach control when staffed. **Critically, ATS is provided only Monday–Friday 1200–2000 UTC and is closed weekends and US federal holidays** — outside those windows there is no controlled service at all. Any diversion planning must account for the very real possibility of an unstaffed, uncontrolled field. Outside the CTR, this is remote, largely procedural Greenland/Nuuk FIR airspace (cross-ref Arctic brief).

### 3.3 Runway excursion  🟧
Single runway, 3,047 × 42 m asphalt — generous length, but the AIP explicitly warns that **surface wind exceeding 30 kt from 125°–185° GEO produces moderate turbulence to 5,000 ft and severe downdrafts on final approach to RWY 08T.** Combined with the AIP's seasonal note that **RCR 08 or lower (icy/contaminated) conditions should be expected 15 Sep–15 May** — roughly eight months of the year — braking action and crosswind/downdraft handling on this runway are a standing threat, not an occasional one. PAPI is noted as "not coincident" between the two ends.

### 3.4 Weather threat  🟥
This is a high-Arctic station at 76.5°N: **polar night** (no sunrise for an extended period roughly November–February) and **continuous daylight in summer** bracket the operation. Katabatic/downslope winds off the icecap drive the severe downdraft/turbulence signature noted above on RWY 08T, and blowing snow/whiteout is a standing high-latitude hazard. Illustrating the extremity of the local wind climate: Thule holds the record for the **fastest sea-level surface wind speed ever recorded, 333 km/h (207 mph), on 8 March 1972** (destroyed the instrument that measured it) — a data point for how violent local wind events can be, not a routine planning figure. All aircraft operating here are required by the AIP to be **winterized**.

### 3.5 Operational considerations  🟥
**The binding constraint at this field is military PPR access, not performance.** Per the AIP: landing permission must normally be obtained **30 days in advance from HAF/A30** (Air Force Pentagon), or **72-hour PPR applies for aircraft holding a standing/blanket approval**; **"AD cannot be used for planned emergency divert or weather alternate"** (AIP §3.12, verbatim). This directly qualifies the field's appearance on the reference EDDF–KSFO OFP as a parenthetical BGSF-area ETOPS/EDTO enroute-alternate option: **treat BGTL as a genuine-unplanned-emergency-only field, not a plannable weather/technical alternate**, absent a pre-arranged diplomatic/military clearance. Special crew and aircraft authorization is separately required; commercial operators must coordinate with an FAA Flight Standards District Office / Principal Operations Inspector, and the AIP names a specific FAA safety inspector contact. **Confirmed quarters are mandatory before arrival** — there is no fallback lodging. Fuel is military JP-8 (F-34), not standard commercial Jet A-1.

---

## 4. Cautions & Warnings

- **Field may not be used for planned emergency diversion or weather alternate purposes** (AIP §3.12, verbatim) — despite its OFP appearance, treat as unplanned-emergency-only unless PPR is pre-arranged.
- PPR mandatory: 30-day advance permission via HAF/A30, or 72-hour PPR under blanket approval; special crew/aircraft authorization required.
- High terrain in all quadrants; charted antenna obstacle 837 ft MSL, 0.86 NM off THR 08T.
- Surface wind >30 kt from 125°–185° GEO → severe downdrafts + moderate turbulence to 5,000 ft on final RWY 08T.
- Runway contamination (RCR 08 or lower) expected 15 Sep–15 May — roughly 8 months/year.
- Field operates on **TRUE north, no magnetic correction** (mag var 46° W but unused) — verify FMS/heading reference before flying any procedure; runways are designated 08T/26T.
- Polar night (~Nov–Feb) and 24 h daylight (summer) — extreme seasonal daylight swing.
- ATS/Tower only Mon–Fri 1200–2000 UTC; closed weekends and US federal holidays — expect no ATC outside those hours.
- Confirmed quarters/billeting mandatory before arrival; hangar space "extremely limited"; no repair facilities.
- Fuel is military-grade JP-8 (F-34) only — confirm civil-airframe compatibility and uplift arrangement in advance.
- All aircraft must be winterized (AIP mandate).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Military aerodrome, "Thule (MIL)" in the AIP — not operator-categorised in the civil sense, but effectively maximum-restricted access. 🟥
- **Crew-qualification gate:** AIP states "special crew and aircraft authorization is required"; no published sim-training/CAT gate found — treat the authorization requirement itself as the gate. 🟧
- **Operating restrictions / bans:** **"AD cannot be used for planned emergency divert or weather alternate"** (AIP §3.12) 🟥; AD closed Sat/Sun/US federal holidays; ATS only Mon–Fri 1200–2000 UTC; PN 6 HR to the AD even within open hours.
- **Overflight / entry / permits:** 🟥 PPR mandatory — landing permission ≥30 days in advance from **HAF/A30, 1480 Air Force Pentagon, Washington DC** (TEL +1 703 697 1738), or 72-hour PPR for aircraft with blanket/open approval. Commercial aircraft must additionally contact the FAA Flight Standards District Office / Principal Operations Inspector for guidance and a letter of authorization, and coordinate with the named FAA safety inspector (TEL +1 650 876-2858 per AIP).
- **Operations notes:** AD administration — **U.S. Air Force** per the AIP text (Thule Airbase, DK-3970 Pituffik; TEL +299 97 66 06 ext 2717; e-mail Thule-BaseOps@Vectrus.com). 🟧 Note: the base was transferred to the **US Space Force in 2020 and renamed Pituffik Space Base in 2023** (Wikipedia) — the AIP's administrative wording has not been confirmed updated to reflect this; verify current administrative point of contact before use.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Mon–Fri 1200–2000 (1100–1900) UTC; closed Sat/Sun/US holidays | 🟥 |
| AD operating hours | Mon–Thu 1000–2100 (0900–2000); Fri 1000–2000 (0900–1900); closed Sat/Sun/US holidays; PN 6 HR to AD | 🟥 |
| Night / curfew restrictions | Effectively closed nights/weekends/holidays outside stated hours (see above) | 🟥 |
| RFF category | CAT 6 | 🟩 |
| Fuel | JP-8 (F-34) only; Mon–Thu 1030–2030 (0930–1930), Fri 1030–2000 (0930–1900) | 🟧 |
| PCN | Not published / verify (AIP apron/taxiway strength fields blank) | 🟧 |
| Customs | "As AD" hours; military PPR entry, not a standard civil PoE | 🟥 |
| Handling / FBO | Handling Mon–Thu 1030–2030 (0930–1930), Fri 1030–2000 (0930–1900); hangar space "extremely limited"; no repair facilities for visiting aircraft; confirmed quarters mandatory before arrival | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08T | 3,047 × 42 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | 3,355 m | 3,047 m | THR PSN 76°32′N 068°46′W; THR ELEV 167 ft; slope 1.2%; RWY designator = GEO/TRUE bearing 085.0°, not magnetic |
| 26T | 3,047 × 42 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | 3,355 m | 3,047 m | THR PSN 76°32′N 068°39′W; THR ELEV 251 ft (highest elev of precision-APCH runway); GEO/TRUE bearing 265.0° |

*Source: Naviair AIP AD 2-BGTL §12–13. TORA/TODA fields are blank in the published AIP ("–") — not a K Global omission, verify against current AIRAC. PAPI noted "not coincident" between ends (AIP §14). All distances metres.*

<!-- Declared-distances verification (2026-07-25): the Naviair AD 2-BGTL PDF (https://aim.naviair.dk/media/files/iq42bqhukcw/BG_AD_2_BGTL_en.pdf) is a directly reachable static PDF, unlike BGSF's, whose AD 2 page remains JS-portal-gated. Table §12 (Runway Physical Characteristics) and §13 (Declared Distances) match this briefing verbatim: both ends 3,047 x 42 m asphalt; THR 08T PSN 76°32′N 068°46′W / ELEV 167 ft / slope 1.2%; THR 26T PSN 76°32′N 068°39′W / ELEV 251 ft; TORA/TODA both ends blank ("–") in the primary AIP itself (confirmed, not a K Global gap); ASDA 3,355 m both ends; LDA 3,047 m both ends. No corrections required. -->

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | — | Not published / verify | — | 🟧 not listed in reachable AIP page |
| Delivery | — | Not published / verify | — | 🟧 combined with Tower function |
| Ground | Thule Ground | 275.800 MHz / 119.900 MHz | Mon–Fri 1200–2000 UTC | |
| Tower | Thule Tower | 126.200 MHz / 255.600 MHz | Mon–Fri 1200–2000 (1100–1900); closed Sat/Sun/US Hol | Operated by US Air Force |
| Approach | Thule TWR/APP (combined) | As Tower | As Tower | DASR (surveillance radar) referenced for maintenance scheduling |
| Centre / FIR | Not on this AD page — see Nuuk FIR / Sondrestrom Information (Arctic brief) | — | — | Cross-ref `Airspace/General/Arctic.md` |
| Base Ops | Thule Base Ops | 131.100 MHz | — | |
| Emergency | — | 121.500 MHz (civil) / 243.000 MHz (military) | — | |

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VORTAC | THT | 111.000 MHz, CH 47X | H24 | PSN 76°32′32″N 068°14′21″W, DME, ELEV 1,300 ft. **Unusable sectors:** VOR portion 134°–164° GEO below 9,000 ft beyond 25 NM; TACAN portion 003°–069° GEO below 7,000 ft beyond 34 NM. |
| LOC | ITL | 109.500 MHz | H24 | Serves RWY 08; LOC course 085° GEO; **back course unusable**. |
| GP | — | 332.600 MHz | H24 | RWY 08; angle 3.00°, TCH 50 ft. |
| VOR | QN (Qaanaaq) | 108.35 MHz | — | ~58 NM, bearing 208° (SkyVector) — regional reference only. |
| NDB | QQ (Qaanaaq) | 336 kHz | — | ~58 NM, bearing 351° (SkyVector) — regional reference only. |

*RWY 26T has no ILS/LOC/GP — TACAN/VOR only. Scheduled preventive maintenance windows are published in the AIP for THT (VORTAC/TACAN), DASR and LOC/GP ITL — verify NOTAM before planning to use any of these.*

---

## 10. Arrival

- **Transition altitude / level:** TA **6,500 ft**; TL not published in the reachable AIP page — Not published / verify 🟧.
- **Speed:** Not specifically published for this field — apply standard ICAO 250 KIAS < FL100 pending verification 🟧.
- **Preferential runway logic:** Local rule — **landing normally RWY 08T** (right-hand circuit turn for RWY 08), **take-off normally RWY 26T**; RWY 08T is the only ILS-equipped end.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08T | ILS (LOC ITL 109.5 / GP 332.6) | Not published 🟧 | Not published 🟧 | Only ILS-equipped end; CAT unverified |
| 08T/26T | TACAN/VOR (THT 111.0) | Not published 🟧 | Not published 🟧 | Sector restrictions apply — see §9 |

- **STARs (names only):** Not published in reachable AIP page — verify 🟧.
- **LVP:** Not published — verify 🟧.
- **Missed approach watch-items:** High terrain in all quadrants; brief the severe-downdraft/turbulence threat on the RWY 08T final in strong SE surface wind (>30 kt, 125°–185° GEO) before commencing any approach to that runway.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published in reachable AIP page — verify current AIRAC 🟧.
- **RNP / climb-gradient requirements:** Not published — verify 🟧.
- **Take-off minima:** Not published — verify 🟧.
- **Start-up / push-back:** Coordinate via Thule Ground (275.8/119.9 MHz) and Base Ops (131.1 MHz); no published stand/push procedure — verify 🟧.
- **ATC slot / CTOT & clearance:** No civil slot regime — access is governed entirely by the PPR process (§5), not a CTOT/slot mechanism.
- **De-icing:** **Type 1 only**, Mon–Thu 1030–2030 (0930–1930), Fri 1030–2000 (0930–1900).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** NIL (AIP §21).
- **Night noise / dB limits:** Not published — N/A given remote military siting.
- **Engine run-up restrictions:** Not published — verify 🟧.
- **Reverse thrust / idle-reverse policy:** Not published — verify 🟧.

---

## 13. Ground operations

- **Stands for our types:** Apron surface/strength data blank in AIP (§8); **hangar space for visiting aircraft is "extremely limited"** per AIP §4.5 — do not assume covered parking is available. 🟧
- **Push-back:** Not published — verify 🟧.
- **Standard taxi routes:** Not published — verify 🟧.
- **Hot spots / tight taxiways:** Not published — verify 🟧.
- **Follow-me:** Not published — verify 🟧.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** High-Arctic station (76.5°N) on the edge of the Greenland ice sheet; extreme cold year-round; katabatic/downslope winds off the icecap.
- **Seasonal hazards:** **Polar night** (no sunrise, roughly Nov–Feb) and **24 h daylight** in summer; **RCR 08 or lower (icy/contaminated runway) expected 15 Sep–15 May** (~8 months/yr); severe downdrafts/turbulence on RWY 08T final with strong SE surface wind; blowing snow/whiteout typical of high-Arctic stations. Historic extreme: fastest sea-level surface wind ever recorded, 333 km/h (207 mph), 8 Mar 1972 (Wikipedia) — illustrates the ceiling of local wind severity, not a routine figure.
- **Local effects:** Terrain-induced turbulence/downdrafts on final RWY 08T; extreme cold-soak/fuel-freeze considerations on any long transit leg (see Arctic brief §8); all aircraft must be winterized (AIP mandate).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, space-weather (NOAA SWPC HF/GNSS impacts — see Arctic brief §11). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (THT VORTAC, LOC/GP ITL, DASR — scheduled maintenance windows are published in the AIP), lighting, obstacle status, RFF downgrade, GPS/RAIM, **and current PPR/access status** given the field's restricted-use posture. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Listed on the reference EDDF–KSFO OFP (2026-07-25) as an **ETOPS/EDTO enroute-alternate option** (BGSF-area, shown in parentheses). Given AIP §3.12's explicit statement that the field **cannot be used for planned emergency divert or weather alternate**, its real role for K Global planning is **genuine-unplanned-emergency-only**, not a plannable diversion/technical alternate — see §5.
- **Nearest suitable alternates:** **BGQQ Qaanaaq** (~58 NM, VOR/NDB "QN/QQ" on field per SkyVector) — short/gravel strip, likely **unsuitable for our jet types**, verify 🟧. **BGSF Kangerlussuaq** — regionally the most reliable Greenland alternate per the Arctic airspace brief (§8), but well south; distance from BGTL not yet computed — verify 🟧. No OM C brief yet exists for either — build if operationally used.
- **Fuel-uplift notes:** **JP-8 (F-34) military grade only**; hours Mon–Thu 1030–2030, Fri 1030–2000 (local); civil Jet A-1 compatibility/availability and uplift arrangement for K Global aircraft **not confirmed** — coordinate through the PPR/Base Ops channel, not a normal fuel-card arrangement.
- **Range/perf flags for our fleet:** Extreme-cold environment is the dominant driver — cold-temperature altimeter corrections, fuel cold-soak/freeze management on approach (see Arctic brief §8 for the −47 °C Jet A-1 freeze-point context, noting this field's fuel grade differs), and mandatory winterization. Link to relevant OM B type for cold-weather operating limits.

---

## 17. Fleet-specific notes (optional)

- **All types:** RWY 08T is the only ILS-equipped end; if wind favours 26T, plan for a TACAN/VOR non-precision approach only. Confirm cold-weather/APU-start certification and cold-soak fuel management for any type routed near this field. No specific OM B stand/apron consideration is published — hangar space is "extremely limited," so do not plan on covered parking.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Whether the AIP administrative section (still naming "U.S. Air Force," Thule Airbase) has been updated to reflect the 2020 US Space Force transfer and 2023 Pituffik Space Base rename — verify current point of contact.
- PCN / apron-taxiway strength data (blank in the reachable AIP).
- TORA/TODA for both runway ends — RE-CHECKED 2026-07-25 (v0.1.1): re-fetched the primary AD 2-BGTL PDF directly and confirmed both fields are genuinely blank/"–" in the published AIP itself (not a K Global transcription gap). Still recommend confirming against the current AIRAC cycle, since this reachable copy carries mixed 2017–2021 sub-section amendment dates.
- ATIS and Delivery frequencies (not found in the reachable AIP page).
- Transition level, speed restrictions, take-off minima, SID/STAR names, LVP triggers, noise-abatement provisions beyond "NIL," hot spots, stand/push-back procedure — none published in the reachable AIP page.
- ILS CAT/minima for RWY 08; TACAN/VOR approach minima for both ends.
- Civil Jet A-1 availability/compatibility vs the published JP-8 (F-34) military fuel grade, for K Global's fleet.
- Distance and jet-suitability of BGQQ Qaanaaq and BGSF Kangerlussuaq as regional alternates (BGQQ likely short/gravel — verify unsuitability; BGSF distance not computed).
- Confirm current PPR contact/lead-time details (HAF/A30 process may have changed since the AIP text was last amended).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) may inform content but is not listed here.*

- **AIP Greenland — Naviair, AD 2-BGTL (Thule)** — mixed AIRAC amendments across sub-sections (AMDT 04/17 eff. 30 MAR 17; AMDT 07/18 eff. 19 JUL 18; AMDT 05/19 eff. 15 AUG 19; AMDT 04/21 eff. 20 MAY 21) — ARP, elevation, mag var, hours, PPR remarks, RFF, fuel, runway physical data, declared distances, navaids, comms, local traffic rules, additional-information hazards — https://aim.naviair.dk/media/files/iq42bqhukcw/BG_AD_2_BGTL_en.pdf (retrieved 2026-07-25; independently re-fetched and re-verified 2026-07-25 in the v0.1.1 §7 declared-distances recheck — §12/§13 runway physical data and declared distances confirmed verbatim match, no corrections required).
- OurAirports — https://ourairports.com/airports/BGTL/ — coordinates/elevation cross-check, facility tags, pilot-info link (retrieved 2026-07-25).
- SkyVector — https://skyvector.com/airport/BGTL — coordinates/runway cross-check, nearby navaids (THT, Qaanaaq QN/QQ) (retrieved 2026-07-25).
- Wikipedia — Pituffik Space Base — https://en.wikipedia.org/wiki/Pituffik_Space_Base — USSF transfer (2020) / rename (2023) history, historic wind-speed record, general site context (retrieved 2026-07-25). *Tier-4 corroboration only.*
- Wikipedia — Time in the Danish Realm — https://en.wikipedia.org/wiki/Time_in_the_Danish_Realm — confirms Pituffik's distinct UTC−04:00/−03:00 zone (US transition rules) vs the rest of west Greenland (retrieved 2026-07-25). *Tier-4 corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build. Naviair AIP AD 2-BGTL (primary) + OurAirports/SkyVector/Wikipedia (corroboration). Headline finding: AIP §3.12 states the field **cannot be used for planned emergency divert or weather alternate** — flagged 🟥 against its reference EDDF–KSFO OFP parenthetical ETOPS/EDTO-alternate listing; treated as emergency-only. TRUE-north/no-mag-variation operation, PPR/military-access gate, polar-night/downdraft/runway-contamination seasonal hazards captured. Several fields (PCN, TORA/TODA, ATIS/Delivery freq, SIDs/STARs, minima) not published in the reachable AIP page — flagged in §18. Cross-linked to `Airspace/General/Arctic.md`. |
| v0.1.1 | 2026-07-25 | Declared distances checked vs Naviair AIP + public mirrors; §7 reconciled (items still gated flagged in §18). Direct re-fetch of the primary AD 2-BGTL PDF confirmed §12/§13 runway physical data and declared distances verbatim match the existing table (both ends 3,047 x 42 m; ASDA 3,355 m / LDA 3,047 m both ends; TORA/TODA genuinely blank in the AIP itself, not a K Global gap) — no corrections required. |
| v0.1.2 | 2026-07-25 | Governance scrub: removed callsign and build-process references per OM content rules. |
| v0.1.3 | 2026-07-26 | Moved into per-airport folder as the Briefing page (`BGTL — Pituffik Space Base/BGTL — Briefing.md`); content unchanged. Dispatch, Departure and Arrival pages added alongside as the other three pages of the BGTL airport folder. |
