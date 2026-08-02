# YPPH — Perth Intl · Airport Briefing

**YPPH / PER** · Perth, Western Australia, Australia · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Australia-derived, K Global build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Australia (Airservices Australia, AD 2 YPPH / ERSA extract) plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S31°56′25″ / E115°58′01″ (−31.9403, 115.9667) `[AIP Australia AD 2 YPPH]` |
| Field elevation | **67 ft AMSL** |
| Mag variation | **2° W** (AIP-certified value; epoch not confirmed this pass) 🟧 |
| Time zone | **UTC+8 (AWST)** — Western Australia does **not** observe daylight saving |
| Runway(s) | **03/21** 3,444 × 45 m (main, ILS-equipped) · **06/24** 2,163 × 45 m (secondary, ILS-equipped) — figures TORA, see §7. **A third runway (03R/21L, 3,000 m parallel to 03/21) began construction Dec 2025** — not yet operational, see §18 |
| Preferential runway | Wind-dependent; RWY 03/21 is the primary pair, RWY 06/24 the secondary crosswind pair |
| Longest LDA | 3,444 m (03/21) |
| Approaches | **ILS on RWY 03 (SA CAT I), RWY 21 (CAT IIIb) and RWY 24 (CAT I)**; RWY 06 is **non-precision only** (no ILS) |
| RFF category | **CAT 9 H24** 🟩 |
| Control type | **Radar** — Perth Tower/Approach/Departures/Ground on the field; field sits in the **Melbourne FIR (YMMM)** — see [Oceania area brief](../../../../airspace/oceania.md) |
| Elevation class | Sea-level (67 ft) — **not** hot-and-high; non-factor for performance |
| Special-airport status | 🟩 **No curfew** (one of only a handful of major Australian airports without one) — see §5/§6. IATA-slot-coordinated (Capacity Optimisation Group) and subject to Ground Delay Program Arrival (GDP-A). |
| Customs / PoE | **Yes** — hours not individually confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No — destination / long-haul gateway** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **YMML (Melbourne), YSSY (Sydney), YPDN (Darwin)** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | AIP notes the **Obstacle Limitation Surface (OLS) is "extensively infringed by terrain east of the aerodrome"** on both runway pairs — corroborated by the public Darling Scarp/Perth Hills terrain feature ~20–25 km east; not extreme, but a genuine terrain consideration this remote field's isolation makes worth flagging — see §3.1. |
| Runway length vs fleet perf | 🟩 | 3,444 m main runway (03/21) is ample for any K Global widebody arriving on a long-haul sector; 2,163 m RWY 06/24 is non-limiting for typical arrival/departure weights but shorter — plan accordingly for a heavy long-haul departure. |
| Approach availability / minima | 🟩 | RWY 21 is CAT IIIb-capable (the field's low-vis runway); RWY 03 SA CAT I; RWY 24 CAT I; RWY 06 non-precision only. |
| Airspace / traffic / control | 🟩 | Moderate-density radar-controlled terminal airspace; estimated airborne holding up to 20 min at peak Mon–Fri periods. Isolated relative to Sydney/Melbourne — long over-water/over-outback sectors on most routings. |
| Weather / seasonal hazard | 🟧 | Summer easterly wind-gradient turbulence below 3,000 ft; low-level windshear on RWY 06 arrivals in strong N–NW winds; seasonal bird-hazard activity — see §14. |
| Curfew / slots / hours | 🟩 | **No curfew** — one of Perth's genuine commercial advantages as a long-haul gateway; IATA slot management (COG) and GDP-A apply. |
| RFF category vs our types | 🟩 | CAT 9 — above any of our fleet's requirement. |
| Fuel availability | 🟩 | Air BP (H24, Jet A1/F34/Avgas), Viva Energy Aviation and FBO fuel sales all confirmed on-field. |
| Customs / handling / security | 🟧 | Security Controlled Airport; exact customs desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
YPPH sits at 67 ft AMSL on the coastal plain, but the AIP explicitly notes for **both** runway pairs that the **Obstacle Limitation Surface is "extensively infringed by terrain east of the aerodrome."** This corresponds to the publicly documented **Darling Scarp / Perth Hills**, rising to several hundred metres roughly 20–25 km east of the field — not an extreme terrain profile, but a genuine easterly consideration for departure/missed-approach climb performance that is worth briefing, particularly given the field's isolation (no nearby alternate to divert to quickly on the eastern side). Exact grid-MORA/terrain-clearance figures not obtained this pass — pull the current-AIRAC terrain chart. 🟧

### 3.2 Airborne conflict / traffic 🟩
Perth is a moderate-density single-hub terminal area (two runway pairs, no crossing-runway complexity comparable to Sydney). Estimated airborne holding for arrivals reaches up to 20 min during Mon–Fri peak windows (0100–0500 and 0900–1300 UTC); by day, ATC may apply a reduced 2,400 m runway-occupancy separation standard on RWY 03/21, permitting two aircraft on the runway simultaneously. Field sits in the **Melbourne FIR (YMMM)** — see [Oceania area brief](../../../../airspace/oceania.md).

### 3.3 Runway excursion 🟩
No displaced thresholds published for either runway pair in the reachable extract — genuinely confirmed, not merely absent-from-source. RESA (90 m × 90 m) is confirmed at every runway end. The one notable pavement note: all runway ends are ungrooved for the first 100 m from the start of take-off.

### 3.4 Weather threat 🟧
**Severe turbulence below 3,000 ft** in the terminal area during summer months, associated with easterly wind gradients, is AIP-published. **Low-level windshear** is published for RWY 06 arrivals when wind is from the N–NW at 37 kt or greater. No cyclone/monsoon exposure at this latitude (Perth is south of the tropical cyclone belt) — see §14.

### 3.5 Operational considerations 🟩
As a remote long-haul gateway with **no curfew**, YPPH's operational profile is materially more permissive than YSSY's — the defining planning consideration here is the field's **isolation** (long sectors to/from the east-coast hubs and overseas) rather than any local operating restriction. A **third runway (03R/21L, 3,000 m, parallel to 03/21)** began construction in December 2025 — a material future capacity change, not yet operational; monitor for commissioning status (§18). Seasonal bird hazard (multiple species, year-round with distinct seasonal peaks) is a genuine, AIP-documented consideration (§4).

---

## 4. Cautions & Warnings

- **Terrain east of the field infringes the Obstacle Limitation Surface** on both runway pairs (Darling Scarp/Perth Hills) — brief the eastern departure/missed-approach climb profile accordingly.
- **RWY 06 has no centreline lights and no ILS** — ensure correct runway-centreline alignment when lining up from TWY V; a wider-than-expected runway end has caused misaligned-takeoff incidents (AIP-flagged hot spot).
- **Low-level windshear on RWY 06 arrivals** when wind is N–NW at 37 kt or greater.
- **Severe turbulence below 3,000 ft** in the terminal area during summer months with easterly wind gradients.
- **Seasonal bird hazard is real and AIP-documented:** galahs/corellas (spring), ibis flocks (winter/spring), nankeen kestrels (year-round, peak spring/summer), ducks (winter/spring, especially after heavy rain), black cockatoos (Jan–May, dawn/dusk east-west transits).
- **No RWY 24 overshoot/training available** — published restriction on training/overshoot flights.
- **Third runway (03R/21L) under construction (commenced Dec 2025)** — not yet operational; do not assume its availability.
- **A380 taxi is restricted to TWY A/A9/A11/D** (subject to Aerodrome Operator approval) if TWY C is unserviceable — confirm current status before planning.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **easterly terrain/OLS infringement** and the **CAT IIIb low-vis environment on RWY 21**. 🟧
- **Crew-qualification gate:** CAT IIIb currency required for full-capability low-vis arrivals on RWY 21 — confirm crew/aircraft currency before planning. 🟧
- **Operating restrictions / bans:** No RWY 24 overshoot for training; intersection departures **not permitted**; RWY 06/24 has more restrictive low-vis taxiway availability than RWY 03/21. 🟩 No curfew, no RNP AR ban found in reachable sources.
- **Overflight / entry / permits:** Standard international arrival; Security Controlled Airport. 🟩
- **Operations notes:** Aerodrome operator — **Perth Airport Pty Ltd**; ANSP — **Airservices Australia**. GA/itinerant operators must appoint a ground handling agent 48 hours prior to operating at Perth.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Perth Centre/Approach/Delivery/Ground/Tower — hours not individually itemised in reachable extract | 🟧 |
| AD operating hours | **No curfew** — effectively unrestricted subject to slot/GDP-A regime | 🟩 |
| Night / curfew restrictions | **None.** Perth is one of only a handful of major Australian airports without a curfew (Sydney, Adelaide, Essendon and Gold Coast are the curfewed set) | 🟩 |
| RFF category | **CAT 9 H24** | 🟩 |
| Fuel | **Air BP H24** (Jet A1/F34/Avgas); **Viva Energy Aviation** 0400–0100 local daily (Jet A1); Revesco Aviation & Airflite FBOs (H24 ops) | 🟩 |
| PCR | 700/F/A/1.70 MPa/T both runway pairs (Australia publishes PCR, not PCN) | 🟩 |
| Customs | Confirmed international PoE; exact desk hours not confirmed | 🟧 |
| Handling / FBO | **Revesco Aviation** (FBO, VIP lounge, H24, civil/military, customs/AQIS with PN) and **Airflite** (FBO, H24, private aircraft) confirmed on-field | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCR | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03 | 3,444 × 45 m | Grooved / PCR 700/F/A/1.70 MPa/T | 3,444 m | 3,504 m | 3,444 m | 3,444 m | No displaced threshold; RESA 90×90 m |
| 21 | 3,444 × 45 m | Grooved / PCR 700/F/A/1.70 MPa/T | 3,444 m | 3,644 m | 3,444 m | 3,444 m | No displaced threshold; RESA 90×90 m; CAT IIIb approach |
| 06 | 2,163 × 45 m | Grooved / PCR 700/F/A/1.70 MPa/T | 2,163 m | 2,224 m | 2,163 m | 2,163 m | No displaced threshold; RESA 90×90 m; **no ILS, no centreline lights** |
| 24 | 2,163 × 45 m | Grooved / PCR 700/F/A/1.70 MPa/T | 2,163 m | 2,224 m | 2,163 m | 2,163 m | No displaced threshold; RESA 90×90 m |

*Source: AIP Australia AD 2 YPPH, ERSA Runway Distance Supplement, effective 09 Jul 2026 (retrieved 2026-07-26). All runway ends ungrooved from start-of-takeoff through 100 m. A **third runway (03R/21L, 3,000 m × 45 m, parallel to 03/21, between Terminal 1 and the existing main runway)** commenced construction December 2025 — not reflected in these figures, not yet operational (§18).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Perth ATIS | 113.7 (Perth VOR) / 123.8 | H24 (assumed) | Also by phone |
| Delivery | Perth Delivery (ACD) | 118.55 | — | Clearances for departures from Perth |
| Ground | Perth Ground (SMC) | 121.7 (W of RWY 03/21) · 122.2 (E of RWY 03/21) | — | Runway-side split |
| Tower | Perth Tower | 127.4 | — | |
| Approach | Perth Approach | 123.6 / 132.95 | — | |
| Departures | Perth Departures | 118.7 | — | |
| Centre / FIR | Perth Centre (FIA) | 135.25 | — | Clearances for departures ex HLS/ALA within Perth CTR, RAAF Pearce (when deactivated), or IFR/VFR-by-night ex Jandakot direct into Perth CTA/CTR; field lies in the **Melbourne FIR (YMMM)** |
| VOLMET | Australia VOLMET | 6676 / 11387 kHz | H24 | Broadcast :00–:05 & :30–:35 |

*Source: AIP Australia AD 2 YPPH, effective 09 Jul 2026 (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | PH | 113.7 / CH84X | H24 (assumed) | Voice available for emergency use |
| ILS/DME | IPN (RWY 03) | 110.1 | H24 | **SA CAT I** (Performance Classification I/T/1) |
| ILS/DME | IGD (RWY 21) | 109.5 | H24 | **CAT IIIb** (Performance Classification III/E/4); associated SFL 600 m; close proximity to RAAF Pearce ILS |
| ILS/DME | IPH (RWY 24) | 109.9 | H24 | CAT I (assumed — classification letter not confirmed this pass); close proximity to RAAF Pearce ILS 🟧 |
| — | RWY 06 | — | — | **No ILS** — non-precision approaches only |

*Source: AIP Australia AD 2 YPPH, effective 09 Jul 2026 (retrieved 2026-07-26). GP false-indication cautions are published for aircraft lining up from certain taxiways on RWY 03/21 — verify current NOTAM/chart.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed in reachable extract this pass — verify current chart. 🟧
- **Speed:** 250 KIAS below 10,000 ft AMSL when not on a SID/STAR/vector (AIP-confirmed); advise ATC if a higher speed is operationally required.
- **Preferential runway logic:** Wind-driven between the 03/21 primary pair and the 06/24 secondary pair; RWY 21 is the default low-visibility runway (only one runway is nominated during LVP, normally RWY 21).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 03 | ILS (IPN) | SA CAT I |
| 21 | ILS (IGD) | **CAT IIIb** — normally used for low-vis arrivals; no arrivals permitted below 75 m RVR at TDZ |
| 24 | ILS (IPH) | CAT I |
| 06 | Non-precision only | No ILS; no centreline lights — misaligned-takeoff hot spot on line-up from TWY V |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Preparation begins when weather prevents visual monitoring of the manoeuvring area; full LVP required at cloud ceiling ≤300 ft or visibility <550 m RV/RVR for takeoff, or <550 m RV/RVR (RWY 03/21) / <800 m RV (RWY 06/24) for approach. Only **one runway** is nominated during LVP, normally **RWY 21**.
- **Missed approach watch-items:** The AIP-noted terrain east of the field (Darling Scarp/Perth Hills, §3.1) is the primary watch-item on a missed approach or go-around toward the east — verify the published climb gradient/turn on the current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify current chart, particularly given the easterly terrain noted in §3.1. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md). 🟧
- **Take-off minima:** RVR ≥75 m (RWY 21, localiser-guided); RVR ≥125 m (RWY 03); RVR ≥350 m (RWY 06/24) — CASA-approved operators. No intersection departures permitted.
- **Start-up / push-back:** Aircraft with ground power contact **Perth Delivery (118.55)** ready for pushback/start, then stand by for Ground once compliant with ATFM; aircraft without ground power start at own discretion and advise Delivery when complete.
- **ATC slot / CTOT & clearance:** **IATA slot management** applies to all airline/aircraft operators via the **Capacity Optimisation Group (COG)**; **Ground Delay Program Arrival (GDP-A)** runs on demand 0030–1400 UTC Mon–Fri; **Airport Collaborative Decision Making (A-CDM)** runs continuously H24 with a mandatory Target Off-Blocks Time (TOBT).
- **De-icing:** Not confirmed in reachable sources — Perth's Mediterranean-type climate (mild, rarely at or below freezing) makes routine de-icing provisioning unlikely to be a significant factor. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Noise Abatement Procedures apply per AIP DAP — specific routings not confirmed this pass. 🟧
- **Night noise / dB limits:** No curfew and no per-movement dB limit found in reachable sources — Perth's lack of a curfew has been a recurring subject of public debate but no scheme has been implemented as of this build. 🟩
- **Engine run-up restrictions:** Engine ground running on aprons permitted only with Aerodrome Operator approval, not above ground-idle power. 🟥
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not individually itemised by bay number in reachable sources for our operation; multiple Code C/D/E wingspan and weight restrictions apply across the apron/taxiway system (see below). 🟧
- **Push-back:** ACFT must use minimum power entering/exiting aprons; several named jet-blast-hazard restrictions apply around Bays 12/13/14 and the Terminal 3 apron taxiway.
- **Standard taxi routes:** Confirm with Ground/Delivery on the day; A380 aircraft may use TWY A, A9, A11 and D subject to Aerodrome Operator approval when TWY C is unserviceable (TWY A6/A7/A9 must be vacant for A380 taxiing on TWY A).
- **Hot spots / tight taxiways:** 🟥 **TWY J1 and TWY A** (runway-incursion hot spot — aircraft slow to vacate RWY 24, intersection complexity, holding points distant from the runway); **TWY C, N and S** (intersection complexity, distant holding points); **RWY 06 line-up from TWY V** (misaligned-takeoff hot spot — wider-than-expected runway end, no centreline lights).
- **Follow-me:** **Available on request to ATC.**

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean-type climate — dry, warm-to-hot summers and mild, wetter winters; sea-breeze effects are a routine consideration for a coastal-plain field.
- **Seasonal hazards:** **Severe turbulence below 3,000 ft** in the terminal area during summer months, associated with easterly wind gradients (AIP-published). Bird hazard is seasonal and material: galahs/corellas (spring), ibis (winter/spring), nankeen kestrels (year-round, peak spring/summer), ducks (winter/spring, peaking after heavy rain), black cockatoos (Jan–May). No tropical cyclone exposure at this latitude.
- **Local effects:** Low-level windshear on RWY 06 arrivals in strong N–NW winds (≥37 kt); the AIP-noted easterly terrain (Darling Scarp/Perth Hills) can also generate local wind effects on approach/departure — not separately quantified this pass. 🟧

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (including third-runway construction NOTAMs), navaid U/S, LVP/RVR equipment status, lighting, obstacle/crane, RFF status, GPS/RAIM for RNP procedures, bird-hazard advisories. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / long-haul gateway** — the remote, west-coast anchor of the Australian network, typically the far end of a long sector from the east coast or overseas rather than a base.
- **Nearest suitable alternates:** Company preferred alternates **YMML** (Melbourne), [**YSSY**](../yssy/index.md) (Sydney) and **YPDN** (Darwin) `[VAMSYS mirror 2026-07-26]` — all are several hours' flight away given Perth's isolation; confirm suitability, runway/RFF adequacy and current minima per leg, and treat alternate selection as a genuine long-range planning exercise rather than a short hop.
- **Fuel-uplift notes:** Air BP (H24, Jet A1/F34/Avgas) and Viva Energy Aviation (Jet A1, extended daily hours) confirmed on-field. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on RWY 03/21 (3,444 m); see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference — Perth's isolation makes it a genuine long-range-planning destination (trans-Pacific/trans-Indian-Ocean sector profile) rather than a performance-limited field.

---

## 17. Fleet-specific notes (optional)

- **A388 (A380-800):** subject to a specific taxiway contingency (TWY A/A9/A11/D routing, subject to Aerodrome Operator approval) when TWY C is unserviceable — confirm current taxiway status before planning an A380 movement. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- No field-elevation or field-length performance penalty for any K Global type at YPPH; the operative planning consideration is the field's **remoteness** (long-range fuel/alternate planning) rather than local aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation epoch** — AIP certifies 2° W; the currency/epoch of that certification not confirmed this pass.
- **SIDs/STARs (current names)** and RNP/climb-gradient requirements — not obtained in this research pass; pull the live current-AIRAC procedure list before use, particularly given the easterly terrain note (§3.1).
- **Transition altitude/level** — not confirmed this pass.
- **Third runway (03R/21L)** — construction commenced December 2025; length/width/commissioning date and eventual declared distances not yet published in reachable sources — monitor for status changes.
- **RWY 24 ILS Facility Performance Classification letter** — not confirmed (AIP note truncated in the retrieved extract); CAT I assumed from HIAL-CAT I lighting but not independently verified.
- **Exact easterly terrain/grid-MORA figures** — AIP states "OLS extensively infringed by terrain E of AD" without a specific height; public corroboration points to the Darling Scarp/Perth Hills (several hundred metres, ~20–25 km east) but the exact obstacle-clearance impact is not quantified this pass.
- **Customs/immigration desk hours** — international PoE confirmed, exact hours not confirmed.
- **De-icing availability/procedure** — not confirmed; mild climate makes routine provisioning unlikely but unverified.
- **Noise abatement procedure (NAP) routings** — referenced to AIP DAP, not obtained this pass.
- **Stand/gate assignment for our operation** — not individually itemised in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Australia (Airservices Australia) — AD 2 YPPH, Aerodrome Facilities (FAC) chart**, effective 09 Jul 2026 — mirrored via https://www.crc.id.au/xplane/charts/ERSA-2026-JUL-09/Perth%20(YPPH)%20FAC.pdf (retrieved 2026-07-26). *RFF category, physical characteristics, ATC frequencies, navaids, local traffic regulations, low-vis operations, bird hazard, terrain/OLS infringement note.*
- **AIP Australia — AD 2 YPPH, Runway Distance Supplement (RDS)**, effective 09 Jul 2026 — https://www.crc.id.au/xplane/charts/ERSA-2026-JUL-09/Perth%20(YPPH)%20RDS.pdf (retrieved 2026-07-26). *Declared distances (TORA/TODA/ASDA/LDA), RESA.*
- OurAirports — https://ourairports.com/airports/YPPH/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Wikipedia — "Perth Airport" — https://en.wikipedia.org/wiki/Perth_Airport (retrieved 2026-07-26). *Third-runway (03R/21L) construction start December 2025, runway history.*
- Airservices Australia — "Airport curfews" — https://www.airservicesaustralia.com/about-us/about-our-operations/airport-curfews/ (retrieved 2026-07-26). *Confirms Perth as a non-curfewed airport (Sydney, Adelaide, Essendon, Gold Coast are the curfewed set).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Australia (Airservices); K Global fields from live VAMSYS; 4-page pack. |
