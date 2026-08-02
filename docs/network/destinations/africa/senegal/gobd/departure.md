# GOBD — Blaise Diagne Intl · Departure Page

**GOBD / DSS** · Diass, Thiès Region (serves Dakar), Senegal · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GOBD Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 01 or 19 — single runway, wind-selected 🟧 |
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

- **By wind / config:** Single runway (01/19) — direction selected by wind only.
- **By departure direction:** Not confirmed — no published routing preference found.
- **Noise / preferential-runway program:** None identified.
- **Interaction with arrivals:** Single runway — departures and arrivals share the one strip; sequencing discipline is the operative consideration, not a config-dependency one.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed 🟧 | 01/19 | Not confirmed 🟧 | Pull current-AIRAC SID list at planning |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb assumed; 250 KIAS below FL100 per ICAO norm — confirm no local override on current chart.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not confirmed. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed; terrain is flat coastal plain so no terrain-driven EO procedure is expected, but confirm on current chart. 🟧
- **Close-in / distant obstacles:** None identified — flat coastal Cap-Vert/Thiès plain (see [Briefing](index.md) §3.1).
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** **NIL** — coastal-tropical field, no de-icing requirement.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately confirmed — cross-ref [Briefing](index.md) §8; likely combined with Tower (118.8) at a field of this configuration.
- **Frequency sequence:** Ground → Tower (118.8) → Arrival/Approach (120.5, doubling as departure control) `[OurAirports, tier-4]` — confirm current AIRAC.
- **CTOT / slot handling:** None identified — assumed unrestricted.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting — 3,500 m runway is ample for any K Global widebody type at typical operating weights. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Density altitude / temperature:** Near sea-level (290 ft) — not a factor; high ambient temperature/humidity may affect engine performance margins on the warmest days, standard tropical-field consideration.
- **Contamination / wet-runway:** Monsoon-season (Jun–Oct) heavy rain is the relevant seasonal consideration — see [Briefing](index.md) §3.4/§14 and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).
- **Link to OM B:** No type-specific field-length or performance penalty identified for GOBD.

---

## 10. Gotchas

- **Runway-excursion precedent:** a rejected-takeoff/runway-excursion accident occurred at this field on 9 May 2024 (737, wet/contaminated-runway and RTO-decision factors reported) — brief RTO discipline and current runway-condition reporting carefully.
- **Displaced thresholds (120 m both ends)** do not reduce the take-off run available in either direction, but confirm this against the current AIP declared-distance table rather than assuming — the full TORA/TODA figures were not independently confirmed this pass (see [Briefing](index.md) §7/§18).
- **Single-runway field** — any ground delay or runway obstruction has no parallel-runway workaround; build in schedule margin.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, RNP/gradient requirements, take-off minima, transition altitude.
- Noise-abatement departure procedure (NADP) — none confirmed, may not exist, or simply not found in reachable sources.
- Taxi hot spots / tight taxiways — none identified, not confirmed absent.
- Clearance-delivery frequency (may be combined with Tower) — confirm current AIRAC.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status (N/A). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/GOBD/runways.html , /frequencies.html (retrieved 2026-07-26). *Runway and frequency data — tier-4.*
- Wikipedia — "Blaise Diagne International Airport" — https://en.wikipedia.org/wiki/Blaise_Diagne_International_Airport (retrieved 2026-07-26). *9 May 2024 runway-excursion accident detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
