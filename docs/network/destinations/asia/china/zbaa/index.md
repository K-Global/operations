# ZBAA — Beijing Capital · Airport Briefing

**ZBAA / PEK** · Shunyi District, Beijing, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public cross-check sources (AIP China / CAAC-AISC is subscription/registration-gated and was not reachable this pass — see §18 and Sources); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 40°04′21″N / 116°35′51″E (40.0725, 116.5975) — cross-checked against OurAirports (40.077349, 116.596702) and SkyVector (N40°4.40′/E116°35.90′); the three public sources vary by up to ~500 m 🟧 **not AIP-verified** |
| Field elevation | **116 ft / 35 m AMSL** — consistent across OurAirports, SkyVector and SKYbrary 🟩 |
| Mag variation | Not published / verify 🟧 — no sourced figure found in reachable public data |
| Time zone | **China Standard Time, UTC+8** — applied nationwide year-round, no daylight-saving observed |
| Runway(s) | **01/19** 3,800 × 60 m (concrete) · **18L/36R** 3,800 × 60 m (asphalt) · **18R/36L** 3,200 × 50 m (surface reported as non-standard code "PEM" in the public register — likely a part-concrete/composite pavement, not independently confirmed) |
| Preferential runway | Wind/traffic/flow-driven; three parallel N–S runways support **independent parallel ILS approaches to 36L/36R/01** and **dependent parallel ILS approaches to 18L/18R/19** per published triple-runway operating capability — see §3.2 🟧 (exact CAAC config-selection rule not sourced) |
| Longest LDA | 3,800 m (01/19, 18L/36R) — declared distance not separately confirmed from physical runway length; see §7 🟧 |
| Approaches | ILS reported across the runway set by tier-4 aggregators (category not confirmed); independent/dependent triple-parallel operation is the airfield's defining capability — see §3.2 |
| RFF category | Not published / verify 🟧 — given T3's A380-capable design (§13) a high ICAO category is plausible but not sourced; do not assume |
| Control type | **Radar** — Beijing/Capital Approach control on the field; **Beijing (ZBPE) ACC/FIR** en route — see [Asia — Airspace Briefing](../../../../airspace/asia.md) |
| Elevation class | Near sea-level (116 ft) — **not** hot-and-high; the field's defining operational drivers are **traffic density**, **CAAC flow control** and **seasonal dust/winter weather**, not density altitude |
| Special-airport status | 🟥 **IATA Level 3 (fully coordinated)** slot regime; one of the busiest 3-runway independent/dependent parallel-approach complexes in Asia — see §5 |
| Customs / PoE | **Yes — 24-hour Port of Entry** 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company alternates | **ZBTJ (Tianjin Binhai), ZBSJ (Shijiazhuang Zhengding)** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **20 min / 22 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Field sits on the flat North China Plain; no close-in high terrain relevant to the runway system. Northern/western hill ranges lie well clear of the immediate approach/departure paths — confirm MSA sectors on the current chart as routine practice. |
| Runway length vs fleet perf | 🟩 | 3,800 m main pair and 3,200 m third runway are ample for any K Global widebody; non-limiting. |
| Approach availability / minima | 🟧 | ILS reported across the runway set by aggregator sources; exact category (I/II/III) and published minima not confirmed from a primary table this pass. |
| Airspace / traffic / control | 🟥 | One of Asia's busiest hubs — 442,046 aircraft movements in 2025; independent/dependent triple-parallel ILS operation drives sustained high controller/crew workload — see §3.2. |
| Weather / seasonal hazard | 🟥 | Spring dust/sand-dust events (Mongolian/Gobi-origin) and winter snow/ice are the field's defining seasonal hazards — see §3.4/§14. |
| Curfew / slots / hours | 🟥 | **IATA Level 3 slot-coordinated**; no confirmed formal overnight passenger curfew found, but the slot regime is itself the binding schedule constraint — see §5/§6. |
| RFF category vs our types | 🟧 | Not published / verify — cannot state compliance either way. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major hub; specific into-plane airline-scale supplier/hours not confirmed (only general-aviation FBO fuel providers found). |
| Customs / handling / security | 🟩/🟧 | 24-hour Port of Entry confirmed; specific handling agent and desk hours for scheduled international service not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ZBAA sits at 116 ft AMSL on the flat **North China Plain**. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths at the field itself; the nearest significant relief (the Yan Mountains to the north and the Taihang range to the west) lies tens of kilometres out and is not a factor for the immediate airfield environment. This is a non-issue field for terrain in the way EDDF is — verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟥
ZBAA operates **three full-length parallel north–south runways (01/19, 18L/36R, 18R/36L)** with a published triple-runway operating capability: **independent parallel ILS approaches to runways 36L, 36R and 01**, and **dependent parallel ILS approaches to runways 18L, 18R and 19**, depending on the active configuration. This is one of the highest-capacity simultaneous-approach airfield geometries in Asia and the field handled **442,046 aircraft movements in 2025** (+2.0% year-on-year) — sustained high traffic density under **Beijing/Capital Approach** and continuous parallel-runway sequencing. Expect extended vectoring, resequencing during config changes, and periodic **CAAC-imposed flow-control/ATFM restrictions** (ground holding, CTOT, minutes-in-trail spacing) that are a defining, routine feature of Chinese airspace rather than an exceptional event — cross-ref [Asia — Airspace Briefing §6](../../../../airspace/asia.md) on China's strict, centralised ATFM regime. 🟧 Exact hot-spot taxiway/junction detail was not obtainable from a public chart source this pass — see §13/§18.

### 3.3 Runway excursion 🟧
No displaced-threshold or declared-distance data was found in reachable public sources for any of the three runways — **not confirmed**, treat the published physical runway length as the working figure pending AIP verification. The third runway (18R/36L, 3,200 × 50 m) carries a non-standard surface code ("PEM") in the public cross-check register whose exact pavement composition is not independently confirmed. Winter contamination (snow/ice, roughly Dec–Feb) is the field's principal seasonal excursion driver; no specific braking-action or friction data was found — brief accordingly in season.

### 3.4 Weather threat 🟥
ZBAA's climate is monsoon-influenced (Köppen **Cwa**), with cold dry winters and hot humid summers. Two seasonal hazards dominate: **spring sand-dust events** (roughly March–May, Mongolian/Gobi-origin "yellow dust"), which can drop visibility to below 1 km in sand-dust-storm intensity and — unlike fog or a single-cell thunderstorm — can affect **multiple airports across a wide region simultaneously**, driving network-wide CAAC flow restrictions rather than a single-field closure (a Feb 2026 sandstorm event with force-14 winds triggered severe pollution/visibility impacts across some 130 Chinese cities is a documented recent example); and **winter snow/ice** (Dec–Feb, mean daily temperatures sub-zero Dec–Feb per climate normals), which has caused documented multi-day disruption at northern Chinese hubs including increased ATC in-trail spacing. Summer (Jun–Aug) brings the standard East-Asian monsoon convective/thunderstorm risk. See §14.

### 3.5 Operational considerations 🟥
Plan around three durable constraints: (1) the **IATA Level 3 slot-coordinated regime**, where schedule integrity has direct network consequences and where CAAC has historically imposed short-notice full-stop restrictions around major state events (a documented 2018 example barred non-attending business aviation entirely for a week and redirected traffic to **ZBTJ** and **ZBSJ** — the same two fields carried as this operation's company alternates); (2) **terminal/ground complexity** — three terminal buildings (T1, T2, T3) with T3 alone comprising three linked concourses connected by an underground automated people-mover, driving materially longer connection and taxi times than a single-terminal field (reflected in the VAMSYS planning taxi times of 20/22 minutes, longer than a typical field); and (3) the **Beijing Daxing (ZBAD) split** — since ZBAD opened in 2019 several major domestic carriers relocated their Beijing base there, but ZBAA remains the busier of Beijing's two airports (70.76 million passengers in 2025 vs. ZBAD's 53.61 million), and the field's dominant home carrier and other major full-service operators remain based at Capital. Confirm the current route/slot picture at planning rather than assuming a static role split.

---

## 4. Cautions & Warnings

- **Spring sand-dust events (Mar–May)** can drop visibility below 1 km with little warning and simultaneously affect multiple regional airports — check current SIGMET/NOTAM for sand-dust advisories, not just the local METAR.
- **Winter snow/ice season (~Dec–Feb)** brings sub-zero means and documented severe-storm disruption at northern Chinese hubs — plan de-icing buffer.
- **Independent/dependent triple-parallel-runway operation** sustains continuous high radio/traffic workload — maintain a heightened traffic scan even under radar, and expect resequencing on any runway-configuration change.
- **IATA Level 3 slot-coordinated field** — a missed slot has real network consequences; confirm the current slot/CTOT before planning.
- **CAAC can impose short-notice, region-wide flow restrictions or full-stop event restrictions** with little lead time (documented precedent around major state events) — always check the current NOTAM picture, not just this durable brief.
- **Terminal/ground complexity** — three terminal buildings, multi-concourse T3 with an underground APM between concourses — confirm current gate/terminal assignment before finalising a connection or ground plan.
- Several figures in this brief (mag variation, RFF category, PCN, declared distances, ILS categories, SID/STAR names) are **not confirmed from a primary AIP source** — see §18.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **high-density triple-parallel-runway environment** and the **seasonal dust/winter-weather exposure**. 🟧
- **Crew-qualification gate:** No specific crew-qualification restriction confirmed in reachable sources; given the seasonal low-visibility exposure (dust, winter fog/snow), confirm current CAT II/III currency where relevant. 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction, or scheduled-carrier curfew confirmed in reachable sources. General-aviation-specific restrictions are documented (no GA departures 0700–0900 local; peak-hour GA movement caps 0900–2200 local; GA tech-stops/crew-rests historically discouraged under slot congestion) — these apply to general aviation, not necessarily scheduled service, but illustrate how tightly CAAC manages the field's capacity. 🟧
- **Overflight / entry / permits:** Foreign-operator overflight/landing permits are required for Chinese airspace/airports as standard practice; confirm current permit lead time at planning — see [Asia — Airspace Briefing §9](../../../../airspace/asia.md). 🟧
- **Operations notes:** ANSP — **CAAC** (Civil Aviation Administration of China) via its regional Air Traffic Management Bureau; **Beijing (ZBPE) ACC/FIR** for en route. Airport operator — the Beijing Capital International Airport operating company. Slot coordination — **IATA Level 3**, coordinator not independently confirmed in reachable public sources.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 assumed (major international hub) — not individually confirmed | 🟧 |
| AD operating hours | 24-hour operation assumed | 🟧 |
| Night / curfew restrictions | No confirmed formal scheduled-service curfew; GA-specific restrictions documented (no GA departures 0700–0900L) — distinct regime from scheduled carriers | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available H24 as a major hub; airline-scale into-plane supplier not individually confirmed (only GA/FBO-scale fuel providers found) | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | **24-hour Port of Entry** confirmed | 🟩 |
| Handling / FBO | Not individually confirmed for scheduled international service; at least one Western-style FBO operates a dedicated business-aviation ramp | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01 / 19 | 3,800 × 60 m | Concrete / PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Threshold elevations ≈85 ft (01) / 95 ft (19) per public cross-check |
| 18L / 36R | 3,800 × 60 m | Asphalt / PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Threshold elevations ≈108 ft (18L) / 98 ft (36R) |
| 18R / 36L | 3,200 × 50 m | Reported as non-standard code "PEM" in the public register — composition not confirmed 🟧 / PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Threshold elevations ≈115 ft (18R) / 108 ft (36L); the shorter/narrower of the three runways |

*Physical runway dimensions cross-checked between OurAirports and SkyVector public registers (retrieved 2026-07-26); declared distances (TORA/TODA/ASDA/LDA), PCN and exact surface composition are **not published in any reachable public source this pass** — AIP China (CAAC/AISC) is subscription/registration-gated. Do not assume declared distance equals physical length. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Beijing ATIS | 127.60 (arrival, cross-checked OurAirports + SkyVector) · 128.65 (departure, SkyVector only) | H24 assumed | 🟧 arrival/departure split not independently confirmed from a primary source |
| Delivery | Beijing Delivery | 121.60 / 121.65 | H24 assumed | Cross-checked between OurAirports and SkyVector |
| Ground | Beijing Ground | 121.70 / 121.75 / 121.80 / 121.85 / 121.90 / 121.95 | H24 assumed | East/west sector split reported (121.70 East, 121.90 West) but not fully cross-confirmed 🟧 |
| Apron | Beijing Apron | 121.95 / 122.12 / 122.22 / 122.62 / 122.67 | H24 assumed | Ramp/taxi control — SkyVector only 🟧 |
| Tower | Beijing Tower | 118.05 / 118.30 / 118.50 / 118.60 / 124.30 | H24 assumed | Multiple positions reported (East/West Tower plus a RWY 01/19-specific position) — take the assigned frequency; not fully cross-confirmed across sources 🟧 |
| Approach | Beijing / Capital Approach | 119.00 / 119.42 / 119.70 / 119.85 / 120.20 / 120.60 / 121.10 / 124.40 / 125.05 / 125.50 / 125.80 / 126.10 / 127.75 / 129.00 | H24 assumed | Sector-specific ("Beijing Approach Area 1–6" per OurAirports); take the assigned frequency |
| Centre / FIR | Beijing (ZBPE) ACC | 125.90 (reported, single-source) | H24 | 🟧 not independently corroborated this pass; see [Asia — Airspace Briefing](../../../../airspace/asia.md) |

*Sourced to SkyVector and OurAirports public frequency registers (retrieved 2026-07-26), cross-checked against each other; neither is a primary AIP source — treat exact current-cycle assignments as 🟧 pending an AIP China cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | PEK (Guanzhuang) | 114.70 | H24 assumed | On-field area VOR, ~6.5 NM from ARP per SkyVector |
| VOR | SZY (Shaziying) | 117.20 | H24 assumed | ~8.0 NM |
| VOR | HUR (Huairou) | 113.60 | H24 assumed | ~16.9 NM |
| VOR | DXG (Daxing) | 115.35 | H24 assumed | ~37.1 NM — associated with Beijing Daxing (ZBAD), not ZBAA itself |
| NDB | CU (Shahe) | 555 kHz | H24 assumed | ~10.8 NM |
| NDB | WF (Xiliuhetun) | 395 kHz | H24 assumed | ~14.9 NM |
| NDB | JR (Liangxiang) | 475 kHz | H24 assumed | ~31.4 NM |
| NDB | CD (Qingbaikou) | 422 kHz | H24 assumed | ~36.7 NM |
| ILS (all runway ends) | Idents/frequencies not published | Not published / verify | — | ILS reported across the runway set by tier-4 aggregator sources (category not confirmed); one uncorroborated single-source note suggests 110.30 for RWY 18R — **not independently verified, do not rely on it** 🟧 |

*VOR/NDB data cross-checked via SkyVector's "closest navaids" register (retrieved 2026-07-26) — tier-4, not a primary AIP source.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧 — no sourced figure found; confirm current chart before use.
- **Speed:** Standard ICAO 250 KIAS below 10,000 ft assumed; no local override confirmed.
- **Preferential runway logic:** Config/wind/traffic-driven across the three parallel runways; independent parallel ILS approaches are flown to 36L/36R/01 and dependent parallel ILS approaches to 18L/18R/19 depending on the active configuration (§3.2). Beijing's monsoon-influenced climate carries a general seasonal tendency toward northerly/north-westerly winds in winter and southerly/south-easterly winds in summer — this is **regional climatology, not a sourced wind-rose figure**; take the current ATIS as the operative call. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 01 | Not confirmed 🟧 | — | — | ILS reported, name/category not sourced |
| 19 | Not confirmed 🟧 | — | — | ILS reported, name/category not sourced |
| 18L | Not confirmed 🟧 | — | — | Dependent-parallel role per §3.2 |
| 36R | Not confirmed 🟧 | — | — | Independent-parallel role per §3.2 |
| 18R | Not confirmed 🟧 | — | — | Dependent-parallel role per §3.2 |
| 36L | Not confirmed 🟧 | — | — | Independent-parallel role per §3.2 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Trigger conditions consistent with seasonal sand-dust and winter fog/snow risk (§14); exact RVR/trigger figures not confirmed. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plain) — the operative missed-approach concern is re-sequencing into a very high-density, independent/dependent triple-parallel-runway traffic environment under active CAAC flow management.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** China has been implementing PBN nationally across its major hubs; no ZBAA-specific RNP/gradient figure confirmed this pass — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify 🟧.
- **Start-up / push-back:** Not confirmed — coordinate via Beijing Ground/Apron on the assigned frequency (§8). 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated**; CAAC ATFM (CTOT, minutes-in-trail, ground holding) is routine practice in Chinese airspace, especially in dust/winter-weather season or during major state events — see [Asia — Airspace Briefing §6](../../../../airspace/asia.md).
- **De-icing:** Seasonal requirement confirmed for the Beijing winter (roughly Dec–Feb, sub-zero daily means); specific pad locations/provisioning not found in reachable sources. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** The airport comprises three terminal buildings. **Terminal 3** is the field's primary international-service terminal, built with A380-capable gates and stands, split across three linked concourses (a main hall handling domestic and international check-in, a domestic satellite concourse, and the international concourse handling all international/Hong Kong/Macau/Taiwan traffic) connected by an underground automated people-mover. **Terminal 2** also handles a mix of international and domestic service and has at least one A380-capable gate. **Terminal 1** was repurposed in 2023 as a satellite extension of Terminal 2. A K Global international widebody service would be expected to use the **Terminal 3 international concourse**, but the exact stand/gate assignment for this operation is **not confirmed**. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed — given the three-runway/three-terminal layout and very high traffic volume, expect a materially longer taxi than a single-terminal field; this is reflected in the VAMSYS planning taxi times (20 min in / 22 min out).
- **Hot spots / tight taxiways:** No specific named hot spots or taxiway junctions were obtainable from a reachable public chart source this pass — flagged as a genuine gap, not asserted as "none exist." Given the airfield's traffic density and three-runway/three-terminal complexity, treat ground movement with elevated vigilance and confirm routing with Ground/Apron on the day. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Köppen **Cwa** (monsoon-influenced humid continental/subtropical) — warm humid summers, mild-to-cold dry winters, per SKYbrary. Annual mean temperature ≈13.1°C; January mean ≈−3.2°C, July mean ≈27.2°C (2013–2024 normals). Prevailing wind direction is not sourced from an aviation wind-rose — see §10 caveat.
- **Seasonal hazards:** **Spring sand-dust events** (roughly Mar–May, Mongolian/Gobi-origin) can cut visibility to sand-dust-storm intensity (<1 km) and affect multiple regional airports simultaneously, distinct from a localised fog event. **Winter snow/ice** (roughly Dec–Feb) brings sub-zero daily means and has produced documented multi-day disruption with increased ATC spacing at northern Chinese hubs in recent winters. **Summer convective activity** (Jun–Aug) follows the standard East-Asian monsoon thunderstorm pattern.
- **Local effects:** No significant terrain or sea-breeze effect at this inland plain field; periodic haze/pollution events can compound low-visibility conditions during still winter/spring weather.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET (including sand-dust advisories in season). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current CAAC ATFM/flow-control measures, and any short-notice event-driven restriction. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Long-haul international destination** (non-base) `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company alternates **ZBTJ (Tianjin Binhai), ZBSJ (Shijiazhuang Zhengding)** `[VAMSYS mirror 2026-07-26]` — notably the same two fields publicly documented as CAAC's own suggested alternates during past ZBAA event-driven restrictions, a useful real-world corroboration. Beijing Daxing (ZBAD), ~35 NM south, is also a major nearby field but is **not** a designated company alternate for this operation.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub; airline-scale into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,800 m main pair) is non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Terminal 3 was built with A380-capable gates and stands, confirming no widebody size limitation at this field for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning considerations at ZBAA are traffic-density/slot-schedule integrity and seasonal dust/winter weather, not aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **AIP China (CAAC/AISC)** is subscription/registration-gated and was not reachable this pass (eaipchina.cn timed out) — this entire brief rests on cross-checked public tier-4 sources; a primary-AIP pass is the single highest-value follow-up.
- **ARP coordinates** — three public sources vary by up to ~500 m; not AIP-confirmed.
- **Magnetic variation** — no sourced figure found.
- **RFF category and PCN** — not published in any reachable source.
- **Declared distances (TORA/TODA/ASDA/LDA)** for all three runways — not published; only physical runway length confirmed.
- **18R/36L surface composition** — reported only as a non-standard code ("PEM") in one public register.
- **ILS categories, idents and frequencies** per runway end — not confirmed from a primary source; one single-source uncorroborated figure (RWY 18R, 110.30) explicitly not relied upon.
- **SIDs/STARs (current names)** — not obtained this pass; pull the live current-AIRAC procedure list before use.
- **Transition altitude/level, take-off minima, LVP trigger values** — not confirmed.
- **ATC frequency east/west sector assignments and the Beijing ACC frequency (125.90)** — single-source, not independently corroborated.
- **Hot spots / named taxiway junctions** — no public chart data obtainable this pass.
- **RFF, PCN, fuel supplier(s)/hours, handling agent** — none confirmed at airline-scale.
- **Noise abatement procedures, night noise limits, engine run-up/reverse-thrust policy** — none confirmed.
- **A VATSIM China (VATPRC) ZBAA-specific airport SOP/briefing** was referenced in search results (Scribd-hosted ZBAA operations/procedures documents) but could not be retrieved as stable public content this pass — a follow-up cross-check against a VATPRC-published ZBAA SOP is recommended per the standard build workflow.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (AIP China / current-AIRAC charts) informs content but is not listed here.*

- **AIP China (CAAC / AISC), eAIP China** — https://www.eaipchina.cn/ — attempted, gated/unreachable this pass (retrieved attempt 2026-07-26). Primary source of record for a future verification pass.
- OurAirports — https://ourairports.com/airports/ZBAA/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- SkyVector — https://skyvector.com/airport/ZBAA/Beijing-Capital-Airport (retrieved 2026-07-26). *Runway coordinates/elevations, frequencies, nearby navaids.*
- SKYbrary — "Beijing Capital International Airport" — https://skybrary.aero/airports/zbaa (retrieved 2026-07-26). *Elevation, climate classification.*
- Wikipedia — "Beijing Capital International Airport" — https://en.wikipedia.org/wiki/Beijing_Capital_International_Airport (retrieved 2026-07-26). *History, terminal structure, traffic statistics, climate normals, Daxing role-split figures.*
- Wikipedia — "List of airports with triple takeoff/landing capability" — https://en.wikipedia.org/wiki/List_of_airports_with_triple_takeoff/landing_capability (retrieved 2026-07-26). *Independent/dependent triple-parallel-runway operating capability.*
- Universal Weather and Aviation — "Beijing, China: 2025 Business Aviation Destination Guide" — https://www.universalweather.com/blog/beijing-china-business-aviation-destination-guide/ (retrieved 2026-07-26). *24-hour Port of Entry status, GA slot/curfew restrictions, ZBTJ/ZBSJ alternate-field precedent, winter de-icing note.*
- UAS Aero — "Restrictions in Force at Beijing Airport" — https://www.uas.aero/restrictions-in-force-at-beijing-airport (retrieved 2026-07-26). *2018 event-driven restriction precedent; ZBTJ/ZBSJ as CAAC-suggested alternates.*
- Vision Times — "Beijing Hit by Force-14 Winds as Sandstorm Triggers Severe Pollution in 130 Cities" (2026-02-23) — https://www.visiontimes.com/2026/02/23/beijing-hit-by-force-14-winds-as-sandstorm-triggers-severe-pollution-in-130-cities.html (retrieved 2026-07-26). *Recent seasonal sand-dust event corroboration.*
- Beijing Municipal Government (english.beijing.gov.cn) — cited within the Wikipedia traffic-statistics reference set — 2025 Beijing dual-airport passenger throughput (ZBAA 70.76M / ZBAD 53.61M) (retrieved 2026-07-26 via Wikipedia citation). *ZBAA-vs-ZBAD current role-split figures.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
