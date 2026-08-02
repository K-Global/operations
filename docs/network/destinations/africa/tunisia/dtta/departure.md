# DTTA — Carthage · Departure Page

**DTTA / TUN** · Tunis, Tunis Governorate, Tunisia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, tier-4 sourced

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [DTTA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — 01/19 (3,200 m) is presumed primary over 11/29 (2,840 m, RWY 29 displaced threshold) 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not published / verify 🟧 |
| De-icing on departure | Not expected at this near-sea-level Mediterranean field; not independently confirmed as NIL |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — confirm with Ground on the day. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Runway crossings / read-back-required points:** Not published / verify.
- **Low-vis taxi caveats:** Not published / verify. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — 01/19 is the longer runway and presumed primary; confirm actual selection logic locally. 🟧
- **By departure direction:** Not published / verify.
- **Noise / preferential-runway program:** Not published / verify.
- **Interaction with arrivals:** Not published / verify.

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
- **Close-in / distant obstacles:** No close-in high terrain confirmed at this low-lying coastal field (see [Briefing §3.1](index.md)).
- **Special DP / obstacle DP:** Not published / verify.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** Not expected at this near-sea-level Mediterranean coastal field; not independently confirmed as NIL. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — no dedicated Delivery frequency found; cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Ground (121.900) → Tower (118.100) → Approach (121.200), per the tier-4 frequency list in [Briefing §8](index.md) — not independently AIP-confirmed.
- **CTOT / slot handling:** Not published / verify.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting on 01/19 (3,200 m); confirm margins if 11/29 is ever used for departure given its shorter length.
- **Density altitude / temperature:** Sea-level field (22 ft) — not hot-and-high; non-issue.
- **Contamination / wet-runway:** Winter Mediterranean frontal rain is a general regional consideration; no field-specific contamination data sourced. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Link to OM B:** No type-specific consideration identified at this field length/elevation on the primary runway — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 10. Gotchas

- **RWY 29 threshold is displaced ~200 m** — if operating off 11/29, confirm the exact TORA/TODA figures before use; this does not directly affect a departure TORA the same way it affects landing LDA, but verify against the AIP rather than assuming.
- Sirocco-type dust events can reduce visibility with gusty wind — check current TAF/SIGMET.
- Multiple SID/minima/frequency fields are unverified this pass (§Open items) — treat quantitative departure planning figures as provisional pending an AIP cross-check.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, RNP/gradient requirements, take-off minima.
- Runway/config selection logic (01/19 vs 11/29).
- Taxi routing, hot spots, and any low-vis taxi procedure.
- Clearance delivery frequency and CTOT/slot handling.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DTTA/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Runway geometry and tier-4 frequency baseline.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
