# EDDK — Cologne/Bonn · Dispatch Page

**EDDK / CGN** · Köln / Bonn, North Rhine-Westphalia, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EDDK Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Destination/origin — EDDF–EDDK City-unit narrowbody spoke (currently *proposed* status in the live route register); **not a K Global base** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Not confirmed in detail — scheduled narrowbody passenger service (Eurowings hub/leisure-low-cost focus city) 🟧 |
| Widebody stands available | Not applicable to our current spoke (A319, narrowbody); no widebody stand data reachable 🟧 |
| Slot regime | Not confirmed for EDDK specifically 🟧 |
| Curfew | **NONE — 24-hour cargo hub, no published night curfew** 🟥 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet A1 expected; not confirmed 🟧 |
| Customs / PoE for pax | Yes — international airport; exact desk hours not confirmed 🟧 |
| De-icing | Availability/procedure not confirmed; expect a requirement in Central European winter conditions 🟧 |

**K Global network fields (live VAMSYS):** Category **S** · Base **No** · Preferred alternates **EDDF, EDDL, EHAM** · Taxi-in **10 min** / taxi-out **12 min**.

---

## 2. Terminals & concourses

- **Terminal layout:** Not confirmed in detail from reachable sources. EDDK combines scheduled passenger service (Eurowings hub, several leisure/low-cost focus-city carriers) with heavy overnight freighter parking (FedEx Express, UPS Airlines hub banks) on the same field. 🟧
- **Our operation uses:** Not confirmed — our current service is the EDDF–EDDK City-unit A319 spoke (proposed status); expect standard passenger-terminal handling. 🟧
- **International arrivals / CBP-equivalent hall:** International PoE confirmed; exact hall/terminal not confirmed. 🟧
- **Notes:** 🟧 The airport's dual identity — scheduled passenger operator alongside a major 24h freighter hub — means ramp/ground environment can differ materially between day (passenger-weighted) and night (cargo-bank-weighted) hours; confirm current terminal assignment with handling.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not applicable to the current K Global operation (A319 narrowbody spoke); no widebody stand data reachable for EDDK. 🟧
- **Stands NOT usable by our types:** Not confirmed — no stand-size constraint identified for the A319. 🟧
- **Remote / hardstand positions:** Not confirmed — expect some remote/hardstand parking given the heavy overnight freighter presence, though not specific to passenger stands. 🟧
- **Contact vs remote for our arrivals:** Not confirmed. 🟧
- **Ground-movement stand caveats:** Note the airport's layout spans **three runways** (06/24, 13L/31R, 13R/31L) — confirm current taxi routing and the current runway designators (§18 of the Briefing — a magnetic-variation renumbering from 14L/32R & 14R/32L is reported) with Ground on the day. See [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed for EDDK specifically — verify on the current OFP/AIP. 🟧
- **Curfew / night restriction:** 🟥 **None published.** EDDK is a genuine 24-hour airport and a major overnight cargo hub for FedEx Express and UPS Airlines — a real outlier among German commercial airports, most of which carry hard or restricted night-operation regimes. Do not assume a quiet overnight ramp.
- **CTOT / flow control:** Not confirmed — the 24h cargo-hub profile means overnight slot/flow availability should not be assumed identical to a curfewed field. 🟧
- **Commercial impact:** The absence of a curfew is a genuine scheduling advantage for late/early movements relative to most German fields in this network, but expect a materially busier overnight ramp (freighter bank) than the daytime passenger profile suggests — factor this into ground-time planning for any late/early K Global rotation.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed from reachable sources — expect full-service handling given the field's cargo-hub/scheduled-passenger dual status. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn for the A319 around these plus standard narrow-body service times.
- **Services:** Push-back, GPU/PCA, water/lav, catering and cabin clean expected at a scheduled-passenger stand; not individually confirmed. 🟧
- **Turnaround risk items:** Confirming the current runway designators and the mixed cargo-freighter/passenger ramp environment are the standing ground-ops cautions; winter fog/de-icing season is the seasonal risk (§9).

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for EDDK specifically — Eurowings hub/leisure-low-cost focus-city profile suggests a leisure-skewed seasonal pattern; not confirmed for our operation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** EDDK is a genuine 24h FedEx Express/UPS Airlines freighter hub in the real-world network, but the live K Global route register currently carries **no Cargo-unit (freighter) routes to EDDK** — only the City-unit A319 spoke. See [Briefing §17](index.md) and the company Knowledge base for network-planning follow-up.
- **Connection banks:** Not applicable — EDDK is not a K Global base; connection timing is set at the EDDF end of the pairing.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A1 expected on a field this size; specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not independently sourced — assess price differential to/from EDDF (home base) per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A1; no cold-soak/fuel-freeze consideration specific to EDDK — the field's short-haul spoke profile does not carry a long/high-leg fuel-freeze concern.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international airport.
- **CBP-equivalent / immigration hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen entry for the EDDF–EDDK spoke; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** 🟥 With **no published curfew**, a late/overnight arrival is operationally normal here (unlike most German fields) — but customs/immigration desk staffing for an off-peak arrival is not confirmed; verify before planning a late rotation.

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed from reachable sources — expect a requirement in Central European winter conditions given the field's radiation-fog/icing exposure (§14 of the Briefing). 🟧
- **Season:** Typical Central European de-icing season, roughly Nov–Mar (not independently EDDK-sourced). 🟧
- **Provisioning:** Fluid type, holdover implications and peak throughput not confirmed — the mixed cargo-freighter/passenger ramp adds uncertainty to shared-facility throughput assumptions. 🟧
- **Commercial impact:** Winter radiation fog/low stratus in the Rhine basin (Briefing §3.4/§14) combined with unconfirmed de-icing throughput are the principal seasonal delay-risk drivers at this field.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Winter radiation fog/low stratus under the Rhine-basin climate — exact current LVP/CAT III trigger conditions not confirmed (see Briefing §3.4/§9).
- **Ground-delay / flow-program exposure:** Not confirmed — moderate traffic density expected, well below Frankfurt; the overnight freighter bank raises night-hours traffic density above what the daytime passenger profile would suggest. 🟧
- **On-time reliability picture:** Winter fog mornings are the highest schedule-risk exposure identified; the runway-designator discrepancy (§18 of the Briefing) is an administrative/currency risk rather than a reliability driver. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed from reachable sources — some form of noise-management framework is plausible given the 24h freighter-hub role, but not documented here. 🟧
- **Curfew infringement consequence:** Not applicable — **no curfew exists** to infringe; this is the field's standing environmental/political outlier fact (contrast with most other German commercial airports in this network).
- **Scheduling guardrails:** None required specific to a curfew; the operative guardrail is confirming current runway designators (§18) and the overnight cargo-bank traffic-density reality rather than any noise-restriction window.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate assignment for our A319 operation.
- Handling agent(s) and confirmed minimum turnaround time.
- Slot-coordination status and any CTOT/ATFM exposure.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours, particularly for late/overnight arrivals given the no-curfew profile.
- De-icing facility/procedure and season detail.
- **Runway-designator status (13L/31R & 13R/31L vs older 14L/32R & 14R/32L)** — confirm current AIP/NOTAM and in-sim scenery before use; see [Briefing §4/§7/§18](index.md).
- Day-of-week/seasonal load pattern specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current ATFM/ground-delay program, demand/load, stand allocation, current runway-designator confirmation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — Cologne Bonn Airport (CGN, EDDK) — https://ourairports.com/airports/EDDK/ , /runways.html , /frequencies.html (all retrieved 2026-07-25).
- Wikipedia — Cologne Bonn Airport — https://en.wikipedia.org/wiki/Cologne_Bonn_Airport (retrieved 2026-07-25). *24-hour operating status; FedEx Express/UPS Airlines hub status.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP-derived Briefing (tier-4 corroboration) + live VAMSYS; new page, part of the fold to a 4-page pack. |
