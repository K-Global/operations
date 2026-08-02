# FKYS — Nsimalen · Airport Briefing

**FKYS / NSI** · Yaoundé, Centre Region, Cameroon · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — national AIP/ASECNA-region provisional, tier-4 corroborated

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 aeronautical sources (a full ASECNA/Cameroon eAIP extract was not reachable this pass); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 3°43′21″N / 11°33′12″E (3.72256, 11.55330) `[OurAirports]` |
| Field elevation | **2,278 ft / 694 m AMSL** |
| Mag variation | 🟧 Not published / verify — no sourced AIP figure obtained this pass |
| Time zone | UTC+1 (WAT) — no DST observed |
| Runway(s) | **01/19**, single runway, **3,400 × 45 m** asphalt, lighted `[OurAirports]`; can reportedly accommodate a Boeing 747-class aircraft per public reference |
| Preferential runway | 🟧 Not published — single-runway field, direction selected by wind |
| Longest LDA | 🟧 Not published / verify — runway length ~3,400 m is the working figure; no displaced-threshold data found |
| Approaches | 🟧 Not published / verify — no ILS or RNP procedure confirmed in reachable public sources this pass |
| RFF category | 🟧 Not published / verify |
| Control type | 🟧 Not confirmed — regional norm outside the continent's top hubs is procedural (non-radar); not independently confirmed for FKYS |
| Elevation class | 🟧 **2,278 ft — a moderate-elevation field**, not classically "hot-and-high" but appreciably above sea level; Yaoundé itself sits amid hilly terrain ("the city of seven hills") — verify any density-altitude/performance margin for our types on a hot day |
| Special-airport status | None found — not operator-categorised as restricted in reachable sources 🟧 |
| Customs / PoE | **Yes** — Cameroon's second-busiest airport and the capital's international gateway; exact desk hours not confirmed 🟧 |
| K Global category | 🟧 **Not set** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **FKKD, FGSL, FOOL** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | Not published / verify 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Yaoundé sits amid hilly terrain around the airport site south of the city; no confirmed close-in obstacle data, but the elevated, undulating local terrain warrants a standing caution pending MSA/chart verification. See §3.1. |
| Runway length vs fleet perf | 🟧 | 3,400 m is generous for narrow/mid-body types and workable for widebodies; the **2,278 ft field elevation** reduces available performance margin versus a sea-level field — cross-check against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for a hot-day, high-weight departure. |
| Approach availability / minima | 🟧 | No ILS/RNP procedure confirmed publicly — pull current AIRAC before planning. |
| Airspace / traffic / control | 🟧 | **Brazzaville FIR (FCCC)** (Douala is the local ACC/sector; the controlling FIR is Brazzaville, FCCC) covers Yaoundé Nsimalen as well as Douala; likely procedural/non-radar, not independently confirmed. See [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and [Africa — Airspace Briefing](../../../../airspace/africa.md). |
| Weather / seasonal hazard | 🟧 | Inland, moderate-elevation tropical climate with a wet/dry seasonal split; less extreme rainfall than coastal Douala but still ITCZ-band convective risk in season. See §3.4/§14. |
| Curfew / slots / hours | 🟧 | Not published / verify — no slot-coordination or curfew regime found in reachable sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available at the capital's gateway; hours/supplier not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; desk hours, handling agent(s) and stand/terminal detail not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
FKYS sits at 2,278 ft/694 m AMSL roughly 16 NM south of Yaoundé, a city built across a series of hills on Cameroon's southern plateau. No confirmed close-in obstacle or MSA figure was found in reachable public sources this pass — the airport reportedly occupies a large, purpose-built site (~3,065 acres) selected specifically to move traffic away from the older, more terrain/city-constrained Yaoundé Airport (now a military airbase) inside the city itself. Treat the surrounding undulating plateau terrain as a standing MSA/chart-verification item rather than a confirmed close-in hazard — verify the current area chart before flying any non-standard arrival/departure.

### 3.2 Airborne conflict / traffic 🟧
FKYS is Cameroon's second-busiest airport, sharing **Brazzaville FIR (FCCC)** with FKKD. The FIR's control model (national CCAA vs ASECNA-delegated service) is not confirmed in reachable sources this pass — treat as **likely procedural/non-radar**, consistent with the regional norm, and confirm locally. Cross-ref the [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and the [Africa — Airspace Briefing](../../../../airspace/africa.md) for the continental AFI picture.

### 3.3 Runway excursion 🟧
Single runway (01/19), 3,400 m — no reciprocal-direction escape. No displaced threshold or overrun data found; the runway is reported to be 747-capable in terms of length, which suggests limited length constraint for our fleet, but this is a tier-4 statement, not an AIP-sourced declared-distance table.

### 3.4 Weather threat 🟧
Yaoundé's inland, moderate-elevation position gives it a somewhat drier and less extreme rainfall regime than coastal Douala, but the field still sits within the broader ITCZ convective band described in the [Africa — Airspace Briefing §11](../../../../airspace/africa.md) — expect a wet season with embedded thunderstorm activity and a drier season with reduced convective risk. No FKYS-specific rainfall statistic was found in reachable sources this pass. See also [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

### 3.5 Operational considerations 🟧
Single-runway field — any obstruction/closure stops all movements. The 2,278 ft field elevation is not "hot-and-high" in the classic Andean/East-African-highland sense, but it is materially above sea level and should be factored into performance planning on a hot day, particularly at high takeoff weight (cross-ref §16/§17). Most AIP-sourced operational detail (hours, RFF, PCN, navaid/approach inventory) is an open item (§18) rather than a known restriction.

---

## 4. Cautions & Warnings

- **Single runway (01/19)** — no reciprocal option; a runway obstruction closes the field entirely.
- **2,278 ft field elevation amid hilly plateau terrain** — verify current MSA/area chart; not confirmed as a close-in CFIT hazard, but the surrounding terrain is not flat.
- **No ILS/approach procedure confirmed publicly** — do not assume a precision approach exists here; verify the current AIRAC before planning a low-visibility arrival.
- **Category not yet set in VAMSYS** — treat this field's operator-category status as an open administrative item, not a safety flag, until reconciled.
- **ITCZ-band convective weather** in season — brief embedded-CB/turbulence awareness even though FKYS is somewhat less rain-exposed than coastal Douala.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; **VAMSYS category is presently unset for this field** — flagged for administrative follow-up, not a known operational restriction. 🟧
- **Crew-qualification gate:** None confirmed. 🟧
- **Operating restrictions / bans:** None confirmed. 🟧
- **Overflight / entry / permits:** Standard Cameroon state entry rules apply for international crews — not independently confirmed this pass. 🟧
- **Operations notes:** FKYS opened in 1991, purpose-built to supersede the older Yaoundé Airport (now a Cameroon Air Force base) inside the city. Managed under the same national airport-operator framework as FKKD; the ANSP responsible for Brazzaville FIR (FCCC), which covers this field, is **not confirmed** in reachable sources (§18).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None found | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available (capital gateway); supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed; hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01 | 3,400 × 45 m | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published | Single runway; reported 747-capable length |
| 19 | 3,400 × 45 m | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published | Reciprocal direction |

*Source: OurAirports (retrieved 2026-07-26), corroborated by public reference (A-Z World Airports / Wikipedia) citing the same 3,400 m figure. No displaced-threshold or declared-distance breakdown found; all figures in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published | — | — | 🟧 |
| Delivery | Not published | — | — | 🟧 |
| Ground | Not published | — | — | 🟧 |
| Tower | Nsimalen Tower | 119.1 MHz `[OurAirports]` | Not published | 🟧 tier-4 only, not AIP-cross-checked |
| Approach | Nsimalen Approach | 121.3 MHz `[OurAirports]` | Not published | 🟧 tier-4 only, not AIP-cross-checked |
| Centre / FIR | Brazzaville FIR (FCCC) | Per current AIRAC | — | See [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and [Africa — Airspace Briefing](../../../../airspace/africa.md) |

*Source: OurAirports frequency register (retrieved 2026-07-26) — tier-4 only; not cross-checked against a primary AIP.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Not published / verify | — | — | — | No navaid inventory found in reachable public sources this pass 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard ICAO 250 KIAS below FL100 assumed — confirm no local override on current chart.
- **Preferential runway logic:** Single runway, direction by wind — no published rule found.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 01 | Not published / verify | — | — | 🟧 No ILS/RNP procedure confirmed publicly |
| 19 | Not published / verify | — | — | 🟧 No ILS/RNP procedure confirmed publicly |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify — treat low-visibility capability as unconfirmed. 🟧
- **Missed approach watch-items:** Surrounding plateau/hilly terrain (§3.1) is not confirmed as close-in, but verify the MSA on the current chart before flying a non-standard missed approach.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — the moderate field elevation (2,278 ft) and surrounding hilly terrain make a published climb-gradient/obstacle DP plausible; not confirmed. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found — assumed non-coordinated. 🟧
- **De-icing:** **NIL** — tropical field, non-issue despite the moderate elevation. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None found — likely NIL. 🟧
- **Night noise / dB limits:** None found.
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Public reference cites one passenger terminal and 6 aircraft stands — widebody-specific configuration not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Inland tropical climate at moderate elevation (694 m); somewhat drier than the coastal Douala regime.
- **Seasonal hazards:** Wet/dry seasonal split consistent with the broader ITCZ convective band described in the [Africa — Airspace Briefing](../../../../airspace/africa.md); no FKYS-specific rainfall statistic or peak-month data found this pass. 🟧
- **Local effects:** Surrounding hilly plateau terrain (§3.1) — no confirmed local wind/terrain effect at the field, verify on the current chart.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (single-runway field — any closure stops all movements), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, conflict-zone/overflight bulletins relevant to the routing. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate (not a K Global base).
- **Nearest suitable alternates:** [**FKKD**](../fkkd/index.md) (Cameroon sibling field), **FGSL, FOOL** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available at the capital's gateway; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,400 m runway is generous for length; the 2,278 ft field elevation reduces the performance margin versus a sea-level field on a hot day — cross-check against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧

---

## 17. Fleet-specific notes (optional)

- The one real fleet consideration at this field is the combination of **moderate field elevation (2,278 ft) and hot-day OAT** eroding takeoff performance margin versus a sea-level field — verify current performance numbers for our types against the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before a high-weight departure, especially in the warmer months. No other type-specific consideration identified.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **VAMSYS aerodrome category — not yet set for this field.**
- **Mag variation** — not sourced this pass.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN, displaced threshold** — none found.
- **Approach/navaid inventory (ILS/RNP/VOR/NDB idents and frequencies)** — none confirmed.
- **SIDs/STARs, TA/TL, take-off minima, climb-gradient/obstacle DP** — none confirmed.
- **ATS hours, RFF category, fuel supplier/hours, customs desk hours, handling agent(s)** — none confirmed.
- **Brazzaville FIR (FCCC) ANSP/control model** and control type (procedural vs radar) — not confirmed locally for FKYS specifically. See [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) under `Airspace/FIR/Africa/`.
- **Surrounding terrain / MSA detail** — no confirmed close-in obstacle data; verify against the current area chart given Yaoundé's hilly setting.
- **Taxi-in/taxi-out times** — pending VAMSYS reconciliation.
- **VATSIM cross-check** — no VATSIM vACC/division SOP found for FKYS this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/FKYS/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency register — tier-4.*
- Wikipedia — "Yaoundé Nsimalen International Airport" — https://en.wikipedia.org/wiki/Yaound%C3%A9_Nsimalen_International_Airport (retrieved 2026-07-26). *History (1991 opening, predecessor Yaoundé Airport), site size, terminal/stand count, runway length corroboration.*
- Africa — Airspace Briefing (internal, this project) — continental AFI structure, ITCZ seasonal hazard description, RVSM/IFBP context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
