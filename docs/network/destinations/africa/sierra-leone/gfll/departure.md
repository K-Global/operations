# GFLL — Freetown Intl · Departure Page

**GFLL / FNA** · Lungi, Sierra Leone (serves Freetown, across the estuary) · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GFLL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 12 or 30 — single runway, wind-selected 🟧 |
| Config logic | Wind-driven only; no parallel-runway or noise-preferential logic identified |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified — assumed unrestricted |
| De-icing on departure | **NIL** |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — confirm with Ground/Tower on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources — not confirmed absent. 🟧
- **Runway crossings / read-back-required points:** Not confirmed.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (12/30) — direction selected by wind only.
- **By departure direction:** Not confirmed — no published routing preference found.
- **Noise / preferential-runway program:** None identified.
- **Interaction with arrivals:** Single runway — departures and arrivals share the one strip; sequencing discipline is the operative consideration.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed 🟧 | 12/30 | Not confirmed 🟧 | Pull current-AIRAC SID list at planning |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb assumed; 250 KIAS below FL100 per ICAO norm — confirm no local override on current chart.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not confirmed. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed; terrain is flat coastal peninsula on the airport side so no terrain-driven EO procedure is expected, but confirm on current chart. 🟧
- **Close-in / distant obstacles:** None identified on the airport side (see [Briefing](index.md) §3.1); the Freetown-peninsula highlands lie across the estuary to the south and are not close-in to GFLL's own departure paths.
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** **NIL** — coastal-tropical field, no de-icing requirement.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately confirmed — cross-ref [Briefing](index.md) §8; likely combined with Tower (118.1) or Ground (121.9) at a field of this configuration.
- **Frequency sequence:** Ground (121.9) → Tower (118.1) → Approach (119.1, likely doubling as departure control) `[OurAirports, tier-4]` — confirm current AIRAC.
- **CTOT / slot handling:** None identified — assumed unrestricted.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟧 3,200 m is the shortest runway of the three West-African fields built this pass — non-limiting for narrow-body and mid-size widebody types at typical weights; confirm current-weight performance for the largest K Global types (A388/B748/B77W) before dispatching at high structural weight. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Density altitude / temperature:** Near sea-level (84 ft) — not a factor; high ambient temperature/humidity may affect engine performance margins on the warmest days.
- **Contamination / wet-runway:** Monsoon-season (Jun–Oct) heavy rain is the relevant seasonal consideration — see [Briefing](index.md) §3.4/§14 and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Link to OM B:** Confirm max-weight field-length performance for the largest widebody types before dispatch (see above).

---

## 10. Gotchas

- **Single-runway field** — any ground delay or runway obstruction has no parallel-runway workaround; build in schedule margin.
- **Shortest runway of the three West-African fields (3,200 m)** — do not assume unlimited-weight performance for the largest widebody types without checking current-AIRAC field-length data.
- **No on-field ILS confirmed** — an on-field VOR-DME and dual NDB exist (see [Briefing](index.md) §9), but precision-approach infrastructure is not confirmed; verify current chart.
- Crew report-time planning should account for the **cross-estuary transfer constraint** described in [Dispatch](dispatch.md) §2 if any crew positioning originates from Freetown city.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, RNP/gradient requirements, take-off minima, transition altitude.
- Noise-abatement departure procedure (NADP) — none confirmed.
- Taxi hot spots / tight taxiways — none identified, not confirmed absent.
- Clearance-delivery frequency (may be combined with Tower/Ground) — confirm current AIRAC.
- Field-length/weight performance for largest widebody types at this runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status (N/A). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/GFLL/runways.html , /frequencies.html (retrieved 2026-07-26). *Runway and frequency data — tier-4.*
- Wikipedia — "Freetown International Airport" — https://en.wikipedia.org/wiki/Freetown_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
