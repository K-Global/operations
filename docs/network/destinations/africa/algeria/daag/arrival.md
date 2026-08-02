# DAAG — Houari Boumediene · Arrival Page

**DAAG / ALG** · Algiers, Algiers Province, Algeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, tier-4 sourced

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [DAAG Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — two intersecting, non-parallel runways (09/27, 05/23) 🟧 |
| Usual approach | Not published / verify — CAT III capability asserted at network level (task brief), not independently confirmed 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | Not confirmed as terrain-driven at the field itself; re-sequencing around the intersecting-runway geometry is the more likely operative concern |

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
- **Energy traps:** None field-specific identified this pass; no close-in high terrain confirmed (see [Briefing §3.1](index.md)).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09/27, 05/23 | Not published / verify 🟧 | CAT III capability asserted at network level (task brief); no primary-source ILS ident/category confirmed | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** No close-in high terrain confirmed at the field itself; the Tell Atlas foothills rise inland to the south as a general regional feature — see [Briefing §3.1](index.md). 🟧
- **Specific threats:** The **intersecting, non-parallel runway pair** is the field's standing geometric threat — confirm which runway is active and the crossing-traffic picture before the approach.
- **Airspace / traffic:** Principal Algerian gateway; radar approach assumed, not independently confirmed — see [Briefing §3.2](index.md) and the [Africa airspace brief](../../../../airspace/africa.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not confirmed as terrain-driven at the field itself — verify chart.
- **Re-sequencing environment:** As the principal national gateway, expect vectoring back into a busier traffic picture on a go-around; the intersecting-runway layout adds a crossing-traffic consideration.
- **Go-around traps:** None field-specific identified beyond the runway-geometry point above.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not published / verify — physical runway length is 3,500 m on both 09/27 and 05/23, but declared LDA/displaced-threshold detail is not confirmed. See [Briefing §7](index.md). 🟧
- **Braking / vacate:** Not published / verify.
- **Runway-excursion watch:** No contamination/tailwind data confirmed this pass — treat as provisional. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify — confirm with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 The runway-intersection area is the logical candidate for a ground hot spot at this layout — not independently confirmed, treat as a standing caution. See [Briefing §13](index.md).
- **Stand/gate notes:** Not published / verify — cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (121.400) → Tower (118.700) → Ground (121.800), per the tier-4 frequency list in [Briefing §8](index.md) — not independently AIP-confirmed.
- **Approach/Departure control:** Algiers Approach, per tier-4 source; sector-specific detail not confirmed. 🟧

---

## 10. Gotchas

- **Two intersecting, non-parallel runways** — never assume a simple reciprocal-pair configuration; confirm the active runway and crossing-traffic picture.
- CAT III is asserted at the network/VAMSYS level (task brief) — do not treat as an AIP-confirmed fact without a current-AIRAC cross-check.
- Sirocco (chergui) dust events can reduce visibility with gusty wind — check current TAF/SIGMET before the approach.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names, approach names/minima, transition level.
- Runway/config selection logic for the intersecting-runway pair.
- LDA and any displaced threshold per runway.
- Taxi-in routing and confirmed hot spots.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DAAG/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *Runway geometry, tier-4 frequency and navaid baseline.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
