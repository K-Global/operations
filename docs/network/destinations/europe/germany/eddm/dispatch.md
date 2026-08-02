# EDDM — Munich (Franz Josef Strauß) · Dispatch Page

**EDDM / MUC** · Freising, Bavaria, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EDDM Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate** `[VAMSYS mirror 2026-07-25]` |
| K Global category | **L** `[VAMSYS mirror 2026-07-25]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **EDDF, LSZH, EDDS** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **16 min / 20 min** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Terminal 1 (non-hub carriers) and Terminal 2 + satellite (hub carrier/alliance, widebody); cargo apron stands 901–907 |
| Widebody stands available | Terminal 2 satellite stands 243–256 (medium-body intermixed); cargo apron 901–907 all widebody-capable 🟧 |
| Slot regime | **Slot-coordinated (Level 3)** + **PPR** for non-scheduled/business aviation |
| Curfew | Night-noise regime, core no-movement window **00:00–05:00** — see §4 🟧 |
| Primary handling agent | Not confirmed in reachable sources 🟧 |
| Fuel supplier(s) | Jet A-1 confirmed on field; specific supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — CIQ, Schengen/Non-Schengen segregated by terminal; hours not confirmed 🟧 |
| De-icing | **Available** — dedicated coordinator frequency 121.990, seasonal |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** — non-hub-carrier airlines (stands 101–109 under construction/not assigned; 118–121 reserved for flights with elevated security requirements). **Terminal 2** and its satellite — the dominant hub carrier and alliance partners, including widebody parking, with medium-body types intermixed with widebodies or at satellite stands 243–256.
- **Our operation uses:** Terminal 1 as a non-hub-carrier operator is the expected assignment for K Global; confirm with handling given the dual-terminal split. 🟧
- **International arrivals / CBP-equivalent hall:** CIQ available with Schengen/Non-Schengen segregation by terminal; exact hall/hours not confirmed. 🟧
- **Notes:** No construction/terminal-transition programme confirmed for EDDM in reachable sources beyond the Terminal 1 stand 101–109 build-out noted above. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Terminal 2 satellite stands 243–256 (medium-body intermixed with widebodies); cargo apron stands 901–907 all widebody-capable. 🟧
- **Stands NOT usable by our types:** Terminal 1 stands 101–109 (under construction/not assigned) and 118–121 (reserved for elevated-security flights) are not general-purpose widebody assignments.
- **Remote / hardstand positions:** General aviation apron 13 (positions G11–G26) and aprons 7/8 — not typical for scheduled widebody service.
- **Contact vs remote for our arrivals:** Expect a contact stand for a scheduled K Global operation; confirm with handling.
- **Ground-movement stand caveats:** See [Briefing §13](index.md) — colour-coded (orange/blue) restricted taxi lines on W1, C3, E1, D3, D6 and E3 with wingspan-banded limits affect routing between stands and the runway system.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **Level 3 (fully coordinated)**; coordinator not independently confirmed in reachable sources. 🟧
- **Curfew / night restriction:** Reported core no-movement window **00:00–05:00** (emergency/government only), with **bonus-list-only** operations 22:00–24:00 and 05:00–06:00 for ICAO Annex 16 Chapter 3-compliant aircraft with individual noise ≤ ~75 dB(A) at the fixed monitoring points ("Munich List"); a per-night scheduled+charter movement cap (~28) has been reported but not confirmed against a primary source. 🟧
- **PPR:** Required in addition to slot coordination for non-scheduled/business aviation.
- **CTOT / flow control:** Not independently confirmed for EDDM specifically; EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a congested EU hub. 🟧
- **Commercial impact:** The night-noise regime and its bonus-list eligibility criteria are the dominant scheduling guardrail — build buffer to avoid a late/early rotation falling into the core no-movement window.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources — full major-hub handling is present on field per the Briefing §6, but the specific contracted handler for our operation is not confirmed. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 16 min / taxi-out 20 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard service times.
- **Services:** Push-back (via Apron, separate from start-up clearance), GPU/PCA, water/lav, catering and cabin services expected at a major-hub Code E stand.
- **Turnaround risk items:** Winter de-icing throughput (dedicated coordinator freq 121.990) and HIRO-driven runway/taxi sequencing are the recurring turnaround-stretch risks, not stand availability.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for the K Global operation specifically — treat as standard major-European-hub seasonality pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed in reachable sources. 🟧
- **Cargo / belly capacity:** Dedicated cargo apron (stands 901–907, widebody-capable) normally routed to depart the southern runway (08R/26L) to minimise taxi distance — confirm K Global belly/freighter uplift plans against payload at planning. 🟧
- **Connection banks:** Not applicable — EDDM is not a K Global base; treat as a point-to-point destination/alternate pending network-schedule confirmation.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 confirmed on field; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Not independently confirmed; assumed H24 given hub scale. 🟧
- **Price / tankering angle:** Assess price differential against home-base tankering economics per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EDDM itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — CIQ available, Schengen/Non-Schengen segregated by terminal.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme confirmed.
- **Late/overnight/diversion caveat:** The night-noise regime (core 00:00–05:00 no-movement window) is the dominant late/overnight constraint rather than immigration-desk staffing — a late arrival risks falling outside the bonus-list eligibility criteria. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — dedicated de-icing coordinator frequency (121.990). 🟩
- **Season:** Winter — humid continental climate (Köppen Dfb) drives frequent snowfall and persistent snow cover, generating significant de-icing demand.
- **Provisioning:** Pad/fluid-type detail and per-position throughput not confirmed in reachable sources. 🟧
- **Commercial impact:** Winter de-icing throughput is one of the two recurring planning constraints for a Munich rotation (alongside the night-noise/slot regime) — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Winter snowfall/de-icing demand and the night-noise/slot regime rather than runway length or terrain — both runways are non-limiting for any fleet type.
- **Ground-delay / flow-program exposure:** HIRO (High-Intensity Runway Operations) intersection-departure procedures compress runway occupancy at peak traffic; expect prompt-compliance taxi/take-off clearances. 🟧
- **On-time reliability picture:** Winter mornings (snow/de-icing) and any rotation pushing toward the core no-movement window (00:00–05:00) carry the highest schedule-risk exposure. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Airport charges are linked to aircraft noise level, monitored via 16 fixed noise-monitoring stations around the field (per airport literature, not independently verified). 🟧
- **Curfew infringement consequence:** Core no-movement window (00:00–05:00) is a hard restriction (emergency/government movements only); bonus-list eligibility for the 22:00–24:00/05:00–06:00 shoulder depends on aircraft noise class and per-night movement cap — confirm current figures against AIP/NfL before relying on a shoulder-hour slot.
- **Scheduling guardrails:** Build buffer into any rotation that could otherwise slip toward the 22:00 bonus-list threshold or the 00:00–05:00 core window; treat WTC H/J departures off 26L via OTT (requiring "W"-suffix SIDs 2200–0600) as a further night-routing constraint.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal assignment for the K Global operation (Terminal 1 vs Terminal 2/satellite).
- Contracted ground handling agent(s) and confirmed minimum turnaround time.
- Slot coordinator identity; exact CTOT/ATFM practice for EDDM specifically.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- Exact current night-noise regime boundary times, per-night movement cap, and dB threshold (core 00:00–05:00 window is consistently reported; shoulder-hour/cap figures are less consistently sourced).
- De-icing pad/fluid provisioning detail and peak throughput.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here. See <../../../_Templates/_Sources.md> for the tier hierarchy.*

- OpenNav — EDDM chart index — https://opennav.com/airport/EDDM (retrieved 2026-07-25).
- OurAirports — https://ourairports.com/airports/EDDM/ (retrieved 2026-07-25).
- Wikipedia — Munich Airport — https://en.wikipedia.org/wiki/Munich_Airport (retrieved 2026-07-25). *Terminal/apron layout, night-flight-ban and noise-monitoring/charge overview.*
- ASM (Aviation Services Management) — "Munich International Airport (MUC/EDDM) – Complete Operational Guide" — https://asm.aero/blog/munich-international-airport-muc-eddm/ (retrieved 2026-07-25). *Slot/PPR requirement, fuel/CIQ availability.*
- VATSIM Germany Knowledgebase — SOPs FIR München (see Briefing page for full citations). *HIRO procedure, de-icing coordinator frequency.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
