# LIME — Orio al Serio (Milan Bergamo) · Dispatch Page

**LIME / BGY** · Orio al Serio, Bergamo, Lombardy, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LIME Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / spoke** (not a K Global base) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single passenger terminal, two zones (A and B); two jet-bridge gates, remainder remote stands 🟧 |
| Widebody stands available | None expected — category-S / narrowbody-oriented field 🟧 |
| Slot regime | Not confirmed — traffic density suggests a coordinated regime is plausible; not verified 🟧 |
| Curfew | Not published / verify — no citable public source found despite the field's known night cargo/mail movement 🟧 |
| Primary handling agent | Not confirmed for our operation 🟧 |
| Fuel supplier(s) | Not confirmed; at least one FBO (Signature) reported present at the field 🟧 |
| Customs / PoE for pax | **Yes** — international scheduled traffic confirmed; desk hours not confirmed 🟧 |
| De-icing | Not confirmed; plausible given Po Valley winter climate 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** One passenger terminal split into two zones — **Zone A** (gates A1–A15) and **Zone B** (gates B1–B5). Only gates A13 and B5 are reported with boarding bridges; the remainder are remote gates requiring bus/walk boarding.
- **Our operation uses:** Not confirmed — expect a remote-stand boarding profile as the norm at this field given the gate mix. 🟧
- **International arrivals / CBP-equivalent hall:** Single-terminal international arrivals; no separate international concourse confirmed. 🟧
- **Notes:** A rail link to Bergamo city/Milan is under construction at the field, expected to open in 2026 — a future ground-transport change with no direct operational impact on our dispatch planning. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** None expected at this category-S field; not confirmed either way from a primary source. 🟧
- **Stands NOT usable by our types:** Not confirmed — no stand-size restriction identified for narrowbody/regional types. 🟧
- **Remote / hardstand positions:** The majority of gates (13 of 15 in Zone A, 4 of 5 in Zone B) are reported as remote, non-jetbridge positions — bussing/walking to/from the terminal should be the default planning assumption. 🟧
- **Contact vs remote for our arrivals:** Expect remote as the norm; a contact gate (A13/B5) would be the exception. 🟧
- **Ground-movement stand caveats:** Single-runway, limited-taxiway field — see [Briefing §13](index.md) and the Departure/Arrival taxi sections. Confirm actual stand assignment and taxi routing with Ground/Tower on the day.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed from a public source; the field's very high movement count (109,971 in 2024) makes a coordinated regime plausible, but no coordinator or level could be corroborated. 🟧
- **Curfew / night restriction:** Not published / verify. No specific curfew hours or hard/voluntary night restriction could be corroborated from a citable public source, despite the field being understood to carry meaningful night cargo/mail movement alongside its daytime schedule. **Treat this as an open item requiring AIP AD 2.20 confirmation before assuming any operating window** — do not plan a schedule against an assumed curfew or its absence. 🟥
- **CTOT / flow control:** Not confirmed; EUROCONTROL Network Manager ATFM/CTOT regulation applies as general practice at any congested EU field during peak/adverse conditions — not independently confirmed for LIME. 🟧
- **Commercial impact:** Given the unconfirmed curfew/slot status and the single-runway capacity ceiling, build conservative schedule buffer around this field until the regime is verified — treat any assumed late-evening or early-morning movement as provisional pending confirmation.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed for our operation. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 6 min / taxi-out 8 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard narrowbody/regional service times.
- **Services:** Push-back, GPU/PCA, water/lav, catering and cabin clean expected as standard at a scheduled-carrier stand; not individually confirmed.
- **Turnaround risk items:** Remote-stand bussing (majority of gates are non-jetbridge), single-runway sequencing pressure at peak banks, and — in season — de-icing exposure are the plausible turnaround-stretch risks at this field; none individually quantified from a primary source. 🟧

---

## 6. Load factors & seasonality

- **Demand peaks:** Field carries year-round dense low-cost-carrier scheduling (one of the busiest LCC operations in Italy) plus a growing secondary-carrier presence; specific day-of-week/seasonal pattern for our operation not sourced. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for LIME specifically — treat as a standard leisure/VFR-heavy LCC demand pattern pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** The field carries substantial dedicated cargo throughput (reported ~23,000 tonnes in 2024, still growing year-on-year even after a major integrator relocated its hub to Malpensa in 2022) — a real consideration for apron/ramp congestion and any belly-cargo uplift planning, though not broken out for our specific operation. 🟧
- **Connection banks:** Not applicable — non-base spoke field; connection-bank timing is set by the network schedule rather than by local demand data at LIME.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed; at least one FBO (Signature) is reported present at the field. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not assessed this pass — pull live pricing at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration relevant to this short/medium-haul European field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — single-terminal international arrivals hall serving a mixed Schengen/non-Schengen scheduled network.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** With curfew status unconfirmed (§4), do not assume overnight PoE staffing or an available overnight operating window without direct AIP confirmation. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed from a primary source; plausible given the Po Valley winter climate. 🟧
- **Season:** Typical Central/Southern European de-icing season would be roughly Nov–Mar given the regional winter-fog/cold climatology — not independently confirmed for LIME specifically. 🟧
- **Provisioning:** Not confirmed — fluid type, pad location and throughput unsourced. 🟧
- **Commercial impact:** Winter Po Valley radiation fog (see [Briefing §14](index.md)) combined with any de-icing requirement is the plausible seasonal reliability driver at this field — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). Not individually quantified from a primary source.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Single-runway capacity ceiling under sustained high LCC/cargo movement volume, compounded by winter Po Valley fog risk — both plausible drivers, neither individually quantified from a primary reliability dataset. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed; a single-runway field carrying 109,971 movements/year (2024) is inherently capacity-constrained at peak banks. 🟧
- **On-time reliability picture:** Winter fog mornings and peak LCC banks are the plausible highest-risk windows; not independently confirmed from a primary on-time-performance source. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not published / verify — no citable public source found. 🟧
- **Curfew infringement consequence:** Not published / verify — with the curfew regime itself unconfirmed, no infringement-consequence detail can be stated. 🟧
- **Scheduling guardrails:** Until the curfew/slot regime is confirmed against the AIP, build conservative buffer around any late-evening or early-morning rotation at this field and do not schedule against an assumed operating window. 🟥

---

## Open items (🟧 — confirm against AIP / operator data)

- Curfew hours, noise-charge schedule and slot-coordination level/coordinator — none corroborated despite the field's known night cargo/mail activity.
- Terminal/gate assignment for our operation; confirmation of remote-vs-contact stand norm.
- Handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel supplier(s) and uplift hours.
- Customs/immigration desk hours.
- De-icing availability, season and provisioning.
- EUROCONTROL CTOT/ATFM specifics for LIME (general practice assumed, not independently sourced).
- Day-of-week/seasonal demand pattern and belly-cargo interaction specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- AIP Italia (ENAV eAIP) — AD 2 LIME index — https://www.nextdigital.it/apps/aip/browse/ad?language=en (retrieved 2026-07-26). *Primary source of record; app-gated portal did not return fetchable field-level content this pass.*
- Wikipedia — "Milan Bergamo Airport" — https://en.wikipedia.org/wiki/Milan_Bergamo_Airport (retrieved 2026-07-26). *Terminal layout, traffic/cargo statistics, operator, rail-link construction.*
- OurAirports — https://ourairports.com/airports/LIME/ (retrieved 2026-07-26). *General facility data.*
- SkyVector — https://skyvector.com/airport/LIME/Bergamo-Orio-Al-Serio-Airport (retrieved 2026-07-26). *FBO/fuel-provider listing.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
