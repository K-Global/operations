# LTFM — İstanbul Airport · Dispatch Page

**LTFM / IST** · Arnavutköy, İstanbul, Türkiye · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DHMİ AIP-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LTFM Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-25]` |
| Terminals in use for us | Single main passenger terminal complex (İGA terminal); specific concourse/pier for our operation not confirmed 🟧 |
| Widebody stands available | Extensive apron system (Terminal Contact Apron + Aprons 1–7); count/pier allocation for Code E/F not confirmed 🟧 |
| Slot regime | Not consistently confirmed — A-CDM in use; formal IATA Level not confirmed 🟧 |
| Curfew | None found in reachable sources 🟧 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1, H24, unlimited hydrant/tanker capacity; specific supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — major international hub; exact desk hours not confirmed 🟧 |
| De-icing | **Available** — five dedicated de-icing aprons, H24 |

---

## 2. Terminals & concourses

- **Terminal layout:** A single large integrated terminal complex operated by İGA, designed for very high annual throughput (published capacity 90 million pax/year); phased masterplan with further runways/terminal capacity planned in later stages.
- **Our operation uses:** Not confirmed — specific concourse/pier assignment for K Global arrivals/departures not found in reachable sources. 🟧
- **International arrivals / CBP-equivalent hall:** Major international arrivals hall; connection/transfer detail not confirmed. 🟧
- **Notes:** As a five-runway megahub still in phased expansion (additional runways/terminal capacity planned in later masterplan stages), confirm current terminal/gate assignment with handling before finalising a stand plan. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Extensive apron system (Terminal Contact Apron, Aprons 1–7, six cargo aprons, five de-icing aprons) supports large-scale widebody operations; specific Code E/F pier allocation not individually confirmed. 🟧
- **Stands NOT usable by our types:** Not confirmed — narrowbody-oriented stands would be expected at a hub of this scale but not individually identified. 🟧
- **Remote / hardstand positions:** Not confirmed in reachable sources. 🟧
- **Contact vs remote for our arrivals:** Expect a contact widebody gate at a hub of this scale for scheduled international service; not independently confirmed.
- **Ground-movement stand caveats:** Extensive lettered taxiway system (A–T plus sub-taxiways) with numerous Code-C/E/F width transitions — see [Briefing §13](index.md) and the Departure/Arrival taxi sections.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** 🟧 Not consistently confirmed in reachable public sources — some sources describe no formal prior-coordination requirement, others reference a slot-coordination system; A-CDM (Airport Collaborative Decision Making) is confirmed in use for pre-departure sequencing (TSAT/TOBT).
- **Curfew / night restriction:** None found in reachable sources — all published AD services (ATS, customs, fuelling, handling, security, de-icing) are H24. Not independently confirmed as "no curfew exists." 🟧
- **CTOT / flow control:** Not independently confirmed for LTFM specifically; treat any CTOT/ATFM-style constraint as a live-planning item. 🟧
- **Commercial impact:** A-CDM discipline (accurate TOBT, timely pushback request) is the dominant schedule-integrity lever at this traffic volume, given the field's five-runway, triple-independent-parallel-approach complexity (§Briefing §3.2).

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Multiple ground-handling and cargo-handling service providers are referenced generically in the AIP; the specific agent contracted for our operation is not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 20 min / taxi-out 22 min** for planning purposes `[VAMSYS mirror 2026-07-25]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a hub of this scale (standard major-hub provision); not individually itemised in reachable sources.
- **Turnaround risk items:** Ground-routing complexity across the extensive taxiway system, A-CDM sequencing discipline, and de-icing-pad throughput in winter are the principal turnaround-risk drivers.

---

## 6. Load factors & seasonality

- **Demand peaks:** As a major international megahub, LTFM anchors substantial intercontinental and regional connecting traffic generally; K Global-specific demand pattern is set by the route register rather than third-party data.
- **Day-of-week / seasonal pattern:** Not independently sourced for LTFM specifically — treat as standard major-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** All-cargo services began 5 Feb 2022 alongside passenger operations; the field has a substantial dedicated cargo apron system (six cargo aprons). Confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not independently confirmed for LTFM; cross-ref the route register for inbound/outbound wave structure specific to our operation.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1; specific into-plane provider not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** H24, unlimited amount published. Hydrant delivery rate 40–65 L/s per stand; tanker delivery rate 30–60 L/s (used when hydrant system is down). 🟩
- **Price / tankering angle:** Not independently sourced this pass — assess price differential to the outbound leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LTFM itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — major international hub.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub H24 coverage given all other AD services are H24. 🟧
- **Pre-clearance / visa-transit notes:** Standard Türkiye entry per nationality/visa regime; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** No curfew found in reachable sources — an overnight arrival/diversion is not expected to face the scheduling constraint seen at curfew-bound hubs, but customs/immigration desk staffing overnight is not independently confirmed. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **Available** — five dedicated de-icing aprons (Deicing 1–5), each with a specific aircraft-entry direction (north-, south-, or west-facing depending on apron); entry from the opposite side is only permitted by ATC instruction with a Follow-Me vehicle. 🟩
- **Season:** Not independently confirmed — Türkiye's Marmara-region climate would suggest a winter de-icing season; no field-specific date range found. 🟧
- **Provisioning:** Five aprons provide substantial simultaneous de-icing throughput capacity for a hub of this scale.
- **Commercial impact:** Not independently quantified this pass; treat de-icing-pad queuing as a general winter schedule-risk factor pending seasonal data. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not independently confirmed for LTFM specifically; the field's five-runway, triple-independent-parallel-approach complexity (since Apr 2025) is the standing structural factor most likely to drive ground-delay/flow exposure at peak traffic. 🟧
- **Ground-delay / flow-program exposure:** Not independently quantified this pass. 🟧
- **On-time reliability picture:** Not independently sourced; treat as unconfirmed pending operator-level data. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed in reachable sources this pass. 🟧
- **Curfew infringement consequence:** No curfew identified — not applicable pending further verification. 🟧
- **Scheduling guardrails:** With no confirmed curfew, the practical scheduling guardrail at this field is A-CDM sequencing discipline and buffer against the traffic/complexity factors in §Briefing §3.2 rather than a hard night-window constraint.

---

## Open items (🟧 — confirm against AIP / operator data)

- Slot-coordination level (formal IATA Level 1/2/3) — conflicting public signals; A-CDM confirmed in use.
- Terminal/concourse and widebody stand/gate assignment for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider.
- Customs/immigration desk hours.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Signature delay driver and on-time reliability picture.
- De-icing season date range.
- Noise-charge regime, if any.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current A-CDM/TSAT status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **DHMİ AIP Türkiye, AD 2 LTFM** (current AIRAC extract, cycles through AMDT 03/26) — https://www.dhmi.gov.tr/AIPDocuments/LT_AD_2_LTFM_en.pdf (retrieved 2026-07-26).
- Wikipedia — "Istanbul Airport" — https://en.wikipedia.org/wiki/Istanbul_Airport (retrieved 2026-07-26). *Passenger capacity, cargo-service start date, phased development.*
- Public aviation-news reporting on triple independent parallel runway operations (17 Apr 2025) and A-CDM implementation — general search corroboration; not individually re-verified this pass. *Advisory/secondary source — flagged 🟧.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
