# Shanghai (ZSHA) — FIR Briefing

**Scope:** single FIR — the East China coast, the Yangtze Delta metroplex, and a block of the airspace toward the East China Sea, containing **Shanghai Pudong (ZSPD)** and **Hangzhou/Xiaoshan (ZSHC)** · **Parent area brief:** [Asia](../../asia.md) 🟩 · **Adjacent FIRs:** Beijing (ZBPE) N · Shenyang (ZYSH)/Incheon (RKRR)/Pyongyang (ZKKP) quad-boundary area NE 🟧 · Wuhan (ZHWH) W · Guangzhou (ZGZU) SW · Hong Kong (VHHK) S 🟧 · Taipei (RCAA) SE · Fukuoka (RJJJ, Japan) E — AKARA corridor
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — structure verified vs public ICAO-APAC/CAAC-derived material; exact boundary decimals and ACC sector split 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Shanghai is China's **largest single FIR by area** and among its busiest — a **radar/ADS-B-controlled, metric-level FIR** anchoring the East China coast, with an international seaward boundary toward Korea/Japan/Taiwan that sits inside the region's overlapping-ADIZ picture. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances and any active flow-control restriction. Terminal procedures for ZSPD/ZSHC live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **ZSHA** — Shanghai FIR (~1,155,497 km², the largest of China's FIRs by public-source area estimate), surface to the upper control limit; 🟧 **Shanghai Area Control Centre (Shanghai ACC)** — exact ATSU branding to confirm at AIP GEN 3.3 |
| Controlling ATSU / ANSP | **Shanghai ACC**, 🟧 **East China Regional Air Traffic Management Bureau (ATMB)**, under the national **CAAC ATMB** |
| Airspace class & vertical limits | 🟧 Predominantly **Class A** in the upper controlled bands (regional norm) — confirm exact class per band at **CAAC AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (8,900–12,500 m) — assigned in **METRIC levels**, China-wide provision — see §5/OM E |
| PBN environment | 🟧 **RNAV 5 / RNP** enroute · **RNP 1** terminal · **RNP APCH** arrivals (China-wide continental provision) — see OM E §5 |
| Surveillance & datalink | 🟩 **Radar + ADS-B** (ADS-B Out mandated in China); 🟧 CPDLC available on the trunk network — mandate band unconfirmed |
| Primary language & comms | 🟧 **VHF; Mandarin Chinese primary, English available for international IFR traffic** |
| Key hazard(s) | Very high **metroplex/coastal traffic density**; **overlapping East China Sea ADIZs** (China/Japan/Korea/Taiwan) on the seaward boundary; **typhoon season (~May–Nov)**; strict **ATFM/flow control** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-controlled throughout; no oceanic procedural segment on a normal transit. |
| Communication coverage & language | 🟧 | VHF continuous; Mandarin primary, English available per ICAO requirement. |
| Datalink / surveillance requirement | 🟥/🟧 | **ADS-B Out** underpins the continental surveillance service (China-wide mandate). CPDLC available; mandate band/login sector unconfirmed. §5. |
| Terrain / MORA / driftdown | 🟩 | The Yangtze Delta/East China coastal plain is generally low; not a cruise-level constraint in this FIR. §8. |
| Diversion-aerodrome coverage | 🟩 | ZSPD and ZSHC in-FIR; dense onward coverage into the Beijing/Wuhan/Guangzhou FIRs. §9. |
| Special-use airspace (military / danger) | 🟧 | China's airspace is predominantly military-managed nationwide (§10); the East China Sea additionally carries the **overlapping-ADIZ** picture (§10/§11). |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 metric · RNAV 5/RNP enroute · RNP 1 terminal · RNP APCH · Mode S + ADS-B Out.** §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Shanghai FIR (ZSHA) covers the **East China coast and the Yangtze River Delta** — Shanghai municipality, Jiangsu and Zhejiang — and extends seaward over a block of the **East China Sea** toward the international boundary with Japan/Korea/Taiwan airspace. Public source material places it as **China's largest FIR by area** (~1,155,497 km²).
- **Vertical split:** 🟧 Shanghai ACC is understood to work the FIR surface-to-upper-limit as a single ATSU (the regional norm across China's continental FIRs) — confirm at **AIP ENR 2.1**.
- **Adjacent FIRs (by boundary):**
  - **N — Beijing (ZBPE, CAAC).** The trunk corridor toward the national capital.
  - **NE — Shenyang (ZYSH) / Incheon (RKRR) / Pyongyang (ZKKP) quad-boundary area.** 🟧 Regional planning material references a quad-FIR meeting point where **Incheon, Shanghai, Shenyang and Pyongyang FIRs** converge over the Yellow Sea/Bohai approaches — the exact contact geometry is unconfirmed from public sources.
  - **W — Wuhan (ZHWH, CAAC).** The corridor into central China.
  - **SW — Guangzhou (ZGZU, CAAC).** Toward the Pearl River Delta / South China.
  - **S — Hong Kong (VHHK).** 🟧 The Hong Kong FIR brief names Shanghai as its own NE neighbour; carried through here for consistency — exact contact point/geometry unconfirmed.
  - **SE — Taipei (RCAA, Taiwan).** Across the Taiwan Strait/southern East China Sea approaches.
  - **E — Fukuoka (RJJJ, Japan).** The **AKARA corridor** — a defined block of airspace roughly 100 NM off the Shanghai coast — links Shanghai FIR traffic into Japanese airspace across the East China Sea.
- **Sectorisation:** 🟧 Shanghai ACC is divided into internal sectors serving the Pudong/Hongqiao/Hangzhou metroplex; exact current sector geometry is AIRAC-dependent.

---

## 4. Control & ATSU

- **Lower- & upper-airspace ATSU:** 🟧 **Shanghai ACC**, under the **East China Regional ATMB**, works the FIR surface-to-upper-limit; terminal/approach control for ZSPD and ZSHC feeds off the ACC (Hangzhou may sit under a distinct approach unit — confirm at planning).
- **FIS / FSS:** flight information service is provided by Shanghai ACC.
- **Surveillance basis:** 🟩 continuous **radar + ADS-B** across the developed coastal metroplex; no procedural pockets on a normal IFR routing within the FIR.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Shanghai FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410 inclusive**, assigned in **METRIC levels** (China implemented metric RVSM 22 Nov 2007); ATC clears a metric flight level and the crew reads the **feet-equivalent off the approved China RVSM FLAS conversion table** and flies in feet. The metric↔feet transition normally occurs at the FIR boundary in the adjacent non-Chinese FIR (e.g. on the Taipei/Fukuoka/Incheon boundaries here). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟧 **RNAV 5 / RNP** enroute; **RNP 1** terminal (SID/STAR); **RNP APCH** arrivals — the standard continental-China provision (not individually re-verified for ZSHA). See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟧 **CPDLC (FANS/ATN) available** on the regional trunk network; mandate band and login sector not confirmed for this FIR specifically. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** mandated (China-wide provision underpinning the continental surveillance service).
- **8.33 kHz:** not a Chinese/APAC requirement; standard **25 kHz** VHF spacing applies.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Shanghai ACC** across its internal sectors and handed to the adjacent-FIR ACC (Beijing, Wuhan, Guangzhou, Hong Kong, Taipei, or across the AKARA corridor into Fukuoka) at the boundary; exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Shanghai ACC provides flight information service in the FIR.
- **Language:** 🟧 **Mandarin Chinese** primary; **English** available per ICAO requirement for international IFR traffic.
- **8.33 kHz:** not applicable; standard 25 kHz spacing.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **not implemented** — fixed ATS-route/airway network with tactical vectoring.
- **Airway spine:** Shanghai anchors the **East China coastal trunk**, linking Beijing (N), Wuhan (W) and Guangzhou (SW) internally, and forming a principal **China ↔ Japan/Korea/Taiwan** international gateway — including the **AKARA corridor** to Fukuoka FIR.
- **Major fixes / entry-exit points:** the boundary entry/exit fixes feeding the ZSPD/ZSHC terminal areas and the AKARA-corridor entry point toward Japan; the SimBrief/current-AIRAC route provides the exact string.
- **Hubs & aerodromes inside the FIR:** 🟩 **Shanghai Pudong Intl (ZSPD)** — the primary E-China/trans-Pacific gateway — and 🟩 **Hangzhou/Xiaoshan (ZSHC)**. Shanghai Hongqiao (ZSSS) also sits in this metroplex but is out of scope for this document set.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 the Yangtze Delta/East China coastal plain around Shanghai/Hangzhou is generally **low terrain**; not a cruise-level constraint. Some higher ground rises inland toward Zhejiang/Anhui, well clear of the primary coastal routings.
- **Boundary terrain:** no significant driftdown-relevant high terrain identified immediately across the adjacent FIR boundaries on the primary hub-transit headings; the East China Sea legs are over-water.
- **Driftdown / depressurisation escape:** 🟩 not a binding terrain constraint in this FIR; over the East China Sea/AKARA-corridor leg the consideration shifts to over-water diversion range, not terrain.
- **Cold-temperature altitude corrections:** 🟧 seasonal relevance in winter — see [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md) and the airport briefs.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Shanghai–Pudong | **ZSPD** | In-FIR E-China / trans-Pacific gateway alternate | [ZSPD brief](../../../destinations/asia/china/zspd/index.md) |
| Hangzhou–Xiaoshan | **ZSHC** | In-FIR secondary Yangtze-Delta alternate | [ZSHC brief](../../../destinations/asia/china/zshc/index.md) |

- **Coverage note:** 🟩 dense in-FIR coverage between ZSPD and ZSHC; onward diversion options into the Beijing/Wuhan/Guangzhou/Hong Kong FIRs are dense at the regional level but not individually catalogued here — confirm at planning. Typhoon season can degrade the whole East China coastal cluster simultaneously — plan a weather-independent alternate further inland in season.

---

## 10. Special-use airspace

- **Military / danger areas:** 🟥 nationally, **China's airspace is predominantly military-managed** (§9 of the Asia area brief); Shanghai's dense coastal metroplex and the East China Sea approaches are a heavily coordinated case. Exact TSA/danger-area footprint is **AIP/NOTAM-published**.
- **Overlapping ADIZs — East China Sea:** 🟥 the East China Sea carries **four overlapping Air Defence Identification Zones** — **China's ECS ADIZ (declared 23 Nov 2013), Japan's, the Korean KADIZ, and Taiwan's** — over international routes off the Shanghai FIR's seaward boundary. An ADIZ is not regulated ICAO airspace and overflight is legal, but the overlap and military activity raise **misidentification/interception risk**; comply with the relevant state's ADIZ position-reporting/flight-plan requirements.
- **Overflight-permit / diplomatic considerations:** 🟧 China requires prior **overflight-permit/approval** for foreign operators (state-level requirement) — confirm at planning.

> **SUA currency:** re-check active restricted/danger-area status, ADIZ activity, and any regional ATFM measures at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO standard — squawk **7600**, continue per the last acknowledged clearance/filed route and levels, attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Shanghai-specific refinement at AIP ENR 1.8/GEN.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC and comply with the vector/level issued; over the East China Sea, general weather-deviation practice applies where radar contact is degraded.
- **China metric-level contingency:** 🟧 any contingency level change inside this FIR must be coordinated in **metric** with ATC and cross-checked against the FLAS feet-equivalent.
- **China ATFM / flow control:** 🟧 expect **CTOT/MINIT slots, ground holding and short-notice flow restrictions** coordinated by the regional ATMB.
- **Seasonal hazards (durable):**
  - **Typhoon season (~May–Nov, peak Jul–Sep)** — 🟥 tropical cyclones in the East China Sea/NW Pacific can disrupt the Shanghai coastal cluster and force large re-routes.
  - **Meiyu/plum-rain season (~Jun–Jul)** — persistent low cloud, rain and reduced visibility over the Yangtze Delta.
  - **Winter fog/haze** — reduced visibility episodes at coastal terminals in the cooler months.

> **Pull at planning (T-2h):** enroute NOTAMs, active restricted/danger-area status, East China Sea ADIZ bulletins, China regional ATFM measures, tropical-cyclone warnings and SIGMET/AIRMET, and the validated SimBrief route with assigned (metric-in-China) levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **ATSU branding and internal sector split** for Shanghai ACC — not individually re-verified against a primary AIP source.
- **Adjacent-FIR boundary decimals**, including the Incheon/Shenyang/Pyongyang quad-boundary geometry and the Hong Kong contact point — unconfirmed.
- **Airspace class per band** (AIP ENR 2.1) — stated as Class A predominant per regional norm, not FIR-specific.
- **AKARA corridor** current routing/entry-point detail toward Fukuoka FIR — confirm at planning/current AIP.
- **CPDLC mandate band/login sector** — confirm at CAAC AIP.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Parent area brief** — [`Airspace/General/Asia.md`](../../asia.md) §3/§4/§9/§10 (China metric core, RVSM/PBN/ADS-B provisions, ATFM, ADIZ overlap, military-airspace share). Retrieved 2026-07-26.
- **SKYbrary — China Reduced Vertical Separation Minima (RVSM)** — metric RVSM (22 Nov 2007), FLAS conversion table — https://skybrary.aero/articles/china-reduced-vertical-separation-minima-rvsm (retrieved 2026-07-26).
- **OPSGROUP — Navigating the AKARA Corridor** — the ~100 NM offshore corridor connecting Shanghai FIR and Japanese airspace across the East China Sea — https://ops.group/blog/akara-corridor/ (retrieved 2026-07-26).
- **CSIS/AMTI — East China Sea ADIZ analysis** — four overlapping ADIZs (China ECS ADIZ declared 23 Nov 2013, Japan, KADIZ, Taiwan) — https://amti.csis.org/counter-co-east-china-sea-adiz/ (retrieved 2026-07-26). *Advisory/analysis source — re-check the live picture at planning.*
- **Airport/FIR area estimate** — Shanghai FIR (ZSHA) area ~1,155,497 km² per public FIR-data aggregation — https://metar-taf.com/fir/ZSHA-Shanghai (retrieved 2026-07-26). *Tier-4 corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial build from `_FIR Briefing Template.md`. Shanghai FIR (ZSHA): Shanghai ACC / East China Regional ATMB (CAAC) 🟧; adjacent FIRs Beijing, Wuhan, Guangzhou, Hong Kong (S, boundary geometry unconfirmed), Taipei, Fukuoka (AKARA corridor), and the Incheon/Shenyang/Pyongyang quad-boundary area (NE, unconfirmed); RVSM FL290–410 metric (FLAS) / RNAV5-RNP1-RNP APCH / ADS-B Out referenced to OM E; fixed ATS-route network, no FRA; East China Sea overlapping-ADIZ hazard flagged 🟥; low coastal-plain terrain / no cruise driftdown constraint; ZSPD/ZSHC in-FIR diversions; typhoon season and Meiyu seasonal notes. Parent area brief: Asia (built, cross-referenced). |
