# LIMF — Torino/Caselle · Dispatch Page

**LIMF / TRN** · Caselle Torinese, Piedmont, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LIMF Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Destination (non-base) `[VAMSYS mirror 2026-07-26]` — exact route/frequency role not established this pass 🟧 |
| Terminals in use for us | Single passenger terminal (per publicly reported airport layout) — no multi-terminal split confirmed 🟧 |
| Widebody stands available | Not independently confirmed — Main Apron and Kilo (K) Apron are the principal parking areas; taxiway wingspan constraints reported on some Main Apron taxilanes (§3) 🟧 |
| Slot regime | **IATA Level 3** (fully coordinated) — coordinator **Assoclearance** |
| Curfew | **23:00–06:00 local** night movement restriction (exceptions apply) 🟧 |
| Primary handling agent | **SAGAT Handling** (confirmed still operating); historical multi-agent environment (Aviapartner, ESAIR, TEAM) not re-confirmed 🟧 |
| Fuel supplier(s) | Historically ENI, Kuwait Petroleum Italia, Air BP Italia — not H24 across all, not independently re-confirmed 🟧 |
| Customs / PoE for pax | **Yes** — H24 per the reachable AIP cycle, not independently re-confirmed 🟧 |
| De-icing | Availability/season not confirmed this pass — assume Central European season (roughly Oct–Apr) pending confirmation 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal reported for scheduled operations, plus separate cargo and general-aviation terminals/aprons. No confirmed domestic/international physical split beyond standard Schengen/non-Schengen processing.
- **Our operation uses:** Terminal/stand allocation for K Global service not independently confirmed — confirm with handling on the day. 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear passport control in the single passenger terminal; no separate international concourse confirmed.
- **Notes:** No terminal-programme transition (construction/expansion) identified in reachable sources this pass. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not independently confirmed. Main Apron and Kilo (K) Apron are the principal parking areas at the field; runway reference code is **4E** (Annex 14), implying Code E design intent, but some Main Apron taxilane wingspan limits (reported on the order of 36–38 m) are narrower than full Code E (up to 65 m) — confirm current stand/taxilane assignment before planning a large Code E movement. 🟧
- **Stands NOT usable by our types:** General Aviation Apron and a taxiway reported limited to ICAO Code A/B aircraft are not relevant to K Global widebody/narrowbody service — avoid planning any of our types onto GA-only positions.
- **Remote / hardstand positions:** Not independently confirmed; follow-me assistance has historically been mandatory for movements to/from Kilo Apron and the GA Apron. 🟧
- **Contact vs remote for our arrivals:** Not independently confirmed — confirm with handling.
- **Ground-movement stand caveats:** See [Briefing §13](index.md) — a charted ground hot spot ("HS1") exists at the field; exact location not resolved this pass.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — national coordinator **Assoclearance** (Italy's designated body for coordinated airports and airports with facilitated hours, per Ministerial Decree 44/T of 4 August 1997). 🟥
- **Curfew / night restriction:** **23:00–06:00 local** movement restriction, with exceptions for: flights scheduled before 23:00 local subject to delay; humanitarian, emergency and rescue flights; jet aircraft complying with ICAO Chapter 3, or propeller/turboprop aircraft with noise certification. An older AIP-cycle extract also records a stricter training-flight-specific restriction (forbidden 22:00–05:00, constrained 05:00–22:00) — confirm current applicability and whether it affects scheduled commercial movements. 🟥
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a Level 3 coordinated EU field. 🟧
- **Commercial impact:** Slot integrity (on-time pushback) has direct network consequences under Level 3 coordination; the night restriction is the dominant scheduling guardrail — build buffer into the last rotation of the day.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** **SAGAT Handling** (the airport operator's own handling division, confirmed still active). Historically a multi-handler environment also included Aviapartner, ESAIR Handling S.r.l. and TEAM S.r.l. — current roster and the agent contracted for K Global service are not independently confirmed. 🟧
- **Typical turnaround time for our type:** Not confirmed; VAMSYS gives no taxi-in/taxi-out figure for this field (§1) — build turnaround planning from generic type standards pending a VAMSYS or handling update. 🟧
- **Services:** Push-back, GPU/PCA, water/lav, catering and cabin services assumed available as a scheduled international destination — not individually confirmed. 🟧
- **Turnaround risk items:** Single-runway/single-precision-approach-direction field means a low-vis event on a day with wind favouring RWY 18 can compound ground delay with an approach-capability gap (see Briefing §3.4); winter de-icing throughput (if required) is unconfirmed and a plausible risk item.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for K Global's specific operation — treat as standard regional-Italian seasonal pattern (summer leisure peak, winter/shoulder lower) pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed this pass. 🟧
- **Cargo / belly capacity:** A separate cargo terminal/apron is reported at the field; K Global belly-cargo uplift plans not confirmed against this field specifically. 🟧
- **Connection banks:** Not applicable — LIMF is not a K Global base; inbound/outbound wave timing is set by the wider network schedule, not by this field.

---

## 7. Fuel

- **Supplier / into-plane:** Historically ENI S.p.A., Kuwait Petroleum Italia S.p.A. and Air BP Italia S.p.A.; none independently re-confirmed as current. 🟧
- **Uplift availability & hours:** Historical hours were **not H24** across suppliers (roughly 05:00–20:00/21:30 local per supplier, with extended hours available on request/notice) — confirm current provisioning before planning tight turnarounds outside daytime hours. 🟧
- **Price / tankering angle:** Not sourced this pass — assess relative price signal at planning per [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration specific to this field found.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — single passenger terminal, per the reachable AIP cycle (H24 customs/immigration). 🟧 not independently re-confirmed.
- **CBP-equivalent / immigration hours:** Reported H24 in the reachable AIP cycle; not independently re-confirmed against current operator data. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** The **night movement restriction (23:00–06:00 local)** is the dominant late/overnight constraint rather than immigration-desk staffing — a delayed arrival that would otherwise fall in the restricted window is subject to the exceptions in §4, not a guaranteed accommodation. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed from a primary source this pass. 🟧
- **Season:** Assume a Central European de-icing season, roughly **Oct–Apr**, consistent with the field's continental winter climate and Po Valley/Alpine-proximity setting (Briefing §14) — not independently confirmed for this specific field.
- **Provisioning:** Fluid type, pad/gate location and throughput capacity not confirmed. 🟧
- **Commercial impact:** Winter fog events (Briefing §3.4/§14) combined with any de-icing requirement are the principal seasonal delay-risk drivers at this field; build winter schedule buffer accordingly pending confirmation. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Po Valley winter fog** (Oct–Mar), compounded by the fact that precision-approach capability exists only in the RWY 36 direction (Briefing §3.4) — a fog event with wind favouring RWY 18 is the field's worst-case reliability scenario.
- **Ground-delay / flow-program exposure:** Moderate; IATA Level 3 coordination and EUROCONTROL ATFM/CTOT flow management apply in peak/adverse conditions. 🟧
- **On-time reliability picture:** Winter mornings (fog/inversion risk) carry the highest schedule-risk exposure at this field; not independently benchmarked against network-wide reliability data. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed for this field; a three-tier noise-zoning scheme (Areas A/B/C) governs land-use around the airport per the Airport Noise Commission (2013), but per-movement noise-charge figures were not found in reachable sources. 🟧
- **Curfew infringement consequence:** The night movement restriction (23:00–06:00 local) is a **hard restriction with defined exceptions** (§4) rather than a simple charge — a movement outside those exceptions is not permitted, not merely penalised. 🟥
- **Scheduling guardrails:** Build buffer into the last rotation of the day so an ordinary operational delay does not push a landing or departure into the restricted window without qualifying for one of the published exceptions.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/stand assignment for K Global service; widebody stand availability and taxilane wingspan limits.
- Current handling agent contracted for K Global service and confirmed minimum turnaround time; VAMSYS taxi-in/taxi-out figures are unset.
- Fuel supplier(s), current hours, and price/tankering signal.
- De-icing availability, provisioning and season specific to this field.
- Current noise-charge regime and per-movement figures, if any.
- Whether the older-cycle training-flight-specific restriction (22:00–05:00/05:00–22:00) has any current bearing on scheduled commercial movements, distinct from the general 23:00–06:00 restriction.
- K Global category (unset in VAMSYS) and role-in-network detail.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current AUP/UUP or RAD status in Milano airspace. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Italia (ENAV), AD 2 LIMF** (reachable extract, 2008–2009-era amendment dates) — mirrored via https://www.yumpu.com/it/document/view/15905390/1-limf-torino-caselle (retrieved 2026-07-26). Customs/handling/fuel hours, night restriction detail.
- Assoclearance — coordinated-airport listing for Torino/Caselle (TRN) — https://www.assoclearance.it/coordinamento/aeroporti-coordinati/TRN/ (retrieved 2026-07-26). *IATA Level 3 slot-coordination status.*
- ENAC — Regolamento di Scalo, Torino (Rev. 10, 09/08/2024) — https://www.enac.gov.it/app/uploads/2024/08/Regolamento-di-Scalo_Torino.pdf (retrieved 2026-07-26). *Coordinated-airport / handling framework.*
- SAGAT (airport operator) — "Airport noise" — https://www.torinoairport.com/en/sagat/group/environment/airport-noise (retrieved 2026-07-26). *Noise-zoning background.*
- OurAirports — https://ourairports.com/airports/LIMF/ (retrieved 2026-07-26). *General cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
