# Brussels (EBBU) — FIR Briefing

**Scope:** single FIR — Belgium and Luxembourg (single combined Brussels FIR/UIR for both states) · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Amsterdam (EHAA) N · Langen (EDGG) E · 🟧 Reims/Paris (LFEE/LFFF) S/SW · 🟧 London (EGTT) NW (across the North Sea/Channel)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Brussels is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (EBBR, EBLG, EBOS, ELLX) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **EBBU** — Brussels FIR/UIR, a **single combined FIR covering both Belgium and Luxembourg**, lower airspace **GND–FL245**; upper airspace (**Brussels UIR, above FL245**) is delegated to **Maastricht UAC (EDYY)** |
| Controlling ATSU / ANSP | **skeyes** (Belgian ANSP, formerly Belgocontrol) provides ATS below FL245 across Belgium and — by delegation — most of Luxembourg; **ANA (Administration de la Navigation Aérienne)** is responsible for ATS within the territory of Luxembourg up to the upper limits of the Luxembourg TMA (TMA 1A/1B). **Maastricht UAC (EDYY, EUROCONTROL — multinational: Belgium, Germany, Luxembourg, Netherlands)** provides ATS above FL245 |
| Airspace class & vertical limits | 🟩 Airspace within the Brussels FIR/UIR is subdivided into **Class C, D, E and G** per the Belgium/Luxembourg AIP; exact class per specific TMA/CTR/CTA confirmed at **AIP ENR 1.4/2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area — Maastricht UAC is a lead European datalink provider |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **French/Dutch/German + English** across the two states (English always available on ATC) |
| Key hazard(s) | Low terrain (Ardennes hills in southern Belgium, highest point ~694 m); the defining feature is **airspace density/complexity** — a small FIR sitting at the convergence of the London–Frankfurt–Amsterdam–Paris traffic flows, dense TMA/CTR structure, and numerous military training areas. Icelandic volcanic ash the strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). French/Dutch/German + English; English always available on ATC. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet (EU 2017/386). |
| Terrain / MORA / driftdown | 🟩 | Low throughout — the Ardennes (Belgium/Luxembourg) top out at only ~694 m (Signal de Botrange); not a cruise-level factor. |
| Diversion-aerodrome coverage | 🟩 | EBBR/EBLG/EBOS (Belgium) and ELLX (Luxembourg) all inside the FIR with curated briefs (§9). |
| Special-use airspace (military / danger) | 🟧 | Belgian and Luxembourg military TRA/TSA and danger areas activated via **AUP/UUP**; the low-country airspace is dense with crossing civil and military traffic — confirm active areas at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Brussels FIR/UIR is a **single combined FIR covering both Belgium and Luxembourg** — one of the more unusual FIR arrangements in Europe (two sovereign states, one FIR). It is compact and sits at the geographic centre of the North-West European core traffic area.
- **Vertical split:** 🟩 **Lower airspace GND–FL245** is worked by **skeyes** (Belgium) with **ANA** handling ATS within Luxembourg territory up to the Luxembourg TMA upper limits. **Upper airspace (Brussels UIR) above FL245** is delegated in full to **Maastricht UAC (EDYY)** — EUROCONTROL confirms Maastricht UAC provides voice and data communication services within the Brussels UIR above FL245.
- **Adjacent FIRs (by boundary):**
  - **N — Amsterdam (EHAA, LVNL).** Netherlands.
  - **E — Langen (EDGG, DFS).** Germany.
  - 🟧 **S/SW — Reims (LFEE) / Paris (LFFF), France (DSNA).** Boundary orientation not individually re-verified here.
  - 🟧 **NW — London (EGTT), UK**, across the southern North Sea/Channel — included for completeness; confirm whether this boundary is operationally relevant to typical hub transits.
- **Sectorisation:** skeyes (lower) and Maastricht UAC (upper) each divide their airspace into multiple ACC sectors that combine/split with traffic and staffing; the transit-relevant fact is the **GND–FL245 (skeyes/ANA) / FL245+ (Maastricht UAC)** band split, applied uniformly across the whole combined Belgium/Luxembourg FIR.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **skeyes** (Belgian ANSP) — radar/surveillance control, GND–FL245, across Belgium, including the Brussels (EBBR), Liège (EBLG) and Ostend (EBOS) approach/TMA feeds. **ANA** provides the equivalent service within Luxembourg territory up to the Luxembourg TMA upper limits, feeding Luxembourg (ELLX).
- **Upper-airspace ATSU:** 🟩 **Maastricht UAC (EDYY, EUROCONTROL)** — radar/surveillance control of the entire Brussels UIR above FL245; the cruise band for our transits sits here. Maastricht UAC's wider area of responsibility also covers the Netherlands, Luxembourg and north-west Germany above FL245 (see the Amsterdam (EHAA) and Bremen (EDWW) briefs).
- **FIS / FSS:** national flight information services (Belgium/Luxembourg) for lower/uncontrolled airspace; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Brussels FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute across ECAC upper airspace; **RNP 1** for terminal SID/STAR at the busy terminals; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**; full implementation completed 31 Dec 2018).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — Maastricht UAC participates as a lead European datalink provider; VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is handed sequentially **skeyes/ANA (lower) → Maastricht UAC (upper)** and onward to the adjacent-FIR ACC/UAC at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** national FIS (Belgium/Luxembourg) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **French, Dutch and German are the national languages of the two states**; **English is always available** on ATC frequencies.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **FRA@MUAC applies above FL245** across the entire Brussels UIR (part of Maastricht UAC's wider FL245–FL660 free-route area, H24) — direct point-to-point routeing between defined FRA entry/exit points. Below FL245, the fixed ATS-route network and SID/STAR structure apply, feeding the busy Brussels/Liège/Ostend/Luxembourg terminals.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor, the **fixed ATS-route network** applies across the dense low-country route structure.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding the in-FIR terminals; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Brussels (EBBR)**, **Liège (EBLG)**, **Ostend (EBOS)** — Belgium; **Luxembourg (ELLX)** — Luxembourg. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low throughout. The **Ardennes** (spanning southern Belgium, Luxembourg and adjacent France) are the only relief of note, topping out at **Signal de Botrange (~694 m / 2,277 ft)** in Belgium. Not a cruise-level factor.
- **Boundary terrain:** none of significance across any adjacent boundary.
- **Driftdown / depressurisation escape:** not a constraint — low terrain and a dense diversion-aerodrome network across the FIR remove any terrain-limited escape problem.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter, not in enroute cruise — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Brussels | **EBBR** | Primary in-FIR alternate (Belgium) | [EBBR brief](../../../destinations/europe/belgium/ebbr/index.md) |
| Liège | **EBLG** | In-FIR alternate (E, cargo) | [EBLG brief](../../../destinations/europe/belgium/eblg/index.md) |
| Ostend | **EBOS** | In-FIR alternate (coastal, cargo) | [EBOS brief](../../../destinations/europe/belgium/ebos/index.md) |
| Luxembourg | **ELLX** | In-FIR alternate (Luxembourg) | [ELLX brief](../../../destinations/europe/luxembourg/ellx/index.md) |

- **Coverage note:** 🟩 dense for such a compact FIR — four curated fields spread across Belgium and Luxembourg; a suitable field is always within short range, so **ETP/critical-point planning is not a driver** in this radar-controlled continental FIR.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 Belgian and Luxembourg airspace carries military **TRA/TSA** activated via **AUP/UUP** (Airspace Use Plan / Updated Use Plan); associated **Conditional Routes (CDR1/2/3)** open and close accordingly, and the **RAD (Route Availability Document)** governs which levels/segments are flyable. Given the density of this core-area airspace, confirm active TRAs/CDRs at planning is especially important here.
- **Danger / restricted / prohibited areas:** 🟧 danger/restricted areas exist over military training grounds; named areas and status are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Belgian/Luxembourg refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **North Sea coastal weather** at Ostend (EBOS) — fog, wind; a terminal, not enroute, driver.
  - **Winter fog/low visibility** is a recurring feature of low-country airspace generally (Brussels, Liège) — see the airport briefings and OM E LVO docs.
  - **Summer convection** — embedded CB / squall lines; handled tactically.
  - **Traffic-density congestion** — as one of the most complex core-area FIRs in Europe, expect vectoring/holding and ATC-driven route/level adjustments even in benign weather.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across European upper airspace and have historically closed large volumes of it (2010). **VAAC London** is the responsible advisory centre.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET, **VAAC London** volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **Brussels FIR boundary orientation** with Reims/Paris (LFEE/LFFF) and any relevant London (EGTT) interface — not individually re-verified here.
- Exact **airspace class per specific TMA/CTR/CTA** — stated as C/D/E/G per the AIP generally; not exhaustively mapped.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 — confirm per-sector at planning.
- Precise **skeyes/ANA delegation boundary** within Luxembourg territory (below the Luxembourg TMA upper limits) — stated at a high level; confirm exact vertical/lateral split if planning a Luxembourg-specific transit.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **AIP for Belgium and Luxembourg — ENR sections** (skeyes / AIM Belgium): ENR 1.4 (airspace classification), 2.1 (FIR/UIR structure), 5.1 (danger/restricted/prohibited areas). Primary source of record for FIR structure, classes, routes — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-ENR-1.4-en-GB.html and https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-ENR-2.1-en-GB.html (retrieved 2026-08-02).
- **AIP for Belgium — GEN 3.3/3.4** (ATS units, including the ANA/Luxembourg delegation note) — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-GEN-3.3-en-GB.html (retrieved 2026-08-02).
- **EUROCONTROL — About Maastricht UAC** (Brussels UIR above FL245 provided by Maastricht UAC; area of responsibility incl. Belgium, Luxembourg, Netherlands, north-west Germany) — https://www.eurocontrol.int/info/about-our-maastricht-upper-area-control-centre (retrieved 2026-08-02).
- **EUROCONTROL — Free Route Airspace at Maastricht UAC (FRA@MUAC)** — https://www.eurocontrol.int/service/free-route-airspace-maastricht-uac (retrieved 2026-08-02).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
