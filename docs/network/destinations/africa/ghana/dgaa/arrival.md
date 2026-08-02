# DGAA — Kotoka Intl · Arrival Page

**DGAA / ACC** · Accra, Greater Accra Region, Ghana · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Ghana GCAA AIP/public-source build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [DGAA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 🟧 Wind-dependent — single runway 03/21 |
| Usual approach | 🟧 Not confirmed — verify current AIRAC |
| Config logic | Wind-driven only (single runway) |
| Transition level | 🟧 Not published / verify |
| LVP trigger | 🟧 Not published / verify — harmattan dust-haze season is the plausible trigger scenario |
| Missed-approach driver | Traffic/sequencing (flat terrain — not terrain-driven) |

---

## 2. STAR / transition selection

- **STARs (names only):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** 🟧 Not confirmed — single-runway field, arrival direction is wind-determined.
- **Transition to approach:** 🟧 Not confirmed — verify current chart.
- **Speed / flow constraints on the STAR:** 🟧 Not confirmed — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** 🟧 Not confirmed — apply standard planning rule-of-thumb pending a field-specific procedure.
- **Speed control:** Standard 250 KIAS below FL100 per ICAO norm — confirm no local override.
- **Altitude constraints:** 🟧 Not confirmed — verify chart.
- **Energy traps:** No terrain-driven energy trap identified (flat coastal field); the standing risk is a **late/unstable approach into a wet-runway landing** given the field's historical excursion pattern (Briefing §3.3) — hold a firm stabilised-approach gate.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 03 | 🟧 Not confirmed this pass | 🟧 | Verify current AIRAC |
| 21 | 🟧 Not confirmed this pass | 🟧 | **Displaced threshold reduces LDA — see Briefing §7** |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None — flat, low-lying Accra coastal plain, no close-in high terrain (cross-ref [Briefing §3.1](index.md)).
- **Specific threats:** 🟥 **RWY 21's displaced threshold (411 m / 1,349 ft)** materially reduces usable LDA — brief the correct picture before accepting a RWY 21 approach. The field's documented history of wet-weather runway excursions (Briefing §3.3) makes **wet-runway braking-action awareness** the standing arrival-phase threat.
- **Airspace / traffic:** 🟧 Busiest West-Africa Gulf-of-Guinea gateway in the network per the continental brief; exact control type (radar/procedural) not independently confirmed — cross-ref [Briefing §3.2](index.md) and the [Africa airspace brief](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat coastal field.
- **Re-sequencing environment:** 🟧 Not confirmed — single-runway field, expect straightforward re-sequencing pending confirmation of actual traffic density and control type.
- **Go-around traps:** None terrain-related identified; the operative go-around trigger is an unstable wet-runway approach (§5).

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 03 — full length ~3,403 m (no displacement reported). RWY 21 — **reduced, threshold displaced 411 m (1,349 ft)**; usable LDA is a derived estimate (~2,992 m), not a sourced AIP figure — verify (Briefing §7/§18).
- **Braking / vacate:** 🟧 Not confirmed — rapid-exit taxiway locations not sourced.
- **Runway-excursion watch:** 🟥 **Documented historical pattern of runway-excursion events at this field**, including a wet-weather landing overrun — treat wet/contaminated-runway braking action as a standing watch-item, not a hypothetical.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** 🟧 Not confirmed — confirm current Ground/Apron routing to Terminal 3 on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none"; cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** Terminal 3 is the international arrivals gateway — cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (119.5) → Tower (119.1) → Ground (121.9) — per [Briefing §8](index.md); confirm current AIRAC before use.
- **Approach/Departure control:** Accra Approach (119.5) — sector/STAR-specific detail not confirmed. 🟧

---

## 10. Gotchas

- **RWY 21's displaced threshold** — don't assume full-length LDA; confirm the current published figure before accepting that runway.
- **This field has a documented multi-event runway-excursion history**, including a fatal-on-the-ground wet-weather overrun — hold a hard stabilised-approach criterion, especially in wet-season convective weather.
- **Single runway, joint civil/military field** — expect occasional non-scheduled traffic in the pattern.
- **Harmattan dust haze (Nov–Mar)** — confirm current visibility trend before a marginal-weather arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STARs, approach names/minima, transition level — none confirmed from a primary source this pass.
- Exact published RWY 21 LDA (only the displacement distance is sourced).
- Rapid-exit taxiway / vacate points.
- LVP trigger conditions.
- Approach/Departure control sector detail.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DGAA/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Accra International Airport" — https://en.wikipedia.org/wiki/Kotoka_International_Airport (retrieved 2026-07-26). *Historical runway-excursion accident record corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
