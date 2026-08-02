# KATL — Hartsfield-Jackson Atlanta International · Departure Page

**KATL / ATL** · Atlanta, Georgia, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [KATL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **08R/26L and 09L/27R** primarily, per published preferential logic; RWY 10/28 assigned per flow |
| Config logic | Wind/flow-driven; preferential-runway program biases departures to 08R/26L and 09L/27R, arrivals to 08L/26R and 09R/27L `[FAA AIP]` |
| Transition altitude | 18,000 ft MSL (US-wide fixed value, not field-specific) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No formal slot scheme found; ATFM/ground-delay/EDCT-style programs common in convective weather 🟧 |
| De-icing on departure | Available — season roughly Nov–Mar; pad specifics not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Concourse F/E, Ground routes toward the assigned departure runway (typically 08R/26L or 09L/27R per preferential logic, or 10/28 per flow); confirm the exact routing with Ground/coded-taxi-route phraseology on the day. RWY 09L departures can expect an intersection option from TWY M2 (runway remaining 11,440 ft TORA/TODA, 10,780 ft ASDA); RWY 27R departures during TWY W operations can expect intersection options from TWY LB (11,040 ft TORA/TODA, 12,140 ft ASDA) or TWY LC (10,810 ft TORA/TODA, 11,910 ft ASDA) `[FAA AIP General Remarks]`.
- **Hot spots / tight taxiways:** 🟥 Publicly-indexed FAA hot spots at **TWY C/D–RWY 08L-26R** and **TWY C/D–RWY 08R-26L** (wording not independently re-verified against the primary Chart Supplement PDF this pass 🟧). **Wingspan-based restrictions directly affect the K Global A388**: TWY V (>171 ft restricted), TWY W (>171 ft wingspan and/or tail height >45 ft restricted), TWY F east of Ramp 5N/west of TWY D (Group VI, >214 ft, restricted), and mandatory centerline adherence on TWY L/M, E/F, SC/SJ (between SG and R) whenever a >214 ft-wingspan aircraft is on the field — plan the A388's taxi route with these in mind `[FAA AIP General Remarks]`.
- **Runway crossings / read-back-required points:** The FAA AIP explicitly flags a standing requirement to **read back all runway-holding instructions** at this field; do not cross any runway without an explicit ATC clearance.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would apply during any winter fog/ice event; the field has airport surface detection equipment (ASDE) supporting ground-movement monitoring. Follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Config selection is wind/flow-driven; the published preferential-use program is the default absent contrary ATC instruction (§1).
- **By departure direction:** Not independently confirmed by cardinal direction this pass — expect ATC/SID assignment to determine the departure runway rather than a fixed direction-to-runway rule. 🟧
- **Noise / preferential-runway program:** Preferential-runway logic favours **08R/26L and 09L/27R for departures**, **08L/26R and 09R/27L for arrivals**, with 10/28 used per flow `[FAA AIP General Remarks]`. This is the field's noise/traffic-management logic rather than a dedicated per-SID NADP mandate.
- **Interaction with arrivals:** Departures interact with the continuous arrival stream on the adjacent parallel(s) and with runway-crossing traffic given the closely-spaced-parallel geometry (§Briefing §3.2) — expect sequencing/crossing instructions.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| PENCL, PLMMR, VRSTY, POUNC, VARNM, JACCC, SMLTZ, KAJIN, PADGT, PHIIL, BANNG, NASSA, SMKEY, GAIRY, HAALO, CUTTN (RNAV) | Per current AIRAC | Gradient/equipage not confirmed this pass 🟧 | Publicly-indexed names — not independently FAA-source-confirmed; verify current-AIRAC list |
| "ATL1" (non-RNAV) | Per ATC assignment | N/A — radar vectors to first fix | Fallback for aircraft that cannot fly an RNAV SID |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial altitude per clearance (commonly reported around 10,000 ft pending further climb clearance); accelerate to 250 KIAS without delay per 14 CFR 91.117 once permitted. Confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** No dedicated per-SID NADP found in reachable sources; noise management is handled through the field's Noise & Operations Monitoring System (NOMS) programme and the preferential-runway logic rather than a mandated NADP1/2 profile. 🟧
- **Early turn / altitude constraints:** Do not initiate turns or climb above the SID-published initial altitude without an ATC clearance — a commonly-noted pilot error at this field is premature turning or over-climbing the initial altitude; verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Rolling, low Piedmont terrain — no significant close-in terrain or obstacle drives an EO consideration at this field.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — verify current chart. 🟧
- **De-icing:** Available; season roughly **November–March**. Given the field's comparatively rare exposure to severe winter weather relative to a northern hub, treat any forecast winter-precipitation event as carrying disproportionate delay risk. Specific pad locations/holdover provisioning not confirmed this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Atlanta Clearance Delivery/Pre-taxi (CD/P) **118.1** (H24).
- **Frequency sequence:** **Delivery 118.1 → Ground 121.9 (RWY 08L/26R, 08R/26L) / 121.75 (RWY 09L/27R, 09R/27L) / 121.65 (RWY 10/28) → Tower 119.1 (08L/26R) / 125.325 (08R/26L) / 123.85 (09L/27R) / 119.3 (09R/27L) / 119.5 (10/28) → Atlanta Approach/Departure ("A80" TRACON), sector-specific frequency not independently confirmed this pass.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No formal slot scheme found; comply with any assigned ATFM/EDCT-style flow control, more likely in convective-weather periods than as a routine matter. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Shortest runway 9,000 ft, longest 12,390 ft (09L/27R) — non-limiting for any K Global type including the A388.
- **Density altitude / temperature:** Non-issue at 1,026 ft in a temperate/humid-subtropical climate — no hot-and-high penalty.
- **Contamination / wet-runway:** The rare winter ice event is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at KATL; the A388's operative constraint here is ground-movement wingspan restriction (§2), not takeoff performance.

---

## 10. Gotchas

- **Preferential-runway logic biases departures to 08R/26L and 09L/27R** — do not assume the arrival runways (08L/26R, 09R/27L) will be offered for departure.
- **Wingspan >213–225 ft (the K Global A388) triggers specific taxiway restrictions** on TWY V, W, F, L/M, A and SJ — brief the correct routing before any A388 departure.
- **Read back ALL runway-holding instructions** — an explicit, standing FAA requirement at this field.
- **Do not initiate a SID turn or exceed the published initial altitude without an ATC clearance** — a recognised common pilot error here.
- **Touch-and-go, low approaches and practice instrument approaches are prohibited on all runways.**
- **Rare winter ice events carry disproportionate delay risk** given the field's limited routine exposure to severe winter operations — do not under-plan a forecast ice event just because this is a Southeastern US field.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, RNP/gradient specifics and equipage requirements per runway.
- Take-off minima / LVTO RVR minima.
- NADP preference (if any is mandated beyond the general preferential-runway logic).
- EOSID/engine-out procedure detail per runway.
- Atlanta Approach/Departure ("A80") sector-specific frequency assignment.
- De-icing pad locations and holdover-fluid provisioning.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the wingspan-restricted taxiways), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3 — Aerodromes, AD 2 Georgia (KATL)** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_georgia.html (retrieved 2026-07-26). *Declared distances/intersection-departure figures, communications, general remarks (wingspan restrictions, preferential runway use, touch-and-go prohibition, readback requirement).*
- vZTL (Virtual Atlanta ARTCC, VATSIM) — Pilot Guide, ATL — https://www.ztlartcc.org/pilots/guide/atl (retrieved 2026-07-26). **Network-sim SOP, not regulatory** — cross-check for SID/initial-altitude discipline, common pilot-error notes, coded taxi routes.
- POSCON — Pilot Resources, KATL/ATL — https://forums.poscon.net/docs/pilots/nam/usa/katl/ (retrieved 2026-07-26). **Network-sim document, not regulatory** — RNAV SID name list cross-check, intersection-departure corroboration.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
