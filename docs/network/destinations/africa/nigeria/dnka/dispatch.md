# DNKA — Kaduna · Dispatch Page

**DNKA / KAD** · Kaduna, Kaduna State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Nigeria (NCAA)-derived, provisional

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [DNKA Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Regional destination — northern Nigeria (Kaduna State) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single passenger terminal (civil side) 🟧 |
| Widebody stands available | Not confirmed 🟧 |
| Slot regime | None identified |
| Curfew | Not published / verify 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Not confirmed 🟧 |
| Customs / PoE for pax | International-status naming; hours not confirmed 🟧 |
| De-icing | **NIL** — tropical field |
| Security posture | 🟥 **Documented armed attack on the airport, 26 March 2022** — treat the current security picture as a live, re-check-every-operation item |

---

## 2. Terminals & concourses

- **Terminal layout:** Civil passenger terminal alongside a Nigerian Air Force military presence — the field's exact civil/military terminal separation is not confirmed. 🟧
- **Our operation uses:** Not yet assigned — no VAMSYS routing confirmed to DNKA at this pass.
- **International arrivals / CBP-equivalent hall:** International-status naming; hall/desk arrangement not confirmed. 🟧
- **Notes:** 🟧 Mixed civil/military field — confirm current civil-side access/PPR procedure before planning.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed. 🟧
- **Stands NOT usable by our types:** Not confirmed.
- **Remote / hardstand positions:** Not confirmed; military-side apron is presumed separate from civil stands, not independently confirmed.
- **Contact vs remote for our arrivals:** Not confirmed.
- **Ground-movement stand caveats:** See [Briefing §13](index.md) — potential military-side ground-traffic interaction, not independently confirmed.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None identified — non-coordinated field assumed.
- **Curfew / night restriction:** Not published / verify. 🟧
- **CTOT / flow control:** None identified — standard procedural clearance expected.
- **Commercial impact:** The dominant commercial guardrail is the **field's documented security exposure** (§1) and the **harmattan-season visibility risk** (Briefing §3.4/§14), not a regulatory slot/curfew regime.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not published / verify — no VAMSYS data for this field. 🟧
- **Services:** Not confirmed — assume standard secondary-field provision pending confirmation.
- **Turnaround risk items:** Limited handling/fuel resource at a secondary field, plus any military-coordination overhead, are the standing risk items pending confirmation.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not sourced for a K Global routing specifically. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Not confirmed. 🟧
- **Connection banks:** Not applicable — not a company hub/base.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed. 🟧
- **Uplift availability & hours:** Not confirmed — assume limited/prior-notice at a secondary field. 🟧
- **Price / tankering angle:** Not evaluated — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak consideration at this tropical field, though harmattan dust ingestion/filtration is a general regional ground-handling consideration.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** International-status naming; hours not confirmed. 🟧
- **CBP-equivalent / immigration hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Standard Nigeria entry assumed.
- **Late/overnight/diversion caveat:** Not confirmed — no curfew identified, but night-ops provision (lighting/ATS hours) and the field's security posture are both unconfirmed for overnight operations. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **NIL** — tropical field, no de-icing requirement. 🟩
- **Season:** Not applicable — the seasonal equivalent hazard here is **harmattan dust**, not ice (Briefing §14).
- **Provisioning:** Not applicable.
- **Commercial impact:** None from cold weather; harmattan-season visibility is the operative seasonal commercial risk (§10/§11).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Harmattan-season visibility reduction (Nov–Mar)** — the most severe of the four fields in this build given Kaduna's northerly, near-Sahel location.
- **Ground-delay / flow-program exposure:** Low from an ATC-flow perspective; a security-driven ground stop/access restriction is the less conventional but real exposure given the field's 2022 attack history. 🟥
- **On-time reliability picture:** Not independently sourced for DNKA. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** None identified.
- **Curfew infringement consequence:** Not applicable — no curfew identified.
- **Scheduling guardrails:** Build harmattan-season buffer (Nov–Mar); maintain live awareness of the northern-Nigeria security picture per the [Kano (DNKK) FIR brief](../../../../airspace/fir/africa/kano-dnkk.md) §10 and this field's own 2022 attack precedent before scheduling into DNKA.

---

## Open items (🟧 — confirm against AIP / operator data)

- **Current security posture and any access/PPR restriction — the highest-priority open item for this field.**
- Handling agent, fuel supplier/hours, turnaround time for our type.
- Civil-side terminal/stand capacity and its separation from military facilities.
- ATS/AD operating hours and any curfew.
- Customs/immigration desk hours.

> **Live data — pull at planning:** fuel price, current demand/load, stand allocation, current security/NOTAM status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DNKA/ (retrieved 2026-07-26).
- Wikipedia — "Kaduna International Airport" — https://en.wikipedia.org/wiki/Kaduna_Airport (retrieved 2026-07-26). *2022 attack, history.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. First build — no prior stub existed for DNKA. |
