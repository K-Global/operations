# OEGS — Qassim / Prince Naif Bin Abdulaziz · Dispatch Page

**OEGS / ELQ** · Buraidah, Al-Qassim Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [OEGS Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | 🟧 Not assigned — not in VAMSYS |
| Terminals in use for us | Single passenger terminal (no multi-terminal split published) |
| Widebody stands available | 🟧 Not confirmed — Royal Apron/Civil Apron layout, no widebody stand data published |
| Slot regime | None identified |
| Curfew | None published 🟩 |
| Primary handling agent | 🟧 National flag-carrier handling arm (AIP-listed); others not confirmed |
| Fuel supplier(s) | 🟧 Tanker-served Jet A-1 (capacity not published) |
| Customs / PoE for pax | Yes — H24 🟩 |
| De-icing | NIL (climate non-factor) |
| **Departure performance gate** | 🟥 **6.0% (365 ft/NM) minimum climb gradient required on both runways to 5,000 ft** — see [Briefing §3.5/§11](index.md) |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal building; no domestic/international concourse split published.
- **Our operation uses:** Not assigned (not in VAMSYS). 🟧
- **International arrivals / CBP hall:** AD open for regional international operations; customs/immigration H24.
- **Notes:** None found. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed. AIP notes a dedicated "royal parking" position usable by a very heavy type (up to 395 t) under a Code-C-apron-sharing rule when occupied — an unusual but AIP-documented ground-ops case, not routine widebody capacity. 🟧
- **Stands NOT usable by our types:** Not confirmed — no fleet assigned.
- **Remote / hardstand positions:** Royal Apron and Civil Apron are the only two aprons published; no remote/hardstand distinction found.
- **Contact vs remote for our arrivals:** Not confirmed. 🟧
- **Ground-movement stand caveats:** No Tower-visibility or hot-spot caveat published (unlike OEGN) — cross-ref [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None identified. 🟧
- **Curfew / night restriction:** None published; ATS/customs/health/AIS/MET/fuelling/handling/security all published H24.
- **CTOT / flow control:** No ATFM/CTOT programme identified.
- **Commercial impact:** No slot/curfew constraint identified; **the governing operational constraint is the 6.0% departure climb-gradient gate** (Briefing §3.5/§11), which determines which types can be scheduled here at all, not commercial timing.

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
- **Cargo / belly capacity:** AIP lists cargo-handling via the national flag-carrier's arm; no dedicated freighter facility noted.
- **Connection banks:** Not applicable — not in the network.

---

## 7. Fuel

- **Supplier / into-plane:** Tanker-served Jet A-1; delivery rate described as "variable," no capacity figure published (unlike OEGN's tanker table). 🟧
- **Uplift availability & hours:** H24 per AIP.
- **Price / tankering angle:** Not applicable — no schedule assignment; pull live pricing at planning if this field is ever activated.
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak relevance at this hot-climate field. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — AD published as open for regional international operations.
- **CBP / immigration hours:** H24 per AIP. 🟩
- **Pre-clearance / visa-transit notes:** None published.
- **Late/overnight/diversion caveat:** No off-peak staffing caveat found — customs/immigration are H24, unlike OEGN's prior-notice customs regime. 🟩

---

## 9. De-icing provisioning & season

- **Availability:** NIL — hot-climate field, no de-icing infrastructure published.
- **Season:** Not applicable.
- **Provisioning:** Not applicable.
- **Commercial impact:** None.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not applicable at present — the field carries no active schedule. If activated, the **6.0% departure climb-gradient gate** would be the governing dispatch-planning constraint (weight/temperature-limited departures on hot days), not a typical ATC/weather delay driver.
- **Ground-delay / flow-program exposure:** No ATFM/CTOT programme identified.
- **On-time reliability picture:** Not applicable — no operating history in the network. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** None published. 🟧
- **Curfew infringement consequence:** Not applicable — no curfew identified.
- **Scheduling guardrails:** Not applicable — no schedule exists; if activated, **weight/performance planning against the 6.0% climb-gradient gate on hot days** would be the primary scheduling guardrail (Briefing §3.5/§11), ahead of any noise/curfew consideration.

---

## Open items (🟧 — confirm against AIP / operator data)

- Widebody/narrowbody stand assignment, turnaround times, handling agent roster beyond the AIP-listed national-carrier arm — none confirmed.
- Fuel-tanker capacity, slot regime, CTOT/flow programme, noise-charge regime — none published/found.
- K Global role in network, terminal use, and reliability history — all pending VAMSYS reconciliation (field is not in VAMSYS).

> **Live data — pull at planning:** fuel price, slot/CTOT file, ATFM/ground-delay program, current demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEGS — Gassim/Prince Naif Bin Abdulaziz**, AIRAC AMDT cycle retrieved (2025-01-02 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2006_24_2025_01_02/eAIP/AD%202%20OEGS%20GASSIM%20-%20PRINCE%20NAIF%20BIN%20ABDULAZIZ-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
