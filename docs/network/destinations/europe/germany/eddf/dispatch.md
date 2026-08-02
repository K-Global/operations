# EDDF — Frankfurt/Main · Dispatch Page

**EDDF / FRA** · Frankfurt am Main, Hesse, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft — DFS eAIP-derived, K Global home-hub build

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EDDF Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Home hub / base** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | **Terminal 1** (Concourse A/"A-Plus", Concourse C13–C20) plus **Terminal 3** (piers G/H/J, opened 23 Apr 2026); **Terminal 2 closed 9 Jun 2026** for modernisation until the mid-2030s 🟧 |
| Widebody stands available | T1 "A-Plus" 8 stands (4× A380 or 7× B747 simultaneous); Concourse C13–C20 purpose-built A380 gates; T3 widebody allocation not yet confirmed 🟧 |
| Slot regime | **IATA Level 3** (fully coordinated) — coordinator **FHKD** (Flughafenkoordination Deutschland) |
| Curfew | **Core night ban 23:00–05:00**; shoulder-hour cap 22:00–23:00 & 05:00–06:00 🟥 |
| Primary handling agent | Fraport AG (Apron Control) plus third-party ground handlers — specific handler for our operation not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1, major-hub multi-supplier assumed; not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — T1 & T3 international halls; exact desk hours not confirmed 🟧 |
| De-icing | **Available** — dedicated remote pads DP1–DP4; season typ. Oct–Apr |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** (opened 1972) — Concourses A, B, C and Z, with the 2012 "A-Plus" extension adding dedicated widebody capacity. **Terminal 2** (opened 1994) — Concourses D (non-Lufthansa/non-Star-Alliance) and E (satellite); **suspended passenger operations 9 Jun 2026** for a full modernisation, not expected to reopen before the mid-2030s. **Terminal 3** (new) — opened **23 Apr 2026** in the airport's southern area, piers G, H and J, capacity ~19M pax/year, 21 next-generation security lanes with CT scanners; with T2 closed, T3 now handles nearly all non-Star-Alliance carrier traffic.
- **Our operation uses:** Historically, long-haul widebody international traffic has concentrated in **T1 Concourse A/"A-Plus"** (Lufthansa-hub-style long-haul) and **Concourse C13–C20** (purpose-built A380 gates, lounges boarding directly onto the upper deck). 🟧 Confirm current gate assignment given the T2-closure/T3-opening transition described above.
- **International arrivals / CBP-equivalent hall:** International arrivals clear passport control in T1 or T3 depending on gate assignment; T1↔T3 connection is via the extended **SkyLine** people-mover, roughly an 8-minute ride — build connection time accordingly for any onward network leg.
- **Notes:** 🟧 Terminal programme is **mid-transition in 2026** (T2 closed, T3 newly opened) — confirm current gate/concourse assignment with handling before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** T1 "A-Plus" (8 stands, A380/747-capable) and Concourse C13–C20 (purpose-built A380 gates) are the confirmed widebody clusters; T3's widebody gate allocation is not yet confirmed. 🟧
- **Stands NOT usable by our types:** Narrowbody-oriented Concourse B/D gates are not sized for Code E/F — do not plan a widebody onto them.
- **Remote / hardstand positions:** Approx. 180+ total apron parking positions across Aprons A–E are reported (Apron A ~29, B ~17, C ~10, D/E ~4 each) — **figure is blog/aggregator-sourced, not an official Fraport/ACI count** 🟧; remote/hardstand use for scheduled widebody international service is atypical, confirm with handling if a contact gate is unavailable.
- **Contact vs remote for our arrivals:** Expect a contact widebody gate for a scheduled home-hub turn.
- **Ground-movement stand caveats:** The **RWY 18 turnaround area** and several AIP-flagged taxiway junctions (TWY N7, R15, TWY Y, TWY L, TWY M) affect ground routing between stands and the runway system — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — coordinator **Flughafenkoordination Deutschland GmbH (FHKD / "Fluko")** under §27a(1) LuftVG. 🟥
- **Curfew / night restriction:** **Core night ban 23:00–05:00** — no scheduled take-offs or landings. Shoulder hours (22:00–23:00 and 05:00–06:00) capped at an average **133 movements/night/year**. Daytime noise-class restriction Mon–Fri 08:00–20:00 only (not weekends) for aircraft without a noise-reduced ICAO-approved class. Emergency/weather-forced landings and disaster-relief/medical flights are exempt throughout the night. 🟥
- **Delayed-flight nuances:** A take-off delayed past 23:00 is permitted **only** if the scheduled departure was before 23:00 **and** the delay cause was outside the airline's control (e.g. weather), requiring an individual fee-based Hessian-authority permit — **prohibited outright after midnight**. A delayed landing scheduled before 23:00 does not need an individual exemption for 23:00–00:00, but **after midnight a delayed arrival must divert to another airport**.
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested, slot-coordinated EU hub. 🟧
- **Commercial impact:** Schedule integrity (on-time pushback) has direct network consequences given the Level 3 regime; the hard curfew makes **last-rotation buffer** and **on-time performance into the last landing slot before 23:00** the two biggest scheduling guardrails at the home hub.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Fraport AG operates Apron Control (push-back approvals); the specific ground handler(s) contracted for our operation are not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 18 min / taxi-out 22 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services all expected at a home-hub Code E/F stand (standard major-hub provision).
- **Turnaround risk items:** Gate availability during peak banks (T1/T3 transition period adds uncertainty), de-icing-pad throughput in winter, and ground-routing complexity around the RWY 18 turnaround/AIP-flagged taxiway junctions can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** As the home hub, EDDF anchors year-round intercontinental and European trunk demand across the K Global network; connection banks and route mix are set by the network schedule rather than by third-party demand data.
- **Day-of-week / seasonal pattern:** Not independently sourced for EDDF specifically — treat as standard European-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Frankfurt is a major European belly and freighter cargo gateway generally; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** As the base, EDDF sets the master connection-bank timing for the network — cross-ref the route register for inbound/outbound wave structure.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available as a major hub; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24 assumed; not independently confirmed. 🟧
- **Price / tankering angle:** As the home base, EDDF is typically the **tankering reference point** rather than a tanker-out destination — assess price differentials to outstations per leg. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EDDF itself — relevant only to the outbound long-haul/polar leg profile, not the EDDF uplift.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international halls in **Terminal 1** and **Terminal 3**.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at EDDF.
- **Late/overnight/diversion caveat:** The **core night ban 23:00–05:00** is the dominant late/overnight constraint here rather than immigration-desk staffing — a delayed arrival past midnight must divert regardless of desk hours (§4). 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — dedicated remote de-icing pads: **DP1/DP2** (west of the RWY 18 threshold, "DPW") used primarily for RWY 18 departures with restricted use for RWY 07 departures; **DP3E/DP3W** at TWY N7; **DP4E/DP4W** at TWY V159/V161, preferred for RWY 25/07 departures. 🟩
- **Season:** Typical Central European de-icing season, roughly **Oct–Apr**; Fraport publishes an annual Deicing Procedure document each season.
- **Provisioning:** Most pads have east/west halves enabling **simultaneous de-icing of two aircraft**, supporting high winter throughput.
- **Commercial impact:** Winter fog/inversion days combined with de-icing-pad queuing are the principal seasonal delay-risk drivers at the home hub — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter radiation/freezing fog under Rhine-Main basin temperature inversions** — mitigated by CAT III infrastructure on all three parallel runways but still a recognised seasonal reliability factor, compounded by de-icing throughput.
- **Ground-delay / flow-program exposure:** High, given the three-parallel-plus-crossing-runway geometry and status as one of Europe's busiest, slot-coordinated Level 3 hubs — expect EUROCONTROL flow management in peak/adverse conditions. 🟧
- **On-time reliability picture:** Winter mornings (fog/inversion) and the T1/T3 terminal-transition period (2026) carry the highest schedule-risk exposure at the home hub. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Noise-related charges apply under the Airport Charges Regulation (in force since 1 Jan 2023), including a **3× daytime-rate surcharge** for delayed landings/take-offs after 23:00 — a direct financial disincentive against curfew-adjacent operations.
- **Curfew infringement consequence:** Core night ban 23:00–05:00 is a **hard movement restriction**, not merely a charge — a prohibited take-off/landing outside the exemption criteria is not simply penalised, it is disallowed (§4).
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure past 23:00; treat any schedule slipping toward midnight as a **diversion-risk trigger** for inbound legs, per the delayed-flight rules in §4.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current (post-Terminal-2-closure/Terminal-3-opening) widebody gate assignment for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours (T1/T3).
- EUROCONTROL CTOT/ATFM specifics for EDDF (general practice assumed, not independently sourced).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Apron stand count (~180+) — blog/aggregator-sourced, not an official figure.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current AUP/UUP or RAD status in the Langen FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **DFS AIP Germany, AD 2 EDDF** (2011–2012 cycle extract) — https://silo.tips/download/eddf-ad-21-aerodrome-location-indicator-and-name-eddf-frankfurt-main-eddf-ad-22 (retrieved 2026-07-25).
- Fraport — "Runway System and Operating Hours" — https://www.fraport.com/en/sustainability/dialog-with-neighbors/noise-and-air/flight-operations/runway-system-and-operating-hours.html (retrieved 2026-07-25). *Curfew regime.*
- Fraport — "Active Noise Abatement" — https://www.fraport.com/en/sustainability/dialog-with-neighbors/noise-and-air/measures/active-noise-abatement.html (retrieved 2026-07-25). *Noise charges.*
- Fraport — Deicing Procedure (DIP) 2024-2025 — https://cdm.frankfurt-airport.com/content/dam/fraport-company-cdm/documents/binary/documents/deicing-procedure/EN-DIP%202024-2025.pdf (retrieved 2026-07-25).
- Fluko / FHKD — https://fluko.org/en/flughaefen/flughaefen-level-3/ (retrieved 2026-07-25). *Slot-coordination level/coordinator.*
- FrankfurtRide — Frankfurt Airport terminals guide — https://frankfurtride.com/blog/frankfurt-airport-terminals-guide/ (retrieved 2026-07-25). *Terminal/concourse structure, T2/T3 transition dates.*
- The Local / International Law Office — curfew legal-history sources (see Briefing page for full citations).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS; folded to 4-page hub pack. |
