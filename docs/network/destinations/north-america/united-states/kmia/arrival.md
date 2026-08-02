# KMIA — Miami Intl · Arrival Page

**KMIA / MIA** · Miami, Florida, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — FAA-sourced, provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [KMIA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind/traffic dependent across four non-parallel runways — **08-series** typical given prevailing easterly winds, with **09/27** and **12/30** used complementarily 🟧 |
| Usual approach | ILS/LOC on 08R/26L, 09/27, 12/30; RNAV (GPS/RNP) on all four runways incl. 08L/26R (RNAV-only) |
| Config logic | Wind-driven; supplemented by traffic/capacity needs across the non-parallel complex |
| Transition level | Not independently confirmed — US default FL180 assumed; verify current chart 🟧 |
| LVP trigger | No dedicated CAT II/III procedure confirmed; the field does experience occasional dense-fog/low-ceiling events (documented ground stops) 🟧 |
| Missed-approach driver | Airspace/traffic density and the non-parallel runway complex, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** BNFSH, CSTAL, DVALL, FOWEE, FROGZ, PALMZ, SNDBR, TARPN, VIICE (various transition numbers, RNAV and conventional) — pull the current-AIRAC STAR list and transition names at planning. 🟧
- **Selection by arrival direction / runway:** Miami TRACON assigns the STAR-to-runway transition for the active configuration; South Florida's prevailing easterly trade winds typically favour the 08-series runways, with 09/27 and 12/30 used complementarily. 🟧 Not sourced to a specific published ATC document.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS or RNAV-to-RNAV transition with radar vectors onto final in the dominant configuration; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given Miami TRACON's high-density Class B environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Afternoon convective activity in the warm season can force late-notice STAR/runway changes or holding — brief an early-descent contingency.
- **Speed control:** STAR speed gates and 250 KIAS below 10,000 ft MSL (14 CFR 91.117) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes driven by shifting sea-breeze wind or an approaching convective cell, and re-sequencing/holding during hurricane-season weather avoidance, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08L | RNAV (GPS) Z RWY 08L; RNAV (RNP) Y RWY 08L | No ILS on this runway 🟧 | verify current chart |
| 26R | RNAV (GPS) RWY 26R | No ILS on this runway 🟧 | verify current chart |
| 08R | ILS OR LOC RWY 08R; RNAV (RNP) Y RWY 08R | CAT sub-category not confirmed 🟧 | verify current chart |
| 26L | ILS OR LOC RWY 26L; RNAV (GPS) Y RWY 26L | CAT sub-category not confirmed 🟧 | verify current chart |
| 09 | ILS OR LOC RWY 09; RNAV (GPS) RWY 09 | Displaced threshold — use LDA 11,666 ft, not physical length 🟧 | verify current chart |
| 27 | ILS OR LOC RWY 27; RNAV (GPS) Y RWY 27; RNAV (RNP) Z RWY 27 | Displaced threshold — use LDA 12,749 ft; wrong-runway hot spot with RWY 30 (HS 2) 🟥 | verify current chart |
| 12 | ILS OR LOC RWY 12; RNAV (RNP) Y RWY 12 | Displaced threshold — use LDA 8,410 ft, not physical length 🟧 | verify current chart |
| 30 | ILS OR LOC RWY 30; RNAV (RNP) Y RWY 30 | Site of a 2022 landing-gear-shimmy excursion (unrelated to approach itself) | verify current chart |

- **LVP triggers:** No dedicated CAT II/III procedure confirmed in reachable sources; the field's occasional dense-fog/low-ceiling events (documented ground stops with ceilings as low as ~200 ft) mean a low-vis contingency should still be briefed. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat, sea-level South Florida coastal plain — no terrain relevant to any arrival path.
- **Specific threats:** 🟥 The **non-parallel, intersecting four-runway layout** is the field's standout specific threat — expect crossing traffic between runway complexes, published **LAHSO combinations**, and configuration changes driven by shifting winds/convective cells. Near-daily warm-season **thunderstorm/convective activity** brings turbulence, wind shear potential, and heavy-rain visibility reduction on approach; hurricane-season (Jun–Nov) tropical systems are the extreme end of this threat. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Airspace / traffic:** 🟥 High-density **Miami TRACON** Class B airspace with continuous international, domestic and heavy cargo/freighter traffic — brief for re-sequencing and vectoring, especially around convective weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat, sea-level) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to a busy Class B terminal environment with a non-parallel runway complex — expect vectoring and possible holding before re-sequencing, especially during convective weather or a configuration change.
- **Go-around traps:** Traffic/configuration awareness given the field's intersecting-runway geometry; the RWY 27/RWY 30 wrong-runway hot spot (HS 2) is a ground-workload factor to keep in mind on the subsequent approach/landing attempt.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 08L/26R **8,600 ft**; 08R/26L **10,506 ft**; 09 **11,666 ft** (13,016 ft physical − 1,350 ft displaced thr); 27 **12,749 ft** (13,016 ft physical − 267 ft displaced thr); 12 **8,410 ft** (9,360 ft physical − 950 ft displaced thr); 30 **9,360 ft** — always use the LDA, not the physical runway length, for RWY 09/12/27. All figures are ample for any K Global type; the shortest (RWY 12, LDA 8,410 ft) remains non-limiting.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds on RWY 09/12/27 — confirm the correct LDA is used in landing-distance calculations, not the physical runway length. Heavy warm-season convective rainfall (standing water/braking-action risk) is the relevant contamination consideration at this field, not winter freezing contamination. A 2022 landing-gear-related excursion occurred on RWY 9 (aircraft-system fault, not a runway-condition issue) — general reminder to brief excursion risk on every landing regardless of apparent routine conditions.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to the Central Terminal (Concourse E/F/G) or South Terminal (Concourse H/J) per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **15 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Five FAA-charted hot spots are published for KMIA**: HS 1 (short-taxiway risk), HS 2 (RWY 27/RWY 30 wrong-runway departure risk — relevant if crossing near this area on taxi-in), HS 3 (short taxiway between runways), HS 4 (multiple runway ends close together, hold lines dependent on runway in use), HS 5 (short taxiway between RWY 08L and RWY 08R / RWY 08R-RWY 12 taxiway convergence). Taxi with vigilance through these areas, especially during a concurrent departure bank on an intersecting runway.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody clusters expected in Concourse E satellite, Concourse J and more broadly the South/Central Terminal; specific gate assignment for a K Global arrival not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Miami Approach (Miami TRACON) 120.500/124.850/322.3/379.9/125.75/263.025 (sector-specific) → Miami Tower 118.300 (hdg 270–089) or 123.900 (hdg 090–269) → Miami Ground 121.800 (RWY 8L/8R/12/26L/26R) or 127.500 (RWY 9/27/30).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Miami TRACON** (Approach/Departure) is the facility for Miami's terminal area; **Miami ARTCC (ZMA)** hands off en route inbound — no OM C FIR brief is yet published for ZMA; name only, no link target exists. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Non-parallel, four-runway layout** — never assume a simple single-direction flow; expect crossing traffic between the 08/26, 09/27 and 12/30 complexes.
- **RWY 27/RWY 30 wrong-runway risk (FAA hot spot HS 2)** — maintain situational awareness of which runway you are cleared to approach/land on in this area.
- **Displaced thresholds on RWY 09, 12 and 27** — always use the published LDA, never the physical runway length, for landing-distance planning.
- **Near-daily warm-season convective activity** can force a late runway/config change — watch the ATIS wind trend and any convective SIGMET.
- **Hurricane season (Jun–Nov)** — do not plan a schedule that assumes normal ops during an active tropical-system advisory for South Florida.
- **Occasional dense-fog/low-ceiling events** (documented ground stops) — do not assume this field is fog-immune despite its sub-tropical climate.
- **LAHSO combinations are published for this field** — be aware another aircraft may be holding short of your landing runway on an intersecting surface.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names, transitions and exact approach minima per runway.
- ILS sub-category (CAT I/II/III) confirmation for 08R, 26L, 09, 27, 12, 30.
- Exact LVP/low-visibility trigger conditions, given the field's documented occasional fog events.
- Rapid-exit taxiway/vacate detail.
- Current gate/terminal assignment and taxi-in routing for a K Global arrival specifically.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. hot-spot/LAHSO status), ATIS config/wind trend, tropical-system advisories (NHC) in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- FAA d-TPP procedure index (AIRAC cycle 2604, 16 Apr–14 May 2026) via MetarCentral aggregator — https://metarcentral.com/airport/KMIA/operations (retrieved 2026-07-26). *STAR/IAP names, LAHSO chart existence.*
- FAA Southeast Hot Spots chart (cycle 16 Apr–14 May 2026) — https://aeronav.faa.gov/d-tpp/2604/se3hotspot.pdf (retrieved 2026-07-26). *KMIA HS 1–HS 5.*
- OurAirports — https://ourairports.com/airports/KMIA/runways.html , /frequencies.html (retrieved 2026-07-26). *Runway/displaced-threshold data, frequencies.*
- Hoodline — "FAA Lifts Brief Ground Stop at Miami International Airport Due to Dense Fog" — https://hoodline.com/2026/01/faa-lifts-brief-ground-stop-at-miami-international-airport-due-to-dense-fog/ (retrieved 2026-07-26). *Documented low-visibility event.*
- Wikipedia — "Miami International Airport" (RWY 9/RWY 30 accident history) — https://en.wikipedia.org/wiki/Miami_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
