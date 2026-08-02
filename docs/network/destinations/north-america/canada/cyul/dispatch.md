# CYUL — Pierre Elliott Trudeau Intl · Dispatch Page

**CYUL / YUL** · Dorval, Montréal, Québec, Canada · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [CYUL Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single main terminal — international hall (gates 50–68) for our arrivals; US transborder preclearance hall (gates 72–89) if applicable |
| Widebody stands available | Not individually confirmed; **South Ramp between gates 47–49 is closed to wingspan ≥ 36 m** — our widebody types route via North Ramp 🟧 |
| Slot regime | Not confirmed — assumed non-coordinated / schedule-facilitated 🟧 |
| Curfew | Weight-based: jets > 45,000 kg restricted to 07:00–24:00 (takeoff) / 07:00–01:00 (landing) 🟥 |
| Primary handling agent | ADM (Apron/Ramp positive control) plus third-party ground handlers — specific handler not confirmed 🟧 |
| Fuel supplier(s) | Jet A/A-1 via multiple FBOs at Dorval; scheduled-service supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — international (gates 50–68) and US preclearance (gates 72–89) halls; exact desk hours not confirmed 🟧 |
| De-icing | **Available** — dedicated facility, 8 bays, up to 48 aircraft/hour, season aligned with heavy regional snowfall |

---

## 2. Terminals & concourses

- **Terminal layout:** CYUL operates from a **single main terminal building** at the south end of the airfield (the historic Dorval terminal, subsequently expanded — a 2011-announced two-phase international-terminal expansion cost ~$620M). Domestic, US-transborder and international traffic are handled in the same building with segregated gate zones.
- **Our operation uses:** International arrivals are typically assigned **gates 50–68**; if operating a US-bound service, expect **gates 72–89** (US preclearance) 🟧 (source: CZUL vACC pilot briefing, network-sim cross-check — not independently confirmed against ADM's own gate map).
- **International arrivals / CBP-equivalent hall:** Canadian customs for international arrivals and **US CBP preclearance** for US-bound departures are both on-site in the single terminal — relevant to connection-time planning.
- **Notes:** 🟧 A 2016+ terminal curtain-wall restoration and ongoing capacity works (per ADM's 2013–2033 master plan, including transborder-jetty extension and remote-parking additions) mean the terminal footprint has evolved — confirm current gate map with handling.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not individually confirmed in reachable public sources. 🟧
- **Stands NOT usable by our types:** 🟥 **South Ramp between gates 47 and 49 is prohibited to aircraft with wingspan ≥ 36 m (118 ft)** — B757/A310-and-larger types, i.e. most K Global widebody equipment, must be routed via **North Ramp only**. Plan the stand assignment/taxi routing accordingly.
- **Remote / hardstand positions:** Not confirmed in reachable sources; CYUL has no dedicated cargo apron (CYMX Mirabel serves that role for the region) — remote stands may see cargo/charter use per the vACC network reference, not independently confirmed for real-world ops. 🟧
- **Contact vs remote for our arrivals:** Expect a contact widebody gate for a scheduled international arrival, subject to the North Ramp wingspan constraint above.
- **Ground-movement stand caveats:** The **former RWY 10/28 is now Taxiway Charlie** (does not require a crossing clearance) and many taxiways branching off RWY 06L/24R have been renamed in recent years — confirm current identifiers with Ground/Apron rather than relying on legacy scenery/signage. See [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable public sources — assumed non-coordinated or schedule-facilitated (Level 1/2) pending verification; CYUL is not confirmed as a formally IATA Level-3-coordinated field. 🟧
- **Curfew / night restriction:** Jets **> 45,000 kg**: takeoffs permitted **07:00–24:00**, landings permitted **07:00–01:00**; jets ≤ 45,000 kg operate H24. **ADM retains exemption authority** for medical emergencies, carrier-uncontrollable delays, adverse weather, and some scheduled flights. A **proposed** (not-yet-in-force) stricter overnight ban (01:00–06:00, tighter for louder aircraft) is a live policy-change watch item — monitor before relying on current-regime assumptions long-term. 🟥
- **CTOT / flow control:** Not independently confirmed for CYUL — NAV CANADA flow management applies as standard practice at busy Canadian hubs when relevant. 🟧
- **Commercial impact:** The weight-based curfew (rather than a blanket hard curfew) gives more late-evening scheduling flexibility than a Level-3/hard-curfew field, but the **07:00–01:00 landing cutoff** for our (>45,000 kg) equipment is still the binding guardrail on the last inbound rotation of the day.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** ADM operates Apron/Ramp positive control; the specific ground handler(s) contracted for our operation are not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 16 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a Code E/F stand at a major international gateway (standard provision, not individually confirmed).
- **Turnaround risk items:** Winter deicing-facility throughput, the North Ramp routing constraint for wingspan ≥ 36 m aircraft, and the positive-ATC-controlled apron (all movement by explicit instruction) can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** CYUL is the busiest airport in Québec and Canada's third-busiest by passenger traffic (21.1M passengers in 2023, behind Toronto-Pearson and Vancouver); specific K Global demand patterns are set by the network schedule rather than third-party data. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for CYUL specifically — treat as standard North American hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** 🟧 **CYUL has no dedicated cargo apron** — CYMX (Montréal/Mirabel) is the region's designated cargo airport; confirm any K Global belly-cargo uplift plan accordingly, as it may be a genuine constraint rather than a mere convenience.
- **Connection banks:** Cross-ref the route register for inbound/outbound wave structure relevant to this destination.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A, Jet A-1 and 100LL are confirmed available from various FBOs at Dorval; specific into-plane provider for scheduled widebody service not individually confirmed. 🟧
- **Uplift availability & hours:** H24 assumed at a hub of this size; not independently confirmed. 🟧
- **Price / tankering angle:** Assess price differentials vs the outbound leg's origin at planning; no CYUL-specific tankering signal sourced this pass. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to the CYUL uplift itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international hall (gates 50–68) and **US CBP preclearance** hall (gates 72–89) within the single main terminal.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** US preclearance at CYUL is relevant to minimum-connect-time planning on any US-bound leg, consistent with other major Canadian gateways.
- **Late/overnight/diversion caveat:** The **weight-based curfew (landings permitted 07:00–01:00 for our equipment)** is the dominant late/overnight constraint here rather than immigration-desk staffing — a schedule slipping past 01:00 requires an ADM exemption. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — a dedicated aircraft deicing facility opened in 1997 (joint venture, expanded 2012): **eight bays**, 24 deicing trucks, capable of up to **48 aircraft/hour** (~9,400 aircraft/year average). 🟩
- **Season:** Aligned with the region's heavy winter snowfall — CYUL averages **~220 cm (≈87 in) of snow per year** and never fully closes.
- **Provisioning:** Collected deicing fluid (ethylene glycol) is reprocessed through a dedicated recovery/distillation facility to **≥99.5% purity for reuse** — a notable environmental/throughput feature.
- **Commercial impact:** Heavy snowfall events combined with deicing-bay queuing are the principal seasonal delay-risk drivers at this field, though the airport's snow-removal team (clearing 1.9M+ m² of surface annually) keeps disruption comparatively rare for the snowfall volume. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Heavy winter snowfall and freezing rain**, mitigated by the deicing facility and snow-removal operation; the airport is reported to rarely suspend operations despite the snowfall volume.
- **Ground-delay / flow-program exposure:** Lower than a five-runway CSPO hub (contrast with CYYZ) given the simpler two-runway geometry; not independently quantified this pass. 🟧
- **On-time reliability picture:** Winter snow events carry the highest schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed in reachable public sources this pass. 🟧
- **Curfew infringement consequence:** The weight-based curfew is an **ADM operating condition** rather than a purely regulatory hard ban; ADM retains discretionary exemption authority, but persistent late-operating pressure has driven public/community pushback (a reported class-action suit over night-noise complaints) and a **proposed** stricter overnight ban.
- **Scheduling guardrails:** Build buffer into the day's last rotation so a normal operational delay does not push a landing past the **01:00** cutoff for our (>45,000 kg) equipment without a confirmed ADM exemption.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current widebody gate assignment for our operation and confirmation of the North Ramp routing requirement in practice.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours for scheduled widebody service.
- Customs/immigration desk hours.
- Slot-coordination level (assumed non-coordinated, not confirmed).
- Day-of-week/seasonal load pattern specific to the K Global operation.
- Belly-cargo capacity given the absence of a dedicated cargo apron (CYMX serves that role regionally).
- Status of the proposed overnight flight ban (01:00–06:00) — monitor for a policy change.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if applicable), current flow-management status, demand/load, stand allocation, deicing-facility status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **NAV CANADA — Aeronautical Information Publications** — https://www.navcanada.ca/en/aeronautical-information/publications.aspx (retrieved 2026-07-26).
- **CZUL (VATSIM Canada vACC) — CYUL Pilot Briefing, 2024** — https://czul.ca/pdf/CYUL_2024_Pilot_Briefing.pdf (retrieved 2026-07-26). *Network-sim document — gate allocation, apron positive-control procedure, North/South Ramp wingspan restriction.*
- Aéroports de Montréal (ADM) — "Noise Abatement" — https://www.admtl.com/en-CA/community/soundscape-management/noise-abatement (retrieved 2026-07-26). *Curfew structure.*
- Travel and Tour World — proposed overnight-ban reporting — https://www.travelandtourworld.com/news/article/montreal-trudeau-airport-may-limit-late-night-flights-expert-tips-for-tourists-to-avoid-travel-disruptions/ (retrieved 2026-07-26).
- Airport Improvement — deicing/glycol-recycling facility investment — https://airportimprovement.com/article/trudeau-intl-invests-deicing-services-and-glycol-recycling-facilities/ (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/CYUL/ (retrieved 2026-07-26). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from NAV CANADA (CFS/CAP); K Global fields from live VAMSYS; 4-page pack. |
