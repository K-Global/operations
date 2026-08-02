# EPWA — Warsaw Chopin · Arrival Page

**EPWA / WAW** · Warsaw, Poland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EPWA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify 🟧 — no wind/noise-based selection rule confirmed |
| Usual approach | Not published / verify 🟧 — ILS presence on RWY 15/33 is plausible given the runway/displaced-threshold profile, not confirmed |
| Config logic | Presumed wind-driven; not confirmed. **RWY 11/29 and RWY 15/33 intersect** rather than running as independent parallels — see §5 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Winter fog/icing is the plausible trigger given the field's continental climate; exact RVR trigger not published 🟧 |
| Missed-approach driver | Airborne traffic / crossing-runway dependency, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not published / verify — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed. Warszawa Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Not confirmed; expect radar vectors onto final under Warszawa Approach.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Two traps stand out at this field: (1) a late runway-configuration change is more consequential than at an independent-parallel hub because **RWY 11/29 and RWY 15/33 intersect**, so a switch can affect both pairs' availability at once; (2) **assuming full published runway length is available** — RWY 29 and RWY 33 both carry meaningful displaced thresholds (§7) that reduce the true landing distance from those ends.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 11 | Not published / verify 🟧 | Not confirmed | verify current chart |
| 29 | Not published / verify 🟧 | Displaced threshold — reduced LDA (§7) | verify current chart |
| 15 | Not published / verify 🟧 | ILS presence plausible, not confirmed | verify current chart |
| 33 | Not published / verify 🟧 | Displaced threshold — reduced LDA (§7); ILS presence plausible, not confirmed | verify current chart |

- **LVP triggers:** Winter fog/icing under the field's continental climate is the plausible routine trigger; exact RVR values and ILS sub-category not published. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Mazovian Lowland at 362 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 The field's **two intersecting (not parallel) runways** create arrival/departure interdependency and a reported combined-throughput ceiling of ~34 movements/hour — expect sequencing, holding or extended vectoring during peak banks. **RWY 11 is the site of a historical (1993) wet-runway excursion accident** — a case-study caution for contaminated-surface conditions on this runway, not a standing operational restriction today.
- **Airspace / traffic:** 🟧 EPWA is reported as Poland's busiest airport (~300 daily movements, >20 million passengers/year) under Warszawa Approach radar control — brief for re-sequencing, especially in marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat lowland) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to a radar environment constrained by the crossing-runway geometry — expect vectoring and possible holding before re-sequencing, especially during a winter fog event.
- **Go-around traps:** Traffic/config awareness across the intersecting runway pair during the miss.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 11 ~2,800 m (no displaced threshold on this end); **RWY 29 ~2,300 m** (2,800 m minus a ~500 m displaced threshold — figure derived from tier-4 data, not an official published LDA); RWY 15 ~3,690 m (no displaced threshold on this end); **RWY 33 ~3,029 m** (3,690 m minus a ~661 m displaced threshold — a secondary source reports a slightly different displacement figure; treat as unresolved pending AIP confirmation) — see [Briefing §7](index.md). 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟥 **RWY 11 carries a historical (1993) wet-runway excursion accident.** No displaced threshold is confirmed on RWY 11 itself, but the reduced LDA on RWY 29 and RWY 33 (via their displaced thresholds) should be treated as a standing runway-excursion watch-item in contaminated conditions.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed; VAMSYS mirror gives a planning taxi-in figure within the reported **12/15 min** in/out pair (assignment not certain — see Briefing §18) `[VAMSYS mirror 2026-07-26]` 🟧.
- **Hot spots / tight taxiways:** 🟧 No individually named taxiway hot spots confirmed. The **intersection of RWY 11/29 and RWY 15/33** is the structural ground-dependency point — taxi with vigilance around it, especially if the other runway pair is running a concurrent arrival/departure bank.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody/narrowbody stand allocation not confirmed; Terminal A gate mix is predominantly narrowbody-oriented.

---

## 9. Arrival frequency sequence

- **Sequence:** **Warszawa Approach 125.055 / 128.805 / 135.930 (Director 129.380) → Okęcie Tower 118.305 → Okęcie Ground 121.905 (reported HX 0330–2200).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Warszawa Approach** is the facility for Warsaw's terminal radar service; en-route handoff is to **Warszawa ACC (EPWW)** — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 (no dedicated Warszawa/EPWW FIR brief exists in this network yet).

---

## 10. Gotchas

- **RWY 11/29 and RWY 15/33 intersect rather than running in parallel** — expect sequencing dependency and possible extended vectoring, especially during a bank.
- **RWY 29 and RWY 33 both carry meaningful displaced thresholds** (~500 m and ~661 m respectively) — confirm the correct usable LDA for the assigned runway before committing to a landing-distance assessment.
- **RWY 11 carries a historical (1993) wet/contaminated-runway excursion accident** — treat contaminated-runway braking-action reports on this runway pair with elevated caution.
- **Winter fog/snow/icing season** can reduce visibility with limited warning — confirm current LVP status before a winter-season arrival.
- **Ground ATC is reported HX (0330–2200)** — confirm taxi-in service availability for a very early/late arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS presence/ident/frequency/CAT per runway (inferred, not confirmed).
- Exact LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment given the airport's multi-year expansion programme.
- VAMSYS taxi-in/out assignment (12/15 min reported, in/out not clearly attributed).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current security/NOTAM bulletins for the Warszawa (EPWW) FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/EPWA/runways.html (retrieved 2026-07-26). *Runway/declared-distance data.*
- OurAirports — https://ourairports.com/airports/EPWA/frequencies.html (retrieved 2026-07-26). *Communications.*
- SkyVector — https://skyvector.com/airport/EPWA (retrieved 2026-07-26). *Cross-check of runway headings/displaced thresholds/frequencies.*
- Wikipedia — "Warsaw Chopin Airport" — https://en.wikipedia.org/wiki/Warsaw_Chopin_Airport (retrieved 2026-07-26). *Historical runway-excursion accident (RWY 11, 1993), movements/hour capacity.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
