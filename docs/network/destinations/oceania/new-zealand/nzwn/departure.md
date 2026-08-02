# NZWN — Wellington Intl · Departure Page

**NZWN / WLG** · Rongotai, Wellington, New Zealand · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [NZWN Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **16 or 34** — the only runway; wind-driven selection given Cook Strait channelling |
| Config logic | Wind-driven; RWY 16 left-hand circuit, RWY 34 right-hand |
| Transition altitude | 13,000 ft |
| Take-off minima | Published per AIP — exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | None identified |
| De-icing on departure | "Limited" per AIP; confirm before winter rotation 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** **Single main taxiway (TWY A)**, fed via TWY R/S/T/U and B-series intersections. Eastern Pier traffic routes via R/S/T/U or directly via **B8/B9/B10 when RWY 34 is in use**, or **B9/B8/B7 when RWY 16 is in use** — this keeps B6/B5 clear for main-apron/international-gate traffic.
- **Hot spots / tight taxiways:** 🟥 **Code D/E aircraft (C130, A330, A340, B757, B767, B777) may not use TWY A when the runway is in use by those types**, or when Code C aircraft occupy the runway in visibility <3,000 m/ceiling <500 ft. Code D/E must enter/exit via **TWY A1, A2, A10 or A11 only**; taxi to Stand 23 via TWY A and B6, to Stand 26 via TWY A and B5. **Reduced taxiway centreline-to-object clearance of 44.5 m** applies on TWY A north of the eastern apron — exercise caution on curves/intersections.
- **Runway crossings / read-back-required points:** On the eastern apron, departing aircraft have priority over arrivals, and aircraft on pushback have right-of-way over arriving aircraft — a specific local priority rule given the single-taxiway layout.
- **Low-vis taxi caveats:** Not confirmed in reachable sources. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven on the single 16/34 runway; Cook Strait wind-channelling can force a config change with little notice — watch the ATIS wind trend closely.
- **By departure direction:** Ex-RWY 16 — **ATVEV** (preferred for jets, divergent turn 20° after URBEM), **AGROR** (southern-bound props via VENAM, divergent 40°), **UPROG** (northern-bound props, divergent 40°), **IVDAL** (NZNS/NZWB traffic, divergent 50°). Ex-RWY 34 — **UPLUD #R** (preferred for jets, RNP segment to UPLUD then RNAV 1), **UPLUD #P** (Cat C only, divergent 18° after COUBY), **IPKEP** (western-bound props), **URGEV** (northern/southern/eastern-bound props, divergent 42° after GANJI).
- **Noise / preferential-runway program:** Noise abatement prescribed under CAR Part 93, Subpart C; westward/northward/southwestward departures may require a turn against the circuit direction, approved by Tower on request.
- **Interaction with arrivals:** Single-runway, single-taxiway environment — departure and arrival sequencing share the same constrained ground infrastructure; expect tighter coordination than at a multi-taxiway field.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| ATVEV | 16 | — | **Preferred departure for jets**; divergent 20° after URBEM |
| AGROR | 16 | — | Preferred for southern-bound props via VENAM; divergent 40° after URBEM |
| UPROG | 16 | — | Preferred for northern-bound props; divergent 40° after URBEM |
| IVDAL | 16 | — | Preferred for NZNS/NZWB traffic; divergent 50° after URBEM |
| UPLUD #R | 34 | RNP segment to UPLUD, then RNAV 1 🟧 | **Preferred departure for jets** |
| UPLUD #P | 34 | — | Cat C only; divergent 18° after COUBY |
| IPKEP | 34 | — | Preferred for western-bound props |
| URGEV | 34 | — | Preferred for northern/southern/eastern-bound props; divergent 42° after GANJI |

*Names/logic per VATNZ SOP (tier-4, network-sim) — pull the live current-AIRAC SID list, gradient and RNP tables before use.*

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per assigned SID; circuit altitude 1,500 ft AMSL applies unless established on the departure procedure.
- **Noise-abatement departure procedure (NADP):** Governed under CAR Part 93, Subpart C; specific NADP1/2 fleet preference not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Divergent-turn points and altitudes are SID-specific (see §4) — verify on current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway; terrain rising either side of the isthmus is a relevant consideration for any engine-out routing. 🟧
- **Close-in / distant obstacles:** Terrain rises quickly north and east of the strip; this is the direct cause of the field's windshear/turbulence signature (§Briefing §3.4) and a relevant factor for any climb-performance-critical departure.
- **Special DP / obstacle DP:** Not confirmed in reachable sources. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources — verify current chart. 🟧
- **De-icing:** AIP describes de-icing as "limited — contact ground handling agencies"; confirm availability before any winter rotation. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Wellington Delivery **128.2** (H24).
- **Frequency sequence:** **Delivery 128.2 → Ground 121.9 (0630–2100 LMT) / 118.8 (2100–0630 LMT) → Tower 118.8/125.25 → Approach 122.3/119.3/121.1.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No formal slot/CTOT regime identified. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟥 **1,815 m LDA both directions is a hard, genuinely limiting constraint** for larger K Global types — this is the field's dominant performance consideration; confirm balanced-field/take-off performance for the specific type and weight before scheduling. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Density altitude / temperature:** Non-issue at 41 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Runway is **grooved for its full length**, aiding wet braking; no specific contamination data confirmed beyond that. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — verify the specific K Global type's field-length requirement against 1,815 m before scheduling this destination.

---

## 10. Gotchas

- **Windshear and turbulence are a routine, well-documented hazard on departure** from this field, driven by Cook Strait wind-channelling — brief the contingency on every departure, not just as an exceptional-weather item.
- **Short 1,815 m runway** — confirm type suitability; this is a hard performance constraint, not a minor caution.
- **Single main taxiway (TWY A)** with Code D/E entry/exit restricted to A1/A2/A10/A11 — expect a specific taxi routing, not free choice of intersection.
- **Reduced 44.5 m taxiway centreline-to-object clearance** on TWY A north of the eastern apron — main-gear-to-pavement-edge clearance may be limited on curves.
- **Divergent-turn SID structure** ex-both runways — verify the correct divergence angle/point for the assigned SID.
- **De-icing is "limited"** — confirm availability before a winter rotation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names, gradients and RNP requirements per runway.
- Take-off minima exact figures.
- EOSID/engine-out procedure detail per runway.
- LVTO RVR minima.
- De-icing provisioning detail.
- NADP fleet preference.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), current wind/windshear advisory, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP New Zealand, AD 2 NZWN 2.8/2.17/2.20/2.22** (extract carrying effective dates 2013–2016) — taxiway/apron data, TA, local traffic regulations, flight procedures — mirrored via https://silo.tips/download/aerodrome-geographical-and-administration-data (retrieved 2026-07-26).
- **AIP New Zealand GEN 3.7-22** — ATC frequencies — https://fyi.org.nz/request/22244/response/83943/attach/8/GEN%203.7.pdf (retrieved 2026-07-26).
- **VATNZ — NZWN Wellington SOP** — https://sops.vatnz.net/aerodromes/Class-C/nzwn/ (retrieved 2026-07-26). *Network-sim; SID assignment/divergence logic, taxi routing cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP New Zealand; K Global fields from live VAMSYS; 4-page pack. |
