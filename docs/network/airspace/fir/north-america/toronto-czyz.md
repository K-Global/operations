# Toronto FIR (CZYZ) — FIR Briefing

**Scope:** single FIR — southern, central & parts of eastern Ontario, containing **Toronto Pearson (CYYZ)**, plus a small delegated pocket of airspace over northwestern Michigan · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · **Adjacent FIRs:** Montreal (CZUL, NAV CANADA) E · Boston ARTCC (KZBW, FAA) E · Minneapolis ARTCC (KZMP, FAA) SW · Cleveland ARTCC (KZOB, FAA) S (covers the extreme SW-Ontario/Windsor pocket) · New York ARTCC (KZNY, FAA) S/SE · Winnipeg FIR (CZWG, NAV CANADA) W
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Toronto FIR is a **fully radar/ADS-B-controlled continental FIR** operated by **NAV CANADA** — no procedural segment. The defining features are the **Toronto metro's traffic density** (Canada's busiest terminal complex), the **direct border interface with four separate FAA ARTCCs**, and a **winter weather regime** (lake-effect snow off the Great Lakes, freezing rain, de-icing load) that drives seasonal flow constraints. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for the aerodrome inside the FIR (CYYZ) live in the airport briefing (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR ident | **CZYZ** — Toronto FIR / Toronto Area Control Centre ("Toronto Centre"), one of NAV CANADA's seven ACCs, based near Toronto Pearson (Mississauga, ON) |
| Controlling ATSU / ANSP | **NAV CANADA** — Toronto ACC. Underlying terminal unit: **Toronto Terminal** for the CYYZ metro (CYYZ/CYTZ/CYKZ/CYHM area) |
| Airspace class & vertical limits | Canadian domestic structure: **Class A** high-level (from FL180/280 band per TP1820), **Class B/C** terminal at the Toronto metro, **Class E/G** below — terminal detail in airport briefs (§9) 🟧 (exact class-letter/base VERIFY vs current AIP Canada ENR) |
| RVSM | 🟥 Applicable **FL290–FL410** (Canadian domestic RVSM, TP1820 Designated Airspace Handbook) — see OM E §5 |
| PBN environment | RNAV enroute (domestic high/low-level airway structure) · RNAV SID/STAR + RNP APCH at the metro — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B**; domestic CPDLC not required (VHF continuous) |
| Primary language & comms | 🟩 **VHF throughout; English** (French available at Ottawa-area/bilingual services; not a factor for a CYYZ-only transit) |
| Key hazard(s) | 🟥 **Extreme Toronto-metro traffic density** and **US-border flow complexity** (four adjacent ARTCCs); 🟧 **winter lake-effect snow / freezing rain / de-icing load** off Lakes Ontario, Erie and Huron |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/ADS-B-controlled; no procedural segment in this FIR. |
| Communication coverage & language | 🟩 | Continuous VHF; English. |
| Datalink / surveillance requirement | 🟩 | Radar/ADS-B continuous; domestic CPDLC not required. |
| Terrain / MORA / driftdown | 🟩 | Low — southern-Ontario plain and Great Lakes basin; not a cruise/driftdown factor. |
| Diversion-aerodrome coverage | 🟧 | Dense in principle (Ottawa, Hamilton, Buffalo/US side) but only CYYZ has a curated brief in this tree — see §9. |
| Special-use airspace (military / danger) | 🟧 | No major CZYZ-specific SUA identified in this pass; re-check AUP/NOTAM at planning. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | RVSM FL290–410 · RNAV domestic structure · Mode S/ADS-B — all defined in OM E; confirm current-AIRAC route. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Toronto FIR covers **southern Ontario, central Ontario and parts of eastern Ontario**, extending to the Canada–US border, and includes a small delegated pocket of airspace over **northwestern Michigan**. Approximate area **~1.2 million km²**. 🟧 (exact lateral boundary decimals — verify AIP Canada ENR 2.1/71.)
- **Vertical structure:** as with other Canadian ACCs, Toronto Centre is **one facility working the full column** (no separate upper-airspace unit); low- and high-level sectors combine/split with traffic and staffing.
- **Adjacent FIRs (by boundary):**
  - **E — Montreal (CZUL, NAV CANADA).** Eastern Ontario handoff toward Quebec and the Gander/Moncton NAT feed (see [Montreal (CZUL)](montreal-czul.md)).
  - **E — Boston (KZBW, FAA).** Northeast US handoff.
  - **SW — Minneapolis (KZMP, FAA).** Upper-midwest US handoff.
  - **S — Cleveland (KZOB, FAA).** Covers the extreme southwestern-Ontario / Windsor–Detroit border pocket.
  - **S/SE — New York (KZNY, FAA).** Northeast-corridor handoff toward the New York metro (see [New York (KZNY)](new-york-kzny.md)).
  - **W — Winnipeg (CZWG, NAV CANADA).** Prairies handoff.
  - CZYZ is unusual among Canadian FIRs in bordering **four separate FAA ARTCCs** directly — a reflection of the dense southern-Ontario/Great Lakes border geometry.
- **Sectorisation:** low/high sectors combined and split tactically by Toronto Centre; the Toronto-metro terminal complex is delegated to **Toronto Terminal**. 🟧 (current sector count/boundaries — verify NAV CANADA AIP Canada ENR 1.6.)

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **Toronto ACC (CZYZ, NAV CANADA)** — radar/ADS-B control of the full column, feeding Toronto Terminal.
- **Terminal facility inside the FIR:** 🟩 **Toronto Terminal** sequences the CYYZ metro (Pearson, Billy Bishop/CYTZ, Buttonville/CYKZ) and Hamilton (CYHM). Terminal procedures are in the airport briefing (§9).
- **FIS / FSS:** NAV CANADA **Flight Information Centre (FIC)** for advisory service outside controlled airspace; not a factor for an IFR hub transit that stays controlled throughout.
- **Surveillance basis:** 🟩 continuous radar + ADS-B; no procedural pockets on a normal domestic IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Toronto FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — Canadian domestic RVSM per **TP1820 Designated Airspace Handbook**. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 RNAV enroute on the domestic high/low-level airway structure; **RNAV SID/STAR** and **RNP APCH** at the Toronto metro. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟩 not required domestically — VHF voice continuous. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md) for context on where the CZUL/Gander NAT interface picks up datalink requirements eastbound.
- **Transponder / ADS-B:** 🟥 **Mode S with ADS-B Out** required under Canadian ADS-B mandate (mirrors the FAA 1090ES ≥ FL180 model). 🟧 (exact CARs citation/effective date — verify Transport Canada CARs 605.35 / AIC.)

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a metro transit is handed sequentially through **Toronto Centre** low/high sectors and onward to the adjacent FIR/ARTCC (**Montreal / Boston / Minneapolis / Cleveland / New York**) or to **Toronto Terminal** at the terminal end; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **FIS / advisory:** NAV CANADA FIC for flight-information/advisory service in uncontrolled airspace.
- **Language:** 🟩 **English** (French bilingual service available at select stations; not required for a CYYZ transit).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 Canadian domestic high/low-level airway (RNAV) structure feeding the Toronto metro arrival/departure gates; heavy interaction with the Great-Lakes/Northeast-Corridor US flow due to the four-ARTCC border.
- **Major fixes / entry-exit points:** metro arrival gates and RNAV STAR transition fixes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance). 🟧 (exact current STAR set by AIRAC/runway config — pull on the day.)
- **Hubs & aerodromes inside the FIR:** 🟩 **Toronto Pearson (CYYZ)** — the only curated brief in this FIR (§9). Other public-domain fields inside CZYZ (Ottawa CYOW, Hamilton CYHM, Billy Bishop CYTZ, Buttonville CYKZ) are noted for context only — no OM C brief built.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low throughout — the southern-Ontario plain and Great Lakes basin. Not a cruise-level factor. 🟧 (per-quadrant grid-MORA — take from NAV CANADA ENR charts.)
- **Boundary terrain:** none of operational significance across adjacent boundaries.
- **Driftdown / depressurisation escape:** not terrain-limited in this FIR; the dense diversion field set (Toronto metro plus adjacent-FIR fields) removes any terrain-limited escape concern.
- **Cold-temperature altitude corrections:** applied at CYYZ in winter — see the airport briefing (§9) and [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Toronto Pearson | **CYYZ** | Toronto metro hub / primary dep-return alternate | [CYYZ brief](../../../destinations/north-america/canada/cyyz/index.md) |
| Ottawa Macdonald-Cartier | **CYOW** | Eastern-Ontario alternate | Brief to build 🟧 |
| Hamilton | **CYHM** | Co-terminal / cargo reliever | Brief to build 🟧 |

- **Coverage note:** 🟧 principal curated coverage is CYYZ only; the wider Toronto-metro/eastern-Ontario field set (CYOW, CYHM, plus adjacent-ARTCC US fields such as KBUF) gives real-world redundancy but has no OM C brief yet — build if planned as an alternate.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 no CZYZ-specific military training/danger areas identified in this pass along a typical CYYZ arrival/departure corridor; confirm at planning.
- **Danger / restricted / prohibited areas:** 🟧 none of note identified for a standard transit; Toronto-metro security/VIP airspace is NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — Canadian domestic operation.

> **SUA currency:** re-check active TRA/TSA/restricted-area status and current NOTAMs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply Canadian domestic **lost-comms** procedure (route/altitude per last clearance / expected / filed, per TC CARs/AIP Canada RAC); squawk **7600**. Continuous VHF coverage makes prolonged loss unlikely.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Winter — lake-effect snow / freezing rain:** heavy lake-effect snow off Lakes Ontario, Erie and Huron, plus freezing rain and low ceilings, drive deicing load and reduced runway acceptance at the Toronto metro — the dominant winter operational constraint.
  - **Summer — convection:** frontal thunderstorms and squall lines typical of the Great Lakes/Ohio Valley air mass close arrival gates seasonally.

> **Pull at planning (T-2h):** enroute NOTAMs, SIGMET/AIRMET (convection, icing), current metro flow advisories, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact CZYZ lateral boundary decimals (incl. the northwestern-Michigan pocket) — verify AIP Canada ENR 2.1.
- Airspace class letter per band / terminal shelves at the Toronto metro — not individually re-verified against current charts.
- Current sector count/boundaries for Toronto ACC — verify AIP Canada ENR 1.6.
- Canadian ADS-B mandate CARs citation/effective date.
- CZYZ-specific SUA (military/danger areas) — confirm none of significance via live NOTAM.
- No OM C airport briefs yet for CYOW, CYHM — build if they become planned alternates.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **NAV CANADA — AIP Canada (ICAO) / Designated Airspace Handbook (TP1820)** — Canadian domestic RVSM FL290–410, airspace classification, ADS-B mandate — https://www.navcanada.ca/ (retrieved 2026-07-26). 🟧 exact ENR sub-section numbers not individually re-verified in this pass.
- **Toronto Area Control Centre — facility overview (public reference)** — CZYZ coverage of southern/central/eastern Ontario + NW Michigan pocket, ~1.2M km², adjacent Montreal/Boston/Minneapolis/Cleveland/New York/Winnipeg — https://en.wikipedia.org/wiki/Toronto_Area_Control_Centre (retrieved 2026-07-26).
- **Toronto virtual FIR (VATCAN/VATSIM)** — corroboration only for facility framing (one of NAV CANADA's seven ACCs); not an authoritative real-world AIP source — https://torontofir.ca/ (retrieved 2026-07-26). *Tier-4 network-sim corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
