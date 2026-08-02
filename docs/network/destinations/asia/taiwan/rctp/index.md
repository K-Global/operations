# RCTP — Taiwan Taoyuan Intl · Airport Briefing

**RCTP / TPE** · Taoyuan, Taiwan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Taiwan (CAA)-derived, Asia network build

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP Taiwan (Civil Aeronautics Administration, MOTC), AD 2 RCTP, plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 25°04′49″N / 121°13′56″E (25.0803, 121.2322) `[AIP Taiwan AD 2 RCTP 2.2]` — site 063° bearing 1,800 m from THR 05L |
| Field elevation | **108 ft AMSL** (reference temperature 34°C); geoid undulation 63 ft `[AIP AD 2 RCTP 2.2]` — 🟧 OurAirports (tier-4) reports 106 ft, a minor variance; AIP treated as authoritative |
| Mag variation | 🟧 **5° W (2019 epoch)**, annual change 0.08° W (decreasing); current-day value not independently re-derived against a current AIRAC cycle |
| Time zone | UTC+8 (Taiwan Standard Time) — no daylight-saving observed |
| Runway(s) | **05L/23R** 3,660 × 60 m (asphalt) · **05R/23L** 3,800 × 60 m (concrete + asphalt, **displaced thresholds both directions**) |
| Preferential runway | 🟧 No single published wind-preference rule found; runway-in-use is ATC/wind-assigned. Fixed traffic-pattern by runway: **05L/05R left-hand, 23R/23L right-hand**; **west traffic pattern** used for the aerodrome generally — see §10/§13 |
| Longest LDA | 3,700 m (05R); 3,660 m (05L/23R); 3,450 m (23L — most-reduced, THR displaced 350 m) |
| Approaches | **ILS on all four runway ends** (05L/23R/05R/23L); CAT II/III-grade lighting, secondary power (R-UPS 1 s switch-over) and a stepped Low Visibility Procedure regime down to RVR 175 m are in place — 🟧 exact per-runway **ILS sub-category (I/II/III) not confirmed** from a primary table this pass; RNAV(GNSS) approaches likely available — verify current AIRAC |
| RFF category | **CAT 10** 🟩 — 🟧 disabled-aircraft removal capability is rated only to **B744**, not A380, despite A380-rated stands on the field |
| Control type | **Radar** — Taipei Approach handles all IFR traffic; Taipei Tower provides the VMC traffic-pattern service only; Taipei ACC en route — see [Asia Airspace Brief](../../../../airspace/asia.md) (Taipei / **RCAA** FIR) |
| Elevation class | Near sea-level (108 ft) — **not** hot-and-high; the defining seasonal/performance driver is **typhoon season**, not density altitude |
| Special-airport status | Not operator-categorised as a restricted-crew special airport; **3 AIP-published ground Hot Spots** plus terrain-restricted LOC/VOR sectors — see §5/§9 |
| Customs / PoE | **Yes — H24** `[AIP AD 2 RCTP 2.3]` 🟩 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred / suitable alternates | **VHHH, RJBB, RKSI** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 15 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | No close-in high terrain of Himalaya-belt severity, but the AIP obstacle table (§9) lists urban buildings/trees in three of the four approach/take-off funnels and restricts three LOC sectors and the on-field VOR by terrain effect — real, AIP-published shielding to brief, not a driftdown-class hazard. |
| Runway length vs fleet perf | 🟩 | 3,660–3,800 m runways are ample for any K Global type at Category-L operating weights. |
| Approach availability / minima | 🟧 | ILS on all four ends; CAT II/III-grade infrastructure present (R-UPS, stepped LVP to RVR 175 m), but exact per-runway ILS sub-category not confirmed from a primary table. |
| Airspace / traffic / control | 🟧 | Major East-Asia hub, Radar throughout (Taipei Approach/ACC); high traffic density typical of a top-tier regional gateway — see Asia Airspace Brief for the Taipei (RCAA) FIR context. |
| Weather / seasonal hazard | 🟥 | **Typhoon season (~Jun–Oct, peak Jul–Sep)** is the field's defining hazard — routinely forces schedule disruption/ground stops. A dedicated LLWAS windshear-sensor network is installed; note vertical wind shear/slant visual range are **not** measured (AIP-stated gap). |
| Curfew / slots / hours | 🟧 | No hard night curfew found; H24 AD/ATS operation. Scheduled short runway-closure maintenance windows and noise-driven engine-run/test-flight restricted hours apply — see §6/§12. |
| RFF category vs our types | 🟩 | CAT 10 — above any of our fleet's requirement; note the B744-only disabled-aircraft removal rating (above). |
| Fuel availability | 🟩 | Jet-A1, H24, "no limitation" on fuelling facilities/capacity per AIP. |
| Customs / handling / security | 🟩 | H24 confirmed from the primary AIP source for customs, immigration, health/quarantine and security. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
RCTP sits on the coastal plain west of Taipei at 108 ft AMSL — there is **no close-in high terrain** of the severity found elsewhere in the region (cf. the Himalaya belt covered in the Asia Airspace Brief). However, the AIP's own obstacle table (AD 2.10) lists real, published obstructions in three of the four approach/take-off funnels: the **23L approach / 05R take-off** funnel carries buildings up to **501 ft**, an electric tower at **333 ft** and trees up to **375 ft**; the **05L approach / 23R take-off** and **05R approach / 23L take-off** funnels carry lower buildings (112–235 ft) and isolated trees/poles. These obstacles directly constrain the navaids: the **05L localiser (ITIA)** is unusable beyond 17 NM between 24°–26° left of course due to terrain, and the **23R (ITYA)** and **23L (ICJN)** localisers are each unusable beyond 10° left of course due to terrain; the on-field **VOR/DME (APU)** shows temporary indicator swing on the 115°–315° radial sector from terrain effects. None of this is Himalaya-belt-class exposure, but it is real, AIP-quantified obstacle/terrain shielding — fly the charted sector and MSA, don't assume unrestricted LOC/VOR guidance outside it.

### 3.2 Airborne conflict / traffic 🟧
RCTP is one of the busiest international gateways in East Asia, sitting under the **Taipei (RCAA)** FIR. ATC is **Radar throughout** — Taipei Approach handles all IFR arriving/departing traffic, Taipei Area Control Center works the en-route segment, and Taipei Tower's role is limited to the VMC aerodrome traffic pattern (**05L/05R fly a left-hand circuit, 23R/23L a right-hand circuit**; the field uses a **west traffic pattern** generally). Cross-ref the [Asia Airspace Brief](../../../../airspace/asia.md) for the wider Taipei (RCAA) FIR picture — including the East-China-Sea/Taiwan-Strait overlapping-ADIZ overflight-risk context carried in that brief's §9, which is an enroute/routing consideration and is not re-derived here.

### 3.3 Runway excursion 🟧
Both runway pairs carry **displaced thresholds**: RWY 05R is displaced 100 m (LDA 3,700 m against a 3,800 m physical runway) and RWY 23L is displaced 350 m (LDA 3,450 m — the most-reduced landing distance at the field). Brief the correct LDA per runway/direction; do not assume the full physical runway length is usable for landing. No chronic tailwind-runway pattern or contamination data was found in reachable sources; heavy tropical/typhoon-season rainfall is the relevant wet-runway consideration rather than winter contamination (RCTP has no de-icing programme).

### 3.4 Weather threat 🟥
**Typhoon season (~Jun–Oct, peak Jul–Sep per Central Weather Administration climatology)** is RCTP's signature seasonal hazard — Western Pacific tropical cyclones regularly force ground stops, terminal-area re-routing and network-wide schedule disruption across Taiwan; see §14 and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). The field operates a dedicated **Low-Level Windshear Alert System (LLWAS, 16 wind sensors)** plus 4 anemometers and an AWOS network (6 wind-measuring positions, 6 RVR, 4 ceilometer, Doppler weather radar) — AIP-published evidence that windshear is a recognised local hazard. The AIP explicitly notes, however, that **vertical wind shear and slant visual range are NOT measured/reported** pending suitable equipment — a real reporting gap to brief. 🟧

### 3.5 Operational considerations 🟥
Three durable items to plan around: (1) **three AIP-published ground Hot Spots** — TWY N11/L2 and TWY N9/L1 crossing RWY 05L/23R to/from the cargo apron (bays 516–525), and the service road/TWY S8 crossing RWY 05R/23L to/from the south fire station — each a recognised runway-incursion risk zone; (2) a comprehensive, **RVR-tiered Low Visibility Procedure regime** (active below RVR 550 m, with further degradation steps at 300 m and 175 m) reflecting genuine deep low-visibility capability, but demanding close ATIS/LVP-status awareness; and (3) **A380-specific ground restrictions** — taxiways E, P6, P9, P10, Q6 and Q7 are prohibited to A380, and the field's disabled-aircraft removal capability is rated only to B744. K Global's own category here is L; the A380 items are noted for situational awareness of the shared ground environment.

---

## 4. Cautions & Warnings

- **Displaced thresholds on both runway pairs** (05R +100 m, 23L +350 m) — always fly/plan the correct LDA, not the full physical runway length.
- **Typhoon season (~Jun–Oct, peak Jul–Sep)** can force short-notice, large-scale schedule disruption — build weather-independent alternates and extra fuel/holding in season.
- **LOC 05L unusable beyond 17 NM between 24°–26° left of course**, and **LOC 23R / LOC 23L each unusable beyond 10° left of course**, due to terrain — brief before relying on raw LOC guidance outside the charted sector.
- **Three AIP-published ground Hot Spots** around the cargo-apron runway crossings and the south-fire-station service-road crossing of RWY 05R/23L — expect heightened runway-incursion vigilance.
- **Bird activity present year-round, peaking Mar–May** with large migratory-season flocks (terns, sandpipers, plovers, egrets) — brief a strike-risk lookout in season.
- **Vertical wind shear and slant visual range are NOT measured/reported** at RCTP pending suitable equipment — do not expect a windshear-alert product beyond the LLWAS wind-sensor network itself.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew special airport in reachable sources; the standing crew-briefing items are the ground Hot Spots (§3.5) and the typhoon-season weather threat (§3.4/§14). 🟧
- **Crew-qualification gate:** No specific low-visibility currency mandate confirmed from a primary source this pass; the field's RVR-tiered LVP regime (down to 175 m) implies CAT II/III-capable crews/aircraft are the appropriate standard for low-RVR ops — confirm operator policy. 🟧
- **Operating restrictions / bans:** A380 prohibited on TWY E, P6, P9, P10, Q6 and Q7; **no U-turns permitted on the movement area** (shut down/idle and call for a tow if off-track); training/test flights restricted to **1700–2200 UTC daily**; engine ground-runs restricted **1600–2200 UTC** for noise. 🟥
- **Overflight / entry / permits:** Standard international IFR/VFR entry; no unusual state permit identified for scheduled international carrier operations. 🟩 The wider East-China-Sea/Taiwan-Strait overlapping-ADIZ overflight-risk context lives in the [Asia Airspace Brief](../../../../airspace/asia.md) §9 (Taipei/RCAA FIR) — a routing/enroute consideration, not a field restriction.
- **Operations notes:** AD administration — **Taoyuan International Airport Corporation Ltd.**; ATS — Taipei Approach/Tower and Taipei ACC (CAA Taiwan). Aerodrome Obstacle Chart-Type B and related obstacle information is held by the CAA Air Traffic Services Division.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 — AD administration, customs, health/quarantine, AIS briefing, ARO, MET briefing, ATS, fuelling, handling and security all H24 `[AIP 2.3]` | 🟩 |
| AD operating hours | H24 | 🟩 |
| Night / curfew restrictions | No core night ban found; scheduled short runway-closure maintenance windows (§7) and noise-driven restricted hours (engine ground-run ban 1600–2200 UTC; training/test flights only 1700–2200 UTC) apply | 🟧 |
| RFF category | CAT 10; disabled-aircraft removal rated to B744 only | 🟧 |
| Fuel | Jet-A1, H24, "no limitation" on fuelling facilities/capacity `[AIP 2.4]` | 🟩 |
| PCN | Runway-specific — see §7; apron/taxiway strengths range roughly PCN 42–109 depending on segment (concrete/asphalt mix) — full per-segment table in the primary AIP AD 2.8 | 🟩 |
| Customs | H24 `[AIP 2.3]` | 🟩 |
| Handling / FBO | Taoyuan International Airport Corporation Ltd.; on-field carrier hangar/repair facilities exist for widebody types (specific operators not named) | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05L | 3,660 × 60 m | Asphalt / PCN 75/F/B/X/T | 3,660 m | 3,660 m | 3,660 m | 3,660 m | No displacement; intersection take-off at TWY N2 (TORA/TODA/ASDA 3,474 m) |
| 23R | 3,660 × 60 m | Asphalt / PCN 75/F/B/X/T | 3,660 m | 3,660 m | 3,660 m | 3,660 m | Reciprocal of 05L; intersection take-off at TWY N10 (3,473 m) |
| 05R | 3,800 × 60 m | Concrete + asphalt / PCN 94/F/C/X/T | 3,800 m | 3,800 m | 3,800 m | **3,700 m** | THR displaced 100 m; intersection take-offs at TWY S2 (3,700 m) / TWY S3 (3,554 m) |
| 23L | 3,800 × 60 m | Concrete + asphalt / PCN 94/F/C/X/T | 3,800 m | 3,800 m | 3,800 m | **3,450 m** | THR displaced 350 m (largest displacement at the field); intersection take-offs at TWY S8 (3,028 m) / TWY S9 (3,450 m) |

*Source: AIP Taiwan (CAA), AD 2 RCTP 2.12/2.13, AMDT 01-23 eff. 2023-01-12. Strip dimensions 3,780 × 300 m (05L/23R) and 3,920 × 300 m (05R/23L); OFZ available on all four ends. All distances in metres. 🟧 A tier-4 cross-check (SkyVector/OurAirports) corroborates the 3,660 m and ~3,800 m physical lengths and the approximate displaced-threshold figures; OurAirports' stated total length for 05R/23L (3,350 m) does not match the AIP and is treated as a stale tier-4 figure.*

**Scheduled runway-closure windows** (subject to NOTAM cancellation): RWY 05L/23R closed daily 0600–0630 UTC, plus 1700–2240 UTC on even calendar dates (and 31 Jan/29 Feb/31 Mar/31 May/31 Jul/31 Aug/31 Oct/31 Dec), excluding the TWY N11/L2 intersection. RWY 05R/23L closed daily 0200–0230 UTC, plus 1700–2240 UTC on odd calendar dates (excluding the same year/month-end dates).

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Taiwan Taoyuan Intl Airport | 127.60 MHz | H24 | Data-link D-ATIS available |
| Delivery | Taipei Delivery | 121.80 MHz | 2300–1500 UTC | Outside this window, tower alternate frequency applies |
| Ground | Taipei Ground | 121.60 MHz (Apron B/C/Remote-Parking 601–615, 2200–1600 UTC) · 121.70 MHz (all other apron / all traffic 1600–2200 UTC) | Mixed, per split | Aircraft landing RWY 05R/23L use 121.60 MHz during the stated window; RWY 05L/23R traffic uses 121.70 MHz |
| Tower | Taipei Tower | 118.70 MHz (alt 129.30 MHz) | H24 | |
| Approach | Taipei Approach | 119.60 / 119.70 / 121.00 / 123.50 / 125.10 / 125.60 / 128.50 MHz (+ alternates 122.30 / 124.20 / 306.60 / 330.90 MHz) | H24 | Sector-dependent — take the assigned frequency |
| Flight following | Taipei Flight Follow | 119.50 / 329.50 MHz | — | VFR flight-following |
| Centre / FIR | Taipei ACC | Per current AIRAC | H24 | See [Asia Airspace Brief](../../../../airspace/asia.md) — Taipei (**RCAA**) FIR |
| Emergency | As appropriate | 121.50 / 243.00 MHz | H24 | |

*Source: AIP Taiwan (CAA), AD 2 RCTP 2.18, AMDT 01-23 eff. 2023-01-12 — treat exact current-cycle frequencies as 🟧 pending a live-AIRAC cross-check, though the Delivery/Ground/Tower/Approach structure itself is stable.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC 05L | ITIA | 111.10 MHz | H24 | Front-course sector 3.08°; **unusable beyond 17 NM between 24°–26° left of course** due to terrain 🟧 |
| GP 05L | — | 331.70 MHz | H24 | Angle 3°, RDH 50 ft; DME co-located (ITIA, CH48X) |
| ILS/LOC 23R | ITYA | 109.30 MHz | H24 | Front-course sector 3.08°; **unusable beyond 10° left of course** due to terrain 🟧 |
| GP 23R | — | 332.00 MHz | H24 | Angle 3°, RDH 50 ft; DME co-located (ITYA, CH30X) |
| ILS/LOC 05R | ICKS | 110.70 MHz | H24 | Front-course sector 3.07° |
| GP 05R | — | 330.20 MHz | H24 | Angle 3°, RDH 53 ft; DME co-located (ICKS, CH44X) |
| ILS/LOC 23L | ICJN | 111.90 MHz | H24 | Front-course sector 3.28°; **unusable beyond 10° left of course** due to terrain 🟧 |
| GP 23L | — | 331.10 MHz | H24 | Angle 3°, RDH 55 ft; DME co-located (ICJN, CH56X) |
| NDB | AP | 250.00 kHz | H24 | 04° W |
| VOR/DME | APU | 112.50 MHz (CH72X) | H24 | 04° W; indicator swing reported on the 115°–315° radial sector due to terrain 🟧 |

*Exact per-runway ILS sub-category (I/II/III) not stated in the reachable AIP navaid table — flagged in §18. Source: AIP Taiwan (CAA), AD 2 RCTP 2.19, AMDT 01-23 eff. 2023-01-12.*

---

## 10. Arrival

- **Transition altitude / level:** TA **11,000 ft** `[AIP 2.17]`; TL by QNH — not independently confirmed this pass, verify current chart. 🟧
- **Speed:** Mandatory arrival speed control — **280 KT IAS at/below FL250 and at/above FL130**; **maximum 280 KT IAS below FL130 and at/above 10,000 ft** — unless ATC instructs otherwise or the aircraft is entering a holding pattern.
- **Preferential runway logic:** No single published wind-preference rule found; runway-in-use is ATC-assigned. Fixed traffic-pattern rule: 05L/05R left-hand, 23R/23L right-hand; west traffic pattern used generally.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05L | ILS (ITIA) | Per STAR/vectoring | Verify chart | CAT II/III-grade infrastructure; sub-category unconfirmed 🟧 |
| 23R | ILS (ITYA) | Per STAR/vectoring | Verify chart | Same 🟧 |
| 05R | ILS (ICKS) | Per STAR/vectoring | Verify chart | Same 🟧 |
| 23L | ILS (ICJN) | Per STAR/vectoring | Verify chart | Same 🟧; most-reduced LDA (3,450 m) |

- **STARs (names only):** **BAKER 1A/1B, DRAKE 1A/1B, GRACE 1A/1B, TONGA 1A/1B, TNN 1A/1B** — keyed to the FIR entry fix (SALMI/SULEM/KASKA → BAKER; BULAN → DRAKE; SEDKU → GRACE; ENVAR/OLDID → TONGA; KAPLI/POTIB → TNN), with the "A" suffix flown for RWY 05L/05R and the "B" suffix for RWY 23L/23R `[AIP 2.22.1/2.22.4]` — verify current AIRAC.
- **LVP:** Active below **RVR 550 m** (or VIS 800 m if RVR unavailable); tightens further below 300 m and 175 m RVR with progressive taxi/block-separation/follow-me procedures — see Departure/Arrival pages.
- **Missed approach watch-items:** Not a terrain-class driver at this field; the operative concern is the charted LOC-sector/obstacle restrictions (§3.1/§9) and re-sequencing into a busy Radar environment — fly the published missed approach exactly.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** 🟧 Not confirmed from the primary AIP text extract this pass. A tier-4 network-sim chart mirror reports RNAV SID families **MOLKA, KUDOS, ROBIN, TINHO** (each with runway-suffix variants — A=05R, B=23L, C=05L, D=23R) plus an **AJENT ONE MIKE (AJ1M)** departure and a **COSMO** departure — not regulatory; verify names/routings against the current AIRAC before use.
- **RNP / climb-gradient requirements:** All SIDs carry a **mandatory 3 NM initial climb on runway heading** — no early turn unless ATC-instructed or in an emergency. **Northbound departures must fly an RNAV (or COSMO) departure during 1400–2300 UTC** when RWY 23R/23L is the active configuration. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** RVR-tiered per engine number and lighting-facility combination — e.g. single-engine aircraft with REDL+RCLL+3×RVR down to RVR 175 m; day-only NIL-facility minimum VIS 1,600 m (3/4-engine day-only NIL minimum VIS/RVR 800 m) — verify exact current-chart applicability. 🟧
- **Start-up / push-back:** Call Taipei Delivery (121.80 MHz, 2300–1500 UTC) or Taipei Ground (121.70/121.60 MHz per apron, 1500–2300 UTC) 5 minutes ahead of engine start, stating parking bay and proposed flight level; an aircraft not ready to push back within 5 minutes of clearance may have it withdrawn.
- **ATC slot / CTOT & clearance:** No confirmed IATA slot-coordination level or ATFM/CTOT programme in reachable sources; ATC "may initiate radar departures" during **0000–0300 and 0600–1000 UTC daily** to expedite flow and reduce ground delay — a flow-management tool, not a confirmed slot regime. 🟧
- **De-icing:** **NIL** — not provided or required (subtropical field, no cold-weather programme).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Mandatory 3 NM straight-runway-heading climb on every SID, no early turn without ATC instruction or an emergency; northbound aircraft must fly an RNAV or COSMO departure 1400–2300 UTC when RWY 23R/23L is active; cargo bays 516–525 carry special APU/engine-start sequencing (no APU unless connected to a tow tractor; no engine start until pushed back onto TWY L).
- **Night noise / dB limits:** No published per-movement dB limit found; the operative restriction is the engine ground-run ban. 🟧
- **Engine run-up restrictions:** No engine test/ground run permitted **1600–2200 UTC** except as authorised.
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 A Code E/F-capable stand set exists across Aprons A–D, the cargo apron (501–525) and remote parking (601–615) — INS-checkpoint data shows several bays rated up to A380 (e.g. C2/C3/D6/607/615, 522–525) alongside widespread B77W/B748/B744 ratings. Exact gate assignment for the K Global (Category L) operation is not confirmed.
- **Push-back:** High-power/cross-bleed engine starts on the apron are restricted (bleed starts permitted only after towing parallel to the assigned taxiway, with airport-office/tower approval); stand 610 has a specific narrowbody follow-me-forward procedure in lieu of push-back for smaller types.
- **Standard taxi routes:** Taxiing across a runway, or using a runway for taxiing, is **prohibited unless specifically approved by ATC**.
- **Hot spots / tight taxiways:** 🟥 Three AIP-published Hot Spots — **TWY N11/L2** and **TWY N9/L1** crossing RWY 05L/23R to/from the cargo apron (bays 516–525), and the **service road/TWY S8** crossing RWY 05R/23L to/from the south fire station. **A380 movement is prohibited on TWY E, P6, P9, P10, Q6 and Q7.** Reduced-visibility caution also applies at parking bays A1, B1, C10 and 501–508 (view problem from the tower).
- **Follow-me:** Available on request from Tower; mandatory when Stop Bars or the Surface Movement Surveillance System are unserviceable under low-visibility conditions (§ Departure/Arrival low-vis sections).

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Subtropical coastal-plain climate; the 05/23 runway orientation is broadly consistent with the region's prevailing northeast/southwest wind pattern — exact seasonal wind-rose data not confirmed this pass. 🟧
- **Seasonal hazards:** 🟥 **Typhoon season (~Jun–Oct, peak Jul–Sep** per Central Weather Administration climatology) is RCTP's defining seasonal hazard — regularly forces large-scale schedule disruption and terminal-area re-routing across Taiwan; plan weather-independent alternates and extra fuel/holding in season. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). A dedicated LLWAS (16 wind sensors) plus 4 anemometers/6 AWOS wind positions is installed — AIP evidence windshear is a recognised local hazard — but vertical wind shear and slant visual range are **not** measured/reported pending suitable equipment. 🟧
- **Local effects:** Bird activity is present year-round, peaking **March–May** with large migratory flocks (terns, sandpipers, plovers, egrets) feeding/resting on adjacent grassland during poor weather — brief a seasonal strike-risk lookout.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical-cyclone advisories. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the scheduled §7 windows and the cargo-apron/south-fire-station Hot Spots), navaid U/S, LVP/Stop-Bar/Surface Movement Surveillance System status, lighting, obstacle/crane, RFF downgrade, A380 taxiway-restriction NOTAMs, bird-activity advisories, tropical-cyclone/typhoon bulletins. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate within the network (Category L; not a base). `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** VHHH, RJBB, RKSI `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet-A1, H24, "no limitation" on fuelling facilities/capacity `[AIP 2.4]`. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,660–3,800 m) is non-limiting for any K Global type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Category-L field with no base presence — no type-specific stand or performance constraint identified beyond the general A380 taxiway-restriction/disabled-aircraft-removal notes in §5/§13, which are situational-awareness items for the shared ground environment rather than a K Global fleet constraint. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation** — sourced to a 2019 epoch (5° W, annual change 0.08° W); current-day value not independently re-derived.
- **Exact per-runway ILS sub-category (CAT I/II/III)** — not confirmed from a primary table; CAT II/III-grade lighting/secondary-power/LVP infrastructure strongly implies deep low-visibility capability exists.
- **Transition level** (by QNH) — not independently confirmed.
- **SID names** — only tier-4/network-sim-sourced (MOLKA/KUDOS/ROBIN/TINHO/AJ1M/COSMO); not confirmed from the primary AIP text extract this pass.
- **Take-off minima** — exact current-chart figures and applicability to K Global types.
- **Reverse-thrust/idle-reverse policy** and **night noise dB limits** — not confirmed.
- **Current gate/stand assignment** for the K Global (Category L) operation — not confirmed.
- **Seasonal wind-rose / prevailing-wind detail** — not independently confirmed beyond runway-orientation inference.
- **AIP currency** — retrieved cycle is AMDT 01-23 (eff. 2023-01-12); confirm no material AD 2 changes on a more current AIRAC cycle.
- **VATSIM cross-check** — no dedicated Taiwan vACC airport SOP was found this pass for operational cross-check (only tangential Hong Kong-vACC LOA material referencing RCTP-bound routing).
- **Field elevation** — AIP states 108 ft; OurAirports (tier-4) states 106 ft; AIP treated as authoritative, minor variance noted.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Taiwan (Civil Aeronautics Administration, MOTC), AD 2 RCTP**, AMDT 01-23, eff. 2023-01-12 — runway physical characteristics/declared distances, communications, navaids, ATS airspace, local aerodrome regulations, noise abatement, flight procedures, MET provision, RFF, obstacles — https://ais.caa.gov.tw/eaip/AIP%20AMDT%2001-23_2023_01_12/eAIP/RC-AD%202%20RCTP%20%E8%87%BA%E7%81%A3%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9BTAIPEI-TAIWAN%20TAOYUAN%20INTL-en-GB.html (retrieved 2026-07-26). **Treat as needing a live-AIRAC cross-check for time-sensitive figures (frequencies, minima, SID/STAR detail).**
- OurAirports — https://ourairports.com/airports/RCTP/runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check; total-length figure for 05R/23L found to disagree with the AIP and treated as a stale tier-4 figure.*
- SkyVector — https://skyvector.com/airport/RCTP/Taiwan-Taoyuan-International-Airport (retrieved 2026-07-26). *Runway-length corroboration.*
- Central Weather Administration (Taiwan, CWA) — https://www.cwa.gov.tw/V8/E/ (retrieved 2026-07-26). *Typhoon-season climatology, general reference.*
- IVAO chart mirror — RCTP SID chart — https://xe.ivao.aero/download/charts/RCTP_SID_S.pdf (retrieved 2026-07-26). *Network-sim source; SID-name corroboration only, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
