# EDDB — Berlin Brandenburg · Dispatch Page

**EDDB / BER** · Berlin/Schönefeld, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EDDB Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Destination/origin in the German domestic/regional network — **not a K Global base** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Single-terminal hub (T1, plus T2 extension) — specific pier for our operation not confirmed 🟧 |
| Widebody stands available | Not confirmed; BER, as Berlin's sole scheduled hub, may see a broader mix of K Global types than the smaller regional fields (see [Briefing §17](index.md)) 🟧 |
| Slot regime | **Slot-coordinated** by Airport Coordination Germany — CTOT compliance mandatory 🟥 |
| Curfew | Coordinated-traffic night-restriction window reported (bounds vary by source, ≈2330–0530 vs a broader ≈0430–2330 operating window) — verify current parameters 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1 expected; provider/hours not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — Berlin's sole international commercial gateway since Tegel's 2020 closure; exact desk hours not confirmed 🟧 |
| De-icing | Available (standard German winter climate, modern purpose-built hub); procedure/season detail not confirmed 🟧 |

**K Global network fields (live VAMSYS):** Category **S** · Base **No** · Preferred alternates **EDDF, EDDL, EHAM** · Taxi-in **14 min** / taxi-out **18 min**.

---

## 2. Terminals & concourses

- **Terminal layout:** Modern single-terminal hub (T1), plus a T2 extension; Berlin's sole scheduled-service gateway since Tegel's 2020 closure. Detailed pier/concourse layout not itemised in reachable public sources beyond apron references (see [Briefing §13](index.md)). 🟧
- **Our operation uses:** Not independently confirmed — verify current gate/terminal assignment with handling. 🟧
- **International arrivals / CBP-equivalent hall:** International PoE confirmed (see [Briefing §1](index.md)); which pier houses the arrivals hall for our operation is not confirmed. 🟧
- **Notes:** No construction/terminal-change items found in reachable sources for this pass beyond the standing T1/T2 configuration. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed; VDGS-guided stands exist on Aprons B/C and parts of A/E (see [Briefing §13](index.md)), but widebody-specific allocation is not itemised. 🟧
- **Stands NOT usable by our types:** Not confirmed in reachable sources. 🟧
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Expect contact-gate handling at a modern purpose-built hub; not independently confirmed. 🟧
- **Ground-movement stand caveats:** North-apron stands (Apron 1-4/A/E) generally route to **06L/24R**; south-apron stands (Apron B/C) generally route to **06R/24L** — see [Briefing §1](index.md) and [Departure §2](departure.md)/[Arrival §8](arrival.md). The documented **pushback hotspot near taxi lane N1** (Apron 3, stands 40/41/42) is a standing caution (see §5).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **Slot-coordinated by Airport Coordination Germany** — the specific IATA level is not confirmed in reachable sources, but coordination is confirmed as mandatory (see [Briefing §3.5](index.md)). 🟥
- **Curfew / night restriction:** Sources conflict on the exact coordinated-traffic night window — reported variously as **≈2330–0530 local** for coordinated flights and a broader **≈0430–2330 local** general operating window. **Verify current Airport Coordination Germany parameters before planning** — do not rely on either figure as fixed. 🟧
- **CTOT / flow control:** **Slot-coordinated — CTOT compliance is mandatory.** Obtain and respect the assigned slot on the OFP. 🟥
- **Commercial impact:** Schedule integrity against the assigned coordination slot is the dominant scheduling constraint at BER, rather than a hard curfew — build margin so an operational delay does not jeopardise the assigned CTOT.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 14 min / taxi-out 18 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard service times.
- **Services:** Standard major-hub services (pushback, GPU/PCA, water/lav, catering, cabin clean) expected; VDGS-guided stands support precision docking on Aprons B/C and parts of A/E. Documented pushback movements from stands E21–E35 route to the P2-Orange taxiway (see [Briefing §13](index.md)).
- **Turnaround risk items:** The **documented pushback hotspot near taxi lane N1** (Apron 3, stands 40/41/42) — a pushback tug may temporarily not be fully clear of the apron safety line at these adjacent stands, requiring the aircraft to stop until obstacle clearance is confirmed; this can add unplanned turn time. 🟥

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for BER specifically — as Berlin's sole scheduled hub it is expected to carry the city's full demand base, but no third-party load data confirmed. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Not confirmed; no dedicated freighter operation identified in reachable sources for our network at this field. 🟧
- **Connection banks:** Not a hub for K Global — connection timing is set by the network schedule against the home base at EDDF (see the [EDDF Dispatch page](../eddf/dispatch.md)).

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 expected on field at Berlin's sole major hub; specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** H24 assumed; not independently confirmed. 🟧
- **Price / tankering angle:** Assess price differential against the EDDF home-base tankering reference per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to this short/medium-haul field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Berlin's sole international commercial gateway since Tegel's 2020 closure (see [Briefing §1](index.md)).
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** The **slot/CTOT regime** and reported coordinated-traffic night window are the dominant late/overnight constraints — verify current parameters (§4) rather than assuming a fixed curfew like EDDH's. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Expected available at a modern purpose-built hub; specific pad locations/count not confirmed. 🟧
- **Season:** Typical Central European de-icing season, roughly Oct–Apr, consistent with the field's winter fog/low-stratus and icing exposure (see [Briefing §14](index.md)).
- **Provisioning:** Fluid type, holdover implications and peak throughput not confirmed. 🟧
- **Commercial impact:** Winter fog/low-stratus events (the driver behind the field's CAT II/III ILS capability) combined with any de-icing queuing are the principal seasonal delay-risk drivers. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Winter continental-influenced fog/low stratus — the operational reason behind the field's CAT II/III ILS capability (see [Briefing §3.4](index.md)).
- **Ground-delay / flow-program exposure:** Slot-coordination itself is the standing exposure — CTOT compliance is mandatory regardless of weather; the two independent parallel runways otherwise support lower crossing-conflict workload than EDDH. 🟧
- **On-time reliability picture:** Winter fog mornings and any CTOT/slot compression carry the highest schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not itemised in reachable sources. 🟧
- **Curfew infringement consequence:** Not a hard curfew like EDDH's — governed by the slot-coordination night-restriction window, bounds unconfirmed (§4). 🟧
- **Scheduling guardrails:** Build buffer against the assigned coordination slot rather than a fixed curfew hour; treat CTOT compliance as the primary commercial guardrail at this field.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/pier and stand assignment for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- Exact Airport Coordination Germany slot level and current night-restriction window bounds (sources conflict, see [Briefing §18](index.md)).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- De-icing pad location(s), fluid provisioning and season throughput detail.
- RFF category (see [Briefing §1](index.md)).

> **Live data — pull at planning:** fuel price, slot/CTOT file, current demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — Berlin Brandenburg Airport (EDDB) — https://ourairports.com/airports/EDDB/ (retrieved 2026-07-25). *Runway/frequency cross-check underlying the Briefing.*
- VATSIM Germany Knowledgebase — EDDB Berlin/Brandenburg — https://knowledgebase.vatsim-germany.org/books/airports-bremen-fir-edww/chapter/eddb-berlinbrandenburg/export/html (retrieved 2026-07-25). *Bremen FIR/ACC control structure, parking-position preferential runway logic, documented pushback hotspot near N1/Apron 3.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
