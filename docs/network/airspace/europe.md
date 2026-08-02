# Europe (Continental) — Airspace Briefing

**Scope:** Continental Europe enroute — Germany → France → Spain → Portugal, coast-out near Lisbon · **FIRs / UIRs covered:** Langen (EDGG) + Karlsruhe UAC (EDUU, "Rhein Radar") · Reims (LFEE), Brest (LFRR), Bordeaux (LFBB) · Madrid (LECM) + Barcelona (LECB) · Lisboa (LPPC)
**Version** v0.1 · **Updated** 2026-07-19 · **Status** Draft — verified vs EUROCONTROL FRA + EU regulatory framework; exact per-state airspace-class letters flagged 🟧

> **Read-me:** Strategic transit reference for X-Plane 12 (FlightFactor 777-300ER, AIRAC 2607), not a chart or clearance. Routings and levels are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. This is the **low-threat continental sector** of the EDDF→SBGR leg: fully radar-controlled, dense diversion coverage, English throughout. Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash/conflict bulletins) are pulled at planning (§11). Open 🟧 items in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIRs / control authorities | **DE:** Langen ACC (EDGG, DFS) lower + **Karlsruhe UAC (EDUU, DFS) upper — "Rhein Radar"** · **FR:** Reims (LFEE), Brest (LFRR), Bordeaux (LFBB) ACCs (DSNA) · **ES:** Madrid (LECM) + Barcelona (LECB) ACC/UIR (ENAIRE) · **PT:** Lisboa ACC (LPPC, NAV Portugal) |
| Controlling ATSU(s) & type | **Fully radar/surveillance-controlled continental upper airspace** — no procedural/oceanic segment. Handoff to the oceanic corridor occurs at coast-out (see §3 / EUR-SAM Corridor briefing) |
| RVSM | 🟥 Applicable **FL290–FL410** throughout (ICAO EUR RVSM) — RVSM approval required |
| Separation standard | Radar/surveillance separation (typ. **5 NM** enroute, less in TMA); no oceanic minima in this sector |
| Datalink mandate | 🟧 **CPDLC (ATN B1 / VDL Mode 2) above FL285** in the EU datalink area (DE/FR/ES core sectors) per EU 2015/310 — for equipped aircraft; not an oceanic FANS mandate. Confirm per-sector at planning |
| Primary comms | 🟩 **VHF throughout — 8.33 kHz channel spacing mandatory**; English. No HF/SATVOICE needed in this sector |
| Key hazard(s) | Benign. Pyrenees terrain belt for driftdown only; summer convection over France/Iberia; conditional-route (CDR) / military TRA activation via AUP; Icelandic volcanic ash the one strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Overflight / conflict-zone risk | 🟩 | None on this routing. Schengen/EU states, no overflight permits, no conflict zones. Russia/Belarus/Ukraine airspace is far east and not transited. Re-check live bulletins at §11 regardless. |
| Communication coverage (VHF/HF/SATVOICE) | 🟩 | Continuous VHF radar coverage; 🟥 **8.33 kHz radios mandatory** (EU 1079/2012). No HF/SATVOICE requirement. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 in the EU datalink area (EU 2015/310) — equipped-aircraft mandate, confirm active sectors. Mode S + **ADS-B Out (1090ES) mandatory** for our 777 (>5700 kg / >250 kt) per EU 2017/386. |
| Terrain / MORA / driftdown | 🟩 | Not a cruise factor at FL290+. **Pyrenees (~11,200 ft)** is the one high belt — relevant only to one-engine driftdown / depressurisation escape; dense diversion field density mitigates. §7. |
| Diversion-airfield coverage | 🟩 | **Very dense** — dozens of Cat I fields the whole way. 🟧 Only **EDDF** (dep/return) has a curated brief in-library on this routing; French/Iberian majors brief at planning. §8. |
| Seasonal / environmental | 🟧 | Summer embedded CB/hail over France & Iberia; winter terminal icing; **Icelandic volcanic ash** (VAAC London) the strategic closer-of-airspace. Space-wx negligible at these latitudes. §11. |
| Equipment / approval (RVSM, RNAV5, 8.33, Mode S/ADS-B) | 🟥 | **RVSM FL290–410 · RNAV 5 enroute · RNP 1 terminal (SID/STAR) · 8.33 kHz · Mode S + ADS-B Out.** All standard on the FF 777; confirm the current-AIRAC route meets RAD. §4. |

---

## 3. Airspace structure

- **FIRs / UIRs & controlling ATSU (route order):**
  - **Germany — Langen FIR (EDGG) + Karlsruhe UAC (EDUU).** EDDF sits in Langen FIR; the departure (SOBRA1F off 25C) climbs through Langen ACC into **Karlsruhe Upper Area Control ("Rhein Radar")**, which owns German upper airspace above ~FL245. **Karlsruhe/DFS FRA** applies in the upper airspace (free routeing between defined entry/exit points).
  - **France — Reims (LFEE), Bordeaux (LFBB), Brest (LFRR) ACCs (DSNA).** A south-west transit crosses **Reims** (NE France) then **Bordeaux** (SW France); **Brest** owns the western sectors on a more westerly route. France operates **free-route in the upper airspace** (French FRA).
  - **Spain — Madrid (LECM) + Barcelona (LECB) ACC/UIR (ENAIRE).** The SW crossing traverses **Madrid UIR**. **ESPORTFRA** (Spain–Portugal cross-border FRA) applies.
  - **Portugal — Lisboa ACC (LPPC, NAV Portugal).** Coast-out near Lisbon (route via **PON/Ponte de Sor**). Portugal was the **first state to implement full FRA (7 May 2009)**; **ESPORTFRA** merges the Lisboa/Spanish free-route airspace.
- **Classes & level bands:** controlled upper airspace throughout. 🟧 **Class C predominates in the German and Spanish upper airspace; France/Portugal upper is Class C/D** — confirm the exact class letter per state at **AIP ENR 1.4 / 2.1** (varies by state and level band; not asserted here). RVSM band **FL290–FL410**; above FL410 to the upper limit (typ. FL660) is non-RVSM controlled airspace.
- **Oceanic / remote / procedural areas:** **none in this sector** — continuous radar/surveillance the entire way. The procedural/oceanic environment begins only after coast-out (see EUR-SAM Corridor).
- **Entry/exit & transition points:** free-route entry/exit points at each FRA cell boundary; conventional airway spine where FRA is not implemented (e.g. **Y180**, **UN857** segments still on the fixed network / RAD-constrained). **Transition to the oceanic corridor** occurs at the Lisboa coast-out / Canarias handoff — briefed in the EUR-SAM Corridor file, not here.

---

## 4. Equipment, approvals & separation

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region since Jan 2002). RVSM approval mandatory; the FF 777 is RVSM-capable.
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV) mandatory enroute** across ECAC upper airspace; **RNP 1 for terminal SID/STAR** at the busy terminals; **RNP APCH** for arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. No RNP4/RNP10 oceanic spec applies in this sector.
- **NAT HLA / MNPS:** N/A — no oceanic high-level airspace in this sector.
- **8.33 kHz channel spacing:** 🟥 **mandatory** for all IFR/GAT radios in the ICAO EUR region (**Commission Implementing Regulation (EU) No 1079/2012**, full implementation completed 31 Dec 2018). Carriage of 8.33 kHz-capable radios required.
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected above **FL285** within the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**, amending 29/2009) — Karlsruhe/Maastricht/Reims/Madrid and other core ACCs participate. A **continental Link 2000+ mandate for equipped aircraft**, not an oceanic FANS-1/A requirement. Confirm active CPDLC sectors and login procedure at planning.
- **Transponder / ADS-B:** 🟥 **Mode S transponder** required; **ADS-B Out (1090 MHz Extended Squitter) mandatory** for aircraft >5,700 kg MTOW or >250 kt — our 777-300ER qualifies — per **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.
- **Separation:** radar/surveillance separation (typ. 5 NM enroute; reduced in TMA). Longitudinal Mach technique / oceanic minima do **not** apply here.

---

## 5. Communications

- **VHF coverage:** 🟩 **continuous VHF radar coverage** the entire sector — no gaps, no HF, no SATVOICE. Sequential handoffs Langen → Karlsruhe/Rhein Radar → Reims → Bordeaux → Madrid → Lisboa, with tactical directs typical in FRA.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — set channels precisely (e.g. 132.005). Mandatory equipage (§4).
- **HF families & SELCAL:** N/A in this sector (relevant only after coast-out — see the EUR-SAM Corridor briefing).
- **SATVOICE / CPDLC:** CPDLC ATN B1 available/expected above FL285 in the EU datalink area (§4) — used to offload routine transfers and level requests; **VHF voice remains primary** and always available.
- **Language:** 🟩 **English** throughout (all four states provide English ATC on the upper sectors). French/Spanish/Portuguese may be used with domestic traffic but English is always available.
- **Inter-pilot / emergency:** air-to-air **123.45 MHz**; emergency/guard **121.5 MHz** (monitor).
- **Position reporting:** radar environment — no procedural position reports required; report only as instructed.

---

## 6. Routing & levels

- **Principal route structure:** mixed **Free Route Airspace + fixed-airway spine**. FRA is implemented in the German, French, Spanish and Portuguese upper airspace, so much of the cruise is direct point-to-point (the OFP's `DCT RAPOR DCT GIMER DCT ESTOC DCT PON` free-route segments over SW Europe/Iberia reflect this). Where FRA is not available or RAD-restricted, the fixed network applies (OFP legs **Y180** to DIK/Dijon, **UN857** to TOLVU).
- **Free Route Airspace (FRA):**
  - 🟩 **Germany:** Karlsruhe/DFS FRA (nationwide upper, FL245+).
  - 🟩 **France:** French FRA in the upper airspace.
  - 🟩 **Spain + Portugal:** **ESPORTFRA** (Spain–Portugal cross-border FRA, H24) — encompasses **Lisboa FIR FL245–FL660, Madrid UIR FL245–FL660, Barcelona UIR FL245–FL660, Canarias UIR FL305–FL660**. Portugal ran full FRA since **7 May 2009** (first state); Spain joined with initial FRA from **Apr 2022**, since enhanced.
  - 🟧 **Terminology note / correction:** the "**SECSI FRA**" is the **South-East Europe** cross-border FRA (Albania, Austria, Bosnia-Herzegovina, Croatia, Serbia, Montenegro, Slovenia, N. Macedonia) — it does **not** cover our SW routing. The correct SW-Europe construct is **ESPORTFRA**. Flagged so the mislabel doesn't propagate.
- **Typical level/flow:** southbound heavy 777, step-climb as weight burns off; plan FL290–FL410 within the RVSM band (higher steps FL380–FL410 late in the European cruise). Levels are assigned tactically by radar ATC subject to RAD flight-level restrictions and semicircular/RAD direction rules — the OFP's requested levels are planning context, not a clearance.

---

## 7. Terrain, MORA & driftdown

- **Grid MORA / high terrain belts:** mostly low-to-moderate terrain. The one significant belt is the **Pyrenees (~11,200 ft; Aneto 11,168 ft)** on the France/Spain border; secondary: **Massif Central (~6,000 ft)**, the **Iberian Meseta / Sistema Central (~6,000–8,000 ft)**. 🟧 Grid MORA across the Pyrenees corridor runs on the order of **~13,000–14,000 ft** — verify the exact MORA per-leg against the AIRAC grid at planning.
- **Driftdown / depressurisation escape:** not a cruise-level factor (cruise FL290+ clears all terrain by a wide margin). Relevant only to **one-engine driftdown or emergency-descent** over the Pyrenees/Meseta. The 777-300ER's one-engine driftdown ceiling clears the Pyrenees MORA with margin at normal enroute weights, and **diversion field density is high** (Toulouse/Pau/Zaragoza/Barcelona/Madrid all within short range), so no extended terrain-limited escape corridor exists here — unlike the oceanic/arctic sectors.
- **Cold-temperature altitude corrections:** applied at the terminal (departure/arrival) airfields in winter, not in the enroute cruise.

---

## 8. Diversion & enroute alternates

**Very dense coverage** — this sector is wall-to-wall Cat I international fields; ETP/critical-point planning is not a driver here. Curated OM C briefings on this routing are limited; the majors below are named for planning awareness.

| Airfield | ICAO | Sector | Role | Notes |
|---|---|---|---|---|
| Frankfurt | **EDDF** | Langen (EDGG) | Departure / return alternate | Home departure field. Brief to build (Europe/Germany) 🟧 |
| Munich | **EDDM** | München (EDMM) | Off-route German alternate | SE of track. Brief to build 🟧 |
| Lyon St-Exupéry | **LFLL** | Bordeaux/Reims | Enroute alt (France) | 🟧 No brief — plan-time |
| Bordeaux / Toulouse | **LFBD / LFBO** | Bordeaux (LFBB) | Enroute alt (SW France) | 🟧 No brief — plan-time |
| Madrid-Barajas | **LEMD** | Madrid (LECM) | Enroute alt (Spain) | 🟧 No brief — plan-time |
| Barcelona | **LEBL** | Barcelona (LECB) | Enroute alt (E Spain) | 🟧 No brief — plan-time |
| Lisbon / Porto | **LPPT / LPPR** | Lisboa (LPPC) | Coast-out alternates (Portugal) | 🟧 No brief — plan-time |

- **ETP / equal-time-point considerations:** not applicable within this radar-covered continental sector — a suitable field is always within short range. ETP planning begins at coast-out for the oceanic corridor (see EUR-SAM Corridor).
- **Fuel-freeze / cold-soak:** not a factor on this relatively short mid-latitude continental segment; monitoring begins on the long oceanic leg that follows.

---

## 9. Special-use airspace & overflight

- **Conflict / prohibited / risk zones:** 🟩 **none** on this routing. All four states are EU/Schengen; no conflict-zone or overflight-risk exposure. (Russia/Belarus/Ukraine closures are far to the east and not transited.)
- **Danger / restricted / military areas:** 🟧 extensive **military TSA/TRA and danger areas**, especially over central/SW **France** and inland **Spain**, activated **daily via the AUP/UUP** (Airspace Use Plan / Updated Use Plan). Associated **Conditional Routes (CDR1/2/3)** open/close accordingly. The **RAD (Route Availability Document)** governs which levels/segments are flyable — the SimBrief route is validated against the current RAD, but confirm active TRAs/CDRs at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **Conflict-zone currency:** Re-check ICAO Conflict Zone Information Repository / state NOTAMs and operator routing policy at planning — this list is durable context, not live clearance.

---

## 10. Contingency procedures

Continental radar environment — **no oceanic contingency procedures apply** in this sector. Handling is tactical via ATC.

- **In-flight contingency:** ATC provides radar vectors, level changes and deviations on request; there is no strategic-offset / oceanic-contingency construct here. Squawk **7700** and declare for emergencies.
- **Comms-failure procedure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm the exact per-state comms-failure expectation at **AIP ENR 1.8/GEN** where it refines SERA.
- **Weather-deviation procedure:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies.
- **Emergency frequency:** 121.5 MHz (guard); 123.45 air-to-air.

---

## 11. Seasonal, environmental & live data

- **Seasonal hazards (durable):**
  - **Convective weather** — summer **embedded CB / hail / squall lines** over France and the Iberian plateau; thunderstorm avoidance and turbulence, handled tactically. Winter **terminal icing** at the departure/arrival fields.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across the NE-Atlantic/European upper airspace and have historically **closed large volumes of this airspace** (2010 Eyjafjallajökull). **VAAC London** is the responsible advisory centre; a live SIGMET/VA advisory at planning is the only thing that would materially threaten this otherwise-benign sector.
  - **Saharan dust** occasionally reduces visibility at Iberian/Portuguese terminals (nuisance, not a cruise hazard).
  - **Space weather:** negligible at these mid-latitudes — no HF/GNSS-degradation planning driver here (unlike the Arctic/NAT sectors).

> **Pull at planning (T-2h):** enroute NOTAMs, **AUP/UUP** (active TRA/CDR status) and current **RAD**, SIGMET/AIRMET (convection, turbulence), **VAAC London** volcanic-ash advisories, conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per state/level band** (AIP ENR 1.4 / 2.1) — stated as Class C predominant / C-D in FR-PT; not individually verified — confirm per state at planning.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 (EU datalink area) — confirm per-ACC at planning.
- **Pyrenees grid-MORA** exact per-leg values — walk against the AIRAC grid at planning.
- Per-state **comms-failure** refinements to SERA (ENR 1.8/GEN).
- French/Iberian enroute-alternate majors (LFLL/LFBD/LFBO/LEMD/LEBL/LPPT/LPPR) have **no OM C briefs** yet — plan-time; dense coverage means low risk.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **State AIP ENR sections (DE/DFS, FR/DSNA, ES/ENAIRE, PT/NAV Portugal)** — ENR 1.4 (airspace classification), 1.6 (surveillance/ADS-B), 1.7/1.8 (RVSM), 2.x (FIR/UIR structure), 3.x/5.x (routes, CDR, restricted areas). Primary source of record for structure, classes, routes. *Per-state class letters flagged 🟧 — not individually re-fetched; confirm per state.*
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR (RNAV 5 / RNP 1 / RNP APCH); (EU) 2015/310 (amending 29/2009) — Data Link / CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.
- **EUROCONTROL — Free Route Airspace** concept & implementation (DE/FR/ES/PT FRA; Portugal first, 7 May 2009) — https://www.eurocontrol.int/concept/free-route-airspace (retrieved 2026-07-19).
- **ESPORTFRA (Spain–Portugal FRA)** structure & level bands — SESAR Deployment Manager / NAV Portugal AIP ENR 1.3; Spain initial FRA Apr 2022 (retrieved 2026-07-19).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-19 | Ported from K Global First Officer library into current OM C airspace template (anonymised; sources/changelog split out; cross-links re-pathed). EDDF→SBGR continental DE/FR/ES/PT sector: FIR/UIR structure, RVSM/RNAV5/8.33/CPDLC/ADS-B mandates, FRA incl. ESPORTFRA (corrected the "SECSI FRA" mislabel), Pyrenees terrain/driftdown, dense diversion coverage, SERA contingency, volcanic-ash strategic note. Oceanic handoff deferred to EUR-SAM Corridor. |
| v0.1 | 2026-07-25 | Governance scrub: removed callsign / build-process references per OM content rules. |
