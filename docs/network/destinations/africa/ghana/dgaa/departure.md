# DGAA — Kotoka Intl · Departure Page

**DGAA / ACC** · Accra, Greater Accra Region, Ghana · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Ghana GCAA AIP/public-source build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [DGAA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 🟧 Wind-dependent — single runway 03/21, no preferential choice |
| Config logic | Wind-driven only (single runway, no crosswind option) |
| Transition altitude | 🟧 Not published / verify |
| Take-off minima | 🟧 Not published / verify — verify current chart |
| CTOT / flow regime | 🟧 None identified — assumed non-coordinated |
| De-icing on departure | **NIL** — tropical coastal field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** 🟧 Not confirmed — confirm current Ground/Apron routing from the Terminal 3 ramp to the active runway threshold on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none"; a single-runway field with a co-located military installation warrants a heightened ground-traffic scan.
- **Runway crossings / read-back-required points:** 🟧 Not confirmed.
- **Low-vis taxi caveats:** 🟧 Not confirmed — relevant primarily in the harmattan dust-haze season (Briefing §14).

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (03/21) — the active direction is wind-determined only; there is no preferential or noise-based selection.
- **By departure direction:** 🟧 Not confirmed — RWY 03 departs to the NE, RWY 21 to the SW toward the Gulf of Guinea coastline; verify current SID assignment per runway.
- **Noise / preferential-runway program:** 🟧 None identified in reachable sources.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway; sequencing discipline is the only mitigation for a mixed arrival/departure flow.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| 🟧 Not confirmed this pass | 03 / 21 | 🟧 Not confirmed | Pull the current-AIRAC SID list at planning — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the network PBN framework |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb/speed schedule expected; 250 KIAS below FL100 per ICAO norm — confirm no local override on current chart.
- **Noise-abatement departure procedure (NADP):** 🟧 Not published / verify.
- **Early turn / altitude constraints:** 🟧 Not confirmed — verify current chart, particularly given the co-located military installation.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟧 Not confirmed — a flat coastal field with no close-in high terrain; a dedicated obstacle-driven EO procedure is not expected but not independently ruled out. 🟥
- **Close-in / distant obstacles:** None identified in reachable sources — cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** 🟧 Not confirmed — verify on chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** 🟧 Not published / verify current chart — the harmattan dust-haze season (Nov–Mar) is the plausible reduced-visibility scenario at this field.
- **De-icing:** **NIL** — tropical coastal field, no de-icing requirement. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** 🟧 Not confirmed — cross-ref [Briefing §8](index.md) (Delivery frequency not sourced).
- **Frequency sequence:** Ground (121.9) → Tower (119.1) → Approach (119.5) — per [Briefing §8](index.md); confirm current AIRAC before use.
- **CTOT / slot handling:** 🟧 None identified — assumed non-coordinated.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting on RWY 03 (3,403 m full length) for K Global narrowbody/widebody types; **RWY 21's displaced threshold does not affect takeoff distances** (TORA/TODA/ASDA figures are not sourced, however — confirm current AIP, Briefing §7/§18).
- **Density altitude / temperature:** Sea-level tropical field — density altitude is not a performance driver here.
- **Contamination / wet-runway:** The field's historical accident record includes wet-runway runway-excursion events (Briefing §3.3) — while these are landing-phase events, treat wet-runway braking-action awareness as a standing consideration for any rejected-takeoff planning in the wet season.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-specific type penalty identified.

---

## 10. Gotchas

- **Single runway, no crosswind alternative** — a strong crosswind or a runway-blocking event leaves no on-field option.
- **RWY 21's displaced landing threshold does not shorten the takeoff runway** — do not confuse the landing LDA reduction with a takeoff-distance constraint (Briefing §7).
- **Co-located military traffic** (Air Force transport/helicopter squadrons) — expect occasional non-scheduled traffic in the circuit/ramp environment.
- **Harmattan dust haze (Nov–Mar)** can reduce visibility for a low-vis departure with limited warning.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID list, transition altitude, take-off minima — none confirmed from a primary source this pass.
- Clearance delivery / ATIS frequency.
- LVTO minima / procedure.
- Noise-abatement departure procedure, if any.
- TORA/TODA/ASDA figures for both runway directions.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM (if any), de-icing status (not applicable). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DGAA/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Accra International Airport" — https://en.wikipedia.org/wiki/Kotoka_International_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
