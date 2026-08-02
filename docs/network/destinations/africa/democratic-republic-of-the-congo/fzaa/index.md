# FZAA — N'djili Intl · Airport Briefing

**FZAA / FIH** · Kinshasa, Democratic Republic of the Congo · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build, primary DRC AIP not independently reachable this pass

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from OurAirports/public cross-check sources — a primary DRC AIP (RVA / Autorité de l'Aviation Civile) page could not be reached this pass. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 4°23′09″S / 15°26′41″E (-4.38575, 15.44460) `[OurAirports, retrieved 2026-07-25]` |
| Field elevation | **1,027 ft / 313 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+1 (WAT, no DST) |
| Runway(s) | **06/24**, 4,000 × 60 m, concrete, lighted `[OurAirports]`. 🟧 Note: a widely-repeated public account (a 2007 magazine feature citing the airport as a designated US Space Shuttle emergency-landing site) states a **15,420 ft (~4,700 m)** runway — this figure conflicts with the OurAirports/AIP-tier figure of 4,000 m used above and is **not adopted**; flagged for AIP verification rather than resolved. |
| Preferential runway | Not published / verify — no declared preferential-runway rule found 🟧 |
| Longest LDA | 4,000 m (06/24) — not independently split TORA/TODA/ASDA/LDA this pass, see §7 🟧 |
| Approaches | Not confirmed in reachable sources this pass — pull current-AIRAC approach list at planning 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | 🟧 **Procedural / non-radar** is the default assumption per the continental picture (see [Africa Airspace brief](../../../../airspace/africa.md) §3) — not independently confirmed for FZAA specifically |
| Elevation class | Near sea-level-equivalent (1,027 ft) — **not** hot-and-high; equatorial heat/humidity density-altitude effect is the relevant performance driver, not elevation |
| Special-airport status | Not operator-categorised in reachable sources. FZAA carries a notable **safety-culture caution**: multiple sourced accidents over the field's history (runway excursion, a fatal 2011 landing accident in torrential rain/thunderstorms/low visibility, and a hijacking) plus a Wikipedia-sourced note that "corruption remains a problem" in arrivals-hall operations — treat as a standing operational-discipline caution rather than a specific procedural restriction. 🟧 |
| Customs / PoE | Yes — DRC's largest and principal international gateway (of five international airports in the country); a new international terminal (1M pax/yr capacity) opened June 2015; desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` — 🟧 raw VAMSYS code; the H/L/M/S/R category scheme is **not yet defined project-wide** (see the company Knowledge base item B-008) — do not infer a meaning beyond the raw letter |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` — 🟧 **note:** the pre-existing legacy stub (`FZAA — N'djili Intl.md`) recorded "Base: Yes" as of a 2026-07-19 VAMSYS seed; this build follows the current governing instruction (Base: No for all three fields in this pack) — **flagged as a discrepancy to reconcile against live VAMSYS**, see §18. |
| K Global suitable alternate | Yes — FZAA is carried as a Central-Africa/Congo-basin alternate in the network diversion picture (see [Africa Airspace brief](../../../../airspace/africa.md) §8), consistent with the legacy stub's "Suitable alternate: Yes" |
| Company preferred alternates | **FNBJ** (Luanda — Dr. António Agostinho Neto Intl, Angola), **FKKD** (Douala, Cameroon) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` — the richest VAMSYS data set of the three fields in this pack |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Kinshasa sits on the south bank of the Congo/Malebo Pool in the flat Congo-basin lowland; no close-in high terrain relevant to the field itself. |
| Runway length vs fleet perf | 🟩 | 4,000 m is ample for any K Global widebody type — the longest runway of the three fields in this build. |
| Approach availability / minima | 🟧 | Not confirmed this pass — no primary AIP table reached; pull current-AIRAC procedures at planning. |
| Airspace / traffic / control | 🟧 | Procedural/non-radar assumption per the regional picture; shares the cross-border "Brazzaville–Kinshasa Pool" TMA with FCBB, ~13.7 NM away (§3.2). |
| Weather / seasonal hazard | 🟥 | ITCZ convective storms are a **directly sourced** hazard here — a fatal 2011 landing accident occurred in "torrential rain, thunderstorms and low visibility" (§3.4). |
| Curfew / slots & operating restrictions | 🟧 | Not published / verify — no curfew or slot regime found in reachable sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | International PoE and a modern (2015) international terminal confirmed; a public source flags ongoing "corruption" concerns in arrivals-hall operations — treat as a standing operational caution, not a specific procedural blocker. |
| Regional security / conflict context | 🟥 | **The Democratic Republic of the Congo has an active conflict concentrated in the country's EAST** (North/South Kivu — Goma/Bukavu area, AFC/M23) — see the dedicated note in §3.6 and the [Africa Airspace brief](../../../../airspace/africa.md) §9. **Kinshasa, in the far west of the country on the Atlantic-basin side, is the unaffected operating gateway** for this field; the conflict does not bear directly on FZAA arrival/departure operations, but it is a live, dynamic situation to re-check before any DRC-domestic routing. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
FZAA sits at 1,027 ft AMSL in the flat Congo-basin lowland on the south bank of the Congo/Malebo Pool. There is no close-in high terrain bearing on arrival, departure or missed-approach paths at the field itself. Verify the MSA ring on the current chart as routine practice — CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟧
As at FCBB, the defining structural fact is the **~13.7 NM (25 km) proximity to FCBB (Brazzaville Maya-Maya)** across the river, under a shared **"Brazzaville–Kinshasa Pool" terminal control area** spanning two ANSPs — **RVA** (Régie des Voies Aériennes) on the DRC/Kinshasa side (Kinshasa FIR, FZZA) and **ASECNA** on the Congo/Brazzaville side (Brazzaville FIR, FCCC). FZAA is also, per Wikipedia, "the largest of the five international airports" in the DRC and the country's principal gateway — expect a comparatively busy, congested terminal environment for the region. Beyond the local TMA, the wider en-route picture is the continent's default **procedural/non-radar** environment with HF where VHF ends — see the [Africa Airspace brief](../../../../airspace/africa.md) §3/§5. **DRC's air navigation service is RVA, not ASECNA** — a genuine contrast with its Congo-Brazzaville neighbour, worth briefing explicitly given the shared TMA.

### 3.3 Runway excursion 🟧
The field's only runway (06/24, 4,000 × 60 m concrete) has at least one **sourced runway-excursion accident**: a 2 January 2010 Boeing 727-231F freighter departed the side of the runway (substantial damage, no fatalities reported). The airline involved blamed runway condition for a separate 2010 burst-tyre/runway-excursion event, though investigators found no fault with the runway itself. No displaced-threshold or PCN data was found in reachable sources. Treat runway-surface condition as an open item pending primary-AIP confirmation rather than a confirmed hazard.

### 3.4 Weather threat 🟥
This is a **directly evidenced** hazard at this field, not merely regional climatology: on 4 April 2011, a Canadair CRJ-100ER operating a UN-mission flight from Kisangani **missed the runway on landing during torrential rain, thunderstorms and low visibility**, broke up and caught fire — only one survivor from 33 people on board. This is the single most serious sourced accident at FZAA and a direct, cited demonstration of the field's **ITCZ-driven convective-storm risk** (see [Africa Airspace brief](../../../../airspace/africa.md) §11). Brief a firm stabilised-approach/go-around discipline for any arrival in rain or reduced visibility at this field.

### 3.5 Operational considerations 🟧
Plan around: (1) the **shared cross-border TMA with FCBB** (§3.2) and the cross-ANSP (RVA/ASECNA) coordination it implies; (2) the **field's status as the DRC's busiest, principal international gateway** — expect more traffic and ground-service complexity than a typical regional field; (3) a **sourced runway-excursion history** and a **sourced, fatal weather-related landing accident**, both arguing for conservative operational discipline; and (4) a public-source note flagging ongoing operational/administrative "corruption" concerns in arrivals-hall handling — a soft caution on service reliability rather than a safety item per se.

### 3.6 Regional security / conflict context (DRC-wide) 🟥
The Democratic Republic of the Congo has an **active, ongoing armed conflict concentrated in the country's far east** — North and South Kivu provinces, centred on the **Goma (FZNA)/Bukavu** area, involving the AFC/M23 armed group, with credible anti-aircraft-weapon risk at low level and reported drone-attack activity reaching as far as Kisangani (FZIC). This is **geographically distant from Kinshasa** — Kinshasa sits in the far west of the country, on the Atlantic-basin side, roughly 1,600 km from the Kivu conflict zone, and is **not itself an area of active conflict**. **FZAA (Kinshasa) is the unaffected, normally-operating gateway** for the DRC and this brief's operating assumption. This note is included as a factual regional-security orientation rather than a restriction on FZAA operations; it becomes directly operationally relevant only for any DRC-domestic routing toward the eastern provinces, which should be planned against the live conflict-zone picture (ICAO CZIR / EASA CZIB / Safe Airspace / OPSGROUP) rather than this durable file. See the [Africa Airspace brief](../../../../airspace/africa.md) §9 for the durable conflict-zone geometry, and re-check current NOTAMs/advisories at planning (§15). 🟧 *Live conflict-zone status must be re-verified at every planning cycle; this is durable regional context, not a current clearance.*

---

## 4. Cautions & Warnings

- **FZAA and FCBB (Brazzaville) are ~13.7 NM apart** across the Congo/Malebo Pool, under a shared cross-border "Brazzaville–Kinshasa Pool" TMA spanning two ANSPs (RVA/ASECNA) — brief for coordination workload.
- **Sourced fatal weather-related landing accident (2011)** — torrential rain/thunderstorms/low visibility; brief firm stabilised-approach/go-around discipline in marginal weather.
- **Sourced runway-excursion history (2010)** — treat runway-surface/condition as an open item pending AIP confirmation.
- **DRC's active conflict is in the FAR EAST of the country (Kivu/Goma area)** — Kinshasa is unaffected and is this field's operating assumption; do not conflate the two when briefing this field, but re-check the live picture before any DRC-domestic routing (§3.6).
- **DRC's ANS provider is RVA, not ASECNA** (unlike neighbouring Congo-Brazzaville) — a genuine cross-border contrast relevant to the shared TMA with FCBB.
- A public source flags ongoing operational/administrative concerns ("corruption... remains a problem") in the international arrivals terminal — a soft service-reliability caution, not a safety item.
- Most communications/navaid/approach detail and RFF category are **not confirmed from a primary AIP source this pass** (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised in reachable sources; **K Global VAMSYS carries a raw category code "L"** whose scheme meaning is not yet defined project-wide (§1) — do not treat this as an operational restriction until the scheme is defined. 🟧
- **Crew-qualification gate:** No published special-crew-qualification requirement found; the standing briefing items are the field's sourced weather/runway-excursion accident history (§3.3/§3.4) and the shared-TMA coordination with FCBB (§3.2). 🟧
- **Operating restrictions / bans:** None found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** DRC overflight/landing permit requirements are a standing item for African operations generally (see [Africa Airspace brief](../../../../airspace/africa.md) §9) — confirm current permit/lead-time requirement before every operation. Note the separate, distinct **eastern-DRC conflict-zone consideration** (§3.6) if any DRC-domestic routing is contemplated. 🟥
- **Operations notes:** ANS and airport operation provided by **RVA (Régie des Voies Aériennes)**, the DRC's state airports/ANS parastatal 🟧 (commonly reported; not independently sourced to a primary document this pass) — Kinshasa FIR (FZZA) per the [Africa Airspace brief](../../../../airspace/africa.md).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed; new (2015) international terminal, 1M pax/yr capacity; desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | 4,000 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Longest runway of the three fields in this build |
| 24 | 4,000 × 60 m | Concrete, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal |

*Source: OurAirports (retrieved 2026-07-25) — tier-4. A separate, widely-circulated public account (a 2007 magazine feature) cites a longer figure (~15,420 ft / 4,700 m) in the context of the field's designation as a US Space Shuttle emergency-landing strip; this figure is **not adopted** in the table above pending primary-AIP resolution — see §1/§18. No primary AIP declared-distance table was reachable this pass. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Air/Ground | Not published | 128.1 MHz | Not published 🟧 | `[OurAirports]` |
| Approach | Not published | 119.7 MHz | Not published 🟧 | `[OurAirports]` |
| Ground | Not published | 121.9 MHz | Not published 🟧 | `[OurAirports]` |
| Tower | Not published | 118.1 MHz | Not published 🟧 | `[OurAirports]` |
| Centre / FIR | Kinshasa (FZZA), RVA | Per current AIRAC | H24 (assumed) | See [Africa Airspace brief](../../../../airspace/africa.md) |

*Source: OurAirports frequency table (retrieved 2026-07-25) — tier-4, not independently cross-checked against a primary AIP. Treat all values as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | KSA (Ndjili) | 115.00 MHz | Not published 🟧 | On field, ~1.9 NM SW `[OurAirports]` |
| NDB | OK (Ndjili) | 340 kHz | Not published 🟧 | ~5.0 NM ENE |
| NDB | NDO (Ndolo) | 318 kHz | Not published 🟧 | ~8.7 NM WNW — Ndolo is Kinshasa's secondary/general-aviation airfield, not FZAA itself |

*No ILS/approach-aid data found in reachable sources — pull current-AIRAC procedure/navaid detail at planning. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) assumed — confirm current chart.
- **Preferential runway logic:** Not published / verify — no declared preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 06 | Not confirmed in reachable sources 🟧 | — | — | Pull current-AIRAC approach list at planning |
| 24 | Not confirmed in reachable sources 🟧 | — | — | Pull current-AIRAC approach list at planning |

- **STARs (names only):** Not confirmed — pull current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat basin); the **sourced 2011 fatal weather-related landing accident** (§3.4) is the field's defining missed-approach/weather-discipline lesson — brief a firm go-around decision point in convective weather.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable sources this pass — pull current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** DRC is outside the ASECNA network (unlike FCBB); no PBN/RNP-specific data confirmed for FZAA — see the general [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) and the [Africa Airspace brief](../../../../airspace/africa.md) §4 for the continental default. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — verify locally. 🟧
- **ATC slot / CTOT & clearance:** No slot-coordination regime found in reachable sources — treat as unregulated pending confirmation. 🟧
- **De-icing:** **NIL** — equatorial field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** A new international terminal (capacity ~1 million passengers/year) opened in June 2015; exact stand count/code-letter capacity for our fleet not confirmed. 🟧
- **Push-back:** Not confirmed — verify locally. 🟧
- **Standard taxi routes:** Confirm with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Equatorial climate on the Congo/Malebo Pool; two rainy seasons (roughly October–May) separated by a cooler, drier season (roughly June–September).
- **Seasonal hazards:** **ITCZ convective band** (heavy rain, embedded/towering CB, thunderstorms) is the dominant, **directly evidenced** hazard at this field (§3.4) — see also [Africa Airspace brief](../../../../airspace/africa.md) §11.
- **Local effects:** Riverine setting on the Congo/Malebo Pool; no significant terrain-driven local wind effect.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, overflight-permit status, the current Brazzaville–Kinshasa Pool TMA coordination notices, **and the current eastern-DRC (Kivu/Goma) conflict-zone/overflight-risk bulletins** if any DRC-domestic routing is contemplated. Source: AIS / OFP NOTAM block; ICAO CZIR / EASA CZIB / Safe Airspace / OPSGROUP for conflict-zone status.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** DRC's principal international gateway; Central-Africa/Congo-basin network alternate (not a K Global base — §1, but see the base-flag discrepancy noted there).
- **Nearest suitable alternates:** Company preferred alternates **FNBJ** (Luanda — Dr. António Agostinho Neto Intl, Angola) and **FKKD** (Douala, Cameroon) `[VAMSYS mirror 2026-07-26]` — both cross-country; confirm suitability, runway/RFF adequacy and current minima per leg. FCBB (Brazzaville, ~13.7 NM across the river) is the obvious geographic alternate but sits in a different state/ANSP (Congo/ASECNA) under the shared TMA (§3.2) — confirm cross-border diversion procedure if used tactically.
- **Fuel-uplift notes:** Not confirmed in reachable public sources. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 4,000 m is ample for any K Global widebody type — non-limiting. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No field-specific widebody-stand or performance issue is confirmed; the 4,000 m runway is non-limiting for any K Global type. The operative planning consideration at this field is **weather discipline (§3.4)** and **cross-border TMA coordination (§3.2)**, not aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary DRC AIP (RVA / Autorité de l'Aviation Civile AD 2 FZAA) could not be reached this pass** — runway PCN/declared-distance splits, RFF category, ATS hours, navaid/approach detail, SIDs/STARs and mag variation are all unconfirmed pending this source.
- **Runway length discrepancy** — OurAirports/tier-4 gives 4,000 m; a separate widely-circulated public account (2007 magazine feature, Space Shuttle emergency-strip designation) cites ~15,420 ft (~4,700 m). Not resolved this pass — flagged rather than adopted either way.
- **VAMSYS category code "L"** — scheme semantics (H/L/M/S/R) not yet defined project-wide; see the company Knowledge base B-008.
- **Base-flag discrepancy** — the pre-existing legacy stub recorded "Base: Yes" (VAMSYS seed dated 2026-07-19); this build's governing instruction sets Base: No for all three fields in this pack. **Reconcile against live VAMSYS** before treating either value as authoritative.
- **"Brazzaville–Kinshasa Pool" TMA** — exact lateral/vertical limits and the inter-ANSP (RVA/ASECNA) coordination procedure not confirmed this pass.
- **Communications frequencies** — sourced to a tier-4 aggregator (OurAirports) only.
- **Eastern-DRC conflict-zone status** — durable geometry only (§3.6); must be re-checked live before any DRC-domestic routing (not relevant to normal FZAA international operations).
- **Curfew/slot regime, fuel supplier/hours, customs desk hours, handling agent(s)** — none confirmed in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/FZAA/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-25). *ARP/elevation/runway/frequency/navaid cross-check — tier-4.*
- Wikipedia — "N'djili Airport" — https://en.wikipedia.org/wiki/N%27djili_Airport (retrieved 2026-07-25). *History, 2015 terminal, accident record (2010 runway excursion, 2011 fatal landing accident, hijacking).*
- [Africa Airspace brief](../../../../airspace/africa.md) — RVA/ASECNA contrast, RVSM/PBN, procedural/non-radar picture, eastern-DRC conflict-zone geometry, seasonal hazards.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
