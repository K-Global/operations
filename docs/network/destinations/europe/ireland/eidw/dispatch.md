# EIDW — Dublin International · Dispatch Page

**EIDW / DUB** · Dublin, Ireland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EIDW Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / non-hub field** — K Global base = **No** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not confirmed — Dublin operates **Terminal 1** and **Terminal 2**; T2 hosts the US CBP preclearance facility 🟧 |
| Widebody stands available | Not confirmed in reachable sources 🟧 |
| Slot regime | Referenced network-wide as **IATA Level 3** (fully coordinated) 🟧 |
| Curfew | **No whole-field curfew** found; the **North Runway (10L/28R) carries a night-time operating restriction** tied to its planning conditions 🟥 |
| Primary handling agent | Not confirmed in reachable sources 🟧 |
| Fuel supplier(s) | Jet A-1, major-hub multi-supplier assumed; not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — US preclearance in T2; general immigration desk hours not confirmed 🟧 |
| De-icing | Available (Irish winter season, typ. Nov–Mar); exact provisioning not confirmed |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** and **Terminal 2** — T2 is the newer, larger terminal and hosts the **US CBP preclearance facility**, making it the natural terminal for any US-bound precleared service; T1 handles the remainder of the schedule mix. Exact concourse/pier layout and current gate map not confirmed in reachable sources. 🟧
- **Our operation uses:** Not confirmed — assign per current handling instruction; a European short/medium-haul K Global service would plausibly use whichever terminal the network's Irish handling agreement designates. 🟧
- **International arrivals / preclearance hall:** T2 international arrivals include the CBP preclearance hall for US-bound departures (a *departure*-side facility, not an arrivals process for inbound flights) — relevant to gate/connection planning for any US-bound onward leg, not to a K Global arrival itself.
- **Notes:** Ireland is **not** in the Schengen Area — all non-Common-Travel-Area arrivals, including intra-EU flights, clear Irish immigration control on landing; build connection/arrival-hall time accordingly. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed in reachable sources. 🟧
- **Stands NOT usable by our types:** Not confirmed. 🟧
- **Remote / hardstand positions:** Availability not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — assume contact stand for a scheduled destination turn pending local confirmation.
- **Ground-movement stand caveats:** **RWY 16/34 doubles as a daytime taxiway** for 10R/28L traffic — a routing detail relevant to any stand-to-runway taxi plan; see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Referenced network-wide as **IATA Level 3**; exact coordinator body and current designation for EIDW not independently confirmed. 🟧
- **Curfew / night restriction:** No whole-airfield curfew found in reachable sources — Dublin operates H24. However, the **North Runway (10L/28R) carries a night-time operating restriction** attached to its 2007 planning permission (31 conditions); this has been the subject of an ongoing regulatory dispute between the airport operator and the planning/noise authority since the runway's August 2022 opening. Exact current permitted-movement numbers, hours and enforcement status are **not confirmed in reachable sources** — treat as a live item to verify, not a fixed figure. The older runway (10R/28L) carries no equivalent restriction in reachable sources. 🟥
- **CTOT / flow control:** Not independently confirmed for EIDW; EUROCONTROL Network Manager ATFM/CTOT regulation is plausible for a busy, coordinated field but not sourced. 🟧
- **Commercial impact:** Given the referenced Level 3 regime, schedule integrity (on-time pushback/landing) has real network consequences; a late-evening rotation that might depend on the North Runway should be planned with margin against its night-time restriction until the exact figures are confirmed.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 16 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a major-international-hub Code C/D stand (standard provision assumption, not individually confirmed). 🟧
- **Turnaround risk items:** Wind/gust conditions affecting ground-service operations (e.g. jet-bridge/GPU connection in high wind), winter de-icing throughput, and general peak-bank gate availability at a high-traffic field.

---

## 6. Load factors & seasonality

- **Demand peaks:** As a non-hub destination field, demand follows the K Global network schedule rather than local commercial data; Dublin itself carries strong intra-European and transatlantic demand generally, meaning terminal/slot congestion at peak banks is a realistic planning consideration. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for K Global's specific EIDW service — treat as standard European leisure/business mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not confirmed in reachable sources. 🟧
- **Connection banks:** Not applicable at a non-hub destination field — cross-ref the route register for this leg's specific schedule position.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available as a major international hub; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24 assumed; not independently confirmed. 🟧
- **Price / tankering angle:** Not independently assessed — evaluate at planning per [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration specific to EIDW itself for typical European sector lengths.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — standard Irish immigration control on all non-CTA arrivals (Ireland is outside the Schengen Area).
- **US preclearance:** Terminal 2 hosts a **US CBP preclearance facility** for US-bound departures — precleared passengers are handled as domestic arrivals on landing in the US. This is a *departure*-side process relevant to onward US legs, not to a K Global arrival at EIDW.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub H24 or near-H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** Standard non-Schengen entry per nationality; the UK–Ireland **Common Travel Area (CTA)** means no routine passport control for CTA journeys, but this does not extend to other states' passengers.
- **Late/overnight/diversion caveat:** No whole-field curfew constrains a late arrival; confirm overnight immigration-desk staffing before planning a very late/early rotation. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Available in season; exact pad/gate location and provisioning method **not confirmed in reachable sources**. 🟧
- **Season:** Typical Irish maritime winter — genuine but less frequent/severe frost-and-snow de-icing need than continental Europe, roughly **Nov–Mar**.
- **Provisioning:** Not confirmed — fluid type/holdover and throughput capacity not published. 🟧
- **Commercial impact:** Combined with the field's routine wind/rain exposure, winter frontal passages (wind + rain + occasional frost) are the more likely seasonal delay driver than snow/ice alone. See [OM E — Cold Weather Operations](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Atlantic wind/gust conditions** — strong or gusty surface wind, particularly during frontal passages, is the field's most routine reliability factor, ahead of snow/ice or fog.
- **Ground-delay / flow-program exposure:** Not independently confirmed; plausible at peak banks given Dublin's traffic volume as Ireland's principal gateway. 🟧
- **On-time reliability picture:** Winter Atlantic frontal-system days (wind, rain, occasional low-vis fog) carry the highest weather-driven schedule-risk exposure at this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources. 🟧
- **Curfew infringement consequence:** No whole-field curfew found; the **North Runway (10L/28R) night-time restriction** is the relevant infringement-risk item — exact consequence/enforcement mechanism not confirmed. 🟥
- **Scheduling guardrails:** Until the North Runway restriction's exact figures are confirmed, treat any late-evening/early-morning rotation that might depend on 10L/28R as carrying schedule risk; build buffer or plan on 10R/28L where possible.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/gate assignment for a K Global service.
- Ground handling agent(s) and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Immigration desk hours (general, non-preclearance).
- Slot-coordination level and coordinator body — referenced as Level 3 network-wide, not independently re-sourced for EIDW.
- North Runway (10L/28R) night-time operating restriction — exact current movement caps/hours and enforcement status.
- Noise-charge regime, if any.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- De-icing pad location/provisioning detail.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current North Runway night-restriction NOTAM status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/EIDW/ (retrieved 2026-07-26).
- SkyVector — https://skyvector.com/airport/EIDW/Dublin-Airport (retrieved 2026-07-26).
- Wikipedia — "Dublin Airport" — https://en.wikipedia.org/wiki/Dublin_Airport (retrieved 2026-07-26). *Terminal 1/Terminal 2 structure, US preclearance location.*
- Wikipedia — "United States border preclearance" — https://en.wikipedia.org/wiki/United_States_border_preclearance (retrieved 2026-07-26). *Dublin preclearance operational history.*
- Wikipedia — "DAA (company)" — https://en.wikipedia.org/wiki/DAA_(company) (retrieved 2026-07-26). *Operator background, North Runway cost/timeline.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
