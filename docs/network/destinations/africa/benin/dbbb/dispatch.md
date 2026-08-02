# DBBB — Bernardin Gantin · Dispatch Page

**DBBB / COO** · Cotonou, Atlantique Department, Benin · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — ASECNA (AIP Benin)/public-source build

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [DBBB Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination — West-Africa Gulf-of-Guinea network field** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | 🟧 Single terminal building reported (country's primary international gateway); layout not confirmed |
| Widebody stands available | 🟧 Not confirmed — the 2,410 m runway (Briefing §7) may limit widebody suitability; confirm before planning |
| Slot regime | 🟧 None identified — assumed non-coordinated |
| Curfew | 🟧 None found in reachable sources — not independently confirmed |
| Primary handling agent | 🟧 Not published / verify |
| Fuel supplier(s) | 🟧 Not published / verify — Jet A-1 assumed available as the national gateway |
| Customs / PoE for pax | **Yes** — country's primary Port of Entry; exact hours not confirmed 🟧 |
| De-icing | **NIL** — tropical coastal field |

---

## 2. Terminals & concourses

- **Terminal layout:** 🟧 Not confirmed in detail — the field is Benin's largest airport and primary entry point by air, serving connections across Africa and to Europe; a single passenger-terminal building is assumed pending confirmation.
- **Our operation uses:** 🟧 Not confirmed — verify current terminal/gate assignment before scheduling.
- **International arrivals / immigration hall:** Confirmed present as the country's primary Port of Entry; exact hours not confirmed. 🟧
- **Notes:** 🟧 A long-discussed replacement-airport project at Glo-Djigbé (proposed since 1974, revived and stalled more than once) has no confirmed near-term impact on current operations — watch item only.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟧 Not confirmed — the 2,410 m runway (Briefing §7) makes widebody suitability a type-specific question rather than a given; confirm before planning.
- **Stands NOT usable by our types:** 🟧 Not confirmed.
- **Remote / hardstand positions:** 🟧 Not confirmed.
- **Contact vs remote for our arrivals:** 🟧 Not confirmed.
- **Ground-movement stand caveats:** No AIP-flagged taxiway hot spots identified in reachable sources — cross-ref [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** 🟧 Not identified — assumed non-coordinated.
- **Curfew / night restriction:** 🟧 None found in reachable sources — not independently confirmed as "none."
- **CTOT / flow control:** 🟧 Not confirmed — no ATFM/CTOT programme identified.
- **Commercial impact:** Absent confirmed constraints, treat scheduling as flexible pending verification.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** 🟧 Not published / verify — confirm the ground handler contracted for our operation before first service.
- **Typical turnaround time for our type:** VAMSYS mirror gives **taxi-in 6 min / taxi-out 8 min** for planning purposes `[VAMSYS mirror 2026-07-26]`; build the gate turn around these plus standard service times pending a confirmed handling-agent minimum.
- **Services:** 🟧 Not confirmed — standard push-back, GPU/PCA, water/lav, catering expected at an international gateway gate pending local confirmation.
- **Turnaround risk items:** Single-runway operation (Briefing §7) concentrates all traffic through one runway.

---

## 6. Load factors & seasonality

- **Demand peaks:** 🟧 Not independently sourced for our specific operation — treat as standard West-Africa gateway seasonality pending network-schedule confirmation.
- **Day-of-week / seasonal pattern:** 🟧 Not confirmed.
- **Cargo / belly capacity:** 🟧 Not confirmed — confirm K Global belly-cargo plans against payload at planning.
- **Connection banks:** 🟧 Not confirmed — cross-ref the route register for inbound/outbound wave structure at this destination.

---

## 7. Fuel

- **Supplier / into-plane:** 🟧 Jet A-1 assumed available as the country's primary international gateway; specific into-plane provider not confirmed.
- **Uplift availability & hours:** 🟧 Assumed H24 as a gateway field; not independently confirmed.
- **Price / tankering angle:** 🟧 Assess price differential vs the outbound leg's origin at planning — no DBBB-specific price signal sourced. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to a tropical coastal field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Benin's primary Port of Entry.
- **Immigration hours:** 🟧 Not confirmed in reachable public sources.
- **Pre-clearance / visa-transit notes:** 🟧 Not confirmed — verify current Benin visa/entry requirements.
- **Late/overnight/diversion caveat:** 🟧 No confirmed curfew or desk-hour restriction — treat late-arrival immigration coverage as unconfirmed pending local data.

---

## 9. De-icing provisioning & season

- **Availability:** **NIL** — tropical coastal field, no de-icing requirement. 🟩
- **Season:** Not applicable.
- **Provisioning:** Not applicable.
- **Commercial impact:** None.

---

## 10. Typical delays / reliability

- **Signature delay driver:** 🟧 Not independently sourced — harmattan-season visibility (Nov–Mar) and wet-season convective weather are the plausible regional drivers.
- **Ground-delay / flow-program exposure:** 🟧 Not confirmed — no ATFM/flow programme identified for DBBB.
- **On-time reliability picture:** 🟧 Not confirmed — single-runway operation means any runway-blocking event has outsized schedule impact.

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** 🟧 Not published / verify.
- **Curfew infringement consequence:** 🟧 Not applicable — no curfew identified.
- **Scheduling guardrails:** Build schedule buffer around the harmattan and wet seasons pending confirmation of any local flow/weather-related delay pattern.

---

## Open items (🟧 — confirm against AIP / operator data)

- Handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Slot/curfew regime confirmation (assumed none).
- Fuel into-plane provider and uplift hours.
- Immigration/customs desk hours.
- Widebody stand/gate suitability given the 2,410 m runway constraint.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Signature delay driver and on-time reliability data specific to DBBB.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current ATFM/ground-delay status, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DBBB/ (retrieved 2026-07-26).
- Wikipedia — "Cadjehoun Airport" — https://en.wikipedia.org/wiki/Cadjehoun_Airport (retrieved 2026-07-26). *Role, history, name-change (2021).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
