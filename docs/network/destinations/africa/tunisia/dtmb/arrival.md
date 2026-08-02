# DTMB — Monastir · Arrival Page

**DTMB / MIR** · Monastir, Monastir Governorate, Tunisia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, tier-4 sourced

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [DTMB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Single runway 07/25 — wind-based end selection only |
| Usual approach | Not published / verify — on-field VOR-DME (MON) suggests at least a conventional non-precision approach exists 🟧 |
| Config logic | Wind-driven (single runway) |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | Not terrain-driven — flat coastal field; the unset VAMSYS category and shorter runway are the more relevant planning factors |

---

## 2. STAR / transition selection

- **STARs (names only):** Not published / verify — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not published / verify.
- **Transition to approach:** Not published / verify.
- **Speed / flow constraints on the STAR:** Standard ICAO 250 KIAS below FL100 assumed — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify — plan per standard company profile pending field-specific data.
- **Speed control:** Standard ICAO/company speed schedule assumed.
- **Altitude constraints:** Not published / verify — verify chart.
- **Energy traps:** None identified — flat coastal terrain (see [Briefing §3.1](index.md)).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07/25 | Not published / verify 🟧 | On-field VOR-DME (MON, 113.10) suggests at least a conventional non-precision approach | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** None — flat, low-lying coastal field at 9 ft AMSL, the lowest in this batch; non-issue for terrain. See [Briefing §3.1](index.md). 🟩
- **Specific threats:** **Shortest runway in this batch (2,950 m)** — confirm LDA adequacy for the assigned type before landing; **VAMSYS category not yet set** for this field (§Briefing §4).
- **Airspace / traffic:** Tunis (DTTC) FIR — see [Briefing §3.2](index.md) and the [Africa airspace brief](../../../../airspace/africa.md); control type at the field not independently confirmed.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — flat terrain.
- **Re-sequencing environment:** Not expected to be significant outside the peak charter season; confirm current traffic picture.
- **Go-around traps:** None field-specific identified beyond the shorter-runway/unset-category caveats above.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 2,950 m physical, no displaced threshold noted at tier-4 — the shortest in this batch; exact declared LDA not confirmed. See [Briefing §7](index.md). 🟧
- **Braking / vacate:** Not published / verify.
- **Runway-excursion watch:** No contamination/tailwind data confirmed this pass; the shorter field length makes this the batch's tightest LDA margin pending confirmation of the assigned type. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify — single-runway field, expect limited taxiway complexity; confirm with Tower/Ground on the day.
- **Hot spots / tight taxiways:** None identified at tier-4. See [Briefing §13](index.md).
- **Stand/gate notes:** Not published / verify — cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (119.300) → Tower (118.300), per the tier-4 frequency list in [Briefing §8](index.md) — not independently AIP-confirmed. No dedicated Ground frequency was found; expect Tower to combine ground duties.
- **Approach/Departure control:** Bourguiba Approach, per tier-4 source; sector-specific detail not confirmed. 🟧

---

## 10. Gotchas

- **VAMSYS category not yet set for this field** — do not assume fleet suitability; confirm before scheduling.
- **Shortest single runway in this batch (2,950 m)** — confirm LDA adequacy for the assigned type before landing.
- Sirocco-type dust events can reduce visibility with gusty wind, most relevant during peak (warm-season) traffic — check current TAF/SIGMET before the approach.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names, approach names/minima, transition level.
- Exact declared LDA (shortest runway in this batch).
- Taxi-in routing (limited detail expected given field size).
- Seasonal traffic-density picture during peak charter season.
- Field-length/type adequacy once the VAMSYS category is set.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DTMB/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *Runway geometry, tier-4 frequency and navaid baseline.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. New folder — field was previously missing from the destination tree as a route endpoint. |
