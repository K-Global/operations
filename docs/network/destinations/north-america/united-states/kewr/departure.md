# KEWR — Newark Liberty International · Departure Page

**KEWR / EWR** · Newark, New Jersey, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [KEWR Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/flow-program status are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | No single published preferential runway; **04L/04R** or **22R/22L** depending on wind/ATC flow; **11/29** used less frequently | 
| Config logic | Wind- and ATC-flow driven, coordinated with the shared JFK/LaGuardia traffic flow under Philadelphia TRACON Area C |
| Transition altitude | 18,000 ft MSL (fixed US nationwide value) |
| Take-off minima | Published per current Chart Supplement — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | **FAA administrative rate-cap order** (currently 72 combined arrivals+departures/hour through 24 Oct 2026); routine ATC ground-delay-program exposure |
| De-icing on departure | Available — season typically Nov–Mar |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the assigned terminal (Terminal B or the Terminal C-3 international concourse for a widebody international departure), Ground/Ramp routes toward the assigned departure runway per the active configuration; confirm the exact taxi with Ground/Ramp on the day. When RWY 04R/L is the active configuration, aircraft parked at Terminal A can expect to enter the ramp via TWY A8 unless otherwise advised by ATC; when RWY 22L/R is active, expect TWY A10 or A12.
- **Hot spots / tight taxiways:** 🟥 **TWY EE** (between RWY 4R-22L and RWY 11-29) closed to wingspan >171 ft; **TWY Z5** closed to wingspan >118 ft; **TWY Z** (between Z2/Z4, and east of TWY U), **TWY A** (between AA and the ramp), and **TWY A11** (west of TWY A) all carry a 17 kt/20 mph speed restriction or closure for wingspan >171 ft; the taxiways ringing the "ballpark" parking area (Y, S, K, B, U) carry the same restriction; aircraft with wingspan >118 ft are prohibited from turning south on TWY R from TWY B1. Verify current applicability for any Code F tail.
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions at active-runway crossings given the high-density, multi-runway configuration in use at any given time.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies in winter fog/nor'easter conditions; ASDE-X surface surveillance is in use fleet-wide — operate transponders with altitude-reporting mode and ADS-B (if equipped) enabled on all airport surfaces. Follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No formally published preferential runway; the active configuration (04-pair or 22-pair) is set by wind and by the coordinated flow requirements of the shared New York-area airspace (JFK/LaGuardia) under Philadelphia TRACON Area C.
- **By departure direction:** RWY 11/29 sees comparatively less use than the two parallel pairs; RWY 29 in particular has no ILS and is primarily an arrival-oriented runway end for visual/RNAV approaches (see Arrival page) — confirm current departure-runway assignment with ATC.
- **Noise / preferential-runway program:** No formally published noise-preferential runway program identified in reachable sources (Port Authority terms state "preferential runways — none," sourced 2011) 🟧; the field is designated a "Noise Sensitive Airport, 24 hours" with a historical departure noise-monitor limit (~112–112.9 PNdB) — see Briefing §12.
- **Interaction with arrivals:** Continuous high-density parallel-runway operations mean departures interact closely with the concurrent arrival stream on the reciprocal/adjacent runway pair; expect ATC sequencing workload during banks.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| DEVIL ONE | Per current chart | Conventional SID — verify gradient/routing on current chart | Current as of 2026-07-09 effective Chart Supplement cycle 🟧 |
| LIBERTY FIVE | Per current chart | Conventional SID — verify gradient/routing on current chart | 🟧 |
| NEWARK FIVE | Per current chart | Conventional SID — verify gradient/routing on current chart | 🟧 |
| PORTT FOUR (RNAV) | Per current chart | RNAV SID — verify RNP/gradient equipage on current chart | 🟧 |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC instruction; 250 KIAS below 10,000 ft MSL (14 CFR 91.117) applies once released from any SID speed restriction.
- **Noise-abatement departure procedure (NADP):** No specific NADP1/NADP2 fleet-wide mandate confirmed in reachable sources for KEWR — apply operator/type standard NADP unless a charted procedure states otherwise. 🟧 The field's "Noise Sensitive Airport, 24 hours" designation and community noise-monitor programme (Briefing §12) are the underlying drivers for any noise-routing constraint on individual SIDs.
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal Meadowlands — no significant close-in terrain. FAA obstacle data lists only close-in man-made obstacles per runway end (a 65 ft tree ~1,926 ft from RWY 04L; a 28 ft pole near RWY 22R; a 30 ft antenna near RWY 22L) — factor into any engine-out climb-path assessment per runway.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Published per current Chart Supplement takeoff-minima page; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Available; season typically Nov–Mar. Specific de-icing pad locations/geography not confirmed in reachable sources 🟧; the Port Authority maintains substantial field-wide winter-readiness resources (reported for a representative storm event: 500 tons sand, 500 tons salt, 80,000 gallons liquid anti-icer, 47 pieces of snow-removal equipment). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Newark Clearance Delivery **118.85** (H24); **CPDLC departure-clearance service available** — a confirmed field feature.
- **Frequency sequence:** **Delivery 118.85 → Ramp 132.45 (Port Authority) → Ground 121.8/126.15 → Tower 118.3/134.05/257.6 (within 6.5 NM) → Newark Departure 119.2/379.9** (or the assigned Philadelphia TRACON Area C sector frequency — 127.6/128.55/132.7/132.8/379.9, sector-specific). Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No EU-style slot/CTOT system; comply with the **FAA administrative rate-cap order** (currently 72 combined arrivals+departures/hour through 24 Oct 2026) and any ATC ground-delay-program (EDCT-style) assignment issued for the flight. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 04L/22R (11,000 ft) and RWY 04R/22L (9,999 ft) are non-limiting for any K Global type; RWY 11/29 (6,725 ft) is adequate for narrowbody and most widebody departures at typical weights — verify per type/weight.
- **Density altitude / temperature:** Non-issue at 18 ft elevation, temperate Northeast-US climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter nor'easter/de-icing season (Nov–Mar) is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at KEWR; the standing consideration for Code F types is the wingspan-restricted taxiway network (§2).

---

## 10. Gotchas

- **No single published preferential departure runway** — confirm the active configuration with ATC; it swaps between the 04-pair and 22-pair based on wind and coordinated NY-area flow.
- **RWY 29 has no ILS** and is primarily arrival-oriented for approach purposes — confirm current departure-runway assignment rather than assuming symmetry with its arrival role.
- **Wingspan-restricted taxiways** (TWY EE, TWY Z5, TWY A/AA, TWY R at B1, and the ballpark-area taxiways) — verify current routing for any Code F tail before pushing back.
- **ATC-driven ground-delay programs are routine at this field**, not exceptional — the FAA's administrative rate-cap order and the ongoing Philadelphia TRACON Area C transition make flow-driven departure delay a standing planning assumption, not an edge case.
- **CPDLC departure clearance is available** — use it where equipped to reduce delivery-frequency congestion during peak banks.
- **De-icing pad assignment/queuing** in the Nov–Mar season is a recognised commercial delay-risk driver — confirm current pad status before a winter departure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway (four SID names identified this pass; gradient/equipage detail not obtained).
- Take-off minima / LVTO RVR exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference (fleet-wide mandate not confirmed).
- EOSID/engine-out procedure detail per runway.
- De-icing pad locations and current-season throughput.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), current FAA flow-program/ground-delay status for Philadelphia TRACON Area C, de-icing status/pad assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Chart Supplement (Northeast volume, d-TPP), KEWR** — effective 2026-07-09 — via SkyVector: https://skyvector.com/airport/EWR/Newark-Liberty-International-Airport (retrieved 2026-07-26). *SID index, communications, taxiway wingspan-restriction remarks, obstacle data.*
- FAA Newsroom — "FAA Statements on Newark Liberty International Airport" — https://www.faa.gov/newsroom/faa-statements-newark-liberty-international-airport (retrieved 2026-07-26). *Rate-cap order, Philadelphia TRACON Area C.*
- Boeing Company — Newark Liberty International Airport noise-abatement reference sheet — https://www.boeing.com/content/dam/boeing/boeingdotcom/commercial/noise/newark.pdf (retrieved 2026-07-26). *Preferential-runway/noise-abatement status.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
