# Oceania — South-West Pacific & Tasman — Airspace Briefing

**Scope:** Oceania / South-West Pacific — the Australian continental FIRs and the vast oceanic airspace of the Tasman Sea, Coral Sea and South Pacific · **FIRs / OCAs covered:** Brisbane (YBBB, Airservices) · Melbourne (YMMM, Airservices) · New Zealand domestic (NZZC, Airways NZ) · **Auckland Oceanic (NZZO, Airways NZ)** · Nadi (NFFF, Fiji) · Port Moresby (AYPM, PNG) · Honiara (AGGG), Nauru (ANAU), Tahiti (NTTT) and neighbouring Pacific-island FIRs
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP/ANSP/ICAO-verified where reached; oceanic sector splits, some class-per-band steps and air-to-air frequency flagged 🟧 (§12)

> **Read-me:** Strategic transit reference for X-Plane 11, not a chart or clearance. Routings and levels are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with the oceanic clearance and tactical ATC instructions. This is a **mixed environment**: surveillance-rich radar/ADS-B over the Australian continent and New Zealand, and **procedural oceanic** (RNP4 · CPDLC/ADS-C · HF) over the open Tasman, Coral and South Pacific. The single-FIR terminal/continental detail for southern Australia (incl. Sydney) is owned by the **[Melbourne (YMMM) FIR brief](fir/oceania/melbourne-ymmm.md)** — this area brief references it and does not duplicate it. Defining features here: **long over-water Pacific legs that drive ETOPS/EDTO planning**, **sparse mid-ocean diversions**, the **continent-wide Australian ADS-B mandate + space-based ADS-B**, and the **retirement of AUSOTS in favour of User Preferred Routes**. Live data (NOTAMs, SIGMET, VAAC ash, cyclone bulletins) is pulled at planning (§11). Open 🟧 items in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIRs / control authorities | **Brisbane (YBBB)** & **Melbourne (YMMM)** — Airservices Australia (Brisbane / Melbourne Centre) · **NZZC** domestic & **Auckland Oceanic (NZZO)** — Airways New Zealand ("Auckland Radio" oceanic) · **Nadi (NFFF)** — Fiji · **Port Moresby (AYPM)** — PNG CAA · **Honiara (AGGG) · Nauru (ANAU) · Tahiti (NTTT)** and neighbours |
| Controlling ATSU(s) & type | 🟩 **Radar + ADS-B** over continental Australia & NZ · 🟥 **procedural oceanic** (ADS-C / space-based ADS-B / CPDLC-FANS + HF) over the Tasman, Coral and South Pacific |
| RVSM | 🟥 Applicable **FL290–FL410** throughout — RVSM approval required (defined in OM E, applied here) |
| Separation standard | Radar/ADS-B 5 NM / 3 NM terminal over land; **oceanic RNP4 PBCS** — **23 NM lateral / 20 NM longitudinal** with RCP240/RSP180 (NZZO); else RNAV10 (RNP10) 50 NM |
| Datalink | 🟥 **CPDLC + ADS-C (FANS 1/A)** for oceanic separation & tracking; **space-based ADS-B (Aireon)** extends surveillance over the ocean |
| Primary comms | 🟩 **VHF** over the continents/NZ · 🟥 **HF families (Auckland/Nadi Radio) + SATVOICE + CPDLC** over the open Pacific where VHF ends |
| Key hazard(s) | Long **no-divert over-water Pacific legs** (ETOPS/EDTO) · **sparse mid-ocean alternates** · seasonal **South Pacific tropical cyclones (Nov–Apr)** · **NZ Southern Alps** & **PNG highlands** terrain · **VAAC** volcanic-ash exposure (NZ / Vanuatu / PNG) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Overflight / conflict-zone risk | 🟩 | Benign — no conflict zones. **Exception:** 🟧 **PNG (AYPM) issues overflight permits** (PNG CAA) — a diplomatic/admin item, not a threat. Re-check live (§11) regardless. |
| Communication coverage (VHF/HF/SATVOICE) | 🟥 | VHF continuous over land/NZ; **no VHF over the open Pacific** — HF (Auckland/Nadi Radio) + SATVOICE + CPDLC required. Two LRCS, ≥1 HF, for the oceanic legs. |
| Datalink / surveillance requirement | 🟥 | **ADS-B Out mandatory** in Australian controlled airspace (CASA, 1090ES, all IFR levels). **CPDLC + ADS-C (FANS 1/A)** required for oceanic PBCS separation; RNP4 for 23/20 NM tracks. |
| Terrain / MORA / driftdown | 🟧 | Mostly oceanic (no terrain). Belts: **NZ Southern Alps (Aoraki/Mt Cook 12,218 ft)**, **PNG New Guinea highlands (to ~14,800 ft)**, Australian Alps (~7,310 ft). Terrain-driven driftdown only near those landmasses. |
| Diversion-airfield coverage | 🟥 | **Sparse over the Pacific** — Norfolk (YSNF), Lord Howe (YLHI), Nouméa (NWWW), Nadi (NFFF), Pago Pago (NSTU), Tahiti (NTAA), Rarotonga (NCRG), Honiara (AGGG) are widely spaced with limited RFF/hours/weather. **ETP/critical-point planning drives every over-water leg.** §8. |
| Seasonal / environmental | 🟧 | **South Pacific tropical cyclones Nov–Apr** (peak Jan–Mar, Coral Sea/Fiji basin); subtropical-jet CAT; **VAAC Wellington/Darwin** ash (NZ, Vanuatu, PNG volcanoes). |
| Equipment / approval (RVSM, RNP, oceanic, ADS-B) | 🟥 | **RVSM FL290–410 · RNP4/RNAV10 oceanic · CPDLC+ADS-C FANS 1/A · ADS-B Out**. Capability topics defined in **OM E** — referenced, not re-derived. |

---

## 3. Airspace structure

- **Australian continental FIRs (Airservices Australia) — two only, split N/S:**
  - **Brisbane FIR (YBBB)** — Brisbane Centre. Covers the **northern half of the continent** *and* an enormous **oceanic area**: **half of the Tasman Sea** (the other half is New Zealand's), the **Coral Sea**, and most of the northern portion of Western Australia. The oceanic airspace **off Australia's east coast is worked from Brisbane** — so an east-coast-to-New-Zealand routing (e.g. from Sydney) transits **Brisbane oceanic** before the Auckland handoff, even though Sydney itself sits in the Melbourne FIR. Designated oceanic sector volumes include **CORAL, FLINDERS, LORD HOWE and TASMAN**. 🟩
  - **Melbourne FIR (YMMM)** — Melbourne Centre. The **southern half of the continent** (incl. **Sydney, Melbourne, Adelaide, Perth, Canberra, Tasmania**) plus the **Southern Ocean and Indian Ocean** oceanic sectors. **Full detail — including the verified fact that Sydney is in YMMM, not YBBB — is in the [Melbourne (YMMM) FIR brief](fir/oceania/melbourne-ymmm.md).** This area brief does not repeat it.
- **New Zealand (Airways New Zealand) — domestic vs oceanic split:**
  - **NZZC — New Zealand (domestic) FIR:** radar/ADS-B-surveilled airspace over the North and South Islands and their immediate approaches; contains **Auckland (NZAA), Wellington (NZWN), Christchurch (NZCH)**. Magnetic reference, VHF, mature PBN. 🟩
  - **Auckland Oceanic (NZZO):** one of the world's largest oceanic FIRs (~**5.87 M km²**), worked by **"Auckland Radio"** as **procedural oceanic** control over the South Pacific where there is no ground radar. Uses an **Oceanic Control System (OCS)** that is **fully FANS 1/A compliant (CPDLC + ADS-C)**; **space-based ADS-B (Aireon)** supplements tracking. 🟩
- **Pacific-island oceanic FIRs (adjacent, transit-relevant):**
  - **Nadi (NFFF), Fiji** — a major South Pacific oceanic FIR; procedural, HF + CPDLC/ADS-C; **PACOTS** tracks may clip its northern boundary (§6). Fiji-registered aircraft have been **ADS-B-Out-mandated since 2013**.
  - **Port Moresby (AYPM), Papua New Guinea** — **Class C** in the Port Moresby / Nadzab CTR/CTAs up to the **base of Class A (FL245)**; **Class F** elsewhere from the surface to the base of the overlying A/C. Terrain-dominated by the **New Guinea highlands** (§7). 🟧
  - **Honiara (AGGG, Solomon Is.), Nauru (ANAU), Tahiti (NTTT, French Polynesia)** and neighbours — sparse-traffic procedural oceanic FIRs bounding the South Pacific transit.
- **Classes & level bands:** 🟧 **Class A** upper airspace over the jet network in Australia/NZ (confirm the exact base per AIP ENR); Class C/D around terminals, E/G below/outside. Oceanic CTAs are controlled airspace flown under procedural separation. **RVSM occupies FL290–FL410** throughout.
- **Entry/exit & transition points:** oceanic entry/exit is at the FIR boundaries (Tasman crossings between YBBB/NZZO; South Pacific between NZZO/NFFF/NTTT). Datalink-equipped flights log on to the oceanic OCS before boundary entry; the filed route is the **SimBrief/current-AIRAC-validated string** and the **oceanic clearance** assigns the cleared track/level/Mach.

---

## 4. Equipment, approvals & separation

*Capability topics (RVSM, PBN/RNP, CPDLC/ADS-C, oceanic method) are **defined once in OM E — Operations**; this section applies them to the region.*

- **RVSM:** 🟥 **FL290–FL410** — approval required (Australian & NZ RVSM). See [`OM E — RVSM Operations`](../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 mature PBN over the continents — **RNP 2 / RNAV 5** enroute, **RNP 1** terminal, **RNP APCH** arrivals. **Oceanic requires RNAV 10 (RNP 10)** as the baseline; **RNP 4 is required for the reduced oceanic separations** (§below). See [`OM E — PBN and RNP Operations`](../../flight-ops/pbn-and-rnp-operations.md).
- **Oceanic separation (Auckland Oceanic NZZO — PBCS):** 🟥 with **RNP 4** and the **RCP 240 / RSP 180** performance-based communication & surveillance specifications, NZZO applies **23 NM lateral** and **20 NM longitudinal** separation, requiring an **ADS-C periodic contract (~192 s)** and a **5 NM lateral-deviation event contract**. Aircraft not RNP4/PBCS-approved default to **RNAV10 (RNP10) with 50 NM** lateral / procedural longitudinal. Method defined in [`OM E — Datalink and Oceanic Procedures`](../../flight-ops/datalink-and-oceanic-procedures.md).
- **Datalink:** 🟥 **CPDLC + ADS-C, FANS 1/A** is the backbone of oceanic separation and tracking across NZZO / NFFF / the Australian oceanic sectors. Maintain the CPDLC connection and ADS-C contracts through the OCA. Domestic CPDLC is also available over the continents.
- **Transponder / ADS-B — 🟥 continent-wide Australian mandate:** **ADS-B Out (1090 MHz Extended Squitter) is mandatory for all IFR operations at all levels over continental Australia**, plus the **Arafura Sea, Great Australian Bight and Bass Strait** (CASA rule, in force since 2017). **1090ES is required (UAT does not satisfy the Australian mandate).** New Zealand controlled airspace is likewise ADS-B-based. **Space-based ADS-B (Aireon)** extends this surveillance over the Tasman/South Pacific oceanic sectors, and a future universal Australian ADS-B mandate (all classes) is planned but not yet dated. 🟧
- **Longitudinal control — Mach Number Technique:** the assigned Mach in the oceanic clearance anchors longitudinal separation over the Pacific — maintain assigned Mach; request changes via CPDLC.

---

## 5. Communications

- **VHF — continuous over land/NZ:** 🟩 Brisbane / Melbourne Centre over Australia; Auckland/Wellington/Christchurch control over NZ. English throughout.
- **HF families & SELCAL — over the open Pacific:** 🟥 outside VHF coverage two long-range comm systems are required, **at least one HF**. **Auckland Radio** (NZZO) and **Nadi Radio** (NFFF) work the South Pacific HF network on the regional **RDARA / South-Pacific (SP) HF families** (e.g. RDARA 9B, SP family allocations — exact kHz are AIP-published and rotate 🟧). Perform a **SELCAL check** after first HF contact, then silent-monitor.
- **SATVOICE / CPDLC primary:** for FANS-equipped aircraft, **CPDLC is the primary oceanic ATS channel** with ADS-C surveillance; **SATVOICE** may satisfy the second LRCS. HF remains the fallback and is required equipage.
- **Position reporting (procedural):** voice or CPDLC reports at compulsory points where ADS-C does not cover.
- **Emergency / inter-pilot VHF:** guard **121.5 MHz**. 🟧 Air-to-air in the South Pacific/Tasman oceanic region — confirm the regional inter-pilot frequency on the current AIP (the general oceanic air-to-air is **123.45 MHz**; some Pacific regions publish **128.95 MHz**) — verify at planning.

---

## 6. Routing & levels

- **Continental network:** 🟩 the Australian mainland RNP/RNAV airway + SID/STAR network under radar/ADS-B control; the Sydney–Melbourne–Brisbane "golden triangle" is dense structured traffic. NZ domestic likewise surveilled.
- **AUSOTS — RETIRED (correction to the regional premise):** 🟧 the **Australian Organised Track Structure (AUSOTS)** — the daily "flex tracks" once published for Australia–Asia/Middle East and trans-Tasman city pairs — was **permanently withdrawn on 15 June 2023** (removed from the Off-Air Route Planning manual). It has been **replaced by expanded User Preferred Routes (UPR)**: Airservices is progressively declaring **all Class A airspace as UPR airspace**, with time-activated **UPR Exclusion Zones** in high-density areas. **Trans-Tasman and Australia-oceanic routings are now flown as random/user-preferred wind-optimised tracks with an oceanic clearance — not on a published organised-track grid.** Plan the day's UPR string in SimBrief; there is no "AUSOTS message of the day" to pull.
- **PACOTS — adjacency, not overlap:** 🟧 the **Pacific Organised Track System (PACOTS)** is the **North Pacific** organised-track structure — daily tracks built by the Japan ATMC with Oakland ARTCC within the **Fukuoka, Oakland Oceanic and Anchorage** FIRs, linking Japan/SE Asia with Hawaii and the North-American west coast (eastbound numbered, westbound lettered; **RNP10 / 50 NM** spacing). It lies to the **north-east of the SW-Pacific core** and can clip the northern edge of the **Nadi (NFFF)** FIR, but the **Tasman/Auckland-Oceanic transit is not a PACOTS operation** — it is UPR/random routing. Treat PACOTS as the adjacent northern system a far-north Pacific routing would join, not as the structure for the trans-Tasman network.
- **Typical level/flow:** RVSM **FL290–FL410**; wind-optimised UPR cruise with step-climb as weight reduces (via CPDLC over the ocean). The filed route is the SimBrief/current-AIRAC string; the **oceanic clearance** assigns the actual track/level/Mach.

---

## 7. Terrain, MORA & driftdown

- **Predominantly oceanic:** across the Tasman, Coral and South Pacific there is **no enroute terrain** — MORA is not a mid-ocean factor and the constraint is over-water diversion (§8), not terrain.
- **Terrain belts near the landmasses:**
  - **New Zealand — Southern Alps (South Island):** 🟧 **Aoraki / Mount Cook 3,724 m (12,218 ft)**, a continuous alpine spine running the length of the South Island; drives grid-MORA and the driftdown floor for any escape over/near the South Island, and generates strong **mountain-wave and CAT** in a westerly flow.
  - **Papua New Guinea — New Guinea highlands:** 🟥 the **Owen Stanley Range** (Mt Victoria ~4,038 m / ~13,250 ft) and the central highlands (Mt Wilhelm ~4,509 m / ~14,800 ft, PNG's highest) make **AYPM a genuine high-terrain FIR** — driftdown/decompression escape over PNG is terrain-limited to ~15,000 ft locally, and PNG aerodromes are terrain-and-weather-critical.
  - **Australia — Australian Alps / Snowy Mountains:** modest — **Mt Kosciuszko ~7,310 ft**; not a cruise factor (see the [Melbourne FIR brief](fir/oceania/melbourne-ymmm.md) §8).
- **Driftdown / depressurisation escape:** over the ocean the escape is a descent to a lower level toward the nearest capable field (§8) — **no terrain floor** mid-Pacific; the terrain-limited cases are the **NZ Southern Alps** and the **PNG highlands** above.
- **Fuel-freeze / cold-soak:** long high-FL Southern-Ocean / trans-Pacific legs can cold-soak the fuel — monitor tank temperature vs the **Jet A-1 freeze point (−47 °C)**; mitigation is descent to warmer air and/or increased Mach.

---

## 8. Diversion & enroute alternates

🟥 **Sparse and widely spaced over the Pacific — the defining planning constraint of the region.** Over the open Tasman/Coral/South Pacific a suitable field can be hundreds of NM away, several with **limited RFF category, short hours, single-runway, or poor-weather exposure**. **Every over-water leg is ETP/critical-point and ETOPS/EDTO-driven** — identify the critical-point alternates on each OFP.

| Airfield | ICAO | Sector | Role | Notes |
|---|---|---|---|---|
| Sydney — Kingsford Smith | **YSSY** | Melbourne FIR (E coast) | Australian E-coast gateway / alternate | Full international. Brief: [YSSY](../destinations/oceania/australia/yssy/index.md) |
| Perth Intl | **YPPH** | Melbourne FIR (W) | Indian-Ocean-side gateway | Full international. Brief: [YPPH](../destinations/oceania/australia/ypph/index.md) |
| Auckland Intl | **NZAA** | NZZC (NZ domestic) | Primary NZ / Tasman-arrival alternate | Full international. Brief: [NZAA](../destinations/oceania/new-zealand/nzaa/index.md) |
| Wellington Intl | **NZWN** | NZZC (NZ domestic) | NZ alternate (wind/short-runway caveats) | Brief: [NZWN](../destinations/oceania/new-zealand/nzwn/index.md) |
| Nouméa — La Tontouta | **NWWW** | Nadi/Brisbane oceanic bound | Coral-Sea / New-Caledonia alternate | Full international. Brief: [NWWW](../destinations/oceania/new-caledonia/nwww/index.md) |
| Norfolk Island | **YSNF** | Tasman (Brisbane oceanic) | Key **Tasman ETP alternate** | 🟧 Limited RFF/hours, weather-exposed, single runway — verify suitability on the day. Brief to build 🟧 |
| Lord Howe Island | **YLHI** | Tasman (Brisbane oceanic) | Tasman island field | 🟧 Short runway, no jet-transport ops — generally **not** a widebody alternate. |
| Nadi Intl | **NFFF/NFFN** | Nadi FIR | Central South Pacific hub alternate | Full international; key mid-Pacific ETP field. Brief to build 🟧 |
| Faaʻa (Tahiti) | **NTAA** | Tahiti (NTTT) FIR | Far-eastern S-Pacific alternate | Full international; peak-time bizav/alternate restrictions apply. Brief to build 🟧 |
| Pago Pago | **NSTU** | Nadi/adjacent | Central S-Pacific alternate | US-served long runway. Brief to build 🟧 |
| Rarotonga | **NCRG** | Auckland Oceanic | E-of-NZ S-Pacific alternate | Single runway. Brief to build 🟧 |
| Honiara | **AGGG/AGGH** | Honiara FIR | Coral-Sea / N-approach alternate | 🟧 Limited services/RFF — verify. Brief to build 🟧 |
| Port Moresby — Jackson | **AYPY** | Port Moresby (AYPM) | PNG alternate | 🟥 Terrain-critical; PNG overflight/entry admin. Brief to build 🟧 |

- **ETP / equal-time-point considerations:** 🟥 on the Tasman and open-Pacific legs the no-divert window between suitable fields drives ETP fuel/time planning and the **ETOPS/EDTO diversion-airport list** — compute the depressurisation and engine-out driftdown ETPs on the OFP and confirm each nominated alternate's RFF/hours/weather. See [`OM E — ETOPS-EDTO Procedures`](../../flight-ops/etops-edto.md).
- **Fuel-freeze / cold-soak:** monitor tank fuel temperature on the long high-FL legs (§7).

---

## 9. Special-use airspace & overflight

- **Conflict / prohibited / risk zones:** 🟩 **none** — Oceania is benign for conflict-zone and threat purposes across the whole region.
- **Danger / restricted / military areas:** Australian **restricted (R) / danger (D)** areas (e.g. RAAF ranges — Williamtown, East Sale) and NZ military areas, activated per AIP/NOTAM — normally clear of a high-level jet transit; verify active status on the day.
- **Overflight-permit / diplomatic considerations:** 🟧 **Papua New Guinea (AYPM) requires an overflight permit** (PNG CAA; published working hours ~2100Z–0430Z) — plan lead time if the routing crosses PNG. No overflight-permit requirement for Australian, NZ, Fiji or the other South-Pacific FIRs on normal ops.

> **Conflict-zone / SUA currency:** re-check ICAO Conflict Zone Information Repository, state overflight NOTAMs and active restricted/danger-area status at planning — this list is durable context, not live clearance.

---

## 10. Contingency procedures

- **Continental (radar/ADS-B):** 🟩 tactical — follow ATC vectors/clearances; the oceanic offset procedures below do **not** apply over the surveilled continents/NZ. Comms-failure: squawk **7600**, continue per the Australian/NZ AIP ENR 1 IFR lost-comms rules (last clearance / filed route & levels), attempt the previous/adjacent frequency and 121.5.
- **Oceanic in-flight contingency (ICAO Doc 4444):** 🟥 over the Tasman/Coral/South Pacific apply the standard oceanic contingency — **obtain a revised clearance first** where possible; if none, turn **≥30°** to acquire a track **offset 9.3 km (5.0 NM)**, establish a **500 ft vertical offset** (1000 ft if above FL410), squawk **7700**, exterior lights on, broadcast intentions and monitor **121.5 MHz**, and advise ATC via CPDLC/HF ASAP.
- **Oceanic weather-deviation:** request via CPDLC/HF stating **"WEATHER DEVIATION REQUIRED"**; if a clearance cannot be obtained, apply the ICAO deviation offset/level-change convention and broadcast on 121.5. (Method reference: [`OM E — Datalink and Oceanic Procedures`](../../flight-ops/datalink-and-oceanic-procedures.md).)
- **SLOP (Strategic Lateral Offset Procedure):** 🟩 permitted in the oceanic sectors (right-of-track offsets) to reduce collision/wake risk — apply per the oceanic SOP; SLOP method is an **OM E** topic.

---

## 11. Seasonal, environmental & live data

- **Seasonal hazards (durable):**
  - **South Pacific tropical cyclones — 🟥 Nov 1 – Apr 30 (WMO season; peak Jan–Mar).** The **RSMC Nadi** area of responsibility (160°E–120°W, north of 25°S) plus the Australian-region basin (**Coral Sea**) average ~7–8 cyclones per season (≈96% of activity inside the window). They drive re-routes, alternate wash-outs and destination/curfew disruption across the Coral Sea, Fiji basin and islands — the region's dominant seasonal wildcard.
  - **Subtropical-jet CAT** — strong upper winds and clear-air turbulence across SE Australia / the Tasman, strongest in winter; **mountain wave** over the NZ Southern Alps and PNG highlands.
  - **Volcanic ash — VAAC coverage:** 🟧 **VAAC Wellington** (NZ and the SW Pacific — e.g. Ruapehu/Tongariro, Whakaari/White Island, Vanuatu volcanoes) and **VAAC Darwin** (Indonesia/PNG — e.g. Rabaul, Ulawun) can propagate ash across the oceanic upper airspace — a strategic wildcard for the northern and NZ sectors.
  - **Australian summer** — inland convection and **bushfire smoke** (visibility) toward the continental terminals (see the [Melbourne FIR brief](fir/oceania/melbourne-ymmm.md) §11).

> **Pull at planning (T-2h):** enroute NOTAMs, SIGMET/AIRMET (CAT, convection, cyclones), **RSMC Nadi / BoM cyclone bulletins**, **VAAC Wellington / Darwin** volcanic-ash advisories, oceanic-clearance & CPDLC/ADS-C login requirements, restricted/danger-area and PNG overflight-permit status, and the validated SimBrief UPR route with assigned levels/Mach. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class per band / vertical steps** across the Australian and NZ FIRs (AIP ENR / DAP).
- **Oceanic sector boundaries** and the Brisbane-vs-Auckland split of the Tasman (YBBB oceanic works the eastern Tasman off the Australian coast before the NZZO handoff) — confirm the current sectorisation.
- **South Pacific air-to-air / inter-pilot frequency** (123.45 vs 128.95 MHz) and the current **HF family kHz allocations** (Auckland/Nadi Radio) — pull the day's flight docs / AIP.
- **PACOTS adjacency** — confirm whether a given far-north Pacific routing actually joins PACOTS or clips only the northern Nadi boundary (day-dependent).
- **Diversion briefs** not yet built for **YSNF, NFFF, NTAA, NSTU, NCRG, AGGG, AYPY** (and YLHI's non-suitability) — build if they become planned ETOPS/EDTO alternates; RFF category, hours and weather to verify per field.
- **Future universal Australian ADS-B mandate** (all classes/levels) — planned, not yet dated; confirm status at planning.
- **Port Moresby (AYPM) / PNG** class structure and CTA vertical limits (FL245 Class A base) — verify current PNG AIP.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Airservices Australia — "Air traffic management services"** (Brisbane & Melbourne FIR extents; Brisbane FIR = northern Australia + half the Tasman + Coral Sea; east-coast oceanic worked from Brisbane; CORAL/FLINDERS/LORD HOWE/TASMAN sectors) — https://www.airservicesaustralia.com/about-us/about-our-operations/facilities/air-traffic-management-services/ (retrieved 2026-07-25). ANSP source of record.
- **Airservices Australia — expansion of User Preferred Routes / withdrawal of AUSOTS flex tracks** (flex tracks removed from the OARP manual effective 15 JUN 2023; all Class A declared UPR airspace, time-activated UPR Exclusion Zones) — https://www.airservicesaustralia.com/flextracks/text.asp and OARP manual https://www.airservicesaustralia.com/wp-content/uploads/OARP-15JUN2023.pdf (retrieved 2026-07-25).
- **ops.group — "The Lowdown on AUSOTS: Australian Flex Tracks"** (AUSOTS definition and permanent discontinuation, 15 JUN 2023) — https://ops.group/blog/ausots/ (retrieved 2026-07-25). *Tier-4 corroboration of the AUSOTS retirement.*
- **CASA — Communications, navigation and surveillance / ADS-B** (ADS-B Out mandatory for IFR at all levels in Australian controlled airspace, 1090ES; continent + Arafura Sea / Great Australian Bight / Bass Strait) — https://www.casa.gov.au/operations-safety-and-travel/airspace/communications-navigation-and-surveillance (retrieved 2026-07-25).
- **Australian Government (Dept of Infrastructure/Transport) — ADS-B mandate expansion consultation (Sep 2025)** (future universal ADS-B mandate proposal; space-based ADS-B) — https://www.infrastructure.gov.au/sites/default/files/documents/potential-future-expansion-automatic-dependent-surveillance-broadcast-ads-b-mandate-in-australia-consultation-paper-september2025.pdf (retrieved 2026-07-25).
- **Airways New Zealand — AIP New Zealand GEN 3.4 (Communication services) & Auckland Oceanic (NZZO)** (Auckland Radio oceanic control; OCS FANS 1/A CPDLC; RNP4 PBCS 23 NM lateral / 20 NM longitudinal, RCP240/RSP180, ADS-C 192 s) — https://www.aip.net.nz/assets/AIP/General-GEN/3-SERVICES/GEN_3.4.pdf (retrieved 2026-07-25).
- **ICAO APAC / ISPACG & PBCS monitoring reports** (Auckland Oceanic & Nadi PBCS separations, RNP4/RCP240/RSP180; South Pacific FIR coordination) — https://www.icao.int/sites/default/files/APAC/Meetings/2026/2026%20FIT-Asia16/03-Working%20Papers/WP12%20Asia-Pacific%20Region%20Combined%20PBCS%20Monitoring%20Report%20.pdf (retrieved 2026-07-25).
- **SKYbrary — Pacific Organised Track System (PACOTS)** (North Pacific tracks in Fukuoka/Oakland/Anchorage FIRs; eastbound numbered, westbound lettered; RNP10/50 NM; Japan ATMC + Oakland ARTCC) — https://skybrary.aero/articles/pacific-organised-track-system-pacots (retrieved 2026-07-25).
- **IVAO — Papua New Guinea airspace** (Port Moresby FIR AYPM; Class C in Port Moresby/Nadzab CTA to FL245 base of Class A; Class F elsewhere) — https://wiki.ivao.aero/en/home/divisions/xo/home/airspace/PNG (retrieved 2026-07-25). *Tier-4 corroboration; verify vs PNG AIP.*
- **Fiji Meteorological Service (RSMC Nadi) & Australian BoM — South Pacific tropical-cyclone season** (Nov 1 – Apr 30, peak Jan–Mar; RSMC Nadi AoR 160°E–120°W north of 25°S; ~7–8 TCs/season) — https://www.met.gov.fj/ and https://www.bom.gov.au/climate/cyclones/south-pacific/ (retrieved 2026-07-25).
- **Terrain elevations (public reference)** — Aoraki/Mount Cook 3,724 m/12,218 ft (NZ Southern Alps); New Guinea highlands to ~4,509 m/14,800 ft (Mt Wilhelm), Owen Stanley Range Mt Victoria ~4,038 m — Wikipedia range articles (retrieved 2026-07-25). *Per-quadrant grid-MORA to be taken from ENR charts.*
- **VATSIM — VATPAC (Australia) & VATNZ (New Zealand) SOPs** (Melbourne/Brisbane Centre sectorisation; NZZO oceanic procedures) — https://sops.vatpac.org/ and https://sops.vatnz.net/oceanic/nzzo/ (retrieved 2026-07-25). *Tier-4 corroboration — continent/oceanic split and oceanic sector structure cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_Airspace Briefing Template.md`. Oceania / SW-Pacific area brief — Australian continental FIRs (YBBB/YMMM), NZ domestic (NZZC) + **Auckland Oceanic (NZZO)**, Nadi (NFFF), Port Moresby (AYPM) and neighbouring Pacific-island FIRs. Covers continent radar/ADS-B vs procedural oceanic (RNP4 PBCS 23/20 NM, CPDLC/ADS-C FANS 1/A, space-based ADS-B); **continent-wide Australian ADS-B mandate (CASA, 1090ES)**; **AUSOTS retired 15 JUN 2023 → User Preferred Routes** (premise corrected) and **PACOTS** noted as the adjacent North-Pacific system; HF/SATVOICE comms over the open Pacific; NZ Southern Alps + PNG highlands terrain; **sparse Pacific diversion set → ETOPS/EDTO/ETP-critical**; South Pacific tropical-cyclone season (Nov–Apr); benign conflict-zone picture (🟩) with PNG overflight-permit note. Cross-links: Melbourne (YMMM) FIR brief; YSSY/YPPH/NZAA/NZWN/NWWW airport briefs; OM E RVSM/PBN/Datalink-Oceanic/ETOPS-EDTO. VATPAC/VATNZ cross-checked (tier-4). |
