# Bangkok (VTBB) — FIR Briefing

**Scope:** single FIR — Thailand, containing **Suvarnabhumi (VTBS)**, and the surrounding Indochina/Gulf-of-Thailand traffic funnel · **Parent area brief:** [Asia](../../asia.md) 🟩 · **Adjacent FIRs:** Yangon (VYYF, Myanmar) W/NW · Vientiane (VLVT, Laos) N · Hanoi (VVNB, Vietnam) NE · Phnom Penh (VDPP, Cambodia) E · Ho Chi Minh (VVTS, Vietnam) SE · Kuala Lumpur (WMFC, Malaysia) S
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — verified vs CAAT AIP ENR structure + ICAO APAC framework; exact ACC sector split and the Gulf-of-Thailand boundary detail flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Bangkok is a **radar/ADS-B-controlled continental FIR** covering the whole of Thailand — no oceanic procedural segment on a normal hub transit, but it is the geographic pivot of mainland South-East Asia, bordering five other FIRs and carrying the north–south Bay-of-Bengal↔South-China-Sea trunk flow. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for VTBS live in the airport briefing (§9). Live restrictions (NOTAMs, ATFM measures, SIGMETs) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **VTBB** — Bangkok FIR, surface to the upper control limit; **Bangkok ACC** works the whole FIR (no separate published UIR ident) |
| Controlling ATSU / ANSP | **Bangkok ACC** (radio "Bangkok Control"), **AEROTHAI — Aeronautical Radio of Thailand Ltd** (air navigation service provider); **CAAT — Civil Aviation Authority of Thailand** (regulator, AIP publisher) |
| Airspace class & vertical limits | 🟧 Predominantly controlled airspace surface-to-upper-limit on the main routes; exact class letter per band — confirm at **AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** inclusive (ICAO APAC RVSM) — see OM E §5 |
| PBN environment | **RNAV / RNP** enroute · terminal RNP (SID/STAR) · **RNP APCH** at VTBS (both runways, incl. RNP 02L/20R introduced with the third-runway reconfiguration, Oct 2024) — see OM E §5 |
| Surveillance & datalink | 🟩 **Radar + ADS-B** across the main route network and VTBS TMA; 🟧 CPDLC availability/mandate band — confirm at ENR/NOTAM |
| Primary language & comms | 🟩 **VHF; English** (ICAO standard) |
| Key hazard(s) | Central mainland-SE-Asia **crossroads with five FIR boundaries**; year-round **monsoon convection** (SW monsoon ~May–Oct, NE monsoon ~Nov–Feb); a long-standing **unresolved Gulf-of-Thailand boundary sliver** touching the Bangkok/Phnom Penh/Ho Chi Minh corner (technical boundary matter, not an operational restriction) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-controlled throughout on a normal hub transit; no oceanic procedural segment. |
| Communication coverage & language | 🟩 | Continuous VHF; **English** (ICAO). No HF/SATVOICE driver for a VTBS transit. |
| Datalink / surveillance requirement | 🟧 | Radar/ADS-B confirmed on the main network; CPDLC mandate band/login sector — confirm at ENR/NOTAM. |
| Terrain / MORA / driftdown | 🟩 | Central Thailand and the Chao Phraya plain around VTBS are low-lying; higher terrain sits toward the Myanmar/Laos boundaries (western/northern Thailand) — not a factor on a normal VTBS transit. §8. |
| Diversion-aerodrome coverage | 🟧 | VTBS in-FIR; other Bangkok-area fields (Don Mueang VTBD, U-Tapao VTBU) exist but have no OM C brief yet; cross-boundary WMKK (Kuala Lumpur) within range S. §9. |
| Special-use airspace (military / danger) | 🟧 | Danger/restricted areas over the Gulf of Thailand and the Cambodian-boundary sector; activation AIP/NOTAM-published — confirm active at planning. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV/RNP enroute · RNP APCH at VTBS · Mode S + ADS-B.** All defined in OM E; confirm the current-AIRAC route meets the RNP/route requirements. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Bangkok FIR (VTBB) covers the **entire territory of Thailand** — the central plain around Bangkok/VTBS, the northern hill country toward the Myanmar/Laos boundary, the Khorat Plateau (NE) toward Laos/Cambodia, and the peninsula south toward Malaysia — plus an over-water extension into the **Gulf of Thailand**. It sits at the geographic pivot of mainland South-East Asia, sharing boundaries with **five** other FIRs.
- **Vertical split:** 🟧 **Bangkok ACC works the FIR surface-to-upper-limit**; no separately-branded upper-area control centre. The cruise band for hub transits sits in the RVSM upper airspace (FL290–410). Confirm the exact band split at **AIP ENR 2.1**.
- **Adjacent FIRs (by boundary):**
  - **W / NW — Yangon (VYYF, Myanmar).** The western boundary toward the Andaman Sea/Bay-of-Bengal gateway; see the Asia area brief §9 for the Myanmar overflight-risk picture (not repeated here).
  - **N — Vientiane (VLVT, Laos).** The northern boundary; lower-density traffic.
  - **NE — Hanoi (VVNB, Vietnam).** North-eastern boundary toward the Indochina/South-China-Sea trunk.
  - **E — Phnom Penh (VDPP, Cambodia).** Eastern boundary across the Khorat Plateau/Cambodian border.
  - **SE — Ho Chi Minh (VVTS, Vietnam).** South-eastern boundary over the Gulf of Thailand approach to the SCS trunk. 🟧 A narrow, long-standing **boundary technicality in the Gulf of Thailand** (a small claimed sliver referencing three coordinates) touches the Bangkok/Phnom Penh/Ho Chi Minh corner — a durable, published boundary-definition matter, not a live security concern; noted for completeness.
  - **S — Kuala Lumpur (WMFC, Malaysia).** The southern boundary down the Thai/Malay peninsula; primary link to the SE-Asian SCS/Strait trunk — see the **[Kuala Lumpur (WMFC) FIR brief](kuala-lumpur-wmfc.md)**.
- **Sectorisation:** 🟧 Bangkok ACC is divided into multiple internal sectors; the transit-relevant fact is the **single "Bangkok Control" block** feeding the VTBS terminal area. Exact sector geometry is AIRAC-dependent — fly the current-AIRAC frequencies.

---

## 4. Control & ATSU

- **Lower- & upper-airspace ATSU:** 🟩 **Bangkok ACC** ("Bangkok Control", operated by AEROTHAI) works the whole FIR surface-to-upper-limit; no separate UAC. Approach/terminal control for VTBS feeds off the ACC.
- **FIS / FSS:** flight information service is provided by Bangkok ACC for the FIR; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 radar + ADS-B on the main VTBS-area route network; 🟧 confirm the exact coverage limit toward the FIR's remoter northern/western sectors at ENR.
- **Regional role:** AEROTHAI additionally acts as the **ICAO APAC Monitoring Agency for the Asia Region** (RVSM/height-monitoring oversight across a wide set of regional FIRs) and hosts elements of the **Bay of Bengal Cooperative ATFM** programme — a durable regional-coordination fact, not an operational instruction for a VTBS transit.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Bangkok FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410 inclusive** — ICAO APAC RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV / RNP** enroute; terminal RNP SID/STAR; **RNP APCH** at VTBS (both runways since the Oct 2024 runway reconfiguration). See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟧 availability/mandate band not individually verified for the Bangkok FIR — confirm at ENR/NOTAM. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B** surveillance across the main route network.
- **8.33 kHz:** not an APAC requirement; standard 25 kHz VHF spacing applies.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Bangkok ACC ("Bangkok Control")** across its sectors and handed to the adjacent-FIR ACC (Yangon, Vientiane, Hanoi, Phnom Penh, Ho Chi Minh, Kuala Lumpur) at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Bangkok ACC provides flight information service in the FIR.
- **Language:** 🟩 **English** (ICAO standard).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 the Bangkok FIR is **fixed ATS-route / airway-structured**, not a continental FRA; confirm any user-preferred-route programme at ENR.
- **Airway spine:** Bangkok FIR is the **mainland South-East-Asia pivot** — the north–south spine linking the Bay-of-Bengal gateway (via Yangon) with the South China Sea trunk (via Ho Chi Minh/Kuala Lumpur), and the east–west spine between Myanmar/India and Indochina (via Vientiane/Hanoi/Phnom Penh). Much regional traffic transits or terminates at VTBS.
- **Major fixes / entry-exit points:** the boundary entry/exit fixes feeding the VTBS terminal area and the trunk routes across the five adjacent FIRs; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Suvarnabhumi (VTBS)** — the served K Global aerodrome. Bangkok's other fields — **Don Mueang (VTBD)** and **U-Tapao (VTBU)** — sit within the same FIR but have no OM C brief yet 🟧.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low around VTBS and the central Chao Phraya plain; higher terrain rises toward the **northern hill country (Myanmar/Laos boundary)** and the **Khorat Plateau** (NE, toward Laos/Cambodia). Not a cruise-level factor on a normal VTBS transit at FL290+.
- **Boundary terrain:** the higher northern-Thailand/Myanmar hill country and the Khorat Plateau sit at the FIR's northern and eastern edges; relevant to a low-level driftdown in those sectors, not a VTBS-hub cruise constraint.
- **Driftdown / depressurisation escape:** not a cruise-level constraint on the VTBS corridor; diversion-field density (VTBS in-FIR, cross-boundary WMKK) removes any terrain-limited escape problem on that routing.
- **Cold-temperature altitude corrections:** not applicable — tropical, no cold-temperature terminal correction driver.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Bangkok–Suvarnabhumi | **VTBS** | In-FIR served hub / primary dep-return alternate | [VTBS brief](../../../destinations/asia/thailand/vtbs/index.md) |
| Bangkok–Don Mueang | **VTBD** | In-FIR secondary Bangkok-area field | Brief to build 🟧 |
| U-Tapao (Rayong-Pattaya) | **VTBU** | In-FIR coastal/joint-use field, SE of Bangkok | Brief to build 🟧 |
| Kuala Lumpur–Sepang | **WMKK** | Adjacent-FIR alternate — **in Kuala Lumpur FIR (WMFC)**, S | [WMKK brief](../../../destinations/asia/malaysia/wmkk/index.md) |

- **Coverage note:** 🟧 dense in the central VTBS area; the remoter northern/western and Cambodian-boundary sectors are less densely served — confirm the specific alternate set for any routing that transits those sectors at planning.

---

## 10. Special-use airspace

- **Military TRA / danger areas:** 🟧 danger/restricted areas exist over the **Gulf of Thailand** and along the Cambodian-boundary sector; activation is **AIP/NOTAM-published** and can affect the eastern/south-eastern trunk routes. Confirm active areas at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none for a normal VTBS hub transit within the FIR; standard ICAO operation.
- **Restricted/prohibited pockets:** named areas and status are AIP/NOTAM-published — pull live at planning.

> **SUA currency:** re-check active TRA/danger-area status at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO comms-failure procedure — squawk **7600**, continue per the last acknowledged clearance / filed route and levels, and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Thai refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **South-west monsoon (~May–Oct)** — the dominant convective season; heavy CB, embedded thunderstorms and low visibility across central/southern Thailand and the Gulf of Thailand.
  - **North-east monsoon (~Nov–Feb)** — drier, cooler airflow over most of Thailand, but can bring heavy rain/flooding to the southern peninsula and Gulf coast.
  - **ATFM / flow measures:** 🟧 AEROTHAI-coordinated flow-management measures can apply on the busiest trunk sectors (e.g. cross-border programmes with neighbouring ANSPs) — pull the day's ATFM picture at planning.
  - **Volcanic ash:** 🟩 not a direct Thailand hazard; distant Indonesian-arc ash could in principle propagate — low-probability wildcard, not a defining feature of this FIR.

> **Pull at planning (T-2h):** enroute NOTAMs, active danger/restricted-area status, SIGMET/AIRMET (monsoon convection), any ATFM measures, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** (AIP ENR 2.1) — not individually re-verified.
- **ACC internal sectorisation** and any intermediate vertical band split — confirm against the current AIP/sector charts.
- **CPDLC availability/mandate band** — confirm at ENR/NOTAM.
- The **Gulf-of-Thailand boundary technicality** (Bangkok/Phnom Penh/Ho Chi Minh corner) — durable boundary-definition matter; confirm current published status, not a live-security item.
- **Don Mueang (VTBD)** and **U-Tapao (VTBU)** have no OM C airport brief yet — build if either becomes a planned alternate.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **CAAT (Civil Aviation Authority of Thailand) AIP — ENR sections**: ENR 1.8 (regional supplementary procedures — RVSM FL290–410), ENR 1.9 (ATFM), GEN 3.3 (air traffic services). Primary source of record for FIR structure and RVSM — https://aip.caat.or.th/ (ENR 1.8 RVSM; ENR 1.9 ATFM) (retrieved 2026-07-26).
- **CAAT AIP — Suvarnabhumi (VTBS) supplement, runway reconfiguration** — RNP 02L/20R introduced with the third-runway change effective 3 Oct 2024 (AIRAC) — https://aip.caat.or.th/2024-10-03-AIRAC/html/eSUP/VT-eSUP-24-42-A-en-GB.html (retrieved 2026-07-26).
- **ICAO APAC — Regional Air Navigation Plan / RASMAG material** — AEROTHAI's role as the Monitoring Agency for the Asia Region (RVSM height-monitoring) across regional FIRs including Bangkok — https://www.icao.int/sites/default/files/APAC/Meetings/2021/2021%20RASMAG26/3-Working%20Papers/WP36-Competent-Airspace-Safety-Monitoring-Organizations-List.pdf (retrieved 2026-07-26).
- **Wikipedia — Bay of Bengal Cooperative Air Traffic Flow Management System** — regional ATFM coordination context including AEROTHAI/Thailand — https://en.wikipedia.org/wiki/Bay_of_Bengal_Cooperative_Air_Traffic_Flow_Management_System (retrieved 2026-07-26). *Tier-4 corroboration only.*
- **Companion OM C files:** [Asia area brief](../../asia.md) · [Kuala Lumpur (WMFC) FIR brief](kuala-lumpur-wmfc.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. Bangkok FIR (VTBB): single Bangkok ACC ("Bangkok Control", AEROTHAI/CAAT) block; five adjacent FIRs (Yangon, Vientiane, Hanoi, Phnom Penh, Ho Chi Minh, plus Kuala Lumpur S) and the Gulf-of-Thailand boundary technicality noted factually; RVSM FL290–410 / RNAV-RNP / RNP APCH at VTBS referenced to OM E; airway-structured mainland-SE-Asia pivot; low central terrain; VTBS in-FIR + WMKK cross-boundary diversion; Gulf-of-Thailand SUA; SW/NE monsoon convection seasonal. Built from CAAT AIP + ICAO APAC RASMAG + Wikipedia BOBCAT corroboration. Parent area brief: Asia. |
