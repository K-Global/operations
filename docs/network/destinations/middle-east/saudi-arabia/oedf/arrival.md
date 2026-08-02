# OEDF — King Fahd Intl · Arrival Page

**OEDF / DMM** · Dammam, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OEDF Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **34L/34R** in calm wind (34L preferential/primary instrument runway); otherwise per wind |
| Usual approach | ILS CAT I on the assigned runway; RNP also available all four ends |
| Config logic | Preferential-runway rule (34L) plus wind |
| Transition level | By QNH; TA 13,000 ft |
| LVP trigger | RVR < 550 m or surface vis < 800 m — one movement at a time; no CAT II/III ILS capability published |
| Missed-approach driver | Airspace/traffic, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** RNAV STAR RWY 16L-16R and RWY 34L-34R (combined charts per pair) — exact designators not extracted this pass. 🟧
- **Selection by arrival direction / runway:** Dammam Approach assigns the STAR-to-runway transition for the active configuration, with **34L/34R preferred in calm wind**.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published gates are pointers only — verify chart; 250 KIAS below FL100 is the norm.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** No field-specific energy trap identified beyond standard radar-vectored arrivals.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 16L | ILS or LOC (IMBF), RNP | CAT I 🟩; no VOR chart found in the reachable index 🟧 | verify current chart |
| 34R | ILS or LOC (IABF), RNP, VOR | CAT I 🟩 | verify current chart |
| 16R | ILS or LOC (IWSR), RNP, VOR | CAT I 🟩 | verify current chart |
| 34L | ILS or LOC (IWMR), RNP, VOR | CAT I 🟩; preferential/primary instrument runway | verify current chart |

- **LVP triggers:** RVR < 550 m or surface vis < 800 m triggers a one-movement-at-a-time procedure; no CAT II/III ILS capability published — plan CAT I minima only.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Extremely flat Eastern Province coastal plain — no CFIT-relevant terrain.
- **Specific threats:** 🟧 A local GA training circuit (Oxford Saudi Flight Academy) operates east of RWY 16L/34R — maintain traffic awareness in that sector during arrival.
- **Airspace / traffic:** 🟩 Radar environment under Dammam Approach; a real but not saturated traffic environment.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published MAP and verify climb-gradient/turn on the current chart. Named holds **LOSAX** and **RESAN** are tied to specific runway ends.
- **Re-sequencing environment:** Standard radar re-sequencing under Dammam Approach; not a chronically saturated environment.
- **Go-around traps:** Awareness of the concurrent GA training circuit east of RWY 16L/34R during any re-approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 4,000 m on all four ends — ample for any K Global widebody, no displaced thresholds found.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟩 No displaced thresholds; no seasonal contamination factor at this desert field.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Confirm current gate/apron assignment with Ground/Apron on the day; **VAMSYS taxi-in time is not set for this field** `[VAMSYS mirror 2026-07-26]` 🟧.
- **Hot spots / tight taxiways:** 🟥 **TWY Romeo–Juliet 3 intersection** near RWY 16L/34R is a designated runway-incursion hotspot. **Stands 19, 20, 21 are not visible from the tower.**
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Apron 2 Stands 1/3 are individually Code F-rated; the field is broadly Code E-capable elsewhere.

---

## 9. Arrival frequency sequence

- **Sequence:** **Dammam Approach 126.300 (Upper)/126.100 (Lower)/125.000 (ARR/DEP) → Dammam Tower 124.350 (West)/118.050 (East) → Dammam Ground Control 121.650 (East)/121.750 (West).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Dammam Approach** serves the field's terminal approach; see [Middle East airspace brief](../../../../airspace/middle-east.md) for FIR context (Jeddah FIR/OEJD assumed, not independently AIP-confirmed 🟧).

---

## 10. Gotchas

- **RWY 34L/34R is preferred in calm wind** — expect this configuration absent a clear wind-driven reason otherwise.
- **No CAT II/III capability** — do not plan on autoland/low-vis minima at this field; CAT I only.
- **TWY Romeo–Juliet 3 intersection** is a designated runway-incursion hotspot near RWY 16L/34R.
- **Stands 19, 20, 21 are not visible from the tower** — extra vigilance on taxi-in to those positions.
- **Summer shamal winds/dust and extreme heat** can affect approach conditions in season — check current SIGMET/dust advisories.
- Concurrent GA/training-circuit traffic operates east of RWY 16L/34R.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact approach minima per runway (current AIRAC).
- Rapid-exit taxiway/vacate detail.
- **VAMSYS taxi-in figure is not set** — confirm once reconciled.
- Current gate/apron assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, current Middle East conflict-zone/overflight bulletins. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **GACA/SANS eAIP, AD 2 OEDF**, AIRAC AMDT 06/24 — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEDF%20DAMMAM%20-%20KING%20FAHD%20INTERNATIONAL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Saudi Arabia (GACA); K Global fields from live VAMSYS; 4-page pack. |
