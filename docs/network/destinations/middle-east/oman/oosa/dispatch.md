# OOSA — Salalah · Dispatch Page

**OOSA / SLL** · Salalah, Dhofar Governorate, Oman · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [OOSA Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / regional gateway / southern Arabian Sea alternate** `[VAMSYS mirror 2026-07-26]` — not a K Global base |
| Terminals in use for us | Single passenger terminal (2015 rebuild) — no concourse split confirmed for our operation |
| Widebody stands available | Not confirmed 🟧 |
| Slot regime | Reported **"required"** (tier-4) — level/coordinator not confirmed 🟧 |
| Curfew | Not confirmed — published hours data internally inconsistent (see Briefing §6) 🟧 |
| Primary handling agent | Not confirmed for our operation — candidate agents identified in §5 🟧 |
| Fuel supplier(s) | Jet A-1 reported available ("JET ONLY"); supplier not confirmed 🟧 |
| Customs / PoE for pax | **Yes** — international PoE since 2003; exact desk hours not confirmed 🟧 |
| De-icing | **NIL** — arid/tropical climate, no de-icing requirement 🟩 |

---

## 2. Terminals & concourses

- **Terminal layout:** Single modern passenger terminal, opened 11 Nov 2015 as part of the airport's full rebuild — 65,000 m², 8 passenger boarding bridges, 30 check-in counters, 10 departure gates, designed for up to 2M passengers/year with room to expand to 6M. A VIP lounge and parking for ~2,200 vehicles are also part of the facility, per the Oman CAA's own airport page.
- **Our operation uses:** Not confirmed — no gate/pier assignment specific to K Global identified. 🟧
- **International arrivals / PoE hall:** International arrivals clear passport control in the single terminal; Salalah has held international-airport (Port of Entry) status since 2003.
- **Notes:** No terminal-transition/construction programme identified for the current period — the major rebuild (2011–2015) is long complete; treat the facility as stable pending any newer khareef-season capacity works (§6).

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed — the 2015 terminal was built "to accommodate the world's largest aircraft" per the CAA's own statement, but a Code E/F stand count/layout was not independently confirmed this build. 🟧
- **Stands NOT usable by our types:** Not confirmed. 🟧
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — expect a contact gate given the boarding-bridge count (8), but not verified for our specific operation. 🟧
- **Ground-movement stand caveats:** Single runway (07/25) with a taxiway system not independently detailed this build — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Reported **"Slots Required: Yes"** across two independent tier-4 aviation-data sources (AC-U-KWIK, Universal Weather) — the formal IATA level/coordinator was not confirmed. Plausibly tied to khareef-season (Jun–Sep) capacity management given the sharp seasonal traffic surge (§6). 🟧
- **Curfew / night restriction:** Not confirmed either way — published operating-hours data is internally inconsistent (one source shows Tower H24 alongside a restricted Su–Th 0330–1130Z + other-times-on-request schedule for the airport itself). Reconcile against current AIP/NOTAM before planning an off-schedule movement. 🟧
- **CTOT / flow control:** No ATFM/CTOT programme independently confirmed for this field. 🟧
- **Commercial impact:** Until the slot/hours picture is reconciled, build schedule margin around any non-standard-hours rotation and treat the khareef season as the primary capacity-constrained period.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Handling is reported **mandatory** at this field (tier-4). Flight-support/ground-handling contacts identified in the public record include **Air Services Tourism LLC (AST)**, **Moonjet Flight Support**, **Just Aviation** and **Sahab Aviation Services** — none of these is confirmed as K Global's contracted handler; treat as a candidate list only. 🟧
- **Typical turnaround time for our type:** Not confirmed — VAMSYS taxi-in/taxi-out fields are **n/a** for this field `[VAMSYS mirror 2026-07-26]` 🟧, so no VAMSYS-sourced planning figure is available either; build the turn from standard type service times pending a confirmed local figure.
- **Services:** Not independently confirmed — standard push-back/GPU/water/catering provision assumed for an international PoE field but not verified. 🟧
- **Turnaround risk items:** The **khareef-season traffic surge** (§6) is the most likely source of ramp/handling-resource pressure; a co-located military air base (RAFO Salalah) may also add coordination overhead at times. 🟧

---

## 6. Load factors & seasonality

- **Demand peaks:** **Khareef season (Jun–Sep)** is the defining demand driver — Salalah and the Dhofar coast become a major regional tourist destination during the SW monsoon, when the cooler, misty, green landscape is a unique draw within the otherwise arid Gulf region. Omani and regional carriers have publicly reported adding materially increased seasonal capacity on Muscat–Salalah and Gulf–Salalah routes during this window (e.g., reported 2026 khareef-season operating windows of 1 Jul–5 Sep and 1 Jul–31 Aug for two Omani carriers).
- **Day-of-week / seasonal pattern:** Not independently sourced beyond the khareef peak described above. 🟧
- **Cargo / belly capacity:** Not confirmed — no cargo-specific data found for OOSA. 🟧
- **Connection banks:** Not applicable in the reachable sources — treat OOSA as a point-to-point regional/destination field rather than a connecting hub.

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 reported available ("JET ONLY" per AC-U-KWIK); specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** Not confirmed. 🟧
- **Price / tankering angle:** Not assessed this build — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 expected in a warm-climate field; no cold-soak/fuel-freeze consideration at OOSA itself.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Salalah has held international-airport status since 2003.
- **CIQ hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Not confirmed — standard Omani entry requirements expected for scheduled international arrivals. 🟧
- **Late/overnight/diversion caveat:** One business-aviation data source (Universal Weather) reports customs as **not available**, which likely reflects an ad-hoc/GA-hours limitation rather than the scheduled commercial PoE status — **not reconciled this build**; confirm CIQ coverage for any late/overnight or diversion scenario before relying on it. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** **NIL.** 🟩
- **Season:** Not applicable — arid/tropical climate, no de-icing requirement at any time of year.
- **Provisioning:** Not applicable.
- **Commercial impact:** None — de-icing is not a planning factor at this field. The seasonal commercial-impact driver here is the khareef weather picture (§6/Briefing §3.4), not cold weather.

---

## 10. Typical delays / reliability

- **Signature delay driver:** **Khareef-season (Jun–Sep) low ceiling/visibility** — see [Briefing §3.4](index.md) — is the standout seasonal reliability risk at this field. 🟥
- **Ground-delay / flow-program exposure:** Not independently confirmed; expect elevated exposure during the khareef traffic surge given the field's baseline size. 🟧
- **On-time reliability picture:** Jun–Sep carries the clearest seasonal schedule risk; no field-specific on-time statistic was found. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not confirmed. 🟧
- **Curfew infringement consequence:** Not confirmed — curfew/hours status itself is unresolved (§4). 🟧
- **Scheduling guardrails:** Until the hours/slot picture is reconciled, build buffer around any non-standard-hours rotation and treat the khareef season as the primary period requiring extra schedule margin (weather-driven delay/diversion risk, not noise/curfew).

---

## Open items (🟧 — confirm against AIP / operator data)

- Confirmed handling agent(s) for our operation and minimum turnaround time (VAMSYS taxi-in/out is n/a for this field).
- Widebody/Code E-F stand count and gate assignment.
- Slot-coordination level/coordinator and exact mechanics.
- Reconciliation of conflicting ATS/AD operating-hours and curfew data.
- Fuel into-plane provider and uplift hours.
- CIQ desk hours and reconciliation of the "customs not available" business-aviation flag against the field's PoE status.
- Day-of-week/seasonal load pattern beyond the khareef peak; belly-cargo capacity.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current demand/load, stand allocation, current khareef-season NOTAM/capacity picture. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- Oman Civil Aviation Authority — "Our Airports — Salalah Airport" — https://www.caa.gov.om/en/caa-2/our-airports/salalah-airport (retrieved 2026-07-26). *Terminal facilities, 2015 rebuild, official operator statement.*
- AC-U-KWIK — https://acukwik.com/Airport-Info/OOSA (retrieved 2026-07-26). *Slots/handling flags, FBO/handler contacts, reported hours.*
- Universal Weather and Aviation — https://www.universalweather.com/airports/OOSA-SLL-SALALAH-AIRPORT-SALALAH-ZUFAR-OMAN/ (retrieved 2026-07-26). *Slots, customs flag, runway data.*
- Wikipedia — "Salalah Airport" — https://en.wikipedia.org/wiki/Salalah_Airport (retrieved 2026-07-26). *History, PoE status since 2003, traffic/seasonal context.*
- Oman Civil Aviation Authority — khareef-season readiness statement — https://www.caa.gov.om/en/media/news/2026/caa-affirms-readiness-of-the-aviation-system-fo-khareef-dhofar-2026 (retrieved 2026-07-26). *Seasonal capacity/operating-window context.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
