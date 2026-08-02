# LKPR — Praha/Ruzyně (Václav Havel Airport Prague) · Dispatch Page

**LKPR / PRG** · Prague-Ruzyně, Czech Republic · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP not reachable this build

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LKPR Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** (spoke field, not a base) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal 1** (non-Schengen/international, concourses A/B) or **Terminal 2** (Schengen, concourses C/D) depending on route origin — exact assignment for our operation not confirmed 🟧 |
| Widebody stands available | Not confirmed in reachable sources 🟧 |
| Slot regime | Not confirmed in reachable public sources — do not assume unrestricted scheduling until verified 🟧 |
| Curfew | Not confirmed in reachable public sources 🟧 |
| Primary handling agent | Not confirmed; an FBO presence (**ABS Jets**) is noted in public data `[SkyVector]` 🟧 |
| Fuel supplier(s) | Jet A-1 assumed available; specific supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — Terminal 1 (non-Schengen/international hall); exact desk hours not confirmed 🟧 |
| De-icing | Central European winter season (roughly Nov–Mar/Apr) assumed; facility specifics not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** — non-Schengen/international traffic, concourses A and B (opened 1968, rebuilt 1997). **Terminal 2** — Schengen traffic, concourses C and D (opened 17 January 2006). **Terminal 3** — private/charter/GA traffic (opened 1997). **Terminal 4** — VIP/state-visit flights only, the airport's oldest building (opened 1937). Two dedicated cargo terminals also operate (Cargo Terminal 1 — Menzies Aviation Czech; Cargo Terminal 2 — Skyport). `[Wikipedia, AIP-cited]`
- **Our operation uses:** Terminal assignment follows the Schengen/non-Schengen status of the originating route — non-Schengen inbound/outbound legs route through **T1**, intra-Schengen legs through **T2**. Exact gate/concourse assignment for our operation is not confirmed. 🟧
- **International arrivals / CBP-equivalent hall:** Terminal 1 houses the non-Schengen international arrivals and passport-control hall.
- **Notes:** An expansion of the existing terminals (new concourse extending Terminal 2, extension of the Terminal 1 check-in hall) is reported as planned to begin construction 2027–2028 with completion by 2033 — no current-day impact on stand/gate assignment, but worth tracking for a multi-year schedule. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed in reachable sources. 🟧
- **Stands NOT usable by our types:** Not confirmed. 🟧
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed. 🟧
- **Ground-movement stand caveats:** The former **RWY 04/22** is permanently closed and repurposed as taxiway/apron space — confirm current ground-movement routing with Ground/Apron; cross-ref [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable public sources this build — do not assume a specific IATA level without direct confirmation. 🟧
- **Curfew / night restriction:** Not confirmed in reachable public sources — no hard curfew was identified, but this is an absence of evidence, not confirmation of an unrestricted regime. Verify before scheduling a late-night or early-morning movement. 🟧
- **CTOT / flow control:** Standard EUROCONTROL Network Manager ATFM/CTOT regulation applies as general EU practice; not independently LKPR-sourced. 🟧
- **Commercial impact:** Pending confirmation of the points above, build schedule buffer as a precaution around any late-evening/early-morning rotation until the slot/curfew regime is verified.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed for scheduled service; an FBO presence (**ABS Jets**) is noted in public data, more typically associated with business/GA traffic. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 15 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services assumed available as standard provision at a capital-city international airport — not individually confirmed. 🟧
- **Turnaround risk items:** Winter de-icing-pad queuing (season, facility unconfirmed) and any undisclosed slot/stand constraint are the principal unverified risk items.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for LKPR specifically — treat as a standard European capital-city leisure/business mix pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Two dedicated cargo terminals operate at the field (Menzies Aviation Czech; Skyport) `[Wikipedia]`, indicating real cargo throughput, but belly-cargo interaction for our operation is not confirmed. 🟧
- **Connection banks:** Not applicable — LKPR is a destination/spoke, not a connection-bank-setting field for this network.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available as a major capital-city international airport; specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not independently sourced; assess price differential against the outbound base at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration specific to LKPR identified.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Terminal 1 (non-Schengen/international hall).
- **CBP-equivalent / immigration hours:** Not confirmed in reachable sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality — Czech Republic is a full Schengen member state; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** Not confirmed — desk-hour coverage for a late or diverted arrival is unverified. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Assumed available given the Central European winter climate; facility type (pad vs gate) not confirmed. 🟧
- **Season:** Typical Central European de-icing season, roughly **Nov–Mar/Apr**.
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Winter fog/low-stratus days combined with any de-icing queuing are the principal seasonal delay-risk assumption at this field pending confirmation. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Winter fog/low stratus is the presumed principal seasonal driver, consistent with regional Central European climatology; not independently confirmed with LKPR-specific statistics. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed; traffic density is moderate relative to a major congested hub, so lower exposure is plausible but unverified. 🟧
- **On-time reliability picture:** Not confirmed. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources. 🟧
- **Curfew infringement consequence:** Not confirmed — no hard curfew identified, but not verified as absent either (see §4). 🟧
- **Scheduling guardrails:** Pending confirmation of slot/curfew status, hold a conservative buffer around late-evening/early-morning movements until the regime is verified.

---

## Open items (🟧 — confirm against AIP / operator data)

- Primary AIP (aim.rlp.cz) not reachable this build — all commercial/operational detail below is tier-4 corroborated at best, or unconfirmed.
- Terminal/concourse and stand/gate assignment for our scheduled operation.
- Slot coordination level and any night curfew/noise-charge regime.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours (Terminal 1).
- De-icing facility type, location and provisioning.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current Praha (LKAA) FIR status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **ANS CR / AIM Czech Republic eAIP** — https://aim.rlp.cz — attempted, not reachable in a usable form as of 2026-07-26; not used as a direct citation this build.
- OurAirports — https://ourairports.com/airports/LKPR/ (retrieved 2026-07-26). *Customs tag corroboration.*
- SkyVector — https://skyvector.com/airport/LKPR (retrieved 2026-07-26). *FBO listing (ABS Jets).*
- Wikipedia — "Václav Havel Airport Prague" — https://en.wikipedia.org/wiki/V%C3%A1clav_Havel_Airport_Prague (retrieved 2026-07-26). *Terminal layout/Schengen split, cargo terminal operators, terminal-expansion plans.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
