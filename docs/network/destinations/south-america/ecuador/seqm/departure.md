# SEQM — Mariscal Sucre Intl · Departure Page

**SEQM / UIO** · Tababela (Quito), Ecuador · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DGAC Ecuador AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [SEQM Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Single runway **18/36** — direction wind-driven; no preferential-runway rule published 🟧 |
| Config logic | Wind-driven, single-runway field — no crosswind/parallel alternative |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Published — verify current chart 🟧 |
| CTOT / flow regime | Not confirmed — no slot/ATFM regime found in reachable sources 🟧 |
| De-icing on departure | **NIL** — tropical Andean climate, no cold-weather requirement identified 🟩 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published in reachable sources — confirm stand-to-runway routing with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — single-runway field; taxiway-crossing points not published. 🟧
- **Low-vis taxi caveats:** Not confirmed — SMGCS/follow-me routing not published in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (18/36) — direction selected by wind; no published preferential-runway rule found. 🟧
- **By departure direction:** Not confirmed — given the terrain-hemmed valley (Cotopaxi to the south, Ilaló ridgeline and Andean high ground around the site), expect departure-direction and SID selection to be materially terrain-driven rather than purely wind-driven — verify on the current chart. 🟥
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** Single-runway field — departure and arrival sequencing share the one runway; no independent parallel-runway configuration exists. See [SEQM Briefing](index.md) §3.5.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass | 18/36 | Above-standard minimum climb gradient believed likely given the very-high-altitude/terrain-hemmed siting 🟧 | Pull current-AIRAC SID names/gradients at planning |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not published / verify — standard ICAO speed norms assumed absent a local override; confirm on current chart. 🟧
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Given the terrain-hemmed valley, expect published early-turn and minimum-altitude constraints on at least one SID — verify on current chart; do not assume an unconstrained straight climb. 🟥

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Believed likely to exist given the terrain profile (Cotopaxi to the south, Ilaló ridgeline and surrounding high ground) — not confirmed from a primary source this pass; brief for a runway-specific engine-out escape routing pending verification. 🟥
- **Close-in / distant obstacles:** Terrain-hemmed Andean valley — see [SEQM Briefing](index.md) §3.1 for the terrain picture; obstacle specifics not confirmed from a primary source this pass. 🟥
- **Special DP / obstacle DP:** Name not confirmed — verify on chart before departure.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — verify current chart. 🟧
- **De-icing:** **NIL** — not applicable in this tropical Andean climate at any season. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed — Delivery frequency not found in the reachable tier-4 extract; cross-ref [SEQM Briefing](index.md) §8. 🟧
- **Frequency sequence:** Delivery (not confirmed) → **Quito Ground 121.9** → **Quito Tower 118.1** → **Quito Approach 119.7 / 121.2** — per [SEQM Briefing](index.md) §8 (tier-4 snapshot only, treat as unconfirmed pending AIRAC cross-check).
- **CTOT / slot handling:** Not confirmed — no published slot/ATFM regime found in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting by nominal length (4,098 m) for any K Global type; the binding constraint is expected to be **climb-gradient / net take-off flight-path performance**, not runway length. 🟥
- **Density altitude / temperature:** **Very high-altitude hot-and-high field** — even at the corrected ~7,841–7,874 ft elevation this is one of the highest major international airports in the world; density-altitude effects on thrust and climb gradient are the dominant performance driver on every departure. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md). 🟥
- **Contamination / wet-runway:** Not confirmed — afternoon convective rainfall is plausible given the climate; braking-action data not confirmed from a primary source. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific high-elevation performance notes; weight/payload reduction should be planned proactively for this field rather than treated as an exception.

---

## 10. Gotchas

- Single runway — a runway closure is a full-field-closure event; no crosswind/parallel alternative exists.
- Very-high-altitude density-altitude penalty applies on every departure regardless of temperature — always compute RTOW/climb-gradient from the AFM/OFP module for the day, never assume the long nominal runway length is sufficient margin.
- Terrain-hemmed valley siting makes SID minimum-climb-gradient and engine-out escape routing a real planning item, not a formality — verify on the current chart before every departure.
- Volcanic-ash/NOTAM risk from the regional Andean volcanic arc — check the current VAAC/NOTAM picture before departure, every time.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, climb-gradient figures, and engine-out/obstacle DP names — not confirmed in reachable research pass.
- Take-off minima, transition altitude, LVTO minima — not confirmed.
- Delivery frequency and clearance-delivery procedure — not found in reachable sources.
- CTOT/slot regime applicability — not confirmed.
- Stand-to-runway taxi routing and hot spots — not confirmed.
- VATSIM cross-check — no dedicated VATSIM vACC/division airport SOP for SEQM located this pass.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status (not applicable at this field). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/SEQM/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Mariscal Sucre International Airport" — https://en.wikipedia.org/wiki/Mariscal_Sucre_International_Airport (retrieved 2026-07-26).
- Companion OM C file: [SEQM Briefing](index.md) §3.1, §3.5, §8, §11.
- Companion OM E file: [`High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- Companion OM E file: [`PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **DGAC Ecuador AIP (AD 2 SEQM)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
