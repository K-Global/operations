# EDDH — Hamburg · Dispatch Page

**EDDH / HAM** · Hamburg, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EDDH Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Destination/origin in the German domestic/regional network — **not a K Global base** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Two connected terminals (T1/T2) — specific pier for our operation not confirmed 🟧 |
| Widebody stands available | Not confirmed; Hamburg is expected to be a narrow-body short/medium-haul field for our network (see [Briefing §17](index.md)) 🟧 |
| Slot regime | No formal slot-coordination regime confirmed for Hamburg in reachable sources (unlike EDDB) — verify on the OFP 🟧 |
| Curfew | **Hard 2300–0600 local, field hours 0600–2300, no extensions reported** 🟥 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1 expected; provider/hours not confirmed 🟧 |
| Customs / PoE for pax | **Yes** (tagged Port of Entry) — exact desk hours not confirmed 🟧 |
| De-icing | Available (standard German winter climate); procedure/season detail not confirmed 🟧 |

**K Global network fields (live VAMSYS):** Category **R** · Base **No** · Preferred alternates **EDDB, EDDF, EHAM** · Taxi-in **12 min** / taxi-out **14 min**.

---

## 2. Terminals & concourses

- **Terminal layout:** Two connected terminals, T1 and T2, at Hamburg-Fuhlsbüttel; internal layout/pier detail not itemised in reachable public sources. 🟧
- **Our operation uses:** Not independently confirmed — verify current gate/terminal assignment with handling. 🟧
- **International arrivals / CBP-equivalent hall:** International PoE confirmed (see [Briefing §1](index.md)); which terminal houses the arrivals hall is not confirmed. 🟧
- **Notes:** No construction/terminal-change items found in reachable sources for this pass. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed; the field's expected role is narrow-body short/medium-haul (see [Briefing §17](index.md)) — no widebody stand data found. 🟧
- **Stands NOT usable by our types:** Not confirmed in reachable sources. 🟧
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Expect contact-gate handling as a major scheduled hub; not independently confirmed. 🟧
- **Ground-movement stand caveats:** Taxi routing is shaped by the **crossing-runway geometry (05/23 × 15/33)** — see [Briefing §3.2](index.md) and [Departure §2](departure.md)/[Arrival §8](arrival.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** No formal slot-coordination regime confirmed in reachable sources for Hamburg (unlike EDDB, see the [EDDB Dispatch page](../eddb/dispatch.md)) — verify current status on the OFP. 🟧
- **Curfew / night restriction:** **Hard curfew — no take-offs/landings 2300–0600 local**, field operating hours 0600–2300, **no extensions reported**. This is a hard restriction, not a voluntary one. 🟥
- **CTOT / flow control:** Not confirmed for Hamburg specifically in reachable sources — verify on the OFP. 🟧
- **Commercial impact:** The hard curfew is the dominant scheduling constraint — build buffer into the last rotation of the day so an operational delay does not push a landing or departure past 2300 local; a late inbound risks **diversion, not a curfew waiver** (see [Briefing §3.5](index.md)).

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 14 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard narrow-body service times.
- **Services:** Standard scheduled-hub services (pushback, GPU/PCA, water/lav, catering, cabin clean) expected; not itemised in reachable sources. 🟧
- **Turnaround risk items:** The **hard night curfew** is the standing risk — any turnaround delay late in the day compounds directly into curfew exposure rather than just a late arrival elsewhere.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for Hamburg specifically — treat as standard German domestic/regional demand pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Not confirmed; no dedicated freighter operation identified in reachable sources for our network at this field. 🟧
- **Connection banks:** Not a hub for K Global — connection timing is set by the network schedule against the home base at EDDF (see the [EDDF Dispatch page](../eddf/dispatch.md)).

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 expected on field at a major scheduled hub; specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** H24 assumed; not independently confirmed. 🟧
- **Price / tankering angle:** Assess price differential against the EDDF home-base tankering reference per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to this short/medium-haul field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes (tagged PoE, see [Briefing §1](index.md)).
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** The **hard 2300–0600 curfew** is the dominant late/overnight constraint — a delayed arrival risks diversion regardless of desk hours (§4). 🟥

---

## 9. De-icing provisioning & season

- **Availability:** Expected available at a major scheduled hub in a temperate maritime climate; specific pad locations/count not confirmed. 🟧
- **Season:** Typical Central European de-icing season, roughly Oct–Apr, consistent with the field's autumn/winter fog and icing exposure (see [Briefing §14](index.md)).
- **Provisioning:** Fluid type, holdover implications and peak throughput not confirmed. 🟧
- **Commercial impact:** Winter fog/low-stratus events (the driver behind the field's CAT II/III ILS on RWY 23) combined with any de-icing queuing are the principal seasonal delay-risk drivers. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Autumn/winter North Sea coastal fog and low stratus — the operational reason behind the CAT II/III ILS on RWY 23 (see [Briefing §3.4](index.md)).
- **Ground-delay / flow-program exposure:** The **crossing-runway geometry (05/23 × 15/33)** sustains a coordination workload that can compound delay during high-traffic or low-visibility periods. 🟧
- **On-time reliability picture:** Winter fog mornings and any runway-crossing bottleneck carry the highest schedule-risk exposure at this field; the **hard curfew** turns any accumulated delay late in the day into a diversion risk rather than a simple late arrival. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not itemised in reachable sources; Hamburg's proximity to residential districts implies noise-sensitive operating expectations (see [Briefing §12](index.md)). 🟧
- **Curfew infringement consequence:** The **2300–0600 curfew** is reported as a hard restriction with **no extensions** — treat any late-running rotation as a diversion risk, not a fee-based exception. 🟥
- **Scheduling guardrails:** Build buffer into the last rotation of the day; do not schedule or plan a recovery that assumes a post-2300 landing or departure will be permitted.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/pier and stand assignment for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- Confirmation of slot/CTOT status for Hamburg (none found, unlike EDDB — verify it stays that way).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- De-icing pad location(s), fluid provisioning and season throughput detail.
- RFF category (see [Briefing §1](index.md)).

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — Hamburg Helmut Schmidt Airport (EDDH) — https://ourairports.com/airports/EDDH/ (retrieved 2026-07-25). *Runway/frequency cross-check underlying the Briefing.*
- VATSIM Germany Knowledgebase — EDDH Hamburg Airport — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddh-hamburg-airport (retrieved 2026-07-25). *Bremen FIR/EDWW control structure, crossing-runway coordination.*
- Simple Flying — "A Brief Guide To Night Flight Restrictions At Germany's Major Airports" — https://simpleflying.com/germany-major-airports-night-flight-restrictions/ (retrieved 2026-07-25). *Curfew corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
