# LPPT — Humberto Delgado · Dispatch Page

**LPPT / LIS** · Lisbon, Portugal · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Portugal-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LPPT Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate** — not a K Global base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal 1** (main international building, 47 gates/17 jet-bridges) is the expected assignment for scheduled international service; **Terminal 2** is a smaller building used exclusively by low-cost carriers 🟧 tier-4 sourced, not AIP-confirmed |
| Widebody stands available | Not tabulated by code letter in the reachable AIP text; wingspan-restricted stand notes exist per apron (see Briefing §13) 🟧 |
| Slot regime | Reported capacity-constrained/slot-scarce; exact IATA coordination level not confirmed in reachable AIP text 🟧 |
| Curfew | **Hard 00:00–06:00**, noise-class-tiered exceptions 🟥 |
| Primary handling agent | Not confirmed for our operation 🟧 |
| Fuel supplier(s) | Jet A-1, H24 fuelling confirmed; specific supplier not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — H24 confirmed |
| De-icing | **Not available** — consistent with the mild Atlantic-coastal climate |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** is the main passenger building with a joint departures area of ~47 gates (~17 jet-bridge-equipped, ~21 serving non-Schengen destinations); **Terminal 2** is a smaller, newer building on the airport's southern perimeter used exclusively by low-cost carriers. 🟧 Sourced to tier-4 travel-guide material, not the AD 2 chapter — confirm current gate/terminal split before finalising a stand plan.
- **Our operation uses:** Expected assignment is Terminal 1 for scheduled international service; confirm with handling. 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear passport control in Terminal 1; customs/immigration confirmed H24 in the AIP.
- **Notes:** 🟧 Terminal/gate structure is tier-4 sourced only in this pass — treat as provisional pending a primary-source cross-check.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not tabulated by code letter in the reachable AIP text. Individual apron notes show wingspan accommodation up to >65 m (Apron 50, via TWY M2) and >58 m with reduced clearance (Apron 14) — consistent with some Code E/F capability existing, but no single summary table found. 🟧
- **Stands NOT usable by our types:** "Some areas not currently available for Code F movements" is noted for towing procedures — specific stands not itemised. 🟧
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Expect a contact gate for a scheduled international turn at a hub-scale field; not independently confirmed.
- **Ground-movement stand caveats:** See [Briefing §13](index.md) — areas not visible from the Tower include Apron 10/11 stands 104–108/114–117 and various positions across Aprons 20/30/40/41/42/50.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** LPPT is widely and publicly reported as capacity-constrained with real slot scarcity (including business-aviation operators reportedly shut out of slots in 2025); the exact IATA coordination level/coordinator was not found in the reachable AD 2 text. 🟧
- **Curfew / night restriction:** **Landing/takeoff forbidden by law 00:00–06:00** except force majeure; night movement cap **26/day, 91/week**. Noise-class-tiered exceptions: Level 4 aircraft cannot take off at night on a scheduled service; Levels 8/16 cannot be scheduled for the night period at all; Level 2 may depart 00:00–00:30 or from 05:00 onward; Levels 0/0.5/1 unrestricted. 🟥
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation is a reasonable expectation for a capacity-constrained EU hub; not independently LPPT-sourced this pass. 🟧
- **Commercial impact:** The field's single-runway capacity ceiling (see Briefing §3.2) plus the hard curfew make **on-time performance into the last landing slot before curfew** and **schedule buffer against sequencing delay** the two biggest scheduling guardrails at this destination.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed for our operation in reachable public sources; H24 handling availability is confirmed generally. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 14 min / taxi-out 16 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times. The AIP's own turnaround-time guidance for ad hoc parking is **45 min (code A/B), 60 min (C/D), 90 min (code E)** — useful cross-reference for schedule padding.
- **Services:** Push-back, GPU/PCA, water/lav, catering and cabin services expected at a scheduled international stand.
- **Turnaround risk items:** Single-runway sequencing delay is the dominant turnaround risk driver at this field — a late inbound compresses directly into the outbound slot with no parallel-runway buffer.

---

## 6. Load factors & seasonality

- **Demand peaks:** Lisbon is a year-round leisure and business destination with strong summer/shoulder-season demand; the field's passenger forecast (~39M by 2030) reflects sustained growth pressure on a fixed single-runway capacity.
- **Day-of-week / seasonal pattern:** Not independently sourced for LPPT specifically — treat as a standard Iberian-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not independently confirmed for K Global belly-cargo uplift at this field. 🟧
- **Connection banks:** Not applicable — LPPT is a destination/alternate, not a K Global connecting hub.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** **H24**, confirmed in the AIP.
- **Price / tankering angle:** Assess price differentials against the home-base tankering reference per leg. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LPPT itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Terminal 1 international arrivals hall.
- **CBP-equivalent / immigration hours:** **H24**, confirmed in the AIP.
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at LPPT.
- **Late/overnight/diversion caveat:** The **hard night curfew 00:00–06:00** is the dominant late/overnight constraint rather than immigration-desk staffing — a schedule slip toward the curfew window is the operative risk, not desk hours. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Not available** at LPPT.
- **Season:** Not applicable — mild Atlantic-coastal climate, de-icing is not an operational requirement here.
- **Provisioning:** N/A.
- **Commercial impact:** None — de-icing is not a scheduling factor at this destination. Occasional Saharan-dust visibility reduction is a nuisance-level factor only.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Single-runway capacity constraint** — with no second runway and a field reportedly operating at/above design capacity, sequencing delay is the field's structural reliability risk rather than a seasonal weather factor. Autumn–winter windshear events (see Briefing §3.4) compound this given the field's lack of a crosswind runway.
- **Ground-delay / flow-program exposure:** Reasonable expectation of EUROCONTROL flow management in peak/adverse conditions given the reported capacity ceiling. 🟧
- **On-time reliability picture:** Treat schedule buffer as essential at this field — both the structural single-runway constraint and the hard curfew reward conservative planning. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Noise-class-tiered restrictions (§4) function as a direct scheduling constraint rather than a simple charge — Level 8/16 aircraft cannot be scheduled for the night period at all. Exact noise-charge tariff not confirmed in reachable sources. 🟧
- **Curfew infringement consequence:** The night ban 00:00–06:00 is a **hard movement restriction** by law, not merely a charge — a prohibited take-off/landing outside the exception criteria is disallowed, not simply penalised.
- **Scheduling guardrails:** Build buffer into the last rotation so an operational delay does not push a landing or departure into the curfew window; treat single-runway sequencing pressure (§10) as the primary driver of that risk at this field, ahead of weather in most seasons.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/gate assignment for our operation (T1 vs. T2 split is tier-4 sourced only).
- Widebody/Code E-F stand map and push-back policy.
- Handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider.
- Exact IATA slot-coordination level/coordinator.
- EUROCONTROL CTOT/ATFM specifics for LPPT (general practice assumed, not independently sourced).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Portugal (NAV Portugal eAIP), AD 2 LPPT**, valid from 11 Jun 2026 — https://ais.nav.pt/wp-content/uploads/AIS_Files/eAIP_Current/eAIP_Online/eAIP/html/eAIP/LP-AD-2.LPPT-en-PT.html (retrieved 2026-07-26). *Hours, curfew/noise regime, customs, fuelling.*
- Lisbon Airport terminal guide (tier-4) — https://lisbon-lis-international-airport.com/lisbon-airport-terminals (retrieved 2026-07-26). *Terminal 1/2 split — travel-guide source, not AIP-grade.*
- Aviation International News — "Slot Shortfall Shuts Business Jets Out of Portugal Lisbon Airport," 2025-11-10 — https://www.ainonline.com/aviation-news/business-aviation/2025-11-10/slot-shortfall-shuts-business-jets-out-lisbon-airport (retrieved 2026-07-26). *Slot-scarcity corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Portugal (NAV); K Global fields from live VAMSYS; 4-page pack. |
