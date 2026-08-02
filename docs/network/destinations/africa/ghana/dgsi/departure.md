# DGSI — Kumasi · Departure Page

**DGSI / KMS** · Kumasi, Ashanti Region, Ghana · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Ghana GCAA AIP/public-source build; **new field — route endpoint not previously in this tree**

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [DGSI Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 🟧 Wind-dependent — single runway 02/20 |
| Config logic | Wind-driven only (single runway, no crosswind option) |
| Transition altitude | 🟧 Not published / verify |
| Take-off minima | 🟧 Not published / verify — verify current chart |
| CTOT / flow regime | 🟧 None identified — assumed non-coordinated |
| De-icing on departure | **NIL** — tropical field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** 🟧 Not confirmed — confirm current local Ground/ATS routing on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none."
- **Runway crossings / read-back-required points:** 🟧 Not confirmed.
- **Low-vis taxi caveats:** 🟧 Not confirmed — relevant primarily in the regional harmattan season.

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (02/20) — the active direction is wind-determined only.
- **By departure direction:** 🟧 Not confirmed.
- **Noise / preferential-runway program:** 🟧 None identified in reachable sources.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| 🟧 Not confirmed this pass | 02 / 20 | 🟧 Not confirmed | Pull the current-AIRAC SID list at planning — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb/speed schedule expected; 250 KIAS below FL100 per ICAO norm — confirm no local override.
- **Noise-abatement departure procedure (NADP):** 🟧 Not published / verify.
- **Early turn / altitude constraints:** 🟧 Not confirmed — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟧 Not confirmed. 🟥
- **Close-in / distant obstacles:** 🟧 Not independently confirmed — Ashanti-region terrain is not sourced for this field specifically; cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** 🟧 Not confirmed — verify on chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** 🟧 Not published / verify current chart.
- **De-icing:** **NIL** — tropical field. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** 🟧 Not confirmed.
- **Frequency sequence:** Tower (118.1) is the only confirmed frequency (Briefing §8); Ground/Delivery not sourced — confirm current AIRAC before use.
- **CTOT / slot handling:** 🟧 None identified — assumed non-coordinated.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟥 **2,320 m runway at 942 ft elevation is the governing constraint at this field** — confirm field-length performance margin for the planned type before scheduling; do not assume the largest K Global widebody types are suitable without a type-specific check. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Density altitude / temperature:** 942 ft AMSL with tropical warm-day temperatures — a modest but non-trivial density-altitude factor compared to the coastal gateway; include in performance planning.
- **Contamination / wet-runway:** 🟧 Not confirmed — no excursion history sourced for this field; treat wet-season braking action as a standard precaution.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm type-specific field-length performance before planning.

---

## 10. Gotchas

- **Runway length (2,320 m) is limiting** — verify the planned type's takeoff/landing performance margin before scheduling; this is not a field for an unconstrained widebody assumption.
- **Runway-extension completion status is not independently confirmed against current AIRAC** — verify current declared distances.
- **Single runway, no crosswind alternative.**
- **This is a newly-added field with materially thinner data than other network destinations** — hold extra dispatch scrutiny pending the open items in Briefing §18.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID list, transition altitude, take-off minima — none confirmed from a primary source this pass.
- Clearance delivery / Ground / ATIS frequencies.
- Current declared distances (TORA/TODA/ASDA) reflecting the runway extension.
- Obstacle/terrain data for the departure path.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting — including current runway-works status), CTOT/ATFM (if any), de-icing status (not applicable). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DGSI/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Prempeh I International Airport" — https://en.wikipedia.org/wiki/Prempeh_I_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | New build — field not previously in this tree. Built from public sources; K Global fields from live VAMSYS; 4-page pack. |
