# Sal Oceanic (GVSC) — FIR Briefing

**Scope:** single FIR — the **Cabo Verde archipelago** (Sal, Boa Vista, São Vicente, Santo Antão, Santiago/Praia, Maio, São Nicolau, Fogo, Brava) and the surrounding **mid-Atlantic ocean**, the mid-corridor link of the ICAO **EUR/SAM Corridor** organised track system between Europe/Africa and South America · **Parent area brief:** [Africa](../../africa.md) 🟩 · **Sister brief:** [EUR/SAM Corridor](../../eur-sam-corridor.md) 🟩 — the authoritative source for the corridor's separation regime, routing and ETOPS diversion picture, referenced throughout rather than re-derived · **Adjacent FIRs:** Dakar Oceanic (GOOO) S/SE · Dakar Terrestrial/Continental (GOOT) SE · Santa Maria Oceanic (LPPO) N · Canarias (GCCC) NE
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — RVSM/PBN/separation regime verified against the ICAO SAT Doc 003/002 and ASA Cabo Verde eAIP sources already used in the EUR/SAM Corridor brief; FIR/TMA-specific detail here is corroborated via a tier-4 source and flagged 🟧 where unverified

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Sal Oceanic FIR is an **oceanic — procedural** FIR (no conventional radar over open ocean); it is **controlled airspace from the surface up** in its lower layer (Class C to the ground), a contrast with the SW-Indian-Ocean FIRs in this set, which are largely uncontrolled below their upper Class A band. This FIR's defining role is as the **mid-Atlantic link of the EUR/SAM Corridor** — most of the separation-regime, routing and ETOPS-diversion detail is **owned by the [EUR/SAM Corridor brief](../../eur-sam-corridor.md)** and only summarised/applied here. Routings and levels here are planning context — file and fly the SimBrief/current-AIRAC-validated string and comply with the oceanic clearance and assigned Mach. Terminal procedures for aerodromes inside the FIR live in the airport briefings (§9). Live data is pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **GVSC** — Sal Oceanic FIR |
| Controlling ATSU / ANSP | **Sal ACC ("Sal Control")**, **ASA — Aeroportos e Segurança Aérea** (Cabo Verde's airports & air-safety agency; the corridor's Cabo Verde-side ANSP, per the EUR/SAM Corridor brief) |
| Airspace class & vertical limits | 🟧 Upper **FIR FL245/UNL, Class A**; lower **FIR GND/FL245, Class C** — i.e. **controlled to the surface**, unlike the SW-Indian-Ocean FIRs in this set. Overlaid ATS-route layer: Class A above FL195, Class C below |
| RVSM | 🟥 Applicable **FL290–FL410 inclusive** (SAT Doc 003 §4.6.D; ASA ENR 1.3.4.1) — see the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §4 for the full regime |
| PBN environment | 🟥 **RNAV 10 (RNP 10) minimum** for the current 50 NM lateral standard; **RNP 4 + RCP240 + RSP180** for the reduced 2026 PBCS minima — see the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §4 (not re-derived here) |
| Surveillance & datalink | 🟧 **Oceanic procedural** — no conventional radar. Space-based ADS-B is confirmed live in **Dakar Oceanic** (since 2022); **extension to Sal Oceanic itself is not confirmed here.** FANS 1/A CPDLC + ADS-C required for PBCS reduced separation, not a hard mandate to enter (per the corridor brief) |
| Primary language & comms | 🟥 **HF primary** (MWARA **SAT-1** family — primary **8861**, secondary **6535 kHz** 🟧) + SATVOICE; **SELCAL** required; VHF only near the islands |
| Key hazard(s) | 🟥 **Thin mid-Atlantic ETOPS diversion coverage** (the GVAC/SBFZ ETP pair, owned by the corridor brief) · **Fogo volcano** (active, ash-advisory watch item) · Saharan Air Layer dust / ITCZ convection near the African coast-out · HF/space-wx degradation |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟧 | **Oceanic procedural** — no conventional radar over open ocean; **controlled (Class C) from the surface** in the FIR's lower layer, a contrast with the SW-Indian-Ocean FIRs in this set which are largely uncontrolled below their upper band. Terminal towers (Sal/Praia/São Vicente) provide Class C CTR service. |
| Communication coverage (VHF/HF/SATVOICE) | 🟥 | No VHF over open ocean. **HF primary** (SAT-1 family) + SELCAL + SATVOICE/CPDLC, per the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §2/§5. Exact per-station kHz — **verify against the current ASA AIP ENR 3/GEN COM** 🟧. |
| Datalink / surveillance requirement | 🟧 | Not a hard mandate to enter (see corridor brief §4). FANS 1/A CPDLC + ADS-C required for the reduced PBCS minima. Space-based ADS-B confirmed for **Dakar Oceanic only** in the sources used here — **its extension into Sal Oceanic is unconfirmed.** |
| Terrain / MORA / driftdown | 🟧 | Open ocean — no enroute terrain. Cabo Verde's islands are volcanic; **Fogo (Pico do Fogo, ≈2,829 m/9,281 ft)** is an **active volcano** with a 2014–15 eruption on record — a terminal-area and ash-advisory watch item, not a cruise-terrain factor. |
| Diversion-aerodrome coverage | 🟥 | Reasonable **inter-island** spread (Sal/Praia/Boa Vista/São Vicente); the **genuine mid-Atlantic ETOPS gap** lies west of Cabo Verde toward Brazil — owned by the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §8 (GVAC⇄SBFZ ETP pair). §9. |
| Seasonal / environmental | 🟧 | **ITCZ convection** and **Saharan Air Layer dust** near the African coast-out (roughly June–Oct); Cabo Verde sits in the **Atlantic tropical-cyclogenesis corridor** (tropical waves rolling off Africa, Aug–Oct) — a hazard distinct from the SW Indian Ocean cyclone belt covered in this set's other FIR briefs. §11. |
| Equipment / approval (RVSM, RNP, datalink) | 🟥 | **RVSM approval + RNAV 10 (RNP 10) minimum** required (corridor brief §4); **RNP 4 + RCP240/RSP180 (PBCS)** for the 2026 reduced minima. FANS 1/A (CPDLC+ADS-C) recommended. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Sal Oceanic FIR (**GVSC**) covers the entire **Cabo Verde archipelago** and the surrounding mid-Atlantic ocean between the **Canaries, Dakar and Santa Maria (Azores)** boundaries — the mid-corridor link of the ICAO-defined **EUR/SAM Corridor** (per SAT Doc 003 §1.3, integrated with Canarias, Sal Oceanic, Dakar Oceanic and Atlántico FIRs; see the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §3).
- **Vertical split:** 🟧 upper **FIR FL245/UNL, Class A**; lower **FIR GND/FL245, Class C** — this FIR is **controlled airspace all the way to the surface**, unlike the SW-Indian-Ocean FIRs in this Africa FIR set (Antananarivo/Mauritius/Seychelles), which are largely **Class G below their upper band**. An overlaid ATS-route layer runs Class A above FL195 / Class C below. **Transition altitude at Sal (GVAC) 7,000 ft.**
- **Adjacent FIRs (by boundary, confirmed against a public adjacency table and the corridor brief):**
  - **S/SE — Dakar Oceanic (GOOO, ASECNA/Senegal).** The corridor's core controller — see the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §3.
  - **SE — Dakar Terrestrial/Continental (GOOT, ASECNA/Senegal).** ASECNA's domestic Senegal FIR, distinct from Dakar Oceanic — a boundary not covered in the corridor brief but confirmed via a tier-4 source here.
  - **N — Santa Maria Oceanic (LPPO, NAV Portugal/Azores).** Hands to the North Atlantic; the corridor's Sal⇄Santa Maria boundary carries mandatory entry/exit points (**ULTEM, BAMUX, ERNEK, TEGTO, OBOMO, RUKAV, VEPOP, XIBOT** — ASA ENR 1.3.4.8).
  - **NE — Canarias (GCCC, ENAIRE/Spain).**
- **Entry/exit & transition points:** the **Dakar Oceanic ⇄ Sal Oceanic** boundary (west of UN741) requires non-ADS-C/CPDLC aircraft to overfly established compulsory points; ADS-C/CPDLC-equipped aircraft may use geographic-coordinate points (ASA ENR 1.3.4.8.2, per the corridor brief §3).
- **Sectorisation:** 🟧 the FIR is worked as a **single Sal Control sector** in the sources used here; the corridor's separation regime (SAT Doc 003) governs traffic flow rather than internal ACC sectorisation.

---

## 4. Control & ATSU

- **ATSU:** 🟩 **Sal ACC ("Sal Control")**, **ASA (Aeroportos e Segurança Aérea)** — Cabo Verde's airports and air-navigation-safety agency, confirmed as the Cabo Verde-side ANSP for the EUR/SAM Corridor in the sister brief.
- **Surveillance basis:** 🟧 **oceanic procedural** — no conventional radar over open ocean. Terminal Class C service at Sal (GVAC), Praia (GVNP), Boa Vista (GVBA) and São Vicente (GVSV) is tower/approach-based. Space-based ADS-B is confirmed for **Dakar Oceanic**; whether the same coverage extends into Sal Oceanic is **not confirmed here** — treat surveillance as procedural by default.
- **FIS:** procedural service throughout the oceanic core; terminal towers/approaches handle the island CTRs.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations and in the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §4 (the authoritative source for this corridor's separation minima); this section states which apply in the Sal Oceanic FIR specifically and does not re-derive the full regime.*

- **RVSM:** 🟥 **FL290–FL410 inclusive** (SAT Doc 003 §4.6.D; ASA ENR 1.3.4.1) — RVSM approval mandatory. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md) and the corridor brief §4.
- **PBN / RNP:** 🟥 **RNAV 10 (RNP 10) is the minimum** for the current **50 NM** lateral standard; **RNP 4 (+ RCP240/RSP180)** is required for the **planned-2026 reduced 23 NM (PBCS)** minima — full detail in the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §4. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟩 **not applicable** in this oceanic FIR — standard 25 kHz VHF at the terminals.
- **Datalink (CPDLC / ADS-C):** 🟧 **no hard carriage mandate to enter** (per the corridor brief §4). FANS 1/A CPDLC + ADS-C is required to be assigned the PBCS reduced minima; a datalink outage drops the flight to RNAV10 + HF at 50 NM/10-min MNT, not out of the airspace. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** Mode S standard; **space-based ADS-B confirmed operational in Dakar Oceanic** (since 19 May 2022) — its extension to Sal Oceanic is an open item (§12).
- **ETOPS / long over-water:** this FIR sits at the African-side end of the corridor's **ETOPS-120 committed segment** (GVAC⇄SBFZ ETP pair) — see [`OM E — ETOPS-EDTO Procedures`](../../../../flight-ops/etops-edto.md) and the corridor brief §8.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a transit is worked by **Sal Control** through the oceanic core, with terminal towers/approaches (Sal/Praia/Boa Vista/São Vicente) near the islands; exact frequencies are AIRAC/AIP-dependent — fly the current AIP.
- **HF primary:** 🟥 no VHF over open ocean — **HF** via the **MWARA SAT-1 family** (primary **8861 kHz**, secondary **6535 kHz** 🟧, per the corridor brief §5) is the primary voice medium, shared with Atlántico/Canarias/Dakar ground stations.
- **SELCAL:** 🟥 required — perform a SELCAL check with the controlling HF station after first contact.
- **Language:** 🟩 English (ICAO); Portuguese in local/terminal use.
- **Emergency / guard:** **121.5 MHz**; **123.45 MHz** TIBA/air-to-air; oceanic broadcast **126.9 MHz** (see the corridor brief §5 on the IFBP-to-TIBA transition in the SAT region).

---

## 7. Route structure & entry/exit

- **EUR/SAM Corridor spine (the FIR's primary function):** **UN741** (unidirectional southbound), **UN866** (unidirectional northbound), **UN873** and **UN857** (bidirectional), plus the conventional **B623/UB623** (bidirectional, FL245–FL280) — full flight-level allocation scheme and directionality detail is in the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §6, not re-derived here.
- **Domestic/inter-island layer (beneath the oceanic corridor):** a lower network (the **W11–W47** family) links the islands via **Sal (CVS VOR/DME)**, **São Vicente (SVT NDB)**, **Praia (SNT VOR/DME)** and **Boa Vista (BVT NDB)** — mostly a domestic layer, not the transatlantic corridor traffic.
- **Free Route Airspace:** not a feature of the oceanic core — the corridor's random-routing flexibility is the **AORRA** (Atlantic Ocean Random Routing Area), owned by Dakar Oceanic per the corridor brief §3/§6.
- **Hubs & aerodromes inside the FIR:** 🟩 **Sal — Amílcar Cabral (GVAC)**, the primary international gateway and corridor ETOPS alternate; **Praia — Nelson Mandela Intl (GVNP)**, the capital and secondary international gateway. Also within the FIR (out of this brief's airport scope): Boa Vista (GVBA, Aristides Pereira Intl) and São Vicente (GVSV, Cesária Évora Intl).

---

## 8. Terrain & MORA

- **Open-ocean core:** no enroute terrain — MORA is not a cruise factor across the mid-Atlantic.
- **Island terrain / volcanic hazard:** Cabo Verde's islands are volcanic; **Fogo (Pico do Fogo, ≈2,829 m/9,281 ft)** is an **active volcano** with a documented 2014–15 eruption — relevant to terminal-area operations and ash advisories, not to the oceanic cruise. 🟧 the responsible VAAC for Cabo Verde ash advisories is not confirmed here — see [`OM E — Volcanic Ash Avoidance`](../../../../flight-ops/volcanic-ash-avoidance.md) and confirm at planning.
- **Driftdown / depressurisation escape:** as in the wider corridor, the binding mid-ocean constraint is **diversion-field reach, not terrain** — see the corridor brief §7/§8.
- **Cold-soak / fuel-freeze:** 🟩 not a significant driver on this subtropical/tropical crossing, per the corridor brief §7.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Sal — Amílcar Cabral | **GVAC** | Primary international gateway / corridor ETOPS alternate | [GVAC brief](../../../destinations/africa/cape-verde/gvac/index.md) |
| Praia — Nelson Mandela Intl | **GVNP** | Capital / secondary international gateway | [GVNP brief](../../../destinations/africa/cape-verde/gvnp/index.md) |
| Boa Vista — Aristides Pereira Intl | **GVBA** | Inter-island alternate | No OM C brief yet 🟧 |
| São Vicente — Cesária Évora Intl | **GVSV** | Inter-island alternate | No OM C brief yet 🟧 |

- **Coverage note:** 🟩 reasonable **inter-island** spread across the four Cabo Verde international fields. The **genuine ETOPS gap** is the open-ocean stretch **west of Cabo Verde toward the Brazilian coast** — see the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §8 for the GVAC⇄SBFZ ETP-pair analysis (not duplicated here).

---

## 10. Special-use airspace

- **Conflict / prohibited / risk zones:** 🟩 none — the Cabo Verde/mid-Atlantic crossing is benign for conflict-zone and overflight-permit purposes, consistent with the corridor brief §9.
- **Danger / restricted / military areas:** occasional oceanic danger areas by NOTAM near the islands — pull the active list at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none for the oceanic transit, per the corridor brief §9.

> **SUA / conflict-zone currency:** re-check NOTAMs and the corridor brief's live-data pointer at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Corridor contingency (the authoritative regime):** total-ATC-failure fixed-route reversion, SLOP, and the 15-min MNT contingency longitudinal standard are governed by **SAT Doc 002** — see the [EUR/SAM Corridor brief](../../eur-sam-corridor.md) §10 for the full procedure, not re-derived here.
- **Comms-failure:** squawk **7600**; use **TIBA on 123.45 MHz** (IFBP was withdrawn 31 Dec 2023 in the SAT region, per the corridor brief §5/§10); oceanic broadcast **126.9 MHz**.
- **Seasonal hazards (durable):**
  - **ITCZ / equatorial convection** and **Saharan Air Layer dust outflow** near the African coast-out (roughly June–Oct) — embedded/towering CB and reduced visibility.
  - **Atlantic tropical cyclogenesis** — Cabo Verde sits in the classic **"Cape Verde-type" hurricane genesis region** (tropical waves rolling off West Africa, peak Aug–Oct) — a distinct seasonal hazard from the SW Indian Ocean cyclone belt covered in this set's other FIR briefs. See [`OM E — Adverse Weather and Windshear`](../../../../flight-ops/adverse-weather-and-windshear.md).
  - **HF/GNSS space-weather degradation** — per the corridor brief §11, including its standing data-quality caveat on stale SWPC feeds.

> **Pull at planning (T-2h):** enroute NOTAMs (incl. any PBCS/RLatSM activation notice), SIGMET/AIRMET and the **ITCZ/Saharan-dust/tropical-wave** outlook, **VAAC** advisories for Fogo (confirm responsible centre), space-weather (HF/GNSS, issue-timestamp confirmed per the corridor brief), and the validated SimBrief route with assigned oceanic clearance/Mach. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **Space-based ADS-B extension** to Sal Oceanic FIR itself (confirmed only for Dakar Oceanic in the sources used here).
- **PBCS/RLatSM activation state** and **UN866 directionality** — see the corridor brief §12 for the full list (not duplicated here).
- **HF per-station kHz** (SAT-1 family) — verify against the ASA Cabo Verde AIP ENR 3/GEN COM.
- **Fogo volcano — responsible VAAC** for Cabo Verde ash advisories — not confirmed here.
- **Exact FIR class-letter bands and transition levels** — corroborate the Class C-to-surface structure against the current ASA eAIP (tier-4 sourced here).
- **Dakar Terrestrial (GOOT) boundary** — confirmed via a tier-4 source only; corroborate against the ASECNA eAIP.
- No OM C airport brief yet for **GVBA (Boa Vista)** and **GVSV (São Vicente)** — build if they become planned alternates.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ICAO SAT Doc 003 — Application of Separation Minima in EUR/SAM Corridor, 1st Edition, 25 Nov 2024** — corridor FIR composition, RVSM band, lateral/longitudinal minima current + planned — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2025/SAT%20DOCUMENTS/SAT-Doc-003-EURSAM-corridor-Separation-minima.pdf (retrieved 2026-07-19, reused from the EUR/SAM Corridor brief).
- **ICAO SAT Doc 002 — ATM Operational Contingency Plan for South Atlantic Oceanic FIRs, 1st Edition, in force 08 Feb 2024** — contingency routes/levels, 15-min MNT, SLOP, TIBA/IFBP status — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2025/SAT%20DOCUMENTS/SAT-Doc-002-SAT-Contingency-Plan-Edition-1.pdf (retrieved 2026-07-19, reused).
- **Cabo Verde (ASA) eAIP — ENR 1.3 (IFR rules), eff. 19 MAY 2022 (AIRAC)** — Sal Oceanic RVSM FL290–410, EUR/SAM flight-level allocation scheme, compulsory reporting points — https://eaip.asa.cv/2022-05-19-AIRAC/html/eAIP/GV-ENR-1.3-en-GB.html (retrieved 2026-07-19, reused). *2022 package — verify no newer cycle supersedes.*
- **IVAO — Sal Oceanic FIR Documentation (OPMAN)** — FIR/TMA/CTR structure (Class C to the surface), adjacent-FIR table (incl. Dakar Terrestrial/GOOT), route designators, navaids (CVS/BVT/SVT/SNT), Praia (GVNP) confirmed within GVSC — https://wiki.ivao.aero/en/home/atcoperations/sal_oceanic_fir_documentation (retrieved 2026-07-26). *Tier-4 corroboration only.*
- **Wikipedia — Pico do Fogo** (Cabo Verde's active volcano; 2014–15 eruption) — https://en.wikipedia.org/wiki/Pico_do_Fogo (retrieved 2026-07-26). Public-reference terrain/hazard corroboration only.
- Companion OM C briefs: **[EUR/SAM Corridor](../../eur-sam-corridor.md)** (authoritative for separation/routing/ETOPS), **[Africa area brief](../../africa.md)**; capability topics in `../../../../OM E Operations/`.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial build from `_FIR Briefing Template.md`. Sal Oceanic FIR (GVSC, ASA/Cabo Verde) built as the single-FIR companion to the existing [EUR/SAM Corridor](../../eur-sam-corridor.md) area brief — confirmed **Class C to the surface** (contrast with the SW-Indian-Ocean FIRs in this set), adjacent to Dakar Oceanic/Dakar Terrestrial/Santa Maria Oceanic/Canarias; **RVSM FL290–410 inclusive**, **RNAV10/RNP10 minimum** (RNP4/PBCS 2026 planned), **HF SAT-1 + SELCAL** — all referenced to the corridor brief §4/§5/§6/§8/§10/§12 rather than re-derived; served airports **GVAC (Sal)** and **GVNP (Praia)** confirmed within the FIR; Fogo active-volcano watch item; Cabo Verde-type Atlantic tropical-cyclogenesis + ITCZ/Saharan-dust seasonal hazards distinguished from the SW Indian Ocean cyclone belt. Cross-links: EUR/SAM Corridor brief, Africa area brief, OM E capability topics. Built from ICAO SAT Doc 003/002, ASA Cabo Verde eAIP ENR 1.3, IVAO Sal Oceanic FIR documentation (tier-4), Wikipedia Pico do Fogo. |
