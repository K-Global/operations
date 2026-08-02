# FOOL — Léon-Mba · Airport Briefing

**FOOL / LBV** · Libreville, Estuaire Province, Gabon · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — national AIP/ASECNA-region provisional, tier-4 corroborated

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 aeronautical sources (a full ASECNA/Gabon eAIP extract was not reachable this pass); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 0°27′32″N / 9°24′44″E (0.45895, 9.41214) `[OurAirports]` |
| Field elevation | **39 ft / 12 m AMSL** |
| Mag variation | 🟧 Not published / verify — no sourced AIP figure obtained this pass |
| Time zone | UTC+1 (WAT) — no DST observed |
| Runway(s) | **16/34**, single runway, **3,000 × 45 m** asphalt, lighted `[OurAirports]` |
| Preferential runway | 🟧 Not published — single-runway field, direction selected by wind |
| Longest LDA | 🟧 Not published / verify — runway length ~3,000 m is the working figure; no displaced-threshold data found |
| Approaches | 🟧 Not published / verify — no ILS or RNP procedure confirmed in reachable public sources this pass |
| RFF category | 🟧 Not published / verify |
| Control type | 🟧 Not confirmed — regional norm outside the continent's top hubs is procedural (non-radar); not independently confirmed for FOOL |
| Elevation class | Sea-level (39 ft) — **not** hot-and-high |
| Special-airport status | None found — not operator-categorised as restricted in reachable sources 🟧 |
| Customs / PoE | **Yes** — Gabon's main international gateway (~720,000 pax/yr reported); exact desk hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **FKKD, FNBJ** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Coastal, low-lying site on the Gulf of Guinea; no close-in high terrain relevant to arrival/departure or missed approach. See §3.1. |
| Runway length vs fleet perf | 🟧 | Single 3,000 m runway is workable for narrow/mid-body types but may be limiting for our largest widebodies at high takeoff weight on long sectors — cross-check against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). |
| Approach availability / minima | 🟧 | No ILS/RNP procedure confirmed publicly — pull current AIRAC before planning. |
| Airspace / traffic / control | 🟧 | **Brazzaville FIR (FCCC)** (Libreville is the local ACC/sector; the controlling FIR is Brazzaville, FCCC) — likely procedural/non-radar; not independently confirmed. See [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and [Africa — Airspace Briefing](../../../../airspace/africa.md). |
| Weather / seasonal hazard | 🟥 | Equatorial Gulf-of-Guinea climate — heavy rainfall and convective activity in the long wet season; see §3.4/§14. |
| Curfew / slots / hours | 🟧 | Not published / verify — no slot-coordination or curfew regime found in reachable sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as Gabon's main gateway; hours/supplier not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; desk hours, handling agent(s) and stand/terminal detail not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
FOOL sits at 39 ft AMSL on the Gulf of Guinea coast at Libreville — flat, low-lying terrain with no close-in high ground relevant to a normal arrival, departure or missed-approach path. Verify the current MSA ring on the chart as routine practice; CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟧
FOOL is Gabon's main international gateway under **Brazzaville FIR (FCCC)**. The FIR's control model (national ANAC-Gabon vs ASECNA-delegated service) is not confirmed in reachable sources this pass — treat as **likely procedural/non-radar**, consistent with the regional norm outside the continent's top-tier hubs, and confirm locally. Cross-ref the [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) and the [Africa — Airspace Briefing](../../../../airspace/africa.md) for the continental AFI picture (procedural en-route, AFI IFBP 126.9 MHz mitigation, RVSM FL290–410).

### 3.3 Runway excursion 🟥
Single runway (16/34) — no reciprocal-direction escape; whichever way the wind blows, that is the runway in use. Combined with the equatorial wet-season rainfall (§3.4), wet/contaminated-runway braking action is a standing consideration in-season. No displaced threshold or overrun data found — verify current AIP before treating LDA as the full published length.

### 3.4 Weather threat 🟥
Libreville sits directly on the equatorial Gulf of Guinea coast, within the ITCZ convective band described in the [Africa — Airspace Briefing §11](../../../../airspace/africa.md) — expect a long wet season with heavy convective rainfall, embedded thunderstorms and associated low-level wind-shear/microburst risk, and a shorter, drier season (roughly Jun–Aug, the "petite saison sèche"/cool dry spell typical of the Gabonese coast — tier-4 general climatology, not independently confirmed for this field). Two documented ditching-related accidents near FOOL — **Gabon Express Flight 221** (8 Jun 2004, engine failure/hydraulic problems shortly after takeoff, ditched in the Gulf of Guinea) and the **Solenta Aviation/DHL An-26** (6 Jun 2011, hydraulic problems, ditched near the airport) — are a documented reminder that both the departure and arrival paths here run directly over open water. See also [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

### 3.5 Operational considerations 🟥
Single-runway field with both the extended runway centrelines running out over the Gulf of Guinea (coastal alignment 16/34) — any engine-out/emergency-turn procedure should assume an over-water initial segment on at least one runway direction; verify the current chart for the exact obstacle/turn environment. The FIR/ANSP governance model (§3.2) and most AIP-sourced operational detail (hours, RFF, PCN, navaid/approach inventory) are open items (§18) rather than confirmed hazards.

---

## 4. Cautions & Warnings

- **Single runway (16/34)** — no reciprocal option; a runway obstruction closes the field entirely.
- **Over-water departure/arrival segment** — the coastal 16/34 alignment means at least one runway direction has an initial climb/final segment over the Gulf of Guinea; two historical ditching-related accidents near this field (2004, 2011) underline the importance of briefing engine-out/ditching procedure realistically for this environment.
- **Heavy equatorial wet-season rainfall** — wet/contaminated-runway braking caution on every arrival in-season; embedded CB and low-level wind shear are a standing threat.
- **No ILS/approach procedure confirmed publicly** — do not assume a precision approach exists here; verify the current AIRAC before planning a low-visibility arrival.
- **Runway length (~3,000 m)** may be a real constraint for our heaviest widebody types at high departure weight — check performance before committing to a long sector out of FOOL.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources — no restricted-crew designation found. 🟧
- **Crew-qualification gate:** None confirmed; treat the over-water departure/arrival segment (§3.5) and the wet-season weather threat (§3.4) as standing briefing items regardless. 🟧
- **Operating restrictions / bans:** None confirmed. 🟧
- **Overflight / entry / permits:** Standard Gabon state entry rules apply for international crews — not independently confirmed this pass. 🟧
- **Operations notes:** Airport constructed in the 1950s and remains Gabon's main international gateway. The ANSP responsible for Brazzaville FIR (FCCC) — national civil aviation authority versus ASECNA-delegated service — is **not confirmed** in reachable sources (§18).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None found | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available (main national gateway); supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed; hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16 | 3,000 × 45 m | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published | Single runway; coastal alignment, over-water on at least one direction |
| 34 | 3,000 × 45 m | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published | Reciprocal direction |

*Source: OurAirports (retrieved 2026-07-26). No displaced-threshold or declared-distance breakdown found; all figures in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published | — | — | 🟧 |
| Delivery | Not published | — | — | 🟧 |
| Ground | Not published | — | — | 🟧 |
| Tower | Libreville Tower | 118.7 MHz `[OurAirports]` | Not published | 🟧 tier-4 only, not AIP-cross-checked |
| Approach | Not published | — | — | 🟧 |
| A/G (general) | Libreville A/G | 655.9 MHz `[OurAirports]` | Not published | 🟧 likely HF/backup channel; role not confirmed |
| Radio (HF-type) | Libreville RDO | 666.6 MHz `[OurAirports]` | Not published | 🟧 likely HF en-route position-report channel; role not confirmed |
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
| 16 | Not published / verify | — | — | 🟧 No ILS/RNP procedure confirmed publicly; likely over-water final segment |
| 34 | Not published / verify | — | — | 🟧 No ILS/RNP procedure confirmed publicly |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not published / verify — treat low-visibility capability as unconfirmed. 🟧
- **Missed approach watch-items:** No terrain-driven constraint (flat coastal site); the operative caution is convective weather (§3.4) and the over-water segment on at least one runway direction (§3.5).

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

- **Stands for our types:** Not published / verify — widebody stand count/configuration not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Equatorial climate directly on the Gulf of Guinea coast; high humidity and heavy rainfall year-round with a pronounced wet season.
- **Seasonal hazards:** Long wet season with heavy convective rain and embedded thunderstorms — part of the ITCZ convective band described in the [Africa — Airspace Briefing](../../../../airspace/africa.md); a shorter, relatively drier/cooler spell is commonly reported for the Gabonese coast around the mid-year months, but no FOOL-specific rainfall statistic or precise seasonal boundary was confirmed this pass. 🟧
- **Local effects:** Coastal location — sea-breeze effects plausible, not independently confirmed.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (single-runway field — any closure stops all movements), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, conflict-zone/overflight bulletins relevant to the routing. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate (not a K Global base).
- **Nearest suitable alternates:** **FKKD, FNBJ** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as Gabon's main gateway; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Single 3,000 m runway may be limiting for our heaviest widebody types at high takeoff weight on long sectors — cross-check against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before planning a maximum-payload departure. 🟧

---

## 17. Fleet-specific notes (optional)

- Runway-length-limited departure performance is the one real fleet consideration at this field — verify takeoff weight/field-length numbers for our largest widebody types (A35K/B77W-class) against the current [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before scheduling a long, heavy sector out of FOOL. No other type-specific consideration identified.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Mag variation** — not sourced this pass.
- **Declared distances (TORA/TODA/ASDA/LDA), PCN, displaced threshold** — none found.
- **Approach/navaid inventory (ILS/RNP/VOR/NDB idents and frequencies)** — none confirmed.
- **SIDs/STARs, TA/TL, take-off minima** — none confirmed.
- **ATS hours, RFF category, fuel supplier/hours, customs desk hours, handling agent(s)** — none confirmed.
- **Brazzaville FIR (FCCC) ANSP/control model** (national ANAC-Gabon vs ASECNA-delegated) and control type (procedural vs radar) — not confirmed locally for FOOL specifically. See [Brazzaville (FCCC) FIR Briefing](../../../../airspace/fir/africa/brazzaville-fccc.md) under `Airspace/FIR/Africa/`.
- **ATC frequency set** — only a Tower and two possible HF/A-G channels found (OurAirports, tier-4); Delivery/Ground/Approach not found.
- **Stand/terminal configuration for widebody ops** — not confirmed.
- **Exact over-water engine-out/emergency-turn procedure** — not confirmed; verify current chart given the coastal runway alignment.
- **VATSIM cross-check** — no VATSIM vACC/division SOP found for FOOL this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/FOOL/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency register — tier-4.*
- Wikipedia — "Léon-Mba International Airport" — https://en.wikipedia.org/wiki/Libreville_International_Airport (retrieved 2026-07-26). *Airport history, Gabon Express Flight 221 (2004) and Solenta Aviation/DHL An-26 (2011) ditching-accident references.*
- Africa — Airspace Briefing (internal, this project) — continental AFI structure, ITCZ seasonal hazard description, RVSM/IFBP context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
