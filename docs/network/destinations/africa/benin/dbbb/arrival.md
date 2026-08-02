# DBBB — Bernardin Gantin · Arrival Page

**DBBB / COO** · Cotonou, Atlantique Department, Benin · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — ASECNA (AIP Benin)/public-source build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [DBBB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 🟧 Wind-dependent — single runway 06/24 |
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
- **Energy traps:** No terrain-driven energy trap identified (flat coastal field); confirm current RWY 06 displaced-threshold LDA before planning a landing-distance-critical arrival (Briefing §7).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06 | 🟧 Not confirmed this pass | 🟧 | **Displaced threshold reduces LDA — see Briefing §7** |
| 24 | 🟧 Not confirmed this pass | 🟧 | Verify current AIRAC |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None — flat, low-lying Bight-of-Benin coastal plain, no close-in high terrain (cross-ref [Briefing §3.1](index.md)).
- **Specific threats:** 🟧 **RWY 06's displaced threshold (38 m / 125 ft)** reduces usable LDA — brief the correct picture before accepting a RWY 06 approach. No runway-excursion accident history sourced for this field.
- **Airspace / traffic:** 🟧 Control type not independently confirmed — cross-ref [Briefing §3.2](index.md) and the [Africa airspace brief](../../../../airspace/africa.md). Name the controlling FIR — **Niamey (DRRR)** per the network assignment for this field (§18 notes an unreconciled alternative reference to Accra FIR).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat coastal field.
- **Re-sequencing environment:** 🟧 Not confirmed — single-runway field.
- **Go-around traps:** None terrain-related identified.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 24 — full length ~2,410 m (no displacement reported). RWY 06 — **reduced, threshold displaced 38 m (125 ft)**; usable LDA is a derived estimate (~2,372 m), not a sourced AIP figure — verify (Briefing §7/§18).
- **Braking / vacate:** 🟧 Not confirmed — rapid-exit taxiway locations not sourced.
- **Runway-excursion watch:** 🟧 No excursion history sourced for this field; treat wet-season braking action as a standard precaution.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** 🟧 Not confirmed — confirm current Ground/Apron routing on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none"; cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** Cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (125.9) → Tower (118.7/125.9) — per [Briefing §8](index.md); confirm current AIRAC before use (the reported Tower/Approach frequency overlap is not independently reconciled).
- **Approach/Departure control:** Cotonou Approach (125.9) — sector detail not confirmed. 🟧

---

## 10. Gotchas

- **RWY 06's displaced threshold** — don't assume full-length LDA; confirm the current published figure before accepting that runway.
- **Single runway** — no crosswind alternative.
- **Harmattan dust haze (Nov–Mar)** — confirm current visibility trend before a marginal-weather arrival.
- **Reported Tower/Approach frequency overlap (125.9 MHz for both)** — confirm the actual current split before relying on either.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STARs, approach names/minima, transition level — none confirmed from a primary source this pass.
- Exact published RWY 06 LDA (only the displacement distance is sourced).
- Rapid-exit taxiway / vacate points.
- LVP trigger conditions.
- Approach/Tower frequency reconciliation.
- FIR assignment reconciliation (Niamey vs Accra reference — Briefing §18).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DBBB/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Cadjehoun Airport" — https://en.wikipedia.org/wiki/Cadjehoun_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
