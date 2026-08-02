# KEWR — Newark Liberty International · Arrival Page

**KEWR / EWR** · Newark, New Jersey, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [KEWR Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | No single published preferential runway; **04L/04R** or **22R/22L** depending on wind/ATC flow; **RWY 29** used for visual/RNAV approaches |
| Usual approach | ILS CAT II/III on 04R/22L where assigned; ILS/LOC on 04L/22R/11; **RNAV(RNP)/RNAV(GPS) or named visual only on RWY 29 — no ILS** |
| Config logic | Wind- and ATC-flow driven, coordinated with the shared JFK/LaGuardia traffic flow under Philadelphia TRACON Area C |
| Transition level | By altimeter setting; fixed US transition altitude 18,000 ft MSL |
| LVP trigger | Winter nor'easter/coastal-marsh fog dropping below CAT I minima — CAT II/III on 04R/22L is the standing mitigation 🟧 (exact RVR trigger not confirmed) |
| Missed-approach driver | Airspace/traffic density (shared multi-airport Class B environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** BRAND ONE (RNAV), FLOSI FOUR (RNAV), PENNS TWO, PHLBO FOUR (RNAV), SHAFF SEVEN, WILLIAMSPORT THREE — current as of the 2026-07-09 effective Chart Supplement cycle; re-verify on the live AIRAC before use.
- **Selection by arrival direction / runway:** STAR-to-runway assignment is made by Philadelphia TRACON Area C per the active configuration (04-pair or 22-pair) and coordinated NY-area flow; no single dominant configuration is published (unlike a prevailing-wind field).
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final for the 04R/22L or 04L/22R pair; RWY 29 arrivals transition to a named RNAV or visual approach (Bridge Visual, Stadium Visual) — verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional ATC flow speed control given the high-density, multi-airport environment and the FAA's active rate-management order.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Extended vectoring/holding is common in this airspace — brief an early-descent/holding contingency rather than assuming a direct profile.
- **Speed control:** STAR speed gates and 250 KIAS below 10,000 ft MSL (14 CFR 91.117); New York Class B speed restrictions apply.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (04-pair ↔ 22-pair swap ahead of a wind shift or ATC flow change) and holding/resequencing during winter weather or ATC flow-program events are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04L | ILS Z or LOC Z; GLS | SA CAT I/II published | verify current chart |
| 22R | ILS or LOC; GLS | Standard CAT I | verify current chart |
| 04R | ILS or LOC; GLS; RNAV(GPS) Y | **CAT II/III** 🟩 | verify current chart |
| 22L | ILS or LOC (SA CAT I; CAT II/III); RNAV(GPS) Z; GLS | **CAT II/III** 🟩 | verify current chart |
| 11 | ILS or LOC; GLS; RNAV(GPS) | Standard CAT I | verify current chart |
| 29 | RNAV(RNP) Y/Z; RNAV(GPS) T/W/X; Bridge Visual; Stadium Visual | **No ILS** — RNAV/visual only 🟧 | verify current chart; PAPI unusable 4° left of centreline |

- **LVP triggers:** Winter nor'easter and coastal/marsh fog events are the routine KEWR trigger — CAT II/III capability on 04R/22L is the standing mitigation. Exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat coastal New Jersey Meadowlands at 18 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 Two closely-spaced parallel runway pairs (04L/22R and 04R/22L) sustain continuous high-density dependent/simultaneous operations; wake turbulence from the adjacent parallel is a standing consideration. High volume of low-level helicopter traffic near the field (Kearny Heliport, ~3.5 NM NE) adds a visual-scan workload item below the Class B floor. RWY 29's Bridge/Stadium visual approaches track over the Passaic River/NJ Turnpike corridor and MetLife Stadium area — brief the visual reference points before accepting.
- **Airspace / traffic:** 🟥 Very high density under **Philadelphia TRACON Area C** (relocated from New York TRACON/N90 in 2024) in a Class B environment shared with JFK and LaGuardia — brief for re-sequencing and extended vectoring, especially during ATC flow-program events or marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal field) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a very high-density, multi-airport Class B radar environment under Philadelphia TRACON Area C — expect extended vectoring and possible holding before re-sequencing, particularly during an active FAA flow-management event or winter weather.
- **Go-around traps:** Traffic/config awareness on the parallel runway pair during the miss; low-level helicopter traffic near the field remains a factor even during a missed approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 04L **8,459 ft** · 22R **9,559 ft** (longest published) · 04R **8,809 ft** · 22L **8,205 ft** · 11 **6,725 ft** · 29 **6,501 ft** — all runways carry a **displaced threshold** (up to 2,541 ft on 04L); always plan from the published LDA, never physical runway length. The main pairs (04L/22R, 04R/22L) are ample for any K Global widebody; RWY 11/29 is adequate for narrowbody and most widebody arrivals at typical weights.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Ramp on the day. 🟧
- **Runway-excursion watch:** 🟧 Two EMAS beds are installed at runway departure ends (exact runway assignment not confirmed) — a signal of historically constrained runway safety areas; winter-contamination braking-action consideration applies in the Nov–Mar de-icing season (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to Terminal B or the Terminal C-3 international concourse per Ground/Ramp assignment (subject to gate confirmation — see Dispatch §2/§3); VAMSYS mirror gives a planning taxi-in time of **18 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟥 **TWY EE** closed to wingspan >171 ft; **TWY Z5** closed to wingspan >118 ft; **TWY Z**, **TWY A/AA**, **TWY A11**, and the "ballpark" parking-area taxiways (Y, S, K, B, U) all carry wingspan-based speed restrictions or closures; aircraft >118 ft wingspan are prohibited from turning south on TWY R from TWY B1. Taxi with vigilance, especially for any Code F tail.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal C-3 international concourse is the confirmed purpose-built widebody cluster; Terminal B gate assignment amid its redevelopment programme not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Newark Approach (Philadelphia TRACON Area C — 127.6/128.55/132.7/132.8/379.9, sector-specific) → Newark Tower (118.3/134.05/257.6, within 6.5 NM) → Newark Ground (121.8/126.15) → Ramp Control (132.45, Port Authority).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Philadelphia TRACON Area C** is the facility for Newark's terminal approach control (relocated from New York TRACON/N90 in 2024); **New York ARTCC (ZNY)** hands off en route inbound — see [North America Airspace brief](../../../../airspace/north-america.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent, and the Philadelphia TRACON transition remains an active FAA modernization effort as of 2026.

---

## 10. Gotchas

- **RWY 29 has no ILS** — if 29 is the landing runway, expect an RNAV(RNP)/RNAV(GPS) or named visual approach (Bridge Visual, Stadium Visual); brief the visual references in advance.
- **No single published preferential landing runway** — expect ATC to assign the 04-pair or 22-pair based on wind and the coordinated NY-area traffic flow; a late config swap is a real possibility.
- **High volume of low-level helicopter traffic** near the field (Kearny Heliport) — maintain a heightened visual scan on approach and during taxi-in.
- **Wingspan-restricted taxiways on taxi-in** — confirm current routing for any Code F tail before accepting a taxi clearance.
- **ATC flow-program-driven holding/vectoring is routine**, not exceptional, at this field given the ongoing Philadelphia TRACON Area C transition and the FAA's administrative rate-cap order — brief a holding/diversion contingency as standard practice, not just for weather events.
- **Winter nor'easter/fog events can drop the field below CAT I minima** — brief the CAT II/III plan (04R/22L) and a holding/diversion contingency in season.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (II/III split) confirmation and exact RVR/DH minima for 04R/22L.
- Exact LVP/CAT II-III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- EMAS runway-end assignment.
- Current gate assignment and taxi-in routing amid the Terminal B redevelopment transition.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status), ATIS config/wind trend, current FAA flow-program/ground-delay status for Philadelphia TRACON Area C. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Chart Supplement (Northeast volume, d-TPP), KEWR** — effective 2026-07-09 — via SkyVector: https://skyvector.com/airport/EWR/Newark-Liberty-International-Airport (retrieved 2026-07-26). *STAR/IAP index, runway/declared-distance data, communications, obstacle data.*
- airport-data.com — KEWR RWY 22L ILS facility record — https://airport-data.com/airport/EWR/ils/22L.html (retrieved 2026-07-26). *ILS ident/frequency corroboration.*
- FAA Newsroom — "FAA Statements on Newark Liberty International Airport" — https://www.faa.gov/newsroom/faa-statements-newark-liberty-international-airport (retrieved 2026-07-26). *Philadelphia TRACON Area C, 2025 outages, rate-cap order.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
