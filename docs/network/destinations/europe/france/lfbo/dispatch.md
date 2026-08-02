# LFBO — Toulouse-Blagnac · Dispatch Page

**LFBO / TLS** · Blagnac (Toulouse), Haute-Garonne, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFBO Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** — Category R `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not individually confirmed — standard commercial apron/terminal 🟧 |
| Widebody stands available | Not individually confirmed; Code F traffic (A380/An-124/B747-8/B777-300) is confined to a dedicated stand (D51) and GMC-04-specified taxiways given the field's Airbus manufacturing role 🟧 |
| Slot regime | Not confirmed in reachable extract — treat as unregulated pending verification 🟧 |
| Curfew | 🟥 **Hard noise curfew 2200–0600** (Chapter/margin-graduated) plus a **night RWY-use rule funnelling RWY-14-config traffic to 14R only** |
| Primary handling agent | Not confirmed in reachable extract — verify locally 🟧 |
| Fuel supplier(s) | Not confirmed in reachable extract — verify locally 🟧 |
| Customs / PoE for pax | **Yes** — H24 |
| De-icing | Not confirmed in reachable extract — verify locally 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Not individually detailed in the reachable extract — LFBO combines commercial passenger terminal facilities with a significant **Airbus manufacturing/flight-test operation** sharing the same airfield. 🟧
- **Our operation uses:** Standard commercial apron/terminal — not individually confirmed for K Global. 🟧
- **International arrivals / CBP-equivalent hall:** H24 customs/immigration; hall/terminal detail not confirmed. 🟧
- **Notes:** Confirm current gate/stand assignment with handling before finalising a stand plan, given the field's mixed commercial/manufacturer traffic environment.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Code F aircraft (A380/An-124/B747-8/B777-300, wingspan > 65 m) park at dedicated stand **D51**; any other parking for that class requires coordination with the airport operator. K Global Category R stand allocation is not individually confirmed. 🟧
- **Stands NOT usable by our types:** Not individually confirmed — TWY P101 is Airbus-manufacturer (A380) activity only and is not a general commercial routing.
- **Remote / hardstand positions:** **Push-and-Hold** remote-stand procedure available at A20/B20, A22/B22 or Romeo for CTOT-hold management — requires 72 h prior coordination with the operator (superviseur-APOC@toulouse.aeroport.fr); not applicable at night without a marshaller, in LVP, or when parking is saturated.
- **Contact vs remote for our arrivals:** Not confirmed — expect standard commercial-apron allocation for a Category R type.
- **Ground-movement stand caveats:** Under LVP, RWY 14R must be vacated via TWY M2 only; TWY M4 requires specific ATC clearance — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in the reachable extract — treat as unregulated pending verification. 🟧
- **Curfew / night restriction:** 🟥 **No non-Chapter 3/4/14-compliant turbofan aircraft may operate at LFBO at all.** Additionally, no non-compliant aircraft may land or leave its stand for take-off **2200–0600**; a Chapter-3 aircraft with cumulative margin < 10 EPNdB is barred **2200–0000**; < 13 EPNdB is barred **0000–0600**. A separate **night RWY-use rule** confines RWY-14-configuration take-offs/landings to **RWY 14R only** between 2200–0600 (exact taxiway-entry point varies by time window). No stand-leave for take-off before 0600 for a flight scheduled ≥ 0600.
- **CTOT / flow control:** No slot-coordination level confirmed — EUROCONTROL Network Manager ATFM/CTOT applies as general practice. A dedicated **Push-and-Hold** procedure exists at LFBO specifically to manage CTOT holds via coordinated remote stands.
- **Commercial impact:** The Chapter/margin-graduated noise regime is the field's dominant scheduling constraint — an aircraft's ICAO noise chapter and cumulative margin, not just the schedule time, determines whether a given rotation is even permitted at LFBO between 2200–0600. Build this into fleet-assignment planning for any LFBO rotation with a late/early-hours block time.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not individually confirmed in the reachable extract — verify locally. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-26]`.
- **Services:** Standard commercial ground services assumed; specifics not confirmed in the reachable extract. 🟧
- **Turnaround risk items:** The **Push-and-Hold** procedure (72 h prior coordination required) is the main tool for absorbing a CTOT hold without blocking a contact stand; night-hours RWY-14R-only funnelling can extend ground time if the assigned config is 14 at the edge of the curfew window.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for LFBO specifically — treat as a major South-West France regional/business destination (Airbus-adjacent corporate travel is a plausible demand driver) pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Not confirmed for K Global's operation at this field. 🟧
- **Connection banks:** Not a K Global hub — connection timing is set by the network schedule; cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in the reachable extract — verify locally before planning an uplift. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not independently sourced this pass — assess price differential vs departure/base field per leg once supplier data is confirmed. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Not confirmed — no cold-soak/fuel-freeze consideration specific to LFBO identified.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes.
- **CBP-equivalent / immigration hours:** H24.
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme.
- **Late/overnight/diversion caveat:** The **hard noise curfew and night RWY-use rule (§4)** are the dominant late/overnight constraints at this field, not immigration-desk staffing — an eligible aircraft can still be restricted to RWY 14R and subject to Chapter/margin checks even where customs itself is H24. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed in the reachable extract — verify locally. 🟧
- **Season:** Not confirmed — South-West France winter de-icing season assumed on general climatology grounds, not independently LFBO-sourced. 🟧
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Pending confirmation of de-icing availability/season, build a conservative winter buffer for this field. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** The **noise-curfew/night-RWY-use regime** is the most distinctive schedule-risk factor at LFBO — any rotation with a block time approaching 2200 or 0600 needs explicit fleet-eligibility and runway-availability checks.
- **Ground-delay / flow-program exposure:** Not independently confirmed — the field's mixed commercial/Airbus-test-flight traffic could add ground-sequencing variability, but no specific data was found. 🟧
- **On-time reliability picture:** No LFBO-specific reliability data found this pass. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed beyond the ACNUSA infringement-fine framework (up to €40,000 for a legal entity) tied to the Chapter/margin noise rules. 🟧
- **Curfew infringement consequence:** Operating a non-compliant or under-margin turbofan aircraft in a restricted window is a **regulatory violation**, not merely a charged event — treat the 2200–0600 Chapter/margin rules as a hard operational gate, not a fee-based buffer.
- **Scheduling guardrails:** Confirm every LFBO rotation's aircraft type against the current ICAO Chapter/cumulative-margin status before scheduling any operation with a block time inside or adjacent to 2200–0600; build schedule buffer so a delay does not push an otherwise-compliant rotation into a restricted window on the wrong side of its margin threshold.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/stand assignment for K Global operations.
- Slot coordination level (if any).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel supplier(s), hours and price/tankering differential vs base.
- De-icing availability/season.
- Day-of-week/seasonal load pattern and on-time reliability picture.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, Push-and-Hold stand availability. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP, AD 2 LFBO**, mirrored via DIRCAM MIAC1, cycles AMDT 06/25 / eff. 12 JUN 2025 / eff. 28 DEC 2023 — https://www.dircam.dsae.defense.gouv.fr/images/Stories/Doc/MIAC1/miac1_toulouse_blagnac_lfbo.pdf (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
