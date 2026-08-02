# LIRF — Fiumicino · Dispatch Page

**LIRF / FCO** · Fiumicino, Rome, Lazio, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, K Global network build

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LIRF Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / non-base network field** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not confirmed this pass — **Terminal 1** and **Terminal 3** are the field's two international-capable terminals; specific assignment for our operation not confirmed 🟧 |
| Widebody stands available | Reported concentrated around Terminal 3 and select Terminal 1 piers; exact count not confirmed 🟧 |
| Slot regime | **IATA Level 3** (fully coordinated) |
| Curfew | **None found (H24 operation)**; night-hour runway-use restrictions and noise surcharges apply — see §4 🟧 |
| Primary handling agent | Aeroporti di Roma (ADR) plus third-party handlers — specific handler for our operation not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1, major-hub multi-supplier assumed; not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — T1 & T3 international halls; exact desk hours not confirmed 🟧 |
| De-icing | Not confirmed — lower seasonal likelihood at this Mediterranean coastal field than at continental fields 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** LIRF operates around **Terminal 1** and **Terminal 3** as its passenger-facing international terminals; a historical "Terminal 2" designation and prior terminal renumbering exist in the field's development history but current-day configuration is not independently confirmed in full this pass. 🟧
- **Our operation uses:** Not confirmed this pass — international widebody long-haul traffic is reported concentrated toward Terminal 3, with Terminal 1 handling a mix of the field's dominant home-based scheduled traffic. 🟧
- **International arrivals / CBP-equivalent hall:** International/non-Schengen arrivals are reported to clear passport control primarily via Terminal 3, per a community aggregator source — not independently AIP-confirmed. 🟧
- **Notes:** Confirm current gate/concourse assignment with handling before finalising a stand plan; the field has undergone repeated terminal reconfiguration over the years. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed in detail this pass — Terminal 3 and select Terminal 1 piers are reported to carry the field's widebody-capable contact positions. 🟧
- **Stands NOT usable by our types:** Narrowbody-oriented positions are not sized for Code E/F — do not plan a widebody onto them without handling confirmation.
- **Remote / hardstand positions:** Not confirmed in reachable sources; a major slot-coordinated hub of this size is expected to carry meaningful remote/hardstand capacity, but no figure is sourced. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — request contact stand confirmation from handling at planning.
- **Ground-movement stand caveats:** The historical third parallel runway (16C/34C) is now **Taxiway "D"** and forms part of the ground-movement network between stands and the active runway system — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — specific national coordinator not confirmed this pass. 🟧
- **Curfew / night restriction:** No hard curfew found (H24 operation reported); however **RWY 16R/34L is reported closed 22:00–05:00** (except ops/MET/safety reasons) and **RWY 16L/34R reported closed every Sunday 22:30–00:30** for ILS ground check — both sourced to network-sim (IVAO Italy) data and not independently AIP-confirmed. Noise surcharges are reported for movements in the 23:00–06:00 window. 🟧
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated EU hub. 🟧
- **Commercial impact:** The **reduced effective runway capacity** from the historical 16C/34C closure, combined with the Level 3 slot regime, makes on-time pushback and runway-availability awareness the two biggest schedulable-window guardrails at this field.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Aeroporti di Roma (ADR) operates the field; the specific ground handler(s) contracted for our operation are not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 18 min / taxi-out 20 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a major-hub Code E/F stand (standard provision, not individually confirmed).
- **Turnaround risk items:** Effective-runway-capacity constraints (16C/34C closure), Level 3 slot-window pressure, and any bird-strike-related ground/runway inspection stoppage are the main turnaround risk factors identified this pass.

---

## 6. Load factors & seasonality

- **Demand peaks:** Rome is a year-round leisure and business destination with strong seasonal peaking toward spring/summer/early-autumn tourist demand — general regional pattern, not independently LIRF-sourced this pass. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for LIRF specifically. 🟧
- **Cargo / belly capacity:** Not confirmed this pass. 🟧
- **Connection banks:** Not applicable — LIRF is not a K Global base; connection timing is set by the home-hub schedule.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available as a major hub; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24 assumed; not independently confirmed. 🟧
- **Price / tankering angle:** Not sourced this pass — assess price differential to the home base at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LIRF itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international halls reported in Terminal 1 and Terminal 3.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; a 24 h border-police presence is reported by a community source. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at LIRF.
- **Late/overnight/diversion caveat:** No hard curfew identified, so overnight arrivals are not curfew-blocked; confirm immigration desk staffing for genuinely late/overnight movements. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed in reachable sources. 🟧
- **Season:** Mediterranean coastal climate makes de-icing a materially lower-frequency consideration than at continental European fields, but winter cold snaps are not impossible — confirm current provisioning before a winter rotation. 🟧
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Likely low relative to continental hubs, but not zero — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for the network standard.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Reduced effective runway capacity (16C/34C closure) combined with high traffic density under a slot-coordinated Level 3 regime is the most likely structural delay driver at this field; not independently benchmarked against reliability statistics this pass. 🟧
- **Ground-delay / flow-program exposure:** Expected to be non-trivial given the field's hub status and shared Roma TMA traffic with Ciampino — EUROCONTROL flow management plausible in peak/adverse conditions. 🟧
- **On-time reliability picture:** Not independently sourced this pass. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Noise surcharges reported for movements in the 23:00–06:00 window (tier-4) — not independently confirmed against a primary tariff document. 🟧
- **Curfew infringement consequence:** No hard curfew identified; the operative night-hour constraints are the reported runway-specific closures (§4), not a blanket movement ban.
- **Scheduling guardrails:** Build buffer for potential runway-availability changes at night (16R/34L closure window, weekly 16L/34R ILS-check closure) rather than a hard curfew risk.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/gate assignment for our operation, given the field's history of terminal reconfiguration.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours (T1/T3).
- Slot coordinator identity and EUROCONTROL CTOT/ATFM specifics for LIRF.
- Night-hour runway-restriction figures (16R/34L, 16L/34R) — sourced to network-sim data only, not AIP-confirmed.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- De-icing provisioning and season.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current Roma TMA/FIR restrictions. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/LIRF/ (retrieved 2026-07-26).
- IVAO Italy — Quick Overview, Roma Fiumicino — https://quickoverview.ivao.it/aerodrome/show/LIRF (retrieved 2026-07-26). *Network-sim source, night runway-restriction detail, ATC structure.*
- Data Sky Center — LIRF — https://dataskycenter.com/airport/LIRF (retrieved 2026-07-26). *Community-sourced cross-check: terminal/customs/noise detail; not authoritative.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
