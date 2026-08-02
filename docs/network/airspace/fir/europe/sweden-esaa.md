# Sweden (ESAA) — FIR Briefing

**Scope:** single FIR — Sweden (the whole country, a single national FIR), containing **Stockholm-Arlanda (ESSA)** · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Copenhagen (EKDK), Denmark SW, across the Öresund · Norway (ENOR) W · Finland (EFIN) E, across the Gulf of Bothnia/Åland Sea · Bremen (EDWW), Germany S, across the Baltic
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Sweden is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for Stockholm-Arlanda (ESSA) live in the airport briefing (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **ESAA** — Sweden FIR (single national FIR covering the whole country) |
| Controlling ATSU / ANSP | **LFV (Luftfartsverket)** operates area control from **two centres — ATCC Stockholm and ATCC Malmö**. Sweden participates in the **Denmark–Sweden Functional Airspace Block (DK-SE FAB)** with **København ACC (Naviair)**; the joint operating company **NUAC HB** ran the Copenhagen/Malmö/Stockholm centres 2012–2019 and **closed 31 Aug 2019** — LFV now runs ATCC Stockholm/Malmö itself, continuing close cross-border cooperation with Naviair under the DK-SE FAB |
| Airspace class & vertical limits | 🟧 Controlled upper airspace predominantly **Class C**; TMA/CTR **C/D**; uncontrolled **G** below the lower limit — confirm exact class per band at **AIP Sweden ENR 1.4/2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **Swedish + English** (English always available) |
| Key hazard(s) | Generally low-to-moderate terrain, rising to genuine mountain relief in the far north (Kebnekaise ~6,880 ft, near the Norway border) — not a factor for an Arlanda-area transit. Winter ops (snow, ice, cold-temperature corrections) significant nationwide; Baltic Sea GNSS-interference reports (regional, see §11); Icelandic volcanic ash the one strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). Swedish + English; English always available. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet (EU 2017/386). |
| Terrain / MORA / driftdown | 🟩 | Low-to-moderate around Stockholm/Arlanda; the Scandes/Kebnekaise high terrain sits far to the north, near the Norway border — not a factor for the ESSA area. §8. |
| Diversion-aerodrome coverage | 🟧 | ESSA is the only curated in-FIR brief; Sweden's wider network (Gothenburg, Malmö, Kiruna, etc.) has no OM C brief yet. |
| Special-use airspace (military / danger) | 🟧 | Military TRA/D areas activated via AUP/UUP; confirm active status at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Sweden FIR (ESAA) covers **all of Sweden** — from Malmö/Skåne in the south, across the Baltic coast and central lowlands, up through the northern forest/mountain regions to Lapland. It is a single national FIR (no internal FIR subdivision).
- **Vertical split:** 🟧 single consolidated FIR; the operational division of responsibility between **ATCC Stockholm** and **ATCC Malmö** is geographic (roughly northern/central vs southern Sweden) rather than a lower/upper vertical split — confirm the precise sector boundary and any AIP-published CTA/UTA structure at **AIP Sweden ENR 2.1**.
- **Adjacent FIRs (by boundary):**
  - **SW — Copenhagen (EKDK), Denmark.** Across the Öresund strait — **the Malmö (ESMS) and Copenhagen (EKCH) TMAs interface directly**; historically integrated under NUAC HB (2012–2019) and still coordinated closely under the DK-SE FAB (§4).
  - **W — Norway (ENOR, Avinor).** Along the long Sweden–Norway land border.
  - **E — Finland (EFIN, Fintraffic ANS).** Across the Gulf of Bothnia and the Åland Sea.
  - **S — Bremen (EDWW), Germany.** Across the Baltic Sea.
- **Sectorisation:** LFV's two centres — **ATCC Stockholm** and **ATCC Malmö** — each cover multiple sectors; Stockholm-Arlanda traffic is worked primarily through the Stockholm centre's TMA/enroute sectors, with Malmö handling the southern Swedish sectors and the direct Öresund cross-border interface with Copenhagen.

---

## 4. Control & ATSU

- **Lower/upper-airspace ATSU:** 🟩 **LFV — ATCC Stockholm** (northern/central Sweden, incl. the ESSA approach/TMA feed) and **ATCC Malmö** (southern Sweden, incl. the direct Öresund interface with Copenhagen) — both radar/surveillance-controlled.
- **Cross-border integration:** 🟧 ATCC Malmö and ATCC Stockholm operate within the **DK-SE Functional Airspace Block** together with **København ACC (Naviair, Denmark)**. The three centres were run by a single joint company, **NUAC HB** (Naviair + LFV), from 1 Jul 2012 until its **closure on 31 Aug 2019**; each ANSP now runs its own centre again, continuing close operational cooperation (shared COOPANS ATM platform, Joint Programme Office) rather than a single merged ATS provider. Confirm the current-year cooperation arrangement if it materially affects cross-border coordination assumptions.
- **FIS / FSS:** Swedish **Flight Information Service** provided by LFV for lower/uncontrolled airspace; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Sweden FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute across ECAC upper airspace; **RNP 1** for terminal SID/STAR; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**; full implementation completed 31 Dec 2018).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009). VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** an Arlanda-area transit is handled primarily by **ATCC Stockholm** sectors, with handoff to **ATCC Malmö** (S, incl. the Öresund cross-border interface), **Norway ACC** (W) or the appropriate Finnish sector (E) at the FIR boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Swedish **FIS** (LFV) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Swedish and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **DK-SE FAB Free Route Airspace** applies in the Swedish and Danish upper airspace, first implemented in **2011**. 🟧 The FRA floor is commonly cited as **FL285** (immediately below the FL290 RVSM floor) — confirm the current published floor at **AIP Sweden ENR 1.3**, as the DK-SE FAB and NEFAB partners have discussed lowering it further. DK-SE FRA was cross-border linked to the **NEFAB FRA** (Norway/Estonia/Finland/Latvia) on **25 May 2017**. This sits within the wider **Borealis Alliance / North European Free Route Airspace (NEFRA)** programme now linking nine North European ANSPs (Avinor, Naviair, Fintraffic ANS, LFV, EANS, LGS, Isavia, IAA, NATS) into a single free-route area, with cross-border implementation achieved in 2023 and full harmonised implementation targeted by end of 2026.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and where the RAD restricts direct routeing, the **fixed ATS-route network** applies — including the SID/STAR feeder structure into ESSA.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding Stockholm-Arlanda; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Stockholm-Arlanda (ESSA)**. Terminal detail is in the airport briefing (§9). 🟧 Sweden's wider aerodrome network (Gothenburg-Landvetter, Malmö, Kiruna and others) has no OM C brief yet — plan-time only.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 low-to-moderate across most of Sweden; genuine mountain relief exists in the **far north (Norrland/Lapland)** along the Norway border, where the **Scandes** reach **Kebnekaise (~2,097 m / 6,880 ft)**, Sweden's highest point. This is remote from the Stockholm-Arlanda area.
- **Boundary terrain:** 🟩 none of significance near ESSA; the Norway-border high terrain is a consideration only for far-northern or trans-border routings, not a Stockholm-area transit.
- **Driftdown / depressurisation escape:** not a cruise-level constraint for an Arlanda-area transit; would need separate consideration for any routing into the northern Norrland/Lapland sectors.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter, notably at ESSA — see the airport briefing (§9) and OM E Cold Weather Operations.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Stockholm-Arlanda | **ESSA** | Home hub / primary dep-return alternate | [ESSA brief](../../../destinations/europe/sweden/essa/index.md) |

- **Coverage note:** 🟧 ESSA is the only curated in-FIR brief. Sweden's wider network (Gothenburg-Landvetter, Malmö-ESMS, Kiruna and others) is not yet briefed — treat as plan-time reference rather than assuming dense curated coverage.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 Sweden carries military TRA/D areas activated via **AUP/UUP**; confirm active status at planning.
- **Danger / restricted / prohibited areas:** 🟧 named danger/restricted areas are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation (Sweden joined NATO in 2024; no change to civil overflight/permit requirements for this brief).

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Swedish refinement at **AIP ENR 1.8/GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Winter operations** — snow/ice and cold-temperature altimetry corrections at ESSA and nationwide, more pronounced further north; see the airport briefing and OM E Cold Weather Operations.
  - **Baltic Sea GNSS interference (regional, factual note)** 🟧 — Nordic and Baltic states, including Sweden, have reported elevated **GNSS (GPS) signal-degradation/jamming events** in the Baltic Sea region since 2024, with EASA Safety Information Bulletins referencing signal degradation proximate to the Baltic/Kaliningrad area; incident rates have remained elevated into 2025–2026. No confirmed FIR closures identified for Sweden as a result — this is a monitoring item, not an operational restriction; verify current NOTAMs/EASA SIBs at planning.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across North European upper airspace and have historically closed large volumes of it (2010). **VAAC London** is the responsible advisory centre.
  - **Space weather:** negligible at the Stockholm/Arlanda latitude — more relevant to the far-northern sectors, not addressed here.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET, **VAAC London** volcanic-ash advisories, current GNSS-interference bulletins for the Baltic region, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **vertical-structure / CTA-UTA nomenclature** and the precise **ATCC Stockholm / ATCC Malmö sector boundary** — confirm at AIP Sweden ENR 2.1.
- Exact **airspace class per band** — not individually re-verified.
- **DK-SE FAB FRA floor** — commonly cited as FL285; confirm current published floor (there has been discussion of lowering it further) at AIP Sweden ENR 1.3.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 — confirm per-sector at planning.
- Current-year status of **LFV/Naviair cross-border cooperation** post-NUAC-HB (closed 2019) — confirm it has not materially changed the Malmö/Copenhagen coordination assumed in §3/§4.
- Sweden's wider aerodrome network (Gothenburg-Landvetter, Malmö, Kiruna, others) has **no OM C briefs yet** — build if they become planned alternates.
- **Baltic GNSS-interference** trend — re-check current EASA SIB/NOTAM status; treat §11 note as durable regional context, not a live restriction.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **LFV AIP Sweden — ENR sections**: ENR 1.3 (ATS routes/FRA), 1.4 (airspace classification), 2.1 (FIR structure). Primary source of record — https://aro.lfv.se (retrieved 2026-07-26).
- **LFV — "Air Traffic Control and Air Traffic Controllers"** (ATCC Stockholm / ATCC Malmö structure) — https://www.lfv.se/en/services/airport-services/air-traffic-control (retrieved 2026-07-26).
- **Naviair — "NUAC 2009–2019"** (history of the joint DK-SE ATS company and its 31 Aug 2019 closure) — https://www.naviair.dk/nuac-2009-2019.605.aspx (retrieved 2026-07-26).
- **EUROCONTROL — "Greater flexibility and efficiency in European airspace"** (DK-SE FAB FRA linked to NEFAB 25 May 2017) — https://www.eurocontrol.int/press-release/greater-flexibility-and-efficiency-european-airspace (retrieved 2026-07-26).
- **Latvijas Gaisa Satiksme — "BOREALIS Free Route Airspace"** (nine-state North European FRA programme; cross-border achieved 2023, full implementation targeted end 2026) — https://www.lgs.lv/en/2023/06/borealis-free-route-airspace-establishing-a-free-route-airspace-in-nine-north-european-countries/ (retrieved 2026-07-26).
- **Spire Global — "GNSS interference report: Russia 2024/2025 — Part 1: Kaliningrad & the Baltic Sea"** (regional GNSS-interference corroboration) — https://spire.com/blog/space-reconnaissance/gnss-interference-report-russia/ (retrieved 2026-07-26). *Tier-4 corroboration only — used solely for the durable regional-caution note in §11.*
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
