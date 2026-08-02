# DBBB — Bernardin Gantin · Departure Page

**DBBB / COO** · Cotonou, Atlantique Department, Benin · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — ASECNA (AIP Benin)/public-source build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [DBBB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 🟧 Wind-dependent — single runway 06/24, no preferential choice |
| Config logic | Wind-driven only (single runway, no crosswind option) |
| Transition altitude | 🟧 Not published / verify |
| Take-off minima | 🟧 Not published / verify — verify current chart |
| CTOT / flow regime | 🟧 None identified — assumed non-coordinated |
| De-icing on departure | **NIL** — tropical coastal field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** 🟧 Not confirmed — confirm current Ground/Apron routing on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none."
- **Runway crossings / read-back-required points:** 🟧 Not confirmed.
- **Low-vis taxi caveats:** 🟧 Not confirmed — relevant primarily in the harmattan dust-haze season (Briefing §14).

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (06/24) — the active direction is wind-determined only.
- **By departure direction:** 🟧 Not confirmed — RWY 06 departs toward the NE inland, RWY 24 toward the SW coastline; verify current SID assignment per runway.
- **Noise / preferential-runway program:** 🟧 None identified in reachable sources.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| 🟧 Not confirmed this pass | 06 / 24 | 🟧 Not confirmed | Pull the current-AIRAC SID list at planning — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the ASECNA/WACAF RNAV 5 enroute framework |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb/speed schedule expected; 250 KIAS below FL100 per ICAO norm — confirm no local override on current chart.
- **Noise-abatement departure procedure (NADP):** 🟧 Not published / verify.
- **Early turn / altitude constraints:** 🟧 Not confirmed — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟧 Not confirmed — a flat coastal field with no close-in high terrain; a dedicated obstacle-driven EO procedure is not expected but not independently ruled out. 🟥
- **Close-in / distant obstacles:** None identified in reachable sources — cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** 🟧 Not confirmed — verify on chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** 🟧 Not published / verify current chart — harmattan dust-haze season (Nov–Mar) is the plausible reduced-visibility scenario.
- **De-icing:** **NIL** — tropical coastal field, no de-icing requirement. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** 🟧 Not confirmed — cross-ref [Briefing §8](index.md) (Delivery/Ground frequency not sourced).
- **Frequency sequence:** Tower (118.7/125.9) → Approach (125.9) — per [Briefing §8](index.md); the frequency overlap between Tower and Approach in the source data is not independently reconciled — confirm current AIRAC before use.
- **CTOT / slot handling:** 🟧 None identified — assumed non-coordinated.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 24 full length (~2,410 m) is adequate for narrowbody types; **confirm widebody field-length performance** before scheduling a larger type. RWY 06's displaced threshold does not affect takeoff distances (confirm current AIP for TORA/TODA/ASDA — Briefing §7/§18). See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Density altitude / temperature:** Sea-level tropical field — density altitude is not a performance driver here.
- **Contamination / wet-runway:** No excursion history sourced for this field; treat wet-season braking action as a standard precaution.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm type-specific field-length performance.

---

## 10. Gotchas

- **Single runway, no crosswind alternative.**
- **RWY 06's displaced landing threshold does not shorten the takeoff runway** — do not confuse the landing LDA reduction with a takeoff-distance constraint (Briefing §7).
- **Confirm widebody field-length performance** before scheduling any larger type — the 2,410 m runway is not guaranteed adequate without a type-specific check.
- **Harmattan dust haze (Nov–Mar)** can reduce visibility for a low-vis departure with limited warning.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID list, transition altitude, take-off minima — none confirmed from a primary source this pass.
- Clearance delivery / Ground / ATIS frequency.
- Tower/Approach frequency overlap (both reported as 125.9) — reconcile against current AIRAC.
- LVTO minima / procedure.
- TORA/TODA/ASDA figures for both runway directions.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM (if any), de-icing status (not applicable). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DBBB/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Cadjehoun Airport" — https://en.wikipedia.org/wiki/Cadjehoun_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
