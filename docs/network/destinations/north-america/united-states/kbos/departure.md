# KBOS — Boston Logan International · Departure Page

**KBOS / BOS** · Boston, Massachusetts, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [KBOS Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 15R** preferred by the noise-abatement program; actual assignment is wind/traffic-driven given the intersecting six-runway layout — confirm ATIS every time |
| Config logic | Wind-dependent (intersecting-runway geometry means the active configuration changes more often than at a simple parallel-runway field); noise-preferential program favours 15R when conditions allow |
| Transition altitude | 18,000 ft MSL (US standard) — not independently confirmed as field-specific 🟧 |
| Take-off minima | Published per FAA Takeoff Minimums/DVA chart — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No formal slot/CTOT regime confirmed; standard FAA ATFM ground-delay/ground-stop programs can apply in weather/flow events 🟧 |
| De-icing on departure | Available, seasonal (winter) — pad/provisioning specifics not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminal E (or the assigned domestic terminal), Ground routes toward the active departure runway per the wind-driven configuration; confirm the exact taxi with Ground on the day.
- **Hot spots / tight taxiways:** Named hot spots not confirmed in reachable sources this pass. 🟧 The FAA AIP confirms **ASDE-X (surface movement radar)** is in use, with a requirement to operate transponders (altitude-reporting mode) and ADS-B on all airport surfaces — itself a signal of a monitored, complex surface-movement environment consistent with the intersecting six-runway layout.
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions when routed across an intersecting runway pair, especially during a configuration change.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing would be expected in winter fog/snow conditions; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No single prevailing wind direction dominates at KBOS — the **intersecting six-runway layout** (04L/22R, 04R/22L, 09/27, 14/32, 15L/33R, 15R/33L) exists specifically because wind conditions vary enough to require multiple runway orientations; expect frequent configuration changes.
- **By departure direction:** Not confirmed as a fixed rule in reachable sources — runway/SID assignment follows the active configuration and ATC flow. 🟧
- **Noise / preferential-runway program:** **RWY 15R is the preferred takeoff runway** for noise abatement, reinforced by a night-preferential window (≈0500–1100Z / roughly 0000–0600 local). Massport/FAA actively encourage pilots to fly published **RNAV SID procedures** whenever possible as part of the airport's "Fly Quiet" goals, and specifically encourage aircraft with filed altitudes above 10,000 ft to file RNAV SIDs. A 2021 FAA/Massport/MIT-developed procedure change moved RWY 15R departures further north, away from densely populated areas near Hull, MA.
- **Interaction with arrivals:** The intersecting-runway geometry means departures and arrivals frequently share dependency relationships not seen at parallel-runway fields — expect coordinated crossing/sequencing instructions from Ground/Tower, particularly during a config change.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| BLZZR SIX (RNAV) | Per current chart 🟧 | Verify RNP/gradient on current chart | RNAV departure |
| BRUWN SEVEN (RNAV) | Per current chart 🟧 | Verify RNP/gradient on current chart | RNAV departure |
| CELTK SEVEN (RNAV) | Per current chart 🟧 | Verify RNP/gradient on current chart | RNAV departure |
| HYLND SEVEN (RNAV) | Per current chart 🟧 | Verify RNP/gradient on current chart | RNAV departure |
| LBSTA EIGHT (RNAV) | Per current chart 🟧 | Verify RNP/gradient on current chart | RNAV departure |
| PATSS SEVEN (RNAV) | Per current chart 🟧 | Verify RNP/gradient on current chart | RNAV departure |
| REVSS SIX (RNAV) | Per current chart 🟧 | Verify RNP/gradient on current chart | RNAV departure |
| SSOXS SEVEN (RNAV) | Per current chart 🟧 | Verify RNP/gradient on current chart | RNAV departure |
| WYLYY FIVE (RNAV) | Per current chart 🟧 | Verify RNP/gradient on current chart | RNAV departure |
| LOGAN FOUR | Per current chart 🟧 | Conventional (non-RNAV) | Verify current status/runway applicability |

*Massport/FAA specifically encourage use of the RNAV SIDs above for noise-abatement ("Fly Quiet") purposes — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below 10,000 ft MSL (US standard) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No single mandated fleet-wide NADP confirmed this pass. 🟧 The airport's noise-abatement emphasis is on **procedure/routing selection** (preferred RWY 15R, RNAV SID compliance, the 2021 northward-shifted RWY 15R track) rather than a published NADP1/NADP2 mandate.
- **Early turn / altitude constraints:** Published per SID — verify constraints, including the 2021 northward-shifted RWY 15R departure track, on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No high terrain (flat coastal site). The FAA AIP flags **boat obstacles** at varying distances from several runway thresholds (harbor traffic) and **numerous cranes on/near the airport** — brief obstacle awareness rather than terrain awareness. **EMAS beds** at DER 04L and DER 15R indicate constrained runway safety areas at those ends.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** CAT II/III ILS infrastructure exists on 04R and 33L (arrival-oriented); LVTO-specific minima/procedure for departure not confirmed this pass. 🟧
- **De-icing:** Available in season; Massport operates dedicated winter de-icing/snow-removal infrastructure, but specific pad locations, fluid type and holdover-time provisioning are not confirmed in reachable public sources. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Boston Clearance Delivery / Pre-taxi clearance **121.650** (H24).
- **Frequency sequence:** **Delivery 121.650 → Ground 121.750/121.900 → Tower 124.725 (helicopters)/132.225 (East)/128.800 (West) → Boston Departure (A90) 133.000.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No formal slot/CTOT regime confirmed for KBOS; comply with any FAA ATFM ground-delay/EDCT-equivalent assignment issued during weather or flow events. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 04R/22L (10,006 ft) and 15R/33L (10,083 ft) are non-limiting for any K Global type; RWY 04L/22R (7,864 ft) and 09/27 (7,001 ft) are also ample for typical departure weights. RWY 14 is **takeoff-only** at 5,000 ft — verify performance if ever assigned.
- **Density altitude / temperature:** Non-issue at 19 ft elevation — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter nor'easter/snow-ice season is the relevant seasonal consideration (§7); no specific contamination/braking-action statistic confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty confirmed for any K Global type at KBOS.

---

## 10. Gotchas

- **RWY 14/32 is unidirectional** — RWY 14 is takeoff-only with **no approach authorised**; RWY 32 is landing-only. Never expect the reciprocal role.
- **The noise-preferred departure runway (15R) is not guaranteed** — the intersecting six-runway geometry drives frequent, wind-dependent configuration changes; check ATIS every time rather than assuming the preferred runway.
- **EMAS arrestor beds at DER 04L and DER 15R** signal constrained runway safety areas — respect published declared distances.
- **Harbor/water obstacles and on-airport cranes** are AIP-flagged — maintain obstacle vigilance, especially at night.
- **RNAV SID compliance is actively encouraged** for noise abatement — file/expect an RNAV SID whenever your filed altitude is above 10,000 ft, consistent with Massport/FAA guidance.
- **No formal curfew** — but a voluntary over-water nighttime routing preference (≈2300–0600) may affect assigned departure tracks after dark.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID runway applicability and RNP/gradient specifics.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference (none mandated found).
- LVTO minima/procedure detail.
- EOSID/engine-out procedure detail per runway.
- Named taxiway hot spots (ASDE-X in use is confirmed; specific hot-spot naming is not).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. obstacle/crane status), any ATFM/ground-delay program, de-icing status/pad assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3 — Aerodromes, Massachusetts (AD 2 KBOS)** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_massachusetts.html (retrieved 2026-07-26). *Communications, general remarks, ASDE-X, obstacle/EMAS data.*
- SkyVector — FAA Chart Supplement mirror for KBOS (SID/DP index, obstacle detail) — https://skyvector.com/airport/BOS/General-Edward-Lawrence-Logan-International-Airport (retrieved 2026-07-26).
- FAA Newsroom — "Boston Air Traffic Procedures Reduce Noise Impact," 2021-12-02 — https://www.faa.gov/newsroom/boston-air-traffic-procedures-reduce-noise-impact (retrieved 2026-07-26). *RWY 15R northward departure-shift history.*
- MIT News — "New flight procedures to reduce noise from aircraft departing and arriving at Boston Logan Airport," 2024-04-18 — https://news.mit.edu/2024/new-flight-procedures-reduce-noise-aircraft-boston-logan-airport-0418 (retrieved 2026-07-26). *RNAV SID/Fly Quiet context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
