# Madrid (LECM) — FIR Briefing

**Scope:** single FIR — central, western & northern mainland Spain · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Bordeaux (LFBB) N · Brest (LFRR) NW (Bay of Biscay oceanic edge) · Barcelona (LECB) E · Lisboa (LPPC) W · Casablanca (GMMM) S (Strait of Gibraltar)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — verified vs ENAIRE AIP ENR 2.1 structure + EU framework; ATS-unit sector delegation and exact adjacent-FIR coordinates flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Madrid is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (LEMD, LEBB, LEXJ, LEZL, LEZG …) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LECM** — FIR Madrid, lower **SFC–FL195**; UIR Madrid **FL195–UNL** (same designator, ANSP-published as separate FIR/UIR tables) |
| Controlling ATSU / ANSP | **Madrid ACC (LECM), ENAIRE** — primary ATS unit for the whole FIR/UIR; 🟧 **Sevilla ACC** is published as a secondary ATS unit for a delegated southern-sector volume (exact lateral/vertical split not confirmed in the retrieved AIP extract). ANSP: **ENAIRE** |
| Airspace class & vertical limits | 🟧 **SFC–FL145 Class G**, **FL145–FL195 Class C** (except one small Class E volume near the French border), **FL195–FL660 Class C**, **FL660–UNL Class G** — confirm exact class per band at **AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute (already the base spec at/above FL150 across Spain) · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **Spanish + English** (English always available) |
| Key hazard(s) | Benign-to-moderate. High **traffic density** around the Madrid hub and the Madrid–Barcelona–Sevilla trunk; dense **military TRA/TSA/EN-R** activated by AUP/UUP; **Pyrenees** and northern Iberian sierras the significant terrain belts; Icelandic volcanic ash a strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). Spanish + English; English always available. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU datalink area, EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet (EU 2017/386). |
| Terrain / MORA / driftdown | 🟧 | Low-to-moderate over the central plateau (Meseta); the **Pyrenees** sit across the northern boundary area and the **Sistema Central/Sistema Ibérico** uplands cross the FIR interior — not asserted as a cruise-level factor, but confirm grid MORA at planning. §8. |
| Diversion-aerodrome coverage | 🟩 | Good — LEMD/LEBB/LEXJ/LEZL/LEZG all inside the FIR; curated briefs exist for all five (§9). |
| Special-use airspace (military / danger) | 🟧 | Spain carries extensive **military TRA/TSA and EN-R (restricted/danger)** areas activated **daily via AUP/UUP**; CDR1/2/3 open/close accordingly; **RAD** governs flyable levels/segments. Confirm active at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** FIR Madrid covers **central, western and northern mainland Spain** — Madrid and the Meseta Central, Castilla y León, Castilla-La Mancha, Extremadura, Galicia, Asturias, Cantabria, the Basque Country, and (per the AIP ATS-unit delegation, §4) the Sevilla-administered southern sectors extending toward Andalucía. Per **AIP ENR 2.1**, the published lateral limits run broadly **4500N 01300W, 4500N 00800W, 4420N 00400W, 4335N 00147W, 4323N 00147W**, along the **Spanish-French border** to **4242N 00004W**, then **3944N 00106W, 3550N 00206W, 3550N 00723W, 3558N 00723W**, along the **Spanish-Portuguese border** to its NW edge on the Atlantic coast, then **4200N 01000W, 4300N 01300W**, closing at **4500N 01300W**.
- **Vertical split:** 🟩 **FIR Madrid SFC–FL195** and **UIR Madrid FL195–UNL** are published as separate tables in the AIP but worked by the same ATSU (Madrid ACC) — there is no separate upper-area control centre analogous to a German-style UAC. Below FL145 is uncontrolled **Class G** outside other classified airspace; **FL145–FL195 Class C**; the **UIR (FL195–FL660) Class C**, **FL660–UNL Class G**.
- **Adjacent FIRs (by boundary):**
  - **N — Bordeaux (LFBB, DSNA), France.**
  - **NW — Brest (LFRR, DSNA), France** — Bay of Biscay oceanic-edge coordination.
  - **E/SE — Barcelona (LECB, ENAIRE).**
  - **W — Lisboa (LPPC, NAV Portugal)** — along the Spanish-Portuguese land border.
  - **S — Casablanca (GMMM, ONDA), Morocco** — across the Strait of Gibraltar / Alborán Sea; a Letter-of-Agreement framework links Madrid, Canarias and Casablanca ACCs for this interface.
- **Sectorisation:** Madrid ACC is divided into multiple ACC sectors combining/splitting with traffic and staffing; 🟧 the **Sevilla ACC** delegation for the southern sector volume (also published against FIR Barcelona, §4) is durable structural context but its precise lateral/vertical extent is not detailed in the retrieved AIP extract — confirm against current sector charts.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **Madrid ACC (LECM), ENAIRE** — radar/surveillance control, SFC–FL195, including the Madrid (LEMD) approach/TMA feed and the other in-FIR terminals.
- **Upper-airspace ATSU:** 🟩 **Madrid ACC** also works the UIR (FL195–UNL); no separate upper-area unit is published for this FIR (unlike the Langen-FIR/Karlsruhe-UAC split).
- **Secondary ATS unit:** 🟧 **Sevilla ACC, ENAIRE** — published in AIP ENR 2.1 as ATS Unit 2 for both FIR/UIR Madrid and FIR/UIR Barcelona, implying a delegated southern-Spain sector volume worked from the Sevilla facility; exact boundary not confirmed here.
- **FIS / FSS:** Spanish **Flight Information Service (FIS)** provided by ENAIRE for lower/uncontrolled airspace; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Madrid FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** — Spain's ATS routes at/above FL150 are already RNAV 5-based, extending across the upper airspace; **RNP 1** for terminal SID/STAR at the busy terminals; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048** and Spain's national PBN transition plan. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**; full implementation completed 31 Dec 2018).
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — a continental **Link 2000+** mandate for equipped aircraft, **not** an oceanic FANS-1/A requirement; VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is handed sequentially through **Madrid ACC** sectors (and, in the southern part of the FIR, potentially **Sevilla ACC**) and onward to the adjacent-FIR ACC at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Spanish **FIS** (ENAIRE) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Spanish and English**; English is always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **Spanish FRA (ENAIRE)** applies in the upper airspace; Spain and Portugal have progressively merged their FRA cells into a cross-border **South-West FRA (SW-FRA)** structure (SESAR Enhanced FAB SW Crossborder Free-Route deployment), giving largely direct point-to-point routeing between defined entry/exit points across the Madrid/Barcelona/Lisboa upper airspace. 🟧 Exact current FL floor and H24/day-only status not independently re-verified here — confirm at planning.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and where the RAD restricts direct routeing, the **fixed ATS-route network** applies — including the SID/STAR feeder structure into the Madrid (LEMD) TMA and the other in-FIR terminals.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding the Madrid hub; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Adolfo Suárez Madrid-Barajas (LEMD)**, **Bilbao (LEBB)**, **Seve Ballesteros-Santander (LEXJ)**, **Sevilla (LEZL)**, **Zaragoza (LEZG)**. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 low-to-moderate over the central plateau (Meseta); the **Sistema Central** and **Sistema Ibérico** ranges cross the FIR interior (peaks to roughly 8,000–8,700 ft), and the **Pyrenees** rise sharply along the northern boundary area toward the Bordeaux-FIR interface (peaks above 10,000 ft further east toward the Barcelona-FIR sector). Not asserted as a cruise-level factor at FL290+, but confirm grid MORA per sector at planning.
- **Boundary terrain:** the highest Pyrenean terrain sits toward the **Barcelona FIR (LECB)** eastern sectors and across into France — noted so the boundary is explicit; not re-derived here.
- **Driftdown / depressurisation escape:** not asserted as a cruise-level constraint within Madrid FIR at normal cruise levels; relevant only to one-engine driftdown / emergency descent over the interior uplands — the diversion-field spread (LEMD/LEBB/LEXJ/LEZL/LEZG) gives broad escape coverage. 🟧 Confirm driftdown clearance over the Sistema Central/Ibérico belts for the planned route at dispatch.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter (notably the higher-elevation/interior fields), not in enroute cruise — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Adolfo Suárez Madrid-Barajas | **LEMD** | Home-region hub / primary dep-return alternate | [LEMD brief](../../../destinations/europe/spain/lemd/index.md) |
| Bilbao | **LEBB** | In-FIR alternate (N) | [LEBB brief](../../../destinations/europe/spain/lebb/index.md) |
| Seve Ballesteros-Santander | **LEXJ** | In-FIR alternate (N coast) | [LEXJ brief](../../../destinations/europe/spain/lexj/index.md) |
| Sevilla | **LEZL** | In-FIR alternate (S, Sevilla-sector) | [LEZL brief](../../../destinations/europe/spain/lezl/index.md) |
| Zaragoza | **LEZG** | In-FIR alternate (NE); cargo-capable | [LEZG brief](../../../destinations/europe/spain/lezg/index.md) |

- **Coverage note:** 🟩 good spread across the FIR — LEMD is the natural departure/return alternate; LEBB/LEXJ give northern-coast redundancy, LEZL southern (Sevilla-sector) redundancy and LEZG north-eastern/cargo redundancy. **ETP/critical-point planning is not a driver** in this radar-controlled continental FIR.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 Spanish airspace carries **extensive military TRA/TSA** activated **daily via the AUP/UUP** (Airspace Use Plan / Updated Use Plan); associated **Conditional Routes (CDR1/2/3)** open and close accordingly, and the **RAD (Route Availability Document)** governs which levels/segments are flyable. The SimBrief route is validated against the current RAD — confirm active TRAs/CDRs at planning.
- **Danger / restricted / prohibited areas:** 🟧 numerous **EN-R (restricted)** and **EN-D (danger)** areas across the FIR (ranges, military training, government/royal-flight zones around Madrid). Named areas and status are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Spanish refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Summer convection** — embedded CB over the Meseta and along the Pyrenean/Cantabrian foothills; thunderstorm avoidance and turbulence handled tactically.
  - **Winter terminal icing / low visibility / fog** at the in-FIR terminals (notably LEMD's continental winter fog/frost and Cantabrian-coast fields) — a terminal, not enroute, driver; see the airport briefings and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across European upper airspace and have historically closed large volumes of it (2010). A live SIGMET/VA advisory is the one thing that would materially threaten this otherwise-benign FIR.
  - **Space weather:** negligible at these mid-latitudes — no HF/GNSS-degradation planning driver here.

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET (convection, turbulence), volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **Sevilla ACC** delegated-sector lateral/vertical boundary within FIR Madrid — durable structural fact per AIP ENR 2.1 (published as ATS Unit 2), but exact extent not detailed in the retrieved extract.
- Exact **airspace class letter per band** and the one Class-E exception volume near the French border (AIP ENR 2.1) — not individually re-verified.
- **SW-FRA (South-West Free Route Airspace)** current FL floor and H24/day-only status across the Madrid/Barcelona/Lisboa cross-border cell — confirm at planning.
- **Adjacent-FIR boundary coordinates** (Bordeaux, Brest, Barcelona, Lisboa, Casablanca interfaces) stated at plain-language/AIP-summary level; not independently re-verified point-by-point.
- Grid MORA over the **Sistema Central / Sistema Ibérico** interior belts — stated qualitatively; confirm exact values if used for driftdown planning.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ENAIRE AIP España — ENR 2.1** (FIR/UIR Madrid: lateral/vertical limits, ATS units) — https://aip.enaire.es/AIP/contenido_AIP/ENR/LE_ENR_2_1_en.html (retrieved 2026-07-26).
- **ENAIRE AIP España — GEN 1.5 / ENR 1.x** (8.33 kHz, PBN, RVSM references) — https://aip.enaire.es/aip/contenido_AIP/GEN/LE_GEN_1_5_en.pdf (retrieved 2026-07-26).
- **Spain PBN Transition Plan** (Ministerio de Transportes) — RNAV 5 base spec at/above FL150 — https://www.transportes.gob.es/recursos_mfom/comodin/recursos/pbn_transition_plan_spain_v4.1_accesible.pdf (retrieved 2026-07-26).
- **SESAR Deployment Manager — Enhanced FAB SW Crossborder Free-Route** (SW-FRA, Spain–Portugal) — https://www.sesardeploymentmanager.eu/projects/2022_009_af3_eur (retrieved 2026-07-26).
- **EUROCONTROL — Free Route Airspace** concept & implementation — https://www.eurocontrol.int/concept/free-route-airspace (retrieved 2026-07-26).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.
- **VATSIM Spain Biblioteca / IVAO Spain wiki** — *FIR Madrid (LECM)* and Madrid–Bordeaux/Brest ACC letters of agreement — https://biblioteca.vatsimspain.es/books/fir-madrid-lecm and https://wiki.es.ivao.aero/books/loas/page/madrid-acc-lecm-and-bordeaux-acc-lfbb (retrieved 2026-07-26). *Tier-4 corroboration only — adjacent-ACC interfaces cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
