# LFLL — Lyon-Saint Exupéry · Dispatch Page

**LFLL / LYS** · Colombier-Saugnieu (Lyon), Rhône, Auvergne-Rhône-Alpes, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LFLL Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / spoke**, Category **S** — not a base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Three terminals (T1/T2/T3) on a single parallel taxiway; specific terminal assignment for our operation not confirmed 🟧 |
| Widebody stands available | Not itemised by count in reachable sources; widebody aircraft are reported to occupy paired/double stand positions at some gates (blocking the adjacent single stand) 🟧 |
| Slot regime | Not confirmed 🟧 |
| Curfew | **No blanket curfew**; noisiest-aircraft (Chapter 3, <13 EPNdB) restriction 22:00–06:00 since Feb 2023 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Not confirmed 🟧 |
| Customs / PoE for pax | Presumed **Yes** (Schengen-external-border scheduled service); exact desk hours not confirmed 🟧 |
| De-icing | **Available** — season mid-Nov to mid-Apr, potassium-formate fluid |

---

## 2. Terminals & concourses

- **Terminal layout:** Three terminals (T1, T2, T3) share a single taxiway (parallel to the long runway, 17R/35L) for ground access to the runway system, along with a dedicated cargo apron and a general-aviation parking area. Terminal-specific facilities/split (domestic vs international, low-cost vs full-service) are not itemised in reachable sources beyond a general note that one terminal handles a simpler/lower-cost passenger flow. 🟧
- **Our operation uses:** Not yet confirmed — assign per handling coordination; no K Global-specific gate/terminal precedent established at this Category-S field. 🟧
- **International arrivals / CBP-equivalent hall:** Presumed present given scheduled international/Schengen-external service; hall location and connection implications not confirmed. 🟧
- **Notes:** A dedicated **SNCF TGV/OUIGO railway station** (with the **Rhônexpress** tram terminus on its level −1) sits immediately adjacent to the terminal complex — a genuine passenger/crew rail-connection asset (≈30 French/Italian cities served daily; central Lyon reachable in under 30 minutes by tram) worth factoring into crew logistics or interline/rail-air planning, though it is not itself an airside operational factor. 🟩

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not itemised by count; some gates are reported to take a widebody on a paired/double stand basis (blocking the adjacent single stand) rather than on dedicated Code E/F positions — confirm current gate map with handling. 🟧
- **Stands NOT usable by our types:** A small number of stands and one apron sector are reported closed in the operational reference used for cross-check; the largest Code F aircraft (A380/B747-8/An-124 class) reportedly have a restricted taxi routing at this field — confirm against the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) if operating any type in that class. 🟧
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Not confirmed; assume contact-gate handling as standard for scheduled service pending confirmation. 🟧
- **Ground-movement stand caveats:** Several stands carry **push-back-direction restrictions** in the operational reference used for cross-check (e.g. certain stands prohibited from pushing back toward south, east or west) — confirm the specific restriction for the assigned stand with Ground/Apron before pushback. See [Briefing §13](index.md) and the Departure/Arrival taxi sections. 🟧

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not confirmed in reachable sources. 🟧
- **Curfew / night restriction:** **No blanket curfew identified.** A **noisiest-aircraft restriction** applies **22:00–06:00**: aircraft classified under Chapter 3 with a cumulative noise margin below 13 EPNdB are prohibited in that window, effective 1 February 2023 (intended to reduce nighttime noise by roughly 4 dB versus the prior regime). Modern K Global equipment is very likely compliant with this margin, but confirm against current type-certification data for any older airframe. 🟧
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard EU practice; not independently LFLL-sourced this pass. 🟧
- **Commercial impact:** Absent a hard curfew, the main scheduling guardrail here is the **noisiest-aircraft night window** rather than a movement ban — confirm fleet compliance rather than building blanket night-avoidance buffer.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 12 min / taxi-out 14 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times for the assigned type.
- **Services:** Not itemised in reachable sources beyond standard-service assumption for scheduled international operations (push-back, GPU/PCA, water/lav, catering, cabin clean expected as a baseline). 🟧
- **Turnaround risk items:** The **dependent-runway pair** (§Briefing §3.3) constrains sequencing capacity at both ends of the turn; the **push-back-direction restrictions** at some stands (§3) can add coordination time; winter de-icing-pad throughput (mid-Nov–mid-Apr) is a seasonal factor.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for this specific field — treat as standard French regional/international mixed business-leisure demand pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** A dedicated cargo apron exists at the field; K Global belly-cargo uplift plans against payload should be confirmed at planning. 🟧
- **Connection banks:** As a Category-S spoke (not a base), connection-bank timing at LFLL is set by the K Global network schedule rather than by local demand data — cross-ref the route register.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Price / tankering angle:** No tankering-relevant price signal sourced this pass; assess at planning per leg.
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration specific to LFLL identified — the field's own winter risk driver is ground de-icing (§9), not fuel freeze in flight.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Presumed **Yes** given scheduled international/Schengen-external service; not independently confirmed. 🟧
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality expected; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** No blanket curfew constrains a late arrival; the noisiest-aircraft window (22:00–06:00, §4) is the relevant night-operations consideration rather than immigration-desk staffing, though desk hours themselves are unconfirmed. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — operator-confirmed snow/de-icing plan. 🟩
- **Season:** **Mid-November to mid-April.**
- **Provisioning:** Potassium-formate de-icing/anti-icing fluid (lower-impact/lower-carbon product per the operator); a fleet of roughly 15 snow-removal vehicles maintains runway/taxiway/apron compliance. Anti-icing protection holds for up to ~1.5 hours in normal conditions, but may last as little as ~20 minutes before take-off in heavy snowfall — plan holdover accordingly in season.
- **Commercial impact:** Winter de-icing-pad throughput combined with the field's general frost/fog risk profile (disputed between operator claims and regional climatology — see Briefing §3.4/§14) is the principal seasonal delay-risk driver. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** The **dependent-runway pair** (no simultaneous takeoff/landing operations between the two runways) is the field's structural capacity constraint and the most likely source of sequencing delay during busy periods, ahead of weather. 🟧
- **Ground-delay / flow-program exposure:** Not independently sourced for LFLL specifically; expect standard EUROCONTROL flow management exposure for a scheduled international EU field. 🟧
- **On-time reliability picture:** Winter de-icing season (mid-Nov–mid-Apr) and the dependent-runway sequencing constraint are the two structural risk factors identified this pass; no independent on-time-performance statistic was sourced. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable public sources beyond the noisiest-aircraft night restriction itself (§4/§12). 🟧
- **Curfew infringement consequence:** No blanket curfew exists to infringe; the enforceable restriction is the Chapter-3/<13 EPNdB noisiest-aircraft ban 22:00–06:00 — confirm fleet-type compliance rather than treating this as a scheduling curfew.
- **Scheduling guardrails:** Given the absence of a hard curfew, the main guardrail is confirming aircraft-type noise-margin compliance for any rotation touching the 22:00–06:00 window, plus building normal buffer against the dependent-runway sequencing constraint during peak traffic.

---

## Open items (🟧 — confirm against AIP / operator data)

- Terminal/gate assignment for the K Global operation at this Category-S field.
- Ground handling agent(s) and confirmed minimum turnaround time.
- Fuel supplier, into-plane hours and quality/grade.
- Customs/immigration desk hours.
- Slot-coordination level and any EUROCONTROL CTOT/ATFM specifics for LFLL.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Widebody/Code-E stand count and current gate map.
- Noise-charge regime detail beyond the noisiest-aircraft night restriction.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current Lyon SIV/TMA restricted-area (LF-R45 series) activation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- SIA France eAIP, AD 2.LFLL — domain reachable, deep AD-2 page rendered empty (JS frameset) this pass — https://www.sia.aviation-civile.gouv.fr/ (retrieved 2026-07-26). See Briefing page for full detail on this access limitation.
- IVAO France Division — "LFLL - Lyon Saint-Exupéry" operational reference — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfll-lyon-saint-exupery (retrieved 2026-07-26). *Network-sim document, not regulatory — stand/push-back-restriction detail, terminal/taxiway structure, dependent-runway rule.*
- International Airport Review — "Winter operations are an Olympic sport for Lyon-Saint Exupéry Aéroport" — https://www.internationalairportreview.com/article/232604/winter-operations-are-an-olympic-sport-for-lyon%E2%80%91saint-exupery-aeroport/ (retrieved 2026-07-26). *De-icing provisioning/season.*
- Air Journal — "Lyon Saint-Exupéry veut faire moins de bruit la nuit" — https://www.air-journal.fr/2021-10-09-lyon-saint-exupery-veut-faire-moins-de-bruit-la-nuit-5230917.html (retrieved 2026-07-26). *Noisiest-aircraft night-restriction detail.*
- Lyon Aéroport (operator) — "SNCF Railway Station Lyon-Saint Exupéry" — https://www.lyonaeroports.com/en/access-transports/railway-station (retrieved 2026-07-26). *TGV/Rhônexpress integration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
