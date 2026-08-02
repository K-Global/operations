# Casablanca (GMMM) — FIR Briefing

**Scope:** single FIR — the **whole of Morocco** (GMMM is the country's **only** FIR/UIR), from the Rif and Atlas ranges to the Atlantic coast, containing the **Casablanca (GMMN) hub** and the Marrakech/Agadir/Tangier/Fes/Nador network · **Parent area brief:** [Africa](../../africa.md) 🟩 · **Adjacent FIRs:** Algiers (DAAA) E · Lisboa (LPPC, Portugal) N · Canarias (GCCC, Spain) SW (Atlantic, per published LoA) · Madrid-area Spanish FIRs NE across the Strait of Gibraltar 🟧 confirm exact split · Dakar-area Atlantic-coast structure S 🟧 confirm exact hand-off
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional; FIR ident and ANSP confirmed against ONDA/public sources, but exact RVSM band dates, class letters and the northern/southern boundary hand-offs are flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Casablanca FIR is a **mixed radar/procedural continental FIR** — surveillance around the Casablanca, Marrakech, Agadir, Tangier and Fes terminals, with the ACC internally divided into a main sector and secondary sectors (§3), and a lighter procedural residue over the Atlas interior and the southern Atlantic-coast approaches. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for aerodromes inside the FIR live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **GMMM** — Casablanca FIR/UIR; the **single FIR covering all of Morocco** |
| Controlling ATSU / ANSP | **Casablanca ACC**, **ONDA — Office National Des Aéroports** (Morocco's civil-aviation/airports/air-navigation authority) |
| Airspace class & vertical limits | 🟧 Controlled upper airspace (typically Class **A/C** on the airway/RVSM network) over Class **D/E/G** below; confirm exact class letter per band at **Morocco AIP ENR 2.1** |
| RVSM | 🟧 Applicable **FL290–FL410** in line with the wider AFI RVSM programme — confirm Morocco's specific implementation date at current AIP |
| PBN environment | 🟧 **RNAV 5** enroute presumed (AFI PBN programme); terminal RNP where published — confirm current AIP; see OM E §5 |
| Surveillance & datalink | 🟧 Radar/surveillance around **Casablanca, Marrakech, Agadir, Tangier, Fes**; lighter procedural residue over the Atlas interior and southern approaches. Datalink not a mature capability |
| Primary language & comms | 🟩 **French/Arabic** in general use, **English** (ICAO) for ATC; VHF around the majors, thinner over the Atlas/southern interior |
| Key hazard(s) | 🟥 **Atlas Mountains** terrain (Toubkal ≈13,671 ft) behind Casablanca/Marrakech; **Strait of Gibraltar** traffic-density/complexity at the N boundary; **Chergui** hot dust wind; winter Atlantic frontal weather |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟧 | **Mixed.** Radar/surveillance around the majors (Casablanca, Marrakech, Agadir, Tangier, Fes); confirm current coverage over the Atlas interior and the far south. |
| Communication coverage & language | 🟧 | **French/Arabic in general use, English for ATC.** VHF around the majors; thinner toward the Atlas interior and the southern Atlantic-coast approaches. Confirm sector frequencies from current AIP. |
| Datalink / surveillance requirement | 🟧 | CPDLC/ADS-C **not asserted as a mature capability** here. Transponder required; confirm any ADS-B requirement at planning. |
| Terrain / MORA / driftdown | 🟥 | **Atlas Mountains — Toubkal ≈ 4,167 m (~13,671 ft)**, the high spine behind Casablanca/Marrakech/Agadir; the **Rif Mountains** in the north behind Tangier/Fes are lower but still significant. Relevant to driftdown/escape planning on inland routings. §8. |
| Diversion-aerodrome coverage | 🟩 | **Good** — Casablanca, Marrakech, Agadir, Tangier, Fes and Nador give solid national spread; curated briefs exist for all six K Global-served fields (§9). |
| Special-use airspace (military / danger) | 🟧 | Danger/restricted areas AIP/NOTAM-published — pull the active list at planning. |
| Equipment / approval (RVSM, PBN, transponder) | 🟧 | **RVSM FL290–410 (presumed) · RNAV 5 (presumed) · transponder.** Confirm exact Morocco implementation dates and current-AIRAC route/levels. All defined in OM E. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Casablanca FIR (**GMMM**) is coterminous with **Morocco** — the country's **only** FIR/UIR, from the Rif/Mediterranean coast in the north, across the Atlas interior, to the Atlantic seaboard and the southern approaches.
- **Vertical split:** 🟧 lower controlled airspace (terminal CTAs/CTRs and the airway network) beneath the RVSM upper band; exact lower/upper handoff level and RVSM implementation date are AIP-defined — confirm at **Morocco AIP ENR 2.1 / 1.7**.
- **Adjacent FIRs (by boundary):**
  - **E — Algiers (DAAA, Algeria/ENNA)** — see the [Algiers (DAAA) FIR brief](algiers-daaa.md).
  - **N — Lisboa (LPPC, Portugal)**, across the Strait of Gibraltar / western Mediterranean approaches (per published FIR-boundary documentation).
  - **NE — Madrid-area Spanish FIRs** across the Strait of Gibraltar 🟧 confirm exact split.
  - **SW — Canarias (GCCC, Spain/Canary Islands)**, over the Atlantic, per a published Canarias–Casablanca Letter of Agreement.
  - **S — the Dakar-area Atlantic-coast structure** 🟧 exact FIR hand-off along Morocco's southern Atlantic coast not confirmed here — verify at planning.
- **Sectorisation:** 🟧 **Casablanca Control** is internally divided into a **main sector (GMMM_CTR)** and **secondary sectors** covering the eastern, western and southern portions of the FIR (per tier-4 network corroboration) — internal boundaries are AIP/AIRAC-dependent; fly the current sectorisation, not a stored one.

---

## 4. Control & ATSU

- **ATSU:** 🟩 **Casablanca ACC**, operated by **ONDA**, working the single GMMM FIR.
- **Surveillance basis:** 🟧 radar/surveillance around the **Casablanca, Marrakech, Agadir, Tangier and Fes** terminals; confirm current coverage over the Atlas interior and southern Atlantic-coast approaches, where control may be more procedural.
- **FIS:** flight information service provided by ONDA; ONDA also functions as Morocco's AIS/NOTAM authority (publisher of the AIP via SIA Maroc).

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Casablanca FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟧 **FL290–FL410** presumed in line with the AFI RVSM programme — confirm Morocco's specific implementation date at current AIP. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟧 **RNAV 5** enroute presumed; terminal RNP at the served airports where published — confirm current Morocco AIP. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟩 not an AFI requirement (an ICAO EUR mandate) — standard 25 kHz VHF applies; the northern boundary interfaces with EUR 8.33 kHz airspace across the Strait of Gibraltar.
- **Datalink (CPDLC / ADS-C):** 🟧 not asserted as a mature FIR-wide capability. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode C/S transponder required.** 🟧 Any ADS-B-Out requirement not asserted here — confirm the current Morocco AIP/NOTAM at planning.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a transit is worked by **Casablanca Control**, internally split across a main sector plus secondary (east/west/south) sectors (§3); exact sector frequencies are AIRAC/AIP-dependent — fly the current AIP frequencies, not a stored table.
- **Language:** 🟩 French/Arabic in general use; **English** (ICAO) for ATC.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 not confirmed for Casablanca FIR in public sources at this time — confirm current status at planning; assume the fixed airway network applies.
- **Airway spine:** the fixed ATS-route network links Casablanca with Marrakech, Agadir, Tangier, Fes and Nador, and connects toward the Algiers, Lisboa, Canarias and Madrid-area boundaries.
- **Major fixes / entry-exit points:** FIR-boundary reporting points toward the four/five adjacent FIRs, including the busy Strait-of-Gibraltar crossing; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Casablanca — Mohammed V (GMMN, hub)**, **Marrakech — Menara (GMMX)**, **Agadir — Al Massira (GMAD)**, **Tangier — Ibn Batouta (GMTT)**, **Fes — Saïss (GMFF)**, **Nador — El Aroui (GMMW)** — all **K Global-served**. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟥 the **Atlas Mountains** — **Toubkal ≈ 4,167 m (~13,671 ft)** — form the high spine behind Casablanca/Marrakech/Agadir, the highest terrain in North Africa. The **Rif Mountains** in the north (behind Tangier/Fes) are lower but still notable. The Atlantic coastal plain (Casablanca, Agadir) and the far south are comparatively low.
- **Boundary terrain:** no major terrain issue directly at the Algiers/Lisboa/Canarias boundaries beyond the Atlas's eastward extension toward Algeria.
- **Driftdown / depressurisation escape:** relevant for routings crossing the Atlas (Marrakech/Agadir inland approaches) or the Rif (Tangier/Fes); plan the engine-out/decompression escape to clear the local high terrain and reach a capable field (§9).
- **Cold-temperature altitude corrections:** 🟧 apply at higher-elevation Atlas-adjacent fields per the airport briefing and current OAT — see [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Casablanca — Mohammed V | **GMMN** | Home-served hub / primary alternate | [GMMN brief](../../../destinations/africa/morocco/gmmn/index.md) |
| Marrakech — Menara | **GMMX** | Southern/interior alternate (Atlas-adjacent) | [GMMX brief](../../../destinations/africa/morocco/gmmx/index.md) |
| Agadir — Al Massira | **GMAD** | Southern Atlantic-coast alternate | [GMAD brief](../../../destinations/africa/morocco/gmad/index.md) |
| Tangier — Ibn Batouta | **GMTT** | Northern / Strait-of-Gibraltar alternate | [GMTT brief](../../../destinations/africa/morocco/gmtt/index.md) |
| Fes — Saïss | **GMFF** | Northern-interior alternate | [GMFF brief](../../../destinations/africa/morocco/gmff/index.md) |
| Nador — El Aroui | **GMMW** | North-eastern / Mediterranean-coast alternate | [GMMW brief](../../../destinations/africa/morocco/gmmw/index.md) |

- **Coverage note:** 🟩 good national spread — all six K Global-served fields double as mutual alternates covering the Atlantic coast, the Atlas-adjacent interior and the northern Strait-of-Gibraltar corridor.

---

## 10. Special-use airspace

- **Military / danger / restricted areas:** 🟧 AIP/NOTAM-published — pull the active list at planning.
- **Overflight-permit / diplomatic considerations:** 🟧 Morocco requires **overflight and landing authorisation** from ONDA/the civil-aviation authority — a real dispatch item; confirm current requirements and lead-time.
- **Strait of Gibraltar complexity:** 🟧 the northern boundary crosses one of the busiest and most complex airspace/traffic-flow junctions in the region (Morocco/Spain/Gibraltar/Portugal interface) — expect dense traffic and tight coordination on northbound routings; not a hazard in the conflict-zone sense, but an operational-complexity watch item.

> **SUA currency:** re-check active danger/restricted areas at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** squawk **7600**; continue per the ICAO/Morocco AIP IFR comms-failure rules (last clearance / filed route and levels), attempt contact on the previous/adjacent frequency and 121.5. 🟧 confirm the Morocco-specific refinement at AIP ENR 1.
- **Weather-deviation / in-flight contingency:** radar-tactical via ATC around the terminals; apply standard ICAO Doc 4444 procedures over any procedural segment (Atlas interior, southern approaches).
- **Seasonal hazards (durable):**
  - **Chergui** — hot, dry, dust-laden easterly wind off the Sahara, most disruptive in summer; reduces visibility and raises turbulence risk near the Atlas.
  - **Winter Atlantic frontal weather** — affects the Atlantic-coast terminals (Casablanca, Agadir) in the cooler months; occasional snow on the higher Atlas terminals.
  - **Atlas mountain-wave / turbulence** — orographic effects near Marrakech/Agadir in strong-wind conditions.

> **Pull at planning (T-2h):** enroute NOTAMs, danger/restricted-area status, SIGMET/AIRMET (Chergui dust, Atlantic frontal weather, mountain wave), and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** and lower/upper handoff level (Morocco AIP ENR 2.1).
- Morocco's specific **RVSM implementation date** and any local nuance (current AIP ENR 1.7).
- Precise **Casablanca ACC internal sector boundaries** (main + secondary sectors) and frequencies (current AIP).
- **Terminal RNP / PBN spec** at the served airports and any **ADS-B-Out** requirement (current Morocco AIP).
- Whether **FRA** exists or is planned for Casablanca FIR.
- Exact hand-off geometry with **Lisboa (LPPC)**, the **Madrid-area** Spanish FIRs (Strait of Gibraltar) and the **Dakar-area** structure to the south.
- Current **overflight/landing-permit** lead-time and process (ONDA).
- **Per-quadrant grid-MORA** over the Atlas and Rif ranges — take from ENR charts; terrain elevations here are public-reference figures.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ONDA / SIA Maroc — Kingdom of Morocco AIP & NOTAM series** — https://siamaroc.onda.ma/eAIP/ENR/ENR6.1.3.pdf (Lisboa FIR/UIR LPPC · Casablanca FIR/UIR GMMM boundary documentation) · https://siamaroc.onda.ma/notams/ (retrieved 2026-07-26). ONDA is Morocco's civil-aviation/airports/air-navigation authority and AIP publisher.
- **IVAO Morocco — GMMN SOP** and **IVAO Spain — Canarias ACC (GCCC) / Casablanca ACC (GMMM) Letter of Agreement** (ACC sectorisation — main sector GMMM_CTR + secondary east/west/south sectors; southern Atlantic boundary corroboration) — https://ma.ivao.aero/sop/gmmn-sop · https://wiki.es.ivao.aero/books/loas/page/canarias-acc-gccc-and-casablanca-acc-gmmm (retrieved 2026-07-26). *Tier-4 corroboration only.*
- **ICAO — AFI RVSM (region-wide programme)** cross-reference — see [Africa area brief](../../africa.md) sources (retrieved 2026-07-26).
- **permit2fly.com — Morocco Overflight Permits** — https://permit2fly.com/region/africa/morocco-overflight-permits.html (retrieved 2026-07-26).
- **Terrain elevation (public reference)** — Toubkal (Atlas Mountains) ≈ 4,167 m / 13,671 ft — Wikipedia summit article (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. Casablanca FIR (GMMM) confirmed as Morocco's single FIR/UIR, worked by Casablanca ACC (ONDA), internally split into a main sector plus east/west/south secondary sectors (tier-4 corroborated); presumed **AFI-programme RVSM FL290–410** and RNAV 5 (dates to confirm); **Atlas Mountains (Toubkal)** and Rif terrain drive driftdown planning; all six served destinations (GMMN/GMMX/GMAD/GMTT/GMFF/GMMW) linked as mutual alternates; Strait-of-Gibraltar traffic-complexity note; Chergui dust / winter Atlantic frontal / mountain-wave seasonal hazards. Adjacent FIRs Algiers/Lisboa/Canarias/Madrid-area/Dakar-area. Parent area brief: Africa. |
