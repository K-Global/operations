# LIPZ — Venice/Tessera (Marco Polo) · Dispatch Page

**LIPZ / VCE** · Tessera, Venice, Veneto, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, cross-checked

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LIPZ Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** — not a K Global base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single main passenger terminal (ground floor arrivals; upper floor departures with 70 check-in desks and a confirmed **Schengen/non-Schengen split**) |
| Widebody stands available | Not confirmed in reachable sources; VDGS confirmed at stand 433 and stands 322–330 🟧 |
| Slot regime | Not confirmed in reachable sources 🟧 |
| Curfew | No explicit curfew found; Ground ATS at ATC discretion 2300–0500L 🟧 |
| Primary handling agent | Not confirmed for scheduled-carrier ops; named GA/business-aviation handlers documented for PPR traffic only 🟧 |
| Fuel supplier(s) | **Levorato Marcevaggi S.r.l.** and **Carboil S.r.l.** (Jet A-1) |
| Customs / PoE for pax | **Yes** — Schengen/non-Schengen terminal split confirmed; desk hours not confirmed 🟧 |
| De-icing | Availability/season not confirmed in reachable sources 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** A single main passenger terminal of three floors — ground floor for arrivals, upper floor for departures (70 check-in desks, two airside lounges: the "Tintoretto Lounge" for SkyTeam and the "Marco Polo Room" for other passengers), top floor for operator/airline offices. The departure floor has a **confirmed separate Schengen/non-Schengen area**.
- **Our operation uses:** Gate/concourse assignment for our operation not confirmed in reachable sources. 🟧
- **International arrivals / CBP-equivalent hall:** International (non-Schengen) arrivals clear passport control on the ground floor in the non-Schengen arrivals area; exact hall/desk detail not confirmed. 🟧
- **Notes:** LIPZ is a major seasonal/leisure-driven international gateway serving Venice; confirm current gate/stand assignment with handling before finalising a stand plan. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed in reachable sources; VDGS is confirmed available at stand 433 and stands 322–330, which is at minimum consistent with contact-gate widebody handling somewhere on the apron. 🟧
- **Stands NOT usable by our types:** Not confirmed in reachable sources. 🟧
- **Remote / hardstand positions:** Not confirmed in reachable sources; a general-aviation apron area exists for PPR-based light/business traffic, separate from scheduled-carrier stands. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — verify with handling. 🟧
- **Ground-movement stand caveats:** When RWY 04R/22L is the active runway, **RWY 04L/22R is itself used as taxiway "T"** — see [Briefing §13](index.md) and the Departure/Arrival taxi sections. Taxiways Y, KA and KB carry hard traffic-type restrictions (Aeronavali/Polizia di Stato/Vigili del Fuoco-Guardia di Finanza respectively).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable sources. 🟧
- **Curfew / night restriction:** No explicit curfew found. Ground ATS service is published 0500–2300L with **ATC discretion** overnight (2300–0500L) — this suggests reduced rather than prohibited night activity, but treat as unconfirmed. 🟥 (flagged red pending confirmation, given the operational consequence if wrong)
- **CTOT / flow control:** Not independently confirmed for LIPZ; local practice (per a network-sim operational reference) is to request departure clearance ahead of start-up. 🟧
- **Commercial impact:** Given the field's functionally single-runway-pair model (04R/22L, with 04L/22R held in reserve), any disruption to the main pair has an outsized effect on schedule integrity compared with a field carrying genuine independent parallels.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed for scheduled-carrier operations in reachable sources. The airport operator, **SAVE S.p.A.**, coordinates PPR for general-aviation/business traffic through three named handlers (SAVE Venice General Aviation, Sky Services, Argos V.P.H.) — these are documented for GA, not necessarily representative of our scheduled-carrier ground handling. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times for the assigned type.
- **Services:** Push-back requires ATC approval (Venezia TWR/GND) before commencing; standard push-back, GPU/PCA, water/lav, catering and cabin services are expected at a destination-tier international gateway, though not individually confirmed for LIPZ.
- **Turnaround risk items:** The field's reliance on a single active runway pair (with the parallel held in reserve) makes any main-pair disruption (maintenance, contingency, or a low-vis event pushing operations toward the non-CAT-III direction) a direct source of turnaround/schedule risk.

---

## 6. Load factors & seasonality

- **Demand peaks:** LIPZ is a major leisure/tourism gateway for Venice with pronounced seasonality — summer and shoulder-season (spring/early autumn) demand is materially higher than winter, consistent with its role as a European city-break and cruise/tourism hub. 🟧 (general characterisation, not LIPZ-specific statistics)
- **Day-of-week / seasonal pattern:** Not independently sourced for LIPZ specifically — treat as a leisure-skewed pattern with weekend/holiday peaks pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not confirmed in reachable sources for this field. 🟧
- **Connection banks:** As a destination (not a K Global base), LIPZ's schedule is set by the network route register rather than by local connection-bank structure.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 via **Levorato Marcevaggi S.r.l.** (540,000 L capacity, 9 tankers) and **Carboil S.r.l.** (≈394,000 L capacity, 8 tankers, formerly operating as Q8-branded supply before a 2026 rebrand). 🟩
- **Uplift availability & hours:** Published hours **0500–2100L (0400–2000Z)**; H24 available within **90 minutes prior notice** for humanitarian, state, hospital, emergency and diverted flights, coordinated through SAVE S.p.A. 🟩
- **Price / tankering angle:** Not independently sourced for LIPZ — assess price differential to/from base per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LIPZ itself given its temperate, near-sea-level setting.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — confirmed international gateway with a dedicated Schengen/non-Schengen split on the departure floor.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed to track scheduled international-flight hours. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified for LIPZ.
- **Late/overnight/diversion caveat:** No explicit curfew was found, but overnight Ground ATS is at ATC discretion rather than guaranteed — a late arrival's practical viability (stand availability, handling, customs staffing) is not confirmed for the overnight window. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed in reachable public sources. 🟧
- **Season:** Not confirmed; LIPZ's maritime, near-sea-level Veneto climate makes de-icing a materially lower-probability requirement than at Alpine or continental Italian fields, but presence/procedure is not documented in the sources reached this pass. 🟧
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Pending confirmation, treat any winter operation as carrying an unquantified de-icing delay risk rather than assuming a robust dedicated pad system exists. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Lagoon/coastal fog** at this near-sea-level field, compounded by the fact that CAT III/LVTO capability exists on **RWY 04R only** — a fog event coinciding with a wind favouring the reciprocal or backup runway direction is the field's principal reliability exposure.
- **Ground-delay / flow-program exposure:** Not independently confirmed; traffic density is moderate rather than hub-level, but the functionally single-active-runway-pair model raises sensitivity to any main-pair disruption. 🟧
- **On-time reliability picture:** Winter/shoulder-season fog events are the standing seasonal risk window; confirm current performance data is not held in this durable file. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources. 🟧
- **Curfew infringement consequence:** No explicit curfew identified — treat this as unconfirmed rather than as evidence of unrestricted night operations; verify before relying on a late-rotation schedule. 🟥
- **Scheduling guardrails:** Given the CAT-III-on-one-runway-direction-only constraint and the unconfirmed overnight regime, build schedule buffer around both the last rotation of the day and any marginal-weather arrival window.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate/stand assignment for our operation, and widebody (Code E) stand availability.
- Slot-coordination level and any curfew — no explicit curfew found, but overnight ATS is at ATC discretion, not confirmed as unrestricted.
- Scheduled-carrier ground handling agent and confirmed minimum turnaround time.
- Customs/immigration desk hours.
- De-icing availability, season and provisioning.
- Noise-charge regime.
- Day-of-week/seasonal load pattern and cargo/belly capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current LVP/CAT III equipment status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- Wikipedia — "Venice Marco Polo Airport" — https://en.wikipedia.org/wiki/Venice_Marco_Polo_Airport (retrieved 2026-07-26). *Terminal layout, Schengen/non-Schengen split, operator.*
- Aeronautical Information (Fabio Patrassi) — "Aeroporti di Venezia Tessera e Venezia Lido" — https://aeronauticalinformation.it/index.php/2022/10/05/aeroporti-di-venezia-tessera-e-venezia-lido/ (retrieved 2026-07-26). *Fuel suppliers/hours, PPR/GA handling arrangements, taxiway restrictions, apron VDGS locations — quotes current AIP text with AIRAC amendment references. Site also covers the separate Venezia Lido (LIPV) aerodrome; content specific to LIPV was excluded from this page.*
- Aeronautical Information (Fabio Patrassi) — "La Control Zone di Venezia" — https://aeronauticalinformation.it/index.php/2022/09/28/la-control-zone-di-venezia/ (retrieved 2026-07-26). *ATS/ATC structure context.*
- POSCON Pilot Resources — "LIPZ / VCE - Tessera" — https://forums.poscon.net/docs/pilots/eur/ita/lipz/ (retrieved 2026-07-26). *Network-sim operational reference — push-back/APU procedure, LVP criteria, preferential-runway logic. Not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
