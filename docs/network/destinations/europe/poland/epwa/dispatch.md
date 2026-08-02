# EPWA — Warsaw Chopin · Dispatch Page

**EPWA / WAW** · Warsaw, Poland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EPWA Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal A** (single unified complex, check-in areas A–E) |
| Widebody stands available | Not confirmed — published gate mix is predominantly narrowbody-oriented 🟧 |
| Slot regime | Not confirmed 🟧 |
| Curfew | Not confirmed — Ground ATC reported HX 0330–2200, a signal of reduced overnight activity, not a confirmed curfew 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Not confirmed; Jet A-1 assumed available 🟧 |
| Customs / PoE for pax | **Yes** `[OurAirports #customs tag]`; exact desk hours not confirmed 🟧 |
| De-icing | Assumed available given continental winter climate; season/provisioning not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** EPWA operates as a single unified **Terminal A** complex — formed from the merger of the field's former Terminal 1 and Terminal 2 buildings — organised into five check-in areas (A–E) across two main halls, with 116 check-in desks plus 23 self-service check-in kiosks `[Wikipedia, retrieved 2026-07-26]`. The complex has 45 passenger gates, of which 27 are jetway-equipped.
- **Our operation uses:** Terminal A generically — no unit-specific concourse assignment confirmed. 🟧
- **International arrivals / customs hall:** Port of Entry confirmed for the field; hall location within Terminal A and exact desk hours not confirmed. 🟧
- **Notes:** 🟧 A publicly announced **expansion programme** (construction reported to have begun late 2025, targeted completion 2029) will add widebody and narrowbody gate capacity and grow the airport's footprint by roughly 15%, targeting >30 million passengers/year `[Wikipedia, retrieved 2026-07-26]` — treat the terminal/gate layout as being in a multi-year transition and confirm current stand assignment with handling before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed; the published 45-gate/27-jetway mix is predominantly narrowbody-oriented. 🟧
- **Stands NOT usable by our types:** Not confirmed. 🟧
- **Remote / hardstand positions:** With 27 of 45 gates jetway-equipped, roughly 18 gates are remote/apron positions — bussing should be expected as a routine possibility, not an exception. 🟧
- **Contact vs remote for our arrivals:** Not confirmed which is typical for our destination traffic. 🟧
- **Ground-movement stand caveats:** The field's **crossing-runway geometry** (RWY 11/29 intersects RWY 15/33) is the principal ground-movement dependency affecting taxi routing between stands and either runway — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable public sources. 🟧
- **Curfew / night restriction:** Not confirmed. The on-field Ground ATC position is reported to operate HX (0330–2200 local) `[OurAirports, retrieved 2026-07-26]` — a signal of reduced overnight activity at the field, **not** a confirmed hard curfew. 🟧
- **CTOT / flow control:** No EPWA-specific ATFM/CTOT data confirmed; standard EUROCONTROL Network Manager practice may apply as general EU-airspace practice. 🟧
- **Commercial impact:** Given the field's reported ~34 movements/hour capacity ceiling (driven by the crossing-runway geometry) and status as Poland's busiest airport, schedule integrity and buffer around peak banks are a prudent guardrail even without a confirmed slot regime.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **12 min / 15 min** taxi in/out for planning purposes `[VAMSYS mirror 2026-07-26]` — the in/out assignment between the two figures is not certain (see Briefing §18) 🟧.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services assumed available at a major national airport; not individually confirmed.
- **Turnaround risk items:** Winter de-icing throughput (continental climate) and sequencing delay from the crossing-runway dependency are the two plausible turnaround-risk drivers at this field.

---

## 6. Load factors & seasonality

- **Demand peaks:** EPWA is reported as Poland's busiest airport, handling in excess of 20 million passengers a year and on the order of 300 scheduled movements a day `[Wikipedia, retrieved 2026-07-26]` — a high-demand national gateway even though it functions as a destination/spoke field in the K Global network.
- **Day-of-week / seasonal pattern:** Not independently sourced for EPWA specifically — treat as standard European business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not confirmed for our operation; the field's public expansion programme includes stated plans to grow cargo capacity `[Wikipedia, retrieved 2026-07-26]`, but current belly/freighter capacity is not confirmed. 🟧
- **Connection banks:** Not applicable — EPWA is a destination, not a connecting hub, in the K Global network.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in reachable public sources; Jet A-1 assumed available as a major national airport. 🟧
- **Uplift availability & hours:** Not independently confirmed. 🟧
- **Price / tankering angle:** Treat as a standard outstation for tankering-decision purposes pending a live price pull. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration specific to EPWA as an uplift point.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes `[OurAirports #customs tag]`.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources. 🟧
- **Pre-clearance / visa-transit notes:** Poland is a Schengen member state — standard intra-Schengen vs external-Schengen entry processing applies; no pre-clearance programme confirmed at EPWA.
- **Late/overnight/diversion caveat:** No confirmed curfew, but the reported HX Ground ATC hours (0330–2200) are a caution flag for very early/late operations pending confirmation of actual overnight service levels. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Assumed available given the field's continental winter climate; not independently confirmed. 🟧
- **Season:** Typical Central/Eastern European de-icing season, broadly **Nov–Mar**, by regional climatology inference — not an EPWA-specific sourced figure. 🟧
- **Provisioning:** Pad location, fluid type and throughput not confirmed. 🟧
- **Commercial impact:** Winter de-icing queuing combined with the crossing-runway capacity ceiling is the plausible seasonal delay-risk driver at this field. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Plausibly winter weather (fog/snow/icing) combined with the crossing-runway throughput ceiling (~34 movements/hour reported); not an independently confirmed statistic for this specific field. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed; treat the crossing-runway geometry as a structural constraint that raises exposure to sequencing delay during peak banks. 🟧
- **On-time reliability picture:** Not confirmed for the K Global operation specifically. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources. 🟧
- **Curfew infringement consequence:** Not applicable — no curfew confirmed. 🟧
- **Scheduling guardrails:** Pending confirmation of any formal curfew/noise-charge regime, build ordinary schedule buffer around winter-weather risk and the crossing-runway capacity ceiling rather than relying on an assumed night-ops window.

---

## Open items (🟧 — confirm against AIP / operator data)

- Slot coordination level/coordinator and any curfew or noise-charge regime — none confirmed.
- Handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Widebody/narrowbody stand allocation for our operation, and current gate assignment given the airport's multi-year expansion programme.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- EUROCONTROL CTOT/ATFM specifics for EPWA (general EU-airspace practice assumed, not independently sourced).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- VAMSYS taxi-in/out assignment — 12 min and 15 min reported but not clearly attributed to in vs out.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current NOTAM/security bulletins for the Warszawa (EPWW) FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/EPWA/ (retrieved 2026-07-26). *Port-of-Entry tag.*
- OurAirports — https://ourairports.com/airports/EPWA/frequencies.html (retrieved 2026-07-26). *Ground ATC hours.*
- SkyVector — https://skyvector.com/airport/EPWA (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "Warsaw Chopin Airport" — https://en.wikipedia.org/wiki/Warsaw_Chopin_Airport (retrieved 2026-07-26). *Terminal/gate structure, passenger/movement volume, expansion programme.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
