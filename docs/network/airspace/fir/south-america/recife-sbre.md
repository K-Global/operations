# Recife (SBRE) — FIR Briefing

**Scope:** single FIR — north-eastern Brazil (the Nordeste region), containing **Fortaleza/Pinto Martins (SBFZ)**, **Recife/Guararapes (SBRF)** and **Salvador/Deputado Luís Eduardo Magalhães (SBSV)** · **Parent area brief:** [South America](../../south-america.md) · **Coast-in system:** [EUR/SAM Corridor (South Atlantic)](../../eur-sam-corridor.md) · **Adjacent FIRs:** Atlântico (SBAO) E — oceanic, same ANSP (CINDACTA III) · Brasília (SBBS) S/SW · Amazônica (SBAZ) NW

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Recife is a **radar/ADS-B-surveillance-controlled continental FIR** along the coast and terminal complexes, with possible procedural pockets over the semi-arid interior (🟧 confirm coverage). It is the **first continental sector on the EUR/SAM Corridor coast-in** — the South Atlantic crossing is the adjacent oceanic **Atlântico FIR (SBAO)**, briefed in the EUR/SAM Corridor area file, and the same ANSP (CINDACTA III, headquartered in Recife) runs both. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for the served aerodromes (SBFZ, SBRF, SBSV) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **SBRE** — Recife FIR. Lower controlled airspace and upper **Class A** worked by the same ACC (**ACC-RE**); no separate UIR ident |
| Controlling ATSU / ANSP | **ACC Recife (ACC-RE, CINDACTA III, DECEA)** enroute. **APP-RF** works the Recife TMA; 🟧 local APP/TWR designators at Fortaleza (SBFZ) and Salvador (SBSV) not individually confirmed — verify AIP BRASIL AD 2 for each field. ANSP/authority: **DECEA** |
| Airspace class & vertical limits | 🟧 **Class A** upper controlled airspace (typically from around **FL245** to FL460); **Class C/D** in the Recife/Fortaleza/Salvador TMAs and CTRs; Class E/G below. Confirm exact class per band at **AIP BRASIL ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (Brazilian RVSM, nationwide) — see OM E §5 |
| PBN environment | **RNAV 5 / RNAV routes** enroute · **RNAV 1** terminal (SID/STAR) · **RNP APCH** arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Radar/ADS-B along the coast and the three terminal complexes; 🟧 coverage over the semi-arid interior (away from radar heads) not confirmed. **CPDLC**: 🟩 **ACC-RE was one of the first two continental ACCs (with Amazônica/ACC-AZ) where DECEA activated continental CPDLC, 9 Sept 2021** (Projeto Landell); oceanic CPDLC in the adjacent Atlântico sector (ACC-AO, same CINDACTA III) has been in use since 2009 |
| Primary language & comms | 🟩 **VHF throughout**; **Portuguese + English** (English available on international sectors). **25 kHz** channel spacing (8.33 kHz is a European mandate, not applicable) |
| Key hazard(s) | **ITCZ / equatorial convection** near the NE coast (seasonal band migration — the dominant coast-in weather hazard); generally low-moderate interior terrain with occasional convective build-ups; terminal-complex traffic density at Recife/Fortaleza/Salvador |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟧 | Radar/ADS-B along coast and terminal areas; interior coverage over the semi-arid Nordeste plateau not confirmed — may include procedural pockets. |
| Communication coverage & language | 🟩 | Continuous VHF near the coast/terminals; Portuguese + English. No HF/SATVOICE requirement in-FIR (that is the adjacent Atlântico oceanic picture). |
| Datalink / surveillance requirement | 🟩 | Continental **CPDLC** confirmed active in FIR Recife since 2021 (DECEA/FAB, Projeto Landell) — confirm active sectors/login at planning. |
| Terrain / MORA / driftdown | 🟧 | Generally low-moderate. Coastal plain and semi-arid interior (sertão/caatinga plateau); the **Chapada Diamantina** (Bahia interior, reported high point ≈2,033 m/6,670 ft, Pico do Barbado) is the notable regional high ground — 🟧 verify height/extent against the AIP. §8. |
| Diversion-aerodrome coverage | 🟩 | Good along the coast — SBFZ/SBRF/SBSV inside the FIR, plus Natal (SBNT) nearby; a suitable field is generally within range on the coastal routings. §9. |
| Special-use airspace (military / danger) | 🟧 | Brazilian **restricted (SBR)/danger (SBD)/prohibited (SBP)** areas across the FIR (military ranges, sensitive sites); activation/status are AIP/NOTAM-published — confirm active at planning. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV routes/RNAV 1 terminal · RNP APCH · Mode S + ADS-B Out.** Defined in OM E; confirm the current-AIRAC route meets Brazilian requirements. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Recife FIR covers **north-eastern Brazil (Nordeste)** — Pernambuco, Ceará, Rio Grande do Norte, Paraíba, Alagoas, Sergipe, Bahia and Piauí, and the *eastern* part of Maranhão (the western part of Maranhão sits in the Amazônica FIR). It is one of Brazil's five FIRs (**Curitiba SBCW, Brasília SBBS, Recife SBRE, Atlântico SBAO, Amazônica/Manaus SBAZ**), and one of two (with Atlântico) worked by **CINDACTA III**, headquartered in Recife.
- **Confirmed containment:** 🟩 **SBFZ (Fortaleza), SBRF (Recife) and SBSV (Salvador) all sit within Recife FIR** — all three are Nordeste-region aerodromes per the DECEA regional description. 🟧 The exact FIR line where southern Bahia meets the Brasília FIR (toward Minas Gerais) is not individually re-verified — confirm at AISWEB if a routing skirts that boundary.
- **Vertical structure:** 🟧 controlled airspace up to the upper limit (**Class A** typically from around **FL245** to FL460), worked by ACC Recife; the Recife/Fortaleza/Salvador TMAs and CTRs sit beneath it (Class C/D). No separate upper-airspace ATSU/UIR ident — the ACC owns both bands. Confirm the exact Class-A floor at AIP BRASIL ENR 2.1.
- **Adjacent FIRs (by boundary):**
  - **E — Atlântico (SBAO), CINDACTA III (same ANSP).** The **oceanic FIR** over the South Atlantic and the **EUR/SAM Corridor coast-in** boundary — long-haul arrivals from Europe/Africa cross here into Recife FIR as the **first continental sector** (see the EUR/SAM Corridor area brief).
  - **S / SW — Brasília (SBBS), CINDACTA I.** The central-Brazil FIR; a European long-haul continuing inland toward the São Paulo hub transits Recife → Brasília → Curitiba.
  - **NW — Amazônica (SBAZ), CINDACTA IV.** The Amazon-region FIR; boundary runs along western Maranhão/Piauí.
- **Sectorisation:** ACC Recife combines/splits sectors with traffic and staffing, feeding **APP-RF** (Recife TMA) and the local approach/tower services at Fortaleza and Salvador. The transit-relevant fact: a EUR/SAM Corridor arrival is handed **Atlântico (oceanic) → Recife ACC** on coast-in, then either terminates locally (SBFZ/SBRF/SBSV) or continues **Recife → Brasília → Curitiba** toward the São Paulo TMA.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **ACC Recife (ACC-RE, CINDACTA III, DECEA)** — radar/ADS-B surveillance control of the coastal core and terminal feeds.
- **Terminal ATSU:** 🟩 **APP-RF** works the **Recife TMA**. 🟧 Local APP/TWR designators for **Fortaleza (SBFZ)** and **Salvador (SBSV)** not individually confirmed here — verify AIP BRASIL AD 2 for each aerodrome.
- **FIS / FSS:** Brazilian **AIS/FIS** provided by DECEA for information service; not a factor for an IFR routing that stays in controlled airspace.
- **Surveillance basis:** 🟩 radar + ADS-B along the coast and the three terminal complexes; 🟧 interior coverage (away from radar heads, over the semi-arid Nordeste plateau) not confirmed — may include procedural pockets.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Recife FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — Brazilian RVSM (nationwide, aligned to the ICAO SAM region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV routes / RNAV 5** enroute; **RNAV 1** for terminal SID/STAR; **RNP APCH** for arrivals. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟩 **not applicable** — Brazil uses **25 kHz** VHF spacing.
- **Datalink (CPDLC):** 🟩 **confirmed active** — DECEA activated continental CPDLC in FIR Recife (ACC-RE) on **9 September 2021**, simultaneously with FIR Amazônica (ACC-AZ), under the **Projeto Landell** programme; oceanic CPDLC in the adjacent Atlântico sector (same CINDACTA III) has been in use since 2009. Confirm the active FL band, participating sectors and login at planning. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** underpins surveillance across the coastal/terminal core. Confirm equipage on the OFP.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a coast-in transit is handed **Atlântico (oceanic HF, if arriving from Europe/Africa) → ACC Recife → APP-RF/local APP** for the served aerodromes, or continues **ACC Recife → ACC Brasília → ACC Curitiba** inland; exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Brazilian **AIS/FIS** (DECEA) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Portuguese and English**; English available on the international sectors serving the coast-in and the three served aerodromes.
- **Channel spacing:** 🟩 **25 kHz** VHF (no 8.33 kHz mandate).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **not implemented** in the European sense — Brazil operates a **fixed ATS-route network** (airways) with tactical direct routings by ATC. Plan the published ATS-route/RNAV structure; do not assume FRA point-to-point.
- **Airway spine:** the coast-in RNAV/airway structure feeds Recife FIR from the Atlântico oceanic boundary; onward traffic either descends to SBFZ/SBRF/SBSV or continues inland via the Recife → Brasília → Curitiba airway spine toward the São Paulo TMA.
- **Major fixes / entry-exit points:** the FIR-boundary coast-in fix from Atlântico (e.g. the corridor's planned string references a fix such as **…VUNOX** on some routings — planning context only, per the EUR/SAM Corridor brief) and the terminal-arrival transitions for each served aerodrome; the SimBrief/current-AIRAC route provides the exact string.
- **Hubs & aerodromes inside the FIR:** 🟩 **Fortaleza/Pinto Martins (SBFZ)**, **Recife/Guararapes (SBRF)** and **Salvador/Deputado Luís Eduardo Magalhães (SBSV)** — all served, briefs at §9. 🟧 Other Nordeste fields (e.g. Natal/SBNT, João Pessoa/SBJP, Maceió/SBMO, Aracaju/SBAR) sit in the FIR but have **no OM C brief** — not currently K Global served.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 generally low to moderate — the Nordeste coastal plain and the semi-arid interior (**sertão/caatinga**) plateau (roughly 500–900 m in places). The **Chapada Diamantina** highlands in the Bahia interior are the notable high ground, reportedly reaching **≈2,033 m/6,670 ft (Pico do Barbado)** — 🟧 verify against the AIP; not on the direct coastal routings to SBFZ/SBRF/SBSV.
- **Boundary terrain:** no significant terrain step-up across the adjacent-FIR boundaries that matters for cruise; the Amazônica boundary (NW) and Brasília boundary (S/SW) are both moderate-terrain transitions.
- **Driftdown / depressurisation escape:** 🟩 not a cruise-level constraint on the coastal routings — cruise clears all terrain with a wide margin, and the coastal diversion-field density (SBFZ/SBRF/SBSV/SBNT) supports an escape plan. Interior transits (toward Brasília FIR) should confirm MORA against the Chapada Diamantina belt.
- **Cold-temperature altitude corrections:** 🟩 not applicable — tropical/equatorial climate; no cold-weather QNH-correction driver at these aerodromes.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Fortaleza/Pinto Martins | **SBFZ** | Served destination / coast-in & ETOPS-relevant alternate | [SBFZ brief](../../../destinations/south-america/brazil/sbfz/index.md) |
| Recife/Guararapes | **SBRF** | Served destination / CINDACTA III home base | [SBRF brief](../../../destinations/south-america/brazil/sbrf/index.md) |
| Salvador/Dep. L.E. Magalhães | **SBSV** | Served destination | [SBSV brief](../../../destinations/south-america/brazil/sbsv/index.md) |
| Natal/São Gonçalo | **SBNT** | In-FIR alternate (NE coast-in) | Brief to build 🟧 |

- **Coverage note:** 🟩 good along the coast — SBFZ/SBRF/SBSV/SBNT give a dense NE-coastal diversion set; the interior of the FIR is sparser. ETP/critical-point planning belongs primarily to the ocean crossing in the adjacent Atlântico FIR / EUR-SAM Corridor, not this FIR.

---

## 10. Special-use airspace

- **Military restricted / danger / prohibited:** 🟧 Brazilian **SBR (restricted)**, **SBD (danger)** and **SBP (prohibited)** areas across the FIR (military ranges, training areas, sensitive sites); activation and status are AIP/NOTAM-published — confirm active at planning. Not individually catalogued here.
- **Overflight-permit / diplomatic considerations:** 🟩 none for the domestic transit or coast-in arrival; standard Brazilian civil operation. International arrival/customs handled at the destination.

> **SUA currency:** re-check active SBR/SBD/SBP status and any temporary reservations at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO standard — squawk **7600**, continue per the ICAO/DECEA IFR comms-failure rules (last acknowledged clearance / filed route and levels), attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Brazilian refinement at **AIP BRASIL ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **ITCZ / equatorial convection near the coast-in belt** — the Intertropical Convergence Zone sits near/over the NE Brazilian coast and migrates seasonally (further N in austral winter), producing embedded CB and heavy build-ups across the Atlântico→Recife coast-in transition (SBFZ/SBNT/SBRF belt). The dominant weather hazard for this FIR; use radar tilt on descent and carry a fuel pad.
  - **Semi-arid interior** — generally clear/dry (caatinga climate), with occasional afternoon convective towers, less severe than the coastal ITCZ band.
  - **Volcanic ash / space weather:** negligible at these latitudes — not a planning driver here.

> **Pull at planning (T-2h):** enroute NOTAMs, active SBR/SBD/SBP and temporary reservations, SIGMET/AIRMET (ITCZ/convection), CPDLC active-band/login status, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** and the **Class-A floor** (AIP BRASIL ENR 2.1) — stated as Class A upper / C-D terminal; not individually re-verified.
- Local **APP/TWR designators** at Fortaleza (SBFZ) and Salvador (SBSV) — only APP-RF (Recife) is confirmed by name.
- Radar/ADS-B **coverage extent over the semi-arid interior** (away from the coastal radar heads) — confirm against the DECEA surveillance coverage map.
- **Chapada Diamantina** high-point elevation (~2,033 m/Pico do Barbado, Bahia interior) — verify against the AIP/topographic source.
- Precise **FIR line where southern Bahia meets Brasília FIR** — not individually re-verified against AISWEB.
- **Natal (SBNT)** and other Nordeste fields (João Pessoa/SBJP, Maceió/SBMO, Aracaju/SBAR) have **no OM C airport brief** yet — build if they become planned alternates.
- SUA (SBR/SBD/SBP) specifics across the FIR — general note only; no individual areas catalogued.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **DECEA — Espaço Aéreo Brasileiro** (five-FIR structure; CINDACTA III responsible for FIR Recife and FIR Atlântico, covering the Nordeste and the overlying Atlantic) — https://www.decea.mil.br/?i=quem-somos&p=espaco-aereo-brasileiro (retrieved 2026-07-26).
- **DECEA / Força Aérea Brasileira — continental CPDLC activation** (Projeto Landell; continental CPDLC activated 9 Sept 2021 simultaneously in ACC-RE/CINDACTA III and ACC-AZ/CINDACTA IV; oceanic CPDLC at ACC-AO in use since 2009) — https://forcaaerea.com.br/fab-ativa-comunicacoes-via-datalink-na-area-continental-do-brasil/ and https://www.decea.mil.br (retrieved 2026-07-26).
- **AIP BRASIL — ENR sections (DECEA/AISWEB)**: ENR 2.1 (FIR/UIR & control-area structure, airspace classes), ENR 1.x (RVSM, PBN, comms-failure), ENR 3.x (ATS routes), ENR 5.x (SBR/SBD/SBP restricted/danger/prohibited areas) — https://aisweb.decea.mil.br (retrieved 2026-07-26).
- **DECEA AISWEB — aerodrome records SBFZ, SBRF, SBSV** — https://aisweb.decea.mil.br (retrieved 2026-07-26).
- **ICAO SAM regional supplementary procedures (Doc 7030)** — SAM RVSM (FL290–410) and regional route/comms procedures.
- Companion OM C files: [`../../General/EUR-SAM Corridor.md`](../../eur-sam-corridor.md) (South Atlantic coast-in), [`../../General/South America.md`](../../south-america.md) (parent area, already documents the Recife → Brasília → Curitiba interior spine), [`Curitiba (SBCW).md`](curitiba-sbcw.md) (sibling FIR brief, São Paulo superhub).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. Confirmed **SBFZ/SBRF/SBSV all sit in Recife FIR (SBRE)**, CINDACTA III (ACC-RE); adjacent FIRs Atlântico E (oceanic, same ANSP, EUR-SAM coast-in), Brasília S/SW, Amazônica NW; RVSM/RNAV/RNP APCH/ADS-B referenced to OM E; continental **CPDLC confirmed active since Sept 2021** (Projeto Landell, one of the first two continental FIRs); ITCZ/coast-in convection as the dominant seasonal hazard; Chapada Diamantina flagged as the regional terrain high point (unverified height); local APP designators at SBFZ/SBSV flagged open. |
