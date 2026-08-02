# LRBS — Băneasa-Aurel Vlaicu · Departure Page

**LRBS / BBU** · Băneasa, Bucharest, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LRBS Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. **LRBS is not currently reflected in VAMSYS.** SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **07 or 25** — single runway, direction per wind |
| Config logic | Wind-driven; no preferential-runway program confirmed |
| Transition altitude | Ambiguous figure found ("1200 M") — not usable as a reliable current value; verify current chart 🟧 |
| Take-off minima | Not confirmed 🟧 |
| CTOT / flow regime | Not confirmed — PPR is the field's standing arrival/departure control mechanism rather than a slot/CTOT regime 🟧 |
| De-icing on departure | Reported available H24 by the field's ground handler 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — apron-to-runway taxi routing not obtained this pass. 🟧
- **Hot spots / tight taxiways:** None specifically identified in reachable sources — not independently verified. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Marshaller/follow-me procedures have periodically been mandated by NOTAM during apron-chart-suspension periods — confirm current requirement. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (07/25) — direction selected by wind; no confirmed preferential-runway program.
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** Single-runway field, shared TMA/traffic environment with LROP 4 NM north — sequencing with LROP-bound/departing traffic is a plausible consideration, not independently confirmed.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 07 / 25 | Not confirmed — verify RNP/gradient on current chart | AIP NOTAM history references conventional SID/STAR routes at LRBS, periodically suspended in favour of RNAV1 vectoring — confirm current standing procedure |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Wallachian Plain, same setting as LROP; temporary construction cranes near the RWY 07/25 strip have been a recurring NOTAM theme — check current NOTAM at planning rather than treating any specific obstacle as permanent. 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources. 🟧
- **De-icing:** Reported available H24 by the field's ground handler; provisioning detail not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed in reachable sources. 🟧
- **Frequency sequence:** **Băneasa Ground 129.960 (current, per NOTAM correction; supersedes an older 129.950/129.95 value) → Băneasa Tower 120.800 (or 125.200 alternate) → Bucharest Approach 119.415 (shared with LROP, sector-specific alternates reported).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Not confirmed; PPR (Briefing §5) is the field's standing arrival-control mechanism. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The field's ~3,200 m nominal runway length is **materially reduced** by large, inconsistently-reported displaced thresholds on both ends (Briefing §3.3/§7) — takeoff-distance adequacy for any K Global type is **unconfirmed** and must be resolved before dispatch if the field is ever activated. 🟧
- **Density altitude / temperature:** Non-issue at 297–299 ft, temperate-continental climate.
- **Contamination / wet-runway:** Winter snow/icing season assumed (same as LROP); no specific data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm field-length adequacy given the unresolved displaced-threshold discrepancy before any type-specific clearance.

---

## 10. Gotchas

- **Large, unresolved displaced-threshold discrepancy on both runway ends** — do not assume the nominal ~3,200 m length is fully usable for takeoff distance.
- **PPR requirement** — confirm current lead time before planning any operation into or out of LRBS.
- **Temporary construction cranes near the RWY 07/25 strip have been a recurring NOTAM theme** — check current NOTAM rather than assuming a clear obstacle environment.
- Field is not currently in the K Global network — treat all content here as reference-only pending activation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima and a reliable transition-altitude figure.
- Current declared-distance table resolving the displaced-threshold discrepancy.
- EOSID/engine-out procedure detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, obstacle/crane), CTOT/ATFM, de-icing status, current PPR status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Alpha Handling — "Bucharest Băneasa Airport (LRBS/BBU) Information & FBO" — https://alphahandling.com/en/lrbs_bbu-airport (retrieved 2026-07-26). *Ground-frequency correction, NOTAM excerpts on SID/STAR suspension and apron marshalling — ground-handler public page, cross-check only.*
- SkyVector — https://skyvector.com/airport/LRBS/Baneasa-Aurel-Vlaicu-Airport (retrieved 2026-07-26). *Frequencies, runway/threshold cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. LRBS not in VAMSYS — flagged 🟧. |
