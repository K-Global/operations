# GMFF — Saïss Intl · Departure Page

**GMFF / FEZ** · Fez, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GMFF Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 09 or 27 — single runway, no crosswind alternative; selection logic not confirmed 🟧 |
| Config logic | Not confirmed — presumed wind-driven (only two options, reciprocal headings 091°/271°) 🟧 |
| Transition altitude | Not confirmed in reachable public sources — verify current chart 🟧 |
| Take-off minima | Not published — verify current chart 🟧 |
| CTOT / flow regime | None confirmed — presumed non-coordinated regional field 🟧 |
| De-icing on departure | Not confirmed; low routine likelihood given climate, but not to be assumed NIL in winter 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — single-runway field with (presumed) a single parallel taxiway; no routing detail obtained from a primary source this pass. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed — no SMGCS/low-vis taxi procedure found in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Only two options exist (RWY 09 or RWY 27) given the single-runway layout; exact wind-selection criteria not confirmed. 🟧
- **By departure direction:** Not confirmed — RWY 09 departures head east (toward the Middle Atlas high ground, see §6), RWY 27 departures head west toward the open Saïss Plain. Preference logic between the two not confirmed.
- **Noise / preferential-runway program:** None found in reachable sources. 🟧
- **Interaction with arrivals:** Not applicable in detail — single runway, so departures and arrivals share the same runway sequence; no dependent-configuration data to report.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed — verify current AIRAC | 09/27 | Not confirmed 🟧 | No SID names were obtained in this research pass; given the Middle Atlas terrain east/southeast of the field (§6), assume any RWY 09 departure procedure may carry a non-standard climb gradient until the current chart is checked |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not confirmed — standard ICAO 250 KIAS below FL100 assumed pending local override confirmation. 🟧
- **Noise-abatement departure procedure (NADP):** Not confirmed — no NADP1/2 preference found in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart, particularly for any RWY 09 departure given the terrain context in §6. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed — no published engine-out procedure found in reachable sources. 🟥 Given the **Middle Atlas terrain rising to peaks above 3,000 m** within a few tens of NM to the south/southeast (Briefing §3.1), an engine-out departure off **RWY 09** (heading 091°, i.e. toward that high ground) is the more terrain-sensitive case and should be briefed conservatively pending confirmation of any published procedure.
- **Close-in / distant obstacles:** No close-in obstacle table obtained from a primary source this pass; the operative terrain consideration is the Middle Atlas high ground at range, not close-in obstacles at the field itself. Cross-ref [GMFF Briefing](index.md) §3.1.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed — no LVP/CAT infrastructure confirmed at this field (Briefing §10). 🟧
- **De-icing:** Availability not confirmed; occasional winter cold/snow (Briefing §14) means a de-icing need cannot be ruled out, but routine demand is expected to be materially lower than at a European field. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed — no dedicated Delivery frequency found in reachable sources; cross-ref [GMFF Briefing](index.md) §8. 🟧
- **Frequency sequence:** (Delivery — not published) → (Ground — not published) → **Fès Tower 118.60** → **Fès Approach** (121.40 per SkyVector, or 118.500 per an IVAO Morocco Division network-sim document — discrepancy not resolved this pass, see Briefing §8/§18).
- **CTOT / slot handling:** No ATFM/CTOT regime specific to GMFF confirmed — presumed non-coordinated regional field. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting for narrowbody types on the 3,200 m runway; confirm widebody-type performance at max weight via OM B if a long-sector widebody rotation is ever assigned here.
- **Density altitude / temperature:** ~1,900 ft elevation is not classically hot-and-high, but combined with Saïss-plain summer heat (average warmest-month temperature ~27°C, Briefing §14), check density-altitude/performance margins on hot-day, max-weight departures. 🟧
- **Contamination / wet-runway:** Occasional winter rain/snow (Briefing §14) — braking-action/contamination data not confirmed from a primary source. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type performance reference; no field-specific type consideration confirmed beyond the general notes above.

---

## 10. Gotchas

- **No crosswind-runway alternative** — a crosswind/tailwind event outside limits leaves no on-field runway option; brief this explicitly given the single-runway layout.
- **RWY 09 departures track directly toward Middle Atlas high ground** — brief the engine-out case conservatively pending confirmation of any published procedure (§6).
- **Approach-frequency discrepancy between public sources (121.40 vs 118.500)** — confirm the correct current frequency before relying on either figure operationally.
- **Displaced threshold on RWY 27** (Briefing §7) reduces usable LDA on that runway by an unconfirmed but non-trivial amount (~220–250 m per differing sources) — not a departure-length issue for TORA/TODA on the corresponding takeoff direction, but be aware when reciprocal-runway distances are being cross-checked.
- **Taxi-out time is not published in the VAMSYS mirror** — do not assume a default push-to-wheels-up buffer for this field.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names/gradients, transition altitude, take-off minima, NADP, engine-out procedure, taxi routing, clearance-delivery frequency, CTOT/slot regime — none confirmed in reachable public sources this pass.
- Approach-frequency discrepancy (121.40 vs 118.500) unresolved.
- Taxi-out time not published in the VAMSYS mirror.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — https://skyvector.com/airport/GMFF/Fes-Saiss-International-Airport (retrieved 2026-07-26). *Runway heading/threshold detail, Approach frequency.*
- IVAO Morocco Division — "IVAO Morocco Division Rules — Based Pilots and ATC," v1.0, 2016-03-04 — mirrored via https://silo.tips/download/ivao-morocco-division (retrieved 2026-07-26). **Network-sim training document, not regulatory** — cross-check only; Tower/Approach frequency corroboration.
- Journey Beyond Travel — "Morocco's Mountain Ranges: An Overview" — https://www.journeybeyondtravel.com/blog/morocco-mountains-high-atlas-middle-atlas-anti-atlas.html (retrieved 2026-07-26). *Middle Atlas terrain corroboration for engine-out/obstacle context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
