# EHAM — Amsterdam/Schiphol · Dispatch Page

**EHAM / AMS** · Haarlemmermeer, Noord-Holland, Netherlands · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Netherlands (LVNL eAIP)-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EHAM Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate** `[VAMSYS mirror 2026-07-26]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EBBR, EDDF, EDDL** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **18 min / 22 min** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single-terminal complex, three departure halls; expect a Pier E/F/G non-Schengen widebody gate for a long-haul K Global arrival/departure 🟧 |
| Widebody stands available | Pier E/F/G widebody cluster; 3 gates reported A380-capable (G9, E18, E24) 🟧 aggregator-sourced, not an official count |
| Slot regime | **IATA Level 3** (fully slot-coordinated) — every movement requires a prior slot |
| Curfew | **Night slot-restriction window 2200–0600 (2100–0500 winter)** `[LVNL eAIP AD 2.EHAM 2.20]` 🟥 |
| Primary handling agent | Multiple handlers on field (KLM Ground Services + independents); K Global-contracted handler not confirmed 🟧 |
| Fuel supplier(s) | Confirmed H24 fuelling on main field; specific into-plane supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — confirmed H24 by the AIP 🟩 |
| De-icing | Assumed available given the field's scale and North Sea winter climate; not independently confirmed this pass 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Schiphol uses a **single-terminal concept** — one large terminal building split into **three departure halls (1, 2, 3)**, connected airside. Hall 1 serves Piers B/C (Schengen); Hall 2 serves Piers D (split lower non-Schengen / upper Schengen) and E (dedicated non-Schengen, historically the SkyTeam/KLM/Delta hub concourse); Hall 3 serves Piers F/G (non-Schengen) and the shared H/M concourse (low-cost, H non-Schengen/M Schengen). A new **Pier A** is under construction, reported to open around April 2027. 🟧 Pier/gate counts are aggregator-sourced, not an official Schiphol Group figure this pass.
- **Our operation uses:** Expect a **Pier E/F/G** non-Schengen widebody gate for a long-haul K Global service — this cluster has historically hosted the field's SkyTeam/KLM-style long-haul widebody traffic. 🟧 Confirm current gate assignment with handling; Schiphol's terminal programme (new Pier A) is mid-build in this period.
- **International arrivals / CBP-equivalent hall:** International (non-Schengen) arrivals clear passport control via Piers E/F/G/D-lower; confirm connection-time implications for any onward K Global network leg.
- **Notes:** 🟧 Pier A construction is ongoing through this period — confirm current gate/pier assignment with handling before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E) stands:** Concentrated on **Pier E/F/G**; 3 gates (reported G9, E18, E24) are additionally A380-capable. 🟧 Not an official Schiphol Group count.
- **Stands NOT usable by our types:** Narrowbody-oriented Pier H/M (low-cost) gates are not sized for Code E — do not plan a widebody onto them.
- **Remote / hardstand positions:** Not confirmed in reachable sources this pass — a field of this scale is assumed to carry some remote/hardstand capacity. 🟧
- **Contact vs remote for our arrivals:** Expect a contact widebody gate for a scheduled K Global arrival/departure.
- **Ground-movement stand caveats:** Ground routing between stands and the runway system depends heavily on the **active runway combination** (§10/§11 of the Briefing) — the Ground frequency itself is split by runway group (Briefing §8). See [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — fully slot-coordinated; every movement, including private/business aviation, requires a prior slot. 🟥
- **Curfew / night restriction:** A structured **night slot-restriction window 2200–0600 (2100–0500 winter)** applies per the AIP's own local aerodrome regulations — no landing/take-off without an applicable slot in that window; general aviation in principle not permitted at all in that window. `[LVNL eAIP AD 2.EHAM 2.20]` 🟥 A further, stricter night-closure and private-jet-restriction policy has been publicly proposed in recent years; **current binding legal/AIP status not confirmed this pass** — treat the AIP figure above as operative and re-verify at planning.
- **Movement-cap legal saga:** A 2025 Airport Traffic Decree amendment proposed capping annual movements at **478,000** (with night movements reduced from 32,000 to 27,000); the Dutch Council of State **annulled this cap on 11 March 2026** as inadequately justified, returning the 2008 Airport Traffic Decree to force without a fixed total cap — though the government has stated it intends to hold an operational cap in practice pending new legislation. 🟧 **Live, evolving legal matter — confirm current status at planning; do not treat any specific movement number as settled.**
- **CTOT / flow control:** Domestic IFR flights must comply with CTOT issued by the Network Manager per the AIP's local regulations. 🟧 Broader EUROCONTROL ATFM exposure expected as standard practice for a congested EU Level 3 hub — not independently EHAM-sourced this pass.
- **Commercial impact:** Schedule integrity is doubly constrained here — by the Level 3 slot regime **and** by the structured night slot-restriction window. Build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure into the 2200–0600 (2100–0500 winter) window.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Multiple ground handlers operate on field (KLM Ground Services among them); the specific handler contracted for the K Global operation is not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 18 min / taxi-out 22 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services all expected at a major-hub Code E stand; note the AIP's own restriction on APU use at stands with fixed 400 Hz/GPU/PCA (shut down as soon as practicable after arrival).
- **Turnaround risk items:** Gate availability during peak banks (Pier A construction period adds some uncertainty), a runway-combination change mid-turn affecting taxi routing, and winter fog/low-cloud events are the recurring turnaround-stretch risks.

---

## 6. Load factors & seasonality

- **Demand peaks:** Schiphol is a major European hub and leisure/business gateway; connection banks and route mix for the K Global operation are set by the network schedule rather than by third-party demand data. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for the K Global operation specifically — treat as standard major-European-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Schiphol is a major European cargo gateway generally; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not applicable in the same sense as a K Global base — EHAM is a destination/alternate; cross-ref the route register for the network's inbound/outbound wave structure at this field.

---

## 7. Fuel

- **Supplier / into-plane:** Fuelling confirmed **H24** on the main field per the AIP's general operating-hours table; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Main-field fuelling H24; a secondary **Schiphol-East** facility (business/GA-oriented) keeps shorter hours (0530–2230, 0430–2130) with PN required outside those hours — not normally relevant to a main-apron widebody turn. `[LVNL eAIP AD 2.EHAM 2.3]`
- **Price / tankering angle:** Assess price differential against home-base (EDDF) tankering economics per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration specific to EHAM itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — confirmed **H24** by the AIP's general operating-hours table. 🟩
- **CBP-equivalent / immigration hours:** H24 confirmed. `[LVNL eAIP AD 2.EHAM 2.3]`
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme confirmed.
- **Late/overnight/diversion caveat:** The **night slot-restriction window (2200–0600, 2100–0500 winter)** is the dominant late/overnight constraint here rather than immigration-desk staffing (which is H24) — a delayed arrival lacking a slot in that window carries diversion/re-planning risk. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** Not independently confirmed in reachable sources this pass — a North Sea hub of this scale and winter climate is assumed to carry dedicated de-icing infrastructure. 🟧
- **Season:** Typical North Sea European de-icing season assumed (roughly Oct–Apr); not confirmed for EHAM specifically. 🟧
- **Provisioning:** Not confirmed this pass. 🟧
- **Commercial impact:** Winter frontal weather (wind, fog/low-cloud, occasional snow) combined with the field's continuous runway-reconfiguration workload are the principal seasonal delay-risk drivers — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** The **wind/noise-driven Preferential Runway System** itself — a wind shift mid-bank can force a runway-combination change with associated sequencing delay; winter fog/low-cloud events are the secondary driver. 🟧
- **Ground-delay / flow-program exposure:** High, given the field's status as one of Europe's busiest, fully slot-coordinated Level 3 hubs — expect EUROCONTROL flow management in peak/adverse conditions. 🟧
- **On-time reliability picture:** Winter mornings (fog/low-cloud) and any runway-combination change during a bank carry the highest identifiable schedule-risk exposure. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources this pass — Schiphol has publicly pursued noise/emission-differentiated charging and aircraft-type operating restrictions in recent years; **current binding status not confirmed** — verify at planning. 🟧
- **Curfew infringement consequence:** The **night slot-restriction window (2200–0600, 2100–0500 winter)** is a hard restriction under the AIP's own local regulations — a movement without an applicable slot in that window is not permitted; treat as a hard scheduling boundary, not merely a charged inconvenience.
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure into the night slot-restriction window; treat the ongoing **movement-cap legal saga** (§4) as a live capacity-planning risk to monitor rather than a settled constraint.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current widebody gate/pier assignment for the K Global operation (Pier A construction is ongoing through this period).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours (main-field H24 confirmed; supplier not confirmed).
- De-icing infrastructure, season and provisioning detail.
- Current legal status of the movement-cap saga and of any stricter night-closure/private-jet-restriction proposal.
- Noise-charge/aircraft-type-restriction regime detail.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, active runway combination. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **LVNL eAIP (AIP Netherlands), AD 2.EHAM 2.3/2.20**, AIRAC AMDT 05-2026, effective 2026-05-14 — https://eaip.lvnl.nl/ (retrieved 2026-07-26). *Operating hours, customs, slot/night-restriction regime.*
- Schiphol — "Noise and runway combinations" — https://www.schiphol.nl/en/schiphol-as-a-neighbour/noise-and-runway-combinations/ (retrieved 2026-07-26).
- NL Times — "Government sticks to 478,000 Schiphol flight cap despite legal setback" — https://nltimes.nl/2026/03/24/government-sticks-478000-schiphol-flight-cap-despite-legal-setback (retrieved 2026-07-26). *Movement-cap court ruling.*
- Aviation Week — "Schiphol Flight Cap Not Valid, Dutch High Court Rules" — https://aviationweek.com/air-transport/airports-networks/schiphol-flight-cap-not-valid-dutch-high-court-rules (retrieved 2026-07-26).
- Wikipedia — "Amsterdam Airport Schiphol" — https://en.wikipedia.org/wiki/Amsterdam_Airport_Schiphol (retrieved 2026-07-26). *Terminal/pier structure.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Netherlands (LVNL); K Global fields from live VAMSYS; 4-page pack. |
