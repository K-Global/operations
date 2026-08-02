# LIMC — Malpensa · Dispatch Page

**LIMC / MXP** · Ferno / Somma Lombardo, Varese, Lombardy, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LIMC Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / potential alternate** (not a base) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal 1** (Concourses A/B/C) — intercontinental/long-haul terminal; **Terminal 2** is easyJet/charter-oriented and **not connected airside** to T1 🟧 |
| Widebody stands available | Not individually confirmed; operator data reports ≈139 stands/93 gates airport-wide (T1+T2+cargo) — figure appears dated, see Briefing §13 🟧 |
| Slot regime | Not confirmed for this major hub — verify current IATA level 🟧 |
| Curfew | No confirmed hard blanket curfew; overnight (2330–0630 LT) reduced/single-runway noise regime reported 🟧 |
| Primary handling agent | Not confirmed in reachable sources 🟧 |
| Fuel supplier(s) | Jet A-1, major-hub multi-supplier assumed; not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — T1 international hall; exact desk hours not confirmed 🟧 |
| De-icing | Confirmed at Cargo City (on-stand equipment); main passenger-apron provisioning not confirmed — season typ. Nov–Mar 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** — the intercontinental/long-haul terminal, reported with three concourses: **A** (Schengen regional), **B** (non-Schengen/intercontinental), **C** (Schengen long-haul). **Terminal 2** — smaller, used almost exclusively by easyJet plus some charter traffic; **T1 and T2 are not connected airside** — any T1↔T2 transfer must be made landside via the airport's inter-terminal shuttle.
- **Our operation uses:** Long-haul widebody international service would be expected to route through **Terminal 1** (Concourse B/C, non-Schengen/long-haul). 🟧 Confirm current gate/concourse assignment with handling — not independently confirmed for the K Global operation specifically.
- **International arrivals / customs hall:** International arrivals clear passport control in Terminal 1; Terminal 2 handles predominantly intra-Schengen low-cost traffic.
- **Notes:** T1/T2 landside-only connection (24-hour courtesy shuttle, ~15-minute headway by day, ~30-minute overnight) is a real connection-time driver for any misconnect scenario involving both terminals — build buffer accordingly. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not individually confirmed in reachable public sources. 🟧 The operator's own reference-code figure (4E, max wingspan 65 m) is inconsistent with Malpensa's known Code F (A380-class) operating history and a separately-published Code-F-specific taxi-restriction chart — see [Briefing §13](index.md); confirm current Code F stand availability before planning a large wide-body rotation.
- **Stands NOT usable by our types:** Not confirmed; narrowbody/low-cost-oriented Terminal 2 stands are unlikely to be sized for Code E/F.
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Not confirmed; expect a contact widebody gate for scheduled international service pending local confirmation.
- **Ground-movement stand caveats:** A dedicated Code-F taxi-restriction chart and a separate low-vis taxi-routing chart both exist per the current chart index — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable public sources for this major Milano-area hub — verify current IATA slot level before scheduling. 🟧
- **Curfew / night restriction:** **No confirmed hard blanket curfew** — the airport is stated to operate H24. An **overnight (2330–0630 LT) preferential/reduced-capacity single-runway regime** is reported (traffic concentrated on the 17R/35L runway), effectively idling the second parallel overnight for community-noise reasons — not independently AIP-confirmed. A 1999 press proposal for a full midnight–0500 ban was reported historically; its current implementation status is **unconfirmed** and should not be relied on for scheduling. 🟥
- **Daytime runway-role alternation:** The 35L/35R pair alternates arrival/departure roles on a published day/time-of-day noise-sharing schedule — a late schedule slip that crosses one of these alternation boundaries could see the active runway configuration change; confirm current ATIS config rather than assuming a fixed role. 🟧
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation should be expected as standard practice for a busy Milano-area hub — not independently LIMC-sourced this pass. 🟧
- **Commercial impact:** The overnight reduced-capacity regime and the intraday runway-role alternation both argue for **schedule buffer around the evening/night boundary** and awareness that the assigned runway (and therefore taxi routing/turnaround timing) may change through the day.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources — SEA S.p.A. is the airport authority; specific third-party ground handler(s) for our operation are not identified. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 14 min / taxi-out 18 min** for planning purposes `[VAMSYS mirror 2026-07-26]` 🟧 (in/out order as mirrored, not independently reconfirmed) — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services would be expected at a major-hub Code E/F stand; not individually confirmed for LIMC.
- **Turnaround risk items:** Gate/stand availability given the unconfirmed reference-code/Code-F situation (§3), de-icing throughput in winter (main apron provisioning not confirmed), and any ground-routing complexity tied to the independent-parallel-runway/config-alternation pattern can each add unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** Milan is a major origin/destination market for both leisure and business traffic; specific K Global demand patterns are network-schedule-driven rather than independently sourced here. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for LIMC specifically — treat as a standard major-European-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** LIMC is **Italy's busiest cargo airport** by tonnage, anchored by the dedicated **Malpensa Cargo City** (≈20 freighter stands, hydrant fuel, 400 Hz power, on-stand de-icing, with a MARS reconfiguration program adding capacity for two simultaneous 747-8F). Confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not independently sourced for the K Global operation; cross-ref the route register for inbound/outbound wave structure.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available as a major hub; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24 assumed for passenger apron; not independently confirmed. Cargo City is confirmed to have its own hydrant fuel system. 🟧
- **Price / tankering angle:** Assess price differentials against the home base and regional Italian fields per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LIMC as an uplift point.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international hall in **Terminal 1**.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub coverage aligned with scheduled international operations. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at LIMC.
- **Late/overnight/diversion caveat:** The **overnight reduced-capacity single-runway regime** (§4) is the dominant late/overnight operational constraint here rather than immigration-desk staffing specifically — confirm current status for any planned late arrival. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Confirmed **on-stand de-icing equipment at Malpensa Cargo City**; main passenger-apron de-icing pad location(s) and procedure are **not confirmed** in reachable public sources. 🟧
- **Season:** Typical Po Valley winter de-icing season, roughly **Nov–Mar**, consistent with the region's radiation-fog period (see Briefing §14).
- **Provisioning:** Not confirmed for the passenger apron; the Cargo City facility's equipment is confirmed but not detailed beyond its existence.
- **Commercial impact:** Winter Po Valley fog combined with any de-icing-pad queuing on the passenger apron are the principal seasonal delay-risk drivers here — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter Po Valley radiation/advection fog**, most severe roughly 04:00–09:00 local (Oct–Mar) — mitigated by CAT II/III infrastructure on the south-config runways only, meaning a config change ahead of a fog event can materially reduce achievable minima. See [Briefing §3.4](index.md).
- **Ground-delay / flow-program exposure:** Not independently quantified for LIMC; expect EUROCONTROL flow management in peak/adverse conditions as standard practice for a busy Milano-area hub. 🟧
- **On-time reliability picture:** Winter mornings (fog) and any evening/night schedule slip crossing the overnight reduced-capacity boundary carry the highest schedule-risk exposure. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources for LIMC specifically — Italian airports generally apply ICAO/EU noise-classification-based charging; verify current SEA/ENAC tariff schedule. 🟧
- **Curfew infringement consequence:** No confirmed hard blanket curfew exists to infringe; the operative night constraint is the **reduced-capacity single-runway regime** (§4/§6 of Briefing) rather than a movement ban — verify current status before assuming either way.
- **Scheduling guardrails:** Build buffer around the **2330 LT** boundary given the reported overnight regime, and treat any schedule slipping across a **35L/35R role-alternation boundary** as a config-change risk requiring an ATIS check before committing to a taxi/runway assumption.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current widebody gate/stand assignment and Code F suitability for our operation, given the reference-code (4E) vs. known Code F operating-history inconsistency.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Slot-coordination level (IATA Level) for LIMC.
- Fuel into-plane provider and uplift hours on the passenger apron.
- Customs/immigration desk hours (Terminal 1).
- EUROCONTROL CTOT/ATFM specifics for LIMC (general practice assumed, not independently sourced).
- Current status/enforcement of the overnight reduced-capacity single-runway regime and the daytime 35L/35R role-alternation schedule.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Noise-charge/tariff regime specific to LIMC.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current Milano TMA/RAD status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- SEA S.p.A. ("Milan Airports") — "Technical data" — https://milanairports.com/en/group/technical-data (retrieved 2026-07-26). *Reference code, general operating data.*
- Milano Malpensa Cargo — "Cargo City" — https://www.milanomalpensacargo.com/en/cargo-city (retrieved 2026-07-26). *Cargo apron stand count, fuel/power/de-icing provisioning.*
- Sleeping in Airports — Milan Malpensa Airport Guide — https://www.sleepinginairports.net/guides/milan-malpensa-airport-guide.htm (retrieved 2026-07-26). *Terminal/concourse structure, T1/T2 airside separation, inter-terminal shuttle.*
- IVAO Italy Division — QuickOverview LIMC — https://quickoverview.ivao.it/aerodrome/show/LIMC (retrieved 2026-07-26). *Overnight/segregated runway-regime cross-check. Network-sim document, not regulatory.*
- FlightGlobal — "Malpensa set for night flight ban" (1999) — https://www.flightglobal.com/archive/1999/06/malpensa-set-for-night-flight-ban/ (retrieved 2026-07-26). *Historical curfew-proposal context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
