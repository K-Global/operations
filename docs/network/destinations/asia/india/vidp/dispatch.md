# VIDP — Indira Gandhi Intl · Dispatch Page

**VIDP / DEL** · New Delhi, Delhi (NCT), India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [VIDP Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| K Global aerodrome category | **H** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal 3** — handles all international traffic plus IndiGo/Air India international 🟧 (exact K Global gate/pier assignment not confirmed) |
| Widebody stands available | MARS (Multiple Aircraft Ramp System) centre stands published for wide-body use; extensive AVDGS-equipped contact stands at T3 piers A/B/C/D — exact widebody count not confirmed 🟧 |
| Slot regime | Not confirmed as IATA Level 1/2/3; AIP publishes a hard **86 movements/hour** capacity ceiling (51 dep/42 arr max) functioning as a de facto flow constraint 🟧 |
| Curfew | None found in reachable sources 🟧 (not independently confirmed as "none" on current AIRAC) |
| Primary handling agent | Not confirmed for a K Global operation 🟧 |
| Fuel supplier(s) | **IOC, BPCL, HPCL** (Terminal 1) · **IOST, BSSPL** (Terminals 2/3) `[AAI eAIP AD 2.4 VIDP]` |
| Customs / PoE for pax | **Yes** — H24 `[AAI eAIP AD 2.3 VIDP]` 🟩 |
| De-icing | **NIL** — not required for this climate; winter fog (not snow/ice) is the seasonal driver here |
| Taxi-in / taxi-out (VAMSYS) | **15 min / 18 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Terminals & concourses

- **Terminal layout:** Three terminals. **Terminal 1** — recently expanded, ~40 MPPA capacity, primarily domestic (IndiGo/SpiceJet, and some Air India domestic services relocated here from October 2025). **Terminal 2** — built 1986, ~15 MPPA, handles Air India domestic services. **Terminal 3** — the international gateway, throughput enhanced from ~34 MPPA to ~45 MPPA, handling **all international flights** plus IndiGo/Air India international service; a new "Pier E" expansion is planned to add further international capacity within the next few years. 🟧 Terminal programme is actively evolving (T1 expansion completed 2025, T3 Pier C international activation reported for 2026) — confirm current gate/pier assignment before finalising a stand plan.
- **Our operation uses:** **Terminal 3** — the airport's sole international-traffic terminal — is the expected terminal for any K Global international arrival/departure. 🟧 Exact pier/gate cluster not confirmed.
- **International arrivals / CBP-equivalent hall:** International arrivals clear immigration within Terminal 3; H24 customs/immigration confirmed by the primary AIP (§8).
- **Notes:** 🟧 Confirm current gate/pier assignment with handling given the airport's ongoing capacity-expansion programme (T1 expansion, T3 Pier C/E additions) — the overall airport capacity target is ~125 MPPA by 2029–30, up from ~105 MPPA today.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** MARS (Multiple Aircraft Ramp System) centre stands are published with continuous aircraft-stand lead-in lines specifically for wide-body use, alongside broken lead-in lines at MARS left/right positions for narrow-body aircraft. Terminal 3's A/B/C/D pier stands carry AVDGS at a large number of contact positions; Terminal 1 has AVDGS on all Code C stands. `[AAI eAIP AD 2.9 VIDP]` 🟧 Exact widebody stand count/cluster not confirmed.
- **Stands NOT usable by our types:** Narrow-body-oriented Code C contact stands at T1 are not sized for Code E/F — do not plan a widebody onto them.
- **Remote / hardstand positions:** Apron 31 (T3-area) publishes remote stand identifiers (e.g. R10, R10L, R10R, R11, R12) alongside contact positions; General Aviation Apron and Cargo Apron are separate parking areas. 🟧 Remote-stand use for a scheduled widebody international turn not confirmed as typical.
- **Contact vs remote for our arrivals:** Expect a contact widebody gate at T3 for a scheduled international turn; confirm with handling.
- **Ground-movement stand caveats:** The **closely-spaced parallel runway pair (11L/29R & 11R/29L)** and the **Eastern Link taxiways** affect ground routing between stands and the runway system — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed as formally IATA Level 1/2/3 in reachable sources; Delhi operates an **Airport Collaborative Decision Making (ACDM) cell** with domestic-airline/ATC/DIAL representation for flow coordination. 🟧
- **Curfew / night restriction:** None found — ATS, customs, fuelling, handling and security are all published H24. 🟧 Not independently confirmed as "no curfew exists" on the current AIRAC.
- **CTOT / flow control:** No EDCT/CTOT-specific programme confirmed; the AIP's published **86-movements/hour peak capacity ceiling (51 dep/42 arr max)** is a real, source-confirmed flow constraint at busy banks, especially compounded by winter fog events. 🟧
- **Commercial impact:** Schedule buffer around peak banks and the winter fog season are the two biggest scheduling guardrails at this destination; a fog-season morning arrival/departure carries materially higher delay risk than the annual average.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** H24 handling published by the primary AIP; the specific ground handler(s) for a K Global operation are not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 15 min / taxi-out 18 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody/narrow-body service times per type.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a T3 international contact stand (major-hub provision); fixed ground power and pre-conditioned air confirmed available at every contact stand at Apron-1 and Terminal-3. `[AAI eAIP AD 2.4 VIDP]`
- **Turnaround risk items:** Winter fog-season ground-movement slowdowns (§9), the ongoing terminal-expansion programme (gate/pier assignment in flux), and ground-routing complexity around the closely-spaced parallel runway pair can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** As one of the world's busiest airports and India's primary international gateway, VIDP anchors year-round high-volume demand; specific K Global demand/load patterns are set by the network schedule rather than third-party data.
- **Day-of-week / seasonal pattern:** Not independently sourced for VIDP specifically — treat as a major-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** VIDP operates **3 cargo terminals** with advanced storage/stacker, pallet/container handling and computerised cargo documentation systems `[AAI eAIP AD 2.4 VIDP]` — a substantial belly/freighter cargo gateway; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not independently sourced for a K Global operation — cross-ref the route register for inbound/outbound wave structure.

---

## 7. Fuel

- **Supplier / into-plane:** **Indian Oil Corporation (IOC)** and **BPCL** at Terminal 1 (refueller-truck capacities 11–36 KL, discharge rates 400–1,300 L/min); **IOST** and **BSSPL** at Terminals 2/3 via hydrant-dispenser networks (28 and 16 dispensers respectively, discharge rates ~3,500–3,800 L/min). **HPCL** also operates at Terminal 1. `[AAI eAIP AD 2.4 VIDP]` 🟩
- **Uplift availability & hours:** H24. `[AAI eAIP AD 2.3 VIDP]` 🟩
- **Price / tankering angle:** Not independently sourced — assess price differentials against the departure/home-base field per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1, all types available; no cold-soak/fuel-freeze consideration specific to VIDP itself given the climate.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international arrivals/departures processed through **Terminal 3**.
- **CBP-equivalent / immigration hours:** **H24** `[AAI eAIP AD 2.3 VIDP]` 🟩
- **Pre-clearance / visa-transit notes:** Standard Indian visa/immigration entry per nationality; no pre-clearance programme confirmed at VIDP.
- **Late/overnight/diversion caveat:** No curfew or desk-hours constraint identified — H24 customs, health/sanitation and AIS/ARO/MET briefing all confirmed. 🟩 The practical overnight risk driver is the **winter fog season**, not immigration-desk staffing (§9/§10).

---

## 9. De-icing provisioning & season

- **Availability:** **NIL.** `[AAI eAIP AD 2.3/2.4 VIDP]` No de-icing facilities are published — consistent with the climate; VIDP does not have a snow/ice season.
- **Season:** Not applicable.
- **Provisioning:** Not applicable.
- **Commercial impact:** De-icing is not a factor at this field; the seasonal delay-risk equivalent here is **winter dense fog (Dec–Jan, sometimes Nov–Feb)**, which constrains ground-movement throughput and landing-rate capacity even where CAT III ILS supports the approach itself (see §10, Briefing §3.4/§14).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter dense/radiation fog** — routinely drops RVR into the 75–300 m band (and lower in severe events); recent single-day disruption examples in the 2025–2026 season have run to 70–230+ flights delayed or cancelled. CAT III infrastructure on three of the four runways supports continued landings (roughly 30/hour even in heavy fog) but **does not eliminate delay exposure** — taxi/ground-movement throughput and overall traffic flow remain constrained in near-zero visibility.
- **Ground-delay / flow-program exposure:** High during winter fog events and at peak banks generally, given the AIP-published **86-movements/hour capacity ceiling** at one of the world's busiest airports. 🟧
- **On-time reliability picture:** December–January mornings carry materially elevated schedule-risk exposure at this destination; build seasonal buffer into any winter rotation touching VIDP. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources. 🟧
- **Curfew infringement consequence:** Not applicable — no curfew identified (§4). 🟧 Not independently confirmed as "none exists."
- **Scheduling guardrails:** The dominant commercial guardrail at VIDP is **winter fog-season buffer**, not curfew management — build schedule slack into any Dec–Jan rotation, and treat a fog-season morning arrival as a higher-delay-risk slot than the network average.

---

## Open items (🟧 — confirm against AIP / operator data)

- Exact K Global gate/pier assignment at Terminal 3, given the airport's active terminal-expansion programme.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Formal slot-coordination level (if any) — no IATA Level 1/2/3 classification confirmed.
- Noise-charge regime and any curfew confirmation (none found, not independently verified as "none exists").
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Widebody stand/pier count at Terminal 3.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current fog/LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AAI eAIP India — AD 2 VIDP**, AMDT 04-26, eff. 14 MAY 2026 — https://aim-india.aai.aero/eaip/eaip-v2-04-2026/eAIP/IN-AD%202.1VIDP-en-GB.html (retrieved 2026-07-26). *Operational hours, fuel suppliers/capacities, cargo-handling facilities, ground-power/PCA provision.*
- Business Standard — "Delhi airport to increase passenger handling capacity by 20% by 2030," 2025-10-29 — https://www.business-standard.com/industry/aviation/delhi-airport-to-increase-passenger-handling-capacity-by-20-by-2030-ceo-125102901544_1.html (retrieved 2026-07-26). *Terminal capacities, expansion programme.*
- IndianEagle — "Delhi Airport T3 Pier C to Start International Operations in May, Capacity to Rise 50%" — https://www.indianeagle.com/traveldiary/delhi-airport-expands-t3-international-capacity/ (retrieved 2026-07-26). *T3 pier/expansion detail.*
- Air India Newsroom — "Air India terminal changes at Delhi Airport" — https://www.airindia.com/in/en/newsroom/articles/Air-India-terminal-changes-at-Delhi-Airport-here-is-everything-you-need-to-know.html (retrieved 2026-07-26). *T1/T2/T3 domestic-service terminal moves.*
- Business Today — "Delhi airport to use next gen AI and enhanced runways to tackle winter chaos," 2025-12-11 — https://www.businesstoday.in/amp/technology/news/story/delhi-airport-to-use-next-gen-ai-and-enhanced-runways-to-tackle-winter-chaos-506254-2025-12-11 (retrieved 2026-07-26). *Fog-season RVR/throughput detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
