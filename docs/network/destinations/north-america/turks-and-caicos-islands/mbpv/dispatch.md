# MBPV — Providenciales Intl · Dispatch Page

**MBPV / PLS** · Providenciales, Turks and Caicos Islands · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not reachable this pass

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [MBPV Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | 🟧 Not yet reconciled in VAMSYS — treat as a prospective network destination pending registration |
| Terminals in use for us | Single passenger terminal; layout/gate detail not confirmed 🟧 |
| Widebody stands available | Not confirmed this pass 🟧 |
| Slot regime | None identified |
| Curfew | Not confirmed this pass 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet A / AVGAS 100LL corroborated (tier-4); supplier not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — Airport of Entry confirmed; hours not confirmed 🟧 |
| De-icing | **NIL** — not applicable |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal; the airport was administratively renamed **Howard Hamilton International Airport** in 2023, though "Providenciales International Airport" remains the dominant name in general and operational use.
- **Our operation uses:** The single passenger terminal — no split-terminal consideration at this field.
- **International arrivals / CBP-equivalent hall:** Confirmed as an Airport of Entry; specific hall/desk configuration not confirmed. 🟧
- **Notes:** 🟧 Field is **not yet reconciled in VAMSYS** — confirm current registration status and any terminal-capacity note before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not individually itemised in reachable sources. 🟧
- **Stands NOT usable by our types:** A tier-4 chart-derived reference notes certain taxiways restricted to **Code D and below** — treat any stand fed only via those taxiways as unconfirmed for a K Global Code E/F aircraft pending primary-source verification. 🟧
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — verify with handling. 🟧
- **Ground-movement stand caveats:** See [Briefing §13](index.md) — confirm current taxiway weight/wingspan limits before routing a Code E/F aircraft.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None identified in reachable sources.
- **Curfew / night restriction:** Not confirmed this pass — a tier-4 chart-derived source references a seasonal operating-hours pattern, but exact figures were not independently confirmed. 🟧
- **CTOT / flow control:** No ATFM/CTOT regime identified. 🟧
- **Commercial impact:** Not assessable until VAMSYS registration and primary AIP access are complete.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable sources. 🟧
- **Typical turnaround time for our type:** 🟧 **Not in VAMSYS** — no taxi-in/taxi-out figure available for planning purposes; register this field in VAMSYS before relying on a standard turnaround assumption.
- **Services:** Not itemised in reachable sources. 🟧
- **Turnaround risk items:** Single-runway field; possible Code-D taxiway limitation (Briefing §13) may constrain ground-movement flexibility for a Code E/F rotation pending confirmation.

---

## 6. Load factors & seasonality

- **Demand peaks:** Winter high season (Dec–Apr) is the standard Caribbean leisure-demand peak for this region; hurricane season (Jun–Nov) suppresses demand and carries diversion/closure risk.
- **Day-of-week / seasonal pattern:** Not independently sourced for this field. 🟧
- **Cargo / belly capacity:** Not confirmed. 🟧
- **Connection banks:** Not applicable — prospective destination field, not a network connection point for K Global.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A and AVGAS 100LL availability corroborated by tier-4 community sources (fuel-price aggregator data); specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not confirmed — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A expected; no cold-soak consideration at this tropical field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — confirmed Airport of Entry.
- **CBP-equivalent / immigration hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Standard Turks and Caicos Islands (UK Overseas Territory) entry; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** Not confirmed — verify customs/immigration staffing for any late or overnight arrival. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **NIL** — not applicable at this field.
- **Season:** Not applicable.
- **Provisioning:** Not applicable.
- **Commercial impact:** None.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Hurricane-season weather (Jun–Nov) is the principal reliability risk identified for this region.
- **Ground-delay / flow-program exposure:** No ATFM/CTOT regime identified. 🟧
- **On-time reliability picture:** Not independently assessable this pass. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed. 🟧
- **Curfew infringement consequence:** Not confirmed. 🟧
- **Scheduling guardrails:** Build hurricane-season contingency (reroute/divert) into seasonal scheduling; hold general schedule buffer pending confirmation of any operating-hours restriction.

---

## Open items (🟧 — confirm against AIP / operator data)

- **Field not yet reconciled in VAMSYS** — role, category, base flag, alternates and taxi times all pending; complete registration before treating this pack as operationally final.
- **Primary UK/TCI AIP not reachable this pass** — re-verify this entire page against it when access is available.
- Handling agent(s), turnaround time, fuel supplier/hours, customs hours.
- Possible Code-D taxiway limitation — confirm before any Code E/F stand/taxi assignment.

> **Live data — pull at planning:** fuel price, current demand/load, stand allocation, current tropical-cyclone advisory status in season. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- Wikipedia — "Providenciales International Airport" — https://en.wikipedia.org/wiki/Providenciales_International_Airport (retrieved 2026-07-26). *2023 administrative rename, operator (TCIAA).*
- Universal Weather and Aviation — https://www.universalweather.com/airports/MBPV-PLS-PROVIDENCIALES-AIRPORT-PROVIDENCIALES-ISLAND-TURKS-AND-CAICOS-ISLANDS/ (retrieved 2026-07-26). *Airport-of-Entry confirmation.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
