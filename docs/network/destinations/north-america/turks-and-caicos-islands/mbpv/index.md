# MBPV — Providenciales Intl · Airport Briefing

**MBPV / PLS** · Providenciales, Turks and Caicos Islands · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. The UK/TCI AIP (published by the Turks and Caicos Islands Airports Authority, TCIAA) was not reachable this pass — this brief is built from public tier-4 sources (OurAirports, Wikipedia, SkyVector-family aggregators, Universal Weather) cross-checked against a published VATSIM Caribbean (VATCAR/Nassau FIR) airport briefing. Treat figures without an AIP citation as 🟧 pending primary confirmation. Approaches/SIDs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 21°46′25″N / 72°16′06″W `[OurAirports]` 🟧 |
| Field elevation | **15 ft / 5 m AMSL** `[OurAirports/Wikipedia]` — a separate tier-4 briefing source states 28 ft; **discrepancy not resolved this pass** 🟧 |
| Mag variation | ≈11° W `[Universal Weather, tier-4]` 🟧 |
| Time zone | UTC−5 (EST, no DST) 🟧 |
| Runway(s) | **Single 10/28**, ≈2,807 × 45 m (9,209 × 148 ft), asphalt `[Wikipedia/OurAirports]` |
| Preferential runway | Not confirmed — wind-dependent 🟧 |
| Longest LDA | ≈2,806 m (both directions, near-symmetric) — not independently AIP-confirmed 🟧 |
| Approaches | RNAV (GNSS) RWY 10/28; VOR/DME RWY 10/28; NDB RWY 10/28 — no ILS 🟧 |
| RFF category | Not published/verify 🟧 |
| Control type | Approach/Tower service under **Nassau (MYNA)** FIR jurisdiction (tier-4); en-route **Miami ARTCC (KZMA)** per task-level routing context |
| Elevation class | Sea-level — not hot-and-high |
| Special-airport status | 🟧 **Not in VAMSYS** — category, base flag and taxi times all pending reconciliation; taxiways A/B reported Code-D-max in tier-4 chart material — see §5, §13 |
| Customs / PoE | **Yes** — Airport of Entry confirmed `[Universal Weather]` |
| K Global category | 🟧 **Not in VAMSYS** — pending |
| K Global base | 🟧 **Not in VAMSYS** — pending; assumed **No** |
| Company preferred alternates | 🟧 **Not in VAMSYS** — recommended for registration: **MTPP, MYTC, MYEF** (per task register) |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** — pending |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Low-lying Caicos Islands terrain — no significant high ground identified near the field. |
| Runway length vs fleet perf | 🟩 | ≈2,807 m full pavement length is broadly adequate for K Global widebody types; exact declared distances not AIP-confirmed — verify before relying on it. 🟧 |
| Approach availability / minima | 🟧 | RNAV (GNSS), VOR/DME and NDB procedures on both runway ends per tier-4 sources; no ILS identified; minima not independently confirmed. |
| Airspace / traffic / control | 🟧 | Field sits under Nassau (MYNA) approach jurisdiction (tier-4) with Miami Center (KZMA) en route per task-level context; exact class/radar-service level not independently AIP-confirmed. |
| Weather / seasonal hazard | 🟥 | Atlantic hurricane season (Jun–Nov) is the dominant seasonal threat for the Turks and Caicos Islands — see §14. |
| Curfew / slots / hours | 🟧 | Seasonal operating-hours pattern referenced in chart material but not independently confirmed from a public tier-1 source this pass. |
| RFF category vs our types | 🟧 | Not published/verify — confirm before relying on it operationally. |
| Fuel availability | 🟧 | Jet A and AVGAS availability corroborated by tier-4 sources; supplier/hours not AIP-confirmed. |
| Customs / handling / security | 🟧 | Airport of Entry confirmed; exact hours/agent not independently confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
The Caicos Islands are low-lying with no significant terrain near the field. This is not flagged as a terrain threat in reachable sources, but the primary AIP terrain/obstacle chart was not reachable this pass — treat as provisionally clear rather than independently verified. 🟧

### 3.2 Airborne conflict / traffic 🟧
The field sits under **Nassau (MYNA)** approach jurisdiction per tier-4 sources, with **Miami Center (KZMA)** providing en-route service per the task-level routing context for this build. A public tier-4 briefing document lists the field as Class D. Exact radar-service level, sector boundaries and current frequency assignment were not independently confirmed from a primary AIP source this pass — verify current airspace classification and control-facility assignment before relying on it operationally. 🟧

### 3.3 Runway excursion 🟧
The single 10/28 runway is reported at ≈2,807 m full pavement length with near-symmetric declared distances (≈2,806–2,807 m both ways per corroborating tier-4 sources) — a materially different profile from a runway with a large displaced-threshold reduction. Exact TORA/TODA/ASDA/LDA figures were not obtained from a primary AIP table this pass; treat the figures in §7 as provisional.

### 3.4 Weather threat 🟥
**Atlantic hurricane season (June–November, peak August–October)** is the defining seasonal threat for the Turks and Caicos Islands, consistent with the regional climatology documented for the other Caribbean fields in this network. See §14 and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

### 3.5 Operational considerations 🟥
Plan around: (1) **this field is not yet reconciled in VAMSYS** — category, base flag, alternates and taxi times are all pending, so treat every commercial/company-specific figure in this pack as provisional until VAMSYS registration is complete; (2) the **primary UK/TCI AIP was not reachable this pass** — runway/RFF/frequency data rests on tier-4 corroboration only; (3) a tier-4 chart-derived note restricts certain taxiways to **Code D and below**, a real potential constraint for a K Global Code E/F rotation pending confirmation (§13); and (4) general **wildlife-on-movement-area** and **nearby parachute/parasail activity (Grace Bay)** cautions appear in general aviation community references for this field — treat as a NOTAM-watch item rather than a confirmed standing hazard pending primary-source verification.

---

## 4. Cautions & Warnings

- **Field not in VAMSYS** — do not assume a company category, base status or standard alternates without checking current VAMSYS registration status first.
- **Primary AIP not reachable this pass** — treat every runway/RFF/frequency figure in this brief as provisional pending a live-AIRAC cross-check.
- **Elevation discrepancy (15 ft vs 28 ft) between corroborating tier-4 sources** — confirm the correct field elevation before using it for any performance calculation.
- **Possible Code-D taxiway limitation on part of the field** (tier-4 sourced) — confirm current taxiway weight/wingspan limits before routing a Code E/F aircraft.
- **General wildlife-on-movement-area and nearby parachute/parasail activity (Grace Bay) cautions** appear in general-aviation community references — treat as a NOTAM-watch item, not a confirmed standing hazard.
- **Hurricane season (Jun–Nov)** carries real diversion/closure risk across the Turks and Caicos Islands.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a restricted-crew "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** No CAT II/III or company-restricted-crew requirement identified (non-precision approaches only, per tier-4 sources). 🟧
- **Operating restrictions / bans:** None specifically identified beyond the possible taxiway weight/wingspan limitation noted in §3.5/§13. 🟧
- **Overflight / entry / permits:** Standard UK Overseas Territory (Turks and Caicos Islands) international arrival; no special state permit identified. 🟩
- **Operations notes:** Airport operated by the **Turks and Caicos Islands Airports Authority (TCIAA)**; regulatory oversight by the **Turks and Caicos Islands Civil Aviation Authority**, itself overseen by **Air Safety Support International (ASSI)**, a UK CAA subsidiary responsible for UK Overseas Territories aviation safety regulation.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed this pass — a tier-4 chart-derived source references a seasonal operating-hours pattern (longer hours roughly Mar–Nov, an additional hour Nov–Mar) but the exact published figures were not independently confirmed | 🟧 |
| AD operating hours | Not confirmed this pass | 🟧 |
| Night / curfew restrictions | Not confirmed this pass | 🟧 |
| RFF category | Not published/verify | 🟧 |
| Fuel | Jet A and AVGAS 100LL corroborated by tier-4 sources; supplier/hours not AIP-confirmed | 🟧 |
| PCN | Not confirmed this pass | 🟧 |
| Customs | Airport of Entry confirmed; hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed this pass | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | ≈2,807 × 45 m | Asphalt / PCN not confirmed | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | **≈2,806 m** (near full length) | Corroborated across multiple tier-4 sources; not independently AIP-confirmed |
| 28 | ≈2,807 × 45 m | Asphalt / PCN not confirmed | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | **≈2,806 m** (near full length) | Corroborated across multiple tier-4 sources; not independently AIP-confirmed |

*Source: Wikipedia, OurAirports, Universal Weather (all tier-4), broadly consistent on ≈2,807 m/9,209 ft full pavement length. The UK/TCI AIP (TCIAA) was not reachable this pass — treat this table as provisional pending primary confirmation. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Ground | Providenciales Ground | Not confirmed 🟧 | Not confirmed | |
| Tower | Providenciales Tower | Not confirmed 🟧 | Not confirmed | |
| Approach | Provo Approach | Not confirmed 🟧 | Not confirmed | Under Nassau (MYNA) jurisdiction per tier-4 sources |
| ATIS | Providenciales ATIS | Not confirmed 🟧 | Not confirmed | |
| Centre / FIR | Miami Center (KZMA) / Nassau (MYNA) | Per current AIRAC | — | See [North America Airspace brief](../../../../airspace/north-america.md) 🟧 — built for the EDDF–KSFO polar/west-coast routing, does not cover the Bahamas/Turks and Caicos; treat as the nearest available area pointer only. |

*None of the above frequencies are independently AIP-confirmed this pass — treat every figure as provisional pending primary-source access. Source register only: no citable public frequency table was reached.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | PVN | 115.60 (tier-4 corroborated) | Not confirmed 🟧 | On-field, "Providenciales" |

*Not independently AIP-confirmed — treat as provisional.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 — confirm no local override.
- **Preferential runway logic:** Not confirmed — wind-dependent. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 10 | RNAV (GNSS); VOR/DME; NDB | Not independently AIP-confirmed 🟧 |
| 28 | RNAV (GNSS); VOR/DME; NDB | Not independently AIP-confirmed 🟧 |

- **STARs (names only):** RNAV arrival procedures reported in tier-4 general-aviation reference material for this field — names not independently confirmed from a primary source this pass. 🟧
- **LVP:** No LVP/CAT II-III infrastructure identified. 🟧
- **Missed approach watch-items:** No terrain driver identified (§3.1); confirm current missed-approach procedure and any airspace/traffic re-sequencing consideration under Nassau (MYNA)/Miami (KZMA) jurisdiction.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV departure procedures reported in tier-4 general-aviation reference material for RWY 10 — names not independently confirmed from a primary source this pass. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. 🟧
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed. 🟧
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified in reachable sources. 🟧
- **De-icing:** **NIL** — not applicable at this field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not itemised in reachable sources. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed. 🟧
- **Hot spots / tight taxiways:** 🟧 A general-aviation chart-derived reference notes certain taxiways restricted to **Code D and below** — a potential constraint for a K Global Code E/F rotation; **not independently AIP-confirmed**, verify before relying on it for stand/taxi planning.
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical maritime climate, trade-wind-dominated.
- **Seasonal hazards:** **Atlantic hurricane season (June–November, peak August–October)** is the defining seasonal threat for the Turks and Caicos Islands, consistent with the regional climatology documented for the other fields in this network. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Local effects:** None specifically identified beyond the regional hurricane-season risk.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical cyclone advisories (NOAA/NHC) in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, wildlife-on-movement-area bulletins, nearby parachute/parasail activity (Grace Bay area), RFF status, tropical-cyclone advisories in season. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Network destination (Turks and Caicos gateway) — role classification pending VAMSYS reconciliation.
- **Nearest suitable alternates:** 🟧 **Not yet registered in VAMSYS.** Recommended for registration per the current planning register: **MTPP** (Port-au-Prince, Haiti), **MYTC** (Turks and Caicos — cross-check ident before relying on it), **MYEF** (Bahamas) — confirm ICAO idents, runway/RFF adequacy and current minima per leg before use, and register in VAMSYS.
- **Fuel-uplift notes:** Jet A and AVGAS 100LL corroborated by tier-4 community sources; supplier, grade availability and hours not AIP-confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Full pavement length (≈2,807 m) is not expected to be limiting for K Global types based on tier-4 corroboration, but this is **not independently AIP-confirmed** — verify before relying on it. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration identified beyond the general possible Code-D taxiway limitation (§13), which should be checked against the assigned type before any Code E/F rotation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field not yet reconciled in VAMSYS** — category, base flag, company alternates and taxi times are all pending; the alternates listed in §16 are recommendations for registration, not confirmed VAMSYS data.
- **Primary UK/TCI AIP not reachable this pass** (published by TCIAA, subscription/access-gated) — re-verify this entire brief against it when access is available.
- Field elevation discrepancy (15 ft vs 28 ft across corroborating tier-4 sources).
- Full TORA/TODA/ASDA declared-distance table (only near-symmetric LDA estimate obtained this pass).
- RFF category.
- ATS/AD operating hours and any curfew.
- Communications frequencies (none independently confirmed from a citable public source this pass).
- Taxiway weight/wingspan restriction (Code D reference is tier-4, not AIP-confirmed).
- Alternate ICAO ident MYTC — cross-check against the current airport register before use.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- Wikipedia — "Providenciales International Airport" — https://en.wikipedia.org/wiki/Providenciales_International_Airport (retrieved 2026-07-26). *History, runway dimensions, operator (TCIAA).*
- OurAirports — https://ourairports.com/airports/MBPV/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Universal Weather and Aviation — "Providenciales Airport (MBPV/PLS)" — https://www.universalweather.com/airports/MBPV-PLS-PROVIDENCIALES-AIRPORT-PROVIDENCIALES-ISLAND-TURKS-AND-CAICOS-ISLANDS/ (retrieved 2026-07-26). *Mag var, Airport-of-Entry confirmation, runway heading/length cross-check.*
- Air Safety Support International (ASSI) — "Aeronautical Information Publications" — https://www.airsafety.aero/airports-and-air-traffic-services/aeronautical-informaton-publications (retrieved 2026-07-26). *Confirms the UK/TCI AIP is published via the TCI Airports Authority; access not reachable this pass.*
- VATSIM Caribbean (VATCAR, Nassau FIR division) — "MBPV – Providenciales International" airport briefing — https://nassau.vatcar.net/wp-content/uploads/2023/09/MBPV-Briefing.pdf (retrieved 2026-07-26). **Network-sim document, not regulatory** — used per the VATSIM cross-check provision for approach/departure procedure names and the alternate elevation figure (28 ft); corroboration only, not authoritative.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
