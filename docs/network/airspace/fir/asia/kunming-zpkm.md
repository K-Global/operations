# Kunming (ZPKM) — FIR Briefing

**Scope:** single FIR — southwest China, covering Yunnan and (per the served-airport set below) the Sichuan/Chengdu basin, with the Tibetan Plateau immediately to the west, containing **Chengdu Shuangliu (ZUUU)** and **Chengdu Tianfu (ZUTF)** · **Parent area brief:** [Asia](../../asia.md) 🟩 · **Adjacent FIRs:** Wuhan (ZHWH) NE · Guangzhou (ZGZU) E · Lanzhou (ZLHW) N 🟧 · Yangon (VYYF, Myanmar) SW 🟧 · Vientiane (VLIV, Laos) S 🟧 · Kathmandu (VNSM, Nepal) W 🟧
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — structure verified vs public ICAO-APAC/CAAC-derived material; **Chengdu-area FIR assignment and exact boundary decimals 🟧 — see below**

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Kunming FIR is southwest China's **radar/ADS-B-controlled, metric-level FIR**, sitting directly against the **Tibetan Plateau** — one of the highest-terrain regions on the planet — and carrying China's international boundary toward Myanmar/Laos/Nepal. 🟧 **This brief's served-airport set includes the Chengdu metroplex (ZUUU/ZUTF); whether Chengdu sits inside Kunming FIR proper or is worked as a distinct Chengdu-area ACC/sub-FIR construct under the same regional bureau is NOT confirmed from public sources — flagged throughout and in §12.** Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances and any active flow-control restriction. Terminal procedures for ZUUU/ZUTF live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **ZPKM** — Kunming FIR, surface to the upper control limit; 🟧 **Kunming Area Control Centre (Kunming ACC)** — exact ATSU branding to confirm at AIP GEN 3.3 |
| Controlling ATSU / ANSP | 🟧 **Kunming ACC**, **Southwest China Regional Air Traffic Management Bureau (ATMB)** — the regional bureau's ATC centre is reported headquartered in **Chengdu** ("Chengdu Regional ATC Center"), under the national **CAAC ATMB** |
| Airspace class & vertical limits | 🟧 Predominantly **Class A** in the upper controlled bands (regional norm) — confirm exact class per band at **CAAC AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (8,900–12,500 m) — assigned in **METRIC levels**, China-wide provision — see §5/OM E |
| PBN environment | 🟧 **RNAV 5 / RNP** enroute · **RNP 1** terminal · **RNP APCH** arrivals (China-wide continental provision) — see OM E §5 |
| Surveillance & datalink | 🟩 **Radar + ADS-B** (ADS-B Out mandated in China); 🟧 CPDLC available on the trunk network — mandate band unconfirmed |
| Primary language & comms | 🟧 **VHF; Mandarin Chinese primary, English available for international IFR traffic** |
| Key hazard(s) | 🟥 **Tibetan-plateau/Himalaya-fringe high terrain to the west** (grid-MORA can exceed driftdown ceiling); international boundary proximity to Myanmar (conflict-risk airspace, §10); strict **ATFM/flow control**; high-elevation aerodrome performance considerations |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-controlled throughout; no oceanic segment (landlocked FIR). |
| Communication coverage & language | 🟧 | VHF continuous; Mandarin primary, English available per ICAO requirement; coverage in the higher-terrain west unconfirmed in detail. |
| Datalink / surveillance requirement | 🟥/🟧 | **ADS-B Out** underpins the continental surveillance service (China-wide mandate). CPDLC available; mandate band/login sector unconfirmed. §5. |
| Terrain / MORA / driftdown | 🟥 | **Tibetan-plateau/Himalaya-fringe terrain to the west** — the parent Asia area brief identifies the Himalaya belt as the region's highest-MORA driftdown constraint, and names the "SW-China ranges (Yunnan/Sichuan) feeding the Kunming/Chengdu area" specifically. §8. |
| Diversion-aerodrome coverage | 🟧 | Kunming city itself is dense; the Chengdu pair (ZUUU/ZUTF) is dense locally but the wider western/plateau approaches are diversion-sparse. §9. |
| Special-use airspace (military / danger) | 🟧 | China-wide military-managed-airspace share applies; the Myanmar-boundary area additionally carries the region's conflict-risk overflight picture (§10, shared with the Asia area brief §9). |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 metric · RNAV 5/RNP enroute · RNP 1 terminal · RNP APCH · Mode S + ADS-B Out.** High-elevation performance considerations apply at the Chengdu pair — see OM E. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Kunming FIR (ZPKM) covers **Yunnan province** in the strict southwest-China sense, with the **Tibetan Plateau** immediately to its west/northwest. 🟧 **Per the served-airport assignment for this brief, the Sichuan/Chengdu basin (ZUUU/ZUTF) is treated as within this FIR's remit** — consistent with (a) the absence of any separately-designated "Chengdu FIR" in the official nine-FIR list for mainland China (Shanghai, Guangzhou, Shenyang, Beijing, Lanzhou, Urumqi, Kunming, Wuhan, Sanya AOR), and (b) a public FIR-data aggregator placing ZUUU in Kunming FIR — but this has **NOT been confirmed against a primary CAAC AIP source**, and public material also describes a "Chengdu CTA" with its own named sectors (e.g. ZUUUAR21/22/23) and a Southwest Regional ATMB headquartered in Chengdu, which leaves open the possibility of a **distinct Chengdu-area ACC/approach construct operating within (or delegated from) Kunming FIR** rather than Chengdu being a plain undifferentiated part of the Kunming sector picture. **Flagged for verification — do not treat the Chengdu/Kunming relationship as settled.**
- **Vertical split:** 🟧 Kunming ACC (or the Chengdu-area construct, if distinct) is understood to work its airspace surface-to-upper-limit — confirm at **AIP ENR 2.1**.
- **Adjacent FIRs (by boundary):**
  - **NE — Wuhan (ZHWH, CAAC).** The corridor into central China.
  - **E — Guangzhou (ZGZU, CAAC).** Toward the Pearl River Delta.
  - **N — Lanzhou (ZLHW, CAAC).** 🟧 Toward Northwest China/the Tibetan-plateau's northern approaches — unconfirmed exact contact geometry.
  - **SW — Yangon (VYYF, Myanmar).** 🟧 The international boundary carrying the region's conflict-risk overflight picture (Asia area brief §9) — public source material places Kunming FIR as adjacent to Yangon FIR.
  - **S — Vientiane (VLIV, Laos).** 🟧 The Indochina boundary — unconfirmed exact contact geometry from public sources.
  - **W — Kathmandu (VNSM, Nepal).** 🟧 The Himalaya/Tibetan-plateau boundary — public source material places Kunming FIR as adjacent to Kathmandu FIR; treated here as the westward neighbour across the highest terrain in this brief set.
- **Sectorisation:** 🟧 Kunming ACC's internal sector structure, and the extent to which a distinct Chengdu-area sector group exists, is not confirmed from public sources; exact current sector geometry is AIRAC-dependent.

---

## 4. Control & ATSU

- **Lower- & upper-airspace ATSU:** 🟧 **Kunming ACC**, under the **Southwest China Regional ATMB** (reported HQ in Chengdu), works the FIR; the Chengdu terminal area may be worked by a **distinct approach/ACC construct** feeding into the same regional bureau — not confirmed (§3).
- **FIS / FSS:** flight information service is provided by Kunming ACC (or the Chengdu-area unit for that terminal, if distinct).
- **Surveillance basis:** 🟩 **radar + ADS-B** assumed consistent with the regional norm across the FIR's developed core (Kunming city, Chengdu basin); coverage over the western Tibetan-plateau fringe is less certain and not confirmed from public sources.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Kunming FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410 inclusive**, assigned in **METRIC levels** (China implemented metric RVSM 22 Nov 2007); ATC clears a metric flight level and the crew reads the **feet-equivalent off the approved China RVSM FLAS conversion table** and flies in feet. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟧 **RNAV 5 / RNP** enroute; **RNP 1** terminal (SID/STAR); **RNP APCH** arrivals — the standard continental-China provision (not individually re-verified for ZPKM). See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟧 **CPDLC (FANS/ATN) available** on the regional trunk network; mandate band and login sector not confirmed for this FIR specifically. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** mandated (China-wide provision).
- **High-elevation aerodrome performance:** 🟧 relevant at the Chengdu pair given regional terrain and density-altitude effects — see [`OM E — High-Elevation Aerodrome Operations`](../../../../flight-ops/high-elevation-aerodrome-operations.md) and the ZUUU/ZUTF airport briefs.
- **8.33 kHz:** not a Chinese/APAC requirement; standard **25 kHz** VHF spacing applies.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Kunming ACC** (or the Chengdu-area unit, if distinct) across internal sectors and handed to the adjacent-FIR ACC (Wuhan, Guangzhou, Lanzhou, or across the international boundary to Yangon/Vientiane/Kathmandu) at the boundary; exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Kunming ACC provides flight information service in the FIR.
- **Language:** 🟧 **Mandarin Chinese** primary; **English** available per ICAO requirement for international IFR traffic.
- **8.33 kHz:** not applicable; standard 25 kHz spacing.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **not implemented** — fixed ATS-route/airway network with tactical vectoring.
- **Airway spine:** Kunming FIR carries the **SW-China trunk** feeding the Kunming and Chengdu metroplexes, and forms a principal **China ↔ Myanmar/Laos/Nepal** international gateway on its southern and western edges — a corridor that also feeds toward the Bay-of-Bengal/South-Asia routes referenced in the parent Asia area brief.
- **Major fixes / entry-exit points:** the boundary entry/exit fixes feeding the ZUUU/ZUTF terminal complex and the international boundary crossings; the SimBrief/current-AIRAC route provides the exact string.
- **Hubs & aerodromes inside the FIR:** 🟧 **Chengdu Shuangliu (ZUUU)** and **Chengdu Tianfu (ZUTF)** — this brief's served airports (FIR assignment flagged §3). Kunming's own primary airport (Kunming Changshui, ZPPP) is out of scope for this document set.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟥 the **Tibetan Plateau** sits immediately west of this FIR — per the parent Asia area brief, the plateau sits at **4,000–5,000 m** with peaks on its Himalaya fringe exceeding **8,000 m**, producing **grid-MORA that can exceed the single-engine driftdown/depressurisation ceiling of a loaded twin** on the westernmost routings. The Asia brief specifically names the **"SW-China ranges (Yunnan/Sichuan) feeding the Kunming/Chengdu area"** as one of the region's defining high-terrain belts.
- **Boundary terrain:** high terrain intensifies toward the Kathmandu (W) and Lanzhou (N) boundaries as the Tibetan Plateau's eastern fringe is approached; the Yangon (SW) and Vientiane (S) boundaries are comparatively lower but still mountainous (northern Indochina/Myanmar highlands).
- **Driftdown / depressurisation escape:** 🟥 where grid-MORA exceeds the aircraft's driftdown level on the western/plateau-fringe routings, a **pre-planned depressurisation/driftdown escape route** is required planning, per [`OM E`] guidance and the parent Asia area brief §7 — brief the route-specific escape corridor and decompression ETP from the OFP for any routing that approaches the plateau.
- **Cold-temperature altitude corrections:** 🟥 relevant given the region's elevation and winter cold — see [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Chengdu–Shuangliu | **ZUUU** | In-FIR (🟧 flagged) SW-China / Himalaya-belt alternate | [ZUUU brief](../../../destinations/asia/china/zuuu/index.md) |
| Chengdu–Tianfu | **ZUTF** | In-FIR (🟧 flagged) SW-China / Himalaya-belt alternate | [ZUTF brief](../../../destinations/asia/china/zutf/index.md) |

- **Coverage note:** 🟧 ZUUU/ZUTF form a dense local pair in the Chengdu basin, but the wider FIR — especially the western Tibetan-plateau approaches — is **diversion-sparse and terrain-limited**, consistent with the parent Asia area brief's characterisation of the Himalaya belt as a "no-good-divert" window. Identify the critical-point alternate and decompression/driftdown ETP on any routing toward the plateau.

---

## 10. Special-use airspace

- **Military / danger areas:** 🟥 nationally, **China's airspace is predominantly military-managed**; no additional FIR-specific danger/restricted-area feature identified for Kunming FIR from public sources beyond the national picture. Exact footprint is **AIP/NOTAM-published**.
- **Myanmar-boundary conflict risk:** 🟥 the parent Asia area brief flags **Yangon FIR (VYYF)** — immediately across Kunming FIR's SW boundary — as **conflict-risk airspace** with an EASA advisory to operate **at or above FL260**, plus **GPS jamming/spoofing reported in the north of the FIR on the China–Bangladesh overflight corridor**. This is a live/perishable picture — see the Asia area brief §9 and re-check at planning; it is not restated in full here.
- **Overflight-permit / diplomatic considerations:** 🟧 China requires prior **overflight-permit/approval** for foreign operators (state-level requirement); overflight permits also apply for Myanmar/Laos/Nepal per state — confirm at planning.

> **SUA currency:** re-check active restricted/danger-area status and the Myanmar-boundary conflict-risk picture (Asia area brief §9) at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO standard — squawk **7600**, continue per the last acknowledged clearance/filed route and levels, attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Kunming-specific refinement at AIP ENR 1.8/GEN.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC and comply with the vector/level issued.
- **China metric-level contingency:** 🟧 any contingency level change inside this FIR must be coordinated in **metric** with ATC and cross-checked against the FLAS feet-equivalent.
- **Terrain-driven contingency (Tibetan-plateau fringe):** 🟥 on a decompression/engine-out approaching the plateau, fly the **pre-briefed driftdown/escape route** (§8), squawk **7700**, and descend toward the escape corridor and nearest capable field.
- **GNSS-degradation contingency:** 🟧 in the Myanmar-boundary interference pocket (§10), expect FMS drift and spurious GPWS alerts — cross-check DME/DME/IRU, advise ATC, and follow OM E guidance.
- **China ATFM / flow control:** 🟧 expect **CTOT/MINIT slots, ground holding and short-notice flow restrictions** coordinated by the regional ATMB.
- **Seasonal hazards (durable):** monsoon-season convection on the southern/Myanmar-boundary approaches; winter mountain-wave/CAT near the plateau fringe; cold-temperature terminal corrections at the Chengdu pair.

> **Pull at planning (T-2h):** enroute NOTAMs, active restricted/danger-area status, the Myanmar-boundary conflict-risk and GNSS-interference picture (Asia area brief §9), China regional ATFM measures, SIGMET/AIRMET, and the validated SimBrief route with assigned (metric-in-China) levels and any pre-planned driftdown/escape route. Not stored here.

---

## 12. Open items (🟧 — confirm)

- 🟥 **Chengdu FIR assignment — the single most important open item in this brief.** Whether ZUUU/ZUTF sit inside Kunming FIR proper, or are worked via a distinct Chengdu-area ACC/approach construct (the "Chengdu CTA" with named sectors such as ZUUUAR21/22/23 referenced in scattered public material) delegated from the Southwest China Regional ATMB, is **NOT confirmed against a primary CAAC AIP source**. This affects the accuracy of §3, §4, §6 and §9 above. Verify at the CAAC AIP or an authoritative regional-ATC reference before treating this brief as settled for the Chengdu pair.
- Exact **ATSU branding and internal sector split** for Kunming ACC (and any Chengdu-area unit) — not individually re-verified.
- **Adjacent-FIR boundary decimals**, including the Lanzhou, Yangon, Vientiane and Kathmandu contact points — unconfirmed.
- **Airspace class per band** (AIP ENR 2.1) — stated as Class A predominant per regional norm, not FIR-specific.
- **Route-specific grid-MORA and driftdown/escape-route detail** for the westernmost Kunming-FIR routings — build/verify from ENR charts and OFP engineering per the parent Asia area brief §7/§12.
- **CPDLC mandate band/login sector** — confirm at CAAC AIP.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Parent area brief** — [`Airspace/General/Asia.md`](../../asia.md) §3/§4/§7/§9/§10 (China metric core, RVSM/PBN/ADS-B provisions, ATFM, Himalaya/Tibetan-plateau terrain and driftdown constraint, Myanmar conflict-risk and GNSS-interference picture, military-airspace share). Retrieved 2026-07-26.
- **SKYbrary — China Reduced Vertical Separation Minima (RVSM)** — metric RVSM (22 Nov 2007), FLAS conversion table — https://skybrary.aero/articles/china-reduced-vertical-separation-minima-rvsm (retrieved 2026-07-26).
- **China Civil Aviation Report — Southwest Regional Air Traffic Management Bureau** — Southwest ATMB established in Chengdu; the planned "Chengdu Regional ATC Center" to cover the whole southwest region with radar in Chongqing/Guizhou/Kunming — https://www.chinacivilaviation.com/articles/ccar_159.html (retrieved 2026-07-26). *Basis for the 🟧 Chengdu/Kunming-FIR open item in §3/§12 — not a primary AIP source.*
- **Public FIR-data aggregation — ZUUU (Chengdu Shuangliu) FIR assignment** — places ZUUU in Kunming FIR — https://en.wikipedia.org/wiki/Chengdu_Shuangliu_International_Airport and related aggregator pages (retrieved 2026-07-26). *Tier-4 corroboration only — flagged 🟧/🟥 in §3/§12 pending primary-source confirmation.*
- **EASA — Information Note, Myanmar / Yangon FIR (VYYF)** — take-risk-into-account; airspace below FL260 assessed as affected; GPS jamming/spoofing on the China–Bangladesh corridor — https://www.easa.europa.eu/en/information-note-threat-and-risk-situation-airspace-myanmar-fir-yangon-vyyf (retrieved 2026-07-26). *Advisory/live source — re-check at planning; full detail lives in the Asia area brief §9, not restated here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial build from `_FIR Briefing Template.md`. Kunming FIR (ZPKM): Kunming ACC / Southwest China Regional ATMB (reported HQ Chengdu) 🟧; adjacent FIRs Wuhan, Guangzhou, Lanzhou (domestic) and Yangon/Myanmar, Vientiane/Laos, Kathmandu/Nepal (international, unconfirmed boundary decimals); RVSM FL290–410 metric (FLAS) / RNAV5-RNP1-RNP APCH / ADS-B Out referenced to OM E; fixed ATS-route network, no FRA; **🟥 Chengdu (ZUUU/ZUTF) FIR-assignment open item flagged as the brief's primary uncertainty** — no confirmed primary-source split between Kunming FIR proper and a possible distinct Chengdu-area ACC/CTA construct; Tibetan-plateau/Himalaya-fringe terrain and driftdown/escape-route constraint carried from the Asia area brief; Myanmar-boundary conflict-risk and GNSS-interference picture referenced (not restated). Parent area brief: Asia (built, cross-referenced). |
