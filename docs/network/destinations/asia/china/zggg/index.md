# ZGGG — Baiyun · Airport Briefing

**ZGGG / CAN** · Guangzhou (Baiyun/Huadu districts), Guangdong Province, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public cross-check sources (AIP China / CAAC-AISC is subscription/registration-gated and was not reachable this pass) — approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N23°23′36″ / E113°18′30″ (23.3933, 113.3083) — cross-source variance up to ~1 km against other public registers; none is an AIP-confirmed figure 🟧 |
| Field elevation | **50 ft / 15 m AMSL** (49–50 ft consistently across sources) 🟩 |
| Mag variation | 🟧 ~3° W (tier-4 estimate only; not confirmed against a primary AIP table) |
| Time zone | **UTC+8** — China Standard Time, no daylight-saving observed, year-round 🟩 |
| Runway(s) | **Five runways** (first Asia-Pacific airport to operate five, since 30 Oct 2025): **02L/20R** 3,800 × 60 m · **02R/20L** 3,800 × 60 m · **01R/19L** 3,600 × 45 m · **03/21** 3,600 × 45 m · **01L/19R** 3,400 × 45 m — see §7 |
| Preferential runway | No single fixed preferential runway — CAAC's Middle-South Regional Air Traffic Management Bureau (MS-ATMB) runs a dynamic mixed-mode allocation (currently a "**three take-off / three landing**" pattern across the five runways, evolved from "two/two" in the four-runway era) using Stand-Based and Transfer-Point-Based runway-assignment strategies rather than a simple wind rule — see §10/§11 🟧 |
| Longest LDA | Not published / verify — longest pavement is 3,800 m (02L/20R, 02R/20L); exact LDA after any displaced threshold not confirmed 🟧 |
| Approaches | ILS reported historically on the three original runways (01/19 → now 01R/19L, 02L/20R, 02R/20L); approach infrastructure/category for the two newest (2025) runways **01L/19R and 03/21 not confirmed in reachable sources** 🟧 |
| RFF category | Not published / verify — inferred **CAT 9/10 class** given 4E-code, 747/A380-capable runway construction; not an AIP-sourced figure 🟧 |
| Control type | **Radar** — Guangzhou Approach/Tower under CAAC's **Middle-South Regional Air Traffic Management Bureau (MS-ATMB)**; **Guangzhou (ZGZU) ACC/FIR** en route — see [Asia airspace brief](../../../../airspace/asia.md) (no dedicated ZGZU FIR brief built yet — §18) |
| Elevation class | Near sea-level (50 ft) — **not** hot-and-high; the defining performance/reliability drivers here are **Pearl River Delta multi-airport TMA congestion** and **typhoon season**, not density altitude |
| Special-airport status | 🟥 Not operator-categorised as crew-restricted, but the field sits inside one of the most congested multi-airport terminal areas on Earth (Guangzhou/Shenzhen/Hong Kong/Macau/Zhuhai) under strict CAAC flow control — see §3.2/§5 |
| Customs / PoE | **Yes** — international halls in **Terminal 2** (A-gates) and **Terminal 3**; **Terminal 1 has been closed for renovation since 02:00 local, 7 May 2026** and its international piers are out of service meanwhile 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company alternates | **VHHH (Hong Kong Intl)** · [**ZSPD**](../zspd/index.md) (Shanghai Pudong) `[VAMSYS mirror 2026-07-26]` — VHHH sits under a separate jurisdiction/AIP authority (Hong Kong CAD, not mainland CAAC) |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Pearl River Delta alluvial plain; no close-in high terrain relevant to any arrival/departure/missed-approach path. |
| Runway length vs fleet perf | 🟩 | 3,800 m main pair (02L/20R, 02R/20L) and the 3,600 m runways are ample for any K Global widebody; the newest 3,400 m runway (01L/19R) is built to 4E code, accepting 747/A380-class aircraft. |
| Approach availability / minima | 🟧 | ILS reported on the three original runways; approach infrastructure/minima for the two 2025-commissioned runways not confirmed in reachable public sources. |
| Airspace / traffic / control | 🟥 | The field sits inside the Pearl River Delta's five-airport, sub-150 km² congested TMA (Guangzhou/Shenzhen/Hong Kong/Macau/Zhuhai) under CAAC metric-level, strict-ATFM control — a defining, continuous traffic-management complexity, compounded by the airport's own 2025 runway expansion. |
| Weather / seasonal hazard | 🟥 | South China Sea **typhoon season (~May–Nov, peak Jul–Sep)** routinely disrupts or fully suspends operations — Typhoon Ragasa (Sep 2025) and Typhoon Noul (Jul 2026) both produced field-wide delay/cancellation events. |
| Curfew / slots / hours | 🟧 | **No curfew** — the field is a published 24-hour operation by design; it **is** an **IATA Level 3 fully slot-coordinated airport**. |
| RFF category vs our types | 🟧 | Not confirmed from a primary table; inferred adequate for our fleet given the field's 4E/747/A380-capable construction. |
| Fuel availability | 🟧 | Jet A-1 assumed available given hub/cargo-gateway scale; specific into-plane supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International capacity is currently split across Terminal 2/Terminal 3 following the May 2026 Terminal 1 closure; exact desk hours and post-closure gate/hall assignment not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
ZGGG sits at 50 ft AMSL on the flat Pearl River Delta alluvial plain. Baiyun Mountain (the field's namesake) is a modest ridge near downtown Guangzhou, well clear of the current airport site 28 km to the north. There is **no close-in high terrain** relevant to arrival, departure or missed-approach paths — verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat at this field.

### 3.2 Airborne conflict / traffic 🟥
ZGGG is one of **five major airports packed into the Pearl River Delta (PRD)** — Guangzhou–Baiyun, Shenzhen–Bao'an, Hong Kong Intl, Macau Intl and Zhuhai–Jinwan — with four of the five within roughly a 50 km radius and the group sharing well under 150 km² of usable airspace between them. Unified control has historically lagged the region's traffic growth: the **CAAC, the Hong Kong Civil Aviation Department and the Macao Civil Aviation Authority formed a Tripartite Working Group in 2004**, producing the "Pearl River Delta Region Air Traffic Management Planning and Implementation Plan (Version 2.0)" in 2007 to harmonise airspace structure, standards and procedure design across the three administrations — a live acknowledgement that shared, congested airspace among five closely-spaced international airports is the region's binding air-traffic constraint. A further relief measure — a new **Pearl River Delta Hub (Guangzhou New) Airport**, planned to begin operations around 2028 west of Guangzhou with a 2035 design throughput of 30 million passengers/year — is intended to divert flow from the existing PRD field set, itself a signal of how tight the current airspace/capacity margin runs.

At the field itself, the **2025 runway expansion has compounded rather than relieved this picture**: commissioning the fourth (Jan 2025) and fifth (Oct 2025) runways moved ZGGG through a "two take-off / two landing" mode into the current "three take-off / three landing" mixed mode, and CAAC's Middle-South Regional Air Traffic Management Bureau (MS-ATMB) now runs **dynamic Stand-Based and Transfer-Point-Based runway-allocation strategies** to manage the resulting five-runway, more complex taxiway network — a real, documented ATC workload increase, not a completed transition. A specific, ICAO-flagged interaction: the **ILS protected area of RWY 02R/20L lies between the runway and Terminal 3**, and a similar situation affects the southern ILS of **RWY 01L/19R** — when either runway is used for simultaneous landing and take-off, departing Terminal-3 traffic faces materially longer taxi distances and inbound traffic faces increased landing separation, pending MS-ATMB's work to narrow the protected areas and adjust holding-position geometry. Cross-ref the [Asia airspace brief](../../../../airspace/asia.md) (§3, §6 — China's strict ATFM/flow-control regime; no dedicated Guangzhou ZGZU FIR brief built yet, §18).

### 3.3 Runway excursion 🟧
No comprehensive displaced-threshold table was found in reachable public sources; the one confirmed case is **RWY 20R, displaced roughly 656–700 ft (198–213 m) from the threshold** (public sources vary by ~44 ft/13 m — not independently reconciled). Surface composition also varies slightly by source for RWY 02L/20R (asphalt per one register, unconfirmed "hard" surface per another) — treat as **concrete/asphalt, not independently reconciled** pending an AIP cross-check. Heavy monsoon/typhoon-season rainfall is the standing seasonal contamination/braking-action consideration (§14) rather than any structural runway peculiarity.

### 3.4 Weather threat 🟥
**Typhoon season (~May–Nov, peak Jul–Sep)** is this field's defining weather hazard, consistent with its direct South China Sea exposure. Two concrete, recent examples: **Typhoon Ragasa (September 2025)** shut the airport down entirely for a period and cancelled over 150 flights (roughly 20% of the day's schedule) at its peak impact; **Typhoon Noul (July 2026)** produced 681 delays and 308 cancellations at ZGGG in a single event. Outside typhoon season, the humid subtropical climate brings routine **summer afternoon convective thunderstorm activity**, and the South China coast is a recognised belt for **episodic advection/radiation fog in late winter/early spring** (general regional climatology — not independently confirmed as an ZGGG-specific statistic this pass). See §14.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) the **Pearl River Delta's shared, congested multi-airport TMA** (§3.2) and CAAC's strict, centralised ATFM regime (CTOT/MINIT-style flow control — see the [Asia airspace brief](../../../../airspace/asia.md) §6); (2) the **five-runway dynamic mixed-mode operation**, including the RWY 02R/20L and 01L/19R ILS-protected-area/taxiway interactions with Terminal 3 (§3.2/§13); (3) the **Terminal 1 closure since 7 May 2026**, which has redistributed gate/stand assignment across Terminal 2 and the newly opened Terminal 3 and leaves the current-day allocation only provisionally confirmed (§6/§13); and (4) the **typhoon-season operational-suspension risk** (§3.4/§14), which is a scheduling and fuel-planning driver, not merely a tactical weather item. The field carries **no curfew** (a genuine operational asset for schedule flexibility) but **is** IATA Level 3 slot-coordinated, so schedule-integrity discipline still matters commercially (see Dispatch §4).

---

## 4. Cautions & Warnings

- **Pearl River Delta multi-airport TMA congestion** — expect vectoring, holding and handoff complexity near the Shenzhen/Hong Kong/Macau/Zhuhai airspace boundaries; brief for a busy, procedurally-constrained terminal environment even under radar.
- **Typhoon season (~May–Nov, peak Jul–Sep)** can suspend all operations with limited notice — carry weather-independent alternate/holding fuel in season and monitor tropical-cyclone advisories closely at planning.
- **Terminal 1 has been closed for renovation since 7 May 2026** — confirm the current gate/terminal assignment before planning; do not assume historic Terminal 1 routing, stand or customs-hall information.
- **Five-runway dynamic mixed-mode operation** — there is no single fixed preferential runway; expect ATC-driven runway reallocation, especially at peak arrival/departure banks.
- **RWY 02R/20L's ILS protected area overlaps part of the Terminal 3 taxiway system**, and a similar effect touches RWY 01L/19R's southern ILS — expect extended taxi/hold instructions when either runway runs simultaneous landing/take-off traffic.
- **Heavy mixed cargo/passenger movement** — the field hosts a major integrated express-cargo carrier's Asia-Pacific hub alongside high passenger-carrier volume; expect heavy freighter movements sharing the runway/taxiway system, particularly on the eastern (cargo-apron) side.
- **No AIP-China primary source reached this pass** — most precise figures (declared distances, PCN, exact ATC sector map, ILS category) in this brief are tier-4 cross-checked and flagged 🟧; treat as planning-level, not chart-grade.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are **Pearl River Delta TMA congestion** and **typhoon-season contingency planning**, not a special-approach qualification gate. 🟥
- **Crew-qualification gate:** None identified beyond standard type currency; brief the PRD-congestion and typhoon-contingency picture as the field's real preparation item. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. China generally requires state overflight/landing permits and prior approval for foreign operators (see the [Asia airspace brief](../../../../airspace/asia.md) §9) — confirm permit status at planning. 🟧
- **Overflight / entry / permits:** Standard PRC international-arrival entry requirements apply; state permit/PPR practice for foreign operators is general China-wide policy, not independently ZGGG-sourced this pass. 🟧
- **Operations notes:** ANSP — CAAC's **Middle-South Regional Air Traffic Management Bureau (MS-ATMB)**. Airport operator — Guangzhou Baiyun International Airport Company. The field is the primary hub for its dominant home carrier and also hosts a major integrated express-cargo carrier's regional Asia-Pacific hub (referenced neutrally per governance — see §16).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | **H24 — no curfew by design**; the field was purpose-built without the older Baiyun site's night restrictions | 🟩 |
| Night / curfew restrictions | **None** — published 24-hour operation | 🟩 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available given hub scale; specific into-plane supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International halls in Terminal 2 (A-gates) and Terminal 3; Terminal 1 (historic international piers) closed since 7 May 2026; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Multiple international FBO/ground-handling agents present for business aviation; scheduled-carrier ground-handling arrangements not independently confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 02L | 3,800 × 60 m | Asphalt (reported); PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Original 2004 pair |
| 20R | 3,800 × 60 m | Asphalt (reported); PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | **Displaced threshold ~656–700 ft (198–213 m)** — sources vary; original 2004 pair |
| 02R | 3,800 × 60 m | Concrete; PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Original 2004 pair |
| 20L | 3,800 × 60 m | Concrete; PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Original 2004 pair |
| 01R | 3,600 × 45 m | Concrete; PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Third runway, commissioned Feb 2015 as "01/19" (originally landing-only owing to airspace conflict with the nearby Foshan Shadi airfield); renamed 01R/19L on the fourth runway's Jan 2025 commissioning |
| 19L | 3,600 × 45 m | Concrete; PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | See 01R note |
| 01L | 3,400 × 45 m | Concrete; PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | **Fourth runway**, commissioned 23 Jan 2025; built to 4E code (747/A380-capable) |
| 19R | 3,400 × 45 m | Concrete; PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | See 01L note |
| 03 | 3,600 × 45 m | Concrete; PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | **Fifth runway** ("3rd eastern runway"), commissioned 30 Oct 2025 alongside Terminal 3; **oriented differently from the four near-parallel N–S runways above** — sits on the field's eastern side near the new terminal |
| 21 | 3,600 × 45 m | Concrete; PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | See 03 note |

*Source: cross-checked public registers (OurAirports, SkyVector, Wikipedia) plus the ICAO APAC ATM/SG-13 working paper on the fifth-runway commissioning (§Sources). No CAAC AIP AD-2 primary source reached this pass — declared distances (TORA/TODA/ASDA/LDA) and PCN are **not published in any reachable public source** and are flagged accordingly throughout. All lengths/widths in metres, cross-checked across at least two public registers. The four near-parallel runways (01L/19R, 01R/19L, 02L/20R, 02R/20L) run roughly 013–017°/193–197° true; the fifth (03/21) is a separately-aligned runway on the airport's east side, not part of that parallel set.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Guangzhou ATIS | 127.00 / 128.60 | H24 (assumed) | 🟧 |
| Delivery | Baiyun Delivery | 121.95 | H24 (assumed) | 🟧 |
| Ground / Apron | Baiyun Ground / Apron | 121.60 / 121.75 / 121.77 / 121.82 / 121.85 / 121.97 | HX/H24 mixed (assumed) | Multiple positions — take the assigned frequency 🟧 |
| Tower | Baiyun Tower | 118.10 / 118.25 / 118.80 / 118.87 / 130.00 | Mixed (assumed) | Multiple positions across the five-runway field — take the assigned frequency 🟧 |
| Approach / Departure | Guangzhou Approach / Departure | 119.60 / 119.70 / 120.40 / 121.05 / 121.17 / 124.20 / 126.35 / 126.55 / 127.75 | Mixed (assumed) | Sector-specific — take the assigned frequency 🟧 |
| Centre / FIR | Guangzhou (ZGZU) ACC | Per current AIRAC | H24 | See [Asia airspace brief](../../../../airspace/asia.md) — no dedicated ZGZU FIR brief built yet (§18) |

*Source: cross-checked public navdata registers (FlightPlanDatabase, SkyVector), retrieved 2026-07-26 — **not sourced to a primary CAAC AIP and not independently re-verified against a current AIRAC cycle**. The multiplicity of approach/tower/ground frequencies is consistent with a large multi-runway, multi-terminal hub, but the exact current runway-to-frequency mapping — especially following the Oct 2025 fifth-runway commissioning — is not confirmed. Treat all values here as 🟧 pending an AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS (LOC) RWY 01R | IOO | 109.30 | H24 (assumed) | Category not confirmed 🟧 |
| ILS (LOC) RWY 02L | IBB | 110.90 | H24 (assumed) | Category not confirmed 🟧 |
| ILS (LOC) RWY 02R | IDM | 108.50 | H24 (assumed) | Category not confirmed 🟧; ILS protected area interacts with Terminal 3 taxiway (§3.2) |
| ILS (LOC) RWY 19L | IPP | 111.50 | H24 (assumed) | Category not confirmed 🟧 |
| ILS (LOC) RWY 20L | IXL | 111.90 | H24 (assumed) | Category not confirmed 🟧 |
| ILS (LOC) RWY 20R | IAA | 110.75 | H24 (assumed) | Category not confirmed 🟧 |
| VOR | CEN (Cencun) | 114.60 | H24 (assumed) | ~15.6 NM, radial 340° |
| VOR | TAN (Yuantan) | 112.50 | H24 (assumed) | ~16.9 NM, radial 170° |
| VOR | CON (Conghua) | 113.00 | H24 (assumed) | ~19.3 NM, radial 235° |
| VOR | POU (Pingzhou) | 114.10 | H24 (assumed) | ~23.2 NM, radial 019° |
| NDB | FO (Guangzhou) | 410 kHz | H24 (assumed) | ~15.7 NM, radial 193° |

*Source: cross-checked public navdata registers (FlightPlanDatabase, SkyVector), retrieved 2026-07-26. This ILS/navaid set reflects the **original three-runway configuration**; approach infrastructure for the two 2025-commissioned runways (01L/19R, 03/21) is **not found in any reachable public source** — flagged in §18. ILS category (I/II/III) not confirmed from a primary table for any runway.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) assumed — confirm no local override on current chart. 🟧
- **Preferential runway logic:** No fixed rule — CAAC's MS-ATMB dynamically allocates the active runway set (currently a "three take-off / three landing" mixed mode) using Stand-Based and Transfer-Point-Based strategies (§3.2); expect vectoring onto whichever runway ATC assigns for the traffic and weather picture at the time.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 01R | ILS (IOO) | Not confirmed 🟧 | Not confirmed 🟧 | Category not confirmed |
| 02L | ILS (IBB) | Not confirmed 🟧 | Not confirmed 🟧 | Category not confirmed |
| 02R | ILS (IDM) | Not confirmed 🟧 | Not confirmed 🟧 | Category not confirmed; ILS-protected-area/Terminal-3 interaction (§3.2) |
| 19L | ILS (IPP) | Not confirmed 🟧 | Not confirmed 🟧 | Category not confirmed |
| 20L | ILS (IXL) | Not confirmed 🟧 | Not confirmed 🟧 | Category not confirmed |
| 20R | ILS (IAA) | Not confirmed 🟧 | Not confirmed 🟧 | Category not confirmed; displaced threshold (§7) |
| 01L / 19R | Not confirmed — 2025-commissioned runway | 🟧 | 🟧 | No approach infrastructure confirmed in reachable sources |
| 03 / 21 | Not confirmed — 2025-commissioned runway | 🟧 | 🟧 | No approach infrastructure confirmed in reachable sources |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Trigger conditions not confirmed this pass; brief for the field's episodic late-winter/early-spring fog potential (§14) pending a primary-source figure. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat delta); the operative missed-approach concern is re-sequencing into the dense, dynamically-reconfigured five-runway traffic flow and the wider Pearl River Delta TMA (§3.2).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** China mandates RNP 1 terminal procedures (SID/STAR) fleet-wide across its continental FIRs — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). Runway-specific gradient notes not confirmed this pass. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources; confirm cross-bleed/APU notification procedure and push-back policy locally. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 fully slot-coordinated**; CAAC's strict, centralised ATFM regime (CTOT/MINIT-style flow control) applies as standard practice across Chinese continental airspace — see the [Asia airspace brief](../../../../airspace/asia.md) §6. 🟧
- **De-icing:** **NIL** — ZGGG sits in a humid subtropical climate with no winter freezing season; de-icing provisioning is not a relevant consideration at this field (unlike higher-latitude K Global destinations — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for fields where it does apply).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed; the field's **published 24-hour, no-curfew operation** suggests a materially lighter noise-charge/curfew regime than curfewed hubs elsewhere in the network, but no specific noise-charge schedule was found this pass. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed in exact count; Terminal 2 (opened 2018, 35+ remote gates/56 jetbridges) and the new Terminal 3 (opened Oct 2025) are built to modern wide-body-hub scale; exact Code E/F stand allocation not confirmed. 🟧
- **Push-back:** Not confirmed — policy (mandatory vs self-manoeuvre) not found in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; expect ATC-driven routing given the dynamic five-runway allocation strategy (§3.2/§10).
- **Hot spots / tight taxiways:** 🟥 The **RWY 02R/20L ILS protected area**, which overlaps part of the **Terminal 3 taxiway system**, and a similar effect on **RWY 01L/19R's southern ILS** — both ICAO-flagged (§3.2) as lengthening departure taxi distances and increasing landing separation when those runways run simultaneous operations. CAAC (MS-ATMB) is actively working to narrow the protected areas and adjust Type-B runway-holding-position geometry to mitigate this — confirm current status at planning.
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical (Köppen Cfa/Cwa-transition) climate typical of the Pearl River Delta; wind pattern is monsoon-driven — broadly southerly/south-westerly in the summer wet season and northerly/north-easterly in the winter dry season (general regional climatology; not independently ZGGG-specific-sourced this pass). 🟧
- **Seasonal hazards:** **Typhoon season (~May–Nov, peak Jul–Sep)** is the defining hazard — the field has direct South China Sea exposure and has suffered full-stop closures and hundreds of cancellations in single events (Typhoon Ragasa, Sep 2025; Typhoon Noul, Jul 2026 — §3.4). Summer brings routine **afternoon convective thunderstorm** activity typical of the subtropical monsoon climate. Late winter/early spring carries a general regional tendency toward **advection/radiation fog** along the South China coast — treat as general climatology pending an ZGGG-specific frequency statistic. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Local effects:** No significant terrain/sea-breeze local effect beyond the regional monsoon/typhoon influence — the field sits on the flat delta plain.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (especially given the ongoing five-runway/dynamic-allocation transition and the RWY 02R/20L and 01L/19R ILS-protected-area work), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current CAAC ATFM/flow-control measures, Terminal 1 renovation status, and any active tropical-cyclone bulletin. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** and **Pearl River Delta / South China regional alternate** for the network (per the [Asia airspace brief](../../../../airspace/asia.md) §8) — not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company alternates **VHHH (Hong Kong Intl)** — a different jurisdiction/AIP authority (Hong Kong CAD, not mainland CAAC) — and [**ZSPD**](../zspd/index.md) (Shanghai Pudong) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available given the field's hub/cargo-gateway scale; specific into-plane supplier and hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the 3,800 m main pair or the 4E-code 3,400 m runway. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No type-specific field-length, field-elevation or hot-and-high consideration applies at ZGGG — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning considerations here are network-wide rather than type-specific: **typhoon-season schedule/fuel planning** (§3.4/§14) and **Pearl River Delta TMA congestion/CAAC flow control** (§3.2) apply equally across the fleet.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **AIP China (CAAC/AISC) was not reached this pass** — subscription/registration-gated; every figure below traces to public cross-check sources only, per governance.
- **ARP coordinates** — cross-source variance of up to ~1 km between public registers; not AIP-confirmed.
- **Magnetic variation** — ~3° W is a tier-4 estimate only, not sourced to a primary table.
- **Declared distances (TORA/TODA/ASDA/LDA) and PCN** — not found in any reachable public source for any of the five runways.
- **RFF category** — not published; inferred CAT 9/10 given 4E-code construction, not AIP-confirmed.
- **ILS category (I/II/III) per runway** — not confirmed from a primary table.
- **Approach/navaid infrastructure for the two 2025-commissioned runways (01L/19R, 03/21)** — not found in any reachable public source; the ILS/VOR/NDB set in §9 reflects only the original three-runway configuration.
- **ATC frequency-to-runway/sector mapping** — sourced to cross-checked pre-expansion navdata; not independently re-verified against a current AIRAC cycle, especially post-Oct-2025 fifth-runway commissioning.
- **SIDs/STARs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima, transition altitude/level, LVP trigger, engine run-up, reverse-thrust policy, push-back policy, follow-me availability, noise-abatement procedure** — none confirmed in reachable sources.
- **Fuel supplier(s) and into-plane hours** — assumed available given hub scale, not individually confirmed.
- **Customs/immigration desk hours** (Terminal 2/Terminal 3, post-Terminal-1-closure) — not confirmed.
- **Terminal 1 renovation completion date / reopening plan** — not found; treat the current Terminal 2/3-only international configuration as the operative state until confirmed otherwise.
- **No dedicated Guangzhou (ZGZU) FIR brief built yet** in OM C — only the Asia area brief currently covers this FIR at summary level.
- **Displaced-threshold figure for RWY 20R** — sources vary (~656 ft vs ~700 ft) and are not reconciled.
- **RWY 02L/20R surface composition** — sources vary (asphalt vs unconfirmed "hard" surface).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ZGGG/ and /runways.html and /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- Wikipedia — "Guangzhou Baiyun International Airport" — https://en.wikipedia.org/wiki/Guangzhou_Baiyun_International_Airport (retrieved 2026-07-26). *Runway history/count, terminal history and Terminal 1 closure date, curfew-free operating history, FedEx-hub background, PRD context.*
- Flight Plan Database — ZGGG — https://flightplandatabase.com/airport/ZGGG (retrieved 2026-07-26). *Pre-expansion (three-runway) ILS/VOR/NDB and ATC frequency cross-check; magnetic variation estimate.*
- SkyVector — ZGGG — https://skyvector.com/airport/ZGGG/Guangzhou-Baiyun-Airport (retrieved 2026-07-26). *Runway/coordinate/frequency cross-check.*
- ICAO APAC — ATM/SG/13 – WP/18, "Preparation for ATC Operation of the Fifth Runway at Guangzhou Baiyun International Airport" (presented by China, Singapore, 25–29 Aug 2025) — https://www.icao.int/sites/default/files/APAC/Meetings/2025/2025%20ATMSG13/03-Working%20Papers/WP18%20Preparation%20for%20ATC%20Operation%20of%20the%20Fifth%20Runway%20at%20Guangzhou%20Baiyun%20International%20Airport.pdf (retrieved 2026-07-26). *Runway-allocation strategy, ILS-protected-area/Terminal-3 taxiway interaction, four-to-five-runway operational-mode detail, MS-ATMB as ANSP.*
- Simple Flying — "Guangzhou Airport's New 4 Runway Operations: What To Know" (2025-02-02) — https://simpleflying.com/guangzhou-airport-new-4-runway-operations/ (retrieved 2026-07-26). *Fourth-runway dimensions/4E-code/747-A380 capability, daily-movement capacity figures.*
- Xinhua — "Guangzhou airport opens fifth runway, Terminal 3" (2025-10-30) — https://english.news.cn/20251030/4e108ae0df6046979c2377544dba87b1/c.html (retrieved 2026-07-26). *Fifth-runway/Terminal-3 commissioning date, expansion-project scale and capacity targets.*
- Lexology / macaonews.org / CAPA — Pearl River Delta airspace-management background — https://www.lexology.com/library/detail.aspx?g=1604c29f-f83a-4ad0-ad18-1a36084bc3a4 · https://macaonews.org/news/greater-bay-area/pearl-river-delta-hub-guangzhou-new-airport-foshan-guangdong/ · https://centreforaviation.com/analysis/reports/hong-kong-responding-to-congestion-in-the-pearl-river-delta-21340 (retrieved 2026-07-26). *Tripartite Working Group (2004), PRD ATM Plan v2.0 (2007), planned Pearl River Delta Hub (Guangzhou New) Airport (~2028).*
- Travel and Tour World / INFO Guangdong — Typhoon Ragasa and Typhoon Noul impact reporting — https://www.travelandtourworld.com/news/article/a8nw7xc6e7uh/ · https://info.newsgd.com/node_73b7112307/d5a2b68652.shtml (retrieved 2026-07-26). *Typhoon-driven cancellation/delay figures at ZGGG.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
