# KATL — Hartsfield-Jackson Atlanta International · Arrival Page

**KATL / ATL** · Atlanta, Georgia, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [KATL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **08L/26R and 09R/27L** primarily, per published preferential logic; RWY 10/28 assigned per flow |
| Usual approach | ILS/DME on the assigned runway (full ILS coverage on all ten runway ends) |
| Config logic | Wind/flow-driven; preferential-runway program biases arrivals to 08L/26R and 09R/27L, departures to 08R/26L and 09L/27R `[FAA AIP]` |
| Transition level | By ATC-assigned altimeter; transition altitude fixed at 18,000 ft MSL (US-wide) |
| LVP trigger | Not confirmed this pass — CAT II/III confirmed on 08L and 09R; RWY 10 carries a type-specific CAT III restriction 🟧 |
| Missed-approach driver | Airspace/traffic density (closely-spaced-parallel, high-volume TRACON environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Publicly-indexed RNAV STARs include **GNDLF, SITTH** (south/east-flow arrivals) and **HOBBT, JJEDI** (west-flow arrivals), reported among a set of 8 RNAV plus 3 non-RNAV STARs — not independently FAA-source-confirmed this pass. 🟧 Pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** The south/east-flow STARs (GNDLF, SITTH) and west-flow STARs (HOBBT, JJEDI) are reported as landing-direction-dependent — Atlanta Approach assigns the STAR-to-runway transition for the active configuration; non-RNAV-capable aircraft are vectored to conform to the same track.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final, consistent with the field's very high traffic density.
- **Speed / flow constraints on the STAR:** 250 KIAS below 10,000 ft MSL (14 CFR 91.117); tier-4 network-sim corroboration suggests ~210 kt on downwind and no less than 180 kt to the final approach fix absent other ATC instruction — not independently AIP-confirmed. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR altitude/speed gate; given the very high sequencing density, build in contingency for speed/altitude adjustments from Atlanta Approach.
- **Speed control:** STAR speed gates plus 250 KIAS below 10,000 ft MSL; expect ~210 kt downwind / ≥180 kt to the FAF per tier-4 corroboration. 🟧
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; confirm current chart.
- **Energy traps:** Late runway/config changes driven by a wind shift between the preferential arrival runways (08L/26R, 09R/27L) and the reciprocal/alternate set, and re-sequencing/holding during peak banks or convective weather, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08L | ILS/DME (HFW) | **CAT II/III confirmed** 🟩 | verify current chart |
| 08R | ILS/DME (ATL) | CAT category not confirmed 🟧 | verify current chart |
| 09L | ILS/DME (HZK) | CAT category not confirmed 🟧 | verify current chart |
| 09R | ILS/DME (FUN) | **CAT II/III confirmed** 🟩 | verify current chart |
| 10 | ILS/DME (OMO) | CAT II/III equipped; **CAT III not authorised for several types** (autopilot must be disconnected after touchdown for CAT II) 🟧 | verify current chart |
| 26L | ILS/DME (BRU) | CAT category not confirmed 🟧 | verify current chart |
| 26R | ILS/DME (GXZ) | CAT category not confirmed 🟧 | verify current chart |
| 27L | ILS/DME (FSQ) | CAT category not confirmed 🟧 | verify current chart |
| 27R | ILS (AFA) | No collocated DME published; CAT category not confirmed 🟧 | verify current chart |
| 28 | ILS/DME (PKU) | CAT category not confirmed 🟧 | verify current chart |

- **LVP triggers:** Exact RVR/trigger conditions not confirmed this pass. 🟧 PRM (Precision Runway Monitor) procedures are published for simultaneous close-parallel approaches to 09L/27R, 09R/27L and 10/28 given the closely-spaced-parallel geometry.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None of note. Rolling, low Piedmont terrain at 1,026 ft — no close-in high ground relevant to any arrival path.
- **Specific threats:** 🟥 **Closely-spaced parallel runways** (several pairs under 1,000 ft apart) sustain continuous high-density, parallel-dependent operations; PRM procedures manage simultaneous close-parallel approaches on 09L/27R, 09R/27L and 10/28. Wake from an adjacent parallel is a standing consideration during dependent operations.
- **Airspace / traffic:** 🟥 Very high density under **Atlanta TRACON ("A80")**, one of the largest/busiest in the US — brief for extended vectoring and re-sequencing, especially during peak banks or convective weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (rolling, low ground) — fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to a very high-density, closely-spaced-parallel-runway TRACON environment — expect extended vectoring and possible holding before re-sequencing, especially during a summer convective event.
- **Go-around traps:** Traffic/config awareness on the parallel set during the miss; runway-crossing traffic elsewhere on the field remains a ground-workload factor even where it does not directly affect the missed-approach path.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 08L 8,800 ft; 26R 8,500 ft; 08R/26L 9,999 ft; 09L 11,730 ft; 27R 11,890 ft; 09R/10/28 9,000 ft; 27L 8,865 ft — several runways carry meaningful LDA reductions against full runway length (most notably 09L, 660 ft less than TORA, and 27R, 500 ft less) — brief the correct published LDA for the assigned runway. 🟧 (not independently re-confirmed against current AIRAC)
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Tower on the day. LAHSO (Land and Hold Short) options are reported at 08L (hold short TWY B13, 8,490 ft available), 09R (TWY J, 8,627 ft), 26R (TWY H, 8,600 ft) and 27L (TWY P, 8,600 ft) per a network-sim source — acceptance is at commander's discretion and reported as valid only for US-based carriers; confirm applicability and current figures before accepting. 🟧
- **Runway-excursion watch:** 🟧 The 09L/27R LDA reductions (§4/Briefing §3.3) and the rare winter-ice contamination risk (Briefing §14) are the principal excursion-relevant items at this field.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in toward **Concourse F/E** (international) or the domestic concourses (T/A/B/C/D) per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **18 min** `[VAMSYS mirror 2026-07-26]`. Expect a clearance to join the taxiway system after crossing any inner runways, continuing toward the high-speed exit in the direction of the assigned parking area, and holding until an ATC crossing/taxi instruction is given.
- **Hot spots / tight taxiways:** 🟥 Publicly-indexed FAA hot spots at **TWY C/D–RWY 08L-26R** and **TWY C/D–RWY 08R-26L** (wording not independently re-verified this pass 🟧). **Wingspan-based restrictions directly affect the K Global A388** on taxi-in: TWY V (>171 ft restricted), TWY W (>171 ft wingspan/tail height >45 ft restricted), TWY F (Group VI, >214 ft, restricted east of Ramp 5N/west of TWY D), and mandatory centerline adherence on TWY L/M, E/F, SC/SJ whenever a >214 ft-wingspan aircraft is on the field — cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Concourse F is the confirmed Group VI/A380-capable cluster; specific K Global gate assignment not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Atlanta Approach/Departure ("A80" TRACON, sector-specific frequency not independently confirmed this pass) → Atlanta Tower 119.1 (RWY 08L/26R) / 125.325 (08R/26L) / 123.85 (09L/27R) / 119.3 (09R/27L) / 119.5 (10/28) → Atlanta Ground 121.9 (08L/26R, 08R/26L) / 121.75 (09L/27R, 09R/27L) / 121.65 (10/28).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Atlanta TRACON ("A80")** — one of the largest/busiest US TRACONs, sectorized across Atlanta/Macon/Columbus/Athens; **Atlanta ARTCC (ZTL)** hands off en route inbound — see [North America airspace brief](../../../../airspace/north-america.md). 🟧 Exact sector/frequency assignment is AIRAC/traffic-flow-dependent and not independently confirmed this pass.

---

## 10. Gotchas

- **Preferential-runway logic biases arrivals to 08L/26R and 09R/27L** — do not assume the departure runways (08R/26L, 09L/27R) will be offered for arrival.
- **Wingspan >213–225 ft (the K Global A388) triggers specific taxiway restrictions** on taxi-in — brief the correct routing before any A388 arrival.
- **Several runways carry meaningful LDA reductions against full runway length** (notably 09L and 27R) — confirm the published LDA for the assigned runway rather than assuming full-length landing distance.
- **Closely-spaced parallel runways** sustain continuous high traffic density — expect vectoring/holding, especially in convective weather or during a bank.
- **Do not cross any runway without an explicit ATC clearance**, and read back all runway-holding instructions — a standing FAA requirement at this field.
- **Rare winter ice events carry disproportionate risk** given the field's comparatively limited routine exposure to severe winter operations.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- CAT II/III sub-category confirmation for the eight runway ends not yet confirmed.
- Exact LVP/CAT III trigger RVR values, especially the RWY 10 type-specific restriction.
- Rapid-exit taxiway/vacate detail and current LAHSO distance table.
- Atlanta Approach/Departure ("A80") sector-specific frequency assignment.
- K Global gate/concourse assignment for taxi-in planning.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status on RWY 10 and the wingspan-restricted taxiways), ATIS config/wind trend, ATFM/ground-delay program status.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3 — Aerodromes, AD 2 Georgia (KATL)** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_georgia.html (retrieved 2026-07-26). *Runway/declared-distance data, communications, navaid idents, general remarks (wingspan restrictions, preferential runway use, readback requirement).*
- FAA Chart Supplement — Georgia section (aeronav.faa.gov) — ILS frequency cross-check (retrieved 2026-07-26).
- vZTL (Virtual Atlanta ARTCC, VATSIM) — Pilot Guide, ATL — https://www.ztlartcc.org/pilots/guide/atl (retrieved 2026-07-26). **Network-sim SOP, not regulatory** — arrival-speed/vectoring practice cross-check, runway-crossing/ASDE note.
- POSCON — Pilot Resources, KATL/ATL — https://forums.poscon.net/docs/pilots/nam/usa/katl/ (retrieved 2026-07-26). **Network-sim document, not regulatory** — STAR name list, LAHSO distance table, RWY 10 CAT III type-restriction cross-check.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
