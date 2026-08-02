# UDYZ — Zvartnots · Departure Page

**UDYZ / EVN** · Zvartnots, Yerevan, Armenia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Armenia (ARMATS)-derived, chart cross-checked

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [UDYZ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 27** preferred (noise-abatement driven) |
| Config logic | Noise-abatement preference for RWY 27 take-off / RWY 09 approach; wind may override — confirm on ATIS |
| Transition altitude | 🟧 Secondary-chart data shows 11,500 ft — not independently confirmed |
| Take-off minima | Not confirmed in reachable sources 🟧 |
| CTOT / flow regime | None identified in reachable sources 🟧 |
| De-icing on departure | Confirmed present (stands 25/26); season/provisioning not fully confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Main taxiway (Main TWY) plus lettered taxiways B/C/D connect the apron/stand complex (Apron 1/2/3, cargo terminal) to the single runway; specific stand-to-runway routing not itemised in reachable sources — confirm with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 Not individually confirmed in reachable sources this pass; confirm current AIRAC hot-spot markings before taxi.
- **Runway crossings / read-back-required points:** Not individually confirmed — single-runway field, crossing considerations expected to be minimal relative to multi-runway fields.
- **Low-vis taxi caveats:** Not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Preferential policy favours **RWY 27 for take-off**; wind and weather conditions may require the reciprocal — confirm assigned runway on ATIS.
- **By departure direction:** Not confirmed in reachable sources.
- **Noise / preferential-runway program:** 🟥 **RWY 27 departures must complete their turn before or after overflying the city of Etchmiadzin; low overflight of the city is explicitly prohibited** — this is the field's confirmed noise-abatement constraint (secondary-chart data).
- **Interaction with arrivals:** Not confirmed — single-runway field; sequencing between arrivals (preferentially RWY 09) and departures (preferentially RWY 27) implies the field frequently operates in a mixed-direction pattern rather than a single into-wind configuration — confirm current ATC practice.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV SIDs referencing GOSIS, SEVAN, TIBLO, INDUR waypoints | 09/27 | 🟧 Minimum climb gradients as steep as **~7%** referenced in secondary-chart data — terrain-driven | Sourced to dated (2016–2020) chart data; re-verify current-AIRAC SID names/gradients before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Secondary-chart data references an initial climb clearance to ~4,100 ft on several SIDs with a max 210 KIAS / 20° bank-angle constraint on initial turns — not confirmed against a current-AIRAC source. 🟧
- **Noise-abatement departure procedure (NADP):** RWY 27 departure turn must be completed before or after overflying Etchmiadzin; low overflight prohibited (§3 above). No NADP-1/NADP-2 policy identified in reachable sources beyond this specific routing rule.
- **Early turn / altitude constraints:** Terrain-driven — the surrounding high ground (Mt. Aragats, Mt. Ararat) makes early-turn/altitude constraints on published SIDs safety-critical; verify current chart before every departure.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources this pass. 🟥
- **Close-in / distant obstacles:** 🟥 Significant surrounding high terrain — Mt. Aragats (NW, ~13,419 ft) and Mt. Ararat (SW across the border, ~16,854 ft) — cross-ref [Briefing §3.1](index.md). An engine-out departure profile in this terrain environment is a genuine planning consideration; confirm current obstacle/escape-route data before every departure, especially at higher weights.
- **Special DP / obstacle DP:** Not confirmed — verify on chart; given the terrain, a dedicated obstacle/engine-out departure procedure would be expected — confirm its existence and routing on the current AIRAC.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources — verify current chart. 🟧
- **De-icing:** Dedicated stands 25/26, engine-tow/push-back-tractor access procedures referenced in secondary-chart data; season and throughput not confirmed against a primary source — Armenia's continental winter climate implies a real de-icing season. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not individually confirmed — likely combined with Ground/Tower given the field's scale; cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Ground (119.0) → Tower (120.9) → Approach (126.0) — reference the field's actual frequencies in [Briefing §8](index.md); not independently confirmed against a primary source this pass.
- **CTOT / slot handling:** None identified in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,850 m single runway is non-limiting for our Code E types at this field's moderate elevation.
- **Density altitude / temperature:** Moderate elevation (2,838 ft) combined with hot, dry summers is a mild performance consideration relative to a sea-level field — not classified as hot-and-high by the network's ops threshold, but worth a routine performance check at high summer temperatures.
- **Contamination / wet-runway:** Continental winter climate implies a real snow/ice season — seasonal braking-action consideration not independently confirmed this pass.
- **Link to OM B:** The dominant type-specific consideration is confirming each aircraft's climb performance against the terrain-driven SID gradient requirements (§4) rather than field length or elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 10. Gotchas

- **Terrain-driven SID climb gradients as steep as ~7%** in secondary-chart data — confirm current-AIRAC figures and aircraft performance margin before departure, especially at higher weights or in hot weather.
- **RWY 27 departures must not overfly Etchmiadzin city low** — brief this specific routing constraint before every RWY 27 departure.
- **180° turns on the runway are forbidden except at the designated turn pad** — plan any need to back-track accordingly; cross-ref [Briefing §3.3](index.md).
- **Significant surrounding high terrain** (Aragats, Ararat) means an engine-out departure profile deserves specific pre-departure briefing at this field, unlike a benign sea-level airport.
- **Primary AIP data for this field is incomplete this pass** (ARMATS eAIP not extractable) — treat every procedural detail as provisional and verify against the current AIRAC before flight.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names/gradients — sourced to dated (2016–2020) chart data.
- Take-off minima and LVTO procedure.
- Engine-out / emergency-turn procedure and obstacle DP.
- Clearance-delivery frequency and procedure.
- Named taxiway hot spots.
- CTOT/slot regime (none identified, not independently confirmed as absent).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM (if any), de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Armenia (ARMATS eAIP), section AD-2.UDYZ** — primary source of record; JavaScript-frameset landing page, no extractable text this pass — https://armats.am/storage/attachments/173390625201-25(23JAN2025)WithnewAICs/html/eAIP/UD-AD-2.UDYZ-en-GB.html (retrieved 2026-07-26).
- Jeppesen chart data (Zvartnots UDYZ/EVN, effective dates 2016–2020 across panels), via public document-hosting mirror — https://www.docdroid.net/file/download/yLg30bC/udyz-pdf.pdf (retrieved 2026-07-26). *Chart-derived secondary data — flagged 🟧 throughout.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP (ARMATS) cross-checked against secondary chart data; K Global fields from live VAMSYS; 4-page pack. |
