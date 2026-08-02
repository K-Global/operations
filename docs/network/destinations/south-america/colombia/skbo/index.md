# SKBO — El Dorado Intl · Airport Briefing

**SKBO / BOG** · Bogotá, Colombia · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Aerocivil Colombia AIP not reachable this pass; built from tier-4 public sources (OurAirports, Wikipedia)

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (OurAirports, Wikipedia) pending a live Aerocivil AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 4°42′06″N 074°08′49″W / 4.70159°N 74.14690°W `[OurAirports]` |
| Field elevation | **8,361 ft / 2,548 m AMSL** `[OurAirports, updated 2024-04-22]` — consistent with an independently seeded 8,358 ft/4.70160,-74.14694 figure `[Navigraph navdata]`; minor rounding only, no material discrepancy 🟩 |
| Mag variation | Not published / verify — see runway-designator discrepancy below, which implies westward magnetic drift at the field 🟧 |
| Time zone | UTC−5 (Colombia Time, no DST, year-round) |
| Runway(s) | **14L/32R** and **14R/32L**, both 3,800 × 45 m (12,467 × 148 ft), asphalt, lighted, full-length parallels `[OurAirports, updated 2024-04-22]` |
| Preferential runway | Not published / verify — no published preferential-runway rule found; expect wind/flow-driven selection between the two parallels 🟧 |
| Longest LDA | Not published / verify — nominal runway length 3,800 m per parallel; exact declared LDA not confirmed 🟧 |
| Approaches | ILS reported on the parallel runways; **CAT III capability plausible but not confirmed** — see §10 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Bogotá Approach (terminal); **Bogotá FIR (SKED)** area control enroute — see [South America airspace brief](../../../../airspace/south-america.md) 🟧 not primary-confirmed |
| Elevation class | **HIGH-ALTITUDE — hot-and-high** — the field's headline performance and terrain driver; see §3.1/§3.5 and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) 🟥 |
| Special-airport status | Not operator-categorised as a restricted-crew "special airport" in reachable sources; meets the **OM E high-elevation-aerodrome trigger** (≳8,000 ft) — enhanced performance/dispatch briefing applies 🟥 |
| Customs / PoE | **Yes** — international port of entry `[OurAirports #customs tag]`; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **NO** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **SEQM, SCEL, SBGR** (all cross-country from Colombia) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 / 16 min** (in/out convention per VAMSYS mirror, direction not further specified) `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | High-altitude bowl (Sabana de Bogotá) ringed by the Cerros Orientales close-in high terrain — see §3.1. |
| Runway length vs fleet perf | 🟧 | Both parallels are a generous 3,800 m in absolute length, but at 8,361 ft the binding constraint is density-altitude thrust/climb-gradient, not runway length — see §3.5. |
| Approach availability / minima | 🟧 | ILS reported on both parallels; CAT III capability plausible given fog exposure but **not confirmed** from a primary source this pass. |
| Airspace / traffic / control | 🟩 | Radar-controlled terminal environment within the Bogotá FIR (SKED); Colombia's primary hub with a structured, high-volume traffic picture. |
| Weather / seasonal hazard | 🟥 | Frequent early-morning fog/mist in the high-altitude bowl plus bimodal-wet-season convective activity — see §14. |
| Curfew / slots / hours | 🟧 | No published curfew or slot-coordination level found in reachable sources — treat as **not confirmed**, not as "none." |
| RFF category vs our types | 🟧 | Category not confirmed from a primary source this pass. |
| Fuel availability | 🟧 | Jet A-1 assumed available as Colombia's primary international gateway; specific supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed to exist; exact desk hours, handler roster and current stand/gate map not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
SKBO sits at **8,361 ft AMSL** in the **Sabana de Bogotá**, a high plateau of the Eastern Andes, with the city and airport ringed immediately to the east by the **Cerros Orientales** — a ridgeline of the Eastern Cordillera rising to **terrain in excess of 10,000 ft** within a few nautical miles of the field and the city centre. This is a **genuine, quantifiable CFIT threat**, not a background consideration: close-in high ground bounds the eastern side of the terminal area, constraining circling, visual manoeuvring and any off-profile descent. Respect the charted **MSA** rigorously — do not descend below the sector MSA early, and brief the terrain picture on every arrival/departure regardless of how many times the field has been flown. Cross-ref [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §8, which treats SKBO as a named network example of the terrain/high-elevation co-hazard.

### 3.2 Airborne conflict / traffic 🟩
SKBO is Colombia's primary international and domestic hub, generating a dense, high-volume traffic flow under the **Bogotá FIR (SKED)**. Expect a structured radar environment (Bogotá Approach terminal, Bogotá FIR area control enroute) with sustained vectoring and sequencing during peak banks. See the [South America airspace brief](../../../../airspace/south-america.md) for the regional FIR/airspace picture — note that document is written with a Brazil-routing focus; the Bogotá FIR structure and control-unit detail above are field-specific and not duplicated there.

### 3.3 Runway excursion 🟧
No displaced thresholds, PCN figures or declared distances were found in the reachable tier-4 extract for either parallel runway — **not independently confirmed** against a current AIRAC/AIP cycle. Both runways are nominally full-length (3,800 m) and full-strength pending verification. Bogotá's bimodal wet season brings frequent heavy-rain and thunderstorm activity (see §14); factor wet/contaminated-runway braking action and verify current runway condition/NOTAM before every landing.

### 3.4 Weather threat 🟥
The high-altitude bowl setting makes SKBO prone to **frequent early-morning radiation fog/mist**, which can reduce visibility sharply with limited notice and is the operational backdrop to the field's reported (but unconfirmed) CAT III approach capability. The Bogotá savanna's **bimodal wet season** (typically Mar–May and Sep–Nov) brings convective thunderstorm activity and turbulence; the drier interludes (Dec–Feb, Jun–Aug) are comparatively benign. See §14 for the durable climate picture and pull live METAR/TAF/SIGMET at planning.

### 3.5 Operational considerations 🟥
As a network **HIGH-ALTITUDE** field (8,361 ft), SKBO is a headline application of [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md): density altitude reduces available thrust and net climb gradient, so **takeoff performance at SKBO is frequently thrust/gradient-limited rather than field-length-limited** despite the generous 3,800 m runways — plan for a **payload/fuel weight-reduction trade** on hot afternoons and consider the cooler early-morning window to recover payload (noting the direct tension with §3.4's fog exposure at that same time of day — the two effects must be planned together, not traded off casually). Engine-out obstacle clearance and escape routing are materially affected by the close-in Cerros Orientales terrain (§3.1) — confirm the aircraft meets the published SID minimum-climb-gradient and any engine-out obstacle departure at the planned weight, elevation and temperature. Terrain-driven approach procedures in this environment typically rely on RNP/RNAV design — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the applicable method. Cite the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) (Table D, hot-and-high sensitivity column) for per-type tendency rather than assuming a uniform penalty across the fleet.

---

## 4. Cautions & Warnings

- **Close-in high terrain (Cerros Orientales) bounds the eastern terminal area** — respect MSA, do not descend early, brief terrain on every operation regardless of experience at the field.
- **Runway-designator discrepancy** — current tier-4 data shows **14L/32R & 14R/32L**; the legacy designation **13L/31R & 13R/31L** may still appear on older charts/documents. Reconcile against the current AIRAC before ops — do not assume either designation without checking the active cycle.
- **Density-altitude thrust/gradient limit is real despite the long (3,800 m) runways** — do not assume field length removes the performance constraint; see §3.5.
- **Early-morning fog is a recurring visibility hazard** in the high-altitude bowl — confirm current LVP status before planning into or out of the field in the fog-prone window.
- **CAT III approach capability is reported but not primary-confirmed** — verify current-AIRAC minima and crew/aircraft currency before planning a low-visibility arrival.
- **ATC frequency picture is very likely incomplete** (see §8) — do not rely on the published table alone; confirm the full Delivery/Ground/Tower/sector-Approach structure at planning.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised as a restricted-crew "special airport" in reachable sources; however, the field meets the **OM E high-elevation-aerodrome working trigger** (≳8,000 ft field elevation) — treat as requiring the enhanced performance/dispatch briefing set out in [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md). 🟥
- **Crew-qualification gate:** No published crew-qualification restriction found; if the reported CAT III capability is confirmed, standard CAT II/III currency requirements would apply — verify before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** No published RNP AR ban, circling restriction or curfew found in reachable sources — **not confirmed as "none," treat as unverified** pending AIP access. 🟧
- **Overflight / entry / permits:** Standard Colombian international arrival; no special state permit identified for a normal scheduled commercial operation. 🟩
- **Operations notes:** ANSP/regulator — **Aerocivil** (Unidad Administrativa Especial de Aeronáutica Civil); enroute/area control — **Bogotá FIR (SKED)**; terminal approach — **Bogotá Approach**. See [South America airspace brief](../../../../airspace/south-america.md).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 for Colombia's primary international hub — not independently confirmed | 🟧 |
| AD operating hours | Assumed H24 — no published curfew found in reachable sources | 🟧 |
| Night / curfew restrictions | Not published / verify — no curfew found, not confirmed as "none" | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as Colombia's primary international gateway; specific supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed `[OurAirports #customs tag]`; exact hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable public sources | 🟧 |

**Capacity context (durable):** SKBO is reported to have handled on the order of **45.8 million passengers** in its most recent reported year, and a 2023-announced expansion plan targets capacity of **60 million passengers**, with an infrastructure contract targeted for award by 2025 `[Wikipedia, retrieved 2026-07-26]`. Exact current terminal/stand-count figures were not independently confirmed this pass. 🟧

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 14L/32R | 3,800 × 45 m (12,467 × 148 ft) | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published | Current ICAO designation `[OurAirports, updated 2024-04-22]`. **Legacy chart designation 13L/31R may still appear on older documents** — magnetic variation drift is the likely driver of the redesignation; reconcile against the current AIRAC before ops 🟧 |
| 14R/32L | 3,800 × 45 m (12,467 × 148 ft) | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published | Current ICAO designation `[OurAirports, updated 2024-04-22]`. **Legacy chart designation 13R/31L** — see 14L/32R note 🟧 |

*No displaced thresholds found in the reachable tier-4 extract for either parallel — not independently confirmed. TORA/TODA/ASDA/LDA and PCN figures are not published in any source reached this pass; declared distances must be pulled from the Aerocivil AIP before operational use. All lengths in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Bogotá ATIS | 113.9 | Not confirmed (assumed H24) | `[OurAirports]` |
| Delivery | Not published / verify | — | — | 🟧 Not found in reachable tier-4 source |
| Ground | Not published / verify | — | — | 🟧 Not found in reachable tier-4 source |
| Tower | Not published / verify | — | — | 🟧 Not found in reachable tier-4 source |
| Approach | Bogotá Approach | 119.5 | Not confirmed (assumed H24) | `[OurAirports]` — shared APP/DEP frequency in the reachable source |
| Departure | Bogotá Departure | 119.5 | Not confirmed (assumed H24) | `[OurAirports]` |
| Info (FIS) | Bogotá FIS | 126.9 | Not confirmed (assumed H24) | `[OurAirports]` |
| Centre / FIR (remote/HF) | Bogotá RDO | 348.8 | H24 (assumed) | **Bogotá FIR (SKED)** area control; see [South America airspace brief](../../../../airspace/south-america.md) |

*Source: tier-4 aggregator snapshot only (OurAirports) — this is very likely an incomplete picture for a hub of this traffic density; no Ground/Delivery/Tower or multi-sector Approach frequencies were found. Treat every frequency above as unconfirmed pending a live AIRAC/AIP cross-check — do not rely on this table operationally. One additional entry in the reachable source ("OPS — 1395 MHz — MILGP RDO OPS") reads as an implausible/erroneous frequency (1395 MHz is outside the civil VHF-COM band) and is **not included above**; flagged for awareness only.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| NDB | Delta Romeo (DR) | 264 kHz | Not confirmed (assumed H24) | ~1.3 NM NW of field `[OurAirports]` — proximity suggests a locator/approach-aid role; not confirmed which runway |
| NDB | Romeo (R) | 274 kHz | Not confirmed (assumed H24) | ~3.1 NM ESE of field `[OurAirports]` |
| NDB | Techo (TEH) | 284 kHz | Not confirmed (assumed H24) | ~4.4 NM S of field `[OurAirports]` |
| NDB | Echo Delta (ED) | 244 kHz | Not confirmed (assumed H24) | ~5.8 NM NW of field `[OurAirports]` |
| VOR-DME | Soacha (SOA) | 108.60 | Not confirmed (assumed H24) | ~9.6 NM SW of field `[OurAirports]` |
| VOR-DME | Bogota (BOG) | 113.90 | Not confirmed (assumed H24) | ~13.7 NM NW of field `[OurAirports]` |
| NDB | Bogota (BOG) | 340 kHz | Not confirmed (assumed H24) | ~13.6 NM NW of field `[OurAirports]` |
| ILS (both parallels) | Idents not published | Not published | Not published | CAT III capability plausible (fog-prone high-altitude bowl) but **not confirmed** from a primary source 🟧 |

*Sourced to OurAirports navaid-proximity data (tier-4); the four close-in NDBs (Delta Romeo, Romeo, Techo, Echo Delta, all within ~6 NM) plausibly serve locator/approach functions for the two parallel runways but their runway assignment is not confirmed in reachable sources. ILS idents, frequencies and per-runway minima were not found. Confirm all idents/frequencies against the current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — expect wind/flow-driven selection between the two parallel runways; no published preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 14L/32R | ILS reported, CAT III plausible | Not published | Not published | Sub-category/minima not primary-confirmed 🟧 |
| 14R/32L | ILS reported, CAT III plausible | Not published | Not published | Sub-category/minima not primary-confirmed 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III capability reported but not confirmed; exact trigger conditions/RVR minima not established this pass — treat fog events as an operational trigger to confirm current LVP status. 🟧
- **Missed approach watch-items:** Terrain is the primary driver — the Cerros Orientales bound the eastern side of the terminal area (§3.1); confirm the published missed-approach climb gradient and lateral path against terrain before every approach, and expect re-sequencing into a dense traffic flow at Colombia's primary hub.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Terrain-constrained departures at high-elevation Andean fields typically carry **RNP/RNAV departure design and elevated minimum-climb-gradient tables** — confirm gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4.
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — confirm cross-bleed/APU notification and push-back procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No published slot-coordination level found in reachable sources — **not confirmed as uncoordinated**, verify at planning. 🟧
- **De-icing:** Not typically expected — SKBO is an equatorial-latitude field despite its altitude, with ambient temperatures rarely at or below freezing; not confirmed as never-required, particularly on cold early mornings — verify locally. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed in reachable sources this pass; the field is Colombia's primary hub with a large mixed-fleet operation and an announced expansion targeting 60 million annual passengers (§6) — exact current stand count/code-letter allocation not confirmed. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day — not published in reachable sources. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Subtropical highland climate typical of the Sabana de Bogotá — cool temperatures year-round given the 8,361 ft elevation (moderated by the equatorial latitude rather than by season); no confirmed prevailing-wind rule found this pass. 🟧
- **Seasonal hazards:** **Frequent early-morning fog/mist** in the high-altitude bowl is the field's defining recurring hazard. Colombia's **bimodal wet season** (typically Mar–May and Sep–Nov) brings convective thunderstorm activity and turbulence over the savanna; the intervening drier windows (Dec–Feb, Jun–Aug) are comparatively benign. Confirm current SIGMET/convective activity at planning.
- **Local effects:** Terrain-induced turbulence and localised wind effects are plausible near the Cerros Orientales, particularly with easterly flow over the ridge — not independently quantified this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, ILS/CAT III equipment status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination/departure field within the South America network — **not a K Global base** `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **SEQM, SCEL, SBGR** `[VAMSYS mirror 2026-07-26]` — all are **cross-country** relative to Bogotá; note SEQM (Quito) is itself a high-elevation Andean field (~7,910 ft) carrying its own density-altitude planning considerations, while SCEL (Santiago) and SBGR (São Paulo) are sea-level fields at materially greater distance. Confirm suitability, runway/RFF adequacy, current minima and fuel/range planning per leg before nominating any of these as the operational alternate.
- **Fuel-uplift notes:** Jet A-1 assumed available as Colombia's primary international gateway; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length is non-limiting (3,800 m class on both parallels); the operative planning consideration is the **density-altitude thrust/climb-gradient limit** (§3.5), which can force a payload/fuel weight reduction independent of runway length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md). 🟥

---

## 17. Fleet-specific notes (optional)

- SKBO is a named network example in [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) (~8,358–8,361 ft). Per the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) (Table D, hot-and-high sensitivity column), heavier/high-MTOW types can be expected to carry a more material hot-and-high payload penalty here than lower-sensitivity types — verify the specific type's tendency in the matrix rather than assuming a uniform fleet-wide penalty; the day's actual RTOW/gradient numbers remain AFM/OFP outputs.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Aerocivil Colombia AIP was not reachable this pass** — every figure in this briefing traces to tier-4 public corroboration (OurAirports, Wikipedia) and should be treated as provisional pending a primary-source pull.
- **Runway-designator discrepancy** — current tier-4 data (OurAirports, updated 2024-04-22) shows **14L/32R & 14R/32L**; a legacy **13L/31R & 13R/31L** designation is understood to appear in older charts/documents, consistent with westward magnetic-variation drift over time. **Not reconciled against the current AIRAC cycle** — confirm the active designation before ops.
- **CAT III capability** — reported/plausible given the field's fog-prone high-altitude-bowl setting, but **not confirmed from a primary AIP source** this pass; sub-category, per-runway minima and ILS idents/frequencies unknown.
- **ATC frequency table** — only ATIS/Approach-Departure/FIS/RDO entries found via tier-4 aggregator; almost certainly incomplete for a hub of this size (no Ground/Delivery/Tower frequencies found).
- **Declared distances (TORA/TODA/ASDA/LDA), PCN, RFF category, curfew/slot regime, take-off minima, transition altitude/level, magnetic variation** — none confirmed in reachable sources.
- **Current stand/gate count and handling-agent roster** amid the reported capacity-expansion plan (§6) — not confirmed.
- **SIDs/STARs (current names)** — not obtained in this research pass.
- **Navaid-to-runway assignment** — the four close-in NDBs (§9) plausibly serve approach/locator functions but assignment is not confirmed.
- **VATSIM cross-check** — no dedicated VATSIM vACC/division airport SOP for SKBO was located and cross-checked this pass; treat as an outstanding QA item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/SKBO/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26; underlying airport record last updated 2024-04-22). *ARP/elevation/runway/frequency/navaid tier-4 baseline.*
- Wikipedia — "El Dorado International Airport" — https://en.wikipedia.org/wiki/El_Dorado_International_Airport (retrieved 2026-07-26). *Passenger-traffic and capacity-expansion context.*
- Companion OM C file: [South America airspace brief](../../../../airspace/south-america.md) — regional airspace reference (Brazil-routing focused; Bogotá FIR content written directly in this briefing).
- Companion OM E file: [`High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — density-altitude/hot-and-high performance method; SKBO named network example.
- Companion OM E file: [`Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- Companion OM E file: [`PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- Companion OM B file: [`Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Aerocivil Colombia AIP (AD 2 SKBO)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
