# EGBB — Birmingham · Dispatch Page

**EGBB / BHX** · Birmingham (Bickenhill, Solihull), England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EGBB Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** (not a base) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single terminal — Terminal Apron Stands 1–86, split North (Stands 40–60) / South (Stands 1–25) by Taxiway W, plus remote stands 70–86; Elmdon Apron (501–506) is the general-aviation/executive apron |
| Widebody stands available | 🟧 Not a widebody-oriented field for scheduled service; several stands are fitted for Code E aircraft (Safedock-guided) but K Global's R-category operation here is expected to be narrowbody/regional — confirm actual stand class needed |
| Slot regime | **IATA Level 3** (fully coordinated) — coordinator **Airport Coordination Limited (ACL)** |
| Curfew | **No absolute curfew**, but a **strict night-noise/Quota-Count regime** — QC>1 aircraft banned from scheduling 2330–0600 local 🟥 |
| Primary handling agent | Ground handling is **mandatory**; four named agents (Blue City, Signature, Swissport, XLR Executive Jet Centres) — specific K Global contractor not confirmed 🟧 |
| Fuel supplier(s) | AVTUR Jet A-1, bowser delivery, H24 — specific supplier/brand not individually named in reachable sources 🟧 |
| Customs / PoE for pax | **Yes** — H24, cleared on Stands 1–86 unless prior agreement |
| De-icing | **Available** — by arrangement with handling agents, H24 seasonal service; no dedicated centralised pad layout confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Birmingham operates a **single passenger terminal**. Stand assignment is separated by **Taxiway W into North (Stands 40–60) and South (Stands 1–25)** groupings, with remote/overflow stands 70–86 and a separate general-aviation/executive **Elmdon Apron (Stands 501–506)**.
- **Our operation uses:** Terminal Apron stand allocation for the K Global service is not confirmed in reachable sources — treat as any standard narrowbody contact or remote gate pending handling-agent confirmation. 🟧
- **International arrivals / CBP-equivalent hall:** International arrivals clear passport control/Customs on Stands 1–86 (the full terminal stand range) unless a prior agreement provides otherwise — a single-terminal field has no separate international pier logistics comparable to a multi-terminal hub.
- **Notes:** Stands 85–86 (all positions, C/L/R) are noted as unavailable/closed in at least one operational cross-check source (VATSIM UK live-data snapshot) — treat as a live-status item to confirm at planning, not necessarily a standing closure. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Several Terminal Apron stands (15, 16, 40, 41C, 42C, 54–58 series) carry Safedock docking guidance and apron-drive airbridges consistent with Code C/D/E use; not all are Code E-rated. Not expected to be a live consideration for the K Global R-category operation. 🟧
- **Stands NOT usable by our types:** No R-category-specific stand exclusion identified; general note that **Taxiway Foxtrot's bend** requires follow-me guidance for Code E aircraft due to reduced main-gear-to-pavement-edge clearance — a ground-routing, not a stand, constraint.
- **Remote / hardstand positions:** Remote/overflow Stands 70–86 exist on the Terminal Apron; all are marshaller-guided rather than Safedock-guided.
- **Contact vs remote for our arrivals:** Not confirmed — depends on handling-agent stand planning on the day. 🟧
- **Ground-movement stand caveats:** **Taxiway D is wingspan-restricted to 42 m between D4/D5** (larger aircraft routed via Taxiway E), and **self-manoeuvring on Terminal Apron stands is prohibited** without separate Airfield Operations approval — plan for a mandatory push-back/tow. See [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** **IATA Level 3** — coordinator **Airport Coordination Limited (ACL)**; commercial air transport movements must be cleared with ACL (SITA: LONACXH). 🟥
- **Curfew / night restriction:** No blanket movement ban, but the **night period (2330–0600 local)** carries a hard **QC>1 scheduling ban** (aircraft with a noise classification of 93 EPNdB or more, or QC>1 under the current Quota Count scheme, may not be scheduled in this window without exceptional Airfield Duty Manager approval), an **annual night QC limit reduced to 2,800**, and separate **Taxiway T/U and Stands 81–86 closures** overnight (Mon–Sat 2300–0700, Sun 2300–0800 local) except under night-flying-policy exemptions. 🟥
- **CTOT / flow control:** Not independently sourced for Birmingham specifically; standard UK/EUROCONTROL ATFM practice expected to apply during regulated periods. 🟧
- **Commercial impact:** The combination of Level 3 slot coordination and a genuinely strict night-noise regime makes **schedule integrity into and out of the night boundary** the dominant commercial guardrail at this field — a delayed rotation risking the 2330 boundary is a real compliance exposure, not merely an inconvenience.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Ground handling is **mandatory for all aircraft** at Birmingham; four named agencies are published — Blue City (0121-782 9300), Signature (0121-782 1999), Swissport (0121-767 7772), XLR Executive Jet Centres (0121-663 1450). The agent contracted for the K Global operation is not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 14 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — note this differs from the AIP's own generic flight-planning figure of a **15-minute standard taxi time** used for filed flight plans; the two are not in conflict (one is a company planning figure, the other a filing convention), but both should be understood by dispatch.
- **Services:** Push-back (effectively mandatory, given the self-manoeuvre prohibition on Terminal Apron stands), FEGP (fixed electrical ground power, fitted at all stands except 75–77), GPU/APU per the field's strict APU-use controls, standard cabin/catering/water-lav services expected at a single-terminal regional field.
- **Turnaround risk items:** Mandatory ground handling and mandatory push-back both add coordination dependency versus a self-manoeuvre field; the night-period Taxiway T/U and Stand 81–86 closures could affect a late-evening turn routed through that area; single-runway operation means any runway disruption cascades directly into ground delay with no parallel-runway relief.

---

## 6. Load factors & seasonality

- **Demand peaks:** Birmingham serves a broad UK regional catchment (West Midlands) with a mixed short-haul European, domestic, and some longer-haul leisure/VFR demand profile; specific K Global route-level demand data not held in this durable file.
- **Day-of-week / seasonal pattern:** Not independently sourced for EGBB specifically — treat as standard UK regional-airport business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Birmingham has dedicated cargo aircraft handling agents and transit sheds `[NATS eAIP AD 2.4]`; confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** As a destination (not a base), connection-bank timing is set by the network schedule rather than by local hub-wave structure — cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** AVTUR Jet A-1; specific into-plane brand/supplier not individually confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24, delivered by bowser (no dedicated hydrant system confirmed).
- **Price / tankering angle:** Assess price differentials against the home base and alternates per leg at planning — no EGBB-specific tankering signal held in this durable file.
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to this short/medium-haul European destination. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international arrivals/departures clear Customs on Stands 1–86 unless prior agreement provides otherwise.
- **CBP-equivalent / immigration hours:** **H24** `[NATS eAIP AD 2.3]`. 🟩
- **Pre-clearance / visa-transit notes:** Standard UK entry per nationality; no pre-clearance programme at EGBB.
- **Late/overnight/diversion caveat:** Customs is H24, so immigration staffing is not the binding late-night constraint — the **night-noise/Quota-Count regime** (§4) is the dominant late-operations constraint at this field instead. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — by arrangement with the airport's ground handling agents; published H24 as a year-round seasonal service. 🟩
- **Season:** Standard UK winter de-icing season (typ. Oct–Apr); no EGBB-specific seasonal statistic confirmed. 🟧
- **Provisioning:** No dedicated centralised remote de-icing pad layout was found in reachable sources (unlike some larger hub fields) — de-icing is arranged directly with the handling agent. 🟧
- **Commercial impact:** Single-runway operation means any de-icing queue directly affects the only runway's throughput, with no parallel-runway relief — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Single-runway operation with no redundancy — any runway-availability event (weather, incident, contamination) has an outsized effect versus a multi-runway field.
- **Ground-delay / flow-program exposure:** Not independently sourced for EGBB specifically; a Level 3 slot-coordinated single-runway regional field is expected to see standard UK ATFM flow management in peak/adverse conditions. 🟧
- **On-time reliability picture:** The night-noise/Quota-Count boundary (2330 local) is the clearest schedule-risk driver identified for this field — a late rotation risks a hard compliance boundary rather than just a soft delay cost. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Departure noise-monitor readings above **83 dB(A) Lmax** (measured 6.5 km from start-of-roll) during the night period incur a **runway surcharge**; this threshold was itself lowered from an earlier 85 dB(A) as part of a negotiated Section 106 tightening with the local planning authority.
- **Curfew infringement consequence:** No absolute movement ban exists, but scheduling a QC>1 aircraft in the 2330–0600 window is **not permitted outright** without exceptional Airfield Duty Manager approval — functionally a hard restriction for non-compliant equipment, and the **annual night QC allowance (2,800) is a hard seasonal ceiling** the airport and ACL actively manage against.
- **Scheduling guardrails:** Build buffer into any rotation that could slip toward the 2330 local boundary; confirm the noise-classification/QC rating of the assigned aircraft type against the current Night Flying Policy before scheduling any planned night movement at this field.

---

## Open items (🟧 — confirm against AIP / operator data)

- Ground handling agent contracted for the K Global operation (one of Blue City / Signature / Swissport / XLR Executive Jet Centres).
- Confirmed stand allocation/class for the K Global operation (Terminal Apron North/South vs remote 70–86).
- Fuel into-plane supplier/brand.
- Current-season annual night Quota Count and movement-share limits (figures used here are drawn from secondary reporting on a 2025/2026 planning-consent change, not the primary planning-condition document).
- EUROCONTROL CTOT/ATFM specifics for EGBB (general UK practice assumed, not independently EGBB-sourced).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Live stand-closure status (e.g. Stands 85–86) — a point-in-time cross-check source showed these closed; confirm current status at planning.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current night-quota utilisation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **NATS UK eAIP, AD 2 EGBB**, AIRAC effective 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGBB-en-GB.html (retrieved 2026-07-26).
- **NATS UK eAIP, AD 2 EGBB**, AIRAC effective 2022-06-16 (historical cycle, cross-check for local aerodrome regulations/night restrictions) — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGBB-en-GB.html (retrieved 2026-07-26).
- Airport Coordination Limited — "BHX Local Rule 1: Night Quota Allocation Procedures," v1.0, September 2025 — https://www.acl-uk.org/wp-content/uploads/2025/10/BHX_-Local-rule-1-_SEP2025_FINAL-VERSION.pdf (retrieved 2026-07-26). *Slot/night-quota mechanics.*
- UK CAA — "Airspace information: transparency about airspace use and aircraft movements — Birmingham Airport," April 2026 — https://www.caa.co.uk/media/4fcl35a4/birmingham-april-2026.pdf (retrieved 2026-07-26). *Night-period and slot-coordination confirmation.*
- BirminghamWorld — "Birmingham Airport gets permission for more night flights despite widespread opposition" — https://www.birminghamworld.uk/news/birmingham-airport-gets-permission-for-more-night-flights-despite-widespread-opposition-4937674 (retrieved 2026-07-26). *Annual night QC 4,000→2,800 — secondary source.*
- VATSIM UK — "EGBB | Birmingham" airfield information — https://www.vatsim.uk/airports/EGBB (retrieved 2026-07-26). *Network-sim, not regulatory — live stand-status cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
