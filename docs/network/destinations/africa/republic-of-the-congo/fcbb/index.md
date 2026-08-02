# FCBB — Maya-Maya · Airport Briefing

**FCBB / BZV** · Brazzaville, Republic of the Congo · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build, AIP not independently reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from OurAirports/public cross-check sources (the ASECNA eAIP for Brazzaville was reachable only as a table of contents this pass — no AD 2 FCBB page could be pulled); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 4°15′06″S / 15°15′11″E (-4.2517, 15.2530) `[OurAirports, retrieved 2026-07-25]` — 🟧 differs by ~150 m from the previously-seeded Navigraph position (-4.25056, 15.25139); immaterial for planning, not AIP-verified |
| Field elevation | **1,048 ft / 319 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+1 (WAT, no DST) |
| Runway(s) | **05/23**, 3,300 × 45 m, asphalt, lighted `[OurAirports]`. A **former parallel/original runway alignment was rebuilt in 2010 as the current 05/23 and the older pavement retained as a taxiway** — effectively a single active runway with a full-length parallel taxiway (see §13). |
| Preferential runway | Not published / verify — no declared preferential-runway rule found 🟧 |
| Longest LDA | 3,300 m (05/23) — not independently split TORA/TODA/ASDA/LDA this pass, see §7 🟧 |
| Approaches | Not confirmed in reachable sources this pass — pull current-AIRAC approach list at planning 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | 🟧 **Procedural / non-radar** is the default assumption for this class of ASECNA field per the continental picture (see [Africa Airspace brief](../../../../airspace/africa.md) §3) — not independently confirmed for FCBB specifically |
| Elevation class | Near sea-level-equivalent (1,048 ft) — **not** hot-and-high; equatorial heat/humidity density-altitude effect is the relevant performance driver, not elevation |
| Special-airport status | Not operator-categorised in reachable sources; standing crew-briefing items are the short(ish) single runway for widebody weights and the historical poor-weather approach accident record (§3.4, §4) 🟧 |
| Customs / PoE | Yes — international gateway for the Republic of the Congo; desk hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` — 🟧 raw VAMSYS code; the H/L/M/S/R category scheme is **not yet defined project-wide** (see the company Knowledge base item B-008) — do not infer a meaning ("Restricted" etc.) beyond the raw letter |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| K Global suitable alternate | Yes — FCBB is carried as a Central-Africa/Congo-basin alternate in the network diversion picture (see [Africa Airspace brief](../../../../airspace/africa.md) §8) 🟧 not independently reconfirmed this pass |
| Company preferred alternates | **FKKD** (Douala, Cameroon), **FNBJ** (Luanda — Dr. António Agostinho Neto Intl, Angola) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Brazzaville sits on the north bank of the Congo/Malebo Pool in the flat Congo-basin lowland; no close-in high terrain relevant to the field. |
| Runway length vs fleet perf | 🟧 | 3,300 m is ample for narrowbody/regional-widebody ops but is the shortest of the three fields in this build — confirm weight-limited performance for any long-haul widebody type at equatorial temperatures. See §17. |
| Approach availability / minima | 🟧 | Not confirmed this pass — no primary AIP table reached; pull current-AIRAC procedures at planning. |
| Airspace / traffic / control | 🟧 | Procedural/non-radar assumption per the regional picture; FCBB and FZAA (Kinshasa) sit only **~13.7 NM apart across the Congo/Malebo Pool** under a **shared "Brazzaville–Kinshasa Pool" terminal control area** spanning two ANSPs (ASECNA for Congo, RVA for DRC) — a genuine cross-border coordination point (§3.2). |
| Weather / seasonal hazard | 🟧 | Equatorial climate; ITCZ convection and river-basin morning mist/haze are the standing seasonal hazards (§14). |
| Curfew / slots & operating restrictions | 🟧 | Not published / verify — no curfew or slot regime found in reachable sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | International PoE confirmed; desk hours and handling agent(s) not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
FCBB sits at 1,048 ft AMSL in the flat Congo-basin lowland on the north bank of the Congo/Malebo Pool. There is no close-in high terrain bearing on arrival, departure or missed-approach paths at the field itself; the nearest higher ground (the Bateke Plateau) lies well south/southwest and is not a factor for standard arrival/departure tracks. Verify the MSA ring on the current chart as routine practice — CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟧
The defining structural fact about this field is its **extreme proximity to FZAA (Kinshasa N'djili)** — only **~13.7 NM (25 km)** away across the river, reportedly among the closest pairs of national-capital international airports in the world. The ASECNA eAIP index lists a dedicated **"Terminal Control Area of Brazzaville–Kinshasa Pool"**, i.e. a **shared/pooled TMA spanning two sovereign states and two different ANSPs** — **ASECNA** (Brazzaville FIR, FCCC) on the Congo side and **RVA** (Régie des Voies Aériennes, Kinshasa FIR FZZA) on the DRC side. This cross-border coordination point is a real workload/complexity item: expect closely-spaced traffic patterns for two capital-city international airports and confirm the current inter-agency coordination procedure before operating either field. Beyond the local TMA, the wider en-route picture is the continent's default **procedural/non-radar** environment with HF where VHF ends — see the [Africa Airspace brief](../../../../airspace/africa.md) §3/§5.

### 3.3 Runway excursion 🟧
No displaced threshold or contamination data was found in reachable sources for RWY 05/23. The field's **only runway is a 2010 rebuild (3,300 × 45 m asphalt)**; the original runway alignment was retained as a full-length parallel taxiway rather than demolished, which is a ground-ops asset (§13) but does not change the single-runway-in-use picture. Not independently re-confirmed against a current AIRAC — flagged for verification.

### 3.4 Weather threat 🟧
Equatorial climate with the standard **ITCZ convective band** (embedded/towering CB, heavy rain) migrating seasonally per the regional picture (see [Africa Airspace brief](../../../../airspace/africa.md) §11), plus river-basin **morning radiation mist/haze** typical of the Congo/Malebo Pool riverine setting, most pronounced in the June–September dry season. The field's own accident history underlines the point: a 2009 cargo Antonov An-12 crashed on approach from Pointe-Noire, and a 2012 cargo Ilyushin Il-76 crashed short of the runway in bad weather into a residential area near the field, with substantial ground casualties — both are genuine, sourced reminders that marginal-weather approaches at this field carry real historical risk. No EDDF-style quantified fog-frequency statistic was found this pass.

### 3.5 Operational considerations 🟧
Plan around three durable items: (1) the **shared cross-border TMA with FZAA** (§3.2) and the associated coordination overhead of operating one of two capital-city fields sitting almost on top of each other; (2) the **historical weather-related accident record** at this field (§3.4), which argues for a conservative approach to marginal-weather arrivals; and (3) the **single-runway, shortest-of-the-three-fields** geometry (§2), which puts a premium on confirming weight-limited performance for any widebody rotation. RFF, navaid and approach detail are largely unconfirmed in reachable public sources this pass — the open items in §18 are mostly primary-source gaps rather than known safety-critical deficiencies.

---

## 4. Cautions & Warnings

- **FCBB and FZAA (Kinshasa) are ~13.7 NM apart** across the Congo/Malebo Pool, under a shared cross-border "Brazzaville–Kinshasa Pool" TMA — brief for coordination workload between two ANSPs when operating either field.
- **Single runway (05/23), 3,300 m** — the shortest of the three fields in this regional build; confirm weight-limited performance at equatorial temperatures for any widebody rotation.
- **Historical weather-related approach/landing accidents at this field** (2009 An-12 on approach; 2012 Il-76 short of the runway in bad weather, with ground casualties) — treat marginal-weather arrivals conservatively.
- **The original (pre-2010) runway alignment survives as a full-length parallel taxiway** — useful ground-ops asset, not a second runway.
- Mag variation, RFF category, and most communications/navaid detail are **not confirmed from a primary AIP source this pass** — the ASECNA eAIP for Brazzaville was reachable only as a table-of-contents index, not the AD 2 FCBB page itself (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; **K Global VAMSYS carries a raw category code "R"** whose scheme meaning is not yet defined project-wide (§1) — do not treat this as an operational restriction until the scheme is defined. 🟧
- **Crew-qualification gate:** No published special-crew-qualification requirement found; the standing briefing items are the cross-border TMA proximity to FZAA and the field's weather-accident history (§3). 🟧
- **Operating restrictions / bans:** None found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Republic of the Congo overflight/landing permit requirements are a standing item across ASECNA West/Central Africa (see [Africa Airspace brief](../../../../airspace/africa.md) §9) — confirm current permit/lead-time requirement before every operation. 🟥
- **Operations notes:** ANS provided by **ASECNA** (Brazzaville FIR, FCCC — one of ASECNA's six member FIRs); airport operator not independently confirmed this pass. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed; hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 3,300 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | 2010 rebuild; a modern terminal with three air bridges opened alongside it (2010, expanded 2013) |
| 23 | 3,300 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal |

*Source: OurAirports (retrieved 2026-07-25), cross-checked against Wikipedia's account of the 2010 runway rebuild. No primary AIP declared-distance table was reachable this pass — treat all distance splits (TORA/TODA/ASDA/LDA) as unconfirmed pending the current AD 2 FCBB page. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ACC / Control | Brazzaville CON | 121.1 MHz | Not published 🟧 | `[OurAirports]` |
| Info | Brazzaville INFO | 549.3 (units as published) | Not published 🟧 | 🟧 value as published by the tier-4 source; possibly an HF/NDB-band figure rather than a VHF MHz frequency — not independently re-confirmed, treat with caution |
| Tower | Brazzaville TWR | 121.1 MHz | Not published 🟧 | Same frequency as ACC/Control in the tier-4 source — plausible for a smaller procedural international field, not independently confirmed |
| Approach | Not published / verify | — | — | 🟧 |
| Centre / FIR | Brazzaville (FCCC), ASECNA | Per current AIRAC | H24 (assumed) | See [Africa Airspace brief](../../../../airspace/africa.md) |

*Source: OurAirports frequency table (retrieved 2026-07-25) — tier-4, not independently cross-checked against a primary AIP. Treat all values as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | BZ (Brazzaville Maya-Maya) | 113.10 MHz | Not published 🟧 | On field, ~0.7 NM ENE `[OurAirports]` |

*No on-field NDB was found in the reachable navaid dataset. Nearby DRC-side aids (Ndjili VOR-DME 115.00, Ndjili NDB 340 kHz, Ndolo NDB 318 kHz) sit 5–17 NM SE across the river and are cross-border assets, not FCBB's own. No ILS/approach-aid data found — pull current-AIRAC procedure/navaid detail at planning. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) assumed — confirm current chart.
- **Preferential runway logic:** Not published / verify — no declared preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05 | Not confirmed in reachable sources 🟧 | — | — | Pull current-AIRAC approach list at planning |
| 23 | Not confirmed in reachable sources 🟧 | — | — | Pull current-AIRAC approach list at planning |

- **STARs (names only):** Not confirmed — pull current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat basin); the field's weather-accident history (§3.4) argues for a conservative go-around threshold in marginal visibility/rain.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable sources this pass — pull current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** ASECNA's WACAF network carries RNAV 5 en-route and a growing Free Route Airspace/UPR structure at FL250+ — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) and the [Africa Airspace brief](../../../../airspace/africa.md) §4/§6. Terminal RNP/gradient specifics for FCBB not confirmed. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — verify locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found in reachable sources — treat as unregulated pending confirmation. 🟧
- **De-icing:** **NIL** — equatorial field, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** A modern terminal with **three air bridges** opened in 2010, with a second module (funded ~$160M, built by a Chinese construction firm) completed in 2013 — exact stand count/code-letter capacity for our fleet not confirmed. 🟧
- **Push-back:** Not confirmed — verify locally. 🟧
- **Standard taxi routes:** Confirm with Ground/Tower on the day. The **pre-2010 original runway alignment was retained as a full-length parallel taxiway** rather than removed — a notable ground-ops asset that may shape the standard taxi routing, though the exact routing is not confirmed this pass.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Equatorial climate on the Congo/Malebo Pool; two rainy seasons (roughly October–May) separated by a cooler, drier season (roughly June–September).
- **Seasonal hazards:** **ITCZ convective band** (heavy rain, embedded/towering CB) is the dominant en-route/terminal weather hazard per the regional picture — see [Africa Airspace brief](../../../../airspace/africa.md) §11. River-basin **morning mist/haze** is a plausible local low-visibility factor at a riverine field, most pronounced in the drier June–September season — not independently quantified for FCBB this pass. 🟧
- **Local effects:** Riverine setting on the Congo/Malebo Pool; no significant terrain-driven local wind effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, overflight-permit status, and the current Brazzaville–Kinshasa Pool TMA coordination notices. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Central-Africa/Congo-basin network alternate (not a K Global base — §1).
- **Nearest suitable alternates:** Company preferred alternates **FKKD** (Douala, Cameroon) and **FNBJ** (Luanda — Dr. António Agostinho Neto Intl, Angola) `[VAMSYS mirror 2026-07-26]` — both cross-country; confirm suitability, runway/RFF adequacy and current minima per leg. FZAA (Kinshasa, ~13.7 NM across the river) is the obvious geographic alternate but sits in a different state/ANSP (DRC/RVA) under the shared TMA (§3.2) — confirm cross-border diversion procedure if used tactically.
- **Fuel-uplift notes:** Not confirmed in reachable public sources. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,300 m is the shortest runway of the three fields in this build — confirm weight-limited takeoff performance for any long-haul widebody type at equatorial temperature/humidity. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- No field-specific widebody-stand or performance issue is confirmed, but the combination of the **shortest runway of the three regional fields (3,300 m)** and equatorial density-altitude effects on a long-haul type warrants a performance check before dispatching any widebody rotation at max structural/regulated takeoff weight. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (ASECNA AD 2 FCBB) could not be reached this pass** — only the eAIP table-of-contents index was reachable; runway PCN/declared-distance splits, RFF category, ATS hours, navaid/approach detail, SIDs/STARs and mag variation are all unconfirmed pending this source.
- **VAMSYS category code "R"** — scheme semantics (H/L/M/S/R) not yet defined project-wide; see the company Knowledge base B-008.
- **"Brazzaville–Kinshasa Pool" TMA** — exact lateral/vertical limits and the inter-ANSP (ASECNA/RVA) coordination procedure not confirmed this pass; confirmed only as an ASECNA eAIP section title.
- **Communications frequencies** — sourced to a tier-4 aggregator (OurAirports) only; the "INFO 549.3" figure in particular looks like it may be a non-VHF (kHz-band) value mislabelled as MHz — verify against a primary source.
- **Curfew/slot regime, fuel supplier/hours, customs desk hours, handling agent(s)** — none confirmed in reachable sources.
- **Suitable-alternate flag** — carried forward from the Africa Airspace brief's diversion listing, not independently reconfirmed against current VAMSYS this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/FCBB/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-25). *ARP/elevation/runway/frequency/navaid cross-check — tier-4.*
- Wikipedia — "Maya-Maya Airport" — https://en.wikipedia.org/wiki/Maya-Maya_Airport (retrieved 2026-07-25). *History, 2010/2013 terminal rebuild, accident record.*
- ASECNA — eAIP (ENR 0.6 index), valid from 09 JUL 2026 — https://aim.asecna.aero/html/eAIP/FR-_00ENR-0.6.eAIP-fr-FR.html (retrieved 2026-07-25). *Confirms the "Terminal Control Area of Brazzaville–Kinshasa Pool" section exists and that Brazzaville (FCCC) is an ASECNA FIR; the AD 2 FCBB aerodrome page itself was not reachable this pass — JS-frameset/deep-link limitation per the source register.*
- [Africa Airspace brief](../../../../airspace/africa.md) — ASECNA structure, RVSM/PBN, procedural/non-radar picture, conflict-zone context, seasonal hazards.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
