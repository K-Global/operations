# Amsterdam (EHAA) — FIR Briefing

**Scope:** single FIR — the Netherlands, including the **Schiphol (EHAM)** hub · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Bremen (EDWW) E/NE · Langen (EDGG) SE · Brussels (EBBU) S · 🟧 London (EGTT) W/NW (across the North Sea)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Amsterdam is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (EHAM, EHBK, EHEH) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **EHAA** — Amsterdam FIR, lower airspace **GND–FL245**; upper airspace (**above FL245**) is delegated to **Maastricht UAC (EDYY)** |
| Controlling ATSU / ANSP | **LVNL (Luchtverkeersleiding Nederland)** provides ATS below FL245 across the Netherlands. **Maastricht UAC (EDYY, EUROCONTROL — multinational: Belgium, Germany, Luxembourg, Netherlands)** provides ATS above FL245 |
| Airspace class & vertical limits | 🟧 ATS airspace classified **A–G** per ICAO Annex 11; the Amsterdam FIR uses a dense mix of **Class C/D** in the Schiphol TMAs (TMA 1–8) and Class E/G elsewhere — confirm exact class per TMA at **AIP ENR 1.4** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area — Maastricht UAC is a lead European datalink provider |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **Dutch + English** (English always available) |
| Key hazard(s) | Flat, low-lying terrain (parts of the Netherlands are below sea level) — no cruise-level terrain factor. The defining feature is the **dense Schiphol TMA structure** (multiple parallel/crossing runways, complex noise-abatement SID/STAR routing) plus North Sea coastal weather and offshore wind-farm/rig SUA. Icelandic volcanic ash the strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). Dutch + English; English always available. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet (EU 2017/386). |
| Terrain / MORA / driftdown | 🟩 | Flat, low-lying — no cruise-level terrain factor anywhere in the FIR. |
| Diversion-aerodrome coverage | 🟩 | EHAM (Schiphol), EHBK (Maastricht-Aachen) and EHEH (Eindhoven) all inside the FIR with curated briefs (§9). |
| Special-use airspace (military / danger) | 🟧 | Dutch military TRA/TSA activated via **AUP/UUP**; extensive **offshore wind-farm and rig** restricted areas over the North Sea sector; confirm active areas at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Amsterdam FIR covers **the Netherlands** — the western/coastal low-lying provinces around Amsterdam/Schiphol, extending south-east toward Maastricht/Eindhoven, and out over the Dutch sector of the North Sea.
- **Vertical split:** 🟩 **Lower airspace GND–FL245** is worked by **LVNL**. **Upper airspace above FL245** is delegated to **Maastricht UAC (EDYY)** — the same unit that provides the upper airspace over Belgium, Luxembourg and north-west Germany (see the Brussels (EBBU) and Bremen (EDWW) briefs).
- **Adjacent FIRs (by boundary):**
  - **E/NE — Bremen (EDWW, DFS).** Northern German FIR.
  - **SE — Langen (EDGG, DFS).** Central/south-western German FIR (a smaller shared boundary, per the Langen FIR brief's own adjacency note).
  - **S — Brussels (EBBU, skeyes).** Belgium/Luxembourg combined FIR.
  - 🟧 **W/NW — London (EGTT), UK**, across the North Sea — included for completeness; confirm whether this boundary is operationally relevant to typical hub transits.
- **Sectorisation:** LVNL (lower) and Maastricht UAC (upper) each divide their airspace into multiple radar sectors that combine/split with traffic and staffing, heavily weighted toward the Schiphol arrival/departure flow; the transit-relevant fact is the **GND–FL245 (LVNL) / FL245+ (Maastricht UAC)** band split.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **LVNL (Luchtverkeersleiding Nederland)** — radar/surveillance control, GND–FL245, including the dense Schiphol (EHAM) TMA structure (TMAs 1–8) and the Maastricht-Aachen (EHBK) and Eindhoven (EHEH) approach feeds.
- **Upper-airspace ATSU:** 🟩 **Maastricht UAC (EDYY, EUROCONTROL)** — radar/surveillance control of the upper airspace above FL245; the cruise band for our transits sits here.
- **FIS / FSS:** Dutch **Flight Information Service** for lower/uncontrolled airspace; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Amsterdam FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute across ECAC upper airspace; **RNP 1** for terminal SID/STAR — Schiphol's noise-abatement SID/STAR network in particular relies on precise RNAV; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**; full implementation completed 31 Dec 2018).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — Maastricht UAC participates as a lead European datalink provider; VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is handed sequentially **LVNL (lower) → Maastricht UAC (upper)** and onward to the adjacent-FIR ACC/UAC at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Dutch FIS for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Dutch and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **FRA@MUAC applies above FL245** across the Amsterdam-FIR upper airspace (part of Maastricht UAC's wider FL245–FL660 free-route area, H24) — direct point-to-point routeing between defined FRA entry/exit points. Below FL245, the fixed ATS-route network and the Schiphol SID/STAR structure apply.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor, the **fixed ATS-route network** applies, dominated by the dense Schiphol arrival/departure route structure and noise-abatement routing.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding Schiphol; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Amsterdam Schiphol (EHAM)**, **Maastricht-Aachen (EHBK)**, **Eindhoven (EHEH)**. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 none — the Netherlands is flat and low-lying, with substantial areas at or below sea level near the coast. No cruise-level terrain factor anywhere in the FIR.
- **Boundary terrain:** none of significance across any adjacent boundary.
- **Driftdown / depressurisation escape:** not a constraint — flat terrain and a dense diversion-aerodrome network remove any terrain-limited escape problem.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter, not in enroute cruise — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Amsterdam Schiphol | **EHAM** | Primary in-FIR alternate / hub-class field | [EHAM brief](../../../destinations/europe/netherlands/eham/index.md) |
| Maastricht-Aachen | **EHBK** | In-FIR alternate (SE, cargo) | [EHBK brief](../../../destinations/europe/netherlands/ehbk/index.md) |
| Eindhoven | **EHEH** | In-FIR alternate (S) | [EHEH brief](../../../destinations/europe/netherlands/eheh/index.md) |

- **Coverage note:** 🟩 dense — EHAM/EHBK/EHEH give good geographic spread across the FIR; a suitable field is always within short range, so **ETP/critical-point planning is not a driver** in this radar-controlled continental FIR.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 Dutch airspace carries military **TRA/TSA** activated via **AUP/UUP** (Airspace Use Plan / Updated Use Plan); associated **Conditional Routes (CDR1/2/3)** open and close accordingly, and the **RAD (Route Availability Document)** governs which levels/segments are flyable. Confirm active TRAs/CDRs at planning.
- **Danger / restricted / prohibited areas:** 🟧 extensive **offshore wind-farm and gas/oil-rig** restricted areas over the Dutch North Sea sector, plus onshore military danger areas. Named areas and status are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Dutch refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **North Sea coastal weather** — fog, low stratus and strong surface winds are a recurring feature at Schiphol and the coastal approaches; a terminal, not enroute, driver.
  - **Winter fog/low visibility** — a well-known Schiphol seasonal factor; see the airport brief and OM E LVO docs.
  - **Summer convection** — embedded CB / squall lines; handled tactically.
  - **Traffic-density congestion** — Schiphol's multi-runway, high-frequency operation drives ATC-managed sequencing/holding even in benign weather.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across European upper airspace and have historically closed large volumes of it (2010); the Netherlands sits directly under the typical drift path from Iceland. **VAAC London** is the responsible advisory centre.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET (convection, marine weather), **VAAC London** volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class per Schiphol TMA sub-sector (1–8)** — stated at a high level (C/D predominant); not individually mapped.
- Exact **Amsterdam FIR boundary orientation** with London (EGTT) across the North Sea, and the precise extent of the shared boundary with Langen (EDGG) — not individually re-verified here.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 — confirm per-sector at planning.
- Current extent of **offshore wind-farm/rig restricted areas** over the Dutch North Sea sector.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **LVNL eAIP Netherlands — ENR sections**: ENR 1.4 (ATS airspace classification and description), GEN 3.3 (air traffic services). Primary source of record for FIR structure, classes, Schiphol TMA structure — https://eaip.lvnl.nl/web/2024-08-22-AIRAC/html/eAIP/EH-ENR-1.4-en-GB.html (retrieved 2026-08-02).
- **EUROCONTROL — About Maastricht UAC** (Amsterdam-FIR upper airspace above FL245 provided by Maastricht UAC; area of responsibility incl. Netherlands, Belgium, Luxembourg, north-west Germany) — https://www.eurocontrol.int/info/about-our-maastricht-upper-area-control-centre (retrieved 2026-08-02).
- **EUROCONTROL — Free Route Airspace at Maastricht UAC (FRA@MUAC)** — https://www.eurocontrol.int/service/free-route-airspace-maastricht-uac (retrieved 2026-08-02).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
