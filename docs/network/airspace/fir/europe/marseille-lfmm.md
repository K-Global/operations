# Marseille (LFMM) — FIR Briefing

**Scope:** single FIR — south-eastern France and the western Mediterranean · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Bordeaux (LFBB) W · Paris (LFFF) / Reims (LFEE) N · Geneva (LSAG, Switzerland) NE · Roma (LIRR, Italy) E · Barcelona (LECB, Spain) SW
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Marseille is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. It combines **Alpine terrain in the north-east** with a **Mediterranean maritime sector to the south**, and hosts the **Nice-Côte d'Azur (LFMN)** terminal, one of the more terrain-constrained approaches in the France network. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (LFMN, LFML, LFMT, LFLL) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LFMM** — Marseille FIR, lower airspace **SFC–FL195**; above FL195 the **single unified France UIR** applies, worked by the **same Marseille (Aix-en-Provence) ACC** — no separate upper-area centre |
| Controlling ATSU / ANSP | **Marseille ACC (LFMM), DSNA** — the control centre is physically at **Aix-en-Provence**. ANSP: **DSNA — Direction des Services de la Navigation Aérienne** |
| Airspace class & vertical limits | 🟧 FIR/UIR base classification **Class G** outside established structure; controlled **CTA/TMA/UTA predominantly Class C** — confirm exact per band at **AIP ENR 1.4/2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (Nice terrain-constrained arrivals) · **RNP APCH** — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B**; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **French + English** |
| Key hazard(s) | The **Alps** (Écrins massif ~13,458 ft; Mercantour massif close behind Nice) form high terrain in the FIR's north-east, with **Nice-Côte d'Azur (LFMN)** approach specifically terrain-constrained; the FIR also extends over the **western Mediterranean** toward Corsica and the Italian boundary; summer convection; ash wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). French + English. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310 amending 29/2009) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory (EU 2017/386). |
| Terrain / MORA / driftdown | 🟥 | **Alps** — Écrins massif (~13,458 ft) and the Mercantour massif immediately behind **Nice (LFMN)** — the most significant terrain in the France network. Cruise levels clear it comfortably, but terminal/approach terrain at Nice and driftdown routing near the Alpine boundary are genuine considerations. §8. |
| Diversion-aerodrome coverage | 🟩 | Good — LFMN/LFML/LFMT/LFLL all inside the FIR; curated briefs exist for all four (§9). |
| Special-use airspace (military / danger) | 🟧 | Military TRA/TSA activated **daily via AUP/UUP**; CDR1/2/3 open/close accordingly; RAD governs flyable levels/segments. Proximity to **Italian "dangerous" airspace** near the Roma/Marseille boundary requires coordination. Confirm active at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Marseille FIR covers **south-eastern France** — Provence-Alpes-Côte d'Azur, the southern Rhône valley, and the **western Mediterranean Sea** out toward Corsica and the maritime boundary with Algiers (DAAA) further south. Reported FIR area is on the order of **~305,000 km²** with a perimeter of **~3,100 km** — the largest of the five French FIRs, owing to its maritime extent.
- **Vertical split:** 🟩 **Lower airspace SFC–FL195** is Marseille ACC's own FIR. Above FL195, **France's single unified UIR** applies — the same **Marseille ACC (LFMM, DSNA)** continues to control its own upper-airspace slice.
- **Adjacent FIRs (by boundary):**
  - **W — Bordeaux (LFBB, DSNA).**
  - **N — Paris (LFFF) / Reims (LFEE), DSNA.**
  - **NE — Geneva (LSAG, skyguide), Switzerland.**
  - **E — Roma (LIRR, ENAV), Italy.** 🟧 Coordination procedures exist here due to **Italian "dangerous" airspace partially located within the Marseille FIR** near the Roma/Marseille boundary — confirm current extent and status against the ENAV/DSNA Letter of Agreement.
  - **SW — Barcelona (LECB, ENAIRE), Spain.**
  - **S — maritime boundary** over the western Mediterranean, ultimately approaching the **Algiers FIR (DAAA)** further south across open water.
- **Sectorisation:** 🟧 Marseille Control is reported organised around **two primary sectors** (**LFMM_S_CTR** south and **LFMM_NW_CTR** north-west) with an upper subsector (**LFMM_U_CTR**) that may open on top of both, per third-party sector documentation; confirm current sectorisation against the DSNA AIP.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **Marseille ACC (LFMM, DSNA)**, physically sited at **Aix-en-Provence** — radar/surveillance control, SFC–FL195, including the Nice, Marseille-Provence, Montpellier and Lyon-Saint-Exupéry approaches.
- **Upper-airspace ATSU:** 🟩 **Marseille ACC (LFMM, DSNA)** continues above FL195 as part of the unified **France UIR** — no internal FIR/UIR handoff.
- **FIS / FSS:** French **FIS** (DSNA) for lower/uncontrolled airspace outside CTR/TMA/CDR structure.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Marseille FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute; **RNP 1** terminal SID/STAR, of particular relevance to the terrain-constrained Nice arrival; **RNP APCH** — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios (**Commission Implementing Regulation (EU) No 1079/2012**).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — Marseille ACC participates in the Link 2000+ area. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit through Marseille FIR is worked by **Marseille Control** enroute, feeding the Nice/Marseille-Provence/Montpellier/Lyon approaches, then handed to the adjacent ACC (Bordeaux/Paris/Reims) or across the borders to Geneva/Roma/Barcelona at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** French **FIS** (DSNA).
- **Language:** 🟩 **French and English**.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **French FRA applies in the Marseille ACC upper airspace above FL195.** Marseille was among the second wave of DSNA centres (with Reims) to go live, on **21 February 2024**, taking French FRA coverage above FL195 to ~70%. Per the March 2026 DSNA/FABEC announcement, France now has **FRA fully deployed above FL305 (100%)**, with **full FL195 nationwide FRA targeted by 2028**.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and where the RAD restricts direct routeing, the fixed **ATS-route network** applies, including the SID/STAR feeder structure into Nice, Marseille-Provence, Montpellier and Lyon-Saint-Exupéry.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary (including the Geneva/Roma/Barcelona interfaces) and the terminal transition fixes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Nice-Côte d'Azur (LFMN)**, **Marseille-Provence (LFML)**, **Montpellier-Méditerranée (LFMT)**, **Lyon-Saint-Exupéry (LFLL)**. Terminal detail is in the airport briefings (§9). 🟧 Lyon sits toward the north-western edge of the Marseille FIR, close to the Reims/Paris boundary zone — confirm exact FIR membership against the current DSNA AIP if routing close to that edge.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟥 the **Alps** are the defining terrain feature — the **Écrins massif (Barre des Écrins, ~13,458 ft / 4,102 m)** and the **Mercantour massif** (immediately behind Nice) put a substantial high-terrain belt across the FIR's north-eastern quadrant. Away from the Alpine belt, the Rhône valley and Mediterranean coastal plain (Marseille, Montpellier) are low-lying.
- **Boundary terrain:** 🟧 the highest Alpine peaks (**Mont Blanc, ~15,777 ft**) sit near the France/Italy/Switzerland tripoint north of this FIR — confirm exact FIR containment against the current AIP; not asserted as inside Marseille FIR here.
- **Nice terrain note:** 🟥 **Nice-Côte d'Azur (LFMN)** sits on a narrow coastal shelf with the **Mercantour foothills rising sharply immediately north/inland** — one of the more terrain-constrained approach environments in the France network. Full terminal terrain, obstacle and approach-procedure detail lives in the LFMN airport briefing (§9); this FIR brief flags the terrain's presence at the enroute/terminal interface.
- **Driftdown / depressurisation escape:** 🟧 the Alpine belt is a genuine driftdown/escape-routing consideration for traffic transiting the FIR's north-eastern quadrant near Nice/the Italian boundary — plan diversion/escape routing accordingly; the Mediterranean coastal corridor and Rhône valley are unaffected.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter, and of particular relevance at Alpine-adjacent Nice — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Nice-Côte d'Azur | **LFMN** | In-FIR alternate (SE, terrain-constrained) | [LFMN brief](../../../destinations/europe/france/lfmn/index.md) |
| Marseille-Provence | **LFML** | In-FIR alternate (central/S) | [LFML brief](../../../destinations/europe/france/lfml/index.md) |
| Montpellier-Méditerranée | **LFMT** | In-FIR alternate (SW) | [LFMT brief](../../../destinations/europe/france/lfmt/index.md) |
| Lyon-Saint-Exupéry | **LFLL** | In-FIR alternate (N, near Reims/Paris boundary) | [LFLL brief](../../../destinations/europe/france/lfll/index.md) |

- **Coverage note:** 🟩 good along the Mediterranean coastal corridor and up the Rhône valley to Lyon; 🟧 the Alpine north-east corner has thinner coverage — Nice itself is the natural alternate there, but confirm terrain-clearance routing to any alternate when operating close to the Mercantour/Écrins belt.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 French airspace here carries **military TRA/TSA** activated **daily via the AUP/UUP**; associated **Conditional Routes (CDR1/2/3)** open/close accordingly, and the **RAD** governs flyable levels/segments. The SimBrief route is validated against the current RAD — confirm active TRAs/CDRs at planning.
- **Danger / restricted / prohibited areas:** 🟧 **Italian "dangerous" airspace partially located within the Marseille FIR** near the Roma/Marseille boundary requires standing coordination between the two ACCs; additional danger areas exist over parts of the Alps and the Mediterranean (military/naval training); pull current AIP/NOTAM detail at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules, attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any French refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Alpine orographic effects** — mountain wave, turbulence and rapid cloud/thunderstorm build-up over the Écrins/Mercantour belt, with a direct effect on the Nice arrival; handled tactically at cruise, but a planning factor for terminal ops.
  - **Mediterranean convection** — summer embedded CB and occasional autumn "Cévenol"-type intense rain events over the coastal/Rhône corridor.
  - **Mistral wind** — a strong, dry, north-to-south wind down the Rhône valley affecting the Marseille-Provence/Montpellier area, primarily a terminal/low-level phenomenon.
  - **Winter terminal icing / low visibility** at the terminal aerodromes — see the airport briefings and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — both **Icelandic** (VAAC London) and **Mediterranean-origin** (e.g. Italian volcanic activity, within **VAAC Toulouse's** area of responsibility covering the wider Mediterranean/Africa region) ash events are plausible strategic wildcards for this FIR given its Mediterranean/Italian-boundary position — more so than the more northerly French FIRs.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET (convection, mountain wave, Mistral), **VAAC London / VAAC Toulouse** volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** (AIP ENR 2.1) — stated as Class G base / Class C predominant; not individually re-verified.
- **Lyon-Saint-Exupéry (LFLL)** exact FIR membership near the Reims/Paris/Marseille tripoint — confirm against the current DSNA AIP; presented here per the confirmed served-airport list but flagged for boundary verification.
- **Mont Blanc / Alpine tripoint** exact FIR containment (France/Italy/Switzerland corner) — not asserted as inside Marseille FIR; confirm against the current AIP if routing near that corner.
- **Italian "dangerous" airspace** within the Marseille FIR near the Roma boundary — confirm current lateral/vertical extent and status against the ENAV/DSNA Letter of Agreement.
- Marseille ACC current **sectorisation** (LFMM_S_CTR/LFMM_NW_CTR/LFMM_U_CTR) — stated from third-party sector documentation, not independently re-verified against the DSNA AIP.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **DSNA / SIA France AIP — ENR sections**: ENR 1.4, 1.6, 1.7/1.8, 2.1, 3.x/5.x — https://www.sia.aviation-civile.gouv.fr (retrieved 2026-07-26).
- **DSNA / DGAC — Free Route Airspace implementation** (Reims/Marseille added 21 Feb 2024; FL305 100% March 2026; FL195 nationwide targeted 2028) — https://www.atc-network.com/atc-news/dsna-france/extension-of-free-route-airspace-in-france and https://canso.org/free-route-airspace-across-fabec-free-route-is-now-fully-deployed-in-the-french-airspace/ (retrieved 2026-07-26).
- **EUROCONTROL — Free Route Airspace** concept & implementation — https://www.eurocontrol.int/concept/free-route-airspace (retrieved 2026-07-26).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410).
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR; (EU) 2015/310 (amending 29/2009) — Data Link/CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR; (EU) No 923/2012 — SERA.
- **Met Office / Météo-France — VAAC designations** — https://www.metoffice.gov.uk/services/transport/aviation/regulated/international-aviation/vaac/index and https://vaac.meteo.fr (retrieved 2026-07-26).
- **IVAO France / Italy-sourced sector documentation** — Marseille ACC structure (LFMM_S_CTR/LFMM_NW_CTR/LFMM_U_CTR), FIR area/perimeter figures, and the Roma-Marseille (LIRR-LFMM) Letter of Agreement re: Italian dangerous airspace — https://storage.ivao.fr/ao_public/LOA/Inter/Etranger/LOA-LIRR-LFMM_EN_v6.pdf and https://www.avdelphi.com/atczone.html?id=185 (retrieved 2026-07-26). *Tier-4 corroboration only — sectorisation, boundary and FIR-size detail cross-checked here, not independently re-verified against the DSNA/ENAV AIPs.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
