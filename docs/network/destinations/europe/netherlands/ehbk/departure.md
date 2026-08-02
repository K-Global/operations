# EHBK — Maastricht Aachen · Departure Page

**EHBK / MST** · Beek, Limburg, Netherlands · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (LVNL eAIP not directly reachable this pass)

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EHBK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **03 or 21** — wind-selected; single-runway field, no configuration choice |
| Config logic | Wind-driven direction selection only |
| Transition altitude | Not confirmed this pass 🟧 |
| Take-off minima | Not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed as coordinated; low-density regional field assumed |
| De-icing on departure | Not confirmed — assumed given active winter operations 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Single-runway field with a compact taxiway layout; VAMSYS mirror gives a planning taxi-out time of **8 min** `[VAMSYS mirror 2026-07-26]` — confirm the exact routing with Ground on the day.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Runway crossings / read-back-required points:** Not confirmed in reachable sources. 🟧
- **Low-vis taxi caveats:** Not confirmed — the field's CAT III capability on RWY 21 implies some low-visibility procedure exists, but taxi-specific detail not confirmed this pass. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (03/21) — the active departure direction is wind-selected; no configuration alternative exists.
- **By departure direction:** Not confirmed in reachable sources this pass. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway and direction at any given time; no parallel-runway interaction exists.

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
- **Close-in / distant obstacles:** No significant close-in terrain or obstacle identified in reachable sources; rolling South Limburg countryside.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass — RWY 21's CAT III ILS implies a mature low-visibility infrastructure at the field, but LVTO-specific minima not obtained. 🟧
- **De-icing:** Not confirmed in reachable sources — assumed given active winter operations at a NW-European cargo/passenger field. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Beek Clearance Delivery/Ground **121.830** (hours not confirmed).
- **Frequency sequence:** **Delivery/Ground 121.830 → Tower 119.480 → Beek Approach 120.205.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed as coordinated in reachable sources — a regional field of this scale is not expected to carry an IATA Level 3 designation, but this is not independently confirmed. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The single 2,750 m runway is non-limiting for narrowbody types at typical operating weights; it is a genuine performance consideration for a fully-loaded long-haul widebody diversion — confirm weight/performance margin before relying on this field for a heavy widebody departure.
- **Density altitude / temperature:** Non-issue at 375 ft, temperate NW-European climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Not confirmed this pass — seasonal winter contamination is a plausible consideration pending confirmation. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm margin for any widebody type before planning a departure from this field's single 2,750 m runway.

---

## 10. Gotchas

- **Single runway, no configuration fallback** — a runway closure is a full-field closure; check NOTAM status before planning any tight turnaround.
- **Runway was renumbered 04/22 → 03/21 in 2005** for magnetic drift — confirm current chart designators and headings.
- **2,750 m runway is a genuine limiter for a fully-loaded long-haul widebody** — this is not a "non-limiting" field for every K Global type the way EHAM or EDDF are; run the performance numbers.
- **Reported night curfew (23:00–06:00) with a limited annual cargo-movement allowance** — confirm current terms before planning any late-day departure that could slip into the window.
- **Materially busier field expected Feb–Jul 2027** while Eindhoven Airport is closed for runway renovation and Transavia/TUI fly Netherlands relocate flights here.

---

## Open items (🟧 — confirm against LVNL eAIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics and take-off minima per runway.
- Transition altitude.
- Start-up/push-back procedure detail.
- LVTO minima and de-icing pad/procedure detail.
- EOSID/engine-out procedure detail.
- CTOT/slot regime confirmation.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **LVNL eAIP (AIP Netherlands)** — https://eaip.lvnl.nl/ — attempted direct fetch 2026-07-26; AD 2.EHBK did not resolve. Primary verification **PENDING**.
- OurAirports — https://ourairports.com/airports/EHBK/frequencies.html (retrieved 2026-07-26). *Frequency table.*
- Wikipedia — "Maastricht Aachen Airport" — https://en.wikipedia.org/wiki/Maastricht_Aachen_Airport (retrieved 2026-07-26). *Runway renumbering history.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Netherlands (LVNL); K Global fields from live VAMSYS; 4-page pack. |
