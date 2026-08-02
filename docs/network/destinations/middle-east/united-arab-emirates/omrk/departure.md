# OMRK — Ras Al Khaimah Intl · Departure Page

**OMRK / RKT** · Ras Al Khaimah, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OMRK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **16 or 34** — single runway, wind-driven, no crosswind alternative |
| Config logic | Wind-only; RWY 34 is generally preferred where within limits since it is the field's sole precision-approach runway (relevant to a return/diversion scenario) |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | None published; the **PPR regime** (2200–0800 local, Dispatch §4) is the operative constraint rather than a CTOT/flow program |
| De-icing on departure | **NIL** |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Stands 1–19, Tower routes traffic via Taxiways **Sierra, November, Loop A, Loop B, Kilo, Lima** or **Mike** to the assigned RWY 16 or 34 threshold (Briefing §7/§13) — confirm the exact routing with Tower on the day.
- **Hot spots / tight taxiways:** None independently confirmed in reachable sources — confirm current chart. 🟧
- **Runway crossings / read-back-required points:** Not independently confirmed — single-runway field, so crossing conflicts are limited to taxiway/runway intersections rather than a parallel-runway crossing scenario.
- **Low-vis taxi caveats:** Not confirmed. 🟧 No SMGCS/low-vis taxi routing detail found in reachable sources.

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 16/34 — wind is the only selection variable; there is no crosswind-runway alternative at this field.
- **By departure direction:** Not applicable beyond the runway's fixed 164°/344° orientation.
- **Noise / preferential-runway program:** None published — the operator states "No Restrictions are in place" for aircraft noise (Briefing §12). 🟧 Not independently cross-checked against a primary AIP source.
- **Interaction with arrivals:** Single runway — departures and arrivals share the same runway sequentially; no simultaneous-parallel consideration exists at this field.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research 🟧 | 16 / 34 | The close-in Hajar Mountains terrain to the east may drive a non-standard climb-gradient or turn requirement, particularly off RWY 34 — verify on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** None published/mandated — the operator's own "No Restrictions" noise statement (Briefing §12) suggests no dedicated NADP regime exists at this field, but this is not independently cross-checked against a primary AIP source. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify constraints on the current chart, with particular attention to any turn restriction protecting the eastern high ground.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** The **Hajar Mountains** (Jebel Jais, ~1,934 m/6,345 ft) lie close to the east of the field and are the standing obstacle consideration for any engine-out routing off RWY 34 in particular — see [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧
- **De-icing:** **NIL** — not provided/required in this climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No separate Delivery frequency is published for this field (Briefing §8) — expect clearance to be issued by **Ras Al Khaimah Tower (118.250)**. 🟧
- **Frequency sequence:** **Tower 118.250 (H24, clearance + taxi + take-off — no separate aircraft Ground frequency; 121.600 is vehicles only) → Ras Al Khaimah Approach/Radar 124.000** (Radar service Sun–Thu 0800–1400 local, extendable by arrangement; **Approach Procedural service outside those hours**, including the Fri–Sat weekend). Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No CTOT/slot regime published; the **PPR regime** (2200–0800 local) is the operative overnight constraint rather than a flow-managed slot system (Dispatch §4).

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 16/34 (3,760 m, ARC 4E) is generically non-limiting for narrowbody types and most widebody at moderate weights; no K Global type is currently validated here (not in VAMSYS). **Intersection departures reduce TORA substantially** — down to ~1,566 m from the shortest RWY 34 intersection — confirm a full-length departure is assigned unless a specific intersection clearance and matching performance calculation are in hand.
- **Density altitude / temperature:** Non-issue structurally at 102 ft elevation; summer Gulf heat is a seasonal density-altitude consideration per regional climatology, not an extreme driver at this elevation.
- **Contamination / wet-runway:** No seasonal contamination/braking-action data confirmed this pass — hot, largely dry climate makes this a low-probability consideration. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no K Global type is presently validated at this field; treat any future assignment as requiring a fresh performance check against the runway/intersection data in §7 of the Briefing.

---

## 10. Gotchas

- **RWY 16 has no precision approach** — expect RWY 34 preference in marginal weather, subject to tailwind limits (confirm against type limits).
- **Ground (121.600) is for vehicles only** — aircraft use Tower for taxi guidance, not a separate ground frequency.
- **No Delivery frequency is published** — obtain clearance from Tower.
- **PPR is required for any operation between 2200–0800 local** — this is not a walk-up field overnight; confirm Landing Permission status before planning a late-night departure.
- **Approach/Radar service is published Sun–Thu 0800–1400 local only** (extendable) — expect procedural technique outside these hours, including the entire Fri–Sat weekend.
- **The Hajar Mountains lie close east of the field** — respect the MSA and current-chart terrain data; do not cut a departure turn short toward high ground.
- **Intersection take-offs reduce TORA substantially** — verify the assigned departure point (full-length vs. a named intersection) before committing a performance calculation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics per runway.
- Take-off minima / LVTO minima exact figures.
- Transition altitude.
- Start-up/clearance-delivery procedure detail (assumed Tower, not independently confirmed).
- NADP existence/preference — operator states no noise restriction, not independently AIP-cross-checked.
- EOSID/engine-out procedure detail per runway.
- Hot spots/tight-taxiway detail on the taxiway network (Sierra/November/Loop A/Loop B/Kilo/Lima/Mike).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), PPR/Landing-Permission status if operating 2200–0800 local, current radar-vs-procedural control status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Ras Al Khaimah International Airport (airport operator) — "Operating Rules and Procedures" (runway/declared-distance data, ATS communications, PPR/radar-hours policy) — https://www.rakairport.com/operations.html (retrieved 2026-07-25).
- GCAA — eAIP AD 2 OMRK (current AIRAC cycle) — https://www.gcaa.gov.ae/en/ais/AIPHtmlFiles/AIP/Current/AIRACs/2026-P02/html/eAIP/AD-2.OMRK-en-GB.html (identified 2026-07-26; page renders via a JavaScript frameset not reachable via a standard fetch — content not independently extracted this pass).
- OurAirports — https://ourairports.com/airports/OMRK/ (retrieved 2026-07-25). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
