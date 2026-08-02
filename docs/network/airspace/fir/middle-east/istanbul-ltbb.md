# Istanbul (LTBB) — FIR Briefing

**Scope:** single FIR — **north-western/European Turkey**, Thrace, the Sea of Marmara and part of the Black Sea, containing **Istanbul (LTFM)** and **Sabiha Gökçen Intl (LTFJ)** · **Parent area brief:** [Middle East](../../middle-east.md) 🟩 · **Adjacent FIRs:** Ankara (LTAA, Turkey) E/SE — the sibling FIR covering the rest of the country · Sofia (LBSR, Bulgaria) NW · Bucharest (LRBB, Romania) N (across the Black Sea) · Nicosia (LCCC, Cyprus) S 🟧 · Athinai/Athens (LGGG, Greece) SW 🟧 — exact boundary decimals not independently verified
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional; FIR area/perimeter and ANSP confirmed from public sources, per-band class letters, exact adjacency decimals and CPDLC/PBN detail flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Istanbul is a **radar/ADS-B-surveillance-controlled continental FIR** at the crossroads of Europe and the Middle East, immediately adjacent to its sibling Ankara (LTAA) FIR which covers the remainder of Turkey and the approach to the more conflict-sensitive eastern/south-eastern airspace. Routings and levels here are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (LTFM, LTFJ) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LTBB** — Istanbul FIR/UIR. Area ≈ **224,956 km²**, perimeter ≈ **2,383 km** — the smaller of Turkey's two FIRs, covering the European/north-western part of the country |
| Controlling ATSU / ANSP | **Istanbul ACC**, operated by **DHMİ (Devlet Hava Meydanları İşletmesi — General Directorate of State Airports Authority)**, Turkey's ANSP and a EUROCONTROL member state |
| Airspace class & vertical limits | 🟧 Controlled upper airspace to the FIR's upper limit; TMAs around Istanbul/Sabiha Gökçen are Class C/D. Confirm exact class per band at **DHMİ AIP ENR 2.1 / ENR 1.4** |
| RVSM | 🟥 Applicable **FL290–FL410** — Turkish airspace is **EUR RVSM transition airspace**, aligned with ICAO EUR RVSM — see OM E §5 |
| PBN environment | 🟧 **RNAV 5** enroute (EUR/ECAC-aligned) · terminal **RNP 1** SID/STAR expected around the LTFM/LTFJ Point Merge System · **RNP APCH** arrivals — see OM E §5; DHMİ AIP is the source of record |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 CPDLC availability/mandate not independently confirmed for LTBB — confirm at planning |
| Primary language & comms | 🟩 **VHF throughout**; **Turkish + English** (ICAO); **8.33 kHz mandatory above FL195** across Turkish airspace (aligned with the wider EUR 8.33 kHz mandate) |
| Key hazard(s) | 🟧 Very high **traffic density** and airspace complexity around the Istanbul terminal area (one of the busiest hub complexes on the Europe–Asia crossroads); **GPS spoofing/jamming reported over the Black Sea and the Turkish side of the Ankara-FIR boundary** (regional GNSS-interference exposure, §10); no significant terrain within this FIR |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-surveillance-controlled throughout; DHMİ Istanbul ACC. No procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; Turkish + English (ICAO), English always available on IFR sectors. **8.33 kHz mandatory above FL195.** |
| Datalink / surveillance requirement | 🟧 | Radar + ADS-B confirmed; **CPDLC applicability/mandate for LTBB not independently confirmed** — confirm at planning. |
| Terrain / MORA / driftdown | 🟩 | Low-to-moderate — Thrace and the Marmara basin are generally benign; the significant Anatolian terrain lies across the boundary in **Ankara FIR (LTAA)**, not here. §8. |
| Diversion-aerodrome coverage | 🟩 | Dense — LTFM and LTFJ both inside the FIR, serving one of the world's busiest airport systems; both H24, full-service. §9. |
| Special-use airspace (military / danger) | 🟧 | Turkey publishes restricted/danger areas (military, Bosphorus-strait-related) across the FIR; activation and status are AIP/NOTAM-published — confirm at planning. §10. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 / RNP 1 (expected) · RNP APCH · 8.33 kHz above FL195 · Mode S + ADS-B Out.** Defined in OM E; confirm the current-AIRAC route meets DHMİ requirements. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** the Istanbul FIR covers **north-western/European Turkey** — Thrace west of the Bosphorus, the Istanbul metropolitan/Marmara basin, and a portion of Anatolia immediately east of the Bosphorus, plus airspace over the **Sea of Marmara** and part of the **Black Sea** to the north. It is the smaller and more compact of Turkey's two FIRs by area (~225,000 km² vs Ankara FIR's ~754,000 km²), but carries a disproportionate share of the country's busiest traffic through the Istanbul hub complex.
- **Confirmed containment:** 🟩 **Istanbul (LTFM)** and **Sabiha Gökçen Intl (LTFJ)** both sit within the Istanbul FIR (LTBB) — the two airports flanking the Bosphorus on the European and Asian sides of the city respectively.
- **Adjacent FIRs (by boundary):**
  - **E / SE — Ankara (LTAA, Turkey, DHMİ).** 🟥 **The key interface for this brief** — Turkey's other, much larger FIR, covering central and eastern Anatolia and the approach to Turkey's borders with Georgia, Armenia, Iran, Iraq and Syria. A K Global transit continuing east or south-east from Istanbul crosses into Ankara FIR's jurisdiction; the more conflict-sensitive eastern Turkish border region (and the GNSS-interference exposure noted along it, §1/§10) belongs to Ankara FIR, not Istanbul — confirm handoff sector/point at planning.
  - **NW — Sofia (LBSR, Bulgaria).** The Bulgarian FIR to the north-west, on the Balkan approach.
  - **N (Black Sea) — Bucharest (LRBB, Romania).** 🟧 The Black Sea boundary toward Romanian airspace; exact maritime boundary not independently verified here.
  - **S — Nicosia (LCCC, Cyprus).** 🟧 Mediterranean boundary to the south; not independently verified.
  - **SW — Athinai/Athens (LGGG, Greece).** 🟧 Aegean boundary to the south-west; not independently verified.
- **Vertical split:** 🟧 not independently confirmed whether Istanbul FIR carries a separate lower/upper ATSU split (as some European FIRs do); treat as a single ACC (Istanbul ACC) structure unless the current DHMİ AIP indicates otherwise.
- **Sectorisation:** 🟧 Istanbul ACC is divided into multiple sectors to handle the dense Istanbul terminal-area traffic feeding LTFM/LTFJ, including a **Point Merge System** in the LTFM TMA for arrival sequencing; exact enroute sector count/boundaries not published here — confirm current AIRAC.

---

## 4. Control & ATSU

- **Enroute ATSU:** **Istanbul ACC (LTBB, DHMİ)** — radar/ADS-B surveillance control of the FIR.
- **Terminal ATSU:** Istanbul and Sabiha Gökçen approach/TMA control, feeding the two hub airports; the **LTFM TMA uses a Point Merge System** for arrival management given the density of traffic. Precise terminal-unit naming/AoR split to confirm at DHMİ AIP.
- **FIS / FSS:** DHMİ **AIS/FIS**; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous **radar + ADS-B**; no procedural pockets on a normal IFR routing. 🟧 **GPS spoofing/jamming has been reported over the Black Sea** within reach of this FIR's northern extent — a navigation/surveillance caveat carried over from the wider regional picture (§10).

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Istanbul FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — Turkish airspace between these levels is **EUR RVSM Transition Airspace**, aligned with ICAO EUR RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟧 **RNAV 5** enroute expected (Turkey follows the broader EUR/ECAC PBN trajectory as a EUROCONTROL member state); **RNP 1** terminal SID/STAR likely around the Point Merge-equipped LTFM TMA; **RNP APCH** arrivals. Not independently confirmed against current DHMİ AIP — see [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory above FL195** across Turkish airspace (consistent with the wider ICAO EUR 8.33 kHz mandate, which requires equipage above FL245 in most EUR states and Turkey applies from FL195). Set channels precisely.
- **Datalink (CPDLC):** 🟧 **not independently confirmed** whether/where CPDLC is mandated in the Istanbul FIR; VHF voice is primary. Confirm at planning — see [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟧 **Mode S** transponder and **ADS-B Out** expected consistent with EUR-region practice; confirm current DHMİ mandate and equipage on the OFP.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is handed sequentially across the **Istanbul ACC** sectors and the LTFM/LTFJ approach units; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/DHMİ AIP frequencies, not a stored table.
- **FIS / lower airspace:** DHMİ **AIS/FIS** for information service.
- **Language:** 🟩 **Turkish and English**; English always available on IFR/controlled sectors.
- **Channel spacing:** 🟥 **8.33 kHz mandatory above FL195**.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 not independently confirmed for the Istanbul FIR specifically; Turkey has been studied/engaged on cross-border free-route implementation with neighbouring airspaces (academic/EUROCONTROL literature references Turkish free-route analysis) — confirm current status at planning, do not assume FRA is live without checking the current AIP.
- **Airway spine:** the dense Europe–Middle East trunk routes converge on the Istanbul terminal complex; the SimBrief/current-AIRAC route provides the exact structure.
- **Major fixes / entry-exit points:** the FIR-boundary transition fixes toward Sofia/Bucharest/Nicosia/Athens, the Bosphorus-strait crossing points, and the LTFM/LTFJ TMA arrival transitions (including the **Point Merge** system feeding LTFM); the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Istanbul (LTFM)** and **Sabiha Gökçen Intl (LTFJ)** — the two K Global-served fields, flanking the Bosphorus. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 generally **low-to-moderate** — the Thrace plain and the Marmara basin carry no significant high terrain; this FIR is benign from a cruise-terrain perspective.
- **Boundary terrain:** 🟧 the more significant Anatolian high terrain (interior plateau, and the higher ranges further east toward the Caucasus/Iran borders) lies across the boundary in **Ankara FIR (LTAA)** — noted so the boundary is explicit; not a factor within Istanbul FIR itself.
- **Driftdown / depressurisation escape:** 🟩 not a cruise-level constraint — the dense diversion-field set (LTFM, LTFJ, both H24) removes any terrain-limited escape problem within this FIR.
- **Cold-temperature altitude corrections:** 🟧 relevant at the terminal level in winter (Istanbul sees occasional snow/cold spells) — see the airport briefings, not an enroute cruise factor here.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Istanbul | **LTFM** | Primary in-FIR alternate — major, H24 | [LTFM brief](../../../destinations/middle-east/turkey/ltfm/index.md) |
| Sabiha Gökçen Intl | **LTFJ** | In-FIR alternate — major, H24, Asian-side | [LTFJ brief](../../../destinations/middle-east/turkey/ltfj/index.md) |

- **Coverage note:** 🟩 dense — both K Global-served fields sit within short range of each other on either side of the Bosphorus, so a same-FIR diversion is straightforward; **ETP/critical-point planning is not a driver** in this radar-controlled FIR.

---

## 10. Special-use airspace

- **Military TRA / TSA / danger areas:** 🟧 Turkey publishes **restricted and danger areas** across its airspace, including areas associated with the Bosphorus/Marmara strategic corridor and military installations; activation and status are AIP/NOTAM-published — confirm active at planning.
- **GNSS jamming & spoofing — regional caveat:** 🟧 **GPS spoofing/jamming has been reported over the Black Sea** in Turkish airspace and along the **Ankara FIR border with the wider conflict-affected region** (per the Middle East area brief's regional GNSS picture) — while not established as a routine feature specifically inside Istanbul FIR's core, its northern Black Sea extent shares the same exposure. Brief the DME/DME/IRU cross-check and conventional-navaid fallback (OM E) and notify ATC early if symptoms appear.
- **Overflight-permit / diplomatic considerations:** 🟩 standard Turkish civil operation for a normal hub transit — Turkey is not itself conflict-affected in this FIR, though note the wider regional context (Ankara FIR interface, §3) if continuing further east/south-east.
- **Bilateral/diplomatic note (Ankara-FIR-adjacent, factual):** 🟧 Turkish–Armenian civil aviation relations have varied with the political relationship (e.g. periods of airspace restriction on Armenian-flagged aircraft, and periods of normalisation including new scheduled service between the two capitals in 2026) — a diplomatic-context item relevant to regional planning rather than to Istanbul FIR structure itself; see the companion [Yerevan (UDDD)](yerevan-uddd.md) brief.

> **SUA currency:** re-check active restricted/danger-area status and any NOTAM-driven routing constraint at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** 🟧 assume ICAO-standard comms-failure procedure (squawk **7600**, continue per the last acknowledged clearance/filed route and levels, attempt the previous/adjacent frequency and 121.5); confirm any Turkish-specific refinement at **DHMİ AIP ENR 1.8**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic offset table applies.
- **GNSS degradation contingency:** 🟧 with spoofing/jamming reported over the adjacent Black Sea/eastern-border area, be prepared for FMS position drift or spurious alerts — cross-check with DME/DME/IRU, advise ATC, and follow OM E GNSS-interference guidance.
- **Seasonal hazards (durable):**
  - **Winter snow/icing** at the Istanbul terminals — a terminal driver; see the airport briefs and OM E Cold Weather Operations.
  - **Convection** over the Marmara/Black Sea coast in summer; handled tactically.
  - **Bosphorus/Marmara fog** — coastal/marine-influenced low-visibility events at the terminals; a terminal, not enroute, driver.

> **Pull at planning (T-2h):** enroute NOTAMs, active restricted/danger areas, SIGMET/AIRMET, GNSS-interference advisories (Black Sea / eastern-border exposure), the current Ankara-FIR conflict-adjacency picture if continuing east, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class per band** and **vertical/sector structure** (DHMİ AIP ENR 2.1/1.4) — stated at summary level only.
- Precise **adjacent-FIR boundary decimals** (Sofia LBSR, Bucharest LRBB, Nicosia LCCC, Athinai LGGG) — not independently verified.
- **PBN specification (RNAV 5 / RNP 1) and CPDLC availability/mandate** for LTBB specifically — assumed from EUR/ECAC baseline, not confirmed against current DHMİ AIP.
- **Free Route Airspace status** for the Istanbul FIR — not confirmed live or planned; check current AIP before assuming FRA applies.
- **Ankara (LTAA) FIR interface** — handoff sector/point and the boundary's relevance to any continuation toward the more conflict-sensitive eastern Turkish border region; a companion Ankara FIR brief does not yet exist.
- GNSS jamming/spoofing extent **specifically within Istanbul FIR** (vs the broader Black Sea/eastern-Turkey picture) — not independently quantified here.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **DHMİ AIP Türkiye — ENR sections** (General Directorate of State Airports Authority): ENR 2.1 (FIR/UIR & control-area structure, airspace classes), ENR 1.8 (regional supplementary procedures / Doc 7030), ENR 1.10 (flight planning). Primary source of record for FIR structure, classes and routes — https://dhmi.gov.tr/AIPDocuments/LT_ENR_2_1_en.pdf and https://www.dhmi.gov.tr/AIPDocuments/LT_ENR_1_8_en.pdf (retrieved 2026-08-01).
- **metar-taf.com — Istanbul FIR (LTBB)** (FIR area ≈224,956 km², perimeter ≈2,383 km; Ankara FIR ≈754,277 km², perimeter ≈4,763 km — comparative sizing) — https://metar-taf.com/fir/LTBB-Istanbul (retrieved 2026-08-01). *Tier-4 corroboration of FIR sizing only.*
- **EUROCONTROL — LSSIP 2019 Turkey (Level 1 implementation overview)** — DHMİ EUROCONTROL membership, RVSM/8.33 kHz/PBN implementation trajectory — https://www.eurocontrol.int/sites/default/files/2020-05/eurocontrol-lssip-2019-turkey-level1.pdf (retrieved 2026-08-01).
- **DHMİ — LTFM STAR chart documentation** (Istanbul TMA Point Merge System context, Marmara/Black Sea sector references) — https://www.dhmi.gov.tr/AIPDocuments/LT_AD_2_LTFJ_STAR_01_en.pdf (retrieved 2026-08-01).
- **Safe Airspace (OPSGROUP) — Turkey** (GPS spoofing/jamming over the Black Sea and Turkish airspace; regional GNSS-interference context) — https://safeairspace.net/turkey/ (retrieved 2026-08-01). *Advisory/live source — re-check at planning.*
- **Middle East area brief (K Global)** — regional GNSS-interference and Ankara-FIR-border context — [`../../General/Middle East.md`](../../middle-east.md) §9.
- Companion OM C files: [`LTFM — Briefing`](../../../destinations/middle-east/turkey/ltfm/index.md) · [`LTFJ — Briefing`](../../../destinations/middle-east/turkey/ltfj/index.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. Istanbul FIR (LTBB) containing LTFM/LTFJ; Ankara (LTAA) FIR interface noted as the key adjacency (larger sibling FIR covering the rest of Turkey and the approach to the more conflict-sensitive eastern border); other adjacencies (Sofia, Bucharest, Nicosia, Athinai) recorded with boundary decimals flagged 🟧; RVSM FL290–410 (EUR transition airspace) and 8.33 kHz above FL195 confirmed, PBN/CPDLC detail flagged 🟧 pending current DHMİ AIP confirmation; regional GNSS jamming/spoofing (Black Sea) carried over from the Middle East area brief. |
