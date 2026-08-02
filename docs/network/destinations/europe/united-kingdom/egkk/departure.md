# EGKK — Gatwick · Departure Page

**EGKK / LGW** · Crawley, West Sussex, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EGKK Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **08R or 26L (main)** — essentially all departures use the main runway; **08L/26R (standby)** only if the main runway is closed/unavailable |
| Config logic | Wind-driven (~74% of takeoffs westbound/26-direction); standby runway is not an independent-parallel departure option — it substitutes for the main runway when the main runway is out of service |
| Transition altitude | **6,000 ft** `[UK AIP AD 2.17]` 🟩 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordinated Level 3 (ACL); EUROCONTROL ATFM/CTOT expected in peak/adverse conditions 🟧 |
| De-icing on departure | Available — "by arrangement with handling agent"; no dedicated pad locations confirmed |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From North or South Terminal, Ground/Tower routes toward the main runway (08R/26L) via the field's lettered taxiway network; confirm the exact taxi with Ground on the day. If the standby runway (08L/26R) is in use as the operational runway, routing changes accordingly — expect a NOTAM/ATIS callout.
- **Hot spots / tight taxiways:** 🟧 A dated AIP-chart mirror (AIRAC 07/2019) identifies **HS1 (Foxtrot Romeo RET)** — vacating 26L via taxiway FR does **not** require clearance to cross 26R onto taxiway J (can look like a runway crossing); **HS2 (Taxiway Juliet)** — caution where the taxiway deviates north; **HS3 (26R TODA)** — take-off distance for 26R begins at a specific demarcation point given the runway's dual taxiway/standby-runway role. Not independently re-confirmed against the current-cycle AIP text this pass — verify current chart.
- **Runway crossings / read-back-required points:** Taxiway J crosses near the standby runway (26R) at the HS1 area described above — expect an explicit ATC instruction; do not assume a runway crossing is required by default at this point.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies consistent with the field's CAT III main-runway environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Prevailing wind drives ~74% westbound (26-direction) takeoffs; the easterly (08) reciprocal is used when wind dictates.
- **By departure direction:** All departures use the main runway (08R/26L) in normal operations regardless of direction; the standby runway substitutes only when the main runway is unavailable, not as a direction-driven independent option.
- **Noise / preferential-runway program:** Noise Preferential Routes (NPRs) apply to departing jets; **Route 4** (westbound then a 180° turn back east) is a confirmed named departure route, subject to an active 2026 airspace-change consultation to reintroduce RNAV procedures `[gatwickairport.com]`.
- **Interaction with arrivals:** Because 08L/26R is not used as an independent parallel, departures and arrivals share the single effective runway sequentially — expect ATC to interleave departures within the arrival stream rather than run simultaneous independent operations.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| **Route 4** (named departure route) | 26 (westbound, 180° turn back east) | Under 2026 airspace-change consultation to reintroduce RNAV procedures 🟧 | Confirmed by name; verify current chart before use |
| Other SIDs not confirmed in reachable research pass 🟧 | 08R / 26L / (08L / 26R if standby in use) | Verify RNP/gradient requirement on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed this pass — NPRs apply generically to departing jets; specific NADP1/2 preference not itemised in sources reached. 🟧
- **Early turn / altitude constraints:** Published per SID — Route 4's initial-westbound-then-180°-turn structure is a confirmed example; verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Sussex/Surrey lowland — no significant terrain. **Lit obstacles are charted near both runways** (AIP AD 2.10 lists tower cranes near the South Terminal railway station area at 294–297 ft elevation/98–110 ft AGL, steady red, plus an obstruction light at 228 ft elevation near the 26R take-off area) — treat as a live NOTAM-watch item.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies on the main runway consistent with CAT III capability; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** "By arrangement with handling agent" per AIP AD 2.4; movement-area de-icing uses potassium acetate primarily (ethylene glycol in exceptional circumstances) `[UK AIP AD 2.7]`. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Gatwick Delivery **121.955** (when directed by ATC) `[AIP chart mirror, tier-4 — needs current-AIRAC cross-check]`.
- **Frequency sequence:** **Delivery 121.955 → Ground 121.805 → Tower 124.230/134.230 → Gatwick Director 118.95/126.82/129.02** (sector-specific). Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated** (ACL); EUROCONTROL ATFM/CTOT regulation expected in peak/adverse conditions, compounded by the single-effective-runway capacity structure. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Main runway (08R/26L, 3,317 m) is non-limiting for any K Global type; standby runway (08L/26R, 2,561 m) is also non-limiting for our fleet when in use. **562,000 kg weight limit** applies to both runways — not a factor for our Category L fleet.
- **Density altitude / temperature:** Non-issue at 203 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter weather is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at EGKK.

---

## 10. Gotchas

- **The standby runway (08L/26R) is not an independent-parallel option** — never plan a simultaneous departure/arrival split across both runways; it substitutes for the main runway only when the main runway is unavailable.
- **Taxiway J / HS1 area near 26R** can look like a runway crossing but is not always one by default — confirm the specific ATC instruction (tier-4 sourced, verify current chart).
- **Route 4's westbound-then-180°-turn structure** is under active airspace-change review (2026) — confirm the current procedure, don't assume a legacy routing.
- **Lit tower cranes near the South Terminal railway station area** — treat as a live NOTAM item.
- **Night period 2300–0700 is a hard constraint** — a late-day departure delay risks the movement being barred outright; build buffer into the last rotation.
- **Main-runway disruption has an outsized capacity impact** given the single-effective-runway structure — expect ATFM flow measures during any main-runway unavailability event.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names (beyond the confirmed Route 4) and RNP/gradient specifics per runway.
- Take-off minima / exact figures.
- NADP preference and noise-routing detail.
- LVTO RVR minima.
- EOSID/engine-out procedure detail per runway.
- HS1/HS2/HS3 hot-spot confirmation against the current-cycle AIP.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. main/standby runway status and crane/obstacle status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK AIP (NATS AIS), AD 2‑EGKK**, AIRAC cycle effective 2022‑06‑16 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2022-06-16-AIRAC/html/eAIP/EG-AD-2.EGKK-en-GB.html (retrieved 2026-07-26). *Runway/taxiway data, obstacles, transition altitude.*
- AIP chart mirror (AIRAC 07/2019) — https://airportcodes.aero/charts/EGKK.pdf (retrieved 2026-07-26). *Frequencies, hot spots.*
- Gatwick Airport — "Route 4" — https://www.gatwickairport.com/company/noise-airspace/route-4.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
