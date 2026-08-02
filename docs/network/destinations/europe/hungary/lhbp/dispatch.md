# LHBP — Budapest Liszt Ferenc Intl · Dispatch Page

**LHBP / BUD** · Budapest, Hungary · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [LHBP Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not published / verify — see §2 for full terminal structure 🟧 |
| Widebody stands available | Terminal 2B **Pier B** (2018 extension; ~220 m, 27 gates, 10 jetbridges) is confirmed wide-body-capable; count of usable widebody positions for our operation not confirmed 🟧 |
| Slot regime | Not published / verify 🟧 |
| Curfew | No evidence of a hard curfew found in reachable sources; not independently confirmed either way 🟧 |
| Primary handling agent | Not published / verify 🟧 |
| Fuel supplier(s) | Jet A-1 assumed available; not individually confirmed 🟧 |
| Customs / PoE for pax | **Yes** — Schengen flows via Terminal 2A, non-Schengen international flows via Terminal 2B; exact desk hours not confirmed 🟧 |
| De-icing | Assumed available in season (typ. Oct–Apr, Central European climate); provisioning not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** **Terminal 1** — per public reporting, currently used for charter and private/business aviation flights rather than scheduled international service. **Terminal 2A** — serves flights within the Schengen area (gates A1–A33). **Terminal 2B** — serves flights outside the Schengen area; extended in 2018 by the **Pier B** project (~220 m, 27 gates, 10 jetbridges), adding capacity to serve more wide-body aircraft simultaneously. **SkyCourt** — a central landside/airside connecting concourse (shops, lounges, consolidated security) linking Terminal 2A and Terminal 2B.
- **Our operation uses:** Not published / verify — likely Terminal 2A or 2B depending on Schengen/non-Schengen routing of the specific service; confirm terminal assignment locally. 🟧
- **International arrivals / non-Schengen hall:** Non-Schengen arrivals process through Terminal 2B; Schengen-zone arrivals process through Terminal 2A without a border check. Confirm connection-time implications for any onward network leg crossing the Schengen boundary.
- **Notes:** Terminal/gate assignment detail beyond the structural T1/T2A/T2B/Pier-B split above was not confirmed in reachable public sources this build. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** **Pier B** (Terminal 2B, 2018 extension) is the one confirmed wide-body-capable concourse (27 gates, 10 jetbridges); other stand-by-code-letter detail not confirmed. 🟧
- **Stands NOT usable by our types:** Not published / verify. 🟧
- **Remote / hardstand positions:** Not published / verify. 🟧
- **Contact vs remote for our arrivals:** Not published / verify. 🟧
- **Ground-movement stand caveats:** No primary-chart hot-spot/taxi-complexity data was obtained — see [Briefing §13](index.md) and the Departure/Arrival taxi sections. 🟧

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not published / verify. 🟧
- **Curfew / night restriction:** No evidence of a hard curfew found in reachable sources; absence of evidence is not confirmation — treat as unconfirmed rather than "none." 🟧
- **CTOT / flow control:** EUROCONTROL Network Manager ATFM/CTOT regulation applies as standard practice for a scheduled-carrier EU field; LHBP-specific exposure not independently sourced. 🟧
- **Commercial impact:** Pending confirmation of the items above, hold conservative schedule buffer around any last-rotation-of-the-day planning until the slot/curfew regime is verified.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not published / verify — not individually confirmed in reachable public sources this build. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi in/out of 12/15 min** for planning purposes `[VAMSYS mirror 2026-07-26]` — 🟧 exact in/out assignment of the two figures is not certain, confirm before relying on it; build the gate turn around these plus standard service times.
- **Services:** Not published / verify — standard major-hub provision (push-back, GPU/PCA, water/lav, catering, cabin clean) assumed but not individually confirmed. 🟧
- **Turnaround risk items:** Winter de-icing-pad throughput and fog-driven flow restrictions are the most likely seasonal risk items pending confirmation (see §9/§10).

---

## 6. Load factors & seasonality

- **Demand peaks:** Not published / verify — no LHBP-specific demand/seasonality data confirmed for the K Global operation this build. 🟧
- **Day-of-week / seasonal pattern:** Treat as a standard Central European leisure/business mix pending network-schedule confirmation. 🟧
- **Cargo / belly capacity:** Not published / verify — belly-cargo uplift plans should be confirmed against payload at planning. 🟧
- **Connection banks:** Not published / verify — cross-ref the route register for inbound/outbound wave structure relevant to this destination. 🟧

---

## 7. Fuel

- **Supplier / into-plane:** Not published / verify. 🟧
- **Uplift availability & hours:** Jet A-1 assumed available as a major hub; H24 status not independently confirmed. 🟧
- **Price / tankering angle:** Not published / verify — assess price differentials to the home hub/base per leg at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1 assumed; no cold-soak/fuel-freeze consideration specific to LHBP identified.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — non-Schengen international flows process through **Terminal 2B**; Schengen-zone flows through **Terminal 2A** without a border check.
- **Immigration hours:** Not published / verify; assumed to track scheduled international operating hours. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** Not published / verify — confirm off-peak immigration desk staffing before planning a late/diverted arrival. 🟧

---

## 9. De-icing provisioning & season

- **Availability:** Assumed available given the recognised regional de-icing season; specific pad location/provisioning not confirmed. 🟧
- **Season:** Typical Central European de-icing season, roughly **Oct–Apr** (regional climatology; not LHBP-specific statistic).
- **Provisioning:** Not published / verify. 🟧
- **Commercial impact:** Winter fog/inversion days combined with any de-icing-pad queuing are the likely seasonal delay-risk driver at this field, pending confirmation. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Winter fog/temperature-inversion and de-icing season is the most likely driver by regional climatology; not confirmed as an LHBP-specific statistic. 🟧
- **Ground-delay / flow-program exposure:** Not published / verify. 🟧
- **On-time reliability picture:** Not published / verify — treat winter mornings as the highest-risk planning window pending confirmation. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Not published / verify. 🟧
- **Curfew infringement consequence:** Not applicable pending confirmation of whether a curfew exists at all (§4). 🟧
- **Scheduling guardrails:** Until the slot/curfew regime is confirmed, hold conservative buffer on the last rotation of the day serving this field.

---

## Open items (🟧 — confirm against AIP / operator data)

- Current terminal/gate assignment for our operation (T2A vs T2B, or specific pier/stand).
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Exact taxi-in vs taxi-out assignment of the VAMSYS 12/15 min figures.
- Slot-coordination level and any curfew/night restriction.
- Fuel into-plane provider and uplift hours.
- Immigration/customs desk hours (Terminal 2B).
- EUROCONTROL CTOT/ATFM specifics for LHBP.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.
- De-icing pad location and provisioning detail.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **HungaroControl eAIP (AIP Hungary, AD 2 LHBP)** — portal not accessible via a public raw fetch this build; not used as a citation for any figure above (retrieval attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/LHBP/ (retrieved 2026-07-26).
- Wikipedia — "Budapest Ferenc Liszt International Airport" — https://en.wikipedia.org/wiki/Budapest_Ferenc_Liszt_International_Airport (retrieved 2026-07-26). *Terminal structure (T1/T2A/T2B/Pier B/SkyCourt).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
