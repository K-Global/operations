# Wuhan (ZHWH) — FIR Briefing

**Scope:** single FIR — central China, the Hubei/Yangtze-valley heartland, wholly landlocked and bordered only by other Chinese FIRs, containing **Wuhan Tianhe (ZHHH)** · **Parent area brief:** [Asia](../../asia.md) 🟩 · **Adjacent FIRs:** Beijing (ZBPE) N · Shanghai (ZSHA) E · Guangzhou (ZGZU) S · Kunming (ZPKM) SW · Lanzhou (ZLHW) NW 🟧
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — structure verified vs public ICAO-APAC/CAAC-derived material; exact boundary decimals and ACC sector split 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Wuhan FIR is the **structurally simplest of the five China-mainland FIRs in this brief set** — a wholly continental, landlocked block at the crossroads of the Beijing–Guangzhou and Shanghai–Kunming trunk axes, bordered exclusively by other Chinese FIRs (no international or oceanic boundary). Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances and any active flow-control restriction. Terminal procedures for ZHHH live in the airport briefing (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **ZHWH** — Wuhan FIR, surface to the upper control limit; 🟧 **Wuhan Area Control Centre (Wuhan ACC)** — exact ATSU branding to confirm at AIP GEN 3.3 |
| Controlling ATSU / ANSP | **Wuhan ACC**, 🟧 **Central-South China Regional Air Traffic Management Bureau (ATMB)** — the same regional bureau referenced for Guangzhou — under the national **CAAC ATMB** |
| Airspace class & vertical limits | 🟧 Predominantly **Class A** in the upper controlled bands (regional norm) — confirm exact class per band at **CAAC AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (8,900–12,500 m) — assigned in **METRIC levels**, China-wide provision — see §5/OM E |
| PBN environment | 🟧 **RNAV 5 / RNP** enroute · **RNP 1** terminal · **RNP APCH** arrivals (China-wide continental provision) — see OM E §5 |
| Surveillance & datalink | 🟩 **Radar + ADS-B** (ADS-B Out mandated in China); 🟧 CPDLC available on the trunk network — mandate band unconfirmed |
| Primary language & comms | 🟧 **VHF; Mandarin Chinese primary, English available for international IFR traffic** |
| Key hazard(s) | **Yangtze-valley convective weather** (Meiyu/plum-rain season); strict **ATFM/flow control** as a national crossroads FIR; no oceanic/terrain-driftdown constraint |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-controlled throughout; wholly continental — no oceanic segment. |
| Communication coverage & language | 🟧 | VHF continuous; Mandarin primary, English available per ICAO requirement. |
| Datalink / surveillance requirement | 🟥/🟧 | **ADS-B Out** underpins the continental surveillance service (China-wide mandate). CPDLC available; mandate band/login sector unconfirmed. §5. |
| Terrain / MORA / driftdown | 🟩 | The Jianghan Plain around Wuhan is low-lying; not a cruise-level constraint. §8. |
| Diversion-aerodrome coverage | 🟩 | ZHHH in-FIR; dense onward coverage into all four neighbouring FIRs given the crossroads position. §9. |
| Special-use airspace (military / danger) | 🟧 | China-wide military-managed-airspace share applies; no FIR-specific SUA feature identified from public sources. §10. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 metric · RNAV 5/RNP enroute · RNP 1 terminal · RNP APCH · Mode S + ADS-B Out.** §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Wuhan FIR (ZHWH) covers **Hubei province and the central Yangtze valley** — a wholly landlocked, wholly domestic FIR bordered on every side by other Chinese FIRs. It sits at the geographic crossroads between the Beijing–Guangzhou (N–S) and Shanghai–Kunming (E–W) national trunk axes.
- **Vertical split:** 🟧 Wuhan ACC is understood to work the FIR surface-to-upper-limit as a single ATSU (the regional norm across China's continental FIRs) — confirm at **AIP ENR 2.1**.
- **Adjacent FIRs (by boundary):**
  - **N — Beijing (ZBPE, CAAC).** The trunk corridor toward the national capital.
  - **E — Shanghai (ZSHA, CAAC).** Toward the East China coast.
  - **S — Guangzhou (ZGZU, CAAC).** Toward the Pearl River Delta.
  - **SW — Kunming (ZPKM, CAAC).** Toward southwest China/Yunnan and the Tibetan-plateau approaches.
  - **NW — Lanzhou (ZLHW, CAAC).** 🟧 Toward Northwest China — unconfirmed exact contact geometry from public sources.
- **Sectorisation:** 🟧 Wuhan ACC is divided into internal sectors serving the ZHHH terminal area and the four national-trunk feeds; exact current sector geometry is AIRAC-dependent.

---

## 4. Control & ATSU

- **Lower- & upper-airspace ATSU:** 🟧 **Wuhan ACC**, under the **Central-South China Regional ATMB**, works the FIR surface-to-upper-limit; terminal/approach control for ZHHH feeds off the ACC.
- **FIS / FSS:** flight information service is provided by Wuhan ACC.
- **Surveillance basis:** 🟩 continuous **radar + ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Wuhan FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410 inclusive**, assigned in **METRIC levels** (China implemented metric RVSM 22 Nov 2007); ATC clears a metric flight level and the crew reads the **feet-equivalent off the approved China RVSM FLAS conversion table** and flies in feet. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟧 **RNAV 5 / RNP** enroute; **RNP 1** terminal (SID/STAR); **RNP APCH** arrivals — the standard continental-China provision (not individually re-verified for ZHWH). See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟧 **CPDLC (FANS/ATN) available** on the regional trunk network; mandate band and login sector not confirmed for this FIR specifically. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** mandated (China-wide provision).
- **8.33 kHz:** not a Chinese/APAC requirement; standard **25 kHz** VHF spacing applies.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Wuhan ACC** across its internal sectors and handed to the adjacent-FIR ACC (Beijing, Shanghai, Guangzhou, Kunming, Lanzhou) at the boundary; exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Wuhan ACC provides flight information service in the FIR.
- **Language:** 🟧 **Mandarin Chinese** primary; **English** available per ICAO requirement for international IFR traffic.
- **8.33 kHz:** not applicable; standard 25 kHz spacing.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **not implemented** — fixed ATS-route/airway network with tactical vectoring.
- **Airway spine:** Wuhan sits at the **crossroads of China's principal N–S (Beijing–Guangzhou) and E–W (Shanghai–Kunming/Chengdu) trunk corridors** — a defining structural feature of this FIR even though the traffic terminating locally (ZHHH) is more modest than the coastal metroplex FIRs.
- **Major fixes / entry-exit points:** the boundary entry/exit fixes feeding the ZHHH terminal area and the four national-trunk crossings; the SimBrief/current-AIRAC route provides the exact string.
- **Hubs & aerodromes inside the FIR:** 🟩 **Wuhan Tianhe Intl (ZHHH)** — this brief's served airport, and the only major civil aerodrome in scope for this document set within the FIR.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 the **Jianghan Plain** around Wuhan is low-lying and generally flat; not a cruise-level constraint. Higher ground rises toward the FIR's southern (Guangzhou-boundary) and south-western (Kunming-boundary) fringes.
- **Boundary terrain:** no significant driftdown-relevant high terrain identified immediately across the adjacent FIR boundaries on the primary hub-transit headings.
- **Driftdown / depressurisation escape:** 🟩 not a binding constraint in this FIR — contrast with the Kunming (ZPKM) FIR to the southwest, where the Tibetan-plateau terrain becomes a defining consideration.
- **Cold-temperature altitude corrections:** 🟧 seasonal relevance in winter — see [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md) and the ZHHH airport brief.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Wuhan–Tianhe | **ZHHH** | In-FIR primary hub / dep-return alternate | [ZHHH brief](../../../destinations/asia/china/zhhh/index.md) |

- **Coverage note:** 🟧 the served-airport set in this brief is limited to ZHHH; given the FIR's crossroads position, onward diversion options into all four neighbouring FIRs (Beijing, Shanghai, Guangzhou, Kunming/Lanzhou) are structurally favourable but not individually catalogued here — confirm at planning against the OFP alternate set.

---

## 10. Special-use airspace

- **Military / danger areas:** 🟥 nationally, **China's airspace is predominantly military-managed** — the same structural constraint noted across every China-mainland FIR in this set. No FIR-specific danger/restricted-area feature was identified for Wuhan FIR from public sources; exact footprint is **AIP/NOTAM-published**.
- **Overflight-permit / diplomatic considerations:** 🟧 China requires prior **overflight-permit/approval** for foreign operators (state-level requirement) — confirm at planning.
- **Restricted/prohibited pockets:** named areas and status are AIP/NOTAM-published — pull live at planning.

> **SUA currency:** re-check active restricted/danger-area status and any regional ATFM measures at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO standard — squawk **7600**, continue per the last acknowledged clearance/filed route and levels, attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Wuhan-specific refinement at AIP ENR 1.8/GEN.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC and comply with the vector/level issued.
- **China metric-level contingency:** 🟧 any contingency level change inside this FIR must be coordinated in **metric** with ATC and cross-checked against the FLAS feet-equivalent.
- **China ATFM / flow control:** 🟧 expect **CTOT/MINIT slots, ground holding and short-notice flow restrictions** coordinated by the regional ATMB — Wuhan's crossroads position makes it sensitive to flow measures originating in any of the four neighbouring FIRs.
- **Seasonal hazards (durable):**
  - **Meiyu/plum-rain season (~Jun–Jul)** — 🟧 persistent low cloud, rain and reduced visibility over the Yangtze valley, a defining seasonal feature of central China.
  - **Summer convective activity** — thunderstorms over the Jianghan Plain in the warm season.
  - **Winter fog** — reduced visibility episodes at the terminal in the cooler months.

> **Pull at planning (T-2h):** enroute NOTAMs, active restricted/danger-area status, China regional ATFM measures, SIGMET/AIRMET, and the validated SimBrief route with assigned (metric-in-China) levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **ATSU branding and internal sector split** for Wuhan ACC — not individually re-verified against a primary AIP source.
- **Adjacent-FIR boundary decimals**, including the Lanzhou (NW) contact point — unconfirmed.
- **Airspace class per band** (AIP ENR 2.1) — stated as Class A predominant per regional norm, not FIR-specific.
- Whether Wuhan ACC sits under the **Central-South China Regional ATMB** (as stated, shared with Guangzhou) or a distinct sub-bureau — the regional-bureau/FIR mapping is not individually confirmed for Wuhan.
- **CPDLC mandate band/login sector** — confirm at CAAC AIP.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Parent area brief** — [`Airspace/General/Asia.md`](../../asia.md) §3/§4/§9/§10 (China metric core, RVSM/PBN/ADS-B provisions, ATFM, military-airspace share). Retrieved 2026-07-26.
- **SKYbrary — China Reduced Vertical Separation Minima (RVSM)** — metric RVSM (22 Nov 2007), FLAS conversion table — https://skybrary.aero/articles/china-reduced-vertical-separation-minima-rvsm (retrieved 2026-07-26).
- **CANSO / CAAC ATMB — organisational structure** — CAAC Air Traffic Management Bureau, seven regional ATMBs — https://canso.org/member/air-traffic-management-bureau-caac/ (retrieved 2026-07-26). *Tier-4 corroboration only for regional-bureau naming.*
- **U.S.-China Economic and Security Review Commission — China's Airspace Management Challenge** — military vs civil airspace-share estimates (~70%+ military-managed historically) — https://www.uscc.gov (retrieved 2026-07-26). *Advisory/analysis source.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial build from `_FIR Briefing Template.md`. Wuhan FIR (ZHWH): Wuhan ACC / Central-South China Regional ATMB (CAAC) 🟧; four adjacent FIRs, all Chinese (Beijing, Shanghai, Guangzhou, Kunming) plus Lanzhou (NW, unconfirmed) — wholly landlocked, no international/oceanic boundary; RVSM FL290–410 metric (FLAS) / RNAV5-RNP1-RNP APCH / ADS-B Out referenced to OM E; fixed ATS-route network, no FRA; crossroads position at the Beijing–Guangzhou / Shanghai–Kunming trunk intersection; low Jianghan-Plain terrain / no cruise driftdown constraint; ZHHH in-FIR diversion; Meiyu/plum-rain and summer-convective seasonal notes. Parent area brief: Asia (built, cross-referenced). |
