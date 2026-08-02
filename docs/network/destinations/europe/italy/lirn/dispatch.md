# LIRN — Capodichino · Dispatch Page

**LIRN / NAP** · Naples (Napoli), Campania, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LIRN Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination / origin** — South-Italy network field, not a base `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | **Terminal 1** (sole passenger terminal; airside sections A, B, C) |
| Widebody stands available | 🟧 Not confirmed — reported apron figures are inconsistent between sources (§Briefing §13) |
| Slot regime | 🟧 Not confirmed as IATA Level 3; treat as Level 1/2 pending confirmation |
| Curfew | 🟥 **Discrepant published windows** — 23:00–06:00 (charter) vs. 22:30–03:30 (general, ENAC) |
| Primary handling agent | 🟧 Not confirmed |
| Fuel supplier(s) | 🟧 Jet A-1 assumed; not individually confirmed |
| Customs / PoE for pax | **Yes** — T1 international sections; exact hours not confirmed 🟧 |
| De-icing | 🟧 Not confirmed — Mediterranean coastal field, minimal/seasonal need expected |

---

## 2. Terminals & concourses

- **Terminal layout:** Single passenger terminal, **Terminal 1**, with airside sections **A** (departures, most retail), **B** and **C** (non-Schengen departures use section C). No jet bridges — boarding is by bus or, in some instances, walk-boarding.
- **Our operation uses:** Terminal 1, section per route (Schengen vs. non-Schengen split at check-in/security; C for non-Schengen).
- **International arrivals / CBP-equivalent hall:** International arrivals process through T1; exact hall/desk arrangement not confirmed. 🟧
- **Notes:** No jet bridges at this field — plan bus/walk-boarding turnaround time accordingly for any widebody or high-capacity type. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** 🟧 Not confirmed. Reported apron data is inconsistent between sources — one figure gives 29 total stands (9 self-manoeuvring), another gives three aprons (Apron 1: 26 stands — 6 self-manoeuvring/20 nose-in; Apron 2: 6 nose-in; Apron 3: 4 nose-in with A-VDGS) — neither is operator/AIP-grade confirmed for widebody suitability specifically.
- **Stands NOT usable by our types:** Not confirmed — verify with handling given the apron-count uncertainty.
- **Remote / hardstand positions:** Likely present given the nose-in/self-manoeuvring stand mix reported; not independently confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed — no jet bridges at this field means bus transfer is the norm regardless of contact/remote stand.
- **Ground-movement stand caveats:** The narrower **south taxiway (TS, ~15 m)** versus the wider **north taxiway (TN, ~23 m)** may constrain routing for larger types — see [Briefing §13](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** 🟧 Not confirmed as IATA Level 3 in reachable sources — treat as Level 1/2 pending confirmation.
- **Curfew / night restriction:** 🟥 Two Gesac-published statements disagree: one gives a **23:00–06:00 local** restriction specific to charter flights; another gives a **22:30–03:30 local** general closure citing an ENAC ruling, with an exception for exceptional delays. Neither has been reconciled against the primary AIP this pass — **treat the field as curfew-active across the union of both windows** until confirmed.
- **CTOT / flow control:** Not confirmed — general EUROCONTROL Network Manager ATFM/CTOT practice may apply in peak/adverse conditions as at any EU field; not independently LIRN-sourced. 🟧
- **Commercial impact:** The curfew-window uncertainty is itself the commercial risk — build a conservative buffer against the **earlier** of the two published closure times (22:30) rather than assuming the later charter-only window applies to scheduled service.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 10 min / taxi-out 12 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — build the gate turn around these plus standard service times and bus-boarding allowance (no jet bridges).
- **Services:** Push-back (nose-in stands imply it is required for most positions), GPU/PCA, water/lav, catering — standard provision assumed for a major regional airport; not individually confirmed.
- **Turnaround risk items:** No-jet-bridge bus/walk boarding adds turnaround variability versus a jet-bridge field; apron-count uncertainty (§3) may compress stand availability at peak.

---

## 6. Load factors & seasonality

- **Demand peaks:** Naples is the busiest airport in Southern Italy (~13 million pax/year class, per Assaeroporti-sourced Wikipedia statistics) with strong leisure/VFR demand tied to Campania/Amalfi Coast tourism — expect a pronounced summer peak. 🟧 (Not independently K-Global-route-sourced.)
- **Day-of-week / seasonal pattern:** Leisure-skewed seasonal pattern expected (summer high season); not independently confirmed for our specific route mix. 🟧
- **Cargo / belly capacity:** Not confirmed — general regional-airport cargo volumes are modest relative to major hubs. 🟧
- **Connection banks:** Not applicable — LIRN is a destination/origin field, not a hub, for K Global.

---

## 7. Fuel

- **Supplier / into-plane:** Not confirmed in reachable public sources. 🟧
- **Uplift availability & hours:** Assumed available for scheduled commercial ops; H24 status not confirmed. 🟧
- **Price / tankering angle:** Not assessed this pass — confirm at planning per leg. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 expected; no cold-soak/fuel-freeze consideration relevant to this short/medium-haul European field.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — Terminal 1 international sections (non-Schengen split via section C).
- **CBP-equivalent / immigration hours:** Not confirmed. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** The unresolved curfew window (§4) is the dominant late/overnight constraint here — do not plan a schedule that assumes desk availability past either published closure time. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** 🟧 Not confirmed — Mediterranean coastal field at 294 ft, minimal/seasonal de-icing need expected at most.
- **Season:** Not confirmed; if required at all, expect at most occasional winter events rather than a dedicated season.
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Low relative to Central/Northern European fields — treat as a minor seasonal risk pending confirmation. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** 🟧 The terrain-ringed single-runway approach environment (see Briefing §3) is the standing safety/TEM item; no field-specific delay-frequency statistic was found this pass to attribute a signature commercial delay driver.
- **Ground-delay / flow-program exposure:** Not confirmed — general EU flow-management practice may apply at peak. 🟧
- **On-time reliability picture:** Not independently sourced for this field. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** 🟧 The operator is reported to have run a noise-monitoring/sanctioning regime since circa 2005 (reported to be the first of its kind in Italy) with a "balanced" unidirectional runway-use pattern (see Briefing §12) — exact current charge structure not confirmed.
- **Curfew infringement consequence:** Not confirmed — treat the unresolved curfew window (§4) as a hard scheduling constraint pending clarification, not merely a charge-based deterrent.
- **Scheduling guardrails:** Build buffer against the **earlier** published closure time (22:30 local) for both arrivals and departures until the discrepancy is resolved (§18).

---

## Open items (🟧 — confirm against AIP / operator data)

- Curfew window reconciliation (23:00–06:00 charter-only vs. 22:30–03:30 general) — unresolved.
- Slot coordination level (assumed Level 1/2, not confirmed).
- Handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Customs/immigration desk hours.
- Widebody stand availability/count — two inconsistent apron figures found.
- Day-of-week/seasonal load pattern specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current Etna VONA/ASHTAM status affecting South Italy airspace generally. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- Gesac (Aeroporti di Napoli) — "Runway data" — https://www.aeroportodinapoli.it/en/dati-di-pista (retrieved 2026-07-26). *Curfew statements, ICAO classification.*
- Wikipedia — "Naples International Airport" — https://en.wikipedia.org/wiki/Naples_International_Airport (retrieved 2026-07-26). *Terminal structure, traffic statistics, apron/stand figures.*
- OurAirports — https://ourairports.com/airports/LIRN/ (retrieved 2026-07-26). *Cross-check, tier-4.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
