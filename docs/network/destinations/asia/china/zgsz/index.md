# ZGSZ — Shenzhen Bao'an · Airport Briefing

**ZGSZ / SZX** · Bao'an District, Shenzhen, Guangdong, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public cross-check sources (AIP China / CAAC eAIP is subscription/registration-gated and was not reachable this pass); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 22°38′21″N / 113°48′38″E (22.6393, 113.8107) — public sources vary by up to ~0.5 NM (OurAirports vs SkyVector) 🟧 not cross-checked against a primary AIP figure |
| Field elevation | **13 ft / 4 m AMSL** — consistent across all reachable sources 🟩 |
| Mag variation | 🟧 **≈2–3° W** — a third-party chart reference reports "2°" (direction not independently confirmed); a 2026 secular-drift estimate gives ≈2.74° W. Not a sourced AIP figure — treat as indicative only |
| Time zone | **UTC+8 (China Standard Time)** — no daylight-saving observed anywhere in China |
| Runway(s) | **Three parallel-oriented runways** (all ≈154°/334° magnetic): **15/33** 3,400 × 45 m concrete (original, 1991) · **16L/34R** 3,800 × 60 m concrete ("West runway," opened 2011-07-26) · **16R/34L** 3,600 × 45 m concrete (**third runway, opened 2025-11-29** — 4F rating) 🟧 designators/lighting status not reconciled against a primary AIP chart — see §18 |
| Preferential runway | 🟧 Not published; the airport states the three-runway system supports **eight distinct operating modes** with "dual-directional" flow, but exact wind/traffic selection logic is not sourced |
| Longest LDA | 🟧 Not published — full physical length of 16L/34R (3,800 m) is the longest runway; treat as a planning proxy only, not a confirmed declared distance |
| Approaches | 🟧 **Not confirmed in reachable sources.** Given the field's fog/typhoon exposure a CAT I or better ILS environment on the two established runways (15/33, 16L/34R) is plausible but **not sourced**; approach-procedure publication status on the newly-commissioned 16R/34L is a live open item |
| RFF category | 🟧 **Not published / verify.** No primary or reliable public source found; a 4F-rated, wide-body, major-hub field would typically carry a high ICAO RFF category, but this is inference, not a sourced figure |
| Control type | **Radar** — one of the most congested terminal areas on Earth (Pearl River Delta 5-airport cluster); approach service publicly listed as **"Zhuhai Approach"** 🟧 (unconfirmed/unusual — verify against current AIRAC); en-route under **Guangzhou (ZGZU) ACC/FIR** — see [Asia airspace brief](../../../../airspace/asia.md) |
| Elevation class | Sea-level (13 ft) — **not** hot-and-high. The performance/reliability drivers here are **Pearl River Delta airspace congestion**, **typhoon season** and **winter radiation fog**, not density altitude |
| Special-airport status | Not operator-categorised in reachable sources. Standing crew-briefing items: **Pearl River Delta multi-airport TMA congestion**, **close proximity to Hong Kong (VHHH) airspace**, **typhoon season (~May–Nov)**, and the **newly-commissioned third runway** (§3/§5) |
| Customs / PoE | **Yes** — international arrivals hall, Terminal 3, level 2F; cargo side publishes 24-hour customs clearance, but passenger-side desk hours are not independently confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company alternates | **VHHH** (Hong Kong Intl — different jurisdiction/AIP authority, Hong Kong CAD) and **[ZGGG](../zggg/index.md)** (Guangzhou Baiyun) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Coastal/delta site at 13 ft; no close-in high terrain relevant to arrival, departure or missed-approach paths. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | All three runways (3,400–3,800 m) are ample for any K Global type; the newest runway (16R/34L, 3,600 m) is 4F-rated and built for large aircraft. |
| Approach availability / minima | 🟧 | Not confirmed in reachable sources — pull the current-AIRAC procedure list at planning; specific concern that the 3rd runway (commissioned Nov 2025) may still be building out its full approach suite. |
| Airspace / traffic / control | 🟥 | Field sits inside the **Pearl River Delta 5-airport cluster** (ZGSZ, ZGGG, VHHH, VMMC, ZGSD) — one of the most congested shared-airspace regions in the world; hard boundary onto Hong Kong (VHHK) FIR. See §3.2. |
| Weather / seasonal hazard | 🟥 | **Typhoon season (~May–Nov, peak Jul–Sep)** with direct South China Sea/coastal exposure — an active typhoon disrupted this very field within the past week of this brief's build (§14). Winter radiation-fog/haze season is a second, distinct hazard. |
| Curfew / slots / hours | 🟧 | No published night curfew found — cargo/customs operations are stated 24-hour; passenger-side ATS/curfew hours not independently confirmed. |
| RFF category vs our types | 🟧 | Not published — see §1. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major hub/cargo gateway; specific into-plane supplier/hours not confirmed (one tier-4 FBO-data source lists a single named provider — not verified for airline uplift). |
| Customs / handling / security | 🟧 | International arrivals hall confirmed (T3, 2F); exact passenger customs/immigration desk hours, and handling agent(s) for scheduled widebody service, not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ZGSZ sits at 13 ft AMSL on the east bank of the Pearl River estuary in the Pearl River Delta — flat, low-lying, reclaimed/coastal terrain with **no close-in high ground** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT from high ground is not the operative threat here. The historical accident record at this field (§4) is weather-driven, not terrain-driven.

### 3.2 Airborne conflict / traffic 🟥
ZGSZ is one of **five major airports packed into the Pearl River Delta** — Shenzhen Bao'an, Guangzhou Baiyun ([ZGGG](../zggg/index.md)), Hong Kong Intl (VHHH), Macau (VMMC) and Zhuhai Jinwan (ZGSD) — four of them within roughly a 50 km radius. This is a recognised, long-standing airspace-congestion problem: a **CAAC/Hong Kong CAD/Macau CAA Tripartite Working Group** (established 2004) produced a "Pearl River Delta Region Air Traffic Management Planning and Implementation Plan" (v2.0, 2007) adding handover points and routes specifically to manage Hong Kong–Guangzhou/Shenzhen overflight and cross-border traffic, and coordination between Hong Kong and Shenzhen specifically has historically lagged behind the region's surface-transport integration. ZGSZ sits directly across the hard mainland boundary from the Hong Kong (VHHK) FIR — see the [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md) for the boundary detail and the [Asia airspace brief](../../../../airspace/asia.md) for the wider China ATFM/metric-level picture. Expect sustained vectoring, cross-border coordination restrictions, and CAAC flow control (ATFM) in this environment, especially in weather-disrupted or peak-bank conditions. The airport's own move to a **three-runway, eight-operating-mode configuration** (commissioned Nov 2025) is explicitly intended to relieve this pressure, but it also adds a newly-commissioned runway and traffic pattern that crews should expect to still be settling into steady-state operation.

### 3.3 Runway excursion 🟧
No declared-distance table (TORA/TODA/ASDA/LDA), displaced-threshold or stopway data was found in reachable public sources for any of the three runways — treat the published physical lengths (3,400–3,800 m) as a planning proxy only, **not** a confirmed declared distance, pending primary-AIP verification. The field's one significant historical accident — **China Southern Airlines Flight 3456** (8 May 1997, Boeing 737, landing at the field's original single runway) — was a runway-excursion/hard-landing event directly attributable to severe convective weather (torrential rain, strong crosswind, windshear and very poor visibility): the aircraft bounced on a first touchdown attempt, went around, then made high-speed contact with the runway on a second approach in cloud, ran off the runway and broke apart with fatalities. It carries no current operational restriction, but it is a sharp, field-specific illustration of why the weather threats in §3.4 are taken seriously here.

### 3.4 Weather threat 🟥
Two distinct, well-documented seasonal hazards dominate this field:
- **Typhoon season (~May–November, peak July–September)** — direct South China Sea/coastal exposure. This is not a theoretical risk: within the week this brief was built, **Typhoon Noul** disrupted South China aviation broadly, with ZGSZ itself registering some 455 delays and 409 cancellations, as one of a 36-airport cluster (including [ZGGG](../zggg/index.md), VHHH, ZGSD, ZGOW and XMN) forecast to be affected by the same system. Expect ground-stops, large-scale schedule disruption, and airport-driven proactive flight adjustment during a tracked system — see [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Winter radiation fog / haze (roughly Nov–Mar)** — a published meteorological study of ZGSZ found low-visibility events concentrated in the **18:00–00:00 UTC window (02:00–08:00 local CST)**, peaking around 20:00 UTC (04:00 local), driven by radiative cooling under southwesterly warm/moist onshore flow — the classic radiation-fog signature. ZGSZ is named among China's higher fog-risk major airports alongside Beijing Capital, Shanghai Pudong, Chengdu Shuangliu, Xiamen and Kunming. See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
Summer convective thunderstorm activity is the standard humid-subtropical (Köppen Cwa) pattern for the region — see §14.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) the **Pearl River Delta multi-airport airspace congestion** and its cross-border Hong Kong coordination dimension (§3.2); (2) **typhoon-season schedule risk**, which is a live, recurring, and currently-active threat rather than a remote seasonal footnote (§3.4); (3) **winter fog/low-visibility risk concentrated in the early-morning window**, relevant to any overnight or first-wave rotation; and (4) the **newly-commissioned third runway (16R/34L, opened 2025-11-29)** — treat its approach/departure infrastructure, lighting status and taxi routing as still-settling until independently reconfirmed against a current AIRAC cycle. RFF, declared-distance and navaid detail are open administrative/currency items (§18) rather than known safety-critical gaps, but none of them have been positively confirmed either — this is a field where public-source corroboration is thinner than at a European hub, and the redder flag has been chosen throughout where the underlying data was ambiguous.

---

## 4. Cautions & Warnings

- **Active typhoon-season exposure** — this field has taken direct, large-scale disruption from a tracked South China Sea typhoon within the past week; do not treat the May–Nov season as a remote risk.
- **Winter radiation-fog risk is concentrated in the early-morning local window (roughly 02:00–08:00 CST)** — build buffer into any first-wave or overnight rotation in season.
- **Third runway (16R/34L) is newly commissioned (2025-11-29)** — verify current NOTAM/AIRAC status for approach availability, lighting and taxi routing before assuming full parity with the two established runways.
- **Runway designators are not fully reconciled across public sources** (15/33 vs 16L/34R vs 16R/34L, and a lighting-status discrepancy on the newest runway) — do not treat this brief's runway table as chart-grade; cross-check the current AIRAC before dispatch.
- **Historical note (China Southern Flight 3456, 1997):** a fatal runway-excursion accident at this field's original runway was directly weather-driven (windshear, heavy rain, crosswind, poor visibility on a bounced/go-around/second-approach sequence) — no current operational restriction, but it is a concrete reminder that this field's defining threat is convective/typhoon weather, not terrain.
- **Pearl River Delta mega-TMA** — expect sustained vectoring, cross-border (Hong Kong) coordination constraints and CAAC flow control; do not expect a quiet, procedural-style transit even outside weather disruption.
- Mag variation, RFF category, PCN, ILS idents/frequencies and declared distances are sourced only to tier-4 public data or not found at all — treat every exact figure in this brief as 🟧 pending a live-AIRAC/primary-AIP cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **Pearl River Delta congestion/cross-border environment**, **typhoon-season risk**, and the **newly-commissioned third runway**. 🟥
- **Crew-qualification gate:** No specific crew-qualification restriction found in reachable sources (e.g. no confirmed CAT II/III currency requirement) — confirm current AIRAC before assuming a standard-crew approach environment. 🟧
- **Operating restrictions / bans:** No published night curfew found; no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard PRC international arrival; China's civil aviation system applies strict, centralised CAAC ATFM/flow control region-wide (see [Asia airspace brief](../../../../airspace/asia.md) §3/§6) — no field-specific permit found beyond standard state entry requirements. 🟧
- **Operations notes:** ANSP — **CAAC / Air Traffic Management Bureau**, under the **Guangzhou (ZGZU) ACC/FIR**; approach service publicly listed under the name "Zhuhai Approach" 🟧 (verify — see §8); airport operator — **Shenzhen Airport (Group) Co., Ltd.** The field is a hub for Shenzhen Airlines, China Southern Airlines and Donghai Airlines, a cargo hub for SF Airlines, an Asia-Pacific cargo hub for UPS Airlines, and a focus city for Hainan Airlines — none of these are K Global entities; named neutrally as background only.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not independently confirmed; a major hub of this traffic volume is assumed effectively H24 | 🟧 |
| AD operating hours | No published curfew found; cargo/customs operations stated 24-hour | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available; one tier-4 source names a single into-plane provider, not independently verified for airline uplift | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International arrivals hall, Terminal 3, level 2F; cargo side states 24-hour clearance; passenger desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed for scheduled airline ops; a bizav-oriented FBO/ground-handling presence is listed in trade directories but not verified for our operation | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 15 | 3,400 × 45 m | Concrete / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Original runway (opened 1991); reported 4E |
| 33 | 3,400 × 45 m | Concrete / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Reciprocal end of 15 |
| 16L | 3,800 × 60 m | Concrete / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | "West runway"; opened 2011-07-26; reported 4F |
| 34R | 3,800 × 60 m | Concrete / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Reciprocal end of 16L |
| 16R | 3,600 × 45 m | Concrete / PCN not published 🟧; lighting status conflicts across sources 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | **Third runway** — opened 2025-11-29, 4F rating, built between the second runway and the Guangshen Yanjiang Expressway |
| 34L | 3,600 × 45 m | Concrete / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Reciprocal end of 16R |

*No TORA/TODA/ASDA/LDA table, displaced-threshold data, or PCN figure was found in any reachable public source. All three runways report the same approximate 154°/334° magnetic orientation despite the 15-vs-16 designator split across the original runway and the two newer ones — this discrepancy is not resolved in this pass and should be treated as an open item (§18) pending a primary-AIP cross-check. All dimensions in metres, from converging public tier-4 sources (OurAirports, SkyVector, Chinese-language corroboration of the operator's own runway-opening statements).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Shenzhen/Baoan ATIS | 126.85 / 127.45 | Not confirmed 🟧 | |
| Delivery | Baoan Delivery | 121.85 / 121.95 | Not confirmed 🟧 | |
| Ground | Baoan Ground | 121.65 / 121.80 / 121.85 | Not confirmed 🟧 | |
| Apron | Baoan Apron | 121.62 / 122.70 / 122.82 | Not confirmed 🟧 | Ramp/taxi control |
| Tower | Baoan Tower | 118.05 / 118.45 / 130.35 | Not confirmed 🟧 | |
| Approach | **"Zhuhai Approach"** (as published in reachable frequency data) | 119.02 / 119.55 / 119.77 / 120.35 / 123.85 / 125.52 / 127.95 | Not confirmed 🟧 | Naming is unusual for a Shenzhen-serving approach facility — not independently reconciled; verify against current AIRAC (§18) |
| Emergency | International emergency | 121.50 | H24 (standard) | |
| Centre / FIR | Guangzhou (ZGZU) ACC | Per current AIRAC | H24 | See [Asia airspace brief](../../../../airspace/asia.md) |

*Source: tier-4 public frequency data (SkyVector, OurAirports) — not cross-checked against a primary AIP table. Treat every frequency here as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | SZX (Shenzhen) | 115.30 | Not confirmed 🟧 | On field |
| VOR/DME | SHK (Shekou) | 115.90 | Not confirmed 🟧 | ~10.1 NM SSE |
| NDB | QJ (Shenzhen) | 253 kHz | Not confirmed 🟧 | ~10.2 NM NNW |
| VOR/DME | GLN (Guanlan) | 112.00 | Not confirmed 🟧 | ~13.5 NM ENE |
| ILS (all runways) | Not published / verify | Not published / verify | — | 🟧 No per-runway ILS ident, frequency or CAT-capability data found in reachable sources — this is a significant open item, see §18 |

*Source: OurAirports closest-navaids data — cross-check only, not a primary AIP table.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed in reachable sources. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) assumed — confirm current chart. 🟧
- **Preferential runway logic:** Not published; the airport states its three-runway system supports **eight operating modes** with flexible/"dual-directional" flow, but the exact wind/traffic selection criteria per runway are not sourced. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 15/33 | Not confirmed in reachable research pass 🟧 | — | — | Pull the live current-AIRAC procedure list before use |
| 16L/34R | Not confirmed in reachable research pass 🟧 | — | — | Pull the live current-AIRAC procedure list before use |
| 16R/34L | Not confirmed in reachable research pass 🟧 | — | — | Newly-commissioned (2025-11-29) — confirm approach infrastructure is fully published before planning to it |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Winter radiation-fog risk (§3.4/§14) is the plausible LVP driver; exact trigger conditions/RVR values not confirmed. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat delta site); the operative missed-approach concern is re-sequencing into a very high-density, multi-airport Pearl River Delta radar environment with active cross-border (Hong Kong) coordination.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** China applies a region-wide PBN/RNP framework (RNAV 5/RNP enroute, RNP 1 terminal, RNP APCH arrivals) and assigns cruise levels in **metres** rather than feet — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) and the [Asia airspace brief](../../../../airspace/asia.md) §4. Field-specific SID gradient/RNP detail not confirmed this pass. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources. 🟧
- **ATC slot / CTOT & clearance:** No IATA slot-coordination level found; CAAC's centralised ATFM/flow-control regime applies as standard practice for a congested Chinese hub in the Pearl River Delta cluster (§3.2). 🟧
- **De-icing:** Not applicable in the normal course — humid subtropical (Köppen Cwa) climate with mild winters; no de-icing requirement identified. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed in reachable sources; Terminal 3 (450,000 m², 62–63 gates) is stated able to accommodate any aircraft type in the world, but a widebody/Code E stand map specific to our operation was not found. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Not confirmed in reachable sources — confirm with Ground/Apron on the day, particularly given the newly-commissioned third runway's taxi connections. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources; a three-runway field this new to its current configuration should be assumed to carry unpublished or evolving hot spots until an AIRAC-current chart is checked. 🟧
- **Follow-me:** Not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Köppen **Cwa** (humid subtropical) — warm, humid summers and mild winters; winter's main feature is the mid-latitude cyclone, summer brings convective thunderstorms.
- **Seasonal hazards:** **Typhoon season (~May–November, peak July–September)** with direct South China Sea/coastal exposure — a live, active hazard (§3.4); **winter radiation fog/haze (roughly Nov–Mar)**, concentrated in the 02:00–08:00 local (CST) window per a published meteorological study of this field. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **Local effects:** Coastal/delta location; no significant terrain-driven local wind effect identified — the operative "local effect" is the shared, congested Pearl River Delta airspace rather than a terrain or sea-breeze phenomenon.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories (South China Sea/NW Pacific VAAC-adjacent bulletins). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (especially any restriction on the newly-commissioned 16R/34L), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current CAAC ATFM/flow-control restrictions in the Guangzhou (ZGZU) FIR, and any active typhoon/tropical-cyclone bulletin. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / alternate** — not a K Global base (§1).
- **Nearest suitable alternates:** Company alternates **VHHH** (Hong Kong Intl) and **[ZGGG](../zggg/index.md)** (Guangzhou Baiyun) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. Note VHHH sits under a **different aeronautical authority** (Hong Kong Civil Aviation Department, not mainland CAAC) — treat its AIP/regulatory basis as distinct even though it is geographically close (≈20 NM).
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub/cargo gateway; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on any of the three runways. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty identified for any K Global type at ZGSZ — all three runways are ample. The operative planning considerations are typhoon-season schedule risk, winter early-morning fog exposure, and Pearl River Delta airspace congestion/flow control rather than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **CAAC/AIP China primary source** — subscription/registration-gated; not reachable this pass. This entire brief rests on cross-checked public (tier-4) data and should be re-verified against the primary AIP at the earliest opportunity.
- **Runway designators/lighting** — public sources conflict on whether the field's runways are correctly described as 15/33 + 16L/34R + 16R/34L, and on the lighting status of the newest runway (16R/34L); not resolved this pass.
- **Declared distances (TORA/TODA/ASDA/LDA) and PCN** — not found in any reachable source for any runway.
- **RFF category** — not found; inferred only from the field's 4F rating and traffic profile.
- **ILS/approach data per runway** — no ident, frequency or CAT-capability found for any runway; approach-procedure status on the newly-commissioned 16R/34L is a particular unknown.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **"Zhuhai Approach" naming** — the only reachable public frequency data labels Shenzhen's approach service under this name; not independently reconciled against a primary source or the Guangzhou (ZGZU) FIR structure.
- **ATC frequencies** — sourced only to tier-4 aggregator data (SkyVector/OurAirports), not a primary AIP table.
- **Night curfew / ATS hours / handling agent(s) / fuel supplier / customs desk hours** — none confirmed in reachable sources.
- **Mag variation** — a chart-derived "2°" figure was found without a confirmed direction; a secular-drift estimate (≈2.74° W) is not a sourced AIP figure.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ZGSZ/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid cross-check.*
- SkyVector — https://skyvector.com/airport/ZGSZ/Shenzhen-Baoan-Airport (retrieved 2026-07-26). *Coordinates, runway/frequency/navaid corroboration, fuel-provider listing.*
- Wikipedia — "Shenzhen Bao'an International Airport" — https://en.wikipedia.org/wiki/Shenzhen_Bao%27an_International_Airport (retrieved 2026-07-26). *History, terminal/runway timeline, traffic statistics, 1997 accident reference.*
- SKYbrary — "ZGSZ / Shenzhen Bao'an International Airport" — https://skybrary.aero/airports/zgsz (retrieved 2026-07-26). *Coordinates, elevation, Köppen climate classification.*
- Shenzhen Bao'an International Airport (operator) — "Shenzhen Airport Officially Enters 'Three-runway Era'" — https://www.szairport.com/szairporten/news/202605/76d0cdbedfcc455c87130fc75b271e60.shtml (retrieved 2026-07-26). *Third-runway commissioning date, dimensions, "3+3+3+1" master-plan detail, operator-published capacity targets.*
- Airport Industry-News — "China: Shenzhen Airport Opens Third Runway" — https://airportindustry-news.com/china-shenzhen-airport-opens-third-runway/ (retrieved 2026-07-26). *Third-runway dimensions/rating, siting detail, eight-operating-mode statement.*
- 21jingji.com / people.com.cn (via search corroboration) — Chinese-language reporting on the three-runway designator set (15/33, 16L/34R, 16R/34L) and opening dates (retrieved 2026-07-26). *Tier-4 corroboration only — not independently verified against a primary AIP chart.*
- Wikipedia — "China Southern Airlines Flight 3456" — https://en.wikipedia.org/wiki/China_Southern_Airlines_Flight_3456 (retrieved 2026-07-26). *1997 weather-driven runway-excursion accident detail.*
- Hans Publishers (Geographical Science Research, 2026) — low-visibility/fog study of Shenzhen Airport — https://pdf.hanspub.org/gser_2420980.pdf (retrieved 2026-07-26). *Winter radiation-fog timing/mechanism.*
- The Adept Traveler — "China Winter Fog Delays Flights At Major Hubs" — https://adept.travel/news/2025-11-26-china-winter-fog-flight-delays (retrieved 2026-07-26). *ZGSZ named among China's higher fog-risk major airports.*
- NomadLawyer — "Typhoon Noul Disrupts China Aviation with Over 10,000 Flights Delayed or Canceled" — https://www.nomadlawyer.org/typhoon-noul-disrupts-china-aviation-delays-cancellations-2026 (retrieved 2026-07-26). *ZGSZ delay/cancellation figures, current/live typhoon-disruption event.*
- newsgd.com — "Typhoon Noul threatens 36 airports as South China braces for flight disruptions" — https://info.newsgd.com/node_73b7112307/fe0688bbcd.shtml (retrieved 2026-07-26). *36-airport South China disruption forecast including ZGSZ.*
- China Daily (Hong Kong Edition) — "PRD aviation surges. HK suffers airspace congestion" — http://www.chinadaily.com.cn/hkedition/2017-08/28/content_31211387.htm (retrieved 2026-07-26). *Pearl River Delta 5-airport congestion picture, Tripartite Working Group background.*
- Lexology / Hogan Lovells (via search corroboration) — "Bay Watch: Aviation around China's 'Greater Bay Area'" — https://www.lexology.com/library/detail.aspx?g=1604c29f-f83a-4ad0-ad18-1a36084bc3a4 (retrieved 2026-07-26). *Tripartite Working Group / PRD ATM Planning and Implementation Plan (2007) detail.*
- magnetic-declination.com — Shenzhen, China — https://www.magnetic-declination.com/CHINA/SHENZHEN/475119.html (retrieved 2026-07-26). *Secular-drift magnetic-variation estimate — not an AIP figure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
