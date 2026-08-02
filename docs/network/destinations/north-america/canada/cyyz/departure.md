# CYYZ — Lester B. Pearson Intl · Departure Page

**CYYZ / YYZ** · Mississauga, Ontario, Canada · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [CYYZ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind/flow-dependent across the five-runway system; **Preferential Runway System** governs selection specifically in restricted hours (00:30–06:29) |
| Config logic | Dual-parallel-pair-plus-crosswind (05/23, 06L/24R–06R/24L, 15L/33R–15R/33L) CSPO geometry; wind/noise/flow driven |
| Transition altitude | 18,000 ft (Canadian domestic standard) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordinated Level 3; NAV CANADA flow management expected in peak/adverse conditions 🟧 |
| De-icing on departure | Available — Central Deicing Facility (CDF), engines-on, season typ. Oct–Apr/May |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From T1/T3, Ground/Apron routes toward the assigned departure runway per the day's configuration; confirm the exact taxi with Apron/Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **Taxiways D4/D5** (south of RWY 06L/24R) carry angled runway hold positions; **Taxiway K is uncontrolled** and restricted to aircraft with wingspan ≤ 41.15 m (135 ft) and Aircraft Load Rating ≤ 9.0 — do not plan a Code E/F routing across it without confirmation. During **CAT II/III arrivals on RWY 05, departures are restricted to taxiways W & Y** for aircraft with wingspan < 36 m — a direct interaction between low-vis arrival ops and departure ground routing.
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions given the five-runway CSPO layout — multiple runway crossings are routine at this field.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies in winter lake-effect/blowing-snow conditions; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Selection spans all five runways depending on wind component and flow; the crosswind runway (05/23) is the field's CAT III-capable low-vis primary.
- **By departure direction:** Not independently sourced this pass — confirm preferred departure runway/direction on the day's ATIS and flow plan. 🟧
- **Noise / preferential-runway program:** A formal **Preferential Runway System** applies specifically during restricted hours (00:30–06:29) to minimize residential noise impact; daytime selection also weighs noise alongside wind/capacity (see Briefing §12).
- **Interaction with arrivals:** The dual-parallel-pair-plus-crosswind geometry drives continuous dependent/independent parallel operations — Transport Canada's 2025 CSPO safety alert is the direct evidence of this complexity; expect close coordination between simultaneous arrival and departure streams.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | All five runways | Verify RNP/gradient requirement per SID on current chart — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below 10,000 ft (Canadian domestic norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not independently confirmed this pass; the field-wide Preferential Runway System is the primary noise-abatement mechanism during restricted hours (§3). 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat southern-Ontario lakeshore plain — no significant close-in terrain or obstacle consideration identified this pass.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's winter lake-effect/blowing-snow risk and CAT III infrastructure on RWY 05; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **Central Deicing Facility (CDF)** — six pads, engines-on operation, positioned after pushback and before taxi to the runway; average deice time < 5 min, total throughput < 14 min; season typ. Oct–Apr/May. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Toronto Clearance Delivery **121.300** (H24 assumed).
- **Frequency sequence:** **Delivery 121.300 → Apron/Ramp (South 122.070 / North 122.270 / Advisory 122.075) → Ground 121.900/121.650/119.100 → Tower 118.350/118.700 → Toronto Departure 127.575/128.800.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; flagged 🟧 pending live CFS cross-check.)
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated**; NAV CANADA flow management expected in peak/adverse conditions. Comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The two longest runways (05/23 3,389 m; 15L/33R 3,368 m) are non-limiting for any K Global type; the shorter crosswind pair (06R/24L 2,743 m; 15R/33L ≈2,591 m usable) should be checked per type/weight on hot or contaminated days.
- **Density altitude / temperature:** Non-issue at 569 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter lake-effect snow/blowing-snow/freezing-rain season is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type on the longest runway pair.

---

## 10. Gotchas

- **Five-runway CSPO (Closely Spaced Parallel Operations) environment** is the subject of a dedicated 2025 Transport Canada safety alert — brief for dependent/independent parallel departure sequencing and expect frequent runway crossings.
- **Displaced thresholds on RWY 05/23, 24R and 15R/33L** reduce usable distance below the full paved length — always use the runway-specific figure, not headline length.
- **During CAT II/III arrivals on RWY 05, departures are funnelled to taxiways W & Y only** (wingspan < 36 m) — a direct low-vis ground-routing constraint.
- **Taxiway K is uncontrolled and wingspan/ALR-restricted** — do not assume it is available for a Code E/F routing.
- **Restricted Hours Operating Policy 00:30–06:29** — a late-day departure delay risks non-compliance with GTAA's Preferential Runway System / Transport Canada's annual night-movement cap; build buffer into the last rotation.
- **Winter lake-effect snow/blowing snow can develop quickly** — confirm current CDF/deicing-pad status and LVP conditions before a winter departure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference (if any beyond the Preferential Runway System).
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Preferred departure runway/direction logic beyond the restricted-hours Preferential Runway System.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/flow status, CDF/deicing pad status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **NAV CANADA — Aeronautical Information Publications** — https://www.navcanada.ca/en/aeronautical-information/publications.aspx (retrieved 2026-07-26).
- Transport Canada — CASA 2025-06, CSPO Standards at CYYZ — https://tc.canada.ca/en/aviation/reference-centre/civil-aviation-safety-alerts/closely-spaced-parallel-operations-cspo-standards-procedures-toronto-lester-b-pearson-international-airport-cyyz-civil-aviation-safety-alert-casa-no-2025-06 (retrieved 2026-07-26).
- GTAA — Airport Traffic Directives (AVOP D-2023) — https://cdn.torontopearson.com/-/media/project/pearson/content/airport-employees/passes-and-permits/avop/airport-traffic-directives-avop-d-2023.pdf (retrieved 2026-07-26). *CAT II/III departure-taxiway restriction; Taxiway K/D4/D5 detail.*
- GTAA — "Aircraft deicing" — https://www.torontopearson.com/en/whats-happening/stories/aircraft-deicing-2021 (retrieved 2026-07-26). *CDF operation.*
- GTAA — Restricted Hours Operating Policy v4.1 — https://cdn.torontopearson.com/-/media/project/pearson/content/community/noise-management/pdfs/gtaa-restricted-hours-operating-policy-v4-1.pdf (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from NAV CANADA (CFS/CAP); K Global fields from live VAMSYS; 4-page pack. |
