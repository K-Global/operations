# EDDF — Frankfurt/Main · Arrival Page

**EDDF / FRA** · Frankfurt am Main, Hesse, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft — DFS eAIP-derived, K Global home-hub build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EDDF Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **07L / 07C / 07R** in the prevailing south/south-westerly ("07-configuration"); **RWY 18 is never a landing runway** |
| Usual approach | ILS CAT III on the assigned parallel; GBAS steep (3.2°) available on Centre/South (and Northwest) runways for equipped operators |
| Config logic | Wind-driven; prevailing south/south-westerly favours the 07-config; 25-config is the less-common reciprocal |
| Transition level | By QNH; transition altitude 5,000 ft MSL — verify current chart 🟧 |
| LVP trigger | Winter Rhine-Main basin radiation/freezing fog under temperature inversion, dropping below CAT I minima — CAT III on all three parallels is the standing mitigation 🟧 (exact RVR trigger not confirmed) |
| Missed-approach driver | Airspace/traffic density (three-parallel-plus-crossing-runway environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** The **07-configuration** (land on 07L/07C/07R) is dominant given the prevailing south/south-westerly wind; the 25-configuration reciprocal is used when wind dictates. Langen Radar assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final in the dominant 07-config; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the high-density environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Fog-driven single-stream or reduced-rate arrivals in winter can compress the descent — brief an early-descent contingency.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (07↔25 ahead of a wind shift), and holding/resequencing during winter fog/inversion events, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07L | ILS (IFNE) | **CAT III** — landing-only runway, a primary arrival runway in the 07-config 🟩 | verify current chart |
| 25R | ILS (IFNW) | **CAT III** — reciprocal, 25-config only | verify current chart |
| 07C | ILS (IFCE); GBAS steep 3.2° | **CAT III** 🟩 | verify current chart |
| 25C | ILS (IFCW); GBAS steep 3.2° | **CAT III** 🟩 | verify current chart |
| 07R | ILS (IFSE) | **CAT III** 🟩 | verify current chart |
| 25L | ILS (IFSW) | **CAT III** 🟩 | verify current chart |
| 18 | — none — | **Never a landing runway** — takeoff-only, no approach published | n/a |

- **LVP triggers:** Winter radiation/freezing fog under temperature inversion is the routine EDDF trigger — CAT III capability on all three parallels is the standing mitigation. ILS sub-category (IIIA/IIIB) not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Rhine-Main basin at 364 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 **Three full-length parallel runways plus a perpendicular crossing runway (18)** sustain continuous high traffic density; winter fog/inversion events can force reduced-rate single-stream arrivals across the parallel set. Wake from the adjacent parallel(s) is a standing consideration during simultaneous/dependent operations.
- **Airspace / traffic:** 🟥 Very high density under **Langen Radar** (DFS) — one of the busiest terminal areas in Europe; brief for re-sequencing and extended vectoring, especially in marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat basin) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a very high-density, three-parallel-plus-crossing-runway radar environment — expect extended vectoring and possible holding before re-sequencing, especially during a winter fog event.
- **Go-around traps:** Traffic/config awareness on the parallel set during the miss; the RWY 18 turnaround area and its crossing traffic remain a ground-workload factor even though 18 itself is never the landing runway.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 07L/25R **2,800 m**; 07C/25C, 07R/25L **4,000 m** — no displaced thresholds found in the reachable AIP extract 🟧 (not independently re-confirmed). The 4,000 m pair is ample for any K Global widebody; the 2,800 m landing-only runway is also non-limiting for typical arrival weights.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; winter-contamination braking-action consideration applies in the Oct–Apr de-icing season (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned 07/25-config runway, taxi in to **T1 "A-Plus"/Concourse C** or **T3** per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **18 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟥 **TWY N7**, **TWY R15** (between RWY 07R/25L and TWY S), the **RWY 18/TWY Y turnaround area**, and the zones between **RWY 07C/25C–TWY L** and **RWY 07R/25L–TWY M** — AIP-flagged complex ground junctions; taxi with vigilance, especially if RWY 18 is running a concurrent departure bank.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody clusters at T1 "A-Plus"/Concourse C13–C20; T3 gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Langen Radar (120.150/136.125/372.850/126.550 or 120.800/125.350/277.800/119.025, sector-specific) → Frankfurt Arrival 118.500 / Director 127.275 (HX) → Frankfurt Tower 119.900 (H24) or 118.775 (H24) → Frankfurt Ground 121.800 (HX) → Frankfurt Apron 121.550–121.950 (H24).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Langen Radar** (DFS) is the facility for Frankfurt's terminal approach; **Langen ACC (EDGG)** hands off en route inbound — see [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 18 is never a landing runway** — do not expect it as an arrival option under any configuration.
- **Winter fog/inversion events can drop the field below CAT I minima quickly** — brief the CAT III plan and a holding/diversion contingency in season.
- **Three-parallel-plus-crossing-runway geometry** sustains continuous high traffic density — expect vectoring/holding, especially in marginal weather or during a bank.
- **Config swap (07↔25) driven by a wind shift** can bring a late runway change — watch the ATIS wind trend.
- **RWY 18 turnaround-area crossing traffic** remains a ground-workload factor on taxi-in even though 18 itself is departure-only.
- **Core night ban 23:00–05:00** — a delayed arrival past midnight must divert; do not plan a schedule that relies on a post-curfew landing.
- **Kelsterbach and other noise-sensitive communities** near the RWY 18/southern approach area are the reason for several noise-routing constraints — be aware even though this rarely changes tactical flying.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB) confirmation.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current post-Terminal-2-closure/Terminal-3-opening taxi-in routing and gate assignment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status), ATIS config/wind trend, current AUP/UUP or RAD status in the Langen FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DFS AIP Germany, AD 2 EDDF** (2011–2012 cycle extract) — STAR/IAP index, runway/declared-distance data, communications, taxiway-lighting hot-spot remarks — https://silo.tips/download/eddf-ad-21-aerodrome-location-indicator-and-name-eddf-frankfurt-main-eddf-ad-22 (retrieved 2026-07-25).
- Fraport — "Active Noise Abatement" (GBAS steep-approach, segmented/curved approach detail) — https://www.fraport.com/en/sustainability/dialog-with-neighbors/noise-and-air/measures/active-noise-abatement.html (retrieved 2026-07-25).
- Aeroplan.ch — "Frankfurt / Runway 07L–25R, CAT III" — https://aeroplan.ch/portfolio/frankfurt-runway-07l-25r-cat-iii/ (retrieved 2026-07-25). *CAT III infrastructure corroboration.*
- Simple Flying — "Why Frankfurt's Runway 18 Is Only Used For Takeoffs In One Direction" — https://simpleflying.com/frankfurt-runway-18-one-direction/ (retrieved 2026-07-25). *RWY 18 never-a-landing-runway confirmation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS; folded to 4-page hub pack. |
