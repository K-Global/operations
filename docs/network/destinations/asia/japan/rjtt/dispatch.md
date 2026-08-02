# RJTT — Tokyo Haneda · Dispatch Page

**RJTT / HND** · Ota City, Tokyo, Japan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [RJTT Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Home / base station** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Three passenger terminals — **T1** (domestic), **T2** (domestic + international area), **T3** (international, H24) — 71 gates with jet bridges network-wide (T1: 23, T2: 27, T3: 20) 🟧 |
| Widebody stands available | Not individually confirmed for a K Global operation; Terminal 3's international piers are the natural widebody cluster 🟧 |
| Slot regime | No IATA slot level modelled for K Global's simulated schedule; in reality, domestic slots are scarce and reallocated by MLIT every five years, and non-scheduled/BizAv daytime slots are reported at crisis levels — a general congestion signal 🟧 |
| Curfew | **None blanket** — Terminal 3/international-T2 run H24 — but a hard **23:00–05:55 JST night-mode** confines routing to over-water Tokyo Bay tracks 🟥 |
| Primary handling agent | Not confirmed for the K Global operation 🟧 |
| Fuel supplier(s) | JET A-1, H24, hydrant + truck; specific into-plane supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — H24 in T3/international T2; T1/domestic-T2 05:00–24:00 local 🟧 |
| De-icing | Published **"Nil"** in the primary AIP; tier-4 sources report Type I/IV capability in season — discrepancy, confirm locally 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** ("Big Bird", opened 1993, 23 jet-bridge gates) — domestic only, serving Japan Airlines, Skymark and StarFlyer. **Terminal 2** (opened 2004, 27 jet-bridge gates) — originally domestic (ANA/Air Do), later expanded with an international flight area (from 2020) served by All Nippon Airways. **Terminal 3** (the former "International Terminal," renamed 2020, 20 jet-bridge gates) — international, opened in stages from October 2010 (initial building) through an 8-gate pier/apron expansion completed March 2014; runs **H24**, unlike T1 and the domestic area of T2 which operate 05:00–24:00 local.
- **Our operation uses:** As the K Global home/base station, expect the international terminal complex (T3, plus the international area of T2) for scheduled international service; domestic-network legs would route through T1/T2. Confirm current gate assignment with handling. 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear customs/immigration in T3 or the international area of T2, both H24; a dedicated GA/cargo apron ("N Area") also exists on the field. Terminals 1/2 and 3 are linked by an underground road tunnel (completed 2020) plus landside shuttle bus and the Tokyo Monorail/Keikyu rail connections.
- **Notes:** 🟧 Exact widebody gate/pier assignment for a K Global scheduled operation is not independently confirmed — confirm with handling before finalising a stand plan.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Terminal 3's international piers are the natural widebody cluster (71 gates network-wide across all three terminals, jet-bridge equipped); exact Code E/F allocation for a K Global operation is not individually confirmed. 🟧
- **Stands NOT usable by our types:** Not confirmed in reachable sources — verify locally. 🟧
- **Remote / hardstand positions:** A dedicated GA/cargo apron ("N Area") exists on the field; remote/bus-boarding gate groups are published for T1 (gates 31–40, 84–90) and T2 (gates 500–511, 700–702) for domestic/ground-boarding use — not typically relevant to a scheduled widebody international arrival.
- **Contact vs remote for our arrivals:** Expect a contact widebody gate at T3/international-T2 for a scheduled home-station turn.
- **Ground-movement stand caveats:** 🟥 **International (T3) traffic must cross the A-Runway** to reach or leave the terminal — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** No IATA level modelled for the K Global simulated schedule. In reality, Haneda's domestic slots are reallocated by MLIT every five years and are highly valued; non-scheduled/business-aviation daytime slots (roughly 08:00–23:00 local) are reported at crisis levels as of the most recent operator reporting reviewed — a general signal of a congested, schedule-integrity-sensitive field. 🟧
- **Curfew / night restriction:** No blanket curfew — Terminal 3 and the international area of Terminal 2 operate H24. However, a hard **23:00–05:55 JST night-mode** confines all departure/arrival routing to over-water Tokyo Bay tracks on the C/D runways, with overflight of Tokyo/Chiba land areas prohibited in that window. The **A380 is additionally prohibited from daytime operation** (06:00–23:00 JST), permitted only overnight with a weight restriction. 🟥
- **CTOT / flow control:** Not independently confirmed for RJTT; Japan's domestic Ground Delay Program framework applies generally, with in-flight Traffic Flow Management Initiatives reported as under consideration for both domestic and international flights. 🟧
- **Commercial impact:** Japan's operating culture places a high premium on schedule-integrity — filed times, once approved, are expected to hold; late changes on the day can trigger re-filing. Build buffer accordingly, particularly around the night-mode boundary (23:00 JST) and any A380-family rotation.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed for the K Global operation in reachable public sources; example business-aviation handlers operating at the field include Aeroworks and Universal Aviation Japan — neither individually confirmed as the K Global contracted agent. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 15 min / taxi-out 18 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a home-station Code E/F stand (standard major-hub provision); fuel is reported as available via underground hydrant network at some apron positions, reducing reliance on tanker trucks for large uplifts.
- **Turnaround risk items:** The international terminal's **A-Runway crossing** (§3/§4) can add unplanned taxi time; the field's dense, configuration-switching traffic pattern (Briefing §3.2) and winter Tokyo Bay fog/de-icing exposure (§9) are the principal seasonal turnaround-risk drivers.

---

## 6. Load factors & seasonality

- **Demand peaks:** As the home/base station, RJTT anchors year-round domestic and international demand across the K Global network; connection banks and route mix are set by the network schedule.
- **Day-of-week / seasonal pattern:** Not independently sourced for RJTT specifically. A structural note from JCAB's own operational-procedures material: Haneda's domestic remain-overnight fleet historically departs early morning and returns late night, concentrating **departure demand around 06:00–07:55 local and arrival demand around 21:00–22:55 local** — a real scheduling-bank consideration for any domestic-adjacent K Global connection. 🟧
- **Cargo / belly capacity:** Not independently sourced for RJTT; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** As the base, RJTT sets the master connection-bank timing for the network — cross-ref the route register for inbound/outbound wave structure, mindful of the domestic early-out/late-in pattern above.

---

## 7. Fuel

- **Supplier / into-plane:** JET A-1; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24, hydrant refuelling and fuel truck, no stated capacity limitation per the primary AIP; some apron positions reportedly served by underground hydrant network without a tanker requirement. 🟧
- **Price / tankering angle:** As the home/base station, RJTT is typically the tankering reference point rather than a tanker-out destination — assess price differentials to outstations per leg. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard JET A-1; no cold-soak/fuel-freeze consideration specific to the RJTT uplift itself — relevant only to the outbound long-haul leg profile, not the RJTT ground uplift.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Terminal 3 and the international area of Terminal 2.
- **CBP-equivalent / immigration hours:** **H24** in Terminal 3/international-T2 per the primary AIP (customs and immigration listed H24 field-wide); Terminal 1 and the domestic area of Terminal 2 operate 05:00–24:00 local.
- **Pre-clearance / visa-transit notes:** Standard Japanese entry per nationality; no pre-clearance programme modelled at RJTT.
- **Late/overnight/diversion caveat:** Because customs/immigration in the international terminal complex runs H24, the dominant late/overnight constraint at RJTT is the **23:00–05:55 JST night-mode routing restriction** (§4/Briefing §3.5), not desk staffing. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** 🟧 Published **"Nil"** in the primary AIP facilities table (AD 2.3 item 11, AD 2.4 item 4), yet tier-4 operational sources report **Type I/IV fluid de-icing capability** in season for RJTT — a genuine discrepancy between the primary source and operator reporting. Confirm locally before planning around either figure.
- **Season:** Winter (typ. Dec–Mar); snow is uncommon in Tokyo but does occur — the AIP publishes a full snow-clearing equipment inventory (6 sweepers, 8 plows, 2 rotaries, 2 graders, 5 loaders) with a 3 cm trigger depth, prioritising the A/C runway pair then the B/D pair.
- **Provisioning:** Not confirmed given the AIP/operator discrepancy above. 🟧
- **Commercial impact:** Winter Tokyo Bay sea fog/low cloud (Briefing §3.4/§14) is a more consistently reported seasonal delay driver than de-icing itself; build winter schedule buffer for both fog and any snow event. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Tokyo Bay sea fog/low cloud**, most common on winter mornings and able to develop quickly; the field's own **wind-driven, 4-runway/2-configuration system** (Briefing §3.2) is itself a structural source of ATC-managed flow variability during configuration changes.
- **Ground-delay / flow-program exposure:** High, given RJTT's status as one of the busiest and structurally most complex single-airport traffic environments in the network; domestic Ground Delay Program practices apply, with broader Traffic Flow Management Initiatives reported as evolving. 🟧
- **On-time reliability picture:** Winter mornings (fog) and any strong-wind configuration change carry the highest schedule-risk exposure at the home/base station. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources for RJTT specifically; Japan's domestic slot-value system (slots reallocated and highly valued every five years) functions as an indirect capacity-rationing mechanism rather than a per-movement noise charge. 🟧
- **Curfew infringement consequence:** No blanket curfew, but the **23:00–05:55 JST night-mode routing restriction** and the **A380 daytime-operation ban** are hard operational constraints, not merely charges (Briefing §3.5/§5).
- **Scheduling guardrails:** Build buffer around the 23:00 JST night-mode boundary for any late-day rotation, and treat Japan's schedule-integrity culture (filed times expected to hold; late changes can trigger re-filing) as a standing commercial-planning constraint at this field.

---

## Open items (🟧 — confirm against AIP / operator data)

- Ground handling agent(s) contracted for the K Global operation and confirmed minimum turnaround time.
- Fuel into-plane provider.
- De-icing availability/provisioning — primary AIP says "Nil," tier-4 sources say Type I/IV available; genuine discrepancy requiring local confirmation.
- Widebody gate/pier assignment for a K Global scheduled operation across T2/T3.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- CTOT/ATFM specifics for RJTT (general Japanese domestic practice assumed, not independently RJTT-sourced).
- Noise-charge regime, if any, applicable to a K Global scheduled operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current runway-configuration status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **JCAB AIP Japan, AD 2 RJTT** — mirrored via https://nagodede.github.io/aip/japan/documents/RJTT_full.pdf (retrieved 2026-07-26). Hours, customs, fuel, de-icing facilities table, PCR data.
- Japan Civil Aviation Bureau / airport-slot coordination secretariat — "Operational Procedures at Tokyo International Airport (Haneda)" — https://www.schedule-coordination.jp/archives/arc_hnd/2010/operational_procedure_at_hnd.pdf (retrieved 2026-07-26). Domestic remain-overnight fleet departure/arrival demand pattern.
- OPSGROUP — "Japan BizAv Ops: Haneda, Narita, and Nagoya Explained", 2026-01-13 — https://ops.group/blog/japan-bizav-ops-haneda-narita-and-nagoya-explained/ (retrieved 2026-07-26). Slot-crisis reporting, de-icing capability, handling-agent examples, night-mode/A380 corroboration.
- Wikipedia — "Haneda Airport" — https://en.wikipedia.org/wiki/Haneda_Airport (retrieved 2026-07-26). Terminal history, gate counts, domestic slot-reallocation/value detail, T1–T3 tunnel connection.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
