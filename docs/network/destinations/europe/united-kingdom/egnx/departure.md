# EGNX — East Midlands · Departure Page

**EGNX / EMA** · Castle Donington, Leicestershire, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGNX Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **09 or 27** — single runway, wind-driven; overnight (2200–0700), RWY 27 departures normally use the Whiskey intersection |
| Config logic | Wind-driven; max 5 kt tailwind accepted in light-wind conditions |
| Transition altitude | **6,000 ft** |
| Take-off minima | Published per AIP; exact RVR figures not confirmed this pass 🟧 |
| CTOT / flow regime | ACL PPR/slot-approval gate (all scheduled flights except GA/military); formal IATA Level classification and EUROCONTROL CTOT specifics not confirmed 🟧 |
| De-icing on departure | Available H24, by arrangement with handling agents |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi routing with Ground/Tower on the day; **RWY 27 departures normally route via Taxiway S**.
- **Hot spots / tight taxiways:** 🟥 Runway intersections **M and S are closed to aircraft larger than Code C** (max span 36 m) — do not plan an intersection departure at these points for any K Global type beyond Code C. Taxiway J narrows from Code E to a Code D taxilane south of its junction with Taxiway B. **Taxiway V is bespoke-limited to 68.4 m span / 76.25 m length.** Long-wheelbase Code E/F aircraft must use caution entering/exiting the runway at all exits due to pavement-width constraints. Expect other aircraft holding at intersections H, M, S and W when taxiing on Taxiway A — visual acquisition can be difficult in poor visibility or at night.
- **Runway crossings / read-back-required points:** Not applicable — single runway, no crossing-runway geometry.
- **Low-vis taxi caveats:** 🟧 Under Low Visibility Procedures, **Holding Points S1/S2, W1/W2, M1/M2 and H1/H2 close**; **RWY 27 departures route via Holding Point A2 only**; **RWY 09 departures route via Holding Point G2 only**. "Lead vehicles" are available on request when visibility drops below 350 m.

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven choice between RWY 09 and RWY 27; max 5 kt tailwind accepted in light-wind conditions — verify current limits.
- **By departure direction:** **RWY 09** — turbojet/turbofan aircraft and aircraft >17,000 kg track 096° magnetic to **1.5 NM before turning left** (northbound departures) or to **2.0 NM before turning right** (southbound departures), as soon as practical after passing the runway end, in accordance with the SID/issued clearance. **RWY 27** — all turbojet/turbofan departures must reach **1,500 ft** and have **passed the end of the runway** before commencing any turn. Verify the exact current profile on the AIP/chart — this is a summary pointer, not a transcription.
- **Noise / preferential-runway program:** Aircraft should avoid overflying Diseworth (south) and Castle Donington (north). Overnight 2200–0700 (2100–0600), **RWY 27 departures normally use the Whiskey intersection** (2,463 m available); full-length departure available on request for performance/ATC reasons only.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the same runway; no independent/dependent parallel-runway interaction exists here.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 09 / 27 | Not confirmed — verify RNP/gradient requirements on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC clearance; standard 250 KIAS below FL100 applies — confirm current chart.
- **Noise-abatement departure procedure (NADP):** A local noise-abatement climb profile is published to FL100 (or follow the manufacturer/company NADP where specified) — **verify the exact current profile on the AIP/chart; do not rely on a transcription here.** The runway-specific turn restrictions in §3 (RWY 27: 1,500 ft + past runway end before any turn; RWY 09: track 096°M to 1.5/2.0 NM before turning) are a durable structural feature of the field's noise routing.
- **Early turn / altitude constraints:** Published per §3 above — verify current chart for exact constraint geometry.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Trent-valley field — no significant close-in terrain. Notable circling-area obstacles include a 758 ft AMSL chimney at Ratcliffe-on-Soar (~2.9 NM NE) and a cluster of temporary cranes/transporters (up to ~361 ft AMSL) associated with airport-area construction — verify current obstacle NOTAM. A pyrotechnic factory ~3 NM north tests rockets/flares to 1,000 ft AGL day/night.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies; under LVP, **RWY 27 departures route via Holding Point A2 only** and **RWY 09 departures route via Holding Point G2 only**; exact LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **Available H24**, by arrangement with handling agents (mechanical and chemical clearing equipment). See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No distinct "Delivery" frequency found in the AD 2.18 communications table — likely combined with Ground (121.905); not independently confirmed. 🟧
- **Frequency sequence:** **Ground 121.905 (H24) → Tower 124.005 (H24) → East Midlands Director 120.130 (as directed by ATC) or East Midlands Radar 126.180 (H24) / 134.180 Lower Airspace Radar Service (H24).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** All scheduled flights (except GA/military) require a live **ACL** slot/approval — confirm slot status before pushback. No EGNX-specific EUROCONTROL ATFM/CTOT detail confirmed this pass. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 09/27 TORA 2,894 m is non-limiting for narrowbody types; heavier freighter-class equipment (cargo handling is confirmed to 747-400/An-124 scale) should be checked against actual departure weight and the runway's declared distances (§Briefing §7) — no dedicated performance-runway alternative exists on this single-runway field.
- **Density altitude / temperature:** Non-issue at 306 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** De-icing available H24; no EGNX-specific contamination/braking-action statistic confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — check margin for any heavy freighter-class type given the displaced-threshold-reduced declared distances.

---

## 10. Gotchas

- **RWY 09 is CAT I/LTS CAT I only; RWY 27 is CAT II/IIIB** — this asymmetry also governs LVP departure routing (RWY 09 departs via G2 only, RWY 27 via A2 only under LVP).
- **Long-wheelbase Code F types (A340-600, A350-1000, A380-800, B777-300) are strictly PPR** due to taxiway limitations — confirm eligibility before planning.
- **Runway intersections M and S are closed to aircraft larger than Code C** — never plan an intersection departure there for a K Global type beyond Code C.
- **Mandatory push-back except from self-manoeuvring stands 21, 23, 24 and 70R — no powerback permitted.**
- Expect **other aircraft holding at intersections H, M, S, W** on Taxiway A — maintain vigilance, especially at night or in reduced visibility.
- **A pyrotechnic factory ~3 NM north** tests rockets/flares to 1,000 ft AGL day and night — a genuine departure-path awareness item.
- Overnight (2200–0700), **RWY 27 departures default to the Whiskey intersection** (2,463 m) unless full length is specifically requested — confirm which is assigned.
- **No general curfew** — but respect the Chapter-3-noncompliant jet ban 2300–0700 if operating any older/noisier equipment.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / RVR exact figures.
- Clearance Delivery frequency (possibly combined with Ground — not independently confirmed).
- EOSID/engine-out procedure detail per runway.
- LVTO RVR minima.
- Formal IATA slot-coordination level and EUROCONTROL CTOT/ATFM applicability specific to EGNX.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, obstacle/crane status), ACL slot status, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **NATS UK eAIP — AD 2 EGNX (East Midlands)**, AIRAC cycle 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGNX-en-GB.html (retrieved 2026-07-26). *Local aerodrome regulations (ground movement, CAT II/IIIb, LVP), noise-abatement climb/turn profile, communications, obstacles.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
