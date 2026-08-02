# Scottish (EGPX) — FIR Briefing

**Scope:** single FIR — Scotland, Northern Ireland and northern England (down to the boundary with London FIR), plus the adjacent NE-Atlantic oceanic gateway co-located at Prestwick · **Parent area brief:** [Europe (Continental)](../../europe.md) · [North Atlantic (NAT)](../../north-atlantic.md) — for the oceanic handoff · **Adjacent FIRs:** London (EGTT) S · Shannon (EISN) SW · Shanwick Oceanic (EGGX) W (co-located ATSU) · Reykjavik (BIRD) far N (oceanic)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — built from public NATS AIP/EUROCONTROL/Wikipedia sources; exact FRA floor level and SUA currency flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Scottish domestic airspace is a **fully radar/surveillance-controlled continental FIR** — no procedural segment on the domestic side. The **same Prestwick site also hosts the Shanwick Oceanic Area Control Centre**, a functionally and administratively distinct **procedural/oceanic FIR (EGGX)** — see the North Atlantic briefing for the oceanic side of that handoff; this brief covers the **domestic Scottish FIR/UIR only**. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for the aerodromes inside the FIR (EGPH, EGPF, EGAA) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **EGPX** — Scottish FIR, lower airspace **GND–FL245**; **Scottish UIR FL245–FL660** worked by the **same ATSU** (no separate upper-area centre) |
| Controlling ATSU / ANSP | **Scottish Area Control Centre**, Prestwick Centre, Ayrshire — **NATS**. The same Prestwick Centre also houses the **Prestwick Oceanic Area Control Centre ("Shanwick")**, a distinct oceanic FIR (EGGX) — cross-referenced, not covered here |
| Airspace class & vertical limits | 🟩 **Class C** above FL195 throughout the Scottish FIR, including the **Scottish UIR FL245–FL660**; below FL195 mixed Class A (airways/TMA) and Class G outside CAS. Confirm per-route detail at **UK AIP ENR 1.4 / 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals — UK domestic PBN mandate — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance domestically; 🟧 **CPDLC (Link 2000+) above FL285** for equipped aircraft (domestic mandate — distinct from the oceanic FANS-1/A CPDLC+ADS-C used at the co-located Shanwick OACC) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **English** |
| Key hazard(s) | **Scottish Highlands terrain** (Ben Nevis, ~4,411 ft, highest in the British Isles) relevant to driftdown; extensive **North Sea offshore danger areas** and **military low-flying training areas**; the FIR's role as the **domestic feeder to the Shanwick oceanic gateway** concentrates transatlantic-bound traffic through its upper sectors; winter Highland icing/snow; Icelandic volcanic ash the strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled domestically — no procedural segment on the Scottish-FIR side. (The co-located Shanwick OACC is procedural/oceanic — see NAT briefing.) |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory**. English. Note: **Shanwick Radio / Ballygirreen HF** is a separate oceanic comms function, not part of Scottish-FIR domestic comms. |
| Datalink / surveillance requirement | 🟧 | CPDLC Link 2000+ above FL285 domestically — confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet. |
| Terrain / MORA / driftdown | 🟧 | **Scottish Highlands** — Ben Nevis ~4,411 ft, the highest point in the British Isles — a genuine driftdown/escape consideration over the western/northern Highlands; not a cruise-level factor at FL290+. §8. |
| Diversion-aerodrome coverage | 🟩 | Edinburgh (EGPH), Glasgow (EGPF) and Belfast/Aldergrove (EGAA) inside the FIR; **Prestwick (EGPK)** itself is a further major diversion field in the FIR — 🟧 brief not yet built. §9. |
| Special-use airspace (military / danger) | 🟧 | Extensive **North Sea offshore danger areas** (oil/gas installations) and **military low-flying training areas** across the Highlands and Southern Uplands (incl. QRA fast-jet activity near Lossiemouth) — confirm current AUP/NOTAM status. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Scottish FIR covers **all of Scotland, Northern Ireland, and northern England** south to a boundary with the **London FIR** running approximately from **Whitehaven across to Newcastle** (🟧 confirm exact geometry at current AIRAC). This makes Scottish the geographically larger of the two UK domestic FIRs (~527,000 km²).
- **Vertical split:** 🟩 **Lower airspace GND–FL245** and **upper airspace (Scottish UIR) FL245–FL660** are **both worked by the Scottish Area Control Centre at Prestwick** — no separate upper-area unit, mirroring the London-FIR structure.
- **Adjacent FIRs (by boundary):**
  - **S — London (EGTT, NATS).** Boundary near the Whitehaven–Newcastle line (see the London brief §3 for the cross-reference note on Newcastle/EGNT).
  - **SW — Shannon (EISN, AirNav Ireland).** Across the North Channel / Irish Sea.
  - **W — Shanwick Oceanic (EGGX).** The **Prestwick Centre site itself hosts the Prestwick Oceanic Area Control Centre**, which controls Shanwick — administratively a **separate FIR and control function** from domestic Scottish airspace, even though co-located. See the North Atlantic briefing for the oceanic side.
  - **Far N (oceanic) — Reykjavik (BIRD, Isavia).** Boundary out in the NE Atlantic, beyond the domestic Scottish FIR.
- **Sectorisation:** Scottish ACC splits into regional sectors (e.g. covering the Central Belt/Scottish TMA around Edinburgh/Glasgow/Prestwick, the Belfast/Northern-Ireland area, and the northern Highlands/Islands) that combine/split with traffic; the transit-relevant fact is the **GND–FL245 / FL245–FL660** single-ATSU split.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **Scottish Area Control Centre, Prestwick — NATS** — radar/surveillance control, GND–FL245, including the Edinburgh/Glasgow/Belfast approach/TMA feed.
- **Upper-airspace ATSU:** 🟩 **the same Prestwick unit** controls the **Scottish UIR (FL245–FL660)**.
- **Oceanic function (adjacent, not domestic):** the **Prestwick Oceanic Area Control Centre ("Shanwick")** is co-located at the same Prestwick Centre site but is a functionally and procedurally distinct oceanic FIR (EGGX) — provides procedural/ADS-C control and CPDLC to transatlantic traffic once handed off from Scottish domestic control. Not covered in this brief — see the North Atlantic briefing.
- **FIS / FSS:** **Scottish Information (EGPX_I)** provides a Basic Service outside controlled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B** domestically; no procedural pockets on a normal IFR transit within the Scottish FIR itself.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Scottish FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5** enroute · **RNP 1** terminal SID/STAR · **RNP APCH** arrivals — UK domestic PBN mandate. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios.
- **Datalink (CPDLC):** 🟧 **CPDLC (Link 2000+, ATN B1)** expected/mandated above **FL285** domestically for equipped aircraft — a continental Link 2000+ mandate, distinct from the **oceanic FANS-1/A CPDLC+ADS-C** used once handed to Shanwick. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md) — the oceanic requirements themselves are detailed in the North Atlantic briefing, not re-derived here.
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft above the applicable mass/speed threshold.
- **Oceanic-bound traffic note:** aircraft continuing into Shanwick's NAT HLA must additionally hold **NAT HLA approval, RVSM, RNAV10/RNP4 and FANS-1/A CPDLC+ADS-C** — fully defined in the North Atlantic briefing, referenced here only as a planning pointer.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a transit is handed sequentially through the relevant **Scottish ACC regional sector(s)** (Central Belt/TMA, Belfast area, or northern Highlands, as applicable) toward the adjacent-FIR ACC or the Shanwick oceanic boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies.
- **FIS / lower airspace:** **Scottish Information (EGPX_I)** for uncontrolled-airspace traffic.
- **Oceanic handoff comms (adjacent, not domestic):** **Shanwick Radio** (HF, via Ballygirreen, Ireland) and **Shanwick Oceanic/Control** (VHF, Prestwick) take over once a flight is transferred into the Shanwick OCA — detailed in the North Atlantic briefing §5, not this brief.
- **Language:** 🟩 **English**.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **Scottish FIR was the first of NATS' four planned UK FRA deployments**, live **2 December 2021** — airspace structures removed above **~FL245 (25,000 ft)**, part of the pan-European **Borealis FRA Programme** (which also covers Ireland/Shannon, Iceland and the Nordic/Baltic states). This was the **biggest single airspace change ever undertaken in the UK**, covering roughly a third of UK airspace and ~80% of transatlantic flights. 🟧 Confirm the exact current FRA floor level and entry/exit-point list at planning — sources vary between "above FL245" and "above 25,000 ft."
- **Airway spine (below the FRA floor):** the conventional ATS-route network remains below the FRA floor and feeds the SID/STAR structure into Edinburgh, Glasgow, Prestwick and Belfast/Aldergrove.
- **Major fixes / entry-exit points:** FRA entry/exit points at the FIR boundary; 🟧 note that routing toward the Scandinavian/NEFAB FRA area to the east may require filing intermediate waypoints due to sparser radar coverage there — confirm at planning, not asserted definitively here.
- **Hubs & aerodromes inside the FIR:** 🟩 **Edinburgh (EGPH)**, **Glasgow (EGPF)** — Scotland; **Belfast/Aldergrove (EGAA)** — Northern Ireland. 🟧 **Prestwick (EGPK)** itself, home to the Scottish ACC and Shanwick OACC, is a further major diversion-capable field in the FIR but has no OM C brief built yet.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 the **Scottish Highlands** hold the **highest terrain in the British Isles** — **Ben Nevis (~4,411 ft / 1,345 m)** — with extensive high ground across the western Highlands and Grampians. Not a cruise-level factor at FL290+, but genuinely relevant to one-engine driftdown/escape planning over the remote Highlands and Islands, unlike the benign lowland terrain further south.
- **Boundary terrain:** 🟩 no additional terrain step-up across the adjacent FIR boundaries of operational significance beyond what is noted above.
- **Driftdown / depressurisation escape:** 🟧 the Highlands and Islands are more remote than southern England — verify diversion-field spacing on any route tracking close to the western Highlands; the Central Belt (Edinburgh/Glasgow/Prestwick corridor) and Belfast area remain densely served.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter — see the airport briefings (§9); Highland terminals are more exposed to winter icing/snow than the English majors.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Edinburgh | **EGPH** | In-FIR alternate / Central Belt hub | [EGPH brief](../../../destinations/europe/united-kingdom/egph/index.md) |
| Glasgow | **EGPF** | In-FIR alternate / Central Belt hub | [EGPF brief](../../../destinations/europe/united-kingdom/egpf/index.md) |
| Belfast/Aldergrove | **EGAA** | In-FIR alternate / Northern Ireland hub | [EGAA brief](../../../destinations/europe/united-kingdom/egaa/index.md) |
| Prestwick | **EGPK** | Home of Scottish ACC + Shanwick OACC; major diversion-capable field | Brief to build 🟧 |

- **Coverage note:** 🟩 dense across the Central Belt / Northern Ireland corridor; 🟧 sparser across the northern Highlands and Islands — a route tracking near the western Highlands should verify diversion spacing rather than assume London-FIR-style density.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 extensive **military low-flying training areas** across the Highlands and Southern Uplands, with **QRA fast-jet activity** based at Lossiemouth; confirm current AUP/NOTAM status at planning.
- **Danger / restricted / prohibited areas:** 🟧 numerous **North Sea offshore danger areas** around oil/gas installations east of Scotland, plus onshore ranges (e.g. Cape Wrath). Named areas and status are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard UK domestic operation, no permits.

> **SUA currency:** re-check active danger-area/military-training status and NOTAMs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per the UK's domestic implementation of **SERA** — squawk **7600**, continue per the last acknowledged clearance / filed route and levels. 🟧 Confirm the current UK-specific refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC**. Squawk **7700** and declare for emergencies. Note: once handed to the adjacent **Shanwick OACC**, the NAT oceanic contingency procedures (SLOP, offset turns, etc.) apply instead — detailed in the North Atlantic briefing, not here.
- **Oceanic handoff note:** Scottish ACC coordinates the log-on/next-data-authority sequencing with Shanwick ahead of the oceanic boundary (comparable to the Shannon–Shanwick coordination noted in the Shannon brief) — the domestic-to-oceanic transfer itself is a Scottish-ACC function even though the oceanic procedures live in the NAT briefing.
- **Seasonal hazards (durable):**
  - **Atlantic frontal weather** — more active and more frequent here than in southern England, given the FIR's exposure to the North Atlantic.
  - **Winter Highland icing / snow** at the northern terminals — a terminal, not enroute, driver; see the airport briefings and OM E Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — Scottish airspace, being the FIR closest to Iceland, is the **first UK airspace typically affected** by an Icelandic ash event. **VAAC London** is the responsible advisory centre.
  - **Space weather:** more relevant here than further south given proximity to the high-latitude NAT gateway — see the North Atlantic briefing §11 for the HF/GNSS-degradation detail that applies once oceanic.

> **Pull at planning (T-2h):** enroute NOTAMs, current FRA/airway status, SIGMET/AIRMET, **VAAC London** volcanic-ash advisories, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **FRA floor level** (stated variably as "above FL245" and "above 25,000 ft" in public sources) and the entry/exit-point list — confirm at current AIRAC.
- **CPDLC (Link 2000+)** active-sector list above FL285 — confirm at planning.
- **North Sea offshore danger-area and military low-flying-area** currency — confirm AUP/NOTAM at planning.
- **Prestwick (EGPK)** has no OM C airport brief yet, despite hosting both the Scottish ACC and Shanwick OACC — build if it becomes a planned alternate.
- Precise **Scottish/London FIR boundary geometry** and **Scottish/Shannon boundary** (North Channel) — confirm against current AIRAC charts.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **NATS UK AIP — ENR sections** (NATS En Route plc): ENR 1.4 (airspace classification — Scottish FIR Class C above FL195), 2.1/2.2 (FIR/UIR & other regulated airspace) — https://www.aurora.nats.co.uk (retrieved 2026-08-02).
- **NATS — "Introducing Free Route Airspace into the UK skies"** (Scottish FIR first deployment, 2 Dec 2021; ~1/3 of UK airspace, ~80% of transatlantic flights, Borealis FRA Programme) — https://nats.aero/blog/2021/12/introducing-free-route-airspace-into-the-uk-skies/ (retrieved 2026-08-02).
- **Wikipedia — Shanwick Oceanic Control** (Prestwick Centre dual domestic/oceanic role, Prestwick OACC history, GAATS+, HF/CPDLC/ADS-C detail) — https://en.wikipedia.org/wiki/Shanwick_Oceanic_Control (retrieved 2026-08-02). *Tier-4 corroboration.*
- **VATSIM UK — Area Sectors** (Scottish ACC regional-sector real-world analogue, STC/SCO groupings) — https://www.vatsim.uk/operations/sectors (retrieved 2026-08-02). *Tier-4 corroboration only.*
- **EUROCONTROL — FIR/UIR lower-airspace reference chart** — https://www.eurocontrol.int (retrieved 2026-08-02).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
