# München (EDMM) — FIR Briefing

**Scope:** single FIR — southern & eastern Germany (Bavaria and adjoining Franconia, incl. the **Munich (EDDM)** hub and the Bavarian Alps) · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Langen (EDGG) N/NW · Wien (LOVV) SE/E · Praha (LKAA) NE · Switzerland (LSAS) SW
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. München is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (EDDM, EDDN …) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **EDMM** — München FIR, lower airspace **GND–FL245**; upper airspace **above FL245** is **Karlsruhe UAC (EDUU)** — the same DFS upper-area unit that owns the Langen-FIR upper airspace |
| Controlling ATSU / ANSP | **München ACC (EDMM, DFS)** lower · **Karlsruhe UAC (EDUU, DFS)** upper. ANSP: **DFS Deutsche Flugsicherung** |
| Airspace class & vertical limits | 🟧 **Class C** predominant in controlled upper airspace; lower TMA/CTA Class C/D, Class E/G below — confirm exact class letter per band at **AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **German + English** (English always available) |
| Key hazard(s) | 🟥 **The Bavarian/Northern Alps** in the southern part of the FIR — the highest terrain in Germany (Zugspitze, ~2,962 m / 9,718 ft) sits here. Otherwise benign — dense military TRA/TSA + ED-R activated by AUP/UUP; Icelandic volcanic ash the strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). German + English; English always available. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet (EU 2017/386). |
| Terrain / MORA / driftdown | 🟥 | **Bavarian Alps** in the south of the FIR — this is where the German terrain step-up flagged in the Langen (EDGG) brief actually sits. Grid MORA rises significantly toward the Austrian border; exact grid-MORA values not sourced here — verify current charts. §8. |
| Diversion-aerodrome coverage | 🟩 | Munich (EDDM) is the home-hub-class field inside the FIR; Nuremberg (EDDN) gives northern coverage. Curated briefs exist for both (§9). |
| Special-use airspace (military / danger) | 🟧 | Military **TRA/TSA and ED-R** areas activated **daily via AUP/UUP**; CDR1/2/3 open/close accordingly; **RAD** governs flyable levels/segments. Confirm active at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** München FIR covers **southern and eastern Germany** — Bavaria (Munich, the Bavarian Alps and Alpine foothills) and Franconia (Nuremberg) in the north-east of the FIR. It is the south-eastern of the three German FIRs, bordering **Langen (EDGG)** to the north/north-west.
- **Vertical split:** 🟩 **Lower airspace GND–FL245** is worked by **München ACC (EDMM)**. **Upper airspace above FL245** is worked by **Karlsruhe UAC (EDUU)** — the same DFS unit that provides the Langen-FIR upper airspace; FRA is implemented jointly across EDUU/Karlsruhe UAC and EDMM/München ACC above FL245.
- **Adjacent FIRs (by boundary):**
  - **N/NW — Langen (EDGG, DFS).** Central/south-western German FIR; the shared boundary is a Letter-of-Agreement-defined line, not a terrain feature.
  - **NE — Praha (LKAA), Czech Republic.**
  - **SE/E — Wien (LOVV), Austria.** 🟧 the boundary here is not a simple straight line: published Letters of Agreement describe specific permanent delegations — e.g. airspace **west of the "ROCKY" line** delegated from Wien FIR to München FIR (except the Innsbruck area of responsibility), and airspace over the **Königssee area** delegated the other way, from München FIR to Wien FIR. Treat the München/Wien boundary as a negotiated line with local exceptions, not a clean geographic split — confirm current delegations before relying on this for planning.
  - **SW — Switzerland (LSAS, skyguide).**
- **Sectorisation:** München ACC and Karlsruhe UAC are each divided into multiple ACC sectors that combine/split with traffic and staffing; the transit-relevant fact is the **GND–FL245 (München ACC) / FL245+ (Karlsruhe UAC)** band split.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **München ACC (EDMM, DFS)** — radar/surveillance control, GND–FL245, including the Munich (EDDM) approach/TMA feed and the other in-FIR terminals.
- **Upper-airspace ATSU:** 🟩 **Karlsruhe UAC (EDUU, DFS)** — radar/surveillance control of the upper airspace above FL245; the cruise band for our transits sits here. This is the same UAC referenced in the Langen (EDGG) brief.
- **FIS / FSS:** German **Flight Information Service (FIS)** provided by DFS for lower/uncontrolled airspace; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the München FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute across ECAC upper airspace; **RNP 1** for terminal SID/STAR at the busy terminals; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**; full implementation completed 31 Dec 2018).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — Karlsruhe UAC participates. VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is handed sequentially **München ACC (lower) → Karlsruhe UAC (upper)** and onward to the adjacent-FIR ACC/UAC at the boundary (Wien, Praha, Switzerland, or back to Langen); the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** German **FIS** (DFS) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **German and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **German FRA (DFS) applies in the upper airspace, FL245 and above** — DFS FRA covers its full area of responsibility, explicitly including **FIR München**, alongside FIR Bremen and UIR Rhein/EDUU; H24 availability was reached across the DFS AoR from **10 Oct 2019**. Much of the cruise across the München upper airspace is therefore direct rather than airway-constrained.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and where the RAD restricts direct routeing, the **fixed ATS-route network** applies — including the SID/STAR feeder structure into the Munich (EDDM) TMA and Nuremberg (EDDN).
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding Munich; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Munich (EDDM)** and **Nuremberg (EDDN)**. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟥 the **Bavarian/Northern Alps** rise along the southern edge of the FIR toward the Austrian border — this is the highest terrain in Germany, including the **Zugspitze (~2,962 m / 9,718 ft)**. This is the terrain step-up explicitly flagged (but not owned) by the Langen (EDGG) brief. 🟧 Exact grid-MORA values across the Alpine sectors are **not sourced here** — verify against the current enroute chart/AIP before relying on them for driftdown planning.
- **Boundary terrain:** the Alps continue across the boundary into **Austria (Wien FIR, LOVV)** and **Switzerland (LSAS)** — a continuous Alpine terrain system rather than a feature confined to one FIR.
- **Driftdown / depressurisation escape:** 🟧 the only German FIR where Alpine terrain is a genuine planning factor for one-engine-inoperative driftdown / emergency-descent routing. Mitigations: dispatch-planned escape routing over lower terrain where the routing allows, and the diversion-aerodrome density at Munich/Nuremberg and just across the boundary. Detailed driftdown procedures are a dispatch/performance-planning matter, not re-derived here.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter (Munich in particular, given elevation and Alpine proximity) — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Munich | **EDDM** | Home-hub-class field / primary in-FIR alternate | [EDDM brief](../../../destinations/europe/germany/eddm/index.md) |
| Nuremberg | **EDDN** | In-FIR alternate (N) | [EDDN brief](../../../destinations/europe/germany/eddn/index.md) |

- **Coverage note:** 🟧 thinner than the other two German FIRs — only two curated in-FIR fields, and the southern part of the FIR is dominated by Alpine terrain with limited alternates. Munich and Nuremberg cover the north/central part of the FIR well; a driftdown scenario over the Alps has fewer options than a driftdown scenario over the flatter Langen or Bremen FIRs — factor this into route/alternate planning near the Austrian boundary.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 German airspace carries **extensive military TRA/TSA** activated **daily via the AUP/UUP** (Airspace Use Plan / Updated Use Plan); associated **Conditional Routes (CDR1/2/3)** open and close accordingly, and the **RAD (Route Availability Document)** governs which levels/segments are flyable. The SimBrief route is validated against the current RAD — confirm active TRAs/CDRs at planning.
- **Danger / restricted / prohibited areas:** 🟧 numerous **ED-R (restricted)** and **ED-D (danger)** areas across the FIR (ranges, military training, Alpine live-fire areas). Named areas and status are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any German refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Alpine weather** — mountain wave/turbulence, rapid weather changes, and winter icing/snow around the Alpine terminals; foehn wind effects at Munich are a known local phenomenon.
  - **Summer convection** — embedded CB / hail / squall lines, often enhanced by Alpine orographic lift; thunderstorm avoidance and turbulence handled tactically.
  - **Winter terminal icing / low visibility / snow** at Munich and Nuremberg — a terminal, not enroute, driver; see the airport briefings and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across European upper airspace and have historically closed large volumes of it (2010). **VAAC London** is the responsible advisory centre.
  - **Space weather:** negligible at these mid-latitudes — no HF/GNSS-degradation planning driver here.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET (convection, mountain wave/turbulence), **VAAC London** volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **grid-MORA values across the Alpine sectors** of the FIR — flagged as a genuine driftdown/escape-routing factor but not individually sourced here.
- Exact **airspace class letter per band** (AIP ENR 2.1) — not individually re-verified.
- The **München FIR / Wien FIR boundary** near the Alps (ROCKY-line delegation, Innsbruck AoR exception, Königssee delegation) — confirm current status; the boundary carries local exceptions rather than a single clean line.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 — confirm per-sector at planning.
- Thin diversion-aerodrome coverage in the Alpine southern part of the FIR — consider whether a third in-FIR or near-boundary field brief is warranted.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **DFS AIP Germany — ENR sections** (Deutsche Flugsicherung GmbH): ENR 1.4 (airspace classification), 1.6 (surveillance/ADS-B), 1.7/1.8 (RVSM, comms-failure), 2.1 (FIR/UIR & control-area structure), 3.x/5.x (ATS routes, CDR, ED-R/ED-D restricted/danger areas). Primary source of record for FIR structure, classes, routes — https://aip.dfs.de (retrieved 2026-08-02).
- **DFS — Free Route Airspace** (FRA available FL245+; DFS AoR incl. UIR Rhein/EDUU, FIR München, FIR Bremen) — https://www.dfs.de/homepage/en/services/commercial-aviation/free-route-airspace/ (retrieved 2026-08-02).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.
- **Letter of Agreement — München ACC (EDMM) / Karlsruhe UAC (EDUU)** and **Wien ACC / München ACC boundary LoA** (published copies, ATC training libraries) — corroborate the München-FIR upper-airspace unit and the ROCKY-line/Innsbruck/Königssee boundary delegations referenced in §3/§8 — https://atciss.vatsim-germany.org/static/loa/LOP_EDUU.pdf and https://downloads.vacc-austria.org/LoA/LOVV-EDMM.pdf (retrieved 2026-08-02). *Tier-4 corroboration only — used solely to confirm the boundary/coordination relationships exist, not for operational detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
