# SSBN — Belém Novo · Airport Briefing

**SSBN** · Porto Alegre, Rio Grande do Sul, Brazil · South America

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — light pack, identity/data largely unverified

> ⚠️ **Identity note — read first.** SSBN "Belém Novo" is a small aerodrome in the **Belém Novo district of Porto Alegre, Rio Grande do Sul** — Brazil's **far south**, not the Northeast/North region this field was grouped with at intake. It should **not** be confused with **Belém (SBBE)**, the major city and airport in Pará state in the country's north. Coordinates (-30.19, -51.18) place it firmly on the shore of the Lagoa dos Patos/Guaíba, ~30 km S of downtown Porto Alegre — corroborated independently against OurAirports and confirmed consistent with the stub's seeded position. **This briefing documents the field as it actually is (a minor RS-state general-aviation aerodrome); the NE/North grouping in the build brief appears to be a task-level mis-association and is flagged for the requester's attention rather than silently corrected in scope.**

> **Read-me:** Planning aid for the sim, not a chart. This is a **light pack** — SSBN is not in the K Global VAMSYS network (base/category/alternates/taxi all unset) and public aeronautical data is sparse for a field of this size. Static data below is drawn from public tier-4 sources only; AISWEB/DECEA did not return data this pass. Unverified fields are marked 🟧 throughout — treat this pack as a starting point, not an audit-grade reference. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S30°11′20″ / W051°10′56″ (-30.188978, -51.182148) `[OurAirports]` 🟧 |
| Field elevation | **16 ft / 5 m AMSL** `[OurAirports]` — matches the stub's seeded figure |
| Mag variation | 🟧 Not published / verify |
| Time zone | **UTC−03:00 (BRT)** — no DST observed |
| Runway(s) | **9/27**, 1,103 × 23 m (3,618 × 75 ft), asphalt, lighted `[OurAirports]`; **RWY 27 threshold displaced 160 m (525 ft)** 🟧 |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | ≤1,103 m; RWY 27 LDA reduced by the 160 m displacement — exact figure not published, treat as ~943 m pending confirmation 🟧 |
| Approaches | Not confirmed — likely visual/non-precision only given the field's small-aerodrome profile; verify current AIRAC 🟧 |
| RFF category | 🟧 **Not in VAMSYS** — not published; a field this size likely carries a low/no formal RFF category, unconfirmed |
| Control type | Not published / verify — likely uncontrolled or AFIS-level given the facility type ("small_airport", no scheduled airline service) 🟧 |
| Elevation class | Sea/lake-level (16 ft) — not hot-and-high |
| Special-airport status | 🟧 **Not in VAMSYS** — no K Global category assigned |
| Customs / PoE | No — general-aviation field, no scheduled airline service `[OurAirports: "Airline service? no"]` |
| K Global category | 🟧 **Not in VAMSYS** |
| K Global base | 🟧 **Not in VAMSYS** — treat as **No** pending confirmation |
| Company preferred alternates | 🟧 **Not in VAMSYS** — none assigned |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **Not in VAMSYS** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field sits at the edge of the Lagoa dos Patos/Guaíba shoreline — low-relief; no terrain accident history or chart obstacle identified, but not independently verified either way. |
| Runway length vs fleet perf | 🟥 | **1,103 m / 3,618 ft is short** relative to any K Global widebody or standard narrowbody equipment — this field is not suitable for K Global mainline aircraft without a dedicated performance review. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). |
| Approach availability / minima | 🟧 | Not confirmed — small-aerodrome profile suggests visual/non-precision only. |
| Airspace / traffic / control | 🟧 | Likely Curitiba FIR (SBCW) territory given the Rio Grande do Sul location — **not independently confirmed**; the regional [South America — Airspace Briefing](../../../../airspace/south-america.md) scopes only the NE-coast-in-to-São Paulo corridor and does not cover this field's actual location. |
| Weather / seasonal hazard | 🟧 | Subtropical southern-Brazil climate (distinct from the tropical NE coast) — see §14; not independently detailed this pass. |
| Curfew / slots / hours | 🟧 | Not published / verify. |
| RFF category vs our types | 🟥 | Not in VAMSYS; runway length alone likely disqualifies K Global mainline equipment. |
| Fuel availability | 🟧 | Not published / verify — general-aviation field, avgas/Jet A availability unconfirmed. |
| Customs / handling / security | 🟩 | Not applicable — domestic general-aviation field, no international PoE. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
The field sits at 16 ft elevation on the shore of the Lagoa dos Patos/Guaíba lake system south of Porto Alegre — low-relief terrain. No terrain-related accident history or chart obstacle was identified in reachable public sources, but this has not been independently verified against a current chart. 🟧

### 3.2 Airborne conflict / traffic 🟧
Not confirmed. Porto Alegre's main international gateway is Salgado Filho International (SBPA), a short distance away — SSBN's traffic environment relative to that field's controlled airspace is not established in reachable sources. 🟧

### 3.3 Runway excursion 🟥
The single runway (9/27) is **1,103 m long with a displaced threshold on RWY 27 (160 m)**, reducing usable landing distance on that end. This is a **short-field, GA-scale runway** — a hard constraint for K Global mainline equipment (narrowbody or widebody), not merely a caution. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). 🟥

### 3.4 Weather threat 🟧
Porto Alegre/Rio Grande do Sul has a **humid subtropical climate**, materially different from the tropical NE-Brazil coast covered elsewhere in this pack — four distinct seasons, cold fronts and occasional frost in winter (Jun–Aug), and severe-weather potential (including tornado/severe-storm risk in the broader southern-Brazil/pampas region) is a known regional feature. None of this is airport-specific or independently sourced for SSBN this pass. 🟧

### 3.5 Operational considerations 🟥
This field is **not in the K Global VAMSYS network** — no category, base flag, taxi times, or alternates are assigned. Combined with the short runway (§3.3), **this field should not be treated as usable for scheduled K Global mainline operations** without a dedicated review and VAMSYS reconciliation. 🟥

---

## 4. Cautions & Warnings

- 🟥 **Runway length (1,103 m) is short for K Global mainline equipment** — do not plan mainline ops here without a dedicated performance/suitability review.
- 🟥 **RWY 27 has a 160 m displaced threshold** — usable landing distance on that end is reduced below the full runway length.
- 🟧 **Not in VAMSYS** — category, base, alternates, and taxi times are all unassigned; do not assume any default.
- 🟧 **Location/identity:** confirm this is the intended field before use — this is the Porto Alegre-area Belém Novo aerodrome, not Belém (SBBE) in Pará.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** 🟧 **Not in VAMSYS.** No K Global category assigned.
- **Crew-qualification gate:** Not established — pending a scoping decision on whether this field is ever intended for K Global use. 🟧
- **Operating restrictions / bans:** None documented; short-runway limitation (§3.3) functions as a de facto restriction on mainline equipment.
- **Overflight / entry / permits:** Domestic Brazilian GA field — no special permit expected for a GA-scale operation, but not applicable to scheduled K Global mainline service. 🟩
- **Operations notes:** Website reference found for "ARGS" (args.com.br), suggesting an association with a Rio Grande do Sul aeroclube/GA operator — not independently confirmed. 🟧

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not in VAMSYS / not published | 🟧 |
| Fuel | Not published / verify | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Not applicable — no international PoE, domestic GA field | 🟩 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 9 | 1,103 × 23 m | Asphalt, lighted / PCN not published | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | ~1,103 m (no displaced threshold reported this end) | Short runway — 🟥 not suitable for K Global mainline without review |
| 27 | 1,103 × 23 m | Asphalt, lighted / PCN not published | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | **Threshold displaced 160 m** — usable LDA reduced below 1,103 m, exact figure not published | Short runway — 🟥 not suitable for K Global mainline without review |

*Source: OurAirports (tier-4, updated 2024-05-20). No AIP/AISWEB confirmation obtained this pass. All figures 🟧.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| — | Not published / verify | — | — | No frequency data found in reachable tier-4 sources this pass 🟧 |

*Source: none obtained — OurAirports frequency page returned no entries this pass. AISWEB/DECEA did not render.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| — | Not published / verify | — | — | No navaid data found within the immediate field vicinity this pass 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard ICAO speed schedule assumed; not confirmed for this field.
- **Preferential runway logic:** Not published — single runway, wind-driven choice between 9 and 27, RWY 27 landing distance reduced by displacement.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 9 | Not confirmed — likely visual only 🟧 | — | — | |
| 27 | Not confirmed — likely visual only 🟧 | — | — | Displaced threshold — reduced LDA |

- **STARs (names only):** Not applicable/not confirmed — small-aerodrome profile. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Not established this pass.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed — small-aerodrome profile, likely none published. 🟧
- **RNP / climb-gradient requirements:** Not established.
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not applicable — GA-scale field, self-manoeuvre expected.
- **ATC slot / CTOT & clearance:** None identified.
- **De-icing:** Not published / verify — southern Brazil experiences winter cold fronts; de-icing infrastructure at a field this size is unconfirmed and likely absent. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not applicable — field is not suitable for K Global mainline equipment pending review (§3.3/§3.5). 🟥
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical (Cfa) — four distinct seasons, unlike the tropical NE-Brazil coast covered elsewhere in this pack. Not airport-specific this pass.
- **Seasonal hazards:** Winter (Jun–Aug) cold-front passages, occasional frost; the broader southern-Brazil/pampas region carries known severe-convective/tornado potential in spring/summer — general regional climatology, not an SSBN-specific statistic. 🟧
- **Local effects:** Lakeside (Lagoa dos Patos/Guaíba) location may carry local fog/mist potential — not independently confirmed. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here. Note: a METAR/TAF station may not exist for a field this size — verify availability at planning.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. A field this size may have limited or no NOTAM service — verify availability. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** 🟧 **Not established** — this field is not in the K Global VAMSYS network and is not sized for mainline equipment; its intended role (if any) needs a scoping decision before further build-out.
- **Nearest suitable alternates:** Not assigned — Porto Alegre's Salgado Filho International (SBPA) is the region's main gateway and would be the natural reference point for any future work, but is outside the scope of this pack. 🟧
- **Fuel-uplift notes:** Not published / verify. 🟧
- **Range/perf flags for our fleet:** 🟥 Runway length (1,103 m) is short for any K Global type — see [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Not applicable — no K Global fleet type is expected to operate into a 1,103 m runway without a dedicated short-field review; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Field identity/scope:** this field is geographically in Rio Grande do Sul (far south Brazil), not the NE/North region it was grouped with at intake — flagged for the requester's attention; not silently corrected in scope.
- **AISWEB/DECEA did not render** this pass — no primary-source data obtained for any field below.
- **Communications/navaid data:** none found in reachable tier-4 sources.
- **Declared distances, PCN, RFF, approach/SID/STAR names, transition altitude, mag variation, hours, fuel, FIR jurisdiction, control-type (uncontrolled/AFIS/controlled)** — none confirmed.
- **K Global VAMSYS category, base flag, alternates, taxi times** — entirely unset; this field is not currently part of the operational network.
- **Suitability decision:** given the short runway and absence from VAMSYS, confirm whether this field should be built out further at all, or retained only as a reference stub.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/SSBN/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check; frequencies page returned no entries.*
- AISWEB/DECEA pilot-info portal — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SSBN — attempted, JS-rendered/did not return data this pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. Light build — field not in VAMSYS, identity/region mismatch flagged. |
