# Brasília (SBBS) — FIR Briefing

**Scope:** single FIR — central Brazil (Federal District, Goiás, Espírito Santo, Rio de Janeiro state, the northern part of São Paulo state, southern Tocantins and eastern Mato Grosso) · **Transit-only FIR: no K Global served airport currently sits within it** · **Parent area brief:** [South America](../../south-america.md) · **Coast-in system:** [EUR/SAM Corridor (South Atlantic)](../../eur-sam-corridor.md) · **Adjacent FIRs:** Recife (SBRE) NE · Atlântico (SBAO) E — oceanic, own Espírito Santo/Rio coastline · Amazônica (SBAZ) N/NW · Curitiba (SBCW) S/SE

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Brasília is a **transit FIR only for K Global** — no served aerodrome sits inside it; its operational relevance is as the **middle leg of the EDDF–SBGR long-haul routing**: **Atlântico (oceanic) → Recife (NE coast-in) → Brasília (this FIR, central transit) → Curitiba (São Paulo TMA arrival)**. It is a **radar/ADS-B-surveillance-controlled continental FIR**, no oceanic segment (that is the adjacent Atlântico FIR). Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. There is no §9 airport-brief roster to link — see the served-airport note in §9. Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **SBBS** — Brasília FIR. Lower controlled airspace and upper **Class A** worked by the same ACC (**ACC-BS**); no separate UIR ident |
| Controlling ATSU / ANSP | **ACC Brasília (ACC-BS, CINDACTA I, DECEA)** enroute. ANSP/authority: **DECEA**. 🟧 Terminal APP designator for Brasília/SBBR (Federal District) not individually confirmed here — SBBR is not a K Global served aerodrome |
| Airspace class & vertical limits | 🟧 **Class A** upper controlled airspace (typically from around **FL245** to FL460); **Class C/D** in the Brasília/Rio de Janeiro TMAs and CTRs; Class E/G below. Confirm exact class per band at **AIP BRASIL ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (Brazilian RVSM, nationwide) — see OM E §5 |
| PBN environment | **RNAV 5 / RNAV routes** enroute · **RNAV 1** terminal · **RNP APCH** arrivals (nationwide DECEA standard) — see OM E §5 |
| Surveillance & datalink | 🟩 Radar/ADS-B across the core; 🟩 **CPDLC** — DECEA's continental CPDLC rollout was **extended to FIR Brasília** (per the DECEA AIC referenced in the sibling Curitiba FIR brief) — confirm active band/sectors at planning |
| Primary language & comms | 🟩 **VHF throughout**; **Portuguese + English** (English available on international sectors). **25 kHz** channel spacing (8.33 kHz is a European mandate, not applicable) |
| Key hazard(s) | **Tropical build-ups over the central plateau/interior**, worst in the austral wet season (Nov–Mar); generally low-moderate terrain; **transit-only** for K Global — no terminal-complex traffic-density factor of its own |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-controlled continental FIR (ACC-BS, CINDACTA I); no oceanic/procedural segment of its own. |
| Communication coverage & language | 🟩 | Continuous VHF; Portuguese + English. |
| Datalink / surveillance requirement | 🟧 | Radar + ADS-B surveillance; continental CPDLC reported extended to FIR Brasília — confirm active FL band/sectors and login at planning. |
| Terrain / MORA / driftdown | 🟧 | Generally low-moderate central-Brazilian plateau/highlands; Brasília itself sits at altitude (SBBR elevation ≈3,497 ft) — not a cruise-level constraint on the transit routing. §8. |
| Diversion-aerodrome coverage | 🟧 | **Sparser than the coastal FIRs** — Brasília/SBBR is the principal interior field; no K Global brief exists for it or for other in-FIR aerodromes. §9. |
| Special-use airspace (military / danger) | 🟧 | Brazilian **SBR/SBD/SBP** areas across the FIR, including around the Federal District; activation/status AIP/NOTAM-published — confirm active at planning. §10. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **RVSM FL290–410 · RNAV routes/RNAV 1 terminal · RNP APCH · Mode S + ADS-B Out** (nationwide DECEA standard). Defined in OM E. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Brasília FIR covers **central Brazil** — the Federal District, Goiás, Espírito Santo, Rio de Janeiro state, the northern part of São Paulo state, southern Tocantins and the eastern part of Mato Grosso. Notably this includes the **Rio de Janeiro / Espírito Santo Atlantic coastline**, giving Brasília FIR its own direct oceanic boundary distinct from the Recife-FIR coast-in used on the K Global EDDF–SBGR routing. It is one of Brazil's five FIRs (**Curitiba SBCW, Brasília SBBS, Recife SBRE, Atlântico SBAO, Amazônica/Manaus SBAZ**), worked by **CINDACTA I** (Brasília-DF).
- **Confirmed transit-only status:** 🟩 **no K Global served aerodrome sits inside Brasília FIR.** Brasília/SBBR (the FIR's namesake field, Federal District) is an interior enroute alternate referenced in the parent South America area brief, but it has **no OM C airport brief** and is not a served destination — see §9.
- **Vertical structure:** 🟧 controlled airspace up to the upper limit (**Class A** typically from around **FL245** to FL460), worked by ACC Brasília; the Brasília and Rio de Janeiro TMAs/CTRs sit beneath it (Class C/D). No separate upper-airspace ATSU/UIR ident. Confirm the exact Class-A floor at AIP BRASIL ENR 2.1.
- **Adjacent FIRs (by boundary):**
  - **NE — Recife (SBRE), CINDACTA III.** The Nordeste FIR; on the K Global EDDF–SBGR routing, the flight is handed **Recife → Brasília** after the Atlântico coast-in.
  - **E — Atlântico (SBAO), CINDACTA III (oceanic).** Brasília FIR's own Rio de Janeiro/Espírito Santo coastline abuts the South Atlantic oceanic FIR directly — a separate boundary from the Recife coast-in used by the K Global routing.
  - **N / NW — Amazônica (SBAZ), CINDACTA IV.** The Amazon-region FIR; boundary runs along northern Goiás/Tocantins and eastern Mato Grosso.
  - **S / SE — Curitiba (SBCW), CINDACTA II.** The São Paulo-superhub FIR; on the K Global routing the flight is handed **Brasília → Curitiba** for the SBGR arrival.
- **Sectorisation:** ACC Brasília divides into multiple sectors combining/splitting with traffic and staffing; the transit-relevant fact is that a European long-haul into SBGR is handed **Atlântico (oceanic) → Recife → Brasília ACC → Curitiba ACC → APP-SP**, per the parent South America area brief and the sibling Curitiba FIR brief.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **ACC Brasília (ACC-BS, CINDACTA I, DECEA)** — radar/ADS-B surveillance control of the FIR.
- **Terminal ATSU:** 🟧 Brasília/SBBR terminal approach designator not individually confirmed here — not a K Global served aerodrome, so not built out. Rio de Janeiro terminal-area control (SBGL/SBRJ, within this FIR per the DECEA regional description) likewise not built out.
- **FIS / FSS:** Brazilian **AIS/FIS** provided by DECEA for information service.
- **Surveillance basis:** 🟩 radar + ADS-B across the core on a normal IFR transit routing; no procedural pockets expected on the EDDF–SBGR transit string.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Brasília FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — Brazilian RVSM (nationwide, aligned to the ICAO SAM region). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV routes / RNAV 5** enroute; **RNAV 1** terminal; **RNP APCH** arrivals (nationwide DECEA standard — no K Global terminal procedure built for this FIR). See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟩 **not applicable** — Brazil uses **25 kHz** VHF spacing.
- **Datalink (CPDLC):** 🟧 **reported active** — DECEA's continental CPDLC programme (Projeto Landell) was extended to **FIR Brasília** per the DECEA AIC cited in the sibling Curitiba FIR brief; confirm the active FL band, participating sectors and login at planning. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** underpins the DECEA surveillance service. Confirm equipage on the OFP.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** on the EDDF–SBGR transit, ACC Brasília is the third leg of the handoff sequence — **Atlântico (oceanic HF) → Recife ACC → Brasília ACC → Curitiba ACC**; exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Brazilian **AIS/FIS** (DECEA) for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **Portuguese and English**; English available on the international sectors serving the transit routing.
- **Channel spacing:** 🟩 **25 kHz** VHF (no 8.33 kHz mandate).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **not implemented** in the European sense — Brazil operates a **fixed ATS-route network** (airways) with tactical direct routings by ATC.
- **Airway spine:** the continental RNAV/airway spine carries the EDDF–SBGR transit through Brasília FIR between the Recife and Curitiba boundaries; this is interior transit only, with no descent/arrival procedure of K Global's own in this FIR.
- **Major fixes / entry-exit points:** the Recife/Brasília and Brasília/Curitiba boundary transition fixes; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟧 **none served by K Global.** Brasília/SBBR (Federal District) is the principal interior field and appears in the parent South America area brief as an unbuilt interior enroute alternate; Rio de Janeiro (SBGL/SBRJ) and other in-FIR aerodromes likewise have no OM C brief. **Link: none — transit only.**

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 generally low-moderate — the **central Brazilian plateau/highlands** (planalto central); Brasília itself sits at altitude (SBBR elevation ≈3,497 ft per the parent area brief). No MORA figures independently verified for this brief.
- **Boundary terrain:** no significant terrain step-up across the adjacent-FIR boundaries that matters for cruise on the transit routing.
- **Driftdown / depressurisation escape:** 🟩 not expected to be a cruise-level constraint on the EDDF–SBGR transit — the routing crosses this FIR at cruise level with no terminal descent of K Global's own. 🟧 Diversion-field density is sparser here than in the coastal FIRs (§9) — confirm on the OFP if a driftdown/decompression escape falls within this FIR's boundaries.
- **Cold-temperature altitude corrections:** 🟩 not applicable — no K Global terminal procedure in this FIR.

---

## 9. Diversion aerodromes within the FIR

**No served airport — transit only.** K Global has no destination inside Brasília FIR and no OM C airport brief for any in-FIR aerodrome.

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Brasília/Pres. J. Kubitschek | **SBBR** | Interior enroute alternate (per parent South America area brief) — not K Global served | Brief to build 🟧 |

- **Coverage note:** 🟧 **sparser than the coastal FIRs.** SBBR is the natural interior alternate on this routing if an enroute diversion falls within Brasília FIR; no brief currently exists. Confirm range/fuel on the OFP if relied upon.

---

## 10. Special-use airspace

- **Military restricted / danger / prohibited:** 🟧 Brazilian **SBR (restricted)**, **SBD (danger)** and **SBP (prohibited)** areas across the FIR, including around the Federal District (Brasília is the national capital and seat of the Brazilian Air Force's CINDACTA I); activation and status are AIP/NOTAM-published — confirm active at planning. Not individually catalogued here.
- **Overflight-permit / diplomatic considerations:** 🟩 none for the domestic transit; standard Brazilian civil operation.

> **SUA currency:** re-check active SBR/SBD/SBP status and any temporary reservations at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO standard — squawk **7600**, continue per the ICAO/DECEA IFR comms-failure rules (last acknowledged clearance / filed route and levels), attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Brazilian refinement at **AIP BRASIL ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Tropical build-ups over the central interior** — afternoon/evening convective towers over the central plateau, **worst in the austral wet season (Nov–Mar)**; quieter in the July dry season but still possible. The dominant enroute weather factor for a transit through this FIR.
  - **Volcanic ash / space weather:** negligible at these latitudes — not a planning driver here.

> **Pull at planning (T-2h):** enroute NOTAMs, active SBR/SBD/SBP and temporary reservations, SIGMET/AIRMET (convection), CPDLC active-band/login status, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** and the **Class-A floor** (AIP BRASIL ENR 2.1) — stated as Class A upper / C-D terminal; not individually re-verified.
- **CPDLC** active FL band, participating sectors and login procedure in FIR Brasília — the extension beyond the Recife/Amazônica 2021 rollout is referenced via the sibling Curitiba brief's AIC citation, not independently re-verified here.
- **SBBR (Brasília) and other in-FIR aerodromes** (incl. Rio de Janeiro SBGL/SBRJ, confirmed by DECEA to sit in Brasília FIR, not Curitiba) have **no OM C airport brief** — build if any become a planned alternate or destination.
- MORA/high-terrain figures for the central plateau — not independently sourced for this brief beyond the SBBR elevation already in the parent area brief.
- SUA (SBR/SBD/SBP) specifics across the FIR, particularly around the Federal District — general note only; no individual areas catalogued.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **DECEA — Espaço Aéreo Brasileiro** (five-FIR structure; CINDACTA I responsible for FIR Brasília, covering the central region of Brazil) — https://www.decea.mil.br/?i=quem-somos&p=espaco-aereo-brasileiro (retrieved 2026-07-26).
- **DECEA / public aviation-education sources** — Brasília FIR states of coverage (Rio de Janeiro, Espírito Santo, Goiás, Distrito Federal, northern São Paulo, southern Tocantins, eastern Mato Grosso) — corroborated via public DECEA-derived summaries (retrieved 2026-07-26); 🟧 tier-4 corroboration, confirm against the primary AIP boundary description.
- **AIP BRASIL — ENR sections (DECEA/AISWEB)**: ENR 2.1 (FIR/UIR & control-area structure, airspace classes), ENR 1.x (RVSM, PBN, comms-failure), ENR 3.x (ATS routes), ENR 5.x (SBR/SBD/SBP restricted/danger/prohibited areas) — https://aisweb.decea.mil.br (retrieved 2026-07-26).
- **ICAO SAM regional supplementary procedures (Doc 7030)** — SAM RVSM (FL290–410) and regional route/comms procedures.
- Companion OM C files: [`../../General/EUR-SAM Corridor.md`](../../eur-sam-corridor.md) (South Atlantic coast-in), [`../../General/South America.md`](../../south-america.md) (parent area — Atlântico→Recife→Brasília→Curitiba interior spine, SBBR interior alternate), [`Recife (SBRE).md`](recife-sbre.md) and [`Curitiba (SBCW).md`](curitiba-sbcw.md) (adjacent sibling FIR briefs on the same routing).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. Briefed as a **transit-only FIR** — no K Global served aerodrome inside Brasília FIR; role established as the middle leg of the EDDF–SBGR routing (Atlântico → Recife → Brasília → Curitiba). CINDACTA I / ACC-BS enroute; adjacent FIRs Recife NE, Atlântico E (own Rio de Janeiro/Espírito Santo coastline, distinct from the Recife coast-in), Amazônica N/NW, Curitiba S/SE; RVSM/RNAV/RNP APCH/ADS-B referenced to OM E; CPDLC extension flagged 🟧; SBBR (Federal District) noted as the interior enroute alternate with no brief; central-plateau tropical convection (Nov–Mar) as the dominant seasonal hazard; §9 served-airport table intentionally empty per the transit-only scope. |
