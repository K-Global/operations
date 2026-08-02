# ELLX — Luxembourg-Findel · Dispatch Page

**ELLX / LUX** · Findel (Niederanven), near Luxembourg City, Luxembourg · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [ELLX Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / origin** — not a K Global base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single main passenger terminal complex plus a dedicated cargo apron; specific gate/pier assignment for our operation not confirmed 🟧 |
| Widebody stands available | Not individually confirmed in reachable sources; dedicated cargo apron (P7) and Business Aviation apron (P5) are the confirmed specialised aprons 🟧 |
| Slot regime | Not confirmed as IATA Level 2/3 in reachable sources 🟧 |
| Curfew | **2200–0500 local (2100–0400 UTC)**, named exemptions only — no confirmed blanket freight exemption 🟥 |
| Primary handling agent | Not individually confirmed; AIP states handling services H24 with a Business Aviation Centre for apron P5 🟧 |
| Fuel supplier(s) | Not individually named; AVGAS 100LL + Jet A1 confirmed available H24 🟧 |
| Customs / PoE for pax | **Yes** — H24 🟩 |
| De-icing | **Available** — on-stand only, H24, KFOR/NAFO fluids |

---

## 2. Terminals & concourses

- **Terminal layout:** Public reporting describes a main passenger terminal (opened 2008) handling the bulk of scheduled traffic, plus a smaller secondary terminal building (opened 2004) used for lower-capacity aircraft. 🟧 Exact current pier/gate naming not confirmed from a primary AIP source — the AIP's passenger-facilities section (AD 2.5) confirms hotel/restaurant/transport/medical/bank services at the terminal without detailing pier structure.
- **Our operation uses:** 🟧 Not confirmed — assign per handling/ground coordination on the day pending a confirmed gate map.
- **International arrivals / customs hall:** Customs and immigration are confirmed H24 (AIP AD 2.3); hall location/structure not detailed in reachable sources. 🟧
- **Notes:** 🟧 Confirm current terminal/pier assignment with handling before finalising a stand plan — no primary-source gate map is available.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not individually confirmed in reachable sources. The dedicated **cargo apron P7** (with its own cargo-handling facilities) is the confirmed location for scheduled freighter operations; the **Business Aviation apron P5** handles corporate/GA traffic on request via the Business Aviation Centre. 🟧
- **Stands NOT usable by our types:** Not confirmed — apron P1 East is reserved for air-ambulance/police use only; apron P1 West is restricted with default overflow to apron P2.
- **Remote / hardstand positions:** Apron **P2** functions as an overflow/aircraft-classification-line (ACL) reference point (elevation 1,233 ft); apron **P6** is designated for based aircraft. 🟧 Contact-vs-remote allocation for a scheduled K Global movement not confirmed.
- **Contact vs remote for our arrivals:** Not confirmed in reachable sources. 🟧
- **Ground-movement stand caveats:** Intersection take-off restrictions for WTC 'H' aircraft ≥136,000 kg (TWY F/G/H on RWY06; TWY C/F on RWY24) and the TWY B1 "green lane" vehicle corridor (requires Tower authorisation to cross) affect ground routing between stands and the runway system — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** 🟧 Not confirmed in reachable sources — no IATA Level 2/3 coordination status found; treat as unconfirmed rather than assumed uncoordinated.
- **Curfew / night restriction:** **Hard closure 2200–0500 local (2100–0400 UTC)** — named exemptions limited to government, SAR, humanitarian, hospital, distress and **delayed** scheduled flights. The field "should not be considered as a take-off, en route or destination alternate" during this window. Local/training flights carry a further, separate time window (Mon–Sat 0530–2100, Sun/Hol 0700–2100) that does not apply to scheduled commercial ops. 🟥
- **No confirmed blanket freight/cargo curfew exemption** — despite ELLX's major-cargo-gateway character, the reachable AIP text names no separate freight carve-out; verify directly with the operator/AIS before assuming any night-freight schedule can rely on an exemption. 🟥
- **CTOT / flow control:** Not confirmed in reachable sources; treat as subject to standard EUROCONTROL Network Manager ATFM/CTOT practice pending confirmation. 🟧
- **Commercial impact:** The curfew is the dominant scheduling constraint at this field — build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure into the 2200–0500 window without qualifying for a named exemption.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not individually confirmed; the AIP states handling services are available H24, with the **Business Aviation Centre** handling apron P5 traffic on request. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times for the assigned type.
- **Services:** Fuelling (AVGAS 100LL + Jet A1), security and de-icing are all confirmed H24; push-back/GPU/PCA/catering provision not individually confirmed. 🟧
- **Turnaround risk items:** Single-runway capacity constraint at a high-movement field, de-icing throughput in winter (on-stand only — no dedicated remote pad, so gate dwell time may extend), and the Code F 72-hour special-permission requirement for larger widebody freighter movements can each add unplanned turn time or lead time.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for ELLX specifically — treat as network-schedule-driven pending route-register confirmation. 🟧
- **Day-of-week / seasonal pattern:** Local/training-flight time windows (Mon–Sat vs Sun/Hol) hint at a standard weekday/weekend traffic-management distinction, but no day-of-week demand pattern for scheduled commercial traffic was independently sourced. 🟧
- **Cargo / belly capacity:** ELLX is publicly reported as **one of Europe's leading all-cargo/freight gateways by tonnage**, with a dedicated cargo apron (P7) and substantial scheduled widebody freighter traffic alongside its passenger operation. Confirm K Global belly-cargo or freighter uplift plans against payload and the field's Code F special-permission requirement at planning.
- **Connection banks:** Not applicable in the same sense as a hub — ELLX is a destination/origin field for K Global, not a network connection point. `[VAMSYS mirror 2026-07-26]`

---

## 7. Fuel

- **Supplier / into-plane:** Not individually named in reachable public sources; AVGAS 100LL and Jet A1 both confirmed available. 🟧
- **Uplift availability & hours:** **H24**, confirmed by the AIP. On-field tankage: 4 Jet A1 storage tanks (~6.9 million litres total) and 12 trucks (25,000–85,000 L each); delivery flow rates 1,200–4,000 L/min — ample capacity for widebody uplift.
- **Price / tankering angle:** Not independently sourced — assess price differential against the network's other stops per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A1; no cold-soak/fuel-freeze consideration specific to ELLX itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — customs and immigration confirmed **H24** by the AIP.
- **CBP-equivalent / immigration hours:** **H24** `[AIP AD 2.3]` 🟩
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme confirmed.
- **Late/overnight/diversion caveat:** 🟥 The **hard curfew (2200–0500 local)** is the dominant late/overnight constraint here, not immigration-desk staffing — a delayed arrival timed into the curfew window must qualify under a named exemption or divert; the field is explicitly not to be treated as a usable alternate during that window (§4).

---

## 9. De-icing provisioning & season

- **Availability:** **On-stand de-icing only** (no dedicated remote pad); H24. 🟩
- **Season:** Standard Central European de-icing season, typically autumn through spring.
- **Provisioning:** **KFOR (potassium formate) and NAFO (sodium formate)** fluids used; no specially prepared winter runway surface. Because de-icing is on-stand rather than at a remote pad, gate/stand dwell time during a winter de-icing event may extend turnaround.
- **Commercial impact:** Winter de-icing throughput is the principal seasonal delay-risk driver at this field, compounded by the single-runway capacity constraint — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Single-runway capacity** at a high-movement field (public reporting cites roughly 100,000 annual movements on the one runway) combined with a heavy freighter/passenger/GA traffic mix — sequencing pressure is a standing consideration even without adverse weather.
- **Ground-delay / flow-program exposure:** Not independently confirmed; treat as subject to standard EUROCONTROL flow management in peak/adverse conditions pending confirmation. 🟧
- **On-time reliability picture:** Winter de-icing season (on-stand only, no remote pad) and the CAT I/CAT III runway-end asymmetry in marginal visibility are the highest schedule-risk factors at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed; the AIP confirms a **Chapter 2 (ICAO Annex 16) noise-certification ban** under EU Directive 2002/30, but no specific noise-surcharge schedule was found in reachable sources. 🟧
- **Curfew infringement consequence:** The **2200–0500 local closure is a hard movement restriction**, not a charge-based deterrent — the field is explicitly not to be used as an alternate during this window, and only named exemptions (government/SAR/humanitarian/hospital/distress/delayed-scheduled) apply. 🟥
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a normal operational delay does not push a landing or departure into the curfew window; treat any schedule slipping toward 2200 local as a diversion-risk trigger, particularly for scheduled freight movements given the absence of a confirmed blanket freight exemption.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/pier assignment and gate map for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider identity.
- Slot-coordination level (if any) and EUROCONTROL CTOT/ATFM specifics for ELLX.
- Whether a separate freight-specific curfew exemption or local arrangement exists beyond the named exemptions in the AIP text — a material gap given the field's cargo-gateway character.
- Day-of-week/seasonal load pattern and belly/freighter cargo capacity specific to the K Global operation.
- Noise-charge/surcharge schedule detail.
- Widebody/Code E stand count and contact-vs-remote allocation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current curfew-exemption NOTAMs. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Luxembourg AIP, AD 2 ELLX** (mirrored via the Belgian AIS eAIP, skeyes) — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.ELLX-en-GB.html (retrieved 2026-07-26). *Operational hours, curfew, handling, fuel, customs, de-icing, apron/stand references.*
- OurAirports — https://ourairports.com/airports/ELLX/ (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "Luxembourg Airport" — https://en.wikipedia.org/wiki/Luxembourg_Airport (retrieved 2026-07-26). *Cargo-tonnage ranking, terminal-history corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
