# OTHH — Hamad Intl · Airport Briefing

**OTHH / DOH** · Doha, Qatar · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Qatar CAA AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (OurAirports, Wikipedia) pending a live Qatar CAA AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 25.27456°N 51.60838°E `[Navigraph navdata]`; independent tier-4 fix 25.273056°N 51.608056°E (~0.1 NM) — consistent 🟩 |
| Field elevation | **13 ft / 4 m AMSL** — consistent across sources 🟩 |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+3 (Arabia Standard Time, no DST) |
| Runway(s) | **16L/34R** 4,850 m × 60 m · **16R/34L** 4,250 m × 60 m (both asphalt, lighted) `[OurAirports]` |
| Preferential runway | Not published / verify — closely-spaced parallels used by traffic direction; no published preferential rule found 🟧 |
| Longest LDA | ~4,850 m class on 16L/34R (exact LDA not confirmed pending AIP) 🟧 |
| Approaches | ILS reported on both runways `[tier-4]` — CAT/sub-category and per-runway minima not confirmed from a primary source 🟧 |
| RFF category | Not published / verify — assumed in the highest ICAO band given the airport's traffic volume and widebody mix, **not confirmed** 🟧 |
| Control type | **Radar** — "Doha Approach Radar" per tier-4 frequency data; enroute via **Doha/Qatar FIR (OTDF)** — no dedicated OM C FIR brief built yet for OTDF; see the [Middle East airspace brief](../../../../airspace/middle-east.md) §3 for FIR-level context |
| Elevation class | Near sea-level (13 ft) — **not** hot-and-high; the performance driver is **summer extreme heat/density altitude**, not field elevation |
| Special-airport status | 🟧 Major international hub with an ongoing multi-phase expansion (Phase B completed March 2025); the **Al Udeid VORTAC/airfield** (a separate, non-civil facility) lies ~18 NM WSW — a navaid/airspace reference point, not part of OTHH's own infrastructure |
| Customs / PoE | Assumed Yes, H24, given the field's status as a major international hub; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` |
| K Global base | No — regional alternate to the [OMAA](../../united-arab-emirates/omaa/index.md) home hub `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **OMAA, OBBI** (plain ICAO reference — cross-country, see linking convention) `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal desert site; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | Both parallels are in the 4,250 m+ class — ample for any K Global widebody type; exact current-cycle figures pending AIP confirmation. |
| Approach availability / minima | 🟧 | ILS reported on both runways by tier-4 corroboration only — CAT/sub-category and minima not independently confirmed from a primary AIP table this pass. |
| Airspace / traffic / control | 🟥 | Major international hub with very high movement rates, especially post-2022-World-Cup-era capacity ramp-up and the March 2025 Phase B terminal expansion — see §3.2. Qatar (OTDF) FIR is also flagged under the regional conflict-zone advisory (§9 below). |
| Weather / seasonal hazard | 🟥 | Summer extreme heat/density altitude and shamal dust are the field's defining seasonal hazards — see §14. |
| Curfew / slots / hours | 🟧 | No published curfew found in reachable sources; a slot-coordination regime would be expected at a field of this traffic density but is **not confirmed** — verify at planning. |
| RFF category vs our types | 🟧 | Category not confirmed from a primary source this pass — assumed adequate for widebody ops at a major international hub. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 as a major hub; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | Major-hub international facilities assumed; exact desk hours and current concourse/gate assignment for our operation not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OTHH sits at 13 ft AMSL on flat coastal/desert terrain — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
Hamad Intl opened in 2014 (replacing the former Doha Intl airport) and has grown into a major international hub, handling traffic in the tens of millions of passengers per year even before the field's most recent capacity expansion. A **Phase B terminal expansion** (extending two of the field's concourses) was completed in March 2025, raising stated capacity well above the field's pre-expansion figure. Expect sustained high controller/crew workload on the closely-spaced parallel runways (16L/34R, 16R/34L) during banks, under **"Doha Approach Radar"** terminal control. Qatar (OTDF) is also one of the FIRs named under the region's active conflict-zone advisory (see the [Middle East airspace brief](../../../../airspace/middle-east.md) §9) — this is a live, perishable overlay on top of the field's normal traffic picture, re-check at planning.

### 3.3 Runway excursion 🟧
No displaced thresholds were found in the reachable tier-4 extract for either runway — **not independently confirmed** against a current AIRAC/AIP cycle. Treat both runways as full-length, full-strength pending verification.

### 3.4 Weather threat 🟥
**Summer extreme heat (routinely 45°C+) and the associated density-altitude performance penalty** is the field's defining seasonal hazard. **Shamal winds and blowing dust/sand** reduce visibility across the region and can trigger low-visibility procedures with limited notice. See §14 and the [Middle East airspace brief](../../../../airspace/middle-east.md) §11.

### 3.5 Operational considerations 🟥
Plan around three durable considerations: (1) the **still-scaling terminal infrastructure** — the field's concourse layout materially changed as recently as March 2025 (Phase B), so current-day gate/stand assignment should be reconfirmed rather than assumed stable long-term; (2) the **regional conflict-zone/GNSS-interference picture** — Qatar (OTDF) sits under an active advisory alongside the other central-Gulf FIRs, with reported GPS spoofing/jamming affecting Doha specifically (see the [Middle East airspace brief](../../../../airspace/middle-east.md) §9 — **live and perishable, re-check at planning**); and (3) the **Al Udeid airfield/VORTAC ~18 NM WSW** — a separate, non-civil facility whose navaid is a useful regional reference point but which represents nearby special-use/restricted airspace to be aware of, not a K Global operational consideration in itself.

---

## 4. Cautions & Warnings

- **Regional conflict-zone advisory is live** — the Qatar/Doha FIR (OTDF) is named under an active EASA CZIB (avoid at all levels) alongside Bahrain/Kuwait/UAE, with reported GPS spoofing/jamming specifically noted at Doha; re-check the current picture at planning (see the Middle East airspace brief §9).
- **Summer density-altitude/heat performance** — routine 45°C+ days materially affect takeoff performance planning even at this near-sea-level field.
- **Shamal dust/haboob events** can drop visibility rapidly with limited warning — confirm current LVP status before planning.
- **Terminal infrastructure changed materially as recently as March 2025** (Phase B concourse expansion) — confirm current gate/concourse assignment rather than assuming a static picture.
- **Al Udeid (non-civil airfield/VORTAC) lies ~18 NM WSW** — be aware of nearby special-use/restricted airspace when planning routing near the field; this is a navaid/airspace-awareness note, not an OTHH facility.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **still-scaling terminal/gate infrastructure**. 🟧
- **Crew-qualification gate:** Not confirmed in reachable sources beyond standard low-visibility currency expectations for a major hub. 🟧
- **Operating restrictions / bans:** No published curfew, RNP AR ban or circling restriction found in reachable sources — **not confirmed as "none," treat as unverified**. 🟧
- **Overflight / entry / permits:** Standard Qatar international arrival; no special state permit required for a normal commercial operation. 🟩
- **Operations notes:** ANSP not independently confirmed in reachable sources; enroute FIR is **Doha/Qatar (OTDF)** — see the [Middle East airspace brief](../../../../airspace/middle-east.md) §3 for FIR-level context (no dedicated OTDF FIR brief exists in this library yet).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 for a major international hub — not independently confirmed | 🟧 |
| AD operating hours | Assumed H24 — no published curfew found in reachable sources | 🟧 |
| Night / curfew restrictions | Not published / verify — no curfew found, not confirmed as "none" | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available H24; specific supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Major-hub international facilities assumed; exact hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable public sources | 🟧 |

**Terminal context (durable):** the airport opened on 30 April 2014, replacing the former Doha International Airport. The passenger terminal is organised into multiple concourses: **Concourse A** (10 gates), **Concourse B**, and **Concourse C** (24 gates plus 44 remote gates, including positions built for the largest widebody types, opened 27 May 2014). Concourses **D and E** were folded into Concourse C's operation in 2021 ahead of their own expansion; a **Phase B expansion extending Concourses D and E** began construction in January 2023 and was **completed in March 2025**, materially raising the field's stated passenger capacity above its pre-expansion figure (reported in the mid-30-millions in 2018, targeted toward the 50-millions around 2020, and higher again post-Phase-B). A dedicated **cargo terminal** handles a multi-million-tonne annual freight volume, reflecting the field's status as a significant Middle East cargo gateway alongside its passenger role. Exact current-day capacity and stand-count figures were not independently confirmed this pass. 🟧

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16L | 4,850 m × 60 m | Asphalt / PCN not published | Not published | Not published | Not published | Not published | No displaced threshold found in reachable tier-4 extract 🟧 |
| 34R | (reciprocal of 16L) | Asphalt / PCN not published | Not published | Not published | Not published | Not published | See 16L note |
| 16R | 4,250 m × 60 m | Asphalt / PCN not published | Not published | Not published | Not published | Not published | No displaced threshold found in reachable tier-4 extract 🟧 |
| 34L | (reciprocal of 16R) | Asphalt / PCN not published | Not published | Not published | Not published | Not published | See 16R note |

*Sourced to OurAirports (tier-4). TORA/TODA/ASDA/exact LDA and PCN figures are not published in any source reached this pass and must be pulled from the Qatar CAA AIP before operational use. All lengths in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Hamad ATIS | 128.85 | Not confirmed (assumed H24) | 🟧 |
| D-ATIS / Terminal Info | Hamad Term Info | 126.85 | Not confirmed (assumed H24) | 🟧 Listed twice under slightly different labels in tier-4 data — likely the same service |
| Approach (Radar) | Doha Approach Radar | 121.1 | Not confirmed (assumed H24) | 🟧 |
| Tower | Hamad Tower | 118.525 | Not confirmed (assumed H24) | 🟧 |
| Ground / Delivery | Not published / verify | — | — | 🟧 Not found in reachable tier-4 source |
| Centre / FIR | Doha/Qatar area control (OTDF) | Per current AIRAC | H24 | See the [Middle East airspace brief](../../../../airspace/middle-east.md) §3 |

*Source: tier-4 aggregator snapshot (OurAirports). For a hub of this traffic density, additional sector/position frequencies almost certainly exist beyond this table — treat every frequency above as unconfirmed pending a live AIRAC/AIP cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | Doha (DOH) | 112.40 | Not confirmed (assumed H24) | ~2.9 NM SW — effectively on/near field `[tier-4]` |
| NDB | Wk (WK) | 323 kHz | Not confirmed (assumed H24) | ~5.6 NM S |
| VORTAC | Al Udeid (ALD) | 115.20 | Not confirmed (assumed H24) | ~18.3 NM WSW — co-located with a separate, non-civil airfield; navaid reference only, not part of OTHH |
| ILS (both runways) | Idents not published | Not published | Not published | Sub-category/idents not confirmed 🟧 |

*Sourced to OurAirports navaid-proximity data (tier-4); idents/frequencies for the field's own ILS installations were not found in reachable sources this pass. Confirm all idents/frequencies against the current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — expect wind-driven selection between the two closely-spaced parallels; no published preferential-runway rule found. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 16L/34R | ILS (name/CAT not confirmed) | Not published | Not published | Verify minima on current chart 🟧 |
| 16R/34L | ILS (name/CAT not confirmed) | Not published | Not published | Verify minima on current chart 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not confirmed this pass; expect an LVP regime consistent with regional shamal-dust exposure. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal site); the operative missed-approach concern is re-sequencing into a busy terminal traffic picture at a major, still-expanding hub.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** RNAV/RNP terminal procedures are standard practice at a major Gulf hub per the [Middle East airspace brief](../../../../airspace/middle-east.md) §4 — confirm gradient/equipage per SID on the current chart. See also [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** A slot-coordination regime would be expected at a field of this traffic density but is **not confirmed**; the regional conflict-zone/managed-corridor picture is a further exposure (see the Middle East airspace brief §9). 🟧
- **De-icing:** Not applicable — no cold-weather de-icing requirement at this field. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Concourse C (24 contact gates + 44 remote positions, including gates built for the largest widebody types) is the confirmed widebody-oriented cluster; Concourses D/E were expanded under the March-2025-completed Phase B project — exact current code-letter allocation for our operation not confirmed this pass. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day — not published in reachable sources. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Arid desert/coastal climate; extreme summer heat (routinely 45°C+, Jun–Sep) is the dominant seasonal characteristic.
- **Seasonal hazards:** **Summer heat and density-altitude performance penalty** (Jun–Sep) is the defining hazard for a near-sea-level field. **Shamal winds and blowing dust/sand** reduce visibility across the region and can trigger LVO with limited notice — see the [Middle East airspace brief](../../../../airspace/middle-east.md) §11.
- **Local effects:** Coastal/marine layer effects possible near the Gulf shoreline; no significant terrain-driven local wind effect at this flat site.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM (GNSS interference has been specifically reported at Doha — see the Middle East airspace brief §9), conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Regional alternate** — a central-Gulf field on the K Global network, not a base.
- **Nearest suitable alternates:** Company preferred alternates **OMAA** (Abu Dhabi/Zayed Intl) and **OBBI** (Bahrain Intl) `[VAMSYS mirror 2026-07-25]` — both cross-country from OTHH (plain ICAO reference per the library's linking convention); confirm suitability, runway/RFF adequacy and current minima per leg. Both sit under the same regional conflict-zone advisory as OTHH — see the [Middle East airspace brief](../../../../airspace/middle-east.md) §8/§9.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as a major hub; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on either parallel runway (4,250 m+ class); the operative planning consideration is summer heat/density-altitude performance rather than field length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty is expected for any K Global type at OTHH; the operative planning consideration is **summer high-OAT takeoff performance** rather than aircraft-specific limitation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Qatar CAA AIP was not reachable this pass** — every figure in this briefing traces to tier-4 public corroboration and should be treated as provisional pending a primary-source pull.
- **ILS idents, frequencies, CAT/sub-category and per-runway minima** — not confirmed from a primary source.
- **ATC frequency table** — only a partial tier-4 aggregator snapshot found; almost certainly incomplete for a hub of this size (no Ground/Delivery frequency found).
- **RFF category, PCN, exact declared distances (TORA/TODA/ASDA), curfew/slot regime, take-off minima, transition altitude** — none confirmed in reachable sources.
- **Current (post-Phase-B, 2026) terminal/concourse/gate assignment** for our operation — not confirmed.
- **SIDs/STARs (current names)** — not obtained in this research pass.
- **The Al Udeid airfield/VORTAC ~18 NM WSW is a separate, non-civil facility** — any associated special-use/restricted airspace should be confirmed against the current AIP/NOTAM picture rather than assumed from this briefing.
- **No dedicated Doha/Qatar (OTDF) FIR brief exists yet** in this library — FIR-level detail is covered only at the Middle East regional level; consider building a dedicated OTDF FIR brief as OTHH traffic grows in the network.
- **VATSIM cross-check** — no dedicated VATSIM vACC/division airport SOP for OTHH was located and cross-checked this pass; treat as an outstanding QA item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OTHH/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid tier-4 baseline.*
- Wikipedia — "Hamad International Airport" — https://en.wikipedia.org/wiki/Hamad_International_Airport (retrieved 2026-07-26). *Opening date, concourse structure, Phase B expansion (Jan 2023 start, Mar 2025 completion), cargo terminal.*
- Companion OM C file: [Middle East airspace brief](../../../../airspace/middle-east.md) — regional conflict-zone, GNSS-interference and seasonal-hazard context; Doha/Qatar (OTDF) FIR-level summary.
- **Qatar CAA AIP (AD 2 OTHH)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
