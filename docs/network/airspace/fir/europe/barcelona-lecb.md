# Barcelona (LECB) — FIR Briefing

**Scope:** single FIR — eastern Spain, the Balearic Islands & the western Mediterranean · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Bordeaux (LFBB) N · Marseille (LFMM) NE · Madrid (LECM) W · Algiers (DAAA) S (western Mediterranean, approximate)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — verified vs ENAIRE AIP ENR 2.1 structure + EU framework; southern Mediterranean adjacency and ATS-unit sector delegation flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Barcelona is a **fully radar/surveillance-controlled continental FIR** with a Mediterranean maritime component — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (LEBL, LEAL, LEMG, LEVC, LEMI …) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LECB** — FIR Barcelona, lower **SFC–FL195**; UIR Barcelona **FL195–UNL** (same designator, ANSP-published as separate FIR/UIR tables) |
| Controlling ATSU / ANSP | **Barcelona ACC (LECB), ENAIRE** — primary ATS unit for the whole FIR/UIR; 🟧 **Sevilla ACC** is also published as a secondary ATS unit for a delegated sector volume (as with FIR Madrid, §4) — exact boundary not confirmed. Two in-FIR TACCs (Palma, Valencia) handle terminal-approach control. ANSP: **ENAIRE** |
| Airspace class & vertical limits | 🟧 **SFC–FL145 Class G**, **FL145–FL195 Class C** (except a small Class E volume near the French border), **FL195–FL660 Class C**, **FL660–UNL Class G** — confirm exact class per band at **AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance over land and the near-shore Mediterranean; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **Spanish + English** (English always available) |
| Key hazard(s) | Benign-to-moderate. High **traffic density** around the Barcelona hub, the Balearic holiday-traffic surge in summer, and the Madrid–Barcelona–French-border trunk; dense **military TRA/TSA/EN-R**; the Pyrenees rise along the NW boundary; Icelandic volcanic ash a strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). Spanish + English; English always available. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet (EU 2017/386). |
| Terrain / MORA / driftdown | 🟧 | Low over the Mediterranean coastal strip and the Balearics; the **Pyrenees** rise sharply toward the NW boundary with Bordeaux/Madrid FIRs. Not asserted as a cruise-level factor — confirm grid MORA at planning. §8. |
| Diversion-aerodrome coverage | 🟩 | Good — LEBL/LEAL/LEMG/LEVC/LEMI all inside the FIR; curated briefs exist for all five (§9). |
| Special-use airspace (military / danger) | 🟧 | Extensive **military TRA/TSA and EN-R** areas activated **daily via AUP/UUP**; CDR1/2/3 open/close accordingly; **RAD** governs flyable levels/segments. Confirm active at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** FIR Barcelona covers **eastern Spain** (Catalonia, Aragón's eastern edge, the Valencian Community, Murcia) plus the **Balearic Islands** and a broad **western Mediterranean** maritime sector, and (per the AIP ATS-unit delegation, §4) potentially a further southern volume delegated to Sevilla ACC. Per **AIP ENR 2.1**, the published lateral limits run broadly **4242N 00004W** along the **Spanish-French border** to **4226N 00310E, 4225N 00314E, 4200N 00440E, 3900N 00440E, 3820N 00345E, 3615N 00130W, 3550N 00206W, 3944N 00106W**, closing at **4242N 00004W**.
- **Vertical split:** 🟩 **FIR Barcelona SFC–FL195** and **UIR Barcelona FL195–UNL** are published as separate tables but worked by the same ATSU (Barcelona ACC) — no separate upper-area control centre. **SFC–FL145 Class G**, **FL145–FL195 Class C** (with a small Class E exception zone near the French border), **UIR (FL195–FL660) Class C**, **FL660–UNL Class G**.
- **Adjacent FIRs (by boundary):**
  - **N — Bordeaux (LFBB, DSNA), France.**
  - **NE — Marseille (LFMM, DSNA), France** — the principal cross-border interface for northbound/French traffic.
  - **W — Madrid (LECM, ENAIRE)** — shared land border across central-eastern Spain.
  - **S — Algiers (DAAA, EGSA/Algeria)** 🟧 **approximate** — the FIR's southern Mediterranean limit (around 36–38N) opens onto the western Mediterranean; the nearest African FIR is Algiers, but the exact hand-off point is not independently re-verified here.
- **Sectorisation:** Barcelona ACC is divided into multiple ACC sectors combining/splitting with traffic and staffing; two **TACCs (Terminal Area Control Centres)** — **Palma** and **Valencia** — handle terminal/approach control for the high-density Balearic and Valencian traffic under the Barcelona FIR umbrella. 🟧 The **Sevilla ACC** delegation (also published against FIR Madrid, §4) is durable structural context but its precise extent within this FIR is not detailed in the retrieved AIP extract.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **Barcelona ACC (LECB), ENAIRE** — radar/surveillance control, SFC–FL195, including the Barcelona (LEBL) approach/TMA feed and (via the Palma/Valencia TACCs) the Balearic and Valencian terminals.
- **Upper-airspace ATSU:** 🟩 **Barcelona ACC** also works the UIR (FL195–UNL); no separate upper-area unit is published for this FIR.
- **Secondary ATS unit:** 🟧 **Sevilla ACC, ENAIRE** — published in AIP ENR 2.1 as ATS Unit 2 for both FIR/UIR Barcelona and FIR/UIR Madrid; exact delegated-sector boundary not confirmed here.
- **FIS / FSS:** Spanish **Flight Information Service (FIS)** provided by ENAIRE for lower/uncontrolled airspace; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B** over land and the near-shore Mediterranean/Balearic area; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Barcelona FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute across the Spanish upper airspace; **RNP 1** for terminal SID/STAR at the busy terminals (notably Palma/Valencia TACC traffic); **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**; full implementation completed 31 Dec 2018).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — a continental **Link 2000+** mandate for equipped aircraft, **not** an oceanic FANS-1/A requirement; VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is handed sequentially through **Barcelona ACC** sectors (with **Palma/Valencia TACC** for Balearic/Valencian terminal traffic) and onward to the adjacent-FIR ACC at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Spanish **FIS** (ENAIRE) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Spanish and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **Spanish FRA (ENAIRE)** applies in the upper airspace; Spain and Portugal have progressively merged their FRA cells into a cross-border **South-West FRA (SW-FRA)** structure (SESAR Enhanced FAB SW Crossborder Free-Route deployment), giving largely direct point-to-point routeing across the Barcelona/Madrid upper airspace and toward the Balearics. 🟧 Exact current FL floor and H24/day-only status not independently re-verified here — confirm at planning.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and where the RAD restricts direct routeing, the **fixed ATS-route network** applies — including the SID/STAR feeder structure into the Barcelona (LEBL) TMA and the other in-FIR terminals.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding the Barcelona hub, the Balearic islands, and the Valencian-coast terminals; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Josep Tarradellas Barcelona-El Prat (LEBL)**, **Alicante-Elche (LEAL)**, **Málaga-Costa del Sol (LEMG)**, **Valencia (LEVC)**, **Región de Murcia (LEMI)**. Terminal detail is in the airport briefings (§9). 🟧 **Reconciliation note:** **Málaga (LEMG)** sits geographically in Andalucía (south-west Spain); its assignment to this FIR reflects the Sevilla-ACC delegated-sector structure noted in §3/§4 rather than the FIR's core Catalonia/Levante/Balearic territory. A subsequent pass on the **LEMG airport briefing pack** (public tier-4 corroboration, e.g. metar-taf.com's FIR lookup) found LEMG/Málaga is more commonly attributed to the **Madrid FIR (LECM)**, worked locally by Sevilla ACC, rather than to Barcelona FIR (LECB) — the LEMG airport pages have been corrected accordingly. **This entry is left in place but flagged for reconciliation** — confirm LECM vs LECB against the official ENR boundary chart before treating either FIR brief as authoritative on this point.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 generally low along the Mediterranean coastal strip and across the Balearics; the **Pyrenees** rise sharply toward the north-western boundary (shared with the Bordeaux/Madrid interface), and the **Sistema Bético/Sierra Nevada** uplands lie in the far south-west of the FIR's nominal territory (relevant if the Sevilla-delegated Málaga sector is flown). Not asserted as a cruise-level factor at FL290+, but confirm grid MORA per sector at planning.
- **Boundary terrain:** the highest Pyrenean peaks sit toward the France (Marseille/Bordeaux FIR) interface — noted so the boundary is explicit; not re-derived here.
- **Driftdown / depressurisation escape:** not asserted as a cruise-level constraint within Barcelona FIR at normal cruise levels; the mixed land/Mediterranean/Balearic geography gives varied escape profiles depending on routeing — the diversion-field spread (LEBL/LEAL/LEMG/LEVC/LEMI) supports coastal and inter-island diversions. 🟧 Confirm driftdown/ditching contingency for legs with extended overwater segments to the Balearics.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter where relevant, not in enroute cruise — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Josep Tarradellas Barcelona-El Prat | **LEBL** | Home-region hub / primary dep-return alternate | [LEBL brief](../../../destinations/europe/spain/lebl/index.md) |
| Alicante-Elche | **LEAL** | In-FIR alternate (Costa Blanca) | [LEAL brief](../../../destinations/europe/spain/leal/index.md) |
| Málaga-Costa del Sol | **LEMG** | In-FIR alternate (Sevilla-sector, SW) | [LEMG brief](../../../destinations/europe/spain/lemg/index.md) |
| Valencia | **LEVC** | In-FIR alternate (Levante coast) | [LEVC brief](../../../destinations/europe/spain/levc/index.md) |
| Región de Murcia | **LEMI** | In-FIR alternate (SE) | [LEMI brief](../../../destinations/europe/spain/lemi/index.md) |

- **Coverage note:** 🟩 good spread along the Mediterranean coast — LEBL is the natural departure/return alternate; LEAL/LEVC/LEMI give Levante-coast redundancy, LEMG south-western redundancy. **ETP/critical-point planning is a minor consideration only** for the Balearic-island crossings, not a general driver in this radar-controlled FIR.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 Spanish airspace carries **extensive military TRA/TSA** activated **daily via the AUP/UUP** (Airspace Use Plan / Updated Use Plan); associated **Conditional Routes (CDR1/2/3)** open and close accordingly, and the **RAD (Route Availability Document)** governs which levels/segments are flyable. The SimBrief route is validated against the current RAD — confirm active TRAs/CDRs at planning.
- **Danger / restricted / prohibited areas:** 🟧 numerous **EN-R (restricted)** and **EN-D (danger)** areas across the FIR (ranges, military training, naval exercise zones in the western Mediterranean). Named areas and status are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Spanish refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Summer convection** — embedded CB over the Pyrenean foothills and, in the Levante/Balearic area, occasional autumn "gota fría" (cut-off low) heavy-convection events; thunderstorm avoidance and turbulence handled tactically.
  - **Winter terminal icing / low visibility / fog** at the in-FIR terminals is a lesser factor here than in interior Spain, given the Mediterranean-coastal climate; still see the airport briefings and OM E LVO/Cold-Weather docs for the specific fields.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across European upper airspace and have historically closed large volumes of it (2010). A live SIGMET/VA advisory is the one thing that would materially threaten this otherwise-benign FIR.
  - **Space weather:** negligible at these mid-latitudes — no HF/GNSS-degradation planning driver here.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET (convection, turbulence), volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **Sevilla ACC** delegated-sector lateral/vertical boundary within FIR Barcelona, and its bearing on the **Málaga (LEMG)** FIR assignment — durable structural fact per AIP ENR 2.1, but exact extent not detailed in the retrieved extract.
- 🟧 **LEMG/Málaga FIR reconciliation (added on a later pass):** the LEMG airport briefing pack now names **Madrid FIR (LECM)**, not Barcelona FIR (LECB), as the controlling FIR (Sevilla ACC as local sector). This brief still lists LEMG as an in-FIR aerodrome (§7/§9) pending a primary-source ENR boundary check — treat the LEMG assignment above as **unreconciled between the two FIR briefs** until confirmed.
- Exact **airspace class letter per band** and the Class-E exception volume near the French border (AIP ENR 2.1) — not individually re-verified.
- **Southern Mediterranean adjacency (Algiers FIR, DAAA)** — stated as approximate; the exact hand-off point/coordination framework not independently re-verified.
- **SW-FRA (South-West Free Route Airspace)** current FL floor and H24/day-only status across the Barcelona/Madrid cross-border cell — confirm at planning.
- Driftdown/ditching contingency for the **Balearic overwater legs** — not separately derived; confirm per route.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ENAIRE AIP España — ENR 2.1** (FIR/UIR Barcelona: lateral/vertical limits, ATS units, TMA Barcelona) — https://aip.enaire.es/AIP/contenido_AIP/ENR/LE_ENR_2_1_en.html (retrieved 2026-07-26).
- **ENAIRE AIP España — GEN 1.5 / ENR 1.x** (8.33 kHz, PBN, RVSM references) — https://aip.enaire.es/aip/contenido_AIP/GEN/LE_GEN_1_5_en.pdf (retrieved 2026-07-26).
- **SESAR Deployment Manager — Enhanced FAB SW Crossborder Free-Route** (SW-FRA, Spain–Portugal) — https://www.sesardeploymentmanager.eu/projects/2022_009_af3_eur (retrieved 2026-07-26).
- **EUROCONTROL — Free Route Airspace** concept & implementation — https://www.eurocontrol.int/concept/free-route-airspace (retrieved 2026-07-26).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.
- **VATSIM Spain Biblioteca / IVAO Spain wiki** — *FIR Barcelona (LECB)* and Barcelona–Marseille/Bordeaux ACC letters of agreement — https://biblioteca.vatsimspain.es/books/fir-barcelona-lecb and https://wiki.es.ivao.aero/books/loas/page/barcelona-acc-lecb-and-marseille-acc-lfmm (retrieved 2026-07-26). *Tier-4 corroboration only — adjacent-ACC interfaces and the Palma/Valencia TACC structure cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
