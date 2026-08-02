# Asia — Airspace Briefing

**Scope:** the trans-Asian transit picture from the Bay of Bengal and South Asia, across mainland China and the South China Sea, to NE Asia (Korea/Japan/Taiwan) and the SE-Asian trunk — the airspace *between* the network's Asian hubs, the terminal ends of which live in the airport briefs · **FIRs / OCAs covered (principal):** Singapore (**WSJC**) · Kuala Lumpur (**WMFC**) · Jakarta (**WIIF**) · Bangkok (**VTBB**) · Ho Chi Minh (**VVTS**) · Hanoi (**VVNB**) · Manila (**RPHI**) · Yangon (**VYYF**) · Hong Kong (**VHHK**) · Sanya (**ZJSA**) · Guangzhou (**ZGZU**) · Shanghai (**ZSHA**) · Beijing (**ZBPE**) · Kunming (**ZPKM**) · Wuhan (**ZHWH**) · Urumqi (**ZWUQ**) · Taipei (**RCAA**) · Incheon (**RKRR**) · Pyongyang (**ZKKP**) · Fukuoka (**RJJJ**) · Mumbai (**VABF**) · Delhi (**VIDF**) · Chennai (**VOMF**) · Kolkata (**VECF**) · Kathmandu (**VNSM**) · Colombo (**VCCF**) · Dhaka (**VGFR**) · Karachi (**OPKR**)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — structure/procedures AIP/ICAO-APAC-verified where reached; **the overflight-risk picture (§9 — North Korea, Myanmar) is live and perishable, 🟥 re-check at planning (§11)**; per-FIR class letters, boundary decimals, China FLAS band and datalink coverage 🟧 (see §12)

> **Read-me:** Strategic transit reference for X-Plane 11, not a chart or clearance. Routings and levels here are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances and any active flow-control (CTOT/MINIT) restriction. **Asia is a vast FIR mosaic, not one system:** dense radar/ADS-B continental airspace over China, India, Korea, Japan and the developed SE-Asian states; genuine **procedural oceanic** blocks (RNP 4 + CPDLC/ADS-C) over the **Bay of Bengal** and parts of the **South China Sea**; the region's highest terrain on Earth on the **Himalaya belt**; and a cluster of live-security features — **China's unique metric levels and strict flow control**, **overlapping ADIZs** (China/Taiwan/Korea/Japan), **overflight-avoidance zones (North Korea, Myanmar)** and **border GNSS interference**. The three built Asia FIR briefs — **[Singapore (WSJC)](fir/asia/singapore-wsjc.md)**, **[Hong Kong (VHHK)](fir/asia/hong-kong-vhhk.md)**, **[Tokyo / Fukuoka (RJJJ)](fir/asia/tokyo-rjjj.md)** — carry the single-FIR/terminal detail; this file is the area picture and does not repeat them. Live restrictions (NOTAMs, conflict/overflight bulletins, typhoon/volcanic advisories) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIRs / control authorities | 🟩 **Continental radar/ADS-B FIRs**: the **China** set (Beijing ZBPE, Shanghai ZSHA, Guangzhou ZGZU, Sanya ZJSA, Kunming ZPKM, Wuhan ZHWH, Urumqi ZWUQ — **CAAC/ATMB**), **India** (Mumbai VABF, Delhi VIDF, Chennai VOMF, Kolkata VECF — **AAI**), Korea (Incheon RKRR — **KOCA**), Taiwan (Taipei RCAA — **CAA/ANWS**), and the developed SE-Asian FIRs (Singapore WSJC, Kuala Lumpur WMFC, Bangkok VTBB, Jakarta WIIF, Manila RPHI, Ho Chi Minh VVTS, Hanoi VVNB). 🟧 **Mixed / procedural-oceanic**: **Chennai & Kolkata (Bay of Bengal)**, parts of **Sanya / Ho Chi Minh / Manila (South China Sea)** and the **Fukuoka Oceanic** block (Pacific — see the RJJJ brief). **Pyongyang (ZKKP)** overflown by no one (§9) |
| Controlling ATSU(s) & type | 🟩 Radar + ADS-B vectoring across the developed continental FIRs (some of the densest airspace on the planet); 🟧 **procedural (FANS CPDLC/ADS-C, RNP 4)** over the Bay of Bengal and SCS oceanic sectors |
| RVSM | 🟥 Applicable **FL290–FL410** region-wide (ICAO APAC RVSM). **China applies RVSM in METRIC levels** via a feet-equivalent conversion table (§4). Defined in **OM E**, applied here |
| Separation standard | Radar/ADS-B vectored separation over the continental FIRs; **RNP 4 → 30 NM** (and trial **20 NM** handover on SCS trunks L642/M771) / **RNAV 10 (RNP 10) → 50 NM** procedural over the oceanic sectors |
| Datalink | 🟥 **CPDLC + ADS-C (FANS 1/A) required** in the Bay of Bengal and Fukuoka oceanic sectors; 🟧 **CPDLC available** on the continental trunk network (China/India/SE-Asia) — confirm mandate band per FIR |
| Primary comms | 🟩 **VHF continuous, English** (ICAO) across the continental FIRs; **HF / SATVOICE + CPDLC** on the Bay of Bengal / Pacific oceanic legs. China & Japan also use the national language domestically |
| Key hazard(s) | 🟥 **Overflight-avoidance — North Korea (ZKKP) and conflict-risk Myanmar (VYYF)**; **China metric levels + strict ATFM/flow control**; **overlapping ADIZs** (China/Taiwan/Korea/Japan) & Taiwan-Strait tension; **border GNSS interference** (Myanmar/China/India–Pakistan). Also: **Himalaya belt** — the world's highest MORA/driftdown terrain; **monsoon convection & NW-Pacific/SCS typhoon season (~May–Nov)**; **active volcanic arcs** (Japan/Indonesia/Philippines) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Overflight / conflict-zone risk | 🟥 | **North Korea (Pyongyang FIR ZKKP)** — avoid; unannounced ballistic-missile launches / re-entry debris (US prohibits, EASA CZIB). **Myanmar (Yangon FIR VYYF)** — take-risk-into-account, FL260 floor advised; MANPADS/surface fire below, GPS spoofing. **Overlapping ADIZs** (China ECS ADIZ, Japan, KADIZ, Taiwan) and **Taiwan-Strait military activity** raise misidentification risk on East-China-Sea/Strait routes. **Live & perishable — re-check at planning (§9/§11).** |
| Communication coverage (VHF/HF/SATVOICE) | 🟩/🟧 | Continuous VHF (English) across the continental FIRs; **HF + SATVOICE + CPDLC** for the Bay of Bengal and Pacific oceanic legs. 🟧 Frequency congestion on the SCS and India–SE-Asia trunks in peak flows. |
| Datalink / surveillance requirement | 🟥 | **FANS 1/A CPDLC + ADS-C required** in the Bay of Bengal and Fukuoka oceanic RNP 4 airspace; **ADS-B Out** underpins the continental surveillance service (mandated in several FIRs). CPDLC available on continental trunks. §4. |
| Terrain / MORA / driftdown | 🟥 | **The Himalaya belt is the world's highest enroute terrain** — grid-MORA on the northern India/Nepal/Tibet routes exceeds the single-engine driftdown ceiling of a loaded twin, forcing pre-planned **depressurisation/driftdown escape routes**. Also the Tibetan Plateau, Hindu Kush, Japanese Alps and SE-Asian ranges. §7. |
| Diversion-airfield coverage | 🟧 | Dense over China/India/Korea/Japan and the developed SE-Asian states; **sparse over the Bay of Bengal, the SCS oceanic sectors and the Himalaya belt** (terrain- and over-water-limited), where ETP/EDTO planning drives. §8. |
| Seasonal / environmental | 🟧 | **SW & NE monsoon** convection; **NW-Pacific / South China Sea typhoon season (~May–Nov, peak Jul–Sep)**; winter jet-stream CAT over Japan/the Himalaya; **active volcanic arcs** (Japan, Indonesia, Philippines) with three responsible VAACs (Tokyo / Darwin / Wellington region). §11. |
| Equipment / approval (RVSM, PBN, oceanic) | 🟥 | **RVSM FL290–410 (metric in China) · RNAV 5 / RNP enroute · RNP 1 terminal · RNP APCH · RNP 4 + FANS CPDLC/ADS-C oceanic · Mode S + ADS-B Out.** All defined in **OM E** — referenced, not re-derived. §4. |

---

## 3. Airspace structure

- **A region defined by its FIR mosaic.** Asia is a **patchwork of national FIRs** funnelling the Europe–Asia, intra-Asia and trans-Pacific trunk flows through a set of dense continental blocks and a few procedural oceanic gateways. The operational character changes markedly across it: **radar/ADS-B tactical vectoring** over the developed landmasses, **procedural FANS/RNP 4** over the Bay of Bengal and parts of the South China Sea, and **hard overflight-avoidance** around North Korea and (at low level) Myanmar.
- **China — the metric, flow-controlled core (CAAC / Air Traffic Management Bureau):** the **Beijing (ZBPE), Shanghai (ZSHA), Guangzhou (ZGZU), Sanya (ZJSA), Kunming (ZPKM), Wuhan (ZHWH), Lanzhou (ZLHW), Shenyang (ZYSH) and Urumqi (ZWUQ)** FIRs make up a continent-sized radar/ADS-B controlled block with two defining regional quirks: **all cruising levels are assigned in METRES** (§4), and the airspace runs under **strict, centralised ATFM/flow control** (§6). Controlled airspace to the upper limit is predominantly **Class A** in the upper bands. 🟧 (exact class-per-band / FIR-boundary decimals — per CAAC AIP ENR 2.1.)
- **India & South Asia (AAI):** the **Mumbai (VABF), Delhi (VIDF), Chennai (VOMF) and Kolkata (VECF)** FIRs, plus **Kathmandu (VNSM), Colombo (VCCF), Dhaka (VGFR) and Karachi (OPKR)**. Continental radar/ADS-B over the landmass; **Chennai and Kolkata additionally control large Bay-of-Bengal procedural oceanic sectors** (RNP 4 / FANS — §4). RVSM has been in force across the Indian FIRs since 2003 and the upper airspace has been progressively re-structured (e.g. the Chennai upper FIR above FL260 consolidated with integrated radar + ADS-B). 🟧
- **South-East Asia (the SCS/Strait trunk):** **Singapore (WSJC), Kuala Lumpur (WMFC), Bangkok (VTBB), Jakarta (WIIF), Ho Chi Minh (VVTS), Hanoi (VVNB), Manila (RPHI)** and **Yangon (VYYF)**. Mostly radar/ADS-B, but the **South China Sea trunk routes** (e.g. **L642 / M771 / N892 / L625**) run through **Sanya/Ho Chi Minh/Manila** oceanic sectors where reduced procedural minima and cross-FIR handover coordination apply (§4/§6). Singapore-FIR detail is in the **[Singapore (WSJC) FIR brief](fir/asia/singapore-wsjc.md)**.
- **NE Asia (Korea / Taiwan / Japan):** **Incheon (RKRR, KOCA)**, **Taipei (RCAA)** and **Fukuoka (RJJJ, JCAB)** — dense radar/ADS-B over the landmass and near seas; **Fukuoka additionally holds the large Pacific procedural-oceanic block** (FANS, Oakland-based procedures — see the **[Tokyo / Fukuoka (RJJJ) FIR brief](fir/asia/tokyo-rjjj.md)**). The **Hong Kong (VHHK)** FIR sits against the Guangzhou/Shenzhen mega-TMA — detail in the **[Hong Kong (VHHK) FIR brief](fir/asia/hong-kong-vhhk.md)**.
- **Overflown-by-no-one core — Pyongyang (ZKKP):** the North Korean FIR is routed *around*, not through (§9). 🟥
- **Classes & level bands:** 🟧 controlled airspace to the upper limit, predominantly **Class A** in the upper bands over the developed FIRs, with Class C/D TMAs over the hub terminal complexes; RVSM occupies **FL290–FL410** (assigned in metres inside China). Confirm exact class-per-band per state AIP ENR 2.1.
- **Entry/exit & transition points:** the filed route is the **SimBrief/current-AIRAC-validated string**; oceanic entry fixes apply on the Bay-of-Bengal and SCS/Pacific flanks, and a **metric↔feet level transition occurs at the China FIR boundary** (§4).

---

## 4. Equipment, approvals & separation

*Capability topics (RVSM, PBN/RNP, CPDLC/ADS-C, oceanic separation, transition levels) are **defined once in OM E — Operations**; this section states which apply across the region and references OM E — it does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO **APAC RVSM**. See [`OM E — RVSM Operations`](../../flight-ops/rvsm-operations.md).
  - **China metric levels — 🟧 the region's signature quirk:** China assigns cruising levels in **metres**, not feet, throughout its RVSM airspace (RVSM implemented **22 Nov 2007** in metric). ATC clears a **metric flight level** (e.g. eastbound 8,900 / 9,500 / 10,100 / 10,700 / 11,300 / 11,900 / 12,500 m; westbound 9,200 / 9,800 / 10,400 / 11,000 / 11,600 / 12,200 m); the crew reads the corresponding **feet value off the China RVSM FLAS conversion table** and **flies the aircraft in feet**. A **feet-equivalent** is defined for every metric level so that a true **1,000 ft** RVSM separation is preserved (a straight metric→feet conversion would only give ~900 ft). The **metric↔feet transition normally happens at the FIR boundary in the adjacent (non-Chinese) FIR** — brief the FLAS table and the level-change on entry/exit. Confirm the current FLAS band on the day's docs.
- **PBN / RNP:** 🟥 **RNAV 5 / RNP** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals across the continental FIRs; **RNP 4** (or RNAV 10 / RNP 10) on the oceanic tracks. India implemented multiple parallel **RNAV 10 (RNP 10)** routes (EMARSSH, 2002) and RNAV 5 / RNP 1 city-pair structure. See [`OM E — PBN and RNP Operations`](../../flight-ops/pbn-and-rnp-operations.md). 🟧 With border **GNSS interference** present (§9), confirm RNP integrity monitoring and DME/DME/IRU fallback.
- **Oceanic separation & datalink — 🟥 Bay of Bengal + SCS + Pacific:**
  - **Bay of Bengal (Chennai VOMF / Kolkata VECF):** genuine **procedural oceanic** airspace coordinated through the ICAO **BOBASIO / FIT-BOB** framework — **RNP 4 with CPDLC + ADS-C (FANS 1/A)** enabling **30 NM** longitudinal/lateral (revised from 50 NM), or **RNAV 10 (RNP 10) with DCPC** for 50 NM. Aircraft not FANS/RNP-4 equipped get the wider minima. See [`OM E — Datalink and Oceanic Procedures`](../../flight-ops/datalink-and-oceanic-procedures.md).
  - **South China Sea (Sanya ZJSA / Ho Chi Minh VVTS / Manila RPHI):** the SCS trunk routes **L642 / M771** run **RNP 4 → 30 NM** with a **China–Hong Kong–Vietnam 20 NM handover-separation trial** (from Apr/May 2024) on the busiest pair; **RNAV 10 (RNP 10) → 50 NM** elsewhere. ICAO **SCSTFRG** coordinates the cross-FIR handover. ADS-B increasingly backs surveillance here (see the Hong Kong / Singapore FIR briefs).
  - **Fukuoka Oceanic (Pacific):** **FANS 1/A CPDLC + ADS-C, RNP 4/10, NOPAC/PACOTS** — owned by the **[Tokyo / Fukuoka (RJJJ) FIR brief](fir/asia/tokyo-rjjj.md) §4**.
- **Datalink (continental):** 🟧 **CPDLC (FANS/ATN)** is available on the regional trunk network (China, India, SE-Asia) for equipped aircraft; VHF voice remains primary. Confirm any mandate band and login sector per FIR at ENR/NOTAM.
- **Transponder / ADS-B:** 🟥 **Mode S** required; **ADS-B Out** underpins the continental surveillance service and is mandated in several FIRs (China, Singapore, Hong Kong, Japan, etc.). Confirm equipage on the OFP.
- **ETOPS / EDTO:** 🟥 the Bay-of-Bengal, SCS and Pacific over-water legs, and the diversion-sparse Himalaya belt, are **ETOPS/EDTO / escape-route planning drivers**. See [`OM E — ETOPS-EDTO Procedures`](../../flight-ops/etops-edto.md).
- **8.33 kHz:** not an APAC requirement (that is a EUR mandate); standard **25 kHz** VHF spacing applies, plus HF on the oceanic legs.

---

## 5. Communications

- **VHF — continuous, primary:** 🟩 the continental FIRs (China, India, Korea, Taiwan, Japan near-seas, developed SE-Asia) are worked on **VHF throughout**, **English** (ICAO), **25 kHz**. China and Japan also use the national language domestically; **English is available for international IFR traffic**.
- **HF / SATVOICE:** 🟥 required for the **Bay of Bengal** (Chennai/Kolkata oceanic) and the **Pacific** (Fukuoka Oceanic) legs where VHF/radar end; **SATVOICE/CPDLC** provides the primary link on the procedural sectors. Not required on the continental trunks.
- **Datalink comms:** CPDLC (FANS/ATN) on continental trunks (§4) and as the primary link on the oceanic sectors.
- **Congestion — a live operational caveat:** 🟧 the **South China Sea trunk (L642/M771 area), the India–SE-Asia gateways and the Chinese metroplex FIRs** run at very high density; expect frequency saturation and long transfer queues in peak flows. Keep TCAS/anti-collision active and use CPDLC where available to offload voice.
- **Emergency / interpilot VHF:** guard **121.5 MHz** (monitor); air-to-air **123.45 MHz**.
- **Position reporting:** radar/ADS-B on the continental FIRs; **procedural (voice/CPDLC) reporting** over the Bay of Bengal and SCS/Pacific oceanic sectors.

---

## 6. Routing & levels

- **Principal route structure — a fixed ATS-route network, not FRA:** 🟩 Asia is **airway/ATS-route structured** (no continental Free Route Airspace in the European sense). The trunk system links **South Asia ↔ SE Asia ↔ the South China Sea ↔ NE Asia / the Pacific**, funnelling through a handful of dense corridors:
  - **South China Sea spine** — the **L642 / M771 / N892 / A1** family carrying the Singapore/KL ↔ Hong Kong ↔ Shanghai/Japan flow across the Sanya/Ho Chi Minh/Manila/Hong Kong FIRs (§4 reduced-separation trials).
  - **Bay of Bengal gateway** — the procedural RNP 4 oceanic routes linking the Indian subcontinent (Chennai/Kolkata) with SE Asia (Kuala Lumpur/Bangkok/Yangon) and beyond.
  - **China internal trunks** — the metric-level, flow-controlled network feeding the Beijing/Shanghai/Guangzhou/Chengdu metroplexes.
  - **Himalaya-belt routes** — the northern India/Nepal/Tibet airways with the region's highest MORA (§7).
- **China ATFM / strict flow control — 🟧 a defining regional procedure:** Chinese airspace runs under **centralised, strict Air Traffic Flow Management** — expect **CTOT (calculated take-off time) slots, MINIT (minutes-in-trail) spacing, ground holding and short-notice flow restrictions**, coordinated by the national/regional ATMB and extending outward through programmes such as the **China–Malaysia–Thailand ATFM coordination** (CTOTs issued to flights transiting the **Sanya FIR** over the SCS). Plan for slot compliance and possible enroute holding; the flow picture is dynamic — pull the day's ATFM measures at planning.
- **Free Route Airspace (FRA):** 🟩 **not implemented** — fixed ATS-route network with tactical vectoring; some states publish direct/RNAV routings but plan the published structure.
- **Typical level/flow:** RVSM **FL290–FL410**; **metric levels within China** (§4) with the metric↔feet swap at the China FIR boundary; step-climb as weight reduces via CPDLC/voice; procedural level allocation over the oceanic sectors. Directional (semicircular/quadrantal-equivalent) level conventions apply per the metric/feet cruising-level tables.

---

## 7. Terrain, MORA & driftdown

- **The Himalaya belt — 🟥 the world's highest enroute terrain and the region's binding constraint:** the northern **India / Nepal / Tibet** routes overfly the **Himalaya and the Tibetan Plateau**, with **grid-MORA far exceeding the single-engine driftdown / one-engine-inoperative-plus-depressurisation ceiling of a loaded twin**. Where MORA exceeds the aircraft's driftdown level, a **pre-planned depressurisation / driftdown escape route** (a laterally-offset track down a valley/plateau corridor to a level the aircraft can hold on one engine, clear of terrain) is **mandatory route-specific planning** — the standard mountainous-terrain escape-route method (SKYbrary / operator engineering). Peaks exceed **8,000 m (Everest 8,849 m)** and the plateau sits at **4,000–5,000 m**; oxygen-duration and drift-down-gradient both bind.
- **Other high-terrain belts:** the **Hindu Kush / Karakoram** (Pakistan/Afghanistan approaches), the **Japanese Alps + Mt Fuji** (see the RJJJ brief §8), the **SW-China ranges (Yunnan/Sichuan)** feeding the Kunming/Chengdu area, and the **Barisan (Sumatra) / Borneo / Luzon** ranges across the SE-Asian FIRs.
- **Grid MORA / high terrain belts:** 🟧 take **per-quadrant grid-MORA** from current ENR charts; over the maritime SE-Asian and SCS legs MORA is low (over-water), so there the constraint shifts to **ETP/EDTO diversion range**, not terrain.
- **Driftdown / depressurisation escape:** 🟥 on the Himalaya-belt routes the escape route and its **critical point / decompression ETP** are the defining emergency-planning item — brief them from the OFP. Over the **Bay of Bengal, SCS oceanic and Pacific** legs the constraint is over-water diversion range (ETOPS/EDTO), not terrain.
- **Cold-temperature altitude corrections:** 🟥 apply at the **northern / high-elevation / winter terminals** (Himalayan-fringe, northern China, Korea, northern Japan). See [`OM E — Cold Weather Operations`](../../flight-ops/cold-weather-operations.md) and the airport briefs; high-elevation-field performance is in [`OM E — High-Elevation Aerodrome Operations`](../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 8. Diversion & enroute alternates

Dense, high-quality fields exist over China, India, Korea, Japan and the developed SE-Asian states; the **sparse patches are the Bay of Bengal, the SCS oceanic sectors and the Himalaya belt**, where terrain and over-water range drive ETP/EDTO planning. Confirm each field's availability at planning.

| Airfield | ICAO | Sector / FIR | Role | Notes / brief |
|---|---|---|---|---|
| Singapore–Changi | **WSSS** | Singapore (WSJC) | SE-Asia pax superhub / primary SE alternate | H24, full-service. [WSSS brief](../destinations/asia/singapore/wsss/index.md) |
| Kuala Lumpur–Sepang | **WMKK** | Kuala Lumpur (WMFC) | Malacca/Strait alternate | [WMKK brief](../destinations/asia/malaysia/wmkk/index.md) |
| Bangkok–Suvarnabhumi | **VTBS** | Bangkok (VTBB) | Indochina / Bay-of-Bengal coast-in alternate | [VTBS brief](../destinations/asia/thailand/vtbs/index.md) |
| Jakarta–Soekarno-Hatta | **WIII** | Jakarta (WIIF) | Southern SE-Asia alternate | [WIII brief](../destinations/asia/indonesia/wiii/index.md) |
| Hong Kong Intl | **VHHH** | Hong Kong (VHHK) | Asia cargo superhub / SCS crossroads alternate | [VHHH brief](../destinations/asia/hong-kong/vhhh/index.md) · FIR: [VHHK](fir/asia/hong-kong-vhhk.md) |
| Guangzhou–Baiyun | **ZGGG** | Guangzhou (ZGZU) | PRD / S-China alternate | Metric levels; flow control. [ZGGG brief](../destinations/asia/china/zggg/index.md) |
| Shenzhen–Bao'an | **ZGSZ** | Guangzhou (ZGZU) | PRD alternate | [ZGSZ brief](../destinations/asia/china/zgsz/index.md) |
| Shanghai–Pudong | **ZSPD** | Shanghai (ZSHA) | E-China / trans-Pacific gateway alternate | [ZSPD brief](../destinations/asia/china/zspd/index.md) |
| Beijing–Capital | **ZBAA** | Beijing (ZBPE) | N-China alternate | [ZBAA brief](../destinations/asia/china/zbaa/index.md) |
| Chengdu–Shuangliu / Tianfu | **ZUUU / ZUTF** | (SW China) | Himalaya-belt / SW-China alternate | Briefs: [ZUUU](../destinations/asia/china/zuuu/index.md) · [ZUTF](../destinations/asia/china/zutf/index.md) |
| Incheon | **RKSI** | Incheon (RKRR) | NE-Asia / Yellow-Sea alternate | [RKSI brief](../destinations/asia/south-korea/rksi/index.md) |
| Taipei–Taoyuan | **RCTP** | Taipei (RCAA) | Taiwan-Strait / SCS-NE alternate | [RCTP brief](../destinations/asia/taiwan/rctp/index.md) |
| Tokyo–Narita | **RJAA** | Fukuoka (RJJJ) | NE-Asia node / Pacific coast-in alternate | [RJAA brief](../destinations/asia/japan/rjaa/index.md) · FIR: [RJJJ](fir/asia/tokyo-rjjj.md) |
| Delhi–Indira Gandhi | **VIDP** | Delhi (VIDF) | N-India / Himalaya-belt alternate | [VIDP brief](../destinations/asia/india/vidp/index.md) |
| Mumbai | **VABB** | Mumbai (VABF) | W-India / Arabian-Sea coast-in alternate | [VABB brief](../destinations/asia/india/vabb/index.md) |
| Chennai | **VOMM** | Chennai (VOMF) | Bay-of-Bengal coast-in / oceanic-gateway alternate | [VOMM brief](../destinations/asia/india/vomm/index.md) |
| Colombo–Bandaranaike | **VCBI** | Colombo (VCCF) | S-Bay-of-Bengal / Indian-Ocean alternate | [VCBI brief](../destinations/asia/sri-lanka/vcbi/index.md) |
| Dhaka–Shahjalal | **VGHS** | Dhaka (VGFR) | NE-India / Bay-of-Bengal-N alternate | [VGHS brief](../destinations/asia/bangladesh/vghs/index.md) |
| Karachi–Jinnah | **OPKC** | Karachi (OPKR) | W-gateway / Arabian-Sea alternate | [OPKC brief](../destinations/asia/pakistan/opkc/index.md) |

- **ETP / equal-time-point considerations:** 🟥 the developed continental trunks put a field within short range, so ETP is not a driver *there* — but the **Bay of Bengal, the SCS oceanic sectors, the Pacific legs and the diversion-sparse Himalaya belt** are genuine **no-good-divert / terrain-limited windows**. Identify the critical-point alternate and the decompression/driftdown ETP on each OFP. Note **North Korea and (below FL260) Myanmar remove nominal diverts** — plan around them (§9).
- **Fuel-freeze / cold-soak:** 🟧 long high-FL legs across the Himalaya/Tibetan Plateau and the northern trunks cold-soak the fuel — monitor tank temperature vs the **Jet A-1 freeze point −47 °C** on the longest/highest legs; the warm SE-Asian/oceanic legs are not a driver.

---

## 9. Special-use airspace & overflight — 🟥 OVERFLIGHT-AVOIDANCE & ADIZ CORE

> 🟥 **OVERFLIGHT-AVOIDANCE / LIVE-SECURITY AIRSPACE — this section is perishable. The North Korea and Myanmar risk pictures, the ADIZ activity and any GNSS-interference advisories MUST be re-verified against the ICAO Conflict Zone Information Repository, the EASA CZIBs / Information Notes, state NOTAMs and OPSGROUP/safeairspace at planning (§11). Never treat this file's snapshot as current clearance.**

- **North Korea (Pyongyang FIR, ZKKP) — 🟥 avoid.** The DPRK conducts **frequent, unannounced ballistic-missile launches**, many into the **Sea of Japan / East Sea within the oceanic part of ZKKP**; the dominant hazard is **missile / re-entry debris and misidentification**, compounded by DPRK air-defence coverage of the whole FIR and possible electronic-warfare use in tension periods. **The US prohibits all North Korean airspace** (incl. the oceanic ZKKP over the Sea of Japan) and **EASA maintains a CZIB (CZIB-2017-06)** advising operators to risk-assess. Effectively overflown by no scheduled traffic — route around it.
- **Myanmar (Yangon FIR, VYYF) — 🟥 conflict-risk, low level.** Since the 2021 coup, the ongoing internal conflict has produced **surface-to-air fire, anti-aviation weaponry and MANPADS use** (an armed group downed a military helicopter with a MANPAD in Kachin, Jan 2024). As of early 2026 the **EASA Information Note advises operating at or above FL260** (airspace **below FL260 assessed as affected**) and taking the risk into account in routing. **GPS jamming / spoofing** is reported in the north of the FIR on the China–Bangladesh overflight corridor (e.g. airway N895) and recurred on relief flights in **Mar 2026** — brief the DME/DME/IRU fallback. Overflight **at/above FL260** is the common practice; avoid the low-level structure.
- **Overlapping ADIZs — 🟧/🟥 China / Taiwan / Korea / Japan:** the **East China Sea holds four overlapping Air Defence Identification Zones** — **China's ECS ADIZ (declared 23 Nov 2013), Japan's, the Korean KADIZ, and Taiwan's** — over international routes. An ADIZ is **not a regulated ICAO airspace** and overflight is legal, but the **overlap and heightened military activity raise misidentification / interception risk**; comply with the **ADIZ position-reporting / flight-plan requirements** of the relevant state on East-China-Sea and Yellow-Sea routes. 🟥 **Taiwan-Strait tension:** PLA incursions into **Taiwan's ADIZ have run into the thousands per year** (4,000+ Jan–Sep 2025), and the ADIZ overlaps international civil routes — the risk is **misidentification if military and civil tracks converge**. Fly the cleared airway/level and monitor the live picture.
- **GNSS jamming & spoofing — 🟧 border hotspots:** unlike the Middle East, interference in Asia is **localised to borders/conflict edges** rather than region-wide — the **Myanmar north (China–Bangladesh corridor)**, the **India–Pakistan border**, and spillover from Middle-East/Central-Asian sources on the western gateways. Expect FMS position drift and spurious terrain alerts in those pockets; cross-check DME/DME/IRU, advise ATC and follow the OM E GNSS-interference guidance.
- **Military / restricted / danger areas & overflight permits:** 🟧 extensive **restricted/danger/prohibited and military-training areas** across every state (China, India, Korea, Japan, SE Asia), and **South China Sea military activity**; activation is AIP/NOTAM-published. **Overflight permits** apply for several states (China requires prior permit/approval for foreign operators; others per state) — confirm at planning.

> **Overflight-zone currency:** re-check the **ICAO Conflict Zone Information Repository, EASA CZIBs/Information Notes (North Korea, Myanmar), state NOTAMs, ADIZ requirements and OPSGROUP/safeairspace** and operator routing policy at planning — the §9 picture is **durable awareness, not live clearance**.

---

## 10. Contingency procedures

- **Radar/tactical environment (continental FIRs):** 🟩 over the developed continental blocks follow **ATC vectors/clearances**; request weather deviations from ATC and comply with the vector/level issued. No oceanic offset table applies on the continental trunks.
- **Oceanic (Bay of Bengal / SCS / Pacific):** 🟥 over the procedural sectors apply the **ICAO Doc 4444 oceanic in-flight contingency** and **weather-deviation** method (strategic/lateral offset, level change with position broadcast, SLOP where published) as for any remote airspace — see [`OM E — Datalink and Oceanic Procedures`](../../flight-ops/datalink-and-oceanic-procedures.md). The SCS **Large-Scale Weather Deviation Procedure** (IFATCA/ICAO SCSTFRG work) governs monsoon/typhoon deviations on the dense SCS trunk.
- **Comms-failure:** ICAO standard — squawk **7600**, continue per the last acknowledged clearance / filed route and levels, attempt the previous/adjacent frequency and **121.5**. In the oceanic block follow the **oceanic lost-comms** procedure (CPDLC/HF, position broadcasts). 🟧 Confirm any state refinement at the relevant AIP ENR 1.8 / GEN.
- **China metric-level contingency:** 🟧 in a contingency inside Chinese airspace, remember levels are metric — the **feet-offset for a weather-deviation/contingency level change must be applied against the FLAS feet-equivalent**, and coordinate the metric level with ATC.
- **GNSS-degradation contingency:** 🟧 in the border interference pockets (§9) expect FMS drift and spurious GPWS alerts — cross-check DME/DME/IRU, advise ATC, request radar vectors, and follow OM E guidance.
- **Terrain-driven contingency (Himalaya belt):** 🟥 on a decompression/engine-out over the Himalaya/Tibet, fly the **pre-briefed driftdown/escape route** (§7), squawk **7700**, and descend toward the escape corridor and nearest capable field — the escape route, not the direct track, is the survivable path.

---

## 11. Seasonal, environmental & live data

- **Seasonal hazards (durable):**
  - **Monsoon convection** — the **SW monsoon (~May–Sep)** and **NE monsoon (~Nov–Mar)** drive deep CB, embedded thunderstorms, heavy rain and low visibility across South and SE Asia and the SCS, with an inter-monsoon convective peak; the dominant enroute/terminal weather hazard, handled tactically. Equatorial convection (Straits/Indonesia) is year-round — see the Singapore FIR brief §11.
  - **Typhoon season (~May–Nov, peak Jul–Sep)** — 🟥 tropical cyclones in the **NW Pacific and South China Sea** regularly shut terminals and force large re-routes across Hong Kong, the PRD, Taiwan, the Philippines, S-China, and Japan (see the Hong Kong and Tokyo/Fukuoka FIR briefs); plan weather-independent alternates and extra fuel/holding in season.
  - **Winter jet-stream CAT** — 🟥 the powerful winter subtropical/polar jet over Japan and the Himalaya belt produces severe **clear-air turbulence**, especially over/near the mountains.
  - **Active volcanic arcs** — 🟥 **Japan, Indonesia and the Philippines** are among the world's most volcanically active regions; eruptions can close terminals and airways. Responsible advisory centres: **VAAC Tokyo** (Japan/NE Asia), **VAAC Darwin** (Indonesia/southern SE Asia) — pull VA advisories at planning. See [`OM E — Volcanic Ash Avoidance`](../../flight-ops/volcanic-ash-avoidance.md).
  - **Windshear / terrain turbulence** at terrain-affected terminals (e.g. Hong Kong/Lantau — see the VHHK brief and [`OM E — Adverse Weather and Windshear`](../../flight-ops/adverse-weather-and-windshear.md)).
  - **Dust / haze** — trans-boundary smoke haze (SE-Asian biomass burning, drier mid-year) and northern-China/India dust episodes reduce visibility seasonally.

> **Pull at planning (T-2h):** the **overflight-risk picture — ICAO CZIR, EASA CZIBs/Information Notes (North Korea, Myanmar), ADIZ requirements, state NOTAMs, OPSGROUP/safeairspace**; the **China / regional ATFM measures (CTOT/MINIT/flow restrictions)**; **GNSS-interference advisories** (Myanmar/border pockets); enroute NOTAMs and active restricted/danger areas; **tropical-cyclone / SIGMET / AIRMET** (typhoon, monsoon convection, CAT); **VAAC Tokyo / Darwin** volcanic-ash advisories; CPDLC active-band/login status; and the validated SimBrief route with assigned (metric-in-China) levels. **Not stored here.**

---

## 12. Open items (🟧 — confirm)

- **The §9 overflight-risk picture is live** — North Korea (ZKKP), Myanmar (VYYF) risk/FL floor, ADIZ activity and GNSS-interference must be re-verified at planning; do not treat this file's snapshot as current.
- **China RVSM FLAS metric-level band and the current metric↔feet conversion table** — confirm the day's FLAS table and the exact metric levels in use.
- Exact **class-per-band / Class-A floors** and **FIR-boundary decimals** across the Asian FIRs (state AIP ENR 2.1) — stated at summary level.
- **CPDLC** active FL band / participating sectors on the continental trunks (China / India / SE-Asia) — confirm per FIR at ENR/NOTAM.
- **Bay of Bengal (BOBASIO) and SCS (L642/M771)** current RNP-4/reduced-separation status, the **20 NM SCS handover-trial** extent, and HF families — confirm current AIP/ICAO-APAC material.
- **Himalaya-belt per-route grid-MORA and the depressurisation/driftdown escape routes** — build/verify route-specific from ENR charts and the OFP engineering; the highest-terrain routes are the binding case.
- **China / other-state overflight-permit** requirements for the operator — confirm at planning.
- Only **three Asia FIR briefs built** (Singapore WSJC, Hong Kong VHHK, Tokyo/Fukuoka RJJJ); the **China, India, Korea (RKRR), Taiwan (RCAA), Bangkok/KL/Jakarta/Manila/Ho Chi Minh** FIRs have no dedicated brief yet — build the high-traffic ones as routes require.
- Several referenced airport briefs (ZBAA, ZSPD, ZUUU, ZUTF, VIDP, VABB, VOMM, VCBI, VGHS, OPKC, RKSI, RCTP, RJAA) — verify each link resolves as the airport set fills out.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **SKYbrary — China Reduced Vertical Separation Minima (RVSM)** — metric RVSM implemented 22 Nov 2007; metric flight levels, the feet-equivalent FLAS conversion table preserving 1,000 ft separation, ATC clears metres / crew flies feet, metric↔feet transition in the adjacent FIR — https://skybrary.aero/articles/china-reduced-vertical-separation-minima-rvsm and the China RVSM briefing PDF https://skybrary.aero/sites/default/files/bookshelf/4324.pdf (retrieved 2026-07-25). Corroborated by the VATSIM China (VATPRC) RVSM page https://www.vatprc.net/airspace/rvsm (retrieved 2026-07-25). *Tier-4 corroboration only for the VATPRC page.*
- **ICAO APAC — Bay of Bengal (BOBASIO / FIT-BOB) ATS coordination material** — RNP 4 with CPDLC + ADS-C (FANS 1/A) enabling 30 NM separation (revised from 50 NM) over the Chennai/Kolkata Bay-of-Bengal oceanic sectors; FANS equipage and TOC-point coordination with Dhaka/Yangon/Kuala Lumpur — https://www.icao.int/sites/default/files/sp-files/APAC/Documents/Meetings/2010/fitbob12_bob_rhs_tf2/fitbob_WP03.pdf and BOBASIG/RASMAG reports via https://www.icao.int/sites/default/files/APAC/Meetings/APANPIRG/2017%20APANPIRG%2028/3-Working%20Papers/WP-08-RASMAG22-Report.pdf (retrieved 2026-07-25).
- **ICAO APAC — South China Sea Traffic Flow Review Group (SCSTFRG/13, Jul 2025)** — RNP 4 → 30 NM and the China–Hong Kong–Vietnam 20 NM handover-separation trial on trunk routes L642/M771 (from Apr/May 2024); RNAV 10 (RNP 10) → 50 NM; Large-Scale Weather Deviation Procedure — https://www.icao.int/sites/default/files/APAC/Meetings/2025/2025%20SCSTFRG13/1-Report/Final-Report-SCSTFRG13.pdf and https://www.icao.int/sites/default/files/APAC/Meetings/2025/2025%20SCSTFRG13/3-Working%20Papers/A2WP05-China-Post-Trial-Assessment-of-20NM-Separation-on-Routes-L642-and-M771.pdf (retrieved 2026-07-25).
- **ICAO APAC — Regional ATFM Concept of Operations (v1.0, Sep 2015)** — ANSP-issued TMIs, CTOT/MINIT, and the China–Malaysia–Thailand ATFM coordination issuing CTOTs to flights transiting the Sanya FIR — https://www.icao.int/sites/default/files/APAC/Documents/edocs/ATM/Asia-Pacific-Regional-Air-Traffic-Flow-Management-Concept-of-Operations-version-1.0-September-2015.pdf (retrieved 2026-07-25).
- **Airports Authority of India — PBN Implementation Plan** — RVSM across the Indian FIRs (2003), EMARSSH parallel RNAV 10 (RNP 10) routes (2002), RNAV 5 / RNP 1 city-pair structure, Chennai upper-FIR restructuring — https://www.icao.int/sites/default/files/safety/pbn/PBNStatePlans/India-PBN-implementation-plan.pdf (retrieved 2026-07-25).
- **EASA — Conflict Zone Information Bulletin, North Korea / Pyongyang FIR (ZKKP)** — CZIB-2017-06(Rx); unannounced ballistic-missile launches, debris/misidentification risk over the oceanic ZKKP (Sea of Japan); US prohibition of all DPRK airspace — https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2017-06r2 (retrieved 2026-07-25). *Advisory/live source — re-check at planning.*
- **EASA — Information Note, Myanmar / Yangon FIR (VYYF)** — take-risk-into-account; airspace below FL260 assessed as affected; surface fire / anti-aviation weaponry / MANPADS since 2021 — https://www.easa.europa.eu/en/information-note-threat-and-risk-situation-airspace-myanmar-fir-yangon-vyyf (retrieved 2026-07-25). *Advisory/live source — re-check at planning.*
- **Safe Airspace (OPSGROUP) — North Korea & Myanmar risk pages** — DPRK missile/debris risk; Myanmar conflict, FL260 practice and GPS jamming/spoofing (airway N895; recurred Mar 2026) — https://safeairspace.net/north-korea/ and https://safeairspace.net/myanmar/ (retrieved 2026-07-25). *Advisory/live source — re-check at planning.*
- **CSIS / AMTI / CIMSEC — East China Sea & Taiwan-Strait ADIZ analysis** — four overlapping ADIZs (China ECS ADIZ declared 23 Nov 2013, Japan, KADIZ, Taiwan); civil-aircraft interception/misidentification risk; Taiwan ADIZ incursions (4,000+ Jan–Sep 2025) — https://amti.csis.org/counter-co-east-china-sea-adiz/ · https://chinapower.csis.org/data/taiwan-adiz-violations/ · https://cimsec.org/east-china-sea-air-defense-identification-zones-a-primer/ (retrieved 2026-07-25). *Advisory/analysis source — re-check the live picture at planning.*
- **State AIP ENR sections (CAAC/China, AAI/India, KOCA/Korea, CAA/Taiwan, JCAB/Japan, and the SE-Asian states)** — FIR structure, airspace classes, ATS routes, RVSM/PBN, restricted/danger/prohibited areas, comms-failure. Primary source of record for structure and routes; access notes in the shared the source register.
- **Companion OM C files:** [`../FIR/Asia/Singapore (WSJC).md`](fir/asia/singapore-wsjc.md) · [`../FIR/Asia/Hong Kong (VHHK).md`](fir/asia/hong-kong-vhhk.md) · [`../FIR/Asia/Tokyo (RJJJ).md`](fir/asia/tokyo-rjjj.md) (single-FIR briefs) ·  airport briefs (§8) · **OM E**: [`RVSM`](../../flight-ops/rvsm-operations.md) · [`PBN and RNP`](../../flight-ops/pbn-and-rnp-operations.md) · [`Datalink and Oceanic`](../../flight-ops/datalink-and-oceanic-procedures.md) · [`ETOPS-EDTO`](../../flight-ops/etops-edto.md) · [`Adverse Weather and Windshear`](../../flight-ops/adverse-weather-and-windshear.md) · [`Volcanic Ash Avoidance`](../../flight-ops/volcanic-ash-avoidance.md) · [`Cold Weather Operations`](../../flight-ops/cold-weather-operations.md) · [`High-Elevation Aerodrome Operations`](../../flight-ops/high-elevation-aerodrome-operations.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_Airspace Briefing Template.md` — the Asia area brief, parent to the Singapore (WSJC), Hong Kong (VHHK) and Tokyo/Fukuoka (RJJJ) FIR briefs. FIR mosaic (China metric/flow-controlled core; India/South Asia; SE-Asian SCS/Strait trunk; NE-Asia Korea/Taiwan/Japan). RVSM FL290–410 (metric in China via FLAS) / RNAV 5 / RNP 1 / RNP APCH / RNP 4 + FANS CPDLC-ADS-C oceanic referenced to OM E; Bay-of-Bengal (BOBASIO 30 NM) + SCS (L642/M771 RNP4/20 NM trial) oceanic; China strict ATFM (CTOT/MINIT, CMTP/Sanya) routing; **Himalaya-belt highest-MORA driftdown/escape terrain**; oceanic/terrain-limited diversion set. **§9 overflight-avoidance & ADIZ core built as a defining feature — North Korea (ZKKP) and Myanmar (VYYF) 🟥 live/perishable, overlapping China/Taiwan/Korea/Japan ADIZs + Taiwan-Strait tension, border GNSS interference — re-check at planning.** Monsoon/typhoon (May–Nov) + winter-jet CAT + active volcanic arcs (VAAC Tokyo/Darwin) seasonal. Built from SKYbrary/VATPRC China RVSM + ICAO APAC BOBASIO/SCSTFRG/ATFM + AAI PBN plan + EASA CZIB/Information Notes + safeairspace + CSIS/AMTI ADIZ analysis + state AIP ENR. |
