# SBSV — Dep L E Magalhaes Intl · Airport Briefing

**SBSV / SSA** · Salvador, Bahia, Brazil · South America

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 aeronautical sources (AISWEB/DECEA pilot-info portal is JS-rendered and did not return data this pass) plus corroborating public references; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S12°54′31″ / W038°19′21″ (-12.908611, -38.322498) `[OurAirports/Wikipedia]` 🟧 |
| Field elevation | **64 ft / 20 m AMSL** `[OurAirports, Wikipedia]` — matches task brief (~64 ft) |
| Mag variation | 🟧 **Not published / verify** — indicative only, not a sourced figure |
| Time zone | **UTC−03:00 (BRT)** — no DST observed |
| Runway(s) | **10/28**, 3,005 m × 45 m (9,859 × 148 ft), asphalt, lighted · **17/35**, 1,520 m × 45 m (4,987 × 148 ft), asphalt, lighted `[OurAirports/Wikipedia]` |
| Preferential runway | Not published — 10/28 is the primary/longer runway; 17/35 is the shorter crosswind runway. Verify current AIP/ATIS practice for the preference rule. 🟧 |
| Longest LDA | 3,005 m (10/28) — no displaced threshold reported for either runway 🟧 |
| Approaches | Not confirmed this pass — verify current AIRAC 🟧 |
| RFF category | Not published / verify 🟧 — large-hub passenger volume (~7.7M pax/yr, 2018 figure) implies a mid-to-high ICAO category, not independently confirmed |
| Control type | Continental Recife FIR field (per task guidance) — confirm local radar/procedural mix and FIR boundary on current AIP 🟧 |
| Elevation class | Sea-level coastal field — **not** hot-and-high |
| Special-airport status | None identified — standard international RFF/customs field; shares facilities with Salvador Air Force Base — see §5 |
| Customs / PoE | **Yes** — international gateway (Air Europa Madrid, TAP Lisbon, Aerolíneas Argentinas, Sky Airline reported) 🟧 hours not confirmed |
| K Global category | 🟧 **Not set in VAMSYS** — confirm before scheduling |
| K Global base | **No** |
| Company preferred alternates | **SBMO** (Maceió), [**SBRF**](../sbrf/index.md) (Recife), **SBSG** (Natal) |
| Taxi-in / taxi-out (VAMSYS) | 🟧 Not set in VAMSYS — pending reconciliation |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Field sits among coastal sand dunes and native vegetation on flat ground; no terrain-related accident history or chart obstacle identified this pass. |
| Runway length vs fleet perf | 🟩 | 3,005 m (10/28) is ample for narrowbody and most widebody operations at sea level; 17/35 (1,520 m) is a shorter secondary/crosswind runway — treat as non-primary for our widebody equipment. |
| Approach availability / minima | 🟧 | Not confirmed this pass — verify current AIRAC. |
| Airspace / traffic / control | 🟧 | Task guidance places this field under Recife FIR (SBRE); Salvador's more southerly position (13°S) means the exact FIR boundary (Recife vs. Brasília) is not independently confirmed this pass — see [South America — Airspace Briefing](../../../../airspace/south-america.md) and §18. |
| Weather / seasonal hazard | 🟧 | Tropical coastal climate with rain distributed across more of the year than the drier NE coast further north; see §14. |
| Curfew / slots / hours | 🟧 | Not published / verify — no curfew identified in reachable sources. |
| RFF category vs our types | 🟧 | Category not published — confirm before scheduling widebody equipment. |
| Fuel availability | 🟧 | Assumed available at a major international gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed by scheduled European/South American international service; desk hours and handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
The airport sits in an area of sand dunes and native (restinga) vegetation on Brazil's Atlantic coast, roughly 28 km north of downtown Salvador — flat, low-relief coastal ground. No terrain-related accident history or chart obstacle was identified in reachable sources for this field. Treat as a low-CFIT-risk field relative to its NE-Brazil neighbours (contrast [SBFZ](../sbfz/index.md) and [SBRF](../sbrf/index.md), both of which carry historical terrain-related accident context); verify MSA/MORA on the current chart as routine practice regardless. 🟩

### 3.2 Airborne conflict / traffic 🟧
Task guidance places Salvador under **Recife FIR (SBRE)** for NE-Brazil coastal operations — see the [South America — Airspace Briefing](../../../../airspace/south-america.md). Salvador's position (~13°S) is towards the southern edge of the coastal NE belt described in that briefing (which explicitly covers Fortaleza/Natal/Recife as the Recife-FIR coast-in belt); the **exact FIR boundary at Salvador's latitude (Recife vs. Brasília FIR) has not been independently confirmed** this pass — flagged for verification. No unusual traffic-density concern identified for the airport itself. 🟧

### 3.3 Runway excursion 🟩
Two runways: 10/28 (3,005 m, primary) and 17/35 (1,520 m, secondary/crosswind). No displaced threshold identified in reachable sources for either. The shorter 17/35 runway should be treated as non-primary for widebody equipment pending confirmation of its declared distances. 🟧

### 3.4 Weather threat 🟧
Salvador (Bahia) has a tropical climate with rainfall distributed more evenly across the year than the drier NE coast further north (Fortaleza/Recife), with a wetter season roughly **April–July**. Trade winds E/SE prevail off the Atlantic. No airport-specific fog/low-vis statistic found. See §14.

### 3.5 Operational considerations 🟧
No confirmed curfew, slot regime, or special crew-qualification gate identified in reachable sources. The field shares facilities with **Salvador Air Force Base** — no operational restriction identified from this, but worth noting for local context. Confirm the K Global VAMSYS aerodrome category before scheduling, since it is unset. See §18.

---

## 4. Cautions & Warnings

- **17/35 is a shorter secondary/crosswind runway (1,520 m)** — treat as non-primary for widebody equipment pending declared-distance confirmation. 🟧
- **FIR boundary at Salvador's latitude (Recife vs. Brasília) not independently confirmed** — see §3.2/§18.
- Shared facility with **Salvador Air Force Base** — expect occasional military traffic/activity; no specific restriction identified.
- K Global VAMSYS **aerodrome category is unset** — confirm before crewing/scheduling. 🟧
- Wetter-season (Apr–Jul) convective/heavy-shower activity — check TAF/SIGMET at planning.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not identified as a restricted-crew "special airport." **K Global VAMSYS category is not set** — treat as unconfirmed until reconciled. 🟧
- **Crew-qualification gate:** None identified. 🟧
- **Operating restrictions / bans:** None identified in reachable sources — verify current AIRAC for any RNP AR, circling, or SID-specific restriction, particularly for the shorter 17/35 runway.
- **Overflight / entry / permits:** Standard Brazilian domestic/international arrival — no special state permit expected. 🟩
- **Operations notes:** Airport operated by **Vinci Airports** (concession since 2017, trading as "Salvador Bahia Airport"); ANSP is **DECEA** — FIR jurisdiction not independently confirmed this pass (§3.2).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — major international gateway, H24 plausible | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None identified | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available at a major international gateway; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed by scheduled European/South American service (Air Europa, TAP, Aerolíneas Argentinas, Sky Airline reported); hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 3,005 m × 45 m | Asphalt, lighted / PCN not published | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | 3,005 m (assumed, no displaced threshold reported) | Primary runway |
| 28 | 3,005 m × 45 m | Asphalt, lighted / PCN not published | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | 3,005 m (assumed) | Reciprocal of 10 |
| 17 | 1,520 m × 45 m | Asphalt, lighted / PCN not published | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | 1,520 m (assumed) | Secondary/crosswind runway — treat as non-primary for widebody equipment pending confirmation |
| 35 | 1,520 m × 45 m | Asphalt, lighted / PCN not published | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | 1,520 m (assumed) | Reciprocal of 17 |

*Source: OurAirports (tier-4) and Wikipedia infobox both report 10/28 at 3,003–3,005 m and 17/35 at 1,518–1,520 m (minor rounding difference, not material). Neither cross-checked against a primary AIP table this pass — treat as 🟧 pending AIP/AIRAC confirmation.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Salvador ATIS | 127.750 | Not published | 🟧 tier-4 sourced |
| Clearance Delivery | Salvador Traffic | 121.100 | Not published | 🟧 tier-4 sourced ("CLD" tag) |
| Ground | Salvador Ground | 121.900 | Not published | 🟧 tier-4 sourced |
| Tower | Salvador Tower | 118.300 | Not published | 🟧 tier-4 sourced |
| Approach | Salvador Approach ("Salvador CON") | 120.800 | Not published | 🟧 tier-4 sourced |
| Centre / FIR | Recife ACC (SBRE), per task guidance — boundary not independently confirmed | Per current AIRAC | H24 | See [South America — Airspace Briefing](../../../../airspace/south-america.md) and §18 |

*Source: OurAirports frequency listing (tier-4, undated) — not cross-checked against a primary AIP table this pass. Treat all values as 🟧 pending AIP/AIRAC confirmation.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | SVD (Salvador) | 116.50 | Not published | ~0.1 NM NNE, on/near field `[OurAirports]` 🟧 |
| NDB | SVD (Salvador) | 275 kHz | Not published | ~1.1 NM WSW `[OurAirports]` 🟧 |
| NDB | IV (Ipitanga) | 240 kHz | Not published | ~1.4 NM WSW `[OurAirports]` 🟧 |

*No ILS ident/frequency found in reachable tier-4 sources — approach infrastructure not confirmed this pass; verify current AIRAC. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** Not published this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override.
- **Preferential runway logic:** Not published — 10/28 is the primary/longer runway; wind-driven choice among all four ends, verify current AIP/ATIS practice. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 10 | Not confirmed — verify current AIRAC 🟧 | — | — | Primary runway |
| 28 | Not confirmed — verify current AIRAC 🟧 | — | — | |
| 17 | Not confirmed — verify current AIRAC 🟧 | — | — | Secondary/crosswind runway |
| 35 | Not confirmed — verify current AIRAC 🟧 | — | — | |

- **STARs (names only):** Not confirmed this pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** No terrain-driven concern identified (flat coastal field); standard missed-approach procedure per current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed this pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. Brazil operates an extensive RNAV route/procedure network nationally (see [South America — Airspace Briefing](../../../../airspace/south-america.md) §4) — expect RNAV SIDs; verify gradient/equipage on current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — standard tower/ground coordination assumed.
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified — verify current NOTAM/AIP. 🟧
- **De-icing:** **NIL** — tropical coastal field, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — the main terminal (69,400 m², 11 jetways, ~6M pax/yr design capacity) opened 1998–2000; current widebody-specific stand data not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed — confirm with Ground on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical coastal climate with rainfall spread more evenly across the year than the drier NE coast to the north; wetter season roughly **April–July**. Prevailing trade winds E/SE off the Atlantic.
- **Seasonal hazards:** Coastal convective showers, heavier in the Apr–Jul window; no airport-specific fog/low-vis statistic found. 🟧
- **Local effects:** Coastal dune/vegetation environment — no specific local wind effect identified beyond standard sea-breeze expectation.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, TFR, military-field co-use notes. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / NE-Brazil coast-in field; southern anchor of the coastal alternate chain described in this pack.
- **Nearest suitable alternates:** **SBMO** (Maceió), [**SBRF**](../sbrf/index.md) (Recife), **SBSG** (Natal) — company-listed alternates; confirm current suitability/minima per leg. K Global VAMSYS taxi/alternate reconciliation is still pending for this field. 🟧
- **Fuel-uplift notes:** Jet A-1 assumed available at a major international gateway; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Sea-level, non-limiting runway length on 10/28 for narrowbody and most widebody types at typical weights; 17/35 (1,520 m) is non-primary for widebody equipment pending declared-distance confirmation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration identified on the primary 10/28 runway beyond the general sea-level profile — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference. The shorter 17/35 runway may be limiting for larger widebody types — confirm declared distances before planning its use.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **AISWEB/DECEA pilot-info page did not render** this pass (JS-gated) — all figures below are tier-4 (OurAirports, Wikipedia) and need a primary AIP cross-check.
- **FIR jurisdiction at Salvador's latitude** — the regional airspace briefing explicitly scopes Recife FIR to the Fortaleza/Natal/Recife coast-in belt; Salvador (13°S) is further south and its FIR assignment (Recife vs. Brasília) has **not been independently confirmed** this pass. Task guidance specifies Recife FIR; carried here with a verification flag.
- **Declared distances (TORA/TODA/ASDA)** for all four runway ends, **PCN**, **RFF category**, **approach/SID/STAR names and minima**, **transition altitude**, **mag variation**, **curfew/slot regime**, **fuel supplier/hours**, **customs desk hours**, **stand/gate data**, **hot spots** — none confirmed from a primary source this pass.
- **K Global VAMSYS category, base flag, taxi times** — unset/pending reconciliation.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/SBSV/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid cross-check.*
- Wikipedia — "Salvador Bahia Airport" (Deputado Luís Eduardo Magalhães International Airport) — https://en.wikipedia.org/wiki/Deputado_Lu%C3%ADs_Eduardo_Magalh%C3%A3es_International_Airport (retrieved 2026-07-26). *History, runway table, terminal capacity, operator (Vinci), airline/destination list.*
- AISWEB/DECEA pilot-info portal — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SBSV — attempted, JS-rendered/did not return data this pass; primary AIP-Brasil source of record, re-attempt via browser at next update.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
