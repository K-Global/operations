# FKKD — Douala · Airport Briefing

**FKKD / DLA** · Douala, Littoral Region, Cameroon · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — national AIP/ASECNA-region provisional, tier-4 corroborated

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 aeronautical sources (a full ASECNA/Cameroon eAIP extract was not reachable this pass); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 4°00′22″N / 9°43′10″E (4.00608, 9.71948) `[OurAirports]` |
| Field elevation | **33 ft / 10 m AMSL** |
| Mag variation | 🟧 Not published / verify — West-Central Africa declination is typically small (order ~1–2° W) but no sourced AIP figure obtained this pass |
| Time zone | UTC+1 (WAT) — no DST observed |
| Runway(s) | **12/30**, single runway, **2,850 × 45 m** asphalt, lighted `[OurAirports, updated 2025-12]` — 🟧 an older public figure (Wikipedia) records 2,880 m; treat exact current TORA/ASDA as unconfirmed pending AIP |
| Preferential runway | 🟧 Not published — single-runway field, direction selected by wind; no published preferential-runway rule found |
| Longest LDA | 🟧 Not published / verify — runway length ~2,850 m is the working figure; no displaced-threshold data found |
| Approaches | 🟧 Not published / verify — no ILS or RNP procedure confirmed in reachable public sources this pass |
| RFF category | 🟧 Not published / verify |
| Control type | 🟧 Not confirmed — most West/Central African international gateways outside the top hubs run **procedural (non-radar)** approach control; not independently confirmed for FKKD |
| Elevation class | Sea-level (33 ft) — **not** hot-and-high |
| Special-airport status | None found — not operator-categorised as restricted in reachable sources 🟧 |
| Customs / PoE | **Yes** — Cameroon's primary international gateway (Douala handles ~1.5M pax/yr); exact desk hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **FNBJ, FCBB** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field itself sits in flat Wouri-estuary/coastal terrain — non-issue locally. Mount Cameroon (active volcano, ~4,040 m/13,255 ft) lies ~50 NM WSW near Buea/Limbe/Malabo — a regional factor for westbound diversion routing, not the immediate arrival/departure path. See §3.1. |
| Runway length vs fleet perf | 🟧 | Single 2,850 m runway is workable for narrow/mid-body types but may be limiting for our largest widebodies at high takeoff weight on long sectors — cross-check against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). |
| Approach availability / minima | 🟧 | No ILS/RNP procedure confirmed publicly — pull current AIRAC before planning; treat any low-visibility arrival as unconfirmed capability until verified. |
| Airspace / traffic / control | 🟧 | **Brazzaville FIR (FCCC)** (Douala is the local ACC/sector; the controlling FIR is Brazzaville, FCCC) — likely procedural/non-radar; not independently confirmed. See [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and [Africa — Airspace Briefing](../../../../airspace/africa.md). |
| Weather / seasonal hazard | 🟥 | Douala sits in one of the wettest climate belts in Africa — heavy convective rain and thunderstorm activity, worst Jul–Sep. See §3.4/§14. |
| Curfew / slots / hours | 🟧 | Not published / verify — no slot-coordination or curfew regime found in reachable sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as the country's primary gateway; hours/supplier not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; desk hours, handling agent(s) and stand/terminal detail not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
FKKD itself sits at 33 ft AMSL in flat coastal/deltaic terrain at the mouth of the Wouri River — no close-in high ground bears on a normal arrival/departure/missed-approach path. The regional terrain feature is **Mount Cameroon** (~4,040 m/13,255 ft, active volcano) roughly 50 NM to the WSW near Buea/Limbe, close to the Cameroon–Equatorial Guinea coast and the FGSL (Malabo) approach environment — relevant if routing or diverting west/southwest, not a factor for the FKKD circuit itself. Verify the current MSA ring on the chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
FKKD is Cameroon's busiest airport (~1.5M passengers/year) under **Brazzaville FIR (FCCC)**. The FIR's control model (national CCAA vs ASECNA-delegated service) is not confirmed in reachable sources this pass — treat as **likely procedural/non-radar** consistent with the regional norm outside the continent's top-tier hubs, and confirm locally. Cross-ref the [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and the [Africa — Airspace Briefing](../../../../airspace/africa.md) for the continental AFI picture (procedural en-route, AFI IFBP 126.9 MHz mitigation, RVSM FL290–410).

### 3.3 Runway excursion 🟥
Single runway (12/30) — **no reciprocal-direction escape**; whichever way the wind blows, that is the runway in use. Combined with Douala's very heavy rainy-season precipitation (§3.4), wet/contaminated-runway braking action is a standing consideration on every arrival in-season. No displaced threshold or overrun data found — verify current AIP before treating LDA as the full published length.

### 3.4 Weather threat 🟥
Douala lies in one of the wettest climate belts on the West African coast — a tropical monsoon regime with a long wet season (roughly **Apr–Nov, peak Jul–Sep**) bringing heavy convective rainfall, embedded thunderstorms and associated low-level wind-shear/microburst risk typical of the ITCZ convective band (see [Africa — Airspace Briefing §11](../../../../airspace/africa.md)). A short dry season (Dec–Feb) can bring reduced visibility from harmattan haze reaching the Gulf of Guinea coast — a less severe echo of the Sahel-belt harmattan season, not confirmed as a routine FKKD factor but worth a seasonal check. **Kenya Airways Flight 507** (5 May 2007) crashed roughly two minutes after a night departure from FKKD in adverse weather; the Cameroonian investigation attributed the accident to crew handling during the initial climb rather than a mechanical cause — a documented cautionary reference for departure discipline (attitude/instrument cross-check) on a dark, rain-affected night departure from this field. See also [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

### 3.5 Operational considerations 🟧
Single-runway field — any runway obstruction/closure stops all movements, no alternative configuration. The FIR/ANSP governance model (§3.2) and most AIP-sourced operational detail (hours, RFF, PCN, navaid/approach inventory) are open items (§18) rather than confirmed hazards — treat this as a **data-gap caution**, not a known restriction.

---

## 4. Cautions & Warnings

- **Single runway (12/30)** — no reciprocal option; a runway obstruction closes the field entirely.
- **Heavy wet-season rainfall (Jul–Sep peak)** — wet/contaminated-runway braking caution on every arrival in-season; embedded CB and low-level wind shear are a standing threat.
- **Kenya Airways Flight 507 (2007)** — historical night-departure accident in adverse weather; a live reminder to brief attitude/instrument discipline on a dark, rain-affected departure.
- **Mount Cameroon** (active volcano, ~13,255 ft) sits in the regional area to the WSW — relevant to any westbound diversion/routing and to VAAC Toulouse ash-advisory awareness.
- **No ILS/approach procedure confirmed publicly** — do not assume a precision approach exists here; verify the current AIRAC before planning a low-visibility arrival.
- **Runway length (~2,850 m)** may be a real constraint for our heaviest widebody types at high departure weight — check performance before committing to a long sector out of FKKD.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources — no restricted-crew designation found. 🟧
- **Crew-qualification gate:** None confirmed; treat the wet-season weather threat (§3.4) and the absence of a confirmed precision approach as standing briefing items regardless. 🟧
- **Operating restrictions / bans:** None confirmed. 🟧
- **Overflight / entry / permits:** Standard Cameroon state entry rules apply for international crews — not independently confirmed this pass. 🟧
- **Operations notes:** Airport is operated/managed by **Aéroports du Cameroun (ADC)**, which manages 13 airports across the country; the ANSP responsible for Brazzaville FIR (FCCC) — national CCAA versus ASECNA-delegated service — is **not confirmed** in reachable sources (§18).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None found | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available (primary national gateway); supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed; hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 12 | 2,850 × 45 m | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published | Single runway; only runway/direction available |
| 30 | 2,850 × 45 m | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published | Reciprocal direction |

*Source: OurAirports (retrieved 2026-07-26), runway length last updated in that register 2025-12. An older public figure (Wikipedia, citing a pre-2016 resurfacing project) records 2,880 m — 🟧 not reconciled against a primary AIP table this pass. No displaced-threshold or declared-distance breakdown found; all figures in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published | — | — | 🟧 |
| Delivery | Not published | — | — | 🟧 |
| Ground | Not published | — | — | 🟧 |
| Tower | Douala Tower | 119.7 MHz `[OurAirports]` | Not published | 🟧 tier-4 only, not AIP-cross-checked |
| Approach | Not published | — | — | 🟧 |
| A/G (general) | Douala A/G | 655.9 MHz `[OurAirports]` | Not published | 🟧 likely HF/backup channel; role not confirmed |
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
| 12 | Not published / verify | — | — | 🟧 No ILS/RNP procedure confirmed publicly |
| 30 | Not published / verify | — | — | 🟧 No ILS/RNP procedure confirmed publicly |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify — treat low-visibility capability as unconfirmed. 🟧
- **Missed approach watch-items:** No terrain-driven constraint confirmed at the field itself; the operative caution is convective weather (§3.4), not terrain.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found — assumed non-coordinated regional gateway; not independently confirmed. 🟧
- **De-icing:** **NIL** — equatorial/tropical field, non-issue. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** None found — likely NIL for a field of this traffic profile, not independently confirmed. 🟧
- **Night noise / dB limits:** None found.
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Airport has 4 terminals per public reference; exact widebody stand count/configuration not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical monsoon climate on the Gulf of Guinea coast; Douala is documented as one of the wettest major cities in Africa (annual rainfall figures in the ~3,500–4,000+ mm range are widely cited — tier-4, not AIP-sourced).
- **Seasonal hazards:** Long wet season **Apr–Nov (peak Jul–Sep)** with heavy convective rain, embedded thunderstorms and associated low-level wind-shear/microburst risk — part of the broader ITCZ convective band described in the [Africa — Airspace Briefing](../../../../airspace/africa.md). Short dry season **Dec–Feb** can bring occasional harmattan-sourced haze reaching the coast, reducing visibility — not confirmed as a routine FKKD factor.
- **Local effects:** Coastal/estuary location; no notable terrain-wind effect at the field itself.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (single-runway field — any closure stops all movements), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, conflict-zone/overflight bulletins relevant to the routing. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate (not a K Global base).
- **Nearest suitable alternates:** **FNBJ, FCBB** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as Cameroon's primary gateway; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Single 2,850 m runway may be limiting for our heaviest widebody types at high takeoff weight on long sectors — cross-check against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before planning a maximum-payload departure. 🟧

---

## 17. Fleet-specific notes (optional)

- Runway-length-limited departure performance is the one real fleet consideration at this field — verify takeoff weight/field-length numbers for our largest widebody types (A35K/B77W-class) against the current [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before scheduling a long, heavy sector out of FKKD. No other type-specific consideration identified.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Mag variation** — not sourced this pass.
- **Runway length discrepancy** — 2,850 m (current OurAirports) vs 2,880 m (older public/Wikipedia figure); reconcile against the primary AIP.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN, displaced threshold** — none found.
- **Approach/navaid inventory (ILS/RNP/VOR/NDB idents and frequencies)** — none confirmed.
- **SIDs/STARs, TA/TL, take-off minima** — none confirmed.
- **ATS hours, RFF category, fuel supplier/hours, customs desk hours, handling agent(s)** — none confirmed.
- **Brazzaville FIR (FCCC) ANSP/control model** (national CCAA vs ASECNA-delegated) and control type (procedural vs radar) — not confirmed locally for FKKD specifically. See [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) under `Airspace/FIR/Africa/`.
- **ATC frequency set** — only a Tower and one A/G channel found (OurAirports, tier-4); Delivery/Ground/Approach not found.
- **Stand/terminal configuration for widebody ops** — not confirmed.
- **VATSIM cross-check** — no VATSIM vACC/division SOP found for FKKD this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/FKKD/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency register — tier-4.*
- Wikipedia — "Douala International Airport" — https://en.wikipedia.org/wiki/Douala_International_Airport (retrieved 2026-07-26). *Terminal count, operator (ADC), historical runway-resurfacing figure, Kenya Airways Flight 507 accident reference.*
- Africa — Airspace Briefing (internal, this project) — continental AFI structure, ITCZ/harmattan seasonal hazard description, RVSM/IFBP context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
