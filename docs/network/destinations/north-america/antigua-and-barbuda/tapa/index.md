# TAPA — V C Bird Intl · Airport Briefing

**TAPA / ANU** · Osbourn, Saint George Parish, Antigua and Barbuda · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. The primary Eastern Caribbean AIP (ECCAA member-state AIP, published via the Trinidad and Tobago CAA) is subscription-gated and was not reachable this pass — this brief is built from public tier-4 sources (SkyVector, OurAirports, Wikipedia) cross-checked against a published VATSIM Caribbean (VATCAR/Piarco) airport SOP. Treat figures without an AIP citation as 🟧 pending primary confirmation. Approaches/SIDs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 17°08′12″N / 61°47′35″W `[OurAirports/Wikipedia]` 🟧 |
| Field elevation | **62 ft / 19 m AMSL** `[OurAirports]` (SkyVector shows 60 ft — minor tier-4 discrepancy) 🟧 |
| Mag variation | Not confirmed this pass 🟧 |
| Time zone | UTC−4 (AST, no DST) |
| Runway(s) | **Single 07/25**, 3,038 × 45 m (9,967 × 148 ft), hard-surfaced (asphalt) `[SkyVector]` 🟧 |
| Preferential runway | Wind-dependent; caution advised on RWY 07 approach in E/SE winds (turbulence) per VATCAR SOP |
| Longest LDA | ≈2,738 m (RWY 25, derived from displaced threshold); RWY 07 ≈2,538 m — **not independently AIP-confirmed** 🟧 |
| Approaches | RNAV, 12 DME ARC, VOR/DME, VOR (RWY 07); 12 DME ARC, VOR/DME, VOR (RWY 25); NDB-A (circling) — **no ILS, no published SID** 🟧 |
| RFF category | Not published/verify 🟧 |
| Control type | **Procedural (non-radar)** — VC Bird has no local radar; approach control is procedural, en-route under Piarco (TTZP) |
| Elevation class | Sea-level (62 ft) — not hot-and-high |
| Special-airport status | 🟧 **Non-radar procedural environment; Taxiway A restricted to ≤65,000 lb / ≤100 ft wingspan (day only)** — see §5, §13 |
| Customs / PoE | **Yes** — international airport 🟧 (hours not confirmed) |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **TNCM, TTPP** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | No close-in high terrain identified for this field in reachable sources; a general turbulence caution exists for the RWY 07 approach in easterly/south-easterly wind (see §3.4). |
| Runway length vs fleet perf | 🟩 | 3,038 m full pavement length is ample for K Global widebody types; displaced thresholds reduce usable LDA on both ends (§7) — confirm current performance figures per rotation. |
| Approach availability / minima | 🟧 | Non-precision only (RNAV/DME-ARC/VOR/NDB); no ILS; **no published SID** — departures are ATC-instructed. |
| Airspace / traffic / control | 🟥 | **Non-radar procedural environment** — no local surveillance radar; en-route control is Piarco (TTZP); brief crews for procedural separation and reporting discipline. |
| Weather / seasonal hazard | 🟥 | Atlantic hurricane season (Jun–Nov) is the dominant seasonal threat for the Leeward Islands generally — see §14. |
| Curfew / slots / hours | 🟧 | No formal night curfew found for IFR ops; "no VFR traffic at night" restriction confirmed per VATCAR SOP (network-sim source, not regulatory) — treat as indicative only. |
| RFF category vs our types | 🟧 | Not published/verify — confirm before relying on it operationally. |
| Fuel availability | 🟧 | Multiple FBO/fuel providers identified (tier-4); specific supplier/hours not AIP-confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; exact hours/agent not independently confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
No close-in high terrain relevant to arrival, departure or missed-approach paths was identified for this field in reachable sources. This is not flagged as a significant terrain threat, but the primary AIP terrain/obstacle chart was not reachable this pass — treat as provisionally clear rather than independently verified. 🟧

### 3.2 Airborne conflict / traffic 🟥
V C Bird operates in a **procedural, non-radar environment** — a published Caribbean-division ATC reference states plainly that the field "doesn't have any radar services, thus pilots should expect procedural approaches," with no surveillance radar approach (SRA) or precision radar approach (PRA) available. En-route control in the surrounding airspace is provided by **Piarco (TTZP)**, Trinidad. Crews should expect procedural position reporting, wider separation standards, and a non-radar workload profile distinct from radar-equipped network fields. No discrete transponder code assignment should be expected in a purely procedural clearance. 🟥

### 3.3 Runway excursion 🟧
Both runway ends carry a displaced threshold (RWY 07 ≈1,640 ft/500 m; RWY 25 ≈984 ft/300 m per SkyVector), reducing usable landing distance below the full 3,038 m pavement length. Exact TORA/TODA/ASDA figures were not obtained from a primary AIP table this pass — treat the derived LDA figures in §7 as provisional pending AIP confirmation. No contamination/braking-action data was found for this field.

### 3.4 Weather threat 🟥
**Atlantic hurricane season (June–November, peak August–October)** is the defining seasonal threat for Antigua and the wider Leeward Islands, consistent with the regional climatology also documented for neighbouring Sint Maarten. A Caribbean-division ATC reference separately notes a **turbulence caution on the RWY 07 approach when winds are from the east or south-east** — treat this as a standing caution for that configuration. See §14 and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

### 3.5 Operational considerations 🟥
Plan around: (1) the **non-radar procedural control environment** (§3.2) — a real workload and separation-standard difference from radar-equipped network fields; (2) the **Taxiway A restriction** — day-operations only, maximum takeoff weight 65,000 lb (29,500 kg) and maximum wingspan 100 ft (30 m), i.e. usable up to a Dash 8 Q400-class aircraft only — **any K Global Code C/D+ type must use an alternate taxi routing**, confirm with handling before the rotation (§13); (3) the **absence of a published SID** — departures are flown as instructed by ATC rather than a charted lateral/vertical procedure; and (4) the **primary AIP being unreachable this pass** — several fields in §1/§6/§7/§9 carry a provisional flag pending a live-AIRAC cross-check.

---

## 4. Cautions & Warnings

- **Non-radar, procedural approach control** — do not expect radar vectoring or a discrete SSR code assignment as the default; brief procedural reporting discipline.
- **No published SID** — departure routing is ATC-instructed on the day; do not expect a charted lateral/vertical departure procedure.
- **Taxiway A is day-only and limited to ≤65,000 lb / ≤100 ft wingspan** — confirm the assigned ground routing avoids Taxiway A for any K Global Code C/D+ aircraft.
- **Turbulence caution on the RWY 07 approach in easterly/south-easterly wind** (tier-4 sourced) — brief accordingly.
- **No VFR traffic permitted at night** (tier-4 sourced; not independently AIP-confirmed) — relevant to any non-IFR positioning/ferry consideration.
- **Hurricane season (Jun–Nov)** carries real diversion/closure risk across the Leeward Islands generally.
- **Primary AIP not reachable this pass** — treat runway/RFF/frequency figures in this brief as provisional until cross-checked against the current Eastern Caribbean AIP.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **non-radar procedural environment** and the **Taxiway A weight/wingspan restriction**. 🟧
- **Crew-qualification gate:** No CAT II/III or company-restricted-crew requirement identified (non-precision approaches only). 🟧
- **Operating restrictions / bans:** No published SID (§3.5); no RNP AR requirement identified; night VFR prohibited (tier-4). 🟧
- **Overflight / entry / permits:** Standard Antigua and Barbuda international arrival; no special state permit identified. 🟩
- **Operations notes:** Airport operated by the **Antigua and Barbuda Airport Authority**. The **Eastern Caribbean Civil Aviation Authority (ECCAA)** maintains an Antigua Outstation on airport property as the regional safety-oversight body (regulatory presence, not the ATC/ANSP provider).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed this pass — Wikipedia references the terminal operating "24 hours a day" but this describes the terminal, not ATS specifically | 🟧 |
| AD operating hours | Not confirmed this pass | 🟧 |
| Night / curfew restrictions | No IFR curfew identified; "no VFR traffic at night" per tier-4 source | 🟧 |
| RFF category | Not published/verify | 🟧 |
| Fuel | Multiple FBO/fuel providers identified (tier-4); type/hours not confirmed | 🟧 |
| PCN | Not confirmed this pass | 🟧 |
| Customs | International PoE confirmed; hours not confirmed | 🟧 |
| Handling / FBO | Multiple FBOs identified at the field (tier-4); specific agent for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 3,038 × 45 m | Hard (asphalt) / PCN not confirmed | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | **≈2,538 m** (derived from a ≈500 m/1,640 ft displaced threshold) | Displaced threshold — verify exact figure against current AIRAC |
| 25 | 3,038 × 45 m | Hard (asphalt) / PCN not confirmed | Not confirmed 🟧 | Not confirmed 🟧 | Not confirmed 🟧 | **≈2,738 m** (derived from a ≈300 m/984 ft displaced threshold) | Displaced threshold — verify exact figure against current AIRAC |

*Source: SkyVector (tier-4) for full pavement length and displaced-threshold distances; TORA/TODA/ASDA not obtained from a primary AIP table this pass — the Eastern Caribbean AIP (ECCAA/T&TCAA) is subscription-gated and was not reachable. Treat all figures in this table as 🟧 pending AIP confirmation. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Ground | V C Bird Ground | 121.900 | Not confirmed 🟧 | |
| Tower | V C Bird Tower | 118.200 | Not confirmed 🟧 | |
| Approach | V C Bird Approach | 119.100 | Not confirmed 🟧 | **Procedural (non-radar)** — see §3.2 |
| ATIS | V C Bird ATIS | 132.400 | Not confirmed 🟧 | A separate VATSIM SOP figure (114.500) duplicates the on-field VOR frequency and is likely an SOP transcription artefact — 132.400 (SkyVector) is used here 🟧 |
| Emergency | — | 121.500 | — | |
| Centre / FIR | Piarco (TTZP) | Piarco Radar 123.700 / Piarco South Radar 125.400 (tier-4) | — | See [North America Airspace brief](../../../../airspace/north-america.md) 🟧 — built for the EDDF–KSFO polar/west-coast routing, does not cover the Eastern Caribbean/Piarco FIR; treat as the nearest available area pointer only. |

*Source: SkyVector (tier-4), cross-checked against a published VATSIM Caribbean (VATCAR/Piarco division) airport SOP — network-sim document, not regulatory; frequencies are broadly consistent between the two sources except the ATIS figure noted above.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | ANU | 114.500 | Not confirmed 🟧 | On-field ("V C Bird Saint Johns") |
| NDB | ZDX | 369 | Not confirmed 🟧 | On-field, co-located with VOR |

*Source: SkyVector (tier-4). No ILS identified for this field in reachable sources.*

---

## 10. Arrival

- **Transition altitude / level:** TA 2,500 ft; TL FL040 (tier-4, VATSIM Caribbean SOP — not independently AIP-confirmed). 🟧
- **Speed:** Standard 250 KIAS below FL100 — confirm no local override.
- **Preferential runway logic:** Wind-driven; caution advised on the RWY 07 approach in east/south-east wind (turbulence, tier-4 sourced).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 07 | RNAV; 12 DME ARC; VOR/DME; VOR | Reporting points (tier-4): EMALI/BOPAR (RNAV), OMREL (VOR/DME) |
| 25 | 12 DME ARC; VOR/DME; VOR | Reporting point (tier-4): LENED (VOR/DME) |
| — | NDB-A | Circling procedure |

- **STARs (names only):** None identified — non-radar procedural field, arrivals flown via the DME-ARC/VOR transitions above. 🟧
- **LVP:** No LVP/CAT II-III infrastructure identified — non-precision minima only. 🟧
- **Missed approach watch-items:** No significant terrain driver identified (§3.1); the primary concern on a missed approach is re-establishing procedural separation in the non-radar environment rather than a terrain escape manoeuvre.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **None published** — V C Bird does not offer Standard Instrument Departures; departures are flown as instructed by ATC. 🟧
- **RNP / climb-gradient requirements:** Not applicable in the absence of a published SID; confirm any RNP requirement for the RNAV RWY 07 approach transition on the current chart.
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** All departing IFR traffic should notify Ground at least 5 minutes before start-up (tier-4, VATSIM Caribbean SOP).
- **ATC slot / CTOT & clearance:** No slot/CTOT regime identified. IFR clearance follows a standard (modified-CRAFT-style) format at this field; no discrete transponder code should be expected given the non-radar environment. 🟧
- **De-icing:** **NIL** — not applicable at this field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No noise-abatement programme identified in reachable sources. 🟧
- **Night noise / dB limits:** None identified.
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not itemised in reachable sources; the field is described (tier-4) as having one main ramp north of the runway connecting via four taxiways. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed beyond the Taxiway A restriction below. 🟧
- **Hot spots / tight taxiways:** 🟥 **Taxiway A is restricted to day operations only, aircraft ≤65,000 lb (29,500 kg) MTOW and ≤100 ft (30 m) wingspan** (tier-4, VATSIM Caribbean SOP) — i.e. usable up to Dash 8 Q400-class aircraft. Any K Global Code C/D+ type must be routed via an alternate taxiway; confirm with handling before the rotation. A separate idle-power taxi requirement is noted from one specific ramp position in the same source — confirm current procedure with Ground on the day.
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical maritime climate, trade-wind-dominated.
- **Seasonal hazards:** **Atlantic hurricane season (June–November, peak August–October)** is the defining seasonal threat across Antigua and Barbuda and the wider Leeward Islands. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Local effects:** Turbulence caution on the RWY 07 approach in east/south-east wind (tier-4 sourced) — treat as a standing caution for that configuration pending AIP confirmation.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical cyclone advisories (NOAA/NHC) in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. Taxiway A status), navaid U/S, lighting, obstacle/crane, RFF status, tropical-cyclone advisories in season. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Network destination (Leeward Islands / Eastern Caribbean gateway).
- **Nearest suitable alternates:** Company preferred alternates **TNCM** (Sint Maarten), **TTPP** (Port of Spain, Trinidad — Piarco) `[VAMSYS mirror 2026-07-26]` — confirm runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Multiple FBO/fuel providers identified at the field (tier-4); specific supplier, grade availability and hours not AIP-confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Full pavement length (3,038 m) is not limiting for K Global types, but displaced thresholds reduce usable LDA (§7) — confirm current landing-performance figures per rotation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration beyond the general displaced-threshold LDA caution (§7) and the Taxiway A weight/wingspan restriction (§13), which effectively excludes every K Global type from that specific taxiway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP not reachable this pass** — the Eastern Caribbean AIP (ECCAA member-state content, published via the Trinidad and Tobago CAA) is subscription-gated; this entire brief should be re-verified against it when access is available.
- Full TORA/TODA/ASDA declared-distance table (only derived LDA figures obtained this pass).
- RFF category.
- ATS/AD operating hours and any formal night curfew (only a tier-4 "no VFR at night" note obtained).
- PCN (runway/taxiway/apron).
- Fuel supplier(s) and hours.
- Customs/immigration hours.
- ATIS frequency discrepancy between SkyVector (132.400) and the VATSIM Caribbean SOP (114.500, likely a transcription artefact).
- Mag variation.
- Stand/apron layout and count.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- SkyVector — "TAPA - St. John's/V.C. Bird - International Airport" — https://skyvector.com/airport/TAPA/St-Johns-Vc-Bird-Antigua-Airport (retrieved 2026-07-26). *Coordinates, elevation, runway dimensions, displaced thresholds, communications, navaids.*
- OurAirports — https://ourairports.com/airports/TAPA/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Wikipedia — "V. C. Bird International Airport" — https://en.wikipedia.org/wiki/V._C._Bird_International_Airport (retrieved 2026-07-26). *History, operator, ECCAA Antigua Outstation.*
- VATSIM Caribbean (VATCAR, Piarco FIR division) — "V.C. Bird International Airport (TAPA)" airport SOP — https://piarco.vatcar.net/wp-content/uploads/2021/08/VC-Bird-International-Airport-TAPA.pdf (retrieved 2026-07-26). **Network-sim document, not regulatory** — used per the VATSIM cross-check provision for non-radar/procedural environment, approach names, Taxiway A restriction and reporting points; corroboration only.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
