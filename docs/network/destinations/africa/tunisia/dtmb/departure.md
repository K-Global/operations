# DTMB — Monastir · Departure Page

**DTMB / MIR** · Monastir, Monastir Governorate, Tunisia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, tier-4 sourced

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [DTMB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Single runway 07/25 — wind-based end selection only |
| Config logic | Wind-driven (single runway) |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not published / verify — not expected to be significant at this field size 🟧 |
| De-icing on departure | Not applicable — no winter-freeze climatology |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — single-runway field, expect limited taxiway complexity; confirm with Tower/Ground on the day. 🟧
- **Hot spots / tight taxiways:** None identified at tier-4.
- **Runway crossings / read-back-required points:** Not applicable at a single-runway field beyond standard runway-entry clearance.
- **Low-vis taxi caveats:** Not published / verify. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (07/25) — wind determines the active end only.
- **By departure direction:** Not published / verify.
- **Noise / preferential-runway program:** Not published / verify.
- **Interaction with arrivals:** Not applicable — single runway shared for both.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify | — | 🟧 | No SID names obtained in this research pass — pull the current-AIRAC procedure list at planning. |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard ICAO 250 KIAS below FL100 assumed — confirm no local override on current chart.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not published / verify — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** No terrain of note — low-lying flat coastal field (see [Briefing §3.1](index.md)).
- **Special DP / obstacle DP:** Not published / verify — none expected given the flat terrain.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** Not applicable — no winter-freeze climatology at this Tunisian coastal field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — no dedicated Delivery/Ground frequency found; cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Tower (118.300) → Approach (119.300), per the tier-4 frequency list in [Briefing §8](index.md) — not independently AIP-confirmed. No Ground frequency was found; expect Tower to combine ground duties at a field this size.
- **CTOT / slot handling:** Not published / verify — not expected to be significant at this field size.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 2,950 m — the **shortest runway in this five-field batch**; confirm field-length adequacy against whatever type is assigned once the VAMSYS category is set (see [Briefing §4](index.md)). 🟧
- **Density altitude / temperature:** Sea-level field (9 ft, the lowest in this batch) — not hot-and-high; note pronounced summer heat at this Tunisian Sahel latitude as a general performance-margin consideration in peak season.
- **Contamination / wet-runway:** No field-specific data sourced. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Link to OM B:** No type has yet been confirmed for this field — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and cross-ref [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) given the shorter field length.

---

## 10. Gotchas

- **VAMSYS category not yet set for this field** — do not assume fleet suitability; confirm before scheduling.
- **Shortest single runway in this batch (2,950 m)** — confirm field-length adequacy for the assigned type before use.
- Sirocco-type dust events can reduce visibility with gusty wind, most relevant during peak (warm-season) traffic — check current TAF/SIGMET.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, RNP/gradient requirements, take-off minima.
- Ground frequency (not found at tier-4).
- Taxi routing and any low-vis taxi procedure.
- CTOT/slot handling during peak charter season.
- Field-length adequacy once the VAMSYS category/fleet assignment is set.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DTMB/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Runway geometry and tier-4 frequency baseline.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. New folder — field was previously missing from the destination tree as a route endpoint. |
