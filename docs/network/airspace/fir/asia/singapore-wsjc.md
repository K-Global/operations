# Singapore (WSJC) — FIR Briefing

**Scope:** single FIR — the Singapore Strait, southern Malacca Strait and a large block of the southern **South China Sea**, containing the **Singapore–Changi (WSSS) Asia pax superhub** and Seletar (WSSL) · **Parent area brief:** [Asia](../../asia.md) 🟩 · **Adjacent FIRs:** Kuala Lumpur (WMFC) N/NW · Jakarta (WIIF) S/SW · Ho Chi Minh (VVTS) NE · Kota Kinabalu (WBFC) E · Manila (RPHI) NE (over the South China Sea)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — verified vs CAAS AIP ENR structure + ICAO APAC framework; exact ACC sector split and the FL245/upper vertical boundary flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Singapore is a **radar/ADS-B-controlled continental-plus-littoral FIR** — no true oceanic procedural segment on a normal hub transit, but the FIR is unusually busy and geographically tight, choked by the Singapore/Malacca Strait funnel and the surrounding KL and Jakarta boundaries. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (WSSS, WSSL) live in the airport briefings (§9). Live restrictions (NOTAMs, danger-area activation, SIGMETs) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **WSJC** — Singapore FIR, surface to the upper control limit; **Singapore ACC** works the whole FIR (no separate published UIR ident) |
| Controlling ATSU / ANSP | **Singapore ACC** (radio "Singapore Control"), **CAAS — Civil Aviation Authority of Singapore** / Air Navigation Services |
| Airspace class & vertical limits | 🟧 Predominantly **Class A/C** in the controlled control-areas and airways; Class G in the lower uncontrolled pockets. Vertical extent surface to the upper control limit — confirm exact class letter per band at **AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** inclusive (ICAO APAC RVSM) — see OM E §5 |
| PBN environment | **RNAV 5 / RNP** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B** surveillance across the FIR; 🟧 **CPDLC (FANS/ATN)** available on the trunk routes — confirm mandate band at ENR |
| Primary language & comms | 🟩 **VHF throughout; English** (ICAO standard) |
| Key hazard(s) | Extreme **traffic density** in a tight FIR; the Singapore/Malacca Strait funnel; dense adjacent-FIR boundaries (KL, Jakarta) with frequent handoffs; year-round **equatorial convection / Sumatra squalls**; seasonal **haze** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-controlled throughout on a normal hub transit; no oceanic procedural segment. |
| Communication coverage & language | 🟩 | Continuous VHF; **English** (ICAO). No HF/SATVOICE driver for a WSSS transit. |
| Datalink / surveillance requirement | 🟧 | Continuous ADS-B; CPDLC (FANS/ATN) available on trunk routes — confirm any mandate band and login sector at ENR/NOTAM. |
| Terrain / MORA / driftdown | 🟩 | Low. FIR is mostly **over water** (Straits, South China Sea) with modest Malay-peninsula/Sumatra terrain across the boundaries. Not a cruise or driftdown driver. §8. |
| Diversion-aerodrome coverage | 🟩 | Dense — WSSS in-FIR, plus WMKK/WIII/VTBS all within short range across adjacent FIRs. §9. |
| Special-use airspace (military / danger) | 🟧 | Danger/restricted areas over the Straits and South China Sea; activation is AIP/NOTAM-published — confirm active at planning. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 / RNP · RNP 1 · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RNP/route requirements. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Singapore FIR (WSJC) covers the **Singapore island and Strait, the southern Malacca Strait, and a large block of the southern South China Sea** extending north-east toward the Vietnamese/Philippine boundaries — a published area of roughly **815,000 km²**, far larger than Singapore's landmass, because Singapore ACC works a big over-water block on behalf of the region.
- **Vertical split:** 🟧 **Singapore ACC works the FIR surface-to-upper-limit**; there is no separately-branded upper-area control centre as in the German model. Some designated sectors carry intermediate vertical limits (e.g. FL245 caps on delegated areas) — confirm the exact band split at **AIP ENR 2.1**. The cruise band for our hub transits sits in the RVSM upper airspace (FL290–410).
- **Adjacent FIRs (by boundary):**
  - **N / NW — Kuala Lumpur (WMFC, CAAM).** The primary land/Strait boundary; heavy northbound flow toward WMKK and onward to the Bay of Bengal. Singapore ACC also provides ATS in **delegated sectors within the Kuala Lumpur FIR** (published vertical limits) — a durable regional-delegation quirk.
  - **S / SW — Jakarta (WIIF, AirNav Indonesia).** 🟧 The Singapore–Jakarta boundary was **re-aligned effective 21 Mar 2024 (AIRAC 2405)**: the **Riau and Natuna Islands** now lie within the Jakarta FIR. Southbound flow to WIII crosses here.
  - **NE — Ho Chi Minh (VVTS, Vietnam)** over the South China Sea; the northbound trunk to East Asia.
  - **E — Kota Kinabalu (WBFC, CAAM)** over the South China Sea toward Borneo.
  - **NE (SCS) — Manila (RPHI, CAAP)** at the eastern South China Sea edge.
- **Sectorisation:** 🟧 Singapore ACC is divided into multiple ACC/area sectors that combine and split with traffic; the transit-relevant fact is the **single-ACC ("Singapore Control") over-water block** feeding the WSSS/WMKK/WIII terminal areas. Exact sector geometry is AIRAC-dependent — fly the current-AIRAC frequencies.

---

## 4. Control & ATSU

- **Lower- & upper-airspace ATSU:** 🟩 **Singapore ACC** ("Singapore Control", CAAS) works the whole FIR surface-to-upper-limit; no separate UAC. Approach/terminal control for Changi/Seletar feeds off the ACC.
- **FIS / FSS:** Flight information service is provided by Singapore ACC for the FIR; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous **radar + ADS-B** across the FIR, including the over-water South China Sea block; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Singapore FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410 inclusive** — ICAO APAC RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 / RNP** enroute; **RNP 1** for terminal SID/STAR; **RNP APCH** for arrivals — per the ICAO APAC PBN implementation and the CAAS AIP. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟧 **CPDLC (FANS 1/A over VDL, with ATN on some routes)** available on the regional trunk network — confirm any mandate band and login sector at ENR/NOTAM. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** is the surveillance backbone across the FIR — carriage per the CAAS AIP/regional mandate.
- **8.33 kHz:** not an APAC requirement (that is an EUR-region mandate); standard 25 kHz VHF spacing applies here.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Singapore ACC ("Singapore Control")** across its sectors and handed to the adjacent-FIR ACC (Kuala Lumpur, Jakarta, Ho Chi Minh, Kota Kinabalu) at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Singapore ACC provides flight information service in the FIR.
- **Language:** 🟩 **English** (ICAO standard).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 the Singapore FIR is **fixed ATS-route / airway-structured**, not a continental FRA in the European sense; the dense SCS trunk network and Strait feeders define the routeing. Confirm any user-preferred-route or flex-track programmes at ENR.
- **Airway spine:** the FIR is the pivot of the **South-East Asian trunk system** — the north–south spine between East Asia (via Ho Chi Minh/Manila) and Australia/Indonesia (via Jakarta), and the east–west spine between the Bay of Bengal (via Kuala Lumpur) and Borneo/the Pacific (via Kota Kinabalu). Much of the FIR's traffic funnels through the Singapore/Malacca Strait.
- **Major fixes / entry-exit points:** the boundary entry/exit fixes feeding the WSSS/WMKK/WIII terminal areas and the SCS trunk routes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Singapore–Changi (WSSS, Asia pax superhub)** and **Seletar (WSSL)**. Terminal detail is in the airport briefings (§9). Kuala Lumpur (WMKK) sits across the boundary in **Kuala Lumpur FIR (WMFC)**, and Jakarta (WIII) in **Jakarta FIR (WIIF)** — not this FIR.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 **low throughout** — the FIR is dominated by water (Singapore/Malacca Straits, southern South China Sea). Singapore island itself is near-flat; the highest terrain near the FIR sits **across the boundaries** on the Malay peninsula (Kuala Lumpur FIR) and Sumatra (Jakarta FIR). Not a cruise-level factor at FL290+.
- **Boundary terrain:** the **Barisan mountains of Sumatra** (across the Jakarta-FIR boundary, SW) are the nearest significant high terrain, relevant only to a low-level driftdown south of the Strait — noted so the boundary is explicit; it is not a Singapore-FIR cruise constraint.
- **Driftdown / depressurisation escape:** not a cruise-level constraint within Singapore; the **very high diversion-field density** (WSSS in-FIR, WMKK/WIII/VTBS within short range) removes any terrain-limited escape problem.
- **Cold-temperature altitude corrections:** not applicable — equatorial, no cold-temperature terminal correction driver.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Singapore–Changi | **WSSS** | In-FIR Asia pax superhub / primary dep-return alternate | [WSSS brief](../../../destinations/asia/singapore/wsss/index.md) |
| Seletar | **WSSL** | Minor in-FIR alternate (bizjet/GA) | Brief to build 🟧 |
| Kuala Lumpur–Sepang | **WMKK** | Adjacent-FIR alternate — **in Kuala Lumpur FIR (WMFC)**, N | [WMKK brief](../../../destinations/asia/malaysia/wmkk/index.md) |
| Jakarta–Soekarno-Hatta | **WIII** | Adjacent-FIR alternate — **in Jakarta FIR (WIIF)**, S | [WIII brief](../../../destinations/asia/indonesia/wiii/index.md) |
| Bangkok–Suvarnabhumi | **VTBS** | Longer-range regional alternate (N, via KL/Bangkok FIRs) | [VTBS brief](../../../destinations/asia/thailand/vtbs/index.md) |

- **Coverage note:** 🟩 dense — a suitable long-runway field is always within short range, so **ETP/critical-point planning is not a driver** in this radar-controlled littoral FIR. WSSS is the natural departure/return alternate; WMKK and WIII give immediate cross-boundary redundancy to the north and south.

---

## 10. Special-use airspace

- **Military / danger areas:** 🟧 danger, restricted and military areas exist over the **Singapore Strait, the approaches, and parts of the South China Sea**; activation is **AIP/NOTAM-published** and can affect the trunk routes. The SimBrief route is validated against the current structure — confirm active areas at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none for a normal WSSS hub transit within the FIR; standard ICAO operation. Note the **South China Sea** carries broader regional-sensitivity considerations on the north-eastern trunk routes — re-check live bulletins (§11).
- **Restricted/prohibited pockets:** named areas and status are AIP/NOTAM-published — pull live at planning.

> **SUA currency:** re-check active danger/restricted-area status and any South China Sea bulletins at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO comms-failure procedure — squawk **7600**, continue per the last acknowledged clearance / filed route and levels, and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Singapore refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued; over the South China Sea trunk the **ICAO general weather-deviation procedure** (offset and level change with position broadcast) applies where radar/CPDLC contact is degraded. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Equatorial convection year-round** — deep CB, embedded thunderstorms and the pre-dawn/late-afternoon build-up over the Straits and islands; the dominant enroute and terminal hazard, handled tactically.
  - **Sumatra squalls ("Sumatras")** — fast-moving line-squalls off Sumatra crossing the Strait, chiefly in the **south-west monsoon (roughly May–Sep)**, with sudden wind shifts and gusts affecting the WSSS/WMKK terminal areas.
  - **Monsoon seasons** — **north-east monsoon (~Nov–Mar)** and **south-west monsoon (~May–Sep)** with an inter-monsoon convective peak between; heavy rain and low visibility at the terminals.
  - **Haze** — trans-boundary smoke haze (biomass burning, chiefly the drier mid-year period) can reduce visibility across the FIR and terminals.
  - **Typhoons:** 🟩 Singapore sits **near the equator, south of the main tropical-cyclone track** — direct typhoon strikes are rare; the seasonal driver here is monsoon convection and Sumatra squalls, not landfalling typhoons (contrast Hong Kong and Japan). Distant systems in the South China Sea can still enhance the monsoon flow.
  - **Volcanic ash** — 🟧 the wider Indonesian arc (Sumatra/Java) is highly active; an eruption to the south can propagate ash toward the southern trunk routes. **VAAC Darwin** is the responsible advisory centre for the region — pull VA advisories at planning.

> **Pull at planning (T-2h):** enroute NOTAMs, active danger/restricted-area status, SIGMET/AIRMET (convection, Sumatra squalls, haze), **VAAC Darwin** volcanic-ash advisories, South China Sea / conflict-zone bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** (AIP ENR 2.1) — stated as Class A/C predominant in controlled airspace; not individually re-verified.
- **ACC internal sectorisation and any intermediate vertical band split** (e.g. FL245-capped delegated sectors) — confirm against the current AIP/sector charts.
- **CPDLC mandate band and login sector** on the trunk network — confirm at ENR/NOTAM.
- **ADS-B Out carriage mandate** wording and any exemptions — confirm at the CAAS AIP.
- **Seletar (WSSL)** has no OM C airport brief yet — build if it becomes a planned alternate.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **CAAS AIP Singapore — ENR sections** (Civil Aviation Authority of Singapore): ENR 2.1 (FIR/ATS airspace, Singapore & adjacent FIR structure), ENR 1.8 (regional supplementary procedures — RVSM), ENR 3.x (ATS routes). Primary source of record for FIR structure, classes and RVSM — https://aim-sg.caas.gov.sg/ (ENR 2.1 boundary chart *SG AND ADJACENT FIR*; ENR 1.8 RVSM FL290–410) (retrieved 2026-07-25).
- **CAAS / ICAO APAC — Singapore–Jakarta FIR boundary re-alignment**, effective 21 Mar 2024 (AIRAC 2405): Riau & Natuna Islands to Jakarta FIR — corroborated via OPSGROUP *March 2024 Singapore Airspace Changes* https://ops.group/blog/march-2024-singapore-airspace-changes/ (retrieved 2026-07-25).
- **ICAO Doc 7030 — Regional Supplementary Procedures (APAC)** and ICAO Doc 4444 (weather-deviation/contingency) — APAC RVSM (FL290–410), regional comms/PBN/weather-deviation procedures.
- **Singapore vACC (VATSIM)** — division site and airspace/training material for the Singapore FIR, part of VATSIM South-East Asia — https://sinvacc.org/ and https://vat-sea.com/singapore-vacc/ (retrieved 2026-07-25). *Tier-4 corroboration only — single-ACC "Singapore Control" structure and the tight Strait-funnel airspace picture cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_FIR Briefing Template.md`. Singapore FIR (WSJC): single Singapore ACC ("Singapore Control", CAAS) over-water block; adjacent FIRs (Kuala Lumpur, Jakarta incl. the 21 Mar 2024 Riau/Natuna re-alignment, Ho Chi Minh, Kota Kinabalu, Manila); RVSM FL290–410 / RNAV5-RNP / RNP1 / ADS-B referenced to OM E; airway-structured SCS trunk system; low over-water terrain; WSSS in-FIR + WMKK/WIII/VTBS cross-boundary diversions; danger-area SUA; equatorial convection / Sumatra squalls / haze, typhoon exposure noted low; VAAC Darwin. VATSIM Singapore vACC cross-checked and cited. Parent area brief: Asia (to build). |
