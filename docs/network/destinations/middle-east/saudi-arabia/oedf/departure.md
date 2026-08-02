# OEDF — King Fahd Intl · Departure Page

**OEDF / DMM** · Dammam, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OEDF Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **34L** preferential/primary instrument runway; 34L/34R used in calm wind — otherwise per wind |
| Config logic | Preferential-runway rule (34L) plus wind |
| Transition altitude | 13,000 ft |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-coordination regime identified |
| De-icing on departure | **NIL** — not provided |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi with Ground/Apron on the day; if operating from an Apron 2 Code F stand (1 or 3), expect exclusive taxiway use (P1/P2) for the duration of the stand occupancy.
- **Hot spots / tight taxiways:** 🟥 A designated **hotspot at the TWY Romeo–Juliet 3 intersection** near RWY 16L/34R (runway-incursion risk; stop bars/signage installed). **Stands 19, 20, 21 are not visible from the tower** — extra vigilance on push-back/taxi from those positions.
- **Runway crossings / read-back-required points:** Not specifically identified beyond standard ATC crossing instructions.
- **Low-vis taxi caveats:** Low-vis procedure applies when RVR < 550 m or surface vis < 800 m — one movement at a time, follow-me on request. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY 34L is the designated preferential/primary instrument runway**; 34L/34R is used in calm-wind conditions; otherwise Dammam Approach assigns per wind.
- **By departure direction:** No specific directional preference beyond the 34L preference identified.
- **Noise / preferential-runway program:** Below 10,000 ft, turbine aircraft max 200 KT in the circuit, 250 KT elsewhere unless ATC directs otherwise.
- **Interaction with arrivals:** Standard two-parallel-pair dependent/independent operations under Dammam Approach; a local GA training circuit operates east of RWY 16L/34R — be aware of concurrent traffic in that sector.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV SID / conventional SID (per runway end) 🟧 | 16R / 34L / 16L / 34R | Not confirmed this pass | Radar Vector SID also published for RWY 34L-34R |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC instruction; 250 KIAS below FL100 (200 KT in the circuit below 10,000 ft) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** None identified beyond the circuit-speed restriction above (§3). 🟧
- **Early turn / altitude constraints:** Published per SID — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant obstacles identified — extremely flat coastal-plain terrain, not a close-in-terrain field.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Low-vis procedure triggers at RVR < 550 m or surface vis < 800 m — one arrival/one departure at a time, all departures from full runway length. 🟧
- **De-icing:** **NIL** — not provided; non-issue given the desert/Gulf-coast climate.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No discrete Clearance Delivery frequency was found in the retrieved AIP extract — likely handled on Ground or Tower; confirm locally. 🟧
- **Frequency sequence:** **Ground Control 121.650 (East)/121.750 (West) → Dammam Tower 124.350 (West)/118.050 (East) → Dammam Approach 126.300 (Upper)/126.100 (Lower)/125.000 (ARR/DEP).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination regime identified. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 4,000 m on both pairs (with a 120 m stopway giving 4,120 m ASDA) is non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 75 ft; extreme summer heat (AIP reference temperature 45.2°C, record ~51°C) is a genuine performance consideration despite the sea-level elevation.
- **Contamination / wet-runway:** Not a seasonal factor at this desert field.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length limitation for any home-fleet type at OEDF; note the field is Code E-capable throughout with only Apron 2 Stands 1/3 individually rated Code F.

---

## 10. Gotchas

- **RWY 34L is the preferential/primary instrument runway** — expect this assignment in calm-wind conditions.
- **TWY Romeo–Juliet 3 intersection** near RWY 16L/34R is a designated runway-incursion hotspot — brief before ground movement there.
- **Stands 19, 20, 21 are not visible from the tower** — extra vigilance on push-back/taxi.
- **Summer reference temperature 45.2°C** (record ~51°C) — factor density altitude into the takeoff performance calculation on hot days.
- **Summer shamal winds/dust** can arrive with limited notice — check SIGMET/dust advisories before departure in season.
- Concurrent GA/training-circuit traffic operates east of RWY 16L/34R.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- Clearance Delivery frequency/procedure.
- EOSID/engine-out procedure detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM if applicable, current Middle East conflict-zone/overflight bulletins. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **GACA/SANS eAIP, AD 2 OEDF**, AIRAC AMDT 06/24 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEDF%20DAMMAM%20-%20KING%20FAHD%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
