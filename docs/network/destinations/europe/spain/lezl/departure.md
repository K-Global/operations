# LEZL — Sevilla-San Pablo · Departure Page

**LEZL / SVQ** · Seville, Andalusia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LEZL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **09 or 27** — single runway, wind-driven choice only |
| Config logic | Wind-driven; no published preferential-runway rule found 🟧 |
| Transition altitude | Not confirmed 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not confirmed — not expected to be significant at this traffic level 🟧 |
| De-icing on departure | Not confirmed — unlikely given climate, not sourced as formal NIL 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — a single-runway field keeps routing conceptually simple; confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Not confirmed in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not applicable — single runway, no crossing runway identified.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 09/27 — the only choice is direction, driven entirely by wind. No published preferential-runway rule found. 🟧
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed. 🟧
- **Interaction with arrivals:** Both arrivals and departures share the single runway — sequencing is the operative consideration rather than parallel-runway interaction. Expect additional local traffic from on-field Airbus test/production flights and Ryanair maintenance activity (see Briefing §3.2).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 09 / 27 | Not confirmed | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) assumed — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources. 🟧
- **Close-in / distant obstacles:** Flat Guadalquivir valley floor — no significant close-in terrain identified. 🟩
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed. 🟧
- **De-icing:** Not confirmed — unlikely given the Andalusian climate but not sourced as a formal NIL. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed. 🟧
- **Frequency sequence:** **Ground 121.7 → Tower (not confirmed) → Sevilla Aproximación 125.8.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed; not expected to be significant at this traffic level. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,362 m is non-limiting for any K Global narrowbody and most widebody weights at normal conditions.
- **Density altitude / temperature:** Non-issue by elevation (112 ft), **but Seville's extreme summer heat (routinely 40–45°C, Jun–Sep) is a genuine performance driver** — verify performance-limited takeoff weight on hot days.
- **Contamination / wet-runway:** Occasional winter rain; no snow/ice season. No specific braking-action data confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or elevation performance penalty; the operative consideration is summer-heat weight planning.

---

## 10. Gotchas

- **Single runway, no crosswind alternate** — a strong crosswind day must be flown as published.
- **Summer heat (40–45°C) is a real performance driver** despite the low field elevation — check performance-limited weight on hot days.
- **On-field Airbus assembly/MRO and Ryanair maintenance activity** can put non-scheduled test/ferry traffic into the local circuit.
- **K Global's own VAMSYS category is unset** for this field — a governance item, not a flying gotcha, but worth knowing before treating LEZL as fully validated.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima / TA.
- Start-up/push-back procedure detail.
- CTOT/flow-control applicability (likely minimal, not confirmed).
- Engine-out/EOSID detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE)** — https://aip.enaire.es/AIP/ attempted 2026-07-26; JavaScript-frameset, not directly reachable this pass.
- OurAirports — https://ourairports.com/airports/LEZL/frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Seville Airport" — https://en.wikipedia.org/wiki/Seville_Airport (retrieved 2026-07-26). *On-field Airbus/Ryanair traffic context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
