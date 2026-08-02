# WMKK — Kuala Lumpur International (KLIA) · Dispatch Page

**WMKK / KUL** · Sepang, Selangor, Malaysia · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Malaysia (CAAM)-derived, Asia network build

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [WMKK Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / origin** (non-base) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal 1** — Main Terminal Building, Contact Pier (gates A/B domestic, G/H international) and Satellite Terminal A (gates C) 🟧 |
| Widebody stands available | Concentrated in the Contact Pier and Satellite Terminal A; exact count not confirmed 🟧 |
| Slot regime | None identified in reachable sources — treated as uncoordinated 🟧 |
| Curfew | **None — H24 operation** 🟩 |
| Primary handling agent | Not confirmed — handling by prior arrangement per AIP 🟧 |
| Fuel supplier(s) | PETRONAS / SHELL / PETRON (Jet A-1, AVGAS) |
| Customs / PoE for pax | **Yes** — H24 🟩 |
| De-icing | **Not available / not required** — equatorial field |

---

## 2. Terminals & concourses

- **Terminal layout:** KLIA comprises two main terminal complexes, both rebranded in 2023: **Terminal 1** (formerly "KLIA") — the Main Terminal Building (MTB), an attached Contact Pier, and a separate Satellite Terminal A connected by Aerotrain (or bus) — and **Terminal 2** (formerly klia2) — a purpose-built low-cost-carrier terminal with five boarding piers (J, K, L, P, Q) linked to the main building via skybridge. Terminal 1 serves full-service international/domestic carriers; Terminal 2 serves low-cost carriers.
- **Our operation uses:** **Terminal 1** — the Contact Pier (gates prefixed **G/H** for international departures, **A/B** for domestic) and **Satellite Terminal A** (gates prefixed **C**, ~27 gates), which historically carries the bulk of scheduled international widebody traffic. 🟧 Confirm current gate assignment with handling.
- **International arrivals / CBP-equivalent hall:** International arrivals clear passport control at Terminal 1; the Satellite Terminal A is connected to the Main Terminal Building by the **Aerotrain** (3-minute transit, ~270 pax capacity, fully repaired and back in service since 1 July 2025 after a two-year maintenance outage) or by bus — build connection time accordingly if the Aerotrain is degraded.
- **Notes:** 🟧 A proposal for a seamless airside connection between Terminal 1 and Terminal 2 (to ease inter-terminal transfers) was under study as of late 2025/2026 but is not yet implemented — confirm current inter-terminal transfer process before planning a same-terminal-group connection.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Terminal 1's **Contact Pier** (international gates G/H) and **Satellite Terminal A** (gates C) are the expected widebody clusters for a scheduled full-service operation. 🟧 Exact Code E/F gate list not confirmed.
- **Stands NOT usable by our types:** Terminal 2 (klia2) piers J/K/L/P/Q are optimised for the low-cost-carrier narrowbody model — not the expected stand area for our scheduled widebody service.
- **Remote / hardstand positions:** Terminal 1's original Phase One build included 20 remote parking bays (80 aircraft parking positions) alongside 60 contact piers; Terminal 2 adds 10 remote stands. Remote/hardstand use for a scheduled widebody international arrival is atypical — confirm with handling if a contact gate is unavailable. 🟧
- **Contact vs remote for our arrivals:** Expect a contact widebody gate at Terminal 1 for a scheduled international turn.
- **Ground-movement stand caveats:** **TWY U5 and U6 carry heavy-vehicle crossing traffic** (AIP-noted) — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None identified in reachable sources — treated as **uncoordinated / Level 1** pending confirmation. 🟧
- **Curfew / night restriction:** **None found** — ATS, AD administration, customs, security and fuelling are all confirmed **H24** with no published curfew or night-noise movement cap. 🟩 This is a materially simpler scheduling picture than a curfew-bound hub — no hard last-rotation cutoff to protect.
- **CTOT / flow control:** Not confirmed in reachable sources; treat as standard ATC clearance-delivery sequencing (5 minutes before engine start via Lumpur Delivery) rather than a formal ATFM/CTOT program. 🟧
- **Commercial impact:** Absence of a curfew removes the diversion-risk/last-rotation-buffer planning burden seen at curfew-bound fields; the main schedule-integrity driver here is convective-weather disruption risk (§10) rather than a regulatory night restriction.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources; AIP records handling services as available **H24 by prior arrangement with the aerodrome administration**. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 16 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back (ATC-authorised, sequenced with apron traffic), GPU/PCA, potable water/lav, catering and cabin services expected at a Terminal 1 international widebody stand.
- **Turnaround risk items:** Gate availability at Satellite Terminal A during peak international banks, Aerotrain service continuity (recently restored after a two-year outage), and possible convective-weather ground stops are the principal turnaround-risk drivers.

---

## 6. Load factors & seasonality

- **Demand peaks:** KLIA is a major Asian gateway and AirAsia low-cost megahub (per OAG Megahubs rankings); K Global's demand pattern is set by the network schedule rather than by third-party data. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for K Global's WMKK service specifically — treat as standard Asian-gateway business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** KLIA has substantial dedicated cargo infrastructure (cargo terminals, stacker/pallet systems, an animal-quarantine/"animal hotel" facility); confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not independently sourced for this field — cross-ref the route register for inbound/outbound wave structure.

---

## 7. Fuel

- **Supplier / into-plane:** **PETRONAS, SHELL, PETRON** refuelling, all confirmed **H24**; hydrant refuelling facilities in place. `[AIP Malaysia, AD 2 WMKK 2.3/2.4]` 🟩
- **Uplift availability & hours:** H24, confirmed. Jet A-1 and AVGAS both available.
- **Price / tankering angle:** Not independently sourced; assess price differentials to/from Asian network fields per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration at this equatorial field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Terminal 1 international arrivals hall.
- **CBP-equivalent / immigration hours:** **H24**, confirmed `[AIP Malaysia, AD 2 WMKK 2.3]`. 🟩
- **Pre-clearance / visa-transit notes:** Standard Malaysian entry per nationality; no pre-clearance programme confirmed at WMKK.
- **Late/overnight/diversion caveat:** With no curfew and H24 customs/immigration confirmed, WMKK carries materially lower late-arrival/diversion risk than a curfew-bound or desk-hours-limited field. 🟩

---

## 9. De-icing provisioning & season

- **Availability:** **Not available — not required.** AIP explicitly records de-icing as "Not available"; the equatorial climate carries no icing season. `[AIP Malaysia, AD 2 WMKK 2.3/2.4]` 🟩
- **Season:** N/A.
- **Provisioning:** N/A.
- **Commercial impact:** None — no de-icing-related delay exposure at this field.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Convective weather** — near-daily thunderstorm/heavy-rain activity, intensifying during monsoon-transition periods, is the field's primary reliability driver; periodic **transboundary haze** can independently suppress visibility.
- **Ground-delay / flow-program exposure:** Not independently sourced; expect convective-cell-driven holding/sequencing delays as the main exposure rather than a formal ATFM ground-delay program. 🟧
- **On-time reliability picture:** Afternoon/evening convective build-up and haze episodes (seasonal, dry/El Niño years) carry the highest schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** No noise-abatement procedure or noise-charge regime identified in reachable sources (AIP AD 2.21 records "NIL" for noise abatement procedures). 🟩
- **Curfew infringement consequence:** N/A — no curfew found.
- **Scheduling guardrails:** With no curfew constraint, the principal scheduling guardrail at WMKK is a **weather buffer** for convective-cell disruption rather than a last-rotation/noise-charge consideration.

---

## Open items (🟧 — confirm against AIP / operator data)

- Named ground handler(s) contracted for our operation and confirmed minimum turnaround time.
- Exact widebody gate/stand list at Terminal 1 Contact Pier / Satellite Terminal A for a scheduled full-service operation.
- Slot-coordination level (treated as uncoordinated pending confirmation).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Current status of the proposed Terminal 1–Terminal 2 airside connection.
- Fuel price/tankering signal relative to neighbouring Asia network fields.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any), current ATFM/ground-delay program, demand/load, stand allocation, current haze/visibility advisory. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Malaysia (CAAM), AD 2 WMKK** — https://aip.caam.gov.my/aip/eAIP/2025-03-25/html/eAIP/WM-AD-2.WMKK-en-MS.html (retrieved 2026-07-26). *Hours, fuel suppliers, RFF, handling.*
- **AIP Malaysia (CAAM), AD 2 WMKK PDF** (1999–2011 cycle) — https://aip.caam.gov.my/aip%20pdf/AD/AD2/WMKK/WMKK-KL%20InternationalSepang%20Airpor.pdf (retrieved 2026-07-26). *Operational hours, handling services, local traffic regulations.*
- Wikipedia — "Operations and infrastructure of Kuala Lumpur International Airport" — https://en.wikipedia.org/wiki/Operations_and_infrastructure_of_Kuala_Lumpur_International_Airport (retrieved 2026-07-26). *Terminal/pier structure, Aerotrain status, cargo facilities.*
- Wikipedia — "Kuala Lumpur International Airport" — https://en.wikipedia.org/wiki/Kuala_Lumpur_International_Airport (retrieved 2026-07-26). *Megahub/traffic corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
