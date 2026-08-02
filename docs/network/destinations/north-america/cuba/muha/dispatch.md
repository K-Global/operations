# MUHA — Jose Marti Intl · Dispatch Page

**MUHA / HAV** · Havana, Cuba · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [MUHA Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files and demand are pulled at planning (see §Live-data). The primary AIP Cuba package was not reachable this build — every figure here is tier-4 or VATSIM-operational-cross-check sourced and flagged accordingly. Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate-tier field — not a K Global base** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Terminal 3 (international) assumed as the field's principal international gateway; not independently confirmed for our specific operation 🟧 |
| Widebody stands available | Apron 3 (T3): 8 gates (5 medium, 3 large) + 4 remote stands (2 small, 1 medium, 1 large) per a VATSIM operational cross-check; suitability for our Category L type not confirmed 🟧 |
| Slot regime | None identified — not confirmed 🟧 |
| Curfew | None identified — not confirmed 🟧 |
| Primary handling agent | Not confirmed; state operator **ECASA** is the airport operator 🟧 |
| Fuel supplier(s) | Multiple named into-plane providers reported by a tier-4 aggregator (§7); none individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — confirmed Port of Entry; desk hours not confirmed 🟧 |
| De-icing | **NIL** — tropical sea-level field, non-factor 🟩 |

---

## 2. Terminals & concourses

- **Terminal layout:** Three passenger terminal buildings in general public use — domestic-oriented **Terminal 1**, charter/cargo-leaning **Terminal 2**, and the main international gateway **Terminal 3** — plus two non-passenger apron areas (a maintenance/parking apron and a general-aviation apron). Sourced to a VATSIM operational cross-check, not the primary AIP. 🟧
- **Our operation uses:** Terminal 3's international hall is assumed as the K Global arrival/departure terminal, consistent with its role as the field's principal international gateway; not independently confirmed for the specific operation. 🟧
- **International arrivals / CBP-equivalent hall:** Terminal 3, per general large-airport layout convention (arrivals/baggage typically on a separate level from departures) — not independently confirmed. 🟧
- **Notes:** 🟧 Terminal assignment for our operation, and any construction/transit constraints, are not confirmed in reachable sources.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Apron 3 (Terminal 3) — 8 gates (5 medium, 3 large) plus 4 remote stands (2 small, 1 medium, 1 large) per a VATSIM operational cross-check; suitability of the "large" gates for our Category L type not confirmed. 🟧
- **Stands NOT usable by our types:** Not confirmed in reachable sources. 🟧
- **Remote / hardstand positions:** Terminal 3's apron includes 4 remote stands per the same cross-check — bussing implications for our operation not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — expect either, given the reported remote-stand availability at Terminal 3. 🟧
- **Ground-movement stand caveats:** See [Briefing §13](index.md) and the Departure/Arrival taxi sections — single-runway field, so all stand-to-runway movement funnels through the same taxiway system regardless of active runway.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None identified in reachable sources. 🟧
- **Curfew / night restriction:** None identified in reachable sources. 🟧
- **CTOT / flow control:** No ATFM/flow-control regime identified for MUHA specifically; the more material commercial friction is real-world overflight/entry-permit administration for the Habana FIR (see [Briefing §5](index.md)), which is an administrative rather than a flow-control constraint. 🟧
- **Commercial impact:** The absence of a confirmed slot/curfew regime reduces schedule-integrity risk relative to a coordinated hub. The standing commercial risk drivers instead are the single-runway/no-ILS-on-24 configuration and Atlantic hurricane-season disruption (§10).

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable sources; **ECASA** is the state airport operator. 🟧
- **Typical turnaround time for our type:** VAMSYS mirror gives **taxi-in 12 min / taxi-out 15 min** for planning purposes `[VAMSYS mirror 2026-07-26]`; gate/turnaround service time itself not independently confirmed. 🟧
- **Services:** Standard international-gateway services assumed (push-back, GPU, potable water/lav, catering, cabin clean) — none individually confirmed for MUHA. 🟧
- **Turnaround risk items:** Single-runway-only operation means any ground delay compounds into a full-field bottleneck (no parallel-runway relief); Atlantic hurricane-season disruption (Jun–Nov) is the dominant seasonal turnaround risk.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for the K Global operation; general Havana travel seasonality (a winter high season and an Aug–Oct hurricane-season trough) is a reasonable planning assumption. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Apron 2 is described as a charter/cargo-oriented apron in a VATSIM operational cross-check; K Global belly-cargo uplift plans not confirmed. 🟧
- **Connection banks:** As a destination/alternate-tier field (not a base), MUHA does not anchor a K Global connection bank — inbound/outbound timing follows the network route register.

---

## 7. Fuel

- **Supplier / into-plane:** A tier-4 aggregator lists three named into-plane providers at MUHA; none individually confirmed as contracted for our operation. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not established from reachable sources — pull live at planning. See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration at this sea-level tropical field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** **Yes** — confirmed international Port of Entry.
- **CBP-equivalent / immigration hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** None identified; standard sovereign-entry process expected for arriving crew/pax. Real-world overflight/entry-permit administration for the Habana FIR is a separate, non-trivial administrative layer — see [Briefing §5](index.md). 🟧
- **Late/overnight/diversion caveat:** No curfew identified, but off-peak/overnight desk-hours coverage is unconfirmed. 🟧 One tier-4 source's "customs available" field also reads negatively despite the same source confirming Port-of-Entry status — a data inconsistency, not a change in PoE status, pending clarification.

---

## 9. De-icing provisioning & season

- **Availability:** **NIL** — tropical field at 210 ft elevation, no de-icing requirement. 🟩
- **Season:** N/A.
- **Provisioning:** N/A.
- **Commercial impact:** None.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Atlantic **hurricane season (Jun–Nov, peak Aug–Oct)** — the field's single-runway configuration means any weather-driven closure removes all capacity at once, with no parallel or crosswind runway to fall back on. 🟥
- **Ground-delay / flow-program exposure:** Not confirmed; no ATFM/flow-program regime identified for MUHA specifically. 🟧
- **On-time reliability picture:** Hurricane season is the standout seasonal risk window; no other reliability driver confirmed in reachable sources. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not published / verify. 🟧
- **Curfew infringement consequence:** N/A — no curfew identified in reachable sources.
- **Scheduling guardrails:** Build hurricane-season schedule/alternate contingency (see [Briefing §16](index.md)) rather than a curfew-driven buffer; hold a live alternate at **MKJS** or **TJSJ** through the Jun–Nov window.

---

## Open items (🟧 — confirm against AIP / operator data)

- Confirmed handling agent, contracted fuel supplier, and turnaround service-time detail for our operation.
- Terminal/gate assignment for our operation (assumed Terminal 3, not independently confirmed).
- Customs/immigration desk hours and the "customs available" data inconsistency noted in §8.
- Slot/curfew regime confirmation (none identified, not independently ruled out).
- Day-of-week/seasonal demand pattern and belly-cargo capacity specific to the K Global operation.
- Primary AIP Cuba (IACC) AD 2 MUHA package was not reachable this build — see [Briefing §18](index.md) for the full list of unverified figures.

> **Live data — pull at planning:** fuel price, current demand/load, stand allocation, tropical-cyclone/TFR status for the Habana FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Instituto de Aeronáutica Civil de Cuba (IACC)** — https://www.iacc.gob.cu/ (retrieved 2026-07-26). *Primary AIP authority; AD 2 MUHA package not reachable via direct fetch this build.*
- VATCAR (VATSIM Caribbean Division) — Havana FIR, "José Martí Int'l Airport (MUHA) Pilot Briefing," v1.1, 2025-02-28 — https://havana.vatcar.net/wp-content/uploads/2025/02/MUHA-Pilot-Briefing.pdf (retrieved 2026-07-26). *Network-sim SOP, not regulatory — apron/terminal/stand cross-check.*
- SkyVector — https://skyvector.com/airport/MUHA/La-Habana-Jose-Marti-International-Airport (retrieved 2026-07-26). *Fuel-provider names.*
- Universal Weather and Aviation — https://www.universalweather.com/airports/MUHA-HAV-JOSE-MARTI-INTERNATIONAL-AIRPORT-HAVANA-LA-HABANA-CUBA/ (retrieved 2026-07-26). *Port-of-Entry status, catering reference.*
- See [MUHA — Briefing](index.md) for the full source list, including real-world overflight/entry-permit corroboration.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
