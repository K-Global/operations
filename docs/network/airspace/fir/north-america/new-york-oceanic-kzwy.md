# New York Oceanic (KZWY) — FIR Briefing

**Scope:** single FIR — the huge West-Atlantic oceanic FIR/CTA worked by New York ARTCC, spanning from the US East Coast out across the open Atlantic, including the **WATRS** area south of 27°N and the **New York Oceanic East** segment (north of 27°N) that forms part of the North Atlantic HLA · **Parent area brief:** <../../General/North America.md> · **North Atlantic cross-link:** <../../General/North Atlantic.md> · **Adjacent FIRs:** New York ARTCC (KZNY, domestic, FAA) W · Gander Oceanic (CZQX, NAV CANADA) N · Shanwick (EGGX) / Santa Maria (LPPO) Oceanic E (via the NAT HLA boundary) · Miami Oceanic (KZMO, FAA) SW · San Juan (TJZS, FAA) S 🟧
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. New York Oceanic is a **procedural, non-radar oceanic FIR** with FANS-1/A **CPDLC + ADS-C** service where equipped — it is the offshore continuation of the domestic <New York (KZNY).md> ARTCC and, north of 27°N, forms part of the **North Atlantic HLA system** described in <../../General/North Atlantic.md> (read that brief for OTS/PBCS/contingency detail — it is not repeated here). South of 27°N this FIR carries the **West Atlantic Route System (WATRS/WATRS Plus)**, a separate reduced-lateral-separation regime from the NAT OTS. **Bermuda (TXKF)** sits within/adjacent to this FIR — its own TMA is locally radar-served, but the enroute cruise segment around it is procedural oceanic. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with the oceanic clearance. Terminal procedures for TXKF live in the airport briefing (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / control ident | **KZWY** — New York Oceanic FIR/CTA, worked by **New York ARTCC (FAA)** as a separate oceanic function from its domestic sectors (<New York (KZNY).md>). FANS log-on address **KZWY**; flight-plan address for the full oceanic CTA/FIR (incl. WATRS) **KZWYZOZX** |
| Controlling ATSU / ANSP | **FAA Air Traffic Organization** — New York ARTCC, Oceanic sectors |
| Airspace class & vertical limits | 🟧 Reported at roughly **3.25 million sq mi** in public references (New York ARTCC facility overview, corroborated by network-sim sources) — more than halfway toward north-west Africa; includes the airspace over **Bermuda (TXKF)**. Two working segments: **New York Oceanic East** (north of 27°N, part of NAT HLA FL285–FL420) and the **WATRS** area (south of 27°N) — exact vertical/lateral chart boundaries not independently verified here |
| RVSM | 🟥 Applicable **FL290–FL410** throughout the oceanic FIR — see <../../../../OM E Operations/RVSM Operations.md> |
| PBN environment | 🟥 **RNAV 10 (RNP 10) or RNP 4** for reduced lateral separation (50 NM / 30 NM); unequipped aircraft use wider (90 NM / 1.5°) spacing — see §5 and <../../../../OM E Operations/PBN and RNP Operations.md> |
| Surveillance & datalink | 🟥 **Procedural / non-radar**; **CPDLC + ADS-C (FANS 1/A)** the primary ATS communication where equipped, over **Inmarsat or Iridium only** — see <../../../../OM E Operations/Datalink and Oceanic Procedures.md> |
| Primary language & comms | 🟥 **HF** (New York Radio + NAT stations) primary beyond VHF range; **SATVOICE**/CPDLC; English |
| Key hazard(s) | 🟥 **Procedural/non-radar environment**; 🟥 **Atlantic hurricane/tropical-cyclone season (Jun–Nov)** directly affects this FIR and its Bermuda/Caribbean-approach traffic — see §11; long oceanic no-divert legs. |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟥 | Procedural/non-radar oceanic FIR; CPDLC/ADS-C surveillance where equipped. Contrast with the fully radar-controlled domestic <New York (KZNY).md> immediately to the west. |
| Communication coverage & language | 🟥 | No VHF over open ocean beyond coastal/Bermuda range; HF (New York Radio + NAT families) and SATVOICE required; English. |
| Datalink / surveillance requirement | 🟥 | CPDLC + ADS-C (FANS 1/A) via Inmarsat/Iridium only — no other datalink connectivity authorized in KZWY. |
| Terrain / MORA / driftdown | 🟩 | Open ocean — no enroute terrain; Bermuda itself is low/flat. |
| Diversion-aerodrome coverage | 🟧 | Sparse and ETP-driven; **Bermuda (TXKF)** is the FIR's one significant mid-ocean diversion field — briefed in §9. Wider NAT diversion set is in <../../General/North Atlantic.md> §8. |
| Special-use airspace (military / danger) | 🟧 | Not specifically sourced for this brief beyond the general oceanic picture — verify NOTAM at planning. |
| Equipment / approval (RVSM, PBN, datalink) | 🟥 | **RVSM FL290–FL410 · RNP 10/RNP 4 for reduced lateral separation · CPDLC+ADS-C (FANS 1/A) via Inmarsat/Iridium.** All defined in OM E; confirm current oceanic clearance. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent — two working segments:**
  - **New York Oceanic East** — the portion **north of 27°N**, which forms part of the **North Atlantic HLA** (FL285–FL420) alongside Reykjavik/Gander/Shanwick/Bodø/Santa Maria — see <../../General/North Atlantic.md> §3. Notably this segment is **excluded from the NAT datalink mandate (NAT DLM)** even though it sits inside HLA. 🟧 (exception corroborated by NAT Doc 007; re-verify current-edition wording.)
  - **WATRS (West Atlantic Route System)**, south of 27°N — the reduced-lateral-separation route structure covering the airspace between the US East Coast, Bermuda, the Bahamas and the northern Caribbean; extended by **WATRS Plus** to include the **San Juan CTA/FIR** and the **Atlantic portion of Miami Oceanic**. RNP-10/RNP-4-equipped aircraft get **50 NM** (or **30 NM** for RNP-4/FANS-1/A+) lateral separation; unequipped aircraft use **90 NM (1.5° latitude)**.
  - Overall reported size **≈3.25 million sq mi** (network-sim/public facility-overview corroboration) — 🟧 verify against the current FAA ENR chart before relying on the figure operationally.
- **Vertical split:** 🟧 not independently re-derived here; RVSM FL290–FL410 applies throughout, NAT HLA FL285–FL420 applies to the New York Oceanic East segment specifically (per <../../General/North Atlantic.md> §3).
- **Adjacent FIRs (by boundary):** **New York ARTCC (KZNY, domestic)** to the west — the radar-to-procedural transition described in <New York (KZNY).md> §3; **Gander Oceanic (CZQX)** to the north; **Shanwick (EGGX)** and **Santa Maria (LPPO)** Oceanic to the east across the NAT HLA; **Miami Oceanic (KZMO)** to the southwest; **San Juan (TJZS)** to the south — see <San Juan (TJZS).md>. 🟧 exact boundary decimals not independently verified.
- **Sectorisation:** worked by New York ARTCC's oceanic sectors as a function distinct from its domestic low/high/super-high sectors (<New York (KZNY).md> §3); the WATRS/NAT-East split is the transit-relevant internal division.

---

## 4. Control & ATSU

- **Oceanic ATSU:** 🟩 **New York ARTCC (KZWY), FAA** — provides full CPDLC and ADS-C service throughout its oceanic airspace to FANS-1/A-capable flights; non-FANS flights are worked procedurally via HF voice.
- **Terminal facility inside the FIR:** **Bermuda Approach/Tower** provides local radar service around **TXKF** — a locally radar-served "island" within the otherwise-procedural oceanic FIR. See the airport briefing (§9).
- **Boundary-crossing procedure:** CPDLC connections transfer **~5 minutes prior** to the FIR boundary crossing point; if KZWY is the active CPDLC connection at the New York Oceanic boundary, contact **New York Radio on HF**; if KZWY is not the active center, terminate the CPDLC connection and log on to KZWY.
- **Surveillance basis:** 🟥 procedural (non-radar) with ADS-C surveillance where FANS-equipped; no ground radar over the open-ocean core.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in this FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** throughout — see <../../../../OM E Operations/RVSM Operations.md>.
- **PBN / RNP:** 🟥 **RNP 10 or RNP 4** required for reduced lateral separation (50 NM RNP-10/RNP-4; 30 NM for RNP-4 + FANS-1/A+ where authorized); **90 NM (1.5° latitude)** applies between aircraft not approved for RNP 10/4 within WATRS, the San Juan CTA/FIR, or the Atlantic portion of Miami Oceanic. RNP-4 on these oceanic routes is authorized regardless of altitude. See <../../../../OM E Operations/PBN and RNP Operations.md>.
- **8.33 kHz channel spacing:** not applicable to the oceanic HF/CPDLC environment; relevant only at Bermuda's VHF terminal frequencies — verify at planning.
- **Datalink (CPDLC):** 🟥 **CPDLC + ADS-C (FANS 1/A)** is the primary ATS communication in KZWY, permitted **only via Inmarsat or Iridium** — no other datalink connectivity is authorized. See <../../../../OM E Operations/Datalink and Oceanic Procedures.md>.
- **Transponder / ADS-B:** 🟧 Mode S transponder standard; ADS-B ground coverage is not available mid-ocean (procedural FIR) — surveillance here is ADS-C via datalink, not ADS-B.

---

## 6. Communications & frequencies

- **CPDLC primary:** for FANS-equipped aircraft, CPDLC is primary with ADS-C surveillance; log on to **KZWY** per §4.
- **HF:** 🟥 **New York Radio** is one of the NAT/oceanic HF radio stations (alongside Bodø/Gander/Iceland/Santa Maria/Shanwick per <../../General/North Atlantic.md> §5); required for non-FANS or as CPDLC backup. Exact family/kHz allocations are AIRAC-published — pull from current flight docs.
- **SATVOICE:** may satisfy the second long-range-comm requirement per FIR policy; confirm equipment eligibility at planning.
- **VHF:** available near the US coast and locally around **Bermuda**; not available over the open-ocean core.
- **Language:** 🟩 English.
- **Emergency / guard:** **121.5 MHz** guard; **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **North of 27°N (New York Oceanic East):** part of the **NAT OTS/HLA system** — see <../../General/North Atlantic.md> §6 for the Organised Track System, TMI, and Mach Number Technique; not repeated here.
- **South of 27°N (WATRS / WATRS Plus):** a **fixed oceanic route network** (not an OTS) with RNP-10/RNP-4-based reduced lateral separation (§5), linking the US East Coast, Bermuda, the Bahamas, San Juan and the northern Caribbean.
- **Entry/exit & CPDLC log-on:** log on to **KZWY** in advance of FIR entry per the FANS procedure (§4); the oceanic clearance (track/random route, level, Mach) is issued via CPDLC/voice.
- **Hubs & aerodromes inside the FIR:** **L.F. Wade International, Bermuda (TXKF)** — the FIR's one significant mid-ocean field; see §9.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 open ocean throughout — not a cruise-level factor. Bermuda itself is low and flat.
- **Boundary terrain:** none — the nearest significant terrain (US Appalachians, Canadian Maritimes) lies inside the adjacent domestic ARTCCs, not this oceanic FIR.
- **Driftdown / depressurisation escape:** 🟥 the binding constraint here is the **oceanic no-divert distance**, not terrain — plan ETP/critical-point diversion against Bermuda or the nearest coast-in/coast-out field on the SimBrief OFP; the wider high-latitude driftdown picture (Greenland icecap) belongs to <../../General/Arctic.md> and does not apply on this segment.
- **Cold-temperature altitude corrections:** not applicable — subtropical/maritime climate at Bermuda; not an enroute factor.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| L.F. Wade Intl, Bermuda | **TXKF** | Served destination / mid-ocean alternate | <../../../Airports/North America/Bermuda/TXKF — L F Wade Intl/TXKF — Briefing.md> |

- **Coverage note:** 🟥 very sparse — Bermuda is the only significant field within the oceanic core of this FIR; the ETP/critical-point calculation on any KZWY transit typically resolves to Bermuda or a US East Coast / Canadian Atlantic coast-in field (the latter set is in <../../General/North Atlantic.md> §8). Compute on the SimBrief OFP.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 not specifically sourced for this brief; the wider NAT briefing (<../../General/North Atlantic.md> §9) notes occasional ALTRV/military activity and oceanic danger areas by NOTAM near the coasts — the same caution applies here.
- **Danger / restricted / prohibited areas:** 🟧 none specifically sourced for the WATRS/NY-Oceanic-East segments — verify NOTAM at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — US-administered oceanic FIR.

> **SUA currency:** re-check active restricted/danger-area status and current NOTAMs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** north of 27°N, apply the NAT Doc 007 Ch.10 oceanic contingency procedure reproduced in <../../General/North Atlantic.md> §10 (offset turn, 7700, 121.5/123.45 broadcast). South of 27°N (WATRS), the same general oceanic-contingency principle applies under FAA policy; exact WATRS-specific wording not independently sourced here — 🟧 verify FAA ENR 7.1/7.3.
- **Weather-deviation / in-flight contingency:** oceanic weather-deviation method per <../../General/North Atlantic.md> §10 (CPDLC/voice "WEATHER DEVIATION REQUIRED," lateral offset + level-change table) — applies on this FIR's NAT-HLA segment; treat as the reference method FIR-wide absent a documented WATRS-specific variant.
- **SLOP:** 🟩 Strategic Lateral Offset Procedure (centreline, 1 NM right, or 2 NM right — right only) applies per <../../General/North Atlantic.md> §10 north of 27°N; apply the same logic south of 27°N absent a documented exception.
- **Seasonal hazards (durable):** 🟥 **Atlantic hurricane/tropical-cyclone season, June–November**, peak mid-August–mid-October — directly affects this FIR (Bermuda and the WATRS corridor toward the Bahamas/Caribbean sit squarely in the active belt). Expect oceanic-track/random-route adjustment, TXKF-area holding/reroute, and possible closure by NOTAM during storm passage. High-latitude space-weather/HF-degradation risk (per <../../General/North Atlantic.md> §11) applies to the New York Oceanic East segment specifically.

> **Pull at planning (T-2h):** the current oceanic clearance/track guidance, enroute NOTAMs, SIGMET/AIRMET, tropical-cyclone advisories (NHC) in season, space-weather (HF/GNSS) advisories on the NAT-East segment, and the validated SimBrief route with assigned oceanic clearance/Mach. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact KZWY lateral/vertical chart boundaries (WATRS vs New York Oceanic East split; adjacent-FIR decimals) — verify FAA ENR 7.4 / current chart.
- NAT DLM exception wording for New York Oceanic East (excluded from the datalink mandate despite HLA membership) — cross-check current NAT Doc 007 edition.
- WATRS-specific comms-failure/contingency wording (as distinct from the NAT Doc 007 Ch.10 text reused here) — not independently sourced; verify FAA ENR 7.1/7.3.
- 8.33 kHz / VHF applicability at Bermuda's terminal frequencies — verify airport brief/AIP.
- Named danger/restricted/military areas within KZWY — not sourced.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **FAA — AIM Ch.3 §2.7 / ENR 7.2 (Data Link Procedures)** — KZWY CPDLC/ADS-C log-on address, boundary-crossing procedure, Inmarsat/Iridium-only datalink restriction — https://www.faa.gov/air_traffic/publications/atpubs/aim_html/ and https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part2_enr_section_7.2.html (retrieved 2026-07-26).
- **FAA — ENR 7.4 (Operational Policy, 50 NM Lateral Separation / WATRS Plus)** — RNP-10/RNP-4 reduced separation, WATRS/San Juan/Atlantic-Miami-Oceanic grouping, 90 NM fallback for unequipped aircraft — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part2_enr_section_7.4.html (retrieved 2026-07-26).
- **ICAO NAT Doc 007 — North Atlantic Operations and Airspace Manual, V.2026-1** — New York Oceanic East as part of NAT HLA (north of 27°N) and its exclusion from the NAT datalink mandate — cross-referenced via <../../General/North Atlantic.md> sourcing (retrieved 2026-06-26 per that brief).
- **New York ARTCC — facility overview (public reference)** — ~3.25 million sq mi oceanic area including Bermuda, corroborated in <New York (KZNY).md> — https://en.wikipedia.org/wiki/New_York_Air_Route_Traffic_Control_Center (retrieved 2026-07-25 per that brief). *Corroboration; boundaries to re-verify vs FAA ENR.*
- **National Hurricane Center (NHC) / NOAA** — Atlantic hurricane season climatology; Bermuda/WATRS-corridor exposure — https://www.nhc.noaa.gov/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
