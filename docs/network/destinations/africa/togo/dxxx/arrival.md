# DXXX — Gnassingbe Eyadema Intl · Arrival Page

**DXXX / LFW** · Lomé, Maritime Region, Togo · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — ASECNA (AIP Togo)/public-source build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [DXXX Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 🟧 Wind-dependent — single runway 04/22 |
| Usual approach | 🟧 Not confirmed — verify current AIRAC |
| Config logic | Wind-driven only (single runway) |
| Transition level | 🟧 Not published / verify |
| LVP trigger | 🟧 Not published / verify — harmattan dust-haze season is the plausible trigger scenario |
| Missed-approach driver | Traffic/sequencing (flat terrain — not terrain-driven); reported hub-connection traffic (Briefing §3.2) |

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
- **Energy traps:** No terrain-driven energy trap identified (flat coastal field); the reported hub-connection traffic pattern may require additional sequencing awareness during peak banks.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04 | 🟧 Not confirmed this pass | 🟧 | Verify current AIRAC |
| 22 | 🟧 Not confirmed this pass | 🟧 | Verify current AIRAC |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None — flat, low-lying Bight-of-Benin coastal plain, no close-in high terrain (cross-ref [Briefing §3.1](index.md)).
- **Specific threats:** 🟧 No runway-excursion history or displaced-threshold caveat sourced for this field (Briefing §3.3/§7).
- **Airspace / traffic:** 🟧 The field's reported regional hub function concentrates connecting traffic through a single runway — cross-ref [Briefing §3.2](index.md) and the [Africa airspace brief](../../../../airspace/africa.md). Name the controlling FIR — **Accra (DGAC)** per the network assignment for this field (§18 in the Briefing notes an unreconciled ASECNA-bloc question).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat coastal field.
- **Re-sequencing environment:** 🟧 Single-runway field with a reported hub-connection traffic pattern — expect a busier re-sequencing environment during peak connecting banks than a standalone O&D field of similar size.
- **Go-around traps:** None terrain-related identified.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 04 and RWY 22 — both ~3,001 m, no displacement reported (Briefing §7).
- **Braking / vacate:** 🟧 Not confirmed — rapid-exit taxiway locations not sourced.
- **Runway-excursion watch:** 🟧 No excursion history sourced for this field; treat wet-season braking action as a standard precaution.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** 🟧 Not confirmed — confirm current Ground/Apron routing on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none"; cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** Cross-ref [Dispatch §3](dispatch.md) — the 2016 terminal was built for the field's reported hub-connection role; confirm current gate assignment.

---

## 9. Arrival frequency sequence

- **Sequence:** Tower (120.7) is the only confirmed arrival-relevant frequency; the reported A/G advisory frequency (123.6) may apply outside Tower hours — confirm current AIRAC before use.
- **Approach/Departure control:** 🟧 Not confirmed — no dedicated approach frequency sourced for this field.

---

## 10. Gotchas

- **Single runway** — no crosswind alternative.
- **Reported hub-connection traffic** can produce a denser arrival/departure sequencing environment at connecting-bank times than the field's standalone size would suggest.
- **Harmattan dust haze (Nov–Mar)** — confirm current visibility trend before a marginal-weather arrival.
- **FIR assignment for this field is not independently reconciled** against a primary AIP source (Briefing §18) — confirm before relying on it operationally.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STARs, approach names/minima, transition level — none confirmed from a primary source this pass.
- Rapid-exit taxiway / vacate points.
- LVP trigger conditions.
- Approach frequency confirmation.
- FIR assignment reconciliation (Accra vs Niamey/ASECNA bloc — Briefing §18).
- Connecting-bank timing and its effect on arrival sequencing.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DXXX/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Lomé–Tokoin International Airport" — https://en.wikipedia.org/wiki/Lom%C3%A9%E2%80%93Tokoin_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
