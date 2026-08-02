# LEZL — Sevilla-San Pablo · Dispatch Page

**LEZL / SVQ** · Seville, Andalusia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LEZL Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / network spoke** — not a base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single passenger terminal (capacity expanded to 10M pax/year, works completed 2022) `[Wikipedia]` |
| Widebody stands available | Not confirmed — 23 total stands reported, all self-manoeuvring, 16 remote; no Code-E-specific data found 🟧 |
| Slot regime | Not confirmed 🟧 |
| Curfew | Not confirmed 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1 assumed; not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — international route network confirmed; desk hours not confirmed 🟧 |
| De-icing | Not confirmed — unlikely given Andalusian climate, but not sourced as a formal NIL 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal building. A capacity-expansion programme (2019–2022) enlarged the terminal and raised handling capacity from ~6M to **10M passengers/year** `[Wikipedia]`.
- **Our operation uses:** The single terminal — no concourse/pier split identified in reachable sources.
- **International arrivals hall:** Present — LEZL serves ~57 European and North African destinations in addition to 20 domestic Spanish points `[Wikipedia]`. Exact hall location/flow not confirmed. 🟧
- **Notes:** No current construction/transit-constraint items found beyond the completed 2019–2022 expansion. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed. 🟧
- **Stands NOT usable by our types:** Not confirmed. 🟧
- **Remote / hardstand positions:** **16 of 23 total stands are remote** `[Wikipedia]` — expect a meaningful chance of a remote/bussed arrival.
- **Contact vs remote for our arrivals:** Not confirmed — plan for either given the remote-stand ratio above.
- **Ground-movement stand caveats:** Single-runway field simplifies routing in principle; confirm actual stand-to-runway taxi with Ground/Apron on the day. See [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed. 🟧
- **Curfew / night restriction:** Not confirmed — no data found in reachable sources. 🟧
- **CTOT / flow control:** Not confirmed; a field of this traffic level is not expected to carry heavy EUROCONTROL flow regulation, but this is not independently sourced. 🟧
- **Commercial impact:** Pending confirmation of the above, the more material commercial constraint identified is **summer-heat-driven performance/weight planning** rather than any confirmed slot or curfew regime (§7/§10).

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed. 🟧
- **Typical turnaround time for our type:** Not confirmed; VAMSYS does not carry a taxi-time figure for this field (§1 Briefing). 🟧
- **Services:** Standard push-back, GPU/PCA, water/lav, catering and cabin services expected at a major AENA international field — not individually confirmed.
- **Turnaround risk items:** Extreme summer heat (ramp/handling-crew and aircraft-systems considerations), and the field's single-runway capacity constraint at peak banks.

---

## 6. Load factors & seasonality

- **Demand peaks:** Leisure/tourism and regional-business mix; LEZL is a base for **Vueling and Ryanair** (low-cost, high-frequency point-to-point carriers) `[Wikipedia]`.
- **Day-of-week / seasonal pattern:** Not independently sourced for LEZL specifically — treat as standard Southern-European leisure/business mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not confirmed. 🟧
- **Connection banks:** Not confirmed — LEZL is a spoke, not a K Global connection point.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available as a major AENA international field; specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not confirmed — assess price differential to base/network at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration relevant to this short/medium-haul spoke.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international route network confirms PoE status.
- **CBP-equivalent / immigration hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** Not confirmed — curfew/night-restriction status is an open item (§4). 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed — Andalusia's hot-summer Mediterranean climate makes routine de-icing unlikely, but this is not sourced as a formal NIL. 🟧
- **Season:** Not applicable / not confirmed.
- **Provisioning:** Not confirmed.
- **Commercial impact:** Expected to be minimal given the climate; not independently confirmed.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Extreme summer heat** (routinely 40–45°C, Jun–Sep) — a genuine performance-planning factor, and the single-runway capacity constraint at peak banks.
- **Ground-delay / flow-program exposure:** Not confirmed; expected to be low relative to a coordinated hub field. 🟧
- **On-time reliability picture:** Not confirmed. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed. 🟧
- **Curfew infringement consequence:** Not confirmed — curfew existence itself is unconfirmed (§4). 🟧
- **Scheduling guardrails:** Pending confirmation of slot/curfew status, hold summer-day performance margin as the primary schedule guardrail at this field.

---

## Open items (🟧 — confirm against AIP / operator data)

- Slot-coordination level, curfew/night-restriction status, and any noise-charge regime.
- Handling agent(s) and confirmed minimum turnaround time.
- Widebody/Code-E stand availability and gate assignment for our operation.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- Day-of-week/seasonal load pattern specific to the K Global operation.
- ENAIRE eAIP AD 2 LEZL not directly reachable this pass — most commercial/operational figures above need a live-AIP cross-check.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP España (ENAIRE)** — https://aip.enaire.es/AIP/ attempted 2026-07-26; JavaScript-frameset, not directly reachable this pass.
- OurAirports — https://ourairports.com/airports/LEZL/ (retrieved 2026-07-26).
- Wikipedia — "Seville Airport" — https://en.wikipedia.org/wiki/Seville_Airport (retrieved 2026-07-26). *Route network, stand count, terminal capacity, base carriers.*
- AENA — https://www.aena.es/en/seville.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
