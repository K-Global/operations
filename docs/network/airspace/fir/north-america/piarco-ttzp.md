# Piarco (TTZP) — FIR Briefing

**Scope:** single FIR/UIR — the Eastern Caribbean island chain from the Trinidad/Venezuela shelf north to roughly the Leeward Islands, plus a large mid-Atlantic oceanic sector · **Parent area brief:** <../../General/North America.md> · **Adjacent FIRs:** San Juan (TJZS, FAA) N · Curaçao (TNCF, DC-ANSP) W · Maiquetía (SVZM, Venezuela) SW · Georgetown (Guyana) & Paramaribo (Suriname) S/SE 🟧
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Piarco is a **mixed radar/procedural oceanic FIR** — the Trinidad TMA and near-island TMAs are radar-served, but the bulk of the FIR is procedural oceanic airspace with FANS-1/A datalink where equipped. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC/oceanic clearances. Terminal procedures for aerodromes inside the FIR (TAPA) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **TTZP** — Piarco FIR; also functions as the upper-airspace (UIR-equivalent) authority above the island TMAs 🟧 exact FIR/UIR split terminology — verify Trinidad AIP ENR 2.1 |
| Controlling ATSU / ANSP | **Piarco ACC**, Trinidad and Tobago Civil Aviation Authority (TTCAA) — sole provider of ATC, aeronautical MET, comms, nav, surveillance, AIM and SAR within the FIR |
| Airspace class & vertical limits | Oceanic sector: **sea level–FL550**. Over the island TMAs, Piarco's own control begins at **FL245**, up to FL550 — the individual TMAs (incl. Antigua) own the airspace below FL245 🟧 class letters not independently verified |
| RVSM | 🟥 Applicable **FL290–FL410** — CAR/SAM RVSM, effective **20 JAN 2005**, monitored by **CARSAMMA** — see <../../../../OM E Operations/RVSM Operations.md> |
| PBN environment | RNAV 5 (GNSS) required on designated oceanic/TMA routes 🟧 exact route-by-route PBN spec — see <../../../../OM E Operations/PBN and RNP Operations.md> |
| Surveillance & datalink | 🟧 Mixed: radar/surveillance near Trinidad and island TMAs; procedural (non-radar) over most of the oceanic sector. **FANS-1/A (CPDLC + ADS-C)** available **east of 057°W, FL060 and above**; **west of 057°W** (where TAPA/Antigua sits) expect **CPDLC only** — see <../../../../OM E Operations/Datalink and Oceanic Procedures.md> |
| Primary language & comms | 🟩 English; VHF near landmass/TMAs, HF in the oceanic sector |
| Key hazard(s) | 🟥 **Hurricane season (Jun–Nov)** — the FIR's own southern anchor (Trinidad, ~10.6°N) sits **outside** the main hurricane belt and is rarely hit directly, but the FIR's **northern reach up through the Leeward Islands (incl. Antigua/TAPA, ~17°N)** sits squarely in the **active Atlantic hurricane corridor** — see §11. Procedural/non-radar oceanic segment; long CPDLC-only sector west of 057°W. |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟧 | Radar/surveillance near Trinidad and island TMAs; procedural oceanic elsewhere. Exact radar-coverage footprint not independently verified. |
| Communication coverage & language | 🟧 | English; VHF near landmass, HF oceanic. Exact HF family/frequency allocation not sourced here — pull from AIP/flight docs. |
| Datalink / surveillance requirement | 🟧 | FANS-1/A (CPDLC+ADS-C) confirmed east of 057°W FL060+; CPDLC-only west of 057°W (covers the TAPA approach). Log-on address **TTZP**. |
| Terrain / MORA / driftdown | 🟩 | Predominantly open ocean and low-lying islands; no significant enroute terrain factor. |
| Diversion-aerodrome coverage | 🟧 | Sparse in the OM C airport-brief set — only TAPA currently briefed (§9). Regional fields (Trinidad-Piarco TTPP, Barbados TBPB, Grenada TGPY, etc.) not yet built. |
| Special-use airspace (military / danger) | 🟧 | No specific danger/restricted areas sourced for this brief — verify AIP/NOTAM at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–FL410 (CAR/SAM, 20 JAN 2005) · RNAV 5 GNSS · FANS-1/A east of 057°W / CPDLC-only west.** Defined in OM E; confirm current-AIRAC route. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Piarco FIR spans roughly **18°N to 6°N and 57°W to 40°W** 🟧 (approximate chart figure — verify Trinidad AIP ENR 2.1), covering the airspace above several independent Eastern Caribbean states from around the **Leeward Islands (Antigua) in the north to Trinidad in the south**, and extending **east across a large mid-Atlantic oceanic sector** roughly halfway toward West Africa.
- **Vertical split:** the FIR is **sea level–FL550 over open ocean**; over the individual island TMAs (including the Antigua TMA around TAPA), Piarco's own jurisdiction begins at **FL245** up to FL550 — the states themselves control the TMA below FL245. 🟧 exact per-TMA base levels not individually verified.
- **Adjacent FIRs (by boundary):** **San Juan (TJZS, FAA)** to the north — the handoff around the northern Leeward Islands, near the TAPA/Antigua area; **Curaçao (TNCF, DC-ANSP)** to the west; **Maiquetía (SVZM, Venezuela)** to the southwest; **Georgetown (Guyana)** and **Paramaribo (Suriname)** to the south/southeast. 🟧 (boundary list corroborated by ICAO CAR/SAM regional groupings and network-sim charts — re-verify against the Trinidad AIP before relying on exact boundary decimals.)
- **Sectorisation:** transit-relevant fact is the split between the **radar-served Trinidad/island TMA layer** and the **procedural oceanic upper sector** that Piarco ACC works above FL245; exact internal ACC sector names not sourced.

---

## 4. Control & ATSU

- **ACC:** 🟩 **Piarco ACC**, operated by the **Trinidad and Tobago Civil Aviation Authority (TTCAA)** — the sole ANSP for the FIR, providing ATC, MET, comms, navigation, surveillance, AIM and SAR.
- **Terminal facilities:** island TMAs (incl. Antigua/TAPA) are worked by their own approach/tower units below FL245; Piarco ACC owns FL245 and above throughout the FIR.
- **FIS / FSS:** not separately sourced for this brief — assume Piarco ACC/Radio provides the FIS function oceanic; verify at planning.
- **Surveillance basis:** 🟧 radar/surveillance near Trinidad and the island TMAs; procedural (voice position report) over the bulk of the oceanic sector, with FANS-1/A datalink surveillance (ADS-C) available east of 057°W.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in this FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410**, CAR/SAM RVSM effective **20 JAN 2005**, monitored by **CARSAMMA** — see <../../../../OM E Operations/RVSM Operations.md>.
- **PBN / RNP:** 🟧 **RNAV 5 (GNSS sensor)** required on designated routes in the Piarco area; exact enroute/terminal RNP spec not individually sourced — see <../../../../OM E Operations/PBN and RNP Operations.md>.
- **8.33 kHz channel spacing:** not sourced for this FIR — verify at planning.
- **Datalink (CPDLC):** 🟥 **FANS-1/A (CPDLC + ADS-C) available east of 057°W, FL060 and above**; **west of 057°W, expect CPDLC only** (no ADS-C) — this covers the TAPA/Antigua area. FANS log-on address **TTZP**. See <../../../../OM E Operations/Datalink and Oceanic Procedures.md>.
- **Transponder / ADS-B:** 🟧 Mode S transponder standard assumed; ADS-B mandate/coverage specifics for the Piarco FIR not sourced — verify at planning.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a transit through Piarco is worked by Piarco ACC/Radio sectors sequenced oceanic-to-terminal; do NOT paste a live frequency table — fly the current-AIRAC/chart frequencies.
- **FIS / lower airspace:** island-TMA approach/tower frequencies for TAPA are in the airport briefing (§9).
- **Language:** 🟩 English.
- **8.33 kHz:** not verified for this FIR — confirm at planning.
- **Emergency / guard:** **121.5 MHz** guard; **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** not applicable — Piarco is a fixed airway + oceanic-track/random-routing environment, not a European-style FRA. 🟧
- **Airway spine:** designated oceanic ATS routes/tracks link the island TMAs and the mid-Atlantic sector; exact route idents (e.g. UA/UM designators) not individually sourced — pull from the current-AIRAC chart.
- **Major fixes / entry-exit points:** the **057°W** longitude is the operationally significant line for the FANS-1/A vs CPDLC-only split (§5); the **northern boundary near Antigua/Leeward Islands** is the handoff to San Juan (TJZS).
- **Hubs & aerodromes inside the FIR:** **V.C. Bird International, Antigua (TAPA)** — see the airport briefing (§9). Other regional fields (Trinidad-Piarco TTPP, Barbados TBPB, Grenada TGPY, etc.) sit within the FIR but are not currently briefed in OM C.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 predominantly open ocean and low-lying Eastern Caribbean islands — not a cruise or driftdown factor for a high-level oceanic transit.
- **Boundary terrain:** none of operational significance sourced; the FIR is maritime/low-island throughout.
- **Driftdown / depressurisation escape:** the binding constraint on a Piarco transit is the **oceanic no-divert distance to a suitable island field**, not terrain — plan ETP/driftdown against the nearest capable aerodrome, not a terrain floor.
- **Cold-temperature altitude corrections:** not applicable — tropical/maritime climate throughout.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| V.C. Bird International, Antigua | **TAPA** | Served destination / primary in-FIR alternate | <../../../Airports/North America/Antigua and Barbuda/TAPA — V C Bird Intl/TAPA — Briefing.md> |
| Trinidad — Piarco Intl | **TTPP** | FIR host/hub field | Brief to build 🟧 |
| Barbados — Grantley Adams Intl | **TBPB** | Regional alternate | Brief to build 🟧 |

- **Coverage note:** 🟧 sparse in the current OM C airport-brief set — only TAPA is briefed. The oceanic sector between islands drives ETP/critical-point planning; compute on the SimBrief OFP.

---

## 10. Special-use airspace

- **Military TRA / TSA:** none specifically sourced for this brief — verify AIP/NOTAM at planning. 🟧
- **Danger / restricted / prohibited areas:** not sourced — verify at planning. 🟧
- **Overflight-permit / diplomatic considerations:** 🟩 generally none for a routine transit of independent Eastern Caribbean states; confirm current overflight-permit requirements per state at planning.

> **SUA currency:** re-check active restricted/danger-area status and any state-specific overflight requirements at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** oceanic sector — apply the standard oceanic contingency method (turn to offset, squawk 7700, broadcast blind on 121.5/123.45) consistent with <../../General/North Atlantic.md> §10 principles; TMA segments follow the domestic lost-comms procedure of the controlling state. 🟧 exact Piarco-specific wording not sourced.
- **Weather-deviation / in-flight contingency:** procedural offset/weather-deviation method in the oceanic sector; radar-tactical in the TMAs. 🟧
- **Seasonal hazards (durable):** 🟥 **Atlantic hurricane season, June–November**, peak mid-August–mid-October. Trinidad itself (~10.6°N) is generally **outside the primary hurricane belt** and rarely takes a direct hit, but the **FIR's northern reach through the Leeward Islands (Antigua/TAPA)** sits in the **most active corridor** — expect TAPA-area reroutes, holding, oceanic-track adjustment and possible airport closure by NOTAM during storm passage. Convective activity (ITCZ) is a year-round factor across the oceanic sector.

> **Pull at planning (T-2h):** enroute NOTAMs, current oceanic-track/random-routing guidance, SIGMET/AIRMET, tropical-cyclone advisories (NHC) in season, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact Piarco FIR/UIR lateral boundary decimals and adjacent-FIR list (San Juan/Curaçao/Maiquetía/Georgetown/Paramaribo) — verify Trinidad AIP ENR 2.1.
- Per-TMA vertical split below FL245 (island-by-island) — verify AIP.
- Exact HF family/frequency allocation and 8.33 kHz applicability — pull current AIP/flight docs.
- ADS-B mandate/coverage detail for the Piarco FIR — not sourced.
- Named danger/restricted/military areas — not sourced.
- Regional diversion fields (TTPP, TBPB, TGPY, etc.) have no OM C airport brief yet — build if they become planned alternates.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Trinidad and Tobago Civil Aviation Authority (TTCAA)** — Piarco FIR vertical limits (sea level–FL550 oceanic; FL245–FL550 over TMAs), sole ANSP for ATC/MET/comms/nav/surveillance/AIM/SAR — https://caa.gov.tt/ (retrieved 2026-07-26).
- **FANS-1/A / CPDLC-ADS-C service boundary at 057°W** and **Piarco FANS log-on address (TTZP)** — Trinidad AIP-derived operational notice, corroborated via public aviation-ops summaries (retrieved 2026-07-26). 🟧 re-verify against current AIRAC AIP.
- **CARSAMMA — Caribbean and South American RVSM Monitoring Agency** — CAR/SAM RVSM FL290–FL410 effective 20 JAN 2005 (GREPECAS 11/12) — http://www.carsamma.decea.mil.br/ (retrieved 2026-07-26).
- **ICAO SAM/CAR regional planning documents** — East CAR PA grouping (Georgetown, Paramaribo, Piarco, Rochambeau) used to corroborate adjacent-FIR list — https://www.icao.int/ (retrieved 2026-07-26). *Corroboration only; exact boundary decimals not verified here.*
- **National Hurricane Center (NHC) / NOAA** — Atlantic hurricane season climatology (Jun–Nov, peak mid-Aug–mid-Oct) — https://www.nhc.noaa.gov/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
