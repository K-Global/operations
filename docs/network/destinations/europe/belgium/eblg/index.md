# EBLG — Liège · Airport Briefing

**EBLG / LGG** · Grâce-Hollogne, Liège Province (Wallonia), Belgium · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — skeyes eAIP direct retrieval unsuccessful this pass; built from tier-4 corroboration (OurAirports, SkyVector, Wikipedia, industry press) — see §18

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (skeyes eAIP direct fetch did not succeed this session — see §18); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 50.638574, 5.443897 `[OurAirports/SkyVector, cross-checked]` |
| Field elevation | **659 ft / 201 m AMSL** (OurAirports) 🟧 SkyVector reports 651 ft — minor discrepancy, not resolved this pass |
| Mag variation | Not published/verify 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **05L/23R** 2,340 × 45 m · **05R/23L** 3,690 × 45 m (main/longest, displaced threshold on 05R end 236 m) |
| Preferential runway | Not confirmed from a primary table this session 🟧 |
| Longest LDA | 3,690 m (05R/23L) before displaced-threshold deduction — see §7 |
| Approaches | ILS reported available; CAT sub-category not confirmed this session 🟧 |
| RFF category | Not published/verify 🟧 |
| Control type | **Radar** — skeyes (Belgian ANSP) provides Liège Approach/Tower; field sits in **Brussels FIR (EBBU)** |
| Elevation class | Near sea-level (659 ft) — **not** hot-and-high |
| Special-airport status | **24-hour, unrestricted-noise major CARGO hub — no night curfew**, a defining and unusual characteristic in the European context — see §3.5/§12 🟩 |
| Customs / PoE | Cargo customs/handling infrastructure confirmed (cargo-focused field); passenger PoE status not confirmed — Liège currently has **no regular scheduled passenger service** (last as of Jan 2026 per Wikipedia; a new seasonal route was announced for late 2026) 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EBBR, EHAM, EDDF** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Ardennes foothills approach from the SE but the field itself sits on a plateau; no close-in high terrain confirmed this session — verify MSA ring at planning. |
| Runway length vs fleet perf | 🟩 | 3,690 m main runway (05R/23L) is ample for any K Global type; the 2,340 m secondary runway (05L/23R) is shorter and should be checked against type/weight if assigned. |
| Approach availability / minima | 🟧 | ILS reported; sub-category and exact minima not confirmed this session. |
| Airspace / traffic / control | 🟩 | Cargo-dominant traffic mix, generally lower density than the Brussels/Amsterdam/Frankfurt core — a comparatively low-workload field for airborne conflict. |
| Weather / seasonal hazard | 🟧 | Field elevation (659 ft) and inland/Ardennes-fringe location may see more fog/inversion days than the coastal fields — not independently confirmed this session. |
| Curfew / slots / hours | 🟩 | **No night curfew — genuinely 24/7 unrestricted-noise operation**, the field's defining commercial characteristic (§3.5/§12). |
| RFF category vs our types | 🟧 | Not confirmed — presumed adequate for scheduled cargo/passenger operations. |
| Fuel availability | 🟧 | Jet A-1 assumed available; hours/supplier not confirmed. |
| Customs / handling / security | 🟧 | Cargo customs/handling well-established generally; passenger-side status uncertain given the current no-scheduled-passenger-service status (§1). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EBLG sits at 659 ft AMSL, higher than the Belgian coastal/Brussels fields but still on a plateau rather than in mountainous terrain — the Ardennes proper lie further south/southeast. No close-in high terrain confirmed from a primary source this session; verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟩
Liège is overwhelmingly a **cargo/freighter field** — as of the sources reviewed it has **no regular scheduled passenger service** (the last regular passenger flight operated 4 January 2026 per Wikipedia, with a new seasonal leisure route announced for late 2026). Traffic density and airborne-conflict workload are correspondingly lower than at Brussels/Amsterdam/Frankfurt. skeyes provides Liège Approach/Tower; the field sits in **Brussels FIR (EBBU)**, for which no dedicated OM C FIR brief exists — see [Europe (Continental) Airspace briefing](../../../../airspace/europe.md) 🟧.

### 3.3 Runway excursion 🟧
The main runway (05R/23L, 3,690 m) carries a displaced threshold of 236 m on the 05R end per tier-4 cross-check (OurAirports); the secondary runway (05L/23R, 2,340 m) is not reported with a displaced threshold. TORA/TODA/ASDA and the full declared-distance table are not confirmed from a primary AIP source this session — see §7.

### 3.4 Weather threat 🟧
Belgium's general maritime, temperate climate applies, but Liège's inland, higher-elevation, Ardennes-fringe location (unlike the coastal EBOS or the Brabant-plateau EBBR) may see a somewhat different fog/inversion pattern — not independently confirmed this session. Treat as a caution pending direct AIP/climatological confirmation.

### 3.5 Operational considerations 🟩🟥
Liège's standout, defining characteristic is that it operates **24 hours a day, 7 days a week, with no night curfew and no noise-based movement restriction** — a genuinely unusual position among major European airports, and the direct reason it has grown into one of Europe's top cargo hubs (5th-largest in Europe by freight tonnage as of 2021 reporting, ~1.16–1.41 million tonnes/year in recent years) `[Wikipedia; Air Cargo Week; TIACA, retrieved 2026-07-26]`. For K Global this is a **favourable** operational characteristic (🟩 no curfew-driven scheduling constraint) but crews should still expect **genuine night-freight ramp activity and traffic** at any hour — brief accordingly rather than assuming a quiet overnight field.

---

## 4. Cautions & Warnings

- **No night curfew — Liège is a genuine 24/7 field.** Do not assume reduced overnight activity; expect active freighter operations and ramp traffic at any hour.
- **Displaced threshold on 05R (236 m)** — confirm usable LDA before committing to a short-runway plan on the main runway.
- **Secondary runway (05L/23R) is 2,340 m** — shorter than the main pair; confirm suitability for the assigned type/weight if used.
- **Field is inland and at higher elevation (659 ft) than the Belgian coastal/Brabant fields** — weather pattern may differ; do not assume the same fog climatology as EBBR/EBOS without independent confirmation.
- **No regular scheduled passenger service as of the sources reviewed** — confirm passenger-handling/PoE readiness if a K Global passenger operation is planned here.
- Field elevation and several operational figures in this brief are tier-4-sourced (skeyes eAIP direct retrieval unsuccessful this session) — treat exact figures as 🟧 pending primary-source confirmation (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. The standing characteristic worth briefing is the **24/7 unrestricted-noise cargo-hub operating model** (§3.5). 🟩
- **Crew-qualification gate:** None specific found; confirm CAT II/III currency if a low-visibility arrival is anticipated (ILS sub-category unconfirmed, §18). 🟧
- **Operating restrictions / bans:** No curfew, no night-noise restriction identified — a genuinely permissive operating environment relative to most European fields. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **skeyes** (Belgian ANSP, formerly Belgocontrol). Liège Airport is the global hub of a major cargo carrier and hosts multiple scheduled/irregular freighter operators; passenger-side commercial infrastructure is comparatively limited given the current no-scheduled-passenger-service status.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 — consistent with the field's 24/7 cargo-hub operating model | 🟩 |
| AD operating hours | **H24, no curfew** | 🟩 |
| Night / curfew restrictions | **None identified** — the field's defining commercial characteristic | 🟩 |
| RFF category | Not published/verify | 🟧 |
| Fuel | Jet A-1 assumed; hours/supplier not confirmed | 🟧 |
| PCN | Not published/verify | 🟧 |
| Customs | Cargo customs well-established; passenger-side hours not confirmed | 🟧 |
| Handling / FBO | Established cargo-handling infrastructure (major freighter hub); passenger-handling capability not confirmed given current traffic mix | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05L | 2,340 × 45 m | Paved (asphalt) 🟧 PCN not confirmed | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | 2,340 m (no displaced threshold reported) | Secondary runway |
| 23R | 2,340 × 45 m | Paved (asphalt) 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | 2,340 m (no displaced threshold reported) | Secondary runway |
| 05R | 3,690 × 45 m | Paved (asphalt) 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | ≈3,454 m (3,690 m − 236 m displaced thr, approx.) 🟧 | Main/longest runway; threshold displaced 236 m |
| 23L | 3,690 × 45 m | Paved (asphalt) 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | Not published/verify 🟧 | 3,690 m (no displaced threshold reported) | Main/longest runway |

*Dimensions and displaced-threshold figures from OurAirports/SkyVector (tier-4, cross-checked between the two, retrieved 2026-07-26); TORA/TODA/ASDA and exact declared-distance LDA are **not confirmed from a primary AIP table this session** — the LDA figure for 05R is an **approximate derivation** (runway length minus displaced threshold), not a quoted AIP declared distance. Verify the full declared-distance table against the current AIP before operational use. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Liège ATIS | 126.25 | H24 presumed 🟧 | |
| Delivery | Liège Delivery | 121.91 | H24 presumed 🟧 | Clearance delivery |
| Ground | Liège Ground | 121.91 / 121.93 (reported variously) | H24 presumed 🟧 | Source values conflict slightly between SkyVector entries — confirm at planning |
| Tower | Liège Tower | 118.13 | H24 presumed 🟧 | Superseded a former 129.25 assignment per a 2013 user report — treat 118.13 as current, re-verify |
| Approach | Liège Approach | 119.28 | H24 presumed 🟧 | |
| Centre / FIR | Brussels FIR (EBBU) | Per current AIRAC | H24 | No dedicated FIR brief in-library — see [Europe (Continental) Airspace briefing](../../../../airspace/europe.md) 🟧 |

*Source: OurAirports/SkyVector frequency listings, cross-checked between the two (retrieved 2026-07-26). Not independently confirmed against a primary AIP table this session — treat as 🟧 pending AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | LIE | 113.85 | H24 presumed 🟧 | Liège VOR/DME, ~5.6 NM |
| VOR | SPI | 113.10 | H24 presumed 🟧 | Sprimont, ~10 NM |
| VOR | LNO | 112.80 | H24 presumed 🟧 | Olno, ~11 NM |
| VOR | FLO | 112.05 | H24 presumed 🟧 | Flora, ~19 NM |
| ILS (runway idents) | Not confirmed 🟧 | Not confirmed 🟧 | — | ILS reported available; idents/frequencies/CAT sub-category not confirmed this session |

*Source: SkyVector navaid listing (retrieved 2026-07-26) — tier-4, not independently cross-checked against a primary AIP table.*

---

## 10. Arrival

- **Transition altitude / level:** **4,500 ft AMSL** — inferred from the confirmed Belgium national value published in the EBOS AIP CTR entry (a Belgium-wide TA is standard for a single-FIR state); 🟧 not independently re-confirmed per-field for EBLG this session.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm).
- **Preferential runway logic:** Not confirmed this session — likely wind-driven given the field's comparatively simple two-runway layout. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 05L | Not confirmed 🟧 | |
| 23R | Not confirmed 🟧 | |
| 05R | ILS (reported) 🟧 | Main runway; idents/CAT not confirmed |
| 23L | ILS (reported) 🟧 | Main runway; idents/CAT not confirmed |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Trigger conditions not confirmed this pass. 🟧
- **Missed approach watch-items:** Not confirmed; the field's comparatively low traffic density (cargo-dominant) is a favourable factor for re-sequencing relative to the Brussels core.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Standard EU PBN mandate applies (RNAV 5 enroute / RNP 1 terminal) — see [Europe (Continental) Airspace briefing](../../../../airspace/europe.md). See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed; standard cargo-hub procedure assumed. 🟧
- **ATC slot / CTOT & clearance:** Not confirmed; the field's 24/7 no-curfew status makes ATFM/CTOT flow management (rather than a slot/curfew regime) the primary tactical constraint, if any. 🟧
- **De-icing:** Assumed available given the Belgian/inland winter climate at 659 ft; pad locations/procedure not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** No published NAP identified — consistent with the field's **unrestricted-noise, 24/7 cargo-hub operating model**, which is a deliberate policy choice by the operator/region to support round-the-clock freighter operations `[Wikipedia; Air Cargo Week; TIACA, retrieved 2026-07-26]`. 🟩
- **Night noise / dB limits:** **None identified** — no curfew, no night-noise movement restriction found in reachable sources. This is the field's defining commercial differentiator versus Brussels/most other European hubs. 🟩
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed this session — established cargo-ramp infrastructure is expected given the field's freighter-hub role; passenger-stand capability not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed this session. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** General Belgian temperate maritime climate, modified by Liège's inland, higher-elevation (659 ft), Ardennes-fringe location relative to the coastal/Brabant fields.
- **Seasonal hazards:** Not independently confirmed this session; treat fog/inversion risk as a caution pending direct AIP/climatological confirmation (§3.4). Ordinary winter snow/ice season expected.
- **Local effects:** Possible local terrain-modified wind/fog effects given the plateau/Ardennes-fringe setting — not confirmed this session.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — Category R, not a K Global base `[VAMSYS mirror 2026-07-26]`; a **24h cargo-hub field**, brief night-freight character even for passenger-side planning.
- **Nearest suitable alternates:** Company preferred alternates [**EBBR**](../ebbr/index.md) (Brussels), **EHAM** (Amsterdam Schiphol — no OM C folder/brief this pass, plain reference only), [**EDDF**](../../germany/eddf/index.md) (Frankfurt) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as an active cargo hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Main runway (3,690 m) non-limiting for any K Global type; the secondary runway (2,340 m) should be checked against type/weight if assigned. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty expected for K Global widebody types on the main runway (05R/23L, 3,690 m). If a type/weight combination is assigned to the shorter secondary runway (05L/23R, 2,340 m), check against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before planning.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP direct retrieval** — the skeyes eAIP page for EBLG (`EB-AD-2.EBLG-en-GB.html`) did not load within this session despite repeated attempts (both HTML and PDF variants); all data above is tier-4-corroborated (OurAirports, SkyVector, Wikipedia, industry cargo press) and should be re-verified against the primary AIP before treating as audit-grade.
- **Field elevation** — 659 ft (OurAirports) vs 651 ft (SkyVector); minor discrepancy not resolved.
- **Mag variation, RFF category, PCN, TORA/TODA/ASDA declared distances** — none confirmed from a primary table; the 05R LDA figure in §7 is an approximate derivation only.
- **ILS idents, frequencies and CAT sub-category** — not confirmed.
- **SIDs/STARs (current names)** — not obtained this pass.
- **Tower/Ground frequency currency** — minor conflicts between tier-4 sources (§8); a 2013 user correction suggests the Tower frequency changed from an older published value — re-verify against current AIRAC.
- **Passenger-handling/PoE readiness** — Liège currently has no regular scheduled passenger service per the sources reviewed; confirm passenger-side infrastructure if a K Global passenger operation is planned here.
- **Weather/seasonal climatology specific to Liège's inland/elevated setting** — not independently confirmed this session.
- **Stand/gate assignment, handling agent, fuel supplier, take-off minima, engine run-up restriction, reverse-thrust policy, follow-me availability** — none confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Belgium (skeyes eAIP), AD 2 EBLG** — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.EBLG-en-GB.html — primary source of record; **direct retrieval unsuccessful this session** (repeated timeouts, HTML and PDF variants); not cited as a confirmed-content source above, listed here as the primary register entry for future re-verification.
- Wikipedia — "Liège Airport" — https://en.wikipedia.org/wiki/Li%C3%A8ge_Airport (retrieved 2026-07-26). *History, cargo-hub status, current passenger-service status.*
- OurAirports — https://ourairports.com/airports/EBLG/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *Runway dimensions/displaced thresholds, frequencies, elevation cross-check.*
- SkyVector — https://skyvector.com/airport/EBLG/Liege-Airport (retrieved 2026-07-26). *Frequencies, navaids, runway/displaced-threshold cross-check.*
- Air Cargo Week — "Continuous expansion will allow Liege to keep on growing 24/7" — https://aircargoweek.com/continous-expansion-liege-growing-247/ (retrieved 2026-07-26). *24/7 no-curfew operating model.*
- TIACA — "Liege Airport – the Freighter H(e)aven" — https://tiaca.org/liege-airport-the-freighter-heaven/ (retrieved 2026-07-26). *Cargo-hub specialisation, tonnage.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Belgium (skeyes); K Global fields from live VAMSYS; 4-page pack. |
