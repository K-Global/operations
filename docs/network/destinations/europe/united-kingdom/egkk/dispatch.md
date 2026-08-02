# EGKK — Gatwick · Dispatch Page

**EGKK / LGW** · Crawley, West Sussex, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EGKK Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not individually confirmed — **North Terminal** and **South Terminal** are landside-connected only by an automated people-mover 🟧 |
| Widebody stands available | North Terminal has **3 A380-capable stands**; both terminals provide general widebody-capable gates |
| Slot regime | **IATA Level 3** — coordinator **Airport Coordination Limited (ACL)** 🟥 |
| Curfew | Night period 2300–0700; night quota period 2330–0600 with seasonal movement/QC limits (§4) 🟥 |
| Primary handling agent | Not confirmed for our operation; Swissport, Menzies, dnata operate at the field generally 🟧 |
| Fuel supplier(s) | Hydrant refuelling; very limited bowser capacity; specific into-plane supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — H24 |
| De-icing | Available — "by arrangement with handling agent"; no dedicated pad locations confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** **South Terminal** — 32 gates with jetbridges plus 7 remote/bus gates (Piers 1/2/3); one of the world's first enclosed-pier terminals (pier opened 1958). **North Terminal** — opened 1988, 31 gates with jetbridges including **3 A380-capable stands** (Piers 4/5/6). The two terminals are connected **landside only** via a 0.75-mile automated people-mover — **no airside connection**. `[Wikipedia]`
- **Our operation uses:** Not confirmed — since Jan 2017, **easyJet consolidated into North Terminal**; **British Airways and Virgin Atlantic use South Terminal**. Confirm current gate assignment with handling before finalising a stand plan. 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear UK Border Force in the assigned terminal; the North↔South landside-only connection means a **misconnect between terminals cannot be resolved airside** — build generous connection buffer if applicable.
- **Notes:** Pier 6 (North Terminal) was renumbered 23 Jan 2026 with a pier extension due 2027 — terminal programme is in modest ongoing transition; confirm current gate/pier assignment with handling. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** North Terminal's **3 A380-capable stands** (Piers 4/5/6) are the confirmed heavy-widebody cluster; both terminals otherwise provide general widebody-capable gates. 🟧 Specific stand assignment for our operation not confirmed.
- **Stands NOT usable by our types:** Narrowbody-oriented gates are not sized for Code E/F — do not plan a widebody onto them.
- **Remote / hardstand positions:** South Terminal includes 7 remote/bus gates (Pier 3, stands 90–95) `[Wikipedia]`; remote/hardstand use for scheduled widebody international service is atypical — confirm with handling if a contact gate is unavailable.
- **Contact vs remote for our arrivals:** Expect a contact widebody gate for a scheduled international arrival.
- **Ground-movement stand caveats:** Nose-in parking, push-back required except stands 41/43; most stands use A-VDGS `[UK AIP AD 2.9]`. See [Briefing §13](index.md) and the Departure/Arrival taxi sections — note the single-effective-runway structure (§4 below) can compress ground-movement timing during main-runway disruption.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — coordinator **Airport Coordination Limited (ACL)**. 🟥
- **Curfew / night restriction:** DfT-designated scheme — **night period 2300–0700** (QC/4, QC/8, QC/16 barred from scheduling except in exceptional circumstances); **night quota period 2330–0600** with seasonal limits: movement **Winter 3,250 / Summer 11,200**; noise quota (QC) **Winter 1,785 / Summer 5,150** `[GOV.UK DfT consultation, current regime]`. 🟥
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated, single-effective-runway hub — capacity constraints here are structurally tighter than a conventional dual-independent-runway airport. 🟧
- **Commercial impact:** Schedule integrity has outsized consequences given the **single-effective-runway** structure — any main-runway disruption (inspection, incident, closure) has a magnified capacity impact versus a dual-independent-runway field. **Last-rotation buffer** ahead of the night period is the primary scheduling guardrail.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Handling confirmed H24 generically per AIP; **Swissport**, **Menzies Aviation** and **dnata** are confirmed to operate at Gatwick generally, but the specific agent(s) contracted for our operation are not confirmed. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 16 min / taxi-out 18 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a Code E/F stand.
- **Turnaround risk items:** Gate availability during peak banks, and — distinctively at this field — any **main-runway disruption forcing standby-runway use** can materially affect ground-movement flow and turnaround timing given the single-effective-runway structure.

---

## 6. Load factors & seasonality

- **Demand peaks:** Gatwick is a major London-area leisure/business gateway; specific K Global route-level demand patterns are set by the network schedule.
- **Day-of-week / seasonal pattern:** Not independently sourced for EGKK specifically — treat as a business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not itemised in the AIP sections reached this pass; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** As a non-base destination, EGKK connection-bank timing is set by the network schedule — cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** AVTUR Jet A-1; **hydrant refuelling system**; specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** H24 `[UK AIP AD 2.3/2.4]`; **AIP explicitly notes "very limited bowser capacity"** — do not plan a bowser-dependent uplift as a default.
- **Price / tankering angle:** Assess price differentials to preferred alternates/base per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EGKK itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — H24 `[UK AIP AD 2.3]`.
- **CBP-equivalent / immigration hours:** H24 confirmed generically; desk-specific detail not confirmed.
- **Pre-clearance / visa-transit notes:** Standard UK international entry per nationality; no pre-clearance programme at EGKK.
- **Late/overnight/diversion caveat:** The **night period 2300–0700** is the dominant late/overnight constraint here rather than immigration-desk staffing — plan schedule buffer accordingly. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — AIP states "by arrangement with handling agent"; no dedicated remote pad locations confirmed. 🟧
- **Season:** Typical UK maritime winter, roughly **Nov–Mar**; mechanical/chemical de-icing (**potassium acetate primary, ethylene glycol in exceptional circumstances**) confirmed for the movement area, with an Annual Snow Plan available on request `[UK AIP AD 2.7]`.
- **Provisioning:** Aircraft de-icing procedure/throughput not itemised in the AIP sections reached this pass. 🟧
- **Commercial impact:** Winter weather combined with any de-icing queuing is a seasonal delay-risk driver, compounded by the single-effective-runway capacity structure. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** The **single-effective-runway structure** is the field's defining reliability characteristic — any main-runway disruption (weather, inspection, incident) has an outsized capacity impact since the standby runway cannot independently absorb traffic in parallel.
- **Ground-delay / flow-program exposure:** High — Level 3 slot-coordinated hub with single-effective-runway capacity constraints; expect EUROCONTROL flow management in peak/adverse conditions. 🟧
- **On-time reliability picture:** Winter weather days and any main-runway-unavailability event carry the highest schedule-risk exposure. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed in reachable sources this pass — Gatwick tracks airline noise performance via its own **Airline Noise Performance Table (ANPT)** (QC-per-seat, CDA compliance, NPR track-keeping); confirm current charge schedule. 🟧
- **Curfew infringement consequence:** Night period 2300–0700 is a **hard movement restriction** for the noisiest QC bands; the quota period adds seasonal movement/noise-budget caps (§4).
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure into the night period; treat any schedule slipping toward 2300 as a **diversion/penalty-risk trigger**.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate assignment for our operation (not confirmed — depends on handling-agent/alliance arrangement).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider (hydrant-system operator).
- De-icing pad locations/procedure.
- EUROCONTROL CTOT/ATFM specifics for EGKK (general practice assumed, not independently sourced).
- Noise-charge schedule.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Northern Runway independent-dual-runway project — confirm current status before any future schedule planning assumes added capacity.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current main/standby runway status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **UK AIP (NATS AIS), AD 2‑EGKK**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGKK-en-GB.html (retrieved 2026-07-26).
- Wikipedia — "Gatwick Airport" — https://en.wikipedia.org/wiki/Gatwick_Airport (retrieved 2026-07-26). *Terminal structure, ownership.*
- Gatwick Airport — "Northern Runway" — https://www.gatwickairport.com/company/future-plans/northern-runway.html (retrieved 2026-07-26).
- GOV.UK — night flight restriction consultation (DfT) — https://www.gov.uk/government/consultations/night-flight-restrictions-heathrow-gatwick-and-stansted-airports-from-october-2025 (retrieved 2026-07-26). *Night quota regime.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
