# DGSI — Kumasi · Arrival Page

**DGSI / KMS** · Kumasi, Ashanti Region, Ghana · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Ghana GCAA AIP/public-source build; **new field — route endpoint not previously in this tree**

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [DGSI Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 🟧 Wind-dependent — single runway 02/20 |
| Usual approach | 🟧 Not confirmed — an ILS is reported present; ident/runway/serviceability not confirmed |
| Config logic | Wind-driven only (single runway) |
| Transition level | 🟧 Not published / verify |
| LVP trigger | 🟧 Not published / verify |
| Missed-approach driver | 🟧 Not independently confirmed — terrain not cleared for this field (Briefing §3.1) |

---

## 2. STAR / transition selection

- **STARs (names only):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** 🟧 Not confirmed — single-runway field, arrival direction is wind-determined.
- **Transition to approach:** 🟧 Not confirmed — verify current chart.
- **Speed / flow constraints on the STAR:** 🟧 Not confirmed.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** 🟧 Not confirmed — apply standard planning rule-of-thumb pending a field-specific procedure.
- **Speed control:** Standard 250 KIAS below FL100 per ICAO norm.
- **Altitude constraints:** 🟧 Not confirmed — verify chart.
- **Energy traps:** 🟧 None specifically identified, but terrain has **not been independently cleared** for this field (Briefing §3.1) — maintain a conservative descent profile pending MSA confirmation.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 02 | 🟧 Not confirmed this pass — an ILS is reported installed | 🟧 | Verify current AIRAC and serviceability |
| 20 | 🟧 Not confirmed this pass | 🟧 | Verify current AIRAC |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 **Not independently cleared** — no specific close-in high terrain identified in reachable sources for this field, but this has not been confirmed against a current MSA chart; treat with caution pending verification (cross-ref [Briefing §3.1](index.md)). 🟥
- **Specific threats:** 🟧 None specifically identified; the field's runway-extension programme's completion status is unconfirmed (Briefing §7) — verify current declared distances before planning a landing-distance-critical arrival.
- **Airspace / traffic:** 🟧 Regional domestic-oriented field; control type not confirmed — cross-ref [Briefing §3.2](index.md) and the [Africa airspace brief](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** 🟧 Not independently confirmed — treat conservatively pending MSA chart verification.
- **Re-sequencing environment:** 🟧 Not confirmed — single-runway field, traffic density not sourced.
- **Go-around traps:** 🟧 None specifically identified.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 🟧 Not published — no displacement reported; confirm current declared distance reflecting the runway-extension programme (Briefing §7).
- **Braking / vacate:** 🟧 Not confirmed — rapid-exit taxiway locations not sourced.
- **Runway-excursion watch:** 🟧 No excursion history sourced for this field specifically; treat wet-season braking action as a standard precaution given no contrary data.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** 🟧 Not confirmed — confirm current local Ground/ATS routing on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none"; cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** 🟧 Terminal/stand assignment not confirmed — cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Tower (118.1) is the only confirmed frequency (Briefing §8); Approach/Ground not sourced — confirm current AIRAC before use.
- **Approach/Departure control:** 🟧 Not confirmed — no dedicated approach frequency sourced for this field.

---

## 10. Gotchas

- **This is a newly-added field with materially thinner data than other network destinations** — treat every unflagged item with caution pending the open items in Briefing §18.
- **Runway length (2,320 m) is a governing constraint** — verify the planned type's landing-distance performance margin before scheduling.
- **Terrain has not been independently cleared** for this field — verify the current MSA chart before an arrival.
- **A/G frequency 658.6 MHz reported in the source data is very likely erroneous** (outside the standard VHF aviation band) — do not rely on it.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STARs, approach names/minima, transition level — none confirmed from a primary source this pass.
- Current declared LDA reflecting the runway-extension programme.
- Terrain/MSA clearance confirmation.
- Approach/Ground frequency confirmation.
- Rapid-exit taxiway / vacate points.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting — including current runway-works status), ATIS config (if any), ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DGSI/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Prempeh I International Airport" — https://en.wikipedia.org/wiki/Prempeh_I_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | New build — field not previously in this tree. Built from public sources; K Global fields from live VAMSYS; 4-page pack. |
