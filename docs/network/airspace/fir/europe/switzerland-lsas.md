# Switzerland (LSAS) — FIR Briefing

**Scope:** single FIR — the whole of Switzerland plus Liechtenstein (Liechtenstein has no airspace of its own; skyguide provides ANS there under delegation), together with cross-border sectors in neighbouring French, German and Italian airspace delegated to Swiss control · **Parent area brief:** [Europe (Continental)](../../europe.md) — 🟧 that brief covers the DE/FR/ES/PT continental corridor only and does **not** cover Switzerland/Alpine Central Europe; this FIR brief closes that scope gap · **Adjacent FIRs:** Langen (EDGG) N · München (EDMM) NE/E · Wien (LOVV) E — partial cross-delegation (Western Austria worked by skyguide, §3) · Milano (LIMM) S · France (Reims (LFEE) / Marseille (LFMM), DSNA) W 🟧 exact split not confirmed
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. The Switzerland FIR is a **fully radar/surveillance-controlled continental FIR** — no procedural or oceanic segment — but it is structurally unusual: **skyguide** (the single Swiss ANSP) controls not only Swiss airspace but also **delegated cross-border sectors in France, Germany, Austria and Italy**, and in turn some Swiss-adjacent foreign airspace delegates back the other way. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for the aerodromes inside the FIR (LSGG, LSZH) live in the airport briefings (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **LSAS — Switzerland FIR/UIR.** 🟩 Like Italy, Switzerland uses a **single ICAO designator for both the FIR and its overlying UIR** — the FRA layer (§7) begins at **FL195**, which functions as the practical lower/upper reference level, but FIR and UIR share the LSAS code and the same controlling ANSP |
| Controlling ATSU / ANSP | **skyguide (Swiss Air Navigation Services Ltd)** — the single national civil/military ANSP, operating **two ACCs**: **Geneva ACC** (French-speaking western Switzerland, plus the upper-airspace airways function) and **Zurich/Wangen ACC** (German-speaking Switzerland, Liechtenstein, western Austria and parts of southern Germany — delegated, §3) |
| Airspace class & vertical limits | 🟧 Controlled upper airspace with Class C predominant above the TMAs; TMA/CTR Class C/D; Class E/G below — confirm exact class letter per band at **AIP Switzerland ENR 1.4/2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals — Switzerland applies the EU PBN framework via its bilateral aviation agreement (not an EU member state but an EASA-system participant) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance; 🟧 **CPDLC ATN B1 above FL285** in the EU/EUR datalink area (equipped aircraft) |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **French/German/Italian regionally + English** (English always available on ATC sectors) |
| Key hazard(s) | 🟥 **The Alps** — the Swiss Alps run through the southern half of the country (Valais/Ticino/Graubünden), including peaks over 4,000 m (Dufourspitze 4,634 m, the Matterhorn 4,478 m); dense **military TSA/TRA** activity (skyguide is a combined civil/military ANSP); the unusual **cross-border delegation structure** itself is a structural point worth understanding for boundary awareness. Icelandic volcanic ash the strategic wildcard (§11) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled throughout — no procedural/oceanic segment. |
| Communication coverage & language | 🟩 | Continuous VHF; 🟥 **8.33 kHz mandatory**. French/German/Italian regionally; English always available. No HF/SATVOICE. |
| Datalink / surveillance requirement | 🟧 | CPDLC ATN B1 above FL285 in the EU/EUR datalink area — equipped-aircraft mandate; confirm active sectors. Mode S + **ADS-B Out** mandatory for our fleet. |
| Terrain / MORA / driftdown | 🟥 | **The Alps** dominate the southern half of the FIR — a genuine driftdown/escape-routing consideration for any track south of the Mittelland. Northern Switzerland (Mittelland/Jura) is comparatively benign. §8. |
| Diversion-aerodrome coverage | 🟩 | Zurich (LSZH) and Geneva (LSGG) are both inside the FIR with full curated briefs; coverage thins toward the high Alps (Ticino/Graubünden). §9. |
| Special-use airspace (military / danger) | 🟧 | skyguide is a **combined civil/military ANSP**; TSA/TRA activated via AUP/UUP; confirm current status at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E; confirm the current-AIRAC route meets the RAD. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** the Switzerland FIR covers the entire territory of Switzerland and, by delegation, **Liechtenstein** (which has no ANS provider of its own). It is bordered by Germany (N), Austria (E), Italy (S) and France (W).
- **Vertical split:** 🟩 Switzerland shares Italy's model of a **single designator for both FIR and UIR (LSAS)**, rather than the German-style separate lower-ACC/upper-UAC idents. skyguide's Free Route Airspace layer (**LSASFRA**, §7) begins at **FL195**, the practical reference level for the upper/lower structure.
- **The two-centre structure:** 🟩 skyguide operates **Geneva ACC** — covering French-speaking western Switzerland and functioning as the primary unit for the upper-airspace airway structure — and the **Zurich/Wangen ACC** (co-located near Dübendorf Air Force Base) — covering German-speaking Switzerland, **plus delegated airspace over Liechtenstein, western Austria and parts of southern Germany**. This is the reverse of the more familiar picture: skyguide does not just receive delegated cross-border sectors, it also **provides** ANS into neighbouring states' territory.
- **Cross-border delegated sectors (🟥 structural point, not just a footnote):** skyguide is responsible for Swiss airspace **and** adjoining areas of France, Germany, Austria and Italy delegated to its control; conversely, some Swiss-adjacent airspace historically saw French/German military coordination in "cross-border areas." Public sources indicate roughly **55% of skyguide's managed flight-kilometres are over Swiss territory and ~45% over delegated foreign airspace** — this is the highest degree of cross-border delegation of any FIR in this library. Treat any FIR-boundary assumption near Switzerland with caution; the political border and the ATC-responsibility border frequently do not coincide.
- **Adjacent FIRs (by boundary):**
  - **N — Langen (EDGG, DFS), Germany.** Central/south-western German FIR (see the Langen FIR brief).
  - **NE/E — München (EDMM, DFS), Germany.** Southern German/Bavarian FIR — the München brief lists Switzerland as its SW neighbour.
  - **E — Wien (LOVV, Austro Control), Austria.** 🟧 Complicated by the delegation noted above — **western Austrian airspace is worked by skyguide's Wangen centre**, not by Austro Control, even though it remains Austrian sovereign airspace. Do not assume the FIR-responsibility boundary matches the Austria/Switzerland political border here.
  - **S — Milano (LIMM, ENAV), Italy.** The Milano FIR brief lists Switzerland as its N/NW neighbour across the Alpine arc.
  - **W — France (Reims (LFEE) and/or Marseille (LFMM), DSNA).** 🟧 the exact French-FIR split along the western Swiss border (Jura/Geneva area) is not confirmed in this pass — plan-time verification recommended.
- **Sectorisation:** Geneva ACC and Zurich/Wangen ACC each subdivide into working sectors that combine/split with traffic and staffing; the transit-relevant fact is the **Geneva (west) / Zurich-Wangen (east, plus delegated territory)** geographic split rather than a lower/upper altitude split.

---

## 4. Control & ATSU

- **Controlling ATSU:** 🟩 **skyguide (Swiss Air Navigation Services Ltd)** — the single, combined civil/military ANSP for all of Switzerland, Liechtenstein and its delegated cross-border sectors.
- **Geneva ACC:** 🟩 western (French-speaking) Switzerland; also handles the upper-airspace airway function for the region.
- **Zurich/Wangen ACC:** 🟩 German-speaking Switzerland, **plus delegated coverage of Liechtenstein, western Austria and parts of southern Germany**; co-located with Dübendorf Air Force Base at Wangen-Brüttisellen.
- **FIS / FSS:** local Swiss FIS for uncontrolled/lower airspace; not a factor for an IFR hub transit remaining in controlled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B**; no procedural pockets on a normal IFR routing.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in this FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM (in force across the EUR region, which Switzerland participates in as an ICAO EUR state). See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5 (B-RNAV)** enroute · **RNP 1** terminal SID/STAR · **RNP APCH** arrivals — Switzerland applies the equivalent EU PBN framework under its bilateral air-transport agreement with the EU. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** across the ICAO EUR region, Switzerland included.
- **Datalink (CPDLC):** 🟧 **CPDLC ATN B1 over VDL Mode 2**, expected/mandated above **FL285** in the EU/EUR datalink service area — skyguide participates. VHF voice remains primary. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft >5,700 kg MTOW or >250 kt.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a hub transit is worked by **Geneva ACC** or **Zurich/Wangen ACC** depending on track, handed to the adjacent-FIR ACC at the boundary; exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Swiss FIS for information service in lower/uncontrolled airspace.
- **Language:** 🟩 **French, German, Italian** regionally; English always available on the controlled sectors.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **LSASFRA** — skyguide introduced a **permanently available Free Route Airspace on 1 December 2022** across the entire lateral limits of its area of responsibility, **above FL195**. It is published in the Swiss AIP and the EUROCONTROL Route Availability Document (RAD) under the name **LSASFRA**. Direct point-to-point routeing between defined entry/exit points is available in place of the fixed ATS route network, subject to airspace availability — connections can be blocked by activation of Temporary Reserved Areas (TRAs), which are common given skyguide's combined civil/military role.
- **Cross-border FRA extension:** 🟧 subsequent FABEC free-route work has extended Swiss upper-airspace free routeing to interconnect with adjoining French airspace and German cross-border routes — confirm current cross-border FRA connectivity at planning.
- **Airway spine (where FRA not available / RAD-constrained):** below FL195 and where the RAD restricts direct routeing, the fixed ATS-route network applies, including SID/STAR feeder structures into Zurich and Geneva.
- **Major fixes / entry-exit points:** FRA horizontal entry/exit points at the FIR boundary and the terminal transition fixes feeding Zurich/Geneva; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Zurich (LSZH)** and **Geneva (LSGG)**. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟥 the **Swiss Alps** dominate the southern half of the country — Valais, Ticino and Graubünden hold peaks above 4,000 m, including **Dufourspitze (4,634 m)**, the **Matterhorn (4,478 m)** and the **Jungfrau/Eiger/Mönch** massif. Northern Switzerland (the Mittelland plateau between Geneva/Zurich, and the Jura range along the French border, ~1,700 m max) is comparatively low.
- **Boundary terrain:** the Alpine system continues across the boundary into **Italy (Milano FIR)**, **Austria (Wien FIR)** and **France** — a continuous Alpine massif rather than a feature confined to Switzerland; see the Milano and München FIR briefs for the same range from those sides.
- **Driftdown / depressurisation escape:** 🟧 a genuine planning factor for any track transiting the southern half of the FIR (Ticino/Graubünden/Valais); Zurich and Geneva both sit in the lower-terrain Mittelland, giving good diversion options for tracks that stay north, but a track routing over or near the high Alps should have driftdown/escape routing considered at dispatch. Not re-derived here — a dispatch/performance-planning matter.
- **Cold-temperature altitude corrections:** applied at the terminal aerodromes in winter — see the airport briefings (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Zurich | **LSZH** | Primary in-FIR hub / alternate (north) | [LSZH brief](../../../destinations/europe/switzerland/lszh/index.md) |
| Geneva | **LSGG** | Primary in-FIR hub / alternate (west) | [LSGG brief](../../../destinations/europe/switzerland/lsgg/index.md) |

- **Coverage note:** 🟧 good in the Mittelland corridor between Zurich and Geneva; **sparser toward the high Alps** (Ticino/Graubünden/Valais) where terrain limits both field availability and approach minima. ETP/critical-point planning is not a driver in this radar-controlled continental FIR, but Alpine-sector alternates should be confirmed at planning for any track routing near the high terrain.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟧 skyguide is a **combined civil/military ANSP** — Swiss airspace carries active military training/exercise areas (including around Dübendorf, co-located with the Zurich/Wangen centre) activated via AUP/UUP; confirm active TRA/TSA at planning.
- **Danger / restricted / prohibited areas:** 🟧 named areas are AIP/NOTAM-published — pull live at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — Switzerland is not an EU member but is a full participant in the ECAC/ICAO EUR regulatory framework and Schengen-area air operation; no permits required for standard transit.

> **SUA currency:** re-check active TRA/TSA status (AUP/UUP) and the current RAD at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Standardised European Rules of the Air)**, which Switzerland applies as an ICAO EUR/ECAC state — squawk **7600**, continue per the SERA IFR comms-failure rules (last acknowledged clearance / filed route and levels), and attempt contact on the previous/adjacent frequency and 121.5. 🟧 Confirm any Swiss-specific refinement at **AIP Switzerland ENR 1.8/GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical — **request the deviation from ATC** and comply with the vector/level issued. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Alpine weather** — mountain wave/turbulence, rapid weather changes, foehn wind effects (notably at Zurich and in Alpine valleys), and winter icing/snow at the Alpine-adjacent terminals.
  - **Summer convection** — embedded CB/hail over the Alpine foothills and Mittelland; thunderstorm avoidance handled tactically.
  - **Winter terminal icing / low visibility / snow** at Zurich and Geneva — a terminal, not enroute, driver; see the airport briefings and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — Icelandic eruptions can propagate ash across European upper airspace; **VAAC London** is the responsible advisory centre for this sector.

> **Pull at planning (T-2h):** enroute NOTAMs, AUP/UUP (active TRA/TSA status) and current RAD, SIGMET/AIRMET (Alpine convection, mountain wave/turbulence), VAAC London volcanic-ash advisories, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** (AIP Switzerland ENR 1.4/2.1) — not individually verified this pass.
- Exact **French-FIR split** (Reims (LFEE) vs Marseille (LFMM)) along the western Swiss border — confirm at planning.
- Precise current-day extent of the **Wangen-centre delegation into western Austria and southern Germany**, and any reciprocal French/Italian delegated sectors to Switzerland — confirmed structurally from public sources but not mapped in detail here.
- **CPDLC ATN B1** active-sector list and login procedure above FL285 — confirm per-sector at planning.
- Cross-border FRA connectivity between LSASFRA and adjoining French/German free-route cells — confirm current status at planning.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **skyguide — Swiss air navigation service provider** (Geneva ACC / Zurich-Wangen centre roles, delegated cross-border areas, ~55%/45% Swiss/foreign flight-km split) — https://www.skyguide.ch/ (retrieved 2026-08-02).
- **skyguide — Free Route Airspace (LSASFRA)**, permanently available above FL195 from 1 December 2022 — https://www.skybriefing.com/free-route-airspace (retrieved 2026-08-02).
- **FABEC — Free Route Airspace** extension across Swiss upper airspace, adjoining French airspace and German cross-border routes — https://www.atc-network.com/atc-news/fabec/fabec-free-route-airspace-adds-swiss-entire-upper-airspace-adjoining-french-airspace-and-german-cross-border-routes (retrieved 2026-08-02).
- **Skyguide — Wikipedia** (Wangen/Zurich and Geneva operating centres; delegated airspace in Germany, Austria, France, Italy) — https://en.wikipedia.org/wiki/Skyguide (retrieved 2026-08-02).
- **ICAO Doc 7030 — Regional Supplementary Procedures (EUR)** — EUR RVSM (FL290–410), regional comms/PBN procedures.
- **EU/ICAO EUR regional mandates** (durable, applied by Switzerland via ICAO EUR/bilateral participation): 8.33 kHz channel spacing; PBN (RNAV 5 / RNP 1 / RNP APCH); CPDLC ATN B1 above FL285; Mode S + ADS-B Out; SERA comms-failure/contingency rules.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
