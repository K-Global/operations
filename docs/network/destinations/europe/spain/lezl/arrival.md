# LEZL — Sevilla-San Pablo · Arrival Page

**LEZL / SVQ** · Seville, Andalusia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LEZL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **09 or 27** — single runway, wind-driven choice only |
| Usual approach | Not confirmed 🟧 |
| Config logic | Wind-driven; no published preferential-runway rule found |
| Transition level | Not confirmed 🟧 |
| LVP trigger | Not confirmed 🟧 |
| Missed-approach driver | Traffic/sequencing on a single-runway field, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Single runway 09/27 — wind determines the landing direction; no published selection logic found.
- **Transition to approach:** Not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific constraint identified.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) assumed — confirm current chart.
- **Altitude constraints:** Not confirmed. 🟧
- **Energy traps:** None specific identified beyond standard single-runway sequencing; no terrain-driven energy trap at this flat-valley field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09 | Not confirmed 🟧 | Not confirmed | Pull current-AIRAC approach list |
| 27 | Not confirmed 🟧 | Not confirmed | Pull current-AIRAC approach list |

- **LVP triggers:** Not confirmed. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Guadalquivir valley floor at 112 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 Single-runway operation with no crosswind alternate; mixed traffic pattern from on-field Airbus test/production and Ryanair maintenance activity (see Briefing §3.2).
- **Airspace / traffic:** 🟧 Moderate density under Sevilla Aproximación, within the wider Madrid (LECM) ACC sector — no dedicated LEZL-area FIR brief exists; see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat valley) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around on a single-runway field returns you directly into the same runway's arrival/departure queue — no parallel-runway diversity to ease re-sequencing.
- **Go-around traps:** Not confirmed beyond the standard single-runway re-sequencing consideration.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** ~3,362 m pending confirmed declared distances 🟧 — ample for any K Global type at typical arrival weights regardless of the exact figure.
- **Braking / vacate:** Not confirmed. 🟧
- **Runway-excursion watch:** 🟧 **No crosswind-runway alternate** is the standing caution at this single-runway field — a strong crosswind day has no runway-choice mitigation.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed in detail — single runway to the single terminal, routing should be straightforward; confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — 16 of 23 stands are remote; expect a meaningful chance of a bussed arrival.

---

## 9. Arrival frequency sequence

- **Sequence:** **Sevilla Aproximación 125.8 → Tower (not confirmed) → Sevilla Ground 121.7.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Sevilla Aproximación** — part of the wider **Madrid (LECM)** ACC/UIR sector (ENAIRE). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **No crosswind-runway alternate** — a strong crosswind day must be flown as published.
- **Summer heat performance planning** applies on departure but is worth keeping in mind for a same-day turnaround.
- **Mixed traffic pattern** from on-field Airbus test/production flights and Ryanair maintenance activity.
- **Stand assignment may be remote** — 16 of 23 stands are remote; plan for a possible bus transfer.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and approach minima per runway.
- Transition level and LVP trigger conditions.
- Rapid-exit taxiway/vacate detail.
- Displaced-threshold status on RWY 09/27 (not found either way in reachable sources).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE)** — https://aip.enaire.es/AIP/ attempted 2026-07-26; JavaScript-frameset, not directly reachable this pass.
- OurAirports — https://ourairports.com/airports/LEZL/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Seville Airport" — https://en.wikipedia.org/wiki/Seville_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
