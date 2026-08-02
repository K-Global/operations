# EHEH — Eindhoven · Departure Page

**EHEH / EIN** · Eindhoven, Noord-Brabant, Netherlands · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (LVNL eAIP not directly reachable this pass)

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EHEH Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **03 or 21** — wind-selected; single-runway field, no configuration choice |
| Config logic | Wind-driven direction selection only |
| Transition altitude | Not confirmed this pass 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed as coordinated; joint civil/military field |
| De-icing on departure | Not confirmed — assumed given active winter operations 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Single-runway field, civil terminal on the eastern side; VAMSYS mirror gives a planning taxi-out time of **8 min** `[VAMSYS mirror 2026-07-26]` — confirm the exact routing with Ground on the day, noting the adjacent military air base to the west.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass; a new east-side taxiway is planned as part of the 2027 runway-renovation project. 🟧
- **Runway crossings / read-back-required points:** Not confirmed in reachable sources. 🟧
- **Low-vis taxi caveats:** Not confirmed in reachable sources this pass. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (03/21) — the active departure direction is wind-selected; no configuration alternative exists.
- **By departure direction:** Not confirmed in reachable sources this pass. 🟧
- **Noise / preferential-runway program:** The field's clearest documented noise-mitigation measure is the **1,500 ft AMSL visual-approach intercept requirement** (arrival-side, see Arrival page); no departure-specific noise-routing procedure confirmed this pass. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway and direction at any given time; expect coordination with the adjacent military air base's own traffic (RNLAF A330 MRTT/C-130H movements).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 03 / 21 | Verify RNP/gradient requirement per SID on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant close-in terrain or obstacle identified in reachable sources; flat Noord-Brabant countryside.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass — the field's scheduled 2027 approach-lighting expansion (explicitly to enable fog operations) implies low-visibility infrastructure is a live consideration, but exact LVTO minima not obtained. 🟧
- **De-icing:** Not confirmed in reachable sources — one secondary source reports de-icing available daily 07:00–20:00 LT (not independently confirmed). 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not independently confirmed as a distinct position this pass — expect Ground (121.930) to handle initial clearance/start-up. 🟧
- **Frequency sequence:** **Ground 121.930 → Tower 131.005 → RAPCON South Approach 123.180** (military-operated). Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed as coordinated in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The single 3,000 m runway is non-limiting for narrowbody types at typical operating weights; confirm weight/performance margin before relying on this field for a K Global widebody departure.
- **Density altitude / temperature:** Non-issue at 74 ft, temperate NW-European climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Not confirmed this pass — seasonal winter contamination is a plausible consideration pending confirmation. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm margin for any widebody type; the field's traffic is otherwise dominated by narrowbody low-cost carriers.

---

## 10. Gotchas

- **Single runway, no configuration fallback** — a runway closure is a full-field closure.
- **CRITICAL — the field is scheduled for a FULL CLOSURE 1 February – 19 July 2027** for runway renovation — do not plan any departure through this field in that window without reconfirming its status.
- **Joint civil/military field with military-operated RAPCON South approach control** — do not assume a purely civil ATC-provision model; expect coordination with RNLAF Air Mobility Command traffic.
- **De facto absence of scheduled night flights** — do not plan a late-night departure without independent confirmation of current operating hours.
- **Displaced thresholds reported both ends (~250 m)** — confirm current-AIRAC declared distances before any low-margin performance calculation.

---

## Open items (🟧 — confirm against LVNL eAIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics and take-off minima per runway.
- Transition altitude.
- Start-up/push-back procedure detail, including joint civil/military coordination.
- LVTO minima and de-icing pad/procedure detail.
- EOSID/engine-out procedure detail.
- CTOT/slot regime confirmation.
- Confirm exact 2027 closure dates before any routing near that window.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, military-activity notices), CTOT/ATFM, de-icing status, current field-availability status ahead of the 2027 closure. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **LVNL eAIP (AIP Netherlands)** — https://eaip.lvnl.nl/ — attempted direct fetch 2026-07-26; AD 2.EHEH did not resolve. Primary verification **PENDING**.
- OurAirports — https://ourairports.com/airports/EHEH/frequencies.html (retrieved 2026-07-26). *Frequency table.*
- Eindhoven Airport — "Renovation of Eindhoven Air Base runway to start in February 2027" — https://www.eindhovenairport.nl/en/news-and-media/renovation-of-eindhoven-air-base-runway-to-start-in-february-2027 (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Netherlands (LVNL); K Global fields from live VAMSYS; 4-page pack. |
