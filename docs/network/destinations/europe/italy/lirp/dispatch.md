# LIRP — San Giusto · Dispatch Page

**LIRP / PSA** · Pisa, Tuscany, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, K Global network build

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LIRP Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / non-base network field** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single civil terminal building — reported 16 gates (numbered 01–11 and 21–25), one jetbridge-equipped (Gate 23) 🟧 |
| Widebody stands available | Not confirmed — terminal gate count/jetbridge scarcity suggests a primarily narrowbody-sized field; confirm before planning a widebody rotation 🟧 |
| Slot regime | **None reported** — not independently confirmed 🟧 |
| Curfew | 🟧 **None found (24 h civil operation reported)**; a night one-way noise-routing pattern (23:00–06:00) applies — see §4 |
| Primary handling agent | Toscana Aeroporti S.p.A. plus third-party handlers — specific handler for our operation not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1, truck/bowser delivery to stand reported — not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — reported Schengen PoE with full immigration for non-Schengen arrivals; exact hours not confirmed 🟧 |
| De-icing | Not confirmed — lower seasonal likelihood at this Mediterranean coastal field 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal, reported with **16 gates (numbered 01–11 and 21–25)**; Gates 1–11 on the ground floor handle Schengen flights with bus-boarding to the apron, and Gates 21–25 on the upper level handle non-Schengen flights, with walk-boarding, bus-boarding and jetway boarding (Gate 23 only) all in use. 🟧
- **Our operation uses:** Not confirmed this pass — the field's gate/jetbridge profile suggests it is sized primarily for narrowbody, short-haul European traffic; widebody suitability for K Global types is not confirmed. 🟧
- **International arrivals / CBP-equivalent hall:** Non-Schengen arrivals reported to clear passport control via the upper-level Gates 21–25 area; not independently AIP-confirmed. 🟧
- **Notes:** 🟧 Confirm current gate/stand assignment and widebody suitability with handling before finalising a stand plan — this is a materially smaller field than the network's major hubs.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed in reachable sources — the field's civil terminal (16 gates, one jetbridge) is not evidently sized for large-scale widebody contact operations; confirm with handling before planning a Code E/F rotation. 🟧
- **Stands NOT usable by our types:** Narrowbody-oriented gates are not sized for Code E/F — do not plan a widebody onto them without handling confirmation.
- **Remote / hardstand positions:** Bus-boarding is reported in routine use even for scheduled Schengen traffic, implying meaningful remote/hardstand and apron-bus capacity at this field. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — request stand-type confirmation from handling at planning; a remote/hardstand position is plausible given the field's profile.
- **Ground-movement stand caveats:** **Taxiways A–F and P are reported available up to ICAO Code E; Taxiway O is reported limited to Code C** (network-sim data) — confirm Code E suitability before routing a widebody via Taxiway O. See [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None reported for this field — not independently confirmed. 🟧
- **Curfew / night restriction:** No hard curfew found; network-sim data reports a **23:00–06:00 one-way noise-routing pattern** — **RWY 21L available for take-off, RWY 03R available for landing, tailwind not exceeding 10 kt.** A separate community source describes a broader **voluntary noise-abatement window 22:00–06:00**. Neither is independently AIP-confirmed. 🟧
- **CTOT / flow control:** Not confirmed this pass — no slot-coordination or CTOT regime independently sourced for this field. 🟧
- **Commercial impact:** The field's **joint civil/military status** (§Briefing §3.2) and **PPR requirement** (reported) are the two commercial-planning items most likely to affect schedulable windows here, more than any slot/CTOT regime.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Toscana Aeroporti S.p.A. operates the civil side of the field; the specific ground handler(s) contracted for our operation are not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not confirmed — **VAMSYS record carries no taxi-time value for this field**, unlike most of the network. Build the gate turn conservatively pending confirmation. 🟧
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a scheduled international stand; not individually confirmed at this field.
- **Turnaround risk items:** Joint civil/military traffic sharing the field, a modest gate count, and any PPR/coordination requirement are the main turnaround risk items identified this pass.

---

## 6. Load factors & seasonality

- **Demand peaks:** Tuscany is a strong seasonal leisure destination (spring–autumn tourist peak, focus-city-level low-cost-carrier activity reported historically) — general regional pattern, not independently K-Global-sourced this pass. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for LIRP specifically. 🟧
- **Cargo / belly capacity:** Not confirmed this pass. 🟧
- **Connection banks:** Not applicable — LIRP is not a K Global base.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 reported via truck/bowser delivery to stand; specific supplier not confirmed. 🟧
- **Uplift availability & hours:** Not confirmed — H24 status unclear at a field of this size. 🟧
- **Price / tankering angle:** Not sourced this pass — assess price differential to the home base at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LIRP itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — reported Schengen PoE with full immigration processing for non-Schengen arrivals (upper-level Gates 21–25 area).
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme reported.
- **Late/overnight/diversion caveat:** No hard curfew identified; confirm immigration desk staffing for a genuinely late/overnight movement at a field of this size. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed in reachable sources. 🟧
- **Season:** Mediterranean coastal Tuscan climate makes de-icing a materially lower-frequency consideration than at continental European fields. 🟧
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Likely low; see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for the network standard if a winter rotation is planned.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not independently benchmarked this pass; the joint civil/military environment and any restricted-area (LI R18 Altopascio) activity affecting RNP-Z RWY 21L are the most plausible structural factors. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed — no slot/CTOT regime independently sourced for this field. 🟧
- **On-time reliability picture:** Not independently sourced this pass. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources this pass. 🟧
- **Curfew infringement consequence:** No hard curfew identified; the operative night-hour constraint is the reported one-way routing pattern (§4), not a blanket movement ban.
- **Scheduling guardrails:** Build buffer around the night one-way-routing window (23:00–06:00) and confirm any PPR/coordination lead time required for this field before finalising a rotation.

---

## Open items (🟧 — confirm against AIP / operator data)

- **K Global VAMSYS category and taxi-time fields are unset for this field** — confirm intended values and populate VAMSYS.
- Widebody stand/gate suitability for K Global types — the civil terminal's gate/jetbridge profile suggests primarily narrowbody sizing.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- Slot/CTOT regime status (none currently sourced — confirm this is genuinely the case).
- PPR requirement, lead time and current contact procedure.
- Night one-way-routing figures (23:00–06:00) — sourced to network-sim/community data only, not AIP-confirmed.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if applicable), current ATFM/ground-delay program, demand/load, stand allocation, restricted-area LI R18 Altopascio status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- Wikipedia — "Pisa International Airport" — https://en.wikipedia.org/wiki/Pisa_International_Airport (retrieved 2026-07-26). *Terminal/gate layout, boarding-mode detail.*
- IVAO Italy — Quick Overview, Pisa San Giusto — https://quickoverview.ivao.it/aerodrome/show/LIRP (retrieved 2026-07-26). *Night one-way routing, taxiway code-letter restrictions — network-sim source, not regulatory.*
- Data Sky Center — LIRP — https://dataskycenter.com/airport/LIRP (retrieved 2026-07-26). *Community-sourced cross-check: fuel, PPR, fees; not authoritative.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
