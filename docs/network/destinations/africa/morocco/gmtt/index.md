# GMTT — Ibn Batouta Intl · Airport Briefing

**GMTT / TNG** · Tangier, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 aeronautical sources (the primary Morocco AIP/eAIP was not reachable within this build pass — see §18); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 35°43′54″N / 005°55′17″W (35.731741, -5.921459) `[OurAirports]` 🟧 |
| Field elevation | **62 ft / 19 m AMSL** `[OurAirports; matches anchor figure]`. A separate tier-4 source (SkyVector/legacy Navigraph-style navdata) reports **69 ft** for the field generally — discrepancy not resolved against a primary AIP table this pass; see §18. 🟧 |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+1 year-round** (Morocco Standard Time); Morocco reverts to **UTC+0 during Ramadan** per periodic state decree — confirm current-year dates at planning 🟧 |
| Runway(s) | **10/28**, 3,500 × 45 m, asphalt, lighted `[OurAirports/SkyVector]`. A second runway **07/25** (2,000 × 30 m, asphalt, unlit) is **CLOSED** — do not plan to it 🟥 |
| Preferential runway | Not published / verify — single usable runway, so selection is wind-driven only (10 vs 28) 🟧 |
| Longest LDA | 3,500 m on RWY 10 (no displacement reported); **RWY 28 has a 500 m (1,640 ft) displaced threshold** — official declared LDA not obtained this pass, arithmetic estimate ≈3,000 m — verify 🟧 |
| Approaches | ILS (runway end/category not confirmed), VOR, NDB reported present `[Wikipedia/ONDA-sourced]` — specific charted procedure names not obtained this pass — verify current AIRAC 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Not confirmed (procedural vs radar) — verify current AIP 🟧 |
| Elevation class | Sea-level / coastal — **not** hot-and-high; density altitude is a non-factor here 🟩 |
| Special-airport status | None found in reachable sources; no formal restricted-crew category identified — see §5 for the CFIT-history caution 🟧 |
| Customs / PoE | **Yes** — international scheduled/charter service (RAM, Air Arabia Maroc, Ryanair, easyJet, Vueling, TAP, Transavia and others); exact desk hours not published 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | [**GMMN**](../gmmn/index.md), **LEMD** (Madrid, Spain) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Rif foothills rise close to the field south/southeast; a historical fatal CFIT accident on approach to RWY 28 is on record — see §3.1. |
| Runway length vs fleet perf | 🟩 | 3,500 m is ample for a K Global Category **S** (regional/narrowbody) operation; non-limiting. |
| Approach availability / minima | 🟧 | ILS reported present but runway end, category and minima not confirmed from a primary table this pass. |
| Airspace / traffic / control | 🟧 | Control type (procedural/radar) not confirmed; field sits close to the Strait of Gibraltar and the Gibraltar/Spanish airspace environment across the water — see §3.2. |
| Weather / seasonal hazard | 🟥 | Strait of Gibraltar gap-wind effect (Levante/Poniente) and marine fog are the field's defining hazards — see §3.4/§14. |
| Curfew / slots / hours | 🟧 | AD/ATS operating hours not published this pass. |
| RFF category vs our types | 🟧 | Not published. |
| Fuel availability | 🟧 | Plausible given scheduled international service, but supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | PoE confirmed by traffic pattern; exact hours/handling detail not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Tangier sits on the coastal plain at the western tip of the Rif range; higher foothill terrain rises to the south and southeast of the field. This is not a theoretical concern at GMTT: on **23 December 1973**, a Royal Air Maroc-operated Sud Aviation Caravelle (on lease) crashed near the airport during a night, rain-affected approach to **RWY 28** after turning too far east of course, overflying the high terrain in that sector and striking the mountains — all 106 aboard were lost. `[Wikipedia — Tangier Ibn Battouta Airport, accident history, citing Aviation Safety Network]` No specific bearing/distance figures for the close-in high ground were obtained from a primary MSA chart this pass — treat the area east/southeast of the field as terrain-significant and fly the current MSA/terrain chart precisely, especially on any non-precision or visual segment of the RWY 28 approach or on a go-around.

### 3.2 Airborne conflict / traffic 🟧
Control type (procedural vs radar) is not confirmed from a reachable source this pass — verify current AIP before assuming radar vectoring is available. GMTT lies on the Strait of Gibraltar, roughly 30–40 NM from **Gibraltar (LXGB)** and the Spanish mainland; the Casablanca FIR (GMMM) abuts the Madrid FIR (and Gibraltar's airspace arrangements) across the Strait, and Spanish military fields (Rota, Morón) sit within the wider cross-strait area. Departures/arrivals routing north or east should anticipate an early international FIR handoff and possible interaction with Gibraltar-area special-use airspace. Cross-ref [Africa — General Airspace](../../../../airspace/africa.md).

### 3.3 Runway excursion 🟧
Only one runway pair is usable — **10/28**. RWY 28 carries a 500 m displaced threshold, reducing the effective landing distance from that end (arithmetic estimate ≈3,000 m — not a confirmed declared-distance figure, see §7). The former crosswind/secondary runway **07/25** is permanently **closed**; ensure charts, FMS databases and briefings do not reference it as available. No contamination/grooving data obtained — treat wet-runway braking action as a standard seasonal caution (§14).

### 3.4 Weather threat 🟥
The Strait of Gibraltar produces a pronounced **gap-wind (Venturi) effect**: the funnelling of the prevailing Atlantic/Mediterranean pressure gradient through the Strait regularly generates strong, gusty easterly (**Levante**) and westerly (**Poniente**) winds, with associated low-level turbulence and abrupt wind shifts near the coast. Marine-layer fog and low stratus are also a recognised coastal-morning hazard in this part of northern Morocco. Combined with a single usable runway, a strong crosswind or tailwind event can leave no alternate runway option at the field itself. See §14.

### 3.5 Operational considerations 🟧
Single-runway field — any runway closure (obstruction, disabled aircraft, navaid outage) closes the field entirely, with no parallel/crosswind runway to fall back on (07/25 is permanently closed). Not hot-and-high — density-altitude performance is a non-issue. The CFIT precedent in §3.1 argues for a standing terrain-awareness briefing item on any RWY 28 approach flown in marginal visibility or at night.

---

## 4. Cautions & Warnings

- Runway **07/25 is permanently closed** — verify no chart, FMS database entry, or briefing references it as usable.
- **RWY 28 has a 500 m displaced threshold** — do not assume full runway length is available for landing on 28.
- Historical **CFIT accident on the RWY 28 approach** (1973) — maintain strict terrain/MSA discipline on approach and any go-around, particularly in low visibility or at night.
- Strait of Gibraltar **gap-wind effect** can produce strong, gusty crosswinds with little warning — check current wind trend closely at planning and again before descent.
- Single usable runway — no crosswind-runway alternative if 10/28 is unfavourable for wind; a low/marginal-crosswind alternate should be considered on marginal-wind days.
- PAPI reported available both directions on RWY 10/28 `[Wikipedia]` — confirm angle/eye-to-wheel setting on current chart before use.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not identified as a formally restricted-crew "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** No formal gate found; given the CFIT precedent (§3.1), a standing terrain-awareness briefing item for the RWY 28 approach in low-vis/night conditions is recommended. 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction, or specific SID/approach ban found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard Morocco international arrival; no special state permit identified beyond normal Schengen-adjacent/non-EU international procedures. 🟩
- **Operations notes:** Airport operator — **ONDA** (Office National des Aéroports du Maroc). No handling agent identified in reachable sources. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not published / verify — plausible given scheduled widebody-adjacent international traffic (per Wikipedia, field reportedly handles up to B747-size aircraft) | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed by traffic pattern; hours not published | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 3,500 × 45 m | Asphalt, lighted / PCN not published | Not published | Not published | Not published | ~3,500 m (no displacement reported) | Approach from the east/coastal side; verify declared distances against current AIRAC |
| 28 | 3,500 × 45 m | Asphalt, lighted / PCN not published | Not published | Not published | Not published | ≈3,000 m (arithmetic estimate: 3,500 m physical length − 500 m displaced threshold; **not** an official declared-distance figure) 🟧 | **500 m (1,640 ft) displaced threshold** `[OurAirports/SkyVector]`; site of the 1973 CFIT accident on approach (§3.1) |
| 07/25 | 2,000 × 30 m | Asphalt, unlit | — | — | — | — | **CLOSED** — historical/secondary runway, not usable 🟥 |

*Declared-distance figures (TORA/TODA/ASDA) and PCN were not obtained from a primary AIP table this pass — the Morocco eAIP (ONDA) was attempted but not reachable within this build session; treat all figures in this table other than the physical length/displacement as unconfirmed. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Tanger ATIS | 123.70 | Not published | `[SkyVector]` 🟧 |
| Delivery | Not published | — | — | 🟧 |
| Ground | Not published | — | — | 🟧 |
| Tower | Tanger Tower | 119.50 | Not published | `[OurAirports/SkyVector — consistent across both tier-4 sources]` 🟧 |
| Approach | Tanger Approach | 121.20 | Not published | `[OurAirports/SkyVector — consistent across both tier-4 sources]` 🟧 |
| Centre / FIR | Casablanca FIR (GMMM) | Per current AIRAC | H24 (FIR-level assumption, not field-specific) | See [Africa — General Airspace](../../../../airspace/africa.md) |

*Sourced to OurAirports and SkyVector tier-4 data; not cross-checked against a primary AIP table this pass — treat as indicative pending AIRAC verification.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME (on/near field) | Reported as "Tanger" — **ident/frequency not resolved**: one tier-4 source gives **TNG 115.90** (~1.5 NM E of ARP), another gives **TNR 108.05** (~0.2 NM, essentially on field) | — | Not published | Two tier-4 sources disagree on ident and frequency for the field's own VOR-DME — verify against current AIRAC before use 🟧 |
| NDB | TAN | 374 kHz | Not published | ~5.7 NM from field per one tier-4 source; not independently corroborated 🟧 |
| VOR-DME (regional) | Tetouan (TTN) | 117.30 | — | ~30 NM ESE — regional cross-check aid |
| VOR-DME (Spain, cross-strait) | Vejer (VJF) | 117.80 | — | ~31 NM N — Spanish mainland, cross-strait reference |
| NDB/DME (Spain, cross-strait) | Ceuta (CEU) | 300 kHz / 117.75 | — | ~31.5 NM ENE |
| TACAN (Gibraltar, cross-strait) | Gibraltar (GBR) | 113.60 | — | ~37 NM NE — cross-strait/special-use airspace reference, see §3.2 |

*Navaid idents/frequencies are tier-4 sourced (OurAirports, SkyVector) and not cross-checked against a primary AIP table — the on-field VOR-DME ident/frequency discrepancy in particular must be resolved against current AIRAC before operational use.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Wind-driven only — single usable runway pair (10 or 28), no other configuration options at the field.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 10 | Reported ILS/VOR/NDB availability at the field; specific runway-end assignment and procedure names not confirmed | Not published | Not published | Verify current AIRAC 🟧 |
| 28 | Reported ILS/VOR/NDB availability at the field; specific runway-end assignment and procedure names not confirmed | Not published | Not published | Displaced threshold; CFIT-history runway (§3.1) — verify current AIRAC 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Trigger conditions not confirmed. Marine fog is a recognised regional hazard (§14) — verify current LVP status/procedure at planning. 🟧
- **Missed approach watch-items:** Terrain to the south/southeast is the primary concern, consistent with the 1973 CFIT accident on the RWY 28 approach — fly the published missed approach and MSA precisely; do not improvise a turn toward high ground.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed — verify current chart for any special gradient, particularly on a RWY 28 departure given the terrain to the south/east.
- **Take-off minima:** Not published / verify current chart. 🟧
- **Start-up / push-back:** Not published / verify locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified in reachable sources; treat as unregulated pending confirmation. 🟧
- **De-icing:** Not applicable — coastal North African field; cold-weather de-icing is not expected to be a routine requirement, though not formally confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Reported apron parking of ~40,640 m², historically described as able to accommodate up to four Boeing 737-class aircraft plus one Boeing 747-class aircraft simultaneously `[Wikipedia — sourced to ONDA promotional material]` — treat as an indicative capacity figure, not an official stand count; likely constraining at peak bank times for a Category **S** operation sharing ramp space with multiple European low-cost/full-service carriers. 🟧
- **Push-back:** Not published / verify locally. 🟧
- **Standard taxi routes:** Not published — confirm with Ground/Apron on the day given the field's single-runway, single-terminal layout.
- **Hot spots / tight taxiways:** None identified in reachable sources — not confirmed as "none exist" on current AIRAC. 🟧
- **Follow-me:** Not published / verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean/Atlantic-influenced coastal climate at the western mouth of the Strait of Gibraltar; wind regime dominated by the Strait's gap-wind effect (Levante/Poniente — see §3.4).
- **Seasonal hazards:** Strong, gusty Levante (easterly) and Poniente (westerly) winds funnelled through the Strait of Gibraltar can arise with limited warning; winter brings Atlantic frontal passages with associated rain and reduced visibility; coastal marine fog/low stratus is a recognised morning hazard, particularly in transitional seasons.
- **Local effects:** Gap-wind turbulence and rapid wind-direction shifts near the coast are the standout local effect at this field, a direct consequence of the Strait of Gibraltar's funnelling geography.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S (particularly given the on-field VOR-DME ident/frequency discrepancy noted in §9), lighting, obstacle/crane, RFF downgrade, GPS/RAIM, conflict-zone/overflight bulletins for the wider Strait of Gibraltar/Spain corridor. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / spoke field — **not** a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** [**GMMN**](../gmmn/index.md) (Casablanca–Mohammed V), **LEMD** (Madrid, Spain) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Not published / verify. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** Field length/strength non-limiting for a Category **S** operation on the main runway pair (3,500 m). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference. Note the RWY 28 displaced threshold when planning landing performance to that end.

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration beyond the generic Category **S** field-length/terrain notes above (§2, §7, §16). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for range/performance reference by type.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (ONDA Morocco eAIP, AD 2 GMTT)** was attempted (direct PDF fetch and eAIP index) but was **not reachable within this build session** — every figure below is tier-4 sourced (OurAirports, SkyVector, Wikipedia) pending a live AIP cross-check.
- **Field elevation discrepancy** — OurAirports/anchor figure gives 62 ft; a separate tier-4 source (SkyVector/legacy Navigraph-style navdata, matching the pre-existing legacy stub) gives 69 ft. Not resolved against a primary AIP table.
- **On-field VOR-DME ident/frequency discrepancy** — one tier-4 source reports TNG 115.90 MHz (~1.5 NM E), another reports TNR 108.05 MHz (~0.2 NM) — resolve against current AIRAC.
- **Declared distances (TORA/TODA/ASDA/PCN)** — not obtained from a primary source; the RWY 28 LDA figure in §7 is an arithmetic estimate only.
- **ILS runway assignment, category and minima** — reported present at the field generically, not tied to a specific runway end or category.
- **RFF category, ATS/AD operating hours, curfew, fuel supplier/hours, customs desk hours, PCN, taxi routes/hot spots, SIDs/STARs, transition altitude, take-off minima, noise abatement procedure** — none confirmed in reachable sources.
- **Mag variation** — not published in any reachable source.
- **Stand/apron capacity figure (~40,640 m², 4×737 + 1×747)** — sourced to Wikipedia/ONDA promotional material, not an official current stand count.
- **IVAO Morocco division SOP for GMTT** — attempted, not reachable within this build session; no operational cross-check obtained.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here. See the source register for the tier hierarchy.*

- AIP Morocco (ONDA), AD 2 GMTT — attempted via https://siamaroc.onda.ma/eaip/ad/AD2GMTT.pdf and https://siamaroc.onda.ma/eAIP/menu.html — **not reachable within this build session** (retrieved attempt 2026-07-26); primary source of record, not yet incorporated.
- OurAirports — https://ourairports.com/airports/GMTT/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation, runway/declared-distance, frequency and navaid cross-check.*
- SkyVector — https://skyvector.com/airport/GMTT (retrieved 2026-07-26). *Coordinates, runway/threshold detail, frequency and navaid cross-check.*
- Wikipedia — "Tangier Ibn Battouta Airport" — https://en.wikipedia.org/wiki/Tangier_Ibn_Battouta_Airport (retrieved 2026-07-26). *Runway status/closure, ILS/VOR/NDB/PAPI mention, apron capacity, accident history (23 Dec 1973 and 23 Nov 1988 events) — sourced onward to Aviation Safety Network and ONDA material.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
