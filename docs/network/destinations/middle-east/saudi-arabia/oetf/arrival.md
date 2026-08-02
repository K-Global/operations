# OETF — Taif Intl · Arrival Page

**OETF / TIF** · Taif, Makkah Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, GACA AIP not reached this pass

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OETF Briefing](index.md), Dispatch and Departure pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — two runways 07/25, 17/35 🟧 |
| Usual approach | Not confirmed in reachable sources 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition level | Not published / verify 🟧 |
| LVP trigger | Not published / verify 🟧 |
| Missed-approach driver | 🟥 **Terrain** — surrounding highland/escarpment relief, not traffic/airspace |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable sources — pull current-AIRAC list at planning. 🟧
- **Selection by arrival direction / runway:** Not published / verify. 🟧
- **Transition to approach:** Not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed — verify chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard planning rule assumed; not field-specific. 🟧
- **Speed control:** Standard 250 KIAS below FL100 (ICAO norm) pending local override confirmation.
- **Altitude constraints:** 🟧 Confirm terrain-driven altitude constraints on the STAR given the surrounding highland relief — not independently quantified this pass.
- **Energy traps:** 🟧 **High-elevation field with surrounding high ground** raises the risk of a high, close-in energy state if the descent isn't planned against terrain — a genuine trap at this field distinct from the flatter fields in this pack.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07/25 | Not confirmed in reachable sources | 🟧 | Verify current chart |
| 17/35 | Not confirmed in reachable sources | 🟧 | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 **The field's defining approach hazard.** Taif sits in the western Hejaz/Sarawat highlands near the escarpment to the Jeddah coastal plain — confirm the MSA ring and any terrain-driven approach constraint on the current chart before flying in. Cross-ref [OETF Briefing §3.1](index.md).
- **Specific threats:** None identified beyond the terrain item above; no closely-spaced-parallel or offset-approach complexity found in reachable sources.
- **Airspace / traffic:** Field lies within the Jeddah (OEJD) FIR, ~78 NM from the busy Jeddah (OEJN) TMA — cross-ref [OETF Briefing §3.2](index.md) and the [Middle East Airspace Briefing](../../../../airspace/middle-east.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** 🟥 Confirm the published missed-approach climb gradient and any terrain-driven turn constraint on the current chart — this is expected to be a real consideration given the surrounding highland relief, unlike the flatter fields in this pack.
- **Re-sequencing environment:** Not a density-driven concern at this field's traffic level (not independently quantified).
- **Go-around traps:** Combine the standard go-around energy/config traps with the terrain-driven climb requirement above.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Nominal 3,735 m (07/25) / 3,350 m (17/35) pending per-threshold declared-distance confirmation; cross-ref [OETF Briefing §7](index.md). 🟧
- **Braking / vacate:** 🟧 At 4,848 ft, higher touchdown groundspeed for a given IAS lengthens the landing roll versus the same indicated approach at sea level (see [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md)) — recompute LDR for the day rather than assuming sea-level figures apply.
- **Runway-excursion watch:** No displaced threshold or contamination pattern confirmed for either runway; the elevation-driven higher-groundspeed landing (above) is the standing watch-item. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources. 🟧
- **Stand/gate notes:** Cross-ref [OETF Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (119.70/349.50) → Tower (118.70/237.60) → Ground (121.90/335.30) — see [OETF Briefing §8](index.md) for the full list.
- **Approach/Departure control:** Taif Approach confirmed on 119.70/349.50 — sector/STAR-specific detail not confirmed; verify current chart. 🟧

---

## 10. Gotchas

- 🟥 **Terrain-driven arrival/missed-approach** — confirm the MSA and missed-approach climb gradient before flying in; this is the field's standout arrival hazard.
- 🟥 **Higher touchdown groundspeed at 4,848 ft** — recompute LDR for the day; do not assume sea-level landing performance.
- **Two runways (07/25, 17/35)** — confirm which is active and the day's config logic.
- 🟧 Runway pairing not independently AIP-confirmed against the task's assigned reference data — verify against current AIRAC (see [OETF Briefing §18](index.md)).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Approach names/minima, STARs, transition level, LVP trigger, MSA/terrain detail — none confirmed in reachable sources; priority items given the terrain profile.
- Runway designator/pairing discrepancy (see [OETF Briefing §18](index.md)).
- Missed-approach climb-gradient table — not confirmed.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — OETF Taif International Airport — https://skyvector.com/airport/OETF/Taif-International-Airport (retrieved 2026-07-26).
- [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — hot-and-high/high-elevation landing performance method applied at this field.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields not in VAMSYS (flagged); cross-linked to OM E High-Elevation Aerodrome Operations; 4-page pack. |
