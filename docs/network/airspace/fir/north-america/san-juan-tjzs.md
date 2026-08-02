# San Juan (TJZS) — FIR Briefing

**Scope:** single FIR — San Juan CERAP (Combined En Route/Approach Control), FAA-operated, covering Puerto Rico and the U.S. Virgin Islands · **Parent area brief:** <../../General/North America.md> · **Adjacent FIRs:** New York Oceanic (KZWY, FAA) N · Miami Oceanic (KZMO, FAA) NW · Santo Domingo (MDCS, Dominican Republic) W · Curaçao (TNCF, DC-ANSP) SW · Maiquetía (SVZM, Venezuela) S · Piarco (TTZP) SE 🟧
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. San Juan CERAP is a **combined FAA facility** — it works approach control AND enroute (radar + non-radar) services for Puerto Rico and the U.S. Virgin Islands out of a single unit, unlike the separate-ARTCC/TRACON model on the US mainland. It also has an operational **interface with DC-ANSP** over the Windward-island (Sint Maarten/Juliana) TMA, which sits laterally inside this FIR — see <Curaçao (TNCF).md> §3. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for TIST/TISX live in the airport briefings (§9). Live restrictions (incl. any regional security NOTAMs — this FIR has a documented history of them, §10–11) are pulled at planning. Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / control ident | **TJZS** — San Juan FIR; worked by **San Juan CERAP** (Combined En Route/Approach Control) — a single FAA facility providing both approach and enroute ATC, unlike the mainland's separate ARTCC/TRACON structure |
| Controlling ATSU / ANSP | **FAA Air Traffic Organization** — San Juan CERAP, Carolina, Puerto Rico |
| Airspace class & vertical limits | En-route/non-radar coverage historically described as **~216,000–658,000 sq mi** depending on source/era 🟧 (figures vary — verify current FAA facility description); vertical limits **surface to unlimited** within the CERAP's area of responsibility |
| RVSM | 🟥 Applicable **FL290–FL410** — RVSM in the San Juan FIR is governed by the same US domestic policy as the mainland (14 CFR / FAA AIM Ch.4 §6) — see <../../../../OM E Operations/RVSM Operations.md> |
| PBN environment | RNAV enroute/terminal per FAA US National Airspace System structure; RNP APCH at TIST/TISX — see <../../../../OM E Operations/PBN and RNP Operations.md> |
| Surveillance & datalink | 🟩 Radar/ADS-B within CERAP coverage; oceanic FANS-1/A CPDLC/ADS-C is a **New York Oceanic (KZWY)** function, not San Juan's — see <../../../../OM E Operations/Datalink and Oceanic Procedures.md> |
| Primary language & comms | 🟩 VHF; English |
| Key hazard(s) | 🟥 **Atlantic hurricane season (Jun–Nov)** — Puerto Rico/USVI sit in the active corridor; 🟧 **periodic FAA security NOTAMs** tied to regional (Venezuela-adjacent) military/state-aircraft activity have affected this FIR in the recent past — confirm current status at planning, do not assume benign. |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | San Juan CERAP is radar-served across its area of responsibility; the adjoining oceanic segment north/east is worked separately by New York Oceanic (KZWY), which is procedural — see <New York Oceanic (KZWY).md>. |
| Communication coverage & language | 🟩 | VHF; English. |
| Datalink / surveillance requirement | 🟩 | Domestic-style radar/ADS-B within the CERAP; oceanic CPDLC/ADS-C is a KZWY matter beyond the FIR boundary. |
| Terrain / MORA / driftdown | 🟩 | Puerto Rico has interior high ground (Cerro de Punta ~4,390 ft) but is not a binding cruise/driftdown constraint for a hub-airport transit; largely maritime otherwise. |
| Diversion-aerodrome coverage | 🟧 | TIST and TISX briefed in OM C (§9); San Juan's own Luis Muñoz Marín (TJSJ) is the FIR's principal hub but not currently briefed here. |
| Special-use airspace (military / danger) | 🟥 | This FIR has a documented recent history of **FAA international security NOTAMs** (state-aircraft activity, regional tension near Venezuela) — treat as a live-check item every time, not a durable "benign" assumption. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–FL410 · US domestic RNAV/RNP · ADS-B Out (1090ES ≥ FL180) per 14 CFR 91.225**, applied identically to the mainland — see OM E. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** the San Juan FIR covers **Puerto Rico and the U.S. Virgin Islands**, with published area figures ranging **~216,000 sq mi** (older CERAP facility descriptions) to **~658,583 km²** (broader FIR-area figures cited in current public references) 🟧 — the discrepancy likely reflects different eras/definitions (approach-radius vs full FIR); verify against the current FAA facility description before quoting a number operationally.
- **Vertical split:** unlike a European FIR/UIR split, San Juan CERAP is **one FAA facility working the full column**, surface to unlimited, combining approach control and enroute ATC in a single unit.
- **Adjacent FIRs (by boundary):** **New York Oceanic (KZWY)** to the north — the CPDLC/procedural-oceanic handoff (see <New York Oceanic (KZWY).md>); **Miami Oceanic (KZMO)** to the northwest; **Santo Domingo (MDCS, Dominican Republic)** to the west; **Curaçao (TNCF, DC-ANSP)** to the southwest — including the **Juliana (Sint Maarten) TMA interface**, which sits laterally inside San Juan's boundary but is worked under a DC-ANSP arrangement, see <Curaçao (TNCF).md> §3; **Maiquetía (SVZM, Venezuela)** to the south; **Piarco (TTZP)** to the southeast. 🟧 boundary list corroborated by public/network-sim sources — re-verify decimals against the FAA AIP/ENR chart.
- **Sectorisation:** internal CERAP sector names/frequencies are AIRAC-dependent; the Juliana (TNCM) sub-area is worked by DC-ANSP under the interface noted above, with San Juan able to provide fallback service if Juliana ATC is offline (network-sim corroboration; see <Curaçao (TNCF).md> §3–4). 🟧

---

## 4. Control & ATSU

- **Enroute + terminal ATSU:** 🟩 **San Juan CERAP (FAA)** — a combined facility; no separate ARTCC/TRACON split as on the mainland.
- **Terminal facilities inside the FIR:** San Juan CERAP itself sequences the Puerto Rico/USVI terminal traffic, including **St Thomas (TIST)** and **St Croix (TISX)** — see the airport briefings (§9).
- **FIS / FSS:** US **Flight Service** (Leidos) for flight-information/advisory service; not a factor for an IFR hub transit remaining in controlled airspace.
- **Surveillance basis:** 🟩 radar/ADS-B throughout the CERAP's area; the oceanic procedural/CPDLC regime begins outside the FIR under **New York Oceanic (KZWY)**.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the San Juan FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410**, governed by the same US domestic RVSM policy applied to the San Juan FIR (FAA AIM Ch.4 §6 explicitly extends domestic RVSM procedures to San Juan) — see <../../../../OM E Operations/RVSM Operations.md>.
- **PBN / RNP:** 🟩 US NAS-standard RNAV enroute/terminal structure; **RNP APCH** arrivals at TIST/TISX. Standard RNAV-1/RNAV-2 airframe capability suffices — see <../../../../OM E Operations/PBN and RNP Operations.md>.
- **Datalink (CPDLC):** 🟩 **not required** within the San Juan FIR — VHF voice continuous. Oceanic CPDLC/ADS-C (FANS 1/A) applies only once traffic passes into **New York Oceanic (KZWY)** — see <../../../../OM E Operations/Datalink and Oceanic Procedures.md> and <New York Oceanic (KZWY).md>.
- **Transponder / ADS-B:** 🟥 **Mode S with ADS-B Out** — **14 CFR 91.225**; **1090ES required at and above FL180**, effective 01 JAN 2020 — applied identically to the mainland.

---

## 6. Communications & frequencies

- **CERAP sectors / frequencies:** a Puerto Rico/USVI transit is worked by San Juan CERAP sectors sequenced enroute-to-terminal; exact sector split/frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies.
- **FIS / advisory:** US Flight Service (Leidos).
- **Language:** 🟩 English.
- **Emergency / guard:** **121.5 MHz** guard; **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 US-standard jet-route/RNAV structure feeding TIST/TISX and the wider Puerto Rico/USVI terminal area; the FIR also carries significant **transit traffic** between the US mainland, the Eastern Caribbean and points south.
- **Major fixes / entry-exit points:** the **KZWY oceanic boundary** north/east (CPDLC log-on transition, see <New York Oceanic (KZWY).md>); the **Juliana TMA interface** southeast (see <Curaçao (TNCF).md>); boundaries with Santo Domingo/Curaçao/Maiquetía/Piarco to the west/south. 🟧 exact current STAR/route by AIRAC — pull on the day.
- **Hubs & aerodromes inside the FIR:** **Luis Muñoz Marín Intl, San Juan (TJSJ)** — the FIR's principal hub (not currently briefed in OM C); **Cyril E. King Airport, St Thomas (TIST)** and **Henry E. Rohlsen Airport, St Croix (TISX)** — see §9.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 Puerto Rico's interior rises to **Cerro de Punta ~4,390 ft**; the U.S. Virgin Islands are lower, hilly terrain. Not generally a binding cruise-level factor for an RVSM transit, but relevant to terminal-area MEA/MDA — verify per airport briefing.
- **Boundary terrain:** none of particular note beyond Puerto Rico's own interior relief.
- **Driftdown / depressurisation escape:** low risk given dense island/terminal coverage within the FIR; the binding constraint on any onward oceanic leg is handled in <New York Oceanic (KZWY).md> §8.
- **Cold-temperature altitude corrections:** not applicable — tropical/maritime climate throughout.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Cyril E. King, St Thomas | **TIST** | Served destination / USVI alternate | <../../../Airports/North America/U.S. Virgin Islands/TIST — Cyril E King/TIST — Briefing.md> |
| Henry E. Rohlsen, St Croix | **TISX** | Served destination / USVI alternate | <../../../Airports/North America/U.S. Virgin Islands/TISX — Henry E Rohlsen/TISX — Briefing.md> |
| Luis Muñoz Marín Intl, San Juan | **TJSJ** | FIR host / principal hub | Brief to build 🟧 |

- **Coverage note:** 🟧 TIST/TISX give in-FIR USVI redundancy; TJSJ (San Juan itself) is the region's main full-service field but has no OM C brief yet. Reasonable island-hopping diversion density for the USVI pair; wider Caribbean spacing otherwise.

---

## 10. Special-use airspace

- **Military MOA / restricted:** 🟧 not individually sourced for this brief — verify AIP/NOTAM at planning.
- **Danger / prohibited areas:** 🟥 the San Juan FIR has a **documented recent history of FAA international security NOTAMs** tied to elevated "state aircraft" (military) activity in the wider region around Venezuela, including a period of advisory status (Nov 2025 into early 2026) that has since been lifted. **Do not treat this FIR as durably benign** — re-check the current NOTAM/security posture at planning every time, given the pattern of recurrence.
- **Overflight-permit / diplomatic considerations:** 🟩 none for the FIR itself (US territory); confirm no active security restriction per the note above.

> **SUA currency:** re-check active security NOTAMs, MOA/restricted-area status, and any regional-tension advisories at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply the standard **US domestic IFR lost-comms** procedure (14 CFR 91.185; squawk **7600**) — the same rule applied on the mainland, extended to the San Juan FIR.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC and comply with the vector/level issued.
- **Seasonal hazards (durable):** 🟥 **Atlantic hurricane season, June–November**, peak mid-August–mid-October — Puerto Rico and the USVI sit in the **active hurricane corridor** and have suffered severe direct hits historically; expect reroutes, holding, ground stops and possible airport closure by NOTAM during storm passage. 🟧 periodic security-related airspace restrictions (§10) are a secondary, non-seasonal hazard to re-check independently.

> **Pull at planning (T-2h):** enroute NOTAMs, current FAA security NOTAMs for the San Juan FIR, SIGMET/AIRMET, tropical-cyclone advisories (NHC) in season, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact current FAA facility-description figures for the San Juan FIR area (sources vary ~216,000 sq mi to ~658,583 km²) — verify current FAA documentation.
- Adjacent-FIR boundary decimals (KZWY/KZMO/MDCS/TNCF/SVZM/TTZP) — verify FAA AIP/ENR chart.
- The Juliana (TNCM) TMA / DC-ANSP interface — sourced here only from public network-simulation documentation; verify the real AIP/agreement text (see also <Curaçao (TNCF).md> §12).
- Current status of any FAA international security NOTAM for the San Juan FIR — this has recurred; re-check live at every planning cycle, not just once.
- No OM C airport brief yet for **TJSJ** (San Juan itself, the FIR's principal hub) — build if it becomes a planned alternate.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **FAA — Air Traffic Organization, San Juan CERAP** — combined approach/enroute facility description, Carolina, Puerto Rico — https://www.faa.gov/air_traffic/community_engagement/sju (retrieved 2026-07-26).
- **FAA — Aeronautical Information Manual (AIM), Ch.4 §6** — RVSM operational policy explicitly extended to the domestic US, Alaska, offshore airspace **and the San Juan FIR** — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_6.html (retrieved 2026-07-26).
- **FAA — 14 CFR 91.225 (ADS-B Out) & 91.185 (comms-failure)** — applied identically to San Juan as the mainland — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91 (retrieved 2026-07-26).
- **FAA — ENR 7.4 (50 NM lateral separation / WATRS Plus)** — describes San Juan CTA/FIR as part of the WATRS Plus / RNP-10/RNP-4 reduced-separation regime alongside New York Oceanic and the Atlantic portion of Miami Oceanic — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part2_enr_section_7.4.html (retrieved 2026-07-26).
- **Public reporting — FAA international security NOTAM, San Juan FIR (TJZS)** — advisory tied to elevated state-aircraft activity, effective ~Nov 2025, referenced as lifted by early 2026 — https://www.sanjuandailystar.com/post/faa-issues-warning-on-hazardous-situation-in-puerto-rico-s-airspace and https://ops.group/blog/new-faa-warnings-for-venezuela-and-puerto-rico-airspace/ (retrieved 2026-07-26). *Historical/pattern note only — re-check live status at planning.*
- **Public network-simulation documentation (VATCAR San Juan CERAP / Juliana TMA SOP)** — adjacent-FIR list and Juliana-TMA interface description — https://sanjuan.vatcar.net/ (retrieved 2026-07-26). *Tier-4 network-sim corroboration only — verify against the real AIP.*
- **National Hurricane Center (NHC) / NOAA** — Atlantic hurricane season climatology; Puerto Rico/USVI active-corridor exposure — https://www.nhc.noaa.gov/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
