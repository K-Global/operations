# KBOS — Boston Logan International · Dispatch Page

**KBOS / BOS** · Boston, Massachusetts, United States · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [KBOS Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** (not a K Global base) `[VAMSYS mirror 2026-07-25]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Terminal E (international/PoE hall, gates E1–E16) most likely for a widebody international arrival; not independently confirmed for our operation 🟧 |
| Widebody stands available | Not confirmed by count/pier in reachable public sources 🟧 |
| Slot regime | **None found** — no IATA slot coordination confirmed for KBOS |
| Curfew | **None (no formal curfew)**; voluntary night (≈2300–0600) over-water routing preference and a night-preferential-runway window apply — see Briefing §6/§12 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet-A confirmed available (FAA AIP); specific into-plane supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — Terminal E international hall; exact desk hours not confirmed 🟧 |
| De-icing | **Available**, seasonal (winter) — specific pad/provisioning not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Four passenger terminals — **Terminal A** (Delta-operated), **Terminal B** (largest, mixed domestic carriers including American/United/Southwest), **Terminal C** (JetBlue-operated, largest share of BOS passenger traffic, some international carriers), and **Terminal E** (the dedicated international terminal, "John A. Volpe International Terminal," gates E1–E16, recently expanded). Terminal E connects airside to Terminal C via a post-security walkway; a Terminal A–B connector is a publicly reported future project. 🟧
- **Our operation uses:** For a widebody international arrival, **Terminal E** is the most likely gateway given its PoE/CBP facilities; exact gate/pier assignment for a K Global operation is not confirmed. 🟧
- **International arrivals / CBP hall:** Terminal E Level 1 houses CBP/immigration processing for international arrivals; connection to domestic terminals is via the post-security Terminal C walkway or landside transfer.
- **Notes:** Terminal E underwent a reported ~$800M modernisation adding new gates; current-day (2026) gate map/capacity not independently confirmed. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Terminal E (gates E1–E16) is the confirmed international/widebody cluster; exact Code E/F-capable stand count and jetway configuration not confirmed. 🟧
- **Stands NOT usable by our types:** Domestic-oriented gates in Terminals A/B/C are not confirmed as widebody-capable — do not plan a widebody onto them without confirmation.
- **Remote / hardstand positions:** Availability not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Expect a contact widebody gate for a scheduled international arrival at a major US gateway; not independently confirmed.
- **Ground-movement stand caveats:** The **intersecting six-runway layout** affects ground routing between stands and the active runway configuration — see [Briefing §13](index.md) and the Departure/Arrival taxi sections. ASDE-X surface radar is in use, indicating a monitored but potentially complex surface-movement environment.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **None found** — no IATA Level 2/3 coordination confirmed for KBOS in reachable sources. 🟧
- **Curfew / night restriction:** **No formal curfew.** A **night-preferential-runway window** (≈0500–1100Z / roughly 0000–0600 local) favours RWY 15R for takeoff and RWY 33L for landing, and a **voluntary over-water routing preference** applies roughly 2300–0600 when weather permits. These are noise-abatement preferences enforced through ATC procedure, not a movement ban. 🟧
- **CTOT / flow control:** No formal EDCT/CTOT regime specific to KBOS confirmed; standard FAA ATFM ground-delay/ground-stop programs can apply during weather or Northeast Corridor flow events, as at any major FAA-managed field. 🟧
- **Commercial impact:** Absence of hard slot/curfew constraints gives more schedule flexibility than a coordinated European hub; the practical scheduling risk instead comes from **winter weather ground-delay programs** and the airport's wind-dependent runway-configuration changes (§6/§10).

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 14 min / taxi-out 18 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a major-gateway Code E/F stand (standard US-hub provision); not individually confirmed.
- **Turnaround risk items:** Winter de-icing-pad throughput and queuing (season), and ground-routing complexity/config-change exposure around the intersecting-runway layout, are the main sources of unplanned turn-time risk.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for the K Global operation specifically; Boston is a major US East Coast leisure/business gateway with a pronounced summer leisure peak (New England tourism) — treat as general market context pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed for our operation. 🟧
- **Cargo / belly capacity:** Not confirmed; Terminal E area includes cargo-handling facilities (FAA AIP confirms cargo handling facilities present) but K Global belly-cargo uplift plans are not assessed here. 🟧
- **Connection banks:** As a destination (not a base), inbound/outbound timing is set by the network schedule rather than a KBOS-side connection bank — cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** Jet-A confirmed available (FAA AIP AD 2.4.2); specific into-plane provider for scheduled airline operations not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24 assumed at a major gateway; not independently confirmed. 🟧
- **Price / tankering angle:** Assess tankering economics per leg against the home-hub reference point at planning — no KBOS-specific price signal sourced this pass. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet-A; no cold-soak/fuel-freeze consideration specific to KBOS itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Terminal E international hall.
- **CBP / immigration hours:** Not confirmed in reachable public sources; assumed major-gateway H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** Standard US CBP entry per nationality; no pre-clearance programme at KBOS.
- **Late/overnight/diversion caveat:** No formal curfew means a late/overnight arrival is not itself barred, but confirm Terminal E CBP staffing for an off-peak/overnight international arrival before planning one. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — Massport operates substantial dedicated winter de-icing/snow-removal infrastructure at Logan; specific pad locations, fluid type and holdover-time provisioning are not confirmed in reachable public sources. 🟧
- **Season:** Typical New England winter season, roughly **Nov–Apr**, consistent with the region's nor'easter/snow-ice climatology (Briefing §14).
- **Provisioning:** Massport's stormwater/de-icing discharge permit references a "Blend-to-Temperature" glycol program aimed at reducing chemical use — general environmental-program detail, not throughput/holdover data. 🟧
- **Commercial impact:** Winter nor'easter events combined with de-icing-pad queuing are the principal seasonal delay-risk driver at KBOS — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter nor'easter/snow-ice events** and, secondarily, **marine advection fog** — both compounded by the airport's wind-dependent, intersecting-runway configuration, which forces more frequent runway-config changes than a simple parallel-runway hub.
- **Ground-delay / flow-program exposure:** Northeast Corridor FAA ATFM ground-delay/ground-stop programs are common during winter weather and convective season at major East Coast fields generally; no KBOS-specific frequency statistic sourced this pass. 🟧
- **On-time reliability picture:** Winter months (nor'easter/de-icing season) carry the highest schedule-risk exposure; shoulder-season marine fog is a secondary factor. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** No specific per-movement noise charge or landing-fee noise surcharge confirmed in reachable sources for KBOS. 🟧
- **Curfew infringement consequence:** Not applicable — no formal curfew exists; the operative constraint is the **noise-abatement preferential-runway/night-window program**, which is a procedural preference enforced by ATC assignment rather than a chargeable/prohibited-movement regime.
- **Scheduling guardrails:** Given the absence of a hard curfew, the main scheduling guardrail at KBOS is **winter weather buffer** (nor'easter/de-icing exposure) rather than a last-rotation curfew margin — contrast with slot-coordinated/curfew-bound European hubs in the network.

---

## Open items (🟧 — confirm against AIP / operator data)

- Widebody stand/gate assignment for our operation (likely Terminal E, not individually confirmed).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours for scheduled airline service.
- Customs/immigration desk hours at Terminal E.
- FAA ATFM/ground-delay-program specifics for KBOS (general Northeast Corridor practice assumed, not independently sourced).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- De-icing pad locations, fluid type and holdover-time provisioning.
- Confirmation of "no slot coordination / no curfew" against a current operator statement (currently sourced to general public/tier-4 corroboration).

> **Live data — pull at planning:** fuel price, any ATFM/ground-delay program in effect, current demand/load, stand allocation, current ATIS runway configuration. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **FAA Aeronautical Information Publication (AIP), Part 3 — Aerodromes, Massachusetts (AD 2 KBOS)** — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_massachusetts.html (retrieved 2026-07-26).
- SkyVector — FAA Chart Supplement mirror for KBOS — https://skyvector.com/airport/BOS/General-Edward-Lawrence-Logan-International-Airport (retrieved 2026-07-26).
- Massport — Noise Abatement pages — https://www.massport.com/environment/noise-abatement/logan-airport and /faqs (retrieved 2026-07-26; direct fetch bot-protected, corroborated via FAA/MIT sources).
- FAA Newsroom — "Boston Air Traffic Procedures Reduce Noise Impact," 2021-12-02 — https://www.faa.gov/newsroom/boston-air-traffic-procedures-reduce-noise-impact (retrieved 2026-07-26).
- Terminal/concourse structure — general public terminal guides (upgradedpoints.com, airportmaphq.com) cross-checked for Terminal A/B/C/E carrier assignment and Terminal E gate range — retrieved 2026-07-26; travel-guide sources, not operator-grade.
- US EPA — Massport Logan International Airport NPDES Permit — https://www.epa.gov/npdes-permits/massport-logan-international-airport-npdes-permit (retrieved 2026-07-26). *De-icing discharge/glycol program corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from FAA sources; K Global fields from live VAMSYS; 4-page pack. |
