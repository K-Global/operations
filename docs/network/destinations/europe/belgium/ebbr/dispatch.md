# EBBR — Brussels/Brussels-National · Dispatch Page

**EBBR / BRU** · Zaventem, Flemish Brabant, Belgium · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP direct retrieval unsuccessful this pass

> **Read-me:** Dispatcher/commercial planning aid for the sim, not a chart. Companion to the [EBBR Briefing](index.md) (informational), [Departure](departure.md) and [Arrival](arrival.md) pages. Static airport/commercial characteristics only; live fuel prices, slot files, CTOTs and demand are pulled at planning (see §Live-data). Any procedure/approach is named only — fly/verify the charted current-AIRAC version. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Role in network | **Destination** `[VAMSYS mirror 2026-07-26]` |
| Terminals in use for us | Not confirmed this session 🟧 |
| Widebody stands available | Not confirmed 🟧 |
| Slot regime | Presumed IATA Level 2/3 given hub traffic density; not independently confirmed this session 🟧 |
| Curfew | **No absolute curfew, but a hard night-slot cap (~16,000/yr) and 23:00–06:00 restricted window plus quiet-weekend-night departure ban** 🟥 |
| Primary handling agent | Not confirmed 🟧 |
| Fuel supplier(s) | Not confirmed; Jet A-1 assumed 🟧 |
| Customs / PoE for pax | **Yes** — international hub; exact hours not confirmed 🟧 |
| De-icing | Assumed available (winter climate); pad/procedure not confirmed 🟧 |

---

## 2. Terminals & concourses

- **Terminal layout:** Not confirmed in reachable sources this session. 🟧
- **Our operation uses:** Not confirmed. 🟧
- **International arrivals / CBP hall:** Confirmed as an international PoE (§8); hall-specific detail not confirmed. 🟧
- **Notes:** Confirm current terminal/gate assignment with handling before finalising a stand plan. 🟧

---

## 3. Stands / gates (by code letter & our fleet)

- **Widebody (Code E/F) stands:** Not confirmed this session — Brussels handles widebody international and cargo traffic at a major-hub scale; specific pier/stand data not obtained. 🟧
- **Stands NOT usable by our types:** Not confirmed. 🟧
- **Remote / hardstand positions:** Not confirmed. 🟧
- **Contact vs remote for our arrivals:** Not confirmed; expect a contact gate for a scheduled international arrival at a major hub as a working assumption. 🟧
- **Ground-movement stand caveats:** The field's runways are physically **shared with the adjacent Melsbroek military side (EBMB)** — see [Briefing §3.2](index.md).

---

## 4. Slots, curfew & CTOT regime

- **Slot coordination level:** Not independently confirmed this session; presumed at least Level 2 given hub traffic density. 🟧
- **Curfew / night restriction:** 🟥 **Night-slot cap of ~16,000 slots/year against ~200,000 total annual movements (2024 figures)**; between **23:00 and 06:00 only flights holding a night slot or an exception are permitted**; **"quiet weekend nights"** add a further restriction — no departures Friday 01:00–06:00, none Saturday/Sunday 00:00–06:00 (arrivals only in those windows) `[Brussels Airport Company, official FAQ, retrieved 2026-07-26]`.
- **Regulatory-change risk:** A 2023–2024 ministerial proposal sought a full night-flight ban (100% noise reduction 23:00–06:00) — contested by the operator and industry, outcome not confirmed as adopted this session. **Treat the current-in-force regime as durable-but-contested; re-check at planning.** 🟧
- **CTOT / flow control:** Standard EUROCONTROL Network Manager ATFM/CTOT practice expected for a busy EU hub. 🟧
- **Commercial impact:** The **night-slot cap and quiet-weekend-night rule** are the dominant scheduling guardrails at this field — build buffer into any rotation that could otherwise land or depart inside the restricted windows; a late arrival risks having no available night slot.

---

## 5. Handling agents & turnaround

- **Handling agent(s):** Not confirmed in reachable public sources this session. 🟧
- **Typical turnaround time for our type:** Not independently confirmed; VAMSYS mirror gives **taxi-in 16 min / taxi-out 20 min** for planning purposes `[VAMSYS mirror 2026-07-26]`.
- **Services:** Standard major-hub Code E/F provision (push-back, GPU/PCA, water/lav, catering, cabin services) expected; not individually confirmed.
- **Turnaround risk items:** Gate/stand availability at a major hub, de-icing throughput in winter, and any schedule slip toward the 23:00 restricted window are the standing risk items.

---

## 6. Load factors & seasonality

- **Demand peaks:** Not independently sourced for the K Global operation this session — treat as a standard European-hub business/leisure mix pending network-schedule confirmation. 🟧
- **Day-of-week / seasonal pattern:** Not confirmed. 🟧
- **Cargo / belly capacity:** Brussels is a significant European cargo gateway generally (multiple scheduled freighter operators); confirm K Global belly-cargo uplift plans against payload at planning. 🟧
- **Connection banks:** Not confirmed for the K Global network at this destination. 🟧

---

## 7. Fuel

- **Supplier / into-plane:** Jet A-1 assumed available as a major hub; specific into-plane provider not confirmed. 🟧
- **Uplift availability & hours:** H24 assumed; not independently confirmed. 🟧
- **Price / tankering angle:** Not assessed this session — evaluate price differential to/from base at planning. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Quality / freeze notes:** Standard Jet A-1; no cold-soak/fuel-freeze consideration specific to EBBR.

---

## 8. Customs / immigration & PoE for pax

- **Port of Entry:** Yes — major international hub.
- **CBP-equivalent / immigration hours:** Not confirmed in reachable public sources; assumed major-hub H24 coverage. 🟧
- **Pre-clearance / visa-transit notes:** Standard Schengen/non-Schengen entry per nationality; no pre-clearance programme identified.
- **Late/overnight/diversion caveat:** The **night-slot cap** is the dominant late/overnight constraint (§4) rather than immigration-desk staffing — a delayed arrival without an available night slot has real diversion consequences. 🟥

---

## 9. De-icing provisioning & season

- **Availability:** Assumed available given the Belgian winter climate; exact pad locations/procedure not confirmed this session. 🟧
- **Season:** Typical NW-European de-icing season, roughly Oct–Apr (working assumption, not confirmed specific to EBBR).
- **Provisioning:** Not confirmed. 🟧
- **Commercial impact:** Winter fog/low-vis mornings combined with any de-icing queuing are the likely seasonal delay-risk drivers — build winter schedule buffer accordingly. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 10. Typical delays / reliability

- **Signature delay driver:** Autumn/winter fog and low-vis mornings (Briefing §14), plus the **night-slot/quiet-weekend-night regime** compressing the usable operating window.
- **Ground-delay / flow-program exposure:** Presumed moderate-to-high given major-hub traffic density; not independently confirmed this session. 🟧
- **On-time reliability picture:** Not confirmed; the clearest structural risk is any schedule slip toward the 23:00 restricted window or a weekend-night departure. 🟧

---

## 11. Curfew & noise-charge commercial impact

- **Noise-charge regime:** Landing fees are **differentiated by aircraft noise/emissions performance** — quieter aircraft pay less `[Brussels Airport Company, official FAQ]`. Exact fee schedule not obtained this session. 🟧
- **Curfew infringement consequence:** The night-slot cap and quiet-weekend-night rule are regulatory restrictions, not simply a charge — an unauthorised night movement outside an assigned slot/exception is a compliance issue, not merely a fee. 🟥
- **Scheduling guardrails:** Build buffer into any rotation approaching 23:00 or a weekend-night window; treat a schedule slipping into those windows as a **diversion/compliance-risk trigger**, not a routine delay.

---

## Open items (🟧 — confirm against AIP / operator data)

- Primary AIP direct retrieval unsuccessful this session (see Briefing §18) — re-verify all figures against the skeyes eAIP.
- Terminal/gate/stand assignment for our operation.
- Ground handling agent(s) contracted for our operation and confirmed minimum turnaround time.
- Fuel into-plane provider and uplift hours.
- Slot coordination level (Level 2/3) — presumed, not confirmed.
- Exact current-in-force night-flight/QC regime — under active political dispute as of sources reviewed.
- Customs/immigration desk hours.
- Day-of-week/seasonal load pattern and belly-cargo capacity specific to the K Global operation.

> **Live data — pull at planning:** fuel price, slot/CTOT file, current ATFM/ground-delay program, demand/load, stand allocation, current night-slot regulatory status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Belgium (skeyes eAIP), AD 2 EBBR** — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.EBBR-en-GB.html — primary source of record; direct retrieval unsuccessful this session.
- Brussels Airport Company — "Frequently asked questions for neighbours" — https://www.brusselsairport.be/en/neighbours-and-spotters/faq (retrieved 2026-07-26). *Night-slot regime, noise-fee differentiation, runway-selection governance.*
- Belga News Agency — https://www.belganewsagency.eu/mobility-minister-wants-to-ban-all-night-flights-at-brussels-airport-between-2300-and-600 (retrieved 2026-07-26). *2024 QC-reform proposal.*
- Aviation24.be — https://www.aviation24.be/airports/brussels-airport-bru/brussels-airport-regrets-the-approach-by-minister-of-transport-who-wants-a-curfew-on-night-flights/ (retrieved 2026-07-26). *Operator/industry response.*
- OurAirports / SkyVector — see Briefing page for full citations.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Belgium (skeyes); K Global fields from live VAMSYS; 4-page pack. |
