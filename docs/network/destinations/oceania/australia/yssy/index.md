# YSSY — Kingsford Smith · Airport Briefing

**YSSY / SYD** · Mascot, Sydney, New South Wales, Australia · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Australia-derived, K Global base build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Australia (Airservices Australia, AD 2 YSSY / ERSA extract) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S33°56′46″ / E151°10′38″ (−33.9461, 151.1772) `[AIP Australia AD 2 YSSY]` |
| Field elevation | **21 ft AMSL** |
| Mag variation | **13° E** (AIP-certified value; epoch of the certification not confirmed this pass) 🟧 |
| Time zone | UTC+10 (AEST) / **UTC+11 (AEDT)** — NSW observes daylight saving, Oct–Apr |
| Runway(s) | **16R/34L** 3,962 × 45 m (longest, main parallel) · **16L/34R** 2,438 × 45 m (parallel) · **07/25** 2,530 × 45 m (crosswind) — all figures TORA, see §7 |
| Preferential runway | Wind/noise/traffic dependent under the **Long Term Operating Plan (LTOP)** runway-rotation/noise-sharing scheme (10 published runway modes) — see §12 |
| Longest LDA | 3,962 m (34L) |
| Approaches | **ILS Facility Performance Category II on all four ends of the parallel pair** (16L, 16R, 34L, 34R); **CAT I only on 07/25** (no CAT II/III lighting/classification found); **GBAS/GLS on all six runway ends** (07,16R,16L,25,34L,34R) |
| RFF category | **CAT 10** (ICAO highest — A380-capable) 🟩 |
| Control type | **Radar** — Sydney Tower/Approach/Director/Ground on the field; field sits in the **Melbourne FIR (YMMM)**, not Brisbane — see [Oceania area brief](../../../../airspace/oceania.md) and the Melbourne (YMMM) FIR brief it references |
| Elevation class | Sea-level (21 ft) — **not** hot-and-high; non-factor for performance |
| Special-airport status | 🟥 **Hard curfew 2300–0600 local (Sydney Airport Curfew Act 1995)** + **80 movements/hour cap** + slot-coordinated — see §5/§6 |
| Customs / PoE | **Yes** — Terminal 1 (International); hours not individually confirmed 🟧 |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **YES — Oceania regional base** `[VAMSYS mirror 2026-07-26]` 🟩 |
| Company preferred alternates | **YSCB (Canberra), YWLM (Williamtown/Newcastle)** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal site on Botany Bay; no close-in high terrain. Obstacles are man-made (see §3.1), not terrain. |
| Runway length vs fleet perf | 🟩 | 3,962 m main parallel (16R/34L) is ample for any K Global widebody; the 2,438 m parallel (16L/34R) and 2,530 m crosswind (07/25) are non-limiting for typical arrival/departure weights but relevant to heavy-widebody routing — see §3.5/§13. |
| Approach availability / minima | 🟧 | ILS CAT II on the parallel pair; **07/25 is CAT I only** — plan the crosswind runway as a fair-weather option only. RNP/SID/STAR names not confirmed this pass. |
| Airspace / traffic / control | 🟥 | Sydney basin is dense, radar-controlled terminal airspace; **PRM (Precision Runway Monitor) operations** apply for simultaneous independent approaches to the closely-spaced parallels — see §3.2. |
| Weather / seasonal hazard | 🟧 | No extreme seasonal hazard; East Coast Lows and summer thunderstorms are the main wildcards — see §14. |
| Curfew / slots / hours | 🟥 | **Hard curfew 2300–0600**, shoulder-hour restrictions, **80 movements/hour cap**, Slot Management Scheme (ACL) — the field's defining commercial constraint. See §5/§6/§12. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement. |
| Fuel availability | 🟧 | Multiple suppliers confirmed on-field; H24 hours not individually confirmed for all. |
| Customs / handling / security | 🟧 | Security Controlled Airport; Terminal 1 international hall confirmed; exact desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
YSSY sits at 21 ft AMSL on flat land adjoining Botany Bay — there is **no close-in high terrain**. The AIP's obstacle set here is entirely man-made: a telecommunications tower (223 ft AMSL, 2.28 NM west of ARP), a transient obstruction from cargo container trains crossing near the RWY 25 approach/RWY 07 takeoff surfaces (max 15 ft AGL penetration), and a line of trees penetrating the RWY 25 Visual Segment Surface (VSS) at ~2.1 km from the ARP (AIP notes they remain clear of the obstacle-clearance surface). None of these are CFIT-significant; verify the current obstacle chart as routine practice.

### 3.2 Airborne conflict / traffic 🟥
Sydney is one of the busiest single-precinct airports in Australia, with **three runways in a triangular pattern**: two parallels (16L/34R and 16R/34L, close enough to require **Precision Runway Monitor (PRM) operations** for simultaneous independent instrument approaches) crossed by 07/25. When PRM ops is nominated on the ATIS, aircraft must confirm PRM capability (serviceable Mode S transponder) or accept reduced priority; a documented radio-failure contingency exists on the Director frequency (squawk 7600, do not track through final). By day, ATC may also apply a reduced 2,400 m runway-occupancy separation standard on the main parallel, allowing two aircraft on the runway simultaneously. Independent/dependent visual approaches to the parallels are routine in good weather. Field sits in the Melbourne FIR (YMMM) — see [Oceania area brief](../../../../airspace/oceania.md).

### 3.3 Runway excursion 🟧
Displaced thresholds exist on three of the six runway ends (RWY 25: 101 m; RWY 16L: 231 m; RWY 34R: 38 m) — confirm the correct usable LDA per §7, not the full runway length. RESA (90 m × 90 m) is confirmed at every runway end — a genuinely verified positive. Water is close aboard on several ends (Botany Bay, reclaimed land under 16R/34L) — brief the correct stopway/RESA geometry rather than assuming open overrun.

### 3.4 Weather threat 🟧
No extreme signature hazard; the East Coast of NSW is subject to **East Coast Lows** (autumn/winter, heavy rain/wind) and summer convective thunderstorm activity. Low-level windshear/wake-turbulence caution is published for parallel RWY 34 operations when wind is W–NW at 5 kt or greater (§4). See §14.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) the **hard 2300–0600 curfew** with only limited shoulder-period movements (§6/§12) — this is the field's dominant scheduling driver; (2) the **80 movements/hour cap** independent of the curfew; (3) **fleet-specific taxi/operating restrictions** published for A340-600, A380-800, A350-1000, B777-300 and B747-8 (all types K Global operates) — specific taxi routes and restrictions apply and must be obtained from the Aerodrome Operator before planning a movement (§13/§17); (4) **wildlife activity** — grey-headed flying foxes (peak Apr–Jun, after last light), Australian white ibis (Jun–Nov, transiting 16R/34L between TWY B8 and TWY L), and silver gulls in rain periods.

---

## 4. Cautions & Warnings

- **Hard curfew 2300–0600 local** — no scheduled movements outside limited, tightly defined shoulder-period exceptions; historical fines have reached A$550,000 per breach (current maximum not reconfirmed this pass) 🟧.
- **80 movements/hour cap** applies independently of the curfew — a network-wide scheduling constraint, not just a night-time one.
- **PRM operations** on the closely-spaced parallels (16L/34R, 16R/34L) — confirm PRM capability/priority before planning a simultaneous-approach period.
- **07/25 is CAT I only** — do not plan it as a low-visibility option; the parallel pair (CAT II) is the low-vis runway set.
- **Fleet-specific taxi restrictions apply to A388, B748, A35K and B77W** — obtain the Aerodrome Operator's Aircraft Operating Restrictions document before a first movement of any of these types (§13/§17). 🟥
- **Wildlife activity is seasonal and material** — flying foxes after last light (peak Apr–Jun), ibis flocks transiting the main runway (Jun–Nov).
- **Wake turbulence caution** during parallel RWY 34 operations when wind is W–NW ≥5 kt.
- **Displaced thresholds on RWY 25 (101 m), RWY 16L (231 m) and RWY 34R (38 m)** — always fly the correct usable LDA, never the physical runway length.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **hard curfew**, the **PRM/parallel-runway environment**, and the **fleet-specific taxi-restriction document** for our largest types. 🟥
- **Crew-qualification gate:** No CAT II/III currency gate beyond standard company minima found in reachable sources; confirm PRM-participation currency/equipage before planning. 🟧
- **Operating restrictions / bans:** Hard curfew 2300–0600 (§6/§12); intersection departures by jet aircraft on RWY 34L **not permitted** (except medical-priority); circling approach to RWY 16L/34R **not permitted at night**. 🟥
- **Overflight / entry / permits:** Standard international arrival; Security Controlled Airport — crew must hold an Australian or Sydney ASIC and be met/escorted by a based FBO or ground handler. 🟩
- **Operations notes:** Aerodrome operator — **Sydney Airport Corporation Ltd (SACL)**; ANSP — **Airservices Australia**. Slot coordination via the **Sydney Slot Management Scheme (Airport Coordination Limited, ACL)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Tower/Approach/Director/Ground — hours not individually itemised in reachable extract; major-hub H24-pattern assumed | 🟧 |
| AD operating hours | Governed by the curfew regime below | 🟥 |
| Night / curfew restrictions | **Hard curfew 2300–0600 local** (Sydney Airport Curfew Act 1995); limited scheduled/approved movements in shoulder periods 2300–2400 & 0500–0600; **separate 80 movements/hour cap** (Sydney Airport Demand Management Act 1997) applies at all hours | 🟥 |
| RFF category | **CAT 10** | 🟩 |
| Fuel | Air BP, Viva Energy, Execujet (FBO) confirmed on-field; individual hours not confirmed | 🟧 |
| PCN/PCR | Runway-specific — see §7 (Australia publishes PCR, not PCN) | 🟩 |
| Customs | Terminal 1 International; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Execujet (FBO, H24, IS-BAH Stage II); additional ground handlers not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCR | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 2,530 × 45 m | Grooved / PCR 1430/F/A/X/T | 2,530 m | 2,620 m | 2,560 m | 2,530 m | RESA 90×90 m |
| 25 | 2,530 × 45 m | Grooved / PCR 1430/F/A/X/T | 2,530 m | 2,590 m | 2,530 m | 2,429 m | **DTHR 101 m**; RESA 90×90 m |
| 16L | 2,438 × 45 m | Grooved / PCR 750/F/A/X/T | 2,438 m | 2,528 m | 2,438 m | 2,207 m | **DTHR 231 m**; RESA 90×90 m |
| 34R | 2,438 × 45 m | Grooved / PCR 750/F/A/X/T | 2,438 m | 2,498 m | 2,438 m | 2,400 m | **DTHR 38 m**; RESA 90×90 m |
| 16R | 3,962 × 45 m | Grooved / PCR 797/F/A/X/T | 3,962 m | 4,052 m | 3,992 m | 3,877 m | Main parallel; RESA 90×90 m |
| 34L | 3,962 × 45 m | Grooved / PCR 797/F/A/X/T | 3,962 m | 4,059 m | 3,962 m | 3,962 m | Main parallel; RESA 90×90 m |

*Source: AIP Australia AD 2 YSSY, ERSA Runway Distance Supplement, effective 19 Mar 2026 (retrieved 2026-07-26). Australia publishes PCR (Pavement Classification Rating), the ACN/PCR-system successor to ACN/PCN. Wikipedia states 16R/34L as "4,400 m paved / 3,920 m between zebra thresholds" — a minor discrepancy vs the AIP's 3,962 m TORA figure; **AIP TORA is the authoritative operational figure**, flagged 🟧 for the paved-length discrepancy. Numerous taxiway-intersection ("intersection departure") declared distances are also published — not reproduced here, see AIP/current AIRAC.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Sydney ATIS | 118.55 | H24 (assumed) | Also by phone |
| Delivery | Sydney Delivery (ACD) | 133.8 | — | |
| Coordinator | Sydney Coordinator | 127.6 | — | Pushback/start/engine-run/tow coordination — see §11 Departure |
| Ground | Sydney Ground (SMC) | 121.7 (E of 16R/34L) · 126.5 (W of 16R/34L) | — | Callsign "Sydney Ground" when Coordinator unavailable |
| Tower | Sydney Tower | 120.5 (RWY 16R/34L, 07/25) · 124.7 (RWY 16L/34R) | — | Runway-specific position |
| Approach | Sydney Approach North 124.4 · Sydney Approach South 128.3 | — | — | North: 45NM N–10NM S; South: 45NM S–10NM N |
| Director | Sydney Director E 125.3 · Sydney Director W 126.1 | — | — | Independent/PRM approach vectoring |
| PRM (monitor only) | Sydney PRM E 133.95 (RWY 16L/34R) · Sydney PRM W 119.45 (RWY 16R/34L) | — | Pilot-monitored, not for transmission; not guarded outside PRM ops hours |
| Centre / FIR | Sydney Centre (FIA) 124.55 | H24 | Class G in the Sydney basin; field lies in the **Melbourne FIR (YMMM)** |
| VOLMET | Australia VOLMET | 6676 / 11387 kHz | H24 | Broadcast :00–:05 & :30–:35 |

*Source: AIP Australia AD 2 YSSY, effective 09 Jul 2026 (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | SY | 112.1 / CH58X | H24 (assumed) | DME range limited to 90 NM |
| ILS/DME | ISY (RWY 07) | 109.9 | H24 | CAT I |
| ILS/DME | ISW (RWY 25) | 109.7 | H24 | CAT I; DTHR 101 m |
| ILS/DME | ISS (RWY 16L) | 110.9 | H24 | **Facility Performance Cat II/D/3** |
| ILS/DME | IKS (RWY 16R) | 109.5 | H24 | **Facility Performance Cat II/D/3** |
| ILS/DME | ISN (RWY 34L) | 110.1 | H24 | **Facility Performance Cat II/D/3** |
| ILS/DME | IKN (RWY 34R) | 109.3 | H24 | **Facility Performance Cat II/D/3** |
| GBAS/GLS | G07A/G16A/G16B/G25A/G34A/G34B | Channel-coded | H24 | All six runway ends equipped; course guidance advisory only 50–23 NM from GBAS site, approved for IAP inside 23 NM |

*Source: AIP Australia AD 2 YSSY, effective 09 Jul 2026 (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed in reachable extract this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below 10,000 ft AMSL when not on a SID/STAR/vector (AIP-published, confirmed).
- **Preferential runway logic:** Governed by the **Long Term Operating Plan (LTOP)** — a 10-mode runway-rotation/noise-sharing scheme that rotates configurations through the day (traffic/weather permitting) to share noise across Sydney suburbs. Aircraft up to and including A330/B787/B772 may be processed to land on either parallel (16L/R or 34L/R); larger types (A388, B748, A35K, B77W) are governed by the fleet-specific taxi-restriction document (§13/§17).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 16L | ILS (ISS); GLS (G16B) | **CAT II**-capable |
| 16R | ILS (IKS); GLS (G16A) | **CAT II**-capable; landing here requires approval to vacate left via TWY F/B3/B4 |
| 34L | ILS (ISN); GLS (G34A) | **CAT II**-capable |
| 34R | ILS (IKN); GLS (G34B) | **CAT II**-capable |
| 07 | ILS (ISY); GLS (G07A) | CAT I only |
| 25 | ILS (ISW); GLS (G25A) | CAT I only; DTHR 101 m |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Preparation begins at 2,000 m visibility; LVP fully implemented at/below 800 m visibility or cloud base ≤600 ft BKN/OVC. CAT I/II runway-holding-point protection applied at TWY A and TWY T during LVP.
- **Missed approach watch-items:** Traffic/airspace density (Sydney basin, parallel-runway environment) rather than terrain is the driver; a go-around from a visual approach in VMC must fly the GLS/ILS missed-approach procedure for the runway in use, or as ATC directs.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** RVR not less than 125 m for RWY 16R/34L and 16L/34R; RVR not less than 350 m for RWY 07/25 (CASA-approved operators).
- **Start-up / push-back:** All start/pushback/engine-run/tow/repositioning requests are coordinated via **Sydney Coordinator (127.6)**, which then hands to Ground (121.7/126.5) once compliant with any ATFM procedure — a distinctive two-step sequence at this field.
- **ATC slot / CTOT & clearance:** **Sydney Slot Management Scheme** (ACL-coordinated) applies to all operators; **Ground Delay Program (GDP) Inbound** run on demand 2000–1300 UTC (1 hr earlier during daylight saving); **Airport Collaborative Decision Making (A-CDM)** runs continuously H24 with a mandatory Target Off-Blocks Time (TOBT).
- **De-icing:** Not confirmed in reachable sources — Sydney's temperate coastal climate makes routine de-icing provisioning unlikely to be a major factor, but confirm locally. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Governed by the **Long Term Operating Plan (LTOP)** — runway-mode rotation designed to maximise movements over water/non-residential land and share unavoidable overflight noise equitably across affected communities; specific NAP routings are in AIP DAP, not confirmed this pass. 🟧
- **Night noise / dB limits:** Enforced primarily through the **hard curfew** (§6) rather than a per-movement dB limit; curfew breaches have historically drawn fines up to A$550,000 (current maximum not reconfirmed). 🟧
- **Engine run-up restrictions:** All engine runs (including idle power, outside normal flight-prep) require prior Aerodrome Operator authorisation. 🟥
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not individually itemised in reachable sources; International Terminal (T1) handles all international traffic. 🟧
- **Push-back:** One engine only permitted to start prior to pushback; aircraft with rear-mounted engines and 52 m+ wingspan may not start where a building sits behind the aircraft on a taxilane.
- **Standard taxi routes:** Default routing: TWY B northbound, TWY C southbound, TWY B10 eastbound between TWY C and RWY 16L/34R, TWY L westbound between RWY 16L/34R and TWY B — confirm with Ground/Coordinator on the day.
- **Hot spots / tight taxiways:** 🟥 Extensive wingspan-restricted turns and intersections are AIP-published, including: 36 m max-wingspan intersection departures from TWY B3/B4/B10 on RWY 16R/34L; TWY B4/C/G/DOM2 turns restricted to 36 m wingspan; TWY B between B3 and RWY 07/25 requires extra caution for aircraft larger than B737/A320 (insufficient wingtip clearance for a following large aircraft holding short); corporate-aviation apron access restricted to 22,000 kg MTOW/32 m wingspan and below.
- **Fleet-specific restrictions:** 🟥 **A340-600, A380-800, A350-1000, B777-300, Antonov AN-124 and B747-8** (all types K Global operates except our A330/A350-900/787/737/A320-family) are subject to specific operating restrictions and mandated taxi routes — the Aerodrome Operator must be contacted for the current Aircraft Operating Restrictions document before a first movement of any of these types. A published example: B777-300ER/A350-1000 landing/departing RWY 16L/34R follow specific vacate/taxi routes via TWY T6/T/L/A or B10/S/L/A.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate coastal climate; runway configuration and LTOP mode selection are jointly wind- and noise-driven.
- **Seasonal hazards:** **East Coast Lows** (autumn/winter — heavy rain, damaging wind, coastal flooding) and summer **convective thunderstorm activity** are the region's principal weather wildcards; no field-specific frequency statistic found this pass. Wake-turbulence caution is published for parallel RWY 34 operations in W–NW winds ≥5 kt.
- **Local effects:** Coastal/harbour setting; sea breeze effects likely but not quantified in reachable sources this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, PRM/simultaneous-approach status, navaid U/S, curfew/shoulder-period exemptions in force, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Oceania regional base** — a primary departure/return field for the K Global network in this region.
- **Nearest suitable alternates:** Company preferred alternates **YSCB** (Canberra) and **YWLM** (Williamtown/Newcastle) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Air BP and Viva Energy confirmed on-field; individual hours/PN process not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main parallel (16R/34L, 3,962 m); see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference. The operative constraint here is the **curfew/movement-cap schedule window**, not aircraft performance.

---

## 17. Fleet-specific notes (optional)

- **A388 (A380-800), B748 (747-8), A35K (A350-1000) and B77W (777-300ER):** all four types are named in the AIP's fleet-specific taxi-restriction notice for YSSY — **obtain the Aerodrome Operator's current Aircraft Operating Restrictions document (contact AD OPR) before planning a first movement of any of these types.** A published example for B777-300ER/A350-1000 assigns specific vacate/taxi routes on RWY 16L/34R. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- No field-elevation or field-length performance penalty for any K Global type at YSSY (sea-level, 3,962 m main parallel); the governing planning consideration is the curfew/slot/movement-cap regime, not aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation epoch** — AIP certifies 13° E; the currency/epoch of that certification not confirmed this pass.
- **SIDs/STARs (current names)** and RNP/climb-gradient requirements — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Transition altitude/level** — not confirmed this pass.
- **ATS hours per position** (Tower/Approach/Ground) — major-hub H24 pattern assumed, not individually itemised.
- **Fuel supplier hours and PN process** — multiple suppliers confirmed on-field, individual hours not confirmed.
- **Customs/immigration desk hours** — Terminal 1 international hall confirmed, exact hours not confirmed.
- **De-icing availability/procedure** — not confirmed; temperate climate makes routine provisioning unlikely but unverified.
- **Current curfew fine maximum** — historical figure (A$550,000) sourced to a c.2009 reference; current maximum not reconfirmed.
- **Noise abatement procedure (NAP) routings** — referenced to AIP DAP, not obtained this pass.
- **Runway paved-length discrepancy** — Wikipedia states 16R/34L as 4,400 m paved/3,920 m between zebra thresholds vs the AIP's 3,962 m TORA; AIP figure treated as authoritative, discrepancy not resolved to a single cause.
- **Stand/gate assignment for our operation** — not individually itemised in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Australia (Airservices Australia) — AD 2 YSSY, Aerodrome Facilities (FAC) chart**, effective 09 Jul 2026 — mirrored via https://www.crc.id.au/xplane/charts/ERSA-2026-JUL-09/Sydney-Kingsford%20Smith%20(YSSY)%20FAC.pdf (retrieved 2026-07-26). *RFF category, physical characteristics, ATC frequencies, navaids, local traffic regulations, flight procedures, curfew/slot references, noise-abatement pointer, wildlife/additional information.*
- **AIP Australia — AD 2 YSSY, Runway Distance Supplement (RDS)**, effective 19 Mar 2026 — https://www.crc.id.au/xplane/charts/ERSA-2026-MAR-19/Sydney-Kingsford%20Smith%20(YSSY)%20RDS.pdf (retrieved 2026-07-26). *Declared distances (TORA/TODA/ASDA/LDA), displaced thresholds, RESA.*
- OurAirports — https://ourairports.com/airports/YSSY/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Wikipedia — "Sydney Airport" — https://en.wikipedia.org/wiki/Sydney_Airport (retrieved 2026-07-26). *Curfew Act 1995 history (2300–0600, shoulder periods, A$550,000 fine precedent), 80 movements/hour cap, runway history, terminal layout.*
- Department of Infrastructure, Transport, Regional Development, Communications, Sport and the Arts / SACF — "The Long Term Operating Plan (LTOP)" — https://sacf.infrastructure.gov.au/ltop (retrieved 2026-07-26). *LTOP runway-mode/noise-sharing scheme.*
- Airservices Australia — "Airport curfews" — https://www.airservicesaustralia.com/about-us/about-our-operations/airport-curfews/ (retrieved 2026-07-26). *Confirms Sydney as one of four curfewed Australian airports.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Australia (Airservices); K Global fields from live VAMSYS; 4-page pack. |
