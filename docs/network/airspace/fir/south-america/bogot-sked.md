# Bogotá (SKED) — FIR Briefing

**Scope:** single FIR — southern & central Colombia (incl. the Andean interior and the Amazon/Llanos regions), containing **El Dorado Intl (SKBO), Bogotá** — a **high-elevation Andean hub** · **Parent area brief:** [South America](../../south-america.md) · **Adjacent FIRs:** Barranquilla (SKEC) N (Colombian Caribbean coast/San Andrés) · Guayaquil (SEFG, Ecuador) SW · others (Venezuela, Panama, Brazil, Peru) — 🟧 idents not verified this pass
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — built from public Aerocivil/UAEAC sources; several fields flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Bogotá FIR is a **radar/ADS-B-surveillance-controlled continental FIR** administered by Colombia's single national ANSP. Its headline feature is the **high-elevation, mountain-ringed destination (SKBO, ~8,360 ft)** — routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for SKBO live in the airport briefing (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **SKED** — Bogotá FIR |
| Controlling ATSU / ANSP | **Aerocivil / UAEAC** (Unidad Administrativa Especial de Aeronáutica Civil) — Colombia's single combined civil aviation authority and ANSP, providing both regulation and air navigation services nationwide |
| Airspace class & vertical limits | 🟧 Upper controlled airspace typically **Class A**; Bogotá TMA and surrounding CTRs Class C/D — exact class-per-band not verified this pass. **RNAV routes apply FL245 and above** in both Colombian FIRs (SKED and SKEC) |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO SAM-region standard band, Doc 7030) — see OM E §5 |
| PBN environment | 🟩 **RNAV 5** applied to RNAV routes within continental SKED/SKEC airspace **from FL245 upward**; 🟧 terminal RNP/RNP AR spec at SKBO (a high, mountain-ringed field) not verified — highly likely given terrain, confirm on current AIRAC |
| Surveillance & datalink | 🟧 Radar/ADS-B expected in the Bogotá core; CPDLC status not verified |
| Primary language & comms | 🟩 **VHF**; **Spanish + English** (English available on international sectors) |
| Key hazard(s) | 🟥 **High field elevation (~8,360 ft) + surrounding Andes terrain** at SKBO — foreground terrain, high MSA, density-altitude performance regime; convective activity over the Andean interior |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟧 | Continental radar/ADS-B control expected around the Bogotá core; not individually confirmed this pass. No oceanic segment in SKED. |
| Communication coverage & language | 🟩 | VHF throughout; Spanish + English, English available on international sectors. |
| Datalink / surveillance requirement | 🟧 | Not verified this pass — treat as VHF-voice-primary until confirmed. |
| Terrain / MORA / driftdown | 🟥 | **Bogotá sits on a high plateau (Sabana de Bogotá) ringed by the Cerros Orientales (Eastern Hills) and wider Andes.** Foreground terrain and high MSA are a first-order planning factor at SKBO. §8. |
| Diversion-aerodrome coverage | 🟧 | SKBO is the only in-FIR field carrying an OM C brief this pass; broader roster not catalogued. §9. |
| Special-use airspace (military / danger) | 🟧 | Not itemised this pass — confirm active restricted/danger areas at planning. §10. |
| Equipment / approval (RVSM, PBN, high-elevation performance) | 🟥 | **RVSM FL290–410 · RNAV 5 (FL245+) · high-elevation performance regime at SKBO** — defined in OM E; confirm current-AIRAC route/approach compliance. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Bogotá FIR (SKED) covers **southern and central Colombia** — the Andean interior including the capital, and the country's Amazon/Llanos (eastern plains) regions to the south and east. Colombia's airspace is divided into **two FIRs**: **Barranquilla (SKEC)**, covering the northern Caribbean coast and the San Andrés/Providencia insular territory, and **Bogotá (SKED)**, covering the rest of the country including the capital — both under the single ANSP, **Aerocivil/UAEAC**.
- **Confirmed containment:** 🟩 **El Dorado Intl (SKBO)**, Colombia's principal international gateway, sits inside Bogotá FIR (SKED), in the Fontibón district on the western edge of the city.
- **Vertical structure:** 🟧 Controlled airspace up to the upper limit; **RNAV routes apply from FL245 upward** across both Colombian FIRs (SKED/SKEC) per Aerocivil PBN implementation. Exact class-per-band and any lower/upper ATSU split not verified — confirm AIP Colombia ENR 2.1.
- **Adjacent FIRs (by boundary):**
  - **N — Barranquilla (SKEC).** The Caribbean-coast/insular Colombian FIR; operators routing north to the coast or San Andrés transit this boundary.
  - **SW — Guayaquil (SEFG, Ecuador).** Confirmed via published cross-border coordination: procedures govern traffic crossing the common boundary between FIR Lima, FIR Bogotá, FIR CENAMER and FIR/UTA Guayaquil (Guayaquil ACC Letters of Agreement).
  - **Other neighbours (Venezuela, Panama, Brazil, Peru):** 🟧 Colombia also borders Venezuela's Maiquetía FIR, Panama's FIR, Brazil's Amazônica FIR (SBAZ) and Peru's Lima FIR system along its other frontiers — exact idents and boundary geometry not verified this pass; do not rely on this line for planning without AIP confirmation.
- **Sectorisation:** not itemised this pass; the transit-relevant fact is that Aerocivil/UAEAC operates SKED as a single national ANSP function, with the Bogotá TMA/approach as the busiest terminal sector feeding SKBO.

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟧 **Aerocivil/UAEAC** area control for Bogotá FIR — specific ACC unit name not verified this pass.
- **Terminal ATSU:** 🟧 Bogotá TMA/approach control serving SKBO — unit name not verified this pass.
- **FIS / FSS:** Aerocivil/UAEAC flight-information service; not itemised separately.
- **Surveillance basis:** 🟧 radar/ADS-B expected around the Bogotá core given SKBO's traffic volume; not individually confirmed.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Bogotá FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO SAM-region standard RVSM band (Doc 7030), applicable across Colombian airspace including SKED. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 **RNAV 5** applies to RNAV routes in continental SKED/SKEC airspace from **FL245 and above** (Aerocivil PBN implementation). 🟧 Terminal RNP/RNP AR spec for SKBO arrivals/departures not verified — high-elevation, mountain-ringed fields commonly require RNP AR; confirm on current AIRAC. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟧 not verified — confirm whether Colombia has adopted 8.33 kHz or retains 25 kHz VHF spacing.
- **Datalink (CPDLC):** 🟧 not verified this pass. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟧 Mode S expected; ADS-B mandate/date not verified — confirm equipage requirement on the OFP.
- **High-elevation performance regime:** 🟥 **SKBO ~8,360 ft field elevation** places it squarely in K Global's high-elevation working trigger (≳8,000 ft) — density-altitude-driven TODR/climb-gradient/LDR effects and payload/fuel penalties apply. See [`OM E — High-Elevation Aerodrome Operations`](../../../../flight-ops/high-elevation-aerodrome-operations.md).

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a Bogotá-bound transit is worked by Aerocivil/UAEAC area-control sectors feeding the Bogotá TMA; exact sector split is AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Aerocivil/UAEAC flight-information service.
- **Language:** 🟩 **Spanish and English**; English available on international sectors serving SKBO.
- **8.33 kHz:** 🟧 status not verified — see §5.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 not confirmed as implemented; Colombia is presumed to operate a fixed ATS-route/RNAV-route network with tactical direct routings by ATC — verify.
- **Airway spine:** RNAV routes above FL245 form the upper structure across SKED/SKEC; the SimBrief/current-AIRAC route provides the exact string for a given routing.
- **Major fixes / entry-exit points:** FIR-boundary transition fixes from Barranquilla FIR (N) and Guayaquil FIR (SW), and the Bogotá TMA arrival transition onto the SKBO STAR; not itemised this pass.
- **Hubs & aerodromes inside the FIR:** 🟩 **El Dorado Intl (SKBO)** — Colombia's principal international gateway and the busiest airport in the country. Terminal detail is in the airport briefing (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟥 **Bogotá sits on the Sabana de Bogotá**, a high Andean plateau at **~8,360 ft (SKBO field elevation)**, bounded immediately **east by the Cerros Orientales (Eastern Hills)** and by wider Andean ranges beyond — foreground terrain is a first-order factor around the capital, not a distant enroute consideration.
- **Procedural terrain mitigation:** 🟧 published Bogotá procedures are designed to keep arriving/departing traffic clear of the mountainous zone ahead of high-terrain reference points (e.g. DME-arc-based containment around the Bogotá VOR, where minimum altitude steps up sharply — reported around **14,000 ft** in the mountainous sector) — confirm exact figures and geometry against the current AIP/approach charts; do not use the figure above for planning without chart confirmation.
- **Boundary terrain:** the Andes continue into the adjacent Guayaquil FIR (Ecuador) to the southwest and other neighbouring FIRs — consistently high, mountainous terrain across this part of the Andean corridor.
- **Driftdown / depressurisation escape:** 🟥 a real consideration given sustained high MORA around Bogotá — escape routing and oxygen/driftdown planning should account for high minimum altitudes, not a standard low-terrain assumption. Confirm against OM E and the SKBO airport brief.
- **Cold-temperature altitude corrections:** 🟧 relevant given the high-altitude, cool Andean climate — see OM E Cold Weather Operations and the airport brief.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| El Dorado Intl | **SKBO** | Primary intl gateway / dep-return alternate — high-elevation | [SKBO brief](../../../destinations/south-america/colombia/skbo/index.md) |

- **Coverage note:** 🟧 broader in-FIR alternate roster (e.g. other Colombian interior airports) not catalogued this pass — build additional briefs if they become planned alternates. Terrain around Bogotá constrains which fields are genuinely usable escape options; do not assume a nearby field is suitable without checking its own elevation/approach terrain.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 not itemised this pass — confirm active status via AIP/NOTAM at planning.
- **Danger / restricted / prohibited areas:** 🟧 not itemised this pass — Colombia publishes restricted/danger areas nationally; confirm at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none expected for a standard international arrival into SKBO; international arrival/customs handled at the destination.

> **SUA currency:** re-check active restricted/danger-area status and the current AIP/NOTAM picture at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** 🟧 ICAO-standard expectation — squawk **7600**, continue per last acknowledged clearance/filed route and levels; exact Colombian AIP refinement (ENR 1.8/GEN) not verified this pass.
- **Weather-deviation / in-flight contingency:** radar-tactical via ATC where surveillance is available — request the deviation and comply with the vector/level issued; confirm procedural fallback for any non-radar pockets.
- **Seasonal hazards (durable):** 🟧 **Andean convective activity** — afternoon/evening buildups over the mountainous interior; **fog/low stratus** possible at SKBO given its plateau setting and cool climate — confirm seasonal pattern in the airport brief.

> **Pull at planning (T-2h):** enroute NOTAMs, active restricted/danger areas, SIGMET/AIRMET, terrain/MSA confirmation on the current AIRAC chart, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **Exact airspace class per band**, Bogotá TMA structure, and enroute ATSU/unit naming — not verified this pass; confirm AIP Colombia ENR 2.1.
- **Terminal RNP/RNP AR spec at SKBO** — very likely given surrounding terrain, but not confirmed; check current AIRAC approach charts.
- **8.33 kHz channel-spacing status** and **CPDLC/ADS-B mandate** — not verified.
- **Precise terrain-containment procedure detail** (DME-arc/VOR-based containment, exact minimum-altitude figures) — the figure cited in §8 is unconfirmed and must be checked against the current AIP/approach plates before use.
- **Full adjacent-FIR roster and idents** beyond Barranquilla (SKEC, confirmed) and Guayaquil (SEFG, confirmed) — Venezuela/Panama/Brazil/Peru interfaces not verified.
- **Broader in-FIR alternate roster** — no OM C briefs yet beyond SKBO; build if additional Colombian interior fields become planned alternates.
- Seasonal-hazard detail (Andean convection, SKBO fog/stratus pattern) — corroborate against a meteorological source.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Aeronáutica Civil de Colombia (Aerocivil/UAEAC)** — national civil aviation authority and single ANSP for Colombian airspace, including the Bogotá (SKED) and Barranquilla (SKEC) FIRs — https://en.wikipedia.org/wiki/Colombian_Civil_Aviation_Authority (retrieved 2026-07-26); primary source is the Aerocivil AIP, not directly rendered this pass 🟧.
- **RNAV 5 / PBN implementation, Colombian FIRs (SKED/SKEC)** — RNAV routes apply RNAV 5 from FL245 to unlimited flight levels across continental Colombian airspace — general aviation-industry corroboration (retrieved 2026-07-26); primary AIP ENR 1.8 text not directly rendered this pass 🟧.
- **DGAC Ecuador / Guayaquil ACC Letters of Agreement** — confirms a defined common boundary and crossing procedure among **FIR Lima, FIR Bogotá, FIR CENAMER and FIR/UTA Guayaquil** — https://www.ais.aviacioncivil.gob.ec (retrieved 2026-07-26).
- **High-elevation field context (SKBO ~8,360 ft)** — internal cross-reference, `../../../../OM E Operations/High-Elevation Aerodrome Operations.md` (K Global working figure, itself sourced to FAA density-altitude / ICAO Annex 6 & 14 / SKYbrary material).
- **ICAO SAM regional supplementary procedures (Doc 7030)** — SAM RVSM (FL290–410) and regional route/comms procedures.
- Terrain-containment/DME-arc detail near SKBO — general aviation reference material (retrieved 2026-07-26); flagged 🟧, not cross-checked against the primary AIP/approach chart this pass.
- Companion OM C files: [`../../General/South America.md`](../../south-america.md) (parent area brief — currently Brazil-scoped; Colombia not yet covered there), [`../../../Airports/South America/Colombia/SKBO — El Dorado Intl/SKBO — Briefing.md`](../../../destinations/south-america/colombia/skbo/index.md), [`../../../../OM E Operations/High-Elevation Aerodrome Operations.md`](../../../../flight-ops/high-elevation-aerodrome-operations.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial build from `_FIR Briefing Template.md`. Bogotá FIR (SKED) — southern/central Colombia, containing SKBO (high-elevation, ~8,360 ft, primary intl gateway); ANSP/CAA Aerocivil/UAEAC (single combined authority); RVSM FL290–410 and RNAV 5 (FL245+) referenced/confirmed; terrain treated as a first-order hazard (Sabana de Bogotá plateau + Cerros Orientales + Andes), cross-linked to OM E High-Elevation Aerodrome Operations; Barranquilla FIR (SKEC) interface noted per instructions; Guayaquil FIR (SEFG) adjacency confirmed via published ACC coordination; other neighbouring FIR idents flagged unverified; airspace class, ATSU naming, RNP AR terminal spec, 8.33 kHz and CPDLC status flagged 🟧 for follow-up. |
