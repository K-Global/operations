# OEHL — Hail · Departure Page

**OEHL / HAS** · Hail, Hail Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OEHL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 18 or 36 — no published preferential rule; wind-driven |
| Config logic | Wind-driven; right-hand circuit specified for RWY 36 |
| Transition altitude | 13,000 ft |
| Take-off minima | Published — not confirmed this pass 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | NIL (published) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Via TWY A/A1/A2/A3 (23 m, asphalt PCN 56/F/A/X/T) from the Civil Apron. Confirm the day's routing with Ground.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data. 🟩
- **Runway crossings / read-back-required points:** Not independently confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No preferential-runway rule published; runway in use follows wind, with RWY 18 favoured when the ILS is operationally desirable (single ILS runway, §Briefing §3.5).
- **By departure direction:** RWY 18 climbs outbound on HIL radial 174; RWY 36 climbs outbound on HIL radial 003 (§4) — opposite headings, consistent with the reciprocal runway.
- **Noise / preferential-runway program:** None published.
- **Interaction with arrivals:** Single-runway field — arrivals and departures share the one strip; sequencing is by Tower/Approach.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Published RWY 18 departure procedure | 18 | Not confirmed 🟧 | Climb outbound on HIL radial 174 to 6,500 ft, expect radar vectors |
| Published RWY 36 departure procedure | 36 | Not confirmed 🟧 | Climb outbound on HIL radial 003 to 6,500 ft, expect radar vectors |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Runway-heading/radial climb to 6,500 ft before radar vectors (§4); confirm speed schedule on the current chart.
- **Noise-abatement departure procedure (NADP):** None published. 🟧
- **Early turn / altitude constraints:** Not independently confirmed beyond the published radial tracks — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not independently confirmed — verify current chart. 🟧 Given the field's hot-and-high performance profile, one-engine-inoperative climb performance is a genuine planning item.
- **Close-in / distant obstacles:** AIP-published circling-area obstacle — TV tower (~3,793 ft) and broadcast antenna (~3,787 ft), ~4,800 m (~2.6 NM) west of the field; the Jabal Aja/Jabal Salma granite ranges flank the city at greater distance (general-source corroboration only) — cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — verify current chart. 🟧
- **De-icing:** NIL — not published; the high-plateau setting brings cooler winter nights than the coastal fields in this network, but no de-icing infrastructure is published.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Via Hail Tower/Ground — cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Ground (121.900) → Tower (118.700) → Approach (123.200, secondary 120.250).
- **CTOT / slot handling:** No ATFM/CTOT programme identified for this field.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,300 m at 3,305 ft elevation — length is workable for narrowbody types; **hot-and-high performance is the binding constraint** on a hot summer day. 🟥
- **Density altitude / temperature:** 3,305 ft field elevation + 37.6°C reference temperature — a genuine hot-and-high case. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- **Contamination / wet-runway:** No seasonal contamination pattern identified.
- **Link to OM B:** No fleet assignment; validate hot-and-high performance against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) once a type is assigned.

---

## 10. Gotchas

- 🟧 **AIP-published TV-tower/broadcast-antenna obstacle** ~2.6 NM west of the field, in the circling area — verify against the current chart.
- 🟥 **Hot-and-high field** — 3,305 ft elevation, 37.6°C reference temperature; validate weight/performance for the assigned type.
- 🟧 **RWY 36 has no precision approach** — a RWY 18 departure with a RWY 36 return in low weather has no ILS reciprocal.
- 🟧 **RWY 36 has a short stopway** (60×45 m) not mirrored on RWY 18 — do not assume symmetry.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact take-off minima, LVTO minima, engine-out/emergency-turn procedure, NADP, precise SID tracks/altitudes — none confirmed from a primary chart this pass.
- Jabal Aja/Jabal Salma proximity to the actual departure paths — general-source corroboration only, cross-check the current chart.
- Assigned-type hot-and-high performance validation — pending fleet/route assignment.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEHL — Hail**, AIRAC AMDT cycle retrieved (2026-03-19 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIRAC%20AIP%20AMDT%2003_26_2026_03_19/eAIP/AD%202%20OEHL%20HAIL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
