# LIPE — Bologna/Borgo Panigale (Guglielmo Marconi) · Departure Page

**LIPE / BLQ** · Bologna, Emilia-Romagna, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIPE Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 30** — preferential for takeoff, code D/E/F 🟧 |
| Config logic | Wind/noise driven; night ops default toward RWY 30 (Bargellino direction) regardless of light-wind preference |
| Transition altitude | **6,000 ft** 🟧 |
| Take-off minima | Published — not confirmed in reachable sources this pass 🟧 |
| CTOT / flow regime | Standard EUROCONTROL ATFM practice assumed; LIPE-specific regulation not sourced 🟧 |
| De-icing on departure | Availability not confirmed — plan for a winter requirement given regional climate 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Standard entry/exit taxiway assignment is reported as **TWY K for entry to the runway system, TWY J for exit** 🟧 — not independently AIP-confirmed; confirm with Ground on the day.
- **Hot spots / tight taxiways:** No named hot spots beyond the entry/exit taxiway assignment were found in reachable sources — this is a comparatively simple single-runway/single-taxiway-system field, but the point is not independently confirmed. 🟧
- **Runway crossings / read-back-required points:** Not confirmed in reachable sources — confirm locally; single-runway field, so crossing complexity is expected to be low relative to a multi-runway hub.
- **Low-vis taxi caveats:** SMGCS routing/follow-me availability not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY 30 is the preferential takeoff runway for code D/E/F aircraft** per tier-4/network-sim cross-check; RWY 12 is used for takeoff when wind/traffic dictates the reciprocal direction.
- **By departure direction:** Not independently characterised (e.g. northbound vs southbound preference) in reachable sources beyond the RWY 30 preferential logic above. 🟧
- **Noise / preferential-runway program:** At night (23:30–05:00), departures are reported directed toward the **Bargellino direction — RWY 30** — even at the cost of delay, unless weather/safety conditions preclude it. This can override a light-wind preference for the reciprocal runway. 🟥
- **Interaction with arrivals:** Single runway — departures and arrivals share the same physical runway; sequencing is a shared-runway consideration rather than a dependent-parallel-configuration one.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| PELEG | 12, 30 | RNAV and conventional variants published 🟧 | Verify current-AIRAC designator suffix and gradient |
| LUMAV | 12, 30 | RNAV and conventional variants published 🟧 | Verify current-AIRAC designator suffix and gradient |
| LUPOS | 12, 30 | RNAV and conventional variants published 🟧 | Verify current-AIRAC designator suffix and gradient |
| LOMED | 12, 30 | RNAV and conventional variants published 🟧 | Verify current-AIRAC designator suffix and gradient |

*SID names sourced to a network-sim (IVAO Italian Division) operational reference — not regulatory, corroboration only. Confirm the live current-AIRAC procedure list, designator suffixes and any climb-gradient requirement before use.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Noise-abatement departure procedure (NADP):** No NADP1/2 preference confirmed in reachable sources; the operative noise consideration at LIPE is the **runway-direction rule at night** (§3) rather than a published NADP profile. 🟧
- **Early turn / altitude constraints:** Not confirmed in reachable sources — verify current chart for any published SID turn/altitude constraint. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — verify on the current chart. 🟧
- **Close-in / distant obstacles:** LIPE sits in the flat Po Valley basin with no close-in high terrain identified — obstacle/EO-path considerations are not expected to be terrain-driven at this field, but this has not been independently verified against an obstacle chart. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources; low-visibility procedures at this field are reported to **restrict operations to RWY 12 only** (both landing and takeoff) when in effect — a wind state favouring RWY 30 during a fog event is a real operational trap. Exact RVR minima not confirmed. 🟧
- **De-icing:** Availability, pad location, fluid type and holdover data not confirmed in reachable sources — plan for a winter requirement given the region's fog/inversion climate and confirm locally. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published separately in reachable sources — likely combined with Ground; cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Ground (121.925) → Tower (120.800) → Bologna Radar/Approach (West sector 133.775 / East sector 118.150) — see [Briefing §8](index.md) for the full table and sourcing caveats. 🟧
- **CTOT / slot handling:** Slot-requirement status is reported inconsistently across sources (§Dispatch §4); standard EUROCONTROL ATFM/CTOT practice assumed as general EU practice. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The single 2,800 m runway (declared distances reduced by displaced thresholds to 2,493 m/2,442 m LDA — see [Briefing §7](index.md)) is non-limiting for narrowbody types; no fleet-specific field-length/weight study has been performed for our largest widebody types at MTOW. 🟧
- **Density altitude / temperature:** Near sea-level field (123 ft) in a flat basin — not hot-and-high; density-altitude is a non-issue here.
- **Contamination / wet-runway:** Regional cold/fog-prone winter climate implies a plausible wet/contaminated-runway season; braking-action data not confirmed in reachable sources. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 10. Gotchas

- **Single runway** — no parallel/reciprocal fallback if RWY 12/30 is NOTAM'd unusable; any runway-condition NOTAM is a full-field-stop risk.
- **Night noise rule can override wind-favoured runway choice** — expect RWY 30 departures after dark even in a light-wind state favouring RWY 12.
- **LVP reportedly restricted to RWY 12 only** — a fog event with wind favouring RWY 30 for takeoff is a real trap; check current LVP status.
- **All gates are bus gates** — build extra time for push-back/taxi-out sequencing after a longer-than-contact-gate boarding process.
- **Displaced thresholds both ends** — do not assume full 2,800 m is usable from the threshold; confirm the correct TORA/ASDA for the runway and intersection in use.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Take-off minima, LVTO RVR minima, NADP profile, engine-out/obstacle DP — none confirmed in reachable sources.
- SID designator suffixes, climb gradients and RNP equipage requirements — sourced to a network-sim reference only, not current-AIRAC-confirmed.
- De-icing availability/season/provisioning.
- CTOT/slot-requirement status (reported inconsistently across sources).
- Runway crossing points and low-vis SMGCS taxi routing.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status, current LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- IVAO Italian Division — Airport QuickOverview, LIPE — https://quickoverview.ivao.it/aerodrome/show/LIPE (retrieved 2026-07-26). *Network-sim operational reference, not regulatory — SID names, preferential runway logic, taxiway entry/exit assignment, TA. Corroboration only.*
- Aeroporto di Bologna (bologna-airport.it) — press release on night flight activity measures — https://www.bologna-airport.it/en/the-company/press-room/press-release/the-measures-regarding-night-time-flying-activity-to-avoid-take-offs-and-landings-on-the-city-of-bologna-have-been-confirmed/?idC=62420&idO=2612303 (retrieved 2026-07-26). *Night noise-abatement direction rule.*
- Full source set and tier notes: see the [LIPE Briefing](index.md) Sources & References.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
