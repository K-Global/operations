# OETF — Taif Intl · Departure Page

**OETF / TIF** · Taif, Makkah Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, GACA AIP not reached this pass

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OETF Briefing](index.md), Dispatch and Arrival pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — two runways 07/25, 17/35 🟧 |
| Config logic | Not published / verify 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified 🟧 |
| De-icing on departure | NIL |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — two runways (07/25, 17/35) may create crossing points; verify current chart. 🟧
- **Low-vis taxi caveats:** Not published / verify. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify. 🟧
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Two-runway layout (07/25, 17/35); sequencing detail not confirmed. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable sources | 07/25, 17/35 | 🟥 **Expect a non-standard (>200 ft/NM) minimum climb gradient to be plausible** given field elevation/terrain — not independently confirmed; verify on current chart | Cross-ref [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4 |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard climb profile assumed pending confirmation; on hot-and-high days expect a **reduced net climb-gradient margin** — see §9 and [OM E — High-Elevation Aerodrome Operations](../../../../../flight-ops/high-elevation-aerodrome-operations.md). 🟥
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify chart, and confirm any terrain-driven early-turn requirement given the surrounding highland relief (§6). 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟥 **Not confirmed in reachable sources — a genuine open item given the field's elevation and surrounding highland/escarpment terrain.** Per [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §4, the standard SID guarantees all-engine terrain clearance only; confirm whether a specific OEI obstacle-clearance/escape procedure is published for OETF before planning a departure here.
- **Close-in / distant obstacles:** Surrounding Hejaz/Sarawat highland terrain and the escarpment toward the Jeddah plain are plausible obstacle drivers — not independently quantified. See [OETF Briefing §3.1](index.md). 🟧
- **Special DP / obstacle DP:** Not confirmed — verify current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** NIL — no cold-weather season identified on current evidence.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately identified in reachable sources — cross-ref [OETF Briefing §8](index.md).
- **Frequency sequence:** Ground (121.90/335.30) → Tower (118.70/237.60) → Approach/Departure (119.70/349.50) — see [OETF Briefing §8](index.md) for the full list; no Delivery frequency confirmed. 🟧
- **CTOT / slot handling:** None identified. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟥 **Thrust/climb-gradient-limited, not field-length-limited** — 3,735 m (07/25) is generous in absolute terms, but at 4,848 ft field elevation the RTOW is very plausibly set by the net take-off flight path rather than runway length. Compute per AFM/EFB for the day.
- **Density altitude / temperature:** 🟥 This is the field's defining performance driver — see [OETF Briefing §3.5](index.md) and [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the full method (TAS/GS effect, thrust derating, payload/fuel trade-off).
- **Contamination / wet-runway:** Highland/desert climate — rain/contamination events are plausible but not quantified; no seasonal braking-action data found. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) Table D (hot-and-high sensitivity by type) — real per-type consideration at this field.

---

## 10. Gotchas

- 🟥 **Hot-and-high departure** — compute RTOW/V-speeds/net climb gradient from the AFM/EFB for the day's temperature and weight; never assume the long runway removes the constraint.
- **Surrounding highland terrain** — confirm the engine-out obstacle/escape routing before departure; not confirmed in reachable sources this pass.
- **Two runways (07/25, 17/35)** — confirm which is active and the day's config logic.
- 🟧 Runway pairing not independently AIP-confirmed against the task's assigned reference data (§18 of the Briefing) — verify against current AIRAC.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID list, take-off minima, NADP, transition altitude, SID minimum-climb-gradient tables — none confirmed in reachable sources.
- **Engine-out obstacle/escape procedure** — not confirmed; priority item given the terrain profile.
- Runway designator/pairing discrepancy (see [OETF Briefing §18](index.md)).
- CTOT/slot regime assumed none — not independently confirmed.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — OETF Taif International Airport — https://skyvector.com/airport/OETF/Taif-International-Airport (retrieved 2026-07-26).
- [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) — hot-and-high performance method applied at this field.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields not in VAMSYS (flagged); cross-linked to OM E High-Elevation Aerodrome Operations; 4-page pack. |
