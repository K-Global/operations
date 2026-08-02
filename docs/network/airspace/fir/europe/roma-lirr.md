# Roma (LIRR) — FIR Briefing

**Scope:** single FIR — central Italy (Lazio, Tuscany, Umbria, Marche, Abruzzo, Molise) and the Tyrrhenian Sea, including Sardinia · **Parent area brief:** <../../General/Europe.md> — 🟧 that brief covers the DE/FR/ES/PT continental sector only and does **not** cover Italy; this FIR brief (with Milano (LIMM) and Brindisi (LIBB)) closes that scope gap · **Adjacent FIRs:** Milano (LIMM) N · Brindisi (LIBB) SE · Marseille (LFMM) NW/W (Corsica boundary) 🟧 · Tunisi (DTTC) S 🟧 (over the Mediterranean/Sardinia approaches)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Roma FIR/UIR is a **fully controlled continental FIR** — Class G/D lower airspace, **Class A in the Roma TMA**, Class C above FL195 (the Italian FIR/UIR split level), no procedural or oceanic segment. Routings and levels here are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for aerodromes inside the FIR (LIRF, LIRP) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LIRR — Roma FIR/UIR.** 🟩 As with Milano and Brindisi, Italy uses a **single designator for the FIR and its overlying UIR** — FIR (GND–FL195) and UIR (FL195+) share the LIRR code and controlling ACC |
| Controlling ATSU / ANSP | **Roma ACC (LIRR)**. ANSP: **ENAV S.p.A.**, regulator **ENAC** |
| Airspace class & vertical limits | 🟩 **Class D** in the CTRs/TMAs; **Class A in the Roma TMA** (with Milano, the only Class A TMAs in Italy); **Class G** uncontrolled below/outside controlled airspace; **Class C above FL195**. Confirm exact upper limit at **AIP ENR 2.1** 🟧 |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 **Radar/ADS-B surveillance** throughout; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **Italian + English** (English always available on ATC sectors) |
| Key hazard(s) | Generally benign — the **Apennine spine** (Gran Sasso, ~2,912 m, the range's highest point) runs through the FIR but is not a cruise factor; **Sardinia hosts extensive military training/danger areas** (Capo Teulada, Capo Frasca, Salto di Quirra) with recurring activation |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). Italian + English; English always available. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory (EU 2017/386). |
| Terrain / MORA / driftdown | 🟩 | **Apennines (Gran Sasso ~2,912 m / 9,554 ft)** run through Abruzzo; not a cruise-level factor at FL290+, but a driftdown/escape consideration for tracks close to the spine. §8. |
| Diversion-aerodrome coverage | 🟩 | LIRF (Fiumicino) is a major international field; LIRP (Pisa) covers the Tyrrhenian/Tuscan coast. Sparser toward Sardinia and the Apennine interior. §9. |
| Special-use airspace (military / danger) | 🟧 | **Sardinia** carries some of the largest military training/missile-range areas in Europe (Salto di Quirra, Capo Teulada, Capo Frasca, and the multinational Decimomannu air base); activation via **AUP/UUP**; confirm current status at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Roma FIR/UIR covers **central Italy** — Lazio (including the capital, Rome), Tuscany, Umbria, the Marche, Abruzzo and Molise — plus the **Tyrrhenian Sea and Sardinia**. It sits between **Milano FIR (LIMM)** to the north and **Brindisi FIR (LIBB)** to the south-east.
- **Vertical split:** 🟩 **Lower FIR GND–FL195** and **upper UIR FL195+** share the single **LIRR** designator and are worked by the same **Roma ACC**.
- **Adjacent FIRs (by boundary):**
  - **N — Milano (LIMM).** Boundary runs roughly along the northern Apennines/Emilia-Romagna line.
  - **SE — Brindisi (LIBB).** Boundary runs across the central-southern Apennines toward the Adriatic/Ionian sector.
  - **NW/W — Marseille (LFMM, DSNA)** 🟧 across the Tyrrhenian toward Corsica — the exact lateral limit near Corsica/Sardinia is not independently verified this pass.
  - **S — Tunisi (DTTC, Tunisia)** 🟧 over the Mediterranean south of Sardinia — boundary asserted from general public-source corroboration, confirm at planning.
- **Sectorisation:** 🟩 **Roma ACC** is the sole ATSU for this FIR/UIR (no delegated sub-ACC comparable to Padova in Milano FIR).

---

## 4. Control & ATSU

- **Controlling ATSU:** 🟩 **Roma ACC (LIRR, ENAV)** — radar/surveillance control across the FIR/UIR, GND through the upper control limit.
- **FIS / FSS:** local **AFIS** units exist at minor fields within the FIR (e.g. Rieti); not a factor for an IFR hub transit remaining in controlled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in this FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute; **RNP 1** for terminal SID/STAR; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009). See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Roma ACC** and handed to the adjacent-FIR ACC (Milano, Brindisi, or Marseille) at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** local **AFIS** at minor/uncontrolled fields (not the major hubs in §9).
- **Language:** 🟩 **Italian and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **FRAIT (Free Route Airspace Italy)** applies **H24 across the combined area of responsibility of ENAV's four ACCs (Milano, Padova, Roma, Brindisi)** — direct point-to-point routeing between defined entry/exit points. FRA reached **FL195 (6,500 m) on 21 March 2024**, having started at FL335 in December 2016, ahead of the EU-wide mandatory deadline of December 2025.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and in terminal airspace, the **fixed ATS-route network** applies, including SID/STAR feeder structures into Fiumicino and Pisa.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Roma-Fiumicino (LIRF)** and **Pisa (LIRP)**. Terminal detail is in the airport briefings (§9). 🟧 Rome-Ciampino (LICA) and Sardinia's airports also sit in this FIR but are not currently in the network.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low-to-moderate. The **Apennine spine** runs through Umbria/the Marche/Abruzzo, culminating at **Gran Sasso d'Italia (~2,912 m / 9,554 ft)** — the Apennines' highest point. Not a cruise-level factor at FL290+.
- **Boundary terrain:** the Apennines continue south across the boundary into **Brindisi FIR (LIBB)**; no comparably high terrain sits on the Milano or Marseille/Tunisi boundaries.
- **Driftdown / depressurisation escape:** 🟧 relevant only near the Gran Sasso massif; the FIR's dense coastal diversion coverage (Fiumicino, Pisa) and generally low terrain elsewhere minimise any extended terrain-limited escape corridor.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter, not in enroute cruise — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Roma-Fiumicino | **LIRF** | Primary in-FIR hub / alternate | [LIRF brief](../../../destinations/europe/italy/lirf/index.md) |
| Pisa | **LIRP** | In-FIR alternate (Tuscany/Tyrrhenian coast) | [LIRP brief](../../../destinations/europe/italy/lirp/index.md) |

- **Coverage note:** 🟧 **moderate** — Fiumicino and Pisa give solid coastal coverage, but the Apennine interior, Sardinia and southern Lazio have no curated in-library briefs; plan-time reference to the AIP for those areas. ETP/critical-point planning is not a driver in this radar-controlled continental FIR.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 **Sardinia** hosts some of Europe's largest military training and missile-test ranges — **Salto di Quirra (PISQ)**, **Capo Teulada** and **Capo Frasca** — plus the multinational **Decimomannu air base**; activation via **AUP/UUP**, with associated Conditional Routes (CDR1/2/3) and the **RAD** governing flyable levels/segments. Confirm active TRAs/CDRs at planning.
- **Danger / restricted / prohibited areas:** 🟧 numerous danger areas over Sardinia and the Tyrrhenian; named areas and status are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules, and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Italian refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Summer convection** over the Apennine interior; **winter terminal fog/low visibility** at Fiumicino and Pisa — a terminal, not enroute, driver; see the airport briefings and OM E LVO docs.
  - **Volcanic ash:** 🟧 not a primary hazard in this central FIR (the active Italian volcanoes — Etna, Vesuvius, Stromboli/Vulcano — lie in the Brindisi FIR sector; see that brief). A distant **Icelandic-eruption** ash cloud remains a strategic wildcard for European upper airspace generally.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status, especially Sardinia) and current **RAD**, SIGMET/AIRMET, VAAC advisories, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** and upper control limit (AIP ENR 1.4 / 2.1) — stated per VATSIM/IFISA public corroboration; not independently AIP-verified this pass.
- **Marseille (LFMM) and Tunisi (DTTC) boundary sectors** — precise lateral limits near Corsica/Sardinia not confirmed against the current AIP chart.
- **Sardinia SUA extents** (Salto di Quirra, Capo Teulada, Capo Frasca) — named generically from public sources; exact D-area codes/activation schedule not sourced this pass — confirm at planning.
- **Rome-Ciampino (LICA)** and Sardinia's airports sit in this FIR but have no OM C briefs — build if they become planned alternates.
- This FIR brief and its Milano (LIMM)/Brindisi (LIBB) siblings are **new** — they close the "no Italy FIR brief" scope gap flagged in the LICC (Catania) and LIRN (Naples) airport briefings.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **VATITA wiki — Italian Airspace** (Milano/Roma/Brindisi FIR-UIR structure; airspace classes incl. Class A in Roma/Milano TMA) — https://wiki.vatita.net/en/airspace (retrieved 2026-07-26). *Tier-4 corroboration — cross-check against AIP ENR at planning.*
- **IFISA — Italy (FIS/AFIS overview)** — enroute FIS provision by Milano/Padova/Roma/Brindisi ACC/FIC — https://ifisa.info/italy/ (retrieved 2026-07-26).
- **ENAV — Free Route Airspace (FRAIT)** — implementation history, FL335 (Dec 2016) → FL195/6,500 m (21 Mar 2024) — https://www.enav.it/en/innovation/free-route (retrieved 2026-07-26).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR; (EU) 2015/310 — Data Link/CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR; (EU) No 923/2012 — SERA.
- **AIP Italia (ENAV/NextDigital)** — ENR sections — https://www.nextdigital.it/apps/aip/browse/enr?language=en (retrieved 2026-07-26). *Primary source of record; per-section detail not individually re-fetched this pass — confirm at planning.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
