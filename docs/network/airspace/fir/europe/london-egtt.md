# London (EGTT) — FIR Briefing

**Scope:** single FIR — England and Wales, containing the **London TMA (Heathrow, Gatwick, Luton, City, Stansted)** and the Midlands/North-West English majors · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Scottish (EGPX) N · Shannon (EISN) W/SW · Shanwick Oceanic (EGGX) far W · Brest (LFRR) SW · Paris (LFFF) S · Brussels (EBBU) E · Amsterdam (EHAA) NE
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — built from public NATS AIP/EUROCONTROL sources; exact per-band class letters and the FRA rollout date flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. London is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (EGLL, EGKK, EGGW, EGCC, EGBB, EGNX, EGGD, EGGP …) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **EGTT** — London FIR, lower airspace **GND–FL245**; **London UIR FL245–FL660** is worked by the **same ATSU** (no separate upper-area centre, unlike the German Langen/Karlsruhe split) |
| Controlling ATSU / ANSP | **London Area Control Centre (LACC)**, Swanwick, Hampshire — **NATS (En Route) plc, "NERL"**. Co-located **London Terminal Control (LTCC)** handles the TMA feeder sectors below the ACC bands |
| Airspace class & vertical limits | 🟧 Class A predominates in the airway/TMA structure below FL245; **London UIR FL245–FL660 is Class C**. Confirm exact class letter per band/route at **UK AIP ENR 1.4 / 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals — UK domestic PBN mandate (assimilated/retained EU-derived law post EU-Exit) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC (Link 2000+) above FL285** for equipped aircraft — confirm current active-sector status |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **English** (the sole ATC language — no dual-language requirement) |
| Key hazard(s) | Benign terrain, but the **busiest and most structurally complex TMA in Europe** (Heathrow/Gatwick/Luton/City/Stansted stack-and-feeder system); dense East Anglia/Lincolnshire **military danger areas**; Wales **low-flying training areas**; Icelandic volcanic ash the one strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment domestically. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory**. English only — no dual-language ATC requirement in England/Wales. |
| Datalink / surveillance requirement | 🟧 | CPDLC Link 2000+ above FL285 (equipped-aircraft mandate, UK domestic implementation of the former EU datalink framework) — confirm active sectors at planning. Mode S + **ADS-B Out** mandatory for our fleet. |
| Terrain / MORA / driftdown | 🟩 | Low. **Pennines (Cross Fell ~2,930 ft)** and **Snowdonia (Snowdon ~3,560 ft)** the highest belts; not a cruise factor. §8. |
| Diversion-aerodrome coverage | 🟩 | Very dense — EGLL/EGKK/EGGW/EGCC/EGBB/EGNX/EGGD/EGGP all inside or feeding this FIR. Curated briefs exist for all (§9). |
| Special-use airspace (military / danger) | 🟧 | East Anglia/Lincolnshire military **danger areas**, Salisbury Plain training area, Welsh **low-flying areas** — activation/currency AIP/NOTAM-published; confirm at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD-equivalent constraint. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** London FIR covers **England and Wales**, south of the boundary with the **Scottish FIR (EGPX)** — a line running approximately from **Whitehaven (Cumbria, west coast) across to Newcastle** (exact geometry AIP-published, 🟧 confirm current AIRAC). It contains the **London TMA** and the Midlands/North-West industrial belt.
- **Vertical split:** 🟩 **Lower airspace GND–FL245** and **upper airspace (London UIR) FL245–FL660** are **both worked by London Area Control Centre (LACC) at Swanwick** — there is **no separate upper-area control unit** as in the German Langen(EDGG)/Karlsruhe(EDUU) split; the FIR/UIR distinction here is a naming convention, not a change of controlling ATSU.
- **Adjacent FIRs (by boundary):**
  - **N — Scottish (EGPX, NATS).** Boundary near the Whitehaven–Newcastle line; 🟧 note **Newcastle (EGNT)**, briefed among this FIR's served aerodromes (§9), sits close to or just inside the Scottish-FIR side of that boundary per public NATS sources — treat as a Scottish-FIR field operationally and cross-check the current AIP before filing.
  - **W / SW — Shannon (EISN, AirNav Ireland).** Across the Irish Sea / Celtic Sea.
  - **Far W (oceanic) — Shanwick Oceanic (EGGX).** London FIR shares a western oceanic boundary with Shanwick per the NAT structure (see the North Atlantic briefing).
  - **SW — Brest (LFRR, DSNA).**
  - **S — Paris (LFFF, DSNA).**
  - **E — Brussels (EBBU, skeyes).**
  - **NE — Amsterdam (EHAA, LVNL).**
- **Sectorisation:** London ACC is divided into **North / South / Central / West** sector groups (combinable under `LON_CTR`), with **London Terminal Control (LTCC)** providing NE/NW/SE/SW TMA sub-splits below ~FL155–195 feeding Heathrow, Gatwick, Stansted, Luton and City. Transit-relevant fact: **GND–FL245 / FL245–FL660**, single ATSU.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **London Area Control Centre (LACC), Swanwick — NATS** — radar/surveillance control, GND–FL245, plus the LTCC TMA feed into the London-area terminals and the other in-FIR aerodromes.
- **Upper-airspace ATSU:** 🟩 **the same LACC/Swanwick unit** controls the **London UIR (FL245–FL660)** via upper sectors — no separate UAC.
- **FIS / FSS:** **London Information (EGTT_I)** provides a Basic Service outside controlled airspace; not a factor for an IFR routing that stays within CAS throughout.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR transit.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the London FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5** enroute · **RNP 1** for terminal SID/STAR at the busy terminals · **RNP APCH** for arrivals — UK domestic PBN mandate, the assimilated/retained continuation of the former EU PBN Implementing Rule post EU-Exit. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios (UK domestic implementation of the ICAO EUR 8.33 kHz programme). Set channels precisely (e.g. 132.005).
- **Datalink (CPDLC):** 🟧 **CPDLC (Link 2000+, ATN B1 over VDL Mode 2)** expected/mandated above **FL285** for equipped aircraft — the UK domestic continuation of the former EU datalink-mandate framework. A continental Link 2000+ mandate, **not** an oceanic FANS-1/A requirement; VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft above the applicable mass/speed threshold — UK domestic SPI mandate (assimilated law).

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a transit is handed sequentially through the relevant **LTCC TMA sub-sector → London ACC (North/South/Central/West)** → the adjacent-FIR ACC at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** **London Information (EGTT_I)** for uncontrolled-airspace traffic.
- **Language:** 🟩 **English only** — no dual-language ATC requirement in England/Wales.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 **not yet implemented in the London FIR/UIR.** NATS' **Scottish FIR (EGPX)** was the first of four planned UK Free Route Airspace deployments (live 2 December 2021, structures removed above ~FL245/25,000 ft — part of the pan-European **Borealis FRA Programme**); London ACC's deployment had **no confirmed date** as of the sources reviewed. Confirm current FRA status at planning — do not assume direct routeing above FL245 in this FIR without checking the live AIP.
- **Airway spine (pending FRA):** the **fixed ATS-route network** remains in force across the London FIR/UIR, including the SID/STAR feeder structure into Heathrow, Gatwick, Stansted, Luton, City and the regional terminals.
- **Major fixes / entry-exit points:** FIR-boundary transition fixes and the terminal SID/STAR transition fixes feeding the London-area and regional terminals; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Heathrow (EGLL)**, **Gatwick (EGKK)**, **Luton (EGGW)**, **Manchester (EGCC)**, **Birmingham (EGBB)**, **East Midlands (EGNX)**, **Bristol (EGGD)**, **Liverpool (EGGP)**. 🟧 **Newcastle (EGNT)** is briefed here as a served network aerodrome, but public NATS sources place the London/Scottish FIR boundary at approximately the Whitehaven–Newcastle line, putting EGNT on or inside the **Scottish-FIR (EGPX)** side — this brief does not assert EGNT's FIR membership; cross-check the current AIP and see the [Scottish (EGPX) brief](scottish-egpx.md).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low throughout. The **Pennines (Cross Fell, ~2,930 ft)** in northern England and **Snowdonia (Snowdon, ~3,560 ft)** in north Wales are the highest belts; Dartmoor/Exmoor in the south-west are lower still. Not a cruise-level factor at FL290+.
- **Boundary terrain:** 🟩 none of operational significance — the higher terrain of Scotland (Ben Nevis, 4,411 ft) lies across the northern boundary in the **Scottish FIR (EGPX)**, not here.
- **Driftdown / depressurisation escape:** not a cruise-level constraint (cruise clears all terrain by a wide margin); the **very high diversion-field density** across England and Wales removes any terrain-limited escape problem.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter, not in enroute cruise — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| London Heathrow | **EGLL** | Primary London hub / dep-return alternate | [EGLL brief](../../../destinations/europe/united-kingdom/egll/index.md) |
| London Gatwick | **EGKK** | In-FIR alternate (London area, S) | [EGKK brief](../../../destinations/europe/united-kingdom/egkk/index.md) |
| London Luton | **EGGW** | In-FIR alternate (London area, N) | [EGGW brief](../../../destinations/europe/united-kingdom/eggw/index.md) |
| Manchester | **EGCC** | In-FIR alternate (North-West) | [EGCC brief](../../../destinations/europe/united-kingdom/egcc/index.md) |
| Birmingham | **EGBB** | In-FIR alternate (Midlands) | [EGBB brief](../../../destinations/europe/united-kingdom/egbb/index.md) |
| East Midlands | **EGNX** | In-FIR alternate (Midlands, cargo) | [EGNX brief](../../../destinations/europe/united-kingdom/egnx/index.md) |
| Bristol | **EGGD** | In-FIR alternate (South-West) | [EGGD brief](../../../destinations/europe/united-kingdom/eggd/index.md) |
| Liverpool | **EGGP** | In-FIR alternate (North-West) | [EGGP brief](../../../destinations/europe/united-kingdom/eggp/index.md) |
| Newcastle | **EGNT** | 🟧 Served network aerodrome — likely **Scottish-FIR (EGPX)** side of the boundary, not confirmed in-FIR here | [EGNT brief](../../../destinations/europe/united-kingdom/egnt/index.md) |

- **Coverage note:** 🟩 dense — a suitable Cat I field is always within short range, so **ETP/critical-point planning is not a driver** in this radar-controlled continental FIR.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 **East Anglia and Lincolnshire** carry a concentration of military **danger areas** (current and former RAF fast-jet bases); **Salisbury Plain** hosts a large army training area; **Wales** has dedicated military **low-flying training areas**. Activation/currency is AIP/NOTAM-published — pull live at planning.
- **Danger / restricted / prohibited areas:** 🟧 numerous named **D-areas** across England and Wales (ranges, training areas) — confirm the current AIP/NOTAM picture before routing near them.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard UK domestic operation, no permits.

> **SUA currency:** re-check active danger-area/military-training status and NOTAMs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per the UK's domestic implementation of **SERA** (Standardised European Rules of the Air) — squawk **7600**, continue per the last acknowledged clearance / filed route and levels, and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm the current UK-specific refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Summer convection** — embedded CB/squall lines over England and Wales; handled tactically.
  - **Winter fog / icing / snow** at the terminal aerodromes — a terminal, not enroute, driver; see the airport briefings and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — **Icelandic eruptions** can propagate ash across UK/European upper airspace (2010 precedent). **VAAC London** — the responsible advisory centre for this whole region — is itself UK-based; a live SIGMET/VA advisory is the one thing that would materially threaten this otherwise-benign FIR.

> **Pull at planning (T-2h):** enroute NOTAMs, current FRA/airway status, SIGMET/AIRMET, **VAAC London** volcanic-ash advisories, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band/route** (AIP ENR 1.4/2.1) — stated as Class A-predominant below FL245, Class C in the UIR; not individually re-verified.
- **CPDLC (Link 2000+)** active-sector list above FL285 — confirm at planning.
- **London FIR/UIR Free Route Airspace deployment date** — Scottish FIR went live 2 Dec 2021 (Borealis FRA Programme); London's deployment is unconfirmed — check current NATS airspace-change publications.
- **Newcastle (EGNT)** FIR membership — public sources place it near/inside Scottish FIR; confirm against the current AIP before treating it as London-FIR terrain.
- Precise **London/Scottish FIR boundary geometry** (Whitehaven–Newcastle line) — confirm against current AIRAC charts.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **NATS UK AIP — ENR sections** (NATS En Route plc): ENR 1.4 (airspace classification), 2.1 (FIR/UIR structure), 2.2 (other regulated airspace). Primary source of record — https://www.aurora.nats.co.uk (retrieved 2026-08-02).
- **NATS — "Introducing Free Route Airspace into the UK skies"** (Scottish FIR first deployment, 2 Dec 2021; Borealis FRA Programme) — https://nats.aero/blog/2021/12/introducing-free-route-airspace-into-the-uk-skies/ (retrieved 2026-08-02).
- **NATS Swanwick** (LACC/LTCC co-location, Wikipedia corroboration) — https://en.wikipedia.org/wiki/NATS_Swanwick (retrieved 2026-08-02).
- **EUROCONTROL — FIR/UIR lower-airspace reference chart** (adjacent-FIR geometry: Shanwick/Scottish/Shannon/Brest/Paris/Brussels/Amsterdam) — https://www.eurocontrol.int (retrieved 2026-08-02). *Tier-4 corroboration.*
- **VATSIM UK — Area Sectors** (LACC North/South/Central/West + LTCC sub-sector real-world analogue) — https://www.vatsim.uk/operations/sectors (retrieved 2026-08-02). *Tier-4 corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
