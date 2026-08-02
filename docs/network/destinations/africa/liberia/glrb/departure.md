# GLRB — Roberts Intl · Departure Page

**GLRB / ROB** · Harbel, Margibi County (serves Monrovia), Liberia · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GLRB Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 04 or 22 — single runway, wind-selected 🟧 |
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

- **By wind / config:** Single runway (04/22) — direction selected by wind only.
- **By departure direction:** Not confirmed — no published routing preference found.
- **Noise / preferential-runway program:** None identified.
- **Interaction with arrivals:** Single runway — departures and arrivals share the one strip; sequencing discipline is the operative consideration.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed 🟧 | 04/22 | Not confirmed 🟧 | Pull current-AIRAC SID list at planning |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb assumed; 250 KIAS below FL100 per ICAO norm — confirm no local override on current chart.
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not confirmed. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed; terrain is flat coastal plain so no terrain-driven EO procedure is expected, but confirm on current chart. 🟧
- **Close-in / distant obstacles:** None identified — flat coastal plain near Harbel (see [Briefing](index.md) §3.1).
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** **NIL** — coastal-tropical field, no de-icing requirement.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately confirmed — cross-ref [Briefing](index.md) §8; likely combined with Tower (118.3) or Ground (121.9) at a field of this configuration.
- **Frequency sequence:** Ground (121.9) → Tower (118.3, "Roberts Tower") → Approach (124.5, "Roberts Approach," likely doubling as departure control) `[OurAirports, tier-4]` — confirm current AIRAC.
- **CTOT / slot handling:** None identified — assumed unrestricted.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting — 3,353 m runway is ample for any K Global widebody type at typical operating weights (this runway was originally built to B-47 Stratojet bomber standards and was for years the longest in Africa). Mind that departures off RWY 22 begin from behind the 366 m displaced threshold if departing from that end — confirm TORA/TODA figures on the current AIRAC. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Density altitude / temperature:** Near sea-level (31 ft) — not a factor; high ambient temperature/humidity may affect engine performance margins on the warmest days.
- **Contamination / wet-runway:** 🟥 Liberia's May–Oct wet season brings some of the heaviest rainfall totals in West Africa — see [Briefing](index.md) §3.4/§14 and [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). Runway condition post-2016–2019 refurbishment is assessed as improved but not independently confirmed — maintain conservative braking-action assumptions.
- **Link to OM B:** No type-specific field-length penalty identified given the runway's overall length.

---

## 10. Gotchas

- **Runway-condition/excursion history** — a 1989 rejected-takeoff overrun and a widely reported 2012 landing-gear/brake-system damage incident (attributed at the time to poor pavement) are both on record for this field; the runway has since been substantially refurbished (2016–2019) but current condition is not independently confirmed this pass.
- **Displaced threshold applies to RWY 22 only (366 m)** — the two runway directions are not symmetric for landing distance; confirm before assuming interchangeable performance.
- **Single-runway field** — any ground delay or runway obstruction has no parallel-runway workaround; a May 2025 disabled-aircraft event closed the field to overnight flights as an illustrative example.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, RNP/gradient requirements, take-off minima, transition altitude.
- Noise-abatement departure procedure (NADP) — none confirmed.
- Taxi hot spots / tight taxiways — none identified, not confirmed absent.
- Clearance-delivery frequency (may be combined with Tower/Ground) — confirm current AIRAC.
- Current runway pavement condition/PCN post-refurbishment.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status (N/A). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/GLRB/runways.html , /frequencies.html (retrieved 2026-07-26). *Runway and frequency data — tier-4.*
- Wikipedia — "Roberts International Airport" — https://en.wikipedia.org/wiki/Roberts_International_Airport (retrieved 2026-07-26). *1989 and 2012 runway-condition/excursion incidents; renovation history.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
