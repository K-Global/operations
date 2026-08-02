# CYYZ — Lester B. Pearson Intl · Dispatch Page

**CYYZ / YYZ** · Mississauga, Ontario, Canada · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [CYYZ Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal 1** and **Terminal 3** (Terminal 2 permanently closed/demolished); exact assignment for our operation not confirmed 🟧 |
| Widebody stands available | Expected at T1/T3 international piers; exact count/allocation not confirmed 🟧 |
| Slot regime | **IATA Level 3** (fully coordinated) — coordinator not individually confirmed 🟧 |
| Curfew | **Restricted Hours Operating Policy 00:30–06:29 local** + Preferential Runway System 🟥 |
| Primary handling agent | GTAA (Apron/Ramp control) plus third-party ground handlers — specific handler not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1, major-hub multi-supplier assumed; not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — T1 & T3 international/US-preclearance halls; exact desk hours not confirmed 🟧 |
| De-icing | **Available** — Central Deicing Facility (CDF), season typ. Oct–Apr/May |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** and **Terminal 3** are the two active passenger terminals; the former **Terminal 2** was permanently closed and demolished (a Terminal 2 remains a historical reference only — do not plan against it). T1 and T3 are linked airside/landside; international, transborder (US) and domestic operations are split across the two terminals per carrier/alliance.
- **Our operation uses:** 🟧 Not confirmed in reachable public sources — confirm current gate/terminal assignment with handling before finalising a stand plan.
- **International arrivals / CBP-equivalent hall:** International arrivals clear Canadian customs at T1/T3; US-bound passengers clear US CBP preclearance on-site before boarding (a long-standing CYYZ feature) — relevant to connection-time planning for any onward US-network leg.
- **Notes:** 🟧 Confirm current terminal/gate assignment given the historical T2 closure and any subsequent terminal-programme changes.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Expected at international piers of T1/T3; exact widebody cluster/gate numbers not confirmed in reachable public sources. 🟧
- **Stands NOT usable by our types:** Narrowbody-oriented domestic gates are not expected to be sized for Code E/F — do not plan a widebody onto them without confirmation.
- **Remote / hardstand positions:** Not confirmed in reachable sources; remote/hardstand use for scheduled widebody international service is atypical at a hub of this size — confirm with handling if a contact gate is unavailable. 🟧
- **Contact vs remote for our arrivals:** Expect a contact widebody gate for a scheduled international arrival.
- **Ground-movement stand caveats:** Taxiways D4/D5 (angled hold positions), Taxiway K (wingspan/ALR-restricted, uncontrolled) and the RWY 05 CAT II/III departure-taxiway restriction (W & Y only, wingspan < 36 m) affect ground routing between stands and the runway system — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — Canada's busiest airport is fully coordinated; specific coordinator not individually confirmed this pass. 🟥
- **Curfew / night restriction:** **Restricted Hours Operating Policy 00:30–06:29 local** (GTAA policy v4.1, 2019-05-29) with a **Preferential Runway System** active through the restricted period to minimize residential noise impact. Transport Canada imposes an **annual cap on total night-flight movements** during restricted hours — schedule integrity in this window has direct regulatory consequence. 🟥
- **CTOT / flow control:** NAV CANADA flow management applies at peak/adverse conditions as standard practice for Canada's busiest hub. 🟧
- **Commercial impact:** The Level 3 slot regime plus the hard restricted-hours window make **on-time performance into/out of the last pre-00:30 slot** the primary scheduling guardrail at this field.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** GTAA operates Apron/Ramp control; the specific ground handler(s) contracted for our operation are not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 15 min / taxi-out 17 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a Code E/F stand at a hub of this size (standard major-hub provision, not individually confirmed).
- **Turnaround risk items:** Winter deicing-pad/CDF throughput, restricted-hours schedule pressure, and CSPO ground-routing complexity around the five-runway system can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** Toronto Pearson is Canada's busiest airport and a major transborder/international gateway; specific K Global demand patterns are set by the network schedule rather than third-party data. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for CYYZ specifically — treat as standard North American hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Major belly and freighter cargo gateway generally; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Cross-ref the route register for inbound/outbound wave structure relevant to this destination.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available as a major hub; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24 assumed; not independently confirmed. 🟧
- **Price / tankering angle:** Assess price differentials vs the outbound leg's origin at planning; no CYYZ-specific tankering signal sourced this pass. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to the CYYZ uplift itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international halls in **Terminal 1** and **Terminal 3**; US transborder passengers clear **US CBP preclearance** on-site before departure.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** US preclearance is a defining CYYZ feature for transborder connections — relevant to minimum-connect-time planning on any US-bound leg.
- **Late/overnight/diversion caveat:** The **Restricted Hours Operating Policy 00:30–06:29** is the dominant late/overnight constraint here rather than immigration-desk staffing — a schedule slipping into the restricted window has direct regulatory/noise-compliance consequences (§4). 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — the **Central Deicing Facility (CDF)**, reported the largest and most technologically advanced facility of its kind in the world: 65+ acres, six pads (each taking 2 widebody or 4 narrowbody aircraft simultaneously), **engines-on** operation after pushback and before taxi to the runway. 🟩
- **Season:** Typically **Oct–Apr/May**; ~3.17 M US gal (12 M L) of deicing/anti-icing fluid consumed per season.
- **Provisioning:** Average deice time < 5 min per aircraft, total throughput < 14 min; capable of up to ~500 aircraft/day at peak; glycol run-off is captured, tested and recycled via underground storage tanks.
- **Commercial impact:** Winter lake-effect snow/blowing-snow events combined with CDF queuing are the principal seasonal delay-risk drivers at this field — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter lake-effect snow/blowing snow/freezing rain**, mitigated by the CDF and CAT III capability (RWY 05) but still a recognised seasonal reliability factor, compounded by deicing-pad throughput at peak.
- **Ground-delay / flow-program exposure:** High, given the five-runway CSPO geometry and status as Canada's busiest, slot-coordinated Level 3 hub — expect NAV CANADA flow management in peak/adverse conditions. 🟧
- **On-time reliability picture:** Winter mornings (lake-effect/blowing snow) carry the highest schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed in reachable public sources this pass — GTAA operates a Noise Management Program with a dedicated Enforcement Office; specific charge structure not sourced. 🟧
- **Curfew infringement consequence:** The **Restricted Hours Operating Policy** combined with Transport Canada's annual night-movement cap means non-compliant operations in the 00:30–06:29 window carry both regulatory and community-relations consequences — GTAA reports near-100% fleet-wide compliance with noise operating procedures industry-wide.
- **Scheduling guardrails:** Build buffer into the day's last rotation so a normal operational delay does not push a landing or departure into the 00:30 restricted-hours boundary; treat any schedule slipping toward the boundary as a compliance-risk trigger.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current widebody gate/terminal assignment for our operation (T1 vs T3).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours (T1/T3).
- NAV CANADA flow-management/CTOT specifics for CYYZ (general practice assumed, not independently sourced).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Slot coordinator identity and exact coordination parameters.
- Noise-charge fee structure (if any) beyond the Restricted Hours Operating Policy.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current NAV CANADA flow-management/ground-delay status, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **NAV CANADA — Aeronautical Information Publications** — https://www.navcanada.ca/en/aeronautical-information/publications.aspx (retrieved 2026-07-26).
- GTAA — Restricted Hours Operating Policy v4.1 — https://cdn.torontopearson.com/-/media/project/pearson/content/community/noise-management/pdfs/gtaa-restricted-hours-operating-policy-v4-1.pdf (retrieved 2026-07-26). *Curfew regime.*
- GTAA — "Aircraft deicing" — https://www.torontopearson.com/en/whats-happening/stories/aircraft-deicing-2021 (retrieved 2026-07-26). *CDF detail.*
- GTAA — Noise Management Program overview — https://www.torontopearson.com/en/community/noise-management (retrieved 2026-07-26). *Enforcement Office / compliance.*
- OurAirports — https://ourairports.com/airports/CYYZ/ (retrieved 2026-07-26). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from NAV CANADA (CFS/CAP); K Global fields from live VAMSYS; 4-page pack. |
