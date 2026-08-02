# EHEH — Eindhoven · Dispatch Page

**EHEH / EIN** · Eindhoven, Noord-Brabant, Netherlands · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional (LVNL eAIP not directly reachable this pass)

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EHEH Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate** `[VAMSYS mirror 2026-07-26]` |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EHAM, EDDF, EBBR** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single civil terminal (expanding 27,300 m² → 35,000 m², construction begun 2025); western part of the site is a separate military air base, not applicable to a civil movement |
| Widebody stands available | Not individually confirmed; the field's fleet mix is dominated by narrowbody low-cost carriers (Ryanair, Wizz Air, Transavia) 🟧 |
| Slot regime | Not confirmed as coordinated in reachable sources 🟧 |
| Curfew | De facto absence of scheduled night civil flights reported; reported (not reconciled) military opening-hours window 07:00–23:00 LT 🟧 |
| Primary handling agent | Not confirmed in reachable sources 🟧 |
| Fuel supplier(s) | Assumed given the field's large scheduled network; supplier not confirmed 🟧 |
| Customs / PoE for pax | Reported present; hours not confirmed 🟧 |
| De-icing | Assumed given active winter operations; not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** A single civil terminal, currently being expanded from 27,300 m² to 35,000 m² (construction begun 2025) to support the field's dense low-cost passenger network. Passenger facilities include a business lounge ("Aspire by Swissport"), retail and food/beverage concessions, and a business centre; approximately 1,500 parking spaces are provided.
- **Our operation uses:** The single civil terminal; the western military-side facilities (Eindhoven Air Base) are not applicable to a K Global civil movement. 🟧 Confirm gate/stand assignment with handling.
- **International arrivals / CBP-equivalent hall:** Customs reported present; exact hours not confirmed. 🟧
- **Notes:** **CRITICAL — the field is scheduled for a FULL CLOSURE 1 February – 19 July 2027** (~5.5 months) for runway renovation; Transavia and TUI fly Netherlands are relocating flights to Maastricht Aachen and Weeze (Germany) during that window. 🟥 Confirm this field's status before planning any routing near that period.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E) stands:** Not individually confirmed this pass; the field's traffic is dominated by narrowbody low-cost carriers — a K Global widebody stand assignment would need confirmation with handling. 🟧
- **Stands NOT usable by our types:** Not confirmed in reachable sources. 🟧
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — confirm with handling.
- **Ground-movement stand caveats:** Joint civil/military field — expect ground coordination with the adjacent military air base; see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed as coordinated in reachable sources. 🟧
- **Curfew / night restriction:** A **de facto absence of scheduled night civil flights** is reported (no explicit civil curfew regulation independently confirmed); a separate secondary source reports a **military opening-hours window of 07:00–23:00 LT** with handling/customs/fuel/de-icing available daily 07:00–20:00 LT — these figures are **not reconciled** this pass. 🟧 Confirm current operating-hours reality before planning any early/late-day rotation.
- **CTOT / flow control:** Not confirmed in reachable sources. 🟧
- **Commercial impact:** **The single largest commercial-impact item at this field is the scheduled 1 Feb – 19 Jul 2027 full closure** — any K Global schedule that could touch this window must reconfirm the field's operational status and plan an alternate.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 6 min / taxi-out 8 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — notably short, consistent with a compact single-runway regional field.
- **Services:** Push-back, GPU/PCA, water/lav, catering and cabin services expected at a scheduled-carrier stand.
- **Turnaround risk items:** Single-runway field — any runway closure is a full-field closure with no configuration fallback; confirm current NOTAM status before planning a tight turn, and reconfirm the field's overall availability given the scheduled 2027 closure.

---

## 6. Load factors & seasonality

- **Demand peaks:** EHEH is the **second-busiest passenger airport in the Netherlands** (6.96 million passengers in 2025), with a dense Ryanair/Wizz Air/Transavia leisure-oriented low-cost network (top routes include Málaga, London-Stansted, Alicante, Faro, Budapest, Valencia and other Southern-European/leisure destinations) — expect strong seasonal leisure peaking (summer sun destinations, winter ski/sun charter).
- **Day-of-week / seasonal pattern:** Leisure-carrier-dominated network implies a weekend/holiday-period demand skew; not independently confirmed for the K Global operation specifically. 🟧
- **Cargo / belly capacity:** Not confirmed in reachable sources specific to EHEH's civil side. 🟧
- **Connection banks:** Not applicable — EHEH is not a K Global base; point-to-point/alternate role only.
- **2027 capacity note:** Expect the field's traffic to temporarily drop to near-zero during the 1 Feb – 19 Jul 2027 closure, with some of its Transavia/TUI fly Netherlands traffic relocating to Maastricht Aachen (EHBK) and Weeze, Germany.

---

## 7. Fuel

- **Supplier / into-plane:** Assumed available given the field's large scheduled passenger network; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** One secondary source reports fuel available daily 07:00–20:00 LT (alongside handling/customs/de-icing) — not independently confirmed or reconciled with the field's evident wider operating pattern. 🟧
- **Price / tankering angle:** Assess price differential against home-base (EDDF) tankering economics per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration specific to EHEH confirmed.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Reported present; exact hours not confirmed. 🟧
- **CBP-equivalent / immigration hours:** Not confirmed; one secondary source implies a bounded daily window (see §4/§7) rather than H24 coverage — reconcile before relying on off-peak arrival planning. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen entry per nationality; no pre-clearance programme confirmed.
- **Late/overnight/diversion caveat:** The reported de facto absence of scheduled night civil flights, combined with the reported (not reconciled) 07:00–23:00 LT military-side operating window, suggests overnight movements are **not a normal expectation** at this field — do not plan a late-night arrival/departure without independent confirmation. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** One secondary source reports de-icing available daily 07:00–20:00 LT alongside handling/customs/fuel — not independently confirmed. 🟧
- **Season:** Typical Central/Western European de-icing season assumed; not confirmed for EHEH specifically. 🟧
- **Provisioning:** Not confirmed this pass. 🟧
- **Commercial impact:** Winter weather combined with the single-runway/no-configuration-fallback character of this field are the principal seasonal delay-risk drivers — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not confirmed from a primary reliability source; the **single-runway, no-configuration-fallback** character is the structural factor most likely to concentrate any disruption. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed in reachable sources. 🟧
- **On-time reliability picture:** Not confirmed in reachable sources; the field's dense low-cost leisure network implies typical peak-season/peak-weekend congestion risk common to that traffic profile. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources for EHEH specifically. 🟧
- **Curfew infringement consequence:** No explicit civil curfew regulation independently confirmed this pass; the reported de facto absence of night flights suggests overnight movements are operationally atypical rather than formally prohibited — verify before relying on this distinction for any late-schedule planning.
- **Scheduling guardrails:** Build buffer into any rotation that could otherwise slip toward a late-evening/overnight movement at this field; **treat the scheduled 1 Feb – 19 Jul 2027 full closure as an absolute scheduling exclusion** for this period regardless of any other guardrail.

---

## Open items (🟧 — confirm against LVNL eAIP / operator data)

- **Primary AIP (LVNL eAIP AD 2.EHEH) could not be fetched directly this pass** — all commercial data above needs primary-source reconfirmation.
- **Confirm exact 2027 closure dates and any pre/post-closure operational restrictions** before planning any routing near that window. 🟥
- Slot-coordination level (if any); reconciliation of the two conflicting operating-hours figures found this pass (GA/BA 07:20–18:30 UTC vs. reported military 07:00–23:00 LT).
- Contracted ground handling agent(s) and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration exact hours.
- Widebody/Code E stand capacity for a K Global movement.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current field-availability status ahead of the 2027 closure. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **LVNL eAIP (AIP Netherlands)** — https://eaip.lvnl.nl/ — attempted direct fetch 2026-07-26; AD 2.EHEH did not resolve. Primary verification **PENDING**.
- Wikipedia — "Eindhoven Airport" — https://en.wikipedia.org/wiki/Eindhoven_Airport (retrieved 2026-07-26). *Passenger statistics, terminal expansion, top routes, ownership.*
- Eindhoven Airport — "Renovation of Eindhoven Air Base runway to start in February 2027" — https://www.eindhovenairport.nl/en/news-and-media/renovation-of-eindhoven-air-base-runway-to-start-in-february-2027 (retrieved 2026-07-26). *2027 closure scope and dates.*
- Ground.news / Transavia — Eindhoven Airport 2027 closure coverage and relocation to Maastricht/Weeze (retrieved 2026-07-26).
- Business Air News handbook — Eindhoven Airport entry — https://www.businessairnews.com/hb_airportpage.html?recnum=1076 (retrieved 2026-07-26). *Operating-hours claim (tier-4, unverified).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Netherlands (LVNL); K Global fields from live VAMSYS; 4-page pack. |
