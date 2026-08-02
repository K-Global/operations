# EGLL — Heathrow · Dispatch Page

**EGLL / LHR** · Hillingdon, Greater London, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EGLL Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not individually confirmed — Heathrow operates four active terminals (T2, T3, T4, T5); widebody-capable stands exist in all four 🟧 |
| Widebody stands available | A380-capable clusters in T5 Concourse C (7 stands), T3 Pier 6, T4 (4 stands); T2 also widebody-capable | 
| Slot regime | **IATA Level 3** — coordinator **Airport Coordination Limited (ACL)** 🟥 |
| Curfew | Night restricted period ≈2300–0400; night quota period ≈2330–0600 under the Quota Count system 🟥 |
| Primary handling agent | Not confirmed for our operation 🟧 |
| Fuel supplier(s) | Hydrant refuelling; very limited bowser capacity; specific into-plane supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — H24 |
| De-icing | Available — "by arrangement with handling agent"; no dedicated pad locations confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** closed (June 2015, site absorbed into T2). **Terminal 2** ("The Queen's Terminal," opened 2014) — Star Alliance hub plus several unaligned carriers. **Terminal 3** (opened 1961) — most Oneworld carriers plus some SkyTeam/unaligned; Pier 6 is A380-capable. **Terminal 4** (opened 1986) — most SkyTeam carriers plus some Oneworld (Qatar Airways, Malaysia Airlines) and unaligned; south of the southern runway, linked to the cargo terminal via tunnel. **Terminal 5** (opened 2008) — exclusive hub for British Airways (Iberia co-located); Concourses A/B/C, C is A380-capable (7 stands). `[Wikipedia, tier-4 corroboration]`
- **Our operation uses:** Not confirmed — depends on handling-agent/alliance-partner arrangement at time of booking; confirm current gate assignment with handling before finalising a stand plan. 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear UK Border Force in the assigned terminal; **inter-terminal transfer for connections should be planned generously** given Heathrow's scale — no specific transfer-time figure confirmed this pass. 🟧
- **Notes:** Terminal/gate assignment for a given operation is not static at a hub this size — confirm each booking.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** T5 Concourse C (7× A380-capable), T3 Pier 6 (A380-capable), T4 (4× A380 stands), T2 (widebody-capable) are the confirmed widebody clusters. 🟧 Specific stand assignment for our operation not confirmed.
- **Stands NOT usable by our types:** Narrowbody-oriented gates/piers at each terminal are not sized for Code E/F — do not plan a widebody onto them.
- **Remote / hardstand positions:** Apron surface across the field is predominantly concrete (Stand 357 uses block paving) `[UK AIP AD 2.8]`; remote/hardstand use for scheduled widebody international service is atypical at this hub — confirm with handling if a contact gate is unavailable.
- **Contact vs remote for our arrivals:** Expect a contact widebody gate for a scheduled international arrival.
- **Ground-movement stand caveats:** Nose-in parking throughout; most stands use 'Safedock' VDGS, remainder marshalled `[UK AIP AD 2.9]`. See [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — coordinator **Airport Coordination Limited (ACL)**. 🟥
- **Curfew / night restriction:** Night restricted period **≈2300–0400** (noisiest QC/8, QC/16 aircraft barred); night quota period **≈2330–0600** governed by the **Quota Count (QC)** system — movement cap, noise-budget cap, **QC/4 banned outright**, de-facto **QC/2 cap** on night movements; voluntary industry agreement of no scheduled arrivals before 0430. 🟥 Exact current-season numeric movement/QC budget not confirmed. 🟧
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated hub. 🟧
- **Commercial impact:** Schedule integrity (on-time pushback/landing) has direct network consequences under the Level 3 regime; the night restriction/quota regime makes **last-rotation buffer** and **on-time arrival ahead of the night restricted period** the two biggest scheduling guardrails at this field.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Handling confirmed H24 generically per AIP; the specific ground handler(s) contracted for our operation are not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 20 min / taxi-out 25 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services all expected at a major-hub Code E/F stand.
- **Turnaround risk items:** Gate availability during peak banks, segregated-mode runway-role logic affecting taxi time to/from the assigned runway, and slot-driven schedule pressure can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** As a major intercontinental hub, EGLL sustains year-round high demand; specific K Global route-level demand patterns are set by the network schedule rather than third-party data.
- **Day-of-week / seasonal pattern:** Not independently sourced for EGLL specifically — treat as standard European-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Heathrow operates a dedicated cargo terminal with full cargo-handling facilities and a Cargo Tunnel link to Terminal 4 `[UK AIP AD 2.4, Wikipedia]`; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** As a non-base destination, EGLL connection-bank timing is set by the network schedule — cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** AVTUR Jet A-1; **hydrant refuelling system**; specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** H24 `[UK AIP AD 2.3/2.4]`; **AIP explicitly notes "very limited bowser capacity"** — do not plan a bowser-dependent uplift as a default.
- **Price / tankering angle:** Assess price differentials to preferred alternates/base per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EGLL itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — H24 `[UK AIP AD 2.3]`.
- **CBP-equivalent / immigration hours:** H24 confirmed generically; desk-specific detail not confirmed. 
- **Pre-clearance / visa-transit notes:** Standard UK international entry per nationality; no pre-clearance programme at EGLL.
- **Late/overnight/diversion caveat:** The **night restricted period ≈2300–0400** is the dominant late/overnight constraint here rather than immigration-desk staffing — plan schedule buffer to avoid a night-period arrival/departure conflict. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — AIP states "by arrangement with handling agent"; no dedicated remote pad locations confirmed in reachable sources. 🟧
- **Season:** Typical UK maritime winter, roughly **Nov–Mar**; mechanical/chemical (ethylene glycol) de-icing/anti-icing confirmed for the movement area `[UK AIP AD 2.7]`.
- **Provisioning:** Aircraft de-icing procedure/throughput not itemised in the AIP sections reached this pass. 🟧
- **Commercial impact:** Winter fog/inversion days combined with any de-icing queuing are the principal seasonal delay-risk drivers — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Autumn/winter radiation fog** under London Basin conditions, compounded by the **segregated-mode runway operation** (only one runway landing at a time) and very high sustained traffic density.
- **Ground-delay / flow-program exposure:** High — Level 3 slot-coordinated hub with segregated-mode capacity constraints; expect EUROCONTROL flow management in peak/adverse conditions. 🟧
- **On-time reliability picture:** Winter mornings (fog) and any easterly-configuration day (fixed runway roles, less operational flexibility than westerly alternation) carry elevated schedule-risk exposure. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed in reachable sources this pass — Heathrow is known to apply noise-related landing-charge differentials by Quota Count band as standard major-UK-airport practice; confirm current charge schedule. 🟧
- **Curfew infringement consequence:** Night restricted period is a **hard movement restriction** for the noisiest QC bands; the quota period adds a movement/noise-budget cap with **QC/4 banned outright**.
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure into the night restricted period; treat any schedule slipping toward the restricted window as a **diversion/penalty-risk trigger**.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate assignment for our operation (not confirmed — depends on handling-agent/alliance arrangement).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider (hydrant-system operator).
- De-icing pad locations/procedure.
- EUROCONTROL CTOT/ATFM specifics for EGLL (general practice assumed, not independently sourced).
- Current-season exact night-quota numeric movement/QC budget.
- Noise-charge schedule by Quota Count band.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **UK AIP (NATS AIS), AD 2‑EGLL**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGLL-en-GB.html (retrieved 2026-07-26).
- Wikipedia — "Heathrow Airport" — https://en.wikipedia.org/wiki/Heathrow_Airport (retrieved 2026-07-26). *Terminal/alliance structure.*
- Wikipedia — "Airport slot" — https://en.wikipedia.org/wiki/Airport_slot (retrieved 2026-07-26). *ACL/Level 3 coordination.*
- GOV.UK — night flight restriction consultation pages (DfT) (retrieved 2026-07-26). *Night quota regime.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
