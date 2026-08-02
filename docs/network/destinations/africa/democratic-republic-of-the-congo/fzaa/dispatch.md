# FZAA — N'djili Intl · Dispatch Page

**FZAA / FIH** · Kinshasa, Democratic Republic of the Congo · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build, primary DRC AIP not independently reachable this pass

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [FZAA Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | DRC's principal international gateway / Central-Africa network alternate — **not** a K Global base per this build (see [Briefing §1](index.md) for a noted base-flag discrepancy against a legacy VAMSYS seed) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | New international terminal, opened June 2015, ~1M pax/year capacity — exact stand/pier assignment for our operation not confirmed 🟧 |
| Widebody stands available | Not confirmed 🟧 |
| Slot regime | None found in reachable sources — treat as unregulated pending confirmation 🟧 |
| Curfew | None found in reachable sources 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Not confirmed 🟧 |
| Customs / PoE for pax | Yes — DRC's principal international gateway; desk hours not confirmed 🟧 |
| De-icing | **NIL** — equatorial field |

---

## 2. Terminals & concourses

- **Terminal layout:** A new international terminal (~1 million passengers/year capacity) opened in June 2015; some computerised upgrades to the arrivals terminal have been made in recent years. A public source (Wikipedia) notes that "corruption remains a problem" in arrivals operations — a service-reliability caution rather than a safety item.
- **Our operation uses:** Not confirmed — exact terminal/pier assignment to be confirmed with handling. 🟧
- **International arrivals / CBP-equivalent hall:** Present in the 2015 international terminal; exact hours and current processing efficiency not independently confirmed. 🟧
- **Notes:** No terminal-transition programme found beyond the 2015 build — treat as current, but confirm locally given the noted administrative caution above. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed in reachable sources. 🟧
- **Stands NOT usable by our types:** Not confirmed. 🟧
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed. 🟧
- **Ground-movement stand caveats:** See [Briefing §13](index.md) — not confirmed this pass.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None found in reachable sources — treat as **non-coordinated** pending confirmation. 🟧
- **Curfew / night restriction:** None found in reachable sources. 🟧
- **CTOT / flow control:** No ATFM/CTOT regime confirmed for FZAA. 🟧
- **Commercial impact:** With no confirmed slot/curfew regime, the operative scheduling constraints are (1) the **shared cross-border TMA with FCBB** and (2) the field's **sourced weather-related accident history** ([Briefing §3.4](index.md)) — build in weather buffer for the ITCZ convective season rather than curfew margin.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 15 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — the richest VAMSYS-sourced ground-movement data of the three fields in this pack.
- **Services:** Not confirmed — assume standard international-gateway provision (push-back, GPU/PCA, water/lav, catering) pending local confirmation. 🟧
- **Turnaround risk items:** Status as the DRC's busiest international gateway plus the noted administrative/service caution ([Briefing §1](index.md)) argue for conservative turnaround planning.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for FZAA specifically, though the field is described as the largest of the DRC's five international airports and its principal gateway — expect the highest baseline demand of the three fields in this pack. 🟧
- **Day-of-week / seasonal pattern:** Not sourced. 🟧
- **Cargo / belly capacity:** Not sourced. 🟧
- **Connection banks:** Not applicable — network alternate/gateway, not a K Global hub.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not sourced — assess at planning per leg. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration at this equatorial field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — the DRC's principal international gateway.
- **CBP-equivalent / immigration hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Standard African-state entry per nationality; no pre-clearance programme known. A public source flags ongoing operational/administrative concerns in arrivals processing — plan realistic connection buffers.
- **Late/overnight/diversion caveat:** No curfew confirmed; confirm desk staffing for an off-peak/diversion arrival. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **NIL** — equatorial field, no de-icing requirement.
- **Season:** Not applicable.
- **Provisioning:** Not applicable.
- **Commercial impact:** None.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **ITCZ convective storms** — directly evidenced by the field's 2011 fatal weather-related landing accident ([Briefing §3.4](index.md)); this is the clearest sourced delay/diversion driver of the three fields in this pack.
- **Ground-delay / flow-program exposure:** Not sourced. 🟧
- **On-time reliability picture:** Not sourced; a public administrative-caution note ([Briefing §1](index.md)) suggests conservative connection/turnaround planning. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** None found in reachable sources. 🟧
- **Curfew infringement consequence:** Not applicable — no curfew confirmed.
- **Scheduling guardrails:** With no confirmed curfew/slot regime, the operative guardrails are ITCZ-season weather buffer and cross-border TMA coordination margin with FCBB ([Briefing §3.2](index.md)).

---

## Open items (🟧 — confirm against AIP / operator data)

- Primary DRC AIP not reached this pass — terminal/stand detail, handling agent, fuel supplier and hours all unconfirmed.
- **Base-flag discrepancy** — legacy VAMSYS stub recorded Base: Yes; this pack's governing instruction sets Base: No — reconcile against live VAMSYS.
- Slot/curfew regime — none found; confirm non-coordinated status.
- Demand pattern, connection reliability and belly-cargo capacity specific to a K Global operation.
- Customs/immigration desk hours and current arrivals-processing efficiency.

> **Live data — pull at planning:** fuel price, current demand/load, stand allocation, current NOTAM/TMA-coordination status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/FZAA/ (retrieved 2026-07-25).
- Wikipedia — "N'djili Airport" — https://en.wikipedia.org/wiki/N%27djili_Airport (retrieved 2026-07-25). *2015 terminal, administrative-caution note.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
