# LFST — Strasbourg Entzheim · Dispatch Page

**LFST / SXB** · Strasbourg (Entzheim), Bas-Rhin, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFST Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Destination / alternate (regional France) — **not** a K Global base `[VAMSYS mirror 2026-07-26]` |
| K Global category | **Not set** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Preferred alternates | **LFSB, EDDS, LSZH** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **n/a** — not set in VAMSYS `[VAMSYS mirror 2026-07-26]` 🟧 |
| Terminals in use for us | Not published / verify — single-terminal regional field, layout beyond the GA/commercial split not detailed in the source extract 🟧 |
| Widebody stands available | Not applicable — 2,400 m runway pair is sized for narrowbody/regional-jet operation, not widebody 🟧 |
| Slot regime | Not confirmed — treat as **uncoordinated/Level 1** pending confirmation; unlikely to be Level 3 for a field of this size, but not asserted without a source 🟧 |
| Curfew | **Yes** — Chapter 2 aircraft banned H24; other aircraft banned 2230–0500 (takeoffs) / 2300–0500 (landings), winter LT (summer −1 hr) 🟥 |
| Primary handling agent | Air France / Strasbourg Handling (Aviapartner) |
| Fuel supplier(s) | Shell Aviation (100LL, Jet A1) |
| Customs / PoE for pax | **Yes** — 0500–2200 (24 h-notice extension outside these hours) 🟧 |
| De-icing | **Available** — provided per AD 2; pad location/season detail not published 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Not published / verify 🟧 — the source AD 2 extract details the General Aviation Terminal's operating hours (0500–2100) but does not describe a passenger-terminal concourse layout in the reachable data.
- **Our operation uses:** Not published / verify 🟧 — confirm terminal/stand assignment with handling.
- **International arrivals / CBP-equivalent hall:** Customs/immigration operates 0500–2200, with outside-hours service available on 24 h prior notice — implies a dedicated arrivals/customs hall, layout not further detailed. 🟧
- **Notes:** GA flights outside the General Aviation Terminal's hours (0500–2100) require compulsory prior-arranged handling (excluding based aircraft) — a scheduling constraint for any off-hours GA-classified movement. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not applicable — the 2,400 m runway pair and the source data's wingspan-based taxiway restrictions (TWY F/G closed > 52 m; TWY M/Q closed > 36 m) point to a field configured for narrowbody/regional-jet and business-jet traffic, not scheduled widebody service. 🟧
- **Stands NOT usable by our types:** Not individually enumerated in the source extract — apply the taxiway wingspan limits above as the governing constraint. 🟧
- **Remote / hardstand positions:** Not published / verify 🟧.
- **Contact vs remote for our arrivals:** Not published / verify 🟧.
- **Ground-movement stand caveats:** Aircraft with wingspan > 36 m must taxi via **TWY K (Apron A)** or **TWY N (Apron B)**, except VIP State flights using stand A52 with FOLLOW-ME; the service road between stands A28 and B1 cannot be used to bypass TWY P3 — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in the reachable AD 2 extract — treat as **uncoordinated/Level 1** pending confirmation. A field of this size is unlikely to be Level 3, but this is not asserted without a source. 🟧
- **Curfew / night restriction:** **Chapter 2 aircraft (ICAO Annex 16) banned H24, no exceptions.** Other aircraft: takeoffs prohibited 2230–0500, landings prohibited 2300–0500 (winter local time, summer −1 hr). A delayed scheduled passenger commercial flight may request an exception via the AD operator's on-duty supervisor (SASE), granted only if the aircraft's cumulative noise margin exceeds **10 EPNdB** (movements 2100–2300) or **13 EPNdB** (movements 2300–0500). Exempt entirely: emergency landings, weather-diverted aircraft, Civil Security flights, official postal flights, search-and-rescue, MEDEVAC, State aircraft, humanitarian flights. 🟥
- **CTOT / flow control:** Not independently confirmed for LFST; general EUROCONTROL Network Manager ATFM/CTOT practice may apply per routing/flow conditions on the day. 🟧
- **Commercial impact:** The hard curfew (not a mere charge) is the dominant commercial constraint — schedule buffer must ensure any inbound lands before 2300 and any outbound departs before 2230, since the delayed-flight exception process is discretionary and EPNdB-gated, not automatic.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** **Air France / Strasbourg Handling (Aviapartner)**. Handling is **compulsory** (prior request required) for any international general-aviation flight (excluding based aircraft) and any general-aviation flight outside the General Aviation Terminal's hours (0500–2100, excluding based aircraft). 🟧
- **Typical turnaround time for our type:** Not published / verify — VAMSYS mirror does not carry a taxi-in/taxi-out figure for this field (`n/a`) `[VAMSYS mirror 2026-07-26]`. 🟧
- **Services:** Not individually confirmed in the source extract; standard regional-field provision (push-back, GPU, water/lav, catering) assumed but not sourced. 🟧
- **Turnaround risk items:** Compulsory-handling triggers for GA-classified flights outside GAT hours, and the hard noise curfew's schedule pressure on the last rotation of the day, are the standout turnaround-risk items at this field.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for LFST specifically — treat as standard regional European business/leisure mix pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not published / verify 🟧.
- **Cargo / belly capacity:** Not published / verify 🟧 — no cargo-specific detail found in the reachable AD 2 extract.
- **Connection banks:** Not applicable — LFST is not a K Global base; connection timing is set by the network schedule at the hub end of any pairing.

---

## 7. Fuel

- **Supplier / into-plane:** **Shell Aviation** — 100LL and Jet A1. 🟧
- **Uplift availability & hours:** Sun–Fri 0430–2130, Sat 0430–2030. Outside these hours, refuelling is via **standby duty officer only**, with a **€300 callout fee**, limited to scheduled/delayed commercial flights, State flights and MEDEVAC. 🟥
- **Price / tankering angle:** Not confirmed — pull live at planning; a regional destination of this size is a plausible tankering-in candidate if the price differential favours the home base. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A1/100LL; storage capacity — Jet A1 tanks 200 m³ plus trucks totalling 120 m³, 100LL truck 12 m³. No cold-soak/fuel-freeze consideration specific to this short-haul regional field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes.
- **CBP-equivalent / immigration hours:** **0500–2200**; outside these hours, service is available **on request with 24 h prior notice**. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** The **hard noise curfew (2230/2300–0500)** is the dominant late/overnight constraint here, not customs staffing — a flight arriving after the customs window without 24 h prior notice would in any case already be constrained by the curfew. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Provided**, per the AD 2 extract; specific pad location and procedure not detailed in the source data. 🟧
- **Season:** Not published / verify — a Central European regional field, plausible Oct–Apr season by regional climatology, not independently confirmed for LFST. 🟧
- **Provisioning:** Not published / verify 🟧. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).
- **Commercial impact:** Not independently confirmed; treat as a standard regional winter-season delay-risk factor pending confirmation.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not independently confirmed; plausible candidates given the source data are winter low-visibility events (RWY23 LVP triggers at RVR ≤ 800 m / ceiling ≤ 200 ft) and the hard noise curfew's pressure on late rotations. 🟧
- **Ground-delay / flow-program exposure:** Not published / verify 🟧.
- **On-time reliability picture:** Not published / verify — the curfew (§4) is the clearest structural risk to on-time performance on the last rotation of the day. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not published / verify — no explicit per-movement dB surcharge figure found in the reachable AD 2 extract, unlike the exception-process EPNdB thresholds cited above. 🟧
- **Curfew infringement consequence:** The night ban is a **hard movement restriction** — Chapter 2 aircraft cannot operate H24 under any circumstance; other aircraft outside the exemption/exception criteria simply cannot take off (2230–0500) or land (2300–0500).
- **Scheduling guardrails:** Build buffer into the last rotation so a normal operational delay does not push a landing past 2300 or a takeoff past 2230; treat any schedule slipping toward the curfew window as a **diversion/delay-exception-request trigger**, noting the exception process is discretionary (SASE authorization, EPNdB-gated) and not guaranteed.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/concourse layout and our operation's assigned stand/terminal.
- Ground handling services detail and confirmed minimum turnaround time (VAMSYS carries no taxi-in/out figure for this field).
- Slot-coordination level (treated as uncoordinated/Level 1 pending confirmation).
- CTOT/ATFM specifics for LFST.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- De-icing pad location, season and provisioning detail.
- Noise-charge/dB surcharge regime beyond the EPNdB-gated delayed-flight exception process.
- K Global category — not set in VAMSYS.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP — AD 2 LFST**, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/. *Hours/services, fuel, handling, customs, curfew regime, ground-operations rules.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
