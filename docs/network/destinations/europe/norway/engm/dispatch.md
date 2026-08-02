# ENGM — Oslo Gardermoen · Dispatch Page

**ENGM / OSL** · Ullensaker, Akershus/Viken, Norway · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-data build

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [ENGM Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single terminal, multi-pier (West Wing/domestic, South Pier, North Pier, East Pier/international) — exact gate assignment not confirmed 🟧 |
| Widebody stands available | East Pier widebody expansion reported; exact current count not confirmed 🟧 |
| Slot regime | Not confirmed — verify current IATA level 🟧 |
| Curfew | Reported 23:00–06:00 (north-side exception) — sourced to an older reference 🟧 |
| Primary handling agent | Not confirmed in reachable public sources 🟧 |
| Fuel supplier(s) | Not confirmed in reachable public sources 🟧 |
| Customs / PoE for pax | **Yes** — domestic-transfer baggage re-clearance nuance for most itineraries; exact desk hours not confirmed 🟧 |
| De-icing | **Available** — three platforms reported; fluid use restricted (Trandum Delta aquifer) |

---

## 2. Terminals & concourses

- **Terminal layout:** Single main terminal building (expanded 2017 with the North Pier). Piers: **West Wing** (domestic, A-gates style), **South Pier** (B-gates, built 2012), **North Pier** (opened 2017, C/D-gates), **East Pier** (international; E-gates Schengen, F-gates non-Schengen, with a non-Schengen expansion including "flexigates" that can switch Schengen/non-Schengen status).
- **Our operation uses:** Not independently confirmed — a long-haul/widebody arrival would be expected on the East Pier's international/widebody-expanded gates. 🟧
- **International arrivals / CBP-equivalent hall:** East Pier international hall; note a reported **domestic-transfer customs process** exists for most through-ticketed connections (bypassing full re-clearance), with some origin exceptions — confirm applicability per itinerary.
- **Notes:** East Pier "flexigate" Schengen/non-Schengen toggle gates have had reported incidents of doors opening on the wrong side of the border-control boundary — a pax-flow awareness item, not a tactical-flying one. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** East Pier widebody expansion (added specifically to support long-haul/direct intercontinental services) is the relevant cluster; exact gate numbers/count not confirmed. 🟧
- **Stands NOT usable by our types:** Domestic/regional West Wing gates are not expected to be sized for Code E/F — do not plan a widebody onto them without confirmation.
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Expect a contact gate for a scheduled international widebody arrival, pending confirmation.
- **Ground-movement stand caveats:** Two runway-end ground radars are reported for surface monitoring; no named taxiway hot spots confirmed — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable public sources — verify against the current IATA Worldwide Airport Slot Guide (WSG) or Avinor's slot notice for OSL. 🟧
- **Curfew / night restriction:** Reported **23:00–06:00**, with landing/takeoff on the north side reportedly permitted as an exception — this is sourced to an older reference and **must be checked against a current AIP/NOTAM** before being treated as the operative regime. 🟥 (treat as a hard constraint pending verification)
- **CTOT / flow control:** Not independently ENGM-sourced; EUROCONTROL Network Manager ATFM/CTOT regulation may apply as general Northern-Europe practice. 🟧
- **Commercial impact:** Until the curfew/slot regime is confirmed, build conservative schedule buffer around the reported night-restriction window.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 14 min / taxi-out 16 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a major international-hub Code E/F stand (standard provision, not independently ENGM-sourced).
- **Turnaround risk items:** Winter de-icing-pad throughput and fluid-provisioning constraints (aquifer-driven restrictions, §3.4 Briefing) are the most likely turnaround-stretching factors in season.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for K Global's specific operation — treat as standard European-capital business/leisure mix pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Not confirmed for this operation. 🟧
- **Connection banks:** Cross-ref the route register for inbound/outbound wave structure relevant to this destination.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Assess price differential vs the departure field per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** No field-specific cold-soak note found; standard Jet A-1 assumed pending confirmation.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — East Pier international hall.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen entry (Norway participates in Schengen though outside the EU); a **domestic-transfer customs process** exists for most through-ticketed onward-domestic connections, bypassing full re-clearance — confirm applicability per itinerary/origin.
- **Late/overnight/diversion caveat:** The reported **23:00–06:00 night restriction** (north-side exception) is the dominant late/overnight constraint pending verification — see §4. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — **three de-icing platforms reported** (sourced to an AIP extract via a secondary reference; not independently re-confirmed this pass). 🟧
- **Season:** Typical Nordic winter season — exact start/end dates not confirmed; consistent with a Köppen Dfb (humid continental) climate.
- **Provisioning:** **De-icing fluid use is restricted** because the field sits above the **Trandum Delta**, one of Norway's largest uncontained groundwater aquifers — fluid selection/volume/runoff handling are managed with this constraint in mind. This is a durable, field-specific provisioning limitation, not merely a generic winter-ops note.
- **Commercial impact:** Winter freezing-fog/freezing-rain days (§14 Briefing) combined with aquifer-driven fluid-provisioning constraints are the principal seasonal delay-risk drivers here — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter freezing fog/freezing rain**, with a documented historical precedent (14 Dec 1998 glaze-icing event damaging ~20 engines during takeoff) — a real, field-specific reliability factor, compounded by aquifer-constrained de-icing throughput.
- **Ground-delay / flow-program exposure:** Not independently quantified for ENGM this pass. 🟧
- **On-time reliability picture:** Winter mornings (freezing fog/rain) carry the highest schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources. 🟧
- **Curfew infringement consequence:** Not confirmed — treat the reported night restriction as a hard constraint pending verification (§4).
- **Scheduling guardrails:** Build buffer into the last rotation of the day/night so a normal operational delay does not push a landing or departure into the reported night-restriction window pending confirmation of the current regime.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current widebody gate assignment for our operation.
- Ground handling agent(s) and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- Current slot-coordination level and CTOT/ATFM specifics.
- Current night-restriction/curfew regime (sourced to an older reference — needs a live check).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Exact de-icing platform location(s) and season dates.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ENGM/ (retrieved 2026-07-26).
- Wikipedia — "Oslo Airport, Gardermoen" — https://en.wikipedia.org/wiki/Oslo_Airport,_Gardermoen (retrieved 2026-07-26). *Terminal/pier layout, de-icing/aquifer constraint, curfew, customs-transfer process.*
- SKYbrary — ENGM airport page — https://skybrary.aero/airports/engm (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public AIP-adjacent data; K Global fields from live VAMSYS; 4-page pack. |
