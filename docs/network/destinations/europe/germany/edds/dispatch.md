# EDDS — Stuttgart · Dispatch Page

**EDDS / STR** · Stuttgart, Baden-Württemberg, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EDDS Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination/origin** — EDDF–EDDS City-unit narrowbody spoke (proposed status in the live route register) `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | 🟧 Not confirmed in detail from reachable sources — single-terminal regional field, no concourse split identified |
| Widebody stands available | 🟧 Not applicable/expected — narrowbody-scale regional field; no widebody stand data reachable |
| Slot regime | **IATA Level 3 — fully coordinated** 🟥 |
| Curfew | **Night-operation restrictions in force**; exact hours not independently confirmed 🟥 |
| Primary handling agent | 🟧 Not confirmed in reachable sources |
| Fuel supplier(s) | 🟧 AVGAS and Jet A1 confirmed available (OpenAIP); specific supplier not confirmed |
| Customs / PoE for pax | 🟧 International PoE expected given scheduled international service; one tier-4 source conflicts ("Customs: No") — see Briefing §18 |
| De-icing | **Available** — dedicated MISC/de-icing frequency 121.63 published (OpenAIP) |
| K Global category | **S** `[VAMSYS mirror 2026-07-25]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **EDDF, EDDM, LSZH** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Terminals & concourses

- **Terminal layout:** 🟧 Not confirmed in detail from reachable sources — EDDS is a single-runway regional field with a modest passenger terminal complex; no multi-concourse split identified.
- **Our operation uses:** 🟧 Not confirmed — the field handles our EDDF–EDDS City-unit narrowbody spoke; no specific terminal/gate data reachable this build.
- **International arrivals / CBP-equivalent hall:** 🟧 Not confirmed — international PoE expected given scheduled international service (see Briefing §1/§6).
- **Notes:** No terminal construction/transition programme identified from reachable sources. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟧 Not applicable/expected — no widebody stand infrastructure identified; EDDS handles our narrowbody City-unit spoke only.
- **Stands NOT usable by our types:** 🟧 Not confirmed — no stand-level data reachable.
- **Remote / hardstand positions:** 🟧 Not confirmed in reachable sources.
- **Contact vs remote for our arrivals:** 🟧 Not confirmed — expect standard regional-field allocation, verify locally.
- **Ground-movement stand caveats:** Single-runway layout simplifies ground routing relative to a multi-runway field — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3 — fully coordinated**; confirm slot allocation with the airport coordinator before planning any movement outside a pre-agreed schedule — this is a harder constraint than at a non-coordinated field. 🟥
- **Curfew / night restriction:** **Night-operation restrictions confirmed in force** (2008 state-government decision to retain them alongside a decision not to build a second runway for 8–12 years); exact hours/quota not independently confirmed. 🟥
- **CTOT / flow control:** 🟧 Not independently confirmed for EDDS specifically; expect EUROCONTROL Network Manager ATFM/CTOT regulation to apply as standard practice for a slot-coordinated EU field.
- **Commercial impact:** With **no on-field runway alternative** (single runway 07/25) and a **Level 3** slot regime, schedule integrity (on-time pushback) has direct network consequences — a single-runway disruption has no on-field workaround, and off-hours planning must respect the night-operation restriction.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** 🟧 Not confirmed in reachable public sources.
- **Typical turnaround time for our type:** 🟧 Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard narrowbody service times.
- **Services:** Cargo handling, de-icing, maintenance and security services confirmed available (OpenAIP); pushback/GPU/PCA/catering not individually confirmed. 🟧
- **Turnaround risk items:** **Level 3** slot pressure and the **single-runway, no-alternative** geometry are the standing turnaround-risk drivers — any ground delay compounds against a fixed slot rather than a flexible runway system.

---

## 6. Load factors & seasonality

- **Demand peaks:** 🟧 Not independently sourced for EDDS specifically — treat as standard South German regional business/leisure mix pending network-schedule confirmation.
- **Day-of-week / seasonal pattern:** 🟧 Not confirmed from reachable sources.
- **Cargo / belly capacity:** 🟧 Not confirmed — cargo handling is available on-field (OpenAIP) but belly-cargo demand for our narrowbody spoke is not sourced.
- **Connection banks:** EDDF–EDDS is a City-unit spoke from the home hub; connection-bank timing is set by the network schedule rather than local EDDS demand data.

---

## 7. Fuel

- **Supplier / into-plane:** 🟧 AVGAS and Jet A1 confirmed available (OpenAIP); specific into-plane supplier not confirmed.
- **Uplift availability & hours:** 🟧 Hours not confirmed — verify on the OFP.
- **Price / tankering angle:** As a regional spoke ex-home-hub, assess price differential against EDDF per leg. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A1; no cold-soak/fuel-freeze consideration relevant to this short regional spoke.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** 🟧 International PoE expected given scheduled international service; not independently confirmed. One tier-4 source (OpenAIP) lists "Customs: No" — conflicts with the airport's international profile, treat as unresolved (Briefing §18).
- **CBP-equivalent / immigration hours:** 🟧 Not confirmed.
- **Pre-clearance / visa-transit notes:** Standard Schengen entry — no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** The **night-operation restriction** is the dominant late/overnight constraint rather than immigration-desk staffing — see §4. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Confirmed available** — dedicated MISC/de-icing frequency 121.63 published (OpenAIP). 🟩
- **Season:** Typical Central European de-icing season, roughly Oct–Apr; expect elevated use given the plateau's greater wind/weather exposure relative to the sheltered city basin.
- **Provisioning:** 🟧 Pad vs gate de-icing and fluid-type/throughput detail not confirmed from reachable sources.
- **Commercial impact:** Winter fog/icing plus the **single-runway** constraint compound de-icing delay exposure — a queued de-ice on the only runway has no parallel-runway workaround. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Single-runway unavailability** (weather, contamination, disabled aircraft) — no on-field workaround exists, a materially different risk profile from a multi-runway field.
- **Ground-delay / flow-program exposure:** 🟧 Not independently confirmed; the **Level 3** slot-coordination status itself signals recognised capacity pressure against the single-runway constraint.
- **On-time reliability picture:** Winter fog/icing season and any single-runway disruption carry the highest schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** 🟧 Not confirmed in procedural/charging detail from reachable sources; expect a published noise-charge regime given the field's long-running local noise-abatement/political profile (§12 Briefing).
- **Curfew infringement consequence:** Night-operation restrictions are a confirmed, long-standing local-political fact (2008 decision); exact fines/movement-ban consequence not independently confirmed. 🟥
- **Scheduling guardrails:** Build buffer into the EDDF–EDDS rotation so a normal operational delay does not push a movement into the restricted night window; treat the **Level 3** slot as a hard scheduling constraint on top of the curfew.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal layout, our operation's gate/stand assignment, and handling agent(s).
- Typical turnaround time beyond the VAMSYS taxi-in/out figures.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours; resolve the OpenAIP "Customs: No" conflict.
- Exact night-restriction hours/quota and noise-charge regime detail.
- EUROCONTROL CTOT/ATFM specifics for EDDS (general practice assumed, not independently sourced).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — Stuttgart Airport (STR, EDDS) — https://ourairports.com/airports/EDDS/ , /runways.html , /frequencies.html (retrieved 2026-07-25).
- OpenAIP — Airport Stuttgart — https://www.openaip.net/data/airports/62614ab25e9ded5710445959 (retrieved 2026-07-25). *Fuel/handling/de-icing facilities.*
- Wikipedia — Stuttgart Airport — https://en.wikipedia.org/wiki/Stuttgart_Airport (retrieved 2026-07-25). *Night-restriction/second-runway political history.*
- See [EDDS Briefing](index.md) Sources & References for the full source list.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
