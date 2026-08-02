# LIRP — San Giusto · Airport Briefing

**LIRP / PSA** · Pisa, Tuscany, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, K Global network build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Italia (ENAV eAIP) where reachable, cross-checked against public tier-4 sources (OurAirports, IVAO Italy network data, an Italian aeronautical-information blog reproducing current AIRAC chart content). Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N43°41′02.0″ / E010°23′33.7″ (43.6839, 10.3927) `[OurAirports]` 🟧 |
| Field elevation | **6 ft / 2 m AMSL** |
| Mag variation | Not confirmed this pass — verify current AIRAC 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | 🟥 **Current designators (effective AIRAC A3/26, 19 Mar 2026): 03R/21L** (~2,993 m) and **03L/21R** (~2,792 m). **Superseded legacy designators 04R/22L and 04L/22R** (same physical strips) are still in wide circulation in navdata, community sources and the anchor material used to seed this brief — see §18 discrepancy note. |
| Preferential runway | **03R/21L is the field's primary operational runway; 03L/21R is normally used as the main taxi route and is only activated as a runway if 03R/21L is closed** (IVAO Italy network data) — a similar "asymmetric pair" pattern to other multi-strip fields in the network |
| Longest LDA | ~2,849 m (03R) per network-sim data — see §7 for the full table and its flags |
| Approaches | **ILS/LOC** on 03R (legacy 04R) — reported **CAT IIIA**; **VOR** on both strips; **RNAV/RNP** (RNP-Z, RNP-Y) on 21L (legacy 22L), the latter **subject to activity in restricted area LI R18 Altopascio** 🟧 |
| RFF category | Not published / verify — not confirmed in reachable sources this pass 🟧 |
| Control type | **Radar** — Pisa Approach on the field; **Roma ACC (LIRR)** and **Milano ACC (LIMM)** both appear as en-route handoffs in network-sim data (the field sits near the LIRR/LIMM boundary) — no dedicated Roma or Milano FIR brief exists in-library; see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 (general continental brief only, does not cover Italy FIR specifics) |
| Elevation class | Sea-level Arno-plain coastal field — **not** hot-and-high; no density-altitude penalty |
| Special-airport status | 🟥 **Joint civil/military aerodrome** — shared with the Italian Air Force's **46ª Brigata Aerea** (C-130J/C-27J transport wing); **category not set in K Global's VAMSYS record** — see §5 |
| Customs / PoE | **Yes** — reported Schengen port of entry with full immigration for non-Schengen arrivals; exact hours not confirmed 🟧 |
| K Global category | 🟧 **Not set** — VAMSYS record carries no category value for this field `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LIRQ** (Firenze Peretola — no in-library brief yet), [**LIPE**](../lipe/index.md) (Bologna), **LFKB** (Bastia-Poretta, Corsica, France — no in-library brief yet) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not published** — VAMSYS record carries no taxi-time value for this field |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Arno-river coastal plain; no close-in high terrain. |
| Runway length vs fleet perf | 🟩 | ~2,993 m (03R) and ~2,792 m (03L) are non-limiting for typical K Global widebody operating weights, though shorter than the network's major hubs — cross-ref [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) for any weight-limited case. |
| Approach availability / minima | 🟧 | ILS/LOC reported on one strip only (03R, CAT IIIA); the other strip (03L) is VOR-only. RNP procedures on 21L are restricted-area-dependent (LI R18 Altopascio) — see §3.2/§10. |
| Airspace / traffic / control | 🟧 | Joint civil/military field — military transport traffic (C-130J/C-27J) shares the circuit; Pisa Approach workload otherwise moderate relative to the network's major hubs. |
| Weather / seasonal hazard | 🟧 | Coastal Tuscan climate; no specific seasonal-hazard statistic sourced this pass. |
| Curfew / slots / hours | 🟧 | No hard curfew found; a **voluntary/night-configuration routing (23:00–06:00, one-way ops)** is reported per network-sim data — see §6/§12. |
| RFF category vs our types | 🟧 | Not published / verify — not confirmed in reachable sources this pass. |
| Fuel availability | 🟧 | Jet A-1 reported available via truck/bowser delivery; H24 status not confirmed. |
| Customs / handling / security | 🟧 | Reported Schengen PoE with full immigration for non-Schengen arrivals; exact hours and handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LIRP sits at 6 ft AMSL on the flat Arno-river coastal plain in Tuscany, close to the Tyrrhenian coast. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
LIRP is a **joint civil/military aerodrome**, home to the Italian Air Force's **46ª Brigata Aerea** operating **C-130J Hercules** and **C-27J Spartan** transport aircraft alongside scheduled civil traffic. Military training/transport activity shares the circuit and local airspace, and at least one published instrument procedure — **RNP-Z RWY 21L** — is explicitly **subject to activity in the restricted area LI R18 Altopascio**, meaning its availability can vary with military/other scheduled activity in that area. Civil traffic density is materially lower than the network's major hubs, but the military-share dimension is a standing TEM item distinct from anything at a purely civil field.

### 3.3 Runway excursion 🟧
Displaced thresholds are reported on **03L (298 m)**, **03R (149 m)** and **21L (257 m)** (OurAirports, using current designators); no displacement is reported for 21R. **03L/21R is normally used as the field's main taxi route** rather than an active runway (network-sim data) — confirm current activation status before planning any operation on that strip. No contamination/braking-action data was found — treat wet-runway braking as a standard seasonal caution.

### 3.4 Weather threat 🟧
Coastal Tuscan/Tyrrhenian climate; no field-specific seasonal-hazard frequency statistic was found in reachable sources this pass. Treat standard Mediterranean coastal considerations (winter fog/mist potential, summer convective activity) as a general caution pending a sourced seasonal climatology.

### 3.5 Operational considerations 🟧
Plan around three durable items: (1) the **joint civil/military status** and the resulting shared-airspace/restricted-area (LI R18 Altopascio) dependency on at least one RNP procedure; (2) the **recent runway-designator change** (04/22 → 03/21, effective AIRAC A3/26, 19 Mar 2026) — confirm any chart, navdata or briefing referencing this field uses the current designators; and (3) the **K Global VAMSYS record gap** — category and taxi-time fields are not set, so dispatch/planning tools relying on those fields should be checked manually for this destination.

---

## 4. Cautions & Warnings

- **Runway designators changed from 04/22 to 03/21, effective AIRAC A3/26 (19 March 2026)** — legacy 04R/22L and 04L/22R naming is still common in navdata and community sources; confirm which naming convention any chart or tool in use is showing before briefing a crew.
- **Joint civil/military aerodrome** — expect Italian Air Force C-130J/C-27J transport traffic sharing the circuit and local airspace.
- **RNP-Z RWY 21L availability is tied to activity in restricted area LI R18 Altopascio** — do not assume this procedure is always available; confirm current NOTAM/restricted-area status.
- **03L/21R is normally a taxi route, not an active runway** — confirm current activation status (it is only used as a runway if 03R/21L is closed).
- **K Global category and taxi-time fields are unset in VAMSYS for this field** — do not assume a default; confirm manually at planning.
- Displaced thresholds exist on three of the four runway ends (03L, 03R, 21L) — mind LDA vs. full runway length.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **joint civil/military environment** and the **restricted-area-dependent RNP procedure**. 🟧 **K Global VAMSYS record carries no category value for this field** — flagged per task anchor.
- **Crew-qualification gate:** No specific low-experience-crew restriction found in reachable sources — verify current operator policy. 🟧
- **Operating restrictions / bans:** No hard curfew found; a voluntary/night one-way routing is reported (§6/§12). RNP-Z RWY 21L conditional on restricted-area LI R18 Altopascio status. Verify current AIRAC for any additional operating restriction. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit required for EU/EASA-state operators. A PPR (prior-permission-required) practice is reported by a community source, consistent with the field's joint military status — confirm current requirement with handling. 🟧
- **Operations notes:** ANSP — **ENAV** (Pisa Approach on the field). Airport operator — **Toscana Aeroporti S.p.A.** (civil side); military side operated by the **Aeronautica Militare (Italian Air Force), 46ª Brigata Aerea**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed this pass | 🟧 |
| AD operating hours | Reported 24-hour civil operations permitted (tier-4); confirm against joint military-use schedule | 🟧 |
| Night / curfew restrictions | No hard curfew found; network-sim data reports that **from 23:00–06:00 local, RWY 21L is available for take-off and RWY 03R is available for landing, with tailwind not exceeding 10 kt** — a one-way night noise-routing pattern, not a blanket ban | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 — truck/bowser delivery to stand reported (tier-4); H24 status not confirmed | 🟧 |
| PCN | Not confirmed in reachable sources this pass | 🟧 |
| Customs | Reported Schengen PoE with full immigration for non-Schengen arrivals; exact hours not confirmed | 🟧 |
| Handling / FBO | Toscana Aeroporti S.p.A. plus third-party handlers — specific handler for our operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03R *(legacy 04R)* | ~2,993 × 45 m | Asphalt / PCN not confirmed 🟧 | 2,992 m | Not published/verify 🟧 | Not published/verify 🟧 | 2,849 m | **Primary operational runway**; ILS/LOC/VOR/TACAN; displaced threshold 149 m |
| 21L *(legacy 22L)* | ~2,993 × 45 m | Asphalt / PCN not confirmed 🟧 | 2,992 m | Not published/verify 🟧 | Not published/verify 🟧 | 2,735 m | RNAV/RNP (restricted-area-dependent, LI R18 Altopascio); displaced threshold 257 m |
| 03L *(legacy 04L)* | ~2,792 × 43 m | Asphalt / PCN not confirmed 🟧 | 2,736 m | Not published/verify 🟧 | Not published/verify 🟧 | 2,495 m | **Normally used as main taxi route** — activated as a runway only if 03R/21L closed; VOR only; displaced threshold 298 m |
| 21R *(legacy 22R)* | ~2,792 × 43 m | Asphalt / PCN not confirmed 🟧 | 2,736 m | Not published/verify 🟧 | Not published/verify 🟧 | 2,736 m | No published approach procedure found this pass; no displacement reported |

*Sources: OurAirports (dimensions, displacement, using current 03/21 designators), IVAO Italy network TORA/LDA data (cross-check only, network-sim sourced, not regulatory), aeronauticalinformation.it (Italian aeronautical-information site reproducing current-AIRAC chart content, confirming the AIRAC A3/26 runway-designator change effective 19 March 2026). TODA/ASDA and PCN not obtained from a primary AIP table this pass — 🟧 treat all declared-distance figures as needing a live-AIRAC cross-check before dispatch use. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Ground | Pisa Ground | 120.080 | Not confirmed 🟧 | |
| Tower | Pisa Tower | 118.775 | Not confirmed 🟧 | A separate community source reports 119.100 — treat as unconfirmed pending AIP cross-check |
| Approach | Pisa Approach | 126.080 | Not confirmed 🟧 | |
| Centre / FIR (Roma) | Roma Radar (NE sector) · Roma Information (FSS) | 124.200 · 125.750 | H24 (assumed) | No dedicated in-library Roma FIR brief; see [Europe — Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Centre / FIR (Milano) | Milano Radar (WS2 sector) · Milano Information (FSS) | 135.455 · 124.925 | H24 (assumed) | Field sits near the LIRR/LIMM boundary; no dedicated in-library Milano FIR brief 🟧 |

*Source: IVAO Italy network quick-overview data (cross-check only, network-sim sourced — not regulatory; representative of published frequencies but not independently AIP-confirmed this pass). Treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| TACAN | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | Not confirmed | Reported unusually sited **in the extension of the runway centreline**, permitting an approach aligned exactly with the runway — a documented peculiarity of this field |
| VOR/DME | PIS (Pisa) — ident inferred from published fix radials (e.g. "RDL 214 PIS VOR") | Not confirmed this pass 🟧 | Not confirmed | Referenced throughout published approach/missed-approach procedures |
| NDB | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | Not confirmed | Reported present on both strips per community source |
| ILS/LOC 03R | Not confirmed this pass 🟧 | Not confirmed this pass 🟧 | Not confirmed | CAT IIIA reported (tier-4); serves the field's primary operational runway |

*No primary AIP navaid table was reachable this pass — idents/frequencies are flagged for verification rather than fabricated. Confirm all navaid data on the current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** TA **6,000 ft**; TL variable by QNH (IVAO Italy reference table: QNH <977 hPa → TL 85; 977–994 → TL 80; 995–1012 → TL 75; ≥1013 → TL 70) — cross-check current AIRAC. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** **03R is the field's primary operational runway**; 03L is normally a taxi route (§3.3). Night one-way routing (23:00–06:00): RWY 03R available for landing with tailwind ≤10 kt (§6).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 03R | ILS or LOC; VOR-Z; RNP | Not confirmed 🟧 | Not confirmed 🟧 | **CAT IIIA reported.** Renamed from "04R" charts effective AIRAC A3/26 |
| 03L | VOR-Z (minima as for 03R per chart note) | Not confirmed 🟧 | Not confirmed 🟧 | Renamed from "04L" charts effective AIRAC A3/26 |
| 21L | RNP-Z; RNP-Y | Not confirmed 🟧 | Not confirmed 🟧 | **RNP-Z conditional on restricted area LI R18 Altopascio** activity status. Renamed from "22L" charts effective AIRAC A3/26 |
| 21R | None found this pass | — | — | No published approach procedure identified in reachable research |

- **STARs (names only):** **STAR RNAV1** (both runway pairs), **STAR VOR** (ATC discretion) — feeder fixes reported from north/west via **MIVKI** and from south/east via a route referencing the **ELB (Elba) VOR** — pull the current-AIRAC STAR chart for exact routing. 🟧
- **LVP:** Not confirmed this pass — no specific LVP trigger data found. 🟧
- **Missed approach watch-items:** A conventional/RNAV1 holding pattern is established on waypoint **VANXI** (inbound 279° / outbound 099°, MHA 2,000 ft, IAS max 190 kt) and is used as the missed-approach hold for multiple published procedures — verify current chart. Terrain is not the driver (flat coastal plain).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** **SID RNAV1 RWY 21R/L** and conventional/RNAV variants keyed to fixes **GINAR, SPEZI, BEROK, VANXI, DOCME** (network-sim/aeronautical-information-site sourced); the SID **AKUTO 6F** was cancelled and replaced by **DOCME 6F** effective AIRAC A8/25 (7 Aug 2025) — pull the live current-AIRAC SID list before use. 🟧
- **RNP / climb-gradient requirements:** New **RNP1 initial-climb procedures for RWY 03R and 03L** were introduced with the runway-designator change (AIRAC A3/26, 19 Mar 2026) — verify gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed this pass — confirm cross-bleed/APU notification procedure and any military-coordination requirement locally. 🟧
- **ATC slot / CTOT & clearance:** No slot coordination reported for this field (tier-4); PPR is reported required — confirm current requirement with handling. 🟧
- **De-icing:** Not confirmed in reachable sources — Mediterranean coastal climate makes this a lower-frequency seasonal consideration. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in detail this pass. 🟧
- **Night noise / dB limits:** No hard curfew found; a **voluntary noise-abatement window 22:00–06:00** is reported by one community source, alongside the more specific **23:00–06:00 one-way routing** (RWY 21L for take-off, RWY 03R for landing, tailwind ≤10 kt) reported by network-sim data (§6). Treat the two as broadly consistent but not independently AIP-confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed in detail this pass — the civil terminal reports a modest gate count (16 gates, one jetbridge-equipped) per a community source, sized primarily for narrowbody operations; widebody stand suitability for K Global types is not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** **Taxiways A, B, C, D, E, F and P are reported available for aircraft up to ICAO Code E; Taxiway O is reported limited to Code C** (network-sim data) — confirm Code E suitability for K Global widebody types before planning a movement via Taxiway O. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Coastal Tuscan/Tyrrhenian climate on the Arno-river plain; prevailing wind direction not independently confirmed this pass.
- **Seasonal hazards:** No field-specific seasonal-hazard frequency statistic was found in reachable sources — treat standard Mediterranean coastal considerations (winter fog/mist potential, summer convective activity) as a general caution pending a sourced climatology. 🟧
- **Local effects:** Coastal proximity typical of a Tyrrhenian-shore field; no notable terrain-driven local effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. current 03L/21R activation status), navaid U/S, lighting, obstacle/crane, restricted-area LI R18 Altopascio activity (affects RNP-Z RWY 21L), military-traffic notices, RFF downgrade, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / non-base network field; category not set in K Global's VAMSYS record. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **LIRQ** (Firenze Peretola — no in-library brief yet), [**LIPE**](../lipe/index.md) (Bologna), and **LFKB** (Bastia-Poretta, Corsica, France — no in-library brief yet) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 reported via truck/bowser delivery to stand; H24 availability not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** ~2,993 m / ~2,792 m runway lengths are shorter than the network's major hubs — confirm weight-limited performance for larger K Global types on the current chart. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- The shorter runway lengths here (relative to the network's major hubs) mean weight/performance should be checked per type on the current chart rather than assumed non-limiting — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference. No field-elevation performance penalty (sea level).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **K Global VAMSYS category field is not set for this field** — per task anchor; confirm intended category and populate VAMSYS.
- **K Global VAMSYS taxi-time field is not set for this field** — confirm intended value and populate VAMSYS.
- **Runway designator change (04/22 → 03/21, AIRAC A3/26, 19 Mar 2026)** — this brief uses current designators; confirm any other tool, chart or crew brief referencing this field has also been updated, since legacy naming remains in wide circulation.
- **RFF category, PCN, take-off minima, mag variation, TODA/ASDA** — none confirmed in reachable sources this pass.
- **ATC frequencies** — Tower frequency conflict between two tier-4 sources (118.775 vs 119.100) — resolve against a primary AIP table.
- **RNP-Z RWY 21L / restricted area LI R18 Altopascio interaction** — confirm current NOTAM/activation status procedure.
- **Gate/stand suitability for K Global widebody types** — civil terminal gate count/jetbridge availability suggests primarily narrowbody sizing; confirm before planning a widebody rotation.
- **PPR requirement and process** — reported required by a community source; confirm current procedure and contact with handling rather than relying on an unverified community-sourced contact detail.
- **No in-library brief exists yet for LIRQ (Firenze Peretola) or LFKB (Bastia-Poretta)**, both company-preferred alternates — link when built.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/LIRP/runways.html (retrieved 2026-07-26). *Current 03/21 runway designators, dimensions, displaced-threshold figures, ARP/elevation.*
- IVAO Italy — Quick Overview, Pisa San Giusto — https://quickoverview.ivao.it/aerodrome/show/LIRP (retrieved 2026-07-26). *TORA/LDA, ATC frequencies, SID names, TA/TL table, taxiway code-letter restrictions, night one-way routing — network-sim document, not regulatory; used for operational cross-check only.*
- Aeronautical Information (Italy) — "Procedure strumentali di Pisa" — https://aeronauticalinformation.it/index.php/2024/04/09/procedure-strumentali-di-pisa/ (retrieved 2026-07-26). *AIRAC A3/26 runway-designator change confirmation (effective 19 Mar 2026), STAR/SID/approach names, LI R18 Altopascio restricted-area note, VANXI missed-approach hold — reproduces current-AIRAC chart content; informs procedural detail but is not the primary AIP itself.*
- Wikipedia — "Pisa International Airport" — https://en.wikipedia.org/wiki/Pisa_International_Airport (retrieved 2026-07-26). *General field description, terminal/gate detail, military co-location (46ª Brigata Aerea).*
- Data Sky Center — LIRP — https://dataskycenter.com/airport/LIRP (retrieved 2026-07-26). *Community-sourced cross-check: frequencies, fuel, PPR, curfew notes; not authoritative.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
