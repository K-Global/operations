# DNBE — Benin · Departure Page

**DNBE / BNI** · Benin City, Edo State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [DNBE Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — both 05 and 23 usable; single-runway field 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | NIL |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** 🟥 **Field is embedded within the built-up Benin City urban area** — treat close-in ground obstacles/urban clearance as a standing caution even though no specific taxiway hot-spot list was obtained.
- **Runway crossings / read-back-required points:** Single runway (05/23) — no parallel/crossing runway configuration.
- **Low-vis taxi caveats:** Not published / verify. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — single-runway field, both-direction use per prevailing wind. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** Not published / verify — urban surroundings make noise sensitivity plausible. 🟧
- **Interaction with arrivals:** Single-runway operation — arrivals and departures share the same runway; sequencing per Tower.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify | 05/23 | Not confirmed 🟧 | No current-AIRAC SID names obtained this pass |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb/speed schedule expected — not independently confirmed for this field.
- **Noise-abatement departure procedure (NADP):** Not published / verify — plausible given urban proximity. 🟧
- **Early turn / altitude constraints:** Not published / verify. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** 🟥 The runway lies within Benin City's built-up area — treat close-in buildings/towers as a plausible obstacle environment pending an actual obstacle chart; no specific survey obtained this pass. Cross-ref [DNBE Briefing](index.md) §3.5.
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** NIL — near-equatorial field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — cross-ref [DNBE Briefing](index.md) §8. 🟧
- **Frequency sequence:** Delivery → Ground → **Benin Tower (122.50)** → departure/Kano ACC — see Briefing §8 for the sourced frequency; delivery/ground not confirmed.
- **CTOT / slot handling:** None identified.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 2,400 m is the shortest runway of the four fields in this build — confirm weight-limited take-off performance for the planned type rather than assuming margin. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). 🟧
- **Density altitude / temperature:** Sea-level-class field (259 ft); not hot-and-high.
- **Contamination / wet-runway:** ITCZ rainy season (Apr–Oct) — expect wet-runway braking-action consideration; no published contamination-reporting procedure confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type field-length margin at 2,400 m.

---

## 10. Gotchas

- 🟥 **Urban-embedded runway** — close-in obstacles are plausible even without a confirmed obstacle chart; brief conservatively.
- Shortest runway of the four fields in this build (2,400 m) — do not assume ample performance margin.
- No confirmed SID/departure-procedure names — pull the current-AIRAC chart.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SIDs, take-off minima, NADP, engine-out procedure, taxi routing, obstacle chart, transition altitude, clearance-delivery/ground frequencies — none confirmed in reachable sources.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — DNBE / Benin Airport — https://skyvector.com/airport/DNBE/Benin-Airport (retrieved 2026-07-26). *Runway/frequency data.*
- Wikipedia — "Benin Airport" — https://en.wikipedia.org/wiki/Benin_Airport (retrieved 2026-07-26). *In-city location.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. |
