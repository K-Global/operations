# LIMZ — Cuneo-Levaldigi · Departure Page

**LIMZ / CUF** · Levaldigi (Savigliano), Cuneo Province, Piedmont, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIMZ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — single runway **03/21**, usable both directions; no preferential-runway rule identified 🟧 |
| Config logic | Wind-dependent (single bidirectional runway); no published preferential/noise logic identified 🟧 |
| Transition altitude | **7,000 ft** (network-sim sourced) 🟧 |
| Take-off minima | Published — not confirmed this pass; verify current chart 🟧 |
| CTOT / flow regime | Not published / verify — no slot coordination identified; standard EUROCONTROL ATFM/CTOT may apply generically 🟧 |
| De-icing on departure | Not published / verify — no dedicated pad/procedure identified 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — a minimal taxiway system is expected for a single-runway field of this size; no routing detail identified in reachable sources. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources — plausible given the field's small size, not confirmed. 🟧
- **Runway crossings / read-back-required points:** Not published / verify — no crossing runway exists (single runway only), so this is likely a non-factor. 🟧
- **Low-vis taxi caveats:** Not published / verify — the field's reported low-fog profile suggests infrequent need, not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not published / verify — single bidirectional runway, wind-dependent choice of 03 vs 21 assumed; no published rule identified. 🟧
- **By departure direction:** RWY 03 (heading 030°) departs toward the open Piedmont plain (northeast); RWY 21 (heading 210°) departs toward higher Alpine-foothill terrain to the southwest — see [Briefing §3.1](index.md). 🟧
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Not published / verify — single runway, so departures and arrivals share the same strip; sequencing is procedural under AFIS rather than radar-separated. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| IXUSA | 03 / 21 | RNAV — gradient not confirmed 🟧 | Names sourced to a network-sim aerodrome reference, not the primary AIP — verify current AIRAC before use |
| KUKEV | 03 / 21 | RNAV — gradient not confirmed 🟧 | Same source/caveat |
| LAGEN | 03 / 21 | RNAV — gradient not confirmed 🟧 | Same source/caveat |
| TOP | 03 / 21 | RNAV — gradient not confirmed 🟧 | Same source/caveat |
| MMP | 03 / 21 | RNAV — gradient not confirmed 🟧 | Same source/caveat |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not published / verify — standard initial-climb/speed schedule assumed pending confirmation. 🟧
- **Noise-abatement departure procedure (NADP):** Not published / verify — none identified. 🟧
- **Early turn / altitude constraints:** Not published / verify — verify current chart for any published constraint. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify — no field-specific engine-out procedure identified in reachable sources. 🟥
- **Close-in / distant obstacles:** The Maritime Alps rise to the southwest, in the RWY 21 departure quadrant (see [Briefing §3.1](index.md)); exact obstacle/terrain data for an engine-out path were not sourced this pass. 🟥
- **Special DP / obstacle DP:** Not published / verify — name only if one exists; verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — the field's reported low-fog profile suggests LVTO is an infrequent consideration, not confirmed. 🟧
- **De-icing:** Not published / verify — no dedicated pad/procedure identified; a Piedmont winter snow/ice season should still be assumed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — likely combined with the AFIS/Tower position; see [Briefing §8](index.md). 🟧
- **Frequency sequence:** Cuneo AFIS/TWR **119.550** → Milano Radar (Torino sector) **129.275** → Milano ACC/Radar **135.455** — reference [Briefing §8](index.md) for full detail and caveats.
- **CTOT / slot handling:** Not published / verify — no slot coordination identified for this field. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The single ~2,100 m runway (see [Briefing §7](index.md)) is **limiting or marginal for larger K Global equipment**; non-limiting for regional/narrowbody types. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). 🟥
- **Density altitude / temperature:** Field elevation 1,267 ft is modest — not a hot-and-high performance driver. 🟩
- **Contamination / wet-runway:** A Piedmont winter snow/ice season should be assumed despite the field's reported low-fog/low-wind profile; braking-action data not confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type runway-length assessment before any future scheduling at this field.

---

## 10. Gotchas

- Only **RWY 21** has a confirmed published instrument approach in reachable sources — a same-runway-both-ways assumption for RWY 03 is not safe without current-AIRAC verification.
- Field is **AFIS-serviced, not full ATC tower** — expect procedural, not radar, ground/traffic coordination.
- **AD/ATS hours are limited** (07:00–21:00 local, non-H24) — do not assume off-hours departure availability.
- RWY 21 departs toward higher Alpine-foothill terrain to the southwest — respect published obstacle/climb-gradient requirements on that side once confirmed.
- **This field is outside the K Global (VAMSYS) network** — no CTOT/slot/handling assumption should be made without VAMSYS reconciliation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, RNP/gradient requirements — sourced to a network-sim aerodrome reference only, not the primary AIP.
- Take-off minima, NADP, early-turn/altitude constraints — none confirmed.
- Engine-out/emergency-turn procedure and quantified obstacle data for the RWY 21 departure quadrant.
- LVTO minima and de-icing procedure/provisioning.
- Clearance-delivery procedure detail (assumed combined with AFIS/TWR).
- CTOT/slot handling — no coordination identified, not independently confirmed as a non-factor.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/AFIS-hours/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- IVAO Italy — Aerodrome QuickOverview LIMZ (network-sim document, not regulatory) — https://quickoverview.ivao.it/aerodrome/show/LIMZ (retrieved 2026-07-26). *SID names, TA, frequencies.*
- SkyVector — https://skyvector.com/airport/LIMZ/Cuneo-Levaldigi-Airport (retrieved 2026-07-26). *Runway headings.*
- Wikipedia (Italian) — "Aeroporto di Cuneo-Levaldigi" — https://it.wikipedia.org/wiki/Aeroporto_di_Cuneo-Levaldigi (retrieved 2026-07-26). *Weather profile ("rarely subject to strong fog or wind").*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
