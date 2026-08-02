# Curitiba (SBCW) — FIR Briefing

**Scope:** single FIR — southern & south-eastern Brazil, containing **São Paulo/Guarulhos (SBGR)**, the K Global South America superhub · **Parent area brief:** [South America](../../south-america.md) · **Coast-in system:** [EUR/SAM Corridor (South Atlantic)](../../eur-sam-corridor.md) · **Adjacent FIRs:** Brasília (SBBS) N/NW · Atlântico (SBAO) E (oceanic) · Montevideo (SUMU, Uruguay) S · Ezeiza (SAEF, Argentina) SW · Asunción (SGFA, Paraguay) W

**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — FIR containment (SBGR sits in Curitiba FIR **SBCW**, not Brasília) verified vs DECEA AISWEB + VATSIM Brazil; exact in-FIR aerodrome roster edges, per-band class letters and CPDLC coverage flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Curitiba is a **radar/ADS-B-surveillance-controlled continental FIR** — no oceanic segment (the South Atlantic crossing is the adjacent **Atlântico FIR (SBAO)**, briefed in the EUR/SAM Corridor area file). Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for aerodromes inside the FIR (SBGR, SBSP, SBKP, SBCT …) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **SBCW** — Curitiba FIR. Lower controlled airspace and **upper airspace Class A** worked by the same ACC; no separate UIR ident |
| Controlling ATSU / ANSP | **ACC Curitiba (CINDACTA II, DECEA)** enroute. **São Paulo TMA / APP-SP operated by SRPV-SP** (the São Paulo regional flight-protection service) within the FIR. ANSP/authority: **DECEA** (Departamento de Controle do Espaço Aéreo) |
| Airspace class & vertical limits | 🟧 **Class A** in upper controlled airspace (typically **FL245 and above**, to FL460); **Class C/D** in the São Paulo/Rio/Campinas TMAs and CTRs; Class E/G below. Confirm exact class per band at **AIP BRASIL ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (Brazil RVSM, in force since 2005) — see OM E §5 |
| PBN environment | **RNAV 5 / RNAV routes** enroute · **RNAV 1** terminal (SID/STAR in the São Paulo TMA) · **RNP APCH** arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B** surveillance in the SE core; 🟧 **CPDLC** available in the upper airspace (DECEA operationalised CPDLC in FIR Brasília/Curitiba — confirm active band/login) |
| Primary language & comms | 🟩 **VHF throughout**; **Portuguese + English** (English always available on the international sectors). **25 kHz** channel spacing (8.33 kHz is a European mandate — not applicable here) |
| Key hazard(s) | Very high **traffic density** around the São Paulo terminal complex (SBGR/SBSP/SBKP); **Serra do Mar / Serra da Mantiqueira** coastal-escarpment terrain SE; intense **austral-summer convection** (Oct–Mar); occasional winter **fog/low stratus** at SBGR |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-surveillance-controlled throughout the SE core (CINDACTA II); no oceanic/procedural segment — the ocean crossing is the adjacent Atlântico FIR. |
| Communication coverage & language | 🟩 | Continuous VHF; Portuguese + English, English always available on international sectors. No HF/SATVOICE requirement in-FIR (that is the adjacent Atlântico oceanic picture). |
| Datalink / surveillance requirement | 🟧 | Radar + **ADS-B** surveillance; **CPDLC** available in the upper airspace per DECEA implementation — confirm active FL band/sectors and login at planning. |
| Terrain / MORA / driftdown | 🟧 | Moderate. **Serra do Mar** coastal escarpment and **Serra da Mantiqueira** (Pico da Bandeira ~2,892 m / ~9,488 ft) form the highest belts near the São Paulo/Rio arc; a terminal/driftdown consideration, not a cruise factor. §8. |
| Diversion-aerodrome coverage | 🟩 | Very dense in the SE — SBGR/SBSP/SBKP/SBCT/SBFL/SBPA all inside the FIR; a suitable field is always within short range. §9. |
| Special-use airspace (military / danger) | 🟧 | Brazilian military **restricted (SBR)/danger (SBD)/prohibited (SBP)** areas across the FIR; activation and status are AIP/NOTAM-published — confirm active at planning. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV routes / RNAV 1 terminal · RNP APCH · Mode S + ADS-B Out.** Defined in OM E; confirm the current-AIRAC route meets Brazilian requirements. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Curitiba FIR covers **southern and south-eastern Brazil** — the states of São Paulo, Rio de Janeiro, Espírito Santo, Paraná, Santa Catarina, Rio Grande do Sul and part of Mato Grosso do Sul — i.e. the industrial/population core around the São Paulo hub and the whole southern cone of Brazilian domestic airspace. It is one of Brazil's five FIRs (**Curitiba SBCW, Brasília SBBS, Recife SBRE, Atlântico SBAO, Amazônica/Manaus SBAZ**).
- **Confirmed containment:** 🟩 **São Paulo/Guarulhos (SBGR) sits in Curitiba FIR (SBCW), not Brasília FIR** — enroute control is **ACC Curitiba (CINDACTA II)** and the São Paulo terminal is worked by **APP-SP (SRPV-SP)**. This was the specific question the brief was built to settle.
- **Vertical structure:** 🟧 controlled airspace up to the upper limit (**Class A** typically from around **FL245** to **FL460**), worked by ACC Curitiba; the São Paulo/Rio/Campinas TMAs and CTRs sit beneath it (Class C/D). No separate upper-airspace ATSU/UIR ident — the ACC owns both bands. Confirm the exact Class-A floor at AIP BRASIL ENR 2.1.
- **Adjacent FIRs (by boundary):**
  - **N / NW — Brasília (SBBS, DECEA/CINDACTA I).** The central-Brazil FIR; northbound/European arrivals transit SBBS before entering SBCW for the São Paulo arrival.
  - **E — Atlântico (SBAO, DECEA/CINDACTA III).** The **oceanic FIR** over the South Atlantic — the **EUR/SAM Corridor coast-in** point; long-haul from Europe/Africa enters Brazilian domestic airspace across this boundary (see the EUR/SAM Corridor area brief).
  - **S — Montevideo (SUMU, Uruguay).**
  - **SW — Ezeiza (SAEF, Argentina).**
  - **W — Asunción (SGFA, Paraguay)** and Argentine sectors.
- **Sectorisation:** ACC Curitiba is divided into multiple ACC sectors that combine/split with traffic and staffing; the transit-relevant fact is that a European long-haul into SBGR is handed **Atlântico (oceanic) → Brasília → Curitiba ACC → APP-SP**.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **ACC Curitiba (CINDACTA II, DECEA)** — radar/ADS-B surveillance control of the FIR, including the feed into the São Paulo terminal complex.
- **Terminal ATSU:** 🟩 **APP-SP (SRPV-SP)** works the **São Paulo TMA** (SBGR, SBSP/Congonhas, SBMT) as a distinct regional flight-protection service within the FIR; separate APP units serve Campinas, Rio and the southern terminals.
- **FIS / FSS:** Brazilian **AIS/FIS** provided by DECEA for information service; not a factor for an IFR hub transit that stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 continuous **radar + ADS-B** across the SE core; no procedural pockets on a normal IFR routing into São Paulo.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Curitiba FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — Brazilian RVSM (in force since 2005, aligned to the ICAO SAM region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV routes / RNAV 5** enroute; **RNAV 1** for terminal SID/STAR in the busy São Paulo TMA; **RNP APCH** for arrivals. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟩 **not applicable** — 8.33 kHz is an ICAO EUR mandate; Brazil uses **25 kHz** VHF spacing.
- **Datalink (CPDLC):** 🟧 **CPDLC available** in the Brazilian upper airspace — DECEA operationalised CPDLC across **FIR Brasília and FIR Curitiba** (published by AIC). A continental datalink service for equipped aircraft (VHF voice remains primary), **not** an oceanic FANS carriage mandate; confirm the active FL band, participating sectors and login at planning. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** underpins the surveillance service across the SE core (DECEA ADS-B programme). Confirm equipage on the OFP.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a São Paulo-bound transit is handed sequentially **Atlântico (oceanic HF, if arriving from Europe) → Brasília ACC → Curitiba ACC → APP-SP**; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Brazilian **AIS/FIS** (DECEA) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Portuguese and English**; English always available on the international sectors serving the hub.
- **Channel spacing:** 🟩 **25 kHz** VHF (no 8.33 kHz mandate).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **not implemented** in the European sense — Brazil operates a **fixed ATS-route network** (upper airways) with tactical direct routings by ATC. Plan the published ATS-route/RNAV structure; do not assume FRA point-to-point.
- **Airway spine:** the upper ATS-route network feeds the São Paulo terminal complex; European arrivals coast in via the Atlântico/Recife structure, transit Brasília, then join the SBGR STAR feeder through Curitiba FIR.
- **Major fixes / entry-exit points:** the FIR-boundary transition fixes from Atlântico/Brasília and the São Paulo TMA arrival transitions; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance). *(For the EDDF→SBGR long-haul, the coast-in and corridor detail is in the EUR/SAM Corridor area brief.)*
- **Hubs & aerodromes inside the FIR:** 🟩 **São Paulo/Guarulhos (SBGR, superhub)**, **São Paulo/Congonhas (SBSP)**, **Campinas/Viracopos (SBKP)**, **Curitiba (SBCT)**, **Florianópolis (SBFL)**, **Porto Alegre (SBPA)**. 🟧 Rio de Janeiro (SBGL/SBRJ) and Vitória (SBVT) membership of Curitiba vs Brasília FIR to confirm against AISWEB. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 moderate. The **Serra do Mar** coastal escarpment rises abruptly behind the São Paulo/Rio coast (~800–1,200 m), and the **Serra da Mantiqueira** inland tops out at the **Pico da Bandeira (~2,892 m / ~9,488 ft)** on the SP/MG/ES border — the highest terrain in the FIR. São Paulo itself sits on a plateau (~800 m / SBGR elevation ~2,461 ft).
- **Boundary terrain:** no higher terrain step-up across the adjacent-FIR boundaries that matters for cruise; the Andes are far to the west, across the Argentine/Chilean FIRs.
- **Driftdown / depressurisation escape:** 🟩 not a cruise-level constraint — cruise clears all terrain by a wide margin, and the **very high diversion-field density** in the SE removes any terrain-limited escape problem. Relevant only to terminal terrain-clearance on the São Paulo/Rio arrivals (airport briefs).
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes on cold austral-winter mornings, not in enroute cruise — see the airport briefings (§9) and OM E Cold Weather Operations.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| São Paulo/Guarulhos | **SBGR** | Superhub / primary dep-return alternate | [SBGR brief](../../../destinations/south-america/brazil/sbgr/index.md) |
| Campinas/Viracopos | **SBKP** | In-FIR alternate (São Paulo area); H24, cargo | Brief to build 🟧 |
| São Paulo/Congonhas | **SBSP** | In-FIR alternate (city; short-runway/curfew caveats) | Brief to build 🟧 |
| Curitiba | **SBCT** | In-FIR alternate (S) | Brief to build 🟧 |
| Rio de Janeiro/Galeão | **SBGL** | In-FIR alternate (E) — 🟧 confirm FIR membership | Brief to build 🟧 |
| Florianópolis | **SBFL** | In-FIR alternate (S) | Brief to build 🟧 |
| Porto Alegre | **SBPA** | In-FIR alternate (far S) | Brief to build 🟧 |

- **Coverage note:** 🟩 dense — a suitable field is always within short range, so **ETP/critical-point planning is not a driver** in this radar-controlled continental FIR (the ETP problem belongs to the ocean crossing in the adjacent Atlântico FIR / EUR/SAM Corridor). SBKP is the natural São Paulo-area alternate; SBSP is close but runway/curfew-limited.

---

## 10. Special-use airspace

- **Military restricted / danger / prohibited:** 🟧 Brazilian **SBR (restricted)**, **SBD (danger)** and **SBP (prohibited)** areas across the FIR (ranges, military training, sensitive sites); activation and status are AIP/NOTAM-published — confirm active at planning. Some areas cluster around the São Paulo/Rio terminal arcs.
- **Overflight-permit / diplomatic considerations:** 🟩 none for the domestic transit; standard Brazilian civil operation. International arrival/customs handled at the destination.

> **SUA currency:** re-check active SBR/SBD/SBP status and any temporary reservations at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO standard — squawk **7600**, continue per the ICAO/DECEA IFR comms-failure rules (last acknowledged clearance / filed route and levels), attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Brazilian refinement at **AIP BRASIL ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. No oceanic weather-deviation offset table applies in-FIR (that is the Atlântico/EUR-SAM oceanic picture). Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Austral-summer convection (Oct–Mar)** — intense afternoon/evening thunderstorms, embedded CB, hail and squall lines over São Paulo/SE Brazil; the dominant enroute and terminal weather hazard. Thunderstorm avoidance and turbulence handled tactically; carry a fuel pad in the convective season.
  - **Winter fog / low stratus (Jun–Aug)** — cool-season radiation fog and low cloud at **SBGR** (plateau) on calm mornings; a terminal LVO driver — see the airport brief and OM E LVO/Cold-Weather docs.
  - **Volcanic ash / space weather:** negligible at these latitudes with no nearby active volcanoes — not a planning driver here.

> **Pull at planning (T-2h):** enroute NOTAMs, active SBR/SBD/SBP and temporary reservations, SIGMET/AIRMET (convection, turbulence), CPDLC active-band/login status, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** and the **Class-A floor** (AIP BRASIL ENR 2.1) — stated as Class A upper / C-D terminal; not individually re-verified.
- **CPDLC** active FL band, participating sectors and login procedure in FIR Curitiba (DECEA implementation) — confirm per-sector at planning.
- Precise **in-FIR aerodrome roster** edges — **Rio de Janeiro (SBGL/SBRJ)** and **Vitória (SBVT)** membership of Curitiba vs Brasília FIR to confirm against DECEA AISWEB.
- **SBKP, SBSP, SBCT, SBGL, SBFL, SBPA** have no OM C airport briefs yet — build if they become planned São Paulo-area / southern alternates.
- Enroute **PBN spec** (RNAV 5 vs RNAV routes) — confirm the published Brazilian enroute navigation specification at AIP BRASIL ENR.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **AIP BRASIL — ENR sections (DECEA/AISWEB)**: ENR 2.1 (FIR/UIR & control-area structure, airspace classes), ENR 1.x (RVSM, PBN, comms-failure), ENR 3.x (ATS routes), ENR 5.x (SBR/SBD/SBP restricted/danger/prohibited areas). Primary source of record for FIR structure, classes and routes — https://aisweb.decea.mil.br (retrieved 2026-07-25).
- **DECEA AISWEB — FIR Curitiba (SBCW)** record (CINDACTA II area of responsibility; SRPV-SP São Paulo terminal region) — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SBCW (retrieved 2026-07-25).
- **DECEA — Espaço Aéreo Brasileiro** (five-FIR structure: Curitiba/Brasília/Recife/Atlântico/Amazônica; CINDACTA I–IV responsibilities) — https://www.decea.mil.br/?i=quem-somos&p=espaco-aereo-brasileiro (retrieved 2026-07-25).
- **DECEA AIC — CPDLC operationalisation in FIR Brasília and FIR Curitiba** (datalink availability in Brazilian upper airspace) — DECEA/AISWEB AIC (retrieved 2026-07-25).
- **ICAO SAM regional supplementary procedures (Doc 7030)** — SAM RVSM (FL290–410) and regional route/comms procedures.
- **VATSIM Brazil (VATBRZ) — ATC Portal, SBGR under FIR Curitiba (SBCW)** — https://atc.vatsim.com.br/en/aerodromos/sbcw-curitiba/SBGR/ (retrieved 2026-07-25). *Tier-4 corroboration only — confirms SBGR is filed under the SBCW/Curitiba FIR structure, not Brasília.*
- Companion OM C files: [`../../General/EUR-SAM Corridor.md`](../../eur-sam-corridor.md) (South Atlantic coast-in), [`../../General/South America.md`](../../south-america.md) (parent area), [`../../../Airports/South America/Brazil/SBGR — Guarulhos-Gov Andre Franco Mon/SBGR — Briefing.md`](../../../destinations/south-america/brazil/sbgr/index.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_FIR Briefing Template.md`. Confirmed **SBGR sits in Curitiba FIR (SBCW)**, not Brasília — enroute ACC Curitiba (CINDACTA II), São Paulo TMA APP-SP (SRPV-SP); adjacent FIRs (Brasília N, Atlântico E oceanic/EUR-SAM coast-in, Montevideo/Ezeiza/Asunción S–W); RVSM/RNAV/RNP APCH/ADS-B referenced to OM E; CPDLC availability per DECEA implementation (flagged); Serra do Mar/Mantiqueira terrain; dense SE diversion field set; SBR/SBD/SBP SUA; ICAO comms-failure; austral-summer convection + winter SBGR fog. Parent area brief: South America; coast-in system: EUR/SAM Corridor. VATSIM Brazil ATC Portal cited (tier-4). |
