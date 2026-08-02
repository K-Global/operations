# LSZH — Zurich · Dispatch Page

**LSZH / ZRH** · Kloten, Zurich, Switzerland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LSZH Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / alternate — not a base** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not confirmed which dock our operation uses — see §2 🟧 |
| Widebody stands available | Not confirmed — see §3 🟧 |
| Slot regime | Slot-administered through the Swiss national coordinator; exact IATA level not confirmed 🟧 |
| Curfew | **Yes** — hard field curfew plus a separate German cross-border night/early-morning restriction on northern approaches 🟥 |
| Primary handling agent | Not confirmed for our operation 🟧 |
| Fuel supplier(s) | Jet A-1 assumed, multi-supplier; not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes**; exact desk hours not confirmed 🟧 |
| De-icing | **Available** — two dedicated pads confirmed |

---

## 2. Terminals & concourses

- **Terminal layout:** Passenger operations are split across multiple docks linked by a central airside concourse: a Schengen-only dock, a mixed Schengen/non-Schengen dock, and a non-Schengen midfield satellite reached by an automated underground people-mover.
- **Our operation uses:** Not confirmed in reachable public sources — confirm gate/dock assignment with handling before finalising a stand plan. 🟧
- **International arrivals / CBP-equivalent hall:** International passport control is split by dock per the Schengen/non-Schengen split above; the midfield satellite is non-Schengen-only and requires the people-mover connection — build connection time accordingly for any onward network leg. 🟧
- **Notes:** Widebody-specific gate/dock allocation was not found in reachable sources. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed in reachable sources — no official stand/apron chart was located this pass. 🟧
- **Stands NOT usable by our types:** Not confirmed. 🟧
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Expect a contact stand as the default assumption at a major hub; not independently confirmed. 🟧
- **Ground-movement stand caveats:** The **10/28 × 16/34 crossing-runway geometry** and reported taxiway wingspan restrictions near ILS critical areas affect ground routing between stands and the runway system — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Slot-administered through the Swiss national coordinator; exact IATA level not confirmed. 🟧
- **Curfew / night restriction:** **Two layered restrictions** — (1) a hard field night curfew (historically reported on the order of 23:00/23:30–06:00, special-permit only) and (2) a **German cross-border restriction** barring northern (14/16) approaches during defined night/early-morning hours, forcing traffic onto RWY28/34 (which carry no CAT II/III capability) at those times. Exact current hour bands for both are 🟧 flagged for re-verification. 🟥
- **CTOT / flow control:** Not independently confirmed; EUROCONTROL Network Manager ATFM/CTOT regulation is a reasonable general expectation for a congested Central European hub. 🟧
- **Commercial impact:** The German restriction, not the field's own curfew, is the primary scheduling constraint here — a late-day or early-morning rotation must be planned against the applicable operating concept (Day/Morning/Evening) and its runway/CAT-capability consequences (§12 of the Briefing).

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Multiple ground handlers operate on field (at least one major international handler confirmed present); the specific handler for our operation is not confirmed. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 14 min / taxi-out 16 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard widebody service times.
- **Services:** Push-back, GPU/PCA, potable water/lav, catering and cabin services expected at a major-hub Code E/F stand (standard provision, not independently itemised for LSZH).
- **Turnaround risk items:** De-icing-pad throughput in winter, and ground-routing complexity around the 10/28 × 16/34 crossing geometry, are the most likely sources of unplanned turn time.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for LSZH specifically — treat as standard Central European business/leisure mix pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Not confirmed; confirm belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not applicable — LSZH is not a K Global base; connection timing is set by the network route register.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available; reported ~5 licensed refuellers on field, names not confirmed. 🟧
- **Uplift availability & hours:** H24 assumed at a major hub; not independently confirmed. 🟧
- **Price / tankering angle:** Assess price differentials to/from the home base per leg — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LSZH itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — international processing on field.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable sources. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** The **layered curfew/German-restriction regime** (§4) is the dominant late/overnight constraint here rather than immigration-desk staffing. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** **Confirmed available** — two dedicated de-icing pads on field. 🟩
- **Season:** Typical Central European de-icing season expected (roughly Oct–Apr); exact LSZH-specific season/throughput not confirmed. 🟧
- **Provisioning:** Fluid type, holdover implications and peak throughput not confirmed. 🟧
- **Commercial impact:** Winter fog/low-stratus days combined with de-icing-pad queuing are a plausible seasonal delay-risk driver, compounded by the fact that RWY28/34 (the operative runways outside the Day-concept window) carry no CAT III fallback. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** The **German cross-border restriction's runway-switch requirement**, compounded by winter fog/low stratus when the operative runway (28 or 34) has no CAT III capability, is the field's most distinctive reliability exposure. 🟧
- **Ground-delay / flow-program exposure:** Not independently confirmed; expect standard EUROCONTROL flow management as a congested Central European hub. 🟧
- **On-time reliability picture:** Early-morning arrivals are the highest-exposure window, given the interaction between the German restriction's hour bands and the CAT-I-only runways it forces into use. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not independently confirmed; a track-deviation reporting/enforcement regime to the national civil aviation regulator exists in principle. 🟧
- **Curfew infringement consequence:** The field's own night curfew is a **hard movement restriction** (special permit only); the German restriction is a **structural approach-runway limitation**, not merely a charge — plan around both rather than treating either as a soft guideline. 🟥
- **Scheduling guardrails:** Build buffer into any rotation that could touch the German restriction's night/early-morning hours or the field's own curfew tail; treat a schedule slipping into either window as a real risk trigger, not a minor delay.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current dock/gate assignment and widebody stand allocation for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider names and uplift hours.
- Customs/immigration desk hours.
- Slot-coordination level (IATA Level 1/2/3) and CTOT/ATFM specifics.
- Exact current hour bands for both the German cross-border restriction and the field's own night curfew.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current status of the German-airspace restriction. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- AIP Switzerland (Skyguide eAIP) — https://www.eaip.skyguide.ch/ — attempted 2026-07-26; unreachable (JS/frameset) this session.
- Zurich Airport (Flughafen Zürich AG) — operating-concepts / flight-operations pages (retrieved 2026-07-26). *Curfew and operating-concept statements.*
- swissinfo.ch — "Germany limits flights into Zurich," 2003-04-17 (retrieved 2026-07-26). *German restriction/curfew history.*
- slotcoordination.ch — Zurich airport restrictions page (retrieved 2026-07-26). *Slot/curfew figures.*
- en.wikipedia.org/wiki/Zurich_Airport (retrieved 2026-07-26). *Terminal/dock structure, fuel-supplier count.*
- IVAO Switzerland — Zurich Air Traffic Management Manual (retrieved 2026-07-26). *Network-sim training document, not regulatory — corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Switzerland (Skyguide); K Global fields from live VAMSYS; 4-page pack. |
