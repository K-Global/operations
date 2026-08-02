# EDDH — Hamburg · Departure Page

**EDDH / HAM** · Hamburg, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EDDH Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind-dependent, constrained by the crossing-runway geometry — only a compatible combination of **05/23** or **15/33** is active at a time 🟧 |
| Config logic | Wind/config-driven; the two pairs physically cross, so runway selection is mutually exclusive between pairs (see [Briefing §1](index.md)) |
| Transition altitude | **5,000 ft** MSL (German nationwide standard) — verify no local override on current chart 🟧 |
| Take-off minima | Not confirmed — verify current AIRAC 🟧 |
| CTOT / flow regime | No formal slot-coordination regime confirmed for Hamburg in reachable sources (unlike EDDB) — verify on the OFP 🟧 |
| De-icing on departure | Available (standard German winter climate); procedure/pad location not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm the exact taxi with Ground on the day; routing depends on the active runway combination (05/23 or 15/33). 🟧
- **Hot spots / tight taxiways:** 🟥 **Runway-crossing coordination at the taxiway intersection near G/B3** (crossing RWY 15/33) — do not cross without an explicit ATC release; do not assume a crossing release is included in a taxi clearance.
- **Runway crossings / read-back-required points:** Any taxi route traversing the "off" runway of the active pair requires an explicit ATC runway-crossing release — brief this on every departure, not just when a crossing is anticipated.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing expected in autumn/winter fog consistent with the field's CAT II/III environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-dependent; the two crossing runway pairs (05/23 NE–SW, 15/33 NW–SE) give reasonable crosswind flexibility, but a configuration change ahead of a frontal wind shift is a real possibility — monitor the ATIS wind trend (see [Briefing §3.3](index.md)).
- **By departure direction:** Not confirmed from a reachable source — verify current AIRAC. 🟧
- **Noise / preferential-runway program:** Not itemised in reachable sources beyond the general noise-sensitivity of the residential surroundings (see [Briefing §12](index.md)). 🟧
- **Interaction with arrivals:** The crossing-runway geometry means departures on one pair can require coordination with traffic on, or crossing, the other pair — this is the field's defining traffic/workload item (see [Briefing §3.2](index.md)).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 05 / 23 / 15 / 33 | Not confirmed — verify RNAV-1 equipage requirement on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources; residential proximity implies noise-preferential routing is likely, but no NADP variant is confirmed this pass. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** None — flat North German Plain at 53 ft elevation, no significant terrain (see [Briefing §3.1](index.md)).
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's autumn/winter fog risk and CAT II/III infrastructure on RWY 23; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Facilities expected available in the standard German winter climate; pad location(s)/procedure not confirmed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately confirmed — may be combined with Ground; verify locally (see [Briefing §8](index.md)). 🟧
- **Frequency sequence:** **Ground/Rollkontrolle 121.805 → Apron/Vorfeld 121.705 → Tower/Turm 121.28 → Hamburg Director 118.2 → Bremen Radar (Bremen ACC, EDWW) 134.25.** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md); all tier-4 sourced, treat as unconfirmed pending current-AIRAC cross-check.)
- **CTOT / slot handling:** No formal slot-coordination regime confirmed for Hamburg in reachable sources — verify current status on the OFP. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Both runway pairs (10,663 ft / 12,028 ft) are non-limiting for any K Global type even accounting for displaced thresholds (see [Briefing §7](index.md)).
- **Density altitude / temperature:** Non-issue at 53 ft elevation, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/slush/ice is the relevant seasonal consideration (see [Briefing §3.3](index.md)); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at EDDH; the field is expected to see narrow-body short/medium-haul equipment only.

---

## 10. Gotchas

- **Crossing-runway configuration (05/23 × 15/33)** — never assume a runway-crossing release is included in a taxi clearance; brief for a possible hold at the G/B3 taxiway intersection.
- **Hard night curfew 2300–0600 local, no extensions reported** — a late-day delay risks diversion, not a waiver; build buffer into the last rotation.
- **Displaced thresholds up to 1,464 ft (RWY 33)** — verify the correct LDA/TORA for the assigned end, not the physical runway length.
- **CAT II/III ILS is on RWY 23 only** — RWY 05's low-visibility capability is unconfirmed; do not assume equivalent minima on the reciprocal.
- **Field sits under Bremen Radar (Bremen ACC, EDWW), not Langen** — do not default to Langen-area assumptions when planning frequency/handoff expectations.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Departure-direction and noise-abatement-runway preference logic.
- NADP preference (variant not confirmed).
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Clearance-delivery frequency (may be combined with Ground).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. runway-crossing status at G/B3), CTOT/ATFM (if any), de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Hamburg Helmut Schmidt Airport (EDDH) runways & frequencies — https://ourairports.com/airports/EDDH/runways.html , https://ourairports.com/airports/EDDH/frequencies.html (retrieved 2026-07-25).
- VATSIM Germany Knowledgebase — EDDH Hamburg Airport (Bremen FIR/EDWW) — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddh-hamburg-airport (retrieved 2026-07-25). *Runway-crossing coordination procedure at the G/B3 intersection.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
