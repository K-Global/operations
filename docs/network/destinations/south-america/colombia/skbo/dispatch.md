# SKBO — El Dorado Intl · Dispatch Page

**SKBO / BOG** · Bogotá, Colombia · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Aerocivil Colombia AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [SKBO Briefing](index.md), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Destination — **not a K Global base** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not confirmed in reachable sources 🟧 |
| Widebody stands available | Not confirmed in reachable sources 🟧 |
| Slot regime | Not published / verify 🟧 |
| Curfew | Not published / verify 🟧 |
| Primary handling agent | Not confirmed in reachable sources 🟧 |
| Fuel supplier(s) | Not confirmed in reachable sources 🟧 |
| Customs / PoE for pax | **Yes** — international port of entry `[OurAirports #customs tag]`; hours not confirmed 🟧 |
| De-icing | Not typically expected (equatorial-latitude field); not confirmed as never-required 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Not confirmed in reachable sources this pass. SKBO is reported to have handled on the order of **45.8 million passengers** in its most recent reported year, with a 2023-announced expansion plan targeting **60 million passengers** capacity `[Wikipedia, retrieved 2026-07-26]` — the current terminal configuration should be reconfirmed rather than assumed static. 🟧
- **Our operation uses:** Not confirmed — verify assigned terminal/concourse at planning. 🟧
- **International arrivals / CBP hall:** International PoE facilities confirmed to exist `[OurAirports #customs tag]`; hall location/connection implications not confirmed. 🟧
- **Notes:** Capacity-expansion works are reported as an active or upcoming programme (§1); expect possible construction-related terminal/stand disruption — reconfirm before relying on a static layout. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed in reachable sources. 🟧
- **Stands NOT usable by our types:** Not confirmed in reachable sources. 🟧
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Not confirmed in reachable sources. 🟧
- **Ground-movement stand caveats:** Cross-ref [Departure §2](departure.md) and [Briefing §13](index.md) — taxi routing and hot spots are not confirmed in reachable sources this pass; confirm locally.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not published / verify — no coordination level found in reachable sources. 🟧
- **Curfew / night restriction:** Not published / verify — no curfew found, **not confirmed as "none."** 🟧
- **CTOT / flow control:** Not confirmed in reachable sources; no ATFM/EDCT-style programme identified for SKBO this pass. 🟧
- **Commercial impact:** Pending confirmation of the above, treat scheduling windows as unconstrained by a known slot/curfew regime, but **do not rely on this** for schedule construction without a primary-source check.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable sources. 🟧
- **Typical turnaround time for our type:** Not published / verify; VAMSYS mirror carries **12 min taxi-in / 16 min taxi-out** (in/out convention as recorded, direction not further specified) `[VAMSYS mirror 2026-07-26]`, which feeds turnaround planning but is not itself a turnaround-time figure. 🟧
- **Services:** Not confirmed in reachable sources — pushback, GPU/PCA, water/lav, catering and cabin-clean availability to be confirmed locally. 🟧
- **Turnaround risk items:** The reported capacity-expansion programme (§2) and high overall passenger volume (Colombia's primary hub) suggest congestion/resource-contention risk at peak banks — not independently quantified this pass. 🟧

---

## 6. Load factors & seasonality

- **Demand peaks:** Not confirmed in reachable sources — Colombia's primary international/domestic gateway is likely to show year-round high baseline demand with holiday-period peaks (year-end, Semana Santa); not independently sourced this pass. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed in reachable sources. 🟧
- **Cargo / belly capacity:** Not confirmed in reachable sources. 🟧
- **Connection banks:** Not confirmed in reachable sources — as the country's primary hub, a wave-style domestic/international connection structure is plausible but not confirmed. 🟧

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in reachable sources. 🟧
- **Uplift availability & hours:** Jet A-1 assumed available given SKBO's role as Colombia's primary international gateway; H24 status not confirmed. 🟧
- **Price / tankering angle:** Not assessed — pull live fuel-price signal at planning. High-elevation departure performance (see [Briefing §3.5](index.md)) may itself argue against tankering extra fuel out of SKBO if it erodes an already thrust/gradient-limited takeoff weight — weigh the tankering decision against the density-altitude payload trade, not price alone.
- **Quality / freeze notes:** Not confirmed; no unusual fuel-freeze consideration expected relative to other network fields — see [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** **Yes** `[OurAirports #customs tag]`; terminal/hall location not confirmed. 🟧
- **CBP / immigration hours:** Not confirmed in reachable sources. 🟧
- **Pre-clearance / visa-transit notes:** Not confirmed in reachable sources. 🟧
- **Late/overnight/diversion caveat:** Off-peak/overnight PoE staffing not confirmed — do not assume H24 coverage without verification. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed in reachable sources; not typically expected given the equatorial latitude despite the 8,361 ft elevation. 🟧
- **Season:** Not applicable in the conventional sense — ambient temperatures at SKBO rarely reach freezing given the equatorial latitude; cold early mornings should still be checked against current conditions. 🟧
- **Provisioning:** Not confirmed in reachable sources. 🟧
- **Commercial impact:** Expected minimal given the climate, but not independently confirmed — do not assume zero de-ice exposure without a current-conditions check. 🟧

---

## 10. Typical delays / reliability

- **Signature delay driver:** Plausible candidates given the field's profile are **early-morning fog** (§14 of the Briefing) and **wet-season convective weather**, plus possible congestion tied to the field's high overall traffic volume — not independently quantified this pass. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed in reachable sources. 🟧
- **On-time reliability picture:** Not confirmed in reachable sources — treat fog-prone early mornings as a scheduling risk factor pending data. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources. 🟧
- **Curfew infringement consequence:** Not applicable pending confirmation that a curfew exists at all (§4). 🟧
- **Scheduling guardrails:** Pending confirmation of slot/curfew regime (§4), no schedule buffer is currently mandated by a known constraint; build a fog-window buffer into early-morning schedule construction as a precaution given §14 of the Briefing.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/concourse assignment, widebody stand count and code-letter allocation for our operation — not confirmed.
- Slot-coordination level, curfew/night-restriction status, and CTOT/ATFM applicability — not confirmed; treat as unverified rather than "none."
- Handling agent(s) and typical turnaround time for our fleet types — not confirmed.
- Fuel supplier(s), into-plane hours and price/tankering signal — not confirmed; pull live at planning.
- Customs/immigration desk hours and overnight/diversion PoE staffing — not confirmed.
- De-icing availability/season, though minimal exposure is expected given the equatorial latitude.
- Demand seasonality, connection-bank structure and cargo/belly capacity — not confirmed.
- On-time reliability data and dominant delay driver — not confirmed; fog and wet-season convection are plausible candidates pending data.

> **Live data — pull at planning:** fuel price, slot/CTOT file, ATFM/ground-delay program, current demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/SKBO/ (retrieved 2026-07-26; underlying record last updated 2024-04-22). *PoE/customs tag baseline.*
- Wikipedia — "El Dorado International Airport" — https://en.wikipedia.org/wiki/El_Dorado_International_Airport (retrieved 2026-07-26). *Passenger-traffic and capacity-expansion context.*
- Companion OM C file: [SKBO — Briefing](index.md) — full static/TEM reference for this field.
- Companion OM E file: [`Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Aerocivil Colombia AIP (AD 2 SKBO)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
