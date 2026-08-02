# EGPH — Edinburgh · Dispatch Page

**EGPH / EDI** · Edinburgh (Ingliston), Lothian, Scotland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EGPH Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / spoke** — not a K Global base (`Base: No`) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single passenger terminal — not otherwise specified for our operation 🟧 |
| Widebody stands available | 🟥 AIP direct statement: **"stand availability is extremely limited, particularly at night and for large wide-bodied aircraft"** — count/position not published |
| Slot regime | Coordinated — **Airport Coordination Ltd (ACL)**; specific IATA level (1/2/3) not confirmed 🟧 |
| Curfew | No hard movement curfew confirmed 🟧; **hard rule — no IFR visual approaches 2230–0630 (2130–0530)** 🟥 |
| Primary handling agent | 🟥 **Mandatory for every flight** (PPR required, due to limited parking space) — specific contracted handler for our operation not confirmed 🟧 |
| Fuel supplier(s) | **Pentland Aviation, Signature Flight Support** (bowser) |
| Customs / PoE for pax | **Yes** — H24 |
| De-icing | **Available H24** |

---

## 2. Terminals & concourses

- **Terminal layout:** Edinburgh operates a **single passenger terminal** serving 35-plus airlines and every scheduled movement — no domestic/international terminal split and no inter-terminal transfer requirement. Gates 1–10 are directly accessible from the departure lounge; Gates 11–20 are reached via a below-ground walkway. 🟧 *(Terminal/gate-numbering detail is tier-4 corroborated, not AIP-sourced — verify current pier assignment.)*
- **Our operation uses:** Not specified for a K Global rotation this pass — confirm gate/pier assignment with handling ahead of the first scheduled service. 🟧
- **International arrivals / CBP-equivalent hall:** All passenger flows (domestic and international) pass through the single terminal; Border Force clears international arrivals within it — no separate satellite facility identified.
- **Notes:** Long-haul transatlantic widebody service at Edinburgh has been growing (carriers reported operating or launching widebody/long-haul-configured narrowbody service include Delta, JetBlue, United, Air Canada, Emirates, Qatar Airways, Etihad, and a new American Airlines JFK service on the Airbus A321XLR) — this growth sits directly against the AIP's stated stand-availability constraint for large widebody aircraft (§3) and is worth carrying into any K Global widebody scheduling decision at this field. 🟧 *(Tier-4 corroborated, not AIP-sourced.)*

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟥 No published stand count or code-letter breakdown was found; the AIP states directly that **"stand availability is extremely limited, particularly at night and for large wide-bodied aircraft."** Treat any widebody rotation, and especially any overnight widebody parking, as requiring confirmed stand allocation well in advance of the movement.
- **Stands NOT usable by our types:** Not confirmed in detail — narrowbody-oriented gates would not be expected to take a Code E/F type; confirm with handling. 🟧
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧 Given the stated stand scarcity, remote/hardstand parking for a widebody arrival should be treated as a real possibility, not an edge case.
- **Contact vs remote for our arrivals:** Not confirmed — do not assume a contact widebody gate is guaranteed; confirm with handling. 🟧
- **Ground-movement stand caveats:** **Code E/F aircraft must vacate the runway at the runway end** (via TWY A1 or D1) unless escorted by a follow-me vehicle — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Coordinated via **Airport Coordination Ltd (ACL)** — every flight except GA/military requires prior CEO (EAL) approval **and** prior notification to ACL; ad-hoc requests go to ACL (Mon–Fri 0830–1700/0730–1600) or via an online coordination portal. Specific IATA Level (1/2/3) designation not confirmed in reachable sources. 🟧
- **Curfew / night restriction:** No hard movement curfew corroborated in reachable sources. 🟥 A **hard rule bans all IFR visual approaches 2230–0630 (2130–0530)** — every arrival in that window must fly the ILS under ATC control regardless of actual visibility; reverse thrust/pitch use is separately discouraged 2300–0600 "for environmental reasons."
- **CTOT / flow control:** **Datalink departure clearance (DCL)** is available (ARINC 623-2/Eurocae ED 85-A compliant); winter all flights EOBT-25 min, summer EOBT-22 to -25 min depending on time of day. Broader UK NATS flow-management exposure not independently EGPH-sourced this pass. 🟧
- **Commercial impact:** The **mandatory-handling/PPR-due-to-limited-parking regime, combined with the AIP's explicit widebody stand-scarcity statement**, are the two biggest schedule-integrity risks at this field — build in confirmed stand/handling lead time before committing a widebody rotation, and treat overnight widebody parking as a constrained resource rather than a default option.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** 🟥 **Mandatory for every flight** (commercial, GA, cargo, military, helicopter) — PPR required specifically due to limited parking space. The specific ground handler contracted for our operation is not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 14 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times.
- **Services:** Standard push-back, GPU/PCA, water/lav, catering and cabin-clean services expected at a scheduled contact-gate turn; not individually confirmed for this field.
- **Turnaround risk items:** **Stand scarcity for widebody types, especially overnight**, plus the single-runway/no-crosswind-alternative exposure to weather-driven delay, are the standout turnaround risks here. De-icing-pad throughput in the Scottish winter season is a secondary consideration (§9).

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for the K Global operation specifically. For general network context: Edinburgh is Scotland's busiest airport, reported at ~15.8–17.0 million annual passengers in 2024–2025, served by 35+ airlines to roughly 150 destinations, with continued growth in transatlantic leisure/long-haul demand. 🟧 *(Tier-4 corroborated, not AIP-sourced.)*
- **Day-of-week / seasonal pattern:** Not independently sourced for EGPH specifically — treat as a standard UK leisure/business mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not independently sourced for this field. 🟧
- **Connection banks:** Not applicable as a K Global base; inbound/outbound timing is set by the network route register rather than local connection-bank structure.

---

## 7. Fuel

- **Supplier / into-plane:** **Pentland Aviation, Signature Flight Support** (bowser).
- **Uplift availability & hours:** AVTUR **Jet A-1**, **0530–2300 (0430–2200 UTC)**; outside these hours only by prior arrangement with the handling agent. 🟧
- **Price / tankering angle:** Assess price differential against the outbound/base field per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** **No pre-blended anti-icing additive** — confirm FSII requirements per type/route before uplift, particularly relevant for any longer or higher-altitude sector departing this field. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — single terminal.
- **CBP-equivalent / immigration hours:** **H24** (Customs & Immigration confirmed H24 per AIP). 🟩
- **Pre-clearance / visa-transit notes:** Standard UK Border Force entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** Immigration desk coverage is H24, so it is **not** the binding late/overnight constraint at this field — the **stated widebody stand scarcity** and the **2230–0630 visual-approach rule** are the operative overnight considerations instead (§3/§4). 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available H24** per AIP. 🟩
- **Season:** Standard Scottish winter de-icing season, roughly Oct–Apr — exact months not independently confirmed for this field. 🟧
- **Provisioning:** Fluid type, pad location and throughput capacity not confirmed in reachable sources. 🟧
- **Commercial impact:** Winter de-icing throughput, combined with the field's single-runway/no-crosswind-alternative exposure, is the leading seasonal delay-risk driver — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Likely **wind/crosswind exposure on the single runway** (no crosswind alternative on the field) and coastal **haar** (sea fog) events; neither independently quantified for EGPH in reachable sources. 🟧
- **Ground-delay / flow-program exposure:** Not independently sourced for this field — treat as standard UK NATS flow-management exposure pending confirmation. 🟧
- **On-time reliability picture:** The **combination of a single runway with no crosswind alternative and constrained widebody stand availability** are the structural risk factors most relevant to K Global scheduling here. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Noise limit of **94 dBA Lmax by day** (0600–2330/0500–2230) and **87 dBA Lmax by night** (2330–0600/2230–0500) at three named monitoring terminals (Houston Industrial Estate Livingston; Scottish Power Broxburn; Cramond Kirk Manse); specific per-movement noise-charge tariff not confirmed. 🟧
- **Curfew infringement consequence:** No hard movement curfew corroborated, but the **2230–0630 all-IFR-visual-approach ban** is a hard ATC rule, not merely a charge — plan every night arrival as an ILS approach regardless of conditions. Reverse thrust/pitch use is discouraged 2300–0600 "for environmental reasons," a soft (not charged/penalised) guideline in reachable sources.
- **Scheduling guardrails:** Build buffer so a normal operational delay does not push an arrival into the 2230–0630 window unprepared for an ILS-only approach, and treat **overnight widebody parking as a constrained resource** given the AIP's explicit stand-scarcity statement — confirm allocation well ahead of schedule.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate/pier assignment for our operation, and confirmation of the current 1–10/11–20 pier-split detail (tier-4 sourced).
- Widebody (Code E/F) stand count, code-letter breakdown and typical night-time availability for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Specific IATA slot-coordination level (1/2/3) at ACL.
- De-icing fluid type, pad location(s) and season months.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Existence (or not) of a hard movement curfew beyond the confirmed 2230–0630 visual-approach ban.
- Per-movement noise-charge tariff detail.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current UK NATS flow-management status, demand/load, stand allocation, bird-activity NOTAMs. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **UK NATS eAIP — AIP United Kingdom, AD 2 EGPH**, AIRAC effective 2020-10-08 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2020-10-08-AIRAC/html/eAIP/EG-AD-2.EGPH-en-GB.html (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/EGPH/ (retrieved 2026-07-26).
- Wikipedia — "Edinburgh Airport" — https://en.wikipedia.org/wiki/Edinburgh_Airport (retrieved 2026-07-26). *Terminal/pier layout, based/major carriers, transatlantic growth, passenger-volume figures — tier-4, not AIP-grade.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
