# EUR/SAM Corridor (South Atlantic) — Airspace Briefing

**Scope:** EUR/SAM Corridor — organised South Atlantic oceanic route system (Europe/Africa ⇄ South America) · **FIRs / OCAs covered:** Canarias (GCCC, ENAIRE) · Sal Oceanic (GVSC, ASA/Cabo Verde) · Dakar Oceanic (GOOO, ASECNA/Senegal) · Atlántico (SBAO, DECEA/Brazil)
**Version** v0.1 · **Updated** 2026-07-19 · **Status** Draft — ICAO/AIP-verified; separation-regime transition flagged (PBCS/RLatSM planned 2026 — see §4)

> **Read-me:** Strategic transit reference for the FlightFactor 777v2 in X-Plane 12 (777-300ER is XP12-only), **ETOPS-120** — not a chart or clearance. Routings and levels are planning context; file and fly the SimBrief/current-AIRAC-validated string and comply with the oceanic clearance and assigned Mach. Live data (NOTAMs, SIGMET/ITCZ, space-wx/HF, the day's ETP) is pulled at planning (§11). Open 🟧 items in §12. **Key correction vs common briefing folklore:** the corridor is **not** a hard CPDLC/ADS-C carriage mandate like the NAT DLM — RNAV10 + HF still buys the baseline 50 NM / 10-min procedural separation; datalink is what unlocks the reduced (PBCS) minima (§4). Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIRs / control authorities | **Canarias** (GCCC, ENAIRE — Spain) · **Sal Oceanic** (GVSC, ASA — Cabo Verde) · **Dakar Oceanic** (GOOO, ASECNA — Senegal, the core corridor controller) · **Atlántico** (SBAO, DECEA — Brazil, coast-in) |
| Controlling ATSU(s) & type | **Oceanic — procedural** (no conventional radar over open ocean). Dakar Oceanic runs **space-based ADS-B since 19 May 2022**; CPDLC/ADS-C surveillance where equipped; voice relay via HF radio stations |
| RVSM | 🟥 Applicable **FL290–FL410 inclusive** — RVSM approval required (SAT Doc 003 §4.6.D; ASA ENR 1.3.4) |
| Separation standard | **Current:** 🟩 Lateral **50 NM** (RNAV10 / RNP10 required); Longitudinal **10 min** Mach Number Technique (MNT). **Planned 2026 (PBCS/RLatSM):** lateral **23 NM** and distance-based 30/50 NM with **RNP4 + RCP240 + RSP180** — *not yet operational per SAT Doc 003* 🟧 |
| Datalink mandate | 🟧 **No absolute carriage mandate to enter.** FANS 1/A **CPDLC + ADS-C required to obtain PBCS reduced separation** and is the de-facto norm (Dakar fleet CPDLC ≈97.5 %). RNAV10 + HF = baseline 50 NM / 10-min |
| Primary comms | 🟥 **HF primary** (MWARA **SAT-1** family — primary **8861**, secondary **6535 kHz** 🟧) + **SATVOICE**; **SELCAL** required; **CPDLC/SATCOM** where equipped; **VHF only at the extremities**. TIBA/emergency **123.45 / 121.5**, oceanic broadcast **126.9 MHz** |
| Key hazard(s) | Mid-ocean **thin ETOPS diversion coverage** (headline TEM) · procedural/non-radar discipline · **ITCZ / equatorial convection** near coast-out · **HF degradation** (space-wx) · separation-regime transition (mixed RNP4/RNP10 fleet) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Overflight / conflict-zone risk | 🟩 | Open-ocean oceanic airspace; no overflight-permit states on the corridor crossing. Coastal-state entry handled at the domestic FIR / arrival. Re-check live bulletins at §11 regardless. |
| Communication coverage (VHF/HF/SATVOICE) | 🟥 | No VHF over open ocean. **HF primary** (SAT-1 family) + SELCAL + SATVOICE/CPDLC. HF subject to space-wx blackout. Exact per-station kHz **verify against state AIP ENR 3 / GEN COM** 🟧. |
| Datalink / surveillance requirement | 🟧 | **Not** a hard mandate to enter. FANS 1/A CPDLC + ADS-C **required for PBCS reduced separation**; Dakar space-based ADS-B live since 2022. Baseline RNAV10 + HF procedural still permitted. |
| Terrain / MORA / driftdown | 🟩 | Open ocean — no enroute terrain across the corridor core. Driftdown/ETP is **diversion-field-limited, not terrain-limited** mid-ocean. Coast-out (Canaries)/coast-in (NE Brazil) terrain handled in the airport briefings. |
| Diversion-airfield coverage | 🟥 | **Sparse, ETP-driven — the mission-critical item.** ETOPS-120 committed segment; ETP pair **GVAC Sal / SBFZ Fortaleza**. Mid-ocean stretch has the thinnest coverage — see §8. |
| Seasonal / environmental | 🟧 | **ITCZ / equatorial convection** (embedded CB, seasonal band migration) near the African coast-out; HF/GNSS space-weather degradation. SWPC feed-staleness caveat at §11. |
| Equipment / approval (RVSM, RNP, datalink) | 🟥 | **RVSM approval + RNAV10 (RNP10) minimum** required. **RNP4 + RCP240/RSP180 (PBCS)** needed for the reduced 2026 minima. FANS 1/A (CPDLC+ADS-C). |

---

## 3. Airspace structure

- **What the corridor is:** the **EUR/SAM Corridor** is the ICAO-defined organised South Atlantic route system linking Europe/Africa with South America. Per **SAT Doc 003 §1.3** it "is integrated by the defined areas of **Canaries FIR, Sal Oceanic FIR, Dakar Oceanic FIR and Atlántico FIR**" and comprises **a group of fixed airways** *plus* **a random-route area** (the **Atlantic Ocean Random Routing Area — AORRA**). Both the fixed and random areas are covered by the corridor separation regime.
- **FIRs / OCAs & controlling ATSU:**
  - **Canarias (GCCC)** — Canarias ACC, **ENAIRE** (Spain). Northern gateway; where the corridor meets the Canaries/Casablanca/Lisbon domestic and Santa Maria oceanic structure.
  - **Sal Oceanic (GVSC)** — Sal ACC, **ASA** (Cabo Verde). Mid-corridor; hands off to Santa Maria via compulsory boundary points (§5).
  - **Dakar Oceanic (GOOO)** — Dakar ACC, **ASECNA** (Senegal). **The core corridor controller** — carries the bulk of the fixed-route and AORRA traffic; runs **space-based ADS-B** and the MNT regime.
  - **Atlántico (SBAO)** — Atlántico/Recife ACC, **DECEA** (Brazil). Coast-in; hands the flight into the Brazilian domestic/SBGR arrival flow.
- **Classes & level bands:** oceanic control areas — controlled airspace. **RVSM FL290–FL410** inclusive (§4). Fixed-route spine + AORRA random area to the west of UN741.
- **Entry/exit & transition points (procedural, compulsory where no datalink):**
  - **Sal Oceanic ⇄ Santa Maria** boundary: **ULTEM, BAMUX, ERNEK, TEGTO, OBOMO, RUKAV, VEPOP, XIBOT** (ASA ENR 1.3.4.8 — mandatory entry/exit points, published in both Cabo Verde and Portugal AIP).
  - **Dakar Oceanic ⇄ Sal Oceanic** boundary, west of UN741: non-ADS-C/CPDLC aircraft must overfly the established compulsory entry/exit points; **ADS-C/CPDLC-equipped aircraft may use geographic-coordinate points** (ASA ENR 1.3.4.8.2).
  - Datalink-equipped flights should have a live **CPDLC connection + ADS-C contract** established before the oceanic boundary; log-on address per the day's flight docs 🟧.

---

## 4. Equipment, approvals & separation

**This is the section most often mis-briefed. The corridor is in a documented transition (SAT Doc 003, 1st Ed Nov 2024): the *current* operational regime is 50 NM / 10-min procedural; the *reduced* PBCS regime (RLatSM 23 NM etc.) is "planned for 2026" and is being rolled out state-by-state — treat it as coming, not yet the default.**

- **RVSM:** 🟥 **FL290–FL410 inclusive**, 1000 ft between RVSM-approved aircraft (SAT Doc 003 §4.6.D; ASA ENR 1.3.4.1). Non-RVSM only by continuous climb/descent through the band or specific exemption. RVSM approval mandatory.
- **PBN / RNP — the navigation floor:**
  - 🟥 **RNAV 10 (RNP 10) is the minimum** for the standard **50 NM** lateral separation (SAT Doc 003 App A.1; ASECNA state report).
  - 🟧 **RNP 4** is required (with RCP240/RSP180) for the **reduced 23 NM lateral** and **30 NM distance-based longitudinal** PBCS minima — **planned 2026**, not yet operational corridor-wide.
- **Lateral separation (SAT Doc 003 App A.1):**

  | Minimum | Requirement | Status |
  |---|---|---|
  | **50 NM** (non-intersecting & intersecting) | **RNP 4 or 10** | 🟩 **Current standard** |
  | **23 NM** (RLatSM) | **RCP 240 + RNP 4 + RSP 180** (PBCS) | 🟧 **Planned 2026** |
  | **20 NM** | RCP 240 + RNP 4 + ATS surveillance (ASECNA **ASEPS** via space-based ADS-B) | 🟧 **Planned 2026** |
  | 15 NM | VHF + RNP 2/GNSS, ≤15 NM from common point below FL195 | Canarias low-level only — not our cruise |

- **Longitudinal separation (SAT Doc 003 App A.2/A.3; ASECNA state report):**
  - 🟩 **Current standard: 10 minutes with Mach Number Technique (MNT)** — same/diverging track, reported over a common point (MNT compensation implemented in Dakar FIR 2 Sep 2024).
  - 15 min HF (procedural/contingency baseline); 5-min time and 50/30/25/15 NM **distance-based** minima all require **RCP240/RSP180 + ADS-C** and are **planned 2026** (DECEA/Atlántico 25/15 NM ADS-C climb-descend targeted **April 2026** 🟧).
  - During distance-based control, if an ADS-C periodic report is missed, ATC acts within **3 min** to re-establish comms and reverts by **6 min** (SAT Doc 003 §4.11).
- **Mach Number Technique:** 🟥 adhere to the **assigned true Mach**; request ATC approval before any change. Advise ATC if performance prevents holding the assigned Mach in climb/descent (SAT Doc 003 §4.14–4.15). This anchors longitudinal separation in the non-radar core.
- **Datalink — the honest picture:** 🟧 **no published hard CPDLC/ADS-C carriage mandate to enter** (unlike the NAT Data Link Mandate). FANS 1/A **CPDLC + ADS-C is required to be assigned the PBCS reduced minima** and is now near-ubiquitous — Dakar-FIR fleet (Jan–Oct 2024): **CPDLC 97.5 %, RCP240 58.3 %, RSP180 57.8 %, RNP4 85.9 %, RNP10 98.7 %, ADS-B 98.8 %**. Fly it datalink-connected; a datalink outage drops you to RNAV10 + HF at 50 NM / 10-min MNT, not out of the airspace.
- **Transponder / ADS-B:** Mode S standard; **space-based ADS-B operational in Dakar Oceanic** (since 19 May 2022), underpinning the ASEPS 20 NM programme.
- **Fleet note (OM B → B77W):** the FF777v2 300ER is RVSM/RNAV10-capable and, if the operator approval is on file, RNP4/RCP240/RSP180-capable — so it can be *planned* onto the reduced PBCS minima as they come online. Confirm FANS 1/A + SELCAL serviceable pre-departure.

---

## 5. Communications

- **HF primary:** 🟥 no VHF over the open ocean — HF is the primary voice medium, via the **MWARA SAT-1** family. Primary **8861 kHz**, secondary **6535 kHz**; family also includes (as published) 3452 / 5565 / 13357 / 17955 kHz among others, shared by the ground stations **Atlántico (Recife), Canarias, Dakar and Sal** 🟧 *(MWARA allocations are tier-4 supplementary — verify exact per-station kHz against state AIP ENR 3 / GEN COM and the day's flight docs).*
- **SELCAL:** 🟥 required — perform a **SELCAL check** with the controlling HF station after first contact, then silent-monitor.
- **SATVOICE / CPDLC / SATCOM:** second long-range medium and datalink relay; FANS 1/A CPDLC is the working data channel where equipped and the primary mode for PBCS traffic.
- **VHF coverage:** only at the extremities — departure/arrival domestic sectors and near the island/coastal stations (Canaries, Sal, coastal Senegal, NE Brazil). None across the mid-ocean.
- **Position reporting (procedural):** report position over **compulsory oceanic waypoints** (voice/HF or CPDLC) where ADS-C does not cover; include the next-FIR entry-point estimate and destination ETA in the last report before a boundary, and contact the adjacent FIR **≥10 min** before the boundary (SAT Doc 002 §1.10.2). ADS-C periodic contracts substitute where the datalink is up.
- **Broadcast / emergency frequencies:** oceanic in-flight broadcast **126.9 MHz**; **TIBA 123.45 MHz**; emergency **121.5 MHz** (243.0 UHF if equipped). The IATA **IFBP notice was withdrawn 31 Dec 2023** — the SAT region now uses **TIBA** (ICAO Annex 11, Attachment B) as the preferred broadcast procedure (SAT Doc 002).

---

## 6. Routing & levels

- **Fixed-route spine (the corridor airways):** four ATS routes plus the random area (ASA ENR 1.3.4.7; ASECNA state report):
  - **UN741** — **unidirectional SOUTHbound.**
  - **UN866** — **unidirectional NORTHbound** (bidirectionality activation targeted **23 Jan 2025** per SAT IMG — confirm current directionality at planning 🟧).
  - **UN873** — **bidirectional.**
  - **UN857** — **bidirectional.**
  - **AORRA** — Atlantic Ocean Random Routing Area, west of UN741 (Dakar shows random routings as the single largest share of its traffic, ≈31 %).
- **Flight-level allocation scheme (ASA ENR 1.3.4.7.2):**
  - **UN873 & UN857 (bidirectional):** Southbound **even** (400/380/360/340/320/300); Northbound **odd** (410/390/370/350/330/310/290).
  - **UN741 & UN866 (unidirectional):** even and odd levels used **indistinctly** in the single permitted direction.
  - Operators are requested to file to this scheme (ENR 1.3.4.7.2.3).
- **Typical EDDF→SBGR segment (planning context, not a clearance):** coast-out Iberia/Portugal … **PON → DIDAK → NTS → LOTEE → STG → DEMOS → UN741 (NELSO … EDUMO … ERUGU) → UZ61 REDAD → UZ21 VUNOX** → coast-in NE Brazil → **SANPA1A** into São Paulo (SBGR). Southbound on **UN741** — consistent with its unidirectional-south designation. *(Fly the current-AIRAC / SimBrief string, don't substitute waypoints.)*
- **Free Route Airspace:** not a corridor feature — random flexibility here is the **AORRA**; FRA proper applies in the adjacent European domestic airspace. The oceanic clearance assigns the actual route/level/Mach.
- **Typical level/flow:** most corridor demand sits **FL340–FL380** (Dakar: >56 % of demand in that band). Plan a step-climb within the even/odd allocation as weight reduces; request via CPDLC/HF. FL410 is the RVSM ceiling.

---

## 7. Terrain, MORA & driftdown

- **Open-ocean core:** no enroute terrain across the corridor — **MORA is not a cruise factor** mid-ocean.
- **Driftdown / depressurisation escape:** the binding constraint mid-corridor is **diversion-field reach, not terrain** — an engine-out or depressurisation drives you to an ETP alternate over open water. Driftdown ceiling is comfortably above the sea; the real question is *range to a runway* (§8).
- **Coast-out / coast-in terrain:** high terrain exists only at the ends — the **Canary Islands** (Teide ~12,200 ft) on the northern coast-out and the low NE-Brazil coast on coast-in — both handled in the respective airport briefings, not the oceanic cruise.
- **Cold-soak / fuel-freeze:** 🟩 **not a significant driver** on this equatorial/tropical crossing — SAT stays relatively warm compared with the polar sectors, so Jet A-1 freeze is not the concern it is on the Arctic routes. Monitor tank temp per normal SOP; expect ample margin.

---

## 8. Diversion & enroute alternates

**The mission-critical section.** ETOPS-120 committed segment; the mid-ocean stretch between the African-side and Brazilian-side fields is where diversion coverage is thinnest — the **headline TEM of the whole leg**. Compute the actual ETPs and their fuel/time on the SimBrief OFP; the field set below is durable context.

| Airfield | ICAO | Side | Role | Notes (briefing?) |
|---|---|---|---|---|
| Amílcar Cabral, Sal | **GVAC** | African / mid-ocean | **ETP-pair field**, primary African-side ETOPS alternate | Long runway, H24, corridor gateway. **Brief exists** — [GVAC — Amilcar Cabral](../destinations/africa/cape-verde/gvac/index.md) |
| Fortaleza | **SBFZ** | Brazilian / coast-in | **ETP-pair field**, primary Brazilian-side ETOPS alternate | NE Brazil coast-in gateway. Brief to build (South America) 🟧 |
| Dakar–Blaise Diagne | **GOBD** | African coast | African coast-out alternate | Modern hub, long runway. Stub exists — Africa/Senegal 🟧 |
| Fernando de Noronha | **SBFN** | Mid-ocean (island) | Mid-Atlantic island alternate | Short/limited RFF/hours — **verify suitability** 🟧; no brief |
| Recife | **SBRF** | Brazilian coast-in | Coast-in alternate (alt to SBFZ) | Full international; brief to build 🟧 |
| São Paulo–Guarulhos | **SBGR** | Destination | Arrival | Destination — brief to build (South America) 🟧 |
| Campinas–Viracopos | **SBKP** | São Paulo area | Destination alternate | Brief to build 🟧 |

- **ETP / equal-time-point considerations:** 🟥 the committed **ETOPS-120** segment is bracketed by the **GVAC ⇄ SBFZ** ETP pair. The OFP-provided **ETP1 ≈ N0743.5 W03225.5** (verify on the day's OFP 🟧) sits mid-ocean — beyond it the critical alternate flips from the African side to the Brazilian side. Confirm each ETP's decompression and engine-out driftdown fuel/time on the SimBrief OFP, and that **GVAC and SBFZ meet ETOPS-alternate weather + RFF minima** at the planned times.
- **Between the ETP fields:** SBFN (Fernando de Noronha) is the only true mid-ocean island option and is limited — do not assume it as a usable ETOPS alternate without checking runway/RFF/hours. Treat the mid-ocean stretch as the genuine no-quick-divert window and manage fuel/decision points accordingly.

---

## 9. Special-use airspace & overflight

- **Conflict / prohibited / risk zones:** 🟩 none within the open-ocean corridor FIRs — the South Atlantic crossing is benign for conflict-zone and overflight-permit purposes.
- **Danger / restricted / military areas:** occasional oceanic danger areas / military activity by NOTAM near the coasts (Senegal/Cabo Verde/Brazil/Canaries) — pull live at §11.
- **Overflight-permit / diplomatic considerations:** none for the oceanic transit; coastal-state entry is handled at the domestic FIR / arrival airport (Brazil arrival, Iberia/Canaries departure).

> **Conflict-zone currency:** Re-check ICAO Conflict Zone Information Repository / state NOTAMs and operator routing policy at planning — this list is durable context, not live clearance.

---

## 10. Contingency procedures

South Atlantic oceanic contingency is governed by **SAT Doc 002 (SAT ATM Operational Contingency Plan, 1st Ed, in force 08 Feb 2024)** and the standard ICAO Doc 4444 oceanic in-flight contingency procedures.

- **Obtain a revised clearance first** where possible before deviating.
- **General in-flight contingency (no clearance, per Doc 4444 / SAT Doc 002 §1.10.3):** turn to establish a **9.3 km (5.0 NM)** same-direction parallel offset; maintain assigned level until established if able. Then either **descend below FL290** and hold a **150 m (500 ft)** vertical offset, **OR** hold a **500 ft** vertical offset from normal levels (**1000 ft (300 m) if above FL410**). Squawk as required, lights on, ACAS active; broadcast on **121.5 / 123.45 MHz** and the published frequencies at the start/finish of each manoeuvre.
- **SLOP (Strategic Lateral Offset):** 🟩 enroute flights are **recommended to fly SLOP** (SAT Doc 002 §1.9.1(i)). On a total-ATS-failure contingency message, apply a **2 NM right offset** and maintain present level (§1.10.2, per ICAO Doc 4444 §16.5).
- **Corridor total-ATC-failure regime (SAT Doc 002 Part 2):** 🟥 **all random routing is suspended**; the fixed routes become **unidirectional** (UN741 SB / UN866 NB; UN873 SB-only and UN857 NB-only *during contingency*; UL206 bidirectional; westbound UL375/UL435 at FL320, eastbound at FL310) with **FL310/FL320 reserved for crossing traffic**. **Contingency longitudinal separation = 15 min MNT** (reverting to 10 min MNT once clear). Report over all compulsory points; contact the adjacent FIR **≥10 min** before the boundary.
- **Comms-failure / broadcast:** IFBP withdrawn 31 Dec 2023 → use **TIBA on 123.45 MHz** (ICAO Annex 11 Attachment B); oceanic broadcast **126.9 MHz**; keep a listening watch on the published HF/VHF; relay via ADS/CPDLC/SATCOM if equipped.
- **Weather deviation (ITCZ):** request via CPDLC/HF ("WEATHER DEVIATION REQUIRED", or PAN PAN ×3 if urgent). If no revised clearance is obtainable, follow the Doc 4444 offset/level-change convention and broadcast intentions on 121.5/123.45 — the ITCZ makes this the most likely contingency to actually use (§11).

---

## 11. Seasonal, environmental & live data

- **Seasonal / environmental hazards (durable):**
  - **ITCZ / equatorial convection:** 🟧 the Inter-Tropical Convergence Zone sits across the corridor's African-side latitudes and migrates seasonally; **in boreal summer (July) it lies north of the equator (~5–10 °N)** — over the Dakar/Sal coast-out region — producing **embedded and towering CB, heavy rain and turbulence** at cruise levels. This is the dominant enroute weather hazard and the reason weather-deviation (§10) is the contingency most likely to be exercised. Plan for lateral deviations and a fuel pad through the ITCZ band.
  - **HF / GNSS space-weather degradation:** 🟧 equatorial HF is prone to disturbed-ionosphere fade; solar flares / geomagnetic storms can cause total HF fade-out. Carry HF + SATVOICE/CPDLC redundancy and expect HF quality to vary through the crossing.

> **⚠ Standing data-quality caveat:** SWPC space-weather feeds have a documented history of serving **stale (multi-month-old) data**. When pulling the HF/space-wx check at planning, **confirm the product's issue timestamp** before acting on any GO/NO-GO read — a "quiet" indicator may just be an old file.

> **Pull at planning (T-2h):** enroute NOTAMs (incl. UN866 directionality status and any PBCS/RLatSM activation NOTAM), SIGMET/AIRMET and the **ITCZ position/convective outlook**, VAAC advisories, **space-weather (HF/GNSS) — with issue-timestamp confirmed**, conflict-zone bulletins, the day's **ETP computation and ETOPS-alternate weather (GVAC/SBFZ)**, and the validated SimBrief route with assigned oceanic clearance/Mach. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **PBCS / RLatSM activation state:** SAT Doc 003 marks 23 NM / 30 NM / 20 NM (ASEPS) and 5-min PBCS minima "planned 2026" — confirm which are *operationally in force* on the day (NOTAM/AIC). Baseline remains 50 NM / 10-min MNT.
- **UN866 directionality:** bidirectional activation targeted 23 Jan 2025 — confirm current status.
- **DECEA (Atlántico) 25/15 NM ADS-C** climb/descend minima — implementation targeted April 2026; confirm.
- **HF per-station kHz** (SAT-1 family) — verify against Senegal/ASECNA, ENAIRE, ASA and DECEA AIP ENR 3 / GEN COM; SAT-1 allocation used here is tier-4.
- **Cabo Verde ENR 1.3 currency** — 2022 package reached; check for a newer AIRAC.
- **Datalink log-on addresses / FANS accreditation** for GCCC/GVSC/GOOO/SBAO — pull from the day's flight docs.
- **ETP1 coordinates** (≈N0743.5 W03225.5) and ETOPS-alternate weather (GVAC/SBFZ) — from the day's OFP.
- No OM C airport briefs yet for **GOBD, SBFN, SBRF, SBFZ, SBGR, SBKP** — build if they become primary ETOPS alternates / the destination pair.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ICAO SAT Doc 003 — Application of Separation Minima in EUR/SAM Corridor, 1st Edition, 25 Nov 2024** — corridor FIR composition, RVSM band, lateral 50 NM (RNP4/10) & planned 23/20 NM PBCS, longitudinal 10-min MNT & planned distance-based minima — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2025/SAT%20DOCUMENTS/SAT-Doc-003-EURSAM-corridor-Separation-minima.pdf (retrieved 2026-07-19).
- **ICAO SAT Doc 002 — ATM Operational Contingency Plan for South Atlantic Oceanic FIRs, 1st Edition, in force 08 Feb 2024** — contingency routes/levels, 15-min MNT, general oceanic contingency (5 NM offset / 500-1000 ft), SLOP, TIBA/IFBP status — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2025/SAT%20DOCUMENTS/SAT-Doc-002-SAT-Contingency-Plan-Edition-1.pdf (retrieved 2026-07-19).
- **ASECNA — State Report Dakar FIR (GOOO), SAT/SG2 IP05F, 9–12 Dec 2024** — current sep minima, fleet equipage, space-based ADS-B (op. 19 May 2022), route/level demand — ICAO WACAF meeting docs (retrieved 2026-07-19).
- **Cabo Verde (ASA) eAIP — ENR 1.3 (IFR rules), eff. 19 MAY 2022 (AIRAC)** — Sal Oceanic RVSM FL290–410, EUR/SAM flight-level allocation scheme, compulsory reporting points, ADS-C/CPDLC boundary rules — https://eaip.asa.cv/2022-05-19-AIRAC/html/eAIP/GV-ENR-1.3-en-GB.html (retrieved 2026-07-19). *2022 package — verify no newer cycle supersedes.*
- **MWARA SAT-1 HF family** (primary 8861 / secondary 6535 kHz) — tier-4 supplementary; corroborate exact kHz against state AIP ENR 3 / GEN COM 🟧.
- Companion OM C airport briefs: `../Airports/Africa/Cape Verde/GVAC — Amilcar Cabral.md` (+ SBFZ/SBGR/SBKP to build). Sister sector: `North Atlantic.md`.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-19 | Ported from K Global First Officer library into current OM C airspace template (anonymised; sources/changelog split out; cross-links re-pathed to OM C). Built from ICAO SAT Doc 003/002 + ASECNA Dakar-FIR state report + Cabo Verde ASA eAIP ENR 1.3. Corridor FIRs, fixed-route/AORRA structure, RVSM, 50 NM/10-min-MNT current regime with PBCS/RLatSM-2026 transition flagged, HF/SELCAL comms, ETOPS-120 diversion coverage (GVAC/SBFZ ETP pair), ITCZ + space-wx hazards, contingency. Corrected the "datalink mandatory to enter" folklore against primary sources. |
