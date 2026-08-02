# Canarias (GCCC) — FIR Briefing

**Scope:** single FIR — the Canary Islands plus a very large mid-Atlantic oceanic sector off NW Africa · **Parent area brief:** [Europe (Continental)](../../europe.md) · **Adjacent FIRs:** Casablanca (GMMM) NE · Lisboa (LPPC) / Santa Maria Oceanic (LPPO) N (Madeira-sector boundary) · Dakar Oceanic (GOOO) S/SE · Sal Oceanic (GVSC) S
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — verified vs ENAIRE AIP ENR 2.1 structure; exact oceanic sub-sector split (Atlántico Norte/Sur) and precise adjacent-FIR hand-off points flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Canarias is a **hybrid FIR** — a **radar-controlled** island/terminal component around the Canary archipelago, plus a **very large non-radar procedural oceanic component** further west and south, part of the EUR-SAM corridor. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances (radar or procedural, as applicable). Terminal procedures for aerodromes inside the FIR (GCLP …) live in the airport briefings (§9). Live restrictions (NOTAMs, AUP/UUP conditional-route status, SIGMETs, ash bulletins) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **GCCC** — FIR Canarias, **SFC–FL195**; UIR Canarias **FL195/FL245–UNL** (published in two AIP parts reflecting slightly different lateral extents at FL195–FL245 vs FL245+, §3) |
| Controlling ATSU / ANSP | **Canarias ACC (GCCC), ENAIRE** — single ATSU for the whole FIR/UIR, covering both the island/terminal sectors and the oceanic sectors. ANSP: **ENAIRE** |
| Airspace class & vertical limits | **SFC–FL145 Class G**, **FL145–FL195 Class C** (island/terminal component); UIR **FL195–FL245 Class C** (Part 2 extent) and **FL245–FL660 Class C / FL660–UNL Class G** (Part 1, wider extent) — see §3 for the two-part lateral geometry |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) across the whole FIR, island and oceanic alike — see OM E §5 |
| PBN environment | **RNAV 5** enroute (island/terminal) · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals — see OM E §5. 🟧 Oceanic-sector navigation performance (RNP 4/10 equivalence) not independently confirmed here |
| Surveillance & datalink | 🟩 **Radar/ADS-B** around the islands (terminal + near airspace); 🟥 the **oceanic sector has no radar coverage** — procedural (position-report) separation, with **FANS-1/A ADS-C and CPDLC** available and **HF voice** as the universal backup, including for CPDLC-equipped traffic |
| Primary language & comms | 🟩 **VHF** island/terminal, **8.33 kHz mandatory**; 🟥 **HF** required for the oceanic sector; **Spanish + English** (English always available) |
| Key hazard(s) | The **oceanic sector is the defining hazard class** — non-radar, long HF/CPDLC-position-report legs, EUR-SAM corridor traffic density at night; island terrain (Teide, Tenerife, ~12,198 ft) is a local hazard near GCXO/GCTS; the Saharan "Área Sahara" sub-volume and proximity to Western Sahara/Mauritania airspace; Icelandic volcanic ash and, distinctly, **local volcanic activity** (La Palma) are strategic wildcards (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟥 | **Split FIR**: radar/surveillance control around the islands; **non-radar procedural control** in the oceanic sector (no radar coverage; ADS-C/CPDLC position reporting). Confirm which segment the planned route transits. |
| Communication coverage & language | 🟧 | VHF + 8.33 kHz island/terminal; 🟥 **HF mandatory** for the oceanic sector (Canarias Radio — Atlántico Norte / Atlántico Sur positions), with CPDLC/ADS-C as the primary datalink and HF retained as backup even for equipped aircraft. Spanish + English. |
| Datalink / surveillance requirement | 🟥 | **FANS-1/A CPDLC/ADS-C** available/expected across the Oceanic ATS provision area of FIR/UIR Canarias — see OM E oceanic-procedures doc. Mode S + **ADS-B Out** mandatory island-side; ADS-B has no oceanic-sector surveillance value beyond the island terminal area. |
| Terrain / MORA / driftdown | 🟧 | Island terrain is locally significant (**Teide, Tenerife, ~12,198 ft/3,718 m**) near GCXO/GCTS; the wider oceanic sector is entirely overwater — terrain is not a factor there, but **ETP/critical-point and driftdown-over-water planning is** (§8). |
| Diversion-aerodrome coverage | 🟧 | Dense around the islands (GCLP plus the other Canary fields); **sparse-to-none in the oceanic sector** — ETP/EDTO-style planning is directly relevant for the mid-Atlantic crossing portion. §9. |
| Special-use airspace (military / danger) | 🟧 | The **Área Sahara** sub-volume (Class G, SFC–FL195) sits within the FIR's southern lateral limits, over Western Sahara; confirm current status/any NOTAM restriction. Standard Spanish military TRA/TSA applies island-side. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410** applies FIR-wide; **8.33 kHz + Mode S/ADS-B** island-side; **HF + FANS CPDLC/ADS-C** oceanic-side. All defined in OM E. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** FIR Canarias covers the **Canary Islands archipelago** and an **extensive mid-Atlantic oceanic sector off north-west Africa**, reported at roughly **1.5 million km²**. Per **AIP ENR 2.1**, the FIR's lateral limits run broadly **3000N 02500W, 3000N 02000W, 3139N 01725W**, an arc of 100 NM radius centred near **3304N 01621W** to **3130N 01545W**, then **3000N 01230W, 2740N 01310W, 2740N 01114W, 2740N 00840W, 2600N 00840W, 2600N 01200W, 2330N 01200W**, along the **FIR Dakar** limit to **2120N 01400W, 2120N 01655W, 2047N 01704W, 1900N 01900W, 2400N 02500W**, closing at **3000N 02500W**. A subset **Área Sahara** volume (SFC–FL195, Class G) sits within the southern part of this envelope, over Western Sahara.
- **Vertical split:** the **UIR is published in two parts** with slightly different lateral geometry: **Part 1** (**FL245–UNL**, Class C to FL660 / Class G above) covers a broader eastern extent; **Part 2** (**FL195–FL245**, Class C outside other classified airspace) covers a wider south-western extent reaching the FIR Dakar boundary. Below the UIR, the **FIR (SFC–FL195)** is **Class C FL145–FL195**, **Class G SFC–FL145**. 🟧 The practical effect (which FL band applies at which longitude) is not fully disentangled here — confirm sector charts for a specific oceanic crossing.
- **Adjacent FIRs (by boundary):**
  - **NE — Casablanca (GMMM, ONDA), Morocco** — a Letter-of-Agreement framework links Canarias, Madrid and Casablanca ACCs for this interface.
  - **N — Lisboa (LPPC) / Santa Maria Oceanic (LPPO), NAV Portugal** — Canarias FIR borders the southern part of the **Madeira sector** of the Portuguese FIR structure.
  - **S/SE — Dakar Oceanic (GOOO), ASECNA/Senegal** — the FIR's southern limit is explicitly defined against the **FIR Dakar** boundary in the AIP.
  - **S — Sal Oceanic (GVSC), ASA/Cabo Verde** — per the task brief and regional charts, Sal Oceanic FIR borders the Canarias oceanic sector further south; traffic departing via boundary fixes toward Dakar's airspace must be coordinated with both Sal Control and Dakar ACC.
- **Sectorisation:** **Canarias ACC** works both the island/terminal sectors and the oceanic sectors from the same facility, with distinct radio positions — **Canarias Control** (island/radar) and **Canarias Radio** (oceanic FIC, split **Atlántico Norte** / **Atlántico Sur**).

---

## 4. Control & ATSU

- **Lower/island-airspace ATSU:** 🟩 **Canarias ACC (GCCC), ENAIRE**, callsign **Canarias Control** — radar/surveillance control around the Canary Islands, SFC–FL195, including the GCLP approach/TMA feed and the other island terminals.
- **Oceanic ATSU:** 🟥 **Canarias ACC/FIC**, callsigns **Canarias Radio (Atlántico Norte / Atlántico Sur)** — non-radar procedural control of the oceanic sector; part of the **EUR-SAM corridor** structure (see the [EUR-SAM Corridor](../../eur-sam-corridor.md) area brief for the wider crossing-traffic context).
- **FIS / FSS:** Spanish **Flight Information Service (FIS)** provided by ENAIRE for lower/uncontrolled island airspace.
- **Surveillance basis:** 🟩 radar/ADS-B around the islands; 🟥 **no radar in the oceanic sector** — separation is procedural, based on position reports, with ADS-C providing automated position updates where equipped.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Canarias FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM, applicable across the whole FIR (island and oceanic). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5** island/terminal enroute; **RNP 1** terminal SID/STAR; **RNP APCH** arrivals — per the EU **PBN Implementing Rule (EU) 2018/1048**. 🟧 Oceanic-sector RNP equivalence (RNP 4/RNP 10-class) is standard for FANS-oceanic operations generally but not independently confirmed for this FIR here. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** island/terminal-side (**Commission Implementing Regulation (EU) No 1079/2012**); not applicable to the HF oceanic sector.
- **Datalink (CPDLC/ADS-C):** 🟥 **FANS-1/A CPDLC and ADS-C** are available in the Oceanic ATS service-provision area of FIR/UIR Canarias; **HF voice is provided to all traffic**, including CPDLC-equipped aircraft, as the contingency channel. This is a **genuine oceanic datalink requirement**, distinct from the continental Link 2000+/ATN-B1 mandate applicable island-side above FL285. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S + ADS-B Out** mandatory island-side (EU 2017/386); no oceanic-sector ADS-B surveillance value beyond island/near-shore coverage.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** island transits are worked by **Canarias Control** (radar); oceanic transits are worked by **Canarias Radio** (Atlántico Norte or Atlántico Sur, per position) via HF, with CPDLC/ADS-C where equipped. Exact frequencies/HF families are AIRAC/AIP-dependent — fly the current-AIRAC/AIP values, not a stored table.
- **FIS / lower airspace:** Spanish **FIS** (ENAIRE) for island lower/uncontrolled airspace.
- **Language:** 🟩 **Spanish and English**; English is always available.
- **8.33 kHz:** 🟥 island/terminal frequencies are **8.33 kHz-spaced** — mandatory equipage (§5); not applicable to HF.
- **Emergency / guard:** **121.5 MHz** guard (island/near airspace); oceanic emergency procedures follow the standard HF/SELCAL and CPDLC/ADS-C emergency-report conventions.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 Spanish FRA implementation is primarily a continental (Madrid/Barcelona) construct; its extension into the Canarias upper airspace is **not confirmed here** — treat the oceanic sector as a fixed-route/random-routeing oceanic structure per the current AIP, not an FRA cell, pending verification.
- **Airway spine (where FRA not available):** the island/terminal sectors use the standard fixed ATS-route network feeding GCLP and the other Canary terminals; the oceanic sector uses NAT/EUR-SAM-style oceanic tracks and random-routeing procedures as published.
- **Major fixes / entry-exit points:** oceanic entry/exit is via the published FIR-boundary reporting points (including the coordinated fixes toward Dakar/Sal referenced in §3); the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Gran Canaria (GCLP)** is the served hub per this brief's scope. 🟧 The other Canary Islands fields — **Tenerife Norte (GCXO)**, **Tenerife Sur (GCTS)**, **Fuerteventura (GCFV)**, **Lanzarote (GCRR)**, **La Palma (GCLA)** — sit within the same FIR but have no OM C airport brief yet; list here for completeness, build if they become planned alternates.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 the islands themselves carry significant local terrain — **Teide (Tenerife, ~12,198 ft/3,718 m)** is the highest peak in Spain, relevant to GCXO/GCTS approach and departure planning (terminal, not enroute cruise, driver). The vast oceanic sector is entirely overwater — no terrain factor there.
- **Boundary terrain:** none of note at the oceanic-FIR boundaries (Casablanca, Dakar, Sal interfaces are all overwater/low-coastal).
- **Driftdown / depressurisation escape:** 🟥 **ETP (Equal-Time Point) and driftdown-over-water planning is directly relevant** for the oceanic-sector crossing — a materially different planning profile from the continental Iberian FIRs in this set. Confirm ETOPS/EDTO and driftdown-clearance requirements per OM E for any route transiting the Canarias oceanic sector. See [`OM E — ETOPS-EDTO Procedures`](../../../../flight-ops/etops-edto.md).
- **Cold-temperature altitude corrections:** not a factor in this sub-tropical FIR; not applicable.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Gran Canaria | **GCLP** | Home-region hub / primary dep-return alternate | [GCLP brief](../../../destinations/europe/spain/gclp/index.md) |
| Tenerife Norte | **GCXO** | In-FIR alternate (island) | Brief to build 🟧 |
| Tenerife Sur | **GCTS** | In-FIR alternate (island) | Brief to build 🟧 |
| Fuerteventura | **GCFV** | In-FIR alternate (island) | Brief to build 🟧 |
| Lanzarote | **GCRR** | In-FIR alternate (island) | Brief to build 🟧 |

- **Coverage note:** 🟥 **dense around the islands, essentially absent across the oceanic sector** — a route that transits the oceanic portion of this FIR must plan ETP/critical-point diversion coverage explicitly (no suitable Cat I field for a large stretch); this is the one FIR in this set where ETP/critical-point planning is a primary driver, not a footnote.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 standard Spanish military TRA/TSA structure applies island-side, activated via AUP/UUP; the oceanic sector has no comparable structure (open ocean).
- **Danger / restricted / prohibited areas:** 🟧 the **Área Sahara** sub-volume (SFC–FL195, Class G) sits within the FIR's southern limits over Western Sahara — a politically sensitive but airspace-neutral zone per the AIP; confirm current NOTAM status. Local RMZ/TMZ zones exist around specific island terminals (published in AIP ENR 2.1) — pull current status at planning.
- **Overflight-permit / diplomatic considerations:** 🟧 **none expected for the Canary Islands (Spain/EU territory)**; the extended oceanic sector approaches Western Sahara/Mauritania airspace interests — no permit requirement is asserted here, but this is flagged given the region's disputed-territory context.

> **SUA currency:** re-check active TRA/TSA/CDR status (AUP/UUP), oceanic-track/random-routeing NOTAMs, and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** island/terminal — per **SERA (Regulation (EU) No 923/2012)**, squawk **7600**, continue per the SERA IFR comms-failure rules. Oceanic — follow the standard **oceanic comms-failure procedure** (maintain last-assigned level/route or filed flight-plan levels per the applicable regional supplementary procedure, attempt contact via all available means including HF/SELCAL/CPDLC) — confirm the exact procedure against **AIP ENR 1.8 / GEN** and OM E oceanic doc.
- **Weather-deviation / in-flight contingency:** island/terminal — radar-tactical, request the deviation from ATC. Oceanic — follow the **strategic lateral offset (SLOP)** and standard oceanic weather-deviation procedure where ATC clearance cannot be obtained promptly; see OM E.
- **Seasonal hazards (durable):**
  - **Saharan dust (Calima)** — periodic dust intrusions from the adjacent African desert affect visibility and can affect engine/airframe considerations at the island terminals; a genuinely regional hazard not present in the mainland-Iberia FIRs.
  - **Trade-wind turbulence / low-level wind shear** in the lee of the high-terrain islands (notably Tenerife) — a terminal, not enroute, driver.
  - **Local volcanic activity (La Palma)** — the archipelago has had recent eruptive activity (2021); any live VONA/VAAC advisory for a Canary Islands volcano is a direct, FIR-local strategic wildcard distinct from the Icelandic-ash wildcard common to the other Iberian FIRs.
  - **Icelandic volcanic ash** — as with the rest of European airspace, a lower-probability but historically significant strategic wildcard for the upper airspace.
  - **Tropical/subtropical systems:** rare but not impossible incursions into the southern oceanic sector — monitor.

> **Pull at planning (T-2h):** enroute NOTAMs, oceanic-track/random-routeing status, AUP/UUP (island-side) and current RAD, SIGMET/AIRMET, VAAC/VONA advisories (Icelandic and local Canary-Islands volcanic sources), conflict-zone bulletins, and the validated SimBrief route with assigned levels and ETP/diversion plan for any oceanic-sector crossing. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **UIR two-part lateral/vertical geometry** (Part 1 FL245–UNL vs Part 2 FL195–FL245) and which applies at a given crossing longitude — stated from the AIP extract but not fully resolved into a single practical picture.
- **Sal Oceanic (GVSC)** and **Dakar Oceanic (GOOO)** exact boundary hand-off points and coordination requirements — stated at plain-language/summary level.
- **Oceanic-sector RNP equivalence** (RNP 4/10-class) and any minimum-equipment list for FANS CPDLC/ADS-C — not independently confirmed for this specific FIR.
- **FRA applicability (or non-applicability) in the Canarias upper airspace** — flagged as unconfirmed; treat as fixed/random-routeing oceanic structure pending verification.
- **Área Sahara** current operational/NOTAM status — flagged given the disputed-territory context.
- **GCXO / GCTS / GCFV / GCRR / GCLA** have no OM C airport briefs yet — build if they become planned alternates.
- ETOPS/EDTO and driftdown-clearance specifics for routes transiting the oceanic sector — reference OM E ETOPS-EDTO doc, not re-derived here.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ENAIRE AIP España — ENR 2.1** (FIR/UIR Canarias: lateral/vertical limits, Área Sahara, ATS units) — https://aip.enaire.es/AIP/contenido_AIP/ENR/LE_ENR_2_1_en.html (retrieved 2026-07-26).
- **ENAIRE AIP España — GEN 3.4** (oceanic ATS provision, FANS CPDLC/ADS-C, HF backup) — https://aip.enaire.es/aip/contenido_AIP/GEN/LE_GEN_3_4_en.pdf (retrieved 2026-07-26).
- **IVAO España — Manual Operativo Sector Canarias Oceánico** (non-radar procedural sector description, ADS-C/CPDLC/HF) — https://files.es.ivao.aero/FIR/GCCC/Documentacion/Manuales%20Operativos/Manual%20Operativo%20OCE.pdf (retrieved 2026-07-26). *Tier-4 corroboration only.*
- **Letter of Agreement — Canarias ACC (GCCC) and Casablanca ACC (GMMM)** — https://files.es.ivao.aero/WebPage/Documentos/ATC/LOA/Ext/LOA-GCCC-GMMM-EN.pdf (retrieved 2026-07-26). *Tier-4 corroboration only — Casablanca interface cross-checked here.*
- **ICAO SAT-SG Working Paper — SAT contact lists** (Dakar/Sal Oceanic coordination context) — https://www.icao.int/sites/default/files/WACAF/MeetingDocs/2024/SAT2/WORKING%20PAPERS/WP02A-Appendix-1-SAT-contact-lists.pdf (retrieved 2026-07-26).
- **EU Implementing Regulations** (durable mandates, island/terminal side): (EU) No 1079/2012 — 8.33 kHz; (EU) 2018/1048 — PBN IR; (EU) 2017/386 — SPI IR (Mode S + ADS-B Out); (EU) No 923/2012 — SERA.
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR/NAT/SAM)** — EUR RVSM, oceanic comms-failure/contingency procedures.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
