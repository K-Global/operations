# FVFA — Victoria Falls International · Dispatch Page

**FVFA / VFA** · Victoria Falls, Zimbabwe · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [FVFA Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — none confirmed for this field this pass (see Briefing §18). Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | Leisure/tourism-gateway destination — not a K Global base (see [FVFA Briefing](index.md) §1) |
| Terminals in use for us | International terminal (linked to the domestic terminal by a common thoroughfare per ACZ) — not further specified |
| Widebody stands available | **10 wide-body positions + 18 light-aircraft positions; 3 aerobridges** `[ACZ]` |
| Slot regime | None found (Universal Weather: "Slots required: N/A") |
| Curfew | 🟥 **Effectively yes** — published AD hours **0600–1800 daily (12 h)**, extendable only "upon request, subject to approval" `[ACZ]`. Conflicts with a general Wikipedia claim of 24 h operation — unresolved, see Briefing §18. |
| Primary handling agent | Not identified in reachable sources 🟧 |
| Fuel supplier(s) | **PUMA Aviation** and **ZUVA Petroleum** — both based on-field `[ACZ]` |
| Customs / PoE for pax | 🟥 Conflicting — ACZ names on-site Immigration/ZIMRA Customs officers; a separate tier-4 aggregator flags "Customs available: No." Confirm before relying on either — see [FVFA Briefing](index.md) §1/§18. |
| De-icing | **NIL** — subtropical plateau field, no de-icing need identified |

---

## 2. Terminals & concourses

- **Terminal layout:** ACZ describes a single, fully air-conditioned facility combining an **International Terminal and a Domestic Terminal linked by a common thoroughfare** — not two physically separate buildings in the airline-hub sense.
- **Our operation uses:** International side, given the network role (§1); not independently confirmed by gate/pier assignment.
- **International arrivals / CBP hall:** ACZ names an on-site Immigration officer and a ZIMRA (Customs) officer, consistent with the field's role as one of Zimbabwe's principal Airports of Entry (Universal Weather confirms "Airport of Entry: Yes") — but see the Customs-availability conflict flagged throughout this pack. 🟥
- **Notes:** No construction/transit-constraint notes found in reachable sources this pass. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** ACZ states parking for **10 wide-body aircraft** with **3 aerobridges** — built explicitly to the B747-400/B777/A340 category per the operator's own description of the post-expansion facility. Pier/code-letter detail not published. 🟧
- **Stands NOT usable by our types:** Not identified in reachable sources.
- **Remote / hardstand positions:** 18 light-aircraft positions are separately confirmed `[ACZ]`; bussing implications for widebody remote stands not published.
- **Contact vs remote for our arrivals:** Not confirmed — 3 aerobridges suggest at least some contact-stand capability for widebody types.
- **Ground-movement stand caveats:** A single parallel taxiway alongside the runway is confirmed `[ACZ]`; cross-ref [FVFA Departure](departure.md) §2 and [FVFA Briefing](index.md) §13.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** None found — Universal Weather records "Slots required: N/A." 🟧
- **Curfew / night restriction:** 🟥 **Published AD operating hours are 0600–1800 daily (12 h)**, extendable "upon request, subject to approval" `[ACZ]`. Treat this as a hard scheduling constraint until confirmed otherwise, notwithstanding a conflicting general claim (Wikipedia) of 24 h operation. See [FVFA Briefing](index.md) §18.
- **CTOT / flow control:** No ATFM/EDCT-style program identified in reachable sources; not a slot-coordinated field per available data.
- **Commercial impact:** Any schedule touching FVFA outside roughly 0600–1800 local should build in a prior-approval step for the extended-hours request until the hours conflict above is resolved against a primary source.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not identified in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not published / verify. 🟧
- **Services:** Two on-field fuel suppliers (PUMA Aviation, ZUVA Petroleum) confirmed; wider ground-service detail (pushback, GPU/PCA, water/lav, catering, cabin clean) not published.
- **Turnaround risk items:** The soft-curfew hours (§4) are the clearest schedule-risk item identified; a delayed inbound close to 1800 local could force an extended-hours request.

---

## 6. Load factors & seasonality

- **Demand peaks:** Victoria Falls is a **tourism/leisure gateway** — expect demand to track the region's tourist season rather than a business travel pattern; the **dry season (roughly Apr–Oct)** is the classic prime safari/sightseeing window (clear skies, good game viewing, the falls themselves at lower but still spectacular flow), while the **wet season (Nov–Mar)** brings the Zambezi to peak flow (dramatic falls viewing) alongside more variable flying weather. No FVFA-specific load-factor or seasonality statistic found in reachable sources — durable qualitative context only. 🟧
- **Day-of-week / seasonal pattern:** Leisure-skewed; no weekly-shape data found. 🟧
- **Cargo / belly capacity:** No cargo-demand data found for this field; not expected to be a significant driver at a leisure gateway.
- **Connection banks:** Not applicable — FVFA is not a K Global base or connecting hub (see [FVFA Briefing](index.md) §1).

---

## 7. Fuel

- **Supplier / into-plane:** **PUMA Aviation** and **ZUVA Petroleum**, both based on-field `[ACZ]`. 🟧
- **Uplift availability & hours:** Jet A-1 and AVGAS both confirmed available; H24 supply not confirmed — hours not published. 🟧
- **Price / tankering angle:** Not assessed this pass — pull live at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** No FVFA-specific fuel-quality note found; standard Jet A-1 freeze point (−47 °C) not a driver on this network's typical stage lengths into a tropical/subtropical plateau field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** 🟥 Conflicting sources — see §1/Briefing §18. ACZ names on-site Immigration and ZIMRA Customs contacts; treat as a functioning PoE for planning purposes but do not close out the conflicting "No" flag from the separate tier-4 aggregator without further confirmation.
- **CBP / immigration hours:** Not published; presumed to track the field's 0600–1800 AD hours pending confirmation. 🟧
- **Pre-clearance / visa-transit notes:** Not found in reachable sources. Victoria Falls is widely known as a visa-on-arrival tourism gateway for many nationalities — general regional knowledge, not independently AIP-sourced here. 🟧
- **Late/overnight/diversion caveat:** 🟥 Given the 0600–1800 published hours, an overnight or very-early diversion into FVFA would likely find the field itself unstaffed absent prior arrangement — this is the single most operationally significant caveat in this pack.

---

## 9. De-icing provisioning & season

- **Availability:** **NIL.** No de-icing infrastructure or requirement identified — subtropical plateau field with no cold-season icing exposure.
- **Season:** Not applicable.
- **Provisioning:** Not applicable.
- **Commercial impact:** None expected.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not independently assessed. The most likely driver, based on available data, is **weather** (wet-season convective activity, Nov–Mar) rather than capacity or flow, given the field's low traffic-complexity profile relative to a major hub. 🟧
- **Ground-delay / flow-program exposure:** No ATFM/flow-program data found; not expected to be significant at this field.
- **On-time reliability picture:** Not assessed — no public on-time performance data found for this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not published / verify. 🟧
- **Curfew infringement consequence:** Not published — given the "subject to approval" language around extended hours (§4), an unplanned off-hours arrival/departure without prior coordination is the practical risk rather than a published fine regime.
- **Scheduling guardrails:** Build a buffer against the 0600–1800 published window until the operating-hours conflict (Briefing §18) is resolved against a primary source; do not schedule a movement that assumes H24 availability.

---

## Open items (🟧 — confirm against AIP / operator data)

- 🟥 Operating-hours conflict (12 h ACZ-stated vs. 24 h Wikipedia claim) — see [FVFA Briefing](index.md) §18.
- 🟥 Customs/immigration availability conflict (ACZ named contacts vs. tier-4 "No" flag) — see [FVFA Briefing](index.md) §18.
- Handling agent identity and turnaround times not published.
- Fuel supply hours, PCN, and any slot/CTOT regime not published.
- Load-factor/seasonality data is qualitative only — no FVFA-specific statistics found.

> **Live data — pull at planning:** fuel price, slot/CTOT file (if any materializes), current demand/load, stand allocation, extended-hours approval status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **Airports Company of Zimbabwe (ACZ) — Victoria Falls International Airport** — https://www.acz.co.zw/airports/tour/victoria-falls-international-airport (retrieved 2026-07-26). *Stand/aerobridge count, fuel suppliers, published operating hours, immigration/customs contacts, terminal description.*
- **Universal Weather and Aviation — FVFA/VFA airport page** — https://www.universalweather.com/airports/FVFA-VFA-VICTORIA-FALLS-INTERNATIONAL-AIRPORT-VICTORIA-FALLS-MASVINGO-VICTORIA-ZIMBABWE/ (retrieved 2026-07-26). *Slot/PoE flags, conflicting customs-availability field.*
- **Wikipedia — "Victoria Falls Airport"** — https://en.wikipedia.org/wiki/Victoria_Falls_Airport (retrieved 2026-07-26). *General operating-hours claim, tourism-gateway context.*
- [FVFA Briefing](index.md) — full source list and discrepancy detail.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
