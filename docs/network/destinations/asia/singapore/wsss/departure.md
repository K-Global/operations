# WSSS — Singapore Changi · Departure Page

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

**WSSS / SIN** · Changi, East Region, Singapore · Asia

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [WSSS Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Config-dependent between 02L/02C and 20R/20C; a confirmed predominant direction was not obtained this pass 🟧 |
| Config logic | Monsoon-driven wind pattern (NE monsoon Dec–Mar, SW monsoon Jun–Sep, calmer inter-monsoon Apr–May/Oct–Nov) |
| Transition altitude | **11,000 ft** (Singapore FIR-wide) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — no formal slot/CTOT regime identified in reachable sources 🟧 |
| De-icing on departure | **NIL** — equatorial climate |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the assigned terminal, Ground/Apron routes toward the active departure runway (02L/02C or the 20-configuration reciprocal); confirm the exact taxi with Ground/Apron on the day. **RWY 02R/20L is not a routing option** — it remains RSAF-only under current status.
- **Hot spots / tight taxiways:** Not identified by name in reachable public sources this pass — flag for AIRAC confirmation. 🟧 Note the field's active Changi East construction history (multiple past NOTAM'd closures around RWY 02C/20C and the RWY 02R/20L conversion works) as a standing source of taxi-routing change.
- **Runway crossings / read-back-required points:** Not confirmed in reachable sources — expect explicit crossing/hold-short instructions given the airfield's multi-runway layout and adjacent RSAF traffic near RWY 02R/20L.
- **Low-vis taxi caveats:** Haze-season visibility reduction is the relevant low-vis taxi driver at this field (rather than fog); SMGCS/low-vis routing specifics and follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Monsoon-driven — NE monsoon (Dec–Mar) and SW monsoon (Jun–Sep) set the seasonal wind backdrop, with calmer, more variable conditions in the Apr–May/Oct–Nov inter-monsoon periods; a stated operational preference for the 02- vs 20-direction was not sourced this pass. 🟧
- **By departure direction:** Not confirmed — pull the current-AIRAC SID/runway-in-use logic at planning.
- **Noise / preferential-runway program:** Not confirmed in detail; departure corridors on the 02/20 axis run predominantly over the Singapore Strait/open water, structurally limiting residential noise-routing pressure relative to land-locked hubs elsewhere in the network. 🟧
- **Interaction with arrivals:** The airfield's three parallel-oriented runways plus the adjacent RSAF-only RWY 02R/20L, combined with the nearby Seletar and Paya Lebar Air Base traffic, drive continuous coordination between departure and arrival streams under Singapore Approach/Departure radar control — see [Briefing §3.2](index.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 02L / 02C / 20R / 20C | RNP/GNSS-based departure routes are part of Singapore's PBN implementation — verify RNP/gradient on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources — the field's largely over-water departure corridors reduce the likely priority of a residential NADP compared with land-locked hubs elsewhere in the network. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant close-in terrain — Singapore is flat, and Changi's departure corridors run predominantly over water. No specific obstacle-driven EOSID consideration identified this pass.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Haze-season visibility reduction is the field's relevant low-vis takeoff driver; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **NIL** — equatorial climate, no de-icing requirement.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Singapore Delivery 119.60 / 121.65 (H24, assumed); a datalink departure-clearance (DCL) service is also available, ground-system logon ID **WSSS** — see [`OM E — Datalink and Oceanic Procedures`](../../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Frequency sequence:** **Delivery 119.60/121.65 → Ground 121.00/121.72/121.85/122.55/124.30/125.65 → Tower/Apron (Changi Tower/Apron 121.90, Singapore Tower 118.25/118.60, Changi East Tower 122.25) → Singapore Departure 120.30/121.62 → Singapore Approach 124.05/124.60/126.30 (sector-specific).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; two tier-4 sources disagree on exact runway-to-tower mapping — treat as 🟧.)
- **CTOT / slot handling:** Not confirmed — no formal slot/CTOT regime identified in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** All civil runway ends (02L, 02C, 20R, 20C — each 4,000 m) are non-limiting for any K Global type. **RWY 02R/20L is not a departure option** under current civil-service status.
- **Density altitude / temperature:** Non-issue at 22 ft, equatorial climate — no hot-and-high penalty; standard ISA-plus-tropical-temperature performance planning applies.
- **Contamination / wet-runway:** Frequent tropical convective showers make wet-runway braking-action awareness routine; no de-icing/contamination-by-frost consideration applies given the climate.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any home-based type at WSSS.

---

## 10. Gotchas

- **RWY 02R/20L is not available for civil/commercial operations** — never expect a departure clearance onto it under current status (RSAF-only, Q4 2027 civil-service target).
- **RWY 20R has a 740 m displaced threshold** — it does not affect departure use, but confirm you are working the correct runway identity if operating from this end.
- **Sumatra squalls** can develop with little warning in the predawn/early-morning hours, April–November — brief a sudden-wind-shear-on-departure contingency in season.
- **Haze-season (Aug–Oct) visibility reduction** can affect low-vis-takeoff planning — check current PSI/visibility NOTAMs before committing to an LVTO expectation.
- **Extremely dense multi-airport TMA** (Changi/Seletar/Paya Lebar Air Base/Tengah Air Base) — expect vectoring/sequencing workload immediately after departure even under full radar control.
- **ATC frequency-to-runway mapping is inconsistent across public sources** — confirm the correct tower/ground frequency for your assigned runway locally rather than assuming a fixed mapping.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / LVTO RVR exact figures.
- Predominant/preferential runway-in-use logic (02- vs 20-configuration).
- NADP specifics, if any.
- EOSID/engine-out procedure detail per runway.
- CTOT/slot-handling regime, if any.
- Taxiway hot spots and runway-crossing points.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. Changi East construction status and RWY 02R/20L civil-service progress), CTOT/ATFM if applicable, PSI/haze status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **CAAS AIP Singapore, AD 2 WSSS** (eAIP landing page, cycle valid from 2026-03-19) — https://aim-sg.caas.gov.sg/aim-content/uploads/aip/31-MAR-2026/AIP/2026-03-19-000000/html/eAIP/SG-AD-2-WSSS-en-GB.html — primary source of record; not independently retrieved this session, see Briefing page for full note.
- **CAAS AIP Singapore, ENR 1.7** — https://aim-sg.caas.gov.sg/aim-content/uploads/aip/2025-07-24/final/2017-08-17-Non-AIRAC/html/eAIP/ENR-1.7-en-GB.html (retrieved 2026-07-26). *Transition altitude.*
- SkyVector — https://skyvector.com/airport/WSSS/Singapore-Changi-International-Airport (retrieved 2026-07-26). *Communications frequencies.*
- Learn ATC — https://www.learn-atc.com/tools/aerodrome/WSSS (retrieved 2026-07-26). *Frequency cross-check.*
- Wikipedia — "Sumatra squall" — https://en.wikipedia.org/wiki/Sumatra_squall (retrieved 2026-07-26). *Seasonal wind-shear threat detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
