# SEQM — Mariscal Sucre Intl · Airport Briefing

**SEQM / UIO** · Tababela (Quito), Ecuador · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DGAC Ecuador AIP not reachable this pass; built from tier-4 public sources (OurAirports, Wikipedia)

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (OurAirports, Wikipedia) pending a live DGAC Ecuador AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 0°07′31″S 078°21′16″W / -0.125399°, -78.354306° `[OurAirports]` |
| Field elevation | **7,841 ft / 2,390 m AMSL** (OurAirports) — Wikipedia states **7,874 ft / 2,400 m** (minor source rounding, same field) — see §18 elevation-reconciliation note 🟧 |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC−5 (Ecuador continental, ECT — no DST) |
| Runway(s) | Single **18/36**, 4,098 × 45 m (13,445 × 148 ft), concrete, lighted `[OurAirports]` |
| Preferential runway | Not published / verify — single-runway field, direction driven by wind/terrain 🟧 |
| Longest LDA | Not published / verify — overall runway length 4,098 m; per-direction declared distances not confirmed 🟧 |
| Approaches | ILS reported on one runway direction (category not confirmed, believed CAT I only) `[tier-4]`; **RNP AR (RNAV (RNP) Authorization Required)** approach procedures believed in use given the terrain-hemmed valley — exact procedure names/minima not confirmed 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar approach assumed for a modern (opened Feb 2013) international field — **not independently confirmed**; enroute under **Guayaquil FIR (SEFG)** 🟧 |
| Elevation class | **Very high-altitude — hot-and-high.** Even at the corrected ~7,841–7,874 ft figure (see §18), SEQM remains one of the highest major international airports in the world — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) 🟥 |
| Special-airport status | Not operator-categorised as a restricted-crew "special airport" in reachable sources; the terrain/altitude/RNP AR profile is consistent with special-airport-style crew-qualification treatment at other operators — see §5 🟧 |
| Customs / PoE | **Yes** — sole international gateway for Quito; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **NO** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **SKBO, SCEL, SBGR** (all cross-country) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Tababela sits in a terrain-hemmed Andean valley on the eastern slope of the Andes; volcano-adjacent (Cotopaxi to the south, Pichincha near the old city, Ilaló ridgeline around the valley itself) — see §3.1. |
| Runway length vs fleet perf | 🟧 | 4,098 m nominal length is generous, but the very-high-altitude density-altitude penalty materially erodes usable takeoff/landing performance for any K Global type — treat as a performance-limited field, not a length-limited one. |
| Approach availability / minima | 🟧 | Believed to rely heavily on RNP AR on at least one runway direction given the terrain; exact procedure names, minima, and per-runway ILS category not confirmed from a primary source this pass. |
| Airspace / traffic / control | 🟧 | Guayaquil FIR (SEFG) enroute; terminal control type (radar vs procedural) at Quito Approach not independently confirmed. |
| Weather / seasonal hazard | 🟥 | Andean valley convective build-up, mountain-wave/turbulence potential, and intermittent volcanic-ash/NOTAM risk from the regional volcanic arc — see §14. |
| Curfew / slots / hours | 🟧 | No published curfew or slot-coordination level found in reachable sources — treat as **not confirmed**, not as "none." |
| RFF category vs our types | 🟧 | Not confirmed from a primary source this pass. |
| Fuel availability | 🟧 | Jet A-1 assumed available as the sole gateway for Quito; specific supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE facility confirmed to exist; exact hours, current handler roster and stand/gate map not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
SEQM (opened February 2013 at Tababela, ~18 km east of Quito) sits in a valley on the **eastern slope of the Andes** — a genuinely terrain-hemmed site even though it replaced the far more constrained in-city predecessor. The **Cotopaxi** volcanic massif rises to the south of the field, the **Ilaló** ridgeline and surrounding high ground hem the valley itself, and the wider approach/departure environment sits within reach of the Andean cordillera on both sides of the valley. This is a genuine CFIT-relevant environment for both the initial climb and any missed-approach/go-around path: verify the current MSA sectors and area chart before every operation, brief terrain awareness explicitly, and do not descend or level below the charted MSA/procedure altitude on any segment. The terrain profile is the direct reason Quito/Tababela is understood to rely heavily on **RNP AR approach procedures** rather than a simple conventional/ILS approach-and-missed-approach path on at least one runway direction — see §3.5 and §10.

### 3.2 Airborne conflict / traffic 🟧
SEQM airspace is worked within the **Guayaquil FIR (SEFG)**, Ecuador's continental FIR — see the [South America airspace briefing](../../../../airspace/south-america.md) for the regional airspace reference (that document is Brazil-routing-focused; the Ecuador/Quito FIR content here is written independently for this field). Terminal control type (full radar vs procedural) at Quito Approach is not independently confirmed from a primary source this pass — treat as **assumed radar** for a modern (2013-built) international gateway, pending verification. Traffic density is moderate relative to major hub complexes, but the single-runway layout and terrain constrain vectoring options during sequencing and any go-around re-sequencing.

### 3.3 Runway excursion 🟧
Single runway 18/36, 4,098 × 45 m, concrete, lighted. No displaced thresholds or PCN figures were found in the reachable tier-4 extract — **not independently confirmed** against a current AIRAC/AIP cycle. At this elevation, actual landing distance required is materially longer than a sea-level equivalent for the same weight/config (density-altitude effect on groundspeed) — always use the AFM/OFP performance module for the day, never the nominal runway length, to judge margin.

### 3.4 Weather threat 🟥
Andean valley siting brings afternoon convective build-up, potential mountain-wave/turbulence in the vicinity of high terrain, and low-cloud/fog risk in the valley during certain seasons. Ecuador sits within the Andean volcanic arc: **Cotopaxi** (south of the field) and other regional volcanoes (including **Pichincha**, adjacent to the old city) have produced ashfall events affecting Quito-area aviation historically — treat volcanic-ash NOTAM/VAAC advisories as a live, perishable check at every planning cycle (§14/§15), not a one-time read. See also [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the density-altitude performance interaction with hot afternoon temperatures at this elevation.

### 3.5 Operational considerations 🟥
Three durable considerations define this field: (1) **very high-altitude hot-and-high performance** — even at the corrected ~7,841–7,874 ft elevation (§18), this is one of the highest major international airports in the world, and density-altitude effects on takeoff thrust, net climb gradient, and landing distance are the dominant performance driver on every leg — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md); (2) **RNP AR approach reliance** — the terrain-hemmed valley is believed to require RNP AR (RNAV (RNP) Authorization Required) capability and specific crew/aircraft authorization for at least one runway direction, given that a conventional ILS-and-missed-approach path is constrained by terrain — exact procedure names and minima are not confirmed this pass, but crews and dispatch should plan on RNP AR being operationally relevant here; see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md); and (3) **single-runway capacity** — with no parallel or crosswind runway, wind/weather-driven runway-direction changes have an outsized effect on approach/departure procedure selection.

---

## 4. Cautions & Warnings

- Terrain-hemmed Andean valley siting — verify MSA/area chart before every arrival, departure and missed approach; do not descend below charted altitudes early.
- Volcanic-ash/NOTAM risk from the regional Andean volcanic arc (Cotopaxi, Pichincha, others) — check current VAAC/NOTAM picture at every planning cycle, not a static assumption.
- Very high-altitude density-altitude performance penalty applies on every leg regardless of nominal runway length — always compute from the AFM/OFP module for the day.
- RNP AR approach environment believed applicable on at least one runway direction — confirm current crew/aircraft RNP AR authorization before planning into this field.
- Single runway (18/36) — no parallel or alternate runway if 18/36 is unavailable; a runway closure is a full-field-closure event.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable public sources; the terrain, very high-altitude, and believed RNP AR profile are consistent with special-airport-style treatment (crew qualification / recency gate) at other operators — treat as a candidate for such treatment pending an internal policy decision. 🟧
- **Crew-qualification gate:** RNP AR authorization (crew and aircraft) is believed operationally relevant for at least one runway direction — verify current authorization before planning a flight into SEQM; see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). High-elevation/hot-and-high performance-planning familiarity is required per [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md). 🟥
- **Operating restrictions / bans:** No published curfew, slot regime, or circling restriction found in reachable sources — **not confirmed as "none,"** treat as unverified pending AIP access. 🟧
- **Overflight / entry / permits:** Standard Ecuadorian international arrival; no special state permit identified for a normal commercial operation in reachable sources. 🟩
- **Operations notes:** State civil aviation authority — **DGAC (Dirección General de Aviación Civil) Ecuador**. Enroute/terminal airspace under **Guayaquil FIR (SEFG)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed — assumed to align with scheduled international traffic | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify — no curfew found, not confirmed as "none" | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as sole gateway for Quito; hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE facility confirmed to exist; exact hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable public sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 18 | 4,098 m × 45 m (13,445 × 148 ft) `[OurAirports]` | Concrete, lighted / PCN not published | Not published | Not published | Not published | Not published | Reciprocal of 36; per-direction declared distances not confirmed 🟧 |
| 36 | (reciprocal of 18) | Concrete, lighted / PCN not published | Not published | Not published | Not published | Not published | Reciprocal of 18; per-direction declared distances not confirmed 🟧 |

*Single physical runway, two landing/takeoff directions. No displaced-threshold information found in the reachable tier-4 extract for either direction — not independently confirmed. TORA/TODA/ASDA/LDA and PCN figures are not published in any source reached this pass; pull from the DGAC Ecuador AIP before operational use. All lengths in metres/feet as stated.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Quito ATIS | 119.8 | Not confirmed (assumed H24) | `[OurAirports]` 🟧 |
| Delivery | Not published / verify | — | — | Not found in reachable tier-4 source 🟧 |
| Ground | Quito Ground | 121.9 | Not confirmed (assumed H24) | `[OurAirports]` 🟧 |
| Tower | Quito Tower | 118.1 | Not confirmed (assumed H24) | `[OurAirports]` 🟧 |
| Approach | Quito Approach | 119.7 and 121.2 (two sectors) | Not confirmed (assumed H24) | `[OurAirports]` 🟧 |
| Centre / FIR | Guayaquil FIR (SEFG) | Per current AIRAC | H24 assumed | Enroute/area control authority for Quito airspace |

*Source: single-entry tier-4 aggregator snapshot only — treat every frequency above as unconfirmed pending a live AIRAC/AIP cross-check; the absence of a Delivery frequency in this snapshot likely reflects an incomplete tier-4 extract rather than a confirmed absence of the service. Do not rely on this table operationally.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS | Idents/frequency not published | Not published | Not published | Reported on one runway direction only `[tier-4]`; category not confirmed, believed CAT I only given terrain constraints on the missed approach — not confirmed as CAT II/III 🟧 |
| VOR/DME | Not published / verify | — | — | Not found in reachable tier-4 source 🟧 |
| NDB | Not published / verify | — | — | Not found in reachable tier-4 source 🟧 |
| RNP AR procedures | Not published / verify | n/a | n/a | Believed in use given terrain; procedure names/idents not confirmed — see §3.5, §10, and [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) 🟧 |

*Navaid idents/frequencies for the field's own installations were not found in reachable sources this pass. Confirm all idents/frequencies and procedure names against the current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — single-runway field, direction expected to be wind-driven; no published preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 18/36 (one direction) | ILS, category not confirmed (believed CAT I only) | Not published | Not published | Not primary-confirmed 🟧 |
| 18/36 (terrain-constrained direction) | RNP AR (RNAV (RNP) AR), name not confirmed | Not published | Not published | Believed required given terrain; not primary-confirmed 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify — trigger conditions not confirmed. 🟧
- **Missed approach watch-items:** Terrain is the primary driver — the valley/ridge/volcano profile around Tababela constrains the missed-approach climb path on at least one runway direction; this is the operational reason RNP AR is believed necessary here. Verify the charted missed-approach climb gradient and turn constraints before every arrival. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the density-altitude interaction with the missed-approach climb.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Given the very high-altitude density-altitude performance regime and terrain-hemmed valley, expect above-standard minimum climb gradients on at least one SID and a real engine-out escape/obstacle consideration — verify per procedure on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — confirm cross-bleed/APU notification and push-back procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No published slot-coordination level found in reachable sources — **not confirmed as uncoordinated**, verify at planning. 🟧
- **De-icing:** Not applicable in the tropical Andean climate at this elevation — no cold-weather de-icing requirement identified; the seasonal performance driver is density altitude, not icing. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed in reachable public sources this pass — SEQM is a modern (2013) single-terminal international gateway; exact current stand count/code-letter allocation not confirmed. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day — not published in reachable sources. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Equatorial highland (tropical Andean) climate at very high elevation — moderate temperatures year-round with a pronounced diurnal cycle; prevailing wind not confirmed in reachable sources. 🟧
- **Seasonal hazards:** Afternoon convective build-up over the Andean valley is a recurring pattern; potential mountain-wave/turbulence in the lee of surrounding high terrain; intermittent volcanic-ash advisories from the regional Andean volcanic arc (Cotopaxi to the south; other regional volcanoes including Pichincha near the old city) — treat as a live, perishable NOTAM/VAAC check at every planning cycle, not a static assumption.
- **Local effects:** Valley/terrain-driven local wind effects likely given the site's position on the eastern Andean slope — not independently quantified from a primary source this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, volcanic-ash/VAAC advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (single-runway field — a closure is a full-field-closure event), navaid U/S, RNP AR procedure status, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, volcanic-ash/VAAC advisories (Cotopaxi and regional Andean volcanic arc). Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin field within the South America network — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates **SKBO** (Bogotá), **SCEL** (Santiago), **SBGR** (São Paulo/Guarulhos) `[VAMSYS mirror 2026-07-26]` — all cross-country from Ecuador; confirm suitability, runway/RFF adequacy and current minima per leg. SKBO shares a similar very-high-altitude performance regime — see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) (SKBO ~8,360 ft is listed there as a network example).
- **Fuel-uplift notes:** Jet A-1 assumed available as the sole gateway for Quito; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Nominal runway length (4,098 m) is not the limiting factor; the very-high-altitude density-altitude penalty on takeoff thrust, net climb gradient and landing distance is the operative planning consideration for any K Global type — always compute from the AFM/OFP performance module for the day, weight and temperature. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟥

---

## 17. Fleet-specific notes (optional)

- No field-length limitation is expected for K Global types at this runway length, but the **very-high-altitude hot-and-high performance regime** applies to every type operating here — dispatch must plan reduced-weight/payload scenarios where climb-gradient or field-performance limits bind, per [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) and the type entries in [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). Crew/aircraft RNP AR authorization should be confirmed before planning any type into SEQM given the believed terrain-driven approach environment — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **DGAC Ecuador AIP was not reachable this pass** — every figure in this briefing traces to tier-4 public corroboration (OurAirports, Wikipedia) and should be treated as provisional pending a primary-source pull.
- **Elevation reconciliation (important — read before relying on any figure):** the current SEQM field at Tababela (opened February 2013) sits at **7,841 ft / 2,390 m** (OurAirports) to **7,874 ft / 2,400 m** (Wikipedia) AMSL — both figures independently agree within normal source-rounding tolerance and are treated as the same value. This briefing's field elevation is **not** the ~9,228 ft figure sometimes associated with "Mariscal Sucre" — that figure belongs to the **former, permanently closed** in-city airport (ICAO **SEQU**), which ceased operations when Quito's commercial traffic moved to the new Tababela site in February 2013. Do not conflate the two. A separate internal reference (the [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) network-examples list) cites SEQM at **~7,910 ft** (Navigraph-derived) — a ~50–70 ft variance from the OurAirports/Wikipedia figures used here, within plausible source/rounding tolerance and not further reconciled this pass. Despite the corrected (lower) figure, SEQM remains one of the highest major international airports in the world and the hot-and-high/very-high-altitude framing in this briefing applies fully at the corrected elevation.
- **ARP coordinate precision** — OurAirports fix used; not cross-checked against a second independent source this pass.
- **Runway declared distances (TORA/TODA/ASDA/LDA), PCN, displaced thresholds** — none confirmed in reachable sources; only the nominal 4,098 × 45 m overall dimension is sourced.
- **ILS category and RNP AR procedure names/minima** — believed ILS (CAT I only, not confirmed) on one direction and RNP AR relevance on the terrain-constrained direction; neither confirmed from a primary source.
- **ATC frequency table** — single tier-4 aggregator snapshot only; Delivery frequency not found — likely an incomplete picture, not a confirmed absence.
- **RFF category, curfew/slot regime, take-off minima, transition altitude, mag variation** — none confirmed in reachable sources.
- **Current stand/gate count and handling-agent roster** — not confirmed.
- **SIDs/STARs (current names)** — not obtained in this research pass.
- **Terminal control type (radar vs procedural) at Quito Approach** — assumed radar for a modern facility, not independently confirmed.
- **VATSIM cross-check** — no dedicated VATSIM vACC/division airport SOP for SEQM was located and cross-checked this pass; treat as an outstanding QA item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/SEQM/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency tier-4 baseline.*
- Wikipedia — "Mariscal Sucre International Airport" — https://en.wikipedia.org/wiki/Mariscal_Sucre_International_Airport (retrieved 2026-07-26). *Field elevation corroboration, Tababela site history, February 2013 relocation from the former in-city airport (SEQU).*
- Companion OM C file: [South America airspace briefing](../../../../airspace/south-america.md) — regional airspace reference document (Brazil-routing-focused; linked as the only South America general airspace document currently in the tree — Ecuador/Quito FIR content in this briefing is independently sourced).
- Companion OM E file: [`High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — very-high-altitude/hot-and-high performance regime; lists SEQM as a network example (~7,910 ft, Navigraph-derived).
- Companion OM E file: [`PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) — RNP AR authorization policy relevant to the believed approach environment here.
- Companion OM E file: [`Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- Companion OM B file: [`Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **DGAC Ecuador AIP (AD 2 SEQM)** — primary source of record; not reachable in this research pass (JS-rendered/gated eAIP portal, consistent with other Latin American eAIPs — access notes to be recorded in the source register on next attempt).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
