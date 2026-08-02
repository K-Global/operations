# OPKC — Jinnah Intl · Airport Briefing

**OPKC / KHI** · Karachi, Pakistan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. **AIP Pakistan (Pakistan Civil Aviation Authority / eAIP)** is the source of record for this field; a publicly reachable Pakistan eAIP portal was not located in this research pass, so public tier-4 corroboration (OurAirports, SkyVector, Wikipedia, contemporary Pakistani press) is used throughout and flagged accordingly — treat every durable figure as pending a tier-1 AIP cross-check. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 24°54′24″N 67°09′39″E (24.906500, 67.160797) `[OurAirports; Wikipedia infobox]` |
| Field elevation | **100 ft / 30 m AMSL** `[OurAirports; SkyVector; Wikipedia — all agree]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+5 (PKT)** — no daylight saving observed |
| Runway(s) | **07L/25R** — recently reconstructed/extended, publicly reported at **ICAO Code 4F, ~11,500 ft (~3,505 m), A380-capable** following an 18-month, ~Rs8.35 billion redevelopment completed **19 Feb 2026**; the pre-upgrade published dimension was **10,500 ft × 151 ft (3,200 × 46 m)**, concrete, lighted `[OurAirports/SkyVector, last updated 2025-04-07 — predates project completion]` 🟧. **07R/25L** — **11,155 ft × 148–151 ft (3,400 × 45–46 m)**, concrete, lighted, unaffected by the 07L/25R project `[OurAirports; SkyVector]` |
| Preferential runway | Not published / verify — wind/traffic driven between the 07- and 25-directions on both parallels; confirm current allocation logic 🟧 |
| Longest LDA | Not published / verify — current-AIRAC declared-distance table not obtained this pass; the reconstructed 07L/25R is publicly reported as the longer runway post-upgrade (~11,500 ft) but no declared-distance breakdown (TORA/TODA/ASDA/LDA) was found 🟧 |
| Approaches | ILS reported on **RWY 25R and 25L** in one reachable source, itself citing a 2015-archived extract — **stale, unconfirmed against current AIRAC** 🟧; on-field VOR (KC 112.10) and NDB (KC 271) support non-precision approaches `[SkyVector]` |
| RFF category | Not published / verify 🟧 |
| Control type | **Radar** — Karachi Approach/Tower on the field `[OurAirports/SkyVector frequencies]`; **Karachi (OPKR) FIR** en route — see [Asia airspace general brief](../../../../airspace/asia.md) |
| Elevation class | Near sea-level (100 ft) — **not** terrain-hot-and-high, but the field is a genuine **high-temperature performance driver**: Karachi summer temperatures regularly exceed 40°C and peaked at **44.8°C air temperature** in the deadly June 2015 heatwave — density-altitude/derate planning applies despite the low field elevation, see §3.4/§3.5 |
| Special-airport status | Recent major runway reconstruction (07L/25R, completed Feb 2026) — construction-status watch item; **documented history of ad hoc, security-driven flight suspensions and airspace restrictions** during India–Pakistan regional tension (e.g. a flight-operations suspension "until midnight," reported May 2025) — not a standing curfew, but a real and recurring live-risk pattern — see §5/§6 🟥 |
| Customs / PoE | **Yes** — tagged as a Customs/PoE field `[OurAirports]`; hours not independently confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **NO** `[VAMSYS mirror 2026-07-26]` — destination / alternate field within the network, not a company base |
| Company preferred alternates | **OMDB** (Dubai, UAE) and **OERK** (Riyadh, Saudi Arabia) `[VAMSYS mirror 2026-07-26]` — both cross-country from Pakistan; distances not independently sourced this pass 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Indus-delta coastal plain; Arabian Sea immediately south. No close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟧 | 07L/25R was reconstructed/extended to a publicly reported ICAO Code 4F (~11,500 ft) in Feb 2026; the widely mirrored tier-4 figures (OurAirports/SkyVector, last updated April 2025) predate completion and are **stale**. No declared-distance (TORA/TODA/ASDA/LDA) breakdown was obtained this pass — see §7/§18. |
| Approach availability / minima | 🟧 | ILS on 25R/25L reported only via a source citing a 2015-archived extract; not confirmed against current AIRAC. On-field VOR/NDB support non-precision approaches. |
| Airspace / traffic / control | 🟥 | Karachi (OPKR) FIR/TMA is radar-controlled, but the field sits near the **India–Pakistan border GNSS-interference hotspot** flagged in the Asia general airspace brief, and has a documented recent history of **ad hoc, security-driven airspace/flight restrictions** during regional tension (§5/§6). |
| Weather / seasonal hazard | 🟥 | **Extreme pre-monsoon heat** (2015 heatwave peak 44.8°C, among the deadliest on record) driving density-altitude/derate planning; SW monsoon convection (Jul–Sep); low-frequency-but-not-zero Arabian Sea tropical cyclone risk (Cyclone Asna, Aug 2024, the first monsoon-season system to reach the Sindh coast since 1961) — see §14. |
| Curfew / slots / hours | 🟧 | No standing curfew confirmed in reachable sources. However, a documented ad hoc flight-operations suspension (until midnight, reported May 2025) during India–Pakistan tension, and a 2025 NOTAM directive requiring prior coordination before operating in due to limited parking, show this is a genuine live-risk pattern rather than a permanent schedule constraint — see §6. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 expected at a major international gateway; supplier/hours not independently confirmed. |
| Customs / handling / security | 🟥 | PoE confirmed, but the field carries a genuine security profile: a June 2014 Taliban-linked attack on the airport perimeter (28 killed, including all 10 attackers) and an October 2024 Baloch Liberation Army bombing near the airport (2 killed, 8 wounded) — see §3.5/§5. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
OPKC sits at 100 ft AMSL on the flat Indus-delta coastal plain, with the Arabian Sea immediately to the south. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat at this field. (The Hindu Kush/Karakoram high-terrain belt referenced in the Asia general airspace brief lies well north of Karachi and is not a factor for this field specifically.)

### 3.2 Airborne conflict / traffic 🟧
Karachi Approach/Tower provide radar service in the **Karachi (OPKR) FIR**; see the [Asia airspace general brief](../../../../airspace/asia.md), which lists Karachi (OPKR) among the region's continental FIRs and flags the **India–Pakistan border GNSS-interference hotspot** as a live regional caution (§9 of that brief). No OPKC-specific traffic-density or procedural detail was obtained this pass — confirm current sequencing practice locally.

### 3.3 Runway excursion 🟧
Both runways are long by any measure (07R/25L ~11,155 ft; 07L/25R publicly reported at ~11,500 ft post-upgrade), so excursion risk is not driven by a short-field constraint. The genuine open item is that **no current-AIRAC declared-distance table was obtained** for either runway this pass — confirm TORA/TODA/ASDA/LDA, any displaced threshold, and current PCN before planning a near-max-weight operation, particularly on the newly reconstructed 07L/25R where public figures may not yet reflect the finished works.

### 3.4 Weather threat 🟥
Karachi's defining weather threat is **extreme pre-monsoon heat**, not terrain or fog. The city's June 2015 heatwave reached a peak air temperature of **44.8°C** (heat index approaching 66°C at the peak, driven by very high humidity and stalled sea-breeze circulation), and was among the ten deadliest heatwaves in recorded history (1,271 fatalities citywide). The heatwave's proximate cause — an Arabian Sea low-pressure system cutting off the normal cooling sea breeze, compounded by a high-pressure ridge over Balochistan/Sindh — is a recognised regional dynamic, not a one-off: expect recurring severe pre-monsoon heat events (typically Apr–Jun) at this field. Separately, the **SW monsoon (broadly Jul–Sep)** brings convective rain and localised flooding risk to Karachi. Tropical cyclones over the Arabian Sea are a genuine but **low-frequency** hazard for the Sindh coast — the primary windows are pre-monsoon (Apr–Jun) and post-monsoon (Oct–Dec); a monsoon-season cyclone is rare (independently estimated at roughly a 1–2% chance per depression), but **not zero** — Cyclone Asna (Aug 2024) was the first monsoon-season cyclonic system to threaten the Sindh coast since 1961, bringing rough seas and heavy rain to Karachi. See §14.

### 3.5 Operational considerations 🟥
Four durable items shape planning at OPKC: (1) **high-OAT/density-altitude performance planning** — despite the field's low (100 ft) elevation, Karachi's extreme pre-monsoon heat is a genuine derate driver for a fully loaded departure; brief accordingly and link to fleet performance data (see §17, [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md)); (2) the **recent major reconstruction of RWY 07L/25R** (an ~18-month, ~Rs8.35 billion project completed 19 Feb 2026, reportedly bringing the runway to ICAO Code 4F/A380-capable standard) — treat all pre-2026 public dimension data for this runway as potentially stale and confirm current declared distances; (3) a **genuine, documented security profile** — a June 2014 Taliban-linked attack on the airport perimeter and an October 2024 bombing near the airport attributed to the Baloch Liberation Army are on the public record, and the field has seen ad hoc, security-driven flight suspensions and airspace restrictions during periods of India–Pakistan tension (e.g. a reported flight-operations suspension "until midnight" in May 2025) — these are live/perishable risk items, not standing restrictions, and must be re-checked against current security bulletins and NOTAMs at planning; (4) **overflight/entry-permit regime** — Pakistan requires an advance overflight/landing permit process for foreign operators (commonly cited as requiring an authorised local agent, roughly 48 hours' advance notice, and a roughly 72-hour permit validity window with revalidation on any routing change) — confirm the current process and lead time for the operator before scheduling into or through Pakistani airspace. See §5.

---

## 4. Cautions & Warnings

- **RWY 07L/25R was recently reconstructed/extended (completed Feb 2026, reportedly to ICAO Code 4F/A380-capable)** — public tier-4 figures (OurAirports/SkyVector) predate completion; confirm current declared distances and PCN before planning a near-max-weight operation.
- **Extreme pre-monsoon heat is a real derate driver** — Karachi has recorded air temperatures near 45°C (June 2015); plan performance conservatively on any hot-season departure despite the field's low elevation.
- **Documented security incidents on/near the airport** (2014 perimeter attack; October 2024 bombing) and a recent history of **ad hoc security-driven flight suspensions/airspace restrictions** during India–Pakistan tension — check live security bulletins and NOTAMs before any operation, not just routine wx/NOTAM items.
- **India–Pakistan border GNSS-interference hotspot** is flagged in the [Asia airspace general brief](../../../../airspace/asia.md) — relevant to any RNP-based procedure into or out of OPKC; cross-check DME/DME/IRU fallback per [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **ILS availability quoted for 25R/25L traces to a 2015-archived tier-4 extract** — treat as unconfirmed pending a current-AIRAC chart check.
- Several figures in this brief (mag variation, RFF category, PCN, declared distances, SID/STAR names, ATS/customs hours) are **not published / verify** — see §18.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **high-OAT performance consideration** and the **security/overflight-permit context** below. 🟧
- **Crew-qualification gate:** None identified beyond a general high-temperature performance briefing for hot-season departures. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction identified in reachable sources; construction-related runway/taxiway NOTAMs are plausible in the aftermath of the 2024–2026 RWY 07L/25R redevelopment — verify current NOTAMs. 🟧
- **Overflight / entry / permits:** 🟥 Pakistan requires an advance **overflight/landing permit** for foreign operators, commonly cited as needing an authorised local permit agent, on the order of **48 hours' advance notice**, and a permit validity window on the order of **72 hours** with revalidation required on any change to routing/entry-exit point `[tier-4 permit-service sources — confirm against PCAA/Air Transport Department requirements directly]`. Separately, the India–Pakistan border area has a history of periodic airspace restrictions/closures during bilateral tension (most recently documented episodes in 2019 and 2025) — confirm the live picture at planning.
- **Operations notes:** Airport operator — **Pakistan Airports Authority (PAA)**, established as a distinct entity on **9 August 2024** when the former Pakistan Civil Aviation Authority (PCAA) was split into three bodies: a reconstituted **PCAA** (regulatory — flight standards, licensing, airspace/aerodrome regulation), the **PAA** (commercial airport operations/infrastructure), and the **Bureau of Air Safety Investigation (BASI)**. Some public sources (including older encyclopaedic material) still describe the airport as "PCAA-managed," reflecting the pre-August-2024 structure — treat "PCAA" references in older material as historical. 🟧 A widebody maintenance facility (the **Ispahani Hangar**) operates on the field, indicating established heavy-maintenance ground infrastructure.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — expected H24 given the field's international-gateway traffic volume, unconfirmed | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | No standing curfew confirmed. Documented **ad hoc security-driven suspension** (flight operations reportedly suspended until midnight, May 2025, amid India–Pakistan regional tension) and a separate 2025 NOTAM directive requiring **prior coordination before operating in, due to limited aircraft parking space** `[tier-4 Pakistani press]` — treat as a live-risk pattern, not a routine constraint | 🟥 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 expected at a major international gateway; supplier/hours not independently confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Confirmed international Port of Entry `[OurAirports #customs tag]`; specific desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed for a K Global operation; Pakistan International Airlines (PIA) maintains a large ground/engineering presence on the field generally | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07L/25R | **Reportedly ~11,500 ft (~3,505 m) post-upgrade** (ICAO Code 4F, A380-capable, per multiple 2026 Pakistani press reports of an 18-month, ~Rs8.35 billion reconstruction completed 19 Feb 2026); **pre-upgrade published figure 10,500 ft × 151 ft (3,200 × 46 m)** `[OurAirports/SkyVector, last updated 2025-04-07 — predates completion]` | Concrete, lighted; PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | 🟥 Major open item — no current-AIRAC declared-distance table obtained; treat the pre-upgrade tier-4 dimension as **stale** and confirm before any near-max-weight planning |
| 07R/25L | 11,155 ft × 148–151 ft (3,400 × 45–46 m) — width varies slightly between sources (OurAirports 151 ft vs SkyVector 148 ft) 🟧 | Concrete, lighted (OurAirports); PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Unaffected by the 07L/25R reconstruction project; extended to its current length in a 1994 airport-expansion programme per Wikipedia (from a reported 7,500 ft) |

*Source: OurAirports (https://ourairports.com/airports/OPKC/runways.html, retrieved 2026-07-26); SkyVector (https://skyvector.com/airport/OPKC, retrieved 2026-07-26); Wikipedia "Jinnah International Airport" (retrieved 2026-07-26) for the historical 1994 extension and the 2024–2026 reconstruction. No current-AIRAC AD 2.13 declared-distance table was located this pass — all TORA/TODA/ASDA/LDA cells are flagged pending verification. All distances as published by the respective source; unit conversions shown as given.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Karachi ATIS | 126.7 | Not published 🟧 | `[OurAirports; SkyVector]` |
| Delivery | Not published / verify | — | — | 🟧 |
| Ground | Karachi Ground | 121.6 | Not published 🟧 | `[OurAirports]` |
| Tower | Karachi Tower | 118.3 | Not published 🟧 | `[OurAirports; SkyVector]` |
| Approach | Karachi Approach | 125.5 | Not published 🟧 | `[OurAirports; SkyVector]` |
| Centre / FIR | Karachi (OPKR) FIR | Per current AIRAC | H24 (typical for a continental FIR) — unconfirmed | See [Asia airspace general brief](../../../../airspace/asia.md) |

*Source: OurAirports frequencies page (https://ourairports.com/airports/OPKC/frequencies.html, retrieved 2026-07-26); SkyVector (retrieved 2026-07-26), which corroborates the same four frequencies. Neither source publishes operating hours per frequency — treat as 🟧 pending a current-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | KC (Karachi) | 112.10 | Not published 🟧 | On/near-field VOR `[SkyVector]` |
| VOR | MR (Karachi) | 112.40 | Not published 🟧 | ~12 NM from the field `[SkyVector]` |
| NDB | KC (Karachi) | 271 | Not published 🟧 | On/near-field NDB `[SkyVector]` |
| NDB | KF (Gharo) | 296 | Not published 🟧 | ~23 NM from the field `[SkyVector]` |
| NDB | KA (Cape Monze) | 244 | Not published 🟧 | ~28 NM from the field `[SkyVector]` |
| NDB | KD (Hyderabad) | 223 | Not published 🟧 | ~70 NM from the field `[SkyVector]` |
| ILS | Not confirmed | — | — | One reachable source (citing a 2015-archived extract) reports ILS CAT I on RWY 25R and 25L — **unconfirmed against current AIRAC**, idents/frequencies not obtained this pass 🟧 |

*Source: SkyVector (https://skyvector.com/airport/OPKC, retrieved 2026-07-26) for VOR/NDB idents, frequencies and approximate ranges/bearings; Wikipedia "Jinnah International Airport" (retrieved 2026-07-26), itself citing an archived worldaerodata.com extract (2015), for the ILS claim — treated as stale/tier-4-of-tier-4 and flagged accordingly.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — expect wind/traffic-driven selection between the 07- and 25-directions across the two parallel runways. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 25R | Reported ILS (CAT I, unconfirmed) `[stale tier-4 source]`; VOR/NDB via on-field KC | Not published | Not published | 🟧 verify current AIRAC |
| 25L | Reported ILS (CAT I, unconfirmed) `[stale tier-4 source]`; VOR/NDB via on-field KC | Not published | Not published | 🟧 verify current AIRAC |
| 07L | Not confirmed — VOR/NDB via on-field KC plausible | Not published | Not published | 🟧 verify current AIRAC |
| 07R | Not confirmed — VOR/NDB via on-field KC plausible | Not published | Not published | 🟧 verify current AIRAC |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** No LVP trigger data confirmed; Karachi's coastal location can produce winter/early-morning haze or fog on occasion, but no field-specific frequency data was found — treat as a minor, unquantified seasonal possibility rather than a defining hazard (contrast with the heat/monsoon/cyclone items in §3.4). 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal plain); the operative missed-approach concern is re-sequencing within Karachi Approach's traffic flow and awareness of any construction-related runway/taxiway NOTAM in the aftermath of the 07L/25R reconstruction.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass. Given the **India–Pakistan border GNSS-interference hotspot** flagged in the Asia general airspace brief, confirm RNP integrity monitoring and DME/DME/IRU fallback per [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** Published per AIP — not obtained this pass. 🟧
- **Start-up / push-back:** Coordinated via Karachi Ground (121.6); cross-bleed/APU notification procedure not confirmed. 🟧
- **ATC slot / CTOT & clearance:** No formal IATA slot-coordination level or ATFM/CTOT program confirmed in reachable sources. A 2025 NOTAM directive requiring **prior coordination before operating in, due to limited aircraft parking space**, indicates a genuine practical capacity constraint distinct from a formal slot regime — confirm current status at planning. 🟧
- **De-icing:** **NIL** — Karachi's climate does not present a freezing-conditions requirement; not a planning consideration at this field. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources this pass. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** The main international/domestic complex (the "Jinnah Terminal," opened 1992) connects to the **Jinnah East Satellite** (international operations, 8 gates/jetbridges) and **Jinnah West Satellite** (domestic operations, 8 gates/jetbridges, with some international flexibility) `[Wikipedia]`. Total apron parking is reported at roughly 266,000 m², accommodating 42 aircraft (12 via airbridge/jetway) plus 30 remote/hardstand positions `[Wikipedia]`. Widebody international service (Emirates, Qatar Airways, Etihad, Saudia, Turkish Airlines and others) confirms Code E capability generally; exact stand/code-letter assignment for a K Global operation is not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed; the taxiway system is reported able to handle up to 12 aircraft simultaneously `[Wikipedia]` — a general capacity indicator, not a routing detail.
- **Hot spots / tight taxiways:** Not confirmed this pass; construction-related closures/restrictions are plausible in the immediate aftermath of the 07L/25R reconstruction (completed Feb 2026) — verify current NOTAMs. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Hot, arid-to-semi-arid coastal climate; a daily sea breeze off the Arabian Sea normally moderates afternoon temperatures for much of the year. Prevailing wind/wind-rose data not independently confirmed this pass. 🟧
- **Seasonal hazards:** **Extreme pre-monsoon heat (broadly Apr–Jun)** is the field's defining weather threat — the June 2015 Karachi heatwave reached a peak air temperature of **44.8°C**, among the deadliest heatwave events in recorded history (1,271 fatalities), driven by a stalled Arabian Sea low blocking the normal sea breeze plus a high-pressure ridge over Balochistan/Sindh and an urban-heat-island effect; treat recurring severe pre-monsoon heat episodes as a live seasonal risk, not a one-off. The **SW monsoon (broadly Jul–Sep)** brings convective rain and localised flooding risk. Arabian Sea **tropical cyclones** are a genuine but low-frequency hazard, concentrated in the pre-monsoon (Apr–Jun) and post-monsoon (Oct–Dec) windows; a monsoon-season cyclone is rare (independently estimated at roughly 1–2% per depression) but demonstrably possible — Cyclone Asna (Aug 2024) was the first monsoon-season system to threaten the Sindh coast since 1961.
- **Local effects:** The sea breeze's normal cooling role — and its occasional, dangerous failure — is the key local dynamic to understand for hot-season planning at this field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, Pakistan Meteorological Department Tropical Cyclone Warning Centre advisories in season. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (especially any construction-related NOTAM tied to the recently completed 07L/25R reconstruction), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM (given the regional GNSS-interference caution), and any security-driven flow/airspace restriction NOTAM tied to regional (India–Pakistan) tension. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / alternate field** — OPKC is not a K Global base; it functions as a destination and potential alternate within the network. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **OMDB** (Dubai, UAE) and **OERK** (Riyadh, Saudi Arabia) `[VAMSYS mirror 2026-07-26]` — both cross-country from Pakistan, across the Arabian Sea/Gulf and the Arabian Peninsula respectively. Distances not independently sourced this pass — confirm suitability, runway/RFF adequacy and current minima per leg. 🟧
- **Fuel-uplift notes:** Jet A-1 expected at a major international gateway; supplier and hours not independently confirmed this pass. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md). 🟧
- **Range/perf flags for our fleet:** Field length is not expected to be limiting for any K Global type once current declared distances are confirmed (§7); the operative fleet-performance flag at OPKC is **high-OAT/density-altitude derate planning** in the pre-monsoon heat season, not runway length. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟥

---

## 17. Fleet-specific notes (optional)

- No field-length or field-elevation performance penalty is expected for any K Global type at OPKC once current declared distances are confirmed (§7/§18). The genuine fleet-relevant consideration is **high-OAT/density-altitude derate planning for hot-season (roughly Apr–Jun) departures**, given Karachi's documented extreme-heat climatology (§3.4/§14) — confirm type-specific performance against current OAT/weight at planning. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM B — Fleet Index`](../../../../../fleet/index.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **RWY 07L/25R post-upgrade declared distances and PCN** — publicly reported at ~11,500 ft / ICAO Code 4F following the Feb 2026 reconstruction, but no current-AIRAC AD 2.13 table was obtained; the widely mirrored tier-4 figures (10,500 ft) are pre-upgrade and stale.
- **RWY 07R/25L declared distances and PCN**, plus a minor width discrepancy between sources (151 ft vs 148 ft).
- **ILS availability on RWY 25R/25L** — sourced only to a 2015-archived tier-4 extract; not confirmed against current AIRAC. No ILS ident/frequency data obtained for any runway.
- **RFF category** — not published in any reachable source.
- **Magnetic variation, transition altitude/level, PCN nomenclature, ATS/AD operating hours, customs desk hours, fuel supplier/hours, handling agent(s)** — none confirmed in reachable sources.
- **SIDs/STARs (current names) and take-off minima** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Preferential-runway logic, taxi routing, hot spots, stand/gate assignment for a K Global operation** — not confirmed.
- **Overflight/landing permit lead time and process** — sourced to tier-4 permit-service pages, not the PCAA/Air Transport Department directly; confirm current requirements before scheduling.
- **Current security/airspace-restriction status** — the field has a documented recent history of ad hoc, security-driven flight suspensions and airspace restrictions during India–Pakistan tension; this picture is live and perishable and must be re-verified at planning, not treated as this brief's static snapshot.
- **VATSIM cross-check** — no OPKC-specific published pilot briefing/SOP distinct from general VATSIM Pakistan division materials was located this pass; treat as an incomplete cross-check.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/OPKC/ , /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway dimensions/surface, frequencies, PoE tag.*
- SkyVector — https://skyvector.com/airport/OPKC (retrieved 2026-07-26). *Coordinates, runway headings/threshold elevations, navaid idents/frequencies, ATC frequencies.*
- Wikipedia — "Jinnah International Airport" — https://en.wikipedia.org/wiki/Jinnah_International_Airport (retrieved 2026-07-26). *History, ownership/operator, terminal layout, apron/stand counts, the 1994 and 2024–2026 runway works, traffic statistics, security-incident history (2014, 2024).*
- Profit by Pakistan Today — "First Commercial Landing Successfully Conducted on Upgraded Runway 07L/25R at Jinnah International Airport, Karachi," 19 Feb 2026 — https://profit.pakistantoday.com.pk/2026/02/19/karachi-airport-certifies-main-runway-for-a380-operations-after-18-month-upgrade (retrieved 2026-07-26). *RWY 07L/25R reconstruction scope, cost, timeline, ICAO Code 4F/A380 capability.*
- The Nation — "Upgraded runway at Jinnah International Airport welcomes first overseas flight," 19 Feb 2026 — https://www.nation.com.pk/19-Feb-2026/upgraded-runway-jinnah-international-airport-welcomes-first-overseas-flight (retrieved 2026-07-26). *Corroborates the 07L/25R reconstruction completion.*
- Profit by Pakistan Today — "Civil Aviation Authority reorganised into three separate entities," 13 Aug 2024 — https://profit.pakistantoday.com.pk/2024/08/13/civil-aviation-authority-reorganised-into-three-separate-entities/ (retrieved 2026-07-26). *PCAA split into PCAA (regulatory) / Pakistan Airports Authority (operations) / BASI (investigation), effective 9 Aug 2024.*
- The Express Tribune — "Flight operations suspended at Karachi airport until midnight amid rising regional tensions," May 2025 — https://tribune.com.pk/story/2544731/karachi-airport-suspends-flights-until-midnight-amid-rising-regional-tensions (retrieved 2026-07-26); Profit by Pakistan Today, same event — https://profit.pakistantoday.com.pk/2025/05/08/flight-operations-suspended-at-karachi-airport-until-midnight-amid-security-concerns/ (retrieved 2026-07-26). *Documented ad hoc security-driven flight suspension.*
- Dawn.com — "Karachi endures 'hottest' period after 2015 heatwave" — https://www.dawn.com/news/1843043 (retrieved 2026-07-26); Britannica — "India-Pakistan heat wave of 2015" — https://www.britannica.com/event/India-Pakistan-heat-wave-of-2015 (retrieved 2026-07-26). *2015 Karachi heatwave peak temperature, fatalities, meteorological cause.*
- Dawn.com — "Sindh braces for rains as Cyclone Asna only 120km south of Karachi," Aug 2024 — https://www.dawn.com/news/1855716 (retrieved 2026-07-26); Geo News, same event — https://www.geo.tv/latest/561671-cyclone-threat-deep-depression-in-arabian-sea-200km-from-karachi (retrieved 2026-07-26). *Cyclone Asna as the first monsoon-season Arabian Sea cyclone to threaten Sindh since 1961.*
- VATSIM Pakistan — https://vatsim.pk/ (retrieved 2026-07-26). *Network-sim cross-check attempted; no OPKC-specific published pilot briefing/SOP distinct from general division material was located — partial cross-check only, not regulatory.*
- Companion OM C file: [Asia airspace general brief](../../../../airspace/asia.md) (Karachi (OPKR) FIR, India–Pakistan border GNSS-interference hotspot). **OM E**: [`PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) · [`Fuel Policy`](../../../../../flight-ops/fuel-policy.md). **OM B**: [`Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) · [`Fleet Index`](../../../../../fleet/index.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from territory AIP; K Global fields from live VAMSYS; 4-page pack. |
