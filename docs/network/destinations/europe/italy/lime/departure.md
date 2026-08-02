# LIME — Orio al Serio (Milan Bergamo) · Departure Page

**LIME / BGY** · Orio al Serio, Bergamo, Lombardy, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIME Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 28** reported as the more frequently used direction in tier-4 operational material; **RWY 10** used in the reciprocal wind state 🟧 |
| Config logic | Wind-driven, single-runway field — no parallel/crossing runway option |
| Transition altitude | Not confirmed for LIME specifically; many Italian aerodromes publish 6,000 ft — verify current chart 🟧 |
| Take-off minima | Published per AIP; not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed; plausible ATFM exposure given traffic density 🟧 |
| De-icing on departure | Not confirmed; plausible given Po Valley winter climate 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed from a primary source — single-runway, limited-taxiway field; confirm the exact taxi routing with Ground/Tower on the day.
- **Hot spots / tight taxiways:** Not confirmed from a primary source. General caution warranted given the compact single-runway/limited-taxiway layout at a very-high-movement field — see [Briefing §13](index.md). 🟧
- **Runway crossings / read-back-required points:** Not confirmed — single-runway field, no parallel-runway crossing expected, but confirm any taxiway-crossing-runway intersection with Ground/Tower.
- **Low-vis taxi caveats:** Winter Po Valley radiation fog can bring low-vis taxi conditions; SMGCS/low-vis routing and follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (10/28) — the assigned direction is whichever end faces the prevailing wind component; tier-4 operational material describes RWY 28 as the more commonly used direction. 🟧
- **By departure direction:** Not confirmed — no directional SID-selection logic sourced.
- **Noise / preferential-runway program:** Not published / verify. 🟧
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway; expect sequencing gaps built around the arrival stream, particularly during peak LCC/cargo banks (see [Briefing §3.2](index.md)).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 10 / 28 | Not confirmed — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for general RNP departure guidance pending field-specific confirmation | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** Not published / verify. 🟧
- **Early turn / altitude constraints:** Not confirmed — terrain rises N/NE/E of the field (see [Briefing §3.1](index.md)); do not turn toward high ground on a non-standard departure without a verified track. Verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Terrain elevated to the north, north-east and east of the field, with the highest reported MSA sector to the NE (~12,400 ft in tier-4 material) — relevant to any non-standard departure turning toward that quadrant. See [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed; winter Po Valley radiation fog is the field's plausible LVP trigger risk (see [Briefing §14](index.md)). 🟧
- **De-icing:** Availability, pad location and provisioning not confirmed — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not confirmed — cross-ref [Briefing §8](index.md); no dedicated Delivery frequency sourced. 🟧
- **Frequency sequence:** **(Delivery — not confirmed) → Orio Ground 120.50/134.10 (tier-4) → Orio Tower 125.87/134.10 (tier-4) → Milano Radar 126.30/126.75 (tier-4).** All frequencies are tier-4 sourced — take the assigned frequency and confirm current chart (Briefing §8). 🟧
- **CTOT / slot handling:** Slot-coordination level not confirmed (see [Dispatch §4](dispatch.md)); comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 10/28 (2,874 m) is non-limiting for narrowbody/regional K Global types typical of this category-S field.
- **Density altitude / temperature:** Non-issue at 782 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Displaced thresholds on both ends reduce usable LDA/TORA below the full published length (see [Briefing §7](index.md)) — apply a conservative contamination/wet-runway margin given the single-runway, no-redundancy environment. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty confirmed for our category-S types at LIME.

---

## 10. Gotchas

- **Single runway, no redundancy** — a runway-blocking event stops all departures at the field (real-world precedent: a 2024 tyre-debris runway closure).
- **Displaced thresholds on both ends** reduce usable declared distances below the full published runway length — verify current figures, don't assume full-length availability.
- **Terrain rises N/NE/E of the field** — avoid turning toward high ground on any non-standard or emergency-turn departure without a verified track.
- **Winter Po Valley radiation fog** can bring LVP conditions with limited warning — check current status before planning a departure in season.
- **Curfew/slot regime is unconfirmed** — do not assume a departure window near the edges of the operating day without direct AIP confirmation (see [Dispatch §4](dispatch.md)).
- **All published ATC frequencies here are tier-4 sourced** — cross-check against the current chart before relying on them operationally.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima and transition altitude.
- Clearance-delivery frequency and start-up/push-back procedure detail.
- NADP preference, LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- CTOT/slot-coordination detail (see Dispatch §4).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP Italia (ENAV eAIP) — AD 2 LIME index — https://www.nextdigital.it/apps/aip/browse/ad?language=en (retrieved 2026-07-26). *Primary source of record; app-gated portal did not return fetchable field-level content this pass.*
- SkyVector — https://skyvector.com/airport/LIME/Bergamo-Orio-Al-Serio-Airport (retrieved 2026-07-26). *Runway/displaced-threshold data, communications.*
- Aeroclub Bergamo — LIME/BGY Familiarisation (English version) — https://www.aeroclub.bg.it/LIME_ENG.pdf (retrieved 2026-07-26). *Terrain/MSA and shared-aerodrome traffic corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
