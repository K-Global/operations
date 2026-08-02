# LTFJ — İstanbul Sabiha Gökçen Intl · Dispatch Page

**LTFJ / SAW** · Pendik/Kurtköy, İstanbul, Türkiye · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DHMİ AIP-derived

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LTFJ Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | 🟧 Not in VAMSYS — pending reconciliation |
| Terminals in use for us | Not confirmed 🟧 |
| Widebody stands available | Not itemised in reachable sources; new wide-body-capable runway (06R/24L, opened Dec 2023) implies growing widebody capacity 🟧 |
| Slot regime | Scheduled service via the **DHMİ Airports SLOT Coordination Center**; technical landings/diverts and individual scheduled-flight-permit applications **not accepted** for non-based aircraft 🟥 |
| Curfew | None found in reachable sources 🟧 |
| Primary handling agent | Cargo: ÇELEBİ / TGS; passenger-side not confirmed 🟧 |
| Fuel supplier(s) | Jet A-1, H24, unlimited via hydrant and tankers; specific supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — H24 published; exact desk practice not confirmed 🟧 |
| De-icing | **Available — Code C only** (max B737-900/A321); **not usable for a K Global widebody** 🟥 |

---

## 2. Terminals & concourses

- **Terminal layout:** Single main passenger terminal complex with cargo and general-aviation facilities separate; specific concourse/pier structure not itemised in reachable sources. 🟧
- **Our operation uses:** 🟧 Not confirmed — LTFJ is not currently in the VAMSYS network mirror; pending reconciliation.
- **International arrivals / CBP-equivalent hall:** International hall confirmed present (Customs/Immigration published H24); connection/transfer detail not confirmed.
- **Notes:** LTFJ's scheduled-service access for foreign carriers is explicitly capacity-managed (§Briefing §3.2/§5) — confirm route rights and terminal/gate assignment together before scheduling any K Global service here. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not individually itemised in reachable sources; the new wide-body-capable runway (06R/24L) implies the field is building widebody-relevant infrastructure, but stand/gate allocation is not confirmed. 🟧
- **Stands NOT usable by our types:** Not confirmed — narrowbody-oriented stands would be expected given LTFJ's historical low-cost/short-haul profile, but not individually identified. 🟧
- **Remote / hardstand positions:** General Aviation apron (max 26.5 m wingspan self-power; 27–31 m wingspan only via stand 61/TWY N) and cargo apron are distinct from the passenger apron; not directly relevant to scheduled widebody service. 
- **Contact vs remote for our arrivals:** Not confirmed.
- **Ground-movement stand caveats:** MRO and stands 301–308 areas are **not visible from Tower** — taxiing/push-back/towing there is under pilot responsibility; cross-ref [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** 🟥 Scheduled service requires slot allocation through the **DHMİ Airports SLOT Coordination Center**; the AIP explicitly states that technical landings/diverts are not accepted for non-based aircraft, individual scheduled flight-permit applications are not made, and additional foreign-carrier scheduled rights beyond bilateral entitlements are **not granted "due to insufficient capacity."** This is a harder capacity constraint than a typical slot-coordinated hub.
- **Curfew / night restriction:** No explicit night curfew found in reachable sources; all AD services are published H24. 🟧
- **CTOT / flow control:** Not independently confirmed beyond the slot-allocation mechanism above. 🟧
- **Commercial impact:** Any scheduled K Global service at LTFJ must be confirmed against the capacity-managed access regime (bilateral rights / DHMİ slot allocation) before committing to a schedule — this is a gating item, not a routine slot-file pull.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** ÇELEBİ Ground Handling Service and TGS Turkish Ground Handling Service are confirmed for **cargo** handling; the passenger-side handler for our operation is not confirmed. 🟧
- **Typical turnaround time for our type:** Not confirmed — LTFJ is not currently in the VAMSYS mirror. 🟧
- **Services:** Standard push-back, GPU/PCA, water/lav, catering and cabin services expected; push-back is mandatory for all parking positions except the de-icing apron and stand 14A-15A.
- **Turnaround risk items:** **De-icing is Code C only** — a widebody requiring de-icing cannot be serviced at LTFJ, a material turnaround/diversion-risk item in winter. MRO/stand-301-308 area not visible from Tower adds ground-movement risk.

---

## 6. Load factors & seasonality

- **Demand peaks:** Historically a low-cost-carrier and short-haul-oriented İstanbul-area airport; the new wide-body-capable runway (opened Dec 2023) suggests an evolving traffic mix, but K Global-specific demand data is not available (not in VAMSYS). 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Confirmed dedicated cargo apron and cargo-handling agents (ÇELEBİ, TGS); belly/freighter interaction for our operation not confirmed. 🟧
- **Connection banks:** Not confirmed — not in VAMSYS.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1; specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** H24, unlimited via hydrant and tankers, published. 🟩
- **Price / tankering angle:** Not independently sourced this pass. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to LTFJ itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes.
- **CBP-equivalent / immigration hours:** Published H24 alongside all other AD services; exact desk practice not independently confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Standard Türkiye entry per nationality/visa regime.
- **Late/overnight/diversion caveat:** 🟥 Technical landings/diverts are **not accepted** for non-based aircraft — LTFJ is not a viable ad hoc diversion field for a K Global aircraft regardless of customs desk staffing.

---

## 9. De-icing provisioning & season

- **Availability:** 🟥 **Available — Code C only** (largest type accommodated: B737-900/A321). **Not usable for a K Global widebody.** Entry/exit per ATC instruction; Follow-Me support for non-standard-side access.
- **Season:** Not confirmed — de-icing provisioning implies a recognised winter season; exact date range not found. 🟧
- **Provisioning:** Code-C-only capacity; no widebody de-icing infrastructure confirmed at this field.
- **Commercial impact:** Any K Global widebody due for a winter-season turn at LTFJ must have a de-icing contingency plan that does not rely on LTFJ's own facilities. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Capacity constraints inherent to the field's slot/rights regime (§4) are the most likely structural delay driver for any non-based scheduled service; not independently quantified. 🟧
- **Ground-delay / flow-program exposure:** Not confirmed. 🟧
- **On-time reliability picture:** Not confirmed — not in VAMSYS. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** NADP-1/NADP-2 noise-abatement departure procedures are mandated by aircraft noise category (§Departure §5); specific charge regime not confirmed. 🟧
- **Curfew infringement consequence:** No curfew identified; the operative commercial constraint is the capacity/rights regime (§4), not a night-window penalty.
- **Scheduling guardrails:** Confirm bilateral flight rights and DHMİ slot allocation before committing any K Global schedule to LTFJ; treat this as a pre-condition rather than a routine buffer decision.

---

## Open items (🟧 — confirm against AIP / operator data)

- K Global category, base flag, alternates, taxi times, role in network — not in VAMSYS.
- Widebody stand/gate assignment given the new wide-body-capable runway.
- Passenger-side ground handling agent(s) and confirmed minimum turnaround time.
- Fuel into-plane provider.
- Customs/immigration desk hours in practice.
- De-icing season date range (facility itself confirmed Code-C-only).
- Slot-coordination detail — exact IATA level and process for a K Global service.
- Day-of-week/seasonal load pattern and belly-cargo capacity.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current demand/load, stand allocation, current DHMİ SLOT Coordination Center status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **DHMİ AIP Türkiye, AD 2 LTFJ** (current AIRAC extract, cycles through AMDT 04/26) — https://dhmi.gov.tr/AIPDocuments/LT_AD_2_LTFJ_en.pdf (retrieved 2026-07-26).
- DHMİ AIP Türkiye, AD 2 LTFJ (2015–2016 legacy cycle, local-traffic-regulation detail) — https://silo.tips/download/ad-2-ltfj-1-turkey-12-nov-15-ltfj-ad-21-aerodrome-location-indicator-and-name-lt (retrieved 2026-07-26). **Superseded cycle — flagged 🟧 where used.**
- Public aviation-news reporting on the second runway's opening (25 Dec 2023) — general search corroboration; not individually re-verified this pass. *Advisory/secondary source — flagged 🟧.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS (not yet reconciled for this field); 4-page pack. |
