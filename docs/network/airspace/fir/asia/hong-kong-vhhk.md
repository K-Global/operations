# Hong Kong (VHHK) — FIR Briefing

**Scope:** single FIR — Hong Kong, the Pearl River Delta approaches and a block of the northern **South China Sea**, containing **Hong Kong Intl (VHHH) — the Asia cargo superhub** · **Parent area brief:** [Asia](../../asia.md) 🟩 · **Adjacent FIRs:** Guangzhou (ZGZU) N · Sanya (ZJSA) SW · Shanghai (ZSHA) NE · Taipei (RCAA) E · Manila (RPHI) SE
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — verified vs Hong Kong CAD AIP ENR structure + ICAO APAC framework; exact ACC sector split flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Hong Kong is a **radar/ADS-B-controlled FIR** — no oceanic procedural segment on a normal hub transit, but it is a compact, extremely busy FIR wedged between five neighbours (three of them mainland-Chinese) with a hard boundary onto the Guangzhou/Shenzhen mega-TMA and heavy interaction with the Pearl River Delta traffic system. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for VHHH live in the airport briefing (§9). Live restrictions (NOTAMs, danger-area/windshear alerts, typhoon disruption) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **VHHK** — Hong Kong FIR, surface to the upper control limit; **Hong Kong ACC (ATCC)** works the whole FIR |
| Controlling ATSU / ANSP | **Hong Kong ACC / ATCC** (radio "Hong Kong Control"), **Civil Aviation Department (CAD) Hong Kong** |
| Airspace class & vertical limits | 🟧 Predominantly **Class A** in the controlled airways/control-areas; vertical extent surface to the upper control limit — confirm exact class per band at **AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** inclusive (controlled airspace prescribed as RVSM) — see OM E §5 |
| PBN environment | **RNP 4 / RNP 10** on designated routes · **RNAV/RNP** enroute · **RNP 1** terminal · **RNP APCH** arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B** (ADS-B Out required); 🟧 CPDLC available — **ADS-C/CPDLC not required for RNP 4** within the FIR |
| Primary language & comms | 🟩 **VHF; English** (ICAO standard; Chinese also used) |
| Key hazard(s) | Very high **traffic density** in a compact FIR; the Guangzhou/Shenzhen mega-TMA boundary; **terrain-driven low-level windshear** on the VHHH approaches; **typhoon season (May–Nov)** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-controlled throughout; no oceanic procedural segment on a normal transit. |
| Communication coverage & language | 🟩 | Continuous VHF; **English** (ICAO), Chinese also used. No HF/SATVOICE driver. |
| Datalink / surveillance requirement | 🟥/🟧 | **ADS-B Out required** in the Hong Kong FIR. CPDLC available; 🟧 **ADS-C/CPDLC not required for RNP 4** — carriage still needed for RVSM/route eligibility. §5. |
| Terrain / MORA / driftdown | 🟧 | Modest FIR terrain (Lantau/HK hills ~900 m); the operational terrain issue is **low-level windshear on the VHHH approaches**, a terminal driver, not a cruise one. §8. |
| Diversion-aerodrome coverage | 🟩 | Dense — VHHH in-FIR, plus ZGGG/ZGSZ/VMMC/RCTP within short range across the boundaries. §9. |
| Special-use airspace (military / danger) | 🟧 | Danger/restricted areas over the Pearl River estuary and SCS; PRD military activity across the Guangzhou/Sanya boundaries — AIP/NOTAM-published. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNP 4/RNP 10 routes · RNP 1 · Mode S + ADS-B Out.** Aircraft not meeting RNP-10/RNP-4 minima must plan **FL280 or below**. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Hong Kong FIR (VHHK) is a **compact FIR** covering Hong Kong, the Pearl River estuary approaches and a block of the **northern South China Sea** south and east of the territory. It is one of the smaller FIRs in the region by area but among the densest by traffic, sitting directly against the Guangzhou/Shenzhen mega-TMA.
- **Vertical split:** 🟧 **Hong Kong ACC works the FIR surface-to-upper-limit**; no separately-branded upper-area control centre. The cruise band for our transits sits in the RVSM upper airspace (FL290–410). Confirm the exact band split at **AIP ENR 2.1**.
- **Adjacent FIRs (by boundary):**
  - **N — Guangzhou (ZGZU, CAAC).** The hard mainland boundary onto the **Guangzhou/Shenzhen Pearl River Delta mega-TMA** — the busiest and most procedurally-sensitive handoff; ZGSZ (Shenzhen) and ZGGG (Guangzhou) sit just across it.
  - **SW — Sanya (ZJSA, CAAC).** The South China Sea boundary to the south-west; the trunk toward the central/western SCS.
  - **NE — Shanghai (ZSHA, CAAC).** The north-eastern boundary toward the East China coast.
  - **E — Taipei (RCAA, Taiwan)** over the SCS/Taiwan Strait approaches; the eastbound trunk.
  - **SE — Manila (RPHI, CAAP)** at the south-eastern SCS edge.
- **Sectorisation:** 🟧 Hong Kong ACC is divided into internal ACC sectors that combine/split with traffic; the transit-relevant fact is the **single "Hong Kong Control" block** feeding the VHHH terminal area and interfacing the PRD system. Exact sector geometry is AIRAC-dependent — fly the current-AIRAC frequencies.

---

## 4. Control & ATSU

- **Lower- & upper-airspace ATSU:** 🟩 **Hong Kong ACC / ATCC** ("Hong Kong Control", CAD) works the whole FIR surface-to-upper-limit; no separate UAC. Approach/terminal control for VHHH feeds off the ACC.
- **FIS / FSS:** flight information service is provided by Hong Kong ACC; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous **radar + ADS-B** across the FIR including the over-water SCS block; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Hong Kong FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410 inclusive** — controlled airspace in the Hong Kong FIR is prescribed as RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNP 4 and RNP 10** lateral-separation on designated routes; **RNAV/RNP** enroute; **RNP 1** terminal; **RNP APCH** arrivals. 🟥 Aircraft **unable to meet RNP 10 / RNP 4 minima must flight-plan FL280 or below.** See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟧 **CPDLC available**; **ADS-C/CPDLC capability is NOT required for RNP 4 operation** within the Hong Kong FIR (CAD AIP) — a notable regional easing versus oceanic FANS airspace. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** required in the Hong Kong FIR (CAD mandate) — the surveillance backbone.
- **8.33 kHz:** not an APAC requirement; standard 25 kHz VHF spacing applies.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Hong Kong ACC ("Hong Kong Control")** across its sectors and handed to the adjacent-FIR ACC (Guangzhou, Sanya, Shanghai, Taipei, Manila) at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Hong Kong ACC provides flight information service in the FIR.
- **Language:** 🟩 **English** (ICAO standard); Chinese also used.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 the Hong Kong FIR is **fixed ATS-route / airway-structured**, not a continental FRA; the compact geometry and the PRD interface define the routeing. Confirm any flow-management / preferred-route programmes at ENR/NOTAM (PRD flow control is significant).
- **Airway spine:** the FIR is a **major SCS/East-Asia crossroads** — the north–south trunk between the mainland/PRD and the SCS (via Sanya/Manila), and the east–west trunk between South-East Asia and the East China/Pacific coast (via Taipei/Shanghai). Cargo flow into VHHH is a defining feature.
- **Major fixes / entry-exit points:** the boundary entry/exit fixes feeding the VHHH terminal area and the SCS/PRD trunk routes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Hong Kong Intl (VHHH, Asia cargo superhub)**; the closed **Kai Tak (VHHX)** is historical only. Shenzhen (ZGSZ), Guangzhou (ZGGG), Macau (VMMC) and Zhuhai sit **across the boundary in Guangzhou FIR (ZGZU)** — not this FIR — but form the surrounding PRD system.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 **modest** — Hong Kong's terrain (Lantau Island and the New Territories hills, up to roughly **900 m / ~3,000 ft**) and higher ground across the mainland boundary are well below cruise levels. Not a cruise-level factor at FL290+.
- **Boundary terrain:** higher terrain sits inland across the Guangzhou-FIR boundary (N); relevant only to low-level driftdown north of the territory, not a Hong Kong-FIR cruise constraint.
- **Terminal terrain / windshear:** 🟥 the operationally significant terrain effect is **low-level windshear and turbulence on the VHHH approaches**, generated by airflow over Lantau's terrain in strong/gusty (often typhoon-season) winds — a terminal driver managed by the airport windshear system and the regional **Large-Scale Windshear Demand Control Plan (LSWDCP)**; see the VHHH airport briefing and OM E adverse-weather/windshear.
- **Driftdown / depressurisation escape:** not a cruise-level constraint within the FIR; the **very high diversion-field density** (VHHH in-FIR, ZGGG/ZGSZ/VMMC across the boundary) removes any terrain-limited escape problem.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Hong Kong Intl | **VHHH** | In-FIR Asia cargo superhub / primary dep-return alternate | [VHHH brief](../../../destinations/asia/hong-kong/vhhh/index.md) |
| Shenzhen–Bao'an | **ZGSZ** | Adjacent-FIR alternate — **in Guangzhou FIR (ZGZU)**, N (PRD) | [ZGSZ brief](../../../destinations/asia/china/zgsz/index.md) |
| Guangzhou–Baiyun | **ZGGG** | Adjacent-FIR alternate — **in Guangzhou FIR (ZGZU)**, N | [ZGGG brief](../../../destinations/asia/china/zggg/index.md) |
| Macau | **VMMC** | Adjacent-FIR close alternate — **in Guangzhou FIR (ZGZU)**, W (PRD) | [VMMC brief](../../../destinations/asia/macau/vmmc/index.md) |
| Taipei–Taoyuan | **RCTP** | Longer-range regional alternate (E) — **in Taipei FIR (RCAA)** | [RCTP brief](../../../destinations/asia/taiwan/rctp/index.md) |

- **Coverage note:** 🟩 dense — the Pearl River Delta packs several long-runway fields within minutes, so **ETP/critical-point planning is not a driver** in this radar-controlled FIR. VHHH is the natural departure/return alternate; ZGSZ/VMMC are the closest cross-boundary options; note that **typhoon disruption can degrade the whole PRD cluster simultaneously** — plan a weather-independent alternate further afield (e.g. RCTP) in typhoon season.

---

## 10. Special-use airspace

- **Military / danger areas:** 🟧 danger, restricted and military areas exist over the **Pearl River estuary and the northern South China Sea**, and there is significant **military activity across the Guangzhou/Sanya (mainland) boundaries**; activation is **AIP/NOTAM-published** and can affect the trunk routes. The SimBrief route is validated against the current structure — confirm active areas at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none for a normal VHHH hub transit within the FIR; standard ICAO operation. The **South China Sea** carries broader regional-sensitivity considerations on the southbound/eastbound trunks — re-check live bulletins (§11).
- **Restricted/prohibited pockets:** named areas and status are AIP/NOTAM-published — pull live at planning.

> **SUA currency:** re-check active danger/restricted-area status and any South China Sea / PRD military-activity bulletins at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO comms-failure procedure — squawk **7600**, continue per the last acknowledged clearance / filed route and levels, and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Hong Kong refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued; over the SCS trunk the **ICAO general weather-deviation procedure** applies where radar/CPDLC contact is degraded. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Typhoon season (~May–Nov, peak Jul–Sep)** — 🟥 the defining seasonal hazard; tropical cyclones in the SCS/western Pacific can shut down VHHH and the whole PRD cluster, force large-scale re-routes, and generate severe windshear/turbulence. Hong Kong's tropical-cyclone warning signals (e.g. T8+) drive terminal disruption — plan weather-independent alternates and extra fuel/holding in season.
  - **Low-level windshear / terrain turbulence** — year-round on the VHHH approaches, worst in strong gusty flow; managed by the airport windshear system and the regional **LSWDCP** (§8).
  - **Monsoon convection** — deep CB and squalls in the south-west monsoon and the pre-frontal periods; heavy rain and low visibility at the terminal.
  - **Winter monsoon / reduced visibility** — north-east monsoon haze and reduced visibility episodes in the cooler months.
  - **Volcanic ash** — 🟩 low local exposure; the Philippine arc (across the Manila boundary) is a distant wildcard. **VAAC Tokyo** covers the region — pull VA advisories at planning.

> **Pull at planning (T-2h):** enroute NOTAMs, active danger/restricted-area and PRD military-activity status, tropical-cyclone warnings and SIGMET/AIRMET (typhoon, convection, windshear), **VAAC Tokyo** volcanic-ash advisories, South China Sea / conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** (AIP ENR 2.1) — stated as Class A predominant in controlled airspace; not individually re-verified.
- **ACC internal sectorisation and band split** — confirm against the current AIP/sector charts.
- **CPDLC availability/mandate band** and the RNP-4 datalink easing wording — confirm at the CAD AIP (ENR 1.8 datalink applications).
- **ADS-B Out carriage mandate** exact wording and exemptions — confirm at the CAD AIP.
- **PRD flow-management / preferred-route** programmes into/across the Guangzhou boundary — confirm at planning.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Hong Kong CAD AIP — ENR sections** (Civil Aviation Department, Hong Kong): ENR 1.8 (regional supplementary / RVSM, RNP 4/10, datalink applications), ENR 2.1 (FIR/ATS airspace), ENR 3.x (ATS routes). Primary source of record for FIR structure, RVSM (FL290–410), RNP 4/10 and the ADS-C/CPDLC-not-required-for-RNP-4 provision — https://www.ais.gov.hk/ (ENR 1.8, e.g. issue valid 14 MAY 2026) (retrieved 2026-07-25).
- **ICAO APAC — Hong Kong PBN application in FIR** and **China–Hong Kong PBN implementation plan** (RNP 4/RNP 10 route application) — https://www.icao.int/sites/default/files/APAC/Meetings/2024/2024%20SAIOSEACG-3/Workshop%20on%20Enroute%20PBN/5-Presentations/Hongkong-PBN-Application-in-FIR.pdf (retrieved 2026-07-25).
- **ICAO Doc 7030 (APAC) / Doc 4444** — regional RVSM/PBN supplementary and weather-deviation/contingency procedures. Adjacent-FIR and LSWDCP (Fukuoka ATMC, Hong Kong ATCC, Ho Chi Minh, Kota Kinabalu, Manila, Naha, Sanya, Singapore, Taipei ACCs) context corroborated via CAD/regional material.
- **VATSIM Hong Kong vACC (HKvACC)** — Standard Operating Procedures for the Hong Kong FIR — https://vathk.com/en/sop (and SOP PDF series, e.g. HKVACC-SOP005 / SOP051) (retrieved 2026-07-25). *Tier-4 corroboration only — single-ACC "Hong Kong Control" structure, five adjacent FIRs (Guangzhou/Sanya/Shanghai/Taipei/Manila), RVSM band and PRD-boundary picture cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_FIR Briefing Template.md`. Hong Kong FIR (VHHK): single Hong Kong ACC/ATCC ("Hong Kong Control", CAD) block; five adjacent FIRs (Guangzhou, Sanya, Shanghai, Taipei, Manila) and the PRD mega-TMA boundary; RVSM FL290–410 / RNP 4/RNP 10 routes (sub-minima → FL280 or below) / ADS-B Out required / CPDLC not required for RNP 4, referenced to OM E; airway-structured SCS/East-Asia crossroads; Lantau windshear + LSWDCP terminal driver; VHHH in-FIR + ZGSZ/ZGGG/VMMC/RCTP diversions; PRD/SCS SUA; typhoon-season (May–Nov) defining hazard; VAAC Tokyo. VATSIM Hong Kong vACC cross-checked and cited. Parent area brief: Asia (to build). |
