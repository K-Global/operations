# KBOS — Boston Logan International · Airport Briefing

**KBOS / BOS** · Boston, Massachusetts, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the FAA Aeronautical Information Publication (AIP) AD 2 KBOS entry plus standard public aeronautical data (SkyVector/AirNav FAA Chart Supplement mirrors); approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N42°21′46.6″ / W71°00′23″ (42.3629, -71.0064) `[FAA AIP AD 2 KBOS 2.2.1]` |
| Field elevation | **19.1 ft / 5.8 m AMSL** `[FAA AIP AD 2 KBOS 2.2.3]`; commonly rounded to 20 ft in tier-4 sources (OurAirports) |
| Mag variation | **15° W (2020 epoch)** `[FAA AIP AD 2 KBOS 2.2.5]` — verify current-cycle drift |
| Time zone | UTC−5 (EST) / UTC−4 (EDT, US DST observed) |
| Runway(s) | **04L/22R** 7,864 × 150 ft · **04R/22L** 10,006 × 150 ft (ILS CAT II/III on 04R) · **09/27** 7,001 × 150 ft (ILS CAT I on 27 only) · **14/32** 5,000 × 100 ft (**unidirectional** — takeoff-only 14, landing-only 32) · **15L/33R** 2,557 × 100 ft (visual only) · **15R/33L** 10,083 × 150 ft (ILS CAT II/III on 33L) |
| Preferential runway | Noise-driven: **RWY 15R preferred for takeoff, RWY 33L preferred for landing** `[FAA AIP general remarks]`; a **night preferential window** (published ≈0500–1100Z, roughly 0000–0600 local) reinforces this pairing; actual assignment remains wind/traffic-driven — see §3.5/§12 |
| Longest LDA | 10,083 ft / 3,073 m (RWY 33L, no displacement) |
| Approaches | **ILS CAT II/III on 04R and 33L only**; ILS CAT I / LOC on 22L, 27, 15R; **RNAV (RNP) on 33L** (noise-preferred); RNAV (GPS) on 04L, 04R, 15R, 27, 32, 22L (X/Y), 33L (Z); **15L/33R and RWY 14 are visual/no-approach only** |
| RFF category | **ARFF Index E** (FAA Part 139 — highest category); Class-I certified 9/1/1972 🟩 |
| Control type | **Radar** — Boston Tower (on field, H24) for local control; **Boston Consolidated TRACON (A90)**, Merrimack NH, for approach/departure; **Boston ARTCC (ZBW)** en route — see [North America airspace brief](../../../../airspace/north-america.md) |
| Elevation class | Sea-level (19 ft) — **not** hot-and-high; the defining operational character is the **six-runway intersecting geometry** and coastal/harbor weather exposure, not density altitude |
| Special-airport status | None crew-qualification-restricted; the standing complexity driver is the **intersecting-runway layout** combined with a long-standing **noise-abatement preferential-runway program** — see §5 |
| Customs / PoE | **Yes** — Terminal E international arrivals hall; H24 coverage assumed for a major gateway, exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` 🟩 |
| Company preferred alternates | **KPVD, KMHT, KJFK** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **14 min / 18 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal site on Boston Harbor fill; no high terrain. Near-field obstacles are water-related (boats) and vertical (cranes) rather than terrain. |
| Runway length vs fleet perf | 🟩 | 10,006–10,083 ft main runways are ample for any K Global type; the short 14/32 (5,000 ft) and 15L/33R (2,557 ft) pairs are not typical widebody assignments and are non-issues for our operation. |
| Approach availability / minima | 🟧 | ILS CAT II/III confirmed only on **04R and 33L**; the remaining instrument runway ends (22L, 27, 15R) are CAT I/LOC only; several ends (09, 14, 15L, 33R) have no published instrument approach — brief the assigned runway's actual capability, don't assume CAT III network-wide. |
| Airspace / traffic / control | 🟥 | Three intersecting runway pairs (not parallels) drive frequent, wind-dependent configuration changes and crossing-traffic sequencing under a consolidated regional TRACON (A90) — see §3.2. |
| Weather / seasonal hazard | 🟥 | New England coastal exposure: winter nor'easters/snow-ice systems and marine advection fog are the field's defining hazards, compounded by the wind-sensitive runway configuration — see §3.4/§14. |
| Curfew / slots / hours | 🟩 | **No formal curfew or slot coordination found** — a voluntary nighttime (≈2300–0600) preference for over-water routings and the 15R/33L night-preferential pairing apply, but these are noise-abatement preferences, not hard restrictions. Contrast with slot-coordinated European hubs. |
| RFF category vs our types | 🟩 | ARFF Index E — the highest FAA category, above any of our fleet's requirement. |
| Fuel availability | 🟧 | Jet-A confirmed available (FAA AIP AD 2.4.2); specific into-plane supplier/hours for scheduled airline ops not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | Terminal E confirmed as the international/PoE hall; exact CBP desk hours and our operation's specific handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
KBOS sits at 19.1 ft AMSL on filled land projecting into Boston Harbor — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. The operative near-field hazards are instead **water and vertical obstacles**: the FAA AIP obstacle remarks list boats at distances ranging from ~500 ft to over 5,000 ft from several runway thresholds (harbor traffic under approach/departure paths) and flag **numerous cranes on and in the vicinity of the airport** (ongoing construction). Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat here, but harbor-obstacle and crane awareness is.

### 3.2 Airborne conflict / traffic 🟥
Logan's signature complexity is its **six-runway, three-intersecting-pair geometry** (04L/22R, 04R/22L, 09/27, 14/32, 15L/33R, 15R/33L) — unlike a simple parallel-runway hub, intersecting runways mean the active configuration is highly **wind-dependent** and changes frequently, driving continuous crossing-traffic sequencing and dependent-runway operations. Approach/departure control is provided by the **Boston Consolidated TRACON (A90)**, based in Merrimack, NH, which also handles several busy satellite fields in the region (Manchester-Boston, Hanscom, Norwood, Beverly, Lawrence and others) — a consolidated, high-workload regional approach environment. Cross-ref [North America airspace brief](../../../../airspace/north-america.md) for Boston ARTCC (ZBW) context.

### 3.3 Runway excursion 🟧
Several runway ends carry **displaced thresholds** that reduce LDA below TORA: RWY 22L (1,199 ft, LDA 8,806 ft), RWY 04R (1,155 ft, LDA 8,851 ft), RWY 15R (882 ft, LDA 9,202 ft) and RWY 22R (819 ft, LDA 7,046 ft) — brief the correct usable landing distance for the assigned runway, not the full published length. **EMAS (Engineered Materials Arresting System) beds** are installed at the departure end of RWY 04L (190 × 170 ft) and RWY 15R (158 × 170 ft) — arrestor systems typically indicating a constrained runway safety area, consistent with the airport's tightly bounded harbor-fill site. **RWY 14/32 is unidirectional** (takeoff-only 14 / landing-only 32, no approach authorised to RWY 14) — never assume the reciprocal role is available.

### 3.4 Weather threat 🟥
Boston's coastal New England climate brings two recurring hazards: **winter nor'easters and snow/ice systems** (a real de-icing and runway-contamination season), and **marine advection fog**, most common in the cooler months when warm, moist air moves over the cold Gulf of Maine/harbor waters — both can compress visibility and force reduced-rate or single-runway operations. No airport-specific fog/snow-day frequency statistic was found in reachable sources — treat as general regional climatology pending a sourced figure. 🟧 See §14.

### 3.5 Operational considerations 🟥
Plan around three durable characteristics: (1) the **intersecting-runway geometry** itself, which makes runway-configuration changes routine rather than exceptional and demands continuous traffic/crossing awareness; (2) the **noise-abatement preferential-runway program** (RWY 15R departure / RWY 33L arrival preferred, with a defined night-preferential window) — real but not absolute, since wind and traffic can override it, so don't assume the preferred runway is the assigned one; and (3) **wildlife/bird activity** — the AIP flags birds on and in the vicinity of the airport, consistent with the harbor-adjacent site. RFF (Index E) is first-tier; the open items in §18 are mostly currency/administrative confirmations rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **RWY 14/32 is unidirectional** — takeoff-only on 14, landing-only on 32, and **no instrument approach is authorised to RWY 14** — never assign or expect the reciprocal use.
- **Harbor/water obstacles** (boats at 500–5,000+ ft from several thresholds) and **numerous cranes on/near the airport** are AIP-flagged — maintain obstacle awareness on approach and departure, especially at night or in reduced visibility.
- **Wind-driven runway configuration changes are routine** given the intersecting six-runway layout — do not assume the noise-preferential runway (15R departure / 33L arrival) is the active assignment; check ATIS every time.
- **EMAS arrestor beds at DER 04L and DER 15R** — a constrained-runway-safety-area indicator; respect published declared distances and do not plan on overrun margin beyond LDA/ASDA.
- **Displaced thresholds on 04R, 22L, 22R and 15R** reduce usable landing distance below the full runway length — brief the correct LDA for the assigned runway.
- **Bird activity on and around the airport** (AIP-flagged) — maintain a heightened visual scan on approach/departure, particularly at low level near the harbor.
- No formal curfew exists, but a **voluntary nighttime (≈2300–0600) over-water routing preference** is in effect — expect ATC to route accordingly when weather permits.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **intersecting-runway/wind-dependent-configuration environment** and the **noise-abatement preferential-runway logic**. 🟧
- **Crew-qualification gate:** No special crew-qualification gate confirmed beyond standard CAT II/III currency for low-visibility approaches to RWY 04R/33L. 🟧
- **Operating restrictions / bans:** No hard curfew or slot regime found; no RNP AR restriction or circling ban found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard US domestic/international arrival; Terminal E is the designated Port of Entry hall; no special state permit required. 🟩
- **Operations notes:** ANSP/regulator — **FAA**; Airport operator — **Massachusetts Port Authority (Massport)**; Air traffic control — **Boston Tower** (on field) and **Boston Consolidated TRACON (A90)**, Merrimack, NH (approach/departure, also serves several regional satellite fields); en route — **Boston ARTCC (ZBW)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Boston Tower, Ground, Delivery/Pre-taxi clearance, ATIS/ASOS all H24 per FAA AIP AD 2.3 ("All Months, All Days, All Hours") | 🟩 |
| AD operating hours | H24 — no restricted operating window found | 🟩 |
| Night / curfew restrictions | **No formal curfew.** Noise-abatement procedure guidance published Mon–Fri 0900–1700 (contact line); a night-preferential-runway window (≈0500–1100Z, roughly 0000–0600 local) favours RWY 15R takeoff / 33L landing; voluntary over-water routing preference ≈2300–0600 | 🟧 |
| RFF category | **ARFF Index E** (highest FAA Part 139 category) | 🟩 |
| Fuel | Jet-A and 100LL confirmed available (FAA AIP AD 2.4.2); airline into-plane supplier/hours not confirmed | 🟧 |
| PCN | Main runways PCN 90 F/C/W/T; RWY 14/32 PCN 85 F/C/W/T (FAA AIP AD 2.12) | 🟩 |
| Customs | Terminal E international hall; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Signature Aviation (GA FBO, per SkyVector); scheduled-airline ground handler(s) not individually confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04L | 7,864 × 150 ft (2,397 × 46 m) | Asphalt, grooved / PCN 90 F/C/W/T | 7,864 | 7,864 | 7,864 | 7,864 | EMAS 190×170 ft at DER; obstacle: 161 ft boat 3,250 ft from runway |
| 22R | 7,864 × 150 ft | PCN 90 F/C/W/T | 7,864 | 7,864 | 7,864 | 7,046 | Displaced thr 819 ft; obstacle: 44 ft boat 670 ft from runway |
| 04R | 10,006 × 150 ft (3,050 × 46 m) | Asphalt, grooved / PCN 90 F/C/W/T | 10,006 | 10,006 | 10,006 | 8,851 | Displaced thr 1,155 ft; **ILS CAT II/III** (ident BOS); ALSF2 lighting; obstacle: 157 ft boat 1,550 ft from runway |
| 22L | 10,006 × 150 ft | PCN 90 F/C/W/T | 10,006 | 10,006 | 10,006 | 8,806 | Displaced thr 1,199 ft; ILS CAT I (ident LQN); MALSF lighting; obstacle: 45 ft boat 525 ft from runway |
| 09 | 7,001 × 150 ft (2,134 × 46 m) | Asphalt, grooved / PCN 90 F/C/W/T | 7,001 | 7,001 | 7,001 | 7,001 | No ILS/approach-lighting; obstacle: 158 ft boat 2,050 ft from runway |
| 27 | 7,001 × 150 ft | PCN 90 F/C/W/T | 7,001 | 7,001 | 7,001 | 7,001 | ILS CAT I (ident DGU); obstacle: 45 ft boat 500 ft from runway |
| 14 | 5,000 × 100 ft (1,524 × 30 m) | Asphalt, grooved / PCN 85 F/C/W/T | 5,000 | 5,000 | 5,000 | — | **Takeoff-only**; no landings; **no approach authorised**; obstacle: 174 ft building 1,364 ft from runway |
| 32 | 5,000 × 100 ft | PCN 85 F/C/W/T | — | — | — | 5,000 | **Landing-only**; no takeoffs; RNAV (GPS) RWY 32 approach available |
| 15L | 2,557 × 100 ft (779 × 30 m) | Asphalt / PCN 90 F/C/W/T | 2,557 | 2,557 | 2,557 | 2,557 | No ILS; visual/basic markings only |
| 33R | 2,557 × 100 ft | PCN 90 F/C/W/T | 2,557 | 2,557 | 2,557 | 2,557 | No ILS; visual/basic markings only |
| 15R | 10,083 × 150 ft (3,073 × 46 m) | Asphalt, grooved (excellent) / PCN 90 F/C/W/T | 10,083 | 10,083 | 10,083 | 9,202 | Displaced thr 882 ft; EMAS 158×170 ft at DER; ILS CAT I (ident MDC); MALSR lighting; **preferred takeoff runway** (noise); obstacle: 62 ft trees 3,040 ft from runway |
| 33L | 10,083 × 150 ft | PCN 90 F/C/W/T | 10,083 | 10,083 | 10,083 | 10,083 | **ILS CAT II/III** (ident LIP); ALSF2 lighting; **preferred landing runway** (noise) — RNAV (RNP) approach is the noise-preferred procedure; obstacle: 160 ft boat 5,075 ft from runway |

*Source: FAA AIP AD 2 KBOS 2.12/2.13 (chart data effective 2026-07-09 per SkyVector FAA mirror); cross-checked against SkyVector's FAA Chart Supplement extract — declared distances match between both sources. All distances in feet unless noted; metric conversions rounded.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS (D-ATIS) | Boston ATIS | 135.000 (tel 617-455-3003, arr & dep) | H24 | Combined arrival/departure D-ATIS |
| ASOS | — | 135.000 (tel 339-746-6855) | H24 | |
| Delivery / Pre-taxi clearance | Boston Clearance Delivery | 121.650 / 257.8 | H24 | Pre-taxi clearance via 121.650 |
| Ground | Boston Ground | 121.750 / 121.900 | H24 | |
| Tower | Boston Tower | 124.725 (helicopters) · 132.225 (East) · 128.800 (West) · 257.8 | H24 | Multiple positions — take the assigned frequency |
| Ramp Control | Massport Ramp Control | 134.050 | Hours not confirmed 🟧 | Terminal E north/south cargo ramp: contact Massport Gate Control on 131.100 before entering/departing ramp |
| Approach | Boston Approach (A90 — Boston Consolidated TRACON, Merrimack, NH) | 118.250 (North) · 120.600 (West) · 127.200 (South) · 263.1 | H24 (assumed) 🟧 | Sector-specific — take the assigned frequency |
| Departure | Boston Departure (A90) | 133.000 | H24 (assumed) 🟧 | |
| Centre / FIR | Boston ARTCC (ZBW) | Per current AIRAC | H24 | See [North America airspace brief](../../../../airspace/north-america.md) |
| Class B | Boston Class B | 124.100 (091°–269°) · 124.400 (270°–090°) | — | |
| Emergency | — | 121.500 / 243.0 | — | |
| UNICOM | — | 122.950 | — | |

*Source: FAA AIP AD 2 KBOS 2.18 (Delivery/Ground/ATIS/hours), cross-checked against SkyVector's FAA Chart Supplement extract (Approach/Departure/Tower/Class B/Emergency/UNICOM frequencies, effective 2026-07-09). ILS-associated frequencies are in §9.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | BOS | 112.70 | H24 (assumed) | On-field Boston VOR/DME |
| ILS/LOC 04R | BOS | Not published in reachable extract 🟧 | H24 | **CAT II/III** capable — verify current chart for exact frequency/minima |
| ILS/LOC 22L | LQN | Not published in reachable extract 🟧 | H24 | CAT I / LOC |
| ILS/LOC 27 | DGU | Not published in reachable extract 🟧 | H24 | CAT I / LOC |
| ILS/LOC 15R | MDC | Not published in reachable extract 🟧 | H24 | CAT I / LOC |
| ILS/LOC 33L | LIP | Not published in reachable extract 🟧 | H24 | **CAT II/III** capable (reported CAT IIIb, RVR 600 ft, in tier-4 corroboration) — verify current chart |
| NDB | — | — | — | No on-field NDB confirmed in reachable sources |

*Source: FAA AIP AD 2 KBOS 2.19 (idents, coordinates, site elevations); exact ILS carrier frequencies were not present in the reachable AIP extract — pull from the current AIRAC chart before use. VOR/DME frequency cross-checked via SkyVector.*

---

## 10. Arrival

- **Transition altitude / level:** Standard US TA 18,000 ft MSL; TL by QNH — not independently confirmed as field-specific this pass, verify current chart. 🟧
- **Speed:** Standard 250 KIAS below 10,000 ft MSL (US norm).
- **Preferential runway logic:** Noise-driven — **RWY 33L preferred for landing**, with a defined night-preferential window; the **RNAV (RNP) approach to 33L** is the FAA/Massport-preferred procedure for noise abatement (implemented 2021). Actual runway use remains wind/traffic-dependent given the intersecting six-runway layout — see §3.2/§12.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 04L | RNAV (GPS) RWY 04L | |
| 04R | ILS OR LOC RWY 04R; ILS RWY 04R (SA CAT I); ILS RWY 04R (CAT II-III); RNAV (GPS) RWY 04R | **CAT II/III** |
| 22L | ILS OR LOC RWY 22L; RNAV (GPS) X RWY 22L; RNAV (GPS) Y RWY 22L | CAT I |
| 09 | — none confirmed — | No published instrument approach found |
| 27 | ILS OR LOC RWY 27; RNAV (GPS) RWY 27 | CAT I |
| 14 | — none — | **Not authorised** |
| 32 | RNAV (GPS) RWY 32 | |
| 15L | — none confirmed — | Visual only |
| 33R | — none confirmed — | Visual only |
| 15R | ILS OR LOC RWY 15R; RNAV (GPS) RWY 15R | CAT I |
| 33L | ILS OR LOC RWY 33L; ILS RWY 33L (SA CAT I); ILS RWY 33L (CAT II-III); RNAV (RNP) X RWY 33L; RNAV (GPS) Z RWY 33L; LIGHT VISUAL RWY 33L | **CAT II/III**; RNP is the noise-preferred approach |

- **STARs (names only):** **JFUND TWO (RNAV)**, **OOSHN FIVE (RNAV)**, **ROBUC THREE (RNAV)** — all RNAV; **WOONS TWO** — conventional. Verify current AIRAC.
- **LVP:** CAT II/III infrastructure exists only on 04R/33L; exact RVR/trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat coastal site); the operative missed-approach concern is re-sequencing into the intersecting-runway/crossing-traffic environment under Boston Approach (A90), plus harbor/obstacle awareness at low altitude.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** RNAV — **BLZZR SIX, BRUWN SEVEN, CELTK SEVEN, HYLND SEVEN, LBSTA EIGHT, PATSS SEVEN, REVSS SIX, SSOXS SEVEN, WYLYY FIVE**; conventional — **LOGAN FOUR**.
- **RNP / climb-gradient requirements:** Massport/FAA actively encourage use of published RNAV departure procedures at Logan for noise-abatement ("Fly Quiet") goals; aircraft filing altitudes above 10,000 ft are specifically encouraged to file RNAV SIDs. Confirm gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Published per FAA Takeoff Minimums/Diverse Vector Area chart — exact figures not transcribed here; verify current chart. 🟧
- **Start-up / push-back:** Standard FAA AIP remark: complete all performance calculations prior to pushback from the gate. Cross-bleed/APU notification procedure not confirmed locally. 🟧
- **ATC slot / CTOT & clearance:** No IATA slot coordination or formal CTOT regime confirmed for KBOS; standard EDCT/ATFM ground-delay programs can apply as for any FAA-managed Northeast Corridor field during weather/flow events. 🟧
- **De-icing:** Available in season (Massport operates significant winter de-icing/snow-removal infrastructure); specific de-icing pad locations and holdover provisioning not confirmed in reachable public sources. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Logan runs a long-standing **preferential-runway-use program** driven by its tight urban/harbor location — **RWY 15R preferred for takeoff, RWY 33L preferred for landing**, formalised further by a **night-preferential window** (≈0500–1100Z / roughly 0000–0600 local). The **Massport Community Advisory Committee (MCAC)** — a standing community body — works with the FAA and Massport (plus MIT's International Center for Air Transportation) on ongoing procedure refinement. A six-year FAA/Massport/MIT ICAT study ("Block 1/Block 2" procedures) produced four new low-noise flight procedures: an **over-water RNAV (RNP) approach to RWY 33L** (implemented 2021), a **northward-shifted RNAV departure off RWY 15R** away from densely populated areas near Hull, MA (implemented Dec 2021), and an **over-water RNAV approach to RWY 22L** (targeted for 2024 initial use) — all designed using a community-facing noise metric ("N60": daily overflights exceeding 60 dB at a given location).
- **Night noise / dB limits:** No formal per-movement dB limit or hard curfew found; noise governance operates through the preferential-runway/night-window program above plus a **24-hour noise-complaint report line (617-561-3333)** and a published noise-abatement-procedure information line (617-561-1636, Mon–Fri 0900–1700). 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminal E ("John A. Volpe International Terminal") is the international/widebody gateway (gates E1–E16 per public terminal guides); Terminals A (Delta-operated), B (largest, mixed domestic carriers) and C (JetBlue-operated, largest passenger share) are principally domestic-oriented, though C also handles some international carriers. Exact widebody stand/gate assignment for a K Global operation is not confirmed. 🟧
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground on the day; not detailed in reachable sources.
- **Hot spots / tight taxiways:** Specific named hot spots not confirmed in reachable sources this pass — the FAA AIP does note **ASDE-X (surface movement radar) is in use**, with a requirement to operate transponders with altitude-reporting mode and ADS-B enabled on all airport surfaces, itself an indicator of a surface-movement-complexity environment consistent with the intersecting-runway layout. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate coastal New England climate on Boston Harbor; no single dominant prevailing wind direction is confirmed from reachable sources — the intersecting six-runway layout exists precisely because no single runway orientation serves all wind conditions well.
- **Seasonal hazards:** **Winter nor'easters and snow/ice systems** (Massport operates substantial dedicated snow-removal/de-icing infrastructure) are the field's defining cold-season hazard; **marine advection fog** is a recognised warm-season/shoulder-season hazard given the harbor-adjacent site. No airport-specific frequency statistic was found for either — treat as general regional climatology pending a sourced figure. 🟧
- **Local effects:** Harbor proximity drives both the fog risk and the water-obstacle picture in §3.1/§7; no other notable terrain effects at this coastal-fill site.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET, tropical/post-tropical advisories (Atlantic hurricane season remnants can affect New England Aug–Oct). Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. given the intersecting-runway configuration-change pattern), navaid U/S, CAT II/III equipment status on 04R/33L, lighting, obstacle/crane status, RFF downgrade, GPS/RAIM for RNP procedures, bird/wildlife activity advisories. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination** — not a K Global base.
- **Nearest suitable alternates:** Company preferred alternates **KPVD** (Providence), **KMHT** (Manchester, NH), **KJFK** (New York) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet-A confirmed available (FAA AIP); specific into-plane provider/hours for scheduled airline service not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the main runway pairs (10,006–10,083 ft). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No field-elevation or field-length performance penalty confirmed for any K Global type at KBOS — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). The operative planning considerations are the **intersecting-runway/wind-dependent-configuration environment** and **winter de-icing/contamination season** rather than aircraft performance; CAT II/III currency is relevant only if assigned 04R or 33L in low-visibility conditions — see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ILS carrier frequencies** for 04R/22L/27/15R/33L — idents confirmed from the FAA AIP extract, but exact MHz frequencies were not present in the reachable extract; pull from the current AIRAC chart.
- **ILS sub-category (IIIA/IIIB/IIIC)** on 04R and 33L — 33L commonly reported elsewhere as CAT IIIb (RVR 600 ft), not confirmed from a primary FAA table this pass.
- **Take-off minima / DVA exact figures** — published per FAA Takeoff Minimums chart, not transcribed here.
- **Terminal/gate assignment for our operation** — Terminal E international gates (E1–E16) is the likely widebody/international cluster; not independently confirmed for a specific K Global stand.
- **Ground handling agent(s), fuel supplier and into-plane hours** for scheduled airline operations — not confirmed in reachable public sources.
- **Customs/CBP desk hours at Terminal E** — assumed major-gateway H24 coverage, not confirmed.
- **De-icing pad locations, fluid type and holdover throughput** — general seasonal availability confirmed, specific provisioning not confirmed.
- **Named taxiway hot spots** — not confirmed in reachable sources; ASDE-X in use is confirmed.
- **Airport-specific fog/snow-day frequency statistics** — general regional climatology assumed, no sourced figure found.
- **EUROCONTROL-equivalent (FAA ATFM/EDCT) exposure specifics for KBOS** — general Northeast Corridor practice assumed, not independently KBOS-sourced.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3 — Aerodromes, Massachusetts (AD 2 KBOS)** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_massachusetts.html (retrieved 2026-07-26). *ARP, elevation, mag var, ATS hours, RFF/ARFF index, runway physical characteristics, declared distances, approach lighting, communications, navaid idents/coordinates, general remarks.*
- SkyVector — FAA Chart Supplement / AF-D mirror for KBOS, official FAA data effective 2026-07-09 — https://skyvector.com/airport/BOS/General-Edward-Lawrence-Logan-International-Airport (retrieved 2026-07-26). *Runway surface/PCN/weight-limit detail, obstacles, EMAS, communications cross-check, SID/STAR/approach chart index by name.*
- OurAirports — https://ourairports.com/airports/KBOS/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- Pirep — https://pirep.io/airports/KBOS (retrieved 2026-07-26). *Coordinate/elevation cross-check, AIP remarks corroboration.*
- FAA Newsroom — "Boston Air Traffic Procedures Reduce Noise Impact," 2021-12-02 — https://www.faa.gov/newsroom/boston-air-traffic-procedures-reduce-noise-impact (retrieved 2026-07-26). *RWY 15R departure shift and RWY 33L over-water approach procedure history; MCAC role.*
- MIT News — "New flight procedures to reduce noise from aircraft departing and arriving at Boston Logan Airport," 2024-04-18 — https://news.mit.edu/2024/new-flight-procedures-reduce-noise-aircraft-boston-logan-airport-0418 (retrieved 2026-07-26). *Block 1/Block 2 procedure detail, RNP approach to 33L, RNAV approach to 22L, N60 noise metric, MCAC collaboration.*
- Massport — "Noise Abatement at Boston Logan" and FAQs — https://www.massport.com/environment/noise-abatement/logan-airport and /faqs (retrieved 2026-07-26; direct fetch bot-protected, content corroborated via FAA/MIT sources and search index). *Preferential-runway program, noise report line, MCAC.*
- Massport Community Advisory Committee — https://massportcac.org/ (retrieved 2026-07-26). *MCAC standing-body corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
