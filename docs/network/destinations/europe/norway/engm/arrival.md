# ENGM — Oslo Gardermoen · Arrival Page

**ENGM / OSL** · Ullensaker, Akershus/Viken, Norway · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-data build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [ENGM Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind/traffic dependent within the independent-parallel-runway concept — exact segregated-mode assignment not AIP-confirmed 🟧 |
| Usual approach | ILS (CAT III capability reported field-wide; per-end category not confirmed) |
| Config logic | Independent parallel-runway operation; wind/traffic driven |
| Transition level | By QNH; transition altitude not published / verify 🟧 |
| LVP trigger | Winter freezing fog/freezing rain (Dec 1998 precedent) — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Traffic/runway-confirmation, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable public sources — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Assignment within the independent-parallel-runway concept is wind/traffic driven; exact logic not AIP-confirmed this pass. 🟧
- **Transition to approach:** Not confirmed — expect an RNAV-STAR-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Winter freezing-fog/freezing-rain events (§14 Briefing) can compress the descent/approach environment — brief an early-descent contingency; positively confirm the assigned runway given the independent-parallel-runway environment (§3.2 Briefing).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01L/19R/01R/19L | ILS | CAT III capability reported field-wide; per-runway-end category not confirmed 🟧 | verify current chart |

- **LVP triggers:** Winter freezing fog/freezing rain is the field's routine hazard (§14 Briefing); exact RVR trigger and per-runway CAT category not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified. Flat Trandum Delta plain at 681 ft AMSL — no close-in high terrain relevant to any arrival path in reachable sources.
- **Specific threats:** 🟧 **Independent parallel-runway operation** — SKYbrary flags runway misidentification as a named risk category for this field; positively confirm the assigned runway. Winter freezing fog/rain (Dec 1998 precedent) is the principal weather threat.
- **Airspace / traffic:** 🟧 Major international-hub traffic density under Oslo ACC (Røyken); brief for re-sequencing during marginal winter weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to the independent-parallel-runway traffic flow — expect vectoring, especially during a winter fog event.
- **Go-around traps:** Runway/config awareness within the parallel-runway environment; positive runway confirmation on the miss.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — runway lengths 3,600 m (01L/19R) and 2,950 m (01R/19L); no displaced thresholds found in reachable sources. 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Winter contamination (snow/ice) is the principal excursion driver at this field — braking-action reporting matters more here than at temperate fields.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not confirmed in reachable public sources — verify AIP aerodrome chart. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — East Pier widebody cluster is the likely long-haul assignment, not independently confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Approach/Director → Tower → Ground** — see [Briefing §8](index.md) for the reported frequency set; take the assigned frequency and confirm current chart.
- **Approach/Departure control:** **Oslo ACC** (Norway ACC network, sited at Røyken) provides approach service — see [Airspace/General — Europe](../../../../airspace/europe.md) 🟧 (no Norway-specific FIR brief in-library). Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Positively confirm the assigned runway** — SKYbrary flags runway misidentification as a named risk given the independent-parallel-runway layout.
- **Winter freezing fog/freezing rain can develop with limited warning** (Dec 1998 precedent) — brief the CAT III/holding-diversion contingency in season.
- **Reported night restriction 23:00–06:00** (north-side exception) — a delayed arrival approaching this window should be planned conservatively pending a live-regime check.
- **De-icing fluid provisioning is aquifer-constrained** — a factor for a quick winter turn if the inbound continues onward the same day.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima/category per runway.
- Independent-parallel-runway segregated-mode assignment logic.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment.
- Taxiway hot spots.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/ENGM/ (retrieved 2026-07-26).
- SkyVector — https://skyvector.com/airport/ENGM/Oslo-Gardermoen-Airport (retrieved 2026-07-26).
- SKYbrary — ENGM airport page — https://skybrary.aero/airports/engm (retrieved 2026-07-26). *Runway-misidentification risk tag.*
- Wikipedia — "Oslo Airport, Gardermoen" — https://en.wikipedia.org/wiki/Oslo_Airport,_Gardermoen (retrieved 2026-07-26). *1998 icing event, curfew.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public AIP-adjacent data; K Global fields from live VAMSYS; 4-page pack. |
