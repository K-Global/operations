# Wien (LOVV) — FIR Briefing

**Scope:** single FIR — Austria, including the **Vienna (LOWW) hub** · **Parent area brief:** [Europe (Continental)](../../europe.md) — 🟧 that brief covers the DE/FR/ES/PT continental corridor only and does **not** cover Austria/Central Europe; this FIR brief (with its Switzerland, Praha, Budapest and Warszawa siblings) closes that scope gap · **Adjacent FIRs:** München (EDMM) NW · Praha (LKAA) N · Bratislava (LZBB) E 🟧 · Budapest (LHCC) SE · Zagreb (LDZO) S 🟧 · Ljubljana (LJLA) SW 🟧 · Switzerland (LSAS) W — partial cross-delegation (western Austrian airspace worked by skyguide, §3)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Wien is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment. Austria sits at a historic **Central European ATC crossroads** — host to the (largely unrealised) CEATS joint upper-airspace project and a pioneer, alongside Hungary, of cross-border Free Route Airspace reaching toward the Black Sea. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for the aerodrome inside the FIR (LOWW) live in the airport briefing (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LOVV — Wien FIR**, covering the whole of Austrian airspace under a single designator (subject to the delegation noted in §3) |
| Controlling ATSU / ANSP | **Vienna ACC (LOVV, Austro Control GmbH)**. ANSP: **Austro Control GmbH**, Austria's civil ANSP and regulator-adjacent state company |
| Airspace class & vertical limits | 🟧 Controlled upper airspace, Class C predominant; TMA/CTR Class C/D; Class E/G below — confirm exact class letter per band at **AIP Austria ENR 1.4/2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals (EU PBN IR) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **German + English** (English always available) |
| Key hazard(s) | 🟥 **Alps** — the eastern Alps extend into western/southern Austria (Tyrol, Vorarlberg, Carinthia); the Vienna basin/eastern lowlands themselves are benign. Dense military TRA/TSA; historic **CEATS** central-airspace project (§3) and current **SEE FRA** cross-border free-route leadership are the structural stories of this FIR. Icelandic volcanic ash the strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory** (EU 1079/2012). German + English; English always available. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 (EU 2015/310) — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory (EU 2017/386). |
| Terrain / MORA / driftdown | 🟧 | Alpine terrain in the west/south (Tyrol, Vorarlberg, Carinthia); the Vienna basin and eastern approaches (where LOWW sits) are low-lying and benign. §8. |
| Diversion-aerodrome coverage | 🟩 | Vienna (LOWW) is the home-hub-class field inside the FIR; curated brief exists (§9). Coverage thins toward the Alpine west. |
| Special-use airspace (military / danger) | 🟧 | Military TRA/TSA activated via AUP/UUP; the FIR also carries the historical **CEATS** project footprint. Confirm current status at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Wien FIR covers the whole of Austria — from the Vienna basin and eastern lowlands in the east, across the central Alpine spine, to Tyrol and Vorarlberg in the west.
- **Vertical split:** 🟧 the FIR/UIR vertical-split convention (single designator vs separate idents) is not independently confirmed for Austria in this pass; Austro Control's ACC structure is organised into named sectors (public simulation/planning material references **E, S, W, N and B5** sectors) rather than a German-style lower-ACC/upper-UAC split.
- **Cross-border delegation (structural point):** 🟧 certain parts of Wien FIR's upper airspace have historically been **delegated to neighbouring countries and vice versa** to optimise traffic flow — most notably, **western Austrian airspace (Vorarlberg and adjoining Tyrol) is worked by skyguide's Zurich/Wangen centre**, not by Austro Control directly, mirroring the delegation described in the Switzerland (LSAS) FIR brief. Separately, the **München/Wien boundary near the Alps** carries specific negotiated exceptions — e.g. airspace **west of the "ROCKY" line** delegated from Wien FIR to München FIR (except the Innsbruck area of responsibility), and the **Königssee area** delegated the other way, München to Wien (see the München (EDMM) FIR brief §3 for the full note). Treat Wien's western boundary as a negotiated line with local exceptions, not a single clean geographic split.
- **CEATS (Central European Air Traffic Services) — historical context:** 🟧 Austria was the intended host of a joint upper-airspace control centre under the **CEATS** project, an eight-nation initiative (Austria, Croatia, Czech Republic, Hungary, Italy, Slovakia, Slovenia — with a project directorate based in Prague and an experimental centre in Budapest) aiming to create a single upper-airspace ATC area over Central Europe, conceptually similar to EUROCONTROL's Maastricht UAC. The Vienna joint centre was targeted for the late 2000s but progress stalled and the project did not deliver the originally envisaged joint operational centre; each participating state has continued to operate its own upper airspace. **Current formal status of CEATS is not confirmed in this pass** — flagged as historical/structural context for why Vienna is described as a Central European ATC crossroads, not asserted as a live operational arrangement.
- **Adjacent FIRs (by boundary):**
  - **NW — München (EDMM, DFS), Germany.** Southern German/Bavarian FIR; see the München FIR brief for the detailed ROCKY-line/Innsbruck/Königssee boundary note.
  - **N — Praha (LKAA, ANS CR), Czech Republic.** Confirmed via published Letters of Agreement between the two FIRs.
  - **E — Bratislava (LZBB), Slovakia.** 🟧 not independently re-verified this pass; standard geographic adjacency.
  - **SE — Budapest (LHCC, HungaroControl), Hungary.** Confirmed via published Letters of Agreement.
  - **S — Zagreb (LDZO), Croatia.** 🟧 not independently re-verified this pass.
  - **SW — Ljubljana (LJLA), Slovenia.** 🟧 not independently re-verified this pass.
  - **W — Switzerland (LSAS, skyguide).** See the cross-border delegation note above — western Austrian airspace is partly worked by skyguide.
- **Sectorisation:** Vienna ACC is divided into multiple named sectors (E/S/W/N/B5 per public planning references) that combine/split with traffic and staffing.

---

## 4. Control & ATSU

- **Controlling ATSU:** 🟩 **Vienna ACC (LOVV, Austro Control GmbH)** — radar/surveillance control of the entire Austrian FIR above the approach-control units, i.e. all overflights, plus the Vienna (LOWW) TMA feed.
- **Delegated sector (received):** 🟧 the **western Austrian sector** is worked by **skyguide's Zurich/Wangen centre** under long-standing delegation (§3).
- **FIS / FSS:** Austrian FIS for lower/uncontrolled airspace; not a factor for an IFR hub transit remaining in controlled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in this FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute · **RNP 1** terminal SID/STAR · **RNP APCH** arrivals — EU **PBN Implementing Rule (EU) 2018/1048**. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** — **Commission Implementing Regulation (EU) No 1079/2012**.
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU datalink service area (**Commission Implementing Regulation (EU) 2015/310**) — Austro Control participates. VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt — **Commission Implementing Regulation (EU) 2017/386 (SPI IR)**.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Vienna ACC** and handed to the adjacent-FIR ACC at the boundary (München, Praha, Bratislava, Budapest, Zagreb, Ljubljana, or skyguide in the west); exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Austrian FIS for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **German and English**; English always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **SECSI FRA (Southeast Common Sky Initiative Free Route Airspace)** connects Austria with **Albania, Bosnia and Herzegovina, Croatia, Serbia/Montenegro, North Macedonia and Slovenia** — Austro Control and the FAB CE (Central Europe Functional Airspace Block) members did pioneering work in Europe implementing free-route airspace extending from Austria toward the Black Sea. 🟩 On **28 November 2024**, a new cross-border free-route corridor linked **SECSI FRA with SEE FRA** (the Hungary-pioneered South-East Europe FRA, see the Budapest FIR brief) across the Vienna, Bratislava, Budapest and Prague control-area boundaries, deepening Central European free-route connectivity.
- **Airway spine (where FRA not available / RAD-constrained):** below the FRA floor and in terminal airspace, the fixed ATS-route network applies, including SID/STAR feeder structures into Vienna (LOWW).
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding Vienna; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Vienna-Schwechat (LOWW)**. Terminal detail is in the airport briefing (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟥 the **eastern Alps** rise across western and southern Austria — Tyrol, Vorarlberg and Carinthia hold peaks including the **Grossglockner (3,798 m)**, Austria's highest point. The **Vienna basin and eastern lowlands**, where LOWW sits, are low and benign by contrast.
- **Boundary terrain:** the Alpine system continues across the boundary into **Switzerland (LSAS)** and **Germany (München FIR, EDMM)** to the west — a continuous Alpine massif; see those FIR briefs for the same range from those sides.
- **Driftdown / depressurisation escape:** 🟧 a genuine planning factor for any track transiting western/southern Austria (Tyrol/Vorarlberg/Carinthia); the Vienna approach/departure corridor itself is low-terrain and benign. Not re-derived here — a dispatch/performance-planning matter.
- **Cold-temperature altitude corrections:** applied at the terminal aerodrome in winter — see the airport briefing (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Vienna-Schwechat | **LOWW** | Home-hub-class field / primary in-FIR alternate | [LOWW brief](../../../destinations/europe/austria/loww/index.md) |

- **Coverage note:** 🟧 thin — only one curated in-FIR field. Vienna itself is well served, but a track routing through the Alpine west/south of the FIR (Tyrol, Vorarlberg, Carinthia) has no curated alternate in this library; plan-time verification recommended for those sectors.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 Austrian airspace carries military training areas activated via AUP/UUP; associated Conditional Routes and the RAD govern flyable levels/segments. Confirm active TRA/TSA at planning.
- **Danger / restricted / prohibited areas:** 🟧 named areas are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU/ECAC operation, no permits.

> **SUA currency:** re-check active TRA/TSA status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air, Regulation (EU) No 923/2012)** — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Austrian refinement at **AIP Austria ENR 1.8/GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Alpine weather** — mountain wave/turbulence and rapid weather changes in the western/southern FIR; foehn effects are a known regional phenomenon.
  - **Summer convection** — embedded CB/hail, often orographically enhanced; thunderstorm avoidance handled tactically.
  - **Winter terminal icing / low visibility / snow** at Vienna — a terminal, not enroute, driver; see the airport briefing and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — Icelandic eruptions can propagate ash across European upper airspace; **VAAC London** or **VAAC Toulouse** may be the responsible advisory centre depending on the event — confirm at planning.

> **Pull at planning (T-2h):** enroute NOTAMs, AUP/UUP (active TRA/TSA status) and current RAD, SIGMET/AIRMET (Alpine convection, mountain wave), VAAC advisories, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** (AIP Austria ENR 1.4/2.1) — not individually verified this pass.
- **Bratislava (LZBB), Zagreb (LDZO) and Ljubljana (LJLA)** boundary sectors — asserted from general geography, not independently confirmed against current AIP/LoA sources this pass.
- Current formal/operational status of the **CEATS** project — described here as historical/structural context; not confirmed as a live arrangement.
- Precise current extent of the **skyguide (western Austria) delegation** and the **München/Wien ROCKY-line boundary** — corroborated structurally but not mapped in full detail here.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 — confirm per-sector at planning.
- No curated diversion aerodrome exists for the Alpine west/south of the FIR (Tyrol/Vorarlberg/Carinthia) — consider whether a field brief is warranted if that sector becomes operationally relevant.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Austro Control GmbH — Airspace / Airspace Structure** (Vienna FIR/ACC structure, sector delegation to/from neighbouring states) — https://www.austrocontrol.at/en/atm/air_traffic_controller/airspace and https://www.austrocontrol.at/en/pilots/pre-flight_preparation/aim_products/airspace_structure (retrieved 2026-08-02).
- **Austro Control GmbH — Establishing one of the largest free route airspaces in Europe** (SECSI FRA: Austria–Albania–Bosnia and Herzegovina–Croatia–Serbia/Montenegro–North Macedonia–Slovenia) — https://www.austrocontrol.at/en/company/media/press__news/detail/establishing_one_of_the_largest_free_route_airspaces_in_europe (retrieved 2026-08-02).
- **FAB CE — Free Route Airspace** and the 28 Nov 2024 SECSI/SEE FRA cross-border corridor (Vienna–Bratislava–Budapest–Prague) — https://www.fab-ce.eu/airspace/free-route (retrieved 2026-08-02).
- **FlightGlobal (1999) — "Prague opening brings Central European ATC services closer"** — CEATS project background (8-nation initiative; Prague directorate; Budapest experimental centre; intended Vienna joint centre) — https://www.flightglobal.com/archive/1999/09/prague-opening-brings-central-european-atc-services-closer/ (retrieved 2026-08-02). *Historical/tier-3 source — CEATS current status not independently re-verified.*
- **Letters of Agreement — Wien ACC (LOVV) / Praha FIR (LKAA)** and **Wien / Budapest (LHCC)** (published copies, ATC training libraries) — corroborate the Wien-FIR N and SE boundaries — https://at.ivao.aero/uploads/LoA/LoA_LKAA_LOVV_2024-11-15.pdf and https://cloud.at.ivao.aero/LoA/LoA_LHCC_LOVV_2018-08-01.pdf (retrieved 2026-08-02). *Tier-4 corroboration only — used to confirm the boundary/coordination relationships exist, not for operational detail.*
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU Implementing Regulations** (durable mandates): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR; (EU) 2015/310 — CPDLC ATN B1 above FL285; (EU) 2017/386 — SPI IR; (EU) No 923/2012 — SERA.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
