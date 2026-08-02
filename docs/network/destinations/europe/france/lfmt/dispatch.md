# LFMT — Montpellier-Méditerranée · Dispatch Page

**LFMT / MPL** · Montpellier (Mauguio), Hérault, Occitanie, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFMT Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / spoke** — not a K Global base `[VAMSYS mirror 2026-07-26]` |
| K Global aerodrome category | **R** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single passenger terminal (see §2) |
| Widebody stands available | **None usable** — RWY 12L/30R wingspan/gear-width restriction caps this field at Code C; stands rated to A321-Neo/737-800 class only 🟥 |
| Slot regime | **IATA Level 1** (facilitated, not fully coordinated) |
| Curfew | No hard night-flight ban found; hours/services modulated to scheduled traffic 0500–2100/2200 🟧 |
| Primary handling agent | Mandatory prior-agreement handling for non-based aircraft > 6 t — three agencies operate at the field (see §5) 🟧 |
| Fuel supplier(s) | Jet A-1 (CIV-MIL), 0300–2200 with 30-min PN |
| Customs / PoE for pax | **Yes** — 0500–2200; 7 hr PN + GenDec required outside these hours 🟧 |
| De-icing | **Available** — single mobile unit, by prior agreement only 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** LFMT operates a single passenger terminal building with commercial aprons (Parkings B/C/D) plus dedicated general-aviation/business-aviation and freight aprons (Parkings A, E, F, FR). There is no multi-terminal split of the kind seen at larger hubs.
- **Our operation uses:** Commercial-class contact stands in the B/C/D series rated to A321-Neo/737-800 wingspan (~36 m) are the effective ceiling for scheduled K Global service — see Briefing §13 and §3 below.
- **International arrivals / CBP-equivalent hall:** Standard Schengen/non-Schengen international arrivals hall; customs available 0500–2200 (§8).
- **Notes:** 🟧 Exact gate/stand assignment for a given rotation is set by Ground/Apron on the day — confirm at planning.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟥 **None available for use.** RWY 12L/30R's AIP-published wingspan (>36 m) / main-gear-width (>9 m) prohibition rules out any widebody type at this field without a 3-month PN safety-assessment exception (Briefing §5/§7). Stands **D2** (studied for B757/A310-class critical aircraft) and **D9** (studied for B747-400-class critical aircraft) are geometrically sized but the AIP explicitly notes the **surrounding movement area is not certified for that traffic** — do not plan a widebody onto either regardless of stand geometry.
- **Stands NOT usable by our types:** The general-aviation stand groups (A1–A6, E1–E9, F1–F8) are sized for light aircraft/business jets (max wingspan ~29 m, several restricted to well under Code C) — not suitable for scheduled narrowbody service.
- **Remote / hardstand positions:** Not confirmed as a distinct category in reachable sources beyond the standard commercial apron (B/C/D) contact stands — confirm with handling if a contact gate is unavailable. 🟧
- **Contact vs remote for our arrivals:** Expect a contact commercial-class stand (B/C/D series) for a scheduled Code C rotation.
- **Ground-movement stand caveats:** Several taxiways (J, M, T1–T6, V, W1, W2, Y) are restricted to aircraft with undercarriage width < 9 m — consistent with the runway's own restriction, but confirm routing with Ground. TWY W1 carries a documented **no-entry-bar lighting gap** — see [Briefing §13](index.md) and the Departure/Arrival taxi sections. Push-back is **mandatory** ("P") at most commercial-class stands (B2/B3, C2/C3, D1/D4–D6, D8); a few permit autonomous departure under specific conditions — confirm per stand.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 1** (facilitated schedule, not fully coordinated) per the French airport slot coordinator. 🟧
- **Curfew / night restriction:** No hard night-flight ban found in the reachable AIP extract. AD administration, security and customs hours are **modulated to scheduled commercial traffic** (broadly 0500–2100/2200) rather than published as H24 blanket coverage; ATS itself is H24. Noise-preferential routing shifts departures to RWY 12L overnight (2100–0700 local summer −1 hr, until 5 kt tailwind and vis > 1,900 m). **RFF steps down from Level 7 to Level 5 between 2200–0500** unless extended by 24 hr PN. 🟧
- **CTOT / flow control:** No LFMT-specific CTOT regime confirmed; standard EUROCONTROL Network Manager flow measures may still apply during regional congestion or adverse weather. 🟧
- **Commercial impact:** The overnight RFF step-down and the modulated (non-H24) administration/customs/handling hours are the two biggest scheduling guardrails here — a late-night arrival/departure needs its RFF cover and handling/customs availability confirmed rather than assumed.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Ground handling for any non-based aircraft over 6 t is **mandatory by prior agreement** — three agencies are published for the field, distinguished by contact frequency (131.400 MHz, 131.485 MHz, and a third dedicated mainline-carrier ground-handling/de-icing agreement holder — see Briefing §4). Confirm the contracted agency for our operation. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 6 min / taxi-out 8 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard narrowbody service times.
- **Services:** Push-back (mandatory at most commercial stands), GPU, potable water/lav, catering and cabin services expected at a standard Code C contact stand; fuelling per §7.
- **Turnaround risk items:** The **single field-wide mobile de-icing unit** is the standout turnaround-risk item in winter — plan buffer if de-icing is required. Mandatory-handling-agreement administration for any non-routine rotation, and the field's non-H24 administration hours, are secondary risk items.

---

## 6. Load factors & seasonality

- **Demand peaks:** Montpellier is a regional/leisure and business destination on the Mediterranean coast — expect the standard European coastal-city seasonal pattern (summer leisure peak) overlaid on a business/regional base load. No LFMT-specific K Global demand data available at this pass. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for this field — treat as standard regional coastal-destination business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Dedicated freight aprons (FR1–FR5) exist at the field; belly-cargo uplift plans for our operation not independently confirmed. 🟧
- **Connection banks:** As a spoke destination (not a hub), LFMT's schedule is set by the network's connection-bank timing at the originating hub — cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 (CIV-MIL grade) available; specific into-plane provider not individually named in reachable public sources beyond the AIP's own fuelling-facility listing. 🟧
- **Uplift availability & hours:** **0300–2200 local**, 30-min prior notice; outside these hours a **night-duty call-out** applies (1 hr response time, surcharge billed for the night shift). 🟩
- **Price / tankering angle:** Not independently sourced this pass — assess price differentials against the departure hub/base per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to this short/regional-haul destination. **No defueling capability** exists at this field — plan uplift accordingly.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — standard Schengen/non-Schengen international arrivals processing.
- **CBP-equivalent / immigration hours:** **0500–2200 local**; outside these hours, **7 hr prior notice plus a mandatory GenDec email** is required for non-scheduled flights. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at LFMT.
- **Late/overnight/diversion caveat:** A scheduled arrival outside 0500–2200 needs the 7 hr PN/GenDec requirement satisfied in advance — this is an administrative gate, not a hard movement ban, but treat it as a genuine constraint on any late-night diversion into this field. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Available**, but limited to a **single mobile de-icing unit field-wide**, arranged only by prior agreement with the contracted ground-handling agency. 🟧
- **Season:** Winter snow-plan validity is published as **1 December–31 March**; de-icing product is a proprietary anti-icing fluid (per AIP). 🟩
- **Provisioning:** With only one unit available, simultaneous multi-aircraft de-icing is **not possible** — a materially different throughput profile from a major-hub field with multiple pads.
- **Commercial impact:** This is the single biggest winter reliability risk at LFMT — any scheduled rotation coinciding with a de-icing requirement should expect a queuing delay if another aircraft is being treated first. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Tramontane/mistral-family wind events and Mediterranean convective storms** — the latter directly implicated in a September 2022 runway-excursion accident on RWY 12L (see Briefing §3.3/§14). 🟥
- **Ground-delay / flow-program exposure:** Not independently sourced as a distinct LFMT statistic; regional EUROCONTROL flow measures may apply in adverse weather or wider network congestion. 🟧
- **On-time reliability picture:** Late-summer/autumn convective-storm season and the single-de-icing-unit winter constraint are this field's two highest schedule-risk periods. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** No published per-movement dB surcharge found in reachable sources; noise management here is via preferential-runway routing (approaches on 30R, night departures on 12L) and training-flight acoustic-group restrictions rather than a numeric charge schedule. 🟧
- **Curfew infringement consequence:** No hard curfew identified — the operative overnight constraints are the **RFF step-down to Level 5** (2200–0500) and the **customs 7 hr PN/GenDec requirement** outside 0500–2200, both administrative/coverage gates rather than a movement ban.
- **Scheduling guardrails:** Build schedule buffer so a normal operational delay does not push a rotation into the overnight window without first confirming RFF extension and customs pre-notice — treat any schedule slipping toward the 2200–0500 window as a **coordination-risk trigger**, not an automatic bar.

---

## Open items (🟧 — confirm against AIP / operator data)

- Specific contracted ground-handling agency and confirmed minimum turnaround time for our operation.
- Fuel into-plane provider identity (beyond the AIP's own facility listing).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- LFMT-specific ATFM/ground-delay program exposure (general EUROCONTROL practice assumed, not independently sourced for this field).
- Take-off minima and exact LVP/CAT I RVR trigger values (cross-ref Briefing §18).

> **Live data — pull at planning:** fuel price, slot file, current ATFM/ground-delay program, demand/load, stand allocation, de-icing unit availability status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **SIA France eAIP, AD 2 LFMT** (AIRAC cycle 11 JUN 2026, amendment 05/26, eff. 2026-05-14) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFMT-fr-FR.html (retrieved 2026-07-26). *Hours, handling, fuelling, customs, de-icing, stand data, RFF, slot/local-traffic regulations.*
- COHOR — https://www.cohor.org/en/airports/aeroport-de-montpellier-mediterranee-mpl-lfmt/ (retrieved 2026-07-26). *IATA Level 1 slot designation.*
- Wikipedia — "Montpellier–Méditerranée Airport" — https://en.wikipedia.org/wiki/Montpellier%E2%80%93M%C3%A9diterran%C3%A9e_Airport (retrieved 2026-07-26). *September 2022 runway-excursion accident context (see Briefing page for full citation).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
