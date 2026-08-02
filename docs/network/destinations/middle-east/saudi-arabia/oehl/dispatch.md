# OEHL — Hail · Dispatch Page

**OEHL / HAS** · Hail, Hail Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [OEHL Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | 🟧 Not assigned — not in VAMSYS |
| Terminals in use for us | Single passenger terminal (no multi-terminal split published) |
| Widebody stands available | 🟧 Not confirmed — Civil Apron/Helipad only, no widebody stand data published |
| Slot regime | None identified |
| Curfew | None published 🟩 |
| Primary handling agent | 🟧 National flag-carrier handling arm (AIP-listed); others not confirmed |
| Fuel supplier(s) | 🟧 Tanker-served Jet A-1 (capacity not published) |
| Customs / PoE for pax | Yes — H24 🟩 |
| De-icing | NIL (published) |
| **Performance gate** | 🟥 **Hot-and-high field (3,305 ft / 37.6°C reference temperature)** — see [Briefing §3.5](index.md) |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal building; no domestic/international concourse split published.
- **Our operation uses:** Not assigned (not in VAMSYS). 🟧
- **International arrivals / CBP hall:** AD open for regional international operations; customs/immigration H24.
- **Notes:** None found. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed — Civil Apron (concrete, PCN 42/R/C/W/T) is the only published parking surface beyond the helipad. 🟧
- **Stands NOT usable by our types:** Not confirmed — no fleet assigned.
- **Remote / hardstand positions:** Not distinguished in reachable AIP data.
- **Contact vs remote for our arrivals:** Not confirmed. 🟧
- **Ground-movement stand caveats:** None flagged in reachable AIP data — cross-ref [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None identified. 🟧
- **Curfew / night restriction:** None published; ATS/customs/immigration/fuelling/handling/security all published H24 (health/sanitation PN only).
- **CTOT / flow control:** No ATFM/CTOT programme identified.
- **Commercial impact:** No slot/curfew constraint identified; **the governing operational constraint is hot-and-high departure performance** (Briefing §3.5), which determines schedulable payload/weight on hot days rather than commercial timing.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** National flag-carrier handling arm per AIP AD 2.4; other third-party agents not confirmed. 🟧
- **Typical turnaround time for our type:** Not confirmed — no fleet/route assignment. 🟧
- **Services:** Standard line services assumed (fuelling, handling, security all H24 per AIP).
- **Turnaround risk items:** None identified beyond the standard interior-Saudi field profile.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not applicable — no route/schedule assignment exists for this field.
- **Day-of-week / seasonal pattern:** Not confirmed.
- **Cargo / belly capacity:** No dedicated freighter facility noted.
- **Connection banks:** Not applicable — not in the network.

---

## 7. Fuel

- **Supplier / into-plane:** Tanker-served Jet A-1; delivery rate described as "variable," no capacity figure published. 🟧
- **Uplift availability & hours:** H24 per AIP.
- **Price / tankering angle:** Not applicable — no schedule assignment; pull live pricing at planning if this field is ever activated.
- **Quality / freeze notes:** Standard Jet A-1; the high-plateau setting brings cooler winter nights than the coastal fields in this pack, but no cold-soak/freeze concern is published. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — AD published as open for regional international operations.
- **CBP / immigration hours:** H24 per AIP; health/sanitation is prior-notice (PN) only. 🟧
- **Pre-clearance / visa-transit notes:** None published.
- **Late/overnight/diversion caveat:** No off-peak staffing caveat found for customs/immigration. 🟩

---

## 9. De-icing provisioning & season

- **Availability:** NIL per AIP.
- **Season:** Not applicable per published data, though the high-plateau setting brings cooler winter conditions than the coastal fields in this network — confirm locally if winter ops are ever planned.
- **Provisioning:** Not applicable.
- **Commercial impact:** None identified.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not applicable at present — no active schedule. If activated, **hot-and-high weight/performance planning on summer days** would be the governing dispatch constraint (Briefing §3.5), not a typical ATC/weather delay driver.
- **Ground-delay / flow-program exposure:** No ATFM/CTOT programme identified.
- **On-time reliability picture:** Not applicable — no operating history in the network. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** None published. 🟧
- **Curfew infringement consequence:** Not applicable — no curfew identified.
- **Scheduling guardrails:** Not applicable — no schedule exists; if activated, **hot-and-high weight planning** (Briefing §3.5) is the primary scheduling guardrail, ahead of any noise/curfew consideration.

---

## Open items (🟧 — confirm against AIP / operator data)

- Widebody/narrowbody stand assignment, turnaround times, handling agent roster beyond the AIP-listed national-carrier arm — none confirmed.
- Fuel-tanker capacity, slot regime, CTOT/flow programme, noise-charge regime — none published/found.
- K Global role in network, terminal use, and reliability history — all pending VAMSYS reconciliation (field is not in VAMSYS).

> **Live data — pull at planning:** fuel price, slot/CTOT file, ATFM/ground-delay program, current demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEHL — Hail**, AIRAC AMDT cycle retrieved (2026-03-19 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIRAC%20AIP%20AMDT%2003_26_2026_03_19/eAIP/AD%202%20OEHL%20HAIL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
