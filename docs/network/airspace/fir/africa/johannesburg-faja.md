# Johannesburg (FAJA) — FIR Briefing

**Scope:** single FIR — the **Johannesburg FIR**, covering **most of South Africa's continental airspace** (Highveld interior, Gauteng, KwaZulu-Natal, the eastern/northern provinces), containing the **O.R. Tambo (FAOR) hub** plus Lanseria and Durban; the **Cape Town area is a separate ATNS FIR (FACA)** in the south-west, and South Africa additionally owns a very large **oceanic FIR (FAJO — Johannesburg Oceanic)** to the south/south-west — both noted in §3/§7, not built as separate files here · **Parent area brief:** [Africa](../../africa.md) 🟩 · **Adjacent FIRs:** Gaborone (FBGR, Botswana) NW · Windhoek (FYWF, Namibia) W · Harare (FVHF, Zimbabwe) N · Beira (FQBE, Mozambique) NE · Cape Town (FACA, South Africa — domestic split, SW) · Johannesburg Oceanic (FAJO, South Africa — own oceanic FIR, S/SW) 🟧
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional; FIR structure/RVSM/ANSP verified against public ATNS/ICAO/OPS sources, but exact boundary coordinates, ACC internal sector splits and the FAJA/FACA/FAJO handoff geometry are flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Johannesburg FIR is **South Africa's principal continental FIR** — the most radar-developed airspace in the AFI region, worked by **ATNS** with a Johannesburg-area ACC and TMA/radar cover around the major terminals, over Class D/E/G below. Terminal procedures for aerodromes inside the FIR live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **FAJA** — Johannesburg FIR (continental). South Africa additionally operates a distinct **Cape Town FIR (FACA)** covering the south-western Cape, and a very large **Johannesburg Oceanic FIR (FAJO)** to the south/south-west (see §3) |
| Controlling ATSU / ANSP | **ATNS — Air Traffic and Navigation Services** (South Africa's ANSP for all three FIRs: Johannesburg, Cape Town, Johannesburg Oceanic); regulator **SACAA — South African Civil Aviation Authority** |
| Airspace class & vertical limits | 🟧 Controlled upper airspace (Class **A/C** on the airway/RVSM network) over Class **C/D/E/G** terminal and lower airspace; confirm exact class letter per band at **South Africa AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (**AFI RVSM**, region-wide since 25 SEP 2008) — RVSM approval required; see OM E §5 |
| PBN environment | 🟧 **RNAV 5** enroute (AFI PBN); RNP APCH published at the major terminals — confirm terminal RNP per current AIP; see OM E §5 |
| Surveillance & datalink | 🟩 **Radar/ADS-B** — the best-developed surveillance in the AFI region around Johannesburg, Cape Town, Durban and the other majors; **space-based ADS-B** (Aireon) has been rolled out regionally since 2018. 🟧 Datalink (CPDLC/ADS-C) maturity in the oceanic sector (FAJO) is a live watch item — public reporting has flagged **radio-comms reliability issues in Johannesburg Oceanic** (§11) |
| Primary language & comms | 🟩 **English** (ICAO); VHF around the majors and along the domestic route network; **HF** for the Johannesburg Oceanic sector and remote legs |
| Key hazard(s) | 🟧 **High-elevation Highveld terminals** (FAOR, FALA, FABL) — density-altitude/cold-temperature corrections; **Drakensberg** escarpment (Thabana Ntlenyana ~11,424 ft, Lesotho border); **Cape Town "Cape Doctor" SE gale-force wind**; summer Highveld convection/hail (Oct–Apr); Johannesburg Oceanic comms reliability (re-check live) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | **Radar/ADS-B controlled** around the terminals and the domestic airway network — the most mature surveillance environment in the AFI region. The **oceanic FAJO sector remains largely procedural/HF**, confirm live. |
| Communication coverage & language | 🟩 | **English** throughout; VHF coverage is good over the continental FIR. HF is required for the oceanic sector. Confirm current sector frequencies from the AIP. |
| Datalink / surveillance requirement | 🟧 | Space-based **ADS-B (Aireon)** operational regionally since 2018; **CPDLC/ADS-C maturity in FAJO is not asserted here** — confirm current capability. Reported **comms/radio outages in Johannesburg Oceanic** are a live watch item — treat as not guaranteed and confirm live. |
| Terrain / MORA / driftdown | 🟧 | Highveld interior sits at **~1,500–1,800 m (5,000–6,000 ft)** elevation generally; the **Drakensberg escarpment** (Thabana Ntlenyana ~3,482 m / ~11,424 ft, Lesotho border) is the significant high belt. High-elevation terminal ops apply at Johannesburg-area fields — see OM E. §8. |
| Diversion-aerodrome coverage | 🟩 | Strong — **FAOR, FACT, FALA**, plus Durban (**FADN/FALE**, reconciliation flag below) give dense national coverage; curated briefs exist for all of them (§9). |
| Special-use airspace (military / danger) | 🟧 | Danger/restricted areas are AIP/NOTAM-published; South Africa is not a conflict-zone state, but confirm the active list at planning (§10). |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **AFI RVSM FL290–410 · RNAV 5 · transponder.** RVSM approval mandatory. All defined in OM E; confirm the current-AIRAC route/levels. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** **Johannesburg FIR (FAJA)** covers the great majority of South Africa's continental airspace — the Highveld interior, Gauteng (Johannesburg/Pretoria), KwaZulu-Natal (Durban), the Free State, and the northern/eastern provinces. 🟧 The **south-western Cape** (Cape Town and its approaches) is worked as a **separate ATNS FIR — Cape Town (FACA)** — a domestic FIR split rather than an internal sector of FAJA; confirm the exact FAJA/FACA lateral boundary at **AIP ENR 2.1**. South Africa additionally operates a very large **Johannesburg Oceanic FIR (FAJO)** covering the South Atlantic/South Indian Ocean approaches south and south-west of the continent — this is out of scope for terminal/continental transit planning but relevant to any southbound/oceanic-adjacent routing (see §7).
- **Vertical split:** 🟧 lower controlled airspace (terminal CTAs/CTRs and the domestic airway network) beneath the RVSM upper band; the lower/upper handoff level is AIP-defined — confirm at **ENR 2.1**. RVSM applies **FL290–FL410**.
- **Adjacent FIRs (by boundary):**
  - **NW — Gaborone (FBGR, Botswana, CAAB).**
  - **W — Windhoek (FYWF, Namibia, NCAA).**
  - **N — Harare (FVHF, Zimbabwe, CAAZ).**
  - **NE — Beira (FQBE, Mozambique).**
  - **SW — Cape Town (FACA)** — domestic ATNS split, not a foreign FIR.
  - **S / SW — Johannesburg Oceanic (FAJO)** — South Africa's own oceanic FIR, handing to the South Atlantic/South Indian Ocean structure; entry/exit gates exist on the FAJO boundary adjoining Windhoek FIR (FYWF) continental airspace, with fixed continental routes transiting Windhoek to reach them (§7).
- **Sectorisation:** 🟧 the Johannesburg-area ACC works FAJA; exact internal sector boundaries (e.g. an "east/west" Highveld split referenced in third-party training charts) are AIP/AIRAC-dependent — fly the current sectorisation, not a stored one.

---

## 4. Control & ATSU

- **ATSU:** 🟩 **ATNS (Air Traffic and Navigation Services)** is the single ANSP for **all three** South African FIRs — Johannesburg (FAJA), Cape Town (FACA) and Johannesburg Oceanic (FAJO); regulator is **SACAA**.
- **Surveillance basis:** 🟩 **Radar/ADS-B** cover the terminal areas and domestic airway network — the most developed surveillance picture in the AFI region — supplemented by **space-based ADS-B (Aireon)**, deployed regionally from 2018. 🟧 The oceanic sector (FAJO) is worked more procedurally with HF; public reporting has flagged radio-comms reliability concerns there (§11) — do not assume continuous datalink/comms coverage over the ocean and confirm live.
- **FIS:** flight information / procedural service provided by ATNS outside radar cover, mainly relevant over the oceanic sector and the more remote northern reaches of the FIR.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Johannesburg FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — **ICAO AFI RVSM**; an **RVSM approval** from the State of Registry/Operator is required. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟧 **RNAV 5** enroute (AFI PBN); RNP APCH published at the major terminals (FAOR, FACT, FALA) — confirm the current South Africa AIP. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟩 **not an AFI requirement** — standard 25 kHz VHF applies.
- **Datalink (CPDLC / ADS-C):** 🟧 not asserted as a mature FIR-wide capability in FAJA/FAJO here — confirm current capability at planning. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode C/S transponder required.** 🟩 **Space-based ADS-B (Aireon)** coverage has been deployed regionally since 2018 — confirm current mandate/status at planning.
- **High-elevation / density-altitude ops:** 🟧 **FAOR, FALA and FABL** sit at significant elevation on the Highveld plateau — see [`OM E — High-Elevation Aerodrome Operations`](../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a transit is worked by the **Johannesburg-area ACC**; the exact sector frequencies are AIRAC/AIP-dependent — fly the current AIP frequencies, not a stored table.
- **Oceanic / remote:** 🟧 **HF** and (where fitted) **SATVOICE** cover the Johannesburg Oceanic (FAJO) sector; comms reliability there has been publicly flagged as a watch item (§11).
- **Language:** 🟩 **English** (ICAO) throughout.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 **not yet implemented** in Southern Africa — the continent-wide FRA roll-out so far covers **WACAF** (West & Central Africa, FL250+, live since 25 JAN 2024); **ESAF** (Eastern & Southern Africa, which includes South Africa) FRA trials are the stated **2026** focus — confirm current availability at planning.
- **Airway spine:** the **fixed ATS-route network** feeds Johannesburg (FAOR), Cape Town (FACT), Durban (FALE) and the domestic hub set, and connects to the Gaborone, Windhoek, Harare and Beira FIR boundaries.
- **Major fixes / entry-exit points:** the FIR-boundary reporting points toward the four adjacent continental FIRs and the FACA/FAJO domestic boundaries; 🟧 **entry/exit gates exist on the Johannesburg Oceanic (FAJO) boundary adjoining Windhoek FIR (FYWF) continental airspace**, with fixed continental routes established transiting Windhoek to reach those oceanic gates — relevant to any southbound Atlantic/EUR-SAM-adjacent routing via the Namibian corridor. The SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **O.R. Tambo (FAOR, home hub)**, **Lanseria (FALA)**, **Bram Fischer/Bloemfontein (FABL)**, **King Shaka/Durban (FALE)**, plus Kimberley (FAKM), Polokwane (FAPP), Kruger Mpumalanga (FAKN) and the wider domestic network. **Cape Town (FACT)** sits administratively in the separate Cape Town FIR (FACA) but is treated as part of the same national network for terminal purposes. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 the **Highveld interior** (Johannesburg, Bloemfontein) sits at a general elevation of **~1,500–1,800 m (5,000–6,000 ft)** — not high terrain in absolute MORA terms but a **high-elevation aerodrome** consideration (density altitude, engine/climb performance). The **Drakensberg escarpment** — **Thabana Ntlenyana ~3,482 m (~11,424 ft)**, on the Lesotho border within/adjacent to the FIR — is the significant high belt. Durban and the KwaZulu-Natal coast are low.
- **Boundary terrain:** 🟧 the Drakensberg sits astride the **Lesotho enclave**, wholly surrounded by South African (Johannesburg FIR) territory — relevant to driftdown/escape for routings through the south-east interior.
- **Driftdown / depressurisation escape:** relevant primarily to the Drakensberg/Lesotho crossing; elsewhere the Highveld's high base elevation (not the terrain relief) is the operative factor. National diversion spread (FAOR/FACT/FALA/FALE) covers most routings.
- **Cold-temperature altitude corrections:** 🟧 applicable at the high-elevation Highveld terminals (FAOR, FALA, FABL) — see [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md) and the airport briefs.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Johannesburg — O.R. Tambo Intl | **FAOR** | Home hub / primary alternate (high-elevation Highveld) | [FAOR brief](../../../destinations/africa/south-africa/faor/index.md) |
| Johannesburg — Lanseria Intl | **FALA** | Secondary Johannesburg-area alternate | [FALA brief](../../../destinations/africa/south-africa/fala/index.md) |
| Cape Town Intl | **FACT** | SW alternate (separate Cape Town FIR/FACA) | [FACT brief](../../../destinations/africa/south-africa/fact/index.md) |
| Durban — King Shaka Intl | **FALE** | KwaZulu-Natal coastal alternate (current Durban airport) | FALE brief 🟧 single-file stub only — see reconciliation note below |
| Durban — Old (Louis Botha) | **FADN** | 🟧 **Legacy/closed** — superseded by FALE (King Shaka, opened May 2010) | [FADN brief](../../../destinations/africa/south-africa/fadn/index.md) — full document pack exists but describes a **decommissioned** airport |
| Bloemfontein — Bram Fischer Intl | **FABL** | Central interior alternate (high-elevation) | to build 🟧 |

- **FADN-vs-FALE reconciliation 🟧:** **FADN (old Durban/Louis Botha) is closed** — replaced by **FALE (King Shaka Intl)** when it opened on 1 May 2010. The current OM tree has this **backwards**: **FADN** carries a **full briefing pack** (Arrival/Departure/Dispatch/Briefing) describing a decommissioned airport, while **FALE** — the airport actually in current operational use — exists only as a **single stub file**. **Recommend:** build out FALE to full-pack status and either retire/clearly mark FADN historical, or migrate the FADN content to FALE where still applicable (runway/approach data will differ — do not copy blind). Flagged here, not actioned (out of scope for this FIR-brief build).
- **Coverage note:** 🟩 dense, well-developed national diversion set; FAOR/FACT/FALE/FALA are the dependable core.

---

## 10. Special-use airspace

- **Military / danger / restricted areas:** 🟧 danger and restricted areas (military training, ranges) are AIP/NOTAM-published across the FIR — pull the active list at planning.
- **Overflight-permit / diplomatic considerations:** 🟧 South Africa's overflight/landing permit regime is generally more accessible than much of the AFI region, but confirm current requirements for the operation.
- **Security posture:** 🟩 South Africa is **not** a conflict-zone state; no standing airspace-closure or insurgency risk comparable to the West/East African items in the parent Africa brief.

> **SUA currency:** re-check active danger/restricted-area status and any NOTAM restrictions at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** squawk **7600**; continue per the ICAO/South Africa AIP IFR comms-failure rules (last clearance / filed route and levels), attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm the South Africa refinement at **AIP ENR 1.**
- **Weather-deviation / in-flight contingency:** radar-tactical via ATC over the continental FIR; in the procedural oceanic sector (FAJO) apply the standard ICAO Doc 4444 offset/broadcast technique.
- **Seasonal hazards (durable):**
  - **Highveld summer convection (≈ Oct–Apr)** — afternoon thunderstorms, hail, and occasional severe wind — the dominant en-route/terminal hazard around Johannesburg/Pretoria.
  - **Cape Town "Cape Doctor"** — strong south-easterly gale-force wind, notably in summer — a terminal-wind factor at FACT.
  - **Oceanic-sector comms reliability** — public reporting (§ Sources) has flagged radio-comms/outage issues in Johannesburg Oceanic; treat as a live watch item for any oceanic-adjacent routing.

> **Pull at planning (T-2h):** enroute NOTAMs, danger/restricted-area status, SIGMET/AIRMET (Highveld convection, Cape south-easter), any Johannesburg Oceanic comms-serviceability notices, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **FAJA / FACA (Cape Town) lateral boundary** and the **FAJA/FAJO (oceanic)** handoff geometry (South Africa AIP ENR 2.1).
- **Airspace class letter per band** and lower/upper handoff level (AIP ENR 2.1).
- **Johannesburg-area ACC internal sector boundaries** and frequencies (current AIP).
- **FADN-vs-FALE reconciliation** — old Durban (FADN, closed 2010) carries the full document pack; current Durban (FALE, King Shaka) is only a stub — rebuild priority.
- **Bloemfontein (FABL)** brief does not yet exist — build if it becomes a planned alternate.
- **Datalink/CPDLC maturity and comms-reliability picture** in Johannesburg Oceanic (FAJO) — re-check live; public reporting has flagged outages.
- **ESAF FRA implementation timeline** for South Africa specifically (stated 2026 focus, region-wide) — confirm current status.
- **Overflight/landing permit** requirements for the operation.
- A dedicated **Cape Town (FACA)** and/or **Johannesburg Oceanic (FAJO)** FIR brief does not yet exist as a sibling document — build if the network's southern/oceanic routing expands.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ATNS — Air Traffic and Navigation Services** (ANSP of record for Johannesburg FIR/FAJA, Cape Town FIR/FACA and Johannesburg Oceanic FIR/FAJO; publisher of the South Africa AIP/AIS) — https://cad.atns.co.za/SmartAIM/EAipPackages/15-OCT-24/2024-10-15-000000/html/eAIP/FA-ENR-3.3-en-US.html (retrieved 2026-07-26). South Africa AIP ENR sections are the primary source for FIR structure, classes, routes, RVSM and comms.
- **ICAO Doc 7030 / ICAO ESAF — ATC Manual for RVSM in the AFI Region** — AFI RVSM FL290–410, region-wide since 25 SEP 2008 — https://www.icao.int/sites/default/files/ESAF/Documents/RVSM/atc_operations_manual.pdf (retrieved 2026-07-26).
- **South African ATM Contingency Plan Applicable to Cape Town, Johannesburg & Johannesburg Oceanic FIRs** (confirms the three-FIR structure — FAJA/FACA/FAJO — and lists the neighbouring FIRs Beira, Harare, Gaborone, Windhoek, Luanda) — https://caasanwebsitestorage.blob.core.windows.net/shared-documents/SA_CP_2020_08_25_v7.pdf (retrieved 2026-07-26).
- **SAT Doc 002 — ATM Operational Contingency Plan for South Atlantic Oceanic FIRs** (Johannesburg Oceanic / FAJO context) — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2025/SAT%20DOCUMENTS/SAT-Doc-002-SAT-Contingency-Plan-Edition-1.pdf (retrieved 2026-07-26).
- **Aireon — "South Africa Marks Regional Milestone – Space-Based ADS-B"** (space-based ADS-B deployment, 2018) — https://aireon.com/south-africa-to-deploy-space-based-ads-b/ (retrieved 2026-07-26).
- **OPSGROUP — "ATC radio outage in Johannesburg Oceanic"** (comms-reliability watch item, FAJO) — https://ops.group/blog/johannesburg-oceanic/ (retrieved 2026-07-26).
- **OPSGROUP — "Free Route Airspace in Africa"** (WACAF FL250+ live 25 JAN 2024; ESAF trials 2026 focus) — https://ops.group/blog/free-route-airspace-in-africa/ (retrieved 2026-07-26).
- **metar-taf.com — FAJA Johannesburg FIR** (FIR ident corroboration) — https://metar-taf.com/fir/FAJA-Johannesburg (retrieved 2026-07-26).
- Terrain reference (Thabana Ntlenyana ~3,482 m / ~11,424 ft, Drakensberg) — per the companion [Africa](../../africa.md) area brief §7 (Wikipedia range/summit articles, retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial build from `_FIR Briefing Template.md`. Johannesburg FIR (FAJA) confirmed as South Africa's principal continental FIR under **ATNS**, distinct from the domestic **Cape Town FIR (FACA)** and the oceanic **Johannesburg Oceanic FIR (FAJO)** — all three ATNS-operated. **AFI RVSM FL290–410**; RNAV 5 / transponder referenced to OM E; strong regional radar/ADS-B (incl. space-based ADS-B since 2018), best-developed surveillance in AFI; Drakensberg/Highveld high-elevation terrain noted with OM E cross-references; national diversion set (FAOR/FACT/FALA/FALE) plus 🟧 **FADN-vs-FALE reconciliation flagged** (old Durban carries the full pack, current Durban is a stub); 🟧 ESAF FRA not yet live (2026 trial focus); 🟧 Johannesburg Oceanic comms-reliability watch item; adjacent FIRs Gaborone/Windhoek/Harare/Beira. Built from ATNS AIP, ICAO AFI RVSM manual, SA ATM contingency plan, Aireon, OPSGROUP sources. |
