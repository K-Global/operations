# Guangzhou (ZGZU) — FIR Briefing

**Scope:** single FIR — the Pearl River Delta (PRD), central-southern China, and (per the served-airport set below) the Changsha/Hunan approaches, containing **Guangzhou Baiyun (ZGGG)**, **Shenzhen Bao'an (ZGSZ)** and **Changsha Huanghua (ZGHA)** · **Parent area brief:** [Asia](../../asia.md) 🟩 · **Adjacent FIRs:** Wuhan (ZHWH) N · Shanghai (ZSHA) NE · Kunming (ZPKM) W · Sanya (ZJSA) SW · Hong Kong (VHHK) SE · Macau (VMMC) S 🟧 · Hanoi (VVNB, Vietnam) SW 🟧
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — structure verified vs public ICAO-APAC/CAAC-derived material and the companion Hong Kong (VHHK) brief; exact boundary decimals and ACC sector split 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Guangzhou FIR sits over the **Pearl River Delta (PRD)** — one of the densest air-traffic complexes on Earth — and interfaces directly with the **Hong Kong (VHHK)** and **Macau (VMMC)** FIRs carved out of the same metroplex. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances and any active flow-control restriction. Terminal procedures for ZGGG/ZGSZ/ZGHA live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **ZGZU** — Guangzhou FIR, surface to the upper control limit; 🟧 **Guangzhou Area Control Centre (Guangzhou ACC)** — exact ATSU branding to confirm at AIP GEN 3.3 |
| Controlling ATSU / ANSP | **Guangzhou ACC**, 🟧 **Central-South China Regional Air Traffic Management Bureau (ATMB)**, under the national **CAAC ATMB** |
| Airspace class & vertical limits | 🟧 Predominantly **Class A** in the upper controlled bands (regional norm) — confirm exact class per band at **CAAC AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (8,900–12,500 m) — assigned in **METRIC levels**, China-wide provision — see §5/OM E |
| PBN environment | 🟧 **RNAV 5 / RNP** enroute · **RNP 1** terminal · **RNP APCH** arrivals (China-wide continental provision) — see OM E §5 |
| Surveillance & datalink | 🟩 **Radar + ADS-B** (ADS-B Out mandated in China); 🟧 CPDLC available on the trunk network — mandate band unconfirmed |
| Primary language & comms | 🟧 **VHF; Mandarin Chinese primary, English available for international IFR traffic** |
| Key hazard(s) | Extremely dense **Pearl River Delta traffic** and the **Hong Kong/Macau/Shenzhen/Zhuhai mega-TMA interface**; **typhoon season (~May–Nov)**; strict **ATFM/flow control**; military/danger areas over the Pearl River estuary and northern South China Sea |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-controlled throughout; no oceanic procedural segment on a normal transit. |
| Communication coverage & language | 🟧 | VHF continuous; Mandarin primary, English available per ICAO requirement. |
| Datalink / surveillance requirement | 🟥/🟧 | **ADS-B Out** underpins the continental surveillance service (China-wide mandate). CPDLC available; mandate band/login sector unconfirmed. §5. |
| Terrain / MORA / driftdown | 🟩 | The PRD and central-southern China terrain in this FIR is generally low-to-moderate; not a cruise-level driftdown constraint. §8. |
| Diversion-aerodrome coverage | 🟩 | ZGGG/ZGSZ dense in the PRD core; ZGHA further north; plus Hong Kong (VHHH) and Macau (VMMC) immediately across the boundary. §9. |
| Special-use airspace (military / danger) | 🟧 | Danger/restricted/military areas over the Pearl River estuary and northern SCS (shared context with the Hong Kong FIR brief); China-wide military-managed-airspace share also applies. §10. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 metric · RNAV 5/RNP enroute · RNP 1 terminal · RNP APCH · Mode S + ADS-B Out.** §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Guangzhou FIR (ZGZU) covers **Guangdong province and the Pearl River Delta** — including Guangzhou and Shenzhen — and, per the served-airport set assigned to this brief, extends to cover **Changsha (Hunan)** in the north. 🟧 **Changsha Huanghua (ZGHA) sits geographically ~600 km north of the PRD core**; public FIR-aggregation sources place it in Guangzhou FIR (consistent with the "ZG" airport-prefix administrative region, which spans Guangdong, Guangxi and Hunan), but this has **not been independently confirmed against a primary CAAC AIP source** — flagged for verification.
- **Vertical split:** 🟧 Guangzhou ACC is understood to work the FIR surface-to-upper-limit as a single ATSU (the regional norm across China's continental FIRs) — confirm at **AIP ENR 2.1**.
- **Adjacent FIRs (by boundary):**
  - **N — Wuhan (ZHWH, CAAC).** The corridor into central China.
  - **NE — Shanghai (ZSHA, CAAC).** Toward the East China coast.
  - **W — Kunming (ZPKM, CAAC).** Toward southwest China/Yunnan.
  - **SW — Sanya (ZJSA, CAAC).** The South China Sea approaches via Hainan.
  - **SE — Hong Kong (VHHK).** The hard boundary onto the **Guangzhou/Shenzhen Pearl River Delta mega-TMA** — the densest and most procedurally-sensitive interface on this FIR's perimeter (confirmed consistent with the companion **[Hong Kong (VHHK) FIR brief](hong-kong-vhhk.md)**, which names Guangzhou as its own N neighbour).
  - **S — Macau (VMMC).** 🟧 A very small FIR carved from the PRD/Zhuhai approaches; treated here as effectively enclosed within the wider Guangzhou/Hong Kong interface rather than a conventional long land boundary.
  - **SW — Hanoi (VVNB, Vietnam).** 🟧 The international boundary toward Vietnam/Indochina — unconfirmed exact contact geometry from public sources.
- **Sectorisation:** 🟧 Guangzhou ACC is divided into internal sectors serving the Guangzhou/Shenzhen/PRD complex, with the Changsha area (if confirmed in-FIR) likely worked as a separate northern sector group; exact current sector geometry is AIRAC-dependent.

---

## 4. Control & ATSU

- **Lower- & upper-airspace ATSU:** 🟧 **Guangzhou ACC**, under the **Central-South China Regional ATMB**, works the FIR surface-to-upper-limit; terminal/approach control for ZGGG, ZGSZ and ZGHA feeds off the ACC (or a delegated approach unit at each field — confirm at planning).
- **FIS / FSS:** flight information service is provided by Guangzhou ACC.
- **Surveillance basis:** 🟩 continuous **radar + ADS-B** across the PRD core; ADS-B/radar coverage in the Changsha sector assumed consistent with the regional norm but not individually confirmed.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Guangzhou FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410 inclusive**, assigned in **METRIC levels** (China implemented metric RVSM 22 Nov 2007); ATC clears a metric flight level and the crew reads the **feet-equivalent off the approved China RVSM FLAS conversion table** and flies in feet. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟧 **RNAV 5 / RNP** enroute; **RNP 1** terminal (SID/STAR); **RNP APCH** arrivals — the standard continental-China provision. Note the companion Hong Kong FIR brief cites **RNP 4/RNP 10** on the designated PRD-adjacent routes — confirm whether the same lateral-separation application extends into Guangzhou FIR proper. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟧 **CPDLC (FANS/ATN) available** on the regional trunk network; mandate band and login sector not confirmed for this FIR specifically. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** mandated (China-wide provision).
- **8.33 kHz:** not a Chinese/APAC requirement; standard **25 kHz** VHF spacing applies.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Guangzhou ACC** across its internal sectors and handed to the adjacent-FIR ACC (Wuhan, Shanghai, Kunming, Sanya, Hong Kong, Macau) at the boundary; exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Guangzhou ACC provides flight information service in the FIR.
- **Language:** 🟧 **Mandarin/Cantonese** locally, standard **Mandarin Chinese** ATC usage; **English** available per ICAO requirement for international IFR traffic.
- **8.33 kHz:** not applicable; standard 25 kHz spacing.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **not implemented** — fixed ATS-route/airway network with tactical vectoring; the PRD's compact geometry and dense scheduling define the routeing.
- **Airway spine:** Guangzhou anchors the **Pearl River Delta trunk**, the busiest civil-aviation complex in southern China, feeding traffic between central China (Wuhan/Shanghai), the South China Sea (via Sanya/Hong Kong) and the SW-China/Indochina corridor (via Kunming/Hanoi).
- **Major fixes / entry-exit points:** the boundary entry/exit fixes feeding the ZGGG/ZGSZ terminal complex and the Hong Kong/Macau interface; the SimBrief/current-AIRAC route provides the exact string.
- **Hubs & aerodromes inside the FIR:** 🟩 **Guangzhou Baiyun (ZGGG)** and **Shenzhen Bao'an (ZGSZ)** in the PRD core; 🟧 **Changsha Huanghua (ZGHA)** further north (FIR assignment flagged §3). Hong Kong Intl (VHHH) and Macau (VMMC) sit **across the boundary** in their own FIRs, not this one — but form the surrounding PRD system.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 the Pearl River Delta itself is low-lying; terrain rises moderately toward inland Guangdong/Hunan (the Nanling range separating the PRD from the Changsha basin), but this is not a binding cruise-level constraint for a normal hub transit.
- **Boundary terrain:** no significant driftdown-relevant high terrain identified immediately across the PRD/Hong Kong/Macau boundaries; higher ground rises further west toward the Kunming-FIR boundary and Yunnan/Guangxi karst terrain.
- **Driftdown / depressurisation escape:** 🟩 not a binding constraint in the PRD core; the **very high diversion-field density** (ZGGG/ZGSZ/VHHH/VMMC clustered together) removes any terrain-limited escape problem there.
- **Cold-temperature altitude corrections:** 🟧 more relevant at the northern Changsha end of the FIR in winter than in the subtropical PRD — see [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Guangzhou–Baiyun | **ZGGG** | In-FIR PRD primary hub / dep-return alternate | [ZGGG brief](../../../destinations/asia/china/zggg/index.md) |
| Shenzhen–Bao'an | **ZGSZ** | In-FIR PRD alternate | [ZGSZ brief](../../../destinations/asia/china/zgsz/index.md) |
| Changsha–Huanghua | **ZGHA** | In-FIR (🟧 flagged) N-sector alternate | [ZGHA brief](../../../destinations/asia/china/zgha/index.md) |
| Hong Kong Intl | **VHHH** | Adjacent-FIR alternate — in Hong Kong FIR (VHHK), SE | [VHHH brief](../../../destinations/asia/hong-kong/vhhh/index.md) |
| Macau | **VMMC** | Adjacent-FIR alternate — in Macau FIR (VMMC), S | [VMMC brief](../../../destinations/asia/macau/vmmc/index.md) |

- **Coverage note:** 🟩 the PRD core (ZGGG/ZGSZ/VHHH/VMMC) packs several long-runway fields within minutes of each other — ETP/critical-point planning is not a driver there. Changsha (ZGHA) is more isolated within the northern sector. Typhoon disruption can degrade the whole PRD cluster simultaneously (see the Hong Kong FIR brief §9) — plan a weather-independent alternate further afield in season.

---

## 10. Special-use airspace

- **Military / danger areas:** 🟥 danger, restricted and military areas exist over the **Pearl River estuary and the northern South China Sea** — the same picture referenced in the companion Hong Kong FIR brief §10 — and nationally, **China's airspace is predominantly military-managed**. Exact TSA/danger-area footprint is **AIP/NOTAM-published**.
- **Overflight-permit / diplomatic considerations:** 🟧 China requires prior **overflight-permit/approval** for foreign operators (state-level requirement) — confirm at planning.
- **Restricted/prohibited pockets:** named areas and status are AIP/NOTAM-published — pull live at planning.

> **SUA currency:** re-check active danger/restricted-area status and any PRD military-activity bulletins at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO standard — squawk **7600**, continue per the last acknowledged clearance/filed route and levels, attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Guangzhou-specific refinement at AIP ENR 1.8/GEN.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC and comply with the vector/level issued.
- **China metric-level contingency:** 🟧 any contingency level change inside this FIR must be coordinated in **metric** with ATC and cross-checked against the FLAS feet-equivalent.
- **China ATFM / flow control:** 🟧 expect **CTOT/MINIT slots, ground holding and short-notice flow restrictions**, coordinated by the regional ATMB and interacting closely with the adjacent Hong Kong/Sanya flow picture (SCS trunk coordination).
- **Seasonal hazards (durable):**
  - **Typhoon season (~May–Nov, peak Jul–Sep)** — 🟥 the defining seasonal hazard for the PRD cluster; can shut down ZGGG/ZGSZ/VHHH/VMMC simultaneously and force large re-routes.
  - **Monsoon convection** — deep CB and squalls in the south-west monsoon and pre-frontal periods.
  - **Winter cold/fog at the Changsha end** — reduced visibility episodes in the cooler months, more pronounced than in the subtropical PRD.

> **Pull at planning (T-2h):** enroute NOTAMs, active danger/restricted-area and PRD military-activity status, tropical-cyclone warnings and SIGMET/AIRMET, China regional ATFM measures, and the validated SimBrief route with assigned (metric-in-China) levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- 🟧 **Changsha Huanghua (ZGHA) FIR assignment** — placed in Guangzhou FIR per public FIR-aggregation source and the "ZG" administrative-prefix pattern; not confirmed against a primary CAAC AIP source. If it in fact sits in Wuhan FIR, this served-airport should move to that brief.
- Exact **ATSU branding and internal sector split** for Guangzhou ACC — not individually re-verified against a primary AIP source.
- **Adjacent-FIR boundary decimals**, including the Macau and Hanoi (Vietnam) contact points — unconfirmed.
- **Airspace class per band** (AIP ENR 2.1) — stated as Class A predominant per regional norm, not FIR-specific.
- Whether **RNP 4/RNP 10** lateral-separation routes (cited in the Hong Kong FIR brief) extend into Guangzhou FIR proper, or are a Hong Kong-FIR-specific application — confirm at planning.
- **CPDLC mandate band/login sector** — confirm at CAAC AIP.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Parent area brief** — [`Airspace/General/Asia.md`](../../asia.md) §3/§4/§9/§10 (China metric core, RVSM/PBN/ADS-B provisions, ATFM, military-airspace share). Retrieved 2026-07-26.
- **Companion FIR brief** — [`Hong Kong (VHHK).md`](hong-kong-vhhk.md) §3/§9/§10 — Guangzhou named as Hong Kong's N neighbour and the PRD mega-TMA interface; Pearl River estuary/SCS danger-area and typhoon-season context cross-checked here. Retrieved 2026-07-26.
- **SKYbrary — China Reduced Vertical Separation Minima (RVSM)** — metric RVSM (22 Nov 2007), FLAS conversion table — https://skybrary.aero/articles/china-reduced-vertical-separation-minima-rvsm (retrieved 2026-07-26).
- **Public FIR-data aggregation — Changsha Huanghua (ZGHA) FIR assignment** — placed in Guangzhou FIR (ZGZU) — https://metar-taf.com/metar/ZGHA and related pages (retrieved 2026-07-26). *Tier-4 corroboration only — flagged 🟧 in §3/§12 pending primary-source confirmation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial build from `_FIR Briefing Template.md`. Guangzhou FIR (ZGZU): Guangzhou ACC / Central-South China Regional ATMB (CAAC) 🟧; adjacent FIRs Wuhan, Shanghai, Kunming, Sanya, Hong Kong (SE, dense PRD mega-TMA interface), Macau (S), and Hanoi/Vietnam (SW, unconfirmed); RVSM FL290–410 metric (FLAS) / RNAV5-RNP1-RNP APCH / ADS-B Out referenced to OM E; fixed ATS-route network, no FRA; ZGGG/ZGSZ PRD core + ZGHA (Changsha) 🟧 flagged FIR-assignment caveat; VHHH/VMMC cross-boundary diversions; Pearl River estuary/SCS SUA and typhoon-season hazard shared with the Hong Kong FIR brief. Parent area brief: Asia (built, cross-referenced); companion brief: Hong Kong (VHHK) (built, cross-referenced). |
