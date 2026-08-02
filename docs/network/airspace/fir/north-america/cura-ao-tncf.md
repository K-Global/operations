# Curaçao (TNCF) — FIR Briefing

**Scope:** single FIR — the Dutch Caribbean, in two geographically separated parts: the **ABC islands** (Aruba/Bonaire/Curaçao, ~12°N off the Venezuelan coast) and the **Windward "SSS" islands** (Sint Maarten/Saba/Sint Eustatius, ~18°N in the Leeward chain) · **Parent area brief:** <../../General/North America.md> · **Adjacent FIRs:** San Juan (TJZS, FAA) NE · Piarco (TTZP) SE · Maiquetía (SVZM, Venezuela) S · Barranquilla (SKEC, Colombia) SW · Kingston (MKJK, Jamaica) NW · Port-au-Prince (MTPP, Haiti) N · Santo Domingo (MDCS, Dominican Republic) N 🟧
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Curaçao FIR is a **mixed radar + procedural FIR** operated by **DC-ANSP** with its ACC and primary TMA at Curaçao — but DC-ANSP's operational responsibility also extends, under a separate arrangement, to the **Windward-island (Sint Maarten/Juliana) TMA**, which sits laterally **inside the San Juan (TJZS) FIR boundary** — see the **San Juan CERAP interface** note below (§3–4). Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for TNCM live in the airport briefing (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **TNCF** — Curaçao FIR (ABC-islands ACC/TMA). **Note:** the Windward-island Juliana TMA around Sint Maarten (TNCM) sits laterally **inside the San Juan FIR (TJZS)**, not TNCF — DC-ANSP nonetheless provides ATC there; see §3–4 🟧 |
| Controlling ATSU / ANSP | **DC-ANSP** (Dutch Caribbean Air Navigation Service Provider) — Curaçao ACC + Hato (Curaçao) and Flamingo (Bonaire) towers in the south; Juliana Approach/Tower in the north |
| Airspace class & vertical limits | Curaçao FIR ≈ **300,000 km²**, predominantly oceanic; one TMA of **100 NM radius from the Curaçao VOR**, radar-served; area control uses **radar + procedural separation** where radar coverage ends 🟧 exact class letters/vertical bands not independently verified |
| RVSM | 🟥 Applicable **FL290–FL410** — CAR/SAM RVSM, effective **20 JAN 2005**, monitored by **CARSAMMA** — see <../../../../OM E Operations/RVSM Operations.md> |
| PBN environment | 🟧 Not independently sourced for this FIR — DC-ANSP has run an airspace/route-structure redesign programme; treat as RNAV-capable, confirm exact spec at planning — see <../../../../OM E Operations/PBN and RNP Operations.md> |
| Surveillance & datalink | 🟧 Radar within the 100 NM Curaçao TMA and reported **space-based ADS-B deployment** by DC-ANSP; procedural beyond. CPDLC/FANS status not independently sourced for TNCF — see <../../../../OM E Operations/Datalink and Oceanic Procedures.md> |
| Primary language & comms | 🟩 English (+ Dutch/Papiamento locally); VHF within TMAs |
| Key hazard(s) | 🟩 The ABC islands (~12°N) sit **outside** the main Atlantic hurricane belt and are rarely hit directly; 🟥 **Sint Maarten (TNCM), ~18°N, sits in the active hurricane corridor** — see §11. 🟧 Overflight-restriction volatility near the Venezuelan boundary has occurred historically — confirm current NOTAM/security posture at planning. |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟧 | Radar inside the 100 NM Curaçao TMA; procedural beyond. Juliana (TNCM) TMA served separately under the San Juan CERAP interface (§3–4). |
| Communication coverage & language | 🟩 | English; VHF within TMAs. HF/oceanic voice detail not sourced. |
| Datalink / surveillance requirement | 🟧 | DC-ANSP reported deploying space-based ADS-B; exact CPDLC/FANS mandate for TNCF not sourced — confirm at planning. |
| Terrain / MORA / driftdown | 🟩 | Low islands and open water — not a cruise/driftdown factor. |
| Diversion-aerodrome coverage | 🟧 | Only TNCM briefed in OM C (§9); Curaçao (TNCA/Hato) and Bonaire (TNCB) fields exist but are not yet briefed. |
| Special-use airspace (military / danger) | 🟧 | Boundary proximity to Venezuelan (Maiquetía, SVZM) airspace has seen periodic security/overflight advisories — verify current NOTAM at planning; nothing else specifically sourced. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–FL410 (CAR/SAM, 20 JAN 2005).** PBN/datalink/8.33 specifics not independently confirmed — verify at planning. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent — two-part FIR:** the Curaçao FIR (TNCF) proper covers the **ABC islands** (Aruba, Bonaire, Curaçao) and surrounding Caribbean Sea off the Venezuelan coast — roughly **300,000 km² / 95,000 sq mi**, the majority oceanic. Separately, **DC-ANSP also provides ATC for the Windward "SSS" islands** (Sint Maarten, Saba, Sint Eustatius) far to the northeast, centred on the **Juliana TMA** around TNCM — but this TMA sits **laterally inside the San Juan (TJZS) FIR**, not inside TNCF, per publicly available sim-network chart data 🟧 (network-sim corroboration only — verify the real-world delegation instrument/AIP text before relying on this split).
- **Vertical split:** the Curaçao (south) TMA is **100 NM radius from the Curaçao VOR**, radar-served; area control beyond uses **radar where available, procedural separation elsewhere**. 🟧 exact vertical band figures (TMA ceiling/floor) not sourced.
- **San Juan CERAP interface (Windward/Juliana side):** the Juliana TMA (Sint Maarten) is described in public network documentation as **"within the San Juan CERAP,"** up to **FL150**, bordering the **Piarco FIR to the southeast**; San Juan Center is shown as able to provide full service to Juliana-TMA traffic if the local Juliana units are offline. This implies a **cross-boundary ATS delegation** between the San Juan (TJZS/FAA) FIR (lateral owner) and DC-ANSP (service provider) for the Windward islands. 🟧 **verify the governing agreement/AIP text** — this brief does not assert the exact legal instrument.
- **Adjacent FIRs (Curaçao/ABC side):** **San Juan (TJZS)** NE, **Piarco (TTZP)** SE, **Maiquetía (SVZM, Venezuela)** S, **Barranquilla (SKEC, Colombia)** SW, **Kingston (MKJK, Jamaica)** NW, **Port-au-Prince (MTPP, Haiti)** and **Santo Domingo (MDCS, Dominican Republic)** N. 🟧 six-to-seven-FIR boundary list corroborated by public ANSP summaries — re-verify exact boundary decimals against the current AIP.
- **Sectorisation:** DC-ANSP operates **one ACC (Curaçao)** plus **two aerodrome towers** (Hato/Curaçao and Flamingo/Bonaire) in the south, and the separate **Juliana Approach/Tower** in the north.

---

## 4. Control & ATSU

- **ACC:** 🟩 **Curaçao ACC**, DC-ANSP — area control (radar + procedural) for the ABC-islands FIR.
- **Terminal facilities:** **Hato (Curaçao) Tower**, **Flamingo (Bonaire) Tower** in the south; **Juliana Approach/Tower** for TNCM in the north — see §9 and the airport briefing.
- **San Juan interface:** 🟧 the Juliana TMA is laterally within San Juan's FIR; San Juan Center is documented (network-sim source) as a fallback provider if Juliana ATC is offline. Treat this as a **live-ATC contingency note**, not a routine operating assumption — confirm current-day status at planning.
- **Surveillance basis:** 🟧 radar within the 100 NM Curaçao TMA; DC-ANSP has publicly reported a **space-based ADS-B deployment** (Aireon-class) improving oceanic surveillance — exact coverage/mandate detail not sourced for this brief.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in this FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410**, CAR/SAM RVSM effective **20 JAN 2005**, monitored by **CARSAMMA** — see <../../../../OM E Operations/RVSM Operations.md>.
- **PBN / RNP:** 🟧 DC-ANSP has run an airspace/route redesign programme (CONOPS published); exact RNAV/RNP spec for enroute/terminal not independently sourced — see <../../../../OM E Operations/PBN and RNP Operations.md> and verify at planning.
- **8.33 kHz channel spacing:** not sourced for this FIR — verify at planning.
- **Datalink (CPDLC):** 🟧 not independently confirmed for TNCF; the FIR sits between the FANS-1/A-equipped Piarco oceanic sector and the US domestic KZWY/San Juan environment — assume datalink may apply on oceanic segments and confirm via current-AIRAC flight docs. See <../../../../OM E Operations/Datalink and Oceanic Procedures.md>.
- **Transponder / ADS-B:** 🟧 space-based ADS-B reported deployed by DC-ANSP; exact mandate/effective date not sourced — verify at planning.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** Curaçao ACC works the ABC-islands TMA/FIR; Juliana Approach/Tower works the Windward TMA around TNCM. Do NOT paste a live frequency table — fly the current-AIRAC/chart frequencies.
- **FIS / lower airspace:** terminal frequencies for TNCM are in the airport briefing (§9).
- **Language:** 🟩 English (Dutch/Papiamento locally).
- **8.33 kHz:** not verified for this FIR — confirm at planning.
- **Emergency / guard:** **121.5 MHz** guard; **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** not applicable — fixed airway/oceanic-track structure. 🟧
- **Airway spine:** DC-ANSP's airspace/route redesign programme has restructured ABC-islands routings; exact current ATS route idents not sourced — pull from the current-AIRAC chart.
- **Major fixes / entry-exit points:** the **Curaçao 100 NM TMA boundary** in the south; the **Juliana TMA / San Juan CERAP boundary** in the north — see §3.
- **Hubs & aerodromes inside the FIR:** **Princess Juliana International, Sint Maarten (TNCM)** — see the airport briefing (§9). Hato (Curaçao, TNCA) and Flamingo (Bonaire, TNCB) sit within the ABC-islands TMA but are not currently briefed in OM C.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low islands and open Caribbean Sea throughout — not a cruise or driftdown factor.
- **Boundary terrain:** none of operational significance sourced.
- **Driftdown / depressurisation escape:** the binding constraint is oceanic no-divert distance to a suitable field, not terrain.
- **Cold-temperature altitude corrections:** not applicable — tropical/maritime climate throughout.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Princess Juliana Intl, Sint Maarten | **TNCM** | Served destination / Windward-island alternate | <../../../Airports/North America/Sint Maarten/TNCM — Princess Juliana Intl/TNCM — Briefing.md> |
| Hato Intl, Curaçao | **TNCA** | ABC-islands hub / DC-ANSP HQ field | Brief to build 🟧 |
| Flamingo Intl, Bonaire | **TNCB** | ABC-islands alternate | Brief to build 🟧 |

- **Coverage note:** 🟧 sparse — only TNCM currently briefed in OM C. The two Dutch Caribbean sub-areas (ABC vs Windward) are geographically far apart; a diversion in one sub-area does not help in the other.

---

## 10. Special-use airspace

- **Military TRA / TSA:** none specifically sourced. 🟧
- **Danger / restricted / prohibited areas:** none specifically sourced. 🟧
- **Overflight-permit / diplomatic considerations:** 🟧 the FIR's southern boundary is close to Venezuelan (Maiquetía, SVZM) airspace, which has periodically been subject to security advisories/airspace-closure notices affecting the southern Caribbean — **confirm current NOTAM and any operator routing-policy restriction at planning; do not assume benign overflight without checking.**

> **SUA currency:** re-check active restricted/danger-area status and any Venezuelan-boundary security NOTAMs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply the standard oceanic/regional contingency method in the FIR's procedural segments; TMA segments follow DC-ANSP's domestic lost-comms procedure. 🟧 exact TNCF-specific wording not sourced.
- **Weather-deviation / in-flight contingency:** radar-tactical within the TMAs; procedural offset method elsewhere. 🟧
- **Seasonal hazards (durable):** 🟥 **Atlantic hurricane season, June–November**, peak mid-August–mid-October. The **ABC islands (~12°N) sit outside the main hurricane belt** and are rarely hit directly — but **Sint Maarten (TNCM, ~18°N) sits in the most active corridor** and has a documented history of severe hurricane impact (e.g. catastrophic damage to TNCM infrastructure in past major storms). Expect TNCM-area reroutes, holding, oceanic-track adjustment and possible airport closure by NOTAM during storm passage; the ABC-islands side is comparatively low-risk for this hazard.

> **Pull at planning (T-2h):** enroute NOTAMs, Venezuelan-boundary security advisories, SIGMET/AIRMET, tropical-cyclone advisories (NHC) in season, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- The exact legal/AIP basis for the **DC-ANSP / San Juan CERAP** delegation over the Juliana (TNCM) TMA — sourced here only from public network-simulation documentation; verify against the real AIP/agreement text.
- Adjacent-FIR boundary list and exact decimals (San Juan/Piarco/Maiquetía/Barranquilla/Kingston/Port-au-Prince/Santo Domingo) — verify current AIP.
- PBN/RNP spec, CPDLC/datalink mandate, ADS-B mandate/effective date, and 8.33 kHz applicability for TNCF — not independently sourced.
- Current Venezuelan-boundary overflight/security posture — pull live NOTAM at planning; this has been volatile historically.
- Regional diversion fields (TNCA, TNCB) have no OM C airport brief yet — build if they become planned alternates.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **DC-ANSP — Dutch Caribbean Air Navigation Service Provider** — FIR/TMA structure (Curaçao ACC, Hato & Flamingo towers, 100 NM Curaçao TMA, radar + procedural separation), ~300,000 km² FIR — https://dc-ansp.org/ (retrieved 2026-07-26).
- **CANSO — DC-ANSP member profile** — role/coverage confirmation for Aruba, Curaçao and Bonaire — https://canso.org/member/dutch-caribbean-air-navigation-service-provider-dc-ansp/ (retrieved 2026-07-26).
- **Aireon / PR Newswire — DC-ANSP space-based ADS-B deployment** — https://aireon.com/dutch-caribbean-ansp-space-based-ads-b-in-curacao/ (retrieved 2026-07-26).
- **DC-ANSP — Concept of Operations, airspace and route redesign** — https://gobiernu.cw/wp-content/uploads/2021/02/CONOPS-Airspace-Redesign-v2-signed-1.pdf (retrieved 2026-07-26).
- **CARSAMMA — Caribbean and South American RVSM Monitoring Agency** — CAR/SAM RVSM FL290–FL410 effective 20 JAN 2005 (GREPECAS 11/12) — http://www.carsamma.decea.mil.br/ (retrieved 2026-07-26).
- **Public network-simulation documentation (VATCAR San Juan CERAP / Juliana TMA SOP)** — Juliana TMA described as within the San Juan CERAP up to FL150, bordering Piarco FIR SE — https://sanjuan.vatcar.net/ and https://curacao.vatcar.net/ (retrieved 2026-07-26). *Tier-4 network-sim corroboration only — the San Juan/DC-ANSP delegation split is not independently confirmed against the real AIP; treat as an open item (§12).*
- **National Hurricane Center (NHC) / NOAA** — Atlantic hurricane season climatology and the ~12°N southern-Caribbean low-risk belt vs the active Leeward-Islands corridor — https://www.nhc.noaa.gov/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
