# YPPH — Perth Intl · Dispatch Page

**YPPH / PER** · Perth, Western Australia, Australia · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Australia-derived, K Global build

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [YPPH Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / long-haul gateway** (remote west-coast anchor) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not individually confirmed; Terminal 1 area is adjacent to the new (under-construction) third runway 🟧 |
| Widebody stands available | Not individually itemised in reachable sources 🟧 |
| Slot regime | **IATA slot management** via the **Capacity Optimisation Group (COG)** |
| Curfew | **None** — one of only a handful of major Australian airports without one 🟩 |
| Primary handling agent | Not individually confirmed; GA/itinerant operators must appoint a handler 48 hr prior 🟧 |
| Fuel supplier(s) | **Air BP** (H24), **Viva Energy Aviation** (extended daily hours) |
| Customs / PoE for pax | **Yes**; exact desk hours not confirmed 🟧 |
| De-icing | Not confirmed — mild climate makes routine provisioning unlikely 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Perth Airport's terminal precinct is undergoing active development — a **third runway (03R/21L, 3,000 m, parallel to the existing 03/21)** began construction in December 2025, sited **between Terminal 1 and the existing main runway**, indicating an active capital-works period around the international precinct. 🟧
- **Our operation uses:** Not individually confirmed for K Global's specific gate/terminal assignment. 🟧
- **International arrivals / CBP-equivalent hall:** International PoE confirmed on-field; specific hall/terminal for our operation not confirmed.
- **Notes:** 🟧 Given the active third-runway construction adjacent to Terminal 1, confirm current terminal/apron layout and any temporary handling constraints before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not individually itemised in reachable sources. 🟧
- **Stands NOT usable by our types:** GA taxilane restricted to 19,000 kg/24 m max wingspan and below; several Code C/D-only taxiway and apron segments are published (TWY W west of TWY R and W Lane restricted to Code C and below except A321/E-190 exclusions; TWY H3/H4, Hotel Lane, 500 Lane, Link 1/2 restricted to Code C and below except A321).
- **Remote / hardstand positions:** Not individually confirmed; Bays 901–911 and 915 are noted with floodlight-pole obstacle infringements of the RWY 06/24 transitional surface (max 6.4 m) — a ground-infrastructure item, not an operational restriction on our types.
- **Contact vs remote for our arrivals:** Not independently confirmed; expect a contact widebody gate for a scheduled international arrival.
- **Ground-movement stand caveats:** **A380 aircraft** may use TWY A, A9, A11 and D (subject to Aerodrome Operator approval) if TWY C is unserviceable — TWY A6/A7/A9 must be vacant for A380 taxiing on TWY A. See [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA slot management** — all airline/aircraft operators must obtain a slot from the **Capacity Optimisation Group (COG)**. 🟧
- **Curfew / night restriction:** **None.** Perth is one of only a handful of major Australian airports without a curfew (Sydney, Adelaide, Essendon and Gold Coast are the curfewed set) — a genuine commercial advantage for scheduling a long-haul gateway relative to a curfewed field. 🟩
- **CTOT / flow control:** **Ground Delay Program Arrival (GDP-A)** runs on demand, promulgated by NOTAM, 0030–1400 UTC Mon–Fri, applicable to all fixed-wing non-priority flights arriving at Perth from Australian domestic origins; flights must obtain both a COG IATA slot **and** a GDP-A Calculated Off-Blocks Time (COBT). **Airport Collaborative Decision Making (A-CDM)** runs continuously H24 with a mandatory Target Off-Blocks Time (TOBT).
- **Commercial impact:** The absence of a curfew removes the single biggest scheduling constraint seen at YSSY — the operative guardrails here are slot/COBT compliance and peak-period holding exposure (up to 20 min, Mon–Fri) rather than a hard night-time cutoff.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** GA/itinerant operators must appoint a ground handling agent at least 48 hours prior to operating at Perth; **Revesco Aviation** (FBO, H24, VIP lounge, civil/military, customs/AQIS with PN) and **Airflite** (FBO, H24, private aircraft) are confirmed on-field. Specific scheduled-service handler not confirmed. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 15 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, fuel, and standard widebody ground services expected; power-out operations are noted as limited for general aviation (not confirmed as applicable to scheduled widebody service).
- **Turnaround risk items:** Active third-runway construction adjacent to Terminal 1 (§2), peak-period holding (up to 20 min Mon–Fri), and A-CDM/COBT compliance are the principal turnaround-risk items at this field.

---

## 6. Load factors & seasonality

- **Demand peaks:** As the remote west-coast gateway, YPPH anchors long-haul east-coast and international demand; connection banks and route mix are set by the network schedule.
- **Day-of-week / seasonal pattern:** Mon–Fri peak holding windows (0100–0500, 0500–0900, 0900–1300 UTC) are AIP-published, implying structured weekday demand peaks; weekend pattern not independently confirmed. 🟧
- **Cargo / belly capacity:** Not independently sourced for YPPH specifically. 🟧
- **Connection banks:** As a destination/gateway rather than a base, connection-bank timing here follows the network schedule inbound/outbound rather than setting it.

---

## 7. Fuel

- **Supplier / into-plane:** **Air BP** (H24) and **Viva Energy Aviation** (0400–0100 local daily) confirmed; both offer Jet A-1 (Air BP also F34/Avgas).
- **Uplift availability & hours:** Air BP confirmed H24; Viva Energy confirmed extended daily hours (0400–0100 local).
- **Price / tankering angle:** As a remote long-haul gateway, assess tankering economics carefully given the field's isolation from other network fuel points — pull live pricing at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to YPPH itself — relevant to the long trans-Pacific/trans-Indian-Ocean outbound leg profile, not the uplift here.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — confirmed international PoE.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Australian entry per nationality/visa; no pre-clearance programme found for YPPH.
- **Late/overnight/diversion caveat:** With **no curfew**, late/overnight arrivals are not subject to a hard movement restriction at this field — the practical constraint is customs/immigration desk staffing off-peak, which is not independently confirmed. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed in reachable sources; Perth's Mediterranean-type climate (mild winters, rarely at or below freezing) makes routine de-icing provisioning unlikely to be a significant factor. 🟧
- **Season:** Not applicable/not confirmed. 🟧
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Not expected to be material at this field; confirm before ruling out entirely. 🟧

---

## 10. Typical delays / reliability

- **Signature delay driver:** Peak-period terminal-area holding (up to 20 min, Mon–Fri 0100–0500/0900–1300 UTC; 10 min 0500–0900 UTC) is the principal AIP-documented delay driver; the field's isolation (long feeder sectors) can compound any upstream schedule slip.
- **Ground-delay / flow-program exposure:** **GDP-A** runs on demand for arrivals from Australian domestic origins, 0030–1400 UTC Mon–Fri.
- **On-time reliability picture:** Absent a curfew, YPPH's reliability profile is materially more forgiving than YSSY's; the active third-runway construction near Terminal 1 is a period-specific factor to monitor. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** No curfew and no per-movement noise-charge scheme found in reachable sources — Perth's lack of a curfew has been publicly debated but not implemented as of this build. 🟩
- **Curfew infringement consequence:** Not applicable — no curfew exists at YPPH.
- **Scheduling guardrails:** The absence of a curfew removes the single largest scheduling guardrail seen at YSSY; the operative guardrails here are slot/COBT compliance and peak-period holding exposure.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current widebody gate/stand assignment for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Customs/immigration desk hours.
- De-icing availability/procedure (likely not applicable; not independently confirmed).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- **Third-runway (03R/21L) construction impact** on terminal/apron operations and any temporary handling constraints during the build period.

> **Live data — pull at planning:** fuel price, slot/COBT file, current GDP-A/ground-delay status, demand/load, stand allocation, third-runway construction NOTAM status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Australia (Airservices Australia) — AD 2 YPPH, Aerodrome Facilities (FAC) chart**, effective 09 Jul 2026 — https://www.crc.id.au/xplane/charts/ERSA-2026-JUL-09/Perth%20(YPPH)%20FAC.pdf (retrieved 2026-07-26). *Slot/GDP-A/A-CDM regime, handling/FBO, fuel suppliers, ground-movement restrictions.*
- Wikipedia — "Perth Airport" — https://en.wikipedia.org/wiki/Perth_Airport (retrieved 2026-07-26). *Third-runway construction start December 2025.*
- Airservices Australia — "Airport curfews" — https://www.airservicesaustralia.com/about-us/about-our-operations/airport-curfews/ (retrieved 2026-07-26). *Confirms Perth as non-curfewed.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Australia (Airservices); K Global fields from live VAMSYS; 4-page pack. |
