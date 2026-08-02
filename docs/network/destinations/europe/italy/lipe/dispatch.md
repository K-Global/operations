# LIPE — Bologna/Borgo Panigale (Guglielmo Marconi) · Dispatch Page

**LIPE / BLQ** · Bologna, Emilia-Romagna, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LIPE Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** (network spoke, not a base) `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single terminal — all domestic, Schengen and international traffic handled in one building |
| Widebody stands available | **4 code-E stands** (or 9 code-C) on the newer "Lot III" apron (built 2023, ~42,000 m²) 🟧 |
| Slot regime | Reported inconsistently across sources (Yes vs N/A) — not resolved 🟧 |
| Curfew | **Yes — 23:30–05:00** night noise restriction 🟥 |
| Primary handling agent | **Aviapartner** (scheduled/commercial) 🟧 |
| Fuel supplier(s) | Jet A-1 assumed available; not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes**; exact desk hours not confirmed 🟧 |
| De-icing | Availability not confirmed; regional cold-season climate implies a winter requirement 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** LIPE operates a **single terminal building** — a simpler structure than a multi-terminal hub, with domestic, Schengen and international (non-Schengen) flows all handled within it. The terminal underwent a restyling/expansion (2011–2013); a further expansion (new departures/arrivals pier, +~25,000 m²) is publicly reported as planned to begin around 2027. 🟧
- **Our operation uses:** The single terminal — no concourse/pier choice to make at this field currently.
- **International arrivals hall:** Located within the single terminal; connection implications for onward network legs are limited to standard passport-control/baggage flow at a single-building field.
- **Notes:** 🟧 The reported 2027+ pier expansion is a forward-looking item — re-verify terminal configuration if planning near that timeframe.

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** The **"Lot III" apron** (built 2023, ~42,000 m²) provides **4 code-E stands, or 9 code-C stands** in the same footprint — this is the primary widebody-capable apron area. 🟧
- **Stands NOT usable by our types:** Narrowbody-oriented apron areas outside Lot III are not sized for code E/F — do not plan a widebody onto them.
- **Remote / hardstand positions:** All **24 departure gates are bus gates — there are no jetways** at this field; expect bus transfer to/from the aircraft for every stand, not only remote positions.
- **Contact vs remote for our arrivals:** Effectively all stands require apron bussing given the no-jetway layout; budget accordingly rather than assuming a contact-gate walk-on.
- **Ground-movement stand caveats:** Standard taxiway entry/exit assignment is reported as **TWY K (entry) / TWY J (exit)** 🟧 — cross-ref [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Reported inconsistently across tier-4 sources — one indicates a slot requirement, another indicates none. Not resolved this pass. 🟧
- **Curfew / night restriction:** **Formal night noise restriction 23:30–05:00.** Reported operating practice directs departures toward and arrivals from the Bargellino direction where possible (i.e. **RWY 30 departures / RWY 12 arrivals**) even at the cost of delay, unless weather/safety conditions preclude it; overnight movement capacity is reported at roughly half the daytime rate. Exemptions apply to state, military, humanitarian and search-and-rescue flights, and to ENAC-authorised flights. A recent year recorded only a small fraction of a percent of annual movements as night overflights of the city — indicating tight practical enforcement. 🟥
- **CTOT / flow control:** Standard EUROCONTROL Network Manager ATFM/CTOT regulation applies as general EU practice; no LIPE-specific regulation data independently sourced. 🟧
- **Commercial impact:** The **hard night restriction plus reduced overnight capacity** are the dominant scheduling guardrails at this field — build buffer into the last rotation of the day so a routine delay does not push a movement into the 23:30–05:00 window.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** **Aviapartner** provides ground handling for scheduled/commercial traffic at BLQ; **TAG Bologna** operates the separate business-aviation FBO/GAT. The specific handler contracted for a K Global operation is not confirmed. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 6 min / taxi-out 8 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times, with extra allowance for **bus-gate boarding/deplaning** given the no-jetway layout.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected as standard for a commercial international field; not individually itemised in reachable sources. 🟧
- **Turnaround risk items:** **Bus-gate boarding/deplaning adds time versus a contact-gate assumption at every stand**; single-runway capacity constraints during peak banks; winter de-icing-season queuing (season/provisioning unconfirmed).

---

## 6. Load factors & seasonality

- **Demand peaks:** LIPE serves Bologna and the Emilia-Romagna region; as a destination (not a base) for K Global, demand shape is set by the network schedule rather than by field-specific data sourced this pass. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for LIPE specifically. 🟧
- **Cargo / belly capacity:** Not independently sourced for LIPE specifically; the airport operator publishes a separate cargo-facility programme, not reviewed in this pass. 🟧
- **Connection banks:** Not applicable as a non-base destination — cross-ref the route register for the specific pairing's schedule logic.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available at this commercial international field; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24 assumed; not independently confirmed. 🟧
- **Price / tankering angle:** No LIPE-specific price signal sourced this pass — assess tankering economics against the outbound leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LIPE itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — within the single terminal.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme at LIPE.
- **Late/overnight/diversion caveat:** The **23:30–05:00 night restriction** is the dominant late/overnight constraint at this field rather than immigration-desk staffing — a delayed arrival pushing into the curfew window carries real diversion/delay consequence (§4). 🟥

---

## 9. De-icing provisioning & season

- **Availability:** Not confirmed in reachable public sources. 🟧
- **Season:** Not confirmed; the region's winter fog/inversion climate (§Briefing §14) implies a plausible cold-season requirement, but this is not a sourced statement. 🟧
- **Provisioning:** Not confirmed — fluid type, pad location and throughput are unverified. 🟧
- **Commercial impact:** Winter radiation fog/LVP restriction to RWY 12 (§Briefing §10) is the clearer, better-sourced winter reliability risk at this field than de-icing specifically — build winter schedule buffer accordingly regardless. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Winter Po Valley radiation fog**, which is reported to restrict operations to RWY 12 only when low-visibility procedures are in effect — a real single-runway-plus-LVP interaction risk (§Briefing §3.5/§3.4).
- **Ground-delay / flow-program exposure:** Single-runway capacity is the structural constraint; any runway-condition NOTAM is a full-field-stop event with no parallel-runway fallback. 🟧
- **On-time reliability picture:** Winter mornings (fog/LVP-to-RWY-12) and the hard 23:30–05:00 night restriction carry the field's clearest schedule-risk exposure. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources — no LIPE-specific noise-surcharge figure found this pass. 🟧
- **Curfew infringement consequence:** The 23:30–05:00 restriction is enforced through a movement/runway-direction rule with reduced overnight capacity rather than a stated per-movement charge; recent-year data shows very few (well under 1%) of annual movements occurring as night overflights of the city — indicating tight practical enforcement (§4).
- **Scheduling guardrails:** Build buffer into the last rotation of the day so a routine operational delay does not push a landing or departure into the 23:30–05:00 window; treat any schedule slipping toward the curfew boundary as a **delay/diversion-risk trigger**.

---

## Open items (🟧 — confirm against AIP / operator data)

- Slot-coordination requirement (reported inconsistently across sources).
- Ground handling agent(s) actually contracted for our operation, and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- De-icing availability, season and provisioning.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Noise-charge/surcharge regime, if any.
- EUROCONTROL CTOT/ATFM specifics for LIPE (general EU practice assumed, not independently sourced).

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current LVP status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- Wikipedia — "Bologna Guglielmo Marconi Airport" — https://en.wikipedia.org/wiki/Bologna_Guglielmo_Marconi_Airport (retrieved 2026-07-26). *Terminal structure, gates, historical widebody service.*
- Aeroporto di Bologna (bologna-airport.it) — press release on night flight activity measures — https://www.bologna-airport.it/en/the-company/press-room/press-release/the-measures-regarding-night-time-flying-activity-to-avoid-take-offs-and-landings-on-the-city-of-bologna-have-been-confirmed/?idC=62420&idO=2612303 (retrieved 2026-07-26). *Night noise-abatement/curfew regime.*
- AC-U-KWIK — https://acukwik.com/Airport-Info/LIPE (retrieved 2026-07-26). *Customs/slot/handling-related fields.*
- Aviapartner — Bologna station page — https://www.aviapartner.aero/bologna (retrieved 2026-07-26). *Ground-handling presence at BLQ.*
- Full source set and tier notes: see the [LIPE Briefing](index.md) Sources & References.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
