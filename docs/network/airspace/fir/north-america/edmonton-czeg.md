# Edmonton FIR (CZEG) — FIR Briefing

**Scope:** single FIR — western & northern Canada: southern/central/northern Alberta, southeastern British Columbia, southwestern Saskatchewan and the Northwest Territories, containing **Cold Lake (CYOD)** and the sub-Arctic diversion field **Yellowknife (CYZF)** · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · high-latitude/polar companion brief: [Arctic](../../arctic.md) · **Adjacent FIRs:** Vancouver (CZVR, NAV CANADA) W · Winnipeg (CZWG, NAV CANADA) E (incl. delegated HUDSON/SEVERN/THOMPSON high sectors) · Montreal (CZUL, NAV CANADA) E · Toronto (CZYZ, NAV CANADA) SE · Seattle ARTCC (KZSE, FAA) SW · Salt Lake City ARTCC (KZLC, FAA) S · Anchorage FIR (PAZA, FAA) NW · Reykjavik (BIRD, Isavia) N · Nuuk/Greenland (BGGL, Naviair) NE · Gander Oceanic (CZQX, NAV CANADA) E
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Edmonton FIR is **NAV CANADA's largest FIR** and its **most active procedural (non-radar) airspace** — a mixed FIR: **radar-controlled Southern Domestic Airspace (SDA)** in the settled south, transitioning to **procedural Northern Domestic Airspace (NDA)** across the Territories, where navigation, runway numbering and wind are referenced to **TRUE north** rather than magnetic (see [Arctic](../../arctic.md) §4 for the full True-track/grid-nav treatment — not re-derived here). CZEG is the **polar-arrival gateway**: eastbound Asia–Europe polar traffic descends through Reykjavik → Nuuk upper → Edmonton before reaching the settled SDA. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for the aerodromes inside the FIR (CYOD, CYZF) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR ident | **CZEG** — Edmonton FIR / Edmonton Area Control Centre ("Edmonton Centre"), NAV CANADA's largest FIR — **~8,089,000 km²**, ~23,948 km lateral border 🟧 (network-sim-sourced figure; order-of-magnitude corroborated by CZEG spanning most of Alberta/NWT — verify vs NAV CANADA AIP) |
| Controlling ATSU / ANSP | **NAV CANADA** — Edmonton ACC. Also controls delegated high-level airspace **inside** the Winnipeg FIR (HUDSON/SEVERN/THOMPSON sectors, FL290+, ~1.4M km²) and the **Cranbrook Extension** inside Vancouver FIR (FL250+, ~20,192 km²) 🟧 |
| Airspace class & vertical limits | **SDA (south):** Class A high-level, Class B/C terminal, Class E/G below — magnetic reference, altimeter-setting region. **NDA (north):** Class A ≥ **Northern Control Area FL230 / Arctic Control Area FL270**; standard-pressure region (29.92/1013.2 set throughout); TRUE-referenced. See [Arctic](../../arctic.md) §3–4 🟧 |
| RVSM | 🟥 Applicable **FL290–FL410** (Canadian domestic RVSM, TP1820) throughout CZEG, incl. the NDA portion — see OM E §5 |
| PBN environment | RNAV enroute in the SDA; **RNAV 10 (RNP 10) / RNP 4** in the NDA/remote portion; RNAV SID/STAR + RNP APCH at CYOD/CYZF — see OM E §5 and [Arctic](../../arctic.md) §4 |
| Surveillance & datalink | 🟩 Radar/ADS-B in the SDA; 🟥 **procedural, non-radar** in the NDA — position reports at compulsory points; CPDLC+ADS-C (FANS 1/A) per the NAT DLM only applies at the FIR's polar edge (Reykjavik/Nuuk interface) — see [Arctic](../../arctic.md) §4–5 |
| Primary language & comms | 🟩 **VHF** in the SDA/near terminals; 🟥 **HF + SATVOICE** required across the NDA — see [Arctic](../../arctic.md) §5 |
| Key hazard(s) | 🟥 **Extreme cold-weather ops** (fuel cold-soak, cold-start, altimeter corrections) — see [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md); 🟥 **radar-to-procedural transition & TRUE-north reference** in the NDA; 🟧 **high-latitude/polar interface** at the FIR's northern edge |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟥 | Mixed: radar/ADS-B in the SDA south; fully procedural/non-radar in the NDA north — see [Arctic](../../arctic.md) §3. |
| Communication coverage & language | 🟥 | VHF continuous in the SDA; HF + SATVOICE required in the NDA (Cold Lake/Yellowknife both sit near this transition — confirm per-flight). |
| Datalink / surveillance requirement | 🟧 | Domestic CPDLC not required in the SDA; NAT DLM CPDLC/ADS-C applies only at the polar edge — see [Arctic](../../arctic.md) §4. |
| Terrain / MORA / driftdown | 🟧 | Generally moderate (prairie/boreal plain plus Rocky Mountain foothills in the SW); not extensively re-verified per-quadrant in this pass. |
| Diversion-aerodrome coverage | 🟥 | Sparse in the north (NDA) — Yellowknife is the principal sub-Arctic alternate; denser in the SDA (Edmonton CYEG, Calgary CYYC — not curated here). |
| Special-use airspace (military / danger) | 🟥 | **CFB Cold Lake (CYOD) Air Weapons Range / Cold Lake Air Weapons Range (CLAWR)** is one of Canada's largest military training areas — confirm activation status at planning. |
| Equipment / approval (RVSM, PBN, TRUE-track, transponder) | 🟥 | RVSM FL290–410 · RNAV10/RNP4 in the NDA · TRUE-track reference north of the SDA/NDA line · Mode S/ADS-B — see OM E and [Arctic](../../arctic.md) §4. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Edmonton FIR covers the **southern half of Alberta, parts of southeastern British Columbia, a portion of southwestern Saskatchewan, and the Northwest Territories**, plus northern and central Alberta — making it NAV CANADA's **largest FIR by area**. 🟧 (exact lateral boundary decimals — verify AIP Canada ENR 2.1.)
- **Vertical structure:** one facility (Edmonton Centre) works the full column across three regimes — **Southern Domestic Airspace (SDA)**, **Northern Control Area (NCA, Class A base FL230)** and **Arctic Control Area (ACA, Class A base FL270)** — the NCA/ACA split belonging to the wider **Northern Domestic Airspace (NDA)** described fully in [Arctic](../../arctic.md) §3 (not re-derived here).
- **Adjacent FIRs (by boundary):**
  - **W — Vancouver (CZVR, NAV CANADA).** BC handoff; Edmonton also controls the **Cranbrook Extension** (FL250+) inside CZVR. 🟧
  - **E — Winnipeg (CZWG, NAV CANADA).** Prairies handoff; Edmonton also controls the **HUDSON/SEVERN/THOMPSON high sectors (FL290+)** inside CZWG. 🟧
  - **E — Montreal (CZUL, NAV CANADA)** and **SE — Toronto (CZYZ, NAV CANADA).** Eastern Canada handoff (see [Montreal (CZUL)](montreal-czul.md), [Toronto (CZYZ)](toronto-czyz.md)).
  - **SW — Seattle (KZSE, FAA)** and **S — Salt Lake City (KZLC, FAA).** US handoff toward the western-US descent (see [North America](../../north-america.md)).
  - **NW — Anchorage (PAZA, FAA).** Alaska handoff.
  - **N — Reykjavik (BIRD, Isavia)** and **NE — Nuuk/Greenland (BGGL, Naviair).** The polar-inbound interface — see [Nuuk (BGGL)](nuuk-bggl.md) and [Arctic](../../arctic.md) §3.
  - **E — Gander Oceanic (CZQX, NAV CANADA).** 🟧 (exact adjacency point vs the Winnipeg/Montreal boundary not independently re-verified.)
- **Sectorisation:** Southern/Northern/Arctic Control Area sectors combine/split tactically; the delegated high-level sectors inside Winnipeg (HUDSON/SEVERN/THOMPSON) and Vancouver (Cranbrook Extension) are Edmonton-controlled cross-boundary exceptions. 🟧 (current sector count/boundaries — verify AIP Canada ENR 1.6.)

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟥 **Edmonton ACC (CZEG, NAV CANADA)** — radar/ADS-B control in the SDA; **procedural, non-radar** control in the NDA (NCA/ACA). One facility works both regimes.
- **Terminal facilities inside the FIR:** 🟧 no major hub terminal unit curated in this brief; **CYOD (Cold Lake)** is a joint military/civil aerodrome with its own tower; **CYZF (Yellowknife)** has terminal ATC service. Terminal procedures are in the airport briefings (§9).
- **FIS / FSS:** NAV CANADA **Flight Information Centre (FIC)**; in the NDA, **position reports substitute for radar** at compulsory points (entry, waypoints, exit) — see [Arctic](../../arctic.md) §5.
- **Surveillance basis:** 🟩 radar/ADS-B in the SDA; 🟥 **no radar coverage** in the NDA portion — procedural separation via HF/CPDLC position reporting.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Edmonton FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — Canadian domestic RVSM per **TP1820**, applicable across both the SDA and NDA portions of CZEG. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 RNAV enroute in the SDA; **RNAV 10 (RNP 10) or RNP 4** in the NDA/remote portion per the wider high-latitude-domestic mandate. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md) and [Arctic](../../arctic.md) §4.
- **TRUE-track reference (NDA portion) — 🟥 KEY:** navigation, runway numbering and wind direction are referenced to **TRUE north** (not magnetic) across the Northern/Arctic Control Area portion of CZEG — this is an **Area of Magnetic Unreliability**. Full treatment (incl. grid-nav in the high Arctic) lives in [Arctic](../../arctic.md) §4 — not re-derived here.
- **Datalink (CPDLC):** 🟧 not required domestically in the SDA; **CPDLC + ADS-C (FANS 1/A)** per the NAT DLM applies only where CZEG interfaces the polar/NAT system at its northern edge. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md) and [Arctic](../../arctic.md) §4.
- **Transponder / ADS-B:** 🟥 **Mode S with ADS-B Out** required under the Canadian ADS-B mandate in the SDA. 🟧 (ADS-B coverage/mandate specifics in the NDA — verify; procedural separation is the default where radar/ADS-B coverage is absent.)
- **Cold-weather / EDTO-relevant equipment:** 🟥 extreme-cold operational procedures (engine/APU cold-start, fuel cold-soak, altimeter cold-temperature corrections) apply throughout — see [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md) and [`OM E — ETOPS-EDTO Procedures`](../../../../flight-ops/etops-edto.md) for diversion-planning implications of CZEG's sparse northern field set.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** transits are handed sequentially through **Edmonton Centre's** Southern/Northern/Arctic Control Area sectors and onward to the adjacent FIR/ARTCC (**Vancouver / Winnipeg / Seattle / Salt Lake City / Reykjavik / Nuuk**); the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **FIS / advisory:** NAV CANADA FIC; in the NDA, position reports are typically relayed via **HF or CPDLC** rather than continuous VHF — see [Arctic](../../arctic.md) §5.
- **Language:** 🟩 **English**.
- **HF / SATVOICE:** 🟥 required for NDA transits — see [Arctic](../../arctic.md) §5 for the Reykjavik Radio/Canadian-HF/SELCAL detail (not re-derived here).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 Canadian domestic RNAV airway structure in the SDA; 🟧 the NDA is migrating toward PBN with a residual fixed-track/CMNPS legacy structure — see [Arctic](../../arctic.md) §4 and §6 (not re-derived here). CZEG is the **polar-arrival gateway** for the Reykjavik → Nuuk upper → Edmonton descent stream.
- **Major fixes / entry-exit points:** SDA arrival gates and the NDA/SDA transition; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance). 🟧 (exact current fix set by AIRAC — pull on the day.)
- **Hubs & aerodromes inside the FIR:** 🟩 **Cold Lake (CYOD)** — joint CFB Cold Lake military/civil aerodrome, extreme-cold-ops relevant; **Yellowknife (CYZF)** — sub-Arctic ETOPS/EDTO diversion alternate, NDA True-referenced procedures (see also [Arctic](../../arctic.md) §8, where CYZF is listed as the "Western-Arctic alternate"). Edmonton (CYEG) and Calgary (CYYC) sit in the SDA gateway but are not curated in this OM C tree.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 generally moderate — prairie and boreal-plain terrain across the bulk of the FIR, with Rocky Mountain foothills relief in the southwest (Cranbrook Extension area). Not extensively re-verified per-quadrant in this pass — take grid-MORA from NAV CANADA ENR charts.
- **Boundary terrain:** the higher Rocky Mountain terrain proper sits mostly across the western boundary in Vancouver FIR (CZVR); Baffin/Greenland icecap terrain sits further north/east across the Nuuk FIR boundary — see [Arctic](../../arctic.md) §7 for the icecap driftdown detail (not re-derived here).
- **Driftdown / depressurisation escape:** in the SDA, the diversion-field density (Edmonton, Calgary) removes most terrain-limited escape concern; in the NDA, escape planning follows the sparse-diversion / ETOPS-equivalent approach described in [Arctic](../../arctic.md) §8 and [`OM E — ETOPS-EDTO Procedures`](../../../../flight-ops/etops-edto.md).
- **Cold-temperature altitude corrections:** 🟥 apply throughout the FIR, especially at CYOD and CYZF in winter — see the airport briefings (§9) and [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Cold Lake | **CYOD** | Joint military/civil aerodrome; extreme-cold-ops relevant | [CYOD brief](../../../destinations/north-america/canada/cyod/index.md) |
| Yellowknife | **CYZF** | Sub-Arctic ETOPS/EDTO diversion alternate; NDA True-referenced procedures | [CYZF brief](../../../destinations/north-america/canada/cyzf/index.md) |

- **Coverage note:** 🟥 sparse in the NDA — CYZF is the principal curated sub-Arctic alternate; the SDA gateway (Edmonton CYEG, Calgary CYYC) is denser but uncurated here. Plan ETOPS/EDTO-equivalent diversion timing across the northern portion of the FIR per [`OM E — ETOPS-EDTO Procedures`](../../../../flight-ops/etops-edto.md).

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟥 **Cold Lake Air Weapons Range (CLAWR)**, adjacent to CFB Cold Lake (CYOD), is one of Canada's largest military training/danger-area complexes — confirm activation status (NOTAM) before routing near CYOD.
- **Danger / restricted / prohibited areas:** 🟧 other NDA-area military/training activity by NOTAM — pull live at planning; none of further note identified for a standard CYOD/CYZF transit in this pass.
- **Overflight-permit / diplomatic considerations:** 🟩 none — Canadian domestic operation.

> **SUA currency:** re-check CLAWR activation status and current NOTAMs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** in the SDA, apply Canadian domestic **lost-comms** procedure (route/altitude per last clearance / expected / filed); squawk **7600**. In the NDA, comms-failure/contingency follows the non-radar/procedural regime in [Arctic](../../arctic.md) §10 (not re-derived here).
- **Weather-deviation / in-flight contingency:** radar-tactical in the SDA — request the deviation from ATC. In the NDA, apply the procedural/oceanic-style contingency method (lateral offset, level change, 121.5/123.45 broadcast) per [Arctic](../../arctic.md) §10.
- **Seasonal hazards (durable):**
  - **Extreme cold (year-round risk, peak winter):** 🟥 fuel cold-soak, engine/APU cold-start, cold-temperature altimetry corrections — see [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md).
  - **Winter — prairie/boreal snow and blowing snow:** reduced visibility and runway contamination at CYOD/CYZF.
  - **Summer — convection:** prairie thunderstorms, occasionally severe, across the southern SDA portion.

> **Pull at planning (T-2h):** enroute NOTAMs, SIGMET/AIRMET (convection, icing), CLAWR activation status, space-weather advisories where the route touches the NDA/polar edge (see [Arctic](../../arctic.md) §11), and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact CZEG lateral boundary decimals and total-area/lateral-border figures (currently network-sim-sourced) — verify AIP Canada ENR 2.1.
- Current sector count/boundaries for Edmonton ACC, incl. the delegated Winnipeg (HUDSON/SEVERN/THOMPSON) and Vancouver (Cranbrook Extension) cross-boundary sectors — verify AIP Canada ENR 1.6.
- Radar-vs-procedural boundary line within CZEG (SDA/NDA) — verify AIP Canada ENR 1.6 (flagged also in [Arctic](../../arctic.md) §12).
- ADS-B coverage/mandate specifics within the NDA portion.
- Canadian ADS-B mandate CARs citation/effective date.
- CLAWR current boundary/activation schedule.
- No OM C airport briefs yet for CYEG (Edmonton) or CYYC (Calgary) — build if planned as SDA-gateway alternates.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **NAV CANADA — AIP Canada (ICAO) / Designated Airspace Handbook (TP1820) / "Magnetic to True North" briefing** — Canadian domestic RVSM FL290–410, SDA/NDA structure, NCA FL230 / ACA FL270, TRUE-track reference, ADS-B mandate — https://www.navcanada.ca/ (retrieved 2026-07-26). *Full high-latitude/NDA detail already verified and stored in [Arctic](../../arctic.md); not re-derived here.*
- **Edmonton FIR — facility overview (public reference)** — CZEG area/border figures, adjacency list (Vancouver, Seattle, Salt Lake, Anchorage, Reykjavik, Nuuk/Greenland, Gander Oceanic, Montreal, Toronto, Winnipeg), delegated Winnipeg (HUDSON/SEVERN/THOMPSON) and Vancouver (Cranbrook Extension) high-level sectors — https://edmontonfir.ca/czeg_fir (retrieved 2026-07-26). *Tier-4 network-sim corroboration only — area/border figures and delegated-sector detail not independently cross-checked against NAV CANADA AIP in this pass.*
- **CFB Cold Lake / Cold Lake Air Weapons Range — public reference** — military training-area context adjacent to CYOD — https://en.wikipedia.org/wiki/CFB_Cold_Lake (retrieved 2026-07-26).
- Cross-reference: [Arctic](../../arctic.md) — Sources & References (Isavia eAIP, AIP Canada ENR + NAV CANADA True-North briefing, Naviair AIP, ICAO NAT Doc 007, NOAA SWPC) underpin the NDA/polar-interface facts cited here by cross-link.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
