# Emirates (OMAE) — FIR Briefing

**Scope:** single FIR — the United Arab Emirates plus a large portion of the southern Persian/Arabian Gulf and part of the Gulf of Oman, containing **Abu Dhabi/Zayed Intl (OMAA)** — the K Global Middle East bridge hub — and **Dubai (OMDB/OMDW)** · **Parent area brief:** [Middle East](../../middle-east.md) 🟩 · **Adjacent FIRs:** Bahrain (OBBB) W/NW · Tehran (OIIX) N (mid-Gulf) · Muscat (OOMM) E/SE · Jeddah (OEJD) SW

**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — FIR structure/adjacency verified vs GCAA AIP + VATSIM Arabian vACC; **conflict-zone status is live/perishable and flagged 🟥 (re-check at planning)**; per-band class letters, ANSP unit names and datalink coverage flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Emirates is a **radar/ADS-B-surveillance-controlled FIR** over the UAE and southern Gulf. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances and any active routing restrictions. Terminal procedures for aerodromes inside the FIR (OMAA, OMDB, OMDW, OMSJ …) live in the airport briefings (§9). **This FIR is under an active conflict-zone advisory (Gulf tensions) — the SUA/conflict picture in §10 is live and MUST be re-checked at planning (§11).** Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **OMAE** — Emirates FIR/UIR (lower boundary to UNL). Centre ≈ **24.49N 054.15E**; area ≈ 125,000 km² |
| Controlling ATSU / ANSP | 🟧 **Emirates area control (GCAA — Sheikh Zayed Air Navigation Centre, Abu Dhabi)** enroute; **dans (Dubai Air Navigation Services)** and Sharjah/Abu Dhabi approach units terminal. Authority/regulator: **GCAA** (General Civil Aviation Authority) |
| Airspace class & vertical limits | 🟧 **Class A** in upper controlled airspace; controlled TMAs (Class C/D) over the Dubai/Abu Dhabi/Sharjah terminal complex; **CTR/area radar ("U.A.E Radar") from FL150 and above**. Confirm exact class per band at **UAE AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (MID region RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNAV 1 / RNP 1** terminal (SID/STAR in the dense Dubai/Abu Dhabi TMA) · **RNP APCH** arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B** surveillance; 🟧 **CPDLC** available in the upper airspace (equipped aircraft) — confirm active band/login |
| Primary language & comms | 🟩 **VHF throughout**; **English** (ICAO). **25 kHz** channel spacing (8.33 kHz is a European mandate — not applicable here) |
| Key hazard(s) | 🟥 **Conflict-zone / airspace-security exposure** — proximity to the **Strait of Hormuz and the Iran (Tehran FIR) boundary** down the middle of the Gulf; missile/drone risk, **GPS spoofing/jamming**, and managed routing corridors (§10, re-check live). Also: very high **traffic density**; **Hajar Mountains** terrain in the east; summer heat/dust |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-surveillance-controlled throughout; "U.A.E Radar" area control from FL150 up. No procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; **English** (ICAO). 25 kHz spacing. No HF requirement in-FIR. |
| Datalink / surveillance requirement | 🟧 | Radar + **ADS-B**; **CPDLC** available in upper airspace (equipped aircraft) — confirm active band/sectors and login at planning. |
| Terrain / MORA / driftdown | 🟧 | Mostly low desert/sea; the **Hajar Mountains** in the east (Jebel Jais ~1,934 m / ~6,345 ft, on the Oman border) are the only significant belt — a terminal/eastern consideration, not a cruise factor. §8. |
| Diversion-aerodrome coverage | 🟩 | Very dense — OMAA/OMDB/OMDW/OMSJ/OMAL/OMRK/OMFJ/OMAD all inside the FIR; a suitable field is always within short range. §9. |
| Special-use airspace (military / **conflict zone**) | 🟥 | **Active conflict-zone advisory (EASA CZIB / state NOTAMs) over the wider Gulf** plus extensive UAE military restricted/danger areas and managed corridors. **Live and perishable — re-check at planning (§10/§11).** |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 / RNP 1 · RNP APCH · Mode S + ADS-B Out.** Defined in OM E; confirm the current-AIRAC route meets the MID/UAE requirements. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** the Emirates FIR covers the **whole United Arab Emirates landmass** plus a **large portion of the southern Persian/Arabian Gulf** and part of the **Gulf of Oman** off the east coast — a compact but extremely dense FIR (~125,000 km²) containing all UAE international aerodromes.
- **Confirmed containment:** 🟩 **Abu Dhabi/Zayed Intl (OMAA) and Dubai (OMDB + OMDW) both sit in Emirates FIR (OMAE)** — together with Sharjah (OMSJ), Al Ain (OMAL), Ras Al Khaimah (OMRK), Fujairah (OMFJ) and Al Bateen (OMAD).
- **Vertical structure:** 🟧 controlled airspace to the upper limit — **Class A** in the upper band; the Dubai/Abu Dhabi/Sharjah TMAs (Class C/D) beneath; **area radar ("U.A.E Radar") works FL150 and above** as CTR/upper control. Confirm the exact Class-A floor at UAE AIP ENR 2.1.
- **Adjacent FIRs (by boundary):**
  - **W / NW — Bahrain (OBBB, Bahrain).** The western Gulf FIR toward Qatar/Bahrain/Saudi.
  - **N — Tehran (OIIX, Iran).** 🟥 **The sensitive boundary** — it runs down the **middle of the Persian Gulf**; the OMAE/OIIX line and the **Strait of Hormuz** are the focus of the current conflict-zone picture (§10).
  - **E / SE — Muscat (OOMM, Oman).** East across the Hajar Mountains / Gulf of Oman.
  - **SW — Jeddah (OEJD, Saudi Arabia).** Toward the interior/Saudi Arabia.
- **Sectorisation:** 🟧 the Emirates FIR is worked as up to **seven area sectors / eight radar (CTR) positions** ("U.A.E Radar") in the busiest configuration, split by traffic flow (departures/arrivals/transit) around the Dubai–Abu Dhabi terminal complex — per the controlling division material; the transit-relevant fact is a dense multi-sector radar environment feeding two of the world's busiest hubs.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟧 **Emirates area control (GCAA — Sheikh Zayed Air Navigation Centre, Abu Dhabi)** — radar/ADS-B surveillance control of the FIR ("U.A.E Radar", FL150+).
- **Terminal ATSU:** 🟧 **dans (Dubai Air Navigation Services)** works the Dubai TMA (OMDB/OMDW); Abu Dhabi and Sharjah approach units serve their terminals. Precise unit/AoR split to confirm at UAE AIP.
- **FIS / FSS:** UAE **AIS/FIS** (GCAA); not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous **radar + ADS-B**; no procedural pockets on a normal IFR routing. 🟧 **GNSS integrity is degraded by reported GPS spoofing/jamming** in the region — a surveillance/navigation caveat (§10).

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Emirates FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — MID region RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5** enroute; **RNAV 1 / RNP 1** for terminal SID/STAR in the dense Dubai/Abu Dhabi TMA; **RNP APCH** for arrivals. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md). 🟧 With GPS spoofing/jamming reported in the region, confirm GNSS/RNP integrity monitoring and any conventional-navaid fallback at planning.
- **8.33 kHz channel spacing:** 🟩 **not applicable** — 8.33 kHz is an ICAO EUR mandate; the UAE uses **25 kHz** VHF spacing.
- **Datalink (CPDLC):** 🟧 **CPDLC available** in the Emirates upper airspace for equipped aircraft (VHF voice primary); confirm active FL band, sectors and login at planning. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** underpins the surveillance service. Confirm equipage on the OFP.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is handed sequentially across the **"U.A.E Radar"** area sectors and the relevant approach unit; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** UAE **AIS/FIS** (GCAA) for information service.
- **Language:** 🟩 **English** (ICAO) throughout.
- **Channel spacing:** 🟩 **25 kHz** VHF (no 8.33 kHz mandate).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **not implemented** in the European sense — a dense **fixed ATS-route network** with tactical vectoring around the Dubai/Abu Dhabi terminal complex. Plan the published ATS-route/RNAV structure.
- **Airway spine:** the Gulf trunk routes feed the UAE terminals; 🟥 note that **routing is currently constrained to managed corridors** linking Saudi Arabia and Oman because of the conflict-zone situation (§10) — the flyable route set is smaller than the published network and changes by NOTAM. Confirm at planning.
- **Major fixes / entry-exit points:** the FIR-boundary transition fixes toward Bahrain/Muscat/Jeddah (the Tehran/mid-Gulf boundary is currently avoidance-relevant) and the Dubai/Abu Dhabi TMA arrival transitions; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Abu Dhabi/Zayed Intl (OMAA, bridge hub)**, **Dubai Intl (OMDB)**, **Al Maktoum/Dubai World Central (OMDW)**, **Sharjah (OMSJ)**, **Al Ain (OMAL)**, **Ras Al Khaimah (OMRK)**, **Fujairah (OMFJ)**, **Al Bateen (OMAD)**. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 mostly **low desert and sea** — very benign across the western/central FIR and the Gulf. The exception is the **Hajar Mountains** along the eastern (Oman-border) edge, rising to **Jebel Jais (~1,934 m / ~6,345 ft)** near Ras Al Khaimah/Fujairah — the highest terrain in the UAE and a terminal consideration for OMFJ/OMRK approaches.
- **Boundary terrain:** the higher Hajar terrain continues east across the **Muscat FIR (OOMM)** boundary in Oman — noted so the boundary is explicit; not a cruise factor.
- **Driftdown / depressurisation escape:** 🟩 not a cruise-level constraint — the very high diversion-field density removes any terrain-limited escape problem across the FIR; relevant only to terminal terrain-clearance on the eastern (Hajar) approaches.
- **Cold-temperature altitude corrections:** 🟩 not relevant — hot climate; the operational temperature driver here is **high-temperature/density-altitude** performance in summer (see OM E High-Elevation/hot-and-high context and the airport briefs), not cold-temperature correction.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Abu Dhabi/Zayed Intl | **OMAA** | Bridge hub / primary dep-return alternate | [OMAA brief](../../../destinations/middle-east/united-arab-emirates/omaa/index.md) |
| Dubai Intl | **OMDB** | In-FIR alternate — major, H24 | Brief to build 🟧 |
| Al Maktoum/Dubai World Central | **OMDW** | In-FIR alternate — long runway, H24, cargo | Brief to build 🟧 |
| Sharjah | **OMSJ** | In-FIR alternate — H24, cargo | Brief to build 🟧 |
| Al Ain | **OMAL** | In-FIR alternate (interior/E) | Brief to build 🟧 |
| Ras Al Khaimah | **OMRK** | Minor in-FIR alternate (N) | Brief to build 🟧 |
| Fujairah | **OMFJ** | In-FIR alternate — **east coast, outside the Gulf** (Gulf-of-Oman side; useful if Gulf routing constrained) | Brief to build 🟧 |

- **Coverage note:** 🟩 extremely dense — a suitable field is always within short range, so **ETP/critical-point planning is not a driver** in this radar-controlled FIR. **OMFJ (Fujairah)** is notable as the **east-coast field on the Gulf-of-Oman side of the Hajar range**, useful when Gulf/Strait-of-Hormuz routing is constrained by the conflict-zone picture (§10).

---

## 10. Special-use airspace

> 🟥 **CONFLICT-ZONE / LIVE-SECURITY AIRSPACE — this section is perishable. Re-check the current CZIB/NOTAM picture at planning (§11); the state of the Gulf situation changes rapidly.**

- **Conflict-zone exposure (the headline hazard):** 🟥 the Emirates FIR sits directly on the **Strait of Hormuz and the Tehran-FIR (OIIX) boundary down the middle of the Gulf**, at the centre of the ongoing Iran-related regional tension. As at build date, an **EASA CZIB advises operators to avoid Bahrain (OBBB), Kuwait (OKAC), Qatar (OTDF) and UAE (OMAE) airspace and the Gulf of Oman west of 58°E, at all altitudes**, and states/operators (e.g. France) have issued caution NOTAMs. Reported hazards include **missile/drone activity and falling intercept debris**, and **GPS spoofing/jamming across the FIR**. UAE airspace has been **closed and reopened several times** and traffic uses **managed corridors** — the flyable route set is reduced and changes by NOTAM. *(This is durable awareness that OMAE is a live-risk FIR; the specific advisory reference and validity are live data — confirm the current CZIB/NOTAM state at planning before relying on any routing.)*
- **Military restricted / danger / prohibited:** 🟧 the UAE publishes extensive **restricted/danger/prohibited (OM-R/OM-D/OM-P) areas** (military ranges, sensitive sites) across the FIR; activation and status are AIP/NOTAM-published — confirm active at planning.
- **Overflight-permit / diplomatic considerations:** 🟧 standard UAE civil operation for a normal hub transit, **but** current regional restrictions and any operator/state-specific routing directives apply — confirm at planning.

> **SUA / conflict currency:** re-check the **EASA CZIB, state NOTAMs (UAE + surrounding), ICAO Conflict Zone Information Repository and operator routing policy** at planning — the §10 picture is durable awareness, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO standard — squawk **7600**, continue per the ICAO/UAE IFR comms-failure rules (last acknowledged clearance / filed route and levels), attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any UAE refinement at **UAE AIP ENR 1.8 / GEN**; note that in the current security environment, deviating from a cleared/managed corridor without coordination carries elevated risk — comply with ATC and published contingency routings.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic offset table applies.
- **GNSS degradation contingency:** 🟧 with **GPS spoofing/jamming reported**, be prepared for FMS position drift / spurious terrain or nav alerts — cross-check with DME/DME/IRU, advise ATC, and follow OM E guidance on GNSS-interference response.
- **Seasonal hazards (durable):**
  - **Summer heat & density altitude (Jun–Sep)** — extreme temperatures; a **hot-and-high performance driver** at the terminals (see OM E and airport briefs).
  - **Dust/sand (shamal, haboob) and reduced visibility** — blowing dust events reduce visibility and can trigger LVO; a terminal driver.
  - **Convection is limited** but occasional; the winter **shamal** brings strong NW winds and dust.
  - **Volcanic ash / space weather:** not a planning driver at these latitudes.

> **Pull at planning (T-2h):** the **current conflict-zone picture — EASA CZIB, UAE + surrounding-state NOTAMs, ICAO CZIR, operator routing policy** (the mission-critical item for this FIR), enroute NOTAMs and active restricted/danger areas, SIGMET/AIRMET (dust, convection), GNSS-interference advisories, CPDLC active-band/login status, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **Conflict-zone status is live** — the §10 advisory/routing picture (EASA CZIB, managed corridors, closures) must be re-verified at planning; do not treat this file's snapshot as current.
- Exact **ANSP unit names / AoR split** (Emirates area control vs dans Dubai vs Sharjah/Abu Dhabi approach) and the **Class-A floor / class per band** (UAE AIP ENR 2.1/2.2) — stated at summary level; confirm.
- **CPDLC** active FL band, participating sectors and login procedure — confirm per-sector at planning.
- Enroute **PBN spec** (RNAV 5) and terminal RNAV 1/RNP 1 details — confirm against UAE AIP ENR/AD.
- **GNSS spoofing/jamming** current extent and any conventional-navaid fallback procedure — confirm at planning.
- **OMDB, OMDW, OMSJ, OMAL, OMRK, OMFJ** have no OM C airport briefs yet — build if they become planned alternates (OMFJ notably as the east-coast/Gulf-of-Oman diversion).
- **No dedicated Middle East area brief** in `Airspace/General/` yet — parent-area link is provisional; build a Middle East / Gulf area brief and re-point.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **UAE AIP — ENR sections (GCAA)**: ENR 2.1 (FIR/UIR & control-area structure, airspace classes), ENR 1.x (RVSM, PBN, comms-failure), ENR 3.x (ATS routes), ENR 5.x (restricted/danger/prohibited areas). Primary source of record for FIR structure, classes and routes — https://www.gcaa.gov.ae (retrieved 2026-07-25).
- **GCAA — Integrated Airspace Master Plan** (UAE airspace policy/structure) — https://www.gcaa.gov.ae/en/epublication/EPublications/Airspace%20Policy/INTEGRATED%20AIRSPACE%20MASTER%20PLAN%20%E2%80%93%20ISSUE%2001.pdf (retrieved 2026-07-25).
- **ICAO MID regional supplementary procedures (Doc 7030)** — MID RVSM (FL290–410), regional route/comms/PBN procedures.
- **Metar-Taf — Emirates FIR (OMAE)** (adjacency: Bahrain OBBB / Tehran OIIX / Muscat OOMM / Jeddah OEJD; centre, area, in-FIR aerodrome list) — https://metar-taf.com/fir/OMAE-Emirates (retrieved 2026-07-25). *Tier-4 corroboration of adjacency and containment.*
- **Safe Airspace (OPSGROUP) — United Arab Emirates** (conflict-zone / risk picture; EASA CZIB 2026-07R1, state NOTAMs, GPS spoofing, managed corridors) — https://safeairspace.net/united-arab-emirates/ (retrieved 2026-07-25). *Advisory/live source — re-check at planning; §10/§11 currency depends on it.*
- **VATSIM Arabian vACC — UAE / Emirates FIR (OMAE) controller material** (FIR sectorisation up to seven sectors / eight "U.A.E Radar" CTR positions from FL150; Arabian vACC covers OMAE/OOMM/OTDF) — https://library.arabian-vacc.com/enroute/uae/general_information/ and https://vatame.vatme.net/vacc/OMAE (retrieved 2026-07-25). *Tier-4 corroboration only — FIR structure/sectorisation and the "U.A.E Radar" FL150+ area-control picture cross-checked here.*
- Companion OM C file: [`../../../Airports/Middle East/United Arab Emirates/OMAA — Zayed Intl/OMAA — Briefing.md`](../../../destinations/middle-east/united-arab-emirates/omaa/index.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_FIR Briefing Template.md`. Emirates FIR (OMAE) containing OMAA + OMDB/OMDW; adjacent FIRs (Bahrain W, **Tehran N — mid-Gulf/sensitive**, Muscat E, Jeddah SW); GCAA/Sheikh Zayed ANC + dans area/terminal control; "U.A.E Radar" seven-sector/FL150+ picture (VATSIM Arabian vACC, tier-4); RVSM/RNAV5/RNP1/RNP APCH/ADS-B referenced to OM E; CPDLC availability flagged; Hajar Mountains terrain; dense diversion field set incl. OMFJ east-coast note; **conflict-zone SUA (EASA CZIB / Strait of Hormuz / GPS spoofing / managed corridors) flagged 🟥 as live/perishable, re-check at planning**; hot-and-high + dust seasonal. Parent Middle East area brief not yet built (flagged). |
