# Lisboa (LPPC) — FIR Briefing

**Scope:** single FIR — mainland Portugal plus a large eastern-Atlantic oceanic sector · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Madrid (LECM) E · Casablanca (GMMM) S · Canarias (GCCC) S (Madeira-sector boundary) · Santa Maria Oceanic (LPPO) W (separate, much larger oceanic FIR)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — verified vs NAV Portugal AIP ENR structure; exact oceanic-sector lateral limit at the Santa Maria boundary and precise class-per-band flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Lisboa is a **radar-controlled continental FIR over mainland Portugal, extending into a substantial eastern-Atlantic oceanic buffer** west of the coast; it is **not** the huge mid-Atlantic Santa Maria Oceanic FIR, which is a separate, much larger FIR further west (Azores-based) — mentioned here only as the adjacent oceanic system. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for aerodromes inside the FIR (LPPT, LPPR …) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LPPC** — Lisboa FIR/UIR, published vertical extent **SFC/GND–UNL** as a single control volume (no separate lower/upper ATSU split published, unlike the German-style FIR/UAC model) |
| Controlling ATSU / ANSP | **Lisboa ACC (LPPC), NAV Portugal** — single ATSU for the whole FIR, callsign **Lisboa Control**. ANSP: **NAV Portugal, E.P.E.** |
| Airspace class & vertical limits | 🟧 **Class C** predominant in the controlled upper/enroute structure (consistent with EU-wide practice above ~FL195); lower TMA/CTA Class C/D around Lisbon and Porto, Class E/G below — exact class-per-band not independently re-verified; confirm at **AIP ENR 2.1 (Portugal)** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute (mandatory carriage in the Lisboa FIR upper airspace) · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance over mainland Portugal; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) — the oceanic buffer sector west of the coast is a Lisboa-FIR (not Santa Maria) responsibility, confirm its surveillance basis |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **Portuguese + English** (English always available) |
| Key hazard(s) | Benign. Moderate **traffic density** around the Lisbon hub; the Serra da Estrela is the principal mainland terrain belt; the Atlantic buffer sector adds an oceanic-boundary-management dimension distinct from the mainland Iberian FIRs; Icelandic volcanic ash a strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Mainland Portugal is fully radar/surveillance-controlled. 🟧 The Atlantic-facing oceanic buffer sector west of the coast (out to roughly the Santa Maria FIR boundary) may carry a different surveillance basis — confirm before assuming radar coverage extends the full width of the FIR. |
| Communication coverage & language | 🟩 | Continuous VHF over the mainland; 🟥 **8.33 kHz mandatory** (EU 1079/2012). Portuguese + English; English always available. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors, especially at the western oceanic-buffer edge. Mode S + **ADS-B Out** mandatory (EU 2017/386). |
| Terrain / MORA / driftdown | 🟩 | Low-to-moderate. **Serra da Estrela (~6,539 ft)** the highest mainland belt; not a cruise-level factor at FL290+. §8. |
| Diversion-aerodrome coverage | 🟧 | Two curated majors (LPPT, LPPR) inside the FIR; adequate for the mainland Portugal corridor but sparser than the dense multi-airport German/Spanish FIRs. §9. |
| Special-use airspace (military / danger) | 🟧 | Portuguese military TRA/TSA/danger areas activated **daily via AUP/UUP**; CDR1/2/3 open/close accordingly; **RAD** governs flyable levels/segments. Confirm active at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Lisboa FIR covers **mainland Portugal** in full, plus a **substantial eastern-Atlantic oceanic sector** west of the coastline, extending out to roughly the boundary with the separate Santa Maria Oceanic FIR (broadly in the vicinity of 15W, per public NAV Portugal / IVAO-Portugal sector charts). 🟧 The published boundary point-string (e.g. **4300N 01300W, 4200N 01000W**, along the Spanish-Portuguese land border, then south to around **3558N 00723W / 3558N 01200W**, and an arc-defined western limit near **3215N 01438W**, out to roughly **3630N 01500W, 4200N 01500W, 4300N 01300W**) is drawn from public secondary sources and not independently cross-verified against the primary AIP ENR 2.1 table — confirm before relying on exact coordinates.
- **Vertical split:** 🟧 Lisboa FIR/UIR is published as a **single control volume** (broadly **SFC/GND to UNL**) worked by **Lisboa ACC** — unlike the German-style lower-FIR/upper-UAC split, Portugal does not appear to divide Lisboa's vertical extent between two separate ATSUs. Confirm exact FL band terminology (FIR vs UIR labelling) at the primary AIP.
- **Adjacent FIRs (by boundary):**
  - **E — Madrid (LECM, ENAIRE)** — along the Spanish-Portuguese land border; ATS delegation exists at specific boundary fixes (e.g. AGADO/ASPOR/BATAX/ADORO per published Letters of Agreement) where Madrid ACC provides service on Lisboa's side of the border in a defined volume, and vice versa.
  - **S — Casablanca (GMMM, ONDA), Morocco** — across the Strait of Gibraltar/Gulf of Cádiz approach to North Africa.
  - **S (further west) — Canarias (GCCC, ENAIRE)** — Lisboa FIR borders the southern part of the **Madeira sector**, which sits administratively within the wider Portuguese FIR structure but adjoins the Canarias oceanic sector.
  - **W — Santa Maria Oceanic (LPPO, NAV Portugal)** — a **separate, much larger oceanic FIR** covering the Azores and the mid-Atlantic out to 40W (where it meets New York Oceanic, KZWY); Santa Maria also borders Canarias (GCCC), Gander (CZQX), Shanwick (EGGX), Sal (GVSC) and Piarco (TTZP) further west/south. Lisboa FIR's oceanic buffer sector hands off to Santa Maria at this western boundary — **not** the other way round; do not conflate the two.
- **Sectorisation:** Lisboa ACC sectorises the mainland/terminal traffic and the Atlantic-buffer traffic from a single facility; 🟧 the precise sector count and the mainland/oceanic-buffer split point are not detailed in the sources reviewed here.

---

## 4. Control & ATSU

- **Controlling ATSU:** 🟩 **Lisboa ACC (LPPC), NAV Portugal**, callsign **Lisboa Control** — radar/surveillance control over mainland Portugal, including the Lisbon (LPPT) and Porto (LPPR) approach/TMA feeds, extending into the Atlantic-buffer oceanic sector to the west.
- **Oceanic neighbour ATSU:** 🟩 **Santa Maria Oceanic Control (LPPO), NAV Portugal** — a **separate ACC/OCC**, not part of this FIR, using the **ATLATM** Atlantic Control System; referenced here as the adjacent system, not re-derived.
- **FIS / FSS:** Portuguese **Flight Information Service (FIS)** provided by NAV Portugal for lower/uncontrolled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B** over the mainland; 🟧 surveillance basis at the western oceanic-buffer edge of Lisboa FIR (approaching the Santa Maria boundary) not independently confirmed — treat as potentially procedural/mixed until verified.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Lisboa FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region, including Portugal). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5** mandatory carriage in the Lisboa FIR upper airspace (per NAV Portugal AIP ENR 1.1); **RNP 1** for terminal SID/STAR; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**; full implementation completed 31 Dec 2018).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — a continental **Link 2000+** mandate for equipped aircraft; VHF voice remains primary over the mainland. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md). Note: this is distinct from the FANS-1/A oceanic mandate that applies in the neighbouring Santa Maria Oceanic FIR — confirm which applies if the route touches Lisboa's western buffer edge.
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is handed sequentially through **Lisboa ACC** sectors and onward to the adjacent-FIR ACC at the boundary (Madrid ACC E, or Santa Maria Oceanic Control W for a transatlantic-bound departure); the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Portuguese **FIS** (NAV Portugal) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Portuguese and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **Portuguese FRA (NAV Portugal)** applies in the upper airspace; Portugal and Spain have progressively merged their FRA cells into a cross-border **South-West FRA (SW-FRA)** structure (SESAR Enhanced FAB SW Crossborder Free-Route deployment), giving largely direct point-to-point routeing between defined entry/exit points across the Lisboa/Madrid upper airspace. 🟧 Exact current FL floor and H24/day-only status not independently re-verified here — confirm at planning.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and where the RAD restricts direct routeing, the **fixed ATS-route network** applies — including the SID/STAR feeder structure into the Lisbon (LPPT) and Porto (LPPR) TMAs.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary, and the designated oceanic entry/exit fixes on the Lisboa/Santa Maria boundary (flight-planning requirement to enter/exit the LPPO FIR only via published boundary points, per NAV Portugal ENR guidance); the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Humberto Delgado / Lisbon (LPPT)**, **Francisco Sá Carneiro / Porto (LPPR)**. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low-to-moderate throughout mainland Portugal. The **Serra da Estrela** is the highest mainland range, topping out around **~6,539 ft (1,993 m)**. Not a cruise-level factor at FL290+.
- **Boundary terrain:** higher terrain (Sistema Central) lies across the eastern boundary in **Madrid FIR (EDGG-style note: here, LECM)** — not asserted as a Lisboa-FIR factor.
- **Driftdown / depressurisation escape:** not a cruise-level constraint over the mainland; relevant only to one-engine driftdown/emergency descent, with LPPT/LPPR giving reasonable diversion coverage over the mainland corridor. 🟧 The western oceanic-buffer sector introduces an overwater driftdown/ditching consideration distinct from the other Iberian FIRs in this set — confirm per route if the flight plan extends into that buffer.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter where relevant, not in enroute cruise — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Humberto Delgado (Lisbon) | **LPPT** | Home-region hub / primary dep-return alternate | [LPPT brief](../../../destinations/europe/portugal/lppt/index.md) |
| Francisco Sá Carneiro (Porto) | **LPPR** | In-FIR alternate (N) | [LPPR brief](../../../destinations/europe/portugal/lppr/index.md) |

- **Coverage note:** 🟧 adequate for the mainland Portugal corridor between the two majors, but this is a **sparser diversion spread** than the multi-airport German/Spanish-mainland FIRs — **ETP/critical-point planning becomes relevant** only if the route extends into the western oceanic-buffer sector toward the Santa Maria boundary, not for a normal mainland transit.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 Portuguese airspace carries military TRA/TSA activated **daily via the AUP/UUP** (Airspace Use Plan / Updated Use Plan); associated **Conditional Routes (CDR1/2/3)** open and close accordingly, and the **RAD (Route Availability Document)** governs which levels/segments are flyable. The SimBrief route is validated against the current RAD — confirm active TRAs/CDRs at planning.
- **Danger / restricted / prohibited areas:** 🟧 named restricted/danger areas exist across mainland Portugal (military ranges); status is AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Portuguese refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical over the mainland — **request the deviation from ATC** and comply with the vector/level issued. Squawk **7700** and declare for emergencies. If operating in the western oceanic-buffer sector, confirm whether oceanic-style contingency procedures (SLOP) apply.
- **Seasonal hazards (durable):**
  - **Atlantic frontal systems** — mainland Portugal sees more persistent Atlantic frontal weather (wind, rain, low cloud) than the Mediterranean-facing Iberian FIRs, particularly in autumn/winter; a terminal/enroute-weather planning factor rather than a hazard requiring special procedure.
  - **Summer convection** — inland Portugal can see embedded CB; handled tactically.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across European/eastern-Atlantic upper airspace and have historically closed large volumes of it (2010); Lisboa FIR's Atlantic-facing position makes ash-advisory awareness particularly relevant. **VAAC London** is a likely responsible advisory centre for the Portuguese FIR area — confirm.
  - **Space weather:** negligible at these mid-latitudes — no HF/GNSS-degradation planning driver here for the mainland; potentially more relevant toward the oceanic-buffer/Santa Maria boundary.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET (Atlantic frontal weather, convection), volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Primary-source **AIP ENR 2.1 (Portugal)** lateral/vertical limit table for Lisboa FIR/UIR — this brief's boundary description is drawn from secondary/public sources (search-engine excerpts) and not independently cross-verified against the eAIP PDF; confirm before relying on exact coordinates.
- Exact **airspace class letter per band** over mainland Portugal — stated as Class C predominant by EU-wide convention; not individually re-verified against the Portuguese AIP.
- Surveillance basis (radar vs procedural/mixed) at the **western oceanic-buffer edge** of Lisboa FIR, approaching the Santa Maria boundary.
- **SW-FRA (South-West Free Route Airspace)** current FL floor and H24/day-only status across the Lisboa/Madrid cross-border cell — confirm at planning.
- **Responsible VAAC** for the Lisboa FIR (assumed London by regional convention; not independently confirmed) and any Portugal-specific volcanic-ash advisory routing.
- Oceanic-buffer driftdown/ditching and ETP contingency requirements if the route plan extends toward the Santa Maria boundary — reference OM E, not re-derived here.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **NAV Portugal eAIP — ENR 1.1** (general rules, RNAV/PBN mandatory carriage in Lisboa FIR) — https://ais.nav.pt/wp-content/uploads/AIS_Files/eAIP_Current/eAIP_Online/eAIP/html/eAIP/LP-ENR-1.1-en-GB.html (retrieved 2026-07-26).
- **NAV Portugal eAIP — ENR 2.1** (FIR/TMA structure) — https://ais.nav.pt/wp-content/uploads/AIS_Files/eAIP_Current/eAIP_Online/eAIP/html/eAIP/LP-ENR-2.1-en-PT.html (page identified; full content not retrieved in this build — see Open Items).
- **NAV Portugal — CANSO member profile** (Lisbon + Santa Maria ACCs, LISATM/ATLATM systems) — https://canso.org/member/nav-portugal/ (retrieved 2026-07-26).
- **Wikipedia — Santa Maria Oceanic Control** (Santa Maria FIR/LPPO scope, adjacent-FIR list, boundary with Lisboa/New York Oceanic) — https://en.wikipedia.org/wiki/Santa_Maria_Oceanic_Control (retrieved 2026-07-26). *Tier-4 corroboration only.*
- **IVAO Portugal** — *Santa Maria FIR — Airspace and Sectors* and *Oceanic Clearances* — https://pt.ivao.aero/portal/lppo/santa-maria-oceanic/airspace-and-sectors/ (retrieved 2026-07-26). *Tier-4 corroboration only — Lisboa/Santa Maria boundary and flight-planning entry/exit-point requirement cross-checked here.*
- **SESAR Deployment Manager — Enhanced FAB SW Crossborder Free-Route** (SW-FRA, Spain–Portugal) — https://www.sesardeploymentmanager.eu/projects/2022_009_af3_eur (retrieved 2026-07-26).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR/NAT)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
