# KLAX — Los Angeles International · Departure Page

**KLAX / LAX** · Los Angeles, California, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [KLAX Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **24L/25R** in Normal ("west") ops — the dominant configuration essentially year-round; **06R/07L** in East ops (wind ≥10 kt easterly); **RWY 25R only** for noise-abatement single-runway ops (0000–0630 local) |
| Config logic | Onshore westerly wind (prevailing): depart 24L/25R over the ocean. Offshore/Santa Ana easterly wind ≥10 kt: East ops, depart 06R/07L. Night (0000–0630): single-runway 25R. |
| Transition altitude | 18,000 ft MSL (US standard) — verify no local override on current chart |
| Take-off minima | Dedicated Take-Off Minimums/DVA chart published for LAX; exact figures not extracted this pass — verify current AIRAC 🟧 |
| CTOT / flow regime | No formal IATA slot control (FAA Level 2 schedule facilitation); practical flow management possible at peak/marine-layer-disrupted times 🟧 |
| De-icing on departure | Rarely required (Mediterranean/coastal climate); not confirmed as routine 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Tom Bradley International Terminal (TBIT), Ground routes toward the assigned departure runway per the LAX ATCT named taxi routes: **North Route** (via Twy C or B toward Twy N, hold short Twy N2, contact Ground 121.65) serves the north complex; **South Route** (via Twy E or D toward Twy P, hold short Twy C, contact Ground 121.75) and **Coastal Route** (via Twy Y, hold short Twy C, contact Ground 121.75) serve the south complex; **Sunset Route** (westbound on Twy C to Twy Y, hold short Twy Y, contact Ground 121.65) is also published. 🟧 Network-sim (VATSIM ZLA) reference — confirm actual routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **HS1** (RWY 24L at Twys V, W, Y — short distance between parallel runways; after landing 24R, manage taxi speed, expect hold short of 24L — relevant to departure ground movement crossing this area). **HS2/HS3** (RWY 25L at Twy F, and Twy F from Twy A — do not cross or proceed without an explicit ATC clearance). Separately: **Twy D between D7/D8** closed to wingspan >157 ft; wingspan **>214 ft** must contact LAX Airside Ops; outbound turn westbound from Twy D8 onto Twy D not permitted for wingspan >198 ft; left turn onto Twy C10 under power not authorized for wingspan >155 ft; **length >240 ft prohibited on Twys C7, C8, C9** between Twy C and Twy B.
- **Runway crossings / read-back-required points:** Departing aircraft routed between the north and south complexes cross via the Central Terminal Area crossfield taxiways (Taxiway C13, Taxiway R) — expect explicit crossing clearances and read-back requirements at every runway-adjacent hold line, particularly around HS1–HS3.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies during marine-layer conditions; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Prevailing onshore westerlies drive **Normal ops** — arrive 24R/25L, **depart 24L/25R** — as the dominant year-round configuration. **East ops** (wind ≥10 kt easterly, e.g. Santa Ana events) reverse this to arrive 06L/07R, **depart 06R/07L**.
- **By departure direction:** Over-ocean/westbound and northbound departures typically route via the **KYLOW ONE (RNAV)** over-ocean SID; southbound/eastbound over-ocean-adjacent departures via **STHBY ONE (RNAV)**. Northeast/east inland departures route via SIDs such as GARDY FOUR, ORCKA FIVE, OSHNN ONE, MUELR FOUR (see §4).
- **Noise / preferential-runway program:** All departures during over-ocean operations (i.e., off 24L/25R) must fly straight ahead until past the shoreline before any turn. **Noise-abatement single-runway ops (0000–0630 local): departures RWY 25R only.** Preferential Runway Use Program prefers the **inner runways (24L/25R) for daytime/evening departures**; during noise-sensitive hours (2200–0700) ATC maximizes use of the inboard runways 06R/24L and 07L/25R.
- **Interaction with arrivals:** Departures off 24L/25R run parallel to and interleaved with arrivals on the adjacent 24R/25L within each closely-spaced complex — expect continuous coordination and a heightened traffic scan even under radar/TCAS given the ≈700–800 ft runway separation.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| KYLOW ONE (RNAV) | Multiple | RNAV — likely RNP-1 equipage 🟧 | Over-ocean SID, westbound/northbound |
| STHBY ONE (RNAV) | Multiple | RNAV — RNP-1 🟧 | Over-ocean SID, southbound/eastbound |
| GARDY FOUR (RNAV) | Multiple | RNAV — RNP-1 🟧 | Eastbound, turbojets only |
| ORCKA FIVE (RNAV) | Multiple | RNAV — RNP-1 🟧 | Northeast, **NA between 2100–0700 local** |
| OSHNN ONE (RNAV) | Multiple | RNAV — RNP-1 🟧 | Northeast, alternate to ORCKA for noise/weight |
| MUELR FOUR (RNAV) | Multiple | RNAV — RNP-1 🟧 | Northwest, turbojets only |
| DARRK THREE (RNAV) | Multiple | RNAV — RNP-1 🟧 | |
| DOTSS TWO (RNAV) | Multiple | RNAV — RNP-1 🟧 | Eastbound, turbojets only |
| PNDAH TWO (RNAV) | Multiple | RNAV — RNP-1 🟧 | Southeast, turbojets only |
| SKWRL TWO (RNAV) | Multiple | RNAV — RNP-1 🟧 | Northwest, turboprops only |
| SUMMR TWO (RNAV) | Multiple | RNAV — RNP-1 🟧 | |
| TRTON THREE (RNAV) | Multiple | RNAV — RNP-1 🟧 | |
| WNNDY THREE (RNAV) | Multiple | RNAV — RNP-1 🟧 | |
| ZILLI FIVE (RNAV) | Multiple | RNAV — RNP-1 🟧 | |
| LADYJ FOUR (RNAV) | Multiple | RNAV — RNP-1 🟧 | Northbound, turbojets only, **NA 2100–0700 local** |
| MOOOS TWO (RNAV) | Multiple | RNAV — RNP-1 🟧 | Northwest, turboprops only |
| CATALINA EIGHT | Multiple | Conventional | South/southwest, East ops only |
| CHATY FIVE | Multiple | Conventional | North/northwest, non-turbojet, East ops only |
| GORMAN SEVEN | Multiple | Conventional | Northbound |
| LAXX ONE | Multiple | Conventional | Southeast/southwest, turbojet only |
| PERCH THREE | Multiple | Conventional | Westbound over the Pacific |
| SEAL BEACH EIGHT | Multiple | Conventional | Eastbound, non-turbojet only |
| SEBBY THREE | Multiple | Conventional | Northeast, alternate to LOOP departure |
| VENTURA EIGHT | Multiple | Conventional | Northwest/oceanic |

*No hot-and-high-style climb gradients expected at sea level; confirm gradient/equipage per SID on the current chart.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (US standard) and LAX Class B speed constraints — confirm current chart. Published obstacle departure procedures call for climb to 2,000 ft via runway heading (070 off 06L/R–07L/R; 250 off 24L/R and 25L/R) before the first turn — verify exact routing on the current chart. 🟧
- **Noise-abatement departure procedure (NADP):** LAX is a noise-sensitive airport; all westbound over-ocean departures (24L/25R) must fly straight ahead until past the shoreline before any turn — a hard noise-abatement constraint, not merely a preference. No specific NADP1/2 preference beyond this is published in reachable sources. 🟧
- **Early turn / altitude constraints:** Early turns before crossing the shoreline on westbound departures are specifically monitored by LAWA, which issues notifications for deviations. Published SID/ODP constraints — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics found in reachable sources beyond the standard obstacle departure procedures (climb to 2,000 ft via runway heading, then a climbing turn) — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in high terrain (coastal plain, 127 ft MSL); the nearest significant terrain is the Santa Monica Mountains (≈2,800 ft peaks), roughly 15+ NM north, clear of the standard departure corridors (Briefing §3.1). 🟩
- **Special DP / obstacle DP:** Published ODPs exist per runway direction (see §5) — obtain exact routing/altitudes from the current AIRAC chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies during marine-layer conditions; specific LVTO RVR minima not extracted this pass — verify current chart. 🟧
- **De-icing:** Rarely required (Mediterranean/coastal climate); not confirmed as a routinely provisioned departure service. Verify only for a rare winter cold event.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Los Angeles Clearance Delivery, 120.35/327.0 (Briefing §8).
- **Frequency sequence:** **Delivery 120.35/327.0 → Ground 121.4 (West)/121.65 (North complex)/121.75 (South complex) → Tower 120.95 (South complex)/133.9 (North complex) → SoCal Departure 124.3/125.2/263.025 (sector-specific)**; take the assigned frequency for each stage and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No formal IATA slot regime (FAA Level 2 schedule facilitation); read back and comply with any assigned flow-management restriction during peak/marine-layer-disrupted periods. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All four LAX runways are non-limiting for any K Global type at this sea-level field; **06L/24R (8,926 ft)** is the shortest and still ample. The south-complex pair (07L/25R 12,923 ft, 07R/25L 11,095 ft) is effectively unlimited for our fleet.
- **Density altitude / temperature:** Non-issue at 127 ft MSL, mild coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Rare; occasional winter rain. Grooved surfaces on all runways mitigate. Not a routine consideration.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-elevation or field-length performance penalty for any K Global type at LAX; the operative watch-item is ground-movement wingspan/length restrictions (§2), not takeoff performance.

---

## 10. Gotchas

- **HS1 — after landing/taxiing near RWY 24L via Twys V/W/Y, manage taxi speed and expect to hold short** — the north-complex runways are only ≈700 ft apart.
- **HS2/HS3 — never cross RWY 25L via Twy F, or proceed onto Twy F from Twy A, without an explicit ATC clearance.**
- **All westbound over-ocean departures (24L/25R) must fly straight ahead until past the shoreline before any turn** — a monitored noise-abatement requirement, not just good practice.
- **Confirm the active runway configuration on ATIS before pushback** — Normal ops (depart 24L/25R), East ops (depart 06R/07L, wind ≥10 kt easterly), and the 0000–0630 noise-abatement single-runway plan (depart RWY 25R only) are materially different ground/departure pictures.
- **Wingspan/length taxiway restrictions are pervasive for Code E/F aircraft** — Twy D (D7/D8) >157 ft, >214 ft contact Airside Ops, Twy D8 outbound turn >198 ft, Twy C10 left turn >155 ft, length >240 ft on Twy C7–C9 — confirm the ground route with Ground/Ramp before pushback on every widebody departure.
- **Aircraft use minimal power taxiing near terminals** — blast-hazard remark, particularly noted near the American Eagle terminal area.
- **Marine-layer fog (strongest May–Jul mornings) can affect low-vis taxi and departure release even after a clean overnight METAR** — check the current trend, not just the last observation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Take-off minima / DVA / ODP exact figures — chart published but figures not extracted this pass.
- LVTO RVR minima — not confirmed.
- Start-up/push-back procedure (cross-bleed/APU notification, mandatory vs. self-manoeuvre) — not confirmed.
- NADP preference beyond the shoreline-turn requirement — not confirmed.
- SID RNP/gradient/equipage per procedure — assumed RNP-1 for RNAV SIDs, verify on chart.
- Named ATCT taxi routes (North/South/Coastal/Sunset) — sourced to a VATSIM network-sim reference, not independently confirmed against a primary LAWA/FAA ground-movement chart.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), current runway configuration, flow-management status, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Chart Supplement (d-TPP), Southwest volume, AIRAC cycle 2607, eff. 2026-07-09** — SID/DP index, communications, remarks (wingspan/length taxiway restrictions, Hot Spot references, over-ocean/shoreline noise-abatement note) — mirrored via SkyVector, https://skyvector.com/airport/KLAX (retrieved 2026-07-26).
- AirNav — KLAX — https://www.airnav.com/airport/KLAX (retrieved 2026-07-26). *Runway dimensions and Clearance/Ground/Tower/Departure frequencies.*
- **Los Angeles ARTCC (ZLA) — VATSIM division** — https://laartcc.org/airport/KLAX (retrieved 2026-07-26). *Network-sim doc, **not regulatory** — SID routing detail, named ATCT taxi routes, ODP text, and the Normal/East/noise-abatement runway-configuration logic used for the runway/SID selection logic here; content matched the FAA Chart Supplement data on every point checked.*
- Los Angeles World Airports (LAWA) — Rules and Regulations, Section 13 (Noise Abatement) — https://www.lawa.org/-/media/lawa-web/lawa-rules-and-reg/lax-rules/section-13---noise-abatement.ashx (retrieved 2026-07-26). *Over-ocean shoreline-turn requirement.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
