# LCLK — Larnaca International · Dispatch Page

**LCLK / LCA** · Larnaca, Cyprus · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LCLK Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** — leisure/tourism spoke, not a base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Single passenger terminal (opened 2009); no company-specific concourse/pier data available 🟧 |
| Widebody stands available | Not published / verify — Category M operation; widebody-specific stand count not confirmed 🟧 |
| Slot regime | Not published / verify 🟧 |
| Curfew | Not published / verify 🟧 |
| Primary handling agent | Not published / verify — Hermes Airports operates the terminal/airport; contracted ground handler(s) for our operation not confirmed 🟧 |
| Fuel supplier(s) | Not published / verify — Jet A-1 assumed available 🟧 |
| Customs / PoE for pax | **Yes** — Cyprus' main international gateway since 1974; exact desk hours not confirmed 🟧 |
| De-icing | Not normally expected (Mediterranean climate); treated as NIL — not independently confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** LCLK operates a single, purpose-built passenger terminal that opened **7 November 2009**, with departures on the upper level and arrivals at ground level `[Wikipedia]`. It has 16 jetways (boarding bridges), 67 check-in counters, 8 self-check-in kiosks and 48 departure gates, originally designed for 7.5 million passengers/year and now handling considerably more (passenger throughput reached approximately 9.9 million in the most recent full year reported) `[Wikipedia]`. A terminal expansion programme is underway to lift capacity toward 12.4 million passengers/year, adding a new security area, further remote stands and a new western wing `[Wikipedia]`. The original 1970s-era terminal building has been retained and is privately operated by **Skylink Services Ltd** as a separate VIP/executive terminal for heads-of-state, VIPs and non-commercial/private aircraft — it is not used for scheduled commercial service `[Wikipedia]`.
- **Our operation uses:** The single main terminal; no company-specific pier/concourse assignment confirmed. 🟧
- **International arrivals / CBP-equivalent hall:** Arrivals (including international passport control) are accommodated at ground level of the main terminal `[Wikipedia]`; exact hall/desk detail not confirmed. 🟧
- **Notes:** The terminal-expansion programme (toward 12.4M pax/yr) may affect stand/gate assignment over the life of this pack — reconfirm on update. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not published / verify. 🟧
- **Stands NOT usable by our types:** Not published / verify. 🟧
- **Remote / hardstand positions:** A second, smaller apron is reported for cargo aircraft, private aircraft and (per the airport's own general layout) additional parking; a further separate area serves flying-school/privately owned light aircraft `[Wikipedia]` — this general layout is airport-wide, not confirmed against our specific stand needs. 🟧
- **Contact vs remote for our arrivals:** Not published / verify. 🟧
- **Ground-movement stand caveats:** Single-runway field (§ Briefing 13) — no cross-runway ground-routing complexity, but no stand-to-runway taxi detail is confirmed.

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not published / verify. 🟧
- **Curfew / night restriction:** Not published / verify — no curfew has been identified in reachable sources, but this is not a confirmed "none." 🟧
- **CTOT / flow control:** Not published / verify. 🟧
- **Commercial impact:** Pending confirmation of the above, no scheduling guardrail beyond the general single-runway no-redundancy consideration (Briefing §3.5) can be stated with confidence.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not published / verify — **Hermes Airports** is the airport/terminal operator (concession since 2006) `[Wikipedia]`; the ground handler(s) contracted for scheduled carriers, including our operation, are not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 9 min / taxi-out 11 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard Category M service times.
- **Services:** Not published / verify — standard push-back, GPU/PCA, potable water/lav, catering and cabin services would be the normal expectation at a major international gateway, but none of this is independently confirmed for LCLK. 🟧
- **Turnaround risk items:** The single-runway, no-redundancy field geometry (Briefing §3.3/§3.5) is the standing turnaround-risk consideration — any runway obstruction/closure has an outsized effect on schedule recovery here versus a multi-runway field.

---

## 6. Load factors & seasonality

- **Demand peaks:** Cyprus is a major Mediterranean leisure/tourism destination; LCLK's own passenger volumes have grown from under 5 million (mid-2000s) to nearly 10 million in the most recent full year reported, with 2024 key origin markets including the UK, Greece, Israel, Poland and Germany (accounting for 64% of total passengers) `[Wikipedia]` — a strong indicator of a pronounced leisure/seasonal demand pattern, though a day-of-week/monthly breakdown specific to our operation is not sourced. 🟧
- **Day-of-week / seasonal pattern:** Not independently sourced for our specific routes; treat as a strongly seasonal (summer-peaking) Mediterranean leisure market pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** LCLK handles a scheduled cargo terminal and reported roughly 35,000 tonnes of cargo in the most recent full year `[Wikipedia]`; K Global belly-cargo uplift plans for this destination are not confirmed. 🟧
- **Connection banks:** Not applicable — LCLK is a non-hub destination for K Global; connection-bank timing is set by the network schedule at the relevant hub, not by local LCLK banking.

---

## 7. Fuel

- **Supplier / into-plane:** Not published / verify. 🟧
- **Uplift availability & hours:** Jet A-1 assumed available as a major international gateway; H24 not confirmed. 🟧
- **Price / tankering angle:** Not sourced — assess price differential against the departure hub at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration expected at this sea-level Mediterranean field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** **Yes** — LCLK has been Cyprus' principal international Port of Entry since Nicosia International Airport's closure in 1974, following the Turkish invasion of Cyprus that year `[Wikipedia]`; it remains the larger of the Republic of Cyprus' two commercial airports (the other being Paphos) `[Wikipedia]`.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed coverage consistent with a major international gateway. 🟧
- **Pre-clearance / visa-transit notes:** Cyprus is an **EU member state but not part of the Schengen Area** — standard non-Schengen EU entry procedure applies for all arriving passengers regardless of onward Schengen travel; no pre-clearance programme identified at LCLK.
- **Late/overnight/diversion caveat:** No curfew or off-peak staffing gap has been identified, but neither has been positively confirmed — treat late/overnight arrival PoE staffing as unconfirmed. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Not normally expected — Mediterranean coastal climate with sea-level elevation (Briefing §14) makes routine de-icing operationally unlikely; treated as **NIL for planning purposes**, though this is a climate-based inference, not a sourced AIP statement. 🟧
- **Season:** Not applicable under the NIL assumption above.
- **Provisioning:** Not published / verify — no de-icing pad/fluid provisioning identified or expected.
- **Commercial impact:** Negligible under the NIL assumption; reconfirm if an unusual cold-weather event is ever forecast for this destination.

---

## 10. Typical delays / reliability

- **Signature delay driver:** Not sourced. The single-runway, no-redundancy field geometry (Briefing §3.3/§3.5) is the standing structural reliability consideration — any runway disruption has an outsized effect versus a multi-runway field. Strong summer leisure demand (§6) may also compress ground/stand availability at peak, though this is not independently confirmed for LCLK. 🟧
- **Ground-delay / flow-program exposure:** Not published / verify. 🟧
- **On-time reliability picture:** Not published / verify. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not published / verify. 🟧
- **Curfew infringement consequence:** Not applicable — no curfew has been confirmed to exist (§4); do not assume one is absent, however, pending primary-source confirmation.
- **Scheduling guardrails:** In the absence of confirmed curfew/slot data, the only guardrail that can be stated with confidence is the single-runway no-redundancy consideration — build schedule buffer against any runway disruption at this destination given the lack of an alternate runway.

---

## Open items (🟧 — confirm against AIP / operator data)

- Contracted ground handling agent(s) for our operation and confirmed minimum turnaround time.
- Slot-coordination level, curfew/night restriction, and any noise-charge regime.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours, including late/overnight coverage.
- Widebody/Code E stand availability and terminal pier/concourse assignment for our operation (terminal-expansion programme toward 12.4M pax/yr may change this over the life of this pack).
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- Signature delay driver and on-time reliability picture — not sourced.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **DCA Cyprus / national eAIP** — primary source of record for AD 2 LCLK; **not available from a reachable public source** — see the [LCLK Briefing](index.md) Sources section and §18 for detail.
- Wikipedia — "Larnaca International Airport" — https://en.wikipedia.org/wiki/Larnaca_International_Airport (retrieved 2026-07-25). *Terminal layout/capacity, Port-of-Entry history, Hermes Airports concession, passenger/cargo volumes.*
- OurAirports — https://ourairports.com/airports/LCLK/ (retrieved 2026-07-25). *Facility cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
