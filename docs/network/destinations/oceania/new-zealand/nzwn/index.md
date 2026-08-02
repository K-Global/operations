# NZWN — Wellington Intl · Airport Briefing

**NZWN / WLG** · Rongotai, Wellington, New Zealand · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP New Zealand (Airways NZ / Civil Aviation Authority), AD 2 NZWN, plus GEN 3.7 communications/navaid tables; approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S41 19 38 / E174 48 19 (3 NM SE of Wellington CBD) `[AIP NZ AD 2 NZWN 2.2]` |
| Field elevation | **41 ft AMSL**; reference temperature 21°C (January) |
| Mag variation | 🟧 **22°19′E (Apr 2006), annual change +2.7′** per AD 2.2; the co-located VOR WN plate (GEN 3.7) separately states **MAG VAR 23°E** — a minor cross-cycle discrepancy, not independently reconciled this pass |
| Time zone | UTC+12 (NZST) / UTC+13 (NZDT, Sep–Apr) |
| Runway(s) | **16/34**, 1,815 × 45 m, bitumen, PCN 57/F/B/X/U, grooved full length — the **sole runway**; short by international standards, on an exposed isthmus between Cook Strait and Wellington Harbour |
| Preferential runway | Wind-driven; RWY 16 left-hand circuit, RWY 34 right-hand — see §10/§11 |
| Longest LDA | 1,815 m (both directions) |
| Approaches | **ILS CAT I both runways** (16 and 34); RNP approaches also published — names only, see §10 |
| RFF category | **Variable by time of day — CAT 5 / CAT 7 / CAT 9** — see §6 |
| Control type | **Radar/ADS-B** — Wellington Tower, Wellington Approach; domestic FIR **NZZC** — see [Oceania — SW Pacific & Tasman airspace brief](../../../../airspace/oceania.md) |
| Elevation class | Sea-level (41 ft) — **not** hot-and-high; the defining hazard here is **exposed-site windshear/turbulence and demanding crosswind**, not density altitude |
| Special-airport status | 🟥 **Short single runway on an exposed peninsula between Cook Strait and Wellington Harbour** — notorious for windshear, turbulence and demanding crosswind approaches; genuinely brief the TEM (§3.4) heavily |
| Customs / PoE | **Yes** — H24 `[AIP NZ AD 2 NZWN 2.3]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | Not base — network destination `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **NZAA, NZCH** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Surrounding terrain rises quickly to the north and east of the isthmus; not a cruise-level CFIT risk but shapes local wind/turbulence — see §3.1/§3.4. |
| Runway length vs fleet perf | 🟥 | **1,815 m LDA is short** for a widebody-capable network — this is a genuine, hard performance constraint for any larger K Global type; verify per-type suitability before scheduling. |
| Approach availability / minima | 🟩 | ILS CAT I on both runways; RNP names not independently confirmed this pass 🟧. |
| Airspace / traffic / control | 🟩 | Single runway, moderate traffic; Wellington Approach/Tower manage a comparatively simple traffic picture relative to Auckland. |
| Weather / seasonal hazard | 🟥 | **Cook Strait wind-channelling drives some of the most demanding windshear/turbulence/crosswind conditions in the network** — the field's signature threat; see §3.4. |
| Curfew / slots / hours | 🟩 | H24 ATS/customs; no curfew identified in reachable sources. |
| RFF category vs our types | 🟧 | RFF category varies through the day (CAT 5/7/9 by schedule) — confirm the category in effect for the planned arrival/departure time against our fleet's requirement. |
| Fuel availability | 🟩 | Avgas 100, Jet A-1/DERD 2494 confirmed; 12 hr PN outside listed hours. |
| Customs / handling / security | 🟩 | H24 customs confirmed; named ground handlers on field (§13). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
NZWN sits at 41 ft AMSL on a narrow isthmus (the Rongotai gap) between Cook Strait to the south and Wellington Harbour to the north, with terrain rising quickly on both sides of the strip. This is not a cruise-level CFIT risk in the classic sense, but the surrounding high ground is the direct cause of the field's defining hazard — **severe local wind channelling, turbulence and windshear** (§3.4) — and PAPI on RWY 34 is specifically **restricted to 7.5° of the runway centreline due to terrain**.

### 3.2 Airborne conflict / traffic 🟩
Single runway (16/34) under **Wellington Tower/Wellington Approach** radar/ADS-B control; traffic density is materially lower than Auckland's. Wellington's control zone is split into multiple named sectors (Kelburn, West, Sinclair, Turakirae, East, Somes, Instrument) for workload management. Cross-ref the domestic NZZC FIR description in the [Oceania — SW Pacific & Tasman airspace brief](../../../../airspace/oceania.md).

### 3.3 Runway excursion 🟥
**1,815 m LDA both directions** is short by international widebody standards — this is a genuine, hard performance constraint (see §Briefing §2 and §17), not merely a caution item. The runway is **grooved for its full length**, which helps wet-runway braking, but the short LDA combined with frequent gusty crosswind (§3.4) makes this the field's standing excursion watch-item. No displaced threshold is published; the constraint is pure runway length.

### 3.4 Weather threat 🟥
**Wellington's exposed site, funnelled by Cook Strait between the North and South Islands, produces some of the most consistently demanding wind conditions in the network.** Pilots routinely encounter strong, gusty and unpredictable winds rather than steady crosswind, with turbulence and windshear reported close to touchdown — including a publicly reported Air New Zealand A321neo windshear-induced go-around on final approach. This is the field's defining operational threat: **brief windshear/turbulence contingencies (stabilised-approach discipline, go-around trigger criteria) on every Wellington approach**, particularly in a pre-frontal north-westerly airflow.

### 3.5 Operational considerations 🟥
Plan around three durable constraints specific to this field: (1) the **short 1,815 m runway** is genuinely limiting for larger K Global types — verify per-type performance before scheduling, not just as a caution; (2) **RFF category varies through the day** (CAT 5/7/9 schedule, §6) — confirm the category in effect against fleet requirement for the planned movement time; and (3) **ILS/LOC interference from taxi-exiting traffic** requires a **12 NM separation** between a full-length-landing aircraft and a following ILS/LOC/DME approach when ceiling ≤1,000 ft and/or visibility ≤5 km — a genuine low-visibility capacity constraint.

---

## 4. Cautions & Warnings

- **Windshear and turbulence are a standing, well-documented hazard** at NZWN — Cook Strait wind-channelling produces gusty, rapidly-changing conditions, particularly in pre-frontal north-westerly flow; brief a go-around contingency on every approach.
- **Short runway (1,815 m LDA both directions)** — this is a hard performance constraint for larger K Global types, not a minor caution; verify type suitability before scheduling this destination.
- **PAPI on RWY 34 is non-standard, restricted to 7.5° of runway centreline due to terrain** — do not expect a standard PAPI sector width.
- **ILS/LOC interference from taxi-exiting traffic near the localiser aerials** — in ceiling ≤1,000 ft / visibility ≤5 km conditions, a 12 NM separation applies between a full-length-landing aircraft and a following ILS/LOC/DME approach; expect possible spacing delay in marginal weather.
- **RFF category is not constant through the day** — CAT 5 (1300–1800), CAT 7 (1800–1300 except CAT 9 periods), CAT 9 (0230–0900 Mon/Wed/Fri/Sun) — confirm the category in effect for the planned movement.
- **Code D/E taxiway restriction** — TWY A is not usable by Code D/E aircraft when the runway is in use by those types, or when Code C aircraft are using the runway in visibility <3,000 m and/or ceiling <500 ft; Code D/E must enter/exit via TWY A1, A2, A10 or A11 only, with reduced taxiway centreline-to-object clearance (44.5 m) on TWY A north of the eastern apron.
- Mag variation is sourced to a 2006 AIP cycle with a co-located navaid table giving a slightly different current value — treat the exact figure as 🟧 pending live-AIRAC cross-check (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally operator-categorised as crew-restricted in reachable sources, but the standing crew-briefing items are the **short runway** and the **windshear/turbulence environment** — treat as demanding in practice. 🟥
- **Crew-qualification gate:** None formally published beyond standard type currency; confirm any operator-internal Wellington-specific briefing requirement given the field's reputation. 🟧
- **Operating restrictions / bans:** No RNP AR ban or circling restriction found in reachable sources beyond the Code D/E taxiway constraint above. 🟧
- **Overflight / entry / permits:** Standard New Zealand port-of-entry arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **Airways New Zealand** (Wellington Tower/Approach). Airport operator — **Wellington International Airport Limited (WIAL)**. An audio-visual operational briefing is published by WIAL for airlines/charter/corporate operators intending to serve Wellington — consult before first operation.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 `[AIP NZ AD 2 NZWN 2.3]` | 🟩 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | None identified in reachable sources | 🟩 |
| RFF category | 🟧 **CAT 5** 1300–1800 (1200–1700 NZDT); **CAT 7** 1800–1300 except CAT 9 periods (1700–1200 NZDT); **CAT 9** 0230–0900 Mon/Wed/Fri/Sun — and at other times by request | 🟧 |
| Fuel | Avgas 100; Jet A-1/DERD 2494, DERD 2472, DERD 2450, MIL-L-23699C — 12 hr PN outside 1700–1100 (1600–1000 NZDT) | 🟩 |
| PCN | Runway PCN 57/F/B/X/U bitumen; eastern apron concrete/bitumen PCN 26–57/F/B/X/U; western apron bitumen PCN 20–36/F/B/X/U | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Menzies Aviation, Skycare Airline Services, Capital Jet Services, Air New Zealand | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 16 | 1,815 × 45 m | Bitumen / PCN 57/F/B/X/U | 1,945 m | 2,300 m | 1,945 m | 1,815 m | THR elevation 41 ft; grooved full length |
| 34 | 1,815 × 45 m | Bitumen / PCN 57/F/B/X/U | 1,921 m | 2,300 m | 1,921 m | 1,815 m | THR elevation 24 ft; PAPI restricted to 7.5° of RWY CL due terrain |

*Source: AIP New Zealand AD 2 NZWN 2.12/2.13 (2016 AIRAC extract retrieved). RESA 90 × 90 m both ends. All distances in metres. This is a genuinely short runway for a widebody-capable network — treat §17's fleet-suitability note as load-bearing, not routine.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Wellington | 126.9 | HO | 🟧 |
| Delivery | Wellington Delivery | 128.2 | H24 | |
| Ground | Wellington Ground | 121.9 (0630–2100 LMT) / 118.8 (2100–0630 LMT) | H24 | Ground merges onto the Tower frequency overnight |
| Tower | Wellington Tower | 118.8 / 125.25 | H24 | |
| Approach | Wellington Approach | 122.3 / 119.3 / 121.1 | H24 | |
| Centre / FIR | Domestic NZZC — see [Oceania airspace brief](../../../../airspace/oceania.md) | H24 | |
| Emergency | Distress/emergency | 121.5 | H24 | |
| Fire | Wellington RFS | 134.7 | H24 | Discrete emergency frequency |

*Source: AIP New Zealand GEN 3.7-22/23 (Table GEN 3.7-1, extract carrying effective date 16 Jun 2022) — cross-checked against VATNZ SOP (sops.vatnz.net, tier-4 network-sim) which lists matching Tower/Ground/Approach/Delivery frequencies. Treat exact current values as 🟧 pending live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | WN | 112.3 | H24 | Nominal range 80 NM at 10,000 ft; 🟥 **radial roughness and occasional flag warnings may be experienced over high terrain at minimum safe altitude**; MAG VAR 23°E per this table (🟧 vs AD 2.2's 22°19′E/2006) |
| DME | WN | CH70X | H24 | Co-located with VOR WN; limited range E/W; ELEV 400 ft |
| NDB | NL | 358 | H24 | Rated coverage 20 NM |
| ILS/LOC CAT I | IEB | 110.3 | HO | Serves RWY 16. 🟧 Restricted LOC coverage E/W of centreline — do not attempt autocoupling until within 10° of final approach track; GP valid only once established on the LOC centreline |
| ILS/GP | — | 335.0 | HO | RWY 16 |
| ILS/DME | IEB | CH40X | HO | RWY 16; coverage restricted to ±10° of LOC centreline |
| ILS/LOC CAT I | IMP | 109.9 | HO | Serves RWY 34. 🟧 Restricted LOC coverage — same autocoupling caution as RWY 16; **scalloping may be experienced due to road traffic** near the localiser |
| ILS/GP | — | 333.8 | HO | RWY 34 |
| ILS/DME | IMP | CH36X | HO | RWY 34 |

*Source: AIP New Zealand GEN 3.7-23/24 (extract effective 7 Oct 2021). The restricted LOC coverage and off-centreline autocoupling caution on both runways is a specific, load-bearing AIP note — brief it.*

---

## 10. Arrival

- **Transition altitude / level:** TA **13,000 ft** `[AIP NZ AD 2 NZWN 2.17]`; TL by QNH — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Unless otherwise assigned by ATC, fly the published/promulgated approach speed with a **minimum 150 kt IAS to 5 NM on final** — advise ATC if unable.
- **Preferential runway logic:** Wind-driven on the single 16/34 runway; circuit direction is **left-hand for RWY 16, right-hand for RWY 34**; circuit altitude 1,500 ft AMSL.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 16 | ILS CAT I (IEB); RNP | Autocoupling caution — see §9 |
| 34 | ILS CAT I (IMP); RNP | Autocoupling/scalloping caution — see §9; PAPI restricted 7.5° due terrain |

- **STARs (names only):** RNAV STARs feed both runways; RNP (AR) approaches are also published for this field, reflecting the terrain-constrained environment — names not independently confirmed this pass. 🟧 Pilots unable to accept an RNAV arrival should indicate this in the flight plan and advise ATC on initial contact for vectors to the ILS.
- **LVP:** ILS CAT I on both runways; the standing weather concern here is **windshear/turbulence rather than low-visibility fog** — see §14.
- **Missed approach watch-items:** Terrain shapes the local wind environment rather than presenting a direct CFIT threat; the operative missed-approach concern is a **windshear/turbulence-triggered go-around**, which is a routine, briefed contingency at this field rather than an exceptional event.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Ex-RWY 16: **ATVEV** (preferred for jets, divergent 20° after URBEM), **AGROR** (preferred for southern-bound props via VENAM, divergent 40°), **UPROG** (preferred for northern-bound props, divergent 40°), **IVDAL** (preferred for NZNS/NZWB traffic, divergent 50°); ex-RWY 34: **UPLUD #R** (preferred for jets, RNP segment to UPLUD then RNAV 1), **UPLUD #P** (Cat C only, divergent 18° after COUBY), **IPKEP** (preferred for western-bound props), **URGEV** (preferred for northern/southern/eastern-bound props, divergent 42° after GANJI) — verify current AIRAC names/gradients before use. 🟧
- **RNP / climb-gradient requirements:** The preferred jet departure ex-RWY 34 (**UPLUD #R**) carries an RNP segment to UPLUD before RNAV 1 — confirm aircraft/crew RNP approval. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Wellington has a **single main taxiway (TWY A)**; international-apron pushback capacity is for one aircraft at a time — a second aircraft requesting pushback is directed to a remote push point. Night pushback uses marked holding zones **Z1/Z2** to avoid blocking gate access during busy/overnight periods.
- **ATC slot / CTOT & clearance:** No formal slot-coordination level found in reachable sources.
- **De-icing:** Facilities described in AIP as "limited — contact ground handling agencies"; New Zealand's temperate maritime climate is not a signature de-icing driver at this field, but confirm availability before a winter rotation. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Prescribed under CAR Part 93, Subpart C; detailed on the Wellington Noise Abatement charts (not independently obtained this pass). 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources. 🟧
- **Reverse thrust / idle-reverse policy:** Given the short runway (1,815 m LDA), reverse thrust use is likely operationally significant for stopping margin — not independently confirmed as a published policy this pass. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 Aerobridge stands are datum-referenced for A320-size aircraft, **except Stand 23 which is referenced for B777** — Wellington's stand infrastructure is oriented toward narrowbody/single-aisle widebody rather than large widebody service; confirm suitability for any K Global type before scheduling.
- **Push-back:** Managed by Wellington Ground; "pushback at your discretion" applies within uncontrolled apron portions; high-traffic periods may see explicit push/start direction issued.
- **Standard taxi routes:** **Single main taxiway (TWY A)**, fed via TWY R/S/T/U and B-series intersections; Eastern Pier traffic routes via R/S/T/U or directly via B8/B9/B10 (RWY 34 in use) or B9/B8/B7 (RWY 16 in use).
- **Hot spots / tight taxiways:** 🟥 **Code D/E aircraft (C130, A330, A340, B757, B767, B777) may not use TWY A when the runway is in use by those types**, or when Code C aircraft are on the runway in visibility <3,000 m/ceiling <500 ft; Code D/E must enter/exit via **TWY A1, A2, A10 or A11 only**, with a **reduced taxiway centreline-to-object clearance of 44.5 m** on TWY A north of the eastern apron — exercise caution on taxiway curves/intersections, main-gear-to-pavement-edge clearance may be limited.
- **Follow-me:** Availability not confirmed in reachable source. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate maritime climate dominated by **Cook Strait wind-channelling** — Wellington is one of the windiest urban environments served by a major airport anywhere; strong, gusty and often unpredictable winds are the norm rather than the exception, particularly in a pre-frontal north-westerly airflow.
- **Seasonal hazards:** Windshear/turbulence is a **year-round** hazard at this field rather than a seasonal one, though spring months are frequently cited as particularly challenging. No fog/hot-and-high signature hazard.
- **Local effects:** The narrow isthmus between Cook Strait and Wellington Harbour, with rising terrain either side, channels and accelerates wind across the runway — this is the direct cause of the field's windshear/turbulence reputation. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF-category schedule/downgrade, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Network destination; also a **company preferred alternate for NZAA** (see the [NZAA Briefing](../nzaa/index.md) §16) — its own short-runway/windshear caveats apply equally when used in that role.
- **Nearest suitable alternates:** Company preferred alternates [**NZAA**](../nzaa/index.md) (Auckland), **NZCH** (Christchurch) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Avgas 100 and Jet A-1/DERD 2494 confirmed, 12 hr PN outside 1700–1100 (1600–1000 NZDT). See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟥 **1,815 m LDA is genuinely short** — confirm per-type field-length/weight suitability before scheduling any K Global type into NZWN; this is the field's dominant performance consideration. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- 🟥 **The 1,815 m runway is a hard constraint for larger K Global types.** Confirm balanced-field/landing-distance performance for the specific type and weight planned before scheduling this destination — this is not a routine caution, it is a load-bearing dispatch consideration. Stand infrastructure is also oriented toward narrowbody/single-aisle widebody service (Stand 23 is the sole B777-referenced stand); confirm gate suitability alongside runway performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — AD 2.2 gives 22°19′E (Apr 2006, +2.7′/yr); the GEN 3.7 VOR WN entry separately states 23°E — not independently reconciled to a single current-cycle figure.
- **ATC frequencies** — sourced to a GEN 3.7 extract effective 2021–2022, cross-checked against VATNZ (tier-4, network-sim); not independently AIRAC-current-verified.
- **RNP/RNAV and RNP (AR) approach current names and minima** — referenced generically (VATNZ) but not obtained from a primary AIP procedure chart this pass.
- **Take-off minima, de-icing provisioning detail, noise dB limits, engine run-up/reverse-thrust policy, follow-me availability** — none confirmed in reachable sources.
- **Transition level (by QNH)** — not independently confirmed.
- **Exact windshear/LVP trigger criteria and go-around statistics** — qualitative hazard well corroborated (public incident reporting, AIP terrain/PAPI notes); no quantified trigger table found in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP New Zealand, AD 2 NZWN 2.1–2.24** (extract carrying effective dates 14 Nov 2013 – 15 Sep 2016) — runway/declared distances, RFF, handling, ILS restrictions, Code D/E taxiway rules — mirrored via https://silo.tips/download/aerodrome-geographical-and-administration-data (retrieved 2026-07-26). **Treat exact current-cycle figures as needing a live-AIP cross-check.**
- **AIP New Zealand GEN 3.7-22/23/24** (Table GEN 3.7-1, extract carrying effective dates 2021–2022) — ATC frequencies, navaid idents/frequencies — mirrored via https://fyi.org.nz/request/22244/response/83943/attach/8/GEN%203.7.pdf (retrieved 2026-07-26).
- **VATNZ — NZWN Wellington Standard Operating Procedures** — https://sops.vatnz.net/aerodromes/Class-C/nzwn/ (retrieved 2026-07-26). *Network-sim, not regulatory — SID assignment/RNP-segment detail, single-taxiway routing, holding points cross-checked here.*
- Simple Flying — "Air New Zealand A321 Touches Down Before Aborting In Wind Shear Go-Around" — https://simpleflying.com/air-new-zealand-a321-wellington-wind-shear-go-around/ (retrieved 2026-07-26). *Windshear hazard corroboration.*
- Wikipedia — "Wellington Airport" — https://en.wikipedia.org/wiki/Wellington_Airport (retrieved 2026-07-26). *General/Cook Strait wind-channelling corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP New Zealand AD 2 NZWN + GEN 3.7; K Global fields from live VAMSYS; 4-page pack. |
