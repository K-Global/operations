# LOWW — Wien-Schwechat · Airport Briefing

**LOWW / VIE** · Schwechat, Lower Austria, Austria · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP not yet integrated

> **Read-me:** Planning aid for the sim, not a chart. The Austro Control eAIP (Austria's state AIP, the tier-1 source of record for this field) was not accessible in a usable form for this build — every figure below is corroborated from tier-4 public sources only (OurAirports, SkyVector, SKYbrary, Wikipedia) and **must be re-verified against the primary AIP/current AIRAC** before operational use. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N48°06′37″ / E016°34′11″ (48.11030, 16.56972) `[OurAirports / SkyVector, cross-checked]` |
| Field elevation | **600 ft / 183 m AMSL** `[OurAirports / SKYbrary]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **11/29** 3,500 × 45 m (asphalt) · **16/34** 3,600 × 45 m (asphalt) — two crossing (non-parallel) runways `[OurAirports / SkyVector / SKYbrary, cross-checked]` |
| Preferential runway | Not published / verify 🟧 — configuration assigned by Wien Tower/Radar per wind and traffic flow; confirm active configuration via ATIS at planning |
| Longest LDA | 3,600 m (16/34) — full published runway length; exact LDA/displaced-threshold figure not published / verify 🟧 |
| Approaches | ILS published for the main runway ends; specific CAT II/III capability, the runway(s) it serves, and idents/frequencies are **not published / verify** 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Wien Tower/Approach ("Wien Radar") on the field; **Wien ACC (LOVV)** en route — see [Europe airspace brief](../../../../airspace/europe.md) (no dedicated LOVV FIR brief exists yet in this network — 🟧) |
| Elevation class | Low elevation (600 ft) — **not** hot-and-high; non-factor for performance |
| Special-airport status | None identified in public sources; two **crossing (non-parallel) runways** is the field's defining geometry — see §3.2/§3.5 | 🟧 |
| Customs / PoE | **Yes** — Schengen/non-Schengen split by concourse, shared passport control at non-Schengen piers (Concourses D and G) `[Wikipedia, retrieved 2026-07-26]`; exact desk hours not published / verify 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No — destination** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | LSZH, LKPR, LHBP `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **14 / 18 min** — figures confirmed, in/out assignment not certain 🟧 `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Danube/Vienna basin; nearest higher ground (Vienna Woods, foothills of the Alps) lies well clear of the terminal area — see §3.1. |
| Runway length vs fleet perf | 🟩 | 3,500–3,600 m runways are non-limiting for any K Global narrow/wide-body type expected on this route. |
| Approach availability / minima | 🟧 | ILS infrastructure exists but CAT category, runway assignment and idents are not confirmed from a primary source — see §9/§10. |
| Airspace / traffic / control | 🟧 | Major Star Alliance hub (~234,000 annual movements, 2024) on two **crossing** (not parallel) runways — inherently dependent sequencing; see §3.2. |
| Weather / seasonal hazard | 🟥 | Central European humid-continental climate — winter fog/snow/icing and summer convective activity are the standing seasonal threats; see §3.4/§14. |
| Curfew / slots / hours | 🟧 | Vienna is understood to be an IATA-coordinated hub; exact slot level, coordinator and any night/curfew restriction are not confirmed from a primary source — see §6/§12. |
| RFF category vs our types | 🟧 | Category not published — verify before dispatch to this field. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major hub; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | Schengen/non-Schengen terminal split confirmed; desk hours and our contracted handler not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LOWW sits at 600 ft AMSL in the flat Danube/Vienna basin. The nearest higher ground — the Vienna Woods (Wienerwald), the easternmost foothills of the Alps — lies to the west/northwest of the city, clear of the airport's immediate terminal area and not a close-in factor for standard arrivals, departures or missed approaches. This is a low-terrain-risk field; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟧
LOWW is the hub for Austrian Airlines (Star Alliance) and a base for multiple low-cost carriers, handling **31.7 million passengers and 234,138 aircraft movements in 2024** `[Wikipedia/ACI statistics, retrieved 2026-07-26]` — a substantial and growing traffic volume (2024 movements up 5.9% year-on-year). Unlike a parallel-runway hub, LOWW's two runways (**11/29** and **16/34**) are **crossing, not parallel** — this geometry makes runway-use inherently dependent (only one active landing/departure runway direction-set at a time in normal ops) rather than allowing independent simultaneous streams, concentrating sequencing workload on Wien Tower/Radar during peak banks. Cross-ref [Europe airspace brief](../../../../airspace/europe.md) — no dedicated Wien (LOVV) FIR brief exists yet in this network; 🟧 open item.

### 3.3 Runway excursion 🟧
No displaced-threshold or contamination data was obtained from a primary source for either runway. Both runways are asphalt, 45 m wide, 3,500–3,600 m long — ample length is not itself a runway-excursion mitigant against contamination. Winter snow/ice (§3.4/§14) is the standing seasonal excursion driver pending confirmation of braking-action reporting and de-icing provisioning.

### 3.4 Weather threat 🟥
LOWW's climate is classified **Humid Continental (Köppen Dfb)** `[SKYbrary, retrieved 2026-07-26]`. Central European winters bring **fog, low stratus and snow/icing** in the Danube basin, consistent with the region generally (comparable to other Rhine/Danube-basin fields); summers bring the standard Central European risk of afternoon **convective thunderstorms**. No LOWW-specific fog-frequency or snow-day statistic was obtained from a primary source — treat as general regional climatology pending confirmation, and plan de-icing/LVP contingency in the winter season as a matter of course. See §14.

### 3.5 Operational considerations 🟧
Three durable planning items: (1) the **crossing-runway geometry** (§3.2) concentrates sequencing dependency rather than offering independent parallel streams; (2) a **third runway (11R/29L)** was legally approved by Austria's Federal Administrative Court in 2018 but **Flughafen Wien AG announced in late 2025 that the project would not proceed** `[Wikipedia, retrieved 2026-07-26]` — the current two-runway system should be treated as the durable baseline, with no construction underway and no opening date to reference; monitor for any reversal of this decision; (3) the **Schengen/non-Schengen terminal split** (Concourses D and G handle non-Schengen traffic behind shared passport control) has minimum-connect-time implications for any connecting itinerary through this field. RFF category, exact declared distances, and low-visibility approach capability are all open items in §18 pending primary-source confirmation.

---

## 4. Cautions & Warnings

- **Runways 11/29 and 16/34 cross, they do not run parallel** — do not assume independent simultaneous arrival/departure streams; expect dependent sequencing under Wien Tower/Radar.
- **Low-visibility approach capability (CAT II/III) is not confirmed from a primary source** — do not assume CAT III minima are available at this field without a current-AIRAC chart check.
- **Winter fog/snow/icing** is the standing Central European seasonal threat at this field — build de-icing and LVP contingency into winter planning.
- **A planned third runway (11R/29L) is *not* proceeding** as of late 2025 despite 2018 court approval — do not plan around future third-runway capacity.
- **Schengen/non-Schengen terminal split** — a connecting itinerary through non-Schengen concourses (D, G) carries its own passport-control/minimum-connect-time consideration.
- Declared distances, RFF category and preferential-runway logic are all sourced only to tier-4 corroboration at this stage — treat every planning figure as provisional pending primary-AIP verification.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** No operator-categorised restricted-crew "special airport" status identified in public sources; the standing crew-briefing item is the **crossing-runway (non-parallel) geometry** rather than any hot-and-high or terrain-driven category. 🟧
- **Crew-qualification gate:** None identified — verify against current AIP before treating this as a standard-category field for crew currency purposes. 🟧
- **Operating restrictions / bans:** None identified in public sources; no RNP AR ban, circling restriction or night-ops ban confirmed either way — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit identified. 🟩
- **Operations notes:** Airport operator — **Flughafen Wien AG**. ANSP — **Austria Control** (Österreichische Gesellschaft für Zivilluftfahrt / Austro Control GmbH), providing Wien Tower/Approach and Wien ACC (LOVV) en-route service.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — major international hub, H24 tower/approach assumed but not confirmed | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify — Vienna is understood to be an IATA-coordinated hub; exact slot level, coordinator and any night restriction not confirmed | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as a major hub; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Schengen/non-Schengen split confirmed by concourse; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed for our operation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 11 | 3,500 × 45 m | Asphalt / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Full published runway length shown in Dimensions; no displaced-threshold data obtained |
| 29 | 3,500 × 45 m | Asphalt / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | |
| 16 | 3,600 × 45 m | Asphalt / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Longest runway at the field |
| 34 | 3,600 × 45 m | Asphalt / PCN not published | Not published / verify | Not published / verify | Not published / verify | Not published / verify | |

*Runway dimensions and surface: OurAirports, SkyVector and SKYbrary (cross-checked, retrieved 2026-07-26). Declared distances (TORA/TODA/ASDA/LDA) and PCN are **not published in a reachable primary source** — treat the Dimensions figures as a full-length ceiling only, not a declared-distance substitute, and confirm exact figures on the current AIRAC before dispatch planning. 🟧 All lengths in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (departure) | Wien ATIS | 121.730 | Not published / verify | |
| ATIS (arrival) | Wien ATIS | 122.955 | Not published / verify | |
| Delivery | Wien Delivery / Wien Clearance | 122.125 | Not published / verify | |
| Ground | Wien Ground | 121.600 (additional position 121.770 reported) | Not published / verify | Multiple positions — take the assigned frequency |
| Tower | Wien Tower | 119.400 (additional positions 121.200 / 123.800 / 124.470 reported) | Not published / verify | Multiple positions — take the assigned frequency |
| Approach / Director | Wien Radar / Wien Director | 134.675 (Director 119.800); additional Radar sectors 118.770 / 125.170 / 129.050 / 136.250 reported | Not published / verify | Sector-specific — take the assigned frequency |
| Information | Wien Information | 118.520 | Not published / verify | |
| Ramp / apron coordination | "Vienna Ice" | 131.625 | Not published / verify | Reported as an apron/de-icing coordination position — verify current use |
| Emergency | Wien Emergency | 121.500 | H24 (standard) | |
| Centre / FIR | Wien ACC (LOVV) | Per current AIRAC | H24 (assumed) | See [Europe airspace brief](../../../../airspace/europe.md) — 🟧 no dedicated LOVV FIR brief exists yet |

*Source: OurAirports frequency register (primary figures) cross-checked against SkyVector's broader frequency list, retrieved 2026-07-26. Neither is AIP-grade — treat every frequency as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | FMD (Fischamend) | 110.40 | Not published / verify | ~2.4 NM from the field |
| VOR | WGM (Wagram) | 112.20 | Not published / verify | ~13.2 NM |
| VOR | SNU (Sollenau) | 111.85 | Not published / verify | ~18.1 NM |
| VOR/NDB | TUN (Tulln) | 111.40 / 358 kHz | Not published / verify | ~26.5 NM |
| ILS | Not published / verify 🟧 | Not published / verify | — | Runway(s) served, category (I/II/III) and idents/frequencies not confirmed from a primary source — verify current AIRAC before any low-visibility approach |

*Source: SkyVector nearby-navaid register, retrieved 2026-07-26 (tier-4). ILS infrastructure is known to exist at a hub of this size but could not be attributed to a specific runway/category/ident from a public source this build — flagged as an Open item (§18).*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify 🟧 — configuration (11/29 vs 16/34, and direction) assigned by Wien Tower/Radar per wind/traffic; confirm active configuration via ATIS.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 11 | Not published / verify | — | — | |
| 29 | Not published / verify | — | — | |
| 16 | Not published / verify | — | — | |
| 34 | Not published / verify | — | — | |

- **STARs (names only):** Not published / verify 🟧 — pull the current-AIRAC STAR list at planning.
- **LVP:** Trigger conditions not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat basin); the operative concern is re-sequencing on a crossing (non-parallel) runway pair under a single active configuration.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify 🟧 — pull the current-AIRAC SID list at planning.
- **RNP / climb-gradient requirements:** Not published / verify. See [OM E — PBN and RNP Operations](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** Vienna is understood to be an IATA-coordinated hub; exact slot level and coordinator not confirmed from a primary source. 🟧
- **De-icing:** Availability and season not published / verify — plan for a Central European winter de-icing season (typ. Oct–Apr) pending confirmation. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — the field has five passenger concourses (B, C, D, F, G) per the terminal structure in §Sources, but stand/code-letter allocation is not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid Continental climate (Köppen **Dfb**) `[SKYbrary, retrieved 2026-07-26]`, consistent with the wider Central European/Danube-basin region; prevailing wind direction not confirmed from a primary source.
- **Seasonal hazards:** Winter fog, low stratus and snow/icing are the standing regional threat; summer carries the standard Central European risk of afternoon convective storms. No LOWW-specific frequency statistic obtained — treat as general regional climatology pending confirmation.
- **Local effects:** None confirmed beyond general Danube-basin climatology.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current AUP/UUP or RAD constraints in the Wien (LOVV) FIR. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **LSZH** (Zürich), **LKPR** (Prague), **LHBP** (Budapest) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,500–3,600 m) is non-limiting for any K Global type. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty identified for any K Global type at LOWW (600 ft, 3,500–3,600 m runways). See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md). The operative planning consideration at this field is the unconfirmed low-visibility (CAT II/III) capability and crossing-runway sequencing rather than aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP integration** — the Austro Control eAIP was not accessible in a usable form for this build; every figure above is tier-4 corroborated only and needs primary-source verification.
- **Magnetic variation** — not published / verify.
- **RFF category** — not published / verify.
- **PCN and exact declared distances (TORA/TODA/ASDA/LDA) per runway** — not published; only full runway length is sourced.
- **Low-visibility approach capability** — CAT II/III presence, runway assignment, and ILS idents/frequencies not confirmed from a primary source.
- **SIDs/STARs (current names)** — not obtained; pull the live current-AIRAC procedure list before use.
- **Preferential runway logic** — not published; confirm via ATIS/current chart.
- **Slot coordination level, coordinator, and any curfew/night restriction** — Vienna is understood to be IATA-coordinated as a major hub, but the specific level and hours are not confirmed.
- **Take-off minima, transition altitude/level** — not confirmed.
- **Stand/gate assignment, taxi routes and named hot spots** — not confirmed for our operation.
- **Fuel supplier(s) and into-plane hours** — assumed major-hub availability, not individually confirmed.
- **Customs/immigration desk hours** — Schengen/non-Schengen split confirmed; hours not confirmed.
- **Handling agent for our operation** — not confirmed.
- **De-icing provisioning and season** — not confirmed; treat Oct–Apr as a planning assumption.
- **VATSIM/division cross-check** — no VATSIM Austria vACC airport briefing or SOP was accessible for cross-check in this build; validate operational content (runway config logic, hot spots, frequency sequence) against one when available.
- **Third-runway (11R/29L) status** — confirmed cancelled/not-proceeding as of late 2025 per public reporting; monitor for any reversal.
- **Taxi-in/taxi-out assignment** — VAMSYS mirror gives 14 min and 18 min; which figure is in vs out is not certain (§1, §Dispatch).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here. See Sources for the tier hierarchy.*

- OurAirports — Vienna International Airport — https://ourairports.com/airports/LOWW/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway dimensions/surface, ATC frequencies.*
- SkyVector — LOWW / Wien Schwechat Airport — https://skyvector.com/airport/LOWW (retrieved 2026-07-26). *Runway headings/threshold coordinates, extended ATC frequency list, nearby navaids.*
- SKYbrary Aviation Safety — Vienna International/Schwechat (LOWW) — https://www.skybrary.aero/airports/loww (retrieved 2026-07-26). *Runway table, climate classification (Köppen Dfb).*
- Wikipedia — "Vienna International Airport" — https://en.wikipedia.org/wiki/Vienna_International_Airport (retrieved 2026-07-26). *Terminal/concourse structure and Schengen/non-Schengen split, ownership (Flughafen Wien AG), hub/base carrier status, 2024 passenger/movement statistics, third-runway approval and 2025 non-proceed decision, T3 Southern Enlargement construction status.*

*Austro Control (Austria's state AIP/eAIP, tier-1 source of record for this field) was not accessible in a usable form for this build. All figures above are tier-4 corroborated public sources and require primary-AIP verification before operational use.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
