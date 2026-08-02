# LRCL — Avram Iancu · Departure Page

**LRCL / CLJ** · Cluj-Napoca, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LRCL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **07 or 25** — single runway, direction per wind |
| Config logic | Wind-driven; no preferential-runway program confirmed |
| Transition altitude | Not published — verify current chart 🟧 |
| Take-off minima | Not confirmed 🟧 |
| CTOT / flow regime | Not confirmed — no slot-coordination evidence found 🟧 |
| De-icing on departure | Not confirmed; Transylvanian winter climate makes a season plausible 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the single terminal apron, taxi via the former 08/26 runway (now a taxiway, following the 2013 runway change) to the assigned end of RWY 07/25; confirm exact routing with Ground/Apron on the day. 🟧
- **Hot spots / tight taxiways:** None specifically identified in reachable sources — not independently verified. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (07/25) — direction selected by wind; no confirmed preferential-runway program.
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway; sequencing is the operative consideration rather than parallel-runway interaction.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 07 / 25 | Not confirmed — verify RNP/gradient on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Transylvanian-basin terrain context is hillier than the Bucharest fields; no specific close-in obstacle identified but **not independently verified against an area/obstacle chart** this pass. 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources. 🟧
- **De-icing:** Not confirmed — Transylvanian winter climate makes a season plausible; provisioning/availability not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed in reachable sources. 🟧
- **Frequency sequence:** **Cluj Tower 118.700 (or 134.400 alternate) → Napoca Approach 119.680 (sector-specific alternates reported).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8 — SkyVector-sourced, tier-4, not primary-confirmed.)
- **CTOT / slot handling:** No confirmed slot-coordination regime. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Single 2,040 m runway with a **787 ft (~240 m) displaced threshold on RWY 07** — confirm takeoff-distance margin for the assigned K Global type against current performance data; this is a materially shorter field than either Bucharest airport. 🟧
- **Density altitude / temperature:** Field elevation 1,039 ft is modest but higher than the Bucharest fields — verify any density-altitude margin on a hot summer day. 🟧
- **Contamination / wet-runway:** Winter snow/icing is a documented risk at this field (§Briefing §3.3, 2016 excursion precedent) — factor a contamination margin into takeoff planning in season.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm field-length adequacy for the assigned type at this shorter, single-runway field.

---

## 10. Gotchas

- **Single runway, no on-field alternative** — a runway closure or disabled aircraft has no reciprocal-direction or parallel-runway workaround.
- **RWY 07's displaced threshold (787 ft/~240 m)** reduces available landing/takeoff distance from that direction — confirm current published figures.
- **Documented winter contamination excursion precedent (Jan 2016)** — brief firm energy management and a low threshold for go-around in wet-snow/contaminated conditions.
- Field elevation and Transylvanian terrain are higher/hillier than the Bucharest fields — do not assume a flat-plain profile without checking the current chart.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima / transition altitude exact figures.
- Current RWY 07 displaced-threshold distance and full declared-distance table.
- EOSID/engine-out procedure detail.
- De-icing availability and season specifics.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — https://skyvector.com/airport/LRCL/Avram-Iancu-Airport (retrieved 2026-07-26). *Frequencies, displaced threshold, runway dimensions — tier-4, not primary-confirmed.*
- Wikipedia — "Cluj International Airport" — https://en.wikipedia.org/wiki/Cluj_International_Airport (retrieved 2026-07-26). *2013 runway change, 2016 excursion incident.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. |
