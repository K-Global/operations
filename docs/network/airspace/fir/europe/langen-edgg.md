# Langen (EDGG) — FIR Briefing

**Scope:** single FIR — central & south-western Germany, containing the **Frankfurt (EDDF) home hub** · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Bremen (EDWW) N · München (EDMM) SE · Amsterdam (EHAA) NW · Brussels (EBBU) W · Reims/Paris (LFEE/LFFF) SW · Switzerland (LSAS) S · upper airspace to the NW handed to Maastricht UAC (EDYY)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — verified vs DFS AIP structure + EUROCONTROL/EU framework; exact per-band class letters and the EDUU/EDYY upper-airspace lateral split flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Langen is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (EDDF, EDDS, EDDK, EDDL …) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **EDGG** — Langen FIR, lower airspace **GND–FL245**; upper airspace **above FL245** is **Karlsruhe UAC (EDUU, "Rhein Radar")** |
| Controlling ATSU / ANSP | **Langen ACC (EDGG, DFS)** lower · **Karlsruhe UAC (EDUU, DFS — "Rhein Radar")** upper. ANSP: **DFS Deutsche Flugsicherung** |
| Airspace class & vertical limits | 🟧 **Class C** predominant in controlled upper airspace; lower TMA/CTA Class C/D, Class E/G below — vertical extent GND to the upper control limit (typ. **FL660**). Confirm exact class letter per band at **AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **German + English** (English always available) |
| Key hazard(s) | Benign. Very high **traffic density** around the Frankfurt hub; dense **military TRA/TSA + ED-R** activated by AUP/UUP; Black Forest is the only modest terrain belt (Alps are across the München-FIR boundary); Icelandic volcanic ash the one strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). German + English; English always available. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet (EU 2017/386). |
| Terrain / MORA / driftdown | 🟩 | Low-to-moderate. **Black Forest / Feldberg ~4,898 ft** the highest belt; the Alps sit across the boundary in **München FIR (EDMM)**, not here. Not a cruise factor. §8. |
| Diversion-aerodrome coverage | 🟩 | Very dense — EDDF/EDDS/EDDK/EDDL all inside the FIR, EDDM just across the München boundary. Curated briefs exist for the German majors (§9). |
| Special-use airspace (military / danger) | 🟧 | Extensive **military TRA/TSA and ED-R** areas activated **daily via AUP/UUP**; CDR1/2/3 open/close accordingly; **RAD** governs flyable levels/segments. Confirm active at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Langen FIR covers **central and south-western Germany** — the Rhine-Main region (Frankfurt), Rhineland, Saarland, Baden-Württemberg and the western/central uplands. It is the middle of the three German FIRs, between **Bremen (EDWW)** in the north and **München (EDMM)** in the south-east.
- **Vertical split:** 🟩 **Lower airspace GND–FL245** is worked by **Langen ACC (EDGG)**. **Upper airspace above FL245** is worked by **Karlsruhe UAC (EDUU)**, radio callsign **"Rhein Radar"** — the DFS upper-area control centre for central/southern Germany. The FL245 boundary is the lower/upper handoff for a climbing departure out of the Frankfurt hub.
- **Adjacent FIRs (by boundary):**
  - **N — Bremen (EDWW, DFS).** Northern German FIR.
  - **SE — München (EDMM, DFS).** South-eastern German FIR; **the Alps and the highest German/Austrian terrain lie in EDMM, not in Langen** — the terrain step-up is across this boundary (§8).
  - **NW — Amsterdam (EHAA, LVNL)** and **W — Brussels (EBBU, skeyes).**
  - **SW — Reims (LFEE) / Paris (LFFF), France (DSNA).**
  - **S — Switzerland (LSAS, skyguide).**
- **Upper-airspace neighbour:** 🟧 the DFS upper airspace is split between **Karlsruhe UAC (EDUU)** — which owns the Langen-FIR upper — and **Maastricht UAC (EDYY)**, which owns the north-west German upper (over the Bremen FIR). The exact EDUU/EDYY lateral division and any overlap at the Langen-FIR northern edge is not asserted here — confirm against the current sector charts.
- **Sectorisation:** Langen ACC and Karlsruhe UAC are each divided into multiple ACC sectors that combine/split with traffic and staffing; the transit-relevant fact is the **GND–FL245 (Langen) / FL245+ (Karlsruhe "Rhein Radar")** band split.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **Langen ACC (EDGG, DFS)** — radar/surveillance control, GND–FL245, including the Frankfurt (EDDF) approach/TMA feed and the other in-FIR terminals.
- **Upper-airspace ATSU:** 🟩 **Karlsruhe UAC (EDUU, DFS — "Rhein Radar")** — radar/surveillance control of the upper airspace above FL245; the cruise band for our transits sits here.
- **FIS / FSS:** German **Flight Information Service (FIS)** provided by DFS for lower/uncontrolled airspace; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Langen FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute across ECAC upper airspace; **RNP 1** for terminal SID/STAR at the busy terminals; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**; full implementation completed 31 Dec 2018). Set channels precisely (e.g. 132.005).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — Karlsruhe UAC participates. A continental **Link 2000+** mandate for equipped aircraft, **not** an oceanic FANS-1/A requirement; VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is handed sequentially **Langen ACC (lower) → Karlsruhe UAC "Rhein Radar" (upper)** and onward to the adjacent-FIR ACC at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** German **FIS** (DFS) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **German and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **German FRA (DFS) applies in the upper airspace, FL245 and above** — direct point-to-point routeing between defined FRA entry/exit points across the DFS area of responsibility (UIR Rhein/EDUU, plus FIR München and FIR Bremen). DFS rolled FRA out from 2018 and reached **H24 availability from FL245/FL285 across its AoR on 10 Oct 2019**. Much of the cruise across the Langen upper airspace is therefore direct rather than airway-constrained.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and where the RAD restricts direct routeing, the **fixed ATS-route network** applies — including the SID/STAR feeder structure into the Frankfurt (EDDF) TMA and the other in-FIR terminals.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding the Frankfurt hub; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Frankfurt (EDDF, home hub)**, **Stuttgart (EDDS)**, **Cologne/Bonn (EDDK)**, **Düsseldorf (EDDL)**, **Saarbrücken (EDDR)**, **Frankfurt-Hahn (EDFH)**. Terminal detail is in the airport briefings (§9). 🟧 Precise FIR membership of the western/central aerodrome roster confirmed against the DFS AIP; Munich (EDDM) and Nuremberg (EDDN) sit in **München FIR (EDMM)**, and Berlin/Hamburg/Hannover in **Bremen FIR (EDWW)** — not this FIR.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low-to-moderate throughout. The uplands within the FIR — **Taunus, Vogelsberg, Rhön, Swabian Jura (Schwäbische Alb)** and the **Black Forest (Schwarzwald)** in the south-west — top out at the **Feldberg (~4,898 ft / 1,493 m)** in the Black Forest. Not a cruise-level factor at FL290+.
- **Boundary terrain:** 🟧 the **Alps** and the highest terrain in the region lie **across the southern boundary in München FIR (EDMM)** and adjacent Switzerland/Austria — a driftdown/escape corridor over high terrain is a München-FIR consideration, not a Langen one. Noted so the boundary is explicit.
- **Driftdown / depressurisation escape:** not a cruise-level constraint within Langen (cruise clears all terrain by a wide margin); relevant only to one-engine driftdown / emergency descent, and the **very high diversion-field density** (EDDF/EDDS/EDDK/EDDL all inside, plus EDDM/EDDN just outside) removes any terrain-limited escape problem.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter, not in enroute cruise — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Frankfurt-Main | **EDDF** | Home hub / primary dep-return alternate | [EDDF brief](../../../destinations/europe/germany/eddf/index.md) |
| Stuttgart | **EDDS** | In-FIR alternate (S) | [EDDS brief](../../../destinations/europe/germany/edds/index.md) |
| Cologne/Bonn | **EDDK** | In-FIR alternate (W); H24, cargo | [EDDK brief](../../../destinations/europe/germany/eddk/index.md) |
| Düsseldorf | **EDDL** | In-FIR alternate (W) | [EDDL brief](../../../destinations/europe/germany/eddl/index.md) |
| Saarbrücken | **EDDR** | Minor in-FIR alternate (SW) | Brief to build 🟧 |
| Frankfurt-Hahn | **EDFH** | Minor in-FIR alternate / cargo (W) | Brief to build 🟧 |
| Munich | **EDDM** | Adjacent-FIR alternate — **in München FIR (EDMM)**, SE | [EDDM brief](../../../destinations/europe/germany/eddm/index.md) |

- **Coverage note:** 🟩 dense — a suitable Cat I field is always within short range, so **ETP/critical-point planning is not a driver** in this radar-controlled continental FIR. EDDF is the natural departure/return alternate; EDDS/EDDK/EDDL give in-FIR redundancy; EDDM is the nearest major just across the München boundary.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 German airspace carries **extensive military TRA/TSA** activated **daily via the AUP/UUP** (Airspace Use Plan / Updated Use Plan); associated **Conditional Routes (CDR1/2/3)** open and close accordingly, and the **RAD (Route Availability Document)** governs which levels/segments are flyable. The SimBrief route is validated against the current RAD — confirm active TRAs/CDRs at planning.
- **Danger / restricted / prohibited areas:** 🟧 numerous **ED-R (restricted)** and **ED-D (danger)** areas across the FIR (ranges, military training). Named areas and status are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any German refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Summer convection** — embedded CB / hail / squall lines over central Germany; thunderstorm avoidance and turbulence handled tactically.
  - **Winter terminal icing / low visibility / snow** at the in-FIR terminals (EDDF, EDDS) — a terminal, not enroute, driver; see the airport briefings and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across European upper airspace and have historically closed large volumes of it (2010). **VAAC London** is the responsible advisory centre; a live SIGMET/VA advisory is the one thing that would materially threaten this otherwise-benign FIR.
  - **Space weather:** negligible at these mid-latitudes — no HF/GNSS-degradation planning driver here.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET (convection, turbulence), **VAAC London** volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** (AIP ENR 2.1) — stated as Class C predominant in controlled airspace, C/D in the TMA; not individually re-verified.
- **EDUU / EDYY upper-airspace lateral split** at the Langen-FIR north-western edge (Karlsruhe UAC vs Maastricht UAC) — confirm against current sector charts.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 (EU datalink area) — confirm per-sector at planning.
- Precise **in-FIR aerodrome roster** (western/central Germany) against the current DFS AIP — the confident majors are listed; edge cases confirm at planning.
- **Saarbrücken (EDDR)** and **Frankfurt-Hahn (EDFH)** have no OM C airport briefs yet — build if they become planned alternates.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **DFS AIP Germany — ENR sections** (Deutsche Flugsicherung GmbH): ENR 1.4 (airspace classification), 1.6 (surveillance/ADS-B), 1.7/1.8 (RVSM, comms-failure), 2.1 (FIR/UIR & control-area structure), 3.x/5.x (ATS routes, CDR, ED-R/ED-D restricted/danger areas). Primary source of record for FIR structure, classes, routes — https://aip.dfs.de (retrieved 2026-07-25).
- **DFS — Free Route Airspace** (FRA available FL245+; DFS AoR incl. UIR Rhein/EDUU, FIR München, FIR Bremen) — https://www.dfs.de/homepage/en/services/commercial-aviation/free-route-airspace/ (retrieved 2026-07-25).
- **EUROCONTROL — Free Route Airspace** concept & implementation — https://www.eurocontrol.int/concept/free-route-airspace (retrieved 2026-07-25).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.
- **VATSIM Germany Knowledgebase** — *Langen FIR (EDGG)* structure and *Above FL245 — Langen FIR (EDGG)* (Karlsruhe UAC / "Rhein Radar", EDUU) — https://knowledgebase.vatsim-germany.org/books/langen-fir-edgg and https://knowledgebase.vatsim-germany.org/books/eduu-rhein-radar/page/above-fl245-langen-fir-edgg (retrieved 2026-07-25). *Tier-4 corroboration only — the lower/upper FL245 split and the EDUU "Rhein Radar" callsign cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from the new `_FIR Briefing Template.md`. Langen FIR (EDGG): GND–FL245 Langen ACC / FL245+ Karlsruhe UAC ("Rhein Radar", EDUU) split; DFS ANSP; adjacent-FIR boundaries (Bremen, München incl. the Alps step-up, plus EHAA/EBBU/LFEE/LSAS); RVSM/RNAV5/RNP1/8.33/CPDLC/ADS-B referenced to OM E; German FRA FL245+; Black-Forest terrain floor; in-FIR aerodromes + EDDM adjacent; military TRA/AUP/RAD SUA; SERA contingency; volcanic-ash strategic note. Parent area brief: Europe (Continental). |
| v0.1 | 2026-07-25 | Moved to regional folder Airspace/FIR/Europe/; relative links re-based. |
