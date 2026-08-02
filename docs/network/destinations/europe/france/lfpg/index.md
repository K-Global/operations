# LFPG — Paris Charles de Gaulle · Airport Briefing

**LFPG / CDG** · Roissy-en-France, Île-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the SIA France eAIP (AIP France, AD 2 LFPG) where reachable, plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N49°00′35″ / E002°32′52″ (49.00972, 2.54778) 🟧 — a secondary public source gives a slightly offset field-centroid figure (49.00896, 2.55412); treat the ARP above as the reference pending primary-AIP confirmation |
| Field elevation | **392 ft / 119 m AMSL** |
| Mag variation | 🟧 Not consistently confirmed — reachable sources disagree (≈1.0° E vs ≈2.0° W); treat as unverified pending current-AIRAC cross-check |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **08L/26R** 4,142 m TORA (concrete/asphalt) · **09R/27L** 4,200 m TORA (asphalt) — both **outer doublet, landing-only** · **08R/26L** 2,700 m (concrete) · **09L/27R** 2,700 m (concrete) — both **inner doublet, departure-only** |
| Preferential runway | **Segregated dependent-parallel-pair configuration** — outer doublet (08L/26R, 09R/27L) always the landing pair, inner doublet (08R/26L, 09L/27R) always the departure pair, in both east ("09/08" config) and west ("26/27" config) orientations; wind/ATC-flow determines which orientation runs — see §3.2/§10/§11 |
| Longest LDA | 4,200 m (09R); 4,142 m (08L); the reciprocal ends 26R/27L carry displaced thresholds (LDA 3,616 m / 3,600 m respectively) — see §7 |
| Approaches | **ILS CAT III** on the outer/landing doublet (08L, 26R, 09R, 27L — exact sub-category and current idents/frequencies not confirmed this pass 🟧); inner/departure doublet (08R/26L, 09L/27R) carries **no scheduled approach role** |
| RFF category | Not published / verify 🟧 — not sourced this pass; A380/Code F widebody operation implies a high ICAO category (commonly assumed CAT 9/10 for comparable hubs), **not an AIP-confirmed figure** |
| Control type | **Radar** — DSNA operates **three physical ATC towers** (South ATCT, opened 1999, paired with the south/08-26 runway pair; North ATCT, opened Oct 2005, paired with the north/09-27 pair; and a Central ATCT); **Paris Approach ("De Gaulle Approach")** below **Paris ACC (LFFF)** |
| Elevation class | Near sea-level (392 ft) — **not** hot-and-high; the defining performance/reliability driver is **traffic density and winter low-visibility**, not density altitude |
| Special-airport status | 🟥 **IATA Level 3 slot-coordinated** (COHOR); unusual **segregated dependent-parallel-doublet geometry** (2 landing + 2 departure runways run simultaneously) — one of the most structurally complex airfields in the K Global network — see §5 |
| Customs / PoE | **Yes** — international arrivals halls across Terminal 1, the Terminal 2 series and Terminal 3; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` 🟩 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` 🟩 |
| Company preferred alternates | **LFOB, LFPO** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 20 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Île-de-France plateau; no close-in high terrain. Non-factor for the field itself. |
| Runway length vs fleet perf | 🟩 | Outer/landing doublet (4,142–4,200 m) is ample for any K Global widebody; inner/departure doublet (2,700 m) is non-limiting for typical departure weights but is the tighter of the four runways — verify performance at max structural weight per OM B. |
| Approach availability / minima | 🟧 | ILS CAT III on the outer/landing doublet is well-established; exact sub-category (IIIA/IIIB) and current idents/frequencies not confirmed from a primary table this pass. |
| Airspace / traffic / control | 🟥 | One of Europe's busiest hubs; the segregated dependent-parallel-pair geometry, triple-simultaneous-parallel-approach capability, and three-tower control structure drive sustained high controller/crew workload — see §3.2. |
| Weather / seasonal hazard | 🟧 | Winter fog/low-visibility periods (historically ~5% LVP time per an ATC industry presentation) are the recognised seasonal driver, directly consistent with the CAT III infrastructure — see §3.4/§14. |
| Curfew / slots / hours | 🟥 | **H24 field — no hard curfew.** Operates a **night quota/slot-restriction regime** (COHOR-administered, Ministerial decree) rather than a blanket movement ban — see §6/§12. |
| RFF category vs our types | 🟧 | Not sourced this pass — see §1/§18. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 as a major hub; specific supplier/hours not confirmed in reachable public sources. |
| Customs / handling / security | 🟧 | International halls confirmed across all three terminal groups; exact desk hours and handling-agent detail not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LFPG sits at 392 ft AMSL on the flat Île-de-France plateau northeast of Paris — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths. This is a non-issue field for terrain; verify the MSA ring on the current chart as routine practice, but CFIT is not the operative threat here. The real threat at this field is airspace/traffic density (§3.2), not terrain.

### 3.2 Airborne conflict / traffic 🟥
CDG operates **two runway doublets in a segregated, dependent-parallel configuration**: the **outer doublet (08L/26R and 09R/27L)** is dedicated to **landings**, and the **inner doublet (08R/26L and 09L/27R)** is dedicated to **departures** — all four runways can run simultaneously, giving 2 continuous landing streams and 2 continuous departure streams regardless of which compass orientation (east "08/09" or west "26/27") is active. Localizer-course spacing between the parallel pairs is **less than 3 NM** (below standard radar separation), so aircraft closing in on parallel approach courses must be **vertically separated by 1,000 ft**; arrivals to 09L/R or 26L/R must fly a **minimum 1,300 ft/min rate of descent** (except during speed-reduction phases) to avoid a separation-minima infringement. CDG is also one of the few airports in the world certified for **triple simultaneous parallel approaches** and **parallel departures in all weather conditions**. DSNA runs the field from **three physical control towers** (South ATCT since 1999, North ATCT since Oct 2005, and a Central ATCT), reflecting the scale of the control problem. Crews should expect ATC to optimise **global traffic flow, not a single aircraft** — the operative local rule is **first-come-first-served**, and **requesting a runway change is itself flagged as a threat** (DSNA uses departure/arrival-manager tools for real-time runway assignment; a late crew-requested change disrupts the sequencing model). Cross-ref the Europe area brief: <../../../../Airspace/General/Europe.md> — 🟧 **no dedicated Paris (LFFF) FIR brief exists yet in this tree; see §18.**

### 3.3 Runway excursion 🟧
The outer/landing doublet carries **displaced thresholds on the reciprocal (west-facing) ends**: RWY 26R's LDA is 3,616 m against a 4,142 m TORA (≈526 m displacement), and RWY 27L's LDA is 3,600 m against a 4,200 m TORA (≈600 m displacement) — a real difference from the into-east-config LDA figures (08L 4,142 m; 09R 4,200 m) and worth briefing explicitly before a westerly (26/27-config) arrival. The inner/departure doublet (08R/26L, 09L/27R, 2,700 m) is **shorter than the outer pair by ~1,400–1,500 m** and is not used for scheduled landings — do not plan an arrival onto it. Runway high-speed turnoffs at CDG are specifically designed to allow vacating at up to 50 kt; pilots must adapt exit speed to runway/surface condition, and after vacating must **not stop inside the runway protected area** (90 m normal / 150 m in LVP).

### 3.4 Weather threat 🟧
Winter **radiation/advection fog and low-visibility periods** are the field's recognised seasonal hazard — a DSNA/CAA industry presentation on CDG operations reported Low Visibility Procedures in force roughly **under 5% of the time**, which is nonetheless the direct operational reason the outer/landing doublet carries CAT III infrastructure. In LVP, **landing clearance is issued at the latest when the aircraft is at 1 NM on final** (a later-than-normal clearance point driven by dependency on the parallel departure runway or a preceding landing). Winter also brings a standard Central European **snow/de-icing season**; exact months and provisioning detail not confirmed this pass — see §11/§14. No CDG-specific convective/thunderstorm frequency statistic was found — treat as general regional (Île-de-France) climatology.

### 3.5 Operational considerations 🟥
Plan around four durable constraints: (1) the **segregated dependent-parallel-doublet geometry itself** — misidentifying the landing vs departure pair, or requesting an unplanned runway change, both sit high on DSNA's own threat list for this field; (2) the **IATA Level 3 slot-coordinated regime** (COHOR) combined with a **night quota/slot-restriction system** rather than a hard curfew — schedule integrity has real commercial consequences (see §6/§12); (3) **RECAT-EU wake-turbulence categorisation** is applied for reduced separation minima on both arrival and departure — speed adherence and minimising runway occupancy time are operationally significant here; and (4) **continuous bilateral contact discipline on departure** — the departure frequency is **not** issued by Tower after takeoff; crews must pre-select it and wait for the explicit frequency-change instruction, never changing on their own initiative. RFF, navaid and approach infrastructure are assumed first-tier for a hub of this scale, but several figures (RFF category, exact ILS idents/frequencies, PCN) are open items in §18 rather than safety-critical gaps.

---

## 4. Cautions & Warnings

- **Outer doublet (08L/26R, 09R/27L) is always the landing pair; inner doublet (08R/26L, 09L/27R) is always the departure pair** — this assignment holds in both east and west configurations; never assume the reciprocal role.
- **Displaced thresholds on 26R (LDA 3,616 m) and 27L (LDA 3,600 m)** — brief the reduced landing distance before any westerly-configuration arrival on the long runways.
- **Do not request a runway change** — DSNA's automated arrival/departure-manager tooling optimises global traffic flow; a late crew-requested change is explicitly flagged by the ANSP as a threat to both pilot and controller.
- **Localizer courses on the parallel pairs are spaced under 3 NM** — expect a 1,000 ft vertical-separation requirement and a mandatory 1,300 ft/min minimum descent rate on 09L/R and 26L/R arrivals (outside speed-reduction phases).
- **After takeoff, the departure frequency is not issued by Tower** — pre-select it and wait for the explicit change instruction; do not change frequency unprompted.
- **Push-back clearance is valid for only one minute** — if push does not commence promptly, re-confirm before proceeding.
- **Taking off from intermediate taxiways Q6, D1, D2, R1, T1 or T2** can incur a wake-turbulence delay from inbound traffic on the adjacent parallel runway — notify Delivery if planning an intermediate departure.
- **Terminal 2G / "Juliett" stand area** (intermediate holding points TJ1/TJ2/TJ3) is a named taxiway-excursion risk area for smaller/narrower-gauge types; use the oversteering technique through these points.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the **segregated dependent-parallel-doublet geometry**, the **triple-simultaneous-parallel-approach environment**, and the **CAT III low-visibility infrastructure**. 🟥
- **Crew-qualification gate:** CAT II/III currency required for full-capability ops into the CAT III-equipped outer/landing doublet during winter low-vis conditions — confirm crew/aircraft currency before planning a low-vis arrival. 🟧
- **Operating restrictions / bans:** No hard curfew — a **night quota/slot-restriction regime** applies instead (§6/§12); no RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **DSNA** (Direction des Services de la Navigation Aérienne), operating Paris CDG Tower/Approach and, upstream, **Paris ACC (LFFF)**. Airport operator — **Groupe ADP** (Aéroports de Paris), branded **Paris Aéroport**. Slot coordinator — **COHOR** (the French slot coordinator for all Level 2/3 airports in France, including LFPG, LFPO, LFOB).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | **24/24H** — no hard curfew | 🟩 |
| Night / curfew restrictions | **No blanket ban.** Night **quota/slot-restriction regime** under a 6 Nov 2003 Ministerial decree (as amended 2 May 2012, consolidated 2019): departures restricted **00:00–04:59** local block time, arrivals restricted **00:30–05:29** local block time; movements in these windows require an airline-held **quota slot** allocated by COHOR — unused/cancelled quota is permanently lost, no rollover; a separate acoustic-classification restriction additionally limits the noisiest aircraft categories across a wider night window (exact hours/classes not independently confirmed this pass 🟧) | 🟥 |
| RFF category | Not published / verify 🟧 | 🟧 |
| Fuel | Jet A-1 assumed available H24 (major hub); specific into-plane supplier/hours not confirmed | 🟧 |
| PCN | Partial only — reported as **PCN 100 F/C/W/T** on part of 08L/26R and **PCN 95 F/C/W/T** on part of 09R/27L (near the 26R/27L thresholds); full-length/all-runway PCN table not confirmed | 🟧 |
| Customs | International halls in T1, T2 series and T3; exact desk hours not confirmed | 🟧 |
| Handling / FBO | Multiple third-party ground handlers reported at this scale of hub; none individually confirmed for this pass | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 08L | ~4,142–4,215 m × 45 m | Concrete/asphalt; partial PCN 100 F/C/W/T reported near 26R threshold 🟧 | 4,142 m | 4,202 m | 4,142 m | 4,142 m | **Outer/landing doublet** |
| 26R | (reciprocal of 08L) | — | 4,142 m | 4,202 m | 4,142 m | **3,616 m** | **Displaced threshold** (≈526 m) — verify current AIRAC 🟧 |
| 09R | ~4,200 m × 45 m | Asphalt; partial PCN 95 F/C/W/T reported near 27L threshold 🟧 | 4,200 m | 4,260 m | 4,200 m | 4,200 m | **Outer/landing doublet** |
| 27L | (reciprocal of 09R) | — | 4,200 m | 4,260 m | 4,200 m | **3,600 m** | **Displaced threshold** (≈600 m) — verify current AIRAC 🟧 |
| 08R | 2,700 m × 45–60 m 🟧 | Concrete | 2,700 m | 2,760 m | 2,700 m | 2,700 m | **Inner/departure doublet** — no scheduled landing role |
| 26L | (reciprocal of 08R) | — | 2,700 m | 2,760 m | 2,700 m | 2,700 m | **Inner/departure doublet** |
| 09L | 2,700 m × 45–60 m 🟧 | Concrete | 2,700 m | 2,760 m | 2,700 m | 2,700 m | **Inner/departure doublet** — no scheduled landing role |
| 27R | (reciprocal of 09L) | — | 2,700 m | 2,760 m | 2,700 m | 2,700 m | **Inner/departure doublet** |

*Source: aggregated tier-4 public data (OurAirports, Learn ATC aerodrome reference, and a public flight-planning aggregator) cross-checked for consistency — declared-distance figures agree closely across sources, but this table has **not been independently verified against a primary AIP AD 2 table** this pass. Width figures for the inner doublet showed a minor 45 m/60 m discrepancy between sources — flagged. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Paris CDG ATIS — English / French | 127.130 (EN) / 128.230 (FR) | H24 | Two independent tier-4 sources agree on these values |
| Delivery | Paris CDG Delivery | 126.650 / 121.730 / 121.840 (position-dependent) | H24 | Multiple delivery positions — take the assigned frequency |
| Ground | Paris CDG Ground | 121.810 / 121.610 (position-dependent) | H24 | Position split by runway pair/apron sector — confirm assignment |
| Tower | Paris CDG Tower | 120.900 / 120.905 / 119.255 (position-dependent) | H24 | Three physical towers (South/Central/North) each work assigned positions/sectors — take the assigned frequency |
| Approach | Paris CDG Approach ("De Gaulle Approach") | Not confirmed this pass 🟧 | H24 | Below Paris ACC; report the last speed instructed by Paris ACC on first contact |
| Centre / FIR | **Paris ACC (LFFF)** | Per current AIRAC | H24 | 🟧 No dedicated Paris (LFFF) FIR brief exists yet in this tree — see the Europe area brief: <../../../../Airspace/General/Europe.md> and §18 |

*Source: Learn ATC public aerodrome-frequency reference (tier-4), cross-checked against an independent tier-4 transition-altitude reference for the ATIS pair (strong agreement). Ground/Tower/Delivery position-splits are reported but not resolved to specific runway-pair assignment — treat as 🟧 pending a primary-AIP or current-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | PGS | 117.05 | H24 (assumed) | Charles de Gaulle VOR/DME, on/near field |
| ILS (outer/landing doublet — 08L, 26R, 09R, 27L) | Not published / verify 🟧 | Not published / verify 🟧 | H24 (assumed) | **CAT III** capability reported for this pair; exact idents/frequencies and sub-category (IIIA/IIIB) not confirmed from a primary table this pass |
| ILS (inner/departure doublet — 08R, 26L, 09L, 27R) | Not published / verify 🟧 | Not published / verify 🟧 | — | **No scheduled arrival/approach role** — this pair is departure-only; do not plan an approach onto it |

*Source: VOR/DME ident/frequency cross-checked via a public navaid-mapping reference (tier-4). ILS infrastructure/CAT III role inferred from the runway-pair segregation itself and general public reporting — idents/frequencies flagged for primary-source confirmation.*

---

## 10. Arrival

- **Transition altitude / level:** TA reported as **4,000 ft** by an independent public reference (cross-checked against the confirmed ATIS frequency pair, giving reasonable confidence) — **not independently confirmed against a primary AIP table** this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm).
- **Preferential runway logic:** Wind/traffic-flow dependent — the active compass orientation (east "08/09" vs west "26/27") is set by ATC/DSNA, but within either orientation the **outer doublet is always the landing pair**.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 08L | ILS CAT III | Not confirmed 🟧 | Not confirmed 🟧 | Outer/landing doublet |
| 26R | ILS CAT III | Not confirmed 🟧 | Not confirmed 🟧 | Outer/landing doublet; **displaced threshold, LDA 3,616 m** |
| 09R | ILS CAT III | Not confirmed 🟧 | Not confirmed 🟧 | Outer/landing doublet |
| 27L | ILS CAT III | Not confirmed 🟧 | Not confirmed 🟧 | Outer/landing doublet; **displaced threshold, LDA 3,600 m** |
| 08R / 26L / 09L / 27R | — none scheduled — | — | — | **Inner/departure doublet — never an arrival runway** |

- **STARs (names only):** Historically referenced RNAV STAR names include **MATIX** and **MOPIL** (with runway-orientation-specific suffixes for the east/west configurations) — 🟧 **not confirmed against the current AIRAC**; a public reference reports on the order of 24 STARs serving the field. Pull the live current-AIRAC STAR list at planning.
- **LVP:** Winter fog/low-visibility triggers LVP; in LVP, landing clearance is issued no later than 1 NM final. Exact RVR trigger values not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat plateau); the operative missed-approach concern is re-sequencing back into a very high-density, dependent-parallel-doublet traffic environment with three-tower control.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Historically referenced RNAV SID names include **NURMO, ATREX, OPALE, AGOPA, ERIXU/ERIKU, LATRA, OKASI, PILUL** — 🟧 **not confirmed against the current AIRAC; pull the live current-AIRAC SID list before use.** Departure procedures are reportedly organised into North/East/South/West sectors.
- **RNP / climb-gradient requirements:** Not confirmed this pass — verify RNP/gradient per SID on the current chart. See <../../../../../OM E Operations/PBN and RNP Operations.md>.
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Push-back clearance is valid for **one minute only**; confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** **IATA Level 3 slot-coordinated** (coordinator **COHOR**); EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested EU hub. 🟧
- **De-icing:** Availability, pad locations and season not confirmed in reachable sources this pass — dedicated remote pads are assumed at this hub scale but not individually sourced. 🟧 See <../../../../../OM E Operations/Cold Weather Operations.md>.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Standard noise-abatement departure procedure applies; specific named routing not confirmed this pass. 🟧
- **Night noise / dB limits:** Governed through the **night quota/slot-restriction regime** (§6) rather than a published per-movement dB limit. Under the 6 Nov 2003 decree (amended 2012, consolidated 2019): departures restricted 00:00–04:59 and arrivals restricted 00:30–05:29 local block time to airlines holding an allocated quota; a separate acoustic-classification restriction additionally limits the **noisiest Chapter 3-certified aircraft** across a wider night window — exact hours/classes not independently confirmed this pass. 🟧 Enforcement is by **ACNUSA** (Autorité de Contrôle des Nuisances Aéroportuaires), which may levy fines up to **€40,000** per infringement; an operational diversion (including one caused by the Orly curfew) is explicitly **not** an excusing circumstance.
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not individually confirmed by terminal for K Global's fleet; Terminal 2 series and Terminal 3 provide widebody-capable jetway/bus-boarding positions at hub scale — see <LFPG — Dispatch.md> §3. 🟧
- **Push-back:** Push-back clearance valid **one minute only**; mandatory-vs-self-manoeuvre policy for Code E/F stands not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; **arrivals vacating an inner (departure-pair) runway have priority over aircraft taxiing on the first taxiway parallel to that runway** unless instructed otherwise (e.g. **Tango taxiway** for the southern/08-26 runway pair).
- **Hot spots / tight taxiways:** 🟥 Intermediate takeoff points **Q6, D1, D2, R1, T1, T2** carry a wake-turbulence delay risk from inbound traffic on the adjacent parallel runway — notify Delivery if planning to depart from one. **TJ1/TJ2/TJ3** (Terminal 2G / "Juliett" stand area intermediate holding points) are a named taxiway-excursion risk for smaller-gauge types (oversteering technique recommended). Terminal 2's apron boundary is marked by intermediate holding points (e.g. **Stop TE1**, and **Middle 1/2/3/4**, plus a dedicated **FedEx apron** point) where responsibility for anti-collision separation transfers from ATC to the flight crew — crews must stop at these points without a "continue" clearance.
- **Follow-me:** Availability not confirmed in reachable source — verify locally. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Temperate oceanic/continental-transition climate on the Île-de-France plateau; prevailing wind and the resulting east/west runway-orientation split are set operationally by DSNA/ATC.
- **Seasonal hazards:** **Winter fog/low-visibility periods** are the field's recognised seasonal hazard (LVP reported historically under ~5% of the time in an industry ATC presentation) — the direct operational reason the outer/landing doublet carries CAT III infrastructure. A standard Central European **winter snow/de-icing season** is assumed but not independently detailed this pass. 🟧
- **Local effects:** No notable terrain/sea-breeze effect at this inland plateau field; traffic-density-driven sequencing delay is the dominant "local effect" in practice, not weather.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the segregated-doublet runway assignment), navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, current AUP/UUP or RAD constraints in the Paris (LFFF) FIR, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate-network field — not a K Global base `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates [**LFOB**](../lfob/index.md) and [**LFPO**](../lfpo/index.md) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 as a major hub; specific into-plane provider/hours not confirmed. 🟧 See <../../../../../OM E Operations/Fuel Policy.md>.
- **Range/perf flags for our fleet:** Field length/strength non-limiting for any K Global type on the outer/landing doublet (4,142–4,200 m); the inner/departure doublet (2,700 m) is the tighter of the four but is only used for departures — confirm max-weight departure performance per type. See <../../../../../OM B Fleet/Fleet Capability Matrix.md>.

---

## 17. Fleet-specific notes (optional)

- No K Global type carries a field-elevation or runway-length performance penalty at LFPG on the outer/landing doublet; the inner/departure doublet's shorter length (2,700 m) is the only figure worth a second look for a heavy-weight widebody departure — see <../../../../../OM B Fleet/Fleet Capability Matrix.md>. The dominant planning consideration at this field is **traffic-sequencing/slot discipline and winter CAT III reliance**, not aircraft performance.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Paris (LFFF) FIR brief does not yet exist in this tree** — this pack links to the general Europe area brief (<../../../../Airspace/General/Europe.md>) as an interim measure; a dedicated Paris (LFFF) FIR brief should be built separately.
- **Magnetic variation** — reachable sources disagree (≈1.0° E vs ≈2.0° W); not confirmed against a primary AIP figure.
- **RFF category** — not sourced this pass; assumed high (CAT 9/10-class) given A380/Code F operation, not an AIP-confirmed figure.
- **ILS idents, exact frequencies and CAT sub-category (IIIA/IIIB)** for the outer/landing doublet (08L, 26R, 09R, 27L) — role and CAT III capability are well-corroborated but the specific idents/frequencies were not obtained from a primary table this pass.
- **PCN** — only partial figures found (two runway segments); full-length/all-runway PCN table not confirmed.
- **Approach/Departure control frequencies** — not confirmed this pass; Tower/Ground/Delivery position-to-sector mapping likewise unresolved.
- **SIDs/STARs (current names, transitions, gradients)** — historically referenced names given; not confirmed against the current AIRAC.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, push-back mandatory-vs-self-manoeuvre policy** — none confirmed in reachable sources.
- **De-icing pad locations/season/provisioning** — not confirmed in reachable sources this pass (assumed present at this hub scale).
- **Exact night acoustic-classification restriction (hours/aircraft classes beyond the quota-slot windows)** — reported qualitatively via secondary sources, not independently confirmed against the governing decree text.
- **Fuel supplier(s), into-plane hours, customs/immigration desk hours, ground-handling agent(s)** — assumed major-hub H24 coverage, not individually confirmed.
- **Runway width for the inner/departure doublet (08R/26L, 09L/27R)** — sources show a minor 45 m/60 m discrepancy.
- **EUROCONTROL CTOT/ATFM specifics for LFPG** — general practice for a congested EU hub, not independently LFPG-sourced.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **SIA France eAIP (AIP France), AD 2 LFPG** — landing page https://www.sia.aviation-civile.gouv.fr/ (retrieved 2026-07-26). **Access note: the eAIP is a JavaScript-driven document set that did not render usable AD 2 LFPG content to a raw fetch in this pass** — treated per this pack's tier-4 fallback policy; direct AD 2 LFPG page links were located (e.g. the 14 May 2026 and 16 Apr 2026 AIRAC cycles) but not extractable this pass.
- OurAirports — https://ourairports.com/airports/LFPG/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- Learn ATC — LFPG aerodrome reference — https://www.learn-atc.com/tools/aerodrome/LFPG (retrieved 2026-07-26). *ATC frequency and runway-dimension cross-check.*
- COHOR — "Paris Charles de Gaulle Airport (CDG/LFPG)" — https://www.cohor.org/en/airports/aeroport-de-paris-charles-de-gaulle-cdg-lfpg/ (retrieved 2026-07-26). *Slot-coordination level, coordinator, night-restriction decree references, runway/terminal capacity parameters.*
- French Ministry for Ecology (ecologie.gouv.fr) — "LFPG/Paris-Charles de Gaulle/CDG" local-safety-team threat brief, updated 1 Dec 2024 — https://www.ecologie.gouv.fr/sites/default/files/documents/CDG_en.pdf (retrieved 2026-07-26). *TEM/operational threat content — triple-parallel-approach, wake turbulence/RECAT-EU, LVP procedure, taxi hot spots, HIRO, push-back/de-icing notes.*
- DGAC/DSNA — "Runway Incursion Prevention Measures at Paris-Charles de Gaulle Airport," ICAO EUR Runway Safety Seminar, Moscow, Sep 2005 — mirrored via https://silo.tips/download/runway-incursion-prevention-measures-at-paris-charles-de-gaulle-airport (retrieved 2026-07-26). *Three-tower ATC structure, segregated-doublet history/geometry, A-SMGCS/RWSL/RIMCAS, named taxiway hot spots.*
- ATC Network — "Triple, Parallel, Independent PBN/ILS Approach Procedures Commissioned at Paris-CDG & Le Bourget Airports" — https://www.atc-network.com/atc-news/dsna/triple-parallel-independent-pbnils-approach-procedures-commissionned-at-paris-cdg-le-bourget-airports (retrieved 2026-07-26). *Runway-sequencing strategy (anticrossing/minimum-taxi-time), historically-referenced fix names.*
- Wikimapia — "VOR-DME (Charles de Gaulle airport)" — http://wikimapia.org/8739841/VOR-DME-Charles-de-Gaulle-airport-ICAO-LFPG (retrieved 2026-07-26). *VOR/DME ident/frequency.*
- Wikipedia — "Charles de Gaulle Airport" — https://en.wikipedia.org/wiki/Charles_de_Gaulle_Airport (retrieved 2026-07-26). *Terminal layout/history, traffic statistics, operator.*
- CE Delft — "Night Flight Restrictions and Airline Responses at Major European Airports" — https://cedelft.eu/wp-content/uploads/sites/2/2021/04/CE_Delft_7621_Night_Flight_Restrictions_FINAL.pdf (retrieved 2026-07-26). *Night quota-slot regime corroboration.*
- Universal Weather & Aviation — LFPG airport information page — https://www.universalweather.com/airports/LFPG-CDG-CHARLES-DE-GAULLE-AIRPORT-PARIS-ILE-DE-FRANCE-FRANCE/ (retrieved 2026-07-26). *Partial PCN figures.*
- CourseHero (public student-shared reference) — "Transition Altitudes Around the World" — https://www.coursehero.com/file/38938721/transition-altitudesdocx/ (retrieved 2026-07-26). *TA and ATIS-frequency cross-check — non-authoritative, used only for corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
