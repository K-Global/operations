# Helsinki (EFIN) — FIR Briefing

**Scope:** single FIR — Finland (the whole country, a single national FIR, also known as the Helsinki FIR), containing **Helsinki-Vantaa (EFHK)** · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Sweden (ESAA) W, across the Gulf of Bothnia · Norway (ENOR) N, short land border · Tallinn (EETT), Estonia S, across the Gulf of Finland · Russia (St Petersburg, ULLI SE; Murmansk, ULMM NE) E 🟧 confirm
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Helsinki (Finland) is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for Helsinki-Vantaa (EFHK) live in the airport briefing (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins, and the current GNSS-interference picture noted in §11) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **EFIN** — Helsinki FIR (single national FIR covering the whole of Finland) |
| Controlling ATSU / ANSP | **ATCC Finland (Fintraffic ANS)**, located at Vantaa near EFHK — manages the entire Finland FIR, organised into **13 airspace sectors**, handling roughly **280,000 flights/year (~53,000 overflights)**. **Fintraffic ANS** (formerly ANS Finland/Finavia's ANS division) is the state ANSP |
| Airspace class & vertical limits | 🟧 Controlled upper airspace predominantly **Class C**; TMA/CTR **C/D**; uncontrolled **G** below the lower limit — confirm exact class per band at **AIP Finland ENR 1.4/2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **Finnish + English** (English always available) |
| Key hazard(s) | Generally low relief (highest point Halti ~4,344 ft, far north-west Lapland) — not a factor near EFHK. Winter ops (snow, ice, cold-temperature corrections) significant nationwide. 🟧 **Eastern-border airspace / GNSS-interference note (factual, neutral):** the Baltic/Gulf-of-Finland region, including Finnish airspace, has seen reported GNSS (GPS) signal-degradation events since 2024 — see §11. Icelandic volcanic ash the residual strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). Finnish + English; English always available. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet (EU 2017/386). |
| Terrain / MORA / driftdown | 🟩 | Low relief nationwide; Finland's highest point, Halti (~1,324 m / 4,344 ft), sits in the far north-west corner near the Norway border — not a factor for the EFHK area. §8. |
| Diversion-aerodrome coverage | 🟧 | EFHK is the only curated in-FIR brief; Finland's wider network (Turku, Tampere, Oulu, Rovaniemi, etc.) has no OM C brief yet. |
| Special-use airspace (military / danger) | 🟧 | Military TRA/D areas activated via AUP/UUP; confirm active status at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |
| Eastern-border GNSS interference | 🟧 | Reported since 2024 across the Baltic/Gulf-of-Finland region; monitoring item, not a confirmed operational restriction — see §11. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Helsinki FIR (EFIN) covers **all of Finland** — from the Gulf of Finland and Åland region in the south-west, across the lake district and central forests, to Lapland and the Arctic north. It is a single national FIR (no internal FIR subdivision).
- **Vertical split:** 🟧 single consolidated FIR served by ATCC Finland; the precise AIP-published vertical/CTA-UTA breakdown, if any, is not independently re-derived here — confirm at **AIP Finland ENR 2.1**.
- **Adjacent FIRs (by boundary):**
  - **W — Sweden (ESAA, LFV).** Across the Gulf of Bothnia and the Åland Sea.
  - **N — Norway (ENOR, Avinor).** A short land border in the far north (Finnish Lapland).
  - **S — Tallinn (EETT), Estonia.** Across the Gulf of Finland.
  - **E — Russia.** 🟧 **St Petersburg (ULLI)** to the south-east and **Murmansk (ULMM)** to the north-east are the likely adjacent Russian FIRs by geography; exact boundary idents and geometry are not independently confirmed here — verify at AIP/current sector charts if ever operationally relevant.
- **Sectorisation:** ATCC Finland (Vantaa) is organised into **13 airspace sectors** covering the national FIR, including the approach/TMA feed into EFHK; en-route sectors combine/split with traffic and staffing.

---

## 4. Control & ATSU

- **Lower/upper-airspace ATSU:** 🟩 **ATCC Finland (EFIN, Fintraffic ANS)**, based at Vantaa — radar/surveillance control across the entire Finland FIR, including the EFHK approach/TMA feed. A separate **Helsinki ATC unit** (also Fintraffic ANS) handles EFHK aerodrome/tower and approach control specifically.
- **FIS / FSS:** Finnish **Flight Information Service** provided by Fintraffic ANS for lower/uncontrolled airspace; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Helsinki FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute across ECAC upper airspace; **RNP 1** for terminal SID/STAR; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**; full implementation completed 31 Dec 2018).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009). VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** an EFHK-area transit is handled by **ATCC Finland** sectors, with handoff to the adjacent-FIR ACC (Sweden W, Estonia/Tallinn S, Norway N) at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Finnish **FIS** (Fintraffic ANS) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Finnish and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **Finland operates Free Route Airspace**, published as RNAV routes with direct entry/exit-point planning in **AIP Finland**, as part of the **North European Functional Airspace Block (NEFAB)** together with **Estonia, Latvia and Norway** (NEFAB agreement in force 23 Dec 2012). 🟧 The exact Finnish FRA floor level is not independently confirmed here — Norway's NEFAB-partner floor is **FL135** (FL195 in Bodø Oceanic) as a reference point, but Finland's own published floor should be confirmed at **AIP Finland ENR 1.3**. NEFAB FRA connected cross-border to the **Denmark–Sweden** free-route area on **25 May 2017**. This sits within the wider **Borealis Alliance / North European Free Route Airspace (NEFRA)** programme now linking nine North European ANSPs (Avinor, Naviair, Fintraffic ANS, LFV, EANS, LGS, Isavia, IAA, NATS) into a single free-route area, with cross-border implementation achieved in 2023 and full harmonised implementation targeted by end of 2026 — Finland's eastern boundary with Russian airspace is the practical eastern edge of this North European free-route project.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and where the RAD restricts direct routeing, the **fixed ATS-route network** applies — including the SID/STAR feeder structure into EFHK.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding Helsinki-Vantaa; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Helsinki-Vantaa (EFHK)**. Terminal detail is in the airport briefing (§9). 🟧 Finland's wider aerodrome network (Turku, Tampere, Oulu, Rovaniemi and others) has no OM C brief yet — plan-time only.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low relief nationwide. Finland's highest point, **Halti (~1,324 m / 4,344 ft)**, is in the extreme north-west corner of Lapland near the Norway border — remote from the Helsinki area and not a cruise-level factor for an EFHK-area transit.
- **Boundary terrain:** 🟩 none of significance near EFHK.
- **Driftdown / depressurisation escape:** not a cruise-level constraint for an EFHK-area transit given the low relief and controlled continental environment.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter, notably at EFHK — see the airport briefing (§9) and OM E Cold Weather Operations.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Helsinki-Vantaa | **EFHK** | Home hub / primary dep-return alternate | [EFHK brief](../../../destinations/europe/finland/efhk/index.md) |

- **Coverage note:** 🟧 EFHK is the only curated in-FIR brief. Finland's wider network (Turku-EFTU, Tampere-Pirkkala EFTP, Oulu EFOU, Rovaniemi EFRO and others) is not yet briefed — treat as plan-time reference rather than assuming dense curated coverage.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 Finland carries military TRA/D areas activated via **AUP/UUP**; Fintraffic ANS submits RAD amendment proposals and publishes permanent danger areas in AIP Finland. Confirm active status at planning.
- **Danger / restricted / prohibited areas:** 🟧 named danger/restricted areas are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none for standard EU/ECAC operation (Finland joined NATO in 2023; no change to civil overflight/permit requirements for this brief). Finland's eastern land border with Russia is a state boundary, not an overflight-permit consideration for a routing that does not cross it.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Finnish refinement at **AIP ENR 1.8/GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Winter operations** — extensive snow/ice, short daylight and cold-temperature altimetry corrections at EFHK and nationwide; see the airport briefing and OM E Cold Weather Operations.
  - 🟧 **Eastern-border airspace / GNSS-interference note (factual, neutral):** Nordic and Baltic states — including Finland, Estonia, Latvia and Lithuania — have reported increased **GNSS (GPS) signal-degradation/jamming events** in the Baltic Sea and Gulf of Finland region since 2024; EASA issued Safety Information Bulletins covering signal degradation in airspace proximate to the Baltic region, and incident rates have remained elevated through 2025–2026. In one reported 2024 instance, a Finnish operator temporarily suspended flights to a nearby Baltic destination (Tartu, Estonia) citing GPS jamming. **No confirmed closure of Finnish (EFIN) airspace has resulted** — Finnish and other monitored Baltic FIRs have continued normal traffic volumes. This is presented as durable regional context for crew awareness (GNSS-based approaches/PBN may be affected by localised degradation); it is **not** a live restriction — verify current NOTAMs and EASA SIB status at planning, and do not treat this note as implying any current closure or ban.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across North European upper airspace and have historically closed large volumes of it (2010). **VAAC London** is the responsible advisory centre for this sector, alongside monitoring by Nordic/Baltic VAAC-adjacent sources as applicable.
  - **Space weather:** generally modest at Helsinki's latitude relative to the Arctic sectors further north; no material HF/GNSS-degradation planning driver distinct from the eastern-border note above.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET, **VAAC London** volcanic-ash advisories, current **GNSS-interference/EASA SIB** status for the Baltic/Gulf-of-Finland region, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **vertical-structure / CTA-UTA nomenclature** for the Helsinki FIR — confirm at AIP Finland ENR 2.1.
- Exact **airspace class per band** — not individually re-verified.
- **Finnish FRA floor level** — not independently confirmed; confirm at AIP Finland ENR 1.3 (Norway's NEFAB-partner floor, FL135/FL195 Bodø Oceanic, cited only as a reference point).
- **Adjacent Russian FIR idents** (St Petersburg / Murmansk) and exact eastern-boundary geometry — not independently confirmed; verify if ever operationally relevant.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 — confirm per-sector at planning.
- Finland's wider aerodrome network (Turku, Tampere, Oulu, Rovaniemi, others) has **no OM C briefs yet** — build if they become planned alternates.
- **Baltic/Gulf-of-Finland GNSS-interference** trend — re-check current EASA SIB/NOTAM status; treat §11 note as durable regional context, not a live restriction, and update if the situation materially changes.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Fintraffic ANS — AIP Finland ENR sections**: ENR 1.3 (ATS routes/FRA), 1.4 (airspace classification), 2.1 (FIR structure) — https://www.ais.fi (retrieved 2026-07-26).
- **Fintraffic — "ATC Services"** and **"Fintraffic Air Navigation Services in brief"** (ATCC Finland at Vantaa; 13 sectors; ~280,000 flights/year, ~53,000 overflights) — https://www.fintraffic.fi/en/ans/ans-services/atc-services (retrieved 2026-07-26).
- **NEFAB (North European Functional Airspace Block)** — agreement in force 23 Dec 2012; members Estonia, Finland, Latvia, Norway — https://www.nefab.eu (retrieved 2026-07-26).
- **Latvijas Gaisa Satiksme — "BOREALIS Free Route Airspace"** (nine-state North European FRA programme; cross-border achieved 2023, full implementation targeted end 2026) — https://www.lgs.lv/en/2023/06/borealis-free-route-airspace-establishing-a-free-route-airspace-in-nine-north-european-countries/ (retrieved 2026-07-26).
- **Spire Global — "GNSS interference report: Russia 2024/2025 — Part 1: Kaliningrad & the Baltic Sea"** (regional GNSS-interference corroboration, incl. Finland/Baltic states) — https://spire.com/blog/space-reconnaissance/gnss-interference-report-russia/ (retrieved 2026-07-26). *Tier-4 corroboration only — used solely for the durable regional-caution note in §11.*
- **Defense News — "Researchers home in on origins of Russia's Baltic GPS jamming"** (2025) — https://www.defensenews.com/global/europe/2025/07/02/researchers-home-in-on-origins-of-russias-baltic-gps-jamming/ (retrieved 2026-07-26). *Tier-4 corroboration only.*
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
