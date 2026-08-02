# Bucharest (LRBB) — FIR Briefing

**Scope:** single FIR — Romania, including the Black Sea coastal sector · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Budapest (LHCC) NW · Sofia (LBSR) S · Chişinău (LUUU) E · Ukrainian FIRs — Lviv (UKLV) / Odesa (UKOV) N/NE (🟥 currently closed to civil traffic, see §10/§12) · Black Sea international waters SE
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — built from public/AIP/ROMATSA sources; exact boundary coordinates and sectorisation flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Bucharest FIR is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (LROP, LRCL, LRBS) live in the airport briefings (§9). Live restrictions (NOTAMs, GNSS-interference bulletins, AUP/UUP conditional-route status, SIGMETs) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LRBB** — Bucureşti FIR/UIR, believed combined under a single ACC (GND/MSA–FL660); 🟧 confirm whether a separate upper-airspace unit exists |
| Controlling ATSU / ANSP | **Bucureşti ACC (LRBB)**. ANSP: **ROMATSA** (Romanian Air Traffic Services Administration) |
| Airspace class & vertical limits | 🟧 **Class A** in Bucharest TMA; **Class C** in TMA Arad/Constanţa/Napoca, all CTRs, and all airways between MSA–FL105; **Class G** below FL105 outside TMA/CTR/airway. Confirm exact class letter per band at **AIP Romania ENR 1.4/2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM); below FL410 flights heading **180°–359° fly EVEN FL**, flights heading **360°–179° fly ODD FL** — the reverse-parity semicircular rule is a Romania-specific note, confirm before flight-planning tools auto-assign levels |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **Romanian + English** (English available on ACC/APP) |
| Key hazard(s) | 🟥 **GNSS jamming/spoofing over the Black Sea coastal sector and Danube Delta**, attributed to electronic-warfare spillover from the adjacent conflict, ongoing since mid-2024; 🟥 **adjacent Ukrainian FIRs (Lviv/Odesa) closed to civil traffic** — the Bucharest-FIR northern/north-eastern boundary sits directly against restricted/closed airspace. Both factual, neutral operational hazards — not a political assessment. Carpathian terrain is modest and not a cruise factor |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). Romanian + English; English available on ACC/APP sectors. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet (EU 2017/386). |
| Terrain / MORA / driftdown | 🟩 | Low-to-moderate. **Carpathian arc (Moldoveanu Peak ~2,544 m / 8,346 ft)** the highest belt; not a cruise-level factor at FL290+. §8. |
| Diversion-aerodrome coverage | 🟧 | Moderate — LROP is the primary Cat I field; LRCL and LRBS give secondary in-FIR coverage but are smaller-category fields. Coverage is thinner than the German/French core. §9. |
| Special-use airspace (military / danger) | 🟧 | Military TRA/TSA activated via AUP/UUP; confirm active areas at planning. Additionally, **GNSS-interference NOTAMs** function as a de facto navigation hazard overlay in the Black Sea sector — treat as a planning input, not classic SUA. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Bucureşti FIR covers **the whole of Romania**, including the Transylvanian plateau (Cluj/Napoca sector), the southern plain around Bucharest, and the Black Sea coastal sector (Constanţa) extending offshore over Romanian territorial waters.
- **Vertical split:** 🟧 Romania is believed to operate Bucureşti FIR and Bucureşti UIR as a **combined structure under one ACC**, GND/MSA up to **FL660**, unlike the split lower/upper ACC model seen in Germany or France. Confirm against **AIP Romania ENR 2.1** whether a distinct upper-airspace unit or FL split exists.
- **Adjacent FIRs (by boundary):**
  - **NW — Budapest (LHCC, HungaroControl).** Hungarian FIR.
  - **S — Sofia (LBSR, BULATSA).** Bulgarian FIR; coordinated via a Sofia–Bucureşti ACC letter of agreement.
  - **E — Chişinău (LUUU, Moldova ATS).** Moldovan FIR.
  - **N/NE — Ukrainian FIRs: Lviv (UKLV) and Odesa (UKOV).** 🟥 **Both closed to civil aviation** since the NOTAM'd closure of Ukrainian airspace (24 Feb 2022); the Bucureşti-FIR boundary here abuts restricted/closed airspace rather than a normally operating neighbour. No transit or filing across this boundary. Verify current status at planning (§11/§12).
  - **SE — Black Sea (international waters), fronting Russian-administered airspace over Crimea/the eastern Black Sea** at range; not a shared FIR boundary but the source direction of reported GNSS interference (§10).
- **Sectorisation:** Bucureşti ACC is divided into multiple sectors (approximate groupings around Bucharest TMA, Arad TMA, Constanţa TMA, and NAPOC/Cluj TMA); 🟧 exact sector map not verified here — see AIP ENR 2.1/6.

---

## 4. Control & ATSU

- **Lower/upper-airspace ATSU:** 🟩 **Bucureşti ACC (LRBB, ROMATSA)** — radar/surveillance control across the FIR, including the LROP/LRBS Bucharest TMA feed, and the Arad, Constanţa and Napoc(Cluj) TMAs.
- **FIS / FSS:** Romanian **Flight Information Service** provided by ROMATSA for uncontrolled/lower airspace; not a factor for an IFR hub transit remaining in controlled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Bucharest FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM. See [OM E — RVSM Operations](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute; **RNP 1** terminal SID/STAR; **RNP APCH** arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [OM E — PBN and RNP Operations](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**). Continental Link 2000+ mandate for equipped aircraft; VHF voice remains primary. See [OM E — Datalink and Oceanic Procedures](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Bucureşti ACC** sector-to-sector; exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Romanian **FIS** (ROMATSA) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Romanian and English**; English available on ACC/APP.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **Romanian FRA applies above FL105** (FL175 within TMAs), effective **AIRAC 2107 (July 2021)**. Bucureşti FIR is part of the **South-East Europe FRA (SEE FRA)** block together with Bulgaria, Hungary, Slovakia, Czechia and Moldova, with **24-hour (H24) FRA operation** across Romania/Bulgaria/Hungary since November 2019, and cross-border links to the Baltic FRA.
- **Airway spine (where FRA not available / RAD-constrained):** below FL105 (FL175 in TMAs) and where RAD restricts direct routeing, the **fixed ATS-route network** applies, including SID/STAR feeder routes into the Bucharest TMA.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Bucharest Henri Coandă (LROP)** — the principal international gateway; **Bucharest Băneasa (LRBS)** — secondary/business aviation field close to the capital; **Cluj-Napoca (LRCL)** — the main Transylvanian regional gateway. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low-to-moderate. The **Carpathian Mountains** arc through central Romania (the "Carpathian bend"), topping out at **Moldoveanu Peak (~2,544 m / 8,346 ft)**. Not a cruise-level factor at FL290+; more relevant to Cluj-Napoca (LRCL) terminal operations, which sit closer to the Transylvanian plateau/foothills.
- **Boundary terrain:** 🟩 no materially higher terrain immediately across the adjacent FIR boundaries relative to the Carpathian belt already inside Bucureşti FIR.
- **Driftdown / depressurisation escape:** not a cruise-level constraint within Bucureşti FIR at RVSM levels; diversion-field density is moderate rather than dense (§9), so escape planning should account for wider spacing between suitable Cat I fields than in the German/French core.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Bucharest Henri Coandă / Otopeni | **LROP** | Primary international gateway / dep-return alternate | [LROP brief](../../../destinations/europe/romania/lrop/index.md) |
| Cluj-Napoca (Avram Iancu) | **LRCL** | In-FIR alternate — Transylvania regional gateway | [LRCL brief](../../../destinations/europe/romania/lrcl/index.md) |
| Bucharest Băneasa | **LRBS** | Minor in-FIR alternate — secondary/business field near the capital | [LRBS brief](../../../destinations/europe/romania/lrbs/index.md) |

- **Coverage note:** 🟧 moderate — LROP is the natural departure/return alternate with full Cat I facilities; LRCL and LRBS provide secondary in-FIR redundancy but should be checked against category/runway-length requirements for the operating fleet. Not as dense as the western-European core.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 Romanian airspace carries military TRA/TSA activated via **AUP/UUP**; associated conditional routes (CDR) and the **RAD** govern flyable levels/segments. Confirm active areas at planning.
- **Danger / restricted / prohibited areas:** 🟧 named areas AIP/NOTAM-published — pull live at planning.
- **GNSS interference (navigation-hazard overlay):** 🟥 **Recurring GPS jamming and spoofing over the Black Sea coastal sector, Danube Delta, and the Constanţa approach corridor**, reported from mid-2024 onward and attributed to electronic-warfare activity originating from the adjacent Black Sea conflict environment (Crimea-area sources). ROMATSA has issued NOTAMs covering the affected sectors. Effect: false GNSS-derived position/altitude; **crews should brief conventional/INS backup navigation** before operating in or near the coastal sector and report anomalies to ATC. This is a factual, ongoing operational condition — not a political statement.
- **Adjacent restricted/closed airspace:** 🟥 the **Ukrainian FIRs immediately north/north-east of Bucureşti FIR (Lviv UKLV, Odesa UKOV) are closed to civil traffic** (closure NOTAM effective 24 Feb 2022, ongoing). No routing across this boundary; treat the Bucureşti-FIR northern edge as a hard boundary, not a normal FIR handoff.
- **Overflight-permit / diplomatic considerations:** 🟩 none for the FIR itself — standard EU/ECAC operation with no permits required.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP), the current RAD, and **GNSS-interference NOTAMs** at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels). 🟧 Confirm any Romanian refinement at AIP ENR 1.8/GEN.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Navigation-integrity contingency:** 🟥 given the Black Sea GNSS-interference pattern (§10), crews should be prepared to revert to conventional (VOR/DME, INS) navigation if GPS-derived position becomes unreliable, and to report anomalies to ATC per the current NOTAM guidance.
- **Seasonal hazards (durable):**
  - **Summer convection** over the southern plain and Carpathian foothills — tactical avoidance via ATC.
  - **Winter terminal icing / low visibility / snow** at LROP/LRCL/LRBS — a terminal, not enroute, driver; see the airport briefings and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — Icelandic eruptions can propagate ash across European upper airspace; **VAAC London/Toulouse** are the responsible advisory centres for this sector.

> **Pull at planning (T-2h):** enroute NOTAMs (including GNSS-interference bulletins), AUP/UUP (active TRA/CDR) and current RAD, SIGMET/AIRMET, VAAC ash advisories, Ukrainian-airspace closure status, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Whether Bucureşti FIR and UIR are a genuinely **combined single-ACC structure** or carry a lower/upper split — confirm at **AIP Romania ENR 2.1**.
- Exact **adjacent-FIR boundary list and coordinates** (Budapest, Sofia, Chişinău, and the Ukrainian-FIR edge) — confirm against AIP ENR 2.1; this brief lists the commonly cited neighbours but does not assert precise boundary geometry.
- Current **status of the Ukrainian-airspace closure** (Lviv/Odesa FIRs) — re-verify at every planning cycle; this is a live/changing condition, not durable fact.
- Current scope/severity of **Black Sea GNSS interference** — re-verify at planning; treat the §10 description as background context, not a real-time hazard map.
- **CPDLC ATN B1** active-sector list above FL285 — confirm per-sector at planning.
- **Bucureşti ACC sectorisation** map — not independently verified here.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ROMATSA / AIP Romania — ENR sections**: airspace classification, FIR/UIR structure, RVSM semicircular rule, RAD/CDR. Primary source of record — https://www.romatsa.ro (retrieved 2026-07-26).
- **ROvACC — Romanian Airspace reference** (airspace classes, FRA above FL105/FL175, RVSM direction/parity rule) — https://rovacc.ro/romanian-airspace/ (retrieved 2026-07-26).
- **CANSO — "Greener skies: achievements and long-term challenges for ROMATSA"** (FRA rollout context) — https://canso.org/greener-skies-achievements-and-long-term-challenges-for-romatsa/ (retrieved 2026-07-26).
- **Danube FAB / HungaroControl — Hungarian-Romanian-Bulgarian Free Route** (SEE FRA, H24 since Nov 2019) — https://en.hungarocontrol.hu/press-room/news/hungarian-romanian-bulgarian-free-route (retrieved 2026-07-26).
- **Spire Global — GNSS interference report: Black Sea & Romanian airspace** — https://spire.com/blog/space-reconnaissance/gnss-interference-report-black-sea-romanian-airspace/ (retrieved 2026-07-26).
- **RFE/RL — "Suspected Russian GPS Jamming Risks Fresh Dangers In Black Sea Region"** — https://www.rferl.org/a/russia-gps-jamming-black-sea-romania-bulgaria-ukraine/32655397.html (retrieved 2026-07-26).
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR; (EU) 2015/310 — CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR; (EU) No 923/2012 — SERA.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
