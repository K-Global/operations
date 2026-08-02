# LKPR — Praha/Ruzyně (Václav Havel Airport Prague) · Airport Briefing

**LKPR / PRG** · Prague-Ruzyně, Czech Republic · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP not reachable this build

> **Read-me:** Planning aid for the sim, not a chart. The Czech state AIP (ANS CR / AIM Czech Republic eAIP, aim.rlp.cz) was not reachable in a usable form during this build (see Sources & References) — static data below is corroborated from tier-4 public sources (OurAirports, SkyVector, Wikipedia) and carries 🟧 pending a direct current-AIRAC cross-check. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N50°06.05′ / E014°15.59′ (50.100874, 14.259911) `[OurAirports, retrieved 2026-07-26]` 🟧 not primary-AIP-sourced |
| Field elevation | **1,247 ft / 380 m AMSL** `[OurAirports]`; a secondary tier-4 source (SkyVector) shows 1,234 ft — minor cross-source discrepancy, not resolved against a primary table 🟧 |
| Mag variation | Not published / verify — a Central European secular-drift estimate for 2026 is roughly 4–5° E, **not a sourced AIP figure** 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **06/24** 3,715 × 45 m (main, hard surface) · **12/30** 3,250 × 45 m (secondary) · **04/22 permanently closed** — taxiway/parking use only, never active for takeoff or landing |
| Preferential runway | Prevailing westerly wind: **RWY 24 is the most-used direction**, **RWY 30 used often**, **RWY 06 used rarely**, **RWY 12 used only exceptionally** `[Wikipedia, AIP-cited]` 🟧 |
| Longest LDA | Not published / verify — treating the full 3,715 m runway-06/24 length as a proxy; exact declared-distance table not obtained from a primary source |
| Approaches | ILS on **06/24** (a CAT II/III-capable ILS is commonly reported on this runway pair in public references — **not independently confirmed from a primary AIP table this build**) 🟧; ILS **CAT I only** on **12/30**, whose approach path overflies populated areas (Prague 6, Kladno) `[Wikipedia, AIP-cited]` |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Praha/Ruzyně Approach and Praha Approach positions confirmed via public frequency data; ANS CR (Řízení letových provozů ČR) is the ANSP. FIR: **Praha (LKAA)** — no dedicated FIR brief exists yet in this network; cross-ref [Europe — General Airspace](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level-equivalent for performance purposes (1,247 ft) — **not** hot-and-high; the field sits on a plateau in the undulating Central Bohemian upland |
| Special-airport status | None identified in reachable sources — not operator-categorised as a restricted "special airport"; standing crew note is the CAT I-only equipage on RWY 12/30 (see §5) |
| Customs / PoE | **Yes** — Terminal 1 (non-Schengen / international hall) `[Wikipedia; OurAirports #customs tag]`; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global role | **Destination** (spoke field, not a network base) — inferred from network context |
| Company preferred alternates | LZIB, EPWA, LHBP `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` 🟧 in/out assignment follows the standard VAMSYS field order; not independently double-checked |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field itself is flat (plateau, 1,247 ft); surrounding Central Bohemian upland is undulating regionally. No quantified peak/MSA data obtained this build — verify current chart (§3.1). |
| Runway length vs fleet perf | 🟩 | 3,715 m main runway (06/24) is ample for any K Global type; 3,250 m secondary (12/30) is also non-limiting. |
| Approach availability / minima | 🟧 | CAT II/III capability commonly reported on 06/24 but not independently confirmed; 12/30 is CAT I only and noise-routed over populated areas. |
| Airspace / traffic / control | 🟩 | Radar-controlled TMA under ANS CR; moderate traffic density relative to a major congested hub. |
| Weather / seasonal hazard | 🟥 | Central European winter fog/low stratus, snow and icing (roughly Nov–Mar/Apr), plus summer convective storms — the field's defining seasonal driver. |
| Curfew / slots / hours | 🟧 | Not confirmed in reachable public sources — slot regime and any night restriction are unverified pending direct confirmation (see Dispatch §4). |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major capital-city international airport; supplier/hours not independently confirmed. |
| Customs / handling / security | 🟧 | Terminal 1 confirmed as the international/customs hall; desk hours and contracted handling agent not confirmed. An FBO presence (ABS Jets) is noted in public data. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
LKPR itself sits on a plateau at 1,247 ft AMSL with no close-in high ground at the aerodrome. The surrounding Central Bohemian upland is genuinely undulating rather than flat, and the region's terrain-and-weather interaction has a historical precedent: on 30 October 1975 an Inex-Adria Aviopromet DC-9 struck high ground on approach to Ruzyně in fog, with significant loss of life — a reminder that low-visibility approach discipline matters more here than the field's own modest elevation would suggest. No quantified peak bearings/distances or MSA-sector detail were obtained from a reachable primary source this build; treat this as a live open item and fly the current chart's MSA ring rather than any figure in this brief.

### 3.2 Airborne conflict / traffic 🟩
The Prague TMA is radar-controlled (Praha/Ruzyně Approach, Praha Approach — ANS CR). Traffic density is moderate for a European capital-city airport, well below that of a major congested multi-runway hub. FIR is **Praha (LKAA)**; no dedicated per-FIR brief exists in this network yet — cross-ref [Europe — General Airspace](../../../../airspace/europe.md) 🟧 pending a Praha-specific FIR brief.

### 3.3 Runway excursion 🟧
**RWY 04/22 is permanently closed** for takeoff/landing (taxiway/parking use only) — never assign or expect it as an active runway. The secondary pair **12/30** is used only rarely-to-exceptionally (wind-driven), is CAT I only, and its declared-distance/displaced-threshold detail was not obtained from a primary source — treat any LDA figure as unconfirmed. No winter-contamination/braking-action data specific to LKPR was found; apply standard seasonal caution per §14.

### 3.4 Weather threat 🟥
Central European continental climate: winter brings recurring **fog and low stratus** plus a recognised **snow/icing de-icing season** (roughly November–March/April); summer carries the standard regional risk of afternoon **convective thunderstorms**. No LKPR-specific frequency statistics were found for either hazard — treat as general Central European climatology pending a live METAR/TAF/TAF-trend history review. The CAT I-only equipage of RWY 12/30 means that if wind forces operations onto that pair during a fog event, options narrow relative to the (reportedly) better-equipped 06/24 pair — verify current LVP/CAT status before planning.

### 3.5 Operational considerations 🟧
Three durable planning points: (1) **RWY 12/30's approach path overflies populated areas** (Prague 6, Kladno) and is CAT I only — expect it to be a secondary/exceptional-use runway rather than a routine option; (2) the field's **slot regime and any curfew/night restriction are unconfirmed** in reachable public sources — do not assume an unrestricted schedule until verified (see Dispatch §4); (3) **RFF category, PCN, and take-off/landing minima are all unconfirmed** — these are administrative/currency gaps rather than known safety-critical exposures, but should be closed before treating this brief as audit-grade.

---

## 4. Cautions & Warnings

- **RWY 04/22 is permanently closed** — taxiway/parking use only; never expect it as an active runway.
- **RWY 12/30 is CAT I only** and its approach overflies populated areas (Prague 6, Kladno) — expect this pair only when wind dictates, not as a routine assignment.
- **Winter fog/low-stratus events** are the field's principal weather threat — verify current CAT capability/LVP status on the assigned runway before planning a low-vis approach.
- Regional terrain is **undulating, not flat** — a historical fog-related CFIT accident (1975) underscores the value of strict MSA/vertical-guidance discipline in poor visibility; quantified peak/MSA detail is an open item (§18).
- **ATC frequencies, RFF category, PCN and declared distances are tier-4/unconfirmed** in this build — treat exact values as provisional pending a live AIRAC cross-check.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted "special airport" in reachable sources. 🟧
- **Crew-qualification gate:** Standard CAT II/III currency applies if operating a low-visibility approach on RWY 06/24 (capability not independently confirmed — verify before relying on it); RWY 12/30 offers CAT I only, so no low-vis option exists on that pair. 🟧
- **Operating restrictions / bans:** None identified in reachable sources; no RNP AR ban or circling restriction found — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Czech Republic is a Schengen and EU member state; Terminal 1 handles non-Schengen/international traffic, Terminal 2 handles Schengen traffic — standard entry, no special state permit required. 🟩
- **Operations notes:** ANSP — **ANS CR (Řízení letových provozů ČR, s.p.)**. Airport operator — **Prague Airport (Letiště Praha, a.s.)**, wholly owned by the Czech Ministry of Finance. Hub/base carriers reported: Smartwings (hub), Ryanair and Eurowings (operating bases); Czech Airlines used LKPR as its hub until ceasing operations in late 2024.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — assumed H24 for a capital-city international airport | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not confirmed in reachable public sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Terminal 1 international hall confirmed; exact hours not confirmed | 🟧 |
| Handling / FBO | An FBO presence (**ABS Jets**) is noted in public data `[SkyVector]`; scheduled-service ground handler(s) not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 06 | 3,715 × 45 m (12,188 × 148 ft) | Hard surface; PCN not published / verify | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Threshold elevation ~1,202 ft `[SkyVector]`; used rarely |
| 24 | 3,715 × 45 m (12,188 × 148 ft) | Hard surface; PCN not published / verify | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Threshold elevation ~1,158 ft `[SkyVector]`; **most-used runway** (prevailing westerly wind) |
| 12 | 3,250 × 45 m (10,663 × 148 ft) | Surface not confirmed; PCN not published / verify | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Threshold elevation ~1,160 ft `[SkyVector]`; used only exceptionally; CAT I only, overflies populated areas |
| 30 | 3,250 × 45 m (10,663 × 148 ft) | Surface not confirmed; PCN not published / verify | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Threshold elevation ~1,232 ft `[SkyVector]`; used often (secondary preferred direction) |
| 04/22 | — | — | — | — | — | — | **Permanently closed** — taxiway/parking use only, never active for takeoff or landing |

*Runway dimensions and threshold elevations sourced to SkyVector (tier-4, retrieved 2026-07-26); the declared-distance (TORA/TODA/ASDA/LDA) breakdown was not obtained from a primary AIP table — full runway length used only as a proxy, flagged throughout. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Ruzyně ATIS | 122.16 | Not published / verify | 🟧 |
| Delivery | Ruzyně Delivery | 120.06 | Not published / verify | 🟧 |
| Ground | Ruzyně Ground | 121.91 | Not published / verify | 🟧 |
| Tower | Praha/Ruzyně Tower 118.11 · Ruzyně Tower 134.56 / 335.60 / 378.75 | — | Mixed | Multiple positions — take the assigned frequency 🟧 |
| Approach | Ruzyně Approach 119.01 · Praha Approach 120.53 / 127.58 / 335.60 / 378.75 · Praha/Ruzyně Approach 136.08 | — | Mixed, sector-specific | Take the assigned frequency 🟧 |
| Information | Ruzyně Information 118.31 | — | Not published / verify | 🟧 |
| Centre / FIR | Praha ACC — **Praha (LKAA) FIR** | Per current AIRAC | H24 (assumed) | No dedicated FIR brief exists yet — cross-ref [Europe — General Airspace](../../../../airspace/europe.md) 🟧 |

*All frequencies sourced to SkyVector (tier-4, retrieved 2026-07-26) — not independently AIRAC-verified; treat exact values, hours, and 8.33 kHz channel precision as provisional pending a live cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | OKL | 112.60 | Not published / verify | On-field "Prague" VOR/DME (~0.4 NM) 🟧 |
| VOR | PSK | 117.60 | Not published / verify | "Pisek" VOR, ~20.9 NM 🟧 |
| VOR | NER | 112.25 | Not published / verify | "Neratovice" VOR, ~21.2 NM 🟧 |
| VOR | VLM | 114.30 | Not published / verify | "Vlasim" VOR, ~39.3 NM 🟧 |
| NDB | V | 416 kHz | Not published / verify | "Maslovice Vodochody", ~8.4 NM 🟧 |
| ILS 06/24 | Not published / verify | Not published / verify | — | CAT II/III capability commonly reported, ident/frequency not confirmed 🟧 |
| ILS 12/30 | Not published / verify | Not published / verify | — | CAT I only `[Wikipedia, AIP-cited]` 🟧 |

*Sourced to SkyVector (tier-4, retrieved 2026-07-26); ILS idents/frequencies not obtained from a primary AIP table — verify current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Prevailing westerly wind drives **RWY 24** as the primary landing direction, **RWY 30** as a frequently-used secondary, **RWY 06** rarely, and **RWY 12** only exceptionally `[Wikipedia, AIP-cited]`.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 06 | ILS | Not published / verify | Not published / verify | CAT II/III capability commonly reported, not independently confirmed 🟧 |
| 24 | ILS | Not published / verify | Not published / verify | Primary landing runway; category not independently confirmed 🟧 |
| 12 | ILS | Not published / verify | Not published / verify | CAT I only; approach overflies populated areas |
| 30 | ILS | Not published / verify | Not published / verify | CAT I only; used often as secondary direction |

- **STARs (names only):** Not confirmed in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Winter fog/low-stratus conditions are the routine trigger; exact RVR trigger values and confirmed CAT sub-category not obtained this build. 🟧
- **Missed approach watch-items:** Terrain is not extreme at the field but the region is undulating — fly the published MAP and verify climb-gradient/turn constraints on the current chart; re-sequencing occurs within a moderate-density radar environment.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable sources — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this build. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — coordinate with Ground/Apron on the day. 🟧
- **ATC slot / CTOT & clearance:** Slot coordination level not confirmed (see Dispatch §4); standard EUROCONTROL Network Manager ATFM/CTOT regulation applies as general EU practice — not independently LKPR-sourced. 🟧
- **De-icing:** Central European winter season (roughly Nov–Mar/Apr); facility/pad locations and provisioning not confirmed in reachable sources. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in detail; the CAT I-only, populated-area-overflying approach on RWY 12/30 (Prague 6, Kladno) is consistent with that pair being reserved for non-preferred wind conditions rather than routine use `[Wikipedia, AIP-cited]`. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminal 1 (non-Schengen/international, concourses A/B) and Terminal 2 (Schengen, concourses C/D) are the passenger terminals in scheduled use; Code E/F stand allocation and widebody capacity are not confirmed in reachable sources. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed — confirm with Ground/Apron on the day; note the closed former RWY 04/22 is repurposed as taxiway/apron space.
- **Hot spots / tight taxiways:** Not published / verify — pull the current airport ground chart at planning. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate Central European continental climate; prevailing wind is westerly, consistent with RWY 24 being the dominant operational direction.
- **Seasonal hazards:** Winter **fog/low stratus** and a recognised **snow/icing season** (roughly Nov–Mar/Apr); summer brings the standard Central European risk of afternoon **convective thunderstorms**. No LKPR-specific frequency statistics found — general regional climatology.
- **Local effects:** Field itself is a flat plateau; the surrounding Central Bohemian upland is genuinely undulating — no notable sea-breeze effect at this inland field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, CAT II/III equipment status on RWY 06/24, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current Praha (LKAA) FIR restrictions. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — a spoke field in the K Global network, not a base.
- **Nearest suitable alternates:** Company preferred alternates **LZIB** (Bratislava), **EPWA** (Warsaw Chopin), **LHBP** (Budapest) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major capital-city international airport; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length non-limiting for any K Global type on the 3,715 m main runway pair. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-type-specific consideration identified at LKPR beyond standard European-airport provision — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP access** — the ANS CR / AIM Czech Republic eAIP (aim.rlp.cz) was not reachable in a usable form this build; all runway, frequency, navaid and category data below are tier-4 corroborated only.
- **Mag variation** — not sourced to a primary table; secular-drift estimate (~4–5° E) is not an AIP figure.
- **Declared distances (TORA/TODA/ASDA/LDA)** — not obtained; full runway length used as a proxy only.
- **RFF category** — not published / verify.
- **PCN (all runways)** — not published / verify.
- **ILS category/sub-category and idents/frequencies on RWY 06/24** — commonly reported as CAT II/III-capable in public references, not confirmed from a primary AIP table.
- **ATC frequencies** — tier-4 sourced (SkyVector); not independently AIRAC-verified; possible 8.33 kHz channel-spacing rounding.
- **SIDs/STARs (current names)** — not obtained; pull the live current-AIRAC procedure list before use.
- **Slot coordination level and any night/curfew restriction** — not confirmed in reachable public sources (see Dispatch §4).
- **RWY 12/30 surface type/PCN** — surface listed as "unknown" in the tier-4 source consulted.
- **Fuel supplier(s), hours, ground-handling agent(s), stand/gate assignment for scheduled service** — none confirmed in reachable sources.
- **Terrain/MSA quantification (§3.1)** — no peak bearings/distances or MSA-sector data obtained; the region is known to be undulating and carries one historical fog-related CFIT accident (1975), but current chart data was not reachable this build.
- **Take-off minima, engine run-up restriction, reverse-thrust policy, noise-abatement routing detail, follow-me availability** — none confirmed in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **ANS CR / AIM Czech Republic eAIP** — https://aim.rlp.cz — attempted, not reachable in a usable form (JS frameset / non-responsive to a raw fetch) as of 2026-07-26; not used as a direct citation this build. Tier-1 source of record for any future update.
- OurAirports — https://ourairports.com/airports/LKPR/ (retrieved 2026-07-26). *ARP, elevation, customs tag.*
- SkyVector — https://skyvector.com/airport/LKPR (retrieved 2026-07-26). *Runway dimensions/threshold elevations, ATC frequencies, navaids, FBO listing.*
- Wikipedia — "Václav Havel Airport Prague" — https://en.wikipedia.org/wiki/V%C3%A1clav_Havel_Airport_Prague (retrieved 2026-07-26). *Runway history (04/22 closure, 06/24 reconstruction 2012–2013), preferential-runway usage pattern, CAT I-only equipage and populated-area overflight on 12/30, terminal layout/Schengen split, cargo terminals, operator/ANSP, historical accidents.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
