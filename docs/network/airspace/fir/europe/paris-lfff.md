# Paris (LFFF) — FIR Briefing

**Scope:** single FIR — northern France, the Paris Basin and the Paris metropolitan area · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Reims (LFEE) E · Brest (LFRR) W (upper delegation FL295+) · Bordeaux (LFBB) S · Brussels (EBBU) NE · London (EGTT, NATS) N across the Channel
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Paris is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment, but it is the **busiest and most structurally complex FIR in the France network** owing to the Charles-de-Gaulle/Orly dual-hub TMA. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (LFPG, LFPO, LFOB, LFQQ) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LFFF** — Paris FIR, lower airspace **SFC–FL195**; above FL195 the **single unified France UIR** applies, worked by the **same Paris ACC** — France does not split FIR/UIR between two separate ATSUs the way DFS splits Langen/Karlsruhe |
| Controlling ATSU / ANSP | **Paris ACC (LFFF), DSNA** — one ATSU controls both the FIR and the overlying UIR slice. ANSP: **DSNA — Direction des Services de la Navigation Aérienne** |
| Airspace class & vertical limits | 🟧 FIR/UIR base classification is **Class G** outside established structure; the controlled **CTA/TMA/UTA network is predominantly Class C** (Class D in parts of the Paris TMA) — confirm exact class per band at **AIP ENR 1.4/2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (dense CDG/Orly SID/STAR) · **RNP APCH** arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B**; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **French + English** (English available on IFR/GAT frequencies) |
| Key hazard(s) | Benign terrain — the Paris Basin is lowland throughout. The defining hazard is **traffic-density/structural complexity** around the **Charles-de-Gaulle (LFPG) / Orly (LFPO)** dual-hub TMA (layered SID/STAR, holding stacks, sequencing); the permanent **LF-P23 Paris prohibited area** over the city centre; summer convection; Icelandic volcanic ash the strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). French + English; English always available on controlled sectors. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310 amending 29/2009) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory (EU 2017/386). |
| Terrain / MORA / driftdown | 🟩 | Low. Paris Basin lowland throughout the FIR; no significant terrain belt. Not a cruise factor. §8. |
| Diversion-aerodrome coverage | 🟩 | Dense — LFPG/LFPO/LFOB/LFQQ all inside the FIR; curated briefs exist for all four (§9). |
| Special-use airspace (military / danger) | 🟧 | **LF-P23** permanent prohibited area over central Paris (GND–6,500 ft); dense **military TSA/TRA and CDR** activated via AUP/UUP; RAD governs flyable levels/segments. Confirm active at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Paris FIR covers **northern France** — the Paris Basin, the Île-de-France region around the capital, and the approaches to Picardie/Nord in the north (feeding Lille). It sits at the hub of the French ACC network, bordered by all three of Reims, Brest and Bordeaux.
- **Vertical split:** 🟩 **Lower airspace SFC–FL195** is Paris ACC's own FIR. Above FL195, **France operates a single unified UIR (no separate upper-area centre)** — the same **Paris ACC (LFFF, DSNA)** continues to control its own upper-airspace slice. This is a structural contrast with Germany's Langen/Karlsruhe (EDGG/EDUU) FIR/UAC split: **French ACCs are FIR+UIR combined**.
- **Adjacent FIRs (by boundary):**
  - **E — Reims (LFEE, DSNA).** North-eastern French FIR.
  - **W — Brest (LFRR, DSNA).** 🟧 A slice of the Paris **UTA (upper airspace)** to the west is delegated to Brest ACC from **FL295 to UNL** whenever Brest ACC is active (per DSNA/IVAO letter-of-agreement structure) — confirm against the current AIP.
  - **S — Bordeaux (LFBB, DSNA).** South-western French FIR.
  - **NE — Brussels (EBBU, skeyes).** Belgian FIR; Maastricht UAC (EDYY) owns the Belgian upper airspace above FL245.
  - **N — London (EGTT, NATS)** across the Channel; the London Terminal Manoeuvring Area sits further north still.
- **Sectorisation:** 🟧 Paris Control is organised around primary sectors (reported as **LFFF_CTR** and **LFFF_F_CTR** in third-party sector documentation) with further splits as traffic requires; the transit-relevant fact is **SFC–FL195 lower / FL195–UNL upper, both Paris ACC**. Confirm current sectorisation against the DSNA AIP — not individually re-verified here.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **Paris ACC (LFFF, DSNA)** — radar/surveillance control, SFC–FL195, including the CDG/Orly TMA feed and the Beauvais/Lille approaches.
- **Upper-airspace ATSU:** 🟩 **Paris ACC (LFFF, DSNA)** continues above FL195 as part of the unified **France UIR** — no separate UAC to hand off to internally; the cruise band for our transits sits within the same ATSU.
- **FIS / FSS:** French **flight information service** (DSNA) for lower/uncontrolled airspace outside CTR/TMA/CDR structure; not a factor for an IFR hub transit remaining in controlled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Paris FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute; **RNP 1** for the dense CDG/Orly terminal SID/STAR structure; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**). Set channels precisely.
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — Paris ACC participates in the Link 2000+ area. Continental mandate, **not** an oceanic FANS-1/A requirement; VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit through Paris FIR is worked by **Paris Control** across its enroute sectors, feeding the CDG/Orly approach/TMA, then handed to the adjacent French ACC (Reims/Brest/Bordeaux) or Brussels/London at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** French **FIS** (DSNA) for information service outside controlled structure.
- **Language:** 🟩 **French and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **French FRA applies in the Paris ACC upper airspace above FL195** — Paris was one of the first three DSNA centres (with Bordeaux and Brest) to go live with Free Route on **2 December 2021** (~50% of French upper airspace at the time). Coverage expanded nationally and, per the March 2026 DSNA/FABEC announcement, France now has **FRA fully deployed above FL305 (100%)**; DSNA's stated target is **full FL195 nationwide FRA by 2028**. Direct point-to-point routeing between defined entry/exit points is therefore the norm for most of the Paris ACC cruise band today.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and where the RAD restricts direct routeing, the **fixed ATS-route network** applies, including the SID/STAR feeder structure into the CDG/Orly TMA and the Beauvais/Lille approaches.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding CDG/Orly; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Paris — Charles-de-Gaulle (LFPG)**, **Paris — Orly (LFPO)**, **Beauvais-Tillé (LFOB)**, **Lille-Lesquin (LFQQ)**. Terminal detail is in the airport briefings (§9). 🟧 Lille's precise proximity to the Reims/Brussels boundary is noted — confirm exact FIR membership at planning if routing close to the northern edge.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 **low throughout** — the Paris Basin is a lowland sedimentary basin with no significant relief; the highest local features (Île-de-France plateaux) are a few hundred feet. Not a cruise-level factor at any planned level.
- **Boundary terrain:** 🟩 none of operational significance — neighbouring FIRs (Reims, Brest, Bordeaux, Brussels, London) are similarly low in the immediate boundary zone.
- **Driftdown / depressurisation escape:** not a constraint anywhere in this FIR; the **very high diversion-field density** (LFPG/LFPO/LFOB/LFQQ all inside, plus the wider Paris-region secondary aerodrome network) removes any terrain-limited escape problem.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter, not in enroute cruise — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Paris — Charles-de-Gaulle | **LFPG** | Primary hub / dep-return alternate | [LFPG brief](../../../destinations/europe/france/lfpg/index.md) |
| Paris — Orly | **LFPO** | Secondary Paris hub / in-FIR alternate | [LFPO brief](../../../destinations/europe/france/lfpo/index.md) |
| Beauvais-Tillé | **LFOB** | Minor in-FIR alternate (N) | [LFOB brief](../../../destinations/europe/france/lfob/index.md) |
| Lille-Lesquin | **LFQQ** | In-FIR alternate (N, near Belgian border) | [LFQQ brief](../../../destinations/europe/france/lfqq/index.md) |

- **Coverage note:** 🟩 dense — CDG and Orly give very high-capacity dep/return alternates; Beauvais and Lille give northern redundancy. **ETP/critical-point planning is not a driver** in this radar-controlled continental FIR.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 French airspace carries **military TRA/TSA** activated **daily via the AUP/UUP** (Airspace Use Plan / Updated Use Plan); associated **Conditional Routes (CDR1/2/3)** open and close accordingly, and the **RAD (Route Availability Document)** governs which levels/segments are flyable. The SimBrief route is validated against the current RAD — confirm active TRAs/CDRs at planning.
- **Danger / restricted / prohibited areas:** 🟥 **LF-P23 "Paris"** — a **permanent prohibited area** over the city centre (Île-de-France core), **GND–6,500 ft**, established for security reasons. Below normal approach/departure profiles and airway structure for a jet transit, but noted as a fixed feature of the FIR. Additional **ED/EDR-equivalent danger areas** exist regionally — pull current AIP/NOTAM detail at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any French refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies inside this FIR. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Summer convection** — embedded CB/hail/squall lines over northern France; thunderstorm avoidance and turbulence handled tactically.
  - **Winter terminal icing / low visibility / snow** at CDG/Orly — a terminal, not enroute, driver; see the airport briefings and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across European upper airspace; **VAAC London** is the ICAO-designated advisory centre for Icelandic-origin ash. **VAAC Toulouse** (Météo-France) is France's own ICAO-designated centre, with an area of responsibility covering the wider Mediterranean/Africa region and acting as reciprocal backup to London. A live SIGMET/VA advisory from either is the one thing that would materially threaten this otherwise-benign FIR.
  - **Space weather:** negligible at these mid-latitudes — no HF/GNSS-degradation planning driver here.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET (convection, turbulence), **VAAC London / VAAC Toulouse** volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** (AIP ENR 2.1) — stated as Class G base / Class C predominant in controlled TMA/UTA; not individually re-verified.
- **Paris UTA delegation to Brest ACC (FL295–UNL, western slice)** — confirm current activation conditions and lateral extent against the DSNA AIP.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 (EU datalink area) — confirm per-sector at planning.
- **Lille-Lesquin (LFQQ)** proximity to the Reims/Brussels FIR boundary — confirm exact FIR membership against the current DSNA AIP if routing close to the northern edge.
- **LF-P23** exact current lateral/vertical definition and any NOTAM'd temporary extensions — confirm at planning if operating below 6,500 ft near central Paris (not expected on a normal airline profile).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **DSNA / SIA France AIP — ENR sections** (Service de l'Information Aéronautique): ENR 1.4 (airspace classification), 1.6 (surveillance/ADS-B), 1.7/1.8 (RVSM, comms-failure), 2.1 (FIR/UIR & control-area structure), 3.x/5.x (ATS routes, CDR, restricted/prohibited areas) — https://www.sia.aviation-civile.gouv.fr (retrieved 2026-07-26).
- **DSNA / DGAC — Free Route Airspace implementation** (Paris/Bordeaux/Brest live 2 Dec 2021; Reims/Marseille added Feb 2024; FL305 100% March 2026; FL195 nationwide targeted 2028) — https://www.atc-network.com/atc-news/dgac-france/implementation-of-free-route-in-france-an-even-more-environmentally-friendly-fabec-airspace and https://canso.org/free-route-airspace-across-fabec-free-route-is-now-fully-deployed-in-the-french-airspace/ (retrieved 2026-07-26).
- **EUROCONTROL — Free Route Airspace** concept & implementation — https://www.eurocontrol.int/concept/free-route-airspace (retrieved 2026-07-26).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.
- **Met Office / Météo-France — VAAC designations** (London VAAC — Icelandic-origin ash; Toulouse VAAC — Mediterranean/Africa AoR, reciprocal backup) — https://www.metoffice.gov.uk/services/transport/aviation/regulated/international-aviation/vaac/index and https://vaac.meteo.fr (retrieved 2026-07-26).
- **IVAO France / DSNA-sourced sector documentation** — Paris ACC sector structure (LFFF_CTR/LFFF_F_CTR) and Paris–Brest UTA delegation (FL295+) — https://www.ivao.fr/en/pages/lfee and associated Letters of Agreement (retrieved 2026-07-26). *Tier-4 corroboration only — sectorisation and delegation detail cross-checked here, not independently re-verified against the DSNA AIP.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
